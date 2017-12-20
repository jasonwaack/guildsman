(ns com.billpiel.guildsman.data-type
  (:require [com.billpiel.guildsman.shape :as sh]
            [clojure.walk :as w]))

(def float-kw :float)
(def list-float-kw (keyword "list(float)"))
(def double-kw :double)
(def int-kw :int32)
(def list-int-kw (keyword "list(int)"))
(def uint-kw :uint8)
(def string-kw :string)
(def long-kw :int64)
(def bool-kw :bool)
(def list-bool-kw (keyword "list(bool)"))
(def type-kw :type)
(def list-type-kw (keyword "list(type)"))
(def tensor-kw :tensor)
(def list-tensor-kw (keyword "list(tensor)"))
(def shape-kw :shape)
(def list-shape-kw (keyword "list(shape)"))
(def list-kw :list)

;; TODO multimethods and protocols???

(defn is-type?-fn
  [t]
  #(= (type %) t))

(def is-goole-pb-byte-string?
  (is-type?-fn (type com.google.protobuf.ByteString/EMPTY)))

(defn bytes->ints
  [ba]
  (let [ib (-> (java.nio.ByteBuffer/wrap ba)
               (.order java.nio.ByteOrder/LITTLE_ENDIAN)
               (.asIntBuffer))
        ia (int-array (.remaining ib))]
    (.get ib ia)
    (vec ia)))

(defn bytes->floats
  [ba]
  (let [ib (-> (java.nio.ByteBuffer/wrap ba)
               (.order java.nio.ByteOrder/LITTLE_ENDIAN)
               (.asFloatBuffer))
        ia (float-array (.remaining ib))]
    (.get ib ia)
    (vec ia)))

(defn bytes->doubles
  [ba]
  (let [ib (-> (java.nio.ByteBuffer/wrap ba)
               (.order java.nio.ByteOrder/LITTLE_ENDIAN)
               (.asDoubleBuffer))
        ia (double-array (.remaining ib))]
    (.get ib ia)
    (vec ia)))

(defn string?->bytes
  [v]
  (cond (string? v)
        (.getBytes v "UTF-8")
        (= (type v) (type (byte-array 0)))
        v
        :else (throw (Exception. (str "Not a string or byte-array " v)))))

(declare protobuf->dt)

(defn tensor-attr->vec
  [{:keys [dtype tensor-shape tensor-content] :as t}]
  (if tensor-content
    (if-let [f (some-> dtype protobuf->dt :from-bytes)]
      (sh/apply-shape-to-vec
       (sh/tensor-attr-shape->vec tensor-shape)
       (f (.toByteArray tensor-content)))
      (throw (Exception. (str "tensor-attr->vec couldn't handle " t))))
    (if-let [f (some-> dtype protobuf->dt :pb-tensor-key)]
      (f t)
      (throw (Exception. (str "tensor-attr->vec couldn't handle " t))))))

(declare protobuf->dt)
(declare pb-attr-key->dt)

(defn pb-list-attr->vec
  [l]
  (if (= l {})
    []
    (let [[ty v] (first l)
          dt (some-> ty pb-attr-key->dt) 
          f (or (:pb-attr-fn dt)
                (:scalar-fn dt))]
      (if f
        (mapv f v)
        (throw (Exception. (str "pb-list-attr->vec couldn't handle " l)))))))

;; this is crazy
(def data-types
  [{:kw :float 
    :native 1 
    :byte-size 4 
    :scalar? (is-type?-fn java.lang.Float) ;; (float? 1.0) => true  UH OH!
    :array? (is-type?-fn (type (float-array 0)))
    :scalar java.lang.Float 
    :array (type (float-array 0)) 
    :scalar-fn float 
    :array-fn float-array
    :protobuf :dt-float
    :from-bytes bytes->floats
    :pb-tensor-key :float-val}
   {:kw :double 
    :native 2 
    :byte-size 8 
    :scalar? double? 
    :array? (is-type?-fn (type (double-array 0)))
    :scalar java.lang.Double 
    :array (type (double-array 0)) 
    :scalar-fn double 
    :array-fn double-array
    :protobuf :dt-double
    :from-bytes bytes->doubles}
   {:kw :int32 
    :native 3 
    :byte-size 4 
    :scalar? (is-type?-fn java.lang.Integer) 
    :array? (is-type?-fn (type (int-array 0)))
    :scalar java.lang.Integer
    :scalar-fn int
    :array-fn int-array
    :protobuf :dt-int32
    :from-bytes bytes->ints
    :pb-attr-key :i
    :pb-tensor-key :int-val}
   {:kw :uint8 
    :native 4  
    :byte-size 1
    :scalar? (constantly false)  
    :array? (constantly false)
    :scalar nil
    :scalar-fn byte
    :array-fn nil}

   {:kw :string 
    :native 7  
    :byte-size nil
    :byte-size-fn (fn [v]
                    (let [v' (if (sequential? v)
                               (flatten v)
                               [v])]
                      (apply + (map count v'))))
    :scalar? (is-type?-fn (type (byte-array 0)))  
    :array? (constantly false)
    :scalar (type (byte-array 0))
    :scalar-fn byte-array
    :array-fn (fn [v]
                (if (sequential? v)
                  (into-array v)
                  (to-array (repeat v (byte-array 0)))))
    :protobuf :dt-string
    :pb-attr-key :s
    :pb-attr-fn #(if (is-goole-pb-byte-string? %)
                   (String. (.toByteArray %))
                   (str %))
    :from-bytes #(String. %)
    :to-bytes-fn identity}
   {:kw :int64 
    :native 9  
    :byte-size 8 
    :scalar? int?  
    :array? (is-type?-fn (type (long-array 0)))
    :scalar java.lang.Long
    :scalar-fn long
    :array-fn long-array
    :protobuf :dt-int64}
   {:kw :bool 
    :native 10  
    :byte-size 1 
    :scalar? boolean?
    :array? (is-type?-fn (type (boolean-array 0)))
    :scalar java.lang.Boolean
    :scalar-fn boolean
    :array-fn boolean-array
    :pb-attr-key :b}
   {:kw :type
    :pb-attr-fn #(-> % protobuf->dt :kw)
    :pb-attr-key :type}
   {:kw :list
    :pb-attr-fn pb-list-attr->vec
    :pb-attr-key :list}
   {:kw :tensor
    :pb-attr-fn tensor-attr->vec
    :pb-attr-key :tensor}
   {:kw :shape
    :pb-attr-fn  sh/tensor-attr-shape->vec
    :pb-attr-key :shape}
   {:kw :resource
    :native 20}
   {:kw :variant
    :native 21}])

(def kw->dt
  (into {}
        (for [dt data-types]
          [(:kw dt) dt])))

(def native->dt
  (into {}
        (for [dt data-types]
          [(:native dt) dt])))

(def protobuf->dt
  (into {}
        (for [dt data-types]
          [(:protobuf dt) dt])))

(def pb-attr-key->dt
  (into {}
        (for [dt data-types]
          [(:pb-attr-key dt) dt])))

(defn is-of-data-type?
  [o dt]
  (if-let [f (:scalar? dt)]
    (f o)
    false))

(defn is-array-of-data-type?
  [o dt]
  (if-let [f (:array? dt)]
    (f o)
    false))

(defn data-type-of
  [o]
  (first (filter (partial is-of-data-type? o)
                 data-types)))

(defn data-type-of-seq
  [a]
  (when-let [[f] a]
    (data-type-of f)))

(defn data-type-of-whatever
  [v]
  (if (sequential? v)
    (recur (first v))
    (data-type-of v)))

(defn data-type-of-array
  [a]
  (first (filter (partial is-array-of-data-type? a)
                 data-types)))

(defn scalar-array? [a] (-> a data-type-of-array nil? not))

(def some-other-array-types #{(type (to-array [] ))})

(defn some-other-array? [a] (-> a type some-other-array-types nil? not))

(defn array? [a] (or (scalar-array? a)
                     (some-other-array? a)))


(defn seq->array
  [s]
  ((-> s
       data-type-of-seq
       :array-fn)
   s))

(defn md-array->vecs
  [a]
  (if (array? a)
    (mapv md-array->vecs a)
    a))

(defn seq->md-array
  [v]
  (if (sequential? v)
    (if-let [dt (data-type-of-seq v)]
      ((:array-fn dt) v)
      (to-array (map seq->md-array v)))
    v))

(defn seq->flat-array
  [v]
  (if (sequential? v)
    (let [v' (flatten v)
          dt (data-type-of-seq v')]
      ((:array-fn dt) v'))
    v))

(defn ->tf-attr-val [ty v & [dims]]
  (if-let [dt (data-type-of-array v)]
    (if (-> dt :kw (= ty))
      v
      (throw (Exception. (format "NOT IMPLEMENTED. Dest type and current type do not match. %s %s"
                                 ty v))))
    (let [dims' (or dims (sh/num-dimensions-seq v))]
      (case dims'
        0 ((-> ty kw->dt :scalar-fn) v)
        1 ((-> ty kw->dt :array-fn) v)
        (to-array (map #(->tf-attr-val ty % (dec dims'))
                       v))))))

(defn convert-vecs
  [v f]
  (w/prewalk #(if (coll? %)
                %
                (f %))
             v))

(defn convert-whatever
  [v dt-kw]
  (let [{:keys [scalar-fn]} (kw->dt dt-kw)]
    (when (nil? scalar-fn)
      (throw (Exception. (str "No scalar function found for type: " dt-kw))))
    (if (sh/scalar? v)
      (scalar-fn v)
      (convert-vecs v scalar-fn)))) 

(defn maybe-convert-whatever
  [v dt-kw]
  (if (= (-> v data-type-of-whatever :kw) dt-kw)
    v
    (if (= dt-kw string-kw)
      v
      (convert-whatever v dt-kw))))


(defn mk-typed-2d-array
  [v type-class array-fn]
  (let [cv (count v)
        r (make-array type-class cv 0)]
    (->> v
         (map-indexed (fn [i la]
                        #_(clojure.pprint/pprint [r i
                                                (array-fn la)])
                        (aset r i
                              (array-fn la))))
         dorun)
    r))


(defn HACK-string?
  [v]
  (or (string? v)
      (and (sequential? v)
           (-> v first string?))))

(defn HACK-string?->bytes
  [v]
  (if (HACK-string? v)
    (if (string? v)
      (.getBytes v)
      (w/postwalk (fn [v]
                    (if (string? v)
                      (.getBytes v)
                      v))
                  v))
    v))
