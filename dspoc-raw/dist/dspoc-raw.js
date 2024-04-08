import { jsx as h } from "react/jsx-runtime";
import { forwardRef as m, Children as i, isValidElement as f, createElement as a, cloneElement as $, Fragment as g } from "react";
function u() {
  return u = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var e in r)
        Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
    }
    return n;
  }, u.apply(this, arguments);
}
function v(n, t) {
  typeof n == "function" ? n(t) : n != null && (n.current = t);
}
function x(...n) {
  return (t) => n.forEach(
    (r) => v(r, t)
  );
}
const y = /* @__PURE__ */ m((n, t) => {
  const { children: r, ...e } = n, o = i.toArray(r), c = o.find(C);
  if (c) {
    const l = c.props.children, s = o.map((d) => d === c ? i.count(l) > 1 ? i.only(null) : /* @__PURE__ */ f(l) ? l.props.children : null : d);
    return /* @__PURE__ */ a(p, u({}, e, {
      ref: t
    }), /* @__PURE__ */ f(l) ? /* @__PURE__ */ $(l, void 0, s) : null);
  }
  return /* @__PURE__ */ a(p, u({}, e, {
    ref: t
  }), r);
});
y.displayName = "Slot";
const p = /* @__PURE__ */ m((n, t) => {
  const { children: r, ...e } = n;
  return /* @__PURE__ */ f(r) ? /* @__PURE__ */ $(r, {
    ...A(e, r.props),
    ref: t ? x(t, r.ref) : r.ref
  }) : i.count(r) > 1 ? i.only(null) : null;
});
p.displayName = "SlotClone";
const j = ({ children: n }) => /* @__PURE__ */ a(g, null, n);
function C(n) {
  return /* @__PURE__ */ f(n) && n.type === j;
}
function A(n, t) {
  const r = {
    ...t
  };
  for (const e in t) {
    const o = n[e], c = t[e];
    /^on[A-Z]/.test(e) ? o && c ? r[e] = (...s) => {
      c(...s), o(...s);
    } : o && (r[e] = o) : e === "style" ? r[e] = {
      ...o,
      ...c
    } : e === "className" && (r[e] = [
      o,
      c
    ].filter(Boolean).join(" "));
  }
  return {
    ...n,
    ...r
  };
}
function b(n) {
  var t, r, e = "";
  if (typeof n == "string" || typeof n == "number")
    e += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var o = n.length;
      for (t = 0; t < o; t++)
        n[t] && (r = b(n[t])) && (e && (e += " "), e += r);
    } else
      for (r in n)
        n[r] && (e && (e += " "), e += r);
  return e;
}
function E() {
  for (var n, t, r = 0, e = "", o = arguments.length; r < o; r++)
    (n = arguments[r]) && (t = b(n)) && (e && (e += " "), e += t);
  return e;
}
function P({
  children: n,
  variant: t = "primary",
  size: r = "md",
  asChild: e,
  ...o
}) {
  return /* @__PURE__ */ h(
    e ? y : "button",
    {
      className: E("button", {
        [`variant-${t}`]: !0,
        [`size-${r}`]: !0
      }),
      ...o,
      children: n
    }
  );
}
export {
  P as Button
};
//# sourceMappingURL=dspoc-raw.js.map
