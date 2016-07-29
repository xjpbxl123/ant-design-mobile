webpackJsonp([63,158],{10:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function o(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):o(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=t(1),r=e(i),k=t(2),f=s(k),d=function(n){function a(){return c(this,a),l(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){var n,a=this.props,t=a.prefixCls,s=a.size,e=a.className,o=a.style,c=a.onClick,l=(0,f["default"])((n={},p(n,""+t,!0),p(n,e,!!e),p(n,t+"-ws"+s,!0),n));return r.createElement("div",{className:l,style:o,onClick:c})},a}(r.Component);a["default"]=d,d.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=a["default"]},11:function(n,a,t){"use strict";t(5),t(12)},12:function(n,a){},240:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a["default"]=n,a}function o(n,a){for(var t=Object.getOwnPropertyNames(a),s=0;s<t.length;s++){var e=t[s],o=Object.getOwnPropertyDescriptor(a,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,a,t){return a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):o(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var i=t(1),r=e(i),k=t(2),f=s(k),d=t(19),m=s(d),b=function(n){function a(t){c(this,a);var s=l(this,n.call(this,t));return s.state={show:!0},s}return u(a,n),a.prototype.onClick=function t(){var n=this.props,a=n.mode,t=n.onClick;t(),"closable"===a&&this.setState({show:!1})},a.prototype.render=function(){var n,a=this,t=this.props,s=t.prefixCls,e=t.children,o=t.mode,c=t.type,l=t.onClick,u=t.className,i=(0,f["default"])((n={},p(n,s,!0),p(n,u,!!u),n)),k=void 0;switch(o){case"closable":k=r.createElement("div",{className:"am-top-notice-operation",onClick:function(){return a.onClick()}},r.createElement(m["default"],{type:"cross"}));break;case"link":k=r.createElement("div",{className:"am-top-notice-operation",onClick:l},r.createElement(m["default"],{type:"right"}));break;default:k=null}var d="";switch(c){case"success":d="check-circle";break;case"error":d="cross-circle";break;case"warn":d="exclamation-circle";break;case"question":d="question-circle";break;case"info":default:d="info-circle"}var b=c?r.createElement("div",{className:"am-top-notice-icon"},r.createElement(m["default"],{type:d})):null;return this.state.show?r.createElement("div",{className:i},b,r.createElement("div",{className:"am-top-notice-content"},e),k):null},a}(r.Component);a["default"]=b,b.defaultProps={prefixCls:"am-top-notice",mode:"",onClick:function(){}},n.exports=a["default"]},241:function(n,a,t){"use strict";t(5),t(253)},253:function(n,a){},815:function(n,a,t){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(t(241),t(240)),o=s(e),p=(t(11),t(10)),c=s(p),l=t(1),u=s(l),i=t(4);s(i);n.exports={content:[["p","\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u5173\u95ed\u56fe\u6807\u540e\uff0c\u9690\u85cf\u8be5\u680f\u3002"]],meta:{order:0,title:"\u53ef\u5173\u95ed",filename:"components/top-notice/demo/closable.md",id:"components-top-notice-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TopNotice<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> TopNoticeExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'clicked\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TopNotice</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token number" >1</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TopNotice</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TopNotice</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TopNotice</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TopNoticeExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"TopNoticeExample",onClick:function(){alert("clicked")},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:20}),u["default"].createElement(o["default"],{mode:"closable",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f41"),u["default"].createElement(c["default"],{size:20}),u["default"].createElement(o["default"],{type:"info",mode:"closable"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:20}))}});return u["default"].createElement(n,null)}}}});