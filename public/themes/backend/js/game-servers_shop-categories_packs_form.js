webpackJsonp([4],{2:function(n,t,e){"use strict";var r=e(3),o=(e.n(r),function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}());var i=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.notyf=new Notyf(Object.assign({delay:3e3},t))}return o(n,[{key:"alert",value:function(n){this.notyf.alert(n)}},{key:"success",value:function(n){this.notyf.confirm(n)}}]),n}();t.a=i},38:function(n,t,e){n.exports=e(39)},39:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(40);document.addEventListener("DOMContentLoaded",function(){new r.a})},40:function(n,t,e){"use strict";(function(n){var r=e(2),o=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}();var i=function(){function t(){var e=this;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.btnClickHandler=function(t){t.preventDefault();var r=n(t.currentTarget);e.xhr=n.ajax({url:r.attr("href"),dataType:"json",complete:function(){e.xhr=null},beforeSend:function(){null!==e.xhr&&e.xhr.abort()},success:function(n){n.status?(r.parent().remove(),e.notify.success(n.msg)):console.error(n.errors)}})},this.$btn=n(".js-del-image"),this.notify=new r.a,this.xhr=null,this.events()}return o(t,[{key:"events",value:function(){0!==this.$btn.length&&this.$btn.on("click",this.btnClickHandler)}}]),t}();t.a=i}).call(t,e(0))}},[38]);