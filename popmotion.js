!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t=t||self).popmotion={})}(this,function(t){"use strict";var n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(t,r)};function r(t,r){function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var A=function(){return(A=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function b(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]]);return e}function i(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;for(var n=Array(t),o=0,r=0;r<e;r++)for(var i=arguments[r],u=0,a=i.length;u<a;u++,o++)n[o]=i[u];return n}function e(r,e){return function(t){return Math.max(Math.min(t,e),r)}}function p(t){return t%1?Number(t.toFixed(5)):t}function o(r){return{test:function(t){return"string"==typeof t&&t.endsWith(r)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+r}}}function u(t){return void 0!==t.red}function a(t){return void 0!==t.hue}var s=/(-)?(\d[\d\.]*)/g,c=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,f=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,d={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},l=A(A({},d),{transform:e(0,1)}),v=A(A({},d),{default:1}),h=o("deg"),m=o("%"),g=o("px"),y=o("vh"),w=o("vw"),O=A(A({},m),{parse:function(t){return m.parse(t)/100},transform:function(t){return m.transform(100*t)}}),M=e(0,255);function x(i){return function(t){if("string"!=typeof t)return t;for(var r,e={},n=(r=t).substring(r.indexOf("(")+1,r.lastIndexOf(")")).replace(/(,|\/)/g," ").split(/ \s*/),o=0;o<4;o++)e[i[o]]=void 0!==n[o]?parseFloat(n[o]):1;return e}}var C=A(A({},d),{transform:function(t){return Math.round(M(t))}});function k(t,r){return t.startsWith(r)&&f.test(t)}function S(t){return"number"==typeof t?0:t}function P(t){return tt=t}function T(t){return ot[t].process(et)}function V(r){return function(t){return 1-r(1-t)}}function R(r){return function(t){return t<=.5?r(2*t)/2:(2-r(2*(1-t)))/2}}function j(r){return function(t){return Math.pow(t,r)}}function _(r){return function(t){return t*t*((r+1)*t-r)}}function E(t){var r=_(t);return function(t){return(t*=2)<1?.5*r(t):.5*(2-Math.pow(2,-10*(t-1)))}}function D(t){return t}function F(t){return 1-Math.sin(Math.acos(t))}function X(t){var r=t*t;return t<4/11?7.5625*r:t<8/11?9.075*r-9.9*t+3.4:t<.9?4356/361*r-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72}function Y(t,r){return 1-3*r+3*t}function L(t,r){return 3*r-6*t}function I(t,r,e){return 3*Y(r,e)*t*t+2*L(r,e)*t+3*r}function z(t,r,e){return((Y(r,e)*t+L(r,e))*t+3*r)*t}var B={test:function(t){return"string"==typeof t?k(t,"rgb"):u(t)},parse:x(["red","green","blue","alpha"]),transform:function(t){var r,e,n,o,i,u=t.red,a=t.green,s=t.blue,c=t.alpha,f=void 0===c?1:c;return r={red:C.transform(u),green:C.transform(a),blue:C.transform(s),alpha:p(l.transform(f))},e=r.red,n=r.green,o=r.blue,i=r.alpha,"rgba("+e+", "+n+", "+o+", "+(void 0===i?1:i)+")"}},W={test:function(t){return"string"==typeof t?k(t,"hsl"):a(t)},parse:x(["hue","saturation","lightness","alpha"]),transform:function(t){var r,e,n,o,i,u=t.hue,a=t.saturation,s=t.lightness,c=t.alpha,f=void 0===c?1:c;return r={hue:Math.round(u),saturation:m.transform(p(a)),lightness:m.transform(p(s)),alpha:p(l.transform(f))},e=r.hue,n=r.saturation,o=r.lightness,i=r.alpha,"hsla("+e+", "+n+", "+o+", "+(void 0===i?1:i)+")"}},N=A(A({},B),{test:function(t){return"string"==typeof t&&k(t,"#")},parse:function(t){var r="",e="",n="";return 4<t.length?(r=t.substr(1,2),e=t.substr(3,2),n=t.substr(5,2)):(r=t.substr(1,1),e=t.substr(2,1),n=t.substr(3,1),r+=r,e+=e,n+=n),{red:parseInt(r,16),green:parseInt(e,16),blue:parseInt(n,16),alpha:1}}}),q={test:function(t){return"string"==typeof t&&f.test(t)||u(t)||a(t)},parse:function(t){return B.test(t)?B.parse(t):W.test(t)?W.parse(t):N.test(t)?N.parse(t):t},transform:function(t){return u(t)?B.transform(t):a(t)?W.transform(t):t}},Z="${c}",H="${n}",U={test:function(t){if("string"!=typeof t||!isNaN(t))return!1;var r=0,e=t.match(s),n=t.match(c);return e&&(r+=e.length),n&&(r+=n.length),0<r},parse:function(t){var r=t,e=[],n=r.match(c);n&&(r=r.replace(c,Z),e.push.apply(e,n.map(q.parse)));var o=r.match(s);return o&&e.push.apply(e,o.map(d.parse)),e},createTransformer:function(t){var n=t,o=0,r=t.match(c),i=r?r.length:0;if(r)for(var e=0;e<i;e++)n=n.replace(r[e],Z),o++;var u=n.match(s),a=u?u.length:0;if(u)for(e=0;e<a;e++)n=n.replace(u[e],H),o++;return function(t){for(var r=n,e=0;e<o;e++)r=r.replace(e<i?Z:H,e<i?q.transform(t[e]):p(t[e]));return r}},getAnimatableNone:function(t){var r=U.parse(t);return U.createTransformer(t)(r.map(S))}},$=Object.freeze({__proto__:null,alpha:l,color:q,complex:U,degrees:h,hex:N,hsla:W,number:d,percent:m,progressPercentage:O,px:g,rgbUnit:C,rgba:B,scale:v,vh:y,vw:w}),G=0,K="undefined"!=typeof window&&void 0!==window.requestAnimationFrame?function(t){return window.requestAnimationFrame(t)}:function(t){var r=Date.now(),e=Math.max(0,16.7-(r-G));G=r+e,setTimeout(function(){return t(G)},e)},J=1/60*1e3,Q=!0,tt=!1,rt=!1,et={delta:0,timestamp:0},nt=["read","update","preRender","render","postRender"],ot=nt.reduce(function(t,r){var n,i,u,a,s,o,c,f,p;return t[r]=(n=P,i=[],s=!(u=[]),o=a=0,c=new WeakSet,f=new WeakSet,p={cancel:function(t){var r=u.indexOf(t);c.add(t),-1!==r&&u.splice(r,1)},process:function(t){var r,e;if(s=!0,i=(r=[u,i])[0],(u=r[1]).length=0,a=i.length)for(o=0;o<a;o++)(e=i[o])(t),!0!==f.has(e)||c.has(e)||(p.schedule(e),n(!0));s=!1},schedule:function(t,r,e){void 0===r&&(r=!1),void 0===e&&(e=!1);var n=e&&s,o=n?i:u;c.delete(t),r&&f.add(t),-1===o.indexOf(t)&&(o.push(t),n&&(a=i.length))}}),t},{}),it=nt.reduce(function(t,r){var n=ot[r];return t[r]=function(t,r,e){return void 0===r&&(r=!1),void 0===e&&(e=!1),tt||st(),n.schedule(t,r,e),t},t},{}),ut=nt.reduce(function(t,r){return t[r]=ot[r].cancel,t},{}),at=function(t){tt=!1,et.delta=Q?J:Math.max(Math.min(t-et.timestamp,40),1),Q||(J=et.delta),et.timestamp=t,rt=!0,nt.forEach(T),rt=!1,tt&&(Q=!1,K(at))},st=function(){Q=tt=!0,rt||K(at)},ct=V,ft=j(2),pt=V(ft),dt=R(ft),lt=V(F),vt=R(lt),ht=_(1.525),mt=V(ht),gt=R(ht),yt=E(1.525),bt="undefined"!=typeof Float32Array;function wt(t){return"number"==typeof t}function Ot(t){return 180*t/Math.PI}function Mt(t,r){return void 0===r&&(r=Dt),Ot(Math.atan2(r.y-t.y,r.x-t.x))}function xt(r,e){var n=!0;return void 0===e&&(e=r,n=!1),function(t){return n?t-r+e:(r=t,n=!0,e)}}function At(n){return function(r,e,t){return void 0!==t?n(r,e,t):function(t){return n(r,e,t)}}}function Ct(t){return t*Math.PI/180}function kt(t){return t.hasOwnProperty("x")&&t.hasOwnProperty("y")}function St(t){return kt(t)&&t.hasOwnProperty("z")}function Pt(t,r){return Math.abs(t-r)}function Tt(t,r){if(void 0===r&&(r=Dt),wt(t)&&wt(r))return Pt(t,r);if(kt(t)&&kt(r)){var e=Pt(t.x,r.x),n=Pt(t.y,r.y),o=St(t)&&St(r)?Pt(t.z,r.z):0;return Math.sqrt(Math.pow(e,2)+Math.pow(n,2)+Math.pow(o,2))}return 0}function Vt(t,r,e){return-e*t+e*r+t}function Rt(t,r,e){var n=t*t,o=r*r;return Math.sqrt(Math.max(0,e*(o-n)+n))}function jt(r){return Lt.find(function(t){return t.test(r)})}function _t(r,e){return function(t){return e(r(t))}}var Et=Object.freeze({__proto__:null,reversed:V,mirrored:R,createReversedEasing:ct,createMirroredEasing:R,createExpoIn:j,createBackIn:_,createAnticipateEasing:E,linear:D,easeIn:ft,easeOut:pt,easeInOut:dt,circIn:F,circOut:lt,circInOut:vt,backIn:ht,backOut:mt,backInOut:gt,anticipate:yt,bounceOut:X,bounceIn:function(t){return 1-X(1-t)},bounceInOut:function(t){return t<.5?.5*(1-X(1-2*t)):.5*X(2*t-1)+.5},cubicBezier:function(u,e,a,n){function o(t){for(var r,e,n,o=0,i=1;10!==i&&s[i]<=t;++i)o+=.1;return r=(t-s[--i])/(s[i+1]-s[i]),.001<=(n=I(e=o+.1*r,u,a))?function(t,r){for(var e,n=0;n<8;++n){if(0===(e=I(r,u,a)))return r;r-=(z(r,u,a)-t)/e}return r}(t,e):0===n?e:function(t,r,e){for(var n,o,i=0;0<(n=z(o=r+(e-r)/2,u,a)-t)?e=o:r=o,1e-7<Math.abs(n)&&++i<10;);return o}(t,o,o+.1)}var s=new(bt?Float32Array:Array)(11);return function(){for(var t=0;t<11;++t)s[t]=z(.1*t,u,a)}(),function(t){var r=u===e&&a===n?t:0===t?0:1===t?1:z(o(t),e,n);return r}}}),Dt={x:0,y:0,z:0},Ft=At(function(t,r,e){return Math.min(Math.max(e,t),r)}),Xt=function(t,r,e){var n=r-t;return 0==n?1:(e-t)/n},Yt=function(){return(Yt=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},Lt=[N,B,W],It=function(t,r){var e=jt(t),n=jt(r);e.transform,n.transform;var o=e.parse(t),i=n.parse(r),u=Yt({},o),a=e===W?Vt:Rt;return function(t){for(var r in u)"alpha"!==r&&(u[r]=a(o[r],i[r],t));return u.alpha=Vt(o.alpha,i.alpha,t),e.transform(u)}},zt=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.reduce(_t)};function Bt(r,e){return wt(r)?function(t){return Vt(r,e,t)}:(q.test(r)?It:Zt)(r,e)}var Wt=function(t,e){var n=t.slice(),o=n.length,i=t.map(function(t,r){return Bt(t,e[r])});return function(t){for(var r=0;r<o;r++)n[r]=i[r](t);return n}},Nt=function(t,r){var e=Yt({},t,r),n={};for(var o in e)void 0!==t[o]&&void 0!==r[o]&&(n[o]=Bt(t[o],r[o]));return function(t){for(var r in n)e[r]=n[r](t);return e}};function qt(t){for(var r=U.parse(t),e=r.length,n=0,o=0,i=0,u=0;u<e;u++)n||"number"==typeof r[u]?n++:void 0!==r[u].hue?i++:o++;return{parsed:r,numNumbers:n,numRGB:o,numHSL:i}}var Zt=function(t,r){var e=U.createTransformer(r),n=qt(t),o=qt(r);return zt(Wt(n.parsed,o.parsed),e)},Ht=function(r,e){return function(t){return Vt(r,e,t)}};function Ut(t,r,e){for(var n,o=[],i=e||("number"==typeof(n=t[0])?Ht:"string"==typeof n?q.test(n)?It:Zt:Array.isArray(n)?Wt:"object"==typeof n?Nt:void 0),u=t.length-1,a=0;a<u;a++){var s,c=i(t[a],t[a+1]);r&&(s=Array.isArray(r)?r[a]:r,c=zt(s,c)),o.push(c)}return o}function $t(t,r,e,n){return void 0===n&&(n=0),o=t+e*(r-t)/Math.max(n,e),void 0===i&&(i=2),i=Math.pow(10,i),Math.round(o*i)/i;var o,i}function Gt(t){return t}function Kt(i){return void 0===i&&(i=Gt),At(function(t,r,e){var n=r-e,o=-(0-t+1)*(0-i(Math.abs(n)));return n<=0?r+o:r-o})}function Jt(t,r){return wt(t)?t/(1e3/r):0}function Qt(t,r){return r?t*(1e3/r):0}var tr=Kt(),rr=Kt(Math.sqrt),er=At(function(t,r,e){var n=r-t;return((e-t)%n+n)%n+t}),nr=(Ft(0,1),or.prototype.applyMiddleware=function(t){return this.create(A(A({},this.props),{middleware:this.props.middleware?i([t],this.props.middleware):[t]}))},or.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var e=1===t.length?t[0]:zt.apply(void 0,t);return this.applyMiddleware(function(r){return function(t){return r(e(t))}})},or.prototype.while=function(n){return this.applyMiddleware(function(r,e){return function(t){return n(t)?r(t):e()}})},or.prototype.filter=function(e){return this.applyMiddleware(function(r){return function(t){return e(t)&&r(t)}})},or);function or(t){void 0===t&&(t={}),this.props=t}function ir(t,r,e){var n=r.middleware;return new ar({middleware:n,onComplete:e},"function"==typeof t?{update:t}:t)}var ur,ar=function(t,r){var e=this,n=t.middleware,o=t.onComplete;this.isActive=!0,this.update=function(t){e.observer.update&&e.updateObserver(t)},this.complete=function(){e.observer.complete&&e.isActive&&e.observer.complete(),e.onComplete&&e.onComplete(),e.isActive=!1},this.error=function(t){e.observer.error&&e.isActive&&e.observer.error(t),e.isActive=!1},this.observer=r,this.updateObserver=function(t){return r.update(t)},this.onComplete=o,r.update&&n&&n.length&&n.forEach(function(t){return e.updateObserver=t(e.updateObserver,e.complete)})},sr=(r(cr,ur=nr),cr.prototype.create=function(t){return new cr(t)},cr.prototype.start=function(t){void 0===t&&(t={});var r=!1,e={stop:function(){}},n=this.props,o=n.init,i=b(n,["init"]),u=o(ir(t,i,function(){r=!0,e.stop()})),e=u?A(A({},e),u):e;return t.registerParent&&t.registerParent(e),r&&e.stop(),e},cr);function cr(){return null!==ur&&ur.apply(this,arguments)||this}function fr(t){return new sr({init:t})}var pr,dr=(r(lr,pr=nr),lr.prototype.complete=function(){this.subscribers.forEach(function(t){return t.complete()})},lr.prototype.error=function(r){this.subscribers.forEach(function(t){return t.error(r)})},lr.prototype.update=function(t){for(var r=0;r<this.subscribers.length;r++)this.subscribers[r].update(t)},lr.prototype.subscribe=function(t){var r=this,e=ir(t,this.props);return this.subscribers.push(e),{unsubscribe:function(){var t=r.subscribers.indexOf(e);-1!==t&&r.subscribers.splice(t,1)}}},lr.prototype.stop=function(){this.parent&&this.parent.stop()},lr.prototype.registerParent=function(t){this.stop(),this.parent=t},lr);function lr(){var t=null!==pr&&pr.apply(this,arguments)||this;return t.subscribers=[],t}var vr,hr=(r(mr,vr=dr),mr.prototype.create=function(t){return new mr(t)},mr);function mr(){return null!==vr&&vr.apply(this,arguments)||this}function gr(t,r){var e=1/(t-1),n=1/(2*(t-1)),o=Math.min(r,1)/n;return Math.floor((1+o)/2)*e}var yr,br=Object.freeze({__proto__:null,angle:Mt,degreesToRadians:Ct,distance:Tt,isPoint3D:St,isPoint:kt,dilate:Vt,getValueFromProgress:Vt,pointFromAngleAndDistance:function(t,r,e){return r=Ct(r),{x:e*Math.cos(r)+t.x,y:e*Math.sin(r)+t.y}},getProgressFromValue:Xt,radiansToDegrees:Ot,smooth:$t,speedPerFrame:Jt,speedPerSecond:Qt,stepProgress:gr}),wr=(r(Or,yr=dr),Or.prototype.create=function(t){return new Or(t)},Or.prototype.get=function(){return this.current},Or.prototype.getVelocity=function(){return this.getVelocityOfCurrent()},Or.prototype.update=function(t){yr.prototype.update.call(this,t),this.prev=this.current,this.updateCurrent(t);var r=et.delta,e=et.timestamp;this.timeDelta=r,this.lastUpdated=e,it.postRender(this.scheduleVelocityCheck)},Or.prototype.subscribe=function(t){var r=yr.prototype.subscribe.call(this,t);return this.subscribers[this.subscribers.length-1].update(this.current),r},Or.prototype.getSingleVelocity=function(t,r){return"number"==typeof t&&"number"==typeof r?Qt(t-r,this.timeDelta):Qt(parseFloat(t)-parseFloat(r),this.timeDelta)||0},Or.prototype.getListVelocity=function(){var e=this;return this.current.map(function(t,r){return e.getSingleVelocity(t,e.prev[r])})},Or.prototype.getMapVelocity=function(){var t={};for(var r in this.current)this.current.hasOwnProperty(r)&&(t[r]=this.getSingleVelocity(this.current[r],this.prev[r]));return t},Or);function Or(t){var r,e,n,o=yr.call(this,t)||this;return o.scheduleVelocityCheck=function(){return it.postRender(o.velocityCheck)},o.velocityCheck=function(t){t.timestamp!==o.lastUpdated&&(o.prev=o.current)},o.prev=o.current=t.value||0,e=o.current,"string"==(n=typeof e)||"number"==n?(o.updateCurrent=function(t){return o.current=t},o.getVelocityOfCurrent=function(){return o.getSingleVelocity(o.current,o.prev)}):(r=o.current,Array.isArray(r)?(o.updateCurrent=function(t){return o.current=i(t)},o.getVelocityOfCurrent=function(){return o.getListVelocity()}):(o.updateCurrent=function(t){for(var r in o.current={},t)t.hasOwnProperty(r)&&(o.current[r]=t[r])},o.getVelocityOfCurrent=function(){return o.getMapVelocity()})),t.initialSubscription&&o.subscribe(t.initialSubscription),o}function Mr(t){var f=t.getCount,p=t.getFirst,d=t.getOutput,l=t.mapApi,v=t.setProp,h=t.startActions;return function(c){return fr(function(t){function n(){return r(a)}var r=t.update,o=t.complete,i=t.error,u=f(c),a=d(),s=0,e=h(c,function(t,r){var e=!1;return t.start({complete:function(){e||(e=!0,++s===u&&it.update(o))},error:i,update:function(t){v(a,r,t),it.update(n,!1,!0)}})});return Object.keys(p(e)).reduce(function(t,r){return t[r]=l(e,r),t},{})})}}function xr(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Br(t)}function Ar(e){function n(t,r){return void 0!==t&&!e[r](t)}var t=Object.keys(e);return{getVectorKeys:function(e){return t.reduce(function(t,r){return n(e[r],r)&&t.push(r),t},[])},testVectorProps:function(r){return r&&t.some(function(t){return n(r[t],t)})}}}function Cr(r){return Wr.find(function(t){return t.test(r)})}function kr(t,r){return t(r)}function Sr(o,i,u){var t=u[0],r=i[t].map(function(t,r){var e,n=u.reduce((e=r,function(t,r){return t[r]=t[r][e],t}),A({},i));return Zr(t)(o,n)});return xr.apply(void 0,r)}function Pr(o,i,u){var a=u[0],t=Object.keys(i[a]).reduce(function(t,r){var e,n=u.reduce((e=r,function(t,r){return t[r]=t[r][e],t}),A({},i));return t[r]=Zr(i[a][r])(o,n),t},{});return zr(t)}function Tr(t,r){var e=r.from,n=r.to,o=b(r,["from","to"]),i=Cr(e)||Cr(n),u=i.transform,a=i.parse;return t(A(A({},o),{from:"string"==typeof e?a(e):e,to:"string"==typeof n?a(n):n})).pipe(u)}function Vr(i){return function(t,r){var e=r.from,n=r.to,o=b(r,["from","to"]);return t(A(A({},o),{from:0,to:1})).pipe(i(e,n))}}function Rr(n,t){var r=Ar(t),o=r.testVectorProps,i=r.getVectorKeys;return function(t){if(!o(t))return n(t);var r=i(t),e=t[r[0]];return Zr(e)(n,t,r)}}function jr(b){return void 0===b&&(b={}),fr(function(t){var o=t.complete,i=t.update,r=b.velocity,e=void 0===r?0:r,n=b.from,u=void 0===n?0:n,a=b.power,s=void 0===a?.8:a,c=b.timeConstant,f=void 0===c?350:c,p=b.restDelta,d=void 0===p?.5:p,l=b.modifyTarget,v=0,h=s*e,m=u+h,g=void 0===l?m:l(m);g!==m&&(h=g-u);var y=it.update(function(t){var r=t.delta;v+=r;var e=-h*Math.exp(-v/f),n=d<e||e<-d;i(n?g+e:g),n||(ut.update(y),o())},!0);return{stop:function(){return ut.update(y)}}})}function _r(C){return void 0===C&&(C={}),fr(function(t){var s,c=t.update,f=t.complete,r=C.velocity,p=void 0===r?0:r,e=C.from,n=void 0===e?0:e,o=C.to,d=void 0===o?0:o,i=C.stiffness,l=void 0===i?100:i,u=C.damping,v=void 0===u?10:u,a=C.mass,h=void 0===a?1:a,m=C.restSpeed,g=void 0===m?.01:m,y=C.restDelta,b=void 0===y?.01:y,w=p?-p/1e3:0,O=0,M=d-n,x=n,A=it.update(function(t){var r=t.delta;O+=r;var e,n,o=v/(2*Math.sqrt(l*h)),i=Math.sqrt(l/h)/1e3;s=x,x=o<1?(n=Math.exp(-o*i*O),e=i*Math.sqrt(1-o*o),d-n*((w+o*i*M)/e*Math.sin(e*O)+M*Math.cos(e*O))):(n=Math.exp(-i*O),d-n*(M+(w+i*M)*O)),p=Qt(x-s,r);var u=Math.abs(p)<=g,a=Math.abs(d-x)<=b;u&&a?(c(x=d),ut.update(A),f()):c(x)},!0);return{stop:function(){return ut.update(A)}}})}function Er(D){return void 0===D&&(D={}),fr(function(t){function n(t){var r;void 0===t&&(t=!1),j=Gr({from:O=(r=[x,O])[0],to:x=r[1],ease:p,reverseEase:t}).start(u)}function o(){_=Kr(Xt(0,c,C)),j.seek(_)}function r(){E=!0,i=it.update(function(t){var r,e=t.delta;C+=e,o(),!(r=E&&c+b<C)||(!r||h||l||g)&&(C=c-(C-b),h&&R<h?(R++,1):l&&S<l?(S++,n(),1):g&&T<g&&(n(++T%2!=0),1))||(ut.update(i),a&&it.update(a,!1,!0))},!0)}function e(){E=!1,i&&ut.update(i)}var i,u=t.update,a=t.complete,s=D.duration,c=void 0===s?300:s,f=D.ease,p=void 0===f?pt:f,d=D.flip,l=void 0===d?0:d,v=D.loop,h=void 0===v?0:v,m=D.yoyo,g=void 0===m?0:m,y=D.repeatDelay,b=void 0===y?0:y,w=D.from,O=void 0===w?0:w,M=D.to,x=void 0===M?1:M,A=D.elapsed,C=void 0===A?0:A,k=D.flipCount,S=void 0===k?0:k,P=D.yoyoCount,T=void 0===P?0:P,V=D.loopCount,R=void 0===V?0:V,j=Gr({from:O,to:x,ease:p}).start(u),_=0,E=!1;return r(),{isActive:function(){return E},getElapsed:function(){return Ft(0,c,C)},getProgress:function(){return _},stop:function(){e()},pause:function(){return e(),this},resume:function(){return E||r(),this},seek:function(t){return C=Vt(0,c,t),it.update(o,!1,!0),this},reverse:function(){return n(),this}}})}function Dr(t){var r,e,n,o,i=t.easings,u=t.ease,a=void 0===u?D:u,s=t.times,c=t.values,f=b(t,["easings","ease","times","values"]),i=Array.isArray(i)?i:(e=i,(r=c).map(function(){return e||pt}).splice(0,r.length-1)),s=s||(o=(n=c).length,n.map(function(t,r){return 0!==r?r/(o-1):0})),p=i.map(function(t,r){return Gr({from:c[r],to:c[r+1],ease:t})});return Er(A(A({},f),{ease:a})).applyMiddleware(function(t){return r=p,e=t,o=(n=s).length,u=(i=o-1)-1,a=r.map(function(t){return t.start(e)}),function(t){t<=n[0]&&a[0].seek(0),t>=n[i]&&a[u].seek(1);for(var r=1;r<o&&!(n[r]>t||r===i);r++);var e=Xt(n[r-1],n[r],t);a[r-1].seek(Jr(e))};var n,r,e,o,i,u,a})}function Fr(t,r){var e,n,o,i,u,a,s;return Array.isArray(r)?t.push.apply(t,(n=[],o=(e=r)[e.length-1],u=(i="number"==typeof o)?o:0,a=i?e.slice(0,-1):e,s=a.length,a.forEach(function(t,r){var e;n.push(t),r!==s-1&&(e=t.duration||300,n.push(""+(u-e)))}),n)):t.push(r),t}function Xr(t,r,e){var n,o=t.duration,i=t.easings,u=t.times,a=t.values,s=a.length,c=u[s-1],f=0===r.at?0:r.at/o,p=(r.at+r.duration)/o;return 0===e?(a.push(r.from),u.push(f)):c!==f?(void 0!==r.from&&(a.push(a[s-1]),u.push(f),i.push(D)),n=void 0!==r.from?r.from:a[s-1],a.push(n),u.push(f),i.push(D)):void 0!==r.from&&(a.push(r.from),u.push(f),i.push(D)),a.push(r.to),u.push(p),i.push(r.ease||dt),t}function Yr(n,o,i){return fr(function(t){var r=t.update,e=o.split(" ").map(function(t){return n.addEventListener(t,r,i),t});return{stop:function(){return e.forEach(function(t){return n.removeEventListener(t,r,i)})}}})}function Lr(){return{clientX:0,clientY:0,pageX:0,pageY:0,x:0,y:0}}function Ir(t,r){return void 0===r&&(r=Lr()),r.clientX=r.x=t.clientX,r.clientY=r.y=t.clientY,r.pageX=t.pageX,r.pageY=t.pageY,r}var zr=Mr({getOutput:function(){return{}},getCount:function(t){return Object.keys(t).length},getFirst:function(t){return t[Object.keys(t)[0]]},mapApi:function(o,i){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return Object.keys(o).reduce(function(t,r){var e;return o[r][i]&&(n[0]&&void 0!==n[0][r]?t[r]=o[r][i](n[0][r]):t[r]=(e=o[r])[i].apply(e,n)),t},{})}},setProp:function(t,r,e){return t[r]=e},startActions:function(e,n){return Object.keys(e).reduce(function(t,r){return t[r]=n(e[r],r),t},{})}}),Br=Mr({getOutput:function(){return[]},getCount:function(t){return t.length},getFirst:function(t){return t[0]},mapApi:function(r,n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return r.map(function(t,r){if(t[n])return Array.isArray(e[0])?t[n](e[0][r]):t[n].apply(t,e)})}},setProp:function(t,r,e){return t[r]=e},startActions:function(t,e){return t.map(function(t,r){return e(t,r)})}}),Wr=[g,m,h,y,w],Nr=Vr(It),qr=Vr(Zt),Zr=function(t){return"number"==typeof t?kr:Array.isArray(t)?Sr:Boolean(Cr(t))?Tr:q.test(t)?Nr:U.test(t)?qr:"object"==typeof t?Pr:kr},Hr=Rr(jr,{from:d.test,modifyTarget:function(t){return"function"==typeof t},velocity:d.test}),Ur=Rr(_r,{from:d.test,to:d.test,stiffness:d.test,damping:d.test,mass:d.test,velocity:d.test}),$r=Rr(function(t){var r=t.from,v=void 0===r?0:r,e=t.velocity,h=void 0===e?0:e,m=t.min,g=t.max,n=t.power,y=void 0===n?.8:n,o=t.timeConstant,b=void 0===o?700:o,i=t.bounceStiffness,w=void 0===i?500:i,u=t.bounceDamping,O=void 0===u?10:u,a=t.restDelta,M=void 0===a?1:a,x=t.modifyTarget;return fr(function(t){function r(t){return void 0!==m&&t<m||void 0!==g&&g<t}function e(t){return Math.abs(m-t)<Math.abs(g-t)?m:g}function n(t,r){i&&i.stop(),i=t.start({update:p,complete:function(){(r||d)()}})}function o(t){n(_r(A(A({},t),{stiffness:w,damping:O,restDelta:M})))}var i,u,a,s,c,f,p=t.update,d=t.complete,l=v;return r(v)?o({from:v,velocity:h,to:e(v)}):(u=y*h+v,void 0!==x&&(u=x(u),x=void 0,h=(u-v)/y),c=jr({from:v,velocity:h,timeConstant:b,power:y,restDelta:M,modifyTarget:x}),f=void 0,r(u)&&(a=e(u),s=a==m?-1:1,c=c.while(function(t){return h=Qt(t-l,et.delta),0<a-(l=t)*s}),f=function(){return o({from:l,to:a,velocity:h})}),n(c,f)),{stop:function(){return i&&i.stop()}}})},{from:d.test,velocity:d.test,min:d.test,max:d.test,damping:d.test,stiffness:d.test,modifyTarget:function(t){return"function"==typeof t}}),Gr=Rr(function(t){var r=t.from,e=void 0===r?0:r,n=t.to,o=void 0===n?1:n,i=t.ease,u=void 0===i?D:i,a=t.reverseEase;return void 0!==a&&a&&(u=ct(u)),fr(function(t){var r=t.update;return{seek:function(t){return r(t)}}}).pipe(u,function(t){return Vt(e,o,t)})},{ease:function(t){return"function"==typeof t},from:d.test,to:d.test}),Kr=Ft(0,1),Jr=Ft(0,1),Qr=Rr(function(m){return void 0===m&&(m={}),fr(function(t){var n=t.complete,o=t.update,r=m.acceleration,i=void 0===r?0:r,e=m.friction,u=void 0===e?0:e,a=m.velocity,s=void 0===a?0:a,c=m.springStrength,f=m.to,p=m.restSpeed,d=void 0===p?.001:p,l=m.from,v=void 0===l?0:l,h=it.update(function(t){var r=t.delta,e=Math.max(r,16);i&&(s+=Jt(i,e)),u&&(s*=Math.pow(1-u,e/100)),void 0!==c&&void 0!==f&&(s+=(f-v)*Jt(c,e)),v+=Jt(s,e),o(v),!1!==d&&(!s||Math.abs(s)<=d)&&(ut.update(h),n())},!0);return{set:function(t){return v=t,this},setAcceleration:function(t){return i=t,this},setFriction:function(t){return u=t,this},setSpringStrength:function(t){return c=t,this},setSpringTarget:function(t){return f=t,this},setVelocity:function(t){return s=t,this},stop:function(){return ut.update(h)}}})},{acceleration:d.test,friction:d.test,velocity:d.test,from:d.test,to:d.test,springStrength:d.test}),te=[Lr()],re=!1;"undefined"!=typeof document&&Yr(document,"touchstart touchmove",{passive:!0,capture:!0}).start(function(t){var r=t.touches;re=!0;for(var e=r.length,n=te.length=0;n<e;n++){var o=r[n];te.push(Ir(o))}});function ee(t){var r=void 0===t?{}:t,e=r.preventDefault,f=void 0===e||e,n=r.scale,p=void 0===n?1:n,o=r.rotate,d=void 0===o?0:o;return fr(function(t){var r,e,o=t.update,i={touches:te,scale:p,rotate:d},u=0,a=0,s=1<te.length;s&&(r=te[0],e=te[1],u=Tt(r,e),a=Mt(r,e));function n(){var t,r,e,n;s&&(t=te[0],r=te[1],e=Tt(t,r),n=Mt(t,r),i.scale=p*(e/u),i.rotate=d+(n-a)),o(i)}var c=Yr(document,"touchmove",{passive:!f}).start(function(t){(f||1<t.touches.length)&&t.preventDefault(),it.update(n)});return re&&it.update(n),{stop:function(){ut.update(n),c.stop()}}})}var ne=Lr(),oe=!1;"undefined"!=typeof document&&Yr(document,"mousedown mousemove",!0).start(function(t){oe=!0,Ir(t,ne)});function ie(t){var r=(void 0===t?{}:t).preventDefault,o=void 0===r||r;return fr(function(t){function r(){return e(ne)}var e=t.update,n=Yr(document,"mousemove").start(function(t){o&&t.preventDefault(),it.update(r)});return oe&&it.update(r),{stop:function(){ut.update(r),n.stop()}}})}function ue(t){return t[0]}function ae(t){return void 0===t&&(t={}),re?ee(t).pipe(function(t){return t.touches},ue):ie(t)}function se(){for(var u=[],t=0;t<arguments.length;t++)u[t]=arguments[t];return fr(function(t){var r,e=t.update,n=t.complete,o=0,i=function(){r=u[o].start({complete:function(){(++o>=u.length?n:i)()},update:e})};return i(),{stop:function(){return r&&r.stop()}}})}function ce(n){return fr(function(t){var r=t.complete,e=setTimeout(r,n);return{stop:function(){return clearTimeout(e)}}})}function fe(t){var e=t.onRead,r=t.onRender,n=t.uncachedValues,c=void 0===n?new Set:n,o=t.useCache,f=void 0===o||o;return function(t){void 0===t&&(t={});var n=b(t,[]),o={},i=[],u=!1;function a(t,r){t.startsWith("--")&&(n.hasCSSVariable=!0);var e=o[t];o[t]=r,o[t]!==e&&(-1===i.indexOf(t)&&i.push(t),u||(u=!0,it.render(s.render)))}var s={get:function(t,r){return void 0===r&&(r=!1),!r&&f&&!c.has(t)&&void 0!==o[t]?o[t]:e(t,n)},set:function(t,r){if("string"==typeof t)a(t,r);else for(var e in t)a(e,t[e]);return this},render:function(t){return void 0===t&&(t=!1),!u&&!0!==t||(r(o,n,i),u=!1,i.length=0),this}};return s}}function pe(t,r){return ge.set(t,he(r))}var de,le=Object.freeze({__proto__:null,applyOffset:xt,clamp:Ft,conditional:function(r,e){return function(t){return r(t)?e(t):t}},interpolate:function(t,r,e){var n=void 0===e?{}:e,o=n.clamp,i=void 0===o||o,u=n.ease,a=n.mixer,s=t.length;r.length,u&&Array.isArray(u)&&u.length,t[0]>t[s-1]&&(t=[].concat(t),r=[].concat(r),t.reverse(),r.reverse());var c,f,p,d,l,v,h,m,g,y=Ut(r,u,a),b=2===s?(v=y,h=(l=t)[0],m=l[1],g=v[0],function(t){return g(Xt(h,m,t))}):(f=y,p=(c=t).length,d=p-1,function(t){var r=0,e=!1;if(t<=c[0]?e=!0:t>=c[d]&&(r=d-1,e=!0),!e){for(var n=1;n<p&&!(c[n]>t||n===d);n++);r=n-1}var o=Xt(c[r],c[r+1],t);return f[r](o)});return i?zt(Ft(t[0],t[s-1]),b):b},blendArray:Wt,blendColor:It,pipe:zt,smooth:function(o){void 0===o&&(o=50);var i=0,u=0;return function(t){var r=et.timestamp,e=r!==u?r-u:0,n=e?$t(i,t,e,o):i;return u=r,i=n}},snap:function(o){if("number"==typeof o)return function(t){return Math.round(t/o)*o};var i=0,u=o.length;return function(t){var r=Math.abs(o[0]-t);for(i=1;i<u;i++){var e=o[i],n=Math.abs(e-t);if(0===n)return e;if(r<n)return o[i-1];if(i===u-1)return e;r=n}}},generateStaticSpring:Kt,nonlinearSpring:rr,linearSpring:tr,wrap:er,appendUnit:function(r){return function(t){return""+t+r}},steps:function(e,n,o){return void 0===n&&(n=0),void 0===o&&(o=1),function(t){var r=Xt(n,o,t);return Vt(n,o,gr(e,r))}},transformMap:function(o){return function(t){var r,e=A({},t);for(var n in o){o.hasOwnProperty(n)&&(r=o[n],e[n]=r(t[n]))}return e}}}),ve=/([a-z])([A-Z])/g,he=function(t){return t.replace(ve,"$1-$2").toLowerCase()},me=new Map,ge=new Map,ye=["Webkit","Moz","O","ms",""],be=ye.length,we="undefined"!=typeof document,Oe=function(t,r){void 0===r&&(r=!1);var e,n=r?ge:me;return n.has(t)||(we?function(t){de=de||document.createElement("div");for(var r=0;r<be;r++){var e=ye[r],n=""===e,o=n?t:e+t.charAt(0).toUpperCase()+t.slice(1);if(o in de.style||n){if(n&&"clipPath"===t&&ge.has(t))return;me.set(t,o),pe(t,(n?"":"-")+he(o))}}}(t):pe(e=t,e)),n.get(t)||t},Me=["","X","Y","Z"],xe=["translate","scale","rotate","skew","transformPerspective"].reduce(function(t,e){return Me.reduce(function(t,r){return t.push(e+r),t},t)},["x","y","z"]),Ae=xe.reduce(function(t,r){return t[r]=!0,t},{});function Ce(t){return!0===Ae[t]}function ke(t,r){return xe.indexOf(t)-xe.indexOf(r)}var Se=new Set(["originX","originY","originZ"]);var Pe=A(A({},d),{transform:Math.round}),Te={color:q,backgroundColor:q,outlineColor:q,fill:q,stroke:q,borderColor:q,borderTopColor:q,borderRightColor:q,borderBottomColor:q,borderLeftColor:q,borderWidth:g,borderTopWidth:g,borderRightWidth:g,borderBottomWidth:g,borderLeftWidth:g,borderRadius:g,radius:g,borderTopLeftRadius:g,borderTopRightRadius:g,borderBottomRightRadius:g,borderBottomLeftRadius:g,width:g,maxWidth:g,height:g,maxHeight:g,size:g,top:g,right:g,bottom:g,left:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,rotate:h,rotateX:h,rotateY:h,rotateZ:h,scale:v,scaleX:v,scaleY:v,scaleZ:v,skew:h,skewX:h,skewY:h,distance:g,translateX:g,translateY:g,translateZ:g,x:g,y:g,z:g,perspective:g,opacity:l,originX:O,originY:O,originZ:g,zIndex:Pe,fillOpacity:l,strokeOpacity:l,numOctaves:Pe},Ve=function(t){return Te[t]},Re=function(t,r){return r&&"number"==typeof t?r.transform(t):t},je="scrollLeft",_e="scrollTop",Ee=new Set([je,_e]),De=new Set([je,_e,"transform"]),Fe={x:"translateX",y:"translateY",z:"translateZ"};function Xe(t){return"function"==typeof t}function Ye(t,r,e,n,o,i,u,a){void 0===r&&(r=!0),void 0===e&&(e={}),void 0===n&&(n={}),void 0===o&&(o={}),void 0===i&&(i=[]),void 0===u&&(u=!1),void 0===a&&(a=!0);var s,c=!0,f=!1,p=!1;for(var d in t){var l=t[d],v=Ve(d),h=Re(l,v);Ce(d)?(f=!0,n[d]=h,i.push(d),c&&(v.default&&l!==v.default||!v.default&&0!==l)&&(c=!1)):(s=d,Se.has(s)?(o[d]=h,p=!0):De.has(d)&&Xe(h)||(e[Oe(d,u)]=h))}return!f&&"function"!=typeof t.transform||(e.transform=function(t,r,e,n,o,i){void 0===i&&(i=!0);var u="",a=!1;e.sort(ke);for(var s=e.length,c=0;c<s;c++){var f=e[c];u+=(Fe[f]||f)+"("+r[f]+") ",a="z"===f||a}return!a&&o?u+="translateZ(0)":u=u.trim(),Xe(t.transform)?u=t.transform(r,n?"":u):i&&n&&(u="none"),u}(t,n,i,c,r,a)),p&&(e.transformOrigin=(o.originX||"50%")+" "+(o.originY||"50%")+" "+(o.originZ||0)),e}function Le(t){var r=void 0===t?{}:t,e=r.enableHardwareAcceleration,n=void 0===e||e,o=r.isDashCase,i=void 0===o||o,u=r.allowTransformNone,a=void 0===u||u,s={},c={},f={},p=[];return function(t){return p.length=0,Ye(t,n,s,c,f,p,i,a),s}}var Ie=fe({onRead:function(t,r){var e=r.element,n=r.preparseOutput,o=Ve(t);if(Ce(t))return o&&o.default||0;if(Ee.has(t))return e[t];var i=window.getComputedStyle(e,null).getPropertyValue(Oe(t,!0))||0;return n&&o&&o.test(i)&&o.parse?o.parse(i):i},onRender:function(t,r,e){var n=r.element,o=r.buildStyles,i=r.hasCSSVariable;if(Object.assign(n.style,o(t)),i)for(var u=e.length,a=0;a<u;a++){var s=e[a];s.startsWith("--")&&n.style.setProperty(s,t[s])}-1!==e.indexOf(je)&&(n[je]=t[je]),-1!==e.indexOf(_e)&&(n[_e]=t[_e])},uncachedValues:Ee});var ze=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues"]),Be=.5,We=function(){return{style:{}}},Ne=function(t,r){return g.transform(t*r)},qe={x:0,y:0,width:0,height:0};function Ze(t,r,e){return"string"==typeof t?t:g.transform(r+e*t)}var He={enableHardwareAcceleration:!1,isDashCase:!1};function Ue(t,r,e,n,o,i){void 0===r&&(r=qe),void 0===n&&(n=Le(He)),void 0===o&&(o=We()),void 0===i&&(i=!0);var u,a,s=t.attrX,c=t.attrY,f=t.originX,p=t.originY,d=t.pathLength,l=t.pathSpacing,v=void 0===l?1:l,h=t.pathOffset,m=void 0===h?0:h,g=n(b(t,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]));for(var y in g){"transform"===y?o.style.transform=g[y]:o[i&&!ze.has(y)?he(y):y]=g[y]}return void 0===f&&void 0===p&&!g.transform||(o.style.transformOrigin=(a=void 0!==p?p:Be,Ze(void 0!==f?f:Be,(u=r).x,u.width)+" "+Ze(a,u.y,u.height))),void 0!==s&&(o.x=s),void 0!==c&&(o.y=c),void 0!==e&&void 0!==d&&(o[i?"stroke-dashoffset":"strokeDashoffset"]=Ne(-m,e),o[i?"stroke-dasharray":"strokeDasharray"]=Ne(d,e)+" "+Ne(v,e)),o}function $e(t){var r=function(t){try{return"function"==typeof(r=t).getBBox?r.getBBox():r.getBoundingClientRect()}catch(t){return{x:0,y:0,width:0,height:0}}var r}(t),e="path"===t.tagName&&t.getTotalLength?t.getTotalLength():void 0;return Ke({element:t,buildAttrs:function(r,e,n){void 0===n&&(n=!0);var o=We(),i=Le(He);return function(t){return Ue(t,r,e,i,o,n)}}(r,e)})}function Ge(t,r){var e,n,o;return t===window?e=Je(t):(o=t)instanceof HTMLElement||"function"==typeof o.click?e=function(t,r){void 0===r&&(r={});var e=r.enableHardwareAcceleration,n=r.allowTransformNone,o=b(r,["enableHardwareAcceleration","allowTransformNone"]);return Ie(A({element:t,buildStyles:Le({enableHardwareAcceleration:e,allowTransformNone:n}),preparseOutput:!0},o))}(t,r):((n=t)instanceof SVGElement||"ownerSVGElement"in n)&&(e=$e(t)),Qe.set(t,e),e}var Ke=fe({onRead:function(t,r){var e=r.element;if(Ce(t=ze.has(t)?t:he(t))){var n=Ve(t);return n&&n.default||0}return e.getAttribute(t)},onRender:function(t,r){var e=r.element,n=(0,r.buildAttrs)(t);for(var o in n)"style"===o?Object.assign(e.style,n.style):e.setAttribute(o,n[o])}}),Je=fe({useCache:!1,onRead:function(t){return"scrollTop"===t?window.pageYOffset:window.pageXOffset},onRender:function(t){var r=t.scrollTop,e=void 0===r?0:r,n=t.scrollLeft,o=void 0===n?0:n;return window.scrollTo(o,e)}}),Qe=new WeakMap;function tn(t,r){var e,n,o="string"==typeof t?document.querySelector(t):t;return e=o,n=r,Qe.has(e)?Qe.get(e):Ge(e,n)}var rn=tn,en=tn;t.Action=sr,t.ValueReaction=wr,t.action=fr,t.calc=br,t.chain=se,t.composite=zr,t.crossfade=function(r,e){return fr(function(n){var o=0,t=xr(r,e).start(A(A({},n),{update:function(t){var r=t[0],e=t[1];n.update(Vt(r,e,o))}}));return{setBalance:function(t){return o=t},stop:function(){return t.stop()}}})},t.css=rn,t.decay=Hr,t.delay=ce,t.easing=Et,t.everyFrame=function(){return fr(function(t){var e=t.update,n=0,r=it.update(function(t){var r=t.timestamp;e(r-(n=n||r))},!0,!0);return{stop:function(){return ut.update(r)}}})},t.inertia=$r,t.keyframes=Dr,t.listen=Yr,t.merge=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return fr(function(r){var t=e.map(function(t){return t.start(r)});return{stop:function(){return t.forEach(function(t){return t.stop()})}}})},t.mouse=ie,t.multicast=function(){return new hr},t.multitouch=ee,t.parallel=xr,t.physics=Qr,t.pointer=function(t){void 0===t&&(t={});var r=t.x,e=t.y,n=b(t,["x","y"]);if(void 0===r&&void 0===e)return ae(n);var o=xt(r||0),i=xt(e||0),u={x:0,y:0};return ae(n).pipe(function(t){return u.x=o(t.x),u.y=i(t.y),u})},t.schedule=function(u,a){return fr(function(t){var r,e=t.update,n=t.complete,o=u.start({update:function(){return void 0!==r&&e(r)},complete:n}),i=a.start({update:function(t){return r=t},complete:n});return{stop:function(){o.stop(),i.stop()}}})},t.spring=Ur,t.stagger=function(t,n){var o="number"==typeof n,r=t.map(function(t,r){var e=o?n*r:n(r);return se(ce(e),t)});return xr.apply(void 0,r)},t.styler=tn,t.svg=en,t.timeline=function(t,r){var e=void 0===r?{}:r,n=e.duration,o=e.elapsed,i=e.ease,u=e.loop,a=e.flip,s=e.yoyo,c=0,f=0,p=t.reduce(Fr,[]),d=[];p.forEach(function(t){var r;"string"==typeof t?c+=parseFloat(t):"number"==typeof t?c=t:((r=A(A({},t),{at:c})).duration=void 0===r.duration?300:r.duration,d.push(r),c+=r.duration,f=Math.max(f,r.at+r.duration))});for(var l={},v=d.length,h=0;h<v;h++){var m=d[h],g=m.track;if(void 0===g)throw new Error("No track defined");l.hasOwnProperty(g)||(l[g]=[]),l[g].push(m)}var y,b={};for(var w in l){l.hasOwnProperty(w)&&(y=l[w].reduce(Xr,{duration:f,easings:[],times:[],values:[]}),b[w]=Dr(A(A({},y),{duration:n||f,ease:i,elapsed:o,loop:u,yoyo:s,flip:a})))}return zr(b)},t.transform=le,t.tween=Er,t.value=function(t,r){return new wr({value:t,initialSubscription:r})},t.valueTypes=$,Object.defineProperty(t,"__esModule",{value:!0})});
