/*! For license information please see 39b20dd7.8ccb2115.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1325:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,y=s["".concat(c,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(y,u(u({ref:t},l),{},{components:r})):o.a.createElement(y,u({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1326:function(e,t,r){"use strict";e.exports=r(1327)},1327:function(e,t,r){"use strict";var n=r(1328),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}function j(){}function _(e,t,r){this.props=e,this.context=t,this.refs=O,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var w=_.prototype=new j;w.constructor=_,n(w,v.prototype),w.isPureReactComponent=!0;var S={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},c=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:S.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,T=[];function N(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function R(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return r(n,e,""===t?"."+q(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+q(o=e[i],i);u+=R(o,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=d&&e[d]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=R(o=o.value,l=t+q(o,i++),r,n);else if("object"===o)throw r=""+e,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return u}function D(e,t,r){return null==e?0:R(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(E,"$&/")+"/"),D(e,A,t=N(t,a,n,o)),$(t)}var M={current:null};function L(){var e=M.current;if(null===e)throw Error(g(321));return e}var U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=N(null,null,t,r)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=v,t.Fragment=u,t.Profiler=l,t.PureComponent=_,t.StrictMode=i,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,i=S.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)P.call(t,p)&&!k.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.14.0"},1328:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,u,i=c(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))o.call(r,p)&&(i[p]=r[p]);if(n){u=n(r);for(var s=0;s<u.length;s++)a.call(r,u[s])&&(i[u[s]]=r[u[s]])}}return i}},350:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(1326),r(1325)),c={id:"_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",title:"TableColumnTypeDescriptor",sidebar_label:"TableColumnTypeDescriptor"},u={unversionedId:"api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",id:"api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",isDocsHomePage:!1,title:"TableColumnTypeDescriptor",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor.md",slug:"/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",permalink:"/docs/next/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor.md",version:"current",sidebar_label:"TableColumnTypeDescriptor"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"args",id:"args",children:[]},{value:"type",id:"type",children:[]}]}],l={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TableColumnTypeDescriptor"))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor#args"}),"args")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor#type"}),"type"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"args"},"args"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"args"),": ",Object(a.b)("em",{parentName:"p"},"any[]")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/62eeb9a/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L13"}),"abstract/getColumnTypeFromScalar.ts:13"))),Object(a.b)("p",null,"Builder function arguments."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"type"},"type"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"type"),": ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/modules/_abstract_tablecolumn_#tablecolumntype"}),"TableColumnType")," | string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/62eeb9a/packages/graphql-migrations/src/abstract/getColumnTypeFromScalar.ts#L9"}),"abstract/getColumnTypeFromScalar.ts:9"))),Object(a.b)("p",null,"Knex column builder function name."))}p.isMDXComponent=!0}}]);