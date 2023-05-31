(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function ss(){}const Zh=s=>s;function K0(s){return s()}function Vl(){return Object.create(null)}function Ni(s){s.forEach(K0)}function cl(s){return typeof s=="function"}function Kh(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function Jh(s){return Object.keys(s).length===0}const J0=typeof window<"u";let Qh=J0?()=>window.performance.now():()=>Date.now(),ul=J0?s=>requestAnimationFrame(s):ss;const gr=new Set;function Q0(s){gr.forEach(t=>{t.c(s)||(gr.delete(t),t.f())}),gr.size!==0&&ul(Q0)}function tf(s){let t;return gr.size===0&&ul(Q0),{promise:new Promise(e=>{gr.add(t={c:s,f:e})}),abort(){gr.delete(t)}}}function Xn(s,t){s.appendChild(t)}function tu(s){if(!s)return document;const t=s.getRootNode?s.getRootNode():s.ownerDocument;return t&&t.host?t:s.ownerDocument}function ef(s){const t=Yn("style");return nf(tu(s),t),t.sheet}function nf(s,t){return Xn(s.head||s,t),t.sheet}function To(s,t,e){s.insertBefore(t,e||null)}function as(s){s.parentNode&&s.parentNode.removeChild(s)}function Yn(s){return document.createElement(s)}function rf(s){return document.createTextNode(s)}function Ua(){return rf(" ")}function Ts(s,t,e,n){return s.addEventListener(t,e,n),()=>s.removeEventListener(t,e,n)}function Ce(s,t,e){e==null?s.removeAttribute(t):s.getAttribute(t)!==e&&s.setAttribute(t,e)}function _r(s){return s===""?null:+s}function sf(s){return Array.from(s.childNodes)}function Bi(s,t){s.value=t??""}function af(s,t,{bubbles:e=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(s,e,n,t),i}const la=new Map;let ca=0;function of(s){let t=5381,e=s.length;for(;e--;)t=(t<<5)-t^s.charCodeAt(e);return t>>>0}function lf(s,t){const e={stylesheet:ef(t),rules:{}};return la.set(s,e),e}function cf(s,t,e,n,i,r,a,o=0){const l=16.666/n;let c=`{
`;for(let m=0;m<=1;m+=l){const d=t+(e-t)*r(m);c+=m*100+`%{${a(d,1-d)}}
`}const u=c+`100% {${a(e,1-e)}}
}`,h=`__svelte_${of(u)}_${o}`,f=tu(s),{stylesheet:p,rules:_}=la.get(f)||lf(f,s);_[h]||(_[h]=!0,p.insertRule(`@keyframes ${h} ${u}`,p.cssRules.length));const g=s.style.animation||"";return s.style.animation=`${g?`${g}, `:""}${h} ${n}ms linear ${i}ms 1 both`,ca+=1,h}function uf(s,t){const e=(s.style.animation||"").split(", "),n=e.filter(t?r=>r.indexOf(t)<0:r=>r.indexOf("__svelte")===-1),i=e.length-n.length;i&&(s.style.animation=n.join(", "),ca-=i,ca||hf())}function hf(){ul(()=>{ca||(la.forEach(s=>{const{ownerNode:t}=s.stylesheet;t&&as(t)}),la.clear())})}let hl;function ts(s){hl=s}const lr=[],Hl=[];let xr=[];const Wl=[],ff=Promise.resolve();let Eo=!1;function df(){Eo||(Eo=!0,ff.then(eu))}function ua(s){xr.push(s)}const Oa=new Set;let ki=0;function eu(){if(ki!==0)return;const s=hl;do{try{for(;ki<lr.length;){const t=lr[ki];ki++,ts(t),pf(t.$$)}}catch(t){throw lr.length=0,ki=0,t}for(ts(null),lr.length=0,ki=0;Hl.length;)Hl.pop()();for(let t=0;t<xr.length;t+=1){const e=xr[t];Oa.has(e)||(Oa.add(e),e())}xr.length=0}while(lr.length);for(;Wl.length;)Wl.pop()();Eo=!1,Oa.clear(),ts(s)}function pf(s){if(s.fragment!==null){s.update(),Ni(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(ua)}}function mf(s){const t=[],e=[];xr.forEach(n=>s.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),xr=t}let Vr;function gf(){return Vr||(Vr=Promise.resolve(),Vr.then(()=>{Vr=null})),Vr}function ql(s,t,e){s.dispatchEvent(af(`${t?"intro":"outro"}${e}`))}const ea=new Set;let jn;function _f(){jn={r:0,c:[],p:jn}}function xf(){jn.r||Ni(jn.c),jn=jn.p}function na(s,t){s&&s.i&&(ea.delete(s),s.i(t))}function Xl(s,t,e,n){if(s&&s.o){if(ea.has(s))return;ea.add(s),jn.c.push(()=>{ea.delete(s),n&&(e&&s.d(1),n())}),s.o(t)}else n&&n()}const vf={duration:0};function Mf(s,t,e){const n={direction:"out"};let i=t(s,e,n),r=!0,a;const o=jn;o.r+=1;function l(){const{delay:c=0,duration:u=300,easing:h=Zh,tick:f=ss,css:p}=i||vf;p&&(a=cf(s,1,0,u,c,h,p));const _=Qh()+c,g=_+u;ua(()=>ql(s,!1,"start")),tf(m=>{if(r){if(m>=g)return f(0,1),ql(s,!1,"end"),--o.r||Ni(o.c),!1;if(m>=_){const d=h((m-_)/u);f(1-d,d)}}return r})}return cl(i)?gf().then(()=>{i=i(n),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),r&&(a&&uf(s,a),r=!1)}}}const yf=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Sf(s,t,e,n){const{fragment:i,after_update:r}=s.$$;i&&i.m(t,e),n||ua(()=>{const a=s.$$.on_mount.map(K0).filter(cl);s.$$.on_destroy?s.$$.on_destroy.push(...a):Ni(a),s.$$.on_mount=[]}),r.forEach(ua)}function bf(s,t){const e=s.$$;e.fragment!==null&&(mf(e.after_update),Ni(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function wf(s,t){s.$$.dirty[0]===-1&&(lr.push(s),df(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function Tf(s,t,e,n,i,r,a,o=[-1]){const l=hl;ts(s);const c=s.$$={fragment:null,ctx:[],props:r,update:ss,not_equal:i,bound:Vl(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Vl(),dirty:o,skip_bound:!1,root:t.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=e?e(s,t.props||{},(h,f,...p)=>{const _=p.length?p[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&wf(s,h)),f}):[],c.update(),u=!0,Ni(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const h=sf(t.target);c.fragment&&c.fragment.l(h),h.forEach(as)}else c.fragment&&c.fragment.c();t.intro&&na(s.$$.fragment),Sf(s,t.target,t.anchor,t.customElement),eu()}ts(l)}class Ef{$destroy(){bf(this,1),this.$destroy=ss}$on(t,e){if(!cl(e))return ss;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!Jh(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fl="151",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Af=0,Yl=1,Cf=2,nu=1,Pf=2,$r=3,ii=0,Ie=1,Un=2,ti=0,vr=1,jl=2,$l=3,Zl=4,Lf=5,cr=100,Rf=101,Df=102,Kl=103,Jl=104,If=200,Uf=201,Of=202,Nf=203,iu=204,ru=205,Ff=206,zf=207,Bf=208,kf=209,Gf=210,Vf=0,Hf=1,Wf=2,Ao=3,qf=4,Xf=5,Yf=6,jf=7,su=0,$f=1,Zf=2,On=0,Kf=1,Jf=2,Qf=3,td=4,ed=5,au=300,Cr=301,Pr=302,Co=303,Po=304,Sa=306,Lo=1e3,hn=1001,Ro=1002,Le=1003,Ql=1004,Na=1005,Qe=1006,nd=1007,os=1008,Ci=1009,id=1010,rd=1011,ou=1012,sd=1013,Mi=1014,yi=1015,ls=1016,ad=1017,od=1018,Mr=1020,ld=1021,fn=1023,cd=1024,ud=1025,wi=1026,Lr=1027,hd=1028,fd=1029,dd=1030,pd=1031,md=1033,Fa=33776,za=33777,Ba=33778,ka=33779,tc=35840,ec=35841,nc=35842,ic=35843,gd=36196,rc=37492,sc=37496,ac=37808,oc=37809,lc=37810,cc=37811,uc=37812,hc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,_c=37819,xc=37820,vc=37821,Ga=36492,_d=36283,Mc=36284,yc=36285,Sc=36286,Pi=3e3,$t=3001,xd=3200,vd=3201,Md=0,yd=1,gn="srgb",cs="srgb-linear",lu="display-p3",Va=7680,Sd=519,bc=35044,wc="300 es",Do=1035;class Fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,Io=180/Math.PI;function xs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[s&255]+xe[s>>8&255]+xe[s>>16&255]+xe[s>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function bd(s,t){return(s%t+t)%t}function Wa(s,t,e){return(1-e)*s+e*t}function Tc(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Es(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],S=i[1],y=i[4],x=i[7],M=i[2],E=i[5],C=i[8];return r[0]=a*g+o*S+l*M,r[3]=a*m+o*y+l*E,r[6]=a*d+o*x+l*C,r[1]=c*g+u*S+h*M,r[4]=c*m+u*y+h*E,r[7]=c*d+u*x+h*C,r[2]=f*g+p*S+_*M,r[5]=f*m+p*y+_*E,r[8]=f*d+p*x+_*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,_=e*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new zt;function cu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Td=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ed=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ad(s){return s.convertSRGBToLinear().applyMatrix3(Ed)}function Cd(s){return s.applyMatrix3(Td).convertLinearToSRGB()}const Pd={[cs]:s=>s,[gn]:s=>s.convertSRGBToLinear(),[lu]:Ad},Ld={[cs]:s=>s,[gn]:s=>s.convertLinearToSRGB(),[lu]:Cd},Ge={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return cs},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Pd[t],i=Ld[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}};let Hi;class uu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=us("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yr(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yr(e[n]/255)*255):e[n]=yr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class hu{constructor(t=null){this.isSource=!0,this.uuid=xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ya(i[a].image)):r.push(Ya(i[a]))}else r=Ya(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ya(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class Ue extends Fi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=hn,i=hn,r=Qe,a=os,o=fn,l=Ci,c=Ue.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=xs(),this.name="",this.source=new hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lo:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lo:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=au;Ue.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(p+1)/2,M=(d+1)/2,E=(u+f)/4,C=(h+g)/4,P=(_+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=C/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=P/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=P/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends Fi{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fu extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dd extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==p||u!==_){let m=1-o;const d=l*f+c*p+u*_+h*g,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,d*S);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const x=o*S;if(l=l*m+f*x,c=c*m+p*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*p-c*f,t[e+1]=l*_+u*f+c*h-o*p,t[e+2]=c*_+u*p+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-r*i,h=l*i+r*n-a*e,f=-r*e-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new I,Ec=new Ri;class vs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox),Wi.applyMatrix4(t.matrixWorld),this.union(Wi);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let a=0,o=r.count;a<o;a++)Tn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Tn)}else i.boundingBox===null&&i.computeBoundingBox(),Wi.copy(i.boundingBox),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const n=t.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),As.subVectors(this.max,Hr),qi.subVectors(t.a,Hr),Xi.subVectors(t.b,Hr),Yi.subVectors(t.c,Hr),Gn.subVectors(Xi,qi),Vn.subVectors(Yi,Xi),hi.subVectors(qi,Yi);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-hi.z,hi.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,hi.z,0,-hi.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-hi.y,hi.x,0];return!$a(e,qi,Xi,Yi,As)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,qi,Xi,Yi,As))?!1:(Cs.crossVectors(Gn,Vn),e=[Cs.x,Cs.y,Cs.z],$a(e,qi,Xi,Yi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new I,new I,new I,new I,new I,new I,new I,new I],Tn=new I,Wi=new vs,qi=new I,Xi=new I,Yi=new I,Gn=new I,Vn=new I,hi=new I,Hr=new I,As=new I,Cs=new I,fi=new I;function $a(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Id=new vs,Wr=new I,Za=new I;class Ms{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wr.subVectors(t,this.center);const e=Wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wr.copy(t.center).add(Za)),this.expandByPoint(Wr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,Ka=new I,Ps=new I,Hn=new I,Ja=new I,Ls=new I,Qa=new I;class dl{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ka.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Ka);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ps),o=Hn.dot(this.direction),l=-Hn.dot(Ps),c=Hn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ka).addScaledVector(Ps,f),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,r){Ja.subVectors(e,t),Ls.subVectors(n,t),Qa.crossVectors(Ja,Ls);let a=this.direction.dot(Qa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(Ls.crossVectors(Hn,Ls));if(l<0)return null;const c=o*this.direction.dot(Ja.cross(Hn));if(c<0||l+c>a)return null;const u=-o*Hn.dot(Qa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,l,c,u,h,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,_=c*u,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=a*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Od)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Wn.crossVectors(n,Ve),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Wn.crossVectors(n,Ve)),Wn.normalize(),Rs.crossVectors(Ve,Wn),i[0]=Wn.x,i[4]=Rs.x,i[8]=Ve.x,i[1]=Wn.y,i[5]=Rs.y,i[9]=Ve.y,i[2]=Wn.z,i[6]=Rs.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],S=n[3],y=n[7],x=n[11],M=n[15],E=i[0],C=i[4],P=i[8],v=i[12],T=i[1],V=i[5],G=i[9],D=i[13],U=i[2],z=i[6],J=i[10],Z=i[14],W=i[3],tt=i[7],X=i[11],xt=i[15];return r[0]=a*E+o*T+l*U+c*W,r[4]=a*C+o*V+l*z+c*tt,r[8]=a*P+o*G+l*J+c*X,r[12]=a*v+o*D+l*Z+c*xt,r[1]=u*E+h*T+f*U+p*W,r[5]=u*C+h*V+f*z+p*tt,r[9]=u*P+h*G+f*J+p*X,r[13]=u*v+h*D+f*Z+p*xt,r[2]=_*E+g*T+m*U+d*W,r[6]=_*C+g*V+m*z+d*tt,r[10]=_*P+g*G+m*J+d*X,r[14]=_*v+g*D+m*Z+d*xt,r[3]=S*E+y*T+x*U+M*W,r[7]=S*C+y*V+x*z+M*tt,r[11]=S*P+y*G+x*J+M*X,r[15]=S*v+y*D+x*Z+M*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+g*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],S=h*m*c-g*f*c+g*l*p-o*m*p-h*l*d+o*f*d,y=_*f*c-u*m*c-_*l*p+a*m*p+u*l*d-a*f*d,x=u*g*c-_*h*c+_*o*p-a*g*p-u*o*d+a*h*d,M=_*h*l-u*g*l-_*o*f+a*g*f+u*o*m-a*h*m,E=e*S+n*y+i*x+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=S*C,t[1]=(g*f*r-h*m*r-g*i*p+n*m*p+h*i*d-n*f*d)*C,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*d+n*l*d)*C,t[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*C,t[4]=y*C,t[5]=(u*m*r-_*f*r+_*i*p-e*m*p-u*i*d+e*f*d)*C,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*d-e*l*d)*C,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*p+e*l*p)*C,t[8]=x*C,t[9]=(_*h*r-u*g*r-_*n*p+e*g*p+u*n*d-e*h*d)*C,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*d+e*o*d)*C,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*C,t[12]=M*C,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*m+e*h*m)*C,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*C,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,_=r*h,g=a*u,m=a*h,d=o*h,S=l*c,y=l*u,x=l*h,M=n.x,E=n.y,C=n.z;return i[0]=(1-(g+d))*M,i[1]=(p+x)*M,i[2]=(_-y)*M,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(f+d))*E,i[6]=(m+S)*E,i[7]=0,i[8]=(_+y)*C,i[9]=(m-S)*C,i[10]=(1-(f+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),o=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const c=1/r,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a){const o=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,r,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-r),h=(e+t)*l,f=(n+i)*c,p=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new I,on=new ie,Ud=new I(0,0,0),Od=new I(1,1,1),Wn=new I,Rs=new I,Ve=new I,Ac=new ie,Cc=new Ri;class ba{constructor(t=0,e=0,n=0,i=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nd=0;const Pc=new I,$i=new Ri,An=new ie,Ds=new I,qr=new I,Fd=new I,zd=new Ri,Lc=new I(1,0,0),Rc=new I(0,1,0),Dc=new I(0,0,1),Bd={type:"added"},Ic={type:"removed"};class be extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new I,e=new ba,n=new Ri,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new zt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Lc,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Dc,t)}translateOnAxis(t,e){return Pc.copy(t).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lc,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(qr,Ds,this.up):An.lookAt(Ds,qr,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(An),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ic)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ic)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,Fd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new I,Cn=new I,to=new I,Pn=new I,Zi=new I,Ki=new I,Uc=new I,eo=new I,no=new I,io=new I;let Is=!1;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ln.subVectors(i,e),Cn.subVectors(n,e),to.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Cn),l=ln.dot(to),c=Cn.dot(Cn),u=Cn.dot(to),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(t,e,n,i,r,a,o,l){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),this.getInterpolation(t,e,n,i,r,a,o,l)}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Pn),l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Cn.subVectors(t,e),ln.cross(Cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Is=!0),un.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Zi.subVectors(i,n),Ki.subVectors(r,n),eo.subVectors(t,n);const l=Zi.dot(eo),c=Ki.dot(eo);if(l<=0&&c<=0)return e.copy(n);no.subVectors(t,i);const u=Zi.dot(no),h=Ki.dot(no);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Zi,a);io.subVectors(t,r);const p=Zi.dot(io),_=Ki.dot(io);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ki,o);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Uc.subVectors(r,i),o=(h-u)/(h-u+(p-_)),e.copy(i).addScaledVector(Uc,o);const d=1/(m+g+f);return a=g*d,o=f*d,e.copy(n).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let kd=0;class Br extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=vr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ro(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ge.workingColorSpace){if(t=bd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ro(a,r,t+1/3),this.g=ro(a,r,t),this.b=ro(a,r,t-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ge.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ge.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const n=pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Ge.fromWorkingColorSpace(ve.copy(this),t),Re(ve.r*255,0,255)<<16^Re(ve.g*255,0,255)<<8^Re(ve.b*255,0,255)<<0}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ge.workingColorSpace){Ge.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,r=ve.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=gn){Ge.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(cn),cn.h+=t,cn.s+=e,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(cn),t.getHSL(Us);const n=Wa(cn.h,Us.h,e),i=Wa(cn.s,Us.s,e),r=Wa(cn.l,Us.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new qt;qt.NAMES=pu;class ha extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new I,Os=new Ot;class yn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mu extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gu extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gd=0;const Ze=new ie,so=new be,Ji=new I,He=new vs,Xr=new vs,he=new I;class je extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cu(t)?gu:mu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xr.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(He.min,Xr.min),He.expandByPoint(he),he.addVectors(He.max,Xr.max),He.expandByPoint(he)):(He.expandByPoint(Xr.min),He.expandByPoint(Xr.max))}He.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)he.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(he));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)he.fromBufferAttribute(o,c),l&&(Ji.fromBufferAttribute(t,c),he.add(Ji)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new I,u[T]=new I;const h=new I,f=new I,p=new I,_=new Ot,g=new Ot,m=new Ot,d=new I,S=new I;function y(T,V,G){h.fromArray(i,T*3),f.fromArray(i,V*3),p.fromArray(i,G*3),_.fromArray(a,T*2),g.fromArray(a,V*2),m.fromArray(a,G*2),f.sub(h),p.sub(h),g.sub(_),m.sub(_);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),S.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),c[T].add(d),c[V].add(d),c[G].add(d),u[T].add(S),u[V].add(S),u[G].add(S))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let T=0,V=x.length;T<V;++T){const G=x[T],D=G.start,U=G.count;for(let z=D,J=D+U;z<J;z+=3)y(n[z+0],n[z+1],n[z+2])}const M=new I,E=new I,C=new I,P=new I;function v(T){C.fromArray(r,T*3),P.copy(C);const V=c[T];M.copy(V),M.sub(C.multiplyScalar(C.dot(V))).normalize(),E.crossVectors(P,V);const D=E.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=D}for(let T=0,V=x.length;T<V;++T){const G=x[T],D=G.start,U=G.count;for(let z=D,J=D+U;z<J;z+=3)v(n[z+0]),v(n[z+1]),v(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new yn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oc=new ie,mn=new dl,Ns=new Ms,Nc=new I,Qi=new I,tr=new I,er=new I,ao=new I,Fs=new I,zs=new Ot,Bs=new Ot,ks=new Ot,Fc=new I,zc=new I,Bc=new I,Gs=new I,Vs=new I;class vn extends be{constructor(t=new je,e=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ao.fromBufferAttribute(h,t),a?Fs.addScaledVector(ao,u):Fs.addScaledVector(ao.sub(e),u))}e.add(Fs)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),mn.copy(t.ray).recast(t.near),Ns.containsPoint(mn.origin)===!1&&(mn.intersectSphere(Ns,Nc)===null||mn.origin.distanceToSquared(Nc)>(t.far-t.near)**2))||(Oc.copy(r).invert(),mn.copy(t.ray).applyMatrix4(Oc),n.boundingBox!==null&&mn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.attributes.normal,f=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,M=y;x<M;x+=3){const E=o.getX(x),C=o.getX(x+1),P=o.getX(x+2);a=Hs(this,d,t,mn,c,u,h,E,C,P),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const S=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);a=Hs(this,i,t,mn,c,u,h,S,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=i[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,M=y;x<M;x+=3){const E=x,C=x+1,P=x+2;a=Hs(this,d,t,mn,c,u,h,E,C,P),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const S=m,y=m+1,x=m+2;a=Hs(this,i,t,mn,c,u,h,S,y,x),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Vd(s,t,e,n,i,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ii,o),l===null)return null;Vs.copy(o),Vs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Vs);return c<e.near||c>e.far?null:{distance:c,point:Vs.clone(),object:s}}function Hs(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Qi),s.getVertexPosition(l,tr),s.getVertexPosition(c,er);const u=Vd(s,t,e,n,Qi,tr,er,Gs);if(u){i&&(zs.fromBufferAttribute(i,o),Bs.fromBufferAttribute(i,l),ks.fromBufferAttribute(i,c),u.uv=un.getInterpolation(Gs,Qi,tr,er,zs,Bs,ks,new Ot)),r&&(zs.fromBufferAttribute(r,o),Bs.fromBufferAttribute(r,l),ks.fromBufferAttribute(r,c),u.uv2=un.getInterpolation(Gs,Qi,tr,er,zs,Bs,ks,new Ot)),a&&(Fc.fromBufferAttribute(a,o),zc.fromBufferAttribute(a,l),Bc.fromBufferAttribute(a,c),u.normal=un.getInterpolation(Gs,Qi,tr,er,Fc,zc,Bc,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};un.getNormal(Qi,tr,er,h.normal),u.face=h}return u}class ys extends je{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(h,2));function _(g,m,d,S,y,x,M,E,C,P,v){const T=x/C,V=M/P,G=x/2,D=M/2,U=E/2,z=C+1,J=P+1;let Z=0,W=0;const tt=new I;for(let X=0;X<J;X++){const xt=X*V-D;for(let nt=0;nt<z;nt++){const H=nt*T-G;tt[g]=H*S,tt[m]=xt*y,tt[d]=U,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[d]=E>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(nt/C),h.push(1-X/P),Z+=1}}for(let X=0;X<P;X++)for(let xt=0;xt<C;xt++){const nt=f+xt+z*X,H=f+xt+z*(X+1),$=f+(xt+1)+z*(X+1),at=f+(xt+1)+z*X;l.push(nt,H,at),l.push(H,$,at),W+=6}o.addGroup(p,W,v),p+=W,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=Rr(s[e]);for(const i in n)t[i]=n[i]}return t}function Hd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function _u(s){return s.getRenderTarget()===null&&s.outputEncoding===$t?gn:cs}const Wd={clone:Rr,merge:Pe};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends xu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const nr=-90,ir=1;class Yd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new tn(nr,ir,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new tn(nr,ir,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new tn(nr,ir,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new tn(nr,ir,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new tn(nr,ir,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new tn(nr,ir,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=On,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class vu extends Ue{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cr,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new vu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:ti});r.uniforms.tEquirect.value=e;const a=new vn(i,r),o=e.minFilter;return e.minFilter===os&&(e.minFilter=Qe),new Yd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const oo=new I,$d=new I,Zd=new zt;class gi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=oo.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(oo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zd.getNormalMatrix(t),i=this.coplanarPoint(oo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Ms,Ws=new I;class Mu{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],S=n[14],y=n[15];return e[0].setComponents(o-i,h-l,g-f,y-m).normalize(),e[1].setComponents(o+i,h+l,g+f,y+m).normalize(),e[2].setComponents(o+r,h+c,g+p,y+d).normalize(),e[3].setComponents(o-r,h-c,g-p,y-d).normalize(),e[4].setComponents(o-a,h-u,g-_,y-S).normalize(),e[5].setComponents(o+a,h+u,g+_,y+S).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ws.x=i.normal.x>0?t.max.x:t.min.x,Ws.y=i.normal.y>0?t.max.y:t.min.y,Ws.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kd(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=s.createBuffer();s.bindBuffer(u,p),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,p=u.updateRange;s.bindBuffer(h,c),p.count===-1?s.bufferSubData(h,0,f):(e?s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class pl extends je{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const S=d*f-a;for(let y=0;y<c;y++){const x=y*h-r;_.push(x,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const y=S+c*d,x=S+c*(d+1),M=S+1+c*(d+1),E=S+1+c*d;p.push(y,x,E),p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(g,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp="vec3 transformed = vec3( position );",sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,op=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gp=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Yp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Rt={alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,begin_vertex:rp,beginnormal_vertex:sp,bsdfs:ap,iridescence_fragment:op,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:hp,clipping_planes_vertex:fp,color_fragment:dp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:yp,emissivemap_fragment:Sp,emissivemap_pars_fragment:bp,encodings_fragment:wp,encodings_pars_fragment:Tp,envmap_fragment:Ep,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Rp,fog_pars_vertex:Dp,fog_fragment:Ip,fog_pars_fragment:Up,gradientmap_pars_fragment:Op,lightmap_fragment:Np,lightmap_pars_fragment:Fp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Wp,lights_phong_pars_fragment:qp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:jp,lights_fragment_maps:$p,lights_fragment_end:Zp,logdepthbuf_fragment:Kp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:rm,metalnessmap_fragment:sm,metalnessmap_pars_fragment:am,morphcolor_vertex:om,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:hm,normal_fragment_maps:fm,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:mm,normalmap_pars_fragment:gm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,output_fragment:ym,packing:Sm,premultiplied_alpha_fragment:bm,project_vertex:wm,dithering_fragment:Tm,dithering_pars_fragment:Em,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Rm,shadowmask_pars_fragment:Dm,skinbase_vertex:Im,skinning_pars_vertex:Um,skinning_vertex:Om,skinnormal_vertex:Nm,specularmap_fragment:Fm,specularmap_pars_fragment:zm,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Hm,uv_pars_vertex:Wm,uv_vertex:qm,worldpos_vertex:Xm,background_vert:Ym,background_frag:jm,backgroundCube_vert:$m,backgroundCube_frag:Zm,cube_vert:Km,cube_frag:Jm,depth_vert:Qm,depth_frag:tg,distanceRGBA_vert:eg,distanceRGBA_frag:ng,equirect_vert:ig,equirect_frag:rg,linedashed_vert:sg,linedashed_frag:ag,meshbasic_vert:og,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:ug,meshmatcap_vert:hg,meshmatcap_frag:fg,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:mg,meshphong_frag:gg,meshphysical_vert:_g,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:yg,points_frag:Sg,shadow_vert:bg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Eg},lt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}}},_n={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};_n.physical={uniforms:Pe([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const qs={r:0,b:0,g:0};function Ag(s,t,e,n,i,r,a){const o=new qt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(m,d){let S=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y));const x=s.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Sa)?(u===void 0&&(u=new vn(new ys(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Rr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=y.encoding!==$t,(h!==y||f!==y.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new vn(new pl(2,2),new Di({name:"BackgroundMaterial",uniforms:Rr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=y.encoding!==$t,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(qs,_u(s)),n.buffers.color.setClear(qs.r,qs.g,qs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Cg(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null);let c=l,u=!1;function h(U,z,J,Z,W){let tt=!1;if(a){const X=g(Z,J,z);c!==X&&(c=X,p(c.object)),tt=d(U,Z,J,W),tt&&S(U,Z,J,W)}else{const X=z.wireframe===!0;(c.geometry!==Z.id||c.program!==J.id||c.wireframe!==X)&&(c.geometry=Z.id,c.program=J.id,c.wireframe=X,tt=!0)}W!==null&&e.update(W,34963),(tt||u)&&(u=!1,P(U,z,J,Z),W!==null&&s.bindBuffer(34963,e.get(W).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function g(U,z,J){const Z=J.wireframe===!0;let W=o[U.id];W===void 0&&(W={},o[U.id]=W);let tt=W[z.id];tt===void 0&&(tt={},W[z.id]=tt);let X=tt[Z];return X===void 0&&(X=m(f()),tt[Z]=X),X}function m(U){const z=[],J=[],Z=[];for(let W=0;W<i;W++)z[W]=0,J[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:Z,object:U,attributes:{},index:null}}function d(U,z,J,Z){const W=c.attributes,tt=z.attributes;let X=0;const xt=J.getAttributes();for(const nt in xt)if(xt[nt].location>=0){const $=W[nt];let at=tt[nt];if(at===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&(at=U.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;X++}return c.attributesNum!==X||c.index!==Z}function S(U,z,J,Z){const W={},tt=z.attributes;let X=0;const xt=J.getAttributes();for(const nt in xt)if(xt[nt].location>=0){let $=tt[nt];$===void 0&&(nt==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),nt==="instanceColor"&&U.instanceColor&&($=U.instanceColor));const at={};at.attribute=$,$&&$.data&&(at.data=$.data),W[nt]=at,X++}c.attributes=W,c.attributesNum=X,c.index=Z}function y(){const U=c.newAttributes;for(let z=0,J=U.length;z<J;z++)U[z]=0}function x(U){M(U,0)}function M(U,z){const J=c.newAttributes,Z=c.enabledAttributes,W=c.attributeDivisors;J[U]=1,Z[U]===0&&(s.enableVertexAttribArray(U),Z[U]=1),W[U]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),W[U]=z)}function E(){const U=c.newAttributes,z=c.enabledAttributes;for(let J=0,Z=z.length;J<Z;J++)z[J]!==U[J]&&(s.disableVertexAttribArray(J),z[J]=0)}function C(U,z,J,Z,W,tt){n.isWebGL2===!0&&(J===5124||J===5125)?s.vertexAttribIPointer(U,z,J,W,tt):s.vertexAttribPointer(U,z,J,Z,W,tt)}function P(U,z,J,Z){if(n.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const W=Z.attributes,tt=J.getAttributes(),X=z.defaultAttributeValues;for(const xt in tt){const nt=tt[xt];if(nt.location>=0){let H=W[xt];if(H===void 0&&(xt==="instanceMatrix"&&U.instanceMatrix&&(H=U.instanceMatrix),xt==="instanceColor"&&U.instanceColor&&(H=U.instanceColor)),H!==void 0){const $=H.normalized,at=H.itemSize,ct=e.get(H);if(ct===void 0)continue;const k=ct.buffer,bt=ct.type,N=ct.bytesPerElement;if(H.isInterleavedBufferAttribute){const st=H.data,yt=st.stride,pt=H.offset;if(st.isInstancedInterleavedBuffer){for(let ot=0;ot<nt.locationSize;ot++)M(nt.location+ot,st.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<nt.locationSize;ot++)x(nt.location+ot);s.bindBuffer(34962,k);for(let ot=0;ot<nt.locationSize;ot++)C(nt.location+ot,at/nt.locationSize,bt,$,yt*N,(pt+at/nt.locationSize*ot)*N)}else{if(H.isInstancedBufferAttribute){for(let st=0;st<nt.locationSize;st++)M(nt.location+st,H.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let st=0;st<nt.locationSize;st++)x(nt.location+st);s.bindBuffer(34962,k);for(let st=0;st<nt.locationSize;st++)C(nt.location+st,at/nt.locationSize,bt,$,at*N,at/nt.locationSize*st*N)}}else if(X!==void 0){const $=X[xt];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(nt.location,$);break;case 3:s.vertexAttrib3fv(nt.location,$);break;case 4:s.vertexAttrib4fv(nt.location,$);break;default:s.vertexAttrib1fv(nt.location,$)}}}}E()}function v(){G();for(const U in o){const z=o[U];for(const J in z){const Z=z[J];for(const W in Z)_(Z[W].object),delete Z[W];delete z[J]}delete o[U]}}function T(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const J in z){const Z=z[J];for(const W in Z)_(Z[W].object),delete Z[W];delete z[J]}delete o[U.id]}function V(U){for(const z in o){const J=o[z];if(J[U.id]===void 0)continue;const Z=J[U.id];for(const W in Z)_(Z[W].object),delete Z[W];delete J[U.id]}}function G(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:D,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function Pg(s,t,e,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,c,u,h),e.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Lg(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),p=s.getParameter(3379),_=s.getParameter(34076),g=s.getParameter(34921),m=s.getParameter(36347),d=s.getParameter(36348),S=s.getParameter(36349),y=f>0,x=a||t.has("OES_texture_float"),M=y&&x,E=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function Rg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new gi,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,y=S*4;let x=d.clippingState||null;l.value=x,x=u(_,f,y,p);for(let M=0;M!==y;++M)x[M]=e[M];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Dg(s){let t=new WeakMap;function e(a,o){return o===Co?a.mapping=Cr:o===Po&&(a.mapping=Pr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Co||o===Po)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jd(l.height/2);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ig extends xu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ur=4,kc=[.125,.215,.35,.446,.526,.582],vi=20,lo=new Ig,Gc=new qt;let co=null;const _i=(1+Math.sqrt(5))/2,rr=1/_i,Vc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,_i,rr),new I(0,_i,-rr),new I(rr,0,_i),new I(-rr,0,_i),new I(_i,rr,0),new I(-_i,rr,0)];class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){co=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(co),t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),co=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:ls,format:fn,encoding:Pi,depthBuffer:!1},i=Wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ug(r)),this._blurMaterial=Og(r,t,e)}return i}_compileMaterial(t){const e=new vn(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,i){const o=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Gc),u.toneMapping=On,u.autoClear=!1;const p=new ha({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),_=new vn(new ys,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Gc),g=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;Xs(i,S*y,d>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cr||t.mapping===Pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Vc[(i-1)%Vc.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vn(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let S=0;for(let C=0;C<vi;++C){const P=C/g,v=Math.exp(-P*P/2);d.push(v),C===0?S+=v:C<m&&(S+=2*v)}for(let C=0;C<d.length;C++)d[C]=d[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-ur?i-y+ur:0),E=4*(this._cubeSize-x);Xs(e,M,E,3*x,2*x),l.setRenderTarget(e),l.render(h,lo)}}function Ug(s){const t=[],e=[],n=[];let i=s;const r=s-ur+1+kc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ur?l=kc[a-s+ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,g=3,m=2,d=1,S=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,P=E>2?0:-1,v=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(v,g*_*E),y.set(f,m*_*E);const T=[E,E,E,E,E,E];x.set(T,d*_*E)}const M=new je;M.setAttribute("position",new yn(S,g)),M.setAttribute("uv",new yn(y,m)),M.setAttribute("faceIndex",new yn(x,d)),t.push(M),i>ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wc(s,t,e){const n=new Li(s,t,e);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Og(s,t,e){const n=new Float32Array(vi),i=new I(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ng(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Po,u=l===Cr||l===Pr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Hc(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Hc(s));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],34962);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const S=p.array;g=p.version;for(let y=0,x=S.length;y<x;y+=3){const M=S[y+0],E=S[y+1],C=S[y+2];f.push(M,E,E,C,C,M)}}else{const S=_.array;g=_.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const M=y+0,E=y+1,C=y+2;f.push(M,E,E,C,C,M)}}const m=new(cu(f)?gu:mu)(f,1);m.version=g;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Bg(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){s.drawElements(r,p,o,f*l),e.update(p,r,1)}function h(f,p,_){if(_===0)return;let g,m;if(i)g=s,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,f*l,_),e.update(p,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function kg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(r/3);break;case 1:e.lines+=o*(r/2);break;case 3:e.lines+=o*(r-1);break;case 2:e.lines+=o*r;break;case 0:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gg(s,t){return s[0]-t[0]}function Vg(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Hg(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==g){let z=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let v=0;y===!0&&(v=1),x===!0&&(v=2),M===!0&&(v=3);let T=u.attributes.position.count*v,V=1;T>t.maxTextureSize&&(V=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const G=new Float32Array(T*V*4*g),D=new fu(G,T,V,g);D.type=yi,D.needsUpdate=!0;const U=v*4;for(let J=0;J<g;J++){const Z=E[J],W=C[J],tt=P[J],X=T*V*4*J;for(let xt=0;xt<Z.count;xt++){const nt=xt*U;y===!0&&(a.fromBufferAttribute(Z,xt),G[X+nt+0]=a.x,G[X+nt+1]=a.y,G[X+nt+2]=a.z,G[X+nt+3]=0),x===!0&&(a.fromBufferAttribute(W,xt),G[X+nt+4]=a.x,G[X+nt+5]=a.y,G[X+nt+6]=a.z,G[X+nt+7]=0),M===!0&&(a.fromBufferAttribute(tt,xt),G[X+nt+8]=a.x,G[X+nt+9]=a.y,G[X+nt+10]=a.z,G[X+nt+11]=tt.itemSize===4?a.w:1)}}m={count:g,texture:D,size:new Ot(T,V)},r.set(u,m),u.addEventListener("dispose",z)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const S=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=f[x]}g.sort(Vg);for(let x=0;x<8;x++)x<_&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Gg);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let x=0;x<8;x++){const M=o[x],E=M[0],C=M[1];E!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),d&&u.getAttribute("morphNormal"+x)!==d[E]&&u.setAttribute("morphNormal"+x,d[E]),i[x]=C,S+=C):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",y),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Wg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Su=new Ue,bu=new fu,wu=new Dd,Tu=new vu,Yc=[],jc=[],$c=new Float32Array(16),Zc=new Float32Array(9),Kc=new Float32Array(4);function kr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Yc[i];if(r===void 0&&(r=new Float32Array(i),Yc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wa(s,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function qg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2fv(this.addr,t),ce(e,t)}}function Yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;s.uniform3fv(this.addr,t),ce(e,t)}}function jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4fv(this.addr,t),ce(e,t)}}function $g(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),ce(e,n)}}function Zg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Zc.set(n),s.uniformMatrix3fv(this.addr,!1,Zc),ce(e,n)}}function Kg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),ce(e,n)}}function Jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2iv(this.addr,t),ce(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3iv(this.addr,t),ce(e,t)}}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4iv(this.addr,t),ce(e,t)}}function n_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function i_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2uiv(this.addr,t),ce(e,t)}}function r_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3uiv(this.addr,t),ce(e,t)}}function s_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4uiv(this.addr,t),ce(e,t)}}function a_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Su,i)}function o_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wu,i)}function l_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Tu,i)}function c_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||bu,i)}function u_(s){switch(s){case 5126:return qg;case 35664:return Xg;case 35665:return Yg;case 35666:return jg;case 35674:return $g;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t_;case 35669:case 35673:return e_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function h_(s,t){s.uniform1fv(this.addr,t)}function f_(s,t){const e=kr(t,this.size,2);s.uniform2fv(this.addr,e)}function d_(s,t){const e=kr(t,this.size,3);s.uniform3fv(this.addr,e)}function p_(s,t){const e=kr(t,this.size,4);s.uniform4fv(this.addr,e)}function m_(s,t){const e=kr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function g_(s,t){const e=kr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function __(s,t){const e=kr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function x_(s,t){s.uniform1iv(this.addr,t)}function v_(s,t){s.uniform2iv(this.addr,t)}function M_(s,t){s.uniform3iv(this.addr,t)}function y_(s,t){s.uniform4iv(this.addr,t)}function S_(s,t){s.uniform1uiv(this.addr,t)}function b_(s,t){s.uniform2uiv(this.addr,t)}function w_(s,t){s.uniform3uiv(this.addr,t)}function T_(s,t){s.uniform4uiv(this.addr,t)}function E_(s,t,e){const n=this.cache,i=t.length,r=wa(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Su,r[a])}function A_(s,t,e){const n=this.cache,i=t.length,r=wa(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||wu,r[a])}function C_(s,t,e){const n=this.cache,i=t.length,r=wa(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Tu,r[a])}function P_(s,t,e){const n=this.cache,i=t.length,r=wa(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||bu,r[a])}function L_(s){switch(s){case 5126:return h_;case 35664:return f_;case 35665:return d_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return M_;case 35669:case 35673:return y_;case 5125:return S_;case 36294:return b_;case 36295:return w_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return C_;case 36289:case 36303:case 36311:case 36292:return P_}}class R_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=u_(e.type)}}class D_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=L_(e.type)}}class I_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Jc(s,t){s.seq.push(t),s.map[t.id]=t}function U_(s,t,e){const n=s.name,i=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),a=uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jc(e,c===void 0?new R_(o,s,t):new D_(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new I_(o),Jc(e,h)),e=h}}}class ia{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);U_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Qc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let O_=0;function N_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function F_(s){switch(s){case Pi:return["Linear","( value )"];case $t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function t0(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+N_(s.getShaderSource(t),a)}else return i}function z_(s,t){const e=F_(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function B_(s,t){let e;switch(t){case Kf:e="Linear";break;case Jf:e="Reinhard";break;case Qf:e="OptimizedCineon";break;case td:e="ACESFilmic";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zr).join(`
`)}function G_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V_(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Zr(s){return s!==""}function e0(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function n0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(H_,W_)}function W_(s,t){const e=Rt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Uo(e)}const q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(s){return s.replace(q_,X_)}function X_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function r0(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$r&&(t="SHADOWMAP_TYPE_VSM"),t}function j_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cr:case Pr:t="ENVMAP_TYPE_CUBE";break;case Sa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Z_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case $f:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function K_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function J_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Y_(e),c=j_(e),u=$_(e),h=Z_(e),f=K_(e),p=e.isWebGL2?"":k_(e),_=G_(r),g=i.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Zr).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Zr).join(`
`),d.length>0&&(d+=`
`)):(m=[r0(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),d=[p,r0(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Rt.tonemapping_pars_fragment:"",e.toneMapping!==On?B_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.encodings_pars_fragment,z_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zr).join(`
`)),a=Uo(a),a=e0(a,e),a=n0(a,e),o=Uo(o),o=e0(o,e),o=n0(o,e),a=i0(a),o=i0(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+a,x=S+d+o,M=Qc(i,35633,y),E=Qc(i,35632,x);if(i.attachShader(g,M),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),s.debug.checkShaderErrors){const v=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(E).trim();let G=!0,D=!0;if(i.getProgramParameter(g,35714)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,E);else{const U=t0(i,M,"vertex"),z=t0(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+v+`
`+U+`
`+z)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(T===""||V==="")&&(D=!1);D&&(this.diagnostics={runnable:G,programLog:v,vertexShader:{log:T,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(M),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new ia(i,g)),C};let P;return this.getAttributes=function(){return P===void 0&&(P=V_(i,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=O_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let Q_=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e1(t),e.set(t,n)),n}}class e1{constructor(t){this.id=Q_++,this.code=t,this.usedTimes=0}}function n1(s,t,e,n,i,r,a){const o=new du,l=new t1,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv2":"uv"}function m(v,T,V,G,D){const U=G.fog,z=D.geometry,J=v.isMeshStandardMaterial?G.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||J),W=Z&&Z.mapping===Sa?Z.image.height:null,tt=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const X=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,xt=X!==void 0?X.length:0;let nt=0;z.morphAttributes.position!==void 0&&(nt=1),z.morphAttributes.normal!==void 0&&(nt=2),z.morphAttributes.color!==void 0&&(nt=3);let H,$,at,ct;if(tt){const dt=_n[tt];H=dt.vertexShader,$=dt.fragmentShader}else H=v.vertexShader,$=v.fragmentShader,l.update(v),at=l.getVertexShaderID(v),ct=l.getFragmentShaderID(v);const k=s.getRenderTarget(),bt=D.isInstancedMesh===!0,N=!!v.map,st=!!v.matcap,yt=!!Z,pt=!!v.aoMap,ot=!!v.lightMap,gt=!!v.bumpMap,At=!!v.normalMap,Ct=!!v.displacementMap,Ht=!!v.emissiveMap,Vt=!!v.metalnessMap,Nt=!!v.roughnessMap,Gt=v.clearcoat>0,ge=v.iridescence>0,A=v.sheen>0,b=v.transmission>0,q=Gt&&!!v.clearcoatMap,et=Gt&&!!v.clearcoatNormalMap,rt=Gt&&!!v.clearcoatRoughnessMap,ut=ge&&!!v.iridescenceMap,L=ge&&!!v.iridescenceThicknessMap,Q=A&&!!v.sheenColorMap,B=A&&!!v.sheenRoughnessMap,ht=!!v.specularMap,mt=!!v.specularColorMap,vt=!!v.specularIntensityMap,ft=b&&!!v.transmissionMap,_t=b&&!!v.thicknessMap,Tt=!!v.gradientMap,Dt=!!v.alphaMap,te=v.alphaTest>0,R=!!v.extensions,j=!!z.attributes.uv2;return{isWebGL2:u,shaderID:tt,shaderName:v.type,vertexShader:H,fragmentShader:$,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:bt,instancingColor:bt&&D.instanceColor!==null,supportsVertexTextures:f,outputEncoding:k===null?s.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:Pi,map:N,matcap:st,envMap:yt,envMapMode:yt&&Z.mapping,envMapCubeUVHeight:W,aoMap:pt,lightMap:ot,bumpMap:gt,normalMap:At,displacementMap:f&&Ct,emissiveMap:Ht,normalMapObjectSpace:At&&v.normalMapType===yd,normalMapTangentSpace:At&&v.normalMapType===Md,decodeVideoTexture:N&&v.map.isVideoTexture===!0&&v.map.encoding===$t,metalnessMap:Vt,roughnessMap:Nt,clearcoat:Gt,clearcoatMap:q,clearcoatNormalMap:et,clearcoatRoughnessMap:rt,iridescence:ge,iridescenceMap:ut,iridescenceThicknessMap:L,sheen:A,sheenColorMap:Q,sheenRoughnessMap:B,specularMap:ht,specularColorMap:mt,specularIntensityMap:vt,transmission:b,transmissionMap:ft,thicknessMap:_t,gradientMap:Tt,opaque:v.transparent===!1&&v.blending===vr,alphaMap:Dt,alphaTest:te,combine:v.combine,mapUv:N&&g(v.map.channel),aoMapUv:pt&&g(v.aoMap.channel),lightMapUv:ot&&g(v.lightMap.channel),bumpMapUv:gt&&g(v.bumpMap.channel),normalMapUv:At&&g(v.normalMap.channel),displacementMapUv:Ct&&g(v.displacementMap.channel),emissiveMapUv:Ht&&g(v.emissiveMap.channel),metalnessMapUv:Vt&&g(v.metalnessMap.channel),roughnessMapUv:Nt&&g(v.roughnessMap.channel),clearcoatMapUv:q&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:L&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:B&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:mt&&g(v.specularColorMap.channel),specularIntensityMapUv:vt&&g(v.specularIntensityMap.channel),transmissionMapUv:ft&&g(v.transmissionMap.channel),thicknessMapUv:_t&&g(v.thicknessMap.channel),alphaMapUv:Dt&&g(v.alphaMap.channel),vertexTangents:At&&!!z.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs2:j,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(N||Dt),fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:On,useLegacyLights:s.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Un,flipSided:v.side===Ie,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:R&&v.extensions.derivatives===!0,extensionFragDepth:R&&v.extensions.fragDepth===!0,extensionDrawBuffers:R&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:R&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)T.push(V),T.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(S(T,v),y(T,v),T.push(s.outputEncoding)),T.push(v.customProgramCacheKey),T.join()}function S(v,T){v.push(T.precision),v.push(T.outputEncoding),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUvs2&&o.enable(13),T.vertexTangents&&o.enable(14),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.decodeVideoTexture&&o.enable(17),T.opaque&&o.enable(18),T.pointsUvs&&o.enable(19),v.push(o.mask)}function x(v){const T=_[v.type];let V;if(T){const G=_n[T];V=Wd.clone(G.uniforms)}else V=v.uniforms;return V}function M(v,T){let V;for(let G=0,D=c.length;G<D;G++){const U=c[G];if(U.cacheKey===T){V=U,++V.usedTimes;break}}return V===void 0&&(V=new J_(s,T,v,r),c.push(V)),V}function E(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:P}}function i1(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function r1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function s0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function a0(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,_,g,m){let d=s[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),t++,d}function o(h,f,p,_,g,m){const d=a(h,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,_,g,m){const d=a(h,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||r1),n.length>1&&n.sort(f||s0),i.length>1&&i.sort(f||s0)}function u(){for(let h=t,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function s1(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new a0,s.set(n,[a])):i>=r.length?(a=new a0,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function a1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function o1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let l1=0;function c1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function u1(s,t){const e=new a1,n=o1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new ie,o=new ie;function l(u,h){let f=0,p=0,_=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,m=0,d=0,S=0,y=0,x=0,M=0,E=0,C=0,P=0;u.sort(c1);const v=h===!0?Math.PI:1;for(let V=0,G=u.length;V<G;V++){const D=u[V],U=D.color,z=D.intensity,J=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*z*v,p+=U.g*z*v,_+=U.b*z*v;else if(D.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],z);else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*v),D.castShadow){const tt=D.shadow,X=n.get(D);X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=Z,i.directionalShadowMatrix[g]=D.shadow.matrix,x++}i.directional[g]=W,g++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(z*v),W.distance=J,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[d]=W;const tt=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,tt.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[d]=tt.matrix,D.castShadow){const X=n.get(D);X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,i.spotShadow[d]=X,i.spotShadowMap[d]=Z,E++}d++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=W,S++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity*v),W.distance=D.distance,W.decay=D.decay,D.castShadow){const tt=D.shadow,X=n.get(D);X.shadowBias=tt.bias,X.shadowNormalBias=tt.normalBias,X.shadowRadius=tt.radius,X.shadowMapSize=tt.mapSize,X.shadowCameraNear=tt.camera.near,X.shadowCameraFar=tt.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=Z,i.pointShadowMatrix[m]=D.shadow.matrix,M++}i.point[m]=W,m++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(z*v),W.groundColor.copy(D.groundColor).multiplyScalar(z*v),i.hemi[y]=W,y++}}S>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==E||T.numSpotMaps!==C)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=S,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=E,T.numSpotMaps=C,i.version=l1++)}function c(u,h){let f=0,p=0,_=0,g=0,m=0;const d=h.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const x=u[S];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),f++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),o.identity(),a.copy(x.matrixWorld),a.premultiply(d),o.extractRotation(a),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function o0(s,t){const e=new u1(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function h1(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new o0(s,t),e.set(r,[l])):a>=o.length?(l=new o0(s,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class f1 extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class d1 extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const p1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g1(s,t,e){let n=new Mu;const i=new Ot,r=new Ot,a=new pe,o=new f1({depthPacking:vd}),l=new d1,c={},u=e.maxTextureSize,h={[ii]:Ie,[Ie]:ii,[Un]:Un},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:p1,fragmentShader:m1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new vn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nu,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=s.getRenderTarget(),P=s.getActiveCubeFace(),v=s.getActiveMipmapLevel(),T=s.state;T.setBlending(ti),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let V=0,G=x.length;V<G;V++){const D=x[V],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const z=U.getFrameExtents();if(i.multiply(z),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,U.mapSize.y=r.y)),U.map===null){const Z=this.type!==$r?{minFilter:Le,magFilter:Le}:{};U.map=new Li(i.x,i.y,Z),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const J=U.getViewportCount();for(let Z=0;Z<J;Z++){const W=U.getViewport(Z);a.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),T.viewport(a),U.updateMatrices(D,Z),n=U.getFrustum(),y(M,E,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===$r&&d(U,E),U.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(C,P,v)};function d(x,M){const E=t.update(g);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Li(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(M,null,E,f,g,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(M,null,E,p,g,null)}function S(x,M,E,C){let P=null;const v=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(v!==void 0)P=v;else if(P=E.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const T=P.uuid,V=M.uuid;let G=c[T];G===void 0&&(G={},c[T]=G);let D=G[V];D===void 0&&(D=P.clone(),G[V]=D),P=D}if(P.visible=M.visible,P.wireframe=M.wireframe,C===$r?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const T=s.properties.get(P);T.light=E}return P}function y(x,M,E,C,P){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===$r)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const V=t.update(x),G=x.material;if(Array.isArray(G)){const D=V.groups;for(let U=0,z=D.length;U<z;U++){const J=D[U],Z=G[J.materialIndex];if(Z&&Z.visible){const W=S(x,Z,C,P);s.renderBufferDirect(E,null,V,W,x,J)}}}else if(G.visible){const D=S(x,G,C,P);s.renderBufferDirect(E,null,V,D,x,null)}}const T=x.children;for(let V=0,G=T.length;V<G;V++)y(T[V],M,E,C,P)}}function _1(s,t,e){const n=e.isWebGL2;function i(){let R=!1;const j=new pe;let it=null;const dt=new pe(0,0,0,0);return{setMask:function(Mt){it!==Mt&&!R&&(s.colorMask(Mt,Mt,Mt,Mt),it=Mt)},setLocked:function(Mt){R=Mt},setClear:function(Mt,jt,Zt,_e,kn){kn===!0&&(Mt*=_e,jt*=_e,Zt*=_e),j.set(Mt,jt,Zt,_e),dt.equals(j)===!1&&(s.clearColor(Mt,jt,Zt,_e),dt.copy(j))},reset:function(){R=!1,it=null,dt.set(-1,0,0,0)}}}function r(){let R=!1,j=null,it=null,dt=null;return{setTest:function(Mt){Mt?k(2929):bt(2929)},setMask:function(Mt){j!==Mt&&!R&&(s.depthMask(Mt),j=Mt)},setFunc:function(Mt){if(it!==Mt){switch(Mt){case Vf:s.depthFunc(512);break;case Hf:s.depthFunc(519);break;case Wf:s.depthFunc(513);break;case Ao:s.depthFunc(515);break;case qf:s.depthFunc(514);break;case Xf:s.depthFunc(518);break;case Yf:s.depthFunc(516);break;case jf:s.depthFunc(517);break;default:s.depthFunc(515)}it=Mt}},setLocked:function(Mt){R=Mt},setClear:function(Mt){dt!==Mt&&(s.clearDepth(Mt),dt=Mt)},reset:function(){R=!1,j=null,it=null,dt=null}}}function a(){let R=!1,j=null,it=null,dt=null,Mt=null,jt=null,Zt=null,_e=null,kn=null;return{setTest:function(ee){R||(ee?k(2960):bt(2960))},setMask:function(ee){j!==ee&&!R&&(s.stencilMask(ee),j=ee)},setFunc:function(ee,$e,pn){(it!==ee||dt!==$e||Mt!==pn)&&(s.stencilFunc(ee,$e,pn),it=ee,dt=$e,Mt=pn)},setOp:function(ee,$e,pn){(jt!==ee||Zt!==$e||_e!==pn)&&(s.stencilOp(ee,$e,pn),jt=ee,Zt=$e,_e=pn)},setLocked:function(ee){R=ee},setClear:function(ee){kn!==ee&&(s.clearStencil(ee),kn=ee)},reset:function(){R=!1,j=null,it=null,dt=null,Mt=null,jt=null,Zt=null,_e=null,kn=null}}}const o=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,S=null,y=null,x=null,M=null,E=null,C=null,P=null,v=!1,T=null,V=null,G=null,D=null,U=null;const z=s.getParameter(35661);let J=!1,Z=0;const W=s.getParameter(7938);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=Z>=2);let tt=null,X={};const xt=s.getParameter(3088),nt=s.getParameter(2978),H=new pe().fromArray(xt),$=new pe().fromArray(nt);function at(R,j,it){const dt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(R,Mt),s.texParameteri(R,10241,9728),s.texParameteri(R,10240,9728);for(let jt=0;jt<it;jt++)s.texImage2D(j+jt,0,6408,1,1,0,6408,5121,dt);return Mt}const ct={};ct[3553]=at(3553,3553,1),ct[34067]=at(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),k(2929),l.setFunc(Ao),Ct(!1),Ht(Yl),k(2884),gt(ti);function k(R){f[R]!==!0&&(s.enable(R),f[R]=!0)}function bt(R){f[R]!==!1&&(s.disable(R),f[R]=!1)}function N(R,j){return p[R]!==j?(s.bindFramebuffer(R,j),p[R]=j,n&&(R===36009&&(p[36160]=j),R===36160&&(p[36009]=j)),!0):!1}function st(R,j){let it=g,dt=!1;if(R)if(it=_.get(j),it===void 0&&(it=[],_.set(j,it)),R.isWebGLMultipleRenderTargets){const Mt=R.texture;if(it.length!==Mt.length||it[0]!==36064){for(let jt=0,Zt=Mt.length;jt<Zt;jt++)it[jt]=36064+jt;it.length=Mt.length,dt=!0}}else it[0]!==36064&&(it[0]=36064,dt=!0);else it[0]!==1029&&(it[0]=1029,dt=!0);dt&&(e.isWebGL2?s.drawBuffers(it):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(it))}function yt(R){return m!==R?(s.useProgram(R),m=R,!0):!1}const pt={[cr]:32774,[Rf]:32778,[Df]:32779};if(n)pt[Kl]=32775,pt[Jl]=32776;else{const R=t.get("EXT_blend_minmax");R!==null&&(pt[Kl]=R.MIN_EXT,pt[Jl]=R.MAX_EXT)}const ot={[If]:0,[Uf]:1,[Of]:768,[iu]:770,[Gf]:776,[Bf]:774,[Ff]:772,[Nf]:769,[ru]:771,[kf]:775,[zf]:773};function gt(R,j,it,dt,Mt,jt,Zt,_e){if(R===ti){d===!0&&(bt(3042),d=!1);return}if(d===!1&&(k(3042),d=!0),R!==Lf){if(R!==S||_e!==v){if((y!==cr||E!==cr)&&(s.blendEquation(32774),y=cr,E=cr),_e)switch(R){case vr:s.blendFuncSeparate(1,771,1,771);break;case jl:s.blendFunc(1,1);break;case $l:s.blendFuncSeparate(0,769,0,1);break;case Zl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case vr:s.blendFuncSeparate(770,771,1,771);break;case jl:s.blendFunc(770,1);break;case $l:s.blendFuncSeparate(0,769,0,1);break;case Zl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,M=null,C=null,P=null,S=R,v=_e}return}Mt=Mt||j,jt=jt||it,Zt=Zt||dt,(j!==y||Mt!==E)&&(s.blendEquationSeparate(pt[j],pt[Mt]),y=j,E=Mt),(it!==x||dt!==M||jt!==C||Zt!==P)&&(s.blendFuncSeparate(ot[it],ot[dt],ot[jt],ot[Zt]),x=it,M=dt,C=jt,P=Zt),S=R,v=!1}function At(R,j){R.side===Un?bt(2884):k(2884);let it=R.side===Ie;j&&(it=!it),Ct(it),R.blending===vr&&R.transparent===!1?gt(ti):gt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const dt=R.stencilWrite;c.setTest(dt),dt&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Nt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?k(32926):bt(32926)}function Ct(R){T!==R&&(R?s.frontFace(2304):s.frontFace(2305),T=R)}function Ht(R){R!==Af?(k(2884),R!==V&&(R===Yl?s.cullFace(1029):R===Cf?s.cullFace(1028):s.cullFace(1032))):bt(2884),V=R}function Vt(R){R!==G&&(J&&s.lineWidth(R),G=R)}function Nt(R,j,it){R?(k(32823),(D!==j||U!==it)&&(s.polygonOffset(j,it),D=j,U=it)):bt(32823)}function Gt(R){R?k(3089):bt(3089)}function ge(R){R===void 0&&(R=33984+z-1),tt!==R&&(s.activeTexture(R),tt=R)}function A(R,j,it){it===void 0&&(tt===null?it=33984+z-1:it=tt);let dt=X[it];dt===void 0&&(dt={type:void 0,texture:void 0},X[it]=dt),(dt.type!==R||dt.texture!==j)&&(tt!==it&&(s.activeTexture(it),tt=it),s.bindTexture(R,j||ct[R]),dt.type=R,dt.texture=j)}function b(){const R=X[tt];R!==void 0&&R.type!==void 0&&(s.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{s.texSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{s.texSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function L(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function B(){try{s.texStorage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{s.texImage3D.apply(s,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(R){H.equals(R)===!1&&(s.scissor(R.x,R.y,R.z,R.w),H.copy(R))}function _t(R){$.equals(R)===!1&&(s.viewport(R.x,R.y,R.z,R.w),$.copy(R))}function Tt(R,j){let it=h.get(j);it===void 0&&(it=new WeakMap,h.set(j,it));let dt=it.get(R);dt===void 0&&(dt=s.getUniformBlockIndex(j,R.name),it.set(R,dt))}function Dt(R,j){const dt=h.get(j).get(R);u.get(j)!==dt&&(s.uniformBlockBinding(j,dt,R.__bindingPointIndex),u.set(j,dt))}function te(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},tt=null,X={},p={},_=new WeakMap,g=[],m=null,d=!1,S=null,y=null,x=null,M=null,E=null,C=null,P=null,v=!1,T=null,V=null,G=null,D=null,U=null,H.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:k,disable:bt,bindFramebuffer:N,drawBuffers:st,useProgram:yt,setBlending:gt,setMaterial:At,setFlipSided:Ct,setCullFace:Ht,setLineWidth:Vt,setPolygonOffset:Nt,setScissorTest:Gt,activeTexture:ge,bindTexture:A,unbindTexture:b,compressedTexImage2D:q,compressedTexImage3D:et,texImage2D:mt,texImage3D:vt,updateUBOMapping:Tt,uniformBlockBinding:Dt,texStorage2D:B,texStorage3D:ht,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:L,compressedTexSubImage3D:Q,scissor:ft,viewport:_t,reset:te}}function x1(s,t,e,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,b){return d?new OffscreenCanvas(A,b):us("canvas")}function y(A,b,q,et){let rt=1;if((A.width>et||A.height>et)&&(rt=et/Math.max(A.width,A.height)),rt<1||b===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ut=b?wd:Math.floor,L=ut(rt*A.width),Q=ut(rt*A.height);g===void 0&&(g=S(L,Q));const B=q?S(L,Q):g;return B.width=L,B.height=Q,B.getContext("2d").drawImage(A,0,0,L,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+L+"x"+Q+")."),B}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Tc(A.width)&&Tc(A.height)}function M(A){return o?!1:A.wrapS!==hn||A.wrapT!==hn||A.minFilter!==Le&&A.minFilter!==Qe}function E(A,b){return A.generateMipmaps&&b&&A.minFilter!==Le&&A.minFilter!==Qe}function C(A){s.generateMipmap(A)}function P(A,b,q,et,rt=!1){if(o===!1)return b;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut=b;return b===6403&&(q===5126&&(ut=33326),q===5131&&(ut=33325),q===5121&&(ut=33321)),b===33319&&(q===5126&&(ut=33328),q===5131&&(ut=33327),q===5121&&(ut=33323)),b===6408&&(q===5126&&(ut=34836),q===5131&&(ut=34842),q===5121&&(ut=et===$t&&rt===!1?35907:32856),q===32819&&(ut=32854),q===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function v(A,b,q){return E(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Le&&A.minFilter!==Qe?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){return A===Le||A===Ql||A===Na?9728:9729}function V(A){const b=A.target;b.removeEventListener("dispose",V),D(b),b.isVideoTexture&&_.delete(b)}function G(A){const b=A.target;b.removeEventListener("dispose",G),z(b)}function D(A){const b=n.get(A);if(b.__webglInit===void 0)return;const q=A.source,et=m.get(q);if(et){const rt=et[b.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&U(A),Object.keys(et).length===0&&m.delete(q)}n.remove(A)}function U(A){const b=n.get(A);s.deleteTexture(b.__webglTexture);const q=A.source,et=m.get(q);delete et[b.__cacheKey],a.memory.textures--}function z(A){const b=A.texture,q=n.get(A),et=n.get(b);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++)s.deleteFramebuffer(q.__webglFramebuffer[rt]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[rt]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let rt=0;rt<q.__webglColorRenderbuffer.length;rt++)q.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[rt]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let rt=0,ut=b.length;rt<ut;rt++){const L=n.get(b[rt]);L.__webglTexture&&(s.deleteTexture(L.__webglTexture),a.memory.textures--),n.remove(b[rt])}n.remove(b),n.remove(A)}let J=0;function Z(){J=0}function W(){const A=J;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),J+=1,A}function tt(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.encoding),b.join()}function X(A,b){const q=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const et=A.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,A,b);return}}e.bindTexture(3553,q.__webglTexture,33984+b)}function xt(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){bt(q,A,b);return}e.bindTexture(35866,q.__webglTexture,33984+b)}function nt(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){bt(q,A,b);return}e.bindTexture(32879,q.__webglTexture,33984+b)}function H(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){N(q,A,b);return}e.bindTexture(34067,q.__webglTexture,33984+b)}const $={[Lo]:10497,[hn]:33071,[Ro]:33648},at={[Le]:9728,[Ql]:9984,[Na]:9986,[Qe]:9729,[nd]:9985,[os]:9987};function ct(A,b,q){if(q?(s.texParameteri(A,10242,$[b.wrapS]),s.texParameteri(A,10243,$[b.wrapT]),(A===32879||A===35866)&&s.texParameteri(A,32882,$[b.wrapR]),s.texParameteri(A,10240,at[b.magFilter]),s.texParameteri(A,10241,at[b.minFilter])):(s.texParameteri(A,10242,33071),s.texParameteri(A,10243,33071),(A===32879||A===35866)&&s.texParameteri(A,32882,33071),(b.wrapS!==hn||b.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,10240,T(b.magFilter)),s.texParameteri(A,10241,T(b.minFilter)),b.minFilter!==Le&&b.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Le||b.minFilter!==Na&&b.minFilter!==os||b.type===yi&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===ls&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(A,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function k(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",V));const et=b.source;let rt=m.get(et);rt===void 0&&(rt={},m.set(et,rt));const ut=tt(b);if(ut!==A.__cacheKey){rt[ut]===void 0&&(rt[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),rt[ut].usedTimes++;const L=rt[A.__cacheKey];L!==void 0&&(rt[A.__cacheKey].usedTimes--,L.usedTimes===0&&U(b)),A.__cacheKey=ut,A.__webglTexture=rt[ut].texture}return q}function bt(A,b,q){let et=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(et=35866),b.isData3DTexture&&(et=32879);const rt=k(A,b),ut=b.source;e.bindTexture(et,A.__webglTexture,33984+q);const L=n.get(ut);if(ut.version!==L.__version||rt===!0){e.activeTexture(33984+q),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const Q=M(b)&&x(b.image)===!1;let B=y(b.image,Q,!1,u);B=ge(b,B);const ht=x(B)||o,mt=r.convert(b.format,b.encoding);let vt=r.convert(b.type),ft=P(b.internalFormat,mt,vt,b.encoding,b.isVideoTexture);ct(et,b,ht);let _t;const Tt=b.mipmaps,Dt=o&&b.isVideoTexture!==!0,te=L.__version===void 0||rt===!0,R=v(b,B,ht);if(b.isDepthTexture)ft=6402,o?b.type===yi?ft=36012:b.type===Mi?ft=33190:b.type===Mr?ft=35056:ft=33189:b.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===wi&&ft===6402&&b.type!==ou&&b.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Mi,vt=r.convert(b.type)),b.format===Lr&&ft===6402&&(ft=34041,b.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Mr,vt=r.convert(b.type))),te&&(Dt?e.texStorage2D(3553,1,ft,B.width,B.height):e.texImage2D(3553,0,ft,B.width,B.height,0,mt,vt,null));else if(b.isDataTexture)if(Tt.length>0&&ht){Dt&&te&&e.texStorage2D(3553,R,ft,Tt[0].width,Tt[0].height);for(let j=0,it=Tt.length;j<it;j++)_t=Tt[j],Dt?e.texSubImage2D(3553,j,0,0,_t.width,_t.height,mt,vt,_t.data):e.texImage2D(3553,j,ft,_t.width,_t.height,0,mt,vt,_t.data);b.generateMipmaps=!1}else Dt?(te&&e.texStorage2D(3553,R,ft,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,mt,vt,B.data)):e.texImage2D(3553,0,ft,B.width,B.height,0,mt,vt,B.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Dt&&te&&e.texStorage3D(35866,R,ft,Tt[0].width,Tt[0].height,B.depth);for(let j=0,it=Tt.length;j<it;j++)_t=Tt[j],b.format!==fn?mt!==null?Dt?e.compressedTexSubImage3D(35866,j,0,0,0,_t.width,_t.height,B.depth,mt,_t.data,0,0):e.compressedTexImage3D(35866,j,ft,_t.width,_t.height,B.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage3D(35866,j,0,0,0,_t.width,_t.height,B.depth,mt,vt,_t.data):e.texImage3D(35866,j,ft,_t.width,_t.height,B.depth,0,mt,vt,_t.data)}else{Dt&&te&&e.texStorage2D(3553,R,ft,Tt[0].width,Tt[0].height);for(let j=0,it=Tt.length;j<it;j++)_t=Tt[j],b.format!==fn?mt!==null?Dt?e.compressedTexSubImage2D(3553,j,0,0,_t.width,_t.height,mt,_t.data):e.compressedTexImage2D(3553,j,ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage2D(3553,j,0,0,_t.width,_t.height,mt,vt,_t.data):e.texImage2D(3553,j,ft,_t.width,_t.height,0,mt,vt,_t.data)}else if(b.isDataArrayTexture)Dt?(te&&e.texStorage3D(35866,R,ft,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,mt,vt,B.data)):e.texImage3D(35866,0,ft,B.width,B.height,B.depth,0,mt,vt,B.data);else if(b.isData3DTexture)Dt?(te&&e.texStorage3D(32879,R,ft,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,mt,vt,B.data)):e.texImage3D(32879,0,ft,B.width,B.height,B.depth,0,mt,vt,B.data);else if(b.isFramebufferTexture){if(te)if(Dt)e.texStorage2D(3553,R,ft,B.width,B.height);else{let j=B.width,it=B.height;for(let dt=0;dt<R;dt++)e.texImage2D(3553,dt,ft,j,it,0,mt,vt,null),j>>=1,it>>=1}}else if(Tt.length>0&&ht){Dt&&te&&e.texStorage2D(3553,R,ft,Tt[0].width,Tt[0].height);for(let j=0,it=Tt.length;j<it;j++)_t=Tt[j],Dt?e.texSubImage2D(3553,j,0,0,mt,vt,_t):e.texImage2D(3553,j,ft,mt,vt,_t);b.generateMipmaps=!1}else Dt?(te&&e.texStorage2D(3553,R,ft,B.width,B.height),e.texSubImage2D(3553,0,0,0,mt,vt,B)):e.texImage2D(3553,0,ft,mt,vt,B);E(b,ht)&&C(et),L.__version=ut.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function N(A,b,q){if(b.image.length!==6)return;const et=k(A,b),rt=b.source;e.bindTexture(34067,A.__webglTexture,33984+q);const ut=n.get(rt);if(rt.version!==ut.__version||et===!0){e.activeTexture(33984+q),s.pixelStorei(37440,b.flipY),s.pixelStorei(37441,b.premultiplyAlpha),s.pixelStorei(3317,b.unpackAlignment),s.pixelStorei(37443,0);const L=b.isCompressedTexture||b.image[0].isCompressedTexture,Q=b.image[0]&&b.image[0].isDataTexture,B=[];for(let j=0;j<6;j++)!L&&!Q?B[j]=y(b.image[j],!1,!0,c):B[j]=Q?b.image[j].image:b.image[j],B[j]=ge(b,B[j]);const ht=B[0],mt=x(ht)||o,vt=r.convert(b.format,b.encoding),ft=r.convert(b.type),_t=P(b.internalFormat,vt,ft,b.encoding),Tt=o&&b.isVideoTexture!==!0,Dt=ut.__version===void 0||et===!0;let te=v(b,ht,mt);ct(34067,b,mt);let R;if(L){Tt&&Dt&&e.texStorage2D(34067,te,_t,ht.width,ht.height);for(let j=0;j<6;j++){R=B[j].mipmaps;for(let it=0;it<R.length;it++){const dt=R[it];b.format!==fn?vt!==null?Tt?e.compressedTexSubImage2D(34069+j,it,0,0,dt.width,dt.height,vt,dt.data):e.compressedTexImage2D(34069+j,it,_t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(34069+j,it,0,0,dt.width,dt.height,vt,ft,dt.data):e.texImage2D(34069+j,it,_t,dt.width,dt.height,0,vt,ft,dt.data)}}}else{R=b.mipmaps,Tt&&Dt&&(R.length>0&&te++,e.texStorage2D(34067,te,_t,B[0].width,B[0].height));for(let j=0;j<6;j++)if(Q){Tt?e.texSubImage2D(34069+j,0,0,0,B[j].width,B[j].height,vt,ft,B[j].data):e.texImage2D(34069+j,0,_t,B[j].width,B[j].height,0,vt,ft,B[j].data);for(let it=0;it<R.length;it++){const Mt=R[it].image[j].image;Tt?e.texSubImage2D(34069+j,it+1,0,0,Mt.width,Mt.height,vt,ft,Mt.data):e.texImage2D(34069+j,it+1,_t,Mt.width,Mt.height,0,vt,ft,Mt.data)}}else{Tt?e.texSubImage2D(34069+j,0,0,0,vt,ft,B[j]):e.texImage2D(34069+j,0,_t,vt,ft,B[j]);for(let it=0;it<R.length;it++){const dt=R[it];Tt?e.texSubImage2D(34069+j,it+1,0,0,vt,ft,dt.image[j]):e.texImage2D(34069+j,it+1,_t,vt,ft,dt.image[j])}}}E(b,mt)&&C(34067),ut.__version=rt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,q,et,rt){const ut=r.convert(q.format,q.encoding),L=r.convert(q.type),Q=P(q.internalFormat,ut,L,q.encoding);n.get(b).__hasExternalTextures||(rt===32879||rt===35866?e.texImage3D(rt,0,Q,b.width,b.height,b.depth,0,ut,L,null):e.texImage2D(rt,0,Q,b.width,b.height,0,ut,L,null)),e.bindFramebuffer(36160,A),Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,et,rt,n.get(q).__webglTexture,0,Vt(b)):(rt===3553||rt>=34069&&rt<=34074)&&s.framebufferTexture2D(36160,et,rt,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function yt(A,b,q){if(s.bindRenderbuffer(36161,A),b.depthBuffer&&!b.stencilBuffer){let et=33189;if(q||Nt(b)){const rt=b.depthTexture;rt&&rt.isDepthTexture&&(rt.type===yi?et=36012:rt.type===Mi&&(et=33190));const ut=Vt(b);Nt(b)?f.renderbufferStorageMultisampleEXT(36161,ut,et,b.width,b.height):s.renderbufferStorageMultisample(36161,ut,et,b.width,b.height)}else s.renderbufferStorage(36161,et,b.width,b.height);s.framebufferRenderbuffer(36160,36096,36161,A)}else if(b.depthBuffer&&b.stencilBuffer){const et=Vt(b);q&&Nt(b)===!1?s.renderbufferStorageMultisample(36161,et,35056,b.width,b.height):Nt(b)?f.renderbufferStorageMultisampleEXT(36161,et,35056,b.width,b.height):s.renderbufferStorage(36161,34041,b.width,b.height),s.framebufferRenderbuffer(36160,33306,36161,A)}else{const et=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let rt=0;rt<et.length;rt++){const ut=et[rt],L=r.convert(ut.format,ut.encoding),Q=r.convert(ut.type),B=P(ut.internalFormat,L,Q,ut.encoding),ht=Vt(b);q&&Nt(b)===!1?s.renderbufferStorageMultisample(36161,ht,B,b.width,b.height):Nt(b)?f.renderbufferStorageMultisampleEXT(36161,ht,B,b.width,b.height):s.renderbufferStorage(36161,B,b.width,b.height)}}s.bindRenderbuffer(36161,null)}function pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const et=n.get(b.depthTexture).__webglTexture,rt=Vt(b);if(b.depthTexture.format===wi)Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,rt):s.framebufferTexture2D(36160,36096,3553,et,0);else if(b.depthTexture.format===Lr)Nt(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,rt):s.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function ot(A){const b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pt(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,b.__webglFramebuffer[et]),b.__webglDepthbuffer[et]=s.createRenderbuffer(),yt(b.__webglDepthbuffer[et],A,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),yt(b.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function gt(A,b,q){const et=n.get(A);b!==void 0&&st(et.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&ot(A)}function At(A){const b=A.texture,q=n.get(A),et=n.get(b);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=b.version,a.memory.textures++);const rt=A.isWebGLCubeRenderTarget===!0,ut=A.isWebGLMultipleRenderTargets===!0,L=x(A)||o;if(rt){q.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)q.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),ut)if(i.drawBuffers){const Q=A.texture;for(let B=0,ht=Q.length;B<ht;B++){const mt=n.get(Q[B]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Nt(A)===!1){const Q=ut?b:[b];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let B=0;B<Q.length;B++){const ht=Q[B];q.__webglColorRenderbuffer[B]=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer[B]);const mt=r.convert(ht.format,ht.encoding),vt=r.convert(ht.type),ft=P(ht.internalFormat,mt,vt,ht.encoding,A.isXRRenderTarget===!0),_t=Vt(A);s.renderbufferStorageMultisample(36161,_t,ft,A.width,A.height),s.framebufferRenderbuffer(36160,36064+B,36161,q.__webglColorRenderbuffer[B])}s.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(rt){e.bindTexture(34067,et.__webglTexture),ct(34067,b,L);for(let Q=0;Q<6;Q++)st(q.__webglFramebuffer[Q],A,b,36064,34069+Q);E(b,L)&&C(34067),e.unbindTexture()}else if(ut){const Q=A.texture;for(let B=0,ht=Q.length;B<ht;B++){const mt=Q[B],vt=n.get(mt);e.bindTexture(3553,vt.__webglTexture),ct(3553,mt,L),st(q.__webglFramebuffer,A,mt,36064+B,3553),E(mt,L)&&C(3553)}e.unbindTexture()}else{let Q=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Q=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Q,et.__webglTexture),ct(Q,b,L),st(q.__webglFramebuffer,A,b,36064,Q),E(b,L)&&C(Q),e.unbindTexture()}A.depthBuffer&&ot(A)}function Ct(A){const b=x(A)||o,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let et=0,rt=q.length;et<rt;et++){const ut=q[et];if(E(ut,b)){const L=A.isWebGLCubeRenderTarget?34067:3553,Q=n.get(ut).__webglTexture;e.bindTexture(L,Q),C(L),e.unbindTexture()}}}function Ht(A){if(o&&A.samples>0&&Nt(A)===!1){const b=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,et=A.height;let rt=16384;const ut=[],L=A.stencilBuffer?33306:36096,Q=n.get(A),B=A.isWebGLMultipleRenderTargets===!0;if(B)for(let ht=0;ht<b.length;ht++)e.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ht,36161,null),e.bindFramebuffer(36160,Q.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ht,3553,null,0);e.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,Q.__webglFramebuffer);for(let ht=0;ht<b.length;ht++){ut.push(36064+ht),A.depthBuffer&&ut.push(L);const mt=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(mt===!1&&(A.depthBuffer&&(rt|=256),A.stencilBuffer&&(rt|=1024)),B&&s.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[ht]),mt===!0&&(s.invalidateFramebuffer(36008,[L]),s.invalidateFramebuffer(36009,[L])),B){const vt=n.get(b[ht]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,vt,0)}s.blitFramebuffer(0,0,q,et,0,0,q,et,rt,9728),p&&s.invalidateFramebuffer(36008,ut)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),B)for(let ht=0;ht<b.length;ht++){e.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ht,36161,Q.__webglColorRenderbuffer[ht]);const mt=n.get(b[ht]).__webglTexture;e.bindFramebuffer(36160,Q.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ht,3553,mt,0)}e.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function Vt(A){return Math.min(h,A.samples)}function Nt(A){const b=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Gt(A){const b=a.render.frame;_.get(A)!==b&&(_.set(A,b),A.update())}function ge(A,b){const q=A.encoding,et=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Do||q!==Pi&&(q===$t?o===!1?t.has("EXT_sRGB")===!0&&et===fn?(A.format=Do,A.minFilter=Qe,A.generateMipmaps=!1):b=uu.sRGBToLinear(b):(et!==fn||rt!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),b}this.allocateTextureUnit=W,this.resetTextureUnits=Z,this.setTexture2D=X,this.setTexture2DArray=xt,this.setTexture3D=nt,this.setTextureCube=H,this.rebindTextures=gt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Nt}function v1(s,t,e){const n=e.isWebGL2;function i(r,a=null){let o;if(r===Ci)return 5121;if(r===ad)return 32819;if(r===od)return 32820;if(r===id)return 5120;if(r===rd)return 5122;if(r===ou)return 5123;if(r===sd)return 5124;if(r===Mi)return 5125;if(r===yi)return 5126;if(r===ls)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ld)return 6406;if(r===fn)return 6408;if(r===cd)return 6409;if(r===ud)return 6410;if(r===wi)return 6402;if(r===Lr)return 34041;if(r===Do)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===hd)return 6403;if(r===fd)return 36244;if(r===dd)return 33319;if(r===pd)return 33320;if(r===md)return 36249;if(r===Fa||r===za||r===Ba||r===ka)if(a===$t)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===za)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tc||r===ec||r===nc||r===ic)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ec)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ic)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===rc||r===sc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===rc)return a===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===sc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ac||r===oc||r===lc||r===cc||r===uc||r===hc||r===fc||r===dc||r===pc||r===mc||r===gc||r===_c||r===xc||r===vc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ac)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_c)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vc)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ga)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ga)return a===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===_d||r===Mc||r===yc||r===Sc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ga)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Mc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mr?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class M1 extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class hr extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const y1={type:"move"};class ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class S1 extends Ue{constructor(t,e,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:wi,u!==wi&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===wi&&(n=Mi),n===void 0&&u===Lr&&(n=Mr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Le,this.minFilter=l!==void 0?l:Le,this.flipY=!1,this.generateMipmaps=!1}}class b1 extends Fi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const g=e.getContextAttributes();let m=null,d=null;const S=[],y=[],x=new Set,M=new Map,E=new tn;E.layers.enable(1),E.viewport=new pe;const C=new tn;C.layers.enable(2),C.viewport=new pe;const P=[E,C],v=new M1;v.layers.enable(1),v.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=S[H];return $===void 0&&($=new ho,S[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=S[H];return $===void 0&&($=new ho,S[H]=$),$.getGripSpace()},this.getHand=function(H){let $=S[H];return $===void 0&&($=new ho,S[H]=$),$.getHandSpace()};function G(H){const $=y.indexOf(H.inputSource);if($===-1)return;const at=S[$];at!==void 0&&at.dispatchEvent({type:H.type,data:H.inputSource})}function D(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",U);for(let H=0;H<S.length;H++){const $=y[H];$!==null&&(y[H]=null,S[H].disconnect($))}T=null,V=null,t.setRenderTarget(m),p=null,f=null,h=null,i=null,d=null,nt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",D),i.addEventListener("inputsourceschange",U),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:p}),d=new Li(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Ci,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let $=null,at=null,ct=null;g.depth&&(ct=g.stencil?35056:33190,$=g.stencil?Lr:wi,at=g.stencil?Mr:Mi);const k={colorFormat:32856,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(k),i.updateRenderState({layers:[f]}),d=new Li(f.textureWidth,f.textureHeight,{format:fn,type:Ci,depthTexture:new S1(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const bt=t.properties.get(d);bt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(H){for(let $=0;$<H.removed.length;$++){const at=H.removed[$],ct=y.indexOf(at);ct>=0&&(y[ct]=null,S[ct].disconnect(at))}for(let $=0;$<H.added.length;$++){const at=H.added[$];let ct=y.indexOf(at);if(ct===-1){for(let bt=0;bt<S.length;bt++)if(bt>=y.length){y.push(at),ct=bt;break}else if(y[bt]===null){y[bt]=at,ct=bt;break}if(ct===-1)break}const k=S[ct];k&&k.connect(at)}}const z=new I,J=new I;function Z(H,$,at){z.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(at.matrixWorld);const ct=z.distanceTo(J),k=$.projectionMatrix.elements,bt=at.projectionMatrix.elements,N=k[14]/(k[10]-1),st=k[14]/(k[10]+1),yt=(k[9]+1)/k[5],pt=(k[9]-1)/k[5],ot=(k[8]-1)/k[0],gt=(bt[8]+1)/bt[0],At=N*ot,Ct=N*gt,Ht=ct/(-ot+gt),Vt=Ht*-ot;$.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Vt),H.translateZ(Ht),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Nt=N+Ht,Gt=st+Ht,ge=At-Vt,A=Ct+(ct-Vt),b=yt*st/Gt*Nt,q=pt*st/Gt*Nt;H.projectionMatrix.makePerspective(ge,A,b,q,Nt,Gt),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;v.near=C.near=E.near=H.near,v.far=C.far=E.far=H.far,(T!==v.near||V!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,V=v.far);const $=H.parent,at=v.cameras;W(v,$);for(let ct=0;ct<at.length;ct++)W(at[ct],$);at.length===2?Z(v,E,C):v.projectionMatrix.copy(E.projectionMatrix),tt(H,v,$)};function tt(H,$,at){at===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(at.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const ct=H.children;for(let k=0,bt=ct.length;k<bt;k++)ct[k].updateMatrixWorld(!0);H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Io*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return x};let X=null;function xt(H,$){if(u=$.getViewerPose(c||a),_=$,u!==null){const at=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ct=!1;at.length!==v.cameras.length&&(v.cameras.length=0,ct=!0);for(let k=0;k<at.length;k++){const bt=at[k];let N=null;if(p!==null)N=p.getViewport(bt);else{const yt=h.getViewSubImage(f,bt);N=yt.viewport,k===0&&(t.setRenderTargetTextures(d,yt.colorTexture,f.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(d))}let st=P[k];st===void 0&&(st=new tn,st.layers.enable(k),st.viewport=new pe,P[k]=st),st.matrix.fromArray(bt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(bt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(N.x,N.y,N.width,N.height),k===0&&(v.matrix.copy(st.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ct===!0&&v.cameras.push(st)}}for(let at=0;at<S.length;at++){const ct=y[at],k=S[at];ct!==null&&k!==void 0&&k.update(ct,$,c||a)}if(X&&X(H,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let at=null;for(const ct of x)$.detectedPlanes.has(ct)||(at===null&&(at=[]),at.push(ct));if(at!==null)for(const ct of at)x.delete(ct),M.delete(ct),n.dispatchEvent({type:"planeremoved",data:ct});for(const ct of $.detectedPlanes)if(!x.has(ct))x.add(ct),M.set(ct,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ct});else{const k=M.get(ct);ct.lastChangedTime>k&&(M.set(ct,ct.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ct}))}}_=null}const nt=new yu;nt.setAnimationLoop(xt),this.setAnimationLoop=function(H){X=H},this.dispose=function(){}}}function w1(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,_u(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,S,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ie&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ie&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=s.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ie&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function T1(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(35375):0;function l(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(S,M);const E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const x=s.createBuffer(),M=S.__size,E=S.usage;return s.bindBuffer(35345,x),s.bufferData(35345,M,E),s.bindBuffer(35345,null),s.bindBufferBase(35345,y,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],x=S.uniforms,M=S.__cache;s.bindBuffer(35345,y);for(let E=0,C=x.length;E<C;E++){const P=x[E];if(p(P,E,M)===!0){const v=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let G=0;G<T.length;G++){const D=T[G],U=g(D);typeof D=="number"?(P.__data[0]=D,s.bufferSubData(35345,v+V,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,V),V+=U.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,v,P.__data)}}s.bindBuffer(35345,null)}function p(S,y,x){const M=S.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],C=[];for(let P=0;P<E.length;P++)C.push(E[P].clone());x[y]=C}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],C=Array.isArray(M)?M:[M];for(let P=0;P<E.length;P++){const v=E[P];if(v.equals(C[P])===!1)return v.copy(C[P]),!0}}return!1}function _(S){const y=S.uniforms;let x=0;const M=16;let E=0;for(let C=0,P=y.length;C<P;C++){const v=y[C],T={boundary:0,storage:0},V=Array.isArray(v.value)?v.value:[v.value];for(let G=0,D=V.length;G<D;G++){const U=V[G],z=g(U);T.boundary+=z.boundary,T.storage+=z.storage}if(v.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=x,C>0){E=x%M;const G=M-E;E!==0&&G-T.boundary<0&&(x+=M-E,v.__offset=x)}x+=T.storage}return E=x%M,E>0&&(x+=M-E),S.__size=x,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function d(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}function E1(){const s=us("canvas");return s.style.display="block",s}class Eu{constructor(t={}){const{canvas:e=E1(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let p=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Pi,this.useLegacyLights=!0,this.toneMapping=On,this.toneMappingExposure=1;const d=this;let S=!1,y=0,x=0,M=null,E=-1,C=null;const P=new pe,v=new pe;let T=null,V=e.width,G=e.height,D=1,U=null,z=null;const J=new pe(0,0,V,G),Z=new pe(0,0,V,G);let W=!1;const tt=new Mu;let X=!1,xt=!1,nt=null;const H=new ie,$=new I,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return M===null?D:1}let k=n;function bt(w,F){for(let Y=0;Y<w.length;Y++){const O=w[Y],K=e.getContext(O,F);if(K!==null)return K}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fl}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),k===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),k=bt(F,w),k===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let N,st,yt,pt,ot,gt,At,Ct,Ht,Vt,Nt,Gt,ge,A,b,q,et,rt,ut,L,Q,B,ht,mt;function vt(){N=new Fg(k),st=new Lg(k,N,t),N.init(st),B=new v1(k,N,st),yt=new _1(k,N,st),pt=new kg,ot=new i1,gt=new x1(k,N,yt,ot,st,B,pt),At=new Dg(d),Ct=new Ng(d),Ht=new Kd(k,st),ht=new Cg(k,N,Ht,st),Vt=new zg(k,Ht,pt,ht),Nt=new Wg(k,Vt,Ht,pt),ut=new Hg(k,st,gt),q=new Rg(ot),Gt=new n1(d,At,Ct,N,st,ht,q),ge=new w1(d,ot),A=new s1,b=new h1(N,st),rt=new Ag(d,At,Ct,yt,Nt,f,l),et=new g1(d,Nt,st),mt=new T1(k,pt,st,yt),L=new Pg(k,N,pt,st),Q=new Bg(k,N,pt,st),pt.programs=Gt.programs,d.capabilities=st,d.extensions=N,d.properties=ot,d.renderLists=A,d.shadowMap=et,d.state=yt,d.info=pt}vt();const ft=new b1(d,k);this.xr=ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=N.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=N.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(V,G,!1))},this.getSize=function(w){return w.set(V,G)},this.setSize=function(w,F,Y=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,G=F,e.width=Math.floor(w*D),e.height=Math.floor(F*D),Y===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(V*D,G*D).floor()},this.setDrawingBufferSize=function(w,F,Y){V=w,G=F,D=Y,e.width=Math.floor(w*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,F,Y,O){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,F,Y,O),yt.viewport(P.copy(J).multiplyScalar(D).floor())},this.getScissor=function(w){return w.copy(Z)},this.setScissor=function(w,F,Y,O){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,F,Y,O),yt.scissor(v.copy(Z).multiplyScalar(D).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(w){yt.setScissorTest(W=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){z=w},this.getClearColor=function(w){return w.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(w=!0,F=!0,Y=!0){let O=0;w&&(O|=16384),F&&(O|=256),Y&&(O|=1024),k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),A.dispose(),b.dispose(),ot.dispose(),At.dispose(),Ct.dispose(),Nt.dispose(),ht.dispose(),mt.dispose(),Gt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Mt),ft.removeEventListener("sessionend",jt),nt&&(nt.dispose(),nt=null),Zt.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=pt.autoReset,F=et.enabled,Y=et.autoUpdate,O=et.needsUpdate,K=et.type;vt(),pt.autoReset=w,et.enabled=F,et.autoUpdate=Y,et.needsUpdate=O,et.type=K}function Dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const F=w.target;F.removeEventListener("dispose",te),R(F)}function R(w){j(w),ot.remove(w)}function j(w){const F=ot.get(w).programs;F!==void 0&&(F.forEach(function(Y){Gt.releaseProgram(Y)}),w.isShaderMaterial&&Gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,Y,O,K,St){F===null&&(F=at);const wt=K.isMesh&&K.matrixWorld.determinant()<0,Et=Xh(w,F,Y,O,K);yt.setMaterial(O,wt);let Lt=Y.index,It=1;O.wireframe===!0&&(Lt=Vt.getWireframeAttribute(Y),It=2);const Ut=Y.drawRange,Ft=Y.attributes.position;let Wt=Ut.start*It,Ee=(Ut.start+Ut.count)*It;St!==null&&(Wt=Math.max(Wt,St.start*It),Ee=Math.min(Ee,(St.start+St.count)*It)),Lt!==null?(Wt=Math.max(Wt,0),Ee=Math.min(Ee,Lt.count)):Ft!=null&&(Wt=Math.max(Wt,0),Ee=Math.min(Ee,Ft.count));const an=Ee-Wt;if(an<0||an===1/0)return;ht.setup(K,O,Et,Y,Lt);let li,re=L;if(Lt!==null&&(li=Ht.get(Lt),re=Q,re.setIndex(li)),K.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*ct()),re.setMode(1)):re.setMode(4);else if(K.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),yt.setLineWidth(kt*ct()),K.isLineSegments?re.setMode(1):K.isLineLoop?re.setMode(2):re.setMode(3)}else K.isPoints?re.setMode(0):K.isSprite&&re.setMode(4);if(K.isInstancedMesh)re.renderInstances(Wt,an,K.count);else if(Y.isInstancedBufferGeometry){const kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,La=Math.min(Y.instanceCount,kt);re.renderInstances(Wt,an,La)}else re.render(Wt,an)},this.compile=function(w,F){function Y(O,K,St){O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,ws(O,K,St),O.side=ii,O.needsUpdate=!0,ws(O,K,St),O.side=Un):ws(O,K,St)}_=b.get(w),_.init(),m.push(_),w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights(d.useLegacyLights),w.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let St=0;St<K.length;St++){const wt=K[St];Y(wt,w,O)}else Y(K,w,O)}),m.pop(),_=null};let it=null;function dt(w){it&&it(w)}function Mt(){Zt.stop()}function jt(){Zt.start()}const Zt=new yu;Zt.setAnimationLoop(dt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(w){it=w,ft.setAnimationLoop(w),w===null?Zt.stop():Zt.start()},ft.addEventListener("sessionstart",Mt),ft.addEventListener("sessionend",jt),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(F),F=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,F,M),_=b.get(w,m.length),_.init(),m.push(_),H.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(H),xt=this.localClippingEnabled,X=q.init(this.clippingPlanes,xt),p=A.get(w,g.length),p.init(),g.push(p),_e(w,F,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(U,z),X===!0&&q.beginShadows();const Y=_.state.shadowsArray;if(et.render(Y,w,F),X===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(p,w),_.setupLights(d.useLegacyLights),F.isArrayCamera){const O=F.cameras;for(let K=0,St=O.length;K<St;K++){const wt=O[K];kn(p,w,wt,wt.viewport)}}else kn(p,w,F);M!==null&&(gt.updateMultisampleRenderTarget(M),gt.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(d,w,F),ht.resetDefaultState(),E=-1,C=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function _e(w,F,Y,O){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||tt.intersectsSprite(w)){O&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const wt=Nt.update(w),Et=w.material;Et.visible&&p.push(w,wt,Et,Y,$.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==pt.render.frame&&(w.skeleton.update(),w.skeleton.frame=pt.render.frame),!w.frustumCulled||tt.intersectsObject(w))){O&&$.setFromMatrixPosition(w.matrixWorld).applyMatrix4(H);const wt=Nt.update(w),Et=w.material;if(Array.isArray(Et)){const Lt=wt.groups;for(let It=0,Ut=Lt.length;It<Ut;It++){const Ft=Lt[It],Wt=Et[Ft.materialIndex];Wt&&Wt.visible&&p.push(w,wt,Wt,Y,$.z,Ft)}}else Et.visible&&p.push(w,wt,Et,Y,$.z,null)}}const St=w.children;for(let wt=0,Et=St.length;wt<Et;wt++)_e(St[wt],F,Y,O)}function kn(w,F,Y,O){const K=w.opaque,St=w.transmissive,wt=w.transparent;_.setupLightsView(Y),X===!0&&q.setGlobalState(d.clippingPlanes,Y),St.length>0&&ee(K,St,F,Y),O&&yt.viewport(P.copy(O)),K.length>0&&$e(K,F,Y),St.length>0&&$e(St,F,Y),wt.length>0&&$e(wt,F,Y),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ee(w,F,Y,O){if(nt===null){const Et=st.isWebGL2;nt=new Li(1024,1024,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")?ls:Ci,minFilter:os,samples:Et&&o===!0?4:0})}const K=d.getRenderTarget();d.setRenderTarget(nt),d.clear();const St=d.toneMapping;d.toneMapping=On,$e(w,Y,O),gt.updateMultisampleRenderTarget(nt),gt.updateRenderTargetMipmap(nt);let wt=!1;for(let Et=0,Lt=F.length;Et<Lt;Et++){const It=F[Et],Ut=It.object,Ft=It.geometry,Wt=It.material,Ee=It.group;if(Wt.side===Un&&Ut.layers.test(O.layers)){const an=Wt.side;Wt.side=Ie,Wt.needsUpdate=!0,pn(Ut,Y,O,Ft,Wt,Ee),Wt.side=an,Wt.needsUpdate=!0,wt=!0}}wt===!0&&(gt.updateMultisampleRenderTarget(nt),gt.updateRenderTargetMipmap(nt)),d.setRenderTarget(K),d.toneMapping=St}function $e(w,F,Y){const O=F.isScene===!0?F.overrideMaterial:null;for(let K=0,St=w.length;K<St;K++){const wt=w[K],Et=wt.object,Lt=wt.geometry,It=O===null?wt.material:O,Ut=wt.group;Et.layers.test(Y.layers)&&pn(Et,F,Y,Lt,It,Ut)}}function pn(w,F,Y,O,K,St){w.onBeforeRender(d,F,Y,O,K,St),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(d,F,Y,O,w,St),K.transparent===!0&&K.side===Un&&K.forceSinglePass===!1?(K.side=Ie,K.needsUpdate=!0,d.renderBufferDirect(Y,F,O,K,w,St),K.side=ii,K.needsUpdate=!0,d.renderBufferDirect(Y,F,O,K,w,St),K.side=Un):d.renderBufferDirect(Y,F,O,K,w,St),w.onAfterRender(d,F,Y,O,K,St)}function ws(w,F,Y){F.isScene!==!0&&(F=at);const O=ot.get(w),K=_.state.lights,St=_.state.shadowsArray,wt=K.state.version,Et=Gt.getParameters(w,K.state,St,F,Y),Lt=Gt.getProgramCacheKey(Et);let It=O.programs;O.environment=w.isMeshStandardMaterial?F.environment:null,O.fog=F.fog,O.envMap=(w.isMeshStandardMaterial?Ct:At).get(w.envMap||O.environment),It===void 0&&(w.addEventListener("dispose",te),It=new Map,O.programs=It);let Ut=It.get(Lt);if(Ut!==void 0){if(O.currentProgram===Ut&&O.lightsStateVersion===wt)return Bl(w,Et),Ut}else Et.uniforms=Gt.getUniforms(w),w.onBuild(Y,Et,d),w.onBeforeCompile(Et,d),Ut=Gt.acquireProgram(Et,Lt),It.set(Lt,Ut),O.uniforms=Et.uniforms;const Ft=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=q.uniform),Bl(w,Et),O.needsLights=jh(w),O.lightsStateVersion=wt,O.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.directionalShadowMap.value=K.state.directionalShadowMap,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotShadowMap.value=K.state.spotShadowMap,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMap.value=K.state.pointShadowMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix);const Wt=Ut.getUniforms(),Ee=ia.seqWithValue(Wt.seq,Ft);return O.currentProgram=Ut,O.uniformsList=Ee,Ut}function Bl(w,F){const Y=ot.get(w);Y.outputEncoding=F.outputEncoding,Y.instancing=F.instancing,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Xh(w,F,Y,O,K){F.isScene!==!0&&(F=at),gt.resetTextureUnits();const St=F.fog,wt=O.isMeshStandardMaterial?F.environment:null,Et=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Pi,Lt=(O.isMeshStandardMaterial?Ct:At).get(O.envMap||wt),It=O.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ut=!!O.normalMap&&!!Y.attributes.tangent,Ft=!!Y.morphAttributes.position,Wt=!!Y.morphAttributes.normal,Ee=!!Y.morphAttributes.color,an=O.toneMapped?d.toneMapping:On,li=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=li!==void 0?li.length:0,kt=ot.get(O),La=_.state.lights;if(X===!0&&(xt===!0||w!==C)){const Be=w===C&&O.id===E;q.setState(O,w,Be)}let ue=!1;O.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==La.state.version||kt.outputEncoding!==Et||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==Lt||O.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==q.numPlanes||kt.numIntersection!==q.numIntersection)||kt.vertexAlphas!==It||kt.vertexTangents!==Ut||kt.morphTargets!==Ft||kt.morphNormals!==Wt||kt.morphColors!==Ee||kt.toneMapping!==an||st.isWebGL2===!0&&kt.morphTargetsCount!==re)&&(ue=!0):(ue=!0,kt.__version=O.version);let ci=kt.currentProgram;ue===!0&&(ci=ws(O,F,K));let kl=!1,Gr=!1,Ra=!1;const Ae=ci.getUniforms(),ui=kt.uniforms;if(yt.useProgram(ci.program)&&(kl=!0,Gr=!0,Ra=!0),O.id!==E&&(E=O.id,Gr=!0),kl||C!==w){if(Ae.setValue(k,"projectionMatrix",w.projectionMatrix),st.logarithmicDepthBuffer&&Ae.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),C!==w&&(C=w,Gr=!0,Ra=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Be=Ae.map.cameraPosition;Be!==void 0&&Be.setValue(k,$.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ae.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&Ae.setValue(k,"viewMatrix",w.matrixWorldInverse)}if(K.isSkinnedMesh){Ae.setOptional(k,K,"bindMatrix"),Ae.setOptional(k,K,"bindMatrixInverse");const Be=K.skeleton;Be&&(st.floatVertexTextures?(Be.boneTexture===null&&Be.computeBoneTexture(),Ae.setValue(k,"boneTexture",Be.boneTexture,gt),Ae.setValue(k,"boneTextureSize",Be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Da=Y.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0&&st.isWebGL2===!0)&&ut.update(K,Y,ci),(Gr||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,Ae.setValue(k,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ui.envMap.value=Lt,ui.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Gr&&(Ae.setValue(k,"toneMappingExposure",d.toneMappingExposure),kt.needsLights&&Yh(ui,Ra),St&&O.fog===!0&&ge.refreshFogUniforms(ui,St),ge.refreshMaterialUniforms(ui,O,D,G,nt),ia.upload(k,kt.uniformsList,ui,gt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ia.upload(k,kt.uniformsList,ui,gt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ae.setValue(k,"center",K.center),Ae.setValue(k,"modelViewMatrix",K.modelViewMatrix),Ae.setValue(k,"normalMatrix",K.normalMatrix),Ae.setValue(k,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Be=O.uniformsGroups;for(let Ia=0,$h=Be.length;Ia<$h;Ia++)if(st.isWebGL2){const Gl=Be[Ia];mt.update(Gl,ci),mt.bind(Gl,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function Yh(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,F,Y){ot.get(w.texture).__webglTexture=F,ot.get(w.depthTexture).__webglTexture=Y;const O=ot.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=Y===void 0,O.__autoAllocateDepthBuffer||N.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const Y=ot.get(w);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,Y=0){M=w,y=F,x=Y;let O=!0,K=null,St=!1,wt=!1;if(w){const Lt=ot.get(w);Lt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(36160,null),O=!1):Lt.__webglFramebuffer===void 0?gt.setupRenderTarget(w):Lt.__hasExternalTextures&&gt.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);const Ut=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(K=Ut[F],St=!0):st.isWebGL2&&w.samples>0&&gt.useMultisampledRTT(w)===!1?K=ot.get(w).__webglMultisampledFramebuffer:K=Ut,P.copy(w.viewport),v.copy(w.scissor),T=w.scissorTest}else P.copy(J).multiplyScalar(D).floor(),v.copy(Z).multiplyScalar(D).floor(),T=W;if(yt.bindFramebuffer(36160,K)&&st.drawBuffers&&O&&yt.drawBuffers(w,K),yt.viewport(P),yt.scissor(v),yt.setScissorTest(T),St){const Lt=ot.get(w.texture);k.framebufferTexture2D(36160,36064,34069+F,Lt.__webglTexture,Y)}else if(wt){const Lt=ot.get(w.texture),It=F||0;k.framebufferTextureLayer(36160,36064,Lt.__webglTexture,Y||0,It)}E=-1},this.readRenderTargetPixels=function(w,F,Y,O,K,St,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Et=Et[wt]),Et){yt.bindFramebuffer(36160,Et);try{const Lt=w.texture,It=Lt.format,Ut=Lt.type;if(It!==fn&&B.convert(It)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ut===ls&&(N.has("EXT_color_buffer_half_float")||st.isWebGL2&&N.has("EXT_color_buffer_float"));if(Ut!==Ci&&B.convert(Ut)!==k.getParameter(35738)&&!(Ut===yi&&(st.isWebGL2||N.has("OES_texture_float")||N.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-O&&Y>=0&&Y<=w.height-K&&k.readPixels(F,Y,O,K,B.convert(It),B.convert(Ut),St)}finally{const Lt=M!==null?ot.get(M).__webglFramebuffer:null;yt.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(w,F,Y=0){const O=Math.pow(2,-Y),K=Math.floor(F.image.width*O),St=Math.floor(F.image.height*O);gt.setTexture2D(F,0),k.copyTexSubImage2D(3553,Y,0,0,w.x,w.y,K,St),yt.unbindTexture()},this.copyTextureToTexture=function(w,F,Y,O=0){const K=F.image.width,St=F.image.height,wt=B.convert(Y.format),Et=B.convert(Y.type);gt.setTexture2D(Y,0),k.pixelStorei(37440,Y.flipY),k.pixelStorei(37441,Y.premultiplyAlpha),k.pixelStorei(3317,Y.unpackAlignment),F.isDataTexture?k.texSubImage2D(3553,O,w.x,w.y,K,St,wt,Et,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(3553,O,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,wt,F.mipmaps[0].data):k.texSubImage2D(3553,O,w.x,w.y,wt,Et,F.image),O===0&&Y.generateMipmaps&&k.generateMipmap(3553),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,Y,O,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=w.max.x-w.min.x+1,wt=w.max.y-w.min.y+1,Et=w.max.z-w.min.z+1,Lt=B.convert(O.format),It=B.convert(O.type);let Ut;if(O.isData3DTexture)gt.setTexture3D(O,0),Ut=32879;else if(O.isDataArrayTexture)gt.setTexture2DArray(O,0),Ut=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,O.flipY),k.pixelStorei(37441,O.premultiplyAlpha),k.pixelStorei(3317,O.unpackAlignment);const Ft=k.getParameter(3314),Wt=k.getParameter(32878),Ee=k.getParameter(3316),an=k.getParameter(3315),li=k.getParameter(32877),re=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;k.pixelStorei(3314,re.width),k.pixelStorei(32878,re.height),k.pixelStorei(3316,w.min.x),k.pixelStorei(3315,w.min.y),k.pixelStorei(32877,w.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(Ut,K,F.x,F.y,F.z,St,wt,Et,Lt,It,re.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ut,K,F.x,F.y,F.z,St,wt,Et,Lt,re.data)):k.texSubImage3D(Ut,K,F.x,F.y,F.z,St,wt,Et,Lt,It,re),k.pixelStorei(3314,Ft),k.pixelStorei(32878,Wt),k.pixelStorei(3316,Ee),k.pixelStorei(3315,an),k.pixelStorei(32877,li),K===0&&O.generateMipmaps&&k.generateMipmap(Ut),yt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?gt.setTextureCube(w,0):w.isData3DTexture?gt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?gt.setTexture2DArray(w,0):gt.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,yt.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class A1 extends Eu{}A1.prototype.isWebGL1Renderer=!0;class C1 extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Ss extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const l0=new I,c0=new I,u0=new ie,fo=new dl,Ys=new Ms;class P1 extends be{constructor(t=new je,e=new Ss){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)l0.fromBufferAttribute(e,i-1),c0.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=l0.distanceTo(c0);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;u0.copy(i).invert(),fo.copy(t.ray).applyMatrix4(u0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new I,u=new I,h=new I,f=new I,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const d=Math.max(0,a.start),S=Math.min(_.count,a.start+a.count);for(let y=d,x=S-1;y<x;y+=p){const M=_.getX(y),E=_.getX(y+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,E),fo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=t.ray.origin.distanceTo(f);P<t.near||P>t.far||e.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let y=d,x=S-1;y<x;y+=p){if(c.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),fo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(f);E<t.near||E>t.far||e.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const h0=new I,f0=new I;class Au extends P1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)h0.fromBufferAttribute(e,i),f0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+h0.distanceTo(f0);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gl extends Br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const d0=new ie,Oo=new dl,js=new Ms,$s=new I;class p0 extends be{constructor(t=new je,e=new gl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;d0.copy(i).invert(),Oo.copy(t.ray).applyMatrix4(d0);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,g=p;_<g;_++){const m=c.getX(_);$s.fromBufferAttribute(h,m),m0($s,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p;_<g;_++)$s.fromBufferAttribute(h,_),m0($s,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function m0(s,t,e,n,i,r,a){const o=Oo.distanceSqToPoint(s);if(o<e){const l=new I;Oo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class _l extends je{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,p=new I,_=new Ot;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<i;g++){const m=g*(n+1);for(let d=0;d<n;d++){const S=d+m,y=S,x=S+n+1,M=S+n+2,E=S+1;o.push(y,x,E),o.push(x,M,E)}}this.setIndex(o),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xl extends je{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const S=[],y=d/n;let x=0;d===0&&a===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){const E=M/e;h.x=-t*Math.cos(i+E*r)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(i+E*r)*Math.sin(a+y*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(E+x,1-y),S.push(c++)}u.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const y=u[d][S+1],x=u[d][S],M=u[d+1][S],E=u[d+1][S+1];(d!==0||a>0)&&p.push(y,x,E),(d!==n-1||l<Math.PI)&&p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new me(_,3)),this.setAttribute("normal",new me(g,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const g0={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class L1{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Cu=new L1;class Pu{constructor(t){this.manager=t!==void 0?t:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class R1 extends Pu{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=g0.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=us("img");function l(){u(),g0.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class D1 extends Pu{constructor(t){super(t)}load(t,e,n,i){const r=new Ue,a=new R1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}let _0=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};class I1 extends Au{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new qt(r),a=new qt(a);const o=[],l=[];if(e>1)for(let h=0;h<e;h++){const f=h/e*(Math.PI*2),p=Math.sin(f)*t,_=Math.cos(f)*t;o.push(0,0,0),o.push(p,0,_);const g=h&1?r:a;l.push(g.r,g.g,g.b),l.push(g.r,g.g,g.b)}for(let h=0;h<n;h++){const f=h&1?r:a,p=t-t/n*h;for(let _=0;_<i;_++){let g=_/i*(Math.PI*2),m=Math.sin(g)*p,d=Math.cos(g)*p;o.push(m,0,d),l.push(f.r,f.g,f.b),g=(_+1)/i*(Math.PI*2),m=Math.sin(g)*p,d=Math.cos(g)*p,o.push(m,0,d),l.push(f.r,f.g,f.b)}}const c=new je;c.setAttribute("position",new me(o,3)),c.setAttribute("color",new me(l,3));const u=new Ss({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);const x0={type:"change"},po={type:"start"},v0={type:"end"};class U1 extends Fi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Gt),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Gt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(x0),n.update(),r=i.NONE},this.update=function(){const L=new I,Q=new Ri().setFromUnitVectors(t.up,new I(0,1,0)),B=Q.clone().invert(),ht=new I,mt=new Ri,vt=2*Math.PI;return function(){const _t=n.object.position;L.copy(_t).sub(n.target),L.applyQuaternion(Q),o.setFromVector3(L),n.autoRotate&&r===i.NONE&&v(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Tt=n.minAzimuthAngle,Dt=n.maxAzimuthAngle;return isFinite(Tt)&&isFinite(Dt)&&(Tt<-Math.PI?Tt+=vt:Tt>Math.PI&&(Tt-=vt),Dt<-Math.PI?Dt+=vt:Dt>Math.PI&&(Dt-=vt),Tt<=Dt?o.theta=Math.max(Tt,Math.min(Dt,o.theta)):o.theta=o.theta>(Tt+Dt)/2?Math.max(Tt,o.theta):Math.min(Dt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(o),L.applyQuaternion(B),_t.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ht.distanceToSquared(n.object.position)>a||8*(1-mt.dot(n.object.quaternion))>a?(n.dispatchEvent(x0),ht.copy(n.object.position),mt.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",b),n.domElement.removeEventListener("pointerdown",gt),n.domElement.removeEventListener("pointercancel",Ct),n.domElement.removeEventListener("wheel",Nt),n.domElement.removeEventListener("pointermove",At),n.domElement.removeEventListener("pointerup",Ct),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Gt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new _0,l=new _0;let c=1;const u=new I;let h=!1;const f=new Ot,p=new Ot,_=new Ot,g=new Ot,m=new Ot,d=new Ot,S=new Ot,y=new Ot,x=new Ot,M=[],E={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function v(L){l.theta-=L}function T(L){l.phi-=L}const V=function(){const L=new I;return function(B,ht){L.setFromMatrixColumn(ht,0),L.multiplyScalar(-B),u.add(L)}}(),G=function(){const L=new I;return function(B,ht){n.screenSpacePanning===!0?L.setFromMatrixColumn(ht,1):(L.setFromMatrixColumn(ht,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(B),u.add(L)}}(),D=function(){const L=new I;return function(B,ht){const mt=n.domElement;if(n.object.isPerspectiveCamera){const vt=n.object.position;L.copy(vt).sub(n.target);let ft=L.length();ft*=Math.tan(n.object.fov/2*Math.PI/180),V(2*B*ft/mt.clientHeight,n.object.matrix),G(2*ht*ft/mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(B*(n.object.right-n.object.left)/n.object.zoom/mt.clientWidth,n.object.matrix),G(ht*(n.object.top-n.object.bottom)/n.object.zoom/mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(L){f.set(L.clientX,L.clientY)}function Z(L){S.set(L.clientX,L.clientY)}function W(L){g.set(L.clientX,L.clientY)}function tt(L){p.set(L.clientX,L.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;v(2*Math.PI*_.x/Q.clientHeight),T(2*Math.PI*_.y/Q.clientHeight),f.copy(p),n.update()}function X(L){y.set(L.clientX,L.clientY),x.subVectors(y,S),x.y>0?U(P()):x.y<0&&z(P()),S.copy(y),n.update()}function xt(L){m.set(L.clientX,L.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m),n.update()}function nt(L){L.deltaY<0?z(P()):L.deltaY>0&&U(P()),n.update()}function H(L){let Q=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),Q=!0;break}Q&&(L.preventDefault(),n.update())}function $(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);f.set(L,Q)}}function at(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),Q=.5*(M[0].pageY+M[1].pageY);g.set(L,Q)}}function ct(){const L=M[0].pageX-M[1].pageX,Q=M[0].pageY-M[1].pageY,B=Math.sqrt(L*L+Q*Q);S.set(0,B)}function k(){n.enableZoom&&ct(),n.enablePan&&at()}function bt(){n.enableZoom&&ct(),n.enableRotate&&$()}function N(L){if(M.length==1)p.set(L.pageX,L.pageY);else{const B=ut(L),ht=.5*(L.pageX+B.x),mt=.5*(L.pageY+B.y);p.set(ht,mt)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Q=n.domElement;v(2*Math.PI*_.x/Q.clientHeight),T(2*Math.PI*_.y/Q.clientHeight),f.copy(p)}function st(L){if(M.length===1)m.set(L.pageX,L.pageY);else{const Q=ut(L),B=.5*(L.pageX+Q.x),ht=.5*(L.pageY+Q.y);m.set(B,ht)}d.subVectors(m,g).multiplyScalar(n.panSpeed),D(d.x,d.y),g.copy(m)}function yt(L){const Q=ut(L),B=L.pageX-Q.x,ht=L.pageY-Q.y,mt=Math.sqrt(B*B+ht*ht);y.set(0,mt),x.set(0,Math.pow(y.y/S.y,n.zoomSpeed)),U(x.y),S.copy(y)}function pt(L){n.enableZoom&&yt(L),n.enablePan&&st(L)}function ot(L){n.enableZoom&&yt(L),n.enableRotate&&N(L)}function gt(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",At),n.domElement.addEventListener("pointerup",Ct)),q(L),L.pointerType==="touch"?ge(L):Ht(L))}function At(L){n.enabled!==!1&&(L.pointerType==="touch"?A(L):Vt(L))}function Ct(L){et(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",At),n.domElement.removeEventListener("pointerup",Ct)),n.dispatchEvent(v0),r=i.NONE}function Ht(L){let Q;switch(L.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Gi.DOLLY:if(n.enableZoom===!1)return;Z(L),r=i.DOLLY;break;case Gi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;W(L),r=i.PAN}else{if(n.enableRotate===!1)return;J(L),r=i.ROTATE}break;case Gi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;J(L),r=i.ROTATE}else{if(n.enablePan===!1)return;W(L),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(po)}function Vt(L){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;tt(L);break;case i.DOLLY:if(n.enableZoom===!1)return;X(L);break;case i.PAN:if(n.enablePan===!1)return;xt(L);break}}function Nt(L){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(L.preventDefault(),n.dispatchEvent(po),nt(L),n.dispatchEvent(v0))}function Gt(L){n.enabled===!1||n.enablePan===!1||H(L)}function ge(L){switch(rt(L),M.length){case 1:switch(n.touches.ONE){case Vi.ROTATE:if(n.enableRotate===!1)return;$(),r=i.TOUCH_ROTATE;break;case Vi.PAN:if(n.enablePan===!1)return;at(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Vi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;k(),r=i.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(po)}function A(L){switch(rt(L),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;N(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;st(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pt(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ot(L),n.update();break;default:r=i.NONE}}function b(L){n.enabled!==!1&&L.preventDefault()}function q(L){M.push(L)}function et(L){delete E[L.pointerId];for(let Q=0;Q<M.length;Q++)if(M[Q].pointerId==L.pointerId){M.splice(Q,1);return}}function rt(L){let Q=E[L.pointerId];Q===void 0&&(Q=new Ot,E[L.pointerId]=Q),Q.set(L.pageX,L.pageY)}function ut(L){const Q=L.pointerId===M[0].pointerId?M[1]:M[0];return E[Q.pointerId]}n.domElement.addEventListener("contextmenu",b),n.domElement.addEventListener("pointerdown",gt),n.domElement.addEventListener("pointercancel",Ct),n.domElement.addEventListener("wheel",Nt,{passive:!1}),this.update()}}class O1 extends be{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ot(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const sr=new I,M0=new ie,y0=new ie,S0=new I,b0=new I;class N1{constructor(t={}){const e=this;let n,i,r,a;const o={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(p,_){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),M0.copy(_.matrixWorldInverse),y0.multiplyMatrices(_.projectionMatrix,M0),c(p,p,_),f(p)},this.setSize=function(p,_){n=p,i=_,r=n/2,a=i/2,l.style.width=p+"px",l.style.height=_+"px"};function c(p,_,g){if(p.isCSS2DObject){sr.setFromMatrixPosition(p.matrixWorld),sr.applyMatrix4(y0);const m=p.visible===!0&&sr.z>=-1&&sr.z<=1&&p.layers.test(g.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(e,_,g);const S=p.element;S.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(sr.x*r+r)+"px,"+(-sr.y*a+a)+"px)",S.parentNode!==l&&l.appendChild(S),p.onAfterRender(e,_,g)}const d={distanceToCameraSquared:u(g,p)};o.objects.set(p,d)}for(let m=0,d=p.children.length;m<d;m++)c(p.children[m],_,g)}function u(p,_){return S0.setFromMatrixPosition(p.matrixWorld),b0.setFromMatrixPosition(_.matrixWorld),S0.distanceToSquared(b0)}function h(p){const _=[];return p.traverse(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(p){const _=h(p).sort(function(m,d){if(m.renderOrder!==d.renderOrder)return d.renderOrder-m.renderOrder;const S=o.objects.get(m).distanceToCameraSquared,y=o.objects.get(d).distanceToCameraSquared;return S-y}),g=_.length;for(let m=0,d=_.length;m<d;m++)_[m].element.style.zIndex=g-m}}}const vl=75,Lu=[{name:"Sun",scale:3,color:16776960,texture:"sun",distance:4},{name:"Moon",scale:1,color:3421236,texture:"moon",distance:1},{name:"Mercury",scale:1,color:16448250,distance:2,texture:"2k_mercury"},{name:"Venus",scale:2,color:8758435,distance:3,texture:"2k_venus_atmosphere"},{name:"Earth",scale:2,color:255,distance:0,texture:"earth"},{name:"Mars",scale:2,color:11677216,distance:5,texture:"2k_mars"},{name:"Jupiter",scale:2.5,color:13209657,distance:6,texture:"2k_jupiter"},{name:"Saturn",scale:2.5,color:16639266,distance:7,texture:"2k_saturn"},{name:"Uranus",scale:2.5,color:16448250,distance:8,texture:"2k_uranus"},{name:"Neptune",scale:2.5,color:11516866,distance:9,texture:"2k_neptune"},{name:"Pluto",scale:1,color:16448250,distance:10,texture:"pluto"}],F1={Libra:{stars:[[14,50,-16,-2],[15,17,-9,-22],[15,4,-25,-16],[15,35,-14,-47],[15,53,-16,-43],[15,37,-28,-8],[15,38,-29,-46]],lines:[[0,1],[0,2],[1,2],[1,3],[2,5],[3,4],[5,6]]},Scorpius:{stars:[[16,29,-26,-25],[16,21,-25,-35],[16,0,-22,-37],[16,5,-19,-48],[16,11,-19,-27],[15,58,-26,-6],[15,56,-29,-12],[16,35,-28,-12],[16,50,-34,-17],[16,51,-38,-2],[16,54,-42,-21],[17,12,-43,-14],[17,37,-42,-59],[17,47,-40,-7],[17,42,-39,-1],[17,33,-37,-6]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[0,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15]]},Saggitarius:{stars:[[18,24,-34,-23],[18,17,-36,-45],[18,20,-29,-49],[18,5,-30,-25],[18,27,-25,-25],[17,47,-27,-49],[18,13,-21,-3],[18,45,-26,-59],[18,55,-26,-17],[19,2,-29,-52],[19,6,-27,-40],[19,4,-21,-44],[18,57,-21,-6],[19,9,-21,-1],[19,21,-17,-50],[19,36,-24,-53],[20,2,-27,-42],[19,55,-41,-52],[19,23,-40,-36],[19,22,-44,-27]],lines:[[0,1],[0,2],[2,3],[2,4],[3,5],[4,6],[4,7],[7,8],[7,9],[9,10],[8,10],[8,11],[11,12],[11,13],[13,14],[10,15],[15,16],[16,17],[17,18],[17,19]]},Capricorn:{stars:[[20,21,-14,-46],[20,18,-12,-32],[21,5,-17,-13],[21,47,-16,-7],[21,26,-22,-24],[20,51,-26,-55],[20,46,-25,-16]],lines:[[0,1],[0,2],[2,3],[3,4],[4,5],[5,6],[0,6]]},Aquarius:{stars:[[22,5,0,-19],[21,31,-5,-34],[20,47,-9,-29],[22,16,-7,-47],[22,6,-13,-52],[22,35,0,-7],[23,14,-6,-2],[22,52,-7,-34],[22,49,-13,-35],[23,9,-21,-10],[22,21,-1,-23],[22,28,0,-1]],lines:[[0,1],[1,2],[0,3],[3,4],[0,10],[5,6],[6,7],[7,8],[8,9],[5,11],[10,11]]},Pisces:{stars:[[2,2,2,45],[1,41,5,29],[1,2,7,53],[0,48,7,35],[23,59,6,51],[23,39,5,37],[23,27,6,22],[23,20,5,22],[23,17,3,16],[23,26,1,15],[23,42,1,46],[23,46,3,29],[1,45,9,9],[1,31,15,20],[1,13,24,35],[1,19,27,15],[1,11,30,5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,5],[0,12],[12,13],[13,14],[14,15],[15,16],[16,14]]},Aries:{stars:[[2,7,23,27],[1,54,20,48],[1,53,19,17],[2,49,27,15]],lines:[[0,1],[1,2],[0,3]]},Taurus:{stars:[[5,26,28,36],[4,42,22,57],[4,28,19,10],[4,22,17,32],[4,19,15,37],[4,0,12,29],[3,27,9,43],[3,24,9,1],[4,28,15,52],[4,35,16,30],[5,37,21,8]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[4,8],[8,9],[9,10]]},Gemini:{stars:[[7,34,31,53],[7,45,28,1],[7,44,22,23],[7,20,21,58],[7,4,20,34],[6,37,16,23],[6,45,12,53],[7,29,31,47],[7,11,30,14],[6,43,25,7],[6,22,22,30],[6,14,22,30]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[0,7],[7,8],[8,9],[9,10],[10,11]]},Cancer:{stars:[[8,58,11,51],[8,44,18,9],[8,43,21,28],[8,46,28,45],[8,16,9,11]],lines:[[0,1],[1,2],[2,3],[1,4]]},Leo:{stars:[[10,8,11,58],[10,7,16,45],[10,19,19,50],[10,16,23,25],[9,52,26,0],[9,45,23,46],[11,14,15,25],[11,49,14,34],[11,14,20,31]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[0,6],[6,7],[7,8],[8,6]]},Virgo:{stars:[[13,25,-11,-9],[14,12,-10,-16],[13,34,0,-35],[13,9,-5,-32],[14,1,1,32],[14,46,1,53],[12,41,-1,-26],[12,19,0,-40],[11,50,1,45],[12,55,3,23],[13,2,10,57]],lines:[[0,1],[0,2],[0,3],[2,4],[4,5],[3,6],[6,7],[7,8],[6,9],[9,10],[2,9]]},Equinox:{stars:[[0,0,0,0]]}};function z1(){const s=new C1,t=new I1(vl,12,1,32,4473924,4473924);return s.add(t),s}function B1(){const s=G1(),t=V1(),e=k1(),n=z1(),i=H1(e,t);return{renderer:s,css_renderer:t,scene:n,camera:e,controls:i}}function k1(){const s=new tn(50,window.innerWidth/window.innerHeight,.01,1e3);return s.position.setFromSphericalCoords(vl*2,Math.PI/4,0),s.layers.enableAll(),s}function G1(){const s=new Eu({antialias:!0});return s.setSize(window.innerWidth,window.innerHeight),document.getElementById("app").appendChild(s.domElement),s}function V1(){const s=new N1;return s.setSize(window.innerWidth,window.innerHeight),s.domElement.style.position="absolute",s.domElement.style.top="0px",document.getElementById("app").appendChild(s.domElement),s}function H1(s,t){const e=new U1(s,t.domElement);return e.enablePan=!1,e}function Zs(s,t,e,n){s.render(e,n),t.render(e,n)}/**
    @preserve

    Astronomy library for JavaScript (browser and Node.js).
    https://github.com/cosinekitty/astronomy

    MIT License

    Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/const Ru=173.1446326846693,W1=14959787069098932e-8,Ii=.017453292519943295,w0=57.29577951308232,q1=365.24217,T0=new Date("2000-01-01T12:00:00Z"),Ln=2*Math.PI,qn=3600*(180/Math.PI),fr=484813681109536e-20,X1=180*60*60,Y1=2*X1,j1=6378.1366,$1=j1/W1,Du=81.30056,Ml=.0002959122082855911,No=2825345909524226e-22,Fo=8459715185680659e-23,zo=1292024916781969e-23,Bo=1524358900784276e-23;function Iu(s){if(s!==!0&&s!==!1)throw console.trace(),`Value is not boolean: ${s}`;return s}function es(s){if(!Number.isFinite(s))throw console.trace(),`Value is not a finite number: ${s}`;return s}function ar(s){return s-Math.floor(s)}var Pt;(function(s){s.Sun="Sun",s.Moon="Moon",s.Mercury="Mercury",s.Venus="Venus",s.Earth="Earth",s.Mars="Mars",s.Jupiter="Jupiter",s.Saturn="Saturn",s.Uranus="Uranus",s.Neptune="Neptune",s.Pluto="Pluto",s.SSB="SSB",s.EMB="EMB",s.Star1="Star1",s.Star2="Star2",s.Star3="Star3",s.Star4="Star4",s.Star5="Star5",s.Star6="Star6",s.Star7="Star7",s.Star8="Star8"})(Pt||(Pt={}));const Z1=[Pt.Star1,Pt.Star2,Pt.Star3,Pt.Star4,Pt.Star5,Pt.Star6,Pt.Star7,Pt.Star8],K1=[{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0},{ra:0,dec:0,dist:0}];function J1(s){const t=Z1.indexOf(s);return t>=0?K1[t]:null}function yl(s){const t=J1(s);return t&&t.dist>0?t:null}var Nn;(function(s){s[s.From2000=0]="From2000",s[s.Into2000=1]="Into2000"})(Nn||(Nn={}));const $n={Mercury:[[[[4.40250710144,0,0],[.40989414977,1.48302034195,26087.9031415742],[.050462942,4.47785489551,52175.8062831484],[.00855346844,1.16520322459,78263.70942472259],[.00165590362,4.11969163423,104351.61256629678],[.00034561897,.77930768443,130439.51570787099],[7583476e-11,3.71348404924,156527.41884944518]],[[26087.90313685529,0,0],[.01131199811,6.21874197797,26087.9031415742],[.00292242298,3.04449355541,52175.8062831484],[.00075775081,6.08568821653,78263.70942472259],[.00019676525,2.80965111777,104351.61256629678]]],[[[.11737528961,1.98357498767,26087.9031415742],[.02388076996,5.03738959686,52175.8062831484],[.01222839532,3.14159265359,0],[.0054325181,1.79644363964,78263.70942472259],[.0012977877,4.83232503958,104351.61256629678],[.00031866927,1.58088495658,130439.51570787099],[7963301e-11,4.60972126127,156527.41884944518]],[[.00274646065,3.95008450011,26087.9031415742],[.00099737713,3.14159265359,0]]],[[[.39528271651,0,0],[.07834131818,6.19233722598,26087.9031415742],[.00795525558,2.95989690104,52175.8062831484],[.00121281764,6.01064153797,78263.70942472259],[.00021921969,2.77820093972,104351.61256629678],[4354065e-11,5.82894543774,130439.51570787099]],[[.0021734774,4.65617158665,26087.9031415742],[.00044141826,1.42385544001,52175.8062831484]]]],Venus:[[[[3.17614666774,0,0],[.01353968419,5.59313319619,10213.285546211],[.00089891645,5.30650047764,20426.571092422],[5477194e-11,4.41630661466,7860.4193924392],[3455741e-11,2.6996444782,11790.6290886588],[2372061e-11,2.99377542079,3930.2096962196],[1317168e-11,5.18668228402,26.2983197998],[1664146e-11,4.25018630147,1577.3435424478],[1438387e-11,4.15745084182,9683.5945811164],[1200521e-11,6.15357116043,30639.856638633]],[[10213.28554621638,0,0],[.00095617813,2.4640651111,10213.285546211],[7787201e-11,.6247848222,20426.571092422]]],[[[.05923638472,.26702775812,10213.285546211],[.00040107978,1.14737178112,20426.571092422],[.00032814918,3.14159265359,0]],[[.00287821243,1.88964962838,10213.285546211]]],[[[.72334820891,0,0],[.00489824182,4.02151831717,10213.285546211],[1658058e-11,4.90206728031,20426.571092422],[1378043e-11,1.12846591367,11790.6290886588],[1632096e-11,2.84548795207,7860.4193924392],[498395e-11,2.58682193892,9683.5945811164],[221985e-11,2.01346696541,19367.1891622328],[237454e-11,2.55136053886,15720.8387848784]],[[.00034551041,.89198706276,10213.285546211]]]],Earth:[[[[1.75347045673,0,0],[.03341656453,4.66925680415,6283.0758499914],[.00034894275,4.62610242189,12566.1516999828],[3417572e-11,2.82886579754,3.523118349],[3497056e-11,2.74411783405,5753.3848848968],[3135899e-11,3.62767041756,77713.7714681205],[2676218e-11,4.41808345438,7860.4193924392],[2342691e-11,6.13516214446,3930.2096962196],[1273165e-11,2.03709657878,529.6909650946],[1324294e-11,.74246341673,11506.7697697936],[901854e-11,2.04505446477,26.2983197998],[1199167e-11,1.10962946234,1577.3435424478],[857223e-11,3.50849152283,398.1490034082],[779786e-11,1.17882681962,5223.6939198022],[99025e-10,5.23268072088,5884.9268465832],[753141e-11,2.53339052847,5507.5532386674],[505267e-11,4.58292599973,18849.2275499742],[492392e-11,4.20505711826,775.522611324],[356672e-11,2.91954114478,.0673103028],[284125e-11,1.89869240932,796.2980068164],[242879e-11,.34481445893,5486.777843175],[317087e-11,5.84901948512,11790.6290886588],[271112e-11,.31486255375,10977.078804699],[206217e-11,4.80646631478,2544.3144198834],[205478e-11,1.86953770281,5573.1428014331],[202318e-11,2.45767790232,6069.7767545534],[126225e-11,1.08295459501,20.7753954924],[155516e-11,.83306084617,213.299095438]],[[6283.0758499914,0,0],[.00206058863,2.67823455808,6283.0758499914],[4303419e-11,2.63512233481,12566.1516999828]],[[8721859e-11,1.07253635559,6283.0758499914]]],[[],[[.00227777722,3.4137662053,6283.0758499914],[3805678e-11,3.37063423795,12566.1516999828]]],[[[1.00013988784,0,0],[.01670699632,3.09846350258,6283.0758499914],[.00013956024,3.05524609456,12566.1516999828],[308372e-10,5.19846674381,77713.7714681205],[1628463e-11,1.17387558054,5753.3848848968],[1575572e-11,2.84685214877,7860.4193924392],[924799e-11,5.45292236722,11506.7697697936],[542439e-11,4.56409151453,3930.2096962196],[47211e-10,3.66100022149,5884.9268465832],[85831e-11,1.27079125277,161000.6857376741],[57056e-11,2.01374292245,83996.84731811189],[55736e-11,5.2415979917,71430.69561812909],[174844e-11,3.01193636733,18849.2275499742],[243181e-11,4.2734953079,11790.6290886588]],[[.00103018607,1.10748968172,6283.0758499914],[1721238e-11,1.06442300386,12566.1516999828]],[[4359385e-11,5.78455133808,6283.0758499914]]]],Mars:[[[[6.20347711581,0,0],[.18656368093,5.0503710027,3340.6124266998],[.01108216816,5.40099836344,6681.2248533996],[.00091798406,5.75478744667,10021.8372800994],[.00027744987,5.97049513147,3.523118349],[.00010610235,2.93958560338,2281.2304965106],[.00012315897,.84956094002,2810.9214616052],[8926784e-11,4.15697846427,.0172536522],[8715691e-11,6.11005153139,13362.4497067992],[6797556e-11,.36462229657,398.1490034082],[7774872e-11,3.33968761376,5621.8429232104],[3575078e-11,1.6618650571,2544.3144198834],[4161108e-11,.22814971327,2942.4634232916],[3075252e-11,.85696614132,191.4482661116],[2628117e-11,.64806124465,3337.0893083508],[2937546e-11,6.07893711402,.0673103028],[2389414e-11,5.03896442664,796.2980068164],[2579844e-11,.02996736156,3344.1355450488],[1528141e-11,1.14979301996,6151.533888305],[1798806e-11,.65634057445,529.6909650946],[1264357e-11,3.62275122593,5092.1519581158],[1286228e-11,3.06796065034,2146.1654164752],[1546404e-11,2.91579701718,1751.539531416],[1024902e-11,3.69334099279,8962.4553499102],[891566e-11,.18293837498,16703.062133499],[858759e-11,2.4009381194,2914.0142358238],[832715e-11,2.46418619474,3340.5951730476],[83272e-10,4.49495782139,3340.629680352],[712902e-11,3.66335473479,1059.3819301892],[748723e-11,3.82248614017,155.4203994342],[723861e-11,.67497311481,3738.761430108],[635548e-11,2.92182225127,8432.7643848156],[655162e-11,.48864064125,3127.3133312618],[550474e-11,3.81001042328,.9803210682],[55275e-10,4.47479317037,1748.016413067],[425966e-11,.55364317304,6283.0758499914],[415131e-11,.49662285038,213.299095438],[472167e-11,3.62547124025,1194.4470102246],[306551e-11,.38052848348,6684.7479717486],[312141e-11,.99853944405,6677.7017350506],[293198e-11,4.22131299634,20.7753954924],[302375e-11,4.48618007156,3532.0606928114],[274027e-11,.54222167059,3340.545116397],[281079e-11,5.88163521788,1349.8674096588],[231183e-11,1.28242156993,3870.3033917944],[283602e-11,5.7688543494,3149.1641605882],[236117e-11,5.75503217933,3333.498879699],[274033e-11,.13372524985,3340.6797370026],[299395e-11,2.78323740866,6254.6266625236]],[[3340.61242700512,0,0],[.01457554523,3.60433733236,3340.6124266998],[.00168414711,3.92318567804,6681.2248533996],[.00020622975,4.26108844583,10021.8372800994],[3452392e-11,4.7321039319,3.523118349],[2586332e-11,4.60670058555,13362.4497067992],[841535e-11,4.45864030426,2281.2304965106]],[[.00058152577,2.04961712429,3340.6124266998],[.00013459579,2.45738706163,6681.2248533996]]],[[[.03197134986,3.76832042431,3340.6124266998],[.00298033234,4.10616996305,6681.2248533996],[.00289104742,0,0],[.00031365539,4.4465105309,10021.8372800994],[34841e-9,4.7881254926,13362.4497067992]],[[.00217310991,6.04472194776,3340.6124266998],[.00020976948,3.14159265359,0],[.00012834709,1.60810667915,6681.2248533996]]],[[[1.53033488271,0,0],[.1418495316,3.47971283528,3340.6124266998],[.00660776362,3.81783443019,6681.2248533996],[.00046179117,4.15595316782,10021.8372800994],[8109733e-11,5.55958416318,2810.9214616052],[7485318e-11,1.77239078402,5621.8429232104],[5523191e-11,1.3643630377,2281.2304965106],[382516e-10,4.49407183687,13362.4497067992],[2306537e-11,.09081579001,2544.3144198834],[1999396e-11,5.36059617709,3337.0893083508],[2484394e-11,4.9254563992,2942.4634232916],[1960195e-11,4.74249437639,3344.1355450488],[1167119e-11,2.11260868341,5092.1519581158],[1102816e-11,5.00908403998,398.1490034082],[899066e-11,4.40791133207,529.6909650946],[992252e-11,5.83861961952,6151.533888305],[807354e-11,2.10217065501,1059.3819301892],[797915e-11,3.44839203899,796.2980068164],[740975e-11,1.49906336885,2146.1654164752]],[[.01107433345,2.03250524857,3340.6124266998],[.00103175887,2.37071847807,6681.2248533996],[128772e-9,0,0],[.0001081588,2.70888095665,10021.8372800994]],[[.00044242249,.47930604954,3340.6124266998],[8138042e-11,.86998389204,6681.2248533996]]]],Jupiter:[[[[.59954691494,0,0],[.09695898719,5.06191793158,529.6909650946],[.00573610142,1.44406205629,7.1135470008],[.00306389205,5.41734730184,1059.3819301892],[.00097178296,4.14264726552,632.7837393132],[.00072903078,3.64042916389,522.5774180938],[.00064263975,3.41145165351,103.0927742186],[.00039806064,2.29376740788,419.4846438752],[.00038857767,1.27231755835,316.3918696566],[.00027964629,1.7845459182,536.8045120954],[.0001358973,5.7748104079,1589.0728952838],[8246349e-11,3.5822792584,206.1855484372],[8768704e-11,3.63000308199,949.1756089698],[7368042e-11,5.0810119427,735.8765135318],[626315e-10,.02497628807,213.299095438],[6114062e-11,4.51319998626,1162.4747044078],[4905396e-11,1.32084470588,110.2063212194],[5305285e-11,1.30671216791,14.2270940016],[5305441e-11,4.18625634012,1052.2683831884],[4647248e-11,4.69958103684,3.9321532631],[3045023e-11,4.31676431084,426.598190876],[2609999e-11,1.56667394063,846.0828347512],[2028191e-11,1.06376530715,3.1813937377],[1764763e-11,2.14148655117,1066.49547719],[1722972e-11,3.88036268267,1265.5674786264],[1920945e-11,.97168196472,639.897286314],[1633223e-11,3.58201833555,515.463871093],[1431999e-11,4.29685556046,625.6701923124],[973272e-11,4.09764549134,95.9792272178]],[[529.69096508814,0,0],[.00489503243,4.2208293947,529.6909650946],[.00228917222,6.02646855621,7.1135470008],[.00030099479,4.54540782858,1059.3819301892],[.0002072092,5.45943156902,522.5774180938],[.00012103653,.16994816098,536.8045120954],[6067987e-11,4.42422292017,103.0927742186],[5433968e-11,3.98480737746,419.4846438752],[4237744e-11,5.89008707199,14.2270940016]],[[.00047233601,4.32148536482,7.1135470008],[.00030649436,2.929777887,529.6909650946],[.00014837605,3.14159265359,0]]],[[[.02268615702,3.55852606721,529.6909650946],[.00109971634,3.90809347197,1059.3819301892],[.00110090358,0,0],[8101428e-11,3.60509572885,522.5774180938],[6043996e-11,4.25883108339,1589.0728952838],[6437782e-11,.30627119215,536.8045120954]],[[.00078203446,1.52377859742,529.6909650946]]],[[[5.20887429326,0,0],[.25209327119,3.49108639871,529.6909650946],[.00610599976,3.84115365948,1059.3819301892],[.00282029458,2.57419881293,632.7837393132],[.00187647346,2.07590383214,522.5774180938],[.00086792905,.71001145545,419.4846438752],[.00072062974,.21465724607,536.8045120954],[.00065517248,5.9799588479,316.3918696566],[.00029134542,1.67759379655,103.0927742186],[.00030135335,2.16132003734,949.1756089698],[.00023453271,3.54023522184,735.8765135318],[.00022283743,4.19362594399,1589.0728952838],[.00023947298,.2745803748,7.1135470008],[.00013032614,2.96042965363,1162.4747044078],[970336e-10,1.90669633585,206.1855484372],[.00012749023,2.71550286592,1052.2683831884],[7057931e-11,2.18184839926,1265.5674786264],[6137703e-11,6.26418240033,846.0828347512],[2616976e-11,2.00994012876,1581.959348283]],[[.0127180152,2.64937512894,529.6909650946],[.00061661816,3.00076460387,1059.3819301892],[.00053443713,3.89717383175,522.5774180938],[.00031185171,4.88276958012,536.8045120954],[.00041390269,0,0]]]],Saturn:[[[[.87401354025,0,0],[.11107659762,3.96205090159,213.299095438],[.01414150957,4.58581516874,7.1135470008],[.00398379389,.52112032699,206.1855484372],[.00350769243,3.30329907896,426.598190876],[.00206816305,.24658372002,103.0927742186],[792713e-9,3.84007056878,220.4126424388],[.00023990355,4.66976924553,110.2063212194],[.00016573588,.43719228296,419.4846438752],[.00014906995,5.76903183869,316.3918696566],[.0001582029,.93809155235,632.7837393132],[.00014609559,1.56518472,3.9321532631],[.00013160301,4.44891291899,14.2270940016],[.00015053543,2.71669915667,639.897286314],[.00013005299,5.98119023644,11.0457002639],[.00010725067,3.12939523827,202.2533951741],[5863206e-11,.23656938524,529.6909650946],[5227757e-11,4.20783365759,3.1813937377],[6126317e-11,1.76328667907,277.0349937414],[5019687e-11,3.17787728405,433.7117378768],[459255e-10,.61977744975,199.0720014364],[4005867e-11,2.24479718502,63.7358983034],[2953796e-11,.98280366998,95.9792272178],[387367e-10,3.22283226966,138.5174968707],[2461186e-11,2.03163875071,735.8765135318],[3269484e-11,.77492638211,949.1756089698],[1758145e-11,3.2658010994,522.5774180938],[1640172e-11,5.5050445305,846.0828347512],[1391327e-11,4.02333150505,323.5054166574],[1580648e-11,4.37265307169,309.2783226558],[1123498e-11,2.83726798446,415.5524906121],[1017275e-11,3.71700135395,227.5261894396],[848642e-11,3.1915017083,209.3669421749]],[[213.2990952169,0,0],[.01297370862,1.82834923978,213.299095438],[.00564345393,2.88499717272,7.1135470008],[.00093734369,1.06311793502,426.598190876],[.00107674962,2.27769131009,206.1855484372],[.00040244455,2.04108104671,220.4126424388],[.00019941774,1.2795439047,103.0927742186],[.00010511678,2.7488034213,14.2270940016],[6416106e-11,.38238295041,639.897286314],[4848994e-11,2.43037610229,419.4846438752],[4056892e-11,2.92133209468,110.2063212194],[3768635e-11,3.6496533078,3.9321532631]],[[.0011644133,1.17988132879,7.1135470008],[.00091841837,.0732519584,213.299095438],[.00036661728,0,0],[.00015274496,4.06493179167,206.1855484372]]],[[[.04330678039,3.60284428399,213.299095438],[.00240348302,2.85238489373,426.598190876],[.00084745939,0,0],[.00030863357,3.48441504555,220.4126424388],[.00034116062,.57297307557,206.1855484372],[.0001473407,2.11846596715,639.897286314],[9916667e-11,5.79003188904,419.4846438752],[6993564e-11,4.7360468972,7.1135470008],[4807588e-11,5.43305312061,316.3918696566]],[[.00198927992,4.93901017903,213.299095438],[.00036947916,3.14159265359,0],[.00017966989,.5197943111,426.598190876]]],[[[9.55758135486,0,0],[.52921382865,2.39226219573,213.299095438],[.01873679867,5.2354960466,206.1855484372],[.01464663929,1.64763042902,426.598190876],[.00821891141,5.93520042303,316.3918696566],[.00547506923,5.0153261898,103.0927742186],[.0037168465,2.27114821115,220.4126424388],[.00361778765,3.13904301847,7.1135470008],[.00140617506,5.70406606781,632.7837393132],[.00108974848,3.29313390175,110.2063212194],[.00069006962,5.94099540992,419.4846438752],[.00061053367,.94037691801,639.897286314],[.00048913294,1.55733638681,202.2533951741],[.00034143772,.19519102597,277.0349937414],[.00032401773,5.47084567016,949.1756089698],[.00020936596,.46349251129,735.8765135318],[9796004e-11,5.20477537945,1265.5674786264],[.00011993338,5.98050967385,846.0828347512],[208393e-9,1.52102476129,433.7117378768],[.00015298404,3.0594381494,529.6909650946],[6465823e-11,.17732249942,1052.2683831884],[.00011380257,1.7310542704,522.5774180938],[3419618e-11,4.94550542171,1581.959348283]],[[.0618298134,.2584351148,213.299095438],[.00506577242,.71114625261,206.1855484372],[.00341394029,5.79635741658,426.598190876],[.00188491195,.47215589652,220.4126424388],[.00186261486,3.14159265359,0],[.00143891146,1.40744822888,7.1135470008]],[[.00436902572,4.78671677509,213.299095438]]]],Uranus:[[[[5.48129294297,0,0],[.09260408234,.89106421507,74.7815985673],[.01504247898,3.6271926092,1.4844727083],[.00365981674,1.89962179044,73.297125859],[.00272328168,3.35823706307,149.5631971346],[.00070328461,5.39254450063,63.7358983034],[.00068892678,6.09292483287,76.2660712756],[.00061998615,2.26952066061,2.9689454166],[.00061950719,2.85098872691,11.0457002639],[.0002646877,3.14152083966,71.8126531507],[.00025710476,6.11379840493,454.9093665273],[.0002107885,4.36059339067,148.0787244263],[.00017818647,1.74436930289,36.6485629295],[.00014613507,4.73732166022,3.9321532631],[.00011162509,5.8268179635,224.3447957019],[.0001099791,.48865004018,138.5174968707],[9527478e-11,2.95516862826,35.1640902212],[7545601e-11,5.236265824,109.9456887885],[4220241e-11,3.23328220918,70.8494453042],[40519e-9,2.277550173,151.0476698429],[3354596e-11,1.0654900738,4.4534181249],[2926718e-11,4.62903718891,9.5612275556],[349034e-10,5.48306144511,146.594251718],[3144069e-11,4.75199570434,77.7505439839],[2922333e-11,5.35235361027,85.8272988312],[2272788e-11,4.36600400036,70.3281804424],[2051219e-11,1.51773566586,.1118745846],[2148602e-11,.60745949945,38.1330356378],[1991643e-11,4.92437588682,277.0349937414],[1376226e-11,2.04283539351,65.2203710117],[1666902e-11,3.62744066769,380.12776796],[1284107e-11,3.11347961505,202.2533951741],[1150429e-11,.93343589092,3.1813937377],[1533221e-11,2.58594681212,52.6901980395],[1281604e-11,.54271272721,222.8603229936],[1372139e-11,4.19641530878,111.4301614968],[1221029e-11,.1990065003,108.4612160802],[946181e-11,1.19253165736,127.4717966068],[1150989e-11,4.17898916639,33.6796175129]],[[74.7815986091,0,0],[.00154332863,5.24158770553,74.7815985673],[.00024456474,1.71260334156,1.4844727083],[9258442e-11,.4282973235,11.0457002639],[8265977e-11,1.50218091379,63.7358983034],[915016e-10,1.41213765216,149.5631971346]]],[[[.01346277648,2.61877810547,74.7815985673],[623414e-9,5.08111189648,149.5631971346],[.00061601196,3.14159265359,0],[9963722e-11,1.61603805646,76.2660712756],[992616e-10,.57630380333,73.297125859]],[[.00034101978,.01321929936,74.7815985673]]],[[[19.21264847206,0,0],[.88784984413,5.60377527014,74.7815985673],[.03440836062,.32836099706,73.297125859],[.0205565386,1.7829515933,149.5631971346],[.0064932241,4.52247285911,76.2660712756],[.00602247865,3.86003823674,63.7358983034],[.00496404167,1.40139935333,454.9093665273],[.00338525369,1.58002770318,138.5174968707],[.00243509114,1.57086606044,71.8126531507],[.00190522303,1.99809394714,1.4844727083],[.00161858838,2.79137786799,148.0787244263],[.00143706183,1.38368544947,11.0457002639],[.00093192405,.17437220467,36.6485629295],[.00071424548,4.24509236074,224.3447957019],[.00089806014,3.66105364565,109.9456887885],[.00039009723,1.66971401684,70.8494453042],[.00046677296,1.39976401694,35.1640902212],[.00039025624,3.36234773834,277.0349937414],[.00036755274,3.88649278513,146.594251718],[.00030348723,.70100838798,151.0476698429],[.00029156413,3.180563367,77.7505439839],[.00022637073,.72518687029,529.6909650946],[.00011959076,1.7504339214,984.6003316219],[.00025620756,5.25656086672,380.12776796]],[[.01479896629,3.67205697578,74.7815985673]]]],Neptune:[[[[5.31188633046,0,0],[.0179847553,2.9010127389,38.1330356378],[.01019727652,.48580922867,1.4844727083],[.00124531845,4.83008090676,36.6485629295],[.00042064466,5.41054993053,2.9689454166],[.00037714584,6.09221808686,35.1640902212],[.00033784738,1.24488874087,76.2660712756],[.00016482741,7727998e-11,491.5579294568],[9198584e-11,4.93747051954,39.6175083461],[899425e-10,.27462171806,175.1660598002]],[[38.13303563957,0,0],[.00016604172,4.86323329249,1.4844727083],[.00015744045,2.27887427527,38.1330356378]]],[[[.03088622933,1.44104372644,38.1330356378],[.00027780087,5.91271884599,76.2660712756],[.00027623609,0,0],[.00015355489,2.52123799551,36.6485629295],[.00015448133,3.50877079215,39.6175083461]]],[[[30.07013205828,0,0],[.27062259632,1.32999459377,38.1330356378],[.01691764014,3.25186135653,36.6485629295],[.00807830553,5.18592878704,1.4844727083],[.0053776051,4.52113935896,35.1640902212],[.00495725141,1.5710564165,491.5579294568],[.00274571975,1.84552258866,175.1660598002],[.0001201232,1.92059384991,1021.2488945514],[.00121801746,5.79754470298,76.2660712756],[.00100896068,.3770272493,73.297125859],[.00135134092,3.37220609835,39.6175083461],[7571796e-11,1.07149207335,388.4651552382]]]]};function Q1(s){var t,e,n,i,r,a,o;const l=2e3+(s-14)/q1;return l<-500?(t=(l-1820)/100,-20+32*t*t):l<500?(t=l/100,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,10583.6-1014.41*t+33.78311*e-5.952053*n-.1798452*i+.022174192*r+.0090316521*a):l<1600?(t=(l-1e3)/100,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,1574.2-556.01*t+71.23472*e+.319781*n-.8503463*i-.005050998*r+.0083572073*a):l<1700?(t=l-1600,e=t*t,n=t*e,120-.9808*t-.01532*e+n/7129):l<1800?(t=l-1700,e=t*t,n=t*e,i=e*e,8.83+.1603*t-.0059285*e+13336e-8*n-i/1174e3):l<1860?(t=l-1800,e=t*t,n=t*e,i=e*e,r=e*n,a=n*n,o=n*i,13.72-.332447*t+.0068612*e+.0041116*n-37436e-8*i+121272e-10*r-1699e-10*a+875e-12*o):l<1900?(t=l-1860,e=t*t,n=t*e,i=e*e,r=e*n,7.62+.5737*t-.251754*e+.01680668*n-.0004473624*i+r/233174):l<1920?(t=l-1900,e=t*t,n=t*e,i=e*e,-2.79+1.494119*t-.0598939*e+.0061966*n-197e-6*i):l<1941?(t=l-1920,e=t*t,n=t*e,21.2+.84493*t-.0761*e+.0020936*n):l<1961?(t=l-1950,e=t*t,n=t*e,29.07+.407*t-e/233+n/2547):l<1986?(t=l-1975,e=t*t,n=t*e,45.45+1.067*t-e/260-n/718):l<2005?(t=l-2e3,e=t*t,n=t*e,i=e*e,r=e*n,63.86+.3345*t-.060374*e+.0017275*n+651814e-9*i+2373599e-11*r):l<2050?(t=l-2e3,62.92+.32217*t+.005589*t*t):l<2150?(t=(l-1820)/100,-20+32*t*t-.5628*(2150-l)):(t=(l-1820)/100,-20+32*t*t)}let t2=Q1;function E0(s){return s+t2(s)/86400}class Sr{constructor(t){if(t instanceof Sr){this.date=t.date,this.ut=t.ut,this.tt=t.tt;return}const e=1e3*3600*24;if(t instanceof Date&&Number.isFinite(t.getTime())){this.date=t,this.ut=(t.getTime()-T0.getTime())/e,this.tt=E0(this.ut);return}if(Number.isFinite(t)){this.date=new Date(T0.getTime()+t*e),this.ut=t,this.tt=E0(this.ut);return}throw"Argument must be a Date object, an AstroTime object, or a numeric UTC Julian date."}static FromTerrestrialTime(t){let e=new Sr(t);for(;;){const n=t-e.tt;if(Math.abs(n)<1e-12)return e;e=e.AddDays(n)}}toString(){return this.date.toISOString()}AddDays(t){return new Sr(this.ut+t)}}function ai(s){return s instanceof Sr?s:new Sr(s)}function e2(s){function t(f){return f%Y1*fr}const e=s.tt/36525,n=t(128710479305e-5+e*1295965810481e-4),i=t(335779.526232+e*17395272628478e-4),r=t(107226070369e-5+e*1602961601209e-3),a=t(450160.398036-e*69628905431e-4);let o=Math.sin(a),l=Math.cos(a),c=(-172064161-174666*e)*o+33386*l,u=(92052331+9086*e)*l+15377*o,h=2*(i-r+a);return o=Math.sin(h),l=Math.cos(h),c+=(-13170906-1675*e)*o-13696*l,u+=(5730336-3015*e)*l-4587*o,h=2*(i+a),o=Math.sin(h),l=Math.cos(h),c+=(-2276413-234*e)*o+2796*l,u+=(978459-485*e)*l+1374*o,h=2*a,o=Math.sin(h),l=Math.cos(h),c+=(2074554+207*e)*o-698*l,u+=(-897492+470*e)*l-291*o,o=Math.sin(n),l=Math.cos(n),c+=(1475877-3633*e)*o+11817*l,u+=(73871-184*e)*l-1924*o,{dpsi:-135e-6+c*1e-7,deps:388e-6+u*1e-7}}function Uu(s){var t=s.tt/36525,e=((((-434e-10*t-576e-9)*t+.0020034)*t-1831e-7)*t-46.836769)*t+84381.406;return e/3600}var Ks;function Ou(s){if(!Ks||Math.abs(Ks.tt-s.tt)>1e-6){const t=e2(s),e=Uu(s),n=e+t.deps/3600;Ks={tt:s.tt,dpsi:t.dpsi,deps:t.deps,ee:t.dpsi*Math.cos(e*Ii)/15,mobl:e,tobl:n}}return Ks}function n2(s,t){const e=s*Ii,n=Math.cos(e),i=Math.sin(e);return[t[0],t[1]*n-t[2]*i,t[1]*i+t[2]*n]}function i2(s,t){return n2(Uu(s),t)}function r2(s){const t=s.tt/36525;function e(pt,ot){const gt=[];let At;for(At=0;At<=ot-pt;++At)gt.push(0);return{min:pt,array:gt}}function n(pt,ot,gt,At){const Ct=[];for(let Ht=0;Ht<=ot-pt;++Ht)Ct.push(e(gt,At));return{min:pt,array:Ct}}function i(pt,ot,gt){const At=pt.array[ot-pt.min];return At.array[gt-At.min]}function r(pt,ot,gt,At){const Ct=pt.array[ot-pt.min];Ct.array[gt-Ct.min]=At}let a,o,l,c,u,h,f,p,_,g,m,d,S,y,x,M,E,C,P,v,T,V,G,D=n(-6,6,1,4),U=n(-6,6,1,4);function z(pt,ot){return i(D,pt,ot)}function J(pt,ot){return i(U,pt,ot)}function Z(pt,ot,gt){return r(D,pt,ot,gt)}function W(pt,ot,gt){return r(U,pt,ot,gt)}function tt(pt,ot,gt,At,Ct){Ct(pt*gt-ot*At,ot*gt+pt*At)}function X(pt){return Math.sin(Ln*pt)}f=t*t,_=0,G=0,m=0,d=3422.7;var xt=X(.19833+.05611*t),nt=X(.27869+.04508*t),H=X(.16827-.36903*t),$=X(.34734-5.37261*t),at=X(.10498-5.37899*t),ct=X(.42681-.41855*t),k=X(.14943-5.37511*t);for(C=.84*xt+.31*nt+14.27*H+7.26*$+.28*at+.24*ct,P=2.94*xt+.31*nt+14.27*H+9.34*$+1.12*at+.83*ct,v=-6.4*xt-1.89*ct,T=.21*xt+.31*nt+14.27*H-88.7*$-15.3*at+.24*ct-1.86*k,V=C-v,p=-3332e-9*X(.59734-5.37261*t)-539e-9*X(.35498-5.37899*t)-64e-9*X(.39943-5.37511*t),S=Ln*ar(.60643382+1336.85522467*t-313e-8*f)+C/qn,y=Ln*ar(.37489701+1325.55240982*t+2565e-8*f)+P/qn,x=Ln*ar(.99312619+99.99735956*t-44e-8*f)+v/qn,M=Ln*ar(.25909118+1342.2278298*t-892e-8*f)+T/qn,E=Ln*ar(.82736186+1236.85308708*t-397e-8*f)+V/qn,u=1;u<=4;++u){switch(u){case 1:l=y,o=4,c=1.000002208;break;case 2:l=x,o=3,c=.997504612-.002495388*t;break;case 3:l=M,o=4,c=1.000002708+139.978*p;break;case 4:l=E,o=6,c=1;break;default:throw`Internal error: I = ${u}`}for(Z(0,u,1),Z(1,u,Math.cos(l)*c),W(0,u,0),W(1,u,Math.sin(l)*c),h=2;h<=o;++h)tt(z(h-1,u),J(h-1,u),z(1,u),J(1,u),(pt,ot)=>(Z(h,u,pt),W(h,u,ot)));for(h=1;h<=o;++h)Z(-h,u,z(h,u)),W(-h,u,-J(h,u))}function bt(pt,ot,gt,At){for(var Ct={x:1,y:0},Ht=[0,pt,ot,gt,At],Vt=1;Vt<=4;++Vt)Ht[Vt]!==0&&tt(Ct.x,Ct.y,z(Ht[Vt],Vt),J(Ht[Vt],Vt),(Nt,Gt)=>(Ct.x=Nt,Ct.y=Gt));return Ct}function N(pt,ot,gt,At,Ct,Ht,Vt,Nt){var Gt=bt(Ct,Ht,Vt,Nt);_+=pt*Gt.y,G+=ot*Gt.y,m+=gt*Gt.x,d+=At*Gt.x}N(13.902,14.06,-.001,.2607,0,0,0,4),N(.403,-4.01,.394,.0023,0,0,0,3),N(2369.912,2373.36,.601,28.2333,0,0,0,2),N(-125.154,-112.79,-.725,-.9781,0,0,0,1),N(1.979,6.98,-.445,.0433,1,0,0,4),N(191.953,192.72,.029,3.0861,1,0,0,2),N(-8.466,-13.51,.455,-.1093,1,0,0,1),N(22639.5,22609.07,.079,186.5398,1,0,0,0),N(18.609,3.59,-.094,.0118,1,0,0,-1),N(-4586.465,-4578.13,-.077,34.3117,1,0,0,-2),N(3.215,5.44,.192,-.0386,1,0,0,-3),N(-38.428,-38.64,.001,.6008,1,0,0,-4),N(-.393,-1.43,-.092,.0086,1,0,0,-6),N(-.289,-1.59,.123,-.0053,0,1,0,4),N(-24.42,-25.1,.04,-.3,0,1,0,2),N(18.023,17.93,.007,.1494,0,1,0,1),N(-668.146,-126.98,-1.302,-.3997,0,1,0,0),N(.56,.32,-.001,-.0037,0,1,0,-1),N(-165.145,-165.06,.054,1.9178,0,1,0,-2),N(-1.877,-6.46,-.416,.0339,0,1,0,-4),N(.213,1.02,-.074,.0054,2,0,0,4),N(14.387,14.78,-.017,.2833,2,0,0,2),N(-.586,-1.2,.054,-.01,2,0,0,1),N(769.016,767.96,.107,10.1657,2,0,0,0),N(1.75,2.01,-.018,.0155,2,0,0,-1),N(-211.656,-152.53,5.679,-.3039,2,0,0,-2),N(1.225,.91,-.03,-.0088,2,0,0,-3),N(-30.773,-34.07,-.308,.3722,2,0,0,-4),N(-.57,-1.4,-.074,.0109,2,0,0,-6),N(-2.921,-11.75,.787,-.0484,1,1,0,2),N(1.267,1.52,-.022,.0164,1,1,0,1),N(-109.673,-115.18,.461,-.949,1,1,0,0),N(-205.962,-182.36,2.056,1.4437,1,1,0,-2),N(.233,.36,.012,-.0025,1,1,0,-3),N(-4.391,-9.66,-.471,.0673,1,1,0,-4),N(.283,1.53,-.111,.006,1,-1,0,4),N(14.577,31.7,-1.54,.2302,1,-1,0,2),N(147.687,138.76,.679,1.1528,1,-1,0,0),N(-1.089,.55,.021,0,1,-1,0,-1),N(28.475,23.59,-.443,-.2257,1,-1,0,-2),N(-.276,-.38,-.006,-.0036,1,-1,0,-3),N(.636,2.27,.146,-.0102,1,-1,0,-4),N(-.189,-1.68,.131,-.0028,0,2,0,2),N(-7.486,-.66,-.037,-.0086,0,2,0,0),N(-8.096,-16.35,-.74,.0918,0,2,0,-2),N(-5.741,-.04,0,-9e-4,0,0,2,2),N(.255,0,0,0,0,0,2,1),N(-411.608,-.2,0,-.0124,0,0,2,0),N(.584,.84,0,.0071,0,0,2,-1),N(-55.173,-52.14,0,-.1052,0,0,2,-2),N(.254,.25,0,-.0017,0,0,2,-3),N(.025,-1.67,0,.0031,0,0,2,-4),N(1.06,2.96,-.166,.0243,3,0,0,2),N(36.124,50.64,-1.3,.6215,3,0,0,0),N(-13.193,-16.4,.258,-.1187,3,0,0,-2),N(-1.187,-.74,.042,.0074,3,0,0,-4),N(-.293,-.31,-.002,.0046,3,0,0,-6),N(-.29,-1.45,.116,-.0051,2,1,0,2),N(-7.649,-10.56,.259,-.1038,2,1,0,0),N(-8.627,-7.59,.078,-.0192,2,1,0,-2),N(-2.74,-2.54,.022,.0324,2,1,0,-4),N(1.181,3.32,-.212,.0213,2,-1,0,2),N(9.703,11.67,-.151,.1268,2,-1,0,0),N(-.352,-.37,.001,-.0028,2,-1,0,-1),N(-2.494,-1.17,-.003,-.0017,2,-1,0,-2),N(.36,.2,-.012,-.0043,2,-1,0,-4),N(-1.167,-1.25,.008,-.0106,1,2,0,0),N(-7.412,-6.12,.117,.0484,1,2,0,-2),N(-.311,-.65,-.032,.0044,1,2,0,-4),N(.757,1.82,-.105,.0112,1,-2,0,2),N(2.58,2.32,.027,.0196,1,-2,0,0),N(2.533,2.4,-.014,-.0212,1,-2,0,-2),N(-.344,-.57,-.025,.0036,0,3,0,-2),N(-.992,-.02,0,0,1,0,2,2),N(-45.099,-.02,0,-.001,1,0,2,0),N(-.179,-9.52,0,-.0833,1,0,2,-2),N(-.301,-.33,0,.0014,1,0,2,-4),N(-6.382,-3.37,0,-.0481,1,0,-2,2),N(39.528,85.13,0,-.7136,1,0,-2,0),N(9.366,.71,0,-.0112,1,0,-2,-2),N(.202,.02,0,0,1,0,-2,-4),N(.415,.1,0,.0013,0,1,2,0),N(-2.152,-2.26,0,-.0066,0,1,2,-2),N(-1.44,-1.3,0,.0014,0,1,-2,2),N(.384,-.04,0,0,0,1,-2,-2),N(1.938,3.6,-.145,.0401,4,0,0,0),N(-.952,-1.58,.052,-.013,4,0,0,-2),N(-.551,-.94,.032,-.0097,3,1,0,0),N(-.482,-.57,.005,-.0045,3,1,0,-2),N(.681,.96,-.026,.0115,3,-1,0,0),N(-.297,-.27,.002,-9e-4,2,2,0,-2),N(.254,.21,-.003,0,2,-2,0,-2),N(-.25,-.22,.004,.0014,1,3,0,-2),N(-3.996,0,0,4e-4,2,0,2,0),N(.557,-.75,0,-.009,2,0,2,-2),N(-.459,-.38,0,-.0053,2,0,-2,2),N(-1.298,.74,0,4e-4,2,0,-2,0),N(.538,1.14,0,-.0141,2,0,-2,-2),N(.263,.02,0,0,1,1,2,0),N(.426,.07,0,-6e-4,1,1,-2,-2),N(-.304,.03,0,3e-4,1,-1,2,0),N(-.372,-.19,0,-.0027,1,-1,-2,2),N(.418,0,0,0,0,0,4,0),N(-.33,-.04,0,0,3,0,2,0);function st(pt,ot,gt,At,Ct){return pt*bt(ot,gt,At,Ct).y}g=0,g+=st(-526.069,0,0,1,-2),g+=st(-3.352,0,0,1,-4),g+=st(44.297,1,0,1,-2),g+=st(-6,1,0,1,-4),g+=st(20.599,-1,0,1,0),g+=st(-30.598,-1,0,1,-2),g+=st(-24.649,-2,0,1,0),g+=st(-2,-2,0,1,-2),g+=st(-22.571,0,1,1,-2),g+=st(10.985,0,-1,1,-2),_+=.82*X(.7736-62.5512*t)+.31*X(.0466-125.1025*t)+.35*X(.5785-25.1042*t)+.66*X(.4591+1335.8075*t)+.64*X(.313-91.568*t)+1.14*X(.148+1331.2898*t)+.21*X(.5918+1056.5859*t)+.44*X(.5784+1322.8595*t)+.24*X(.2275-5.7374*t)+.28*X(.2965+2.6929*t)+.33*X(.3132+6.3368*t),a=M+G/qn;let yt=(1.000002708+139.978*p)*(18518.511+1.189+m)*Math.sin(a)-6.24*Math.sin(3*a)+g;return{geo_eclip_lon:Ln*ar((S+_/qn)/Ln),geo_eclip_lat:Math.PI/(180*3600)*yt,distance_au:qn*$1/(.999953253*d)}}function Nu(s,t){return[s.rot[0][0]*t[0]+s.rot[1][0]*t[1]+s.rot[2][0]*t[2],s.rot[0][1]*t[0]+s.rot[1][1]*t[1]+s.rot[2][1]*t[2],s.rot[0][2]*t[0]+s.rot[1][2]*t[1]+s.rot[2][2]*t[2]]}function Fu(s,t,e){const n=s2(t,e);return Nu(n,s)}function s2(s,t){const e=s.tt/36525;let n=84381.406,i=((((-951e-10*e+132851e-9)*e-.00114045)*e-1.0790069)*e+5038.481507)*e,r=((((3337e-10*e-467e-9)*e-.00772503)*e+.0512623)*e-.025754)*e+n,a=((((-56e-9*e+170663e-9)*e-.00121197)*e-2.3814292)*e+10.556403)*e;n*=fr,i*=fr,r*=fr,a*=fr;const o=Math.sin(n),l=Math.cos(n),c=Math.sin(-i),u=Math.cos(-i),h=Math.sin(-r),f=Math.cos(-r),p=Math.sin(a),_=Math.cos(a),g=_*u-c*p*f,m=_*c*l+p*f*u*l-o*p*h,d=_*c*o+p*f*u*o+l*p*h,S=-p*u-c*_*f,y=-p*c*l+_*f*u*l-o*_*h,x=-p*c*o+_*f*u*o+l*_*h,M=c*h,E=-h*u*l-o*f,C=-h*u*o+f*l;if(t===Nn.Into2000)return new fa([[g,m,d],[S,y,x],[M,E,C]]);if(t===Nn.From2000)return new fa([[g,S,M],[m,y,E],[d,x,C]]);throw"Invalid precess direction"}function a2(s,t,e){const n=o2(t,e);return Nu(n,s)}function o2(s,t){const e=Ou(s),n=e.mobl*Ii,i=e.tobl*Ii,r=e.dpsi*fr,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r),f=u,p=-h*a,_=-h*o,g=h*l,m=u*a*l+o*c,d=u*o*l-a*c,S=h*c,y=u*a*c-o*l,x=u*o*c+a*l;if(t===Nn.From2000)return new fa([[f,g,S],[p,m,y],[_,d,x]]);if(t===Nn.Into2000)return new fa([[f,p,_],[g,m,d],[S,y,x]]);throw"Invalid precess direction"}class Se{constructor(t,e,n,i){this.x=t,this.y=e,this.z=n,this.t=i}Length(){return Math.hypot(this.x,this.y,this.z)}}class Zn{constructor(t,e,n,i,r,a,o){this.x=t,this.y=e,this.z=n,this.vx=i,this.vy=r,this.vz=a,this.t=o}}class zu{constructor(t,e,n){this.lat=es(t),this.lon=es(e),this.dist=es(n)}}class fa{constructor(t){this.rot=t}}class l2{constructor(t,e,n){this.vec=t,this.elat=es(e),this.elon=es(n)}}function c2(s,t,e){const n=s.x,i=s.y*t+s.z*e,r=-s.y*e+s.z*t,a=Math.hypot(n,i);let o=0;a>0&&(o=w0*Math.atan2(i,n),o<0&&(o+=360));let l=w0*Math.atan2(r,a),c=new Se(n,i,r,s.t);return new l2(c,l,o)}function Bu(s){const t=Ou(s.t),e=[s.x,s.y,s.z],n=Fu(e,s.t,Nn.From2000),[i,r,a]=a2(n,s.t,Nn.From2000),o=new Se(i,r,a,s.t),l=t.tobl*Ii;return c2(o,Math.cos(l),Math.sin(l))}function hs(s){const t=ai(s),e=r2(t),n=e.distance_au*Math.cos(e.geo_eclip_lat),i=[n*Math.cos(e.geo_eclip_lon),n*Math.sin(e.geo_eclip_lon),e.distance_au*Math.sin(e.geo_eclip_lat)],r=i2(t,i),a=Fu(r,t,Nn.Into2000);return new Se(a[0],a[1],a[2],t)}function ku(s){const t=ai(s),e=1e-5,n=t.AddDays(-e),i=t.AddDays(+e),r=hs(n),a=hs(i);return new Zn((r.x+a.x)/2,(r.y+a.y)/2,(r.z+a.z)/2,(a.x-r.x)/(2*e),(a.y-r.y)/(2*e),(a.z-r.z)/(2*e),t)}function u2(s){const t=ai(s),e=ku(t),n=1+Du;return new Zn(e.x/n,e.y/n,e.z/n,e.vx/n,e.vy/n,e.vz/n,t)}function br(s,t,e){let n=1,i=0;for(let r of s){let a=0;for(let[l,c,u]of r)a+=l*Math.cos(c+t*u);let o=n*a;e&&(o%=Ln),i+=o,n*=t}return i}function mo(s,t){let e=1,n=0,i=0,r=0;for(let a of s){let o=0,l=0;for(let[c,u,h]of a){let f=u+t*h;o+=c*h*Math.sin(f),r>0&&(l+=c*Math.cos(f))}i+=r*n*l-e*o,n=e,e*=t,++r}return i}const Kr=365250,ko=0,Go=1,Vo=2;function Ho(s){return new Me(s[0]+44036e-11*s[1]-190919e-12*s[2],-479966e-12*s[0]+.917482137087*s[1]-.397776982902*s[2],.397776982902*s[1]+.917482137087*s[2])}function Gu(s,t,e){const n=e*Math.cos(t),i=Math.cos(s),r=Math.sin(s);return[n*i,n*r,e*Math.sin(t)]}function ra(s,t){const e=t.tt/Kr,n=br(s[ko],e,!0),i=br(s[Go],e,!1),r=br(s[Vo],e,!1),a=Gu(n,i,r);return Ho(a).ToAstroVector(t)}function Wo(s,t){const e=t/Kr,n=br(s[ko],e,!0),i=br(s[Go],e,!1),r=br(s[Vo],e,!1),a=mo(s[ko],e),o=mo(s[Go],e),l=mo(s[Vo],e),c=Math.cos(n),u=Math.sin(n),h=Math.cos(i),f=Math.sin(i),p=+(l*h*c)-r*f*c*o-r*h*u*a,_=+(l*h*u)-r*f*u*o+r*h*c*a,g=+(l*f)+r*h*o,m=Gu(n,i,r),d=[p/Kr,_/Kr,g/Kr],S=Ho(m),y=Ho(d);return new Ui(t,S,y)}function Js(s,t,e,n){const i=n/(n+Ml),r=ra($n[e],t);s.x+=i*r.x,s.y+=i*r.y,s.z+=i*r.z}function h2(s){const t=new Se(0,0,0,s);return Js(t,s,Pt.Jupiter,No),Js(t,s,Pt.Saturn,Fo),Js(t,s,Pt.Uranus,zo),Js(t,s,Pt.Neptune,Bo),t}const qo=51,f2=29200,dr=146,Rn=201,Si=[[-73e4,[-26.118207232108,-14.376168177825,3.384402515299],[.0016339372163656,-.0027861699588508,-.0013585880229445]],[-700800,[41.974905202127,-.448502952929,-12.770351505989],[.00073458569351457,.0022785014891658,.00048619778602049]],[-671600,[14.706930780744,44.269110540027,9.353698474772],[-.00210001479998,.00022295915939915,.00070143443551414]],[-642400,[-29.441003929957,-6.43016153057,6.858481011305],[.00084495803960544,-.0030783914758711,-.0012106305981192]],[-613200,[39.444396946234,-6.557989760571,-13.913760296463],[.0011480029005873,.0022400006880665,.00035168075922288]],[-584e3,[20.2303809507,43.266966657189,7.382966091923],[-.0019754081700585,.00053457141292226,.00075929169129793]],[-554800,[-30.65832536462,2.093818874552,9.880531138071],[61010603013347e-18,-.0031326500935382,-.00099346125151067]],[-525600,[35.737703251673,-12.587706024764,-14.677847247563],[.0015802939375649,.0021347678412429,.00019074436384343]],[-496400,[25.466295188546,41.367478338417,5.216476873382],[-.0018054401046468,.0008328308359951,.00080260156912107]],[-467200,[-29.847174904071,10.636426313081,12.297904180106],[-.00063257063052907,-.0029969577578221,-.00074476074151596]],[-438e3,[30.774692107687,-18.236637015304,-14.945535879896],[.0020113162005465,.0019353827024189,-20937793168297e-19]],[-408800,[30.243153324028,38.656267888503,2.938501750218],[-.0016052508674468,.0011183495337525,.00083333973416824]],[-379600,[-27.288984772533,18.643162147874,14.023633623329],[-.0011856388898191,-.0027170609282181,-.00049015526126399]],[-350400,[24.519605196774,-23.245756064727,-14.626862367368],[.0024322321483154,.0016062008146048,-.00023369181613312]],[-321200,[34.505274805875,35.125338586954,.557361475637],[-.0013824391637782,.0013833397561817,.00084823598806262]],[-292e3,[-23.275363915119,25.818514298769,15.055381588598],[-.0016062295460975,-.0023395961498533,-.00024377362639479]],[-262800,[17.050384798092,-27.180376290126,-13.608963321694],[.0028175521080578,.0011358749093955,-.00049548725258825]],[-233600,[38.093671910285,30.880588383337,-1.843688067413],[-.0011317697153459,.0016128814698472,.00084177586176055]],[-204400,[-18.197852930878,31.932869934309,15.438294826279],[-.0019117272501813,-.0019146495909842,-19657304369835e-18]],[-175200,[8.528924039997,-29.618422200048,-11.805400994258],[.0031034370787005,.0005139363329243,-.00077293066202546]],[-146e3,[40.94685725864,25.904973592021,-4.256336240499],[-.00083652705194051,.0018129497136404,.0008156422827306]],[-116800,[-12.326958895325,36.881883446292,15.217158258711],[-.0021166103705038,-.001481442003599,.00017401209844705]],[-87600,[-.633258375909,-30.018759794709,-9.17193287495],[.0032016994581737,-.00025279858672148,-.0010411088271861]],[-58400,[42.936048423883,20.344685584452,-6.588027007912],[-.00050525450073192,.0019910074335507,.00077440196540269]],[-29200,[-5.975910552974,40.61180995846,14.470131723673],[-.0022184202156107,-.0010562361130164,.00033652250216211]],[0,[-9.875369580774,-27.978926224737,-5.753711824704],[.0030287533248818,-.0011276087003636,-.0012651326732361]],[29200,[43.958831986165,14.214147973292,-8.808306227163],[-.00014717608981871,.0021404187242141,.00071486567806614]],[58400,[.67813676352,43.094461639362,13.243238780721],[-.0022358226110718,-.00063233636090933,.00047664798895648]],[87600,[-18.282602096834,-23.30503958666,-1.766620508028],[.0025567245263557,-.0019902940754171,-.0013943491701082]],[116800,[43.873338744526,7.700705617215,-10.814273666425],[.00023174803055677,.0022402163127924,.00062988756452032]],[146e3,[7.392949027906,44.382678951534,11.629500214854],[-.002193281545383,-.00021751799585364,.00059556516201114]],[175200,[-24.981690229261,-16.204012851426,2.466457544298],[.001819398914958,-.0026765419531201,-.0013848283502247]],[204400,[42.530187039511,.845935508021,-12.554907527683],[.00065059779150669,.0022725657282262,.00051133743202822]],[233600,[13.999526486822,44.462363044894,9.669418486465],[-.0021079296569252,.00017533423831993,.00069128485798076]],[262800,[-29.184024803031,-7.371243995762,6.493275957928],[.00093581363109681,-.0030610357109184,-.0012364201089345]],[292e3,[39.831980671753,-6.078405766765,-13.909815358656],[.0011117769689167,.0022362097830152,.00036230548231153]],[321200,[20.294955108476,43.417190420251,7.450091985932],[-.0019742157451535,.00053102050468554,.00075938408813008]],[350400,[-30.66999230216,2.318743558955,9.973480913858],[45605107450676e-18,-.0031308219926928,-.00099066533301924]],[379600,[35.626122155983,-12.897647509224,-14.777586508444],[.0016015684949743,.0021171931182284,.00018002516202204]],[408800,[26.133186148561,41.232139187599,5.00640132622],[-.0017857704419579,.00086046232702817,.00080614690298954]],[438e3,[-29.57674022923,11.863535943587,12.631323039872],[-.00072292830060955,-.0029587820140709,-.000708242964503]],[467200,[29.910805787391,-19.159019294,-15.013363865194],[.0020871080437997,.0018848372554514,-38528655083926e-18]],[496400,[31.375957451819,38.050372720763,2.433138343754],[-.0015546055556611,.0011699815465629,.00083565439266001]],[525600,[-26.360071336928,20.662505904952,14.414696258958],[-.0013142373118349,-.0026236647854842,-.00042542017598193]],[554800,[22.599441488648,-24.508879898306,-14.484045731468],[.0025454108304806,.0014917058755191,-.00030243665086079]],[584e3,[35.877864013014,33.894226366071,-.224524636277],[-.0012941245730845,.0014560427668319,.00084762160640137]],[613200,[-21.538149762417,28.204068269761,15.321973799534],[-.001731211740901,-.0021939631314577,-.0001631691327518]],[642400,[13.971521374415,-28.339941764789,-13.083792871886],[.0029334630526035,.00091860931752944,-.00059939422488627]],[671600,[39.526942044143,28.93989736011,-2.872799527539],[-.0010068481658095,.001702113288809,.00083578230511981]],[700800,[-15.576200701394,34.399412961275,15.466033737854],[-.0020098814612884,-.0017191109825989,70414782780416e-18]],[73e4,[4.24325283709,-30.118201690825,-10.707441231349],[.0031725847067411,.0001609846120227,-.00090672150593868]]];class Me{constructor(t,e,n){this.x=t,this.y=e,this.z=n}clone(){return new Me(this.x,this.y,this.z)}ToAstroVector(t){return new Se(this.x,this.y,this.z,t)}static zero(){return new Me(0,0,0)}quadrature(){return this.x*this.x+this.y*this.y+this.z*this.z}add(t){return new Me(this.x+t.x,this.y+t.y,this.z+t.z)}sub(t){return new Me(this.x-t.x,this.y-t.y,this.z-t.z)}incr(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}decr(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}mul(t){return new Me(t*this.x,t*this.y,t*this.z)}div(t){return new Me(this.x/t,this.y/t,this.z/t)}mean(t){return new Me((this.x+t.x)/2,(this.y+t.y)/2,(this.z+t.z)/2)}neg(){return new Me(-this.x,-this.y,-this.z)}}class Ui{constructor(t,e,n){this.tt=t,this.r=e,this.v=n}clone(){return new Ui(this.tt,this.r,this.v)}sub(t){return new Ui(this.tt,this.r.sub(t.r),this.v.sub(t.v))}}function d2(s){let[t,[e,n,i],[r,a,o]]=s;return new Ui(t,new Me(e,n,i),new Me(r,a,o))}function Qs(s,t,e,n){const i=n/(n+Ml),r=Wo($n[e],t);return s.r.incr(r.r.mul(i)),s.v.incr(r.v.mul(i)),r}function Yr(s,t,e){const n=e.sub(s),i=n.quadrature();return n.mul(t/(i*Math.sqrt(i)))}class Ta{constructor(t){let e=new Ui(t,new Me(0,0,0),new Me(0,0,0));this.Jupiter=Qs(e,t,Pt.Jupiter,No),this.Saturn=Qs(e,t,Pt.Saturn,Fo),this.Uranus=Qs(e,t,Pt.Uranus,zo),this.Neptune=Qs(e,t,Pt.Neptune,Bo),this.Jupiter.r.decr(e.r),this.Jupiter.v.decr(e.v),this.Saturn.r.decr(e.r),this.Saturn.v.decr(e.v),this.Uranus.r.decr(e.r),this.Uranus.v.decr(e.v),this.Neptune.r.decr(e.r),this.Neptune.v.decr(e.v),this.Sun=new Ui(t,e.r.mul(-1),e.v.mul(-1))}Acceleration(t){let e=Yr(t,Ml,this.Sun.r);return e.incr(Yr(t,No,this.Jupiter.r)),e.incr(Yr(t,Fo,this.Saturn.r)),e.incr(Yr(t,zo,this.Uranus.r)),e.incr(Yr(t,Bo,this.Neptune.r)),e}}class Ea{constructor(t,e,n,i){this.tt=t,this.r=e,this.v=n,this.a=i}clone(){return new Ea(this.tt,this.r.clone(),this.v.clone(),this.a.clone())}}class Vu{constructor(t,e){this.bary=t,this.grav=e}}function da(s,t,e,n){return new Me(t.x+s*(e.x+s*n.x/2),t.y+s*(e.y+s*n.y/2),t.z+s*(e.z+s*n.z/2))}function A0(s,t,e){return new Me(t.x+s*e.x,t.y+s*e.y,t.z+s*e.z)}function Xo(s,t){const e=s-t.tt,n=new Ta(s),i=da(e,t.r,t.v,t.a),r=n.Acceleration(i).mean(t.a),a=da(e,t.r,t.v,r),o=t.v.add(r.mul(e)),l=n.Acceleration(a),c=new Ea(s,a,o,l);return new Vu(n,c)}const p2=[];function Hu(s,t){const e=Math.floor(s);return e<0?0:e>=t?t-1:e}function Yo(s){const t=d2(s),e=new Ta(t.tt),n=t.r.add(e.Sun.r),i=t.v.add(e.Sun.v),r=e.Acceleration(n),a=new Ea(t.tt,n,i,r);return new Vu(e,a)}function m2(s,t){const e=Si[0][0];if(t<e||t>Si[qo-1][0])return null;const n=Hu((t-e)/f2,qo-1);if(!s[n]){const r=s[n]=[];r[0]=Yo(Si[n]).grav,r[Rn-1]=Yo(Si[n+1]).grav;let a,o=r[0].tt;for(a=1;a<Rn-1;++a)r[a]=Xo(o+=dr,r[a-1]).grav;o=r[Rn-1].tt;var i=[];for(i[Rn-1]=r[Rn-1],a=Rn-2;a>0;--a)i[a]=Xo(o-=dr,i[a+1]).grav;for(a=Rn-2;a>0;--a){const l=a/(Rn-1);r[a].r=r[a].r.mul(1-l).add(i[a].r.mul(l)),r[a].v=r[a].v.mul(1-l).add(i[a].v.mul(l)),r[a].a=r[a].a.mul(1-l).add(i[a].a.mul(l))}}return s[n]}function C0(s,t,e){let n=Yo(s);const i=Math.ceil((t-n.grav.tt)/e);for(let r=0;r<i;++r)n=Xo(r+1===i?t:n.grav.tt+e,n.grav);return n}function Wu(s,t){let e,n,i;const r=m2(p2,s.tt);if(r){const a=Hu((s.tt-r[0].tt)/dr,Rn-1),o=r[a],l=r[a+1],c=o.a.mean(l.a),u=da(s.tt-o.tt,o.r,o.v,c),h=A0(s.tt-o.tt,o.v,c),f=da(s.tt-l.tt,l.r,l.v,c),p=A0(s.tt-l.tt,l.v,c),_=(s.tt-o.tt)/dr;e=u.mul(1-_).add(f.mul(_)),n=h.mul(1-_).add(p.mul(_))}else{let a;s.tt<Si[0][0]?a=C0(Si[0],s.tt,-dr):a=C0(Si[qo-1],s.tt,+dr),e=a.grav.r,n=a.grav.v,i=a.bary}return t&&(i||(i=new Ta(s.tt)),e=e.sub(i.Sun.r),n=n.sub(i.Sun.v)),new Zn(e.x,e.y,e.z,n.x,n.y,n.z,s)}function wr(s,t){var e=ai(t);if(s in $n)return ra($n[s],e);if(s===Pt.Pluto){const a=Wu(e,!0);return new Se(a.x,a.y,a.z,e)}if(s===Pt.Sun)return new Se(0,0,0,e);if(s===Pt.Moon){var n=ra($n.Earth,e),i=hs(e);return new Se(n.x+i.x,n.y+i.y,n.z+i.z,e)}if(s===Pt.EMB){const a=ra($n.Earth,e),o=hs(e),l=1+Du;return new Se(a.x+o.x/l,a.y+o.y/l,a.z+o.z/l,e)}if(s===Pt.SSB)return h2(e);const r=yl(s);if(r){const a=new zu(r.dec,15*r.ra,r.dist);return qu(a,e)}throw`HelioVector: Unknown body "${s}"`}function g2(s,t){let e=t,n=0;for(let i=0;i<10;++i){const r=s(e),a=r.Length()/Ru;if(a>1)throw"Object is too distant for light-travel solver.";const o=t.AddDays(-a);if(n=Math.abs(o.tt-e.tt),n<1e-9)return r;e=o}throw`Light-travel time solver did not converge: dt = ${n}`}class _2{constructor(t,e,n,i){this.observerBody=t,this.targetBody=e,this.aberration=n,this.observerPos=i}Position(t){this.aberration&&(this.observerPos=wr(this.observerBody,t));const e=wr(this.targetBody,t);return new Se(e.x-this.observerPos.x,e.y-this.observerPos.y,e.z-this.observerPos.z,t)}}function x2(s,t,e,n){Iu(n);const i=ai(s);if(yl(e)){const o=wr(e,i);if(n){const c=y2(t,i),u=new Se(o.x-c.x,o.y-c.y,o.z-c.z,i),h=Ru/u.Length();return new Se(u.x+c.vx/h,u.y+c.vy/h,u.z+c.vz/h,i)}const l=wr(t,i);return new Se(o.x-l.x,o.y-l.y,o.z-l.z,i)}let r;n?r=new Se(0,0,0,i):r=wr(t,i);const a=new _2(t,e,n,r);return g2(o=>a.Position(o),i)}function v2(s,t,e){Iu(e);const n=ai(t);switch(s){case Pt.Earth:return new Se(0,0,0,n);case Pt.Moon:return hs(n);default:const i=x2(n,Pt.Earth,s,e);return i.t=n,i}}function M2(s,t){return new Zn(s.r.x,s.r.y,s.r.z,s.v.x,s.v.y,s.v.z,t)}function y2(s,t){const e=ai(t);switch(s){case Pt.Sun:return new Zn(0,0,0,0,0,0,e);case Pt.SSB:const n=new Ta(e.tt);return new Zn(-n.Sun.r.x,-n.Sun.r.y,-n.Sun.r.z,-n.Sun.v.x,-n.Sun.v.y,-n.Sun.v.z,e);case Pt.Mercury:case Pt.Venus:case Pt.Earth:case Pt.Mars:case Pt.Jupiter:case Pt.Saturn:case Pt.Uranus:case Pt.Neptune:const i=Wo($n[s],e.tt);return M2(i,e);case Pt.Pluto:return Wu(e,!0);case Pt.Moon:case Pt.EMB:const r=Wo($n.Earth,e.tt),a=s==Pt.Moon?ku(e):u2(e);return new Zn(a.x+r.r.x,a.y+r.r.y,a.z+r.r.z,a.vx+r.v.x,a.vy+r.v.y,a.vz+r.v.z,e);default:if(yl(s)){const o=wr(s,e);return new Zn(o.x,o.y,o.z,0,0,0,e)}throw`HelioState: Unsupported body "${s}"`}}var P0;(function(s){s[s.Pericenter=0]="Pericenter",s[s.Apocenter=1]="Apocenter"})(P0||(P0={}));function qu(s,t){t=ai(t);const e=s.lat*Ii,n=s.lon*Ii,i=s.dist*Math.cos(e);return new Se(i*Math.cos(n),i*Math.sin(n),s.dist*Math.sin(e),t)}var L0;(function(s){s.Penumbral="penumbral",s.Partial="partial",s.Annular="annular",s.Total="total"})(L0||(L0={}));var R0;(function(s){s[s.Invalid=0]="Invalid",s[s.Ascending=1]="Ascending",s[s.Descending=-1]="Descending"})(R0||(R0={}));const S2=Math.PI/180;function Fn(s){return s*S2}function Dn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xu(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Dr={duration:.5,overwrite:!1,delay:0},Sl,we,ae,en=1e8,Yt=1/en,jo=Math.PI*2,b2=jo/4,w2=0,Yu=Math.sqrt,T2=Math.cos,E2=Math.sin,fe=function(t){return typeof t=="string"},Qt=function(t){return typeof t=="function"},zn=function(t){return typeof t=="number"},bl=function(t){return typeof t>"u"},bn=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},wl=function(){return typeof window<"u"},ta=function(t){return Qt(t)||fe(t)},ju=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Te=Array.isArray,$o=/(?:-?\.?\d|\.)+/gi,$u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zu=/[+-]=-?[.\d]+/,Ku=/[^,'"\[\]\s]+/gi,A2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Kt,Je,Zo,Tl,Ye={},pa={},Ju,Qu=function(t){return(pa=Oi(t,Ye))&&ze},El=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ma=function(t,e){return!e&&console.warn(t)},th=function(t,e){return t&&(Ye[t]=e)&&pa&&(pa[t]=e)||Ye},fs=function(){return 0},C2={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},P2={suppressEvents:!0},Al={},ei=[],Ko={},eh,We={},_o={},D0=30,aa=[],Cl="",Pl=function(t){var e=t[0],n,i;if(bn(e)||Qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=aa.length;i--&&!aa[i].targetTest(e););n=aa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Th(t[i],n)))||t.splice(i,1);return t},Ti=function(t){return t._gsap||Pl(nn(t))[0]._gsap},nh=function(t,e,n){return(n=t[e])&&Qt(n)?t[e]():bl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ne=function(t,e){return(t=t.split(",")).forEach(e)||t},ne=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},Tr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},L2=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ga=function(){var t=ei.length,e=ei.slice(0),n,i;for(Ko={},ei.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ih=function(t,e,n,i){ei.length&&!we&&ga(),t.render(e,n,i||we&&e<0&&(t._initted||t._startAt)),ei.length&&!we&&ga()},rh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ku).length<2?e:fe(t)?t.trim():t},sh=function(t){return t},sn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},R2=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Oi=function(t,e){for(var n in e)t[n]=e[n];return t},I0=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},_a=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ns=function(t){var e=t.parent||Kt,n=t.keyframes?R2(Te(t.keyframes)):sn;if(Oe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},D2=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ah=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Aa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},ri=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ei=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},I2=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jo=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(sa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},U2=function s(t){return!t||t._ts&&s(t.parent)},U0=function(t){return t._repeat?Ir(t._tTime,t=t.duration()+t._rDelay)*t:0},Ir=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},xa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ca=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||Yt)||0))},Pa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=de(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ca(t),n._dirty||Ei(n,t)),t},oh=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=xa(t.rawTime(),e),(!e._dur||bs(0,e.totalDuration(),n)-e._tTime>Yt)&&e.render(n,!0)),Ei(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Yt}},xn=function(t,e,n,i){return e.parent&&ri(e),e._start=de((zn(n)?n:n||t!==Kt?Ke(t,n,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ah(t,e,"_first","_last",t._sort?"_start":0),Qo(e)||(t._recent=e),i||oh(t,e),t._ts<0&&Pa(t,t._tTime),t},lh=function(t,e){return(Ye.ScrollTrigger||El("scrollTrigger",e))&&Ye.ScrollTrigger.create(e,t)},ch=function(t,e,n,i,r){if(Rl(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&eh!==qe.frame)return ei.push(t),t._lazy=[r,i],1},O2=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Qo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},N2=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&O2(t)&&!(!t._initted&&Qo(t))||(t._ts<0||t._dp._ts<0)&&!Qo(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=bs(0,t._tDur,e),u=Ir(l,o),t._yoyo&&u&1&&(a=1-a),u!==Ir(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||we||i||t._zTime===Yt||!e&&t._zTime){if(!t._initted&&ch(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Yt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Jo(t,e,n,!0),t._onUpdate&&!n&&rn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ri(t,1),!n&&!we&&(rn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},F2=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ur=function(t,e,n,i){var r=t._repeat,a=de(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:de(a*(r+1)+t._rDelay*r):a,o>0&&!i&&Pa(t,t._tTime=t._tDur*o),t.parent&&Ca(t),n||Ei(t.parent,t),t},O0=function(t){return t instanceof De?Ei(t):Ur(t,t._dur)},z2={_start:0,endTime:fs,totalDuration:fs},Ke=function s(t,e,n){var i=t.labels,r=t._recent||z2,a=t.duration()>=en?r.endTime(!1):t._dur,o,l,c;return fe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Te(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},is=function(t,e,n){var i=zn(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;a.immediateRender=Oe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new oe(e[0],a,e[r+1])},oi=function(t,e){return t||t===0?e(t):e},bs=function(t,e,n){return n<t?t:n>e?e:n},ye=function(t,e){return!fe(t)||!(e=A2.exec(t))?"":e[1]},B2=function(t,e,n){return oi(n,function(i){return bs(t,e,i)})},tl=[].slice,uh=function(t,e){return t&&bn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bn(t[0]))&&!t.nodeType&&t!==Je},k2=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return fe(i)&&!e||uh(i,1)?(r=n).push.apply(r,nn(i)):n.push(i)})||n},nn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):fe(t)&&!n&&(Zo||!Or())?tl.call((e||Tl).querySelectorAll(t),0):Te(t)?k2(t,n):uh(t)?tl.call(t,0):t?[t]:[]},el=function(t){return t=nn(t)[0]||ma("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return nn(e,n.querySelectorAll?n:n===t?ma("Invalid scope")||Tl.createElement("div"):t)}},hh=function(t){return t.sort(function(){return .5-Math.random()})},fh=function(t){if(Qt(t))return t;var e=bn(t)?t:{each:t},n=Ai(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return fe(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,_){var g=(_||e).length,m=a[g],d,S,y,x,M,E,C,P,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,en])[1],!v){for(C=-en;C<(C=_[v++].getBoundingClientRect().left)&&v<g;);v--}for(m=a[g]=[],d=l?Math.min(v,g)*u-.5:i%v,S=v===en?0:l?g*h/v-.5:i/v|0,C=0,P=en,E=0;E<g;E++)y=E%v-d,x=S-(E/v|0),m[E]=M=c?Math.abs(c==="y"?x:y):Yu(y*y+x*x),M>C&&(C=M),M<P&&(P=M);i==="random"&&hh(m),m.max=C-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=ye(e.amount||e.each)||0,n=n&&g<0?Sh(n):n}return g=(m[f]-m.min)/m.max||0,de(m.b+(n?n(g):g)*m.v)+m.u}},nl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=de(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(zn(n)?0:ye(n))}},dh=function(t,e){var n=Te(t),i,r;return!n&&bn(t)&&(i=n=t.radius||en,t.values?(t=nn(t.values),(r=!zn(t[0]))&&(i*=i)):t=nl(t.increment)),oi(e,n?Qt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=en,u=0,h=t.length,f,p;h--;)r?(f=t[h].x-o,p=t[h].y-l,f=f*f+p*p):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,r||u===a||zn(a)?u:u+ye(a)}:nl(t))},ph=function(t,e,n,i){return oi(Te(t)?!e:n===!0?!!(n=0):!i,function(){return Te(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},G2=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},V2=function(t,e){return function(n){return t(parseFloat(n))+(e||ye(n))}},H2=function(t,e,n){return gh(t,e,0,1,n)},mh=function(t,e,n){return oi(n,function(i){return t[~~e(i)]})},W2=function s(t,e,n){var i=e-t;return Te(t)?mh(t,s(0,t.length),e):oi(n,function(r){return(i+(r-t)%i)%i+t})},q2=function s(t,e,n){var i=e-t,r=i*2;return Te(t)?mh(t,s(0,t.length-1),e):oi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},ds=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?Ku:$o),n+=t.substr(e,i-e)+ph(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},gh=function(t,e,n,i,r){var a=e-t,o=i-n;return oi(r,function(l){return n+((l-t)/a*o||0)})},X2=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=fe(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Te(t)&&!Te(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(s(t[c-1],t[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=Oi(Te(t)?[]:{},t));if(!u){for(l in e)Ll.call(o,t,l,"get",e[l]);r=function(_){return Ul(_,o)||(a?t.p:t)}}}return oi(n,r)},N0=function(t,e,n){var i=t.labels,r=en,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},rn=function(t,e,n){var i=t.vars,r=i[e],a=ae,o=t._ctx,l,c,u;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ei.length&&ga(),o&&(ae=o),u=l?r.apply(c,l):r.call(c),ae=a,u},Jr=function(t){return ri(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&rn(t,"onInterrupt"),t},mr,_h=[],xh=function(t){if(!wl()){_h.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=Qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:fs,render:Ul,add:Ll,kill:l3,modifier:o3,rawVars:0},a={targetTest:0,get:0,getSetter:Il,aliases:{},register:0};if(Or(),t!==i){if(We[e])return;sn(i,sn(_a(t,r),a)),Oi(i.prototype,Oi(r,_a(t,a))),We[i.prop=e]=i,t.targetTest&&(aa.push(i),Al[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}th(e,i),t.register&&t.register(ze,i,Fe)},Xt=255,Qr={aqua:[0,Xt,Xt],lime:[0,Xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Xt],navy:[0,0,128],white:[Xt,Xt,Xt],olive:[128,128,0],yellow:[Xt,Xt,0],orange:[Xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Xt,0,0],pink:[Xt,192,203],cyan:[0,Xt,Xt],transparent:[Xt,Xt,Xt,0]},xo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Xt+.5|0},vh=function(t,e,n){var i=t?zn(t)?[t>>16,t>>8&Xt,t&Xt]:0:Qr.black,r,a,o,l,c,u,h,f,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qr[t])i=Qr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Xt,i&Xt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Xt,t&Xt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match($o),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=xo(l+1/3,r,a),i[1]=xo(l,r,a),i[2]=xo(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match($u),n&&i.length<4&&(i[3]=1),i}else i=t.match($o)||Qr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Xt,a=i[1]/Xt,o=i[2]/Xt,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===r?(a-o)/p+(a<o?6:0):h===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mh=function(t){var e=[],n=[],i=-1;return t.split(ni).forEach(function(r){var a=r.match(pr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},F0=function(t,e,n){var i="",r=(t+i).match(ni),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=vh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Mh(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ni,"1").split(pr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(ni),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},ni=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qr)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Y2=/hsl[a]?\(/,yh=function(t){var e=t.join(" "),n;if(ni.lastIndex=0,ni.test(e))return n=Y2.test(e),t[1]=F0(t[1],n),t[0]=F0(t[0],n,Mh(t[1])),!0},ps,qe=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,p,_=function g(m){var d=s()-i,S=m===!0,y,x,M,E;if(d>t&&(n+=d-e),i+=d,M=i-n,y=M-a,(y>0||S)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=y+(y>=r?4:r-y),x=1),S||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](M,f,E,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ju&&(!Zo&&wl()&&(Je=Zo=window,Tl=Je.document||{},Ye.gsap=ze,(Je.gsapVersions||(Je.gsapVersions=[])).push(ze.version),Qu(pa||Je.GreenSockGlobals||!Je.gsap&&Je||{}),u=Je.requestAnimationFrame,_h.forEach(xh)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},ps=1,_(2))},sleep:function(){(u?Je.cancelAnimationFrame:clearTimeout)(l),ps=0,c=fs},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,d,S){var y=d?function(x,M,E,C){m(x,M,E,C),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),Or(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},h}(),Or=function(){return!ps&&qe.wake()},Bt={},j2=/^[\d.\-M][\d.\-,\s]/,$2=/["']/g,Z2=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace($2,"").trim():+c,i=l.substr(o+1).trim();return e},K2=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},J2=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Z2(e[1])]:K2(t).split(",").map(rh)):Bt._CE&&j2.test(t)?Bt._CE("",t):n},Sh=function(t){return function(e){return 1-t(1-e)}},bh=function s(t,e){for(var n=t._first,i;n;)n instanceof De?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ai=function(t,e){return t&&(Qt(t)?t:Bt[t]||J2(t))||e},zi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ne(t,function(o){Bt[o]=Ye[o]=r,Bt[a=o.toLowerCase()]=n;for(var l in r)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=r[l]}),r},wh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},vo=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/jo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*E2((u-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:wh(o);return r=jo/r,l.config=function(c,u){return s(t,c,u)},l},Mo=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:wh(n);return i.config=function(r){return s(t,r)},i};Ne("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;zi(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;zi("Elastic",vo("in"),vo("out"),vo());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};zi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);zi("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});zi("Circ",function(s){return-(Yu(1-s*s)-1)});zi("Sine",function(s){return s===1?1:-T2(s*b2)+1});zi("Back",Mo("in"),Mo("out"),Mo());Bt.SteppedEase=Bt.steps=Ye.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Yt;return function(o){return((i*bs(0,a,o)|0)+r)*n}}};Dr.ease=Bt["quad.out"];Ne("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Cl+=s+","+s+"Params,"});var Th=function(t,e){this.id=w2++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:nh,this.set=e?e.getSetter:Il},Nr=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ur(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),ps||qe.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Pa(this,n),!r._dp||r.parent||oh(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Yt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ih(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+U0(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+U0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ir(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Yt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Yt?0:this._rts,this.totalTime(bs(-Math.abs(this._delay),this._tDur,i),!0),Ca(this),I2(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Yt&&(this._tTime-=Yt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&xn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Oe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=P2);var i=we;return we=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,O0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,O0(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ke(this,n),Oe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Oe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Yt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Yt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Yt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Qt(n)?n:sh,o=function(){var c=i.then;i.then=null,Qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Jr(this)},s}();sn(Nr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Yt,_prom:0,_ps:!1,_rts:1});var De=function(s){Xu(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Oe(n.sortChildren),Kt&&xn(n.parent||Kt,Dn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&lh(Dn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return is(0,arguments,this),this},e.from=function(i,r,a){return is(1,arguments,this),this},e.fromTo=function(i,r,a,o){return is(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,ns(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new oe(i,r,Ke(this,a),1),this},e.call=function(i,r,a){return xn(this,oe.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new oe(i,a,Ke(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,ns(a).immediateRender=Oe(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},e.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,ns(o).immediateRender=Oe(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:de(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,g,m,d,S,y,x,M,E,C;if(this!==Kt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,y=this._ts,d=!y,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=de(u%m),u===l?(g=this._repeat,f=c):(g=~~(u/m),g&&g===u/m&&(f=c,g--),f>c&&(f=c)),M=Ir(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),E&&g&1&&(f=c-f,C=1),g!==M&&!this._lock){var P=E&&M&1,v=P===(E&&g&1);if(g<M&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(C?0:de(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;bh(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=F2(this,de(o),de(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!g&&(rn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,r,a),f!==this._time||!this._ts&&!d){S=0,_&&(u+=this._zTime=-Yt);break}}p=_}else{p=this._last;for(var T=i<0?i:f;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,r,a||we&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!d){S=0,_&&(u+=this._zTime=T?-Yt:Yt);break}}p=_}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Yt)._zTime=f>=o?1:-1,this._ts))return this._start=x,Ca(this),this.render(i,r,a);this._onUpdate&&!r&&rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ri(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(zn(r)||(r=Ke(this,r,i)),!(i instanceof Nr)){if(Te(i))return i.forEach(function(o){return a.add(o,r)}),this;if(fe(i))return this.addLabel(i,r);if(Qt(i))i=oe.delayedCall(0,i);else return this}return this!==i?xn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-en);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof oe?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return fe(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(Aa(this,i),i===this._recent&&(this._recent=this._last),Ei(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ke(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=oe.delayedCall(0,r||fs,a);return o.data="isPause",this._hasPause=1,xn(this,o,Ke(this,i))},e.removePause=function(i){var r=this._first;for(i=Ke(this,i);r;)r._start===i&&r.data==="isPause"&&ri(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Kn!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=nn(i),l=this._first,c=zn(r),u;l;)l instanceof oe?L2(l._targets,o)&&(c?(!Kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Ke(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=oe.to(a,sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Yt,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Ur(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,sn({startAt:{time:Ke(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),N0(this,Ke(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),N0(this,Ke(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Yt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return Ei(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ei(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=en,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,xn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Ur(a,a===Kt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Kt._ts&&(ih(Kt,xa(i,Kt)),eh=qe.frame),qe.frame>=D0){D0+=Xe.autoSleep||120;var r=Kt._first;if((!r||!r._ts)&&Xe.autoSleep&&qe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||qe.sleep()}}},t}(Nr);sn(De.prototype,{_lock:0,_hasPause:0,_forcing:0});var Q2=function(t,e,n,i,r,a,o){var l=new Fe(this._pt,t,e,0,1,Rh,null,r),c=0,u=0,h,f,p,_,g,m,d,S;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=ds(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(go)||[];h=go.exec(i);)_=h[0],g=i.substring(c,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Tr(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zu.test(i)||d)&&(l.e=0),this._pt=l,l},Ll=function(t,e,n,i,r,a,o,l,c,u){Qt(i)&&(i=i(r||0,t,a));var h=t[e],f=n!=="get"?n:Qt(h)?c?t[e.indexOf("set")||!Qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Qt(h)?c?r3:Ph:Dl,_;if(fe(i)&&(~i.indexOf("random(")&&(i=ds(i)),i.charAt(1)==="="&&(_=Tr(f,i)+(ye(f)||0),(_||_===0)&&(i=_))),!u||f!==i||il)return!isNaN(f*i)&&i!==""?(_=new Fe(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?a3:Lh,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&El(e,i),Q2.call(this,t,e,f,i,p,l||Xe.stringFilter,c))},t3=function(t,e,n,i,r){if(Qt(t)&&(t=rs(t,r,e,n,i)),!bn(t)||t.style&&t.nodeType||Te(t)||ju(t))return fe(t)?rs(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=rs(t[o],r,e,n,i);return a},Eh=function(t,e,n,i,r,a){var o,l,c,u;if(We[t]&&(o=new We[t]).init(r,o.rawVars?e[t]:t3(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Fe(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==mr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Kn,il,Rl=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,S=t._targets,y=t.parent,x=y&&y.data==="nested"?y.vars.targets:S,M=t._overwrite==="auto"&&!Sl,E=t.timeline,C,P,v,T,V,G,D,U,z,J,Z,W,tt;if(E&&(!_||!r)&&(r="none"),t._ease=Ai(r,Dr.ease),t._yEase=p?Sh(Ai(p===!0?r:p,Dr.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(U=S[0]?Ti(S[0]).harness:0,W=U&&i[U.prop],C=_a(i,Al),d&&(d._zTime<0&&d.progress(1),e<0&&f&&o&&!g?d.render(-1,!0):d.revert(f&&m?sa:C2),d._lazy=0),a){if(ri(t._startAt=oe.set(S,sn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!d&&Oe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!o&&!g)&&t._startAt.revert(sa),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&m&&!d){if(e&&(o=!1),v=sn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Oe(l),immediateRender:o,stagger:0,parent:y},C),W&&(v[U.prop]=W),ri(t._startAt=oe.set(S,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(sa):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,Yt,Yt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Oe(l)||l&&!m,P=0;P<S.length;P++){if(V=S[P],D=V._gsap||Pl(S)[P]._gsap,t._ptLookup[P]=J={},Ko[D.id]&&ei.length&&ga(),Z=x===S?P:x.indexOf(V),U&&(z=new U).init(V,W||C,t,Z,x)!==!1&&(t._pt=T=new Fe(t._pt,V,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(X){J[X]=T}),z.priority&&(G=1)),!U||W)for(v in C)We[v]&&(z=Eh(v,C,t,Z,V,x))?z.priority&&(G=1):J[v]=T=Ll.call(t,V,v,"get",C[v],Z,x,0,i.stringFilter);t._op&&t._op[P]&&t.kill(V,t._op[P]),M&&t._pt&&(Kn=t,Kt.killTweensOf(V,J,t.globalTime(e)),tt=!t.parent,Kn=0),t._pt&&l&&(Ko[D.id]=1)}G&&Dh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,_&&e<=0&&E.render(en,!0,!0)},e3=function(t,e,n,i,r,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return il=1,t.vars[e]="+=0",Rl(t,o),il=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ne(n)+ye(u.e)),u.b&&(u.b=c.s+ye(u.b))},n3=function(t,e){var n=t[0]?Ti(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=Oi({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},i3=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Te(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},rs=function(t,e,n,i,r){return Qt(t)?t.call(e,n,i,r):fe(t)&&~t.indexOf("random(")?ds(t):t},Ah=Cl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ch={};Ne(Ah+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ch[s]=1});var oe=function(s){Xu(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ns(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=i.parent||Kt,y=(Te(n)||ju(n)?zn(n[0]):"length"in i)?[n]:nn(n),x,M,E,C,P,v,T,V;if(o._targets=y.length?Pl(y):ma("GSAP target "+n+" not found. https://greensock.com",!Xe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||f||ta(c)||ta(u)){if(i=o.vars,x=o.timeline=new De({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),x.kill(),x.parent=x._dp=Dn(o),x._start=0,f||ta(c)||ta(u)){if(C=y.length,T=f&&fh(f),bn(f))for(P in f)~Ah.indexOf(P)&&(V||(V={}),V[P]=f[P]);for(M=0;M<C;M++)E=_a(i,Ch),E.stagger=0,d&&(E.yoyoEase=d),V&&Oi(E,V),v=y[M],E.duration=+rs(c,Dn(o),M,v,y),E.delay=(+rs(u,Dn(o),M,v,y)||0)-o._delay,!f&&C===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(v,E,T?T(M,v,y):0),x._ease=Bt.none;x.duration()?c=u=0:o.timeline=0}else if(_){ns(sn(x.vars.defaults,{ease:"none"})),x._ease=Ai(_.ease||i.ease||"none");var G=0,D,U,z;if(Te(_))_.forEach(function(J){return x.to(y,J,">")}),x.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||i3(P,_[P],E,_.easeEach);for(P in E)for(D=E[P].sort(function(J,Z){return J.t-Z.t}),G=0,M=0;M<D.length;M++)U=D[M],z={ease:U.e,duration:(U.t-(M?D[M-1].t:0))/100*c},z[P]=U.v,x.to(y,z,G),G+=z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!Sl&&(Kn=Dn(o),Kt.killTweensOf(y),Kn=0),xn(S,Dn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===de(S._time)&&Oe(h)&&U2(Dn(o))&&S.data!=="nested")&&(o._tTime=-Yt,o.render(Math.max(0,-u)||0)),m&&lh(Dn(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Yt&&!u?l:i<Yt?0:i,f,p,_,g,m,d,S,y,x;if(!c)N2(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,a);if(f=de(h%g),h===l?(_=this._repeat,f=c):(_=~~(h/g),_&&_===h/g&&(f=c,_--),f>c&&(f=c)),d=this._yoyo&&_&1,d&&(x=this._yEase,f=c-f),m=Ir(this._tTime,g),f===o&&!a&&this._initted)return this._tTime=h,this;_!==m&&(y&&this._yEase&&bh(y,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(de(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ch(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!r&&!_&&(rn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;y&&y.render(i<0?i:!f&&d?-Yt:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Jo(this,i,r,a),rn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&rn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Jo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ri(this,1),!r&&!(u&&!o)&&(h||o||d)&&(rn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o){ps||qe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Rl(this,l),c=this._ease(l/this._dur),e3(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Pa(this,0),this.parent||ah(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Jr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Kn&&Kn.vars.overwrite!==!0)._first||Jr(this),this.parent&&a!==this.timeline.totalDuration()&&Ur(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?nn(i):o,c=this._ptLookup,u=this._pt,h,f,p,_,g,m,d;if((!r||r==="all")&&D2(o,l))return r==="all"&&(this._pt=0),Jr(this);for(h=this._op=this._op||[],r!=="all"&&(fe(r)&&(g={},Ne(r,function(S){return g[S]=1}),r=g),r=n3(o,r)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],r==="all"?(h[d]=r,_=f,p={}):(p=h[d]=h[d]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Aa(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&Jr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return is(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return is(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Kt.killTweensOf(i,r,a)},t}(Nr);sn(oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ne("staggerTo,staggerFrom,staggerFromTo",function(s){oe[s]=function(){var t=new De,e=tl.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Dl=function(t,e,n){return t[e]=n},Ph=function(t,e,n){return t[e](n)},r3=function(t,e,n,i){return t[e](i.fp,n)},s3=function(t,e,n){return t.setAttribute(e,n)},Il=function(t,e){return Qt(t[e])?Ph:bl(t[e])&&t.setAttribute?s3:Dl},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},a3=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ul=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},o3=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},l3=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Aa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},c3=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Dh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Fe=function(){function s(e,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||Lh,this.d=l||this,this.set=c||Dl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=c3,this.m=n,this.mt=r,this.tween=i},s}();Ne(Cl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Al[s]=1});Ye.TweenMax=Ye.TweenLite=oe;Ye.TimelineLite=Ye.TimelineMax=De;Kt=new De({sortChildren:!1,defaults:Dr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xe.stringFilter=yh;var Fr=[],oa={},u3=[],z0=0,yo=function(t){return(oa[t]||u3).map(function(e){return e()})},rl=function(){var t=Date.now(),e=[];t-z0>2&&(yo("matchMediaInit"),Fr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Je.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),yo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),z0=t,yo("matchMedia"))},Ih=function(){function s(e,n){this.selector=n&&el(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Qt(n)&&(r=i,i=n,n=Qt);var a=this,o=function(){var c=ae,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=el(r)),ae=a,h=i.apply(a,arguments),Qt(h)&&a._r.push(h),ae=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Qt?o(a):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Nr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Fr.indexOf(this);~o&&Fr.splice(o,1)}},t.revert=function(n){this.kill(n||{})},s}(),h3=function(){function s(e){this.contexts=[],this.scope=e}var t=s.prototype;return t.add=function(n,i,r){bn(n)||(n={matches:n});var a=new Ih(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Je.matchMedia(n[c]),l&&(Fr.indexOf(a)<0&&Fr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(rl):l.addEventListener("change",rl)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),va={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return xh(i)})},timeline:function(t){return new De(t)},getTweensOf:function(t,e){return Kt.getTweensOf(t,e)},getProperty:function(t,e,n,i){fe(t)&&(t=nn(t)[0]);var r=Ti(t||{}).get,a=n?sh:rh;return n==="native"&&(n=""),t&&(e?a((We[e]&&We[e].get||r)(t,e,n,i)):function(o,l,c){return a((We[o]&&We[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=nn(t),t.length>1){var i=t.map(function(u){return ze.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=We[e],o=Ti(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;mr._pt=0,h.init(t,n?u+n:u,mr,0,[t]),h.render(1,h),mr._pt&&Ul(1,mr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,r=ze.to(t,Oi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(e,l,c,u)};return a.tween=r,a},isTweening:function(t){return Kt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ai(t.ease,Dr.ease)),I0(Dr,t||{})},config:function(t){return I0(Xe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!We[o]&&!Ye[o]&&ma(e+" effect requires "+o+" plugin.")}),_o[e]=function(o,l,c){return n(nn(o),sn(l||{},r),c)},a&&(De.prototype[e]=function(o,l,c){return this.add(_o[e](o,bn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Bt[t]=Ai(e)},parseEase:function(t,e){return arguments.length?Ai(t,e):Bt},getById:function(t){return Kt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new De(t),i,r;for(n.smoothChildTiming=Oe(t.smoothChildTiming),Kt.remove(n),n._dp=0,n._time=n._tTime=Kt._time,i=Kt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof oe&&i.vars.onComplete===i._targets[0]))&&xn(n,i,i._start-i._delay),i=r;return xn(Kt,n,0),n},context:function(t,e){return t?new Ih(t,e):ae},matchMedia:function(t){return new h3(t)},matchMediaRefresh:function(){return Fr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||rl()},addEventListener:function(t,e){var n=oa[t]||(oa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=oa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:W2,wrapYoyo:q2,distribute:fh,random:ph,snap:dh,normalize:H2,getUnit:ye,clamp:B2,splitColor:vh,toArray:nn,selector:el,mapRange:gh,pipe:G2,unitize:V2,interpolate:X2,shuffle:hh},install:Qu,effects:_o,ticker:qe,updateRoot:De.updateRoot,plugins:We,globalTimeline:Kt,core:{PropTween:Fe,globals:th,Tween:oe,Timeline:De,Animation:Nr,getCache:Ti,_removeLinkedListItem:Aa,reverting:function(){return we},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return Sl=t}}};Ne("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return va[s]=oe[s]});qe.add(De.updateRoot);mr=va.to({},{duration:0});var f3=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},d3=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=f3(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},So=function(t,e){return{name:t,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(fe(r)&&(l={},Ne(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}d3(o,r)}}}},ze=va.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},So("roundProps",nl),So("modifiers"),So("snap",dh))||va;oe.version=De.version=ze.version="3.11.5";Ju=1;wl()&&Or();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var B0,Jn,Er,Ol,bi,k0,Nl,p3=function(){return typeof window<"u"},Bn={},xi=180/Math.PI,Ar=Math.PI/180,or=Math.atan2,G0=1e8,Fl=/([A-Z])/g,m3=/(left|right|width|margin|padding|x)/i,g3=/[\s,\(]\S/,Mn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_3=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x3=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},v3=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Uh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Oh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},M3=function(t,e,n){return t.style[e]=n},y3=function(t,e,n){return t.style.setProperty(e,n)},S3=function(t,e,n){return t._gsap[e]=n},b3=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},w3=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},T3=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Jt="transform",dn=Jt+"Origin",E3=function s(t,e){var n=this,i=this.target,r=i.style;if(t in Bn){if(this.tfm=this.tfm||{},t!=="transform")t=Mn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=In(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:In(i,t);else return Mn.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Jt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(dn,e,"")),t=Jt}(r||e)&&this.props.push(t,e,r[t])},Nh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},A3=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Fl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Nl(),(!r||!r.isStart)&&!n[Jt]&&(Nh(n),i.uncache=1)}},Fh=function(t,e){var n={target:t,props:[],revert:A3,save:E3};return t._gsap||ze.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},zh,al=function(t,e){var n=Jn.createElementNS?Jn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Jn.createElement(t);return n.style?n:Jn.createElement(t)},Sn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,zr(e)||e,1)||""},V0="O,Moz,ms,Ms,Webkit".split(","),zr=function(t,e,n){var i=e||bi,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(V0[a]+t in r););return a<0?null:(a===3?"ms":a>=0?V0[a]:"")+t},ol=function(){p3()&&window.document&&(B0=window,Jn=B0.document,Er=Jn.documentElement,bi=al("div")||{style:{}},al("div"),Jt=zr(Jt),dn=Jt+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zh=!!zr("perspective"),Nl=ze.core.reverting,Ol=1)},bo=function s(t){var e=al("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Er.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Er.removeChild(e),this.style.cssText=r,a},H0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bh=function(t){var e;try{e=t.getBBox()}catch{e=bo.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===bo||(e=bo.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+H0(t,["x","cx","x1"])||0,y:+H0(t,["y","cy","y1"])||0,width:0,height:0}:e},kh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bh(t))},ms=function(t,e){if(e){var n=t.style;e in Bn&&e!==dn&&(e=Jt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Fl,"-$1").toLowerCase())):n.removeAttribute(e)}},Qn=function(t,e,n,i,r,a){var o=new Fe(t._pt,e,n,0,1,a?Oh:Uh);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},W0={deg:1,rad:1,turn:1},C3={grid:1,flex:1},si=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=bi.style,l=m3.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",_,g,m,d;return i===a||!r||W0[i]||W0[a]?r:(a!=="px"&&!f&&(r=s(t,e,n,"px")),d=t.getCTM&&kh(t),(p||a==="%")&&(Bn[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[l?"width":"height"]:t[u],ne(p?r/_*h:r/100*_)):(o[l?"width":"height"]=h+(f?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Jn||!g.appendChild)&&(g=Jn.body),m=g._gsap,m&&p&&m.width&&l&&m.time===qe.time&&!m.uncache?ne(r/m.width*h):((p||a==="%")&&!C3[Sn(g,"display")]&&(o.position=Sn(t,"position")),g===t&&(o.position="static"),g.appendChild(bi),_=bi[u],g.removeChild(bi),o.position="absolute",l&&p&&(m=Ti(g),m.time=qe.time,m.width=g[u]),ne(f?_*r/h:_&&r?h/_*r:0))))},In=function(t,e,n,i){var r;return Ol||ol(),e in Mn&&e!=="transform"&&(e=Mn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Bn[e]&&e!=="transform"?(r=_s(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:ya(Sn(t,dn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ma[e]&&Ma[e](t,e,n)||Sn(t,e)||nh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?si(t,e,r,n)+n:r},P3=function(t,e,n,i){if(!n||n==="none"){var r=zr(e,t,1),a=r&&Sn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Sn(t,"borderTopColor"))}var o=new Fe(this._pt,t.style,e,0,1,Rh),l=0,c=0,u,h,f,p,_,g,m,d,S,y,x,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Sn(t,e)||i,t.style[e]=n),u=[n,i],yh(u),n=u[0],i=u[1],f=n.match(pr)||[],M=i.match(pr)||[],M.length){for(;h=pr.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=Tr(p,m)+x),d=parseFloat(m),y=m.substr((d+"").length),l=pr.lastIndex-y.length,y||(y=y||Xe.units[e]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(p=si(t,e,g,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Oh:Uh;return Zu.test(i)&&(o.e=0),this._pt=o,o},q0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},L3=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=q0[n]||n,e[1]=q0[i]||i,e.join(" ")},R3=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],Bn[o]&&(l=1,o=o==="transformOrigin"?dn:Jt),ms(n,o);l&&(ms(n,Jt),a&&(a.svg&&n.removeAttribute("transform"),_s(n,1),a.uncache=1,Nh(i)))}},Ma={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Fe(t._pt,e,n,0,0,R3);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},gs=[1,0,0,1,0,0],Gh={},Vh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},X0=function(t){var e=Sn(t,Jt);return Vh(e)?gs:e.substr(7).match($u).map(ne)},zl=function(t,e){var n=t._gsap||Ti(t),i=t.style,r=X0(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?gs:r):(r===gs&&!t.offsetParent&&t!==Er&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Er.appendChild(t)),r=X0(t),l?i.display=l:ms(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Er.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ll=function(t,e,n,i,r,a){var o=t._gsap,l=r||zl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],S=l[5],y=e.split(" "),x=parseFloat(y[0])||0,M=parseFloat(y[1])||0,E,C,P,v;n?l!==gs&&(C=p*m-_*g)&&(P=x*(m/C)+M*(-g/C)+(g*S-m*d)/C,v=x*(-_/C)+M*(p/C)-(p*S-_*d)/C,x=P,M=v):(E=Bh(t),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(y[1]||y[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(d=x-c,S=M-u,o.xOffset=h+(d*p+S*g)-d,o.yOffset=f+(d*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[dn]="0px 0px",a&&(Qn(a,o,"xOrigin",c,x),Qn(a,o,"yOrigin",u,M),Qn(a,o,"xOffset",h,o.xOffset),Qn(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},_s=function(t,e){var n=t._gsap||new Th(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Sn(t,dn)||"0",u,h,f,p,_,g,m,d,S,y,x,M,E,C,P,v,T,V,G,D,U,z,J,Z,W,tt,X,xt,nt,H,$,at;return u=h=f=g=m=d=S=y=x=0,p=_=1,n.svg=!!(t.getCTM&&kh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Jt]!=="none"?l[Jt]:"")),i.scale=i.rotate=i.translate="none"),C=zl(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),ll(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,E=n.yOrigin||0,C!==gs&&(V=C[0],G=C[1],D=C[2],U=C[3],u=z=C[4],h=J=C[5],C.length===6?(p=Math.sqrt(V*V+G*G),_=Math.sqrt(U*U+D*D),g=V||G?or(G,V)*xi:0,S=D||U?or(D,U)*xi+g:0,S&&(_*=Math.abs(Math.cos(S*Ar))),n.svg&&(u-=M-(M*V+E*D),h-=E-(M*G+E*U))):(at=C[6],H=C[7],X=C[8],xt=C[9],nt=C[10],$=C[11],u=C[12],h=C[13],f=C[14],P=or(at,nt),m=P*xi,P&&(v=Math.cos(-P),T=Math.sin(-P),Z=z*v+X*T,W=J*v+xt*T,tt=at*v+nt*T,X=z*-T+X*v,xt=J*-T+xt*v,nt=at*-T+nt*v,$=H*-T+$*v,z=Z,J=W,at=tt),P=or(-D,nt),d=P*xi,P&&(v=Math.cos(-P),T=Math.sin(-P),Z=V*v-X*T,W=G*v-xt*T,tt=D*v-nt*T,$=U*T+$*v,V=Z,G=W,D=tt),P=or(G,V),g=P*xi,P&&(v=Math.cos(P),T=Math.sin(P),Z=V*v+G*T,W=z*v+J*T,G=G*v-V*T,J=J*v-z*T,V=Z,z=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ne(Math.sqrt(V*V+G*G+D*D)),_=ne(Math.sqrt(J*J+at*at)),P=or(z,J),S=Math.abs(P)>2e-4?P*xi:0,x=$?1/($<0?-$:$):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vh(Sn(t,Jt)),Z&&t.setAttribute("transform",Z))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(p*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ne(p),n.scaleY=ne(_),n.rotation=ne(g)+o,n.rotationX=ne(m)+o,n.rotationY=ne(d)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[dn]=ya(c)),n.xOffset=n.yOffset=0,n.force3D=Xe.force3D,n.renderTransform=n.svg?I3:zh?Hh:D3,n.uncache=0,n},ya=function(t){return(t=t.split(" "))[0]+" "+t[1]},wo=function(t,e,n){var i=ye(e);return ne(parseFloat(e)+parseFloat(si(t,"x",n+"px",i)))+i},D3=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hh(t,e)},pi="0deg",jr="0px",mi=") ",Hh=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,S=n.target,y=n.zOrigin,x="",M=d==="auto"&&t&&t!==1||d===!0;if(y&&(h!==pi||u!==pi)){var E=parseFloat(u)*Ar,C=Math.sin(E),P=Math.cos(E),v;E=parseFloat(h)*Ar,v=Math.cos(E),a=wo(S,a,C*v*-y),o=wo(S,o,-Math.sin(E)*-y),l=wo(S,l,P*v*-y+y)}m!==jr&&(x+="perspective("+m+mi),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(M||a!==jr||o!==jr||l!==jr)&&(x+=l!==jr||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+mi),c!==pi&&(x+="rotate("+c+mi),u!==pi&&(x+="rotateY("+u+mi),h!==pi&&(x+="rotateX("+h+mi),(f!==pi||p!==pi)&&(x+="skew("+f+", "+p+mi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+mi),S.style[Jt]=x||"translate(0, 0)"},I3=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,S=n.forceCSS,y=parseFloat(a),x=parseFloat(o),M,E,C,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ar,c*=Ar,M=Math.cos(l)*h,E=Math.sin(l)*h,C=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ar,v=Math.tan(c-u),v=Math.sqrt(1+v*v),C*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),M*=v,E*=v)),M=ne(M),E=ne(E),C=ne(C),P=ne(P)):(M=h,P=f,E=C=0),(y&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=si(p,"x",a,"px"),x=si(p,"y",o,"px")),(_||g||m||d)&&(y=ne(y+_-(_*M+g*C)+m),x=ne(x+g-(_*E+g*P)+d)),(i||r)&&(v=p.getBBox(),y=ne(y+i/100*v.width),x=ne(x+r/100*v.height)),v="matrix("+M+","+E+","+C+","+P+","+y+","+x+")",p.setAttribute("transform",v),S&&(p.style[Jt]=v)},U3=function(t,e,n,i,r){var a=360,o=fe(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?xi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*G0)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*G0)%a-~~(c/a)*a)),t._pt=f=new Fe(t._pt,e,n,i,c,_3),f.e=u,f.u="deg",t._props.push(n),f},Y0=function(t,e){for(var n in e)t[n]=e[n];return t},O3=function(t,e,n){var i=Y0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Jt]=e,o=_s(n,1),ms(n,Jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Jt],a[Jt]=e,o=_s(n,1),a[Jt]=c);for(l in Bn)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(p=ye(c),_=ye(u),h=p!==_?si(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Fe(t._pt,o,l,h,f-h,sl),t._pt.u=_||0,t._props.push(l));Y0(o,i)};Ne("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});Ma[t>1?"border"+s:s]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(_){return In(o,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,p,h)}});var Wh={name:"css",register:ol,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,p,_,g,m,d,S,y,x,M,E,C,P;Ol||ol(),this.styles=this.styles||Fh(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(We[g]&&Eh(g,e,n,i,t,r)))){if(p=typeof u,_=Ma[g],p==="function"&&(u=u.call(n,i,t,r),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ds(u)),_)_(this,t,g,u,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ni.lastIndex=0,ni.test(c)||(m=ye(c),d=ye(u)),d?m!==d&&(c=si(t,g,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,r,0,0,g),a.push(g),P.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],fe(c)&&~c.indexOf("random(")&&(c=ds(c)),ye(c+"")||(c+=Xe.units[g]||ye(In(t,g))||""),(c+"").charAt(1)==="="&&(c=In(t,g))):c=In(t,g),f=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Mn&&(g==="autoAlpha"&&(f===1&&In(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,o.visibility),Qn(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Mn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Bn,y){if(this.styles.save(g),x||(M=t._gsap,M.renderTransform&&!e.parseTransform||_s(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new Fe(this._pt,o,Jt,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new Fe(this._pt,M,"scaleY",M.scaleY,(S?Tr(M.scaleY,S+h):h)-M.scaleY||0,sl),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(dn,0,o[dn]),u=L3(u),M.svg?ll(t,u,0,E,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&Qn(this,M,"zOrigin",M.zOrigin,d),Qn(this,o,g,ya(c),ya(u)));continue}else if(g==="svgOrigin"){ll(t,u,1,E,0,this);continue}else if(g in Gh){U3(this,M,g,f,S?Tr(f,S+u):u);continue}else if(g==="smoothOrigin"){Qn(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){O3(this,u,t);continue}}else g in o||(g=zr(g)||g);if(y||(h||h===0)&&(f||f===0)&&!g3.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),d=ye(u)||(g in Xe.units?Xe.units[g]:m),m!==d&&(f=si(t,g,c,d)),this._pt=new Fe(this._pt,y?M:o,g,f,(S?Tr(f,S+h):h)-f,!y&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?v3:sl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=x3);else if(g in o)P3.call(this,t,g,c,S?S+u:u);else if(g in t)this.add(t,g,c||t[g],S?S+u:u,i,r);else if(g!=="parseTransform"){El(g,u);continue}y||(g in o?P.push(g,0,o[g]):P.push(g,1,c||t[g])),a.push(g)}}C&&Dh(this)},render:function(t,e){if(e.tween._time||!Nl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:In,aliases:Mn,getSetter:function(t,e,n){var i=Mn[e];return i&&i.indexOf(",")<0&&(e=i),e in Bn&&e!==dn&&(t._gsap.x||In(t,"x"))?n&&k0===n?e==="scale"?b3:S3:(k0=n||{})&&(e==="scale"?w3:T3):t.style&&!bl(t.style[e])?M3:~e.indexOf("-")?y3:Il(t,e)},core:{_removeProperty:ms,_getMatrix:zl}};ze.utils.checkPrefix=zr;ze.core.getStyleSaver=Fh;(function(s,t,e,n){var i=Ne(s+","+t+","+e,function(r){Bn[r]=1});Ne(t,function(r){Xe.units[r]="deg",Gh[r]=1}),Mn[i[13]]=s+","+t,Ne(n,function(r){var a=r.split(":");Mn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ne("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Xe.units[s]="px"});ze.registerPlugin(Wh);var qh=ze.registerPlugin(Wh)||ze;qh.core.Tween;const N3=new xl(1,16,16),F3=new _l(1.2,2,32),z3=new D1;function B3(){const s=new hr;for(const t of Lu){const e=new ha({map:z3.load(`textures/${t.texture}.jpg`)}),n=new vn(N3,e);t.name=="Saturn"&&n.add(new vn(F3.rotateX(Fn(63)),new ha({side:2,color:13615266}))),n.scale.setScalar(t.scale);const i=document.createElement("div");i.className="label",i.textContent=t.name;const r=new O1(i);r.position.set(0,1,0),r.center.set(.5,.5),n.add(r),s.add(n),t.mesh=n}return s}function j0(s){for(const t of Lu){const e=Bu(v2(t.name,s,!1));t.position=e;const n=new I;n.setFromSphericalCoords(t.distance*6.5,Fn(e.elat-90),Fn(e.elon)),qh.to(t.mesh.position,{x:n.x,y:n.y,z:n.z,duration:1})}}const k3=new Ss({color:805486,linewidth:1,transparent:!0,opacity:.5});new Ss({color:16777215,linewidth:1,transparent:!0,opacity:.3});new Ss({color:16711680,linewidth:1,transparent:!0,opacity:.2});function G3(s){const t=s.getDate(),e=s.getMonth()+1,n=s.getFullYear();return[t,e,n]}function $0(s){const t=new Date(s[2],s[1]-1,s[0]),e=t.getDate()+"-"+(t.getMonth()+1)+"-"+t.getFullYear();return{t,t_str:e}}const V3=new gl({color:16777215,size:.4}),H3=new gl({color:16711680,size:.8});Math.cos(Fn(60));Math.cos(Fn(30));Math.sin(Fn(60));Math.sin(Fn(30));function W3(){const s=new hr;for(const[t,e]of Object.entries(F1)){const n=[];for(const a of e.stars){const o=q3(a),l=X3(o),c=new I;n.push(c.setFromSphericalCoords(vl,Fn(l.elat-90),Fn(l.elon)))}const i=new je().setFromPoints(n);let r;if(e.lines){i.setIndex(e.lines.flat()),r=new p0(i,V3);const a=new Au(i,k3);s.add(a)}else r=new p0(i,H3);s.add(r)}return s.matrixAutoUpdate=!1,s.matrixWorldAutoUpdate=!1,s}function q3(s){return[15*s[0]+s[1]/4,s[2]+s[3]/60]}function X3(s){const t=new zu(s[1],s[0],100),e=qu(t,0);return Bu(e)}function Y3(s){const t=s-1;return t*t*t+1}function j3(s,{delay:t=0,duration:e=400,easing:n=Y3,axis:i="y"}={}){const r=getComputedStyle(s),a=+r.opacity,o=i==="y"?"height":"width",l=parseFloat(r[o]),c=i==="y"?["top","bottom"]:["left","right"],u=c.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),h=parseFloat(r[`padding${u[0]}`]),f=parseFloat(r[`padding${u[1]}`]),p=parseFloat(r[`margin${u[0]}`]),_=parseFloat(r[`margin${u[1]}`]),g=parseFloat(r[`border${u[0]}Width`]),m=parseFloat(r[`border${u[1]}Width`]);return{delay:t,duration:e,easing:n,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*a};${o}: ${d*l}px;padding-${c[0]}: ${d*h}px;padding-${c[1]}: ${d*f}px;margin-${c[0]}: ${d*p}px;margin-${c[1]}: ${d*_}px;border-${c[0]}-width: ${d*g}px;border-${c[1]}-width: ${d*m}px;`}}const{window:$3}=yf;function Z0(s){let t,e,n;return{c(){t=Yn("section"),Ce(t,"id","loading-screen"),Ce(t,"class","svelte-1cva7qy")},m(i,r){To(i,t,r),n=!0},i(i){n||(e&&e.end(1),n=!0)},o(i){e=Mf(t,j3,{y:-1e3,duration:2e3}),n=!1},d(i){i&&as(t),i&&e&&e.end()}}}function Z3(s){let t,e,n,i,r,a,o,l,c,u,h,f,p=!s[1]&&Z0();return{c(){p&&p.c(),t=Ua(),e=Yn("div"),n=Yn("input"),i=Yn("span"),i.textContent="/",r=Ua(),a=Yn("input"),o=Yn("span"),o.textContent="/",l=Ua(),c=Yn("input"),Ce(n,"class","short-num svelte-1cva7qy"),Ce(n,"type","number"),n.required=!0,Ce(n,"max","31"),Ce(n,"min","1"),Ce(a,"class","short-num svelte-1cva7qy"),Ce(a,"type","number"),a.required=!0,Ce(a,"max","12"),Ce(a,"min","1"),Ce(c,"class","long-num svelte-1cva7qy"),Ce(c,"type","number"),c.required=!0,Ce(c,"max","2050"),Ce(c,"min","1950"),Ce(e,"class","bottom-left svelte-1cva7qy")},m(_,g){p&&p.m(_,g),To(_,t,g),To(_,e,g),Xn(e,n),Bi(n,s[0][0]),Xn(e,i),Xn(e,r),Xn(e,a),Bi(a,s[0][1]),Xn(e,o),Xn(e,l),Xn(e,c),Bi(c,s[0][2]),u=!0,h||(f=[Ts($3,"resize",s[2]),Ts(n,"input",s[5]),Ts(a,"input",s[6]),Ts(c,"input",s[7])],h=!0)},p(_,[g]){_[1]?p&&(_f(),Xl(p,1,1,()=>{p=null}),xf()):p?g&2&&na(p,1):(p=Z0(),p.c(),na(p,1),p.m(t.parentNode,t)),g&1&&_r(n.value)!==_[0][0]&&Bi(n,_[0][0]),g&1&&_r(a.value)!==_[0][1]&&Bi(a,_[0][1]),g&1&&_r(c.value)!==_[0][2]&&Bi(c,_[0][2])},i(_){u||(na(p),u=!0)},o(_){Xl(p),u=!1},d(_){p&&p.d(_),_&&as(t),_&&as(e),h=!1,Ni(f)}}}function K3(s,t,e){let n=!1;const{renderer:i,css_renderer:r,scene:a,camera:o,controls:l}=B1();a.add(B3()),a.add(W3());let c=new Date,u=[];u=G3(c),j0(c);function h(){requestAnimationFrame(h),Zs(i,r,a,o)}h(),Cu.onLoad=function(){console.log("Loading Complete!"),setTimeout(()=>{e(1,n=!0)},1e3),Zs(i,r,a,o)},l.addEventListener("change",()=>{Zs(i,r,a,o)});const f=()=>{e(3,o.aspect=window.innerWidth/window.innerHeight,o),o.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),r.setSize(window.innerWidth,window.innerHeight)};function p(){u[0]=_r(this.value),e(0,u)}function _(){u[1]=_r(this.value),e(0,u)}function g(){u[2]=_r(this.value),e(0,u)}return s.$$.update=()=>{if(s.$$.dirty&25){e(4,c=$0(u).t);const m=u[0]+"-"+u[1]+"-"+u[2];c>0&&m===$0(u).t_str&&(j0(c),Zs(i,r,a,o))}},[u,n,f,o,c,p,_,g]}class J3 extends Ef{constructor(t){super(),Tf(this,t,K3,Z3,Kh,{})}}new J3({target:document.getElementById("app")});
