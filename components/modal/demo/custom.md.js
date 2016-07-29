webpackJsonp([26,158],{10:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),i=s(r),f=a(2),d=e(f),k=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.style,l=t.onClick,c=(0,d["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-ws"+e,!0),n));return i.createElement("div",{className:c,style:o,onClick:l})},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},11:function(n,t,a){"use strict";a(5),a(12)},12:function(n,t){},13:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function r(n){return"string"==typeof n}function i(n){return r(n.type)&&C(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):r(n)?(C(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n},d=function(){function n(n,t){var a=[],e=!0,s=!1,o=void 0;try{for(var p,l=n[Symbol.iterator]();!(e=(p=l.next()).done)&&(a.push(p.value),!t||a.length!==t);e=!0);}catch(c){s=!0,o=c}finally{try{!e&&l["return"]&&l["return"]()}finally{if(s)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=a(1),m=s(k),b=a(2),y=e(b),v=a(19),h=e(v),g=a(21),w=e(g),O=/^[\u4e00-\u9fa5]{2}$/,C=O.test.bind(O),P=function(n){function t(){l(this,t);for(var a=arguments.length,e=Array(a),s=0;s<a;s++)e[s]=arguments[s];var o=c(this,n.call.apply(n,[this].concat(e)));return o.onClick=function(){o.props.onClick(o)},o}return u(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=d(t,2),e=a[0],s=e.children,o=e.className,l=e.prefixCls,c=e.type,u=e.size,r=e.ghost,k=e.inline,b=e.disabled,v=e.htmlType,g=e.icon,O=e.loading,C=a[1],P=(0,y["default"])((n={},p(n,o,o),p(n,l,!0),p(n,l+"-primary","primary"===c),p(n,l+"-ghost",r),p(n,l+"-warning","warning"===c),p(n,l+"-small","small"===u&&k),p(n,l+"-loading",O),p(n,l+"-inline",k),p(n,l+"-disabled",b),n)),j=O?"loading":g,E=m.Children.map(s,i);return m.createElement("button",f({},C,{type:v||"button",className:P,disabled:b,onClick:this.onClick}),j?m.createElement(h["default"],{type:j}):null,E)},t}(m.Component);t["default"]=P,P.propTypes={prefixCls:k.PropTypes.string,type:k.PropTypes.string,size:k.PropTypes.oneOf(["large","small"]),htmlType:k.PropTypes.oneOf(["submit","button","reset"]),ghost:k.PropTypes.bool,inline:k.PropTypes.bool,disabled:k.PropTypes.bool,loading:k.PropTypes.bool,icon:k.PropTypes.bool,onClick:k.PropTypes.func},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},14:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),i=s(r),f=a(2),d=e(f),k=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.size,s=t.className,o=t.children,l=t.style,c=(0,d["default"])((n={},p(n,""+a,!0),p(n,s,!!s),p(n,a+"-wb"+e,!0),n));return i.createElement("div",{className:c,style:l},o)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},15:function(n,t,a){"use strict";a(5),a(16)},16:function(n,t){},17:function(n,t,a){"use strict";a(5),a(18)},18:function(n,t){},64:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),e=0;e<a.length;e++){var s=a[e],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=a(1),i=s(r),f=a(144),d=e(f),k=a(2),m=e(k),b=a(30),y=e(b),v=function(n){function t(){return l(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.componentWillMount=function(){var n=this.props,t=n.visible,a=n.onShow;t&&a()},t.prototype.componentDidMount=function(){this.componentDidUpdate(this.props)},t.prototype.componentWillReceiveProps=function(n){n.visible&&this.props.onShow()},t.prototype.componentDidUpdate=function(n){var t=this.props,a=t.prefixCls,e=t.closable;if(n.visible===!0&&!e){var s=document.getElementsByClassName(a+"-close")[0];s&&(s.style.display="none")}},t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,e=t.className,s=t.wrapClassName,o=t.transparent,l=t.animated,c=t.animation,u=t.maskAnimation,r=t.closable,f=t.maskClosable,k=t.style,b=t.bodyStyle,v=t.visible,h=t.children,g=t.onClose,w=t.footer,O=(0,m["default"])((n={},p(n,e,!!e),p(n,a+"-transparent",o),n)),C=c||(l?"slide":null),P=u||(l?"slide":null),j=o?(0,y["default"])({width:"286px",height:"auto"},k):(0,y["default"])({width:"100%",height:"100%"},k);return i.createElement(d["default"],{prefixCls:a,className:O,wrapClassName:s,animation:C,maskAnimation:P,style:j,bodyStyle:b,visible:v,closable:r||f,maskClosable:f,onClose:g,footer:w},h)},t}(i.Component);t["default"]=v,v.defaultProps={prefixCls:"am-modal",wrapClassName:"",visible:!1,closable:!1,maskClosable:!1,transparent:!1,animated:!0,style:{},bodyStyle:{},onClose:function(){},onShow:function(){},footer:null},n.exports=t["default"]},125:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){function n(){l.setState({visible:!1}),c.unmountComponentAtNode(o),o.parentNode.removeChild(o)}var t=arguments.length<=0?void 0:arguments[0],a=arguments.length<=1?void 0:arguments[1],e=(arguments.length<=2?void 0:arguments[2])||[{text:"\u786e\u5b9a"}];if(t||a){var s="am-modal",o=document.createElement("div");document.body.appendChild(o);var l=void 0,u=s+"-button-group-"+(2===e.length?"h":"v"),i=[p.createElement("div",{key:"footer",className:u},e.map(function(t,a){return p.createElement("a",{key:a,className:s+"-button",href:"#",onClick:function(a){a.preventDefault(),t.onPress&&t.onPress(),n()}},t.text||"\u6309\u94ae"+a)}))];c.render(p.createElement(r["default"],{visible:!0,transparent:!0,prefixCls:s,title:t,animation:"zoom",footer:i,maskAnimation:"fade"},p.createElement("div",{style:{zoom:1,overflow:"hidden"}},a)),o,function(){l=this})}};var o=a(1),p=s(o),l=a(4),c=s(l),u=a(64),r=e(u);n.exports=t["default"]},126:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(64),o=e(s),p=a(125),l=e(p),c=a(127),u=e(c);o["default"].alert=l["default"],o["default"].prompt=u["default"],t["default"]=o["default"],n.exports=t["default"]},127:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(){function n(n){var t=n.target,a=t.getAttribute("type");k.setState(o({},a,t.value))}function t(){k.setState({visible:!1}),u.unmountComponentAtNode(b),b.parentNode.removeChild(b)}function a(n){var t=k.state&&k.state.text||"",a=k.state&&k.state.password||"";return"login-password"===d?n(t,a):n("secure-text"===d?a:t)}for(var e=arguments.length,s=Array(e),p=0;p<e;p++)s[p]=arguments[p];if(s&&s[2]){var c="am-modal",r=s[0],f=void 0,d=s[3]||"default",k=void 0;switch(d){case"login-password":f=l.createElement("div",null,l.createElement("div",{className:c+"-input"},l.createElement("input",{type:"text",defaultValue:"",onChange:n})),l.createElement("div",{className:c+"-input"},l.createElement("input",{type:"password",defaultValue:"",onChange:n})));break;case"secure-text":f=l.createElement("div",null,l.createElement("div",{className:c+"-input"},l.createElement("input",{type:"password",defaultValue:"",onChange:n})));break;case"plain-text":case"default":default:f=l.createElement("div",null,l.createElement("div",{className:c+"-input"},l.createElement("input",{type:"text",defaultValue:"",onChange:n})))}var m=l.createElement("div",null,s[1],f),b=document.createElement("div");document.body.appendChild(b);var y=void 0;y="function"==typeof s[2]?[{text:"\u53d6\u6d88"},{text:"\u786e\u5b9a",onPress:function(){a(s[2])}}]:s[2].map(function(n){return{text:n.text,onPress:function(){n.onPress&&a(n.onPress)}}});var v=[l.createElement("div",{key:"footer",className:c+"-button-group-h"},y.map(function(n,a){return l.createElement("a",{key:a,className:c+"-button",href:"#",onClick:function(a){a.preventDefault(),n.onPress&&n.onPress(),t()}},n.text)}))];u.render(l.createElement(i["default"],{visible:!0,transparent:!0,prefixCls:c,title:r,animation:"zoom",footer:v,maskAnimation:"fade"},l.createElement("div",{style:{zoom:1,overflow:"hidden"}},m)),b,function(){k=this})}};var p=a(1),l=s(p),c=a(4),u=s(c),r=a(64),i=e(r);n.exports=t["default"]},174:function(n,t,a){"use strict";a(5),a(192)},192:function(n,t){},745:function(n,t,a){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}var s=(a(15),a(14)),o=e(s),p=(a(174),a(126)),l=e(p),c=(a(17),a(13)),u=e(c),r=(a(11),a(10)),i=e(r),f=a(1),d=e(f),k=a(4);e(k);n.exports={content:[["p","\u53ef\u5173\u95ed\u7684\u6d6e\u5c42"]],meta:{order:1,title:"\u53ef\u5173\u95ed",filename:"components/modal/demo/custom.md",id:"components-modal-demo-custom"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >showModal</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      visible<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onClose</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      visible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>showModal<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            \u53ef\u5173\u95ed\u5bf9\u8bdd\u6846\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1313123<span class="token punctuation" >"</span></span> <span class="token attr-name" >animated</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >transparent</span> <span class="token attr-name" >closable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >maskClosable</span> <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClose<span class="token punctuation" >}</span></span> <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>visible<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            \u8fd9\u662f\u5185\u5bb9<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n            \u8fd9\u662f\u5185\u5bb9<span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].createClass({displayName:"App",getInitialState:function(){return{visible:!1}},showModal:function(){this.setState({visible:!0})},onClose:function(){this.setState({visible:!1})},render:function(){return d["default"].createElement("div",null,d["default"].createElement(i["default"],{size:20}),d["default"].createElement(o["default"],null,d["default"].createElement(u["default"],{type:"primary",onClick:this.showModal},"\u53ef\u5173\u95ed\u5bf9\u8bdd\u6846"),d["default"].createElement(l["default"],{title:"1313123",animated:!1,transparent:!0,closable:!1,maskClosable:!0,onClose:this.onClose,visible:this.state.visible},"\u8fd9\u662f\u5185\u5bb9...",d["default"].createElement("br",null),"\u8fd9\u662f\u5185\u5bb9...",d["default"].createElement("br",null))),d["default"].createElement(i["default"],{size:20}))}});return d["default"].createElement(n,null)}}}});