zuix.setComponentCache([{componentId:"/web-app/lib/1.1/controllers/header-auto-hide",controller:((module={}).exports=function(t){let i,e,a,s,r,l=0,d;function p(){null!=i&&i.hasClass("header-collapse")&&i.removeClass("header-collapse").addClass("header-expand"),null!=e&&e.hasClass("footer-collapse")&&e.removeClass("footer-collapse").addClass("footer-expand"),d&&d.check()}function c(){i.hasClass("header-collapse")||i.removeClass("header-expand").addClass("header-collapse"),null==e||e.hasClass("footer-collapse")||e.removeClass("footer-expand").addClass("footer-collapse")}t.init=function(){t.options().css=!1,t.options().html=!1},t.create=function(){if(a=t.options().showEnd||"true"===t.view().attr("data-o-show-end"),!(i=t.options().header||t.view().attr("data-o-header")))throw new Error("Header element not specified.");if(0===(i=zuix.field(i)).length())throw new Error('Header element not found: "'+i+'".');s=i.position().rect.height;var o=getComputedStyle(i.get()).position;"fixed"!==o&&"absolute"!==o&&(l=s);const n=t.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+s+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+s+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+s+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");o=t.options().footer||t.view().attr("data-o-footer");null!=o&&((e=zuix.field(o)).css({position:"fixed",zIndex:1}),r=e.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+r+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+r+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+r+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:n,on:{"scroll:change":function(o,e){"scroll"===e.event&&e.info.viewport.y<-l?e.info.shift.y<-4?(0<l&&"fixed"!==i.css("position")&&(n.css({paddingTop:s+"px"}),i.hide().css({position:"fixed",zIndex:1})),c()):4<e.info.shift.y&&(i.show(),p()):"hit-bottom"===e.event&&a?(i.show(),p()):0<l&&0===e.info.viewport.y&&(n.css({paddingTop:null}),i.show().css({position:null,zIndex:null})),t.trigger("page:scroll",e)}},ready:function(o){d=o,t.expose("scroll",{get:function(){return d}}),t.trigger("scroll:ready",d)}}),t.expose("show",p),t.expose("hide",c)}},module.exports)},{componentId:"/web-app/lib/1.1/controllers/drawer-layout",controller:((module={}).exports=function(){let t=!0,i=!1,e=!1,a=!1,s=!0,r=null,l=null,d=null,p=280,n=960,c=!1,f=0;const u=this;function h(){l.visibility("initial").css("left",0).get().focus(),e&&(l.find("a").one("click",function(){m()}),r.css("opacity","initial"),r.show()),t||(t=!0,u.trigger("drawer:open",{smallScreen:e}))}function m(){var o;e&&(o=function(){t||l.visibility("hidden")},l.one("transitionend transitioncancel",function(){o()}),l.css("left",-p+"px"),r.hide(),t&&(t=!1,u.trigger("drawer:close",{smallScreen:e}))),t=!1,l.find("a").off("click")}function o(){return t}function x(){(window.innerWidth||document.body.clientWidth)<n||-1===n||c?(e&&!s||(e=!0,i=!1,w()),m()):(e||s)&&(e&&(r.hide(),t&&m()),e=!1,i=!0,w(),h())}function w(){var o;s||g(),d&&(o=parseFloat(getComputedStyle(d.get(),null).getPropertyValue("padding-left")),e?d.css({paddingLeft:o-p+"px"}):d.css({paddingLeft:p+o+"px"})),u.trigger("layout:change",{smallScreen:e,drawerLocked:i})}function g(){var o;a||(a=!0,o="ease .15s",l.css({"transition-property":"left",transition:o}),r.css({"transition-property":"opacity",transition:o}))}u.init=function(){const o=u.view();this.options().html=!1,this.options().css=!1,isNaN(this.options().drawerWidth)?(e=parseInt(o.attr("data-o-width")),isNaN(e)||(p=e)):p=parseInt(this.options().drawerWidth);{var e;isNaN(this.options().autoHideWidth)?(e=parseInt(o.attr("data-o-hide-width")),isNaN(e)||(n=e)):n=parseInt(this.options().autoHideWidth)}},u.create=function(){l=u.view(),d=u.options().mainContent,(r=zuix.$(document.createElement("div"))).css({position:"fixed",top:0,left:0,bottom:0,right:0,"z-index":100,"background-color":"rgba(0, 0, 0, 0.5)"}).on("click",function(){i||m()}).hide(),l.parent().append(r.get()),l.css({position:"fixed","overflow-y":"auto",left:0,width:p+"px",top:0,bottom:0,"z-index":101,"-webkit-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","-moz-box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)","box-shadow":"8px 0 6px -6px rgba(0,0,0,0.25)"}).attr("tabindex",0);let n=!1;zuix.load("@lib/controllers/gesture-helper",{view:document.documentElement,on:{"gesture:touch":function(o,e){i||(g(),f=t&&e.startX<p?p-e.startX:0)},"gesture:release":function(o,e){i||n&&(n=!1,g(),(0<e.velocity?h:m)())},"gesture:pan":function(o,e){if(!i&&"horizontal"===e.scrollIntent()&&((n||t)&&e.x<p||!n&&e.x<50)){n=n||!0,g();{let o=e.x;0<o&&o<=p-f&&(o=-p+o+f,"hidden"===l.visibility()&&l.visibility("initial"),l.css("left",o+"px"),"none"===r.display()&&r.show(),r.css("opacity",(p+o)/p))}a&&(a=!1,l.css({transition:"none"}),r.css({transition:"none"}))}}}}),u.expose("toggle",function(){g(),(t?m:h)()}),u.expose("open",function(){g(),h()}),u.expose("close",function(){g(),m()}),u.expose("isOpen",o),u.expose("lock",function(o){if(null==o)return i;i=o}),u.expose("float",function(o){if(null==o)return c;c=o,x()}),l.on("keydown",function(o){27===(o=o||window.event).keyCode&&m()}),x(),s=!1,window.addEventListener("resize",function(){x()})}},module.exports)}]);