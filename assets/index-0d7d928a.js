function Am(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sd={exports:{}},ls={},ld={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),Dm=Symbol.for("react.portal"),Mm=Symbol.for("react.fragment"),$m=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Um=Symbol.for("react.context"),Bm=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),Wm=Symbol.for("react.memo"),Vm=Symbol.for("react.lazy"),sc=Symbol.iterator;function Km(e){return e===null||typeof e!="object"?null:(e=sc&&e[sc]||e["@@iterator"],typeof e=="function"?e:null)}var ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ud=Object.assign,cd={};function wr(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ad}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fd(){}fd.prototype=wr.prototype;function Va(e,t,n){this.props=e,this.context=t,this.refs=cd,this.updater=n||ad}var Ka=Va.prototype=new fd;Ka.constructor=Va;ud(Ka,wr.prototype);Ka.isPureReactComponent=!0;var lc=Array.isArray,dd=Object.prototype.hasOwnProperty,Ga={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)dd.call(t,r)&&!pd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ki,type:e,key:o,ref:s,props:i,_owner:Ga.current}}function Gm(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function Qm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ac=/\/+/g;function Hs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qm(""+e.key):t.toString(36)}function so(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ki:case Dm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hs(s,0):r,lc(i)?(n="",e!=null&&(n=e.replace(ac,"$&/")+"/"),so(i,t,n,"",function(u){return u})):i!=null&&(Qa(i)&&(i=Gm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ac,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",lc(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Hs(o,l);s+=so(o,t,n,a,i)}else if(a=Km(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Hs(o,l++),s+=so(o,t,n,a,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Fi(e,t,n){if(e==null)return e;var r=[],i=0;return so(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ym(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},lo={transition:null},Xm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Ga};M.Children={map:Fi,forEach:function(e,t,n){Fi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Fi(e,function(){t++}),t},toArray:function(e){return Fi(e,function(t){return t})||[]},only:function(e){if(!Qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=wr;M.Fragment=Mm;M.Profiler=Fm;M.PureComponent=Va;M.StrictMode=$m;M.Suspense=Hm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ud({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ga.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)dd.call(t,a)&&!pd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ki,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:Um,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bm,_context:e},e.Consumer=e};M.createElement=hd;M.createFactory=function(e){var t=hd.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Bm,render:e}};M.isValidElement=Qa;M.lazy=function(e){return{$$typeof:Vm,_payload:{_status:-1,_result:e},_init:Ym}};M.memo=function(e,t){return{$$typeof:Wm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return Oe.current.useCallback(e,t)};M.useContext=function(e){return Oe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};M.useEffect=function(e,t){return Oe.current.useEffect(e,t)};M.useId=function(){return Oe.current.useId()};M.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Oe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};M.useRef=function(e){return Oe.current.useRef(e)};M.useState=function(e){return Oe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Oe.current.useTransition()};M.version="18.2.0";ld.exports=M;var E=ld.exports;const G=zm(E),qm=Am({__proto__:null,default:G},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=E,Zm=Symbol.for("react.element"),e0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,n0=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r0={key:!0,ref:!0,__self:!0,__source:!0};function md(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)t0.call(t,r)&&!r0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zm,type:e,key:o,ref:s,props:i,_owner:n0.current}}ls.Fragment=e0;ls.jsx=md;ls.jsxs=md;sd.exports=ls;var d=sd.exports,jl={},vd={exports:{}},Be={},gd={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,j){var I=T.length;T.push(j);e:for(;0<I;){var Y=I-1>>>1,te=T[Y];if(0<i(te,j))T[Y]=j,T[I]=te,I=Y;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],I=T.pop();if(I!==j){T[0]=I;e:for(var Y=0,te=T.length,St=te>>>1;Y<St;){var ze=2*(Y+1)-1,Dt=T[ze],De=ze+1,Ve=T[De];if(0>i(Dt,I))De<te&&0>i(Ve,Dt)?(T[Y]=Ve,T[De]=I,Y=De):(T[Y]=Dt,T[ze]=I,Y=ze);else if(De<te&&0>i(Ve,I))T[Y]=Ve,T[De]=I,Y=De;else break e}}return j}function i(T,j){var I=T.sortIndex-j.sortIndex;return I!==0?I:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,p=null,h=3,y=!1,g=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(u)}}function w(T){if(S=!1,m(T),!g)if(n(a)!==null)g=!0,gn(x);else{var j=n(u);j!==null&&We(w,j.startTime-T)}}function x(T,j){g=!1,S&&(S=!1,v(O),O=-1),y=!0;var I=h;try{for(m(j),p=n(a);p!==null&&(!(p.expirationTime>j)||T&&!ke());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,h=p.priorityLevel;var te=Y(p.expirationTime<=j);j=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(a)&&r(a),m(j)}else r(a);p=n(a)}if(p!==null)var St=!0;else{var ze=n(u);ze!==null&&We(w,ze.startTime-j),St=!1}return St}finally{p=null,h=I,y=!1}}var C=!1,_=null,O=-1,H=5,N=-1;function ke(){return!(e.unstable_now()-N<H)}function mn(){if(_!==null){var T=e.unstable_now();N=T;var j=!0;try{j=_(!0,T)}finally{j?vn():(C=!1,_=null)}}else C=!1}var vn;if(typeof f=="function")vn=function(){f(mn)};else if(typeof MessageChannel<"u"){var Mi=new MessageChannel,Us=Mi.port2;Mi.port1.onmessage=mn,vn=function(){Us.postMessage(null)}}else vn=function(){R(mn,0)};function gn(T){_=T,C||(C=!0,vn())}function We(T,j){O=R(function(){T(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,gn(x))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var I=h;h=j;try{return T()}finally{h=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=h;h=T;try{return j()}finally{h=I}},e.unstable_scheduleCallback=function(T,j,I){var Y=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=I+te,T={id:c++,callback:j,priorityLevel:T,startTime:I,expirationTime:te,sortIndex:-1},I>Y?(T.sortIndex=I,t(u,T),n(a)===null&&T===n(u)&&(S?(v(O),O=-1):S=!0,We(w,I-Y))):(T.sortIndex=te,t(a,T),g||y||(g=!0,gn(x))),T},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(T){var j=h;return function(){var I=h;h=j;try{return T.apply(this,arguments)}finally{h=I}}}})(yd);gd.exports=yd;var i0=gd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd=E,Ue=i0;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sd=new Set,ni={};function Mn(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(ni[e]=t,e=0;e<t.length;e++)Sd.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Il=Object.prototype.hasOwnProperty,o0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uc={},cc={};function s0(e){return Il.call(cc,e)?!0:Il.call(uc,e)?!1:o0.test(e)?cc[e]=!0:(uc[e]=!0,!1)}function l0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function a0(e,t,n,r){if(t===null||typeof t>"u"||l0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ya=/[\-:]([a-z])/g;function Xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ya,Xa);ye[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ya,Xa);ye[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ya,Xa);ye[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function qa(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(a0(t,n,i,r)&&(n=null),r||i===null?s0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ja=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),zl=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),Bt=Symbol.for("react.lazy"),Ed=Symbol.for("react.offscreen"),fc=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ws;function $r(e){if(Ws===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ws=t&&t[1]||""}return`
`+Ws+e}var Vs=!1;function Ks(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$r(e):""}function u0(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=Ks(e.type,!1),e;case 11:return e=Ks(e.type.render,!1),e;case 1:return e=Ks(e.type,!0),e;default:return""}}function Dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Bn:return"Portal";case Nl:return"Profiler";case Ja:return"StrictMode";case Al:return"Suspense";case zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cd:return(e.displayName||"Context")+".Consumer";case xd:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:Dl(e.type)||"Memo";case Bt:t=e._payload,e=e._init;try{return Dl(e(t))}catch{}}return null}function c0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(t);case 8:return t===Ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function f0(e){var t=kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=f0(e))}function _d(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Rd(e,t){t=t.checked,t!=null&&qa(e,"checked",t,!1)}function $l(e,t){Rd(e,t);var n=un(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Fr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function Pd(e,t){var n=un(t.value),r=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Od(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Od(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Td=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d0=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){d0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Ld(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function jd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ld(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var p0=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bl(e,t){if(t){if(p0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,nr=null,rr=null;function vc(e){if(e=Pi(e)){if(typeof Vl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ds(t),Vl(e.stateNode,e.type,t))}}function Id(e){nr?rr?rr.push(e):rr=[e]:nr=e}function Nd(){if(nr){var e=nr,t=rr;if(rr=nr=null,vc(e),t)for(e=0;e<t.length;e++)vc(t[e])}}function Ad(e,t){return e(t)}function zd(){}var Gs=!1;function Dd(e,t,n){if(Gs)return e(t,n);Gs=!0;try{return Ad(e,t,n)}finally{Gs=!1,(nr!==null||rr!==null)&&(zd(),Nd())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Kl=!1;if(jt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){Kl=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{Kl=!1}function h0(e,t,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Vr=!1,Po=null,Oo=!1,Gl=null,m0={onError:function(e){Vr=!0,Po=e}};function v0(e,t,n,r,i,o,s,l,a){Vr=!1,Po=null,h0.apply(m0,arguments)}function g0(e,t,n,r,i,o,s,l,a){if(v0.apply(this,arguments),Vr){if(Vr){var u=Po;Vr=!1,Po=null}else throw Error(P(198));Oo||(Oo=!0,Gl=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gc(e){if($n(e)!==e)throw Error(P(188))}function y0(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gc(i),e;if(o===r)return gc(i),t;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function $d(e){return e=y0(e),e!==null?Fd(e):null}function Fd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fd(e);if(t!==null)return t;e=e.sibling}return null}var bd=Ue.unstable_scheduleCallback,yc=Ue.unstable_cancelCallback,w0=Ue.unstable_shouldYield,S0=Ue.unstable_requestPaint,ie=Ue.unstable_now,x0=Ue.unstable_getCurrentPriorityLevel,nu=Ue.unstable_ImmediatePriority,Ud=Ue.unstable_UserBlockingPriority,To=Ue.unstable_NormalPriority,C0=Ue.unstable_LowPriority,Bd=Ue.unstable_IdlePriority,as=null,gt=null;function E0(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:R0,k0=Math.log,_0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(k0(e)/_0|0)|0}var Hi=64,Wi=4194304;function br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=br(l):(o&=s,o!==0&&(r=br(o)))}else s=n&~i,s!==0?r=br(s):o!==0&&(r=br(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-st(t),i=1<<n,r|=e[n],t&=~i;return r}function P0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-st(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=P0(l,t)):a<=t&&(e.expiredLanes|=l),o&=~l}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hd(){var e=Hi;return Hi<<=1,!(Hi&4194240)&&(Hi=64),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-st(t),e[t]=n}function T0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-st(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function Wd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vd,iu,Kd,Gd,Qd,Yl=!1,Vi=[],Yt=null,Xt=null,qt=null,oi=new Map,si=new Map,Wt=[],L0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wc(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function jr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Pi(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function j0(e,t,n,r,i){switch(t){case"focusin":return Yt=jr(Yt,e,t,n,r,i),!0;case"dragenter":return Xt=jr(Xt,e,t,n,r,i),!0;case"mouseover":return qt=jr(qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oi.set(o,jr(oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,si.set(o,jr(si.get(o)||null,e,t,n,r,i)),!0}return!1}function Yd(e){var t=Cn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=Md(n),t!==null){e.blockedOn=t,Qd(e.priority,function(){Kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return t=Pi(n),t!==null&&iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Sc(e,t,n){ao(e)&&n.delete(t)}function I0(){Yl=!1,Yt!==null&&ao(Yt)&&(Yt=null),Xt!==null&&ao(Xt)&&(Xt=null),qt!==null&&ao(qt)&&(qt=null),oi.forEach(Sc),si.forEach(Sc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,I0)))}function li(e){function t(i){return Ir(i,e)}if(0<Vi.length){Ir(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&Ir(Yt,e),Xt!==null&&Ir(Xt,e),qt!==null&&Ir(qt,e),oi.forEach(t),si.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)Yd(n),n.blockedOn===null&&Wt.shift()}var ir=zt.ReactCurrentBatchConfig,jo=!0;function N0(e,t,n,r){var i=B,o=ir.transition;ir.transition=null;try{B=1,ou(e,t,n,r)}finally{B=i,ir.transition=o}}function A0(e,t,n,r){var i=B,o=ir.transition;ir.transition=null;try{B=4,ou(e,t,n,r)}finally{B=i,ir.transition=o}}function ou(e,t,n,r){if(jo){var i=Xl(e,t,n,r);if(i===null)il(e,t,r,Io,n),wc(e,r);else if(j0(i,e,t,n,r))r.stopPropagation();else if(wc(e,r),t&4&&-1<L0.indexOf(e)){for(;i!==null;){var o=Pi(i);if(o!==null&&Vd(o),o=Xl(e,t,n,r),o===null&&il(e,t,r,Io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else il(e,t,r,null,n)}}var Io=null;function Xl(e,t,n,r){if(Io=null,e=tu(r),e=Cn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function Xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x0()){case nu:return 1;case Ud:return 4;case To:case C0:return 16;case Bd:return 536870912;default:return 16}default:return 16}}var Kt=null,su=null,uo=null;function qd(){if(uo)return uo;var e,t=su,n=t.length,r,i="value"in Kt?Kt.value:Kt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function xc(){return!1}function He(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ki:xc,this.isPropagationStopped=xc,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=He(Sr),Ri=ee({},Sr,{view:0,detail:0}),z0=He(Ri),Ys,Xs,Nr,us=ee({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Ys=e.screenX-Nr.screenX,Xs=e.screenY-Nr.screenY):Xs=Ys=0,Nr=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Xs}}),Cc=He(us),D0=ee({},us,{dataTransfer:0}),M0=He(D0),$0=ee({},Ri,{relatedTarget:0}),qs=He($0),F0=ee({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),b0=He(F0),U0=ee({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=He(U0),H0=ee({},Sr,{data:0}),Ec=He(H0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=K0[e])?!!t[e]:!1}function au(){return G0}var Q0=ee({},Ri,{key:function(e){if(e.key){var t=W0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=He(Q0),X0=ee({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kc=He(X0),q0=ee({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),J0=He(q0),Z0=ee({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=He(Z0),tv=ee({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=He(tv),rv=[9,13,27,32],uu=jt&&"CompositionEvent"in window,Kr=null;jt&&"documentMode"in document&&(Kr=document.documentMode);var iv=jt&&"TextEvent"in window&&!Kr,Jd=jt&&(!uu||Kr&&8<Kr&&11>=Kr),_c=String.fromCharCode(32),Rc=!1;function Zd(e,t){switch(e){case"keyup":return rv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function ov(e,t){switch(e){case"compositionend":return ep(t);case"keypress":return t.which!==32?null:(Rc=!0,_c);case"textInput":return e=t.data,e===_c&&Rc?null:e;default:return null}}function sv(e,t){if(Wn)return e==="compositionend"||!uu&&Zd(e,t)?(e=qd(),uo=su=Kt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jd&&t.locale!=="ko"?null:t.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lv[e.type]:t==="textarea"}function tp(e,t,n,r){Id(r),t=No(t,"onChange"),0<t.length&&(n=new lu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,ai=null;function av(e){dp(e,0)}function cs(e){var t=Gn(e);if(_d(t))return e}function uv(e,t){if(e==="change")return t}var np=!1;if(jt){var Js;if(jt){var Zs="oninput"in document;if(!Zs){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),Zs=typeof Oc.oninput=="function"}Js=Zs}else Js=!1;np=Js&&(!document.documentMode||9<document.documentMode)}function Tc(){Gr&&(Gr.detachEvent("onpropertychange",rp),ai=Gr=null)}function rp(e){if(e.propertyName==="value"&&cs(ai)){var t=[];tp(t,ai,e,tu(e)),Dd(av,t)}}function cv(e,t,n){e==="focusin"?(Tc(),Gr=t,ai=n,Gr.attachEvent("onpropertychange",rp)):e==="focusout"&&Tc()}function fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cs(ai)}function dv(e,t){if(e==="click")return cs(t)}function pv(e,t){if(e==="input"||e==="change")return cs(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:hv;function ui(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Il.call(t,i)||!ut(e[i],t[i]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jc(e,t){var n=Lc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function op(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mv(e){var t=op(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ip(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=jc(n,o);var s=jc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vv=jt&&"documentMode"in document&&11>=document.documentMode,Vn=null,ql=null,Qr=null,Jl=!1;function Ic(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||Vn==null||Vn!==Ro(r)||(r=Vn,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&ui(Qr,r)||(Qr=r,r=No(ql,"onSelect"),0<r.length&&(t=new lu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Gi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},el={},sp={};jt&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function fs(e){if(el[e])return el[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sp)return el[e]=t[n];return e}var lp=fs("animationend"),ap=fs("animationiteration"),up=fs("animationstart"),cp=fs("transitionend"),fp=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){fp.set(e,t),Mn(t,[e])}for(var tl=0;tl<Nc.length;tl++){var nl=Nc[tl],gv=nl.toLowerCase(),yv=nl[0].toUpperCase()+nl.slice(1);fn(gv,"on"+yv)}fn(lp,"onAnimationEnd");fn(ap,"onAnimationIteration");fn(up,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(cp,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,g0(r,t,void 0,e),e.currentTarget=null}function dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Ac(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Ac(i,l,u),o=a}}}if(Oo)throw e=Gl,Oo=!1,Gl=null,e}function V(e,t){var n=t[ra];n===void 0&&(n=t[ra]=new Set);var r=e+"__bubble";n.has(r)||(pp(t,e,2,!1),n.add(r))}function rl(e,t,n){var r=0;t&&(r|=4),pp(n,e,r,t)}var Qi="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[Qi]){e[Qi]=!0,Sd.forEach(function(n){n!=="selectionchange"&&(wv.has(n)||rl(n,!1,e),rl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qi]||(t[Qi]=!0,rl("selectionchange",!1,t))}}function pp(e,t,n,r){switch(Xd(t)){case 1:var i=N0;break;case 4:i=A0;break;default:i=ou}n=i.bind(null,t,n,e),i=void 0,!Kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function il(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Cn(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Dd(function(){var u=o,c=tu(n),p=[];e:{var h=fp.get(e);if(h!==void 0){var y=lu,g=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":y=Y0;break;case"focusin":g="focus",y=qs;break;case"focusout":g="blur",y=qs;break;case"beforeblur":case"afterblur":y=qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=J0;break;case lp:case ap:case up:y=b0;break;case cp:y=ev;break;case"scroll":y=z0;break;case"wheel":y=nv;break;case"copy":case"cut":case"paste":y=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=kc}var S=(t&4)!==0,R=!S&&e==="scroll",v=S?h!==null?h+"Capture":null:h;S=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=ii(f,v),w!=null&&S.push(fi(f,w,m)))),R)break;f=f.return}0<S.length&&(h=new y(h,g,null,n,c),p.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Wl&&(g=n.relatedTarget||n.fromElement)&&(Cn(g)||g[It]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Cn(g):null,g!==null&&(R=$n(g),g!==R||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(S=Cc,w="onMouseLeave",v="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(S=kc,w="onPointerLeave",v="onPointerEnter",f="pointer"),R=y==null?h:Gn(y),m=g==null?h:Gn(g),h=new S(w,f+"leave",y,n,c),h.target=R,h.relatedTarget=m,w=null,Cn(c)===u&&(S=new S(v,f+"enter",g,n,c),S.target=m,S.relatedTarget=R,w=S),R=w,y&&g)t:{for(S=y,v=g,f=0,m=S;m;m=bn(m))f++;for(m=0,w=v;w;w=bn(w))m++;for(;0<f-m;)S=bn(S),f--;for(;0<m-f;)v=bn(v),m--;for(;f--;){if(S===v||v!==null&&S===v.alternate)break t;S=bn(S),v=bn(v)}S=null}else S=null;y!==null&&zc(p,h,y,S,!1),g!==null&&R!==null&&zc(p,R,g,S,!0)}}e:{if(h=u?Gn(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var x=uv;else if(Pc(h))if(np)x=pv;else{x=fv;var C=cv}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=dv);if(x&&(x=x(e,u))){tp(p,x,n,c);break e}C&&C(e,h,u),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Fl(h,"number",h.value)}switch(C=u?Gn(u):window,e){case"focusin":(Pc(C)||C.contentEditable==="true")&&(Vn=C,ql=u,Qr=null);break;case"focusout":Qr=ql=Vn=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,Ic(p,n,c);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":Ic(p,n,c)}var _;if(uu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Wn?Zd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Jd&&n.locale!=="ko"&&(Wn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Wn&&(_=qd()):(Kt=c,su="value"in Kt?Kt.value:Kt.textContent,Wn=!0)),C=No(u,O),0<C.length&&(O=new Ec(O,e,null,n,c),p.push({event:O,listeners:C}),_?O.data=_:(_=ep(n),_!==null&&(O.data=_)))),(_=iv?ov(e,n):sv(e,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(c=new Ec("onBeforeInput","beforeinput",null,n,c),p.push({event:c,listeners:u}),c.data=_))}dp(p,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function No(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ii(e,n),o!=null&&r.unshift(fi(e,o,i)),o=ii(e,t),o!=null&&r.push(fi(e,o,i))),e=e.return}return r}function bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ii(n,o),a!=null&&s.unshift(fi(n,a,l))):i||(a=ii(n,o),a!=null&&s.push(fi(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Sv=/\r\n?/g,xv=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Sv,`
`).replace(xv,"")}function Yi(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(P(425))}function Ao(){}var Zl=null,ea=null;function ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var na=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(kv)}:na;function kv(e){setTimeout(function(){throw e})}function ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),pt="__reactFiber$"+xr,di="__reactProps$"+xr,It="__reactContainer$"+xr,ra="__reactEvents$"+xr,_v="__reactListeners$"+xr,Rv="__reactHandles$"+xr;function Cn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[pt])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function Pi(e){return e=e[pt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ds(e){return e[di]||null}var ia=[],Qn=-1;function dn(e){return{current:e}}function Q(e){0>Qn||(e.current=ia[Qn],ia[Qn]=null,Qn--)}function W(e,t){Qn++,ia[Qn]=e.current,e.current=t}var cn={},Ee=dn(cn),Ie=dn(!1),Ln=cn;function ar(e,t){var n=e.type.contextTypes;if(!n)return cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ne(e){return e=e.childContextTypes,e!=null}function zo(){Q(Ie),Q(Ee)}function Fc(e,t,n){if(Ee.current!==cn)throw Error(P(168));W(Ee,t),W(Ie,n)}function hp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,c0(e)||"Unknown",i));return ee({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cn,Ln=Ee.current,W(Ee,e),W(Ie,Ie.current),!0}function bc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=hp(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,Q(Ie),Q(Ee),W(Ee,e)):Q(Ie),W(Ie,n)}var Et=null,ps=!1,sl=!1;function mp(e){Et===null?Et=[e]:Et.push(e)}function Pv(e){ps=!0,mp(e)}function pn(){if(!sl&&Et!==null){sl=!0;var e=0,t=B;try{var n=Et;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Et=null,ps=!1}catch(i){throw Et!==null&&(Et=Et.slice(e+1)),bd(nu,pn),i}finally{B=t,sl=!1}}return null}var Yn=[],Xn=0,Mo=null,$o=0,Ke=[],Ge=0,jn=null,_t=1,Rt="";function wn(e,t){Yn[Xn++]=$o,Yn[Xn++]=Mo,Mo=e,$o=t}function vp(e,t,n){Ke[Ge++]=_t,Ke[Ge++]=Rt,Ke[Ge++]=jn,jn=e;var r=_t;e=Rt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var o=32-st(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,_t=1<<32-st(t)+i|n<<i|r,Rt=o+e}else _t=1<<o|n<<i|r,Rt=e}function fu(e){e.return!==null&&(wn(e,1),vp(e,1,0))}function du(e){for(;e===Mo;)Mo=Yn[--Xn],Yn[Xn]=null,$o=Yn[--Xn],Yn[Xn]=null;for(;e===jn;)jn=Ke[--Ge],Ke[Ge]=null,Rt=Ke[--Ge],Ke[Ge]=null,_t=Ke[--Ge],Ke[Ge]=null}var be=null,Fe=null,X=!1,ot=null;function gp(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Fe=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:_t,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,Fe=null,!0):!1;default:return!1}}function oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if(X){var t=Fe;if(t){var n=t;if(!Uc(e,t)){if(oa(e))throw Error(P(418));t=Jt(n.nextSibling);var r=be;t&&Uc(e,t)?gp(r,n):(e.flags=e.flags&-4097|2,X=!1,be=e)}}else{if(oa(e))throw Error(P(418));e.flags=e.flags&-4097|2,X=!1,be=e}}}function Bc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function Xi(e){if(e!==be)return!1;if(!X)return Bc(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ta(e.type,e.memoizedProps)),t&&(t=Fe)){if(oa(e))throw yp(),Error(P(418));for(;t;)gp(e,t),t=Jt(t.nextSibling)}if(Bc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=be?Jt(e.stateNode.nextSibling):null;return!0}function yp(){for(var e=Fe;e;)e=Jt(e.nextSibling)}function ur(){Fe=be=null,X=!1}function pu(e){ot===null?ot=[e]:ot.push(e)}var Ov=zt.ReactCurrentBatchConfig;function rt(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fo=dn(null),bo=null,qn=null,hu=null;function mu(){hu=qn=bo=null}function vu(e){var t=Fo.current;Q(Fo),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){bo=e,hu=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function qe(e){var t=e._currentValue;if(hu!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(bo===null)throw Error(P(308));qn=e,bo.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var En=null;function gu(e){En===null?En=[e]:En.push(e)}function wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,gu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}function Hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var i=e.updateQueue;Ht=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var p=i.baseState;s=0,c=u=a=null,l=o;do{var h=l.lane,y=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,S=l;switch(h=t,y=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){p=g.call(y,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(y,p,h):g,h==null)break e;p=ee({},p,h);break e;case 2:Ht=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,a=p):c=c.next=y,s|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(a=p),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Nn|=s,e.lanes=s,e.memoizedState=p}}function Wc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var xp=new wd.Component().refs;function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=tn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(lt(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),i=tn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Zt(e,o,i),t!==null&&(lt(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=tn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=Zt(e,i,r),t!==null&&(lt(t,e,r,n),fo(t,e,r))}};function Vc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function Cp(e,t,n){var r=!1,i=cn,o=t.contextType;return typeof o=="object"&&o!==null?o=qe(o):(i=Ne(t)?Ln:Ee.current,r=t.contextTypes,o=(r=r!=null)?ar(e,i):cn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function ua(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xp,yu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=qe(o):(o=Ne(t)?Ln:Ee.current,i.context=ar(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(aa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hs.enqueueReplaceState(i,i.state,null),Uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===xp&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function qi(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gc(e){var t=e._init;return t(e._payload)}function Ep(e){function t(v,f){if(e){var m=v.deletions;m===null?(v.deletions=[f],v.flags|=16):m.push(f)}}function n(v,f){if(!e)return null;for(;f!==null;)t(v,f),f=f.sibling;return null}function r(v,f){for(v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function i(v,f){return v=nn(v,f),v.index=0,v.sibling=null,v}function o(v,f,m){return v.index=m,e?(m=v.alternate,m!==null?(m=m.index,m<f?(v.flags|=2,f):m):(v.flags|=2,f)):(v.flags|=1048576,f)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,f,m,w){return f===null||f.tag!==6?(f=pl(m,v.mode,w),f.return=v,f):(f=i(f,m),f.return=v,f)}function a(v,f,m,w){var x=m.type;return x===Hn?c(v,f,m.props.children,w,m.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Bt&&Gc(x)===f.type)?(w=i(f,m.props),w.ref=Ar(v,f,m),w.return=v,w):(w=yo(m.type,m.key,m.props,null,v.mode,w),w.ref=Ar(v,f,m),w.return=v,w)}function u(v,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=hl(m,v.mode,w),f.return=v,f):(f=i(f,m.children||[]),f.return=v,f)}function c(v,f,m,w,x){return f===null||f.tag!==7?(f=Pn(m,v.mode,w,x),f.return=v,f):(f=i(f,m),f.return=v,f)}function p(v,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=pl(""+f,v.mode,m),f.return=v,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bi:return m=yo(f.type,f.key,f.props,null,v.mode,m),m.ref=Ar(v,null,f),m.return=v,m;case Bn:return f=hl(f,v.mode,m),f.return=v,f;case Bt:var w=f._init;return p(v,w(f._payload),m)}if(Fr(f)||Tr(f))return f=Pn(f,v.mode,m,null),f.return=v,f;qi(v,f)}return null}function h(v,f,m,w){var x=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return x!==null?null:l(v,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:return m.key===x?a(v,f,m,w):null;case Bn:return m.key===x?u(v,f,m,w):null;case Bt:return x=m._init,h(v,f,x(m._payload),w)}if(Fr(m)||Tr(m))return x!==null?null:c(v,f,m,w,null);qi(v,m)}return null}function y(v,f,m,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,l(f,v,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case bi:return v=v.get(w.key===null?m:w.key)||null,a(f,v,w,x);case Bn:return v=v.get(w.key===null?m:w.key)||null,u(f,v,w,x);case Bt:var C=w._init;return y(v,f,m,C(w._payload),x)}if(Fr(w)||Tr(w))return v=v.get(m)||null,c(f,v,w,x,null);qi(f,w)}return null}function g(v,f,m,w){for(var x=null,C=null,_=f,O=f=0,H=null;_!==null&&O<m.length;O++){_.index>O?(H=_,_=null):H=_.sibling;var N=h(v,_,m[O],w);if(N===null){_===null&&(_=H);break}e&&_&&N.alternate===null&&t(v,_),f=o(N,f,O),C===null?x=N:C.sibling=N,C=N,_=H}if(O===m.length)return n(v,_),X&&wn(v,O),x;if(_===null){for(;O<m.length;O++)_=p(v,m[O],w),_!==null&&(f=o(_,f,O),C===null?x=_:C.sibling=_,C=_);return X&&wn(v,O),x}for(_=r(v,_);O<m.length;O++)H=y(_,v,O,m[O],w),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?O:H.key),f=o(H,f,O),C===null?x=H:C.sibling=H,C=H);return e&&_.forEach(function(ke){return t(v,ke)}),X&&wn(v,O),x}function S(v,f,m,w){var x=Tr(m);if(typeof x!="function")throw Error(P(150));if(m=x.call(m),m==null)throw Error(P(151));for(var C=x=null,_=f,O=f=0,H=null,N=m.next();_!==null&&!N.done;O++,N=m.next()){_.index>O?(H=_,_=null):H=_.sibling;var ke=h(v,_,N.value,w);if(ke===null){_===null&&(_=H);break}e&&_&&ke.alternate===null&&t(v,_),f=o(ke,f,O),C===null?x=ke:C.sibling=ke,C=ke,_=H}if(N.done)return n(v,_),X&&wn(v,O),x;if(_===null){for(;!N.done;O++,N=m.next())N=p(v,N.value,w),N!==null&&(f=o(N,f,O),C===null?x=N:C.sibling=N,C=N);return X&&wn(v,O),x}for(_=r(v,_);!N.done;O++,N=m.next())N=y(_,v,O,N.value,w),N!==null&&(e&&N.alternate!==null&&_.delete(N.key===null?O:N.key),f=o(N,f,O),C===null?x=N:C.sibling=N,C=N);return e&&_.forEach(function(mn){return t(v,mn)}),X&&wn(v,O),x}function R(v,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:e:{for(var x=m.key,C=f;C!==null;){if(C.key===x){if(x=m.type,x===Hn){if(C.tag===7){n(v,C.sibling),f=i(C,m.props.children),f.return=v,v=f;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Bt&&Gc(x)===C.type){n(v,C.sibling),f=i(C,m.props),f.ref=Ar(v,C,m),f.return=v,v=f;break e}n(v,C);break}else t(v,C);C=C.sibling}m.type===Hn?(f=Pn(m.props.children,v.mode,w,m.key),f.return=v,v=f):(w=yo(m.type,m.key,m.props,null,v.mode,w),w.ref=Ar(v,f,m),w.return=v,v=w)}return s(v);case Bn:e:{for(C=m.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(v,f.sibling),f=i(f,m.children||[]),f.return=v,v=f;break e}else{n(v,f);break}else t(v,f);f=f.sibling}f=hl(m,v.mode,w),f.return=v,v=f}return s(v);case Bt:return C=m._init,R(v,f,C(m._payload),w)}if(Fr(m))return g(v,f,m,w);if(Tr(m))return S(v,f,m,w);qi(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(v,f.sibling),f=i(f,m),f.return=v,v=f):(n(v,f),f=pl(m,v.mode,w),f.return=v,v=f),s(v)):n(v,f)}return R}var cr=Ep(!0),kp=Ep(!1),Oi={},yt=dn(Oi),pi=dn(Oi),hi=dn(Oi);function kn(e){if(e===Oi)throw Error(P(174));return e}function wu(e,t){switch(W(hi,t),W(pi,e),W(yt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}Q(yt),W(yt,t)}function fr(){Q(yt),Q(pi),Q(hi)}function _p(e){kn(hi.current);var t=kn(yt.current),n=Ul(t,e.type);t!==n&&(W(pi,e),W(yt,n))}function Su(e){pi.current===e&&(Q(yt),Q(pi))}var J=dn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ll=[];function xu(){for(var e=0;e<ll.length;e++)ll[e]._workInProgressVersionPrimary=null;ll.length=0}var po=zt.ReactCurrentDispatcher,al=zt.ReactCurrentBatchConfig,In=0,Z=null,ue=null,de=null,Ho=!1,Yr=!1,mi=0,Tv=0;function we(){throw Error(P(321))}function Cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ut(e[n],t[n]))return!1;return!0}function Eu(e,t,n,r,i,o){if(In=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Nv:Av,e=n(r,i),Yr){o=0;do{if(Yr=!1,mi=0,25<=o)throw Error(P(301));o+=1,de=ue=null,t.updateQueue=null,po.current=zv,e=n(r,i)}while(Yr)}if(po.current=Wo,t=ue!==null&&ue.next!==null,In=0,de=ue=Z=null,Ho=!1,t)throw Error(P(300));return e}function ku(){var e=mi!==0;return mi=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?Z.memoizedState=de=e:de=de.next=e,de}function Je(){if(ue===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=de===null?Z.memoizedState:de.next;if(t!==null)de=t,ue=e;else{if(e===null)throw Error(P(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},de===null?Z.memoizedState=de=e:de=de.next=e}return de}function vi(e,t){return typeof t=="function"?t(e):t}function ul(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((In&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=p,s=r):a=a.next=p,Z.lanes|=c,Nn|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,ut(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Z.lanes|=o,Nn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function cl(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ut(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Rp(){}function Pp(e,t){var n=Z,r=Je(),i=t(),o=!ut(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,_u(Lp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,gi(9,Tp.bind(null,n,r,i,t),void 0,null),me===null)throw Error(P(349));In&30||Op(n,t,i)}return i}function Op(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tp(e,t,n,r){t.value=n,t.getSnapshot=r,jp(t)&&Ip(e)}function Lp(e,t,n){return n(function(){jp(t)&&Ip(e)})}function jp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ut(e,n)}catch{return!0}}function Ip(e){var t=Nt(e,1);t!==null&&lt(t,e,1,-1)}function Qc(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=Iv.bind(null,Z,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Np(){return Je().memoizedState}function ho(e,t,n,r){var i=ft();Z.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function ms(e,t,n,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&Cu(r,s.deps)){i.memoizedState=gi(t,n,o,r);return}}Z.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function Yc(e,t){return ho(8390656,8,e,t)}function _u(e,t){return ms(2048,8,e,t)}function Ap(e,t){return ms(4,2,e,t)}function zp(e,t){return ms(4,4,e,t)}function Dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mp(e,t,n){return n=n!=null?n.concat([e]):null,ms(4,4,Dp.bind(null,t,e),n)}function Ru(){}function $p(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fp(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function bp(e,t,n){return In&21?(ut(n,t)||(n=Hd(),Z.lanes|=n,Nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Lv(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=al.transition;al.transition={};try{e(!1),t()}finally{B=n,al.transition=r}}function Up(){return Je().memoizedState}function jv(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bp(e))Hp(t,n);else if(n=wp(e,t,n,r),n!==null){var i=Pe();lt(n,e,r,i),Wp(n,t,r)}}function Iv(e,t,n){var r=tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bp(e))Hp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,ut(l,s)){var a=t.interleaved;a===null?(i.next=i,gu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=wp(e,t,i,r),n!==null&&(i=Pe(),lt(n,e,r,i),Wp(n,t,r))}}function Bp(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Hp(e,t){Yr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}var Wo={readContext:qe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Nv={readContext:qe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ho(4194308,4,Dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ho(4194308,4,e,t)},useInsertionEffect:function(e,t){return ho(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jv.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:Qc,useDebugValue:Ru,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=Qc(!1),t=e[0];return e=Lv.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Z,i=ft();if(X){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),me===null)throw Error(P(349));In&30||Op(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yc(Lp.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,Tp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ft(),t=me.identifierPrefix;if(X){var n=Rt,r=_t;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Av={readContext:qe,useCallback:$p,useContext:qe,useEffect:_u,useImperativeHandle:Mp,useInsertionEffect:Ap,useLayoutEffect:zp,useMemo:Fp,useReducer:ul,useRef:Np,useState:function(){return ul(vi)},useDebugValue:Ru,useDeferredValue:function(e){var t=Je();return bp(t,ue.memoizedState,e)},useTransition:function(){var e=ul(vi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:Pp,useId:Up,unstable_isNewReconciler:!1},zv={readContext:qe,useCallback:$p,useContext:qe,useEffect:_u,useImperativeHandle:Mp,useInsertionEffect:Ap,useLayoutEffect:zp,useMemo:Fp,useReducer:cl,useRef:Np,useState:function(){return cl(vi)},useDebugValue:Ru,useDeferredValue:function(e){var t=Je();return ue===null?t.memoizedState=e:bp(t,ue.memoizedState,e)},useTransition:function(){var e=cl(vi)[0],t=Je().memoizedState;return[e,t]},useMutableSource:Rp,useSyncExternalStore:Pp,useId:Up,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=u0(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function Vp(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,Sa=r),ca(e,t)},n}function Kp(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ca(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ca(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xv.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,Zt(n,t,1))),n.lanes|=1),e)}var Mv=zt.ReactCurrentOwner,je=!1;function Re(e,t,n,r){t.child=e===null?kp(t,null,n,r):cr(t,e.child,n,r)}function Zc(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=Eu(e,t,n,r,o,i),n=ku(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(X&&n&&fu(t),t.flags|=1,Re(e,t,r,i),t.child)}function ef(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Gp(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(s,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=nn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,At(e,t,i)}return fa(e,t,n,r,i)}function Qp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Zn,Me),Me|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Zn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,W(Zn,Me),Me|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,W(Zn,Me),Me|=r;return Re(e,t,i,n),t.child}function Yp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fa(e,t,n,r,i){var o=Ne(n)?Ln:Ee.current;return o=ar(t,o),or(t,i),n=Eu(e,t,n,r,o,i),r=ku(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(X&&r&&fu(t),t.flags|=1,Re(e,t,n,i),t.child)}function tf(e,t,n,r,i){if(Ne(n)){var o=!0;Do(t)}else o=!1;if(or(t,i),t.stateNode===null)mo(e,t),Cp(t,n,r),ua(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=Ne(n)?Ln:Ee.current,u=ar(t,u));var c=n.getDerivedStateFromProps,p=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Kc(t,s,r,u),Ht=!1;var h=t.memoizedState;s.state=h,Uo(t,r,s,i),a=t.memoizedState,l!==r||h!==a||Ie.current||Ht?(typeof c=="function"&&(aa(t,n,c,r),a=t.memoizedState),(l=Ht||Vc(t,n,l,r,h,a,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Sp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:rt(t.type,l),s.props=u,p=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Ne(n)?Ln:Ee.current,a=ar(t,a));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||h!==a)&&Kc(t,s,r,a),Ht=!1,h=t.memoizedState,s.state=h,Uo(t,r,s,i);var g=t.memoizedState;l!==p||h!==g||Ie.current||Ht?(typeof y=="function"&&(aa(t,n,y,r),g=t.memoizedState),(u=Ht||Vc(t,n,u,r,h,g,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,o,i)}function da(e,t,n,r,i,o){Yp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&bc(t,n,!1),At(e,t,o);r=t.stateNode,Mv.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,l,o)):Re(e,t,l,o),t.memoizedState=r.state,i&&bc(t,n,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Fc(e,t.context,!1),wu(e,t.containerInfo)}function nf(e,t,n,r,i){return ur(),pu(i),t.flags|=256,Re(e,t,n,r),t.child}var pa={dehydrated:null,treeContext:null,retryLane:0};function ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function qp(e,t,n){var r=t.pendingProps,i=J.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),W(J,i&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ys(s,r,0,null),e=Pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ha(n),t.memoizedState=pa,e):Pu(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $v(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=nn(l,o):(o=Pn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ha(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pa,r}return o=e.child,e=o.sibling,r=nn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pu(e,t){return t=ys({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,r){return r!==null&&pu(r),cr(t,e.child,null,n),e=Pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $v(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=fl(Error(P(422))),Ji(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ys({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,s),t.child.memoizedState=ha(s),t.memoizedState=pa,o);if(!(t.mode&1))return Ji(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=fl(o,r,void 0),Ji(e,t,s,r)}if(l=(s&e.childLanes)!==0,je||l){if(r=me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),lt(r,e,i,-1))}return Nu(),r=fl(Error(P(421))),Ji(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Fe=Jt(i.nextSibling),be=t,X=!0,ot=null,e!==null&&(Ke[Ge++]=_t,Ke[Ge++]=Rt,Ke[Ge++]=jn,_t=e.id,Rt=e.overflow,jn=t),t=Pu(t,r.children),t.flags|=4096,t)}function rf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function dl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Jp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rf(e,n,t);else if(e.tag===19)rf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(J,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),dl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}dl(t,!0,n,null,o);break;case"together":dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fv(e,t,n){switch(t.tag){case 3:Xp(t),ur();break;case 5:_p(t);break;case 1:Ne(t.type)&&Do(t);break;case 4:wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;W(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?qp(e,t,n):(W(J,J.current&1),e=At(e,t,n),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),W(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Qp(e,t,n)}return At(e,t,n)}var Zp,ma,eh,th;Zp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ma=function(){};eh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(yt.current);var o=null;switch(n){case"input":i=Ml(e,i),r=Ml(e,r),o=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":i=bl(e,i),r=bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}Bl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&V("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};th=function(e,t,n,r){n!==r&&(t.flags|=4)};function zr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bv(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ne(t.type)&&zo(),Se(t),null;case 3:return r=t.stateNode,fr(),Q(Ie),Q(Ee),xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ot!==null&&(Ea(ot),ot=null))),ma(e,t),Se(t),null;case 5:Su(t);var i=kn(hi.current);if(n=t.type,e!==null&&t.stateNode!=null)eh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Se(t),null}if(e=kn(yt.current),Xi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[pt]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<Ur.length;i++)V(Ur[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":dc(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":hc(r,o),V("invalid",r)}Bl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Yi(r.textContent,l,e),i=["children",""+l]):ni.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":Ui(r),pc(r,o,!0);break;case"textarea":Ui(r),mc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Od(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pt]=t,e[di]=r,Zp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Hl(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ur.length;i++)V(Ur[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":dc(e,r),i=Ml(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),V("invalid",e);break;case"textarea":hc(e,r),i=bl(e,r),V("invalid",e);break;default:i=r}Bl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?jd(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Td(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ri(e,a):typeof a=="number"&&ri(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ni.hasOwnProperty(o)?a!=null&&o==="onScroll"&&V("scroll",e):a!=null&&qa(e,o,a,s))}switch(n){case"input":Ui(e),pc(e,r,!1);break;case"textarea":Ui(e),mc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+un(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)th(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=kn(hi.current),kn(yt.current),Xi(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(o=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:Yi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Se(t),null;case 13:if(Q(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Fe!==null&&t.mode&1&&!(t.flags&128))yp(),ur(),t.flags|=98560,o=!1;else if(o=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(P(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[pt]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Se(t),o=!1}else ot!==null&&(Ea(ot),ot=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):Nu())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return fr(),ma(e,t),e===null&&ci(t.stateNode.containerInfo),Se(t),null;case 10:return vu(t.type._context),Se(t),null;case 17:return Ne(t.type)&&zo(),Se(t),null;case 19:if(Q(J),o=t.memoizedState,o===null)return Se(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)zr(o,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bo(e),s!==null){for(t.flags|=128,zr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>pr&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return Se(t),null}else 2*ie()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,zr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=J.current,W(J,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Uv(e,t){switch(du(t),t.tag){case 1:return Ne(t.type)&&zo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),Q(Ie),Q(Ee),xu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Su(t),null;case 13:if(Q(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(J),null;case 4:return fr(),null;case 10:return vu(t.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Zi=!1,Ce=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,L=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function va(e,t,n){try{n()}catch(r){ne(e,t,r)}}var of=!1;function Hv(e,t){if(Zl=jo,e=op(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,p=e,h=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(a=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++c===r&&(a=s),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ea={focusedElem:e,selectionRange:n},jo=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,R=g.memoizedState,v=t.stateNode,f=v.getSnapshotBeforeUpdate(t.elementType===t.type?S:rt(t.type,S),R);v.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){ne(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return g=of,of=!1,g}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&va(t,n,o)}i=i.next}while(i!==r)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nh(e){var t=e.alternate;t!==null&&(e.alternate=null,nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[di],delete t[ra],delete t[_v],delete t[Rv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rh(e){return e.tag===5||e.tag===3||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}function wa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wa(e,t,n),e=e.sibling;e!==null;)wa(e,t,n),e=e.sibling}var ve=null,it=!1;function $t(e,t,n){for(n=n.child;n!==null;)ih(e,t,n),n=n.sibling}function ih(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:Ce||Jn(n,t);case 6:var r=ve,i=it;ve=null,$t(e,t,n),ve=r,it=i,ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(it?(e=ve,n=n.stateNode,e.nodeType===8?ol(e.parentNode,n):e.nodeType===1&&ol(e,n),li(e)):ol(ve,n.stateNode));break;case 4:r=ve,i=it,ve=n.stateNode.containerInfo,it=!0,$t(e,t,n),ve=r,it=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&va(n,t,s),i=i.next}while(i!==r)}$t(e,t,n);break;case 1:if(!Ce&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,$t(e,t,n),Ce=r):$t(e,t,n);break;default:$t(e,t,n)}}function lf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bv),t.forEach(function(r){var i=Jv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ve=l.stateNode,it=!1;break e;case 3:ve=l.stateNode.containerInfo,it=!0;break e;case 4:ve=l.stateNode.containerInfo,it=!0;break e}l=l.return}if(ve===null)throw Error(P(160));ih(o,s,i),ve=null,it=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)oh(t,e),t=t.sibling}function oh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),ct(e),r&4){try{Xr(3,e,e.return),vs(3,e)}catch(S){ne(e,e.return,S)}try{Xr(5,e,e.return)}catch(S){ne(e,e.return,S)}}break;case 1:et(t,e),ct(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(et(t,e),ct(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(S){ne(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Rd(i,o),Hl(l,s);var u=Hl(l,o);for(s=0;s<a.length;s+=2){var c=a[s],p=a[s+1];c==="style"?jd(i,p):c==="dangerouslySetInnerHTML"?Td(i,p):c==="children"?ri(i,p):qa(i,c,p,u)}switch(l){case"input":$l(i,o);break;case"textarea":Pd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?tr(i,!!o.multiple,y,!1):h!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(S){ne(e,e.return,S)}}break;case 6:if(et(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(S){ne(e,e.return,S)}}break;case 3:if(et(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(S){ne(e,e.return,S)}break;case 4:et(t,e),ct(e);break;case 13:et(t,e),ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=ie())),r&4&&lf(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,et(t,e),Ce=u):et(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(p=L=c;L!==null;){switch(h=L,y=h.child,h.tag){case 0:case 11:case 14:case 15:Xr(4,h,h.return);break;case 1:Jn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){ne(r,n,S)}}break;case 5:Jn(h,h.return);break;case 22:if(h.memoizedState!==null){uf(p);continue}}y!==null?(y.return=h,L=y):uf(p)}c=c.sibling}e:for(c=null,p=e;;){if(p.tag===5){if(c===null){c=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,a=p.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Ld("display",s))}catch(S){ne(e,e.return,S)}}}else if(p.tag===6){if(c===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(S){ne(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;c===p&&(c=null),p=p.return}c===p&&(c=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:et(t,e),ct(e),r&4&&lf(e);break;case 21:break;default:et(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var o=sf(e);wa(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=sf(e);ya(e,l,s);break;default:throw Error(P(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wv(e,t,n){L=e,sh(e)}function sh(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Zi;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Zi;var u=Ce;if(Zi=s,(Ce=a)&&!u)for(L=i;L!==null;)s=L,a=s.child,s.tag===22&&s.memoizedState!==null?cf(i):a!==null?(a.return=s,L=a):cf(i);for(;o!==null;)L=o,sh(o),o=o.sibling;L=i,Zi=l,Ce=u}af(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):af(e)}}function af(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var p=c.dehydrated;p!==null&&li(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ce||t.flags&512&&ga(t)}catch(h){ne(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function uf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function cf(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ne(t,i,a)}}var o=t.return;try{ga(t)}catch(a){ne(t,o,a)}break;case 5:var s=t.return;try{ga(t)}catch(a){ne(t,s,a)}}}catch(a){ne(t,t.return,a)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Vv=Math.ceil,Vo=zt.ReactCurrentDispatcher,Ou=zt.ReactCurrentOwner,Ye=zt.ReactCurrentBatchConfig,F=0,me=null,se=null,ge=0,Me=0,Zn=dn(0),ce=0,yi=null,Nn=0,gs=0,Tu=0,qr=null,Le=null,Lu=0,pr=1/0,xt=null,Ko=!1,Sa=null,en=null,eo=!1,Gt=null,Go=0,Jr=0,xa=null,vo=-1,go=0;function Pe(){return F&6?ie():vo!==-1?vo:vo=ie()}function tn(e){return e.mode&1?F&2&&ge!==0?ge&-ge:Ov.transition!==null?(go===0&&(go=Hd()),go):(e=B,e!==0||(e=window.event,e=e===void 0?16:Xd(e.type)),e):1}function lt(e,t,n,r){if(50<Jr)throw Jr=0,xa=null,Error(P(185));_i(e,n,r),(!(F&2)||e!==me)&&(e===me&&(!(F&2)&&(gs|=n),ce===4&&Vt(e,ge)),Ae(e,r),n===1&&F===0&&!(t.mode&1)&&(pr=ie()+500,ps&&pn()))}function Ae(e,t){var n=e.callbackNode;O0(e,t);var r=Lo(e,e===me?ge:0);if(r===0)n!==null&&yc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yc(n),t===1)e.tag===0?Pv(ff.bind(null,e)):mp(ff.bind(null,e)),Ev(function(){!(F&6)&&pn()}),n=null;else{switch(Wd(r)){case 1:n=nu;break;case 4:n=Ud;break;case 16:n=To;break;case 536870912:n=Bd;break;default:n=To}n=hh(n,lh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lh(e,t){if(vo=-1,go=0,F&6)throw Error(P(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Lo(e,e===me?ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qo(e,r);else{t=r;var i=F;F|=2;var o=uh();(me!==e||ge!==t)&&(xt=null,pr=ie()+500,Rn(e,t));do try{Qv();break}catch(l){ah(e,l)}while(1);mu(),Vo.current=o,F=i,se!==null?t=0:(me=null,ge=0,t=ce)}if(t!==0){if(t===2&&(i=Ql(e),i!==0&&(r=i,t=Ca(e,i))),t===1)throw n=yi,Rn(e,0),Vt(e,r),Ae(e,ie()),n;if(t===6)Vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kv(i)&&(t=Qo(e,r),t===2&&(o=Ql(e),o!==0&&(r=o,t=Ca(e,o))),t===1))throw n=yi,Rn(e,0),Vt(e,r),Ae(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Sn(e,Le,xt);break;case 3:if(Vt(e,r),(r&130023424)===r&&(t=Lu+500-ie(),10<t)){if(Lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=na(Sn.bind(null,e,Le,xt),t);break}Sn(e,Le,xt);break;case 4:if(Vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-st(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vv(r/1960))-r,10<r){e.timeoutHandle=na(Sn.bind(null,e,Le,xt),r);break}Sn(e,Le,xt);break;case 5:Sn(e,Le,xt);break;default:throw Error(P(329))}}}return Ae(e,ie()),e.callbackNode===n?lh.bind(null,e):null}function Ca(e,t){var n=qr;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Qo(e,t),e!==2&&(t=Le,Le=n,t!==null&&Ea(t)),e}function Ea(e){Le===null?Le=e:Le.push.apply(Le,e)}function Kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vt(e,t){for(t&=~Tu,t&=~gs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-st(t),r=1<<n;e[n]=-1,t&=~r}}function ff(e){if(F&6)throw Error(P(327));sr();var t=Lo(e,0);if(!(t&1))return Ae(e,ie()),null;var n=Qo(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=Ca(e,r))}if(n===1)throw n=yi,Rn(e,0),Vt(e,t),Ae(e,ie()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,Le,xt),Ae(e,ie()),null}function ju(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(pr=ie()+500,ps&&pn())}}function An(e){Gt!==null&&Gt.tag===0&&!(F&6)&&sr();var t=F;F|=1;var n=Ye.transition,r=B;try{if(Ye.transition=null,B=1,e)return e()}finally{B=r,Ye.transition=n,F=t,!(F&6)&&pn()}}function Iu(){Me=Zn.current,Q(Zn)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cv(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zo();break;case 3:fr(),Q(Ie),Q(Ee),xu();break;case 5:Su(r);break;case 4:fr();break;case 13:Q(J);break;case 19:Q(J);break;case 10:vu(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(me=e,se=e=nn(e.current,null),ge=Me=t,ce=0,yi=null,Tu=gs=Nn=0,Le=qr=null,En!==null){for(t=0;t<En.length;t++)if(n=En[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}En=null}return e}function ah(e,t){do{var n=se;try{if(mu(),po.current=Wo,Ho){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(In=0,de=ue=Z=null,Yr=!1,mi=0,Ou.current=null,n===null||n.return===null){ce=1,yi=t,se=null;break}e:{var o=e,s=n.return,l=n,a=t;if(t=ge,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,p=c.tag;if(!(c.mode&1)&&(p===0||p===11||p===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=qc(s);if(y!==null){y.flags&=-257,Jc(y,s,l,o,t),y.mode&1&&Xc(o,u,t),t=y,a=u;var g=t.updateQueue;if(g===null){var S=new Set;S.add(a),t.updateQueue=S}else g.add(a);break e}else{if(!(t&1)){Xc(o,u,t),Nu();break e}a=Error(P(426))}}else if(X&&l.mode&1){var R=qc(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Jc(R,s,l,o,t),pu(dr(a,l));break e}}o=a=dr(a,l),ce!==4&&(ce=2),qr===null?qr=[o]:qr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Vp(o,a,t);Hc(o,v);break e;case 1:l=a;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Kp(o,l,t);Hc(o,w);break e}}o=o.return}while(o!==null)}fh(n)}catch(x){t=x,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function uh(){var e=Vo.current;return Vo.current=Wo,e===null?Wo:e}function Nu(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Nn&268435455)&&!(gs&268435455)||Vt(me,ge)}function Qo(e,t){var n=F;F|=2;var r=uh();(me!==e||ge!==t)&&(xt=null,Rn(e,t));do try{Gv();break}catch(i){ah(e,i)}while(1);if(mu(),F=n,Vo.current=r,se!==null)throw Error(P(261));return me=null,ge=0,ce}function Gv(){for(;se!==null;)ch(se)}function Qv(){for(;se!==null&&!w0();)ch(se)}function ch(e){var t=ph(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?fh(e):se=t,Ou.current=null}function fh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Uv(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=bv(n,t,Me),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function Sn(e,t,n){var r=B,i=Ye.transition;try{Ye.transition=null,B=1,Yv(e,t,n,r)}finally{Ye.transition=i,B=r}return null}function Yv(e,t,n,r){do sr();while(Gt!==null);if(F&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(T0(e,o),e===me&&(se=me=null,ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,hh(To,function(){return sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ye.transition,Ye.transition=null;var s=B;B=1;var l=F;F|=4,Ou.current=null,Hv(e,n),oh(n,e),mv(ea),jo=!!Zl,ea=Zl=null,e.current=n,Wv(n),S0(),F=l,B=s,Ye.transition=o}else e.current=n;if(eo&&(eo=!1,Gt=e,Go=i),o=e.pendingLanes,o===0&&(en=null),E0(n.stateNode),Ae(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=Sa,Sa=null,e;return Go&1&&e.tag!==0&&sr(),o=e.pendingLanes,o&1?e===xa?Jr++:(Jr=0,xa=e):Jr=0,pn(),null}function sr(){if(Gt!==null){var e=Wd(Go),t=Ye.transition,n=B;try{if(Ye.transition=null,B=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Go=0,F&6)throw Error(P(331));var i=F;for(F|=4,L=e.current;L!==null;){var o=L,s=o.child;if(L.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Xr(8,c,o)}var p=c.child;if(p!==null)p.return=c,L=p;else for(;L!==null;){c=L;var h=c.sibling,y=c.return;if(nh(c),c===u){L=null;break}if(h!==null){h.return=y,L=h;break}L=y}}}var g=o.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var R=S.sibling;S.sibling=null,S=R}while(S!==null)}}L=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,L=s;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,L=v;break e}L=o.return}}var f=e.current;for(L=f;L!==null;){s=L;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,L=m;else e:for(s=f;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vs(9,l)}}catch(x){ne(l,l.return,x)}if(l===s){L=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,L=w;break e}L=l.return}}if(F=i,pn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(as,e)}catch{}r=!0}return r}finally{B=n,Ye.transition=t}}return!1}function df(e,t,n){t=dr(n,t),t=Vp(e,t,1),e=Zt(e,t,1),t=Pe(),e!==null&&(_i(e,1,t),Ae(e,t))}function ne(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=dr(n,e),e=Kp(t,e,1),t=Zt(t,e,1),e=Pe(),t!==null&&(_i(t,1,e),Ae(t,e));break}}t=t.return}}function Xv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ge&n)===n&&(ce===4||ce===3&&(ge&130023424)===ge&&500>ie()-Lu?Rn(e,0):Tu|=n),Ae(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):t=1);var n=Pe();e=Nt(e,t),e!==null&&(_i(e,t,n),Ae(e,n))}function qv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dh(e,n)}function Jv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),dh(e,n)}var ph;ph=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Fv(e,t,n);je=!!(e.flags&131072)}else je=!1,X&&t.flags&1048576&&vp(t,$o,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mo(e,t),e=t.pendingProps;var i=ar(t,Ee.current);or(t,n),i=Eu(null,t,r,e,i,n);var o=ku();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(o=!0,Do(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yu(t),i.updater=hs,t.stateNode=i,i._reactInternals=t,ua(t,r,e,n),t=da(null,t,r,!0,o,n)):(t.tag=0,X&&o&&fu(t),Re(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=eg(r),e=rt(r,e),i){case 0:t=fa(null,t,r,e,n);break e;case 1:t=tf(null,t,r,e,n);break e;case 11:t=Zc(null,t,r,e,n);break e;case 14:t=ef(null,t,r,rt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),fa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),tf(e,t,r,i,n);case 3:e:{if(Xp(t),e===null)throw Error(P(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Sp(e,t),Uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error(P(423)),t),t=nf(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(P(424)),t),t=nf(e,t,r,n,i);break e}else for(Fe=Jt(t.stateNode.containerInfo.firstChild),be=t,X=!0,ot=null,n=kp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=At(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return _p(t),e===null&&sa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ta(r,i)?s=null:o!==null&&ta(r,o)&&(t.flags|=32),Yp(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&sa(t),null;case 13:return qp(e,t,n);case 4:return wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),Zc(e,t,r,i,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,W(Fo,r._currentValue),r._currentValue=s,o!==null)if(ut(o.value,s)){if(o.children===i.children&&!Ie.current){t=At(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),la(o.return,n,t),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),la(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=qe(i),r=r(i),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,i=rt(r,t.pendingProps),i=rt(r.type,i),ef(e,t,r,i,n);case 15:return Gp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rt(r,i),mo(e,t),t.tag=1,Ne(r)?(e=!0,Do(t)):e=!1,or(t,n),Cp(t,r,i),ua(t,r,i,n),da(null,t,r,!0,e,n);case 19:return Jp(e,t,n);case 22:return Qp(e,t,n)}throw Error(P(156,t.tag))};function hh(e,t){return bd(e,t)}function Zv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new Zv(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eg(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===eu)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Hn:return Pn(n.children,i,o,t);case Ja:s=8,i|=8;break;case Nl:return e=Qe(12,n,t,i|2),e.elementType=Nl,e.lanes=o,e;case Al:return e=Qe(13,n,t,i),e.elementType=Al,e.lanes=o,e;case zl:return e=Qe(19,n,t,i),e.elementType=zl,e.lanes=o,e;case Ed:return ys(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xd:s=10;break e;case Cd:s=9;break e;case Za:s=11;break e;case eu:s=14;break e;case Bt:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function ys(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Ed,e.lanes=n,e.stateNode={isHidden:!1},e}function pl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function hl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zu(e,t,n,r,i,o,s,l,a){return e=new tg(e,t,n,l,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function ng(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mh(e){if(!e)return cn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ne(n))return hp(e,n,t)}return t}function vh(e,t,n,r,i,o,s,l,a){return e=zu(n,r,!0,e,i,o,s,l,a),e.context=mh(null),n=e.current,r=Pe(),i=tn(n),o=Ot(r,i),o.callback=t??null,Zt(n,o,i),e.current.lanes=i,_i(e,i,r),Ae(e,r),e}function ws(e,t,n,r){var i=t.current,o=Pe(),s=tn(i);return n=mh(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Zt(i,t,s),e!==null&&(lt(e,i,s,o),fo(e,i,s)),s}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Du(e,t){pf(e,t),(e=e.alternate)&&pf(e,t)}function rg(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}Ss.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));ws(e,t,null,null)};Ss.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){ws(null,e,null,null)}),t[It]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&Yd(e)}};function $u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hf(){}function ig(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Yo(s);o.call(u)}}var s=vh(t,r,e,0,null,!1,!1,"",hf);return e._reactRootContainer=s,e[It]=s.current,ci(e.nodeType===8?e.parentNode:e),An(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yo(a);l.call(u)}}var a=zu(e,0,!1,null,null,!1,!1,"",hf);return e._reactRootContainer=a,e[It]=a.current,ci(e.nodeType===8?e.parentNode:e),An(function(){ws(t,a,n,r)}),a}function Cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Yo(s);l.call(a)}}ws(t,s,e,i)}else s=ig(n,t,e,i,r);return Yo(s)}Vd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=br(t.pendingLanes);n!==0&&(ru(t,n|1),Ae(t,ie()),!(F&6)&&(pr=ie()+500,pn()))}break;case 13:An(function(){var r=Nt(e,1);if(r!==null){var i=Pe();lt(r,e,1,i)}}),Du(e,1)}};iu=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Pe();lt(t,e,134217728,n)}Du(e,134217728)}};Kd=function(e){if(e.tag===13){var t=tn(e),n=Nt(e,t);if(n!==null){var r=Pe();lt(n,e,t,r)}Du(e,t)}};Gd=function(){return B};Qd=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Vl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ds(r);if(!i)throw Error(P(90));_d(r),$l(r,i)}}}break;case"textarea":Pd(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};Ad=ju;zd=An;var og={usingClientEntryPoint:!1,Events:[Pi,Gn,ds,Id,Nd,ju]},Dr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},sg={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$d(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||rg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{as=to.inject(sg),gt=to}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=og;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(t))throw Error(P(200));return ng(e,t,null,n)};Be.createRoot=function(e,t){if(!$u(e))throw Error(P(299));var n=!1,r="",i=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=zu(e,1,!1,null,null,n,!1,r,i),e[It]=t.current,ci(e.nodeType===8?e.parentNode:e),new Mu(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=$d(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return An(e)};Be.hydrate=function(e,t,n){if(!xs(t))throw Error(P(200));return Cs(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!$u(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vh(t,null,e,1,n??null,i,!1,o,s),e[It]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ss(t)};Be.render=function(e,t,n){if(!xs(t))throw Error(P(200));return Cs(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!xs(e))throw Error(P(40));return e._reactRootContainer?(An(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1};Be.unstable_batchedUpdates=ju;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xs(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Cs(e,t,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";function yh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh)}catch(e){console.error(e)}}yh(),vd.exports=Be;var lg=vd.exports,mf=lg;jl.createRoot=mf.createRoot,jl.hydrateRoot=mf.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}var Qt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Qt||(Qt={}));const vf="popstate";function ag(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return ka("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xo(i)}return cg(t,n,null,e)}function le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ug(){return Math.random().toString(36).substr(2,8)}function gf(e,t){return{usr:e.state,key:e.key,idx:t}}function ka(e,t,n,r){return n===void 0&&(n=null),wi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||ug()})}function Xo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function cg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Qt.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(wi({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function p(){l=Qt.Pop;let R=c(),v=R==null?null:R-u;u=R,a&&a({action:l,location:S.location,delta:v})}function h(R,v){l=Qt.Push;let f=ka(S.location,R,v);n&&n(f,R),u=c()+1;let m=gf(f,u),w=S.createHref(f);try{s.pushState(m,"",w)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(w)}o&&a&&a({action:l,location:S.location,delta:1})}function y(R,v){l=Qt.Replace;let f=ka(S.location,R,v);n&&n(f,R),u=c();let m=gf(f,u),w=S.createHref(f);s.replaceState(m,"",w),o&&a&&a({action:l,location:S.location,delta:0})}function g(R){let v=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof R=="string"?R:Xo(R);return le(v,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,v)}let S={get action(){return l},get location(){return e(i,s)},listen(R){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(vf,p),a=R,()=>{i.removeEventListener(vf,p),a=null}},createHref(R){return t(i,R)},createURL:g,encodeLocation(R){let v=g(R);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:y,go(R){return s.go(R)}};return S}var yf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yf||(yf={}));function fg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Cr(t):t,i=bu(r.pathname||"/",n);if(i==null)return null;let o=wh(e);dg(o);let s=null;for(let l=0;s==null&&l<o.length;++l)s=xg(o[l],kg(i));return s}function wh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(le(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=rn([r,a.relativePath]),c=n.concat(a);o.children&&o.children.length>0&&(le(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wh(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:wg(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of Sh(o.path))i(o,s,a)}),t}function Sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Sh(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function dg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pg=/^:\w+$/,hg=3,mg=2,vg=1,gg=10,yg=-2,wf=e=>e==="*";function wg(e,t){let n=e.split("/"),r=n.length;return n.some(wf)&&(r+=yg),t&&(r+=mg),n.filter(i=>!wf(i)).reduce((i,o)=>i+(pg.test(o)?hg:o===""?vg:gg),r)}function Sg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Cg({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let p=l.route;o.push({params:r,pathname:rn([i,c.pathname]),pathnameBase:Og(rn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=rn([i,c.pathnameBase]))}return o}function Cg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Eg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,p)=>{if(c==="*"){let h=l[p]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=_g(l[p]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Eg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function kg(e){try{return decodeURI(e)}catch(t){return Fu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _g(e,t){try{return decodeURIComponent(e)}catch(n){return Fu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function bu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Rg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:Pg(n,t):t,search:Tg(r),hash:Lg(i)}}function Pg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ml(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ch(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=wi({},e),le(!i.pathname||!i.pathname.includes("?"),ml("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),ml("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),ml("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(r||s==null)l=n;else{let p=t.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}l=p>=0?t[p]:"/"}let a=Rg(i,l),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const rn=e=>e.join("/").replace(/\/\/+/g,"/"),Og=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function jg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Eh=["post","put","patch","delete"];new Set(Eh);const Ig=["get",...Eh];new Set(Ig);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qo.apply(this,arguments)}const Uu=E.createContext(null),Ng=E.createContext(null),Er=E.createContext(null),Es=E.createContext(null),hn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),kh=E.createContext(null);function Ag(e,t){let{relative:n}=t===void 0?{}:t;Ti()||le(!1);let{basename:r,navigator:i}=E.useContext(Er),{hash:o,pathname:s,search:l}=Ph(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:rn([r,s])),i.createHref({pathname:a,search:l,hash:o})}function Ti(){return E.useContext(Es)!=null}function ks(){return Ti()||le(!1),E.useContext(Es).location}function _h(e){E.useContext(Er).static||E.useLayoutEffect(e)}function kr(){let{isDataRoute:e}=E.useContext(hn);return e?Gg():zg()}function zg(){Ti()||le(!1);let e=E.useContext(Uu),{basename:t,navigator:n}=E.useContext(Er),{matches:r}=E.useContext(hn),{pathname:i}=ks(),o=JSON.stringify(xh(r).map(a=>a.pathnameBase)),s=E.useRef(!1);return _h(()=>{s.current=!0}),E.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){n.go(a);return}let c=Ch(a,JSON.parse(o),i,u.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:rn([t,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[t,n,o,i,e])}function Rh(){let{matches:e}=E.useContext(hn),t=e[e.length-1];return t?t.params:{}}function Ph(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=E.useContext(hn),{pathname:i}=ks(),o=JSON.stringify(xh(r).map(s=>s.pathnameBase));return E.useMemo(()=>Ch(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function Dg(e,t){return Mg(e,t)}function Mg(e,t,n){Ti()||le(!1);let{navigator:r}=E.useContext(Er),{matches:i}=E.useContext(hn),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let a=ks(),u;if(t){var c;let S=typeof t=="string"?Cr(t):t;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||le(!1),u=S}else u=a;let p=u.pathname||"/",h=l==="/"?p:p.slice(l.length)||"/",y=fg(e,{pathname:h}),g=Bg(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:rn([l,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:rn([l,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n);return t&&g?E.createElement(Es.Provider,{value:{location:qo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Qt.Pop}},g):g}function $g(){let e=Kg(),t=jg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,o)}const Fg=E.createElement($g,null);class bg extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?E.createElement(hn.Provider,{value:this.props.routeContext},E.createElement(kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ug(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Uu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(hn.Provider,{value:t},r)}function Bg(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(r=n)==null?void 0:r.errors;if(s!=null){let l=o.findIndex(a=>a.route.id&&(s==null?void 0:s[a.route.id]));l>=0||le(!1),o=o.slice(0,Math.min(o.length,l+1))}return o.reduceRight((l,a,u)=>{let c=a.route.id?s==null?void 0:s[a.route.id]:null,p=null;n&&(p=a.route.errorElement||Fg);let h=t.concat(o.slice(0,u+1)),y=()=>{let g;return c?g=p:a.route.Component?g=E.createElement(a.route.Component,null):a.route.element?g=a.route.element:g=l,E.createElement(Ug,{match:a,routeContext:{outlet:l,matches:h,isDataRoute:n!=null},children:g})};return n&&(a.route.ErrorBoundary||a.route.errorElement||u===0)?E.createElement(bg,{location:n.location,revalidation:n.revalidation,component:p,error:c,children:y(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):y()},null)}var Oh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Oh||{}),Jo=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jo||{});function Hg(e){let t=E.useContext(Uu);return t||le(!1),t}function Wg(e){let t=E.useContext(Ng);return t||le(!1),t}function Vg(e){let t=E.useContext(hn);return t||le(!1),t}function Th(e){let t=Vg(),n=t.matches[t.matches.length-1];return n.route.id||le(!1),n.route.id}function Kg(){var e;let t=E.useContext(kh),n=Wg(Jo.UseRouteError),r=Th(Jo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Gg(){let{router:e}=Hg(Oh.UseNavigateStable),t=Th(Jo.UseNavigateStable),n=E.useRef(!1);return _h(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qo({fromRouteId:t},o)))},[e,t])}function Pt(e){le(!1)}function Qg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Qt.Pop,navigator:o,static:s=!1}=e;Ti()&&le(!1);let l=t.replace(/^\/*/,"/"),a=E.useMemo(()=>({basename:l,navigator:o,static:s}),[l,o,s]);typeof r=="string"&&(r=Cr(r));let{pathname:u="/",search:c="",hash:p="",state:h=null,key:y="default"}=r,g=E.useMemo(()=>{let S=bu(u,l);return S==null?null:{location:{pathname:S,search:c,hash:p,state:h,key:y},navigationType:i}},[l,u,c,p,h,y,i]);return g==null?null:E.createElement(Er.Provider,{value:a},E.createElement(Es.Provider,{children:n,value:g}))}function Bu(e){let{children:t,location:n}=e;return Dg(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==Pt&&le(!1),!r.props.index||!r.props.children||le(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_a(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}function Yg(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Xg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qg(e,t){return e.button===0&&(!t||t==="_self")&&!Xg(e)}const Jg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Zg="startTransition",Sf=qm[Zg];function ey(e){let{basename:t,children:n,future:r,window:i}=e,o=E.useRef();o.current==null&&(o.current=ag({window:i,v5Compat:!0}));let s=o.current,[l,a]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=E.useCallback(p=>{u&&Sf?Sf(()=>a(p)):a(p)},[a,u]);return E.useLayoutEffect(()=>s.listen(c),[s,c]),E.createElement(Qg,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s})}const ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,on=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:c}=t,p=Yg(t,Jg),{basename:h}=E.useContext(Er),y,g=!1;if(typeof u=="string"&&ny.test(u)&&(y=u,ty))try{let f=new URL(window.location.href),m=u.startsWith("//")?new URL(f.protocol+u):new URL(u),w=bu(m.pathname,h);m.origin===f.origin&&w!=null?u=w+m.search+m.hash:g=!0}catch{}let S=Ag(u,{relative:i}),R=ry(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:i});function v(f){r&&r(f),f.defaultPrevented||R(f)}return E.createElement("a",Ra({},p,{href:y||S,onClick:g||o?r:v,ref:n,target:a}))});var xf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(xf||(xf={}));var Cf;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cf||(Cf={}));function ry(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,l=kr(),a=ks(),u=Ph(e,{relative:s});return E.useCallback(c=>{if(qg(c,n)){c.preventDefault();let p=r!==void 0?r:Xo(a)===Xo(u);l(e,{replace:p,state:i,preventScrollReset:o,relative:s})}},[a,l,u,r,i,n,e,o,s])}function Lh(e,t){return function(){return e.apply(t,arguments)}}const{toString:iy}=Object.prototype,{getPrototypeOf:Hu}=Object,_s=(e=>t=>{const n=iy.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),wt=e=>(e=e.toLowerCase(),t=>_s(t)===e),Rs=e=>t=>typeof t===e,{isArray:_r}=Array,Si=Rs("undefined");function oy(e){return e!==null&&!Si(e)&&e.constructor!==null&&!Si(e.constructor)&&Xe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const jh=wt("ArrayBuffer");function sy(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&jh(e.buffer),t}const ly=Rs("string"),Xe=Rs("function"),Ih=Rs("number"),Ps=e=>e!==null&&typeof e=="object",ay=e=>e===!0||e===!1,wo=e=>{if(_s(e)!=="object")return!1;const t=Hu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},uy=wt("Date"),cy=wt("File"),fy=wt("Blob"),dy=wt("FileList"),py=e=>Ps(e)&&Xe(e.pipe),hy=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Xe(e.append)&&((t=_s(e))==="formdata"||t==="object"&&Xe(e.toString)&&e.toString()==="[object FormData]"))},my=wt("URLSearchParams"),vy=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Li(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),_r(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(r=0;r<s;r++)l=o[r],t.call(null,e[l],l,e)}}function Nh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Ah=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),zh=e=>!Si(e)&&e!==Ah;function Pa(){const{caseless:e}=zh(this)&&this||{},t={},n=(r,i)=>{const o=e&&Nh(t,i)||i;wo(t[o])&&wo(r)?t[o]=Pa(t[o],r):wo(r)?t[o]=Pa({},r):_r(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Li(arguments[r],n);return t}const gy=(e,t,n,{allOwnKeys:r}={})=>(Li(t,(i,o)=>{n&&Xe(i)?e[o]=Lh(i,n):e[o]=i},{allOwnKeys:r}),e),yy=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),wy=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Sy=(e,t,n,r)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&Hu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},xy=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Cy=e=>{if(!e)return null;if(_r(e))return e;let t=e.length;if(!Ih(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ey=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hu(Uint8Array)),ky=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},_y=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ry=wt("HTMLFormElement"),Py=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ef=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Oy=wt("RegExp"),Dh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Li(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},Ty=e=>{Dh(e,(t,n)=>{if(Xe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Xe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ly=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return _r(e)?r(e):r(String(e).split(t)),n},jy=()=>{},Iy=(e,t)=>(e=+e,Number.isFinite(e)?e:t),vl="abcdefghijklmnopqrstuvwxyz",kf="0123456789",Mh={DIGIT:kf,ALPHA:vl,ALPHA_DIGIT:vl+vl.toUpperCase()+kf},Ny=(e=16,t=Mh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ay(e){return!!(e&&Xe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const zy=e=>{const t=new Array(10),n=(r,i)=>{if(Ps(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=_r(r)?[]:{};return Li(r,(s,l)=>{const a=n(s,i+1);!Si(a)&&(o[l]=a)}),t[i]=void 0,o}}return r};return n(e,0)},Dy=wt("AsyncFunction"),My=e=>e&&(Ps(e)||Xe(e))&&Xe(e.then)&&Xe(e.catch),k={isArray:_r,isArrayBuffer:jh,isBuffer:oy,isFormData:hy,isArrayBufferView:sy,isString:ly,isNumber:Ih,isBoolean:ay,isObject:Ps,isPlainObject:wo,isUndefined:Si,isDate:uy,isFile:cy,isBlob:fy,isRegExp:Oy,isFunction:Xe,isStream:py,isURLSearchParams:my,isTypedArray:Ey,isFileList:dy,forEach:Li,merge:Pa,extend:gy,trim:vy,stripBOM:yy,inherits:wy,toFlatObject:Sy,kindOf:_s,kindOfTest:wt,endsWith:xy,toArray:Cy,forEachEntry:ky,matchAll:_y,isHTMLForm:Ry,hasOwnProperty:Ef,hasOwnProp:Ef,reduceDescriptors:Dh,freezeMethods:Ty,toObjectSet:Ly,toCamelCase:Py,noop:jy,toFiniteNumber:Iy,findKey:Nh,global:Ah,isContextDefined:zh,ALPHABET:Mh,generateString:Ny,isSpecCompliantForm:Ay,toJSONObject:zy,isAsyncFn:Dy,isThenable:My};function $(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}k.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const $h=$.prototype,Fh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Fh[e]={value:e}});Object.defineProperties($,Fh);Object.defineProperty($h,"isAxiosError",{value:!0});$.from=(e,t,n,r,i,o)=>{const s=Object.create($h);return k.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),$.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const $y=null;function Oa(e){return k.isPlainObject(e)||k.isArray(e)}function bh(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function _f(e,t,n){return e?e.concat(t).map(function(i,o){return i=bh(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function Fy(e){return k.isArray(e)&&!e.some(Oa)}const by=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Os(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,R){return!k.isUndefined(R[S])});const r=n.metaTokens,i=n.visitor||c,o=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(!a&&k.isBlob(g))throw new $("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?a&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,S,R){let v=g;if(g&&!R&&typeof g=="object"){if(k.endsWith(S,"{}"))S=r?S:S.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&Fy(g)||(k.isFileList(g)||k.endsWith(S,"[]"))&&(v=k.toArray(g)))return S=bh(S),v.forEach(function(m,w){!(k.isUndefined(m)||m===null)&&t.append(s===!0?_f([S],w,o):s===null?S:S+"[]",u(m))}),!1}return Oa(g)?!0:(t.append(_f(R,S,o),u(g)),!1)}const p=[],h=Object.assign(by,{defaultVisitor:c,convertValue:u,isVisitable:Oa});function y(g,S){if(!k.isUndefined(g)){if(p.indexOf(g)!==-1)throw Error("Circular reference detected in "+S.join("."));p.push(g),k.forEach(g,function(v,f){(!(k.isUndefined(v)||v===null)&&i.call(t,v,k.isString(f)?f.trim():f,S,h))===!0&&y(v,S?S.concat(f):[f])}),p.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Rf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Wu(e,t){this._pairs=[],e&&Os(e,this,t)}const Uh=Wu.prototype;Uh.append=function(t,n){this._pairs.push([t,n])};Uh.toString=function(t){const n=t?function(r){return t.call(this,r,Rf)}:Rf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Uy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bh(e,t,n){if(!t)return e;const r=n&&n.encode||Uy,i=n&&n.serialize;let o;if(i?o=i(t,n):o=k.isURLSearchParams(t)?t.toString():new Wu(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class By{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Pf=By,Hh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Hy=typeof URLSearchParams<"u"?URLSearchParams:Wu,Wy=typeof FormData<"u"?FormData:null,Vy=typeof Blob<"u"?Blob:null,Ky=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Gy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ht={isBrowser:!0,classes:{URLSearchParams:Hy,FormData:Wy,Blob:Vy},isStandardBrowserEnv:Ky,isStandardBrowserWebWorkerEnv:Gy,protocols:["http","https","file","blob","url","data"]};function Qy(e,t){return Os(e,new ht.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return ht.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Yy(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Xy(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function Wh(e){function t(n,r,i,o){let s=n[o++];const l=Number.isFinite(+s),a=o>=n.length;return s=!s&&k.isArray(i)?i.length:s,a?(k.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!l):((!i[s]||!k.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&k.isArray(i[s])&&(i[s]=Xy(i[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,i)=>{t(Yy(r),i,n,0)}),n}return null}function qy(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Vu={transitional:Hh,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=k.isObject(t);if(o&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return i&&i?JSON.stringify(Wh(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qy(t,this.formSerializer).toString();if((l=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return Os(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),qy(t)):t}],transformResponse:[function(t){const n=this.transitional||Vu.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&k.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?$.from(l,$.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Vu.headers[e]={}});const Ku=Vu,Jy=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Zy=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Jy[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Of=Symbol("internals");function Mr(e){return e&&String(e).trim().toLowerCase()}function So(e){return e===!1||e==null?e:k.isArray(e)?e.map(So):String(e)}function e1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const t1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function gl(e,t,n,r,i){if(k.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function n1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function r1(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class Ts{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(l,a,u){const c=Mr(a);if(!c)throw new Error("header name must be a non-empty string");const p=k.findKey(i,c);(!p||i[p]===void 0||u===!0||u===void 0&&i[p]!==!1)&&(i[p||a]=So(l))}const s=(l,a)=>k.forEach(l,(u,c)=>o(u,c,a));return k.isPlainObject(t)||t instanceof this.constructor?s(t,n):k.isString(t)&&(t=t.trim())&&!t1(t)?s(Zy(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Mr(t),t){const r=k.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return e1(i);if(k.isFunction(n))return n.call(this,i,r);if(k.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Mr(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||gl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Mr(s),s){const l=k.findKey(r,s);l&&(!n||gl(r,r[l],l,n))&&(delete r[l],i=!0)}}return k.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||gl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return k.forEach(this,(i,o)=>{const s=k.findKey(r,o);if(s){n[s]=So(i),delete n[o];return}const l=t?n1(o):String(o).trim();l!==o&&delete n[o],n[l]=So(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Of]=this[Of]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=Mr(s);r[l]||(r1(i,s),r[l]=!0)}return k.isArray(t)?t.forEach(o):o(t),this}}Ts.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Ts.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Ts);const Tt=Ts;function yl(e,t){const n=this||Ku,r=t||n,i=Tt.from(r.headers);let o=r.data;return k.forEach(e,function(l){o=l.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function Vh(e){return!!(e&&e.__CANCEL__)}function ji(e,t,n){$.call(this,e??"canceled",$.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(ji,$,{__CANCEL__:!0});function i1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $("Request failed with status code "+n.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const o1=ht.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,l){const a=[];a.push(n+"="+encodeURIComponent(r)),k.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),k.isString(o)&&a.push("path="+o),k.isString(s)&&a.push("domain="+s),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function s1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function l1(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Kh(e,t){return e&&!s1(t)?l1(e,t):t}const a1=ht.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const l=k.isString(s)?i(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function u1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function c1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[o];s||(s=u),n[i]=a,r[i]=u;let p=o,h=0;for(;p!==i;)h+=n[p++],p=p%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const y=c&&u-c;return y?Math.round(h*1e3/y):void 0}}function Tf(e,t){let n=0;const r=c1(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-n,a=r(l),u=o<=s;n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:a||void 0,estimated:a&&s&&u?(s-o)/a:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const f1=typeof XMLHttpRequest<"u",d1=f1&&function(e){return new Promise(function(n,r){let i=e.data;const o=Tt.from(e.headers).normalize(),s=e.responseType;let l;function a(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let u;k.isFormData(i)&&(ht.isStandardBrowserEnv||ht.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?k.isString(u=o.getContentType())&&o.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",S=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+S))}const p=Kh(e.baseURL,e.url);c.open(e.method.toUpperCase(),Bh(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const g=Tt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),R={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};i1(function(f){n(f),a()},function(f){r(f),a()},R),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new $("Request aborted",$.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new $("Network Error",$.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const R=e.transitional||Hh;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),r(new $(S,R.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,c)),c=null},ht.isStandardBrowserEnv){const g=(e.withCredentials||a1(p))&&e.xsrfCookieName&&o1.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}i===void 0&&o.setContentType(null),"setRequestHeader"in c&&k.forEach(o.toJSON(),function(S,R){c.setRequestHeader(R,S)}),k.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Tf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Tf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=g=>{c&&(r(!g||g.type?new ji(null,e,c):g),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=u1(p);if(y&&ht.protocols.indexOf(y)===-1){r(new $("Unsupported protocol "+y+":",$.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Ta={http:$y,xhr:d1};k.forEach(Ta,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Lf=e=>`- ${e}`,p1=e=>k.isFunction(e)||e===null||e===!1,Gh={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!p1(n)&&(r=Ta[(s=String(n)).toLowerCase()],r===void 0))throw new $(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(Lf).join(`
`):" "+Lf(o[0]):"as no adapter specified";throw new $("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Ta};function wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ji(null,e)}function jf(e){return wl(e),e.headers=Tt.from(e.headers),e.data=yl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Gh.getAdapter(e.adapter||Ku.adapter)(e).then(function(r){return wl(e),r.data=yl.call(e,e.transformResponse,r),r.headers=Tt.from(r.headers),r},function(r){return Vh(r)||(wl(e),r&&r.response&&(r.response.data=yl.call(e,e.transformResponse,r.response),r.response.headers=Tt.from(r.response.headers))),Promise.reject(r)})}const If=e=>e instanceof Tt?e.toJSON():e;function hr(e,t){t=t||{};const n={};function r(u,c,p){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:p},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function i(u,c,p){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u,p)}else return r(u,c,p)}function o(u,c){if(!k.isUndefined(c))return r(void 0,c)}function s(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,p){if(p in t)return r(u,c);if(p in e)return r(void 0,u)}const a={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>i(If(u),If(c),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=a[c]||i,h=p(e[c],t[c],c);k.isUndefined(h)&&p!==l||(n[c]=h)}),n}const Qh="1.5.1",Gu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Gu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Nf={};Gu.transitional=function(t,n,r){function i(o,s){return"[Axios v"+Qh+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,l)=>{if(t===!1)throw new $(i(s," has been removed"+(n?" in "+n:"")),$.ERR_DEPRECATED);return n&&!Nf[s]&&(Nf[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,l):!0}};function h1(e,t,n){if(typeof e!="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const l=e[o],a=l===void 0||s(l,o,e);if(a!==!0)throw new $("option "+o+" must be "+a,$.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $("Unknown option "+o,$.ERR_BAD_OPTION)}}const La={assertOptions:h1,validators:Gu},Ft=La.validators;class Zo{constructor(t){this.defaults=t,this.interceptors={request:new Pf,response:new Pf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=hr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&La.assertOptions(r,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),i!=null&&(k.isFunction(i)?n.paramsSerializer={serialize:i}:La.assertOptions(i,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&k.merge(o.common,o[n.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],g=>{delete o[g]}),n.headers=Tt.concat(s,o);const l=[];let a=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(a=a&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const u=[];this.interceptors.response.forEach(function(S){u.push(S.fulfilled,S.rejected)});let c,p=0,h;if(!a){const g=[jf.bind(this),void 0];for(g.unshift.apply(g,l),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);p<h;)c=c.then(g[p++],g[p++]);return c}h=l.length;let y=n;for(p=0;p<h;){const g=l[p++],S=l[p++];try{y=g(y)}catch(R){S.call(this,R);break}}try{c=jf.call(this,y)}catch(g){return Promise.reject(g)}for(p=0,h=u.length;p<h;)c=c.then(u[p++],u[p++]);return c}getUri(t){t=hr(this.defaults,t);const n=Kh(t.baseURL,t.url);return Bh(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){Zo.prototype[t]=function(n,r){return this.request(hr(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,l){return this.request(hr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Zo.prototype[t]=n(),Zo.prototype[t+"Form"]=n(!0)});const xo=Zo;class Qu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{r.subscribe(l),o=l}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,l){r.reason||(r.reason=new ji(o,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qu(function(i){t=i}),cancel:t}}}const m1=Qu;function v1(e){return function(n){return e.apply(null,n)}}function g1(e){return k.isObject(e)&&e.isAxiosError===!0}const ja={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ja).forEach(([e,t])=>{ja[t]=e});const y1=ja;function Yh(e){const t=new xo(e),n=Lh(xo.prototype.request,t);return k.extend(n,xo.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Yh(hr(e,i))},n}const ae=Yh(Ku);ae.Axios=xo;ae.CanceledError=ji;ae.CancelToken=m1;ae.isCancel=Vh;ae.VERSION=Qh;ae.toFormData=Os;ae.AxiosError=$;ae.Cancel=ae.CanceledError;ae.all=function(t){return Promise.all(t)};ae.spread=v1;ae.isAxiosError=g1;ae.mergeConfig=hr;ae.AxiosHeaders=Tt;ae.formToJSON=e=>Wh(k.isHTMLForm(e)?new FormData(e):e);ae.getAdapter=Gh.getAdapter;ae.HttpStatusCode=y1;ae.default=ae;const w1=ae,fe=w1.create({baseURL:"https://explorer-foodexplorer.onrender.com",withCredentials:!0}),Xh=E.createContext({});function S1({children:e}){const[t,n]=E.useState({}),[r,i]=E.useState(!0);async function o({email:l,password:a}){try{const u=await fe.post("/sessions",{email:l,password:a},{withCredentials:!0}),{user:c}=u.data;localStorage.setItem("@foodexplorer:user",JSON.stringify(c)),n({user:c})}catch(u){u.response?alert(u.response.data.message):alert("It's not possible to signin")}}function s(){localStorage.removeItem("@foodexplorer:user"),n({}),window.location.href="/"}return E.useEffect(()=>{const l=localStorage.getItem("@foodexplorer:user");l&&Object.keys(JSON.parse(l)).length>0&&n({user:JSON.parse(l)}),i(!1)},[]),d.jsx(Xh.Provider,{value:{signIn:o,signOut:s,user:t.user,loading:r},children:e})}function Rr(){return E.useContext(Xh)}const Ls=G.createContext();function qh({children:e}){const[t,n]=E.useState("");return d.jsx(Ls.Provider,{value:{search:t,setSearch:n},children:e})}var he=function(){return he=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},he.apply(this,arguments)};function xi(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var K="-ms-",Zr="-moz-",b="-webkit-",Jh="comm",js="rule",Yu="decl",x1="@import",Zh="@keyframes",C1="@layer",E1=Math.abs,Xu=String.fromCharCode,Ia=Object.assign;function k1(e,t){return pe(e,0)^45?(((t<<2^pe(e,0))<<2^pe(e,1))<<2^pe(e,2))<<2^pe(e,3):0}function em(e){return e.trim()}function Ct(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function Co(e,t){return e.indexOf(t)}function pe(e,t){return e.charCodeAt(t)|0}function mr(e,t,n){return e.slice(t,n)}function dt(e){return e.length}function tm(e){return e.length}function Br(e,t){return t.push(e),e}function _1(e,t){return e.map(t).join("")}function Af(e,t){return e.filter(function(n){return!Ct(n,t)})}var Is=1,vr=1,nm=0,Ze=0,oe=0,Pr="";function Ns(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Is,column:vr,length:s,return:"",siblings:l}}function Ut(e,t){return Ia(Ns("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Ut(e.root,{children:[e]});Br(e,e.siblings)}function R1(){return oe}function P1(){return oe=Ze>0?pe(Pr,--Ze):0,vr--,oe===10&&(vr=1,Is--),oe}function at(){return oe=Ze<nm?pe(Pr,Ze++):0,vr++,oe===10&&(vr=1,Is++),oe}function On(){return pe(Pr,Ze)}function Eo(){return Ze}function As(e,t){return mr(Pr,e,t)}function Na(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O1(e){return Is=vr=1,nm=dt(Pr=e),Ze=0,[]}function T1(e){return Pr="",e}function Sl(e){return em(As(Ze-1,Aa(e===91?e+2:e===40?e+1:e)))}function L1(e){for(;(oe=On())&&oe<33;)at();return Na(e)>2||Na(oe)>3?"":" "}function j1(e,t){for(;--t&&at()&&!(oe<48||oe>102||oe>57&&oe<65||oe>70&&oe<97););return As(e,Eo()+(t<6&&On()==32&&at()==32))}function Aa(e){for(;at();)switch(oe){case e:return Ze;case 34:case 39:e!==34&&e!==39&&Aa(oe);break;case 40:e===41&&Aa(e);break;case 92:at();break}return Ze}function I1(e,t){for(;at()&&e+oe!==47+10;)if(e+oe===42+42&&On()===47)break;return"/*"+As(t,Ze-1)+"*"+Xu(e===47?e:at())}function N1(e){for(;!Na(On());)at();return As(e,Ze)}function A1(e){return T1(ko("",null,null,null,[""],e=O1(e),0,[0],e))}function ko(e,t,n,r,i,o,s,l,a){for(var u=0,c=0,p=s,h=0,y=0,g=0,S=1,R=1,v=1,f=0,m="",w=i,x=o,C=r,_=m;R;)switch(g=f,f=at()){case 40:if(g!=108&&pe(_,p-1)==58){Co(_+=A(Sl(f),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:_+=Sl(f);break;case 9:case 10:case 13:case 32:_+=L1(g);break;case 92:_+=j1(Eo()-1,7);continue;case 47:switch(On()){case 42:case 47:Br(z1(I1(at(),Eo()),t,n,a),a);break;default:_+="/"}break;case 123*S:l[u++]=dt(_)*v;case 125*S:case 59:case 0:switch(f){case 0:case 125:R=0;case 59+c:v==-1&&(_=A(_,/\f/g,"")),y>0&&dt(_)-p&&Br(y>32?Df(_+";",r,n,p-1,a):Df(A(_," ","")+";",r,n,p-2,a),a);break;case 59:_+=";";default:if(Br(C=zf(_,t,n,u,c,i,l,m,w=[],x=[],p,o),o),f===123)if(c===0)ko(_,t,C,C,w,o,p,l,x);else switch(h===99&&pe(_,3)===110?100:h){case 100:case 108:case 109:case 115:ko(e,C,C,r&&Br(zf(e,C,C,0,0,i,l,m,i,w=[],p,x),x),i,x,p,l,r?w:x);break;default:ko(_,C,C,C,[""],x,0,l,x)}}u=c=y=0,S=v=1,m=_="",p=s;break;case 58:p=1+dt(_),y=g;default:if(S<1){if(f==123)--S;else if(f==125&&S++==0&&P1()==125)continue}switch(_+=Xu(f),f*S){case 38:v=c>0?1:(_+="\f",-1);break;case 44:l[u++]=(dt(_)-1)*v,v=1;break;case 64:On()===45&&(_+=Sl(at())),h=On(),c=p=dt(m=_+=N1(Eo())),f++;break;case 45:g===45&&dt(_)==2&&(S=0)}}return o}function zf(e,t,n,r,i,o,s,l,a,u,c,p){for(var h=i-1,y=i===0?o:[""],g=tm(y),S=0,R=0,v=0;S<r;++S)for(var f=0,m=mr(e,h+1,h=E1(R=s[S])),w=e;f<g;++f)(w=em(R>0?y[f]+" "+m:A(m,/&\f/g,y[f])))&&(a[v++]=w);return Ns(e,t,n,i===0?js:l,a,u,c,p)}function z1(e,t,n,r){return Ns(e,t,n,Jh,Xu(R1()),mr(e,2,-2),0,r)}function Df(e,t,n,r,i){return Ns(e,t,n,Yu,mr(e,0,r),mr(e,r+1,-1),r,i)}function rm(e,t,n){switch(k1(e,t)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 4789:return Zr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+Zr+e+K+e+e;case 5936:switch(pe(e,t+11)){case 114:return b+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+K+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+K+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return b+e+K+e+e;case 6165:return b+e+K+"flex-"+e+e;case 5187:return b+e+A(e,/(\w+).+(:[^]+)/,b+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return b+e+K+"flex-item-"+A(e,/flex-|-self/g,"")+(Ct(e,/flex-|baseline/)?"":K+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return b+e+K+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return b+e+K+A(e,"shrink","negative")+e;case 5292:return b+e+K+A(e,"basis","preferred-size")+e;case 6060:return b+"box-"+A(e,"-grow","")+b+e+K+A(e,"grow","positive")+e;case 4554:return b+A(e,/([^-])(transform)/g,"$1"+b+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4200:if(!Ct(e,/flex-|baseline/))return K+"grid-column-align"+mr(e,t)+e;break;case 2592:case 3360:return K+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ct(r.props,/grid-\w+-end/)})?~Co(e+(n=n[t].value),"span")?e:K+A(e,"-start","")+e+K+"grid-row-span:"+(~Co(n,"span")?Ct(n,/\d+/):+Ct(n,/\d+/)-+Ct(e,/\d+/))+";":K+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ct(r.props,/grid-\w+-start/)})?e:K+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dt(e)-1-t>6)switch(pe(e,t+1)){case 109:if(pe(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+Zr+(pe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Co(e,"stretch")?rm(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,a,u){return K+i+":"+o+u+(s?K+i+"-span:"+(l?a:+a-+o)+u:"")+e});case 4949:if(pe(e,t+6)===121)return A(e,":",":"+b)+e;break;case 6444:switch(pe(e,pe(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(pe(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+K+"$2box$3")+e;case 100:return A(e,":",":"+K)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function es(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function D1(e,t,n,r){switch(e.type){case C1:if(e.children.length)break;case x1:case Yu:return e.return=e.return||e.value;case Jh:return"";case Zh:return e.return=e.value+"{"+es(e.children,r)+"}";case js:if(!dt(e.value=e.props.join(",")))return""}return dt(n=es(e.children,r))?e.return=e.value+"{"+n+"}":""}function M1(e){var t=tm(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function $1(e){return function(t){t.root||(t=t.return)&&e(t)}}function F1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Yu:e.return=rm(e.value,e.length,n);return;case Zh:return es([Ut(e,{value:A(e.value,"@","@"+b)})],r);case js:if(e.length)return _1(n=e.props,function(i){switch(Ct(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Ut(e,{props:[A(i,/:(read-\w+)/,":"+Zr+"$1")]})),Un(Ut(e,{props:[i]})),Ia(e,{props:Af(n,r)});break;case"::placeholder":Un(Ut(e,{props:[A(i,/:(plac\w+)/,":"+b+"input-$1")]})),Un(Ut(e,{props:[A(i,/:(plac\w+)/,":"+Zr+"$1")]})),Un(Ut(e,{props:[A(i,/:(plac\w+)/,K+"input-$1")]})),Un(Ut(e,{props:[i]})),Ia(e,{props:Af(n,r)});break}return""})}}var b1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},gr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",qu=typeof window<"u"&&"HTMLElement"in window,U1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),B1={},zs=Object.freeze([]),yr=Object.freeze({});function im(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var om=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),H1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W1=/(^-|-$)/g;function Mf(e){return e.replace(H1,"-").replace(W1,"")}var V1=/(a)(d)/gi,$f=function(e){return String.fromCharCode(e+(e>25?39:97))};function za(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$f(t%52)+n;return($f(t%52)+n).replace(V1,"$1-$2")}var xl,er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sm=function(e){return er(5381,e)};function lm(e){return za(sm(e)>>>0)}function K1(e){return e.displayName||e.name||"Component"}function Cl(e){return typeof e=="string"&&!0}var am=typeof Symbol=="function"&&Symbol.for,um=am?Symbol.for("react.memo"):60115,G1=am?Symbol.for("react.forward_ref"):60112,Q1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X1=((xl={})[G1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xl[um]=cm,xl);function Ff(e){return("type"in(t=e)&&t.type.$$typeof)===um?cm:"$$typeof"in e?X1[e.$$typeof]:Q1;var t}var q1=Object.defineProperty,J1=Object.getOwnPropertyNames,bf=Object.getOwnPropertySymbols,Z1=Object.getOwnPropertyDescriptor,ew=Object.getPrototypeOf,Uf=Object.prototype;function fm(e,t,n){if(typeof t!="string"){if(Uf){var r=ew(t);r&&r!==Uf&&fm(e,r,n)}var i=J1(t);bf&&(i=i.concat(bf(t)));for(var o=Ff(e),s=Ff(t),l=0;l<i.length;++l){var a=i[l];if(!(a in Y1||n&&n[a]||s&&a in s||o&&a in o)){var u=Z1(t,a);try{q1(e,a,u)}catch{}}}}return e}function zn(e){return typeof e=="function"}function Ju(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Da(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ci(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ma(e,t,n){if(n===void 0&&(n=!1),!n&&!Ci(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ma(e[r],t[r]);else if(Ci(t))for(var r in t)e[r]=Ma(e[r],t[r]);return e}function Zu(e,t){Object.defineProperty(e,"toString",{value:t})}function Dn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tw=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Dn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),_o=new Map,ts=new Map,El=1,no=function(e){if(_o.has(e))return _o.get(e);for(;ts.has(El);)El++;var t=El++;return _o.set(e,t),ts.set(t,e),t},nw=function(e,t){_o.set(e,t),ts.set(t,e)},rw="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),iw=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ow=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},sw=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var a=l.match(iw);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(nw(c,u),ow(e,c,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function lw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var a=Array.from(l.querySelectorAll("style[".concat(gr,"]")));return a[a.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.0.8");var s=lw();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},aw=function(){function e(t){this.element=dm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Dn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),uw=function(){function e(t){this.element=dm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),cw=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bf=qu,fw={isServer:!qu,useCSSOMInjection:!U1},ns=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var i=this;this.options=he(he({},fw),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&qu&&Bf&&(Bf=!1,function(o){for(var s=document.querySelectorAll(rw),l=0,a=s.length;l<a;l++){var u=s[l];u&&u.getAttribute(gr)!=="active"&&(sw(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Zu(this,function(){return function(o){for(var s=o.getTag(),l=s.length,a="",u=function(p){var h=function(v){return ts.get(v)}(p);if(h===void 0)return"continue";var y=o.names.get(h),g=s.getGroup(p);if(y===void 0||g.length===0)return"continue";var S="".concat(gr,".g").concat(p,'[id="').concat(h,'"]'),R="";y!==void 0&&y.forEach(function(v){v.length>0&&(R+="".concat(v,","))}),a+="".concat(g).concat(S,'{content:"').concat(R,'"}').concat(`/*!sc*/
`)},c=0;c<l;c++)u(c);return a}(i)})}return e.registerId=function(t){return no(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(he(he({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cw(i):r?new aw(i):new uw(i)}(this.options),new tw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(no(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(no(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(no(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dw=/&/g,pw=/^\s*\/\/.*$/gm;function pm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=pm(n.children,t)),n})}function hw(e){var t,n,r,i=e===void 0?yr:e,o=i.options,s=o===void 0?yr:o,l=i.plugins,a=l===void 0?zs:l,u=function(h,y,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},c=a.slice();c.push(function(h){h.type===js&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(dw,n).replace(r,u))}),s.prefix&&c.push(F1),c.push(D1);var p=function(h,y,g,S){y===void 0&&(y=""),g===void 0&&(g=""),S===void 0&&(S="&"),t=S,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var R=h.replace(pw,""),v=A1(g||y?"".concat(g," ").concat(y," { ").concat(R," }"):R);s.namespace&&(v=pm(v,s.namespace));var f=[];return es(v,M1(c.concat($1(function(m){return f.push(m)})))),f};return p.hash=a.length?a.reduce(function(h,y){return y.name||Dn(15),er(h,y.name)},5381).toString():"",p}var mw=new ns,$a=hw(),hm=G.createContext({shouldForwardProp:void 0,styleSheet:mw,stylis:$a});hm.Consumer;G.createContext(void 0);function Fa(){return E.useContext(hm)}var vw=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=$a);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zu(this,function(){throw Dn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=$a),this.name+t.hash},e}(),gw=function(e){return e>="A"&&e<="Z"};function Hf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;gw(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var mm=function(e){return e==null||e===!1||e===""},vm=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!mm(o)&&(Array.isArray(o)&&o.isCss||zn(o)?r.push("".concat(Hf(i),":"),o,";"):Ci(o)?r.push.apply(r,xi(xi(["".concat(i," {")],vm(o),!1),["}"],!1)):r.push("".concat(Hf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in b1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function sn(e,t,n,r){if(mm(e))return[];if(Ju(e))return[".".concat(e.styledComponentId)];if(zn(e)){if(!zn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return sn(i,t,n,r)}var o;return e instanceof vw?n?(e.inject(n,r),[e.getName(r)]):[e]:Ci(e)?vm(e):Array.isArray(e)?Array.prototype.concat.apply(zs,e.map(function(s){return sn(s,t,n,r)})):[e.toString()]}function gm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zn(n)&&!Ju(n))return!1}return!0}var yw=sm("6.0.8"),ww=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gm(t),this.componentId=n,this.baseHash=er(yw,n),this.baseStyle=r,ns.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_n(i,this.staticRulesId);else{var o=Da(sn(this.rules,t,n,r)),s=za(er(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=_n(i,s),this.staticRulesId=s}else{for(var a=er(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var p=this.rules[c];if(typeof p=="string")u+=p;else if(p){var h=Da(sn(p,t,n,r));a=er(a,h+c),u+=h}}if(u){var y=za(a>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(u,".".concat(y),void 0,this.componentId)),i=_n(i,y)}}return i},e}(),Ei=G.createContext(void 0);Ei.Consumer;function Sw(e){var t=G.useContext(Ei),n=E.useMemo(function(){return function(r,i){if(!r)throw Dn(14);if(zn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Dn(8);return i?he(he({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?G.createElement(Ei.Provider,{value:n},e.children):null}var kl={};function xw(e,t,n){var r=Ju(e),i=e,o=!Cl(e),s=t.attrs,l=s===void 0?zs:s,a=t.componentId,u=a===void 0?function(m,w){var x=typeof m!="string"?"sc":Mf(m);kl[x]=(kl[x]||0)+1;var C="".concat(x,"-").concat(lm("6.0.8"+x+kl[x]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):a,c=t.displayName;c===void 0&&function(m){return Cl(m)?"styled.".concat(m):"Styled(".concat(K1(m),")")}(e);var p=t.displayName&&t.componentId?"".concat(Mf(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(m,w){return g(m,w)&&S(m,w)}}else y=g}var R=new ww(n,p,r?i.componentStyle:void 0);function v(m,w){return function(x,C,_){var O=x.attrs,H=x.componentStyle,N=x.defaultProps,ke=x.foldedComponentIds,mn=x.styledComponentId,vn=x.target,Mi=G.useContext(Ei),Us=Fa(),gn=x.shouldForwardProp||Us.shouldForwardProp,We=function(St,ze,Dt){for(var De,Ve=he(he({},ze),{className:void 0,theme:Dt}),Bs=0;Bs<St.length;Bs+=1){var $i=zn(De=St[Bs])?De(Ve):De;for(var Mt in $i)Ve[Mt]=Mt==="className"?_n(Ve[Mt],$i[Mt]):Mt==="style"?he(he({},Ve[Mt]),$i[Mt]):$i[Mt]}return ze.className&&(Ve.className=_n(Ve.className,ze.className)),Ve}(O,C,im(C,Mi,N)||yr),T=We.as||vn,j={};for(var I in We)We[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?j.as=We.forwardedAs:gn&&!gn(I,T)||(j[I]=We[I]));var Y=function(St,ze){var Dt=Fa(),De=St.generateAndInjectStyles(ze,Dt.styleSheet,Dt.stylis);return De}(H,We),te=_n(ke,mn);return Y&&(te+=" "+Y),We.className&&(te+=" "+We.className),j[Cl(T)&&!om.has(T)?"class":"className"]=te,j.ref=_,E.createElement(T,j)}(f,m,w)}var f=G.forwardRef(v);return f.attrs=h,f.componentStyle=R,f.shouldForwardProp=y,f.foldedComponentIds=r?_n(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=p,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(w){for(var x=[],C=1;C<arguments.length;C++)x[C-1]=arguments[C];for(var _=0,O=x;_<O.length;_++)Ma(w,O[_],!0);return w}({},i.defaultProps,m):m}}),Zu(f,function(){return".".concat(f.styledComponentId)}),o&&fm(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Wf(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Vf=function(e){return Object.assign(e,{isCss:!0})};function ym(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zn(e)||Ci(e)){var r=e;return Vf(sn(Wf(zs,xi([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?sn(i):Vf(sn(Wf(i,t)))}function ba(e,t,n){if(n===void 0&&(n=yr),!t)throw Dn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,ym.apply(void 0,xi([i],o,!1)))};return r.attrs=function(i){return ba(e,t,he(he({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ba(e,t,he(he({},n),i))},r}var wm=function(e){return ba(xw,e)},q=wm;om.forEach(function(e){q[e]=wm(e)});var Cw=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=gm(t),ns.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Da(sn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ns.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Ew(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ym.apply(void 0,xi([e],t,!1)),i="sc-global-".concat(lm(JSON.stringify(r))),o=new Cw(r,i),s=function(a){var u=Fa(),c=G.useContext(Ei),p=G.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(p,a,u.styleSheet,c,u.stylis),G.useLayoutEffect(function(){if(!u.styleSheet.server)return l(p,a,u.styleSheet,c,u.stylis),function(){return o.removeStyles(p,u.styleSheet)}},[p,a,u.styleSheet,c,u.stylis]),null};function l(a,u,c,p,h){if(o.isStatic)o.renderStyles(a,B1,c,h);else{var y=he(he({},u),{theme:im(u,p,s.defaultProps)});o.renderStyles(a,y,c,h)}}return G.memo(s)}const re={sm:"500px",xmd:"650px",md:"768px",lg:"1024px",xlg:"1275px"},kw=q.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    grid-area: "content";
    overflow-y: auto;

    display: flex;
    flex-direction: column;

    #searchFilter {
      display: flex;
      align-items: center;

      gap: 2rem;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        font-size: 2.3rem;

        background: ${({theme:e})=>e.COLORS.TOMATO_100};
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;

        > svg {
          padding-top: 0.3rem;
          font-size: 1.5rem;
        }
      }
    }

    > footer {
      margin-top: auto;
    }
  }

  @media (max-width: ${re.sm}) {
    main {
      #searchFilter {
        h3 {
          font-size: 2.7vw;
        }

        button {
          font-size: 2.5vw;

          svg {
            padding-bottom: 0.3rem;
            font-size: 2vw;
          }
        }
      }
    }
  }
`,_w=q.div`
  display: flex;
  flex-direction: column;

  padding: 0 10%;
  margin-bottom: 4.6rem;

  #banner {
    height: 25vw;

    display: flex;
    justify-content: right;
    align-items: center;

    position: relative;

    margin-top: 8vw;
    margin-bottom: 5vw;
    border-radius: 0.5rem;
    background: ${({theme:e})=>e.COLORS.GRADIENT_200};

    > img {
      position: absolute;
      height: 30vw;

      bottom: 0rem;
      left: -6.3rem;
    }

    > #textContainer {
      margin-right: 3vw;

      h1 {
        font-size: 4.2rem;
        font-weight: 500;
      }

      p {
        font-size: 1.6rem;
        font-weight: 100;
      }

      @media (max-width: ${re.sm}) {
        padding-left: 45rem;
        h1 {
          line-height: 4rem;
        }
        p {
          padding-top: 2rem;
          font-size: 2.6vw;
        }
      }
    }
  }
`,Rw=q.div`
  grid-area: header;
  width: 100%;
  height: 12.4rem;

  background: ${({theme:e})=>e.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: "header";

  padding: 2.4rem 10%;

  > #buttonMenuCellphone,
  #buttonOrdersCellphone,
  #amountButtonOrderCellphone {
    display: none;
  }

  > div:nth-of-type(2) {
    max-width: 50vw;
  }

  > button:nth-of-type(2) {
    white-space: nowrap;
    max-width: 25rem;
    /* margin: 0 4.2rem; */

    > svg {
      font-size: clamp(1.6rem, 5vw, 3.2rem);
    }
  }

  #logoBox {
    /* margin-right: 3.2rem; */

    display: flex;
    flex-direction: column;
    > span {
      color: ${({theme:e})=>e.COLORS.CAKE_200};
      font-size: 1.2rem;
      align-self: self-end;
      margin-top: -1rem;
    }
  }

  @media (max-width: ${re.lg}) {
    padding: 0 10%;
    height: 12.4rem;

    div:nth-child(3),
    #buttonLogout,
    #buttonOrders,
    #amountButtonOrderCellphone {
      display: none;
    }

    #addDish {
      font-size: 2rem;
    }

    #buttonMenuCellphone {
      display: flex;

      background: none;
      border: none;
      font-size: 4vw;
    }

    #logo {
      justify-content: center;
      margin: 0;
    }

    #buttonOrdersCellphone {
      display: flex;
      position: relative;
      padding: 0;

      background: none;
      border: none;
      font-size: 5vw;

      > svg {
        margin: 0;
      }
    }

    #amountButtonOrderCellphone {
      display: flex;
      position: absolute;

      font-size: 2vw;

      padding: 0.5vw 1vw;

      background: ${({theme:e})=>e.COLORS.TOMATO_100};
      border-radius: 50%;
      top: 2.5vw;
      right: 9vw;
    }
  }

  @media (max-width: ${re.sm}) {
    #buttonMenuCellphone {
      font-size: 6vw;
    }
    #buttonOrdersCellphone {
      font-size: 7vw;
    }
  }
`,Pw=q.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: bold;
  white-space: nowrap;

  img {
    height: 4.5rem;
    margin-right: 1rem;
  }

  @media (max-width: ${re.sm}) {
    font-size: 4rem;
  }
`,Ow=q.button`
  border: none;
  background: none;

  > svg {
    font-size: clamp(1.8rem, 5vw, 3.2rem);
  }
`;var Sm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kf=G.createContext&&G.createContext(Sm),ln=globalThis&&globalThis.__assign||function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ln.apply(this,arguments)},Tw=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function xm(e){return e&&e.map(function(t,n){return G.createElement(t.tag,ln({key:n},t.attr),xm(t.child))})}function Fn(e){return function(t){return G.createElement(Lw,ln({attr:ln({},e.attr)},t),xm(e.child))}}function Lw(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,s=Tw(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),G.createElement("svg",ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:a,style:ln(ln({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&G.createElement("title",null,o),e.children)};return Kf!==void 0?G.createElement(Kf.Consumer,null,function(n){return t(n)}):t(Sm)}function jw(e){return Fn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"}}]})(e)}function Cm(e){return Fn({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}}]})(e)}function Iw(e){return Fn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}function Em(e){return Fn({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]})(e)}function Gf(e){return Fn({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M72,104a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm8,40h96a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16ZM232,56V208a8,8,0,0,1-11.58,7.15L192,200.94l-28.42,14.21a8,8,0,0,1-7.16,0L128,200.94,99.58,215.15a8,8,0,0,1-7.16,0L64,200.94,35.58,215.15A8,8,0,0,1,24,208V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V195.06l20.42-10.22a8,8,0,0,1,7.16,0L96,199.06l28.42-14.22a8,8,0,0,1,7.16,0L160,199.06l28.42-14.22a8,8,0,0,1,7.16,0L216,195.06Z"}}]})(e)}const ec="/foodexplorer_frontend/assets/Polygon 1-a336523f.svg",Nw=q.button`
  height: 4.8rem;

  padding: 0 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;
  background-color: ${({theme:e})=>e.COLORS.TOMATO_100};

  > svg {
    margin-right: 1.1rem;
  }
`;function Lt({id:e,className:t,Icon:n,title:r,onClick:i}){return d.jsxs(Nw,{type:"button",id:e,className:t,onClick:i,children:[n&&d.jsx(n,{}),r]})}const Aw=q.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;

  background: ${({theme:e})=>e.COLORS.DARK_900};
  border: none;
  border-radius: 0.5rem;

  > div > svg {
    width: 3.2rem;
    height: 3.2rem;
    margin-left: 2vw;
  }

  > input {
    width: 100%;
    height: 100%;

    padding-left: 1.4rem;

    background: transparent;
    border: none;
    outline: none;
  }

  @media (max-width: ${re.md}) {
    height: 9vw;

    > input {
      font-size: 3vw;
    }

    > svg {
      width: 5vw;
      height: 5vw;
      padding-bottom: 0.5vw;
    }

    input::placeholder {
      font-size: 3vw;
    }
  }

  @media (max-width: ${re.lg}) {
    > svg {
      margin-left: 2rem;
    }
  }
`;function Tn({Icon:e,onIconClick:t,...n}){return d.jsxs(Aw,{children:[e&&d.jsx("div",{onClick:t,children:d.jsx(e,{})}),d.jsx("input",{...n})]})}const zw=q.aside`
  &[data-menuisopen="true"] {
    transform: translateY(0);
  }

  display: flex;
  flex-direction: column;

  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;

  width: 100%;
  height: 100vh;

  position: absolute;
  z-index: 3;

  background: ${({theme:e})=>e.COLORS.DARK_100};

  #closeMenuBar {
    height: 12.4rem;

    display: flex;

    padding: 2% 10% 0;
    background: ${({theme:e})=>e.COLORS.DARK_700};

    p {
      display: flex;
      align-items: center;
      gap: 1vw;

      font-size: 3vw;

      > svg {
        font-size: 4.5vw;
        cursor: pointer;
      }
    }
  }

  .contentBox {
    padding: 5.6rem 10%;
  }

  #line {
    margin-top: 1rem;
    border-bottom: 1px solid ${({theme:e})=>e.COLORS.DARK_1000};
  }
  footer {
    margin-top: auto;
  }

  @media (min-width: 1025px) {
    &[data-menuisopen="true"] {
      display: none;
    }
  }
`,Dw=q.button`
  border: none;
  background: none;

  padding-top: 5.6rem;
  font-weight: 100;
  font-size: 4vw;
  cursor: pointer;
`;function Mw(e){return Fn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"}},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}}]})(e)}function tc(e){return Fn({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(e)}const $w=q.footer`
  width: 100%;
  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({theme:e})=>e.COLORS.DARK_600};

  margin-top: 5rem;
  padding: 3rem 12.3rem;

  > #logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    > p {
      font-weight: 700;
      font-size: 2.4rem;
      color: ${({theme:e})=>e.COLORS.LIGHT_700};
    }

    > svg {
      height: 4.5rem;
    }
  }

  span {
    font-size: 1.4vw;
    color: ${({theme:e})=>e.COLORS.LIGHT_200};

    @media (max-width: ${re.sm}) {
      font-size: 2.4vw;
    }
  }
`;function Ii(){return d.jsxs($w,{children:[d.jsxs("div",{id:"logo",children:[d.jsx("svg",{width:"27",height:"31",viewBox:"0 0 27 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M13.5391 0.5L26.5294 8V23L13.5391 30.5L0.548681 23V8L13.5391 0.5Z",fill:"#4D585E"})}),d.jsx("p",{children:"food explorer"})]}),d.jsx("span",{children:"© 2023 - all rights reserved"})]})}function Fw({menuIsOpen:e,setMenuIsOpen:t}){const n=kr(),{signOut:r}=Rr(),{search:i,setSearch:o}=E.useContext(Ls);return d.jsxs(zw,{"data-menuisopen":e,children:[d.jsx("div",{id:"closeMenuBar",children:d.jsxs("p",{children:[d.jsx(tc,{onClick:()=>t(!1)}),"Menu"]})}),d.jsxs("div",{className:"contentBox",children:[d.jsx(Tn,{Icon:Cm,value:i,onIconClick:()=>{n("/"),t(!1)},placeholder:"Search for a dish or by ingredients",onChange:s=>{o(s.target.value)}}),d.jsx(Dw,{id:"buttonLogout",onClick:r,children:"Sign out"}),d.jsx("div",{id:"line"})]}),d.jsx(Ii,{})]})}const an={ADMIN:"admin",CUSTOMER:"customer"},nc=G.createContext({cartUpdated:!1});function bw({children:e}){const[t,n]=E.useState(!1);return d.jsx(nc.Provider,{value:{cartUpdated:t,setCartUpdated:n},children:e})}function Ds(){const[e,t]=E.useState(!1),{search:n,setSearch:r}=E.useContext(Ls),{cartUpdated:i,setCartUpdated:o}=E.useContext(nc),[s,l]=E.useState(0),{user:a,signOut:u}=Rr(),c=kr();function p(){c("/add")}function h(){r(""),t(!0)}return E.useEffect(()=>{async function y(){const S=(await fe.get("/cart",{withCredentials:!0})).data;let R=0;for(let v of S)R+=v.amount;l(R)}y()},[i]),d.jsxs(d.Fragment,{children:[d.jsx(Fw,{menuIsOpen:e,setMenuIsOpen:t}),d.jsxs(Rw,{children:[d.jsx("button",{id:"buttonMenuCellphone",children:d.jsx(Iw,{onClick:h})}),d.jsxs("div",{id:"logoBox",children:[d.jsxs(Pw,{id:"logo",children:[d.jsx("img",{src:ec,alt:"food explorer logo"}),d.jsx("span",{children:"food explorer"})]}),a.role===an.ADMIN?d.jsx("span",{className:"profileBadge",children:"admin"}):d.jsx("span",{className:"profileBadge",children:a.name})]}),d.jsx(Tn,{Icon:Cm,placeholder:"Search for a dish or by ingredients",value:n,onChange:y=>{r(y.target.value),c("/")}}),a.role===an.ADMIN?d.jsx(Lt,{id:"addDish",title:"Add dish",onClick:p}):d.jsx(Lt,{id:"buttonOrders",Icon:Gf,title:`Orders (${s})`}),a.role!==an.ADMIN?d.jsxs(d.Fragment,{children:[d.jsx(Lt,{id:"buttonOrdersCellphone",Icon:Gf}),d.jsx("span",{id:"amountButtonOrderCellphone",children:s})]}):d.jsx(d.Fragment,{}),d.jsx(Ow,{id:"buttonLogout",onClick:u,children:d.jsx(jw,{})})]})]})}const Qf=q.div`
  margin-top: 4.8rem;

  font-family: "Poppins", sans-serif;
  font-size: 3.2rem;
  color: ${({theme:e})=>e.COLORS.LIGHT_300};

  #picsCaroussel {
    display: flex;

    margin-top: 2.3rem;
  }

  #CarouselContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    overflow: auto;
    width: 100%;
    scrollbar-width: none; /*For Firefox */
    &::-webkit-scrollbar {
      display: none; /* For Chrome, Safari and Opera */
    }
  }

  #CarouselContainer::before,
  #CarouselContainer::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    pointer-events: none;
    z-index: 1;
  }

  #CarouselContainer::before {
    left: -1px;
    background: linear-gradient(
      to right,
      ${({theme:e})=>e.COLORS.DARK_400},
      transparent
    );
  }

  #CarouselContainer::after {
    right: -1px;
    background: linear-gradient(
      to left,
      ${({theme:e})=>e.COLORS.DARK_400},
      transparent
    );
  }

  .buttonCarousel {
    position: absolute;
    z-index: 2;
    top: -2rem;

    font-family: "Poppins", sans-serif;
    background: none;
    border: none;

    font-size: 5rem;
    font-weight: 100;

    cursor: pointer;
  }

  .buttonCarousel-prev {
    position: relative;
    /* left: 50px; */
  }

  .buttonCarousel-next {
    position: relative;
    /* right: 50px; */
  }

  .control-dots {
    display: none;
  }
