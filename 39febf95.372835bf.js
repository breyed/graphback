(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{1333:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),o=function(e){var a=n.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},s=function(e){var a=o(e.components);return n.a.createElement(i.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=o(t),u=r,m=s["".concat(b,".").concat(u)]||s[u]||g[u]||c;return t?n.a.createElement(m,p(p({ref:a},i),{},{components:t})):n.a.createElement(m,p({ref:a},i))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,b=new Array(c);b[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var i=2;i<c;i++)b[i]=t[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},352:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return o}));var r=t(3),n=t(7),c=(t(0),t(1333)),b={id:"_plugin_graphbackplugin_.graphbackplugin",title:"GraphbackPlugin",sidebar_label:"GraphbackPlugin"},p={unversionedId:"api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",id:"version-0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",isDocsHomePage:!1,title:"GraphbackPlugin",description:"Graphback plugin interface",source:"@site/versioned_docs/version-0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",slug:"/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",permalink:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin.md",version:"0.15.x",sidebar_label:"GraphbackPlugin",sidebar:"version-0.15.x/docs",previous:{title:"ResultList",permalink:"/docs/0.15.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"},next:{title:"CRUDService",permalink:"/docs/0.15.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Abstract</code> getPluginName",id:"abstract-getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],i={rightToc:l};function o(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback plugin interface\nPlugins are base for every graphback generator and schema transformers.\nSee documentation for the complete list of the plugins."),Object(c.b)("p",null,"Plugins can:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Modify the schema"),Object(c.b)("li",{parentName:"ul"},"Create resources like files, db tables etc."),Object(c.b)("li",{parentName:"ul"},"Perform some in memory operations based on configuration")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackPlugin"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresolvers"},"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#createresources"},"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#abstract-getpluginname"},"getPluginName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logerror"},"logError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#protected-logwarning"},"logWarning")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackplugin_.graphbackplugin#transformschema"},"transformSchema"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"createresolvers"},"createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L42"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:42"))),Object(c.b)("p",null,"Method to create in-memory resolvers which will be\nadded to a list of resolvers output by Graphback"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata")),Object(c.b)("td",{parentName:"tr",align:null},"metadata object with model metadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L32"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:32"))),Object(c.b)("p",null,"Create resources like files etc. for this plugin.\nThis method should write resouces to filesystem"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"abstract-getpluginname"},Object(c.b)("inlineCode",{parentName:"h3"},"Abstract")," getPluginName"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L59"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:59"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Unique name of the plugin"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logerror"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logError"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L51"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:51"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",{parentName:"tr",align:null},"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logwarning"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logWarning"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L46"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:46"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",{parentName:"tr",align:null},"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transformschema"},"transformSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata"),"): ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",{parentName:"em",href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-core/src/plugin/GraphbackPlugin.ts#L24"},"packages/graphback-core/src/plugin/GraphbackPlugin.ts:24"))),Object(c.b)("p",null,"Performs transformation on the schema and returns target schema\nImplementations should extend this method if they wish to apply some changes\nto schema. Otherwise unchanged schema should be returned"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"Name"),Object(c.b)("th",{parentName:"tr",align:null},"Type"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",{parentName:"tr",align:null},Object(c.b)("a",{parentName:"td",href:"/docs/0.15.x/api/graphback-core/classes/_plugin_graphbackcoremetadata_.graphbackcoremetadata"},"GraphbackCoreMetadata")),Object(c.b)("td",{parentName:"tr",align:null},"metadata object containing schema")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")))}o.isMDXComponent=!0}}]);