// Compiled by ClojureScript 1.10.520 {}
goog.provide('new_quil_sandbox.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
new_quil_sandbox.core.size = (2000);
new_quil_sandbox.core.n = (15);
new_quil_sandbox.core.s = (new_quil_sandbox.core.size / new_quil_sandbox.core.n);
new_quil_sandbox.core.setup = (function new_quil_sandbox$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

quil.core.no_fill.call(null);

quil.core.stroke.call(null,(100));

quil.core.stroke_weight.call(null,(1));

quil.core.background.call(null,(20));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"frame","frame",-1711082588),(0)], null);
});
new_quil_sandbox.core.update_state = (function new_quil_sandbox$core$update_state(p__48133){
var map__48134 = p__48133;
var map__48134__$1 = (((((!((map__48134 == null))))?(((((map__48134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48134):map__48134);
var state = map__48134__$1;
var fields = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var frame = cljs.core.get.call(null,map__48134__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fields","fields",-1932066230),(((cljs.core.mod.call(null,frame,(60)) === (0)))?cljs.core.mapv.call(null,((function (map__48134,map__48134__$1,state,fields,frame){
return (function (i){
return cljs.core.mapv.call(null,((function (map__48134,map__48134__$1,state,fields,frame){
return (function (j){
return (quil.core.random.call(null,(2)) | (0));
});})(map__48134,map__48134__$1,state,fields,frame))
,cljs.core.range.call(null,new_quil_sandbox.core.n));
});})(map__48134,map__48134__$1,state,fields,frame))
,cljs.core.range.call(null,new_quil_sandbox.core.n)):fields),new cljs.core.Keyword(null,"a","a",-2123407586),(0.5 * ((1) + quil.core.sin.call(null,(frame * (0.5 / quil.core.PI))))),new cljs.core.Keyword(null,"frame","frame",-1711082588),(frame + (1))], null);
});
new_quil_sandbox.core.draw_state = (function new_quil_sandbox$core$draw_state(p__48137){
var map__48138 = p__48137;
var map__48138__$1 = (((((!((map__48138 == null))))?(((((map__48138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48138):map__48138);
var state = map__48138__$1;
var fields = cljs.core.get.call(null,map__48138__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var frame = cljs.core.get.call(null,map__48138__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var a = cljs.core.get.call(null,map__48138__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var tr__26877__auto__ = cljs.core.mapv.call(null,((function (map__48138,map__48138__$1,state,fields,frame,a){
return (function (p1__48136_SHARP_){
return ((quil.core.random.call(null,(1)) * ((10) + (frame * 0.1))) * p1__48136_SHARP_);
});})(map__48138,map__48138__$1,state,fields,frame,a))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.core.noise.call(null,(frame * a)),quil.core.noise.call(null,(frame * a))], null));
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__26877__auto__);

quil.core.stroke.call(null,(quil.core.noise.call(null,(frame * a)) * (255)),(200),(100),((15) * a));

var seq__48140 = cljs.core.seq.call(null,cljs.core.range.call(null,new_quil_sandbox.core.n));
var chunk__48141 = null;
var count__48142 = (0);
var i__48143 = (0);
while(true){
if((i__48143 < count__48142)){
var i = cljs.core._nth.call(null,chunk__48141,i__48143);
var seq__48152_48160 = cljs.core.seq.call(null,cljs.core.range.call(null,new_quil_sandbox.core.n));
var chunk__48153_48161 = null;
var count__48154_48162 = (0);
var i__48155_48163 = (0);
while(true){
if((i__48155_48163 < count__48154_48162)){
var j_48164 = cljs.core._nth.call(null,chunk__48153_48161,i__48155_48163);
var field_48165 = cljs.core.get_in.call(null,fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_48164], null));
if((field_48165 === (0))){
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),((j_48164 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.5,2.0,((1) - a))),(quil.core.PI * 2.0));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),(j_48164 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.5,1.0,a)),(quil.core.PI * 1.0));
} else {
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),(j_48164 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.0,0.5,a)),(quil.core.PI * 0.5));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),((j_48164 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.0,1.5,((1) - a))),(quil.core.PI * 1.5));
}


