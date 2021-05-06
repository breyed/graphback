(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1333:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return u}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),d=function(e){var a=n.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=d(e.components);return n.a.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},s=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=d(t),s=r,u=l["".concat(b,".").concat(s)]||l[s]||m[s]||c;return t?n.a.createElement(u,p(p({ref:a},i),{},{components:t})):n.a.createElement(u,p({ref:a},i))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,b=new Array(c);b[0]=s;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var i=2;i<c;i++)b[i]=t[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},242:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return d}));var r=t(3),n=t(7),c=(t(0),t(1333)),b={id:"_db_datamapper_",title:"db/dataMapper",sidebar_label:"db/dataMapper"},p={unversionedId:"api/graphback-core/modules/_db_datamapper_",id:"version-0.16.x/api/graphback-core/modules/_db_datamapper_",isDocsHomePage:!1,title:"db/dataMapper",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/modules/_db_datamapper_.md",slug:"/api/graphback-core/modules/_db_datamapper_",permalink:"/docs/0.16.x/api/graphback-core/modules/_db_datamapper_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/modules/_db_datamapper_.md",version:"0.16.x",sidebar_label:"db/dataMapper"},o=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> getDatabaseArguments",id:"const-getdatabasearguments",children:[]}]}],i={rightToc:o};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tabledatamap"},"TableDataMap")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tableid"},"TableID"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.16.x/api/graphback-core/modules/_db_datamapper_#const-getdatabasearguments"},"getDatabaseArguments"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"const-getdatabasearguments"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," getDatabaseArguments"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDatabaseArguments"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelMap"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap"},"ModelTableMap"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data?"),": any): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tabledatamap"},"TableDataMap"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/db/dataMapper.ts#L29"},"packages/graphback-core/src/db/dataMapper.ts:29"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"modelMap")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_buildmodeltablemap_.modeltablemap"},"ModelTableMap"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"data?")),Object(c.b)("td",{parentName:"tr",align:null},"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",{parentName:"em",href:"/docs/0.16.x/api/graphback-core/interfaces/_db_datamapper_.tabledatamap"},"TableDataMap"))))}d.isMDXComponent=!0}}]);