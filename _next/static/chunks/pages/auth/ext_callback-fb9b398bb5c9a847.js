(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4191],{24794:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(98601),o=r(82821),u=r(58695),c=r(4132),i=r(177),f=r(88667),s=r(87161),p=r(34977),a=r(92379),l=r(651);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function g(){return(0,l.jsx)(y,{})}function y(){let t=(0,p.useRouter)(),{isReady:e}=t,{next:r}=t.query,n="/auth/ext_callback_refresh?next="+encodeURIComponent("string"==typeof r&&r.startsWith("/")?r:"/"),l=(0,u._0)((0,f.xb)("1977905538").config.value);return(0,a.useEffect)(()=>{if(!e)return;let r=(0,o.A)(t,!1,l.forwardToAuthApi);(0,s.signIn)(r,{callbackUrl:n||"/"},O(O({},(0,c.gk)((0,i.f3)())),(0,u.zC)(l)))},[e]),null}},82821:function(t,e,r){"use strict";r.d(e,{A:function(){return O},b:function(){return g}});var n=r(98601),o=r(58695),u=r(4132),c=r(177),i=r(82826),f=r(88667),s=r(45120),p=r(87161),a=r(34977);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){(0,n.Z)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function O(t,e,r){return e?o.Ho.LoginWebAuth0:o.Ho.Auth0}function g(){let t=(0,a.useRouter)(),{value:e}=(0,s.fW)("1198030896"),r=(0,o._0)((0,f.xb)("1977905538").config.value),n=(0,i.L)();return function(){let{authType:i="signup",callbackUrl:f="/",additionalAuthParams:s={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=O(t,e,r.forwardToAuthApi),l=n();return(0,p.signIn)(a,{callbackUrl:f},b(b(b(b({prompt:"login",screen_hint:i},(0,u.gk)((0,c.f3)())),(0,o.zC)(r)),l?{use_email_otp:"true"}:{}),s)),a}}},4132:function(t,e,r){"use strict";r.d(e,{gk:function(){return o}});var n=r(95947);function o(t){return{"ext-statsig-tier":n.uG,"ext-oai-did":t}}},82826:function(t,e,r){"use strict";r.d(e,{L:function(){return o}});var n=r(45120);function o(){let{layer:t}=(0,n.AH)("1346366956");return()=>t.get("use_email_otp",!1)}},64801:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/ext_callback",function(){return r(24794)}])}},function(t){t.O(0,[2888,9774,179],function(){return t(t.s=64801)}),_N_E=t.O()}]);
//# sourceMappingURL=ext_callback-fb9b398bb5c9a847.js.map