// Compiled by ClojureScript 1.10.520 {}
goog.provide('new_quil_sandbox.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
new_quil_sandbox.core.setup = (function new_quil_sandbox$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.background.call(null,(200));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
new_quil_sandbox.core.update_state = (function new_quil_sandbox$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
new_quil_sandbox.core.draw_state = (function new_quil_sandbox$core$draw_state(state){
quil.core.no_fill.call(null);

quil.core.stroke.call(null,(0),(0),(0),(2));

var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var move = (10);
var x1 = x;
var y1 = (50);
var x2 = (x + move);
var y2 = (450);
var noise_x1 = (quil.core.noise.call(null,x1) * (50));
var noise_x2 = (quil.core.noise.call(null,x2) * (50));
var x1__$1 = (x1 + noise_x1);
var x2__$1 = (x2 + noise_x2);
var noise_x12 = (quil.core.noise.call(null,x1__$1) * (50));
var noise_x22 = (quil.core.noise.call(null,x2__$1) * (50));
var y1__$1 = (y1 + noise_x12);
var y2__$1 = (y2 + noise_x22);
var c1x = ((x1__$1 + (1000)) + noise_x1);
var c1y = ((y1__$1 + (1000)) + noise_x2);
var c2x = ((x2__$1 - (100)) - noise_x12);
var c2y = ((y2__$1 - (100)) - noise_x22);
return quil.core.bezier.call(null,x1__$1,y1__$1,(0),c1x,c1y,(0),c2x,c2y,(0),x2__$1,y2__$1,(0));
});
new_quil_sandbox.core.run_sketch = (function new_quil_sandbox$core$run_sketch(){
new_quil_sandbox.core.new_quil_sandbox = (function new_quil_sandbox$core$run_sketch_$_new_quil_sandbox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"new-quil-sandbox",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.update_state))?(function() { 
var G__35713__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.update_state,args);
};
var G__35713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35714__i = 0, G__35714__a = new Array(arguments.length -  0);
while (G__35714__i < G__35714__a.length) {G__35714__a[G__35714__i] = arguments[G__35714__i + 0]; ++G__35714__i;}
  args = new cljs.core.IndexedSeq(G__35714__a,0,null);
} 
return G__35713__delegate.call(this,args);};
G__35713.cljs$lang$maxFixedArity = 0;
G__35713.cljs$lang$applyTo = (function (arglist__35715){
var args = cljs.core.seq(arglist__35715);
return G__35713__delegate(args);
});
G__35713.cljs$core$IFn$_invoke$arity$variadic = G__35713__delegate;
return G__35713;
})()
:new_quil_sandbox.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.setup))?(function() { 
var G__35716__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.setup,args);
};
var G__35716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35717__i = 0, G__35717__a = new Array(arguments.length -  0);
while (G__35717__i < G__35717__a.length) {G__35717__a[G__35717__i] = arguments[G__35717__i + 0]; ++G__35717__i;}
  args = new cljs.core.IndexedSeq(G__35717__a,0,null);
} 
return G__35716__delegate.call(this,args);};
G__35716.cljs$lang$maxFixedArity = 0;
G__35716.cljs$lang$applyTo = (function (arglist__35718){
var args = cljs.core.seq(arglist__35718);
return G__35716__delegate(args);
});
G__35716.cljs$core$IFn$_invoke$arity$variadic = G__35716__delegate;
return G__35716;
})()
:new_quil_sandbox.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.draw_state))?(function() { 
var G__35719__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.draw_state,args);
};
var G__35719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35720__i = 0, G__35720__a = new Array(arguments.length -  0);
while (G__35720__i < G__35720__a.length) {G__35720__a[G__35720__i] = arguments[G__35720__i + 0]; ++G__35720__i;}
  args = new cljs.core.IndexedSeq(G__35720__a,0,null);
} 
return G__35719__delegate.call(this,args);};
G__35719.cljs$lang$maxFixedArity = 0;
G__35719.cljs$lang$applyTo = (function (arglist__35721){
var args = cljs.core.seq(arglist__35721);
return G__35719__delegate(args);
});
G__35719.cljs$core$IFn$_invoke$arity$variadic = G__35719__delegate;
return G__35719;
})()
:new_quil_sandbox.core.draw_state));
});
goog.exportSymbol('new_quil_sandbox.core.new_quil_sandbox', new_quil_sandbox.core.new_quil_sandbox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new_quil_sandbox.core.new_quil_sandbox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"new-quil-sandbox"], null));
}
});
goog.exportSymbol('new_quil_sandbox.core.run_sketch', new_quil_sandbox.core.run_sketch);
new_quil_sandbox.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1629750598854
