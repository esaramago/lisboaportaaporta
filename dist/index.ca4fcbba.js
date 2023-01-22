!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()}(this,(function(){"use strict";const e=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[r++]=a:(a<2048?t[r++]=a>>6|192:(55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128):t[r++]=a>>12|224,t[r++]=a>>6&63|128),t[r++]=63&a|128)}return t},t={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_;const n=[];for(let t=0;t<e.length;t+=3){var a=e[t],i=t+1<e.length,s=i?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0;let h=(15&s)<<2|c>>6,l=63&c;o||(l=64,i||(h=64)),n.push(r[a>>2],r[(3&a)<<4|s>>4],r[h],r[l])}return n.join("")},encodeString(t,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(t):this.encodeByteArray(e(t),r)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,n=0;for(;r<e.length;){var a,i,s=e[r++];s<128?t[n++]=String.fromCharCode(s):191<s&&s<224?(a=e[r++],t[n++]=String.fromCharCode((31&s)<<6|63&a)):239<s&&s<365?(i=((7&s)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536,t[n++]=String.fromCharCode(55296+(i>>10)),t[n++]=String.fromCharCode(56320+(1023&i))):(a=e[r++],i=e[r++],t[n++]=String.fromCharCode((15&s)<<12|(63&a)<<6|63&i))}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_;const n=[];for(let t=0;t<e.length;){var a=r[e.charAt(t++)],i=t<e.length?r[e.charAt(t)]:0;++t;var s=t<e.length?r[e.charAt(t)]:64;++t;var o=t<e.length?r[e.charAt(t)]:64;if(++t,null==a||null==i||null==s||null==o)throw Error();n.push(a<<2|i>>4),64!==s&&(n.push(i<<4&240|s>>2),64!==o&&n.push(s<<6&192|o))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},r=function(r){var n;return n=e(r),t.encodeByteArray(n,!0).replace(/\./g,"")};function n(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=n(e[r],t[r]));return e}const a=()=>{try{return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__||(()=>{if("undefined"!=typeof process&&void 0!==process.env){var e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0}})()||(()=>{if("undefined"!=typeof document){let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var e=r&&function(e){try{return t.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(r[1]);return e&&JSON.parse(e)}})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},i=()=>{var e;return null===(e=a())||void 0===e?void 0:e.config};class s{wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}class o extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,c.prototype.create)}}class c{create(e,...t){var r,n=t[0]||{},a=`${this.service}/${e}`,i=(i=this.errors[e])?(r=n,i.replace(h,((e,t)=>{var n=r[t];return null!=n?String(n):`<${t}?>`}))):"Error";i=`${this.serviceName}: ${i} (${a}).`;return new o(a,i,n)}constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}}const h=/\{\$([^}]+)}/g;function l(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function d(e,t){if(e===t)return 1;const r=Object.keys(e),n=Object.keys(t);for(const s of r){if(!n.includes(s))return;var a=e[s],i=t[s];if(p(a)&&p(i)){if(!d(a,i))return}else if(a!==i)return}for(const e of n)if(!r.includes(e))return;return 1}function p(e){return null!==e&&"object"==typeof e}function u(e,t){const r=new f(e,t);return r.subscribe.bind(r)}class f{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0;return!1}(e)?e:{next:e,error:t,complete:r},void 0===n.next&&(n.next=g),void 0===n.error&&(n.error=g),void 0===n.complete&&(n.complete=g);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function g(){}class m{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}const b="[DEFAULT]";class v{get(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new s;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(r=null==e?void 0:e.optional)&&void 0!==r&&r;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:b})}catch(e){}for(var[t,r]of this.instancesDeferred.entries()){t=this.normalizeInstanceIdentifier(t);try{var n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch(e){}}}}clearInstance(e=b){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=b){return this.instances.has(e)}getOptions(e=b){return this.instancesOptions.get(e)||{}}initialize(e={}){var{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);var n,a,i=this.getOrInitializeService({instanceIdentifier:r,options:t});for([n,a]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(n)&&a.resolve(i);return i}onInit(e,t){var r=this.normalizeInstanceIdentifier(t);const n=null!==(a=this.onInitCallbacks.get(r))&&void 0!==a?a:new Set;n.add(e),this.onInitCallbacks.set(r,n);var a=this.instances.get(r);return a&&e(a,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){var r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===b?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=b){return!this.component||this.component.multipleInstances?e:b}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class _{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);var t=new v(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}const E=[];var y,I,w;(I=y=y||{})[I.DEBUG=0]="DEBUG",I[I.VERBOSE=1]="VERBOSE",I[I.INFO=2]="INFO",I[I.WARN=3]="WARN",I[I.ERROR=4]="ERROR",I[I.SILENT=5]="SILENT";const C={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},D=y.INFO,S={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},A=(e,t,...r)=>{if(!(t<e.logLevel)){var n=(new Date).toISOString(),a=S[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)}};class O{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...e),this._logHandler(this,y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...e),this._logHandler(this,y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,y.INFO,...e),this._logHandler(this,y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,y.WARN,...e),this._logHandler(this,y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...e),this._logHandler(this,y.ERROR,...e)}constructor(e){this.name=e,this._logLevel=D,this._logHandler=A,this._userLogHandler=null,E.push(this)}}let L,N;const B=new WeakMap,T=new WeakMap,P=new WeakMap,M=new WeakMap,R=new WeakMap;let k={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return T.get(e);if("objectStoreNames"===t)return e.objectStoreNames||P.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return $(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function F(e){var t,r;return"function"==typeof e?function(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(N=N||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(e)?function(...t){return e.apply(j(this),t),$(B.get(this))}:function(...t){return $(e.apply(j(this),t))}:function(t,...r){var n=e.call(j(this),t,...r);return P.set(n,t.sort?t.sort():[t]),$(n)}}(e):(e instanceof IDBTransaction&&(t=e,T.has(t)||(r=new Promise(((e,r)=>{const n=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{e(),n()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)})),T.set(t,r))),((e,t)=>t.some((t=>e instanceof t)))(e,L=L||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,k):e)}function $(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t($(e.result)),n()},i=()=>{r(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&B.set(t,e)})).catch((()=>{})),R.set(t,e),t}(e);if(M.has(e))return M.get(e);var t=F(e);return t!==e&&(M.set(e,t),R.set(t,e)),t}const j=e=>R.get(e),H=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],z=new Map;function V(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(z.get(t))return z.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,a=x.includes(e);if(e in(n?IDBIndex:IDBObjectStore).prototype&&(a||H.includes(e))){var r=async function(t,...r){var i=this.transaction(t,a?"readwrite":"readonly");let s=i.store;return n&&(s=s.index(r.shift())),(await Promise.all([s[e](...r),a&&i.done]))[0]};return z.set(t,r),r}}}k={...w=k,get:(e,t,r)=>V(e,t)||w.get(e,t,r),has:(e,t)=>!!V(e,t)||w.has(e,t)};class U{getPlatformInfoString(){return this.container.getProviders().map((e=>{return"VERSION"!==(null==(t=e.getComponent())?void 0:t.type)?null:`${(t=e.getImmediate()).library}/${t.version}`;var t})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const W="@firebase/app",G=new O("@firebase/app");const J="[DEFAULT]",K={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Y=new Map,X=new Map;function q(e,t){try{e.container.addComponent(t)}catch(r){G.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Z(e,t){e.container.addOrOverwriteComponent(t)}function Q(e){var t=e.name;if(X.has(t))return G.debug(`There were multiple attempts to register component ${t}.`),!1;X.set(t,e);for(const t of Y.values())q(t,e);return!0}function ee(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}const te=new c("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});class re{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new m("app",(()=>this),"PUBLIC"))}}const ne="9.16.0";function ae(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}var n=Object.assign({name:J,automaticDataCollectionEnabled:!1},t);const a=n.name;if("string"!=typeof a||!a)throw te.create("bad-app-name",{appName:String(a)});if(r=r||i(),!r)throw te.create("no-options");var s=Y.get(a);if(s){if(d(r,s.options)&&d(n,s.config))return s;throw te.create("duplicate-app",{appName:a})}const o=new _(a);for(const e of X.values())o.addComponent(e);return n=new re(r,n,o),Y.set(a,n),n}async function ie(e){var t=e.name;Y.has(t)&&(Y.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function se(e,t,r){let n=null!==(i=K[e])&&void 0!==i?i:e;r&&(n+=`-${r}`);var a=n.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${n}" with version "${t}":`];return a&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void G.warn(e.join(" "))}Q(new m(`${n}-version`,(()=>({library:n,version:t})),"VERSION"))}function oe(e,t){if(null!==e&&"function"!=typeof e)throw te.create("invalid-log-argument");!function(e,t){for(const r of E){let n=null;t&&t.level&&(n=C[t.level]),r.userLogHandler=null===e?null:(t,r,...a)=>{var i=a.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:y[r].toLowerCase(),message:i,args:a,type:t.name})}}}(e,t)}function ce(e){var t;t=e,E.forEach((e=>{e.setLogLevel(t)}))}const he="firebase-heartbeat-store";let le=null;function de(){return le=le||function(e,t,{blocked:r,upgrade:n,blocking:a,terminated:i}){const s=indexedDB.open(e,t),o=$(s);return n&&s.addEventListener("upgradeneeded",(e=>{n($(s.result),e.oldVersion,e.newVersion,$(s.transaction))})),r&&s.addEventListener("blocked",(()=>r())),o.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(he)}}).catch((e=>{throw te.create("idb-open",{originalErrorMessage:e.message})})),le}async function pe(e,t){try{const r=(await de()).transaction(he,"readwrite"),n=r.objectStore(he);return await n.put(t,ue(e)),r.done}catch(e){var r;e instanceof o?G.warn(e.message):(r=te.create("idb-set",{originalErrorMessage:null==e?void 0:e.message}),G.warn(r.message))}}function ue(e){return`${e.name}!${e.options.appId}`}class fe{async triggerHeartbeat(){var e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();const t=ge();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";var e=ge(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const r=[];let n=e.slice();for(const a of e){const e=r.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),be(r)>t){e.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),be(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),t=r(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,0<n.length?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}constructor(e){this.container=e,this._heartbeatsCache=null;var t=this.container.getProvider("app").getImmediate();this._storage=new me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>this._heartbeatsCache=e))}}function ge(){return(new Date).toISOString().substring(0,10)}class me{async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return}}()&&new Promise(((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){return await this._canUseIndexedDBPromise&&await async function(e){try{return(await de()).transaction(he).objectStore(he).get(ue(e))}catch(e){var t;e instanceof o?G.warn(e.message):(t=te.create("idb-get",{originalErrorMessage:null==e?void 0:e.message}),G.warn(t.message))}}(this.app)||{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){var r=await this.read();return pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){var r=await this.read();return pe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function be(e){return r(JSON.stringify({version:2,heartbeats:e})).length}Q(new m("platform-logger",(e=>new U(e)),"PRIVATE")),Q(new m("heartbeat",(e=>new fe(e)),"PRIVATE")),se(W,"0.9.1",""),se(W,"0.9.1","esm2017"),se("fire-js","");var ve=Object.freeze({__proto__:null,SDK_VERSION:ne,_DEFAULT_ENTRY_NAME:J,_addComponent:q,_addOrOverwriteComponent:Z,_apps:Y,_clearComponents:function(){X.clear()},_components:X,_getProvider:ee,_registerComponent:Q,_removeServiceInstance:function(e,t,r=J){ee(e,t).clearInstance(r)},deleteApp:ie,getApp:function(e=J){var t=Y.get(e);if(!t&&e===J)return ae();if(!t)throw te.create("no-app",{appName:e});return t},getApps:function(){return Array.from(Y.values())},initializeApp:ae,onLog:oe,registerVersion:se,setLogLevel:ce,FirebaseError:o});class _e{get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ie(this._delegate))))}_getService(e,t=J){var r;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=J){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){q(this._delegate,e)}_addOrOverwriteComponent(e){Z(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}constructor(e,t){this._delegate=e,this.firebase=t,q(e,new m("app-compat",(()=>this),"PUBLIC")),this.container=e.container}}const Ee=new c("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});var ye=function e(){const t=function(e){const t={},r={__esModule:!0,initializeApp:function(n,a={}){var i=ae(n,a);if(l(t,i.name))return t[i.name];var s=new e(i,r);return t[i.name]=s},app:a,registerVersion:se,setLogLevel:ce,onLog:oe,apps:null,SDK_VERSION:ne,INTERNAL:{registerComponent:function(t){const i=t.name,s=i.replace("-compat","");var o;return Q(t)&&"PUBLIC"===t.type&&(o=(e=a())=>{if("function"!=typeof e[s])throw Ee.create("invalid-app-argument",{appName:i});return e[s]()},void 0!==t.serviceProps&&n(o,t.serviceProps),r[s]=o,e.prototype[s]=function(...e){return this._getService.bind(this,i).apply(this,t.multipleInstances?e:[])}),"PUBLIC"===t.type?r[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:ve}};function a(e){if(!l(t,e=e||J))throw Ee.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),a.App=e,r}(_e);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){n(t,e)},createSubscribe:u,ErrorFactory:c,deepExtend:n}),t}();const Ie=new O("@firebase/app-compat");if("object"==typeof self&&self.self===self&&void 0!==self.firebase){Ie.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&0<=e.indexOf("LITE")&&Ie.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const we=ye;return se("@firebase/app-compat","0.2.1",void 0),we.registerVersion("firebase","9.16.0","app-compat-cdn"),we}));
//# sourceMappingURL=index.ca4fcbba.js.map