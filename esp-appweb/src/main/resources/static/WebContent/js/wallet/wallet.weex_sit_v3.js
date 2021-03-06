// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(30);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(152);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(261);

	var _index8 = _interopRequireDefault(_index7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_index4.default

	// create the app instance.1123
	// here we inject the router and store to all child components,
	// making them available everywhere as `this.$router` and `this.$store`.
	// to use until by `this.$options.untils`
	); /**
	    * Created by x298017064010 on 17/6/12.
	    */

	exports.default = new Vue(Vue.util.extend({ el: '#root', router: _index6.default, store: _index2.default, event: _index8.default }, _App2.default));


	_index6.default.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {
	        console.log(this.$getConfig()

	        // 1.存储路由
	        );this.$store.state.router = this.$router;
	        // 2.存储系统数据
	        this.$store.state.env = this.$getConfig().env;
	        this.$store.state.os = this.$store.state.env.platform;
	        this.$store.state.screenHeight = this.$store.state.env.deviceHeight / (this.$store.state.env.deviceWidth + 50) * 750;
	        // 3.存储原生数据
	        var localData = this.$getConfig().localData;
	        this.$store.dispatch('LOCAL_DATA', localData);
	    },
	    mounted: function mounted() {}
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('router-view', {
	    staticStyle: {
	      flex: "1"
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(5);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _mutations = __webpack_require__(6);

	var mutations = _interopRequireWildcard(_mutations);

	var _actions = __webpack_require__(7);

	var actions = _interopRequireWildcard(_actions);

	var _getters = __webpack_require__(8);

	var getters = _interopRequireWildcard(_getters);

	var _MobileAuth = __webpack_require__(9);

	var _MobileAuth2 = _interopRequireDefault(_MobileAuth);

	var _Auth = __webpack_require__(12);

	var _Auth2 = _interopRequireDefault(_Auth);

	var _Face = __webpack_require__(15);

	var _Face2 = _interopRequireDefault(_Face);

	var _LinkMan = __webpack_require__(18);

	var _LinkMan2 = _interopRequireDefault(_LinkMan);

	var _Withdraw = __webpack_require__(21);

	var _Withdraw2 = _interopRequireDefault(_Withdraw);

	var _Commission = __webpack_require__(24);

	var _Commission2 = _interopRequireDefault(_Commission);

	var _commissionApply = __webpack_require__(27);

	var _commissionApply2 = _interopRequireDefault(_commissionApply);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Vuex is auto installed on the web


	// 佣金分期模块
	if (WXEnvironment.platform !== 'Web') {
	    Vue.use(_vuex2.default);
	}

	// 钱包模块
	/**
	 * Created by x298017064010 on 17/6/12.
	 */

	var store = new _vuex2.default.Store({

	    mutations: mutations,
	    actions: actions,
	    getters: getters,
	    modules: {
	        auth: _Auth2.default,
	        face: _Face2.default,
	        mobileAuth: _MobileAuth2.default,
	        withdraw: _Withdraw2.default,

	        linkInfo: _LinkMan2.default,
	        commApply: _commissionApply2.default,

	        commsWL: _Commission2.default
	    },

	    // 初始化整个应用状态 this.$store.state.count
	    state: {
	        prd: false, // 生产环境
	        debug: false, // debug模式

	        isDidClick: false, // 防抖
	        router: {},
	        errNetParam: {}, // 网络断开, 刷新参数

	        banner_src: '',

	        env: {},
	        os: '',
	        screenHeight: '',

	        mobile: '', // 用户名
	        token: '', // 登陆验证
	        customerId: '', // 客户号
	        appId: '', //  appId
	        lastVersion: '', //  最新版本号
	        imagePath: '' //  图片路径
	    }
	});

	exports.default = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.3.0
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.Vuex = factory());
	}(this, (function () { 'use strict';

	var applyMixin = function (Vue) {
	  var version = Number(Vue.version.split('.')[0]);

	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit;
	      _init.call(this, options);
	    };
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options;
	    // store injection
	    if (options.store) {
	      this.$store = options.store;
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store;
	    }
	  }
	};

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook;

	  devtoolHook.emit('vuex:init', store);

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState);
	  });

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state);
	  });
	}

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */


	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime;
	  this._children = Object.create(null);
	  this._rawModule = rawModule;
	  var rawState = rawModule.state;
	  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
	};

	var prototypeAccessors$1 = { namespaced: {} };

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};

	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module;
	};

	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key];
	};

	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};

	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced;
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions;
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations;
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters;
	  }
	};

	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn);
	};

	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn);
	  }
	};

	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn);
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn);
	  }
	};

	Object.defineProperties( Module.prototype, prototypeAccessors$1 );

	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;

	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false);

	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false);
	    });
	  }
	};

	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};

	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root;
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key);
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};

	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule);
	};

	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;

	  var parent = this.get(path.slice(0, -1));
	  var newModule = new Module(rawModule, runtime);
	  parent.addChild(path[path.length - 1], newModule);

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime);
	    });
	  }
	};

	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1));
	  var key = path[path.length - 1];
	  if (!parent.getChild(key).runtime) { return }

	  parent.removeChild(key);
	};

	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule);

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        );
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key]);
	    }
	  }
	}

	var Vue; // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  // store internal state
	  this._committing = false;
	  this._actions = Object.create(null);
	  this._mutations = Object.create(null);
	  this._wrappedGetters = Object.create(null);
	  this._modules = new ModuleCollection(options);
	  this._modulesNamespaceMap = Object.create(null);
	  this._subscribers = [];
	  this._watcherVM = new Vue();

	  // bind commit and dispatch to self
	  var store = this;
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  };
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  };

	  // strict mode
	  this.strict = strict;

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root);

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state);

	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
	};

	var prototypeAccessors = { state: {} };

	prototypeAccessors.state.get = function () {
	  return this._vm._data.$$state
	};

	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.");
	};

	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;

	  var mutation = { type: type, payload: payload };
	  var entry = this._mutations[type];
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type));
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload);
	    });
	  });
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    );
	  }
	};

	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;

	  var entry = this._actions[type];
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type));
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers;
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn);
	  }
	  return function () {
	    var i = subs.indexOf(fn);
	    if (i > -1) {
	      subs.splice(i, 1);
	    }
	  }
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  assert(typeof getter === 'function', "store.watch only accepts a function.");
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm._data.$$state = state;
	  });
	};

	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.register(path, rawModule);
	  installModule(this, this.state, path, this._modules.get(path));
	  // reset store to update getters...
	  resetStoreVM(this, this.state);
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path]; }
	  assert(Array.isArray(path), "module path must be a string or an Array.");
	  this._modules.unregister(path);
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1));
	    Vue.delete(parentState, path[path.length - 1]);
	  });
	  resetStore(this);
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions);
	  resetStore(this, true);
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing;
	  this._committing = true;
	  fn();
	  this._committing = committing;
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function resetStore (store, hot) {
	  store._actions = Object.create(null);
	  store._mutations = Object.create(null);
	  store._wrappedGetters = Object.create(null);
	  store._modulesNamespaceMap = Object.create(null);
	  var state = store.state;
	  // init all modules
	  installModule(store, state, [], store._modules.root, true);
	  // reset vm
	  resetStoreVM(store, state, hot);
	}

	function resetStoreVM (store, state, hot) {
	  var oldVm = store._vm;

	  // bind store public getters
	  store.getters = {};
	  var wrappedGetters = store._wrappedGetters;
	  var computed = {};
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); };
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    });
	  });

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent;
	  Vue.config.silent = true;
	  store._vm = new Vue({
	    data: {
	      $$state: state
	    },
	    computed: computed
	  });
	  Vue.config.silent = silent;

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store);
	  }

	  if (oldVm) {
	    if (hot) {
	      // dispatch changes in all subscribed watchers
	      // to force getter re-evaluation for hot reloading.
	      store._withCommit(function () {
	        oldVm._data.$$state = null;
	      });
	    }
	    Vue.nextTick(function () { return oldVm.$destroy(); });
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length;
	  var namespace = store._modules.getNamespace(path);

	  // register in namespace map
	  if (module.namespaced) {
	    store._modulesNamespaceMap[namespace] = module;
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1));
	    var moduleName = path[path.length - 1];
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state);
	    });
	  }

	  var local = module.context = makeLocalContext(store, namespace, path);

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key;
	    registerMutation(store, namespacedType, mutation, local);
	  });

	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key;
	    registerAction(store, namespacedType, action, local);
	  });

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key;
	    registerGetter(store, namespacedType, getter, local);
	  });

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot);
	  });
	}

	/**
	 * make localized dispatch, commit, getters and state
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace, path) {
	  var noNamespace = namespace === '';

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      return store.dispatch(type, payload)
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options);
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type;
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
	          return
	        }
	      }

	      store.commit(type, payload, options);
	    }
	  };

	  // getters and state object must be gotten lazily
	  // because they will be changed by vm update
	  Object.defineProperties(local, {
	    getters: {
	      get: noNamespace
	        ? function () { return store.getters; }
	        : function () { return makeLocalGetters(store, namespace); }
	    },
	    state: {
	      get: function () { return getNestedState(store.state, path); }
	    }
	  });

	  return local
	}

	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {};

	  var splitPos = namespace.length;
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }

	    // extract local getter type
	    var localType = type.slice(splitPos);

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    });
	  });

	  return gettersProxy
	}

	function registerMutation (store, type, handler, local) {
	  var entry = store._mutations[type] || (store._mutations[type] = []);
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(local.state, payload);
	  });
	}

	function registerAction (store, type, handler, local) {
	  var entry = store._actions[type] || (store._actions[type] = []);
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: local.state,
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb);
	    if (!isPromise(res)) {
	      res = Promise.resolve(res);
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err);
	        throw err
	      })
	    } else {
	      return res
	    }
	  });
	}

	function registerGetter (store, type, rawGetter, local) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type));
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      local.state, // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  };
	}

	function enableStrictMode (store) {
	  store._vm.$watch(function () { return this._data.$$state }, function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
	  }, { deep: true, sync: true });
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload;
	    payload = type;
	    type = type.type;
	  }

	  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

	  return { type: type, payload: payload, options: options }
	}

	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    );
	    return
	  }
	  Vue = _Vue;
	  applyMixin(Vue);
	}

	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {};
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      var state = this.$store.state;
	      var getters = this.$store.getters;
	      if (namespace) {
	        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
	        if (!module) {
	          return
	        }
	        state = module.context.state;
	        getters = module.context.getters;
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res
	});

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {};
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
	        return
	      }
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {};
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedGetter () {
	      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
	        return
	      }
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val));
	        return
	      }
	      return this.$store.getters[val]
	    };
	    // mark vuex getter for devtools
	    res[key].vuex = true;
	  });
	  return res
	});

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {};
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val;
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
	        return
	      }
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    };
	  });
	  return res
	});

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace;
	      namespace = '';
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/';
	    }
	    return fn(namespace, map)
	  }
	}

	function getModuleByNamespace (store, helper, namespace) {
	  var module = store._modulesNamespaceMap[namespace];
	  if (!module) {
	    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
	  }
	  return module
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.3.0',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	};

	return index;

	})));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEMO_MUTATION = DEMO_MUTATION;
	/**
	 * Created by x298017064010 on 17/6/12.
	 *
	 * 更改应用状态的唯一方法(同步事务), 调用: this.$store.commit('increment', otherProps)
	 */

	function DEMO_MUTATION(state, payload) {
	  console.log(state.count, payload);
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LOCAL_DATA = LOCAL_DATA;
	/**
	 * Created by x298017064010 on 17/6/12.
	 *
	 * 这里是提交mutations, 而不是直接更改状态(异步事务), 调用: this.$store.dispatch('DEMO_ACTION_ASYNC')
	 */

	// 本地数据
	function LOCAL_DATA(_ref, payload) {
	  var commit = _ref.commit,
	      state = _ref.state;


	  state.mobile = payload.mobile;
	  state.token = payload.token;
	  state.customerId = payload.customerId;
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEMO_GETTER = DEMO_GETTER;
	/**
	 * Created by x298017064010 on 17/6/12.
	 *
	 * 相当于store 的计算属性方便子组件在任意场合调用, 调用: this.$store.getters.getCurrentCount
	 */

	// root
	function DEMO_GETTER(state) {
	  return state.count;
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _MobileAuthMutations = __webpack_require__(10);

	var mutations = _interopRequireWildcard(_MobileAuthMutations);

	var _MobileAuthActions = __webpack_require__(11);

	var actions = _interopRequireWildcard(_MobileAuthActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var mobileAuth = {
	    actions: actions,
	    mutations: mutations,
	    state: {
	        account: '',
	        password: '',
	        captcha: '',

	        token: '', // 令牌
	        website: '' // 运营商
	    }
	};

	exports.default = mobileAuth;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PHONE_INITIALIZE = PHONE_INITIALIZE;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	function PHONE_INITIALIZE(state, payload) {
	    console.log('PHONE_INITIALIZE - payload: ', payload

	    // 特殊处理, 存主module
	    );state.token = payload.token == null ? '' : payload.cardNo;
	    state.website = payload.website == null ? '' : payload.validPeriod;

	    console.log('PHONE_INITIALIZE - store: ', state);
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PHONE_INITIALIZE = PHONE_INITIALIZE;
	exports.PHONE_SUBMITINFORMATION = PHONE_SUBMITINFORMATION;
	exports.PHONE_COMPARINGINFORMATION = PHONE_COMPARINGINFORMATION;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 初始化数据
	function PHONE_INITIALIZE(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        realName: rootState.auth.realName,
	        identityNo: rootState.auth.identityNo,
	        repeatFlag: '1'
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.PHONE_INITIALIZE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            commit('PHONE_INITIALIZE', res.data
	            // payload.callback(res.data)
	            );
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 提交信息
	function PHONE_SUBMITINFORMATION(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;


	    Vue.TipHelper.showHub(0);

	    var prama = {
	        customerId: rootState.customerId,
	        "x-auth-token": rootState.token,
	        realName: rootState.auth.realName,
	        identityNo: rootState.auth.identityNo,
	        token: state.token,
	        website: state.website,
	        account: state.account,
	        password: state.password,
	        captcha: state.captcha, // 随机码
	        type: state.captcha == '' ? '' : 'SUBMIT_CAPTCHA' //  随机码不为空的时候
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.PHONE_SUBMITINFORMATION, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        if (res.status == 1) {
	            // 暂存
	            // commit('FACEPAIR_RECOGNICE', res.data)
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 比对信息
	function PHONE_COMPARINGINFORMATION(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;


	    var prama = {
	        customerId: rootState.customerId,
	        "x-auth-token": rootState.token,
	        realName: rootState.auth.realName,
	        identityNo: rootState.auth.identityNo,
	        token: state.token,
	        website: state.website,
	        account: state.account,
	        password: state.password,
	        captcha: state.captcha, // 随机码
	        type: state.captcha == '' ? '' : 'SUBMIT_CAPTCHA' //  随机码不为空的时候
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.PHONE_COMPARINGINFORMATION, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _AuthMutations = __webpack_require__(13);

	var mutations = _interopRequireWildcard(_AuthMutations);

	var _AuthActions = __webpack_require__(14);

	var actions = _interopRequireWildcard(_AuthActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var auth = {
	    actions: actions,
	    mutations: mutations,

	    state: {
	        agent: '', // 客户端平台
	        id: '', // 客户id
	        createdDate: '',
	        updatedDate: '',
	        creditApplyType: '',
	        creditSignFailureNum: '', // 签字优化需求
	        isFromEsp: '', // 1 : 转介绍过来, -1非转介绍
	        repeatApply: '', // 重复申请

	        // -------------- 钱包接口
	        page: '', // 钱包状态 page值

	        ageCondition: '', // 用户的年龄是否符合提现（0为不符合，1为符合）
	        applyCreditDate: '', // 额度申请日期
	        auditStatus: '', // ???
	        availableAmount: '', // 可用额度
	        billDay: '',
	        creditRejRemainDate: '', // 激活额度锁单天数, page=301
	        customerFlag: '', // 新老客户标记 0:老客户，1：新客户
	        customerId: '', // 客户号
	        customerStatus: '', // 客户状态值
	        expireDate: '', // 额度失效时间
	        // identityExpires: '',    // 身份证有效期
	        // identityNo: '',         // 身份证号码
	        // isZmAuth: '',
	        loanAmount: '', // 提现金额
	        loanDate: '', // 提现时间
	        lockDays: '', // 申请额度/锁单天数
	        // mobile:'',              // 账号 手机号
	        noReadCount: '', // 推送消息未读数
	        // realName: '',           // 客户姓名
	        rejectTimeLimit: '',
	        repayDay: '',
	        sltAccountId: '',
	        supportAdvanceFlag: '', // 是否可以提升额度 ( 是否支持提额（false或true）)
	        totalAmount: '', // 授信总额度
	        totalWithdrawAmount: '',
	        userId: '',

	        // -------------- 身份验证
	        status: '', // 验证状态

	        mobile: '', // 电话
	        openId: '',
	        remindRepayment: '',
	        signatureAuditStatus: '', // 审核状态（ -1:拒绝; 0：审核中；1：通过） 200为空

	        identityNo: '', // 身份证号
	        identityExpires: '', // 身份证有效期
	        identityPerson: '', // 是否上传过手持身份证   1 - 是
	        identityRecognizeAddress: '', //身份证地址
	        identityRecognizeName: '', // 身份证姓名

	        realName: '', // 真实姓名
	        educationDegree: '', // 学历
	        marryStatus: '', // 婚姻状态


	        // ---------  信息认证
	        monthlyIncomeCard: '',
	        monthlyIncomeCash: '',
	        industry: '',
	        profession: '',
	        payFundOrSecurity: '',
	        mobileAuthStatus: '', // 手机认证状态 未认证：0, 认证中：1, 已认证：2
	        mobileAuthFlag: '', // 手机认证标识: wait / fail / null (Reviewing) / noauth / auth
	        isZmAuth: '', // 芝麻认证状态: 未认证: 0, 已认证: 1

	        // ---------- 银行卡认证
	        localRegistry: '',
	        mobileAuthDate: '',
	        mobileAuthIdentity: '',
	        mobileRepeatApply: '',
	        mobileReportID: '',

	        bankInfoId: '',
	        bankCode: '',
	        cardBank: '',
	        cardNo: '',
	        cardType: 'CR',

	        bankMobile: '', // 银行卡预留电话

	        // ---------- 反导流产品
	        productList: []
	        // id	        String	产品Id
	        // productName	String	产品名称
	        // productLogo	String	产品logo
	        // productUrl	String	产品url
	        // producDesc	String	产品描述
	        // displayOrder	String	产品排序 小在前
	    }
	};

	exports.default = auth;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HOME_PAGE = HOME_PAGE;
	exports.IDENTITY_INIT = IDENTITY_INIT;
	exports.INFOAUTH_INIT = INFOAUTH_INIT;
	exports.BANKCARD_INIT = BANKCARD_INIT;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	function HOME_PAGE(state, payload) {

	    for (var i in payload) {
	        if (payload.hasOwnProperty(i)) {
	            for (var key in state) {
	                if (payload.hasOwnProperty(key)) {
	                    if (i === key) {
	                        if (i == 'customerId' || i == 'userId') {
	                            state[key] = String(payload[i]) == null ? '' : String(payload[i]);
	                        } else {
	                            state[key] = payload[i] == null ? '' : payload[i];
	                        }
	                    }
	                }
	            }
	        }
	    }
	    console.log('HOME_PAGE - store: ', state);
	}

	// 身份认证初始化
	function IDENTITY_INIT(state, payload) {

	    state.creditApplyType = payload.creditApplyType == null ? '' : payload.creditApplyType;
	    state.isFromEsp = payload.isFromEsp == null ? '' : payload.isFromEsp;
	    state.repeatApply = payload.repeatApply == null ? '' : payload.repeatApply;

	    var data = payload.customer;

	    for (var i in data) {
	        if (data.hasOwnProperty(i)) {
	            for (var key in state) {
	                if (data.hasOwnProperty(key)) {
	                    if (i === key) {
	                        state[key] = data[i] == null ? '' : data[i];
	                    }
	                }
	            }
	        }
	    }
	    console.log('IDENTITYINFO_DOWNLOAD - store: ', state);
	}

	// 信息认证初始化
	function INFOAUTH_INIT(state, payload) {

	    for (var i in payload) {
	        if (payload.hasOwnProperty(i)) {
	            for (var key in state) {
	                if (payload.hasOwnProperty(key)) {
	                    if (i === key) {
	                        if (i == 'customerId' || i == 'userId') {
	                            state[key] = String(payload[i]) == null ? '' : String(payload[i]);
	                        } else {
	                            state[key] = payload[i] == null ? '' : payload[i];
	                        }
	                        // Vue.StorageHelper.setItem(key, payload[i])
	                    }
	                }
	            }
	        }
	    }
	    console.log('INFOAUTH_INIT - store: ', state
	    // 测试
	    // Vue.StorageHelper.getAllKeys()
	    );
	}

	// 银行卡认证初始化
	function BANKCARD_INIT(state, payload) {

	    var data = payload.customer;

	    for (var i in data) {
	        if (data.hasOwnProperty(i)) {
	            for (var key in state) {
	                if (data.hasOwnProperty(key)) {
	                    if (i === key) {
	                        state[key] = data[i] == null ? '' : data[i];
	                    }
	                }
	            }
	        }
	    }

	    state.repeatApply = payload.repeatApply == null ? '' : payload.repeatApply;
	    state.bankInfoId = payload.bankInfoId == null ? '' : payload.bankInfoId;
	    state.cardBank = payload.cardBank == null ? '' : payload.cardBank;
	    state.cardNo = payload.cardNo == null ? '' : payload.cardNo;
	    state.cardType = payload.cardType == null ? '' : payload.cardType;

	    console.log('BANKCARD_INIT - store: ', state);
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HOME_PAGE = HOME_PAGE;
	exports.IDENTITY_INIT = IDENTITY_INIT;
	exports.IDENTITY_SAVE = IDENTITY_SAVE;
	exports.INFOAUTH_INIT = INFOAUTH_INIT;
	exports.INFOAUTH_SAVE = INFOAUTH_SAVE;
	exports.INFOAUTH_ZMAUTH = INFOAUTH_ZMAUTH;
	exports.BANKCARD_INIT = BANKCARD_INIT;
	exports.BANKCARD_SAVE = BANKCARD_SAVE;
	exports.RESULT_LOAD_PRODUCT_LIST = RESULT_LOAD_PRODUCT_LIST;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	var firstStep = function firstStep() {
	    Vue.NaviHelper.render('identity', '身份认证');
	};
	var seconedStep = function seconedStep() {
	    Vue.NaviHelper.render('information', '信息认证');
	};
	var thirdStep = function thirdStep() {
	    Vue.NaviHelper.render('bankCard', '银行卡认证');
	};
	var endStep = function endStep() {
	    Vue.NaviHelper.render('authResultPage', '授信结果');
	};
	var linkManStep = function linkManStep() {
	    Vue.NaviHelper.render('linkMan', '联系人');
	};
	var withdrawStep = function withdrawStep() {
	    Vue.NaviHelper.render('withdraw', '提现');
	};
	var testStep = function testStep() {
	    Vue.NaviHelper.render('SelectProv', 'test');
	};

	// 钱包信息
	function HOME_PAGE(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        dispatch = _ref.dispatch,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0

	    // 初始化请求
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.HOME_PAGE, prama, function (res) {
	        if (res.status == 1) {
	            commit('HOME_PAGE', res.data);
	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	            Vue.NaviHelper.push('pop');
	        }
	    }

	    // result:
	    // {
	    //     data =     {
	    //         ageCondition = 1;
	    //     availableAmount = 0;
	    //     customerFlag = 1;
	    //     customerId = 1082678032;
	    //     customerStatus = 0101;
	    //     identityExpires = 20260429;
	    //     identityNo = 21010619900606611X;
	    //     lockDays = 0;
	    //     mobile = 18369160246;
	    //     noReadCount = 0;
	    //     page = 2;
	    //     realName = "\U91d1\U5b9d\U6cc9";
	    //     supportAdvanceFlag = 0;
	    //     totalAmount = 0;
	    //     userId = 8009061;
	    // };
	    //     msg = "\U8bf7\U6c42\U6570\U636e\U6210\U529f!";
	    //     status = 1;
	    // }
	    );
	}

	// 身份认证 - 初始化
	function IDENTITY_INIT(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;

	    Vue.TipHelper.showHub(0

	    // 初始化请求
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.IDENTITY_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // 1.保存数据
	            commit('IDENTITY_INIT', res.data

	            // 测试
	            );if (rootState.debug) {
	                // state.page = '301'
	                // state.status = '02'
	                // state.mobileAuthFlag = 'noauth'
	                // state.creditRejRemainDate = 301
	                // state.lockDays = 302
	            }

	            console.log('page: ', state.page);
	            console.log('status: ', state.status);
	            console.log('mobileAuthStatus: ', state.mobileAuthStatus // 手机实名状态 0:未认证 1:认证中 2:已认证 3:重新认证',
	            );console.log('mobileAuthFlag: ', state.mobileAuthFlag);
	            console.log('lockDays: ', state.lockDays);
	            console.log('creditRejRemainDate: ', state.creditRejRemainDate);

	            console.log('rootState.debug: ', rootState.debug);

	            if (rootState.debug) {
	                seconedStep();
	                return;
	            }

	            // 2.跳转页面
	            // 根据状态render不同的页面

	            // 检查是否需要激活额度

	            // 是否可以提现 page == 3 / 7 且年龄适合

	            // 检查是否需要重新激活额度


	            if (state.status == '00' || state.status == '-99') {
	                firstStep();
	            } else if (state.status == '01') {
	                if (state.mobileAuthStatus == 0 || state.mobileAuthStatus == null || state.auth.mobileAuthStatus == '') {
	                    seconedStep();
	                } else {
	                    thirdStep();
	                }
	            } else if (state.status == '0001') {//  --------- (废弃)

	            } else if (state.status == '0101') {
	                seconedStep();
	            } else if (state.status == '0102') {
	                thirdStep();
	            } else if (state.status == '02') {
	                // 待激活, 且手机实名认证完成  手机实名认证一共三种状态,未认证,已认证,认证中.
	                if (state.mobileAuthFlag == 'fail') {
	                    // 手机认证页
	                    Vue.TipHelper.showHub('1', '暂时使用原生手机认证页');
	                } else {
	                    // 结果页
	                    endStep();
	                }
	            } else if (state.status == '03') {
	                // 征信审核失败
	                if (state.page == '3' || state.page == '4' || state.page == '5' || state.page == '6' || state.page == '7' || state.page == '303') {
	                    // 返回钱包首页
	                    Vue.NaviHelper.push('root');
	                } else {
	                    endStep();
	                }
	                // if (state.page == '34567 || 303') {返回钱包首页}
	                // else 显示锁单天数
	            } else if (state.status == '04') {// 决策进行中??? 带个刷新按钮 --------- (废弃)
	                // 带刷新按钮的页面
	            } else if (state.status == '05') {
	                // 决策异常
	                // 刷新页面, 去掉刷新按钮
	                endStep();
	            } else if (state.status == '0501') {// 征信姓名和手机实名认证不匹配 --------- (废弃)
	                // 重新申请网络请求'/customer/recredit', 成功后走授信流程, 显示身份认证页面
	            } else if (state.status == '06') {
	                // 授信流程已经走完
	                return; // 暂时没做
	                // ------------需要重新过一遍
	                if (state.page == '3') {
	                    if (state.ageCondition == '0') {
	                        Vue.TipHelper.showHub('2', '对不起，根据您的信用情况，暂时无法为您提供服务');
	                    } else {
	                        // 显示申请提现页面
	                        withdrawStep();
	                    }
	                } else if (state.page == '4' || state.page == '5' || state.page == '6' || state.page == '7') {
	                    // 显示提现状态页面
	                } else {
	                    // fail
	                    endStep();
	                }
	            } else {
	                firstStep();
	            }
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    }

	    // result:
	    // {
	    //     data =     {
	    //         creditApplyType = 1;
	    //     customer =         {
	    //         agent = ios;
	    //     createdDate = 1497577322000;
	    //     creditApplyType = 1;
	    //     creditSignFailureNum = 0;
	    //     educationDegree = bk;
	    //     id = 1082678032;
	    //     identityExpires = 20260429;
	    //     identityNo = 21010619900606611X;
	    //     identityPerson = 1;
	    //     identityRecognizeAddress = "\U6c88\U9633\U5e02\U94c1\U897f\U533a\U5357\U6ed1\U7fd4\U8def58-3\U53f71-1-1";
	    //     identityRecognizeName = "\U91d1\U5b9d\U6cc9";
	    //     marryStatus = wh;
	    //     mobile = 18369160246;
	    //     openId = 18369160246;
	    //     realName = "\U91d1\U5b9d\U6cc9";
	    //     remindRepayment = 1;
	    //     signatureAuditStatus = 200;
	    //     status = 0101;
	    //     updatedDate = 1498636204000;
	    // };
	    //     isFromEsp = "-1";
	    //     repeatApply = false;
	    // };
	    //     msg = success;
	    //     status = 1;
	    // }
	    );
	}

	// 身份认证 - 提交
	function IDENTITY_SAVE(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;


	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        realName: state.realName,
	        identityNo: state.identityNo,
	        creditApplyType: state.creditApplyType // 1 - 信息认证;     0 / null - 其他
	        // educationDegree: state.educationDegree,  // 需求变更, 删除
	        // marryStatus: state.marryStatus,
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.IDENTITY_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        if (res.status == 1) {

	            // -------------------------测试
	            if (rootState.debug) {
	                seconedStep();
	                return;
	            }

	            if (res.data.isCreditSwich == '0') {
	                seconedStep();
	            } else {
	                Vue.NaviHelper.push('pop');
	            }
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    }

	    // var data =  {
	    //     creditApplyType : '1',
	    //     customerId : '1082678032',
	    //     educationDegree : 'bk',
	    //     identityNo : '21010619900606611X',
	    //     marryStatus : 'wh',
	    //     mobile : '18369160246',
	    //     realName : state.realName,
	    //     "x-auth-token" : "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsaXN0ZW5pbmcuand0Lmlzc3Vlcj86bGlzdGVuaW5nLWp3dC1pc3N1ZXIiLCJhdWQiOiJsaXN0ZW5pbmcuand0LmF1ZGllbmNlPzpsaXN0ZW5pbmctand0LWF1ZGllbmNlIiwiaWF0IjoxNTAwNDMwNDUxLCJleHAiOjE1MDEwMzUyNTEsImluZm8iOnsidXNlcklkIjoiODAwOTA2MSIsIm1vYmlsZSI6IjE4MzY5MTYwMjQ2In19.zpgI0Dxomn2LoTfhqp9dVhF5JfvnptjwvAZ9_8eL3cU",
	    // }

	    // result:
	    // {
	    //     data =     {
	    //         entity =         {
	    //         agent = app;
	    //     creditApplyType = 1;
	    //     educationDegree = bk;
	    //     id = 1082678032;
	    //     marryStatus = wh;
	    //     mobile = 18369160246;
	    //     realName = "\U91d1\U5b9d\U6cc9";
	    //     status = 0101;
	    // };
	    //     isCreditSwich = 0;
	    // };
	    //     msg = "\U4fdd\U5b58\U7528\U6237\U4fe1\U606f\U6210\U529f";
	    //     status = 1;
	    // }

	    );
	}

	// 信息认证初始化
	function INFOAUTH_INIT(_ref4, payload) {
	    var commit = _ref4.commit,
	        state = _ref4.state,
	        rootState = _ref4.rootState;

	    // Vue.TipHelper.showHub(0)

	    // 初始化请求
	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.INFOAUTH_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            commit('INFOAUTH_INIT', res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 信息认证 - 提交
	function INFOAUTH_SAVE(_ref5, payload) {
	    var commit = _ref5.commit,
	        state = _ref5.state,
	        rootState = _ref5.rootState;


	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        educationDegree: state.educationDegree,
	        marryStatus: state.marryStatus,
	        profession: state.profession
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.INFOAUTH_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        if (res.status == 1) {
	            // -------------------------测试


	            if (res.data.isCreditSwich == 0) {
	                thirdStep();
	            } else {
	                Vue.NaviHelper.push('pop');
	            }
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    }

	    // {
	    //     customerId = 1082678032;
	    //     industry = "\U6279\U53d1/\U96f6\U552e/\U8d38\U6613";
	    //     mobile = 18369160246;
	    //     monthlyIncomeCard = 6666;
	    //     monthlyIncomeCash = 6666;
	    //     payFundOrSecurity = 1;
	    //     profession = "\U4f01\U4e1a\U4e3b";
	    //     "x-auth-token" = "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsaXN0ZW5pbmcuand0Lmlzc3Vlcj86bGlzdGVuaW5nLWp3dC1pc3N1ZXIiLCJhdWQiOiJsaXN0ZW5pbmcuand0LmF1ZGllbmNlPzpsaXN0ZW5pbmctand0LWF1ZGllbmNlIiwiaWF0IjoxNTAwNDUzODc1LCJleHAiOjE1MDEwNTg2NzUsImluZm8iOnsidXNlcklkIjoiODAwOTA2MSIsIm1vYmlsZSI6IjE4MzY5MTYwMjQ2In19.9H3ZZScgl36C8AMGuVsCVGgBVcpF86x8N3F33-TeQks";
	    // }

	    // {
	    //     data =     {
	    //         isCreditSwich = 0;
	    //     };
	    //     msg = "\U4fdd\U5b58\U4fe1\U606f\U8ba4\U8bc1\U6210\U529f";
	    //     status = 1;
	    // }
	    );
	}

	// 信息认证芝麻认证
	function INFOAUTH_ZMAUTH(_ref6, payload) {
	    var commit = _ref6.commit,
	        state = _ref6.state,
	        rootState = _ref6.rootState;

	    Vue.TipHelper.showHub(0
	    // 初始化请求
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        identityNo: state.identityNo
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.INFOAUTH_ZMAUTH, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // commit('INFOAUTH_INIT', res.data)
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 银行卡认证初始化
	function BANKCARD_INIT(_ref7, payload) {
	    var commit = _ref7.commit,
	        state = _ref7.state,
	        rootState = _ref7.rootState;

	    // Vue.TipHelper.showHub(0)

	    // 初始化请求
	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.BANKCARD_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            commit('BANKCARD_INIT', res.data);
	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    }

	    // {
	    //     data =     {
	    //         customer =         {
	    //         agent = ios;
	    //     createdDate = 1497577322000;
	    //     creditApplyType = 1;
	    //     educationDegree = bk;
	    //     id = 1082678032;
	    //     identityExpires = 20260429;
	    //     identityNo = 21010619900606611X;
	    //     identityPerson = 1;
	    //     identityRecognizeAddress = "\U6c88\U9633\U5e02\U94c1\U897f\U533a\U5357\U6ed1\U7fd4\U8def58-3\U53f71-1-1";
	    //     identityRecognizeName = "\U91d1\U5b9d\U6cc9";
	    //     localRegistry = 0;
	    //     marryStatus = wh;
	    //     mobile = 18369160246;
	    //     mobileAuthDate = 1500465526000;
	    //     mobileAuthFlag = auth;
	    //     mobileAuthIdentity = 21010619900606611X;
	    //     mobileAuthStatus = 1;
	    //     mobileRepeatApply = 0;
	    //     mobileReportID = "jxl_45164";
	    //     openId = 18369160246;
	    //     realName = "\U91d1\U5b9d\U6cc9";
	    //     remindRepayment = 1;
	    //     status = 0102;
	    //     updatedDate = 1498652648000;
	    // };
	    //     repeatApply = false;
	    // };
	    //     msg = success;
	    //     status = 1;
	    // }
	    );
	}

	// 银行卡认证 - 提交
	function BANKCARD_SAVE(_ref8, payload) {
	    var commit = _ref8.commit,
	        state = _ref8.state,
	        rootState = _ref8.rootState;


	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: state.bankMobile.replace(/\s/g, ""), // 注意, 这里是银行预留电话
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        cardType: state.cardType,
	        cardNo: state.cardNo.replace(/\s/g, ""), // 如果去掉格式化,需要的话!!!
	        cardBank: state.cardBank,
	        bankCode: state.bankCode,
	        bankInfoId: '' // 后台自定义字段, 不需要处理, 必须传''
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.BANKCARD_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub

	        // --------------测试
	        ();if (rootState.debug) {
	            console.log('这里需要看一下回调结果, 进行判断~~~~~~~~~~~~:', res);
	            return;
	        }

	        if (res.status == 1) {

	            if (res.data.isCreditSwich == '0') {
	                endStep();
	            } else {
	                Vue.NaviHelper.push('pop');
	            }
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 反导流产品
	function RESULT_LOAD_PRODUCT_LIST(_ref9, payload) {
	    var commit = _ref9.commit,
	        state = _ref9.state,
	        rootState = _ref9.rootState;

	    var prama = {
	        "x-auth-token": rootState.token
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.RESULT_LOAD_PRODUCT_LIST, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // 存数据
	            payload.callback(res.data
	            // state.productList = res.data.productList
	            // 回调(可选)
	            // payload.callback(res.data.productList)
	            );
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _FaceMutations = __webpack_require__(16);

	var mutations = _interopRequireWildcard(_FaceMutations);

	var _FaceActions = __webpack_require__(17);

	var actions = _interopRequireWildcard(_FaceActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var face = {
	    actions: actions,
	    mutations: mutations,
	    state: {
	        // ----------- 拍照
	        address: '',
	        baiduSimilarity: '',
	        birthday: '',
	        description: '',
	        folk: '',
	        isIdentityExist: '',
	        issueAuthority: '',
	        minshiSimilarity: '',
	        name: '',
	        resultCode: '',
	        sex: '',

	        validPeriod: '',

	        base64Pic: ''
	    }
	};

	exports.default = face;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IDENTITY_RECOGNIZE = IDENTITY_RECOGNIZE;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 身份证信息
	function IDENTITY_RECOGNIZE(state, payload) {
	    console.log('IDENTITY_RECOGNIZE - payload: ', payload);

	    var data = payload;

	    // 特殊处理, 存主module
	    state.identityNo = data.cardNo == null ? '' : payload.cardNo;
	    state.identityExpires = data.validPeriod == null ? '' : payload.validPeriod;

	    for (var i in data) {
	        if (data.hasOwnProperty(i)) {
	            for (var key in state) {
	                if (data.hasOwnProperty(key)) {
	                    if (i === key) {
	                        state[key] = data[i] == null ? '' : data[i];
	                    }
	                }
	            }
	        }
	    }

	    console.log('IDENTITY_RECOGNIZE - store: ', state);
	}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IDENTITY_RECOGNIZE = IDENTITY_RECOGNIZE;
	exports.FACEPAIR_RECOGNICE = FACEPAIR_RECOGNICE;
	exports.IDENTITY_DOWNLOAD = IDENTITY_DOWNLOAD;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 身份证拍照 - 提交
	function IDENTITY_RECOGNIZE(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;


	    Vue.TipHelper.showHub(0

	    // @{
	    //     @"mobile": _manager.mobile,
	    //     @"customerId": _manager.customerId,
	    //     @"x-auth-token": _manager.token,
	    //     @"imgFile": base64ImageCode,
	    //     @"type":imageType,   //"front"  正面   "back"    背面   "facepair_0"  手持
	    //     @"platformType" : @"app"
	    // };

	    // 暂存
	    );state.base64Pic = payload.base64Pic;
	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        platformType: "app",
	        type: payload.type == 1 ? 'front' : 'back',
	        imgFile: payload.base64Pic // 需要传进来
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.IDENTITY_RECOGNIZE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            commit('IDENTITY_RECOGNIZE', res.data);
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 人脸识别, 上传照片
	function FACEPAIR_RECOGNICE(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;


	    Vue.TipHelper.showHub(0);

	    var prama = {
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        compareType: 'liveness',
	        originalType: 'front',
	        comparePicture: payload.base64Pic // 需要传进来
	    };

	    Vue.HttpHelper.post(Vue.UrlMacro.FACEPAIR_RECOGNICE, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        if (res.status == 1) {
	            // 暂存
	            // state.identity.base64Pic = res.data.facepairStr;
	            // commit('FACEPAIR_RECOGNICE', res.data)
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 下载照片
	function IDENTITY_DOWNLOAD(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;


	    // @{
	    //     @"imgType"         : cardType,
	    //     @"customerId"      : _manager.customerId,
	    //     @"x-auth-token"    : _manager.token
	    // }

	    // 暂存
	    // state.identity.base64Pic = payload.base64Pic;
	    var prama = {
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        imgType: payload.imageType
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.IDENTITY_DOWNLOAD, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _LinkManMutations = __webpack_require__(19);

	var mutations = _interopRequireWildcard(_LinkManMutations);

	var _LinkManActions = __webpack_require__(20);

	var actions = _interopRequireWildcard(_LinkManActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//添加联系人
	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var linkMan = {
	    actions: actions,
	    mutations: mutations,

	    state: {
	        // 添加联系人参数
	        link1Name: "", //联系人姓名
	        link1Phone: "", //联系人电话
	        link1Relation: "", //联系人关系
	        link2Name: "", //联系人姓名
	        link2Phone: "", //联系人电话
	        link2Relation: "" //联系人关系
	    }
	};

	exports.default = linkMan;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Created by x298017064010 on 17/7/26.
	 */
	"use strict";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LINKMAN_SAVE = LINKMAN_SAVE;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 添加联系人 - 提交
	function LINKMAN_SAVE(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        customerId: rootState.customerId,
	        "x-auth-token": rootState.token,
	        contactOneName: state.link1Name,
	        contactOneMobile: state.link1Phone.replace(/\s/g, ''),
	        contactOneRela: state.link1Relation,
	        contactTwoName: state.link2Name,
	        contactTwoMobile: state.link2Phone.replace(/\s/g, ''),
	        contactTwoRela: state.link2Relation,
	        activeFlag: payload.activeFlag //额度激活标记 1:钱包激活 2:佣金分期激活
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.LINKMAN_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _WithdrawMutations = __webpack_require__(22);

	var mutations = _interopRequireWildcard(_WithdrawMutations);

	var _WithdrawActions = __webpack_require__(23);

	var actions = _interopRequireWildcard(_WithdrawActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var withdraw = {
	    actions: actions,
	    mutations: mutations,
	    state: {
	        // 提现

	        realName: '', //姓名
	        identitycard: '', //身份证号
	        phone: '', //手机号
	        cutomerId: '', //客户Id
	        cardFlag: '', //绑卡状态 0：未绑卡 1：绑卡

	        withdrawMoney: '1000', //申请提现金额 默认1000
	        availableAmount: '', //可提现金额
	        paymentType: '', //分几期
	        formalitiesRate: '', //费率
	        loanType: '', //贷款类型（0：首贷；2：再贷；3：提现中但未放款；4：不符合取现条件）
	        agreementId: '', //服务协议id
	        scheduleAmount: '', //分期每期应还金额  分期每期应还金额取第二期
	        loanAmount: '', //放款金额
	        lockDate: '', //锁单天数
	        transStatus: '', //订单状态 判断提现状态  -1:管理平台拒绝根据（creditExpire）false：重新提现；true：重新获取额度。
	        creditExpire: '', //判断额度是否有效

	        cardBank: '', //银行名称
	        bankCode: '', //银行code
	        cardNo: '', //银行卡号

	        bindCardBank: '', //新绑定的银行名称
	        bindCardNo: '', //新绑定的银行卡号
	        bindbankCode: '' //新绑定的银行code
	    }
	};

	exports.default = withdraw;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	/**
	 * Created by x298017064010 on 17/7/26.
	 */
	"use strict";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.WITHDRAW_INIT = WITHDRAW_INIT;
	exports.TRIALREPAYMENTINFO_INIT = TRIALREPAYMENTINFO_INIT;
	exports.BINDBANK_INIT = BINDBANK_INIT;
	exports.BINDBANKLIST_INIT = BINDBANKLIST_INIT;
	exports.BINDBANK_SAVE = BINDBANK_SAVE;
	exports.TRIALREPAY_SHOW = TRIALREPAY_SHOW;
	exports.WITHDRAW_SAVE = WITHDRAW_SAVE;
	exports.WITHDRAWSTATE_INIT = WITHDRAWSTATE_INIT;
	exports.WITHDRAWSTATEINFO_INIT = WITHDRAWSTATEINFO_INIT;
	// ���ֳ�ʼ��
	function WITHDRAW_INIT(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.WITHDRAW_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg
	            // ����Ǯ����ҳ
	            );
	        }
	    });
	}
	// ���ֳ�ʼ��
	function TRIALREPAYMENTINFO_INIT(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "loanType": state.loanType,
	        "withdrawMoney": state.withdrawMoney,
	        "paymentType": state.paymentType
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.TRIALREPAYMENTINFO_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ����ҳ����ʼ������
	function BINDBANK_INIT(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;

	    Vue.TipHelper.showHub(0);
	    console.log('sssssssssssss' + payload.custom);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "customerId": payload.custom,
	        "signatureType": '2'
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.BINDBANK_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ����ҳ��--��ȡ�����б�
	function BINDBANKLIST_INIT(_ref4, payload) {
	    var commit = _ref4.commit,
	        state = _ref4.state,
	        rootState = _ref4.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "customerId": payload.cutomerId,
	        "dictCode": payload.dictCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.BINDBANKLIST_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ����ҳ��--����
	function BINDBANK_SAVE(_ref5, payload) {
	    var commit = _ref5.commit,
	        state = _ref5.state,
	        rootState = _ref5.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "payCardBank": state.bindCardBank,
	        "payCardNo": state.bindCardNo,
	        "payBankCode": state.bindbankCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.BINDBANK_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ���� �����������ޣ�չʾ��������
	function TRIALREPAY_SHOW(_ref6, payload) {
	    var commit = _ref6.commit,
	        state = _ref6.state,
	        rootState = _ref6.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "loanType": "0",
	        //"loanType":state.loanType,
	        "paymentType": state.paymentType,
	        "withdrawMoney": state.withdrawMoney
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.TRIALREPAY_SHOW, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ���� �������ֵ����ݱ���
	function WITHDRAW_SAVE(_ref7, payload) {
	    var commit = _ref7.commit,
	        state = _ref7.state,
	        rootState = _ref7.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "customerId": state.cutomerId,
	        "withdrawMoney": state.withdrawMoney,
	        "scheduleAmount": state.scheduleAmount,
	        "paymentType": state.paymentType,
	        //"agreementId":state.agreementId,
	        "loanType": '0'
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.WITHDRAW_SAVE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ���� ״̬1   ��ȡcustomerId
	function WITHDRAWSTATE_INIT(_ref8, payload) {
	    var commit = _ref8.commit,
	        state = _ref8.state,
	        rootState = _ref8.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "customerId": state.cutomerId
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.WITHDRAWSTATE_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// ���� ״̬2
	function WITHDRAWSTATEINFO_INIT(_ref9, payload) {
	    var commit = _ref9.commit,
	        state = _ref9.state,
	        rootState = _ref9.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile,
	        "sltAccountId": '' + state.sltAccountId
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.WITHDRAWSTATEINFO_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _CommissionMutations = __webpack_require__(25);

	var mutations = _interopRequireWildcard(_CommissionMutations);

	var _CommissionActions = __webpack_require__(26);

	var actions = _interopRequireWildcard(_CommissionActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//佣金分期
	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var commission = {
	    actions: actions,
	    mutations: mutations,

	    state: {
	        realName: '', // 客户姓名
	        identitycard: '', // 身份证号码
	        location: '', //请求的地区列表json
	        cityName: '上海', //选择的城市
	        cityCode: 'sh_shanghai', //选择的城市
	        username: '', //用户名
	        password: '', //密码
	        vercode: '', //验证码
	        token: '' //本次会话的令牌
	    }
	};

	exports.default = commission;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.COMMIS_CITY_INIT = COMMIS_CITY_INIT;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	//公积金 社保 省市信息
	function COMMIS_CITY_INIT(state, payload) {
	  state.location = payload;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.COMMISSION_INIT = COMMISSION_INIT;
	exports.LINKMAN_CREDIT_AUTH = LINKMAN_CREDIT_AUTH;
	exports.COMMISSION_JUDGE = COMMISSION_JUDGE;
	exports.PROVID_CITY_INIT = PROVID_CITY_INIT;
	exports.PROVID_INFO_INIT = PROVID_INFO_INIT;
	exports.SECURITY_INFO_INIT = SECURITY_INFO_INIT;
	exports.SECURITY_CITY_INIT = SECURITY_CITY_INIT;
	exports.PROVID_VERIFICODE = PROVID_VERIFICODE;
	exports.SECURITY_VERIFICODE = SECURITY_VERIFICODE;
	exports.PROVID_SUBMIT = PROVID_SUBMIT;
	exports.SECURITY_SUBMIT = SECURITY_SUBMIT;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 佣金分期初始化
	function COMMISSION_INIT(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg
	            // 返回钱包首页
	            );if (res.data.status == '0' && res.data.msg.indexOf('佣金信息初始化失败') >= 0) {
	                Vue.NaviHelper.push('root', {}, '', function (r) {});
	            }
	        }
	    });
	}

	function LINKMAN_CREDIT_AUTH(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "customerId": rootState.customerId
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.LINKMAN_CREDIT_AUTH, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	// 佣金分期 交单规则
	function COMMISSION_JUDGE(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "mobile": rootState.mobile
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_JUDGE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	//社保查询 公积金查询，是2个人写些的接口，返回的状态 是code 或者 status。乱
	// 公积金查询 获取城市信息
	function PROVID_CITY_INIT(_ref4, payload) {
	    var commit = _ref4.commit,
	        state = _ref4.state,
	        rootState = _ref4.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.PROVID_CITY_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == '0000') {
	            commit('COMMIS_CITY_INIT', res.data);
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 2	公积金表单设置查询 获取城市提交选项信息
	function PROVID_INFO_INIT(_ref5, payload) {
	    var commit = _ref5.commit,
	        state = _ref5.state,
	        rootState = _ref5.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "city": state.cityCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.PROVID_INFO_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == '0000') {
	            payload.callback(JSON.parse(res.data).FormSettings[0].FormParams);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 2	社保查询表单设置查询 获取城市提交选项信息
	function SECURITY_INFO_INIT(_ref6, payload) {
	    var commit = _ref6.commit,
	        state = _ref6.state,
	        rootState = _ref6.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "city": state.cityCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.SECURITY_INFO_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == '0000') {
	            payload.callback(JSON.parse(res.data).FormSettings[0].FormParams);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 社保查询 获取城市信息
	function SECURITY_CITY_INIT(_ref7, payload) {
	    var commit = _ref7.commit,
	        state = _ref7.state,
	        rootState = _ref7.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.SECURITY_CITY_INIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == '0000') {
	            commit('COMMIS_CITY_INIT', res.data);
	            payload.callback(res.data);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 公积金查询 获取验证码
	function PROVID_VERIFICODE(_ref8, payload) {
	    var commit = _ref8.commit,
	        state = _ref8.state,
	        rootState = _ref8.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "city": state.cityCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.PROVID_VERIFICODE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.code == '0000') {
	            payload.callback(res);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 社保查询 获取验证码
	function SECURITY_VERIFICODE(_ref9, payload) {
	    var commit = _ref9.commit,
	        state = _ref9.state,
	        rootState = _ref9.rootState;

	    Vue.TipHelper.showHub(0);
	    var prama = {
	        "x-auth-token": rootState.token,
	        "city": state.cityCode
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.SECURITY_VERIFICODE, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.code == '0000') {
	            payload.callback(res);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	// 公积金查询 提交
	function PROVID_SUBMIT(_ref10, payload) {
	    var commit = _ref10.commit,
	        state = _ref10.state,
	        rootState = _ref10.rootState;

	    var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	    eventModule.showPromotionQuota(0, "", function () {}); //打开load
	    var prama = {
	        "x-auth-token": rootState.token,
	        "token": state.token, //本次会话的令牌
	        "customerid": rootState.customerId, //客户号
	        "city": state.cityCode, //城市编码
	        "name": state.realName, //姓名
	        "bustype": "AJQH", //业务类型
	        "identitycard": state.identitycard, //身份证号码
	        "username": state.username, //公积金账号
	        "password": state.password, //密码
	        "vercode": state.vercode //验证码
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.PROVID_SUBMIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        setTimeout(function () {
	            if (res.code == '0000') {
	                payload.succ(res);
	            } else if (res.code == '2001' || res.code == '2009') {
	                payload.fail(res);
	            } else {
	                if (res.code == '2005' || res.code == '2006' || res.code == '2007' || res.code == '2008') {
	                    Vue.TipHelper.showHub('1', res.msg);
	                    payload.replay(res);
	                }
	                eventModule.closePromotionQuota(); //关闭load
	            }
	        }, 1000);
	    });
	}

	// 社保查询 提交
	function SECURITY_SUBMIT(_ref11, payload) {
	    var commit = _ref11.commit,
	        state = _ref11.state,
	        rootState = _ref11.rootState;

	    var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	    eventModule.showPromotionQuota(0, "", function () {}); //打开load
	    var prama = {
	        "x-auth-token": rootState.token,
	        "token": state.token, //本次会话的令牌
	        "customerid": rootState.customerId, //客户号
	        "city": state.cityCode, //城市编码
	        "name": state.realName, //姓名
	        "bustype": "AJQH", //业务类型
	        "identitycard": state.identitycard, //身份证号码
	        "username": state.username, //公积金账号
	        "password": state.password, //密码
	        "vercode": state.vercode //验证码
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.SECURITY_SUBMIT, prama, function (res) {
	        Vue.TipHelper.dismisHub();

	        setTimeout(function () {
	            if (res.code == '0000') {
	                payload.succ(res);
	            } else if (res.code == '2001' || res.code == '2009') {
	                payload.fail(res);
	            } else {
	                if (res.code == '2005' || res.code == '2006' || res.code == '2007' || res.code == '2008') {
	                    Vue.TipHelper.showHub('1', res.msg);
	                    payload.replay(res);
	                }
	                eventModule.closePromotionQuota(); //关闭load
	            }
	        }, 1000);
	    });
	}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _commissionApplyMutations = __webpack_require__(28);

	var mutations = _interopRequireWildcard(_commissionApplyMutations);

	var _commissionApplyActions = __webpack_require__(29);

	var actions = _interopRequireWildcard(_commissionApplyActions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Created by x298017064010 on 17/6/22.
	 */

	var commApply = {
	    mutations: mutations,
	    actions: actions,

	    state: {
	        isUpload: false, //是否上传服务协议
	        isUploadconfirm: false, //是否上传佣金确认书
	        houseHoldArea: '', //
	        area: [], //佣金分期地址
	        shanghaiArea: '', //上海具体区
	        isHedging: true, //是否拒绝29天，重新修改资料申请
	        isRefreshBtn: false, //是否显示刷新按钮
	        isPhoneReview: true, //电审是否通过
	        hedgingdays: '', //
	        comsAmt: '', //佣金金额
	        houseHoldProvince: '', //房屋物业省
	        houseHoldCity: '', //房屋物业市
	        houseHoldAddress: '', //房屋物业详细地址
	        mailAddress: '', //通讯地址
	        workAddress: '', //工作单位地址
	        workPhone: '', //单位电话
	        workName: '', //单位名称
	        amountAll: '', //分期总计金额
	        deductMoneyDate: '', //分期每月具体还款日期
	        eachPeriodTotalAmount: '', //分期每月预计还款金额
	        platformRecommendedFee: '', //平台借款手续费
	        isbankbing: '', //是否绑卡
	        totalAmount: '', //可分期佣金总金额
	        cardNoStr: '', //银行卡卡号后四位数
	        bankCode: '', //银行英文简称
	        cardBank: '', //银行名称
	        parampressImg: '', //银行水印图标
	        bankiconImg: '', //银行图标
	        message: '', //选择佣金分期的金额
	        cardNo: '', //银行卡卡号
	        stages: '', //分期的期数
	        auditStatus: '1', //佣金分期审核刷新，锁单的状态
	        lockDays: '', //锁单天数
	        riskLevel: '', //额度激活风险等级 0-低风险 1-高风险

	        availableAmount: '', // 额度
	        bindCardSource: '', // 是否可绑卡/换卡 (1: 不可, 2: 可以)
	        cardFlag: '', // 卡是否有效(0: 未绑卡, 3: 已失效, 其他: 正常)
	        formalitiesRate: '' // 手续费费率(0.02-0.05)
	    }

	};

	exports.default = commApply;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.COMMISSION_UPLOAD_PROTOCL = COMMISSION_UPLOAD_PROTOCL;
	exports.COMMISSION_INIT_COMMISSIONINFO = COMMISSION_INIT_COMMISSIONINFO;
	exports.COMMISSION_SELECT_ADDRESS = COMMISSION_SELECT_ADDRESS;
	exports.COMMISSION_REFRESH_COMSSION = COMMISSION_REFRESH_COMSSION;
	exports.COMMISSION_COMMCASH_INITDATA = COMMISSION_COMMCASH_INITDATA;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	// 身份认证初始化
	function COMMISSION_UPLOAD_PROTOCL(state, payload) {

	    if (payload == 'YJPROTOCOL') {
	        state.isUpload = true;
	    } else if (payload == 'YJCONFIRM') {
	        state.isUploadconfirm = true;
	    }
	}

	// 佣金分期地址选择
	function COMMISSION_INIT_COMMISSIONINFO(state, payload) {

	    if (payload.protocol == '0') {
	        state.isUpload = false;
	    } else {
	        state.isUpload = true;
	    }
	    if (payload.comsConfirm == '0') {
	        state.isUploadconfirm = false;
	    } else {
	        state.isUploadconfirm = true;
	    }

	    console.log('重新带入数据', payload);

	    state.comsAmt = payload.comsAmt == null ? '' : payload.comsAmt;
	    // state.houseHoldProvince = res.data.houseHoldProvince== null ? '' : res.data.houseHoldProvince;
	    state.shanghaiArea = payload.houseHoldCity == null ? '' : payload.houseHoldCity;
	    state.houseHoldAddress = payload.houseHoldAddress == null ? '' : payload.houseHoldAddress;
	    state.mailAddress = payload.mailAddress == null ? '' : payload.mailAddress;
	    state.workAddress = payload.workAddress == null ? '' : payload.workAddress;
	    state.workPhone = payload.workPhone == null ? '' : payload.workPhone;
	    state.workName = payload.workName == null ? '' : payload.workName;
	}

	// 佣金分期地址选择
	function COMMISSION_SELECT_ADDRESS(state, payload) {

	    state.area = payload;
	}
	// 佣金分期审核刷新(锁单天数)
	function COMMISSION_REFRESH_COMSSION(state, payload) {
	    // payload.auditStatus = '2'
	    state.auditStatus = String(payload.auditStatus);
	    state.lockDays = payload.lockDays == null ? '' : payload.lockDays;
	}

	function COMMISSION_COMMCASH_INITDATA(state, payload) {
	    state.availableAmount = payload.availableAmount;
	    state.cardNoStr = payload.cardNoStr;
	    state.bankCode = payload.bankCode == null ? '' : payload.bankCode.toLowerCase();
	    state.cardBank = payload.cardBank;
	    state.parampressImg = 'WXLocal/ic_bank_dark_' + state.bankCode;
	    state.bankiconImg = 'WXLocal/ic_bank_' + state.bankCode;
	    state.isbankbing = payload.cardFlag;
	    state.cardFlag = payload.cardFlag;
	    state.message = state.availableAmount;
	    state.platformRecommendedFee = state.message * 0.02;
	    state.cardNo = payload.cardNo;
	    state.formalitiesRate = payload.formalitiesRate;
	    state.bindCardSource = payload.bindCardSource;
	    if (payload.cardFlag == '1') {
	        state.isbankbing = true;
	    } else {
	        state.isbankbing = false;
	        state.parampressImg = '';
	        state.bankiconImg = 'WXLocal/wx_no_tied_card';
	    }
	}
	//支付平台推荐费插入流水

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.COMMISSION_UPLOAD_PROTOCL = COMMISSION_UPLOAD_PROTOCL;
	exports.COMMISSION_SELECT_ADDRESS = COMMISSION_SELECT_ADDRESS;
	exports.COMMISSION_SAVE_COMMISSIONINFO = COMMISSION_SAVE_COMMISSIONINFO;
	exports.COMMISSION_REFRESH_COMSSION = COMMISSION_REFRESH_COMSSION;
	exports.COMMISSION_COMMCASH_INITDATA = COMMISSION_COMMCASH_INITDATA;
	exports.COMMISSION_COMMCASH_TRIALREPAYMENTINFO = COMMISSION_COMMCASH_TRIALREPAYMENTINFO;
	exports.COMMISSION_COMMCASH_SAVESTREAM = COMMISSION_COMMCASH_SAVESTREAM;
	exports.COMMISSION_INIT_COMMISSIONINFO = COMMISSION_INIT_COMMISSIONINFO;
	exports.COMMISSION_COFIRM_MODIFY_COMSINFO = COMMISSION_COFIRM_MODIFY_COMSINFO;
	/**
	 * Created by x298017064010 on 17/7/26.
	 */

	//佣金分期上传居间协议
	function COMMISSION_UPLOAD_PROTOCL(_ref, payload) {
	    var commit = _ref.commit,
	        state = _ref.state,
	        rootState = _ref.rootState;

	    Vue.TipHelper.showHub(0

	    // // 初始化请求
	    );var prama = {
	        mobile: rootState.mobile,
	        imgFile: payload.imgFile,
	        "x-auth-token": rootState.token,
	        imageType: payload.imageType
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_UPLOAD_PROTOCL, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // 1.保存数据
	            commit('COMMISSION_UPLOAD_PROTOCL', payload.imageType

	            // payload.callback({resulet:res.status})


	            );
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	//佣金分期地址选择
	function COMMISSION_SELECT_ADDRESS(_ref2, payload) {
	    var commit = _ref2.commit,
	        state = _ref2.state,
	        rootState = _ref2.rootState;

	    Vue.TipHelper.showHub(0

	    // // 初始化请求
	    );var prama = {
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_SELECT_ADDRESS, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            commit('COMMISSION_SELECT_ADDRESS', res.data.houseHoldArea);
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//佣金分期审核数据保存
	function COMMISSION_SAVE_COMMISSIONINFO(_ref3, payload) {
	    var commit = _ref3.commit,
	        state = _ref3.state,
	        rootState = _ref3.rootState;

	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: rootState.mobile,
	        comsAmt: state.comsAmt,
	        houseHoldProvince: '上海市',
	        houseHoldCity: state.shanghaiArea,
	        houseHoldAddress: state.houseHoldAddress,
	        mailAddress: state.mailAddress,
	        workAddress: state.workAddress,
	        workPhone: state.workPhone,
	        workName: state.workName,
	        "x-auth-token": rootState.token
	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_SAVE_COMMISSIONINFO, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            payload.callback();
	        } else {
	            if (res.status == '0' && res.msg.indexOf('保存失败') >= 0) {
	                Vue.TipHelper.showHub('1', '佣金信息填写有误');
	                return;
	            }
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//佣金分期审核刷新
	function COMMISSION_REFRESH_COMSSION(_ref4, payload) {
	    var commit = _ref4.commit,
	        state = _ref4.state,
	        rootState = _ref4.rootState;

	    Vue.TipHelper.showHub(0

	    // console.log(rootState);
	    // console.log(state);
	    // // 初始化请求
	    // state.hedgingdays = '96';
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	        // commit('COMMISSION_REFRESH_COMSSION',99);
	    };Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_REFRESH_COMSSION, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {

	            // res.data.lockDays=8;


	            commit('COMMISSION_REFRESH_COMSSION', res.data);

	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//提现页面初始化数据
	function COMMISSION_COMMCASH_INITDATA(_ref5, payload) {
	    var commit = _ref5.commit,
	        state = _ref5.state,
	        rootState = _ref5.rootState;

	    Vue.TipHelper.showHub(0

	    // console.log(rootState);
	    // console.log(state);
	    // // 初始化请求
	    // state.hedgingdays = '96';
	    );var prama = {
	        // mobile:'18818210524',
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token

	    };
	    Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_COMMCASH_INITDATA, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {

	            commit('COMMISSION_COMMCASH_INITDATA', res.data);

	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//点击借款期限，展示分期详情
	function COMMISSION_COMMCASH_TRIALREPAYMENTINFO(_ref6, payload) {
	    var commit = _ref6.commit,
	        state = _ref6.state,
	        rootState = _ref6.rootState;

	    Vue.TipHelper.showHub(0

	    // console.log(rootState);
	    // console.log(state);
	    // // 初始化请求
	    // state.hedgingdays = '96';
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token,
	        withdrawMoney: state.message,
	        paymentType: payload.stages
	        // commit('COMMISSION_REFRESH_COMSSION',99);
	    };Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_COMMCASH_TRIALREPAYMENTINFO, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            state.amountAll = res.data.amountAll;
	            state.deductMoneyDate = res.data.deductMoneyDate;
	            state.eachPeriodTotalAmount = res.data.eachPeriodTotalAmount;
	            state.platformRecommendedFee = res.data.platformRecommendedFee;

	            // 1.保存数据
	            // commit('COMMISSION_SELECT_ADDRESS', true)

	            // payload.callback({resulet:res.status})
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//支付平台推荐费插入流水
	function COMMISSION_COMMCASH_SAVESTREAM(_ref7, payload) {
	    var commit = _ref7.commit,
	        state = _ref7.state,
	        rootState = _ref7.rootState;

	    Vue.TipHelper.showHub(0);

	    var prama = {
	        "x-auth-token": rootState.token,
	        customerId: rootState.customerId,
	        availableCommissions: state.availableAmount.toString(),
	        withdrawMoney: state.message.toString(),
	        paymentType: state.stages,
	        feeAmt: state.platformRecommendedFee.toString()
	        // commit('COMMISSION_REFRESH_COMSSION',99);
	    };Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_COMMCASH_SAVESTREAM, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        // 特殊处理, 防抖
	        rootState.isDidClick = false;

	        if (res.status == 1) {
	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}
	//佣金信息初始化
	function COMMISSION_INIT_COMMISSIONINFO(_ref8, payload) {
	    var commit = _ref8.commit,
	        state = _ref8.state,
	        rootState = _ref8.rootState;

	    Vue.TipHelper.showHub(0
	    // console.log(rootState);
	    // console.log(state);
	    // // 初始化请求
	    // state.hedgingdays = '96';
	    );var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	        // commit('COMMISSION_REFRESH_COMSSION',99);
	    };Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_INIT_COMMISSIONINFO, prama, function (res) {
	        console.log(res);
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // 没有初始数据
	            if (res.data == null) {
	                return;
	            } else {
	                commit('COMMISSION_INIT_COMMISSIONINFO', res.data);
	                payload.callback(res.data);
	            }
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

	//修改资料重新申请
	function COMMISSION_COFIRM_MODIFY_COMSINFO(_ref9, payload) {
	    var commit = _ref9.commit,
	        state = _ref9.state,
	        rootState = _ref9.rootState;

	    Vue.TipHelper.showHub(0);

	    var prama = {
	        mobile: rootState.mobile,
	        "x-auth-token": rootState.token
	        // commit('COMMISSION_REFRESH_COMSSION',99);
	    };Vue.HttpHelper.post(Vue.UrlMacro.COMMISSION_COFIRM_MODIFY_COMSINFO, prama, function (res) {
	        Vue.TipHelper.dismisHub();
	        if (res.status == 1) {
	            // 修改资料重新申请成功
	            payload.callback();
	        } else {
	            Vue.TipHelper.showHub('1', res.msg);
	        }
	    });
	}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _UrlMacro = __webpack_require__(31);

	var _UrlMacro2 = _interopRequireDefault(_UrlMacro);

	var _HttpHelper = __webpack_require__(32);

	var _HttpHelper2 = _interopRequireDefault(_HttpHelper);

	var _NaviHelper = __webpack_require__(33);

	var _NaviHelper2 = _interopRequireDefault(_NaviHelper);

	var _LogHelper = __webpack_require__(34);

	var _LogHelper2 = _interopRequireDefault(_LogHelper);

	var _StorageHelper = __webpack_require__(35);

	var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

	var _TipHelper = __webpack_require__(36);

	var _TipHelper2 = _interopRequireDefault(_TipHelper);

	var _CheckHelper = __webpack_require__(37);

	var _CheckHelper2 = _interopRequireDefault(_CheckHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Plugin = {
	    install: function install(Vue) {

	        // 1. 添加全局方法或属性(方法大写, 属性用下划线连接)
	        Vue.UrlMacro = _UrlMacro2.default;

	        Vue.HttpHelper = _HttpHelper2.default;

	        Vue.LogHelper = _LogHelper2.default;

	        Vue.NaviHelper = _NaviHelper2.default;

	        Vue.StorageHelper = _StorageHelper2.default;

	        Vue.TipHelper = _TipHelper2.default;

	        Vue.CheckHelper = _CheckHelper2.default;

	        // 2. 添加全局资源
	        Vue.directive('my-directive', {
	            // bind (el, binding, vnode, oldVnode) {
	            //     // 逻辑...
	            // }
	        }

	        // 2. 自定义过滤器
	        );Vue.filter('thousandSeparator', function (num) {
	            // 千分位处理
	            num = String(Number(num).toFixed(2));
	            var re = /(-?\d+)(\d{3})/;
	            while (re.test(num)) {
	                num = num.replace(re, "$1,$2");
	            }
	            return num;
	        });

	        Vue.filter('emojiFomat', function (str) {// 表情符号处理
	            // return str.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
	        });

	        Vue.filter('realNameFormat', function (e) {
	            // 姓名格式化
	            if (e.length == 2) {
	                return '*' + e.substr(1, 2);
	            } else if (e.length >= 3) {
	                var stars = '';
	                for (var i = 1; i <= e.length - 2; i++) {
	                    stars = stars + '*';
	                }
	                return e.substr(0, 1) + stars + e.substr(e.length - 1, e.length);
	            } else {
	                return e;
	            }
	        });

	        Vue.filter('identityFormat', function (e) {
	            // 身份证格式化
	            if (e == '') {
	                return e;
	            }
	            return e.substr(0, 6) + '********' + e.substr(14, 4);
	        });

	        Vue.filter('cardNoFormat', function (e) {
	            // 银行卡号格式化
	            if (e == '') {
	                return e;
	            }
	            return e.replace(/[\s]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
	        });

	        Vue.filter('mobileFormat', function (e) {
	            // 手机号格式化 123 2345 6789
	            if (e == '') {
	                return e;
	            }
	            var value = e.replace(/\D/g, '').substring(0, 11);
	            var valueLen = value.length;
	            if (valueLen > 3 && valueLen < 8) {
	                value = value.substr(0, 3) + ' ' + value.substr(3);
	            } else if (valueLen >= 8) {
	                value = value.substr(0, 3) + ' ' + value.substr(3, 4) + ' ' + value.substr(7);
	            }
	            return value;
	        });

	        Vue.filter('mobileFormatText', function (e) {
	            // 手机号格式化: 123****6789
	            if (e == '') {
	                return e;
	            }
	            return e.substr(0, 3) + '****' + e.substr(7, 11);
	        }

	        // 3. 注入组件
	        );Vue.mixin({
	            // created: function () {
	            //     // 逻辑...
	            // }
	        }

	        // 4. 添加实例方法
	        );Vue.prototype.$myMethod = function (options) {
	            // 逻辑...
	            console.log('myMethod');
	        };
	    }
	}; /**
	    * Created by x298017064010 on 17/6/21.
	    */
	exports.default = Plugin;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PRD = _index2.default.state.prd; /**
	                                      * Created by x298017064010 on 17/6/22.
	                                      */


	var BASE_URL = '';
	if (PRD) {
	  BASE_URL = 'http://ajqh.app.apass.cn/appweb/data/ws/rest'; // PRD
	} else {
	  BASE_URL = 'http://gfbapp.vcash.cn/appweb/data/ws/rest'; // SIT & UAT
	}

	var BASE_WEEX = 'http://espapp.sit.apass.cn/appweb/v1/app_weex'; // 下载链接
	var H5_BASE_URL = "http://gfbapp.vcash.cn/"; // 网页链接

	var HOME_CHECKVERSION = "/checkVersion/app";
	var HOME_PAGE = "/home/index";

	/**
	 *  信贷
	 */
	var IDENTITY_INIT = "/customer/initIdentityInfo";
	var IDENTITY_SAVE = "/customer/saveBasicInfo";

	var INFOAUTH_INIT = "/customer/initInformationAuth";
	var INFOAUTH_SAVE = "/customer/saveInformationAuth";
	var INFOAUTH_ZMAUTH = "/zm/auth/query";

	var BANKCARD_INIT = "/customer/initInformationBank";
	var BANKCARD_SAVE = "/customer/saveInformationBank";

	/**
	 *  人脸识别
	 */
	var IDENTITY_RECOGNIZE = "/identity/recognize";
	var FACEPAIR_RECOGNICE = "/identity/facepairRecognice";
	var IDENTITY_DOWNLOAD = "/customer/download";

	/**
	 *  反导流
	 */
	var RESULT_LOAD_PRODUCT_LIST = '/reverse/loadProductList';

	/**
	 *  手机认证
	 */
	var PHONE_INITIALIZE = "/juxinli/mobile/init"; // 初始化数据
	var PHONE_SUBMITINFORMATION = "/juxinli/mobile/req/collect"; // 提交信息
	var PHONE_COMPARINGINFORMATION = "/juxinli/mobile/resp/collect"; // 比对信息

	/**
	 *  激活联系人
	 */
	var LINKMAN_SAVE = "/customer/saveContactInfo";
	var LINKMAN_CREDIT_AUTH = "/customer/creditAuthActiveApply";

	/**
	 *  佣金分期
	 */
	var COMMISSION_INIT = "/commission/initData";
	var COMMISSION_JUDGE = "/commission/judgeSubmit";
	var PROVID_CITY_INIT = "/accfund/fetchCitiesList";
	var PROVID_INFO_INIT = "/accfund/formSetting";
	var PROVID_VERIFICODE = "/accfund/loginInit";
	var SECURITY_VERIFICODE = "/sccFundSys/advanceToken";
	var PROVID_SUBMIT = "/accfund/loginAuth";
	var SECURITY_INFO_INIT = "/sccFundSys/advanceFormSettingByCity";
	var SECURITY_SUBMIT = "/sccFundSys/login";
	var SECURITY_CITY_INIT = "/sccFundSys/advanceFormSettingCites";

	var COMMISSION_UPLOAD_PROTOCL = "/commission/uploadProtocl";
	var COMMISSION_SELECT_ADDRESS = "/commission/selectAddress";
	var COMMISSION_SAVE_COMMISSIONINFO = "/commission/saveCommissionInfo";
	var COMMISSION_REFRESH_COMSSION = "/commission/refreshComssion";
	var COMMISSION_COMMCASH_INITDATA = "/commcash/initData";
	var COMMISSION_COMMCASH_TRIALREPAYMENTINFO = "/commcash/newTrialRepaymentInfo";
	var COMMISSION_COMMCASH_SAVESTREAM = "/commcash/saveStream";
	var COMMISSION_INIT_COMMISSIONINFO = "/commission/initCommissionInfo";
	var COMMISSION_COFIRM_MODIFY_COMSINFO = "/commission/cofirmModifyComsInfo";

	/**
	 *  提现
	 */
	var WITHDRAW_INIT = "/cash/initData";
	var TRIALREPAYMENTINFO_INIT = "/cash/trialRepaymentInfo";
	var TRIALREPAY_SHOW = "/cash/newTrialRepaymentInfo";
	var WITHDRAW_SAVE = "/cash/buildLoan";
	var WITHDRAWSTATE_INIT = "/customer/validate/creditAuth";
	var WITHDRAWSTATEINFO_INIT = "/myCenter/search/singleWithDrawInfo";

	/**
	 *  绑卡
	 */
	var BINDBANK_INIT = "/card/initData";
	var BINDBANKLIST_INIT = "/card/bankList";
	var BINDBANK_SAVE = "/card/bindCard";

	exports.default = {
	  H5_BASE_URL: H5_BASE_URL,
	  BASE_URL: BASE_URL, // 服务器ip
	  BASE_WEEX: BASE_WEEX, // weex下载链接 (不需要使用)

	  HOME_CHECKVERSION: HOME_CHECKVERSION, // 强制升级check (不需要使用)
	  HOME_PAGE: HOME_PAGE, // 首页数据

	  IDENTITY_INIT: IDENTITY_INIT, // 初始化身份认证基本数据
	  IDENTITY_SAVE: IDENTITY_SAVE, // 身份认证 - 信息提交(七个信息)

	  INFOAUTH_INIT: INFOAUTH_INIT, // 信息认证初始化
	  INFOAUTH_SAVE: INFOAUTH_SAVE, // 信息认证完成提交
	  INFOAUTH_ZMAUTH: INFOAUTH_ZMAUTH, // 芝麻认证

	  BANKCARD_INIT: BANKCARD_INIT, // 银行卡认证初始化
	  BANKCARD_SAVE: BANKCARD_SAVE, // 银行卡认证完成提交

	  RESULT_LOAD_PRODUCT_LIST: RESULT_LOAD_PRODUCT_LIST, // 反导流

	  LINKMAN_CREDIT_AUTH: LINKMAN_CREDIT_AUTH, // 低风险用户激活授权
	  LINKMAN_SAVE: LINKMAN_SAVE, // 添加联系人保存


	  PROVID_CITY_INIT: PROVID_CITY_INIT, // 公积金查询 城市初始化
	  PROVID_INFO_INIT: PROVID_INFO_INIT, // 公积金查询 获取城市提交选项信息
	  PROVID_VERIFICODE: PROVID_VERIFICODE, // 公积金查询 验证码初始化
	  PROVID_SUBMIT: PROVID_SUBMIT, // 公积金查询 提交
	  SECURITY_CITY_INIT: SECURITY_CITY_INIT, // 社保查询 城市初始化
	  SECURITY_INFO_INIT: SECURITY_INFO_INIT, // 社保查询 获取城市提交选项信息
	  SECURITY_VERIFICODE: SECURITY_VERIFICODE, // 社保查询 提交
	  SECURITY_SUBMIT: SECURITY_SUBMIT, // 社保查询 验证码初始化
	  COMMISSION_JUDGE: COMMISSION_JUDGE, //佣金分期交单规则接口调用
	  COMMISSION_INIT: COMMISSION_INIT, // 佣金分期初始化


	  IDENTITY_RECOGNIZE: IDENTITY_RECOGNIZE, // 上传身份证正反面
	  FACEPAIR_RECOGNICE: FACEPAIR_RECOGNICE, // 上传人脸识别照片
	  IDENTITY_DOWNLOAD: IDENTITY_DOWNLOAD, // 下载之前上传过的照片

	  COMMISSION_UPLOAD_PROTOCL: COMMISSION_UPLOAD_PROTOCL, //佣金分期上传居间协议
	  COMMISSION_SELECT_ADDRESS: COMMISSION_SELECT_ADDRESS, //佣金分期地址选择
	  COMMISSION_SAVE_COMMISSIONINFO: COMMISSION_SAVE_COMMISSIONINFO, //佣金分期审核数据保存
	  COMMISSION_REFRESH_COMSSION: COMMISSION_REFRESH_COMSSION, //佣金分期审核刷新
	  COMMISSION_COMMCASH_INITDATA: COMMISSION_COMMCASH_INITDATA, //提现页面初始化数据
	  COMMISSION_COMMCASH_TRIALREPAYMENTINFO: COMMISSION_COMMCASH_TRIALREPAYMENTINFO, //点击借款期限，展示分期详情
	  COMMISSION_COMMCASH_SAVESTREAM: COMMISSION_COMMCASH_SAVESTREAM, //支付平台推荐费插入流水
	  COMMISSION_INIT_COMMISSIONINFO: COMMISSION_INIT_COMMISSIONINFO, //佣金信息初始化
	  COMMISSION_COFIRM_MODIFY_COMSINFO: COMMISSION_COFIRM_MODIFY_COMSINFO, // 用户点击重新修改资料

	  WITHDRAW_INIT: WITHDRAW_INIT, //提现初始化
	  TRIALREPAYMENTINFO_INIT: TRIALREPAYMENTINFO_INIT, //点击借款期限，展示分期详情
	  TRIALREPAY_SHOW: TRIALREPAY_SHOW, // 点击借款期限，展示分期详情
	  WITHDRAW_SAVE: WITHDRAW_SAVE, // 申请提现的数据保存
	  WITHDRAWSTATE_INIT: WITHDRAWSTATE_INIT, // 提现 状态1
	  WITHDRAWSTATEINFO_INIT: WITHDRAWSTATEINFO_INIT, // 提现 状态2

	  BINDBANK_INIT: BINDBANK_INIT, // 绑卡页面初始化数据
	  BINDBANKLIST_INIT: BINDBANKLIST_INIT, // 绑卡页面绑卡列表
	  BINDBANK_SAVE: BINDBANK_SAVE, // 绑卡页面--绑卡

	  PHONE_INITIALIZE: PHONE_INITIALIZE,
	  PHONE_SUBMITINFORMATION: PHONE_SUBMITINFORMATION,
	  PHONE_COMPARINGINFORMATION: PHONE_COMPARINGINFORMATION
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Created by x298017064010 on 17/6/21.
	                                                                                                                                                                                                                                                                               */


	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var stream = weex.requireModule('stream');
	var eventModule = weex.requireModule('event');

	var httpHelper = {
	    // GET 请求不支持 body 方式传递参数，请使用 url 传参。
	    get: function get(repo, callback) {

	        return stream.fetch({
	            method: 'GET',
	            type: 'json',
	            timeout: 50000,
	            url: Vue.UrlMacro.BASE_WEEX + repo
	        }, function (res) {

	            console.log('~~~~~~~~~~~ get: ' + repo + ' ~~~~~~~~~~', '\n出参: ', res);
	            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

	            callback(res);
	        }, function (progress) {});
	    },

	    // body 参数仅支持 string 类型的参数，请勿直接传递 JSON
	    post: function post(repo, body, callback, isReload) {

	        var jsonStr = ''; // 加密前
	        var dataStr = ''; // 加密后
	        if ((typeof body === 'undefined' ? 'undefined' : _typeof(body)) !== String) {
	            jsonStr = JSON.stringify(body);
	        } else {
	            jsonStr = body;
	        }
	        eventModule.wxEncryptJsonStr(jsonStr, function (r) {
	            dataStr = r.result;

	            return stream.fetch({
	                method: 'POST',
	                type: 'json',
	                timeout: 50000,
	                headers: { 'Content-Type': 'application/json' },
	                // , 'Charset':'UTF-8', 'Accept-Encoding':'gzip,deflate', 'Accept-Language':'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3'
	                url: Vue.UrlMacro.BASE_URL + repo,
	                body: { data: dataStr }
	            }, function (res) {
	                console.log('~~~~~~~~~~~ post: ' + repo + ' ~~~~~~~~~~', '\n入参: ', body, '\n出参: ', res);
	                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

	                if (res.status === 200 && res.ok === true) {

	                    if (isReload) {
	                        // 取消断网页面
	                        Vue.NaviHelper.backNetErr();
	                    } else {
	                        if (res.data.status == '-1' && res.data.msg.indexOf('请重新登录') >= 0) {
	                            // 弹出登录页
	                            Vue.NaviHelper.push('native/main/login', {}, '', function (r) {});
	                            if (_index2.default.state.os == 'iOS') {
	                                Vue.NaviHelper.push('root', {}, '', function (r) {});
	                            }
	                            return;
	                        }
	                        callback(res.data);
	                    }
	                } else {
	                    // 请求失败
	                    Vue.TipHelper.dismisHub
	                    // 展示断网页面
	                    ();Vue.NaviHelper.renderNetErr({ repo: repo, body: body, callback: callback });
	                }
	            }, function (progress) {});
	        });
	    }
	};

	exports.default = httpHelper;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var eventModule = weex.requireModule('event'); /**
	                                                * Created by x298017064010 on 17/6/21.
	                                                */

	var navigator = weex.requireModule('navigator');
	var globalEvent = weex.requireModule('globalEvent');

	var naviHelper = {

	    // channel: 标记用于回调的路径
	    push: function push(url, object, channel, callback) {

	        globalEvent.addEventListener(channel, function (r) {
	            globalEvent.removeEventListener(channel
	            // if (typeof r === String) {
	            //     r = JSON.parse(r);
	            // }
	            );callback(r);
	        });
	        eventModule.openURL({
	            url: url,
	            data: object,
	            animated: 'true'
	        });

	        // 目前不可用
	        // 定义每一个子页面的回调channel
	        // const bankListChannel = new BroadcastChannel(channel);
	        // bankListChannel.onmessage = function (event) {
	        //     // bankListChannel.onmessage = null;
	        //     console.log('111111111111111')
	        //
	        //     // 取值
	        //     callback(event)
	        //     Vue.NaviHelper.pop()
	        // }

	        // var bankListChannel = new BroadcastChannel('bankList');
	        // bankListChannel.postMessage(v);
	    },

	    pop: function pop(callback) {
	        navigator.push({
	            url: 'pop',
	            animated: 'true'
	        }, callback);
	    },

	    popRoot: function popRoot(callback) {
	        navigator.push({
	            url: 'root',
	            animated: 'true'
	        }, callback);
	    },

	    render: function render(url, title) {
	        console.log('render ' + url + ' success');
	        _index2.default.state.router.push(url);
	        eventModule.wxSetNavTitle(title, true);
	    },

	    back: function back(title) {
	        _index2.default.state.router.go(-1);
	        eventModule.wxSetNavTitle(title, true);
	    },

	    renderNetErr: function renderNetErr(param) {
	        _index2.default.state.errNetParam = param;
	        _index2.default.state.router.push('errorNetPage');
	    },

	    backNetErr: function backNetErr() {
	        _index2.default.state.router.go(-1);
	    }
	};

	exports.default = naviHelper;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = LogHelper;
	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	function LogHelper(msg) {
	    console.log('To Native: ', msg);
	    eventModule.wxNativeLog(msg, function (e) {});
	}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by x298017064010 on 17/6/22.
	 */
	var storage = weex.requireModule('storage');

	var storageHelper = {

	    setItem: function setItem(key, val) {
	        storage.setItem(key, val);
	    },

	    getItem: function getItem(key, callback) {
	        storage.getItem(key, function (e) {
	            callback(e.data);
	        });
	    },

	    getAllKeys: function getAllKeys() {
	        storage.getAllKeys(function (e) {
	            console.log('~~~~~~~~~~~~~~~ Storage: ~~~~~~~~~~~~~~~~~~~~');
	            console.log(e.data);
	        });
	    }
	};

	exports.default = storageHelper;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	var modal = weex.requireModule('modal');

	var TipHelper = {

	    showHub: function showHub(type, msg) {
	        // type(-1: 网络失败, 0: 加载中, 1: 文本提示)
	        eventModule.wxShowLoadingView(type, msg);
	    },

	    dismisHub: function dismisHub() {
	        eventModule.wxDismissLoadingView();
	    },

	    showAlert: function showAlert(title, msg, cancel, ok, callback, cancelOnTouch) {
	        eventModule.wxShowAlertView(title, msg, cancel, ok, callback, cancelOnTouch);
	    }
	};

	exports.default = TipHelper;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var checkHelper = {
	    // 按键防抖(废弃)
	    checkDidClick: function checkDidClick() {
	        if (_index2.default.state.isDidClick) {
	            //已经按下
	            return true;
	        } else {
	            //第一次按下
	            _index2.default.state.isDidClick = true;
	            return false;
	        }
	    },
	    // 校验姓名(仅汉字和字母)
	    checkRealName: function checkRealName(realName) {
	        var isRealNamePass = true;
	        if (!/^[\u4E00-\u9FA5]{2,4}$/.test(realName)) {
	            isRealNamePass = false;
	        }
	        return isRealNamePass;
	    },
	    // 校验电话号
	    checkMobileNo: function checkMobileNo(mobileNo) {
	        var isBankMobilePass = true;
	        if (isNaN(mobileNo) || mobileNo.substr(0, 1) != '1' || mobileNo.length != 11) {
	            isBankMobilePass = false;
	        }
	        return isBankMobilePass;
	    },
	    // 校验银行卡号
	    checkCardNo: function checkCardNo(cardNo, isCreditCard) {
	        var isCardNoPass = true;
	        if (isNaN(cardNo) || cardNo.length != (isCreditCard == true ? 16 : 19)) {
	            isCardNoPass = false;
	        }
	        return isCardNoPass;
	    }
	}; /**
	    * Created by x298017064010 on 17/9/5.
	    */
	exports.default = checkHelper;

/***/ }),
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.5.3
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (process.env.NODE_ENV !== 'production' && !condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (_, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    // directly use parent context's createElement() function
	    // so that components rendered by router-view can resolve named slots
	    var h = parent.$createElement;
	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // attach instance registration hook
	    // this will be called in the instance's injected lifecycle hooks
	    data.registerRouteInstance = function (vm, val) {
	      // val could be undefined for unregistration
	      var current = matched.instances[name];
	      if (
	        (val && current !== vm) ||
	        (!val && current === vm)
	      ) {
	        matched.instances[name] = val;
	      }
	    }

	    // also regiseter instance in prepatch hook
	    // in case the same component instance is reused across different routes
	    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
	      matched.instances[name] = vnode.componentInstance;
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false,
	          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
	          "expecting an object, function or boolean."
	        );
	      }
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more conformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery,
	  _parseQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  var parse = _parseQuery || parseQuery;
	  var parsedQuery;
	  try {
	    parsedQuery = parse(query || '');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn(false, e.message);
	    parsedQuery = {};
	  }
	  for (var key in extraQuery) {
	    var val = extraQuery[key];
	    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
	  }
	  return parsedQuery
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */


	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom,
	  router
	) {
	  var stringifyQuery$$1 = router && router.options.stringifyQuery;
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location, stringifyQuery$$1),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (
	  ref,
	  _stringifyQuery
	) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  var stringify = _stringifyQuery || stringifyQuery;
	  return (path || '/') + stringify(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    exactActiveClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;

	    var classes = {};
	    var globalActiveClass = router.options.linkActiveClass;
	    var globalExactActiveClass = router.options.linkExactActiveClass;
	    // Support global empty active class
	    var activeClassFallback = globalActiveClass == null
	            ? 'router-link-active'
	            : globalActiveClass;
	    var exactActiveClassFallback = globalExactActiveClass == null
	            ? 'router-link-exact-active'
	            : globalExactActiveClass;
	    var activeClass = this.activeClass == null
	            ? activeClassFallback
	            : this.activeClass;
	    var exactActiveClass = this.exactActiveClass == null
	            ? exactActiveClassFallback
	            : this.exactActiveClass;
	    var compareTarget = location.path
	      ? createRoute(null, location, null, router)
	      : route;

	    classes[exactActiveClass] = isSameRoute(current, compareTarget);
	    classes[activeClass] = this.exact
	      ? classes[exactActiveClass]
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.currentTarget && e.currentTarget.getAttribute) {
	    var target = e.currentTarget.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });

	  var isDef = function (v) { return v !== undefined; };

	  var registerInstance = function (vm, callVal) {
	    var i = vm.$options._parentVnode;
	    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
	      i(vm, callVal);
	    }
	  };

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (isDef(this.$options.router)) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	      registerInstance(this, this);
	    },
	    destroyed: function destroyed () {
	      registerInstance(this);
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  var firstChar = relative.charAt(0);
	  if (firstChar === '/') {
	    return relative
	  }

	  if (firstChar === '?' || firstChar === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '..') {
	      stack.pop();
	    } else if (segment !== '.') {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (index$1(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!index$1(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!index$1(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (index$1(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathList,
	  oldPathMap,
	  oldNameMap
	) {
	  // the path list is used to control path matching priority
	  var pathList = oldPathList || [];
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathList, pathMap, nameMap, route);
	  });

	  // ensure wildcard routes are always at the end
	  for (var i = 0, l = pathList.length; i < l; i++) {
	    if (pathList[i] === '*') {
	      pathList.push(pathList.splice(i, 1)[0]);
	      l--;
	      i--;
	    }
	  }

	  return {
	    pathList: pathList,
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathList,
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var normalizedPath = normalizePath(path, parent);
	  var record = {
	    path: normalizedPath,
	    regex: compileRouteRegex(normalizedPath),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathList.push(record.path);
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function compileRouteRegex (path) {
	  var regex = index(path);
	  if (process.env.NODE_ENV !== 'production') {
	    var keys = {};
	    regex.keys.forEach(function (key) {
	      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
	      keys[key.name] = true;
	    });
	  }
	  return regex
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	/*  */


	function normalizeLocation (
	  raw,
	  current,
	  append,
	  router
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : basePath;

	  var query = resolveQuery(
	    parsedPath.query,
	    next.query,
	    router && router.options.parseQuery
	  );

	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */


	function createMatcher (
	  routes,
	  router
	) {
	  var ref = createRouteMap(routes);
	  var pathList = ref.pathList;
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathList, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute, false, router);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = record.regex.keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var i = 0; i < pathList.length; i++) {
	        var path = pathList[i];
	        var record$1 = pathMap[path];
	        if (matchRoute(record$1.regex, location.path, location.params)) {
	          return _createRoute(record$1, location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location, null, router))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(
	          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	        );
	      }
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      }
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom, router)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  regex,
	  path,
	  params
	) {
	  var m = path.match(regex);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = regex.keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) {
	      params[key.name] = val;
	    }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    saveScrollPosition();
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el) {
	  var docEl = document.documentElement;
	  var docRect = docEl.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  saveScrollPosition();
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */

	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	  this.readyErrorCbs = [];
	  this.errorCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb, errorCb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	    if (errorCb) {
	      this.readyErrorCbs.push(errorCb);
	    }
	  }
	};

	History.prototype.onError = function onError (errorCb) {
	  this.errorCbs.push(errorCb);
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) { cb(route); });
	    }
	  }, function (err) {
	    if (onAbort) {
	      onAbort(err);
	    }
	    if (err && !this$1.ready) {
	      this$1.ready = true;
	      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
	    }
	  });
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function (err) {
	    if (isError(err)) {
	      if (this$1.errorCbs.length) {
	        this$1.errorCbs.forEach(function (cb) { cb(err); });
	      } else {
	        warn(false, 'uncaught error during route navigation:');
	        console.error(err);
	      }
	    }
	    onAbort && onAbort(err);
	  };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    try {
	      hook(route, current, function (to) {
	        if (to === false || isError(to)) {
	          // next(false) -> abort navigation, ensure current URL
	          this$1.ensureURL(true);
	          abort(to);
	        } else if (
	          typeof to === 'string' ||
	          (typeof to === 'object' && (
	            typeof to.path === 'string' ||
	            typeof to.name === 'string'
	          ))
	        ) {
	          // next('/') or next({ path: '/' }) -> redirect
	          abort();
	          if (typeof to === 'object' && to.replace) {
	            this$1.replace(to);
	          } else {
	            this$1.push(to);
	          }
	        } else {
	          // confirm transition and pass on the value
	          next(to);
	        }
	      });
	    } catch (e) {
	      abort(e);
	    }
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    var queue = enterGuards.concat(this$1.router.resolveHooks);
	    runQueue(queue, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = (baseEl && baseEl.getAttribute('href')) || '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  if (instance) {
	    return function boundRouteGuard () {
	      return guard.apply(instance, arguments)
	    }
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents (matched) {
	  return function (to, from, next) {
	    var hasAsync = false;
	    var pending = 0;
	    var error = null;

	    flatMapComponents(matched, function (def, _, match, key) {
	      // if it's a function and doesn't have cid attached,
	      // assume it's an async component resolve function.
	      // we are not using Vue's default async resolving mechanism because
	      // we want to halt the navigation until the incoming component has been
	      // resolved.
	      if (typeof def === 'function' && def.cid === undefined) {
	        hasAsync = true;
	        pending++;

	        var resolve = once(function (resolvedDef) {
	          // save resolved on async factory in case it's used elsewhere
	          def.resolved = typeof resolvedDef === 'function'
	            ? resolvedDef
	            : _Vue.extend(resolvedDef);
	          match.components[key] = resolvedDef;
	          pending--;
	          if (pending <= 0) {
	            next();
	          }
	        });

	        var reject = once(function (reason) {
	          var msg = "Failed to resolve async component " + key + ": " + reason;
	          process.env.NODE_ENV !== 'production' && warn(false, msg);
	          if (!error) {
	            error = isError(reason)
	              ? reason
	              : new Error(msg);
	            next(error);
	          }
	        });

	        var res;
	        try {
	          res = def(resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        if (res) {
	          if (typeof res.then === 'function') {
	            res.then(resolve, reject);
	          } else {
	            // new syntax in Vue 2.3
	            var comp = res.component;
	            if (comp && typeof comp.then === 'function') {
	              comp.then(resolve, reject);
	            }
	          }
	        }
	      }
	    });

	    if (!hasAsync) { next(); }
	  }
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}

	function isError (err) {
	  return Object.prototype.toString.call(err).indexOf('Error') > -1
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    var ref = this;
	    var fromRoute = ref.current;
	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, fromRoute, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.resolveHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || [], this);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  return registerHook(this.beforeHooks, fn)
	};

	VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
	  return registerHook(this.resolveHooks, fn)
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  return registerHook(this.afterHooks, fn)
	};

	VueRouter.prototype.onReady = function onReady (cb, errorCb) {
	  this.history.onReady(cb, errorCb);
	};

	VueRouter.prototype.onError = function onError (errorCb) {
	  this.history.onError(errorCb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? to.matched
	      ? to
	      : this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(
	    to,
	    current || this.history.current,
	    append,
	    this
	  );
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function registerHook (list, fn) {
	  list.push(fn);
	  return function () {
	    var i = list.indexOf(fn);
	    if (i > -1) { list.splice(i, 1); }
	  }
	}

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.5.3';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(46)
	)

	/* script */
	__vue_exports__ = __webpack_require__(47)

	/* template */
	var __vue_template__ = __webpack_require__(52)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/views/errorNetPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1ea32791"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "image": {
	    "paddingBottom": 80
	  },
	  "text": {
	    "paddingBottom": 80,
	    "width": 750,
	    "height": 40,
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#7E7E7E",
	    "textAlign": "center"
	  },
	  "btn": {
	    "width": 320,
	    "height": 80,
	    "borderStyle": "solid",
	    "borderColor": "#c2c2c2",
	    "borderRadius": 10,
	    "borderWidth": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "btn-text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#000000",
	    "textAlign": "center"
	  }
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var globalEvent = weex.requireModule('globalEvent'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event');

	exports.default = {
	    props: {
	        // 监听cell点击事件
	        onClick: {
	            type: Function
	        }
	    },
	    components: { ccImage: _ccImage2.default },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        onClick: function onClick() {
	            // 1.取出请求参数
	            var _$store$state$errNetP = this.$store.state.errNetParam,
	                repo = _$store$state$errNetP.repo,
	                body = _$store$state$errNetP.body,
	                callback = _$store$state$errNetP.callback;
	            // 2.开loading

	            Vue.TipHelper.showHub(0
	            // 3.重新请求
	            );setTimeout(function () {
	                Vue.HttpHelper.post(repo, body, callback, true);
	            }, 500);
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {

	        eventModule.setEnableBack(1, 0); //返回按钮监听 WXback 方法
	        //佣金分期 页面 返回，都返回到app
	        globalEvent.addEventListener('WXback', function (e) {
	            Vue.NaviHelper.push('root'); //杀掉进程，返回到app钱包
	        });
	    },
	    destroyed: function destroyed() {
	        globalEvent.removeEventListener('WXback');
	    }
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(49)
	)

	/* script */
	__vue_exports__ = __webpack_require__(50)

	/* template */
	var __vue_template__ = __webpack_require__(51)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/ccImage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-434f5f89"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        src: {
	            type: String,
	            default: ''
	            //                default: 'http://ok7s5wpmw.bkt.clouddn.com/wx_logo.png'
	        },
	        // 监听cell点击事件
	        onClick: {
	            type: Function
	        },
	        have3xPNG: { // 没有3x图, 不处理
	            type: Boolean,
	            default: true
	        },
	        divWidth: {
	            type: Number
	        },
	        divHeight: {
	            type: Number
	        }
	    },
	    data: function data() {
	        return {
	            imgWidth: 1,
	            imgHeight: 1
	        };
	    },

	    methods: {
	        load: function load(e) {
	            var _$store$state$env = this.$store.state.env,
	                platform = _$store$state$env.platform,
	                scale = _$store$state$env.scale;
	            var _e$size = e.size,
	                naturalWidth = _e$size.naturalWidth,
	                naturalHeight = _e$size.naturalHeight;


	            console.log(this.src, e, this.have3xPNG);
	            console.log('w: ', naturalWidth);
	            console.log('h: ', naturalHeight

	            // 做适配
	            );if (platform == 'iOS' && this.have3xPNG) {
	                this.imgWidth = naturalWidth / scale * 2;
	                this.imgHeight = naturalHeight / scale * 2;
	            } else {
	                this.imgWidth = naturalWidth;
	                this.imgHeight = naturalHeight;
	            }
	        }
	    },
	    created: function created() {},

	    watch: {
	        src: function src(newValue, o) {
	            this.src = newValue;
	        }
	    }
	};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [(_vm.src != '') ? _c('image', {
	    style: {
	      width: _vm.imgWidth,
	      height: _vm.imgHeight
	    },
	    attrs: {
	      "src": _vm.src
	    },
	    on: {
	      "load": _vm.load,
	      "click": _vm.onClick
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": 'WXLocal/wx_network_error'
	    }
	  }), _c('text', {
	    staticClass: ["text"]
	  }, [_vm._v("网络好像不太给力")]), _c('div', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v("点击刷新")])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(54)
	)

	/* script */
	__vue_exports__ = __webpack_require__(55)

	/* template */
	var __vue_template__ = __webpack_require__(56)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/views/banner.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2488efd9"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1
	  },
	  "scroller": {
	    "flex": 1
	  }
	}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            src: this.$store.state.banner_src,
	            imgWidth: 1,
	            imgHeight: 1
	        };
	    },

	    methods: {
	        load: function load(e) {

	            // 图片加载完成回调
	            var _e$size = e.size,
	                naturalWidth = _e$size.naturalWidth,
	                naturalHeight = _e$size.naturalHeight;

	            this.imgWidth = naturalWidth;
	            this.imgHeight = naturalHeight;

	            console.log(this.src);
	            console.log('w: ', naturalWidth);
	            console.log('h: ', naturalHeight);
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {},
	    destroyed: function destroyed() {}
	};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('image', {
	    ref: "img",
	    style: {
	      width: _vm.imgWidth,
	      height: _vm.imgHeight
	    },
	    attrs: {
	      "src": _vm.src
	    },
	    on: {
	      "load": _vm.load
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(61)
	)

	/* script */
	__vue_exports__ = __webpack_require__(62)

	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/uiButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-db35c15a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = {
	  "active": {
	    "backgroundColor": "#e2262a",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "opacity": 1,
	    "opacity:active": 0.84
	  },
	  "disabled": {
	    "backgroundColor": "#c5c5c5",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "text": {
	    "flex": 1,
	    "backgroundColor": "#FF0000",
	    "color": "#ffffff",
	    "textAlign": "center",
	    "overflow": "hidden"
	  },
	  "text_normal": {
	    "fontSize": 34,
	    "height": 90,
	    "lineHeight": 90,
	    "borderRadius": 8
	  },
	  "text_small": {
	    "fontSize": 30,
	    "height": 68,
	    "lineHeight": 68,
	    "borderRadius": 4
	  }
	}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        title: {
	            type: String,
	            default: '我是按钮'
	        },
	        size: {
	            type: String,
	            default: 'normal'
	        },
	        onClick: {
	            type: Function
	        },
	        flag: {
	            type: String,
	            default: 'active' // active:可点击状态 / -aliAuth / -mobileAuth  disabled:置灰状态
	        }
	    },
	    components: {},
	    data: function data() {
	        return {
	            styleObject: {
	                opacity: 1
	            }
	        };
	    },
	    created: function created() {
	        if (this.size == 'small') {
	            this.textClass = 'text_small';
	        } else {
	            this.textClass = 'text_normal';
	        }
	    },
	    mounted: function mounted() {},

	    computed: {}
	};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    class: [_vm.flag, _vm.textClass],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(89)
	)

	/* script */
	__vue_exports__ = __webpack_require__(90)

	/* template */
	var __vue_template__ = __webpack_require__(95)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/infoCell.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-087ffef2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 89 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#FFFFFF"
	  },
	  "content": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "height": 88,
	    "paddingLeft": 25,
	    "paddingRight": 25
	  },
	  "content-left": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "content-right": {
	    "flex": 1
	  },
	  "content-right-text": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "content-right-btn": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "content-right-input": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "content-right-inputMoney": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "content-right-checkBox": {
	    "flex": 1,
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "star": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#E2262A",
	    "marginRight": 16
	  },
	  "text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#7E7E7E"
	  },
	  "input": {
	    "flex": 1,
	    "textAlign": "right",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#303030",
	    "placeholderColor": "#C5C5C5",
	    "paddingTop": 15,
	    "paddingBottom": 15
	  },
	  "btn": {
	    "flex": 1,
	    "justifyContent": "center"
	  },
	  "btn-text": {
	    "textAlign": "right",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#303030"
	  },
	  "btn-text-placeholder": {
	    "textAlign": "right",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#C5C5C5"
	  },
	  "btn-text-auth": {
	    "textAlign": "right",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#22B362"
	  },
	  "btn-text-wait": {
	    "textAlign": "right",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#C5C5C5"
	  },
	  "checkBox": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "marginLeft": 20
	  },
	  "checkBox-img": {
	    "marginRight": 16
	  },
	  "arrow-img": {
	    "marginLeft": 10
	  },
	  "arrow-text": {
	    "marginLeft": 10,
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#303030"
	  }
	}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	var _ccLine = __webpack_require__(91);

	var _ccLine2 = _interopRequireDefault(_ccLine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { ccImage: _ccImage2.default, ccLine: _ccLine2.default },
	    props: {
	        // 区分不同的cell
	        types: {
	            required: true,
	            type: String,
	            default: ''
	        },
	        // 区分 手机认证 / 芝麻分认证 / 普通按钮
	        flag: {
	            type: String,
	            default: '' // '' / -aliAuth / -mobileAuth
	        },
	        isShowStar: {
	            type: Boolean,
	            default: true
	        },
	        // 显示主题文本
	        title: {
	            type: String,
	            default: ''
	        },
	        // 显示输入框文本
	        inputValue: {
	            type: String,
	            default: ''
	        },
	        // 显示选项卡文本, 选中后才展示
	        selectValue: {
	            type: String,
	            default: ''
	        },
	        // 显示占位文本
	        placeholder: {
	            type: String,
	            default: ''
	        },
	        // 仅显示姓名与身份证内容
	        textValue: {
	            type: String,
	            default: ''
	        },
	        // 文本颜色
	        textColor: {
	            type: String,
	            default: ''
	        },
	        // 是否显示分割线
	        isLineShow: {
	            type: Boolean,
	            default: true
	        },
	        // 是否显示箭头标识
	        isHintShow: {
	            type: Boolean,
	            default: false
	        },
	        maxLength: {
	            type: Number
	        },
	        // 监听cell点击事件
	        onClick: {
	            type: Function
	        },
	        // 监听输入的文本数据
	        onChange: {
	            type: Function
	        },
	        onDidChange: {
	            type: Function
	        },
	        onFocus: {
	            type: Function
	        },
	        onBlur: {
	            type: Function
	        },
	        // check box
	        isCheckRes: { // '1',  '0'
	            type: String,
	            default: ''
	        },
	        onCheckYes: {
	            type: Function
	        },
	        onCheckNo: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {},
	    mounted: function mounted() {},
	    update: function update() {}
	};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(92)
	)

	/* script */
	__vue_exports__ = __webpack_require__(93)

	/* template */
	var __vue_template__ = __webpack_require__(94)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/ccLine.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b508b694"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 92 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#A4A4A4",
	    "height": 0.5,
	    "opacity": 0.8,
	    "marginLeft": 28,
	    "marginRight": 4
	  }
	}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    props: {
	        // 是否显示分割线
	        isLineShow: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {}
	};

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.isLineShow) ? _c('div', {
	    staticClass: ["wrapper"]
	  }) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('ccLine', {
	    attrs: {
	      "isLineShow": _vm.isLineShow
	    }
	  }), _c('div', {
	    staticClass: ["content"]
	  }, [_c('div', {
	    staticClass: ["content-left"]
	  }, [(_vm.isShowStar) ? _c('text', {
	    staticClass: ["star"]
	  }, [_vm._v("*")]) : _vm._e(), _c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["content-right"]
	  }, [(this.types === 'inputText') ? _c('div', {
	    staticClass: ["content-right-input"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onChange]
	    }
	  })]) : _vm._e(), (this.types === 'inputTel') ? _c('div', {
	    staticClass: ["content-right-input"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onChange],
	      "change": _vm.onDidChange,
	      "focus": _vm.onFocus,
	      "blur": _vm.onBlur
	    }
	  })]) : _vm._e(), (this.types === 'inputMoney') ? _c('div', {
	    staticClass: ["content-right-inputMoney"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onChange]
	    }
	  }), _c('text', {
	    staticClass: ["arrow-text"]
	  }, [_vm._v("元")]), _c('ccImage', {
	    staticClass: ["arrow-img"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  })], 1) : _vm._e(), (this.types === 'text') ? _c('div', {
	    staticClass: ["content-right-text"]
	  }, [_c('text', {
	    staticClass: ["text"],
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._v(_vm._s(_vm.textValue))])]) : _vm._e(), (this.types === 'btn') ? _c('div', {
	    staticClass: ["content-right-btn"]
	  }, [_c('div', {
	    staticClass: ["btn"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.selectValue != '') ? _c('text', {
	    class: ['btn-text' + _vm.flag]
	  }, [_vm._v(_vm._s(_vm.selectValue))]) : _c('text', {
	    staticClass: ["btn-text-placeholder"]
	  }, [_vm._v(_vm._s(_vm.placeholder))])]), (_vm.flag == '') ? _c('ccImage', {
	    staticClass: ["arrow-img"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  }) : _vm._e()], 1) : _vm._e(), (this.types === 'checkBox') ? _c('div', {
	    staticClass: ["content-right-checkBox"]
	  }, [_c('div', {
	    staticClass: ["checkBox"],
	    on: {
	      "click": _vm.onCheckYes
	    }
	  }, [_c('ccImage', {
	    staticClass: ["checkBox-img"],
	    attrs: {
	      "src": _vm.isCheckRes == '' ? 'WXLocal/wx_select_unpass' : (_vm.isCheckRes == '1' ? 'WXLocal/wx_select_pass' : 'WXLocal/wx_select_unpass')
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v("是")])], 1), _c('div', {
	    staticClass: ["checkBox"],
	    on: {
	      "click": _vm.onCheckNo
	    }
	  }, [_c('ccImage', {
	    staticClass: ["checkBox-img"],
	    attrs: {
	      "src": _vm.isCheckRes == '' ? 'WXLocal/wx_select_unpass' : (_vm.isCheckRes == '0' ? 'WXLocal/wx_select_pass' : 'WXLocal/wx_select_unpass')
	    }
	  }), _c('text', {
	    staticClass: ["btn-text"]
	  }, [_vm._v("否")])], 1)]) : _vm._e()])])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(97)
	)

	/* script */
	__vue_exports__ = __webpack_require__(98)

	/* template */
	var __vue_template__ = __webpack_require__(99)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/agreeBtn.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-00b0905c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "text-black": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "lineHeight": 33,
	    "fontSize": 24,
	    "color": "#303030"
	  },
	  "text-blue": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "lineHeight": 33,
	    "fontSize": 24,
	    "color": "#0E8EE9"
	  },
	  "image": {
	    "marginRight": 16
	  }
	}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        title: {
	            type: String,
	            default: ''
	        },
	        isShow: {
	            type: Boolean,
	            default: false
	        },
	        isFinish: {
	            type: Boolean,
	            default: false
	        },
	        onClick: {
	            type: Function
	        }
	    },
	    components: { ccImage: _ccImage2.default },
	    data: function data() {
	        return {
	            src: '',
	            styleObject: {
	                opacity: 0
	            }
	        };
	    },

	    methods: {},
	    created: function created() {
	        if (this.isShow) {
	            this.styleObject.opacity = 1;
	        } else {
	            this.styleObject.opacity = 0;
	        }
	        if (this.isFinish) {
	            this.src = 'WXLocal/wx_agreement_pass';
	        } else {
	            this.src = 'WXLocal/wx_agreement_unpass';
	        }
	    },

	    watch: {
	        isShow: function isShow(val, oldVal) {
	            if (this.isShow) {
	                this.styleObject.opacity = 1;
	            } else {
	                this.styleObject.opacity = 0;
	            }
	        },
	        isFinish: function isFinish(val, oldVal) {
	            if (this.isFinish) {
	                this.src = 'WXLocal/wx_agreement_pass';
	            } else {
	                this.src = 'WXLocal/wx_agreement_unpass';
	            }
	        }

	    }
	}; //
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 99 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"],
	    style: _vm.styleObject,
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.src
	    }
	  }), _c('text', {
	    staticClass: ["text-black"]
	  }, [_vm._v("同意并签署")]), _c('text', {
	    staticClass: ["text-blue"]
	  }, [_vm._v("相关合同文件")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(105)
	)

	/* script */
	__vue_exports__ = __webpack_require__(106)

	/* template */
	var __vue_template__ = __webpack_require__(107)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/ccButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-d6ca2b18"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 105 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "height": 90,
	    "borderRadius": 4,
	    "backgroundColor": "#E2262A",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "text": {
	    "textAlign": "center",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  }
	}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        title: {
	            type: String,
	            default: '我是按钮'
	        },
	        onClick: {
	            type: Function
	        },
	        isClick: { // 是否可点击
	            type: Boolean,
	            default: true
	        }
	    },
	    components: {},
	    data: function data() {
	        return {
	            styleObject: {
	                opacity: 1,
	                backgroundColor: ''
	            }
	        };
	    },
	    created: function created() {
	        if (this.isClick) {
	            //                this.styleObject.opacity = 1
	            this.styleObject.backgroundColor = '#E2262A';
	        } else {
	            //                this.styleObject.opacity = 0.2
	            this.styleObject.backgroundColor = '#C5C5C5';
	        }
	    },
	    mounted: function mounted() {},

	    computed: {},
	    watch: {
	        isClick: function isClick(val, oldVal) {
	            if (this.isClick) {
	                //                this.styleObject.opacity = 1
	                this.styleObject.backgroundColor = '#E2262A';
	            } else {
	                //                this.styleObject.opacity = 0.2
	                this.styleObject.backgroundColor = '#C5C5C5';
	            }
	        }
	    }
	};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "btn",
	    staticClass: ["wrapper"],
	    style: _vm.styleObject,
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(117)
	)

	/* script */
	__vue_exports__ = __webpack_require__(118)

	/* template */
	var __vue_template__ = __webpack_require__(119)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/hint.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a235b86e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "height": 90,
	    "paddingTop": 24,
	    "paddingBottom": 16,
	    "paddingLeft": 21,
	    "paddingRight": 5
	  },
	  "text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 24,
	    "color": "#C5C5C5",
	    "lineHeight": 24
	  }
	}

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    props: {
	        title: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {}
	};

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(129)
	)

	/* script */
	__vue_exports__ = __webpack_require__(130)

	/* template */
	var __vue_template__ = __webpack_require__(131)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/itView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-382d74b2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 129 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#FFFFFF",
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "image": {
	    "marginTop": 50,
	    "marginBottom": 10,
	    "width": 110,
	    "height": 110
	  },
	  "text": {
	    "marginTop": 10,
	    "marginBottom": 30
	  }
	}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        src: {
	            type: String,
	            default: ''
	        },
	        title: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {}
	}; //
	//
	//
	//
	//
	//
	//

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.src
	    }
	  }), _c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.title))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vueRouter = __webpack_require__(39);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _root = __webpack_require__(153);

	var _root2 = _interopRequireDefault(_root);

	var _errorNetPage = __webpack_require__(45);

	var _errorNetPage2 = _interopRequireDefault(_errorNetPage);

	var _webPage = __webpack_require__(157);

	var _webPage2 = _interopRequireDefault(_webPage);

	var _banner = __webpack_require__(53);

	var _banner2 = _interopRequireDefault(_banner);

	var _wallet = __webpack_require__(161);

	var _wallet2 = _interopRequireDefault(_wallet);

	var _identity = __webpack_require__(165);

	var _identity2 = _interopRequireDefault(_identity);

	var _information = __webpack_require__(173);

	var _information2 = _interopRequireDefault(_information);

	var _bankCard = __webpack_require__(177);

	var _bankCard2 = _interopRequireDefault(_bankCard);

	var _authResultPage = __webpack_require__(181);

	var _authResultPage2 = _interopRequireDefault(_authResultPage);

	var _mobileAuthPage = __webpack_require__(193);

	var _mobileAuthPage2 = _interopRequireDefault(_mobileAuthPage);

	var _zmAuthPage = __webpack_require__(201);

	var _zmAuthPage2 = _interopRequireDefault(_zmAuthPage);

	var _bankList = __webpack_require__(205);

	var _bankList2 = _interopRequireDefault(_bankList);

	var _personalInfoProtocal = __webpack_require__(209);

	var _personalInfoProtocal2 = _interopRequireDefault(_personalInfoProtocal);

	var _linkman = __webpack_require__(217);

	var _linkman2 = _interopRequireDefault(_linkman);

	var _withdraw = __webpack_require__(225);

	var _withdraw2 = _interopRequireDefault(_withdraw);

	var _withdrawcontract = __webpack_require__(241);

	var _withdrawcontract2 = _interopRequireDefault(_withdrawcontract);

	var _withdrawState = __webpack_require__(245);

	var _withdrawState2 = _interopRequireDefault(_withdrawState);

	var _bindBank = __webpack_require__(249);

	var _bindBank2 = _interopRequireDefault(_bindBank);

	var _bankList3 = __webpack_require__(253);

	var _bankList4 = _interopRequireDefault(_bankList3);

	var _bindBankcontract = __webpack_require__(257);

	var _bindBankcontract2 = _interopRequireDefault(_bindBankcontract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default); /**
	                               * Created by x298017064010 on 17/6/12.
	                               */

	exports.default = new _vueRouter2.default({
	    // mode: 'abstract',    // 不需要设置模式, 系统自动匹配
	    routes: [{ path: '/root', component: _root2.default }, { path: '/banner', component: _banner2.default }, { path: '/errorNetPage', component: _errorNetPage2.default }, { path: '/webPage', component: _webPage2.default },

	    // 授信
	    { path: '/wallet', component: _wallet2.default }, { path: '/identity', component: _identity2.default }, { path: '/information', component: _information2.default }, { path: '/bankCard', component: _bankCard2.default }, { path: '/authResultPage', component: _authResultPage2.default },

	    // 授信-子页面
	    { path: '/personalInfoProtocal', component: _personalInfoProtocal2.default }, { path: '/bankList', component: _bankList2.default }, { path: '/zmAuthPage', component: _zmAuthPage2.default }, { path: '/mobileAuthPage', component: _mobileAuthPage2.default },

	    // 激活
	    { path: '/linkMan', component: _linkman2.default },

	    //提现
	    { path: '/withdraw', component: _withdraw2.default }, { path: '/withdrawcontract', component: _withdrawcontract2.default }, { path: '/withdrawState', component: _withdrawState2.default }, { path: '/bindBank', component: _bindBank2.default }, { path: '/bindBankList', component: _bankList4.default }, { path: '/bindBankContract', component: _bindBankcontract2.default }, { path: '/', redirect: '/root' }]
	});

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(154)
	)

	/* script */
	__vue_exports__ = __webpack_require__(155)

	/* template */
	var __vue_template__ = __webpack_require__(156)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/root.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4cf2e001"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 154 */
/***/ (function(module, exports) {

	module.exports = {}

/***/ }),
/* 155 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {}
	};

/***/ }),
/* 156 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(158)
	)

	/* script */
	__vue_exports__ = __webpack_require__(159)

	/* template */
	var __vue_template__ = __webpack_require__(160)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/views/webPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-716d1fa6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports = {
	  "webview": {
	    "flex": 1
	  }
	}

