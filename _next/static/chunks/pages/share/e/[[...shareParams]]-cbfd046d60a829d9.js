(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6737],{76330:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return b},default:function(){return j}});var r=n(39827),i=n(54717),a=n(23050),o=n(42005),s=n(19892),c=n(13038),u=n(99784),l=n(28816),d=n(61236),f=n(82473),h=n(59373);let p="".concat(h.v,"/api");async function y(e){let{ids:t}=e,n=[];for(let e of t)n.push(["ids",e]);let r=new URLSearchParams(n),i=await fetch("".concat(p,"/public/plugins/by-id?").concat(r),{method:"GET",headers:{"Content-Type":"application/json"}});if(200===i.status)return i.json();throw Error("Failed to get plugins by id: "+i.status)}var v=n(70079),O=n(35250);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b=!0;function j(e){let t=e.sharedConversationId,{data:n,isError:r}=(0,d.a)({queryKey:["shared-conversation/".concat(t)],queryFn:()=>c.Z.getAuthedSharedConversation(t)}),{0:h}=(0,v.useState)(()=>(0,u.OX)()),{0:p,1:_}=(0,v.useState)(!1),b=(0,f.NL)();return(0,v.useEffect)(()=>{r&&(window.location.href=(0,s.M5)(s.LT.SHARE_NOT_FOUND))},[r]),(0,v.useEffect)(()=>{(async function(){if(n&&h){var e;let r=null!==(e=n.plugin_ids)&&void 0!==e?e:[];if(r.length>0){let e=await y({ids:r});b.setQueryData(e.items.map(e=>e.id),e)}u.tQ.initThreadFromServerData(h,n,!0,t),_(!0)}})()},[n,t,h,b]),p?e.continueMode?(0,O.jsx)(i.ZP,g(g({},e.chatPageProps),{},{clientThreadId:h})):(0,O.jsx)(l.gB.Provider,{value:{serverSharedThreadId:t},children:(0,O.jsx)(a.Z,{clientThreadId:h,setClientThreadId:()=>{},initiallyHighlightedMessageId:null==n?void 0:n.highlighted_message_id,continueConversationUrl:null==n?void 0:n.continue_conversation_url})}):(0,O.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,O.jsx)(o.Z,{className:"text-token-text-tertiary"})})}},92447:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/share/e/[[...shareParams]]",function(){return n(76330)}])}},function(e){e.O(0,[4736,2888,9774,179],function(){return e(e.s=92447)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...shareParams]]-cbfd046d60a829d9.js.map