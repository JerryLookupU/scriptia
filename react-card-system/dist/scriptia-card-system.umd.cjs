(function(m,v){typeof exports=="object"&&typeof module<"u"?v(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],v):(m=typeof globalThis<"u"?globalThis:m||self,v(m.ScriptiaCardSystem={},m.React))})(this,function(m,v){"use strict";var Fr=Object.defineProperty;var Ar=(m,v,A)=>v in m?Fr(m,v,{enumerable:!0,configurable:!0,writable:!0,value:A}):m[v]=A;var Ye=(m,v,A)=>Ar(m,typeof v!="symbol"?v+"":v,A);const A={"9:16":{ratio:"9:16",width:200,height:300},"16:9":{ratio:"16:9",width:200,height:300,frontImageHeight:112},"1:1":{ratio:"1:1",width:200,height:200}},H={ip:{id:"ip",label:"IP角色",color:"#e8590c",gradient:"linear-gradient(135deg, #e8590c, #c2410c)",icon:"🎭",defaultRatio:"9:16"},scene:{id:"scene",label:"场景",color:"#2f9e44",gradient:"linear-gradient(135deg, #2f9e44, #2b8a3e)",icon:"🏙️",defaultRatio:"9:16"},plot:{id:"plot",label:"剧情",color:"#1971c2",gradient:"linear-gradient(135deg, #1971c2, #1864ab)",icon:"🎬",defaultRatio:"16:9"},meme:{id:"meme",label:"梗指南",color:"#be4bdb",gradient:"linear-gradient(135deg, #be4bdb, #9c36b5)",icon:"🚀",defaultRatio:"16:9"},product:{id:"product",label:"商品",color:"#f59e0b",gradient:"linear-gradient(135deg, #f59e0b, #d97706)",icon:"📦",defaultRatio:"1:1"},user:{id:"user",label:"用户",color:"#6366f1",gradient:"linear-gradient(135deg, #6366f1, #4f46e5)",icon:"👤",defaultRatio:"1:1"}};class We{constructor(){Ye(this,"types",new Map);Object.values(H).forEach(i=>{this.types.set(i.id,i)})}register(i){this.types.set(i.id,i)}get(i){return this.types.get(i)}getAll(){return Array.from(this.types.values())}has(i){return this.types.has(i)}}const oe=new We;function Y(a){return oe.get(a.typeId)||H.ip}var Z={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Me(){if(le)return W;le=1;var a=v,i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function w(p,g,E){var u,R={},b=null,C=null;E!==void 0&&(b=""+E),g.key!==void 0&&(b=""+g.key),g.ref!==void 0&&(C=g.ref);for(u in g)d.call(g,u)&&!k.hasOwnProperty(u)&&(R[u]=g[u]);if(p&&p.defaultProps)for(u in g=p.defaultProps,g)R[u]===void 0&&(R[u]=g[u]);return{$$typeof:i,type:p,key:b,ref:C,props:R,_owner:f.current}}return W.Fragment=o,W.jsx=w,W.jsxs=w,W}var M={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function Le(){return ce||(ce=1,process.env.NODE_ENV!=="production"&&function(){var a=v,i=Symbol.for("react.element"),o=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),p=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),P=Symbol.iterator,q="@@iterator";function Qe(e){if(e===null||typeof e!="object")return null;var t=P&&e[P]||e[q];return typeof t=="function"?t:null}var D=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];er("error",e,n)}}function er(e,t,n){{var s=D.ReactDebugCurrentFrame,x=s.getStackAddendum();x!==""&&(t+="%s",n=n.concat([x]));var h=n.map(function(c){return String(c)});h.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,h)}}var rr=!1,ar=!1,tr=!1,nr=!1,ir=!1,xe;xe=Symbol.for("react.module.reference");function sr(e){return!!(typeof e=="string"||typeof e=="function"||e===d||e===k||ir||e===f||e===E||e===u||nr||e===C||rr||ar||tr||typeof e=="object"&&e!==null&&(e.$$typeof===b||e.$$typeof===R||e.$$typeof===w||e.$$typeof===p||e.$$typeof===g||e.$$typeof===xe||e.getModuleId!==void 0))}function or(e,t,n){var s=e.displayName;if(s)return s;var x=t.displayName||t.name||"";return x!==""?n+"("+x+")":n}function me(e){return e.displayName||"Context"}function I(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case d:return"Fragment";case o:return"Portal";case k:return"Profiler";case f:return"StrictMode";case E:return"Suspense";case u:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var t=e;return me(t)+".Consumer";case w:var n=e;return me(n._context)+".Provider";case g:return or(e,e.render,"ForwardRef");case R:var s=e.displayName||null;return s!==null?s:I(e.type)||"Memo";case b:{var x=e,h=x._payload,c=x._init;try{return I(c(h))}catch{return null}}}return null}var z=Object.assign,V=0,he,ve,be,ye,je,ke,we;function Re(){}Re.__reactDisabledLog=!0;function lr(){{if(V===0){he=console.log,ve=console.info,be=console.warn,ye=console.error,je=console.group,ke=console.groupCollapsed,we=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Re,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function cr(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:z({},e,{value:he}),info:z({},e,{value:ve}),warn:z({},e,{value:be}),error:z({},e,{value:ye}),group:z({},e,{value:je}),groupCollapsed:z({},e,{value:ke}),groupEnd:z({},e,{value:we})})}V<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=D.ReactCurrentDispatcher,ee;function J(e,t,n){{if(ee===void 0)try{throw Error()}catch(x){var s=x.stack.trim().match(/\n( *(at )?)/);ee=s&&s[1]||""}return`
`+ee+e}}var re=!1,G;{var dr=typeof WeakMap=="function"?WeakMap:Map;G=new dr}function Ee(e,t){if(!e||re)return"";{var n=G.get(e);if(n!==void 0)return n}var s;re=!0;var x=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var h;h=Q.current,Q.current=null,lr();try{if(t){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(T){s=T}Reflect.construct(e,[],c)}else{try{c.call()}catch(T){s=T}e.call(c.prototype)}}else{try{throw Error()}catch(T){s=T}e()}}catch(T){if(T&&s&&typeof T.stack=="string"){for(var l=T.stack.split(`
`),N=s.stack.split(`
`),y=l.length-1,j=N.length-1;y>=1&&j>=0&&l[y]!==N[j];)j--;for(;y>=1&&j>=0;y--,j--)if(l[y]!==N[j]){if(y!==1||j!==1)do if(y--,j--,j<0||l[y]!==N[j]){var O=`
`+l[y].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,O),O}while(y>=1&&j>=0);break}}}finally{re=!1,Q.current=h,cr(),Error.prepareStackTrace=x}var B=e?e.displayName||e.name:"",F=B?J(B):"";return typeof e=="function"&&G.set(e,F),F}function ur(e,t,n){return Ee(e,!1)}function fr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function K(e,t,n){if(e==null)return"";if(typeof e=="function")return Ee(e,fr(e));if(typeof e=="string")return J(e);switch(e){case E:return J("Suspense");case u:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case g:return ur(e.render);case R:return K(e.type,t,n);case b:{var s=e,x=s._payload,h=s._init;try{return K(h(x),t,n)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,Ce={},_e=D.ReactDebugCurrentFrame;function X(e){if(e){var t=e._owner,n=K(e.type,e._source,t?t.type:null);_e.setExtraStackFrame(n)}else _e.setExtraStackFrame(null)}function pr(e,t,n,s,x){{var h=Function.call.bind($);for(var c in e)if(h(e,c)){var l=void 0;try{if(typeof e[c]!="function"){var N=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw N.name="Invariant Violation",N}l=e[c](t,c,s,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(y){l=y}l&&!(l instanceof Error)&&(X(x),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",n,c,typeof l),X(null)),l instanceof Error&&!(l.message in Ce)&&(Ce[l.message]=!0,X(x),_("Failed %s type: %s",n,l.message),X(null))}}}var gr=Array.isArray;function ae(e){return gr(e)}function xr(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function mr(e){try{return Ne(e),!1}catch{return!0}}function Ne(e){return""+e}function Te(e){if(mr(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",xr(e)),Ne(e)}var Oe=D.ReactCurrentOwner,hr={key:!0,ref:!0,__self:!0,__source:!0},Pe,Se;function vr(e){if($.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function br(e){if($.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function yr(e,t){typeof e.ref=="string"&&Oe.current}function jr(e,t){{var n=function(){Pe||(Pe=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function kr(e,t){{var n=function(){Se||(Se=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var wr=function(e,t,n,s,x,h,c){var l={$$typeof:i,type:e,key:t,ref:n,props:c,_owner:h};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:s}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function Rr(e,t,n,s,x){{var h,c={},l=null,N=null;n!==void 0&&(Te(n),l=""+n),br(t)&&(Te(t.key),l=""+t.key),vr(t)&&(N=t.ref,yr(t,x));for(h in t)$.call(t,h)&&!hr.hasOwnProperty(h)&&(c[h]=t[h]);if(e&&e.defaultProps){var y=e.defaultProps;for(h in y)c[h]===void 0&&(c[h]=y[h])}if(l||N){var j=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&jr(c,j),N&&kr(c,j)}return wr(e,l,N,x,s,Oe.current,c)}}var te=D.ReactCurrentOwner,Ie=D.ReactDebugCurrentFrame;function U(e){if(e){var t=e._owner,n=K(e.type,e._source,t?t.type:null);Ie.setExtraStackFrame(n)}else Ie.setExtraStackFrame(null)}var ne;ne=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function ze(){{if(te.current){var e=I(te.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Er(e){return""}var Fe={};function Cr(e){{var t=ze();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function Ae(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=Cr(t);if(Fe[n])return;Fe[n]=!0;var s="";e&&e._owner&&e._owner!==te.current&&(s=" It was passed a child from "+I(e._owner.type)+"."),U(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,s),U(null)}}function De(e,t){{if(typeof e!="object")return;if(ae(e))for(var n=0;n<e.length;n++){var s=e[n];ie(s)&&Ae(s,t)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var x=Qe(e);if(typeof x=="function"&&x!==e.entries)for(var h=x.call(e),c;!(c=h.next()).done;)ie(c.value)&&Ae(c.value,t)}}}function _r(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===g||t.$$typeof===R))n=t.propTypes;else return;if(n){var s=I(t);pr(n,e.props,"prop",s,e)}else if(t.PropTypes!==void 0&&!ne){ne=!0;var x=I(t);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Nr(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var s=t[n];if(s!=="children"&&s!=="key"){U(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",s),U(null);break}}e.ref!==null&&(U(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),U(null))}}var Ue={};function Be(e,t,n,s,x,h){{var c=sr(e);if(!c){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var N=Er();N?l+=N:l+=ze();var y;e===null?y="null":ae(e)?y="array":e!==void 0&&e.$$typeof===i?(y="<"+(I(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):y=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",y,l)}var j=Rr(e,t,n,x,h);if(j==null)return j;if(c){var O=t.children;if(O!==void 0)if(s)if(ae(O)){for(var B=0;B<O.length;B++)De(O[B],e);Object.freeze&&Object.freeze(O)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else De(O,e)}if($.call(t,"key")){var F=I(e),T=Object.keys(t).filter(function(zr){return zr!=="key"}),se=T.length>0?"{key: someKey, "+T.join(": ..., ")+": ...}":"{key: someKey}";if(!Ue[F+se]){var Ir=T.length>0?"{"+T.join(": ..., ")+": ...}":"{}";_(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,se,F,Ir,F),Ue[F+se]=!0}}return e===d?Nr(j):_r(j),j}}function Tr(e,t,n){return Be(e,t,n,!0)}function Or(e,t,n){return Be(e,t,n,!1)}var Pr=Or,Sr=Tr;M.Fragment=d,M.jsx=Pr,M.jsxs=Sr}()),M}process.env.NODE_ENV==="production"?Z.exports=Me():Z.exports=Le();var r=Z.exports;function de(...a){const i=[];for(const o of a)if(o){if(typeof o=="string")i.push(o);else if(typeof o=="object")for(const[d,f]of Object.entries(o))f&&i.push(d)}return i.join(" ")}const S=({variant:a="primary",size:i="default",className:o,children:d,...f})=>r.jsx("button",{className:de(i==="text"?"btn-text":"btn",a==="primary"?"btn-primary":"btn-secondary",o),...f,children:d}),L=({icon:a,title:i,onClick:o,...d})=>{const f=k=>{k.preventDefault(),k.stopPropagation(),o==null||o(k)};return r.jsx("button",{type:"button",className:"control-btn",title:i,onClick:f,...d,children:a})},ue=a=>r.jsx("button",{type:"button",className:"close-btn",...a,children:"✕"}),fe=({expanded:a,onClick:i,...o})=>{const d=f=>{f.stopPropagation(),i==null||i(f)};return r.jsx("button",{type:"button",className:"expand-btn",onClick:d,...o,children:a?"收起":"展开"})},pe=({gradient:a,icon:i,size:o="normal"})=>r.jsx("div",{className:"placeholder-img",style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:o==="large"?80:48,background:a,color:"rgba(255, 255, 255, 0.5)"},children:i||"?"}),Ve=({data:a,backTitle:i,backDescription:o,onDetail:d,onFlip:f})=>{const[k,w]=v.useState(!1),p=Y(a),g=a.imageRatio||"9:16",E=v.useCallback(()=>{w(C=>{const P=!C;return f==null||f(P),P})},[f]),u=v.useCallback(()=>{d==null||d(a)},[d,a]),R=i||"背面展示",b=o||"点击查看详情";return r.jsx("div",{className:`ratio-card-wrapper layout-${g.replace(":","-")} ${k?"flipped":""}`,children:r.jsxs("div",{className:"ratio-card-inner",children:[r.jsxs("div",{className:"ratio-card-front",children:[r.jsxs("div",{className:`front-image-area ratio-${g.replace(":","-")}`,children:[a.imageUrl?r.jsx("img",{src:a.imageUrl,alt:a.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx(pe,{gradient:p.gradient,icon:a.icon||p.icon}),r.jsx("span",{className:"type-badge",style:{background:p.gradient},children:p.label}),r.jsxs("div",{className:"card-controls",children:[r.jsx(L,{icon:"↻",title:"翻转",onClick:E}),r.jsx(L,{icon:"⋮",title:"详情",onClick:u})]}),g==="9:16"&&r.jsxs("div",{className:"content-overlay",children:[r.jsx("h3",{className:"card-name",children:a.name}),r.jsx("p",{className:"card-desc",children:a.description}),a.tags.length>0&&r.jsx("div",{className:"card-tags",children:a.tags.map((C,P)=>r.jsx("span",{className:"card-tag",children:C},P))})]})]}),g!=="9:16"&&r.jsxs("div",{className:`content-area-below ratio-${g.replace(":","-")}`,children:[r.jsx("span",{className:"content-type-badge",style:{background:`${p.color}20`,color:p.color},children:p.label}),r.jsx("h3",{className:"content-name",children:a.name}),r.jsx("p",{className:"content-desc",children:a.description}),a.meta&&Object.keys(a.meta).length>0&&r.jsx("div",{className:"content-meta",children:Object.entries(a.meta).map(([C,P],q)=>r.jsxs(v.Fragment,{children:[q>0&&r.jsx("span",{children:"·"}),r.jsx("span",{children:P})]},C))}),a.tags.length>0&&r.jsx("div",{className:"content-tags",children:a.tags.map((C,P)=>r.jsx("span",{className:"content-tag",children:C},P))})]})]}),r.jsx("div",{className:"ratio-card-back",children:r.jsxs("div",{className:"back-image-area",children:[a.backImageUrl?r.jsx("img",{src:a.backImageUrl,alt:`${a.name} - 背面`,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx(pe,{gradient:p.gradient,icon:a.icon||p.icon,size:"large"}),r.jsxs("div",{className:"card-controls",children:[r.jsx(L,{icon:"↺",title:"翻转",onClick:E}),r.jsx(L,{icon:"⋮",title:"详情",onClick:u})]}),r.jsxs("div",{className:"scene-context-overlay",children:[r.jsx("div",{className:"scene-context-title",children:R}),r.jsx("div",{className:"scene-context-desc",children:b})]})]})})]})})},$e=`
.card-collapsed-wrapper {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  width: fit-content;
  min-width: 320px;
  overflow: hidden;
}

.card-collapsed-wrapper.expanded {
  border-color: var(--border-light);
}

.card-collapsed {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.card-collapsed:hover {
  background: var(--bg-card-hover);
}

.card-collapsed-wrapper.expanded .card-collapsed {
  border-bottom: 1px solid var(--border);
}

/* 图片区域 - 三种比例 */
.collapsed-image-area {
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

/* 竖图 9:16 */
.collapsed-image-area.ratio-9-16 {
  width: 45px;
  height: 68px;
}

/* 横图 16:9 */
.collapsed-image-area.ratio-16-9 {
  width: 68px;
  height: 38px;
}

/* 方图 1:1 */
.collapsed-image-area.ratio-1-1 {
  width: 48px;
  height: 48px;
}

.collapsed-image-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-mini {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.mini-info {
  flex: 1;
  min-width: 0;
}

.mini-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-type {
  font-size: 11px;
  color: var(--text-muted);
}

.mini-ratio-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: var(--bg-dark);
  border-radius: 4px;
  color: var(--text-muted);
  margin-left: 8px;
}

.card-collapsed-expand {
  padding: 12px 14px;
  background: var(--bg-dark);
  display: none;
}

.card-collapsed-wrapper.expanded .card-collapsed-expand {
  display: block;
}

.expand-fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.expand-field {
  display: flex;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
}

.expand-field-label {
  color: var(--text-muted);
  flex-shrink: 0;
}

.expand-field-value {
  color: var(--text-secondary);
}

.expand-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.expand-tag {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  color: var(--text-secondary);
}

.expand-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}
`;if(typeof document<"u"){const a="collapsed-card-styles";if(!document.getElementById(a)){const i=document.createElement("style");i.id=a,i.textContent=$e,document.head.appendChild(i)}}const Je=({data:a,fields:i=[],onQuote:o,onEdit:d})=>{const[f,k]=v.useState(!1),w=Y(a),p=a.imageRatio||"9:16",g=v.useCallback(()=>{k(b=>!b)},[]),E=v.useCallback(b=>{b.stopPropagation(),o==null||o(a)},[o,a]),u=v.useCallback(b=>{b.stopPropagation(),d==null||d(a)},[d,a]),R={"9:16":"竖图","16:9":"横图","1:1":"方图"}[p];return r.jsxs("div",{className:`card-collapsed-wrapper ${f?"expanded":""}`,children:[r.jsxs("div",{className:"card-collapsed",onClick:g,children:[r.jsx("div",{className:`collapsed-image-area ratio-${p.replace(":","-")}`,children:a.imageUrl?r.jsx("img",{src:a.imageUrl,alt:a.name}):r.jsx("div",{className:"placeholder-mini",style:{background:w.gradient},children:a.icon||w.icon})}),r.jsxs("div",{className:"mini-info",children:[r.jsxs("div",{className:"mini-title",children:[a.name,r.jsx("span",{className:"mini-ratio-badge",children:R})]}),r.jsxs("div",{className:"mini-type",children:[w.label," · ",a.tags.join("/")]})]}),r.jsx(fe,{expanded:f,onClick:g})]}),r.jsxs("div",{className:"card-collapsed-expand",children:[i.length>0&&r.jsx("div",{className:"expand-fields",children:i.map((b,C)=>r.jsxs("div",{className:"expand-field",children:[r.jsxs("span",{className:"expand-field-label",children:[b.label,"："]}),r.jsx("span",{className:"expand-field-value",children:b.value})]},C))}),a.tags.length>0&&r.jsx("div",{className:"expand-tags",children:a.tags.map((b,C)=>r.jsx("span",{className:"expand-tag",children:b},C))}),r.jsxs("div",{className:"expand-actions",children:[r.jsx(S,{variant:"secondary",size:"text",onClick:E,children:"引用"}),r.jsx(S,{variant:"primary",size:"text",onClick:u,children:"编辑"})]})]})]})},Ge=`
.chat-message {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  max-width: 600px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #495057, #adb5bd);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-content {
  flex: 1;
}

.chat-sender {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.message-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-message);
}

.message-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
}

.message-card-header .type-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.message-card-header .card-title {
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  color: var(--text-primary);
}

.message-card-header .card-actions {
  display: flex;
  gap: 6px;
}

.message-card-body {
  padding: 12px;
}

.message-card-layout {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.message-card-layout .layout-image {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.message-card-layout .layout-image.ratio-1-1 {
  width: 80px;
  height: 80px;
}

.message-card-layout .layout-image.ratio-9-16 {
  width: 80px;
  height: 142px;
}

.message-card-layout .layout-image.ratio-16-9 {
  width: 142px;
  height: 80px;
}

.message-card-layout .layout-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
}

.message-card-bottom {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.message-card-footer {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
}
`;if(typeof document<"u"){const a="message-card-styles";if(!document.getElementById(a)){const i=document.createElement("style");i.id=a,i.textContent=Ge,document.head.appendChild(i)}}const Ke=({data:a,ratio:i,avatar:o="🤖",sender:d="Scriptia AI",additionalText:f,onQuote:k,onView:w,onCollapse:p,onAttachImage:g,onSave:E})=>{const u=Y(a),b=`ratio-${(i||a.imageRatio||"1:1").replace(":","-")}`;return r.jsxs("div",{className:"chat-message",children:[r.jsx("div",{className:"chat-avatar",children:o}),r.jsxs("div",{className:"chat-content",children:[r.jsx("div",{className:"chat-sender",children:d}),r.jsxs("div",{className:"message-card",children:[r.jsxs("div",{className:"message-card-header",children:[r.jsx("div",{className:"type-icon",style:{background:u.gradient},children:a.icon||u.icon}),r.jsx("span",{className:"card-title",children:a.name}),r.jsxs("div",{className:"card-actions",children:[r.jsx(S,{variant:"secondary",size:"text",onClick:()=>k==null?void 0:k(a),children:"引用"}),r.jsx(S,{variant:"primary",size:"text",onClick:()=>w==null?void 0:w(a),children:"查看"})]})]}),r.jsxs("div",{className:"message-card-body",children:[r.jsxs("div",{className:"message-card-layout",children:[r.jsx("div",{className:`layout-image ${b}`,style:{background:u.gradient,color:"rgba(255, 255, 255, 0.5)"},children:a.icon||u.icon}),r.jsx("div",{className:"layout-text",children:a.description})]}),f&&r.jsx("div",{className:"message-card-bottom",children:f})]}),r.jsxs("div",{className:"message-card-footer",children:[r.jsx(S,{variant:"secondary",size:"text",onClick:()=>p==null?void 0:p(a),children:"折叠"}),r.jsx(S,{variant:"secondary",size:"text",onClick:()=>g==null?void 0:g(a),children:"配图"}),r.jsx(S,{variant:"primary",size:"text",onClick:()=>E==null?void 0:E(a),children:"保存"})]})]})]})]})},Xe=`
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-dark);
  border-radius: var(--radius-3xl);
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--shadow-modal);
  border: 1px solid var(--border);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(90deg, rgba(73, 80, 87, 0.08), transparent);
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.modal-header .modal-actions {
  display: flex;
  gap: 8px;
}

.modal-body {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  padding: 20px;
}

/* Left: Image Area */
.modal-image-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-image-wrapper {
  width: 200px;
  height: 356px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border);
}

.prompt-box {
  padding: 10px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.prompt-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 6px;
  display: block;
}

.prompt-box textarea {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 12px;
  resize: none;
  height: 60px;
  outline: none;
  font-family: inherit;
}

.generate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background: #2d3436;
  border: none;
  border-radius: var(--radius-md);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.generate-btn:hover {
  background: #636e72;
}

.generate-btn:active {
  transform: scale(0.98);
}

/* Right: Info Area */
.modal-info-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-section {
  padding: 14px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
}

.info-section.priority {
  background: linear-gradient(135deg, rgba(73, 80, 87, 0.08), rgba(108, 117, 125, 0.04));
  border-color: rgba(73, 80, 87, 0.2);
}

.info-section h4 {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-section .editable-field {
  padding: 8px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: text;
  color: var(--text-primary);
}

.info-section .editable-field:hover {
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.info-section .editable-field:focus {
  border-color: #495057;
  background: rgba(73, 80, 87, 0.05);
  outline: none;
  box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.1);
}

.info-section .field-name {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}

.info-section .field-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.type-info-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--bg-dark);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.type-info-card .type-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.type-info-card .type-details h5 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.type-info-card .type-details p {
  font-size: 12px;
  color: var(--text-muted);
}

.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.field-box {
  padding: 10px;
  background: var(--bg-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.field-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 4px;
  display: block;
}

.field-box .field-value {
  font-size: 13px;
  color: var(--text-primary);
}

.tags-area {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f1f3f4;
  border-radius: 16px;
  font-size: 12px;
  color: #5f6368;
}

.tag-item .tag-remove {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.tag-item .tag-remove:hover {
  background: #f1f3f4;
  color: #5f6368;
}

.tag-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: #f1f3f4;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-add:hover {
  background: #e8eaed;
  color: #3c4043;
}

.tag-add:active {
  transform: scale(0.95);
}
`;if(typeof document<"u"){const a="modal-styles";if(!document.getElementById(a)){const i=document.createElement("style");i.id=a,i.textContent=Xe,document.head.appendChild(i)}}const He=({data:a,isOpen:i,onClose:o,onQuote:d,onSave:f,prompt:k="",fields:w=[]})=>{const p=Y(a),[g,E]=v.useState(k);return i?r.jsx("div",{className:"modal-overlay",onClick:o,children:r.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsxs("h3",{children:[r.jsx("span",{children:a.icon||p.icon})," 卡片详情"]}),r.jsxs("div",{className:"modal-actions",children:[r.jsx(S,{variant:"secondary",onClick:()=>d==null?void 0:d(a),children:"引用"}),r.jsx(S,{variant:"primary",onClick:()=>f==null?void 0:f(a),children:"保存"}),r.jsx(ue,{onClick:o})]})]}),r.jsxs("div",{className:"modal-body",children:[r.jsxs("div",{className:"modal-image-area",children:[r.jsx("div",{className:"modal-image-wrapper",children:a.imageUrl?r.jsx("img",{src:a.imageUrl,alt:a.name,style:{width:"100%",height:"100%",objectFit:"cover"}}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,background:p.gradient,color:"rgba(255, 255, 255, 0.5)"},children:a.icon||p.icon})}),r.jsxs("div",{className:"prompt-box",children:[r.jsx("label",{children:"💡 图片生成提示词"}),r.jsx("textarea",{placeholder:"输入提示词生成图片...",value:g,onChange:u=>E(u.target.value)})]}),r.jsx("button",{className:"generate-btn",children:"生成图片"})]}),r.jsxs("div",{className:"modal-info-area",children:[r.jsxs("div",{className:"info-section priority",children:[r.jsx("h4",{children:"📝 优先展示"}),r.jsx("div",{className:"editable-field field-name",contentEditable:!0,children:a.name}),r.jsx("div",{className:"editable-field field-desc",style:{marginTop:10},contentEditable:!0,children:a.description})]}),r.jsxs("div",{className:"type-info-card",children:[r.jsx("div",{className:"type-icon",style:{background:p.gradient},children:a.icon||p.icon}),r.jsxs("div",{className:"type-details",children:[r.jsx("h5",{children:p.label}),r.jsx("p",{children:"9:16 全身立绘"})]})]}),w.length>0&&r.jsxs("div",{className:"info-section",children:[r.jsx("h4",{children:"自定义字段"}),r.jsx("div",{className:"fields-grid",children:w.map((u,R)=>r.jsxs("div",{className:"field-box",children:[r.jsx("label",{children:u.label}),r.jsx("div",{className:"editable-field field-value",contentEditable:!0,children:u.value})]},R))})]}),r.jsxs("div",{className:"info-section",children:[r.jsx("h4",{children:"标签"}),r.jsxs("div",{className:"tags-area",children:[a.tags.map((u,R)=>r.jsxs("span",{className:"tag-item",children:[u,r.jsx("button",{className:"tag-remove",children:"×"})]},R)),r.jsx("button",{className:"tag-add",children:"+"})]})]})]})]})]})}):null},Ze=`
.input-area {
  background: var(--bg-dark);
  border-radius: var(--radius-xl);
  padding: 16px;
  border: 1px solid var(--border);
  margin-bottom: 24px;
}

.input-placeholder {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 12px;
}

.reference-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f1f3f4;
  border-radius: 20px;
  font-size: 12px;
  color: #5f6368;
  margin-right: 8px;
  margin-bottom: 8px;
}

.reference-tag .remove-btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  margin-left: 4px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.reference-tag .remove-btn:hover {
  background: #f1f3f4;
  color: #5f6368;
}
`;if(typeof document<"u"){const a="reference-tag-styles";if(!document.getElementById(a)){const i=document.createElement("style");i.id=a,i.textContent=Ze,document.head.appendChild(i)}}const ge=({icon:a,name:i,onRemove:o})=>r.jsxs("span",{className:"reference-tag",children:[r.jsx("span",{children:a}),i,r.jsx("button",{className:"remove-btn",onClick:o,children:"×"})]}),qe=({placeholder:a="输入消息或引用卡片...",tags:i=[],onRemoveTag:o})=>r.jsxs("div",{className:"input-area",children:[r.jsx("p",{className:"input-placeholder",children:a}),r.jsx("div",{children:i.map((d,f)=>r.jsx(ge,{icon:d.icon,name:d.name,onRemove:()=>o==null?void 0:o(f)},f))})]});m.BUILTIN_TYPES=H,m.Button=S,m.CardModal=He,m.CloseButton=ue,m.CollapsedCard=Je,m.ControlButton=L,m.ExpandButton=fe,m.InputReferenceArea=qe,m.MessageCard=Ke,m.RATIO_CONFIGS=A,m.RatioCard=Ve,m.ReferenceTag=ge,m.classNames=de,m.getCardTypeConfig=Y,m.typeRegistry=oe,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