`;var km={},Ms={},rc={},_l={},Rl={exports:{}},Pl,Yf;function Uw(){if(Yf)return Pl;Yf=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Pl=e,Pl}var Ol,Xf;function Bw(){if(Xf)return Ol;Xf=1;var e=Uw();function t(){}function n(){}return n.resetWarningCache=t,Ol=function(){function r(s,l,a,u,c,p){if(p!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Ol}var qf;function Hw(){return qf||(qf=1,Rl.exports=Bw()()),Rl.exports}var Jf;function Ww(){return Jf||(Jf=1,function(e){(function(t,n){n(e,E,Hw())})(od,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=g;var i=s(n),o=s(r);function s(f){return f&&f.__esModule?f:{default:f}}var l=Object.assign||function(f){for(var m=1;m<arguments.length;m++){var w=arguments[m];for(var x in w)Object.prototype.hasOwnProperty.call(w,x)&&(f[x]=w[x])}return f};function a(f,m){var w={};for(var x in f)m.indexOf(x)>=0||Object.prototype.hasOwnProperty.call(f,x)&&(w[x]=f[x]);return w}function u(f,m){if(!(f instanceof m))throw new TypeError("Cannot call a class as a function")}var c=function(){function f(m,w){for(var x=0;x<w.length;x++){var C=w[x];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(m,C.key,C)}}return function(m,w,x){return w&&f(m.prototype,w),x&&f(m,x),m}}();function p(f,m){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return m&&(typeof m=="object"||typeof m=="function")?m:f}function h(f,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);f.prototype=Object.create(m&&m.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(f,m):f.__proto__=m)}var y=!1;function g(f){y=f}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){g(!0)}}))}catch{}function S(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return y?f:f.capture}function R(f){if("touches"in f){var m=f.touches[0],w=m.pageX,x=m.pageY;return{x:w,y:x}}var C=f.screenX,_=f.screenY;return{x:C,y:_}}var v=function(f){h(m,f);function m(){var w;u(this,m);for(var x=arguments.length,C=Array(x),_=0;_<x;_++)C[_]=arguments[_];var O=p(this,(w=m.__proto__||Object.getPrototypeOf(m)).call.apply(w,[this].concat(C)));return O._handleSwipeStart=O._handleSwipeStart.bind(O),O._handleSwipeMove=O._handleSwipeMove.bind(O),O._handleSwipeEnd=O._handleSwipeEnd.bind(O),O._onMouseDown=O._onMouseDown.bind(O),O._onMouseMove=O._onMouseMove.bind(O),O._onMouseUp=O._onMouseUp.bind(O),O._setSwiperRef=O._setSwiperRef.bind(O),O}return c(m,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,S({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(x){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(x))}},{key:"_onMouseMove",value:function(x){this.mouseDown&&this._handleSwipeMove(x)}},{key:"_onMouseUp",value:function(x){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(x)}},{key:"_handleSwipeStart",value:function(x){var C=R(x),_=C.x,O=C.y;this.moveStart={x:_,y:O},this.props.onSwipeStart(x)}},{key:"_handleSwipeMove",value:function(x){if(this.moveStart){var C=R(x),_=C.x,O=C.y,H=_-this.moveStart.x,N=O-this.moveStart.y;this.moving=!0;var ke=this.props.onSwipeMove({x:H,y:N},x);ke&&x.cancelable&&x.preventDefault(),this.movePosition={deltaX:H,deltaY:N}}}},{key:"_handleSwipeEnd",value:function(x){this.props.onSwipeEnd(x);var C=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-C?this.props.onSwipeLeft(1,x):this.movePosition.deltaX>C&&this.props.onSwipeRight(1,x),this.movePosition.deltaY<-C?this.props.onSwipeUp(1,x):this.movePosition.deltaY>C&&this.props.onSwipeDown(1,x)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(x){this.swiper=x,this.props.innerRef(x)}},{key:"render",value:function(){var x=this.props;x.tagName;var C=x.className,_=x.style,O=x.children;x.allowMouseEvents,x.onSwipeUp,x.onSwipeDown,x.onSwipeLeft,x.onSwipeRight,x.onSwipeStart,x.onSwipeMove,x.onSwipeEnd,x.innerRef,x.tolerance;var H=a(x,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:C,style:_},H),O)}}]),m}(n.Component);v.displayName="ReactSwipe",v.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=v})}(_l)),_l}(function(e){(function(t,n){n(e,Ww())})(od,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default})})(rc);var Ni={},_m={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var l=n.apply(null,o);l&&r.push(l)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var a in o)t.call(o,a)&&o[a]&&r.push(a)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(_m);var Vw=_m.exports;Object.defineProperty(Ni,"__esModule",{value:!0});Ni.default=void 0;var bt=Kw(Vw);function Kw(e){return e&&e.__esModule?e:{default:e}}function Gw(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qw={ROOT:function(t){return(0,bt.default)(Gw({"carousel-root":!0},t||"",!!t))},CAROUSEL:function(t){return(0,bt.default)({carousel:!0,"carousel-slider":t})},WRAPPER:function(t,n){return(0,bt.default)({"thumbs-wrapper":!t,"slider-wrapper":t,"axis-horizontal":n==="horizontal","axis-vertical":n!=="horizontal"})},SLIDER:function(t,n){return(0,bt.default)({thumbs:!t,slider:t,animated:!n})},ITEM:function(t,n,r){return(0,bt.default)({thumb:!t,slide:t,selected:n,previous:r})},ARROW_PREV:function(t){return(0,bt.default)({"control-arrow control-prev":!0,"control-disabled":t})},ARROW_NEXT:function(t){return(0,bt.default)({"control-arrow control-next":!0,"control-disabled":t})},DOT:function(t){return(0,bt.default)({dot:!0,selected:t})}};Ni.default=Qw;var Ai={},$s={};Object.defineProperty($s,"__esModule",{value:!0});$s.outerWidth=void 0;var Yw=function(t){var n=t.offsetWidth,r=getComputedStyle(t);return n+=parseInt(r.marginLeft)+parseInt(r.marginRight),n};$s.outerWidth=Yw;var Or={};Object.defineProperty(Or,"__esModule",{value:!0});Or.default=void 0;var Xw=function(t,n,r){var i=t===0?t:t+n,o=r==="horizontal"?[i,0,0]:[0,i,0],s="translate3d",l="("+o.join(",")+")";return s+l};Or.default=Xw;var zi={};Object.defineProperty(zi,"__esModule",{value:!0});zi.default=void 0;var qw=function(){return window};zi.default=qw;Object.defineProperty(Ai,"__esModule",{value:!0});Ai.default=void 0;var tt=eS(E),yn=Fs(Ni),Jw=$s,Zf=Fs(Or),Zw=Fs(rc),ro=Fs(zi);function Fs(e){return e&&e.__esModule?e:{default:e}}function Rm(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Rm=function(){return e},e}function eS(e){if(e&&e.__esModule)return e;if(e===null||ei(e)!=="object"&&typeof e!="function")return{default:e};var t=Rm();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function ei(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ei=function(n){return typeof n}:ei=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ei(e)}function Ua(){return Ua=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function tS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ed(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function nS(e,t,n){return t&&ed(e.prototype,t),n&&ed(e,n),e}function rS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ba(e,t)}function Ba(e,t){return Ba=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ba(e,t)}function iS(e){var t=sS();return function(){var r=rs(e),i;if(t){var o=rs(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return oS(this,i)}}function oS(e,t){return t&&(ei(t)==="object"||typeof t=="function")?t:_e(e)}function _e(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function rs(e){return rs=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},rs(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var lS=function(t){return t.hasOwnProperty("key")},ic=function(e){rS(n,e);var t=iS(n);function n(r){var i;return tS(this,n),i=t.call(this,r),xe(_e(i),"itemsWrapperRef",void 0),xe(_e(i),"itemsListRef",void 0),xe(_e(i),"thumbsRef",void 0),xe(_e(i),"setItemsWrapperRef",function(o){i.itemsWrapperRef=o}),xe(_e(i),"setItemsListRef",function(o){i.itemsListRef=o}),xe(_e(i),"setThumbsRef",function(o,s){i.thumbsRef||(i.thumbsRef=[]),i.thumbsRef[s]=o}),xe(_e(i),"updateSizes",function(){if(!(!i.props.children||!i.itemsWrapperRef||!i.thumbsRef)){var o=tt.Children.count(i.props.children),s=i.itemsWrapperRef.clientWidth,l=i.props.thumbWidth?i.props.thumbWidth:(0,Jw.outerWidth)(i.thumbsRef[0]),a=Math.floor(s/l),u=a<o,c=u?o-a:0;i.setState(function(p,h){return{itemSize:l,visibleItems:a,firstItem:u?i.getFirstItem(h.selectedItem):0,lastPosition:c,showArrows:u}})}}),xe(_e(i),"handleClickItem",function(o,s,l){if(!lS(l)||l.key==="Enter"){var a=i.props.onSelectItem;typeof a=="function"&&a(o,s)}}),xe(_e(i),"onSwipeStart",function(){i.setState({swiping:!0})}),xe(_e(i),"onSwipeEnd",function(){i.setState({swiping:!1})}),xe(_e(i),"onSwipeMove",function(o){var s=o.x;if(!i.state.itemSize||!i.itemsWrapperRef||!i.state.visibleItems)return!1;var l=0,a=tt.Children.count(i.props.children),u=-(i.state.firstItem*100)/i.state.visibleItems,c=Math.max(a-i.state.visibleItems,0),p=-c*100/i.state.visibleItems;u===l&&s>0&&(s=0),u===p&&s<0&&(s=0);var h=i.itemsWrapperRef.clientWidth,y=u+100/(h/s);return i.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(g){i.itemsListRef.style[g]=(0,Zf.default)(y,"%",i.props.axis)}),!0}),xe(_e(i),"slideRight",function(o){i.moveTo(i.state.firstItem-(typeof o=="number"?o:1))}),xe(_e(i),"slideLeft",function(o){i.moveTo(i.state.firstItem+(typeof o=="number"?o:1))}),xe(_e(i),"moveTo",function(o){o=o<0?0:o,o=o>=i.state.lastPosition?i.state.lastPosition:o,i.setState({firstItem:o})}),i.state={selectedItem:r.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},i}return nS(n,[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(i){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==i.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,ro.default)().addEventListener("resize",this.updateSizes),(0,ro.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,ro.default)().removeEventListener("resize",this.updateSizes),(0,ro.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(i){var o=i;return i>=this.state.lastPosition&&(o=this.state.lastPosition),i<this.state.firstItem+this.state.visibleItems&&(o=this.state.firstItem),i<this.state.firstItem&&(o=i),o}},{key:"renderItems",value:function(){var i=this;return this.props.children.map(function(o,s){var l=yn.default.ITEM(!1,s===i.state.selectedItem),a={key:s,ref:function(c){return i.setThumbsRef(c,s)},className:l,onClick:i.handleClickItem.bind(i,s,i.props.children[s]),onKeyDown:i.handleClickItem.bind(i,s,i.props.children[s]),"aria-label":"".concat(i.props.labels.item," ").concat(s+1),style:{width:i.props.thumbWidth}};return tt.default.createElement("li",Ua({},a,{role:"button",tabIndex:0}),o)})}},{key:"render",value:function(){var i=this;if(!this.props.children)return null;var o=tt.Children.count(this.props.children)>1,s=this.state.showArrows&&this.state.firstItem>0,l=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,a={},u=-this.state.firstItem*(this.state.itemSize||0),c=(0,Zf.default)(u,"px",this.props.axis),p=this.props.transitionTime+"ms";return a={WebkitTransform:c,MozTransform:c,MsTransform:c,OTransform:c,transform:c,msTransform:c,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},tt.default.createElement("div",{className:yn.default.CAROUSEL(!1)},tt.default.createElement("div",{className:yn.default.WRAPPER(!1),ref:this.setItemsWrapperRef},tt.default.createElement("button",{type:"button",className:yn.default.ARROW_PREV(!s),onClick:function(){return i.slideRight()},"aria-label":this.props.labels.leftArrow}),o?tt.default.createElement(Zw.default,{tagName:"ul",className:yn.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:a,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):tt.default.createElement("ul",{className:yn.default.SLIDER(!1,this.state.swiping),ref:function(y){return i.setItemsListRef(y)},style:a},this.renderItems()),tt.default.createElement("button",{type:"button",className:yn.default.ARROW_NEXT(!l),onClick:function(){return i.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}]),n}(tt.Component);Ai.default=ic;xe(ic,"displayName","Thumbs");xe(ic,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350});var bs={};Object.defineProperty(bs,"__esModule",{value:!0});bs.default=void 0;var aS=function(){return document};bs.default=aS;var $e={};Object.defineProperty($e,"__esModule",{value:!0});$e.setPosition=$e.getPosition=$e.isKeyboardEvent=$e.defaultStatusFormatter=$e.noop=void 0;var uS=E,cS=fS(Or);function fS(e){return e&&e.__esModule?e:{default:e}}var dS=function(){};$e.noop=dS;var pS=function(t,n){return"".concat(t," of ").concat(n)};$e.defaultStatusFormatter=pS;var hS=function(t){return t?t.hasOwnProperty("key"):!1};$e.isKeyboardEvent=hS;var mS=function(t,n){if(n.infiniteLoop&&++t,t===0)return 0;var r=uS.Children.count(n.children);if(n.centerMode&&n.axis==="horizontal"){var i=-t*n.centerSlidePercentage,o=r-1;return t&&(t!==o||n.infiniteLoop)?i+=(100-n.centerSlidePercentage)/2:t===o&&(i+=100-n.centerSlidePercentage),i}return-t*100};$e.getPosition=mS;var vS=function(t,n){var r={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach(function(i){r[i]=(0,cS.default)(t,"%",n)}),r};$e.setPosition=vS;var mt={};Object.defineProperty(mt,"__esModule",{value:!0});mt.fadeAnimationHandler=mt.slideStopSwipingHandler=mt.slideSwipeAnimationHandler=mt.slideAnimationHandler=void 0;var Pm=E,gS=yS(Or),vt=$e;function yS(e){return e&&e.__esModule?e:{default:e}}function td(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?td(Object(n),!0).forEach(function(r){wS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):td(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var SS=function(t,n){var r={},i=n.selectedItem,o=i,s=Pm.Children.count(t.children)-1,l=t.infiniteLoop&&(i<0||i>s);if(l)return o<0?t.centerMode&&t.centerSlidePercentage&&t.axis==="horizontal"?r.itemListStyle=(0,vt.setPosition)(-(s+2)*t.centerSlidePercentage-(100-t.centerSlidePercentage)/2,t.axis):r.itemListStyle=(0,vt.setPosition)(-(s+2)*100,t.axis):o>s&&(r.itemListStyle=(0,vt.setPosition)(0,t.axis)),r;var a=(0,vt.getPosition)(i,t),u=(0,gS.default)(a,"%",t.axis),c=t.transitionTime+"ms";return r.itemListStyle={WebkitTransform:u,msTransform:u,OTransform:u,transform:u},n.swiping||(r.itemListStyle=xn(xn({},r.itemListStyle),{},{WebkitTransitionDuration:c,MozTransitionDuration:c,OTransitionDuration:c,transitionDuration:c,msTransitionDuration:c})),r};mt.slideAnimationHandler=SS;var xS=function(t,n,r,i){var o={},s=n.axis==="horizontal",l=Pm.Children.count(n.children),a=0,u=(0,vt.getPosition)(r.selectedItem,n),c=n.infiniteLoop?(0,vt.getPosition)(l-1,n)-100:(0,vt.getPosition)(l-1,n),p=s?t.x:t.y,h=p;u===a&&p>0&&(h=0),u===c&&p<0&&(h=0);var y=u+100/(r.itemSize/h),g=Math.abs(p)>n.swipeScrollTolerance;return n.infiniteLoop&&g&&(r.selectedItem===0&&y>-100?y-=l*100:r.selectedItem===l-1&&y<-l*100&&(y+=l*100)),(!n.preventMovementUntilSwipeScrollTolerance||g||r.swipeMovementStarted)&&(r.swipeMovementStarted||i({swipeMovementStarted:!0}),o.itemListStyle=(0,vt.setPosition)(y,n.axis)),g&&!r.cancelClick&&i({cancelClick:!0}),o};mt.slideSwipeAnimationHandler=xS;var CS=function(t,n){var r=(0,vt.getPosition)(n.selectedItem,t),i=(0,vt.setPosition)(r,t.axis);return{itemListStyle:i}};mt.slideStopSwipingHandler=CS;var ES=function(t,n){var r=t.transitionTime+"ms",i="ease-in-out",o={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:i,msTransitionTimingFunction:i,MozTransitionTimingFunction:i,WebkitTransitionTimingFunction:i,OTransitionTimingFunction:i};return n.swiping||(o=xn(xn({},o),{},{WebkitTransitionDuration:r,MozTransitionDuration:r,OTransitionDuration:r,transitionDuration:r,msTransitionDuration:r})),{slideStyle:o,selectedStyle:xn(xn({},o),{},{opacity:1,position:"relative"}),prevStyle:xn({},o)}};mt.fadeAnimationHandler=ES;Object.defineProperty(Ms,"__esModule",{value:!0});Ms.default=void 0;var U=RS(E),kS=Di(rc),kt=Di(Ni),_S=Di(Ai),io=Di(bs),oo=Di(zi),Hr=$e,is=mt;function Di(e){return e&&e.__esModule?e:{default:e}}function Om(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Om=function(){return e},e}function RS(e){if(e&&e.__esModule)return e;if(e===null||ti(e)!=="object"&&typeof e!="function")return{default:e};var t=Om();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}function ti(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ti=function(n){return typeof n}:ti=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ti(e)}function Ha(){return Ha=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}function nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nd(Object(n),!0).forEach(function(r){z(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function PS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rd(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function OS(e,t,n){return t&&rd(e.prototype,t),n&&rd(e,n),e}function TS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Wa(e,t)}function Wa(e,t){return Wa=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Wa(e,t)}function LS(e){var t=IS();return function(){var r=os(e),i;if(t){var o=os(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return jS(this,i)}}function jS(e,t){return t&&(ti(t)==="object"||typeof t=="function")?t:D(e)}function D(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function IS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function os(e){return os=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},os(e)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oc=function(e){TS(n,e);var t=LS(n);function n(r){var i;PS(this,n),i=t.call(this,r),z(D(i),"thumbsRef",void 0),z(D(i),"carouselWrapperRef",void 0),z(D(i),"listRef",void 0),z(D(i),"itemsRef",void 0),z(D(i),"timer",void 0),z(D(i),"animationHandler",void 0),z(D(i),"setThumbsRef",function(s){i.thumbsRef=s}),z(D(i),"setCarouselWrapperRef",function(s){i.carouselWrapperRef=s}),z(D(i),"setListRef",function(s){i.listRef=s}),z(D(i),"setItemsRef",function(s,l){i.itemsRef||(i.itemsRef=[]),i.itemsRef[l]=s}),z(D(i),"autoPlay",function(){U.Children.count(i.props.children)<=1||(i.clearAutoPlay(),i.props.autoPlay&&(i.timer=setTimeout(function(){i.increment()},i.props.interval)))}),z(D(i),"clearAutoPlay",function(){i.timer&&clearTimeout(i.timer)}),z(D(i),"resetAutoPlay",function(){i.clearAutoPlay(),i.autoPlay()}),z(D(i),"stopOnHover",function(){i.setState({isMouseEntered:!0},i.clearAutoPlay)}),z(D(i),"startOnLeave",function(){i.setState({isMouseEntered:!1},i.autoPlay)}),z(D(i),"isFocusWithinTheCarousel",function(){return i.carouselWrapperRef?!!((0,io.default)().activeElement===i.carouselWrapperRef||i.carouselWrapperRef.contains((0,io.default)().activeElement)):!1}),z(D(i),"navigateWithKeyboard",function(s){if(i.isFocusWithinTheCarousel()){var l=i.props.axis,a=l==="horizontal",u={ArrowUp:38,ArrowRight:39,ArrowDown:40,ArrowLeft:37},c=a?u.ArrowRight:u.ArrowDown,p=a?u.ArrowLeft:u.ArrowUp;c===s.keyCode?i.increment():p===s.keyCode&&i.decrement()}}),z(D(i),"updateSizes",function(){if(!(!i.state.initialized||!i.itemsRef||i.itemsRef.length===0)){var s=i.props.axis==="horizontal",l=i.itemsRef[0];if(l){var a=s?l.clientWidth:l.clientHeight;i.setState({itemSize:a}),i.thumbsRef&&i.thumbsRef.updateSizes()}}}),z(D(i),"setMountState",function(){i.setState({hasMount:!0}),i.updateSizes()}),z(D(i),"handleClickItem",function(s,l){if(U.Children.count(i.props.children)!==0){if(i.state.cancelClick){i.setState({cancelClick:!1});return}i.props.onClickItem(s,l),s!==i.state.selectedItem&&i.setState({selectedItem:s})}}),z(D(i),"handleOnChange",function(s,l){U.Children.count(i.props.children)<=1||i.props.onChange(s,l)}),z(D(i),"handleClickThumb",function(s,l){i.props.onClickThumb(s,l),i.moveTo(s)}),z(D(i),"onSwipeStart",function(s){i.setState({swiping:!0}),i.props.onSwipeStart(s)}),z(D(i),"onSwipeEnd",function(s){i.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),i.props.onSwipeEnd(s),i.clearAutoPlay(),i.state.autoPlay&&i.autoPlay()}),z(D(i),"onSwipeMove",function(s,l){i.props.onSwipeMove(l);var a=i.props.swipeAnimationHandler(s,i.props,i.state,i.setState.bind(D(i)));return i.setState(nt({},a)),!!Object.keys(a).length}),z(D(i),"decrement",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem-(typeof s=="number"?s:1))}),z(D(i),"increment",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;i.moveTo(i.state.selectedItem+(typeof s=="number"?s:1))}),z(D(i),"moveTo",function(s){if(typeof s=="number"){var l=U.Children.count(i.props.children)-1;s<0&&(s=i.props.infiniteLoop?l:0),s>l&&(s=i.props.infiniteLoop?0:l),i.selectItem({selectedItem:s}),i.state.autoPlay&&i.state.isMouseEntered===!1&&i.resetAutoPlay()}}),z(D(i),"onClickNext",function(){i.increment(1)}),z(D(i),"onClickPrev",function(){i.decrement(1)}),z(D(i),"onSwipeForward",function(){i.increment(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),z(D(i),"onSwipeBackwards",function(){i.decrement(1),i.props.emulateTouch&&i.setState({cancelClick:!0})}),z(D(i),"changeItem",function(s){return function(l){(!(0,Hr.isKeyboardEvent)(l)||l.key==="Enter")&&i.moveTo(s)}}),z(D(i),"selectItem",function(s){i.setState(nt({previousItem:i.state.selectedItem},s),function(){i.setState(i.animationHandler(i.props,i.state))}),i.handleOnChange(s.selectedItem,U.Children.toArray(i.props.children)[s.selectedItem])}),z(D(i),"getInitialImage",function(){var s=i.props.selectedItem,l=i.itemsRef&&i.itemsRef[s],a=l&&l.getElementsByTagName("img")||[];return a[0]}),z(D(i),"getVariableItemHeight",function(s){var l=i.itemsRef&&i.itemsRef[s];if(i.state.hasMount&&l&&l.children.length){var a=l.children[0].getElementsByTagName("img")||[];if(a.length>0){var u=a[0];if(!u.complete){var c=function y(){i.forceUpdate(),u.removeEventListener("load",y)};u.addEventListener("load",c)}}var p=a[0]||l.children[0],h=p.clientHeight;return h>0?h:null}return null});var o={initialized:!1,previousItem:r.selectedItem,selectedItem:r.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:r.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return i.animationHandler=typeof r.animationHandler=="function"&&r.animationHandler||r.animationHandler==="fade"&&is.fadeAnimationHandler||is.slideAnimationHandler,i.state=nt(nt({},o),i.animationHandler(r,o)),i}return OS(n,[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(i,o){!i.children&&this.props.children&&!this.state.initialized&&this.setupCarousel(),!i.autoFocus&&this.props.autoFocus&&this.forceFocus(),o.swiping&&!this.state.swiping&&this.setState(nt({},this.props.stopSwipingHandler(this.props,this.state))),(i.selectedItem!==this.props.selectedItem||i.centerMode!==this.props.centerMode)&&(this.updateSizes(),this.moveTo(this.props.selectedItem)),i.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var i=this;this.bindEvents(),this.state.autoPlay&&U.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},function(){var o=i.getInitialImage();o&&!o.complete?o.addEventListener("load",i.setMountState):i.setMountState()})}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.addEventListener("mouseenter",this.stopOnHover),i.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var i=this.carouselWrapperRef;this.props.stopOnHover&&i&&(i.removeEventListener("mouseenter",this.stopOnHover),i.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,oo.default)().addEventListener("resize",this.updateSizes),(0,oo.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,io.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,oo.default)().removeEventListener("resize",this.updateSizes),(0,oo.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var i=this.getInitialImage();i&&i.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,io.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var i;(i=this.carouselWrapperRef)===null||i===void 0||i.focus()}},{key:"renderItems",value:function(i){var o=this;return this.props.children?U.Children.map(this.props.children,function(s,l){var a=l===o.state.selectedItem,u=l===o.state.previousItem,c=a&&o.state.selectedStyle||u&&o.state.prevStyle||o.state.slideStyle||{};o.props.centerMode&&o.props.axis==="horizontal"&&(c=nt(nt({},c),{},{minWidth:o.props.centerSlidePercentage+"%"})),o.state.swiping&&o.state.swipeMovementStarted&&(c=nt(nt({},c),{},{pointerEvents:"none"}));var p={ref:function(y){return o.setItemsRef(y,l)},key:"itemKey"+l+(i?"clone":""),className:kt.default.ITEM(!0,l===o.state.selectedItem,l===o.state.previousItem),onClick:o.handleClickItem.bind(o,l,s),style:c};return U.default.createElement("li",p,o.props.renderItem(s,{isSelected:l===o.state.selectedItem,isPrevious:l===o.state.previousItem}))}):[]}},{key:"renderControls",value:function(){var i=this,o=this.props,s=o.showIndicators,l=o.labels,a=o.renderIndicator,u=o.children;return s?U.default.createElement("ul",{className:"control-dots"},U.Children.map(u,function(c,p){return a&&a(i.changeItem(p),p===i.state.selectedItem,p,l.item)})):null}},{key:"renderStatus",value:function(){return this.props.showStatus?U.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,U.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return!this.props.showThumbs||!this.props.children||U.Children.count(this.props.children)===0?null:U.default.createElement(_S.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children))}},{key:"render",value:function(){var i=this;if(!this.props.children||U.Children.count(this.props.children)===0)return null;var o=this.props.swipeable&&U.Children.count(this.props.children)>1,s=this.props.axis==="horizontal",l=this.props.showArrows&&U.Children.count(this.props.children)>1,a=l&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=l&&(this.state.selectedItem<U.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,c=this.renderItems(!0),p=c.shift(),h=c.pop(),y={className:kt.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},g={};if(s){if(y.onSwipeLeft=this.onSwipeForward,y.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var S=this.getVariableItemHeight(this.state.selectedItem);g.height=S||"auto"}}else y.onSwipeUp=this.props.verticalSwipe==="natural"?this.onSwipeBackwards:this.onSwipeForward,y.onSwipeDown=this.props.verticalSwipe==="natural"?this.onSwipeForward:this.onSwipeBackwards,y.style=nt(nt({},y.style),{},{height:this.state.itemSize}),g.height=this.state.itemSize;return U.default.createElement("div",{"aria-label":this.props.ariaLabel,className:kt.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},U.default.createElement("div",{className:kt.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,a,this.props.labels.leftArrow),U.default.createElement("div",{className:kt.default.WRAPPER(!0,this.props.axis),style:g},o?U.default.createElement(kS.default,Ha({tagName:"ul",innerRef:this.setListRef},y,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&p):U.default.createElement("ul",{className:kt.default.SLIDER(!0,this.state.swiping),ref:function(v){return i.setListRef(v)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&h,this.renderItems(),this.props.infiniteLoop&&p)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}]),n}(U.default.Component);Ms.default=oc;z(oc,"displayName","Carousel");z(oc,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:Hr.noop,onClickThumb:Hr.noop,onChange:Hr.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(t,n,r){return U.default.createElement("button",{type:"button","aria-label":r,className:kt.default.ARROW_PREV(!n),onClick:t})},renderArrowNext:function(t,n,r){return U.default.createElement("button",{type:"button","aria-label":r,className:kt.default.ARROW_NEXT(!n),onClick:t})},renderIndicator:function(t,n,r,i){return U.default.createElement("li",{className:kt.default.DOT(n),onClick:t,onKeyDown:t,value:r,key:r,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(r+1)})},renderItem:function(t){return t},renderThumbs:function(t){var n=U.Children.map(t,function(r){var i=r;if(r.type!=="img"&&(i=U.Children.toArray(r.props.children).find(function(o){return o.type==="img"})),!!i)return i});return n.filter(function(r){return r}).length===0?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):n},statusFormatter:Hr.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:is.slideSwipeAnimationHandler,stopSwipingHandler:is.slideStopSwipingHandler});var NS={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Carousel",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"CarouselProps",{enumerable:!0,get:function(){return n.CarouselProps}}),Object.defineProperty(e,"Thumbs",{enumerable:!0,get:function(){return r.default}});var t=i(Ms),n=NS,r=i(Ai);function i(o){return o&&o.__esModule?o:{default:o}}})(km);function Tl({title:e,items:t}){if(t.length===1)return d.jsxs(Qf,{children:[e,d.jsx("div",{id:"picsCaroussel",children:d.jsx("div",{id:"CarouselContainer",children:t[0]})})]});const[n,r]=G.useState(0),i=()=>{r(a=>a===t.length-1?0:a+1)},o=()=>{r(a=>a===0?t.length-1:a-1)},[s,l]=G.useState(window.innerWidth);return G.useEffect(()=>{const a=()=>l(window.innerWidth);return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),d.jsxs(Qf,{children:[e,d.jsxs("div",{id:"picsCaroussel",children:[d.jsx("button",{className:"buttonCarousel buttonCarousel-prev ",onClick:o,children:"<"}),d.jsx("div",{id:"CarouselContainer",children:d.jsx(km.Carousel,{selectedItem:n,onChange:r,className:"carousel slide",infiniteLoop:!0,centerMode:!0,centerSlidePercentage:s>1250?40:s>650?50:80,showThumbs:!1,showArrows:!1,swipeable:!1,children:t.map((a,u)=>d.jsx("div",{children:a},u))})}),d.jsx("button",{className:"buttonCarousel buttonCarousel-next ",onClick:i,children:">"})]})]})}const AS=q.div`
  width: 10rem;
  height: 3.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;

  margin: 1.5rem 0;

  > #changeNumBox {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 1.6rem;
  }

  .changeNum {
    font-family: "Roboto", sans-serif;
    font-size: 2.4rem;

    margin-right: 1.4rem;

    background: none;
    border: none;
  }

  p {
    font-size: 2rem;
    margin-right: 1.4rem;
  }

  @media (max-width: ${re.xmd}) {
    .changeNum {
      font-size: 4vw;
      margin-right: 2rem;
    }
    p {
      font-size: 4vw;
      margin-right: 2rem;
    }
  }
