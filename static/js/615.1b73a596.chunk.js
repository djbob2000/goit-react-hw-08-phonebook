"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[615],{9615:function(n,e,t){t.r(e),t.d(e,{default:function(){return nn}});var r,a,i,o,l,c,s,u,d,m,x=t(9439),p=t(2791),f=t(9434),h=t(6916),g=function(n){return n.contacts.items},v=function(n){return n.filter},Z=(0,h.P1)([g,v],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),j=function(n){return n.contacts.isLoading},b=t(1103),y=t(9913),w=t(6151),C=t(168),S=t(7691),k=S.ZP.form(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin-bottom: 32px;\n  width: 500px;\n"]))),I=t(3329),P=function(){var n=(0,f.I0)(),e=(0,f.v9)(g),t=(0,p.useState)((function(){var n;return null!==(n=localStorage.getItem("name"))&&void 0!==n?n:""})),r=(0,x.Z)(t,2),a=r[0],i=r[1],o=(0,p.useState)((function(){var n;return null!==(n=localStorage.getItem("number"))&&void 0!==n?n:""})),l=(0,x.Z)(o,2),c=l[0],s=l[1],u=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":localStorage.setItem("name",r),i(r);break;case"number":localStorage.setItem("number",r),s(r)}};return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(k,{onSubmit:function(t){if(t.preventDefault(),e.some((function(n){return n.name===a})))return alert("".concat(a," is already in contacts.")),i(""),void localStorage.removeItem("name");console.log(" name  :>>",{name:a}),console.log(" number  :>>",{number:c}),n((0,b.IB)({name:a,number:c})),localStorage.removeItem("name"),localStorage.removeItem("number"),i(""),s("")},children:[(0,I.jsx)(y.Z,{label:"Name",variant:"outlined",type:"text",name:"name",value:a,onChange:u,required:!0}),(0,I.jsx)(y.Z,{label:"Number",variant:"outlined",type:"tel",name:"number",value:c,onChange:u,required:!0}),(0,I.jsx)(w.Z,{variant:"contained",type:"submit",disabled:!a||!c,children:"Add contact"})]})})},_=t(6390),L=function(){var n=(0,f.I0)(),e=(0,f.v9)(v);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("h4",{children:"Contacts in your phonebook"}),(0,I.jsx)(y.Z,{sx:{width:"500px",mb:"20px"},label:"Find contacts by name",variant:"outlined",type:"text",name:"filter",value:e,placeholder:"type name here",onChange:function(e){return function(e){n((0,_.Xw)(e.target.value))}(e)}})]})},N=t(9157),F=S.ZP.li(a||(a=(0,C.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  margin-bottom: 10px;\n  gap: 10px;\n  width: 500px;\n  :hover {\n    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.38);\n  }\n"]))),q=S.ZP.div(i||(i=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),z=S.ZP.p(o||(o=(0,C.Z)(["\n  font-weight: bold;\n  margin: 0;\n"]))),A=S.ZP.p(l||(l=(0,C.Z)(["\n  margin: 0;\n"]))),B=S.ZP.div(c||(c=(0,C.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),E=S.ZP.div(s||(s=(0,C.Z)([""]))),O=(0,S.ZP)(N.Z)(u||(u=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  margin-top: 10px;\n  gap: 15px;\n  overflow: visible;\n"]))),D=t(1286),U=t(3044),X=t(3400),Y=t(5289),G=t(5661),H=t(1691),J=t(7123),K=t(22),M=function(n){var e=n.id,t=n.name,r=n.number,a=(0,f.I0)(),i=(0,p.useState)(""),o=(0,x.Z)(i,2),l=o[0],c=o[1],s=(0,p.useState)(""),u=(0,x.Z)(s,2),d=u[0],m=u[1],h=(0,p.useState)(null),g=(0,x.Z)(h,2),v=g[0],Z=g[1],j=(0,p.useState)(!1),C=(0,x.Z)(j,2),S=C[0],k=C[1],P=function(){k(!1)};return(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(F,{children:[(0,I.jsxs)(B,{children:[(0,I.jsx)(U.Z,{sx:{bgcolor:"primary.main"},children:t.slice(0,1).toUpperCase()}),(0,I.jsxs)(q,{children:[(0,I.jsx)(z,{children:t}),(0,I.jsx)(A,{children:r})]})]}),(0,I.jsxs)(E,{children:[(0,I.jsx)(X.Z,{name:"edit",color:"primary",onClick:function(){return function(n,e,t){m(e),c(n),Z(t),k(!0)}(t,r,e)},children:(0,I.jsx)(D.Z,{})}),(0,I.jsx)(X.Z,{name:"delete",color:"error",onClick:function(){return function(n){a((0,b.zY)(n))}(e)},children:(0,I.jsx)(K.Z,{})})]}),(0,I.jsxs)(Y.Z,{open:S,onClose:P,children:[(0,I.jsx)(G.Z,{children:"Edit contact"}),(0,I.jsx)(H.Z,{}),(0,I.jsxs)(O,{children:[(0,I.jsx)(y.Z,{label:"Name",variant:"outlined",type:"text",name:"name",value:l,onChange:function(n){c(n.target.value)},required:!0}),(0,I.jsx)(y.Z,{label:"Number",variant:"outlined",type:"tel",name:"number",value:d,onChange:function(n){m(n.target.value)},required:!0})]}),(0,I.jsxs)(J.Z,{children:[(0,I.jsx)(w.Z,{onClick:P,children:"Cancel"}),(0,I.jsx)(w.Z,{onClick:function(){console.log("handleOk"),k(!1);var n={name:l,number:d};a((0,b._B)({id:v,contact:n})),a((0,b.Ls)())},children:"Ok"})]})]})]})})},Q=t(5243),R={},T=function(){return(0,I.jsx)("div",{className:R.loader__container,children:(0,I.jsx)(Q.g4,{height:"80",width:"80",radius:"9",color:"#1976d2",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})},V=function(){var n=(0,f.I0)(),e=(0,f.v9)(Z),t=(0,f.v9)(j);return(0,p.useEffect)((function(){n((0,b.Ls)())}),[n]),(0,I.jsxs)(I.Fragment,{children:[!t&&(0,I.jsx)("ul",{children:e.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,I.jsx)(M,{id:e,name:t,number:r},e)}))}),t&&(0,I.jsx)(T,{})]})},W=S.ZP.div(d||(d=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n"]))),$=S.ZP.h4(m||(m=(0,C.Z)(["\n  margin: 0;\n  margin-bottom: 16px;\n"]))),nn=function(){return(0,I.jsxs)(W,{children:[(0,I.jsx)($,{children:"Add new contact"}),(0,I.jsx)(P,{}),(0,I.jsx)(L,{}),(0,I.jsx)(V,{})]})}}}]);
//# sourceMappingURL=615.1b73a596.chunk.js.map