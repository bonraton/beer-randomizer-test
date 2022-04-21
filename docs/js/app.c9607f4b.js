(function(){"use strict";var e={917:function(e,t,n){var r=n(9242),i=n(3396);function a(e,t,n,r,a,o){const s=(0,i.up)("HeaderComponent"),l=(0,i.up)("MainComponent"),u=(0,i.up)("FooterComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),(0,i.Wm)(l),(0,i.Wm)(u)],64)}var o=n(7139);const s={class:"header"},l=(0,i._)("h2",{class:"header__title"},"Beer randomizer",-1),u={class:"profile"},c={class:"profile__info"},d={class:"cont"},p=["src"];function m(e,t,n,a,m,b){const h=(0,i.up)("PreloaderComponent");return(0,i.wg)(),(0,i.iD)("header",s,[l,(0,i._)("div",u,[(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.profile,((e,t)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("li",{key:e.id,class:"profile__item"},(0,o.zw)(e),1)),[[r.F8,"id"!==t&&"avatar"!==t]]))),128))]),(0,i._)("div",d,[(0,i.wy)((0,i._)("img",{src:this.profile.avatar,onError:t[0]||(t[0]=(...e)=>b.onAvatarError&&b.onAvatarError(...e)),class:"profile__image",alt:"avatar"},null,40,p),[[r.F8,!m.isLoading]]),(0,i.Wm)(h,{isVisible:m.isLoading},null,8,["isVisible"])])])])}const b="https://random-data-api.com/api/users/random_user",h=.55,f=.65,g={low:"Keep on party",medium:"You'd better stop",strong:"Probably you need a doctor",extremal:"You need a doctor, urgently!",lethal:"You must be dead!"},_={low:1,medium:2,strong:3,extremal:4},w=0,v={symbol:"Wrong symbol",weight:"Too weighty",alc:"You are dead",min:"To low",required:"Fill in the form"},C={id:"419",brand:"The most famous brand",name:"The best name",style:"The strangest styl",ibu:"The highest Ibu",blg:"Dark as night",alc:"Stronger than rum"},y=/[0-9]/gi;function V(e){return(new Date).getFullYear()-e.slice(0,4)+" years"}function I(e,t,n){const r=e.replace(/%/gi,"").replace(/,/g,"."),i=r*h*n*10,a=i/(t*f);return a.toFixed(2)}function A(e){switch(!0){case e<_.low:return g.low;case e<_.medium&&e>_.low:return g.medium;case e<_.strong&&e>_.medium:return g.strong;case e<_.extremal&&e>_.strong:return g.extremal;case e>=_.extremal:return g.lethal;default:return""}}async function D(){const e=await fetch(b),t=await e.json();return{name:`${t.first_name} ${t.last_name}`,age:V(t.date_of_birth),position:t.employment.title,id:t.id,avatar:t.avatar}}const B={class:"preloader"};function S(e,t,n,a,o,s){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("span",B,null,512)),[[r.F8,n.isVisible]])}var x={name:"PreloaderComponent",props:{isVisible:{type:Boolean,required:!0}}},k=n(89);const O=(0,k.Z)(x,[["render",S]]);var j=O,q={components:{PreloaderComponent:j},name:"HeaderComponent",data(){return{profile:{},isLoading:!1}},methods:{onAvatarError(e){let t=0;this.isLoading=!0,t<4?setTimeout((()=>{t+=t+1,e.target.src=this.profile.avatar,this.isLoading=!1}),3e3):(this.isLoading=!1,clearInterval())},activatePreloader(){this.isLoading=!this.isLoading,console.log(this.isLoading)}},async created(){this.profile=await D()}};const z=(0,k.Z)(q,[["render",m]]);var E=z;const F={class:"footer"},P=(0,i._)("p",{class:"footer__title"},"2022 Oleg Zabolotskii",-1),W=[P];function T(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("footer",F,W)}var Y={name:"FooterComponent"};const Z=(0,k.Z)(Y,[["render",T]]);var L=Z;const H={class:"main"},M={class:"main-container"},N=["disabled"];function K(e,t,n,r,a,o){const s=(0,i.up)("BeerDescription"),l=(0,i.up)("BeerIllustrations"),u=(0,i.up)("BacCalculator");return(0,i.wg)(),(0,i.iD)("main",H,[(0,i._)("div",M,[(0,i.Wm)(s,{isVisible:a.isCardVisible,beerInfo:a.beerInfo},null,8,["isVisible","beerInfo"]),(0,i._)("button",{disabled:o.isDisabled,onClick:t[0]||(t[0]=(...e)=>o.getBeerInfo&&o.getBeerInfo(...e)),class:"main__button"},"Click me",8,N),(0,i.Wm)(l,{isStarted:a.isAnimationStarted},null,8,["isStarted"]),(0,i.Wm)(u,{isVisible:a.isCardVisible},null,8,["isVisible"])])])}const $=(0,i._)("h3",{class:"beer-card__title"},"Beer description",-1),G={class:"beer-card__item"},U={class:"beer-card__item beer-card__item_accent"};function J(e,t,n,a,s,l){return(0,i.wg)(),(0,i.iD)("section",{class:(0,o.C_)(n.isVisible?"beer-card beer-card_description":"beer-card beer-card_description beer-card_hidden")},[$,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.beerInfo,((e,t)=>(0,i.wy)(((0,i.wg)(),(0,i.iD)("ul",{key:t,class:"beer-card__list"},[(0,i._)("li",G,(0,o.zw)(t)+" :",1),(0,i._)("li",U,(0,o.zw)(e),1)])),[[r.F8,"id"!==t]]))),128))],2)}var Q={name:"BeerDescription",data(){return{defaultInfo:C}},props:{beerInfo:{type:Object,required:!0},isVisible:{type:Boolean,required:!0},computed:{beerInfoComputed(){return C.alc}}}};const R=(0,k.Z)(Q,[["render",J]]);var X=R,ee=n.p+"img/beer_left.dd799e97.svg",te=n.p+"img/beer_right.02ed3f59.svg";const ne={class:"main__illustrations"};function re(e,t,n,r,a,s){return(0,i.wg)(),(0,i.iD)("section",ne,[(0,i._)("img",{class:(0,o.C_)("main__illustration "+(n.isStarted?"main__illustration_left":"")),src:ee,alt:"pint-beer"},null,2),(0,i._)("img",{class:(0,o.C_)("main__illustration "+(n.isStarted?"main__illustration_right":"")),src:te,alt:"pint-beer"},null,2)])}var ie={props:{isStarted:{type:Boolean,required:!0}},name:"BeerIllustrations"};const ae=(0,k.Z)(ie,[["render",re]]);var oe=ae;const se=(0,i._)("h3",{class:"beer-card__title"},"BAC calculator",-1),le={class:"form"},ue=["disabled"];function ce(e,t,n,a,s,l){const u=(0,i.up)("InputComponent");return(0,i.wg)(),(0,i.iD)("section",{class:(0,o.C_)(n.isVisible?"beer-card beer-card_form":"beer-card beer-card_hidden")},[se,(0,i._)("form",le,[(0,i.Wm)(u,{inputName:"weight",labelValue:"Your weight in KG",inputValue:s.weight,spanError:l.weightValidation,onInput:l.onInputChange},null,8,["inputValue","spanError","onInput"]),(0,i.Wm)(u,{inputName:"pintAmount",labelValue:"Pint amount",inputValue:s.pintAmount,spanError:l.alcValidation,onInput:l.onInputChange},null,8,["inputValue","spanError","onInput"]),(0,i._)("p",{class:(0,o.C_)(l.textClass)},"Your BAC is around "+(0,o.zw)(s.bac)+" %",3),(0,i._)("p",{class:(0,o.C_)(`${l.textClass} beer-card__text_small`)},(0,o.zw)(l.jokeComputed),3),(0,i._)("button",{onClick:t[0]||(t[0]=(0,r.iM)(((...e)=>l.onSubmit&&l.onSubmit(...e)),["prevent"])),disabled:l.isValidated,class:"beer-card__button"}," Calculate ",8,ue)])],2)}const de=["for"],pe={class:"input-container"},me={class:"input__error"},be=["id","name","value"];function he(e,t,n,a,s,l){return(0,i.wg)(),(0,i.iD)("label",{for:n.inputName,class:"input__label"},[(0,i.Uk)((0,o.zw)(n.labelValue)+" ",1),(0,i._)("div",pe,[(0,i._)("span",me,(0,o.zw)(n.spanError),1),(0,i._)("input",{onInput:t[0]||(t[0]=(0,r.iM)(((...e)=>l.onInputChange&&l.onInputChange(...e)),["prevent"])),class:"input",id:n.inputName,name:n.inputName,type:"text",value:n.inputValue,autocomplete:"off",maxlength:"3"},null,40,be)])],8,de)}var fe={name:"InputComponent",props:{inputName:{type:String,required:!0},labelValue:{type:String,required:!0},inputValue:{type:String,required:!0},spanError:{type:String,required:!0}},methods:{onInputChange(e,t){this.$emit(e.target.name,t)}}};const ge=(0,k.Z)(fe,[["render",he]]);var _e=ge;function we(e,t){const n=e?e.match(y):[];switch(!1){case null!==n:return t;case n.length>=e.length:return t;case e.length>w:return v.required;default:return""}}function ve(e,t,n){switch(!1){case e<=t:return n;case!e.startsWith(w):return v.min;default:return we(e,n)}}var Ce={components:{InputComponent:_e},name:"BacCalculator",props:{isVisible:{type:Boolean,required:!0}},data(){return{bac:0,weight:"70",pintAmount:"1",joke:"",errors:{weight:"",amount:""},isDisabled:!1}},computed:{jokeComputed(){return A(this.bac)},isValidated(){return this.weightValidation.length>1||this.alcValidation.length>1},weightValidation(){const e=we(this.weight,v.symbol),t=ve(this.weight,610,v.weight);return e||t},alcValidation(){const e=we(this.pintAmount,v.symbol),t=ve(this.pintAmount,77,v.alc);return e||t},textClass(){return this.bac>0?"beer-card__text":"beer-card__text beer-card__text_hidden"}},methods:{onSubmit(){const e=localStorage.getItem("alcohol")||"4,5%";this.bac=I(e,this.weight,this.pintAmount)},onInputChange(e){this[e.target.id]=e.target.value}}};const ye=(0,k.Z)(Ce,[["render",ce]]);var Ve=ye,Ie=n.p+"media/beer_sound_low.f4d8e7bb.mp3",Ae={components:{BeerDescription:X,BeerIllustrations:oe,BacCalculator:Ve},name:"MainComponent",data(){return{beerInfo:C,isCardVisible:!1,isAnimationStarted:!1,sound:new Audio(Ie)}},computed:{isDisabled(){return this.isAnimationStarted}},methods:{async getBeerInfo(){this.onPlayAudio(this.sound),this.isAnimationStarted=!0,this.isCardVisible=!0,localStorage.setItem("beerAlc",this.beerInfo.alc),setTimeout((()=>{this.isAnimationStarted=!1}),1700)},onPlayAudio(){this.sound&&this.sound.play()},created(){this.onPlayAudio()}}};const De=(0,k.Z)(Ae,[["render",K]]);var Be=De,Se={name:"App",components:{HeaderComponent:E,FooterComponent:L,MainComponent:Be}};const xe=(0,k.Z)(Se,[["render",a]]);var ke=xe;(0,r.ri)(ke).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/beer-randomizer-test/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkbeer_randomizer"]=self["webpackChunkbeer_randomizer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(917)}));r=n.O(r)})();
//# sourceMappingURL=app.c9607f4b.js.map