var G__48166 = seq__48152_48160;
var G__48167 = chunk__48153_48161;
var G__48168 = count__48154_48162;
var G__48169 = (i__48155_48163 + (1));
seq__48152_48160 = G__48166;
chunk__48153_48161 = G__48167;
count__48154_48162 = G__48168;
i__48155_48163 = G__48169;
continue;
} else {
var temp__5735__auto___48170 = cljs.core.seq.call(null,seq__48152_48160);
if(temp__5735__auto___48170){
var seq__48152_48171__$1 = temp__5735__auto___48170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48152_48171__$1)){
var c__4550__auto___48172 = cljs.core.chunk_first.call(null,seq__48152_48171__$1);
var G__48173 = cljs.core.chunk_rest.call(null,seq__48152_48171__$1);
var G__48174 = c__4550__auto___48172;
var G__48175 = cljs.core.count.call(null,c__4550__auto___48172);
var G__48176 = (0);
seq__48152_48160 = G__48173;
chunk__48153_48161 = G__48174;
count__48154_48162 = G__48175;
i__48155_48163 = G__48176;
continue;
} else {
var j_48177 = cljs.core.first.call(null,seq__48152_48171__$1);
var field_48178 = cljs.core.get_in.call(null,fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_48177], null));
if((field_48178 === (0))){
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),((j_48177 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.5,2.0,((1) - a))),(quil.core.PI * 2.0));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),(j_48177 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.5,1.0,a)),(quil.core.PI * 1.0));
} else {
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),(j_48177 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.0,0.5,a)),(quil.core.PI * 0.5));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),((j_48177 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.0,1.5,((1) - a))),(quil.core.PI * 1.5));
}


var G__48179 = cljs.core.next.call(null,seq__48152_48171__$1);
var G__48180 = null;
var G__48181 = (0);
var G__48182 = (0);
seq__48152_48160 = G__48179;
chunk__48153_48161 = G__48180;
count__48154_48162 = G__48181;
i__48155_48163 = G__48182;
continue;
}
} else {
}
}
break;
}


var G__48183 = seq__48140;
var G__48184 = chunk__48141;
var G__48185 = count__48142;
var G__48186 = (i__48143 + (1));
seq__48140 = G__48183;
chunk__48141 = G__48184;
count__48142 = G__48185;
i__48143 = G__48186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48140);
if(temp__5735__auto__){
var seq__48140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48140__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48140__$1);
var G__48187 = cljs.core.chunk_rest.call(null,seq__48140__$1);
var G__48188 = c__4550__auto__;
var G__48189 = cljs.core.count.call(null,c__4550__auto__);
var G__48190 = (0);
seq__48140 = G__48187;
chunk__48141 = G__48188;
count__48142 = G__48189;
i__48143 = G__48190;
continue;
} else {
var i = cljs.core.first.call(null,seq__48140__$1);
var seq__48156_48191 = cljs.core.seq.call(null,cljs.core.range.call(null,new_quil_sandbox.core.n));
var chunk__48157_48192 = null;
var count__48158_48193 = (0);
var i__48159_48194 = (0);
while(true){
if((i__48159_48194 < count__48158_48193)){
var j_48195 = cljs.core._nth.call(null,chunk__48157_48192,i__48159_48194);
var field_48196 = cljs.core.get_in.call(null,fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_48195], null));
if((field_48196 === (0))){
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),((j_48195 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.5,2.0,((1) - a))),(quil.core.PI * 2.0));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),(j_48195 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.5,1.0,a)),(quil.core.PI * 1.0));
} else {
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),(j_48195 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.0,0.5,a)),(quil.core.PI * 0.5));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),((j_48195 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.0,1.5,((1) - a))),(quil.core.PI * 1.5));
}


var G__48197 = seq__48156_48191;
var G__48198 = chunk__48157_48192;
var G__48199 = count__48158_48193;
var G__48200 = (i__48159_48194 + (1));
seq__48156_48191 = G__48197;
chunk__48157_48192 = G__48198;
count__48158_48193 = G__48199;
i__48159_48194 = G__48200;
continue;
} else {
var temp__5735__auto___48201__$1 = cljs.core.seq.call(null,seq__48156_48191);
if(temp__5735__auto___48201__$1){
var seq__48156_48202__$1 = temp__5735__auto___48201__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48156_48202__$1)){
var c__4550__auto___48203 = cljs.core.chunk_first.call(null,seq__48156_48202__$1);
var G__48204 = cljs.core.chunk_rest.call(null,seq__48156_48202__$1);
var G__48205 = c__4550__auto___48203;
var G__48206 = cljs.core.count.call(null,c__4550__auto___48203);
var G__48207 = (0);
seq__48156_48191 = G__48204;
chunk__48157_48192 = G__48205;
count__48158_48193 = G__48206;
i__48159_48194 = G__48207;
continue;
} else {
var j_48208 = cljs.core.first.call(null,seq__48156_48202__$1);
var field_48209 = cljs.core.get_in.call(null,fields,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j_48208], null));
if((field_48209 === (0))){
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),((j_48208 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.5,2.0,((1) - a))),(quil.core.PI * 2.0));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),(j_48208 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.5,1.0,a)),(quil.core.PI * 1.0));
} else {
quil.core.arc.call(null,(i * new_quil_sandbox.core.s),(j_48208 * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,0.0,0.5,a)),(quil.core.PI * 0.5));