/***/ }),
/* 159 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            url: ''
	        };
	    },

	    methods: {},
	    computed: {},
	    created: function created() {},
	    mounted: function mounted() {
	        var url = this.$getConfig().localData.url; //分期金额

	        this.url = 'http://' + url;

	        console.log('url: ', this.url);
	    },
	    destroy: function destroy() {}
	};

/***/ }),
/* 160 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish,
	      "error": _vm.error
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(162)
	)

	/* script */
	__vue_exports__ = __webpack_require__(163)

	/* template */
	var __vue_template__ = __webpack_require__(164)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/wallet/wallet.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-25ae3440"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 162 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1
	  }
	}

/***/ }),
/* 163 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {
	        var that = this;

	        // 获取手机号与token
	        //            that.$store.dispatch('LOCAL_DATA', this.$getConfig().localData);
	        // 获取主页状态
	        that.$store.dispatch('HOME_PAGE', { callback: function callback() {
	                // 接着获取身份认证数据
	                that.$store.dispatch('IDENTITY_INIT');
	            } });
	    }
	};

/***/ }),
/* 164 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(166)
	)

	/* script */
	__vue_exports__ = __webpack_require__(167)

	/* template */
	var __vue_template__ = __webpack_require__(172)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/wallet/identity.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-ef8ad276"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 166 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "hint": {
	    "height": 72
	  },
	  "idAuthCard": {
	    "width": 750,
	    "height": 390,
	    "backgroundColor": "#eeeeee",
	    "marginTop": 24
	  },
	  "agree": {
	    "marginTop": 76,
	    "marginLeft": 63
	  },
	  "btn-commit": {
	    "marginTop": 20,
	    "marginLeft": 51,
	    "marginRight": 51,
	    "marginBottom": 32
	  },
	  "fixDiv": {
	    "height": 190,
	    "opacity": 0
	  }
	}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _authHeader = __webpack_require__(168);

	var _authHeader2 = _interopRequireDefault(_authHeader);

	var _itView = __webpack_require__(128);

	var _itView2 = _interopRequireDefault(_itView);

	var _hint = __webpack_require__(116);

	var _hint2 = _interopRequireDefault(_hint);

	var _infoCell = __webpack_require__(88);

	var _infoCell2 = _interopRequireDefault(_infoCell);

	var _agreeBtn = __webpack_require__(96);

	var _agreeBtn2 = _interopRequireDefault(_agreeBtn);

	var _ccButton = __webpack_require__(104);

	var _ccButton2 = _interopRequireDefault(_ccButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	var globalEvent = weex.requireModule('globalEvent');

	var curType = '';

	exports.default = {
	    components: { hint: _hint2.default, infoCell: _infoCell2.default, ccButton: _ccButton2.default, agreeBtn: _agreeBtn2.default, authHeader: _authHeader2.default },
	    data: function data() {
	        return {
	            authHeaderItems: [{ img: 'WXLocal/wx_idauth_light', title: '身份认证', class: '' }, { img: 'WXLocal/wx_infoauth_dark', title: '信息认证', class: '-unActive' }, { img: 'WXLocal/wx_bankauth_dark', title: '银行卡认证', class: '-unActive' }],
	            isAgreeFinish: false // 合同签写完成的状态

	            //                isShowAgreeBtn: false,  // 合同按钮显隐开关

	            //                isClick: true,  // 提交按钮可点击状态
	            //                isNext: true,  // 是否可提交
	        };
	    },

	    methods: {
	        checkCommit: function checkCommit() {
	            var isRealNamePass = Vue.CheckHelper.checkRealName(this.$store.state.auth.realName);
	            if (!isRealNamePass) {
	                this.$store.state.auth.realName = '';
	            }

	            if (isRealNamePass) {
	                return true;
	            } else {
	                Vue.TipHelper.showHub('1', '姓名输入有误, 请重新输入!');
	                return false;
	            }
	        },
	        clickCommit: function clickCommit() {

	            // 测试
	            console.log('realName', this.$store.state.auth.realName);
	            console.log('identityNo', this.$store.state.auth.identityNo);
	            console.log('identityExpires', this.$store.state.auth.identityExpires);
	            console.log('identityPerson', this.$store.state.auth.identityPerson);
	            console.log('isAgreeFinish', this.isAgreeFinish);

	            var that = this;
	            if (this.isClick) {
	                // 提交校验
	                if (!this.checkCommit()) {
	                    return;
	                }

	                // 进行下一步, 信息认证
	                Vue.TipHelper.showAlert('温馨提示', '请确认填写信息真实有效，提交之后不可修改，是否确认提交？', '否', '是', function (r) {
	                    if (r.result === '是') {
	                        that.$store.dispatch('IDENTITY_SAVE');
	                    }
	                }, false);
	            }
	        },
	        changeNameInput: function changeNameInput(e) {
	            console.log('inputName:', e.value);
	        },
	        pushAgreePage: function pushAgreePage() {
	            console.log('pushAgreePage:', this.$store.state.mobile);

	            if (!this.isShowAgreeBtn) {
	                return;
	            }

	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_personalInfoProtocal', {
	                title: '个人信息授权书',
	                realName: this.$store.state.auth.realName,
	                customerId: this.$store.state.customerId,
	                token: this.$store.state.token,
	                mobile: this.$store.state.mobile,
	                identityNo: this.$store.state.auth.identityNo,
	                isAgreeFinish: this.isAgreeFinish
	            }, 'channel_pushAgreePage', function (r) {
	                console.log('回调写在下面了: ', r
	                //                    if (r.success == true) {
	                //                        that.isAgreeFinish = true
	                //                    }
	                );
	            });
	        },


	        // ------监听
	        inputName: function inputName(e) {
	            console.log('inputName:', e.value, e.value.charCodeAt());
	            this.$store.state.auth.realName = e.value;
	            this.isAgreeFinish = false;
	        },


	        // ------初始化
	        initWXIdAuthCard: function initWXIdAuthCard() {
	            var that = this;
	            var idAuthCard = this.$refs.idAuthCard;
	            // 第一次进来, 一定隐藏(新需求不选)
	            //                idAuthCard.setHidden(!this.isShowAuthCard)

	            var imgs = ['wx_idauth_bioassay', 'wx_idauth_front', 'wx_idauth_back'];
	            var msgs = ['请完成人脸识别', '请拍摄身份证正面', '请拍摄身份证背面'];
	            var tip = '安家趣花将对您的信息严格保密';
	            for (var i = 0; i < 3; i++) {
	                idAuthCard.setMessage(i, msgs[i], false // 未完成的文案
	                );idAuthCard.setPictureByLocalRes(i, imgs[i]);
	                idAuthCard.setTip(i, tip);
	            }

	            globalEvent.addEventListener('WXAuth', function (r) {
	                // 根据 r.event 区分事件
	                if (r.event == 'click') {
	                    if (r.type == 0 && that.$store.state.auth.identityNo == '') {
	                        Vue.TipHelper.showHub(1, '请先拍摄身份证正面照');
	                    } else {
	                        curType = r.type;
	                        idAuthCard.receiverClickEvent(r.type, false);
	                    }
	                } else if (r.event == 'result') {
	                    if (r.success == true) {
	                        if (curType == 1 || curType == 2) {
	                            // 直接上传身份证正反面照片
	                            that.$store.dispatch('IDENTITY_RECOGNIZE', { type: curType, base64Pic: r.base64Pic, callback: function callback(res) {
	                                    if (curType == 1) {
	                                        // 正面, 传身份证号
	                                        Vue.TipHelper.showAlert('请确认身份证号码', res.cardNo, '重新拍摄', '确定', function (r) {
	                                            if (r.result == '确定') {
	                                                // 1.如果前后证件照重新拍摄, 清空其他
	                                                if (that.$store.state.auth.identityNo != '' && that.$store.state.auth.identityExpires != '') {
	                                                    // 重新拍摄
	                                                    for (var i = 0; i < 3; i++) {
	                                                        idAuthCard.setMessage(i, msgs[i], false // 未完成的文案
	                                                        );idAuthCard.setPictureByLocalRes(i, imgs[i]);
	                                                        idAuthCard.setTip(i, tip);
	                                                    }
	                                                    that.$store.state.auth.identityNo = '';
	                                                    that.$store.state.auth.identityExpires = '';
	                                                    that.$store.state.auth.identityPerson = '0';
	                                                }
	                                                // 2.设置新图片
	                                                idAuthCard.setPictureByBase64(curType, that.$store.state.face.base64Pic);
	                                                idAuthCard.setMessage(curType, '身份证号码:' + res.cardNo, true
	                                                // 3.存储身份证号
	                                                );that.$store.state.auth.identityNo = res.cardNo;
	                                            } else {
	                                                idAuthCard.receiverClickEvent(curType, true // 第二个参数, 是否重新拍摄
	                                                );
	                                            }
	                                        }, false);
	                                    } else if (curType == 2) {
	                                        // 北面, 传身份证有效期
	                                        Vue.TipHelper.showAlert('请确认身份证有效期', res.validPeriod, '重新拍摄', '确定', function (r) {
	                                            if (r.result == '确定') {
	                                                // 1.如果前后证件照重新拍摄, 清空其他
	                                                if (that.$store.state.auth.identityNo != '' && that.$store.state.auth.identityExpires != '') {
	                                                    // 重新拍摄
	                                                    for (var i = 0; i < 3; i++) {
	                                                        idAuthCard.setMessage(i, msgs[i], false // 未完成的文案
	                                                        );idAuthCard.setPictureByLocalRes(i, imgs[i]);
	                                                        idAuthCard.setTip(i, tip);
	                                                    }
	                                                    that.$store.state.auth.identityNo = '';
	                                                    that.$store.state.auth.identityExpires = '';
	                                                    that.$store.state.auth.identityPerson = '0';
	                                                }
	                                                // 2.设置新图片
	                                                idAuthCard.setPictureByBase64(curType, that.$store.state.face.base64Pic);
	                                                idAuthCard.setMessage(curType, '身份证有效期:' + res.validPeriod, true
	                                                // 3.存储身份证有效期
	                                                );that.$store.state.auth.identityExpires = res.validPeriod;
	                                            } else {
	                                                idAuthCard.receiverClickEvent(curType, true // 第二个参数, 是否重新拍摄
	                                                );
	                                            }
	                                        }, false);
	                                    }
	                                } });
	                        } else {
	                            // 上传人脸识别照片
	                            that.$store.dispatch('FACEPAIR_RECOGNICE', { type: curType, base64Pic: r.base64Pic, callback: function callback(res) {
	                                    if (res.operationResult == true) {
	                                        Vue.TipHelper.showHub(1, '已通过验证');
	                                        idAuthCard.setPictureByBase64(curType, res.facepairStr // 该base64与拍照的不同, 仅限人脸识别
	                                        );idAuthCard.setMessage(curType, '已完成人脸识别', true);
	                                        that.$store.state.auth.identityPerson = '1';
	                                    } else {
	                                        Vue.TipHelper.showHub(1, res.displayInfo);
	                                        that.$store.state.auth.identityPerson = '0';
	                                    }
	                                } });
	                        }
	                    } else {
	                        // 人脸识别失败

	                    }
	                } else if (r.event == 'signature') {
	                    if (r.success == true) {
	                        console.log('手写签名全局事件回调: ', r
	                        // todo...
	                        );that.isAgreeFinish = true;
	                    }
	                }
	            });
	        },
	        configWXIdAuthCardData: function configWXIdAuthCardData() {
	            var that = this;
	            var idAuthCard = that.$refs.idAuthCard;
	            if (that.$store.state.auth.identityNo != null && that.$store.state.auth.identityNo != '') {
	                // 下载身份证正面照
	                that.$store.dispatch('IDENTITY_DOWNLOAD', { imageType: 'front', callback: function callback(res) {
	                        idAuthCard.setPictureByBase64('1', res.front);
	                        idAuthCard.setMessage('1', '身份证号码:' + that.$store.state.auth.identityNo, true

	                        // 下载身份证背面照
	                        );if (that.$store.state.auth.identityExpires != null && that.$store.state.auth.identityExpires != '') {
	                            that.$store.dispatch('IDENTITY_DOWNLOAD', { imageType: 'back', callback: function callback(res) {
	                                    idAuthCard.setPictureByBase64('2', res.back);
	                                    idAuthCard.setMessage('2', '身份证有效期:' + that.$store.state.auth.identityExpires, true

	                                    // 下载人脸识别照
	                                    );if (that.$store.state.auth.identityPerson == '1') {
	                                        that.$store.dispatch('IDENTITY_DOWNLOAD', { imageType: 'facepair_0', callback: function callback(res) {
	                                                idAuthCard.setPictureByBase64('0', res.facepair_0);
	                                                idAuthCard.setMessage('0', '已完成人脸识别', true);
	                                            } });
	                                    }
	                                } });
	                        }
	                    } });
	            }
	        }
	    },
	    computed: {
	        isClick: function isClick() {
	            if (this.$store.state.auth.realName !== '' && this.isAgreeFinish) {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        //            isShowAuthCard: function () {
	        //                if ( (this.$store.state.auth.realName !== null &&  this.$store.state.auth.realName !== '')
	        //                        && (this.$store.state.auth.educationDegree !== null && this.$store.state.auth.educationDegree !== '')
	        //                        && (this.$store.state.auth.marryStatus !== null && this.$store.state.auth.marryStatus !== '')) {
	        //                    return true;
	        //                } else {
	        //                    return false;
	        //                }
	        //            },
	        isShowAgreeBtn: function isShowAgreeBtn() {
	            if (this.$store.state.auth.realName != '' && this.$store.state.auth.identityNo !== '' && this.$store.state.auth.identityExpires !== '' && this.$store.state.auth.identityPerson == '1') {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        realName: function realName() {
	            return this.$store.state.auth.realName;
	        }
	    },
	    watch: {
	        //            isShowAuthCard: function (val, oldVal) {
	        //                console.log('3333333', val)
	        //
	        //                const idAuthCard = this.$refs.idAuthCard
	        ////                idAuthCard.setHidden(!val)
	        //            },
	    },
	    created: function created() {},
	    mounted: function mounted() {
	        // 初始化卡片控件
	        this.initWXIdAuthCard
	        // 下载卡片控件图片数据
	        ();this.configWXIdAuthCardData();
	    },
	    updated: function updated() {},
	    destroyed: function destroyed() {
	        globalEvent.removeEventListener('WXAuth');
	    }
	};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(169)
	)

	/* script */
	__vue_exports__ = __webpack_require__(170)

	/* template */
	var __vue_template__ = __webpack_require__(171)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/authHeader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-84a895d2"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 169 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF",
	    "width": 750,
	    "height": 234
	  },
	  "line": {
	    "width": 750,
	    "height": 110,
	    "position": "absolute",
	    "top": 40
	  },
	  "item": {
	    "flex": 1,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "image": {
	    "marginTop": 40,
	    "marginBottom": 16
	  },
	  "text": {
	    "marginBottom": 40,
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#303030",
	    "lineHeight": 28
	  },
	  "text-unActive": {
	    "marginBottom": 40,
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#7E7E7E",
	    "lineHeight": 28
	  }
	}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        items: {
	            type: Array,
	            default: []
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {},
	    mounted: function mounted() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 171 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('image', {
	    staticClass: ["line"],
	    attrs: {
	      "src": 'WXLocal/wx_auth_line'
	    }
	  }), _c('div', {
	    staticClass: ["item"]
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.items[0].img
	    }
	  }), _c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.items[0].title))])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.items[1].img
	    }
	  }), _c('text', {
	    class: ['text' + _vm.items[1].class]
	  }, [_vm._v(_vm._s(_vm.items[1].title))])], 1), _c('div', {
	    staticClass: ["item"]
	  }, [_c('ccImage', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.items[2].img
	    }
	  }), _c('text', {
	    class: ['text' + _vm.items[2].class]
	  }, [_vm._v(_vm._s(_vm.items[2].title))])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 172 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroll"]
	  }, [_c('authHeader', {
	    staticClass: ["header"],
	    attrs: {
	      "items": _vm.authHeaderItems
	    }
	  }), _c('hint', {
	    staticClass: ["hint"],
	    attrs: {
	      "title": '请填写本人真实信息, 有利于额度申请审批成功。'
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'inputText',
	      "title": '真实姓名',
	      "inputValue": _vm.realName,
	      "maxLength": 16,
	      "placeholder": '请输入真实姓名',
	      "isLineShow": false,
	      "onChange": _vm.inputName
	    }
	  }), _c('WXIdAuthCard', {
	    ref: "idAuthCard",
	    staticClass: ["idAuthCard"]
	  }), _c('div', {
	    staticClass: ["fixDiv"]
	  }), _c('agreeBtn', {
	    staticClass: ["agree"],
	    attrs: {
	      "isShow": _vm.isShowAgreeBtn,
	      "isFinish": _vm.isAgreeFinish,
	      "onClick": _vm.pushAgreePage
	    }
	  }), _c('ccButton', {
	    staticClass: ["btn-commit"],
	    attrs: {
	      "title": '提交',
	      "onClick": _vm.clickCommit,
	      "isClick": _vm.isClick
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(174)
	)

	/* script */
	__vue_exports__ = __webpack_require__(175)

	/* template */
	var __vue_template__ = __webpack_require__(176)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/wallet/information.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b3183616"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 174 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "header": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "hint": {
	    "height": 72
	  },
	  "btn-commit": {
	    "marginTop": 350,
	    "marginLeft": 51,
	    "marginRight": 51,
	    "marginBottom": 32
	  }
	}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _authHeader = __webpack_require__(168);

	var _authHeader2 = _interopRequireDefault(_authHeader);

	var _hint = __webpack_require__(116);

	var _hint2 = _interopRequireDefault(_hint);

	var _infoCell = __webpack_require__(88);

	var _infoCell2 = _interopRequireDefault(_infoCell);

	var _ccButton = __webpack_require__(104);

	var _ccButton2 = _interopRequireDefault(_ccButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	var globalEvent = weex.requireModule('globalEvent');

	exports.default = {
	    components: { authHeader: _authHeader2.default, hint: _hint2.default, infoCell: _infoCell2.default, ccButton: _ccButton2.default },
	    data: function data() {
	        return {
	            authHeaderItems: [{ img: 'WXLocal/wx_idauth_light', title: '身份认证', class: '' }, { img: 'WXLocal/wx_infoauth_light', title: '信息认证', class: '' }, { img: 'WXLocal/wx_bankauth_dark', title: '银行卡认证', class: '-unActive' }],
	            // 认证按钮样式标记
	            mobileAuthCSSFlag: '',
	            zmAuthCSSFlag: ''
	        };
	    },

	    methods: {
	        clickCommit: function clickCommit() {
	            console.log('mobileAuthFlag', this.$store.state.auth.mobileAuthFlag);
	            console.log('educationDegree', this.$store.state.auth.educationDegree);
	            console.log('marryStatus', this.$store.state.auth.marryStatus);
	            console.log('profession', this.$store.state.auth.profession);
	            console.log('isZmAuth', this.$store.state.auth.isZmAuth);

	            var that = this;
	            if (this.isClick) {
	                Vue.TipHelper.showAlert('温馨提示', '请确认填写信息真实有效，提交之后不可修改，是否确认提交？', '否', '是', function (r) {
	                    if (r.result === '是') {
	                        that.$store.dispatch('INFOAUTH_SAVE');
	                    }
	                }, false);
	            }
	        },
	        pushZMAuthPage: function pushZMAuthPage() {
	            console.log('pushZMAuthPage, isZmAuth:', this.$store.state.auth.isZmAuth);

	            var that = this;
	            //                if (this.$store.state.debug) {
	            //                    Vue.NaviHelper.push('weex/common?id=wallet&path=common?router_zmAuthPage', {title: '芝麻分认证', authUrl: r.authURL}, 'channel_pushZMAuthPage', function (r) {
	            //                        console.log('字码')
	            //                        if (r.result == true) {
	            //                            that.$store.state.auth.isZmAuth = '1'
	            //                        }
	            //                    });
	            //                }

	            if (this.zmAuthStatus == '') {
	                this.$store.dispatch('INFOAUTH_ZMAUTH', { callback: function callback(r) {
	                        console.log(r);
	                        if (r.isOpenAuth == true) {
	                            Vue.NaviHelper.push('weex/common?id=wallet&path=router_zmAuthPage', { title: '芝麻分认证', authUrl: r.authURL }, 'channel_pushZMAuthPage', function (r) {
	                                if (r.result == true) {
	                                    that.$store.state.auth.isZmAuth = '1';
	                                }
	                            });
	                        } else {
	                            //                            Vue.TipHelper.showHub('1', '芝麻分已认证')
	                            this.$store.state.auth.isZmAuth = '1';
	                        }
	                    } });
	            }
	        },
	        pushMobileAuthPage: function pushMobileAuthPage() {
	            console.log('pushMobileAuthPage, mobileAuthFlag:', this.$store.state.auth.mobileAuthFlag);

	            if (this.$store.state.debug) {
	                var _that = this;
	                Vue.NaviHelper.push('weex/common?id=wallet&path=router_mobileAuthPage', {
	                    title: '手机认证',
	                    mobileAuthFlag: _that.$store.state.auth.mobileAuthFlag,
	                    realName: _that.$store.state.auth.realName,
	                    identityNo: _that.$store.state.auth.identityNo,
	                    mobile: _that.$store.state.mobile
	                }, 'pushMobileAuthPage', function (r) {
	                    console.log('原生回调在下面: ', r);
	                });
	            }

	            var that = this;
	            if (this.mobileAuthFlag == '') {
	                // 取值
	                globalEvent.addEventListener('WXAuth', function (r) {
	                    // 根据 r.event 区分事件
	                    if (r.event == 'phoneAuth') {
	                        if (r.success == true) {
	                            console.log('手机认证页返回值是: ', r);
	                            _that2.$store.state.auth.mobileAuthFlag = 'wait';
	                        }
	                    }
	                });

	                var _that2 = this;
	                Vue.NaviHelper.push('native/main/phoneAuth', {
	                    title: '手机认证页面',
	                    mobileAuthFlag: _that2.$store.state.auth.mobileAuthFlag,
	                    realName: _that2.$store.state.auth.realName,
	                    identityNo: _that2.$store.state.auth.identityNo
	                }, 'pushMobileAuthPage', function (r) {
	                    console.log('手机认证页返回值是2222: ', r);
	                });
	            }
	        },
	        openEduCard: function openEduCard(a) {
	            var content = {
	                title: "请选择教育程度",
	                items: ["硕士及以上", "本科", "大专", "高中", "技校", "初中", "小学", "其他"]
	            };

	            var that = this;
	            eventModule.wxSelectListView(content, this.selectEdu, function (e) {
	                console.log('selectEdu:', e);

	                that.selectEdu = e.result;

	                var localSelect = '';
	                if (e.result == "硕士及以上") localSelect = 'ssjys';else if (e.result == "本科") localSelect = 'bk';else if (e.result == "大专") localSelect = 'dz';else if (e.result == "高中") localSelect = 'gz';else if (e.result == "技校") localSelect = 'jx';else if (e.result == "初中") localSelect = 'cz';else if (e.result == "小学") localSelect = 'xx';else if (e.result == "其他") localSelect = 'qt';
	                that.$store.state.auth.educationDegree = localSelect;
	            });
	        },
	        openMarryCard: function openMarryCard() {
	            var content = {
	                title: "请选择婚姻状况",
	                items: ["已婚", "未婚", "离异", "丧偶", "未说明婚姻状况"]
	            };
	            var that = this;
	            eventModule.wxSelectListView(content, this.selectMarry, function (e) {
	                console.log('selectMarry:', e);
	                that.selectMarry = e.result;

	                var localSelect = '';
	                if (e.result == "已婚") localSelect = 'yh';else if (e.result == "未婚") localSelect = 'wh';else if (e.result == "离异") localSelect = 'lh';else if (e.result == "丧偶") localSelect = 'so';else if (e.result == "未说明婚姻状况") localSelect = 'wsmhyzk';
	                that.$store.state.auth.marryStatus = localSelect;
	            });
	        },
	        openJobCard: function openJobCard() {
	            var content = {
	                title: "请选择职业",
	                items: ["企业主", "私营业主", "上班族", "其他"]
	            };
	            var that = this;
	            eventModule.wxSelectListView(content, this.selectJob, function (e) {
	                console.log('selectJob:', e);
	                that.$store.state.auth.profession = e.result;
	            });
	        }
	    },
	    computed: {
	        isClick: function isClick() {
	            if (this.mobileAuthFlag != '' &&
	            //                        && this.$store.state.auth.monthlyIncomeCard !== ''
	            //                        && this.$store.state.auth.monthlyIncomeCash !== ''
	            //                        && this.$store.state.auth.industry !== ''
	            //                        && this.$store.state.auth.payFundOrSecurity !== ''
	            this.$store.state.auth.educationDegree != '' && this.$store.state.auth.marryStatus != '' && this.$store.state.auth.profession != '') {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        mobileAuthFlag: function mobileAuthFlag() {
	            if (this.$store.state.auth.mobileAuthFlag == 'auth') {
	                this.mobileAuthCSSFlag = '-auth';
	                return '已认证';
	            } else if (this.$store.state.auth.mobileAuthFlag == 'wait') {
	                this.mobileAuthCSSFlag = '-wait';
	                return '认证中';
	            } else {
	                this.mobileAuthCSSFlag = '';
	                return '';
	            }
	        },
	        zmAuthStatus: function zmAuthStatus() {
	            if (this.$store.state.auth.isZmAuth == '1') {
	                this.zmAuthCSSFlag = '-auth';
	                return '已认证';
	            } else {
	                this.zmAuthCSSFlag = '';
	                return '';
	            }
	        },
	        selectSocial: function selectSocial() {
	            var localSelect = this.$store.state.auth.payFundOrSecurity;
	            if (localSelect == '1') return '是';else if (localSelect == '0') return '否';
	        },
	        selectEdu: function selectEdu() {
	            var localSelect = this.$store.state.auth.educationDegree;
	            if (localSelect == "ssjys") return '硕士及以上';else if (localSelect == "bk") return '本科';else if (localSelect == "dz") return '大专';else if (localSelect == "gz") return '高中';else if (localSelect == "jx") return '技校';else if (localSelect == "cz") return '初中';else if (localSelect == "xx") return '小学';else if (localSelect == "qt") return '其他';
	        },
	        selectMarry: function selectMarry() {
	            var localSelect = this.$store.state.auth.marryStatus;
	            if (localSelect == "yh") return '已婚';else if (localSelect == "wh") return '未婚';else if (localSelect == "lh") return '离异';else if (localSelect == "so") return '丧偶';else if (localSelect == "wsmhyzk") return '未说明婚姻状况';
	        },
	        selectProfession: function selectProfession() {
	            return this.$store.state.auth.profession;
	        }
	    },
	    created: function created() {
	        this.$store.dispatch('INFOAUTH_INIT');
	    },
	    mounted: function mounted() {},
	    destroyed: function destroyed() {
	        globalEvent.removeEventListener('WXAuth');
	    }
	};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroll"]
	  }, [_c('authHeader', {
	    staticClass: ["header"],
	    attrs: {
	      "items": _vm.authHeaderItems
	    }
	  }), _c('hint', {
	    staticClass: ["hint"],
	    attrs: {
	      "title": '请填写本人真实信息, 有利于额度申请审批成功。'
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'btn',
	      "title": '教育程度',
	      "placeholder": '请选择',
	      "selectValue": _vm.selectEdu,
	      "onClick": _vm.openEduCard,
	      "isLineShow": false
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'btn',
	      "title": '婚姻状况',
	      "placeholder": '请选择',
	      "selectValue": _vm.selectMarry,
	      "onClick": _vm.openMarryCard
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'btn',
	      "title": '从事职业',
	      "placeholder": '请选择',
	      "selectValue": _vm.selectProfession,
	      "onClick": _vm.openJobCard
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'btn',
	      "title": '手机认证',
	      "flag": _vm.mobileAuthCSSFlag,
	      "placeholder": '认证手机是获取额度的必要条件',
	      "selectValue": _vm.mobileAuthFlag,
	      "onClick": _vm.pushMobileAuthPage
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "isShowStar": false,
	      "types": 'btn',
	      "title": '芝麻分认证',
	      "flag": _vm.zmAuthCSSFlag,
	      "placeholder": '认证芝麻分最高可拿5万额度哦',
	      "selectValue": _vm.zmAuthStatus,
	      "onClick": _vm.pushZMAuthPage
	    }
	  }), _c('ccButton', {
	    staticClass: ["btn-commit"],
	    attrs: {
	      "title": '提交',
	      "onClick": _vm.clickCommit,
	      "isClick": _vm.isClick
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(178)
	)

	/* script */
	__vue_exports__ = __webpack_require__(179)

	/* template */
	var __vue_template__ = __webpack_require__(180)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/wallet/bankCard.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-40c8d31a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "header": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "hint": {
	    "height": 72
	  },
	  "changeBankCard": {
	    "width": 300,
	    "paddingTop": 16,
	    "paddingLeft": 24,
	    "paddingBottom": 20
	  },
	  "text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 24,
	    "color": "#108EE9",
	    "lineHeight": 24
	  },
	  "btn-commit": {
	    "marginTop": 281,
	    "marginLeft": 51,
	    "marginRight": 51,
	    "marginBottom": 32
	  }
	}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _authHeader = __webpack_require__(168);

	var _authHeader2 = _interopRequireDefault(_authHeader);

	var _hint = __webpack_require__(116);

	var _hint2 = _interopRequireDefault(_hint);

	var _infoCell = __webpack_require__(88);

	var _infoCell2 = _interopRequireDefault(_infoCell);

	var _ccButton = __webpack_require__(104);

	var _ccButton2 = _interopRequireDefault(_ccButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	exports.default = {
	    components: { authHeader: _authHeader2.default, hint: _hint2.default, infoCell: _infoCell2.default, ccButton: _ccButton2.default },
	    data: function data() {
	        return {
	            authHeaderItems: [{ img: 'WXLocal/wx_idauth_light', title: '身份认证', class: '' }, { img: 'WXLocal/wx_infoauth_light', title: '信息认证', class: '' }, { img: 'WXLocal/wx_bankauth_light', title: '银行卡认证', class: '' }],
	            isCreditCard: false,
	            realName: '',
	            identityNo: ''
	        };
	    },

	    methods: {
	        checkCommit: function checkCommit() {
	            // 银行预留电话验证
	            var isBankMobilePass = Vue.CheckHelper.checkMobileNo(this.$store.state.auth.bankMobile.replace(/\s/g, ""));
	            if (!isBankMobilePass) {
	                this.$store.state.auth.bankMobile = '';
	            }
	            // 银行卡号验证
	            var isCardNoPass = Vue.CheckHelper.checkCardNo(this.$store.state.auth.cardNo.replace(/\s/g, ""), this.isCreditCard);
	            if (!isCardNoPass) {
	                this.$store.state.auth.cardNo = '';
	            }

	            if (isBankMobilePass && isCardNoPass) {
	                return true;
	            } else {
	                if (!isBankMobilePass && !isCardNoPass) {
	                    Vue.TipHelper.showHub('1', '银行卡卡号、银行预留电话填写有误, 请重新输入!');
	                } else {
	                    if (!isBankMobilePass) {
	                        Vue.TipHelper.showHub('1', '银行预留电话填写有误,\n请重新输入!');
	                    } else if (!isCardNoPass) {
	                        Vue.TipHelper.showHub('1', '银行卡卡号填写有误,\n请重新输入!');
	                    }
	                }
	                return false;
	            }
	        },
	        clickCommit: function clickCommit() {

	            console.log('cardType', this.$store.state.auth.cardType); // 区分引用卡还是储蓄卡
	            console.log('cardBank', this.$store.state.auth.cardBank);
	            console.log('cardNo', this.$store.state.auth.cardNo);
	            console.log('bankCode', this.$store.state.auth.bankCode);
	            console.log('bankMobile', this.$store.state.auth.bankMobile);
	            console.log('bankInfoId', this.$store.state.auth.bankInfoId); // 为空 = 未认证 = 才能正常保存

	            var that = this;
	            if (this.isClick) {
	                // 输入信息校验
	                if (!this.checkCommit()) {
	                    return;
	                }
	                // 进行下一步, 信息认证
	                Vue.TipHelper.showAlert('温馨提示', '请确认填写信息真实有效，提交之后不可修改，是否确认提交？', '否', '是', function (r) {
	                    if (r.result === '是') {
	                        that.$store.dispatch('BANKCARD_SAVE');
	                    }
	                }, false);
	            }
	        },
	        changeBankCard: function changeBankCard() {
	            console.log('changeBankCard:');

	            this.isCreditCard = !this.isCreditCard;
	            if (this.isCreditCard == false) {
	                this.$store.state.auth.cardType = 'DR';
	            } else {
	                this.$store.state.auth.cardType = 'CR';
	            }
	            this.$store.state.auth.cardBank = '';
	            this.$store.state.auth.bankCode = '';
	            this.$store.state.auth.bankMobile = '';
	            this.$store.state.auth.cardNo = '';
	        },
	        pushBankListPage: function pushBankListPage() {
	            console.log('pushBankListPage:');
	            var that = this;

	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_bankList', { title: '银行列表', isCredit: this.isCreditCard }, 'channel_pushBankList', function (r) {
	                console.log('你点击的银行是: ', r.result);

	                var _r$result = r.result,
	                    bankName = _r$result.bankName,
	                    bankCode = _r$result.bankCode;

	                that.$store.state.auth.cardBank = bankName;
	                that.$store.state.auth.bankCode = bankCode;
	            });
	        },
	        inputCreditCardNumber: function inputCreditCardNumber(e) {
	            console.log('inputCreditCardNumber:', e.value);
	            this.$store.state.auth.cardNo = e.value;
	        },
	        inputTelNumber: function inputTelNumber(e) {
	            console.log('inputBankTelNumber:', e.value);
	            this.$store.state.auth.bankMobile = e.value;
	        }
	    },
	    computed: {
	        isClick: function isClick() {
	            if (this.$store.state.auth.cardBank !== '' && this.$store.state.auth.cardNo !== '' && this.$store.state.auth.bankCode !== '' && this.$store.state.auth.bankMobile !== '') {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        cardBank: function cardBank() {
	            return this.$store.state.auth.cardBank;
	        },
	        cardNo: function cardNo() {
	            return this.$store.state.auth.cardNo;
	        },
	        bankMobile: function bankMobile() {
	            return this.$store.state.auth.bankMobile;
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {
	        var that = this;
	        that.$store.dispatch('BANKCARD_INIT', { callback: function callback() {
	                that.realName = that.$store.state.auth.realName;
	                that.identityNo = that.$store.state.auth.identityNo;
	                that.$store.state.auth.cardBank = '';
	                that.$store.state.auth.cardNo = '';
	                that.$store.state.auth.bankMobile = '';
	                // 新用户后台没给, 特殊处理
	                if (that.$store.state.auth.cardType == '') {
	                    that.$store.state.auth.cardType = 'DR';
	                    that.isCreditCard = false;
	                }
	            } });
	    }
	};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroll"]
	  }, [_c('authHeader', {
	    staticClass: ["header"],
	    attrs: {
	      "items": _vm.authHeaderItems
	    }
	  }), _c('hint', {
	    staticClass: ["hint"],
	    attrs: {
	      "title": '请填写本人真实信息, 有利于额度申请审批成功。'
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'text',
	      "title": '身份证号',
	      "isShowStar": false,
	      "textValue": _vm._f("identityFormat")(_vm.identityNo),
	      "isLineShow": false
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'text',
	      "title": '真实姓名',
	      "isShowStar": false,
	      "textValue": _vm._f("realNameFormat")(_vm.realName)
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'btn',
	      "title": '银行名称',
	      "selectValue": _vm.cardBank,
	      "placeholder": '请选择',
	      "onClick": _vm.pushBankListPage
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'inputTel',
	      "title": _vm.isCreditCard ? '信用卡卡号' : '借记卡卡号',
	      "inputValue": _vm._f("cardNoFormat")(_vm.cardNo),
	      "placeholder": _vm.isCreditCard ? '请输入本人信用卡卡号' : '请输入本人借记卡卡号',
	      "maxLength": _vm.isCreditCard ? 16 + 3 : 19 + 4,
	      "onChange": _vm.inputCreditCardNumber
	    }
	  }), _c('infoCell', {
	    attrs: {
	      "types": 'inputTel',
	      "title": '手机号码',
	      "inputValue": _vm._f("mobileFormat")(_vm.bankMobile),
	      "placeholder": '请输入银行预留手机号',
	      "maxLength": 13,
	      "onChange": _vm.inputTelNumber
	    }
	  }), _c('div', {
	    staticClass: ["changeBankCard"],
	    on: {
	      "click": _vm.changeBankCard
	    }
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.isCreditCard ? '返回借记卡认证' : '若无借记卡，请点击 '))])]), _c('ccButton', {
	    staticClass: ["btn-commit"],
	    attrs: {
	      "title": '提交',
	      "onClick": _vm.clickCommit,
	      "isClick": _vm.isClick
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(182)
	)

	/* script */
	__vue_exports__ = __webpack_require__(183)

	/* template */
	var __vue_template__ = __webpack_require__(192)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/wallet/authResultPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-a304684a"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 182 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#eeeeee"
	  },
	  "scroller": {
	    "flex": 1,
	    "flexDirection": "column",
	    "justifyContent": "space-between"
	  },
	  "header": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginBottom": 24
	  },
	  "footer": {
	    "backgroundColor": "#FFFFFF",
	    "flex": 1,
	    "justifyContent": "space-between"
	  },
	  "footer-content": {
	    "marginBottom": 48
	  },
	  "btn-commit": {
	    "marginLeft": 51,
	    "marginRight": 51,
	    "marginBottom": 32
	  },
	  "producList": {
	    "backgroundColor": "#FFFFFF"
	  },
	  "producList-title": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#303030",
	    "lineHeight": 30,
	    "padding": 30
	  }
	}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _authHeader = __webpack_require__(168);

	var _authHeader2 = _interopRequireDefault(_authHeader);

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	var _ccButton = __webpack_require__(104);

	var _ccButton2 = _interopRequireDefault(_ccButton);

	var _ccCells = __webpack_require__(184);

	var _ccCells2 = _interopRequireDefault(_ccCells);

	var _resultContent = __webpack_require__(188);

	var _resultContent2 = _interopRequireDefault(_resultContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { authHeader: _authHeader2.default, ccImage: _ccImage2.default, ccButton: _ccButton2.default, ccCells: _ccCells2.default, resultContent: _resultContent2.default },
	    data: function data() {
	        return {
	            authHeaderItems: [{ img: 'WXLocal/wx_idauth_light', title: '身份认证', class: '' }, { img: 'WXLocal/wx_infoauth_light', title: '信息认证', class: '' }, { img: 'WXLocal/wx_bankauth_light', title: '银行卡认证', class: '' }],

	            // 反导流产品列表(废弃)
	            isShowProducList: false,
	            productList: [],
	            logoBaseUrl: 'http://gfbapp.vcash.cn/appweb/fileView/loadImgBase?location='
	        };
	    },

	    methods: {
	        clickReflash: function clickReflash() {
	            console.log('click reflash: ');
	            var that = this;

	            if (that.isClick) {
	                that.$store.dispatch('HOME_PAGE', { callback: function callback() {
	                        that.$store.dispatch('IDENTITY_INIT');
	                    } });
	            }
	        },
	        clickCell: function clickCell(e) {
	            console.log('click cell:', e);
	            var that = this;
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_webPage', {
	                title: '反导流',
	                url: e
	            }, 'channel_webPage', function (r) {
	                // 需要回调?
	            });
	        }
	    },
	    computed: {
	        // 失败, 无刷新 0201
	        // 等待, 刷新 0202
	        // 失败, 锁单   03(电审-锁单) / 06(提额-无额度)
	        // 等待, 无刷新(决策异常) 05
	        resultStatus: function resultStatus() {
	            if (this.$store.state.auth.status == '02') {
	                if (this.$store.state.auth.mobileAuthFlag == 'noauth') {
	                    return '0201';
	                } else {
	                    return '0202';
	                }
	            } else if (this.$store.state.auth.status == '03') {
	                return '03'; // 提现与无额度锁单, 取lockDays
	            } else if (this.$store.state.auth.status == '05') {
	                return '05';
	            } else if (this.$store.state.auth.status == '06') {
	                return '06';
	            } else {
	                return '0202';
	            }
	        },
	        contentType: function contentType() {
	            if (this.resultStatus == '0201' || this.resultStatus == '03' || this.resultStatus == '06') {
	                return 'fail';
	            } else {
	                return 'wait';
	            }
	        },
	        isShowBtn: function isShowBtn() {
	            if (this.resultStatus == '0201' || this.resultStatus == '05') {
	                return false;
	            } else {
	                return true;
	            }
	        },
	        btnTitle: function btnTitle() {
	            if (this.resultStatus == '06') {
	                this.isClick = false;
	                return '可在' + this.$store.state.auth.creditRejRemainDate + '天后进行再次申请';
	            } else if (this.resultStatus == '03') {
	                this.isClick = false;
	                return '可在' + this.$store.state.auth.lockDays + '天后进行再次申请';
	            } else {
	                this.isClick = true;
	                return '刷新';
	            }
	        },
	        isClick: function isClick() {
	            if (this.resultStatus == '03' || this.resultStatus == '06') {
	                return false;
	            } else {
	                return true;
	            }
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {
	        var that = this;
	        if (that.isShowProducList) {
	            that.$store.dispatch('RESULT_LOAD_PRODUCT_LIST', { callback: function callback(res) {
	                    that.productList = res.productList;
	                    console.log('反导流数据: ', that.productList);
	                } });
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(185)
	)

	/* script */
	__vue_exports__ = __webpack_require__(186)

	/* template */
	var __vue_template__ = __webpack_require__(187)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/ccCells.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-4c452302"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	module.exports = {
	  "normal": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#EEEEEE"
	  },
	  "normal-left": {
	    "margin": 24
	  },
	  "normal-right": {
	    "flex": 1,
	    "justifyContent": "center",
	    "marginTop": 24,
	    "marginBottom": 24,
	    "marginRight": 24
	  },
	  "normal-text-title": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#303030",
	    "lineHeight": 28,
	    "marginBottom": 19
	  },
	  "normal-text-desc": {
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 24,
	    "color": "#7E7E7E",
	    "lineHeight": 33
	  },
	  "arrow-img": {
	    "marginRight": 25
	  }
	}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        // 区分不同的cell
	        types: {
	            required: true,
	            type: String,
	            default: ''
	        },
	        title: {
	            type: String,
	            default: ''
	        },
	        desc: {
	            type: String,
	            default: ''
	        },
	        img: {
	            type: String,
	            default: ''
	        },
	        onClick: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.types == 'normal') ? _c('div', {
	    staticClass: ["normal"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('ccImage', {
	    staticClass: ["normal-left"],
	    attrs: {
	      "src": _vm.img,
	      "have3xPNG": false
	    }
	  }), _c('div', {
	    staticClass: ["normal-right"]
	  }, [_c('text', {
	    staticClass: ["normal-text-title"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('text', {
	    staticClass: ["normal-text-desc"]
	  }, [_vm._v(_vm._s(_vm.desc))])]), _c('ccImage', {
	    staticClass: ["arrow-img"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  })], 1) : _vm._e()
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(189)
	)

	/* script */
	__vue_exports__ = __webpack_require__(190)

	/* template */
	var __vue_template__ = __webpack_require__(191)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/resultContent.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1d44816c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 189 */
/***/ (function(module, exports) {

	module.exports = {
	  "text-img-text": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "marginTop": 32
	  },
	  "icon-text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#303030",
	    "lineHeight": 28
	  },
	  "icon-img": {
	    "marginLeft": 2,
	    "marginRight": 2
	  },
	  "content": {
	    "flex": 1,
	    "alignItems": "center",
	    "marginBottom": 48
	  },
	  "content-img": {
	    "width": 270,
	    "height": 270,
	    "marginTop": 73
	  },
	  "content-text-tip": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 30,
	    "color": "#303030",
	    "marginTop": 40,
	    "marginBottom": 24
	  },
	  "content-text-desc": {
	    "textAlign": "center",
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#7E7E7E",
	    "lineHeight": 42,
	    "lines": 0
	  }
	}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        types: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        return {
	            // 设置所有可能性
	            resultItems: {
	                wait: {
	                    img: 'WXLocal/wx_auth_applying',
	                    title: '您的申请已提交，请耐心等待！',
	                    desc: '预计10分钟内完成审核，\n审核通过后将以短信形式通知您，请注意查收。',
	                    desc1: '预计10分钟内完成审核，',
	                    desc2: '审核通过后将以短信形式通知您，请注意查收。'
	                },
	                fail: {
	                    img: 'WXLocal/wx_auth_fail',
	                    title: '额度申请失败',
	                    desc: '根据您的征信状况，安家趣花暂时无法提供额度服务。\n但您依旧可使用支付宝或银联进行购物，感谢您的使用！',
	                    desc1: '根据您的征信状况，安家趣花暂时无法提供额度服务。',
	                    desc2: '但您依旧可使用支付宝或银联进行购物，感谢您的使用！'
	                }
	            }
	        };
	    },

	    methods: {},
	    computed: {},
	    created: function created() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 191 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["text-img-text"]
	  }, [_c('text', {
	    staticClass: ["icon-text"]
	  }, [_vm._v("数据来源于")]), _c('ccImage', {
	    staticClass: ["icon-img"],
	    attrs: {
	      "src": 'WXLocal/wx_icon_boss'
	    }
	  }), _c('text', {
	    staticClass: ["icon-text"]
	  }, [_vm._v("中国人民银行征信中心")])], 1), _c('div', {
	    staticClass: ["content"]
	  }, [_c('ccImage', {
	    staticClass: ["content-img"],
	    attrs: {
	      "src": _vm.resultItems[_vm.types].img
	    }
	  }), _c('text', {
	    staticClass: ["content-text-tip"]
	  }, [_vm._v(_vm._s(_vm.resultItems[_vm.types].title))]), _c('text', {
	    staticClass: ["content-text-desc"]
	  }, [_vm._v(_vm._s(_vm.resultItems[_vm.types].desc))])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 192 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('authHeader', {
	    staticClass: ["header"],
	    attrs: {
	      "items": _vm.authHeaderItems
	    }
	  }), _c('div', {
	    staticClass: ["footer"]
	  }, [_c('resultContent', {
	    staticClass: ["footer-content"],
	    attrs: {
	      "types": _vm.contentType
	    }
	  }), (_vm.isShowBtn) ? _c('ccButton', {
	    staticClass: ["btn-commit"],
	    attrs: {
	      "title": _vm.btnTitle,
	      "onClick": _vm.clickReflash,
	      "isClick": _vm.isClick
	    }
	  }) : _vm._e()], 1), (_vm.productList.length != 0) ? _c('div', {
	    staticClass: ["producList"]
	  }, [_c('text', {
	    staticClass: ["producList-title"]
	  }, [_vm._v("急用钱，不等待！立即申请以下产品吧：")]), _vm._l((_vm.productList), function(product, index) {
	    return _c('div', {
	      staticClass: ["cell"]
	    }, [_c('div', {
	      on: {
	        "click": function($event) {
	          _vm.clickCell(product.productUrl)
	        }
	      }
	    }, [_c('ccCells', {
	      attrs: {
	        "types": 'normal',
	        "img": _vm.logoBaseUrl + product.productLogo,
	        "title": product.productName,
	        "desc": product.producDesc
	      }
	    })], 1)])
	  })], 2) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(194)
	)

	/* script */
	__vue_exports__ = __webpack_require__(195)

	/* template */
	var __vue_template__ = __webpack_require__(200)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/others/mobileAuthPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-162cd8b6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 194 */
/***/ (function(module, exports) {

	module.exports = {
	  "top": {
	    "padding": 24
	  },
	  "bottom": {
	    "padding": 22
	  },
	  "btn-commit": {
	    "marginLeft": 51,
	    "marginRight": 51
	  },
	  "text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 24,
	    "color": "#7E7E7E"
	  },
	  "top-text": {
	    "lineHeight": 24
	  },
	  "bottom-text": {
	    "lineHeight": 39,
	    "rows": 1
	  }
	}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _loginView = __webpack_require__(196);

	var _loginView2 = _interopRequireDefault(_loginView);

	var _ccButton = __webpack_require__(104);

	var _ccButton2 = _interopRequireDefault(_ccButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { loginView: _loginView2.default, ccButton: _ccButton2.default },
	    data: function data() {
	        return {
	            mobileNo: '',
	            password: '',
	            isShowPassword: false

	        };
	    },

	    methods: {
	        checkCommit: function checkCommit() {
	            if (this.$store.state.mobileAuth.token == '' || this.$store.state.mobileAuth.website == '') {
	                Vue.TipHelper.showHub('1', '亲爱的用户，您的手机号码所在的运营商暂时不支持，请稍后再试!');
	                return false;
	            }

	            // 银行预留电话验证
	            var isMobilePasswordPass = Vue.CheckHelper.checkMobileNo(this.password);
	            if (!isMobilePasswordPass) {
	                this.password = '';
	            }

	            if (isMobilePasswordPass) {
	                return true;
	            } else {
	                Vue.TipHelper.showHub('1', '服务密码输入有误, 请重新输入!');
	                return false;
	            }
	        },
	        clickCommit: function clickCommit() {
	            console.log('click commit'

	            // 保存密码
	            );this.$store.state.mobileAuth.password = this.password;

	            console.log('this.$store.state.mobileAuth.account', this.$store.state.mobileAuth.account);
	            console.log('this.$store.state.mobileAuth.password', this.$store.state.mobileAuth.password);
	            console.log('this.$store.state.auth.realName', this.$store.state.auth.realName);
	            console.log('this.$store.state.auth.identityNo', this.$store.state.auth.identityNo);
	            console.log('this.$store.state.mobileAuth.captcha', this.$store.state.mobileAuth.captcha);

	            if (this.isClick) {
	                // 输入信息校验
	                if (!this.checkCommit()) {
	                    return;
	                }

	                // 提交验证
	                var that = this;
	                that.$store.dispatch('PHONE_SUBMITINFORMATION', { callback: function callback(res) {
	                        that.$store.dispatch('PHONE_COMPARINGINFORMATION');
	                    } });
	            }
	        },
	        onInput: function onInput(e) {
	            console.log('onInput', e.value

	            // 保存长度
	            );var inputLength = e.value.length;
	            var lastInputLength = this.password.length;

	            // 删除键按下
	            if (inputLength < lastInputLength) {
	                this.password = this.password.replace(this.password.substr(lastInputLength - 1, lastInputLength), '');
	            } else {
	                // 适配android的输入bug
	                if (e.value.substr(inputLength - 1, inputLength) == '●') {
	                    return;
	                }
	                if (this.isShowPassword) {
	                    // 无黑点的输入, 取全部值
	                    this.password = e.value;
	                } else {
	                    // 有黑点的输入, 取最后值
	                    this.password = this.password + e.value.substr(inputLength - 1, inputLength);
	                }
	            }
	        },
	        onClickDelete: function onClickDelete() {
	            console.log('onClickDelete');
	            this.password = '';
	            this.passwordFormat = '';
	        },
	        onClickEye: function onClickEye() {
	            console.log('onClickEye, isShowPassword: ', this.isShowPassword);
	            this.isShowPassword = !this.isShowPassword;
	        },
	        onClickForget: function onClickForget() {
	            console.log('onClickForget');

	            var that = this;
	            // 测试
	            Vue.NaviHelper.push('native/main/phoneAuth', {
	                title: '手机认证页面',
	                mobileAuthFlag: that.$store.state.auth.mobileAuthFlag,
	                realName: that.$store.state.auth.realName,
	                identityNo: that.$store.state.auth.identityNo
	            }, 'pushMobileAuthPage', function (r) {
	                console.log('手机认证页返回值是2222: ', r);
	            });
	        }
	    },
	    computed: {
	        isClick: function isClick() {
	            if (this.password.length >= 6) {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        passwordFormat: function passwordFormat() {
	            if (!this.isShowPassword) {
	                var temp = '';
	                for (var i = 0; i < this.password.length; i++) {
	                    temp = temp + '●';
	                }
	                return temp;
	            }
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {
	        var _$getConfig$localData = this.$getConfig().localData,
	            mobile = _$getConfig$localData.mobile,
	            realName = _$getConfig$localData.realName,
	            identityNo = _$getConfig$localData.identityNo;

	        this.$store.state.mobileAuth.account = this.mobileNo = mobile;
	        this.$store.state.auth.realName = realName;
	        this.$store.state.auth.identityNo = identityNo;
	        this.$store.state.mobileAuth.captcha = '';

	        this.$store.dispatch('PHONE_INITIALIZE');
	    }
	};

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(197)
	)

	/* script */
	__vue_exports__ = __webpack_require__(198)

	/* template */
	var __vue_template__ = __webpack_require__(199)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/cc/loginView.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3f19ed48"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 197 */
/***/ (function(module, exports) {

	module.exports = {
	  "top": {
	    "height": 87,
	    "justifyContent": "center",
	    "marginLeft": 24,
	    "marginRight": 24,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#DFDFDF",
	    "borderBottomStyle": "solid"
	  },
	  "middle": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "marginLeft": 24,
	    "marginRight": 24,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#DFDFDF",
	    "borderBottomStyle": "solid"
	  },
	  "bottom": {
	    "height": 87,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "middle-left": {
	    "flex": 1,
	    "height": 87,
	    "marginRight": 50
	  },
	  "middle-right": {
	    "flexDirection": "row",
	    "justifyContent": "flex-end",
	    "alignItems": "center"
	  },
	  "delete": {
	    "width": 50,
	    "height": 50,
	    "justifyContent": "center",
	    "alignItems": "flex-end",
	    "marginRight": 22
	  },
	  "middle-right-delete": {
	    "width": 26,
	    "height": 26
	  },
	  "middle-right-eye": {
	    "width": 40,
	    "height": 40
	  },
	  "text": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#303030",
	    "lineHeight": 28
	  },
	  "text-forget": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 24,
	    "color": "#108EE9",
	    "lineHeight": 24
	  },
	  "input": {
	    "fontFamily": "'PingFangSC-Regular'",
	    "fontSize": 28,
	    "color": "#303030",
	    "lineHeight": 28,
	    "placeholderColor": "#C5C5C5"
	  }
	}

/***/ }),
/* 198 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    props: {
	        // 区分不同的cell
	        types: {
	            required: true,
	            type: String,
	            default: ''
	        },
	        mobileNo: {
	            type: String,
	            default: ''
	        },
	        inputValue: {
	            type: String,
	            default: ''
	        },
	        onInput: {
	            type: Function
	        },

	        isShowPassword: {
	            type: Boolean,
	            default: false
	        },
	        onClickDelete: {
	            type: Function
	        },
	        onClickEye: {
	            type: Function
	        },
	        onClickForget: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    computed: {},
	    created: function created() {}
	};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [(_vm.types == 'mobileAuth') ? _c('div', {
	    staticClass: ["mobileAuth"]
	  }, [_c('div', {
	    staticClass: ["top"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.mobileNo))])]), _c('div', {
	    staticClass: ["middle"]
	  }, [_c('input', {
	    staticClass: ["middle-left", "input"],
	    attrs: {
	      "placeholder": "请输入手机服务密码",
	      "type": "tel",
	      "maxlength": "8",
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onInput]
	    }
	  }), _c('div', {
	    staticClass: ["middle-right"]
	  }, [(_vm.inputValue != '') ? _c('div', {
	    staticClass: ["delete"],
	    on: {
	      "click": _vm.onClickDelete
	    }
	  }, [_c('image', {
	    staticClass: ["middle-right-delete"],
	    attrs: {
	      "src": 'WXLocal/wx_delete'
	    }
	  })]) : _vm._e(), _c('image', {
	    staticClass: ["middle-right-eye"],
	    attrs: {
	      "src": _vm.isShowPassword ? 'WXLocal/wx_eye_open' : 'WXLocal/wx_eye_close'
	    },
	    on: {
	      "click": _vm.onClickEye
	    }
	  })])]), _c('div', {
	    staticClass: ["bottom"]
	  }, [_c('text', {
	    staticClass: ["text-forget"],
	    on: {
	      "click": _vm.onClickForget
	    }
	  }, [_vm._v("忘记服务密码？")])])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 200 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._m(0), _c('loginView', {
	    staticClass: ["loginView"],
	    attrs: {
	      "types": 'mobileAuth',
	      "mobileNo": _vm._f("mobileFormatText")(_vm.mobileNo),
	      "inputValue": _vm.isShowPassword ? _vm.password : _vm.passwordFormat,
	      "onInput": _vm.onInput,
	      "onClickDelete": _vm.onClickDelete,
	      "onClickEye": _vm.onClickEye,
	      "onClickForget": _vm.onClickForget,
	      "isShowPassword": _vm.isShowPassword
	    }
	  }), _c('ccButton', {
	    staticClass: ["btn-commit"],
	    attrs: {
	      "title": '提交',
	      "onClick": _vm.clickCommit,
	      "isClick": _vm.isClick
	    }
	  }), _vm._m(1)], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["top"]
	  }, [_c('text', {
	    staticClass: ["text", "top-text"]
	  }, [_vm._v("手机认证是获取额度的必要条件，感谢您的配合。")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["bottom"]
	  }, [_c('text', {
	    staticClass: ["text", "bottom-text"]
	  }, [_vm._v("服务密码是指客户用以登录运营商（中国移动、中国联通、中国电信等）网上营业厅等身份识别密码，由6-8位阿拉伯数字组成。")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(202)
	)

	/* script */
	__vue_exports__ = __webpack_require__(203)

	/* template */
	var __vue_template__ = __webpack_require__(204)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/others/zmAuthPage.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6ade9047"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 202 */
/***/ (function(module, exports) {

	module.exports = {
	  "webview": {
	    "flex": 1
	  }
	}

/***/ }),
/* 203 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            url: ''
	        };
	    },

	    methods: {
	        start: function start(event) {
	            console.log('pagestart', event);
	        },
	        finish: function finish(event) {
	            console.log('pagefinish', event);
	            if (event.url.indexOf('zmauth/success') >= 0) {
	                // 认证成功, 返回
	                eventModule.wxFirePushCallback('channel_pushZMAuthPage', { result: true });
	                Vue.NaviHelper.push('pop');
	            }
	        },
	        error: function error(event) {
	            console.log('error', event);
	        }
	    },
	    computed: {},
	    created: function created() {},
	    mounted: function mounted() {
	        var authUrl = this.$getConfig().localData.authUrl; //分期金额

	        this.url = authUrl;

	        //            eventModule.getBaseInfo(function (e) {
	        //                that.userId = e.result.userId;
	        //                that.url ='http://gfbapp.vcash.cn/#/Ajqhapplyinstallment?userId='+that.userId+'&withdrawMoney='+ that.message +'&loanPeriods='+that.stages+'&token='+that.token;
	        //
	        //            });
	    },
	    destroy: function destroy() {}
	};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish,
	      "error": _vm.error
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(206)
	)

	/* script */
	__vue_exports__ = __webpack_require__(207)

	/* template */
	var __vue_template__ = __webpack_require__(208)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/others/bankList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-cb1dbc52"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 206 */
/***/ (function(module, exports) {

	module.exports = {
	  "cell": {
	    "height": 100,
	    "marginBottom": 20,
	    "paddingLeft": 30,
	    "paddingRight": 30
	  },
	  "item": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 0.5,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#A9A9A9"
	  },
	  "item-last": {
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 0
	  },
	  "image": {
	    "width": 60,
	    "height": 60
	  },
	  "text": {
	    "marginLeft": 30
	  }
	}

/***/ }),
/* 207 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {},
	    props: {},
	    data: function data() {
	        return {
	            isCredit: true
	        };
	    },

	    methods: {
	        onClick: function onClick(v) {
	            var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	            eventModule.wxFirePushCallback('channel_pushBankList', { result: v });
	        }
	    },
	    computed: {
	        bankList: function bankList() {
	            if (this.isCredit) {
	                return [{ bankCode: 'ICBC', bankName: '工商银行' }, { bankCode: 'CCB', bankName: '建设银行' }, { bankCode: 'ABC', bankName: '农业银行' }, { bankCode: 'CMB', bankName: '招商银行' }, { bankCode: 'BOC', bankName: '中国银行' }, { bankCode: 'CMBC', bankName: '民生银行' }, { bankCode: 'CEB', bankName: '光大银行' }, { bankCode: 'CGB', bankName: '广发银行' }, { bankCode: 'CITIC', bankName: '中信银行' }, { bankCode: 'CIB', bankName: '兴业银行' }, { bankCode: 'PAB', bankName: '平安银行' }, { bankCode: 'BJBANK', bankName: '北京银行' }, { bankCode: 'COMM', bankName: '交通银行' }, { bankCode: 'SPDB', bankName: '浦发银行' }, { bankCode: 'SHBANK', bankName: '上海银行' }, { bankCode: 'HXBANK', bankName: '华夏银行' }, { bankCode: 'PSBOC', bankName: '邮储银行' }];
	            } else {
	                return [{ bankCode: 'ICBC', bankName: '工商银行' }, { bankCode: 'CCB', bankName: '建设银行' }, { bankCode: 'ABC', bankName: '农业银行' }, { bankCode: 'CMB', bankName: '招商银行' }, { bankCode: 'BOC', bankName: '中国银行' }, { bankCode: 'CEB', bankName: '光大银行' }, { bankCode: 'CGB', bankName: '广发银行' }, { bankCode: 'CITIC', bankName: '中信银行' }, { bankCode: 'CIB', bankName: '兴业银行' }, { bankCode: 'PAB', bankName: '平安银行' }, { bankCode: 'BJBANK', bankName: '北京银行' }, { bankCode: 'COMM', bankName: '交通银行' }, { bankCode: 'SPDB', bankName: '浦发银行' }, { bankCode: 'SHBANK', bankName: '上海银行' }, { bankCode: 'HXBANK', bankName: '华夏银行' }, { bankCode: 'PSBOC', bankName: '邮储银行' }];
	            }
	        }
	    },
	    created: function created() {},
	    mounted: function mounted() {
	        var localData = this.$getConfig().localData;
	        this.isCredit = localData.isCredit;

	        console.log(this.bankList.length);
	    }
	};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('list', _vm._l((_vm.bankList), function(bank, index) {
	    return _c('cell', {
	      staticClass: ["cell"],
	      appendAsTree: true,
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('div', {
	      class: ['item' + (_vm.bankList.length == index + 1 ? '-last' : '')],
	      on: {
	        "click": function($event) {
	          _vm.onClick({
	            bankName: bank.bankName,
	            bankCode: bank.bankCode
	          })
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "src": 'WXLocal/bank_icon_' + bank.bankCode.toLowerCase()
	      }
	    }), _c('text', {
	      staticClass: ["text"]
	    }, [_vm._v(_vm._s(bank.bankName))])])])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(210)
	)

	/* script */
	__vue_exports__ = __webpack_require__(211)

	/* template */
	var __vue_template__ = __webpack_require__(216)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/contracts/personalInfoProtocal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-398e6621"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 210 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#ffffff",
	    "justifyContent": "space-between"
	  },
	  "scroller": {
	    "flex": 1
	  },
	  "contract_wrap": {
	    "padding": 40,
	    "color": "#333333"
	  },
	  "moreStyle": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "marginBottom": 20
	  },
	  "inline": {
	    "fontWeight": "bold",
	    "fontSize": 28
	  },
	  "text-justify": {
	    "lineHeight": 42,
	    "marginBottom": 20,
	    "fontSize": 28
	  },
	  "text-justify_small": {
	    "color": "#666666",
	    "fontSize": 24,
	    "lineHeight": 36,
	    "marginBottom": 10
	  },
	  "botWrap": {
	    "flexDirection": "row",
	    "justifyContent": "space-around",
	    "alignItems": "stretch",
	    "paddingTop": 20,
	    "paddingRight": 40,
	    "paddingLeft": 40,
	    "paddingBottom": 20
	  },
	  "btn": {
	    "width": 180,
	    "marginLeft": 0,
	    "marginRight": 0
	  },
	  "tar": {
	    "textAlign": "right"
	  }
	}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _uiButton = __webpack_require__(60);

	var _uiButton2 = _interopRequireDefault(_uiButton);

	var _grayButton = __webpack_require__(212);

	var _grayButton2 = _interopRequireDefault(_grayButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	exports.default = {
	    components: { uiButton: _uiButton2.default, grayButton: _grayButton2.default },
	    data: function data() {
	        return {
	            isAgreeFinish: false // 签字是否已经完成
	        };
	    },

	    methods: {
	        concel: function concel() {
	            //取消按钮
	            Vue.NaviHelper.push('pop');
	        },
	        agree: function agree() {
	            //同意按钮
	            console.log('跳转手写签名页:');
	            var that = this;
	            //                if(PageControllerObject.contractPage==1){     合同是否重签标记位（1为重签，0为正常签名）
	            //                    desc = 'txht';
	            //                }else {
	            //                    desc = 'xieyi';
	            //                }

	            Vue.NaviHelper.push('native/main/signature', {
	                title: '手写签名页',

	                'realName': this.$store.state.auth.realName,
	                'desc': 'xieyi', //
	                'customerId': this.$store.state.customerId,
	                'mobile': this.$store.state.mobile,
	                'sltAccountId': '', //WithdrawRecordObject.sltAccountId,  // 订单id-----------未知
	                'signatureType': '1' // 该合同页为固定值
	            }, 'channel_pushAgreePage', function (r) {
	                console.log('回调: ', r);
	                //                    that.$store.state.auth.bankCode = r
	            });
	            // 结束当前界面
	            if (this.$store.state.env.platform == 'android') {
	                Vue.NaviHelper.push('pop');
	            }
	        }
	    },
	    created: function created() {},

	    computed: {
	        realName: function realName() {
	            if (this.isAgreeFinish) {
	                return this.$store.state.auth.realName;
	            } else {
	                return '';
	            }
	        },
	        identityNo: function identityNo() {
	            return this.$store.state.auth.identityNo;
	        },
	        //签署时间，以前都是取手机时间
	        timeNow: function timeNow() {
	            var _now = new Date();
	            return _now.getFullYear() + '年' + (_now.getMonth() + 1) + '月' + _now.getDate() + '日' + ' ' + _now.getHours() + ':' + _now.getMinutes() + ':' + _now.getSeconds();
	        }
	    },
	    mounted: function mounted() {
	        //            this.timeNow = this.getTimeNow();

	        var localData = this.$getConfig().localData;
	        this.$store.state.mobile = localData.mobile;
	        this.$store.state.token = localData.token;
	        this.$store.state.auth.realName = localData.realName;
	        this.$store.state.auth.identityNo = localData.identityNo;
	        this.$store.state.auth.customerId = localData.customerId;
	        this.isAgreeFinish = localData.isAgreeFinish;
	    },
	    destroyed: function destroyed() {}
	};

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(213)
	)

	/* script */
	__vue_exports__ = __webpack_require__(214)

	/* template */
	var __vue_template__ = __webpack_require__(215)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/grayButton.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-693c8322"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 213 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "borderRadius": 8,
	    "color": "#303030",
	    "overflow": "hidden"
	  },
	  "text_normal": {
	    "flex": 1,
	    "height": 90,
	    "color": "#303030",
	    "textAlign": "center",
	    "lineHeight": 90,
	    "fontSize": 34,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 4,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#c5c5c5",
	    "color:active": "#ffffff",
	    "backgroundColor:active": "#c5c5c5"
	  },
	  "text_small": {
	    "flex": 1,
	    "height": 68,
	    "color": "#303030",
	    "textAlign": "center",
	    "lineHeight": 68,
	    "fontSize": 30,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 4,
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#c5c5c5",
	    "color:active": "#ffffff",
	    "backgroundColor:active": "#c5c5c5"
	  }
	}

