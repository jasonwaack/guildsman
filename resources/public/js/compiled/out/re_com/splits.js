// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.splits');
goog.require('cljs.core');
goog.require('re_com.util');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
/**
 * Return a drag handle to go into a vertical or horizontal splitter bar:
 *  orientation: Can be :horizonal or :vertical
 *  over?:       When true, the mouse is assumed to be over the splitter so show a bolder color
 */
re_com.splits.drag_handle = (function re_com$splits$drag_handle(orientation,over_QMARK_){
var vertical_QMARK_ = cljs.core._EQ_.call(null,orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var length = "20px";
var width = "8px";
var pos1 = "3px";
var pos2 = "3px";
var color = (cljs.core.truth_(over_QMARK_)?"#999":"#ccc");
var border = ["solid 1px ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)].join('');
var flex_flow = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((vertical_QMARK_)?"row":"column"))," nowrap"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display-flex",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_flow_style.call(null,flex_flow),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),((vertical_QMARK_)?width:length),new cljs.core.Keyword(null,"height","height",1025178622),((vertical_QMARK_)?length:width),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos1,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos1,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),((vertical_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),pos2,new cljs.core.Keyword(null,"height","height",1025178622),length,new cljs.core.Keyword(null,"border-right","border-right",-668932860),border], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),length,new cljs.core.Keyword(null,"height","height",1025178622),pos2,new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border], null))], null)], null)], null);
});
re_com.splits.hv_split_args_desc = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the left (or top) panel"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"markup to go in the right (or bottom) panel"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"auto",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"applied to the outer container of the two panels. Equivalent to CSS style ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"flex"], null),".",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Examples: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"initial"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"auto"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"none"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"100px"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"2"], null)," or a generic triple of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"grow shrink basis"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"width of the outer container of the two panels. A CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"height of the outer container of the two panels. A CSS height style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"double -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user moves the splitter bar (on mouse up, not on each mouse move). Given the new ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null)," percentage split"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(50),new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"initial split percentage for ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":panel-1"], null),". Can be double value or string (with/without percentage sign)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the splitter"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"8px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"thickness of the margin around the panels"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated, applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override, applied to outer container"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed, applied to outer container"], null)], null)], null);
/**
 * Returns markup for a horizontal layout component
 */
