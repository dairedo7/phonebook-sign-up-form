(this["webpackJsonpphonebook-sign-up-form"]=this["webpackJsonpphonebook-sign-up-form"]||[]).push([[2],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(18),c=n(10),a=n.n(c),i=n(15),o=n.n(i),u=n(4),s=Object(u.c)("contacts/fetchContacts",Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),l=Object(u.c)("contacts/addContact",function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(u.c)("contacts/deleteContact",function(){var e=Object(r.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/contacts/".concat(t));case 2:return n=e.sent,r=n.data.id,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},14:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return a}));var r=function(e){return e.auth.isLoggedIn},c=function(e){return e.auth.user.name},a=function(e){return e.auth.isLoading}},28:function(e,t,n){e.exports={box:"UserMenu_box__Dq8Sm",text:"UserMenu_text__3nen-",btn:"UserMenu_btn__3nGUN"}},29:function(e,t,n){e.exports={footer:"Footer_footer__7dIj9",footer__signature:"Footer_footer__signature__29Icg",footer__link:"Footer_footer__link__w6C75"}},33:function(e,t,n){},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(4),c=Object(r.b)("contacts/updateFilter")},46:function(e,t,n){e.exports={box:"AuthNav_box__1JhPu",links:"AuthNav_links__1DYiI",link:"AuthNav_link__aBCfp",link_active:"AuthNav_link_active__1hUcA"}},47:function(e,t,n){e.exports={header:"Header_header__1v0yI"}},84:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(24),a=n.n(c),i=n(12),o=n(5),u=n(45),s=(n(33),n(2)),l=n(14),b=n(1);function j(){var e=Object(o.d)(l.b);return Object(b.jsxs)("nav",{className:"navigation",children:[Object(b.jsx)(i.b,{to:"/home",className:function(e){return e.isActive?"link__active link":"link"},children:"Home"}),e&&Object(b.jsx)(i.b,{to:"/contacts",className:function(e){return e.isActive?"link__active link":"link"},children:"Contacts"}),Object(b.jsx)(i.b,{to:"*",className:function(e){return e.isActive?"link__active link":"link"}})]})}var d=n(46),f=n.n(d);function O(){return Object(b.jsxs)("div",{className:f.a.box,children:[Object(b.jsx)(i.b,{to:"/register",className:function(e){return e.isActive?"link__active link":"link"},children:"Register"}),Object(b.jsx)(i.b,{to:"/login",className:function(e){return e.isActive?"link__active link":"link"},children:"Login"})]})}var h=n(9),p=n(28),g=n.n(p);function v(){var e=Object(o.d)(l.c),t=Object(o.c)();return Object(b.jsxs)("div",{className:g.a.box,children:[Object(b.jsxs)("p",{className:g.a.text,children:["Welcome to your phonebook, ",e,"!"]}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(Object(h.c)())},className:g.a.btn,children:"Logout"})]})}var x=n(47),m=n.n(x);function k(){var e=Object(o.d)(l.b);return Object(b.jsxs)("header",{className:m.a.header,children:[Object(b.jsx)(j,{}),e?Object(b.jsx)(v,{}):Object(b.jsx)(O,{})]})}var _=n(29),L=n.n(_);function y(){return Object(b.jsxs)("footer",{className:L.a.footer,children:[Object(b.jsx)("p",{className:L.a.footer__signature,children:"\xa9 2022 Phonebook by "}),Object(b.jsx)("a",{className:L.a.footer__link,href:"https://github.com/dairedo7",target:"_blank",rel:"noopener noreferrer",title:"Github Profile Link","aria-label":"Link to GitHub profile",children:"Dairedo"})]})}var N=n(17),w=n(26),A=["children","restricted","redirectTo"];function C(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,i=Object(w.a)(e,A),u=Object(o.d)(l.b)&&r;return Object(b.jsx)(s.d,{children:Object(b.jsx)(s.b,Object(N.a)(Object(N.a)({},i),{},{element:u?Object(b.jsx)(s.a,{to:a}):t}))})}var I=["children","redirectTo"];function F(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(w.a)(e,I),a=Object(o.d)(l.b);return Object(b.jsx)(s.d,{children:Object(b.jsx)(s.b,Object(N.a)(Object(N.a)({},c),{},{element:a?t:Object(b.jsx)(s.a,{to:r})}))})}var T=Object(r.lazy)((function(){return Promise.all([n.e(1),n.e(9),n.e(6)]).then(n.bind(null,103))})),P=Object(r.lazy)((function(){return n.e(8).then(n.bind(null,104))})),U=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,105))})),z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,107))}));var S,W,B,D={getCurrentUser:h.d},V=Object(o.b)(null,D)((function(e){var t=e.getCurrentUser,n=Object(o.d)(l.a),c=Object(o.d)((function(e){return e.auth.isLoggedIn}));return Object(r.useEffect)((function(){t()}),[t]),!n&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{}),Object(b.jsx)("main",{className:"main",children:Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)("h1",{children:"Loading..."}),children:Object(b.jsxs)(s.d,{children:[Object(b.jsx)(s.b,{path:"/home/*",element:Object(b.jsx)(C,{path:"/",children:Object(b.jsx)(T,{})})}),Object(b.jsx)(s.b,{path:"/register/*",element:Object(b.jsx)(C,{path:"/*",restricted:!0,children:Object(b.jsx)(P,{})})}),Object(b.jsx)(s.b,{path:"/login/*",element:Object(b.jsx)(C,{path:"/*",restricted:!0,redirectTo:"/contacts",children:Object(b.jsx)(U,{})})}),Object(b.jsx)(s.b,{path:"/contacts/*",element:Object(b.jsx)(F,{path:"/*",redirectTo:"/login",children:Object(b.jsx)(z,{})})}),Object(b.jsx)(s.b,{path:"*",element:c?Object(b.jsx)(s.a,{to:"/contacts"}):Object(b.jsx)(s.a,{to:"/home"})})]})})}),Object(b.jsx)(y,{})]})})),G=n(27),H=n(4),J=n(11),M=n(19),R=n(48),E=n.n(R),q=n(3),Y=n(13),K=Object(H.d)([],(S={},Object(q.a)(S,Y.c.fulfilled,(function(e,t){return t.payload})),Object(q.a)(S,Y.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(G.a)(e),[n])})),Object(q.a)(S,Y.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),S)),Q=Object(H.d)(!1,(W={},Object(q.a)(W,Y.c.pending,(function(){return!0})),Object(q.a)(W,Y.c.fulfilled,(function(){return!1})),Object(q.a)(W,Y.c.rejected,(function(){return!1})),Object(q.a)(W,Y.a.pending,(function(){return!0})),Object(q.a)(W,Y.a.fulfilled,(function(){return!1})),Object(q.a)(W,Y.a.rejected,(function(){return!1})),Object(q.a)(W,Y.b.pending,(function(){return!0})),Object(q.a)(W,Y.b.fulfilled,(function(){return!1})),Object(q.a)(W,Y.b.rejected,(function(){return!1})),W)),X=n(43),Z=Object(H.d)("",Object(q.a)({},X.a,(function(e,t){return t.payload}))),$=Object(H.e)({name:"auth",initialState:{user:{name:"",email:""},token:null,isLoggedIn:!1,isLoading:!1},extraReducers:(B={},Object(q.a)(B,h.a.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,console.log(e.token),e.isLoggedIn=!0,e.isLoading=!1})),Object(q.a)(B,h.a.rejected,(function(e){e.isLoading=!1})),Object(q.a)(B,h.b.pending,(function(e){e.isLoading=!0})),Object(q.a)(B,h.b.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0,e.isLoading=!1})),Object(q.a)(B,h.b.rejected,(function(e){e.isLoading=!1})),Object(q.a)(B,h.c.pending,(function(e){e.isLoading=!0})),Object(q.a)(B,h.c.fulfilled,(function(e){e.user={name:"",email:""},e.token=null,e.isLoggedIn=!1,e.isLoading=!1})),Object(q.a)(B,h.c.rejected,(function(e){e.isLoading=!1})),Object(q.a)(B,h.d.pending,(function(e){e.isLoading=!0})),Object(q.a)(B,h.d.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isLoading=!1})),Object(q.a)(B,h.d.rejected,(function(e){e.isLoading=!1})),B)}).reducer,ee=Object(G.a)(Object(H.f)({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}})),te={key:"auth",storage:E.a,whitelist:["token"]},ne=Object(H.a)({reducer:{auth:Object(M.g)(te,$),contacts:Object(J.b)({items:K,filter:Z,loading:Q})},middleware:ee,devTools:!1}),re=Object(M.h)(ne),ce=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,106)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};a.a.render(Object(b.jsx)(o.a,{store:ne,children:Object(b.jsx)(u.a,{loading:null,persistor:re,children:Object(b.jsx)(i.a,{basename:"/phonebook-sign-up-form/",children:Object(b.jsx)(V,{})})})}),document.getElementById("root")),ce()},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return f}));var r=n(18),c=n(10),a=n.n(c),i=n(15),o=n.n(i),u=n(4);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){o.a.defaults.headers.common.Authorization=""},b=Object(u.c)("auth/register",function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:return c=e.sent,i=c.data,s(null),s(i.token),e.abrupt("return",i);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),j=Object(u.c)("auth/login",function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:return c=e.sent,i=c.data,s(i.token),e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(u.c)("auth/logout",function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,o.a.post("/users/logout");case 4:l(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(u.c)("auth/update",function(){var e=Object(r.a)(a.a.mark((function e(t,n){var r,c,i,u,l,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,c=n.rejectWithValue,i=r(),u=i.auth.token){e.next=5;break}return e.abrupt("return",c());case 5:return s(u),e.prev=6,e.next=9,o.a.get("/users/current");case 9:return l=e.sent,b=l.data,e.abrupt("return",b);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",c(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())}},[[84,3,4]]]);
//# sourceMappingURL=main.cf71d054.chunk.js.map