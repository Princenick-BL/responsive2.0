(this["webpackJsonpresponsive2.0"]=this["webpackJsonpresponsive2.0"]||[]).push([[0],{10:function(e,s,a){},12:function(e,s,a){"use strict";a.r(s);var t=a(1),n=a.n(t),c=a(4),d=a.n(c),i=(a(9),a(3)),l=(a(10),a(0));function r(){var e=Object(t.useState)(window.innerWidth),s=Object(i.a)(e,2),a=s[0],n=s[1],c=Object(t.useState)(!1),d=Object(i.a)(c,2),r=d[0],o=d[1];return Object(t.useEffect)((function(){var e=function(){n(window.innerWidth),window.innerWidth>500&&o(!1)};return window.addEventListener("resize",e),function(){window.removeEventListner("resize",e)}}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(t.Fragment,{children:Object(l.jsxs)("nav",{className:"menu flexH",children:[(a>500||r)&&Object(l.jsxs)("div",{className:r?"menuContainer opened flexV":"menuContainer closed flexV",children:[Object(l.jsx)("img",{className:"logo",src:"data:image/png;base64,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",alt:"Logo"}),Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("div",{className:"userFirstname",children:"BALLO"}),Object(l.jsx)("div",{className:"userName",children:"Prince Nick"})]}),Object(l.jsxs)("ul",{className:"menuOptions",children:[Object(l.jsx)("li",{className:"MenuOption",children:"Option 1"}),Object(l.jsx)("li",{className:"MenuOption",children:"Option 2"}),Object(l.jsx)("li",{className:"MenuOption",children:"Option 3"}),Object(l.jsx)("li",{className:"MenuOption",children:"Option 4"})]})]}),Object(l.jsxs)("div",{className:"toggleMenu flexV",onClick:function(){o(!r)},children:[Object(l.jsx)("div",{className:r?"change":"dimiss "}),Object(l.jsx)("div",{className:r?"change":"dimiss "}),Object(l.jsx)("div",{className:r?"change":"dimiss "}),Object(l.jsxs)("div",{className:r?"dimiss ":"flexH t",children:[Object(l.jsx)("div",{className:"nav-btn-span l "}),Object(l.jsx)("div",{className:"nav-btn-span l "}),Object(l.jsx)("div",{className:"nav-btn-span l"})]}),Object(l.jsxs)("div",{className:r?"dimiss ":"flexH t",children:[Object(l.jsx)("div",{className:"nav-btn-span l"}),Object(l.jsx)("div",{className:"nav-btn-span l "}),Object(l.jsx)("div",{className:"nav-btn-span l"})]}),Object(l.jsxs)("div",{className:r?"dimiss ":"flexH t",children:[Object(l.jsx)("div",{className:"nav-btn-span l"}),Object(l.jsx)("div",{className:"nav-btn-span l "}),Object(l.jsx)("div",{className:"nav-btn-span l"})]})]})]})})})}var o=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(r,{})})};d.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))},9:function(e,s,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.2cefb625.chunk.js.map