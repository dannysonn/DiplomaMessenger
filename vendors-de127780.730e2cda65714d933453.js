"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[381],{4686:(e,t,n)=>{n.d(t,{u:()=>U});var r=n(5773),o=n(808),l=n(7363),s=n(7048),i=n(3207);var a=n(624);function c(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}function u(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}const d=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function f(e){var t;const{elementType:n,externalSlotProps:l,ownerState:f,skipResolvingSlotProps:p=!1}=e,h=(0,o.Z)(e,d),m=p?{}:function(e,t,n){return"function"==typeof e?e(t,n):e}(l,f),{props:b,internalRef:v}=function(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:l,className:s}=e;if(!t){const e=(0,a.Z)(null==n?void 0:n.className,s,null==l?void 0:l.className,null==o?void 0:o.className),t=(0,r.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),i=(0,r.Z)({},n,l,o);return e.length>0&&(i.className=e),Object.keys(t).length>0&&(i.style=t),{props:i,internalRef:void 0}}const i=c((0,r.Z)({},l,o)),d=u(o),f=u(l),p=t(i),h=(0,a.Z)(null==p?void 0:p.className,null==n?void 0:n.className,s,null==l?void 0:l.className,null==o?void 0:o.className),m=(0,r.Z)({},null==p?void 0:p.style,null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),b=(0,r.Z)({},p,n,f,d);return h.length>0&&(b.className=h),Object.keys(m).length>0&&(b.style=m),{props:b,internalRef:p.ref}}((0,r.Z)({},h,{externalSlotProps:m})),y=(0,s.Z)(v,null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref),g=function(e,t,n){return void 0===e||(0,i.X)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}(n,(0,r.Z)({},b,{ref:y}),f);return g}var p=n(4246);const h={disableDefaultClasses:!1},m=l.createContext(h);var b=n(2267),v=n(1542),y=n(6858),g=n(514);const x=l.forwardRef((function(e,t){const{children:n,container:r,disablePortal:o=!1}=e,[i,a]=l.useState(null),c=(0,s.Z)(l.isValidElement(n)?n.ref:null,t);if((0,y.Z)((()=>{o||a(function(e){return"function"==typeof e?e():e}(r)||document.body)}),[r,o]),(0,y.Z)((()=>{if(i&&!o)return(0,g.Z)(t,i),()=>{(0,g.Z)(t,null)}}),[t,i,o]),o){if(l.isValidElement(n)){const e={ref:c};return l.cloneElement(n,e)}return(0,p.jsx)(l.Fragment,{children:n})}return(0,p.jsx)(l.Fragment,{children:i?v.createPortal(n,i):i})}));var E=n(668),R=n(1925),Z=n(6397),k=n(3205),w=n(3268);function S(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function T(e){return parseInt((0,k.Z)(e).getComputedStyle(e).paddingRight,10)||0}function P(e,t,n,r,o){const l=[t,n,...r];[].forEach.call(e.children,(e=>{const t=-1===l.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&S(e,o)}))}function N(e,t){let n=-1;return e.some(((e,r)=>!!t(e)&&(n=r,!0))),n}function C(e,t){const n=[],r=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,E.Z)(e);return t.body===e?(0,k.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){const e=(0,w.Z)((0,E.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${T(r)+e}px`;const t=(0,E.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${T(t)+e}px`}))}let e;if(r.parentNode instanceof DocumentFragment)e=(0,E.Z)(r).body;else{const t=r.parentElement,n=(0,k.Z)(r);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const A=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&S(e.modalRef,!1);const r=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);P(t,e.mount,e.modalRef,r,!0);const o=N(this.containers,(e=>e.container===t));return-1!==o?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n)}mount(e,t){const n=N(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];r.restore||(r.restore=C(r,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const r=N(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&S(e.modalRef,t),P(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&S(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};function F(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=A,closeAfterTransition:a=!1,onTransitionEnter:u,onTransitionExited:d,children:f,onClose:p,open:h,rootRef:m}=e,b=l.useRef({}),v=l.useRef(null),y=l.useRef(null),g=(0,s.Z)(y,m),[x,k]=l.useState(!h),w=function(e){return!!e&&e.props.hasOwnProperty("in")}(f);let T=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(T=!1);const P=()=>(b.current.modalRef=y.current,b.current.mount=v.current,b.current),N=()=>{i.mount(P(),{disableScrollLock:o}),y.current&&(y.current.scrollTop=0)},C=(0,R.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||(0,E.Z)(v.current).body;i.add(P(),e),y.current&&N()})),F=l.useCallback((()=>i.isTopModal(P())),[i]),I=(0,R.Z)((e=>{v.current=e,e&&(h&&F()?N():y.current&&S(y.current,T))})),O=l.useCallback((()=>{i.remove(P(),T)}),[T,i]);l.useEffect((()=>()=>{O()}),[O]),l.useEffect((()=>{h?C():w&&a||O()}),[h,O,w,a,C]);const M=e=>t=>{var r;null==(r=e.onKeyDown)||r.call(e,t),"Escape"===t.key&&229!==t.which&&F()&&(n||(t.stopPropagation(),p&&p(t,"escapeKeyDown")))},L=e=>t=>{var n;null==(n=e.onClick)||n.call(e,t),t.target===t.currentTarget&&p&&p(t,"backdropClick")};return{getRootProps:(t={})=>{const n=c(e);delete n.onTransitionEnter,delete n.onTransitionExited;const o=(0,r.Z)({},n,t);return(0,r.Z)({role:"presentation"},o,{onKeyDown:M(o),ref:g})},getBackdropProps:(e={})=>{const t=e;return(0,r.Z)({"aria-hidden":!0},t,{onClick:L(t),open:h})},getTransitionProps:()=>({onEnter:(0,Z.Z)((()=>{k(!1),u&&u()}),null==f?void 0:f.props.onEnter),onExited:(0,Z.Z)((()=>{k(!0),d&&d(),a&&O()}),null==f?void 0:f.props.onExited)}),rootRef:g,portalRef:I,isTopModal:F,exited:x,hasTransition:w}}const I=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function O(e){const t=[],n=[];return Array.from(e.querySelectorAll(I)).forEach(((e,r)=>{const o=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==o&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function M(){return!0}function L(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=O,isEnabled:a=M,open:c}=e,u=l.useRef(!1),d=l.useRef(null),f=l.useRef(null),h=l.useRef(null),m=l.useRef(null),b=l.useRef(!1),v=l.useRef(null),y=(0,s.Z)(t.ref,v),g=l.useRef(null);l.useEffect((()=>{c&&v.current&&(b.current=!n)}),[n,c]),l.useEffect((()=>{if(!c||!v.current)return;const e=(0,E.Z)(v.current);return v.current.contains(e.activeElement)||(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex","-1"),b.current&&v.current.focus()),()=>{o||(h.current&&h.current.focus&&(u.current=!0,h.current.focus()),h.current=null)}}),[c]),l.useEffect((()=>{if(!c||!v.current)return;const e=(0,E.Z)(v.current),t=t=>{g.current=t,!r&&a()&&"Tab"===t.key&&e.activeElement===v.current&&t.shiftKey&&(u.current=!0,f.current&&f.current.focus())},n=()=>{const t=v.current;if(null===t)return;if(!e.hasFocus()||!a()||u.current)return void(u.current=!1);if(t.contains(e.activeElement))return;if(r&&e.activeElement!==d.current&&e.activeElement!==f.current)return;if(e.activeElement!==m.current)m.current=null;else if(null!==m.current)return;if(!b.current)return;let n=[];if(e.activeElement!==d.current&&e.activeElement!==f.current||(n=i(v.current)),n.length>0){var o,l;const e=Boolean((null==(o=g.current)?void 0:o.shiftKey)&&"Tab"===(null==(l=g.current)?void 0:l.key)),t=n[0],r=n[n.length-1];"string"!=typeof t&&"string"!=typeof r&&(e?r.focus():t.focus())}else t.focus()};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const o=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[n,r,o,a,c,i]);const x=e=>{null===h.current&&(h.current=e.relatedTarget),b.current=!0};return(0,p.jsxs)(l.Fragment,{children:[(0,p.jsx)("div",{tabIndex:c?0:-1,onFocus:x,ref:d,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:y,onFocus:e=>{null===h.current&&(h.current=e.relatedTarget),b.current=!0,m.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,p.jsx)("div",{tabIndex:c?0:-1,onFocus:x,ref:f,"data-testid":"sentinelEnd"})]})}var j=n(4124),D=n(6749);function H(e){return(0,D.Z)("MuiModal",e)}(0,j.Z)("MuiModal",["root","hidden","backdrop"]);const B=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],K=e=>{const{open:t,exited:n}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,b.Z)(r,function(e){const{disableDefaultClasses:t}=l.useContext(m);return n=>t?"":e(n)}(H))},U=l.forwardRef((function(e,t){var n;const{children:s,closeAfterTransition:i=!1,container:a,disableAutoFocus:c=!1,disableEnforceFocus:u=!1,disableEscapeKeyDown:d=!1,disablePortal:h=!1,disableRestoreFocus:m=!1,disableScrollLock:b=!1,hideBackdrop:v=!1,keepMounted:y=!1,onBackdropClick:g,open:E,slotProps:R={},slots:Z={}}=e,k=(0,o.Z)(e,B),w=(0,r.Z)({},e,{closeAfterTransition:i,disableAutoFocus:c,disableEnforceFocus:u,disableEscapeKeyDown:d,disablePortal:h,disableRestoreFocus:m,disableScrollLock:b,hideBackdrop:v,keepMounted:y}),{getRootProps:S,getBackdropProps:T,getTransitionProps:P,portalRef:N,isTopModal:C,exited:A,hasTransition:I}=F((0,r.Z)({},w,{rootRef:t})),O=(0,r.Z)({},w,{exited:A,hasTransition:I}),M=K(O),j={};if(void 0===s.props.tabIndex&&(j.tabIndex="-1"),I){const{onEnter:e,onExited:t}=P();j.onEnter=e,j.onExited=t}const D=null!=(n=Z.root)?n:"div",H=f({elementType:D,externalSlotProps:R.root,externalForwardedProps:k,getSlotProps:S,className:M.root,ownerState:O}),U=Z.backdrop,z=f({elementType:U,externalSlotProps:R.backdrop,getSlotProps:e=>T((0,r.Z)({},e,{onClick:t=>{g&&g(t),null!=e&&e.onClick&&e.onClick(t)}})),className:M.backdrop,ownerState:O});return y||E||I&&!A?(0,p.jsx)(x,{ref:N,container:a,disablePortal:h,children:(0,p.jsxs)(D,(0,r.Z)({},H,{children:[!v&&U?(0,p.jsx)(U,(0,r.Z)({},z)):null,(0,p.jsx)(L,{disableEnforceFocus:u,disableAutoFocus:c,disableRestoreFocus:m,isEnabled:C,open:E,children:l.cloneElement(s,j)})]}))}):null}))},3565:(e,t,n)=>{n.d(t,{u:()=>b});var r=n(5773),o=n(808),l=n(7363),s=n(1542),i=n(7048),a=n(3205),c=n(6858),u=n(4384),d=n(4246);const f=["onChange","maxRows","minRows","style","value"];function p(e){return parseInt(e,10)||0}const h={visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"};function m(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}const b=l.forwardRef((function(e,t){const{onChange:n,maxRows:b,minRows:v=1,style:y,value:g}=e,x=(0,o.Z)(e,f),{current:E}=l.useRef(null!=g),R=l.useRef(null),Z=(0,i.Z)(t,R),k=l.useRef(null),w=l.useRef(0),[S,T]=l.useState({outerHeightStyle:0}),P=l.useCallback((()=>{const t=R.current,n=(0,a.Z)(t).getComputedStyle(t);if("0px"===n.width)return{outerHeightStyle:0};const r=k.current;r.style.width=n.width,r.value=t.value||e.placeholder||"x","\n"===r.value.slice(-1)&&(r.value+=" ");const o=n.boxSizing,l=p(n.paddingBottom)+p(n.paddingTop),s=p(n.borderBottomWidth)+p(n.borderTopWidth),i=r.scrollHeight;r.value="x";const c=r.scrollHeight;let u=i;v&&(u=Math.max(Number(v)*c,u)),b&&(u=Math.min(Number(b)*c,u)),u=Math.max(u,c);return{outerHeightStyle:u+("border-box"===o?l+s:0),overflow:Math.abs(u-i)<=1}}),[b,v,e.placeholder]),N=(e,t)=>{const{outerHeightStyle:n,overflow:r}=t;return w.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(w.current+=1,{overflow:r,outerHeightStyle:n}):e},C=l.useCallback((()=>{const e=P();m(e)||T((t=>N(t,e)))}),[P]);(0,c.Z)((()=>{const e=()=>{w.current=0,(()=>{const e=P();m(e)||s.flushSync((()=>{T((t=>N(t,e)))}))})()};let t;const n=(0,u.Z)(e),r=R.current,o=(0,a.Z)(r);let l;return o.addEventListener("resize",n),"undefined"!=typeof ResizeObserver&&(l=new ResizeObserver(e),l.observe(r)),()=>{n.clear(),cancelAnimationFrame(t),o.removeEventListener("resize",n),l&&l.disconnect()}}),[P]),(0,c.Z)((()=>{C()})),l.useEffect((()=>{w.current=0}),[g]);return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)("textarea",(0,r.Z)({value:g,onChange:e=>{w.current=0,E||C(),n&&n(e)},ref:Z,rows:v,style:(0,r.Z)({height:S.outerHeightStyle,overflow:S.overflow?"hidden":void 0},y)},x)),(0,d.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:k,tabIndex:-1,style:(0,r.Z)({},h,y,{paddingTop:0,paddingBottom:0})})]})}))},3207:(e,t,n)=>{function r(e){return"string"==typeof e}n.d(t,{X:()=>r})}}]);