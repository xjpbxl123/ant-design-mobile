webpackJsonp([52,158],{10:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),i=s(u),f=e(2),d=a(f),k=function(n){function t(){return c(this,t),l(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.style,c=t.onClick,l=(0,d["default"])((n={},p(n,""+e,!0),p(n,s,!!s),p(n,e+"-ws"+a,!0),n));return i.createElement("div",{className:l,style:o,onClick:c})},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,e){"use strict";e(5),e(12)},12:function(n,t){},14:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),i=s(u),f=e(2),d=a(f),k=function(n){function t(){return c(this,t),l(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.children,c=t.style,l=(0,d["default"])((n={},p(n,""+e,!0),p(n,s,!!s),p(n,e+"-wb"+a,!0),n));return i.createElement("div",{className:l,style:c},o)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},15:function(n,t,e){"use strict";e(5),e(16)},16:function(n,t){},179:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),i=s(u),f=e(2),d=a(f),k=e(19),b=a(k),g=function(n){function t(e){c(this,t);var a=l(this,n.call(this,e));return a.onClick=function(){var n=a.props,t=n.type,e=n.disabled,s=n.closable,o=n.onChange;"read"===t||e||(s?a.onClose():!function(){var n=a.state.selected;a.setState({selected:!n},function(){o(!n)})}())},a.onClose=function(){var n=a.props,t=n.onClose,e=n.afterClose;t(),a.setState({closed:!0},e)},a.state={selected:e.selected,closed:!1},a}return r(t,n),t.prototype.render=function(){var n,t=this.props,e=t.children,a=t.className,s=t.prefixCls,o=t.type,c=t.size,l=t.disabled,r=t.closable,u=this.state.selected,f=(0,d["default"])((n={},p(n,a,!!a),p(n,s,!0),p(n,s+"-normal",!u),p(n,s+"-active",(u||r)&&!l&&"read"!==o),p(n,s+"-read","read"===o),p(n,s+"-disabled",l),p(n,s+"-size-small","small"===c),p(n,s+"-size-large","large"===c),n)),k=r&&!l&&"read"!==o&&"large"===c?i.createElement("div",{className:s+"-close"},i.createElement(b["default"],{type:"cross"})):null;return this.state.closed?null:i.createElement("div",{className:f,onClick:this.onClick},i.createElement("div",{className:s+"-text"},e),k)},t}(i.Component);t["default"]=g,g.defaultProps={prefixCls:"am-tag",type:"read",disabled:!1,size:"large",closable:!1,selected:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=t["default"]},180:function(n,t,e){"use strict";e(5),e(195)},195:function(n,t){},804:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(15),e(14)),o=a(s),p=(e(180),e(179)),c=a(p),l=(e(11),e(10)),r=a(l),u=e(1),i=a(u),f=e(4);a(f);n.exports={content:[["p","\u6dfb\u52a0 selected \u5c5e\u6027\u5373\u53ef\u8ba9\u6807\u7b7e\u5904\u4e8e\u88ab\u9009\u4e2d\u72b6\u6001\u3002"]],meta:{order:3,title:"\u6807\u7b7e\u9009\u4e2d\u9879",filename:"components/tag/demo/selected.md",id:"components-tag-demo-selected"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tag-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>large<span class="token punctuation" >"</span></span> <span class="token attr-name" >selected</span><span class="token punctuation" >></span></span>\u5927\u53f7\u6807\u7b7e\u9ed8\u8ba4\u9009\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>action<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >selected</span><span class="token punctuation" >></span></span>\u5c0f\u53f7\u6807\u7b7e\u9ed8\u8ba4\u9009\u4e2d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return i["default"].createElement("div",{className:"tag-container"},i["default"].createElement(r["default"],null),i["default"].createElement(o["default"],{size:20},i["default"].createElement(c["default"],{type:"action",size:"large",selected:!0},"\u5927\u53f7\u6807\u7b7e\u9ed8\u8ba4\u9009\u4e2d"),i["default"].createElement(r["default"],null),i["default"].createElement(c["default"],{type:"action",size:"small",selected:!0},"\u5c0f\u53f7\u6807\u7b7e\u9ed8\u8ba4\u9009\u4e2d"),i["default"].createElement(r["default"],null)),i["default"].createElement(r["default"],null))}}}});