(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function uc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function sy(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Np = { exports: {} },
  jl = {},
  Rp = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zo = Symbol.for("react.element"),
  cy = Symbol.for("react.portal"),
  fy = Symbol.for("react.fragment"),
  dy = Symbol.for("react.strict_mode"),
  py = Symbol.for("react.profiler"),
  hy = Symbol.for("react.provider"),
  vy = Symbol.for("react.context"),
  my = Symbol.for("react.forward_ref"),
  gy = Symbol.for("react.suspense"),
  yy = Symbol.for("react.memo"),
  xy = Symbol.for("react.lazy"),
  Lf = Symbol.iterator;
function wy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lf && e[Lf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ap = Object.assign,
  Fp = {};
function Vr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp);
}
Vr.prototype.isReactComponent = {};
Vr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Vr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dp() {}
Dp.prototype = Vr.prototype;
function sc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fp),
    (this.updater = n || jp);
}
var cc = (sc.prototype = new Dp());
cc.constructor = sc;
Ap(cc, Vr.prototype);
cc.isPureReactComponent = !0;
var Bf = Array.isArray,
  Lp = Object.prototype.hasOwnProperty,
  fc = { current: null },
  Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Lp.call(t, r) && !Bp.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Zo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: fc.current,
  };
}
function Sy(e, t) {
  return {
    $$typeof: Zo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function dc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zo;
}
function ky(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wf = /\/+/g;
function va(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ky("" + e.key)
    : t.toString(36);
}
function Mi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zo:
          case cy:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + va(l, 0) : r),
      Bf(o)
        ? ((n = ""),
          e != null && (n = e.replace(Wf, "$&/") + "/"),
          Mi(o, t, n, "", function (s) {
            return s;
          }))
        : o != null &&
          (dc(o) &&
            (o = Sy(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Wf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), Bf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + va(i, a);
      l += Mi(i, t, n, u, o);
    }
  else if (((u = wy(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + va(i, a++)), (l += Mi(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Mi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Oy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var it = { current: null },
  Ni = { transition: null },
  Cy = {
    ReactCurrentDispatcher: it,
    ReactCurrentBatchConfig: Ni,
    ReactCurrentOwner: fc,
  };
J.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!dc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
J.Component = Vr;
J.Fragment = fy;
J.Profiler = py;
J.PureComponent = sc;
J.StrictMode = dy;
J.Suspense = gy;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ap({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = fc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Lp.call(t, u) &&
        !Bp.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: Zo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: vy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hy, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Wp;
J.createFactory = function (e) {
  var t = Wp.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: my, render: e };
};
J.isValidElement = dc;
J.lazy = function (e) {
  return { $$typeof: xy, _payload: { _status: -1, _result: e }, _init: Oy };
};
J.memo = function (e, t) {
  return { $$typeof: yy, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = Ni.transition;
  Ni.transition = {};
  try {
    e();
  } finally {
    Ni.transition = t;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (e, t) {
  return it.current.useCallback(e, t);
};
J.useContext = function (e) {
  return it.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return it.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return it.current.useEffect(e, t);
};
J.useId = function () {
  return it.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return it.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return it.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return it.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return it.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return it.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return it.current.useRef(e);
};
J.useState = function (e) {
  return it.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return it.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return it.current.useTransition();
};
J.version = "18.2.0";
Rp.exports = J;
var y = Rp.exports;
const E = uc(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Py = y,
  by = Symbol.for("react.element"),
  Ey = Symbol.for("react.fragment"),
  zy = Object.prototype.hasOwnProperty,
  Ty = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _y = { key: !0, ref: !0, __self: !0, __source: !0 };
function Up(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) zy.call(t, r) && !_y.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: by,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ty.current,
  };
}
jl.Fragment = Ey;
jl.jsx = Up;
jl.jsxs = Up;
Np.exports = jl;
var S = Np.exports,
  Cu = {},
  Vp = { exports: {} },
  mt = {},
  Hp = { exports: {} },
  Kp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, $) {
    var _ = T.length;
    T.push($);
    e: for (; 0 < _; ) {
      var A = (_ - 1) >>> 1,
        U = T[A];
      if (0 < o(U, $)) (T[A] = $), (T[_] = U), (_ = A);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var $ = T[0],
      _ = T.pop();
    if (_ !== $) {
      T[0] = _;
      e: for (var A = 0, U = T.length, G = U >>> 1; A < G; ) {
        var Q = 2 * (A + 1) - 1,
          ie = T[Q],
          te = Q + 1,
          Y = T[te];
        if (0 > o(ie, _))
          te < U && 0 > o(Y, ie)
            ? ((T[A] = Y), (T[te] = _), (A = te))
            : ((T[A] = ie), (T[Q] = _), (A = Q));
        else if (te < U && 0 > o(Y, _)) (T[A] = Y), (T[te] = _), (A = te);
        else break e;
      }
    }
    return $;
  }
  function o(T, $) {
    var _ = T.sortIndex - $.sortIndex;
    return _ !== 0 ? _ : T.id - $.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    c = null,
    d = 3,
    m = !1,
    g = !1,
    x = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var $ = n(s); $ !== null; ) {
      if ($.callback === null) r(s);
      else if ($.startTime <= T)
        r(s), ($.sortIndex = $.expirationTime), t(u, $);
      else break;
      $ = n(s);
    }
  }
  function k(T) {
    if (((x = !1), v(T), !g))
      if (n(u) !== null) (g = !0), ke(C);
      else {
        var $ = n(s);
        $ !== null && q(k, $.startTime - T);
      }
  }
  function C(T, $) {
    (g = !1), x && ((x = !1), h(M), (M = -1)), (m = !0);
    var _ = d;
    try {
      for (
        v($), c = n(u);
        c !== null && (!(c.expirationTime > $) || (T && !W()));

      ) {
        var A = c.callback;
        if (typeof A == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var U = A(c.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof U == "function" ? (c.callback = U) : c === n(u) && r(u),
            v($);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var G = !0;
      else {
        var Q = n(s);
        Q !== null && q(k, Q.startTime - $), (G = !1);
      }
      return G;
    } finally {
      (c = null), (d = _), (m = !1);
    }
  }
  var P = !1,
    b = null,
    M = -1,
    N = 5,
    j = -1;
  function W() {
    return !(e.unstable_now() - j < N);
  }
  function ce() {
    if (b !== null) {
      var T = e.unstable_now();
      j = T;
      var $ = !0;
      try {
        $ = b(!0, T);
      } finally {
        $ ? D() : ((P = !1), (b = null));
      }
    } else P = !1;
  }
  var D;
  if (typeof p == "function")
    D = function () {
      p(ce);
    };
  else if (typeof MessageChannel < "u") {
    var ee = new MessageChannel(),
      H = ee.port2;
    (ee.port1.onmessage = ce),
      (D = function () {
        H.postMessage(null);
      });
  } else
    D = function () {
      O(ce, 0);
    };
  function ke(T) {
    (b = T), P || ((P = !0), D());
  }
  function q(T, $) {
    M = O(function () {
      T(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || m || ((g = !0), ke(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = d;
      }
      var _ = d;
      d = $;
      try {
        return T();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, $) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var _ = d;
      d = T;
      try {
        return $();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (T, $, _) {
      var A = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? A + _ : A))
          : (_ = A),
        T)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = _ + U),
        (T = {
          id: f++,
          callback: $,
          priorityLevel: T,
          startTime: _,
          expirationTime: U,
          sortIndex: -1,
        }),
        _ > A
          ? ((T.sortIndex = _),
            t(s, T),
            n(u) === null &&
              T === n(s) &&
              (x ? (h(M), (M = -1)) : (x = !0), q(k, _ - A)))
          : ((T.sortIndex = U), t(u, T), g || m || ((g = !0), ke(C))),
        T
      );
    }),
    (e.unstable_shouldYield = W),
    (e.unstable_wrapCallback = function (T) {
      var $ = d;
      return function () {
        var _ = d;
        d = $;
        try {
          return T.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Kp);
Hp.exports = Kp;
var Iy = Hp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gp = y,
  vt = Iy;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qp = new Set(),
  Mo = {};
function Jn(e, t) {
  Tr(e, t), Tr(e + "Capture", t);
}
function Tr(e, t) {
  for (Mo[e] = t, e = 0; e < t.length; e++) qp.add(t[e]);
}
var tn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Pu = Object.prototype.hasOwnProperty,
  $y =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uf = {},
  Vf = {};
function My(e) {
  return Pu.call(Vf, e)
    ? !0
    : Pu.call(Uf, e)
    ? !1
    : $y.test(e)
    ? (Vf[e] = !0)
    : ((Uf[e] = !0), !1);
}
function Ny(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ry(e, t, n, r) {
  if (t === null || typeof t > "u" || Ny(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function lt(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Qe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new lt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Qe[t] = new lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Qe[e] = new lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Qe[e] = new lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Qe[e] = new lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Qe[e] = new lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Qe[e] = new lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Qe[e] = new lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Qe[e] = new lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pc = /[\-:]([a-z])/g;
function hc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pc, hc);
    Qe[t] = new lt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pc, hc);
    Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pc, hc);
  Qe[t] = new lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Qe.xlinkHref = new lt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Qe[e] = new lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vc(e, t, n, r) {
  var o = Qe.hasOwnProperty(t) ? Qe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ry(t, n, o, r) && (n = null),
    r || o === null
      ? My(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ln = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  cr = Symbol.for("react.fragment"),
  mc = Symbol.for("react.strict_mode"),
  bu = Symbol.for("react.profiler"),
  Qp = Symbol.for("react.provider"),
  Yp = Symbol.for("react.context"),
  gc = Symbol.for("react.forward_ref"),
  Eu = Symbol.for("react.suspense"),
  zu = Symbol.for("react.suspense_list"),
  yc = Symbol.for("react.memo"),
  cn = Symbol.for("react.lazy"),
  Xp = Symbol.for("react.offscreen"),
  Hf = Symbol.iterator;
function ro(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hf && e[Hf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Te = Object.assign,
  ma;
function po(e) {
  if (ma === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ma = (t && t[1]) || "";
    }
  return (
    `
` +
    ma +
    e
  );
}
var ga = !1;
function ya(e, t) {
  if (!e || ga) return "";
  ga = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var o = s.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var u =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (ga = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? po(e) : "";
}
function jy(e) {
  switch (e.tag) {
    case 5:
      return po(e.type);
    case 16:
      return po("Lazy");
    case 13:
      return po("Suspense");
    case 19:
      return po("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ya(e.type, !1)), e;
    case 11:
      return (e = ya(e.type.render, !1)), e;
    case 1:
      return (e = ya(e.type, !0)), e;
    default:
      return "";
  }
}
function Tu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cr:
      return "Fragment";
    case sr:
      return "Portal";
    case bu:
      return "Profiler";
    case mc:
      return "StrictMode";
    case Eu:
      return "Suspense";
    case zu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yp:
        return (e.displayName || "Context") + ".Consumer";
      case Qp:
        return (e._context.displayName || "Context") + ".Provider";
      case gc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yc:
        return (
          (t = e.displayName || null), t !== null ? t : Tu(e.type) || "Memo"
        );
      case cn:
        (t = e._payload), (e = e._init);
        try {
          return Tu(e(t));
        } catch {}
    }
  return null;
}
function Ay(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Tu(t);
    case 8:
      return t === mc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fy(e) {
  var t = Zp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = Fy(e));
}
function Jp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Zp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function _u(e, t) {
  var n = t.checked;
  return Te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Kf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function eh(e, t) {
  (t = t.checked), t != null && vc(e, "checked", t, !1);
}
function Iu(e, t) {
  eh(e, t);
  var n = bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? $u(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $u(e, t.type, bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function $u(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ho = Array.isArray;
function Or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (ho(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: bn(n) };
}
function th(e, t) {
  var n = bn(t.value),
    r = bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Nu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mi,
  rh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mi = mi || document.createElement("div"),
          mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function No(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dy = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function (e) {
  Dy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xo[t] = xo[e]);
  });
});
function oh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xo.hasOwnProperty(e) && xo[e])
    ? ("" + t).trim()
    : t + "px";
}
function ih(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = oh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ly = Te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ru(e, t) {
  if (t) {
    if (Ly[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function ju(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Au = null;
function xc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fu = null,
  Cr = null,
  Pr = null;
function Yf(e) {
  if ((e = ti(e))) {
    if (typeof Fu != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = Bl(t)), Fu(e.stateNode, e.type, t));
  }
}
function lh(e) {
  Cr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Cr = e);
}
function ah() {
  if (Cr) {
    var e = Cr,
      t = Pr;
    if (((Pr = Cr = null), Yf(e), t)) for (e = 0; e < t.length; e++) Yf(t[e]);
  }
}
function uh(e, t) {
  return e(t);
}
function sh() {}
var xa = !1;
function ch(e, t, n) {
  if (xa) return e(t, n);
  xa = !0;
  try {
    return uh(e, t, n);
  } finally {
    (xa = !1), (Cr !== null || Pr !== null) && (sh(), ah());
  }
}
function Ro(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var Du = !1;
if (tn)
  try {
    var oo = {};
    Object.defineProperty(oo, "passive", {
      get: function () {
        Du = !0;
      },
    }),
      window.addEventListener("test", oo, oo),
      window.removeEventListener("test", oo, oo);
  } catch {
    Du = !1;
  }
function By(e, t, n, r, o, i, l, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var wo = !1,
  Ji = null,
  el = !1,
  Lu = null,
  Wy = {
    onError: function (e) {
      (wo = !0), (Ji = e);
    },
  };
function Uy(e, t, n, r, o, i, l, a, u) {
  (wo = !1), (Ji = null), By.apply(Wy, arguments);
}
function Vy(e, t, n, r, o, i, l, a, u) {
  if ((Uy.apply(this, arguments), wo)) {
    if (wo) {
      var s = Ji;
      (wo = !1), (Ji = null);
    } else throw Error(I(198));
    el || ((el = !0), (Lu = s));
  }
}
function er(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xf(e) {
  if (er(e) !== e) throw Error(I(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Xf(o), e;
        if (i === r) return Xf(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function dh(e) {
  return (e = Hy(e)), e !== null ? ph(e) : null;
}
function ph(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ph(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hh = vt.unstable_scheduleCallback,
  Zf = vt.unstable_cancelCallback,
  Ky = vt.unstable_shouldYield,
  Gy = vt.unstable_requestPaint,
  Me = vt.unstable_now,
  qy = vt.unstable_getCurrentPriorityLevel,
  wc = vt.unstable_ImmediatePriority,
  vh = vt.unstable_UserBlockingPriority,
  tl = vt.unstable_NormalPriority,
  Qy = vt.unstable_LowPriority,
  mh = vt.unstable_IdlePriority,
  Al = null,
  Bt = null;
function Yy(e) {
  if (Bt && typeof Bt.onCommitFiberRoot == "function")
    try {
      Bt.onCommitFiberRoot(Al, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : Jy,
  Xy = Math.log,
  Zy = Math.LN2;
function Jy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xy(e) / Zy) | 0)) | 0;
}
var gi = 64,
  yi = 4194304;
function vo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = vo(a)) : ((i &= l), i !== 0 && (r = vo(i)));
  } else (l = n & ~o), l !== 0 ? (r = vo(l)) : i !== 0 && (r = vo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function e0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function t0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - Mt(i),
      a = 1 << l,
      u = o[l];
    u === -1
      ? (!(a & n) || a & r) && (o[l] = e0(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Bu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gh() {
  var e = gi;
  return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function wa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n);
}
function n0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Mt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Sc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var se = 0;
function yh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xh,
  kc,
  wh,
  Sh,
  kh,
  Wu = !1,
  xi = [],
  gn = null,
  yn = null,
  xn = null,
  jo = new Map(),
  Ao = new Map(),
  dn = [],
  r0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Jf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gn = null;
      break;
    case "dragenter":
    case "dragleave":
      yn = null;
      break;
    case "mouseover":
    case "mouseout":
      xn = null;
      break;
    case "pointerover":
    case "pointerout":
      jo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ao.delete(t.pointerId);
  }
}
function io(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ti(t)), t !== null && kc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function o0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (gn = io(gn, e, t, n, r, o)), !0;
    case "dragenter":
      return (yn = io(yn, e, t, n, r, o)), !0;
    case "mouseover":
      return (xn = io(xn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return jo.set(i, io(jo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ao.set(i, io(Ao.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Oh(e) {
  var t = Fn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fh(n)), t !== null)) {
          (e.blockedOn = t),
            kh(e.priority, function () {
              wh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ri(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Uu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Au = r), n.target.dispatchEvent(r), (Au = null);
    } else return (t = ti(n)), t !== null && kc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ed(e, t, n) {
  Ri(e) && n.delete(t);
}
function i0() {
  (Wu = !1),
    gn !== null && Ri(gn) && (gn = null),
    yn !== null && Ri(yn) && (yn = null),
    xn !== null && Ri(xn) && (xn = null),
    jo.forEach(ed),
    Ao.forEach(ed);
}
function lo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wu ||
      ((Wu = !0),
      vt.unstable_scheduleCallback(vt.unstable_NormalPriority, i0)));
}
function Fo(e) {
  function t(o) {
    return lo(o, e);
  }
  if (0 < xi.length) {
    lo(xi[0], e);
    for (var n = 1; n < xi.length; n++) {
      var r = xi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gn !== null && lo(gn, e),
      yn !== null && lo(yn, e),
      xn !== null && lo(xn, e),
      jo.forEach(t),
      Ao.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    Oh(n), n.blockedOn === null && dn.shift();
}
var br = ln.ReactCurrentBatchConfig,
  rl = !0;
function l0(e, t, n, r) {
  var o = se,
    i = br.transition;
  br.transition = null;
  try {
    (se = 1), Oc(e, t, n, r);
  } finally {
    (se = o), (br.transition = i);
  }
}
function a0(e, t, n, r) {
  var o = se,
    i = br.transition;
  br.transition = null;
  try {
    (se = 4), Oc(e, t, n, r);
  } finally {
    (se = o), (br.transition = i);
  }
}
function Oc(e, t, n, r) {
  if (rl) {
    var o = Uu(e, t, n, r);
    if (o === null) _a(e, t, r, ol, n), Jf(e, r);
    else if (o0(o, e, t, n, r)) r.stopPropagation();
    else if ((Jf(e, r), t & 4 && -1 < r0.indexOf(e))) {
      for (; o !== null; ) {
        var i = ti(o);
        if (
          (i !== null && xh(i),
          (i = Uu(e, t, n, r)),
          i === null && _a(e, t, r, ol, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else _a(e, t, r, null, n);
  }
}
var ol = null;
function Uu(e, t, n, r) {
  if (((ol = null), (e = xc(r)), (e = Fn(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ol = e), null;
}
function Ch(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qy()) {
        case wc:
          return 1;
        case vh:
          return 4;
        case tl:
        case Qy:
          return 16;
        case mh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hn = null,
  Cc = null,
  ji = null;
function Ph() {
  if (ji) return ji;
  var e,
    t = Cc,
    n = t.length,
    r,
    o = "value" in hn ? hn.value : hn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (ji = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wi() {
  return !0;
}
function td() {
  return !1;
}
function gt(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? wi
        : td),
      (this.isPropagationStopped = td),
      this
    );
  }
  return (
    Te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wi));
      },
      persist: function () {},
      isPersistent: wi,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pc = gt(Hr),
  ei = Te({}, Hr, { view: 0, detail: 0 }),
  u0 = gt(ei),
  Sa,
  ka,
  ao,
  Fl = Te({}, ei, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ao &&
            (ao && e.type === "mousemove"
              ? ((Sa = e.screenX - ao.screenX), (ka = e.screenY - ao.screenY))
              : (ka = Sa = 0),
            (ao = e)),
          Sa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ka;
    },
  }),
  nd = gt(Fl),
  s0 = Te({}, Fl, { dataTransfer: 0 }),
  c0 = gt(s0),
  f0 = Te({}, ei, { relatedTarget: 0 }),
  Oa = gt(f0),
  d0 = Te({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  p0 = gt(d0),
  h0 = Te({}, Hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  v0 = gt(h0),
  m0 = Te({}, Hr, { data: 0 }),
  rd = gt(m0),
  g0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  y0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  x0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function w0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = x0[e]) ? !!t[e] : !1;
}
function bc() {
  return w0;
}
var S0 = Te({}, ei, {
    key: function (e) {
      if (e.key) {
        var t = g0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? y0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bc,
    charCode: function (e) {
      return e.type === "keypress" ? Ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  k0 = gt(S0),
  O0 = Te({}, Fl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  od = gt(O0),
  C0 = Te({}, ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bc,
  }),
  P0 = gt(C0),
  b0 = Te({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  E0 = gt(b0),
  z0 = Te({}, Fl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  T0 = gt(z0),
  _0 = [9, 13, 27, 32],
  Ec = tn && "CompositionEvent" in window,
  So = null;
tn && "documentMode" in document && (So = document.documentMode);
var I0 = tn && "TextEvent" in window && !So,
  bh = tn && (!Ec || (So && 8 < So && 11 >= So)),
  id = String.fromCharCode(32),
  ld = !1;
function Eh(e, t) {
  switch (e) {
    case "keyup":
      return _0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var fr = !1;
function $0(e, t) {
  switch (e) {
    case "compositionend":
      return zh(t);
    case "keypress":
      return t.which !== 32 ? null : ((ld = !0), id);
    case "textInput":
      return (e = t.data), e === id && ld ? null : e;
    default:
      return null;
  }
}
function M0(e, t) {
  if (fr)
    return e === "compositionend" || (!Ec && Eh(e, t))
      ? ((e = Ph()), (ji = Cc = hn = null), (fr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ad(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N0[e.type] : t === "textarea";
}
function Th(e, t, n, r) {
  lh(r),
    (t = il(t, "onChange")),
    0 < t.length &&
      ((n = new Pc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ko = null,
  Do = null;
function R0(e) {
  Lh(e, 0);
}
function Dl(e) {
  var t = hr(e);
  if (Jp(t)) return e;
}
function j0(e, t) {
  if (e === "change") return t;
}
var _h = !1;
if (tn) {
  var Ca;
  if (tn) {
    var Pa = "oninput" in document;
    if (!Pa) {
      var ud = document.createElement("div");
      ud.setAttribute("oninput", "return;"),
        (Pa = typeof ud.oninput == "function");
    }
    Ca = Pa;
  } else Ca = !1;
  _h = Ca && (!document.documentMode || 9 < document.documentMode);
}
function sd() {
  ko && (ko.detachEvent("onpropertychange", Ih), (Do = ko = null));
}
function Ih(e) {
  if (e.propertyName === "value" && Dl(Do)) {
    var t = [];
    Th(t, Do, e, xc(e)), ch(R0, t);
  }
}
function A0(e, t, n) {
  e === "focusin"
    ? (sd(), (ko = t), (Do = n), ko.attachEvent("onpropertychange", Ih))
    : e === "focusout" && sd();
}
function F0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Dl(Do);
}
function D0(e, t) {
  if (e === "click") return Dl(t);
}
function L0(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function B0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var jt = typeof Object.is == "function" ? Object.is : B0;
function Lo(e, t) {
  if (jt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Pu.call(t, o) || !jt(e[o], t[o])) return !1;
  }
  return !0;
}
function cd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fd(e, t) {
  var n = cd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = cd(n);
  }
}
function $h(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $h(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mh() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function W0(e) {
  var t = Mh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $h(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = fd(n, i));
        var l = fd(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var U0 = tn && "documentMode" in document && 11 >= document.documentMode,
  dr = null,
  Vu = null,
  Oo = null,
  Hu = !1;
function dd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hu ||
    dr == null ||
    dr !== Zi(r) ||
    ((r = dr),
    "selectionStart" in r && zc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Oo && Lo(Oo, r)) ||
      ((Oo = r),
      (r = il(Vu, "onSelect")),
      0 < r.length &&
        ((t = new Pc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dr))));
}
function Si(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var pr = {
    animationend: Si("Animation", "AnimationEnd"),
    animationiteration: Si("Animation", "AnimationIteration"),
    animationstart: Si("Animation", "AnimationStart"),
    transitionend: Si("Transition", "TransitionEnd"),
  },
  ba = {},
  Nh = {};
tn &&
  ((Nh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete pr.animationend.animation,
    delete pr.animationiteration.animation,
    delete pr.animationstart.animation),
  "TransitionEvent" in window || delete pr.transitionend.transition);
function Ll(e) {
  if (ba[e]) return ba[e];
  if (!pr[e]) return e;
  var t = pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nh) return (ba[e] = t[n]);
  return e;
}
var Rh = Ll("animationend"),
  jh = Ll("animationiteration"),
  Ah = Ll("animationstart"),
  Fh = Ll("transitionend"),
  Dh = new Map(),
  pd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function _n(e, t) {
  Dh.set(e, t), Jn(t, [e]);
}
for (var Ea = 0; Ea < pd.length; Ea++) {
  var za = pd[Ea],
    V0 = za.toLowerCase(),
    H0 = za[0].toUpperCase() + za.slice(1);
  _n(V0, "on" + H0);
}
_n(Rh, "onAnimationEnd");
_n(jh, "onAnimationIteration");
_n(Ah, "onAnimationStart");
_n("dblclick", "onDoubleClick");
_n("focusin", "onFocus");
_n("focusout", "onBlur");
_n(Fh, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  K0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));
function hd(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vy(r, t, void 0, e), (e.currentTarget = null);
}
function Lh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && o.isPropagationStopped())) break e;
          hd(o, a, s), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          hd(o, a, s), (i = u);
        }
    }
  }
  if (el) throw ((e = Lu), (el = !1), (Lu = null), e);
}
function xe(e, t) {
  var n = t[Yu];
  n === void 0 && (n = t[Yu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bh(t, e, 2, !1), n.add(r));
}
function Ta(e, t, n) {
  var r = 0;
  t && (r |= 4), Bh(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function Bo(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      qp.forEach(function (n) {
        n !== "selectionchange" && (K0.has(n) || Ta(n, !1, e), Ta(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), Ta("selectionchange", !1, t));
  }
}
function Bh(e, t, n, r) {
  switch (Ch(t)) {
    case 1:
      var o = l0;
      break;
    case 4:
      o = a0;
      break;
    default:
      o = Oc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Du ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function _a(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = Fn(a)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ch(function () {
    var s = i,
      f = xc(n),
      c = [];
    e: {
      var d = Dh.get(e);
      if (d !== void 0) {
        var m = Pc,
          g = e;
        switch (e) {
          case "keypress":
            if (Ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = k0;
            break;
          case "focusin":
            (g = "focus"), (m = Oa);
            break;
          case "focusout":
            (g = "blur"), (m = Oa);
            break;
          case "beforeblur":
          case "afterblur":
            m = Oa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = nd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = c0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = P0;
            break;
          case Rh:
          case jh:
          case Ah:
            m = p0;
            break;
          case Fh:
            m = E0;
            break;
          case "scroll":
            m = u0;
            break;
          case "wheel":
            m = T0;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = v0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = od;
        }
        var x = (t & 4) !== 0,
          O = !x && e === "scroll",
          h = x ? (d !== null ? d + "Capture" : null) : d;
        x = [];
        for (var p = s, v; p !== null; ) {
          v = p;
          var k = v.stateNode;
          if (
            (v.tag === 5 &&
              k !== null &&
              ((v = k),
              h !== null && ((k = Ro(p, h)), k != null && x.push(Wo(p, k, v)))),
            O)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((d = new m(d, g, null, n, f)), c.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Au &&
            (g = n.relatedTarget || n.fromElement) &&
            (Fn(g) || g[nn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((g = n.relatedTarget || n.toElement),
              (m = s),
              (g = g ? Fn(g) : null),
              g !== null &&
                ((O = er(g)), g !== O || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((m = null), (g = s)),
          m !== g)
        ) {
          if (
            ((x = nd),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = od),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (O = m == null ? d : hr(m)),
            (v = g == null ? d : hr(g)),
            (d = new x(k, p + "leave", m, n, f)),
            (d.target = O),
            (d.relatedTarget = v),
            (k = null),
            Fn(f) === s &&
              ((x = new x(h, p + "enter", g, n, f)),
              (x.target = v),
              (x.relatedTarget = O),
              (k = x)),
            (O = k),
            m && g)
          )
            t: {
              for (x = m, h = g, p = 0, v = x; v; v = ir(v)) p++;
              for (v = 0, k = h; k; k = ir(k)) v++;
              for (; 0 < p - v; ) (x = ir(x)), p--;
              for (; 0 < v - p; ) (h = ir(h)), v--;
              for (; p--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = ir(x)), (h = ir(h));
              }
              x = null;
            }
          else x = null;
          m !== null && vd(c, d, m, x, !1),
            g !== null && O !== null && vd(c, O, g, x, !0);
        }
      }
      e: {
        if (
          ((d = s ? hr(s) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var C = j0;
        else if (ad(d))
          if (_h) C = L0;
          else {
            C = F0;
            var P = A0;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (C = D0);
        if (C && (C = C(e, s))) {
          Th(c, C, n, f);
          break e;
        }
        P && P(e, d, s),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            $u(d, "number", d.value);
      }
      switch (((P = s ? hr(s) : window), e)) {
        case "focusin":
          (ad(P) || P.contentEditable === "true") &&
            ((dr = P), (Vu = s), (Oo = null));
          break;
        case "focusout":
          Oo = Vu = dr = null;
          break;
        case "mousedown":
          Hu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hu = !1), dd(c, n, f);
          break;
        case "selectionchange":
          if (U0) break;
        case "keydown":
        case "keyup":
          dd(c, n, f);
      }
      var b;
      if (Ec)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        fr
          ? Eh(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (bh &&
          n.locale !== "ko" &&
          (fr || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && fr && (b = Ph())
            : ((hn = f),
              (Cc = "value" in hn ? hn.value : hn.textContent),
              (fr = !0))),
        (P = il(s, M)),
        0 < P.length &&
          ((M = new rd(M, e, null, n, f)),
          c.push({ event: M, listeners: P }),
          b ? (M.data = b) : ((b = zh(n)), b !== null && (M.data = b)))),
        (b = I0 ? $0(e, n) : M0(e, n)) &&
          ((s = il(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new rd("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: s }),
            (f.data = b)));
    }
    Lh(c, t);
  });
}
function Wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ro(e, n)),
      i != null && r.unshift(Wo(e, i, o)),
      (i = Ro(e, t)),
      i != null && r.push(Wo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function vd(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      o
        ? ((u = Ro(n, i)), u != null && l.unshift(Wo(n, u, a)))
        : o || ((u = Ro(n, i)), u != null && l.push(Wo(n, u, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var G0 = /\r\n?/g,
  q0 = /\u0000|\uFFFD/g;
function md(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      G0,
      `
`
    )
    .replace(q0, "");
}
function Oi(e, t, n) {
  if (((t = md(t)), md(e) !== t && n)) throw Error(I(425));
}
function ll() {}
var Ku = null,
  Gu = null;
function qu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qu = typeof setTimeout == "function" ? setTimeout : void 0,
  Q0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gd = typeof Promise == "function" ? Promise : void 0,
  Y0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gd < "u"
      ? function (e) {
          return gd.resolve(null).then(e).catch(X0);
        }
      : Qu;
function X0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ia(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Fo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Fo(t);
}
function wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function yd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kr = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + Kr,
  Uo = "__reactProps$" + Kr,
  nn = "__reactContainer$" + Kr,
  Yu = "__reactEvents$" + Kr,
  Z0 = "__reactListeners$" + Kr,
  J0 = "__reactHandles$" + Kr;
function Fn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nn] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = yd(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = yd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ti(e) {
  return (
    (e = e[Lt] || e[nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function Bl(e) {
  return e[Uo] || null;
}
var Xu = [],
  vr = -1;
function In(e) {
  return { current: e };
}
function Se(e) {
  0 > vr || ((e.current = Xu[vr]), (Xu[vr] = null), vr--);
}
function ve(e, t) {
  vr++, (Xu[vr] = e.current), (e.current = t);
}
var En = {},
  nt = In(En),
  st = In(!1),
  Kn = En;
function _r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function al() {
  Se(st), Se(nt);
}
function xd(e, t, n) {
  if (nt.current !== En) throw Error(I(168));
  ve(nt, t), ve(st, n);
}
function Wh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, Ay(e) || "Unknown", o));
  return Te({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (Kn = nt.current),
    ve(nt, e),
    ve(st, st.current),
    !0
  );
}
function wd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Wh(e, t, Kn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Se(st),
      Se(nt),
      ve(nt, e))
    : Se(st),
    ve(st, n);
}
var Yt = null,
  Wl = !1,
  $a = !1;
function Uh(e) {
  Yt === null ? (Yt = [e]) : Yt.push(e);
}
function e1(e) {
  (Wl = !0), Uh(e);
}
function $n() {
  if (!$a && Yt !== null) {
    $a = !0;
    var e = 0,
      t = se;
    try {
      var n = Yt;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Yt = null), (Wl = !1);
    } catch (o) {
      throw (Yt !== null && (Yt = Yt.slice(e + 1)), hh(wc, $n), o);
    } finally {
      (se = t), ($a = !1);
    }
  }
  return null;
}
var mr = [],
  gr = 0,
  sl = null,
  cl = 0,
  wt = [],
  St = 0,
  Gn = null,
  Xt = 1,
  Zt = "";
function Nn(e, t) {
  (mr[gr++] = cl), (mr[gr++] = sl), (sl = e), (cl = t);
}
function Vh(e, t, n) {
  (wt[St++] = Xt), (wt[St++] = Zt), (wt[St++] = Gn), (Gn = e);
  var r = Xt;
  e = Zt;
  var o = 32 - Mt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Mt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Xt = (1 << (32 - Mt(t) + o)) | (n << o) | r),
      (Zt = i + e);
  } else (Xt = (1 << i) | (n << o) | r), (Zt = e);
}
function Tc(e) {
  e.return !== null && (Nn(e, 1), Vh(e, 1, 0));
}
function _c(e) {
  for (; e === sl; )
    (sl = mr[--gr]), (mr[gr] = null), (cl = mr[--gr]), (mr[gr] = null);
  for (; e === Gn; )
    (Gn = wt[--St]),
      (wt[St] = null),
      (Zt = wt[--St]),
      (wt[St] = null),
      (Xt = wt[--St]),
      (wt[St] = null);
}
var ht = null,
  pt = null,
  Oe = !1,
  $t = null;
function Hh(e, t) {
  var n = kt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Sd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ht = e), (pt = wn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Gn !== null ? { id: Xt, overflow: Zt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ht = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ju(e) {
  if (Oe) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Sd(e, t)) {
        if (Zu(e)) throw Error(I(418));
        t = wn(n.nextSibling);
        var r = ht;
        t && Sd(e, t)
          ? Hh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Oe = !1), (ht = e));
      }
    } else {
      if (Zu(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Oe = !1), (ht = e);
    }
  }
}
function kd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ht = e;
}
function Ci(e) {
  if (e !== ht) return !1;
  if (!Oe) return kd(e), (Oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qu(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (Zu(e)) throw (Kh(), Error(I(418)));
    for (; t; ) Hh(e, t), (t = wn(t.nextSibling));
  }
  if ((kd(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = wn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = ht ? wn(e.stateNode.nextSibling) : null;
  return !0;
}
function Kh() {
  for (var e = pt; e; ) e = wn(e.nextSibling);
}
function Ir() {
  (pt = ht = null), (Oe = !1);
}
function Ic(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
var t1 = ln.ReactCurrentBatchConfig;
function _t(e, t) {
  if (e && e.defaultProps) {
    (t = Te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fl = In(null),
  dl = null,
  yr = null,
  $c = null;
function Mc() {
  $c = yr = dl = null;
}
function Nc(e) {
  var t = fl.current;
  Se(fl), (e._currentValue = t);
}
function es(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Er(e, t) {
  (dl = e),
    ($c = yr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Pt(e) {
  var t = e._currentValue;
  if ($c !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yr === null)) {
      if (dl === null) throw Error(I(308));
      (yr = e), (dl.dependencies = { lanes: 0, firstContext: e });
    } else yr = yr.next = e;
  return t;
}
var Dn = null;
function Rc(e) {
  Dn === null ? (Dn = [e]) : Dn.push(e);
}
function Gh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Rc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    rn(e, r)
  );
}
function rn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function jc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function en(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Sn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), oe & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      rn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Rc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    rn(e, n)
  );
}
function Fi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sc(e, n);
  }
}
function Od(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function pl(e, t, n, r) {
  var o = e.updateQueue;
  fn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), l === null ? (i = s) : (l.next = s), (l = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (f = s = u = null), (a = i);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            x = a;
          switch (((d = t), (m = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                c = g.call(m, c, d);
                break e;
              }
              c = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (d = typeof g == "function" ? g.call(m, c, d) : g),
                d == null)
              )
                break e;
              c = Te({}, c, d);
              break e;
            case 2:
              fn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = m), (u = c)) : (f = f.next = m),
          (l |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (f === null && (u = c),
      (o.baseState = u),
      (o.firstBaseUpdate = s),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Qn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function Cd(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var Qh = new Gp.Component().refs;
function ts(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      o = On(e),
      i = en(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && (Nt(t, e, o, r), Fi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ot(),
      o = On(e),
      i = en(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Sn(e, i, o)),
      t !== null && (Nt(t, e, o, r), Fi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ot(),
      r = On(e),
      o = en(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Sn(e, o, r)),
      t !== null && (Nt(t, e, r, n), Fi(t, e, r));
  },
};
function Pd(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lo(n, r) || !Lo(o, i)
      : !0
  );
}
function Yh(e, t, n) {
  var r = !1,
    o = En,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pt(i))
      : ((o = ct(t) ? Kn : nt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? _r(e, o) : En)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function bd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
}
function ns(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Qh), jc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Pt(i))
    : ((i = ct(t) ? Kn : nt.current), (o.context = _r(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ts(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ul.enqueueReplaceState(o, o.state, null),
      pl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function uo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Qh && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ed(e) {
  var t = e._init;
  return t(e._payload);
}
function Xh(e) {
  function t(h, p) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Cn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, v, k) {
    return p === null || p.tag !== 6
      ? ((p = Da(v, h.mode, k)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function u(h, p, v, k) {
    var C = v.type;
    return C === cr
      ? f(h, p, v.props.children, k, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === cn &&
            Ed(C) === p.type))
      ? ((k = o(p, v.props)), (k.ref = uo(h, p, v)), (k.return = h), k)
      : ((k = Vi(v.type, v.key, v.props, null, h.mode, k)),
        (k.ref = uo(h, p, v)),
        (k.return = h),
        k);
  }
  function s(h, p, v, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = La(v, h.mode, k)), (p.return = h), p)
      : ((p = o(p, v.children || [])), (p.return = h), p);
  }
  function f(h, p, v, k, C) {
    return p === null || p.tag !== 7
      ? ((p = Vn(v, h.mode, k, C)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function c(h, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Da("" + p, h.mode, v)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hi:
          return (
            (v = Vi(p.type, p.key, p.props, null, h.mode, v)),
            (v.ref = uo(h, null, p)),
            (v.return = h),
            v
          );
        case sr:
          return (p = La(p, h.mode, v)), (p.return = h), p;
        case cn:
          var k = p._init;
          return c(h, k(p._payload), v);
      }
      if (ho(p) || ro(p))
        return (p = Vn(p, h.mode, v, null)), (p.return = h), p;
      Pi(h, p);
    }
    return null;
  }
  function d(h, p, v, k) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : a(h, p, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case hi:
          return v.key === C ? u(h, p, v, k) : null;
        case sr:
          return v.key === C ? s(h, p, v, k) : null;
        case cn:
          return (C = v._init), d(h, p, C(v._payload), k);
      }
      if (ho(v) || ro(v)) return C !== null ? null : f(h, p, v, k, null);
      Pi(h, v);
    }
    return null;
  }
  function m(h, p, v, k, C) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(v) || null), a(p, h, "" + k, C);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case hi:
          return (h = h.get(k.key === null ? v : k.key) || null), u(p, h, k, C);
        case sr:
          return (h = h.get(k.key === null ? v : k.key) || null), s(p, h, k, C);
        case cn:
          var P = k._init;
          return m(h, p, v, P(k._payload), C);
      }
      if (ho(k) || ro(k)) return (h = h.get(v) || null), f(p, h, k, C, null);
      Pi(p, k);
    }
    return null;
  }
  function g(h, p, v, k) {
    for (
      var C = null, P = null, b = p, M = (p = 0), N = null;
      b !== null && M < v.length;
      M++
    ) {
      b.index > M ? ((N = b), (b = null)) : (N = b.sibling);
      var j = d(h, b, v[M], k);
      if (j === null) {
        b === null && (b = N);
        break;
      }
      e && b && j.alternate === null && t(h, b),
        (p = i(j, p, M)),
        P === null ? (C = j) : (P.sibling = j),
        (P = j),
        (b = N);
    }
    if (M === v.length) return n(h, b), Oe && Nn(h, M), C;
    if (b === null) {
      for (; M < v.length; M++)
        (b = c(h, v[M], k)),
          b !== null &&
            ((p = i(b, p, M)), P === null ? (C = b) : (P.sibling = b), (P = b));
      return Oe && Nn(h, M), C;
    }
    for (b = r(h, b); M < v.length; M++)
      (N = m(b, h, M, v[M], k)),
        N !== null &&
          (e && N.alternate !== null && b.delete(N.key === null ? M : N.key),
          (p = i(N, p, M)),
          P === null ? (C = N) : (P.sibling = N),
          (P = N));
    return (
      e &&
        b.forEach(function (W) {
          return t(h, W);
        }),
      Oe && Nn(h, M),
      C
    );
  }
  function x(h, p, v, k) {
    var C = ro(v);
    if (typeof C != "function") throw Error(I(150));
    if (((v = C.call(v)), v == null)) throw Error(I(151));
    for (
      var P = (C = null), b = p, M = (p = 0), N = null, j = v.next();
      b !== null && !j.done;
      M++, j = v.next()
    ) {
      b.index > M ? ((N = b), (b = null)) : (N = b.sibling);
      var W = d(h, b, j.value, k);
      if (W === null) {
        b === null && (b = N);
        break;
      }
      e && b && W.alternate === null && t(h, b),
        (p = i(W, p, M)),
        P === null ? (C = W) : (P.sibling = W),
        (P = W),
        (b = N);
    }
    if (j.done) return n(h, b), Oe && Nn(h, M), C;
    if (b === null) {
      for (; !j.done; M++, j = v.next())
        (j = c(h, j.value, k)),
          j !== null &&
            ((p = i(j, p, M)), P === null ? (C = j) : (P.sibling = j), (P = j));
      return Oe && Nn(h, M), C;
    }
    for (b = r(h, b); !j.done; M++, j = v.next())
      (j = m(b, h, M, j.value, k)),
        j !== null &&
          (e && j.alternate !== null && b.delete(j.key === null ? M : j.key),
          (p = i(j, p, M)),
          P === null ? (C = j) : (P.sibling = j),
          (P = j));
    return (
      e &&
        b.forEach(function (ce) {
          return t(h, ce);
        }),
      Oe && Nn(h, M),
      C
    );
  }
  function O(h, p, v, k) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === cr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case hi:
          e: {
            for (var C = v.key, P = p; P !== null; ) {
              if (P.key === C) {
                if (((C = v.type), C === cr)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = o(P, v.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === cn &&
                    Ed(C) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = o(P, v.props)),
                    (p.ref = uo(h, P, v)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            v.type === cr
              ? ((p = Vn(v.props.children, h.mode, k, v.key)),
                (p.return = h),
                (h = p))
              : ((k = Vi(v.type, v.key, v.props, null, h.mode, k)),
                (k.ref = uo(h, p, v)),
                (k.return = h),
                (h = k));
          }
          return l(h);
        case sr:
          e: {
            for (P = v.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = La(v, h.mode, k)), (p.return = h), (h = p);
          }
          return l(h);
        case cn:
          return (P = v._init), O(h, p, P(v._payload), k);
      }
      if (ho(v)) return g(h, p, v, k);
      if (ro(v)) return x(h, p, v, k);
      Pi(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = Da(v, h.mode, k)), (p.return = h), (h = p)),
        l(h))
      : n(h, p);
  }
  return O;
}
var $r = Xh(!0),
  Zh = Xh(!1),
  ni = {},
  Wt = In(ni),
  Vo = In(ni),
  Ho = In(ni);
function Ln(e) {
  if (e === ni) throw Error(I(174));
  return e;
}
function Ac(e, t) {
  switch ((ve(Ho, t), ve(Vo, e), ve(Wt, ni), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nu(t, e));
  }
  Se(Wt), ve(Wt, t);
}
function Mr() {
  Se(Wt), Se(Vo), Se(Ho);
}
function Jh(e) {
  Ln(Ho.current);
  var t = Ln(Wt.current),
    n = Nu(t, e.type);
  t !== n && (ve(Vo, e), ve(Wt, n));
}
function Fc(e) {
  Vo.current === e && (Se(Wt), Se(Vo));
}
var Ee = In(0);
function hl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ma = [];
function Dc() {
  for (var e = 0; e < Ma.length; e++)
    Ma[e]._workInProgressVersionPrimary = null;
  Ma.length = 0;
}
var Di = ln.ReactCurrentDispatcher,
  Na = ln.ReactCurrentBatchConfig,
  qn = 0,
  ze = null,
  Fe = null,
  Ue = null,
  vl = !1,
  Co = !1,
  Ko = 0,
  n1 = 0;
function Je() {
  throw Error(I(321));
}
function Lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!jt(e[n], t[n])) return !1;
  return !0;
}
function Bc(e, t, n, r, o, i) {
  if (
    ((qn = i),
    (ze = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Di.current = e === null || e.memoizedState === null ? l1 : a1),
    (e = n(r, o)),
    Co)
  ) {
    i = 0;
    do {
      if (((Co = !1), (Ko = 0), 25 <= i)) throw Error(I(301));
      (i += 1),
        (Ue = Fe = null),
        (t.updateQueue = null),
        (Di.current = u1),
        (e = n(r, o));
    } while (Co);
  }
  if (
    ((Di.current = ml),
    (t = Fe !== null && Fe.next !== null),
    (qn = 0),
    (Ue = Fe = ze = null),
    (vl = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Wc() {
  var e = Ko !== 0;
  return (Ko = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ue === null ? (ze.memoizedState = Ue = e) : (Ue = Ue.next = e), Ue;
}
function bt() {
  if (Fe === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = Ue === null ? ze.memoizedState : Ue.next;
  if (t !== null) (Ue = t), (Fe = e);
  else {
    if (e === null) throw Error(I(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      Ue === null ? (ze.memoizedState = Ue = e) : (Ue = Ue.next = e);
  }
  return Ue;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ra(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((qn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (l = r)) : (u = u.next = c),
          (ze.lanes |= f),
          (Qn |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (l = r) : (u.next = a),
      jt(r, t.memoizedState) || (ut = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ze.lanes |= i), (Qn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ja(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    jt(i, t.memoizedState) || (ut = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ev() {}
function tv(e, t) {
  var n = ze,
    r = bt(),
    o = t(),
    i = !jt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (ut = !0)),
    (r = r.queue),
    Uc(ov.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ue !== null && Ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      qo(9, rv.bind(null, n, r, o, t), void 0, null),
      Ke === null)
    )
      throw Error(I(349));
    qn & 30 || nv(n, t, o);
  }
  return o;
}
function nv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), iv(t) && lv(e);
}
function ov(e, t, n) {
  return n(function () {
    iv(t) && lv(e);
  });
}
function iv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !jt(e, n);
  } catch {
    return !0;
  }
}
function lv(e) {
  var t = rn(e, 1);
  t !== null && Nt(t, e, 1, -1);
}
function zd(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = i1.bind(null, ze, e)),
    [t.memoizedState, e]
  );
}
function qo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ze.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ze.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function av() {
  return bt().memoizedState;
}
function Li(e, t, n, r) {
  var o = Ft();
  (ze.flags |= e),
    (o.memoizedState = qo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vl(e, t, n, r) {
  var o = bt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Fe !== null) {
    var l = Fe.memoizedState;
    if (((i = l.destroy), r !== null && Lc(r, l.deps))) {
      o.memoizedState = qo(t, n, i, r);
      return;
    }
  }
  (ze.flags |= e), (o.memoizedState = qo(1 | t, n, i, r));
}
function Td(e, t) {
  return Li(8390656, 8, e, t);
}
function Uc(e, t) {
  return Vl(2048, 8, e, t);
}
function uv(e, t) {
  return Vl(4, 2, e, t);
}
function sv(e, t) {
  return Vl(4, 4, e, t);
}
function cv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function fv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vl(4, 4, cv.bind(null, t, e), n)
  );
}
function Vc() {}
function dv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function pv(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function hv(e, t, n) {
  return qn & 21
    ? (jt(n, t) || ((n = gh()), (ze.lanes |= n), (Qn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function r1(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Na.transition;
  Na.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (Na.transition = r);
  }
}
function vv() {
  return bt().memoizedState;
}
function o1(e, t, n) {
  var r = On(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    mv(e))
  )
    gv(t, n);
  else if (((n = Gh(e, t, n, r)), n !== null)) {
    var o = ot();
    Nt(n, e, r, o), yv(n, t, r);
  }
}
function i1(e, t, n) {
  var r = On(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (mv(e)) gv(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), jt(a, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Rc(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Gh(e, t, o, r)),
      n !== null && ((o = ot()), Nt(n, e, r, o), yv(n, t, r));
  }
}
function mv(e) {
  var t = e.alternate;
  return e === ze || (t !== null && t === ze);
}
function gv(e, t) {
  Co = vl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sc(e, n);
  }
}
var ml = {
    readContext: Pt,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  l1 = {
    readContext: Pt,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Pt,
    useEffect: Td,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Li(4194308, 4, cv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Li(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Li(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = o1.bind(null, ze, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: zd,
    useDebugValue: Vc,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = zd(!1),
        t = e[0];
      return (e = r1.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ze,
        o = Ft();
      if (Oe) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Ke === null)) throw Error(I(349));
        qn & 30 || nv(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Td(ov.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        qo(9, rv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = Ke.identifierPrefix;
      if (Oe) {
        var n = Zt,
          r = Xt;
        (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ko++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = n1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  a1 = {
    readContext: Pt,
    useCallback: dv,
    useContext: Pt,
    useEffect: Uc,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: sv,
    useMemo: pv,
    useReducer: Ra,
    useRef: av,
    useState: function () {
      return Ra(Go);
    },
    useDebugValue: Vc,
    useDeferredValue: function (e) {
      var t = bt();
      return hv(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ra(Go)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: ev,
    useSyncExternalStore: tv,
    useId: vv,
    unstable_isNewReconciler: !1,
  },
  u1 = {
    readContext: Pt,
    useCallback: dv,
    useContext: Pt,
    useEffect: Uc,
    useImperativeHandle: fv,
    useInsertionEffect: uv,
    useLayoutEffect: sv,
    useMemo: pv,
    useReducer: ja,
    useRef: av,
    useState: function () {
      return ja(Go);
    },
    useDebugValue: Vc,
    useDeferredValue: function (e) {
      var t = bt();
      return Fe === null ? (t.memoizedState = e) : hv(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ja(Go)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: ev,
    useSyncExternalStore: tv,
    useId: vv,
    unstable_isNewReconciler: !1,
  };
function Nr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Aa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var s1 = typeof WeakMap == "function" ? WeakMap : Map;
function xv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yl || ((yl = !0), (ps = r)), rs(e, t);
    }),
    n
  );
}
function wv(e, t, n) {
  (n = en(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        rs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        rs(e, t),
          typeof r != "function" &&
            (kn === null ? (kn = new Set([this])) : kn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function _d(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new s1();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = O1.bind(null, e, t, n)), t.then(e, e));
}
function Id(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $d(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = en(-1, 1)), (t.tag = 2), Sn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var c1 = ln.ReactCurrentOwner,
  ut = !1;
function rt(e, t, n, r) {
  t.child = e === null ? Zh(t, null, n, r) : $r(t, e.child, n, r);
}
function Md(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Er(t, o),
    (r = Bc(e, t, n, r, i, o)),
    (n = Wc()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (Oe && n && Tc(t), (t.flags |= 1), rt(e, t, r, o), t.child)
  );
}
function Nd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Zc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Sv(e, t, i, r, o))
      : ((e = Vi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lo), n(l, r) && e.ref === t.ref)
    )
      return on(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Cn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Sv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Lo(i, r) && e.ref === t.ref)
      if (((ut = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (ut = !0);
      else return (t.lanes = e.lanes), on(e, t, o);
  }
  return os(e, t, n, r, o);
}
function kv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(wr, dt),
        (dt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ve(wr, dt),
          (dt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ve(wr, dt),
        (dt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ve(wr, dt),
      (dt |= r);
  return rt(e, t, o, n), t.child;
}
function Ov(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function os(e, t, n, r, o) {
  var i = ct(n) ? Kn : nt.current;
  return (
    (i = _r(t, i)),
    Er(t, o),
    (n = Bc(e, t, n, r, i, o)),
    (r = Wc()),
    e !== null && !ut
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        on(e, t, o))
      : (Oe && r && Tc(t), (t.flags |= 1), rt(e, t, n, o), t.child)
  );
}
function Rd(e, t, n, r, o) {
  if (ct(n)) {
    var i = !0;
    ul(t);
  } else i = !1;
  if ((Er(t, o), t.stateNode === null))
    Bi(e, t), Yh(t, n, r), ns(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var u = l.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Pt(s))
      : ((s = ct(n) ? Kn : nt.current), (s = _r(t, s)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && bd(t, l, r, s)),
      (fn = !1);
    var d = t.memoizedState;
    (l.state = d),
      pl(t, r, l, o),
      (u = t.memoizedState),
      a !== r || d !== u || st.current || fn
        ? (typeof f == "function" && (ts(t, n, f, r), (u = t.memoizedState)),
          (a = fn || Pd(t, n, a, r, d, u, s))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = s),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      qh(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : _t(t.type, a)),
      (l.props = s),
      (c = t.pendingProps),
      (d = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Pt(u))
        : ((u = ct(n) ? Kn : nt.current), (u = _r(t, u)));
    var m = n.getDerivedStateFromProps;
    (f =
      typeof m == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || d !== u) && bd(t, l, r, u)),
      (fn = !1),
      (d = t.memoizedState),
      (l.state = d),
      pl(t, r, l, o);
    var g = t.memoizedState;
    a !== c || d !== g || st.current || fn
      ? (typeof m == "function" && (ts(t, n, m, r), (g = t.memoizedState)),
        (s = fn || Pd(t, n, s, r, d, g, u) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, g, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, g, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (l.props = r),
        (l.state = g),
        (l.context = u),
        (r = s))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return is(e, t, n, r, i, o);
}
function is(e, t, n, r, o, i) {
  Ov(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && wd(t, n, !1), on(e, t, i);
  (r = t.stateNode), (c1.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = $r(t, e.child, null, i)), (t.child = $r(t, null, a, i)))
      : rt(e, t, a, i),
    (t.memoizedState = r.state),
    o && wd(t, n, !0),
    t.child
  );
}
function Cv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xd(e, t.context, !1),
    Ac(e, t.containerInfo);
}
function jd(e, t, n, r, o) {
  return Ir(), Ic(o), (t.flags |= 256), rt(e, t, n, r), t.child;
}
var ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function as(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Pv(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ve(Ee, o & 1),
    e === null)
  )
    return (
      Ju(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Gl(l, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = as(n)),
              (t.memoizedState = ls),
              e)
            : Hc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return f1(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Cn(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Cn(a, i)) : ((i = Vn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? as(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ls),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Cn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Hc(e, t) {
  return (
    (t = Gl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function bi(e, t, n, r) {
  return (
    r !== null && Ic(r),
    $r(t, e.child, null, n),
    (e = Hc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function f1(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Aa(Error(I(422)))), bi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Gl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Vn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && $r(t, e.child, null, l),
        (t.child.memoizedState = as(l)),
        (t.memoizedState = ls),
        i);
  if (!(t.mode & 1)) return bi(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(I(419))), (r = Aa(i, r, void 0)), bi(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), ut || a)) {
    if (((r = Ke), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), rn(e, o), Nt(r, e, o, -1));
    }
    return Xc(), (r = Aa(Error(I(421)))), bi(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (pt = wn(o.nextSibling)),
      (ht = t),
      (Oe = !0),
      ($t = null),
      e !== null &&
        ((wt[St++] = Xt),
        (wt[St++] = Zt),
        (wt[St++] = Gn),
        (Xt = e.id),
        (Zt = e.overflow),
        (Gn = t)),
      (t = Hc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), es(e.return, t, n);
}
function Fa(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function bv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((rt(e, t, r.children, n), (r = Ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ad(e, n, t);
        else if (e.tag === 19) Ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ve(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && hl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fa(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && hl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fa(t, !0, n, null, i);
        break;
      case "together":
        Fa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function on(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d1(e, t, n) {
  switch (t.tag) {
    case 3:
      Cv(t), Ir();
      break;
    case 5:
      Jh(t);
      break;
    case 1:
      ct(t.type) && ul(t);
      break;
    case 4:
      Ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ve(fl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ve(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Pv(e, t, n)
          : (ve(Ee, Ee.current & 1),
            (e = on(e, t, n)),
            e !== null ? e.sibling : null);
      ve(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ve(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kv(e, t, n);
  }
  return on(e, t, n);
}
var Ev, us, zv, Tv;
Ev = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
us = function () {};
zv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ln(Wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = _u(e, o)), (r = _u(e, r)), (i = []);
        break;
      case "select":
        (o = Te({}, o, { value: void 0 })),
          (r = Te({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Mu(e, o)), (r = Mu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    Ru(n, r);
    var l;
    n = null;
    for (s in o)
      if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && o[s] != null)
        if (s === "style") {
          var a = o[s];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Mo.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = o != null ? o[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                a[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Mo.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && xe("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Tv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function so(e, t) {
  if (!Oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function et(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function p1(e, t, n) {
  var r = t.pendingProps;
  switch ((_c(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return et(t), null;
    case 1:
      return ct(t.type) && al(), et(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Mr(),
        Se(st),
        Se(nt),
        Dc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ci(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $t !== null && (ms($t), ($t = null)))),
        us(e, t),
        et(t),
        null
      );
    case 5:
      Fc(t);
      var o = Ln(Ho.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return et(t), null;
        }
        if (((e = Ln(Wt.current)), Ci(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Lt] = t), (r[Uo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < mo.length; o++) xe(mo[o], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe("error", r), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              Kf(r, i), xe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                xe("invalid", r);
              break;
            case "textarea":
              qf(r, i), xe("invalid", r);
          }
          Ru(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Mo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  xe("scroll", r);
            }
          switch (n) {
            case "input":
              vi(r), Gf(r, i, !0);
              break;
            case "textarea":
              vi(r), Qf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ll);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Lt] = t),
            (e[Uo] = r),
            Ev(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ju(n, r)), n)) {
              case "dialog":
                xe("cancel", e), xe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < mo.length; o++) xe(mo[o], e);
                o = r;
                break;
              case "source":
                xe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", e), xe("load", e), (o = r);
                break;
              case "details":
                xe("toggle", e), (o = r);
                break;
              case "input":
                Kf(e, r), (o = _u(e, r)), xe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Te({}, r, { value: void 0 })),
                  xe("invalid", e);
                break;
              case "textarea":
                qf(e, r), (o = Mu(e, r)), xe("invalid", e);
                break;
              default:
                o = r;
            }
            Ru(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? ih(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && rh(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && No(e, u)
                    : typeof u == "number" && No(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Mo.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && xe("scroll", e)
                      : u != null && vc(e, i, u, l));
              }
            switch (n) {
              case "input":
                vi(e), Gf(e, r, !1);
                break;
              case "textarea":
                vi(e), Qf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Or(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ll);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return et(t), null;
    case 6:
      if (e && t.stateNode != null) Tv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = Ln(Ho.current)), Ln(Wt.current), Ci(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (i = r.nodeValue !== n) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return et(t), null;
    case 13:
      if (
        (Se(Ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Oe && pt !== null && t.mode & 1 && !(t.flags & 128))
          Kh(), Ir(), (t.flags |= 98560), (i = !1);
        else if (((i = Ci(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[Lt] = t;
          } else
            Ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          et(t), (i = !1);
        } else $t !== null && (ms($t), ($t = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ee.current & 1 ? De === 0 && (De = 3) : Xc())),
          t.updateQueue !== null && (t.flags |= 4),
          et(t),
          null);
    case 4:
      return (
        Mr(), us(e, t), e === null && Bo(t.stateNode.containerInfo), et(t), null
      );
    case 10:
      return Nc(t.type._context), et(t), null;
    case 17:
      return ct(t.type) && al(), et(t), null;
    case 19:
      if ((Se(Ee), (i = t.memoizedState), i === null)) return et(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) so(i, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = hl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    so(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ve(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Me() > Rr &&
            ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              so(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Oe)
            )
              return et(t), null;
          } else
            2 * Me() - i.renderingStartTime > Rr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), so(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Me()),
          (t.sibling = null),
          (n = Ee.current),
          ve(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (et(t), null);
    case 22:
    case 23:
      return (
        Yc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? dt & 1073741824 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : et(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function h1(e, t) {
  switch ((_c(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mr(),
        Se(st),
        Se(nt),
        Dc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fc(t), null;
    case 13:
      if (
        (Se(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Se(Ee), null;
    case 4:
      return Mr(), null;
    case 10:
      return Nc(t.type._context), null;
    case 22:
    case 23:
      return Yc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  tt = !1,
  v1 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function xr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ie(e, t, r);
      }
    else n.current = null;
}
function ss(e, t, n) {
  try {
    n();
  } catch (r) {
    Ie(e, t, r);
  }
}
var Fd = !1;
function m1(e, t) {
  if (((Ku = rl), (e = Mh()), zc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = l + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (u = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (m = c.firstChild) !== null;

            )
              (d = c), (c = m);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++s === o && (a = l),
                d === i && ++f === r && (u = l),
                (m = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = m;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gu = { focusedElem: e, selectionRange: n }, rl = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    O = g.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : _t(t.type, x),
                      O
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (k) {
          Ie(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = Fd), (Fd = !1), g;
}
function Po(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && ss(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function cs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function _v(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), _v(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[Uo], delete t[Yu], delete t[Z0], delete t[J0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Iv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Iv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fs(e, t, n), e = e.sibling; e !== null; ) fs(e, t, n), (e = e.sibling);
}
function ds(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ds(e, t, n), e = e.sibling; e !== null; ) ds(e, t, n), (e = e.sibling);
}
var Ge = null,
  It = !1;
function un(e, t, n) {
  for (n = n.child; n !== null; ) $v(e, t, n), (n = n.sibling);
}
function $v(e, t, n) {
  if (Bt && typeof Bt.onCommitFiberUnmount == "function")
    try {
      Bt.onCommitFiberUnmount(Al, n);
    } catch {}
  switch (n.tag) {
    case 5:
      tt || xr(n, t);
    case 6:
      var r = Ge,
        o = It;
      (Ge = null),
        un(e, t, n),
        (Ge = r),
        (It = o),
        Ge !== null &&
          (It
            ? ((e = Ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ge.removeChild(n.stateNode));
      break;
    case 18:
      Ge !== null &&
        (It
          ? ((e = Ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ia(e.parentNode, n)
              : e.nodeType === 1 && Ia(e, n),
            Fo(e))
          : Ia(Ge, n.stateNode));
      break;
    case 4:
      (r = Ge),
        (o = It),
        (Ge = n.stateNode.containerInfo),
        (It = !0),
        un(e, t, n),
        (Ge = r),
        (It = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !tt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && ss(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      un(e, t, n);
      break;
    case 1:
      if (
        !tt &&
        (xr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ie(n, t, a);
        }
      un(e, t, n);
      break;
    case 21:
      un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((tt = (r = tt) || n.memoizedState !== null), un(e, t, n), (tt = r))
        : un(e, t, n);
      break;
    default:
      un(e, t, n);
  }
}
function Ld(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new v1()),
      t.forEach(function (r) {
        var o = P1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Tt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ge = a.stateNode), (It = !1);
              break e;
            case 3:
              (Ge = a.stateNode.containerInfo), (It = !0);
              break e;
            case 4:
              (Ge = a.stateNode.containerInfo), (It = !0);
              break e;
          }
          a = a.return;
        }
        if (Ge === null) throw Error(I(160));
        $v(i, l, o), (Ge = null), (It = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (s) {
        Ie(o, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Mv(t, e), (t = t.sibling);
}
function Mv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tt(t, e), At(e), r & 4)) {
        try {
          Po(3, e, e.return), Hl(3, e);
        } catch (x) {
          Ie(e, e.return, x);
        }
        try {
          Po(5, e, e.return);
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      break;
    case 1:
      Tt(t, e), At(e), r & 512 && n !== null && xr(n, n.return);
      break;
    case 5:
      if (
        (Tt(t, e),
        At(e),
        r & 512 && n !== null && xr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          No(o, "");
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && eh(o, i),
              ju(a, l);
            var s = ju(a, i);
            for (l = 0; l < u.length; l += 2) {
              var f = u[l],
                c = u[l + 1];
              f === "style"
                ? ih(o, c)
                : f === "dangerouslySetInnerHTML"
                ? rh(o, c)
                : f === "children"
                ? No(o, c)
                : vc(o, f, c, s);
            }
            switch (a) {
              case "input":
                Iu(o, i);
                break;
              case "textarea":
                th(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Or(o, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(o, !!i.multiple, i.defaultValue, !0)
                      : Or(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Uo] = i;
          } catch (x) {
            Ie(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Tt(t, e), At(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          Ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Tt(t, e), At(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fo(t.containerInfo);
        } catch (x) {
          Ie(e, e.return, x);
        }
      break;
    case 4:
      Tt(t, e), At(e);
      break;
    case 13:
      Tt(t, e),
        At(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (qc = Me())),
        r & 4 && Ld(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((tt = (s = tt) || f), Tt(t, e), (tt = s)) : Tt(t, e),
        At(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (R = e, f = e.child; f !== null; ) {
            for (c = R = f; R !== null; ) {
              switch (((d = R), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Po(4, d, d.return);
                  break;
                case 1:
                  xr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (x) {
                      Ie(r, n, x);
                    }
                  }
                  break;
                case 5:
                  xr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Wd(c);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (R = m)) : Wd(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  s
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = oh("display", l)));
              } catch (x) {
                Ie(e, e.return, x);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = s ? "" : c.memoizedProps;
              } catch (x) {
                Ie(e, e.return, x);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Tt(t, e), At(e), r & 4 && Ld(e);
      break;
    case 21:
      break;
    default:
      Tt(t, e), At(e);
  }
}
function At(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Iv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (No(o, ""), (r.flags &= -33));
          var i = Dd(e);
          ds(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Dd(e);
          fs(e, a, l);
          break;
        default:
          throw Error(I(161));
      }
    } catch (u) {
      Ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g1(e, t, n) {
  (R = e), Nv(e);
}
function Nv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ei;
      if (!l) {
        var a = o.alternate,
          u = (a !== null && a.memoizedState !== null) || tt;
        a = Ei;
        var s = tt;
        if (((Ei = l), (tt = u) && !s))
          for (R = o; R !== null; )
            (l = R),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Ud(o)
                : u !== null
                ? ((u.return = l), (R = u))
                : Ud(o);
        for (; i !== null; ) (R = i), Nv(i), (i = i.sibling);
        (R = o), (Ei = a), (tt = s);
      }
      Bd(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : Bd(e);
  }
}
function Bd(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              tt || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !tt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Cd(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Cd(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Fo(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        tt || (t.flags & 512 && cs(t));
      } catch (d) {
        Ie(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Wd(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Ud(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (u) {
            Ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ie(t, o, u);
            }
          }
          var i = t.return;
          try {
            cs(t);
          } catch (u) {
            Ie(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            cs(t);
          } catch (u) {
            Ie(t, l, u);
          }
      }
    } catch (u) {
      Ie(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (R = a);
      break;
    }
    R = t.return;
  }
}
var y1 = Math.ceil,
  gl = ln.ReactCurrentDispatcher,
  Kc = ln.ReactCurrentOwner,
  Ct = ln.ReactCurrentBatchConfig,
  oe = 0,
  Ke = null,
  je = null,
  qe = 0,
  dt = 0,
  wr = In(0),
  De = 0,
  Qo = null,
  Qn = 0,
  Kl = 0,
  Gc = 0,
  bo = null,
  at = null,
  qc = 0,
  Rr = 1 / 0,
  qt = null,
  yl = !1,
  ps = null,
  kn = null,
  zi = !1,
  vn = null,
  xl = 0,
  Eo = 0,
  hs = null,
  Wi = -1,
  Ui = 0;
function ot() {
  return oe & 6 ? Me() : Wi !== -1 ? Wi : (Wi = Me());
}
function On(e) {
  return e.mode & 1
    ? oe & 2 && qe !== 0
      ? qe & -qe
      : t1.transition !== null
      ? (Ui === 0 && (Ui = gh()), Ui)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ch(e.type))),
        e)
    : 1;
}
function Nt(e, t, n, r) {
  if (50 < Eo) throw ((Eo = 0), (hs = null), Error(I(185)));
  Jo(e, n, r),
    (!(oe & 2) || e !== Ke) &&
      (e === Ke && (!(oe & 2) && (Kl |= n), De === 4 && pn(e, qe)),
      ft(e, r),
      n === 1 && oe === 0 && !(t.mode & 1) && ((Rr = Me() + 500), Wl && $n()));
}
function ft(e, t) {
  var n = e.callbackNode;
  t0(e, t);
  var r = nl(e, e === Ke ? qe : 0);
  if (r === 0)
    n !== null && Zf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zf(n), t === 1))
      e.tag === 0 ? e1(Vd.bind(null, e)) : Uh(Vd.bind(null, e)),
        Y0(function () {
          !(oe & 6) && $n();
        }),
        (n = null);
    else {
      switch (yh(r)) {
        case 1:
          n = wc;
          break;
        case 4:
          n = vh;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = mh;
          break;
        default:
          n = tl;
      }
      n = Wv(n, Rv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rv(e, t) {
  if (((Wi = -1), (Ui = 0), oe & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (zr() && e.callbackNode !== n) return null;
  var r = nl(e, e === Ke ? qe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var o = oe;
    oe |= 2;
    var i = Av();
    (Ke !== e || qe !== t) && ((qt = null), (Rr = Me() + 500), Un(e, t));
    do
      try {
        S1();
        break;
      } catch (a) {
        jv(e, a);
      }
    while (1);
    Mc(),
      (gl.current = i),
      (oe = o),
      je !== null ? (t = 0) : ((Ke = null), (qe = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Bu(e)), o !== 0 && ((r = o), (t = vs(e, o)))), t === 1)
    )
      throw ((n = Qo), Un(e, 0), pn(e, r), ft(e, Me()), n);
    if (t === 6) pn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !x1(o) &&
          ((t = wl(e, r)),
          t === 2 && ((i = Bu(e)), i !== 0 && ((r = i), (t = vs(e, i)))),
          t === 1))
      )
        throw ((n = Qo), Un(e, 0), pn(e, r), ft(e, Me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          Rn(e, at, qt);
          break;
        case 3:
          if (
            (pn(e, r), (r & 130023424) === r && ((t = qc + 500 - Me()), 10 < t))
          ) {
            if (nl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ot(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Qu(Rn.bind(null, e, at, qt), t);
            break;
          }
          Rn(e, at, qt);
          break;
        case 4:
          if ((pn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - Mt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * y1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qu(Rn.bind(null, e, at, qt), r);
            break;
          }
          Rn(e, at, qt);
          break;
        case 5:
          Rn(e, at, qt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return ft(e, Me()), e.callbackNode === n ? Rv.bind(null, e) : null;
}
function vs(e, t) {
  var n = bo;
  return (
    e.current.memoizedState.isDehydrated && (Un(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && ms(t)),
    e
  );
}
function ms(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function x1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!jt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function pn(e, t) {
  for (
    t &= ~Gc,
      t &= ~Kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vd(e) {
  if (oe & 6) throw Error(I(327));
  zr();
  var t = nl(e, 0);
  if (!(t & 1)) return ft(e, Me()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bu(e);
    r !== 0 && ((t = r), (n = vs(e, r)));
  }
  if (n === 1) throw ((n = Qo), Un(e, 0), pn(e, t), ft(e, Me()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, at, qt),
    ft(e, Me()),
    null
  );
}
function Qc(e, t) {
  var n = oe;
  oe |= 1;
  try {
    return e(t);
  } finally {
    (oe = n), oe === 0 && ((Rr = Me() + 500), Wl && $n());
  }
}
function Yn(e) {
  vn !== null && vn.tag === 0 && !(oe & 6) && zr();
  var t = oe;
  oe |= 1;
  var n = Ct.transition,
    r = se;
  try {
    if (((Ct.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (Ct.transition = n), (oe = t), !(oe & 6) && $n();
  }
}
function Yc() {
  (dt = wr.current), Se(wr);
}
function Un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Q0(n)), je !== null))
    for (n = je.return; n !== null; ) {
      var r = n;
      switch ((_c(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && al();
          break;
        case 3:
          Mr(), Se(st), Se(nt), Dc();
          break;
        case 5:
          Fc(r);
          break;
        case 4:
          Mr();
          break;
        case 13:
          Se(Ee);
          break;
        case 19:
          Se(Ee);
          break;
        case 10:
          Nc(r.type._context);
          break;
        case 22:
        case 23:
          Yc();
      }
      n = n.return;
    }
  if (
    ((Ke = e),
    (je = e = Cn(e.current, null)),
    (qe = dt = t),
    (De = 0),
    (Qo = null),
    (Gc = Kl = Qn = 0),
    (at = bo = null),
    Dn !== null)
  ) {
    for (t = 0; t < Dn.length; t++)
      if (((n = Dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Dn = null;
  }
  return e;
}
function jv(e, t) {
  do {
    var n = je;
    try {
      if ((Mc(), (Di.current = ml), vl)) {
        for (var r = ze.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vl = !1;
      }
      if (
        ((qn = 0),
        (Ue = Fe = ze = null),
        (Co = !1),
        (Ko = 0),
        (Kc.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (Qo = t), (je = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          u = t;
        if (
          ((t = qe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var m = Id(l);
          if (m !== null) {
            (m.flags &= -257),
              $d(m, l, a, i, t),
              m.mode & 1 && _d(i, s, t),
              (t = m),
              (u = s);
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              _d(i, s, t), Xc();
              break e;
            }
            u = Error(I(426));
          }
        } else if (Oe && a.mode & 1) {
          var O = Id(l);
          if (O !== null) {
            !(O.flags & 65536) && (O.flags |= 256),
              $d(O, l, a, i, t),
              Ic(Nr(u, a));
            break e;
          }
        }
        (i = u = Nr(u, a)),
          De !== 4 && (De = 2),
          bo === null ? (bo = [i]) : bo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = xv(i, u, t);
              Od(i, h);
              break e;
            case 1:
              a = u;
              var p = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (kn === null || !kn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = wv(i, a, t);
                Od(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Dv(n);
    } catch (C) {
      (t = C), je === n && n !== null && (je = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Av() {
  var e = gl.current;
  return (gl.current = ml), e === null ? ml : e;
}
function Xc() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    Ke === null || (!(Qn & 268435455) && !(Kl & 268435455)) || pn(Ke, qe);
}
function wl(e, t) {
  var n = oe;
  oe |= 2;
  var r = Av();
  (Ke !== e || qe !== t) && ((qt = null), Un(e, t));
  do
    try {
      w1();
      break;
    } catch (o) {
      jv(e, o);
    }
  while (1);
  if ((Mc(), (oe = n), (gl.current = r), je !== null)) throw Error(I(261));
  return (Ke = null), (qe = 0), De;
}
function w1() {
  for (; je !== null; ) Fv(je);
}
function S1() {
  for (; je !== null && !Ky(); ) Fv(je);
}
function Fv(e) {
  var t = Bv(e.alternate, e, dt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dv(e) : (je = t),
    (Kc.current = null);
}
function Dv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = h1(n, t)), n !== null)) {
        (n.flags &= 32767), (je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (je = null);
        return;
      }
    } else if (((n = p1(n, t, dt)), n !== null)) {
      je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      je = t;
      return;
    }
    je = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function Rn(e, t, n) {
  var r = se,
    o = Ct.transition;
  try {
    (Ct.transition = null), (se = 1), k1(e, t, n, r);
  } finally {
    (Ct.transition = o), (se = r);
  }
  return null;
}
function k1(e, t, n, r) {
  do zr();
  while (vn !== null);
  if (oe & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (n0(e, i),
    e === Ke && ((je = Ke = null), (qe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zi ||
      ((zi = !0),
      Wv(tl, function () {
        return zr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ct.transition), (Ct.transition = null);
    var l = se;
    se = 1;
    var a = oe;
    (oe |= 4),
      (Kc.current = null),
      m1(e, n),
      Mv(n, e),
      W0(Gu),
      (rl = !!Ku),
      (Gu = Ku = null),
      (e.current = n),
      g1(n),
      Gy(),
      (oe = a),
      (se = l),
      (Ct.transition = i);
  } else e.current = n;
  if (
    (zi && ((zi = !1), (vn = e), (xl = o)),
    (i = e.pendingLanes),
    i === 0 && (kn = null),
    Yy(n.stateNode),
    ft(e, Me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yl) throw ((yl = !1), (e = ps), (ps = null), e);
  return (
    xl & 1 && e.tag !== 0 && zr(),
    (i = e.pendingLanes),
    i & 1 ? (e === hs ? Eo++ : ((Eo = 0), (hs = e))) : (Eo = 0),
    $n(),
    null
  );
}
function zr() {
  if (vn !== null) {
    var e = yh(xl),
      t = Ct.transition,
      n = se;
    try {
      if (((Ct.transition = null), (se = 16 > e ? 16 : e), vn === null))
        var r = !1;
      else {
        if (((e = vn), (vn = null), (xl = 0), oe & 6)) throw Error(I(331));
        var o = oe;
        for (oe |= 4, R = e.current; R !== null; ) {
          var i = R,
            l = i.child;
          if (R.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (R = s; R !== null; ) {
                  var f = R;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Po(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (R = c);
                  else
                    for (; R !== null; ) {
                      f = R;
                      var d = f.sibling,
                        m = f.return;
                      if ((_v(f), f === s)) {
                        R = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (R = d);
                        break;
                      }
                      R = m;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var O = x.sibling;
                    (x.sibling = null), (x = O);
                  } while (x !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (R = l);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Po(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (R = h);
                break e;
              }
              R = i.return;
            }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          l = R;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (R = v);
          else
            e: for (l = p; R !== null; ) {
              if (((a = R), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, a);
                  }
                } catch (C) {
                  Ie(a, a.return, C);
                }
              if (a === l) {
                R = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (R = k);
                break e;
              }
              R = a.return;
            }
        }
        if (
          ((oe = o), $n(), Bt && typeof Bt.onPostCommitFiberRoot == "function")
        )
          try {
            Bt.onPostCommitFiberRoot(Al, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (Ct.transition = t);
    }
  }
  return !1;
}
function Hd(e, t, n) {
  (t = Nr(n, t)),
    (t = xv(e, t, 1)),
    (e = Sn(e, t, 1)),
    (t = ot()),
    e !== null && (Jo(e, 1, t), ft(e, t));
}
function Ie(e, t, n) {
  if (e.tag === 3) Hd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kn === null || !kn.has(r)))
        ) {
          (e = Nr(n, e)),
            (e = wv(t, e, 1)),
            (t = Sn(t, e, 1)),
            (e = ot()),
            t !== null && (Jo(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function O1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ke === e &&
      (qe & n) === n &&
      (De === 4 || (De === 3 && (qe & 130023424) === qe && 500 > Me() - qc)
        ? Un(e, 0)
        : (Gc |= n)),
    ft(e, t);
}
function Lv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = ot();
  (e = rn(e, t)), e !== null && (Jo(e, t, n), ft(e, n));
}
function C1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lv(e, n);
}
function P1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Lv(e, n);
}
var Bv;
Bv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) ut = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), d1(e, t, n);
      ut = !!(e.flags & 131072);
    }
  else (ut = !1), Oe && t.flags & 1048576 && Vh(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bi(e, t), (e = t.pendingProps);
      var o = _r(t, nt.current);
      Er(t, n), (o = Bc(null, t, r, e, o, n));
      var i = Wc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(r) ? ((i = !0), ul(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            jc(t),
            (o.updater = Ul),
            (t.stateNode = o),
            (o._reactInternals = t),
            ns(t, r, e, n),
            (t = is(null, t, r, !0, i, n)))
          : ((t.tag = 0), Oe && i && Tc(t), rt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = E1(r)),
          (e = _t(r, e)),
          o)
        ) {
          case 0:
            t = os(null, t, r, e, n);
            break e;
          case 1:
            t = Rd(null, t, r, e, n);
            break e;
          case 11:
            t = Md(null, t, r, e, n);
            break e;
          case 14:
            t = Nd(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        os(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Rd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Cv(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          qh(e, t),
          pl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Nr(Error(I(423)), t)), (t = jd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Nr(Error(I(424)), t)), (t = jd(e, t, r, n, o));
            break e;
          } else
            for (
              pt = wn(t.stateNode.containerInfo.firstChild),
                ht = t,
                Oe = !0,
                $t = null,
                n = Zh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ir(), r === o)) {
            t = on(e, t, n);
            break e;
          }
          rt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jh(t),
        e === null && Ju(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        qu(r, o) ? (l = null) : i !== null && qu(r, i) && (t.flags |= 32),
        Ov(e, t),
        rt(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ju(t), null;
    case 13:
      return Pv(e, t, n);
    case 4:
      return (
        Ac(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = $r(t, null, r, n)) : rt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Md(e, t, r, o, n)
      );
    case 7:
      return rt(e, t, t.pendingProps, n), t.child;
    case 8:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ve(fl, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (jt(i.value, l)) {
            if (i.children === o.children && !st.current) {
              t = on(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = en(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      es(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(I(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  es(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        rt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Er(t, n),
        (o = Pt(o)),
        (r = r(o)),
        (t.flags |= 1),
        rt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = _t(r, t.pendingProps)),
        (o = _t(r.type, o)),
        Nd(e, t, r, o, n)
      );
    case 15:
      return Sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Bi(e, t),
        (t.tag = 1),
        ct(r) ? ((e = !0), ul(t)) : (e = !1),
        Er(t, n),
        Yh(t, r, o),
        ns(t, r, o, n),
        is(null, t, r, !0, e, n)
      );
    case 19:
      return bv(e, t, n);
    case 22:
      return kv(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Wv(e, t) {
  return hh(e, t);
}
function b1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kt(e, t, n, r) {
  return new b1(e, t, n, r);
}
function Zc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function E1(e) {
  if (typeof e == "function") return Zc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gc)) return 11;
    if (e === yc) return 14;
  }
  return 2;
}
function Cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = kt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Zc(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case cr:
        return Vn(n.children, o, i, t);
      case mc:
        (l = 8), (o |= 8);
        break;
      case bu:
        return (
          (e = kt(12, n, t, o | 2)), (e.elementType = bu), (e.lanes = i), e
        );
      case Eu:
        return (e = kt(13, n, t, o)), (e.elementType = Eu), (e.lanes = i), e;
      case zu:
        return (e = kt(19, n, t, o)), (e.elementType = zu), (e.lanes = i), e;
      case Xp:
        return Gl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qp:
              l = 10;
              break e;
            case Yp:
              l = 9;
              break e;
            case gc:
              l = 11;
              break e;
            case yc:
              l = 14;
              break e;
            case cn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = kt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Vn(e, t, n, r) {
  return (e = kt(7, e, r, t)), (e.lanes = n), e;
}
function Gl(e, t, n, r) {
  return (
    (e = kt(22, e, r, t)),
    (e.elementType = Xp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Da(e, t, n) {
  return (e = kt(6, e, null, t)), (e.lanes = n), e;
}
function La(e, t, n) {
  return (
    (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function z1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wa(0)),
    (this.expirationTimes = wa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Jc(e, t, n, r, o, i, l, a, u) {
  return (
    (e = new z1(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = kt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    jc(i),
    e
  );
}
function T1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uv(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ct(n)) return Wh(e, n, t);
  }
  return t;
}
function Vv(e, t, n, r, o, i, l, a, u) {
  return (
    (e = Jc(n, r, !0, e, o, i, l, a, u)),
    (e.context = Uv(null)),
    (n = e.current),
    (r = ot()),
    (o = On(n)),
    (i = en(r, o)),
    (i.callback = t ?? null),
    Sn(n, i, o),
    (e.current.lanes = o),
    Jo(e, o, r),
    ft(e, r),
    e
  );
}
function ql(e, t, n, r) {
  var o = t.current,
    i = ot(),
    l = On(o);
  return (
    (n = Uv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = en(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Sn(o, t, l)),
    e !== null && (Nt(e, o, l, i), Fi(e, o, l)),
    l
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ef(e, t) {
  Kd(e, t), (e = e.alternate) && Kd(e, t);
}
function _1() {
  return null;
}
var Hv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function tf(e) {
  this._internalRoot = e;
}
Ql.prototype.render = tf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  ql(e, t, null, null);
};
Ql.prototype.unmount = tf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function () {
      ql(null, e, null, null);
    }),
      (t[nn] = null);
  }
};
function Ql(e) {
  this._internalRoot = e;
}
Ql.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && Oh(e);
  }
};
function nf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gd() {}
function I1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Sl(l);
        i.call(s);
      };
    }
    var l = Vv(t, r, e, 0, null, !1, !1, "", Gd);
    return (
      (e._reactRootContainer = l),
      (e[nn] = l.current),
      Bo(e.nodeType === 8 ? e.parentNode : e),
      Yn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Sl(u);
      a.call(s);
    };
  }
  var u = Jc(e, 0, !1, null, null, !1, !1, "", Gd);
  return (
    (e._reactRootContainer = u),
    (e[nn] = u.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    Yn(function () {
      ql(t, u, n, r);
    }),
    u
  );
}
function Xl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var u = Sl(l);
        a.call(u);
      };
    }
    ql(t, l, e, o);
  } else l = I1(n, t, e, o, r);
  return Sl(l);
}
xh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = vo(t.pendingLanes);
        n !== 0 &&
          (Sc(t, n | 1), ft(t, Me()), !(oe & 6) && ((Rr = Me() + 500), $n()));
      }
      break;
    case 13:
      Yn(function () {
        var r = rn(e, 1);
        if (r !== null) {
          var o = ot();
          Nt(r, e, 1, o);
        }
      }),
        ef(e, 1);
  }
};
kc = function (e) {
  if (e.tag === 13) {
    var t = rn(e, 134217728);
    if (t !== null) {
      var n = ot();
      Nt(t, e, 134217728, n);
    }
    ef(e, 134217728);
  }
};
wh = function (e) {
  if (e.tag === 13) {
    var t = On(e),
      n = rn(e, t);
    if (n !== null) {
      var r = ot();
      Nt(n, e, t, r);
    }
    ef(e, t);
  }
};
Sh = function () {
  return se;
};
kh = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
Fu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Iu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bl(r);
            if (!o) throw Error(I(90));
            Jp(r), Iu(r, o);
          }
        }
      }
      break;
    case "textarea":
      th(e, n);
      break;
    case "select":
      (t = n.value), t != null && Or(e, !!n.multiple, t, !1);
  }
};
uh = Qc;
sh = Yn;
var $1 = { usingClientEntryPoint: !1, Events: [ti, hr, Bl, lh, ah, Qc] },
  co = {
    findFiberByHostInstance: Fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  M1 = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ln.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: co.findFiberByHostInstance || _1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ti.isDisabled && Ti.supportsFiber)
    try {
      (Al = Ti.inject(M1)), (Bt = Ti);
    } catch {}
}
mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nf(t)) throw Error(I(200));
  return T1(e, t, null, n);
};
mt.createRoot = function (e, t) {
  if (!nf(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = Hv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Jc(e, 1, !1, null, null, n, !1, r, o)),
    (e[nn] = t.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    new tf(t)
  );
};
mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = dh(t)), (e = e === null ? null : e.stateNode), e;
};
mt.flushSync = function (e) {
  return Yn(e);
};
mt.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(I(200));
  return Xl(null, e, t, !0, n);
};
mt.hydrateRoot = function (e, t, n) {
  if (!nf(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Hv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Vv(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[nn] = t.current),
    Bo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ql(t);
};
mt.render = function (e, t, n) {
  if (!Yl(t)) throw Error(I(200));
  return Xl(null, e, t, !1, n);
};
mt.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Yn(function () {
        Xl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nn] = null);
        });
      }),
      !0)
    : !1;
};
mt.unstable_batchedUpdates = Qc;
mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Xl(e, t, n, !1, r);
};
mt.version = "18.2.0-next-9e3b772b8-20220608";
function Kv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kv);
    } catch (e) {
      console.error(e);
    }
}
Kv(), (Vp.exports = mt);
var Gv = Vp.exports,
  qd = Gv;
(Cu.createRoot = qd.createRoot), (Cu.hydrateRoot = qd.hydrateRoot);
var qv = { exports: {} },
  N1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  R1 = N1,
  j1 = R1;
function Qv() {}
function Yv() {}
Yv.resetWarningCache = Qv;
var A1 = function () {
  function e(r, o, i, l, a, u) {
    if (u !== j1) {
      var s = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((s.name = "Invariant Violation"), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Yv,
    resetWarningCache: Qv,
  };
  return (n.PropTypes = n), n;
};
qv.exports = A1();
var F1 = qv.exports;
const w = uc(F1);
var D1 = w.string;
w.oneOfType([
  w.oneOf(["baseline", "center", "end", "start", "stretch"]),
  w.string,
]);
var gs = w.oneOf([
    "fadeIn",
    "fadeOut",
    "jiggle",
    "pulse",
    "rotateLeft",
    "rotateRight",
    "slideUp",
    "slideDown",
    "slideLeft",
    "slideRight",
    "zoomIn",
    "zoomOut",
  ]),
  Qd = w.shape({
    type: gs,
    delay: w.number,
    duration: w.number,
    size: w.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
  }),
  L1 = w.oneOfType([gs, Qd, w.arrayOf(w.oneOfType([gs, Qd]))]),
  B1 = w.oneOfType([w.string, w.shape({ dark: w.string, light: w.string })]),
  Yd = w.oneOfType([
    w.string,
    w.shape({
      clip: w.oneOfType([w.oneOf(["text"]), w.string]),
      color: B1,
      dark: w.oneOfType([w.bool, w.string]),
      image: w.string,
      position: w.string,
      opacity: w.oneOfType([
        w.string,
        w.bool,
        w.number,
        w.oneOf(["weak", "medium", "strong"]),
      ]),
      repeat: w.oneOfType([w.oneOf(["no-repeat", "repeat"]), w.string]),
      rotate: w.oneOfType([w.number, w.string]),
      size: w.oneOfType([w.oneOf(["cover", "contain"]), w.string]),
      light: w.string,
    }),
  ]),
  Kt = ["xxsmall", "xsmall", "small", "medium", "large", "xlarge"],
  W1 = w.oneOfType([
    w.oneOf(["none"].concat(Kt)),
    w.shape({
      bottom: w.oneOfType([w.oneOf(Kt), w.string]),
      end: w.oneOfType([w.oneOf(Kt), w.string]),
      horizontal: w.oneOfType([w.oneOf(Kt), w.string]),
      left: w.oneOfType([w.oneOf(Kt), w.string]),
      right: w.oneOfType([w.oneOf(Kt), w.string]),
      start: w.oneOfType([w.oneOf(Kt), w.string]),
      top: w.oneOfType([w.oneOf(Kt), w.string]),
      vertical: w.oneOfType([w.oneOf(Kt), w.string]),
    }),
    w.string,
  ]),
  Gt = ["xxsmall", "xsmall", "small", "medium", "large", "xlarge"];
w.oneOfType([
  w.oneOf(["none"].concat(Gt)),
  w.shape({
    bottom: w.oneOfType([w.oneOf(Gt), w.string]),
    end: w.oneOfType([w.oneOf(Gt), w.string]),
    horizontal: w.oneOfType([w.oneOf(Gt), w.string]),
    left: w.oneOfType([w.oneOf(Gt), w.string]),
    right: w.oneOfType([w.oneOf(Gt), w.string]),
    start: w.oneOfType([w.oneOf(Gt), w.string]),
    top: w.oneOfType([w.oneOf(Gt), w.string]),
    vertical: w.oneOfType([w.oneOf(Gt), w.string]),
  }),
  w.string,
]);
w.oneOf(["start", "center", "end", "stretch", "baseline"]), w.string;
var U1 = w.oneOfType([
  w.oneOf(["none", "xsmall", "small", "medium", "large", "xlarge"]),
  w.string,
]);
w.oneOfType([
  w.bool,
  w.string,
  w.oneOf(["background"]),
  Yd,
  w.shape({ background: Yd, elevation: U1 }),
]);
w.oneOf(["circle", "diamond", "square", "star", "triangle", "triangleDown"]);
w.oneOf([
  "squares",
  "circles",
  "stripesHorizontal",
  "stripesVertical",
  "stripesDiagonalDown",
  "stripesDiagonalUp",
]);
w.oneOfType([
  w.bool,
  w.oneOf(["xsmall", "small", "medium", "large", "xlarge", "full"]),
  w.string,
  w.shape({
    corner: w.oneOf([
      "top",
      "left",
      "bottom",
      "right",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
    ]),
    size: w.oneOfType([
      w.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
      w.string,
    ]),
  }),
]);
var V1 = w.shape({ dark: w.arrayOf(w.string), light: w.arrayOf(w.string) });
w.oneOfType([
  w.bool,
  w.shape({
    animation: L1,
    colors: V1,
    depth: w.number,
    message: w.oneOfType([
      w.string,
      w.shape({ start: w.string, end: w.string }),
    ]),
  }),
]);
var mn = w.oneOf([
  "xxsmall",
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
]);
w.oneOfType([
  mn,
  w.string,
  w.shape({
    height: w.oneOfType([mn, w.string]),
    min: w.oneOfType([mn, w.string]),
    max: w.oneOfType([mn, w.string]),
  }),
]);
w.oneOfType([
  mn,
  w.string,
  w.shape({
    width: w.oneOfType([mn, w.string]),
    min: w.oneOfType([mn, w.string]),
    max: w.oneOfType([mn, w.string]),
  }),
]);
var Ba = ["auto", "hidden", "scroll", "visible"],
  H1 = {},
  K1 = H1,
  Ae = function () {
    return (
      (Ae =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      Ae.apply(this, arguments)
    );
  };
function jr(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var G1 = function (t, n, r, o) {
  var i = r ? r.call(o, t, n) : void 0;
  if (i !== void 0) return !!i;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var l = Object.keys(t),
    a = Object.keys(n);
  if (l.length !== a.length) return !1;
  for (
    var u = Object.prototype.hasOwnProperty.bind(n), s = 0;
    s < l.length;
    s++
  ) {
    var f = l[s];
    if (!u(f)) return !1;
    var c = t[f],
      d = n[f];
    if (
      ((i = r ? r.call(o, c, d, f) : void 0),
      i === !1 || (i === void 0 && c !== d))
    )
      return !1;
  }
  return !0;
};
const q1 = uc(G1);
var we = "-ms-",
  zo = "-moz-",
  ue = "-webkit-",
  Xv = "comm",
  Zl = "rule",
  rf = "decl",
  Q1 = "@import",
  Zv = "@keyframes",
  Y1 = "@layer",
  X1 = Math.abs,
  of = String.fromCharCode,
  ys = Object.assign;
function Z1(e, t) {
  return Ve(e, 0) ^ 45
    ? (((((((t << 2) ^ Ve(e, 0)) << 2) ^ Ve(e, 1)) << 2) ^ Ve(e, 2)) << 2) ^
        Ve(e, 3)
    : 0;
}
function Jv(e) {
  return e.trim();
}
function Qt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
  return e.replace(t, n);
}
function Hi(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ar(e, t, n) {
  return e.slice(t, n);
}
function Dt(e) {
  return e.length;
}
function em(e) {
  return e.length;
}
function go(e, t) {
  return t.push(e), e;
}
function J1(e, t) {
  return e.map(t).join("");
}
function Xd(e, t) {
  return e.filter(function (n) {
    return !Qt(n, t);
  });
}
var Jl = 1,
  Fr = 1,
  tm = 0,
  Et = 0,
  Re = 0,
  Gr = "";
function ea(e, t, n, r, o, i, l, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Jl,
    column: Fr,
    length: l,
    return: "",
    siblings: a,
  };
}
function sn(e, t) {
  return ys(
    ea("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function lr(e) {
  for (; e.root; ) e = sn(e.root, { children: [e] });
  go(e, e.siblings);
}
function ex() {
  return Re;
}
function tx() {
  return (
    (Re = Et > 0 ? Ve(Gr, --Et) : 0), Fr--, Re === 10 && ((Fr = 1), Jl--), Re
  );
}
function Rt() {
  return (
    (Re = Et < tm ? Ve(Gr, Et++) : 0), Fr++, Re === 10 && ((Fr = 1), Jl++), Re
  );
}
function Hn() {
  return Ve(Gr, Et);
}
function Ki() {
  return Et;
}
function ta(e, t) {
  return Ar(Gr, e, t);
}
function xs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function nx(e) {
  return (Jl = Fr = 1), (tm = Dt((Gr = e))), (Et = 0), [];
}
function rx(e) {
  return (Gr = ""), e;
}
function Wa(e) {
  return Jv(ta(Et - 1, ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ox(e) {
  for (; (Re = Hn()) && Re < 33; ) Rt();
  return xs(e) > 2 || xs(Re) > 3 ? "" : " ";
}
function ix(e, t) {
  for (
    ;
    --t &&
    Rt() &&
    !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97));

  );
  return ta(e, Ki() + (t < 6 && Hn() == 32 && Rt() == 32));
}
function ws(e) {
  for (; Rt(); )
    switch (Re) {
      case e:
        return Et;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ws(Re);
        break;
      case 40:
        e === 41 && ws(e);
        break;
      case 92:
        Rt();
        break;
    }
  return Et;
}
function lx(e, t) {
  for (; Rt() && e + Re !== 47 + 10; )
    if (e + Re === 42 + 42 && Hn() === 47) break;
  return "/*" + ta(t, Et - 1) + "*" + of(e === 47 ? e : Rt());
}
function ax(e) {
  for (; !xs(Hn()); ) Rt();
  return ta(e, Et);
}
function ux(e) {
  return rx(Gi("", null, null, null, [""], (e = nx(e)), 0, [0], e));
}
function Gi(e, t, n, r, o, i, l, a, u) {
  for (
    var s = 0,
      f = 0,
      c = l,
      d = 0,
      m = 0,
      g = 0,
      x = 1,
      O = 1,
      h = 1,
      p = 0,
      v = "",
      k = o,
      C = i,
      P = r,
      b = v;
    O;

  )
    switch (((g = p), (p = Rt()))) {
      case 40:
        if (g != 108 && Ve(b, c - 1) == 58) {
          Hi((b += K(Wa(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += Wa(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += ox(g);
        break;
      case 92:
        b += ix(Ki() - 1, 7);
        continue;
      case 47:
        switch (Hn()) {
          case 42:
          case 47:
            go(sx(lx(Rt(), Ki()), t, n, u), u);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * x:
        a[s++] = Dt(b) * h;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            O = 0;
          case 59 + f:
            h == -1 && (b = K(b, /\f/g, "")),
              m > 0 &&
                Dt(b) - c &&
                go(
                  m > 32
                    ? Jd(b + ";", r, n, c - 1, u)
                    : Jd(K(b, " ", "") + ";", r, n, c - 2, u),
                  u
                );
            break;
          case 59:
            b += ";";
          default:
            if (
              (go(
                (P = Zd(b, t, n, s, f, o, a, v, (k = []), (C = []), c, i)),
                i
              ),
              p === 123)
            )
              if (f === 0) Gi(b, t, P, P, k, i, c, a, C);
              else
                switch (d === 99 && Ve(b, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gi(
                      e,
                      P,
                      P,
                      r && go(Zd(e, P, P, 0, 0, o, a, v, o, (k = []), c, C), C),
                      o,
                      C,
                      c,
                      a,
                      r ? k : C
                    );
                    break;
                  default:
                    Gi(b, P, P, P, [""], C, 0, a, C);
                }
        }
        (s = f = m = 0), (x = h = 1), (v = b = ""), (c = l);
        break;
      case 58:
        (c = 1 + Dt(b)), (m = g);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && tx() == 125) continue;
        }
        switch (((b += of(p)), p * x)) {
          case 38:
            h = f > 0 ? 1 : ((b += "\f"), -1);
            break;
          case 44:
            (a[s++] = (Dt(b) - 1) * h), (h = 1);
            break;
          case 64:
            Hn() === 45 && (b += Wa(Rt())),
              (d = Hn()),
              (f = c = Dt((v = b += ax(Ki())))),
              p++;
            break;
          case 45:
            g === 45 && Dt(b) == 2 && (x = 0);
        }
    }
  return i;
}
function Zd(e, t, n, r, o, i, l, a, u, s, f, c) {
  for (
    var d = o - 1, m = o === 0 ? i : [""], g = em(m), x = 0, O = 0, h = 0;
    x < r;
    ++x
  )
    for (var p = 0, v = Ar(e, d + 1, (d = X1((O = l[x])))), k = e; p < g; ++p)
      (k = Jv(O > 0 ? m[p] + " " + v : K(v, /&\f/g, m[p]))) && (u[h++] = k);
  return ea(e, t, n, o === 0 ? Zl : a, u, s, f, c);
}
function sx(e, t, n, r) {
  return ea(e, t, n, Xv, of(ex()), Ar(e, 2, -2), 0, r);
}
function Jd(e, t, n, r, o) {
  return ea(e, t, n, rf, Ar(e, 0, r), Ar(e, r + 1, -1), r, o);
}
function nm(e, t, n) {
  switch (Z1(e, t)) {
    case 5103:
      return ue + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ue + e + e;
    case 4789:
      return zo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ue + e + zo + e + we + e + e;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return ue + e + we + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ue + e + we + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ue + e + we + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ue + e + we + e + e;
    case 6165:
      return ue + e + we + "flex-" + e + e;
    case 5187:
      return (
        ue + e + K(e, /(\w+).+(:[^]+)/, ue + "box-$1$2" + we + "flex-$1$2") + e
      );
    case 5443:
      return (
        ue +
        e +
        we +
        "flex-item-" +
        K(e, /flex-|-self/g, "") +
        (Qt(e, /flex-|baseline/)
          ? ""
          : we + "grid-row-" + K(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        ue +
        e +
        we +
        "flex-line-pack" +
        K(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return ue + e + we + K(e, "shrink", "negative") + e;
    case 5292:
      return ue + e + we + K(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ue +
        "box-" +
        K(e, "-grow", "") +
        ue +
        e +
        we +
        K(e, "grow", "positive") +
        e
      );
    case 4554:
      return ue + K(e, /([^-])(transform)/g, "$1" + ue + "$2") + e;
    case 6187:
      return (
        K(K(K(e, /(zoom-|grab)/, ue + "$1"), /(image-set)/, ue + "$1"), e, "") +
        e
      );
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, ue + "$1$`$1");
    case 4968:
      return (
        K(
          K(e, /(.+:)(flex-)?(.*)/, ue + "box-pack:$3" + we + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ue +
        e +
        e
      );
    case 4200:
      if (!Qt(e, /flex-|baseline/))
        return we + "grid-column-align" + Ar(e, t) + e;
      break;
    case 2592:
    case 3360:
      return we + K(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Qt(r.props, /grid-\w+-end/);
        })
        ? ~Hi(e + (n = n[t].value), "span")
          ? e
          : we +
            K(e, "-start", "") +
            e +
            we +
            "grid-row-span:" +
            (~Hi(n, "span") ? Qt(n, /\d+/) : +Qt(n, /\d+/) - +Qt(e, /\d+/)) +
            ";"
        : we + K(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Qt(r.props, /grid-\w+-start/);
        })
        ? e
        : we + K(K(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, ue + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Dt(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          case 109:
            if (Ve(e, t + 4) !== 45) break;
          case 102:
            return (
              K(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ue +
                  "$2-$3$1" +
                  zo +
                  (Ve(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Hi(e, "stretch")
              ? nm(K(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return K(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, o, i, l, a, u, s) {
          return (
            we +
            o +
            ":" +
            i +
            s +
            (l ? we + o + "-span:" + (a ? u : +u - +i) + s : "") +
            e
          );
        }
      );
    case 4949:
      if (Ve(e, t + 6) === 121) return K(e, ":", ":" + ue) + e;
      break;
    case 6444:
      switch (Ve(e, Ve(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            K(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                ue +
                (Ve(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ue +
                "$2$3$1" +
                we +
                "$2box$3"
            ) + e
          );
        case 100:
          return K(e, ":", ":" + we) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return K(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function kl(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function cx(e, t, n, r) {
  switch (e.type) {
    case Y1:
      if (e.children.length) break;
    case Q1:
    case rf:
      return (e.return = e.return || e.value);
    case Xv:
      return "";
    case Zv:
      return (e.return = e.value + "{" + kl(e.children, r) + "}");
    case Zl:
      if (!Dt((e.value = e.props.join(",")))) return "";
  }
  return Dt((n = kl(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function fx(e) {
  var t = em(e);
  return function (n, r, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](n, r, o, i) || "";
    return l;
  };
}
function dx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function px(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case rf:
        e.return = nm(e.value, e.length, n);
        return;
      case Zv:
        return kl([sn(e, { value: K(e.value, "@", "@" + ue) })], r);
      case Zl:
        if (e.length)
          return J1((n = e.props), function (o) {
            switch (Qt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                lr(sn(e, { props: [K(o, /:(read-\w+)/, ":" + zo + "$1")] })),
                  lr(sn(e, { props: [o] })),
                  ys(e, { props: Xd(n, r) });
                break;
              case "::placeholder":
                lr(
                  sn(e, { props: [K(o, /:(plac\w+)/, ":" + ue + "input-$1")] })
                ),
                  lr(sn(e, { props: [K(o, /:(plac\w+)/, ":" + zo + "$1")] })),
                  lr(sn(e, { props: [K(o, /:(plac\w+)/, we + "input-$1")] })),
                  lr(sn(e, { props: [o] })),
                  ys(e, { props: Xd(n, r) });
                break;
            }
            return "";
          });
    }
}
var hx = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  zn =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  vx = "6.0.7",
  lf = typeof window < "u" && "HTMLElement" in window,
  mx = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  gx = {},
  na = Object.freeze([]),
  Dr = Object.freeze({});
function af(e, t, n) {
  return (
    n === void 0 && (n = Dr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var rm = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  yx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  xx = /(^-|-$)/g;
function ep(e) {
  return e.replace(yx, "-").replace(xx, "");
}
var wx = /(a)(d)/gi,
  tp = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Ss(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = tp(t % 52) + n;
  return (tp(t % 52) + n).replace(wx, "$1-$2");
}
var Ua,
  Sr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  om = function (e) {
    return Sr(5381, e);
  };
function uf(e) {
  return Ss(om(e) >>> 0);
}
function Sx(e) {
  return e.displayName || e.name || "Component";
}
function Va(e) {
  return typeof e == "string" && !0;
}
var im = typeof Symbol == "function" && Symbol.for,
  lm = im ? Symbol.for("react.memo") : 60115,
  kx = im ? Symbol.for("react.forward_ref") : 60112,
  Ox = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Cx = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  am = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Px =
    (((Ua = {})[kx] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Ua[lm] = am),
    Ua);
function np(e) {
  return ("type" in (t = e) && t.type.$$typeof) === lm
    ? am
    : "$$typeof" in e
    ? Px[e.$$typeof]
    : Ox;
  var t;
}
var bx = Object.defineProperty,
  Ex = Object.getOwnPropertyNames,
  rp = Object.getOwnPropertySymbols,
  zx = Object.getOwnPropertyDescriptor,
  Tx = Object.getPrototypeOf,
  op = Object.prototype;
function sf(e, t, n) {
  if (typeof t != "string") {
    if (op) {
      var r = Tx(t);
      r && r !== op && sf(e, r, n);
    }
    var o = Ex(t);
    rp && (o = o.concat(rp(t)));
    for (var i = np(e), l = np(t), a = 0; a < o.length; ++a) {
      var u = o[a];
      if (!(u in Cx || (n && n[u]) || (l && u in l) || (i && u in i))) {
        var s = zx(t, u);
        try {
          bx(e, u, s);
        } catch {}
      }
    }
  }
  return e;
}
function Xn(e) {
  return typeof e == "function";
}
function ra(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Bn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Yo(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function Xo(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ks(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Xo(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ks(e[r], t[r]);
  else if (Xo(t)) for (var r in t) e[r] = ks(e[r], t[r]);
  return e;
}
function cf(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Ot(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var _x = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; )
            if ((i <<= 1) < 0) throw Ot(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var l = o; l < i; l++) this.groupSizes[l] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), u = ((l = 0), n.length);
          l < u;
          l++
        )
          this.tag.insertRule(a, n[l]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            o = this.indexOfGroup(t),
            i = o + r,
            l = o;
          l < i;
          l++
        )
          n += "".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  qi = new Map(),
  Ol = new Map(),
  Ha = 1,
  _i = function (e) {
    if (qi.has(e)) return qi.get(e);
    for (; Ol.has(Ha); ) Ha++;
    var t = Ha++;
    return qi.set(e, t), Ol.set(t, e), t;
  },
  Ix = function (e, t) {
    qi.set(e, t), Ol.set(t, e);
  },
  $x = "style["
    .concat(zn, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.7", '"]'),
  Mx = new RegExp(
    "^".concat(zn, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Nx = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  Rx = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        o = [],
        i = 0,
        l = r.length;
      i < l;
      i++
    ) {
      var a = r[i].trim();
      if (a) {
        var u = a.match(Mx);
        if (u) {
          var s = 0 | parseInt(u[1], 10),
            f = u[2];
          s !== 0 && (Ix(f, s), Nx(e, f, u[3]), e.getTag().insertRules(s, o)),
            (o.length = 0);
        } else o.push(a);
      }
    }
  };
function Os() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var um = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (a) {
        var u = Array.from(a.querySelectorAll("style[".concat(zn, "]")));
        return u[u.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(zn, "active"),
      r.setAttribute("data-styled-version", "6.0.7");
    var l = Os();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
  },
  jx = (function () {
    function e(t) {
      (this.element = um(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var l = r[o];
            if (l.ownerNode === n) return l;
          }
          throw Ot(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  Ax = (function () {
    function e(t) {
      (this.element = um(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Fx = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  ip = lf,
  Dx = { isServer: !lf, useCSSOMInjection: !mx },
  Lr = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Dr), n === void 0 && (n = {});
      var o = this;
      (this.options = Ae(Ae({}, Dx), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          lf &&
          ip &&
          ((ip = !1),
          (function (i) {
            for (
              var l = document.querySelectorAll($x), a = 0, u = l.length;
              a < u;
              a++
            ) {
              var s = l[a];
              s &&
                s.getAttribute(zn) !== "active" &&
                (Rx(i, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this)),
        cf(this, function () {
          return (function (i) {
            for (
              var l = i.getTag(),
                a = l.length,
                u = "",
                s = function (c) {
                  var d = (function (h) {
                    return Ol.get(h);
                  })(c);
                  if (d === void 0) return "continue";
                  var m = i.names.get(d),
                    g = l.getGroup(c);
                  if (m === void 0 || g.length === 0) return "continue";
                  var x = ""
                      .concat(zn, ".g")
                      .concat(c, '[id="')
                      .concat(d, '"]'),
                    O = "";
                  m !== void 0 &&
                    m.forEach(function (h) {
                      h.length > 0 && (O += "".concat(h, ","));
                    }),
                    (u += "".concat(g).concat(x, '{content:"').concat(O, '"}')
                      .concat(`/*!sc*/
`));
                },
                f = 0;
              f < a;
              f++
            )
              s(f);
            return u;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return _i(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Ae(Ae({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new Fx(o) : r ? new jx(o) : new Ax(o);
            })(this.options)),
            new _x(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((_i(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(_i(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(_i(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  Lx = /&/g,
  Bx = /^\s*\/\/.*$/gm;
function sm(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = sm(n.children, t)),
      n
    );
  });
}
function cm(e) {
  var t,
    n,
    r,
    o = e === void 0 ? Dr : e,
    i = o.options,
    l = i === void 0 ? Dr : i,
    a = o.plugins,
    u = a === void 0 ? na : a,
    s = function (d, m, g) {
      return g === n ||
        (g.startsWith(n) && g.endsWith(n) && g.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : d;
    },
    f = u.slice();
  f.push(function (d) {
    d.type === Zl &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(Lx, n).replace(r, s));
  }),
    l.prefix && f.push(px),
    f.push(cx);
  var c = function (d, m, g, x) {
    m === void 0 && (m = ""),
      g === void 0 && (g = ""),
      x === void 0 && (x = "&"),
      (t = x),
      (n = m),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var O = d.replace(Bx, ""),
      h = ux(g || m ? "".concat(g, " ").concat(m, " { ").concat(O, " }") : O);
    l.namespace && (h = sm(h, l.namespace));
    var p = [];
    return (
      kl(
        h,
        fx(
          f.concat(
            dx(function (v) {
              return p.push(v);
            })
          )
        )
      ),
      p
    );
  };
  return (
    (c.hash = u.length
      ? u
          .reduce(function (d, m) {
            return m.name || Ot(15), Sr(d, m.name);
          }, 5381)
          .toString()
      : ""),
    c
  );
}
var fm = new Lr(),
  Cs = cm(),
  oa = E.createContext({
    shouldForwardProp: void 0,
    styleSheet: fm,
    stylis: Cs,
  }),
  Wx = oa.Consumer,
  Ux = E.createContext(void 0);
function Cl() {
  return y.useContext(oa);
}
function dm(e) {
  var t = y.useState(e.stylisPlugins),
    n = t[0],
    r = t[1],
    o = Cl().styleSheet,
    i = y.useMemo(
      function () {
        var a = o;
        return (
          e.sheet
            ? (a = e.sheet)
            : e.target &&
              (a = a.reconstructWithOptions({ target: e.target }, !1)),
          e.disableCSSOMInjection &&
            (a = a.reconstructWithOptions({ useCSSOMInjection: !1 })),
          a
        );
      },
      [e.disableCSSOMInjection, e.sheet, e.target, o]
    ),
    l = y.useMemo(
      function () {
        return cm({
          options: { namespace: e.namespace, prefix: e.enableVendorPrefixes },
          plugins: n,
        });
      },
      [e.enableVendorPrefixes, e.namespace, n]
    );
  return (
    y.useEffect(
      function () {
        q1(n, e.stylisPlugins) || r(e.stylisPlugins);
      },
      [e.stylisPlugins]
    ),
    E.createElement(
      oa.Provider,
      {
        value: {
          shouldForwardProp: e.shouldForwardProp,
          styleSheet: i,
          stylis: l,
        },
      },
      E.createElement(Ux.Provider, { value: l }, e.children)
    )
  );
}
var pm = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Cs);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) ||
          o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        cf(this, function () {
          throw Ot(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Cs), this.name + t.hash;
      }),
      e
    );
  })(),
  Vx = function (e) {
    return e >= "A" && e <= "Z";
  };
function lp(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    Vx(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var hm = function (e) {
    return e == null || e === !1 || e === "";
  },
  vm = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !hm(i) &&
        ((Array.isArray(i) && i.isCss) || Xn(i)
          ? r.push("".concat(lp(o), ":"), i, ";")
          : Xo(i)
          ? r.push.apply(r, jr(jr(["".concat(o, " {")], vm(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(lp(o), ": ")
                .concat(
                  ((t = o),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in hx ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Pn(e, t, n, r) {
  if (hm(e)) return [];
  if (ra(e)) return [".".concat(e.styledComponentId)];
  if (Xn(e)) {
    if (!Xn((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var o = e(t);
    return Pn(o, t, n, r);
  }
  var i;
  return e instanceof pm
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Xo(e)
    ? vm(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        na,
        e.map(function (l) {
          return Pn(l, t, n, r);
        })
      )
    : [e.toString()];
}
function mm(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Xn(n) && !ra(n)) return !1;
  }
  return !0;
}
var Hx = om("6.0.7"),
  Kx = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && mm(t)),
        (this.componentId = n),
        (this.baseHash = Sr(Hx, n)),
        (this.baseStyle = r),
        Lr.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            o = Bn(o, this.staticRulesId);
          else {
            var i = Yo(Pn(this.rules, t, n, r)),
              l = Ss(Sr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var a = r(i, ".".concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, a);
            }
            (o = Bn(o, l)), (this.staticRulesId = l);
          }
        else {
          for (
            var u = Sr(this.baseHash, r.hash), s = "", f = 0;
            f < this.rules.length;
            f++
          ) {
            var c = this.rules[f];
            if (typeof c == "string") s += c;
            else if (c) {
              var d = Yo(Pn(c, t, n, r));
              (u = Sr(u, d)), (s += d);
            }
          }
          if (s) {
            var m = Ss(u >>> 0);
            n.hasNameForId(this.componentId, m) ||
              n.insertRules(
                this.componentId,
                m,
                r(s, ".".concat(m), void 0, this.componentId)
              ),
              (o = Bn(o, m));
          }
        }
        return o;
      }),
      e
    );
  })(),
  _e = E.createContext(void 0),
  Gx = _e.Consumer;
function qx() {
  var e = y.useContext(_e);
  if (!e) throw Ot(18);
  return e;
}
function Qx(e) {
  var t = E.useContext(_e),
    n = y.useMemo(
      function () {
        return (function (r, o) {
          if (!r) throw Ot(14);
          if (Xn(r)) {
            var i = r(o);
            return i;
          }
          if (Array.isArray(r) || typeof r != "object") throw Ot(8);
          return o ? Ae(Ae({}, o), r) : r;
        })(e.theme, t);
      },
      [e.theme, t]
    );
  return e.children
    ? E.createElement(_e.Provider, { value: n }, e.children)
    : null;
}
var Ka = {};
function Yx(e, t, n) {
  var r = ra(e),
    o = e,
    i = !Va(e),
    l = t.attrs,
    a = l === void 0 ? na : l,
    u = t.componentId,
    s =
      u === void 0
        ? (function (v, k) {
            var C = typeof v != "string" ? "sc" : ep(v);
            Ka[C] = (Ka[C] || 0) + 1;
            var P = "".concat(C, "-").concat(uf("6.0.7" + C + Ka[C]));
            return k ? "".concat(k, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : u,
    f = t.displayName;
  f === void 0 &&
    (function (v) {
      return Va(v) ? "styled.".concat(v) : "Styled(".concat(Sx(v), ")");
    })(e);
  var c =
      t.displayName && t.componentId
        ? "".concat(ep(t.displayName), "-").concat(t.componentId)
        : t.componentId || s,
    d = r && o.attrs ? o.attrs.concat(a).filter(Boolean) : a,
    m = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var g = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var x = t.shouldForwardProp;
      m = function (v, k) {
        return g(v, k) && x(v, k);
      };
    } else m = g;
  }
  var O = new Kx(n, c, r ? o.componentStyle : void 0);
  function h(v, k) {
    return (function (C, P, b) {
      var M = C.attrs,
        N = C.componentStyle,
        j = C.defaultProps,
        W = C.foldedComponentIds,
        ce = C.styledComponentId,
        D = C.target,
        ee = E.useContext(_e),
        H = Cl(),
        ke = C.shouldForwardProp || H.shouldForwardProp,
        q = (function (G, Q, ie) {
          for (
            var te, Y = Ae(Ae({}, Q), { className: void 0, theme: ie }), F = 0;
            F < G.length;
            F += 1
          ) {
            var L = Xn((te = G[F])) ? te(Y) : te;
            for (var X in L)
              Y[X] =
                X === "className"
                  ? Bn(Y[X], L[X])
                  : X === "style"
                  ? Ae(Ae({}, Y[X]), L[X])
                  : L[X];
          }
          return Q.className && (Y.className = Bn(Y.className, Q.className)), Y;
        })(M, P, af(P, ee, j) || Dr),
        T = q.as || D,
        $ = {};
      for (var _ in q)
        q[_] === void 0 ||
          _[0] === "$" ||
          _ === "as" ||
          _ === "theme" ||
          (_ === "forwardedAs"
            ? ($.as = q.forwardedAs)
            : (ke && !ke(_, T)) || ($[_] = q[_]));
      var A = (function (G, Q) {
          var ie = Cl(),
            te = G.generateAndInjectStyles(Q, ie.styleSheet, ie.stylis);
          return te;
        })(N, q),
        U = Bn(W, ce);
      return (
        A && (U += " " + A),
        q.className && (U += " " + q.className),
        ($[Va(T) && !rm.has(T) ? "class" : "className"] = U),
        ($.ref = b),
        y.createElement(T, $)
      );
    })(p, v, k);
  }
  var p = E.forwardRef(h);
  return (
    (p.attrs = d),
    (p.componentStyle = O),
    (p.shouldForwardProp = m),
    (p.foldedComponentIds = r
      ? Bn(o.foldedComponentIds, o.styledComponentId)
      : ""),
    (p.styledComponentId = c),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var C = [], P = 1; P < arguments.length; P++)
                C[P - 1] = arguments[P];
              for (var b = 0, M = C; b < M.length; b++) ks(k, M[b], !0);
              return k;
            })({}, o.defaultProps, v)
          : v;
      },
    }),
    cf(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      sf(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function ap(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var up = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function z(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Xn(e) || Xo(e)) {
    var r = e;
    return up(Pn(ap(na, jr([r], t, !0))));
  }
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string"
    ? Pn(o)
    : up(Pn(ap(o, t)));
}
function Ps(e, t, n) {
  if ((n === void 0 && (n = Dr), !t)) throw Ot(1, t);
  var r = function (o) {
    for (var i = [], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
    return e(t, n, z.apply(void 0, jr([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return Ps(
        e,
        t,
        Ae(Ae({}, n), {
          attrs: Array.prototype.concat(n.attrs, o).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (o) {
      return Ps(e, t, Ae(Ae({}, n), o));
    }),
    r
  );
}
var gm = function (e) {
    return Ps(Yx, e);
  },
  ne = gm;
rm.forEach(function (e) {
  ne[e] = gm(e);
});
var Xx = (function () {
  function e(t, n) {
    (this.rules = t),
      (this.componentId = n),
      (this.isStatic = mm(t)),
      Lr.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, n, r, o) {
      var i = o(Yo(Pn(this.rules, n, r, o)), ""),
        l = this.componentId + t;
      r.insertRules(l, l, i);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, o) {
      t > 2 && Lr.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, o);
    }),
    e
  );
})();
function Zx(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = z.apply(void 0, jr([e], t, !1)),
    o = "sc-global-".concat(uf(JSON.stringify(r))),
    i = new Xx(r, o),
    l = function (u) {
      var s = Cl(),
        f = E.useContext(_e),
        c = E.useRef(s.styleSheet.allocateGSInstance(o)).current;
      return (
        s.styleSheet.server && a(c, u, s.styleSheet, f, s.stylis),
        E.useLayoutEffect(
          function () {
            if (!s.styleSheet.server)
              return (
                a(c, u, s.styleSheet, f, s.stylis),
                function () {
                  return i.removeStyles(c, s.styleSheet);
                }
              );
          },
          [c, u, s.styleSheet, f, s.stylis]
        ),
        null
      );
    };
  function a(u, s, f, c, d) {
    if (i.isStatic) i.renderStyles(u, gx, f, d);
    else {
      var m = Ae(Ae({}, s), { theme: af(s, c, l.defaultProps) });
      i.renderStyles(u, m, f, d);
    }
  }
  return E.memo(l);
}
function ri(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Yo(z.apply(void 0, jr([e], t, !1))),
    o = uf(r);
  return new pm(o, r);
}
function Jx(e) {
  var t = E.forwardRef(function (n, r) {
    var o = af(n, E.useContext(_e), e.defaultProps);
    return E.createElement(e, Ae({}, n, { theme: o, ref: r }));
  });
  return sf(t, e);
}
var ew = (function () {
    function e() {
      var t = this;
      (this._emitSheetCSS = function () {
        var n = t.instance.toString(),
          r = Os(),
          o = Yo(
            [
              r && 'nonce="'.concat(r, '"'),
              "".concat(zn, '="true"'),
              "".concat("data-styled-version", '="').concat("6.0.7", '"'),
            ].filter(Boolean),
            " "
          );
        return "<style ".concat(o, ">").concat(n, "</style>");
      }),
        (this.getStyleTags = function () {
          if (t.sealed) throw Ot(2);
          return t._emitSheetCSS();
        }),
        (this.getStyleElement = function () {
          var n;
          if (t.sealed) throw Ot(2);
          var r =
              (((n = {})[zn] = ""),
              (n["data-styled-version"] = "6.0.7"),
              (n.dangerouslySetInnerHTML = { __html: t.instance.toString() }),
              n),
            o = Os();
          return (
            o && (r.nonce = o),
            [E.createElement("style", Ae({}, r, { key: "sc-0-0" }))]
          );
        }),
        (this.seal = function () {
          t.sealed = !0;
        }),
        (this.instance = new Lr({ isServer: !0 })),
        (this.sealed = !1);
    }
    return (
      (e.prototype.collectStyles = function (t) {
        if (this.sealed) throw Ot(2);
        return E.createElement(dm, { sheet: this.instance }, t);
      }),
      (e.prototype.interleaveWithNodeStream = function (t) {
        throw Ot(3);
      }),
      e
    );
  })(),
  tw = { StyleSheet: Lr, mainSheet: fm };
const nw = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ServerStyleSheet: ew,
      StyleSheetConsumer: Wx,
      StyleSheetContext: oa,
      StyleSheetManager: dm,
      ThemeConsumer: Gx,
      ThemeContext: _e,
      ThemeProvider: Qx,
      __PRIVATE__: tw,
      createGlobalStyle: Zx,
      css: z,
      default: ne,
      isStyledComponent: ra,
      keyframes: ri,
      styled: ne,
      useTheme: qx,
      version: vx,
      withTheme: Jx,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var rw = { xsmall: 1.001, small: 1.01, medium: 1.1, large: 1.5, xlarge: 2 },
  Ii = { xsmall: 1, small: 5, medium: 10, large: 50, xlarge: 200 },
  ow = { xsmall: 0.1, small: 1, medium: 5, large: 400, xlarge: 1e3 },
  sp = { xsmall: 0.001, small: 0.01, medium: 0.05, large: 0.1, xlarge: 0.5 },
  ym = function (t, n) {
    if ((n === void 0 && (n = "medium"), t === "draw"))
      return ["", "stroke-dashoffset: 0"];
    if (t === "fadeIn") return ["opacity: 0;", "opacity: 1;"];
    if (t === "fadeOut") return ["opacity: 1;", "opacity: 0;"];
    if (t === "jiggle") {
      var r = ow[n];
      return [
        "transform: rotate(-" + r + "deg);",
        "transform: rotate(" + r + "deg);",
      ];
    }
    return t === "pulse"
      ? ["transform: scale(1);", "transform: scale(" + rw[n] + ")"]
      : t === "rotateRight"
      ? ["transform: rotate(0deg);", "transform: rotate(359deg);"]
      : t === "rotateLeft"
      ? ["transform: rotate(0deg);", "transform: rotate(-359deg);"]
      : t === "flipIn"
      ? ["transform: rotateY(90deg);", "transform: rotateY(0);"]
      : t === "flipOut"
      ? ["transform: rotateY(0);", "transform: rotateY(90deg);"]
      : t === "slideDown"
      ? ["transform: translateY(-" + Ii[n] + "%);", "transform: none;"]
      : t === "slideLeft"
      ? ["transform: translateX(" + Ii[n] + "%);", "transform: none;"]
      : t === "slideRight"
      ? ["transform: translateX(-" + Ii[n] + "%);", "transform: none;"]
      : t === "slideUp"
      ? ["transform: translateY(" + Ii[n] + "%);", "transform: none;"]
      : t === "zoomIn"
      ? ["transform: scale(" + (1 - sp[n]) + ");", "transform: none;"]
      : t === "zoomOut"
      ? ["transform: scale(" + (1 + sp[n]) + ");", "transform: none;"]
      : [];
  },
  Ga = function (t, n) {
    return typeof t == "number" ? t / 1e3 + "s" : t || n;
  },
  iw = function (t) {
    return t === "draw"
      ? "linear forwards"
      : t === "jiggle" || t === "pulse"
      ? "alternate infinite"
      : t === "rotateRight" || t === "rotateLeft"
      ? "infinite linear"
      : "forwards";
  },
  cp = function (t, n, r) {
    var o = ym(t.type, t.size),
      i = (r && r.animation) || n.global.animation;
    if (o) {
      var l = z(["from{", ";}to{", ";}"], o[0], o[1]),
        a = function () {
          return Ga(i[t.type] ? i[t.type].duration : t.duration, i.duration);
        };
      return z(
        ["", " ", " ", " ", ""],
        ri(["", ""], l),
        Ga(t.duration, a()),
        Ga(t.delay, "0s"),
        iw(t.type)
      );
    }
    return "";
  },
  Ce = function (t) {
    return typeof t == "number"
      ? t
      : (t.match(/\s/), parseFloat(t.match(/\d+(\.\d+)?/), 10));
  },
  re = function (t, n) {
    return z(
      ["@media only screen ", "{", ";}"],
      t.value && "and (max-width: " + t.value + "px)",
      n
    );
  },
  Z = function e(t, n, r) {
    var o = n.global && n.global.colors[t] !== void 0 ? n.global.colors[t] : t,
      i = o;
    return (
      o &&
        ((r === !0 || (r === void 0 && n.dark)) && o.dark !== void 0
          ? (i = o.dark)
          : (r === !1 || !n.dark) && o.light !== void 0 && (i = o.light)),
      i && n.global && n.global.colors[i] !== void 0 && (i = e(i, n, r)),
      i
    );
  },
  lw = function (t) {
    return t.length < 7
      ? t.match(/[A-Za-z0-9]{1}/g).map(function (n) {
          return parseInt("" + n + n, 16);
        })
      : t.match(/[A-Za-z0-9]{2}/g).map(function (n) {
          return parseInt(n, 16);
        });
  },
  aw = function (t, n, r) {
    var o, i, l;
    if (n === 0 || n === "0") (o = r), (i = r), (l = r);
    else {
      var a = function (c, d, m) {
          var g = m;
          return (
            g < 0 && (g += 1),
            g > 1 && (g -= 1),
            g < 0.16666667
              ? c + (d - c) * 6 * g
              : g < 0.5
              ? d
              : g < 0.66666667
              ? c + (d - c) * (0.66666667 - g) * 6
              : c
          );
        },
        u = r < 0.5 ? r * (1 + n) : r + n - r * n,
        s = 2 * r - u;
      (o = a(s, u, t + 0.33333333)),
        (i = a(s, u, t)),
        (l = a(s, u, t - 0.33333333));
    }
    return [Math.round(o * 255), Math.round(i * 255), Math.round(l * 255)];
  },
  xm = /^#[A-Za-z0-9]{3,4}$|^#[A-Za-z0-9]{6,8}$/,
  wm = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?\)/,
  Sm = /^rgba?\(\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([0-9]*)\s?,\s?([.0-9]*)\s?\)/,
  km = /^hsla?\(\s?([0-9]*)\s?,\s?([0-9]*)%?\s?,\s?([0-9]*)%?\s?.*?\)/,
  ff = function (t) {
    return xm.test(t) || wm.test(t) || Sm.test(t) || km.test(t);
  },
  df = function (t) {
    if (xm.test(t)) {
      var n = lw(t),
        r = n[0],
        o = n[1],
        i = n[2],
        l = n[3];
      return [r, o, i, l !== void 0 ? l / 255 : void 0];
    }
    var a = t.match(wm);
    if (a)
      return a.splice(1).map(function (d) {
        return parseInt(d, 10);
      });
    if (((a = t.match(Sm)), a))
      return a.splice(1).map(function (d) {
        return parseFloat(d, 10);
      });
    if (((a = t.match(km)), a)) {
      var u = a.splice(1).map(function (d) {
          return parseInt(d, 10);
        }),
        s = u[0],
        f = u[1],
        c = u[2];
      return aw(s / 360, f / 100, c / 100);
    }
    return t;
  },
  Pl = function (t) {
    if (t && ff(t)) {
      var n = df(t),
        r = n[0],
        o = n[1],
        i = n[2],
        l = n[3];
      if (l < 0.5) return;
      var a = (299 * r + 587 * o + 114 * i) / 1e3;
      return a < 125;
    }
  },
  uw = function (t, n) {
    if (t && ff(t)) {
      var r = df(t),
        o = r[0],
        i = r[1],
        l = r[2],
        a = r[3],
        u;
      return (
        n !== void 0 ? (u = n) : a !== void 0 ? (u = a) : (u = 1),
        "rgba(" + o + ", " + i + ", " + l + ", " + u + ")"
      );
    }
  },
  sw = function (t, n) {
    return t && Array.isArray(t) && typeof t[0] == "function"
      ? t[0]({ theme: n })
      : t;
  },
  Br = function (t, n) {
    var r,
      o = ((r = n.global.backgrounds) == null ? void 0 : r[t]) || t,
      i = o;
    return (
      o &&
        (n.dark && o.dark && typeof o.dark != "boolean"
          ? (i = o.dark)
          : !n.dark && o.light && typeof o.light != "boolean" && (i = o.light),
        (i = sw(i, n))),
      i
    );
  },
  fp = function (t, n) {
    var r,
      o = t.color || t,
      i = Z(
        ((r = n.global.backgrounds) == null ? void 0 : r[o]) || o,
        n,
        t.dark
      );
    return i;
  },
  Om = function e(t, n) {
    var r;
    if (t.image) {
      var o, i, l;
      r =
        Br(
          t.dark
            ? (o = n.global.backgrounds) == null || (i = o[t.image]) == null
              ? void 0
              : i.dark
            : (l = n.global.backgrounds) == null
            ? void 0
            : l[t.image],
          n
        ) || t.image;
    } else {
      var a,
        u = Br((a = n.global.backgrounds) == null ? void 0 : a[t], n);
      r = typeof u == "object" ? e(u, n) : u;
    }
    return r;
  },
  cw = function (t, n) {
    var r = Om(t, n),
      o = r;
    if (r.lastIndexOf("linear-gradient", 0) === 0) {
      var i = /\d{1,}deg\b,/gm;
      o =
        r.lastIndexOf("deg,") >= 0
          ? r.replace(i, t.rotate + "deg,")
          : r.replace(
              "linear-gradient(",
              "linear-gradient(" + t.rotate + "deg, "
            );
    } else
      console.warn(
        "'background.rotate' property only supports 'background.image' containing a linear-gradient string."
      );
    return o;
  },
  Cm = function (t, n) {
    var r = Br(t, n),
      o;
    if (r)
      if (typeof r == "object") {
        var i = r.color,
          l = r.dark,
          a = r.opacity;
        if (typeof l == "boolean") o = l;
        else if (i && (!a || a !== "weak")) {
          var u = Z(r.color, n);
          u && (o = Pl(u));
        }
      } else {
        var s = Z(r, n);
        s && (o = Pl(s));
      }
    return o;
  },
  dp = function (t) {
    var n = Pl(t);
    if (n !== void 0) return n ? "dark" : "light";
  },
  Pm = function (t, n, r) {
    if (!t) return [void 0, n];
    var o = r.global,
      i = Br(t, r),
      l = n || o.colors.text,
      a,
      u;
    if (typeof i == "object") {
      if (
        (i.dark === !1 ? (u = l.light || l) : i.dark && (u = l.dark || l),
        i.color)
      ) {
        var s = fp(i, r),
          f =
            i.opacity === !0
              ? o.opacity.medium
              : o.opacity[i.opacity] || i.opacity;
        if (((a = uw(s, f) || s), !u && (f === void 0 || f > 0.3))) {
          var c = dp(a);
          u = Z((c && l[c]) || l, r);
        }
      }
    } else {
      a = fp(i, r);
      var d = dp(a),
        m;
      if (a && ff(a)) {
        var g = df(a);
        g[3] < 0.5 && (m = !0);
      }
      d
        ? (u = Z(l[d] || l, r, d === "dark"))
        : m && l
        ? (u = Z(l, r))
        : (a !== "transparent" && (a = void 0), l && (u = Z(l, r)));
    }
    return n === !1 && (u = void 0), [a, u];
  },
  Ut = function (t, n, r) {
    if (t !== void 0) {
      var o = Br(t, n),
        i = Pm(o, r, n),
        l = i[0],
        a = i[1],
        u = o.rotate ? cw(o, n) : Om(o, n),
        s = "";
      if (
        (o.clip &&
          (s =
            o.clip === "text"
              ? `-webkit-text-fill-color: transparent; 
           -webkit-background-clip: text; 
           background-clip: text;`
              : "background-clip: " + o.clip + ";"),
        typeof o == "string" && o.lastIndexOf("url", 0) === 0)
      )
        return z(
          ["background:", " no-repeat center center;background-size:cover;"],
          o
        );
      if (u) {
        var f =
          `
      ` +
          (l ? "background-color: " + l + ";" : "") +
          `
      background-image: ` +
          u +
          `;
      background-repeat: ` +
          ((typeof o == "object" && o.repeat) || "no-repeat") +
          `;
      background-position: ` +
          (o.position || "center center") +
          `;
      background-size: ` +
          (o.size || "cover") +
          `;
      ` +
          s +
          `
    `;
        return z(
          ["", " ", ""],
          a ? "color: " + a + ";" : "",
          o.opacity
            ? `position: relative;
        z-index: 0;
        &:before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          z-index: -1;
          border-radius: inherit;
          ` +
                f +
                `
          opacity: ` +
                (o.opacity === !0
                  ? n.global.opacity.medium
                  : n.global.opacity[o.opacity] || o.opacity) +
                `;
        }`
            : f
        );
      }
      if (l)
        return z(
          ["background-color:", ";", ""],
          l,
          a ? "color: " + a + ";" : ""
        );
      if (typeof o == "string") return z(["background:", ";"], Z(o, n));
    }
  },
  bm = z(["", ""], function (e) {
    return Ut(
      Z(e.theme.global.active.background, e.theme),
      e.theme,
      e.theme.global.active.color
    );
  });
z(["", ""], function (e) {
  return Ut(
    Z(e.theme.global.selected.background, e.theme),
    e.theme,
    e.theme.global.selected.color
  );
});
var bs = function (t, n) {
    var r, o;
    return (
      t === !0 || t === "background"
        ? (r = n.global.hover.background)
        : typeof t == "object" && (t.elevation || t.background)
        ? ((o = t.elevation), (r = t.background))
        : (r = t),
      z(
        ["", " ", ""],
        Ut(r, n, n.global.hover.color),
        o &&
          "box-shadow: " +
            n.global.elevation[n.dark ? "dark" : "light"][o] +
            ";"
      )
    );
  },
  Em = function (t, n) {
    var r = Z(t.color || "border", n),
      o = t.size || "xsmall",
      i = t.style || "solid",
      l = typeof t == "string" ? t : t.side || "all",
      a =
        n.box.responsiveBreakpoint &&
        n.global.breakpoints[n.box.responsiveBreakpoint];
    a.borderSize || (a.borderSize = n.global.borderSize);
    var u =
      a && (a.borderSize[o] || o) && i + " " + (a.borderSize[o] || o) + " " + r;
    if (u) {
      if (l === "top" || l === "bottom" || l === "left" || l === "right")
        return "border-" + l + ": " + u + ";";
      if (l === "end" || l === "start")
        return "border-inline-" + l + ": " + u + ";";
      if (l === "vertical")
        return (
          `
      border-left: ` +
          u +
          `;
      border-right: ` +
          u +
          `;
    `
        );
      if (l === "horizontal")
        return (
          `
      border-top: ` +
          u +
          `;
      border-bottom: ` +
          u +
          `;
    `
        );
      if (l !== "between") return "border: " + u + ";";
    }
  },
  Es = function (t, n, r) {
    var o = [];
    return (
      (Array.isArray(t) ? t : [t]).forEach(function (i) {
        var l = [],
          a = Z(i.color || "border", r),
          u = i.size || "xsmall",
          s = i.style || "solid",
          f = typeof i == "string" ? i : i.side || "all",
          c = s + " " + (r.global.borderSize[u] || u) + " " + a,
          d = n && Em(i, r),
          m =
            d &&
            r.box.responsiveBreakpoint &&
            r.global.breakpoints[r.box.responsiveBreakpoint];
        f === "top" || f === "bottom" || f === "left" || f === "right"
          ? (l.push("border-" + f + ": " + c + ";"), d && l.push(re(m, d)))
          : f === "end" || f === "start"
          ? (l.push(z(["border-inline-", ":", ";"], f, c)),
            d && l.push(re(m, d)))
          : f === "vertical"
          ? (l.push(z(["border-left:", ";border-right:", ";"], c, c)),
            d && l.push(re(m, d)))
          : f === "horizontal"
          ? (l.push(z(["border-top:", ";border-bottom:", ";"], c, c)),
            d && l.push(re(m, d)))
          : f === "between" ||
            (l.push(z(["border:", ";"], c)), d && l.push(re(m, d))),
          o.push(l);
      }),
      o
    );
  },
  fw = function (t, n) {
    var r;
    if (t) {
      for (var o = t.parentNode; !r && o && o.getBoundingClientRect; ) {
        var i = o.getBoundingClientRect();
        n
          ? i.width && o.scrollWidth > i.width + 10 && (r = o)
          : i.height && o.scrollHeight > i.height + 10 && (r = o),
          (o = o.parentNode);
      }
      r ? r.tagName.toLowerCase() === "body" && (r = document) : (r = document);
    }
    return r;
  },
  dw = ["html", "body"],
  zm = function (t, n) {
    var r = [];
    if (t) {
      for (var o = t.parentNode; o && o.getBoundingClientRect; ) {
        var i = o.getBoundingClientRect();
        n
          ? i.width && o.scrollWidth > i.width + 10 && r.push(o)
          : i.height && o.scrollHeight > i.height + 10 && r.push(o),
          (o = o.parentNode);
      }
      r.length && dw.includes(r[0].tagName.toLowerCase()) && (r.length = 0),
        r.push(document);
    }
    return r;
  },
  pw = function (t, n) {
    t === void 0 && (t = document.body);
    var r = document.createElement("div");
    return n === "first" ? t.prepend(r) : t.appendChild(r), r;
  },
  pp = function (t) {
    var n = window.scrollX,
      r = window.scrollY;
    t.focus(), window.scrollTo(n, r);
  },
  kr = "tabindex",
  Wn = "data-g-tabindex",
  hw = function (t) {
    if (!t.hasAttribute("aria-live")) {
      t.removeAttribute("aria-hidden");
      var n = t.getElementsByTagName("*");
      Array.prototype.filter
        .call(n || [], function (r) {
          return r.hasAttribute(Wn);
        })
        .forEach(function (r) {
          var o = r.getAttribute(Wn);
          o >= 0
            ? r.setAttribute(kr, r.getAttribute(Wn))
            : o === "none" && r.removeAttribute(kr),
            r.removeAttribute(Wn);
        });
    }
  },
  vw = /(a|area|input|select|textarea|button|iframe)$/,
  mw = function (t) {
    if (!t.hasAttribute("aria-live")) {
      t.setAttribute("aria-hidden", !0);
      var n = t.getElementsByTagName("*");
      Array.prototype.filter
        .call(n || [], function (r) {
          return r.getAttribute(kr) !== null;
        })
        .forEach(function (r) {
          r.setAttribute(Wn, r.getAttribute(kr)), r.setAttribute(kr, -1);
        }),
        Array.prototype.filter
          .call(n || [], function (r) {
            var o = r.tagName.toLowerCase();
            return o.match(vw) && r.focus && r.getAttribute(Wn) === null;
          })
          .forEach(function (r) {
            r.setAttribute(Wn, "none"), r.setAttribute(kr, -1);
          });
    }
  },
  Tm = function (t, n) {
    var r = t.getBoundingClientRect(),
      o = r.bottom,
      i = n.getBoundingClientRect
        ? n.getBoundingClientRect()
        : { height: 0, top: 0 },
      l = i.height,
      a = i.top;
    return o >= a + l;
  },
  _m = function (t, n) {
    var r = t.getBoundingClientRect(),
      o = r.top,
      i = n.getBoundingClientRect ? n.getBoundingClientRect() : { top: 0 },
      l = i.top;
    return o <= l;
  },
  gw = function e(t) {
    return t && t.nodeName !== "BUTTON" && t.nodeName !== "A"
      ? e(t.parentElement)
      : t;
  },
  Im = function (t, n, r) {
    var o;
    return t &&
      r != null &&
      (o = r.icon) != null &&
      o.matchSize &&
      !t.props.size
      ? y.cloneElement(t, { size: n })
      : t;
  },
  ia = function (t, n) {
    var r = (n && t.global.breakpoints[n]) || {};
    return (
      r.edgeSize || (r.edgeSize = t.global.edgeSize),
      r.borderSize || (r.borderSize = t.global.borderSize),
      r.size || (r.size = t.global.size),
      r
    );
  },
  yw = z(
    [
      "font-family:",
      ";font-size:",
      ";line-height:",
      ";font-weight:",
      ";",
      " ",
      " box-sizing:border-box;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;",
    ],
    function (e) {
      return e.theme.global.font.family;
    },
    function (e) {
      return e.theme.global.font.size;
    },
    function (e) {
      return e.theme.global.font.height;
    },
    function (e) {
      return e.theme.global.font.weight;
    },
    function (e) {
      return (
        e.theme.global.font.variant &&
        `
    font-variant:` +
          e.theme.global.font.variant +
          `;
  `
      );
    },
    function (e) {
      return !e.plain && Ut(e.theme.baseBackground, e.theme);
    }
  ),
  xw = z(
    ["border:", " solid ", ";border-radius:", ";"],
    function (e) {
      return e.theme.global.control.border.width;
    },
    function (e) {
      return Z(e.theme.global.control.border.color || "border", e.theme);
    },
    function (e) {
      return e.theme.global.control.border.radius;
    }
  ),
  Tn = function (t, n, r, o, i) {
    var l = o && i.global.breakpoints[o];
    if (typeof n == "string")
      return z(
        ["", ":", ";", ";"],
        t,
        i.global.edgeSize[n] || n,
        r && l
          ? re(
              l,
              `
        ` +
                t +
                ": " +
                (l.edgeSize[n] || n) +
                `;
      `
            )
          : ""
      );
    var a = [],
      u = n.horizontal,
      s = n.vertical,
      f = n.top,
      c = n.bottom,
      d = n.left,
      m = n.right,
      g = u && s && u === s,
      x = f && c && d && m && ((f === c) === d) === m;
    if (g || x) {
      var O = g ? u : f;
      return z(
        ["", ":", ";", ";"],
        t,
        i.global.edgeSize[O] || O,
        r && l
          ? re(
              l,
              `
        ` +
                t +
                ": " +
                (l.edgeSize[O] || O) +
                `;
      `
            )
          : ""
      );
    }
    return (
      u &&
        a.push(
          z(
            ["", "-left:", ";", "-right:", ";", ";"],
            t,
            i.global.edgeSize[u] || u,
            t,
            i.global.edgeSize[u] || u,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-left: " +
                    (l.edgeSize[u] || u) +
                    `;
          ` +
                    t +
                    "-right: " +
                    (l.edgeSize[u] || u) +
                    `;
        `
                )
              : ""
          )
        ),
      s &&
        a.push(
          z(
            ["", "-top:", ";", "-bottom:", ";", ";"],
            t,
            i.global.edgeSize[s] || s,
            t,
            i.global.edgeSize[s] || s,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-top: " +
                    (l.edgeSize[s] || s) +
                    `;
          ` +
                    t +
                    "-bottom: " +
                    (l.edgeSize[s] || s) +
                    `;
        `
                )
              : ""
          )
        ),
      f &&
        a.push(
          z(
            ["", "-top:", ";", ";"],
            t,
            i.global.edgeSize[f] || f,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-top: " +
                    (l.edgeSize[f] || f) +
                    `;
        `
                )
              : ""
          )
        ),
      c &&
        a.push(
          z(
            ["", "-bottom:", ";", ";"],
            t,
            i.global.edgeSize[c] || c,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-bottom: " +
                    (l.edgeSize[c] || c) +
                    `;
        `
                )
              : ""
          )
        ),
      d &&
        a.push(
          z(
            ["", "-left:", ";", ";"],
            t,
            i.global.edgeSize[d] || d,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-left: " +
                    (l.edgeSize[d] || d) +
                    `;
        `
                )
              : ""
          )
        ),
      m &&
        a.push(
          z(
            ["", "-right:", ";", ";"],
            t,
            i.global.edgeSize[m] || m,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-right: " +
                    (l.edgeSize[m] || m) +
                    `;
        `
                )
              : ""
          )
        ),
      n.start &&
        a.push(
          z(
            ["", "-inline-start:", ";", ";"],
            t,
            i.global.edgeSize[n.start] || n.start,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-inline-start: " +
                    (l.edgeSize[n.start] || n.start) +
                    `;
        `
                )
              : ""
          )
        ),
      n.end &&
        a.push(
          z(
            ["", "-inline-end:", ";", ";"],
            t,
            i.global.edgeSize[n.end] || n.end,
            r && l
              ? re(
                  l,
                  `
          ` +
                    t +
                    "-inline-end: " +
                    (l.edgeSize[n.end] || n.end) +
                    `;
        `
                )
              : ""
          )
        ),
      a
    );
  },
  $m = function (t) {
    if (t === "horizontal") return "width: 100%;";
    if (t === "vertical") return "height: 100%;";
    if (t)
      return `
      width: 100%;
      height: 100%;
    `;
  },
  hp = function (t, n) {
    var r = n === void 0 ? {} : n,
      o = r.forceOutline,
      i = r.justBorder,
      l = t.theme.global.focus;
    if (!l || (o && !l.outline)) {
      var a = Z("focus", t.theme);
      return a ? "outline: 2px solid " + a + ";" : "";
    }
    if (l.outline && (!l.border || !i)) {
      if (typeof l.outline == "object") {
        var u = Z(l.outline.color || "focus", t.theme),
          s = l.outline.size || "2px";
        return (
          `
        outline-offset: 0px;
        outline: ` +
          s +
          " solid " +
          u +
          `;
      `
        );
      }
      return "outline: " + l.outline + ";";
    }
    if (l.shadow && (!l.border || !i)) {
      if (typeof l.shadow == "object") {
        var f = Z(
            (l.border && l.border.color) || l.shadow.color || "focus",
            t.theme
          ),
          c = l.shadow.size || "2px";
        return (
          `
        outline: none;
        box-shadow: 0 0 ` +
          c +
          " " +
          c +
          " " +
          f +
          `;
      `
        );
      }
      return (
        `
      outline: none;
      box-shadow: ` +
        l.shadow +
        `;
    `
      );
    }
    if (l.border) {
      var d = Z(l.border.color || "focus", t.theme);
      return (
        `
      outline: none;
      border-color: ` +
        d +
        `;
    `
      );
    }
    return "";
  },
  vp = function (t, n) {
    var r = n === void 0 ? {} : n,
      o = r.forceOutline,
      i = r.justBorder,
      l = t.theme.global.focus;
    if (!l || (o && !l.outline)) {
      var a = Z("focus", t.theme);
      return a ? "outline: none;" : "";
    }
    return l.outline && (!l.border || !i)
      ? typeof l.outline == "object"
        ? `
        outline-offset: 0px;
        outline: none;
      `
        : "outline: none;"
      : l.shadow && (!l.border || !i)
      ? typeof l.shadow == "object"
        ? `
        outline: none;
        box-shadow: none;
      `
        : `
      outline: none;
      box-shadow: none;
    `
      : l.border
      ? `
      outline: none;
      border-color: none;
    `
      : "";
  },
  la = function (t) {
    var n = t === void 0 ? {} : t,
      r = n.forceOutline,
      o = n.justBorder,
      i = n.skipSvgChildren;
    return z(
      ["", " ", " ", ""],
      function (l) {
        return (
          !i &&
          `
  > circle,
  > ellipse,
  > line,
  > path,
  > polygon,
  > polyline,
  > rect {
    ` +
            hp(l) +
            `
  }`
        );
      },
      function (l) {
        return hp(l, { forceOutline: r, justBorder: o });
      },
      !r &&
        `
  ::-moz-focus-inner {
    border: 0;
  }
  `
    );
  },
  Mm = function (t) {
    var n = t === void 0 ? {} : t,
      r = n.forceOutline,
      o = n.justBorder,
      i = n.skipSvgChildren;
    return z(
      ["", " ", " ", ""],
      function (l) {
        return (
          !i &&
          `
  > circle,
  > ellipse,
  > line,
  > path,
  > polygon,
  > polyline,
  > rect {
    ` +
            vp(l) +
            `
  }`
        );
      },
      function (l) {
        return vp(l, { forceOutline: r, justBorder: o });
      },
      !r &&
        `
  ::-moz-focus-inner {
    border: 0;
  }
  `
    );
  },
  mp = function (t, n) {
    return (
      Ce((t.theme.global.edgeSize[n] || n) + "px") +
      Ce(t.theme.global.control.border.width + "px") +
      "px"
    );
  },
  zs = function (t, n) {
    if (typeof t.theme.global.input.padding != "object") {
      var r = mp(t, t.theme.global.input.padding);
      return r;
    }
    var o;
    n === "left" || n === "right"
      ? (o = "horizontal")
      : n === "top" || n === "bottom"
      ? (o = "vertical")
      : (o = void 0);
    var i = t.theme.global.input.padding[n] || t.theme.global.input.padding[o],
      l = mp(t, i);
    return l;
  },
  qa = z(["color:", ";"], function (e) {
    return Z(e.theme.global.colors.placeholder, e.theme);
  }),
  ww = z(
    [
      "&::-webkit-input-placeholder{",
      ";}&::-moz-placeholder{",
      ";}&:-ms-input-placeholder{",
      ";}",
    ],
    qa,
    qa,
    qa
  ),
  Sw = function (t) {
    var n = t.theme.text[t.size];
    return n
      ? z(["font-size:", ";line-height:", ";"], n.size, n.height)
      : z(["font-size:", ";"], t.size);
  },
  kw = z(
    [
      "box-sizing:border-box;",
      " font-family:inherit;border:none;-webkit-appearance:none;background:transparent;color:inherit;width:100%;",
      " ",
      " ",
      " margin:0;",
      " &:focus{",
      ";}",
      " ",
      "::-webkit-search-decoration{-webkit-appearance:none;}&::-moz-focus-inner{border:none;outline:none;}&:-moz-placeholder,&::-moz-placeholder{opacity:1;}",
      "",
    ],
    function (e) {
      var t;
      return (
        "font-size: " +
        (e.theme.global.input.font.size
          ? ((t = e.theme.text[e.theme.global.input.font.size]) == null
              ? void 0
              : t.size) || e.theme.global.input.font.size
          : "inherit") +
        ";"
      );
    },
    function (e) {
      return (
        e.theme.global.input.font.height &&
        "line-height: " + e.theme.global.input.font.height + ";"
      );
    },
    function (e) {
      return e.theme.global.input.padding &&
        typeof e.theme.global.input.padding != "object"
        ? "padding: " +
            (Ce(
              e.theme.global.edgeSize[e.theme.global.input.padding] ||
                e.theme.global.input.padding
            ) -
              Ce(e.theme.global.control.border.width)) +
            "px;"
        : Tn(
            "padding",
            e.theme.global.input.padding,
            e.responsive,
            e.theme.box.responsiveBreakpoint,
            e.theme
          );
    },
    function (e) {
      return (
        (e.theme.global.input.weight || e.theme.global.input.font.weight) &&
        z(
          ["font-weight:", ";"],
          e.theme.global.input.weight || e.theme.global.input.font.weight
        )
      );
    },
    function (e) {
      return e.size && Sw(e);
    },
    function (e) {
      return (!e.plain || e.focusIndicator) && la();
    },
    xw,
    ww,
    function (e) {
      return e.theme.global.input.extend;
    }
  ),
  Ow = z(["", ""], function (e) {
    var t,
      n,
      r,
      o,
      i =
        (t = e.theme) != null && (n = t.icon) != null && n.matchSize
          ? Ce(
              (r = e.theme.icon) == null || (o = r.size) == null
                ? void 0
                : o[(e == null ? void 0 : e.size) || "medium"]
            ) +
            Ce(e.theme.global.edgeSize.medium) +
            "px"
          : e.theme.global.edgeSize.large;
    return e.reverse ? "padding-right: " + i + ";" : "padding-left: " + i + ";";
  }),
  Cw = function (t) {
    return typeof t == "string"
      ? z(["overflow:", ";"], t)
      : z(
          ["", " ", ";"],
          t.horizontal && "overflow-x: " + t.horizontal + ";",
          t.vertical && "overflow-y: " + t.vertical + ";"
        );
  },
  Pw = {
    center: "center",
    end: "flex-end",
    start: "flex-start",
    stretch: "stretch",
    baseline: "baseline",
  },
  Mn = z(
    ["", " ", " ", ""],
    function (e) {
      return e.alignSelf && "align-self: " + Pw[e.alignSelf] + ";";
    },
    function (e) {
      return e.gridArea && "grid-area: " + e.gridArea + ";";
    },
    function (e) {
      return (
        e.margin &&
        e.theme.global &&
        Tn(
          "margin",
          e.margin,
          e.responsive,
          e.theme.global.edgeSize.responsiveBreakpoint,
          e.theme
        )
      );
    }
  ),
  pf = function (t) {
    return z(["opacity:", ";cursor:default;"], function (n) {
      return t || n.theme.global.control.disabled.opacity;
    });
  },
  bw = function (t, n, r) {
    return z(["", ":", ";"], t, r.global.size[n] || n);
  },
  gp = z(["outline:none;border:none;"]),
  Qi = function (t, n, r) {
    var o = [];
    if (t.padding || t.pad) {
      var i = t.padding || t.pad;
      i.vertical || i.horizontal
        ? o.push(
            "padding: " +
              (n.global.edgeSize[i.vertical] || i.vertical || 0) +
              " " +
              (n.global.edgeSize[i.horizontal] || i.horizontal || 0) +
              ";"
          )
        : o.push("padding: " + (n.global.edgeSize[i] || i || 0) + ";");
    }
    if (
      (t.background
        ? o.push(
            Ut(
              r || t.background,
              n,
              t.color ||
                (Object.prototype.hasOwnProperty.call(t, "color") &&
                t.color === void 0
                  ? !1
                  : void 0)
            )
          )
        : t.color && o.push("color: " + Z(t.color, n) + ";"),
      t.border
        ? (t.border.width &&
            o.push(
              z(["border-style:solid;border-width:", ";"], t.border.width)
            ),
          t.border.color &&
            o.push(
              z(
                ["border-color:", ";"],
                Z((!t.background && r) || t.border.color || "border", n)
              )
            ),
          t.border.radius &&
            o.push(z(["border-radius:", ";"], t.border.radius)))
        : t.border === !1 && o.push("border: none;"),
      r && !t.border && !t.background && o.push("color: " + Z(r, n) + ";"),
      t.font &&
        (t.font.size &&
          o.push(
            "font-size: " + (n.text[t.font.size].size || t.font.size) + ";"
          ),
        t.font.height && o.push("line-height: " + t.font.height + ";"),
        t.font.weight && o.push("font-weight: " + t.font.weight + ";")),
      t.opacity)
    ) {
      var l =
        t.opacity === !0
          ? n.global.opacity.medium
          : n.global.opacity[t.opacity] || t.opacity;
      o.push("opacity: " + l + ";");
    }
    return t.extend && o.push(t.extend), o;
  },
  yp = { full: "100%" },
  hf = function (t, n, r) {
    var o = ia(r, r.box.responsiveBreakpoint),
      i = [];
    if (typeof t == "object") {
      var l = yp[t.size] || r.global.edgeSize[t.size || "medium"] || t.size,
        a = n && o && o.edgeSize[t.size] && (o.edgeSize[t.size] || t.size);
      t.corner === "top"
        ? (i.push(
            z(
              ["border-top-left-radius:", ";border-top-right-radius:", ";"],
              l,
              l
            )
          ),
          a &&
            i.push(
              re(
                o,
                `
          border-top-left-radius: ` +
                  a +
                  `;
          border-top-right-radius: ` +
                  a +
                  `;
        `
              )
            ))
        : t.corner === "bottom"
        ? (i.push(
            z(
              [
                "border-bottom-left-radius:",
                ";border-bottom-right-radius:",
                ";",
              ],
              l,
              l
            )
          ),
          a &&
            i.push(
              re(
                o,
                `
          border-bottom-left-radius: ` +
                  a +
                  `;
          border-bottom-right-radius: ` +
                  a +
                  `;
        `
              )
            ))
        : t.corner === "left"
        ? (i.push(
            z(
              ["border-top-left-radius:", ";border-bottom-left-radius:", ";"],
              l,
              l
            )
          ),
          a &&
            i.push(
              re(
                o,
                `
          border-top-left-radius: ` +
                  a +
                  `;
          border-bottom-left-radius: ` +
                  a +
                  `;
        `
              )
            ))
        : t.corner === "right"
        ? (i.push(
            z(
              ["border-top-right-radius:", ";border-bottom-right-radius:", ";"],
              l,
              l
            )
          ),
          a &&
            i.push(
              re(
                o,
                `
          border-top-right-radius: ` +
                  a +
                  `;
          border-bottom-right-radius: ` +
                  a +
                  `;
        `
              )
            ))
        : t.corner
        ? (i.push(z(["border-", "-radius:", ";"], t.corner, l)),
          a &&
            i.push(
              re(
                o,
                `
          border-` +
                  t.corner +
                  "-radius: " +
                  a +
                  `;
        `
              )
            ))
        : (i.push(z(["border-radius:", ";"], l)),
          a &&
            i.push(
              re(
                o,
                `
          border-radius: ` +
                  a +
                  `;
        `
              )
            ));
    } else {
      var u = t === !0 ? "medium" : t;
      i.push(z(["border-radius:", ";"], yp[u] || r.global.edgeSize[u] || u));
      var s = o && o.edgeSize[u];
      s &&
        i.push(
          re(
            o,
            `
        border-radius: ` +
              s +
              `;
      `
          )
        );
    }
    return i;
  },
  Ew = { center: "center", end: "right", justify: "justify", start: "left" },
  vf = z(["text-align:", ";"], function (e) {
    return Ew[e.textAlign];
  }),
  zw = {
    baseline: "baseline",
    center: "center",
    end: "flex-end",
    start: "flex-start",
    stretch: "stretch",
  },
  Tw = z(["align-items:", ";"], function (e) {
    var t;
    return (t = zw[e.align]) != null ? t : e.align;
  }),
  _w = {
    around: "space-around",
    baseline: "baseline",
    between: "space-between",
    center: "center",
    evenly: "space-evenly",
    end: "flex-end",
    start: "flex-start",
    stretch: "stretch",
  },
  Iw = z(["align-content:", ";"], function (e) {
    var t;
    return (t = _w[e.alignContent]) != null ? t : e.alignContent;
  }),
  Jt = function (t, n) {
    return t.global.size[n] || n;
  },
  $w = function (t, n) {
    var r = [];
    return (
      t.max && r.push(z(["max-width:", ";"], Jt(n, t.max))),
      t.min && r.push(z(["min-width:", ";"], Jt(n, t.min))),
      t.width && r.push(z(["width:", ";"], Jt(n, t.width))),
      r
    );
  },
  Mw = function (t, n) {
    return z(["width:", ";"], Jt(n, t));
  },
  mf = function (t, n) {
    return typeof t == "object" ? $w(t, n) : Mw(t, n);
  },
  Nw = function (t, n) {
    var r = [];
    return (
      t.max && r.push(z(["max-height:", ";"], Jt(n, t.max))),
      t.min && r.push(z(["min-height:", ";"], Jt(n, t.min))),
      t.width && r.push(z(["height:", ";"], Jt(n, t.height))),
      t.height && r.push(z(["height:", ";"], Jt(n, t.height))),
      r
    );
  },
  Rw = function (t, n) {
    return z(["height:", ";"], Jt(n, t));
  },
  Nm = function (t, n) {
    return typeof t == "object" ? Nw(t, n) : Rw(t, n);
  };
function bl() {
  return (
    (bl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bl.apply(this, arguments)
  );
}
var Ts = function (t) {
    return t && typeof t == "object" && !Array.isArray(t);
  },
  jw = function (t) {
    return (
      Object.keys(t).forEach(function (n) {
        return n && Ts(t[n]) && Object.freeze(t[n]);
      }),
      Object.freeze(t)
    );
  },
  Aw = function e(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    if (!r.length) return t;
    var i = bl({}, t);
    return (
      r.forEach(function (l) {
        Ts(l) &&
          Object.keys(l).forEach(function (a) {
            Ts(l[a])
              ? i[a]
                ? (i[a] = e(i[a], l[a]))
                : (i[a] = bl({}, l[a]))
              : (i[a] = l[a]);
          });
      }),
      i
    );
  },
  xp = E.createContext([]),
  qr = function (t) {
    var n = y.useRef(null);
    return (
      y.useImperativeHandle(t, function () {
        return n.current;
      }),
      n
    );
  },
  Fw = function () {
    var t = y.useState(),
      n = t[0],
      r = t[1];
    return (
      y.useEffect(function () {
        var o = function () {
            return r(!1);
          },
          i = function () {
            return r(!0);
          };
        return (
          document.addEventListener("mousedown", o),
          document.addEventListener("keydown", i),
          function () {
            document.removeEventListener("mousedown", o),
              document.removeEventListener("keydown", i);
          }
        );
      }, []),
      n
    );
  },
  me = {};
const Rm = sy(nw);
var Wr = {},
  Qr = {};
(function (e) {
  (e.__esModule = !0),
    (e.deepMerge = i),
    (e.default = void 0),
    (e.iconPad = s),
    (e.isObject = o),
    (e.parseMetricToNum = void 0),
    (e.useScaleProps = a);
  var t = y,
    n = Rm;
  function r() {
    return (
      (r = Object.assign
        ? Object.assign.bind()
        : function (c) {
            for (var d = 1; d < arguments.length; d++) {
              var m = arguments[d];
              for (var g in m)
                Object.prototype.hasOwnProperty.call(m, g) && (c[g] = m[g]);
            }
            return c;
          }),
      r.apply(this, arguments)
    );
  }
  function o(c) {
    return c && typeof c == "object" && !Array.isArray(c);
  }
  function i(c) {
    for (
      var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), g = 1;
      g < d;
      g++
    )
      m[g - 1] = arguments[g];
    if (!m.length) return c;
    var x = r({}, c);
    return (
      m.forEach(function (O) {
        o(O) &&
          Object.keys(O).forEach(function (h) {
            o(O[h])
              ? x[h]
                ? (x[h] = i(x[h], O[h]))
                : (x[h] = r({}, O[h]))
              : (x[h] = O[h]);
          });
      }),
      x
    );
  }
  var l = function (d) {
    return d === void 0 && (d = ""), parseFloat(d.match(/\d+(\.\d+)?/), 10);
  };
  e.parseMetricToNum = l;
  function a(c) {
    var d,
      m = (0, t.useContext)(n.ThemeContext),
      g = c.size,
      x = {};
    if (m != null && (d = m.icon) != null && d.disableScaleDown) {
      var O = l(m.icon.size[g] || g);
      O < 24 && (x.vectorEffect = "non-scaling-stroke");
    }
    return x;
  }
  var u = function (d, m) {
    return (d - m) / 2 + "px";
  };
  function s(c) {
    var d,
      m,
      g,
      x,
      O,
      h,
      p = c.height,
      v = c.size,
      k = v === void 0 ? "medium" : v,
      C = c.width,
      P = (0, t.useContext)(n.ThemeContext),
      b = l(
        (P == null || (d = P.icon) == null || (m = d.size) == null
          ? void 0
          : m[k]) || k
      ),
      M = "";
    if (
      p &&
      P != null &&
      (g = P.text) != null &&
      (x = g[p]) != null &&
      x.height
    ) {
      var N = l(P.text[p].height);
      if (N > b) {
        var j = u(N, b);
        M += "padding-top: " + j + "; padding-bottom: " + j + ";";
      }
    }
    if (
      C &&
      P != null &&
      (O = P.text) != null &&
      (h = O[C]) != null &&
      h.height
    ) {
      var W = l(P.text[C].height);
      if (W > b) {
        var ce = u(W, b);
        M += "padding-left: " + ce + "; padding-right: " + ce + ";";
      }
    }
    return M;
  }
  var f = {
    deepMerge: i,
    isObject: o,
    parseMetricToNum: l,
    iconPad: s,
    useScaleProps: a,
  };
  e.default = f;
})(Qr);
var aa = {},
  ua = {};
ua.__esModule = !0;
var jm = (ua.base = void 0),
  Dw = {
    global: { colors: { icon: "#666666" } },
    icon: {
      size: { small: "12px", medium: "24px", large: "48px", xlarge: "96px" },
    },
  };
jm = ua.base = Dw;
aa.__esModule = !0;
aa.base = void 0;
var Lw = ua;
aa.base = Lw.base;
Wr.__esModule = !0;
Wr.extendDefaultTheme = Wr.defaultProps = void 0;
var Bw = Qr,
  Am = aa,
  Fm = { theme: Am.base };
Wr.defaultProps = Fm;
var Ww = function (t) {
  Fm.theme = (0, Bw.deepMerge)(Am.base, t);
};
Wr.extendDefaultTheme = Ww;
me.__esModule = !0;
me.StyledIcon = void 0;
var wp = Lm(y),
  gf = Lm(Rm),
  Uw = Wr,
  Sp = Qr,
  Vw = ["a11yTitle", "color", "size", "theme"];
function Dm(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Dm = function (o) {
    return o ? n : t;
  })(e);
}
function Lm(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Dm(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
function Hw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Kw = function e(t, n, r) {
    var o = n.global && n.global.colors[t] !== void 0 ? n.global.colors[t] : t,
      i = o;
    return (
      o &&
        ((r === !0 || (r === void 0 && n.dark)) && o.dark !== void 0
          ? (i = o.dark)
          : (r === !1 || !n.dark) && o.light !== void 0 && (i = o.light)),
      i && n.global && n.global.colors[i] !== void 0 && (i = e(i, n, r)),
      i
    );
  },
  kp = function (t, n, r, o) {
    return (0, gf.css)(["", ":", ";"], t, Kw(n, r, o));
  },
  Gw = (0, gf.css)(
    [
      "",
      " ",
      " g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill='none']{stroke-width:0;}}*[stroke*='#'],*[STROKE*='#']{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*='#'],*[FILL*='#']{fill:inherit;stroke:none;}",
    ],
    function (e) {
      return kp("fill", e.color || e.theme.global.colors.icon, e.theme);
    },
    function (e) {
      return kp("stroke", e.color || e.theme.global.colors.icon, e.theme);
    }
  ),
  Bm = (0, wp.forwardRef)(function (e, t) {
    var n = e.a11yTitle;
    e.color, e.size, e.theme;
    var r = Hw(e, Vw);
    return wp.default.createElement("svg", _s({ ref: t, "aria-label": n }, r));
  });
Bm.displayName = "Icon";
var yf = (0, gf.default)(Bm)
  .withConfig({
    shouldForwardProp: function (t) {
      return !["height", "width"].includes(t);
    },
  })
  .withConfig({ displayName: "StyledIcon", componentId: "sc-ofa7kd-0" })(
  ["display:inline-block;flex:0 0 auto;", " ", " ", " ", ""],
  function (e) {
    var t = e.size,
      n = t === void 0 ? "medium" : t,
      r = e.theme,
      o = e.viewBox,
      i = (o || "0 0 24 24").split(" "),
      l = i[2],
      a = i[3],
      u = l / a,
      s = (0, Sp.parseMetricToNum)(r.icon.size[n] || n);
    return l < a
      ? `
      width: ` +
          s +
          `px;
      height: ` +
          s / u +
          `px;
    `
      : a < l
      ? `
      width: ` +
        s * u +
        `px;
      height: ` +
        s +
        `px;
    `
      : `
      width: ` +
        s +
        `px;
      height: ` +
        s +
        `px;
    `;
  },
  function (e) {
    var t = e.color;
    return t !== "plain" && Gw;
  },
  function (e) {
    return (e.height || e.width) && (0, Sp.iconPad)(e);
  },
  function (e) {
    var t = e.theme;
    return t && t.icon.extend;
  }
);
me.StyledIcon = yf;
yf.defaultProps = {};
Object.setPrototypeOf(yf.defaultProps, Uw.defaultProps);
var Wm = void 0,
  Qa = Qw(y),
  qw = me;
function Um(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Um = function (o) {
    return o ? n : t;
  })(e);
}
function Qw(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Um(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Is() {
  return (
    (Is = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Is.apply(this, arguments)
  );
}
var Vm = (0, Qa.forwardRef)(function (e, t) {
  return Qa.default.createElement(
    qw.StyledIcon,
    Is({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Actions" }, e),
    Qa.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0-11V1m0 22v-5.5M1 12h5.5m11 0H23M4.437 4.437l4.125 4.125m6.876 6.876 4.124 4.124m0-15.125-4.125 4.125m-6.874 6.876-4.126 4.124",
    })
  );
});
Wm = Vm;
Vm.displayName = "Actions";
var Hm = void 0,
  Ya = Xw(y),
  Yw = me;
function Km(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Km = function (o) {
    return o ? n : t;
  })(e);
}
function Xw(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Km(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function $s() {
  return (
    ($s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $s.apply(this, arguments)
  );
}
var Gm = (0, Ya.forwardRef)(function (e, t) {
  return Ya.default.createElement(
    Yw.StyledIcon,
    $s({ ref: t, viewBox: "0 0 24 24", a11yTitle: "AssistListening" }, e),
    Ya.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      d: "M11 21c.757.667 1.424 1 2 1 2 0 3-1 3-3 0-1.333.667-2.667 2-4 1.267-1.267 2-3.067 2-5a7 7 0 0 0-14 0m11 0a4 4 0 1 0-8 0M3 20l5-6 1 4 5-6",
    })
  );
});
Hm = Gm;
Gm.displayName = "AssistListening";
var qm = void 0,
  Xa = Jw(y),
  Zw = me;
function Qm(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Qm = function (o) {
    return o ? n : t;
  })(e);
}
function Jw(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Qm(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ms() {
  return (
    (Ms = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ms.apply(this, arguments)
  );
}
var Ym = (0, Xa.forwardRef)(function (e, t) {
  return Xa.default.createElement(
    Zw.StyledIcon,
    Ms({ ref: t, viewBox: "0 0 24 24", a11yTitle: "CircleInformation" }, e),
    Xa.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-12v8m0-12v2",
    })
  );
});
qm = Ym;
Ym.displayName = "CircleInformation";
var Xm = void 0,
  Za = tS(y),
  eS = me;
function Zm(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Zm = function (o) {
    return o ? n : t;
  })(e);
}
function tS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Zm(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ns() {
  return (
    (Ns = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ns.apply(this, arguments)
  );
}
var Jm = (0, Za.forwardRef)(function (e, t) {
  return Za.default.createElement(
    eS.StyledIcon,
    Ns({ ref: t, viewBox: "0 0 24 24", a11yTitle: "ClosedCaption" }, e),
    Za.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M1 12c0-7 1.5-8 11-8s11 1 11 8-1.5 8-11 8-11-1-11-8zm4.25 2c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4C5.5 8.75 6.5 8 7.75 8s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4zm8 0c0 1.5.75 2 2.5 2s2.5-.5 2.5-2h-.271c0 1.25-1 2-2.229 2-1.23 0-2.229-.75-2.229-2v-4c-.021-1.25.979-2 2.229-2s2.25.75 2.229 2h.271c0-1.25-1.021-2-2.5-2s-2.5.75-2.5 2v4z",
    })
  );
});
Xm = Jm;
Jm.displayName = "ClosedCaption";
var eg = void 0,
  Ja = rS(y),
  nS = me;
function tg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (tg = function (o) {
    return o ? n : t;
  })(e);
}
function rS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = tg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Rs() {
  return (
    (Rs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rs.apply(this, arguments)
  );
}
var ng = (0, Ja.forwardRef)(function (e, t) {
  return Ja.default.createElement(
    nS.StyledIcon,
    Rs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Expand" }, e),
    Ja.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m10 14-8 8m-1-7v8h8M22 2l-8 8m1-9h8v8",
    })
  );
});
eg = ng;
ng.displayName = "Expand";
var js = void 0,
  eu = iS(y),
  oS = me;
function rg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (rg = function (o) {
    return o ? n : t;
  })(e);
}
function iS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = rg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
var og = (0, eu.forwardRef)(function (e, t) {
  return eu.default.createElement(
    oS.StyledIcon,
    As({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormClose" }, e),
    eu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m7 7 10 10M7 17 17 7",
    })
  );
});
js = og;
og.displayName = "FormClose";
var jn = void 0,
  tu = aS(y),
  lS = me;
function ig(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (ig = function (o) {
    return o ? n : t;
  })(e);
}
function aS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = ig(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Fs() {
  return (
    (Fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Fs.apply(this, arguments)
  );
}
var lg = (0, tu.forwardRef)(function (e, t) {
  return tu.default.createElement(
    lS.StyledIcon,
    Fs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormDown" }, e),
    tu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m18 9-6 6-6-6",
    })
  );
});
jn = lg;
lg.displayName = "FormDown";
var ag = void 0,
  nu = sS(y),
  uS = me;
function ug(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (ug = function (o) {
    return o ? n : t;
  })(e);
}
function sS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = ug(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ds() {
  return (
    (Ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ds.apply(this, arguments)
  );
}
var sg = (0, nu.forwardRef)(function (e, t) {
  return nu.default.createElement(
    uS.StyledIcon,
    Ds({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormNext" }, e),
    nu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m9 6 6 6-6 6",
    })
  );
});
ag = sg;
sg.displayName = "FormNext";
var cg = void 0,
  ru = fS(y),
  cS = me;
function fg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (fg = function (o) {
    return o ? n : t;
  })(e);
}
function fS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = fg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ls() {
  return (
    (Ls = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ls.apply(this, arguments)
  );
}
var dg = (0, ru.forwardRef)(function (e, t) {
  return ru.default.createElement(
    cS.StyledIcon,
    Ls({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormPrevious" }, e),
    ru.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m15 6-6 6 6 6",
    })
  );
});
cg = dg;
dg.displayName = "FormPrevious";
var yo = void 0,
  ou = pS(y),
  dS = me;
function pg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (pg = function (o) {
    return o ? n : t;
  })(e);
}
function pS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = pg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Bs() {
  return (
    (Bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bs.apply(this, arguments)
  );
}
var hg = (0, ou.forwardRef)(function (e, t) {
  return ou.default.createElement(
    dS.StyledIcon,
    Bs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormUp" }, e),
    ou.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m18 15-6-6-6 6",
    })
  );
});
yo = hg;
hg.displayName = "FormUp";
var Yi = void 0,
  iu = mS(y),
  hS = me,
  vS = Qr;
function vg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (vg = function (o) {
    return o ? n : t;
  })(e);
}
function mS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = vg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function El() {
  return (
    (El = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    El.apply(this, arguments)
  );
}
var mg = (0, iu.forwardRef)(function (e, t) {
  var n = (0, vS.useScaleProps)(e);
  return iu.default.createElement(
    hS.StyledIcon,
    El({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Next" }, e),
    iu.default.createElement(
      "path",
      El(
        {
          fill: "none",
          stroke: "#000",
          strokeWidth: "2",
          d: "m7 2 10 10L7 22",
        },
        n
      )
    )
  );
});
Yi = mg;
mg.displayName = "Next";
var gg = void 0,
  lu = yS(y),
  gS = me;
function yg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (yg = function (o) {
    return o ? n : t;
  })(e);
}
function yS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = yg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ws.apply(this, arguments)
  );
}
var xg = (0, lu.forwardRef)(function (e, t) {
  return lu.default.createElement(
    gS.StyledIcon,
    Ws({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Pause" }, e),
    lu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M3 21h6V3H3v18zm12 0h6V3h-6v18z",
    })
  );
});
gg = xg;
xg.displayName = "Pause";
var wg = void 0,
  au = wS(y),
  xS = me;
function Sg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Sg = function (o) {
    return o ? n : t;
  })(e);
}
function wS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Sg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Us() {
  return (
    (Us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Us.apply(this, arguments)
  );
}
var kg = (0, au.forwardRef)(function (e, t) {
  return au.default.createElement(
    xS.StyledIcon,
    Us({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Play" }, e),
    au.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m3 22 18-10L3 2z",
    })
  );
});
wg = kg;
kg.displayName = "Play";
var Og = void 0,
  uu = kS(y),
  SS = me;
function Cg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Cg = function (o) {
    return o ? n : t;
  })(e);
}
function kS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Cg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Vs() {
  return (
    (Vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vs.apply(this, arguments)
  );
}
var Pg = (0, uu.forwardRef)(function (e, t) {
  return uu.default.createElement(
    SS.StyledIcon,
    Vs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "FormPin" }, e),
    uu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "m4 19 4.455-4.454M12.273 5 18 10.727m-4.454-4.454L9.727 10.09s-2.545-.636-4.454 1.273l6.363 6.363c1.91-1.909 1.273-4.454 1.273-4.454l3.818-3.818-3.181-3.182Z",
    })
  );
});
Og = Pg;
Pg.displayName = "FormPin";
var Xi = void 0,
  su = PS(y),
  OS = me,
  CS = Qr;
function bg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (bg = function (o) {
    return o ? n : t;
  })(e);
}
function PS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = bg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function zl() {
  return (
    (zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zl.apply(this, arguments)
  );
}
var Eg = (0, su.forwardRef)(function (e, t) {
  var n = (0, CS.useScaleProps)(e);
  return su.default.createElement(
    OS.StyledIcon,
    zl({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Previous" }, e),
    su.default.createElement(
      "path",
      zl(
        {
          fill: "none",
          stroke: "#000",
          strokeWidth: "2",
          d: "M17 2 7 12l10 10",
        },
        n
      )
    )
  );
});
Xi = Eg;
Eg.displayName = "Previous";
var zg = void 0,
  cu = ES(y),
  bS = me;
function Tg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Tg = function (o) {
    return o ? n : t;
  })(e);
}
function ES(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Tg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Hs() {
  return (
    (Hs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Hs.apply(this, arguments)
  );
}
var _g = (0, cu.forwardRef)(function (e, t) {
  return cu.default.createElement(
    bS.StyledIcon,
    Hs({ ref: t, viewBox: "0 0 12 12", a11yTitle: "Status is critical" }, e),
    cu.default.createElement("path", {
      fillRule: "evenodd",
      stroke: "#000",
      d: "M6.712 1.263a1.005 1.005 0 0 0-1.424 0L1.263 5.288a1.005 1.005 0 0 0 0 1.424l4.025 4.025a1.005 1.005 0 0 0 1.424 0l4.025-4.025a1.005 1.005 0 0 0 0-1.424L6.712 1.263z",
    })
  );
});
zg = _g;
_g.displayName = "StatusCriticalSmall";
var Ig = void 0,
  fu = TS(y),
  zS = me;
function $g(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return ($g = function (o) {
    return o ? n : t;
  })(e);
}
function TS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = $g(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ks.apply(this, arguments)
  );
}
var Mg = (0, fu.forwardRef)(function (e, t) {
  return fu.default.createElement(
    zS.StyledIcon,
    Ks({ ref: t, viewBox: "0 0 12 12", a11yTitle: "Status is okay" }, e),
    fu.default.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "5",
      fillRule: "evenodd",
      stroke: "#000",
    })
  );
});
Ig = Mg;
Mg.displayName = "StatusGoodSmall";
var Ng = void 0,
  du = IS(y),
  _S = me;
function Rg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Rg = function (o) {
    return o ? n : t;
  })(e);
}
function IS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Rg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Gs() {
  return (
    (Gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gs.apply(this, arguments)
  );
}
var jg = (0, du.forwardRef)(function (e, t) {
  return du.default.createElement(
    _S.StyledIcon,
    Gs({ ref: t, viewBox: "0 0 12 12", a11yTitle: "Status is warning" }, e),
    du.default.createElement("path", {
      fillRule: "evenodd",
      stroke: "#000",
      strokeLinejoin: "round",
      d: "m6 1 5 9H1z",
    })
  );
});
Ng = jg;
jg.displayName = "StatusWarningSmall";
var qs = void 0,
  pu = MS(y),
  $S = me;
function Ag(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Ag = function (o) {
    return o ? n : t;
  })(e);
}
function MS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Ag(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
var Fg = (0, pu.forwardRef)(function (e, t) {
  return pu.default.createElement(
    $S.StyledIcon,
    Qs({ ref: t, viewBox: "0 0 12 12", a11yTitle: "Status is unknown" }, e),
    pu.default.createElement("rect", {
      width: "10",
      height: "10",
      x: "1",
      y: "1",
      fillRule: "evenodd",
      stroke: "#000",
      rx: "1",
    })
  );
});
qs = Fg;
Fg.displayName = "StatusUnknownSmall";
var Dg = void 0,
  hu = RS(y),
  NS = me;
function Lg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Lg = function (o) {
    return o ? n : t;
  })(e);
}
function RS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Lg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ys() {
  return (
    (Ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ys.apply(this, arguments)
  );
}
var Bg = (0, hu.forwardRef)(function (e, t) {
  return hu.default.createElement(
    NS.StyledIcon,
    Ys({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Subtract" }, e),
    hu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M2 12h20",
    })
  );
});
Dg = Bg;
Bg.displayName = "Subtract";
var Wg = void 0,
  vu = AS(y),
  jS = me;
function Ug(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Ug = function (o) {
    return o ? n : t;
  })(e);
}
function AS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Ug(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xs.apply(this, arguments)
  );
}
var Vg = (0, vu.forwardRef)(function (e, t) {
  return vu.default.createElement(
    jS.StyledIcon,
    Xs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Volume" }, e),
    vu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M15 16a4 4 0 0 0 0-8m0 12c5 0 8-3.589 8-8s-3.589-8-8-8M1 12V8h5l6-5v18l-6-5H1v-4",
    })
  );
});
Wg = Vg;
Vg.displayName = "Volume";
var Hg = void 0,
  mu = DS(y),
  FS = me;
function Kg(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Kg = function (o) {
    return o ? n : t;
  })(e);
}
function DS(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Kg(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Zs() {
  return (
    (Zs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Zs.apply(this, arguments)
  );
}
var Gg = (0, mu.forwardRef)(function (e, t) {
  return mu.default.createElement(
    FS.StyledIcon,
    Zs({ ref: t, viewBox: "0 0 24 24", a11yTitle: "VolumeLow" }, e),
    mu.default.createElement("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "2",
      d: "M1 8v8h5.099L12 21V3L6 8H1zm14 8a4 4 0 1 0 0-8",
    })
  );
});
Hg = Gg;
Gg.displayName = "VolumeLow";
function B() {
  return (
    (B = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    B.apply(this, arguments)
  );
}
var LS = "#7D4CDB",
  qg = ["#6FFFB0", "#FD6FFF", "#81FCED", "#FFCA58"],
  BS = ["#00873D", "#3D138D", "#00739D", "#A2423D"],
  Op = {
    critical: "#FF4040",
    error: "#B30000",
    warning: "#FFAA15",
    ok: "#00C781",
    unknown: "#CCCCCC",
    disabled: "#CCCCCC",
  },
  WS = ["#333333", "#555555", "#777777", "#999999", "#999999", "#999999"],
  US = ["#F8F8F8", "#F2F2F2", "#EDEDED", "#DADADA", "#DADADA", "#DADADA"],
  VS = qg[0],
  xf = {
    active: "rgba(221, 221, 221, 0.5)",
    "background-back": { dark: "#33333308", light: "#EDEDED" },
    "background-front": { dark: "#444444", light: "#FFFFFF" },
    "background-contrast": { light: "#33333310", dark: "#FFFFFF18" },
    "active-background": "background-contrast",
    "active-text": "text-strong",
    black: "#000000",
    border: { dark: "rgba(255, 255, 255, 0.33)", light: "rgba(0, 0, 0, 0.33)" },
    brand: LS,
    control: { dark: "accent-1", light: "brand" },
    focus: VS,
    "graph-0": "accent-1",
    "graph-1": "neutral-1",
    "graph-2": "neutral-2",
    "graph-3": "neutral-3",
    "graph-4": "neutral-4",
    placeholder: "#AAAAAA",
    selected: "brand",
    text: { dark: "#f8f8f8", light: "#444444" },
    "text-strong": { dark: "#FFFFFF", light: "#000000" },
    "text-weak": { dark: "#CCCCCC", light: "#555555" },
    "text-xweak": { dark: "#BBBBBB", light: "#666666" },
    icon: { dark: "#f8f8f8", light: "#666666" },
    "selected-background": "brand",
    "selected-text": "text-strong",
    white: "#FFFFFF",
  },
  sa = function (t, n) {
    return t.forEach(function (r, o) {
      xf[n + "-" + (o + 1)] = r;
    });
  };
sa(qg, "accent");
sa(WS, "dark");
sa(US, "light");
sa(BS, "neutral");
Object.keys(Op).forEach(function (e) {
  xf["status-" + e] = Op[e];
});
var HS = function (t, n) {
    t === void 0 && (t = 24), n === void 0 && (n = 6);
    var r = t * 0.75,
      o = t / n,
      i = function (f) {
        return {
          size: r + f * o + "px",
          height: t + f * o + "px",
          maxWidth: t * (r + f * o) + "px",
        };
      },
      l = 2,
      a = 1,
      u = Aw(jm, {
        global: {
          active: {
            background: { color: "active", opacity: "medium" },
            color: { dark: "white", light: "black" },
          },
          animation: { duration: "1s", jiggle: { duration: "0.1s" } },
          borderSize: {
            xsmall: "1px",
            small: "2px",
            medium: t / 6 + "px",
            large: t / 2 + "px",
            xlarge: t + "px",
          },
          breakpoints: {
            small: {
              value: t * 32,
              borderSize: {
                xsmall: "1px",
                small: "2px",
                medium: t / 6 + "px",
                large: t / 4 + "px",
                xlarge: t / 2 + "px",
              },
              edgeSize: {
                none: "0px",
                hair: "1px",
                xxsmall: "2px",
                xsmall: t / 8 + "px",
                small: t / 4 + "px",
                medium: t / 2 + "px",
                large: t + "px",
                xlarge: t * 2 + "px",
              },
              size: {
                xxsmall: t + "px",
                xsmall: t * 2 + "px",
                small: t * 4 + "px",
                medium: t * 8 + "px",
                large: t * 16 + "px",
                xlarge: t * 32 + "px",
                full: "100%",
              },
            },
            medium: { value: t * 64 },
            large: {},
          },
          deviceBreakpoints: {
            phone: "small",
            tablet: "medium",
            computer: "large",
          },
          colors: xf,
          control: {
            border: { width: a + "px", radius: "4px", color: "border" },
            disabled: { opacity: 0.3 },
          },
          debounceDelay: 500,
          drop: {
            background: { dark: "black", light: "white" },
            border: { radius: "0px" },
            shadowSize: "small",
            zIndex: "20",
          },
          edgeSize: {
            none: "0px",
            hair: "1px",
            xxsmall: t / 8 + "px",
            xsmall: t / 4 + "px",
            small: t / 2 + "px",
            medium: t + "px",
            large: t * 2 + "px",
            xlarge: t * 4 + "px",
            responsiveBreakpoint: "small",
          },
          elevation: {
            light: {
              none: "none",
              xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
              small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
              medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
              large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
              xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)",
            },
            dark: {
              none: "none",
              xsmall: "0px 2px 2px rgba(255, 255, 255, 0.40)",
              small: "0px 4px 4px rgba(255, 255, 255, 0.40)",
              medium: "0px 6px 8px rgba(255, 255, 255, 0.40)",
              large: "0px 8px 16px rgba(255, 255, 255, 0.40)",
              xlarge: "0px 12px 24px rgba(255, 255, 255, 0.40)",
            },
          },
          focus: {
            border: { color: "focus" },
            shadow: { color: "focus", size: "2px" },
          },
          font: B({}, i(0)),
          hover: {
            background: { color: "active", opacity: "medium" },
            color: { dark: "white", light: "black" },
          },
          input: {
            padding: {
              horizontal: Ce(t / 2 + "px") - Ce(a + "px") + "px",
              vertical: Ce(t / 2 + "px") - Ce(a + "px") + "px",
            },
            font: { weight: 600 },
          },
          opacity: { strong: 0.8, medium: 0.4, weak: 0.1 },
          selected: { background: "selected", color: "white" },
          spacing: t + "px",
          size: {
            xxsmall: t * 2 + "px",
            xsmall: t * 4 + "px",
            small: t * 8 + "px",
            medium: t * 16 + "px",
            large: t * 32 + "px",
            xlarge: t * 48 + "px",
            xxlarge: t * 64 + "px",
            full: "100%",
          },
        },
        accordion: {
          panel: {},
          border: { side: "bottom", color: "border" },
          heading: { level: "4" },
          hover: {
            color: { dark: "light-4", light: "dark-3" },
            heading: { color: { dark: "light-4", light: "dark-3" } },
          },
          icons: { collapse: yo, expand: jn },
        },
        anchor: {
          textDecoration: "none",
          fontWeight: 600,
          color: { dark: "accent-1", light: "brand" },
          gap: "small",
          hover: { textDecoration: "underline" },
        },
        avatar: {
          size: {
            xsmall: t * 0.75 + "px",
            small: t + "px",
            medium: t * 2 + "px",
            large: t * 3 + "px",
            xlarge: t * 4 + "px",
            "2xl": t * 5 + "px",
            "3xl": t * 6 + "px",
            "4xl": t * 7 + "px",
            "5xl": t * 8 + "px",
          },
          text: {
            size: {
              xsmall: "small",
              small: "medium",
              medium: "large",
              large: "xlarge",
              xlarge: "xxlarge",
              "2xl": "3xl",
              "3xl": "4xl",
              "4xl": "5xl",
              "5xl": "6xl",
            },
          },
        },
        box: { responsiveBreakpoint: "small" },
        button: {
          badge: {
            container: { background: "brand" },
            size: { medium: t + "px" },
            text: { size: { medium: "small" } },
          },
          gap: "small",
          size: {
            small: {
              border: { radius: t * 0.75 + "px" },
              pad: { vertical: t / 4 - l + "px", horizontal: t - l * 2 + "px" },
            },
            medium: {
              border: { radius: t * 0.75 + "px" },
              pad: { vertical: t / 4 - l + "px", horizontal: t - l + "px" },
            },
            large: {
              border: { radius: t + "px" },
              pad: { vertical: t / 4 + l + "px", horizontal: t + l * 4 + "px" },
            },
          },
          border: { width: l + "px", radius: t * 0.75 + "px" },
          active: { background: "active-background", color: "active-text" },
          disabled: { opacity: 0.3 },
          padding: { vertical: t / 4 - l + "px", horizontal: t - l + "px" },
          transition: {
            timing: "ease-in-out",
            duration: 0.1,
            properties: [
              "color",
              "background-color",
              "border-color",
              "box-shadow",
            ],
          },
          skeleton: { width: { min: "100px" } },
        },
        calendar: {
          small: {
            fontSize: r - o + "px",
            lineHeight: 1.375,
            daySize: (t * 8) / 7 + "px",
            slideDuration: "0.2s",
          },
          medium: {
            fontSize: r + "px",
            lineHeight: 1.45,
            daySize: (t * 16) / 7 + "px",
            slideDuration: "0.5s",
          },
          large: {
            fontSize: r + 3 * o + "px",
            lineHeight: 1.11,
            daySize: (t * 32) / 7 + "px",
            slideDuration: "0.8s",
          },
          icons: { previous: Xi, next: Yi, small: { previous: cg, next: ag } },
          heading: { level: "4" },
        },
        card: {
          container: { round: "small", elevation: "small" },
          header: {},
          body: {},
          footer: {},
        },
        cards: { container: { gap: "xsmall" } },
        carousel: {
          icons: { current: Dg, next: Yi, previous: Xi },
          animation: { duration: 1e3 },
          disabled: { icons: {} },
        },
        chart: { color: "graph-0" },
        checkBox: {
          border: {
            color: {
              dark: "rgba(255, 255, 255, 0.5)",
              light: "rgba(0, 0, 0, 0.15)",
            },
            width: "2px",
          },
          check: { radius: "4px", thickness: "4px" },
          label: { align: "center" },
          hover: { border: { color: { dark: "white", light: "black" } } },
          icon: {},
          icons: {},
          size: t + "px",
          toggle: {
            color: { dark: "#d9d9d9", light: "#d9d9d9" },
            knob: {},
            radius: t + "px",
            size: t * 2 + "px",
          },
        },
        checkBoxGroup: {},
        clock: {
          analog: {
            hour: {
              color: { dark: "light-2", light: "dark-3" },
              width: t / 3 + "px",
              size: t + "px",
              shape: "round",
            },
            minute: {
              color: { dark: "light-4", light: "dark-3" },
              width: t / 6 + "px",
              size: Math.round(t / 2) + "px",
              shape: "round",
            },
            second: {
              color: { dark: "accent-1", light: "accent-1" },
              width: t / 8 + "px",
              size: Math.round(t / 2.666) + "px",
              shape: "round",
            },
            size: {
              xsmall: t * 2 + "px",
              small: t * 3 + "px",
              medium: t * 4 + "px",
              large: t * 6 + "px",
              xlarge: t * 9 + "px",
              xxlarge: t * 12 + "px",
              huge: t * 12 + "px",
            },
          },
          digital: {
            text: {
              xsmall: { size: r - 2 * o + "px", height: 1.5 },
              small: { size: r - o + "px", height: 1.43 },
              medium: { size: r + "px", height: 1.375 },
              large: { size: r + o + "px", height: 1.167 },
              xlarge: { size: r + 2 * o + "px", height: 1.1875 },
              xxlarge: { size: r + 4 * o + "px", height: 1.125 },
            },
          },
        },
        collapsible: { minSpeed: 200, baseline: 500 },
        dateInput: { container: { round: "xxsmall" } },
        dataTable: {
          pinned: {
            header: { background: { opacity: "strong" } },
            footer: { background: { opacity: "strong" } },
          },
          container: { gap: "xsmall" },
          groupHeader: {
            background: { dark: "dark-2", light: "light-2" },
            border: { side: "bottom", size: "xsmall" },
            pad: { horizontal: "small", vertical: "xsmall" },
          },
          groupEnd: { border: { side: "bottom", size: "xsmall" } },
          header: {
            gap: "small",
            units: {
              color: "text-xweak",
              margin: { left: "xsmall" },
              alignSelf: "end",
            },
          },
          icons: { ascending: jn, contract: yo, descending: yo, expand: jn },
          primary: { weight: "bold" },
          resize: { border: { color: "border", side: "end" } },
        },
        diagram: { line: { color: "graph-0" } },
        fileInput: {
          border: { side: "all", size: "small", style: "dashed" },
          dragOver: { border: { color: "control" } },
          hover: { border: { color: "brand" } },
          icons: { remove: js },
          label: { margin: "small" },
          message: { margin: "small" },
        },
        formField: {
          border: {
            color: "border",
            error: { color: { dark: "white", light: "status-critical" } },
            position: "inner",
            side: "bottom",
          },
          content: { pad: "small" },
          disabled: {
            background: { color: "status-disabled", opacity: "medium" },
          },
          error: {
            color: "status-critical",
            margin: { vertical: "xsmall", horizontal: "small" },
          },
          help: { color: "dark-3", margin: { start: "small" } },
          info: {
            color: "text-xweak",
            margin: { vertical: "xsmall", horizontal: "small" },
          },
          label: { margin: { vertical: "xsmall", horizontal: "small" } },
          margin: { bottom: "small" },
          survey: {
            label: {
              margin: { bottom: "xsmall" },
              size: "medium",
              weight: 400,
            },
          },
        },
        grommet: {},
        header: { sticky: { zIndex: "20" } },
        heading: {
          font: {},
          level: {
            1: {
              font: {},
              small: B({}, i(4)),
              medium: B({}, i(8)),
              large: B({}, i(16)),
              xlarge: B({}, i(24)),
            },
            2: {
              font: {},
              small: B({}, i(2)),
              medium: B({}, i(4)),
              large: B({}, i(8)),
              xlarge: B({}, i(12)),
            },
            3: {
              font: {},
              small: B({}, i(1)),
              medium: B({}, i(2)),
              large: B({}, i(4)),
              xlarge: B({}, i(6)),
            },
            4: {
              font: {},
              small: B({}, i(0)),
              medium: B({}, i(0)),
              large: B({}, i(0)),
              xlarge: B({}, i(0)),
            },
            5: {
              font: {},
              small: B({}, i(-0.5)),
              medium: B({}, i(-0.5)),
              large: B({}, i(-0.5)),
              xlarge: B({}, i(-0.5)),
            },
            6: {
              font: {},
              small: B({}, i(-1)),
              medium: B({}, i(-1)),
              large: B({}, i(-1)),
              xlarge: B({}, i(-1)),
            },
          },
          responsiveBreakpoint: "small",
          weight: 600,
          skeleton: { width: { min: "150px", max: "200px" } },
        },
        layer: {
          background: { dark: "black", light: "white" },
          border: { radius: "4px" },
          container: { zIndex: "20" },
          overlay: { background: "rgba(0, 0, 0, 0.5)" },
          responsiveBreakpoint: "small",
          zIndex: "20",
        },
        list: {
          container: { gap: "xsmall" },
          item: {
            border: "horizontal",
            disabled: { color: "status-disabled", cursor: "default" },
            pinned: {
              background: "background-contrast",
              icon: { size: "medium", pad: "small" },
            },
            pad: { horizontal: "medium", vertical: "small" },
          },
          icons: { down: jn, up: yo, pin: Og },
        },
        maskedInput: {},
        menu: {
          drop: { align: { top: "top", left: "left" } },
          group: {
            container: { pad: { vertical: "xsmall" } },
            separator: {
              color: "border",
              size: "xsmall",
              pad: { horizontal: "small" },
            },
          },
          icons: { down: jn },
        },
        meter: { color: "graph-0" },
        nameValueList: {
          gap: { column: "large", row: "small" },
          pair: { column: { gap: { column: "large", row: "medium" } } },
          name: { width: "small" },
          value: { width: "medium" },
        },
        nameValuePair: {
          column: { gap: "xxsmall" },
          name: { color: "text", weight: "bold" },
          value: { color: "text" },
        },
        notification: {
          actions: {},
          direction: "column",
          container: {
            round: "xsmall",
            pad: { horizontal: "small", vertical: "xsmall" },
            background: { color: "background-front" },
          },
          global: {
            direction: "row",
            container: {
              round: "none",
              pad: { horizontal: "large", vertical: "xsmall" },
            },
          },
          toast: {
            container: { elevation: "medium", width: "medium" },
            layer: { position: "top", margin: "medium" },
            time: 8e3,
          },
          iconContainer: { pad: { right: "small" }, flex: !1 },
          textContainer: { gap: "medium" },
          title: { weight: "bold" },
          message: { margin: "none" },
          close: { icon: js },
          critical: {
            icon: zg,
            background: { color: "status-critical", opacity: "weak" },
            color: "status-critical",
            toast: { background: "background-front" },
          },
          warning: {
            icon: Ng,
            background: { color: "status-warning", opacity: "weak" },
            color: "status-warning",
            toast: { background: "background-front" },
          },
          normal: {
            icon: Ig,
            background: { color: "status-ok", opacity: "weak" },
            color: "status-ok",
            toast: { background: "background-front" },
          },
          info: {
            icon: qm,
            background: "background-contrast",
            color: "text-strong",
            toast: { background: "background-front" },
          },
          unknown: {
            icon: qs,
            background: { color: "status-unknown", opacity: "weak" },
            color: "status-unknown",
            toast: { background: "background-front" },
          },
          undefined: { icon: qs, color: "status-unknown" },
        },
        page: {
          wide: {
            alignSelf: "center",
            width: { min: "medium", max: "xxlarge" },
            small: { pad: { horizontal: "large" } },
            medium: { pad: { horizontal: "medium" } },
            large: { pad: { horizontal: "large" } },
          },
          narrow: {
            alignSelf: "center",
            width: { min: "medium", max: "large" },
            small: { pad: { horizontal: "large" } },
            medium: { pad: { horizontal: "medium" } },
            large: { pad: { horizontal: "large" } },
          },
          full: {
            alignSelf: "start",
            width: { min: "medium", max: "100%" },
            small: { pad: { horizontal: "large" } },
            medium: { pad: { horizontal: "medium" } },
            large: { pad: { horizontal: "large" } },
          },
        },
        pageHeader: {
          actions: { align: "end" },
          pad: { top: "large", bottom: "medium" },
          parent: { align: "start" },
          responsive: {
            actions: { align: "start", pad: { top: "small" } },
            areas: [["parent"], ["title"], ["subtitle"], ["actions"]],
            breakpoints: ["small"],
            columns: ["auto"],
            rows: ["auto"],
          },
          subtitle: { margin: "none" },
          title: { margin: "none", fill: !0 },
          size: {
            small: {
              pad: { top: "medium", bottom: "small" },
              subtitle: { size: "small" },
              title: { size: "small" },
            },
            large: {
              pad: { top: "xlarge", bottom: "large" },
              subtitle: { size: "large" },
              title: { size: "large" },
            },
          },
          small: {
            areas: [
              ["parent", "parent"],
              ["title", "actions"],
              ["subtitle", "actions"],
            ],
            columns: [["small", "flex"], "auto"],
            rows: ["auto", "auto", "auto"],
            gap: { row: "xsmall", column: "large" },
          },
          medium: {
            areas: [
              ["parent", "parent"],
              ["title", "actions"],
              ["subtitle", "actions"],
            ],
            columns: [["medium", "flex"], "auto"],
            rows: ["auto", "auto", "auto"],
            gap: { row: "xsmall", column: "medium" },
          },
          large: {
            areas: [
              ["parent", "parent"],
              ["title", "actions"],
              ["subtitle", "actions"],
            ],
            columns: [["medium", "flex"], "auto"],
            rows: ["auto", "auto", "auto"],
            gap: { row: "xsmall", column: "large" },
          },
        },
        pagination: {
          button: {
            active: { background: { color: "active-background" } },
            color: "text-strong",
            hover: {
              background: { color: "background-contrast" },
              color: void 0,
            },
            size: {
              small: {
                border: { radius: t / 8 + "px", width: "2px" },
                pad: { vertical: "4px", horizontal: "4px" },
                font: B({}, i(-1)),
                height: t * 1.25 + "px",
                width: t * 1.25 + "px",
              },
              medium: {
                border: { radius: t / 6 + "px", width: "2px" },
                pad: { vertical: "4px", horizontal: "4px" },
                font: B({}, i(0)),
                height: t * 1.5 + "px",
                width: t * 1.5 + "px",
              },
              large: {
                border: { radius: t / 4 + "px", width: "2px" },
                pad: { vertical: "4px", horizontal: "4px" },
                font: B({}, i(1)),
                height: t * 2 + "px",
                width: t * 2 + "px",
              },
            },
          },
          controls: {
            align: "center",
            direction: "row",
            gap: "xxsmall",
            margin: "none",
            pad: "none",
          },
          icons: { next: Yi, previous: Xi },
        },
        paragraph: {
          font: {},
          small: B({}, i(-1)),
          medium: B({}, i(0)),
          large: B({}, i(1)),
          xlarge: B({}, i(2)),
          xxlarge: B({}, i(4)),
        },
        thumbsRating: {},
        spinner: {
          container: {
            animation: "rotateRight",
            color: "brand",
            pad: "small",
            round: "full",
            size: "small",
          },
          size: {
            xsmall: t * 0.75 + "px",
            small: t + "px",
            medium: t * 2 + "px",
            large: t * 3 + "px",
            xlarge: t * 4 + "px",
          },
        },
        radioButton: {
          border: {
            color: {
              dark: "rgba(255, 255, 255, 0.5)",
              light: "rgba(0, 0, 0, 0.15)",
            },
            width: "2px",
          },
          check: { radius: "100%" },
          hover: { border: { color: { dark: "white", light: "black" } } },
          icon: {},
          icons: {},
          gap: "small",
          size: t + "px",
          font: {},
          container: {},
        },
        radioButtonGroup: {},
        rangeInput: {
          disabled: { opacity: 0.3 },
          track: { height: "4px", color: "border" },
          thumb: {},
        },
        rangeSelector: { background: { invert: { color: "light-4" } } },
        select: {
          clear: {
            container: { pad: "small", background: "background-contrast" },
            text: { color: "text-weak" },
          },
          container: {},
          control: {},
          icons: { margin: { horizontal: "small" }, down: jn },
          options: {
            container: { align: "start", pad: "small" },
            text: { margin: "none" },
          },
          step: 20,
        },
        selectMultiple: { maxInline: 5 },
        skeleton: {
          border: !1,
          colors: {
            dark: ["background", "background-front"],
            light: ["background", "background-back"],
          },
        },
        skipLinks: {
          position: "top",
          container: { elevation: "large", round: "small", pad: "medium" },
          label: { margin: { bottom: "medium" }, size: "medium" },
        },
        starRating: {},
        tab: {
          active: { color: "text" },
          border: {
            side: "bottom",
            size: "small",
            color: { dark: "accent-1", light: "brand" },
            active: { color: { dark: "white", light: "black" } },
            disabled: {},
            hover: { color: { dark: "white", light: "black" } },
          },
          color: "control",
          hover: { color: { dark: "white", light: "black" } },
          margin: { vertical: "xxsmall", horizontal: "small" },
          pad: { bottom: "xsmall" },
        },
        tabs: {
          header: {},
          panel: {},
          step: { small: 1, medium: 3, large: 3 },
        },
        table: {
          header: {
            align: "start",
            pad: { horizontal: "small", vertical: "xsmall" },
            border: "bottom",
          },
          body: {
            align: "start",
            pad: { horizontal: "small", vertical: "xsmall" },
          },
          footer: {
            align: "start",
            pad: { horizontal: "small", vertical: "xsmall" },
            border: "top",
          },
        },
        tag: {
          border: !0,
          round: "large",
          pad: { horizontal: "small", vertical: "xsmall" },
          remove: { margin: { right: "xsmall" } },
          separator: " : ",
          size: {
            xsmall: {
              pad: { horizontal: t / 3 + "px", vertical: "xxsmall" },
              icon: { size: t * 0.75 + "px" },
            },
            small: {
              pad: { horizontal: t * 0.4 + "px", vertical: "xxsmall" },
              icon: { size: t * 0.75 + "px" },
            },
            large: {
              pad: { horizontal: (t / 3) * 2 + "px", vertical: "xsmall" },
              icon: { size: t * 1.25 + "px" },
            },
            xlarge: {
              pad: { horizontal: t * 0.75 + "px", vertical: "xsmall" },
              icon: { size: t * 1.5 + "px" },
            },
          },
          value: { weight: 600 },
        },
        text: {
          font: {},
          xsmall: B({}, i(-1.5)),
          small: B({}, i(-1)),
          medium: B({}, i(0)),
          large: B({}, i(1)),
          xlarge: B({}, i(2)),
          xxlarge: B({}, i(4)),
          "2xl": B({}, i(4)),
          "3xl": B({}, i(6)),
          "4xl": B({}, i(9)),
          "5xl": B({}, i(13)),
          "6xl": B({}, i(18)),
          skeleton: {
            width: { width: "100px", min: "100px" },
            margin: { vertical: "xsmall" },
            colors: {
              dark: ["border", "border"],
              light: ["background-front", "background-back"],
            },
          },
        },
        textArea: {},
        textInput: {},
        tip: {
          content: {
            background: "background-contrast",
            elevation: "small",
            margin: "xsmall",
            pad: { vertical: "xsmall", horizontal: "small" },
            round: "small",
          },
          drop: {
            align: { top: "bottom" },
            background: "none",
            elevation: "none",
            margin: "none",
          },
        },
        video: {
          captions: { background: "rgba(0, 0, 0, 0.7)" },
          icons: {
            closedCaption: Xm,
            configure: Wm,
            fullScreen: eg,
            pause: gg,
            play: wg,
            reduceVolume: Hg,
            volume: Wg,
            description: Hm,
          },
          scrubber: { color: "light-4", interval: 10 },
        },
        worldMap: {
          color: "light-3",
          continent: { active: "8px", base: "6px" },
          hover: { color: "light-4" },
          place: { active: "20px", base: "8px" },
        },
      });
    return jw(u);
  },
  KS = HS(24),
  ge = { theme: KS },
  GS = {},
  qS = GS,
  QS = ["capture", "target", "children", "onKeyDown"];
function YS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var XS = {
    8: "onBackspace",
    9: "onTab",
    13: "onEnter",
    27: "onEsc",
    32: "onSpace",
    37: "onLeft",
    38: "onUp",
    39: "onRight",
    40: "onDown",
    188: "onComma",
    16: "onShift",
  },
  ca = function (t) {
    var n = t.capture,
      r = t.target,
      o = t.children,
      i = t.onKeyDown,
      l = YS(t, QS),
      a = y.useCallback(
        function (u) {
          for (
            var s = u.keyCode ? u.keyCode : u.which,
              f = XS[s],
              c = arguments.length,
              d = new Array(c > 1 ? c - 1 : 0),
              m = 1;
            m < c;
            m++
          )
            d[m - 1] = arguments[m];
          f && l[f] && l[f].apply(l, [u].concat(d)),
            i && i.apply(void 0, [u].concat(d));
        },
        [i, l]
      );
    return (
      y.useEffect(
        function () {
          return (
            r === "document" && document.addEventListener("keydown", a, n),
            function () {
              r === "document" && document.removeEventListener("keydown", a, n);
            }
          );
        },
        [n, a, r]
      ),
      r === "document"
        ? o
        : y.cloneElement(y.Children.only(o), { onKeyDown: a })
    );
  };
ca.propTypes = qS;
var ar;
function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
var ZS = {
    auto: "auto",
    full: "100%",
    "1/2": "50%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/3": "33.33%",
    "2/3": "66.66%",
  },
  JS = z(["flex-basis:", ";"], function (e) {
    return ZS[e.basis] || e.theme.global.size[e.basis] || e.basis;
  }),
  ek = function (t, n) {
    var r = [
      z(
        ["min-width:0;min-height:0;flex-direction:", ";"],
        t === "row-responsive" ? "row" : t
      ),
    ];
    if (t === "row-responsive" && n.box.responsiveBreakpoint) {
      var o = ia(n, n.box.responsiveBreakpoint);
      o &&
        r.push(
          re(
            o,
            `
        flex-direction: column;
        flex-basis: auto;
        justify-content: flex-start;
        align-items: stretch;
      `
          )
        );
    }
    return r;
  },
  tk = function (t) {
    return z(["box-shadow:", ";"], function (n) {
      return n.theme.global.elevation[n.theme.dark ? "dark" : "light"][t];
    });
  },
  nk =
    ((ar = {}),
    (ar[!0] = "1 1"),
    (ar[!1] = "0 0"),
    (ar.grow = "1 0"),
    (ar.shrink = "0 1"),
    ar),
  rk = function (t) {
    return typeof t == "boolean" || typeof t == "string"
      ? nk[t]
      : (t.grow ? t.grow : 0) + " " + (t.shrink ? t.shrink : 0);
  },
  ok = z(["flex:", ";"], function (e) {
    return "" + rk(e.flex) + (e.flex !== !0 && !e.basis ? " auto" : "");
  }),
  ik = {
    around: "space-around",
    between: "space-between",
    center: "center",
    end: "flex-end",
    evenly: "space-evenly",
    start: "flex-start",
  },
  lk = z(["justify-content:", ";"], function (e) {
    return ik[e.justify];
  }),
  ak = { true: "wrap", reverse: "wrap-reverse" },
  uk = z(["flex-wrap:", ";"], function (e) {
    return ak[e.wrapProp];
  }),
  sk = function e(t, n) {
    return typeof t == "string"
      ? cp({ type: t }, n)
      : Array.isArray(t)
      ? t.reduce(function (r, o, i) {
          return z(["", "", " ", ""], r, i > 0 ? "," : "", e(o, n));
        }, "")
      : typeof t == "object"
      ? cp(t, n)
      : "";
  },
  ck = function (t) {
    return t.type === "flipIn" || t.type === "flipOut"
      ? "perspective: 1000px; transform-style: preserve-3d;"
      : "";
  },
  $i = function (t) {
    var n = ym(t.type, t.size);
    return n ? n[0] + " " + ck(t) : "";
  },
  fk = function (t) {
    return typeof t == "string"
      ? $i({ type: t })
      : Array.isArray(t)
      ? t
          .map(function (n) {
            return $i(typeof n == "string" ? { type: n } : n);
          })
          .join("")
      : typeof t == "object"
      ? $i(t)
      : "";
  },
  dk = z(["", ";"], function (e) {
    return z(
      ["", " animation:", ";"],
      fk(e.animation),
      sk(e.animation, e.theme)
    );
  }),
  pk = z(
    ["cursor:pointer;&:hover{", " ", "}"],
    function (e) {
      var t;
      return (
        ((t = e.kindProp) == null ? void 0 : t.hover) &&
        bs(e.kindProp.hover, e.theme)
      );
    },
    function (e) {
      return e.hoverIndicator && bs(e.hoverIndicator, e.theme);
    }
  ),
  hk = function (t, n, r, o, i) {
    var l = i.global.edgeSize[n] || n,
      a = ia(i, i.box.responsiveBreakpoint),
      u = r && a && a.edgeSize[n],
      s = [];
    return (
      t === "column" || t === "column-reverse"
        ? (s.push("row-gap: " + l + ";"),
          u && s.push(re(a, "row-gap: " + u + ";")))
        : (s.push("column-gap: " + l + ";"),
          o && s.push("row-gap: " + l + ";"),
          u &&
            (t === "row" || t === "row-reverse"
              ? s.push(re(a, "column-gap: " + u + ";"))
              : t === "row-responsive" &&
                s.push(
                  re(
                    a,
                    `
          row-gap: ` +
                      u +
                      `;
        `
                  )
                ))),
      s
    );
  },
  wf = ne.div.withConfig({
    displayName: "StyledBox",
    componentId: "sc-13pk1d4-0",
  })(
    [
      "display:flex;box-sizing:border-box;",
      ";",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      "",
    ],
    function (e) {
      return !e.basis && "max-width: 100%;";
    },
    Mn,
    function (e) {
      return e.align && Tw;
    },
    function (e) {
      return e.alignContent && Iw;
    },
    function (e) {
      return e.background && Ut(e.background, e.theme);
    },
    function (e) {
      return e.border && Es(e.border, e.responsive, e.theme);
    },
    function (e) {
      return e.directionProp && ek(e.directionProp, e.theme);
    },
    function (e) {
      return e.heightProp && Nm(e.heightProp, e.theme);
    },
    function (e) {
      return e.widthProp && mf(e.widthProp, e.theme);
    },
    function (e) {
      return e.flex !== void 0 && ok;
    },
    function (e) {
      return e.basis && JS;
    },
    function (e) {
      return e.fillProp && $m(e.fillProp);
    },
    function (e) {
      return e.justify && lk;
    },
    function (e) {
      return (
        e.pad &&
        Tn(
          "padding",
          e.pad,
          e.responsive,
          e.theme.box.responsiveBreakpoint,
          e.theme
        )
      );
    },
    function (e) {
      return e.round && hf(e.round, e.responsive, e.theme);
    },
    function (e) {
      return e.wrapProp && uk;
    },
    function (e) {
      return e.overflowProp && Cw(e.overflowProp);
    },
    function (e) {
      return e.elevationProp && tk(e.elevationProp);
    },
    function (e) {
      return (
        e.gap && hk(e.directionProp, e.gap, e.responsive, e.wrapProp, e.theme)
      );
    },
    function (e) {
      return e.animation && dk;
    },
    function (e) {
      return e.onClick && pk;
    },
    function (e) {
      return e.onClick && e.focus && e.focusIndicator !== !1 && la();
    },
    function (e) {
      return e.theme.box && e.theme.box.extend;
    },
    function (e) {
      return e.kindProp && e.kindProp.extend;
    }
  );
wf.defaultProps = {};
Object.setPrototypeOf(wf.defaultProps, ge);
var vk = function (t, n, r, o, i) {
    var l = i.global.edgeSize[n] || n,
      a = ia(i, i.box.responsiveBreakpoint),
      u = r && a && a.edgeSize[n],
      s = [];
    if (
      (t === "column" || t === "column-reverse"
        ? (s.push("height: " + l + ";"),
          u && s.push(re(a, "height: " + u + ";")))
        : (s.push("width: " + l + ";"),
          u &&
            (t === "row" || t === "row-reverse"
              ? s.push(re(a, "width: " + u + ";"))
              : t === "row-responsive" &&
                s.push(
                  re(
                    a,
                    `
          width: auto;
          height: ` +
                      u +
                      `;
        `
                  )
                ))),
      o === "between" || (o && o.side === "between"))
    ) {
      var f = o.size || "xsmall",
        c = i.global.borderSize[f] || f,
        d = Ce(l) / 2 - Ce(c) / 2 + "px",
        m = r && a && (a.borderSize[f] || f),
        g = m && Ce(u || l) / 2 - Ce(m) / 2 + "px";
      if (t === "column" || t === "column-reverse") {
        var x = typeof o == "string" ? "top" : To({}, o, { side: "top" });
        s.push(
          z(
            [
              "position:relative;&:after{content:'';position:absolute;width:100%;top:",
              ";",
              "}",
            ],
            d,
            Es(x, r, i)
          )
        ),
          g &&
            s.push(
              re(
                a,
                `
            &:after {
              content: '';
              top: ` +
                  g +
                  `;
            }`
              )
            );
      } else {
        var O = typeof o == "string" ? "left" : To({}, o, { side: "left" });
        if (
          (s.push(
            z(
              [
                "position:relative;&:after{content:'';position:absolute;height:100%;left:",
                ";",
                "}",
              ],
              d,
              Es(O, t !== "row-responsive" && r, i)
            )
          ),
          g)
        ) {
          if (t === "row" || t === "row-reverse")
            s.push(
              re(
                a,
                `
              &:after {
                content: '';
                left: ` +
                  g +
                  `;
              }`
              )
            );
          else if (t === "row-responsive") {
            var h = typeof o == "string" ? "top" : To({}, o, { side: "top" });
            s.push(
              re(
                a,
                `
              &:after {
                content: '';
                height: auto;
                left: unset;
                width: 100%;
                top: ` +
                  g +
                  `;
                border-left: none;
                ` +
                  Em(h, i) +
                  `
              }`
              )
            );
          }
        }
      }
    }
    return s;
  },
  Sf = ne.div.withConfig({
    displayName: "StyledBox__StyledBoxGap",
    componentId: "sc-13pk1d4-1",
  })(["flex:0 0 auto;align-self:stretch;", ";"], function (e) {
    return e.gap && vk(e.directionProp, e.gap, e.responsive, e.border, e.theme);
  });
Sf.defaultProps = {};
Object.setPrototypeOf(Sf.defaultProps, ge);
var gu = ["auto", "hidden", "scroll", "visible"];
w.shape({
  color: w.oneOfType([w.string, w.shape({ dark: w.string, light: w.string })]),
  side: w.oneOf([
    "top",
    "left",
    "bottom",
    "right",
    "start",
    "end",
    "horizontal",
    "vertical",
    "all",
    "between",
  ]),
  size: w.oneOfType([
    w.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
    w.string,
  ]),
  style: w.oneOf([
    "solid",
    "dashed",
    "dotted",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "hidden",
  ]),
});
w.oneOfType([
  w.oneOf(gu),
  w.shape({ horizontal: w.oneOf(gu), vertical: w.oneOf(gu) }),
  w.string,
]);
var mk = {},
  gk = mk,
  yk = {},
  xk = yk,
  Qg = E.createContext(),
  oi = function () {
    return y.useContext(Qg);
  },
  wk = ne.div.withConfig({
    displayName: "StyledSkeleton",
    componentId: "sc-1omqm6u-0",
  })(
    ["display:flex;box-sizing:border-box;", " ", " ", " ", " ", " ", ""],
    Mn,
    function (e) {
      return e.background && Ut(e.background, e.theme);
    },
    function (e) {
      var t, n;
      return Nm(
        e.heightProp ||
          ((t = e.theme.text) == null || (n = t.medium) == null
            ? void 0
            : n.height),
        e.theme
      );
    },
    function (e) {
      return mf(e.widthProp || "100%", e.theme);
    },
    function (e) {
      return (
        e.pad &&
        Tn(
          "padding",
          e.pad,
          e.responsive,
          e.theme.box.responsiveBreakpoint,
          e.theme
        )
      );
    },
    function (e) {
      return e.round && hf(e.round, e.responsive, e.theme);
    }
  ),
  Sk = ["as", "colors", "width", "height"];
function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Js.apply(this, arguments)
  );
}
function kk(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ii = y.forwardRef(function (e, t) {
  var n,
    r = e.as,
    o = e.colors,
    i = e.width,
    l = e.height,
    a = kk(e, Sk),
    u = y.useContext(_e) || ge.theme,
    s = oi(),
    f = (s == null ? void 0 : s.depth) || 0,
    c = o || (u == null || (n = u.skeleton) == null ? void 0 : n.colors),
    d = c[u.dark ? "dark" : "light"],
    m = d[(f + 1) % d.length];
  return E.createElement(
    wk,
    Js({ ref: t, as: r, background: m, widthProp: i, heightProp: l }, a)
  );
});
ii.displayName = "Skeleton";
ii.propTypes = xk;
var Ok = {},
  Ck = Ok,
  Pk = function () {
    var t = document.createElement("div");
    return (
      (t.id = "grommet-announcer"),
      (t.style.left = "-100%"),
      (t.style.right = "100%"),
      (t.style.position = "fixed"),
      (t.style["z-index"] = "-1"),
      document.body.insertBefore(t, document.body.firstChild),
      t
    );
  },
  fa = E.createContext(function (e, t, n) {
    t === void 0 && (t = "polite"), n === void 0 && (n = 500);
    var r =
      document.body.querySelector("#grommet-announcer[aria-live]") || Pk();
    r.setAttribute("aria-live", "off"),
      (r.innerHTML = e),
      r.setAttribute("aria-live", t),
      setTimeout(function () {
        r.innerHTML = "";
      }, n);
  });
fa.propTypes = Ck;
var bk = E.createContext({}),
  Ek = [
    "a11yTitle",
    "background",
    "border",
    "children",
    "cssGap",
    "direction",
    "elevation",
    "fill",
    "gap",
    "kind",
    "onBlur",
    "onClick",
    "onFocus",
    "overflow",
    "responsive",
    "tag",
    "as",
    "wrap",
    "width",
    "height",
    "tabIndex",
    "skeleton",
  ],
  zk = ["colors", "size"];
function An() {
  return (
    (An = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    An.apply(this, arguments)
  );
}
function Cp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var fe = y.forwardRef(function (e, t) {
  var n = e.a11yTitle,
    r = e.background,
    o = e.border,
    i = e.children,
    l = e.cssGap,
    a = e.direction,
    u = a === void 0 ? "column" : a,
    s = e.elevation,
    f = e.fill,
    c = e.gap,
    d = e.kind,
    m = e.onBlur,
    g = e.onClick,
    x = e.onFocus,
    O = e.overflow,
    h = e.responsive,
    p = h === void 0 ? !0 : h,
    v = e.tag,
    k = e.as,
    C = e.wrap,
    P = e.width,
    b = e.height,
    M = e.tabIndex,
    N = e.skeleton,
    j = Cp(e, Ek),
    W = y.useContext(_e) || ge.theme,
    ce = y.useContext(bk),
    D = ce.box,
    ee = oi(),
    H = r,
    ke = y.useContext(fa);
  y.useEffect(
    function () {
      var V;
      return (
        N != null && (V = N.message) != null && V.start
          ? ke(N.message.start)
          : typeof (N == null ? void 0 : N.message) == "string" &&
            ke(N.message),
        function () {
          var Ye;
          return (
            (N == null || (Ye = N.message) == null ? void 0 : Ye.end) &&
            ke(N.message.end)
          );
        }
      );
    },
    [ke, N]
  );
  var q = y.useMemo(
      function () {
        return g && !(M < 0);
      },
      [g, M]
    ),
    T = y.useState(),
    $ = T[0],
    _ = T[1],
    A = y.useMemo(
      function () {
        if (q)
          return {
            onClick: g,
            onFocus: function (yt) {
              _(!0), x && x(yt);
            },
            onBlur: function (yt) {
              _(!1), m && m(yt);
            },
          };
        var V = {};
        return (
          m && (V.onBlur = m), g && (V.onClick = g), x && (V.onFocus = x), V
        );
      },
      [q, g, x, m]
    ),
    U = y.useMemo(
      function () {
        if (M !== void 0) return M;
        if (q) return 0;
      },
      [q, M]
    );
  (o === "between" ||
    (o && o.side === "between") ||
    (Array.isArray(o) &&
      o.find(function (V) {
        return V.side === "between";
      }))) &&
    !c &&
    console.warn("Box must have a gap to use border between");
  var G = i;
  if (
    c &&
    c !== "none" &&
    (!((D != null && D.cssGap) || l) ||
      o === "between" ||
      (o == null ? void 0 : o.side) === "between" ||
      (Array.isArray(o) &&
        o.find(function (V) {
          return V.side === "between";
        })))
  ) {
    var Q = Array.isArray(o)
        ? o.find(function (V) {
            return V.side === "between";
          })
        : o,
      ie = !k && v ? v : k;
    G = [];
    var te;
    y.Children.forEach(i, function (V, Ye) {
      V &&
        (te === void 0
          ? (te = Ye)
          : G.push(
              E.createElement(Sf, {
                key: "gap-" + Ye,
                as: ie === "span" ? ie : "div",
                gap: c,
                directionProp: u,
                responsive: p,
                border: Q,
              })
            )),
        G.push(V);
    });
  }
  var Y = y.useMemo(
      function () {
        if (N || ((H || o) && ee)) {
          var V = ee ? ee.depth + 1 : 0;
          return An({}, ee, { depth: V }, typeof N == "object" ? N : {});
        }
      },
      [H, o, ee, N]
    ),
    F = {};
  if (Y) {
    var L = W.skeleton,
      X = L.colors;
    L.size;
    var de = Cp(L, zk),
      Pe = Y.colors
        ? Y.colors[W.dark ? "dark" : "light"]
        : X == null
        ? void 0
        : X[W.dark ? "dark" : "light"];
    (F = An({}, de)),
      (H = Pe[Y.depth % Pe.length]),
      N != null && N.animation && (F.animation = N.animation),
      (G = E.createElement(Qg.Provider, { value: Y }, G));
  }
  var le = y.useMemo(
      function () {
        var V;
        if (H || W.darkChanged) {
          var Ye = Cm(H, W),
            yt = Ye !== void 0 && Ye !== W.dark;
          yt || W.darkChanged
            ? ((V = An({}, W)),
              (V.dark = Ye === void 0 ? W.dark : Ye),
              (V.background = H))
            : H && ((V = An({}, W)), (V.background = H));
        }
        return V || W;
      },
      [H, W]
    ),
    Le = E.createElement(
      wf,
      An(
        {
          as: !k && v ? v : k,
          "aria-label": n,
          background: H,
          border: o,
          ref: t,
          directionProp: u,
          elevationProp: s,
          fillProp: f,
          focus: $,
          gap:
            ((D == null ? void 0 : D.cssGap) || l) &&
            c &&
            c !== "none" &&
            o !== "between" &&
            (o == null ? void 0 : o.side) !== "between" &&
            (!Array.isArray(o) ||
              !o.find(function (V) {
                return V.side === "between";
              })) &&
            c,
          kindProp: d,
          overflowProp: O,
          wrapProp: C,
          widthProp: P,
          heightProp: b,
          responsive: p,
          tabIndex: U,
        },
        A,
        j,
        F
      ),
      E.createElement(_e.Provider, { value: le }, G)
    );
  return g && (Le = E.createElement(ca, { onEnter: g }, Le)), Le;
});
fe.displayName = "Box";
fe.propTypes = gk;
var Yg = y.createContext({}),
  Tk = ["activeIndex", "animate", "children", "level", "multiple", "onActive"];
function ec() {
  return (
    (ec = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ec.apply(this, arguments)
  );
}
function _k(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Ik = function (t) {
    return typeof t == "number" ? [t] : t;
  },
  kf = y.forwardRef(function (e, t) {
    var n = e.activeIndex,
      r = e.animate,
      o = r === void 0 ? !0 : r,
      i = e.children,
      l = e.level,
      a = e.multiple,
      u = e.onActive,
      s = _k(e, Tk),
      f = y.useState([]),
      c = f[0],
      d = f[1],
      m = y.useState(),
      g = m[0],
      x = m[1],
      O = Ik(n) || [];
    (typeof n < "u" || n !== g) && O.join() !== c.join() && (d(O), x(n));
    var h = y.useCallback(
      function (p) {
        var v = function (C) {
          var P = [].concat(c || []),
            b = P.indexOf(C);
          b > -1 ? P.splice(b, 1) : a ? P.push(C) : (P = [C]), d(P), u && u(P);
        };
        return {
          active: c.indexOf(p) > -1,
          animate: o,
          level: l,
          onPanelChange: function () {
            return v(p);
          },
        };
      },
      [c, o, l, a, u]
    );
    return E.createElement(
      fe,
      ec({ ref: t }, s),
      y.Children.toArray(i)
        .filter(function (p) {
          return p;
        })
        .map(function (p, v) {
          return E.createElement(Yg.Provider, { key: v, value: h(v) }, p);
        })
    );
  });
kf.propTypes = K1;
var $k = {},
  Mk = $k;
const Nk = {
    busy: "button is in a busy state",
    success: "button action succeeded",
  },
  Rk = {
    previousMove: "Moved to {date}",
    previous: "Go to {date}",
    nextMove: "Moved to {date}",
    next: "Go to {date}",
  },
  jk = {
    previous: "Go to slide {slide}",
    next: "Go to slide {slide}",
    jump: "Jump to slide {slide}",
  },
  Ak = {
    openCalendar: "Press space to open calendar",
    enterCalendar:
      "Calendar is open, use arrow keys and enter to select a date.",
    exitCalendar: "Exited calendar dialog",
  },
  Fk = {
    clear: "Clear filters",
    heading: "Filters",
    open: "Open filters",
    openSet: {
      singular: "Open filters, {number} filter applied",
      plural: "Open filters, {number} filters applied",
    },
  },
  Dk = { reset: "Undo changes", submit: "Apply filters" },
  Lk = { label: "Search", open: "Open search" },
  Bk = {
    ascending: "Ascending",
    by: "Sort by",
    descending: "Descending",
    direction: "Sort direction",
    open: "Open sort",
  },
  Wk = {
    filtered: "{filteredTotal} results of {total} items",
    filteredSingle: "{filteredTotal} result of {total} items",
    total: "{total} items",
  },
  Uk = {
    open: "Open column selector",
    order: "Order columns",
    select: "Select columns",
    tip: "Manage columns",
  },
  Vk = { clear: "Clear group", label: "Group by" },
  Hk = { label: "View" },
  Kk = {
    browse: "browse",
    dropPrompt: "Drop file here or",
    dropPromptMultiple: "Drop files here or",
    files: "files",
    maxSizeSingle:
      "The file is too large. Select a file no larger than {maxSize}.",
    maxSizeMultiple: {
      singular:
        "One file is too large. Select files which are no larger than {maxSize}.",
      plural:
        "{numOfFiles} files are too large. Select files which are no larger than {maxSize}.",
    },
    remove: "remove",
    removeAll: "remove all",
    maxFile: "Attach a maximum of {max} files only.",
  },
  Gk = { invalid: "invalid", required: "required" },
  qk = { openMenu: "Open Menu", closeMenu: "Close Menu" },
  Qk = { lower: "Lower Bounds", upper: "Upper Bounds" },
  Yk = { multiple: "multiple", selected: "; Selected: {currentSelectedValue}" },
  Xk = { skipTo: "Skip To:" },
  Zk = { tabContents: "Tab Contents" },
  Jk = {
    enterSelect: "(Press Enter to Select)",
    suggestionsCount: "suggestions available",
    suggestionsExist: "This input has suggestions use arrow keys to navigate",
    suggestionIsOpen:
      "Suggestions drop is open, continue to use arrow keys to navigate",
  },
  e2 = {
    captions: "closed captions",
    closeMenu: "close menu",
    audioDescriptions: "video audio description",
    fullScreen: "full screen",
    progressMeter: "video progress",
    scrubber: "scrubber",
    openMenu: "open menu",
    pauseButton: "pause",
    playButton: "play",
    volumeDown: "volume down",
    volumeUp: "volume up",
    description: "video audio description",
  },
  Pp = {
    button: Nk,
    calendar: Rk,
    carousel: jk,
    dateInput: Ak,
    dataFilters: Fk,
    dataForm: Dk,
    dataSearch: Lk,
    dataSort: Bk,
    dataSummary: Wk,
    dataTableColumns: Uk,
    dataTableGroupBy: Vk,
    dataView: Hk,
    fileInput: Kk,
    form: Gk,
    menu: qk,
    rangeSelector: Qk,
    select: Yk,
    skipLinks: Xk,
    tabs: Zk,
    textInput: Jk,
    video: e2,
  };
var t2 = function (t, n) {
    var r,
      o = ((r = t.id) == null ? void 0 : r.split(".")) || [],
      i = o[(o == null ? void 0 : o.length) - 1],
      l = n;
    o.forEach(function (c) {
      typeof l == "object" && (l = l[c]);
    });
    var a = (t.messages ? t.messages[i] : void 0) || l || t.defaultMessage,
      u = t.values,
      s = a,
      f = a == null ? void 0 : a.match(/\{(.+?)\}/g);
    return (
      f == null ||
        f.forEach(function (c) {
          var d = c.substr(1, c.length - 2),
            m = u[d];
          s = s.replace(c, m);
        }),
      u ? s : a
    );
  },
  n2 = {
    messages: Pp,
    format: function (t) {
      return t2(t, Pp);
    },
  },
  Xg = E.createContext(n2),
  Zg = E.createContext(typeof document == "object" ? document.body : void 0),
  bp = E.createContext([]),
  r2 = ["hidden", "restrictScroll", "children", "trapFocus"];
function tc() {
  return (
    (tc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tc.apply(this, arguments)
  );
}
function o2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var i2 = function (t) {
  var n = t.hidden,
    r = n === void 0 ? !1 : n,
    o = t.restrictScroll,
    i = o === void 0 ? !1 : o,
    l = t.children,
    a = t.trapFocus,
    u = o2(t, r2),
    s = y.useState(""),
    f = s[0],
    c = s[1],
    d = y.useRef(null),
    m = y.useContext(bp),
    g = y.useState(m),
    x = g[0],
    O = g[1];
  return (
    y.useEffect(
      function () {
        d.current && O([].concat(m, [d.current]));
      },
      [m]
    ),
    y.useEffect(
      function () {
        return (
          f !== "hidden" &&
            !r &&
            i &&
            a &&
            (c(document.body.style.overflow),
            (document.body.style.overflow = "hidden")),
          function () {
            f !== "hidden" &&
              !r &&
              i &&
              a &&
              (document.body.style.overflow = f);
          }
        );
      },
      [f, r, a, i]
    ),
    y.useEffect(
      function () {
        var h = setTimeout(function () {
          !r && a && m && m[0] && m.forEach(mw);
        }, 0);
        return function () {
          m && m[0] && hw(m[m.length - 1]), clearTimeout(h);
        };
      },
      [r, m, a]
    ),
    E.createElement(
      bp.Provider,
      { value: x },
      E.createElement("div", tc({ ref: d, "aria-hidden": r }, u), l)
    )
  );
};
function l2(e) {
  var t = "top";
  e.bottom && (t = "bottom");
  var n = "left";
  return e.right && (n = "right"), t + " " + n;
}
var a2 = ri([
    "0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}",
  ]),
  u2 = function (t, n, r, o, i) {
    var l = t.global.edgeSize[r] || r,
      a = {},
      u = typeof l == "string" && l.split(" ").length > 1;
    if (t.global.drop.intelligentMargin === !0 && !u && typeof l == "string")
      n.top === "bottom" ? (a.top = l) : n.bottom === "top" && (a.bottom = l),
        n.right === "left"
          ? (a.left = "-" + l)
          : n.left === "right" && (a.left = l),
        Object.keys(a) || (a = "none");
    else
      return Tn(
        "margin",
        i || t.global.drop.margin,
        o,
        t.global.edgeSize.responsiveBreakpoint,
        t
      );
    return Tn("margin", a, o, t.global.edgeSize.responsiveBreakpoint, t);
  },
  Of = ne.div.withConfig({
    displayName: "StyledDrop",
    componentId: "sc-16s5rx8-0",
  })(
    [
      "",
      " ",
      " position:fixed;z-index:",
      ";outline:none;",
      " ",
      " opacity:0;transform-origin:",
      ";animation:",
      " 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}",
      "",
    ],
    yw,
    function (e) {
      return (
        !e.plain &&
        ((e.round && hf(e.round, !0, e.theme)) ||
          "border-radius: " + e.theme.global.drop.border.radius + ";")
      );
    },
    function (e) {
      return e.theme.global.drop.zIndex;
    },
    function (e) {
      return (
        !e.plain && Ut(e.background || e.theme.global.drop.background, e.theme)
      );
    },
    function (e) {
      return (
        !e.plain &&
        (e.margin || e.theme.global.drop.margin) &&
        e.theme.global &&
        u2(
          e.theme,
          e.alignProp,
          e.theme.global.drop.margin,
          e.responsive,
          e.margin
        )
      );
    },
    function (e) {
      return l2(e.alignProp);
    },
    a2,
    function (e) {
      return e.theme.global.drop && e.theme.global.drop.extend;
    }
  );
Of.defaultProps = {};
Object.setPrototypeOf(Of.defaultProps, ge);
var s2 = [
  "a11yTitle",
  "aria-label",
  "align",
  "background",
  "onAlign",
  "children",
  "dropTarget",
  "elevation",
  "onClickOutside",
  "onEsc",
  "onKeyDown",
  "overflow",
  "plain",
  "responsive",
  "restrictFocus",
  "stretch",
  "trapFocus",
];
function Tl() {
  return (
    (Tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tl.apply(this, arguments)
  );
}
function c2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var f2 = function (t) {
    var n = t.keyCode ? t.keyCode : t.which;
    n === 27 && t.stopPropagation();
  },
  d2 = { top: "top", left: "left" },
  p2 = y.forwardRef(function (e, t) {
    var n = e.a11yTitle,
      r = e["aria-label"],
      o = e.align,
      i = o === void 0 ? d2 : o,
      l = e.background,
      a = e.onAlign,
      u = e.children,
      s = e.dropTarget,
      f = e.elevation,
      c = e.onClickOutside,
      d = e.onEsc,
      m = e.onKeyDown,
      g = e.overflow,
      x = g === void 0 ? "auto" : g,
      O = e.plain,
      h = e.responsive,
      p = h === void 0 ? !0 : h,
      v = e.restrictFocus,
      k = e.stretch,
      C = k === void 0 ? "width" : k,
      P = e.trapFocus,
      b = c2(e, s2),
      M = y.useContext(Zg),
      N = y.useContext(_e) || ge.theme,
      j = y.useContext(xp),
      W = y.useMemo(
        function () {
          return j.length;
        },
        [j]
      ),
      ce = y.useMemo(
        function () {
          return [].concat(j, [W]);
        },
        [j, W]
      ),
      D = qr(t);
    y.useEffect(
      function () {
        var q = function ($) {
          for (
            var _ = null, A = ($.composed && $.composedPath()[0]) || $.target;
            _ === null && A && A !== document && !(A instanceof ShadowRoot);

          ) {
            var U = A.getAttribute("data-g-portal-id");
            U !== null && (_ = parseInt(U, 10)), (A = A.parentNode);
          }
          (_ === null || j.indexOf(_) !== -1) && c($);
        };
        return (
          c && document.addEventListener("mousedown", q),
          function () {
            c && document.removeEventListener("mousedown", q);
          }
        );
      },
      [c, M, j]
    ),
      y.useEffect(
        function () {
          var q = function () {
              var Q = D.current.style,
                ie = Q.top !== "" ? "top" : "bottom";
              a(ie);
            },
            T = function (Q) {
              var ie = window.innerWidth,
                te = window.innerHeight,
                Y = (s == null ? void 0 : s.current) || s,
                F = D.current;
              if (F && Y) {
                (F.style.left = ""),
                  (F.style.top = ""),
                  (F.style.bottom = ""),
                  (F.style.width = ""),
                  Q || (F.style.maxHeight = "");
                var L = Y.getBoundingClientRect(),
                  X = F.getBoundingClientRect(),
                  de;
                C
                  ? (de = Math.min(
                      C === "align"
                        ? Math.min(L.width, X.width)
                        : Math.max(L.width, X.width),
                      ie
                    ))
                  : (de = Math.min(X.width, ie));
                var Pe;
                i.left
                  ? i.left === "left"
                    ? (Pe = L.left)
                    : i.left === "right" && (Pe = L.left + L.width)
                  : i.right
                  ? i.right === "left"
                    ? (Pe = L.left - de)
                    : i.right === "right" && (Pe = L.left + L.width - de)
                  : (Pe = L.left + L.width / 2 - de / 2),
                  Pe + de > ie ? (Pe -= Pe + de - ie) : Pe < 0 && (Pe = 0);
                var le,
                  Le,
                  V = X.height;
                p &&
                ((i.top === "top" && L.top < 0) ||
                  (i.bottom === "top" &&
                    L.top - X.height <= 0 &&
                    L.bottom + X.height < te))
                  ? ((le = L.bottom), (V = le))
                  : p &&
                    ((i.bottom === "bottom" && L.bottom > te) ||
                      (i.top === "bottom" &&
                        L.bottom + X.height >= te &&
                        L.top - X.height > 0))
                  ? ((Le = L.top), (V = Le))
                  : i.top === "top"
                  ? ((le = L.top), (V = te - le))
                  : i.top === "bottom"
                  ? ((le = L.bottom), (V = te - le))
                  : i.bottom === "top"
                  ? ((Le = L.top), (V = Le))
                  : i.bottom === "bottom"
                  ? ((Le = L.bottom), (V = Le))
                  : (le = L.top + L.height / 2 - X.height / 2),
                  (F.style.left = Pe + "px"),
                  C && (F.style.width = de + 0.1 + "px"),
                  le !== "" && (F.style.top = le + "px"),
                  Le !== "" && (F.style.bottom = te - Le + "px"),
                  Q ||
                    (N.drop &&
                      N.drop.maxHeight &&
                      (V = Math.min(V, Ce(N.drop.maxHeight))),
                    (F.style.maxHeight = V + "px"));
              }
              a && q();
            },
            $,
            _ = function () {
              ($ = zm(s)),
                $.forEach(function (Q) {
                  return Q.addEventListener("scroll", T);
                });
            },
            A = function () {
              $.forEach(function (Q) {
                return Q.removeEventListener("scroll", T);
              }),
                ($ = []);
            },
            U = function () {
              A(), _(), T(!1);
            };
          return (
            _(),
            window.addEventListener("resize", U),
            T(!1),
            function () {
              A(), window.removeEventListener("resize", U);
            }
          );
        },
        [i, M, a, s, j, W, p, v, C, N.drop, D]
      ),
      y.useEffect(
        function () {
          v && D.current.focus();
        },
        [D, v]
      );
    var ee = E.createElement(
        Of,
        Tl(
          {
            "aria-label": n || r,
            ref: D,
            as: fe,
            background: l,
            plain: O,
            elevation: O
              ? void 0
              : f ||
                N.global.drop.elevation ||
                N.global.drop.shadowSize ||
                "small",
            tabIndex: "-1",
            alignProp: i,
            overflow: x,
            "data-g-portal-id": W,
          },
          b
        ),
        u
      ),
      H = y.useMemo(
        function () {
          var q;
          return (
            (l || N.global.drop.background) &&
              (q = Cm(l || N.global.drop.background, N)),
            Tl({}, N, { dark: q })
          );
        },
        [l, N]
      ),
      ke = H.dark;
    return (
      ke !== void 0 &&
        ke !== N.dark &&
        (ee = E.createElement(_e.Provider, { value: H }, ee)),
      E.createElement(
        xp.Provider,
        { value: ce },
        E.createElement(
          i2,
          { onKeyDown: d && f2, trapFocus: P },
          E.createElement(
            ca,
            {
              capture: !0,
              onEsc: d
                ? function (q) {
                    q.stopPropagation(), d(q);
                  }
                : void 0,
              onKeyDown: m,
              target: "document",
            },
            ee
          )
        )
      )
    );
  });
w.oneOfType([
  w.oneOf(Ba),
  w.shape({ horizontal: w.oneOf(Ba), vertical: w.oneOf(Ba) }),
  w.string,
]);
var h2 = {},
  v2 = h2,
  m2 = ["inline", "restrictFocus", "target", "trapFocus"];
function nc() {
  return (
    (nc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nc.apply(this, arguments)
  );
}
function g2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var da = y.forwardRef(function (e, t) {
  var n = e.inline,
    r = e.restrictFocus,
    o = e.target,
    i = e.trapFocus,
    l = i === void 0 ? !0 : i,
    a = g2(e, m2),
    u = y.useContext(_e) || ge.theme,
    s = y.useState(),
    f = s[0],
    c = s[1];
  y.useEffect(function () {
    return c(document.activeElement);
  }, []);
  var d = y.useState(),
    m = d[0],
    g = d[1],
    x = y.useContext(Zg),
    O = y.useRef(null);
  y.useEffect(
    function () {
      (O != null && O.current) ||
        ((O.current = x.childNodes.length), g(n ? void 0 : pw(x)));
    },
    [x, n]
  ),
    y.useEffect(
      function () {
        return function () {
          r &&
            f &&
            (f.focus
              ? pp(f)
              : f.parentNode && f.parentNode.focus && pp(f.parentNode)),
            m && x.removeChild(m);
        };
      },
      [x, m, f, r]
    );
  var h = E.createElement(
    p2,
    nc(
      {
        ref: t,
        dir: u && u.dir,
        dropTarget: o,
        restrictFocus: r,
        trapFocus: l,
      },
      a
    )
  );
  return n ? h : m ? Gv.createPortal(h, m) : null;
});
da.displayName = "Drop";
da.propTypes = v2;
var y2 = {},
  x2 = y2;
function rc() {
  return (
    (rc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    rc.apply(this, arguments)
  );
}
var Ur = y.forwardRef(function (e, t) {
  var n = e.children,
    r = e.content,
    o = e.dropProps,
    i = e.plain,
    l = y.useContext(_e),
    a = y.useState(!1),
    u = a[0],
    s = a[1],
    f = Fw(),
    c = qr(t),
    d =
      (y.Children.count(n) <= 1 &&
        !E.isValidElement(n) &&
        E.createElement("span", null, n)) ||
      y.Children.only(n),
    m = y.cloneElement(d, {
      onMouseEnter: function (x) {
        var O;
        s(!0),
          (O = d.props) != null && O.onMouseEnter && d.props.onMouseEnter(x);
      },
      onMouseLeave: function (x) {
        var O;
        s(!1),
          (O = d.props) != null && O.onMouseLeave && d.props.onMouseLeave(x);
      },
      onFocus: function (x) {
        var O;
        f && s(!0), (O = d.props) != null && O.onFocus && d.props.onFocus(x);
      },
      onBlur: function (x) {
        var O;
        f && s(!1), (O = d.props) != null && O.onBlur && d.props.onBlur(x);
      },
      key: "tip-child",
      ref: function (x) {
        typeof c == "function" ? c(x) : c && (c.current = x);
        var O = d.ref;
        typeof O == "function" ? O(x) : O && (O.current = x);
      },
    });
  return [
    m,
    u &&
      E.createElement(
        da,
        rc(
          { target: c.current, trapFocus: !1, key: "tip-drop" },
          l.tip.drop,
          o
        ),
        i ? r : E.createElement(fe, l.tip.content, r)
      ),
  ];
});
Ur.displayName = "Tip";
Ur.propTypes = x2;
var Zn = typeof window < "u" ? y.useLayoutEffect : y.useEffect,
  w2 = z(
    ["", " ", " flex-grow:1;display:flex;"],
    function (e) {
      return e.fillContainer === !0 || e.fillContainer === "horizontal"
        ? `
        width: 100%;
        max-width: none;
      `
        : "";
    },
    function (e) {
      return e.fillContainer === !0 || e.fillContainer === "vertical"
        ? "height: 100%;"
        : "";
    }
  ),
  Cf = ne.div.withConfig({
    displayName: "StyledStack",
    componentId: "sc-ajspsk-0",
  })(
    ["position:relative;", " ", " ", ""],
    Mn,
    function (e) {
      return e.fillContainer && w2;
    },
    function (e) {
      return e.theme.stack && e.theme.stack.extend;
    }
  );
Cf.defaultProps = {};
Object.setPrototypeOf(Cf.defaultProps, ge);
var S2 = {
    fill: `
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `,
    center: `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
    left: `
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  `,
    right: `
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,
    top: `
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
    bottom: `
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
    "top-left": `
    top: 0;
    left: 0;
  `,
    "bottom-left": `
    bottom: 0;
    left: 0;
  `,
    "top-right": `
    top: 0;
    right: 0;
  `,
    "bottom-right": `
    bottom: 0;
    right: 0;
  `,
  },
  Pf = ne.div.withConfig({
    displayName: "StyledStack__StyledStackLayer",
    componentId: "sc-ajspsk-1",
  })(
    ["position:", ";", " ", " ", " ", ""],
    function (e) {
      return e.guiding ? "relative" : "absolute";
    },
    function (e) {
      return e.guiding && "display: block;";
    },
    function (e) {
      return !e.guiding && S2[e.anchor || "fill"] + ";";
    },
    function (e) {
      return (
        e.fillContainer &&
        `
    width: 100%;
    height: 100%;
  `
      );
    },
    function (e) {
      return !e.interactive && "pointer-events: none;";
    }
  );
Pf.defaultProps = {};
Object.setPrototypeOf(Pf.defaultProps, ge);
var k2 = {},
  O2 = k2,
  C2 = ["anchor", "children", "fill", "guidingChild", "interactiveChild"];
function P2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function _l() {
  return (
    (_l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _l.apply(this, arguments)
  );
}
var b2 = function (t) {
    var n = t.anchor,
      r = t.fill,
      o = t.guidingIndex,
      i = t.interactiveChild,
      l = t.interactiveIndex;
    return function (a, u) {
      var s = i === void 0 || l === u,
        f = u === o,
        c = f ? { guiding: !0, fillContainer: r } : { anchor: n };
      return E.createElement(Pf, _l({ key: u, interactive: s }, c), a);
    };
  },
  bf = y.forwardRef(function (e, t) {
    var n = e.anchor,
      r = e.children,
      o = e.fill,
      i = e.guidingChild,
      l = e.interactiveChild,
      a = P2(e, C2),
      u = y.Children.toArray(r).filter(function (m) {
        return m;
      }),
      s = function (g) {
        var x = g;
        return (
          x === "first" || !x ? (x = 0) : x === "last" && (x = u.length - 1), x
        );
      },
      f = s(i),
      c = l && s(l),
      d = u.map(
        b2({
          anchor: n,
          fill: o,
          guidingIndex: f,
          interactiveChild: l,
          interactiveIndex: c,
        })
      );
    return E.createElement(Cf, _l({ ref: t, fillContainer: o }, a), d);
  });
bf.displayName = "Stack";
bf.propTypes = O2;
var E2 = function (t) {
    var n = t.size || "medium",
      r = t.theme.text[n];
    return r
      ? z(["font-size:", ";line-height:", ";"], r.size, r.height)
      : z(["font-size:", ";line-height:normal;"], n);
  },
  z2 = `
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,
  T2 = z(["color:", ";"], function (e) {
    return Z(e.colorProp, e.theme);
  }),
  _2 = z(["font-weight:", ";"], function (e) {
    return e.weight;
  }),
  I2 = z(["word-break:", ";"], function (e) {
    return e.wordBreak;
  }),
  $2 = z(["font-family:", ";"], function (e) {
    return e.theme.text.font.family;
  }),
  Ef = ne("span")
    .withConfig({
      shouldForwardProp: function (t, n) {
        return n(t) && t !== "size";
      },
    })
    .withConfig({ displayName: "StyledText", componentId: "sc-1sadyjn-0" })(
    ["", " ", " ", " ", " ", " ", " ", " ", " ", ""],
    Mn,
    function (e) {
      return E2(e);
    },
    function (e) {
      return e.textAlign && vf;
    },
    function (e) {
      return e.truncate && z2;
    },
    function (e) {
      return e.colorProp && T2;
    },
    function (e) {
      return e.weight && _2;
    },
    function (e) {
      return e.wordBreak && I2;
    },
    function (e) {
      return e.theme.text.font && e.theme.text.font.family && $2;
    },
    function (e) {
      return e.theme.text && e.theme.text.extend;
    }
  );
Ef.defaultProps = {};
Object.setPrototypeOf(Ef.defaultProps, ge);
var M2 = {},
  N2 = M2,
  R2 = ["as", "size"];
function oc() {
  return (
    (oc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oc.apply(this, arguments)
  );
}
function j2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Jg = y.forwardRef(function (e, t) {
  var n = e.as,
    r = e.size,
    o = j2(e, R2),
    i = y.useContext(_e) || ge.theme,
    l = r || "medium",
    a = i.text[l],
    u = a ? a.size : r;
  return E.createElement(
    ii,
    oc({ ref: t, as: n, height: u }, i.text.skeleton, o)
  );
});
Jg.displayName = "TextSkeleton";
var A2 = E.createContext({}),
  F2 = [
    "children",
    "color",
    "tag",
    "as",
    "tip",
    "a11yTitle",
    "truncate",
    "size",
    "skeleton",
  ];
function _o() {
  return (
    (_o = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _o.apply(this, arguments)
  );
}
function D2(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var li = y.forwardRef(function (e, t) {
  var n = e.children,
    r = e.color,
    o = e.tag,
    i = e.as,
    l = e.tip,
    a = e.a11yTitle,
    u =
      a === void 0
        ? (typeof l == "string" && l) ||
          (l == null ? void 0 : l.content) ||
          void 0
        : a,
    s = e.truncate,
    f = e.size,
    c = e.skeleton,
    d = D2(e, F2),
    m = qr(t),
    g = y.useState(!1),
    x = g[0],
    O = g[1],
    h = y.useMemo(
      function () {
        return { size: f };
      },
      [f]
    ),
    p = oi();
  if (
    (Zn(
      function () {
        var k = function () {
          O(!1),
            s === "tip" &&
              m.current &&
              m.current.scrollWidth > m.current.offsetWidth &&
              O(!0);
        };
        return (
          window.addEventListener("resize", k),
          k(),
          function () {
            return window.removeEventListener("resize", k);
          }
        );
      },
      [m, s]
    ),
    p)
  )
    return E.createElement(Jg, _o({ ref: t, as: i, size: f }, c, d));
  var v = E.createElement(
    Ef,
    _o(
      {
        as: !i && o ? o : i,
        colorProp: r,
        "aria-label": u,
        truncate: s,
        size: f,
      },
      d,
      { ref: m }
    ),
    n !== void 0 ? E.createElement(A2.Provider, { value: h }, n) : void 0
  );
  if (l || x) {
    if (x) return E.createElement(Ur, _o({ content: n }, l), v);
    if (s !== "tip") return E.createElement(Ur, l, v);
  }
  return v;
});
li.displayName = "Text";
li.defaultProps = { level: 1 };
li.propTypes = N2;
var L2 = ne(fe).withConfig({
    displayName: "Badge__StyledBadgeContainer",
    componentId: "sc-1es4ws1-0",
  })(["", ""], function (e) {
    return e.theme.button.badge.container.extend;
  }),
  Ep = function (t) {
    var n = t.children,
      r = t.content,
      o = y.useContext(_e),
      i = y.useRef(),
      l = y.useRef(),
      a = y.useRef(),
      u =
        typeof r == "boolean" || (r && r.value && typeof r.value == "boolean")
          ? Ce(o.button.badge.size.medium) / 2 + "px"
          : o.button.badge.size.medium;
    Zn(
      function () {
        var d = function () {
          if (i != null && i.current)
            if (
              ((i.current.style.minHeight = ""),
              (i.current.style.minWidth = ""),
              l != null && l.current)
            )
              if (typeof r == "number" || (typeof r == "object" && r.value)) {
                (i.current.style.minHeight = u), (i.current.style.minWidth = u);
                var g = l.current.getBoundingClientRect(),
                  x = g.height,
                  O = g.width;
                if (x) {
                  var h = u,
                    p = u,
                    v = (Ce(h) - x) * 2.5;
                  (i.current.style.minHeight = h),
                    (i.current.style.minWidth =
                      Math.max(Ce(p), Math.ceil(O + v)) + "px");
                }
              } else
                (i.current.style.minHeight =
                  l.current.getBoundingClientRect().width),
                  (i.current.style.minWidth =
                    l.current.getBoundingClientRect().height);
            else
              (i.current.style.minHeight = u), (i.current.style.minWidth = u);
        };
        return (
          window.addEventListener("resize", d),
          d(),
          function () {
            window.removeEventListener("resize", d);
          }
        );
      },
      [r, u]
    ),
      Zn(
        function () {
          if (a != null && a.current) {
            var d =
              typeof r == "boolean" || (r && r.value === !0) ? "25%" : "50%";
            (a.current.children[1].style.top = 0),
              (a.current.children[1].style.right = 0),
              (a.current.children[1].style.transform =
                "translate(" + d + ", -" + d + ")"),
              (a.current.children[1].style.transformOrigin = "100% 0%");
          }
        },
        [r]
      );
    var s;
    typeof r == "number" ? (s = r) : typeof r == "object" && (s = r.value);
    var f;
    if (
      typeof s == "number" ||
      typeof s == "boolean" ||
      typeof r == "boolean"
    ) {
      if (typeof s == "number") {
        var c = r.max || 9;
        f = E.createElement(
          li,
          {
            color: "text-strong",
            size: o.button.badge.text.size.medium,
            weight: "normal",
            ref: l,
          },
          s > c ? c + "+" : s
        );
      }
      f = E.createElement(
        L2,
        {
          ref: i,
          align: "center",
          background: r.background || o.button.badge.container.background,
          flex: !1,
          justify: "center",
          round: !0,
          pad:
            typeof s == "boolean" || typeof r == "boolean"
              ? void 0
              : o.button.badge.container.pad,
        },
        f
      );
    } else f = E.createElement(fe, { ref: l }, r);
    return E.createElement(bf, { ref: a, anchor: "top-right" }, n, f);
  },
  ey = function (t) {
    var n = t.hasIcon && !t.hasLabel,
      r = t.sizeProp;
    return !n && r && t.theme.button.size && t.theme.button.size[r]
      ? t.theme.button.size[r].border.radius
      : t.theme.button.border.radius;
  },
  B2 = function (t) {
    var n = t.sizeProp || "medium",
      r = t.theme.text[n];
    return z(["font-size:", ";line-height:", ";"], r.size, r.height);
  },
  W2 = function (t) {
    var n = t.sizeProp;
    return n && t.theme.button.size && t.theme.button.size[n]
      ? z(
          ["", " ", ""],
          t.theme.button.size[n].pad.vertical,
          t.theme.button.size[n].pad.horizontal
        )
      : z(
          ["", " ", ""],
          t.theme.button.padding.vertical,
          t.theme.button.padding.horizontal
        );
  },
  U2 = function (t) {
    return z(
      [
        "border:",
        " solid ",
        ";border-radius:",
        ";color:",
        ";padding:",
        ";",
        "",
      ],
      t.theme.button.border.width,
      Z(t.colorValue || t.theme.button.border.color || "control", t.theme),
      ey(t),
      Z(t.theme.button.color || "text", t.theme),
      W2(t),
      B2(t)
    );
  },
  V2 = function (t) {
    return z(
      ["", " border-radius:", ";", ""],
      Ut(
        Z(
          t.colorValue ||
            (t.theme.button.primary && t.theme.button.primary.color) ||
            "control",
          t.theme
        ),
        t.theme,
        t.theme.button.color
      ),
      ey(t),
      t.theme.button.primary && t.theme.button.primary.extend
    );
  };
function H2(e) {
  return e.colorValue
    ? Z(e.colorValue, e.theme)
    : e.active &&
      e.primary &&
      e.theme.button.primary &&
      e.theme.button.primary.active &&
      e.theme.button.primary.active.border &&
      e.theme.button.primary.active.border.color
    ? Z(e.theme.button.primary.active.border.color, e.theme)
    : Z(e.theme.button.border.color || "control", e.theme);
}
var K2 = z(
    ["&:hover{", " ", ";}"],
    function (e) {
      return e.hoverIndicator && bs(e.hoverIndicator, e.theme);
    },
    function (e) {
      return !e.plain && z(["box-shadow:0px 0px 0px 2px ", ";"], H2(e));
    }
  ),
  G2 = function (t) {
    if (t === "horizontal") return "width: 100%;";
    if (t === "vertical") return "height: 100%;";
    if (t)
      return `
      width: 100%;
      height: 100%;
      max-width: none;
      flex: 1 0 auto;
    `;
  },
  q2 = function (t) {
    return z(
      ["color:", ";outline:none;border:none;padding:0;text-align:inherit;"],
      Z(t.colorValue || "inherit", t.theme)
    );
  },
  Q2 = function (t) {
    return z(
      ["", " ", " ", ""],
      bm,
      t.primary &&
        t.theme.button.primary &&
        t.theme.button.primary.active &&
        t.theme.button.primary.active.border &&
        t.theme.button.primary.active.border.color &&
        "border: " +
          t.theme.button.border.width +
          ` solid
    ` +
          Z(t.theme.button.primary.active.border.color, t.theme) +
          `;
    `,
      t.primary &&
        t.theme.button.primary &&
        t.theme.button.primary.active &&
        t.theme.button.primary.active.extend
    );
  },
  Y2 = function (t) {
    return z(
      ["", " ", " ", " ", ""],
      pf(t.theme.button.disabled.opacity),
      !t.plain &&
        t.theme.button.disabled.border &&
        t.theme.button.disabled.border.color &&
        "border: " +
          t.theme.button.border.width +
          ` solid
    ` +
          Z(t.theme.button.disabled.border.color, t.theme) +
          ";",
      t.theme.button.disabled.color &&
        (t.primary
          ? Ut(
              Z(t.theme.button.disabled.color, t.theme),
              t.theme,
              t.theme.button.color
            )
          : "color: " + Z(t.theme.button.disabled.color, t.theme) + ";"),
      t.theme.button.disabled && t.theme.button.disabled.extend
    );
  },
  zf = ne.button.withConfig({
    displayName: "StyledButton",
    componentId: "sc-323bzc-0",
  })(
    [
      "display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " &:focus{",
      "}&:focus:not(:focus-visible){",
      "}",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      "",
    ],
    Mn,
    function (e) {
      return e.plain && q2(e);
    },
    function (e) {
      return !e.plain && U2(e);
    },
    function (e) {
      return e.primary && V2(e);
    },
    function (e) {
      return (
        !e.disabled && !e.selected && !e.focus && !e.busy && !e.success && K2
      );
    },
    function (e) {
      return !e.disabled && e.active && Q2(e);
    },
    function (e) {
      return e.disabled && e.theme.button && e.theme.button.disabled && Y2(e);
    },
    function (e) {
      return (!e.plain || e.focusIndicator) && la();
    },
    Mm(),
    function (e) {
      return (
        !e.plain &&
        e.theme.button.transition &&
        `
    transition-property: ` +
          e.theme.button.transition.properties.join(",") +
          `;
    transition-duration: ` +
          e.theme.button.transition.duration +
          `s;
    transition-timing-function: ` +
          e.theme.button.transition.timing +
          `;
  `
      );
    },
    function (e) {
      return e.fillContainer && G2(e.fillContainer);
    },
    function (e) {
      return (
        e.hasIcon &&
        !e.hasLabel &&
        `
    line-height: 0;
  `
      );
    },
    function (e) {
      return (
        e.pad === !0 &&
        e.hasIcon &&
        !e.hasLabel &&
        `
    padding: ` +
          e.theme.global.edgeSize.small +
          `;
  `
      );
    },
    function (e) {
      return !e.plain && e.pad && Tn("padding", e.pad, !1, void 0, e.theme);
    },
    function (e) {
      return e.theme.button && e.theme.button.extend;
    },
    function (e) {
      return (
        (e.busy || e.success) &&
        `
    cursor: default;
  `
      );
    }
  );
zf.defaultProps = {};
Object.setPrototypeOf(zf.defaultProps, ge);
var X2 = function (t) {
    var n = t.sizeProp,
      r = typeof t.kind == "object" ? t.kind : t.theme.button;
    return n && r.size && r.size[n]
      ? z(["border-radius:", ";"], r.size[n].border.radius)
      : r.border && r.border.radius
      ? z(["border-radius:", ";"], r.border.radius)
      : "";
  },
  Z2 = function (t) {
    var n = t.sizeProp || "medium",
      r = t.theme.text[n];
    return z(
      ["font-size:", ";line-height:", ";"],
      r.size,
      t.hasIcon && !t.hasLabel ? 0 : r.height
    );
  },
  ty = function (t, n, r, o, i) {
    var l, a, u, s, f, c;
    if (
      (t === void 0 && (t = "medium"),
      t &&
        i &&
        r != null &&
        (l = r.size) != null &&
        (a = l[t]) != null &&
        (u = a.iconOnly) != null &&
        u.pad)
    ) {
      var d,
        m,
        g,
        x =
          r == null ||
          (d = r.size) == null ||
          (m = d[t]) == null ||
          (g = m.iconOnly) == null
            ? void 0
            : g.pad;
      return {
        vertical: typeof x == "string" ? x : x.vertical,
        horizontal: typeof x == "string" ? x : x.horizontal,
      };
    }
    if (
      t &&
      r != null &&
      (s = r.size) != null &&
      (f = s[t]) != null &&
      (c = f[o]) != null &&
      c.pad
    )
      return r.size[t][o].pad;
    if (t && r.size && r.size[t] && r.size[t].pad)
      return {
        vertical: r.size[t].pad.vertical,
        horizontal: r.size[t].pad.horizontal,
      };
    if (n.button.padding)
      return {
        vertical:
          n.global.edgeSize[n.button.padding.vertical] ||
          n.button.padding.vertical,
        horizontal:
          n.global.edgeSize[n.button.padding.horizontal] ||
          n.button.padding.horizontal,
      };
  },
  J2 = function (t) {
    var n = t.hasIcon,
      r = t.hasLabel,
      o = t.sizeProp,
      i = t.theme,
      l = t.kind,
      a = typeof l == "object" ? l : i.button,
      u = n && !r,
      s = ty(o, i, a, l, u);
    return s ? z(["padding:", " ", ";"], s.vertical, s.horizontal) : "";
  },
  eO = function (t) {
    return z(
      ["border:none;", ";", " ", " ", ""],
      X2(t),
      J2(t),
      Z2(t),
      t.icon &&
        `
    > svg {
      display: flex;
      align-self: center;
      vertical-align: middle;
    }
  `
    );
  },
  zp = function (t, n) {
    var r;
    if (n) {
      r = t;
      for (var o = n.split("."); r && o.length; ) r = r[o.shift()];
    }
    return r;
  },
  yu = function (t, n) {
    var r = Ce(n);
    return z(
      ["padding:", "px ", "px;"],
      Math.max(Ce(t.vertical) - r, 0),
      Math.max(Ce(t.horizontal) - r, 0)
    );
  },
  tO = function (t) {
    var n = t.busy,
      r = t.colorValue,
      o = t.hasIcon,
      i = t.hasLabel,
      l = t.kind,
      a = t.sizeProp,
      u = t.success,
      s = t.themePaths,
      f = t.theme,
      c = [],
      d = typeof l == "object" ? l : f.button,
      m = o && !i,
      g = ty(a, f, d, l, m);
    if (
      (s.base.forEach(function (O) {
        var h = zp(d, O);
        h &&
          (c.push(Qi(h, f, r)),
          h.border &&
            h.border.width &&
            g &&
            !h.padding &&
            c.push(yu(g, h.border.width)));
      }),
      !s.base.length && typeof l == "object")
    ) {
      var x = l;
      x &&
        (c.push(Qi(x, f, r)),
        x.border &&
          x.border.width &&
          g &&
          !x.padding &&
          c.push(yu(g, x.border.width)));
    }
    return (
      s.hover.forEach(function (O) {
        var h = zp(d, O);
        if (h) {
          var p = Qi(h, f),
            v = "";
          h.border &&
            h.border.width &&
            g &&
            !h.padding &&
            (v = yu(g, h.border.width)),
            p.length > 0 && !n && !u && c.push(z(["&:hover{", " ", "}"], p, v));
        }
      }),
      c
    );
  },
  nO = function (t) {
    var n = t.hoverIndicator,
      r = t.theme,
      o = {};
    n === !0 || n === "background"
      ? (o.background = r.global.hover.background)
      : n.color || n.background
      ? (n.background && (o.background = n.background),
        n.color && (o.color = n.color))
      : (o.background = n);
    var i = Qi(o, r);
    return i.length > 0 ? z(["&:hover{", "}"], i) : "";
  },
  rO = function (t) {
    if (t === "horizontal") return "width: 100%;";
    if (t === "vertical") return "height: 100%;";
    if (t)
      return `
      width: 100%;
      height: 100%;
      max-width: none;
      flex: 1 0 auto;
    `;
  },
  oO = function (t) {
    return z(
      [
        "outline:none;border:none;padding:0;text-align:inherit;color:inherit;",
        " ",
        "",
      ],
      t.icon &&
        `
    > svg {
      display: flex;
      align-self: center;
      vertical-align: middle;
    }
  `,
      t.hasIcon && !t.hasLabel && "line-height: 0;"
    );
  },
  Tf = ne.button
    .withConfig({
      shouldForwardProp: function (t, n) {
        return !["kind"].includes(t) && n(t);
      },
    })
    .withConfig({
      displayName: "StyledButtonKind",
      componentId: "sc-1vhfpnt-0",
    })(
    [
      "display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " &:focus{",
      "}&:focus:not(:focus-visible){",
      "}",
      " ",
      " ",
      " ",
      "",
    ],
    Mn,
    function (e) {
      return e.plain && oO(e);
    },
    function (e) {
      return !e.disabled && e.active && bm;
    },
    function (e) {
      return !e.plain && eO(e);
    },
    function (e) {
      return !e.plain && tO(e);
    },
    function (e) {
      return !e.plain && e.pad && Tn("padding", e.pad, !1, void 0, e.theme);
    },
    function (e) {
      return (
        !e.plain &&
        e.align &&
        `
    text-align: ` +
          e.align +
          `;
    `
      );
    },
    function (e) {
      return !e.disabled && e.hoverIndicator && !e.busy && !e.success && nO(e);
    },
    function (e) {
      return e.disabled && pf(e.theme.button.disabled.opacity);
    },
    function (e) {
      return (!e.plain || e.focusIndicator) && la();
    },
    Mm(),
    function (e) {
      return (
        !e.plain &&
        e.theme.button.transition &&
        `
    transition-property: ` +
          e.theme.button.transition.properties.join(",") +
          `;
    transition-duration: ` +
          e.theme.button.transition.duration +
          `s;
    transition-timing-function: ` +
          e.theme.button.transition.timing +
          `;
  `
      );
    },
    function (e) {
      return e.fillContainer && rO(e.fillContainer);
    },
    function (e) {
      return e.theme.button && e.theme.button.extend;
    },
    function (e) {
      return (
        (e.busy || e.success) &&
        `
    cursor: default;
  `
      );
    }
  );
Tf.defaultProps = {};
Object.setPrototypeOf(Tf.defaultProps, ge);
var iO = E.createContext(function () {}),
  lO = function () {
    return y.useContext(iO);
  },
  ny = void 0,
  xu = sO(y),
  aO = me,
  uO = Qr;
function ry(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (ry = function (o) {
    return o ? n : t;
  })(e);
}
function sO(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = ry(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, i, l) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Il.apply(this, arguments)
  );
}
var oy = (0, xu.forwardRef)(function (e, t) {
  var n = (0, uO.useScaleProps)(e);
  return xu.default.createElement(
    aO.StyledIcon,
    Il({ ref: t, viewBox: "0 0 24 24", a11yTitle: "Checkmark" }, e),
    xu.default.createElement(
      "path",
      Il(
        { fill: "none", stroke: "#000", strokeWidth: "2", d: "m2 14 7 6L22 4" },
        n
      )
    )
  );
});
ny = oy;
oy.displayName = "Checkmark";
var cO = ri(["0%,80%,100%{transform:scale(0.4);}40%{transform:scale(0.8);}"]),
  fO = z(["animation:", " 1.4s infinite ease-in-out both;"], cO),
  wu = ne(fe).withConfig({
    displayName: "BusyAnimation__Dot",
    componentId: "sc-feuivs-0",
  })(
    [
      "background-color:currentColor;width:8px;height:8px;border-radius:100%;display:inline-block;",
      " ",
      "",
    ],
    fO,
    function (e) {
      return e.delay && "animation-delay: " + e.delay + ";";
    }
  ),
  dO = function () {
    return E.createElement(
      fe,
      {
        style: { position: "absolute" },
        fill: !0,
        alignContent: "center",
        justify: "center",
      },
      E.createElement(
        fe,
        { alignSelf: "center", direction: "row", gap: "small" },
        E.createElement(wu, { delay: "-0.32s" }),
        E.createElement(wu, { delay: "-0.16s" }),
        E.createElement(wu, null)
      )
    );
  },
  pO = ri([
    "0%{opacity:0;transform:scale(.3);}20%{opacity:1;transform:scale(1.15);}30%{transform:scale(.9);}45%{transform:scale(1.05);}55%{transform:scale(1);}100%{transform:scale(1);}",
  ]),
  hO = ne(ny).withConfig({
    displayName: "BusyAnimation__GrowCheckmark",
    componentId: "sc-feuivs-1",
  })(
    ["position:absolute;align-self:center;animation:", " 0.9s ease-in-out;"],
    pO
  ),
  vO = ne.div.withConfig({
    displayName: "BusyAnimation__StyledBusyContents",
    componentId: "sc-feuivs-2",
  })(["opacity:", ";}"], function (e) {
    return e.animating ? 0 : 1;
  }),
  mO = [
    "active",
    "align",
    "aria-label",
    "badge",
    "busy",
    "color",
    "children",
    "disabled",
    "icon",
    "focusIndicator",
    "gap",
    "fill",
    "href",
    "justify",
    "kind",
    "label",
    "messages",
    "onBlur",
    "onClick",
    "onFocus",
    "onMouseOut",
    "onMouseOver",
    "pad",
    "plain",
    "primary",
    "reverse",
    "secondary",
    "selected",
    "size",
    "success",
    "tip",
    "type",
    "a11yTitle",
    "as",
  ];
function Io() {
  return (
    (Io = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Io.apply(this, arguments)
  );
}
function gO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var yO = ne(fe).withConfig({
    displayName: "Button__RelativeBox",
    componentId: "sc-zuqsuw-0",
  })(["position:relative;"]),
  ur = function (t, n, r, o) {
    t === void 0 && (t = []);
    var i = [],
      l = t.length - 1;
    for (typeof o == "object" && (l = 0); l >= 0 && !i[1]; ) {
      var a = (typeof o == "object" && o) || n.button,
        u = a;
      if (t[l]) for (var s = t[l].split("."); u && s.length; ) u = u[s.shift()];
      if (u) {
        var f,
          c,
          d,
          m = r && u.background && u.background.color ? r : u.background,
          g =
            u.color ||
            (Object.prototype.hasOwnProperty.call(u, "color") &&
            u.color === void 0
              ? !1
              : void 0),
          x = void 0;
        if (
          (f = u) != null &&
          (c = f.icon) != null &&
          (d = c.props) != null &&
          d.color
        )
          x = u.icon.props.color;
        else if (t[l + 1]) {
          for (var O, h, p, v = t[l + 1].split("."); a && v.length; )
            u = a[v.shift()];
          (O = u) != null &&
            (h = O.icon) != null &&
            (p = h.props) != null &&
            p.color &&
            (x = u.icon.props.color);
        }
        x ||
          (x =
            r &&
            (!u.background || !u.background.color) &&
            (!u.border || !u.border.color)
              ? r
              : g),
          (i = Pm(m, x, n));
      }
      l -= 1;
    }
    return i[1] || void 0;
  },
  Tp = function (t, n, r) {
    t === void 0 && (t = []);
    var o,
      i = t.length - 1;
    for (typeof r == "object" && (i = 0); i >= 0 && !o; ) {
      var l,
        a = (typeof r == "object" && r) || n.button;
      if (t[i]) for (var u = t[i].split("."); a && u.length; ) a = a[u.shift()];
      (l = a) != null && l.icon && (o = a.icon), (i -= 1);
    }
    return o || void 0;
  },
  _p = function (t, n, r, o, i) {
    n === void 0 && (n = []);
    var l;
    if (o) {
      var a = (typeof o == "object" && o) || r.button;
      if (n[0]) for (var u = n[0].split("."); a && u.length; ) a = a[u.shift()];
      a && (l = a[t] || (a[t] && a[t].color));
    } else
      i && r && r.button && r.button.primary
        ? (l =
            r.button.primary[t] ||
            (r.button.primary[t] && r.button.primary[t].color))
        : (l =
            (r && r.button && r.button[t]) ||
            (r && r.button && r.button[t] && r.button[t].color));
    return l;
  },
  He = y.forwardRef(function (e, t) {
    var n,
      r,
      o,
      i = e.active,
      l = e.align,
      a = l === void 0 ? "center" : l,
      u = e["aria-label"],
      s = e.badge,
      f = e.busy,
      c = e.color,
      d = e.children,
      m = e.disabled,
      g = e.icon,
      x = e.focusIndicator,
      O = x === void 0 ? !0 : x,
      h = e.gap,
      p = e.fill,
      v = e.href,
      k = e.justify,
      C = e.kind,
      P = e.label,
      b = e.messages,
      M = e.onBlur,
      N = e.onClick,
      j = e.onFocus,
      W = e.onMouseOut,
      ce = e.onMouseOver,
      D = e.pad,
      ee = e.plain,
      H = e.primary,
      ke = e.reverse,
      q = e.secondary,
      T = e.selected,
      $ = e.size,
      _ = e.success,
      A = e.tip,
      U = e.type,
      G = U === void 0 ? "button" : U,
      Q = e.a11yTitle,
      ie = Q === void 0 ? (typeof A == "string" ? A : void 0) : Q,
      te = e.as,
      Y = gO(e, mO),
      F = y.useContext(_e) || ge.theme,
      L = y.useState(),
      X = L[0],
      de = L[1],
      Pe = y.useState(!1),
      le = Pe[0],
      Le = Pe[1],
      V = y.useContext(fa),
      Ye = y.useContext(Xg),
      yt = Ye.format;
    f &&
      _ &&
      console.warn("Button cannot have both busy and success set to true."),
      y.useEffect(
        function () {
          f
            ? V(yt({ id: "button.busy", messages: b }))
            : _ && V(yt({ id: "button.success", messages: b }));
        },
        [V, f, yt, b, _]
      ),
      (g || P) &&
        d &&
        console.warn(
          "Button should not have children if icon or label is provided"
        );
    var Yr = oi(),
      ui = lO(),
      an = y.useCallback(
        function (ye) {
          ui({
            type: "buttonClick",
            element: gw(ye.target),
            event: ye,
            href: v,
            label: typeof P == "string" ? P : void 0,
          }),
            N && N(ye);
        },
        [N, ui, v, P]
      ),
      Be = y.useMemo(
        function () {
          return typeof C == "object";
        },
        [C]
      ),
      pe = y.useMemo(
        function () {
          if (F.button.default || Be)
            return C || (H ? "primary" : q ? "secondary" : "default");
        },
        [C, Be, H, q, F]
      ),
      xt = $ || (pe && "medium") || void 0,
      $e = y.useMemo(
        function () {
          if (!(!pe || ee)) {
            var ye = { base: [], hover: [] };
            return (
              Be || ye.base.push(pe),
              T &&
                (ye.base.push("selected"),
                Be || ye.base.push("selected." + pe)),
              m
                ? (ye.base.push("disabled"),
                  Be || ye.base.push("disabled." + pe))
                : (i &&
                    (ye.base.push("active"),
                    Be || ye.base.push("active." + pe)),
                  ye.hover.push("hover"),
                  Be || ye.hover.push("hover." + pe),
                  i &&
                    (ye.hover.push("hover.active"),
                    Be || ye.hover.push("hover.active." + pe))),
              ye
            );
          }
        },
        [i, m, pe, Be, ee, T]
      ),
      Xr = function () {
        var We = Br(
          Z(
            c ||
              (F.button.primary && F.button.primary.color) ||
              F.global.colors.control ||
              "brand",
            F
          ),
          F
        );
        return Pl(We);
      },
      be = function (We) {
        Le(!0), ce && ce(We);
      },
      Vt = function (We) {
        Le(!1), W && W(We);
      },
      tr =
        (le && Tp($e == null ? void 0 : $e.hover, F, pe)) ||
        Tp($e == null ? void 0 : $e.base, F, pe),
      Ht = g || tr;
    if (g && !g.props.color)
      if (pe) {
        if (!ee) {
          var nr = (le && ur($e.hover, F)) || ur($e.base, F, c, pe);
          nr && (Ht = y.cloneElement(g, { color: nr }));
        }
      } else
        H &&
          (Ht = y.cloneElement(g, {
            color: F.global.colors.text[Xr() ? "dark" : "light"],
          }));
    else if (tr && !ee) {
      var Zr = (le && ur($e.hover, F)) || ur($e.base, F, c, pe);
      Zr && (Ht = y.cloneElement(tr, { color: Zr }));
    }
    if (((Ht = Im(Ht, xt, F)), Yr)) {
      var si, ci;
      return E.createElement(
        ii,
        Io(
          {
            ref: t,
            height:
              ((si = F.text[xt || "medium"]) == null ? void 0 : si.height) ||
              xt,
            a11yTitle: ie,
          },
          Y,
          (ci = F.button.size) == null ? void 0 : ci[xt || "medium"],
          F.button.skeleton
        )
      );
    }
    var Jr = ke ?? ((n = F.button[pe]) == null ? void 0 : n.reverse),
      fi = !te && v ? "a" : te,
      rr = Jr ? P : Ht,
      eo = Jr ? Ht : P,
      Xe;
    if (rr && eo) {
      var to, no;
      Xe = E.createElement(
        fe,
        {
          direction:
            ((to = F.button) == null || (no = to[pe]) == null
              ? void 0
              : no.direction) || "row",
          align: "center",
          justify: k || (a === "center" ? "center" : "between"),
          gap: h || F.button.gap,
          responsive: !1,
        },
        rr,
        eo
      );
    } else typeof d == "function" ? (Xe = d({ disabled: m, hover: le, focus: X })) : (Xe = rr || eo || d);
    var di = _p("background", $e && $e.base, F, pe, H),
      ae = _p("border", $e && $e.base, F, pe, H),
      he =
        ((r = F.button) == null || (o = r.badge) == null ? void 0 : o.align) !==
          "container" &&
        ((!di && !ae) || (!pe && g && !P));
    if ((s && he && (Xe = E.createElement(Ep, { content: s }, Xe)), f || _)) {
      var Ze;
      pe
        ? ee || (Ze = (le && ur($e.hover, F)) || ur($e.base, F, c, pe))
        : H && (Ze = F.global.colors.text[Xr() ? "dark" : "light"]),
        (Xe = E.createElement(
          yO,
          { flex: !1 },
          f && E.createElement(dO, null),
          _ &&
            E.createElement(
              fe,
              {
                style: { position: "absolute" },
                fill: !0,
                alignContent: "center",
                justify: "center",
              },
              E.createElement(hO, { color: Ze, "aria-hidden": !0 })
            ),
          E.createElement(vO, { animating: f || _ }, Xe)
        ));
    }
    var Ne;
    return (
      pe
        ? (Ne = E.createElement(
            Tf,
            Io({}, Y, {
              as: fi,
              ref: t,
              active: i,
              align: a,
              "aria-label": u || ie,
              busy: f,
              badge: s,
              colorValue: c,
              disabled: m,
              hasIcon: !!g,
              gap: h,
              hasLabel: !!P,
              icon: g,
              fillContainer: p,
              focus: X,
              focusIndicator: O,
              href: v,
              kind: pe,
              themePaths: $e,
              onClick: !f && !_ ? an : void 0,
              onFocus: function (We) {
                de(!0), j && j(We);
              },
              onBlur: function (We) {
                de(!1), M && M(We);
              },
              onMouseOver: be,
              onMouseOut: Vt,
              pad: D,
              plain: ee || y.Children.count(d) > 0,
              primary: H,
              sizeProp: xt,
              success: _,
              type: v ? void 0 : G,
            }),
            Xe
          ))
        : (Ne = E.createElement(
            zf,
            Io({}, Y, {
              as: fi,
              ref: t,
              "aria-label": u || ie,
              busy: f,
              colorValue: c,
              active: i,
              selected: T,
              disabled: m,
              hasIcon: !!g,
              gap: h,
              hasLabel: !!P,
              fillContainer: p,
              focus: X,
              focusIndicator: O,
              href: v,
              kind: pe,
              themePaths: $e,
              onClick: !f && !_ ? an : void 0,
              onFocus: function (We) {
                de(!0), j && j(We);
              },
              onBlur: function (We) {
                de(!1), M && M(We);
              },
              onMouseOver: be,
              onMouseOut: Vt,
              pad: D || !ee,
              plain:
                typeof ee < "u" ? ee : y.Children.count(d) > 0 || (g && !P),
              primary: H,
              sizeProp: xt,
              success: _,
              type: v ? void 0 : G,
            }),
            Xe
          )),
      A &&
        (typeof A == "string"
          ? (Ne = E.createElement(Ur, { content: A }, Ne))
          : (Ne = E.createElement(Ur, A, Ne))),
      s && !he && (Ne = E.createElement(Ep, { content: s }, Ne)),
      Ne
    );
  });
He.displayName = "Button";
He.propTypes = Mk;
var xO = {},
  wO = xO,
  SO = ne(fe).withConfig({
    displayName: "Collapsible__AnimatedBox",
    componentId: "sc-15kniua-0",
  })(["", ""], function (e) {
    return e.shouldOpen
      ? `visibility: hidden;
      position: absolute;
      pointer-events: none;`
      : "transition: " +
          ("max-" +
            e.dimension +
            " " +
            e.speedProp +
            "ms, opacity " +
            e.speedProp +
            "ms") +
          `;
      opacity: ` +
          (e.open ? 1 : 0) +
          `;
      overflow: ` +
          (e.animate || !e.open ? "hidden" : "visible") +
          ";";
  }),
  _f = y.forwardRef(function (e, t) {
    var n = e.children,
      r = e.direction,
      o = e.open,
      i = y.useContext(_e) || ge.theme,
      l = y.useState(o),
      a = l[0],
      u = l[1],
      s = y.useState(!1),
      f = s[0],
      c = s[1],
      d = y.useState(i.collapsible.minSpeed),
      m = d[0],
      g = d[1],
      x = y.useMemo(
        function () {
          return r === "horizontal" ? "width" : "height";
        },
        [r]
      ),
      O = qr(t),
      h = y.useRef(0),
      p = !a && o,
      v = a && !o;
    return (
      y.useEffect(
        function () {
          o !== a && (c(!0), u(o));
        },
        [a, o]
      ),
      Zn(
        function () {
          var k = O.current;
          if (!f && p) {
            var C = k.parentNode.style.position;
            k.parentNode.style.position = "relative";
            var P = k.getBoundingClientRect(),
              b = P[x];
            (k.parentNode.style.position = C), (h.current = b);
          }
          if (p) k.style["max-" + x] = 0;
          else if (v) {
            var M = k.getBoundingClientRect(),
              N = M[x];
            k.style["max-" + x] = N + "px";
          }
        },
        [p, v, O, x, f]
      ),
      y.useEffect(
        function () {
          if (p || v) {
            var k = O.current,
              C = i.collapsible,
              P = C.minSpeed,
              b = C.baseline,
              M = Math.max((h.current / b) * P, P);
            g(M),
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  k.style["max-" + x] = p ? h.current + "px" : 0;
                });
              });
          }
        },
        [p, v, O, x, i]
      ),
      y.useEffect(
        function () {
          if (f) {
            var k = O.current,
              C = setTimeout(function () {
                c(!1), k.removeAttribute("style");
              }, m);
            return function () {
              return clearTimeout(C);
            };
          }
        },
        [f, O, m, a]
      ),
      E.createElement(
        SO,
        {
          "aria-hidden": !a,
          ref: O,
          open: a,
          animate: f,
          dimension: x,
          speedProp: m,
          shouldOpen: !f && p,
        },
        p || a || f ? n : null
      )
    );
  });
_f.displayName = "Collapsible";
_f.propTypes = wO;
var kO = function (t) {
    var n = t.size || "medium",
      r = t.theme.heading,
      o = r.level[t.level];
    if (o) {
      var i = o[n],
        l = [
          z(
            [
              "font-size:",
              ";line-height:",
              ";max-width:",
              ";font-weight:",
              ";overflow-wrap:",
              ";",
            ],
            i ? i.size : n,
            i ? i.height : "normal",
            (t.fillProp && "none") || (i && i.maxWidth) || o.medium.maxWidth,
            t.weight || o.font.weight || r.weight,
            t.overflowWrap
          ),
        ];
      if (t.responsive && r.responsiveBreakpoint) {
        var a = t.theme.global.breakpoints[r.responsiveBreakpoint];
        if (a) {
          var u = r.level[t.level + 1]
            ? r.level[t.level + 1][n]
            : r.level[t.level][n];
          u &&
            l.push(
              re(
                a,
                `
            font-size: ` +
                  u.size +
                  `;
            line-height: ` +
                  u.height +
                  `;
            max-width: ` +
                  ((t.fillProp && "none") || u.maxWidth) +
                  `;
          `
              )
            );
        }
      }
      return l;
    }
    return (
      console.warn(
        "Heading level " + t.level + " is not defined in your theme."
      ),
      ""
    );
  },
  OO = function (t) {
    var n = t.theme.heading.level[t.level] || {},
      r = n.font;
    return r && r.family
      ? z(["font-family:", ";"], r.family)
      : t.theme.heading.font
      ? z(["font-family:", ";"], t.theme.heading.font.family)
      : "";
  },
  CO = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,
  PO = z(["color:", ";"], function (e) {
    return Z(e.colorProp || e.theme.heading.color, e.theme);
  }),
  If = ne.h1.withConfig({
    displayName: "StyledHeading",
    componentId: "sc-1rdh4aw-0",
  })(
    ["", " ", " ", " ", " ", " ", " ", ""],
    Mn,
    function (e) {
      return OO(e);
    },
    function (e) {
      return kO(e);
    },
    function (e) {
      return e.textAlign && vf;
    },
    function (e) {
      return e.truncate && CO;
    },
    function (e) {
      return (e.colorProp || e.theme.heading.color) && PO;
    },
    function (e) {
      return e.theme.heading && e.theme.heading.extend;
    }
  );
If.defaultProps = {};
Object.setPrototypeOf(If.defaultProps, ge);
var bO = {},
  EO = bO;
function ic() {
  return (
    (ic = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ic.apply(this, arguments)
  );
}
var $f = y.forwardRef(function (e, t) {
  var n = e.as,
    r = e.level,
    o = e.size,
    i = y.useContext(_e) || defaultProps.theme,
    l = i.heading.level[r],
    a = l == null ? void 0 : l[o || "medium"],
    u = a ? a.height : o;
  return E.createElement(
    ii,
    ic({ as: n, ref: t, height: u }, i.heading.skeleton)
  );
});
$f.displayName = "HeadingSkeleton";
$f.defaultProps = { level: 1 };
var zO = ["children", "color", "fill", "level", "overflowWrap", "weight"];
function $l() {
  return (
    ($l = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $l.apply(this, arguments)
  );
}
function TO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var pa = y.forwardRef(function (e, t) {
  var n = e.children,
    r = e.color,
    o = e.fill,
    i = e.level,
    l = e.overflowWrap,
    a = e.weight,
    u = TO(e, zO),
    s = qr(t),
    f = y.useState(l || "break-word"),
    c = f[0],
    d = f[1],
    m = oi();
  Zn(
    function () {
      var x = function () {
        var h;
        !l &&
          s.current &&
          ((h =
            s.current.scrollWidth > s.current.offsetWidth
              ? "anywhere"
              : "break-word"),
          d(h));
      };
      return (
        window.addEventListener("resize", x),
        x(),
        function () {
          return window.removeEventListener("resize", x);
        }
      );
    },
    [s, l]
  );
  var g = n;
  return (
    m && (g = E.createElement($f, $l({ level: i, fill: o }, u))),
    E.createElement(
      If,
      $l(
        {
          as: "h" + i,
          colorProp: r,
          fillProp: o,
          level: +i,
          overflowWrap: c,
          weight: a,
        },
        u,
        { ref: s }
      ),
      g
    )
  );
});
pa.displayName = "Heading";
pa.defaultProps = { level: 1, responsive: !0 };
pa.propTypes = EO;
var _O = {},
  IO = _O,
  $O = [
    "children",
    "header",
    "label",
    "onClick",
    "onMouseOut",
    "onMouseOver",
    "onFocus",
    "onBlur",
  ];
function lc() {
  return (
    (lc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    lc.apply(this, arguments)
  );
}
function MO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ha = y.forwardRef(function (e, t) {
  var n = e.children,
    r = e.header,
    o = e.label,
    i = e.onClick,
    l = e.onMouseOut,
    a = e.onMouseOver,
    u = e.onFocus,
    s = e.onBlur,
    f = MO(e, $O),
    c = y.useContext(_e) || ge.theme,
    d = y.useContext(Yg),
    m = d.active,
    g = d.animate,
    x = d.level,
    O = d.onPanelChange,
    h = y.useState(void 0),
    p = h[0],
    v = h[1],
    k = y.useState(),
    C = k[0],
    P = k[1],
    b = y.useMemo(
      function () {
        return Z(c.accordion.icons.color || "control", c);
      },
      [c]
    ),
    M = y.useMemo(
      function () {
        return m ? c.accordion.icons.collapse : c.accordion.icons.expand;
      },
      [m, c.accordion.icons]
    ),
    N = JSON.stringify({ dark: "light-4", light: "dark-3" });
  JSON.stringify(c.accordion.hover.color) !== N &&
    console.warn(`The theme style for accordion.hover.color is deprecated, 
        use accordion.hover.heading.color instead.`);
  var j =
      c.accordion.hover && JSON.stringify(c.accordion.hover.heading.color) !== N
        ? c.accordion.hover.heading.color
        : c.accordion.hover.color,
    W = c.accordion.border,
    ce = c.accordion.panel.border,
    D;
  return (
    ce &&
      (D = {
        bottom:
          "-" +
          Ce(
            c.global.borderSize[ce.size] ||
              ce.size ||
              c.global.borderSize.xsmall
          ) +
          "px",
      }),
    E.createElement(
      fe,
      { ref: t, flex: !1, onClick: i, border: ce, margin: D },
      E.createElement(
        He,
        {
          "aria-expanded": m,
          plain: c.button.default ? !0 : void 0,
          onClick: O,
          hoverIndicator: c.accordion.hover.background,
          onMouseOver: function (H) {
            v(j), a && a(H);
          },
          onMouseOut: function (H) {
            v(void 0), l && l(H);
          },
          onFocus: function (H) {
            v(j), P(!0), u && u(H);
          },
          onBlur: function (H) {
            v(void 0), P(!1), s && s(H);
          },
          style: C ? { zIndex: 1 } : void 0,
        },
        r ||
          E.createElement(
            fe,
            lc({ align: "center", direction: "row", justify: "between" }, f),
            typeof o == "string"
              ? E.createElement(
                  fe,
                  { pad: { horizontal: "xsmall" } },
                  E.createElement(
                    pa,
                    {
                      level:
                        x ||
                        (c.accordion.heading && c.accordion.heading.level) ||
                        4,
                      margin:
                        (c.accordion.heading && c.accordion.heading.margin) ||
                        void 0,
                      color: p,
                    },
                    o
                  )
                )
              : o,
            M &&
              E.createElement(
                fe,
                { pad: { horizontal: "small" }, width: { min: "fit-content" } },
                E.createElement(M, { color: b })
              )
          )
      ),
      E.createElement(
        fe,
        { role: "region", border: W },
        g ? E.createElement(_f, { open: m }, n) : m && n
      )
    )
  );
});
ha.displayName = "AccordionPanel";
ha.propTypes = IO;
var NO = { cover: "cover", contain: "contain" },
  RO = z(["flex:1 1;overflow:hidden;object-fit:", ";"], function (e) {
    return NO[e.fit];
  }),
  Mf = ne.img.withConfig({
    displayName: "StyledImage",
    componentId: "sc-ey4zx9-0",
  })(
    ["", " ", " ", " ", " ", ""],
    Mn,
    function (e) {
      return e.fit && RO;
    },
    function (e) {
      return e.fillProp && $m(e.fillProp);
    },
    function (e) {
      return e.theme.image && e.theme.image.extend;
    },
    function (e) {
      return (
        e.opacityProp &&
        "opacity: " +
          (e.opacityProp === !0
            ? e.theme.global.opacity.medium
            : e.theme.global.opacity[e.opacityProp] || e.opacityProp) +
          `;
  `
      );
    }
  );
Mf.defaultProps = {};
Object.setPrototypeOf(Mf.defaultProps, ge);
var jO = {},
  AO = jO,
  FO = ["a11yTitle", "fallback", "onError", "onLoad", "opacity", "fill", "src"];
function ac() {
  return (
    (ac = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ac.apply(this, arguments)
  );
}
function DO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Nf = y.forwardRef(function (e, t) {
  var n = e.a11yTitle,
    r = e.fallback,
    o = e.onError,
    i = e.onLoad,
    l = e.opacity,
    a = e.fill,
    u = e.src,
    s = DO(e, FO),
    f = y.useState(!1),
    c = f[0],
    d = f[1],
    m = function (h) {
      o && o(h), !c && r && r !== "" && ((h.target.src = r), d(!0));
    },
    g = function (h) {
      i && i(h), d(!1);
    },
    x = { onError: (o || r) && m, onLoad: g };
  return E.createElement(
    Mf,
    ac({ "aria-label": n }, s, x, {
      ref: t,
      opacityProp: l,
      fillProp: a,
      src: u === void 0 ? "" : u,
    })
  );
});
Nf.displayName = "Image";
Nf.propTypes = AO;
var Rf = ne(li).withConfig({
  displayName: "StyledAvatar__StyledAvatarText",
  componentId: "sc-1suyamb-0",
})(
  ["", " ", ""],
  function (e) {
    return (
      e.theme.avatar &&
      e.theme.avatar.text &&
      e.theme.avatar.text.fontWeight &&
      "font-weight: " + e.theme.avatar.text.fontWeight + ";"
    );
  },
  function (e) {
    return e.theme.avatar.text && e.theme.avatar.text.extend;
  }
);
Rf.defaultProps = {};
Object.setPrototypeOf(Rf.defaultProps, ge);
var Ml = ne(fe).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-1suyamb-1",
})(["", ""], function (e) {
  return e.theme.avatar && e.theme.avatar.extend;
});
Ml.defaultProps = {};
Object.setPrototypeOf(Ml.defaultProps, ge);
var LO = {},
  BO = LO,
  WO = [
    "a11yTitle",
    "aria-label",
    "align",
    "children",
    "height",
    "justify",
    "round",
    "size",
    "src",
    "width",
  ];
function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(this, arguments)
  );
}
function UO(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var iy = function (t) {
  var n = t.a11yTitle,
    r = t["aria-label"],
    o = t.align,
    i = o === void 0 ? "center" : o,
    l = t.children,
    a = t.height,
    u = t.justify,
    s = u === void 0 ? "center" : u,
    f = t.round,
    c = f === void 0 ? "full" : f,
    d = t.size,
    m = d === void 0 ? "medium" : d,
    g = t.src,
    x = t.width,
    O = UO(t, WO),
    h = y.useContext(_e) || ge.theme,
    p = h.avatar.size[m] || m,
    v = h.avatar.text.size[m] || "large",
    k = y.useMemo(
      function () {
        return {
          align: i,
          height: p,
          justify: s,
          overflow: "hidden",
          round: c,
          width: p,
        };
      },
      [i, p, s, c]
    ),
    C = y.useCallback(
      function () {
        return E.createElement(Ml, Nl({}, k, O), l);
      },
      [k, l, O]
    );
  (a || x) &&
    console.warn(
      "Avatar should use `size` instead of `height` or `width` props"
    );
  var P;
  return (
    typeof l == "string"
      ? (P = E.createElement(Rf, { alignSelf: "center", size: v }, l))
      : typeof g == "string" &&
        (P = E.createElement(Nf, {
          role: "presentation",
          fit: "contain",
          src: g,
        })),
    typeof l == "string" || typeof g == "string"
      ? E.createElement(
          Ml,
          Nl(
            {
              role: typeof g == "string" ? "figure" : void 0,
              a11yTitle: n || r,
            },
            k,
            O
          ),
          P
        )
      : E.createElement(C, null)
  );
};
iy.propTypes = BO;
var VO = {},
  HO = VO,
  Su = function (t, n) {
    return t ? Math.floor((t + n) / n) - 1 : 0;
  },
  ly = function (t) {
    var n = t.children,
      r = t.items,
      o = r === void 0 ? [] : r,
      i = t.onMore,
      l = t.renderMarker,
      a = t.replace,
      u = t.show,
      s = t.step,
      f = s === void 0 ? 50 : s,
      c = y.useState(),
      d = c[0],
      m = c[1],
      g = y.useMemo(
        function () {
          return Math.max(0, Math.ceil(o.length / f) - 1);
        },
        [o.length, f]
      ),
      x = y.useState([0, Su(u, f)]),
      O = x[0],
      h = x[1],
      p = y.useState([]),
      v = p[0],
      k = p[1],
      C = y.useState(0),
      P = C[0],
      b = C[1],
      M = y.useRef(),
      N = y.useRef();
    y.useEffect(
      function () {
        var T,
          $ = function () {
            if (T) {
              var G = T[0],
                Q,
                ie;
              if (G === document)
                (Q =
                  document.documentElement.scrollTop ||
                  document.body.scrollTop),
                  (ie = window.innerHeight);
              else {
                Q = G.scrollTop;
                var te = G.getBoundingClientRect();
                ie = te.height;
              }
              for (
                var Y = ie / 4, F = 0, L = 0, X = v[L] || 0;
                v[L + 1] && X < Q - Y;

              )
                (L += 1), (F += 1), (X += v[L]);
              for (var de = F; v[L] !== void 0 && X < Q + ie + Y; )
                (L += 1), (de += 1), (X += v[L] || 0);
              if ((a || ((F = 0), (de = Math.max(O[1], de))), u)) {
                var Pe = Su(u, f);
                (F = Math.min(Pe, F)), (de = Math.max(Pe, de));
              }
              (F !== O[0] || de !== O[1]) && h([F, de]);
            }
          },
          _,
          A = function () {
            clearTimeout(_), (_ = setTimeout($, 10));
          };
        return (
          N.current &&
            ((T = zm(N.current)),
            T.forEach(function (U) {
              return U.addEventListener("scroll", A);
            })),
          window.addEventListener("resize", A),
          $(),
          function () {
            T &&
              T.forEach(function (U) {
                return U.removeEventListener("scroll", A);
              }),
              window.removeEventListener("resize", A),
              clearTimeout(_);
          }
        );
      },
      [v, O, a, u, f]
    ),
      y.useEffect(
        function () {
          i &&
            O[1] === g &&
            o.length >= P &&
            o.length > 0 &&
            (b(o.length + 1), i());
        },
        [o.length, g, i, P, O, f]
      ),
      y.useEffect(
        function () {
          o.length === 0 &&
            g === 0 &&
            P !== 0 &&
            (k([]), b(0), h([0, Su(u, f)]));
        },
        [g, P, u, f, o.length]
      ),
      Zn(
        function () {
          var T = setTimeout(function () {
            if (u && N.current && u !== d) {
              var $ = u - O[0] * f + (O[0] ? 1 : 0),
                _ = N.current.parentNode.children.item($);
              if (_) {
                var A = fw(_);
                _m(_, A)
                  ? _.scrollIntoView(!0)
                  : Tm(_, A) && _.scrollIntoView(!1),
                  m(u);
              }
            }
          }, 100);
          return function () {
            return clearTimeout(T);
          };
        },
        [O, u, f]
      ),
      Zn(
        function () {
          if (N.current) {
            var T = N.current.parentNode.children;
            if ((M.current ? 1 : 0) + (O[1] - O[0] + 1) * f + 1 === T.length) {
              for (var $, _ = O[0], A; _ <= O[1]; ) {
                var U = (M.current ? 1 : 0) + (_ - O[0]) * f,
                  G = Math.min(U + f - 1, T.length - 1),
                  Q = A !== void 0 ? A : T.item(U).getBoundingClientRect().top,
                  ie = T.item(G).getBoundingClientRect(),
                  te = ie.bottom,
                  Y = te - Q;
                te &&
                  (!v || v[_] !== Y) &&
                  ($ || ($ = [].concat(v || [])), ($[_] = Y)),
                  (A = te),
                  (_ += 1);
              }
              for (; a && _ <= g; ) {
                if (!v[_] && v[_] !== v[0]) {
                  $ || ($ = [].concat(v || []));
                  var F = $;
                  $[_] = F[0];
                }
                _ += 1;
              }
              $ && k($);
            }
          }
        },
        [g, v, O, a, f]
      );
    var j = y.useMemo(
        function () {
          if (!a) return 0;
          for (var T = 0, $ = 0; $ < O[0]; ) (T += v[$] || 0), ($ += 1);
          return T;
        },
        [v, O, a]
      ),
      W = y.useMemo(
        function () {
          if (!a) return 0;
          for (var T = 0, $ = O[1] + 1; $ <= g; ) (T += v[$] || 0), ($ += 1);
          return T;
        },
        [g, v, O, a]
      ),
      ce = O[0] * f,
      D = Math.min((O[1] + 1) * f, o.length) - 1,
      ee = [];
    if (j) {
      var H = E.createElement(fe, {
        key: "above",
        ref: M,
        flex: !1,
        height: j + "px",
      });
      l && (H = E.cloneElement(l(H), { key: "above" })), ee.push(H);
    }
    if (
      (o.slice(ce, D + 1).forEach(function (T, $) {
        var _ = ce + $,
          A = n(T, _);
        ee.push(A);
      }),
      a || O[1] < g || i)
    ) {
      var ke = E.createElement(fe, {
        key: "below",
        ref: (!l && N) || void 0,
        flex: !1,
        height: (W || 0) + "px",
      });
      if (l) {
        var q = l(ke);
        ke = E.cloneElement(q, {
          key: "below",
          ref: function ($) {
            N.current = $;
            var _ = q.ref;
            typeof _ == "function" ? _($) : _ !== null && (_.current = $);
          },
        });
      }
      ee.push(ke);
    }
    return ee;
  };
ly.propTypes = HO;
var KO = function (t) {
    var n = t.value,
      r = t.initialValue,
      o = y.useState(n !== void 0 ? n : r),
      i = o[0],
      l = o[1];
    return [
      n !== void 0 ? n : i,
      function (a) {
        r !== void 0 && l(a);
      },
    ];
  },
  GO = function (t) {
    var n = t.error,
      r = t.info,
      o = t.disabled;
    return { error: n, info: r, disabled: o };
  },
  qO = E.createContext({ useFormField: GO, useFormInput: KO, noForm: !0 }),
  QO = function (t) {
    return t === "full" ? z(["", " padding:0;"], gp) : t && gp;
  },
  jf = ne.input.withConfig({
    displayName: "StyledTextInput",
    componentId: "sc-1x30a0s-0",
  })(
    ["", " ", " ", " ", " ", " ", " ", ";"],
    kw,
    function (e) {
      return QO(e.plain);
    },
    function (e) {
      return e.icon && Ow;
    },
    function (e) {
      return (
        e.disabled &&
        pf(e.theme.textInput.disabled && e.theme.textInput.disabled.opacity)
      );
    },
    function (e) {
      return e.textAlign && vf;
    },
    function (e) {
      return e.widthProp && mf(e.widthProp, e.theme);
    },
    function (e) {
      return e.theme.textInput && e.theme.textInput.extend;
    }
  );
jf.defaultProps = {};
Object.setPrototypeOf(jf.defaultProps, ge);
var Af = ne.div.withConfig({
  displayName: "StyledTextInput__StyledTextInputContainer",
  componentId: "sc-1x30a0s-1",
})(["position:relative;width:100%;", ";"], function (e) {
  return (
    e.theme.textInput &&
    e.theme.textInput.container &&
    e.theme.textInput.container.extend
  );
});
Af.defaultProps = {};
Object.setPrototypeOf(Af.defaultProps, ge);
var Ff = ne.div.withConfig({
  displayName: "StyledTextInput__StyledPlaceholder",
  componentId: "sc-1x30a0s-2",
})(
  [
    "position:absolute;left:",
    "px;top:50%;transform:translateY(-50%);display:flex;justify-content:center;pointer-events:none;",
    ";",
  ],
  function (e) {
    return Ce(zs(e, "left")) - Ce(e.theme.global.control.border.width);
  },
  function (e) {
    return (
      e.theme.textInput &&
      e.theme.textInput.placeholder &&
      e.theme.textInput.placeholder.extend
    );
  }
);
Ff.defaultProps = {};
Object.setPrototypeOf(Ff.defaultProps, ge);
var YO = ne.div.withConfig({
    displayName: "StyledTextInput__StyledIcon",
    componentId: "sc-1x30a0s-3",
  })(
    [
      "position:absolute;display:flex;justify:center;top:50%;transform:translateY(-50%);pointer-events:none;",
      "",
    ],
    function (e) {
      return e.reverse
        ? "right: " + zs(e, "right") + ";"
        : "left: " + zs(e, "left") + ";";
    }
  ),
  Df = ne.ol.withConfig({
    displayName: "StyledTextInput__StyledSuggestions",
    componentId: "sc-1x30a0s-4",
  })(
    [
      "border-top-left-radius:0;border-top-right-radius:0;margin:0;padding:0;list-style-type:none;",
      ";",
    ],
    function (e) {
      return (
        e.theme.textInput &&
        e.theme.textInput.suggestions &&
        e.theme.textInput.suggestions.extend
      );
    }
  );
Df.defaultProps = {};
Object.setPrototypeOf(Df.defaultProps, ge);
var XO = {},
  ZO = XO,
  JO = [
    "a11yTitle",
    "defaultSuggestion",
    "defaultValue",
    "dropAlign",
    "dropHeight",
    "dropTarget",
    "dropProps",
    "focusIndicator",
    "icon",
    "id",
    "messages",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "onKeyDown",
    "onSelect",
    "onSuggestionSelect",
    "onSuggestionsClose",
    "onSuggestionsOpen",
    "placeholder",
    "plain",
    "readOnly",
    "reverse",
    "suggestions",
    "textAlign",
    "value",
    "width",
  ];
function $o() {
  return (
    ($o = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $o.apply(this, arguments)
  );
}
function eC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ku = function (t) {
    return t && typeof t == "object" ? t.label || t.value : t;
  },
  Ip = function (t) {
    return t && typeof t == "object"
      ? t.label && typeof t.label == "string"
        ? t.label
        : t.value
      : t;
  },
  tC = ne(fe).withConfig({
    displayName: "TextInput__ContainerBox",
    componentId: "sc-1ai0c08-0",
  })(
    [
      "",
      ";@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}",
    ],
    function (e) {
      return e.dropHeight
        ? bw("max-height", e.dropHeight, e.theme)
        : "max-height: inherit;";
    }
  ),
  nC = { top: "bottom", left: "left" },
  Rl = y.forwardRef(function (e, t) {
    var n,
      r = e.a11yTitle,
      o = e.defaultSuggestion,
      i = e.defaultValue,
      l = e.dropAlign,
      a = l === void 0 ? nC : l,
      u = e.dropHeight,
      s = e.dropTarget,
      f = e.dropProps,
      c = e.focusIndicator,
      d = c === void 0 ? !0 : c,
      m = e.icon,
      g = e.id,
      x = e.messages,
      O = e.name,
      h = e.onBlur,
      p = e.onChange,
      v = e.onFocus,
      k = e.onKeyDown,
      C = e.onSelect,
      P = e.onSuggestionSelect,
      b = e.onSuggestionsClose,
      M = e.onSuggestionsOpen,
      N = e.placeholder,
      j = e.plain,
      W = e.readOnly,
      ce = e.reverse,
      D = e.suggestions,
      ee = e.textAlign,
      H = e.value,
      ke = e.width,
      q = eC(e, JO),
      T = y.useContext(_e) || ge.theme,
      $ = y.useContext(Xg),
      _ = $.format,
      A = y.useContext(fa),
      U = y.useContext(qO),
      G = qr(t),
      Q = y.useRef(),
      ie = y.useRef(),
      te = U.useFormInput({ name: W ? void 0 : O, value: H }),
      Y = te[0],
      F = te[1],
      L = y.useState(),
      X = L[0],
      de = L[1],
      Pe = y.useState(!1),
      le = Pe[0],
      Le = Pe[1],
      V = y.useMemo(
        function () {
          return C && !P ? C : P;
        },
        [C, P]
      ),
      Ye = y.useMemo(
        function () {
          return C && P ? C : void 0;
        },
        [C, P]
      ),
      yt = y.useState(),
      Yr = yt[0],
      ui = yt[1],
      an = y.useCallback(
        function () {
          Le(!0),
            A(_({ id: "textInput.suggestionIsOpen", messages: x })),
            A(
              D.length +
                " " +
                _({ id: "textInput.suggestionsCount", messages: x })
            ),
            M && M();
        },
        [A, x, _, M, D]
      ),
      Be = y.useCallback(
        function () {
          ui(D), Le(!1), b && b();
        },
        [b, D]
      ),
      pe = y.useCallback(
        function (ae) {
          ae.target !== G.current && Be();
        },
        [G, Be]
      );
    y.useEffect(
      function () {
        X && !le && D && D.length && (!Yr || Yr.length !== D.length) && an();
      },
      [X, an, le, D, Yr]
    ),
      y.useEffect(
        function () {
          le && (!D || !D.length) && Be();
        },
        [Be, le, D]
      );
    var xt = y.useMemo(
        function () {
          return D
            ? D.map(function (ae) {
                return typeof ae == "object" ? ae.value : ae;
              }).indexOf(Y)
            : -1;
        },
        [D, Y]
      ),
      $e = y.useMemo(
        function () {
          return xt === -1 && typeof o == "number" ? o : xt;
        },
        [o, xt]
      ),
      Xr = y.useState($e),
      be = Xr[0],
      Vt = Xr[1],
      tr = y.useState(),
      Ht = tr[0],
      nr = tr[1];
    y.useEffect(
      function () {
        return Vt(xt);
      },
      [xt]
    ),
      y.useEffect(
        function () {
          le || Vt($e);
        },
        [$e, le]
      ),
      y.useEffect(
        function () {
          if (be >= 0) {
            var ae = Ip(D[be]);
            A(ae + " " + _({ id: "textInput.enterSelect", messages: x }));
          }
        },
        [be, A, x, _, D]
      ),
      y.useEffect(
        function () {
          var ae = setTimeout(function () {
            var he = ie.current;
            if (le && be !== -1 && he) {
              var Ze = he.parentNode,
                Ne = he.children[be];
              Ze.scrollTo &&
                (Tm(Ne, Ze)
                  ? Ze.scrollTo(
                      0,
                      Ne.offsetTop -
                        (Ze.getBoundingClientRect().height -
                          Ne.getBoundingClientRect().height)
                    )
                  : _m(Ne, Ze) && Ze.scrollTo(0, Ne.offsetTop));
            }
          }, 50);
          return function () {
            return clearTimeout(ae);
          };
        },
        [be, le]
      );
    var Zr = function (he, Ze) {
        if ((G.current.focus(), (G.current.value = Ze), Be(), V)) {
          he.persist && he.persist();
          var Ne = he;
          (Ne.suggestion = Ze), V(Ne);
        }
        F(Ze);
      },
      si = y.useCallback(
        function (ae) {
          ae.preventDefault();
          var he = Math.min(be + 1, D.length - 1);
          Vt(he), nr(!1);
        },
        [be, D]
      ),
      ci = y.useCallback(
        function (ae) {
          ae.preventDefault();
          var he = Math.max(be - 1, 0);
          Vt(he), nr(!1);
        },
        [be]
      ),
      Jr = Y || ((n = G.current) == null ? void 0 : n.value),
      fi = y.useMemo(
        function () {
          return N && typeof N != "string" && !Jr;
        },
        [Jr, N]
      ),
      rr,
      eo = { onSelect: Ye };
    le &&
      (rr = E.createElement(
        da,
        $o(
          {
            ref: Q,
            id: g ? "text-input-drop__" + g : void 0,
            align: a,
            responsive: !1,
            target: s || G.current,
            onClickOutside: pe,
            onEsc: Be,
          },
          f
        ),
        E.createElement(
          tC,
          {
            id: g ? "listbox__" + g : void 0,
            role: "listbox",
            overflow: "auto",
            dropHeight: u,
            onMouseMove: function () {
              return nr(!0);
            },
          },
          E.createElement(
            Df,
            { ref: ie },
            E.createElement(
              ly,
              { items: D, step: T.select.step, show: be !== -1 ? be : void 0 },
              function (ae, he, Ze) {
                var Ne = be === he,
                  ye = ae === Y,
                  We = ku(ae),
                  or;
                return (
                  typeof We != "string"
                    ? (or = We)
                    : T.button.option ||
                      (or = E.createElement(
                        fe,
                        { align: "start", pad: "small" },
                        We
                      )),
                  E.createElement(
                    "li",
                    { key: Ip(ae) + "-" + he, ref: Ze },
                    E.createElement(
                      He,
                      {
                        id: g ? "listbox-option-" + he + "__" + g : void 0,
                        role: "option",
                        "aria-selected": ye ? "true" : "false",
                        active: Ne,
                        fill: "horizontal",
                        plain: or ? !0 : void 0,
                        align: "start",
                        kind: or ? void 0 : "option",
                        label: or ? void 0 : We,
                        onClick: function (uy) {
                          return Zr(uy, ae);
                        },
                        onMouseMove:
                          Ht && be !== he
                            ? function () {
                                return Vt(he);
                              }
                            : void 0,
                      },
                      or
                    )
                  )
                );
              }
            )
          )
        )
      ));
    var Xe = { onKeyDown: k };
    le
      ? ((Xe.onEnter = function (ae) {
          ae.preventDefault(), be >= 0 ? Zr(ae, D[be]) : Be();
        }),
        be > 0 && (Xe.onUp = ci),
        be < D.length - 1 && (Xe.onDown = si),
        (Xe.onTab = Be))
      : D && D.length > 0 && (Xe.onDown = an);
    var to = {},
      no;
    g &&
      (D == null ? void 0 : D.length) > -1 &&
      (le && be > -1 && (no = "listbox-option-" + be + "__" + g),
      (to = {
        "aria-activedescendant": no,
        "aria-autocomplete": "list",
        "aria-expanded": le ? "true" : "false",
        "aria-controls": le ? "listbox__" + g : void 0,
        role: "combobox",
      }));
    var di = Im(m, q.size, T);
    return E.createElement(
      Af,
      { plain: j },
      fi && E.createElement(Ff, null, N),
      di && E.createElement(YO, { reverse: ce, theme: T }, di),
      E.createElement(
        ca,
        $o({ target: X ? "document" : void 0 }, Xe),
        E.createElement(
          jf,
          $o(
            {
              "aria-label": r,
              ref: G,
              id: g,
              name: O,
              autoComplete: "off",
              plain: j,
              placeholder: typeof N == "string" ? N : void 0,
              icon: m,
              reverse: ce,
              focus: X,
              focusIndicator: d,
              textAlign: ee,
              widthProp: ke,
            },
            q,
            eo,
            to,
            {
              defaultValue: ku(i),
              value: ku(Y),
              readOnly: W,
              onFocus: function (he) {
                X ||
                  (de(!0),
                  D &&
                    D.length > 0 &&
                    (A(_({ id: "textInput.suggestionsExist", messages: x })),
                    an()),
                  v && v(he));
              },
              onBlur: function (he) {
                (!he.relatedTarget || he.relatedTarget !== Q.current) &&
                  (de(!1), h && h(he));
              },
              onChange: W
                ? void 0
                : function (ae) {
                    D && X && !le && an(),
                      F(ae.target.value),
                      Vt($e),
                      p && p(ae);
                  },
            }
          )
        )
      ),
      rr
    );
  });
Rl.displayName = "TextInput";
Rl.propTypes = ZO;
const rC = "./assets/spaceman-685631d0.png",
  fo = ({ label: e, value: t }) =>
    S.jsxs("h2", {
      children: [
        e,
        ": ",
        S.jsx("span", { style: { fontWeight: "normal" }, children: t }),
      ],
    }),
  ay = (e) =>
    fetch("https://api.spacetraders.io/v2/my/agent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((t) => t.json().then((n) => n.data))
      .catch((t) => (console.error("Error in fetch agent request", t), t)),
  oC = (e) =>
    fetch("https://api.spacetraders.io/v2/my/ships", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((t) => t.json().then((n) => n.data))
      .catch((t) => (console.error("Error in fetch fleet request", t), t)),
  iC = (e) =>
    fetch("https://api.spacetraders.io/v2/my/contracts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((t) => t.json().then((n) => n.data))
      .catch((t) => (console.error("Error in fetch contracts request", t), t)),
  lC = (e, t) =>
    fetch(`https://api.spacetraders.io/v2/systems/${t}/waypoints`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((n) => n.json().then((r) => r.data))
      .catch((n) => (console.error("Error in fetch waypoints", n), n)),
  aC = (e, t, n) =>
    fetch(
      `https://api.spacetraders.io/v2/systems/${t}/waypoints/${n}/shipyard`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`,
        },
      }
    )
      .then((r) => r.json().then((o) => o.data))
      .catch((r) => (console.error("Error in fetch shipyard", r), r)),
  uC = (e, t) =>
    fetch(`https://api.spacetraders.io/v2/my/contracts/${t}/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((n) => n.json().then((r) => r.data))
      .catch((n) => (console.error("Error in fetch contracts request", n), n)),
  sC = (e, t, n) =>
    fetch("https://api.spacetraders.io/v2/my/ships", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
      body: JSON.stringify({ shipType: t, waypointSymbol: n }),
    })
      .then((r) => r.json().then((o) => o.data))
      .catch((r) => (console.error("Error in buy ship request", r), r)),
  cC = (e, t) =>
    fetch(`https://api.spacetraders.io/v2/my/ships/${t}/orbit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((n) => n.json().then((r) => r.data))
      .catch(
        (n) => (console.error("Error in launch ship into orbit request", n), n)
      ),
  fC = (e, t, n) =>
    fetch(`https://api.spacetraders.io/v2/my/ships/${t}/navigate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
      body: JSON.stringify({ waypointSymbol: n }),
    })
      .then((r) => r.json().then((o) => o.data))
      .catch(
        (r) => (console.error("Error in send ship to waypoint request", r), r)
      ),
  dC = (e, t) =>
    fetch(`https://api.spacetraders.io/v2/my/ships/${t}/dock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`,
      },
    })
      .then((n) => n.json().then((r) => r.data))
      .catch((n) => (console.error("Error in dock ship request", n), n)),
  pC = (e, t) =>
    fetch("https://api.spacetraders.io/v2/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol: e, faction: t }),
    }),
  ai = () =>
    (typeof window < "u" && window.localStorage.getItem("agent-token")) ||
    "error",
  zt = { small: "5px", medium: "10px", large: "20px" },
  $p = ne.div`
  padding: ${zt.medium};
  border: solid 2px ${(e) => e.colour};
  margin: ${zt.large} 0;
`,
  hC = ({ waypoint: e, setRefreshFleet: t }) => {
    const [n, r] = y.useState(),
      [o, i] = y.useState(""),
      [l, a] = y.useState(!1);
    y.useEffect(() => {
      i(ai());
    }, []);
    const u = async () => {
      const s = await aC(o, e.systemSymbol, e.symbol);
      r(s);
    };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(He, {
          primary: !0,
          label: l ? "Hide ships" : "Show ships",
          onClick: () => {
            !l && !n && u(), a(!l);
          },
        }),
        n &&
          l &&
          S.jsxs($p, {
            colour: "purple",
            children: [
              S.jsxs("h3", { children: ["Shipyard ", n.symbol] }),
              S.jsxs("p", {
                children: [
                  S.jsx("b", { children: "Ship types for sale:" }),
                  " ",
                  n.shipTypes.map((s) => s.type).join(", "),
                ],
              }),
              S.jsx("b", { children: "Ships:" }),
              " ",
              n.ships.map((s) =>
                S.jsxs($p, {
                  colour: "white",
                  children: [
                    S.jsxs("p", {
                      children: [
                        S.jsx("b", { children: "Name:" }),
                        " ",
                        s.name,
                      ],
                    }),
                    S.jsxs("p", {
                      children: [
                        S.jsx("b", { children: "Type:" }),
                        " ",
                        s.type,
                      ],
                    }),
                    S.jsxs("p", {
                      children: [
                        S.jsx("b", { children: "Price:" }),
                        " ",
                        s.purchasePrice,
                      ],
                    }),
                    S.jsx("p", {
                      children: "TODO: Add more info to these ships",
                    }),
                    S.jsx(He, {
                      primary: !0,
                      label: "Buy",
                      onClick: async () => {
                        (await ay(o)).credits < s.purchasePrice
                          ? alert(
                              "You do not have enough credits to buy this ship"
                            )
                          : (await sC(o, s.type, e.symbol),
                            alert(
                              "Ship purchased. You can now view it in your fleet."
                            ),
                            t(`Bought ${s.name}`));
                      },
                    }),
                  ],
                })
              ),
            ],
          }),
      ],
    });
  },
  vC = ne.div`
  padding: ${zt.medium};
  border: solid 2px green;
  margin: ${zt.large} 0;
`,
  mC = ({ waypoint: e, setRefreshFleet: t, ship: n, token: r }) =>
    S.jsxs(vC, {
      children: [
        S.jsxs("h3", { children: ["Waypoint ", e.symbol] }),
        S.jsxs("p", {
          children: [S.jsx("b", { children: "Type:" }), " ", e.type],
        }),
        S.jsxs("p", {
          children: [
            S.jsx("b", { children: "Position:" }),
            " X: ",
            e.x,
            ", Y: ",
            e.y,
          ],
        }),
        S.jsx("b", { children: "Traits:" }),
        " ",
        e.traits.map((o, i) =>
          S.jsxs(
            "div",
            {
              children: [
                S.jsxs("p", {
                  children: [
                    S.jsxs("b", { children: [o.name, ":"] }),
                    " ",
                    o.description,
                  ],
                }),
                o.name === "Shipyard" &&
                  S.jsx(hC, { setRefreshFleet: t, waypoint: e }),
              ],
            },
            i
          )
        ),
        n.nav.status === "DOCKED" &&
          S.jsxs("p", {
            style: { color: "red" },
            children: [
              S.jsx("b", { children: "Note:" }),
              " To travel to this waypoint you must first launch your ship into orbit.",
            ],
          }),
        n.nav.status === "IN_TRANSIT" &&
          S.jsxs("p", {
            style: { color: "red" },
            children: [
              S.jsx("b", { children: "Note:" }),
              " Ship is currently in transit.",
            ],
          }),
        n.nav.status === "IN_ORBIT" &&
          S.jsx(He, {
            primary: !0,
            label: "Travel to waypoint",
            onClick: async () => {
              await fC(r, n.symbol, e.symbol),
                t(`Sending ${n.symbol} to ${e.symbol}`);
            },
          }),
      ],
    }),
  gC = ({ ship: e, setRefreshFleet: t }) => {
    const [n, r] = y.useState(),
      [o, i] = y.useState("");
    y.useEffect(() => {
      i(ai());
    }, []);
    const l = async () => {
      const a = await lC(o, e.nav.systemSymbol);
      r(a);
    };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx(He, {
          primary: !0,
          label: "Scan for waypoints",
          onClick: () => l(),
        }),
        n &&
          n.length > 0 &&
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(He, {
                primary: !0,
                label: "Hide waypoints",
                onClick: () => r([]),
                style: { marginLeft: zt.medium },
              }),
              n.map((a, u) =>
                S.jsx(
                  mC,
                  { setRefreshFleet: t, waypoint: a, ship: e, token: o },
                  u
                )
              ),
            ],
          }),
      ],
    });
  },
  yC = ne.div`
  margin: ${zt.large} 0;
`,
  xC = ({ ship: e, setRefreshFleet: t }) => {
    const [n, r] = y.useState("");
    return (
      y.useEffect(() => {
        r(ai());
      }, []),
      S.jsxs(yC, {
        children: [
          e.nav.status === "DOCKED" &&
            S.jsx(He, {
              primary: !0,
              label: "Launch into orbit",
              onClick: async () => {
                await cC(n, e.symbol), t(`Launch ${e.symbol} into orbit`);
              },
            }),
          e.nav.status === "IN_ORBIT" &&
            S.jsx(He, {
              primary: !0,
              label: "Dock ship",
              onClick: async () => {
                await dC(n, e.symbol), t(`Docking ${e.symbol}`);
              },
            }),
        ],
      })
    );
  },
  wC = ne.div`
  padding: ${zt.large};
  border: solid 2px;
  margin-bottom: ${zt.large};
`,
  SC = ({ ship: e, setRefreshFleet: t }) =>
    S.jsxs(wC, {
      children: [
        S.jsx("h3", { children: e.symbol }),
        S.jsxs("p", {
          children: [S.jsx("b", { children: "Name:" }), " ", e.frame.name],
        }),
        S.jsxs("p", {
          children: [
            S.jsx("b", { children: "Description:" }),
            " ",
            e.frame.description,
          ],
        }),
        S.jsxs("p", {
          children: [
            S.jsx("b", { children: "Condition:" }),
            " ",
            e.frame.condition,
          ],
        }),
        S.jsxs("p", {
          children: [
            S.jsx("b", { children: "Current location:" }),
            " System: ",
            e.nav.systemSymbol,
            ", Waypoint:",
            " ",
            e.nav.waypointSymbol,
          ],
        }),
        S.jsxs("p", {
          children: [S.jsx("b", { children: "Status:" }), " ", e.nav.status],
        }),
        S.jsx(kf, {
          children: S.jsx(ha, {
            label: "Cargo",
            children: S.jsxs(fe, {
              pad: "medium",
              children: [
                S.jsxs("p", {
                  children: [
                    S.jsx("b", { children: "Capacity:" }),
                    " ",
                    e.cargo.capacity,
                  ],
                }),
                S.jsxs("p", {
                  children: [
                    S.jsx("b", { children: "Inventory:" }),
                    " ",
                    e.cargo.inventory.length > 0
                      ? e.cargo.inventory.join(",")
                      : "Empty",
                  ],
                }),
                S.jsxs("p", {
                  children: [
                    S.jsx("b", { children: "Units:" }),
                    " ",
                    e.cargo.units,
                  ],
                }),
              ],
            }),
          }),
        }),
        S.jsx("p", { children: "TODO: Add more ship info to this component" }),
        S.jsx("h3", { children: "Ship control panel" }),
        S.jsx(xC, { setRefreshFleet: t, ship: e }),
        S.jsx(gC, { setRefreshFleet: t, ship: e }),
      ],
    }),
  kC = () => {
    const [e, t] = y.useState(),
      [n, r] = y.useState(""),
      [o, i] = y.useState("");
    return (
      y.useEffect(() => {
        r(ai());
      }, []),
      y.useEffect(() => {
        (async () => {
          const a = await oC(n);
          a && t(a);
        })();
      }, [n, o]),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx("h2", { children: "Fleet" }),
          e && e.map((l, a) => S.jsx(SC, { ship: l, setRefreshFleet: i }, a)),
          S.jsx("p", { children: "TODO: Implement more fleet info" }),
        ],
      })
    );
  },
  Mp = ne.div`
  padding: ${zt.medium};
  border: solid 2px ${(e) => e.colour};
  margin-bottom: ${zt.large};
`,
  Ou = ({ contract: e, token: t, reload: n, setReload: r, colour: o }) => {
    const [i, l] = y.useState(!1);
    return (
      y.useEffect(() => {
        const a = new Date(),
          u = new Date(e.deadlineToAccept);
        l(u < a);
      }, [e]),
      S.jsxs(Mp, {
        colour: o,
        children: [
          S.jsxs("h3", { children: ["Contract type: ", e.type] }),
          e.terms.deliver.map((a) =>
            S.jsxs(Mp, {
              colour: a.unitsFulfilled >= a.unitsRequired ? "green" : "red",
              children: [
                S.jsxs("p", {
                  children: [
                    "You must deliver ",
                    S.jsx("b", { children: a.unitsRequired }),
                    " units of",
                    " ",
                    S.jsx("b", { children: a.tradeSymbol }),
                    " to ",
                    S.jsx("b", { children: a.destinationSymbol }),
                    ".",
                  ],
                }),
                S.jsxs("p", {
                  children: [
                    S.jsx("b", { children: "Progress:" }),
                    " ",
                    a.unitsFulfilled,
                    "/",
                    a.unitsRequired,
                    " ",
                    "delivered.",
                  ],
                }),
              ],
            })
          ),
          S.jsxs("p", {
            children: [
              S.jsx("b", { children: "Expiration:" }),
              " ",
              new Date(e.deadlineToAccept).toLocaleTimeString("en-GB"),
              " on",
              " ",
              new Date(e.deadlineToAccept).toLocaleDateString("en-GB"),
            ],
          }),
          S.jsxs("p", {
            children: [
              S.jsx("b", { children: "Deadline to accept:" }),
              " ",
              new Date(e.deadlineToAccept).toLocaleTimeString("en-GB"),
              " on",
              " ",
              new Date(e.deadlineToAccept).toLocaleDateString("en-GB"),
            ],
          }),
          S.jsx(kf, {
            children: S.jsx(ha, {
              label: "Terms",
              children: S.jsxs(fe, {
                pad: "medium",
                children: [
                  S.jsxs("p", {
                    children: [
                      S.jsx("b", { children: "Deadline:" }),
                      " ",
                      new Date(e.terms.deadline).toLocaleTimeString("en-GB"),
                      " on",
                      " ",
                      new Date(e.terms.deadline).toLocaleDateString("en-GB"),
                    ],
                  }),
                  S.jsxs("p", {
                    children: [
                      S.jsx("b", { children: "Payment:" }),
                      " On acceptance: ",
                      e.terms.payment.onAccepted,
                      ", On delivery: ",
                      e.terms.payment.onFulfilled,
                    ],
                  }),
                ],
              }),
            }),
          }),
          !e.accepted &&
            S.jsx(He, {
              label: i ? "Expired" : "Accept contract ",
              active: i,
              primary: !0,
              style: { margin: `${zt.large} 0` },
              onClick: () => {
                i ||
                  uC(t, e.id).then(() => {
                    r(n + 1);
                  });
              },
            }),
        ],
      })
    );
  },
  OC = () => {
    const [e, t] = y.useState(0),
      [n, r] = y.useState(),
      [o, i] = y.useState(),
      [l, a] = y.useState(),
      [u, s] = y.useState("");
    return (
      y.useEffect(() => {
        s(ai());
      }, []),
      y.useEffect(() => {
        (async () => {
          const c = await iC(u);
          c &&
            (i(c.filter((d) => d.accepted)),
            r(
              c.filter(
                (d) => !d.accepted && new Date(d.deadlineToAccept) > new Date()
              )
            ),
            a(c.filter((d) => d.fulfilled)));
        })();
      }, [u, e]),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx("h2", { children: "Accepted contracts" }),
          o &&
            o.map((f, c) =>
              S.jsx(
                Ou,
                {
                  colour: "green",
                  contract: f,
                  token: u,
                  reload: e,
                  setReload: t,
                },
                c
              )
            ),
          S.jsx("h2", { children: "Available contracts" }),
          n
            ? n.map((f, c) =>
                S.jsx(
                  Ou,
                  {
                    colour: "blue",
                    contract: f,
                    token: u,
                    reload: e,
                    setReload: t,
                  },
                  c
                )
              )
            : S.jsx("p", { children: "No contracts available" }),
          S.jsx("h2", { children: "Completed contracts" }),
          l &&
            l.map((f, c) =>
              S.jsx(
                Ou,
                {
                  colour: "white",
                  contract: f,
                  token: u,
                  reload: e,
                  setReload: t,
                },
                c
              )
            ),
          S.jsx("p", { children: "TODO: Implement more contract info" }),
        ],
      })
    );
  },
  CC = ne.div`
  width: auto;
  @media (min-width: 500px) {
    width: 400px;
  }
  @media (min-width: 1000px) {
    width: 900px;
  }
`,
  PC = ne.div`
  display: flex;
  justify-content: space-between;
`,
  bC = ({ agentData: e }) => {
    const [t, n] = y.useState(!1),
      [r, o] = y.useState(!1),
      [i, l] = y.useState(!1),
      [a, u] = y.useState(!1),
      s = () => {
        n(!1), o(!1), l(!1), u(!1);
      };
    return S.jsxs(CC, {
      children: [
        S.jsx("h1", { style: { paddingBottom: zt.large }, children: "Agent" }),
        S.jsx(fe, {
          direction: "row",
          gap: "small",
          children: S.jsx(iy, { src: rC }),
        }),
        S.jsx(fo, { label: "Account ID", value: e.accountId }),
        S.jsx(fo, { label: "Call sign", value: e.symbol }),
        S.jsx(fo, { label: "Credits", value: e.credits.toString() }),
        S.jsx(fo, { label: "HQ", value: e.headquarters }),
        S.jsx(fo, { label: "Faction", value: e.startingFaction }),
        S.jsx("p", {
          children:
            "Select a ship from your fleet and embark to start exploring space.",
        }),
        S.jsxs(PC, {
          children: [
            S.jsx(He, {
              onClick: () => {
                s(), l(!i);
              },
              primary: i,
              label: "Fleet",
              style: { color: "white" },
            }),
            S.jsx(He, {
              onClick: () => {
                s(), n(!t);
              },
              primary: t,
              label: "Contracts",
              style: { color: "white" },
            }),
            S.jsx(He, {
              onClick: () => {
                s(), o(!r);
              },
              primary: r,
              label: "Factions",
              style: { color: "white" },
            }),
            S.jsx(He, {
              onClick: () => {
                s(), u(!a);
              },
              primary: a,
              label: "Systems",
              style: { color: "white" },
            }),
          ],
        }),
        i && S.jsx(kC, {}),
        t && S.jsx(OC, {}),
        r && S.jsx("p", { children: "TODO: Implement factions component" }),
        a && S.jsx("p", { children: "TODO: Implement systems component" }),
      ],
    });
  };
function EC({ setAgentData: e, setToken: t, setShowAgentData: n }) {
  const [r, o] = y.useState({ symbol: "", faction: "COSMIC" }),
    [i, l] = y.useState(""),
    [a, u] = y.useState(""),
    [s, f] = y.useState(""),
    [c, d] = y.useState("");
  return (
    y.useEffect(() => {
      const m = async (x) => {
          const O = await ay(x);
          O && (e(O), n(!0));
        },
        g = window.localStorage.getItem("agent-token");
      g && typeof g == "string" && (l(g), t(g), m(g));
    }, [i, t, e, n]),
    S.jsxs(S.Fragment, {
      children: [
        S.jsx("div", {
          className: "typewriter",
          children: S.jsx("h1", { children: "Greetings space explorer." }),
        }),
        i
          ? S.jsxs(S.Fragment, {
              children: [
                S.jsx("p", {
                  children:
                    "It looks like your adventure has already started. Click the button below to resume. Or if you'd like to create a new agent fill in the form below.",
                }),
                s &&
                  S.jsxs(S.Fragment, {
                    children: [
                      S.jsx("p", {
                        style: { color: "red" },
                        children: "There was an error loading your agent:",
                      }),
                      S.jsx("p", { style: { color: "red" }, children: a }),
                    ],
                  }),
                S.jsx(He, {
                  style: { float: "right" },
                  label: "Load existing agent",
                  primary: !0,
                  onClick: async () => {
                    const m = await fetch(
                        "https://api.spacetraders.io/v2/my/agent",
                        {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${i}`,
                          },
                        }
                      ),
                      g = await m.json();
                    g.error
                      ? f(g.error.message)
                      : m.ok && g.data.accountId
                      ? (e(g.data), n(!0))
                      : f("Could not find token on response");
                  },
                }),
              ],
            })
          : S.jsxs(S.Fragment, {
              children: [
                S.jsx("p", { children: "It looks like you're new here." }),
                S.jsx("p", {
                  children:
                    "To begin your adventure enter your callsign below and your agent will be created.",
                }),
                S.jsx("p", {
                  children:
                    "Your progress will be saved in local storage, meaning you can return to the same game once started as long as you are playing on the same device.",
                }),
              ],
            }),
        S.jsx("h2", { children: "Create new agent:" }),
        S.jsx("h3", { children: "Call sign:" }),
        S.jsx(Rl, {
          placeholder: "Enter call sign",
          value: r.symbol,
          onChange: (m) => o({ ...r, symbol: m.currentTarget.value }),
        }),
        c && S.jsx("p", { style: { color: "red" }, children: c }),
        S.jsx("h3", { children: "Faction:" }),
        S.jsx(Rl, {
          placeholder: "",
          value: r.faction,
          onChange: (m) => o({ ...r, faction: m.currentTarget.value }),
        }),
        S.jsx("br", {}),
        a &&
          S.jsxs(S.Fragment, {
            children: [
              S.jsx("p", {
                style: { color: "red" },
                children: "There was an error creating your agent:",
              }),
              S.jsx("p", { style: { color: "red" }, children: a }),
            ],
          }),
        S.jsx(He, {
          style: { float: "right" },
          label: "Begin your journey",
          primary: !0,
          onClick: async () => {
            if (!r.symbol) return d("You must enter a call sign");
            const m = await pC(r.symbol, r.faction),
              g = await m.json();
            g.error
              ? u(g.error.message)
              : m.ok && g.data.token
              ? (t(g.data.token),
                e(g.data.agent),
                n(!0),
                window.localStorage.setItem("agent-token", g.data.token))
              : f("Could not find token on response");
          },
        }),
      ],
    })
  );
}
const zC = () => {
  const [e, t] = y.useState(),
    [n, r] = y.useState(""),
    [o, i] = y.useState(!1);
  return S.jsxs(S.Fragment, {
    children: [
      (!e || !n) &&
        !o &&
        S.jsx(EC, { setAgentData: t, setToken: r, setShowAgentData: i }),
      e &&
        o &&
        n &&
        S.jsx(S.Fragment, {
          children: S.jsx(S.Fragment, {
            children: S.jsx(bC, { agentData: e }),
          }),
        }),
    ],
  });
};
function TC() {
  return S.jsx(S.Fragment, { children: S.jsx(zC, {}) });
}
Cu.createRoot(document.getElementById("root")).render(
  S.jsx(E.StrictMode, { children: S.jsx(TC, {}) })
);
