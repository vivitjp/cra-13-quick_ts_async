(this["webpackJsonpcra-13-quick_ts_async"]=this["webpackJsonpcra-13-quick_ts_async"]||[]).push([[0],{102:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(38),s=c.n(r),i=(c(74),c(45)),o=c(7),d=c(24),j=c(25),l=c(30),u=c.n(l),b=c(40),O=c(41),h=c.n(O),x=Object(j.b)("compo/fetchByKey",Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:3000/".concat("user"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),f=Object(j.c)({name:"compo",initialState:{objData:{},loading:"idle"},reducers:{},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.loading="loading"})).addCase(x.fulfilled,(function(e,t){var c=t.payload;e.objData=c,e.loading="success"})).addCase(x.rejected,(function(e,t){e.loading="failed"}))}}),m=function(e){return e.compo.objData},p=f.reducer,g=Object(j.a)({reducer:{compo:p}}),v=c(128),y=(c(97),c(2)),k=function(){var e=Object(d.c)(m),t=Object(d.b)();Object(n.useEffect)((function(){t(x())}),[t]);return Object(y.jsx)("div",{className:"list",children:e&&Object.keys(e).length>0&&e.map((function(e){return Object(y.jsx)("div",{className:"listitem",onClick:function(){return t=e.id,void console.log("Avatar Clicked:",t);var t},children:Object(y.jsx)(v.a,{alt:e.name,src:"./images/".concat(e.en,".jpg"),sx:{width:60,height:60}})},e.id)}))})},N=function(){return Object(y.jsx)(d.a,{store:g,children:Object(y.jsx)(k,{})})},C=Object(j.b)("compo/fetchByKey",Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:3000/".concat("log"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),D=Object(j.c)({name:"compo",initialState:{objData:{},loading:"idle"},reducers:{},extraReducers:function(e){e.addCase(C.pending,(function(e,t){e.loading="loading"})).addCase(C.fulfilled,(function(e,t){var c=t.payload;e.objData=c,e.loading="success"})).addCase(C.rejected,(function(e,t){e.loading="failed"}))}}),w=function(e){return e.compo.objData},E=D.reducer,_=Object(j.a)({reducer:{compo:E}}),A=c(131),R=c(129),B=c(134),S=c(132),T=c(127),F=c(133),I=function(){var e=Object(d.c)(w),t=Object(d.b)();return Object(n.useEffect)((function(){t(C())}),[t]),Object(y.jsx)(y.Fragment,{children:e&&Object.keys(e).length>0&&e.map((function(e){return Object(y.jsx)(A.a,{sx:{margin:1},children:Object(y.jsxs)(R.a,{variant:"outlined",children:[Object(y.jsxs)(S.a,{children:[Object(y.jsx)(F.a,{sx:{fontSize:14},align:"left",color:"text.secondary",gutterBottom:!0,children:e.title}),Object(y.jsx)(F.a,{variant:"h5",align:"left",component:"div",children:e.log}),Object(y.jsx)(F.a,{sx:{mb:1.5},align:"right",color:"text.secondary",children:e.timestamp})]}),Object(y.jsx)(B.a,{children:Object(y.jsx)(T.a,{size:"small",children:"Learn More"})})]})},e.id)}))})},q=function(){return Object(y.jsx)(d.a,{store:_,children:Object(y.jsx)(I,{})})};c(99);var z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"header",children:[Object(y.jsx)("span",{children:"HEADER"}),Object(y.jsx)(i.b,{to:{pathname:"/About",state:{fromDashboard:!0}},children:"About"})]}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)("div",{className:"title",children:"TITLE"}),Object(y.jsx)("div",{className:"sec_l",children:Object(y.jsx)(N,{})}),Object(y.jsx)("div",{className:"body",children:Object(y.jsx)(q,{})}),Object(y.jsx)("div",{className:"sec_r",children:"RIGHT"})]}),Object(y.jsx)("div",{className:"footer",children:"FOOTER"})]})};function H(e){return Object(y.jsx)("div",{children:"About"})}function J(){return Object(y.jsx)(i.a,{children:Object(y.jsx)("div",{children:Object(y.jsxs)(o.c,{children:[Object(y.jsxs)(o.a,{path:"/about",children:[" ",Object(y.jsx)(H,{})," "]}),Object(y.jsxs)(o.a,{path:"/",children:[" ",Object(y.jsx)(z,{})," "]})]})})})}s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(J,{})}),document.getElementById("root"))},74:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.a50cbd8d.chunk.js.map