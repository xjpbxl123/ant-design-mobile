webpackJsonp([81,158],{226:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},r=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=n[Symbol.iterator]();!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(u){e=!0,o=u}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=a(1),k=e(l),d=a(257),f=s(d),h=a(21),g=s(h),b=function(n){function t(){return p(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n=(0,g["default"])(this.props,["prefixCls","children"]),t=r(n,2),a=t[0],s=a.prefixCls,e=a.children,o=t[1];return k.createElement(f["default"],i({prefixCls:s},o),e)},t}(k.Component);t["default"]=b,b.propTypes={prefixCls:l.PropTypes.string,enableDragHandle:l.PropTypes.bool},b.defaultProps={prefixCls:"am-drawer",enableDragHandle:!1},n.exports=t["default"]},227:function(n,t,a){"use strict";a(5),a(247)},247:function(n,t){},256:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function o(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):e(n,t))}function i(n){for(var t=n,a=0,s=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)a+=t.offsetLeft-t.scrollLeft,s+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{top:s,left:a}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n},k=a(1),d=s(k),f=a(4),h=s(f),g=a(2),b=s(g),m=20,y=function(n){function t(a){p(this,t);var s=c(this,n.call(this,a));return s.onOverlayClicked=function(){s.props.open&&s.props.onOpenChange(!1,{overlayClicked:!0})},s.onTouchStart=function(n){if(!s.isTouching()){var t=n.targetTouches[0];s.setState({touchIdentifier:t.identifier,touchStartX:t.clientX,touchStartY:t.clientY,touchCurrentX:t.clientX,touchCurrentY:t.clientY})}},s.onTouchMove=function(n){if(n.preventDefault(),s.isTouching())for(var t=0;t<n.targetTouches.length;t++)if(n.targetTouches[t].identifier===s.state.touchIdentifier){s.setState({touchCurrentX:n.targetTouches[t].clientX,touchCurrentY:n.targetTouches[t].clientY});break}},s.onTouchEnd=function(){if(s.isTouching()){var n=s.touchSidebarWidth();(s.props.open&&n<s.state.sidebarWidth-s.props.dragToggleDistance||!s.props.open&&n>s.props.dragToggleDistance)&&s.props.onOpenChange(!s.props.open);var t=s.touchSidebarHeight();(s.props.open&&t<s.state.sidebarHeight-s.props.dragToggleDistance||!s.props.open&&t>s.props.dragToggleDistance)&&s.props.onOpenChange(!s.props.open),s.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},s.onScroll=function(){s.isTouching()&&s.inCancelDistanceOnScroll()&&s.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})},s.inCancelDistanceOnScroll=function(){var n=void 0;switch(s.props.position){case"right":n=Math.abs(s.state.touchCurrentX-s.state.touchStartX)<m;break;case"bottom":n=Math.abs(s.state.touchCurrentY-s.state.touchStartY)<m;break;case"top":n=Math.abs(s.state.touchStartY-s.state.touchCurrentY)<m;break;case"left":default:n=Math.abs(s.state.touchStartX-s.state.touchCurrentX)<m}return n},s.isTouching=function(){return null!==s.state.touchIdentifier},s.saveSidebarSize=function(){var n=h["default"].findDOMNode(s.refs.sidebar),t=n.offsetWidth,a=n.offsetHeight,e=i(h["default"].findDOMNode(s.refs.sidebar)).top,o=i(h["default"].findDOMNode(s.refs.dragHandle)).top;t!==s.state.sidebarWidth&&s.setState({sidebarWidth:t}),a!==s.state.sidebarHeight&&s.setState({sidebarHeight:a}),e!==s.state.sidebarTop&&s.setState({sidebarTop:e}),o!==s.state.dragHandleTop&&s.setState({dragHandleTop:o})},s.touchSidebarWidth=function(){return"right"===s.props.position?s.props.open&&window.innerWidth-s.state.touchStartX<s.state.sidebarWidth?s.state.touchCurrentX>s.state.touchStartX?s.state.sidebarWidth+s.state.touchStartX-s.state.touchCurrentX:s.state.sidebarWidth:Math.min(window.innerWidth-s.state.touchCurrentX,s.state.sidebarWidth):"left"===s.props.position?s.props.open&&s.state.touchStartX<s.state.sidebarWidth?s.state.touchCurrentX>s.state.touchStartX?s.state.sidebarWidth:s.state.sidebarWidth-s.state.touchStartX+s.state.touchCurrentX:Math.min(s.state.touchCurrentX,s.state.sidebarWidth):void 0},s.touchSidebarHeight=function(){if("bottom"===s.props.position)return s.props.open&&window.innerHeight-s.state.touchStartY<s.state.sidebarHeight?s.state.touchCurrentY>s.state.touchStartY?s.state.sidebarHeight+s.state.touchStartY-s.state.touchCurrentY:s.state.sidebarHeight:Math.min(window.innerHeight-s.state.touchCurrentY,s.state.sidebarHeight);if("top"===s.props.position){var n=s.state.touchStartY-s.state.sidebarTop;return s.props.open&&n<s.state.sidebarHeight?s.state.touchCurrentY>s.state.touchStartY?s.state.sidebarHeight:s.state.sidebarHeight-s.state.touchStartY+s.state.touchCurrentY:Math.min(s.state.touchCurrentY-s.state.dragHandleTop,s.state.sidebarHeight)}},s.renderStyle=function(n){var t=n.sidebarStyle,a=n.isTouching,e=n.overlayStyle,o=n.contentStyle;if("right"===s.props.position||"left"===s.props.position){if(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",a){var p=s.touchSidebarWidth()/s.state.sidebarWidth;"right"===s.props.position&&(t.transform="translateX("+100*(1-p)+"%)",t.WebkitTransform="translateX("+100*(1-p)+"%)"),"left"===s.props.position&&(t.transform="translateX(-"+100*(1-p)+"%)",t.WebkitTransform="translateX(-"+100*(1-p)+"%)"),e.opacity=p,e.visibility="visible"}o&&(o[s.props.position]=s.state.sidebarWidth+"px")}if("top"===s.props.position||"bottom"===s.props.position){if(t.transform="translateY(0%)",t.WebkitTransform="translateY(0%)",a){var c=s.touchSidebarHeight()/s.state.sidebarHeight;"bottom"===s.props.position&&(t.transform="translateY("+100*(1-c)+"%)",t.WebkitTransform="translateY("+100*(1-c)+"%)"),"top"===s.props.position&&(t.transform="translateY(-"+100*(1-c)+"%)",t.WebkitTransform="translateY(-"+100*(1-c)+"%)"),e.opacity=c,e.visibility="visible"}o&&(o[s.props.position]=s.state.sidebarHeight+"px")}},s.state={sidebarWidth:0,sidebarHeight:0,sidebarTop:0,dragHandleTop:0,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,touchSupported:"object"===("undefined"==typeof window?"undefined":l(window))&&"ontouchstart"in window},s}return u(t,n),t.prototype.componentDidMount=function(){this.saveSidebarSize()},t.prototype.componentDidUpdate=function(){this.isTouching()||this.saveSidebarSize()},t.prototype.render=function(){var n,t=this.props,a=t.className,s=t.prefixCls,e=t.position,p=t.transitions,c=t.touch,u=t.enableDragHandle,i=t.sidebar,l=t.children,k=t.docked,f=t.open,h=r({},this.props.sidebarStyle),g=r({},this.props.contentStyle),m=r({},this.props.overlayStyle),y=(n={},o(n,a,!!a),o(n,s,!0),o(n,s+"-"+e,!0),n),v={},S=this.isTouching();S?this.renderStyle({sidebarStyle:h,isTouching:!0,overlayStyle:m}):k?0!==this.state.sidebarWidth&&(y[s+"-docked"]=!0,this.renderStyle({sidebarStyle:h,contentStyle:g})):f&&(y[s+"-open"]=!0,this.renderStyle({sidebarStyle:h}),m.opacity=1,m.visibility="visible"),!S&&p||(h.transition="none",h.WebkitTransition="none",g.transition="none",m.transition="none");var T=null;return this.state.touchSupported&&c&&(f?(v.onTouchStart=this.onTouchStart,v.onTouchMove=this.onTouchMove,v.onTouchEnd=this.onTouchEnd,v.onTouchCancel=this.onTouchEnd,v.onScroll=this.onScroll):u&&(T=d["default"].createElement("div",{className:s+"-draghandle",style:this.props.dragHandleStyle,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,ref:"dragHandle"}))),d["default"].createElement("div",r({className:(0,b["default"])(y)},v),d["default"].createElement("div",{className:s+"-sidebar",style:h,ref:"sidebar"},i),d["default"].createElement("div",{className:s+"-overlay",style:m,role:"presentation",tabIndex:"0",onClick:this.onOverlayClicked,ref:"overlay"}),d["default"].createElement("div",{className:s+"-content",style:g,ref:"content"},T,l))},t}(d["default"].Component);y.propTypes={prefixCls:d["default"].PropTypes.string,className:d["default"].PropTypes.string,children:d["default"].PropTypes.node.isRequired,sidebarStyle:d["default"].PropTypes.object,contentStyle:d["default"].PropTypes.object,overlayStyle:d["default"].PropTypes.object,dragHandleStyle:d["default"].PropTypes.object,sidebar:d["default"].PropTypes.node.isRequired,docked:d["default"].PropTypes.bool,open:d["default"].PropTypes.bool,transitions:d["default"].PropTypes.bool,touch:d["default"].PropTypes.bool,enableDragHandle:d["default"].PropTypes.bool,position:d["default"].PropTypes.oneOf(["left","right","top","bottom"]),dragToggleDistance:d["default"].PropTypes.number,onOpenChange:d["default"].PropTypes.func},y.defaultProps={prefixCls:"rc-drawer",sidebarStyle:{},contentStyle:{},overlayStyle:{},dragHandleStyle:{},docked:!1,open:!1,transitions:!0,touch:!0,enableDragHandle:!0,position:"left",dragToggleDistance:30,onOpenChange:function(){}},t["default"]=y,n.exports=t["default"]},257:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var e=a(256),o=s(e);t["default"]=o["default"],n.exports=t["default"]},708:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var o=(a(227),a(226)),p=s(o),c=(a(92),a(91)),u=s(c),i=(a(24),a(20)),r=s(i),l=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},k=a(1),d=s(k),f=a(4);s(f);n.exports={content:[["p","\u5d4c\u5165\u5230\u6587\u6863\u6d41\u4e2d"]],meta:{order:2,title:"\u53f3\u51fa",filename:"components/drawer/demo/dock-right.md",id:"components-drawer-demo-dock-right"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u6b64\u5904\u7528\u4f5cdemo\u5c55\u793a\uff0c\u4e0d\u8981\u7528\u5728\u751f\u4ea7\u73af\u5883</span>\n<span class="token keyword" >this</span><span class="token punctuation" >.</span>customNavFlag <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Drawer<span class="token punctuation" >,</span> List<span class="token punctuation" >,</span> NavBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      docked1<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onDock</span><span class="token punctuation" >(</span>d<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      <span class="token punctuation" >[</span>d<span class="token punctuation" >]</span><span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >[</span>d<span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> sidebar <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Body</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token number" >1</span><span class="token punctuation" >,</span> <span class="token number" >2</span><span class="token punctuation" >,</span> <span class="token number" >3</span><span class="token punctuation" >,</span> <span class="token number" >4</span><span class="token punctuation" >,</span> <span class="token number" >5</span><span class="token punctuation" >,</span> <span class="token number" >6</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>i<span class="token punctuation" >,</span> index<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          <span class="token keyword" >if</span> <span class="token punctuation" >(</span>index <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n            <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >line</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6536\u94f6\u5458<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4ec5\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u53ca\u67e5\u8d26\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n          <span class="token punctuation" >}</span>\n          <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>List.Item</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>index<span class="token punctuation" >}</span></span>\n            <span class="token attr-name" >thumb</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://img0.bdstatic.com/img/image/daren/ximeng2.jpg<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >line</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n          <span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6536\u94f6\u5458<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>am-list-brief<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4ec5\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u53ca\u67e5\u8d26\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Item</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List.Body</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>List</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >const</span> drawerProps1 <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      docked<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>docked1<span class="token punctuation" >,</span>\n      open<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      position<span class="token punctuation" >:</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >rightContent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>span onClick<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >onDock</span><span class="token punctuation" >(</span><span class="token string" >\'docked1\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u70b9\u51fb<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span>\n      <span class="token operator" >></span>\n        \u5d4c\u5165\u6587\u6863\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>drawer-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Drawer</span> <span class="token attr-name" >sidebar</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>sidebar<span class="token punctuation" >}</span></span> <span class="token attr-name" >dragHandleStyle</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> display<span class="token punctuation" >:</span> <span class="token string" >\'none\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >{...drawerProps1}</span><span class="token punctuation" >></span></span>\n          \u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Drawer</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){this.customNavFlag=!0;var n=d["default"].createClass({displayName:"App",getInitialState:function(){return{docked1:!1}},onDock:function(n){this.setState(e({},n,!this.state[n]))},render:function(){var n=this,t=d["default"].createElement(r["default"],null,d["default"].createElement(r["default"].Body,null,[1,2,3,4,5,6].map(function(n,t){return 0===t?d["default"].createElement(r["default"].Item,{key:t,thumb:"https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png",line:2},d["default"].createElement("div",{className:"am-list-title"},"\u6536\u94f6\u5458"),d["default"].createElement("div",{className:"am-list-brief"},"\u4ec5\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u53ca\u67e5\u8d26\u64cd\u4f5c")):d["default"].createElement(r["default"].Item,{key:t,thumb:"http://img0.bdstatic.com/img/image/daren/ximeng2.jpg",line:2},d["default"].createElement("div",{className:"am-list-title"},"\u6536\u94f6\u5458"),d["default"].createElement("div",{className:"am-list-brief"},"\u4ec5\u53ef\u8fdb\u884c\u6536\u6b3e\u3001\u9000\u6b3e\u53ca\u67e5\u8d26\u64cd\u4f5c"))}))),a={docked:this.state.docked1,open:!1,position:"right"};return d["default"].createElement("div",null,d["default"].createElement(u["default"],{iconName:!1,rightContent:d["default"].createElement("span",{onClick:function(){return n.onDock("docked1")}},"\u70b9\u51fb")},"\u5d4c\u5165\u6587\u6863"),d["default"].createElement("div",{className:"drawer-container"},d["default"].createElement(p["default"],l({sidebar:t,dragHandleStyle:{display:"none"}},a),"\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2")))}});return d["default"].createElement(n,null)}}}});