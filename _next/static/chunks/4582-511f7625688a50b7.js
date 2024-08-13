"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4582],{95638:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(24421),o=r(67629),a=r(51516);function i(e,t){(0,a.Z)(2,arguments);var r=(0,o.Z)(e),i=(0,o.Z)(t);return Math.round((r.getTime()-(0,n.Z)(r)-(i.getTime()-(0,n.Z)(i)))/864e5)}},26430:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(28734),o=r(51516);function a(e,t){return(0,o.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(t).getTime()}},21508:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(28734),o=r(51516);function a(e){(0,o.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(23,59,59,999),t}},12654:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(21508);function o(){return(0,n.Z)(Date.now())}},44043:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(28734),o=r(51516);function a(e){return(0,o.Z)(1,arguments),(0,n.Z)(e).getMonth()}},82187:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(28734),o=r(51516);function a(e){return(0,o.Z)(1,arguments),(0,n.Z)(e).getFullYear()}},69262:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(28734),o=r(51516);function a(e){return(0,o.Z)(1,arguments),function(e,t){(0,o.Z)(2,arguments);var r=(0,n.Z)(e),a=(0,n.Z)(t);return r.getFullYear()===a.getFullYear()}(e,Date.now())}},75592:function(e,t,r){r.d(t,{ZP:function(){return l}});var n=r(57869),o=r(37088),a=r(92379),i=r(72895);r(93865),r(95295),r(82845);var l=(0,a.forwardRef)(function(e,t){var r=(0,n.u)(e);return a.createElement(i.S,(0,o.Z)({ref:t},r))})},44944:function(e,t,r){r.d(t,{Dx:function(){return B},aU:function(){return X},fC:function(){return H},l_:function(){return Y},x8:function(){return z},zt:function(){return q}});var n=r(37088),o=r(92379),a=r(95295),i=r(10132),l=r(59246),u=r(26671),s=r(31541),c=r(13137),d=r(32242),p=r(79813),f=r(52125),m=r(2372),y=r(48758),v=r(83282),w=r(12598);let E="ToastProvider",[g,b,T]=(0,u.B)("Toast"),[h,x]=(0,s.b)("Toast",[T]),[C,F]=h(E),R=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:l}=e,[u,s]=(0,o.useState)(null),[c,d]=(0,o.useState)(0),p=(0,o.useRef)(!1),f=(0,o.useRef)(!1);return(0,o.createElement)(g.Provider,{scope:t},(0,o.createElement)(C,{scope:t,label:r,duration:n,swipeDirection:a,swipeThreshold:i,toastCount:c,viewport:u,onViewportChange:s,onToastAdd:(0,o.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,o.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f},l))};R.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${E}\`. Expected non-empty \`string\`.`):null};let k=["F8"],S="toast.viewportPause",P="toast.viewportResume",Z=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:a=k,label:i="Notifications ({hotkey})",...u}=e,s=F("ToastViewport",r),d=b(r),p=(0,o.useRef)(null),m=(0,o.useRef)(null),y=(0,o.useRef)(null),v=(0,o.useRef)(null),w=(0,l.e)(t,v,s.onViewportChange),E=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=s.toastCount>0;(0,o.useEffect)(()=>{let e=e=>{var t;a.every(t=>e[t]||e.code===t)&&(null===(t=v.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,o.useEffect)(()=>{let e=p.current,t=v.current;if(T&&e&&t){let r=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(S);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},n=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(P);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[T,s.isClosePausedRef]);let h=(0,o.useCallback)(({tabbingDirection:e})=>{let t=d().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[d]);return(0,o.useEffect)(()=>{let e=v.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,a;let r=document.activeElement,i=t.shiftKey;if(t.target===e&&i){null===(n=m.current)||void 0===n||n.focus();return}let l=h({tabbingDirection:i?"backwards":"forwards"}),u=l.findIndex(e=>e===r);V(l.slice(u+1))?t.preventDefault():i?null===(o=m.current)||void 0===o||o.focus():null===(a=y.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,h]),(0,o.createElement)(c.I0,{ref:p,role:"region","aria-label":i.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:T?void 0:"none"}},T&&(0,o.createElement)(D,{ref:m,onFocusFromOutsideViewport:()=>{V(h({tabbingDirection:"forwards"}))}}),(0,o.createElement)(g.Slot,{scope:r},(0,o.createElement)(f.WV.ol,(0,n.Z)({tabIndex:-1},u,{ref:w}))),T&&(0,o.createElement)(D,{ref:y,onFocusFromOutsideViewport:()=>{V(h({tabbingDirection:"backwards"}))}}))}),D=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:a,...i}=e,l=F("ToastFocusProxy",r);return(0,o.createElement)(w.T,(0,n.Z)({"aria-hidden":!0,tabIndex:0},i,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=l.viewport)&&void 0!==t&&t.contains(r)||a()}}))}),N="Toast",I=(0,o.forwardRef)((e,t)=>{let{forceMount:r,open:a,defaultOpen:l,onOpenChange:u,...s}=e,[c=!0,d]=(0,y.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(p.z,{present:r||c},(0,o.createElement)(M,(0,n.Z)({open:c},s,{ref:t,onClose:()=>d(!1),onPause:(0,m.W)(e.onPause),onResume:(0,m.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[L,j]=h(N,{onClose(){}}),M=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,type:u="foreground",duration:s,open:d,onClose:p,onEscapeKeyDown:y,onPause:v,onResume:w,onSwipeStart:E,onSwipeMove:b,onSwipeCancel:T,onSwipeEnd:h,...x}=e,C=F(N,r),[R,k]=(0,o.useState)(null),Z=(0,l.e)(t,e=>k(e)),D=(0,o.useRef)(null),I=(0,o.useRef)(null),j=s||C.duration,M=(0,o.useRef)(0),_=(0,o.useRef)(j),O=(0,o.useRef)(0),{onToastAdd:$,onToastRemove:U}=C,V=(0,m.W)(()=>{var e;(null==R?void 0:R.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),p()}),q=(0,o.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(O.current),M.current=new Date().getTime(),O.current=window.setTimeout(V,e))},[V]);(0,o.useEffect)(()=>{let e=C.viewport;if(e){let t=()=>{q(_.current),null==w||w()},r=()=>{let e=new Date().getTime()-M.current;_.current=_.current-e,window.clearTimeout(O.current),null==v||v()};return e.addEventListener(S,r),e.addEventListener(P,t),()=>{e.removeEventListener(S,r),e.removeEventListener(P,t)}}},[C.viewport,j,v,w,q]),(0,o.useEffect)(()=>{d&&!C.isClosePausedRef.current&&q(j)},[d,j,C.isClosePausedRef,q]),(0,o.useEffect)(()=>($(),()=>U()),[$,U]);let Y=(0,o.useMemo)(()=>R?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(R):null,[R]);return C.viewport?(0,o.createElement)(o.Fragment,null,Y&&(0,o.createElement)(A,{__scopeToast:r,role:"status","aria-live":"foreground"===u?"assertive":"polite","aria-atomic":!0},Y),(0,o.createElement)(L,{scope:r,onClose:V},(0,a.createPortal)((0,o.createElement)(g.ItemSlot,{scope:r},(0,o.createElement)(c.fC,{asChild:!0,onEscapeKeyDown:(0,i.M)(y,()=>{C.isFocusedToastEscapeKeyDownRef.current||V(),C.isFocusedToastEscapeKeyDownRef.current=!1})},(0,o.createElement)(f.WV.li,(0,n.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":C.swipeDirection},x,{ref:Z,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==y||y(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,V()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(D.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!D.current)return;let t=e.clientX-D.current.x,r=e.clientY-D.current.y,n=!!I.current,o=["left","right"].includes(C.swipeDirection),a=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,i=o?a(0,t):0,l=o?0:a(0,r),u="touch"===e.pointerType?10:2,s={x:i,y:l},c={originalEvent:e,delta:s};n?(I.current=s,K("toast.swipeMove",b,c,{discrete:!1})):W(s,C.swipeDirection,u)?(I.current=s,K("toast.swipeStart",E,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>u||Math.abs(r)>u)&&(D.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=I.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),I.current=null,D.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};W(t,C.swipeDirection,C.swipeThreshold)?K("toast.swipeEnd",h,n,{discrete:!0}):K("toast.swipeCancel",T,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),C.viewport))):null});M.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${N}\`. Expected \`foreground | background\`.`):null};let A=e=>{let{__scopeToast:t,children:r,...n}=e,a=F(N,t),[i,l]=(0,o.useState)(!1),[u,s]=(0,o.useState)(!1);return function(e=()=>{}){let t=(0,m.W)(e);(0,v.b)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>l(!0)),(0,o.useEffect)(()=>{let e=window.setTimeout(()=>s(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,o.createElement)(d.h,{asChild:!0},(0,o.createElement)(w.T,n,i&&(0,o.createElement)(o.Fragment,null,a.label," ",r)))},_=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e;return(0,o.createElement)(f.WV.div,(0,n.Z)({},a,{ref:t}))}),O=(0,o.forwardRef)((e,t)=>{let{altText:r,...a}=e;return r?(0,o.createElement)(U,{altText:r,asChild:!0},(0,o.createElement)($,(0,n.Z)({},a,{ref:t}))):null});O.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let $=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,...a}=e,l=j("ToastClose",r);return(0,o.createElement)(U,{asChild:!0},(0,o.createElement)(f.WV.button,(0,n.Z)({type:"button"},a,{ref:t,onClick:(0,i.M)(e.onClick,l.onClose)})))}),U=(0,o.forwardRef)((e,t)=>{let{__scopeToast:r,altText:a,...i}=e;return(0,o.createElement)(f.WV.div,(0,n.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0},i,{ref:t}))});function K(e,t,r,{discrete:n}){let o=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,f.jH)(o,a):o.dispatchEvent(a)}let W=(e,t,r=0)=>{let n=Math.abs(e.x),o=Math.abs(e.y),a=n>o;return"left"===t||"right"===t?a&&n>r:!a&&o>r};function V(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let q=R,Y=Z,H=I,B=_,X=O,z=$},157:function(e,t,r){r.d(t,{S:function(){return c}});var n=r(92379),o=r(10542);let a=(0,n.createContext)(null);var i=r(9321);let l=e=>!e.isLayoutDirty&&e.willUpdate(!1),u=e=>!0===e,s=e=>u(!0===e)||"id"===e,c=({children:e,id:t,inherit:r=!0})=>{let c=(0,n.useContext)(o.p),d=(0,n.useContext)(a),[p,f]=(0,i.N)(),m=(0,n.useRef)(null),y=c.id||d;null===m.current&&(s(r)&&y&&(t=t?y+"-"+t:y),m.current={id:t,group:u(r)&&c.group||function(){let e=new Set,t=new WeakMap,r=()=>e.forEach(l);return{add:n=>{e.add(n),t.set(n,n.addEventListener("willUpdate",r))},remove:n=>{e.delete(n);let o=t.get(n);o&&(o(),t.delete(n)),r()},dirty:r}}()});let v=(0,n.useMemo)(()=>({...m.current,forceRender:p}),[f]);return n.createElement(o.p.Provider,{value:v},e)}},76580:function(e,t,r){r.d(t,{Z:function(){return x}});var n={};r.r(n),r.d(n,{exclude:function(){return h},extract:function(){return v},parse:function(){return w},parseUrl:function(){return g},pick:function(){return T},stringify:function(){return E},stringifyUrl:function(){return b}});let o="%[a-f0-9]{2}",a=RegExp("("+o+")|([^%]+?)","gi"),i=RegExp("("+o+")+","gi");function l(e,t){if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let u=e=>null==e,s=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),c=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function p(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function f(e,t){return t.decode?function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){let t={"%FE%FF":"��","%FF%FE":"��"},r=i.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(a)||[];for(let r=1;r<t.length;r++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let n=t.slice(0,r),o=t.slice(r);return Array.prototype.concat.call([],e(n),e(o))})(t,r).join("")).match(a)||[];return e}}(r[0]);e!==r[0]&&(t[r[0]]=e)}r=i.exec(e)}for(let r of(t["%C2"]="�",Object.keys(t)))e=e.replace(RegExp(r,"g"),t[r]);return e}(e)}}(e):e}function m(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function y(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function v(e){let t=(e=m(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function w(e,t){d((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[...n[e],r]};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[...n[e],r]};case"comma":case"separator":return(t,r,n)=>{let o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&f(r,e).includes(e.arrayFormatSeparator);r=a?f(r,e):r;let i=o||a?r.split(e.arrayFormatSeparator).map(t=>f(t,e)):null===r?r:f(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{let o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o){n[t]=r?f(r,e):r;return}let a=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>f(t,e));if(void 0===n[t]){n[t]=a;return}n[t]=[...n[t],...a]};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[...[r[e]].flat(),t]}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let o of e.split("&")){if(""===o)continue;let e=t.decode?o.replace(/\+/g," "):o,[a,i]=l(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:f(i,t),r(f(a,t),i,n)}for(let[e,r]of Object.entries(n))if("object"==typeof r&&null!==r)for(let[e,n]of Object.entries(r))r[e]=y(n,t);else n[e]=y(r,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}function E(e,t){if(!e)return"";d((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&u(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[p(t,e),"[",o,"]"].join("")]:[...r,[p(t,e),"[",p(o,e),"]=",p(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[p(t,e),"[]"].join("")]:[...r,[p(t,e),"[]=",p(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[p(t,e),":list="].join("")]:[...r,[p(t,e),":list=",p(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length)?[[p(r,e),t,p(o,e)].join("")]:[[n,p(o,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,p(t,e)]:[...r,[p(t,e),"=",p(n,e)].join("")]}}(t),o={};for(let[t,n]of Object.entries(e))r(t)||(o[t]=n);let a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{let o=e[r];return void 0===o?"":null===o?p(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?p(r,t)+"[]":o.reduce(n(r),[]).join("&"):p(r,t)+"="+p(o,t)}).filter(e=>e.length>0).join("&")}function g(e,t){t={decode:!0,...t};let[r,n]=l(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:w(v(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:f(n,t)}:{}}}function b(e,t){t={encode:!0,strict:!0,[c]:!0,...t};let r=m(e.url).split("?")[0]||"",n=E({...w(v(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){let n=new URL(r);n.hash=e.fragmentIdentifier,o=t[c]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function T(e,t,r){let{url:n,query:o,fragmentIdentifier:a}=g(e,r={parseFragmentIdentifier:!0,[c]:!1,...r});return b({url:n,query:function(e,t){let r={};if(Array.isArray(t))for(let n of t){let t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(let n of Reflect.ownKeys(e)){let o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){let a=e[n];t(n,a,e)&&Object.defineProperty(r,n,o)}}return r}(o,t),fragmentIdentifier:a},r)}function h(e,t,r){return T(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var x=n}}]);
//# sourceMappingURL=4582-511f7625688a50b7.js.map