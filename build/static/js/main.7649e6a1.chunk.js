(this.webpackJsonplinkedinn=this.webpackJsonplinkedinn||[]).push([[0],{64:function(A,e,t){},74:function(A,e,t){},75:function(A,e,t){},78:function(A,e,t){},79:function(A,e,t){},80:function(A,e,t){},81:function(A,e,t){},82:function(A,e,t){},83:function(A,e,t){},84:function(A,e,t){"use strict";t.r(e);var c=t(2),s=t.n(c),a=t(17),n=t.n(a),i=(t(64),t(14)),r=t(25),H=r.a.initializeApp({apiKey:"AIzaSyCCvSzEnrCR0wBdk7Pyd3dSj7yn1e-pRjg",authDomain:"linkedinn-b1139.firebaseapp.com",projectId:"linkedinn-b1139",storageBucket:"linkedinn-b1139.appspot.com",messagingSenderId:"860749882929",appId:"1:860749882929:web:c85844bcf9062fff919710",measurementId:"G-BC0J6LNKTB"}).firestore(),o=r.a.auth(),l=t(30),j=Object(l.b)({name:"user",initialState:{user:null},reducers:{login:function(A,e){A.user=e.payload},logout:function(A){A.user=null}}}),d=j.actions,b=d.login,u=d.logout,O=function(A){return A.user.user},g=j.reducer,p=(t(74),t(41)),h=t.n(p),B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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",C=t(42),w=t.n(C),f=t(46),N=t.n(f),m=t(43),v=t.n(m),x=t(44),D=t.n(x),P=t(45),U=t.n(P),Q=(t(75),t(100)),I=t(3);var y=function(A){var e=A.avatar,t=A.Icon,c=A.title,s=A.onClick,a=Object(i.c)(O);return Object(I.jsxs)("div",{onClick:s,className:"headeroption",children:[t&&Object(I.jsx)(t,{className:"headeroption__icon"}),e&&Object(I.jsx)(Q.a,{className:"headeroption__icon",children:null===a||void 0===a?void 0:a.email[0]}),Object(I.jsx)("h3",{className:"headeroption__title",children:c})]})};var E=function(){var A=Object(i.b)();return Object(I.jsxs)("div",{className:"header",children:[Object(I.jsxs)("div",{className:"header__left",children:[Object(I.jsx)("img",{src:B,alt:""}),Object(I.jsxs)("div",{className:"header__search",children:[Object(I.jsx)(h.a,{}),Object(I.jsx)("input",{type:"text",placeholder:"Search jobs companies"})]})]}),Object(I.jsxs)("div",{className:"header__right",children:[Object(I.jsx)(y,{title:"Home",Icon:w.a}),Object(I.jsx)(y,{title:"My Network",Icon:v.a}),Object(I.jsx)(y,{title:"Jobs",Icon:D.a}),Object(I.jsx)(y,{title:"Messenging",Icon:U.a}),Object(I.jsx)(y,{title:"Notification",Icon:N.a}),Object(I.jsx)(y,{avatar:!0,title:"me",onClick:function(){A(u()),o.signOut()}})]})]})};t(78);var K=function(){var A=Object(i.c)(O),e=function(A){return Object(I.jsxs)("div",{className:"sidebar__recentitem",children:[Object(I.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(I.jsx)("p",{children:A})]})};return Object(I.jsxs)("div",{className:"sidebar",children:[Object(I.jsxs)("div",{className:"sidebar__top",children:[Object(I.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"back"}),Object(I.jsx)(Q.a,{src:A.photoUrl,className:"sidebar__avatar",children:A.email[0]}),Object(I.jsx)("h2",{children:A.displayName}),Object(I.jsx)("h4",{children:A.email})]}),Object(I.jsxs)("div",{className:"sidebar__stats",children:[Object(I.jsxs)("div",{className:"sidebar__stat",children:[Object(I.jsx)("p",{children:"Who viewed you"}),Object(I.jsx)("p",{className:"sidebar__statNumber",children:"2,823"})]}),Object(I.jsxs)("div",{className:"sidebar__stat",children:[Object(I.jsx)("p",{children:"Views on post "}),Object(I.jsx)("p",{className:"sidebar__statNumber",children:"2,975"})]})]}),Object(I.jsxs)("div",{className:"sidebar__bottom",children:[Object(I.jsx)("p",{children:"Recent"}),e("React.js"),e("Design"),e("Programming"),e("Software"),e("Developer")]})]})},k=t(19),S=(t(79),t(51)),M=t.n(S);t(80);var R=function(A){var e=A.Icon,t=A.title,c=A.color;return Object(I.jsxs)("div",{className:"inputOption",children:[Object(I.jsx)(e,{style:{color:c}}),Object(I.jsx)("h4",{children:t})]})},L=t(52),G=t.n(L),q=t(53),Z=t.n(q),F=t(54),X=t.n(F),V=t(55),T=t.n(V),z=(t(81),t(47)),W=t.n(z),Y=t(48),J=t.n(Y),_=t(49),$=t.n(_),AA=t(50),eA=t.n(AA),tA=Object(c.forwardRef)((function(A,e){var t=A.name,c=A.description,s=A.message,a=A.photoUrl;return Object(I.jsxs)("div",{ref:e,className:"post",children:[Object(I.jsxs)("div",{className:"post__header",children:[Object(I.jsx)(Q.a,{src:a,children:t[0]}),Object(I.jsxs)("div",{className:"post__info",children:[Object(I.jsxs)("h2",{children:[t," "]}),Object(I.jsx)("p",{children:c})]})]}),Object(I.jsx)("div",{className:"post__body",children:Object(I.jsx)("p",{children:s})}),Object(I.jsxs)("div",{className:"post__button",children:[Object(I.jsx)(R,{Icon:W.a,title:"Like",color:"gray"}),Object(I.jsx)(R,{Icon:J.a,title:"Comment",color:"gray"}),Object(I.jsx)(R,{Icon:$.a,title:"Share",color:"gray"}),Object(I.jsx)(R,{Icon:eA.a,title:"Send",color:"gray"})]})]})})),cA=t(56);var sA=function(){var A=Object(c.useState)(""),e=Object(k.a)(A,2),t=e[0],s=e[1],a=Object(c.useState)([]),n=Object(k.a)(a,2),o=n[0],l=n[1],j=Object(i.c)(O);return Object(c.useEffect)((function(){H.collection("posts").orderBy("timestamp","desc").onSnapshot((function(A){return l(A.docs.map((function(A){return{id:A.id,data:A.data()}})))}))}),[]),Object(I.jsxs)("div",{className:"feed",children:[Object(I.jsxs)("div",{className:"feed__container",children:[Object(I.jsxs)("div",{className:"feed__input",children:[Object(I.jsx)(M.a,{}),Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{value:t,onChange:function(A){return s(A.target.value)},type:"text"}),Object(I.jsx)("button",{onClick:function(A){A.preventDefault(),H.collection("posts").add({name:j.displayName,description:j.email,message:t,photoUrl:j.photoUrl||"",timestamp:r.a.firestore.FieldValue.serverTimestamp()}),s("")},type:"submit",children:"Send"})]})]}),Object(I.jsxs)("div",{className:"feed__inputoption",children:[Object(I.jsx)(R,{Icon:G.a,title:"Photo",color:"#70B5F9"}),Object(I.jsx)(R,{Icon:Z.a,title:"Video",color:"#E7A33E"}),Object(I.jsx)(R,{Icon:X.a,title:"Event",color:"#C0CBCD"}),Object(I.jsx)(R,{Icon:T.a,title:"Write article",color:"#7FC15E"})]})]}),Object(I.jsx)(cA.a,{children:o.map((function(A){var e=A.id,t=A.data,c=t.name,s=t.description,a=t.message,n=t.photoUrl;return Object(I.jsx)(tA,{name:c,description:s,message:a,photoUrl:n},e)}))})]})};t(82);var aA=function(){var A=Object(c.useState)(""),e=Object(k.a)(A,2),t=e[0],s=e[1],a=Object(c.useState)(""),n=Object(k.a)(a,2),r=n[0],H=n[1],l=Object(c.useState)(""),j=Object(k.a)(l,2),d=j[0],u=j[1],O=Object(c.useState)(""),g=Object(k.a)(O,2),p=g[0],h=g[1],C=Object(i.b)();return Object(I.jsxs)("div",{className:"login",children:[Object(I.jsx)("img",{src:B,alt:"image"}),Object(I.jsxs)("form",{children:[Object(I.jsx)("input",{value:d,onChange:function(A){return u(A.target.value)},placeholder:"Full name (required if registering )",type:"text"}),Object(I.jsx)("input",{value:p,onChange:function(A){return h(A.target.value)},placeholder:"Profile pic URL (optional)",type:"text"}),Object(I.jsx)("input",{value:t,onChange:function(A){return s(A.target.value)},placeholder:"Email",type:"email"}),Object(I.jsx)("input",{value:r,onChange:function(A){return H(A.target.value)},placeholder:"Password",type:"password"}),Object(I.jsx)("button",{onClick:function(A){A.preventDefault(),o.signInWithEmailAndPassword(t,r).then((function(A){C(b({email:A.user.email,uid:A.user.uid,displayName:A.user.displayName,photoUrl:A.user.photoURL}))})).catch((function(A){alert(A)}))},children:"Sign-in"})]}),Object(I.jsxs)("p",{children:["Not member ?"," ",Object(I.jsx)("span",{className:"login__register",onClick:function(){if(!d)return alert("Please Enter the full Name");o.createUserWithEmailAndPassword(t,r).then((function(A){A.user.updateProfile({displayName:d,photoURL:p}).then((function(){C(b({email:A.user.email,uid:A.user.uid,displayName:d,photoUrl:p}))}))})).catch((function(A){return alert(A.message)}))},children:"Register Now"})]})]})},nA=(t(83),t(58)),iA=t.n(nA),rA=t(57),HA=t.n(rA);var oA=function(){var A=function(A,e){return Object(I.jsxs)("div",{className:"widget__article",children:[Object(I.jsx)("div",{className:"widget__articleLeft",children:Object(I.jsx)(HA.a,{})}),Object(I.jsxs)("div",{className:"widget__articleRight",children:[Object(I.jsx)("h4",{children:A}),Object(I.jsx)("p",{children:e})]})]})};return Object(I.jsxs)("div",{className:"widget",children:[Object(I.jsxs)("div",{className:"widget__header",children:[Object(I.jsx)("h2",{children:"Linkend News"}),Object(I.jsx)(iA.a,{})]}),A("Tanishq React is back","Top news - 999 reader"),A("Coronavirus cases","Top news - 886 reader"),A("Tesla stock prices","Top news - 556 reader"),A("Microsoft windows 11 ","Top news - 668 reader"),A("Apple company stocky increased","Top news - 532 reader"),A("facebook becomes Meta universe","Top news - 959 reader")]})};var lA=function(){var A=Object(i.c)(O),e=Object(i.b)();return Object(c.useEffect)((function(){o.onAuthStateChanged((function(A){e(A?b({email:A.email,uid:A.uid,displayName:A.displayName,photoUrl:A.photoURL}):u())}))}),[]),Object(I.jsxs)("div",{className:"app",children:[Object(I.jsx)(E,{}),A?Object(I.jsxs)("div",{className:"app__body",children:[Object(I.jsx)(K,{}),Object(I.jsx)(sA,{}),Object(I.jsx)(oA,{})]}):Object(I.jsx)(aA,{})]})},jA=Object(l.a)({reducer:{user:g}});n.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(i.a,{store:jA,children:Object(I.jsx)(lA,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.7649e6a1.chunk.js.map