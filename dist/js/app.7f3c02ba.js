(function(){"use strict";var e={7898:function(e,a,t){var n=t(5130),o=t(6768);const r={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},i=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),s=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},u={class:"navbar-nav"},d={class:"nav-item"},v={class:"nav-item"},p={class:"nav-item"},m={class:"container"};function b(e,a,t,n,b,f){const h=(0,o.g2)("router-link"),g=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",r,[(0,o.Lk)("div",l,[i,s,(0,o.Lk)("div",c,[(0,o.Lk)("ul",u,[(0,o.Lk)("li",d,[(0,o.bF)(h,{to:"/",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})]),(0,o.Lk)("li",v,[(0,o.bF)(h,{to:"/about",class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})]),(0,o.Lk)("li",p,[(0,o.bF)(h,{to:{name:"新頁面"},class:"nav-link"},{default:(0,o.k6)((()=>[(0,o.eW)("New Page")])),_:1})])])])])]),(0,o.Lk)("div",m,[(0,o.bF)(g)])],64)}var f={data(){return{name:"老人的家"}}},h=t(1241);const g=(0,h.A)(f,[["render",b]]);var k=g,L=t(1387),j=t(4232);const y={class:"home"},_={class:"mb-3"},w=(0,o.Lk)("label",{for:"email",class:"form-label"},"Email",-1),F={class:"mb-3"},C=(0,o.Lk)("label",{for:"name",class:"form-label"},"姓名",-1),E={class:"mb-3"},O=(0,o.Lk)("label",{for:"phone",class:"form-label"},"電話",-1),x=(0,o.Lk)("div",{class:"mb-3"},[(0,o.Lk)("label",{for:"region",class:"form-label"},"地區"),(0,o.Lk)("select",{id:"region",name:"地區",class:"form-control"},[(0,o.Lk)("option",{value:""},"請選擇地區"),(0,o.Lk)("option",{value:"台北市"},"台北市"),(0,o.Lk)("option",{value:"高雄市"},"高雄市"),(0,o.Lk)("option",{value:"台南市"},"台南市")]),(0,o.Lk)("span",{class:"invalid-feedback"})],-1),S=(0,o.Lk)("div",{class:"mb-3"},[(0,o.Lk)("label",{for:"address",class:"form-label"},"地址"),(0,o.Lk)("input",{id:"address",name:"地址",type:"text",class:"form-control",placeholder:"請輸入地址"}),(0,o.Lk)("span",{class:"invalid-feedback"})],-1),V=["onClick"],T=(0,o.Lk)("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function P(e,a,t,n,r,l){const i=(0,o.g2)("Field"),s=(0,o.g2)("error-message"),c=(0,o.g2)("Form");return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(c,{onSubmit:l.onSubmit},{default:(0,o.k6)((({errors:e,values:t,validate:n})=>[(0,o.Lk)("div",_,[w,(0,o.bF)(i,{id:"email",name:"email",type:"email",class:(0,j.C4)(["form-control",{"is-invalid":e["email"]}]),rules:"email|required",placeholder:"請輸入 Email",modelValue:r.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>r.user.email=e)},null,8,["class","modelValue"]),(0,o.bF)(s,{name:"email",class:"invalid-feedback"})]),(0,o.Lk)("div",F,[C,(0,o.bF)(i,{id:"name",name:"姓名",type:"text",class:(0,j.C4)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:l.isChinese,modelValue:r.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>r.user.name=e)},null,8,["rules","modelValue","class"]),(0,o.bF)(s,{name:"姓名",class:"invalid-feedback"})]),(0,o.Lk)("div",E,[O,(0,o.bF)(i,{id:"phone",name:"電話",type:"text",class:(0,j.C4)(["form-control",{"is-invalid":e["電話"]}]),rules:l.isPhone,placeholder:"請輸入電話",modelValue:r.user.phone,"onUpdate:modelValue":a[2]||(a[2]=e=>r.user.phone=e)},null,8,["rules","modelValue","class"]),(0,o.bF)(s,{name:"電話",class:"invalid-feedback"})]),x,S,(0,o.Lk)("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:n}," 驗證 ",8,V),T])),_:1},8,["onSubmit"])])}const A={class:"hello"},N=(0,o.Fv)('<p data-v-1863c4a2> For a guide and recipes on how to configure / customize this project,<br data-v-1863c4a2> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-cli documentation</a>. </p><h3 data-v-1863c4a2>Installed CLI Plugins</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-1863c4a2>babel</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-1863c4a2>router</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-1863c4a2>eslint</a></li></ul><h3 data-v-1863c4a2>Essential Links</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Core Docs</a></li><li data-v-1863c4a2><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Forum</a></li><li data-v-1863c4a2><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>Community Chat</a></li><li data-v-1863c4a2><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-1863c4a2>Twitter</a></li><li data-v-1863c4a2><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>News</a></li></ul><h3 data-v-1863c4a2>Ecosystem</h3><ul data-v-1863c4a2><li data-v-1863c4a2><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-router</a></li><li data-v-1863c4a2><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vuex</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-1863c4a2>vue-devtools</a></li><li data-v-1863c4a2><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-1863c4a2>vue-loader</a></li><li data-v-1863c4a2><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-1863c4a2>awesome-vue</a></li></ul>',7);function W(e,a,t,n,r,l){return(0,o.uX)(),(0,o.CE)("div",A,[(0,o.Lk)("h1",null,(0,j.v_)(t.msg),1),N])}var K={name:"HelloWorld",props:{msg:String}};const M=(0,h.A)(K,[["render",W],["__scopeId","data-v-1863c4a2"]]);var H=M,I={name:"HomeView",components:{HelloWorld:H},data(){return{user:{email:"",name:"",address:"",phone:""}}},methods:{onSubmit(){console.log(this.user)},isPhone(e){const a=/^(09)[0-9]{8}$/;return!!a.test(e)||"需要正確的電話號碼"},isChinese(e){const a=/^[\u4E00-\u9FA5]+$/;return!!a.test(e)||"需要輸入中文姓名"}},created(){console.log(this)}};const q=(0,h.A)(I,[["render",P]]);var z=q;const U=[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,2729))},{path:"/newpage",name:"新頁面",component:()=>t.e(876).then(t.bind(t,876)),children:[{path:"a",component:()=>t.e(375).then(t.bind(t,1375))},{path:"b",component:()=>t.e(977).then(t.bind(t,977))},{path:"c",component:()=>t.e(117).then(t.bind(t,2117))},{path:"namedView",component:()=>t.e(306).then(t.bind(t,306)),children:[{path:"c2a",components:{left:()=>t.e(117).then(t.bind(t,2117)),right:()=>t.e(375).then(t.bind(t,1375))}},{path:"a2b",components:{left:()=>t.e(375).then(t.bind(t,1375)),right:()=>t.e(977).then(t.bind(t,977))}}]}]}],X=(0,L.aE)({history:(0,L.Bt)(),routes:U});var B=X,D=t(482),$=t(3224),R=t(4164),G=t(1066);t(8077);(0,D.Km)("required",$.mw),(0,D.Km)("email",$.Rp),(0,D.Km)("min",$.jk),(0,D.jK)({generateMessage:(0,R.kg)({zh_TW:G}),validateOnInput:!0}),(0,R.xS)("zh_TW");const J=(0,n.Ef)(k).use(B);J.component("Field",D.D0),J.component("Form",D.lV),J.component("ErrorMessage",D.Kw),J.mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var r=a[n]={exports:{}};return e[n].call(r.exports,r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,r){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var i=!0,s=0;s<n.length;s++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(i=!1,r<l&&(l=r));if(i){e.splice(u--,1);var c=o();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(a,n){return t.f[n](e,a),a}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{117:"a9e9100d",306:"595fe626",375:"87d0e2e0",594:"cfb14933",876:"85cd3683",977:"cf701442"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="new-project:";t.l=function(n,o,r,l){if(e[n])e[n].push(o);else{var i,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==a+r){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",a+r),i.src=n),e[n]=[o];var v=function(a,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),a)return a(t)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue3_test/dist/"}(),function(){var e={524:0};t.f.j=function(a,n){var o=t.o(e,a)?e[a]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(t,n){o=e[a]=[t,n]}));n.push(o[2]=r);var l=t.p+t.u(a),i=new Error,s=function(n){if(t.o(e,a)&&(o=e[a],0!==o&&(e[a]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+a+" failed.\n("+r+": "+l+")",i.name="ChunkLoadError",i.type=r,i.request=l,o[1](i)}};t.l(l,s,"chunk-"+a,a)}},t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,r,l=n[0],i=n[1],s=n[2],c=0;if(l.some((function(a){return 0!==e[a]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(s)var u=s(t)}for(a&&a(n);c<l.length;c++)r=l[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=self["webpackChunknew_project"]=self["webpackChunknew_project"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(7898)}));n=t.O(n)})();
//# sourceMappingURL=app.7f3c02ba.js.map