(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[10],{125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=a(128),l=a(124),s=a(14),p=(a(129),a(130),a(131),a(126),function(){return(p=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t=e.children,a=e.title,o=e.className,d=e.code,u=m(e,["children","title","className","code"]),f=Object(n.useState)(!1),b=f[0],y=f[1];return r.a.createElement("div",p({className:c()("code-card",o)},u),r.a.createElement("h1",null,a),r.a.createElement("div",{className:"code-card_demo"},t),r.a.createElement(s.m,{className:"icon-code-toggle",type:"code",onClick:function(){return y(!b)}}),r.a.createElement(l.a,{in:b,timeout:300,classNames:"code",unmountOnExit:!0},r.a.createElement(i.UnControlled,{className:"code-mirror_container",value:d,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,t,a){console.log(a)}})))}},126:function(e,t,a){var n=a(7),r=a(127);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},127:function(e,t,a){(t=a(8)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{width:80%;border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{z-index:0;height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=t},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(125),c=a(14);t.default=function(){var e=Object(n.useState)("nav1"),t=e[0],a=e[1];return r.a.createElement("div",null,r.a.createElement(o.a,{title:"基本用法",style:{marginBottom:20}},r.a.createElement(c.p,{selectedKey:t,onClick:a},r.a.createElement(c.q,{curKey:"nav1"},"Navigation One"),r.a.createElement(c.q,{disabled:!0,curKey:"nav2"},"Navigation Two"),r.a.createElement(c.t,{title:"Navigation Three - Submenu",curKey:"nav3"},r.a.createElement(c.r,{title:"Item 1"},r.a.createElement(c.q,{curKey:"nav3-option1"},"Option 1"),r.a.createElement(c.q,{curKey:"nav3-option2"},"Option 2")),r.a.createElement(c.r,{title:"Item 2"},r.a.createElement(c.q,{curKey:"nav3-option3"},"Option 3"),r.a.createElement(c.q,{curKey:"nav3-option4"},"Option 4"))),r.a.createElement(c.q,{curKey:"nav4"},r.a.createElement("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},"Navigation Four - Link")))),r.a.createElement(o.a,{title:"layout"}))}}}]);