`;function Tm({id:e}){const[t,n]=E.useState(0),{cartUpdated:r,setCartUpdated:i}=E.useContext(nc);async function o(){try{const u=(await fe.get(`/dishes/${e}`,{withCredentials:!0})).data;if(t>0)return await fe.post("/cart",{amount:t,id:e},{withCredentials:!0}),n(0),i(c=>!c),alert(`${t} ${u.title} added to your shopping cart`)}catch(a){return console.error(a)}}function s(){if(t>0)return n(a=>a-1)}function l(){return n(a=>a+1)}return E.useEffect(()=>{localStorage.setItem("amount",t)},[t]),d.jsx(AS,{children:d.jsxs("div",{id:"changeNumBox",children:[d.jsx("button",{className:"changeNum",onClick:s,children:"-"}),d.jsx("p",{children:t}),d.jsx("button",{className:"changeNum",onClick:l,children:"+"}),d.jsx(Lt,{id:"buyButton",title:"Buy",onClick:o})]})})}const zS=q.div`
  width: 32.4rem;
  height: 50.2rem;

  padding: 0 6.4rem;

  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({theme:e})=>e.COLORS.DARK_200};

  position: relative;

  > .editFavIcons {
    position: absolute;

    top: 1.6rem;
    right: 1.8rem;

    background: none;
    border: none;

    > svg {
      height: 2vw;
    }
  }

  > a {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    > #imgContainer {
      width: 17.6rem;
      height: 17.6rem;

      margin-top: 2.4rem;

      img {
        object-fit: cover;

        width: 17.6rem;
        height: 17.6rem;

        border-radius: 50%;
      }
    }

    > h1 {
      font-size: 2vw;
      font-weight: bold;
      line-height: 3rem;

      margin-top: 1.5rem;
    }

    > p {
      font-family: "Roboto", sans-serif;
      font-size: 1.4rem;

      margin-top: 1rem;

      text-align: center;
    }
  }

  > span {
    margin-top: 1.5rem;

    font-family: "Roboto", sans-serif;
    font-size: 3.2rem;
    color: ${({theme:e})=>e.COLORS.CAKE_200};
  }

  #buyAmountBox {
    width: 10rem;
    height: 3.8rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Roboto", sans-serif;

    margin: 3rem 0 0;
  }

  @media (max-width: ${re.xmd}) {
    width: 50.4rem;
    height: 60.2rem;
    padding: 0 2vw;

    .editFavIcons > svg {
      height: 4vw;
    }

    a {
      h1 {
        font-size: 4vw;
        line-height: 5rem;
      }

      p {
        font-size: 2.3vw;
        margin-bottom: 2vw;
      }
    }

    span {
      font-size: 4vw;
      margin-bottom: 2vw;
    }
    div > div {
      margin-right: 5vw;
    }

    button {
      font-size: 3vw;
    }
  }
