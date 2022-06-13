;(function(){var style=document.createElement('style');style.type='text/css';      style.rel='stylesheet';style.appendChild(document.createTextNode(`:root {
    --button-height-large: 47px;
    --button-height-normal: 39px;
    --button-height-small: 32px;
    --button-radius-large: 12px;
    --button-radius-normal: 12px;
    --button-radius-small: 3px;
    --title-font-size-large: 21px;
    --title-font-size-normal: 20px;
    --title-font-size-small: 19px;
    --button-font-size-large: 18px;
    --button-font-size-normal: 16px;
    --button-font-size-small: 14px;
    --content-font-size: 16px;
    --sub-font-size-large: 15px;
    --sub-font-size-normal: 14px;
    --sub-font-size-small: 13px;
    --text-black-color-a: rgba(0, 0, 0, .85);
    --text-black-color-b: rgba(0, 0, 0, .60);
    --text-black-color-c: rgba(0, 0, 0, .40);
    --text-black-color-d: rgba(0, 0, 0, .20);
    --text-white-color-a: rgba(255, 255, 255, 1);
    --text-white-color-b: rgba(255, 255, 255, .70);
    --layer-black-color-a: rgba(0, 0, 0, 1);
    --layer-black-color-b: rgba(0, 0, 0, .85);
    --layer-black-color-c: rgba(0, 0, 0, .70);
    --layer-black-color-d: rgba(0, 0, 0, .50);
    --layer-black-color-e: rgba(0, 0, 0, .40);
    --layer-black-color-f: rgba(0, 0, 0, .30);
    --layer-black-color-g: rgba(0, 0, 0, .20);
    --layer-black-color-h: rgba(0, 0, 0, .13);
    --layer-black-color-i: rgba(0, 0, 0, .8);
    --layer-black-color-j: rgba(0, 0, 0, .4);
    --layer-black-color-k: rgba(0, 0, 0, .2);
    --layer-white-color-a: rgba(255, 255, 255, 1);
    --layer-white-color-b: rgba(255, 255, 255, .85);
    --layer-white-color-c: rgba(255, 255, 255, .70);
    --primary-color-a: rgb(252, 94, 63, 1);
    --primary-color-b: rgb(252, 94, 63, .4);
    --primary-color-c: rgb(252, 94, 63, .1);
    --van-button-round-border-radius: 999px;
}`));      var head=document.querySelector('head');head.appendChild(style)})();(function(a,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(a=typeof globalThis!="undefined"?globalThis:a||self,t(a.xizi={},a.Vue))})(this,function(a,t){"use strict";function c(e){const n=`xizi-${e}`,o=n.split("-").map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join("");return[n,o]}var S=`.xizi-button{display:inline-flex;padding:10px;background:var(--primary-color-a);color:#fff;outline:none;border:none;border-radius:2px;align-items:center;justify-content:center;cursor:pointer}.xizi-button.block{display:flex;width:100%}.xizi-button.disabled{background-color:var(--layer-black-color-g)}.xizi-button.small{font-size:var(--button-font-size-small);border-radius:var(--button-radius-small);height:var(--button-height-small)}.xizi-button.normal{font-size:var(--button-font-size-normal);border-radius:var(--button-radius-normal);height:var(--button-height-normal)}.xizi-button.large{font-size:var(--button-font-size-large);border-radius:var(--button-radius-large);height:var(--button-height-large)}.xizi-button:active{opacity:.9}.xizi-button.square{border-radius:var(--van-button-round-border-radius)!important}
`,u=(e,n)=>{const o=e.__vccOpts||e;for(const[r,s]of n)o[r]=s;return o};const[z,k]=c("button"),C=t.defineComponent({name:k,props:{color:{type:String},onClick:{type:Function},size:{type:String,default:"normal"},square:{type:Boolean},block:{type:Boolean,default:!1},text:{type:Boolean},disabled:{type:Boolean,default:!1}},setup(e){return{handleClick:o=>{var r;return(r=e.onClick)==null?void 0:r.call(e,o)},nameSpace:z}}});function E(e,n,o,r,s,l){return t.openBlock(),t.createElementBlock("button",{class:t.normalizeClass(`${e.nameSpace} ${e.block?"block":"inline"} ${e.square?"square":""} ${e.size} ${e.disabled?"disabled":""}`),style:t.normalizeStyle({background:e.color})},[t.renderSlot(e.$slots,"default")],6)}var d=u(C,[["render",E],["styles",[S]]]),p={name:d.name,customElement:t.defineCustomElement(d),component:d},_=`.xizi-row{width:100%;display:flex}
`;const[y,b]=c("row"),x=t.defineComponent({name:b,props:{color:{type:String},align:{type:String,default:"start"},justify:{type:String,default:"start"},direction:{type:String,default:"row"},wrap:{type:String,default:"nowrap"}},setup(e){console.info(b,y);const n=t.computed(()=>{const{align:o,justify:r,direction:s,wrap:l}=e,i=`flex-direction: ${s};align-items: ${o};justify-content: ${r};flex-wrap: ${l};`;return console.info(i),i});return{nameSpace:y,style:n}}});function w(e,n,o,r,s,l){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.nameSpace),style:t.normalizeStyle(e.style)},[t.renderSlot(e.$slots,"default")],6)}var m=u(x,[["render",w],["styles",[_]]]),B={name:m.name,customElement:t.defineCustomElement(m),component:m},v="";const[j,q]=c("col"),N=t.defineComponent({name:q,props:{color:{type:String},grow:{type:String,default:"1"},shrink:{type:String,default:"0"},basis:{type:String,default:"0%"},flex:{default:0}},setup(e){const n=t.ref(null),{grow:o,shrink:r,basis:s,flex:l}=e,i={flex:l,flexGrow:o,flexShrink:r,flexBasis:s};return t.onMounted(()=>{var $;if(($=n==null?void 0:n.value)!=null&&$.getRootNode())for(let h in i)n.value.getRootNode().host.style[h]=i[h]}),{nameSpace:j,style:i,ele:n}}});function A(e,n,o,r,s,l){return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(e.nameSpace),ref:"ele"},[t.renderSlot(e.$slots,"default")],2)}var f=u(N,[["render",A],["styles",[v]]]),M={name:f.name,customElement:t.defineCustomElement(f),component:f};const g=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function R(){const e=[p];for(let n=0;n<e.length;n++){const o=e[n],r=g(o.name);customElements.get(r)||customElements.define(r,o.customElement)}}function T(...e){const n=e;for(let o=0;o<n.length;o++){const r=n[o],s=g(r.name);customElements.get(s)||customElements.define(s,r.customElement)}}a.Button=p,a.Col=M,a.Row=B,a.registerAllCustomElements=R,a.registerCustomElement=T,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
