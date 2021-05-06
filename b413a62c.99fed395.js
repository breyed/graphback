/*! For license information please see b413a62c.99fed395.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[895],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||c;return r?a.a.createElement(d,o(o({ref:t},l),{},{components:r})):a.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1334:function(e,t,r){"use strict";e.exports=r(1335)},1335:function(e,t,r){"use strict";var n=r(1336),a=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,o=60110,u=60112;t.Suspense=60113;var l=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),c=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),o=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function m(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var O=g.prototype=new m;O.constructor=g,n(O,y.prototype),O.isPureReactComponent=!0;var j={current:null},v=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var n,c={},i=null,o=null;if(null!=t)for(n in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,n)&&!k.hasOwnProperty(n)&&(c[n]=t[n]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];c.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:o,props:c,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,r,n,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return i=i(u=e),e=""===n?"."+P(u,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),D(i,t,r,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=n+P(o=e[l],l);u+=D(o,t,r,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(o=e.next()).done;)u+=D(o=o.value,t,r,s=n+P(o,l++),i);else if("object"===o)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function x(e,t,r){if(null==e)return e;var n=[],a=0;return D(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function S(){var e=E.current;if(null===e)throw Error(b(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(b(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(b(267,e));var c=n({},e.props),i=e.key,o=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,u=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)v.call(t,s)&&!k.hasOwnProperty(s)&&(c[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)c.children=r;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];c.children=l}return{$$typeof:a,type:e.type,key:i,ref:o,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return S().useCallback(e,t)},t.useContext=function(e,t){return S().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return S().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return S().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return S().useLayoutEffect(e,t)},t.useMemo=function(e,t){return S().useMemo(e,t)},t.useReducer=function(e,t,r){return S().useReducer(e,t,r)},t.useRef=function(e){return S().useRef(e)},t.useState=function(e){return S().useState(e)},t.version="17.0.1"},1336:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,o,u=i(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))a.call(r,s)&&(u[s]=r[s]);if(n){o=n(r);for(var p=0;p<o.length;p++)c.call(r,o[p])&&(u[o[p]]=r[o[p]])}}return u}},962:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),c=(r(1334),r(1333)),i={id:"_util_.conflictmetadata",title:"ConflictMetadata",sidebar_label:"ConflictMetadata"},o={unversionedId:"api/graphback-datasync/interfaces/_util_.conflictmetadata",id:"api/graphback-datasync/interfaces/_util_.conflictmetadata",isDocsHomePage:!1,title:"ConflictMetadata",description:"Interface for holding the conflicting states",source:"@site/../docs/api/graphback-datasync/interfaces/_util_.conflictmetadata.md",slug:"/api/graphback-datasync/interfaces/_util_.conflictmetadata",permalink:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/interfaces/_util_.conflictmetadata.md",version:"current",sidebar_label:"ConflictMetadata",sidebar:"docs",previous:{title:"ConflictResolutionStrategy",permalink:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"},next:{title:"Release Notes",permalink:"/docs/next/releases"}},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"base",id:"base",children:[]},{value:"clientData",id:"clientdata",children:[]},{value:"clientDiff",id:"clientdiff",children:[]},{value:"operation",id:"operation",children:[]},{value:"serverData",id:"serverdata",children:[]},{value:"serverDiff",id:"serverdiff",children:[]}]}],l={rightToc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Interface for holding the conflicting states\nbetween server and client"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ConflictMetadata"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#base"},"base")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#clientdata"},"clientData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#clientdiff"},"clientDiff")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#operation"},"operation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#serverdata"},"serverData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictmetadata#serverdiff"},"serverDiff"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"base"},"base"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"base"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L31"},"packages/graphback-datasync/src/util.ts:31"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientdata"},"clientData"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"clientData"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L34"},"packages/graphback-datasync/src/util.ts:34"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"clientdiff"},"clientDiff"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"clientDiff"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L35"},"packages/graphback-datasync/src/util.ts:35"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"operation"},"operation"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"operation"),": ",Object(c.b)("em",{parentName:"p"},"GraphbackOperationType")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L36"},"packages/graphback-datasync/src/util.ts:36"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serverdata"},"serverData"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"serverData"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L32"},"packages/graphback-datasync/src/util.ts:32"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"serverdiff"},"serverDiff"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"serverDiff"),": ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/34a932e/packages/graphback-datasync/src/util.ts#L33"},"packages/graphback-datasync/src/util.ts:33"))))}s.isMDXComponent=!0}}]);