`,Lm="/foodexplorer_frontend/assets/img-placeholder-d1894e8e.png";function DS(e,t){return e.length<=t?e:e.slice(0,t)+"..."}function Ll({id:e,avatar:t,picName:n,description:r,price:i}){const{user:o}=Rr(),[s,l]=E.useState(""),[a,u]=E.useState([]),c=DS(r,88),p=t?`${fe.defaults.baseURL}/files/${t}`:Lm;async function h(){try{s?(await fe.delete(`/favorites/${e}`,{withCredentials:!0}),u(y=>y.filter(g=>g.dishes_id!==e))):await fe.post(`/favorites/${e}`,{withCredentials:!0}),l(!s)}catch(y){console.error(y)}}return E.useEffect(()=>{async function y(){try{const g=await fe.get(`/favorites/${o.id}`,{withCredentials:!0});for(let S of g.data)u(R=>[...R,S])}catch(g){console.error(g)}}y()},[e,o.id,s]),d.jsxs(zS,{children:[o.role===an.ADMIN?d.jsx(on,{to:`/edit/${e}`,className:"editFavIcons",children:d.jsx("svg",{id:"editIcon",width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M13.7514 4.81033L21.1896 12.2486M7.99997 25H2.06262C1.7808 25 1.51052 24.888 1.31124 24.6888C1.11196 24.4895 1.00001 24.2192 1.00001 23.9374V18C0.999523 17.8621 1.02626 17.7253 1.07868 17.5977C1.1311 17.4701 1.20818 17.354 1.30551 17.2562L17.2447 1.31701C17.3436 1.21661 17.4614 1.13687 17.5914 1.08245C17.7214 1.02803 17.8609 1 18.0018 1C18.1427 1 18.2822 1.02803 18.4122 1.08245C18.5422 1.13687 18.66 1.21661 18.7589 1.31701L24.683 7.24107C24.7834 7.33995 24.8631 7.45781 24.9175 7.58779C24.972 7.71777 25 7.85727 25 7.99819C25 8.1391 24.972 8.27861 24.9175 8.40859C24.8631 8.53857 24.7834 8.65642 24.683 8.7553L8.7438 24.6945C8.64599 24.7918 8.52994 24.8689 8.40231 24.9213C8.27467 24.9737 8.13795 25.0005 7.99997 25Z",stroke:"#E1E1E6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}):d.jsx(on,{className:"editFavIcons",children:d.jsx("svg",{id:"favoriteIcon",width:"26",height:"24",viewBox:"0 0 26 24",fill:a.some(y=>y.dishes_id===e)?"#E1E1E6":"none",xmlns:"http://www.w3.org/2000/svg",onClick:h,children:d.jsx("path",{d:"M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z",stroke:(a.some(y=>y.dishes_id===e),"#E1E1E6"),strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsxs(on,{to:`/details/${e}`,children:[d.jsx("div",{id:"imgContainer",children:d.jsx("img",{src:p,alt:n})}),d.jsx("h1",{children:n}),d.jsx("p",{children:c})]}),d.jsxs("span",{children:["$",i]}),o.role!==an.ADMIN?d.jsx("div",{id:"buyAmountBox",children:d.jsx(Tm,{id:e})}):d.jsx(d.Fragment,{})]})}const MS="/foodexplorer_frontend/assets/macarons-f43505cd.png";function jm(){const[e,t]=E.useState([]),[n,r]=E.useState([]),[i,o]=E.useState([]),{search:s,setSearch:l}=E.useContext(Ls);function a(){l("")}return E.useEffect(()=>{fe.get(`dishes?search=${s}&category=meal`,{withCredentials:!0}).then(u=>{const p=u.data.map(h=>d.jsx(Ll,{id:h.id,avatar:h.avatar,picName:h.title,description:h.description,price:h.price,amount:h.amount},h.id));t(p)}),fe.get(`dishes?search=${s}&category=dessert`,{withCredentials:!0}).then(u=>{const p=u.data.map(h=>d.jsx(Ll,{id:h.id,avatar:h.avatar,picName:h.title,description:h.description,price:h.price,amount:h.amount},h.id));r(p)}),fe.get(`dishes?search=${s}&category=drink`,{withCredentials:!0}).then(u=>{const p=u.data.map(h=>d.jsx(Ll,{id:h.id,avatar:h.avatar,picName:h.title,description:h.description,price:h.price,amount:h.amount},h.id));o(p)})},[s]),d.jsxs(kw,{children:[d.jsx(Ds,{}),d.jsxs("main",{children:[d.jsxs(_w,{children:[d.jsxs("div",{id:"banner",children:[d.jsx("img",{src:MS,alt:"macarons and berries"}),d.jsxs("div",{id:"textContainer",children:[d.jsx("h1",{children:"Unbeatable flavors"}),d.jsx("p",{children:"Feel the care of the preparation with selected ingredients"})]})]}),s&&d.jsxs("div",{id:"searchFilter",children:[d.jsx("h3",{children:"Remove the search filter:"}),d.jsxs("button",{onClick:a,children:[d.jsx(tc,{}),s]})]}),e.length>0&&d.jsx(Tl,{title:"Meals",items:e}),i.length>0&&d.jsx(Tl,{title:"Drinks",items:i}),n.length>0&&d.jsx(Tl,{title:"Desserts",items:n})]}),d.jsx(Ii,{})]})]})}const $S=q.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    width: 100%;
    height: auto;
    grid-area: "content";
    overflow-y: auto;
  }
  @media (max-width: ${re.lg}) {
    main {
      display: flex;
      flex-direction: column;

      > footer {
        padding: 5vw 4vw;
        margin-top: 100vw;
      }
    }
  }
`,FS=q.div`
  display: flex;
  flex-direction: column;

  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;

    display: flex;
    align-items: center;

    gap: 1rem;

    > span {
      font-weight: 100;
      font-size: 4.4rem;

      padding-top: 0.5rem;
    }
  }

  #itemContainer {
    height: 40rem;

    margin: 4.2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10.7rem;

    > #imgItemContainer {
      width: 40rem;
      height: 40rem;

      > img {
        object-fit: cover;

        width: 40rem;
        height: 40rem;

        border-radius: 50%;
      }
    }

    > #aboutItemContainer {
      width: 100%;
      display: flex;
      flex-direction: column;

      > h1 {
        font-size: 4rem;
      }

      > p {
        font-family: "Poppins", sans-serif;
        font-size: 2rem;
        text-align: justify;
      }

      > #tagsContainer {
        display: flex;

        > span {
          display: inline-block;
          margin-top: 2.4rem;
        }
      }
      > #addItemsContainer {
        height: 4.8rem;
        width: 100%;

        margin-top: 4.8rem;

        display: flex;
        align-items: center;

        /* > button:first-of-type {
          width: 11rem;
        }

        > button:last-of-type {
          margin-left: 3.2rem;
          background-color: ${({theme:e})=>e.COLORS.DARK_600};
        } */
      }
    }
  }

  @media (max-width: ${re.lg}) {
    #itemContainer {
      padding-top: 60rem;
      flex-direction: column;

      #imgItemContainer {
        text-align: center;
        width: 30vw;
        height: 30vw;

        > img {
          width: 30vw;
          height: 30vw;
        }
      }

      #aboutItemContainer {
        text-align: center;

        h1 {
          font-size: 6vw;
          margin-bottom: 2vw;
        }

        p {
          font-size: 3vw;
          text-align: center;
        }
        > #tagsContainer {
          margin: 3vw 0;
          flex-wrap: wrap;
          > span {
            font-size: 3vw;
          }
        }
        #addItemsContainer {
          justify-content: space-between;

          div:first-of-type {
            height: 20vw;
            width: 20vw;
            > button {
              font-size: 2.5vw;
            }
            > p {
              font-size: 4vw;
            }
          }
        }
      }
    }

    @media (max-width: ${re.xmd}) {
      #backButton {
        font-size: 4vw;
      }
    }
  }
`,bS=q.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;

  border-radius: 0.5rem;
  padding: 0.4rem 0.8rem;
  margin-right: 1.2rem;

  background-color: ${({theme:e})=>e.COLORS.DARK_1000};
