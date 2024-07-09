/*! jQuery UI - v1.13.2 - 2022-08-25
* http://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/accordion.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(d){"use strict";d.ui=d.ui||{};d.ui.version="1.13.2";var n,i=0,o=Array.prototype.hasOwnProperty,r=Array.prototype.slice;d.cleanData=(n=d.cleanData,function(e){for(var t,i,s=0;null!=(i=e[s]);s++)(t=d._data(i,"events"))&&t.remove&&d(i).triggerHandler("remove");n(e)}),d.widget=function(e,i,t){var s,n,a,o={},r=e.split(".")[0],h=r+"-"+(e=e.split(".")[1]);return t||(t=i,i=d.Widget),Array.isArray(t)&&(t=d.extend.apply(null,[{}].concat(t))),d.expr.pseudos[h.toLowerCase()]=function(e){return!!d.data(e,h)},d[r]=d[r]||{},s=d[r][e],n=d[r][e]=function(e,t){if(!this||!this._createWidget)return new n(e,t);arguments.length&&this._createWidget(e,t)},d.extend(n,s,{version:t.version,_proto:d.extend({},t),_childConstructors:[]}),(a=new i).options=d.widget.extend({},a.options),d.each(t,function(t,s){function n(){return i.prototype[t].apply(this,arguments)}function a(e){return i.prototype[t].apply(this,e)}o[t]="function"==typeof s?function(){var e,t=this._super,i=this._superApply;return this._super=n,this._superApply=a,e=s.apply(this,arguments),this._super=t,this._superApply=i,e}:s}),n.prototype=d.widget.extend(a,{widgetEventPrefix:s&&a.widgetEventPrefix||e},o,{constructor:n,namespace:r,widgetName:e,widgetFullName:h}),s?(d.each(s._childConstructors,function(e,t){var i=t.prototype;d.widget(i.namespace+"."+i.widgetName,n,t._proto)}),delete s._childConstructors):i._childConstructors.push(n),d.widget.bridge(e,n),n},d.widget.extend=function(e){for(var t,i,s=r.call(arguments,1),n=0,a=s.length;n<a;n++)for(t in s[n])i=s[n][t],o.call(s[n],t)&&void 0!==i&&(d.isPlainObject(i)?e[t]=d.isPlainObject(e[t])?d.widget.extend({},e[t],i):d.widget.extend({},i):e[t]=i);return e},d.widget.bridge=function(a,t){var o=t.prototype.widgetFullName||a;d.fn[a]=function(i){var e="string"==typeof i,s=r.call(arguments,1),n=this;return e?this.length||"instance"!==i?this.each(function(){var e,t=d.data(this,o);return"instance"===i?(n=t,!1):t?"function"!=typeof t[i]||"_"===i.charAt(0)?d.error("no such method '"+i+"' for "+a+" widget instance"):(e=t[i].apply(t,s))!==t&&void 0!==e?(n=e&&e.jquery?n.pushStack(e.get()):e,!1):void 0:d.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=d.widget.extend.apply(null,[i].concat(s))),this.each(function(){var e=d.data(this,o);e?(e.option(i||{}),e._init&&e._init()):d.data(this,o,new t(i,this))})),n}},d.Widget=function(){},d.Widget._childConstructors=[],d.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,t){t=d(t||this.defaultElement||this)[0],this.element=d(t),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=d(),this.hoverable=d(),this.focusable=d(),this.classesElementLookup={},t!==this&&(d.data(t,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===t&&this.destroy()}}),this.document=d(t.style?t.ownerDocument:t.document||t),this.window=d(this.document[0].defaultView||this.document[0].parentWindow)),this.options=d.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:d.noop,_create:d.noop,_init:d.noop,destroy:function(){var i=this;this._destroy(),d.each(this.classesElementLookup,function(e,t){i._removeClass(t,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:d.noop,widget:function(){return this.element},option:function(e,t){var i,s,n,a=e;if(0===arguments.length)return d.widget.extend({},this.options);if("string"==typeof e)if(a={},e=(i=e.split(".")).shift(),i.length){for(s=a[e]=d.widget.extend({},this.options[e]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(e=i.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=t}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=t}return this._setOptions(a),this},_setOptions:function(e){for(var t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,i,s;for(t in e)s=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&s&&s.length&&(i=d(s.get()),this._removeClass(s,t),i.addClass(this._classes({element:i,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var a=[],o=this;function e(e,t){for(var i,s=0;s<e.length;s++)i=o.classesElementLookup[e[s]]||d(),i=n.add?(function(){var i=[];n.element.each(function(e,t){d.map(o.classesElementLookup,function(e){return e}).some(function(e){return e.is(t)})||i.push(t)}),o._on(d(i),{remove:"_untrackClassesElement"})}(),d(d.uniqueSort(i.get().concat(n.element.get())))):d(i.not(n.element).get()),o.classesElementLookup[e[s]]=i,a.push(e[s]),t&&n.classes[e[s]]&&a.push(n.classes[e[s]])}return(n=d.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&e(n.keys.match(/\S+/g)||[],!0),n.extra&&e(n.extra.match(/\S+/g)||[]),a.join(" ")},_untrackClassesElement:function(i){var s=this;d.each(s.classesElementLookup,function(e,t){-1!==d.inArray(i.target,t)&&(s.classesElementLookup[e]=d(t.not(i.target).get()))}),this._off(d(i.target))},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,s){var n="string"==typeof e||null===e,i={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:s="boolean"==typeof s?s:i};return i.element.toggleClass(this._classes(i),s),this},_on:function(n,a,e){var o,r=this;"boolean"!=typeof n&&(e=a,a=n,n=!1),e?(a=o=d(a),this.bindings=this.bindings.add(a)):(e=a,a=this.element,o=this.widget()),d.each(e,function(e,t){function i(){if(n||!0!==r.options.disabled&&!d(this).hasClass("ui-state-disabled"))return("string"==typeof t?r[t]:t).apply(r,arguments)}"string"!=typeof t&&(i.guid=t.guid=t.guid||i.guid||d.guid++);var s=e.match(/^([\w:-]*)\s*(.*)$/),e=s[1]+r.eventNamespace,s=s[2];s?o.on(e,s,i):a.on(e,i)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=d(this.bindings.not(e).get()),this.focusable=d(this.focusable.not(e).get()),this.hoverable=d(this.hoverable.not(e).get())},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(d(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(d(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(d(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(d(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,t,i){var s,n,a=this.options[e];if(i=i||{},(t=d.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),t.target=this.element[0],n=t.originalEvent)for(s in n)s in t||(t[s]=n[s]);return this.element.trigger(t,i),!("function"==typeof a&&!1===a.apply(this.element[0],[t].concat(i))||t.isDefaultPrevented())}},d.each({show:"fadeIn",hide:"fadeOut"},function(a,o){d.Widget.prototype["_"+a]=function(t,e,i){var s,n=(e="string"==typeof e?{effect:e}:e)?!0!==e&&"number"!=typeof e&&e.effect||o:a;"number"==typeof(e=e||{})?e={duration:e}:!0===e&&(e={}),s=!d.isEmptyObject(e),e.complete=i,e.delay&&t.delay(e.delay),s&&d.effects&&d.effects.effect[n]?t[a](e):n!==a&&t[n]?t[n](e.duration,e.easing,i):t.queue(function(e){d(this)[a](),i&&i.call(t[0]),e()})}});var e;d.widget,d.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},d.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&d(this).removeAttr("id")})}}),d.widget("ui.accordion",{version:"1.13.2",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:function(e){return e.find("> li > :first-child").add(e.find("> :not(li)").even())},heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=d(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():d()}},_createIcons:function(){var e,t=this.options.icons;t&&(e=d("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+t.header),e.prependTo(this.headers),e=this.active.children(".ui-accordion-header-icon"),this._removeClass(e,t.header)._addClass(e,null,t.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){"active"!==e?("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||!1!==this.options.active||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons())):this._activate(t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",e),this._toggleClass(null,"ui-state-disabled",!!e),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!e)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var t=d.ui.keyCode,i=this.headers.length,s=this.headers.index(e.target),n=!1;switch(e.keyCode){case t.RIGHT:case t.DOWN:n=this.headers[(s+1)%i];break;case t.LEFT:case t.UP:n=this.headers[(s-1+i)%i];break;case t.SPACE:case t.ENTER:this._eventHandler(e);break;case t.HOME:n=this.headers[0];break;case t.END:n=this.headers[i-1]}n&&(d(e.target).attr("tabIndex",-1),d(n).attr("tabIndex",0),d(n).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===d.ui.keyCode.UP&&e.ctrlKey&&d(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=d()):!1===e.active?this._activate(0):this.active.length&&!d.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=d()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;"function"==typeof this.options.header?this.headers=this.options.header(this.element):this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))},_refresh:function(){var i,e=this.options,t=e.heightStyle,s=this.element.parent();this.active=this._findActive(e.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var e=d(this),t=e.uniqueId().attr("id"),i=e.next(),s=i.uniqueId().attr("id");e.attr("aria-controls",s),i.attr("aria-labelledby",t)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(e.event),"fill"===t?(i=s.height(),this.element.siblings(":visible").each(function(){var e=d(this),t=e.css("position");"absolute"!==t&&"fixed"!==t&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=d(this).outerHeight(!0)}),this.headers.next().each(function(){d(this).height(Math.max(0,i-d(this).innerHeight()+d(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.headers.next().each(function(){var e=d(this).is(":visible");e||d(this).show(),i=Math.max(i,d(this).css("height","").height()),e||d(this).hide()}).height(i))},_activate:function(e){e=this._findActive(e)[0];e!==this.active[0]&&(e=e||this.active[0],this._eventHandler({target:e,currentTarget:e,preventDefault:d.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):d()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&d.each(e.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var t=this.options,i=this.active,s=d(e.currentTarget),n=s[0]===i[0],a=n&&t.collapsible,o=a?d():s.next(),r=i.next(),o={oldHeader:i,oldPanel:r,newHeader:a?d():s,newPanel:o};e.preventDefault(),n&&!t.collapsible||!1===this._trigger("beforeActivate",e,o)||(t.active=!a&&this.headers.index(s),this.active=n?d():s,this._toggle(o),this._removeClass(i,"ui-accordion-header-active","ui-state-active"),t.icons&&(i=i.children(".ui-accordion-header-icon"),this._removeClass(i,null,t.icons.activeHeader)._addClass(i,null,t.icons.header)),n||(this._removeClass(s,"ui-accordion-header-collapsed")._addClass(s,"ui-accordion-header-active","ui-state-active"),t.icons&&(n=s.children(".ui-accordion-header-icon"),this._removeClass(n,null,t.icons.header)._addClass(n,null,t.icons.activeHeader)),this._addClass(s.next(),"ui-accordion-content-active")))},_toggle:function(e){var t=e.newPanel,i=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=t,this.prevHide=i,this.options.animate?this._animate(t,i,e):(i.hide(),t.show(),this._toggleComplete(e)),i.attr({"aria-hidden":"true"}),i.prev().attr({"aria-selected":"false","aria-expanded":"false"}),t.length&&i.length?i.prev().attr({tabIndex:-1,"aria-expanded":"false"}):t.length&&this.headers.filter(function(){return 0===parseInt(d(this).attr("tabIndex"),10)}).attr("tabIndex",-1),t.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,i,t){var s,n,a,o=this,r=0,h=e.css("box-sizing"),d=e.length&&(!i.length||e.index()<i.index()),c=this.options.animate||{},l=d&&c.down||c,d=function(){o._toggleComplete(t)};return n=(n="string"==typeof l?l:n)||l.easing||c.easing,a=(a="number"==typeof l?l:a)||l.duration||c.duration,i.length?e.length?(s=e.show().outerHeight(),i.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),void e.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(e,t){t.now=Math.round(e),"height"!==t.prop?"content-box"===h&&(r+=t.now):"content"!==o.options.heightStyle&&(t.now=Math.round(s-i.outerHeight()-r),r=0)}})):i.animate(this.hideProps,a,n,d):e.animate(this.showProps,a,n,d)},_toggleComplete:function(e){var t=e.oldPanel,i=t.prev();this._removeClass(t,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})});