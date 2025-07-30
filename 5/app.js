// ../../../../Library/Caches/deno/npm/registry.npmjs.org/preact/10.26.9/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n3, l3) {
  for (var u4 in l3) n3[u4] = l3[u4];
  return n3;
}
function g(n3) {
  n3 && n3.parentNode && n3.parentNode.removeChild(n3);
}
function _(l3, u4, t2) {
  var i4, r2, o3, e2 = {};
  for (o3 in u4) "key" == o3 ? i4 = u4[o3] : "ref" == o3 ? r2 = u4[o3] : e2[o3] = u4[o3];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e2[o3] && (e2[o3] = l3.defaultProps[o3]);
  return m(l3, e2, i4, r2, null);
}
function m(n3, t2, i4, r2, o3) {
  var e2 = {
    type: n3,
    props: t2,
    key: i4,
    ref: r2,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == o3 ? ++u : o3,
    __i: -1,
    __u: 0
  };
  return null == o3 && null != l.vnode && l.vnode(e2), e2;
}
function k(n3) {
  return n3.children;
}
function x(n3, l3) {
  this.props = n3, this.context = l3;
}
function S(n3, l3) {
  if (null == l3) return n3.__ ? S(n3.__, n3.__i + 1) : null;
  for (var u4; l3 < n3.__k.length; l3++) if (null != (u4 = n3.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n3.type ? S(n3) : null;
}
function C(n3) {
  var l3, u4;
  if (null != (n3 = n3.__) && null != n3.__c) {
    for (n3.__e = n3.__c.base = null, l3 = 0; l3 < n3.__k.length; l3++) if (null != (u4 = n3.__k[l3]) && null != u4.__e) {
      n3.__e = n3.__c.base = u4.__e;
      break;
    }
    return C(n3);
  }
}
function M(n3) {
  (!n3.__d && (n3.__d = true) && i.push(n3) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n3, u4, t2, r2, o3, f4, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n3 = i.shift(), s3 = i.length, n3.__d && (t2 = void 0, o3 = (r2 = (u4 = n3).__v).__e, f4 = [], c3 = [], u4.__P && ((t2 = d({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(t2), O(u4.__P, t2, r2, u4.__n, u4.__P.namespaceURI, 32 & r2.__u ? [
    o3
  ] : null, f4, null == o3 ? S(r2) : o3, !!(32 & r2.__u), c3), t2.__v = r2.__v, t2.__.__k[t2.__i] = t2, z(f4, t2, c3), t2.__e != o3 && C(t2)));
  $.__r = 0;
}
function I(n3, l3, u4, t2, i4, r2, o3, e2, f4, c3, s3) {
  var a3, h3, y2, w3, d3, g2, _2 = t2 && t2.__k || v, m2 = l3.length;
  for (f4 = P(u4, l3, _2, f4, m2), a3 = 0; a3 < m2; a3++) null != (y2 = u4.__k[a3]) && (h3 = -1 == y2.__i ? p : _2[y2.__i] || p, y2.__i = a3, g2 = O(n3, y2, h3, i4, r2, o3, e2, f4, c3, s3), w3 = y2.__e, y2.ref && h3.ref != y2.ref && (h3.ref && q(h3.ref, null, y2), s3.push(y2.ref, y2.__c || w3, y2)), null == d3 && null != w3 && (d3 = w3), 4 & y2.__u || h3.__k === y2.__k ? f4 = A(y2, f4, n3) : "function" == typeof y2.type && void 0 !== g2 ? f4 = g2 : w3 && (f4 = w3.nextSibling), y2.__u &= -7);
  return u4.__e = d3, f4;
}
function P(n3, l3, u4, t2, i4) {
  var r2, o3, e2, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
  for (n3.__k = new Array(i4), r2 = 0; r2 < i4; r2++) null != (o3 = l3[r2]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f4 = r2 + h3, (o3 = n3.__k[r2] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, {
    children: o3
  }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n3, o3.__b = n3.__b + 1, e2 = null, -1 != (c3 = o3.__i = L(o3, u4, f4, a3)) && (a3--, (e2 = u4[c3]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c3 && (i4 > s3 ? h3-- : i4 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n3.__k[r2] = null;
  if (a3) for (r2 = 0; r2 < s3; r2++) null != (e2 = u4[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), B(e2, e2));
  return t2;
}
function A(n3, l3, u4) {
  var t2, i4;
  if ("function" == typeof n3.type) {
    for (t2 = n3.__k, i4 = 0; t2 && i4 < t2.length; i4++) t2[i4] && (t2[i4].__ = n3, l3 = A(t2[i4], l3, u4));
    return l3;
  }
  n3.__e != l3 && (l3 && n3.type && !u4.contains(l3) && (l3 = S(n3)), u4.insertBefore(n3.__e, l3 || null), l3 = n3.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function L(n3, l3, u4, t2) {
  var i4, r2, o3 = n3.key, e2 = n3.type, f4 = l3[u4];
  if (null === f4 && null == n3.key || f4 && o3 == f4.key && e2 == f4.type && 0 == (2 & f4.__u)) return u4;
  if (t2 > (null != f4 && 0 == (2 & f4.__u) ? 1 : 0)) for (i4 = u4 - 1, r2 = u4 + 1; i4 >= 0 || r2 < l3.length; ) {
    if (i4 >= 0) {
      if ((f4 = l3[i4]) && 0 == (2 & f4.__u) && o3 == f4.key && e2 == f4.type) return i4;
      i4--;
    }
    if (r2 < l3.length) {
      if ((f4 = l3[r2]) && 0 == (2 & f4.__u) && o3 == f4.key && e2 == f4.type) return r2;
      r2++;
    }
  }
  return -1;
}
function T(n3, l3, u4) {
  "-" == l3[0] ? n3.setProperty(l3, null == u4 ? "" : u4) : n3[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
}
function j(n3, l3, u4, t2, i4) {
  var r2, o3;
  n: if ("style" == l3) if ("string" == typeof u4) n3.style.cssText = u4;
  else {
    if ("string" == typeof t2 && (n3.style.cssText = t2 = ""), t2) for (l3 in t2) u4 && l3 in u4 || T(n3.style, l3, "");
    if (u4) for (l3 in u4) t2 && u4[l3] == t2[l3] || T(n3.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r2 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n3 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n3.l || (n3.l = {}), n3.l[l3 + r2] = u4, u4 ? t2 ? u4.u = t2.u : (u4.u = c, n3.addEventListener(l3, r2 ? a : s, r2)) : n3.removeEventListener(l3, r2 ? a : s, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i4) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n3) try {
      n3[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n4) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n3.removeAttribute(l3) : n3.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function F(n3) {
  return function(u4) {
    if (this.l) {
      var t2 = this.l[u4.type + n3];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t2.u) return;
      return t2(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n3, u4, t2, i4, r2, o3, e2, f4, c3, s3) {
  var a3, h3, p3, v3, y2, _2, m2, b, S3, C3, M2, $2, P3, A2, H, L3, T3, j3 = u4.type;
  if (null != u4.constructor) return null;
  128 & t2.__u && (c3 = !!(32 & t2.__u), o3 = [
    f4 = u4.__e = t2.__e
  ]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof j3) try {
    if (b = u4.props, S3 = "prototype" in j3 && j3.prototype.render, C3 = (a3 = j3.contextType) && i4[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i4, t2.__c ? m2 = (h3 = u4.__c = t2.__c).__ = h3.__E : (S3 ? u4.__c = h3 = new j3(b, M2) : (u4.__c = h3 = new x(b, M2), h3.constructor = j3, h3.render = D), C3 && C3.sub(h3), h3.props = b, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i4, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S3 && null == h3.__s && (h3.__s = h3.state), S3 && null != j3.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j3.getDerivedStateFromProps(b, h3.__s))), v3 = h3.props, y2 = h3.state, h3.__v = u4, p3) S3 && null == j3.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S3 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S3 && null == j3.getDerivedStateFromProps && b !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b, M2), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b, h3.__s, M2) || u4.__v == t2.__v) {
        for (u4.__v != t2.__v && (h3.props = b, h3.state = h3.__s, h3.__d = false), u4.__e = t2.__e, u4.__k = t2.__k, u4.__k.some(function(n4) {
          n4 && (n4.__ = u4);
        }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
        h3._sb = [], h3.__h.length && e2.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b, h3.__s, M2), S3 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y2, _2);
      });
    }
    if (h3.context = M2, h3.props = b, h3.__P = n3, h3.__e = false, P3 = l.__r, A2 = 0, S3) {
      for (h3.state = h3.__s, h3.__d = false, P3 && P3(u4), a3 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++) h3.__h.push(h3._sb[H]);
      h3._sb = [];
    } else do {
      h3.__d = false, P3 && P3(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A2 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i4 = d(d({}, i4), h3.getChildContext())), S3 && !p3 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, y2)), L3 = a3, null != a3 && a3.type === k && null == a3.key && (L3 = N(a3.props.children)), f4 = I(n3, w(L3) ? L3 : [
      L3
    ], u4, t2, i4, r2, o3, e2, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e2.push(h3), m2 && (h3.__E = h3.__ = null);
  } catch (n4) {
    if (u4.__v = null, c3 || null != o3) if (n4.then) {
      for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o3[o3.indexOf(f4)] = null, u4.__e = f4;
    } else for (T3 = o3.length; T3--; ) g(o3[T3]);
    else u4.__e = t2.__e, u4.__k = t2.__k;
    l.__e(n4, u4, t2);
  }
  else null == o3 && u4.__v == t2.__v ? (u4.__k = t2.__k, u4.__e = t2.__e) : f4 = u4.__e = V(t2.__e, u4, t2, i4, r2, o3, e2, c3, s3);
  return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n3, u4, t2) {
  for (var i4 = 0; i4 < t2.length; i4++) q(t2[i4], t2[++i4], t2[++i4]);
  l.__c && l.__c(u4, n3), n3.some(function(u5) {
    try {
      n3 = u5.__h, u5.__h = [], n3.some(function(n4) {
        n4.call(u5);
      });
    } catch (n4) {
      l.__e(n4, u5.__v);
    }
  });
}
function N(n3) {
  return "object" != typeof n3 || null == n3 || n3.__b && n3.__b > 0 ? n3 : w(n3) ? n3.map(N) : d({}, n3);
}
function V(u4, t2, i4, r2, o3, e2, f4, c3, s3) {
  var a3, h3, v3, y2, d3, _2, m2, b = i4.props, k3 = t2.props, x3 = t2.type;
  if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a3 = 0; a3 < e2.length; a3++) if ((d3 = e2[a3]) && "setAttribute" in d3 == !!x3 && (x3 ? d3.localName == x3 : 3 == d3.nodeType)) {
      u4 = d3, e2[a3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k3);
    u4 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(t2, e2), c3 = false), e2 = null;
  }
  if (null == x3) b === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e2 = e2 && n.call(u4.childNodes), b = i4.props || p, !c3 && null != e2) for (b = {}, a3 = 0; a3 < u4.attributes.length; a3++) b[(d3 = u4.attributes[a3]).name] = d3.value;
    for (a3 in b) if (d3 = b[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = d3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      j(u4, a3, null, d3, o3);
    }
    for (a3 in k3) d3 = k3[a3], "children" == a3 ? y2 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _2 = d3 : "checked" == a3 ? m2 = d3 : c3 && "function" != typeof d3 || b[a3] === d3 || j(u4, a3, d3, b[a3], o3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t2.__k = [];
    else if (v3 && (u4.innerHTML = ""), I("template" == t2.type ? u4.content : u4, w(y2) ? y2 : [
      y2
    ], t2, i4, r2, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e2, f4, e2 ? e2[0] : i4.__k && S(i4, 0), c3, s3), null != e2) for (a3 = e2.length; a3--; ) g(e2[a3]);
    c3 || (a3 = "value", "progress" == x3 && null == _2 ? u4.removeAttribute("value") : null != _2 && (_2 !== u4[a3] || "progress" == x3 && !_2 || "option" == x3 && _2 != b[a3]) && j(u4, a3, _2, b[a3], o3), a3 = "checked", null != m2 && m2 != u4[a3] && j(u4, a3, m2, b[a3], o3));
  }
  return u4;
}
function q(n3, u4, t2) {
  try {
    if ("function" == typeof n3) {
      var i4 = "function" == typeof n3.__u;
      i4 && n3.__u(), i4 && null == u4 || (n3.__u = n3(u4));
    } else n3.current = u4;
  } catch (n4) {
    l.__e(n4, t2);
  }
}
function B(n3, u4, t2) {
  var i4, r2;
  if (l.unmount && l.unmount(n3), (i4 = n3.ref) && (i4.current && i4.current != n3.__e || q(i4, null, u4)), null != (i4 = n3.__c)) {
    if (i4.componentWillUnmount) try {
      i4.componentWillUnmount();
    } catch (n4) {
      l.__e(n4, u4);
    }
    i4.base = i4.__P = null;
  }
  if (i4 = n3.__k) for (r2 = 0; r2 < i4.length; r2++) i4[r2] && B(i4[r2], u4, t2 || "function" != typeof n3.type);
  t2 || g(n3.__e), n3.__c = n3.__ = n3.__e = void 0;
}
function D(n3, l3, u4) {
  return this.constructor(n3, u4);
}
n = v.slice, l = {
  __e: function(n3, l3, u4, t2) {
    for (var i4, r2, o3; l3 = l3.__; ) if ((i4 = l3.__c) && !i4.__) try {
      if ((r2 = i4.constructor) && null != r2.getDerivedStateFromError && (i4.setState(r2.getDerivedStateFromError(n3)), o3 = i4.__d), null != i4.componentDidCatch && (i4.componentDidCatch(n3, t2 || {}), o3 = i4.__d), o3) return i4.__E = i4;
    } catch (l4) {
      n3 = l4;
    }
    throw n3;
  }
}, u = 0, t = function(n3) {
  return null != n3 && null == n3.constructor;
}, x.prototype.setState = function(n3, l3) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n3 && (n3 = n3(d({}, u4), this.props)), n3 && d(u4, n3), null != n3 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n3) {
  this.__v && (this.__e = true, n3 && this.__h.push(n3), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n3, l3) {
  return n3.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/preact/10.26.9/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e2, t2, n3, o3, i4, u4) {
  t2 || (t2 = {});
  var a3, c3, p3 = t2;
  if ("ref" in p3) for (c3 in p3 = {}, t2) "ref" == c3 ? a3 = t2[c3] : p3[c3] = t2[c3];
  var l3 = {
    type: e2,
    props: p3,
    key: n3,
    ref: a3,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --f2,
    __i: -1,
    __u: 0,
    __source: i4,
    __self: u4
  };
  if ("function" == typeof e2 && (a3 = e2.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// ../../../../Library/Caches/deno/npm/registry.npmjs.org/preact-render-to-string/6.5.13/dist/index.module.js
var n2 = /[\s\n\\/='"\0<>]/;
var o2 = /^(xlink|xmlns|xml)([A-Z])/;
var i3 = /^(?:accessK|auto[A-Z]|cell|ch|col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z])/;
var a2 = /^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/;
var c2 = /* @__PURE__ */ new Set([
  "draggable",
  "spellcheck"
]);
var s2 = /["&<]/;
function l2(e2) {
  if (0 === e2.length || false === s2.test(e2)) return e2;
  for (var t2 = 0, r2 = 0, n3 = "", o3 = ""; r2 < e2.length; r2++) {
    switch (e2.charCodeAt(r2)) {
      case 34:
        o3 = "&quot;";
        break;
      case 38:
        o3 = "&amp;";
        break;
      case 60:
        o3 = "&lt;";
        break;
      default:
        continue;
    }
    r2 !== t2 && (n3 += e2.slice(t2, r2)), n3 += o3, t2 = r2 + 1;
  }
  return r2 !== t2 && (n3 += e2.slice(t2, r2)), n3;
}
var u3 = {};
var f3 = /* @__PURE__ */ new Set([
  "animation-iteration-count",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "box-flex",
  "box-flex-group",
  "box-ordinal-group",
  "column-count",
  "fill-opacity",
  "flex",
  "flex-grow",
  "flex-negative",
  "flex-order",
  "flex-positive",
  "flex-shrink",
  "flood-opacity",
  "font-weight",
  "grid-column",
  "grid-row",
  "line-clamp",
  "line-height",
  "opacity",
  "order",
  "orphans",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "widows",
  "z-index",
  "zoom"
]);
var p2 = /[A-Z]/g;
function h2(e2) {
  var t2 = "";
  for (var r2 in e2) {
    var n3 = e2[r2];
    if (null != n3 && "" !== n3) {
      var o3 = "-" == r2[0] ? r2 : u3[r2] || (u3[r2] = r2.replace(p2, "-$&").toLowerCase()), i4 = ";";
      "number" != typeof n3 || o3.startsWith("--") || f3.has(o3) || (i4 = "px;"), t2 = t2 + o3 + ":" + n3 + i4;
    }
  }
  return t2 || void 0;
}
function d2() {
  this.__d = true;
}
function v2(e2, t2) {
  return {
    __v: e2,
    context: t2,
    props: e2.props,
    setState: d2,
    forceUpdate: d2,
    __d: true,
    __h: new Array(0)
  };
}
var k2;
var w2;
var x2;
var C2;
var S2 = {};
var L2 = [];
var E = Array.isArray;
var T2 = Object.assign;
var j2 = "";
function D2(n3, o3, i4) {
  var a3 = l.__s;
  l.__s = true, k2 = l.__b, w2 = l.diffed, x2 = l.__r, C2 = l.unmount;
  var c3 = _(k, null);
  c3.__k = [
    n3
  ];
  try {
    var s3 = U(n3, o3 || S2, false, void 0, c3, false, i4);
    return E(s3) ? s3.join(j2) : s3;
  } catch (e2) {
    if (e2.then) throw new Error('Use "renderToStringAsync" for suspenseful rendering.');
    throw e2;
  } finally {
    l.__c && l.__c(n3, L2), l.__s = a3, L2.length = 0;
  }
}
function P2(e2, t2) {
  var r2, n3 = e2.type, o3 = true;
  return e2.__c ? (o3 = false, (r2 = e2.__c).state = r2.__s) : r2 = new n3(e2.props, t2), e2.__c = r2, r2.__v = e2, r2.props = e2.props, r2.context = t2, r2.__d = true, null == r2.state && (r2.state = S2), null == r2.__s && (r2.__s = r2.state), n3.getDerivedStateFromProps ? r2.state = T2({}, r2.state, n3.getDerivedStateFromProps(r2.props, r2.state)) : o3 && r2.componentWillMount ? (r2.componentWillMount(), r2.state = r2.__s !== r2.state ? r2.__s : r2.state) : !o3 && r2.componentWillUpdate && r2.componentWillUpdate(), x2 && x2(e2), r2.render(r2.props, r2.state, t2);
}
function U(t2, s3, u4, f4, p3, d3, _2) {
  if (null == t2 || true === t2 || false === t2 || t2 === j2) return j2;
  var m2 = typeof t2;
  if ("object" != m2) return "function" == m2 ? j2 : "string" == m2 ? l2(t2) : t2 + j2;
  if (E(t2)) {
    var y2, g2 = j2;
    p3.__k = t2;
    for (var b = t2.length, A2 = 0; A2 < b; A2++) {
      var L3 = t2[A2];
      if (null != L3 && "boolean" != typeof L3) {
        var D3, F2 = U(L3, s3, u4, f4, p3, d3, _2);
        "string" == typeof F2 ? g2 += F2 : (y2 || (y2 = new Array(b)), g2 && y2.push(g2), g2 = j2, E(F2) ? (D3 = y2).push.apply(D3, F2) : y2.push(F2));
      }
    }
    return y2 ? (g2 && y2.push(g2), y2) : g2;
  }
  if (void 0 !== t2.constructor) return j2;
  t2.__ = p3, k2 && k2(t2);
  var M2 = t2.type, W = t2.props;
  if ("function" == typeof M2) {
    var $2, z2, H, N2 = s3;
    if (M2 === k) {
      if ("tpl" in W) {
        for (var q2 = j2, B2 = 0; B2 < W.tpl.length; B2++) if (q2 += W.tpl[B2], W.exprs && B2 < W.exprs.length) {
          var I2 = W.exprs[B2];
          if (null == I2) continue;
          "object" != typeof I2 || void 0 !== I2.constructor && !E(I2) ? q2 += I2 : q2 += U(I2, s3, u4, f4, t2, d3, _2);
        }
        return q2;
      }
      if ("UNSTABLE_comment" in W) return "<!--" + l2(W.UNSTABLE_comment) + "-->";
      z2 = W.children;
    } else {
      if (null != ($2 = M2.contextType)) {
        var O2 = s3[$2.__c];
        N2 = O2 ? O2.props.value : $2.__;
      }
      var R = M2.prototype && "function" == typeof M2.prototype.render;
      if (R) z2 = P2(t2, N2), H = t2.__c;
      else {
        t2.__c = H = v2(t2, N2);
        for (var V2 = 0; H.__d && V2++ < 25; ) H.__d = false, x2 && x2(t2), z2 = M2.call(H, W, N2);
        H.__d = true;
      }
      if (null != H.getChildContext && (s3 = T2({}, s3, H.getChildContext())), R && l.errorBoundaries && (M2.getDerivedStateFromError || H.componentDidCatch)) {
        z2 = null != z2 && z2.type === k && null == z2.key && null == z2.props.tpl ? z2.props.children : z2;
        try {
          return U(z2, s3, u4, f4, t2, d3, _2);
        } catch (e2) {
          return M2.getDerivedStateFromError && (H.__s = M2.getDerivedStateFromError(e2)), H.componentDidCatch && H.componentDidCatch(e2, S2), H.__d ? (z2 = P2(t2, s3), null != (H = t2.__c).getChildContext && (s3 = T2({}, s3, H.getChildContext())), U(z2 = null != z2 && z2.type === k && null == z2.key && null == z2.props.tpl ? z2.props.children : z2, s3, u4, f4, t2, d3, _2)) : j2;
        } finally {
          w2 && w2(t2), C2 && C2(t2);
        }
      }
    }
    z2 = null != z2 && z2.type === k && null == z2.key && null == z2.props.tpl ? z2.props.children : z2;
    try {
      var K = U(z2, s3, u4, f4, t2, d3, _2);
      return w2 && w2(t2), l.unmount && l.unmount(t2), K;
    } catch (r2) {
      if (!d3 && _2 && _2.onError) {
        var G = _2.onError(r2, t2, function(e2, t3) {
          return U(e2, s3, u4, f4, t3, d3, _2);
        });
        if (void 0 !== G) return G;
        var J = l.__e;
        return J && J(r2, t2), j2;
      }
      if (!d3) throw r2;
      if (!r2 || "function" != typeof r2.then) throw r2;
      return r2.then(function e2() {
        try {
          return U(z2, s3, u4, f4, t2, d3, _2);
        } catch (r3) {
          if (!r3 || "function" != typeof r3.then) throw r3;
          return r3.then(function() {
            return U(z2, s3, u4, f4, t2, d3, _2);
          }, e2);
        }
      });
    }
  }
  var Q, X = "<" + M2, Y = j2;
  for (var ee in W) {
    var te = W[ee];
    if ("function" != typeof te || "class" === ee || "className" === ee) {
      switch (ee) {
        case "children":
          Q = te;
          continue;
        case "key":
        case "ref":
        case "__self":
        case "__source":
          continue;
        case "htmlFor":
          if ("for" in W) continue;
          ee = "for";
          break;
        case "className":
          if ("class" in W) continue;
          ee = "class";
          break;
        case "defaultChecked":
          ee = "checked";
          break;
        case "defaultSelected":
          ee = "selected";
          break;
        case "defaultValue":
        case "value":
          switch (ee = "value", M2) {
            case "textarea":
              Q = te;
              continue;
            case "select":
              f4 = te;
              continue;
            case "option":
              f4 != te || "selected" in W || (X += " selected");
          }
          break;
        case "dangerouslySetInnerHTML":
          Y = te && te.__html;
          continue;
        case "style":
          "object" == typeof te && (te = h2(te));
          break;
        case "acceptCharset":
          ee = "accept-charset";
          break;
        case "httpEquiv":
          ee = "http-equiv";
          break;
        default:
          if (o2.test(ee)) ee = ee.replace(o2, "$1:$2").toLowerCase();
          else {
            if (n2.test(ee)) continue;
            "-" !== ee[4] && !c2.has(ee) || null == te ? u4 ? a2.test(ee) && (ee = "panose1" === ee ? "panose-1" : ee.replace(/([A-Z])/g, "-$1").toLowerCase()) : i3.test(ee) && (ee = ee.toLowerCase()) : te += j2;
          }
      }
      null != te && false !== te && (X = true === te || te === j2 ? X + " " + ee : X + " " + ee + '="' + ("string" == typeof te ? l2(te) : te + j2) + '"');
    }
  }
  if (n2.test(M2)) throw new Error(M2 + " is not a valid HTML tag name in " + X + ">");
  if (Y || ("string" == typeof Q ? Y = l2(Q) : null != Q && false !== Q && true !== Q && (Y = U(Q, s3, "svg" === M2 || "foreignObject" !== M2 && u4, f4, t2, d3, _2))), w2 && w2(t2), C2 && C2(t2), !Y && Z.has(M2)) return X + "/>";
  var re = "</" + M2 + ">", ne = X + ">";
  return E(Y) ? [
    ne
  ].concat(Y, [
    re
  ]) : "string" != typeof Y ? [
    ne,
    Y,
    re
  ] : ne + Y + re;
}
var Z = /* @__PURE__ */ new Set([
  "area",
  "base",
  "br",
  "col",
  "command",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

// deno.svg
var deno_default = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" viewBox="0 0 441 441" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">\n    <g transform="matrix(1.02631,-2.08167e-17,2.08167e-17,1.02631,-0.525826,-0.525138)">\n        <path d="M37.965,296.635C26.441,271.766 20.009,244.065 20.009,214.873C20.009,207.318 20.439,199.863 21.278,192.531C22.129,185.123 23.39,177.852 25.036,170.742C34.286,130.852 55.801,95.64 85.384,69.301C110.233,47.207 140.674,31.444 174.043,24.299C187.212,21.486 200.872,20.006 214.875,20.006C219.783,20.011 224.727,20.2 229.701,20.579C253.285,22.38 275.571,28.317 295.904,37.625C312.305,45.143 327.486,54.87 341.064,66.426C375.17,95.48 398.957,135.953 406.867,181.369C408.757,192.255 409.742,203.45 409.742,214.873C409.738,219.789 409.548,224.74 409.168,229.721C407.731,248.545 403.659,266.542 397.34,283.379C388.521,306.83 375.308,328.136 358.706,346.294C337.113,368.342 309.673,378.152 286.755,377.744C270.09,377.447 253.784,370.816 242.516,361.114C226.42,347.253 219.918,331.409 217.69,313.729C217.136,309.334 217.461,297.358 219.748,289.066C221.453,282.885 225.777,270.948 232.1,265.727C224.703,262.541 215.183,255.604 212.182,252.274C211.445,251.455 211.54,250.174 212.2,249.292C212.861,248.41 214.02,248.062 215.057,248.435C221.416,250.618 229.161,252.771 237.327,254.137C248.067,255.932 261.424,258.194 274.955,258.859C307.946,260.479 342.407,245.67 353.103,216.207C363.798,186.744 359.649,157.602 321.279,140.121C282.909,122.64 265.185,101.856 234.183,89.32C213.934,81.131 191.396,85.992 168.257,98.78C105.931,133.223 50.092,242.048 75.833,342.873C76.201,344.252 75.58,345.705 74.328,346.392C73.156,347.036 71.713,346.852 70.741,345.962C63.25,337.731 56.454,328.857 50.445,319.433C45.796,312.139 41.623,304.524 37.965,296.635Z"/>\n    </g>\n    <g transform="matrix(0.0920293,0.00428099,-0.00428099,0.0920293,-28.1272,-500.301)">\n        <path d="M3053.7,5296.9C4371.65,5296.9 5441.66,6366.91 5441.66,7684.86C5441.66,9002.81 4371.65,10072.8 3053.7,10072.8C1735.75,10072.8 665.74,9002.81 665.74,7684.86C665.74,6366.91 1735.75,5296.9 3053.7,5296.9ZM3745.03,8143.22C3594.12,8142.82 3444.31,8124.57 3323.87,8110.15C3232.29,8099.18 3144.99,8079.23 3073.1,8058.23C3061.36,8054.62 3048.65,8059.09 3041.75,8069.24C3034.86,8079.4 3034.46,8093.71 3043.09,8102.44C3078.21,8137.94 3187.74,8210.21 3271.7,8241.83C3204.04,8303.2 3162.1,8438.28 3146.33,8507.94C3125.17,8601.4 3127.75,8734.83 3136.19,8783.45C3170.14,8979.04 3250.69,9151.99 3436.99,9297.9C3567.4,9400.03 3752.28,9465.38 3937.88,9460.06C4194.01,9452.71 4495.48,9328.51 4724.65,9070.17C5023.25,8710.58 5208.52,8252.45 5223.47,7749.5C5259.08,6551.9 4315.7,5550.69 3118.1,5515.08C1920.51,5479.47 919.301,6422.86 883.689,7620.45C865.246,8240.66 1109.37,8808.21 1515.43,9216.2C1526.73,9227.39 1544.21,9229.43 1557.78,9221.14C1571.35,9212.85 1577.51,9196.36 1572.7,9181.2C1234.07,8072.55 1799.11,6832.64 2474.84,6417.1C2725.71,6262.82 2973.99,6197.06 3203.56,6277.7C3555.04,6401.15 3763.03,6623.26 4199.06,6797.93C4635.09,6972.59 4696.35,7294.74 4592.58,7628.14C4488.81,7961.54 4113,8144.17 3745.03,8143.22ZM2917.17,6442.51C2777.75,6459.97 2693.93,6637.44 2687.08,6749.42C2680.18,6861.39 2744.03,7042.7 2926.19,7030.63C3139.52,7016.49 3195.89,6830.7 3164.24,6654.94C3140.48,6522.94 3033.73,6427.9 2917.17,6442.51Z" style="fill:white;"/>\n    </g>\n    <g transform="matrix(7.12289,0.543899,-0.543899,7.12289,-4867.49,-1040.55)">\n        <path d="M721.316,105.751C722.813,105.518 724.225,106.703 724.582,108.395C725.058,110.649 724.402,113.065 721.658,113.329C719.314,113.555 718.422,111.242 718.468,109.796C718.513,108.35 719.525,106.03 721.316,105.751Z"/>\n    </g>\n</svg>\n';

// app.jsx
var appElement = document.getElementById("app");
function DenoIcon() {
  return /* @__PURE__ */ u2("div", {
    style: {
      width: "100px",
      height: "100px"
    },
    dangerouslySetInnerHTML: {
      __html: `${deno_default}`
    }
  });
}
function Greet() {
  return /* @__PURE__ */ u2("div", {
    children: [
      /* @__PURE__ */ u2(DenoIcon, {}),
      "Hello from Deno 2.4 (with Preact)"
    ]
  });
}
var content = D2(Greet());
appElement.innerHTML = content;