`;function US({title:e}){return d.jsx(bS,{children:e})}function Im(){const{id:e}=Rh(),{user:t}=Rr(),[n,r]=E.useState(null),[i,o]=E.useState(null);return E.useEffect(()=>{async function s(){const a=(await fe.get(`/dishes/${e}`,{withCredentials:!0})).data;r(a);const u=a.avatar?`${fe.defaults.baseURL}/files/${a.avatar}`:Lm;o(u)}s()},[]),n?d.jsxs($S,{children:[d.jsx(Ds,{}),d.jsxs("main",{children:[d.jsxs(FS,{children:[d.jsxs(on,{to:"/",id:"backButton",children:[d.jsx("span",{children:"<"})," back"]}),d.jsxs("div",{id:"itemContainer",children:[d.jsx("div",{id:"imgItemContainer",children:d.jsx("img",{src:i,alt:n.title})}),d.jsxs("div",{id:"aboutItemContainer",children:[d.jsx("h1",{children:n.title}),d.jsx("p",{children:n.description}),d.jsx("div",{id:"tagsContainer",children:n.tags&&n.tags.map((s,l)=>d.jsx(US,{title:s.name},l))}),t.role!==an.ADMIN?d.jsx("div",{id:"addItemsContainer",children:d.jsx(Tm,{id:e})}):d.jsx(d.Fragment,{})]})]})]}),d.jsx(Ii,{})]})]}):null}function id(){return d.jsx(qh,{children:d.jsx(bw,{children:d.jsxs(Bu,{children:[d.jsx(Pt,{path:"/",element:d.jsx(jm,{})}),d.jsx(Pt,{path:"/details/:id",element:d.jsx(Im,{})})]})})})}const BS=q.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: "content";
    overflow-y: auto;
  }
`,HS=q.form`
  width: 100%;
  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;

    display: inline-flex;
    align-items: center;

    gap: 1rem;

    > span {
      font-weight: 100;
      font-size: 4.4rem;

      padding-top: 0.5rem;
    }
  }

  #addDishContainer {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    margin-top: 2.4rem;
  }

  p {
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    margin: 3.2rem 0 1.6rem;
  }

  input:not(#TagsContainer input),
  textArea,
  select,
  label {
    border: none;
    border-radius: 0.8rem;
    background: ${({theme:e})=>e.COLORS.DARK_800};

    &:focus {
      outline: none;
    }
  }

  .rows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    label {
      padding: 1.2rem 2.5vw;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      cursor: pointer;

      > svg {
        font-size: 2.4rem;
      }

      > p {
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
        font-size: 1.4rem;
        margin: 0;
      }
    }

    input[type="file"] {
      display: none;
    }

    #dishNameBox > input {
      width: clamp(20vw, 30vw, 46vw);

      padding: 1.6rem 0 1.6rem 1.4rem;
    }

    #dishCategory > select {
      width: clamp(10vw, 20vw, 30vw);
      padding: 1.3rem 1.4rem;
      color: ${({theme:e})=>e.COLORS.LIGHT_400};

      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
    }

    #TagsContainer {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      width: clamp(20vw, 55vw, 70vw);

      overflow-x: auto;

      border-radius: 0.8rem;
      background: ${({theme:e})=>e.COLORS.DARK_800};
    }

    #priceBox > input {
      padding: 1.6rem 1.4rem;
    }
  }

  textarea {
    width: 100%;
    height: 20rem;
    resize: none;
    padding: 1.4rem;
  }

  #saveBtn {
    width: 10rem;
    margin: 3.2rem 0;
    padding: 1.2rem 2.4rem;
    align-self: flex-end;
  }

  @media (max-width: ${re.sm}) {
    display: flex;
    flex-direction: column;

    #backButton {
      font-size: 4vw;
      margin: 4vw 0 2vw;
      > span {
        font-size: 7vw;
      }
    }

    h1 {
      font-size: 5.5vw;
      margin-top: 0;
    }

    .rows {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      input,
      textArea,
      select,
      label,
      #dishNameBox > input,
      #dishCategory > select,
      #TagsContainer {
        height: 8vw;
        width: 100%;
      }

      #TagsContainer {
        height: auto;
        > div {
          width: 30vw;
          > input {
            font-size: 3vw;
          }
        }
      }

      label {
        padding: 0 3vw;

        justify-content: flex-start;

        > svg {
          font-size: 5vw;
        }

        > p {
          font-size: 3vw;
        }
      }

      #dishCategory > select,
      input::placeholder,
      input {
        font-size: 3vw;
      }

      > div {
        width: 100%;
      }

      p {
        font-size: 4vw;
      }
    }
    textarea::placeholder,
    textarea,
    p {
      font-size: 3vw;
    }

    #saveBtn {
      width: 20vw;
      height: 7vw;
      margin-bottom: 7vw;

      font-size: 3vw;
    }
  }

  @media (max-width: ${re.xlg}) {
    #TagsContainer {
      > div {
        width: 15vw;
      }
    }
    #priceBox {
      > input {
        width: 15vw;
      }
    }
  }
`,WS=q.div`
  display: flex;
  align-items: center;

  width: clamp(18%, 20%, 30%);

  margin: 0.8rem 0.8rem;
  background: ${({theme:e,$isnew:t})=>t?"transparent":e.COLORS.LIGHT_600};

  border: ${({theme:e,$isnew:t})=>t?`1px dashed ${e.COLORS.LIGHT_600}`:"none"};
  border-radius: 0.8rem;

  button {
    display: flex;
    align-items: center;
    margin-right: 1.6rem;

    background: none;
    border: none;
  }

  input {
    width: 100%;
    height: 2.2rem;

    background: ${({theme:e,$isnew:t})=>t?"transparent":e.COLORS.LIGHT_600};
    color: ${({theme:e})=>e.COLORS.LIGHT_100};

    padding: 1.2rem;
    border: none;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }
  }
`;function ss({isNew:e=!1,value:t,onClick:n,onChange:r,...i}){return d.jsxs(WS,{$isnew:e,children:[d.jsx("input",{type:"text",value:t,readOnly:!e,onChange:r,...i}),d.jsx("button",{onClick:n,type:"button",children:e?d.jsx(Mw,{}):d.jsx(tc,{})})]})}function Nm(){const[e,t]=E.useState(null),[n,r]=E.useState(null),[i,o]=E.useState("");function s(a){const u=a.target.files[0];if(u){const c=URL.createObjectURL(u);t(c),r(u),o(u.name)}}async function l(a){if(n){const u=new FormData;u.append("avatar",n),await fe.patch(`/dishes/avatar/${a}`,u,{withCredentials:!0})}}return{avatar:e,avatarFile:n,avatarFileName:i,handleChangeAvatar:s,handleUpdateAvatar:l}}function VS(){const{avatarFile:e,avatarFileName:t,handleChangeAvatar:n,handleUpdateAvatar:r}=Nm(),[i,o]=E.useState(""),[s,l]=E.useState("meal"),[a,u]=E.useState(""),[c,p]=E.useState(""),[h,y]=E.useState([]),[g,S]=E.useState(""),R=kr();function v(){y(w=>[...w,g]),S("")}function f(w){y(x=>x.filter(C=>C!==w))}async function m(w){if(w.preventDefault(),g)return alert("You have to press the '+' to add a tag");if(!i||!s||!a||!c||h.length===0)return alert("Please, fill in all fields and try again!");try{const C=(await fe.post("/dishes",{title:i,category:s,description:a,price:c,tags:h},{withCredentials:!0})).data.dishes_id;await r(C),alert("Item was registered succesfully!"),R("/")}catch(x){console.log(x),alert("It's not possible to register the item. Try to sign out and login again")}}return d.jsxs(BS,{children:[d.jsx(Ds,{}),d.jsxs("main",{children:[d.jsxs(HS,{children:[d.jsxs(on,{to:"/",id:"backButton",children:[d.jsx("span",{children:"<"})," back"]}),d.jsx("h1",{children:"Add dish"}),d.jsxs("div",{id:"addDishContainer",children:[d.jsxs("div",{className:"rows",children:[d.jsxs("div",{id:"imgPictureBox",children:[d.jsx("p",{children:"Picture"}),d.jsx("label",{htmlFor:"selectImg",children:e?t:d.jsxs(d.Fragment,{children:[d.jsx(Em,{})," ",d.jsx("p",{children:"select picture"})]})}),d.jsx("input",{id:"selectImg",type:"file",accept:"image/*",onChange:w=>n(w)})]}),d.jsxs("div",{id:"dishNameBox",children:[d.jsx("p",{children:"Name"}),d.jsx("input",{type:"text",placeholder:"Ex: Caesar salad",onChange:w=>o(w.target.value),value:i})]}),d.jsxs("div",{id:"dishCategory",children:[d.jsx("p",{children:"Category"}),d.jsxs("select",{onChange:w=>l(w.target.value),children:[d.jsx("option",{children:"meal"}),d.jsx("option",{children:"dessert"}),d.jsx("option",{children:"drink"})]})]})]}),d.jsxs("div",{className:"rows",children:[d.jsxs("div",{id:"ingredientsTagBox",children:[d.jsx("p",{children:"Ingredients"}),d.jsxs("div",{id:"TagsContainer",children:[h.map((w,x)=>d.jsx(ss,{value:w,onChange:C=>S(C.target.value),onClick:()=>f(w)},String(x))),d.jsx(ss,{value:g,isNew:!0,placeholder:"new tag",onChange:w=>S(w.target.value),onClick:v})]})]}),d.jsxs("div",{id:"priceBox",children:[d.jsx("p",{children:"Price"}),d.jsx("input",{type:"text",placeholder:"$00,00",onChange:w=>p(w.target.value),value:c})]})]}),d.jsx("p",{children:"Description"}),d.jsx("textarea",{placeholder:"Information about the dish with ingredients and composition. Maximum of 250 characters",onChange:w=>u(w.target.value),value:a,maxLength:250}),d.jsx(Lt,{id:"saveBtn",title:"Save",onClick:m})]})]}),d.jsx(Ii,{})]})]})}const KS=q.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 12.4rem auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: "content";
    overflow-y: auto;
  }
