import{s as T,c as V,u as H,g as j,d as w,e as z}from"../chunks/scheduler.3f07874a.js";import{S as N,i as O,g as v,s as M,h,j as g,x as L,c as S,f as c,k as r,a as m,y,d as U,t as q}from"../chunks/index.bce4ad42.js";import{u as P}from"../chunks/storage.8c515f7d.js";const R=!1;async function B(){}const Z=Object.freeze(Object.defineProperty({__proto__:null,load:B,ssr:R},Symbol.toStringTag,{value:"Module"}));const F=""+new URL("../assets/gold.ca6d08fd.png",import.meta.url).href;function G(f){let t,l="Sign in",n,s,o="<strong>Sign Up</strong>";return{c(){t=v("a"),t.textContent=l,n=M(),s=v("a"),s.innerHTML=o,this.h()},l(a){t=h(a,"A",{class:!0,href:!0,role:!0,"data-svelte-h":!0}),L(t)!=="svelte-5zsfxw"&&(t.textContent=l),n=S(a),s=h(a,"A",{class:!0,href:!0,role:!0,"data-svelte-h":!0}),L(s)!=="svelte-zar3ip"&&(s.innerHTML=o),this.h()},h(){r(t,"class","button is-light"),r(t,"href","/signin"),r(t,"role","button"),r(s,"class","button is-primary"),r(s,"href","/signup"),r(s,"role","button")},m(a,d){m(a,t,d),m(a,n,d),m(a,s,d)},d(a){a&&(c(t),c(n),c(s))}}}function J(f){let t,l="Logout";return{c(){t=v("a"),t.textContent=l,this.h()},l(n){t=h(n,"A",{class:!0,href:!0,role:!0,"data-svelte-h":!0}),L(t)!=="svelte-7wlhk2"&&(t.textContent=l),this.h()},h(){r(t,"class","button is-primary"),r(t,"href","/logout"),r(t,"role","button")},m(n,s){m(n,t,s)},d(n){n&&c(t)}}}function K(f){let t,l,n=`<a class="navbar-item" href="/"><img src="${F}" alt=""/> <p>Cell</p></a>`,s,o,a,d,C,p,b;function $(e,u){return e[0].uid?J:G}let k=$(f),_=k(f);const D=f[2].default,i=V(D,f,f[1],null);return{c(){t=v("nav"),l=v("div"),l.innerHTML=n,s=M(),o=v("div"),a=v("div"),d=v("div"),_.c(),C=M(),p=v("main"),i&&i.c(),this.h()},l(e){t=h(e,"NAV",{class:!0,role:!0,"aria-label":!0});var u=g(t);l=h(u,"DIV",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-gkipmy"&&(l.innerHTML=n),s=S(u),o=h(u,"DIV",{class:!0});var x=g(o);a=h(x,"DIV",{class:!0});var A=g(a);d=h(A,"DIV",{class:!0});var E=g(d);_.l(E),E.forEach(c),A.forEach(c),x.forEach(c),u.forEach(c),C=S(e),p=h(e,"MAIN",{});var I=g(p);i&&i.l(I),I.forEach(c),this.h()},h(){r(l,"class","navbar-brand"),r(d,"class","buttons"),r(a,"class","navbar-item"),r(o,"class","navbar-end"),r(t,"class","navbar is-link"),r(t,"role","navigation"),r(t,"aria-label","main navigation")},m(e,u){m(e,t,u),y(t,l),y(t,s),y(t,o),y(o,a),y(a,d),_.m(d,null),m(e,C,u),m(e,p,u),i&&i.m(p,null),b=!0},p(e,[u]){k!==(k=$(e))&&(_.d(1),_=k(e),_&&(_.c(),_.m(d,null))),i&&i.p&&(!b||u&2)&&H(i,D,e,e[1],b?w(D,e[1],u,null):j(e[1]),null)},i(e){b||(U(i,e),b=!0)},o(e){q(i,e),b=!1},d(e){e&&(c(t),c(C),c(p)),_.d(),i&&i.d(e)}}}function Q(f,t,l){let n;z(f,P,a=>l(0,n=a));let{$$slots:s={},$$scope:o}=t;return f.$$set=a=>{"$$scope"in a&&l(1,o=a.$$scope)},[n,o,s]}class tt extends N{constructor(t){super(),O(this,t,Q,K,T,{})}}export{tt as component,Z as universal};