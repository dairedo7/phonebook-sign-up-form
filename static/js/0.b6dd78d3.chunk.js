(this["webpackJsonpphonebook-sign-up-form"]=this["webpackJsonpphonebook-sign-up-form"]||[]).push([[0],{109:function(t,e,n){"use strict";var s=n(7),a=n(16),o=n(87);function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n(0),p=n.n(r),l=n(26),u=n.n(l),c=!1,d=n(88),f="unmounted",E="exited",h="entering",x="entered",m="exiting",v=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var a,o=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?o?(a=E,s.appearStatus=h):a=x:a=e.unmountOnExit||e.mountOnEnter?f:E,s.state={status:a},s.nextCallback=null,s}Object(o.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===f?{status:E}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==h&&n!==x&&(e=h):n!==h&&n!==x||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===h?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:f})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,a=this.props.nodeRef?[s]:[u.a.findDOMNode(this),s],o=a[0],i=a[1],r=this.getTimeouts(),p=s?r.appear:r.enter;!t&&!n||c?this.safeSetState({status:x},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:h},(function(){e.props.onEntering(o,i),e.onTransitionEnd(p,(function(){e.safeSetState({status:x},(function(){e.props.onEntered(o,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!c?(this.props.onExit(s),this.safeSetState({status:m},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:E},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:E},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===f)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(a.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return p.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(t,s):p.a.cloneElement(p.a.Children.only(n),s))},e}(p.a.Component);function C(){}v.contextType=d.a,v.propTypes={},v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},v.UNMOUNTED=f,v.EXITED=E,v.ENTERING=h,v.ENTERED=x,v.EXITING=m;var g=v,b=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=i(n.className,s):n.setAttribute("class",i(n.className&&n.className.baseVal||"",s)));var n,s}))},N=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),a=s[0],o=s[1];e.removeClasses(a,"exit"),e.addClass(a,o?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),a=s[0],o=s[1]?"appear":"enter";e.addClass(a,o,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),a=s[0],o=s[1]?"appear":"enter";e.removeClasses(a,o),e.addClass(a,o,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"===typeof n,a=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:s?a+"-active":n[t+"Active"],doneClassName:s?a+"-done":n[t+"Done"]}},e}Object(o.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&a&&(s+=" "+a),"active"===n&&t&&t.scrollTop,s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,a=n.active,o=n.done;this.appliedClasses[e]={},s&&b(t,s),a&&b(t,a),o&&b(t,o)},n.render=function(){var t=this.props,e=(t.classNames,Object(a.a)(t,["classNames"]));return p.a.createElement(g,Object(s.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(p.a.Component);N.defaultProps={classNames:""},N.propTypes={};e.a=N},87:function(t,e,n){"use strict";function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}n.d(e,"a",(function(){return a}))},88:function(t,e,n){"use strict";var s=n(0),a=n.n(s);e.a=a.a.createContext(null)}}]);
//# sourceMappingURL=0.b6dd78d3.chunk.js.map