(this["webpackJsonpphonebook-sign-up-form"]=this["webpackJsonpphonebook-sign-up-form"]||[]).push([[7],{105:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var s=t(20),l=t(3),o=t(17),n=t(0),c=t(6),r=t(10),i=t(86),u=(t(87),t(96)),b=t.n(u),d=t(1),_={email:"",password:""};function m(e,a){switch(a.type){case"email":case"password":return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},a.type,a.payload));default:return e}}function p(){var e=Object(n.useReducer)(m,_),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(c.b)(),u=t.email,p=t.password,f=Object(c.c)((function(e){return e.auth.isLoggedIn}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{autoClose:3e3}),Object(d.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),o(Object(r.b)(t)),f?i.b.success("You have succesfully logged in!",{theme:"colored"}):i.b.error("Request failed with status code 400. Check your email and password!",{theme:"colored"})},autoComplete:"off",children:[Object(d.jsxs)("label",{className:b.a.label,children:[Object(d.jsx)("input",{autoFocus:!0,className:b.a.form__field,type:"text",name:"email",value:u,pattern:"[a-zA-Z0-9!#$%&'*+\\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*",title:"Please check the entered data is correct.",placeholder:" ",onChange:function(e){return l({type:e.target.name,payload:e.target.value})}}),Object(d.jsx)("span",{className:b.a.email__label,children:"Email"})]}),Object(d.jsxs)("label",{className:b.a.label,children:[Object(d.jsx)("input",{className:b.a.form__field,type:"password",name:"password",value:p,placeholder:" ",onChange:function(e){return l({type:e.target.name,payload:e.target.value})}}),Object(d.jsx)("span",{className:b.a.password__label,children:"Password"})]}),Object(d.jsx)("button",{type:"submit",className:b.a.btn,children:"Login"})]})]})}},96:function(e,a,t){e.exports={form:"LoginView_form__3AyYP",btn:"LoginView_btn__CfxAR",email__label:"LoginView_email__label__r3vYi",password__label:"LoginView_password__label__14Ngs",form__field:"LoginView_form__field__1gc0k",label:"LoginView_label__2qmnD"}}}]);
//# sourceMappingURL=7.38fbc5d2.chunk.js.map