/***/ }),
/* 214 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        title: {
	            type: String,
	            default: '我是按钮'
	        },
	        size: {
	            type: String,
	            default: 'normal'
	        },
	        onClick: {
	            type: Function
	        }

	    },
	    components: {},
	    data: function data() {
	        return {
	            styleObject: {
	                borderRadius: '8px'
	            }
	        };
	    },
	    created: function created() {
	        if (this.size == 'small') {
	            this.styleObject.borderRadius = '4px';
	            this.textClass = 'text_small';
	        } else {
	            this.styleObject.borderRadius = '8px';
	            this.textClass = 'text_normal';
	        }
	    },
	    mounted: function mounted() {},

	    computed: {}

	};

/***/ }),
/* 215 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.objClass]
	  }, [_c('text', {
	    class: [_vm.textClass],
	    style: _vm.styleObject,
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 216 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('div', {
	    staticClass: ["contract_wrap"]
	  }, [_vm._m(0), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("一、因本人（姓名：" + _vm._s(_vm.realName) + "，身份证号：" + _vm._s(_vm.identityNo) + "）存在贷款需求，通过被授权人申请贷款相关业务（包括不限于贷款、贷款咨询与服务、贷款担保等业务，下同），故本人不可撤销地授权被授权人：")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("1、有权在与开展的贷款业务相关的范围内向中国人民银行个人信用信息基础数据库（以下简称“人行数据库”）查询及使用授权人个人信息，包括基本信息和信用报告，并将本人之基本信息和信用记录发送给人行数据库。")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("2、有权向依法设立的征信机构、资信评估机构、身份信息验证机构、数据分析处理机构、或有关法律、监管机构许可的类似机构（以下统称“信用机构”，包括不限于前海征信、百度征信、芝麻信用等机构）、以及为本人申请的业务和产品提供必要技术和服务的被授权人或被授权人的合作机构（简称“被授权机构及其合作机构”，包括不限于中国对外经济贸易信托有限公司之FOTIC小微数据库）查询本人在信用机构、被授权机构及其合作机构的个人信息，包括基本信息和信用信息，并有权采集、保存以及向信用机构、被授权机构及其合作机构提供本人与被授权人之业务往来中提供或产生的个人信息。且本人亦授权信用机构、被授权机构及其合作机构有权采集、保存、整理、加工、使用其在本次贷款相关业务中通过合法途径获取的本人个人信息并依法对外提供。")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("二、为使被授权人能够履行上述授权事宜，授权人同意向被授权人提交有效身份证明文件以及被授权人要求的其他证明材料。")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("三、本人同意被授权人及信用机构、被授权机构及其合作机构将合法获取的本人个人信息用于下述范围：")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("1、受理、审批、办理贷款相关业务，贷后服务和管理、以及在该业务存续期间监控本人的信用变化；")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("2、向本人推荐产品及服务、开展市场调查与信息数据分析；")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("3、其他经过本人同意的合法用途。")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("四、本授权书自本人签字之日起生效，至本人通过被授权人办理的所有贷款相关业务之应付款项完全结清且本人向被授权人送达签署解除授权的书面文件之日终止。")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("五、本人同意：本次授权的被授权人可包括下列主体中的一个或者多个：")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("上海静安维信小额贷款有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("成都维仕小额贷款有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("青岛市市北区维信小额贷款有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("中国对外经济贸易信托有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("维仕担保有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("上海维信荟智金融科技有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("上海维信智荟互联网金融信息服务有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("杭州维仕金融服务有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("杭州维仕信息技术有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("维信融资租赁（苏州）有限公司")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("杭州银行")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("晋城银行")]), _c('text', {
	    staticClass: ["text-justify_small"]
	  }, [_vm._v("恒丰银行")]), _c('text', {
	    staticClass: ["text-justify"]
	  }, [_vm._v("\n                本人已知晓并认可：上述被授权人若出现名称变更，不视为被授权人变更，无需本人另行签署授权书；若因为本人所办理贷款之实际情况而需由上述被授权人之关联企业提供相关服务的，则亦视为本人通过签署本授权书已授权该等关联企业，无需本人另行签署授权书。")]), _c('text', {
	    staticClass: ["text-justify", "tar"]
	  }, [_vm._v("授  权  人  : " + _vm._s(_vm.realName))]), _c('text', {
	    staticClass: ["text-justify", "tar"]
	  }, [_vm._v("签署时间：" + _vm._s(_vm.timeNow))])])]), (!_vm.isAgreeFinish) ? _c('div', {
	    staticClass: ["botWrap"]
	  }, [_c('grayButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "size": 'small',
	      "title": '取消',
	      "onClick": _vm.concel
	    }
	  }), _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "size": 'small',
	      "title": '同意',
	      "onClick": _vm.agree
	    }
	  })], 1) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["moreStyle"]
	  }, [_c('text', {
	    staticClass: ["inline"]
	  }, [_vm._v("致：被授权人")]), _c('text', [_vm._v("（被授权人明细见第五条）")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(218)
	)

	/* script */
	__vue_exports__ = __webpack_require__(219)

	/* template */
	var __vue_template__ = __webpack_require__(224)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/linkman/linkman.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-19906d62"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 218 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#eeeeee"
	  },
	  "scroller": {
	    "flex": 1,
	    "justifyContent": "space-between"
	  },
	  "list": {
	    "marginBottom": 28,
	    "backgroundColor": "#ffffff",
	    "borderBottomColor": "#dddddd",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid"
	  },
	  "botWrap": {
	    "flex": 1,
	    "marginLeft": 50,
	    "marginRight": 50,
	    "justifyContent": "flex-end",
	    "alignItems": "stretch",
	    "paddingBottom": 20
	  },
	  "btn": {
	    "marginLeft": 0,
	    "marginRight": 0,
	    "marginBottom": 20
	  },
	  "tip": {
	    "alignItems": "center"
	  },
	  "tip_text": {
	    "fontSize": 24,
	    "color": "#7E7E7E",
	    "lineHeight": 38
	  }
	}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _linkInfo = __webpack_require__(220);

	var _linkInfo2 = _interopRequireDefault(_linkInfo);

	var _uiButton = __webpack_require__(60);

	var _uiButton2 = _interopRequireDefault(_uiButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	var globalEvent = weex.requireModule('globalEvent');
	var modal = weex.requireModule('modal');

	exports.default = {
	    components: { linkInfo: _linkInfo2.default, uiButton: _uiButton2.default },
	    data: function data() {
	        return {
	            link1Relation: "",
	            link2Relation: "",
	            isClick: false,
	            curName: "",
	            curPhone: ""
	        };
	    },

	    methods: {
	        onChangeLink1Name: function onChangeLink1Name(e) {
	            //联系人1姓名
	            this.$store.state.linkInfo.link1Name = e.value;
	            this.submitVerify();
	        },
	        onChangeLink2Name: function onChangeLink2Name(e) {
	            //联系人2姓名
	            this.$store.state.linkInfo.link2Name = e.value;
	            this.submitVerify();
	        },
	        onChangeLink1Phone: function onChangeLink1Phone(e) {
	            //联系人1手机号
	            this.$store.state.linkInfo.link1Phone = this.paddingSpace(e.value);
	            this.submitVerify();
	        },
	        onChangeLink2Phone: function onChangeLink2Phone(e) {
	            //联系人2手机号
	            this.$store.state.linkInfo.link2Phone = this.paddingSpace(e.value);
	            this.submitVerify();
	        },
	        onBlurRegPhone1: function onBlurRegPhone1(e) {
	            //联系人1手机号失去焦点验证
	            this.regPhone(e.value, 'link1Phone');
	        },
	        onBlurRegPhone2: function onBlurRegPhone2(e) {
	            //联系人2手机号失去焦点验证
	            this.regPhone(e.value, 'link2Phone');
	        },
	        choseLink1: function choseLink1(e) {
	            //打开手机通讯录
	            this.curName = 'link1Name';
	            this.curPhone = 'link1Phone';
	            eventModule.openAddressBook();
	        },
	        choseLink2: function choseLink2(e) {
	            //打开手机通讯录
	            this.curName = 'link2Name';
	            this.curPhone = 'link2Phone';
	            eventModule.openAddressBook();
	        },
	        openRelationCard1: function openRelationCard1() {
	            ////联系人1打开关系弹窗
	            this.openRelation('link1Relation', 'link1Phone');
	        },
	        openRelationCard2: function openRelationCard2() {
	            ////联系人2打开关系弹窗
	            this.openRelation('link2Relation', 'link2Phone');
	        },
	        toSubmit: function toSubmit() {
	            //点击按钮提交
	            if (this.isClick && this.isHasCom()) {
	                console.log('可以提交 ');
	                var that = this;
	                var localData = this.$getConfig().localData;
	                this.$store.dispatch("LINKMAN_SAVE", { activeFlag: localData.activeFlag, callback: function callback(res) {
	                        console.log(res);
	                        modal.alert({
	                            message: '提交 succ',
	                            duration: 0.5
	                        });
	                    } });
	            }
	        },
	        regPhone: function regPhone(val, model, callback) {
	            //验证手机格式
	            var that = this;
	            if (val != '' && !/^1\d{10}$/.test(val.replace(/\s+/g, ""))) {
	                modal.alert({
	                    message: '请输入正确手机号码',
	                    duration: 0.5
	                }, function (value) {
	                    that.$store.state.linkInfo[model] = '';
	                    that.submitVerify();
	                });
	            } else {
	                callback && callback();
	            }
	        },
	        openRelation: function openRelation(model, phone) {
	            //打开关系弹窗
	            var that = this;
	            var val = that.$store.state.linkInfo[phone];
	            that.regPhone(val, phone, function () {
	                //对应手机号为空或者正确，才可以点击
	                var content = {
	                    title: "请选择联系人关系",
	                    items: ["父母", "子女", "配偶", "兄弟姐妹", "朋友", "同事"]
	                };
	                eventModule.wxSelectListView(content, that[model], function (e) {
	                    that[model] = e.result;
	                    that.$store.state.linkInfo[model] = that.format(e.result);
	                    that.submitVerify();
	                });
	            });
	        },
	        format: function format(val) {
	            switch (val) {
	                case "父母":
	                    return "fm";
	                case "子女":
	                    return "zn";
	                case "配偶":
	                    return "po";
	                case "兄弟姐妹":
	                    return "xdjm";
	                case "朋友":
	                    return "py";
	                case "同事":
	                    return "ts";
	            }
	        },
	        paddingSpace: function paddingSpace(str) {
	            //手机间隔格式化133 3333 3333
	            return str.replace(/\s/g, '').replace(/(^\d{3})(?=\d)/g, "$1 ").replace(/(\d{4})(?=\d)/g, "$1 ");
	        },
	        submitVerify: function submitVerify() {
	            //是否可提交
	            var linkInfo = this.$store.state.linkInfo;
	            var that = this;
	            if (linkInfo.link1Name && regPh(linkInfo.link1Phone) && linkInfo.link1Relation && linkInfo.link2Name && regPh(linkInfo.link2Phone) && linkInfo.link2Relation) {
	                that.isClick = true;
	            } else {
	                that.isClick = false;
	            }
	            function regPh(num) {
	                return (/^1\d{10}$/.test(num.replace(/\s+/g, ""))
	                );
	            }
	        },
	        isHasCom: function isHasCom() {
	            //联系人信息 姓名 电话不能重复，配偶关系只能为一个
	            var linkInfo = this.$store.state.linkInfo;
	            if (isHasPOTwo()) {
	                modal.alert({
	                    message: '不能有2个配偶',
	                    duration: 0.5
	                });
	                return false;
	            } else if (linkInfo.link1Name == linkInfo.link2Name || linkInfo.link1Phone == linkInfo.link2Phone) {
	                modal.alert({
	                    message: '联系人信息请勿重复',
	                    duration: 0.5
	                });
	                return false;
	            }
	            return true;
	            function isHasPOTwo() {
	                var flag = false,
	                    arr = [];
	                for (var i in linkInfo) {
	                    if (linkInfo[i] == 'po') {
	                        arr.push(linkInfo[i]);
	                    }
	                }
	                if (arr.length > 1) {
	                    flag = true;
	                }
	                return flag;
	            }
	        }
	    },
	    created: function created() {},

	    computed: {},
	    mounted: function mounted() {
	        var that = this;
	        globalEvent.addEventListener('WXContact', function (r) {
	            r.phone && (r.phone = r.phone.replace(/^86/, ''));
	            if (!/^[\u4E00-\u9FA5]{1,4}$/.test(r.name)) {
	                //姓名不是4位以内汉字，包含4位
	                modal.alert({
	                    message: '联系人姓名有误',
	                    duration: 0.5
	                }, function (value) {});
	                return;
	            } else if (!r.phone) {
	                modal.alert({
	                    message: '手机号不正确',
	                    duration: 0.5
	                }, function (value) {});
	                return;
	            } else if (!/^1\d{10}$/.test(r.phone)) {
	                //电话格式有误
	                modal.alert({
	                    message: '手机号不正确',
	                    duration: 0.5
	                }, function (value) {});
	                return;
	            } else {
	                //导入成功
	                that.$store.state.linkInfo[that.curName] = r.name;
	                that.$store.state.linkInfo[that.curPhone] = r.phone;
	            }
	        });
	    },
	    destroyed: function destroyed() {
	        globalEvent.removeEventListener('WXContact');
	    }
	};

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(221)
	)

	/* script */
	__vue_exports__ = __webpack_require__(222)

	/* template */
	var __vue_template__ = __webpack_require__(223)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/linkInfo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-80d81196"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 221 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "backgroundColor": "#FFFFFF"
	  },
	  "content": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "marginLeft": 24,
	    "height": 90
	  },
	  "content-left": {
	    "width": 248,
	    "height": 88,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "text": {
	    "fontSize": 30,
	    "color": "#7E7E7E",
	    "justifyContent": "flex-start"
	  },
	  "content-right": {
	    "position": "relative",
	    "flex": 1,
	    "height": 88,
	    "paddingTop": 23
	  },
	  "content-right-input": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "paddingRight": 24
	  },
	  "input": {
	    "flex": 1,
	    "height": 42,
	    "lineHeight": 42,
	    "color": "#303030",
	    "fontSize": 30,
	    "placeholderColor": "#c2c2c2"
	  },
	  "text-placeholder": {
	    "height": 42,
	    "lineHeight": 42,
	    "fontSize": 30,
	    "color": "#c2c2c2"
	  },
	  "arrow": {
	    "marginLeft": 10
	  },
	  "line": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2,
	    "backgroundColor": "#dddddd"
	  },
	  "choseLink": {
	    "width": 44,
	    "height": 44,
	    "borderWidth": 2,
	    "borderColor": "#000000",
	    "borderStyle": "solid",
	    "backgroundColor": "#333333"
	  }
	}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        //�Ƿ���ʾ�»���
	        isShowBB: {
	            type: Boolean,
	            default: false
	        },
	        // ���ֲ�ͬ��cell
	        types: {
	            required: true,
	            type: String,
	            default: ''
	        },
	        // ��ʾ�����ı�
	        title: {
	            type: String,
	            default: ''
	        },
	        // ��ʾռλ�ı�
	        placeholder: {
	            type: String,
	            default: '������...'
	        },
	        maxLength: {
	            type: Number
	        },
	        // ��ʾѡ��ı�, ѡ�к��չʾ
	        selectValue: {
	            type: String,
	            default: ''
	        },
	        // ��ʾ������ı�
	        inputValue: {
	            type: String,
	            default: ''
	        },
	        // ����cell����¼�
	        onClick: {
	            type: Function
	        },
	        // ����������ı�����
	        onChange: {
	            type: Function
	        },
	        onBlur: {
	            type: Function
	        },
	        onInput: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {},
	    update: function update() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 223 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["content"]
	  }, [_c('div', {
	    staticClass: ["content-left"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["content-right"]
	  }, [(this.types === 'text') ? _c('div', {
	    staticClass: ["content-right-input"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "change": _vm.onChange,
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onInput]
	    }
	  }), _c('ccImage', {
	    staticClass: ["choseLink"],
	    attrs: {
	      "src": 'WXLocal/wx_add',
	      "onClick": _vm.onClick
	    }
	  })], 1) : _vm._e(), (this.types === 'tel') ? _c('div', {
	    staticClass: ["content-right-input"]
	  }, [_c('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "change": _vm.onChange,
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onInput]
	    }
	  })]) : _vm._e(), (this.types === 'select') ? _c('div', {
	    staticClass: ["content-right-input"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_c('div', [(_vm.selectValue !== '') ? _c('text', {
	    staticClass: ["input"]
	  }, [_vm._v(_vm._s(_vm.selectValue))]) : _c('text', {
	    staticClass: ["text-placeholder"]
	  }, [_vm._v(_vm._s(_vm.placeholder))])]), _c('ccImage', {
	    staticClass: ["arrow"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  })], 1) : _vm._e()]), (_vm.isShowBB) ? _c('div', {
	    staticClass: ["line"]
	  }) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 224 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('div', [_c('div', {
	    staticClass: ["list"]
	  }, [_c('linkInfo', {
	    attrs: {
	      "types": 'text',
	      "title": '联系人1姓名',
	      "placeholder": '请输入姓名',
	      "isShowBB": true,
	      "inputValue": this.$store.state.linkInfo.link1Name,
	      "onInput": _vm.onChangeLink1Name,
	      "onClick": _vm.choseLink1
	    }
	  }), _c('linkInfo', {
	    attrs: {
	      "types": 'tel',
	      "title": '联系电话',
	      "placeholder": '请输入11位手机号码',
	      "maxLength": 13,
	      "isShowBB": true,
	      "inputValue": this.$store.state.linkInfo.link1Phone,
	      "onInput": _vm.onChangeLink1Phone,
	      "onChange": _vm.onBlurRegPhone1
	    }
	  }), _c('linkInfo', {
	    attrs: {
	      "types": 'select',
	      "title": '关系选择',
	      "placeholder": '请选择关系',
	      "selectValue": _vm.link1Relation,
	      "onClick": _vm.openRelationCard1
	    }
	  })], 1), _c('div', {
	    staticClass: ["list"]
	  }, [_c('linkInfo', {
	    attrs: {
	      "types": 'text',
	      "title": '联系人2姓名',
	      "placeholder": '请输入姓名',
	      "isShowBB": true,
	      "inputValue": this.$store.state.linkInfo.link2Name,
	      "onInput": _vm.onChangeLink2Name,
	      "onClick": _vm.choseLink2
	    }
	  }), _c('linkInfo', {
	    attrs: {
	      "types": 'tel',
	      "title": '联系电话',
	      "placeholder": '请输入11位手机号码',
	      "maxLength": 13,
	      "isShowBB": true,
	      "inputValue": this.$store.state.linkInfo.link2Phone,
	      "onInput": _vm.onChangeLink2Phone,
	      "onChange": _vm.onBlurRegPhone2
	    }
	  }), _c('linkInfo', {
	    attrs: {
	      "types": 'select',
	      "title": '关系选择',
	      "placeholder": '请选择关系',
	      "selectValue": _vm.link2Relation,
	      "onClick": _vm.openRelationCard2
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["botWrap"]
	  }, [_vm._m(0), _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": _vm.确认提交,
	      "onClick": _vm.toSubmit,
	      "flag": _vm.isClick ? 'active' : 'disabled'
	    }
	  })], 1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["tip"]
	  }, [_c('text', {
	    staticClass: ["tip_text"]
	  }, [_vm._v("填写真实联系人，有利于您的额度提现，非常感谢！")]), _c('text', {
	    staticClass: ["tip_text"]
	  }, [_vm._v("确认提交后，信息不可修改。")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(226)
	)

	/* script */
	__vue_exports__ = __webpack_require__(227)

	/* template */
	var __vue_template__ = __webpack_require__(240)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/withdraw/withdraw.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3b1ed540"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 226 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#f4f4f4"
	  },
	  "scroller": {
	    "flex": 1
	  },
	  "wd_info": {
	    "backgroundColor": "#ffffff"
	  },
	  "wdi_title": {
	    "paddingTop": 24,
	    "paddingLeft": 24,
	    "flexDirection": "row"
	  },
	  "wdi_title1": {
	    "fontSize": 28,
	    "color": "#303030"
	  },
	  "wdi_title2": {
	    "fontSize": 28,
	    "color": "#dddddd"
	  },
	  "form_list_wrap2": {
	    "paddingLeft": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "info_tip": {
	    "fontSize": 22,
	    "color": "#7E7E7E",
	    "paddingTop": 16,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "height": 100,
	    "lineHeight": 30
	  },
	  "form_list1": {
	    "paddingLeft": 24,
	    "paddingRight": 24
	  },
	  "ui-border-top": {
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#dfdfdf"
	  },
	  "form_list2": {
	    "paddingRight": 24
	  },
	  "info_tip2": {
	    "fontSize": 24,
	    "color": "#C5C5C5",
	    "height": 50
	  },
	  "agreeBtn": {
	    "marginBottom": 20
	  },
	  "botWrap": {
	    "marginLeft": 58,
	    "marginRight": 48,
	    "justifyContent": "flex-end",
	    "alignItems": "stretch",
	    "marginBottom": 32
	  },
	  "btn": {
	    "marginRight": 0
	  }
	}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	var _agreeBtn = __webpack_require__(96);

	var _agreeBtn2 = _interopRequireDefault(_agreeBtn);

	var _uiButton = __webpack_require__(60);

	var _uiButton2 = _interopRequireDefault(_uiButton);

	var _uiBank = __webpack_require__(228);

	var _uiBank2 = _interopRequireDefault(_uiBank);

	var _uiSum = __webpack_require__(232);

	var _uiSum2 = _interopRequireDefault(_uiSum);

	var _flistBtw = __webpack_require__(236);

	var _flistBtw2 = _interopRequireDefault(_flistBtw);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var globalEvent = weex.requireModule('globalEvent');
	var eventModule = weex.requireModule('event');

	exports.default = {
	    components: { ccImage: _ccImage2.default, agreeBtn: _agreeBtn2.default, uiButton: _uiButton2.default, uiBank: _uiBank2.default, uiSum: _uiSum2.default, flistBtw: _flistBtw2.default },
	    data: function data() {
	        return {
	            withdrawMoney: '', //申请提现金额
	            isTipShow: false, //每月预计还款 点击 ! 是否显示提示信息
	            formalitiesRate: '', //平台推荐费 费率
	            showTrialRepay: false, //点击借款期限，展示分期详情
	            paymentType: '', //选择分期期限
	            firstPeriodAmount: 0, //首月需还总金额
	            periodTotalAmount: 0, //需还总金额
	            repaymentDate: '', //每月还款日
	            bindCardSource: '' //2:允许重新绑卡
	        };
	    },

	    methods: {
	        init: function init() {
	            var that = this;

	            that.$store.dispatch('WITHDRAW_INIT', {
	                callback: function callback(res) {
	                    that.$store.state.withdraw.cardBank = res.cardBank;
	                    that.$store.state.withdraw.bankCode = res.bankCode;
	                    that.$store.state.withdraw.cardNo = res.cardNo;
	                    that.$store.state.withdraw.cardFlag = res.cardFlag; //绑卡状态
	                    that.$store.state.withdraw.loanType = res.loanType; //贷款类型
	                    that.$store.state.withdraw.availableAmount = res.availableAmount; //贷款类型
	                    that.formalitiesRate = res.formalitiesRate; //贷款类型
	                    that.bindCardSource = res.bindCardSource; //2:允许重新绑卡


	                    if (that.$store.state.withdraw.availableAmount < 1000) {
	                        that.$store.state.withdraw.withdrawMoney = 0;
	                    }
	                    that.withdrawMoney = thousandSeparator(that.$store.state.withdraw.withdrawMoney);
	                }
	            });
	            eventModule.getBaseInfo(function (res) {
	                //从app获取信息
	                console.log('从app获取信息~~~~~~~~', res);
	                that.$store.state.withdraw.cutomerId = res.result.cutomerId;
	            });
	        },
	        bindBank: function bindBank() {
	            //选择银行卡
	            console.log('选择银行卡');
	            var that = this;
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_bindBank', { title: '银行卡绑定', cardFlag: that.$store.state.withdraw.cardFlag }, 'channel_pushBankList', function (r) {
	                console.log('你点击的银行是: ', r.result);
	            });
	        },

	        //输入金额变化
	        withdrawChange: function withdrawChange(e) {
	            var that = this;
	            if (!e.value) return;
	            that.paymentType = '';
	            that.$store.state.withdraw.paymentType = '';
	            var withdrawM = clearThousand(that.withdrawMoney);
	            if (withdrawM > Number(that.$store.state.withdraw.availableAmount)) {
	                //输入超过最大可提现金额，显示最大可提现金额
	                withdrawM = e.value = thousandSeparator(that.$store.state.withdraw.availableAmount);
	                Vue.TipHelper.showHub('1', '请不要超过可用额度');
	            }
	            that.withdrawMoney = regexNum(e.value);

	            function regexNum(str) {
	                var regex = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
	                var str = str.replace(/,/g, "");
	                if (str.indexOf(".") == -1) {
	                    str = str.replace(regex, '$1,');
	                } else {
	                    var newStr = str.split('.');
	                    var str_2 = newStr[0].replace(regex, '$1,');

	                    if (newStr[1].length <= 1) {
	                        //小数点后只有一位时
	                        str = str_2 + '.' + newStr[1];
	                    } else if (newStr[1].length > 1) {
	                        //小数点后两位以上时
	                        var decimals = newStr[1].substr(0, 2);
	                        str = str_2 + '.' + decimals;
	                    }
	                }
	                return str;
	            };
	        },

	        //输入框获取焦点
	        withdrawFocus: function withdrawFocus(e) {
	            var that = this;
	            e.value = '';
	            that.withdrawMoney = '';
	        },

	        //输入框失去焦点
	        withdrawBlur: function withdrawBlur(e) {
	            var that = this;
	            var withdrawM = clearThousand(that.withdrawMoney);
	            if (withdrawM > Number(that.$store.state.withdraw.availableAmount)) {
	                //输入超过最大可提现金额，显示最大可提现金额
	                withdrawM = thousandSeparator(that.$store.state.withdraw.availableAmount);
	            } else if (withdrawM < 1000) {
	                withdrawM = thousandSeparator('1000');
	            } else if (Number(withdrawM) % 100 != 0) {
	                Vue.TipHelper.showHub('1', '请输入100的整数倍');
	                withdrawM = Math.floor(Number(withdrawM) / 100) * 100;
	            }
	            that.$store.state.withdraw.withdrawMoney = that.withdrawMoney = String(withdrawM);
	        },
	        sumClickBind: function sumClickBind() {
	            //已绑卡，提现金额小于1000元
	            if (this.$store.state.withdraw.availableAmount < 1000) {
	                Vue.TipHelper.showHub('1', '您的可提现金额小于1000元');
	            }
	        },
	        sumClickUnBind: function sumClickUnBind() {
	            //未绑卡
	            Vue.TipHelper.showHub('1', '您还没有绑卡喔');
	        },
	        minusClick: function minusClick() {
	            // 减点击
	            var that = this;
	            var munusSum = toInt(clearThousand(that.withdrawMoney));
	            if (munusSum > 1000) {
	                that.withdrawMoney = thousandSeparator(munusSum - 100);
	            } else {
	                that.withdrawMoney = thousandSeparator(1000);
	            }
	        },
	        plusClick: function plusClick() {
	            // 加点击
	            var that = this;
	            var munusSum = toInt(clearThousand(that.withdrawMoney));
	            if (munusSum < 1000) {
	                that.withdrawMoney = thousandSeparator(1000);
	            } else if (munusSum < that.$store.state.withdraw.availableAmount) {
	                that.withdrawMoney = thousandSeparator(munusSum + 100);
	            } else {
	                that.withdrawMoney = thousandSeparator(that.$store.state.withdraw.availableAmount);
	            }
	            console.log(that.withdrawMoney);
	        },
	        chosePayment: function chosePayment() {
	            //选择分几期
	            var that = this;
	            var withdrawM = clearThousand(that.withdrawMoney);
	            if (withdrawM > Number(that.$store.state.withdraw.availableAmount)) {
	                //输入超过最大可提现金额，显示最大可提现金额
	                withdrawM = thousandSeparator(that.$store.state.withdraw.availableAmount);
	                that.$store.state.withdraw.withdrawMoney = that.withdrawMoney = String(withdrawM);
	            } else if (withdrawM < 1000) {
	                Vue.TipHelper.showHub('1', '最低借款额为1000元哦！');
	                withdrawM = thousandSeparator('1000');
	                that.$store.state.withdraw.withdrawMoney = that.withdrawMoney = String(withdrawM);
	                return;
	            } else if (Number(withdrawM) % 100 != 0) {
	                Vue.TipHelper.showHub('1', '请输入100的整数倍');
	                withdrawM = Math.floor(Number(withdrawM) / 100) * 100;
	                that.$store.state.withdraw.withdrawMoney = that.withdrawMoney = String(withdrawM);
	                return;
	            }

	            var content = {
	                title: "请选择借款期限",
	                items: ["3期", "6期", "12期"]
	            };

	            eventModule.wxSelectListView(content, this.selectEdu, function (e) {
	                that.$store.state.withdraw.paymentType = that.paymentType = e.result.substring(0, e.result.length - 1);

	                that.$store.dispatch('TRIALREPAY_SHOW', {
	                    callback: function callback(res) {
	                        console.log(res);
	                        res.forEach(function (e, i) {
	                            that.periodTotalAmount += Number(e.eachPeriodTotalAmount) * 100; //非整数相加异常
	                        });
	                        that.periodTotalAmount = that.periodTotalAmount / 100;
	                        that.firstPeriodAmount = res[0].eachPeriodTotalAmount;
	                        that.$store.state.withdraw.scheduleAmount = res[1].eachPeriodTotalAmount; //分期每期应还金额  分期每期应还金额取第二期
	                        var repayDay = new Date(res[0].repaymentDate.replace(/\-/g, "/")).getDate();
	                        that.repaymentDate = '每月' + repayDay + '日';
	                        that.showTrialRepay = true;
	                    }
	                });
	            });
	        },
	        toggleTip: function toggleTip() {
	            //点击 ！ 切换显示提示信息
	            this.isTipShow = !this.isTipShow;
	        },
	        checkContract: function checkContract() {
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_withdrawcontract', { title: '合同', stages: '' }, '', function (r) {});
	        },
	        toSubmit: function toSubmit() {
	            //立即提现  需要app端配合 添加密码框
	            var that = this;
	            if (that.formalities) {
	                that.$store.dispatch('WITHDRAW_SAVE', {
	                    callback: function callback(res) {
	                        console.log(res);
	                    }
	                });
	            }
	        }
	    },
	    mounted: function mounted() {
	        var that = this;
	        that.init();

	        eventModule.setEnableBack(1, 0); //返回按钮监听 WXback 方法
	        globalEvent.addEventListener('WXback', function (e) {
	            Vue.NaviHelper.push('root'); //杀掉进程，返回到app钱包
	            var platform = that.$store.state.env.platform;

	            if (platform == 'iOS') {
	                slider.remveCardView();
	            }
	        });
	    },

	    computed: {
	        formalities: function formalities() {
	            var that = this;
	            that.showTrialRepay = false;
	            that.paymentType = '';
	            that.$store.state.withdraw.paymentType = '';
	            return thousandSeparator2(clearThousand(that.withdrawMoney) * that.formalitiesRate);
	        },
	        inputColor: function inputColor() {
	            var that = this;
	            if (that.$store.state.withdraw.paymentType != '') {
	                return '#303030';
	            } else {
	                return '#C2C2C2';
	            }
	        }

	    },
	    created: function created() {},
	    destroyed: function destroyed() {
	        globalEvent.removeEventListener('WXback');
	    }
	};

	function thousandSeparator(num) {
	    //千分位
	    var num = String(String(num).replace(",", ""));
	    var re = /(-?\d+)(\d{3})/;
	    while (re.test(num)) {
	        num = num.replace(re, "$1,$2");
	    }
	    return num;
	}
	function thousandSeparator2(num) {
	    //千分位 小数点后2位
	    var num = String(Number(String(num).replace(",", "")).toFixed(2));
	    var re = /(-?\d+)(\d{3})/;
	    while (re.test(num)) {
	        num = num.replace(re, "$1,$2");
	    }
	    return num;
	}
	function clearThousand(num) {
	    //去除千分位
	    return String(num).replace(/,/g, "");
	}
	function toInt(num) {
	    //舍去不足百的金额
	    return Math.floor(Number(num) / 100) * 100;
	}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(229)
	)

	/* script */
	__vue_exports__ = __webpack_require__(230)

	/* template */
	var __vue_template__ = __webpack_require__(231)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/uiBank.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-7e12779d"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 229 */
