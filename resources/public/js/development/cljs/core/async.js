// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23696 = arguments.length;
switch (G__23696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23697 = (function (f,blockable,meta23698){
this.f = f;
this.blockable = blockable;
this.meta23698 = meta23698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23699,meta23698__$1){
var self__ = this;
var _23699__$1 = this;
return (new cljs.core.async.t_cljs$core$async23697(self__.f,self__.blockable,meta23698__$1));
});

cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23699){
var self__ = this;
var _23699__$1 = this;
return self__.meta23698;
});

cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23698","meta23698",543457994,null)], null);
});

cljs.core.async.t_cljs$core$async23697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23697";

cljs.core.async.t_cljs$core$async23697.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23697");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23697.
 */
cljs.core.async.__GT_t_cljs$core$async23697 = (function cljs$core$async$__GT_t_cljs$core$async23697(f__$1,blockable__$1,meta23698){
return (new cljs.core.async.t_cljs$core$async23697(f__$1,blockable__$1,meta23698));
});

}

return (new cljs.core.async.t_cljs$core$async23697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23703 = arguments.length;
switch (G__23703) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23706 = arguments.length;
switch (G__23706) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23709 = arguments.length;
switch (G__23709) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23711 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23711);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23711,ret){
return (function (){
return fn1.call(null,val_23711);
});})(val_23711,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23713 = arguments.length;
switch (G__23713) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23715 = n;
var x_23716 = (0);
while(true){
if((x_23716 < n__4607__auto___23715)){
(a[x_23716] = (0));

var G__23717 = (x_23716 + (1));
x_23716 = G__23717;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23718 = (i + (1));
i = G__23718;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23719 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23719 = (function (flag,meta23720){
this.flag = flag;
this.meta23720 = meta23720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23721,meta23720__$1){
var self__ = this;
var _23721__$1 = this;
return (new cljs.core.async.t_cljs$core$async23719(self__.flag,meta23720__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23721){
var self__ = this;
var _23721__$1 = this;
return self__.meta23720;
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23720","meta23720",1979856775,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23719";

cljs.core.async.t_cljs$core$async23719.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23719");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23719.
 */
cljs.core.async.__GT_t_cljs$core$async23719 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23719(flag__$1,meta23720){
return (new cljs.core.async.t_cljs$core$async23719(flag__$1,meta23720));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23719(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23722 = (function (flag,cb,meta23723){
this.flag = flag;
this.cb = cb;
this.meta23723 = meta23723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23724,meta23723__$1){
var self__ = this;
var _23724__$1 = this;
return (new cljs.core.async.t_cljs$core$async23722(self__.flag,self__.cb,meta23723__$1));
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23724){
var self__ = this;
var _23724__$1 = this;
return self__.meta23723;
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23723","meta23723",-1443099928,null)], null);
});

cljs.core.async.t_cljs$core$async23722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23722";

cljs.core.async.t_cljs$core$async23722.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23722");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23722.
 */
cljs.core.async.__GT_t_cljs$core$async23722 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23722(flag__$1,cb__$1,meta23723){
return (new cljs.core.async.t_cljs$core$async23722(flag__$1,cb__$1,meta23723));
});

}

return (new cljs.core.async.t_cljs$core$async23722(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23725_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23726_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23726_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23727 = (i + (1));
i = G__23727;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23733 = arguments.length;
var i__4731__auto___23734 = (0);
while(true){
if((i__4731__auto___23734 < len__4730__auto___23733)){
args__4736__auto__.push((arguments[i__4731__auto___23734]));

var G__23735 = (i__4731__auto___23734 + (1));
i__4731__auto___23734 = G__23735;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23730){
var map__23731 = p__23730;
var map__23731__$1 = (((((!((map__23731 == null))))?(((((map__23731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23731):map__23731);
var opts = map__23731__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23728){
var G__23729 = cljs.core.first.call(null,seq23728);
var seq23728__$1 = cljs.core.next.call(null,seq23728);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23729,seq23728__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23737 = arguments.length;
switch (G__23737) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23636__auto___23783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___23783){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___23783){
return (function (state_23761){
var state_val_23762 = (state_23761[(1)]);
if((state_val_23762 === (7))){
var inst_23757 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23763_23784 = state_23761__$1;
(statearr_23763_23784[(2)] = inst_23757);

(statearr_23763_23784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (1))){
var state_23761__$1 = state_23761;
var statearr_23764_23785 = state_23761__$1;
(statearr_23764_23785[(2)] = null);

(statearr_23764_23785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (4))){
var inst_23740 = (state_23761[(7)]);
var inst_23740__$1 = (state_23761[(2)]);
var inst_23741 = (inst_23740__$1 == null);
var state_23761__$1 = (function (){var statearr_23765 = state_23761;
(statearr_23765[(7)] = inst_23740__$1);

return statearr_23765;
})();
if(cljs.core.truth_(inst_23741)){
var statearr_23766_23786 = state_23761__$1;
(statearr_23766_23786[(1)] = (5));

} else {
var statearr_23767_23787 = state_23761__$1;
(statearr_23767_23787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (13))){
var state_23761__$1 = state_23761;
var statearr_23768_23788 = state_23761__$1;
(statearr_23768_23788[(2)] = null);

(statearr_23768_23788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (6))){
var inst_23740 = (state_23761[(7)]);
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23761__$1,(11),to,inst_23740);
} else {
if((state_val_23762 === (3))){
var inst_23759 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23761__$1,inst_23759);
} else {
if((state_val_23762 === (12))){
var state_23761__$1 = state_23761;
var statearr_23769_23789 = state_23761__$1;
(statearr_23769_23789[(2)] = null);

(statearr_23769_23789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (2))){
var state_23761__$1 = state_23761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23761__$1,(4),from);
} else {
if((state_val_23762 === (11))){
var inst_23750 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
if(cljs.core.truth_(inst_23750)){
var statearr_23770_23790 = state_23761__$1;
(statearr_23770_23790[(1)] = (12));

} else {
var statearr_23771_23791 = state_23761__$1;
(statearr_23771_23791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (9))){
var state_23761__$1 = state_23761;
var statearr_23772_23792 = state_23761__$1;
(statearr_23772_23792[(2)] = null);

(statearr_23772_23792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (5))){
var state_23761__$1 = state_23761;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23773_23793 = state_23761__$1;
(statearr_23773_23793[(1)] = (8));

} else {
var statearr_23774_23794 = state_23761__$1;
(statearr_23774_23794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (14))){
var inst_23755 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23775_23795 = state_23761__$1;
(statearr_23775_23795[(2)] = inst_23755);

(statearr_23775_23795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (10))){
var inst_23747 = (state_23761[(2)]);
var state_23761__$1 = state_23761;
var statearr_23776_23796 = state_23761__$1;
(statearr_23776_23796[(2)] = inst_23747);

(statearr_23776_23796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23762 === (8))){
var inst_23744 = cljs.core.async.close_BANG_.call(null,to);
var state_23761__$1 = state_23761;
var statearr_23777_23797 = state_23761__$1;
(statearr_23777_23797[(2)] = inst_23744);

(statearr_23777_23797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___23783))
;
return ((function (switch__23541__auto__,c__23636__auto___23783){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_23778 = [null,null,null,null,null,null,null,null];
(statearr_23778[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_23778[(1)] = (1));

return statearr_23778;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_23761){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23779){if((e23779 instanceof Object)){
var ex__23545__auto__ = e23779;
var statearr_23780_23798 = state_23761;
(statearr_23780_23798[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23799 = state_23761;
state_23761 = G__23799;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_23761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_23761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___23783))
})();
var state__23638__auto__ = (function (){var statearr_23781 = f__23637__auto__.call(null);
(statearr_23781[(6)] = c__23636__auto___23783);

return statearr_23781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___23783))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23800){
var vec__23801 = p__23800;
var v = cljs.core.nth.call(null,vec__23801,(0),null);
var p = cljs.core.nth.call(null,vec__23801,(1),null);
var job = vec__23801;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23636__auto___23972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results){
return (function (state_23808){
var state_val_23809 = (state_23808[(1)]);
if((state_val_23809 === (1))){
var state_23808__$1 = state_23808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23808__$1,(2),res,v);
} else {
if((state_val_23809 === (2))){
var inst_23805 = (state_23808[(2)]);
var inst_23806 = cljs.core.async.close_BANG_.call(null,res);
var state_23808__$1 = (function (){var statearr_23810 = state_23808;
(statearr_23810[(7)] = inst_23805);

return statearr_23810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23808__$1,inst_23806);
} else {
return null;
}
}
});})(c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results))
;
return ((function (switch__23541__auto__,c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_23811 = [null,null,null,null,null,null,null,null];
(statearr_23811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__);

(statearr_23811[(1)] = (1));

return statearr_23811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1 = (function (state_23808){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23812){if((e23812 instanceof Object)){
var ex__23545__auto__ = e23812;
var statearr_23813_23973 = state_23808;
(statearr_23813_23973[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23974 = state_23808;
state_23808 = G__23974;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = function(state_23808){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1.call(this,state_23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results))
})();
var state__23638__auto__ = (function (){var statearr_23814 = f__23637__auto__.call(null);
(statearr_23814[(6)] = c__23636__auto___23972);

return statearr_23814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___23972,res,vec__23801,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23815){
var vec__23816 = p__23815;
var v = cljs.core.nth.call(null,vec__23816,(0),null);
var p = cljs.core.nth.call(null,vec__23816,(1),null);
var job = vec__23816;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23975 = n;
var __23976 = (0);
while(true){
if((__23976 < n__4607__auto___23975)){
var G__23819_23977 = type;
var G__23819_23978__$1 = (((G__23819_23977 instanceof cljs.core.Keyword))?G__23819_23977.fqn:null);
switch (G__23819_23978__$1) {
case "compute":
var c__23636__auto___23980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23976,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (__23976,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function (state_23832){
var state_val_23833 = (state_23832[(1)]);
if((state_val_23833 === (1))){
var state_23832__$1 = state_23832;
var statearr_23834_23981 = state_23832__$1;
(statearr_23834_23981[(2)] = null);

(statearr_23834_23981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (2))){
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23832__$1,(4),jobs);
} else {
if((state_val_23833 === (3))){
var inst_23830 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23832__$1,inst_23830);
} else {
if((state_val_23833 === (4))){
var inst_23822 = (state_23832[(2)]);
var inst_23823 = process.call(null,inst_23822);
var state_23832__$1 = state_23832;
if(cljs.core.truth_(inst_23823)){
var statearr_23835_23982 = state_23832__$1;
(statearr_23835_23982[(1)] = (5));

} else {
var statearr_23836_23983 = state_23832__$1;
(statearr_23836_23983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (5))){
var state_23832__$1 = state_23832;
var statearr_23837_23984 = state_23832__$1;
(statearr_23837_23984[(2)] = null);

(statearr_23837_23984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (6))){
var state_23832__$1 = state_23832;
var statearr_23838_23985 = state_23832__$1;
(statearr_23838_23985[(2)] = null);

(statearr_23838_23985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23833 === (7))){
var inst_23828 = (state_23832[(2)]);
var state_23832__$1 = state_23832;
var statearr_23839_23986 = state_23832__$1;
(statearr_23839_23986[(2)] = inst_23828);

(statearr_23839_23986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23976,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
;
return ((function (__23976,switch__23541__auto__,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_23840 = [null,null,null,null,null,null,null];
(statearr_23840[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__);

(statearr_23840[(1)] = (1));

return statearr_23840;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1 = (function (state_23832){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23841){if((e23841 instanceof Object)){
var ex__23545__auto__ = e23841;
var statearr_23842_23987 = state_23832;
(statearr_23842_23987[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23988 = state_23832;
state_23832 = G__23988;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = function(state_23832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1.call(this,state_23832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__;
})()
;})(__23976,switch__23541__auto__,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
})();
var state__23638__auto__ = (function (){var statearr_23843 = f__23637__auto__.call(null);
(statearr_23843[(6)] = c__23636__auto___23980);

return statearr_23843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(__23976,c__23636__auto___23980,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
);


break;
case "async":
var c__23636__auto___23989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23976,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (__23976,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function (state_23856){
var state_val_23857 = (state_23856[(1)]);
if((state_val_23857 === (1))){
var state_23856__$1 = state_23856;
var statearr_23858_23990 = state_23856__$1;
(statearr_23858_23990[(2)] = null);

(statearr_23858_23990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (2))){
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23856__$1,(4),jobs);
} else {
if((state_val_23857 === (3))){
var inst_23854 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23856__$1,inst_23854);
} else {
if((state_val_23857 === (4))){
var inst_23846 = (state_23856[(2)]);
var inst_23847 = async.call(null,inst_23846);
var state_23856__$1 = state_23856;
if(cljs.core.truth_(inst_23847)){
var statearr_23859_23991 = state_23856__$1;
(statearr_23859_23991[(1)] = (5));

} else {
var statearr_23860_23992 = state_23856__$1;
(statearr_23860_23992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (5))){
var state_23856__$1 = state_23856;
var statearr_23861_23993 = state_23856__$1;
(statearr_23861_23993[(2)] = null);

(statearr_23861_23993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (6))){
var state_23856__$1 = state_23856;
var statearr_23862_23994 = state_23856__$1;
(statearr_23862_23994[(2)] = null);

(statearr_23862_23994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23857 === (7))){
var inst_23852 = (state_23856[(2)]);
var state_23856__$1 = state_23856;
var statearr_23863_23995 = state_23856__$1;
(statearr_23863_23995[(2)] = inst_23852);

(statearr_23863_23995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__23976,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
;
return ((function (__23976,switch__23541__auto__,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_23864 = [null,null,null,null,null,null,null];
(statearr_23864[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__);

(statearr_23864[(1)] = (1));

return statearr_23864;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1 = (function (state_23856){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23865){if((e23865 instanceof Object)){
var ex__23545__auto__ = e23865;
var statearr_23866_23996 = state_23856;
(statearr_23866_23996[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23997 = state_23856;
state_23856 = G__23997;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = function(state_23856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1.call(this,state_23856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__;
})()
;})(__23976,switch__23541__auto__,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
})();
var state__23638__auto__ = (function (){var statearr_23867 = f__23637__auto__.call(null);
(statearr_23867[(6)] = c__23636__auto___23989);

return statearr_23867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(__23976,c__23636__auto___23989,G__23819_23977,G__23819_23978__$1,n__4607__auto___23975,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23819_23978__$1)].join('')));

}

var G__23998 = (__23976 + (1));
__23976 = G__23998;
continue;
} else {
}
break;
}

var c__23636__auto___23999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___23999,jobs,results,process,async){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___23999,jobs,results,process,async){
return (function (state_23889){
var state_val_23890 = (state_23889[(1)]);
if((state_val_23890 === (7))){
var inst_23885 = (state_23889[(2)]);
var state_23889__$1 = state_23889;
var statearr_23891_24000 = state_23889__$1;
(statearr_23891_24000[(2)] = inst_23885);

(statearr_23891_24000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23890 === (1))){
var state_23889__$1 = state_23889;
var statearr_23892_24001 = state_23889__$1;
(statearr_23892_24001[(2)] = null);

(statearr_23892_24001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23890 === (4))){
var inst_23870 = (state_23889[(7)]);
var inst_23870__$1 = (state_23889[(2)]);
var inst_23871 = (inst_23870__$1 == null);
var state_23889__$1 = (function (){var statearr_23893 = state_23889;
(statearr_23893[(7)] = inst_23870__$1);

return statearr_23893;
})();
if(cljs.core.truth_(inst_23871)){
var statearr_23894_24002 = state_23889__$1;
(statearr_23894_24002[(1)] = (5));

} else {
var statearr_23895_24003 = state_23889__$1;
(statearr_23895_24003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23890 === (6))){
var inst_23875 = (state_23889[(8)]);
var inst_23870 = (state_23889[(7)]);
var inst_23875__$1 = cljs.core.async.chan.call(null,(1));
var inst_23876 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23877 = [inst_23870,inst_23875__$1];
var inst_23878 = (new cljs.core.PersistentVector(null,2,(5),inst_23876,inst_23877,null));
var state_23889__$1 = (function (){var statearr_23896 = state_23889;
(statearr_23896[(8)] = inst_23875__$1);

return statearr_23896;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23889__$1,(8),jobs,inst_23878);
} else {
if((state_val_23890 === (3))){
var inst_23887 = (state_23889[(2)]);
var state_23889__$1 = state_23889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23889__$1,inst_23887);
} else {
if((state_val_23890 === (2))){
var state_23889__$1 = state_23889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23889__$1,(4),from);
} else {
if((state_val_23890 === (9))){
var inst_23882 = (state_23889[(2)]);
var state_23889__$1 = (function (){var statearr_23897 = state_23889;
(statearr_23897[(9)] = inst_23882);

return statearr_23897;
})();
var statearr_23898_24004 = state_23889__$1;
(statearr_23898_24004[(2)] = null);

(statearr_23898_24004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23890 === (5))){
var inst_23873 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23889__$1 = state_23889;
var statearr_23899_24005 = state_23889__$1;
(statearr_23899_24005[(2)] = inst_23873);

(statearr_23899_24005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23890 === (8))){
var inst_23875 = (state_23889[(8)]);
var inst_23880 = (state_23889[(2)]);
var state_23889__$1 = (function (){var statearr_23900 = state_23889;
(statearr_23900[(10)] = inst_23880);

return statearr_23900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23889__$1,(9),results,inst_23875);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___23999,jobs,results,process,async))
;
return ((function (switch__23541__auto__,c__23636__auto___23999,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_23901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23901[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__);

(statearr_23901[(1)] = (1));

return statearr_23901;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1 = (function (state_23889){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23902){if((e23902 instanceof Object)){
var ex__23545__auto__ = e23902;
var statearr_23903_24006 = state_23889;
(statearr_23903_24006[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23889;
state_23889 = G__24007;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = function(state_23889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1.call(this,state_23889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___23999,jobs,results,process,async))
})();
var state__23638__auto__ = (function (){var statearr_23904 = f__23637__auto__.call(null);
(statearr_23904[(6)] = c__23636__auto___23999);

return statearr_23904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___23999,jobs,results,process,async))
);


var c__23636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto__,jobs,results,process,async){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto__,jobs,results,process,async){
return (function (state_23942){
var state_val_23943 = (state_23942[(1)]);
if((state_val_23943 === (7))){
var inst_23938 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
var statearr_23944_24008 = state_23942__$1;
(statearr_23944_24008[(2)] = inst_23938);

(statearr_23944_24008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (20))){
var state_23942__$1 = state_23942;
var statearr_23945_24009 = state_23942__$1;
(statearr_23945_24009[(2)] = null);

(statearr_23945_24009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (1))){
var state_23942__$1 = state_23942;
var statearr_23946_24010 = state_23942__$1;
(statearr_23946_24010[(2)] = null);

(statearr_23946_24010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (4))){
var inst_23907 = (state_23942[(7)]);
var inst_23907__$1 = (state_23942[(2)]);
var inst_23908 = (inst_23907__$1 == null);
var state_23942__$1 = (function (){var statearr_23947 = state_23942;
(statearr_23947[(7)] = inst_23907__$1);

return statearr_23947;
})();
if(cljs.core.truth_(inst_23908)){
var statearr_23948_24011 = state_23942__$1;
(statearr_23948_24011[(1)] = (5));

} else {
var statearr_23949_24012 = state_23942__$1;
(statearr_23949_24012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (15))){
var inst_23920 = (state_23942[(8)]);
var state_23942__$1 = state_23942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23942__$1,(18),to,inst_23920);
} else {
if((state_val_23943 === (21))){
var inst_23933 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
var statearr_23950_24013 = state_23942__$1;
(statearr_23950_24013[(2)] = inst_23933);

(statearr_23950_24013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (13))){
var inst_23935 = (state_23942[(2)]);
var state_23942__$1 = (function (){var statearr_23951 = state_23942;
(statearr_23951[(9)] = inst_23935);

return statearr_23951;
})();
var statearr_23952_24014 = state_23942__$1;
(statearr_23952_24014[(2)] = null);

(statearr_23952_24014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (6))){
var inst_23907 = (state_23942[(7)]);
var state_23942__$1 = state_23942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23942__$1,(11),inst_23907);
} else {
if((state_val_23943 === (17))){
var inst_23928 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
if(cljs.core.truth_(inst_23928)){
var statearr_23953_24015 = state_23942__$1;
(statearr_23953_24015[(1)] = (19));

} else {
var statearr_23954_24016 = state_23942__$1;
(statearr_23954_24016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (3))){
var inst_23940 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23942__$1,inst_23940);
} else {
if((state_val_23943 === (12))){
var inst_23917 = (state_23942[(10)]);
var state_23942__$1 = state_23942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23942__$1,(14),inst_23917);
} else {
if((state_val_23943 === (2))){
var state_23942__$1 = state_23942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23942__$1,(4),results);
} else {
if((state_val_23943 === (19))){
var state_23942__$1 = state_23942;
var statearr_23955_24017 = state_23942__$1;
(statearr_23955_24017[(2)] = null);

(statearr_23955_24017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (11))){
var inst_23917 = (state_23942[(2)]);
var state_23942__$1 = (function (){var statearr_23956 = state_23942;
(statearr_23956[(10)] = inst_23917);

return statearr_23956;
})();
var statearr_23957_24018 = state_23942__$1;
(statearr_23957_24018[(2)] = null);

(statearr_23957_24018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (9))){
var state_23942__$1 = state_23942;
var statearr_23958_24019 = state_23942__$1;
(statearr_23958_24019[(2)] = null);

(statearr_23958_24019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (5))){
var state_23942__$1 = state_23942;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23959_24020 = state_23942__$1;
(statearr_23959_24020[(1)] = (8));

} else {
var statearr_23960_24021 = state_23942__$1;
(statearr_23960_24021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (14))){
var inst_23922 = (state_23942[(11)]);
var inst_23920 = (state_23942[(8)]);
var inst_23920__$1 = (state_23942[(2)]);
var inst_23921 = (inst_23920__$1 == null);
var inst_23922__$1 = cljs.core.not.call(null,inst_23921);
var state_23942__$1 = (function (){var statearr_23961 = state_23942;
(statearr_23961[(11)] = inst_23922__$1);

(statearr_23961[(8)] = inst_23920__$1);

return statearr_23961;
})();
if(inst_23922__$1){
var statearr_23962_24022 = state_23942__$1;
(statearr_23962_24022[(1)] = (15));

} else {
var statearr_23963_24023 = state_23942__$1;
(statearr_23963_24023[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (16))){
var inst_23922 = (state_23942[(11)]);
var state_23942__$1 = state_23942;
var statearr_23964_24024 = state_23942__$1;
(statearr_23964_24024[(2)] = inst_23922);

(statearr_23964_24024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (10))){
var inst_23914 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
var statearr_23965_24025 = state_23942__$1;
(statearr_23965_24025[(2)] = inst_23914);

(statearr_23965_24025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (18))){
var inst_23925 = (state_23942[(2)]);
var state_23942__$1 = state_23942;
var statearr_23966_24026 = state_23942__$1;
(statearr_23966_24026[(2)] = inst_23925);

(statearr_23966_24026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23943 === (8))){
var inst_23911 = cljs.core.async.close_BANG_.call(null,to);
var state_23942__$1 = state_23942;
var statearr_23967_24027 = state_23942__$1;
(statearr_23967_24027[(2)] = inst_23911);

(statearr_23967_24027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto__,jobs,results,process,async))
;
return ((function (switch__23541__auto__,c__23636__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_23968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__);

(statearr_23968[(1)] = (1));

return statearr_23968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1 = (function (state_23942){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_23942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e23969){if((e23969 instanceof Object)){
var ex__23545__auto__ = e23969;
var statearr_23970_24028 = state_23942;
(statearr_23970_24028[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24029 = state_23942;
state_23942 = G__24029;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__ = function(state_23942){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1.call(this,state_23942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto__,jobs,results,process,async))
})();
var state__23638__auto__ = (function (){var statearr_23971 = f__23637__auto__.call(null);
(statearr_23971[(6)] = c__23636__auto__);

return statearr_23971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto__,jobs,results,process,async))
);

return c__23636__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24031 = arguments.length;
switch (G__24031) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24034 = arguments.length;
switch (G__24034) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24037 = arguments.length;
switch (G__24037) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23636__auto___24086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___24086,tc,fc){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___24086,tc,fc){
return (function (state_24063){
var state_val_24064 = (state_24063[(1)]);
if((state_val_24064 === (7))){
var inst_24059 = (state_24063[(2)]);
var state_24063__$1 = state_24063;
var statearr_24065_24087 = state_24063__$1;
(statearr_24065_24087[(2)] = inst_24059);

(statearr_24065_24087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (1))){
var state_24063__$1 = state_24063;
var statearr_24066_24088 = state_24063__$1;
(statearr_24066_24088[(2)] = null);

(statearr_24066_24088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (4))){
var inst_24040 = (state_24063[(7)]);
var inst_24040__$1 = (state_24063[(2)]);
var inst_24041 = (inst_24040__$1 == null);
var state_24063__$1 = (function (){var statearr_24067 = state_24063;
(statearr_24067[(7)] = inst_24040__$1);

return statearr_24067;
})();
if(cljs.core.truth_(inst_24041)){
var statearr_24068_24089 = state_24063__$1;
(statearr_24068_24089[(1)] = (5));

} else {
var statearr_24069_24090 = state_24063__$1;
(statearr_24069_24090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (13))){
var state_24063__$1 = state_24063;
var statearr_24070_24091 = state_24063__$1;
(statearr_24070_24091[(2)] = null);

(statearr_24070_24091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (6))){
var inst_24040 = (state_24063[(7)]);
var inst_24046 = p.call(null,inst_24040);
var state_24063__$1 = state_24063;
if(cljs.core.truth_(inst_24046)){
var statearr_24071_24092 = state_24063__$1;
(statearr_24071_24092[(1)] = (9));

} else {
var statearr_24072_24093 = state_24063__$1;
(statearr_24072_24093[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (3))){
var inst_24061 = (state_24063[(2)]);
var state_24063__$1 = state_24063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24063__$1,inst_24061);
} else {
if((state_val_24064 === (12))){
var state_24063__$1 = state_24063;
var statearr_24073_24094 = state_24063__$1;
(statearr_24073_24094[(2)] = null);

(statearr_24073_24094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (2))){
var state_24063__$1 = state_24063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24063__$1,(4),ch);
} else {
if((state_val_24064 === (11))){
var inst_24040 = (state_24063[(7)]);
var inst_24050 = (state_24063[(2)]);
var state_24063__$1 = state_24063;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24063__$1,(8),inst_24050,inst_24040);
} else {
if((state_val_24064 === (9))){
var state_24063__$1 = state_24063;
var statearr_24074_24095 = state_24063__$1;
(statearr_24074_24095[(2)] = tc);

(statearr_24074_24095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (5))){
var inst_24043 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24044 = cljs.core.async.close_BANG_.call(null,fc);
var state_24063__$1 = (function (){var statearr_24075 = state_24063;
(statearr_24075[(8)] = inst_24043);

return statearr_24075;
})();
var statearr_24076_24096 = state_24063__$1;
(statearr_24076_24096[(2)] = inst_24044);

(statearr_24076_24096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (14))){
var inst_24057 = (state_24063[(2)]);
var state_24063__$1 = state_24063;
var statearr_24077_24097 = state_24063__$1;
(statearr_24077_24097[(2)] = inst_24057);

(statearr_24077_24097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (10))){
var state_24063__$1 = state_24063;
var statearr_24078_24098 = state_24063__$1;
(statearr_24078_24098[(2)] = fc);

(statearr_24078_24098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24064 === (8))){
var inst_24052 = (state_24063[(2)]);
var state_24063__$1 = state_24063;
if(cljs.core.truth_(inst_24052)){
var statearr_24079_24099 = state_24063__$1;
(statearr_24079_24099[(1)] = (12));

} else {
var statearr_24080_24100 = state_24063__$1;
(statearr_24080_24100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___24086,tc,fc))
;
return ((function (switch__23541__auto__,c__23636__auto___24086,tc,fc){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_24081 = [null,null,null,null,null,null,null,null,null];
(statearr_24081[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_24081[(1)] = (1));

return statearr_24081;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_24063){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24082){if((e24082 instanceof Object)){
var ex__23545__auto__ = e24082;
var statearr_24083_24101 = state_24063;
(statearr_24083_24101[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24102 = state_24063;
state_24063 = G__24102;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_24063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_24063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___24086,tc,fc))
})();
var state__23638__auto__ = (function (){var statearr_24084 = f__23637__auto__.call(null);
(statearr_24084[(6)] = c__23636__auto___24086);

return statearr_24084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___24086,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto__){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto__){
return (function (state_24123){
var state_val_24124 = (state_24123[(1)]);
if((state_val_24124 === (7))){
var inst_24119 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24125_24143 = state_24123__$1;
(statearr_24125_24143[(2)] = inst_24119);

(statearr_24125_24143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (1))){
var inst_24103 = init;
var state_24123__$1 = (function (){var statearr_24126 = state_24123;
(statearr_24126[(7)] = inst_24103);

return statearr_24126;
})();
var statearr_24127_24144 = state_24123__$1;
(statearr_24127_24144[(2)] = null);

(statearr_24127_24144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (4))){
var inst_24106 = (state_24123[(8)]);
var inst_24106__$1 = (state_24123[(2)]);
var inst_24107 = (inst_24106__$1 == null);
var state_24123__$1 = (function (){var statearr_24128 = state_24123;
(statearr_24128[(8)] = inst_24106__$1);

return statearr_24128;
})();
if(cljs.core.truth_(inst_24107)){
var statearr_24129_24145 = state_24123__$1;
(statearr_24129_24145[(1)] = (5));

} else {
var statearr_24130_24146 = state_24123__$1;
(statearr_24130_24146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (6))){
var inst_24110 = (state_24123[(9)]);
var inst_24103 = (state_24123[(7)]);
var inst_24106 = (state_24123[(8)]);
var inst_24110__$1 = f.call(null,inst_24103,inst_24106);
var inst_24111 = cljs.core.reduced_QMARK_.call(null,inst_24110__$1);
var state_24123__$1 = (function (){var statearr_24131 = state_24123;
(statearr_24131[(9)] = inst_24110__$1);

return statearr_24131;
})();
if(inst_24111){
var statearr_24132_24147 = state_24123__$1;
(statearr_24132_24147[(1)] = (8));

} else {
var statearr_24133_24148 = state_24123__$1;
(statearr_24133_24148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (3))){
var inst_24121 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24123__$1,inst_24121);
} else {
if((state_val_24124 === (2))){
var state_24123__$1 = state_24123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24123__$1,(4),ch);
} else {
if((state_val_24124 === (9))){
var inst_24110 = (state_24123[(9)]);
var inst_24103 = inst_24110;
var state_24123__$1 = (function (){var statearr_24134 = state_24123;
(statearr_24134[(7)] = inst_24103);

return statearr_24134;
})();
var statearr_24135_24149 = state_24123__$1;
(statearr_24135_24149[(2)] = null);

(statearr_24135_24149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (5))){
var inst_24103 = (state_24123[(7)]);
var state_24123__$1 = state_24123;
var statearr_24136_24150 = state_24123__$1;
(statearr_24136_24150[(2)] = inst_24103);

(statearr_24136_24150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (10))){
var inst_24117 = (state_24123[(2)]);
var state_24123__$1 = state_24123;
var statearr_24137_24151 = state_24123__$1;
(statearr_24137_24151[(2)] = inst_24117);

(statearr_24137_24151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24124 === (8))){
var inst_24110 = (state_24123[(9)]);
var inst_24113 = cljs.core.deref.call(null,inst_24110);
var state_24123__$1 = state_24123;
var statearr_24138_24152 = state_24123__$1;
(statearr_24138_24152[(2)] = inst_24113);

(statearr_24138_24152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto__))
;
return ((function (switch__23541__auto__,c__23636__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23542__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23542__auto____0 = (function (){
var statearr_24139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24139[(0)] = cljs$core$async$reduce_$_state_machine__23542__auto__);

(statearr_24139[(1)] = (1));

return statearr_24139;
});
var cljs$core$async$reduce_$_state_machine__23542__auto____1 = (function (state_24123){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24140){if((e24140 instanceof Object)){
var ex__23545__auto__ = e24140;
var statearr_24141_24153 = state_24123;
(statearr_24141_24153[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24154 = state_24123;
state_24123 = G__24154;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23542__auto__ = function(state_24123){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23542__auto____1.call(this,state_24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23542__auto____0;
cljs$core$async$reduce_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23542__auto____1;
return cljs$core$async$reduce_$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto__))
})();
var state__23638__auto__ = (function (){var statearr_24142 = f__23637__auto__.call(null);
(statearr_24142[(6)] = c__23636__auto__);

return statearr_24142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto__))
);

return c__23636__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto__,f__$1){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto__,f__$1){
return (function (state_24160){
var state_val_24161 = (state_24160[(1)]);
if((state_val_24161 === (1))){
var inst_24155 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24160__$1,(2),inst_24155);
} else {
if((state_val_24161 === (2))){
var inst_24157 = (state_24160[(2)]);
var inst_24158 = f__$1.call(null,inst_24157);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24160__$1,inst_24158);
} else {
return null;
}
}
});})(c__23636__auto__,f__$1))
;
return ((function (switch__23541__auto__,c__23636__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23542__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23542__auto____0 = (function (){
var statearr_24162 = [null,null,null,null,null,null,null];
(statearr_24162[(0)] = cljs$core$async$transduce_$_state_machine__23542__auto__);

(statearr_24162[(1)] = (1));

return statearr_24162;
});
var cljs$core$async$transduce_$_state_machine__23542__auto____1 = (function (state_24160){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24163){if((e24163 instanceof Object)){
var ex__23545__auto__ = e24163;
var statearr_24164_24166 = state_24160;
(statearr_24164_24166[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24167 = state_24160;
state_24160 = G__24167;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23542__auto__ = function(state_24160){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23542__auto____1.call(this,state_24160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23542__auto____0;
cljs$core$async$transduce_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23542__auto____1;
return cljs$core$async$transduce_$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto__,f__$1))
})();
var state__23638__auto__ = (function (){var statearr_24165 = f__23637__auto__.call(null);
(statearr_24165[(6)] = c__23636__auto__);

return statearr_24165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto__,f__$1))
);

return c__23636__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24169 = arguments.length;
switch (G__24169) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto__){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto__){
return (function (state_24194){
var state_val_24195 = (state_24194[(1)]);
if((state_val_24195 === (7))){
var inst_24176 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24196_24217 = state_24194__$1;
(statearr_24196_24217[(2)] = inst_24176);

(statearr_24196_24217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (1))){
var inst_24170 = cljs.core.seq.call(null,coll);
var inst_24171 = inst_24170;
var state_24194__$1 = (function (){var statearr_24197 = state_24194;
(statearr_24197[(7)] = inst_24171);

return statearr_24197;
})();
var statearr_24198_24218 = state_24194__$1;
(statearr_24198_24218[(2)] = null);

(statearr_24198_24218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (4))){
var inst_24171 = (state_24194[(7)]);
var inst_24174 = cljs.core.first.call(null,inst_24171);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24194__$1,(7),ch,inst_24174);
} else {
if((state_val_24195 === (13))){
var inst_24188 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24199_24219 = state_24194__$1;
(statearr_24199_24219[(2)] = inst_24188);

(statearr_24199_24219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (6))){
var inst_24179 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24179)){
var statearr_24200_24220 = state_24194__$1;
(statearr_24200_24220[(1)] = (8));

} else {
var statearr_24201_24221 = state_24194__$1;
(statearr_24201_24221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (3))){
var inst_24192 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24194__$1,inst_24192);
} else {
if((state_val_24195 === (12))){
var state_24194__$1 = state_24194;
var statearr_24202_24222 = state_24194__$1;
(statearr_24202_24222[(2)] = null);

(statearr_24202_24222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (2))){
var inst_24171 = (state_24194[(7)]);
var state_24194__$1 = state_24194;
if(cljs.core.truth_(inst_24171)){
var statearr_24203_24223 = state_24194__$1;
(statearr_24203_24223[(1)] = (4));

} else {
var statearr_24204_24224 = state_24194__$1;
(statearr_24204_24224[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (11))){
var inst_24185 = cljs.core.async.close_BANG_.call(null,ch);
var state_24194__$1 = state_24194;
var statearr_24205_24225 = state_24194__$1;
(statearr_24205_24225[(2)] = inst_24185);

(statearr_24205_24225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (9))){
var state_24194__$1 = state_24194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24206_24226 = state_24194__$1;
(statearr_24206_24226[(1)] = (11));

} else {
var statearr_24207_24227 = state_24194__$1;
(statearr_24207_24227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (5))){
var inst_24171 = (state_24194[(7)]);
var state_24194__$1 = state_24194;
var statearr_24208_24228 = state_24194__$1;
(statearr_24208_24228[(2)] = inst_24171);

(statearr_24208_24228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (10))){
var inst_24190 = (state_24194[(2)]);
var state_24194__$1 = state_24194;
var statearr_24209_24229 = state_24194__$1;
(statearr_24209_24229[(2)] = inst_24190);

(statearr_24209_24229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24195 === (8))){
var inst_24171 = (state_24194[(7)]);
var inst_24181 = cljs.core.next.call(null,inst_24171);
var inst_24171__$1 = inst_24181;
var state_24194__$1 = (function (){var statearr_24210 = state_24194;
(statearr_24210[(7)] = inst_24171__$1);

return statearr_24210;
})();
var statearr_24211_24230 = state_24194__$1;
(statearr_24211_24230[(2)] = null);

(statearr_24211_24230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto__))
;
return ((function (switch__23541__auto__,c__23636__auto__){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_24212 = [null,null,null,null,null,null,null,null];
(statearr_24212[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_24212[(1)] = (1));

return statearr_24212;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_24194){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24213){if((e24213 instanceof Object)){
var ex__23545__auto__ = e24213;
var statearr_24214_24231 = state_24194;
(statearr_24214_24231[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24232 = state_24194;
state_24194 = G__24232;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_24194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_24194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto__))
})();
var state__23638__auto__ = (function (){var statearr_24215 = f__23637__auto__.call(null);
(statearr_24215[(6)] = c__23636__auto__);

return statearr_24215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto__))
);

return c__23636__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24233 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24233 = (function (ch,cs,meta24234){
this.ch = ch;
this.cs = cs;
this.meta24234 = meta24234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24235,meta24234__$1){
var self__ = this;
var _24235__$1 = this;
return (new cljs.core.async.t_cljs$core$async24233(self__.ch,self__.cs,meta24234__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24235){
var self__ = this;
var _24235__$1 = this;
return self__.meta24234;
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24234","meta24234",-542972943,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24233";

cljs.core.async.t_cljs$core$async24233.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24233");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24233.
 */
cljs.core.async.__GT_t_cljs$core$async24233 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24233(ch__$1,cs__$1,meta24234){
return (new cljs.core.async.t_cljs$core$async24233(ch__$1,cs__$1,meta24234));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24233(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23636__auto___24455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___24455,cs,m,dchan,dctr,done){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___24455,cs,m,dchan,dctr,done){
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (7))){
var inst_24366 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24372_24456 = state_24370__$1;
(statearr_24372_24456[(2)] = inst_24366);

(statearr_24372_24456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (20))){
var inst_24269 = (state_24370[(7)]);
var inst_24281 = cljs.core.first.call(null,inst_24269);
var inst_24282 = cljs.core.nth.call(null,inst_24281,(0),null);
var inst_24283 = cljs.core.nth.call(null,inst_24281,(1),null);
var state_24370__$1 = (function (){var statearr_24373 = state_24370;
(statearr_24373[(8)] = inst_24282);

return statearr_24373;
})();
if(cljs.core.truth_(inst_24283)){
var statearr_24374_24457 = state_24370__$1;
(statearr_24374_24457[(1)] = (22));

} else {
var statearr_24375_24458 = state_24370__$1;
(statearr_24375_24458[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (27))){
var inst_24318 = (state_24370[(9)]);
var inst_24238 = (state_24370[(10)]);
var inst_24313 = (state_24370[(11)]);
var inst_24311 = (state_24370[(12)]);
var inst_24318__$1 = cljs.core._nth.call(null,inst_24311,inst_24313);
var inst_24319 = cljs.core.async.put_BANG_.call(null,inst_24318__$1,inst_24238,done);
var state_24370__$1 = (function (){var statearr_24376 = state_24370;
(statearr_24376[(9)] = inst_24318__$1);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24319)){
var statearr_24377_24459 = state_24370__$1;
(statearr_24377_24459[(1)] = (30));

} else {
var statearr_24378_24460 = state_24370__$1;
(statearr_24378_24460[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (1))){
var state_24370__$1 = state_24370;
var statearr_24379_24461 = state_24370__$1;
(statearr_24379_24461[(2)] = null);

(statearr_24379_24461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (24))){
var inst_24269 = (state_24370[(7)]);
var inst_24288 = (state_24370[(2)]);
var inst_24289 = cljs.core.next.call(null,inst_24269);
var inst_24247 = inst_24289;
var inst_24248 = null;
var inst_24249 = (0);
var inst_24250 = (0);
var state_24370__$1 = (function (){var statearr_24380 = state_24370;
(statearr_24380[(13)] = inst_24248);

(statearr_24380[(14)] = inst_24288);

(statearr_24380[(15)] = inst_24247);

(statearr_24380[(16)] = inst_24249);

(statearr_24380[(17)] = inst_24250);

return statearr_24380;
})();
var statearr_24381_24462 = state_24370__$1;
(statearr_24381_24462[(2)] = null);

(statearr_24381_24462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (39))){
var state_24370__$1 = state_24370;
var statearr_24385_24463 = state_24370__$1;
(statearr_24385_24463[(2)] = null);

(statearr_24385_24463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (4))){
var inst_24238 = (state_24370[(10)]);
var inst_24238__$1 = (state_24370[(2)]);
var inst_24239 = (inst_24238__$1 == null);
var state_24370__$1 = (function (){var statearr_24386 = state_24370;
(statearr_24386[(10)] = inst_24238__$1);

return statearr_24386;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24387_24464 = state_24370__$1;
(statearr_24387_24464[(1)] = (5));

} else {
var statearr_24388_24465 = state_24370__$1;
(statearr_24388_24465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (15))){
var inst_24248 = (state_24370[(13)]);
var inst_24247 = (state_24370[(15)]);
var inst_24249 = (state_24370[(16)]);
var inst_24250 = (state_24370[(17)]);
var inst_24265 = (state_24370[(2)]);
var inst_24266 = (inst_24250 + (1));
var tmp24382 = inst_24248;
var tmp24383 = inst_24247;
var tmp24384 = inst_24249;
var inst_24247__$1 = tmp24383;
var inst_24248__$1 = tmp24382;
var inst_24249__$1 = tmp24384;
var inst_24250__$1 = inst_24266;
var state_24370__$1 = (function (){var statearr_24389 = state_24370;
(statearr_24389[(13)] = inst_24248__$1);

(statearr_24389[(18)] = inst_24265);

(statearr_24389[(15)] = inst_24247__$1);

(statearr_24389[(16)] = inst_24249__$1);

(statearr_24389[(17)] = inst_24250__$1);

return statearr_24389;
})();
var statearr_24390_24466 = state_24370__$1;
(statearr_24390_24466[(2)] = null);

(statearr_24390_24466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (21))){
var inst_24292 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24394_24467 = state_24370__$1;
(statearr_24394_24467[(2)] = inst_24292);

(statearr_24394_24467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (31))){
var inst_24318 = (state_24370[(9)]);
var inst_24322 = done.call(null,null);
var inst_24323 = cljs.core.async.untap_STAR_.call(null,m,inst_24318);
var state_24370__$1 = (function (){var statearr_24395 = state_24370;
(statearr_24395[(19)] = inst_24322);

return statearr_24395;
})();
var statearr_24396_24468 = state_24370__$1;
(statearr_24396_24468[(2)] = inst_24323);

(statearr_24396_24468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (32))){
var inst_24313 = (state_24370[(11)]);
var inst_24311 = (state_24370[(12)]);
var inst_24312 = (state_24370[(20)]);
var inst_24310 = (state_24370[(21)]);
var inst_24325 = (state_24370[(2)]);
var inst_24326 = (inst_24313 + (1));
var tmp24391 = inst_24311;
var tmp24392 = inst_24312;
var tmp24393 = inst_24310;
var inst_24310__$1 = tmp24393;
var inst_24311__$1 = tmp24391;
var inst_24312__$1 = tmp24392;
var inst_24313__$1 = inst_24326;
var state_24370__$1 = (function (){var statearr_24397 = state_24370;
(statearr_24397[(22)] = inst_24325);

(statearr_24397[(11)] = inst_24313__$1);

(statearr_24397[(12)] = inst_24311__$1);

(statearr_24397[(20)] = inst_24312__$1);

(statearr_24397[(21)] = inst_24310__$1);

return statearr_24397;
})();
var statearr_24398_24469 = state_24370__$1;
(statearr_24398_24469[(2)] = null);

(statearr_24398_24469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (40))){
var inst_24338 = (state_24370[(23)]);
var inst_24342 = done.call(null,null);
var inst_24343 = cljs.core.async.untap_STAR_.call(null,m,inst_24338);
var state_24370__$1 = (function (){var statearr_24399 = state_24370;
(statearr_24399[(24)] = inst_24342);

return statearr_24399;
})();
var statearr_24400_24470 = state_24370__$1;
(statearr_24400_24470[(2)] = inst_24343);

(statearr_24400_24470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (33))){
var inst_24329 = (state_24370[(25)]);
var inst_24331 = cljs.core.chunked_seq_QMARK_.call(null,inst_24329);
var state_24370__$1 = state_24370;
if(inst_24331){
var statearr_24401_24471 = state_24370__$1;
(statearr_24401_24471[(1)] = (36));

} else {
var statearr_24402_24472 = state_24370__$1;
(statearr_24402_24472[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (13))){
var inst_24259 = (state_24370[(26)]);
var inst_24262 = cljs.core.async.close_BANG_.call(null,inst_24259);
var state_24370__$1 = state_24370;
var statearr_24403_24473 = state_24370__$1;
(statearr_24403_24473[(2)] = inst_24262);

(statearr_24403_24473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (22))){
var inst_24282 = (state_24370[(8)]);
var inst_24285 = cljs.core.async.close_BANG_.call(null,inst_24282);
var state_24370__$1 = state_24370;
var statearr_24404_24474 = state_24370__$1;
(statearr_24404_24474[(2)] = inst_24285);

(statearr_24404_24474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (36))){
var inst_24329 = (state_24370[(25)]);
var inst_24333 = cljs.core.chunk_first.call(null,inst_24329);
var inst_24334 = cljs.core.chunk_rest.call(null,inst_24329);
var inst_24335 = cljs.core.count.call(null,inst_24333);
var inst_24310 = inst_24334;
var inst_24311 = inst_24333;
var inst_24312 = inst_24335;
var inst_24313 = (0);
var state_24370__$1 = (function (){var statearr_24405 = state_24370;
(statearr_24405[(11)] = inst_24313);

(statearr_24405[(12)] = inst_24311);

(statearr_24405[(20)] = inst_24312);

(statearr_24405[(21)] = inst_24310);

return statearr_24405;
})();
var statearr_24406_24475 = state_24370__$1;
(statearr_24406_24475[(2)] = null);

(statearr_24406_24475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (41))){
var inst_24329 = (state_24370[(25)]);
var inst_24345 = (state_24370[(2)]);
var inst_24346 = cljs.core.next.call(null,inst_24329);
var inst_24310 = inst_24346;
var inst_24311 = null;
var inst_24312 = (0);
var inst_24313 = (0);
var state_24370__$1 = (function (){var statearr_24407 = state_24370;
(statearr_24407[(11)] = inst_24313);

(statearr_24407[(12)] = inst_24311);

(statearr_24407[(20)] = inst_24312);

(statearr_24407[(27)] = inst_24345);

(statearr_24407[(21)] = inst_24310);

return statearr_24407;
})();
var statearr_24408_24476 = state_24370__$1;
(statearr_24408_24476[(2)] = null);

(statearr_24408_24476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (43))){
var state_24370__$1 = state_24370;
var statearr_24409_24477 = state_24370__$1;
(statearr_24409_24477[(2)] = null);

(statearr_24409_24477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (29))){
var inst_24354 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24410_24478 = state_24370__$1;
(statearr_24410_24478[(2)] = inst_24354);

(statearr_24410_24478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (44))){
var inst_24363 = (state_24370[(2)]);
var state_24370__$1 = (function (){var statearr_24411 = state_24370;
(statearr_24411[(28)] = inst_24363);

return statearr_24411;
})();
var statearr_24412_24479 = state_24370__$1;
(statearr_24412_24479[(2)] = null);

(statearr_24412_24479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (6))){
var inst_24302 = (state_24370[(29)]);
var inst_24301 = cljs.core.deref.call(null,cs);
var inst_24302__$1 = cljs.core.keys.call(null,inst_24301);
var inst_24303 = cljs.core.count.call(null,inst_24302__$1);
var inst_24304 = cljs.core.reset_BANG_.call(null,dctr,inst_24303);
var inst_24309 = cljs.core.seq.call(null,inst_24302__$1);
var inst_24310 = inst_24309;
var inst_24311 = null;
var inst_24312 = (0);
var inst_24313 = (0);
var state_24370__$1 = (function (){var statearr_24413 = state_24370;
(statearr_24413[(11)] = inst_24313);

(statearr_24413[(30)] = inst_24304);

(statearr_24413[(12)] = inst_24311);

(statearr_24413[(29)] = inst_24302__$1);

(statearr_24413[(20)] = inst_24312);

(statearr_24413[(21)] = inst_24310);

return statearr_24413;
})();
var statearr_24414_24480 = state_24370__$1;
(statearr_24414_24480[(2)] = null);

(statearr_24414_24480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (28))){
var inst_24329 = (state_24370[(25)]);
var inst_24310 = (state_24370[(21)]);
var inst_24329__$1 = cljs.core.seq.call(null,inst_24310);
var state_24370__$1 = (function (){var statearr_24415 = state_24370;
(statearr_24415[(25)] = inst_24329__$1);

return statearr_24415;
})();
if(inst_24329__$1){
var statearr_24416_24481 = state_24370__$1;
(statearr_24416_24481[(1)] = (33));

} else {
var statearr_24417_24482 = state_24370__$1;
(statearr_24417_24482[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (25))){
var inst_24313 = (state_24370[(11)]);
var inst_24312 = (state_24370[(20)]);
var inst_24315 = (inst_24313 < inst_24312);
var inst_24316 = inst_24315;
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24316)){
var statearr_24418_24483 = state_24370__$1;
(statearr_24418_24483[(1)] = (27));

} else {
var statearr_24419_24484 = state_24370__$1;
(statearr_24419_24484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (34))){
var state_24370__$1 = state_24370;
var statearr_24420_24485 = state_24370__$1;
(statearr_24420_24485[(2)] = null);

(statearr_24420_24485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (17))){
var state_24370__$1 = state_24370;
var statearr_24421_24486 = state_24370__$1;
(statearr_24421_24486[(2)] = null);

(statearr_24421_24486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (3))){
var inst_24368 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
if((state_val_24371 === (12))){
var inst_24297 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24422_24487 = state_24370__$1;
(statearr_24422_24487[(2)] = inst_24297);

(statearr_24422_24487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (2))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(4),ch);
} else {
if((state_val_24371 === (23))){
var state_24370__$1 = state_24370;
var statearr_24423_24488 = state_24370__$1;
(statearr_24423_24488[(2)] = null);

(statearr_24423_24488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (35))){
var inst_24352 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24424_24489 = state_24370__$1;
(statearr_24424_24489[(2)] = inst_24352);

(statearr_24424_24489[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (19))){
var inst_24269 = (state_24370[(7)]);
var inst_24273 = cljs.core.chunk_first.call(null,inst_24269);
var inst_24274 = cljs.core.chunk_rest.call(null,inst_24269);
var inst_24275 = cljs.core.count.call(null,inst_24273);
var inst_24247 = inst_24274;
var inst_24248 = inst_24273;
var inst_24249 = inst_24275;
var inst_24250 = (0);
var state_24370__$1 = (function (){var statearr_24425 = state_24370;
(statearr_24425[(13)] = inst_24248);

(statearr_24425[(15)] = inst_24247);

(statearr_24425[(16)] = inst_24249);

(statearr_24425[(17)] = inst_24250);

return statearr_24425;
})();
var statearr_24426_24490 = state_24370__$1;
(statearr_24426_24490[(2)] = null);

(statearr_24426_24490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (11))){
var inst_24269 = (state_24370[(7)]);
var inst_24247 = (state_24370[(15)]);
var inst_24269__$1 = cljs.core.seq.call(null,inst_24247);
var state_24370__$1 = (function (){var statearr_24427 = state_24370;
(statearr_24427[(7)] = inst_24269__$1);

return statearr_24427;
})();
if(inst_24269__$1){
var statearr_24428_24491 = state_24370__$1;
(statearr_24428_24491[(1)] = (16));

} else {
var statearr_24429_24492 = state_24370__$1;
(statearr_24429_24492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (9))){
var inst_24299 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24430_24493 = state_24370__$1;
(statearr_24430_24493[(2)] = inst_24299);

(statearr_24430_24493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (5))){
var inst_24245 = cljs.core.deref.call(null,cs);
var inst_24246 = cljs.core.seq.call(null,inst_24245);
var inst_24247 = inst_24246;
var inst_24248 = null;
var inst_24249 = (0);
var inst_24250 = (0);
var state_24370__$1 = (function (){var statearr_24431 = state_24370;
(statearr_24431[(13)] = inst_24248);

(statearr_24431[(15)] = inst_24247);

(statearr_24431[(16)] = inst_24249);

(statearr_24431[(17)] = inst_24250);

return statearr_24431;
})();
var statearr_24432_24494 = state_24370__$1;
(statearr_24432_24494[(2)] = null);

(statearr_24432_24494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (14))){
var state_24370__$1 = state_24370;
var statearr_24433_24495 = state_24370__$1;
(statearr_24433_24495[(2)] = null);

(statearr_24433_24495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (45))){
var inst_24360 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24434_24496 = state_24370__$1;
(statearr_24434_24496[(2)] = inst_24360);

(statearr_24434_24496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (26))){
var inst_24302 = (state_24370[(29)]);
var inst_24356 = (state_24370[(2)]);
var inst_24357 = cljs.core.seq.call(null,inst_24302);
var state_24370__$1 = (function (){var statearr_24435 = state_24370;
(statearr_24435[(31)] = inst_24356);

return statearr_24435;
})();
if(inst_24357){
var statearr_24436_24497 = state_24370__$1;
(statearr_24436_24497[(1)] = (42));

} else {
var statearr_24437_24498 = state_24370__$1;
(statearr_24437_24498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (16))){
var inst_24269 = (state_24370[(7)]);
var inst_24271 = cljs.core.chunked_seq_QMARK_.call(null,inst_24269);
var state_24370__$1 = state_24370;
if(inst_24271){
var statearr_24438_24499 = state_24370__$1;
(statearr_24438_24499[(1)] = (19));

} else {
var statearr_24439_24500 = state_24370__$1;
(statearr_24439_24500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (38))){
var inst_24349 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24440_24501 = state_24370__$1;
(statearr_24440_24501[(2)] = inst_24349);

(statearr_24440_24501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (30))){
var state_24370__$1 = state_24370;
var statearr_24441_24502 = state_24370__$1;
(statearr_24441_24502[(2)] = null);

(statearr_24441_24502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (10))){
var inst_24248 = (state_24370[(13)]);
var inst_24250 = (state_24370[(17)]);
var inst_24258 = cljs.core._nth.call(null,inst_24248,inst_24250);
var inst_24259 = cljs.core.nth.call(null,inst_24258,(0),null);
var inst_24260 = cljs.core.nth.call(null,inst_24258,(1),null);
var state_24370__$1 = (function (){var statearr_24442 = state_24370;
(statearr_24442[(26)] = inst_24259);

return statearr_24442;
})();
if(cljs.core.truth_(inst_24260)){
var statearr_24443_24503 = state_24370__$1;
(statearr_24443_24503[(1)] = (13));

} else {
var statearr_24444_24504 = state_24370__$1;
(statearr_24444_24504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (18))){
var inst_24295 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24445_24505 = state_24370__$1;
(statearr_24445_24505[(2)] = inst_24295);

(statearr_24445_24505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (42))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(45),dchan);
} else {
if((state_val_24371 === (37))){
var inst_24238 = (state_24370[(10)]);
var inst_24329 = (state_24370[(25)]);
var inst_24338 = (state_24370[(23)]);
var inst_24338__$1 = cljs.core.first.call(null,inst_24329);
var inst_24339 = cljs.core.async.put_BANG_.call(null,inst_24338__$1,inst_24238,done);
var state_24370__$1 = (function (){var statearr_24446 = state_24370;
(statearr_24446[(23)] = inst_24338__$1);

return statearr_24446;
})();
if(cljs.core.truth_(inst_24339)){
var statearr_24447_24506 = state_24370__$1;
(statearr_24447_24506[(1)] = (39));

} else {
var statearr_24448_24507 = state_24370__$1;
(statearr_24448_24507[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (8))){
var inst_24249 = (state_24370[(16)]);
var inst_24250 = (state_24370[(17)]);
var inst_24252 = (inst_24250 < inst_24249);
var inst_24253 = inst_24252;
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24253)){
var statearr_24449_24508 = state_24370__$1;
(statearr_24449_24508[(1)] = (10));

} else {
var statearr_24450_24509 = state_24370__$1;
(statearr_24450_24509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___24455,cs,m,dchan,dctr,done))
;
return ((function (switch__23541__auto__,c__23636__auto___24455,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23542__auto__ = null;
var cljs$core$async$mult_$_state_machine__23542__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = cljs$core$async$mult_$_state_machine__23542__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var cljs$core$async$mult_$_state_machine__23542__auto____1 = (function (state_24370){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__23545__auto__ = e24452;
var statearr_24453_24510 = state_24370;
(statearr_24453_24510[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24511 = state_24370;
state_24370 = G__24511;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23542__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23542__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23542__auto____0;
cljs$core$async$mult_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23542__auto____1;
return cljs$core$async$mult_$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___24455,cs,m,dchan,dctr,done))
})();
var state__23638__auto__ = (function (){var statearr_24454 = f__23637__auto__.call(null);
(statearr_24454[(6)] = c__23636__auto___24455);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___24455,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24513 = arguments.length;
switch (G__24513) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24525 = arguments.length;
var i__4731__auto___24526 = (0);
while(true){
if((i__4731__auto___24526 < len__4730__auto___24525)){
args__4736__auto__.push((arguments[i__4731__auto___24526]));

var G__24527 = (i__4731__auto___24526 + (1));
i__4731__auto___24526 = G__24527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24519){
var map__24520 = p__24519;
var map__24520__$1 = (((((!((map__24520 == null))))?(((((map__24520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24520):map__24520);
var opts = map__24520__$1;
var statearr_24522_24528 = state;
(statearr_24522_24528[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__24520,map__24520__$1,opts){
return (function (val){
var statearr_24523_24529 = state;
(statearr_24523_24529[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24520,map__24520__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_24524_24530 = state;
(statearr_24524_24530[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24515){
var G__24516 = cljs.core.first.call(null,seq24515);
var seq24515__$1 = cljs.core.next.call(null,seq24515);
var G__24517 = cljs.core.first.call(null,seq24515__$1);
var seq24515__$2 = cljs.core.next.call(null,seq24515__$1);
var G__24518 = cljs.core.first.call(null,seq24515__$2);
var seq24515__$3 = cljs.core.next.call(null,seq24515__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24516,G__24517,G__24518,seq24515__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24531 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24532){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24532 = meta24532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24533,meta24532__$1){
var self__ = this;
var _24533__$1 = this;
return (new cljs.core.async.t_cljs$core$async24531(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24532__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24533){
var self__ = this;
var _24533__$1 = this;
return self__.meta24532;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24532","meta24532",1301154882,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24531";

cljs.core.async.t_cljs$core$async24531.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24531");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24531.
 */
cljs.core.async.__GT_t_cljs$core$async24531 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24531(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24532){
return (new cljs.core.async.t_cljs$core$async24531(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24532));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24531(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23636__auto___24695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (7))){
var inst_24550 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24637_24696 = state_24635__$1;
(statearr_24637_24696[(2)] = inst_24550);

(statearr_24637_24696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (20))){
var inst_24562 = (state_24635[(7)]);
var state_24635__$1 = state_24635;
var statearr_24638_24697 = state_24635__$1;
(statearr_24638_24697[(2)] = inst_24562);

(statearr_24638_24697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (27))){
var state_24635__$1 = state_24635;
var statearr_24639_24698 = state_24635__$1;
(statearr_24639_24698[(2)] = null);

(statearr_24639_24698[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (1))){
var inst_24537 = (state_24635[(8)]);
var inst_24537__$1 = calc_state.call(null);
var inst_24539 = (inst_24537__$1 == null);
var inst_24540 = cljs.core.not.call(null,inst_24539);
var state_24635__$1 = (function (){var statearr_24640 = state_24635;
(statearr_24640[(8)] = inst_24537__$1);

return statearr_24640;
})();
if(inst_24540){
var statearr_24641_24699 = state_24635__$1;
(statearr_24641_24699[(1)] = (2));

} else {
var statearr_24642_24700 = state_24635__$1;
(statearr_24642_24700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (24))){
var inst_24586 = (state_24635[(9)]);
var inst_24609 = (state_24635[(10)]);
var inst_24595 = (state_24635[(11)]);
var inst_24609__$1 = inst_24586.call(null,inst_24595);
var state_24635__$1 = (function (){var statearr_24643 = state_24635;
(statearr_24643[(10)] = inst_24609__$1);

return statearr_24643;
})();
if(cljs.core.truth_(inst_24609__$1)){
var statearr_24644_24701 = state_24635__$1;
(statearr_24644_24701[(1)] = (29));

} else {
var statearr_24645_24702 = state_24635__$1;
(statearr_24645_24702[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (4))){
var inst_24553 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24553)){
var statearr_24646_24703 = state_24635__$1;
(statearr_24646_24703[(1)] = (8));

} else {
var statearr_24647_24704 = state_24635__$1;
(statearr_24647_24704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (15))){
var inst_24580 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24580)){
var statearr_24648_24705 = state_24635__$1;
(statearr_24648_24705[(1)] = (19));

} else {
var statearr_24649_24706 = state_24635__$1;
(statearr_24649_24706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (21))){
var inst_24585 = (state_24635[(12)]);
var inst_24585__$1 = (state_24635[(2)]);
var inst_24586 = cljs.core.get.call(null,inst_24585__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24587 = cljs.core.get.call(null,inst_24585__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24588 = cljs.core.get.call(null,inst_24585__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24635__$1 = (function (){var statearr_24650 = state_24635;
(statearr_24650[(9)] = inst_24586);

(statearr_24650[(12)] = inst_24585__$1);

(statearr_24650[(13)] = inst_24587);

return statearr_24650;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24635__$1,(22),inst_24588);
} else {
if((state_val_24636 === (31))){
var inst_24617 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24617)){
var statearr_24651_24707 = state_24635__$1;
(statearr_24651_24707[(1)] = (32));

} else {
var statearr_24652_24708 = state_24635__$1;
(statearr_24652_24708[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (32))){
var inst_24594 = (state_24635[(14)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24635__$1,(35),out,inst_24594);
} else {
if((state_val_24636 === (33))){
var inst_24585 = (state_24635[(12)]);
var inst_24562 = inst_24585;
var state_24635__$1 = (function (){var statearr_24653 = state_24635;
(statearr_24653[(7)] = inst_24562);

return statearr_24653;
})();
var statearr_24654_24709 = state_24635__$1;
(statearr_24654_24709[(2)] = null);

(statearr_24654_24709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (13))){
var inst_24562 = (state_24635[(7)]);
var inst_24569 = inst_24562.cljs$lang$protocol_mask$partition0$;
var inst_24570 = (inst_24569 & (64));
var inst_24571 = inst_24562.cljs$core$ISeq$;
var inst_24572 = (cljs.core.PROTOCOL_SENTINEL === inst_24571);
var inst_24573 = ((inst_24570) || (inst_24572));
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24573)){
var statearr_24655_24710 = state_24635__$1;
(statearr_24655_24710[(1)] = (16));

} else {
var statearr_24656_24711 = state_24635__$1;
(statearr_24656_24711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (22))){
var inst_24594 = (state_24635[(14)]);
var inst_24595 = (state_24635[(11)]);
var inst_24593 = (state_24635[(2)]);
var inst_24594__$1 = cljs.core.nth.call(null,inst_24593,(0),null);
var inst_24595__$1 = cljs.core.nth.call(null,inst_24593,(1),null);
var inst_24596 = (inst_24594__$1 == null);
var inst_24597 = cljs.core._EQ_.call(null,inst_24595__$1,change);
var inst_24598 = ((inst_24596) || (inst_24597));
var state_24635__$1 = (function (){var statearr_24657 = state_24635;
(statearr_24657[(14)] = inst_24594__$1);

(statearr_24657[(11)] = inst_24595__$1);

return statearr_24657;
})();
if(cljs.core.truth_(inst_24598)){
var statearr_24658_24712 = state_24635__$1;
(statearr_24658_24712[(1)] = (23));

} else {
var statearr_24659_24713 = state_24635__$1;
(statearr_24659_24713[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (36))){
var inst_24585 = (state_24635[(12)]);
var inst_24562 = inst_24585;
var state_24635__$1 = (function (){var statearr_24660 = state_24635;
(statearr_24660[(7)] = inst_24562);

return statearr_24660;
})();
var statearr_24661_24714 = state_24635__$1;
(statearr_24661_24714[(2)] = null);

(statearr_24661_24714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (29))){
var inst_24609 = (state_24635[(10)]);
var state_24635__$1 = state_24635;
var statearr_24662_24715 = state_24635__$1;
(statearr_24662_24715[(2)] = inst_24609);

(statearr_24662_24715[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (6))){
var state_24635__$1 = state_24635;
var statearr_24663_24716 = state_24635__$1;
(statearr_24663_24716[(2)] = false);

(statearr_24663_24716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (28))){
var inst_24605 = (state_24635[(2)]);
var inst_24606 = calc_state.call(null);
var inst_24562 = inst_24606;
var state_24635__$1 = (function (){var statearr_24664 = state_24635;
(statearr_24664[(7)] = inst_24562);

(statearr_24664[(15)] = inst_24605);

return statearr_24664;
})();
var statearr_24665_24717 = state_24635__$1;
(statearr_24665_24717[(2)] = null);

(statearr_24665_24717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (25))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24666_24718 = state_24635__$1;
(statearr_24666_24718[(2)] = inst_24631);

(statearr_24666_24718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (34))){
var inst_24629 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24667_24719 = state_24635__$1;
(statearr_24667_24719[(2)] = inst_24629);

(statearr_24667_24719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (17))){
var state_24635__$1 = state_24635;
var statearr_24668_24720 = state_24635__$1;
(statearr_24668_24720[(2)] = false);

(statearr_24668_24720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (3))){
var state_24635__$1 = state_24635;
var statearr_24669_24721 = state_24635__$1;
(statearr_24669_24721[(2)] = false);

(statearr_24669_24721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (12))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24635__$1,inst_24633);
} else {
if((state_val_24636 === (2))){
var inst_24537 = (state_24635[(8)]);
var inst_24542 = inst_24537.cljs$lang$protocol_mask$partition0$;
var inst_24543 = (inst_24542 & (64));
var inst_24544 = inst_24537.cljs$core$ISeq$;
var inst_24545 = (cljs.core.PROTOCOL_SENTINEL === inst_24544);
var inst_24546 = ((inst_24543) || (inst_24545));
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24546)){
var statearr_24670_24722 = state_24635__$1;
(statearr_24670_24722[(1)] = (5));

} else {
var statearr_24671_24723 = state_24635__$1;
(statearr_24671_24723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (23))){
var inst_24594 = (state_24635[(14)]);
var inst_24600 = (inst_24594 == null);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24600)){
var statearr_24672_24724 = state_24635__$1;
(statearr_24672_24724[(1)] = (26));

} else {
var statearr_24673_24725 = state_24635__$1;
(statearr_24673_24725[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (35))){
var inst_24620 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24620)){
var statearr_24674_24726 = state_24635__$1;
(statearr_24674_24726[(1)] = (36));

} else {
var statearr_24675_24727 = state_24635__$1;
(statearr_24675_24727[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (19))){
var inst_24562 = (state_24635[(7)]);
var inst_24582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24562);
var state_24635__$1 = state_24635;
var statearr_24676_24728 = state_24635__$1;
(statearr_24676_24728[(2)] = inst_24582);

(statearr_24676_24728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (11))){
var inst_24562 = (state_24635[(7)]);
var inst_24566 = (inst_24562 == null);
var inst_24567 = cljs.core.not.call(null,inst_24566);
var state_24635__$1 = state_24635;
if(inst_24567){
var statearr_24677_24729 = state_24635__$1;
(statearr_24677_24729[(1)] = (13));

} else {
var statearr_24678_24730 = state_24635__$1;
(statearr_24678_24730[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (9))){
var inst_24537 = (state_24635[(8)]);
var state_24635__$1 = state_24635;
var statearr_24679_24731 = state_24635__$1;
(statearr_24679_24731[(2)] = inst_24537);

(statearr_24679_24731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (5))){
var state_24635__$1 = state_24635;
var statearr_24680_24732 = state_24635__$1;
(statearr_24680_24732[(2)] = true);

(statearr_24680_24732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (14))){
var state_24635__$1 = state_24635;
var statearr_24681_24733 = state_24635__$1;
(statearr_24681_24733[(2)] = false);

(statearr_24681_24733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (26))){
var inst_24595 = (state_24635[(11)]);
var inst_24602 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24595);
var state_24635__$1 = state_24635;
var statearr_24682_24734 = state_24635__$1;
(statearr_24682_24734[(2)] = inst_24602);

(statearr_24682_24734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (16))){
var state_24635__$1 = state_24635;
var statearr_24683_24735 = state_24635__$1;
(statearr_24683_24735[(2)] = true);

(statearr_24683_24735[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (38))){
var inst_24625 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24684_24736 = state_24635__$1;
(statearr_24684_24736[(2)] = inst_24625);

(statearr_24684_24736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (30))){
var inst_24586 = (state_24635[(9)]);
var inst_24587 = (state_24635[(13)]);
var inst_24595 = (state_24635[(11)]);
var inst_24612 = cljs.core.empty_QMARK_.call(null,inst_24586);
var inst_24613 = inst_24587.call(null,inst_24595);
var inst_24614 = cljs.core.not.call(null,inst_24613);
var inst_24615 = ((inst_24612) && (inst_24614));
var state_24635__$1 = state_24635;
var statearr_24685_24737 = state_24635__$1;
(statearr_24685_24737[(2)] = inst_24615);

(statearr_24685_24737[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (10))){
var inst_24537 = (state_24635[(8)]);
var inst_24558 = (state_24635[(2)]);
var inst_24559 = cljs.core.get.call(null,inst_24558,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24560 = cljs.core.get.call(null,inst_24558,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24561 = cljs.core.get.call(null,inst_24558,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24562 = inst_24537;
var state_24635__$1 = (function (){var statearr_24686 = state_24635;
(statearr_24686[(7)] = inst_24562);

(statearr_24686[(16)] = inst_24560);

(statearr_24686[(17)] = inst_24559);

(statearr_24686[(18)] = inst_24561);

return statearr_24686;
})();
var statearr_24687_24738 = state_24635__$1;
(statearr_24687_24738[(2)] = null);

(statearr_24687_24738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (18))){
var inst_24577 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24688_24739 = state_24635__$1;
(statearr_24688_24739[(2)] = inst_24577);

(statearr_24688_24739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (37))){
var state_24635__$1 = state_24635;
var statearr_24689_24740 = state_24635__$1;
(statearr_24689_24740[(2)] = null);

(statearr_24689_24740[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (8))){
var inst_24537 = (state_24635[(8)]);
var inst_24555 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24537);
var state_24635__$1 = state_24635;
var statearr_24690_24741 = state_24635__$1;
(statearr_24690_24741[(2)] = inst_24555);

(statearr_24690_24741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23541__auto__,c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23542__auto__ = null;
var cljs$core$async$mix_$_state_machine__23542__auto____0 = (function (){
var statearr_24691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24691[(0)] = cljs$core$async$mix_$_state_machine__23542__auto__);

(statearr_24691[(1)] = (1));

return statearr_24691;
});
var cljs$core$async$mix_$_state_machine__23542__auto____1 = (function (state_24635){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24692){if((e24692 instanceof Object)){
var ex__23545__auto__ = e24692;
var statearr_24693_24742 = state_24635;
(statearr_24693_24742[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24743 = state_24635;
state_24635 = G__24743;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23542__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23542__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23542__auto____0;
cljs$core$async$mix_$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23542__auto____1;
return cljs$core$async$mix_$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23638__auto__ = (function (){var statearr_24694 = f__23637__auto__.call(null);
(statearr_24694[(6)] = c__23636__auto___24695);

return statearr_24694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___24695,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24745 = arguments.length;
switch (G__24745) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24749 = arguments.length;
switch (G__24749) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24747_SHARP_){
if(cljs.core.truth_(p1__24747_SHARP_.call(null,topic))){
return p1__24747_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24747_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24750 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24751){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24751 = meta24751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24752,meta24751__$1){
var self__ = this;
var _24752__$1 = this;
return (new cljs.core.async.t_cljs$core$async24750(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24751__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24752){
var self__ = this;
var _24752__$1 = this;
return self__.meta24751;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24751","meta24751",-1925553548,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24750";

cljs.core.async.t_cljs$core$async24750.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24750");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24750.
 */
cljs.core.async.__GT_t_cljs$core$async24750 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24751){
return (new cljs.core.async.t_cljs$core$async24750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24751));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24750(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23636__auto___24870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___24870,mults,ensure_mult,p){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___24870,mults,ensure_mult,p){
return (function (state_24824){
var state_val_24825 = (state_24824[(1)]);
if((state_val_24825 === (7))){
var inst_24820 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24826_24871 = state_24824__$1;
(statearr_24826_24871[(2)] = inst_24820);

(statearr_24826_24871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (20))){
var state_24824__$1 = state_24824;
var statearr_24827_24872 = state_24824__$1;
(statearr_24827_24872[(2)] = null);

(statearr_24827_24872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (1))){
var state_24824__$1 = state_24824;
var statearr_24828_24873 = state_24824__$1;
(statearr_24828_24873[(2)] = null);

(statearr_24828_24873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (24))){
var inst_24803 = (state_24824[(7)]);
var inst_24812 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24803);
var state_24824__$1 = state_24824;
var statearr_24829_24874 = state_24824__$1;
(statearr_24829_24874[(2)] = inst_24812);

(statearr_24829_24874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (4))){
var inst_24755 = (state_24824[(8)]);
var inst_24755__$1 = (state_24824[(2)]);
var inst_24756 = (inst_24755__$1 == null);
var state_24824__$1 = (function (){var statearr_24830 = state_24824;
(statearr_24830[(8)] = inst_24755__$1);

return statearr_24830;
})();
if(cljs.core.truth_(inst_24756)){
var statearr_24831_24875 = state_24824__$1;
(statearr_24831_24875[(1)] = (5));

} else {
var statearr_24832_24876 = state_24824__$1;
(statearr_24832_24876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (15))){
var inst_24797 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24833_24877 = state_24824__$1;
(statearr_24833_24877[(2)] = inst_24797);

(statearr_24833_24877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (21))){
var inst_24817 = (state_24824[(2)]);
var state_24824__$1 = (function (){var statearr_24834 = state_24824;
(statearr_24834[(9)] = inst_24817);

return statearr_24834;
})();
var statearr_24835_24878 = state_24824__$1;
(statearr_24835_24878[(2)] = null);

(statearr_24835_24878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (13))){
var inst_24779 = (state_24824[(10)]);
var inst_24781 = cljs.core.chunked_seq_QMARK_.call(null,inst_24779);
var state_24824__$1 = state_24824;
if(inst_24781){
var statearr_24836_24879 = state_24824__$1;
(statearr_24836_24879[(1)] = (16));

} else {
var statearr_24837_24880 = state_24824__$1;
(statearr_24837_24880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (22))){
var inst_24809 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
if(cljs.core.truth_(inst_24809)){
var statearr_24838_24881 = state_24824__$1;
(statearr_24838_24881[(1)] = (23));

} else {
var statearr_24839_24882 = state_24824__$1;
(statearr_24839_24882[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (6))){
var inst_24755 = (state_24824[(8)]);
var inst_24805 = (state_24824[(11)]);
var inst_24803 = (state_24824[(7)]);
var inst_24803__$1 = topic_fn.call(null,inst_24755);
var inst_24804 = cljs.core.deref.call(null,mults);
var inst_24805__$1 = cljs.core.get.call(null,inst_24804,inst_24803__$1);
var state_24824__$1 = (function (){var statearr_24840 = state_24824;
(statearr_24840[(11)] = inst_24805__$1);

(statearr_24840[(7)] = inst_24803__$1);

return statearr_24840;
})();
if(cljs.core.truth_(inst_24805__$1)){
var statearr_24841_24883 = state_24824__$1;
(statearr_24841_24883[(1)] = (19));

} else {
var statearr_24842_24884 = state_24824__$1;
(statearr_24842_24884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (25))){
var inst_24814 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24843_24885 = state_24824__$1;
(statearr_24843_24885[(2)] = inst_24814);

(statearr_24843_24885[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (17))){
var inst_24779 = (state_24824[(10)]);
var inst_24788 = cljs.core.first.call(null,inst_24779);
var inst_24789 = cljs.core.async.muxch_STAR_.call(null,inst_24788);
var inst_24790 = cljs.core.async.close_BANG_.call(null,inst_24789);
var inst_24791 = cljs.core.next.call(null,inst_24779);
var inst_24765 = inst_24791;
var inst_24766 = null;
var inst_24767 = (0);
var inst_24768 = (0);
var state_24824__$1 = (function (){var statearr_24844 = state_24824;
(statearr_24844[(12)] = inst_24768);

(statearr_24844[(13)] = inst_24766);

(statearr_24844[(14)] = inst_24765);

(statearr_24844[(15)] = inst_24790);

(statearr_24844[(16)] = inst_24767);

return statearr_24844;
})();
var statearr_24845_24886 = state_24824__$1;
(statearr_24845_24886[(2)] = null);

(statearr_24845_24886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (3))){
var inst_24822 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24824__$1,inst_24822);
} else {
if((state_val_24825 === (12))){
var inst_24799 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24846_24887 = state_24824__$1;
(statearr_24846_24887[(2)] = inst_24799);

(statearr_24846_24887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (2))){
var state_24824__$1 = state_24824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24824__$1,(4),ch);
} else {
if((state_val_24825 === (23))){
var state_24824__$1 = state_24824;
var statearr_24847_24888 = state_24824__$1;
(statearr_24847_24888[(2)] = null);

(statearr_24847_24888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (19))){
var inst_24755 = (state_24824[(8)]);
var inst_24805 = (state_24824[(11)]);
var inst_24807 = cljs.core.async.muxch_STAR_.call(null,inst_24805);
var state_24824__$1 = state_24824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24824__$1,(22),inst_24807,inst_24755);
} else {
if((state_val_24825 === (11))){
var inst_24765 = (state_24824[(14)]);
var inst_24779 = (state_24824[(10)]);
var inst_24779__$1 = cljs.core.seq.call(null,inst_24765);
var state_24824__$1 = (function (){var statearr_24848 = state_24824;
(statearr_24848[(10)] = inst_24779__$1);

return statearr_24848;
})();
if(inst_24779__$1){
var statearr_24849_24889 = state_24824__$1;
(statearr_24849_24889[(1)] = (13));

} else {
var statearr_24850_24890 = state_24824__$1;
(statearr_24850_24890[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (9))){
var inst_24801 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24851_24891 = state_24824__$1;
(statearr_24851_24891[(2)] = inst_24801);

(statearr_24851_24891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (5))){
var inst_24762 = cljs.core.deref.call(null,mults);
var inst_24763 = cljs.core.vals.call(null,inst_24762);
var inst_24764 = cljs.core.seq.call(null,inst_24763);
var inst_24765 = inst_24764;
var inst_24766 = null;
var inst_24767 = (0);
var inst_24768 = (0);
var state_24824__$1 = (function (){var statearr_24852 = state_24824;
(statearr_24852[(12)] = inst_24768);

(statearr_24852[(13)] = inst_24766);

(statearr_24852[(14)] = inst_24765);

(statearr_24852[(16)] = inst_24767);

return statearr_24852;
})();
var statearr_24853_24892 = state_24824__$1;
(statearr_24853_24892[(2)] = null);

(statearr_24853_24892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (14))){
var state_24824__$1 = state_24824;
var statearr_24857_24893 = state_24824__$1;
(statearr_24857_24893[(2)] = null);

(statearr_24857_24893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (16))){
var inst_24779 = (state_24824[(10)]);
var inst_24783 = cljs.core.chunk_first.call(null,inst_24779);
var inst_24784 = cljs.core.chunk_rest.call(null,inst_24779);
var inst_24785 = cljs.core.count.call(null,inst_24783);
var inst_24765 = inst_24784;
var inst_24766 = inst_24783;
var inst_24767 = inst_24785;
var inst_24768 = (0);
var state_24824__$1 = (function (){var statearr_24858 = state_24824;
(statearr_24858[(12)] = inst_24768);

(statearr_24858[(13)] = inst_24766);

(statearr_24858[(14)] = inst_24765);

(statearr_24858[(16)] = inst_24767);

return statearr_24858;
})();
var statearr_24859_24894 = state_24824__$1;
(statearr_24859_24894[(2)] = null);

(statearr_24859_24894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (10))){
var inst_24768 = (state_24824[(12)]);
var inst_24766 = (state_24824[(13)]);
var inst_24765 = (state_24824[(14)]);
var inst_24767 = (state_24824[(16)]);
var inst_24773 = cljs.core._nth.call(null,inst_24766,inst_24768);
var inst_24774 = cljs.core.async.muxch_STAR_.call(null,inst_24773);
var inst_24775 = cljs.core.async.close_BANG_.call(null,inst_24774);
var inst_24776 = (inst_24768 + (1));
var tmp24854 = inst_24766;
var tmp24855 = inst_24765;
var tmp24856 = inst_24767;
var inst_24765__$1 = tmp24855;
var inst_24766__$1 = tmp24854;
var inst_24767__$1 = tmp24856;
var inst_24768__$1 = inst_24776;
var state_24824__$1 = (function (){var statearr_24860 = state_24824;
(statearr_24860[(12)] = inst_24768__$1);

(statearr_24860[(17)] = inst_24775);

(statearr_24860[(13)] = inst_24766__$1);

(statearr_24860[(14)] = inst_24765__$1);

(statearr_24860[(16)] = inst_24767__$1);

return statearr_24860;
})();
var statearr_24861_24895 = state_24824__$1;
(statearr_24861_24895[(2)] = null);

(statearr_24861_24895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (18))){
var inst_24794 = (state_24824[(2)]);
var state_24824__$1 = state_24824;
var statearr_24862_24896 = state_24824__$1;
(statearr_24862_24896[(2)] = inst_24794);

(statearr_24862_24896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24825 === (8))){
var inst_24768 = (state_24824[(12)]);
var inst_24767 = (state_24824[(16)]);
var inst_24770 = (inst_24768 < inst_24767);
var inst_24771 = inst_24770;
var state_24824__$1 = state_24824;
if(cljs.core.truth_(inst_24771)){
var statearr_24863_24897 = state_24824__$1;
(statearr_24863_24897[(1)] = (10));

} else {
var statearr_24864_24898 = state_24824__$1;
(statearr_24864_24898[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___24870,mults,ensure_mult,p))
;
return ((function (switch__23541__auto__,c__23636__auto___24870,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_24824){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__23545__auto__ = e24866;
var statearr_24867_24899 = state_24824;
(statearr_24867_24899[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24900 = state_24824;
state_24824 = G__24900;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_24824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_24824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___24870,mults,ensure_mult,p))
})();
var state__23638__auto__ = (function (){var statearr_24868 = f__23637__auto__.call(null);
(statearr_24868[(6)] = c__23636__auto___24870);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___24870,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24902 = arguments.length;
switch (G__24902) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24905 = arguments.length;
switch (G__24905) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24908 = arguments.length;
switch (G__24908) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23636__auto___24975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24947){
var state_val_24948 = (state_24947[(1)]);
if((state_val_24948 === (7))){
var state_24947__$1 = state_24947;
var statearr_24949_24976 = state_24947__$1;
(statearr_24949_24976[(2)] = null);

(statearr_24949_24976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (1))){
var state_24947__$1 = state_24947;
var statearr_24950_24977 = state_24947__$1;
(statearr_24950_24977[(2)] = null);

(statearr_24950_24977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (4))){
var inst_24911 = (state_24947[(7)]);
var inst_24913 = (inst_24911 < cnt);
var state_24947__$1 = state_24947;
if(cljs.core.truth_(inst_24913)){
var statearr_24951_24978 = state_24947__$1;
(statearr_24951_24978[(1)] = (6));

} else {
var statearr_24952_24979 = state_24947__$1;
(statearr_24952_24979[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (15))){
var inst_24943 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24953_24980 = state_24947__$1;
(statearr_24953_24980[(2)] = inst_24943);

(statearr_24953_24980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (13))){
var inst_24936 = cljs.core.async.close_BANG_.call(null,out);
var state_24947__$1 = state_24947;
var statearr_24954_24981 = state_24947__$1;
(statearr_24954_24981[(2)] = inst_24936);

(statearr_24954_24981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (6))){
var state_24947__$1 = state_24947;
var statearr_24955_24982 = state_24947__$1;
(statearr_24955_24982[(2)] = null);

(statearr_24955_24982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (3))){
var inst_24945 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24947__$1,inst_24945);
} else {
if((state_val_24948 === (12))){
var inst_24933 = (state_24947[(8)]);
var inst_24933__$1 = (state_24947[(2)]);
var inst_24934 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24933__$1);
var state_24947__$1 = (function (){var statearr_24956 = state_24947;
(statearr_24956[(8)] = inst_24933__$1);

return statearr_24956;
})();
if(cljs.core.truth_(inst_24934)){
var statearr_24957_24983 = state_24947__$1;
(statearr_24957_24983[(1)] = (13));

} else {
var statearr_24958_24984 = state_24947__$1;
(statearr_24958_24984[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (2))){
var inst_24910 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24911 = (0);
var state_24947__$1 = (function (){var statearr_24959 = state_24947;
(statearr_24959[(9)] = inst_24910);

(statearr_24959[(7)] = inst_24911);

return statearr_24959;
})();
var statearr_24960_24985 = state_24947__$1;
(statearr_24960_24985[(2)] = null);

(statearr_24960_24985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (11))){
var inst_24911 = (state_24947[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24947,(10),Object,null,(9));
var inst_24920 = chs__$1.call(null,inst_24911);
var inst_24921 = done.call(null,inst_24911);
var inst_24922 = cljs.core.async.take_BANG_.call(null,inst_24920,inst_24921);
var state_24947__$1 = state_24947;
var statearr_24961_24986 = state_24947__$1;
(statearr_24961_24986[(2)] = inst_24922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (9))){
var inst_24911 = (state_24947[(7)]);
var inst_24924 = (state_24947[(2)]);
var inst_24925 = (inst_24911 + (1));
var inst_24911__$1 = inst_24925;
var state_24947__$1 = (function (){var statearr_24962 = state_24947;
(statearr_24962[(10)] = inst_24924);

(statearr_24962[(7)] = inst_24911__$1);

return statearr_24962;
})();
var statearr_24963_24987 = state_24947__$1;
(statearr_24963_24987[(2)] = null);

(statearr_24963_24987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (5))){
var inst_24931 = (state_24947[(2)]);
var state_24947__$1 = (function (){var statearr_24964 = state_24947;
(statearr_24964[(11)] = inst_24931);

return statearr_24964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24947__$1,(12),dchan);
} else {
if((state_val_24948 === (14))){
var inst_24933 = (state_24947[(8)]);
var inst_24938 = cljs.core.apply.call(null,f,inst_24933);
var state_24947__$1 = state_24947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24947__$1,(16),out,inst_24938);
} else {
if((state_val_24948 === (16))){
var inst_24940 = (state_24947[(2)]);
var state_24947__$1 = (function (){var statearr_24965 = state_24947;
(statearr_24965[(12)] = inst_24940);

return statearr_24965;
})();
var statearr_24966_24988 = state_24947__$1;
(statearr_24966_24988[(2)] = null);

(statearr_24966_24988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (10))){
var inst_24915 = (state_24947[(2)]);
var inst_24916 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24947__$1 = (function (){var statearr_24967 = state_24947;
(statearr_24967[(13)] = inst_24915);

return statearr_24967;
})();
var statearr_24968_24989 = state_24947__$1;
(statearr_24968_24989[(2)] = inst_24916);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24947__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24948 === (8))){
var inst_24929 = (state_24947[(2)]);
var state_24947__$1 = state_24947;
var statearr_24969_24990 = state_24947__$1;
(statearr_24969_24990[(2)] = inst_24929);

(statearr_24969_24990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23541__auto__,c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_24970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24970[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_24970[(1)] = (1));

return statearr_24970;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_24947){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_24947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e24971){if((e24971 instanceof Object)){
var ex__23545__auto__ = e24971;
var statearr_24972_24991 = state_24947;
(statearr_24972_24991[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24992 = state_24947;
state_24947 = G__24992;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_24947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_24947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23638__auto__ = (function (){var statearr_24973 = f__23637__auto__.call(null);
(statearr_24973[(6)] = c__23636__auto___24975);

return statearr_24973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___24975,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24995 = arguments.length;
switch (G__24995) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25049,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25049,out){
return (function (state_25027){
var state_val_25028 = (state_25027[(1)]);
if((state_val_25028 === (7))){
var inst_25006 = (state_25027[(7)]);
var inst_25007 = (state_25027[(8)]);
var inst_25006__$1 = (state_25027[(2)]);
var inst_25007__$1 = cljs.core.nth.call(null,inst_25006__$1,(0),null);
var inst_25008 = cljs.core.nth.call(null,inst_25006__$1,(1),null);
var inst_25009 = (inst_25007__$1 == null);
var state_25027__$1 = (function (){var statearr_25029 = state_25027;
(statearr_25029[(7)] = inst_25006__$1);

(statearr_25029[(9)] = inst_25008);

(statearr_25029[(8)] = inst_25007__$1);

return statearr_25029;
})();
if(cljs.core.truth_(inst_25009)){
var statearr_25030_25050 = state_25027__$1;
(statearr_25030_25050[(1)] = (8));

} else {
var statearr_25031_25051 = state_25027__$1;
(statearr_25031_25051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (1))){
var inst_24996 = cljs.core.vec.call(null,chs);
var inst_24997 = inst_24996;
var state_25027__$1 = (function (){var statearr_25032 = state_25027;
(statearr_25032[(10)] = inst_24997);

return statearr_25032;
})();
var statearr_25033_25052 = state_25027__$1;
(statearr_25033_25052[(2)] = null);

(statearr_25033_25052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (4))){
var inst_24997 = (state_25027[(10)]);
var state_25027__$1 = state_25027;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25027__$1,(7),inst_24997);
} else {
if((state_val_25028 === (6))){
var inst_25023 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25034_25053 = state_25027__$1;
(statearr_25034_25053[(2)] = inst_25023);

(statearr_25034_25053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (3))){
var inst_25025 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25027__$1,inst_25025);
} else {
if((state_val_25028 === (2))){
var inst_24997 = (state_25027[(10)]);
var inst_24999 = cljs.core.count.call(null,inst_24997);
var inst_25000 = (inst_24999 > (0));
var state_25027__$1 = state_25027;
if(cljs.core.truth_(inst_25000)){
var statearr_25036_25054 = state_25027__$1;
(statearr_25036_25054[(1)] = (4));

} else {
var statearr_25037_25055 = state_25027__$1;
(statearr_25037_25055[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (11))){
var inst_24997 = (state_25027[(10)]);
var inst_25016 = (state_25027[(2)]);
var tmp25035 = inst_24997;
var inst_24997__$1 = tmp25035;
var state_25027__$1 = (function (){var statearr_25038 = state_25027;
(statearr_25038[(10)] = inst_24997__$1);

(statearr_25038[(11)] = inst_25016);

return statearr_25038;
})();
var statearr_25039_25056 = state_25027__$1;
(statearr_25039_25056[(2)] = null);

(statearr_25039_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (9))){
var inst_25007 = (state_25027[(8)]);
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25027__$1,(11),out,inst_25007);
} else {
if((state_val_25028 === (5))){
var inst_25021 = cljs.core.async.close_BANG_.call(null,out);
var state_25027__$1 = state_25027;
var statearr_25040_25057 = state_25027__$1;
(statearr_25040_25057[(2)] = inst_25021);

(statearr_25040_25057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (10))){
var inst_25019 = (state_25027[(2)]);
var state_25027__$1 = state_25027;
var statearr_25041_25058 = state_25027__$1;
(statearr_25041_25058[(2)] = inst_25019);

(statearr_25041_25058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25028 === (8))){
var inst_25006 = (state_25027[(7)]);
var inst_24997 = (state_25027[(10)]);
var inst_25008 = (state_25027[(9)]);
var inst_25007 = (state_25027[(8)]);
var inst_25011 = (function (){var cs = inst_24997;
var vec__25002 = inst_25006;
var v = inst_25007;
var c = inst_25008;
return ((function (cs,vec__25002,v,c,inst_25006,inst_24997,inst_25008,inst_25007,state_val_25028,c__23636__auto___25049,out){
return (function (p1__24993_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24993_SHARP_);
});
;})(cs,vec__25002,v,c,inst_25006,inst_24997,inst_25008,inst_25007,state_val_25028,c__23636__auto___25049,out))
})();
var inst_25012 = cljs.core.filterv.call(null,inst_25011,inst_24997);
var inst_24997__$1 = inst_25012;
var state_25027__$1 = (function (){var statearr_25042 = state_25027;
(statearr_25042[(10)] = inst_24997__$1);

return statearr_25042;
})();
var statearr_25043_25059 = state_25027__$1;
(statearr_25043_25059[(2)] = null);

(statearr_25043_25059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25049,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25049,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25044[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25044[(1)] = (1));

return statearr_25044;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25027){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25045){if((e25045 instanceof Object)){
var ex__23545__auto__ = e25045;
var statearr_25046_25060 = state_25027;
(statearr_25046_25060[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25061 = state_25027;
state_25027 = G__25061;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25049,out))
})();
var state__23638__auto__ = (function (){var statearr_25047 = f__23637__auto__.call(null);
(statearr_25047[(6)] = c__23636__auto___25049);

return statearr_25047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25049,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25063 = arguments.length;
switch (G__25063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25108,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25108,out){
return (function (state_25087){
var state_val_25088 = (state_25087[(1)]);
if((state_val_25088 === (7))){
var inst_25069 = (state_25087[(7)]);
var inst_25069__$1 = (state_25087[(2)]);
var inst_25070 = (inst_25069__$1 == null);
var inst_25071 = cljs.core.not.call(null,inst_25070);
var state_25087__$1 = (function (){var statearr_25089 = state_25087;
(statearr_25089[(7)] = inst_25069__$1);

return statearr_25089;
})();
if(inst_25071){
var statearr_25090_25109 = state_25087__$1;
(statearr_25090_25109[(1)] = (8));

} else {
var statearr_25091_25110 = state_25087__$1;
(statearr_25091_25110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (1))){
var inst_25064 = (0);
var state_25087__$1 = (function (){var statearr_25092 = state_25087;
(statearr_25092[(8)] = inst_25064);

return statearr_25092;
})();
var statearr_25093_25111 = state_25087__$1;
(statearr_25093_25111[(2)] = null);

(statearr_25093_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (4))){
var state_25087__$1 = state_25087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25087__$1,(7),ch);
} else {
if((state_val_25088 === (6))){
var inst_25082 = (state_25087[(2)]);
var state_25087__$1 = state_25087;
var statearr_25094_25112 = state_25087__$1;
(statearr_25094_25112[(2)] = inst_25082);

(statearr_25094_25112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (3))){
var inst_25084 = (state_25087[(2)]);
var inst_25085 = cljs.core.async.close_BANG_.call(null,out);
var state_25087__$1 = (function (){var statearr_25095 = state_25087;
(statearr_25095[(9)] = inst_25084);

return statearr_25095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25087__$1,inst_25085);
} else {
if((state_val_25088 === (2))){
var inst_25064 = (state_25087[(8)]);
var inst_25066 = (inst_25064 < n);
var state_25087__$1 = state_25087;
if(cljs.core.truth_(inst_25066)){
var statearr_25096_25113 = state_25087__$1;
(statearr_25096_25113[(1)] = (4));

} else {
var statearr_25097_25114 = state_25087__$1;
(statearr_25097_25114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (11))){
var inst_25064 = (state_25087[(8)]);
var inst_25074 = (state_25087[(2)]);
var inst_25075 = (inst_25064 + (1));
var inst_25064__$1 = inst_25075;
var state_25087__$1 = (function (){var statearr_25098 = state_25087;
(statearr_25098[(10)] = inst_25074);

(statearr_25098[(8)] = inst_25064__$1);

return statearr_25098;
})();
var statearr_25099_25115 = state_25087__$1;
(statearr_25099_25115[(2)] = null);

(statearr_25099_25115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (9))){
var state_25087__$1 = state_25087;
var statearr_25100_25116 = state_25087__$1;
(statearr_25100_25116[(2)] = null);

(statearr_25100_25116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (5))){
var state_25087__$1 = state_25087;
var statearr_25101_25117 = state_25087__$1;
(statearr_25101_25117[(2)] = null);

(statearr_25101_25117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (10))){
var inst_25079 = (state_25087[(2)]);
var state_25087__$1 = state_25087;
var statearr_25102_25118 = state_25087__$1;
(statearr_25102_25118[(2)] = inst_25079);

(statearr_25102_25118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25088 === (8))){
var inst_25069 = (state_25087[(7)]);
var state_25087__$1 = state_25087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25087__$1,(11),out,inst_25069);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25108,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25108,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25103 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25103[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25103[(1)] = (1));

return statearr_25103;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25087){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25104){if((e25104 instanceof Object)){
var ex__23545__auto__ = e25104;
var statearr_25105_25119 = state_25087;
(statearr_25105_25119[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25120 = state_25087;
state_25087 = G__25120;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25108,out))
})();
var state__23638__auto__ = (function (){var statearr_25106 = f__23637__auto__.call(null);
(statearr_25106[(6)] = c__23636__auto___25108);

return statearr_25106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25108,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25122 = (function (f,ch,meta25123){
this.f = f;
this.ch = ch;
this.meta25123 = meta25123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25124,meta25123__$1){
var self__ = this;
var _25124__$1 = this;
return (new cljs.core.async.t_cljs$core$async25122(self__.f,self__.ch,meta25123__$1));
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25124){
var self__ = this;
var _25124__$1 = this;
return self__.meta25123;
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25125 = (function (f,ch,meta25123,_,fn1,meta25126){
this.f = f;
this.ch = ch;
this.meta25123 = meta25123;
this._ = _;
this.fn1 = fn1;
this.meta25126 = meta25126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25127,meta25126__$1){
var self__ = this;
var _25127__$1 = this;
return (new cljs.core.async.t_cljs$core$async25125(self__.f,self__.ch,self__.meta25123,self__._,self__.fn1,meta25126__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25127){
var self__ = this;
var _25127__$1 = this;
return self__.meta25126;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25121_SHARP_){
return f1.call(null,(((p1__25121_SHARP_ == null))?null:self__.f.call(null,p1__25121_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25123","meta25123",739323216,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25122","cljs.core.async/t_cljs$core$async25122",-1492852995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25126","meta25126",250844312,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25125";

cljs.core.async.t_cljs$core$async25125.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25125");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25125.
 */
cljs.core.async.__GT_t_cljs$core$async25125 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25125(f__$1,ch__$1,meta25123__$1,___$2,fn1__$1,meta25126){
return (new cljs.core.async.t_cljs$core$async25125(f__$1,ch__$1,meta25123__$1,___$2,fn1__$1,meta25126));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25125(self__.f,self__.ch,self__.meta25123,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25123","meta25123",739323216,null)], null);
});

cljs.core.async.t_cljs$core$async25122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25122";

cljs.core.async.t_cljs$core$async25122.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25122");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25122.
 */
cljs.core.async.__GT_t_cljs$core$async25122 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25122(f__$1,ch__$1,meta25123){
return (new cljs.core.async.t_cljs$core$async25122(f__$1,ch__$1,meta25123));
});

}

return (new cljs.core.async.t_cljs$core$async25122(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25128 = (function (f,ch,meta25129){
this.f = f;
this.ch = ch;
this.meta25129 = meta25129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25130,meta25129__$1){
var self__ = this;
var _25130__$1 = this;
return (new cljs.core.async.t_cljs$core$async25128(self__.f,self__.ch,meta25129__$1));
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25130){
var self__ = this;
var _25130__$1 = this;
return self__.meta25129;
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25129","meta25129",1146225555,null)], null);
});

cljs.core.async.t_cljs$core$async25128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25128";

cljs.core.async.t_cljs$core$async25128.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25128");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25128.
 */
cljs.core.async.__GT_t_cljs$core$async25128 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25128(f__$1,ch__$1,meta25129){
return (new cljs.core.async.t_cljs$core$async25128(f__$1,ch__$1,meta25129));
});

}

return (new cljs.core.async.t_cljs$core$async25128(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25131 = (function (p,ch,meta25132){
this.p = p;
this.ch = ch;
this.meta25132 = meta25132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25133,meta25132__$1){
var self__ = this;
var _25133__$1 = this;
return (new cljs.core.async.t_cljs$core$async25131(self__.p,self__.ch,meta25132__$1));
});

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25133){
var self__ = this;
var _25133__$1 = this;
return self__.meta25132;
});

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25132","meta25132",542953670,null)], null);
});

cljs.core.async.t_cljs$core$async25131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25131";

cljs.core.async.t_cljs$core$async25131.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25131");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25131.
 */
cljs.core.async.__GT_t_cljs$core$async25131 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25131(p__$1,ch__$1,meta25132){
return (new cljs.core.async.t_cljs$core$async25131(p__$1,ch__$1,meta25132));
});

}

return (new cljs.core.async.t_cljs$core$async25131(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25135 = arguments.length;
switch (G__25135) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25175,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25175,out){
return (function (state_25156){
var state_val_25157 = (state_25156[(1)]);
if((state_val_25157 === (7))){
var inst_25152 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25158_25176 = state_25156__$1;
(statearr_25158_25176[(2)] = inst_25152);

(statearr_25158_25176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (1))){
var state_25156__$1 = state_25156;
var statearr_25159_25177 = state_25156__$1;
(statearr_25159_25177[(2)] = null);

(statearr_25159_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (4))){
var inst_25138 = (state_25156[(7)]);
var inst_25138__$1 = (state_25156[(2)]);
var inst_25139 = (inst_25138__$1 == null);
var state_25156__$1 = (function (){var statearr_25160 = state_25156;
(statearr_25160[(7)] = inst_25138__$1);

return statearr_25160;
})();
if(cljs.core.truth_(inst_25139)){
var statearr_25161_25178 = state_25156__$1;
(statearr_25161_25178[(1)] = (5));

} else {
var statearr_25162_25179 = state_25156__$1;
(statearr_25162_25179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (6))){
var inst_25138 = (state_25156[(7)]);
var inst_25143 = p.call(null,inst_25138);
var state_25156__$1 = state_25156;
if(cljs.core.truth_(inst_25143)){
var statearr_25163_25180 = state_25156__$1;
(statearr_25163_25180[(1)] = (8));

} else {
var statearr_25164_25181 = state_25156__$1;
(statearr_25164_25181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (3))){
var inst_25154 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25156__$1,inst_25154);
} else {
if((state_val_25157 === (2))){
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25156__$1,(4),ch);
} else {
if((state_val_25157 === (11))){
var inst_25146 = (state_25156[(2)]);
var state_25156__$1 = state_25156;
var statearr_25165_25182 = state_25156__$1;
(statearr_25165_25182[(2)] = inst_25146);

(statearr_25165_25182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (9))){
var state_25156__$1 = state_25156;
var statearr_25166_25183 = state_25156__$1;
(statearr_25166_25183[(2)] = null);

(statearr_25166_25183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (5))){
var inst_25141 = cljs.core.async.close_BANG_.call(null,out);
var state_25156__$1 = state_25156;
var statearr_25167_25184 = state_25156__$1;
(statearr_25167_25184[(2)] = inst_25141);

(statearr_25167_25184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (10))){
var inst_25149 = (state_25156[(2)]);
var state_25156__$1 = (function (){var statearr_25168 = state_25156;
(statearr_25168[(8)] = inst_25149);

return statearr_25168;
})();
var statearr_25169_25185 = state_25156__$1;
(statearr_25169_25185[(2)] = null);

(statearr_25169_25185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25157 === (8))){
var inst_25138 = (state_25156[(7)]);
var state_25156__$1 = state_25156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25156__$1,(11),out,inst_25138);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25175,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25175,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25170 = [null,null,null,null,null,null,null,null,null];
(statearr_25170[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25170[(1)] = (1));

return statearr_25170;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25156){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25171){if((e25171 instanceof Object)){
var ex__23545__auto__ = e25171;
var statearr_25172_25186 = state_25156;
(statearr_25172_25186[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25187 = state_25156;
state_25156 = G__25187;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25175,out))
})();
var state__23638__auto__ = (function (){var statearr_25173 = f__23637__auto__.call(null);
(statearr_25173[(6)] = c__23636__auto___25175);

return statearr_25173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25175,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25189 = arguments.length;
switch (G__25189) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23636__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto__){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto__){
return (function (state_25252){
var state_val_25253 = (state_25252[(1)]);
if((state_val_25253 === (7))){
var inst_25248 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25254_25292 = state_25252__$1;
(statearr_25254_25292[(2)] = inst_25248);

(statearr_25254_25292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (20))){
var inst_25218 = (state_25252[(7)]);
var inst_25229 = (state_25252[(2)]);
var inst_25230 = cljs.core.next.call(null,inst_25218);
var inst_25204 = inst_25230;
var inst_25205 = null;
var inst_25206 = (0);
var inst_25207 = (0);
var state_25252__$1 = (function (){var statearr_25255 = state_25252;
(statearr_25255[(8)] = inst_25207);

(statearr_25255[(9)] = inst_25204);

(statearr_25255[(10)] = inst_25229);

(statearr_25255[(11)] = inst_25205);

(statearr_25255[(12)] = inst_25206);

return statearr_25255;
})();
var statearr_25256_25293 = state_25252__$1;
(statearr_25256_25293[(2)] = null);

(statearr_25256_25293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (1))){
var state_25252__$1 = state_25252;
var statearr_25257_25294 = state_25252__$1;
(statearr_25257_25294[(2)] = null);

(statearr_25257_25294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (4))){
var inst_25193 = (state_25252[(13)]);
var inst_25193__$1 = (state_25252[(2)]);
var inst_25194 = (inst_25193__$1 == null);
var state_25252__$1 = (function (){var statearr_25258 = state_25252;
(statearr_25258[(13)] = inst_25193__$1);

return statearr_25258;
})();
if(cljs.core.truth_(inst_25194)){
var statearr_25259_25295 = state_25252__$1;
(statearr_25259_25295[(1)] = (5));

} else {
var statearr_25260_25296 = state_25252__$1;
(statearr_25260_25296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (15))){
var state_25252__$1 = state_25252;
var statearr_25264_25297 = state_25252__$1;
(statearr_25264_25297[(2)] = null);

(statearr_25264_25297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (21))){
var state_25252__$1 = state_25252;
var statearr_25265_25298 = state_25252__$1;
(statearr_25265_25298[(2)] = null);

(statearr_25265_25298[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (13))){
var inst_25207 = (state_25252[(8)]);
var inst_25204 = (state_25252[(9)]);
var inst_25205 = (state_25252[(11)]);
var inst_25206 = (state_25252[(12)]);
var inst_25214 = (state_25252[(2)]);
var inst_25215 = (inst_25207 + (1));
var tmp25261 = inst_25204;
var tmp25262 = inst_25205;
var tmp25263 = inst_25206;
var inst_25204__$1 = tmp25261;
var inst_25205__$1 = tmp25262;
var inst_25206__$1 = tmp25263;
var inst_25207__$1 = inst_25215;
var state_25252__$1 = (function (){var statearr_25266 = state_25252;
(statearr_25266[(8)] = inst_25207__$1);

(statearr_25266[(14)] = inst_25214);

(statearr_25266[(9)] = inst_25204__$1);

(statearr_25266[(11)] = inst_25205__$1);

(statearr_25266[(12)] = inst_25206__$1);

return statearr_25266;
})();
var statearr_25267_25299 = state_25252__$1;
(statearr_25267_25299[(2)] = null);

(statearr_25267_25299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (22))){
var state_25252__$1 = state_25252;
var statearr_25268_25300 = state_25252__$1;
(statearr_25268_25300[(2)] = null);

(statearr_25268_25300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (6))){
var inst_25193 = (state_25252[(13)]);
var inst_25202 = f.call(null,inst_25193);
var inst_25203 = cljs.core.seq.call(null,inst_25202);
var inst_25204 = inst_25203;
var inst_25205 = null;
var inst_25206 = (0);
var inst_25207 = (0);
var state_25252__$1 = (function (){var statearr_25269 = state_25252;
(statearr_25269[(8)] = inst_25207);

(statearr_25269[(9)] = inst_25204);

(statearr_25269[(11)] = inst_25205);

(statearr_25269[(12)] = inst_25206);

return statearr_25269;
})();
var statearr_25270_25301 = state_25252__$1;
(statearr_25270_25301[(2)] = null);

(statearr_25270_25301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (17))){
var inst_25218 = (state_25252[(7)]);
var inst_25222 = cljs.core.chunk_first.call(null,inst_25218);
var inst_25223 = cljs.core.chunk_rest.call(null,inst_25218);
var inst_25224 = cljs.core.count.call(null,inst_25222);
var inst_25204 = inst_25223;
var inst_25205 = inst_25222;
var inst_25206 = inst_25224;
var inst_25207 = (0);
var state_25252__$1 = (function (){var statearr_25271 = state_25252;
(statearr_25271[(8)] = inst_25207);

(statearr_25271[(9)] = inst_25204);

(statearr_25271[(11)] = inst_25205);

(statearr_25271[(12)] = inst_25206);

return statearr_25271;
})();
var statearr_25272_25302 = state_25252__$1;
(statearr_25272_25302[(2)] = null);

(statearr_25272_25302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (3))){
var inst_25250 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25252__$1,inst_25250);
} else {
if((state_val_25253 === (12))){
var inst_25238 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25273_25303 = state_25252__$1;
(statearr_25273_25303[(2)] = inst_25238);

(statearr_25273_25303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (2))){
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25252__$1,(4),in$);
} else {
if((state_val_25253 === (23))){
var inst_25246 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25274_25304 = state_25252__$1;
(statearr_25274_25304[(2)] = inst_25246);

(statearr_25274_25304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (19))){
var inst_25233 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25275_25305 = state_25252__$1;
(statearr_25275_25305[(2)] = inst_25233);

(statearr_25275_25305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (11))){
var inst_25204 = (state_25252[(9)]);
var inst_25218 = (state_25252[(7)]);
var inst_25218__$1 = cljs.core.seq.call(null,inst_25204);
var state_25252__$1 = (function (){var statearr_25276 = state_25252;
(statearr_25276[(7)] = inst_25218__$1);

return statearr_25276;
})();
if(inst_25218__$1){
var statearr_25277_25306 = state_25252__$1;
(statearr_25277_25306[(1)] = (14));

} else {
var statearr_25278_25307 = state_25252__$1;
(statearr_25278_25307[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (9))){
var inst_25240 = (state_25252[(2)]);
var inst_25241 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25252__$1 = (function (){var statearr_25279 = state_25252;
(statearr_25279[(15)] = inst_25240);

return statearr_25279;
})();
if(cljs.core.truth_(inst_25241)){
var statearr_25280_25308 = state_25252__$1;
(statearr_25280_25308[(1)] = (21));

} else {
var statearr_25281_25309 = state_25252__$1;
(statearr_25281_25309[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (5))){
var inst_25196 = cljs.core.async.close_BANG_.call(null,out);
var state_25252__$1 = state_25252;
var statearr_25282_25310 = state_25252__$1;
(statearr_25282_25310[(2)] = inst_25196);

(statearr_25282_25310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (14))){
var inst_25218 = (state_25252[(7)]);
var inst_25220 = cljs.core.chunked_seq_QMARK_.call(null,inst_25218);
var state_25252__$1 = state_25252;
if(inst_25220){
var statearr_25283_25311 = state_25252__$1;
(statearr_25283_25311[(1)] = (17));

} else {
var statearr_25284_25312 = state_25252__$1;
(statearr_25284_25312[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (16))){
var inst_25236 = (state_25252[(2)]);
var state_25252__$1 = state_25252;
var statearr_25285_25313 = state_25252__$1;
(statearr_25285_25313[(2)] = inst_25236);

(statearr_25285_25313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25253 === (10))){
var inst_25207 = (state_25252[(8)]);
var inst_25205 = (state_25252[(11)]);
var inst_25212 = cljs.core._nth.call(null,inst_25205,inst_25207);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25252__$1,(13),out,inst_25212);
} else {
if((state_val_25253 === (18))){
var inst_25218 = (state_25252[(7)]);
var inst_25227 = cljs.core.first.call(null,inst_25218);
var state_25252__$1 = state_25252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25252__$1,(20),out,inst_25227);
} else {
if((state_val_25253 === (8))){
var inst_25207 = (state_25252[(8)]);
var inst_25206 = (state_25252[(12)]);
var inst_25209 = (inst_25207 < inst_25206);
var inst_25210 = inst_25209;
var state_25252__$1 = state_25252;
if(cljs.core.truth_(inst_25210)){
var statearr_25286_25314 = state_25252__$1;
(statearr_25286_25314[(1)] = (10));

} else {
var statearr_25287_25315 = state_25252__$1;
(statearr_25287_25315[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto__))
;
return ((function (switch__23541__auto__,c__23636__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____0 = (function (){
var statearr_25288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25288[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__);

(statearr_25288[(1)] = (1));

return statearr_25288;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____1 = (function (state_25252){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25289){if((e25289 instanceof Object)){
var ex__23545__auto__ = e25289;
var statearr_25290_25316 = state_25252;
(statearr_25290_25316[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25252;
state_25252 = G__25317;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__ = function(state_25252){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____1.call(this,state_25252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23542__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto__))
})();
var state__23638__auto__ = (function (){var statearr_25291 = f__23637__auto__.call(null);
(statearr_25291[(6)] = c__23636__auto__);

return statearr_25291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto__))
);

return c__23636__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25319 = arguments.length;
switch (G__25319) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25322 = arguments.length;
switch (G__25322) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25325 = arguments.length;
switch (G__25325) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25372,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25372,out){
return (function (state_25349){
var state_val_25350 = (state_25349[(1)]);
if((state_val_25350 === (7))){
var inst_25344 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
var statearr_25351_25373 = state_25349__$1;
(statearr_25351_25373[(2)] = inst_25344);

(statearr_25351_25373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (1))){
var inst_25326 = null;
var state_25349__$1 = (function (){var statearr_25352 = state_25349;
(statearr_25352[(7)] = inst_25326);

return statearr_25352;
})();
var statearr_25353_25374 = state_25349__$1;
(statearr_25353_25374[(2)] = null);

(statearr_25353_25374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (4))){
var inst_25329 = (state_25349[(8)]);
var inst_25329__$1 = (state_25349[(2)]);
var inst_25330 = (inst_25329__$1 == null);
var inst_25331 = cljs.core.not.call(null,inst_25330);
var state_25349__$1 = (function (){var statearr_25354 = state_25349;
(statearr_25354[(8)] = inst_25329__$1);

return statearr_25354;
})();
if(inst_25331){
var statearr_25355_25375 = state_25349__$1;
(statearr_25355_25375[(1)] = (5));

} else {
var statearr_25356_25376 = state_25349__$1;
(statearr_25356_25376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (6))){
var state_25349__$1 = state_25349;
var statearr_25357_25377 = state_25349__$1;
(statearr_25357_25377[(2)] = null);

(statearr_25357_25377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (3))){
var inst_25346 = (state_25349[(2)]);
var inst_25347 = cljs.core.async.close_BANG_.call(null,out);
var state_25349__$1 = (function (){var statearr_25358 = state_25349;
(statearr_25358[(9)] = inst_25346);

return statearr_25358;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25349__$1,inst_25347);
} else {
if((state_val_25350 === (2))){
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25349__$1,(4),ch);
} else {
if((state_val_25350 === (11))){
var inst_25329 = (state_25349[(8)]);
var inst_25338 = (state_25349[(2)]);
var inst_25326 = inst_25329;
var state_25349__$1 = (function (){var statearr_25359 = state_25349;
(statearr_25359[(10)] = inst_25338);

(statearr_25359[(7)] = inst_25326);

return statearr_25359;
})();
var statearr_25360_25378 = state_25349__$1;
(statearr_25360_25378[(2)] = null);

(statearr_25360_25378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (9))){
var inst_25329 = (state_25349[(8)]);
var state_25349__$1 = state_25349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25349__$1,(11),out,inst_25329);
} else {
if((state_val_25350 === (5))){
var inst_25329 = (state_25349[(8)]);
var inst_25326 = (state_25349[(7)]);
var inst_25333 = cljs.core._EQ_.call(null,inst_25329,inst_25326);
var state_25349__$1 = state_25349;
if(inst_25333){
var statearr_25362_25379 = state_25349__$1;
(statearr_25362_25379[(1)] = (8));

} else {
var statearr_25363_25380 = state_25349__$1;
(statearr_25363_25380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (10))){
var inst_25341 = (state_25349[(2)]);
var state_25349__$1 = state_25349;
var statearr_25364_25381 = state_25349__$1;
(statearr_25364_25381[(2)] = inst_25341);

(statearr_25364_25381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25350 === (8))){
var inst_25326 = (state_25349[(7)]);
var tmp25361 = inst_25326;
var inst_25326__$1 = tmp25361;
var state_25349__$1 = (function (){var statearr_25365 = state_25349;
(statearr_25365[(7)] = inst_25326__$1);

return statearr_25365;
})();
var statearr_25366_25382 = state_25349__$1;
(statearr_25366_25382[(2)] = null);

(statearr_25366_25382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25372,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25372,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25367[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25367[(1)] = (1));

return statearr_25367;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25349){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25368){if((e25368 instanceof Object)){
var ex__23545__auto__ = e25368;
var statearr_25369_25383 = state_25349;
(statearr_25369_25383[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25384 = state_25349;
state_25349 = G__25384;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25372,out))
})();
var state__23638__auto__ = (function (){var statearr_25370 = f__23637__auto__.call(null);
(statearr_25370[(6)] = c__23636__auto___25372);

return statearr_25370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25372,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25386 = arguments.length;
switch (G__25386) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25452,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25452,out){
return (function (state_25424){
var state_val_25425 = (state_25424[(1)]);
if((state_val_25425 === (7))){
var inst_25420 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
var statearr_25426_25453 = state_25424__$1;
(statearr_25426_25453[(2)] = inst_25420);

(statearr_25426_25453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (1))){
var inst_25387 = (new Array(n));
var inst_25388 = inst_25387;
var inst_25389 = (0);
var state_25424__$1 = (function (){var statearr_25427 = state_25424;
(statearr_25427[(7)] = inst_25388);

(statearr_25427[(8)] = inst_25389);

return statearr_25427;
})();
var statearr_25428_25454 = state_25424__$1;
(statearr_25428_25454[(2)] = null);

(statearr_25428_25454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (4))){
var inst_25392 = (state_25424[(9)]);
var inst_25392__$1 = (state_25424[(2)]);
var inst_25393 = (inst_25392__$1 == null);
var inst_25394 = cljs.core.not.call(null,inst_25393);
var state_25424__$1 = (function (){var statearr_25429 = state_25424;
(statearr_25429[(9)] = inst_25392__$1);

return statearr_25429;
})();
if(inst_25394){
var statearr_25430_25455 = state_25424__$1;
(statearr_25430_25455[(1)] = (5));

} else {
var statearr_25431_25456 = state_25424__$1;
(statearr_25431_25456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (15))){
var inst_25414 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
var statearr_25432_25457 = state_25424__$1;
(statearr_25432_25457[(2)] = inst_25414);

(statearr_25432_25457[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (13))){
var state_25424__$1 = state_25424;
var statearr_25433_25458 = state_25424__$1;
(statearr_25433_25458[(2)] = null);

(statearr_25433_25458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (6))){
var inst_25389 = (state_25424[(8)]);
var inst_25410 = (inst_25389 > (0));
var state_25424__$1 = state_25424;
if(cljs.core.truth_(inst_25410)){
var statearr_25434_25459 = state_25424__$1;
(statearr_25434_25459[(1)] = (12));

} else {
var statearr_25435_25460 = state_25424__$1;
(statearr_25435_25460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (3))){
var inst_25422 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25424__$1,inst_25422);
} else {
if((state_val_25425 === (12))){
var inst_25388 = (state_25424[(7)]);
var inst_25412 = cljs.core.vec.call(null,inst_25388);
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25424__$1,(15),out,inst_25412);
} else {
if((state_val_25425 === (2))){
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25424__$1,(4),ch);
} else {
if((state_val_25425 === (11))){
var inst_25404 = (state_25424[(2)]);
var inst_25405 = (new Array(n));
var inst_25388 = inst_25405;
var inst_25389 = (0);
var state_25424__$1 = (function (){var statearr_25436 = state_25424;
(statearr_25436[(10)] = inst_25404);

(statearr_25436[(7)] = inst_25388);

(statearr_25436[(8)] = inst_25389);

return statearr_25436;
})();
var statearr_25437_25461 = state_25424__$1;
(statearr_25437_25461[(2)] = null);

(statearr_25437_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (9))){
var inst_25388 = (state_25424[(7)]);
var inst_25402 = cljs.core.vec.call(null,inst_25388);
var state_25424__$1 = state_25424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25424__$1,(11),out,inst_25402);
} else {
if((state_val_25425 === (5))){
var inst_25392 = (state_25424[(9)]);
var inst_25388 = (state_25424[(7)]);
var inst_25397 = (state_25424[(11)]);
var inst_25389 = (state_25424[(8)]);
var inst_25396 = (inst_25388[inst_25389] = inst_25392);
var inst_25397__$1 = (inst_25389 + (1));
var inst_25398 = (inst_25397__$1 < n);
var state_25424__$1 = (function (){var statearr_25438 = state_25424;
(statearr_25438[(12)] = inst_25396);

(statearr_25438[(11)] = inst_25397__$1);

return statearr_25438;
})();
if(cljs.core.truth_(inst_25398)){
var statearr_25439_25462 = state_25424__$1;
(statearr_25439_25462[(1)] = (8));

} else {
var statearr_25440_25463 = state_25424__$1;
(statearr_25440_25463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (14))){
var inst_25417 = (state_25424[(2)]);
var inst_25418 = cljs.core.async.close_BANG_.call(null,out);
var state_25424__$1 = (function (){var statearr_25442 = state_25424;
(statearr_25442[(13)] = inst_25417);

return statearr_25442;
})();
var statearr_25443_25464 = state_25424__$1;
(statearr_25443_25464[(2)] = inst_25418);

(statearr_25443_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (10))){
var inst_25408 = (state_25424[(2)]);
var state_25424__$1 = state_25424;
var statearr_25444_25465 = state_25424__$1;
(statearr_25444_25465[(2)] = inst_25408);

(statearr_25444_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25425 === (8))){
var inst_25388 = (state_25424[(7)]);
var inst_25397 = (state_25424[(11)]);
var tmp25441 = inst_25388;
var inst_25388__$1 = tmp25441;
var inst_25389 = inst_25397;
var state_25424__$1 = (function (){var statearr_25445 = state_25424;
(statearr_25445[(7)] = inst_25388__$1);

(statearr_25445[(8)] = inst_25389);

return statearr_25445;
})();
var statearr_25446_25466 = state_25424__$1;
(statearr_25446_25466[(2)] = null);

(statearr_25446_25466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25452,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25452,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25447[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25447[(1)] = (1));

return statearr_25447;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25424){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25448){if((e25448 instanceof Object)){
var ex__23545__auto__ = e25448;
var statearr_25449_25467 = state_25424;
(statearr_25449_25467[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25468 = state_25424;
state_25424 = G__25468;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25452,out))
})();
var state__23638__auto__ = (function (){var statearr_25450 = f__23637__auto__.call(null);
(statearr_25450[(6)] = c__23636__auto___25452);

return statearr_25450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25452,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25470 = arguments.length;
switch (G__25470) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23636__auto___25540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23636__auto___25540,out){
return (function (){
var f__23637__auto__ = (function (){var switch__23541__auto__ = ((function (c__23636__auto___25540,out){
return (function (state_25512){
var state_val_25513 = (state_25512[(1)]);
if((state_val_25513 === (7))){
var inst_25508 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
var statearr_25514_25541 = state_25512__$1;
(statearr_25514_25541[(2)] = inst_25508);

(statearr_25514_25541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (1))){
var inst_25471 = [];
var inst_25472 = inst_25471;
var inst_25473 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25512__$1 = (function (){var statearr_25515 = state_25512;
(statearr_25515[(7)] = inst_25473);

(statearr_25515[(8)] = inst_25472);

return statearr_25515;
})();
var statearr_25516_25542 = state_25512__$1;
(statearr_25516_25542[(2)] = null);

(statearr_25516_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (4))){
var inst_25476 = (state_25512[(9)]);
var inst_25476__$1 = (state_25512[(2)]);
var inst_25477 = (inst_25476__$1 == null);
var inst_25478 = cljs.core.not.call(null,inst_25477);
var state_25512__$1 = (function (){var statearr_25517 = state_25512;
(statearr_25517[(9)] = inst_25476__$1);

return statearr_25517;
})();
if(inst_25478){
var statearr_25518_25543 = state_25512__$1;
(statearr_25518_25543[(1)] = (5));

} else {
var statearr_25519_25544 = state_25512__$1;
(statearr_25519_25544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (15))){
var inst_25502 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
var statearr_25520_25545 = state_25512__$1;
(statearr_25520_25545[(2)] = inst_25502);

(statearr_25520_25545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (13))){
var state_25512__$1 = state_25512;
var statearr_25521_25546 = state_25512__$1;
(statearr_25521_25546[(2)] = null);

(statearr_25521_25546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (6))){
var inst_25472 = (state_25512[(8)]);
var inst_25497 = inst_25472.length;
var inst_25498 = (inst_25497 > (0));
var state_25512__$1 = state_25512;
if(cljs.core.truth_(inst_25498)){
var statearr_25522_25547 = state_25512__$1;
(statearr_25522_25547[(1)] = (12));

} else {
var statearr_25523_25548 = state_25512__$1;
(statearr_25523_25548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (3))){
var inst_25510 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25512__$1,inst_25510);
} else {
if((state_val_25513 === (12))){
var inst_25472 = (state_25512[(8)]);
var inst_25500 = cljs.core.vec.call(null,inst_25472);
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25512__$1,(15),out,inst_25500);
} else {
if((state_val_25513 === (2))){
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25512__$1,(4),ch);
} else {
if((state_val_25513 === (11))){
var inst_25480 = (state_25512[(10)]);
var inst_25476 = (state_25512[(9)]);
var inst_25490 = (state_25512[(2)]);
var inst_25491 = [];
var inst_25492 = inst_25491.push(inst_25476);
var inst_25472 = inst_25491;
var inst_25473 = inst_25480;
var state_25512__$1 = (function (){var statearr_25524 = state_25512;
(statearr_25524[(11)] = inst_25490);

(statearr_25524[(12)] = inst_25492);

(statearr_25524[(7)] = inst_25473);

(statearr_25524[(8)] = inst_25472);

return statearr_25524;
})();
var statearr_25525_25549 = state_25512__$1;
(statearr_25525_25549[(2)] = null);

(statearr_25525_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (9))){
var inst_25472 = (state_25512[(8)]);
var inst_25488 = cljs.core.vec.call(null,inst_25472);
var state_25512__$1 = state_25512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25512__$1,(11),out,inst_25488);
} else {
if((state_val_25513 === (5))){
var inst_25480 = (state_25512[(10)]);
var inst_25473 = (state_25512[(7)]);
var inst_25476 = (state_25512[(9)]);
var inst_25480__$1 = f.call(null,inst_25476);
var inst_25481 = cljs.core._EQ_.call(null,inst_25480__$1,inst_25473);
var inst_25482 = cljs.core.keyword_identical_QMARK_.call(null,inst_25473,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25483 = ((inst_25481) || (inst_25482));
var state_25512__$1 = (function (){var statearr_25526 = state_25512;
(statearr_25526[(10)] = inst_25480__$1);

return statearr_25526;
})();
if(cljs.core.truth_(inst_25483)){
var statearr_25527_25550 = state_25512__$1;
(statearr_25527_25550[(1)] = (8));

} else {
var statearr_25528_25551 = state_25512__$1;
(statearr_25528_25551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (14))){
var inst_25505 = (state_25512[(2)]);
var inst_25506 = cljs.core.async.close_BANG_.call(null,out);
var state_25512__$1 = (function (){var statearr_25530 = state_25512;
(statearr_25530[(13)] = inst_25505);

return statearr_25530;
})();
var statearr_25531_25552 = state_25512__$1;
(statearr_25531_25552[(2)] = inst_25506);

(statearr_25531_25552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (10))){
var inst_25495 = (state_25512[(2)]);
var state_25512__$1 = state_25512;
var statearr_25532_25553 = state_25512__$1;
(statearr_25532_25553[(2)] = inst_25495);

(statearr_25532_25553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25513 === (8))){
var inst_25480 = (state_25512[(10)]);
var inst_25476 = (state_25512[(9)]);
var inst_25472 = (state_25512[(8)]);
var inst_25485 = inst_25472.push(inst_25476);
var tmp25529 = inst_25472;
var inst_25472__$1 = tmp25529;
var inst_25473 = inst_25480;
var state_25512__$1 = (function (){var statearr_25533 = state_25512;
(statearr_25533[(14)] = inst_25485);

(statearr_25533[(7)] = inst_25473);

(statearr_25533[(8)] = inst_25472__$1);

return statearr_25533;
})();
var statearr_25534_25554 = state_25512__$1;
(statearr_25534_25554[(2)] = null);

(statearr_25534_25554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23636__auto___25540,out))
;
return ((function (switch__23541__auto__,c__23636__auto___25540,out){
return (function() {
var cljs$core$async$state_machine__23542__auto__ = null;
var cljs$core$async$state_machine__23542__auto____0 = (function (){
var statearr_25535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25535[(0)] = cljs$core$async$state_machine__23542__auto__);

(statearr_25535[(1)] = (1));

return statearr_25535;
});
var cljs$core$async$state_machine__23542__auto____1 = (function (state_25512){
while(true){
var ret_value__23543__auto__ = (function (){try{while(true){
var result__23544__auto__ = switch__23541__auto__.call(null,state_25512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23544__auto__;
}
break;
}
}catch (e25536){if((e25536 instanceof Object)){
var ex__23545__auto__ = e25536;
var statearr_25537_25555 = state_25512;
(statearr_25537_25555[(5)] = ex__23545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25556 = state_25512;
state_25512 = G__25556;
continue;
} else {
return ret_value__23543__auto__;
}
break;
}
});
cljs$core$async$state_machine__23542__auto__ = function(state_25512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23542__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23542__auto____1.call(this,state_25512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23542__auto____0;
cljs$core$async$state_machine__23542__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23542__auto____1;
return cljs$core$async$state_machine__23542__auto__;
})()
;})(switch__23541__auto__,c__23636__auto___25540,out))
})();
var state__23638__auto__ = (function (){var statearr_25538 = f__23637__auto__.call(null);
(statearr_25538[(6)] = c__23636__auto___25540);

return statearr_25538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23638__auto__);
});})(c__23636__auto___25540,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1629748917791
