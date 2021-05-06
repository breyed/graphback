(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{1333:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),b=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),o=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,n=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=o(a),d=r,O=m["".concat(n,".").concat(d)]||m[d]||s[d]||c;return a?b.a.createElement(O,p(p({ref:t},l),{},{components:a})):b.a.createElement(O,p({ref:t},l))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,n=new Array(c);n[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,n[1]=p;for(var l=2;l<c;l++)n[l]=a[l];return b.a.createElement.apply(null,n)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},393:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),b=a(7),c=(a(0),a(1333)),n={id:"_runtime_graphbackproxyservice_.graphbackproxyservice",title:"GraphbackProxyService",sidebar_label:"GraphbackProxyService"},p={unversionedId:"api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice",id:"version-0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice",isDocsHomePage:!1,title:"GraphbackProxyService",description:"ProxyService that can be used by any services that wish to extend",source:"@site/versioned_docs/version-0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice.md",slug:"/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice",permalink:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice.md",version:"0.15.x",sidebar_label:"GraphbackProxyService",sidebar:"version-0.15.x/docs",previous:{title:"CRUDService",permalink:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"},next:{title:"runtime/createCRUDService",permalink:"/docs/0.15.x/api/graphback-core/modules/_runtime_createcrudservice_"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> proxiedService",id:"protected-proxiedservice",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"update",id:"update",children:[]}]}],l={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ProxyService that can be used by any services that wish to extend\nGraphback functionality.\nService works by proxying method requests to another service or\ndatastore."),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackProxyService"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"},"GraphbackCRUDService"),"\u2039Type\u203a")),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#constructor"},"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#protected-proxiedservice"},"proxiedService"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#batchloaddata"},"batchLoadData")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#create"},"create")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#delete"},"delete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#findby"},"findBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#findone"},"findOne")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#subscribetocreate"},"subscribeToCreate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#subscribetodelete"},"subscribeToDelete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#subscribetoupdate"},"subscribeToUpdate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice#update"},"update"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new GraphbackProxyService"),"(",Object(c.b)("inlineCode",{parentName:"p"},"service"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"},"GraphbackCRUDService"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"},"GraphbackProxyService"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L13"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:13"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"service")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"},"GraphbackCRUDService"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"},"GraphbackProxyService"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"protected-proxiedservice"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," proxiedService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"proxiedService"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"},"GraphbackCRUDService"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L13"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:13"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(c.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice"},"GraphbackCRUDService"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L51"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:51"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"relationField")),Object(c.b)("td",{parentName:"tr",align:null},"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",{parentName:"tr",align:null},"string ","|"," number")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L19"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:19"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:null},"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"delete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"delete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L27"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:27"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:null},"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findby"},"findBy"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBy"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"},"QueryFilter"),"\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"page?"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"},"GraphbackPage"),", ",Object(c.b)("inlineCode",{parentName:"p"},"orderBy?"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"},"GraphbackOrderBy"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"},"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L35"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:35"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"},"QueryFilter"),"\u2039Type\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"page?")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackpage"},"GraphbackPage"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"orderBy?")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_interfaces_.graphbackorderby"},"GraphbackOrderBy"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",{parentName:"em",href:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"},"ResultList"),"\u2039Type\u203a\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findone"},"findOne"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findOne"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L31"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:31"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": any): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L39"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:39"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": any): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L47"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:47"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter?"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": any): ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L43"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:43"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"filter?")),Object(c.b)("td",{parentName:"tr",align:null},"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"update"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"context"),": any): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/runtime/GraphbackProxyService.ts#L23"},"packages/graphback-core/src/runtime/GraphbackProxyService.ts:23"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",{parentName:"tr",align:null},"Type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"context")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);