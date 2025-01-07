// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"farZc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _headerJs = require("./js/header.js");
var _footerJs = require("./js/footer.js");

},{"./js/header.js":"bvS82","./js/footer.js":"fXl6u"}],"bvS82":[function(require,module,exports) {
var _stylesCss = require("../css/styles.css");
var _funcionsJs = require("../js/funcions.js");
var _festesJs = require("../js/festes.js");
var _enllacosJs = require("../js/enllacos.js");
var _presentacioJs = require("../js/presentacio.js");
var _categoriaJs = require("./categoria.js");
let menu = document.getElementById("menu");
let imagen = document.getElementById("imagen");
document.addEventListener("DOMContentLoaded", ()=>{
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach((img)=>{
        observer.observe(img);
    });
});

},{"../css/styles.css":"1CY4s","../js/funcions.js":"jQyzi","../js/festes.js":"gpyYL","../js/enllacos.js":"gQsUk","../js/presentacio.js":"i0UJj","./categoria.js":"bmnj6"}],"1CY4s":[function() {},{}],"jQyzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _portadaWebp = require("../img/portada.webp");
var _portadaWebpDefault = parcelHelpers.interopDefault(_portadaWebp);
const links = document.querySelectorAll("a");
links.forEach((link)=>{
    link.addEventListener("click", function(e) {
        e.preventDefault();
        setTimeout(()=>{
            window.location = this.href;
        }, 500);
    });
});
async function principal() {
    home.innerText = "";
    let div_ext = document.createElement("div");
    let img = document.createElement("img");
    div_ext.classList.add("bg-container");
    img.setAttribute("src", (0, _portadaWebpDefault.default));
    img.setAttribute("alt", "llieda");
    img.setAttribute("rel", "preload");
    img.setAttribute("as", "image");
    img.setAttribute("width", "447px");
    img.setAttribute("height", "300px");
    img.setAttribute("loading", "lazy");
    img.classList.add("fotografia");
    img.classList.add("clip-animation");
    div_ext.appendChild(img);
    let div = document.createElement("div");
    div.classList.add("container");
    let span = document.createElement("span");
    span.innerText = "LLEIDA";
    let h1 = document.createElement("h1");
    h1.innerText = "VISITA";
    h1.appendChild(span);
    let p = document.createElement("p");
    p.innerText = "Planifica amb nosaltres la teva visita a la ciutat";
    div.appendChild(div_ext);
    div.appendChild(h1);
    div.appendChild(p);
    home.appendChild(div);
}
let index = document.getElementById("index");
let home = document.getElementById("main");
principal();
index?.addEventListener("click", ()=>{
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) menu.dispatchEvent(new MouseEvent("click"));
    //          
    principal();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../img/portada.webp":"h2dzm"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"h2dzm":[function(require,module,exports) {
module.exports = require("4c8e826c8e54b0f7").getBundleURL("bLxZJ") + "portada.635eac09.webp" + "?" + Date.now();

},{"4c8e826c8e54b0f7":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gpyYL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lesFestes", ()=>lesFestes);
var _caragolilloWebp = require("../img/caragolillo.webp");
var _caragolilloWebpDefault = parcelHelpers.interopDefault(_caragolilloWebp);
let multimedia = [
    {
        titol: "Himne Caragolillo Brillo",
        url: "https://www.youtube.com/embed/Bz4BV8GndoQ?si=clV3z0AB-67iA9Cq",
        atribut: "Video playear caragolillo brillo"
    },
    {
        titol: "Himne Polvoro",
        url: "https://www.youtube.com/embed/OjkPz3JNmbM?si=_Pl4xAIHEuDREfi5",
        atribut: "Video playear himme polvoro"
    },
    {
        titol: "La Festa",
        url: "https://www.youtube.com/embed/uO9eIv1U9-Q?si=x0uMV_YM9ioPQWyx",
        atribut: "Video playear la festa"
    }
];
let festes = document.getElementById("festes");
let home = document.getElementById("main");
async function lesFestes() {
    home.innerText = "";
    let div = document.createElement("div");
    div.classList.add("container");
    let h1 = document.createElement("h1");
    h1.classList.add("center");
    h1.innerText = "Les Festes";
    let h2 = document.createElement("h2");
    h2.innerText = "Aplec del Caragol";
    let img = document.createElement("img");
    img.setAttribute("alt", "Caragolillo");
    // img.classList.add('foto');
    img.classList.add("lazy");
    img.setAttribute("width", "1058");
    img.setAttribute("height", "260");
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", (0, _caragolilloWebpDefault.default));
    let links = document.createElement("div");
    links.classList.add("center");
    // youtube.
    multimedia.map((link)=>{
        let h2 = document.createElement("h2");
        h2.innerText = link.titol;
        let d = document.createElement("div");
        d.classList.add("youtube");
        let iframe = document.createElement("iframe");
        iframe.setAttribute("src", link.url);
        iframe.setAttribute("title", link.atribut);
        iframe.setAttribute("frameborder", 0);
        iframe.setAttribute("allow", "web-share");
        iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        iframe.setAttribute("allowfullscreen", "allowfullscreen");
        iframe.setAttribute("loading", "lazy");
        iframe.classList.add("lazy");
        d.appendChild(iframe);
        links.appendChild(h2);
        links.appendChild(d);
    });
    let d = document.createElement("div");
    let b = document.createElement("b");
    b.innerText = "Colla Caragolillo Brillo";
    let p = document.createElement("p");
    p.innerText = "Per a molts la festa m\xe9s esperada, on tothom es lliura de les etiquetes socials i s\u2019agermana en una festa pels sentits. Amants del bon menjar, del bon beure, de la gresca, gent que vol passar uns dies de desconnexi\xf3 de la monotonia del dia a dia, tots sou benvinguts a la colla Caragolillo Brillo. \xabEndavant, sempre endavant, amb alegria i bon humor!\xbb";
    let span = document.createElement("span");
    span.innerText = "Any de fundaci\xf3: 1991";
    d.appendChild(b);
    d.appendChild(p);
    d.appendChild(span);
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(links);
    div.appendChild(d);
    home.appendChild(div);
}
festes?.addEventListener("click", ()=>{
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) menu.dispatchEvent(new MouseEvent("click"));
    //
    lesFestes();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../img/caragolillo.webp":"2o7jJ"}],"2o7jJ":[function(require,module,exports) {
module.exports = require("77125134e3e84140").getBundleURL("bLxZJ") + "caragolillo.e380a438.webp" + "?" + Date.now();

},{"77125134e3e84140":"lgJ39"}],"gQsUk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lesEnllacos", ()=>lesEnllacos);
const links = [
    "https://www.viajeroscallejeros.com/lugares-que-ver-en-lleida/",
    "https://www.caragolillobrillo.org/",
    "http://www.catvisit.com/es/lleida-historia-cultura-y-el-segre/"
];
let enllacos = document.getElementById("enllacos");
let home = document.getElementById("main");
function lesEnllacos() {
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) menu.dispatchEvent(new MouseEvent("click"));
    //
    home.innerText = "";
    let h1 = document.createElement("h1");
    h1.classList.add("center");
    h1.innerText = "Enlla\xe7os";
    let div = document.createElement("div");
    div.classList.add("container");
    div.classList.add("center");
    let ol = document.createElement("ol");
    ol.classList.add("listas");
    links.map((link)=>{
        let li = document.createElement("li");
        li.innerText = link;
        ol.appendChild(li);
    });
    div.appendChild(ol);
    home.appendChild(h1);
    home.appendChild(div);
}
enllacos?.addEventListener("click", ()=>{
    lesEnllacos();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0UJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lesPresentacio", ()=>lesPresentacio);
var _guimeraWebp = require("../img/guimera.webp");
var _guimeraWebpDefault = parcelHelpers.interopDefault(_guimeraWebp);
var _lleidaWebp = require("../img/lleida.webp");
var _lleidaWebpDefault = parcelHelpers.interopDefault(_lleidaWebp);
var _boiWebp = require("../img/boi.webp");
var _boiWebpDefault = parcelHelpers.interopDefault(_boiWebp);
var _aiguesWebp = require("../img/aigues.webp");
var _aiguesWebpDefault = parcelHelpers.interopDefault(_aiguesWebp);
var _monastirWebp = require("../img/monastir.webp");
var _monastirWebpDefault = parcelHelpers.interopDefault(_monastirWebp);
let fotos = [
    {
        id: "foto1",
        url: (0, _guimeraWebpDefault.default),
        alt: "Guimera"
    },
    {
        id: "foto2",
        url: (0, _lleidaWebpDefault.default),
        alt: "Lleida"
    },
    {
        id: "foto3",
        url: (0, _boiWebpDefault.default),
        alt: "Boi"
    },
    {
        id: "foto4",
        url: (0, _aiguesWebpDefault.default),
        alt: "Aig\xfces"
    },
    {
        id: "foto5",
        url: (0, _monastirWebpDefault.default),
        alt: "Vallbona"
    }
];
let articles = [
    {
        titul: "Inici de la Visita: La Seu Vella",
        missatge: "La visita comen\xe7a a la Seu Vella, l'antiga catedral que \xe9s el principal monument arquitect\xf2nic de la ciutat. S'al\xe7a imponent sobre un puig que porta el seu nom, des del qual es pot contemplar tota la ciutat, el riu Segre i gran part de l'horta de Lleida. La Seu Vella forma part d'un conjunt monumental integrat pel Castell del Rei o la Suda i la fortificaci\xf3 militar que els envolta."
    },
    {
        titul: "Descobrint el Centre de Lleida",
        missatge: "Despr\xe9s, baixarem cap al centre, fent parada a l'esgl\xe9sia de Sant Lloren\xe7, un temple medieval molt apreciat pels lleidatans. Arribarem a l'Eix Comercial, que segueix el tra\xe7at del Cam\xed de Sant Jaume, una de les principals vies de la ciutat."
    },
    {
        titul: "Edificis Emblem\xe0tics",
        missatge: "En el recorregut, trobarem diversos edificis destacats:",
        fills: [
            "La Seu Nova, constru\xefda al segle XVIII per substituir la vella que havia esdevingut una caserna militar.",
            "L'Hospital de Santa Maria, un edifici g\xf2tic que acollia els m\xe9s necessitats i els pelegrins.",
            "La Capella del Peu del Romeu, dedicada a Santiago, situada sobre l'antiga via de pelegrinatge de la ruta jacobea.",
            "El Palau de la Paeria, l'Ajuntament de Lleida, ubicat en un antic palau senyorial del segle XIII, amb antigues depend\xe8ncies com les presons que es poden visitar.",
            "El Palau de la Diputaci\xf3, constru\xeft reaprofitant estructures de l'antic hospici, amb el notable balc\xf3 del Serraller, davant de la pintoresca Casa de Sauces."
        ]
    },
    {
        titul: "Els Camps Elisis",
        missatge: "L'eix comercial i hist\xf2ric \xe9s paral\xb7lel al riu Segre, un dels principals elements que d\xf3na personalitat a la ciutat. Just a l'altra banda del riu trobem els Camps Elisis, inspirats en el conegut parc franc\xe8s. \xc9s un recinte p\xfablic amb jardins d'estil franc\xe8s i rom\xe0ntic angl\xe8s, constru\xefts sobre terrenys boscosos, que acull edificis de finals del segle XIX i principis del XX."
    }
];
let presentacio = document.getElementById("presentacio");
let home = document.getElementById("main");
async function lesPresentacio() {
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) menu.dispatchEvent(new MouseEvent("click"));
    //
    const svgNS = "http://www.w3.org/2000/svg";
    home.innerText = "";
    let ruta = document.createElement("div");
    ruta.innerHTML = "Visita Lleida";
    ruta.classList.add("ruta");
    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "200");
    svg.setAttribute("height", "100");
    svg.setAttribute("viewBox", "0 0 200 100");
    let autocar = document.createElementNS(svgNS, "rect");
    autocar.setAttribute("x", "10");
    autocar.setAttribute("y", "30");
    autocar.setAttribute("width", "180");
    autocar.setAttribute("height", "50");
    autocar.setAttribute("fill", "#FFD700");
    autocar.setAttribute("stroke", "#000");
    autocar.setAttribute("stroke-width", "2");
    let roda1 = document.createElementNS(svgNS, "circle");
    roda1.classList.add("wheel");
    roda1.setAttribute("cx", "40");
    roda1.setAttribute("cy", "80");
    roda1.setAttribute("r", "10");
    roda1.setAttribute("fill", "#000");
    let roda2 = document.createElementNS(svgNS, "circle");
    roda2.classList.add("wheel");
    roda2.setAttribute("cx", "160");
    roda2.setAttribute("cy", "80");
    roda2.setAttribute("r", "10");
    roda2.setAttribute("fill", "#000");
    let finestra1 = document.createElementNS(svgNS, "rect");
    finestra1.setAttribute("x", "20");
    finestra1.setAttribute("y", "40");
    finestra1.setAttribute("width", "30");
    finestra1.setAttribute("height", "20");
    finestra1.setAttribute("fill", "#FFF");
    finestra1.setAttribute("stroke", "#000");
    finestra1.setAttribute("stroke-width", "1");
    let finestra2 = document.createElementNS(svgNS, "rect");
    finestra2.setAttribute("x", "60");
    finestra2.setAttribute("y", "40");
    finestra2.setAttribute("width", "30");
    finestra2.setAttribute("height", "20");
    finestra2.setAttribute("fill", "#FFF");
    finestra2.setAttribute("stroke", "#000");
    finestra2.setAttribute("stroke-width", "1");
    let finestra3 = document.createElementNS(svgNS, "rect");
    finestra3.setAttribute("x", "100");
    finestra3.setAttribute("y", "40");
    finestra3.setAttribute("width", "30");
    finestra3.setAttribute("height", "20");
    finestra3.setAttribute("fill", "#FFF");
    finestra3.setAttribute("stroke", "#000");
    finestra3.setAttribute("stroke-width", "1");
    let finestra4 = document.createElementNS(svgNS, "rect");
    finestra4.setAttribute("x", "140");
    finestra4.setAttribute("y", "40");
    finestra4.setAttribute("width", "30");
    finestra4.setAttribute("height", "20");
    finestra4.setAttribute("fill", "#FFF");
    finestra4.setAttribute("stroke", "#000");
    finestra4.setAttribute("stroke-width", "1");
    svg.appendChild(autocar);
    svg.appendChild(roda1);
    svg.appendChild(roda2);
    svg.appendChild(finestra1);
    svg.appendChild(finestra2);
    svg.appendChild(finestra3);
    svg.appendChild(finestra4);
    ruta.appendChild(svg);
    let h1 = document.createElement("h1");
    h1.classList.add("center");
    h1.innerText = "Lleida, historia, cultura i el Segre";
    let div = document.createElement("div");
    div.classList.add("container");
    let p = document.createElement("p");
    p.innerText = "Lleida ha estat hist\xf2ricament la capital interior de Catalunya. La seva situaci\xf3 a ponent la va convertir a la porta d'entrada i sortida, ja fos per carretera o via fluvial. Aquesta situaci\xf3 estrat\xe8gica va fer que durant segles la ciutat visqu\xe9s grans \xe8poques d'esplendor que es veuen reflectides en el passat monumental, per\xf2 alhora aquest fet va provocar que durant els conflictes b\xe8l\xb7lics la ciutat pat\xeds greus danys i canvis importants.";
    let seccio1 = document.createElement("section");
    seccio1.classList.add("foto-galeria");
    fotos.map((foto)=>{
        let svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("id", foto.id);
        svg.classList.add("imagen");
        svg.setAttribute("width", "100");
        svg.setAttribute("height", "100");
        svg.setAttribute("viewBox", "0 0 100 100");
        let d = document.createElement("div");
        d.classList.add("canviar");
        let img = document.createElementNS(svgNS, "image");
        img.setAttribute("href", foto.url);
        img.setAttribute("width", "100");
        img.setAttribute("height", "100");
        img.setAttribute("loading", "lazy");
        svg.appendChild(img);
        d.appendChild(svg);
        seccio1.appendChild(d);
        svg.addEventListener("click", ()=>{
            // Elimino la classe per ferla petita
            const fotos = document.querySelectorAll(".imagen");
            fotos?.forEach((f)=>f.classList.remove("grande"));
            svg.classList.toggle("grande");
        });
    });
    let seccio2 = document.createElement("section");
    seccio2.classList.add("container");
    seccio2.classList.add("articles");
    articles.map((article)=>{
        let art = document.createElement("article");
        let h2 = document.createElement("h2");
        h2.innerText = article.titul;
        let p = document.createElement("p");
        p.innerText = article.missatge;
        art.appendChild(h2);
        art.appendChild(p);
        let ul = document.createElement("ul");
        let control = 0;
        if (article.fills != undefined) article.fills.map((fill)=>{
            let li = document.createElement("li");
            li.innerText = fill;
            ul.appendChild(li);
            control += 1;
        });
        if (control > 0) seccio2.appendChild(ul);
        seccio2.appendChild(art);
    });
    div.appendChild(ruta);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(seccio1);
    div.appendChild(seccio2);
    home.appendChild(div);
}
presentacio?.addEventListener("click", ()=>{
    lesPresentacio();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../img/guimera.webp":"avNUY","../img/lleida.webp":"jaK4Q","../img/boi.webp":"cx11u","../img/aigues.webp":"grib8","../img/monastir.webp":"cYllq"}],"avNUY":[function(require,module,exports) {
module.exports = require("13fe3922f493fb8b").getBundleURL("bLxZJ") + "guimera.b7b4d1d7.webp" + "?" + Date.now();

},{"13fe3922f493fb8b":"lgJ39"}],"jaK4Q":[function(require,module,exports) {
module.exports = require("65e94e5903362a88").getBundleURL("bLxZJ") + "lleida.eab0df2a.webp" + "?" + Date.now();

},{"65e94e5903362a88":"lgJ39"}],"cx11u":[function(require,module,exports) {
module.exports = require("fc2b9f9b34cf6384").getBundleURL("bLxZJ") + "boi.c49c3a18.webp" + "?" + Date.now();

},{"fc2b9f9b34cf6384":"lgJ39"}],"grib8":[function(require,module,exports) {
module.exports = require("7a1305b6eee39fc3").getBundleURL("bLxZJ") + "aigues.177d88ad.webp" + "?" + Date.now();

},{"7a1305b6eee39fc3":"lgJ39"}],"cYllq":[function(require,module,exports) {
module.exports = require("4802042f4a410c6b").getBundleURL("bLxZJ") + "monastir.be3f9296.webp" + "?" + Date.now();

},{"4802042f4a410c6b":"lgJ39"}],"bmnj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ver_funcio", ()=>ver_funcio);
parcelHelpers.export(exports, "lesCategories", ()=>lesCategories);
var _guimeraWebp = require("../img/guimera.webp");
var _guimeraWebpDefault = parcelHelpers.interopDefault(_guimeraWebp);
var _aiguesWebp = require("../img/aigues.webp");
var _aiguesWebpDefault = parcelHelpers.interopDefault(_aiguesWebp);
var _lleidaWebp = require("../img/lleida.webp");
var _lleidaWebpDefault = parcelHelpers.interopDefault(_lleidaWebp);
var _boiWebp = require("../img/boi.webp");
var _boiWebpDefault = parcelHelpers.interopDefault(_boiWebp);
var _monastirWebp = require("../img/monastir.webp");
var _monastirWebpDefault = parcelHelpers.interopDefault(_monastirWebp);
//
var _guimeraMWebp = require("../img/guimera_m.webp");
var _guimeraMWebpDefault = parcelHelpers.interopDefault(_guimeraMWebp);
var _aiguesMWebp = require("../img/aigues_m.webp");
var _aiguesMWebpDefault = parcelHelpers.interopDefault(_aiguesMWebp);
var _lleidaMWebp = require("../img/lleida_m.webp");
var _lleidaMWebpDefault = parcelHelpers.interopDefault(_lleidaMWebp);
var _boiMWebp = require("../img/boi_m.webp");
var _boiMWebpDefault = parcelHelpers.interopDefault(_boiMWebp);
var _monastirMWebp = require("../img/monastir_m.webp");
var _monastirMWebpDefault = parcelHelpers.interopDefault(_monastirMWebp);
var _festesJs = require("../js/festes.js");
function ver_funcio(boton) {
    matriu.map((ciutat)=>{
        document.getElementById(ciutat).classList.add("d-none");
    });
    document.getElementById(boton).classList.remove("d-none");
}
let categoria = document.getElementById("categoria");
let home = document.getElementById("main");
let botons = [
    {
        id: "guimera",
        titul: "Gimera",
        id_text: "ver_guimera",
        text: "Una de les millors coses a fer a Lleida \xe9s passejar pels carrerons de Guimer\xe0 , un dels pobles m\xe9s bonics a veure a Catalunya . Flanquejat pel riu Corb i situat en un vessant d'una muntanya, aquest poble medieval enamora per les seves cases de pedra amb detalls en portes i finestres, i els seus carrerons costeruts, alguns amb arcades, que et portaran fins a l'Esgl\xe9sia de Santa Maria i la torre del castell, des d'on tindr\xe0s unes vistes fant\xe0stiques. Un cop acabis el recorregut pots tornar a baixar passant per la Pla\xe7a Major i alguns dels seus carrers m\xe9s bonics, com el del Cacau i de la Cendra, fins arribar una altra vegada a la riba del Corb, on no pots deixar de reposar forces prenent un aperitiu al Bar Moretes o esmorzar les seves famoses arengades de la mama , amb pa amb tom\xe0quet. Si t'animes no deixis de comentar-nos-ho al post, ens far\xe0 especial il\xb7lusi\xf3 saber-ho! A uns 2 quil\xf2metres de Guimer\xe0 hi ha les ru\xefnes del monestir de Vallsanta, que tamb\xe9 mereixen una visita.",
        url: (0, _guimeraWebpDefault.default),
        srcset: (0, _guimeraMWebpDefault.default),
        sizes: "(max-width: 1000px)",
        width: 800,
        height: 534
    },
    {
        id: "aigues",
        titul: "Aig\xfcestortes",
        id_text: "ver_aigues",
        text: "El Parc Nacional d\xb4Aig\xfcestortes i Estany de Sant Maurici , \xe9s una altra de les meravelles que veure a Lleida i el nostre rac\xf3 favorit per gaudir de la natura. Aquest espai natural protegit, \xfanic al sud d'Europa, us permet fer rutes de senderisme entre muntanyes de m\xe9s de 3.000 metres d'al\xe7ada, llacs de tot tipus i colors, cascades, rius i una gran diversitat de fauna i flora. El parc disposa de dos accessos principals: el de Bo\xed i el d'Espot, als quals pots arribar amb autob\xfas o cotxe, aquesta \xfaltima \xe9s l'opci\xf3 m\xe9s recomanable. Si entreu per Bo\xed podreu observar els paisatges m\xe9s caracter\xedstics del parc com s\xf3n els prats i meandres, a m\xe9s de diversos llacs com el de Llebreta, Llong, Travessani, el Negre o el Monges, i muntanyes com la de Comaloforno, de 3.033 metres d'altitud . Mentre que si entres per Espot podr\xe0s veure el fam\xf3s Llac de Sant Maurici, els dos pics coneguts com Els Encantats , la cascada i el llac de Ratera, i la zona d'Amitges on pots trobar un refugi, un llac i dos pics a forma d'agulla. Tot i que \xe9s recomanable fer totes les rutes a peu, a la zona de Sant Maurici disposeu d'un servei de 4\xd74 que us portar\xe0 fins a la zona alta, per la qual cosa us estalviareu una part important de la pujada.",
        url: (0, _aiguesWebpDefault.default),
        srcset: (0, _aiguesMWebpDefault.default),
        sizes: "(max-width: 1000px)",
        width: 800,
        height: 534
    },
    {
        id: "lleida",
        titul: "Lleida",
        id_text: "ver_lleida",
        text: "Lleida, la capital de la prov\xedncia i una desconeguda per al gran p\xfablic, \xe9s una ciutat perfecta per passar-hi un o dos dies visitant els seus nombrosos edificis hist\xf2rics i racons amb encant. Entre els seus edificis m\xe9s importants destaca la Seu Vella, una antiga catedral situada a dalt d'un tur\xf3 que meravella pel claustre i una alta torre, des d'on observar tota la ciutat i el seu entorn. Si voleu tenir vistes de la Seu Vella amb Lleida de fons, podeu pujar fins al mirador de l'antic Castell del Rei. Altres punts d'inter\xe8s de la ciutat s\xf3n la Catedral Nova, el Palau de la Paeria, l'Antic Hospital de Santa Maria i, sobretot, el Castell templer de Gardeny, un dels llocs que visitar a Lleida m\xe9s interessants . Per con\xe8ixer millor la hist\xf2ria d'aquest castell us recomanem reservar aquesta visita guiada . A m\xe9s de con\xe8ixer tots aquests atractius tur\xedstics, et recomanem rec\xf3rrer el Carrer Major, un dels carrers comercials m\xe9s llargs del pa\xeds, i passejar per la riba del Segre, a m\xe9s de tastar algun dels plats m\xe9s t\xedpics de la regi\xf3 com s\xf3n els cargols ( cargols) a la llauna seguint aquesta llista dels millors restaurants on menjar a Lleida . Si fas nit a la capital pots reservar a l' Hotel Real , al Zenit Lleida o al Ramon Berenguer IV .",
        url: (0, _lleidaWebpDefault.default),
        srcset: (0, _lleidaMWebpDefault.default),
        sizes: "(max-width: 1000px)",
        canvi: "festes",
        canvi_text: "Les Festes",
        width: 800,
        height: 534
    },
    {
        id: "boi",
        titul: "Vall Boi",
        id_text: "ver_boi",
        text: "Una ruta amb cotxe per les Esgl\xe9sies rom\xe0niques de la Vall de Bo\xed , \xe9s una altra de les millors coses a fer a la prov\xedncia de Lleida i un dels llocs que visitar a Catalunya m\xe9s imprescindibles. Aquestes esgl\xe9sies que comparteixen el mateix estil rom\xe0nic llombard, van ser constru\xefdes entre els segles XI i XII i declarades Patrimoni de la Humanitat per la Unesco. A m\xe9s d'estar ubicades en un entorn privilegiat, es caracteritzen per la bona utilitzaci\xf3 de la pedra, la decoraci\xf3 en arcs cecs i bandes llombardes, les altes torres campanar i la pres\xe8ncia de pintures murals en alguna. Tot i que la m\xe9s famosa \xe9s l'esgl\xe9sia de Santa Maria de Ta\xfcll, que tenia al seu interior la valuosa pintura del Pantocrator, val la pena fer la ruta completa que passi per les esgl\xe9sies de Sant Climent de Ta\xfcll , Sant Joan de Bo\xed, Santa Eul\xe0lia 'Erill la Vall, Sant Feliu de Barruera, Nativitat de Durro, Santa Maria de Cardet, l'Assumpci\xf3 de C\xf3ll i l'ermita de Sant Quirc de Durro. La majoria estan obertes cada dia de 10h a 14h i de 16h a 19h. Un dels nostres consells si visites aquests pobles de la Vall de Bo\xed, \xe9s allotjar-te en una casa o hotel rural com el Ratiner , on vam estar nosaltres i vam poder gaudir d'uns deliciosos esmorzars a base d'embotits locals. Si disposes de m\xe9s temps pots acostar-te a Viella i la bonica Vall d'Aran. Per a m\xe9s informaci\xf3 podeu consultar aquesta ruta per la Vall de Bo\xed en un cap de setmana . ",
        url: (0, _boiWebpDefault.default),
        srcset: (0, _boiMWebpDefault.default),
        sizes: "(max-width: 1000px)",
        width: 800,
        height: 534
    },
    {
        id: "vallbona",
        titul: "Vallbona",
        id_text: "ver_vallbona",
        text: "El monestir de Vallbona de les Monges , parada obligada de la coneguda com a Ruta del Cister, que agrupa diversos monestirs cistercencs, \xe9s una altra de les meravelles a veure a Lleida (Lleida) . Fundat al segle XII, aquest monestir que ha conservat la seva comunitat femenina durant m\xe9s de 850 anys i on pots fer nit, destaca pels seus dos cimboris g\xf2tics, el bell claustre en qu\xe8 es barregen l'estil \xe0rab, rom\xe0nic i g\xf2tic, i la Sala Capitular amb diversos sepulcres d'abadesses del monestir. ",
        url: (0, _monastirWebpDefault.default),
        srcset: (0, _monastirMWebpDefault.default),
        sizes: "(max-width: 1000px)",
        width: 800,
        height: 534
    }
];
let matriu = [];
async function lesCategories() {
    // Amago el menu
    home.innerText = "";
    let h1 = document.createElement("h1");
    h1.classList.add("center");
    h1.innerText = "Categoria";
    let fragment = document.createDocumentFragment();
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "Aquesta llista dels millors llocs a veure a Lleida i prov\xedncia, ens ajudar\xe0 a con\xe8ixer aquesta regi\xf3 plena de meravelles naturals i monuments hist\xf2rics. Situada al nord-est d'Espanya, a l'interior de Catalunya, ofereix experi\xe8ncies fant\xe0stiques en contacte amb la natura m\xe9s aut\xe8ntica i coneixent el seu passat medieval a petits pobles plens d'encant. Per arribar a Lleida disposes del tren d'alta velocitat (AVE) que t\xe9 parada a la capital o pots volar a Barcelona, \u200B\u200Ba menys de dues hores amb cotxe. Aqui tens una llista plena de llocs a visitar a Lleida imprescindibles. Comencem!";
    div.classList.add("container");
    let butons = document.createElement("div");
    butons.classList.add("menu_categories");
    // Menu Botons
    botons.map((boto)=>{
        let d = document.createElement("div");
        let but = document.createElement("button");
        but.classList.add("boto_categories");
        but.innerHTML = boto.titul;
        but.id = boto.id;
        but.addEventListener("click", ()=>{
            ver_funcio(boto.id_text);
        });
        d.appendChild(but);
        butons.appendChild(d);
    });
    document.body.appendChild(fragment);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(butons);
    // Explicacio per boto
    botons.map((boto)=>{
        let d1 = document.createElement("div");
        d1.classList.add("d-none");
        d1.id = boto.id_text;
        matriu.push(boto.id_text);
        let b = document.createElement("b");
        b.innerText = boto.titul;
        d1.appendChild(b);
        let p = document.createElement("p");
        p.innerText = boto.text;
        d1.appendChild(p);
        let d2 = document.createElement("div");
        d2.classList.add("center");
        let img = document.createElement("img");
        img.classList.add("foto");
        img.classList.add("lazy");
        img.setAttribute("alt", boto.titul);
        img.setAttribute("width", boto.width);
        img.setAttribute("height", boto.height);
        img.setAttribute("data-src", boto.url);
        img.setAttribute("loading", "lazy");
        if (boto.srcset != undefined) {
            img.setAttribute("srcset", `${boto.srcset} 991w, ${boto.url}`);
            img.setAttribute("sizes", boto.sizes);
        }
        d2.appendChild(img);
        d1.appendChild(d2);
        if (boto.canvi != undefined) {
            let d3 = document.createElement("div");
            d3.classList.add("center");
            let bt = document.createElement("button");
            bt.classList.add("boto_categories");
            bt.id = boto.canvi;
            bt.innerText = boto.canvi_text;
            //
            bt.addEventListener("click", ()=>{
                (0, _festesJs.lesFestes)();
            });
            d3.appendChild(bt);
            d1.appendChild(d3);
        }
        div.appendChild(d1);
    });
    home.appendChild(div);
}
categoria?.addEventListener("click", ()=>{
    // Amago el menu
    let rect = imagen.getBoundingClientRect();
    if (rect.top > 0) menu.dispatchEvent(new MouseEvent("click"));
    //
    lesCategories();
});

},{"../js/festes.js":"gpyYL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../img/guimera.webp":"avNUY","../img/aigues.webp":"grib8","../img/lleida.webp":"jaK4Q","../img/boi.webp":"cx11u","../img/monastir.webp":"cYllq","../img/guimera_m.webp":"kl4DO","../img/aigues_m.webp":"iHeJ4","../img/lleida_m.webp":"gFxTR","../img/boi_m.webp":"hUZj8","../img/monastir_m.webp":"eUqb9"}],"kl4DO":[function(require,module,exports) {
module.exports = require("a0769d2253b5cd5f").getBundleURL("bLxZJ") + "guimera_m.87cb5e30.webp" + "?" + Date.now();

},{"a0769d2253b5cd5f":"lgJ39"}],"iHeJ4":[function(require,module,exports) {
module.exports = require("442cd22ab8c92d03").getBundleURL("bLxZJ") + "aigues_m.b4e6e3a5.webp" + "?" + Date.now();

},{"442cd22ab8c92d03":"lgJ39"}],"gFxTR":[function(require,module,exports) {
module.exports = require("1e037721e96632f3").getBundleURL("bLxZJ") + "lleida_m.5b855a48.webp" + "?" + Date.now();

},{"1e037721e96632f3":"lgJ39"}],"hUZj8":[function(require,module,exports) {
module.exports = require("52d1c957ab1eea2").getBundleURL("bLxZJ") + "boi_m.ffb2b4e7.webp" + "?" + Date.now();

},{"52d1c957ab1eea2":"lgJ39"}],"eUqb9":[function(require,module,exports) {
module.exports = require("b1db2a75daed58fb").getBundleURL("bLxZJ") + "monastir_m.adc63780.webp" + "?" + Date.now();

},{"b1db2a75daed58fb":"lgJ39"}],"fXl6u":[function(require,module,exports) {
var _festesJs = require("../js/festes.js");
var _categoriaJs = require("../js/categoria.js");
var _presentacioJs = require("../js/presentacio.js");
var _enllacosJs = require("../js/enllacos.js");
let categoria = document.getElementById("categoria_peu");
let festes = document.getElementById("festes_peu");
let presentacio = document.getElementById("presentacio_peu");
let enllacos = document.getElementById("enllacos_peu");
categoria?.addEventListener("click", ()=>{
    (0, _categoriaJs.lesCategories)();
});
festes?.addEventListener("click", ()=>{
    (0, _festesJs.lesFestes)();
});
presentacio?.addEventListener("click", ()=>{
    (0, _presentacioJs.lesPresentacio)();
});
enllacos?.addEventListener("click", ()=>{
    (0, _enllacosJs.lesEnllacos)();
});

},{"../js/festes.js":"gpyYL","../js/categoria.js":"bmnj6","../js/presentacio.js":"i0UJj","../js/enllacos.js":"gQsUk"}]},["farZc","8lqZg"], "8lqZg", "parcelRequire2d1f")

//# sourceMappingURL=index.975ef6c8.js.map
