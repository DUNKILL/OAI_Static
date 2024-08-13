"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1621],{51517:function(e,t,n){n.r(t),n.d(t,{ThreadHeaderGizmoDropdown:function(){return v}});var o,r=n(2346),a=n(41619),l=n(92379),i=n(15478),u=n(39004),s=n(52245),c=n(78976),d=n(10080),p=n(651);let f=i.Z.div(o||(o=(0,r.Z)(["group flex cursor-pointer items-center gap-1 rounded-lg py-1.5 text-token-text-secondary font-semibold hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary overflow-hidden whitespace-nowrap"])));function v(e){var t;let{clientThreadId:n,inMobileHeader:o,gizmoId:r,triggerButton:i}=e,{0:v,1:g}=(0,l.useState)(!1),{data:y}=(0,u.b9)(r);return null==y?null:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.GizmoInformationDropdown,{clientThreadId:n,gizmoResource:y,showReportModal:()=>{g(!0)},inMobileHeader:o,children:i||(0,p.jsxs)(f,{children:[y.gizmo.display.name,(null===(t=y.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.Beta))&&(0,p.jsx)("div",{className:"rounded-full bg-token-main-surface-secondary px-1.5 text-xs text-token-text-primary",children:"Beta"}),(0,p.jsx)(a.Tg4,{className:"icon-md text-token-text-tertiary"})]})}),v&&(0,p.jsx)(c.i,{gizmoId:r,clientThreadId:n,onClose:()=>{g(!1)}})]})}},75372:function(e,t,n){n.d(t,{f:function(){return v}});var o,r=n(98601),a=n(52088),l=n(2346),i=n(92379),u=n(15478),s=n(651);let c=["icon","children"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let f=u.Z.button(o||(o=(0,l.Z)(["flex h-10 w-full items-center gap-2.5 rounded-lg px-2 text-token-text-primary hover:bg-token-sidebar-surface-secondary"]))),v=(0,i.forwardRef)(function(e,t){let{icon:n,children:o}=e,r=(0,a.Z)(e,c);return(0,s.jsxs)(f,p(p({ref:t},r),{},{children:[(0,s.jsx)("div",{className:"flex h-6 w-6 items-center justify-center text-token-text-secondary",children:(0,s.jsx)(n,{className:"icon-md"})}),(0,s.jsx)("span",{className:"text-sm",children:o})]}))})},13391:function(e,t,n){n.d(t,{n:function(){return I},A3:function(){return x},yx:function(){return D},JS:function(){return B}});var o,r=n(98601),a=n(15858),l=n(70879),i=n(99976),u=n(61619),s=n(79746),c=n(82363),d=n(91530),p=n.n(d),f=n(92379),v=n(68306),g=n(16757),y=n(24740),b=n(92745),m=n(31438),h=n(49763),P=n(22433),k=n(45248);let S=f.useLayoutEffect;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}let E=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;var C=((o=C||{}).Core="Core",o.Chat="Chat",o.Settings="Settings",o);let M=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({Mod:"mod",Comma:","},a.s),O={[M.Mod]:/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl",[M.Comma]:",",[M.Enter]:"⏎",[M.Escape]:"Esc",[M.ArrowUp]:"↑",[M.ArrowDown]:"↓",[M.ArrowLeft]:"←",[M.ArrowRight]:"→",[M.Backspace]:"⌫",[M.Delete]:"⌦",[M.Tab]:"⇥",[M.Control]:"Ctrl",[M.Shift]:"Shift"},x=e=>e.map(e=>{var t;return null!==(t=O[e])&&void 0!==t?t:e}),T=(0,v.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),I=new h.V,j=e=>{let{resetThreadAction:t,clientThreadId:n}=e;return[{key:"newChat",action:t||p(),actionMessageDescriptor:T.newChat,group:C.Core,keyboardBinding:[M.Mod,M.Shift,"o"],altKeyboardBindings:[[M.Mod,"k"]]},{key:"focusPromptTextarea",action:l.go,actionMessageDescriptor:T.focusPromptTextarea,group:C.Chat,keyboardBinding:[M.Shift,M.Escape]},{key:"copyLastCodeBlock",action:()=>{if(null!=n){let e=b.tQ.getThreadCurrentLeafId(n),t=b.tQ.getThreadConversationTurns(n,e);for(let e=t.length-1;e>=0;e--){let{messages:n}=t[e],o=[...n.reduce((e,t)=>null==t.err&&t.message.author.role===g.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,P.RR)(t.message):e,"").matchAll(E)],r=o.length?o[o.length-1][1]:null;if(null!=r){(0,s.v)(r).then(()=>{y.m.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:T.copyLastCodeBlock,group:C.Chat,keyboardBinding:[M.Mod,M.Shift,";"],altKeyboardBindings:[[M.Mod,M.Shift,":"]]},{key:"copyLastResponse",action:()=>{null!=n&&b.tQ.copyLastMessageToClipboard(n,"keyboard").then(()=>{y.m.success("Last response copied to clipboard")})},actionMessageDescriptor:T.copyLastResponse,group:C.Chat,keyboardBinding:[M.Mod,M.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>m.vm.toggleModal(m.B.UserContext),actionMessageDescriptor:T.toggleCustomInstructions,group:C.Settings,keyboardBinding:[M.Mod,M.Shift,"i"]},{key:"navigationToggle",action:()=>m.vm.toggleDesktopNavCollapsed(),actionMessageDescriptor:T.navigationToggle,group:C.Core,keyboardBinding:[M.Mod,M.Shift,"s"]},{key:"deleteChat",action:()=>{if(n){let e=b.tQ.getServerThreadId(n);e&&I.publish({kind:"deleteChat",serverThreadId:e})}},actionMessageDescriptor:T.deleteChat,group:C.Chat,keyboardBinding:[M.Mod,M.Shift,M.Backspace],altKeyboardBindings:[[M.Mod,M.Shift,M.Delete]]},{key:"toggleKeyboardActions",action:()=>m.vm.toggleModal(m.B.KeyboardActions),actionMessageDescriptor:T.toggleKeyboardActions,group:C.Settings,keyboardBinding:[M.Mod,"/"]}]},A=e=>(function(e,t,n){let o=e.map(e=>{let{keyboardBinding:t}=e,n=t.join("+");if(e.altKeyboardBindings){n=[n];let t=e.altKeyboardBindings.map(e=>e.join("+"));n=n.concat(t)}return(0,k.ZP)(n,{byKey:!0})});S(()=>{if((null==n?void 0:n.enabled)===!1)return;let r=n=>{if(!n.repeat)for(let r=0;r<o.length;r++)o[r](n)&&(void 0===e[r].enabled||e[r].enabled)&&(n.preventDefault(),t(e[r]),e[r].action())},a=e=>{void 0!==e.key&&r(e)},l=document;return l.addEventListener("keydown",a),()=>{l.removeEventListener("keydown",a)}},[e,n])})(e,e=>{i.A.logEvent(u.M.keyboardShortcut,{keyboardActionKey:e.key}),c.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},{enabled:!0}),B=function(){let{resetThreadAction:e,clientThreadId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,f.useMemo)(()=>j({resetThreadAction:e,clientThreadId:t}).filter(e=>{let{enabled:t=!0}=e;return t}),[t,e])},D=e=>{let{resetThreadAction:t,clientThreadId:n}=e;A(B({resetThreadAction:t,clientThreadId:n}))}},17096:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(92379);function r(){let e=(0,o.useRef)([]),t=(0,o.useRef)((t,n)=>{let o=setTimeout(t,n);return e.current.push(o),o});return(0,o.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},89039:function(e,t,n){let o,r;n.d(t,{J:function(){return F}});var a=n(92379),l=n(782),i=n(78789),u=n(91157),s=n(86060),c=n(76227),d=n(88554),p=n(98397),f=n(57084),v=n(60839),g=n(67607),y=n(87054),b=n(25825),m=n(39231),h=n(37927),P=n(11943),k=n(51973),S=((o=S||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),w=((r=w||{})[r.TogglePopover=0]="TogglePopover",r[r.ClosePopover=1]="ClosePopover",r[r.SetButton=2]="SetButton",r[r.SetButtonId=3]="SetButtonId",r[r.SetPanel=4]="SetPanel",r[r.SetPanelId=5]="SetPanelId",r);let E={0:e=>({...e,popoverState:(0,l.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},C=(0,a.createContext)(null);function M(e){let t=(0,a.useContext)(C);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,M),t}return t}C.displayName="PopoverContext";let O=(0,a.createContext)(null);function x(e){let t=(0,a.useContext)(O);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}O.displayName="PopoverAPIContext";let T=(0,a.createContext)(null);function I(){return(0,a.useContext)(T)}T.displayName="PopoverGroupContext";let j=(0,a.createContext)(null);function A(e,t){return(0,l.E)(t.type,E,e,t)}j.displayName="PopoverPanelContext";let B=(0,i.yV)(function(e,t){var n;let o=`headlessui-popover-button-${(0,s.M)()}`,r=`headlessui-popover-panel-${(0,s.M)()}`,c=(0,a.useRef)(null),d=(0,u.T)(t,(0,u.h)(e=>{c.current=e})),v=(0,a.useReducer)(A,{popoverState:1,button:null,buttonId:o,panel:null,panelId:r,beforePanelSentinel:(0,a.createRef)(),afterPanelSentinel:(0,a.createRef)()}),[{popoverState:y,button:h,panel:k,beforePanelSentinel:S,afterPanelSentinel:w},E]=v,M=(0,b.i)(null!=(n=c.current)?n:h);(0,a.useEffect)(()=>E({type:3,buttonId:o}),[o,E]),(0,a.useEffect)(()=>E({type:5,panelId:r}),[r,E]);let x=(0,a.useMemo)(()=>{if(!h||!k)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(h))^Number(null==e?void 0:e.contains(k)))return!0;return!1},[h,k]),T=(0,a.useMemo)(()=>({buttonId:o,panelId:r,close:()=>E({type:1})}),[o,r,E]),j=I(),B=null==j?void 0:j.registerPopover,D=(0,P.z)(()=>{var e;return null!=(e=null==j?void 0:j.isFocusWithinPopoverGroup())?e:(null==M?void 0:M.activeElement)&&((null==h?void 0:h.contains(M.activeElement))||(null==k?void 0:k.contains(M.activeElement)))});(0,a.useEffect)(()=>null==B?void 0:B(T),[B,T]),(0,m.O)(null==M?void 0:M.defaultView,"focus",e=>{var t,n,o,r;0===y&&(D()||!h||!k||null!=(n=null==(t=S.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(r=null==(o=w.current)?void 0:o.contains)&&r.call(o,e.target)||E({type:1}))},!0),(0,g.O)([h,k],(e,t)=>{E({type:1}),(0,p.sP)(t,p.tJ.Loose)||(e.preventDefault(),null==h||h.focus())},0===y);let R=(0,P.z)(e=>{E({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:h:h;null==t||t.focus()}),N=(0,a.useMemo)(()=>({close:R,isPortalled:x}),[R,x]),L=(0,a.useMemo)(()=>({open:0===y,close:R}),[y,R]);return a.createElement(C.Provider,{value:v},a.createElement(O.Provider,{value:N},a.createElement(f.up,{value:(0,l.E)(y,{0:f.ZM.Open,1:f.ZM.Closed})},(0,i.sY)({ourProps:{ref:d},theirProps:e,slot:L,defaultTag:"div",name:"Popover"}))))}),D=(0,i.yV)(function(e,t){let[n,o]=M("Popover.Button"),{isPortalled:r}=x("Popover.Button"),f=(0,a.useRef)(null),g=`headlessui-focus-sentinel-${(0,s.M)()}`,y=I(),m=null==y?void 0:y.closeOthers,S=(0,a.useContext)(j),w=null!==S&&S===n.panelId,E=(0,u.T)(f,t,w?null:e=>o({type:2,button:e})),C=(0,u.T)(f,t),O=(0,b.i)(f),T=(0,P.z)(e=>{var t,r,a;if(w){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),o({type:1}),null==(a=n.button)||a.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==m||m(n.buttonId)),o({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==m?void 0:m(n.buttonId);if(!f.current||(null==O?void 0:O.activeElement)&&!f.current.contains(O.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1})}}),A=(0,P.z)(e=>{w||e.key===c.R.Space&&e.preventDefault()}),B=(0,P.z)(t=>{var r,a;(0,d.P)(t.currentTarget)||e.disabled||(w?(o({type:1}),null==(r=n.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==m||m(n.buttonId)),o({type:0}),null==(a=n.button)||a.focus()))}),D=(0,P.z)(e=>{e.preventDefault(),e.stopPropagation()}),R=0===n.popoverState,N=(0,a.useMemo)(()=>({open:R}),[R]),L=(0,v.f)(e,f),F=w?{ref:C,type:L,onKeyDown:T,onClick:B}:{ref:E,id:n.buttonId,type:L,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:T,onKeyUp:A,onClick:B,onMouseDown:D},z=(0,k.l)(),K=(0,P.z)(()=>{let e=n.panel;e&&(0,l.E)(z.current,{[k.N.Forwards]:()=>(0,p.jA)(e,p.TO.First),[k.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return a.createElement(a.Fragment,null,(0,i.sY)({ourProps:F,theirProps:e,slot:N,defaultTag:"button",name:"Popover.Button"}),R&&!w&&r&&a.createElement(h._,{id:g,features:h.A.Focusable,as:"button",type:"button",onFocus:K}))}),R=i.AN.RenderStrategy|i.AN.Static,N=(0,i.yV)(function(e,t){let[{popoverState:n},o]=M("Popover.Overlay"),r=(0,u.T)(t),l=`headlessui-popover-overlay-${(0,s.M)()}`,c=(0,f.oJ)(),p=null!==c?c===f.ZM.Open:0===n,v=(0,P.z)(e=>{if((0,d.P)(e.currentTarget))return e.preventDefault();o({type:1})}),g=(0,a.useMemo)(()=>({open:0===n}),[n]);return(0,i.sY)({ourProps:{ref:r,id:l,"aria-hidden":!0,onClick:v},theirProps:e,slot:g,defaultTag:"div",features:R,visible:p,name:"Popover.Overlay"})}),L=i.AN.RenderStrategy|i.AN.Static,F=Object.assign(B,{Button:D,Overlay:N,Panel:(0,i.yV)(function(e,t){let{focus:n=!1,...o}=e,[r,d]=M("Popover.Panel"),{close:v,isPortalled:g}=x("Popover.Panel"),y=`headlessui-focus-sentinel-before-${(0,s.M)()}`,m=`headlessui-focus-sentinel-after-${(0,s.M)()}`,S=(0,a.useRef)(null),w=(0,u.T)(S,t,e=>{d({type:4,panel:e})}),E=(0,b.i)(S),C=(0,f.oJ)(),O=null!==C?C===f.ZM.Open:0===r.popoverState,T=(0,P.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==r.popoverState||!S.current||(null==E?void 0:E.activeElement)&&!S.current.contains(E.activeElement))return;e.preventDefault(),e.stopPropagation(),d({type:1}),null==(t=r.button)||t.focus()}});(0,a.useEffect)(()=>{var t;e.static||1===r.popoverState&&(null==(t=e.unmount)||t)&&d({type:4,panel:null})},[r.popoverState,e.unmount,e.static,d]),(0,a.useEffect)(()=>{if(!n||0!==r.popoverState||!S.current)return;let e=null==E?void 0:E.activeElement;S.current.contains(e)||(0,p.jA)(S.current,p.TO.First)},[n,S,r.popoverState]);let I=(0,a.useMemo)(()=>({open:0===r.popoverState,close:v}),[r,v]),A={ref:w,id:r.panelId,onKeyDown:T,onBlur:n&&0===r.popoverState?e=>{var t,n,o,a,l;let i=e.relatedTarget;!i||!S.current||null!=(t=S.current)&&t.contains(i)||(d({type:1}),((null==(o=null==(n=r.beforePanelSentinel.current)?void 0:n.contains)?void 0:o.call(n,i))||(null==(l=null==(a=r.afterPanelSentinel.current)?void 0:a.contains)?void 0:l.call(a,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},B=(0,k.l)(),D=(0,P.z)(()=>{let e=S.current;e&&(0,l.E)(B.current,{[k.N.Forwards]:()=>{(0,p.jA)(e,p.TO.First)},[k.N.Backwards]:()=>{var e;null==(e=r.button)||e.focus({preventScroll:!0})}})}),R=(0,P.z)(()=>{let e=S.current;e&&(0,l.E)(B.current,{[k.N.Forwards]:()=>{var e,t,n;if(!r.button)return;let o=(0,p.GO)(),a=o.indexOf(r.button),l=o.slice(0,a+1),i=[...o.slice(a+1),...l];for(let o of i.slice())if((null==(t=null==(e=null==o?void 0:o.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=r.panel)?void 0:n.contains(o))){let e=i.indexOf(o);-1!==e&&i.splice(e,1)}(0,p.jA)(i,p.TO.First,!1)},[k.N.Backwards]:()=>(0,p.jA)(e,p.TO.Last)})});return a.createElement(j.Provider,{value:r.panelId},O&&g&&a.createElement(h._,{id:y,ref:r.beforePanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:D}),(0,i.sY)({ourProps:A,theirProps:o,slot:I,defaultTag:"div",features:L,visible:O,name:"Popover.Panel"}),O&&g&&a.createElement(h._,{id:m,ref:r.afterPanelSentinel,features:h.A.Focusable,as:"button",type:"button",onFocus:R}))}),Group:(0,i.yV)(function(e,t){let n=(0,a.useRef)(null),o=(0,u.T)(n,t),[r,l]=(0,a.useState)([]),s=(0,P.z)(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,P.z)(e=>(l(t=>[...t,e]),()=>s(e))),d=(0,P.z)(()=>{var e;let t=(0,y.r)(n);if(!t)return!1;let o=t.activeElement;return!!(null!=(e=n.current)&&e.contains(o))||r.some(e=>{var n,r;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(o))||(null==(r=t.getElementById(e.panelId))?void 0:r.contains(o))})}),p=(0,P.z)(e=>{for(let t of r)t.buttonId!==e&&t.close()}),f=(0,a.useMemo)(()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:d,closeOthers:p}),[c,s,d,p]),v=(0,a.useMemo)(()=>({}),[]);return a.createElement(T.Provider,{value:f},(0,i.sY)({ourProps:{ref:o},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},39231:function(e,t,n){n.d(t,{O:function(){return a}});var o=n(92379),r=n(23441);function a(e,t,n,a){let l=(0,r.E)(n);(0,o.useEffect)(()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,a),()=>e.removeEventListener(t,n,a)},[e,t,a])}},51973:function(e,t,n){let o;n.d(t,{N:function(){return l},l:function(){return i}});var r=n(92379),a=n(23441),l=((o=l||{})[o.Forwards=0]="Forwards",o[o.Backwards=1]="Backwards",o);function i(){var e,t;let n,o=(0,r.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(o.current=e.shiftKey?1:0)},n=(0,a.E)(t),(0,r.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),o}},37927:function(e,t,n){let o;n.d(t,{A:function(){return a},_:function(){return l}});var r=n(78789),a=((o=a||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let l=(0,r.yV)(function(e,t){let{features:n=1,...o}=e,a={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,r.sY)({ourProps:a,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})})},11812:function(e,t,n){n.d(t,{E:function(){return r}});var o=n(46598);function r(e=.1,{startDelay:t=0,from:n=0,ease:r}={}){return(a,l)=>{let i=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,l))-a);if(r){let t=l*e;i=(0,o.R)(r)(i/t)*t}return t+i}}}}]);
//# sourceMappingURL=1621.25e86d1e2009aeb2.js.map