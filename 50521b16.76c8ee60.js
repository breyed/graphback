(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),o=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||s[u]||l;return n?a.a.createElement(m,b(b({ref:t},p),{},{components:n})):a.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var p=2;p<l;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},468:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(7),l=(n(0),n(1333)),i={id:"_templates_fragmentfields_",title:"templates/fragmentFields",sidebar_label:"templates/fragmentFields"},b={unversionedId:"api/graphback-codegen-client/modules/_templates_fragmentfields_",id:"version-1.0/api/graphback-codegen-client/modules/_templates_fragmentfields_",isDocsHomePage:!1,title:"templates/fragmentFields",description:"Index",source:"@site/versioned_docs/version-1.0/api/graphback-codegen-client/modules/_templates_fragmentfields_.md",slug:"/api/graphback-codegen-client/modules/_templates_fragmentfields_",permalink:"/docs/api/graphback-codegen-client/modules/_templates_fragmentfields_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-codegen-client/modules/_templates_fragmentfields_.md",version:"1.0",sidebar_label:"templates/fragmentFields"},c=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"buildReturnFields",id:"buildreturnfields",children:[]},{value:"<code>Const</code> printReturnFields",id:"const-printreturnfields",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"index"},"Index"),Object(l.b)("h3",{id:"functions"},"Functions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/api/graphback-codegen-client/modules/_templates_fragmentfields_#buildreturnfields"},"buildReturnFields")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/docs/api/graphback-codegen-client/modules/_templates_fragmentfields_#const-printreturnfields"},"printReturnFields"))),Object(l.b)("h2",{id:"functions-1"},"Functions"),Object(l.b)("h3",{id:"buildreturnfields"},"buildReturnFields"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"buildReturnFields"),"(",Object(l.b)("inlineCode",{parentName:"p"},"t"),": GraphQLObjectType, ",Object(l.b)("inlineCode",{parentName:"p"},"level?"),": number): ",Object(l.b)("em",{parentName:"p"},"any[]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-codegen-client/src/templates/fragmentFields.ts#L12"},"graphback-codegen-client/src/templates/fragmentFields.ts:12"))),Object(l.b)("p",null,"For given type - it returns list of the type fields that\ncan be used for building GraphQL Fragment"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"t")),Object(l.b)("td",{parentName:"tr",align:null},"GraphQLObjectType"),Object(l.b)("td",{parentName:"tr",align:null},"type that is going to be used")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"level?")),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"nested level (supports only 0, 1 nested level)")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"any[]")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"const-printreturnfields"},Object(l.b)("inlineCode",{parentName:"h3"},"Const")," printReturnFields"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"printReturnFields"),"(",Object(l.b)("inlineCode",{parentName:"p"},"resultArray"),": any[], ",Object(l.b)("inlineCode",{parentName:"p"},"shift"),": string): ",Object(l.b)("em",{parentName:"p"},"string")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-codegen-client/src/templates/fragmentFields.ts#L38"},"graphback-codegen-client/src/templates/fragmentFields.ts:38"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"resultArray")),Object(l.b)("td",{parentName:"tr",align:null},"any[]"),Object(l.b)("td",{parentName:"tr",align:null},"-")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"shift")),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},'""')))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},"string")))}o.isMDXComponent=!0}}]);