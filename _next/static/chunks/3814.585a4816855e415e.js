(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3814],{51516:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},17224:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:function(){return r}})},98987:function(e,t,n){var r=n(3284);e.exports=function(e,t){for(var n=-1,o=e.length,i=0,a=[];++n<o;){var u=e[n],c=t?t(u):u;if(!n||!r(c,l)){var l=c;a[i++]=0===u?0:u}}return a}},68039:function(e,t,n){var r=n(790),o=n(65064),i=n(43735),a=n(2428),u=n(71701),c=n(7757),l=n(92403),d=n(56868),s=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(u(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||d(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!r(e).length;for(var n in e)if(s.call(e,n))return!1;return!0}},52538:function(e,t,n){var r=n(61757),o=n(98987);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},11039:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(37088),o=n(58517),i=n(92379),a=n(82845),u=function(e){var t=i.useRef(e);return(0,a.Z)(function(){t.current=e}),t},c=function(e,t){if("function"==typeof e){e(t);return}e.current=t},l=function(e,t){var n=(0,i.useRef)();return(0,i.useCallback)(function(r){e.current=r,n.current&&c(n.current,null),n.current=t,t&&c(t,r)},[t])},d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(d).forEach(function(t){e.style.setProperty(t,d[t],"important")})},f=null,p=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},h=function(){},g=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],b=!!document.documentElement.currentStyle,v=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=g.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;b&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:i}};function m(e,t,n){var r=u(n);i.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var y=function(e){m(window,"resize",e)},x=function(e){m(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],E=i.forwardRef(function(e,t){var n=e.cacheMeasurements,a=e.maxRows,u=e.minRows,c=e.onChange,d=void 0===c?h:c,g=e.onHeightChange,b=void 0===g?h:g,m=(0,o.Z)(e,w),E=void 0!==m.value,C=i.useRef(null),S=l(C,t),z=i.useRef(0),R=i.useRef(),M=function(){var e,t,r,o,i,c,l,d,h,g,m,y=C.current,x=n&&R.current?R.current:v(y);if(x){R.current=x;var w=(e=y.value||y.placeholder||"x",void 0===(t=u)&&(t=1),void 0===(r=a)&&(r=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),s(f)),null===f.parentNode&&document.body.appendChild(f),o=x.paddingSize,i=x.borderSize,l=(c=x.sizingStyle).boxSizing,Object.keys(c).forEach(function(e){f.style[e]=c[e]}),s(f),f.value=e,d=p(f,x),f.value=e,d=p(f,x),f.value="x",g=(h=f.scrollHeight-o)*t,"border-box"===l&&(g=g+o+i),d=Math.max(g,d),m=h*r,"border-box"===l&&(m=m+o+i),[d=Math.min(m,d),h]),E=w[0],S=w[1];z.current!==E&&(z.current=E,y.style.setProperty("height",E+"px","important"),b(E,{rowHeight:S}))}};return i.useLayoutEffect(M),y(M),x(M),i.createElement("textarea",(0,r.Z)({},m,{onChange:function(e){E||M(),d(e)},ref:S}))})},82845:function(e,t,n){"use strict";var r=n(92379).useLayoutEffect;t.Z=r},30757:function(e,t,n){"use strict";n.d(t,{VY:function(){return T},aV:function(){return R},fC:function(){return z},xz:function(){return M}});var r=n(37088),o=n(92379),i=n(10132),a=n(31541),u=n(65954),c=n(79813),l=n(52125),d=n(76228),s=n(48758),f=n(28531);let p="Tabs",[h,g]=(0,a.b)(p,[u.Pc]),b=(0,u.Pc)(),[v,m]=h(p),y=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,onValueChange:a,defaultValue:u,orientation:c="horizontal",dir:p,activationMode:h="automatic",...g}=e,b=(0,d.gm)(p),[m,y]=(0,s.T)({prop:i,onChange:a,defaultProp:u});return(0,o.createElement)(v,{scope:n,baseId:(0,f.M)(),value:m,onValueChange:y,orientation:c,dir:b,activationMode:h},(0,o.createElement)(l.WV.div,(0,r.Z)({dir:b,"data-orientation":c},g,{ref:t})))}),x=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:i=!0,...a}=e,c=m("TabsList",n),d=b(n);return(0,o.createElement)(u.fC,(0,r.Z)({asChild:!0},d,{orientation:c.orientation,dir:c.dir,loop:i}),(0,o.createElement)(l.WV.div,(0,r.Z)({role:"tablist","aria-orientation":c.orientation},a,{ref:t})))}),w=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,disabled:c=!1,...d}=e,s=m("TabsTrigger",n),f=b(n),p=C(s.baseId,a),h=S(s.baseId,a),g=a===s.value;return(0,o.createElement)(u.ck,(0,r.Z)({asChild:!0},f,{focusable:!c,active:g}),(0,o.createElement)(l.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":g,"aria-controls":h,"data-state":g?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:p},d,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{c||0!==e.button||!1!==e.ctrlKey?e.preventDefault():s.onValueChange(a)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&s.onValueChange(a)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==s.activationMode;g||c||!e||s.onValueChange(a)})})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,forceMount:a,children:u,...d}=e,s=m("TabsContent",n),f=C(s.baseId,i),p=S(s.baseId,i),h=i===s.value,g=(0,o.useRef)(h);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(c.z,{present:a||h},({present:n})=>(0,o.createElement)(l.WV.div,(0,r.Z)({"data-state":h?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:p,tabIndex:0},d,{ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0}}),n&&u))});function C(e,t){return`${e}-trigger-${t}`}function S(e,t){return`${e}-content-${t}`}let z=y,R=x,M=w,T=E},6909:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(92379);function o(e,t,n){(0,r.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},86336:function(e,t,n){"use strict";n.d(t,{c:function(){return u}});var r=n(92379),o=n(35069),i=n(66472),a=n(49439);function u(e){let t=(0,a.h)(()=>(0,o.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},77360:function(e,t,n){"use strict";n.d(t,{q:function(){return d}});var r=n(92379),o=n(71867),i=n(86336),a=n(66472),u=n(39882),c=n(41843),l=n(74371);function d(e,t={}){let{isStatic:n}=(0,r.useContext)(a._),d=(0,r.useRef)(null),s=(0,i.c)((0,o.i)(e)?e.get():e),f=()=>{d.current&&d.current.stop()};return(0,r.useInsertionEffect)(()=>s.attach((e,r)=>{if(n)return r(e);let o=d.current;return o&&0===o.time&&o.sample(l.frameData.delta),f(),d.current=(0,c.y)({keyframes:[s.get(),e],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),s.get()},f),[JSON.stringify(t)]),(0,u.L)(()=>{if((0,o.i)(e))return e.on("change",e=>s.set(parseFloat(e)))},[s]),s}}}]);
//# sourceMappingURL=3814.585a4816855e415e.js.map