`,GS=q.form`
  width: 100%;
  padding: 0 12rem;

  #backButton {
    font-family: "Poppins", sans-serif;
    font-size: 2.4rem;

    margin-top: 2.4rem;

    display: inline-flex;
    align-items: center;

    gap: 1rem;

    > span {
      font-weight: 100;
      font-size: 4.4rem;

      padding-top: 0.5rem;
    }
  }

  #addDishContainer {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${({theme:e})=>e.COLORS.LIGHT_300};
    margin-top: 2.4rem;
  }

  p {
    color: ${({theme:e})=>e.COLORS.LIGHT_400};
    margin: 3.2rem 0 1.6rem;
  }

  input:not(#TagsContainer input),
  textArea,
  select,
  label {
    border: none;
    border-radius: 0.8rem;
    background: ${({theme:e})=>e.COLORS.DARK_800};

    &:focus {
      outline: none;
    }
  }

  .rows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    label {
      padding: 1.2rem 2.5vw;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      cursor: pointer;

      > svg {
        font-size: 2.4rem;
      }

      > p {
        font-family: "Poppins", sans-serif;
        white-space: nowrap;
        font-size: 1.4rem;
        margin: 0;
      }
    }

    input[type="file"] {
      display: none;
    }

    #dishNameBox > input {
      width: clamp(20vw, 30vw, 46vw);

      padding: 1.6rem 0 1.6rem 1.4rem;
    }

    #dishCategory > select {
      width: clamp(10vw, 20vw, 30vw);
      padding: 1.3rem 1.4rem;
      color: ${({theme:e})=>e.COLORS.LIGHT_400};

      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
    }

    #TagsContainer {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      width: clamp(20vw, 55vw, 70vw);

      overflow-x: auto;

      border-radius: 0.8rem;
      background: ${({theme:e})=>e.COLORS.DARK_800};
    }

    #priceBox > input {
      padding: 1.6rem 1.4rem;
    }
  }

  textarea {
    width: 100%;
    height: 20rem;
    resize: none;
    padding: 1.4rem;
  }

  .editButtons {
    display: flex;
    align-self: flex-end;

    .Btn {
      width: 10vw;
      margin: 3.2rem 0;
      padding: 1.2rem 2.4rem;

      font-size: 1vw;
    }

    .remove {
      width: 15vw;
      margin-right: 1.5rem;
      background: ${({theme:e})=>e.COLORS.DARK_600};
    }
  }

  @media (max-width: ${re.xlg}) {
    #TagsContainer {
      > div {
        width: 16vw;
      }
    }
    #priceBox {
      > input {
        width: 15vw;
      }
    }
    .editButtons {
      .Btn {
        font-size: 1.5vw;
      }
    }
  }

  @media (max-width: ${re.sm}) {
    display: flex;
    flex-direction: column;

    #backButton {
      font-size: 4vw;
      margin: 4vw 0 2vw;
      > span {
        font-size: 7vw;
      }
    }

    h1 {
      font-size: 5.5vw;
      margin-top: 0;
    }

    .rows {
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      input,
      textArea,
      select,
      label,
      #dishNameBox > input,
      #dishCategory > select,
      #TagsContainer {
        height: 8vw;
        width: 100%;
      }

      #TagsContainer {
        height: auto;
        > div {
          width: 30vw;
          > input {
            font-size: 3vw;
          }
        }
      }

      label {
        padding: 0 3vw;

        justify-content: flex-start;

        > svg {
          font-size: 5vw;
        }

        > p {
          font-size: 3vw;
        }
      }

      #dishCategory > select,
      input::placeholder,
      input {
        font-size: 3vw;
      }

      > div {
        width: 100%;
      }

      p {
        font-size: 4vw;
      }
    }
    textarea::placeholder,
    textarea,
    p {
      font-size: 3vw;
    }

    #saveBtn {
      width: 20vw;
      height: 7vw;
      margin-bottom: 7vw;
    }

    .editButtons {
      .Btn {
        font-size: 3vw;
        width: 20vw;
        margin: 7vw 0;
        height: 7vw;
      }

      .remove {
        width: 25vw;
        margin-right: 5vw;
      }
    }
  }
