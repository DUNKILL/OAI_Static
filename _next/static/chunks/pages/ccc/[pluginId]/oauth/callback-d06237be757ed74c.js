(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1475],{37917:function(c,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return s},default:function(){return i}});var e=n(65733),u=n(40806),r=n(71727),a=n(16215),o=n(70079),s=!0;function i(c){let{pluginId:t,code:n,state:s,error:i,errorDesc:_}=c,f=(0,a.useRouter)(),l=(0,o.useRef)(!1);(0,o.useEffect)(()=>{!0!==l.current&&(l.current=!0,async function(){let c="".concat(window.location.origin,"/ccc/").concat(t,"/oauth/callback");if(!t||!n||!s)return;let e=await r.Z.connectorOauthCallback(t,n,c,s);if(e.success){let c=new URL((0,u.M5)(u.LT.OAUTH_SUCCESS,e.redirect_path));c.searchParams.set("oauth_success","true"),f.push(c.toString())}else{var a;f.push((0,u.M5)(u.LT.CUSTOM_ERROR,e.redirect_path,null!==(a=e.error)&&void 0!==a?a:e.message))}}())},[t,n,s,f]),(0,o.useEffect)(()=>{i&&e.m.danger("".concat(i).concat(_?": ".concat(_):""))},[i,_])}},24279:function(c,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ccc/[pluginId]/oauth/callback",function(){return n(37917)}])}},function(c){c.O(0,[4736,2888,9774,179],function(){return c(c.s=24279)}),_N_E=c.O()}]);
//# sourceMappingURL=callback-d06237be757ed74c.js.map