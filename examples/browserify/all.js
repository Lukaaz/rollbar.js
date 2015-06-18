(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){r(1),e.exports=r(2)},function(e,t,r){Array.prototype.map||(Array.prototype.map=function(e,t){var r,n=Object(this),o=n.length>>>0;arguments.length>1&&(r=t);for(var i=new Array(o),a=0;o>a;){var s,u;a in n&&(s=n[a],u=e.call(r,s,a,n),i[a]=u),a++}return i}),Array.prototype.filter||(Array.prototype.filter=function(e){for(var t=Object(this),r=t.length>>>0,n=[],o=arguments.length>=2?arguments[1]:void 0,i=0;r>i;i++)if(i in t){var a=t[i];e.call(o,a,i,t)&&n.push(a)}return n}),Object.create||(Object.create=function(e,t){function r(){}if("object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object: "+e);if(null===e)throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");if("undefined"!=typeof t)throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");return r.prototype=e,new r}),"undefined"==typeof JSON&&(JSON={})},function(e,t,r){function n(){var e=JSON,t=r(5),n={};t(n),e=n,o.setupJSON(e)}var o=r(3),i=r(4);n();var a=window._rollbarConfig,s=a&&a.globalAlias||"Rollbar",u=window[s]&&"undefined"!=typeof window[s].shimId;!u&&a?o.wrapper.init(a):(window.Rollbar=o.wrapper,window.RollbarNotifier=i.Notifier),e.exports=o.wrapper},function(e,t,r){function n(e){a.setupJSON(e)}function o(e,t,r){!r[4]&&window._rollbarWrappedError&&(r[4]=window._rollbarWrappedError,window._rollbarWrappedError=null),e.uncaughtError.apply(e,r),t&&t.apply(window,r)}function i(e,t){if(t.hasOwnProperty&&t.hasOwnProperty("addEventListener")){var r=t.addEventListener;t.addEventListener=function(t,n,o){r.call(this,t,e.wrap(n),o)};var n=t.removeEventListener;t.removeEventListener=function(e,t,r){n.call(this,e,t&&t._wrapped||t,r)}}}var a=r(4),s=a.Notifier;window._rollbarWrappedError=null;var u={};u.init=function(e,t){var r=new s(t);if(r.configure(e),e.captureUncaught){var n=window.onerror;window.onerror=function(){var e=Array.prototype.slice.call(arguments,0);o(r,n,e)};var a,u,c=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];for(a=0;a<c.length;++a)u=c[a],window[u]&&window[u].prototype&&i(r,window[u].prototype)}return window.Rollbar=r,s.processPayloads(),r},e.exports={wrapper:u,setupJSON:n}},function(e,t,r){function n(e){h=e,g.setupJSON(e)}function o(){return m}function i(e){m=m||this;var t=window.location.protocol;0!==t.indexOf("http")&&(t="https:");var r=t+"//"+i.DEFAULT_ENDPOINT;this.options={enabled:!0,endpoint:r,environment:"production",scrubFields:f.copy(i.DEFAULT_SCRUB_FIELDS),checkIgnore:null,logLevel:i.DEFAULT_LOG_LEVEL,reportLevel:i.DEFAULT_REPORT_LEVEL,uncaughtErrorLevel:i.DEFAULT_UNCAUGHT_ERROR_LEVEL,payload:{}},this.lastError=null,this.plugins={},this.parentNotifier=e,this.logger=function(){if(window.console&&"function"==typeof window.console.log){var e=["Rollbar:"].concat(Array.prototype.slice.call(arguments,0));window.console.log(e)}},e&&(e.hasOwnProperty("shimId")?e.notifier=this:(this.logger=e.logger,this.configure(e.options)))}function a(e,t){return function(){var r=t||this;try{return e.apply(r,arguments)}catch(n){r&&r.logger(n)}}}function s(e){if(!e)return["Unknown error. There was no error message to display.",""];var t=e.match(y),r="(unknown)";return t&&(r=t[t.length-1],e=e.replace((t[t.length-2]||"")+r+":",""),e=e.replace(/(^[\s]+|[\s]+$)/g,"")),[r,e]}function u(){w||(w=setTimeout(c,1e3))}function c(){var e;try{for(;e=window._rollbarPayloadQueue.shift();)l(e.endpointUrl,e.accessToken,e.payload,e.callback)}finally{w=void 0}}function l(e,t,r,n){n=n||function(){};var o=(new Date).getTime();o-v>=6e4&&(v=o,_=0);var i=window._globalRollbarOptions.maxItems,a=window._globalRollbarOptions.itemsPerMinute,s=function(){return!r.ignoreRateLimit&&i>=1&&b>=i},u=function(){return!r.ignoreRateLimit&&a>=1&&_>=a};return s()?void n(new Error(i+" max items reached")):u()?void n(new Error(a+" items per minute reached")):(b++,_++,s()&&m._log(m.options.uncaughtErrorLevel,"maxItems has been hit. Ignoring errors for the remainder of the current page load.",null,{maxItems:i},null,!1,!0),r.ignoreRateLimit&&delete r.ignoreRateLimit,void d.post(e,t,r,function(e,t){return e?n(e):n(null,t)}))}var p=r(6),f=r(7),g=r(8),d=g.XHR,h=null;i.NOTIFIER_VERSION="1.3.0-rc.2",i.DEFAULT_ENDPOINT="api.rollbar.com/api/1/",i.DEFAULT_SCRUB_FIELDS=["pw","pass","passwd","password","secret","confirm_password","confirmPassword","password_confirmation","passwordConfirmation","access_token","accessToken","secret_key","secretKey","secretToken"],i.DEFAULT_LOG_LEVEL="debug",i.DEFAULT_REPORT_LEVEL="debug",i.DEFAULT_UNCAUGHT_ERROR_LEVEL="warning",i.DEFAULT_ITEMS_PER_MIN=60,i.DEFAULT_MAX_ITEMS=0,i.LEVELS={debug:0,info:1,warning:2,error:3,critical:4},window._rollbarPayloadQueue=[],window._globalRollbarOptions={startTime:(new Date).getTime(),maxItems:i.DEFAULT_MAX_ITEMS,itemsPerMinute:i.DEFAULT_ITEMS_PER_MIN};var m;i._generateLogFn=function(e){return a(function(){var t=this._getLogArgs(arguments);return this._log(e||t.level||this.options.logLevel||i.DEFAULT_LOG_LEVEL,t.message,t.err,t.custom,t.callback)})},i.prototype._getLogArgs=function(e){for(var t,r,n,o,s,u,c,l=this.options.logLevel||i.DEFAULT_LOG_LEVEL,p=0;p<e.length;++p)c=e[p],u=typeof c,"string"===u?r=c:"function"===u?s=a(c,this):c&&"object"===u&&("Date"===c.constructor.name?t=c:c instanceof Error||c.prototype===Error.prototype||c.hasOwnProperty("stack")||"undefined"!=typeof DOMException&&c instanceof DOMException?n=c:o=c);return{level:l,message:r,err:n,custom:o,callback:s}},i.prototype._route=function(e){var t=this.options.endpoint,r=/\/$/.test(t),n=/^\//.test(e);return r&&n?e=e.substring(1):r||n||(e="/"+e),t+e},i.prototype._processShimQueue=function(e){for(var t,r,n,o,a,s,u,c={};r=e.shift();)t=r.shim,n=r.method,o=r.args,a=t.parentShim,u=c[t.shimId],u||(a?(s=c[a.shimId],u=new i(s)):u=this,c[t.shimId]=u),u[n]&&"function"==typeof u[n]&&u[n].apply(u,o)},i.prototype._buildPayload=function(e,t,r,n,o){var a=this.options.accessToken,s=this.options.environment,u=f.copy(this.options.payload),c=f.uuid4();if(void 0===i.LEVELS[t])throw new Error("Invalid level");if(!r&&!n&&!o)throw new Error("No message, stack info or custom data");var l={environment:s,endpoint:this.options.endpoint,uuid:c,level:t,platform:"browser",framework:"browser-js",language:"javascript",body:this._buildBody(r,n,o),request:{url:window.location.href,query_string:window.location.search,user_ip:"$remote_ip"},client:{runtime_ms:e.getTime()-window._globalRollbarOptions.startTime,timestamp:Math.round(e.getTime()/1e3),javascript:{browser:window.navigator.userAgent,language:window.navigator.language,cookie_enabled:window.navigator.cookieEnabled,screen:{width:window.screen.width,height:window.screen.height},plugins:this._getBrowserPlugins()}},server:{},notifier:{name:"rollbar-browser-js",version:i.NOTIFIER_VERSION}};u.body&&delete u.body;var p={access_token:a,data:f.merge(l,u)};return this._scrub(p.data),p},i.prototype._buildBody=function(e,t,r){var n;return n=t?this._buildPayloadBodyTrace(e,t,r):this._buildPayloadBodyMessage(e,r)},i.prototype._buildPayloadBodyMessage=function(e,t){e||(e=t?h.stringify(t):"");var r={body:e};return t&&(r.extra=f.copy(t)),{message:r}},i.prototype._buildPayloadBodyTrace=function(e,t,r){var n=s(t.message),o=t.name||n[0],i=n[1],a={exception:{"class":o,message:i}};if(e&&(a.exception.description=e||"uncaught exception"),t.stack){var u,c,l,p,g,d,h,m;for(a.frames=[],h=0;h<t.stack.length;++h)u=t.stack[h],c={filename:u.url?f.sanitizeUrl(u.url):"(unknown)",lineno:u.line||null,method:u.func&&"?"!==u.func?u.func:"[anonymous]",colno:u.column},l=p=g=null,d=u.context?u.context.length:0,d&&(m=Math.floor(d/2),p=u.context.slice(0,m),l=u.context[m],g=u.context.slice(m)),l&&(c.code=l),(p||g)&&(c.context={},p&&p.length&&(c.context.pre=p),g&&g.length&&(c.context.post=g)),u.args&&(c.args=u.args),a.frames.push(c);return a.frames.reverse(),r&&(a.extra=f.copy(r)),{trace:a}}return this._buildPayloadBodyMessage(o+": "+i,r)},i.prototype._getBrowserPlugins=function(){if(!this._browserPlugins){var e,t,r=window.navigator.plugins||[],n=r.length,o=[];for(t=0;n>t;++t)e=r[t],o.push({name:e.name,description:e.description});this._browserPlugins=o}return this._browserPlugins},i.prototype._scrub=function(e){function t(e,t,r,n,o,i,a,s){return t+f.redact(i)}function r(e){var r;if("string"==typeof e)for(r=0;r<s.length;++r)e=e.replace(s[r],t);return e}function n(e,t){var r;for(r=0;r<a.length;++r)if(a[r].test(e)){t=f.redact(t);break}return t}function o(e,t){var o=n(e,t);return o===t?r(o):o}var i=this.options.scrubFields,a=this._getScrubFieldRegexs(i),s=this._getScrubQueryParamRegexs(i);return f.traverse(e,o),e},i.prototype._getScrubFieldRegexs=function(e){for(var t,r=[],n=0;n<e.length;++n)t="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",r.push(new RegExp(t,"i"));return r},i.prototype._getScrubQueryParamRegexs=function(e){for(var t,r=[],n=0;n<e.length;++n)t="\\[?(%5[bB])?"+e[n]+"\\[?(%5[bB])?\\]?(%5[dD])?",r.push(new RegExp("("+t+"=)([^&\\n]+)","igm"));return r},i.prototype._urlIsWhitelisted=function(e){var t,r,n,o,i,a,s,u,c,l;try{if(t=this.options.hostWhiteList,r=e.data.body.trace,!t||0===t.length)return!0;if(!r)return!0;for(s=t.length,i=r.frames.length,c=0;i>c;c++){if(n=r.frames[c],o=n.filename,"string"!=typeof o)return!0;for(l=0;s>l;l++)if(a=t[l],u=new RegExp(a),u.test(o))return!0}}catch(p){return this.configure({hostWhiteList:null}),this.error("Error while reading your configuration's hostWhiteList option. Removing custom hostWhiteList.",p),!0}return!1},i.prototype._messageIsIgnored=function(e){var t,r,n,o,i,a,s;try{if(i=!1,n=this.options.ignoredMessages,s=e.data.body.trace,!n||0===n.length)return!1;if(!s)return!1;for(t=s.exception.message,o=n.length,r=0;o>r&&(a=new RegExp(n[r],"gi"),!(i=a.test(t)));r++);}catch(u){this.configure({ignoredMessages:null}),this.error("Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.")}return i},i.prototype._enqueuePayload=function(e,t,r,n){var o={callback:n,accessToken:this.options.accessToken,endpointUrl:this._route("item/"),payload:e},i=function(){if(n){var e="This item was not sent to Rollbar because it was ignored. This can happen if a custom checkIgnore() function was used or if the item's level was less than the notifier' reportLevel. See https://rollbar.com/docs/notifier/rollbar.js/configuration for more details.";n(null,{err:0,result:{id:null,uuid:null,message:e}})}};if(this._internalCheckIgnore(t,r,e))return void i();try{if(this.options.checkIgnore&&"function"==typeof this.options.checkIgnore&&this.options.checkIgnore(t,r,e))return void i()}catch(a){this.configure({checkIgnore:null}),this.error("Error while calling custom checkIgnore() function. Removing custom checkIgnore().",a)}if(this._urlIsWhitelisted(e)&&!this._messageIsIgnored(e)){if(this.options.verbose){if(e.data&&e.data.body&&e.data.body.trace){var s=e.data.body.trace,c=s.exception.message;this.logger(c)}this.logger("Sending payload -",o)}"function"==typeof this.options.logFunction&&this.options.logFunction(o);try{"function"==typeof this.options.transform&&this.options.transform(e)}catch(a){this.configure({transform:null}),this.error("Error while calling custom transform() function. Removing custom transform().",a)}this.options.enabled&&(window._rollbarPayloadQueue.push(o),u())}},i.prototype._internalCheckIgnore=function(e,t,r){var n=t[0],o=i.LEVELS[n]||0,a=i.LEVELS[this.options.reportLevel]||0;if(a>o)return!0;var s=this.options?this.options.plugins:{};return s&&s.jquery&&s.jquery.ignoreAjaxErrors&&r.body.message?r.body.messagejquery_ajax_error:!1},i.prototype._log=function(e,t,r,n,o,i,a){var s=null;if(r){if(s=r._savedStackTrace?r._savedStackTrace:p.parse(r),r===this.lastError)return;this.lastError=r}var u=this._buildPayload(new Date,e,t,s,n);a&&(u.ignoreRateLimit=!0),this._enqueuePayload(u,i?!0:!1,[e,t,r,n],o)},i.prototype.log=i._generateLogFn(),i.prototype.debug=i._generateLogFn("debug"),i.prototype.info=i._generateLogFn("info"),i.prototype.warn=i._generateLogFn("warning"),i.prototype.warning=i._generateLogFn("warning"),i.prototype.error=i._generateLogFn("error"),i.prototype.critical=i._generateLogFn("critical"),i.prototype.uncaughtError=a(function(e,t,r,n,o,i){if(i=i||null,o&&o.stack)return void this._log(this.options.uncaughtErrorLevel,e,o,i,null,!0);if(t&&t.stack)return void this._log(this.options.uncaughtErrorLevel,e,t,i,null,!0);var a={url:t||"",line:r};a.func=p.guessFunctionName(a.url,a.line),a.context=p.gatherContext(a.url,a.line);var s={mode:"onerror",message:e||"uncaught exception",url:document.location.href,stack:[a],useragent:navigator.userAgent};o&&(s=o._savedStackTrace||p.parse(o));var u=this._buildPayload(new Date,this.options.uncaughtErrorLevel,e,s);this._enqueuePayload(u,!0,[this.options.uncaughtErrorLevel,e,t,r,n,o])}),i.prototype.global=a(function(e){e=e||{},f.merge(window._globalRollbarOptions,e),void 0!==e.maxItems&&(b=0),void 0!==e.itemsPerMinute&&(_=0)}),i.prototype.configure=a(function(e){f.merge(this.options,e),this.global(e)}),i.prototype.scope=a(function(e){var t=new i(this);return f.merge(t.options.payload,e),t}),i.prototype.wrap=function(e,t){var r;if(r="function"==typeof t?t:function(){return t||{}},"function"!=typeof e)return e;if(e._isWrap)return e;if(!e._wrapped){e._wrapped=function(){try{return e.apply(this,arguments)}catch(t){throw t.stack||(t._savedStackTrace=p.parse(t)),t._rollbarContext=r()||{},t._rollbarContext._wrappedSource=e.toString(),window._rollbarWrappedError=t,t}},e._wrapped._isWrap=!0;for(var n in e)e.hasOwnProperty(n)&&(e._wrapped[n]=e[n])}return e._wrapped};var w,y=new RegExp("^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ");i.processPayloads=function(e){return e?void c():void u()};var v=(new Date).getTime(),b=0,_=0;e.exports={Notifier:i,setupJSON:n,topLevelNotifier:o}},function(module,exports,__webpack_require__){var setupCustomJSON=function(JSON){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,n,o,i,a,s=gap,u=t[e];switch("function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,a=[],"[object Array]"===Object.prototype.toString.apply(u)){for(i=u.length,r=0;i>r;r+=1)a[r]=str(r,u)||"null";return o=0===a.length?"[]":gap?"[\n"+gap+a.join(",\n"+gap)+"\n"+s+"]":"["+a.join(",")+"]",gap=s,o}if(rep&&"object"==typeof rep)for(i=rep.length,r=0;i>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,u),o&&a.push(quote(n)+(gap?": ":":")+o));else for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(o=str(n,u),o&&a.push(quote(n)+(gap?": ":":")+o));return o=0===a.length?"{}":gap?"{\n"+gap+a.join(",\n"+gap)+"\n"+s+"}":"{"+a.join(",")+"}",gap=s,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,n,o=e[t];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(e,t,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})};module.exports=setupCustomJSON},function(e,t,r){function n(e,t){return c}function o(e,t){return null}function i(e){var t={};return t._stackFrame=e,t.url=e.fileName,t.line=e.lineNumber,t.func=e.functionName,t.column=e.columnNumber,t.args=e.args,t.context=o(t.url,t.line),t}function a(e){function t(){var t=[];try{t=u.parse(e)}catch(r){t=[]}for(var n=[],o=0;o<t.length;o++)n.push(new i(t[o]));return n}return{stack:t(),message:e.message,name:e.name}}function s(e){return new a(e)}var u=r(9),c="?";e.exports={guessFunctionName:n,gatherContext:o,parse:s,Stack:a,Frame:i}},function(e,t,r){var n={merge:function(){var e,t,r,o,i,a,s=arguments[0]||{},u=1,c=arguments.length,l=!0;for("object"!=typeof s&&"function"!=typeof s&&(s={});c>u;u++)if(null!==(e=arguments[u]))for(t in e)e.hasOwnProperty(t)&&(r=s[t],o=e[t],s!==o&&(l&&o&&(o.constructor==Object||(i=o.constructor==Array))?(i?(i=!1,a=[]):a=r&&r.constructor==Object?r:{},s[t]=n.merge(a,o)):void 0!==o&&(s[t]=o)));return s},copy:function(e){var t;return"object"==typeof e&&(e.constructor==Object?t={}:e.constructor==Array&&(t=[])),n.merge(t,e),t},parseUriOptions:{strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},parseUri:function(e){if(!e||"string"!=typeof e&&!(e instanceof String))throw new Error("Util.parseUri() received invalid input");for(var t=n.parseUriOptions,r=t.parser[t.strictMode?"strict":"loose"].exec(e),o={},i=14;i--;)o[t.key[i]]=r[i]||"";return o[t.q.name]={},o[t.key[12]].replace(t.q.parser,function(e,r,n){r&&(o[t.q.name][r]=n)}),o},sanitizeUrl:function(e){if(!e||"string"!=typeof e&&!(e instanceof String))throw new Error("Util.sanitizeUrl() received invalid input");var t=n.parseUri(e);return""===t.anchor&&(t.source=t.source.replace("#","")),e=t.source.replace("?"+t.query,"")},traverse:function(e,t){var r,o,i,a="object"==typeof e,s=[];if(a)if(e.constructor===Object)for(r in e)e.hasOwnProperty(r)&&s.push(r);else if(e.constructor===Array)for(i=0;i<e.length;++i)s.push(i);for(i=0;i<s.length;++i)r=s[i],o=e[r],a="object"==typeof o,a?null===o?e[r]=t(r,o):o.constructor===Object?e[r]=n.traverse(o,t):o.constructor===Array?e[r]=n.traverse(o,t):e[r]=t(r,o):e[r]=t(r,o);return e},redact:function(e){return e=String(e),new Array(e.length+1).join("*")},uuid4:function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:7&r|8).toString(16)});return t}};e.exports=n},function(e,t,r){function n(e){o=e}var o=null,i={XMLHttpFactories:[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],createXMLHTTPObject:function(){var e,t=!1,r=i.XMLHttpFactories,n=r.length;for(e=0;n>e;e++)try{t=r[e]();break}catch(o){}return t},post:function(e,t,r,n){if("object"!=typeof r)throw new Error("Expected an object to POST");r=o.stringify(r),n=n||function(){};var a=i.createXMLHTTPObject();if(a)try{try{var s=function(e){try{s&&4===a.readyState&&(s=void 0,200===a.status?n(null,o.parse(a.responseText)):n("number"==typeof a.status&&a.status>=400&&a.status<600?new Error(a.status.toString()):new Error))}catch(t){var r;r="object"==typeof t&&t.stack?t:new Error(t),n(r)}};a.open("POST",e,!0),a.setRequestHeader&&(a.setRequestHeader("Content-Type","application/json"),a.setRequestHeader("X-Rollbar-Access-Token",t)),a.onreadystatechange=s,a.send(r)}catch(u){if("undefined"!=typeof XDomainRequest){var c=function(e){n(new Error)},l=function(e){n(new Error)},p=function(e){n(null,o.parse(a.responseText))};a=new XDomainRequest,a.onprogress=function(){},a.ontimeout=c,a.onerror=l,a.onload=p,a.open("POST",e,!0),a.send(r)}}}catch(f){n(f)}}};e.exports={XHR:i,setupJSON:n}},function(e,t,r){var n,o,i;!function(a,s){"use strict";o=[r(10)],n=s,i="function"==typeof n?n.apply(t,o):n,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";var t=/\S+\:\d+/,r=/\s+at /;return{parse:function(e){if("undefined"!=typeof e.stacktrace||"undefined"!=typeof e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(r))return this.parseV8OrIE(e);if(e.stack&&e.stack.match(t))return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},extractLocation:function(e){if(-1===e.indexOf(":"))return[e];var t=e.replace(/[\(\)\s]/g,"").split(":"),r=t.pop(),n=t[t.length-1];if(!isNaN(parseFloat(n))&&isFinite(n)){var o=t.pop();return[t.join(":"),o,r]}return[t.join(":"),r,void 0]},parseV8OrIE:function(t){return t.stack.split("\n").slice(1).map(function(t){var r=t.replace(/^\s+/,"").split(/\s+/).slice(1),n=this.extractLocation(r.pop()),o=r[0]&&"Anonymous"!==r[0]?r[0]:void 0;return new e(o,void 0,n[0],n[1],n[2])},this)},parseFFOrSafari:function(r){return r.stack.split("\n").filter(function(e){return!!e.match(t)},this).map(function(t){var r=t.split("@"),n=this.extractLocation(r.pop()),o=r.shift()||void 0;return new e(o,void 0,n[0],n[1],n[2])},this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,n=t.message.split("\n"),o=[],i=2,a=n.length;a>i;i+=2){var s=r.exec(n[i]);s&&o.push(new e(void 0,void 0,s[2],s[1]))}return o},parseOpera10:function(t){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,n=t.stacktrace.split("\n"),o=[],i=0,a=n.length;a>i;i+=2){var s=r.exec(n[i]);s&&o.push(new e(s[3]||void 0,void 0,s[2],s[1]))}return o},parseOpera11:function(r){return r.stack.split("\n").filter(function(e){return!!e.match(t)&&!e.match(/^Error created at/)},this).map(function(t){var r,n=t.split("@"),o=this.extractLocation(n.pop()),i=n.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new e(a,s,o[0],o[1],o[2])},this)}}})},function(e,t,r){var n,o,i;!function(r,a){"use strict";o=[],n=a,i="function"==typeof n?n.apply(t,o):n,!(void 0!==i&&(e.exports=i))}(this,function(){"use strict";function e(e){return!isNaN(parseFloat(e))&&isFinite(e)}function t(e,t,r,n,o){void 0!==e&&this.setFunctionName(e),void 0!==t&&this.setArgs(t),void 0!==r&&this.setFileName(r),void 0!==n&&this.setLineNumber(n),void 0!==o&&this.setColumnNumber(o)}return t.prototype={getFunctionName:function(){return this.functionName},setFunctionName:function(e){this.functionName=String(e)},getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getFileName:function(){return this.fileName},setFileName:function(e){this.fileName=String(e)},getLineNumber:function(){return this.lineNumber},setLineNumber:function(t){if(!e(t))throw new TypeError("Line Number must be a Number");this.lineNumber=Number(t)},getColumnNumber:function(){return this.columnNumber},setColumnNumber:function(t){if(!e(t))throw new TypeError("Column Number must be a Number");this.columnNumber=Number(t)},toString:function(){var t=this.getFunctionName()||"{anonymous}",r="("+(this.getArgs()||[]).join(",")+")",n=this.getFileName()?"@"+this.getFileName():"",o=e(this.getLineNumber())?":"+this.getLineNumber():"",i=e(this.getColumnNumber())?":"+this.getColumnNumber():"";return t+r+n+o+i}},t})}])});
},{}],2:[function(require,module,exports){
var rollbar = require('../../dist/rollbar.umd.min.js');

var rollbarConfig = {
  accessToken: 'POST_CLIENT_ITEM_ACCESS_TOKEN',
  captureUncaught: true,
  payload: {
    environment: 'development',
  }
};
rollbar.init(rollbarConfig);
window.rollbar = rollbar;

},{"../../dist/rollbar.umd.min.js":1}]},{},[2]);
