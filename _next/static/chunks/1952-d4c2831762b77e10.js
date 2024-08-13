"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1952],{21952:function(e,t,n){n.d(t,{r:function(){return A},wV:function(){return G}});var r,i=n(24312),o=n(81669),a=n(30407),s=n(66187),l=n(21335),c=n(93159),d=n(59791),u=n(24109),p=n(310),m=n(10454),h=n(23311),f=n(81542),g=n(33168),x=n(16602),v=n(8025),y=n(19841),b=n(61888),j=n.n(b),k=n(61546),w=n.n(k),P=n(92379),C=n(72256),O=n(26123),_=n(25940),T=n(74091),N=n(37782),L=n(80242),D=n(651);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let E=T.Z.div(r||(r=(0,o.Z)(["group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-token-main-surface-secondary text-sm text-token-text-primary"])));function A(){let{data:e,isLoading:t}=(0,c.Fi)({cutId:"recent",limit:8}),{data:n,isLoading:r}=(0,c.Dq)();return{isLoading:t||r,recent:e,pinned:n}}let R=(0,P.forwardRef)(function(e,t){let{query:n,onSelectGizmo:r,selectedIdx:i}=e,o=(0,g.oc)(),a=(0,P.useRef)([]),{isLoading:l,recent:c,pinned:d}=A();(0,P.useImperativeHandle)(t,()=>({handleEnterOnIndex:e=>{if(!m[e])return e<p.length?p[e].resource:"create"},getResultsLength:()=>p.length+1,scrollToItem:e=>{let t=a.current[e];t&&t.scrollIntoView({behavior:"instant",block:"nearest"})}}));let p=[];if(l)return(0,D.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,D.jsx)(s.Z,{})});c&&p.push(...c.pages.flatMap(e=>e.list.items).map(e=>({resource:e.resource,from:"recent"}))),d&&p.push(...d.items.map(e=>({resource:e,from:"pinned"})));let m=(p=j().uniqBy(p,e=>e.resource.gizmo.id)).map(e=>{var t;return null===(t=e.resource.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.WorkspaceDisabled)});return n&&""!==n&&(p=p.filter(e=>{var t,r;return(e.resource.gizmo.display.name.toLowerCase()+(null===(t=e.resource.gizmo.display.description)||void 0===t?void 0:t.toLowerCase())+(null===(r=e.resource.gizmo.author.display_name)||void 0===r?void 0:r.toLowerCase())).includes(null==n?void 0:n.toLowerCase())})),(0,D.jsxs)("div",{className:"max-h-40 overflow-y-auto",children:[p.map((e,t)=>(0,D.jsx)("div",{ref:e=>{a.current[t]=e},tabIndex:t,onClick:()=>{m[t]||r(e.resource)},children:(0,D.jsx)(z,{gizmoResource:e.resource,from:e.from,showDescription:o,isSelected:i===t,grayedOut:m[t]})},e.resource.gizmo.id)),(0,D.jsx)("div",{ref:e=>{a.current[p.length]=e},tabIndex:p.length,onClick:()=>{r("create")},children:(0,D.jsx)(S,{isSelected:i===p.length})},"create")]})}),S=e=>{let{isSelected:t}=e;return(0,D.jsx)(E,{className:t?"bg-token-main-surface-secondary":"",children:(0,D.jsxs)(w(),{href:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2",children:[(0,D.jsx)("span",{className:"self-center",children:(0,D.jsx)(N.Vz5,{className:"icon-sm"})}),(0,D.jsx)("span",{children:(0,D.jsx)(C.Z,U({},Z.dropdownCreateLabel))})]})})},I=e=>{let{onClick:t,onClose:n}=e,{0:r,1:i}=(0,P.useState)(null),o=(0,P.useRef)(null),a=(0,P.useRef)(null),{0:s,1:l}=(0,P.useState)(0),c=(0,O.Z)(),d=e=>{x.A.logEvent(v.M.mentionsClickGizmo,{gizmo_id:"create"===e?"create":e.gizmo.id}),"create"!==e&&t(e)};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("input",{autoFocus:!0,placeholder:c.formatMessage(Z.searchPlaceholder),ref:o,onKeyDown:e=>{var t,i,o,c,u;let p=null!==(t=null===(i=a.current)||void 0===i?void 0:i.getResultsLength())&&void 0!==t?t:0;if("Escape"!==e.key&&("Backspace"!==e.key||r)||(e.preventDefault(),n()),"Enter"===e.key||"Tab"===e.key){e.preventDefault();let t=null===(o=a.current)||void 0===o?void 0:o.handleEnterOnIndex(s);if(!t)return;"create"===t?(window.open("/gpts/editor","_blank"),n()):d(t)}if("ArrowDown"===e.key&&s<p-1){e.preventDefault();let t=s+1;null===(c=a.current)||void 0===c||c.scrollToItem(t),l(t)}if("ArrowUp"===e.key&&s>0){e.preventDefault();let t=s-1;null===(u=a.current)||void 0===u||u.scrollToItem(t),l(t)}},onChange:e=>{i(e.target.value),l(0)},className:"mb-1 w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),(0,D.jsx)(R,{ref:a,query:r,selectedIdx:s,onSelectGizmo:d})]})};function z(e){var t;let{gizmoResource:n,from:r,showDescription:i,isSelected:o,grayedOut:a}=e,s=!!(null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.FirstParty));return(0,D.jsxs)(E,{className:(0,y.default)(o?"bg-token-main-surface-secondary":"",a&&"opacity-50"),children:[(0,D.jsx)(l.Z,{isFirstParty:s,src:n.gizmo.display.profile_picture_url,className:(0,y.default)("icon-xl h-7 w-7 flex-shrink-0",a&&"grayscale group-hover:grayscale-0")}),(0,D.jsxs)("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[(0,D.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,D.jsx)("span",{className:"shrink-0 truncate",children:n.gizmo.display.name}),i&&(0,D.jsx)("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:n.gizmo.display.description})]}),(0,D.jsx)("span",{className:"shrink-0 self-center",children:"recent"===r?(0,D.jsx)(N.T39,{className:"icon-sm"}):(0,D.jsx)(N.qQX,{className:"icon-sm"})})]})]})}function G(e){var t;let{gizmoResource:n,onRemove:r}=e,i=!!(null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.FirstParty));return(0,D.jsxs)("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[(0,D.jsxs)("div",{className:(0,y.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[(0,D.jsx)(l.Z,{isFirstParty:i,src:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),(0,D.jsxs)("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[(0,D.jsx)(C.Z,U({},Z.talkingTo))," ",(0,D.jsx)("span",{className:"font-semibold text-token-text-secondary",children:n.gizmo.display.name})]})]}),r&&(0,D.jsx)("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:(0,D.jsx)(d.v7,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}let Z=(0,_.vU)({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});t.ZP=e=>{let{onClick:t,onClose:n}=e,r=(0,m.Ib)(),i=(0,h.p7)(),o=(0,h.b0)(),s=i?!!o:!!r&&(0,f.PX)(r);return((0,p.n)(()=>{x.A.logEvent(v.M.mentionsOpened,{gizmo_selector_disabled:s})}),i&&o)?(0,D.jsx)(L.g,{rateLimitInfo:o}):!i&&r&&(0,f.PX)(r)?(0,D.jsx)(L.W,{rateLimitWithBannerDescription:r,clientThreadId:a.Zq}):(0,D.jsx)("div",{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||n()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:(0,D.jsx)(I,{onClick:t,onClose:n})})}},80242:function(e,t,n){n.d(t,{W:function(){return w},g:function(){return k}});var r=n(24312),i=n(30407),o=n(2425),a=n(26123),s=n(53777),l=n(651);let c=e=>{var t,n,r,i,o,c;let{actions:d,title:u,description:p,onDismiss:m}=e,h=(0,a.Z)(),f=null!=d&&null!==(t=d.primaryAction)&&void 0!==t&&t.text?h.formatMessage(d.primaryAction.text):void 0,g=null!=d&&null!==(n=d.secondaryAction)&&void 0!==n&&n.text?h.formatMessage(d.secondaryAction.text):void 0;return(0,l.jsx)(s.j,{title:u,content:p,onDismiss:m,primaryCtaText:f,onPrimaryCtaClick:null!==(r=null==d||null===(i=d.primaryAction)||void 0===i?void 0:i.onClick)&&void 0!==r?r:void 0,secondaryCtaText:g,onSecondaryCtaClick:null!==(o=null==d||null===(c=d.secondaryAction)||void 0===c?void 0:c.onClick)&&void 0!==o?o:void 0,isElevated:!0})};var d=n(310),u=n(91092),p=n(10454),m=n(81542),h=n(16602),f=n(72256),g=n(25940),x=n(41124),v=n(72890);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let j=e=>{let{clientThreadId:t,location:n,primaryAction:r,rateLimitWithBannerDescription:i,title:o,description:a,onDismiss:s}=e,d={primaryAction:r,secondaryAction:function(e){let{location:t,rateLimit:n,hasNoAvailableModels:r,updateModelQueryParam:i}=e;if(!r||!(0,m.Qh)(n))return null;let{limit_details:{next_model_slug:o}}=n;return{text:C.newChatButton,onClick:()=>{i({modelId:o,location:t})}}}({location:n,hasNoAvailableModels:(0,x.y)(t),updateModelQueryParam:(0,v.fm)(!0),rateLimit:i})};return(0,l.jsx)(c,{title:o,description:a,actions:d,onDismiss:s})},k=e=>{var t;let{rateLimitInfo:n,onDismiss:r}=e,{name:a,title:s,block:d,call_to_action:p,description:m}=n,f=(0,u.t)(),g=(0,v.fm)(!0),x=null!==(t=null==f?void 0:f.planType)&&void 0!==t?t:"unknown",y=e=>{let t="banner_description";switch(e){case i.Ev.GET_PLUS:{let e="block_reason"in n?n.block_reason:null;return{text:C.getPlusButton,onClick:()=>{h.A.logRateLimitGetPlusButtonClicked({type:a,location:t,plan_type:x,is_hard_block:d===i.Uk.SEND,hard_block_reason:null!=e?e:""}),(0,o.MG)("Prompt textarea rate limit banner")}}}case i.Ev.NEW_CHAT:return{text:C.newChatButton,onClick:()=>{g({modelId:"",location:t})}}}},[b,j]=null!=p?p:[],k={primaryAction:y(b),secondaryAction:y(j)};return(0,l.jsx)(c,{onDismiss:r,title:s,description:m,actions:k})},w=e=>{var t;let{clientThreadId:n,rateLimitWithBannerDescription:r,onDismiss:a}=e,s=(0,u.t)(),g=null!==(t=null==s?void 0:s.planType)&&void 0!==t?t:"unknown",x=(0,p.DJ)(n),{call_to_action:v,display_description:y}=r,{type:k,description:w,title:O}=y,_=O,T=w;if(x){let{modelName:e}=x;_=(0,l.jsx)(f.Z,b(b({},C.disabledChatTitle),{},{values:{modelName:e}})),T=function(e){let{reason:t,modelName:n}=e,r=P(t);return(0,l.jsx)(f.Z,b(b({},r),{},{values:{modelName:n,anotherModelName:n}}))}(x)}(0,d.n)(()=>{var e,t;h.A.logRateLimitBannerShown({location:k,type:null!==(e=(0,m.EJ)(r))&&void 0!==e?e:"unknown",plan_type:g,is_hard_block:!!x,hard_block_reason:null!==(t=null==x?void 0:x.reason)&&void 0!==t?t:""})});let N=v?v===i.Pt.GET_PLUS?{text:C.getPlusButton,onClick:()=>{var e,t;h.A.logRateLimitGetPlusButtonClicked({type:null!==(e=(0,m.EJ)(r))&&void 0!==e?e:"unknown",location:k,plan_type:g,is_hard_block:!!x,hard_block_reason:null!==(t=null==x?void 0:x.reason)&&void 0!==t?t:""}),(0,o.MG)("Prompt textarea rate limit banner")}}:void 0:null;return null!=n?(0,l.jsx)(j,{clientThreadId:n,location:k,title:_,description:T,onDismiss:x?void 0:a,primaryAction:N,rateLimitWithBannerDescription:r}):(0,l.jsx)(c,{title:_,description:T,actions:{primaryAction:N},onDismiss:a})},P=e=>{switch(e){case i.Lt.UNSUPPORTED_ATTACHMENT:return C.disabledChatRateLimitUnsupportedFileAttachments;case i.Lt.UNSUPPORTED_AUDIO:return C.disabledChatRateLimitUnsupportedAudio;case i.Lt.UNSUPPORTED_GIZMO:return C.disabledChatRateLimitUnsupportedGPT;case i.Lt.UNSUPPORTED_IMAGE:return C.disabledChatRateLimitUnsupportedImage;case i.Lt.UNSUPPORTED_TOOL_USE:return C.disabledChatRateLimitUnsupportedTool}},C=(0,g.vU)({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"},disabledChatTitle:{id:"5hqdz5",defaultMessage:"You've reached your {modelName} limit."},disabledChatRateLimitUnsupportedFileAttachments:{id:"hiWvSM",defaultMessage:"You need {anotherModelName} to continue this chat because there's an attachment."},disabledChatRateLimitUnsupportedAudio:{id:"DyLkDP",defaultMessage:"You need {anotherModelName} to continue this chat because it uses audio."},disabledChatRateLimitUnsupportedGPT:{id:"xMeHTR",defaultMessage:"You need {anotherModelName} to continue this chat because this GPT requires it."},disabledChatRateLimitUnsupportedImage:{id:"TSiLMo",defaultMessage:"You need {anotherModelName} to continue this chat because it has images."},disabledChatRateLimitUnsupportedTool:{id:"uxIK+V",defaultMessage:"You need {anotherModelName} to continue this chat because it uses tools."}})},310:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(92379);let i=e=>{(0,r.useEffect)(e,[])}}}]);
//# sourceMappingURL=1952-d4c2831762b77e10.js.map