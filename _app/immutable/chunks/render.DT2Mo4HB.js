import{af as m,a4 as b,ag as D,R as k,z as C,ah as H,ai as M,V as P,aj as R,t as Y,l as j,m as B,ak as T,o as w,p as A,W as $,q as p,al as z,am as G,an as F,ao as J,ap as K,aq as Q,i as U,a0 as X,C as Z,k as S,G as x,c as rr}from"./runtime.D3-Cfn53.js";import{r as tr}from"./svelte-head.Cj4z6Gvh.js";import{b as ar}from"./disclose-version.CJCF0m0d.js";const er=["touchstart","touchmove"];function nr(r){return er.includes(r)}function ir(r){var t=D,e=k;m(null),b(null);try{return r()}finally{m(t),b(e)}}const V=new Set,L=new Set;function sr(r,t,e,o){function i(a){if(o.capture||y.call(t,a),!a.cancelBubble)return ir(()=>e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?H(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function cr(r,t,e,o,i){var a={capture:o,passive:i},u=sr(r,t,e,a);(t===document.body||t===window||t===document)&&C(()=>{t.removeEventListener(r,u,a)})}function dr(r){for(var t=0;t<r.length;t++)V.add(r[t]);for(var e of L)e(r)}function y(r){var O;var t=this,e=t.ownerDocument,o=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],a=i[0]||r.target,u=0,_=r.__root;if(_){var c=i.indexOf(_);if(c!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;c<=h&&(u=c)}if(a=i[u]||r.target,a!==t){M(r,"currentTarget",{configurable:!0,get(){return a||e}});var E=D,f=k;m(null),b(null);try{for(var n,s=[];a!==null;){var l=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!==void 0&&!a.disabled)if(P(d)){var[I,...W]=d;I.apply(a,[r,...W])}else d.call(a,r)}catch(g){n?s.push(g):n=g}if(r.cancelBubble||l===t||l===null)break;a=l}if(n){for(let g of s)queueMicrotask(()=>{throw g});throw n}}finally{r.__root=t,delete r.currentTarget,m(E),b(f)}}}function _r(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e==null?"":e+"")}function or(r,t){return q(r,t)}function hr(r,t){R(),t.intro=t.intro??!1;const e=t.target,o=S,i=p;try{for(var a=Y(e);a&&(a.nodeType!==8||a.data!==j);)a=B(a);if(!a)throw T;w(!0),A(a),$();const u=q(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==z)throw G(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&F(),R(),J(e),w(!1),or(r,t);throw u}finally{w(o),A(i),tr()}}const v=new Map;function q(r,{target:t,anchor:e,props:o={},events:i,context:a,intro:u=!0}){R();var _=new Set,c=f=>{for(var n=0;n<f.length;n++){var s=f[n];if(!_.has(s)){_.add(s);var l=nr(s);t.addEventListener(s,y,{passive:l});var d=v.get(s);d===void 0?(document.addEventListener(s,y,{passive:l}),v.set(s,1)):v.set(s,d+1)}}};c(K(V)),L.add(c);var h=void 0,E=Q(()=>{var f=e??t.appendChild(U());return X(()=>{if(a){Z({});var n=rr;n.c=a}i&&(o.$$events=i),S&&ar(f,null),h=r(f,o)||{},S&&(k.nodes_end=p),a&&x()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var s=v.get(n);--s===0?(document.removeEventListener(n,y),v.delete(n)):v.set(n,s)}L.delete(c),f!==e&&((l=f.parentNode)==null||l.removeChild(f))}});return N.set(h,E),h}let N=new WeakMap;function vr(r,t){const e=N.get(r);return e?(N.delete(r),e(t)):Promise.resolve()}export{dr as d,cr as e,hr as h,or as m,_r as s,vr as u};