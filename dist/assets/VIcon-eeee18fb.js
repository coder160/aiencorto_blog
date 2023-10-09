import{r as O,Z as ce,k as de,w as H,aa as G,ad as X,p as b,D as k,E as A,m as C,q as V,v as l,az as ve,T as D,O as L,N as fe,aA as ge,S as Y,c as h,b as g,x as Z,W as K,s as z,ap as me,_ as he,a3 as U,a4 as ye,Q as be,a7 as Se,P as F,aB as I,a8 as p,aC as J,aD as xe,aE as _e,G as ee,t as te,H as ne,I as Ce,o as Te,J as ze,a2 as Be,aF as ke,aG as Ve,aH as Ie}from"./index-b3134c86.js";function st(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=O(),n=O();if(ce){const o=new ResizeObserver(r=>{e==null||e(r,o),r.length&&(s==="content"?n.value=r[0].contentRect:n.value=r[0].target.getBoundingClientRect())});de(()=>{o.disconnect()}),H(t,(r,a)=>{a&&(o.unobserve(G(a)),n.value=void 0),r&&o.observe(G(r))},{flush:"post"})}return{resizeRef:t,contentRect:X(n)}}const we=b({text:String,...k(),...A()},"VToolbarTitle"),Pe=C()({name:"VToolbarTitle",props:we(),setup(e,s){let{slots:t}=s;return V(()=>{const n=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var o;return[n&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(o=t.default)==null?void 0:o.call(t)])]}})}),{}}}),Ne=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function S(e,s,t){return C()({name:e,props:Ne({mode:t,origin:s}),setup(n,o){let{slots:r}=o;const a={onBeforeEnter(i){n.origin&&(i.style.transformOrigin=n.origin)},onLeave(i){if(n.leaveAbsolute){const{offsetTop:v,offsetLeft:c,offsetWidth:d,offsetHeight:f}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${v}px`,i.style.left=`${c}px`,i.style.width=`${d}px`,i.style.height=`${f}px`}n.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(n.leaveAbsolute&&(i!=null&&i._transitionInitialStyles)){const{position:v,top:c,left:d,width:f,height:y}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=v||"",i.style.top=c||"",i.style.left=d||"",i.style.width=f||"",i.style.height=y||""}}};return()=>{const i=n.group?ve:D;return L(i,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:a},r.default)}}})}function ae(e,s){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return C()({name:e,props:{mode:{type:String,default:t},disabled:Boolean},setup(n,o){let{slots:r}=o;return()=>L(D,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:s},r.default)}})}function se(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=fe(`offset-${t}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[t]:a.style[t]}},onEnter(a){const i=a._initialStyle;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const v=`${a[n]}px`;a.style[t]="0",a.offsetHeight,a.style.transition=i.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[t]=v})},onAfterEnter:r,onEnterCancelled:r,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[t]:a.style[t]},a.style.overflow="hidden",a.style[t]=`${a[n]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[t]="0")},onAfterLeave:o,onLeaveCancelled:o};function o(a){e&&a._parent&&a._parent.classList.remove(e),r(a)}function r(a){const i=a._initialStyle[t];a.style.overflow=a._initialStyle.overflow,i!=null&&(a.style[t]=i),delete a._initialStyle}}S("fab-transition","center center","out-in");S("dialog-bottom-transition");S("dialog-top-transition");S("fade-transition");S("scale-transition");S("scroll-x-transition");S("scroll-x-reverse-transition");S("scroll-y-transition");S("scroll-y-reverse-transition");S("slide-x-transition");S("slide-x-reverse-transition");const it=S("slide-y-transition");S("slide-y-reverse-transition");const Re=ae("expand-transition",se()),ot=ae("expand-x-transition",se("",!0)),$e=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),W=C(!1)({name:"VDefaultsProvider",props:$e(),setup(e,s){let{slots:t}=s;const{defaults:n,disabled:o,reset:r,root:a,scoped:i}=ge(e);return Y(n,{reset:r,root:a,scoped:i,disabled:o}),()=>{var v;return(v=t.default)==null?void 0:v.call(t)}}});const Ee=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function He(e){return{dimensionStyles:h(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}function Oe(e){return{aspectStyles:h(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const ie=b({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...Ee()},"VResponsive"),Q=C()({name:"VResponsive",props:ie(),setup(e,s){let{slots:t}=s;const{aspectStyles:n}=Oe(e),{dimensionStyles:o}=He(e);return V(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[l("div",{class:"v-responsive__sizer",style:n.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&l("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),We=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),E=(e,s)=>{let{slots:t}=s;const{transition:n,disabled:o,...r}=e,{component:a=D,...i}=typeof n=="object"?n:{};return L(a,Z(typeof n=="string"?{name:o?"":n}:i,r,{disabled:o}),t)};function Ae(e,s){if(!K)return;const t=s.modifiers||{},n=s.value,{handler:o,options:r}=typeof n=="object"?n:{handler:n,options:{}},a=new IntersectionObserver(function(){var f;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const c=(f=e._observe)==null?void 0:f[s.instance.$.uid];if(!c)return;const d=i.some(y=>y.isIntersecting);o&&(!t.quiet||c.init)&&(!t.once||d||c.init)&&o(d,i,v),d&&t.once?oe(e,s):c.init=!0},r);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:a},a.observe(e)}function oe(e,s){var n;const t=(n=e._observe)==null?void 0:n[s.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const De={mounted:Ae,unmounted:oe},Le=De,Fe=b({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...ie(),...k(),...We()},"VImg"),je=C()({name:"VImg",directives:{intersect:Le},props:Fe(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:t,slots:n}=s;const o=z(""),r=O(),a=z(e.eager?"loading":"idle"),i=z(),v=z(),c=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=h(()=>c.value.aspect||i.value/v.value||0);H(()=>e.src,()=>{f(a.value!=="idle")}),H(d,(u,m)=>{!u&&m&&r.value&&T(r.value)}),me(()=>f());function f(u){if(!(e.eager&&u)&&!(K&&!u&&!e.eager)){if(a.value="loading",c.value.lazySrc){const m=new Image;m.src=c.value.lazySrc,T(m,null)}c.value.src&&he(()=>{var m,_;if(t("loadstart",((m=r.value)==null?void 0:m.currentSrc)||c.value.src),(_=r.value)!=null&&_.complete){if(r.value.naturalWidth||x(),a.value==="error")return;d.value||T(r.value,null),y()}else d.value||T(r.value),w()})}}function y(){var u;w(),a.value="loaded",t("load",((u=r.value)==null?void 0:u.currentSrc)||c.value.src)}function x(){var u;a.value="error",t("error",((u=r.value)==null?void 0:u.currentSrc)||c.value.src)}function w(){const u=r.value;u&&(o.value=u.currentSrc||u.src)}let P=-1;function T(u){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const _=()=>{clearTimeout(P);const{naturalHeight:q,naturalWidth:M}=u;q||M?(i.value=M,v.value=q):!u.complete&&a.value==="loading"&&m!=null?P=window.setTimeout(_,m):(u.currentSrc.endsWith(".svg")||u.currentSrc.startsWith("data:image/svg+xml"))&&(i.value=1,v.value=1)};_()}const B=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),N=()=>{var _;if(!c.value.src||a.value==="idle")return null;const u=l("img",{class:["v-img__img",B.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:y,onError:x},null),m=(_=n.sources)==null?void 0:_.call(n);return l(E,{transition:e.transition,appear:!0},{default:()=>[U(m?l("picture",{class:"v-img__picture"},[m,u]):u,[[Se,a.value==="loaded"]])]})},R=()=>l(E,{transition:e.transition},{default:()=>[c.value.lazySrc&&a.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",B.value],src:c.value.lazySrc,alt:e.alt},null)]}),$=()=>n.placeholder?l(E,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!n.error)&&l("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,le=()=>n.error?l(E,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&l("div",{class:"v-img__error"},[n.error()])]}):null,ue=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,j=z(!1);{const u=H(d,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{j.value=!0})}),u())})}return V(()=>{const[u]=Q.filterProps(e);return U(l(Q,Z({class:["v-img",{"v-img--booting":!j.value},e.class],style:[{width:g(e.width==="auto"?i.value:e.width)},e.style]},u,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(be,null,[l(N,null,null),l(R,null,null),l(ue,null,null),l($,null,null),l(le,null,null)]),default:n.default}),[[ye("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:r,state:a,naturalWidth:i,naturalHeight:v}}}),qe=b({border:[Boolean,Number,String]},"border");function Me(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F();return{borderClasses:h(()=>{const n=I(e)?e.value:e.border,o=[];if(n===!0||n==="")o.push(`${s}--border`);else if(typeof n=="string"||n===0)for(const r of String(n).split(" "))o.push(`border-${r}`);return o})}}function re(e){return p(()=>{const s=[],t={};if(e.value.background)if(J(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text){const n=xe(e.value.background);if(n.a==null||n.a===1){const o=_e(n);t.color=o,t.caretColor=o}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(J(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:t}})}function Ge(e,s){const t=h(()=>({text:I(e)?e.value:s?e[s]:null})),{colorClasses:n,colorStyles:o}=re(t);return{textColorClasses:n,textColorStyles:o}}function Ue(e,s){const t=h(()=>({background:I(e)?e.value:s?e[s]:null})),{colorClasses:n,colorStyles:o}=re(t);return{backgroundColorClasses:n,backgroundColorStyles:o}}const Je=b({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function Qe(e){return{elevationClasses:h(()=>{const t=I(e)?e.value:e.elevation,n=[];return t==null||n.push(`elevation-${t}`),n})}}const Xe=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ye(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F();return{roundedClasses:h(()=>{const n=I(e)?e.value:e.rounded,o=[];if(n===!0||n==="")o.push(`${s}--rounded`);else if(typeof n=="string"||n===0)for(const r of String(n).split(" "))o.push(`rounded-${r}`);return o})}}const Ze=[null,"prominent","default","comfortable","compact"],Ke=b({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ze.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...qe(),...k(),...Je(),...Xe(),...A({tag:"header"}),...ee()},"VToolbar"),rt=C()({name:"VToolbar",props:Ke(),setup(e,s){var x;let{slots:t}=s;const{backgroundColorClasses:n,backgroundColorStyles:o}=Ue(te(e,"color")),{borderClasses:r}=Me(e),{elevationClasses:a}=Qe(e),{roundedClasses:i}=Ye(e),{themeClasses:v}=ne(e),{rtlClasses:c}=Ce(),d=z(!!(e.extended||(x=t.extension)!=null&&x.call(t))),f=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=h(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Y({VBtn:{variant:"text"}}),V(()=>{var B;const w=!!(e.title||t.title),P=!!(t.image||e.image),T=(B=t.extension)==null?void 0:B.call(t);return d.value=!!(e.extended||T),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,r.value,a.value,i.value,v.value,c.value,e.class],style:[o.value,e.style]},{default:()=>[P&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(je,{key:"image-img",cover:!0,src:e.image},null)]),l(W,{defaults:{VTabs:{height:g(f.value)}}},{default:()=>{var N,R,$;return[l("div",{class:"v-toolbar__content",style:{height:g(f.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(N=t.prepend)==null?void 0:N.call(t)]),w&&l(Pe,{key:"title",text:e.title},{text:t.title}),(R=t.default)==null?void 0:R.call(t),t.append&&l("div",{class:"v-toolbar__append"},[($=t.append)==null?void 0:$.call(t)])])]}}),l(W,{defaults:{VTabs:{height:g(y.value)}}},{default:()=>[l(Re,null,{default:()=>[d.value&&l("div",{class:"v-toolbar__extension",style:{height:g(y.value)}},[T])]})]})]})}),{contentHeight:f,extensionHeight:y}}});function lt(){const e=z(!1);return Te(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:X(e)}}const pe=["x-small","small","default","large","x-large"],et=b({size:{type:[String,Number],default:"default"}},"size");function tt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:F();return p(()=>{let t,n;return ze(pe,e.size)?t=`${s}--size-${e.size}`:e.size&&(n={width:g(e.size),height:g(e.size)}),{sizeClasses:t,sizeStyles:n}})}const nt=b({color:String,start:Boolean,end:Boolean,icon:Be,...k(),...et(),...A({tag:"i"}),...ee()},"VIcon"),ut=C()({name:"VIcon",props:nt(),setup(e,s){let{attrs:t,slots:n}=s;const o=O(),{themeClasses:r}=ne(e),{iconData:a}=ke(h(()=>o.value||e.icon)),{sizeClasses:i}=tt(e),{textColorClasses:v,textColorStyles:c}=Ge(te(e,"color"));return V(()=>{var f,y;const d=(f=n.default)==null?void 0:f.call(n);return d&&(o.value=(y=Ve(d).filter(x=>x.type===Ie&&x.children&&typeof x.children=="string")[0])==null?void 0:y.children),l(a.value.component,{tag:e.tag,icon:a.value.icon,class:["v-icon","notranslate",r.value,i.value,v.value,{"v-icon--clickable":!!t.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[i.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},c.value,e.style],role:t.onClick?"button":void 0,"aria-hidden":!t.onClick},{default:()=>[d]})}),{}}});export{Le as I,E as M,rt as V,lt as a,we as b,Pe as c,ut as d,re as e,qe as f,Je as g,Xe as h,Me as i,Qe as j,Ye as k,et as l,Ke as m,tt as n,Ge as o,Ue as p,Ee as q,He as r,W as s,je as t,st as u,ot as v,We as w,it as x,Re as y};