`;function QS(){const{avatarFile:e,avatarFileName:t,handleChangeAvatar:n,handleUpdateAvatar:r}=Nm(),[i,o]=E.useState(""),[s,l]=E.useState(""),[a,u]=E.useState([]),[c,p]=E.useState(""),[h,y]=E.useState(""),[g,S]=E.useState(""),{id:R}=Rh(),v=kr();function f(){p(""),u(C=>[...C,c]),p("")}function m(C){u(_=>_.filter(O=>O!==C))}async function w(C){if(C.preventDefault(),c)return alert("You have to press the '+' to add a tag");if(!i||!s||!g||!h||a.length===0)return alert("Please, fill in all fields and try again!");try{await fe.put(`/dishes/${R}`,{title:i,category:s,description:g,price:h,tags:a},{withCredentials:!0}),await r(R),alert("Item was updated succesfully!"),v("/")}catch(_){console.log(_),alert("It's not possible to update the item. Try to sign out and login again")}}async function x(C){C.preventDefault();try{confirm("Are you sure you want to remove this item?")&&(await fe.delete(`/dishes/${R}`,{withCredentials:!0}),alert("Item was removed succesfully!"),v("/"))}catch(_){return console.log(_),alert("It's not possible to remove this item. Try to sign out and login again")}}return E.useEffect(()=>{fe.get(`/dishes/${R}`).then(C=>{o(C.data.title),l(C.data.category),u(C.data.tags),y(C.data.price),S(C.data.description)}).catch(C=>console.error(C))},[]),d.jsxs(KS,{children:[d.jsx(Ds,{}),d.jsxs("main",{children:[d.jsxs(GS,{children:[d.jsxs(on,{to:"/",id:"backButton",children:[d.jsx("span",{children:"<"})," back"]}),d.jsx("h1",{children:"Edit dish"}),d.jsxs("div",{id:"addDishContainer",children:[d.jsxs("div",{className:"rows",children:[d.jsxs("div",{id:"imgPictureBox",children:[d.jsx("p",{children:"Picture"}),d.jsx("label",{htmlFor:"selectImg",children:e?t:d.jsxs(d.Fragment,{children:[d.jsx(Em,{})," ",d.jsx("p",{children:"select picture"})]})}),d.jsx("input",{id:"selectImg",type:"file",accept:"image/*",onChange:C=>n(C)})]}),d.jsxs("div",{id:"dishNameBox",children:[d.jsx("p",{children:"Name"}),d.jsx("input",{type:"text",placeholder:"Ex: Caesar salad",value:i,onChange:C=>o(C.target.value)})]}),d.jsxs("div",{id:"dishCategory",children:[d.jsx("p",{children:"Category"}),d.jsxs("select",{value:s,onChange:C=>l(C.target.value),children:[d.jsx("option",{value:"meal",children:"meal"}),d.jsx("option",{value:"dessert",children:"dessert"}),d.jsx("option",{value:"drink",children:"drink"})]})]})]}),d.jsxs("div",{className:"rows",children:[d.jsxs("div",{id:"ingredientsTagBox",children:[d.jsx("p",{children:"Ingredients"}),d.jsxs("div",{id:"TagsContainer",children:[a.map((C,_)=>d.jsx(ss,{value:C.name?C.name:C,onClick:()=>m(C)},String(_))),d.jsx(ss,{value:c,isNew:!0,placeholder:"new tag",onChange:C=>p(C.target.value),onClick:f})]})]}),d.jsxs("div",{id:"priceBox",children:[d.jsx("p",{children:"Price"}),d.jsx("input",{type:"text",placeholder:"$00,00",value:h,onChange:C=>y(C.target.value)})]})]}),d.jsx("p",{children:"Description"}),d.jsx("textarea",{placeholder:"Information about the dish with ingredients and composition. Maximum of 250 characters",value:g,onChange:C=>S(C.target.value),maxLength:250}),d.jsxs("div",{className:"editButtons",children:[d.jsx(Lt,{className:"Btn remove",title:"Delete dish",onClick:x}),d.jsx(Lt,{className:"Btn",title:"Save",onClick:w})]})]})]}),d.jsx(Ii,{})]})]})}function YS(){return d.jsx(qh,{children:d.jsxs(Bu,{children:[d.jsx(Pt,{path:"/",element:d.jsx(jm,{})}),d.jsx(Pt,{path:"/add",element:d.jsx(VS,{})}),d.jsx(Pt,{path:"/edit/:id",element:d.jsx(QS,{})}),d.jsx(Pt,{path:"/details/:id",element:d.jsx(Im,{})})]})})}const XS=q.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-right: 17%;

    > img {
      width: 4.7rem;
      height: 4.7rem;
    }

    > p {
      font-size: 4.2rem;
      font-weight: 700;
    }
  }

  #userInfoBox {
    width: 32%;

    display: flex;
    flex-direction: column;

    padding: 6.4rem;

    border-radius: 1.6rem;

    background: ${({theme:e})=>e.COLORS.DARK_600};

    h1 {
      text-align: center;
    }

    p {
      margin: 3.2rem 0 0.8rem;
    }

    button:first-of-type {
      margin-top: 3.2rem;
      padding: 1.2rem 0;
    }

    a {
      text-align: center;
      font-size: 1.4rem;
      margin-top: 3.2rem;
    }
  }

  @media (max-width: ${re.md}) {
    display: flex;
    flex-direction: column;

    #logo {
      margin: 3vw 0 0 0;
    }

    #userInfoBox {
      width: 60%;

      padding: 2vw;

      background: none;

      div {
        height: 7vw;
      }

      h1 {
        font-size: 3vw;
      }

      a,
      p {
        margin: 2.2rem 0 0.8rem;
        font-size: 2vw;
      }
      button:first-of-type {
        padding: 3.5vw 0;
        margin-top: 5vw;
      }
    }
  }

  @media (max-width: ${re.sm}) {
    #userInfoBox {
      h1 {
        font-size: 5vw;
      }

      a,
      p {
        font-size: 3vw;
      }

      button {
        padding-top: 10rem;
        height: 7vw;
        font-size: 3vw;
      }
    }
  }
`;function qS(){const[e,t]=E.useState(""),[n,r]=E.useState(""),{signIn:i}=Rr();function o(){i({email:e,password:n})}return d.jsxs(XS,{children:[d.jsxs("div",{id:"logo",children:[d.jsx("img",{src:ec,alt:"foodexplorer logo"}),d.jsx("p",{children:"food explorer"})]}),d.jsxs("form",{id:"userInfoBox",children:[d.jsx("h1",{children:"Sign in"}),d.jsx("p",{children:"Email"}),d.jsx(Tn,{type:"email",onChange:s=>t(s.target.value)}),d.jsx("p",{children:"Password"}),d.jsx(Tn,{type:"password",onChange:s=>r(s.target.value)}),d.jsx(Lt,{title:"Sign in",onClick:o}),d.jsx(on,{to:"/register",children:"create an account"})]})]})}const JS=q.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  #logo {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    margin-right: 17%;

    > img {
      width: 4.7rem;
      height: 4.7rem;
    }

    > p {
      font-size: 4.2rem;
      font-weight: 700;
    }
  }

  #userInfoBox {
    display: flex;
    flex-direction: column;

    padding: 6.4rem;

    border-radius: 1.6rem;

    background: ${({theme:e})=>e.COLORS.DARK_600};

    h1 {
      text-align: center;
    }

    p {
      margin: 3.2rem 0 0.8rem;
    }

    button:first-of-type {
      margin-top: 3.2rem;
      padding: 1.2rem 0;
    }

    a {
      text-align: center;
      font-size: 1.4rem;
      margin-top: 3.2rem;
    }
  }
  @media (max-width: ${re.md}) {
    display: flex;
    flex-direction: column;

    #logo {
      margin: 3vw 0 0 0;
    }

    #userInfoBox {
      width: 60%;

      padding: 2vw;

      background: none;

      div {
        height: 7vw;
      }

      h1 {
        font-size: 3vw;
      }

      a,
      p {
        margin: 2.2rem 0 0.8rem;
        font-size: 2vw;
      }
      button:first-of-type {
        padding: 3.5vw 0;
        margin-top: 5vw;
      }
    }
  }

  @media (max-width: ${re.sm}) {
    #userInfoBox {
      h1 {
        font-size: 5vw;
      }

      a,
      p {
        font-size: 3vw;
      }

      button {
        padding-top: 10rem;
        height: 7vw;
        font-size: 3vw;
      }
    }
  }
