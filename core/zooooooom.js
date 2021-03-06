
//   Z O O O O O O O M   //

!function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("Zooom", [], r) : "object" == typeof exports ? exports.Zooom = r() : t.Zooom = r()
}(window, function() {
    return function(t) {
        var r = {};
        function n(e) {
            if (r[e])
                return r[e].exports;
            var o = r[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = t, n.c = r, n.d = function(t, r, e) {
            n.o(t, r) || Object.defineProperty(t, r, {
                enumerable: !0,
                get: e
            })
        }, n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function(t, r) {
            if (1 & r && (t = n(t)), 8 & r)
                return t;
            if (4 & r && "object" == typeof t && t && t.__esModule)
                return t;
            var e = Object.create(null);
            if (n.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & r && "string" != typeof t)
                for (var o in t)
                    n.d(e, o, function(r) {
                        return t[r]
                    }.bind(null, o));
            return e
        }, n.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return n.d(r, "a", r), r
        }, n.o = function(t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }, n.p = "", n(n.s = 90)
    }([function(t, r, n) {
        var e = n(1),
            o = n(13),
            i = n(26),
            u = n(43),
            c = e.Symbol,
            a = o("wks");
        t.exports = function(t) {
            return a[t] || (a[t] = u && c[t] || (u ? c : i)("Symbol." + t))
        }
    }, function(t, r, n) {
        (function(r) {
            var n = "object",
                e = function(t) {
                    return t && t.Math == Math && t
                };
            t.exports = e(typeof globalThis == n && globalThis) || e(typeof window == n && window) || e(typeof self == n && self) || e(typeof r == n && r) || Function("return this")()
        }).call(this, n(56))
    }, function(t, r) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, r) {
            return n.call(t, r)
        }
    }, function(t, r) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, r) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, r, n) {
        var e = n(8),
            o = n(7),
            i = n(11);
        t.exports = e ? function(t, r, n) {
            return o.f(t, r, i(1, n))
        } : function(t, r, n) {
            return t[r] = n, t
        }
    }, function(t, r, n) {
        var e = n(4);
        t.exports = function(t) {
            if (!e(t))
                throw TypeError(String(t) + " is not an object");
            return t
        }
    }, function(t, r, n) {
        var e = n(8),
            o = n(38),
            i = n(6),
            u = n(15),
            c = Object.defineProperty;
        r.f = e ? c : function(t, r, n) {
            if (i(t), r = u(r, !0), i(n), o)
                try {
                    return c(t, r, n)
                } catch (t) {}
            if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    }, function(t, r, n) {
        var e = n(3);
        t.exports = !e(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, r, n) {
        var e = n(57),
            o = n(24);
        t.exports = function(t) {
            return e(o(t))
        }
    }, function(t, r, n) {
        var e = n(1),
            o = n(21).f,
            i = n(5),
            u = n(12),
            c = n(25),
            a = n(41),
            f = n(62);
        t.exports = function(t, r) {
            var n,
                s,
                l,
                p,
                y,
                v = t.target,
                d = t.global,
                h = t.stat;
            if (n = d ? e : h ? e[v] || c(v, {}) : (e[v] || {}).prototype)
                for (s in r) {
                    if (p = r[s], l = t.noTargetGet ? (y = o(n, s)) && y.value : n[s], !f(d ? s : v + (h ? "." : "#") + s, t.forced) && void 0 !== l) {
                        if (typeof p == typeof l)
                            continue;
                        a(p, l)
                    }
                    (t.sham || l && l.sham) && i(p, "sham", !0), u(n, s, p, t)
                }
        }
    }, function(t, r) {
        t.exports = function(t, r) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: r
            }
        }
    }, function(t, r, n) {
        var e = n(1),
            o = n(13),
            i = n(5),
            u = n(2),
            c = n(25),
            a = n(40),
            f = n(17),
            s = f.get,
            l = f.enforce,
            p = String(a).split("toString");
        o("inspectSource", function(t) {
            return a.call(t)
        }), (t.exports = function(t, r, n, o) {
            var a = !!o && !!o.unsafe,
                f = !!o && !!o.enumerable,
                s = !!o && !!o.noTargetGet;
            "function" == typeof n && ("string" != typeof r || u(n, "name") || i(n, "name", r), l(n).source = p.join("string" == typeof r ? r : "")), t !== e ? (a ? !s && t[r] && (f = !0) : delete t[r], f ? t[r] = n : i(t, r, n)) : f ? t[r] = n : c(r, n)
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && s(this).source || a.call(this)
        })
    }, function(t, r, n) {
        var e = n(1),
            o = n(25),
            i = n(16),
            u = e["__core-js_shared__"] || o("__core-js_shared__", {});
        (t.exports = function(t, r) {
            return u[t] || (u[t] = void 0 !== r ? r : {})
        })("versions", []).push({
            version: "3.1.3",
            mode: i ? "pure" : "global",
            copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, r) {
        t.exports = {}
    }, function(t, r, n) {
        var e = n(4);
        t.exports = function(t, r) {
            if (!e(t))
                return t;
            var n,
                o;
            if (r && "function" == typeof (n = t.toString) && !e(o = n.call(t)))
                return o;
            if ("function" == typeof (n = t.valueOf) && !e(o = n.call(t)))
                return o;
            if (!r && "function" == typeof (n = t.toString) && !e(o = n.call(t)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, r) {
        t.exports = !1
    }, function(t, r, n) {
        var e,
            o,
            i,
            u = n(58),
            c = n(1),
            a = n(4),
            f = n(5),
            s = n(2),
            l = n(18),
            p = n(19),
            y = c.WeakMap;
        if (u) {
            var v = new y,
                d = v.get,
                h = v.has,
                m = v.set;
            e = function(t, r) {
                return m.call(v, t, r), r
            }, o = function(t) {
                return d.call(v, t) || {}
            }, i = function(t) {
                return h.call(v, t)
            }
        } else {
            var g = l("state");
            p[g] = !0, e = function(t, r) {
                return f(t, g, r), r
            }, o = function(t) {
                return s(t, g) ? t[g] : {}
            }, i = function(t) {
                return s(t, g)
            }
        }
        t.exports = {
            set: e,
            get: o,
            has: i,
            enforce: function(t) {
                return i(t) ? o(t) : e(t, {})
            },
            getterFor: function(t) {
                return function(r) {
                    var n;
                    if (!a(r) || (n = o(r)).type !== t)
                        throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        }
    }, function(t, r, n) {
        var e = n(13),
            o = n(26),
            i = e("keys");
        t.exports = function(t) {
            return i[t] || (i[t] = o(t))
        }
    }, function(t, r) {
        t.exports = {}
    }, function(t, r, n) {
        var e = n(24);
        t.exports = function(t) {
            return Object(e(t))
        }
    }, function(t, r, n) {
        var e = n(8),
            o = n(22),
            i = n(11),
            u = n(9),
            c = n(15),
            a = n(2),
            f = n(38),
            s = Object.getOwnPropertyDescriptor;
        r.f = e ? s : function(t, r) {
            if (t = u(t), r = c(r, !0), f)
                try {
                    return s(t, r)
                } catch (t) {}
            if (a(t, r))
                return i(!o.f.call(t, r), t[r])
        }
    }, function(t, r, n) {
        "use strict";
        var e = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !e.call({
                1: 2
            }, 1);
        r.f = i ? function(t) {
            var r = o(this, t);
            return !!r && r.enumerable
        } : e
    }, function(t, r) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, r) {
        t.exports = function(t) {
            if (null == t)
                throw TypeError("Can't call method on " + t);
            return t
        }
    }, function(t, r, n) {
        var e = n(1),
            o = n(5);
        t.exports = function(t, r) {
            try {
                o(e, t, r)
            } catch (n) {
                e[t] = r
            }
            return r
        }
    }, function(t, r) {
        var n = 0,
            e = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + e).toString(36))
        }
    }, function(t, r, n) {
        var e = n(42),
            o = n(30).concat("length", "prototype");
        r.f = Object.getOwnPropertyNames || function(t) {
            return e(t, o)
        }
    }, function(t, r, n) {
        var e = n(29),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(e(t), 9007199254740991) : 0
        }
    }, function(t, r) {
        var n = Math.ceil,
            e = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? e : n)(t)
        }
    }, function(t, r) {
        t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, function(t, r) {
        r.f = Object.getOwnPropertySymbols
    }, function(t, r, n) {
        var e = n(7).f,
            o = n(2),
            i = n(0)("toStringTag");
        t.exports = function(t, r, n) {
            t && !o(t = n ? t : t.prototype, i) && e(t, i, {
                configurable: !0,
                value: r
            })
        }
    }, function(t, r, n) {
        var e = n(42),
            o = n(30);
        t.exports = Object.keys || function(t) {
            return e(t, o)
        }
    }, function(t, r, n) {
        var e = n(23);
        t.exports = Array.isArray || function(t) {
            return "Array" == e(t)
        }
    }, function(t, r, n) {
        var e = n(6),
            o = n(65),
            i = n(30),
            u = n(19),
            c = n(66),
            a = n(39),
            f = n(18)("IE_PROTO"),
            s = function() {},
            l = function() {
                var t,
                    r = a("iframe"),
                    n = i.length;
                for (r.style.display = "none", c.appendChild(r), r.src = String("javascript:"), (t = r.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;)
                    delete l.prototype[i[n]];
                return l()
            };
        t.exports = Object.create || function(t, r) {
            var n;
            return null !== t ? (s.prototype = e(t), n = new s, s.prototype = null, n[f] = t) : n = l(), void 0 === r ? n : o(n, r)
        }, u[f] = !0
    }, function(t, r, n) {
        "use strict";
        var e = n(9),
            o = n(79),
            i = n(14),
            u = n(17),
            c = n(50),
            a = u.set,
            f = u.getterFor("Array Iterator");
        t.exports = c(Array, "Array", function(t, r) {
            a(this, {
                type: "Array Iterator",
                target: e(t),
                index: 0,
                kind: r
            })
        }, function() {
            var t = f(this),
                r = t.target,
                n = t.kind,
                e = t.index++;
            return !r || e >= r.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: e,
                done: !1
            } : "values" == n ? {
                value: r[e],
                done: !1
            } : {
                value: [e, r[e]],
                done: !1
            }
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function(t, r, n) {
        "use strict";
        var e = n(10),
            o = n(1),
            i = n(2),
            u = n(43),
            c = n(8),
            a = n(16),
            f = n(12),
            s = n(19),
            l = n(3),
            p = n(13),
            y = n(32),
            v = n(26),
            d = n(0),
            h = n(44),
            m = n(45),
            g = n(64),
            b = n(34),
            x = n(6),
            S = n(4),
            w = n(20),
            O = n(9),
            j = n(15),
            T = n(11),
            A = n(35),
            E = n(27),
            P = n(67),
            L = n(21),
            k = n(7),
            I = n(22),
            _ = n(5),
            C = n(33),
            M = n(31),
            W = n(18),
            z = n(17),
            N = W("hidden"),
            R = z.set,
            F = z.getterFor("Symbol"),
            D = L.f,
            Z = k.f,
            G = P.f,
            B = o.Symbol,
            H = o.JSON,
            V = H && H.stringify,
            q = d("toPrimitive"),
            U = I.f,
            Y = p("symbol-registry"),
            J = p("symbols"),
            $ = p("op-symbols"),
            K = p("wks"),
            Q = Object.prototype,
            X = o.QObject,
            tt = !X || !X.prototype || !X.prototype.findChild,
            rt = c && l(function() {
                return 7 != A(Z({}, "a", {
                    get: function() {
                        return Z(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, r, n) {
                var e = D(Q, r);
                e && delete Q[r], Z(t, r, n), e && t !== Q && Z(Q, r, e)
            } : Z,
            nt = function(t, r) {
                var n = J[t] = A(B.prototype);
                return R(n, {
                    type: "Symbol",
                    tag: t,
                    description: r
                }), c || (n.description = r), n
            },
            et = u && "symbol" == typeof B.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return Object(t) instanceof B
            },
            ot = function(t, r, n) {
                return t === Q && ot($, r, n), x(t), r = j(r, !0), x(n), i(J, r) ? (n.enumerable ? (i(t, N) && t[N][r] && (t[N][r] = !1), n = A(n, {
                    enumerable: T(0, !1)
                })) : (i(t, N) || Z(t, N, T(1, {})), t[N][r] = !0), rt(t, r, n)) : Z(t, r, n)
            },
            it = function(t, r) {
                x(t);
                for (var n, e = g(r = O(r)), o = 0, i = e.length; i > o;)
                    ot(t, n = e[o++], r[n]);
                return t
            },
            ut = function(t) {
                var r = U.call(this, t = j(t, !0));
                return !(this === Q && i(J, t) && !i($, t)) && (!(r || !i(this, t) || !i(J, t) || i(this, N) && this[N][t]) || r)
            },
            ct = function(t, r) {
                if (t = O(t), r = j(r, !0), t !== Q || !i(J, r) || i($, r)) {
                    var n = D(t, r);
                    return !n || !i(J, r) || i(t, N) && t[N][r] || (n.enumerable = !0), n
                }
            },
            at = function(t) {
                for (var r, n = G(O(t)), e = [], o = 0; n.length > o;)
                    i(J, r = n[o++]) || i(s, r) || e.push(r);
                return e
            },
            ft = function(t) {
                for (var r, n = t === Q, e = G(n ? $ : O(t)), o = [], u = 0; e.length > u;)
                    !i(J, r = e[u++]) || n && !i(Q, r) || o.push(J[r]);
                return o
            };
        u || (f((B = function() {
            if (this instanceof B)
                throw TypeError("Symbol is not a constructor");
            var t = void 0 === arguments[0] ? void 0 : String(arguments[0]),
                r = v(t),
                n = function(t) {
                    this === Q && n.call($, t), i(this, N) && i(this[N], r) && (this[N][r] = !1), rt(this, r, T(1, t))
                };
            return c && tt && rt(Q, r, {
                configurable: !0,
                set: n
            }), nt(r, t)
        }).prototype, "toString", function() {
            return F(this).tag
        }), I.f = ut, k.f = ot, L.f = ct, E.f = P.f = at, M.f = ft, c && (Z(B.prototype, "description", {
            configurable: !0,
            get: function() {
                return F(this).description
            }
        }), a || f(Q, "propertyIsEnumerable", ut, {
            unsafe: !0
        })), h.f = function(t) {
            return nt(d(t), t)
        }), e({
            global: !0,
            wrap: !0,
            forced: !u,
            sham: !u
        }, {
            Symbol: B
        });
        for (var st = C(K), lt = 0; st.length > lt;)
            m(st[lt++]);
        e({
            target: "Symbol",
            stat: !0,
            forced: !u
        }, {
            for: function(t) {
                return i(Y, t += "") ? Y[t] : Y[t] = B(t)
            },
            keyFor: function(t) {
                if (!et(t))
                    throw TypeError(t + " is not a symbol");
                for (var r in Y)
                    if (Y[r] === t)
                        return r
            },
            useSetter: function() {
                tt = !0
            },
            useSimple: function() {
                tt = !1
            }
        }), e({
            target: "Object",
            stat: !0,
            forced: !u,
            sham: !c
        }, {
            create: function(t, r) {
                return void 0 === r ? A(t) : it(A(t), r)
            },
            defineProperty: ot,
            defineProperties: it,
            getOwnPropertyDescriptor: ct
        }), e({
            target: "Object",
            stat: !0,
            forced: !u
        }, {
            getOwnPropertyNames: at,
            getOwnPropertySymbols: ft
        }), e({
            target: "Object",
            stat: !0,
            forced: l(function() {
                M.f(1)
            })
        }, {
            getOwnPropertySymbols: function(t) {
                return M.f(w(t))
            }
        }), H && e({
            target: "JSON",
            stat: !0,
            forced: !u || l(function() {
                var t = B();
                return "[null]" != V([t]) || "{}" != V({
                        a: t
                    }) || "{}" != V(Object(t))
            })
        }, {
            stringify: function(t) {
                for (var r, n, e = [t], o = 1; arguments.length > o;)
                    e.push(arguments[o++]);
                if (n = r = e[1], (S(r) || void 0 !== t) && !et(t))
                    return b(r) || (r = function(t, r) {
                        if ("function" == typeof n && (r = n.call(this, t, r)), !et(r))
                            return r
                    }), e[1] = r, V.apply(H, e)
            }
        }), B.prototype[q] || _(B.prototype, q, B.prototype.valueOf), y(B, "Symbol"), s[N] = !0
    }, function(t, r, n) {
        var e = n(8),
            o = n(3),
            i = n(39);
        t.exports = !e && !o(function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, r, n) {
        var e = n(1),
            o = n(4),
            i = e.document,
            u = o(i) && o(i.createElement);
        t.exports = function(t) {
            return u ? i.createElement(t) : {}
        }
    }, function(t, r, n) {
        var e = n(13);
        t.exports = e("native-function-to-string", Function.toString)
    }, function(t, r, n) {
        var e = n(2),
            o = n(59),
            i = n(21),
            u = n(7);
        t.exports = function(t, r) {
            for (var n = o(r), c = u.f, a = i.f, f = 0; f < n.length; f++) {
                var s = n[f];
                e(t, s) || c(t, s, a(r, s))
            }
        }
    }, function(t, r, n) {
        var e = n(2),
            o = n(9),
            i = n(60),
            u = n(19),
            c = i(!1);
        t.exports = function(t, r) {
            var n,
                i = o(t),
                a = 0,
                f = [];
            for (n in i)
                !e(u, n) && e(i, n) && f.push(n);
            for (; r.length > a;)
                e(i, n = r[a++]) && (~c(f, n) || f.push(n));
            return f
        }
    }, function(t, r, n) {
        var e = n(3);
        t.exports = !!Object.getOwnPropertySymbols && !e(function() {
            return !String(Symbol())
        })
    }, function(t, r, n) {
        r.f = n(0)
    }, function(t, r, n) {
        var e = n(63),
            o = n(2),
            i = n(44),
            u = n(7).f;
        t.exports = function(t) {
            var r = e.Symbol || (e.Symbol = {});
            o(r, t) || u(r, t, {
                value: i.f(t)
            })
        }
    }, function(t, r, n) {
        "use strict";
        var e = n(10),
            o = n(8),
            i = n(1),
            u = n(2),
            c = n(4),
            a = n(7).f,
            f = n(41),
            s = i.Symbol;
        if (o && "function" == typeof s && (!("description" in s.prototype) || void 0 !== s().description)) {
            var l = {},
                p = function() {
                    var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                        r = this instanceof p ? new s(t) : void 0 === t ? s() : s(t);
                    return "" === t && (l[r] = !0), r
                };
            f(p, s);
            var y = p.prototype = s.prototype;
            y.constructor = p;
            var v = y.toString,
                d = "Symbol(test)" == String(s("test")),
                h = /^Symbol\((.*)\)[^)]+$/;
            a(y, "description", {
                configurable: !0,
                get: function() {
                    var t = c(this) ? this.valueOf() : this,
                        r = v.call(t);
                    if (u(l, t))
                        return "";
                    var n = d ? r.slice(7, -1) : r.replace(h, "$1");
                    return "" === n ? void 0 : n
                }
            }), e({
                global: !0,
                forced: !0
            }, {
                Symbol: p
            })
        }
    }, function(t, r, n) {
        n(45)("iterator")
    }, function(t, r, n) {
        "use strict";
        var e = n(15),
            o = n(7),
            i = n(11);
        t.exports = function(t, r, n) {
            var u = e(r);
            u in t ? o.f(t, u, i(0, n)) : t[u] = n
        }
    }, function(t, r, n) {
        var e = n(23),
            o = n(0)("toStringTag"),
            i = "Arguments" == e(function() {
                return arguments
            }());
        t.exports = function(t) {
            var r,
                n,
                u;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, r) {
                try {
                    return t[r]
                } catch (t) {}
            }(r = Object(t), o)) ? n : i ? e(r) : "Object" == (u = e(r)) && "function" == typeof r.callee ? "Arguments" : u
        }
    }, function(t, r, n) {
        "use strict";
        var e = n(10),
            o = n(80),
            i = n(52),
            u = n(82),
            c = n(32),
            a = n(5),
            f = n(12),
            s = n(0),
            l = n(16),
            p = n(14),
            y = n(51),
            v = y.IteratorPrototype,
            d = y.BUGGY_SAFARI_ITERATORS,
            h = s("iterator"),
            m = function() {
                return this
            };
        t.exports = function(t, r, n, s, y, g, b) {
            o(n, r, s);
            var x,
                S,
                w,
                O = function(t) {
                    if (t === y && P)
                        return P;
                    if (!d && t in A)
                        return A[t];
                    switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new n(this, t)
                        }
                    }
                    return function() {
                        return new n(this)
                    }
                },
                j = r + " Iterator",
                T = !1,
                A = t.prototype,
                E = A[h] || A["@@iterator"] || y && A[y],
                P = !d && E || O(y),
                L = "Array" == r && A.entries || E;
            if (L && (x = i(L.call(new t)), v !== Object.prototype && x.next && (l || i(x) === v || (u ? u(x, v) : "function" != typeof x[h] && a(x, h, m)), c(x, j, !0, !0), l && (p[j] = m))), "values" == y && E && "values" !== E.name && (T = !0, P = function() {
                return E.call(this)
            }), l && !b || A[h] === P || a(A, h, P), p[r] = P, y)
                if (S = {
                    values: O("values"),
                    keys: g ? P : O("keys"),
                    entries: O("entries")
                }, b)
                    for (w in S)
                        !d && !T && w in A || f(A, w, S[w]);
                else
                    e({
                        target: r,
                        proto: !0,
                        forced: d || T
                    }, S);
            return S
        }
    }, function(t, r, n) {
        "use strict";
        var e,
            o,
            i,
            u = n(52),
            c = n(5),
            a = n(2),
            f = n(0),
            s = n(16),
            l = f("iterator"),
            p = !1;
        [].keys && ("next" in (i = [].keys()) ? (o = u(u(i))) !== Object.prototype && (e = o) : p = !0), null == e && (e = {}), s || a(e, l) || c(e, l, function() {
            return this
        }), t.exports = {
            IteratorPrototype: e,
            BUGGY_SAFARI_ITERATORS: p
        }
    }, function(t, r, n) {
        var e = n(2),
            o = n(20),
            i = n(18),
            u = n(81),
            c = i("IE_PROTO"),
            a = Object.prototype;
        t.exports = u ? Object.getPrototypeOf : function(t) {
            return t = o(t), e(t, c) ? t[c] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }, function(t, r, n) {
        var e = n(12),
            o = n(84),
            i = Object.prototype;
        o !== i.toString && e(i, "toString", o, {
            unsafe: !0
        })
    }, function(t, r, n) {
        "use strict";
        var e = n(87),
            o = n(17),
            i = n(50),
            u = o.set,
            c = o.getterFor("String Iterator");
        i(String, "String", function(t) {
            u(this, {
                type: "String Iterator",
                string: String(t),
                index: 0
            })
        }, function() {
            var t,
                r = c(this),
                n = r.string,
                o = r.index;
            return o >= n.length ? {
                value: void 0,
                done: !0
            } : (t = e(n, o, !0), r.index += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, r, n) {
        var e = n(1),
            o = n(88),
            i = n(36),
            u = n(5),
            c = n(0),
            a = c("iterator"),
            f = c("toStringTag"),
            s = i.values;
        for (var l in o) {
            var p = e[l],
                y = p && p.prototype;
            if (y) {
                if (y[a] !== s)
                    try {
                        u(y, a, s)
                    } catch (t) {
                        y[a] = s
                    }
                if (y[f] || u(y, f, l), o[l])
                    for (var v in i)
                        if (y[v] !== i[v])
                            try {
                                u(y, v, i[v])
                            } catch (t) {
                                y[v] = i[v]
                            }
            }
        }
    }, function(t, r) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, r, n) {
        var e = n(3),
            o = n(23),
            i = "".split;
        t.exports = e(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == o(t) ? i.call(t, "") : Object(t)
        } : Object
    }, function(t, r, n) {
        var e = n(1),
            o = n(40),
            i = e.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o.call(i))
    }, function(t, r, n) {
        var e = n(1),
            o = n(27),
            i = n(31),
            u = n(6),
            c = e.Reflect;
        t.exports = c && c.ownKeys || function(t) {
            var r = o.f(u(t)),
                n = i.f;
            return n ? r.concat(n(t)) : r
        }
    }, function(t, r, n) {
        var e = n(9),
            o = n(28),
            i = n(61);
        t.exports = function(t) {
            return function(r, n, u) {
                var c,
                    a = e(r),
                    f = o(a.length),
                    s = i(u, f);
                if (t && n != n) {
                    for (; f > s;)
                        if ((c = a[s++]) != c)
                            return !0
                } else
                    for (; f > s; s++)
                        if ((t || s in a) && a[s] === n)
                            return t || s || 0;
                return !t && -1
            }
        }
    }, function(t, r, n) {
        var e = n(29),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, r) {
            var n = e(t);
            return n < 0 ? o(n + r, 0) : i(n, r)
        }
    }, function(t, r, n) {
        var e = n(3),
            o = /#|\.prototype\./,
            i = function(t, r) {
                var n = c[u(t)];
                return n == f || n != a && ("function" == typeof r ? e(r) : !!r)
            },
            u = i.normalize = function(t) {
                return String(t).replace(o, ".").toLowerCase()
            },
            c = i.data = {},
            a = i.NATIVE = "N",
            f = i.POLYFILL = "P";
        t.exports = i
    }, function(t, r, n) {
        t.exports = n(1)
    }, function(t, r, n) {
        var e = n(33),
            o = n(31),
            i = n(22);
        t.exports = function(t) {
            var r = e(t),
                n = o.f;
            if (n)
                for (var u, c = n(t), a = i.f, f = 0; c.length > f;)
                    a.call(t, u = c[f++]) && r.push(u);
            return r
        }
    }, function(t, r, n) {
        var e = n(8),
            o = n(7),
            i = n(6),
            u = n(33);
        t.exports = e ? Object.defineProperties : function(t, r) {
            i(t);
            for (var n, e = u(r), c = e.length, a = 0; c > a;)
                o.f(t, n = e[a++], r[n]);
            return t
        }
    }, function(t, r, n) {
        var e = n(1).document;
        t.exports = e && e.documentElement
    }, function(t, r, n) {
        var e = n(9),
            o = n(27).f,
            i = {}.toString,
            u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return u && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (t) {
                    return u.slice()
                }
            }(t) : o(e(t))
        }
    }, function(t, r, n) {
        "use strict";
        var e = n(10),
            o = n(3),
            i = n(34),
            u = n(4),
            c = n(20),
            a = n(28),
            f = n(48),
            s = n(69),
            l = n(70),
            p = n(0)("isConcatSpreadable"),
            y = !o(function() {
                var t = [];
                return t[p] = !1, t.concat()[0] !== t
            }),
            v = l("concat"),
            d = function(t) {
                if (!u(t))
                    return !1;
                var r = t[p];
                return void 0 !== r ? !!r : i(t)
            };
        e({
            target: "Array",
            proto: !0,
            forced: !y || !v
        }, {
            concat: function(t) {
                var r,
                    n,
                    e,
                    o,
                    i,
                    u = c(this),
                    l = s(u, 0),
                    p = 0;
                for (r = -1, e = arguments.length; r < e; r++)
                    if (i = -1 === r ? u : arguments[r], d(i)) {
                        if (p + (o = a(i.length)) > 9007199254740991)
                            throw TypeError("Maximum allowed index exceeded");
                        for (n = 0; n < o; n++, p++)
                            n in i && f(l, p, i[n])
                    } else {
                        if (p >= 9007199254740991)
                            throw TypeError("Maximum allowed index exceeded");
                        f(l, p++, i)
                    }
                return l.length = p, l
            }
        })
    }, function(t, r, n) {
        var e = n(4),
            o = n(34),
            i = n(0)("species");
        t.exports = function(t, r) {
            var n;
            return o(t) && ("function" != typeof (n = t.constructor) || n !== Array && !o(n.prototype) ? e(n) && null === (n = n[i]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === r ? 0 : r)
        }
    }, function(t, r, n) {
        var e = n(3),
            o = n(0)("species");
        t.exports = function(t) {
            return !e(function() {
                var r = [];
                return (r.constructor = {})[o] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== r[t](Boolean).foo
            })
        }
    }, function(t, r, n) {
        var e = n(10),
            o = n(72);
        e({
            target: "Array",
            stat: !0,
            forced: !n(78)(function(t) {
                Array.from(t)
            })
        }, {
            from: o
        })
    }, function(t, r, n) {
        "use strict";
        var e = n(73),
            o = n(20),
            i = n(75),
            u = n(76),
            c = n(28),
            a = n(48),
            f = n(77);
        t.exports = function(t) {
            var r,
                n,
                s,
                l,
                p = o(t),
                y = "function" == typeof this ? this : Array,
                v = arguments.length,
                d = v > 1 ? arguments[1] : void 0,
                h = void 0 !== d,
                m = 0,
                g = f(p);
            if (h && (d = e(d, v > 2 ? arguments[2] : void 0, 2)), null == g || y == Array && u(g))
                for (n = new y(r = c(p.length)); r > m; m++)
                    a(n, m, h ? d(p[m], m) : p[m]);
            else
                for (l = g.call(p), n = new y; !(s = l.next()).done; m++)
                    a(n, m, h ? i(l, d, [s.value, m], !0) : s.value);
            return n.length = m, n
        }
    }, function(t, r, n) {
        var e = n(74);
        t.exports = function(t, r, n) {
            if (e(t), void 0 === r)
                return t;
            switch (n) {
            case 0:
                return function() {
                    return t.call(r)
                };
            case 1:
                return function(n) {
                    return t.call(r, n)
                };
            case 2:
                return function(n, e) {
                    return t.call(r, n, e)
                };
            case 3:
                return function(n, e, o) {
                    return t.call(r, n, e, o)
                }
            }
            return function() {
                return t.apply(r, arguments)
            }
        }
    }, function(t, r) {
        t.exports = function(t) {
            if ("function" != typeof t)
                throw TypeError(String(t) + " is not a function");
            return t
        }
    }, function(t, r, n) {
        var e = n(6);
        t.exports = function(t, r, n, o) {
            try {
                return o ? r(e(n)[0], n[1]) : r(n)
            } catch (r) {
                var i = t.return;
                throw void 0 !== i && e(i.call(t)), r
            }
        }
    }, function(t, r, n) {
        var e = n(0),
            o = n(14),
            i = e("iterator"),
            u = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (o.Array === t || u[i] === t)
        }
    }, function(t, r, n) {
        var e = n(49),
            o = n(14),
            i = n(0)("iterator");
        t.exports = function(t) {
            if (null != t)
                return t[i] || t["@@iterator"] || o[e(t)]
        }
    }, function(t, r, n) {
        var e = n(0)("iterator"),
            o = !1;
        try {
            var i = 0,
                u = {
                    next: function() {
                        return {
                            done: !!i++
                        }
                    },
                    return: function() {
                        o = !0
                    }
                };
            u[e] = function() {
                return this
            }, Array.from(u, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, r) {
            if (!r && !o)
                return !1;
            var n = !1;
            try {
                var i = {};
                i[e] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function(t, r, n) {
        var e = n(0),
            o = n(35),
            i = n(5),
            u = e("unscopables"),
            c = Array.prototype;
        null == c[u] && i(c, u, o(null)), t.exports = function(t) {
            c[u][t] = !0
        }
    }, function(t, r, n) {
        "use strict";
        var e = n(51).IteratorPrototype,
            o = n(35),
            i = n(11),
            u = n(32),
            c = n(14),
            a = function() {
                return this
            };
        t.exports = function(t, r, n) {
            var f = r + " Iterator";
            return t.prototype = o(e, {
                next: i(1, n)
            }), u(t, f, !1, !0), c[f] = a, t
        }
    }, function(t, r, n) {
        var e = n(3);
        t.exports = !e(function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })
    }, function(t, r, n) {
        var e = n(83);
        t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t,
                r = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), r = n instanceof Array
            } catch (t) {}
            return function(n, o) {
                return e(n, o), r ? t.call(n, o) : n.__proto__ = o, n
            }
        }() : void 0)
    }, function(t, r, n) {
        var e = n(4),
            o = n(6);
        t.exports = function(t, r) {
            if (o(t), !e(r) && null !== r)
                throw TypeError("Can't set " + String(r) + " as a prototype")
        }
    }, function(t, r, n) {
        "use strict";
        var e = n(49),
            o = {};
        o[n(0)("toStringTag")] = "z", t.exports = "[object z]" !== String(o) ? function() {
            return "[object " + e(this) + "]"
        } : o.toString
    }, function(t, r, n) {
        "use strict";
        var e = n(12),
            o = n(6),
            i = n(3),
            u = n(86),
            c = /./.toString,
            a = RegExp.prototype,
            f = i(function() {
                return "/a/b" != c.call({
                    source: "a",
                    flags: "b"
                })
            }),
            s = "toString" != c.name;
        (f || s) && e(RegExp.prototype, "toString", function() {
            var t = o(this),
                r = String(t.source),
                n = t.flags;
            return "/" + r + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in a) ? u.call(t) : n)
        }, {
            unsafe: !0
        })
    }, function(t, r, n) {
        "use strict";
        var e = n(6);
        t.exports = function() {
            var t = e(this),
                r = "";
            return t.global && (r += "g"), t.ignoreCase && (r += "i"), t.multiline && (r += "m"), t.unicode && (r += "u"), t.sticky && (r += "y"), r
        }
    }, function(t, r, n) {
        var e = n(29),
            o = n(24);
        t.exports = function(t, r, n) {
            var i,
                u,
                c = String(o(t)),
                a = e(r),
                f = c.length;
            return a < 0 || a >= f ? n ? "" : void 0 : (i = c.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === f || (u = c.charCodeAt(a + 1)) < 56320 || u > 57343 ? n ? c.charAt(a) : i : n ? c.slice(a, a + 2) : u - 56320 + (i - 55296 << 10) + 65536
        }
    }, function(t, r) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function(t, r, n) {}, function(t, r, n) {
        "use strict";
        n.r(r);
        n(37), n(46), n(47), n(68), n(71), n(36), n(53), n(85), n(54), n(55), n(89);
        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        function o() {
            var t,
                r = this.parentNode,
                n = arguments.length;
            if (r)
                for (n || r.removeChild(this); n--;)
                    "object" !== e(t = arguments[n]) ? t = this.ownerDocument.createTextNode(t) : t.parentNode && t.parentNode.removeChild(t), n ? r.insertBefore(this.previousSibling, t) : r.replaceChild(t, this)
        }
        function i(t) {
            return function(t) {
                    if (Array.isArray(t)) {
                        for (var r = 0, n = new Array(t.length); r < t.length; r++)
                            n[r] = t[r];
                        return n
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                        return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
        }
        function u(t, r) {
            for (var n = 0; n < r.length; n++) {
                var e = r[n];
                e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
            }
        }
        Element.prototype.replaceWith || (Element.prototype.replaceWith = o), CharacterData.prototype.replaceWith || (CharacterData.prototype.replaceWith = o), DocumentType.prototype.replaceWith || (DocumentType.prototype.replaceWith = o);
        var c = function() {
            function t(r) {
                var n = this;
                !function(t, r) {
                    if (!(t instanceof r))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t), this.zooomElement = r.zooomElement, this.zooomWrap = r.zooomWrap, this.zooomImg = r.zooomImg, this.zooomOverlay = r.zooomOverlay, this.addEventImage(), window.addEventListener("scroll", function() {
                    n.removeWrapper()
                })
            }
            var r,
                n,
                e;
            return r = t, (n = [{
                key: "addEventImage",
                value: function() {
                    var t = this,
                        r = document.querySelectorAll(this.zooomElement),
                        n = !0,
                        e = !1,
                        o = void 0;
                    try {
                        for (var i, u = r[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            i.value.addEventListener("click", function(r) {
                                r.stopPropagation(), t.imageZooom = r.currentTarget, t.zooomInit()
                            })
                        }
                    } catch (t) {
                        e = !0, o = t
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (e)
                                throw o
                        }
                    }
                }
            }, {
                key: "createWrapper",
                value: function() {
                    this.wrapper = document.createElement("div"), this.wrapper.classList.add(this.zooomWrap), this.wrapImage(this.imageZooom, this.wrapper), this.imageZooom.classList.add(this.zooomImg), this.overlayAdd()
                }
            }, {
                key: "removeWrapper",
                value: function() {
                    var t = this,
                        r = document.querySelector(".".concat(this.zooomWrap)),
                        n = this.transitionEvent();
                    if (r) {
                        var e = document.querySelector(".".concat(this.zooomImg));
                        e.removeAttribute("style"), r.removeAttribute("style"), r.addEventListener(n, function() {
                            r.replaceWith.apply(r, i(r.childNodes)), e.classList.remove(t.zooomImg), t.overlayRemove()
                        })
                    }
                }
            }, {
                key: "zooomInit",
                value: function() {
                    null === document.querySelector(".".concat(this.zooomWrap)) ? (this.createWrapper(), this.imageTransform()) : this.removeWrapper()
                }
            }, {
                key: "overlayAdd",
                value: function() {
                    var t = document.createElement("div");
                    t.id = this.zooomOverlay, document.body.appendChild(t)
                }
            }, {
                key: "overlayRemove",
                value: function() {
                    var t = document.getElementById(this.zooomOverlay);
                    t && t.parentNode.removeChild(t)
                }
            }, {
                key: "transitionEvent",
                value: function() {
                    var t = document.createElement("fakeelement"),
                        r = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                    for (var n in r)
                        if (void 0 !== t.style[n])
                            return r[n]
                }
            }, {
                key: "wrapImage",
                value: function(t, r) {
                    t.parentNode.insertBefore(r, t), r.appendChild(t)
                }
            }, {
                key: "imageTransform",
                value: function() {
                    var t = this.imageZooom.clientWidth,
                        r = this.imageZooom.clientHeight,
                        n = this.imageZooom.naturalWidth,
                        e = this.imageZooom.naturalHeight,
                        o = this.imageZooom.getBoundingClientRect(),
                        i = window.innerHeight / 2,
                        u = document.documentElement.clientWidth / 2,
                        c = i - (o.top + r / 2),
                        a = u - (o.left + t / 2),
                        f = n / t,
                        s = window.innerHeight - 80,
                        l = document.documentElement.clientWidth - 80,
                        p = 1;
                    (p = n < l && e < s ? f : n / e < l / s ? s / e * f : l / n * f) <= 1 && (p = 1), this.wrapper.setAttribute("style", "transform: translate(".concat(a, "px, ").concat(c, "px) translateZ(0px);")), this.imageZooom.setAttribute("style", "transform: scale(".concat(p, ")"))
                }
            }]) && u(r.prototype, n), e && u(r, e), t
        }();
        r.default = c
    }]).default
});