/***/ (function(module, exports) {

	module.exports = {
	  "wdbank_header": {
	    "position": "relative",
	    "height": 240,
	    "width": 750
	  },
	  "wdbankh_bg": {
	    "position": "absolute",
	    "left": 1,
	    "right": 1,
	    "top": 10,
	    "width": 748,
	    "height": 230
	  },
	  "wdbankh_wrap": {
	    "width": 702,
	    "height": 190,
	    "marginTop": 30,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "borderRadius": 4
	  },
	  "wdbankhw_icon": {
	    "position": "absolute",
	    "left": 24,
	    "top": 50
	  },
	  "wdbankhw_iconbg": {
	    "position": "absolute",
	    "right": 63,
	    "top": 0
	  },
	  "wdbankhw_info": {
	    "position": "absolute",
	    "left": 138,
	    "top": 47
	  },
	  "wdbankhwi_bank": {
	    "fontSize": 32,
	    "color": "#303030",
	    "marginBottom": 24
	  },
	  "wdbankhwi_nobank": {
	    "fontSize": 32,
	    "color": "#E2262A",
	    "marginBottom": 24
	  },
	  "wdbankhwi_sum_state": {
	    "fontSize": 28,
	    "color": "#303030"
	  },
	  "wdbankhwi_sum": {
	    "fontSize": 28,
	    "color": "#484848"
	  },
	  "wdbankhw_href": {
	    "position": "absolute",
	    "width": 15,
	    "height": 26,
	    "top": 82,
	    "right": 24
	  },
	  "mb-24": {
	    "marginBottom": 24
	  },
	  "ui-fd-row": {
	    "flexDirection": "row"
	  },
	  "wdbankhwi_sum_statet": {
	    "color": "#303030"
	  }
	}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        //是否已绑卡
	        isBind: {
	            type: Boolean,
	            default: true
	        },
	        //是否可以绑卡
	        isCanBind: {
	            type: Boolean,
	            default: false
	        },
	        //银行名称
	        cardBank: {
	            type: String,
	            default: ''
	        },
	        //银行code
	        bankCode: {
	            type: String,
	            default: ''
	        },
	        //可提现金额
	        anount: {
	            type: String,
	            default: ''
	        },
	        //点击事件
	        onClick: {
	            type: Function
	        },
	        types: {
	            type: String,
	            default: 'common'
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {},

	    computed: {
	        icon: function icon() {
	            return this.bankCode.toLowerCase();
	        }
	    },
	    watch: {},
	    update: function update() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 231 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["wdbank_header"]
	  }, [_c('image', {
	    staticClass: ["wdbankh_bg"],
	    attrs: {
	      "src": "WXLocal/wx_bind_bank_card"
	    }
	  }), _c('div', {
	    staticClass: ["wdbankh_wrap"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(_vm.isBind) ? _c('ccImage', {
	    staticClass: ["wdbankhw_icon"],
	    attrs: {
	      "src": 'WXLocal/ic_bank' + _vm.icon
	    }
	  }) : _vm._e(), (!_vm.isBind) ? _c('ccImage', {
	    staticClass: ["wdbankhw_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_no_tied_card'
	    }
	  }) : _vm._e(), _c('div', {
	    staticClass: ["wdbankhw_info"]
	  }, [(_vm.types == 'common') ? _c('div', [(_vm.isBind) ? _c('text', {
	    staticClass: ["wdbankhwi_bank"]
	  }, [_vm._v(_vm._s(_vm.cardBank) + "（" + _vm._s(_vm.bankCode) + "）")]) : _c('text', {
	    staticClass: ["wdbankhwi_nobank"]
	  }, [_vm._v("您暂未绑定银行卡")]), _c('text', {
	    staticClass: ["wdbankhwi_sum"]
	  }, [_vm._v("可提现金额" + _vm._s(_vm._f("thousandSeparator")(_vm.anount)))])]) : _vm._e(), (_vm.types == 'state') ? _c('div', [_c('text', {
	    staticClass: ["wdbankhwi_sum_state", "mb-24"]
	  }, [_vm._v("到账银行：" + _vm._s(_vm.cardBank) + "（" + _vm._s(_vm.bankCode) + "）")]), _c('text', {
	    staticClass: ["wdbankhwi_sum_state", "ui-fd-row"]
	  }, [_vm._v("提现金额："), _c('text', {
	    staticClass: ["wdbankhwi_sum_statet"]
	  }, [_vm._v(_vm._s(_vm._f("thousandSeparator")(_vm.anount)))])])]) : _vm._e()]), (_vm.isBind) ? _c('ccImage', {
	    staticClass: ["wdbankhw_iconbg"],
	    attrs: {
	      "src": 'WXLocal/ic_bank_dark_' + _vm.icon
	    }
	  }) : _vm._e(), (_vm.isCanBind) ? _c('ccImage', {
	    staticClass: ["wdbankhw_href"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  }) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(233)
	)

	/* script */
	__vue_exports__ = __webpack_require__(234)

	/* template */
	var __vue_template__ = __webpack_require__(235)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/uiSum.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-08304d0c"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 233 */
/***/ (function(module, exports) {

	module.exports = {
	  "wdsum_wrap": {
	    "marginTop": 20,
	    "marginBottom": 20,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "height": 88,
	    "borderColor": "#C5C5C5",
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderRadius": 4,
	    "flexDirection": "row"
	  },
	  "wdsumw_minus": {
	    "color": "#C5C5C5",
	    "width": 88,
	    "height": 88,
	    "borderRightWidth": 1,
	    "borderRightColor": "#C5C5C5",
	    "borderRightStyle": "solid",
	    "textAlign": "center",
	    "lineHeight": 88,
	    "fontSize": 40
	  },
	  "wdsumw_plus": {
	    "color": "#C5C5C5",
	    "width": 88,
	    "height": 88,
	    "borderLeftWidth": 1,
	    "borderLeftColor": "#C5C5C5",
	    "borderLeftStyle": "solid",
	    "textAlign": "center",
	    "lineHeight": 88,
	    "fontSize": 40
	  },
	  "wdsum_in": {
	    "flex": 1,
	    "fontSize": 36,
	    "color": "#303030",
	    "textAlign": "center"
	  },
	  "wdsum_intext": {
	    "lineHeight": 88
	  }
	}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        // 显示输入框文本
	        inputValue: {
	            type: String,
	            default: ''
	        },
	        // 监听输入的文本数据
	        onChange: {
	            type: Function
	        },
	        // 获取焦点
	        onFocus: {
	            type: Function
	        },
	        // text框点击
	        sumClick: {
	            type: Function
	        },
	        // 减点击
	        minusClick: {
	            type: Function
	        },
	        // 加点击
	        plusClick: {
	            type: Function
	        },
	        // 失去焦点
	        onBlur: {
	            type: Function
	        },
	        isClick: {
	            type: Boolean,
	            default: true
	        }

	    },
	    data: function data() {
	        return {};
	    },

	    methods: {},
	    created: function created() {},
	    update: function update() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 235 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [(!_vm.isClick) ? _c('div', {
	    staticClass: ["wdsum_wrap"]
	  }, [_c('text', {
	    staticClass: ["wdsumw_minus"],
	    on: {
	      "click": _vm.minusClick
	    }
	  }, [_vm._v("-")]), _c('input', {
	    staticClass: ["wdsum_in"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onChange],
	      "focus": _vm.onFocus,
	      "blur": _vm.onBlur
	    }
	  }), _c('text', {
	    staticClass: ["wdsumw_plus"],
	    on: {
	      "click": _vm.plusClick
	    }
	  }, [_vm._v("+")])]) : _c('div', {
	    staticClass: ["wdsum_wrap"],
	    on: {
	      "click": _vm.sumClick
	    }
	  }, [_c('text', {
	    staticClass: ["wdsumw_minus"]
	  }, [_vm._v("-")]), _c('text', {
	    staticClass: ["wdsum_in", "wdsum_intext"]
	  }, [_vm._v(_vm._s(_vm.inputValue))]), _c('text', {
	    staticClass: ["wdsumw_plus"]
	  }, [_vm._v("+")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(237)
	)

	/* script */
	__vue_exports__ = __webpack_require__(238)

	/* template */
	var __vue_template__ = __webpack_require__(239)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/common/components/wl/flistBtw.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bf3d3ea4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 237 */
/***/ (function(module, exports) {

	module.exports = {
	  "form_list": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "height": 88
	  },
	  "form_star": {
	    "fontSize": 30,
	    "color": "#E2262A",
	    "marginRight": 20
	  },
	  "form_list_title": {
	    "fontSize": 30
	  },
	  "form_listr_text": {
	    "fontSize": 30
	  },
	  "form_listr_input": {
	    "fontSize": 30,
	    "width": 400,
	    "textAlign": "right",
	    "placeholderColor": "#C2C2C2"
	  },
	  "flex-dir-row": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "form_listr_href": {
	    "marginLeft": 20
	  }
	}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {
	        //是否显示star
	        isShowStar: {
	            type: Boolean,
	            default: false
	        },
	        //是否点击箭头
	        isHref: {
	            type: Boolean,
	            default: false
	        },
	        //是否右边text红色显示
	        isRightTextRed: {
	            type: Boolean,
	            default: false
	        },
	        //是否显示！ 提醒
	        isTip: {
	            type: Boolean,
	            default: false
	        },
	        //是否右边输入框不可点击
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        // types 类型
	        types: {
	            type: String,
	            default: 'textShow'
	        },
	        // 左边标题内容
	        title: {
	            type: String,
	            default: ''
	        },
	        // 右边内容
	        content: {
	            type: String,
	            default: ''
	        },
	        // 显示输入框文本
	        inputValue: {
	            type: String,
	            default: ''
	        },
	        // 显示占位文本
	        placeholder: {
	            type: String,
	            default: ''
	        },
	        maxLength: {
	            type: Number
	        },
	        // 监听输入的文本数据
	        onChange: {
	            type: Function
	        },
	        // 左边内容颜色
	        leftColor: {
	            type: String,
	            default: ''
	        },
	        // 右边内容颜色
	        rightColor: {
	            type: String,
	            default: ''
	        },
	        onClick: {
	            type: Function
	        },
	        onFocus: {
	            type: Function
	        },
	        onBlur: {
	            type: Function
	        }
	    },
	    data: function data() {
	        return {
	            leftStyleObject: {
	                color: '#7E7E7E'
	            },
	            rightStyleObject: {
	                color: '#303030'
	            }
	        };
	    },
	    methods: function methods() {},
	    created: function created() {
	        if (this.leftColor) {
	            this.leftStyleObject.color = this.leftColor;
	        }
	        if (this.rightColor) {
	            this.rightStyleObject.color = this.rightColor;
	        }
	    },

	    computed: {},
	    watch: {
	        leftColor: function leftColor(val, oldVal) {
	            this.leftStyleObject.color = this.leftColor;
	        },
	        rightColor: function rightColor(val, oldVal) {
	            this.rightStyleObject.color = this.rightColor;
	        }
	    },
	    update: function update() {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),
/* 239 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["form_list"]
	  }, [_c('div', {
	    staticClass: ["form_list_left", "flex-dir-row"]
	  }, [(_vm.isShowStar) ? _c('text', {
	    staticClass: ["form_star"]
	  }, [_vm._v("*")]) : _vm._e(), _c('text', {
	    staticClass: ["form_list_title"],
	    style: _vm.leftStyleObject
	  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
	    staticClass: ["form_list_right", "flex-dir-row"],
	    on: {
	      "click": _vm.onClick
	    }
	  }, [(this.types == 'textShow') ? _c('text', {
	    staticClass: ["form_listr_text"],
	    style: _vm.rightStyleObject
	  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), (this.types == 'num') ? _c('input', {
	    staticClass: ["form_listr_input"],
	    style: _vm.rightStyleObject,
	    attrs: {
	      "type": "tel",
	      "dir": "rtl",
	      "placeholder": _vm.placeholder,
	      "maxlength": _vm.maxLength,
	      "disabled": _vm.disabled,
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "input": [function($event) {
	        _vm.inputValue = $event.target.attr.value
	      }, _vm.onChange],
	      "focus": _vm.onFocus,
	      "change": _vm.onBlur
	    }
	  }) : _vm._e(), (_vm.isHref) ? _c('ccImage', {
	    staticClass: ["form_listr_href"],
	    attrs: {
	      "src": 'WXLocal/wx_arrow'
	    }
	  }) : _vm._e(), (_vm.isTip) ? _c('ccImage', {
	    staticClass: ["form_listr_href"],
	    attrs: {
	      "src": 'WXLocal/wx_explain'
	    }
	  }) : _vm._e()], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('scroller', {
	    staticClass: ["scroller"]
	  }, [_c('uiBank', {
	    attrs: {
	      "cardBank": this.$store.state.withdraw.cardBank,
	      "bankCode": this.$store.state.withdraw.bankCode,
	      "anount": this.$store.state.withdraw.availableAmount,
	      "onClick": _vm.bindCardSource == '2' && _vm.bindBank,
	      "isBind": this.$store.state.withdraw.cardFlag == '1',
	      "isCanBind": _vm.bindCardSource == '2'
	    }
	  }), _c('div', {
	    staticClass: ["wd_info"]
	  }, [_vm._m(0), (this.$store.state.withdraw.cardFlag == '1') ? _c('uiSum', {
	    attrs: {
	      "inputValue": _vm.withdrawMoney,
	      "onChange": _vm.withdrawChange,
	      "onFocus": _vm.withdrawFocus,
	      "onBlur": _vm.withdrawBlur,
	      "sumClick": _vm.sumClickBind,
	      "isClick": this.$store.state.withdraw.availableAmount < 1000,
	      "minusClick": _vm.minusClick,
	      "plusClick": _vm.plusClick
	    }
	  }) : _c('uiSum', {
	    attrs: {
	      "inputValue": _vm.withdrawMoney,
	      "isClick": true,
	      "sumClick": _vm.sumClickUnBind
	    }
	  }), _c('flistBtw', {
	    staticClass: ["form_list1", "ui-border-top"],
	    attrs: {
	      "title": '分期期数',
	      "content": _vm.paymentType ? _vm.paymentType + '期' : '请选择',
	      "isShowStar": true,
	      "isHref": true,
	      "onClick": _vm.chosePayment,
	      "rightColor": _vm.inputColor
	    }
	  }), _c('flistBtw', {
	    staticClass: ["form_list1", "ui-border-top"],
	    attrs: {
	      "title": '平台推荐费',
	      "content": _vm.formalities,
	      "rightColor": '#E2262A'
	    }
	  })], 1), _c('text', {
	    staticClass: ["info_tip"]
	  }, [_vm._v("每月最后还款日平台将对您还款银行卡进行扣款，您也可在“我的账单”进行主动还款。")]), (_vm.showTrialRepay) ? _c('div', {
	    staticClass: ["form_list_wrap2"]
	  }, [_c('flistBtw', {
	    staticClass: ["form_list2"],
	    attrs: {
	      "title": this.$store.state.withdraw.paymentType + '期共计',
	      "content": _vm.periodTotalAmount
	    }
	  }), _c('flistBtw', {
	    staticClass: ["form_list2", "ui-border-top"],
	    attrs: {
	      "title": '还款日期',
	      "content": _vm.repaymentDate
	    }
	  }), _c('flistBtw', {
	    staticClass: ["form_list2", "ui-border-top"],
	    attrs: {
	      "title": '每月预计还款',
	      "content": _vm.firstPeriodAmount,
	      "isTip": true,
	      "onClick": _vm.toggleTip
	    }
	  }), (_vm.isTipShow) ? _c('text', {
	    staticClass: ["info_tip2"]
	  }, [_vm._v("每月待还款金额以平台出账日出账金额为准")]) : _vm._e()], 1) : _vm._e()], 1), _c('div', {
	    staticClass: ["botWrap"]
	  }, [(_vm.showTrialRepay) ? _c('agreeBtn', {
	    staticClass: ["agreeBtn"],
	    attrs: {
	      "isShow": true,
	      "isFinish": true,
	      "onClick": _vm.checkContract
	    }
	  }) : _vm._e(), _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": '立即提现',
	      "flag": _vm.showTrialRepay ? 'active' : 'disabled',
	      "onClick": _vm.toSubmit
	    }
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wdi_title"]
	  }, [_c('text', {
	    staticClass: ["wdi_title1"]
	  }, [_vm._v("提现金额")]), _c('text', {
	    staticClass: ["wdi_title2"]
	  }, [_vm._v("（最低1,000，以100的整倍数增减）")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(242)
	)

	/* script */
	__vue_exports__ = __webpack_require__(243)

	/* template */
	var __vue_template__ = __webpack_require__(244)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/contracts/withdrawcontract.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-04b8b4a9"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 242 */
/***/ (function(module, exports) {

	module.exports = {
	  "webview": {
	    "flex": 1
	  }
	}

/***/ }),
/* 243 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            url: '',
	            userId: '',
	            message: '',
	            stages: '',
	            token: this.$store.state.token
	        };
	    },

	    methods: {},
	    computed: {},
	    created: function created() {},
	    mounted: function mounted() {
	        var message = this.$getConfig().localData.message; //分期金额

	        var stages = this.$getConfig().localData.stages; //分期期数

	        this.message = message;
	        this.stages = stages;
	        var that = this;
	        eventModule.getBaseInfo(function (e) {
	            that.userId = e.result.userId;
	            that.url = 'http://gfbapp.vcash.cn/#/Ajqhwithdrawstages?userId=' + that.userId + '&capital=' + that.stages + '&token=' + that.token;
	        });
	    },
	    destroy: function destroy() {}
	};

/***/ }),
/* 244 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    }
	  }, [_vm._v("跳转合同页")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(246)
	)

	/* script */
	__vue_exports__ = __webpack_require__(247)

	/* template */
	var __vue_template__ = __webpack_require__(248)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/withdraw/withdrawState.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b64cfe7e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 246 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "bc": {
	    "backgroundColor": "#f4f4f4"
	  },
	  "scroller": {
	    "flex": 1
	  },
	  "progress": {
	    "backgroundColor": "#ffffff"
	  },
	  "prog_title": {
	    "fontSize": 28,
	    "color": "#303030",
	    "paddingLeft": 22,
	    "height": 72,
	    "lineHeight": 72,
	    "borderBottomStyle": "solid",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#DFDFDF"
	  },
	  "info_list": {
	    "paddingLeft": 20,
	    "flexDirection": "row",
	    "height": 72,
	    "alignItems": "center"
	  },
	  "list_text": {
	    "fontSize": 28,
	    "color": "#303030",
	    "marginLeft": 24
	  },
	  "list_text_data": {
	    "fontSize": 24,
	    "color": "#C5C5C5",
	    "paddingRight": 24
	  },
	  "flex1": {
	    "flex": 1
	  },
	  "prog_opint": {
	    "marginLeft": 34
	  },
	  "botWrap": {
	    "marginLeft": 58,
	    "marginRight": 48,
	    "justifyContent": "flex-end",
	    "alignItems": "stretch",
	    "marginBottom": 32
	  },
	  "btn": {
	    "marginRight": 0
	  },
	  "fail_info": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end"
	  },
	  "fail_info_left": {
	    "fontSize": 24,
	    "color": "#333333"
	  },
	  "fail_info_wran": {
	    "fontSize": 34,
	    "color": "#E2262A"
	  },
	  "fail_info_right": {
	    "fontSize": 24,
	    "color": "#333333"
	  },
	  "text_fail": {
	    "fontSize": 28,
	    "color": "#E2262A"
	  },
	  "tip_info": {
	    "fontSize": 24,
	    "color": "#7E7E7E",
	    "lineHeight": 36,
	    "paddingLeft": 24,
	    "paddingRight": 10,
	    "paddingTop": 24
	  }
	}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	var _agreeBtn = __webpack_require__(96);

	var _agreeBtn2 = _interopRequireDefault(_agreeBtn);

	var _uiButton = __webpack_require__(60);

	var _uiButton2 = _interopRequireDefault(_uiButton);

	var _uiBank = __webpack_require__(228);

	var _uiBank2 = _interopRequireDefault(_uiBank);

	var _uiSum = __webpack_require__(232);

	var _uiSum2 = _interopRequireDefault(_uiSum);

	var _flistBtw = __webpack_require__(236);

	var _flistBtw2 = _interopRequireDefault(_flistBtw);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var globalEvent = weex.requireModule('globalEvent');
	var eventModule = weex.requireModule('event');

	exports.default = {
	    components: { ccImage: _ccImage2.default, agreeBtn: _agreeBtn2.default, uiButton: _uiButton2.default, uiBank: _uiBank2.default, uiSum: _uiSum2.default, flistBtw: _flistBtw2.default },
	    data: function data() {
	        return {
	            transStatus: '-1', //提现状态
	            createdDate: '', //时间-
	            reviewDate: '', //时间-
	            surrenderDate: '' //时间-
	        };
	    },

	    methods: {
	        init: function init() {
	            var that = this;
	            eventModule.getBaseInfo(function (app) {
	                //从app获取信息
	                console.log('从app获取信息~~~~~~~~', app);
	                that.$store.state.withdraw.cutomerId = app.result.cutomerId;
	                that.$store.dispatch('WITHDRAWSTATE_INIT', {
	                    callback: function callback(res) {
	                        that.$store.state.withdraw.sltAccountId = res.sltAccountId;
	                        that.$store.state.withdraw.creditExpire = res.creditExpire;
	                        that.getInfo();
	                    }
	                });
	            });
	        },
	        getInfo: function getInfo() {
	            var that = this;
	            that.$store.dispatch('WITHDRAWSTATEINFO_INIT', {
	                callback: function callback(res) {
	                    console.log(res);
	                    that.$store.state.withdraw.cardBank = res.cardBank;
	                    that.$store.state.withdraw.bankCode = res.bankCode;
	                    that.$store.state.withdraw.cardNo = res.cardNo;
	                    that.$store.state.withdraw.loanAmount = res.loanAmount; //放款金额
	                    that.$store.state.withdraw.lockDate = res.lockDate; //锁单天数
	                    that.$store.state.withdraw.transStatus = res.transStatus; //订单状态

	                    that.createdDate = res.createdDate;
	                    that.reviewDate = res.reviewDate;
	                    that.surrenderDate = res.surrenderDate;

	                    //("重新签名",-4), // 不再使用
	                    //("提现申请复核中", -2),  // 不再使用
	                    //("提现申请失败", -1),    // 不再使用
	                    //("提现申请中", 0),
	                    //("提现完成", 1),
	                    //("还款已提交 ", 2),
	                    // ("已还清", 4),
	                    //("已解约", 5);   //  暂时未使用

	                    switch (res.transStatus) {
	                        case -2:
	                        case 0:
	                        case -3:
	                            that.transStatus = 1; //提现审核中、放款中、财务退回
	                            break;
	                        case 4:
	                            that.transStatus = 3; //已经结清
	                            break;
	                        case -4:
	                            that.transStatus = -4; //退回重新签名
	                            break;
	                        case -1:
	                            that.transStatus = 4; //管理平台拒绝
	                            break;
	                        default:
	                            that.transStatus = 2; //已放款未结清
	                            break;
	                    }
	                }
	            });
	        },
	        goToWithdraw: function goToWithdraw() {
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_withdraw', { title: '银行卡绑定' }, 'channel_pushBankList', function (r) {
	                console.log('你点击的银行是: ', r.result);
	            });
	        }
	    },
	    mounted: function mounted() {
	        var that = this;
	        that.init();
	    },

	    computed: {},
	    created: function created() {}
	};

	function thousandSeparator(num) {
	    //千分位
	    var num = String(String(num).replace(",", ""));
	    var re = /(-?\d+)(\d{3})/;
	    while (re.test(num)) {
	        num = num.replace(re, "$1,$2");
	    }
	    return num;
	}
	function thousandSeparator2(num) {
	    //千分位 小数点后2位
	    var num = String(Number(String(num).replace(",", "")).toFixed(2));
	    var re = /(-?\d+)(\d{3})/;
	    while (re.test(num)) {
	        num = num.replace(re, "$1,$2");
	    }
	    return num;
	}
	function clearThousand(num) {
	    //去除千分位
	    return String(num).replace(/,/g, "");
	}
	function toInt(num) {
	    //舍去不足百的金额
	    return Math.floor(Number(num) / 100) * 100;
	}

/***/ }),
/* 248 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["scroller"]
	  }, [_c('div', {
	    staticClass: ["bc"]
	  }, [_c('uiBank', {
	    attrs: {
	      "cardBank": this.$store.state.withdraw.cardBank,
	      "bankCode": this.$store.state.withdraw.bankCode,
	      "anount": this.$store.state.withdraw.loanAmount,
	      "onClick": _vm.bindBank,
	      "isBind": true,
	      "types": 'state'
	    }
	  })], 1), _c('div', {
	    staticClass: ["progress"]
	  }, [_c('text', {
	    staticClass: ["prog_title"]
	  }, [_vm._v("处理进度")]), _c('div', {
	    staticClass: ["info_list"]
	  }, [_c('ccImage', {
	    staticClass: ["prog_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_agreement_withdraw'
	    }
	  }), _c('text', {
	    staticClass: ["list_text", "flex1"]
	  }, [_vm._v("申请已提交")]), _c('text', {
	    staticClass: ["list_text_data"]
	  }, [_vm._v("2017-09-02 10:23" + _vm._s(_vm.createdDate))])], 1), _c('ccImage', {
	    staticClass: ["prog_opint"],
	    attrs: {
	      "src": 'WXLocal/wx_process_line'
	    }
	  }), _c('div', {
	    staticClass: ["info_list"]
	  }, [_c('ccImage', {
	    staticClass: ["prog_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_agreement_withdraw'
	    }
	  }), _c('text', {
	    staticClass: ["list_text", "flex1"]
	  }, [_vm._v("放款处理中")]), _c('text', {
	    staticClass: ["list_text_data"]
	  }, [_vm._v("2017-09-02 10:23" + _vm._s(_vm.reviewDate))])], 1), _c('ccImage', {
	    staticClass: ["prog_opint"],
	    attrs: {
	      "src": 'WXLocal/wx_process_line'
	    }
	  }), (_vm.transStatus == '4') ? _c('div', {
	    staticClass: ["info_list"]
	  }, [_c('ccImage', {
	    staticClass: ["prog_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_delete_new'
	    }
	  }), _c('text', {
	    staticClass: ["list_text", "flex1", "text_fail"]
	  }, [_vm._v("放款失败")]), _c('text', {
	    staticClass: ["list_text_data"]
	  }, [_vm._v("2017-09-02 10:23" + _vm._s(_vm.surrenderDate))])], 1) : _vm._e(), (_vm.transStatus == '1') ? _c('div', {
	    staticClass: ["info_list"]
	  }, [_c('ccImage', {
	    staticClass: ["prog_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_agreement_unpass'
	    }
	  }), _c('text', {
	    staticClass: ["list_text", "flex1"]
	  }, [_vm._v("放款成功")]), _c('text', {
	    staticClass: ["list_text_data"]
	  }, [_vm._v("2017-09-02 10:23" + _vm._s(_vm.surrenderDate))])], 1) : _vm._e(), (_vm.transStatus == '2') ? _c('div', {
	    staticClass: ["info_list"]
	  }, [_c('ccImage', {
	    staticClass: ["prog_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_agreement_withdraw'
	    }
	  }), _c('text', {
	    staticClass: ["list_text", "flex1"]
	  }, [_vm._v("放款成功")]), _c('text', {
	    staticClass: ["list_text_data"]
	  }, [_vm._v("2017-09-02 10:23" + _vm._s(_vm.surrenderDate))])], 1) : _vm._e()], 1), (_vm.transStatus == '1') ? _c('text', {
	    staticClass: ["tip_info"]
	  }, [_vm._v("预计当天即可完成放款，放款成功后将以短信形式通知您，请注意查收。若24小时未放款可联系客服进行咨询。")]) : _vm._e(), (_vm.transStatus == '2') ? _c('text', {
	    staticClass: ["tip_info"]
	  }, [_vm._v("钱款将转至您所绑定的银行卡内，到账后将扣除手续费，请注意卡内余额变动。（各银行到款时间有所差异，如24小时未到账请联系客服，感谢您的理解）")]) : _vm._e()]), _c('div', {
	    staticClass: ["botWrap"]
	  }, [(_vm.transStatus == '4') ? _c('div', [(this.$store.state.withdraw.lockDate > 0) ? _c('div', [_c('div', {
	    staticClass: ["fail_info"]
	  }, [_c('text', {
	    staticClass: ["fail_info_left"]
	  }, [_vm._v("抱歉,您的提现申请失败,请")]), _c('text', {
	    staticClass: ["fail_info_wran"]
	  }, [_vm._v(_vm._s(this.$store.state.withdraw.lockDate))]), _c('text', {
	    staticClass: ["fail_info_right"]
	  }, [_vm._v("天后重试")])])]) : _c('div', [(this.$store.state.withdraw.creditExpire == false) ? _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": '重新提现',
	      "onClick": _vm.goToWithdraw
	    }
	  }) : _vm._e(), (this.$store.state.withdraw.creditExpire == true) ? _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": '重新获取额度'
	    }
	  }) : _vm._e()], 1)]) : _vm._e(), (_vm.transStatus == '2') ? _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": '查看账单'
	    }
	  }) : _vm._e()], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(250)
	)

	/* script */
	__vue_exports__ = __webpack_require__(251)

	/* template */
	var __vue_template__ = __webpack_require__(252)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/withdraw/bindBank.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0730ba22"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1,
	    "backgroundColor": "#f4f4f4"
	  },
	  "scroller": {
	    "flex": 1
	  },
	  "top_info": {
	    "width": 702,
	    "height": 184,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 16,
	    "marginTop": 24,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "paddingTop": 4
	  },
	  "ui-border-top": {
	    "borderTopStyle": "solid",
	    "borderTopWidth": 1,
	    "borderTopColor": "#dfdfdf"
	  },
	  "tip": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": 24,
	    "marginTop": 24,
	    "marginBottom": 30
	  },
	  "tip_text": {
	    "fontSize": 24,
	    "color": "#7E7E7E",
	    "marginLeft": 16
	  },
	  "info_wrap": {
	    "paddingLeft": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "list": {
	    "paddingRight": 24
	  },
	  "botWrap": {
	    "marginLeft": 58,
	    "marginRight": 48,
	    "justifyContent": "flex-end",
	    "alignItems": "stretch",
	    "marginBottom": 32,
	    "height": 150
	  },
	  "btn": {
	    "marginRight": 0
	  },
	  "agreeBtn": {
	    "marginBottom": 24
	  }
	}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	var _agreeBtn = __webpack_require__(96);

	var _agreeBtn2 = _interopRequireDefault(_agreeBtn);

	var _uiButton = __webpack_require__(60);

	var _uiButton2 = _interopRequireDefault(_uiButton);

	var _uiBank = __webpack_require__(228);

	var _uiBank2 = _interopRequireDefault(_uiBank);

	var _uiSum = __webpack_require__(232);

	var _uiSum2 = _interopRequireDefault(_uiSum);

	var _flistBtw = __webpack_require__(236);

	var _flistBtw2 = _interopRequireDefault(_flistBtw);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var dom = weex.requireModule('dom');
	var globalEvent = weex.requireModule('globalEvent');
	var eventModule = weex.requireModule('event');

	exports.default = {
	    components: { ccImage: _ccImage2.default, agreeBtn: _agreeBtn2.default, uiButton: _uiButton2.default, uiBank: _uiBank2.default, uiSum: _uiSum2.default, flistBtw: _flistBtw2.default },
	    data: function data() {
	        return {
	            identitycard: '', //身份证号 加密后
	            bindCardBank: '', //新绑定的银行名称
	            bindCardNo: '', //新绑定的银行卡号
	            phone: '' //手机号 加密后
	        };
	    },

	    methods: {
	        init: function init() {
	            var that = this;
	            var localData = this.$getConfig().localData;
	            eventModule.getBaseInfo(function (res) {
	                //从app获取信息
	                console.log('从app获取信息~~~~~~~~', res);
	                var appResult = res.result;
	                that.$store.state.withdraw.realName = appResult.realName;
	                that.$store.state.withdraw.identitycard = appResult.idCardNum;
	                that.$store.state.withdraw.phone = appResult.phone;
	                that.identitycard = '****  **** **** ' + appResult.idCardNum.substr(-4);
	                that.phone = appResult.phone.substr(0, 3) + '****' + appResult.phone.substr(-4);

	                console.log('sssssssssssss' + appResult.cutomerId);
	                if (localData.cardFlag == '1') {
	                    //已绑卡的时候才初始化
	                    that.$store.dispatch('BINDBANK_INIT', { custom: appResult.cutomerId, callback: function callback(res) {
	                            that.$store.state.withdraw.cardBank = res.cardBank;
	                            that.$store.state.withdraw.bankCode = res.bankCode;
	                            that.$store.state.withdraw.cardNo = res.cardNo;
	                            that.$store.state.withdraw.loanType = res.loanType; //贷款类型
	                            that.$store.state.withdraw.availableAmount = res.availableAmount; //贷款类型


	                            if (that.$store.state.withdraw.availableAmount < 1000) {
	                                that.$store.state.withdraw.withdrawMoney = 0;
	                            }
	                            that.withdrawMoney = thousandSeparator(that.$store.state.withdraw.withdrawMoney);
	                        }
	                    });
	                }
	            });
	        },
	        choseBank: function choseBank() {
	            var that = this;
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_bindBankList', { title: '银行列表', isCredit: this.isCreditCard, dictCode: 'BANKLIST' }, 'channel_pushBankList', function (r) {
	                console.log('你点击的银行是: ', r.result);
	                that.$store.state.withdraw.bindCardBank = that.bindCardBank = r.result.bankName;
	                that.$store.state.withdraw.bindbankCode = r.result.bankCode;
	            });
	        },
	        bankChange: function bankChange(e) {
	            //银行卡号输入变化
	            console.log(e.value);
	            var that = this;
	            that.bindCardNo = e.value.replace(/[\s]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
	            that.$store.state.withdraw.bindCardNo = e.value.replace(/\s+/g, "");
	        },
	        phoneFocus: function phoneFocus() {
	            //手机号获取焦点
	            console.log('手机号获取焦点');
	            var that = this;
	            that.phone = '';
	        },
	        phoneChange: function phoneChange(e) {
	            //手机号输入变化
	            var that = this;
	            if (e.value.indexOf('*') != '-1') {
	                //让$store.state.withdraw.phone 第一次不变为 177****7777
	                return;
	            }
	            that.phone = paddingSpace(e.value);
	            that.$store.state.withdraw.phone = e.value.replace(/\s+/g, "");
	        },
	        phoneBlur: function phoneBlur(e) {
	            //手机号失去焦点
	            var that = this;
	            console.log('手机号失去焦点');
	            if (e.value != '' && !regPhone(e.value)) {
	                that.phone = '';
	                that.$store.state.withdraw.phone = '';
	                Vue.TipHelper.showHub('1', '请输入正确手机号码');
	            }
	        },
	        agreeClick: function agreeClick() {
	            //合同点击
	            console.log('合同点击');
	            var that = this;
	            Vue.NaviHelper.push('weex/common?id=wallet&path=router_bindBankContract', { title: '合同', capital: '', cardBank: that.bindCardBank, cardNo: that.bindCardNo }, '', function (r) {});
	        },
	        toSubmit: function toSubmit() {
	            //提交
	            var that = this;
	            if (that.isClick) {
	                that.$store.dispatch('BINDBANK_SAVE', {
	                    callback: function callback(res) {
	                        console.log('绑卡成功');
	                        Vue.NaviHelper.push('weex/common?id=wallet&path=router_withdraw', { title: '银行列表' }, 'channel_pushBankList', function (r) {});
	                    }
	                });
	            }
	        }
	    },
	    mounted: function mounted() {
	        var that = this;
	        that.init();
	    },
	    created: function created() {},

	    computed: {
	        isClick: function isClick() {
	            var that = this;
	            if (that.$store.state.withdraw.realName && that.$store.state.withdraw.identitycard && that.$store.state.withdraw.bindCardNo && regPhone(that.$store.state.withdraw.phone)) {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        inputColor: function inputColor() {
	            var that = this;
	            console.log('aaaaaaaaaa' + that.$store.state.withdraw.bindCardBank);
	            if (that.$store.state.withdraw.bindCardBank != '') {
	                return '#303030';
	            } else {
	                return '#C2C2C2';
	            }
	        }
	    }
	};

	function thousandSeparator(num) {
	    //千分位 小数点后2位
	    var num = String(Number(String(num).replace(",", "")).toFixed(2));
	    var re = /(-?\d+)(\d{3})/;
	    while (re.test(num)) {
	        num = num.replace(re, "$1,$2");
	    }
	    return num;
	}
	function paddingSpace(str) {
	    //手机号格式化
	    return str.replace(/\s/g, '').replace(/(^\d{3})(?=\d)/g, "$1 ").replace(/(\d{4})(?=\d)/g, "$1 ");
	};
	function regPhone(phone) {
	    return (/^1\d{10}$/.test(phone.replace(/\s+/g, ""))
	    );
	}

/***/ }),
/* 252 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('div', {
	    staticClass: ["scroller"]
	  }, [_c('div', {
	    staticClass: ["top_info"]
	  }, [_c('flistBtw', {
	    attrs: {
	      "title": '持卡人姓名',
	      "content": this.$store.state.withdraw.realName,
	      "leftColor": '#303030',
	      "rightColor": '#484848'
	    }
	  }), _c('flistBtw', {
	    staticClass: ["ui-border-top"],
	    attrs: {
	      "title": '持卡人身份证',
	      "content": _vm.identitycard,
	      "leftColor": '#303030',
	      "rightColor": '#484848'
	    }
	  })], 1), _c('div', {
	    staticClass: ["tip"]
	  }, [_c('ccImage', {
	    staticClass: ["tip_icon"],
	    attrs: {
	      "src": 'WXLocal/wx_explain'
	    }
	  }), _c('text', {
	    staticClass: ["tip_text"]
	  }, [_vm._v("请确认银行卡信息真实有效，该卡将用于平台交易。")])], 1), _c('div', {
	    staticClass: ["info_wrap"]
	  }, [_c('flistBtw', {
	    staticClass: ["list"],
	    attrs: {
	      "title": '选择银行',
	      "content": _vm.bindCardBank == '' ? '请选择银行卡归属银行' : _vm.bindCardBank,
	      "leftColor": '#303030',
	      "rightColor": _vm.inputColor,
	      "isHref": true,
	      "onClick": _vm.choseBank
	    }
	  }), _c('flistBtw', {
	    staticClass: ["list", "ui-border-top"],
	    attrs: {
	      "title": '银行卡号',
	      "placeholder": '请输入该银行卡卡号',
	      "inputValue": _vm.bindCardNo,
	      "leftColor": '#303030',
	      "rightColor": '#303030',
	      "types": 'num',
	      "maxLength": 23,
	      "onChange": _vm.bankChange
	    }
	  }), _c('flistBtw', {
	    staticClass: ["list", "ui-border-top"],
	    attrs: {
	      "title": '手机号码',
	      "inputValue": _vm.phone,
	      "leftColor": '#303030',
	      "rightColor": '#303030',
	      "types": 'num',
	      "placeholder": '请输入手机号码',
	      "maxLength": 13,
	      "onFocus": _vm.phoneFocus,
	      "onBlur": _vm.phoneBlur,
	      "onChange": _vm.phoneChange
	    }
	  })], 1)]), _c('div', {
	    staticClass: ["botWrap"]
	  }, [_c('agreeBtn', {
	    staticClass: ["agreeBtn"],
	    attrs: {
	      "isShow": true,
	      "isFinish": true,
	      "onClick": _vm.agreeClick
	    }
	  }), _c('uiButton', {
	    staticClass: ["btn"],
	    attrs: {
	      "title": '提交',
	      "onClick": _vm.toSubmit,
	      "flag": _vm.isClick ? 'active' : 'disabled'
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(254)
	)

	/* script */
	__vue_exports__ = __webpack_require__(255)

	/* template */
	var __vue_template__ = __webpack_require__(256)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/withdraw/bankList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2225bf50"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 254 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flex": 1
	  },
	  "cell": {
	    "paddingLeft": 20
	  },
	  "item": {
	    "height": 88,
	    "flex": 1,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#A9A9A9"
	  },
	  "image": {
	    "width": 50,
	    "height": 50
	  },
	  "text": {
	    "marginLeft": 30,
	    "fontSize": 32,
	    "color": "#303030"
	  }
	}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _ccImage = __webpack_require__(48);

	var _ccImage2 = _interopRequireDefault(_ccImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event');

	exports.default = {
	    components: { ccImage: _ccImage2.default },
	    props: {},
	    data: function data() {
	        return {
	            bankList: {}
	        };
	    },

	    methods: {
	        init: function init() {
	            var that = this;
	            var localData = this.$getConfig().localData;
	            eventModule.getBaseInfo(function (res) {
	                //从app获取信息
	                var appResult = res.result;

	                that.$store.dispatch('BINDBANKLIST_INIT', {
	                    cutomerId: appResult.cutomerId,
	                    dictCode: localData.dictCode,
	                    callback: function callback(res) {
	                        console.log(res);
	                        that.bankList = res;
	                        that.bankList.forEach(function (e, i) {
	                            e.imgcode = 'WXLocal/bank_icon_' + e.cardCode.toLowerCase();
	                        });

	                        console.log(that.bankList);
	                    }
	                });
	            });
	        },
	        onClick: function onClick(v) {
	            var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致
	            eventModule.wxFirePushCallback('channel_pushBankList', { result: v });
	        }
	    },
	    computed: {},
	    created: function created() {},
	    mounted: function mounted() {
	        this.init();
	    }
	};

/***/ }),
/* 256 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    staticClass: ["wrapper"]
	  }, _vm._l((_vm.bankList), function(bank, index) {
	    return _c('div', {
	      staticClass: ["cell"]
	    }, [_c('div', {
	      staticClass: ["item"],
	      on: {
	        "click": function($event) {
	          _vm.onClick({
	            bankName: bank.dictName,
	            bankCode: bank.cardCode
	          })
	        }
	      }
	    }, [_c('image', {
	      staticClass: ["image"],
	      attrs: {
	        "src": bank.imgcode,
	        "resize": "contain"
	      }
	    }), _c('text', {
	      staticClass: ["text"]
	    }, [_vm._v(_vm._s(bank.dictName))])])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(258)
	)

	/* script */
	__vue_exports__ = __webpack_require__(259)

	/* template */
	var __vue_template__ = __webpack_require__(260)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/x298017064010/Desktop/aopai/proj/ajqh_weex_new/ajqh_weex_new/src/wallet/views/contracts/bindBankcontract.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-f8e67990"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 258 */
