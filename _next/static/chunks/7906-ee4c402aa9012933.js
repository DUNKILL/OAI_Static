(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7906],{80755:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},24760:function(e,t,n){var r=n(92238),o=n(58834);e.exports=function(e,t){return e&&r(t,o(t),e)}},15212:function(e,t,n){var r=n(92238),o=n(53342);e.exports=function(e,t){return e&&r(t,o(t),e)}},23845:function(e,t,n){var r=n(20014),o=n(80755),u=n(5100),a=n(24760),l=n(15212),c=n(28057),i=n(61984),s=n(88456),p=n(25512),f=n(90393),v=n(90179),d=n(65064),b=n(7635),y=n(54199),P=n(71660),j=n(2428),S=n(7757),m=n(97985),x=n(6627),E=n(22480),g=n(58834),h=n(53342),I="[object Arguments]",A="[object Function]",w="[object Object]",O={};O[I]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Map]"]=O["[object Number]"]=O[w]=O["[object RegExp]"]=O["[object Set]"]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[A]=O["[object WeakMap]"]=!1,e.exports=function e(t,n,T,M,C,F){var k,N=1&n,B=2&n,R=4&n;if(T&&(k=C?T(t,M,C,F):T(t)),void 0!==k)return k;if(!x(t))return t;var D=j(t);if(D){if(k=b(t),!N)return i(t,k)}else{var z=d(t),U=z==A||"[object GeneratorFunction]"==z;if(S(t))return c(t,N);if(z==w||z==I||U&&!C){if(k=B||U?{}:P(t),!N)return B?p(t,l(k,t)):s(t,a(k,t))}else{if(!O[z])return C?t:{};k=y(t,z,N)}}F||(F=new r);var $=F.get(t);if($)return $;F.set(t,k),E(t)?t.forEach(function(r){k.add(e(r,n,T,r,t,F))}):m(t)&&t.forEach(function(r,o){k.set(o,e(r,n,T,o,t,F))});var V=R?B?v:f:B?h:g,G=D?void 0:V(t);return o(G||t,function(r,o){G&&(r=t[o=r]),u(k,o,e(r,n,T,o,t,F))}),k}},88579:function(e,t,n){var r=n(6627),o=Object.create,u=function(){function e(){}return function(t){if(!r(t))return{};if(o)return o(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=u},62512:function(e,t,n){var r=n(65064),o=n(89109);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},8516:function(e,t,n){var r=n(65064),o=n(89109);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},54675:function(e,t,n){var r=n(39069);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},28057:function(e,t,n){e=n.nmd(e);var r=n(73401),o=t&&!t.nodeType&&t,u=o&&e&&!e.nodeType&&e,a=u&&u.exports===o?r.Buffer:void 0,l=a?a.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=l?l(n):new e.constructor(n);return e.copy(r),r}},39493:function(e,t,n){var r=n(54675);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},55543:function(e){var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},43866:function(e,t,n){var r=n(66293),o=r?r.prototype:void 0,u=o?o.valueOf:void 0;e.exports=function(e){return u?Object(u.call(e)):{}}},42670:function(e,t,n){var r=n(54675);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},61984:function(e){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},92238:function(e,t,n){var r=n(5100),o=n(80897);e.exports=function(e,t,n,u){var a=!n;n||(n={});for(var l=-1,c=t.length;++l<c;){var i=t[l],s=u?u(n[i],e[i],i,n,e):void 0;void 0===s&&(s=e[i]),a?o(n,i,s):r(n,i,s)}return n}},88456:function(e,t,n){var r=n(92238),o=n(69128);e.exports=function(e,t){return r(e,o(e),t)}},25512:function(e,t,n){var r=n(92238),o=n(55456);e.exports=function(e,t){return r(e,o(e),t)}},7635:function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,r=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},54199:function(e,t,n){var r=n(54675),o=n(39493),u=n(55543),a=n(43866),l=n(42670);e.exports=function(e,t,n){var c=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new c(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(e,n);case"[object Map]":case"[object Set]":return new c;case"[object Number]":case"[object String]":return new c(e);case"[object RegExp]":return u(e);case"[object Symbol]":return a(e)}}},71660:function(e,t,n){var r=n(88579),o=n(8187),u=n(92403);e.exports=function(e){return"function"!=typeof e.constructor||u(e)?{}:r(o(e))}},17806:function(e,t,n){var r=n(23845);e.exports=function(e){return r(e,5)}},68039:function(e,t,n){var r=n(790),o=n(65064),u=n(43735),a=n(2428),l=n(71701),c=n(7757),i=n(92403),s=n(56868),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||s(e)||u(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(i(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}},97985:function(e,t,n){var r=n(62512),o=n(52715),u=n(20126),a=u&&u.isMap,l=a?o(a):r;e.exports=l},22480:function(e,t,n){var r=n(8516),o=n(52715),u=n(20126),a=u&&u.isSet,l=a?o(a):r;e.exports=l},89039:function(e,t,n){"use strict";let r,o;n.d(t,{J:function(){return z}});var u=n(92379),a=n(782),l=n(78789),c=n(91157),i=n(86060),s=n(76227),p=n(88554),f=n(98397),v=n(57084),d=n(60839),b=n(67607),y=n(87054),P=n(25825),j=n(39231),S=n(37927),m=n(11943),x=n(51973),E=((r=E||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),g=((o=g||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let h={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},I=(0,u.createContext)(null);function A(e){let t=(0,u.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}I.displayName="PopoverContext";let w=(0,u.createContext)(null);function O(e){let t=(0,u.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return t}w.displayName="PopoverAPIContext";let T=(0,u.createContext)(null);function M(){return(0,u.useContext)(T)}T.displayName="PopoverGroupContext";let C=(0,u.createContext)(null);function F(e,t){return(0,a.E)(t.type,h,e,t)}C.displayName="PopoverPanelContext";let k=(0,l.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,i.M)()}`,o=`headlessui-popover-panel-${(0,i.M)()}`,s=(0,u.useRef)(null),p=(0,c.T)(t,(0,c.h)(e=>{s.current=e})),d=(0,u.useReducer)(F,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,u.createRef)(),afterPanelSentinel:(0,u.createRef)()}),[{popoverState:y,button:S,panel:x,beforePanelSentinel:E,afterPanelSentinel:g},h]=d,A=(0,P.i)(null!=(n=s.current)?n:S);(0,u.useEffect)(()=>h({type:3,buttonId:r}),[r,h]),(0,u.useEffect)(()=>h({type:5,panelId:o}),[o,h]);let O=(0,u.useMemo)(()=>{if(!S||!x)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(S))^Number(null==e?void 0:e.contains(x)))return!0;return!1},[S,x]),T=(0,u.useMemo)(()=>({buttonId:r,panelId:o,close:()=>h({type:1})}),[r,o,h]),C=M(),k=null==C?void 0:C.registerPopover,N=(0,m.z)(()=>{var e;return null!=(e=null==C?void 0:C.isFocusWithinPopoverGroup())?e:(null==A?void 0:A.activeElement)&&((null==S?void 0:S.contains(A.activeElement))||(null==x?void 0:x.contains(A.activeElement)))});(0,u.useEffect)(()=>null==k?void 0:k(T),[k,T]),(0,j.O)(null==A?void 0:A.defaultView,"focus",e=>{var t,n,r,o;0===y&&(N()||!S||!x||null!=(n=null==(t=E.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=g.current)?void 0:r.contains)&&o.call(r,e.target)||h({type:1}))},!0),(0,b.O)([S,x],(e,t)=>{h({type:1}),(0,f.sP)(t,f.tJ.Loose)||(e.preventDefault(),null==S||S.focus())},0===y);let B=(0,m.z)(e=>{h({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:S:S;null==t||t.focus()}),R=(0,u.useMemo)(()=>({close:B,isPortalled:O}),[B,O]),D=(0,u.useMemo)(()=>({open:0===y,close:B}),[y,B]);return u.createElement(I.Provider,{value:d},u.createElement(w.Provider,{value:R},u.createElement(v.up,{value:(0,a.E)(y,{0:v.ZM.Open,1:v.ZM.Closed})},(0,l.sY)({ourProps:{ref:p},theirProps:e,slot:D,defaultTag:"div",name:"Popover"}))))}),N=(0,l.yV)(function(e,t){let[n,r]=A("Popover.Button"),{isPortalled:o}=O("Popover.Button"),v=(0,u.useRef)(null),b=`headlessui-focus-sentinel-${(0,i.M)()}`,y=M(),j=null==y?void 0:y.closeOthers,E=(0,u.useContext)(C),g=null!==E&&E===n.panelId,h=(0,c.T)(v,t,g?null:e=>r({type:2,button:e})),I=(0,c.T)(v,t),w=(0,P.i)(v),T=(0,m.z)(e=>{var t,o,u;if(g){if(1===n.popoverState)return;switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(u=n.button)||u.focus()}}else switch(e.key){case s.R.Space:case s.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==j||j(n.buttonId)),r({type:0});break;case s.R.Escape:if(0!==n.popoverState)return null==j?void 0:j(n.buttonId);if(!v.current||(null==w?void 0:w.activeElement)&&!v.current.contains(w.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),F=(0,m.z)(e=>{g||e.key===s.R.Space&&e.preventDefault()}),k=(0,m.z)(t=>{var o,u;(0,p.P)(t.currentTarget)||e.disabled||(g?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==j||j(n.buttonId)),r({type:0}),null==(u=n.button)||u.focus()))}),N=(0,m.z)(e=>{e.preventDefault(),e.stopPropagation()}),B=0===n.popoverState,R=(0,u.useMemo)(()=>({open:B}),[B]),D=(0,d.f)(e,v),z=g?{ref:I,type:D,onKeyDown:T,onClick:k}:{ref:h,id:n.buttonId,type:D,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:T,onKeyUp:F,onClick:k,onMouseDown:N},U=(0,x.l)(),$=(0,m.z)(()=>{let e=n.panel;e&&(0,a.E)(U.current,{[x.N.Forwards]:()=>(0,f.jA)(e,f.TO.First),[x.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})});return u.createElement(u.Fragment,null,(0,l.sY)({ourProps:z,theirProps:e,slot:R,defaultTag:"button",name:"Popover.Button"}),B&&!g&&o&&u.createElement(S._,{id:b,features:S.A.Focusable,as:"button",type:"button",onFocus:$}))}),B=l.AN.RenderStrategy|l.AN.Static,R=(0,l.yV)(function(e,t){let[{popoverState:n},r]=A("Popover.Overlay"),o=(0,c.T)(t),a=`headlessui-popover-overlay-${(0,i.M)()}`,s=(0,v.oJ)(),f=null!==s?s===v.ZM.Open:0===n,d=(0,m.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();r({type:1})}),b=(0,u.useMemo)(()=>({open:0===n}),[n]);return(0,l.sY)({ourProps:{ref:o,id:a,"aria-hidden":!0,onClick:d},theirProps:e,slot:b,defaultTag:"div",features:B,visible:f,name:"Popover.Overlay"})}),D=l.AN.RenderStrategy|l.AN.Static,z=Object.assign(k,{Button:N,Overlay:R,Panel:(0,l.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,p]=A("Popover.Panel"),{close:d,isPortalled:b}=O("Popover.Panel"),y=`headlessui-focus-sentinel-before-${(0,i.M)()}`,j=`headlessui-focus-sentinel-after-${(0,i.M)()}`,E=(0,u.useRef)(null),g=(0,c.T)(E,t,e=>{p({type:4,panel:e})}),h=(0,P.i)(E),I=(0,v.oJ)(),w=null!==I?I===v.ZM.Open:0===o.popoverState,T=(0,m.z)(e=>{var t;if(e.key===s.R.Escape){if(0!==o.popoverState||!E.current||(null==h?void 0:h.activeElement)&&!E.current.contains(h.activeElement))return;e.preventDefault(),e.stopPropagation(),p({type:1}),null==(t=o.button)||t.focus()}});(0,u.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&p({type:4,panel:null})},[o.popoverState,e.unmount,e.static,p]),(0,u.useEffect)(()=>{if(!n||0!==o.popoverState||!E.current)return;let e=null==h?void 0:h.activeElement;E.current.contains(e)||(0,f.jA)(E.current,f.TO.First)},[n,E,o.popoverState]);let M=(0,u.useMemo)(()=>({open:0===o.popoverState,close:d}),[o,d]),F={ref:g,id:o.panelId,onKeyDown:T,onBlur:n&&0===o.popoverState?e=>{var t,n,r,u,a;let l=e.relatedTarget;!l||!E.current||null!=(t=E.current)&&t.contains(l)||(p({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,l))||(null==(a=null==(u=o.afterPanelSentinel.current)?void 0:u.contains)?void 0:a.call(u,l)))&&l.focus({preventScroll:!0}))}:void 0,tabIndex:-1},k=(0,x.l)(),N=(0,m.z)(()=>{let e=E.current;e&&(0,a.E)(k.current,{[x.N.Forwards]:()=>{(0,f.jA)(e,f.TO.First)},[x.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),B=(0,m.z)(()=>{let e=E.current;e&&(0,a.E)(k.current,{[x.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,f.GO)(),u=r.indexOf(o.button),a=r.slice(0,u+1),l=[...r.slice(u+1),...a];for(let r of l.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=l.indexOf(r);-1!==e&&l.splice(e,1)}(0,f.jA)(l,f.TO.First,!1)},[x.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})});return u.createElement(C.Provider,{value:o.panelId},w&&b&&u.createElement(S._,{id:y,ref:o.beforePanelSentinel,features:S.A.Focusable,as:"button",type:"button",onFocus:N}),(0,l.sY)({ourProps:F,theirProps:r,slot:M,defaultTag:"div",features:D,visible:w,name:"Popover.Panel"}),w&&b&&u.createElement(S._,{id:j,ref:o.afterPanelSentinel,features:S.A.Focusable,as:"button",type:"button",onFocus:B}))}),Group:(0,l.yV)(function(e,t){let n=(0,u.useRef)(null),r=(0,c.T)(n,t),[o,a]=(0,u.useState)([]),i=(0,m.z)(e=>{a(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),s=(0,m.z)(e=>(a(t=>[...t,e]),()=>i(e))),p=(0,m.z)(()=>{var e;let t=(0,y.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),f=(0,m.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),v=(0,u.useMemo)(()=>({registerPopover:s,unregisterPopover:i,isFocusWithinPopoverGroup:p,closeOthers:f}),[s,i,p,f]),d=(0,u.useMemo)(()=>({}),[]);return u.createElement(T.Provider,{value:v},(0,l.sY)({ourProps:{ref:r},theirProps:e,slot:d,defaultTag:"div",name:"Popover.Group"}))})})}}]);
//# sourceMappingURL=7906-ee4c402aa9012933.js.map