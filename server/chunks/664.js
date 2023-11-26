exports.id=664,exports.ids=[664],exports.modules={7192:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addBasePath",{enumerable:!0,get:function(){return u}});let n=r(6063),o=r(2866);function u(e,t){return(0,o.normalizePathTrailingSlash)((0,n.addPathPrefix)(e,""))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3607:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return o}});let n=r(2866),o=function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),u=1;u<t;u++)o[u-1]=arguments[u];return(0,n.normalizePathTrailingSlash)(r(7699).b(e,...o))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7498:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return n},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return u},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return f},isThenable:function(){return c}});let n="refresh",o="navigate",u="restore",l="server-patch",a="prefetch",i="fast-refresh",f="server-action";function c(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"})(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6728:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"detectDomainLocale",{enumerable:!0,get:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r(6707).D(...t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}});let n=r(2866);function o(e,t,o,u){{let l=r(3530).normalizeLocalePath,a=r(6728).detectDomainLocale,i=t||l(e,o).detectedLocale,f=a(u,void 0,i);if(f){let t="http"+(f.http?"":"s")+"://",r=i===f.defaultLocale?"":"/"+i;return""+t+f.domain+(0,n.normalizePathTrailingSlash)(""+r+e)}return!1}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6864:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"hasBasePath",{enumerable:!0,get:function(){return o}});let n=r(387);function o(e){return(0,n.pathHasPrefix)(e,"")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(167),o=n._(r(6689)),u=r(4450),l=r(2227),a=r(4364),i=r(109),f=r(3607),c=r(5469),s=r(7443),d=r(920),p=r(30),h=r(7192),b=r(7498);function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:g,prefetch:_=null,passHref:P,replace:O,shallow:j,scroll:v,locale:R,onClick:M,onMouseEnter:x,onTouchStart:C,legacyBehavior:T=!1,...E}=e;r=g,T&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let L=o.default.useContext(c.RouterContext),A=o.default.useContext(s.AppRouterContext),I=null!=L?L:A,S=!L,w=!1!==_,U=null===_?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:k,as:N}=o.default.useMemo(()=>{if(!L){let e=y(a);return{href:e,as:m?y(m):e}}let[e,t]=(0,u.resolveHref)(L,a,!0);return{href:e,as:m?(0,u.resolveHref)(L,m):t||e}},[L,a,m]),W=o.default.useRef(k),z=o.default.useRef(N);T&&(n=o.default.Children.only(r));let D=T?n&&"object"==typeof n&&n.ref:t,[K,H,q]=(0,d.useIntersection)({rootMargin:"200px"}),$=o.default.useCallback(e=>{(z.current!==N||W.current!==k)&&(q(),z.current=N,W.current=k),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[N,D,k,q,K]);o.default.useEffect(()=>{},[N,k,H,R,w,null==L?void 0:L.locale,I,S,U]);let F={ref:$,onClick(e){T||"function"!=typeof M||M(e),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,u,a,i,f,c){let{nodeName:s}=e.currentTarget,d="A"===s.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let p=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](r,n,{shallow:a,locale:f,scroll:e}):t[u?"replace":"push"](n||r,{scroll:e})};c?o.default.startTransition(p):p()}(e,I,k,N,O,j,v,R,S)},onMouseEnter(e){T||"function"!=typeof x||x(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){T||"function"!=typeof C||C(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,i.isAbsoluteUrl)(N))F.href=N;else if(!T||P||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,p.getDomainLocale)(N,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);F.href=t||(0,h.addBasePath)((0,f.addLocale)(N,e,null==L?void 0:L.defaultLocale))}return T?o.default.cloneElement(n,F):o.default.createElement("a",{...E,...F},r)}),g=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3530:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return n}});let n=(e,t)=>r(1774).h(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2866:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return u}});let n=r(7425),o=r(1156),u=e=>{if(!e.startsWith("/"))return e;let{pathname:t,query:r,hash:u}=(0,o.parsePath)(e);return""+(0,n.removeTrailingSlash)(t)+r+u};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3436:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4450:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return s}});let n=r(5980),o=r(4364),u=r(6455),l=r(109),a=r(2866),i=r(2227),f=r(8410),c=r(2969);function s(e,t,r){let s;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d,b=h.split("?",1);if((b[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,l.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,i.isLocalURL)(d))return r?[d]:d;try{s=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){s=new URL("/","http://n")}try{let e=new URL(d,s);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,f.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:l,params:a}=(0,c.interpolateAs)(e.pathname,e.pathname,r);l&&(t=(0,o.formatWithValidation)({pathname:l,hash:e.hash,query:(0,u.omit)(r,a)}))}let l=e.origin===s.origin?e.href.slice(e.origin.length):e.href;return r?[l,t||l]:l}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(6689),o=r(3436),u="function"==typeof IntersectionObserver,l=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,f=i||!u,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(u){if(f||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:u,elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[f,r,t,c,d.current]);let h=(0,n.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6614:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},6707:(e,t)=>{"use strict";function r(e,t,r){if(e)for(let u of(r&&(r=r.toLowerCase()),e)){var n,o;let e=null==(n=u.domain)?void 0:n.split(":",1)[0].toLowerCase();if(t===e||r===u.defaultLocale.toLowerCase()||(null==(o=u.locales)?void 0:o.some(e=>e.toLowerCase()===r)))return u}}Object.defineProperty(t,"D",{enumerable:!0,get:function(){return r}})},1774:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"h",{enumerable:!0,get:function(){return r}})},7699:(e,t,r)=>{"use strict";Object.defineProperty(t,"b",{enumerable:!0,get:function(){return u}});let n=r(6063),o=r(387);function u(e,t,r,u){if(!t||t===r)return e;let l=e.toLowerCase();return!u&&((0,o.pathHasPrefix)(l,"/api")||(0,o.pathHasPrefix)(l,"/"+t.toLowerCase()))?e:(0,n.addPathPrefix)(e,"/"+t)}},6063:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addPathPrefix",{enumerable:!0,get:function(){return o}});let n=r(1156);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:u}=(0,n.parsePath)(e);return""+t+r+o+u}},4364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},urlObjectKeys:function(){return a},formatWithValidation:function(){return i}});let n=r(8760),o=n._(r(5980)),u=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",l=e.pathname||"",a=e.hash||"",i=e.query||"",f=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?f=t+e.host:r&&(f=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(f+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let c=e.search||i&&"?"+i||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||u.test(n))&&!1!==f?(f="//"+(f||""),l&&"/"!==l[0]&&(l="/"+l)):f||(f=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+n+f+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return l(e)}},2969:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return u}});let n=r(2142),o=r(2839);function u(e,t,r){let u="",l=(0,o.getRouteRegex)(e),a=l.groups,i=(t!==e?(0,n.getRouteMatcher)(l)(t):"")||r;u=e;let f=Object.keys(a);return f.every(e=>{let t=i[e]||"",{repeat:r,optional:n}=a[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in i)&&(u=u.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(u=""),{params:f,result:u}}},2227:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return u}});let n=r(109),o=r(6864);function u(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},6455:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},1156:(e,t)=>{"use strict";function r(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parsePath",{enumerable:!0,get:function(){return r}})},387:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let n=r(1156);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,n.parsePath)(e);return r===t||r.startsWith(t+"/")}},5980:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return u}})},7425:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},2142:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(109);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let u=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},l={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(l[e]=~n.indexOf("/")?n.split("/").map(e=>u(e)):t.repeat?[u(n)]:u(n))}),l}}},2839:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return i},getNamedRouteRegex:function(){return s},getNamedMiddlewareRegex:function(){return d}});let n=r(2407),o=r(6614),u=r(7425);function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function a(e){let t=(0,u.removeTrailingSlash)(e).slice(1).split("/"),r={},a=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&u){let{key:e,optional:n,repeat:i}=l(u[1]);return r[e]={pos:a++,repeat:i,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!u)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=l(u[1]);return r[e]={pos:a++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function i(e){let{parameterizedRoute:t,groups:r}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function f(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:u,optional:a,repeat:i}=l(r),f=u.replace(/\W/g,"");o&&(f=""+o+f);let c=!1;return(0===f.length||f.length>30)&&(c=!0),isNaN(parseInt(f.slice(0,1)))||(c=!0),c&&(f=t()),o?n[f]=""+o+u:n[f]=""+u,i?a?"(?:/(?<"+f+">.+?))?":"/(?<"+f+">.+?)":"/(?<"+f+">[^/]+?)"}function c(e,t){let r;let l=(0,u.removeTrailingSlash)(e).slice(1).split("/"),a=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),i={};return{namedParameterizedRoute:l.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),u=e.match(/\[((?:\[.*\])|.+)\]/);return r&&u?f({getSafeRouteKey:a,segment:u[1],routeKeys:i,keyPrefix:t?"nxtI":void 0}):u?f({getSafeRouteKey:a,segment:u[1],routeKeys:i,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:i}}function s(e,t){let r=c(e,t);return{...i(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=a(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},7443:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AppRouterContext},1664:(e,t,r)=>{e.exports=r(5170)}};