re_com.splits.h_split = (function re_com$splits$h_split(var_args){
var args__11234__auto__ = [];
var len__11227__auto___18292 = arguments.length;
var i__11228__auto___18293 = (0);
while(true){
if((i__11228__auto___18293 < len__11227__auto___18292)){
args__11234__auto__.push((arguments[i__11228__auto___18293]));

var G__18294 = (i__11228__auto___18293 + (1));
i__11228__auto___18293 = G__18294;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__18286){
var map__18287 = p__18286;
var map__18287__$1 = ((((!((map__18287 == null)))?((((map__18287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18287):map__18287);
var args = map__18287__$1;
var size = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args,"h-split")))){
} else {
throw (new Error("Assert failed: (validate-args-macro hv-split-args-desc args \"h-split\")"));
}

var container_id = cljs.core.gensym.call(null,"h-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (mouse_x){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_width = container.clientWidth;
var c_left_x = container.offsetLeft;
var relative_x = ((mouse_x - c_left_x) + new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_x / c_width));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (p1__18284_SHARP_){
return cljs.core._EQ_.call(null,p1__18284_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
if(cljs.core.truth_(_LT_html_GT__QMARK_.call(null,event.relatedTarget))){
return stop_drag.call(null);
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientX));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"row nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function() { 
var G__18295__delegate = function (p__18289){
var map__18290 = p__18289;
var map__18290__$1 = ((((!((map__18290 == null)))?((((map__18290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18290):map__18290);
var _splitter_size = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__18290__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"rc-h-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"vertical","vertical",718696748),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"rc-h-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
};
var G__18295 = function (var_args){
var p__18289 = null;
if (arguments.length > 0) {
var G__18296__i = 0, G__18296__a = new Array(arguments.length -  0);
while (G__18296__i < G__18296__a.length) {G__18296__a[G__18296__i] = arguments[G__18296__i + 0]; ++G__18296__i;}
  p__18289 = new cljs.core.IndexedSeq(G__18296__a,0,null);
} 
return G__18295__delegate.call(this,p__18289);};
G__18295.cljs$lang$maxFixedArity = 0;
G__18295.cljs$lang$applyTo = (function (arglist__18297){
var p__18289 = cljs.core.seq(arglist__18297);
return G__18295__delegate(p__18289);
});
G__18295.cljs$core$IFn$_invoke$arity$variadic = G__18295__delegate;
return G__18295;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__18287,map__18287__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
});

re_com.splits.h_split.cljs$lang$maxFixedArity = (0);

re_com.splits.h_split.cljs$lang$applyTo = (function (seq18285){
return re_com.splits.h_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18285));
});

/**
 * Returns markup for a vertical layout component
 */
re_com.splits.v_split = (function re_com$splits$v_split(var_args){
var args__11234__auto__ = [];
var len__11227__auto___18306 = arguments.length;
var i__11228__auto___18307 = (0);
while(true){
if((i__11228__auto___18307 < len__11227__auto___18306)){
args__11234__auto__.push((arguments[i__11228__auto___18307]));

var G__18308 = (i__11228__auto___18307 + (1));
i__11228__auto___18307 = G__18308;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic = (function (p__18300){
var map__18301 = p__18300;
var map__18301__$1 = ((((!((map__18301 == null)))?((((map__18301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18301):map__18301);
var args = map__18301__$1;
var size = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"size","size",1098693007),"auto");
var width = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var on_split_change = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"on-split-change","on-split-change",-1635241917));
var initial_split = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),(50));
var splitter_size = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"splitter-size","splitter-size",245247616),"8px");
var margin = cljs.core.get.call(null,map__18301__$1,new cljs.core.Keyword(null,"margin","margin",-995903681),"8px");
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.splits.hv_split_args_desc),args,"v-split")))){
} else {
throw (new Error("Assert failed: (validate-args-macro hv-split-args-desc args \"v-split\")"));
}

var container_id = cljs.core.gensym.call(null,"v-split-");
var split_perc = reagent.core.atom.call(null,parseInt(initial_split));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var over_QMARK_ = reagent.core.atom.call(null,false);
var stop_drag = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
if(cljs.core.truth_(on_split_change)){
on_split_change.call(null,cljs.core.deref.call(null,split_perc));
} else {
}

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var calc_perc = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (mouse_y){
var container = re_com.util.get_element_by_id.call(null,container_id);
var offsets = re_com.util.sum_scroll_offsets.call(null,container);
var c_height = container.clientHeight;
var c_top_y = container.offsetTop;
var relative_y = ((mouse_y - c_top_y) + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(offsets));
return (100.0 * (relative_y / c_height));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var _LT_html_GT__QMARK_ = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (p1__18298_SHARP_){
return cljs.core._EQ_.call(null,p1__18298_SHARP_,document.documentElement);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
if(cljs.core.truth_(_LT_html_GT__QMARK_.call(null,event.relatedTarget))){
return stop_drag.call(null);
} else {
return null;
}
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousemove = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
return cljs.core.reset_BANG_.call(null,split_perc,calc_perc.call(null,event.clientY));
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mousedown = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
event.preventDefault();

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseover_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,true);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var mouseout_split = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (){
return cljs.core.reset_BANG_.call(null,over_QMARK_,false);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_container_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,style,attr,in_drag_QMARK_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-split display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),container_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,size),re_com.box.flex_flow_style.call(null,"column nowrap"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null),style)], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
stop_drag.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousemove.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
], null):null),attr);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_panel_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$,in_drag_QMARK_,percentage){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(percentage)," 1 0px"].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),(cljs.core.truth_(in_drag_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
var make_splitter_attrs = ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (class$){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mousedown.call(null,event);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseover_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function (event){
mouseout_split.call(null);

return null;
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,re_com.box.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(splitter_size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"row-resize"], null),(cljs.core.truth_(cljs.core.deref.call(null,over_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f8f8f8"], null):null))], null);
});})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
;
return ((function (container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin){
return (function() { 
var G__18309__delegate = function (p__18303){
var map__18304 = p__18303;
var map__18304__$1 = ((((!((map__18304 == null)))?((((map__18304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18304.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18304):map__18304);
var _splitter_size = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_splitter-size","_splitter-size",-2092162822));
var panel_2 = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"panel-2","panel-2",244198907));
var panel_1 = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"panel-1","panel-1",998274139));
var attr = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _margin = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_margin","_margin",1508241828));
var _on_split_change = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_on-split-change","_on-split-change",1230437286));
var _width = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_width","_width",-75982426));
var _size = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_size","_size",-746489012));
var _height = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_height","_height",133867120));
var style = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _initial_split = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"_initial-split","_initial-split",2145793073));
var class$ = cljs.core.get.call(null,map__18304__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_container_attrs.call(null,class$,style,attr,cljs.core.deref.call(null,dragging_QMARK_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-top",cljs.core.deref.call(null,dragging_QMARK_),cljs.core.deref.call(null,split_perc)),panel_1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_splitter_attrs.call(null,"re-v-split-splitter"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.splits.drag_handle,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),cljs.core.deref.call(null,over_QMARK_)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),make_panel_attrs.call(null,"re-v-split-bottom",cljs.core.deref.call(null,dragging_QMARK_),((100) - cljs.core.deref.call(null,split_perc))),panel_2], null)], null);
};
var G__18309 = function (var_args){
var p__18303 = null;
if (arguments.length > 0) {
var G__18310__i = 0, G__18310__a = new Array(arguments.length -  0);
while (G__18310__i < G__18310__a.length) {G__18310__a[G__18310__i] = arguments[G__18310__i + 0]; ++G__18310__i;}
  p__18303 = new cljs.core.IndexedSeq(G__18310__a,0,null);
} 
return G__18309__delegate.call(this,p__18303);};
G__18309.cljs$lang$maxFixedArity = 0;
G__18309.cljs$lang$applyTo = (function (arglist__18311){
var p__18303 = cljs.core.seq(arglist__18311);
return G__18309__delegate(p__18303);
});
G__18309.cljs$core$IFn$_invoke$arity$variadic = G__18309__delegate;
return G__18309;
})()
;
;})(container_id,split_perc,dragging_QMARK_,over_QMARK_,stop_drag,calc_perc,_LT_html_GT__QMARK_,mouseout,mousemove,mousedown,mouseover_split,mouseout_split,make_container_attrs,make_panel_attrs,make_splitter_attrs,map__18301,map__18301__$1,args,size,width,height,on_split_change,initial_split,splitter_size,margin))
});

re_com.splits.v_split.cljs$lang$maxFixedArity = (0);

re_com.splits.v_split.cljs$lang$applyTo = (function (seq18299){
return re_com.splits.v_split.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18299));
});


//# sourceMappingURL=splits.js.map?rel=1506917870133