/***/ (function(module, exports) {

	module.exports = {
	  "webview": {
	    "flex": 1
	  }
	}

/***/ }),
/* 259 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var eventModule = weex.requireModule('event'); // 自定义模块, 要求event字段与原生一致

	exports.default = {
	    components: {},
	    data: function data() {
	        return {
	            url: '',
	            userId: '',
	            stages: '',
	            cardBank: '',
	            cardNo: '',
	            capital: '',
	            token: this.$store.state.token
	        };
	    },

	    methods: {},
	    computed: {},
	    created: function created() {},
	    mounted: function mounted() {
	        var that = this;
	        var localData = this.$getConfig().localData;
	        that.capital = localData.capital;
	        that.cardBank = localData.cardBank;
	        that.cardNo = localData.cardNo;

	        eventModule.getBaseInfo(function (e) {
	            that.userId = e.result.userId;
	            that.url = 'http://gfbapp.vcash.cn/#/Ajqhbankbinging?userId=' + that.userId + '&capital=' + that.stages + '&token=' + that.token + '&cardBank=' + thatcardBank + '&that.cardNo=' + cardNo;
	        });
	    },
	    destroy: function destroy() {}
	};

/***/ }),
/* 260 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.url
	    }
	  }, [_vm._v("跳转合同页")])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _RouterEvent = __webpack_require__(262);

	var _RouterEvent2 = _interopRequireDefault(_RouterEvent);

	var _ParamEvent = __webpack_require__(263);

	var _ParamEvent2 = _interopRequireDefault(_ParamEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    routerEvent: _RouterEvent2.default,
	    paramEvent: _ParamEvent2.default
	};

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(152);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var globalEvent = weex.requireModule('globalEvent');

	globalEvent.addEventListener("router_demo", function (e) {
	    _index2.default.push('demo');
	    console.log('push demo successed');
	});

	globalEvent.addEventListener("router_banner", function (e) {
	    _index2.default.push('banner');
	    console.log('push banner successed');
	});

	globalEvent.addEventListener("router_webPage", function (e) {
	    _index2.default.push('webPage');
	    console.log('push webPage successed');
	});

	//-----------信贷----------------
	globalEvent.addEventListener("router_wallet", function (e) {
	    _index2.default.push('wallet');
	    console.log('push wallet successed');
	});

	globalEvent.addEventListener("router_identity", function (e) {
	    _index2.default.push('identity');
	    console.log('push identity successed');
	});

	globalEvent.addEventListener("router_information", function (e) {
	    _index2.default.push('information');
	    console.log('push information successed');
	});

	globalEvent.addEventListener("router_bankCard", function (e) {
	    _index2.default.push('bankCard');
	    console.log('push bankCard successed');
	});
	globalEvent.addEventListener("router_authResultPage", function (e) {
	    _index2.default.push('authResultPage');
	    console.log('push authResultPage successed');
	});

	//-----------信贷-子页----------------
	globalEvent.addEventListener("router_mobileAuthPage", function (e) {
	    _index2.default.push('mobileAuthPage');
	    console.log('push mobileAuthPage successed');
	});
	globalEvent.addEventListener("router_bankList", function (e) {
	    _index2.default.push('bankList');
	    console.log('push bankList successed');
	});
	globalEvent.addEventListener("router_zmAuthPage", function (e) {
	    _index2.default.push('zmAuthPage');
	    console.log('push zmAuthPage successed');
	});
	globalEvent.addEventListener("router_personalInfoProtocal", function (e) {
	    _index2.default.push('personalInfoProtocal');
	    console.log('push personalInfoProtocal successed');
	});

	//-----------激活----------------
	globalEvent.addEventListener("router_linkMan", function (e) {
	    _index2.default.push('linkMan');
	    console.log('push router_linkMan successed');
	}

	//-----------提现----------------
	);globalEvent.addEventListener("router_withdraw", function (e) {
	    //router.push('withdraw');
	    //router.push('bindBank');
	    _index2.default.push('withdrawState');
	    console.log('push router_withdraw successed');
	}
	//-----------提现合同----------------
	);globalEvent.addEventListener("router_withdrawcontract", function (e) {
	    _index2.default.push('withdrawcontract');
	    console.log('push router_withdrawcontract successed');
	}
	//-----------提现状态----------------
	);globalEvent.addEventListener("router_withdrawState", function (e) {
	    _index2.default.push('withdrawState');
	    //router.push('withdraw');
	    console.log('push router_withdrawState successed');
	}
	//-----------绑卡----------------
	);globalEvent.addEventListener("router_bindBank", function (e) {
	    _index2.default.push('bindBank');
	    console.log('push router_bindBank successed');
	}
	//-----------绑卡列表----------------
	);globalEvent.addEventListener("router_bindBankList", function (e) {
	    _index2.default.push('bindBankList');
	    console.log('push router_bindBankList successed');
	}
	//-----------绑卡合同----------------
	);globalEvent.addEventListener("router_bindBankContract", function (e) {
	    _index2.default.push('bindBankContract');
	    console.log('push router_bindBankContract successed');
	});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(4);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var globalEvent = weex.requireModule('globalEvent'); /**
	                                                      * Created by x298017064010 on 17/6/14.
	                                                      */

	globalEvent.addEventListener("param_banner", function (e) {
	    console.log('param_banner: ', e);

	    var src = e.src;


	    _index2.default.state.banner_src = src;
	});

/***/ })
/******/ ]);