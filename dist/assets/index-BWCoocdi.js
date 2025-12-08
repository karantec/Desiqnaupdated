const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/page-KWEBXt5P.js",
      "assets/page-LhAKExxz.css",
      "assets/page-omXMZZXZ.js",
      "assets/page-O-0nzL2W.js",
    ])
) => i.map((i) => d[i]);
function cd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rs = { exports: {} },
  Ao = {},
  Ks = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mr = Symbol.for("react.element"),
  fd = Symbol.for("react.portal"),
  md = Symbol.for("react.fragment"),
  pd = Symbol.for("react.strict_mode"),
  hd = Symbol.for("react.profiler"),
  gd = Symbol.for("react.provider"),
  vd = Symbol.for("react.context"),
  yd = Symbol.for("react.forward_ref"),
  xd = Symbol.for("react.suspense"),
  wd = Symbol.for("react.memo"),
  Sd = Symbol.for("react.lazy"),
  pa = Symbol.iterator;
function jd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pa && e[pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bs = Object.assign,
  Us = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Us),
    (this.updater = n || Gs);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Hs() {}
Hs.prototype = wn.prototype;
function vi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Us),
    (this.updater = n || Gs);
}
var yi = (vi.prototype = new Hs());
yi.constructor = vi;
Bs(yi, wn.prototype);
yi.isPureReactComponent = !0;
var ha = Array.isArray,
  Ws = Object.prototype.hasOwnProperty,
  xi = { current: null },
  Vs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qs(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ws.call(t, r) && !Vs.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: mr,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: xi.current,
  };
}
function Nd(e, t) {
  return {
    $$typeof: mr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function kd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ga = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kd("" + e.key)
    : t.toString(36);
}
function Mr(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case mr:
          case fd:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + Wo(a, 0) : r),
      ha(o)
        ? ((n = ""),
          e != null && (n = e.replace(ga, "$&/") + "/"),
          Mr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (wi(o) &&
            (o = Nd(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ga, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ha(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + Wo(l, s);
      a += Mr(l, t, n, u, o);
    }
  else if (((u = jd(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + Wo(l, s++)), (a += Mr(l, t, n, u, o));
  else if (l === "object")
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
  return a;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Mr(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Ad(e) {
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
var ce = { current: null },
  Rr = { transition: null },
  Cd = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Rr,
    ReactCurrentOwner: xi,
  };
function $s() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
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
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = wn;
T.Fragment = md;
T.Profiler = hd;
T.PureComponent = vi;
T.StrictMode = pd;
T.Suspense = xd;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
T.act = $s;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bs({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = xi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Ws.call(t, u) &&
        !Vs.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: mr, type: e.type, key: o, ref: l, props: r, _owner: a };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: vd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gd, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = Qs;
T.createFactory = function (e) {
  var t = Qs.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: yd, render: e };
};
T.isValidElement = wi;
T.lazy = function (e) {
  return { $$typeof: Sd, _payload: { _status: -1, _result: e }, _init: Ad };
};
T.memo = function (e, t) {
  return { $$typeof: wd, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Rr.transition;
  Rr.transition = {};
  try {
    e();
  } finally {
    Rr.transition = t;
  }
};
T.unstable_act = $s;
T.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ce.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
T.useId = function () {
  return ce.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ce.current.useRef(e);
};
T.useState = function (e) {
  return ce.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ce.current.useTransition();
};
T.version = "18.3.1";
Ks.exports = T;
var N = Ks.exports;
const Ue = dd(N),
  bd = cd({ __proto__: null, default: Ue }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pd = N,
  Ed = Symbol.for("react.element"),
  _d = Symbol.for("react.fragment"),
  Ld = Object.prototype.hasOwnProperty,
  Od = Pd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function qs(e, t, n) {
  var r,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Ld.call(t, r) && !Dd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ed,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Od.current,
  };
}
Ao.Fragment = _d;
Ao.jsx = qs;
Ao.jsxs = qs;
Rs.exports = Ao;
var i = Rs.exports,
  xl = {},
  Ys = { exports: {} },
  Ne = {},
  Js = { exports: {} },
  Zs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var O = C.length;
    C.push(L);
    e: for (; 0 < O; ) {
      var K = (O - 1) >>> 1,
        $ = C[K];
      if (0 < o($, L)) (C[K] = L), (C[O] = $), (O = K);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      O = C.pop();
    if (O !== L) {
      C[0] = O;
      e: for (var K = 0, $ = C.length, Ht = $ >>> 1; K < Ht; ) {
        var Ve = 2 * (K + 1) - 1,
          Cn = C[Ve],
          Qe = Ve + 1,
          Wt = C[Qe];
        if (0 > o(Cn, O))
          Qe < $ && 0 > o(Wt, Cn)
            ? ((C[K] = Wt), (C[Qe] = O), (K = Qe))
            : ((C[K] = Cn), (C[Ve] = O), (K = Ve));
        else if (Qe < $ && 0 > o(Wt, O)) (C[K] = Wt), (C[Qe] = O), (K = Qe);
        else break e;
      }
    }
    return L;
  }
  function o(C, L) {
    var O = C.sortIndex - L.sortIndex;
    return O !== 0 ? O : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var u = [],
    c = [],
    g = 1,
    p = null,
    v = 3,
    x = !1,
    y = !1,
    w = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C)
        r(c), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(c);
    }
  }
  function S(C) {
    if (((w = !1), h(C), !y))
      if (n(u) !== null) (y = !0), kn(k);
      else {
        var L = n(c);
        L !== null && An(S, L.startTime - C);
      }
  }
  function k(C, L) {
    (y = !1), w && ((w = !1), f(_), (_ = -1)), (x = !0);
    var O = v;
    try {
      for (
        h(L), p = n(u);
        p !== null && (!(p.expirationTime > L) || (C && !ye()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (v = p.priorityLevel);
          var $ = K(p.expirationTime <= L);
          (L = e.unstable_now()),
            typeof $ == "function" ? (p.callback = $) : p === n(u) && r(u),
            h(L);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Ht = !0;
      else {
        var Ve = n(c);
        Ve !== null && An(S, Ve.startTime - L), (Ht = !1);
      }
      return Ht;
    } finally {
      (p = null), (v = O), (x = !1);
    }
  }
  var P = !1,
    E = null,
    _ = -1,
    B = 5,
    D = -1;
  function ye() {
    return !(e.unstable_now() - D < B);
  }
  function Ct() {
    if (E !== null) {
      var C = e.unstable_now();
      D = C;
      var L = !0;
      try {
        L = E(!0, C);
      } finally {
        L ? bt() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var bt;
  if (typeof d == "function")
    bt = function () {
      d(Ct);
    };
  else if (typeof MessageChannel < "u") {
    var xr = new MessageChannel(),
      Ho = xr.port2;
    (xr.port1.onmessage = Ct),
      (bt = function () {
        Ho.postMessage(null);
      });
  } else
    bt = function () {
      A(Ct, 0);
    };
  function kn(C) {
    (E = C), P || ((P = !0), bt());
  }
  function An(C, L) {
    _ = A(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), kn(k));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var O = v;
      v = L;
      try {
        return C();
      } finally {
        v = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var O = v;
      v = C;
      try {
        return L();
      } finally {
        v = O;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, O) {
      var K = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? K + O : K))
          : (O = K),
        C)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = O + $),
        (C = {
          id: g++,
          callback: L,
          priorityLevel: C,
          startTime: O,
          expirationTime: $,
          sortIndex: -1,
        }),
        O > K
          ? ((C.sortIndex = O),
            t(c, C),
            n(u) === null &&
              C === n(c) &&
              (w ? (f(_), (_ = -1)) : (w = !0), An(S, O - K)))
          : ((C.sortIndex = $), t(u, C), y || x || ((y = !0), kn(k))),
        C
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (C) {
      var L = v;
      return function () {
        var O = v;
        v = L;
        try {
          return C.apply(this, arguments);
        } finally {
          v = O;
        }
      };
    });
})(Zs);
Js.exports = Zs;
var Td = Js.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = N,
  je = Td;
function j(e) {
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
var Xs = new Set(),
  $n = {};
function Kt(e, t) {
  mn(e, t), mn(e + "Capture", t);
}
function mn(e, t) {
  for ($n[e] = t, e = 0; e < t.length; e++) Xs.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wl = Object.prototype.hasOwnProperty,
  Id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  va = {},
  ya = {};
function zd(e) {
  return wl.call(ya, e)
    ? !0
    : wl.call(va, e)
    ? !1
    : Id.test(e)
    ? (ya[e] = !0)
    : ((va[e] = !0), !1);
}
function Md(e, t, n, r) {
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
function Rd(e, t, n, r) {
  if (t === null || typeof t > "u" || Md(e, t, n, r)) return !0;
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
function de(e, t, n, r, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Si = /[\-:]([a-z])/g;
function ji(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Si, ji);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Si, ji);
    re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Si, ji);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ni(e, t, n, r) {
  var o = re.hasOwnProperty(t) ? re[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rd(t, n, o, r) && (n = null),
    r || o === null
      ? zd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var rt = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Sr = Symbol.for("react.element"),
  $t = Symbol.for("react.portal"),
  qt = Symbol.for("react.fragment"),
  ki = Symbol.for("react.strict_mode"),
  Sl = Symbol.for("react.profiler"),
  eu = Symbol.for("react.provider"),
  tu = Symbol.for("react.context"),
  Ai = Symbol.for("react.forward_ref"),
  jl = Symbol.for("react.suspense"),
  Nl = Symbol.for("react.suspense_list"),
  Ci = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  nu = Symbol.for("react.offscreen"),
  xa = Symbol.iterator;
function bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Vo;
function Fn(e) {
  if (Vo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vo = (t && t[1]) || "";
    }
  return (
    `
` +
    Vo +
    e
  );
}
var Qo = !1;
function $o(e, t) {
  if (!e || Qo) return "";
  Qo = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          l = r.stack.split(`
`),
          a = o.length - 1,
          s = l.length - 1;
        1 <= a && 0 <= s && o[a] !== l[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== l[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== l[s])) {
                var u =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Qo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Kd(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $o(e.type, !1)), e;
    case 11:
      return (e = $o(e.type.render, !1)), e;
    case 1:
      return (e = $o(e.type, !0)), e;
    default:
      return "";
  }
}
function kl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qt:
      return "Fragment";
    case $t:
      return "Portal";
    case Sl:
      return "Profiler";
    case ki:
      return "StrictMode";
    case jl:
      return "Suspense";
    case Nl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tu:
        return (e.displayName || "Context") + ".Consumer";
      case eu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ai:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ci:
        return (
          (t = e.displayName || null), t !== null ? t : kl(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return kl(e(t));
        } catch {}
    }
  return null;
}
function Gd(e) {
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
      return kl(t);
    case 8:
      return t === ki ? "StrictMode" : "Mode";
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
function St(e) {
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
function ru(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Bd(e) {
  var t = ru(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function jr(e) {
  e._valueTracker || (e._valueTracker = Bd(e));
}
function ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ru(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lu(e, t) {
  (t = t.checked), t != null && Ni(e, "checked", t, !1);
}
function Cl(e, t) {
  lu(e, t);
  var n = St(t.value),
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
    ? bl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bl(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sa(e, t, n) {
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
function bl(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function an(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Pl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (In(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function iu(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function au(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? au(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Nr,
  su = (function (e) {
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
        Nr = Nr || document.createElement("div"),
          Nr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Nr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
  Ud = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  Ud.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function uu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function cu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = uu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Hd = W(
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
function _l(e, t) {
  if (t) {
    if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Ll(e, t) {
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
var Ol = null;
function bi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Dl = null,
  sn = null,
  un = null;
function ka(e) {
  if ((e = gr(e))) {
    if (typeof Dl != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = _o(t)), Dl(e.stateNode, e.type, t));
  }
}
function du(e) {
  sn ? (un ? un.push(e) : (un = [e])) : (sn = e);
}
function fu() {
  if (sn) {
    var e = sn,
      t = un;
    if (((un = sn = null), ka(e), t)) for (e = 0; e < t.length; e++) ka(t[e]);
  }
}
function mu(e, t) {
  return e(t);
}
function pu() {}
var qo = !1;
function hu(e, t, n) {
  if (qo) return e(t, n);
  qo = !0;
  try {
    return mu(e, t, n);
  } finally {
    (qo = !1), (sn !== null || un !== null) && (pu(), fu());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _o(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Tl = !1;
if (Xe)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        Tl = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    Tl = !1;
  }
function Wd(e, t, n, r, o, l, a, s, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var Kn = !1,
  Jr = null,
  Zr = !1,
  Fl = null,
  Vd = {
    onError: function (e) {
      (Kn = !0), (Jr = e);
    },
  };
function Qd(e, t, n, r, o, l, a, s, u) {
  (Kn = !1), (Jr = null), Wd.apply(Vd, arguments);
}
function $d(e, t, n, r, o, l, a, s, u) {
  if ((Qd.apply(this, arguments), Kn)) {
    if (Kn) {
      var c = Jr;
      (Kn = !1), (Jr = null);
    } else throw Error(j(198));
    Zr || ((Zr = !0), (Fl = c));
  }
}
function Gt(e) {
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
function gu(e) {
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
function Aa(e) {
  if (Gt(e) !== e) throw Error(j(188));
}
function qd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Gt(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Aa(o), e;
        if (l === r) return Aa(o), t;
        l = l.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === n) {
          (a = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (a = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = l.child; s; ) {
          if (s === n) {
            (a = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (a = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function vu(e) {
  return (e = qd(e)), e !== null ? yu(e) : null;
}
function yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var xu = je.unstable_scheduleCallback,
  Ca = je.unstable_cancelCallback,
  Yd = je.unstable_shouldYield,
  Jd = je.unstable_requestPaint,
  Q = je.unstable_now,
  Zd = je.unstable_getCurrentPriorityLevel,
  Pi = je.unstable_ImmediatePriority,
  wu = je.unstable_UserBlockingPriority,
  Xr = je.unstable_NormalPriority,
  Xd = je.unstable_LowPriority,
  Su = je.unstable_IdlePriority,
  Co = null,
  He = null;
function ef(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(Co, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ze = Math.clz32 ? Math.clz32 : rf,
  tf = Math.log,
  nf = Math.LN2;
function rf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((tf(e) / nf) | 0)) | 0;
}
var kr = 64,
  Ar = 4194304;
function zn(e) {
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
function eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (r = zn(s)) : ((l &= a), l !== 0 && (r = zn(l)));
  } else (a = n & ~o), a !== 0 ? (r = zn(a)) : l !== 0 && (r = zn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ze(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function of(e, t) {
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
function lf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - ze(l),
      s = 1 << a,
      u = o[a];
    u === -1
      ? (!(s & n) || s & r) && (o[a] = of(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Il(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ju() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function pr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ze(t)),
    (e[t] = n);
}
function af(e, t) {
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
    var o = 31 - ze(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ei(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ze(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var I = 0;
function Nu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ku,
  _i,
  Au,
  Cu,
  bu,
  zl = !1,
  Cr = [],
  ft = null,
  mt = null,
  pt = null,
  Jn = new Map(),
  Zn = new Map(),
  at = [],
  sf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function En(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = gr(t)), t !== null && _i(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function uf(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ft = En(ft, e, t, n, r, o)), !0;
    case "dragenter":
      return (mt = En(mt, e, t, n, r, o)), !0;
    case "mouseover":
      return (pt = En(pt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Jn.set(l, En(Jn.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Zn.set(l, En(Zn.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Pu(e) {
  var t = _t(e.target);
  if (t !== null) {
    var n = Gt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gu(n)), t !== null)) {
          (e.blockedOn = t),
            bu(e.priority, function () {
              Au(n);
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
function Kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ml(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ol = r), n.target.dispatchEvent(r), (Ol = null);
    } else return (t = gr(n)), t !== null && _i(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Pa(e, t, n) {
  Kr(e) && n.delete(t);
}
function cf() {
  (zl = !1),
    ft !== null && Kr(ft) && (ft = null),
    mt !== null && Kr(mt) && (mt = null),
    pt !== null && Kr(pt) && (pt = null),
    Jn.forEach(Pa),
    Zn.forEach(Pa);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zl ||
      ((zl = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, cf)));
}
function Xn(e) {
  function t(o) {
    return _n(o, e);
  }
  if (0 < Cr.length) {
    _n(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && _n(ft, e),
      mt !== null && _n(mt, e),
      pt !== null && _n(pt, e),
      Jn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    (r = at[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    Pu(n), n.blockedOn === null && at.shift();
}
var cn = rt.ReactCurrentBatchConfig,
  to = !0;
function df(e, t, n, r) {
  var o = I,
    l = cn.transition;
  cn.transition = null;
  try {
    (I = 1), Li(e, t, n, r);
  } finally {
    (I = o), (cn.transition = l);
  }
}
function ff(e, t, n, r) {
  var o = I,
    l = cn.transition;
  cn.transition = null;
  try {
    (I = 4), Li(e, t, n, r);
  } finally {
    (I = o), (cn.transition = l);
  }
}
function Li(e, t, n, r) {
  if (to) {
    var o = Ml(e, t, n, r);
    if (o === null) il(e, t, r, no, n), ba(e, r);
    else if (uf(o, e, t, n, r)) r.stopPropagation();
    else if ((ba(e, r), t & 4 && -1 < sf.indexOf(e))) {
      for (; o !== null; ) {
        var l = gr(o);
        if (
          (l !== null && ku(l),
          (l = Ml(e, t, n, r)),
          l === null && il(e, t, r, no, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else il(e, t, r, null, n);
  }
}
var no = null;
function Ml(e, t, n, r) {
  if (((no = null), (e = bi(r)), (e = _t(e)), e !== null))
    if (((t = Gt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (no = e), null;
}
function Eu(e) {
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
      switch (Zd()) {
        case Pi:
          return 1;
        case wu:
          return 4;
        case Xr:
        case Xd:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null,
  Oi = null,
  Gr = null;
function _u() {
  if (Gr) return Gr;
  var e,
    t = Oi,
    n = t.length,
    r,
    o = "value" in ut ? ut.value : ut.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[l - r]; r++);
  return (Gr = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Br(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function br() {
  return !0;
}
function Ea() {
  return !1;
}
function ke(e) {
  function t(n, r, o, l, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? br
        : Ea),
      (this.isPropagationStopped = Ea),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = br));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = br));
      },
      persist: function () {},
      isPersistent: br,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Di = ke(Sn),
  hr = W({}, Sn, { view: 0, detail: 0 }),
  mf = ke(hr),
  Jo,
  Zo,
  Ln,
  bo = W({}, hr, {
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
    getModifierState: Ti,
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
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Jo = e.screenX - Ln.screenX), (Zo = e.screenY - Ln.screenY))
              : (Zo = Jo = 0),
            (Ln = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  _a = ke(bo),
  pf = W({}, bo, { dataTransfer: 0 }),
  hf = ke(pf),
  gf = W({}, hr, { relatedTarget: 0 }),
  Xo = ke(gf),
  vf = W({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = ke(vf),
  xf = W({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  wf = ke(xf),
  Sf = W({}, Sn, { data: 0 }),
  La = ke(Sf),
  jf = {
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
  Nf = {
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
  kf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Af(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kf[e]) ? !!t[e] : !1;
}
function Ti() {
  return Af;
}
var Cf = W({}, hr, {
    key: function (e) {
      if (e.key) {
        var t = jf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Br(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nf[e.keyCode] || "Unidentified"
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
    getModifierState: Ti,
    charCode: function (e) {
      return e.type === "keypress" ? Br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Br(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  bf = ke(Cf),
  Pf = W({}, bo, {
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
  Oa = ke(Pf),
  Ef = W({}, hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ti,
  }),
  _f = ke(Ef),
  Lf = W({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = ke(Lf),
  Df = W({}, bo, {
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
  Tf = ke(Df),
  Ff = [9, 13, 27, 32],
  Fi = Xe && "CompositionEvent" in window,
  Gn = null;
Xe && "documentMode" in document && (Gn = document.documentMode);
var If = Xe && "TextEvent" in window && !Gn,
  Lu = Xe && (!Fi || (Gn && 8 < Gn && 11 >= Gn)),
  Da = " ",
  Ta = !1;
function Ou(e, t) {
  switch (e) {
    case "keyup":
      return Ff.indexOf(t.keyCode) !== -1;
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
function Du(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function zf(e, t) {
  switch (e) {
    case "compositionend":
      return Du(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ta = !0), Da);
    case "textInput":
      return (e = t.data), e === Da && Ta ? null : e;
    default:
      return null;
  }
}
function Mf(e, t) {
  if (Yt)
    return e === "compositionend" || (!Fi && Ou(e, t))
      ? ((e = _u()), (Gr = Oi = ut = null), (Yt = !1), e)
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
      return Lu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Rf = {
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
function Fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Rf[e.type] : t === "textarea";
}
function Tu(e, t, n, r) {
  du(r),
    (t = ro(t, "onChange")),
    0 < t.length &&
      ((n = new Di("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Bn = null,
  er = null;
function Kf(e) {
  Wu(e, 0);
}
function Po(e) {
  var t = Xt(e);
  if (ou(t)) return e;
}
function Gf(e, t) {
  if (e === "change") return t;
}
var Fu = !1;
if (Xe) {
  var el;
  if (Xe) {
    var tl = "oninput" in document;
    if (!tl) {
      var Ia = document.createElement("div");
      Ia.setAttribute("oninput", "return;"),
        (tl = typeof Ia.oninput == "function");
    }
    el = tl;
  } else el = !1;
  Fu = el && (!document.documentMode || 9 < document.documentMode);
}
function za() {
  Bn && (Bn.detachEvent("onpropertychange", Iu), (er = Bn = null));
}
function Iu(e) {
  if (e.propertyName === "value" && Po(er)) {
    var t = [];
    Tu(t, er, e, bi(e)), hu(Kf, t);
  }
}
function Bf(e, t, n) {
  e === "focusin"
    ? (za(), (Bn = t), (er = n), Bn.attachEvent("onpropertychange", Iu))
    : e === "focusout" && za();
}
function Uf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Po(er);
}
function Hf(e, t) {
  if (e === "click") return Po(t);
}
function Wf(e, t) {
  if (e === "input" || e === "change") return Po(t);
}
function Vf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == "function" ? Object.is : Vf;
function tr(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wl.call(t, o) || !Re(e[o], t[o])) return !1;
  }
  return !0;
}
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ra(e, t) {
  var n = Ma(e);
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
    n = Ma(n);
  }
}
function zu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mu() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Ii(e) {
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
function Qf(e) {
  var t = Mu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ii(n)) {
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
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Ra(n, l));
        var a = Ra(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var $f = Xe && "documentMode" in document && 11 >= document.documentMode,
  Jt = null,
  Rl = null,
  Un = null,
  Kl = !1;
function Ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Kl ||
    Jt == null ||
    Jt !== Yr(r) ||
    ((r = Jt),
    "selectionStart" in r && Ii(r)
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
    (Un && tr(Un, r)) ||
      ((Un = r),
      (r = ro(Rl, "onSelect")),
      0 < r.length &&
        ((t = new Di("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function Pr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd"),
  },
  nl = {},
  Ru = {};
Xe &&
  ((Ru = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  "TransitionEvent" in window || delete Zt.transitionend.transition);
function Eo(e) {
  if (nl[e]) return nl[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ru) return (nl[e] = t[n]);
  return e;
}
var Ku = Eo("animationend"),
  Gu = Eo("animationiteration"),
  Bu = Eo("animationstart"),
  Uu = Eo("transitionend"),
  Hu = new Map(),
  Ga =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nt(e, t) {
  Hu.set(e, t), Kt(t, [e]);
}
for (var rl = 0; rl < Ga.length; rl++) {
  var ol = Ga[rl],
    qf = ol.toLowerCase(),
    Yf = ol[0].toUpperCase() + ol.slice(1);
  Nt(qf, "on" + Yf);
}
Nt(Ku, "onAnimationEnd");
Nt(Gu, "onAnimationIteration");
Nt(Bu, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(Uu, "onTransitionEnd");
mn("onMouseEnter", ["mouseout", "mouseover"]);
mn("onMouseLeave", ["mouseout", "mouseover"]);
mn("onPointerEnter", ["pointerout", "pointerover"]);
mn("onPointerLeave", ["pointerout", "pointerover"]);
Kt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Mn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mn));
function Ba(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $d(r, t, void 0, e), (e.currentTarget = null);
}
function Wu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            u = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          Ba(o, s, c), (l = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (u = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          Ba(o, s, c), (l = u);
        }
    }
  }
  if (Zr) throw ((e = Fl), (Zr = !1), (Fl = null), e);
}
function M(e, t) {
  var n = t[Wl];
  n === void 0 && (n = t[Wl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Vu(t, e, 2, !1), n.add(r));
}
function ll(e, t, n) {
  var r = 0;
  t && (r |= 4), Vu(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function nr(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      Xs.forEach(function (n) {
        n !== "selectionchange" && (Jf.has(n) || ll(n, !1, e), ll(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), ll("selectionchange", !1, t));
  }
}
function Vu(e, t, n, r) {
  switch (Eu(t)) {
    case 1:
      var o = df;
      break;
    case 4:
      o = ff;
      break;
    default:
      o = Li;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tl ||
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
function il(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = _t(s)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = l = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  hu(function () {
    var c = l,
      g = bi(n),
      p = [];
    e: {
      var v = Hu.get(e);
      if (v !== void 0) {
        var x = Di,
          y = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = bf;
            break;
          case "focusin":
            (y = "focus"), (x = Xo);
            break;
          case "focusout":
            (y = "blur"), (x = Xo);
            break;
          case "beforeblur":
          case "afterblur":
            x = Xo;
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
            x = _a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = _f;
            break;
          case Ku:
          case Gu:
          case Bu:
            x = yf;
            break;
          case Uu:
            x = Of;
            break;
          case "scroll":
            x = mf;
            break;
          case "wheel":
            x = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = wf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Oa;
        }
        var w = (t & 4) !== 0,
          A = !w && e === "scroll",
          f = w ? (v !== null ? v + "Capture" : null) : v;
        w = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              f !== null && ((S = Yn(d, f)), S != null && w.push(rr(d, S, h)))),
            A)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((v = new x(v, y, null, n, g)), p.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          v &&
            n !== Ol &&
            (y = n.relatedTarget || n.fromElement) &&
            (_t(y) || y[et]))
        )
          break e;
        if (
          (x || v) &&
          ((v =
            g.window === g
              ? g
              : (v = g.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = c),
              (y = y ? _t(y) : null),
              y !== null &&
                ((A = Gt(y)), y !== A || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = c)),
          x !== y)
        ) {
          if (
            ((w = _a),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Oa),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (A = x == null ? v : Xt(x)),
            (h = y == null ? v : Xt(y)),
            (v = new w(S, d + "leave", x, n, g)),
            (v.target = A),
            (v.relatedTarget = h),
            (S = null),
            _t(g) === c &&
              ((w = new w(f, d + "enter", y, n, g)),
              (w.target = h),
              (w.relatedTarget = A),
              (S = w)),
            (A = S),
            x && y)
          )
            t: {
              for (w = x, f = y, d = 0, h = w; h; h = Vt(h)) d++;
              for (h = 0, S = f; S; S = Vt(S)) h++;
              for (; 0 < d - h; ) (w = Vt(w)), d--;
              for (; 0 < h - d; ) (f = Vt(f)), h--;
              for (; d--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Vt(w)), (f = Vt(f));
              }
              w = null;
            }
          else w = null;
          x !== null && Ua(p, v, x, w, !1),
            y !== null && A !== null && Ua(p, A, y, w, !0);
        }
      }
      e: {
        if (
          ((v = c ? Xt(c) : window),
          (x = v.nodeName && v.nodeName.toLowerCase()),
          x === "select" || (x === "input" && v.type === "file"))
        )
          var k = Gf;
        else if (Fa(v))
          if (Fu) k = Wf;
          else {
            k = Uf;
            var P = Bf;
          }
        else
          (x = v.nodeName) &&
            x.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (k = Hf);
        if (k && (k = k(e, c))) {
          Tu(p, k, n, g);
          break e;
        }
        P && P(e, v, c),
          e === "focusout" &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === "number" &&
            bl(v, "number", v.value);
      }
      switch (((P = c ? Xt(c) : window), e)) {
        case "focusin":
          (Fa(P) || P.contentEditable === "true") &&
            ((Jt = P), (Rl = c), (Un = null));
          break;
        case "focusout":
          Un = Rl = Jt = null;
          break;
        case "mousedown":
          Kl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Kl = !1), Ka(p, n, g);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          Ka(p, n, g);
      }
      var E;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Yt
          ? Ou(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Lu &&
          n.locale !== "ko" &&
          (Yt || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Yt && (E = _u())
            : ((ut = g),
              (Oi = "value" in ut ? ut.value : ut.textContent),
              (Yt = !0))),
        (P = ro(c, _)),
        0 < P.length &&
          ((_ = new La(_, e, null, n, g)),
          p.push({ event: _, listeners: P }),
          E ? (_.data = E) : ((E = Du(n)), E !== null && (_.data = E)))),
        (E = If ? zf(e, n) : Mf(e, n)) &&
          ((c = ro(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new La("onBeforeInput", "beforeinput", null, n, g)),
            p.push({ event: g, listeners: c }),
            (g.data = E)));
    }
    Wu(p, t);
  });
}
function rr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ro(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Yn(e, n)),
      l != null && r.unshift(rr(e, l, o)),
      (l = Yn(e, t)),
      l != null && r.push(rr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Vt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ua(e, t, n, r, o) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      c = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      o
        ? ((u = Yn(n, l)), u != null && a.unshift(rr(n, u, s)))
        : o || ((u = Yn(n, l)), u != null && a.push(rr(n, u, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Zf = /\r\n?/g,
  Xf = /\u0000|\uFFFD/g;
function Ha(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zf,
      `
`
    )
    .replace(Xf, "");
}
function _r(e, t, n) {
  if (((t = Ha(t)), Ha(e) !== t && n)) throw Error(j(425));
}
function oo() {}
var Gl = null,
  Bl = null;
function Ul(e, t) {
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
var Hl = typeof setTimeout == "function" ? setTimeout : void 0,
  em = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wa = typeof Promise == "function" ? Promise : void 0,
  tm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wa < "u"
      ? function (e) {
          return Wa.resolve(null).then(e).catch(nm);
        }
      : Hl;
function nm(e) {
  setTimeout(function () {
    throw e;
  });
}
function al(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xn(t);
}
function ht(e) {
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
function Va(e) {
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
var jn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + jn,
  or = "__reactProps$" + jn,
  et = "__reactContainer$" + jn,
  Wl = "__reactEvents$" + jn,
  rm = "__reactListeners$" + jn,
  om = "__reactHandles$" + jn;
function _t(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Va(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Va(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function gr(e) {
  return (
    (e = e[Be] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function _o(e) {
  return e[or] || null;
}
var Vl = [],
  en = -1;
function kt(e) {
  return { current: e };
}
function R(e) {
  0 > en || ((e.current = Vl[en]), (Vl[en] = null), en--);
}
function z(e, t) {
  en++, (Vl[en] = e.current), (e.current = t);
}
var jt = {},
  ae = kt(jt),
  he = kt(!1),
  Ft = jt;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function lo() {
  R(he), R(ae);
}
function Qa(e, t, n) {
  if (ae.current !== jt) throw Error(j(168));
  z(ae, t), z(he, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, Gd(e) || "Unknown", o));
  return W({}, n, r);
}
function io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || jt),
    (Ft = ae.current),
    z(ae, e),
    z(he, he.current),
    !0
  );
}
function $a(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Qu(e, t, Ft)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      R(he),
      R(ae),
      z(ae, e))
    : R(he),
    z(he, n);
}
var qe = null,
  Lo = !1,
  sl = !1;
function $u(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function lm(e) {
  (Lo = !0), $u(e);
}
function At() {
  if (!sl && qe !== null) {
    sl = !0;
    var e = 0,
      t = I;
    try {
      var n = qe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Lo = !1);
    } catch (o) {
      throw (qe !== null && (qe = qe.slice(e + 1)), xu(Pi, At), o);
    } finally {
      (I = t), (sl = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  ao = null,
  so = 0,
  be = [],
  Pe = 0,
  It = null,
  Ye = 1,
  Je = "";
function Pt(e, t) {
  (tn[nn++] = so), (tn[nn++] = ao), (ao = e), (so = t);
}
function qu(e, t, n) {
  (be[Pe++] = Ye), (be[Pe++] = Je), (be[Pe++] = It), (It = e);
  var r = Ye;
  e = Je;
  var o = 32 - ze(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ze(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Ye = (1 << (32 - ze(t) + o)) | (n << o) | r),
      (Je = l + e);
  } else (Ye = (1 << l) | (n << o) | r), (Je = e);
}
function zi(e) {
  e.return !== null && (Pt(e, 1), qu(e, 1, 0));
}
function Mi(e) {
  for (; e === ao; )
    (ao = tn[--nn]), (tn[nn] = null), (so = tn[--nn]), (tn[nn] = null);
  for (; e === It; )
    (It = be[--Pe]),
      (be[Pe] = null),
      (Je = be[--Pe]),
      (be[Pe] = null),
      (Ye = be[--Pe]),
      (be[Pe] = null);
}
var Se = null,
  we = null,
  G = !1,
  Ie = null;
function Yu(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Ye, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $l(e) {
  if (G) {
    var t = we;
    if (t) {
      var n = t;
      if (!qa(e, t)) {
        if (Ql(e)) throw Error(j(418));
        t = ht(n.nextSibling);
        var r = Se;
        t && qa(e, t)
          ? Yu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Se = e));
      }
    } else {
      if (Ql(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Se = e);
    }
  }
}
function Ya(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Lr(e) {
  if (e !== Se) return !1;
  if (!G) return Ya(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ul(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Ql(e)) throw (Ju(), Error(j(418)));
    for (; t; ) Yu(e, t), (t = ht(t.nextSibling));
  }
  if ((Ya(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Ju() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function hn() {
  (we = Se = null), (G = !1);
}
function Ri(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var im = rt.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            a === null ? delete s[l] : (s[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ja(e) {
  var t = e._init;
  return t(e._payload);
}
function Zu(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = xt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, h, S) {
    return d === null || d.tag !== 6
      ? ((d = hl(h, f.mode, S)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function u(f, d, h, S) {
    var k = h.type;
    return k === qt
      ? g(f, d, h.props.children, S, h.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === lt &&
            Ja(k) === d.type))
      ? ((S = o(d, h.props)), (S.ref = On(f, d, h)), (S.return = f), S)
      : ((S = qr(h.type, h.key, h.props, null, f.mode, S)),
        (S.ref = On(f, d, h)),
        (S.return = f),
        S);
  }
  function c(f, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = gl(h, f.mode, S)), (d.return = f), d)
      : ((d = o(d, h.children || [])), (d.return = f), d);
  }
  function g(f, d, h, S, k) {
    return d === null || d.tag !== 7
      ? ((d = Tt(h, f.mode, S, k)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function p(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = hl("" + d, f.mode, h)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Sr:
          return (
            (h = qr(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = On(f, null, d)),
            (h.return = f),
            h
          );
        case $t:
          return (d = gl(d, f.mode, h)), (d.return = f), d;
        case lt:
          var S = d._init;
          return p(f, S(d._payload), h);
      }
      if (In(d) || bn(d))
        return (d = Tt(d, f.mode, h, null)), (d.return = f), d;
      Or(f, d);
    }
    return null;
  }
  function v(f, d, h, S) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : s(f, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Sr:
          return h.key === k ? u(f, d, h, S) : null;
        case $t:
          return h.key === k ? c(f, d, h, S) : null;
        case lt:
          return (k = h._init), v(f, d, k(h._payload), S);
      }
      if (In(h) || bn(h)) return k !== null ? null : g(f, d, h, S, null);
      Or(f, h);
    }
    return null;
  }
  function x(f, d, h, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(h) || null), s(d, f, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Sr:
          return (f = f.get(S.key === null ? h : S.key) || null), u(d, f, S, k);
        case $t:
          return (f = f.get(S.key === null ? h : S.key) || null), c(d, f, S, k);
        case lt:
          var P = S._init;
          return x(f, d, h, P(S._payload), k);
      }
      if (In(S) || bn(S)) return (f = f.get(h) || null), g(d, f, S, k, null);
      Or(d, S);
    }
    return null;
  }
  function y(f, d, h, S) {
    for (
      var k = null, P = null, E = d, _ = (d = 0), B = null;
      E !== null && _ < h.length;
      _++
    ) {
      E.index > _ ? ((B = E), (E = null)) : (B = E.sibling);
      var D = v(f, E, h[_], S);
      if (D === null) {
        E === null && (E = B);
        break;
      }
      e && E && D.alternate === null && t(f, E),
        (d = l(D, d, _)),
        P === null ? (k = D) : (P.sibling = D),
        (P = D),
        (E = B);
    }
    if (_ === h.length) return n(f, E), G && Pt(f, _), k;
    if (E === null) {
      for (; _ < h.length; _++)
        (E = p(f, h[_], S)),
          E !== null &&
            ((d = l(E, d, _)), P === null ? (k = E) : (P.sibling = E), (P = E));
      return G && Pt(f, _), k;
    }
    for (E = r(f, E); _ < h.length; _++)
      (B = x(E, f, _, h[_], S)),
        B !== null &&
          (e && B.alternate !== null && E.delete(B.key === null ? _ : B.key),
          (d = l(B, d, _)),
          P === null ? (k = B) : (P.sibling = B),
          (P = B));
    return (
      e &&
        E.forEach(function (ye) {
          return t(f, ye);
        }),
      G && Pt(f, _),
      k
    );
  }
  function w(f, d, h, S) {
    var k = bn(h);
    if (typeof k != "function") throw Error(j(150));
    if (((h = k.call(h)), h == null)) throw Error(j(151));
    for (
      var P = (k = null), E = d, _ = (d = 0), B = null, D = h.next();
      E !== null && !D.done;
      _++, D = h.next()
    ) {
      E.index > _ ? ((B = E), (E = null)) : (B = E.sibling);
      var ye = v(f, E, D.value, S);
      if (ye === null) {
        E === null && (E = B);
        break;
      }
      e && E && ye.alternate === null && t(f, E),
        (d = l(ye, d, _)),
        P === null ? (k = ye) : (P.sibling = ye),
        (P = ye),
        (E = B);
    }
    if (D.done) return n(f, E), G && Pt(f, _), k;
    if (E === null) {
      for (; !D.done; _++, D = h.next())
        (D = p(f, D.value, S)),
          D !== null &&
            ((d = l(D, d, _)), P === null ? (k = D) : (P.sibling = D), (P = D));
      return G && Pt(f, _), k;
    }
    for (E = r(f, E); !D.done; _++, D = h.next())
      (D = x(E, f, _, D.value, S)),
        D !== null &&
          (e && D.alternate !== null && E.delete(D.key === null ? _ : D.key),
          (d = l(D, d, _)),
          P === null ? (k = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        E.forEach(function (Ct) {
          return t(f, Ct);
        }),
      G && Pt(f, _),
      k
    );
  }
  function A(f, d, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === qt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Sr:
          e: {
            for (var k = h.key, P = d; P !== null; ) {
              if (P.key === k) {
                if (((k = h.type), k === qt)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (d = o(P, h.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === lt &&
                    Ja(k) === P.type)
                ) {
                  n(f, P.sibling),
                    (d = o(P, h.props)),
                    (d.ref = On(f, P, h)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            h.type === qt
              ? ((d = Tt(h.props.children, f.mode, S, h.key)),
                (d.return = f),
                (f = d))
              : ((S = qr(h.type, h.key, h.props, null, f.mode, S)),
                (S.ref = On(f, d, h)),
                (S.return = f),
                (f = S));
          }
          return a(f);
        case $t:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, h.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = gl(h, f.mode, S)), (d.return = f), (f = d);
          }
          return a(f);
        case lt:
          return (P = h._init), A(f, d, P(h._payload), S);
      }
      if (In(h)) return y(f, d, h, S);
      if (bn(h)) return w(f, d, h, S);
      Or(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = hl(h, f.mode, S)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return A;
}
var gn = Zu(!0),
  Xu = Zu(!1),
  uo = kt(null),
  co = null,
  rn = null,
  Ki = null;
function Gi() {
  Ki = rn = co = null;
}
function Bi(e) {
  var t = uo.current;
  R(uo), (e._currentValue = t);
}
function ql(e, t, n) {
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
function dn(e, t) {
  (co = e),
    (Ki = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (Ki !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (co === null) throw Error(j(308));
      (rn = e), (co.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Lt = null;
function Ui(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function ec(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ui(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
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
var it = !1;
function Hi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function tc(e, t) {
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
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ui(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n);
  }
}
function Za(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function fo(e, t, n, r) {
  var o = e.updateQueue;
  it = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      c = u.next;
    (u.next = null), a === null ? (l = c) : (a.next = c), (a = u);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (s = g.lastBaseUpdate),
      s !== a &&
        (s === null ? (g.firstBaseUpdate = c) : (s.next = c),
        (g.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var p = o.baseState;
    (a = 0), (g = c = u = null), (s = l);
    do {
      var v = s.lane,
        x = s.eventTime;
      if ((r & v) === v) {
        g !== null &&
          (g = g.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            w = s;
          switch (((v = t), (x = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(x, p, v);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (v = typeof y == "function" ? y.call(x, p, v) : y),
                v == null)
              )
                break e;
              p = W({}, p, v);
              break e;
            case 2:
              it = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [s]) : v.push(s));
      } else
        (x = {
          eventTime: x,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          g === null ? ((c = g = x), (u = p)) : (g = g.next = x),
          (a |= v);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = g),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Mt |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function Xa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var vr = {},
  We = kt(vr),
  lr = kt(vr),
  ir = kt(vr);
function Ot(e) {
  if (e === vr) throw Error(j(174));
  return e;
}
function Wi(e, t) {
  switch ((z(ir, t), z(lr, e), z(We, vr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  R(We), z(We, t);
}
function vn() {
  R(We), R(lr), R(ir);
}
function nc(e) {
  Ot(ir.current);
  var t = Ot(We.current),
    n = El(t, e.type);
  t !== n && (z(lr, e), z(We, n));
}
function Vi(e) {
  lr.current === e && (R(We), R(lr));
}
var U = kt(0);
function mo(e) {
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
var ul = [];
function Qi() {
  for (var e = 0; e < ul.length; e++)
    ul[e]._workInProgressVersionPrimary = null;
  ul.length = 0;
}
var Hr = rt.ReactCurrentDispatcher,
  cl = rt.ReactCurrentBatchConfig,
  zt = 0,
  H = null,
  J = null,
  X = null,
  po = !1,
  Hn = !1,
  ar = 0,
  am = 0;
function oe() {
  throw Error(j(321));
}
function $i(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Re(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t, n, r, o, l) {
  if (
    ((zt = l),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hr.current = e === null || e.memoizedState === null ? dm : fm),
    (e = n(r, o)),
    Hn)
  ) {
    l = 0;
    do {
      if (((Hn = !1), (ar = 0), 25 <= l)) throw Error(j(301));
      (l += 1),
        (X = J = null),
        (t.updateQueue = null),
        (Hr.current = mm),
        (e = n(r, o));
    } while (Hn);
  }
  if (
    ((Hr.current = ho),
    (t = J !== null && J.next !== null),
    (zt = 0),
    (X = J = H = null),
    (po = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Yi() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (H.memoizedState = X = e) : (X = X.next = e), X;
}
function Oe() {
  if (J === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = X === null ? H.memoizedState : X.next;
  if (t !== null) (X = t), (J = e);
  else {
    if (e === null) throw Error(j(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      X === null ? (H.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function sr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function dl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = J,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = l.next), (l.next = a);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (a = null),
      u = null,
      c = l;
    do {
      var g = c.lane;
      if ((zt & g) === g)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (a = r)) : (u = u.next = p),
          (H.lanes |= g),
          (Mt |= g);
      }
      c = c.next;
    } while (c !== null && c !== l);
    u === null ? (a = r) : (u.next = s),
      Re(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (H.lanes |= l), (Mt |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Re(l, t.memoizedState) || (pe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function rc() {}
function oc(e, t) {
  var n = H,
    r = Oe(),
    o = t(),
    l = !Re(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (pe = !0)),
    (r = r.queue),
    Ji(ac.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ur(9, ic.bind(null, n, r, o, t), void 0, null),
      ee === null)
    )
      throw Error(j(349));
    zt & 30 || lc(n, t, o);
  }
  return o;
}
function lc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ic(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sc(t) && uc(e);
}
function ac(e, t, n) {
  return n(function () {
    sc(t) && uc(e);
  });
}
function sc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function uc(e) {
  var t = tt(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function es(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: sr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cm.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function ur(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cc() {
  return Oe().memoizedState;
}
function Wr(e, t, n, r) {
  var o = Ge();
  (H.flags |= e),
    (o.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var o = Oe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (J !== null) {
    var a = J.memoizedState;
    if (((l = a.destroy), r !== null && $i(r, a.deps))) {
      o.memoizedState = ur(t, n, l, r);
      return;
    }
  }
  (H.flags |= e), (o.memoizedState = ur(1 | t, n, l, r));
}
function ts(e, t) {
  return Wr(8390656, 8, e, t);
}
function Ji(e, t) {
  return Oo(2048, 8, e, t);
}
function dc(e, t) {
  return Oo(4, 2, e, t);
}
function fc(e, t) {
  return Oo(4, 4, e, t);
}
function mc(e, t) {
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
function pc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, mc.bind(null, t, e), n)
  );
}
function Zi() {}
function hc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $i(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vc(e, t, n) {
  return zt & 21
    ? (Re(n, t) || ((n = ju()), (H.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function sm(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = cl.transition;
  cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (cl.transition = r);
  }
}
function yc() {
  return Oe().memoizedState;
}
function um(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xc(e))
  )
    wc(t, n);
  else if (((n = ec(e, t, n, r)), n !== null)) {
    var o = ue();
    Me(n, e, r, o), Sc(n, t, r);
  }
}
function cm(e, t, n) {
  var r = yt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xc(e)) wc(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = l(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Re(s, a))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Ui(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ec(e, t, o, r)),
      n !== null && ((o = ue()), Me(n, e, r, o), Sc(n, t, r));
  }
}
function xc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function wc(e, t) {
  Hn = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ei(e, n);
  }
}
var ho = {
    readContext: Le,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  dm = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: ts,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wr(4194308, 4, mc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
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
        (e = e.dispatch = um.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: es,
    useDebugValue: Zi,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = es(!1),
        t = e[0];
      return (e = sm.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        o = Ge();
      if (G) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(j(349));
        zt & 30 || lc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ts(ac.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ur(9, ic.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ee.identifierPrefix;
      if (G) {
        var n = Je,
          r = Ye;
        (n = (r & ~(1 << (32 - ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ar++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = am++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  fm = {
    readContext: Le,
    useCallback: hc,
    useContext: Le,
    useEffect: Ji,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: gc,
    useReducer: dl,
    useRef: cc,
    useState: function () {
      return dl(sr);
    },
    useDebugValue: Zi,
    useDeferredValue: function (e) {
      var t = Oe();
      return vc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = dl(sr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: yc,
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: Le,
    useCallback: hc,
    useContext: Le,
    useEffect: Ji,
    useImperativeHandle: pc,
    useInsertionEffect: dc,
    useLayoutEffect: fc,
    useMemo: gc,
    useReducer: fl,
    useRef: cc,
    useState: function () {
      return fl(sr);
    },
    useDebugValue: Zi,
    useDeferredValue: function (e) {
      var t = Oe();
      return J === null ? (t.memoizedState = e) : vc(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = fl(sr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: rc,
    useSyncExternalStore: oc,
    useId: yc,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Do = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Gt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = yt(e),
      l = Ze(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = gt(e, l, o)),
      t !== null && (Me(t, e, o, r), Ur(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      o = yt(e),
      l = Ze(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = gt(e, l, o)),
      t !== null && (Me(t, e, o, r), Ur(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = yt(e),
      o = Ze(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = gt(e, o, r)),
      t !== null && (Me(t, e, r, n), Ur(t, e, r));
  },
};
function ns(e, t, n, r, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !tr(n, r) || !tr(o, l)
      : !0
  );
}
function jc(e, t, n) {
  var r = !1,
    o = jt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Le(l))
      : ((o = ge(t) ? Ft : ae.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? pn(e, o) : jt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Do),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function rs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Do.enqueueReplaceState(t, t.state, null);
}
function Jl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Hi(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Le(l))
    : ((l = ge(t) ? Ft : ae.current), (o.context = pn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Yl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Do.enqueueReplaceState(o, o.state, null),
      fo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Kd(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var pm = typeof WeakMap == "function" ? WeakMap : Map;
function Nc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      vo || ((vo = !0), (si = r)), Zl(e, t);
    }),
    n
  );
}
function kc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Zl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Zl(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function os(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Pm.bind(null, e, t, n)), t.then(e, e));
}
function ls(e) {
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
function is(e, t, n, r, o) {
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
              : ((t = Ze(-1, 1)), (t.tag = 2), gt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hm = rt.ReactCurrentOwner,
  pe = !1;
function se(e, t, n, r) {
  t.child = e === null ? Xu(t, null, n, r) : gn(t, e.child, n, r);
}
function as(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    dn(t, o),
    (r = qi(e, t, n, r, l, o)),
    (n = Yi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (G && n && zi(t), (t.flags |= 1), se(e, t, r, o), t.child)
  );
}
function ss(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ia(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Ac(e, t, l, r, o))
      : ((e = qr(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : tr), n(a, r) && e.ref === t.ref)
    )
      return nt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = xt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ac(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (tr(l, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), nt(e, t, o);
  }
  return Xl(e, t, n, r, o);
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(ln, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(ln, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        z(ln, xe),
        (xe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(ln, xe),
      (xe |= r);
  return se(e, t, o, n), t.child;
}
function bc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Xl(e, t, n, r, o) {
  var l = ge(n) ? Ft : ae.current;
  return (
    (l = pn(t, l)),
    dn(t, o),
    (n = qi(e, t, n, r, l, o)),
    (r = Yi()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        nt(e, t, o))
      : (G && r && zi(t), (t.flags |= 1), se(e, t, n, o), t.child)
  );
}
function us(e, t, n, r, o) {
  if (ge(n)) {
    var l = !0;
    io(t);
  } else l = !1;
  if ((dn(t, o), t.stateNode === null))
    Vr(e, t), jc(t, n, r), Jl(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var u = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Le(c))
      : ((c = ge(n) ? Ft : ae.current), (c = pn(t, c)));
    var g = n.getDerivedStateFromProps,
      p =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || u !== c) && rs(t, a, r, c)),
      (it = !1);
    var v = t.memoizedState;
    (a.state = v),
      fo(t, r, a, o),
      (u = t.memoizedState),
      s !== r || v !== u || he.current || it
        ? (typeof g == "function" && (Yl(t, n, g, r), (u = t.memoizedState)),
          (s = it || ns(t, n, s, r, v, u, c))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = c),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      tc(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : Te(t.type, s)),
      (a.props = c),
      (p = t.pendingProps),
      (v = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Le(u))
        : ((u = ge(n) ? Ft : ae.current), (u = pn(t, u)));
    var x = n.getDerivedStateFromProps;
    (g =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== p || v !== u) && rs(t, a, r, u)),
      (it = !1),
      (v = t.memoizedState),
      (a.state = v),
      fo(t, r, a, o);
    var y = t.memoizedState;
    s !== p || v !== y || he.current || it
      ? (typeof x == "function" && (Yl(t, n, x, r), (y = t.memoizedState)),
        (c = it || ns(t, n, c, r, v, y, u) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = u),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ei(e, t, n, r, l, o);
}
function ei(e, t, n, r, o, l) {
  bc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && $a(t, n, !1), nt(e, t, l);
  (r = t.stateNode), (hm.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = gn(t, e.child, null, l)), (t.child = gn(t, null, s, l)))
      : se(e, t, s, l),
    (t.memoizedState = r.state),
    o && $a(t, n, !0),
    t.child
  );
}
function Pc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qa(e, t.context, !1),
    Wi(e, t.containerInfo);
}
function cs(e, t, n, r, o) {
  return hn(), Ri(o), (t.flags |= 256), se(e, t, n, r), t.child;
}
var ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function ni(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ec(e, t, n) {
  var r = t.pendingProps,
    o = U.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    z(U, o & 1),
    e === null)
  )
    return (
      $l(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Io(a, r, 0, null)),
              (e = Tt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ni(n)),
              (t.memoizedState = ti),
              e)
            : Xi(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return gm(e, t, a, r, s, o, n);
  if (l) {
    (l = r.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = xt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = xt(s, l)) : ((l = Tt(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ni(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ti),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = xt(l, { mode: "visible", children: r.children })),
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
function Xi(e, t) {
  return (
    (t = Io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dr(e, t, n, r) {
  return (
    r !== null && Ri(r),
    gn(t, e.child, null, n),
    (e = Xi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gm(e, t, n, r, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ml(Error(j(422)))), Dr(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Io({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Tt(l, o, a, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && gn(t, e.child, null, a),
        (t.child.memoizedState = ni(a)),
        (t.memoizedState = ti),
        l);
  if (!(t.mode & 1)) return Dr(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(j(419))), (r = ml(l, r, void 0)), Dr(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), pe || s)) {
    if (((r = ee), r !== null)) {
      switch (a & -a) {
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
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), tt(e, o), Me(r, e, o, -1));
    }
    return la(), (r = ml(Error(j(421)))), Dr(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Em.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (we = ht(o.nextSibling)),
      (Se = t),
      (G = !0),
      (Ie = null),
      e !== null &&
        ((be[Pe++] = Ye),
        (be[Pe++] = Je),
        (be[Pe++] = It),
        (Ye = e.id),
        (Je = e.overflow),
        (It = t)),
      (t = Xi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ds(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ql(e.return, t, n);
}
function pl(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function _c(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((se(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ds(e, n, t);
        else if (e.tag === 19) ds(e, n, t);
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
  if ((z(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && mo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          pl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && mo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        pl(t, !0, n, null, l);
        break;
      case "together":
        pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function vm(e, t, n) {
  switch (t.tag) {
    case 3:
      Pc(t), hn();
      break;
    case 5:
      nc(t);
      break;
    case 1:
      ge(t.type) && io(t);
      break;
    case 4:
      Wi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      z(uo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ec(e, t, n)
          : (z(U, U.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      z(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _c(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        z(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cc(e, t, n);
  }
  return nt(e, t, n);
}
var Lc, ri, Oc, Dc;
Lc = function (e, t) {
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
ri = function () {};
Oc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ot(We.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Al(e, o)), (r = Al(e, r)), (l = []);
        break;
      case "select":
        (o = W({}, o, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Pl(e, o)), (r = Pl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oo);
    }
    _l(n, r);
    var a;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var s = o[c];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            ($n.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((s = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && u !== s && (u != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                s[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (l || (l = []), l.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (l = l || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              ($n.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && M("scroll", e),
                  l || s === u || (l = []))
                : (l = l || []).push(c, u));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Dc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
  if (!G)
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
function le(e) {
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
function ym(e, t, n) {
  var r = t.pendingProps;
  switch ((Mi(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return ge(t.type) && lo(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        R(he),
        R(ae),
        Qi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (di(Ie), (Ie = null)))),
        ri(e, t),
        le(t),
        null
      );
    case 5:
      Vi(t);
      var o = Ot(ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Oc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return le(t), null;
        }
        if (((e = Ot(We.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Be] = t), (r[or] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Mn.length; o++) M(Mn[o], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              wa(r, l), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              ja(r, l), M("invalid", r);
          }
          _l(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var s = l[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : $n.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              jr(r), Sa(r, l, !0);
              break;
            case "textarea":
              jr(r), Na(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = au(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Be] = t),
            (e[or] = r),
            Lc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ll(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Mn.length; o++) M(Mn[o], e);
                o = r;
                break;
              case "source":
                M("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (o = r);
                break;
              case "details":
                M("toggle", e), (o = r);
                break;
              case "input":
                wa(e, r), (o = Al(e, r)), M("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = W({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                ja(e, r), (o = Pl(e, r)), M("invalid", e);
                break;
              default:
                o = r;
            }
            _l(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? cu(e, u)
                  : l === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && su(e, u))
                  : l === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && qn(e, u)
                    : typeof u == "number" && qn(e, "" + u)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    ($n.hasOwnProperty(l)
                      ? u != null && l === "onScroll" && M("scroll", e)
                      : u != null && Ni(e, l, u, a));
              }
            switch (n) {
              case "input":
                jr(e), Sa(e, r, !1);
                break;
              case "textarea":
                jr(e), Na(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? an(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      an(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = oo);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Ot(ir.current)), Ot(We.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (l = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (R(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && we !== null && t.mode & 1 && !(t.flags & 128))
          Ju(), hn(), (t.flags |= 98560), (l = !1);
        else if (((l = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(j(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(j(317));
            l[Be] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (l = !1);
        } else Ie !== null && (di(Ie), (Ie = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? Z === 0 && (Z = 3) : la())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        vn(), ri(e, t), e === null && nr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Bi(t.type._context), le(t), null;
    case 17:
      return ge(t.type) && lo(), le(t), null;
    case 19:
      if ((R(U), (l = t.memoizedState), l === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) Dn(l, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = mo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Dn(l, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Q() > xn &&
            ((t.flags |= 128), (r = !0), Dn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !G)
            )
              return le(t), null;
          } else
            2 * Q() - l.renderingStartTime > xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          z(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function xm(e, t) {
  switch ((Mi(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && lo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        R(he),
        R(ae),
        Qi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Vi(t), null;
    case 13:
      if ((R(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(j(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return R(U), null;
    case 4:
      return vn(), null;
    case 10:
      return Bi(t.type._context), null;
    case 22:
    case 23:
      return oa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Tr = !1,
  ie = !1,
  wm = typeof WeakSet == "function" ? WeakSet : Set,
  b = null;
function on(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function oi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var fs = !1;
function Sm(e, t) {
  if (((Gl = to), (e = Mu()), Ii(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            u = -1,
            c = 0,
            g = 0,
            p = e,
            v = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = a + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (u = a + r),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (v = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (v === n && ++c === o && (s = a),
                v === l && ++g === r && (u = a),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = v), (v = p.parentNode);
            }
            p = x;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bl = { focusedElem: e, selectionRange: n }, to = !1, b = t; b !== null; )
    if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (b = e);
    else
      for (; b !== null; ) {
        t = b;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    A = y.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Te(t.type, w),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          V(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (b = e);
          break;
        }
        b = t.return;
      }
  return (y = fs), (fs = !1), y;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && oi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function To(e, t) {
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
function li(e) {
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
function Tc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[or], delete t[Wl], delete t[rm], delete t[om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ms(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Fc(e.return)) return null;
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
function ii(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = oo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ii(e, t, n), e = e.sibling; e !== null; ) ii(e, t, n), (e = e.sibling);
}
function ai(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ai(e, t, n), e = e.sibling; e !== null; ) ai(e, t, n), (e = e.sibling);
}
var te = null,
  Fe = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) Ic(e, t, n), (n = n.sibling);
}
function Ic(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(Co, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || on(n, t);
    case 6:
      var r = te,
        o = Fe;
      (te = null),
        ot(e, t, n),
        (te = r),
        (Fe = o),
        te !== null &&
          (Fe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (Fe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? al(e.parentNode, n)
              : e.nodeType === 1 && al(e, n),
            Xn(e))
          : al(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (o = Fe),
        (te = n.stateNode.containerInfo),
        (Fe = !0),
        ot(e, t, n),
        (te = r),
        (Fe = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && oi(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (on(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          V(n, t, s);
        }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), ot(e, t, n), (ie = r))
        : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function ps(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new wm()),
      t.forEach(function (r) {
        var o = _m.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (te = s.stateNode), (Fe = !1);
              break e;
            case 3:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (te = s.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          s = s.return;
        }
        if (te === null) throw Error(j(160));
        Ic(l, a, o), (te = null), (Fe = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (c) {
        V(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zc(t, e), (t = t.sibling);
}
function zc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ke(e), r & 4)) {
        try {
          Wn(3, e, e.return), To(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          Wn(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Ke(e), r & 512 && n !== null && on(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ke(e),
        r & 512 && n !== null && on(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          qn(o, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && lu(o, l),
              Ll(s, a);
            var c = Ll(s, l);
            for (a = 0; a < u.length; a += 2) {
              var g = u[a],
                p = u[a + 1];
              g === "style"
                ? cu(o, p)
                : g === "dangerouslySetInnerHTML"
                ? su(o, p)
                : g === "children"
                ? qn(o, p)
                : Ni(o, g, p, c);
            }
            switch (s) {
              case "input":
                Cl(o, l);
                break;
              case "textarea":
                iu(o, l);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? an(o, !!l.multiple, x, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? an(o, !!l.multiple, l.defaultValue, !0)
                      : an(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[or] = l;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ke(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ke(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      De(t, e), Ke(e);
      break;
    case 13:
      De(t, e),
        Ke(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (na = Q())),
        r & 4 && ps(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || g), De(t, e), (ie = c)) : De(t, e),
        Ke(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (b = e, g = e.child; g !== null; ) {
            for (p = b = g; b !== null; ) {
              switch (((v = b), (x = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, v, v.return);
                  break;
                case 1:
                  on(v, v.return);
                  var y = v.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  on(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    gs(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = v), (b = x)) : gs(p);
            }
            g = g.sibling;
          }
        e: for (g = null, p = e; ; ) {
          if (p.tag === 5) {
            if (g === null) {
              g = p;
              try {
                (o = p.stateNode),
                  c
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = uu("display", a)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (g === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            g === p && (g = null), (p = p.return);
          }
          g === p && (g = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ke(e), r & 4 && ps(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ke(e);
  }
}
function Ke(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qn(o, ""), (r.flags &= -33));
          var l = ms(e);
          ai(e, l, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = ms(e);
          ii(e, s, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (u) {
      V(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e, t, n) {
  (b = e), Mc(e);
}
function Mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; b !== null; ) {
    var o = b,
      l = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || Tr;
      if (!a) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || ie;
        s = Tr;
        var c = ie;
        if (((Tr = a), (ie = u) && !c))
          for (b = o; b !== null; )
            (a = b),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? vs(o)
                : u !== null
                ? ((u.return = a), (b = u))
                : vs(o);
        for (; l !== null; ) (b = l), Mc(l), (l = l.sibling);
        (b = o), (Tr = s), (ie = c);
      }
      hs(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (b = l)) : hs(e);
  }
}
function hs(e) {
  for (; b !== null; ) {
    var t = b;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || To(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Xa(t, l, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Xa(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var p = g.dehydrated;
                    p !== null && Xn(p);
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
              throw Error(j(163));
          }
        ie || (t.flags & 512 && li(t));
      } catch (v) {
        V(t, t.return, v);
      }
    }
    if (t === e) {
      b = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function gs(e) {
  for (; b !== null; ) {
    var t = b;
    if (t === e) {
      b = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (b = n);
      break;
    }
    b = t.return;
  }
}
function vs(e) {
  for (; b !== null; ) {
    var t = b;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            To(4, t);
          } catch (u) {
            V(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              V(t, o, u);
            }
          }
          var l = t.return;
          try {
            li(t);
          } catch (u) {
            V(t, l, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            li(t);
          } catch (u) {
            V(t, a, u);
          }
      }
    } catch (u) {
      V(t, t.return, u);
    }
    if (t === e) {
      b = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (b = s);
      break;
    }
    b = t.return;
  }
}
var Nm = Math.ceil,
  go = rt.ReactCurrentDispatcher,
  ea = rt.ReactCurrentOwner,
  _e = rt.ReactCurrentBatchConfig,
  F = 0,
  ee = null,
  q = null,
  ne = 0,
  xe = 0,
  ln = kt(0),
  Z = 0,
  cr = null,
  Mt = 0,
  Fo = 0,
  ta = 0,
  Vn = null,
  me = null,
  na = 0,
  xn = 1 / 0,
  $e = null,
  vo = !1,
  si = null,
  vt = null,
  Fr = !1,
  ct = null,
  yo = 0,
  Qn = 0,
  ui = null,
  Qr = -1,
  $r = 0;
function ue() {
  return F & 6 ? Q() : Qr !== -1 ? Qr : (Qr = Q());
}
function yt(e) {
  return e.mode & 1
    ? F & 2 && ne !== 0
      ? ne & -ne
      : im.transition !== null
      ? ($r === 0 && ($r = ju()), $r)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eu(e.type))),
        e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (ui = null), Error(j(185)));
  pr(e, n, r),
    (!(F & 2) || e !== ee) &&
      (e === ee && (!(F & 2) && (Fo |= n), Z === 4 && st(e, ne)),
      ve(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((xn = Q() + 500), Lo && At()));
}
function ve(e, t) {
  var n = e.callbackNode;
  lf(e, t);
  var r = eo(e, e === ee ? ne : 0);
  if (r === 0)
    n !== null && Ca(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ca(n), t === 1))
      e.tag === 0 ? lm(ys.bind(null, e)) : $u(ys.bind(null, e)),
        tm(function () {
          !(F & 6) && At();
        }),
        (n = null);
    else {
      switch (Nu(r)) {
        case 1:
          n = Pi;
          break;
        case 4:
          n = wu;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = Xr;
      }
      n = Vc(n, Rc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rc(e, t) {
  if (((Qr = -1), ($r = 0), F & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = eo(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var l = Gc();
    (ee !== e || ne !== t) && (($e = null), (xn = Q() + 500), Dt(e, t));
    do
      try {
        Cm();
        break;
      } catch (s) {
        Kc(e, s);
      }
    while (!0);
    Gi(),
      (go.current = l),
      (F = o),
      q !== null ? (t = 0) : ((ee = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Il(e)), o !== 0 && ((r = o), (t = ci(e, o)))), t === 1)
    )
      throw ((n = cr), Dt(e, 0), st(e, r), ve(e, Q()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !km(o) &&
          ((t = xo(e, r)),
          t === 2 && ((l = Il(e)), l !== 0 && ((r = l), (t = ci(e, l)))),
          t === 1))
      )
        throw ((n = cr), Dt(e, 0), st(e, r), ve(e, Q()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Et(e, me, $e);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = na + 500 - Q()), 10 < t))
          ) {
            if (eo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hl(Et.bind(null, e, me, $e), t);
            break;
          }
          Et(e, me, $e);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - ze(r);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Q() - r),
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
                : 1960 * Nm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hl(Et.bind(null, e, me, $e), r);
            break;
          }
          Et(e, me, $e);
          break;
        case 5:
          Et(e, me, $e);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ve(e, Q()), e.callbackNode === n ? Rc.bind(null, e) : null;
}
function ci(e, t) {
  var n = Vn;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && di(t)),
    e
  );
}
function di(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Re(l(), o)) return !1;
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
function st(e, t) {
  for (
    t &= ~ta,
      t &= ~Fo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ys(e) {
  if (F & 6) throw Error(j(327));
  fn();
  var t = eo(e, 0);
  if (!(t & 1)) return ve(e, Q()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Il(e);
    r !== 0 && ((t = r), (n = ci(e, r)));
  }
  if (n === 1) throw ((n = cr), Dt(e, 0), st(e, t), ve(e, Q()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, me, $e),
    ve(e, Q()),
    null
  );
}
function ra(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((xn = Q() + 500), Lo && At());
  }
}
function Rt(e) {
  ct !== null && ct.tag === 0 && !(F & 6) && fn();
  var t = F;
  F |= 1;
  var n = _e.transition,
    r = I;
  try {
    if (((_e.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (_e.transition = n), (F = t), !(F & 6) && At();
  }
}
function oa() {
  (xe = ln.current), R(ln);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), em(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((Mi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && lo();
          break;
        case 3:
          vn(), R(he), R(ae), Qi();
          break;
        case 5:
          Vi(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          R(U);
          break;
        case 19:
          R(U);
          break;
        case 10:
          Bi(r.type._context);
          break;
        case 22:
        case 23:
          oa();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (q = e = xt(e.current, null)),
    (ne = xe = t),
    (Z = 0),
    (cr = null),
    (ta = Fo = Mt = 0),
    (me = Vn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (r.next = a);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Kc(e, t) {
  do {
    var n = q;
    try {
      if ((Gi(), (Hr.current = ho), po)) {
        for (var r = H.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((zt = 0),
        (X = J = H = null),
        (Hn = !1),
        (ar = 0),
        (ea.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (cr = t), (q = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          s = n,
          u = t;
        if (
          ((t = ne),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            g = s,
            p = g.tag;
          if (!(g.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = g.alternate;
            v
              ? ((g.updateQueue = v.updateQueue),
                (g.memoizedState = v.memoizedState),
                (g.lanes = v.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var x = ls(a);
          if (x !== null) {
            (x.flags &= -257),
              is(x, a, s, l, t),
              x.mode & 1 && os(l, c, t),
              (t = x),
              (u = c);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              os(l, c, t), la();
              break e;
            }
            u = Error(j(426));
          }
        } else if (G && s.mode & 1) {
          var A = ls(a);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              is(A, a, s, l, t),
              Ri(yn(u, s));
            break e;
          }
        }
        (l = u = yn(u, s)),
          Z !== 4 && (Z = 2),
          Vn === null ? (Vn = [l]) : Vn.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Nc(l, u, t);
              Za(l, f);
              break e;
            case 1:
              s = u;
              var d = l.type,
                h = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (vt === null || !vt.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = kc(l, s, t);
                Za(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Uc(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gc() {
  var e = go.current;
  return (go.current = ho), e === null ? ho : e;
}
function la() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null || (!(Mt & 268435455) && !(Fo & 268435455)) || st(ee, ne);
}
function xo(e, t) {
  var n = F;
  F |= 2;
  var r = Gc();
  (ee !== e || ne !== t) && (($e = null), Dt(e, t));
  do
    try {
      Am();
      break;
    } catch (o) {
      Kc(e, o);
    }
  while (!0);
  if ((Gi(), (F = n), (go.current = r), q !== null)) throw Error(j(261));
  return (ee = null), (ne = 0), Z;
}
function Am() {
  for (; q !== null; ) Bc(q);
}
function Cm() {
  for (; q !== null && !Yd(); ) Bc(q);
}
function Bc(e) {
  var t = Wc(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Uc(e) : (q = t),
    (ea.current = null);
}
function Uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = xm(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (q = null);
        return;
      }
    } else if (((n = ym(n, t, xe)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Et(e, t, n) {
  var r = I,
    o = _e.transition;
  try {
    (_e.transition = null), (I = 1), bm(e, t, n, r);
  } finally {
    (_e.transition = o), (I = r);
  }
  return null;
}
function bm(e, t, n, r) {
  do fn();
  while (ct !== null);
  if (F & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (af(e, l),
    e === ee && ((q = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fr ||
      ((Fr = !0),
      Vc(Xr, function () {
        return fn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = _e.transition), (_e.transition = null);
    var a = I;
    I = 1;
    var s = F;
    (F |= 4),
      (ea.current = null),
      Sm(e, n),
      zc(n, e),
      Qf(Bl),
      (to = !!Gl),
      (Bl = Gl = null),
      (e.current = n),
      jm(n),
      Jd(),
      (F = s),
      (I = a),
      (_e.transition = l);
  } else e.current = n;
  if (
    (Fr && ((Fr = !1), (ct = e), (yo = o)),
    (l = e.pendingLanes),
    l === 0 && (vt = null),
    ef(n.stateNode),
    ve(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (vo) throw ((vo = !1), (e = si), (si = null), e);
  return (
    yo & 1 && e.tag !== 0 && fn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ui ? Qn++ : ((Qn = 0), (ui = e))) : (Qn = 0),
    At(),
    null
  );
}
function fn() {
  if (ct !== null) {
    var e = Nu(yo),
      t = _e.transition,
      n = I;
    try {
      if (((_e.transition = null), (I = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (yo = 0), F & 6)) throw Error(j(331));
        var o = F;
        for (F |= 4, b = e.current; b !== null; ) {
          var l = b,
            a = l.child;
          if (b.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var c = s[u];
                for (b = c; b !== null; ) {
                  var g = b;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, g, l);
                  }
                  var p = g.child;
                  if (p !== null) (p.return = g), (b = p);
                  else
                    for (; b !== null; ) {
                      g = b;
                      var v = g.sibling,
                        x = g.return;
                      if ((Tc(g), g === c)) {
                        b = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = x), (b = v);
                        break;
                      }
                      b = x;
                    }
                }
              }
              var y = l.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var A = w.sibling;
                    (w.sibling = null), (w = A);
                  } while (w !== null);
                }
              }
              b = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (b = a);
          else
            e: for (; b !== null; ) {
              if (((l = b), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (b = f);
                break e;
              }
              b = l.return;
            }
        }
        var d = e.current;
        for (b = d; b !== null; ) {
          a = b;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (b = h);
          else
            e: for (a = d; b !== null; ) {
              if (((s = b), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(9, s);
                  }
                } catch (k) {
                  V(s, s.return, k);
                }
              if (s === a) {
                b = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (b = S);
                break e;
              }
              b = s.return;
            }
        }
        if (
          ((F = o), At(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(Co, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (_e.transition = t);
    }
  }
  return !1;
}
function xs(e, t, n) {
  (t = yn(n, t)),
    (t = Nc(e, t, 1)),
    (e = gt(e, t, 1)),
    (t = ue()),
    e !== null && (pr(e, 1, t), ve(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) xs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = kc(t, e, 1)),
            (t = gt(t, e, 1)),
            (e = ue()),
            t !== null && (pr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Pm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > Q() - na)
        ? Dt(e, 0)
        : (ta |= n)),
    ve(e, t);
}
function Hc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ar), (Ar <<= 1), !(Ar & 130023424) && (Ar = 4194304))
      : (t = 1));
  var n = ue();
  (e = tt(e, t)), e !== null && (pr(e, t, n), ve(e, n));
}
function Em(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Hc(e, n);
}
function _m(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), Hc(e, n);
}
var Wc;
Wc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), vm(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), G && t.flags & 1048576 && qu(t, so, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Vr(e, t), (e = t.pendingProps);
      var o = pn(t, ae.current);
      dn(t, n), (o = qi(null, t, r, e, o, n));
      var l = Yi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((l = !0), io(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Hi(t),
            (o.updater = Do),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jl(t, r, e, n),
            (t = ei(null, t, r, !0, l, n)))
          : ((t.tag = 0), G && l && zi(t), se(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Om(r)),
          (e = Te(r, e)),
          o)
        ) {
          case 0:
            t = Xl(null, t, r, e, n);
            break e;
          case 1:
            t = us(null, t, r, e, n);
            break e;
          case 11:
            t = as(null, t, r, e, n);
            break e;
          case 14:
            t = ss(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Te(r, o)),
        Xl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Te(r, o)),
        us(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Pc(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          tc(e, t),
          fo(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = yn(Error(j(423)), t)), (t = cs(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = yn(Error(j(424)), t)), (t = cs(e, t, r, n, o));
            break e;
          } else
            for (
              we = ht(t.stateNode.containerInfo.firstChild),
                Se = t,
                G = !0,
                Ie = null,
                n = Xu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === o)) {
            t = nt(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nc(t),
        e === null && $l(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Ul(r, o) ? (a = null) : l !== null && Ul(r, l) && (t.flags |= 32),
        bc(e, t),
        se(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && $l(t), null;
    case 13:
      return Ec(e, t, n);
    case 4:
      return (
        Wi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gn(t, null, r, n)) : se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Te(r, o)),
        as(e, t, r, o, n)
      );
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          z(uo, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (Re(l.value, a)) {
            if (l.children === o.children && !he.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                a = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = Ze(-1, n & -n)), (u.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (c.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      ql(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(j(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  ql(a, n, t),
                  (a = l.sibling);
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        se(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        dn(t, n),
        (o = Le(o)),
        (r = r(o)),
        (t.flags |= 1),
        se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Te(r, t.pendingProps)),
        (o = Te(r.type, o)),
        ss(e, t, r, o, n)
      );
    case 15:
      return Ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Te(r, o)),
        Vr(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), io(t)) : (e = !1),
        dn(t, n),
        jc(t, r, o),
        Jl(t, r, o, n),
        ei(null, t, r, !0, e, n)
      );
    case 19:
      return _c(e, t, n);
    case 22:
      return Cc(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Vc(e, t) {
  return xu(e, t);
}
function Lm(e, t, n, r) {
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
function Ee(e, t, n, r) {
  return new Lm(e, t, n, r);
}
function ia(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Om(e) {
  if (typeof e == "function") return ia(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ai)) return 11;
    if (e === Ci) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
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
function qr(e, t, n, r, o, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) ia(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case qt:
        return Tt(n.children, o, l, t);
      case ki:
        (a = 8), (o |= 8);
        break;
      case Sl:
        return (
          (e = Ee(12, n, t, o | 2)), (e.elementType = Sl), (e.lanes = l), e
        );
      case jl:
        return (e = Ee(13, n, t, o)), (e.elementType = jl), (e.lanes = l), e;
      case Nl:
        return (e = Ee(19, n, t, o)), (e.elementType = Nl), (e.lanes = l), e;
      case nu:
        return Io(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case eu:
              a = 10;
              break e;
            case tu:
              a = 9;
              break e;
            case Ai:
              a = 11;
              break e;
            case Ci:
              a = 14;
              break e;
            case lt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Tt(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function Io(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = nu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function gl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dm(e, t, n, r, o) {
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
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function aa(e, t, n, r, o, l, a, s, u) {
  return (
    (e = new Dm(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ee(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hi(l),
    e
  );
}
function Tm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $t,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qc(e) {
  if (!e) return jt;
  e = e._reactInternals;
  e: {
    if (Gt(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Qu(e, n, t);
  }
  return t;
}
function $c(e, t, n, r, o, l, a, s, u) {
  return (
    (e = aa(n, r, !0, e, o, l, a, s, u)),
    (e.context = Qc(null)),
    (n = e.current),
    (r = ue()),
    (o = yt(n)),
    (l = Ze(r, o)),
    (l.callback = t ?? null),
    gt(n, l, o),
    (e.current.lanes = o),
    pr(e, o, r),
    ve(e, r),
    e
  );
}
function zo(e, t, n, r) {
  var o = t.current,
    l = ue(),
    a = yt(o);
  return (
    (n = Qc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = gt(o, t, a)),
    e !== null && (Me(e, o, a, l), Ur(e, o, a)),
    a
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ws(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  ws(e, t), (e = e.alternate) && ws(e, t);
}
function Fm() {
  return null;
}
var qc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
Mo.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  zo(e, t, null, null);
};
Mo.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      zo(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function Mo(e) {
  this._internalRoot = e;
}
Mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    at.splice(n, 0, e), n === 0 && Pu(e);
  }
};
function ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ss() {}
function Im(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = wo(a);
        l.call(c);
      };
    }
    var a = $c(t, r, e, 0, null, !1, !1, "", Ss);
    return (
      (e._reactRootContainer = a),
      (e[et] = a.current),
      nr(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = wo(u);
      s.call(c);
    };
  }
  var u = aa(e, 0, !1, null, null, !1, !1, "", Ss);
  return (
    (e._reactRootContainer = u),
    (e[et] = u.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      zo(t, u, n, r);
    }),
    u
  );
}
function Ko(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = wo(a);
        s.call(u);
      };
    }
    zo(t, a, e, o);
  } else a = Im(n, t, e, o, r);
  return wo(a);
}
ku = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zn(t.pendingLanes);
        n !== 0 &&
          (Ei(t, n | 1), ve(t, Q()), !(F & 6) && ((xn = Q() + 500), At()));
      }
      break;
    case 13:
      Rt(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var o = ue();
          Me(r, e, 1, o);
        }
      }),
        sa(e, 1);
  }
};
_i = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = ue();
      Me(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
Au = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = tt(e, t);
    if (n !== null) {
      var r = ue();
      Me(n, e, t, r);
    }
    sa(e, t);
  }
};
Cu = function () {
  return I;
};
bu = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
Dl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = _o(r);
            if (!o) throw Error(j(90));
            ou(r), Cl(r, o);
          }
        }
      }
      break;
    case "textarea":
      iu(e, n);
      break;
    case "select":
      (t = n.value), t != null && an(e, !!n.multiple, t, !1);
  }
};
mu = ra;
pu = Rt;
var zm = { usingClientEntryPoint: !1, Events: [gr, Xt, _o, du, fu, ra] },
  Tn = {
    findFiberByHostInstance: _t,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Mm = {
    bundleType: Tn.bundleType,
    version: Tn.version,
    rendererPackageName: Tn.rendererPackageName,
    rendererConfig: Tn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = vu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tn.findFiberByHostInstance || Fm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (Co = Ir.inject(Mm)), (He = Ir);
    } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zm;
Ne.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t)) throw Error(j(200));
  return Tm(e, t, null, n);
};
Ne.createRoot = function (e, t) {
  if (!ca(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = qc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = aa(e, 1, !1, null, null, n, !1, r, o)),
    (e[et] = t.current),
    nr(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
Ne.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = vu(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
  return Rt(e);
};
Ne.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(j(200));
  return Ko(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
  if (!ca(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = qc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = $c(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[et] = t.current),
    nr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Mo(t);
};
Ne.render = function (e, t, n) {
  if (!Ro(t)) throw Error(j(200));
  return Ko(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Rt(function () {
        Ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
Ne.unstable_batchedUpdates = ra;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ko(e, t, n, !1, r);
};
Ne.version = "18.3.1-next-f1338f8080-20240426";
function Yc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc);
    } catch (e) {
      console.error(e);
    }
}
Yc(), (Ys.exports = Ne);
var Rm = Ys.exports,
  js = Rm;
(xl.createRoot = js.createRoot), (xl.hydrateRoot = js.hydrateRoot);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Km = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ae = (e, t) => {
  const n = N.forwardRef(
    (
      {
        color: r = "currentColor",
        size: o = 24,
        strokeWidth: l = 2,
        absoluteStrokeWidth: a,
        className: s = "",
        children: u,
        ...c
      },
      g
    ) =>
      N.createElement(
        "svg",
        {
          ref: g,
          ...Km,
          width: o,
          height: o,
          stroke: r,
          strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
          className: ["lucide", `lucide-${Gm(e)}`, s].join(" "),
          ...c,
        },
        [
          ...t.map(([p, v]) => N.createElement(p, v)),
          ...(Array.isArray(u) ? u : [u]),
        ]
      )
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ns = Ae("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = Ae("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = Ae("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = Ae("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = Ae("Facebook", [
  [
    "path",
    {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
      key: "1jg4f8",
    },
  ],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = Ae("Instagram", [
  [
    "rect",
    {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5",
      key: "2e1cvw",
    },
  ],
  [
    "path",
    { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
  ],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qm = Ae("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $m = Ae("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = Ae("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vl = Ae("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = Ae("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fi = Ae("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.366.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = Ae("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4",
    },
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
]);
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dr.apply(this, arguments)
  );
}
var dt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(dt || (dt = {}));
const ks = "popstate";
function Zm(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: a, hash: s } = r.location;
    return mi(
      "",
      { pathname: l, search: a, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : So(o);
  }
  return ep(t, n, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Jc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Xm() {
  return Math.random().toString(36).substr(2, 8);
}
function As(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function mi(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    dr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Nn(t) : t,
      { state: n, key: (t && t.key) || r || Xm() }
    )
  );
}
function So(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Nn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function ep(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    a = o.history,
    s = dt.Pop,
    u = null,
    c = g();
  c == null && ((c = 0), a.replaceState(dr({}, a.state, { idx: c }), ""));
  function g() {
    return (a.state || { idx: null }).idx;
  }
  function p() {
    s = dt.Pop;
    let A = g(),
      f = A == null ? null : A - c;
    (c = A), u && u({ action: s, location: w.location, delta: f });
  }
  function v(A, f) {
    s = dt.Push;
    let d = mi(w.location, A, f);
    c = g() + 1;
    let h = As(d, c),
      S = w.createHref(d);
    try {
      a.pushState(h, "", S);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(S);
    }
    l && u && u({ action: s, location: w.location, delta: 1 });
  }
  function x(A, f) {
    s = dt.Replace;
    let d = mi(w.location, A, f);
    c = g();
    let h = As(d, c),
      S = w.createHref(d);
    a.replaceState(h, "", S),
      l && u && u({ action: s, location: w.location, delta: 0 });
  }
  function y(A) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      d = typeof A == "string" ? A : So(A);
    return (
      (d = d.replace(/ $/, "%20")),
      Y(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(o, a);
    },
    listen(A) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(ks, p),
        (u = A),
        () => {
          o.removeEventListener(ks, p), (u = null);
        }
      );
    },
    createHref(A) {
      return t(o, A);
    },
    createURL: y,
    encodeLocation(A) {
      let f = y(A);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: v,
    replace: x,
    go(A) {
      return a.go(A);
    },
  };
  return w;
}
var Cs;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Cs || (Cs = {}));
function tp(e, t, n) {
  return n === void 0 && (n = "/"), np(e, t, n, !1);
}
function np(e, t, n, r) {
  let o = typeof t == "string" ? Nn(t) : t,
    l = da(o.pathname || "/", n);
  if (l == null) return null;
  let a = Zc(e);
  rp(a);
  let s = null;
  for (let u = 0; s == null && u < a.length; ++u) {
    let c = pp(l);
    s = fp(a[u], c, r);
  }
  return s;
}
function Zc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, a, s) => {
    let u = {
      relativePath: s === void 0 ? l.path || "" : s,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: a,
      route: l,
    };
    u.relativePath.startsWith("/") &&
      (Y(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = wt([r, u.relativePath]),
      g = n.concat(u);
    l.children &&
      l.children.length > 0 &&
      (Y(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Zc(l.children, t, g, c)),
      !(l.path == null && !l.index) &&
        t.push({ path: c, score: cp(c, l.index), routesMeta: g });
  };
  return (
    e.forEach((l, a) => {
      var s;
      if (l.path === "" || !((s = l.path) != null && s.includes("?"))) o(l, a);
      else for (let u of Xc(l.path)) o(l, a, u);
    }),
    t
  );
}
function Xc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let a = Xc(r.join("/")),
    s = [];
  return (
    s.push(...a.map((u) => (u === "" ? l : [l, u].join("/")))),
    o && s.push(...a),
    s.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function rp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : dp(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const op = /^:[\w-]+$/,
  lp = 3,
  ip = 2,
  ap = 1,
  sp = 10,
  up = -2,
  bs = (e) => e === "*";
function cp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(bs) && (r += up),
    t && (r += ip),
    n
      .filter((o) => !bs(o))
      .reduce((o, l) => o + (op.test(l) ? lp : l === "" ? ap : sp), r)
  );
}
function dp(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fp(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    l = "/",
    a = [];
  for (let s = 0; s < r.length; ++s) {
    let u = r[s],
      c = s === r.length - 1,
      g = l === "/" ? t : t.slice(l.length) || "/",
      p = Ps(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: c },
        g
      ),
      v = u.route;
    if (
      (!p &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (p = Ps(
          { path: u.relativePath, caseSensitive: u.caseSensitive, end: !1 },
          g
        )),
      !p)
    )
      return null;
    Object.assign(o, p.params),
      a.push({
        params: o,
        pathname: wt([l, p.pathname]),
        pathnameBase: yp(wt([l, p.pathnameBase])),
        route: v,
      }),
      p.pathnameBase !== "/" && (l = wt([l, p.pathnameBase]));
  }
  return a;
}
function Ps(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mp(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    a = l.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((c, g, p) => {
      let { paramName: v, isOptional: x } = g;
      if (v === "*") {
        let w = s[p] || "";
        a = l.slice(0, l.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const y = s[p];
      return (
        x && !y ? (c[v] = void 0) : (c[v] = (y || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: l,
    pathnameBase: a,
    pattern: e,
  };
}
function mp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Jc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, u) => (
            r.push({ paramName: s, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function pp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Jc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function da(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function hp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Nn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : gp(n, t)) : t,
    search: xp(r),
    hash: wp(o),
  };
}
function gp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ed(e, t) {
  let n = vp(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function td(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Nn(e))
    : ((o = dr({}, e)),
      Y(
        !o.pathname || !o.pathname.includes("?"),
        yl("?", "pathname", "search", o)
      ),
      Y(
        !o.pathname || !o.pathname.includes("#"),
        yl("#", "pathname", "hash", o)
      ),
      Y(!o.search || !o.search.includes("#"), yl("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    a = l ? "/" : o.pathname,
    s;
  if (a == null) s = n;
  else {
    let p = t.length - 1;
    if (!r && a.startsWith("..")) {
      let v = a.split("/");
      for (; v[0] === ".."; ) v.shift(), (p -= 1);
      o.pathname = v.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let u = hp(o, s),
    c = a && a !== "/" && a.endsWith("/"),
    g = (l || a === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (c || g) && (u.pathname += "/"), u;
}
const wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  yp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  wp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Sp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const nd = ["post", "put", "patch", "delete"];
new Set(nd);
const jp = ["get", ...nd];
new Set(jp);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fr() {
  return (
    (fr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fr.apply(this, arguments)
  );
}
const fa = N.createContext(null),
  Np = N.createContext(null),
  Bt = N.createContext(null),
  Go = N.createContext(null),
  Ut = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  rd = N.createContext(null);
function kp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  yr() || Y(!1);
  let { basename: r, navigator: o } = N.useContext(Bt),
    { hash: l, pathname: a, search: s } = ld(e, { relative: n }),
    u = a;
  return (
    r !== "/" && (u = a === "/" ? r : wt([r, a])),
    o.createHref({ pathname: u, search: s, hash: l })
  );
}
function yr() {
  return N.useContext(Go) != null;
}
function Bo() {
  return yr() || Y(!1), N.useContext(Go).location;
}
function od(e) {
  N.useContext(Bt).static || N.useLayoutEffect(e);
}
function Ap() {
  let { isDataRoute: e } = N.useContext(Ut);
  return e ? Mp() : Cp();
}
function Cp() {
  yr() || Y(!1);
  let e = N.useContext(fa),
    { basename: t, future: n, navigator: r } = N.useContext(Bt),
    { matches: o } = N.useContext(Ut),
    { pathname: l } = Bo(),
    a = JSON.stringify(ed(o, n.v7_relativeSplatPath)),
    s = N.useRef(!1);
  return (
    od(() => {
      s.current = !0;
    }),
    N.useCallback(
      function (c, g) {
        if ((g === void 0 && (g = {}), !s.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let p = td(c, JSON.parse(a), l, g.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : wt([t, p.pathname])),
          (g.replace ? r.replace : r.push)(p, g.state, g);
      },
      [t, r, a, l, e]
    )
  );
}
function ld(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = N.useContext(Bt),
    { matches: o } = N.useContext(Ut),
    { pathname: l } = Bo(),
    a = JSON.stringify(ed(o, r.v7_relativeSplatPath));
  return N.useMemo(() => td(e, JSON.parse(a), l, n === "path"), [e, a, l, n]);
}
function bp(e, t) {
  return Pp(e, t);
}
function Pp(e, t, n, r) {
  yr() || Y(!1);
  let { navigator: o } = N.useContext(Bt),
    { matches: l } = N.useContext(Ut),
    a = l[l.length - 1],
    s = a ? a.params : {};
  a && a.pathname;
  let u = a ? a.pathnameBase : "/";
  a && a.route;
  let c = Bo(),
    g;
  if (t) {
    var p;
    let A = typeof t == "string" ? Nn(t) : t;
    u === "/" || ((p = A.pathname) != null && p.startsWith(u)) || Y(!1),
      (g = A);
  } else g = c;
  let v = g.pathname || "/",
    x = v;
  if (u !== "/") {
    let A = u.replace(/^\//, "").split("/");
    x = "/" + v.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let y = tp(e, { pathname: x }),
    w = Dp(
      y &&
        y.map((A) =>
          Object.assign({}, A, {
            params: Object.assign({}, s, A.params),
            pathname: wt([
              u,
              o.encodeLocation
                ? o.encodeLocation(A.pathname).pathname
                : A.pathname,
            ]),
            pathnameBase:
              A.pathnameBase === "/"
                ? u
                : wt([
                    u,
                    o.encodeLocation
                      ? o.encodeLocation(A.pathnameBase).pathname
                      : A.pathnameBase,
                  ]),
          })
        ),
      l,
      n,
      r
    );
  return t && w
    ? N.createElement(
        Go.Provider,
        {
          value: {
            location: fr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: dt.Pop,
          },
        },
        w
      )
    : w;
}
function Ep() {
  let e = zp(),
    t = Sp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: o }, n) : null,
    null
  );
}
const _p = N.createElement(Ep, null);
class Lp extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          Ut.Provider,
          { value: this.props.routeContext },
          N.createElement(rd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Op(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.useContext(fa);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(Ut.Provider, { value: t }, r)
  );
}
function Dp(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var l;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (l = r) != null &&
      l.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let a = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let g = a.findIndex(
      (p) => p.route.id && (s == null ? void 0 : s[p.route.id]) !== void 0
    );
    g >= 0 || Y(!1), (a = a.slice(0, Math.min(a.length, g + 1)));
  }
  let u = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let g = 0; g < a.length; g++) {
      let p = a[g];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (c = g),
        p.route.id)
      ) {
        let { loaderData: v, errors: x } = n,
          y =
            p.route.loader &&
            v[p.route.id] === void 0 &&
            (!x || x[p.route.id] === void 0);
        if (p.route.lazy || y) {
          (u = !0), c >= 0 ? (a = a.slice(0, c + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((g, p, v) => {
    let x,
      y = !1,
      w = null,
      A = null;
    n &&
      ((x = s && p.route.id ? s[p.route.id] : void 0),
      (w = p.route.errorElement || _p),
      u &&
        (c < 0 && v === 0
          ? ((y = !0), (A = null))
          : c === v &&
            ((y = !0), (A = p.route.hydrateFallbackElement || null))));
    let f = t.concat(a.slice(0, v + 1)),
      d = () => {
        let h;
        return (
          x
            ? (h = w)
            : y
            ? (h = A)
            : p.route.Component
            ? (h = N.createElement(p.route.Component, null))
            : p.route.element
            ? (h = p.route.element)
            : (h = g),
          N.createElement(Op, {
            match: p,
            routeContext: { outlet: g, matches: f, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || v === 0)
      ? N.createElement(Lp, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: x,
          children: d(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var id = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(id || {}),
  jo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(jo || {});
function Tp(e) {
  let t = N.useContext(fa);
  return t || Y(!1), t;
}
function Fp(e) {
  let t = N.useContext(Np);
  return t || Y(!1), t;
}
function Ip(e) {
  let t = N.useContext(Ut);
  return t || Y(!1), t;
}
function ad(e) {
  let t = Ip(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function zp() {
  var e;
  let t = N.useContext(rd),
    n = Fp(jo.UseRouteError),
    r = ad(jo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Mp() {
  let { router: e } = Tp(id.UseNavigateStable),
    t = ad(jo.UseNavigateStable),
    n = N.useRef(!1);
  return (
    od(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, fr({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const Es = {};
function Rp(e, t) {
  Es[t] || ((Es[t] = !0), console.warn(t));
}
const _s = (e, t, n) =>
  Rp(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function Kp(e, t) {
  (e != null && e.v7_startTransition) ||
    _s(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      _s(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Qt(e) {
  Y(!1);
}
function Gp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = dt.Pop,
    navigator: l,
    static: a = !1,
    future: s,
  } = e;
  yr() && Y(!1);
  let u = t.replace(/^\/*/, "/"),
    c = N.useMemo(
      () => ({
        basename: u,
        navigator: l,
        static: a,
        future: fr({ v7_relativeSplatPath: !1 }, s),
      }),
      [u, s, l, a]
    );
  typeof r == "string" && (r = Nn(r));
  let {
      pathname: g = "/",
      search: p = "",
      hash: v = "",
      state: x = null,
      key: y = "default",
    } = r,
    w = N.useMemo(() => {
      let A = da(g, u);
      return A == null
        ? null
        : {
            location: { pathname: A, search: p, hash: v, state: x, key: y },
            navigationType: o,
          };
    }, [u, g, p, v, x, y, o]);
  return w == null
    ? null
    : N.createElement(
        Bt.Provider,
        { value: c },
        N.createElement(Go.Provider, { children: n, value: w })
      );
}
function Bp(e) {
  let { children: t, location: n } = e;
  return bp(pi(t), n);
}
new Promise(() => {});
function pi(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    N.Children.forEach(e, (r, o) => {
      if (!N.isValidElement(r)) return;
      let l = [...t, o];
      if (r.type === N.Fragment) {
        n.push.apply(n, pi(r.props.children, l));
        return;
      }
      r.type !== Qt && Y(!1), !r.props.index || !r.props.children || Y(!1);
      let a = {
        id: r.props.id || l.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = pi(r.props.children, l)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hi() {
  return (
    (hi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    hi.apply(this, arguments)
  );
}
function Up(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Hp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Wp(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Hp(e);
}
const Vp = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Qp = "6";
try {
  window.__reactRouterVersion = Qp;
} catch {}
const $p = "startTransition",
  Ls = bd[$p];
function qp(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    l = N.useRef();
  l.current == null && (l.current = Zm({ window: o, v5Compat: !0 }));
  let a = l.current,
    [s, u] = N.useState({ action: a.action, location: a.location }),
    { v7_startTransition: c } = r || {},
    g = N.useCallback(
      (p) => {
        c && Ls ? Ls(() => u(p)) : u(p);
      },
      [u, c]
    );
  return (
    N.useLayoutEffect(() => a.listen(g), [a, g]),
    N.useEffect(() => Kp(r), [r]),
    N.createElement(Gp, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  );
}
const Yp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  gi = N.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: a,
        state: s,
        target: u,
        to: c,
        preventScrollReset: g,
        viewTransition: p,
      } = t,
      v = Up(t, Vp),
      { basename: x } = N.useContext(Bt),
      y,
      w = !1;
    if (typeof c == "string" && Jp.test(c) && ((y = c), Yp))
      try {
        let h = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
          k = da(S.pathname, x);
        S.origin === h.origin && k != null
          ? (c = k + S.search + S.hash)
          : (w = !0);
      } catch {}
    let A = kp(c, { relative: o }),
      f = Zp(c, {
        replace: a,
        state: s,
        target: u,
        preventScrollReset: g,
        relative: o,
        viewTransition: p,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || f(h);
    }
    return N.createElement(
      "a",
      hi({}, v, { href: y || A, onClick: w || l ? r : d, ref: n, target: u })
    );
  });
var Os;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Os || (Os = {}));
var Ds;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ds || (Ds = {}));
function Zp(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: a,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    u = Ap(),
    c = Bo(),
    g = ld(e, { relative: a });
  return N.useCallback(
    (p) => {
      if (Wp(p, n)) {
        p.preventDefault();
        let v = r !== void 0 ? r : So(c) === So(g);
        u(e, {
          replace: v,
          state: o,
          preventScrollReset: l,
          relative: a,
          viewTransition: s,
        });
      }
    },
    [c, u, g, r, o, n, e, l, a, s]
  );
}
const Ts = [
  { name: "Home", href: "/" },
  { name: "Curriculum", href: "/Curriculum" },
  { name: "Testimonial", href: "/#testimonial" },
  { name: "Top Achievers", href: "/achiver" },
];
function Xp() {
  const [e, t] = Ue.useState(!1),
    n = () => {
      t(!e);
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className:
          "relative flex flex-row justify-center space-x-3 w-full bg-slate-500 items-center p-2",
        children: [
          i.jsx("h1", {
            className: "text-center text-white  py-2 h-15 student-cracks",
            children:
              "Each day a student Cracks 20+ LPA  SDE offer in our program!",
          }),
          "   ",
          i.jsx(gi, {
            to: "https://wa.me/918879355057",
            children: i.jsx("button", {
              role: "button",
              className:
                "mt-2 mb-2  font-sans lg:text-1xl  font-bold uppercase rounded-lg sm:text-base py-1 px-1  sm:mr-3 bg-red-500 text-white  items-center top-enroll-btn",
              children: "Enroll Now",
            }),
          }),
        ],
      }),
      i.jsx("div", {
        className: "relative w-full    bg-gray-100 shadow-lg",
        children: i.jsxs("div", {
          className:
            "mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 text-black font-roboto",
          children: [
            i.jsxs("div", {
              className: "inline-flex items-center space-x-2",
              children: [
                i.jsx("span", {}),
                i.jsxs("span", {
                  className: "font-bold text-red-600 uppercase",
                  children: [" ", i.jsx("i", { children: "DesiQna" }), " "],
                }),
              ],
            }),
            i.jsx("div", {
              className: "hidden lg:block",
              children: i.jsx("ul", {
                className: "inline-flex space-x-8 font-serif",
                children: Ts.map((r) =>
                  i.jsx(
                    "li",
                    {
                      children: i.jsx(gi, {
                        to: r.href,
                        className: "text-sm font-semibold hover:text-gray-900",
                        children: r.name,
                      }),
                    },
                    r.name
                  )
                ),
              }),
            }),
            i.jsx("div", { className: "hidden lg:block" }),
            i.jsx("div", {
              className: "lg:hidden",
              children: i.jsx($m, {
                onClick: n,
                className: "h-6 w-6 cursor-pointer",
              }),
            }),
            e &&
              i.jsx("div", {
                className:
                  "absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden bg-white shadow-lg",
                children: i.jsx("div", {
                  className:
                    "divide-y-2 divide-gray-50 rounded-lg ring-1 ring-black ring-opacity-5",
                  children: i.jsxs("div", {
                    className: "px-5 pb-6 pt-5",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          i.jsx("div", {
                            className: "inline-flex items-center space-x-2",
                            children: i.jsxs("span", {
                              className: "font-bold text-red-600 uppercase",
                              children: [
                                " ",
                                i.jsx("i", { children: "DesiQna" }),
                                " ",
                              ],
                            }),
                          }),
                          i.jsx("div", {
                            className: "-mr-2",
                            children: i.jsxs("button", {
                              type: "button",
                              onClick: n,
                              className:
                                "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                              children: [
                                i.jsx("span", {
                                  className: "sr-only",
                                  children: "Close menu",
                                }),
                                i.jsx(fi, {
                                  className: "h-6 w-6",
                                  "aria-hidden": "true",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "mt-6",
                        children: i.jsx("nav", {
                          className: "grid gap-y-4",
                          children: Ts.map((r) =>
                            i.jsx(
                              "a",
                              {
                                href: r.href,
                                className:
                                  "-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50",
                                children: i.jsx("span", {
                                  className:
                                    "ml-3 text-base font-medium text-gray-900",
                                  children: r.name,
                                }),
                              },
                              r.name
                            )
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        }),
      }),
    ],
  });
}
function eh() {
  return i.jsx("footer", {
    className: "w-full mt-10 bg-white shadow-md",
    children: i.jsx("div", {
      className: "mx-auto max-w-6xl px-4 lg:px-0",
      children: i.jsxs("div", {
        className:
          "flex flex-col md:flex-row justify-between items-center py-4",
        children: [
          i.jsxs("div", {
            className: "flex items-center",
            children: [
              i.jsx("svg", {
                width: "40",
                height: "46",
                viewBox: "0 0 50 56",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "w-8 h-8 md:w-10 md:h-10",
              }),
              i.jsx("span", {
                className:
                  "ml-4 text-lg text-red-500 italic font-bold uppercase",
                children: "Desiqna",
              }),
            ],
          }),
          i.jsxs("div", {
            className: "flex items-center mt-4 md:mt-0 space-x-4",
            children: [
              i.jsxs("a", {
                href: "https://www.Facebook.com/company/desiqna/",
                children: [" ", i.jsx(Wm, { size: 24, color: "#3b5998" })],
              }),
              i.jsx("a", {
                href: "https://www.linkedin.com/company/desiqna/",
                children: i.jsx(Qm, { size: 24, color: "#0077b5" }),
              }),
              i.jsx("a", {
                href: "https://www.instagram.com/desiqna_official/",
                children: i.jsx(Vm, { size: 24, color: "#e4405f" }),
              }),
              i.jsx("a", {
                href: "https://youtu.be/0S7WMSpR36o?si=JcdnYirmqJBJbigg",
                children: i.jsx(Jm, { size: 24, color: "#ff0000" }),
              }),
              i.jsx("a", {
                href: "https://www.desiqna.in/refund-policy",
                children: i.jsx("p", { children: "Refund Policy " }),
              }),
              i.jsx("a", {
                href: "https://www.desiqna.in/refund-policy",
                children: i.jsx("p", { children: "CopyRight  Policy" }),
              }),
            ],
          }),
          i.jsx("div", {
            children: i.jsx("p", {
              className: "text-sm font-medium text-gray-500",
              children: "© 2025 DesiQna. All rights reserved.",
            }),
          }),
        ],
      }),
    }),
  });
}
const th = "modulepreload",
  nh = function (e) {
    return "/" + e;
  },
  Fs = {},
  Uo = function (t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        s =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((u) => {
          if (((u = nh(u)), u in Fs)) return;
          Fs[u] = !0;
          const c = u.endsWith(".css"),
            g = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${u}"]${g}`)) return;
          const p = document.createElement("link");
          if (
            ((p.rel = c ? "stylesheet" : th),
            c || (p.as = "script"),
            (p.crossOrigin = ""),
            (p.href = u),
            s && p.setAttribute("nonce", s),
            document.head.appendChild(p),
            c)
          )
            return new Promise((v, x) => {
              p.addEventListener("load", v),
                p.addEventListener("error", () =>
                  x(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    function l(a) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = a), window.dispatchEvent(s), !s.defaultPrevented))
        throw a;
    }
    return o.then((a) => {
      for (const s of a || []) s.status === "rejected" && l(s.reason);
      return t().catch(l);
    });
  },
  fe = {
    span1: "Bringing Education Revolution in",
    span2: " India!",
    h1: "DesiQNA",
    h2: "Personalized Training",
    subh1: " & 1-1 Mentoring",
    subh2: "Program",
    ul1: "Daily Live DSA Class (Online Test + Interview Prep + Competitive Programming) + Doubt Session from Mon-Sun",
    ul2: "Students from Tier-3 colleges have Cracked 20LPA+offer in the last 10 months",
    ul3: "851 hours structured course on DSA(OA + Interview + CP) with 24 *7 doubt Support ",
    ul5: "1-1 Personalized Mentoring + Daily Live Training By Kumar K Sir(SDE @ Amazon)",
    ul6: "Kumar K sir is going to resolve your personal issues in hours of personalized mentoring ; this is the reason why so students by now have gotten high paying offers.",
    ul4: "(Separate Batch for college students/freshers/working professionals/Non-IT graduates) :- We have high number of selections in each of the categories.",
    button: "Enroll Now",
    button1: "Ask your Query",
    button2: "Call For Query",
    button1: "Ask your Query",
    butt2: "Brochure",
    img: "section2.jpg",
  };
var sd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Is = Ue.createContext && Ue.createContext(sd),
  rh = ["attr", "size", "title"];
function oh(e, t) {
  if (e == null) return {};
  var n = lh(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (o = 0; o < l.length; o++)
      (r = l[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function lh(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function No() {
  return (
    (No = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    No.apply(this, arguments)
  );
}
function zs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zs(Object(n), !0).forEach(function (r) {
          ih(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zs(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ih(e, t, n) {
  return (
    (t = ah(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ah(e) {
  var t = sh(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sh(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ud(e) {
  return (
    e &&
    e.map((t, n) =>
      Ue.createElement(t.tag, ko({ key: n }, t.attr), ud(t.child))
    )
  );
}
function ma(e) {
  return (t) =>
    Ue.createElement(uh, No({ attr: ko({}, e.attr) }, t), ud(e.child));
}
function uh(e) {
  var t = (n) => {
    var { attr: r, size: o, title: l } = e,
      a = oh(e, rh),
      s = o || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      Ue.createElement(
        "svg",
        No(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: u,
            style: ko(ko({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && Ue.createElement("title", null, l),
        e.children
      )
    );
  };
  return Is !== void 0
    ? Ue.createElement(Is.Consumer, null, (n) => t(n))
    : t(sd);
}
function Ch(e) {
  return ma({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function bh(e) {
  return ma({
    tag: "svg",
    attr: { viewBox: "0 0 256 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ce(e) {
  return ma({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z",
        },
        child: [],
      },
    ],
  })(e);
}
function ch({
  p: e,
  h1: t,
  company: n,
  details: r,
  student: o,
  img: l,
  video: a,
}) {
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      children: i.jsx("section", {
        className: "mx-auto mb-2 max-w-screen-lg px-5 py-10 md:py-24",
        children: i.jsxs("section", {
          className: "text-gray-600 body-font",
          children: [
            i.jsx("h1", {
              className:
                "text-center font-bold text-gray-700 font-sans text-4xl mb-8 uppercase top-perfor",
              children: "Our RECENT  Month RESULT",
            }),
            i.jsxs("div", {
              className:
                "flex flex-col md:flex-row items-center justify-center gap-[7rem] border-2 border-gray-300 rounded-lg shadow-md  p-6 pic_gap",
              children: [
                i.jsxs("div", {
                  className:
                    "md:w-1/2 flex flex-col items-center md:items-start text-center ",
                  children: [
                    i.jsx("span", {
                      className:
                        "text-3xl text-red-600 font-sans font-bold mb-4",
                      children: e,
                    }),
                    i.jsx("h1", {
                      className:
                        "title-font mt-2 md:mt-0 sm:text-4xl lg:text-2xl mb-4 font-bold text-gray-900 text-center md:text-left",
                      children: t,
                    }),
                    i.jsx("p", {
                      className:
                        "mb-4 leading-relaxed text-black text-center md:text-left",
                      children: r,
                    }),
                    i.jsxs("div", {
                      className:
                        "flex gap-10 mt-3 justify-center md:justify-start",
                      children: [
                        i.jsx("h1", {
                          className:
                            "text-xl text-black rounded-md p-3 font-bold",
                          children: i.jsxs(gi, { to: a, children: ["  ", o] }),
                        }),
                        i.jsx("img", {
                          src: n,
                          width: 160,
                          alt: "img",
                          height: 70,
                          className:
                            "text-xl text-white  rounded-md p-3 font-bold flex items-center justify-center",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "md:w-1/2 mt-3 flex justify-center items-center  md:justify-center",
                  children: i.jsx("img", {
                    className:
                      "object-cover object-center rounded-lg  shadow-[0px_22px_300px_10px_#f56565,19px_3px_72px_13px_#e2e8f0] ",
                    width: 400,
                    height: 400,
                    alt: "hero",
                    src: l,
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
const Ms = {
  user0: {
    id: 0,
    p: "Tier-4 College to OffCampus SDE- Internship Offer from Google",
    h1: "Kumar K Mentoring Student cracked Off-Campus SDE- Internship Offer from Google after 8 months of advanced DSA(OA + CP + System Design) training.",
    company: "https://www.vectorlogo.zone/logos/google/google-tile.svg",
    student: "Watch Video",
    video: "https://www.youtube.com/shorts/W0lWXMxMbfM",
    img: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758607984/WhatsApp_Image_2025-09-23_at_01.04.00_a9a55e7c_v8iczu.jpg",
  },
  user1: {
    id: 1,
    p: "Tier-3 College to Google + Amazon Internship",
    h1: "Kumar K Mentoring Student cracked SDE- Internship Offer from Google and Amazon after 8 months of advanced DSA(OA + CP + System Design) training.",
    company:
      "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
    student: "Watch Video",
    video: "https://www.youtube.com/shorts/imTzPWC9CPo",
    img: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762425009/WhatsApp_Image_2025-11-06_at_15.58.51_4043db9e_flpein.jpg",
  },
  user2: {
    id: 2,
    p: "Tier-3 College to OffCampus SDE- Internship Offer from Adobe",
    img: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762427876/WhatsApp_Image_2025-11-06_at_16.44.04_d23ac4e3_xttuoc.jpg",
    h1: "Kumar K student cracks OffCampus Adobe SDE internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
    student: "Anya Sharma (View Post)",
    video:
      "https://www.linkedin.com/posts/kumark1_ramram-kumark-student-activity-7367179005877313538-Ch7z/",
    company:
      "https://imgs.search.brave.com/nD3yKjOY9c2xNAOXoGzR2sFxNjutwgRAjaqLjhWa1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
  },
  user3: {
    id: 3,
    p: "Tier-3 College to OffCampus SDE- Internship Offer from Amazon",
    img: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762423413/WhatsApp_Image_2025-11-06_at_15.12.02_5539f880_urbzg3.jpg",
    h1: "Kumar K student cracks OffCampus Amazon SDE internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
    student: "Vyom Goyal (View Post)",
    video:
      "https://www.linkedin.com/posts/vyom-goyal-09ab5b246_learningjourney-dsa-codingjourney-activity-7387405007480025088-vthk",
    company: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png",
  },
  user4: {
    id: 4,
    p: "Student cracks 51 Lakhs/Year SDE-offer from Amazon.",
    h1: "Kumar K Mentoring Student cracked Off-Campus Full-Time SDE Offer from Amazon after 8 months of advanced DSA(OA + CP + System Design) training.",
    company: "https://tse2.mm.bing.net/th/id/OIP.ynG9bDG-UKi5-HizOP8UeQHaHa",
    student: "Watch Video",
    video: "https://www.youtube.com/watch?v=6pkkepj5XlQ",
    img: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1755545052/maxresdefault1_hahx6k.jpg",
  },
  user5: {
    id: 5,
    p: "Student cracks 27 Lakhs/Year SDE-offer from Qualcomm",
    h1: "Kumar K Mentoring Student cracked Off-Campus Full-Time SDE offer from Qualcomm after 8 months of advanced DSA(OA + CP + System Design) training.",
    company: "https://www.shutterstock.com/image-photo/qualcomm-logo",
    student: "Watch Video",
    video: "https://www.youtube.com/watch?v=q9yByJgWV6M",
    img: "https://img.youtube.com/vi/q9yByJgWV6M/maxresdefault.jpg",
  },
  user6: {
    id: 6,
    p: "Kumar K Student cracks 40LPA SDE-offer from PayPal",
    h1: "Kumar K Mentoring Student cracked Off-Campus Full-Time SDE Offer from PayPal after 8 months of advanced DSA(OA + CP + System Design) training.",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01IiJEzLYwzuQethJraGGG-3-vbKQ8AbQTQ",
    student: "Kishore M (Watch Video)",
    video: "https://www.youtube.com/watch?v=BjHRUKpBhKo",
    img: "kishorMpaypl.jpg",
  },
  user7: {
    id: 7,
    p: "Tier-4 College to OffCampus SDE-Offer from BrowserStack",
    h1: "Kumar K Mentoring Student cracks OffCampus SDE-Offer from BrowserStack after 8 months of advanced DSA(OA + CP + System Design) training + OffCampus Referral Support",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4IJCgj4MnJbqkpkW2wcFYkPjdnA3weO7EIg",
    student: "Akash Litoriya (Watch Video)",
    video: "https://www.youtube.com/watch?v=Z2Mjtv5tLx0",
    img: "akash1.jpg",
  },
  user8: {
    id: 8,
    p: "Kumar K Student cracks OffCampus SDE-offer from Myntra!",
    h1: "Mentoring Student cracks OffCampus SDE-offer from Myntra after 8 months of advanced DSA(OA + CP + System Design) training.",
    company: "https://www.myntra.com/assets/MyntraWebLogo.png",
    student: "Kumar Harsh",
    img: "harsh.jpg",
  },
  user9: {
    id: 9,
    p: "From Waiter to 40LPA SDE-2 at Europe Based MNC",
    h1: "Mentoring Student cracks SDE-2 offer from Europe Based MNC BCG-X after 8 months of advanced DSA(OA + CP + System Design) training",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQO4KkdeZ3CekseJTegnnVX67VVXbhx0gzg",
    student: "Anind Jha (Watch Video)",
    video: "https://youtu.be/U9GGuv2xbV4",
    img: "anad.png",
  },
  user10: {
    id: 10,
    p: "Kumar K Student cracks OffCampus offer from Amazon",
    h1: "Kumar K Mentoring Student cracks OffCampus offer from Amazon",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJT1fNUVSRfm1-7bzmOuYh-i79r6zGudoEmA",
    student: "Abirami Gurushanker (Watch Post)",
    video:
      "https://www.linkedin.com/posts/abirami-gurushanker-b549a725a_connections-amazoninternship-softwaredevelopment-activity-7280447727920947202-OAhn",
    img: "abiram.jpg",
  },
  user11: {
    id: 11,
    p: "Kumar K Student cracks offer from Google!",
    h1: "Kumar K Mentoring Student cracks offer from Google after 8 months of advanced DSA(OA + CP) training",
    company:
      "https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png",
    student: "Shivam Kumar",
    img: "shivamg.jpg",
  },
  user12: {
    id: 12,
    p: "Kumar K Student cracks offer from Directi and Zomato",
    h1: "Mentoring Student cracks offer from Directi and Zomato after 8 months of advanced DSA(OA + CP + System Design) training",
    company:
      "https://imgs.search.brave.com/YDIL1tcLER0y6Jkbo92AHD4aCru7_1IyfeDkQBan4Hw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy96/b21hdG8tYXBwLWxv/Z28taWNvbi1oZC1w/bmctNzAxNzUxNjk0/OTY4MzMwcmVwejBu/NHR1ZC5wbmc",
    student: "Aaditya Gupta (Watch Post)",
    video:
      "https://www.linkedin.com/posts/kumark1_ramram-kumark-coding-activity-7360692834254938113-ZD6E",
    img: "adit.jpg",
  },
  user13: {
    id: 13,
    p: "World Rank 160/30000 participants in LeetCode contest",
    h1: "Kumar K Mentoring Student Achieves World Rank 160/30000 in LeetCode contest",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bzCI3h8HZdh83wkNL8FY535Zzfum_v2DiA",
    student: "Aman Singh",
    img: "amans.jpg",
  },
  user14: {
    id: 14,
    p: "Kumar K student Achieved 1800+ Rating on Leetcode",
    h1: "Mentoring Student Achieved 1800+ Rating on Leetcode and got Knight badge after 8 months of advanced DSA(OA + CP) training",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bzCI3h8HZdh83wkNL8FY535Zzfum_v2DiA",
    student: "Asmit Shukla",
    img: "asmit.jpg",
  },
  user15: {
    id: 15,
    p: "Kumar K Student Cracked OffCampus Cisco SDE Offer",
    h1: "Mentoring Student cracked Cisco OffCampus SDE Offer after 8 months of advanced DSA(OA + CP + System Design) training",
    company:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy7bHw5p3mwQzheg1fAd1eY0uNTXBt2kzNA",
    student: "Ronit Deepak Bhavsar",
    img: "ronit.jpg",
  },
};
function dh() {
  const [e, t] = N.useState(Ms.user0),
    [n, r] = N.useState(null),
    [o, l] = N.useState(null),
    a = (s, u) => {
      t(s),
        r(u),
        l("animate__animated animate__slideInRight"),
        setTimeout(() => {
          l(null);
        }, 1e3);
    };
  return i.jsxs("div", {
    id: "topachiver",
    className:
      "flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 pb-10",
    children: [
      i.jsx("div", {
        className: `${o}`,
        children: i.jsx(ch, {
          p: e.p,
          h1: e.h1,
          details: e.details,
          student: e.student,
          company: e.company,
          video: e.video,
          img: e.img,
        }),
      }),
      i.jsx("div", {
        className: "flex items-center mb-3 gap-5 justify-center flex-wrap",
        children: Object.values(Ms).map((s, u) =>
          i.jsx(
            "button",
            {
              role: "button",
              onClick: () => a(s, u),
              className: "image-button",
              children: i.jsx("img", {
                className: "relative z-10 inline-block h-10 w-10 rounded-full",
                src: s.img,
                alt: s.img,
              }),
            },
            u
          )
        ),
      }),
      i.jsx("a", {
        "aria-label": "class",
        href: "https://docs.google.com/document/d/1O9ph3IoyLv_B6scRQSaMyemShoOgAtnWBGpiw-FZtTs/edit",
        target: "_blank",
        rel: "noopener noreferrer",
        children: i.jsx("div", {
          className: "inline-flex flex-col items-center justify-center",
          children: i.jsx("button", {
            role: "button",
            className:
              " mt-4 text-red hover:before:bg-red border-2  rounded-lg border-orange-500  relative h-12 w-40 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full",
            children: i.jsx("span", {
              className: "relative z-10 text-2xl",
              children: "View More",
            }),
          }),
        }),
      }),
    ],
  });
}
const fh = () => {
    const e = [
        {
          id: 1,
          type: "image",
          url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457436/paypal1_ybacrh.jpg",
          alt: "PayPal 31LPA SDE Referral Chat Screenshot",
          title: "PayPal 31LPA Referral Chat",
          filename: "paypal-referral.jpg",
        },
        {
          id: 2,
          type: "youtube",
          videoId: "W0lWXMxMbfM",
          title: "Success Story - How I Got Referred",
          description: "Watch this inspiring journey of getting a referral",
        },
        {
          id: 3,
          type: "image",
          url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751456632/quad_ucxg7r.jpg",
          alt: "Qualcomm 28LPA SDE Referral Chat Screenshot",
          title: "Qualcomm 28LPA Referral Chat",
          filename: "qualcomm-referral-1.jpg",
        },
        {
          id: 4,
          type: "youtube",
          videoId: "bvShzG1T0Rs",
          title: "Tips for Getting Tech Referrals",
          description:
            "Expert advice on landing referrals at top tech companies",
        },
        {
          id: 5,
          type: "image",
          url: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1751457348/quad2_wzewsv.jpg",
          alt: "Qualcomm 28LPA Referral Chat Screenshot",
          title: "Qualcomm 28LPA Referral Chat",
          filename: "qualcomm-referral-2.jpg",
        },
      ],
      [t, n] = N.useState(0),
      [r, o] = N.useState(!0),
      [l, a] = N.useState(!1);
    N.useEffect(() => {
      if (!r || l) return;
      const y = setInterval(() => {
        n((w) => (w === e.length - 1 ? 0 : w + 1));
      }, 4e3);
      return () => clearInterval(y);
    }, [r, l, e.length]);
    const s = () => {
        const y = e[t];
        if (y.type === "image") {
          const w = document.createElement("a");
          (w.href = y.url),
            (w.download = y.filename || "image.jpg"),
            document.body.appendChild(w),
            w.click(),
            document.body.removeChild(w);
        } else
          window.open(`https://youtube.com/watch?v=${y.videoId}`, "_blank");
      },
      u = async () => {
        const y = e[t],
          w =
            y.type === "youtube"
              ? `https://youtube.com/watch?v=${y.videoId}`
              : window.location.href;
        if (navigator.share)
          try {
            await navigator.share({
              title: y.title,
              text: y.description || y.alt,
              url: w,
            });
          } catch (A) {
            console.log("Error sharing:", A);
          }
        else
          navigator.clipboard.writeText(w), alert("Link copied to clipboard!");
      },
      c = () => {
        o(!1), a(!1), n(t === 0 ? e.length - 1 : t - 1);
      },
      g = () => {
        o(!1), a(!1), n(t === e.length - 1 ? 0 : t + 1);
      },
      p = (y) => {
        o(!1), a(!1), n(y);
      },
      v = () => {
        o(!r);
      },
      x = e[t];
    return i.jsx("div", {
      className:
        "min-h-screen py-8 px-4 bg-gradient-to-r to-red-50 from-yellow-100",
      children: i.jsx("div", {
        className: "max-w-4xl mx-auto",
        children: i.jsxs("div", {
          className: "rounded-2xl shadow-xl overflow-hidden",
          children: [
            i.jsx("h1", {
              className:
                "text-center font-bold text-gray-700 font-sans text-4xl mb-8 uppercase",
              children: "WE PROVIDE REFERRAL SUPPORT",
            }),
            i.jsx("div", {
              className:
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6",
              children: i.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsxs("h2", {
                        className:
                          "text-2xl font-bold mb-2 flex items-center gap-2",
                        children: [
                          x.type === "youtube" && i.jsx(vl, { size: 24 }),
                          x.title,
                        ],
                      }),
                      i.jsx("p", {
                        className: "text-blue-100",
                        children: x.description || x.alt,
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      i.jsx("button", {
                        onClick: s,
                        className:
                          "bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200",
                        title:
                          x.type === "youtube"
                            ? "Open on YouTube"
                            : "Download Image",
                        children: i.jsx(Hm, { size: 20 }),
                      }),
                      i.jsx("button", {
                        onClick: u,
                        className:
                          "bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200",
                        children: i.jsx(Ym, { size: 20 }),
                      }),
                      i.jsx("button", {
                        onClick: v,
                        className: `p-2 rounded-full transition-all duration-200 ${
                          r
                            ? "bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
                            : "bg-white bg-opacity-40 text-white"
                        }`,
                        title: r ? "Pause Auto-play" : "Resume Auto-play",
                        children: r
                          ? i.jsx(qm, { size: 20 })
                          : i.jsx(vl, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs("div", {
              className: "relative",
              children: [
                i.jsx("button", {
                  onClick: c,
                  className:
                    "absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200",
                  children: i.jsx(Bm, { size: 24 }),
                }),
                i.jsx("button", {
                  onClick: g,
                  className:
                    "absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200",
                  children: i.jsx(Um, { size: 24 }),
                }),
                i.jsx("div", {
                  className: "p-4",
                  children: i.jsx("div", {
                    className:
                      "relative rounded-lg overflow-hidden shadow-md bg-black",
                    children:
                      x.type === "image"
                        ? i.jsxs(i.Fragment, {
                            children: [
                              i.jsx("img", {
                                src: x.url,
                                alt: x.alt,
                                className:
                                  "w-full h-96 object-contain transition-opacity duration-500",
                                onError: (y) => {
                                  (y.target.style.display = "none"),
                                    (y.target.nextSibling.style.display =
                                      "flex");
                                },
                              }),
                              i.jsx("div", {
                                className:
                                  "hidden items-center justify-center h-96 bg-gray-200 text-gray-500",
                                children: i.jsx("p", {
                                  children: "Image failed to load",
                                }),
                              }),
                            ],
                          })
                        : i.jsx("div", {
                            className: "aspect-[9/16] max-h-96 mx-auto",
                            children: i.jsx("iframe", {
                              src: `https://www.youtube.com/embed/${x.videoId}?rel=0&modestbranding=1&controls=1&showinfo=0`,
                              title: x.title,
                              frameBorder: "0",
                              allow:
                                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowFullScreen: !0,
                              className: "w-full h-full",
                              onLoad: () => a(!1),
                            }),
                          }),
                  }),
                }),
                i.jsxs("div", {
                  className: "absolute top-4 right-4 flex flex-col gap-2",
                  children: [
                    i.jsxs("div", {
                      className:
                        "bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm",
                      children: [t + 1, " / ", e.length],
                    }),
                    i.jsx("div", {
                      className: `px-3 py-1 rounded-full text-xs font-semibold ${
                        x.type === "youtube"
                          ? "bg-red-600 text-white"
                          : "bg-blue-600 text-white"
                      }`,
                      children: x.type === "youtube" ? "VIDEO" : "IMAGE",
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              className: "flex justify-center space-x-3 py-6",
              children: e.map((y, w) =>
                i.jsx(
                  "button",
                  {
                    onClick: () => p(w),
                    className: `flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                      w === t
                        ? "bg-blue-600 scale-110 shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`,
                    title: y.title,
                    children:
                      y.type === "youtube"
                        ? i.jsx(vl, { size: 12, className: "text-white" })
                        : i.jsx("div", {
                            className: `w-2 h-2 rounded-full ${
                              w === t ? "bg-white" : "bg-gray-600"
                            }`,
                          }),
                  },
                  y.id
                )
              ),
            }),
            r &&
              i.jsx("div", {
                className: "text-center pb-4",
                children: i.jsx("span", {
                  className: "text-sm text-gray-500",
                  children: "Auto-playing • Next in 4s",
                }),
              }),
          ],
        }),
      }),
    });
  },
  mh = () => {
    const [e, t] = N.useState(!1);
    return i.jsx("div", {
      className: "flex justify-center items-center py-6",
      children: i.jsx("div", {
        className:
          "w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg relative",
        children: e
          ? i.jsx("iframe", {
              className: "w-full h-full",
              src: "https://www.youtube.com/embed/q8UAJyGISmQ?autoplay=1",
              title: "YouTube video player",
              frameBorder: "0",
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0,
            })
          : i.jsxs("div", {
              className: "w-full h-full cursor-pointer relative",
              onClick: () => t(!0),
              children: [
                "P",
                i.jsx("img", {
                  src: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758607984/WhatsApp_Image_2025-09-23_at_01.04.00_a9a55e7c_v8iczu.jpg",
                  alt: "Video Preview",
                  className: "w-full h-96 object-cover",
                }),
                i.jsx("div", {
                  className:
                    "absolute inset-0 flex justify-center items-center bg-black bg-opacity-40",
                  children: i.jsx("div", {
                    className:
                      "bg-white text-red-600 rounded-full p-4 shadow-lg",
                    children: "▶",
                  }),
                }),
              ],
            }),
      }),
    });
  };
function ph() {
  const e = [
    { feature: "Daily Live Interactive Classes", kumarK: !0, others: !1 },
    {
      feature: "One-on-One Mentorship with Kumar K Sir",
      kumarK: !0,
      others: !1,
    },
    {
      feature: "Direct Job Referrals(FAANGM + top PBC)",
      kumarK: !0,
      others: !1,
    },
    {
      feature: "Personalized Doubt Clearing(24*7 Doubt Support)",
      kumarK: !0,
      others: !1,
    },
    {
      feature:
        "851 Hr updated DSA Course Content(DSA + OA + Interview + CP prep)",
      kumarK: !0,
      others: !1,
    },
  ];
  return i.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-r to-red-50 from-yellow-100 py-12 px-4",
    children: i.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        i.jsxs("div", {
          className: "text-center mb-12",
          children: [
            i.jsx("h1", {
              className: "text-4xl font-bold text-gray-800 mb-4",
              children: "Speical Course Feature",
            }),
            i.jsx("p", {
              className: "text-gray-600 text-lg",
              children: "See what makes Kumar K Sir's cohort stand out",
            }),
          ],
        }),
        i.jsx("div", {
          className: "bg-white rounded-2xl shadow-2xl overflow-hidden",
          children: i.jsx("div", {
            className: "overflow-x-auto",
            children: i.jsxs("table", {
              className: "w-full",
              children: [
                i.jsx("thead", {
                  children: i.jsxs("tr", {
                    className:
                      "bg-gradient-to-r from-indigo-600 to-blue-600 text-white",
                    children: [
                      i.jsx("th", {
                        className: "py-6 px-6 text-left text-lg font-semibold",
                        children: "Features",
                      }),
                      i.jsx("th", {
                        className:
                          "py-6 px-6 text-center text-lg font-semibold",
                        children: "Kumar K Sir's Cohort",
                      }),
                      i.jsx("th", {
                        className:
                          "py-6 px-6 text-center text-lg font-semibold",
                        children: "Other Courses",
                      }),
                    ],
                  }),
                }),
                i.jsx("tbody", {
                  children: e.map((t, n) =>
                    i.jsxs(
                      "tr",
                      {
                        className: `border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                          n % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`,
                        children: [
                          i.jsx("td", {
                            className: "py-5 px-6 text-gray-800 font-medium",
                            children: t.feature,
                          }),
                          i.jsx("td", {
                            className: "py-5 px-6 text-center",
                            children: t.kumarK
                              ? i.jsx("div", {
                                  className: "flex justify-center",
                                  children: i.jsx("div", {
                                    className: "bg-green-100 rounded-full p-2",
                                    children: i.jsx(Ns, {
                                      className: "text-green-600 w-6 h-6",
                                    }),
                                  }),
                                })
                              : i.jsx("div", {
                                  className: "flex justify-center",
                                  children: i.jsx("div", {
                                    className: "bg-red-100 rounded-full p-2",
                                    children: i.jsx(fi, {
                                      className: "text-red-600 w-6 h-6",
                                    }),
                                  }),
                                }),
                          }),
                          i.jsx("td", {
                            className: "py-5 px-6 text-center",
                            children: t.others
                              ? i.jsx("div", {
                                  className: "flex justify-center",
                                  children: i.jsx("div", {
                                    className: "bg-green-100 rounded-full p-2",
                                    children: i.jsx(Ns, {
                                      className: "text-green-600 w-6 h-6",
                                    }),
                                  }),
                                })
                              : i.jsx("div", {
                                  className: "flex justify-center",
                                  children: i.jsx("div", {
                                    className: "bg-red-100 rounded-full p-2",
                                    children: i.jsx(fi, {
                                      className: "text-red-600 w-6 h-6",
                                    }),
                                  }),
                                }),
                          }),
                        ],
                      },
                      n
                    )
                  ),
                }),
              ],
            }),
          }),
        }),
        i.jsx("div", {
          className: "mt-8 text-center",
          children: i.jsx("button", {
            className:
              "bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
            children: "Enroll in Kumar K Sir's Course",
          }),
        }),
      ],
    }),
  });
}
const hh = N.lazy(() =>
    Uo(() => import("./page-KWEBXt5P.js"), __vite__mapDeps([0, 1]))
  ),
  gh = N.lazy(() => Uo(() => import("./Page-C-SRn9KD.js"), [])),
  vh = N.lazy(() =>
    Uo(() => import("./page-omXMZZXZ.js"), __vite__mapDeps([2, 1]))
  ),
  yh = N.lazy(() =>
    Uo(() => import("./page-O-0nzL2W.js"), __vite__mapDeps([3, 1]))
  );
function xh() {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx("section", {
        className: "mt-[-1rem]",
        children: i.jsxs("section", {
          className:
            "text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100",
          children: [
            i.jsx("marquee", {
              className: "mt-4 pt-4 text-red-600 text-3xl font-bold",
              scrollamount: "20",
              children:
                "Looking for a High-Paying Job/Internship? With 1-1 mentoring, structured training, and referral support, we help you land your dream offer 🚀",
            }),
            i.jsxs("div", {
              className:
                "container mx-auto px-5 py-28 md:flex md:flex-row md:justify-center",
              children: [
                i.jsxs("div", {
                  className: "md:w-1/2 lg:pr-24 md:pr-15 mb-16 md:mb-0  ml-5 ",
                  children: [
                    i.jsxs("span", {
                      className:
                        "text-xl text-black font-sans font-bold edu-revo",
                      children: [
                        fe.span1,
                        " ",
                        i.jsx("span", {
                          className: "text-red-700",
                          children: fe.span2,
                        }),
                      ],
                    }),
                    i.jsxs("h1", {
                      className:
                        "font-sans leading-snug text-5xl   mt-4  font-extrabold text-gray-900 banner-title",
                      children: [
                        fe.h1,
                        " ",
                        i.jsx("span", {
                          className: "mt-6 text-red-900  ",
                          children: fe.h2,
                        }),
                        i.jsx("p", {
                          className:
                            "font-sans text-3xl  bg-red-500 hidden lg:inline-block",
                        }),
                        fe.subh1,
                        " ",
                        fe.subh2,
                      ],
                    }),
                    i.jsxs("ol", {
                      className: "mt-3 ",
                      children: [
                        i.jsx("li", {
                          className:
                            "mb-4 leading-normal text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsx("span", { children: fe.ul1 }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", {
                                className: "text-red-500 text-2xl",
                                children: [
                                  " ",
                                  "DSA Mentor: 2200+ (Guardian) rated on ",
                                  "    ",
                                  i.jsx("a", {
                                    href: "https://leetcode.com/u/godiswithme/",
                                    className: "text-blue-800",
                                    children: "Leetcode (Top 1% in world),",
                                  }),
                                  " ",
                                  i.jsx("a", {
                                    href: "https://www.linkedin.com/posts/kumark1_codeforces-dsa-rating-activity-7389162839816572928-9TVp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADB1e44BA43UYjFx2BwtGFrtyTJFuENef5c",
                                    className: "text-blue-800",
                                    children: " Expert Rated on  Codeforces",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", {
                                className: "text-blue-800 text-2xl",
                                children: [
                                  i.jsx("a", {
                                    href: "https://www.youtube.com/watch?v=j1SOLU_UVkI&ab_channel=KumarK%5BAmazon%5D",
                                    children: "Youtube",
                                  }),
                                  " ",
                                  i.jsx("span", {
                                    className: "text-red-500",
                                    children: "&& ",
                                  }),
                                  i.jsx("a", {
                                    href: "https://www.linkedin.com/in/kumark1/",
                                    className: "ml-2 text-blue-800",
                                    children: "Linkedin (1 Lakh + followers)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", {
                                className: "text-red-500 text-2xl",
                                children: [
                                  " ",
                                  "1158 ",
                                  "  ",
                                  " Students from Tier-3 colleges have Cracked 20+ LPA ",
                                  "  ",
                                  " offers in the last 18 months.",
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-4  md:items-start leading-normal  text-md  text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", {
                                className: "text-red-500 text-2xl",
                                children: [
                                  " ",
                                  "Kumar K secures ",
                                  i.jsx("a", {
                                    href: "https://www.linkedin.com/feed/update/urn:li:activity:7384452805387784192/",
                                    children: i.jsx("span", {
                                      className: "text-blue-500",
                                      children:
                                        "All India Rank 7  (World Rank 83)",
                                    }),
                                  }),
                                  " in Facebook(Meta) HackerCup 2025",
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-4 md:items-start leading-normal text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", {
                                children: [
                                  "Separate Live training Cohort for Beginners vs Intermediates",
                                  " ",
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", { children: [" ", fe.ul3] }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", { children: [" ", fe.ul5] }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              i.jsxs("span", { children: [" ", fe.ul6] }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              fe.ul4,
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              "Price before November 26 - ",
                              "    ",
                              i.jsx("span", {
                                className: "text-red-500 text-2xl ml-2",
                                children: "3280(Mega Discount Offer)",
                              }),
                            ],
                          }),
                        }),
                        i.jsx("li", {
                          className:
                            "mb-6  md:items-start  leading-normal  text-md text-gray-900 font-sans font-bold",
                          children: i.jsxs("div", {
                            className: "flex items-start",
                            children: [
                              i.jsx(Ce, {
                                className:
                                  "text-orange-500 mt-1 mr-2 flex-shrink-0",
                              }),
                              "Price after November 26 - ",
                              "    ",
                              i.jsx("span", {
                                className: "text-2xl ml-4",
                                children: "₹10000",
                              }),
                              "    ",
                              " ",
                              "    ",
                            ],
                          }),
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "flex flex-wrap gap-4 md:justify-start",
                      children: [
                        i.jsx("a", {
                          "aria-label": "contact",
                          href: "https://docs.google.com/forms/d/1t_Po_G3jdI6D1xfOGyPvSQeyE7fdmlW7MD-WLCr_n2Y/edit",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: i.jsx("button", {
                            role: "button",
                            className: `border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full`,
                            children: i.jsx("span", {
                              className: "relative z-10 text-lg font-semibold",
                              children: fe.button,
                            }),
                          }),
                        }),
                        i.jsx("a", {
                          "aria-label": "whatsapp",
                          href: "https://wa.me/919798316854",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: i.jsx("button", {
                            role: "button",
                            className: `border-2 rounded-lg border-green-500 relative h-12 w-52 overflow-hidden bg-white px-3 text-green-600 shadow-2xl transition-all 
               before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
               before:bg-green-500 before:transition-all before:duration-500 
               hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full`,
                            children: i.jsx("span", {
                              className: "relative z-10 text-lg font-semibold",
                              children: "WhatsApp Call 📞",
                            }),
                          }),
                        }),
                        i.jsx("a", {
                          "aria-label": "program",
                          href: "https://desiqna-details-website.vercel.app/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: i.jsx("button", {
                            role: "button",
                            className: `border-2 rounded-lg border-orange-500 relative h-12 w-56 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full`,
                            children: i.jsxs("span", {
                              className: "relative z-10 text-lg font-semibold",
                              children: [" ", "Program Details"],
                            }),
                          }),
                        }),
                        i.jsx("a", {
                          "aria-label": "whatsapp",
                          href: "https://api.whatsapp.com/send/?phone=918433719235&text&type=phone_number&app_absent=0",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: i.jsx("button", {
                            role: "button",
                            className: `border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full`,
                            children: i.jsx("span", {
                              className: "relative z-10 text-lg font-semibold",
                              children: fe.button1,
                            }),
                          }),
                        }),
                        i.jsx("a", {
                          "aria-label": "course",
                          href: "https://drive.google.com/file/d/1FG_ovSM5tvQ1lJBLSTgQB-pLW7NPlo_E/view?usp=sharing",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: i.jsx("button", {
                            role: "button",
                            className: `border-2 rounded-lg border-orange-500 relative h-12 w-48 overflow-hidden bg-white px-3 text-red-500 shadow-2xl transition-all 
                 before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 
                 before:bg-orange-500 before:transition-all before:duration-500 
                 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full`,
                            children: i.jsx("span", {
                              className: "relative z-10 text-lg font-semibold",
                              children: fe.butt2,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "md:w-1/2 mt-[-2rem] w-full lg:max-w-lg",
                  children: [
                    i.jsx("img", {
                      className:
                        "object-cover object-center rounded-md shadow-lg transition-transform duration-500 transform hover:scale-105",
                      alt: "hero",
                      src: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1764168224/WhatsApp_Image_2025-11-26_at_20.06.59_10503e62_ra3jnz.jpg",
                    }),
                    i.jsx(mh, {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      i.jsxs(N.Suspense, {
        fallback: i.jsx(i.Fragment, {}),
        children: [
          i.jsx(ph, {}),
          i.jsx(dh, {}),
          i.jsx(yh, {}),
          i.jsx(fh, {}),
          i.jsx(hh, {}),
          i.jsx(vh, {}),
          i.jsx(gh, {}),
        ],
      }),
    ],
  });
}
function wh() {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: "mx-auto max-w-7xl px-4",
        children: [
          i.jsxs("div", {
            className: "flex flex-col space-y-8 pb-10 pt-12 md:pt-24",
            children: [
              i.jsx("div", {
                className:
                  "mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3",
                children: i.jsx("p", {
                  className:
                    "text-center text-xs font-semibold leading-normal md:text-sm",
                  children: "Share your thoughts",
                }),
              }),
              i.jsx("p", {
                className:
                  "text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10",
                children: "Love to hear from you",
              }),
              i.jsx("p", {
                className:
                  "mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl",
                children:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?",
              }),
            ],
          }),
          i.jsx("div", {
            className: "mx-auto max-w-7xl py-12 md:py-24",
            children: i.jsxs("div", {
              className:
                "grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2",
              children: [
                i.jsx("div", {
                  className: "flex items-center justify-center",
                  children: i.jsxs("div", {
                    className: "px-2 md:px-12",
                    children: [
                      i.jsx("p", {
                        className:
                          "text-2xl font-bold text-gray-900 md:text-4xl",
                        children: "Get in touch",
                      }),
                      i.jsx("p", {
                        className: "mt-4 text-lg text-gray-600",
                        children:
                          "Our friendly team would love to hear from you.",
                      }),
                      i.jsxs("form", {
                        action: "",
                        className: "mt-8 space-y-4",
                        children: [
                          i.jsxs("div", {
                            className:
                              "grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2",
                            children: [
                              i.jsxs("div", {
                                className: "grid w-full  items-center gap-1.5",
                                children: [
                                  i.jsx("label", {
                                    className:
                                      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                    htmlFor: "first_name",
                                    children: "First Name",
                                  }),
                                  i.jsx("input", {
                                    className:
                                      "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",
                                    type: "text",
                                    id: "first_name",
                                    placeholder: "First Name",
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "grid w-full  items-center gap-1.5",
                                children: [
                                  i.jsx("label", {
                                    className:
                                      "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                    htmlFor: "last_name",
                                    children: "Last Name",
                                  }),
                                  i.jsx("input", {
                                    className:
                                      "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",
                                    type: "text",
                                    id: "last_name",
                                    placeholder: "Last Name",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "grid w-full  items-center gap-1.5",
                            children: [
                              i.jsx("label", {
                                className:
                                  "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                htmlFor: "email",
                                children: "Email",
                              }),
                              i.jsx("input", {
                                className:
                                  "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",
                                type: "text",
                                id: "email",
                                placeholder: "Email",
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "grid w-full  items-center gap-1.5",
                            children: [
                              i.jsx("label", {
                                className:
                                  "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                htmlFor: "phone_number",
                                children: "Phone number",
                              }),
                              i.jsx("input", {
                                className:
                                  "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",
                                type: "tel",
                                id: "phone_number",
                                placeholder: "Phone number",
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "grid w-full  items-center gap-1.5",
                            children: [
                              i.jsx("label", {
                                className:
                                  "text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                htmlFor: "message",
                                children: "Message",
                              }),
                              i.jsx("textarea", {
                                className:
                                  "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900",
                                id: "message",
                                placeholder: "Leave us a message",
                                cols: 3,
                              }),
                            ],
                          }),
                          i.jsx("button", {
                            type: "button",
                            className:
                              "w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
                            children: "Send Message",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                i.jsx("img", {
                  alt: "Contact us",
                  className:
                    "hidden max-h-full w-full rounded-lg object-cover lg:block",
                  src: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80",
                }),
              ],
            }),
          }),
        ],
      }),
      i.jsx("hr", { className: "mt-6" }),
      i.jsx("section", {
        className: "relative overflow-hidden bg-white py-8",
        children: i.jsx("div", {
          className: "container relative z-10 mx-auto px-4",
          children: i.jsxs("div", {
            className: "-m-8 flex flex-wrap items-center justify-between",
            children: [
              i.jsx("div", {
                className: "w-auto p-8",
                children: i.jsx("a", {
                  href: "#",
                  children: i.jsxs("div", {
                    className: "inline-flex items-center",
                    children: [
                      i.jsx("svg", {
                        width: "40",
                        height: "46",
                        viewBox: "0 0 50 56",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: i.jsx("path", {
                          d: "M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z",
                          fill: "black",
                        }),
                      }),
                      i.jsx("span", {
                        className: "ml-4 text-lg font-bold",
                        children: "DevUI",
                      }),
                    ],
                  }),
                }),
              }),
              i.jsx("div", {
                className: "w-auto p-8",
                children: i.jsxs("ul", {
                  className: "-m-5 flex flex-wrap items-center",
                  children: [
                    i.jsx("li", {
                      className: "p-5",
                      children: i.jsx("a", {
                        className:
                          "font-medium text-gray-600 hover:text-gray-700",
                        href: "#",
                        children: "Privacy Policy",
                      }),
                    }),
                    i.jsx("li", {
                      className: "p-5",
                      children: i.jsx("a", {
                        className:
                          "font-medium text-gray-600 hover:text-gray-700",
                        href: "#",
                        children: "Terms of Service",
                      }),
                    }),
                    i.jsx("li", {
                      className: "p-5",
                      children: i.jsx("a", {
                        className:
                          "font-medium text-gray-600 hover:text-gray-700",
                        href: "#",
                        children: "Return Policy",
                      }),
                    }),
                    i.jsx("li", {
                      className: "p-5",
                      children: i.jsx("a", {
                        className:
                          "font-medium text-gray-600 hover:text-gray-700",
                        href: "#",
                        children: "Contact Us",
                      }),
                    }),
                  ],
                }),
              }),
              i.jsx("div", {
                className: "w-auto p-8",
                children: i.jsxs("div", {
                  className: "-m-1.5 flex flex-wrap",
                  children: [
                    i.jsx("div", {
                      className: "w-auto p-1.5",
                      children: i.jsx("a", {
                        href: "#",
                        children: i.jsx("div", {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",
                          children: i.jsx("svg", {
                            width: "8",
                            height: "14",
                            viewBox: "0 0 8 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: i.jsx("path", {
                              d: "M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",
                              fill: "#27272A",
                            }),
                          }),
                        }),
                      }),
                    }),
                    i.jsx("div", {
                      className: "w-auto p-1.5",
                      children: i.jsx("a", {
                        href: "#",
                        children: i.jsx("div", {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",
                          children: i.jsx("svg", {
                            width: "14",
                            height: "11",
                            viewBox: "0 0 14 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: i.jsx("path", {
                              d: "M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",
                              fill: "#27272A",
                            }),
                          }),
                        }),
                      }),
                    }),
                    i.jsx("div", {
                      className: "w-auto p-1.5",
                      children: i.jsx("a", {
                        href: "#",
                        children: i.jsx("div", {
                          className:
                            "flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",
                          children: i.jsx("svg", {
                            width: "16",
                            height: "15",
                            viewBox: "0 0 16 15",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: i.jsx("path", {
                              d: "M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",
                              fill: "#27272A",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Sh() {
  return i.jsx(i.Fragment, {
    children: i.jsx("section", {
      className: "text-gray-600 body-font",
      children: i.jsxs("div", {
        className:
          "container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",
        children: [
          i.jsxs("div", {
            className:
              "lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",
            children: [
              i.jsxs("h1", {
                className:
                  "title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",
                children: [
                  "Before they sold out",
                  i.jsx("br", { className: "hidden lg:inline-block" }),
                  "readymade gluten",
                ],
              }),
              i.jsx("p", {
                className: "mb-8 leading-relaxed",
                children:
                  "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.",
              }),
              i.jsxs("div", {
                className: "flex justify-center",
                children: [
                  i.jsx("button", {
                    className:
                      "inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",
                    children: "Button",
                  }),
                  i.jsx("button", {
                    className:
                      "ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg",
                    children: "Button",
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className: "lg:max-w-lg lg:w-full md:w-1/2 w-5/6",
            children: i.jsx("img", {
              className: "object-cover object-center rounded",
              alt: "hero",
              src: "https://dummyimage.com/720x600",
            }),
          }),
        ],
      }),
    }),
  });
}
function zr({
  h1: e,
  p1: t,
  h2: n,
  p2: r,
  p3: o,
  p4: l,
  h3: a,
  h4: s,
  h5: u,
  p5: c,
  h6: g,
  p6: p,
  h7: v,
  p7: x,
  h8: y,
  p8: w,
  h9: A,
  p9: f,
  h10: d,
  p10: h,
  h11: S,
  p11: k,
  h12: P,
  p12: E,
  h13: _,
  p13: B,
  h14: D,
  p14: ye,
  h15: Ct,
  p15: bt,
  h16: xr,
  p16: Ho,
  h17: kn,
  p17: An,
  h18: C,
  p18: L,
  h19: O,
  p19: K,
  h20: $,
  p20: Ht,
  h21: Ve,
  p21: Cn,
  h22: Qe,
  p22: Wt,
}) {
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className:
        "flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 overflow-x-hidden mt-[-1rem]",
      children: i.jsx("div", {
        children: i.jsxs("div", {
          className:
            "flex flex-col items-center justify-center gap-1 lg:gap-20",
          children: [
            i.jsx("div", {
              className:
                "absolute   outline-1   outline-dashed h-[510rem]   lg:h-[400rem] md:[410rem] ",
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-3 text-wrap text-center  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[8rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg?size=626&ext=jpg&ga=GA1.1.570712340.1707328262&semt=ais",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10  ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "1",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: e,
                    }),
                    i.jsx("p", { children: t }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center  gap-3 text-wrap text-center  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-8",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: n,
                    }),
                    i.jsx("p", { children: r }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "2",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[8rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150544946.jpg?t=st=1713883743~exp=1713887343~hmac=2ce773bf615449ac657dd86b77c16a2b645e65543e92a403fd713352dcb243aa&w=740",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-3 text-wrap text-center  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "3",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: a,
                    }),
                    i.jsx("p", { children: o }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: s,
                    }),
                    i.jsx("p", { children: l }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "4",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row-reverse items-center gap-3 text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: u,
                    }),
                    i.jsx("p", { children: c }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "5",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: g,
                    }),
                    i.jsx("p", { children: p }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "6",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row-reverse items-center text-center gap-3 text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: v,
                    }),
                    i.jsx("p", { children: x }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "7",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: y,
                    }),
                    i.jsx("p", { children: w }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "8",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row-reverse items-center text-center gap-3 text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: A,
                    }),
                    i.jsx("p", { children: f }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "9",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: d,
                    }),
                    i.jsx("p", { children: h }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "10",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row-reverse items-center text-center gap-3 text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: S,
                    }),
                    i.jsx("p", { children: k }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "11",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: P,
                    }),
                    i.jsx("p", { children: E }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "12",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row-reverse items-center text-center gap-3 text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: _,
                    }),
                    i.jsx("p", { children: B }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "13",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: D,
                    }),
                    i.jsx("p", { children: ye }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "14",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-3 text-center text-wrap  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "15",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: Ct,
                    }),
                    i.jsx("p", { children: bt }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: xr,
                    }),
                    i.jsx("p", { children: Ho }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "16",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-3 text-center text-wrap  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "17",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: kn,
                    }),
                    i.jsx("p", { children: An }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: C,
                    }),
                    i.jsx("p", { children: K }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "18",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-3 text-center text-wrap  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "19",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: O,
                    }),
                    i.jsx("p", { children: K }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: $,
                    }),
                    i.jsx("p", { children: Ht }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "20",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center text-center gap-3 text-wrap  lg:gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "21",
                  }),
                }),
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: Ve,
                    }),
                    i.jsx("p", { children: Cn }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "flex flex-row items-center gap-[1.6rem] text-center text-wrap  lg:gap-10 ",
              children: [
                i.jsxs("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: [
                    i.jsx("h1", {
                      className: "font-sans font-bold",
                      children: Qe,
                    }),
                    i.jsx("p", { children: Wt }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "22",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function jh({
  h1: e,
  h2: t,
  h3: n,
  h4: r,
  h5: o,
  h6: l,
  h7: a,
  h8: s,
  h9: u,
  h10: c,
  h11: g,
  h12: p,
}) {
  return i.jsx(i.Fragment, {
    children: i.jsx("div", {
      className:
        "flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 overflow-x-hidden mt-[-1rem]",
      children: i.jsx("div", {
        children: i.jsxs("div", {
          className: "flex flex-col items-center justify-center gap-20",
          children: [
            i.jsx("div", {
              className:
                "absolute   outline-1   outline-dashed h-[120rem]  lg:h-[200rem] ",
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10  ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "1",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("h1", { children: e }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-8",
                  children: i.jsx("h1", { children: t }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "2",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl",
                    children: "3",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("h1", { children: n }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: r }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "4",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row-reverse items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: o }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "5",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: l }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "6",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row-reverse items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: p }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "7",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: a }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "8",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row-reverse items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: s }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "9",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: u }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "10",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row-reverse items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: g }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "11",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
            i.jsxs("div", {
              className: "flex flex-row items-center gap-10",
              children: [
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem] px-[2rem]",
                  children: i.jsx("h1", { children: c }),
                }),
                i.jsx("div", {
                  className:
                    "border-8 border-yellow-300 px-6 py-4 bg-white rounded-full relative z-10 ",
                  children: i.jsx("span", {
                    className: "font-bold text-2xl ",
                    children: "12",
                  }),
                }),
                i.jsx("div", {
                  className: "lg:w-[20rem] md:w-[15rem] w-[8rem]",
                  children: i.jsx("img", {
                    src: "https://www.algoprep.in/img/content_1_img.png",
                    alt: "",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
const m = {
    component1: {
      heading1: "Basics of programming language. (C++/Java/Py)",
      para1:
        "Are you starting with your coding journey? Not to worry, We will cover all the Basics of Java/C++/Python required for DSA.",
      heading2:
        "Core Building of Fundamental Problem Solving and Logical skills. ",
      para2: "This is the step only for beginner's batch.",
      heading3: "Hashing(+ Arrays) - Concepts from Basics to Advanced",
      para3:
        "+ FAANG Interview DSA questions' Problem Solving + hard unseen DSA questions' problem solving for OA.",
      heading4:
        "(Two Pointer + Sliding Window) - Concepts from Basics to Advanced",
      para4:
        "+ FAANG Interview DSA questions' Problem Solving + hard unseen DSA questions' problem solving for OA.",
      heading5: "(Binary Search) - Concepts from basics to advanced ",
      para5:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading6: "(Stack + Queues) - Concepts from basics to advanced",
      para6:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading7: "(Greedy) - Concepts from basics to advanced ",
      para7:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading8: "(Priority Queue/Heap) - Concepts from basics to advanced ",
      para8:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading9: "(Linked List) - Concepts from basics to advanced",
      para9:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading91: "(Binary Trees) - Concepts from basics to advanced",
      para91:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading10: "(Binary Tree + BST ) - Concepts from basics to advanced",
      para10:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading11: "(Dynamic Programming) - Concepts from basics to advanced",
      para11:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading12:
        "(Bit Manipulation - AND/OR/XOR) - Concepts from basics to advanced",
      para12:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading13:
        "(DP with Bit Masking - Tiling DP - SOS DP - Hard Level DP Optimization)",
      para13:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading14:
        "(Math 1 - Factors,Primes,LCM,GCD,Mobius Inversions,Math + Greedy Mixture Based concepts.)",
      para14:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading15:
        "(Math 2 - Probabilities,Expectations,Combinatorics,Matrix Exponentiation) - Concepts from basics to advanced",
      para15:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading16: "(General Trees - BFS,DFS,Concepts from basics to advanced",
      para16:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA. Variations,Euler Theorem,Flattening,Greedy+Tree,DP+Tree,Heavy Light Decomposition,LCA.)",
      heading17: "(Segment Tree + BIT) Concepts from basics to advanced",
      para17:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading18: "(String) Concepts from basics to advanced",
      para18:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading19: "(Recursion + Backtracking) Concepts from basics to advanced",
      para19:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading20: "(Matrix) Concepts from basics to advanced",
      para20:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading21: "(Graph) Concepts from basics to advanced ",
      para21:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading22: "(MO Algorithm) Concepts from basics to advanced",
      para22:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      image1: "https://www.algoprep.in/img/content_1_img.png",
      image2: "https://www.algoprep.in/img/content_2_img.png",
      image3: "https://www.algoprep.in/img/content_3_img.png",
      image4: "https://www.algoprep.in/img/content_1_img.png",
      image5: "https://www.algoprep.in/img/content_3_img.png",
    },
    component2: {
      heading1: "Hashing(+ Arrays) - Concepts at advance level ",
      para1:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading2: "Two pointer and sliding window - Concept at advance level",
      para2:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading3: "Binary search - Concept at advance level",
      para3:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading4: "String - Concept at advance level ",
      para4:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading5: "Stack and Queue - Concept at advance level",
      para5:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading6: "Linked List - Concept at advance level",
      para6:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading7: "Recurrsion and Backtracking - Concept to advance level",
      para7:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading8: "Priority Queue and Heap - Concept to basic to advance",
      para8:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading9: "Matrix - Concept to basic to advance",
      para9:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading10: "Graph -  All concepts and Algorithm at advance level",
      para10:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading11: "General Trees - BFS,DFS,Concepts from basics to advanced",
      para11:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading12:
        "DP with Bit Masking - Tiling DP - SOS DP - Hard Level DP Optimization",
      para12:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading13: "Greedy Algorithm - Concept to advance level",
      para13:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      heading14: "(Segment Tree + BIT) Concepts from basics to advanced",
      para14:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA",
      image1: "https://www.algoprep.in/img/content_1_img.png",
      image2: "https://www.algoprep.in/img/content_2_img.png",
      image3: "https://www.algoprep.in/img/content_3_img.png",
      image4: "https://www.algoprep.in/img/content_1_img.png",
      image5: "https://www.algoprep.in/img/content_3_img.png",
    },
    component3: {
      heading1:
        "Maths-1 Factors,Primes,LCM,GCD,Mobius Inversions,Math + Greedy Mixture Based concepts. ",
      para1:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading2:
        "Maths-2 Probabilities,Expectations,Combinatorics,Matrix Exponentiation ",
      para2:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading3:
        "DP with Bit Masking Partition-DP, 1D-DP, 2D-DP, Sub-Array-DP, Tilling-DP, DP with graphs ",
      para3:
        "FAANG Interview DSA questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA..",
      heading4: "Geometry and Game Theory",
      para4:
        " FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA..",
      heading5: "Trie",
      para5:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading6: "Fenwick Tree",
      para6:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading7: "Sparse Table",
      para7:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading8: "MO algorithm Concept Basic to Advance",
      para8:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading9: "Heavy Light Decomposition",
      para9:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading10: "CodeChef upsolving sessions",
      para10:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading11: "Leetcode upsolving sessions",
      para11:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading12: "Codeforces upsolving sessions",
      para12:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading13: "Atcoder upsolving sessions",
      para13:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading14: "Euclid upsolving sessions",
      para14:
        "FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      heading15: "(Math 1 - ",
      para15:
        "+ FAANG Interview questions' Problem Solving - FAANG hard unseen DSA questions' problem solving for OA.",
      image1: "https://www.algoprep.in/img/content_1_img.png",
      image2: "https://www.algoprep.in/img/content_2_img.png",
      image3: "https://www.algoprep.in/img/content_3_img.png",
      image4: "https://www.algoprep.in/img/content_1_img.png",
      image5: "https://www.algoprep.in/img/content_3_img.png",
    },
    component4: {
      heading1: "HTML,CSS,JS",
      heading2: "React, Angular ",
      heading3: "NodeJs, ExpressJS ",
      heading4: "MYSQl, MongoDB",
      heading5: "Java Spring boot, Java spring Batch ",
      heading6: "Java Backend/Hibernate/Microservices ",
      heading7: "Python",
      heading8: "DJanGo, Flask",
      heading9: "Machine learning, Data science ",
      heading10: "Low level Design ",
      heading11: "Flutter/IoS ",
      heading12: "Kotlin/ Java for the android development",
      image1: "https://www.algoprep.in/img/content_1_img.png",
      image2: "https://www.algoprep.in/img/content_2_img.png",
      image3: "https://www.algoprep.in/img/content_3_img.png",
      image4: "https://www.algoprep.in/img/content_1_img.png",
      image5: "https://www.algoprep.in/img/content_3_img.png",
    },
  },
  Nh = () => {
    const [e, t] = N.useState(null),
      [n, r] = N.useState(
        i.jsx(zr, {
          h1: m.component1.heading1,
          p1: m.component1.para1,
          h2: m.component1.heading2,
          p2: m.component1.para2,
          h3: m.component1.heading3,
          p3: m.component1.para3,
          h4: m.component1.heading4,
          p4: m.component1.para4,
          h5: m.component1.heading5,
          p5: m.component1.para5,
          h6: m.component1.heading6,
          p6: m.component1.para6,
          h7: m.component1.heading7,
          p7: m.component1.para7,
          h8: m.component1.heading8,
          p8: m.component1.para8,
          h9: m.component1.heading9,
          p9: m.component1.para9,
          h10: m.component1.heading10,
          p10: m.component1.para10,
          h11: m.component1.heading11,
          p11: m.component1.para11,
          h12: m.component1.heading12,
          p12: m.component1.para12,
          h13: m.component1.heading13,
          p13: m.component1.para13,
          h14: m.component1.heading14,
          p14: m.component1.para14,
          h15: m.component1.heading15,
          p15: m.component1.para15,
          h16: m.component1.heading16,
          p16: m.component1.para16,
          h17: m.component1.heading17,
          p17: m.component1.para17,
          h18: m.component1.heading18,
          p18: m.component1.para18,
          h19: m.component1.heading19,
          p19: m.component1.para19,
          h20: m.component1.heading20,
          p20: m.component1.para20,
          h21: m.component1.heading21,
          p21: m.component1.para21,
          h22: m.component1.heading22,
          p22: m.component1.para22,
        })
      ),
      o = (l) => {
        t(l);
      };
    return i.jsxs("div", {
      className:
        "flex flex-col items-center justify-center bg-gradient-to-r to-red-50 from-yellow-100 mt-[-1rem] overflow-x-hidden",
      children: [
        i.jsx("h1", {
          className: "font-bold text-xl lg:text-4xl mt-20 mb-[3rem] ",
          children: "What will you Study in the Course?",
        }),
        i.jsxs("div", {
          className:
            "flex flex-col lg:flex-row gap-2 lg:gap-5 items-center justify-center ",
          children: [
            i.jsx("div", {
              children: i.jsx("button", {
                role: "button",
                onClick: () => {
                  o("button1"),
                    r(
                      i.jsx(zr, {
                        h1: m.component1.heading1,
                        p1: m.component1.para1,
                        h2: m.component1.heading2,
                        p2: m.component1.para2,
                        h3: m.component1.heading3,
                        p3: m.component1.para3,
                        h4: m.component1.heading4,
                        p4: m.component1.para4,
                        h5: m.component1.heading5,
                        p5: m.component1.para5,
                        h6: m.component1.heading6,
                        p6: m.component1.para6,
                        h7: m.component1.heading7,
                        p7: m.component1.para7,
                        h8: m.component1.heading8,
                        p8: m.component1.para8,
                        h9: m.component1.heading9,
                        p9: m.component1.para9,
                        h10: m.component1.heading10,
                        p10: m.component1.para10,
                        h11: m.component1.heading11,
                        p11: m.component1.para11,
                        h12: m.component1.heading12,
                        p12: m.component1.heading12,
                        h13: m.component1.heading13,
                        p13: m.component1.para13,
                        h14: m.component1.heading14,
                        p14: m.component1.para14,
                        h15: m.component1.heading15,
                        p15: m.component1.para15,
                        h16: m.component1.heading16,
                        p16: m.component1.para16,
                        h17: m.component1.heading17,
                        p17: m.component1.para17,
                        h18: m.component1.heading18,
                        p18: m.component1.para18,
                        h19: m.component1.heading19,
                        p19: m.component1.para19,
                        h20: m.component1.heading20,
                        p20: m.component1.para20,
                        h21: m.component1.heading21,
                        p21: m.component1.para21,
                        h22: m.component1.heading22,
                        p22: m.component1.para22,
                      })
                    );
                },
                className: `rounded-xl  w-[17rem] p-4 text-white font-bold bg-red-500 ${
                  e === "button1" ? "bg-red-500" : "bg-yellow-500"
                }`,
                children: "DSA From Scratch To Advanced",
              }),
            }),
            i.jsx("div", {
              children: i.jsxs("button", {
                role: "button",
                onClick: () => {
                  o("button2"),
                    r(
                      i.jsx(zr, {
                        h1: m.component1.heading1,
                        p1: m.component1.para1,
                        h2: m.component1.heading2,
                        p2: m.component1.para2,
                        h3: m.component1.heading3,
                        p3: m.component1.para3,
                        h4: m.component1.heading4,
                        p4: m.component1.para4,
                        h5: m.component1.heading5,
                        p5: m.component1.para5,
                        h6: m.component1.heading6,
                        p6: m.component1.para6,
                        h7: m.component1.heading7,
                        p7: m.component1.para7,
                        h8: m.component1.heading8,
                        p8: m.component1.para8,
                        h9: m.component1.heading9,
                        p9: m.component1.para9,
                        h10: m.component1.heading10,
                        p10: m.component1.para10,
                        h11: m.component1.heading11,
                        p11: m.component1.para11,
                        h12: m.component1.heading12,
                        p12: m.component1.heading12,
                        h13: m.component1.heading13,
                        p13: m.component1.para13,
                        h14: m.component1.heading14,
                        p14: m.component1.para14,
                        h15: m.component1.heading15,
                        p15: m.component1.para15,
                        h16: m.component1.heading16,
                        p16: m.component1.para16,
                        h17: m.component1.heading17,
                        p17: m.component1.para17,
                        h18: m.component1.heading18,
                        p18: m.component1.para18,
                        h19: m.component1.heading19,
                        p19: m.component1.para19,
                        h20: m.component1.heading20,
                        p20: m.component1.para20,
                        h21: m.component1.heading21,
                        p21: m.component1.para21,
                        h22: m.component1.heading22,
                        p22: m.component1.para22,
                      })
                    );
                },
                className: `rounded-xl  w-[17rem] p-4 text-white font-bold ${
                  e === "button2" ? "bg-red-500" : "bg-yellow-500"
                }`,
                children: ["DSA Training for OA+Interview", " "],
              }),
            }),
            i.jsx("div", {
              children: i.jsx("button", {
                role: "button",
                onClick: () => {
                  o("button3"),
                    r(
                      i.jsx(zr, {
                        h1: m.component1.heading1,
                        p1: m.component1.para1,
                        h2: m.component1.heading2,
                        p2: m.component1.para2,
                        h3: m.component1.heading3,
                        p3: m.component1.para3,
                        h4: m.component1.heading4,
                        p4: m.component1.para4,
                        h5: m.component1.heading5,
                        p5: m.component1.para5,
                        h6: m.component1.heading6,
                        p6: m.component1.para6,
                        h7: m.component1.heading7,
                        p7: m.component1.para7,
                        h8: m.component1.heading8,
                        p8: m.component1.para8,
                        h9: m.component1.heading9,
                        p9: m.component1.para9,
                        h10: m.component1.heading10,
                        p10: m.component1.para10,
                        h11: m.component1.heading11,
                        p11: m.component1.para11,
                        h12: m.component1.heading12,
                        p12: m.component1.heading12,
                        h13: m.component1.heading13,
                        p13: m.component1.para13,
                        h14: m.component1.heading14,
                        p14: m.component1.para14,
                        h15: m.component1.heading15,
                        p15: m.component1.para15,
                        h16: m.component1.heading16,
                        p16: m.component1.para16,
                        h17: m.component1.heading17,
                        p17: m.component1.para17,
                        h18: m.component1.heading18,
                        p18: m.component1.para18,
                        h19: m.component1.heading19,
                        p19: m.component1.para19,
                        h20: m.component1.heading20,
                        p20: m.component1.para20,
                        h21: m.component1.heading21,
                        p21: m.component1.para21,
                        h22: m.component1.heading22,
                        p22: m.component1.para22,
                      })
                    );
                },
                className: `rounded-xl w-[17rem] p-4 text-white font-bold ${
                  e === "button3" ? "bg-red-500" : "bg-yellow-500"
                }`,
                children: "Competitive Programming",
              }),
            }),
            i.jsx("div", {
              children: i.jsx("button", {
                role: "button",
                onClick: () => {
                  o("button4"),
                    r(
                      i.jsx(jh, {
                        h1: m.component4.heading1,
                        h2: m.component4.heading2,
                        h3: m.component4.heading3,
                        h4: m.component4.heading4,
                        h5: m.component4.heading5,
                        h6: m.component4.heading6,
                        h7: m.component4.heading7,
                        h8: m.component4.heading8,
                        h9: m.component4.heading9,
                        h10: m.component4.heading10,
                        h11: m.component4.heading11,
                        h12: m.component4.heading12,
                      })
                    );
                },
                className: `rounded-xl w-[17rem] p-4 text-white font-bold ${
                  e === "button4" ? "bg-red-500" : "bg-yellow-500"
                }`,
                children: "Full Stack Development",
              }),
            }),
          ],
        }),
        i.jsx("div", { className: "mt-20 px-[15rem]", children: n }),
      ],
    });
  },
  kh = () => {
    const e = [
        {
          subtitle:
            "Tier-3 College to OffCampus SDE- Internship Offer from Adobe",
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762427876/WhatsApp_Image_2025-11-06_at_16.44.04_d23ac4e3_xttuoc.jpg",
          content:
            "Kumar K student cracks OffCampus Adobe SDE internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
          student: "Anya Sharma",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Emblem.png",
        },
        {
          subtitle: "Service Based to 25LPA SDE Offer at Amazon",
          content:
            "Kumar K Mentoring Student cracks off-campus SDE-offer from Amazon after 8 months of advanced DSA(OA + CP) training",
          companyLogo:
            "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
          student: "Aman Advani",
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762429189/8awJisQrdmQ-HD_zmbi5u.jpg",
        },
        {
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762423413/WhatsApp_Image_2025-11-06_at_15.12.02_5539f880_urbzg3.jpg",
          subtitle: "SDE Offer Amazon",
          content:
            "Kumar K student cracks  Off campus Amazon  SDE  internship offer after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
          student: "Vyom Goyal",
          companyLogo:
            "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
        },
        {
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1758607984/WhatsApp_Image_2025-09-23_at_01.04.00_a9a55e7c_v8iczu.jpg",
          subtitle:
            "Tier-4 College to OffCampus SDE- Internship Offer from Google",
          content:
            "Kumar K Mentoring Student cracked Off-Campus SDE- Internship Offer from Google after 8 months of advanced DSA(OA + CP + System Design) training.",
          student: "Yashasvi Sharma",
          companyLogo:
            "https://imgs.search.brave.com/7oRMZ5ifuTywDSOtzsemEMjW7jsmHMLZeDMZPLycObU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2dv/b2dsZS9nb29nbGUt/dGlsZS5zdmc",
        },
        {
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762425009/WhatsApp_Image_2025-11-06_at_15.58.51_4043db9e_flpein.jpg",
          subtitle: "Tier-3 College to Google + Amazon Internship",
          content:
            "Kumar K Mentoring Student cracked  SDE- Internship Offer from Google  and Amazon after 8 months of advanced DSA(OA + CP + System Design) training.",
          student: "Vivek Haldar",
          companyLogo:
            "https://imgs.search.brave.com/we4J9Nce1CapScBva4Ygw_EXcYv5Jcson02x0CePSjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FtYXpvbi1Mb2dv/LTIwMDAtNTAweDI4/MS5wbmc",
        },
        {
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762422404/WhatsApp_Image_2025-11-06_at_15.12.40_5f9aa3b3_ujhkba.jpg",
          subtitle: "SDE Offer Nutanix 60LPA",
          content:
            "Kumar K student cracks  60LPA SDE offer from Nutanix after 8 months of high level DSA + OA + CP training and 1-1 Mentorship",
          student: "Charul",
          companyLogo:
            "https://imgs.search.brave.com/XM51Jte_QPvQc1XDvKnNbGcDij2ovYyKVQwSMgcMuaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L051dGFuaXgtTG9n/by01MDB4MjgxLnBu/Zw",
        },
        {
          imageSrc: "sheenam.jpg",
          subtitle: "SDE Offer OFF Campus Flipkart",
          content:
            "Kumar K student from tier-3 college cracks off-campus engineering offer from Flipkart after 10 months of high level DSA + OA + CP training and 1-1 Mentorship",
          student: "Sheenam Gupta",
          companyLogo:
            "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png",
        },
        {
          imageSrc: "riyamicrosoft.jpg",
          subtitle: "SDE Offer Off Campus from Microsoft!",
          content:
            "Kumar K student from tier-3 college cracks off-campus engineering offer from Microsoft after 8 months of high level DSA + OA + CP training",
          student: "Riya Das",
          companyLogo: "./CompanyLogo/micro.jpg",
        },
        {
          imageSrc: "Ach.jpg",
          subtitle: "Kumar K Student Cracks offer from Google!",
          content:
            "Kumar K Mentoring Student cracks  offer from Google after 8 months of advanced DSA(OA + CP) training",
          student: "Achyut Gupta ",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
        },
        {
          imageSrc: "shivam.jpg",
          subtitle: "Kumar K Student Cracks offer from Google!",
          content:
            "Kumar K Mentoring Student cracks  offer from Google after 8 months of advanced DSA(OA + CP) training",
          student: "Shivam Kumar",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
        },
        {
          imageSrc: "sunpreet.jpg",
          subtitle: "SDE Offer Off Campus from Xperi Inc!",
          content:
            "Kumar K student from tier-3 college cracks off-campus SDE Intern offer from Xperi Inc after 8 months of high level DSA + OA + CP training",
          student: "Sunpreet Sabharwal ",
          companyLogo: "./CompanyLogo/xperi.jpg",
        },
        {
          imageSrc: "pranav.jpg",
          subtitle: "Tier-4 College to 40+ LPA",
          content:
            "Kumar K Student  cracks off campus SDE Intern + Fulltime offer from Linkedin(40 LPA CTC) after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Pranav Kulkarni",
          companyLogo: "./CompanyLogo/link.jpg",
        },
        {
          imageSrc: "likhitKumar.jpg",
          subtitle: "SDE Offer  from JustPay",
          content:
            "Kumar K Student  cracks off campus SDE I offer from JustPay after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Likhith Kumar",
          companyLogo: "./CompanyLogo/justpay.jpg",
        },
        {
          imageSrc: "kumarabhishek.jpg",
          subtitle: "SDE offer from Samsung R&D",
          content:
            "Kumar K Student  cracks off campus SDE Intern + Fulltime offer from Samsung R&D after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Kumar Abhishek",
          companyLogo: "./CompanyLogo/Samsung.png",
        },
        {
          imageSrc: "/Achiever/Ritik.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student cracks Microsoft SDE Intern after 8 months of FAANG level DSA(OA + Interview) Training with us! ",
          student: "Ritik",
          companyLogo: "./CompanyLogo/micro.jpg",
        },
        {
          imageSrc: "/Achiever/anirudha.jpg",
          content:
            " Kumar K Student cracked SDE-2 offer Offcampus at Visa after DSA + System Design Training + 1 -1 Mentoring from Kumar K",
          student: "Anirudha",
          companyLogo: "./CompanyLogo/visa.png",
        },
        {
          imageSrc: "ist.jpg",
          content:
            " Kumar K  Mentoring Student cracks off-campus SDE offer from PhonePe after 8 months of advanced DSA(OA+CP)training",
          student: "MD ISTAKHAR ANSARIMD",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovIQy7Sqh32fhLLF9N9_uRE4ZgnwQ4FMu2w&s",
        },
        {
          imageSrc: "sagar.jpg",
          content:
            "Kumar K student cracks SDE-3 Offer from Walmart Global Tech India!  after undergoing live training for DSA + OA + System Design",
          student: "Sagar Bansal",
          companyLogo: "./CompanyLogo/walmart.png",
        },
        {
          imageSrc: "/Achiever/Rashi Bhave.jpeg",
          subtitle: "SDE Offer OFF Campus Microsoft",
          content:
            "Kumar K  Student Rashi Bhave - Cracked 48LPA Microsoft Off Campus Offer  as a fresher in recession. This was possible because we personally guided her before each interview round. Trained her hard for FAANG level OA + Interview.😍😍😇😇      ",
          student: "Rashi Bhave",
          companyLogo:
            "https://imgs.search.brave.com/cU13n8Wu61ZfYrYhBzrndNulyMPpE6gXQZmyS9kn4tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLTQucG5n",
        },
        {
          imageSrc: "/Achiever/akhil.jpg",
          content:
            " Kumar K Student cracks  SDE-2 offer  at BNY Mellon after working for 1.5 years in a service based company",
          student: "AKHIL B B ",
          companyLogo:
            "https://download.logo.wine/logo/The_Bank_of_New_York_Mellon/The_Bank_of_New_York_Mellon-Logo.wine.png",
        },
        {
          imageSrc: "/Achiever/Nidhi Kumari.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student Nidhi Kumari cracks 48 LPA Amazon offcampus SDE offer  after  8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Nidhi Kumari",
          companyLogo: "./CompanyLogo/amazon.jpg",
        },
        {
          imageSrc: "/Achiever/Dev Sharma.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student cracks Zomato Off Campus 28 LPA offer after 8 months of FAANG level DSA(OA + Interview) Training with us! ",
          student: "Dev",
          companyLogo: "./CompanyLogo/zomato.jpg",
        },
        {
          imageSrc: "/Achiever/Gauri Kadyan.jpeg",
          subtitle: "Tier-4 College to 40+ LPA",
          content:
            "Student cracks 18 LPA SDE Offer from Barclays after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Gauri",
          companyLogo: "./CompanyLogo/bercalys.jpg",
        },
        {
          imageSrc: "/Achiever/karman.jpg",
          content:
            "Kumar K student with no job offer as 2023 CS Grad(was really worried) ends up cracking 4 offcampus offers of 12+LPA with maximum being 16LPA  because of 1-1 Mentoring + Off Campus Job Referral Support",
          student: " Karrman",
          companyLogo:
            "https://upload.wikimedia.org/wikipedia/commons/e/e5/ANSYS_logo.png",
        },
        {
          imageSrc: "/Achiever/sharmista.jpg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student cracks Off Campus SDE Offers from PhonePe and Precisely after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Sharmistha Chakraborty",
          companyLogo:
            "https://i.pinimg.com/736x/2a/cf/b6/2acfb6fb41f7fcb82c3230afdecff714.jpg",
        },
        {
          imageSrc: "/Achiever/Anwesha.jpg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K student cracks NVIDIA and Qualcomm after 8 months of daily live DSA + OA + CP Training and 1-1 Mentorship",
          student: " Anwesha Kar ",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFDaTMtM3sUbibnUIq3Glz2Vpp2qzyknrDg7fOtIWpw&s",
        },
        {
          imageSrc: "/Achiever/Salman.jpg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Off campus from IBM ",
          student: "Salman Uddin.",
          companyLogo:
            "https://mma.prnewswire.com/media/1425093/IBM_LOGO.jpg?p=facebook",
        },
        {
          imageSrc: "/Achiever/Suvankar.jpg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Offcampus from Pursuit ",
          student: "Suvankar Mahato",
          companyLogo:
            "https://www.pursuitsoftware.com/wp-content/uploads/2022/04/PursuitSoftwareLogo.png",
        },
        {
          imageSrc: "/Achiever/Sudipto.jpg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K 2023 Grad student with 10 months of gap after graduation cracks 11LPA SDE Offer Offcampus from Pursuit ",
          student: "Sudipto Paul",
          companyLogo:
            "https://www.pursuitsoftware.com/wp-content/uploads/2022/04/PursuitSoftwareLogo.png",
        },
        {
          imageSrc: "/Achiever/sheel.jpg",
          content:
            " Kumar K student  cracks 22 LPA SDE Offer from Samsung after 8 months of FAANG level DSA(OA + Interview) Training with us! ",
          student: "Sheel Aggarwal",
          companyLogo: "./CompanyLogo/Samsung.png",
        },
        {
          imageSrc: "/Achiever/akhil1.jpg",
          subtitle:
            "5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company",
          content:
            " Kumar K Student who was a DSA beginner and was working in service based company cracks 30 LPA Off Campus SDE Offer from Flipkart after 8 months of FAANG level DSA(OA + Interview) Training with us!",
          student: "Akhil Sharma",
          companyLogo:
            "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png",
        },
        {
          imageSrc: "/Achiever/Animesh Kumar.jpeg",
          subtitle: "Tier-3 College to Off-Campus SDE Offer from Swiggy",
          content: "Kumar K  student cracks  28LPA  BNY Mellon SDE Offer   ",
          student: " ANIMESH KUMAR KAR",
          companyLogo: "./CompanyLogo/Swiggy.png",
        },
        {
          imageSrc: "/Achiever/Arye.jpg",
          subtitle: "Tier-3 College to 25LPA SDE offer off Campus from Cisco",
          content:
            " Kumar K student from  tier-3 college cracks 25 LPA Cisco Job offer  after 8 months of training for FAANG       ",
          student: "Aryennh Kulkarni",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "/Achiever/Suraj.jpg",
          content:
            " Kumar K Student cracks Intel 23LPA offer  after 8 months of training for FAANG ",
          student: "Suraj Singh.",
          companyLogo:
            "https://th.bing.com/th/id/R.8e8e5d3e0b38ecd0688082625bbf1591?rik=KXVMRQZ4DisUpA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png&ehk=jBzDgPyZuKWPCApTheGKUI2UkgluVE%2bhStxECioQ3lg%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          imageSrc: "/Achiever/prastuti Mazumdar.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            " Kumar K student with no job offer as 2023 Electrical Grad(was really worried) ended up cracking 18LPA OffCapmpus! 🥳🥳",
          student: "Prastuti",
          companyLogo:
            "https://th.bing.com/th/id/OIP.RAkemAFXWtTRWTqbKjfJVQAAAA?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Tanmay Shukla.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student cracks 18 LPA SDE Offer from Barclays after FAANG level training for OA + Interview.",
          student: "Tanmay",
          companyLogo: "./CompanyLogo/bercalys.jpg",
        },
        {
          imageSrc: "/Achiever/Sai Soumyak nanda.jpeg",
          subtitle: "SUBTITLE 1",
          title: "Card Title 1",
          content:
            "Student cracks Cisco (25LPA) after FAANG level training for OA + Interview",
          student: "Sai Soumyak Nanda      ",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "shreeja.jpg",
          content:
            "Kumar K  student cracked 14 LPA job offer from Microchip   in just   2-3 months preparation from basic to advanced by our personalised Mentoring + Training + Course.(special support before the interview!)",
          student: "Shreeja ",
          companyLogo:
            "https://logos-download.com/wp-content/uploads/2016/09/Microchip_logo.png",
        },
        {
          imageSrc: "/Achiever/Sandeep.jpg",
          subtitle:
            "Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1",
          content:
            " Kumar K Student working in service based company cracks 18 lpa; product based company ",
          student: "Sandeep Nuka",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8YK7FU2V3gD66wg6xPVbu3nHrOPVF71TXGUmLDhcrg&s",
        },
        {
          imageSrc: "/Achiever/Sejal.jpg",
          subtitle: "Tier-3 College to Microsoft",
          content:
            " Kumar K Student cracks Microsoft Off Campus offer after 8 month FAANG level OA + Interview + CP training",
          student: "Sejal Aggarwal",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s",
        },
        {
          imageSrc: "/Achiever/Anurag.jpg",
          subtitle: "Tier-3 College to 28 LPA SDE Offer OFF Campus",
          content:
            " Kumar K Student fully beginner at DSA; cracks ZScaler 28 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!Anurag Tiwari",
          student: "Anurag Tiwari",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s",
        },
        {
          imageSrc: "20.jpg",
          subtitle: "SDE Offer OFF Campus Microsoft",
          content:
            " Kumar K student Cracks Microsoft SDE Offer Off Campus after training with us for 8 months!",
          student: "Vinita Katlamudi",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47O99cKOhd7xh1E-dXTsdFg8mwQZp3LWWCce3igRQ7g&s",
        },
        {
          imageSrc: "/Achiever/Abhishek.jpg",
          subtitle:
            "2023 Grad with Gap to Off campus SDE offer at Societe Generale",
          content:
            " Kumar K Student with 2023 year of graduation cracks off campus SDE offer at Societe Generale; Top PBC despite having a gap of 8+ months.",
          student: "Abhishek Mishra",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKU7FQj7VG6wF6TsSHLVtjw6o0bAw-UllEmhDC66XonA&s",
        },
        {
          imageSrc: "/Achiever/Surya.jpg",
          subtitle:
            "Service Based to off Campus SDE offer at Ford Motor Company",
          content:
            " Kumar K Student switched from service based to Product based company Ford 18 LPA  SDE Offer",
          student: "Surya",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVr6wS8AXnQG7eE4AfO_6_g7kxGZNmd4m7P-jNpWfwhA&s",
        },
        {
          imageSrc: "/Achiever/Prakriti.jpg",
          subtitle: "Tier-3 College to OFF Campus SDE Offer",
          content:
            " Kumar K Student cracks Goldman Sachs OFF Campus SDE Offer after daily live training ofOur Recent Selection 8 months.",
          student: "Prakriti Chatterjee",
          companyLogo:
            "https://1000logos.net/wp-content/uploads/2016/12/Goldman-Sachs-Logo.jpg",
        },
        {
          imageSrc: "/Achiever/Sarthak.jpg",
          subtitle: "Tier-3 College to Off-Campus SDE Offer from Swiggy",
          content:
            " Kumar K Student from tier-3 college; cracks SDE Offer from Swiggy by training super hard with us for DSA(OA + Interview) + LLD + HLD!",
          student: "Sarthak Rohtagi",
          companyLogo:
            "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png",
        },
        {
          imageSrc: "/Achiever/Raj.jpg",
          subtitle: "Tier-3 College to 25LPA SDE offer off Campus from Cisco",
          content:
            " Kumar K Student fully beginner at DSA; cracks Cisco 25 LPA Offer after 5 month FAANG level DSA + OA + Mock Interview Training + 800 hour course!",
          student: "Raj Kumar",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZeYHBnxRPV0aXyjgSXiZOwQKHKMuY9U8yKtrPC39wQ&s",
        },
        {
          imageSrc: "Sai.jpg",
          subtitle: "Service Based to Product Based",
          content:
            " Kumar K Student Jagadeesh cracks 18 LPA offcampus SDE offer after getting laid off from Infosys service based company",
          student: "Jagadeesh",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Xo2UzT9P7pdNhS3E5b6IxfjYi9JbwuxbraSLzn8&s",
        },
        {
          imageSrc: "/Achiever/ShivamKedia.jpg",
          subtitle: "Service Based to Product Based",
          content:
            " Kumar K Student working in service based company cracks 11 lpa; product based company ",
          student: "Shivam Kedia",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Xo2UzT9P7pdNhS3E5b6IxfjYi9JbwuxbraSLzn8&s",
        },
        {
          imageSrc: "name.jpg",
          subtitle: "Tier -3 to Cisco OFF campus",
          content:
            "Kumar K Student Cracks Cisco after 8 month Faang level DSA + OA Training",
          student: "Naman Khurana.",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "/Achiever/ARUN.jpg",
          subtitle: "SUBTITLE 1",
          content:
            "Kumar K Student with 0 college placements cracks offcampus 10LPA offer from Zoho ",
          student: "Arunraj Vadivel",
          companyLogo:
            "https://w7.pngwing.com/pngs/939/823/png-transparent-zoho-office-suite-customer-relationship-management-zoho-corporation-email-computer-software-email-miscellaneous-text-trademark.png",
        },
        {
          imageSrc: "/Achiever/Dhruv Pandey.jpeg",
          title: "Card Title 1",
          content:
            "Kumar K Student who was constantly failing for 8 months cracks 15 LPA; SDE offer from Fiserv",
          student: "Dhruv Pandey ",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSloHS51wFKaN9GYkVZw1JDqV4ZzPCeyZl8TvBukHpINQ&s",
        },
        {
          imageSrc: "/Achiever/Nandhu.jpg",
          subtitle: "Tier-3 to OffCampus remote from Germany",
          content:
            " Kumar K Student cracks Offcampus remote offer from Germany despite being from tier-3 college.",
          student: "Nandhu Aripelli",
          companyLogo:
            "https://cdn.1min30.com/wp-content/uploads/2018/07/Symbole-Goldman-Sachs.jpg",
        },
        {
          imageSrc: "srisagesh.jpg",
          subtitle: "SUBTITLE 1",
          content:
            "Kumar K Student cracks ALLEN Digital  after 8 month training for FAANG level OA + Interview. ",
          student: "SaiSri Angajala",
          companyLogo:
            "https://th.bing.com/th/id/OIP.zGqbh9oFOgNSI9LTShHrhwHaGM?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "Arav.jpg",
          subtitle: "SUBTITLE 1",
          title: "Card Title 1",
          content:
            "Kumar K Student cracks ZScaler after 8 month training for FAANG level OA + Interview. ",
          student: "Aarav Srivastava",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOhWEZ90hm__JMCXOeMPVQJdxOdwd4P46KkAKPwVIRQ&s",
        },
        {
          imageSrc: "/Achiever/Khusboo Agarwal.jpeg",
          subtitle: "Tier-3 to OffCampus remote from Germany",
          content:
            "Kumar K Student cracks Zeta Intern + FTE Offcampus after training hard for FAANG level OA + Interview from the Kumar K 800 hour course!.",
          student: "Khushboo Agarwal",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZqnA4SkOp7SuTJ11s1hk2rg0391QS0kG7o_-jj71VA&s",
        },
        {
          imageSrc: "/Achiever/JaimitKumar Panchal.jpeg",
          subtitle: "Tier-4 College to 40+ LPA",
          content:
            "Kumar K Student cracks 18 LPA offer from HP despite working at 3lpa service based company in just 5 months!",
          student: "Jaiminkumar Pranchal",
          companyLogo:
            "https://th.bing.com/th/id/R.fa1948e3d23672dba74325f91acfa4f1?rik=rQ52H1LvjYHeGw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-hp-inc-png-hp-inc-891.png&ehk=67rDGhDbyTv4QMeGeXZeZm%2bNEs4%2ft%2bHQxsCXmfPQhTI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          imageSrc: "/Achiever/Priyanshi Srivastava.jpeg",
          subtitle: "Service Based to Product Based",
          content:
            "Kumar K Student who got laid off from 3LPA job cracks senior software engineer offer off campus at BT Group",
          student: "Priyanshi Srivastava",
          companyLogo:
            "https://th.bing.com/th/id/OIP.ROu7aRWZczove8R9bzH6owHaE8?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Bharat Goyal.jpeg",
          subtitle:
            "5LPA Service based to 30LPA SDE Offer from Flipkart Product Based Company",
          content:
            "Kumar K Non IT background student with years of gap cracks 28 lpa SDE Offer Offcampus!",
          student: "Bharat Goyal ",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png",
        },
        {
          imageSrc: "/Achiever/Animesh Bajpai.jpeg",
          subtitle:
            "Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1",
          content:
            "Kumar K Student cracks Cisco SDE Intern + Full Time off campus by undergoing FAANG level OA + Interview Training  ",
          student: "Animesh Bajpai ",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "/Achiever/Harshit Raj.jpeg",
          subtitle: "Tier-3 College to Microsoft",
          content:
            " Kumar K Student cracked Paypal Intern + Full Time offer after training super hard for FAANG LEVEL DSA(OA + interview!)",
          student: "Harshit Raj.",
          companyLogo:
            "https://static.vecteezy.com/system/resources/previews/022/100/701/non_2x/paypal-logo-transparent-free-png.png",
        },
        {
          imageSrc: "/Achiever/Aalia Lokhandwala.jpeg",
          subtitle: "Tier-3 College to 28 LPA SDE Offer OFF Campus",
          content:
            " Kumar K Student with 2 years experience in service based cracks 38 LPA SDE-2 offers at Lenskart + Gupshup + WayFair + Kindred Group       ",
          student: "Aalia Lokhandwala.",
          companyLogo:
            "https://th.bing.com/th/id/OIP.rcSGAXBa3Mxb15rfgsfDCwHaEK?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/umang.jpg",
          subtitle: "SDE Offer OFF Campus Microsoft",
          content:
            " Kumar K Student with 0 job offer as 2023 Grad cracks off campus Salesforce SDE Offer 28 LPA",
          student: "Umang Sharma.",
          companyLogo: "./CompanyLogo/micro.jpg",
        },
        {
          imageSrc: "/Achiever/SarthakJatla.jpg",
          subtitle:
            "2023 Grad with Gap to Off campus SDE offer at Societe Generale",
          content:
            " Kumar K Student who used to fail interviews and online test cracks 18 lpa remote international SDE offer from US based company Avaya      .",
          student: "Sarthak Jatale",
          companyLogo:
            "https://th.bing.com/th/id/OIP.euLoeTxSsicVplmaxArbCAHaHa?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Neer.jpg",
          subtitle:
            "Service Based to off Campus SDE offer at Ford Motor Company",
          content:
            "Kumar K Student cracks 31 LPA Blackrock offer after training hard for 8 months and never missing a single session!.",
          student: "Niraj Kumar.",
          companyLogo:
            "https://th.bing.com/th/id/R.d412e130963c12d5c1c449bf15a69460?rik=auFZeTzENPzvMg&riu=http%3a%2f%2fwww.logotypes101.com%2flogos%2f606%2fE4BAEEF36D16CA1835D441AAA405324B%2fBlackRock.png&ehk=Id%2ftL6%2bSXzda6tCOA%2bDyytsvWuJfULOakHW6N3PHxRc%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          imageSrc: "/Achiever/Anusheel.jpeg",
          subtitle: "Tier-3 College to OFF Campus SDE Offer",
          content:
            " Kumar K Student cracks Walmart SDE Intern + Full Time; after 8 months of daily live training for FAANG level OA + Interview.       .",
          student: "Anusheel",
          companyLogo: "./CompanyLogo/walmart.png",
        },
        {
          imageSrc: "/Achiever/Ash.jpeg",
          subtitle: "Tier-3 College to Off-Campus SDE Offer from Swiggy",
          content:
            " Kumar K Student Despite being a DSA beginner and 2 years experience at service based company Cognizant ;  cracks senior Engineer role off campus at OpenText + Fed-Ex.      ",
          student: "Ashmita  Senapati",
          companyLogo:
            "https://www.industryanalysts.com/wp-content/uploads/2019/05/opentext-logo-e1680020526745.png",
        },
        {
          imageSrc: "Arth.jpg ",
          subtitle: "Tier-3 College to Off-Campus SDE Offer from BT Group",
          content:
            " Kumar K Student Despite being a DSA beginner and 2 years experience at service based company Cognizant ;  cracks SDE Offer from BT Group   ",
          student: "Arthita  Senapati",
          companyLogo:
            "https://media.licdn.com/dms/image/D4E0BAQFcyvjY35EvXA/company-logo_200_200/0/1663653523168/bt_logo?e=1728518400&v=beta&t=pnyUajIHCJLhIu1win0J-uh7BPz56xzbnJX0JI719co",
        },
        {
          imageSrc: "Surbhi.jpg",
          subtitle: "Tier-3 College to Off-Campus SDE Offer from BetterPlace",
          content:
            " Kumar K Student  Kumar K Student who was a DSA beginner from Tier-3 college crack Off campus  SDE offer from BetterPlace    ",
          student: "Surbhi Negi",
          companyLogo:
            "https://media.licdn.com/dms/image/D560BAQGZSpAPIwbUgQ/company-logo_200_200/0/1719257669608/mybetterplace_logo?e=1728518400&v=beta&t=t3C84fHBnuCtp0z211FgUaZsUWeFvpBBKw9gbMDRjro",
        },
        {
          imageSrc: "Achiever/Ayushi.jpg",
          subtitle: "Tier-3 College to 25LPA SDE offer off Campus from Cisco",
          content:
            " Kumar K 2024 Grad student cracks 12 LPA SDE Role in top tech startup",
          student: "Ayushi Sood",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "Achiever/Raghav.jpg",
          subtitle: "Tier -3 to Cisco OFF campus",
          content:
            "Kumar K Student cracks 18 LPA Full Time SDE offer at Juniper Networks. after 8 month Faang level DSA + OA Training",
          student: "Raghav Singhal",
          companyLogo:
            "https://th.bing.com/th/id/OIP.ywF-_XWqQEfCooDjSJ9LdgHaE8?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Koustav halder.jpeg",
          subtitle: "SUBTITLE 1",
          content: "Kumar K Student cracks 25LPA Samsung SDE Offer",
          student: "Koustav Halder",
          companyLogo: "./CompanyLogo/Samsung.png",
        },
        {
          imageSrc: "/Achiever/Santosh Yeshwanth.jpeg",
          subtitle: "SUBTITLE 1",
          title: "Card Title 1",
          content:
            " Kumar K Student with 2 years experience in service based company Infosys cracks 28 LPA TOP PBC Off Campus!",
          student: "Santosh. ",
          companyLogo:
            "https://th.bing.com/th/id/OIP.hRz-ypR-ofxFH_Bh0B2zMAHaFP?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Astha.jpg",
          subtitle: "Tier-3 to OffCampus remote from Germany",
          content:
            " Kumar K  student cracked 18 LPA SDE offer  in just 2-3 months of preparation.",
          student: "Aastha Singh",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2021/02/HSBC-Logo-1983-2018.png",
        },
        {
          imageSrc: "/Achiever/Dixit bansal.jpeg",
          subtitle: "Tier-3 to OffCampus remote from Germany",
          content:
            "Kumar K  𝐬𝐭𝐮𝐝𝐞𝐧𝐭 𝐰𝐡𝐨 𝐟𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐜𝐫𝐚𝐜𝐤 7.5𝐋𝐏𝐀 𝐛𝐮𝐭 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐜𝐫𝐚𝐜𝐤𝐬 17.5𝐋𝐏𝐀 𝐨𝐟𝐟𝐞𝐫 from HP ",
          student: "Dixit Bansal",
          companyLogo:
            "https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png",
        },
        {
          imageSrc: "/Achiever/Aman.jpeg",
          subtitle:
            "Tier-3 CStudent cracked 18 lpa SDE Offer Off-campus from product based company ExperianCard Title 1",
          content:
            "Kumar K student crack 20 LPA Zscaler SDE(Intern + PPO) Offer ",
          student: "Aman Gupta",
          companyLogo:
            "https://th.bing.com/th/id/OIP.nva8NdiivteQQiHLYc8HoQHaFh?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Diwakar.jpg",
          subtitle: "Tier-3 College to Microsoft",
          content:
            "Kumar K Student working at service based company cracks 22 LPA off campus job offer at top tech startup ",
          student: "Diwakar Singh",
          companyLogo: "./CompanyLogo/micro.jpg",
        },
        {
          imageSrc:
            "https://res.cloudinary.com/de4ks8mkh/image/upload/v1762423031/WhatsApp_Image_2025-11-06_at_15.26.43_c5f8d4a7_rvyvrn.jpg",
          subtitle: "Tier-3 College to 28 LPA SDE Offer OFF Campus",
          content:
            "On 12th October Student cracked 18 LPA SDE Offer at Barclays! ",
          student: "Saniya Inamdar",
          companyLogo: "./CompanyLogo/bercalys.jpg",
        },
        {
          imageSrc: "/Achiever/kushal.jpg",
          subtitle:
            "Service Based to off Campus SDE offer at Ford Motor Company",
          content:
            "Kumar K student cracked an 18 LPA job offer at top tech  Product Based Company Hyland and switch from service based Company Cognizant ",
          student: "Kushal Banik ",
          companyLogo:
            "https://mma.prnewswire.com/media/456686/Hyland_Software_Logo.jpg?p=facebook",
        },
        {
          imageSrc: "/Achiever/MD.jpeg",
          subtitle: "Tier-3 College to OFF Campus SDE Offer",
          content:
            "Kumar K  student cracks 14LPA HFT -> Intern + PPO  after training for FAANG level OA + Interview ",
          student: "Mohammed Kaif Ahmed. ",
          companyLogo:
            "https://www.glassonline.com/wp-content/uploads/2021/05/HFT_new_logo_654x350-478x256.jpg",
        },
        {
          imageSrc: "/Achiever/Jyoti.jpg",
          subtitle: "Tier -3 to Cisco OFF campus",
          content:
            "On August 21 ; student cracked (19 LPA) Deutsche Bank job offer after training super hard for DSA + OA + CS Fundamentals!",
          student: "Jyoti",
          companyLogo: "./CompanyLogo/cisco.jpg",
        },
        {
          imageSrc: "selec.jpg",
          content: "Kumar K  student cracked an offer(19 LPA.) from Oracle!",
          student: "Ayush Kumar      ",
          companyLogo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzGrJVTLOQpQrrUCvfuKBGW57xddOpAkUJCalDZkiwQ&s",
        },
        {
          imageSrc: "/Achiever/Mrinal.jpg",
          subtitle: "Tier-3 to OffCampus remote from Germany",
          content:
            " Kumar K Student cracks 13 LPA offer off campus From Manhettan Associates",
          student: "Mrinal Mohan.",
          companyLogo:
            "https://th.bing.com/th/id/OIP.Eb4uOm4jHM4xJNXPv6PTfQHaHa?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Mrun.jpg",
          content:
            " Kumar K Student laid off in recession cracks 12LPA offer in Akami Tech. ",
          student: "Mrunmai Dahare.",
          companyLogo:
            "https://th.bing.com/th/id/OIP.v8Ax9IW84z0Bh3URJz11tQHaE8?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/karan.jpg",
          content: " Kumar K  student  cracks SDE Intern at GoldMan Sachs ",
          student: "KARAN SARAWAGI",
          companyLogo:
            "https://th.bing.com/th/id/OIP.20UZG_OJdxb6vdhuboZ1vgHaEK?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/ankit.jpg",
          content:
            " Kumar K Student working at service based company TCS 3LPA cracks 14LPA  in CDOT  ",
          student: "Ankit Sharma",
          companyLogo:
            "https://yt3.ggpht.com/a/AGF-l79yTuFVtNJSJrc1JfbYzZQwq10ttZj8Vr5SNA=s900-mo-c-c0xffffffff-rj-k-no",
        },
        {
          imageSrc: "/Achiever/Hemandra.jpg",
          content:
            " Kumar K student Cracks Flipkart Group(ClearTrip) SDE Offer after training with us for 8 months!. ",
          student: "Hemandra Mehta",
          companyLogo:
            "https://th.bing.com/th/id/OIP.ZGMpXrltkjECnySvPKQgHQHaEL?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "/Achiever/Hrithik.png",
          content:
            " Kumar K student Cracks Flipkart SDE Offer after training with us for 8 months!. ",
          student: "Hritik Bhardwaj",
          companyLogo:
            "https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/flipkart-512.png",
        },
        {
          imageSrc: "shivamkauski.jpg",
          content:
            " Kumar K student Cracks  SDE  intern  Remote International  Offer  from Rice University after training with us for 8 months!. ",
          student: "Shivam Kaushik",
          companyLogo:
            "https://th.bing.com/th/id/OIP.eYvIsH4TwGbiN9IFYUc94wHaHa?rs=1&pid=ImgDetMain",
        },
        {
          imageSrc: "akshat.jpg",
          content:
            " Kumar K student Cracks Remote SDE intern  offer from BetaZen Infotech. ",
          student: "Akshat Srivastava",
          companyLogo:
            "https://th.bing.com/th/id/OIP.rn1m9TBOPyYY9RuNxM8W-QAAAA?rs=1&pid=ImgDetMains",
        },
        {
          imageSrc: "Manas.jpg",
          content:
            " Kumar K Student cracks  24 LP A SDE offer from Japan Product Based Company  OffCampus  after 8 months of advanced DSA(OA + CP) training. ",
          student: "Manas Goyal",
          companyLogo:
            "https://media.licdn.com/dms/image/v2/C4D0BAQE2Hk3-e0WXmA/company-logo_200_200/company-logo_200_200/0/1631326323947?e=2147483647&v=beta&t=aXUJlpONCZPn1jfSICttOFMx9F92rrUHIelyrLzCG_0",
        },
      ],
      [t, n] = N.useState(100),
      [r, o] = N.useState(e),
      l = () => {
        n(r.length);
      };
    return i.jsx("section", {
      className:
        "text-gray-600 body-font bg-gradient-to-r to-red-50 from-yellow-100",
      children: i.jsxs("div", {
        className: "container px-5 py-24 mx-auto",
        children: [
          i.jsx("div", {
            className: "flex flex-wrap w-full mb-20",
            children: i.jsxs("div", {
              className: "lg:w-1/2 w-full mb-6 lg:mb-0 ",
              children: [
                i.jsx("h1", {
                  className:
                    "sm:text-3xl text-2xl font-medium title-font mb-2 textc text-gray-900",
                  children: "Our 100    Recent Selections",
                }),
                i.jsx("div", { className: "h-1 w-20 bg-indigo-500 rounded" }),
              ],
            }),
          }),
          i.jsx("div", {
            className: "flex flex-wrap -m-4",
            children: r
              .slice(0, t)
              .map((a, s) =>
                i.jsx(
                  "div",
                  {
                    className: "xl:w-1/4 md:w-1/2 p-4",
                    children: i.jsxs("div", {
                      className:
                        " bg-white rounded-lg p-6 shadow-lg hover:shadow-lg transition duration-400",
                      children: [
                        i.jsx("img", {
                          className:
                            "h-50 rounded w-full object-cover object-center mb-6",
                          src: a.imageSrc,
                          alt: "content",
                        }),
                        i.jsx("h2", {
                          className:
                            "text-lg text-gray-900   font-sans font-medium  mb-4",
                          children: a.content,
                        }),
                        i.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            i.jsx("p", {
                              className:
                                "leading-relaxed text-base font-bold text-black",
                              children: a.student,
                            }),
                            i.jsx("img", {
                              src: a.companyLogo,
                              className: "w-8 h-8 object-cover rounded-full",
                              alt: "company logo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  s
                )
              ),
          }),
          t < r.length &&
            i.jsx("div", {
              className: "flex flex-col items-center justify-center",
              children: i.jsx("button", {
                className:
                  "mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                onClick: l,
                children: "View More",
              }),
            }),
        ],
      }),
    });
  },
  Ah = () =>
    i.jsx(i.Fragment, {
      children: i.jsxs(qp, {
        children: [
          i.jsx(Xp, {}),
          i.jsxs(Bp, {
            children: [
              i.jsx(Qt, { path: "/", element: i.jsx(xh, {}) }),
              i.jsx(Qt, { path: "/contact", element: i.jsx(wh, {}) }),
              i.jsx(Qt, { path: "/about", element: i.jsx(Sh, {}) }),
              i.jsx(Qt, { path: "/Curriculum", element: i.jsx(Nh, {}) }),
              i.jsx(Qt, { path: "/achiver", element: i.jsx(kh, {}) }),
            ],
          }),
          i.jsx(eh, {}),
          i.jsx("div", { className: "fixed bottom-0 left-[90%]" }),
        ],
      }),
    });
"serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((e) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          e.scope
        );
      })
      .catch((e) => {
        console.log("ServiceWorker registration failed: ", e);
      });
  });
xl.createRoot(document.getElementById("root")).render(
  i.jsx(Ue.StrictMode, { children: i.jsx(Ah, {}) })
);
export { bh as F, gi as L, Uo as _, Ch as a, i as j, N as r };