quil.core.arc.call(null,((i + (1)) * new_quil_sandbox.core.s),((j_48208 + (1)) * new_quil_sandbox.core.s),new_quil_sandbox.core.s,new_quil_sandbox.core.s,(quil.core.PI * quil.core.lerp.call(null,1.0,1.5,((1) - a))),(quil.core.PI * 1.5));
}


var G__48210 = cljs.core.next.call(null,seq__48156_48202__$1);
var G__48211 = null;
var G__48212 = (0);
var G__48213 = (0);
seq__48156_48191 = G__48210;
chunk__48157_48192 = G__48211;
count__48158_48193 = G__48212;
i__48159_48194 = G__48213;
continue;
}
} else {
}
}
break;
}


var G__48214 = cljs.core.next.call(null,seq__48140__$1);
var G__48215 = null;
var G__48216 = (0);
var G__48217 = (0);
seq__48140 = G__48214;
chunk__48141 = G__48215;
count__48142 = G__48216;
i__48143 = G__48217;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});
new_quil_sandbox.core.run_sketch = (function new_quil_sandbox$core$run_sketch(){
new_quil_sandbox.core.new_quil_sandbox = (function new_quil_sandbox$core$run_sketch_$_new_quil_sandbox(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"new-quil-sandbox",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.update_state))?(function() { 
var G__48218__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.update_state,args);
};
var G__48218 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48219__i = 0, G__48219__a = new Array(arguments.length -  0);
while (G__48219__i < G__48219__a.length) {G__48219__a[G__48219__i] = arguments[G__48219__i + 0]; ++G__48219__i;}
  args = new cljs.core.IndexedSeq(G__48219__a,0,null);
} 
return G__48218__delegate.call(this,args);};
G__48218.cljs$lang$maxFixedArity = 0;
G__48218.cljs$lang$applyTo = (function (arglist__48220){
var args = cljs.core.seq(arglist__48220);
return G__48218__delegate(args);
});
G__48218.cljs$core$IFn$_invoke$arity$variadic = G__48218__delegate;
return G__48218;
})()
:new_quil_sandbox.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_quil_sandbox.core.size,new_quil_sandbox.core.size], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.setup))?(function() { 
var G__48221__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.setup,args);
};
var G__48221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48222__i = 0, G__48222__a = new Array(arguments.length -  0);
while (G__48222__i < G__48222__a.length) {G__48222__a[G__48222__i] = arguments[G__48222__i + 0]; ++G__48222__i;}
  args = new cljs.core.IndexedSeq(G__48222__a,0,null);
} 
return G__48221__delegate.call(this,args);};
G__48221.cljs$lang$maxFixedArity = 0;
G__48221.cljs$lang$applyTo = (function (arglist__48223){
var args = cljs.core.seq(arglist__48223);
return G__48221__delegate(args);
});
G__48221.cljs$core$IFn$_invoke$arity$variadic = G__48221__delegate;
return G__48221;
})()
:new_quil_sandbox.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,new_quil_sandbox.core.draw_state))?(function() { 
var G__48224__delegate = function (args){
return cljs.core.apply.call(null,new_quil_sandbox.core.draw_state,args);
};
var G__48224 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48225__i = 0, G__48225__a = new Array(arguments.length -  0);
while (G__48225__i < G__48225__a.length) {G__48225__a[G__48225__i] = arguments[G__48225__i + 0]; ++G__48225__i;}
  args = new cljs.core.IndexedSeq(G__48225__a,0,null);
} 
return G__48224__delegate.call(this,args);};
G__48224.cljs$lang$maxFixedArity = 0;
G__48224.cljs$lang$applyTo = (function (arglist__48226){
var args = cljs.core.seq(arglist__48226);
return G__48224__delegate(args);
});
G__48224.cljs$core$IFn$_invoke$arity$variadic = G__48224__delegate;
return G__48224;
})()
:new_quil_sandbox.core.draw_state));
});
goog.exportSymbol('new_quil_sandbox.core.new_quil_sandbox', new_quil_sandbox.core.new_quil_sandbox);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26471__26472__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__26471__26472__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new_quil_sandbox.core.new_quil_sandbox,new cljs.core.Keyword(null,"host-id","host-id",742376279),"new-quil-sandbox"], null));
}
});
goog.exportSymbol('new_quil_sandbox.core.run_sketch', new_quil_sandbox.core.run_sketch);
new_quil_sandbox.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1629842457180
