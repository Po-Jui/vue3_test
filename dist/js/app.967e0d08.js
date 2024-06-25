(function(){"use strict";var e={4686:function(e,a,t){var n=t(5130),o=t(6768),r=t(4232);function l(e,a,t,n,l,i){const u=(0,o.g2)("router-link"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(u,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1}),(0,o.eW)(" | "),(0,o.bF)(u,{to:"/about"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})]),(0,o.bF)(s),(0,o.eW)(" "+(0,r.v_)(l.name),1)],64)}var i={data(){return{name:"老人的家"}}},u=t(1241);const s=(0,u.A)(i,[["render",l]]);var c=s,d=t(1387);const v={class:"home"},m={class:"mb-3"},f=(0,o.Lk)("label",{for:"email",class:"form-label"},"Email",-1),p={class:"mb-3"},b=(0,o.Lk)("label",{for:"name",class:"form-label"},"姓名",-1),h={class:"mb-3"},g=(0,o.Lk)("label",{for:"phone",class:"form-label"},"電話",-1),k=(0,o.Lk)("div",{class:"mb-3"},[(0,o.Lk)("label",{for:"region",class:"form-label"},"地區"),(0,o.Lk)("select",{id:"region",name:"地區",class:"form-control"},[(0,o.Lk)("option",{value:""},"請選擇地區"),(0,o.Lk)("option",{value:"台北市"},"台北市"),(0,o.Lk)("option",{value:"高雄市"},"高雄市"),(0,o.Lk)("option",{value:"台南市"},"台南市")]),(0,o.Lk)("span",{class:"invalid-feedback"})],-1),j=(0,o.Lk)("div",{class:"mb-3"},[(0,o.Lk)("label",{for:"address",class:"form-label"},"地址"),(0,o.Lk)("input",{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入地址"}),(0,o.Lk)("span",{class:"invalid-feedback"})],-1),y=["onClick"],_=(0,o.Lk)("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function w(e,a,t,n,l,i){const u=(0,o.g2)("Field"),s=(0,o.g2)("error-message"),c=(0,o.g2)("Form");return(0,o.uX)(),(0,o.CE)("div",v,[(0,o.bF)(c,{onSubmit:i.onSubmit},{default:(0,o.k6)((({errors:e,values:t,validate:n})=>[(0,o.eW)((0,r.v_)(e)+" "+(0,r.v_)(t)+" ",1),(0,o.Lk)("div",m,[f,(0,o.bF)(u,{id:"email",name:"email",type:"email",class:(0,r.C4)(["form-control",{"is-invalid":e["email"]}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:l.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>l.user.email=e)},null,8,["class","modelValue"]),(0,o.bF)(s,{name:"email",class:"invalid-feedback"})]),(0,o.Lk)("div",p,[b,(0,o.bF)(u,{id:"name",name:"姓名",type:"text",class:(0,r.C4)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:i.isChinese,modelValue:l.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>l.user.name=e)},null,8,["rules","modelValue","class"]),(0,o.bF)(s,{name:"姓名",class:"invalid-feedback"})]),(0,o.Lk)("div",h,[g,(0,o.bF)(u,{id:"phone",name:"電話",type:"text",class:(0,r.C4)(["form-control",{"is-invalid":e["電話"]}]),rules:i.isPhone,placeholder:"請輸入電話",modelValue:l.user.phone,"onUpdate:modelValue":a[2]||(a[2]=e=>l.user.phone=e)},null,8,["rules","modelValue","class"]),(0,o.bF)(s,{name:"電話",class:"invalid-feedback"})]),k,j,(0,o.Lk)("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:n}," 驗證 ",8,y),_])),_:1},8,["onSubmit"])])}const L={class:"hello"},F=(0,o.Fv)('<p data-v-1863c4a2> For a guide and recipes on how to configure / customize this project,<br data-v-1863c4a2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-cli documentation</a>. </p><h3 data-v-1863c4a2>Installed CLI Plugins</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1863c4a2>babel</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1863c4a2>router</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-1863c4a2>eslint</a></li></ul><h3 data-v-1863c4a2>Essential Links</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Core Docs</a></li><li data-v-1863c4a2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Forum</a></li><li data-v-1863c4a2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Community Chat</a></li><li data-v-1863c4a2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1863c4a2>Twitter</a></li><li data-v-1863c4a2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>News</a></li></ul><h3 data-v-1863c4a2>Ecosystem</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-router</a></li><li data-v-1863c4a2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vuex</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1863c4a2>vue-devtools</a></li><li data-v-1863c4a2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-loader</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1863c4a2>awesome-vue</a></li></ul>',7);function C(e,a,t,n,l,i){return(0,o.uX)(),(0,o.CE)("div",L,[(0,o.Lk)("h1",null,(0,r.v_)(t.msg),1),F])}var E={name:"HelloWorld",props:{msg:String}};const O=(0,u.A)(E,[["render",C],["__scopeId","data-v-1863c4a2"]]);var S=O,x={name:"HomeView",components:{HelloWorld:S},data(){return{user:{email:"",name:"",address:"",phone:""}}},methods:{onSubmit(){console.log(this.user)},isPhone(e){const a=/^(09)[0-9]{8}$/;return!!a.test(e)||"需要正確的電話號碼"},isChinese(e){const a=/^[\u4E00-\u9FA5]+$/;return!!a.test(e)||"需要輸入中文姓名"}},created(){console.log(this)}};const V=(0,u.A)(x,[["render",w]]);var T=V;const A=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,2729))}],P=(0,d.aE)({history:(0,d.Bt)(),routes:A});var W=P,K=t(482),M=t(3224),H=t(4164),I=t(1066);t(8077);(0,K.Km)("required",M.mw),(0,K.Km)("email",M.Rp),(0,K.Km)("min",M.jk),(0,K.jK)({generateMessage:(0,H.kg)({zh_TW:I}),validateOnInput:!0}),(0,H.xS)("zh_TW");const N=(0,n.Ef)(c).use(W);N.component("Field",K.D0),N.component("Form",K.lV),N.component("ErrorMessage",K.Kw),N.mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var r=a[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,r){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(i=!1,r<l&&(l=r));if(i){e.splice(c--,1);var s=o();void 0!==s&&(a=s)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(a,n){return t.f[n](e,a),a}),[]))}}(),function(){t.u=function(e){return"js/about.cfb14933.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="new-project:";t.l=function(n,o,r,l){if(e[n])e[n].push(o);else{var i,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==a+r){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",a+r),i.src=n),e[n]=[o];var v=function(a,t){i.onerror=i.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),a)return a(t)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="pojui.github.io/dist/"}(),function(){var e={524:0};t.f.j=function(a,n){var o=t.o(e,a)?e[a]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(t,n){o=e[a]=[t,n]}));n.push(o[2]=r);var l=t.p+t.u(a),i=new Error,u=function(n){if(t.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+a+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,o[1](i)}};t.l(l,u,"chunk-"+a,a)}},t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,r,l=n[0],i=n[1],u=n[2],s=0;if(l.some((function(a){return 0!==e[a]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(u)var c=u(t)}for(a&&a(n);s<l.length;s++)r=l[s],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},n=self["webpackChunknew_project"]=self["webpackChunknew_project"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(4686)}));n=t.O(n)})();
//# sourceMappingURL=app.967e0d08.js.map