(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[3],{36:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return p}));var r=n(34),a=n.n(r),c=n(35),u=n(39);u.defaults.baseURL="https://api.themoviedb.org/3";u.defaults.params={api_key:"78f2432cb0b978404715fbeff43c36be"};var s=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,e.next=3,u.get("/trending/all/day?page=".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,u.get("/search/movie?language=en-US&page=".concat(n,"&include_adult=false&query=").concat(t));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"?language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(t,"/credits?language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,u.get("/movie/".concat(t,"/reviews?language=en-US&page=").concat(n));case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},38:function(e,t,n){e.exports={trend__p:"ListItem_trend__p__2uwlK",trend__list__item:"ListItem_trend__list__item__1j69k",trend__link__item:"ListItem_trend__link__item__dapbm"}},40:function(e,t,n){"use strict";var r=n(34),a=n.n(r),c=n(35),u=n(37),s=n(1),i=n(38),o=n.n(i),l=n(36),p=n(0),f=n(2),d=n(9),b=function(e){var t=e.dataFetchTrend,n=Object(f.g)().path;return t.length>0?t.map((function(e,t){if(void 0!==e.original_title)return Object(s.jsx)("li",{className:o.a.trend__list__item,children:Object(s.jsx)(d.b,{className:o.a.trend__link__item,to:"/movies/".concat(t),onClick:function(){return e=n,console.log(e,"from we come"),void localStorage.setItem("path",e);var e},children:e.original_title})},t)})):Object(s.jsx)("p",{className:o.a.trend__p,children:"wait please..."})};t.a=function(e){var t=e.flagTrend,n=e.query,r=Object(p.useState)([]),i=Object(u.a)(r,2),d=i[0],h=i[1];return Object(p.useEffect)((function(){function e(){return(e=Object(c.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(l.e)();case 5:if(null!==(n=e.sent)&&0!==n.length){e.next=8;break}return e.abrupt("return");case 8:h(n.results),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(p.useEffect)((function(){function e(){return(e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.e)();case 3:if(null!==(t=e.sent)&&0!==t.length){e.next=6;break}return e.abrupt("return");case 6:h(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function r(){return(r=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(l.d)(n);case 3:if(null!==(t=e.sent)&&0!==t.length){e.next=6;break}return e.abrupt("return");case 6:h(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return!1===n&&!1===t?function(){return e.apply(this,arguments)}():!1!==n&&!1===t?function(){return r.apply(this,arguments)}():void 0}),[n,t]),Object(s.jsxs)(s.Fragment,{children:[t&&Object(s.jsx)("h1",{className:o.a.trend__h1,children:"Trending today..."}),!t&&!n&&Object(s.jsx)("h1",{className:o.a.trend__h1,children:"Trending today...We are in movies page i did it special,for preload..."}),Object(s.jsx)("ul",{className:o.a.trend__list,children:Object(s.jsx)(f.a,{children:Object(s.jsx)(b,{dataFetchTrend:d})})})]})}},72:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n(1),c=n(0),u=n(40);t.default=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("query");if(null===e||""===e)return s("");s(e)}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u.a,{flagTrend:!0,query:""!==n&&n})})}}}]);
//# sourceMappingURL=HomePage.bafeb53a.chunk.js.map