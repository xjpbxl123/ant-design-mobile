webpackJsonp([45,158],{65:function(n,a,s){"use strict";n.exports=s(68)},66:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var l=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},r=s(1),i=e(r),k=s(65),d=t(k),f=function(n){function a(){return o(this,a),c(this,n.apply(this,arguments))}return u(a,n),a.prototype.render=function(){return i.createElement(d["default"],l({},this.props,{type:"radio"}))},a}(i.Component);a["default"]=f,f.defaultProps={prefixCls:"am-radio",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=a["default"]},68:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function p(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function o(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function c(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var u=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},l=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),r=s(1),i=t(r),k=s(69),d=t(k),f=s(2),h=t(f),y=function(n){function a(n){p(this,a);var s=o(this,Object.getPrototypeOf(a).call(this,n));g.call(s);var t=!1;return t="checked"in n?n.checked:n.defaultChecked,s.state={checked:t,focus:!1},s}return c(a,n),l(a,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];return d["default"].shouldComponentUpdate.apply(this,a)}},{key:"render",value:function(){var n,a=u({},this.props);delete a.defaultChecked;var s=this.state,t=a.prefixCls,p=s.checked;"boolean"==typeof p&&(p=p?1:0);var o=(0,h["default"])((n={},e(n,a.className,!!a.className),e(n,t,1),e(n,t+"-checked",p),e(n,t+"-checked-"+p,!!p),e(n,t+"-focused",s.focus),e(n,t+"-disabled",a.disabled),n));return i["default"].createElement("span",{className:o,style:a.style},i["default"].createElement("span",{className:t+"-inner"}),i["default"].createElement("input",{name:a.name,type:a.type,readOnly:a.readOnly,disabled:a.disabled,className:t+"-input",checked:!!p,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange}))}}]),a}(i["default"].Component),g=function(){var n=this;this.handleFocus=function(a){n.setState({focus:!0}),n.props.onFocus(a)},this.handleBlur=function(a){n.setState({focus:!1}),n.props.onBlur(a)},this.handleChange=function(a){var s=n.state.checked;"checked"in n.props||n.setState({checked:!s}),n.props.onChange({target:u({},n.props,{checked:!s}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()}})}};a["default"]=y,y.propTypes={name:i["default"].PropTypes.string,prefixCls:i["default"].PropTypes.string,style:i["default"].PropTypes.object,type:i["default"].PropTypes.string,className:i["default"].PropTypes.string,defaultChecked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),checked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),onFocus:i["default"].PropTypes.func,onBlur:i["default"].PropTypes.func,onChange:i["default"].PropTypes.func},y.defaultProps={prefixCls:"rc-checkbox",style:{},type:"checkbox",className:"",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},n.exports=a["default"]},69:function(n,a,s){n.exports=s(70)},70:function(n,a,s){"use strict";var t=s(71),e={shouldComponentUpdate:function(n,a){return t(this,n,a)}};n.exports=e},71:function(n,a,s){"use strict";function t(n,a,s){return!e(n.props,a)||!e(n.state,s)}var e=s(106);n.exports=t},95:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function p(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var e=s[t],p=Object.getOwnPropertyDescriptor(a,e);p&&p.configurable&&void 0===n[e]&&Object.defineProperty(n,e,p)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function u(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function l(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):p(n,a))}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=s(1),i=e(r),k=s(2),d=t(k),f=s(66),h=t(f),y=s(20),g=t(y),b=g["default"].Item,m=function(n){function a(){return c(this,a),u(this,n.apply(this,arguments))}return l(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.listPrefixCls,e=a.style,p=a.name,c=a.checked,u=a.disabled,l=a.children,r=a.className,k=a.onChange,f=(0,d["default"])((n={},o(n,s+"-item",!0),o(n,s+"-item-disabled",u===!0),o(n,r,r),n));return i.createElement(b,{prefixCls:t,style:e,className:f,extra:i.createElement(h["default"],{checked:c,name:p,onChange:k,disabled:u})},l)},a}(i.Component);a["default"]=m,m.defaultProps={prefixCls:"am-radio",listPrefixCls:"am-list",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=a["default"]},96:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(66),p=t(e),o=s(95),c=t(o);p["default"].RadioItem=c["default"],a["default"]=p["default"],n.exports=a["default"]},236:function(n,a,s){"use strict";s(5),s(24),s(251)},251:function(n,a){},767:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(236),s(96)),p=t(e),o=s(1),c=t(o),u=s(4);t(u);n.exports={content:[["p","Radio"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/radio/demo/basic.md",id:"components-radio-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange2</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> position<span class="token punctuation" >:</span> <span class="token string" >\'relative\'</span><span class="token punctuation" >,</span> paddingTop<span class="token punctuation" >:</span> <span class="token string" >\'5px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderWidth<span class="token punctuation" >:</span> <span class="token string" >\'1px\'</span><span class="token punctuation" >,</span> borderColor<span class="token punctuation" >:</span> <span class="token string" >\'red\'</span><span class="token punctuation" >,</span> borderStyle<span class="token punctuation" >:</span> <span class="token string" >\'solid\'</span><span class="token punctuation" >,</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 4px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderWidth<span class="token punctuation" >:</span> <span class="token string" >\'1px\'</span><span class="token punctuation" >,</span> borderColor<span class="token punctuation" >:</span> <span class="token string" >\'rgba(45, 183, 245, 0.7)\'</span><span class="token punctuation" >,</span> borderStyle<span class="token punctuation" >:</span> <span class="token string" >\'solid\'</span><span class="token punctuation" >,</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 4px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange2<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=c["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!1,value:1}},handleChange:function(n){n.target.checked&&this.setState({value:1})},handleChange2:function(n){n.target.checked&&this.setState({value:2})},render:function(){return c["default"].createElement("div",null,c["default"].createElement("div",{style:{position:"relative",paddingTop:"5px"}},c["default"].createElement("span",{style:{borderWidth:"1px",borderColor:"red",borderStyle:"solid",margin:"10px 4px"}},c["default"].createElement(p["default"],{checked:1===this.state.value,onChange:this.handleChange})),c["default"].createElement("span",{style:{borderWidth:"1px",borderColor:"rgba(45, 183, 245, 0.7)",borderStyle:"solid",margin:"10px 4px"}},c["default"].createElement(p["default"],{checked:2===this.state.value,onChange:this.handleChange2}))))}});return c["default"].createElement(n,null)}}}});