/*! For license information please see 28f713ee.e4ce5305.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1085:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=b(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=b(t),f=n,h=l["".concat(o,".").concat(f)]||l[f]||s[f]||c;return t?a.a.createElement(h,i(i({ref:r},p),{},{components:t})):a.a.createElement(h,i({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1086:function(e,r,t){"use strict";e.exports=t(1087)},1087:function(e,r,t){"use strict";var n=t(1088),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,l=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,h=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function y(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||O}function k(){}function v(e,r,t){this.props=e,this.context=r,this.refs=j,this.updater=t||O}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=y.prototype;var _=v.prototype=new k;_.constructor=v,n(_,y.prototype),_.isPureReactComponent=!0;var N={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,a={},o=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(o=""+r.key),r)w.call(r,n)&&!S.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var p=Array(u),b=0;b<u;b++)p[b]=arguments[b+2];a.children=p}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:N.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var P=/\/+/g,G=[];function E(e,r,t,n){if(G.length){var a=G.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>G.length&&G.push(e)}function $(e,r,t,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return t(n,e,""===r?"."+T(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var p=r+T(a=e[u],u);i+=$(a,p,t,n)}else if(null===e||"object"!=typeof e?p=null:p="function"==typeof(p=g&&e[g]||e["@@iterator"])?p:null,"function"==typeof p)for(e=p.call(e),u=0;!(a=e.next()).done;)i+=$(a=a.value,p=r+T(a,u++),t,n);else if("object"===a)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function D(e,r,t){return null==e?0:$(e,"",r,t)}function T(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function M(e,r){e.func.call(e.context,r,e.count++)}function L(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?A(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),n.push(e))}function A(e,r,t,n,a){var c="";null!=t&&(c=(""+t).replace(P,"$&/")+"/"),D(e,L,r=E(r,c,n,a)),R(r)}var I={current:null};function q(){var e=I.current;if(null===e)throw Error(m(321));return e}var U={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return A(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,M,r=E(null,null,r,t)),R(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return A(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(m(143));return e}},r.Component=y,r.Fragment=i,r.Profiler=p,r.PureComponent=v,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var a=n({},e.props),o=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=N.current),void 0!==r.key&&(o=""+r.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(b in r)w.call(r,b)&&!S.hasOwnProperty(b)&&(a[b]=void 0===r[b]&&void 0!==p?p[b]:r[b])}var b=arguments.length-2;if(1===b)a.children=t;else if(1<b){p=Array(b);for(var l=0;l<b;l++)p[l]=arguments[l+2];a.children=p}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:l,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:h,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1088:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,i,u=o(e),p=1;p<arguments.length;p++){for(var b in t=Object(arguments[p]))a.call(t,b)&&(u[b]=t[b]);if(n){i=n(t);for(var l=0;l<i.length;l++)c.call(t,i[l])&&(u[i[l]]=t[i[l]])}}return u}},215:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return b}));var n=t(2),a=t(6),c=(t(1086),t(1085)),o={id:"_graphbackgenerator_.graphbackgenerator",title:"GraphbackGenerator",sidebar_label:"GraphbackGenerator"},i={unversionedId:"api/graphback/classes/_graphbackgenerator_.graphbackgenerator",id:"api/graphback/classes/_graphbackgenerator_.graphbackgenerator",isDocsHomePage:!1,title:"GraphbackGenerator",description:"GraphbackGenerator",source:"@site/../docs/api/graphback/classes/_graphbackgenerator_.graphbackgenerator.md",slug:"/api/graphback/classes/_graphbackgenerator_.graphbackgenerator",permalink:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/classes/_graphbackgenerator_.graphbackgenerator.md",version:"current",sidebar_label:"GraphbackGenerator"},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> config",id:"protected-config",children:[]},{value:"<code>Protected</code> schema",id:"protected-schema",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"generateSourceCode",id:"generatesourcecode",children:[]}]}],p={rightToc:u};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"GraphbackGenerator"),Object(c.b)("p",null,"Automatically generate your database structure resolvers and queries from graphql types.\nSee README for examples"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackGenerator"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator#protected-config"}),"config")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator#protected-schema"}),"schema"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator#generatesourcecode"}),"generateSourceCode"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackGenerator"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema | string, ",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig"}),"GraphbackConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator"}),"GraphbackGenerator"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback/src/GraphbackGenerator.ts#L14"}),"GraphbackGenerator.ts:14"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLSchema ","|"," string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig"}),"GraphbackConfig"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback/classes/_graphbackgenerator_.graphbackgenerator"}),"GraphbackGenerator"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"protected-config"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig"}),"GraphbackConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback/src/GraphbackGenerator.ts#L13"}),"GraphbackGenerator.ts:13"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-schema"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," schema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"string | GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback/src/GraphbackGenerator.ts#L14"}),"GraphbackGenerator.ts:14"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"generatesourcecode"},"generateSourceCode"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"generateSourceCode"),"(): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4c8d0b9/packages/graphback/src/GraphbackGenerator.ts#L24"}),"GraphbackGenerator.ts:24"))),Object(c.b)("p",null,"Create backend with all related resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")))}b.isMDXComponent=!0}}]);