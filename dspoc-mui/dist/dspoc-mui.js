import { jsx as Te, jsxs as Un } from "react/jsx-runtime";
import * as O from "react";
import tt, { forwardRef as Ko, useContext as Ho, Children as Xo, isValidElement as xt, cloneElement as _t } from "react";
function Ce(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function k() {
  return k = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, k.apply(this, arguments);
}
function Jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Me(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var fr = { exports: {} }, ht = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function Zo() {
  if (Yr)
    return U;
  Yr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var $ = h.$$typeof;
      switch ($) {
        case t:
          switch (h = h.type, h) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case m:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case l:
                case g:
                case v:
                case s:
                  return h;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function S(h) {
    return C(h) === u;
  }
  return U.AsyncMode = c, U.ConcurrentMode = u, U.ContextConsumer = a, U.ContextProvider = s, U.Element = t, U.ForwardRef = l, U.Fragment = n, U.Lazy = g, U.Memo = v, U.Portal = r, U.Profiler = i, U.StrictMode = o, U.Suspense = m, U.isAsyncMode = function(h) {
    return S(h) || C(h) === c;
  }, U.isConcurrentMode = S, U.isContextConsumer = function(h) {
    return C(h) === a;
  }, U.isContextProvider = function(h) {
    return C(h) === s;
  }, U.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, U.isForwardRef = function(h) {
    return C(h) === l;
  }, U.isFragment = function(h) {
    return C(h) === n;
  }, U.isLazy = function(h) {
    return C(h) === g;
  }, U.isMemo = function(h) {
    return C(h) === v;
  }, U.isPortal = function(h) {
    return C(h) === r;
  }, U.isProfiler = function(h) {
    return C(h) === i;
  }, U.isStrictMode = function(h) {
    return C(h) === o;
  }, U.isSuspense = function(h) {
    return C(h) === m;
  }, U.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === u || h === i || h === o || h === m || h === p || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === v || h.$$typeof === s || h.$$typeof === a || h.$$typeof === l || h.$$typeof === d || h.$$typeof === x || h.$$typeof === P || h.$$typeof === f);
  }, U.typeOf = C, U;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function Qo() {
  return qr || (qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, d = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function C(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === u || E === i || E === o || E === m || E === p || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === v || E.$$typeof === s || E.$$typeof === a || E.$$typeof === l || E.$$typeof === d || E.$$typeof === x || E.$$typeof === P || E.$$typeof === f);
    }
    function S(E) {
      if (typeof E == "object" && E !== null) {
        var pe = E.$$typeof;
        switch (pe) {
          case t:
            var T = E.type;
            switch (T) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case m:
                return T;
              default:
                var ke = T && T.$$typeof;
                switch (ke) {
                  case a:
                  case l:
                  case g:
                  case v:
                  case s:
                    return ke;
                  default:
                    return pe;
                }
            }
          case r:
            return pe;
        }
      }
    }
    var h = c, $ = u, w = a, Z = s, re = t, K = l, W = n, H = g, ie = v, Q = r, fe = i, X = o, de = m, ae = !1;
    function Ne(E) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(E) || S(E) === c;
    }
    function b(E) {
      return S(E) === u;
    }
    function _(E) {
      return S(E) === a;
    }
    function D(E) {
      return S(E) === s;
    }
    function M(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function R(E) {
      return S(E) === l;
    }
    function z(E) {
      return S(E) === n;
    }
    function N(E) {
      return S(E) === g;
    }
    function j(E) {
      return S(E) === v;
    }
    function V(E) {
      return S(E) === r;
    }
    function A(E) {
      return S(E) === i;
    }
    function L(E) {
      return S(E) === o;
    }
    function ce(E) {
      return S(E) === m;
    }
    Y.AsyncMode = h, Y.ConcurrentMode = $, Y.ContextConsumer = w, Y.ContextProvider = Z, Y.Element = re, Y.ForwardRef = K, Y.Fragment = W, Y.Lazy = H, Y.Memo = ie, Y.Portal = Q, Y.Profiler = fe, Y.StrictMode = X, Y.Suspense = de, Y.isAsyncMode = Ne, Y.isConcurrentMode = b, Y.isContextConsumer = _, Y.isContextProvider = D, Y.isElement = M, Y.isForwardRef = R, Y.isFragment = z, Y.isLazy = N, Y.isMemo = j, Y.isPortal = V, Y.isProfiler = A, Y.isStrictMode = L, Y.isSuspense = ce, Y.isValidElementType = C, Y.typeOf = S;
  }()), Y;
}
var Gr;
function xr() {
  return Gr || (Gr = 1, process.env.NODE_ENV === "production" ? ht.exports = Zo() : ht.exports = Qo()), ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var er, Kr;
function ei() {
  if (Kr)
    return er;
  Kr = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(s).map(function(l) {
        return s[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return er = o() ? Object.assign : function(i, s) {
    for (var a, c = n(i), u, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var m in a)
        t.call(a, m) && (c[m] = a[m]);
      if (e) {
        u = e(a);
        for (var p = 0; p < u.length; p++)
          r.call(a, u[p]) && (c[u[p]] = a[u[p]]);
      }
    }
    return c;
  }, er;
}
var tr, Hr;
function _r() {
  if (Hr)
    return tr;
  Hr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tr = e, tr;
}
var rr, Xr;
function Yn() {
  return Xr || (Xr = 1, rr = Function.call.bind(Object.prototype.hasOwnProperty)), rr;
}
var nr, Jr;
function ti() {
  if (Jr)
    return nr;
  Jr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = _r(), r = {}, n = Yn();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (n(i, l)) {
          var m;
          try {
            if (typeof i[l] != "function") {
              var p = Error(
                (c || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            m = i[l](s, l, c, a, null, t);
          } catch (g) {
            m = g;
          }
          if (m && !(m instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + a + " type: " + m.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, nr = o, nr;
}
var or, Zr;
function ri() {
  if (Zr)
    return or;
  Zr = 1;
  var e = xr(), t = ei(), r = _r(), n = Yn(), o = ti(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return or = function(a, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function m(b) {
      var _ = b && (u && b[u] || b[l]);
      if (typeof _ == "function")
        return _;
    }
    var p = "<<anonymous>>", v = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: P(),
      arrayOf: C,
      element: S(),
      elementType: h(),
      instanceOf: $,
      node: K(),
      objectOf: Z,
      oneOf: w,
      oneOfType: re,
      shape: H,
      exact: ie
    };
    function g(b, _) {
      return b === _ ? b !== 0 || 1 / b === 1 / _ : b !== b && _ !== _;
    }
    function f(b, _) {
      this.message = b, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function d(b) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, D = 0;
      function M(z, N, j, V, A, L, ce) {
        if (V = V || p, L = L || j, ce !== r) {
          if (c) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = V + ":" + j;
            !_[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[pe] = !0, D++);
          }
        }
        return N[j] == null ? z ? N[j] === null ? new f("The " + A + " `" + L + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new f("The " + A + " `" + L + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : b(N, j, V, A, L);
      }
      var R = M.bind(null, !1);
      return R.isRequired = M.bind(null, !0), R;
    }
    function x(b) {
      function _(D, M, R, z, N, j) {
        var V = D[M], A = X(V);
        if (A !== b) {
          var L = de(V);
          return new f(
            "Invalid " + z + " `" + N + "` of type " + ("`" + L + "` supplied to `" + R + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return d(_);
    }
    function P() {
      return d(s);
    }
    function C(b) {
      function _(D, M, R, z, N) {
        if (typeof b != "function")
          return new f("Property `" + N + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
        var j = D[M];
        if (!Array.isArray(j)) {
          var V = X(j);
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected an array."));
        }
        for (var A = 0; A < j.length; A++) {
          var L = b(j, A, R, z, N + "[" + A + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return d(_);
    }
    function S() {
      function b(_, D, M, R, z) {
        var N = _[D];
        if (!a(N)) {
          var j = X(N);
          return new f("Invalid " + R + " `" + z + "` of type " + ("`" + j + "` supplied to `" + M + "`, expected a single ReactElement."));
        }
        return null;
      }
      return d(b);
    }
    function h() {
      function b(_, D, M, R, z) {
        var N = _[D];
        if (!e.isValidElementType(N)) {
          var j = X(N);
          return new f("Invalid " + R + " `" + z + "` of type " + ("`" + j + "` supplied to `" + M + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return d(b);
    }
    function $(b) {
      function _(D, M, R, z, N) {
        if (!(D[M] instanceof b)) {
          var j = b.name || p, V = Ne(D[M]);
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return d(_);
    }
    function w(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(D, M, R, z, N) {
        for (var j = D[M], V = 0; V < b.length; V++)
          if (g(j, b[V]))
            return null;
        var A = JSON.stringify(b, function(ce, E) {
          var pe = de(E);
          return pe === "symbol" ? String(E) : E;
        });
        return new f("Invalid " + z + " `" + N + "` of value `" + String(j) + "` " + ("supplied to `" + R + "`, expected one of " + A + "."));
      }
      return d(_);
    }
    function Z(b) {
      function _(D, M, R, z, N) {
        if (typeof b != "function")
          return new f("Property `" + N + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
        var j = D[M], V = X(j);
        if (V !== "object")
          return new f("Invalid " + z + " `" + N + "` of type " + ("`" + V + "` supplied to `" + R + "`, expected an object."));
        for (var A in j)
          if (n(j, A)) {
            var L = b(j, A, R, z, N + "." + A, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return d(_);
    }
    function re(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < b.length; _++) {
        var D = b[_];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(D) + " at index " + _ + "."
          ), s;
      }
      function M(R, z, N, j, V) {
        for (var A = [], L = 0; L < b.length; L++) {
          var ce = b[L], E = ce(R, z, N, j, V, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && A.push(E.data.expectedType);
        }
        var pe = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new f("Invalid " + j + " `" + V + "` supplied to " + ("`" + N + "`" + pe + "."));
      }
      return d(M);
    }
    function K() {
      function b(_, D, M, R, z) {
        return Q(_[D]) ? null : new f("Invalid " + R + " `" + z + "` supplied to " + ("`" + M + "`, expected a ReactNode."));
      }
      return d(b);
    }
    function W(b, _, D, M, R) {
      return new f(
        (b || "React class") + ": " + _ + " type `" + D + "." + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + R + "`."
      );
    }
    function H(b) {
      function _(D, M, R, z, N) {
        var j = D[M], V = X(j);
        if (V !== "object")
          return new f("Invalid " + z + " `" + N + "` of type `" + V + "` " + ("supplied to `" + R + "`, expected `object`."));
        for (var A in b) {
          var L = b[A];
          if (typeof L != "function")
            return W(R, z, N, A, de(L));
          var ce = L(j, A, R, z, N + "." + A, r);
          if (ce)
            return ce;
        }
        return null;
      }
      return d(_);
    }
    function ie(b) {
      function _(D, M, R, z, N) {
        var j = D[M], V = X(j);
        if (V !== "object")
          return new f("Invalid " + z + " `" + N + "` of type `" + V + "` " + ("supplied to `" + R + "`, expected `object`."));
        var A = t({}, D[M], b);
        for (var L in A) {
          var ce = b[L];
          if (n(b, L) && typeof ce != "function")
            return W(R, z, N, L, de(ce));
          if (!ce)
            return new f(
              "Invalid " + z + " `" + N + "` key `" + L + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(D[M], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var E = ce(j, L, R, z, N + "." + L, r);
          if (E)
            return E;
        }
        return null;
      }
      return d(_);
    }
    function Q(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(Q);
          if (b === null || a(b))
            return !0;
          var _ = m(b);
          if (_) {
            var D = _.call(b), M;
            if (_ !== b.entries) {
              for (; !(M = D.next()).done; )
                if (!Q(M.value))
                  return !1;
            } else
              for (; !(M = D.next()).done; ) {
                var R = M.value;
                if (R && !Q(R[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function fe(b, _) {
      return b === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function X(b) {
      var _ = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : fe(_, b) ? "symbol" : _;
    }
    function de(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var _ = X(b);
      if (_ === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function ae(b) {
      var _ = de(b);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Ne(b) {
      return !b.constructor || !b.constructor.name ? p : b.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, or;
}
var ir, Qr;
function ni() {
  if (Qr)
    return ir;
  Qr = 1;
  var e = _r();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ir = function() {
    function n(s, a, c, u, l, m) {
      if (m !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, ir;
}
if (process.env.NODE_ENV !== "production") {
  var oi = xr(), ii = !0;
  fr.exports = ri()(oi.isElement, ii);
} else
  fr.exports = ni()();
var si = fr.exports;
const y = /* @__PURE__ */ Jo(si);
function qn(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = qn(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = qn(e)) && (n && (n += " "), n += t);
  return n;
}
function Sr(e, t) {
  const r = k({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = k({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = k({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Sr(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Gn(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
var ne = {}, Kn = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Kn);
var Hn = Kn.exports;
function nt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" })), ci = /* @__PURE__ */ Me(ai);
function ui(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ui
}, Symbol.toStringTag, { value: "Module" })), fi = /* @__PURE__ */ Me(li);
var Xn = Hn;
Object.defineProperty(ne, "__esModule", {
  value: !0
});
var yt = ne.alpha = eo;
ne.blend = Oi;
ne.colorChannel = void 0;
var di = ne.darken = Tr;
ne.decomposeColor = _e;
ne.emphasize = to;
var en = ne.getContrastRatio = bi;
ne.getLuminance = Rt;
ne.hexToRgb = Jn;
ne.hslToRgb = Qn;
var pi = ne.lighten = Cr;
ne.private_safeAlpha = Ei;
ne.private_safeColorChannel = void 0;
ne.private_safeDarken = xi;
ne.private_safeEmphasize = Si;
ne.private_safeLighten = _i;
ne.recomposeColor = He;
ne.rgbToHex = gi;
var tn = Xn(ci), mi = Xn(fi);
function Or(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, mi.default)(e, t, r);
}
function Jn(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function hi(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function _e(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _e(Jn(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, tn.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, tn.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Zn = (e) => {
  const t = _e(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
ne.colorChannel = Zn;
const yi = (e, t) => {
  try {
    return Zn(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ne.private_safeColorChannel = yi;
function He(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function gi(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = _e(e);
  return `#${t.map((r, n) => hi(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Qn(e) {
  e = _e(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (u, l = (u + r / 30) % 12) => o - i * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", c.push(t[3])), He({
    type: a,
    values: c
  });
}
function Rt(e) {
  e = _e(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _e(Qn(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function bi(e, t) {
  const r = Rt(e), n = Rt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function eo(e, t) {
  return e = _e(e), t = Or(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, He(e);
}
function Ei(e, t, r) {
  try {
    return eo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Tr(e, t) {
  if (e = _e(e), t = Or(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return He(e);
}
function xi(e, t, r) {
  try {
    return Tr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Cr(e, t) {
  if (e = _e(e), t = Or(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return He(e);
}
function _i(e, t, r) {
  try {
    return Cr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function to(e, t = 0.15) {
  return Rt(e) > 0.5 ? Tr(e, t) : Cr(e, t);
}
function Si(e, t, r) {
  try {
    return to(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Oi(e, t, r, n = 1) {
  const o = (c, u) => Math.round((c ** (1 / n) * (1 - r) + u ** (1 / n) * r) ** n), i = _e(e), s = _e(t), a = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return He({
    type: "rgb",
    values: a
  });
}
var ct = {}, sr = { exports: {} }, rn;
function Ti() {
  return rn || (rn = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(sr)), sr.exports;
}
var ar = { exports: {} }, nn;
function Ci() {
  return nn || (nn = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {}, i = Object.keys(r), s, a;
      for (a = 0; a < i.length; a++)
        s = i[a], !(n.indexOf(s) >= 0) && (o[s] = r[s]);
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ar)), ar.exports;
}
function ro(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var wi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ri = /* @__PURE__ */ ro(
  function(e) {
    return wi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function $i(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Pi(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ni = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Pi(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = $i(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), le = "-ms-", $t = "-moz-", F = "-webkit-", wr = "comm", Rr = "rule", $r = "decl", ki = "@import", no = "@keyframes", Ai = "@layer", Mi = Math.abs, kt = String.fromCharCode, ji = Object.assign;
function Ii(e, t) {
  return ue(e, 0) ^ 45 ? (((t << 2 ^ ue(e, 0)) << 2 ^ ue(e, 1)) << 2 ^ ue(e, 2)) << 2 ^ ue(e, 3) : 0;
}
function oo(e) {
  return e.trim();
}
function Di(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function B(e, t, r) {
  return e.replace(t, r);
}
function dr(e, t) {
  return e.indexOf(t);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function ot(e, t, r) {
  return e.slice(t, r);
}
function we(e) {
  return e.length;
}
function Pr(e) {
  return e.length;
}
function gt(e, t) {
  return t.push(e), e;
}
function zi(e, t) {
  return e.map(t).join("");
}
var At = 1, Ge = 1, io = 0, he = 0, se = 0, Xe = "";
function Mt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: At, column: Ge, length: s, return: "" };
}
function Qe(e, t) {
  return ji(Mt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vi() {
  return se;
}
function Li() {
  return se = he > 0 ? ue(Xe, --he) : 0, Ge--, se === 10 && (Ge = 1, At--), se;
}
function ge() {
  return se = he < io ? ue(Xe, he++) : 0, Ge++, se === 10 && (Ge = 1, At++), se;
}
function Re() {
  return ue(Xe, he);
}
function St() {
  return he;
}
function ut(e, t) {
  return ot(Xe, e, t);
}
function it(e) {
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
function so(e) {
  return At = Ge = 1, io = we(Xe = e), he = 0, [];
}
function ao(e) {
  return Xe = "", e;
}
function Ot(e) {
  return oo(ut(he - 1, pr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fi(e) {
  for (; (se = Re()) && se < 33; )
    ge();
  return it(e) > 2 || it(se) > 3 ? "" : " ";
}
function Bi(e, t) {
  for (; --t && ge() && !(se < 48 || se > 102 || se > 57 && se < 65 || se > 70 && se < 97); )
    ;
  return ut(e, St() + (t < 6 && Re() == 32 && ge() == 32));
}
function pr(e) {
  for (; ge(); )
    switch (se) {
      case e:
        return he;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pr(se);
        break;
      case 40:
        e === 41 && pr(e);
        break;
      case 92:
        ge();
        break;
    }
  return he;
}
function Wi(e, t) {
  for (; ge() && e + se !== 57; )
    if (e + se === 84 && Re() === 47)
      break;
  return "/*" + ut(t, he - 1) + "*" + kt(e === 47 ? e : ge());
}
function Ui(e) {
  for (; !it(Re()); )
    ge();
  return ut(e, he);
}
function Yi(e) {
  return ao(Tt("", null, null, null, [""], e = so(e), 0, [0], e));
}
function Tt(e, t, r, n, o, i, s, a, c) {
  for (var u = 0, l = 0, m = s, p = 0, v = 0, g = 0, f = 1, d = 1, x = 1, P = 0, C = "", S = o, h = i, $ = n, w = C; d; )
    switch (g = P, P = ge()) {
      case 40:
        if (g != 108 && ue(w, m - 1) == 58) {
          dr(w += B(Ot(P), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Ot(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Fi(g);
        break;
      case 92:
        w += Bi(St() - 1, 7);
        continue;
      case 47:
        switch (Re()) {
          case 42:
          case 47:
            gt(qi(Wi(ge(), St()), t, r), c);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * f:
        a[u++] = we(w) * x;
      case 125 * f:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            d = 0;
          case 59 + l:
            x == -1 && (w = B(w, /\f/g, "")), v > 0 && we(w) - m && gt(v > 32 ? sn(w + ";", n, r, m - 1) : sn(B(w, " ", "") + ";", n, r, m - 2), c);
            break;
          case 59:
            w += ";";
          default:
            if (gt($ = on(w, t, r, u, l, o, a, C, S = [], h = [], m), i), P === 123)
              if (l === 0)
                Tt(w, t, $, $, S, i, m, a, h);
              else
                switch (p === 99 && ue(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Tt(e, $, $, n && gt(on(e, $, $, 0, 0, o, a, C, o, S = [], m), h), o, h, m, a, n ? S : h);
                    break;
                  default:
                    Tt(w, $, $, $, [""], h, 0, a, h);
                }
        }
        u = l = v = 0, f = x = 1, C = w = "", m = s;
        break;
      case 58:
        m = 1 + we(w), v = g;
      default:
        if (f < 1) {
          if (P == 123)
            --f;
          else if (P == 125 && f++ == 0 && Li() == 125)
            continue;
        }
        switch (w += kt(P), P * f) {
          case 38:
            x = l > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            a[u++] = (we(w) - 1) * x, x = 1;
            break;
          case 64:
            Re() === 45 && (w += Ot(ge())), p = Re(), l = m = we(C = w += Ui(St())), P++;
            break;
          case 45:
            g === 45 && we(w) == 2 && (f = 0);
        }
    }
  return i;
}
function on(e, t, r, n, o, i, s, a, c, u, l) {
  for (var m = o - 1, p = o === 0 ? i : [""], v = Pr(p), g = 0, f = 0, d = 0; g < n; ++g)
    for (var x = 0, P = ot(e, m + 1, m = Mi(f = s[g])), C = e; x < v; ++x)
      (C = oo(f > 0 ? p[x] + " " + P : B(P, /&\f/g, p[x]))) && (c[d++] = C);
  return Mt(e, t, r, o === 0 ? Rr : a, c, u, l);
}
function qi(e, t, r) {
  return Mt(e, t, r, wr, kt(Vi()), ot(e, 2, -2), 0);
}
function sn(e, t, r, n) {
  return Mt(e, t, r, $r, ot(e, 0, n), ot(e, n + 1, -1), n);
}
function Ye(e, t) {
  for (var r = "", n = Pr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Gi(e, t, r, n) {
  switch (e.type) {
    case Ai:
      if (e.children.length)
        break;
    case ki:
    case $r:
      return e.return = e.return || e.value;
    case wr:
      return "";
    case no:
      return e.return = e.value + "{" + Ye(e.children, n) + "}";
    case Rr:
      e.value = e.props.join(",");
  }
  return we(r = Ye(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ki(e) {
  var t = Pr(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function Hi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Xi = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Re(), o === 38 && i === 12 && (r[n] = 1), !it(i); )
    ge();
  return ut(t, he);
}, Ji = function(t, r) {
  var n = -1, o = 44;
  do
    switch (it(o)) {
      case 0:
        o === 38 && Re() === 12 && (r[n] = 1), t[n] += Xi(he - 1, r, n);
        break;
      case 2:
        t[n] += Ot(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Re() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += kt(o);
    }
  while (o = ge());
  return t;
}, Zi = function(t, r) {
  return ao(Ji(so(t), r));
}, an = /* @__PURE__ */ new WeakMap(), Qi = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !an.get(n)) && !o) {
      an.set(t, !0);
      for (var i = [], s = Zi(r, i), a = n.props, c = 0, u = 0; c < s.length; c++)
        for (var l = 0; l < a.length; l++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, a[l]) : a[l] + " " + s[c];
    }
  }
}, es = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, ts = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", rs = function(t) {
  return t.type === "comm" && t.children.indexOf(ts) > -1;
}, ns = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, a = s ? r.parent.children : (
          // global rule at the root level
          o
        ), c = a.length - 1; c >= 0; c--) {
          var u = a[c];
          if (u.line < r.line)
            break;
          if (u.column < r.column) {
            if (rs(u))
              return;
            break;
          }
        }
        i.forEach(function(l) {
          console.error('The pseudo class "' + l + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + l.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, co = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, os = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!co(r[n]))
      return !0;
  return !1;
}, cn = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, is = function(t, r, n) {
  co(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), cn(t)) : os(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), cn(t)));
};
function uo(e, t) {
  switch (Ii(e, t)) {
    case 5103:
      return F + "print-" + e + e;
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
      return F + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return F + e + $t + e + le + e + e;
    case 6828:
    case 4268:
      return F + e + le + e + e;
    case 6165:
      return F + e + le + "flex-" + e + e;
    case 5187:
      return F + e + B(e, /(\w+).+(:[^]+)/, F + "box-$1$2" + le + "flex-$1$2") + e;
    case 5443:
      return F + e + le + "flex-item-" + B(e, /flex-|-self/, "") + e;
    case 4675:
      return F + e + le + "flex-line-pack" + B(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return F + e + le + B(e, "shrink", "negative") + e;
    case 5292:
      return F + e + le + B(e, "basis", "preferred-size") + e;
    case 6060:
      return F + "box-" + B(e, "-grow", "") + F + e + le + B(e, "grow", "positive") + e;
    case 4554:
      return F + B(e, /([^-])(transform)/g, "$1" + F + "$2") + e;
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, F + "$1$`$1");
    case 4968:
      return B(B(e, /(.+:)(flex-)?(.*)/, F + "box-pack:$3" + le + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + F + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, F + "$1$2") + e;
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
      if (we(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45)
              break;
          case 102:
            return B(e, /(.+:)(.+)-([^]+)/, "$1" + F + "$2-$3$1" + $t + (ue(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~dr(e, "stretch") ? uo(B(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ue(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ue(e, we(e) - 3 - (~dr(e, "!important") && 10))) {
        case 107:
          return B(e, ":", ":" + F) + e;
        case 101:
          return B(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + F + (ue(e, 14) === 45 ? "inline-" : "") + "box$3$1" + F + "$2$3$1" + le + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return F + e + le + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return F + e + le + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return F + e + le + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return F + e + le + e + e;
  }
  return e;
}
var ss = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case $r:
        t.return = uo(t.value, t.length);
        break;
      case no:
        return Ye([Qe(t, {
          value: B(t.value, "@", "@" + F)
        })], o);
      case Rr:
        if (t.length)
          return zi(t.props, function(i) {
            switch (Di(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ye([Qe(t, {
                  props: [B(i, /:(read-\w+)/, ":" + $t + "$1")]
                })], o);
              case "::placeholder":
                return Ye([Qe(t, {
                  props: [B(i, /:(plac\w+)/, ":" + F + "input-$1")]
                }), Qe(t, {
                  props: [B(i, /:(plac\w+)/, ":" + $t + "$1")]
                }), Qe(t, {
                  props: [B(i, /:(plac\w+)/, le + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, as = [ss], lo = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(f) {
      var d = f.getAttribute("data-emotion");
      d.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || as;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(f) {
      for (var d = f.getAttribute("data-emotion").split(" "), x = 1; x < d.length; x++)
        i[d[x]] = !0;
      a.push(f);
    }
  );
  var c, u = [Qi, es];
  process.env.NODE_ENV !== "production" && u.push(ns({
    get compat() {
      return g.compat;
    }
  }), is);
  {
    var l, m = [Gi, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? l.insert(f.return) : f.value && f.type !== wr && l.insert(f.value + "{}"));
    } : Hi(function(f) {
      l.insert(f);
    })], p = Ki(u.concat(o, m)), v = function(d) {
      return Ye(Yi(d), p);
    };
    c = function(d, x, P, C) {
      l = P, process.env.NODE_ENV !== "production" && x.map !== void 0 && (l = {
        insert: function(h) {
          P.insert(h + x.map);
        }
      }), v(d ? d + "{" + x.styles + "}" : x.styles), C && (g.inserted[x.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new Ni({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(a), g;
}, fo = xr(), cs = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, us = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, po = {};
po[fo.ForwardRef] = cs;
po[fo.Memo] = us;
var ls = !0;
function Nr(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var jt = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ls === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, It = function(t, r, n) {
  jt(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function fs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ds = {
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
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, un = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ps = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", ms = /[A-Z]|^ms/g, mo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, kr = function(t) {
  return t.charCodeAt(1) === 45;
}, ln = function(t) {
  return t != null && typeof t != "boolean";
}, cr = /* @__PURE__ */ ro(function(e) {
  return kr(e) ? e : e.replace(ms, "-$&").toLowerCase();
}), Pt = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(mo, function(n, o, i) {
          return Oe = {
            name: o,
            styles: i,
            next: Oe
          }, o;
        });
  }
  return ds[t] !== 1 && !kr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var hs = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ys = ["normal", "none", "initial", "inherit", "unset"], gs = Pt, bs = /^-ms-/, vs = /-(.)/g, fn = {};
  Pt = function(t, r) {
    if (t === "content" && (typeof r != "string" || ys.indexOf(r) === -1 && !hs.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = gs(t, r);
    return n !== "" && !kr(t) && t.indexOf("-") !== -1 && fn[t] === void 0 && (fn[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(bs, "ms-").replace(vs, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var ho = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function st(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ho);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return Oe = {
          name: r.name,
          styles: r.styles,
          next: Oe
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Oe = {
              name: n.name,
              styles: n.styles,
              next: Oe
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Es(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = Oe, s = r(e);
        return Oe = i, st(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], c = r.replace(mo, function(l, m, p) {
          var v = "animation" + a.length;
          return a.push("const " + v + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var u = t[r];
  return u !== void 0 ? u : r;
}
function Es(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += st(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : ln(s) && (n += cr(i) + ":" + Pt(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ho);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            ln(s[a]) && (n += cr(i) + ":" + Pt(i, s[a]) + ";");
        else {
          var c = st(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += cr(i) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(ps), n += i + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var dn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, yo;
process.env.NODE_ENV !== "production" && (yo = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Oe, Ke = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  Oe = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += st(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(un), i += s[0]);
  for (var a = 1; a < t.length; a++)
    i += st(n, r, t[a]), o && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(un), i += s[a]);
  var c;
  process.env.NODE_ENV !== "production" && (i = i.replace(yo, function(p) {
    return c = p, "";
  })), dn.lastIndex = 0;
  for (var u = "", l; (l = dn.exec(i)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    l[1];
  var m = fs(i) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: c,
    next: Oe,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: Oe
  };
}, xs = function(t) {
  return t();
}, go = O.useInsertionEffect ? O.useInsertionEffect : !1, Ar = go || xs, pn = go || O.useLayoutEffect, _s = {}.hasOwnProperty, Mr = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ lo({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Mr.displayName = "EmotionCacheContext");
var Ss = Mr.Provider, Dt = function(t) {
  return /* @__PURE__ */ Ko(function(r, n) {
    var o = Ho(Mr);
    return t(r, o, n);
  });
}, De = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (De.displayName = "EmotionThemeContext");
var mn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", hn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Os = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return jt(r, n, o), Ar(function() {
    return It(r, n, o);
  }), null;
}, Ts = /* @__PURE__ */ Dt(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[mn], i = [n], s = "";
  typeof e.className == "string" ? s = Nr(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Ke(i, void 0, O.useContext(De));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var c = e[hn];
    c && (a = Ke([a, "label:" + c + ";"]));
  }
  s += t.key + "-" + a.name;
  var u = {};
  for (var l in e)
    _s.call(e, l) && l !== "css" && l !== mn && (process.env.NODE_ENV === "production" || l !== hn) && (u[l] = e[l]);
  return u.ref = r, u.className = s, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Os, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, u));
});
process.env.NODE_ENV !== "production" && (Ts.displayName = "EmotionCssPropInternal");
var Cs = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, yn = !1, bo = /* @__PURE__ */ Dt(function(e, t) {
  process.env.NODE_ENV !== "production" && !yn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), yn = !0);
  var r = e.styles, n = Ke([r], void 0, O.useContext(De)), o = O.useRef();
  return pn(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, c = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (a = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), pn(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && It(t, n.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (bo.displayName = "EmotionGlobal");
function vo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Ke(t);
}
var zt = function() {
  var t = vo.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ws = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var a in i)
              i[a] && a && (s && (s += " "), s += a);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function Rs(e, t, r) {
  var n = [], o = Nr(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var $s = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Ar(function() {
    for (var o = 0; o < n.length; o++)
      It(r, n[o], !1);
  }), null;
}, Ps = /* @__PURE__ */ Dt(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, l = new Array(u), m = 0; m < u; m++)
      l[m] = arguments[m];
    var p = Ke(l, t.registered);
    return n.push(p), jt(t, p, !1), t.key + "-" + p.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, l = new Array(u), m = 0; m < u; m++)
      l[m] = arguments[m];
    return Rs(t.registered, o, ws(l));
  }, s = {
    css: o,
    cx: i,
    theme: O.useContext(De)
  }, a = e.children(s);
  return r = !0, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement($s, {
    cache: t,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (Ps.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var gn = !0, Ns = typeof jest < "u" || typeof vi < "u";
  if (gn && !Ns) {
    var bn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : gn ? window : global
    ), vn = "__EMOTION_REACT_" + Cs.version.split(".")[0] + "__";
    bn[vn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), bn[vn] = !0;
  }
}
var ks = Ri, As = function(t) {
  return t !== "theme";
}, En = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ks : As;
}, xn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, _n = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ms = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return jt(r, n, o), Ar(function() {
    return It(r, n, o);
  }), null;
}, js = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = xn(t, r, n), c = a || En(o), u = !c("as");
  return function() {
    var l = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), l[0] == null || l[0].raw === void 0)
      m.push.apply(m, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(_n), m.push(l[0][0]);
      for (var p = l.length, v = 1; v < p; v++)
        process.env.NODE_ENV !== "production" && l[0][v] === void 0 && console.error(_n), m.push(l[v], l[0][v]);
    }
    var g = Dt(function(f, d, x) {
      var P = u && f.as || o, C = "", S = [], h = f;
      if (f.theme == null) {
        h = {};
        for (var $ in f)
          h[$] = f[$];
        h.theme = O.useContext(De);
      }
      typeof f.className == "string" ? C = Nr(d.registered, S, f.className) : f.className != null && (C = f.className + " ");
      var w = Ke(m.concat(S), d.registered, h);
      C += d.key + "-" + w.name, s !== void 0 && (C += " " + s);
      var Z = u && a === void 0 ? En(P) : c, re = {};
      for (var K in f)
        u && K === "as" || // $FlowFixMe
        Z(K) && (re[K] = f[K]);
      return re.className = C, re.ref = x, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Ms, {
        cache: d,
        serialized: w,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ O.createElement(P, re));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = m, g.__emotion_forwardProp = a, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(f, d) {
      return e(f, k({}, r, d, {
        shouldForwardProp: xn(g, d, !0)
      })).apply(void 0, m);
    }, g;
  };
}, Is = [
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
  "marquee",
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
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
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
  "tspan"
], mr = js.bind();
Is.forEach(function(e) {
  mr[e] = mr(e);
});
let hr;
typeof document == "object" && (hr = lo({
  key: "css",
  prepend: !0
}));
function Eo(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && hr ? /* @__PURE__ */ Te(Ss, {
    value: hr,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Eo.propTypes = {
  /**
   * Your component tree.
   */
  children: y.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: y.bool
});
function Ds(e) {
  return e == null || Object.keys(e).length === 0;
}
function xo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ Te(bo, {
    styles: typeof t == "function" ? (o) => t(Ds(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  defaultTheme: y.object,
  styles: y.oneOfType([y.array, y.string, y.object, y.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function zs(e, t) {
  const r = mr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Vs = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: xo,
  StyledEngineProvider: Eo,
  ThemeContext: De,
  css: vo,
  default: zs,
  internal_processStyles: Vs,
  keyframes: zt
}, Symbol.toStringTag, { value: "Module" })), Fs = /* @__PURE__ */ Me(Ls);
function Ae(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function _o(e) {
  if (!Ae(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = _o(e[r]);
  }), t;
}
function $e(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? k({}, e) : e;
  return Ae(e) && Ae(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ae(t[o]) && o in e && Ae(e[o]) ? n[o] = $e(e[o], t[o], r) : r.clone ? n[o] = Ae(t[o]) ? _o(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e,
  isPlainObject: Ae
}, Symbol.toStringTag, { value: "Module" })), Ws = /* @__PURE__ */ Me(Bs);
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Us = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: me
}, Symbol.toStringTag, { value: "Module" })), Ys = /* @__PURE__ */ Me(Us);
var yr = { exports: {} }, q = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function qs() {
  if (Sn)
    return q;
  Sn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function f(d) {
    if (typeof d == "object" && d !== null) {
      var x = d.$$typeof;
      switch (x) {
        case e:
          switch (d = d.type, d) {
            case r:
            case o:
            case n:
            case u:
            case l:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case a:
                case s:
                case c:
                case p:
                case m:
                case i:
                  return d;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return q.ContextConsumer = s, q.ContextProvider = i, q.Element = e, q.ForwardRef = c, q.Fragment = r, q.Lazy = p, q.Memo = m, q.Portal = t, q.Profiler = o, q.StrictMode = n, q.Suspense = u, q.SuspenseList = l, q.isAsyncMode = function() {
    return !1;
  }, q.isConcurrentMode = function() {
    return !1;
  }, q.isContextConsumer = function(d) {
    return f(d) === s;
  }, q.isContextProvider = function(d) {
    return f(d) === i;
  }, q.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === e;
  }, q.isForwardRef = function(d) {
    return f(d) === c;
  }, q.isFragment = function(d) {
    return f(d) === r;
  }, q.isLazy = function(d) {
    return f(d) === p;
  }, q.isMemo = function(d) {
    return f(d) === m;
  }, q.isPortal = function(d) {
    return f(d) === t;
  }, q.isProfiler = function(d) {
    return f(d) === o;
  }, q.isStrictMode = function(d) {
    return f(d) === n;
  }, q.isSuspense = function(d) {
    return f(d) === u;
  }, q.isSuspenseList = function(d) {
    return f(d) === l;
  }, q.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === r || d === o || d === n || d === u || d === l || d === v || typeof d == "object" && d !== null && (d.$$typeof === p || d.$$typeof === m || d.$$typeof === i || d.$$typeof === s || d.$$typeof === c || d.$$typeof === g || d.getModuleId !== void 0);
  }, q.typeOf = f, q;
}
var G = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On;
function Gs() {
  return On || (On = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), g = !1, f = !1, d = !1, x = !1, P = !1, C;
    C = Symbol.for("react.module.reference");
    function S(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === o || P || T === n || T === u || T === l || x || T === v || g || f || d || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === m || T.$$typeof === i || T.$$typeof === s || T.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === C || T.getModuleId !== void 0));
    }
    function h(T) {
      if (typeof T == "object" && T !== null) {
        var ke = T.$$typeof;
        switch (ke) {
          case e:
            var Ve = T.type;
            switch (Ve) {
              case r:
              case o:
              case n:
              case u:
              case l:
                return Ve;
              default:
                var pt = Ve && Ve.$$typeof;
                switch (pt) {
                  case a:
                  case s:
                  case c:
                  case p:
                  case m:
                  case i:
                    return pt;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var $ = s, w = i, Z = e, re = c, K = r, W = p, H = m, ie = t, Q = o, fe = n, X = u, de = l, ae = !1, Ne = !1;
    function b(T) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(T) {
      return Ne || (Ne = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function D(T) {
      return h(T) === s;
    }
    function M(T) {
      return h(T) === i;
    }
    function R(T) {
      return typeof T == "object" && T !== null && T.$$typeof === e;
    }
    function z(T) {
      return h(T) === c;
    }
    function N(T) {
      return h(T) === r;
    }
    function j(T) {
      return h(T) === p;
    }
    function V(T) {
      return h(T) === m;
    }
    function A(T) {
      return h(T) === t;
    }
    function L(T) {
      return h(T) === o;
    }
    function ce(T) {
      return h(T) === n;
    }
    function E(T) {
      return h(T) === u;
    }
    function pe(T) {
      return h(T) === l;
    }
    G.ContextConsumer = $, G.ContextProvider = w, G.Element = Z, G.ForwardRef = re, G.Fragment = K, G.Lazy = W, G.Memo = H, G.Portal = ie, G.Profiler = Q, G.StrictMode = fe, G.Suspense = X, G.SuspenseList = de, G.isAsyncMode = b, G.isConcurrentMode = _, G.isContextConsumer = D, G.isContextProvider = M, G.isElement = R, G.isForwardRef = z, G.isFragment = N, G.isLazy = j, G.isMemo = V, G.isPortal = A, G.isProfiler = L, G.isStrictMode = ce, G.isSuspense = E, G.isSuspenseList = pe, G.isValidElementType = S, G.typeOf = h;
  }()), G;
}
process.env.NODE_ENV === "production" ? yr.exports = qs() : yr.exports = Gs();
var Tn = yr.exports;
const Ks = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function So(e) {
  const t = `${e}`.match(Ks);
  return t && t[1] || "";
}
function Oo(e, t = "") {
  return e.displayName || e.name || So(e) || t;
}
function Cn(e, t, r) {
  const n = Oo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Hs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Oo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Tn.ForwardRef:
          return Cn(e, e.render, "ForwardRef");
        case Tn.Memo:
          return Cn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hs,
  getFunctionName: So
}, Symbol.toStringTag, { value: "Module" })), Js = /* @__PURE__ */ Me(Xs), Zs = ["values", "unit", "step"], Qs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => k({}, r, {
    [n.key]: n.val
  }), {});
};
function To(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = Ce(e, Zs), i = Qs(t), s = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, v) {
    const g = s.indexOf(v);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : v) - n / 100}${r})`;
  }
  function l(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p);
  }
  function m(p) {
    const v = s.indexOf(p);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? c(s[v]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return k({
    keys: s,
    values: i,
    up: a,
    down: c,
    between: u,
    only: l,
    not: m,
    unit: r
  }, o);
}
const ea = {
  borderRadius: 4
}, ta = ea, ra = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {}, je = ra;
function rt(e, t) {
  return t ? $e(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const jr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, wn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${jr[e]}px)`
};
function Pe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || wn;
    return t.reduce((s, a, c) => (s[i.up(i.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || wn;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || jr).indexOf(a) !== -1) {
        const c = i.up(a);
        s[c] = r(t[a], a);
      } else {
        const c = a;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function na(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function oa(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Vt(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Nt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Vt(e, r) || n, t && (o = t(o, n, e)), o;
}
function oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], c = s.theme, u = Vt(c, n) || {};
    return Pe(s, a, (m) => {
      let p = Nt(u, o, m);
      return m === p && typeof m == "string" && (p = Nt(u, o, `${t}${m === "default" ? "" : me(m)}`, m)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: je
  } : {}, i.filterProps = [t], i;
}
function ia(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const sa = {
  m: "margin",
  p: "padding"
}, aa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Rn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ca = ia((e) => {
  if (e.length > 2)
    if (Rn[e])
      e = Rn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = sa[t], o = aa[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Lt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ft = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ua = [...Lt, ...Ft];
function lt(e, t, r, n) {
  var o;
  const i = (o = Vt(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Co(e) {
  return lt(e, "spacing", 8, "spacing");
}
function ft(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function la(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = ft(t, r), n), {});
}
function fa(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = ca(r), i = la(o, n), s = e[r];
  return Pe(e, s, i);
}
function wo(e, t) {
  const r = Co(e.theme);
  return Object.keys(e).map((n) => fa(e, t, n, r)).reduce(rt, {});
}
function ee(e) {
  return wo(e, Lt);
}
ee.propTypes = process.env.NODE_ENV !== "production" ? Lt.reduce((e, t) => (e[t] = je, e), {}) : {};
ee.filterProps = Lt;
function te(e) {
  return wo(e, Ft);
}
te.propTypes = process.env.NODE_ENV !== "production" ? Ft.reduce((e, t) => (e[t] = je, e), {}) : {};
te.filterProps = Ft;
process.env.NODE_ENV !== "production" && ua.reduce((e, t) => (e[t] = je, e), {});
function da(e = 8) {
  if (e.mui)
    return e;
  const t = Co({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Bt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? rt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function xe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Se(e, t) {
  return oe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const pa = Se("border", xe), ma = Se("borderTop", xe), ha = Se("borderRight", xe), ya = Se("borderBottom", xe), ga = Se("borderLeft", xe), ba = Se("borderColor"), va = Se("borderTopColor"), Ea = Se("borderRightColor"), xa = Se("borderBottomColor"), _a = Se("borderLeftColor"), Sa = Se("outline", xe), Oa = Se("outlineColor"), Wt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = lt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: ft(t, n)
    });
    return Pe(e, e.borderRadius, r);
  }
  return null;
};
Wt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: je
} : {};
Wt.filterProps = ["borderRadius"];
Bt(pa, ma, ha, ya, ga, ba, va, Ea, xa, _a, Wt, Sa, Oa);
const Ut = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = lt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: ft(t, n)
    });
    return Pe(e, e.gap, r);
  }
  return null;
};
Ut.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: je
} : {};
Ut.filterProps = ["gap"];
const Yt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = lt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: ft(t, n)
    });
    return Pe(e, e.columnGap, r);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: je
} : {};
Yt.filterProps = ["columnGap"];
const qt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = lt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: ft(t, n)
    });
    return Pe(e, e.rowGap, r);
  }
  return null;
};
qt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: je
} : {};
qt.filterProps = ["rowGap"];
const Ta = oe({
  prop: "gridColumn"
}), Ca = oe({
  prop: "gridRow"
}), wa = oe({
  prop: "gridAutoFlow"
}), Ra = oe({
  prop: "gridAutoColumns"
}), $a = oe({
  prop: "gridAutoRows"
}), Pa = oe({
  prop: "gridTemplateColumns"
}), Na = oe({
  prop: "gridTemplateRows"
}), ka = oe({
  prop: "gridTemplateAreas"
}), Aa = oe({
  prop: "gridArea"
});
Bt(Ut, Yt, qt, Ta, Ca, wa, Ra, $a, Pa, Na, ka, Aa);
function qe(e, t) {
  return t === "grey" ? t : e;
}
const Ma = oe({
  prop: "color",
  themeKey: "palette",
  transform: qe
}), ja = oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qe
}), Ia = oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qe
});
Bt(Ma, ja, Ia);
function ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Da = oe({
  prop: "width",
  transform: ye
}), Ir = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || jr[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: ye(r)
      };
    };
    return Pe(e, e.maxWidth, t);
  }
  return null;
};
Ir.filterProps = ["maxWidth"];
const za = oe({
  prop: "minWidth",
  transform: ye
}), Va = oe({
  prop: "height",
  transform: ye
}), La = oe({
  prop: "maxHeight",
  transform: ye
}), Fa = oe({
  prop: "minHeight",
  transform: ye
});
oe({
  prop: "size",
  cssProperty: "width",
  transform: ye
});
oe({
  prop: "size",
  cssProperty: "height",
  transform: ye
});
const Ba = oe({
  prop: "boxSizing"
});
Bt(Da, Ir, za, Va, La, Fa, Ba);
const Wa = {
  // borders
  border: {
    themeKey: "borders",
    transform: xe
  },
  borderTop: {
    themeKey: "borders",
    transform: xe
  },
  borderRight: {
    themeKey: "borders",
    transform: xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: xe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qe
  },
  // spacing
  p: {
    style: te
  },
  pt: {
    style: te
  },
  pr: {
    style: te
  },
  pb: {
    style: te
  },
  pl: {
    style: te
  },
  px: {
    style: te
  },
  py: {
    style: te
  },
  padding: {
    style: te
  },
  paddingTop: {
    style: te
  },
  paddingRight: {
    style: te
  },
  paddingBottom: {
    style: te
  },
  paddingLeft: {
    style: te
  },
  paddingX: {
    style: te
  },
  paddingY: {
    style: te
  },
  paddingInline: {
    style: te
  },
  paddingInlineStart: {
    style: te
  },
  paddingInlineEnd: {
    style: te
  },
  paddingBlock: {
    style: te
  },
  paddingBlockStart: {
    style: te
  },
  paddingBlockEnd: {
    style: te
  },
  m: {
    style: ee
  },
  mt: {
    style: ee
  },
  mr: {
    style: ee
  },
  mb: {
    style: ee
  },
  ml: {
    style: ee
  },
  mx: {
    style: ee
  },
  my: {
    style: ee
  },
  margin: {
    style: ee
  },
  marginTop: {
    style: ee
  },
  marginRight: {
    style: ee
  },
  marginBottom: {
    style: ee
  },
  marginLeft: {
    style: ee
  },
  marginX: {
    style: ee
  },
  marginY: {
    style: ee
  },
  marginInline: {
    style: ee
  },
  marginInlineStart: {
    style: ee
  },
  marginInlineEnd: {
    style: ee
  },
  marginBlock: {
    style: ee
  },
  marginBlockStart: {
    style: ee
  },
  marginBlockEnd: {
    style: ee
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ut
  },
  rowGap: {
    style: qt
  },
  columnGap: {
    style: Yt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ye
  },
  maxWidth: {
    style: Ir
  },
  minWidth: {
    transform: ye
  },
  height: {
    transform: ye
  },
  maxHeight: {
    transform: ye
  },
  minHeight: {
    transform: ye
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, dt = Wa;
function Ua(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ya(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ro() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: u,
      transform: l,
      style: m
    } = a;
    if (n == null)
      return null;
    if (u === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = Vt(o, u) || {};
    return m ? m(s) : Pe(s, n, (g) => {
      let f = Nt(p, l, g);
      return g === f && typeof g == "string" && (f = Nt(p, l, `${r}${g === "default" ? "" : me(g)}`, g)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : dt;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const l = na(i.breakpoints), m = Object.keys(l);
      let p = l;
      return Object.keys(u).forEach((v) => {
        const g = Ya(u[v], i);
        if (g != null)
          if (typeof g == "object")
            if (s[v])
              p = rt(p, e(v, g, i, s));
            else {
              const f = Pe({
                theme: i
              }, g, (d) => ({
                [v]: d
              }));
              Ua(f, g) ? p[v] = t({
                sx: g,
                theme: i
              }) : p = rt(p, f);
            }
          else
            p = rt(p, e(v, g, i, s));
      }), oa(m, p);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Gt = Ro();
Gt.filterProps = ["sx"];
function $o(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const qa = ["breakpoints", "palette", "spacing", "shape"];
function Dr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = Ce(e, qa), a = To(r), c = da(o);
  let u = $e({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: k({
      mode: "light"
    }, n),
    spacing: c,
    shape: k({}, ta, i)
  }, s);
  return u.applyStyles = $o, u = t.reduce((l, m) => $e(l, m), u), u.unstable_sxConfig = k({}, dt, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return Gt({
      sx: m,
      theme: this
    });
  }, u;
}
const Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dr,
  private_createBreakpoints: To,
  unstable_applyStyles: $o
}, Symbol.toStringTag, { value: "Module" })), Ka = /* @__PURE__ */ Me(Ga), Ha = ["sx"], Xa = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : dt;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Ja(e) {
  const {
    sx: t
  } = e, r = Ce(e, Ha), {
    systemProps: n,
    otherProps: o
  } = Xa(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ae(a) ? k({}, n, a) : n;
  } : i = k({}, n, t), k({}, o, {
    sx: i
  });
}
const Za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt,
  extendSxProp: Ja,
  unstable_createStyleFunctionSx: Ro,
  unstable_defaultSxConfig: dt
}, Symbol.toStringTag, { value: "Module" })), Qa = /* @__PURE__ */ Me(Za);
var Je = Hn;
Object.defineProperty(ct, "__esModule", {
  value: !0
});
var ec = ct.default = mc;
ct.shouldForwardProp = Ct;
ct.systemDefaultTheme = void 0;
var be = Je(Ti()), gr = Je(Ci()), $n = uc(Fs), tc = Ws, rc = Je(Ys), nc = Je(Js), oc = Je(Ka), ic = Je(Qa);
const sc = ["ownerState"], ac = ["variants"], cc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Po(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Po = function(n) {
    return n ? r : t;
  })(e);
}
function uc(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Po(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function lc(e) {
  return Object.keys(e).length === 0;
}
function fc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ct(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const dc = ct.systemDefaultTheme = (0, oc.default)(), Pn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function bt({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return lc(t) ? e : t[r] || t;
}
function pc(e) {
  return e ? (t, r) => r[e] : null;
}
function wt(e, t) {
  let {
    ownerState: r
  } = t, n = (0, gr.default)(t, sc);
  const o = typeof e == "function" ? e((0, be.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => wt(i, (0, be.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let a = (0, gr.default)(o, ac);
    return i.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, be.default)({
        ownerState: r
      }, n, r)) : Object.keys(c.props).forEach((l) => {
        (r == null ? void 0 : r[l]) !== c.props[l] && n[l] !== c.props[l] && (u = !1);
      }), u && (Array.isArray(a) || (a = [a]), a.push(typeof c.style == "function" ? c.style((0, be.default)({
        ownerState: r
      }, n, r)) : c.style));
    }), a;
  }
  return o;
}
function mc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = dc,
    rootShouldForwardProp: n = Ct,
    slotShouldForwardProp: o = Ct
  } = e, i = (s) => (0, ic.default)((0, be.default)({}, s, {
    theme: bt((0, be.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    (0, $n.internal_processStyles)(s, (h) => h.filter(($) => !($ != null && $.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: l,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = pc(Pn(u))
    } = a, v = (0, gr.default)(a, cc), g = l !== void 0 ? l : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = m || !1;
    let d;
    process.env.NODE_ENV !== "production" && c && (d = `${c}-${Pn(u || "Root")}`);
    let x = Ct;
    u === "Root" || u === "root" ? x = n : u ? x = o : fc(s) && (x = void 0);
    const P = (0, $n.default)(s, (0, be.default)({
      shouldForwardProp: x,
      label: d
    }, v)), C = (h) => typeof h == "function" && h.__emotion_real !== h || (0, tc.isPlainObject)(h) ? ($) => wt(h, (0, be.default)({}, $, {
      theme: bt({
        theme: $.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : h, S = (h, ...$) => {
      let w = C(h);
      const Z = $ ? $.map(C) : [];
      c && p && Z.push((W) => {
        const H = bt((0, be.default)({}, W, {
          defaultTheme: r,
          themeId: t
        }));
        if (!H.components || !H.components[c] || !H.components[c].styleOverrides)
          return null;
        const ie = H.components[c].styleOverrides, Q = {};
        return Object.entries(ie).forEach(([fe, X]) => {
          Q[fe] = wt(X, (0, be.default)({}, W, {
            theme: H
          }));
        }), p(W, Q);
      }), c && !g && Z.push((W) => {
        var H;
        const ie = bt((0, be.default)({}, W, {
          defaultTheme: r,
          themeId: t
        })), Q = ie == null || (H = ie.components) == null || (H = H[c]) == null ? void 0 : H.variants;
        return wt({
          variants: Q
        }, (0, be.default)({}, W, {
          theme: ie
        }));
      }), f || Z.push(i);
      const re = Z.length - $.length;
      if (Array.isArray(h) && re > 0) {
        const W = new Array(re).fill("");
        w = [...h, ...W], w.raw = [...h.raw, ...W];
      }
      const K = P(w, ...Z);
      if (process.env.NODE_ENV !== "production") {
        let W;
        c && (W = `${c}${(0, rc.default)(u || "")}`), W === void 0 && (W = `Styled(${(0, nc.default)(s)})`), K.displayName = W;
      }
      return s.muiName && (K.muiName = s.muiName), K;
    };
    return P.withConfig && (S.withConfig = P.withConfig), S;
  };
}
const Nn = (e) => e, hc = () => {
  let e = Nn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Nn;
    }
  };
}, yc = hc(), gc = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Kt(e, t, r = "Mui") {
  const n = gc[t];
  return n ? `${r}-${n}` : `${yc.generate(e)}-${t}`;
}
function bc(e, t) {
  return k({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const vc = {
  black: "#000",
  white: "#fff"
}, at = vc, Ec = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, xc = Ec, _c = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Le = _c, Sc = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Fe = Sc, Oc = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, et = Oc, Tc = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Be = Tc, Cc = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, We = Cc, wc = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ue = wc, Rc = ["mode", "contrastThreshold", "tonalOffset"], kn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: at.white,
    default: at.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ur = {
  text: {
    primary: at.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: at.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function An(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = pi(e.main, o) : t === "dark" && (e.dark = di(e.main, i)));
}
function $c(e = "light") {
  return e === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: Le[200],
    light: Le[50],
    dark: Le[400]
  } : {
    main: Le[500],
    light: Le[300],
    dark: Le[700]
  };
}
function Nc(e = "light") {
  return e === "dark" ? {
    main: Fe[500],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[700],
    light: Fe[400],
    dark: Fe[800]
  };
}
function kc(e = "light") {
  return e === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[500],
    dark: We[900]
  };
}
function Ac(e = "light") {
  return e === "dark" ? {
    main: Ue[400],
    light: Ue[300],
    dark: Ue[700]
  } : {
    main: Ue[800],
    light: Ue[500],
    dark: Ue[900]
  };
}
function Mc(e = "light") {
  return e === "dark" ? {
    main: et[400],
    light: et[300],
    dark: et[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: et[500],
    dark: et[900]
  };
}
function jc(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = Ce(e, Rc), i = e.primary || $c(t), s = e.secondary || Pc(t), a = e.error || Nc(t), c = e.info || kc(t), u = e.success || Ac(t), l = e.warning || Mc(t);
  function m(f) {
    const d = en(f, ur.text.primary) >= r ? ur.text.primary : kn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = en(f, d);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${d} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return d;
  }
  const p = ({
    color: f,
    name: d,
    mainShade: x = 500,
    lightShade: P = 300,
    darkShade: C = 700
  }) => {
    if (f = k({}, f), !f.main && f[x] && (f.main = f[x]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${d ? ` (${d})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : nt(11, d ? ` (${d})` : "", x));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${d ? ` (${d})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : nt(12, d ? ` (${d})` : "", JSON.stringify(f.main)));
    return An(f, "light", P, n), An(f, "dark", C, n), f.contrastText || (f.contrastText = m(f.main)), f;
  }, v = {
    dark: ur,
    light: kn
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), $e(k({
    // A collection of common colors.
    common: k({}, at),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: xc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, v[t]), o);
}
const Ic = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Dc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mn = {
  textTransform: "uppercase"
}, jn = '"Roboto", "Helvetica", "Arial", sans-serif';
function zc(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = jn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: m
  } = r, p = Ce(r, Ic);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, g = m || ((x) => `${x / u * v}rem`), f = (x, P, C, S, h) => k({
    fontFamily: n,
    fontWeight: x,
    fontSize: g(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, n === jn ? {
    letterSpacing: `${Dc(S / P)}em`
  } : {}, h, l), d = {
    h1: f(i, 96, 1.167, -1.5),
    h2: f(i, 60, 1.2, -0.5),
    h3: f(s, 48, 1.167, 0),
    h4: f(s, 34, 1.235, 0.25),
    h5: f(s, 24, 1.334, 0),
    h6: f(a, 20, 1.6, 0.15),
    subtitle1: f(s, 16, 1.75, 0.15),
    subtitle2: f(a, 14, 1.57, 0.1),
    body1: f(s, 16, 1.5, 0.15),
    body2: f(s, 14, 1.43, 0.15),
    button: f(a, 14, 1.75, 0.4, Mn),
    caption: f(s, 12, 1.66, 0.4),
    overline: f(s, 12, 2.66, 1, Mn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return $e(k({
    htmlFontSize: u,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: c
  }, d), p, {
    clone: !1
    // No need to clone deep
  });
}
const Vc = 0.2, Lc = 0.14, Fc = 0.12;
function J(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Vc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Fc})`].join(",");
}
const Bc = ["none", J(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), J(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), J(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), J(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), J(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), J(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), J(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), J(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), J(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), J(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), J(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), J(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), J(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), J(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), J(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), J(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), J(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), J(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), J(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), J(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), J(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), J(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), J(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), J(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Wc = ["duration", "easing", "delay"], Uc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Yc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function In(e) {
  return `${Math.round(e)}ms`;
}
function qc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Gc(e) {
  const t = k({}, Uc, e.easing), r = k({}, Yc, e.duration);
  return k({
    getAutoHeightDuration: qc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: c = 0
      } = i, u = Ce(i, Wc);
      if (process.env.NODE_ENV !== "production") {
        const l = (p) => typeof p == "string", m = (p) => !isNaN(parseFloat(p));
        !l(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !l(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !m(c) && !l(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((l) => `${l} ${typeof s == "string" ? s : In(s)} ${a} ${typeof c == "string" ? c : In(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Kc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Hc = Kc, Xc = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Jc(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = Ce(e, Xc);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : nt(18));
  const a = jc(n), c = Dr(e);
  let u = $e(c, {
    mixins: bc(c.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Bc.slice(),
    typography: zc(a, i),
    transitions: Gc(o),
    zIndex: k({}, Hc)
  });
  if (u = $e(u, s), u = t.reduce((l, m) => $e(l, m), u), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (p, v) => {
      let g;
      for (g in p) {
        const f = p[g];
        if (l.indexOf(g) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const d = Kt("", g);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${d}' syntax:`, JSON.stringify({
              root: {
                [`&.${d}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((p) => {
      const v = u.components[p].styleOverrides;
      v && p.indexOf("Mui") === 0 && m(v, p);
    });
  }
  return u.unstable_sxConfig = k({}, dt, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(m) {
    return Gt({
      sx: m,
      theme: this
    });
  }, u;
}
const Zc = Jc(), No = Zc, ko = "$$material";
function Qc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const eu = (e) => Qc(e) && e !== "classes", Ao = eu, ze = ec({
  themeId: ko,
  defaultTheme: No,
  rootShouldForwardProp: Ao
});
function tu(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Sr(t.components[r].defaultProps, n);
}
function ru(e) {
  return Object.keys(e).length === 0;
}
function nu(e = null) {
  const t = O.useContext(De);
  return !t || ru(t) ? e : t;
}
const ou = Dr();
function iu(e = ou) {
  return nu(e);
}
function su({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = iu(r);
  return n && (o = o[n] || o), tu({
    theme: o,
    name: t,
    props: e
  });
}
function zr({
  props: e,
  name: t
}) {
  return su({
    props: e,
    name: t,
    defaultTheme: No,
    themeId: ko
  });
}
const au = y.oneOfType([y.func, y.object]), cu = au;
function uu(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function lu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function fu(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !lu(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const du = uu(y.elementType, fu);
function pu(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Dn(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      pu(r, t);
    });
  }, e);
}
const mu = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function vt(e) {
  const t = O.useRef(e);
  return mu(() => {
    t.current = e;
  }), O.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
const zn = {};
function hu(e, t) {
  const r = O.useRef(zn);
  return r.current === zn && (r.current = e(t)), r;
}
const yu = [];
function gu(e) {
  O.useEffect(e, yu);
}
class Ht {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Ht();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function bu() {
  const e = hu(Ht.create).current;
  return gu(e.disposeEffect), e;
}
let Xt = !0, br = !1;
const vu = new Ht(), Eu = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function xu(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Eu[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function _u(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Xt = !0);
}
function lr() {
  Xt = !1;
}
function Su() {
  this.visibilityState === "hidden" && br && (Xt = !0);
}
function Ou(e) {
  e.addEventListener("keydown", _u, !0), e.addEventListener("mousedown", lr, !0), e.addEventListener("pointerdown", lr, !0), e.addEventListener("touchstart", lr, !0), e.addEventListener("visibilitychange", Su, !0);
}
function Tu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Xt || xu(t);
}
function Cu() {
  const e = O.useCallback((o) => {
    o != null && Ou(o.ownerDocument);
  }, []), t = O.useRef(!1);
  function r() {
    return t.current ? (br = !0, vu.start(100, () => {
      br = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Tu(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function vr(e, t) {
  return vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, vr(e, t);
}
function wu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, vr(e, t);
}
const Vn = tt.createContext(null);
function Ru(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vr(e, t) {
  var r = function(i) {
    return t && xt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Xo.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function $u(e, t) {
  e = e || {}, t = t || {};
  function r(l) {
    return l in t ? t[l] : e[l];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var c in t) {
    if (n[c])
      for (s = 0; s < n[c].length; s++) {
        var u = n[c][s];
        a[n[c][s]] = r(u);
      }
    a[c] = r(c);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function Ie(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Pu(e, t) {
  return Vr(e.children, function(r) {
    return _t(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ie(r, "appear", e),
      enter: Ie(r, "enter", e),
      exit: Ie(r, "exit", e)
    });
  });
}
function Nu(e, t, r) {
  var n = Vr(e.children), o = $u(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (xt(s)) {
      var a = i in t, c = i in n, u = t[i], l = xt(u) && !u.props.in;
      c && (!a || l) ? o[i] = _t(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }) : !c && a && !l ? o[i] = _t(s, {
        in: !1
      }) : c && a && xt(u) && (o[i] = _t(s, {
        onExited: r.bind(null, s),
        in: u.props.in,
        exit: Ie(s, "exit", e),
        enter: Ie(s, "enter", e)
      }));
    }
  }), o;
}
var ku = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Au = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Lr = /* @__PURE__ */ function(e) {
  wu(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Ru(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, c = i.firstRender;
    return {
      children: c ? Pu(o, a) : Nu(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Vr(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var c = k({}, a.children);
      return delete c[o.key], {
        children: c
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = Ce(o, ["component", "childFactory"]), c = this.state.contextValue, u = ku(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ tt.createElement(Vn.Provider, {
      value: c
    }, u) : /* @__PURE__ */ tt.createElement(Vn.Provider, {
      value: c
    }, /* @__PURE__ */ tt.createElement(i, a, u));
  }, t;
}(tt.Component);
Lr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: y.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: y.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: y.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: y.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: y.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: y.func
} : {};
Lr.defaultProps = Au;
const Mu = Lr;
function Fr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Kt(e, o, r);
  }), n;
}
function Mo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: c,
    timeout: u
  } = e, [l, m] = O.useState(!1), p = ve(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, g = ve(r.child, l && r.childLeaving, n && r.childPulsate);
  return !a && !l && m(!0), O.useEffect(() => {
    if (!a && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, a, u]), /* @__PURE__ */ Te("span", {
    className: p,
    style: v,
    children: /* @__PURE__ */ Te("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object.isRequired,
  className: y.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: y.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: y.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: y.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: y.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: y.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: y.number,
  /**
   * exit delay
   */
  timeout: y.number.isRequired
});
const Ee = Fr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ju = ["center", "classes", "className"];
let Jt = (e) => e, Ln, Fn, Bn, Wn;
const Er = 550, Iu = 80, Du = zt(Ln || (Ln = Jt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), zu = zt(Fn || (Fn = Jt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Vu = zt(Bn || (Bn = Jt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Lu = ze("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Fu = ze(Mo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Wn || (Wn = Jt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Ee.rippleVisible, Du, Er, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Ee.child, Ee.childLeaving, zu, Er, ({
  theme: e
}) => e.transitions.easing.easeInOut, Ee.childPulsate, Vu, ({
  theme: e
}) => e.transitions.easing.easeInOut), jo = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = zr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, a = Ce(n, ju), [c, u] = O.useState([]), l = O.useRef(0), m = O.useRef(null);
  O.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [c]);
  const p = O.useRef(!1), v = bu(), g = O.useRef(null), f = O.useRef(null), d = O.useCallback((S) => {
    const {
      pulsate: h,
      rippleX: $,
      rippleY: w,
      rippleSize: Z,
      cb: re
    } = S;
    u((K) => [...K, /* @__PURE__ */ Te(Fu, {
      classes: {
        ripple: ve(i.ripple, Ee.ripple),
        rippleVisible: ve(i.rippleVisible, Ee.rippleVisible),
        ripplePulsate: ve(i.ripplePulsate, Ee.ripplePulsate),
        child: ve(i.child, Ee.child),
        childLeaving: ve(i.childLeaving, Ee.childLeaving),
        childPulsate: ve(i.childPulsate, Ee.childPulsate)
      },
      timeout: Er,
      pulsate: h,
      rippleX: $,
      rippleY: w,
      rippleSize: Z
    }, l.current)]), l.current += 1, m.current = re;
  }, [i]), x = O.useCallback((S = {}, h = {}, $ = () => {
  }) => {
    const {
      pulsate: w = !1,
      center: Z = o || h.pulsate,
      fakeElement: re = !1
      // For test purposes
    } = h;
    if ((S == null ? void 0 : S.type) === "mousedown" && p.current) {
      p.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (p.current = !0);
    const K = re ? null : f.current, W = K ? K.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let H, ie, Q;
    if (Z || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      H = Math.round(W.width / 2), ie = Math.round(W.height / 2);
    else {
      const {
        clientX: fe,
        clientY: X
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      H = Math.round(fe - W.left), ie = Math.round(X - W.top);
    }
    if (Z)
      Q = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3), Q % 2 === 0 && (Q += 1);
    else {
      const fe = Math.max(Math.abs((K ? K.clientWidth : 0) - H), H) * 2 + 2, X = Math.max(Math.abs((K ? K.clientHeight : 0) - ie), ie) * 2 + 2;
      Q = Math.sqrt(fe ** 2 + X ** 2);
    }
    S != null && S.touches ? g.current === null && (g.current = () => {
      d({
        pulsate: w,
        rippleX: H,
        rippleY: ie,
        rippleSize: Q,
        cb: $
      });
    }, v.start(Iu, () => {
      g.current && (g.current(), g.current = null);
    })) : d({
      pulsate: w,
      rippleX: H,
      rippleY: ie,
      rippleSize: Q,
      cb: $
    });
  }, [o, d, v]), P = O.useCallback(() => {
    x({}, {
      pulsate: !0
    });
  }, [x]), C = O.useCallback((S, h) => {
    if (v.clear(), (S == null ? void 0 : S.type) === "touchend" && g.current) {
      g.current(), g.current = null, v.start(0, () => {
        C(S, h);
      });
      return;
    }
    g.current = null, u(($) => $.length > 0 ? $.slice(1) : $), m.current = h;
  }, [v]);
  return O.useImperativeHandle(r, () => ({
    pulsate: P,
    start: x,
    stop: C
  }), [P, x, C]), /* @__PURE__ */ Te(Lu, k({
    className: ve(Ee.root, i.root, s),
    ref: f
  }, a, {
    children: /* @__PURE__ */ Te(Mu, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: y.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string
});
const Bu = jo;
function Wu(e) {
  return Kt("MuiButtonBase", e);
}
const Uu = Fr("MuiButtonBase", ["root", "disabled", "focusVisible"]), Yu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], qu = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = Gn({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Wu, o);
  return r && n && (s.root += ` ${n}`), s;
}, Gu = ze("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Uu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Io = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = zr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: c = "button",
    disabled: u = !1,
    disableRipple: l = !1,
    disableTouchRipple: m = !1,
    focusRipple: p = !1,
    LinkComponent: v = "a",
    onBlur: g,
    onClick: f,
    onContextMenu: d,
    onDragLeave: x,
    onFocus: P,
    onFocusVisible: C,
    onKeyDown: S,
    onKeyUp: h,
    onMouseDown: $,
    onMouseLeave: w,
    onMouseUp: Z,
    onTouchEnd: re,
    onTouchMove: K,
    onTouchStart: W,
    tabIndex: H = 0,
    TouchRippleProps: ie,
    touchRippleRef: Q,
    type: fe
  } = n, X = Ce(n, Yu), de = O.useRef(null), ae = O.useRef(null), Ne = Dn(ae, Q), {
    isFocusVisibleRef: b,
    onFocus: _,
    onBlur: D,
    ref: M
  } = Cu(), [R, z] = O.useState(!1);
  u && R && z(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), de.current.focus();
    }
  }), []);
  const [N, j] = O.useState(!1);
  O.useEffect(() => {
    j(!0);
  }, []);
  const V = N && !l && !u;
  O.useEffect(() => {
    R && p && !l && N && ae.current.pulsate();
  }, [l, p, R, N]);
  function A(I, Wr, Go = m) {
    return vt((Ur) => (Wr && Wr(Ur), !Go && ae.current && ae.current[I](Ur), !0));
  }
  const L = A("start", $), ce = A("stop", d), E = A("stop", x), pe = A("stop", Z), T = A("stop", (I) => {
    R && I.preventDefault(), w && w(I);
  }), ke = A("start", W), Ve = A("stop", re), pt = A("stop", K), Fo = A("stop", (I) => {
    D(I), b.current === !1 && z(!1), g && g(I);
  }, !1), Bo = vt((I) => {
    de.current || (de.current = I.currentTarget), _(I), b.current === !0 && (z(!0), C && C(I)), P && P(I);
  }), Zt = () => {
    const I = de.current;
    return c && c !== "button" && !(I.tagName === "A" && I.href);
  }, Qt = O.useRef(!1), Wo = vt((I) => {
    p && !Qt.current && R && ae.current && I.key === " " && (Qt.current = !0, ae.current.stop(I, () => {
      ae.current.start(I);
    })), I.target === I.currentTarget && Zt() && I.key === " " && I.preventDefault(), S && S(I), I.target === I.currentTarget && Zt() && I.key === "Enter" && !u && (I.preventDefault(), f && f(I));
  }), Uo = vt((I) => {
    p && I.key === " " && ae.current && R && !I.defaultPrevented && (Qt.current = !1, ae.current.stop(I, () => {
      ae.current.pulsate(I);
    })), h && h(I), f && I.target === I.currentTarget && Zt() && I.key === " " && !I.defaultPrevented && f(I);
  });
  let mt = c;
  mt === "button" && (X.href || X.to) && (mt = v);
  const Ze = {};
  mt === "button" ? (Ze.type = fe === void 0 ? "button" : fe, Ze.disabled = u) : (!X.href && !X.to && (Ze.role = "button"), u && (Ze["aria-disabled"] = u));
  const Yo = Dn(r, M, de);
  process.env.NODE_ENV !== "production" && O.useEffect(() => {
    V && !ae.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [V]);
  const Br = k({}, n, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: l,
    disableTouchRipple: m,
    focusRipple: p,
    tabIndex: H,
    focusVisible: R
  }), qo = qu(Br);
  return /* @__PURE__ */ Un(Gu, k({
    as: mt,
    className: ve(qo.root, a),
    ownerState: Br,
    onBlur: Fo,
    onClick: f,
    onContextMenu: ce,
    onFocus: Bo,
    onKeyDown: Wo,
    onKeyUp: Uo,
    onMouseDown: L,
    onMouseLeave: T,
    onMouseUp: pe,
    onDragLeave: E,
    onTouchEnd: Ve,
    onTouchMove: pt,
    onTouchStart: ke,
    ref: Yo,
    tabIndex: u ? -1 : H,
    type: fe
  }, Ze, X, {
    children: [s, V ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Te(Bu, k({
        ref: Ne,
        center: i
      }, ie))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: cu,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: y.bool,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: du,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: y.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: y.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: y.string,
  /**
   * @ignore
   */
  href: y.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: y.elementType,
  /**
   * @ignore
   */
  onBlur: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * @ignore
   */
  onContextMenu: y.func,
  /**
   * @ignore
   */
  onDragLeave: y.func,
  /**
   * @ignore
   */
  onFocus: y.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: y.func,
  /**
   * @ignore
   */
  onKeyDown: y.func,
  /**
   * @ignore
   */
  onKeyUp: y.func,
  /**
   * @ignore
   */
  onMouseDown: y.func,
  /**
   * @ignore
   */
  onMouseLeave: y.func,
  /**
   * @ignore
   */
  onMouseUp: y.func,
  /**
   * @ignore
   */
  onTouchEnd: y.func,
  /**
   * @ignore
   */
  onTouchMove: y.func,
  /**
   * @ignore
   */
  onTouchStart: y.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @default 0
   */
  tabIndex: y.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: y.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: y.oneOfType([y.func, y.shape({
    current: y.shape({
      pulsate: y.func.isRequired,
      start: y.func.isRequired,
      stop: y.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string])
});
const Ku = Io;
function Hu(e) {
  return Kt("MuiButton", e);
}
const Xu = Fr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Et = Xu, Do = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (Do.displayName = "ButtonGroupContext");
const Ju = Do, zo = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (zo.displayName = "ButtonGroupButtonContext");
const Zu = zo, Qu = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], el = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${me(t)}`, `size${me(o)}`, `${i}Size${me(o)}`, `color${me(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${me(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${me(o)}`]
  }, c = Gn(a, Hu, s);
  return k({}, s, c);
}, Vo = (e) => k({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), tl = ze(Ku, {
  shouldForwardProp: (e) => Ao(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${me(r.color)}`], t[`size${me(r.size)}`], t[`${r.variant}Size${me(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return k({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": k({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : yt(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : yt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : yt(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": k({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Et.focusVisible}`]: k({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Et.disabled}`]: k({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${yt(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Et.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Et.disabled}`]: {
    boxShadow: "none"
  }
}), rl = ze("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${me(r.size)}`]];
  }
})(({
  ownerState: e
}) => k({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Vo(e))), nl = ze("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${me(r.size)}`]];
  }
})(({
  ownerState: e
}) => k({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Vo(e))), Lo = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = O.useContext(Ju), o = O.useContext(Zu), i = Sr(n, t), s = zr({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: l,
    disabled: m = !1,
    disableElevation: p = !1,
    disableFocusRipple: v = !1,
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: d = !1,
    size: x = "medium",
    startIcon: P,
    type: C,
    variant: S = "text"
  } = s, h = Ce(s, Qu), $ = k({}, s, {
    color: c,
    component: u,
    disabled: m,
    disableElevation: p,
    disableFocusRipple: v,
    fullWidth: d,
    size: x,
    type: C,
    variant: S
  }), w = el($), Z = P && /* @__PURE__ */ Te(rl, {
    className: w.startIcon,
    ownerState: $,
    children: P
  }), re = g && /* @__PURE__ */ Te(nl, {
    className: w.endIcon,
    ownerState: $,
    children: g
  }), K = o || "";
  return /* @__PURE__ */ Un(tl, k({
    ownerState: $,
    className: ve(n.className, w.root, l, K),
    component: u,
    disabled: m,
    focusRipple: !v,
    focusVisibleClassName: ve(w.focusVisible, f),
    ref: r,
    type: C
  }, h, {
    classes: w,
    children: [Z, a, re]
  }));
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: y.oneOfType([y.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: y.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: y.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: y.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: y.bool,
  /**
   * Element placed after the children.
   */
  endIcon: y.node,
  /**
   * @ignore
   */
  focusVisibleClassName: y.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: y.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: y.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: y.oneOfType([y.oneOf(["small", "medium", "large"]), y.string]),
  /**
   * Element placed before the children.
   */
  startIcon: y.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * @ignore
   */
  type: y.oneOfType([y.oneOf(["button", "reset", "submit"]), y.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: y.oneOfType([y.oneOf(["contained", "outlined", "text"]), y.string])
});
const ol = Lo, il = ze(ol)({
  backgroundColor: "#334699",
  color: "#FFF",
  textTransform: "none",
  borderRadius: "2px",
  fontWeight: "normal",
  ":hover": {
    backgroundColor: "#6679CC"
  },
  "&.MuiButton-sizeSmall": {
    fontSize: "14px",
    lineHeight: "18px",
    padding: "4px 15px"
  },
  "&.MuiButton-sizeMedium": {
    fontSize: "14px",
    lineHeight: "22px",
    padding: "4px 15px"
  },
  "&.MuiButton-sizeLarge": {
    fontSize: "14px",
    lineHeight: "32px",
    padding: "4px 15px"
  }
});
function ul({ children: e, ...t }) {
  return /* @__PURE__ */ Te(il, { ...t, disableRipple: !0, children: e });
}
export {
  ul as Button
};
//# sourceMappingURL=dspoc-mui.js.map
