(this["webpackJsonpperjansson.github.io-v2"]=this["webpackJsonpperjansson.github.io-v2"]||[]).push([[0],{14:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(10),i=t.n(o),c=t(6),l=t(3),u=t(4),s=t(2);function f(){var n=Object(l.a)(["\n      cursor: ",";\n    "]);return f=function(){return n},n}function d(){var n=Object(l.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return d=function(){return n},n}var m=u.b.div(d(),s.d,s.c,s.b,s.a,(function(n){var e=n.cursor;return Object(u.a)(f(),e)})),g=t(7),h=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1.3;return Array.from(Array(4)).map((function(t,r){return n*Math.max(1,r*e-r+1)}))};function p(){var n=Object(l.a)(["\n      text-shadow: 0 0 0.05em ",";\n    "]);return p=function(){return n},n}function v(){var n=Object(l.a)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ",""]);return v=function(){return n},n}var b=18,w=24,j=42,y=u.b.div(v(),(function(n){var e=n.glowColor;return e&&Object(u.a)(p(),e)}),s.d,s.c,s.a,s.e,s.b,Object(s.f)({variants:{medium:{fontSize:h(b)},large:{fontSize:h(w)},xLarge:{fontSize:h(j,1.6)}}}));y.propTypes={variant:Object(g.oneOf)(["medium","large","xLarge"]),glowColor:g.string,pulse:g.bool},y.defaultProps={variant:"medium"};var E=y;function O(){var n=Object(l.a)(["\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  text-shadow: 0 0 0.15em var(--landing-page-shadow-color);\n  white-space: nowrap;\n  filter: blur(0.007em);\n  animation: "," 2.5s linear forwards;\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: translate(-50%, -50%);\n    -webkit-clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);\n  }\n\n  ::before,\n  ::after {\n    content: attr(data-text);\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  ::before {\n    animation: "," 2.5s linear forwards;\n    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);\n  }\n\n  ::after {\n    animation: "," 2.5s linear forwards;\n    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);\n  }\n"]);return O=function(){return n},n}function k(){var n=Object(l.a)(["\n  0%, 95% {\n    transform: translate(-50%, -50%);\n  }\n\n  100% {\n    transform: translate(-49%, -53%);\n  }\n"]);return k=function(){return n},n}function x(){var n=Object(l.a)(["\n  0%, 95% {\n    transform: translate(-50%, -50%);\n  }\n\n  100% {\n    transform: translate(-51%, -48%);\n  }\n"]);return x=function(){return n},n}function C(){var n=Object(l.a)(["\n  5%, 15%, 25%, 35%, 55%, 65%, 75%, 95% {\n    filter: blur(0.018em);\n    transform: translateY(0.018em) rotate(0deg);\n  }\n\n  10%, 30%, 40%, 50%, 70%, 80%, 90% {\n    filter: blur(0.01em);\n    transform: translateY(-0.018em) rotate(0deg);\n  }\n\n  20%, 60% {\n    filter: blur(0.03em);\n    transform: translate(-0.018em, 0.018em) rotate(0deg);\n  }\n\n  45%, 85% {\n    filter: blur(0.03em);\n    transform: translate(0.018em, -0.018em) rotate(0deg);\n  }\n\n  100% {\n    filter: blur(0.007em);\n    transform: translate(0) rotate(-0.5deg);\n  }\n"]);return C=function(){return n},n}var A=Object(u.c)(C()),S=Object(u.c)(x()),W=Object(u.c)(k()),L=u.b.h1(O(),A,S,W),P=function(n){var e=n.children;return a.a.createElement(E,{variant:"xLarge",textAlign:"center"},a.a.createElement(L,{"data-text":e},a.a.createElement("span",null,e)))},T=function(n){var e=n.onClick,t=Object(r.useState)(!1),o=Object(c.a)(t,2),i=o[0],l=o[1];return Object(r.useEffect)((function(){var n=window.setTimeout((function(){return l(!0)}),3500);return function(){return window.clearTimeout(n)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{width:"100%",height:"90%",display:"flex",alignItems:"center",justifyContent:"center",onClick:e,cursor:"pointer"},a.a.createElement(P,null,"Per Jansson")),a.a.createElement(m,{width:"100%",height:"10%",display:"flex",alignItems:"center",justifyContent:"flex-end"},i&&a.a.createElement(E,{paddingRight:"40px",color:"var(--link-color)"},"Click anywhere to enter...")))},I=function(n){var e=n.children;return a.a.createElement("header",null,a.a.createElement(m,{width:1,minWidth:350,height:h(120,1.1),display:"flex",alignItems:"center",justifyContent:"center"},a.a.createElement(E,{variant:"large",color:"var(--primary-header-color)",marginLeft:"auto",textAlign:"center",glowColor:"var(--primary-header-glow-color)",pulse:!1},e),a.a.createElement(m,{width:["5%","3.5%","2%","1.5%"],height:"100%",marginLeft:"auto",bg:"var(--opposite-theme-bg-color)",onClick:function(){var n=document.documentElement;n.setAttribute("data-theme","dark"===n.getAttribute("data-theme")?"light":"dark")}})))},J=function(){return a.a.createElement(I,null,"Per Jansson - Fullstack Web Developer")};var R=function(){var n=Object(r.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];return t?a.a.createElement(J,null):a.a.createElement(T,{onClick:function(){return o(!0)}})},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(R,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");z?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):U(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(e,n)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.91b3abff.chunk.js.map