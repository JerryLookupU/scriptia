var vr = Object.defineProperty;
var br = (a, i, o) => i in a ? vr(a, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[i] = o;
var Pe = (a, i, o) => br(a, typeof i != "symbol" ? i + "" : i, o);
import ne, { useState as ie, useCallback as W } from "react";
const zr = {
  "9:16": {
    ratio: "9:16",
    width: 200,
    height: 300
  },
  "16:9": {
    ratio: "16:9",
    width: 200,
    height: 300,
    frontImageHeight: 112
  },
  "1:1": {
    ratio: "1:1",
    width: 200,
    height: 200
  }
}, Fe = {
  ip: {
    id: "ip",
    label: "IP角色",
    color: "#e8590c",
    gradient: "linear-gradient(135deg, #e8590c, #c2410c)",
    icon: "🎭",
    defaultRatio: "9:16"
  },
  scene: {
    id: "scene",
    label: "场景",
    color: "#2f9e44",
    gradient: "linear-gradient(135deg, #2f9e44, #2b8a3e)",
    icon: "🏙️",
    defaultRatio: "9:16"
  },
  plot: {
    id: "plot",
    label: "剧情",
    color: "#1971c2",
    gradient: "linear-gradient(135deg, #1971c2, #1864ab)",
    icon: "🎬",
    defaultRatio: "16:9"
  },
  meme: {
    id: "meme",
    label: "梗指南",
    color: "#be4bdb",
    gradient: "linear-gradient(135deg, #be4bdb, #9c36b5)",
    icon: "🚀",
    defaultRatio: "16:9"
  },
  product: {
    id: "product",
    label: "商品",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    icon: "📦",
    defaultRatio: "1:1"
  },
  user: {
    id: "user",
    label: "用户",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    icon: "👤",
    defaultRatio: "1:1"
  }
};
class yr {
  constructor() {
    Pe(this, "types", /* @__PURE__ */ new Map());
    Object.values(Fe).forEach((i) => {
      this.types.set(i.id, i);
    });
  }
  register(i) {
    this.types.set(i.id, i);
  }
  get(i) {
    return this.types.get(i);
  }
  getAll() {
    return Array.from(this.types.values());
  }
  has(i) {
    return this.types.has(i);
  }
}
const jr = new yr();
function q(a) {
  return jr.get(a.typeId) || Fe.ip;
}
var te = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function wr() {
  if (Se) return U;
  Se = 1;
  var a = ne, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(p, g, k) {
    var u, w = {}, h = null, E = null;
    k !== void 0 && (h = "" + k), g.key !== void 0 && (h = "" + g.key), g.ref !== void 0 && (E = g.ref);
    for (u in g) d.call(g, u) && !y.hasOwnProperty(u) && (w[u] = g[u]);
    if (p && p.defaultProps) for (u in g = p.defaultProps, g) w[u] === void 0 && (w[u] = g[u]);
    return { $$typeof: i, type: p, key: h, ref: E, props: w, _owner: f.current };
  }
  return U.Fragment = o, U.jsx = j, U.jsxs = j, U;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function kr() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ne, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), p = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), T = Symbol.iterator, K = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = T && e[T] || e[K];
      return typeof t == "function" ? t : null;
    }
    var z = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          n[s - 1] = arguments[s];
        De("error", e, n);
      }
    }
    function De(e, t, n) {
      {
        var s = z.ReactDebugCurrentFrame, x = s.getStackAddendum();
        x !== "" && (t += "%s", n = n.concat([x]));
        var m = n.map(function(c) {
          return String(c);
        });
        m.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var $e = !1, Ue = !1, Ye = !1, We = !1, Be = !1, se;
    se = Symbol.for("react.module.reference");
    function Le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === y || Be || e === f || e === k || e === u || We || e === E || $e || Ue || Ye || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === w || e.$$typeof === j || e.$$typeof === p || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Me(e, t, n) {
      var s = e.displayName;
      if (s)
        return s;
      var x = t.displayName || t.name || "";
      return x !== "" ? n + "(" + x + ")" : n;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case o:
          return "Portal";
        case y:
          return "Profiler";
        case f:
          return "StrictMode";
        case k:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var t = e;
            return oe(t) + ".Consumer";
          case j:
            var n = e;
            return oe(n._context) + ".Provider";
          case g:
            return Me(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : P(e.type) || "Memo";
          case h: {
            var x = e, m = x._payload, c = x._init;
            try {
              return P(c(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, D = 0, le, ce, de, ue, fe, pe, ge;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function Ve() {
      {
        if (D === 0) {
          le = console.log, ce = console.info, de = console.warn, ue = console.error, fe = console.group, pe = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function Je() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: le
            }),
            info: S({}, e, {
              value: ce
            }),
            warn: S({}, e, {
              value: de
            }),
            error: S({}, e, {
              value: ue
            }),
            group: S({}, e, {
              value: fe
            }),
            groupCollapsed: S({}, e, {
              value: pe
            }),
            groupEnd: S({}, e, {
              value: ge
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = z.ReactCurrentDispatcher, X;
    function B(e, t, n) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (x) {
            var s = x.stack.trim().match(/\n( *(at )?)/);
            X = s && s[1] || "";
          }
        return `
` + X + e;
      }
    }
    var H = !1, L;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      L = new qe();
    }
    function me(e, t) {
      if (!e || H)
        return "";
      {
        var n = L.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      H = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = G.current, G.current = null, Ve();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (N) {
              s = N;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (N) {
              s = N;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            s = N;
          }
          e();
        }
      } catch (N) {
        if (N && s && typeof N.stack == "string") {
          for (var l = N.stack.split(`
`), _ = s.stack.split(`
`), v = l.length - 1, b = _.length - 1; v >= 1 && b >= 0 && l[v] !== _[b]; )
            b--;
          for (; v >= 1 && b >= 0; v--, b--)
            if (l[v] !== _[b]) {
              if (v !== 1 || b !== 1)
                do
                  if (v--, b--, b < 0 || l[v] !== _[b]) {
                    var C = `
` + l[v].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, C), C;
                  }
                while (v >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        H = !1, G.current = m, Je(), Error.prepareStackTrace = x;
      }
      var A = e ? e.displayName || e.name : "", I = A ? B(A) : "";
      return typeof e == "function" && L.set(e, I), I;
    }
    function Ke(e, t, n) {
      return me(e, !1);
    }
    function Ge(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function M(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ge(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case k:
          return B("Suspense");
        case u:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Ke(e.render);
          case w:
            return M(e.type, t, n);
          case h: {
            var s = e, x = s._payload, m = s._init;
            try {
              return M(m(x), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, he = {}, ve = z.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var t = e._owner, n = M(e.type, e._source, t ? t.type : null);
        ve.setExtraStackFrame(n);
      } else
        ve.setExtraStackFrame(null);
    }
    function Xe(e, t, n, s, x) {
      {
        var m = Function.call.bind($);
        for (var c in e)
          if (m(e, c)) {
            var l = void 0;
            try {
              if (typeof e[c] != "function") {
                var _ = Error((s || "React class") + ": " + n + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              l = e[c](t, c, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              l = v;
            }
            l && !(l instanceof Error) && (V(x), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, c, typeof l), V(null)), l instanceof Error && !(l.message in he) && (he[l.message] = !0, V(x), R("Failed %s type: %s", n, l.message), V(null));
          }
      }
    }
    var He = Array.isArray;
    function Z(e) {
      return He(e);
    }
    function Ze(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Qe(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (Qe(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), be(e);
    }
    var je = z.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ke;
    function rr(e) {
      if ($.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if ($.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, t) {
      typeof e.ref == "string" && je.current;
    }
    function nr(e, t) {
      {
        var n = function() {
          we || (we = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ir(e, t) {
      {
        var n = function() {
          ke || (ke = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var sr = function(e, t, n, s, x, m, c) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: c,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function or(e, t, n, s, x) {
      {
        var m, c = {}, l = null, _ = null;
        n !== void 0 && (ye(n), l = "" + n), ar(t) && (ye(t.key), l = "" + t.key), rr(t) && (_ = t.ref, tr(t, x));
        for (m in t)
          $.call(t, m) && !er.hasOwnProperty(m) && (c[m] = t[m]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (m in v)
            c[m] === void 0 && (c[m] = v[m]);
        }
        if (l || _) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && nr(c, b), _ && ir(c, b);
        }
        return sr(e, l, _, x, s, je.current, c);
      }
    }
    var Q = z.ReactCurrentOwner, Ee = z.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var t = e._owner, n = M(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Re() {
      {
        if (Q.current) {
          var e = P(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lr(e) {
      return "";
    }
    var _e = {};
    function cr(e) {
      {
        var t = Re();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Ne(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = cr(t);
        if (_e[n])
          return;
        _e[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Q.current && (s = " It was passed a child from " + P(e._owner.type) + "."), F(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), F(null);
      }
    }
    function Ce(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            re(s) && Ne(s, t);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = Ae(e);
          if (typeof x == "function" && x !== e.entries)
            for (var m = x.call(e), c; !(c = m.next()).done; )
              re(c.value) && Ne(c.value, t);
        }
      }
    }
    function dr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          n = t.propTypes;
        else
          return;
        if (n) {
          var s = P(t);
          Xe(n, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !ee) {
          ee = !0;
          var x = P(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var s = t[n];
          if (s !== "children" && s !== "key") {
            F(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Te = {};
    function Oe(e, t, n, s, x, m) {
      {
        var c = Le(e);
        if (!c) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = lr();
          _ ? l += _ : l += Re();
          var v;
          e === null ? v = "null" : Z(e) ? v = "array" : e !== void 0 && e.$$typeof === i ? (v = "<" + (P(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, l);
        }
        var b = or(e, t, n, x, m);
        if (b == null)
          return b;
        if (c) {
          var C = t.children;
          if (C !== void 0)
            if (s)
              if (Z(C)) {
                for (var A = 0; A < C.length; A++)
                  Ce(C[A], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(C, e);
        }
        if ($.call(t, "key")) {
          var I = P(e), N = Object.keys(t).filter(function(hr) {
            return hr !== "key";
          }), ae = N.length > 0 ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[I + ae]) {
            var mr = N.length > 0 ? "{" + N.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, I, mr, I), Te[I + ae] = !0;
          }
        }
        return e === d ? ur(b) : dr(b), b;
      }
    }
    function fr(e, t, n) {
      return Oe(e, t, n, !0);
    }
    function pr(e, t, n) {
      return Oe(e, t, n, !1);
    }
    var gr = pr, xr = fr;
    Y.Fragment = d, Y.jsx = gr, Y.jsxs = xr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? te.exports = wr() : te.exports = kr();
var r = te.exports;
function Er(...a) {
  const i = [];
  for (const o of a)
    if (o) {
      if (typeof o == "string")
        i.push(o);
      else if (typeof o == "object")
        for (const [d, f] of Object.entries(o))
          f && i.push(d);
    }
  return i.join(" ");
}
const O = ({
  variant: a = "primary",
  size: i = "default",
  className: o,
  children: d,
  ...f
}) => /* @__PURE__ */ r.jsx(
  "button",
  {
    className: Er(
      i === "text" ? "btn-text" : "btn",
      a === "primary" ? "btn-primary" : "btn-secondary",
      o
    ),
    ...f,
    children: d
  }
), J = ({
  icon: a,
  title: i,
  onClick: o,
  ...d
}) => {
  const f = (y) => {
    y.preventDefault(), y.stopPropagation(), o == null || o(y);
  };
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "control-btn",
      title: i,
      onClick: f,
      ...d,
      children: a
    }
  );
}, Rr = (a) => /* @__PURE__ */ r.jsx("button", { type: "button", className: "close-btn", ...a, children: "✕" }), _r = ({
  expanded: a,
  onClick: i,
  ...o
}) => {
  const d = (f) => {
    f.stopPropagation(), i == null || i(f);
  };
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "expand-btn",
      onClick: d,
      ...o,
      children: a ? "收起" : "展开"
    }
  );
}, ze = ({
  gradient: a,
  icon: i,
  size: o = "normal"
}) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: "placeholder-img",
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: o === "large" ? 80 : 48,
      background: a,
      color: "rgba(255, 255, 255, 0.5)"
    },
    children: i || "?"
  }
), Fr = ({
  data: a,
  backTitle: i,
  backDescription: o,
  onDetail: d,
  onFlip: f
}) => {
  const [y, j] = ie(!1), p = q(a), g = a.imageRatio || "9:16", k = W(() => {
    j((E) => {
      const T = !E;
      return f == null || f(T), T;
    });
  }, [f]), u = W(() => {
    d == null || d(a);
  }, [d, a]), w = i || "背面展示", h = o || "点击查看详情";
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `ratio-card-wrapper layout-${g.replace(":", "-")} ${y ? "flipped" : ""}`,
      children: /* @__PURE__ */ r.jsxs("div", { className: "ratio-card-inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "ratio-card-front", children: [
          /* @__PURE__ */ r.jsxs("div", { className: `front-image-area ratio-${g.replace(":", "-")}`, children: [
            a.imageUrl ? /* @__PURE__ */ r.jsx(
              "img",
              {
                src: a.imageUrl,
                alt: a.name,
                style: { width: "100%", height: "100%", objectFit: "cover" }
              }
            ) : /* @__PURE__ */ r.jsx(
              ze,
              {
                gradient: p.gradient,
                icon: a.icon || p.icon
              }
            ),
            /* @__PURE__ */ r.jsx(
              "span",
              {
                className: "type-badge",
                style: { background: p.gradient },
                children: p.label
              }
            ),
            /* @__PURE__ */ r.jsxs("div", { className: "card-controls", children: [
              /* @__PURE__ */ r.jsx(J, { icon: "↻", title: "翻转", onClick: k }),
              /* @__PURE__ */ r.jsx(J, { icon: "⋮", title: "详情", onClick: u })
            ] }),
            g === "9:16" && /* @__PURE__ */ r.jsxs("div", { className: "content-overlay", children: [
              /* @__PURE__ */ r.jsx("h3", { className: "card-name", children: a.name }),
              /* @__PURE__ */ r.jsx("p", { className: "card-desc", children: a.description }),
              a.tags.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "card-tags", children: a.tags.map((E, T) => /* @__PURE__ */ r.jsx("span", { className: "card-tag", children: E }, T)) })
            ] })
          ] }),
          g !== "9:16" && /* @__PURE__ */ r.jsxs("div", { className: `content-area-below ratio-${g.replace(":", "-")}`, children: [
            /* @__PURE__ */ r.jsx(
              "span",
              {
                className: "content-type-badge",
                style: {
                  background: `${p.color}20`,
                  color: p.color
                },
                children: p.label
              }
            ),
            /* @__PURE__ */ r.jsx("h3", { className: "content-name", children: a.name }),
            /* @__PURE__ */ r.jsx("p", { className: "content-desc", children: a.description }),
            a.meta && Object.keys(a.meta).length > 0 && /* @__PURE__ */ r.jsx("div", { className: "content-meta", children: Object.entries(a.meta).map(([E, T], K) => /* @__PURE__ */ r.jsxs(ne.Fragment, { children: [
              K > 0 && /* @__PURE__ */ r.jsx("span", { children: "·" }),
              /* @__PURE__ */ r.jsx("span", { children: T })
            ] }, E)) }),
            a.tags.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "content-tags", children: a.tags.map((E, T) => /* @__PURE__ */ r.jsx("span", { className: "content-tag", children: E }, T)) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "ratio-card-back", children: /* @__PURE__ */ r.jsxs("div", { className: "back-image-area", children: [
          a.backImageUrl ? /* @__PURE__ */ r.jsx(
            "img",
            {
              src: a.backImageUrl,
              alt: `${a.name} - 背面`,
              style: { width: "100%", height: "100%", objectFit: "cover" }
            }
          ) : /* @__PURE__ */ r.jsx(
            ze,
            {
              gradient: p.gradient,
              icon: a.icon || p.icon,
              size: "large"
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "card-controls", children: [
            /* @__PURE__ */ r.jsx(J, { icon: "↺", title: "翻转", onClick: k }),
            /* @__PURE__ */ r.jsx(J, { icon: "⋮", title: "详情", onClick: u })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "scene-context-overlay", children: [
            /* @__PURE__ */ r.jsx("div", { className: "scene-context-title", children: w }),
            /* @__PURE__ */ r.jsx("div", { className: "scene-context-desc", children: h })
          ] })
        ] }) })
      ] })
    }
  );
}, Nr = `
.card-collapsed-wrapper {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  width: fit-content;
  min-width: 320px;
  overflow: hidden;
}

.card-collapsed-wrapper.expanded {
  border-color: var(--border-light);
}

.card-collapsed {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--bg-card);
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.card-collapsed:hover {
  background: var(--bg-card-hover);
}

.card-collapsed-wrapper.expanded .card-collapsed {
  border-bottom: 1px solid var(--border);
}

/* 图片区域 - 三种比例 */
.collapsed-image-area {
  flex-shrink: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
}

/* 竖图 9:16 */
.collapsed-image-area.ratio-9-16 {
  width: 45px;
  height: 68px;
}

/* 横图 16:9 */
.collapsed-image-area.ratio-16-9 {
  width: 68px;
  height: 38px;
}

/* 方图 1:1 */
.collapsed-image-area.ratio-1-1 {
  width: 48px;
  height: 48px;
}

.collapsed-image-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-mini {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.mini-info {
  flex: 1;
  min-width: 0;
}

.mini-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mini-type {
  font-size: 11px;
  color: var(--text-muted);
}

.mini-ratio-badge {
  font-size: 10px;
  padding: 2px 6px;
  background: var(--bg-dark);
  border-radius: 4px;
  color: var(--text-muted);
  margin-left: 8px;
}

.card-collapsed-expand {
  padding: 12px 14px;
  background: var(--bg-dark);
  display: none;
}

.card-collapsed-wrapper.expanded .card-collapsed-expand {
  display: block;
}

.expand-fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.expand-field {
  display: flex;
  gap: 8px;
  font-size: 13px;
  line-height: 1.5;
}

.expand-field-label {
  color: var(--text-muted);
  flex-shrink: 0;
}

.expand-field-value {
  color: var(--text-secondary);
}

.expand-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.expand-tag {
  padding: 2px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 11px;
  color: var(--text-secondary);
}

.expand-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
}
`;
if (typeof document < "u") {
  const a = "collapsed-card-styles";
  if (!document.getElementById(a)) {
    const i = document.createElement("style");
    i.id = a, i.textContent = Nr, document.head.appendChild(i);
  }
}
const Ar = ({
  data: a,
  fields: i = [],
  onQuote: o,
  onEdit: d
}) => {
  const [f, y] = ie(!1), j = q(a), p = a.imageRatio || "9:16", g = W(() => {
    y((h) => !h);
  }, []), k = W((h) => {
    h.stopPropagation(), o == null || o(a);
  }, [o, a]), u = W((h) => {
    h.stopPropagation(), d == null || d(a);
  }, [d, a]), w = {
    "9:16": "竖图",
    "16:9": "横图",
    "1:1": "方图"
  }[p];
  return /* @__PURE__ */ r.jsxs("div", { className: `card-collapsed-wrapper ${f ? "expanded" : ""}`, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "card-collapsed", onClick: g, children: [
      /* @__PURE__ */ r.jsx("div", { className: `collapsed-image-area ratio-${p.replace(":", "-")}`, children: a.imageUrl ? /* @__PURE__ */ r.jsx("img", { src: a.imageUrl, alt: a.name }) : /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "placeholder-mini",
          style: { background: j.gradient },
          children: a.icon || j.icon
        }
      ) }),
      /* @__PURE__ */ r.jsxs("div", { className: "mini-info", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "mini-title", children: [
          a.name,
          /* @__PURE__ */ r.jsx("span", { className: "mini-ratio-badge", children: w })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "mini-type", children: [
          j.label,
          " · ",
          a.tags.join("/")
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(_r, { expanded: f, onClick: g })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "card-collapsed-expand", children: [
      i.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "expand-fields", children: i.map((h, E) => /* @__PURE__ */ r.jsxs("div", { className: "expand-field", children: [
        /* @__PURE__ */ r.jsxs("span", { className: "expand-field-label", children: [
          h.label,
          "："
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "expand-field-value", children: h.value })
      ] }, E)) }),
      a.tags.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "expand-tags", children: a.tags.map((h, E) => /* @__PURE__ */ r.jsx("span", { className: "expand-tag", children: h }, E)) }),
      /* @__PURE__ */ r.jsxs("div", { className: "expand-actions", children: [
        /* @__PURE__ */ r.jsx(O, { variant: "secondary", size: "text", onClick: k, children: "引用" }),
        /* @__PURE__ */ r.jsx(O, { variant: "primary", size: "text", onClick: u, children: "编辑" })
      ] })
    ] })
  ] });
}, Cr = `
.chat-message {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  max-width: 600px;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #495057, #adb5bd);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-content {
  flex: 1;
}

.chat-sender {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.message-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-message);
}

.message-card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
}

.message-card-header .type-icon {
  width: 24px;
  height: 24px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.message-card-header .card-title {
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  color: var(--text-primary);
}

.message-card-header .card-actions {
  display: flex;
  gap: 6px;
}

.message-card-body {
  padding: 12px;
}

.message-card-layout {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.message-card-layout .layout-image {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.message-card-layout .layout-image.ratio-1-1 {
  width: 80px;
  height: 80px;
}

.message-card-layout .layout-image.ratio-9-16 {
  width: 80px;
  height: 142px;
}

.message-card-layout .layout-image.ratio-16-9 {
  width: 142px;
  height: 80px;
}

.message-card-layout .layout-text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
}

.message-card-bottom {
  font-size: 13px;
  line-height: 1.5;
  color: var(--text-secondary);
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.message-card-footer {
  display: flex;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--border);
}
`;
if (typeof document < "u") {
  const a = "message-card-styles";
  if (!document.getElementById(a)) {
    const i = document.createElement("style");
    i.id = a, i.textContent = Cr, document.head.appendChild(i);
  }
}
const Dr = ({
  data: a,
  ratio: i,
  avatar: o = "🤖",
  sender: d = "Scriptia AI",
  additionalText: f,
  onQuote: y,
  onView: j,
  onCollapse: p,
  onAttachImage: g,
  onSave: k
}) => {
  const u = q(a), h = `ratio-${(i || a.imageRatio || "1:1").replace(":", "-")}`;
  return /* @__PURE__ */ r.jsxs("div", { className: "chat-message", children: [
    /* @__PURE__ */ r.jsx("div", { className: "chat-avatar", children: o }),
    /* @__PURE__ */ r.jsxs("div", { className: "chat-content", children: [
      /* @__PURE__ */ r.jsx("div", { className: "chat-sender", children: d }),
      /* @__PURE__ */ r.jsxs("div", { className: "message-card", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "message-card-header", children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "type-icon",
              style: { background: u.gradient },
              children: a.icon || u.icon
            }
          ),
          /* @__PURE__ */ r.jsx("span", { className: "card-title", children: a.name }),
          /* @__PURE__ */ r.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ r.jsx(O, { variant: "secondary", size: "text", onClick: () => y == null ? void 0 : y(a), children: "引用" }),
            /* @__PURE__ */ r.jsx(O, { variant: "primary", size: "text", onClick: () => j == null ? void 0 : j(a), children: "查看" })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "message-card-body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "message-card-layout", children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: `layout-image ${h}`,
                style: {
                  background: u.gradient,
                  color: "rgba(255, 255, 255, 0.5)"
                },
                children: a.icon || u.icon
              }
            ),
            /* @__PURE__ */ r.jsx("div", { className: "layout-text", children: a.description })
          ] }),
          f && /* @__PURE__ */ r.jsx("div", { className: "message-card-bottom", children: f })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "message-card-footer", children: [
          /* @__PURE__ */ r.jsx(O, { variant: "secondary", size: "text", onClick: () => p == null ? void 0 : p(a), children: "折叠" }),
          /* @__PURE__ */ r.jsx(O, { variant: "secondary", size: "text", onClick: () => g == null ? void 0 : g(a), children: "配图" }),
          /* @__PURE__ */ r.jsx(O, { variant: "primary", size: "text", onClick: () => k == null ? void 0 : k(a), children: "保存" })
        ] })
      ] })
    ] })
  ] });
}, Tr = `
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--bg-dark);
  border-radius: var(--radius-3xl);
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: var(--shadow-modal);
  border: 1px solid var(--border);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(90deg, rgba(73, 80, 87, 0.08), transparent);
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
}

.modal-header .modal-actions {
  display: flex;
  gap: 8px;
}

.modal-body {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  padding: 20px;
}

/* Left: Image Area */
.modal-image-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-image-wrapper {
  width: 200px;
  height: 356px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border);
}

.prompt-box {
  padding: 10px;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.prompt-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 6px;
  display: block;
}

.prompt-box textarea {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 12px;
  resize: none;
  height: 60px;
  outline: none;
  font-family: inherit;
}

.generate-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background: #2d3436;
  border: none;
  border-radius: var(--radius-md);
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.generate-btn:hover {
  background: #636e72;
}

.generate-btn:active {
  transform: scale(0.98);
}

/* Right: Info Area */
.modal-info-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-section {
  padding: 14px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
}

.info-section.priority {
  background: linear-gradient(135deg, rgba(73, 80, 87, 0.08), rgba(108, 117, 125, 0.04));
  border-color: rgba(73, 80, 87, 0.2);
}

.info-section h4 {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-section .editable-field {
  padding: 8px;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: all 0.2s;
  cursor: text;
  color: var(--text-primary);
}

.info-section .editable-field:hover {
  border-color: var(--border);
  background: rgba(255, 255, 255, 0.02);
}

.info-section .editable-field:focus {
  border-color: #495057;
  background: rgba(73, 80, 87, 0.05);
  outline: none;
  box-shadow: 0 0 0 3px rgba(73, 80, 87, 0.1);
}

.info-section .field-name {
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}

.info-section .field-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.type-info-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--bg-dark);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.type-info-card .type-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.type-info-card .type-details h5 {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.type-info-card .type-details p {
  font-size: 12px;
  color: var(--text-muted);
}

.fields-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.field-box {
  padding: 10px;
  background: var(--bg-dark);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.field-box label {
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 4px;
  display: block;
}

.field-box .field-value {
  font-size: 13px;
  color: var(--text-primary);
}

.tags-area {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: #f1f3f4;
  border-radius: 16px;
  font-size: 12px;
  color: #5f6368;
}

.tag-item .tag-remove {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.tag-item .tag-remove:hover {
  background: #f1f3f4;
  color: #5f6368;
}

.tag-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: #f1f3f4;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  color: #5f6368;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-add:hover {
  background: #e8eaed;
  color: #3c4043;
}

.tag-add:active {
  transform: scale(0.95);
}
`;
if (typeof document < "u") {
  const a = "modal-styles";
  if (!document.getElementById(a)) {
    const i = document.createElement("style");
    i.id = a, i.textContent = Tr, document.head.appendChild(i);
  }
}
const $r = ({
  data: a,
  isOpen: i,
  onClose: o,
  onQuote: d,
  onSave: f,
  prompt: y = "",
  fields: j = []
}) => {
  const p = q(a), [g, k] = ie(y);
  return i ? /* @__PURE__ */ r.jsx("div", { className: "modal-overlay", onClick: o, children: /* @__PURE__ */ r.jsxs("div", { className: "modal-content", onClick: (u) => u.stopPropagation(), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ r.jsxs("h3", { children: [
        /* @__PURE__ */ r.jsx("span", { children: a.icon || p.icon }),
        " 卡片详情"
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "modal-actions", children: [
        /* @__PURE__ */ r.jsx(O, { variant: "secondary", onClick: () => d == null ? void 0 : d(a), children: "引用" }),
        /* @__PURE__ */ r.jsx(O, { variant: "primary", onClick: () => f == null ? void 0 : f(a), children: "保存" }),
        /* @__PURE__ */ r.jsx(Rr, { onClick: o })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "modal-body", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "modal-image-area", children: [
        /* @__PURE__ */ r.jsx("div", { className: "modal-image-wrapper", children: a.imageUrl ? /* @__PURE__ */ r.jsx(
          "img",
          {
            src: a.imageUrl,
            alt: a.name,
            style: { width: "100%", height: "100%", objectFit: "cover" }
          }
        ) : /* @__PURE__ */ r.jsx(
          "div",
          {
            style: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 64,
              background: p.gradient,
              color: "rgba(255, 255, 255, 0.5)"
            },
            children: a.icon || p.icon
          }
        ) }),
        /* @__PURE__ */ r.jsxs("div", { className: "prompt-box", children: [
          /* @__PURE__ */ r.jsx("label", { children: "💡 图片生成提示词" }),
          /* @__PURE__ */ r.jsx(
            "textarea",
            {
              placeholder: "输入提示词生成图片...",
              value: g,
              onChange: (u) => k(u.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("button", { className: "generate-btn", children: "生成图片" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "modal-info-area", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "info-section priority", children: [
          /* @__PURE__ */ r.jsx("h4", { children: "📝 优先展示" }),
          /* @__PURE__ */ r.jsx("div", { className: "editable-field field-name", contentEditable: !0, children: a.name }),
          /* @__PURE__ */ r.jsx("div", { className: "editable-field field-desc", style: { marginTop: 10 }, contentEditable: !0, children: a.description })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "type-info-card", children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "type-icon",
              style: { background: p.gradient },
              children: a.icon || p.icon
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "type-details", children: [
            /* @__PURE__ */ r.jsx("h5", { children: p.label }),
            /* @__PURE__ */ r.jsx("p", { children: "9:16 全身立绘" })
          ] })
        ] }),
        j.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "info-section", children: [
          /* @__PURE__ */ r.jsx("h4", { children: "自定义字段" }),
          /* @__PURE__ */ r.jsx("div", { className: "fields-grid", children: j.map((u, w) => /* @__PURE__ */ r.jsxs("div", { className: "field-box", children: [
            /* @__PURE__ */ r.jsx("label", { children: u.label }),
            /* @__PURE__ */ r.jsx("div", { className: "editable-field field-value", contentEditable: !0, children: u.value })
          ] }, w)) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "info-section", children: [
          /* @__PURE__ */ r.jsx("h4", { children: "标签" }),
          /* @__PURE__ */ r.jsxs("div", { className: "tags-area", children: [
            a.tags.map((u, w) => /* @__PURE__ */ r.jsxs("span", { className: "tag-item", children: [
              u,
              /* @__PURE__ */ r.jsx("button", { className: "tag-remove", children: "×" })
            ] }, w)),
            /* @__PURE__ */ r.jsx("button", { className: "tag-add", children: "+" })
          ] })
        ] })
      ] })
    ] })
  ] }) }) : null;
}, Or = `
.input-area {
  background: var(--bg-dark);
  border-radius: var(--radius-xl);
  padding: 16px;
  border: 1px solid var(--border);
  margin-bottom: 24px;
}

.input-placeholder {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 12px;
}

.reference-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f1f3f4;
  border-radius: 20px;
  font-size: 12px;
  color: #5f6368;
  margin-right: 8px;
  margin-bottom: 8px;
}

.reference-tag .remove-btn {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  margin-left: 4px;
  transition: all 0.2s ease;
  border: none;
  color: #9ca3af;
}

.reference-tag .remove-btn:hover {
  background: #f1f3f4;
  color: #5f6368;
}
`;
if (typeof document < "u") {
  const a = "reference-tag-styles";
  if (!document.getElementById(a)) {
    const i = document.createElement("style");
    i.id = a, i.textContent = Or, document.head.appendChild(i);
  }
}
const Pr = ({
  icon: a,
  name: i,
  onRemove: o
}) => /* @__PURE__ */ r.jsxs("span", { className: "reference-tag", children: [
  /* @__PURE__ */ r.jsx("span", { children: a }),
  i,
  /* @__PURE__ */ r.jsx("button", { className: "remove-btn", onClick: o, children: "×" })
] }), Ur = ({
  placeholder: a = "输入消息或引用卡片...",
  tags: i = [],
  onRemoveTag: o
}) => /* @__PURE__ */ r.jsxs("div", { className: "input-area", children: [
  /* @__PURE__ */ r.jsx("p", { className: "input-placeholder", children: a }),
  /* @__PURE__ */ r.jsx("div", { children: i.map((d, f) => /* @__PURE__ */ r.jsx(
    Pr,
    {
      icon: d.icon,
      name: d.name,
      onRemove: () => o == null ? void 0 : o(f)
    },
    f
  )) })
] });
export {
  Fe as BUILTIN_TYPES,
  O as Button,
  $r as CardModal,
  Rr as CloseButton,
  Ar as CollapsedCard,
  J as ControlButton,
  _r as ExpandButton,
  Ur as InputReferenceArea,
  Dr as MessageCard,
  zr as RATIO_CONFIGS,
  Fr as RatioCard,
  Pr as ReferenceTag,
  Er as classNames,
  q as getCardTypeConfig,
  jr as typeRegistry
};