`;function ZS(){const[e,t]=E.useState(""),[n,r]=E.useState(""),[i,o]=E.useState(""),s=kr();function l(){if(!e||!n||!i)return alert("All fields must be filled");fe.post("/users",{name:e,email:n,password:i}).then(()=>{alert("User was successfully registered!"),s("/")}).catch(a=>{a.response?alert(a.response.data.message):alert("It's not possible to register")})}return d.jsxs(JS,{children:[d.jsxs("div",{id:"logo",children:[d.jsx("img",{src:ec,alt:"foodexplorer logo"}),d.jsx("p",{children:"food explorer"})]}),d.jsxs("form",{id:"userInfoBox",children:[d.jsx("h1",{children:"Create an account"}),d.jsx("p",{children:"Name"}),d.jsx(Tn,{type:"text",onChange:a=>t(a.target.value)}),d.jsx("p",{children:"Email"}),d.jsx(Tn,{type:"email",onChange:a=>r(a.target.value)}),d.jsx("p",{children:"Password"}),d.jsx(Tn,{type:"password",onChange:a=>o(a.target.value)}),d.jsx(Lt,{title:"Sign up",onClick:l}),d.jsx(on,{to:"/",children:"already have an account"})]})]})}function ex(){return d.jsxs(Bu,{children:[d.jsx(Pt,{path:"/",element:d.jsx(qS,{})}),d.jsx(Pt,{path:"/register",element:d.jsx(ZS,{})})]})}function tx(){const{user:e,loading:t}=Rr();if(t)return d.jsx("div",{children:"Loading..."});function n(){switch(e.role){case an.ADMIN:return d.jsx(YS,{});case an.CUSTOMER:return d.jsx(id,{});default:return d.jsx(id,{})}}return d.jsx(ey,{children:e?d.jsx(n,{}):d.jsx(ex,{})})}const nx={COLORS:{LIGHT_100:"#FFFFFF",LIGHT_200:"#FFFAF1",LIGHT_300:"#E1E1E6",LIGHT_400:"#C4C4CC",LIGHT_500:"#7C7C8A",LIGHT_600:"#76797B",LIGHT_700:"#4D585E",DARK_100:"#000405",DARK_200:"#00070A",DARK_300:"#000204",DARK_400:"#000A0F",DARK_500:"#000C12",DARK_600:"#00111A",DARK_700:"#001119",DARK_800:"#0D161B",DARK_900:"#0D1D25",DARK_1000:"#192227",GRADIENT_100:"linear-gradient(180deg, rgba(0,10,15,27.25%), rgba(0,10,15,100%))",GRADIENT_200:"linear-gradient(180deg, rgba(9,30,38,100%), rgba(0,19,28,100%))",TOMATO_100:"#750310",TOMATO_200:"#92000E",TOMATO_300:"#AB222E",TOMATO_400:"#AB4D55",CARROT_100:"#FBA94C",MINT_100:"#04D361",CAKE_100:"#065E7C",CAKE_200:"#82F3FF"}},rx=Ew`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
  
    }

    :root{
    font-size:62.5%;
    }

    body{
        background-color: ${({theme:e})=>e.COLORS.DARK_400};

        font-family: 'Roboto', sans-serif;
        color:${({theme:e})=>e.COLORS.LIGHT_100};
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;

        input, textarea{
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            color:${({theme:e})=>e.COLORS.LIGHT_500};
        }
        
        h1, h2, a, button{
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            color:${({theme:e})=>e.COLORS.LIGHT_100};
        }
    }
    
    a{
        text-decoration:none;
    }

    button, a{
        cursor:pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter:brightness(.8)
    }

    @media (max-width: ${re.lg}) {
        :root{
             font-size:1vw;
        }
    }

`;jl.createRoot(document.getElementById("root")).render(d.jsx(G.StrictMode,{children:d.jsxs(Sw,{theme:nx,children:[d.jsx(rx,{}),d.jsx(S1,{children:d.jsx(tx,{})})]})}));
