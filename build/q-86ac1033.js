/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var l=v,d=C,m=decodeURIComponent,y=encodeURIComponent,h=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function v(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var i={},r=e||{},n=t.split(";"),c=r.decode||m,o=0;o<n.length;o++){var s=n[o],f=s.indexOf("=");if(!(f<0)){var p=s.substring(0,f).trim();if(i[p]==null){var u=s.substring(f+1,s.length).trim();u[0]==='"'&&(u=u.slice(1,-1)),i[p]=w(u,c)}}}return i}function C(t,e,i){var r=i||{},n=r.encode||y;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!h.test(t))throw new TypeError("argument name is invalid");var c=n(e);if(c&&!h.test(c))throw new TypeError("argument val is invalid");var o=t+"="+c;if(r.maxAge!=null){var s=r.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(s)}if(r.domain){if(!h.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!h.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var f=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(f){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function w(t,e){try{return e(t)}catch{return t}}function O(){return typeof document=="object"&&typeof document.cookie=="string"}function S(t,e){return typeof t=="string"?l(t,e):typeof t=="object"&&t!==null?t:{}}function _(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function g(t,e){e===void 0&&(e={});var i=k(t);if(_(i,e.doNotParse))try{return JSON.parse(i)}catch{}return t}function k(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var a=globalThis&&globalThis.__assign||function(){return a=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++){e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},a.apply(this,arguments)},E=function(){function t(e,i){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=S(e,i),new Promise(function(){r.HAS_DOCUMENT_COOKIE=O()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){!this.HAS_DOCUMENT_COOKIE||(this.cookies=l(document.cookie,e))},t.prototype._emitChange=function(e){for(var i=0;i<this.changeListeners.length;++i)this.changeListeners[i](e)},t.prototype.get=function(e,i,r){return i===void 0&&(i={}),this._updateBrowserValues(r),g(this.cookies[e],i)},t.prototype.getAll=function(e,i){e===void 0&&(e={}),this._updateBrowserValues(i);var r={};for(var n in this.cookies)r[n]=g(this.cookies[n],e);return r},t.prototype.set=function(e,i,r){var n;typeof i=="object"&&(i=JSON.stringify(i)),this.cookies=a(a({},this.cookies),(n={},n[e]=i,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=d(e,i,r)),this._emitChange({name:e,value:i,options:r})},t.prototype.remove=function(e,i){var r=i=a(a({},i),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=a({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=d(e,"",r)),this._emitChange({name:e,value:void 0,options:i})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var i=this.changeListeners.indexOf(e);i>=0&&this.changeListeners.splice(i,1)},t}();const T=E;export{T as C};
