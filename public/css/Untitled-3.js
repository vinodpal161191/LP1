
/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, t) {
    function P(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function I(e, n, r, i) {
        if (b.acceptData(e)) {
            var s, o, u = b.expando,
                a = "string" == typeof n,
                f = e.nodeType,
                c = f ? b.cache : e,
                h = f ? e[u] : e[u] && u;
            if (h && c[h] && (i || c[h].data) || !a || r !== t) return h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n)), s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], null == o && (o = s[b.camelCase(n)])) : o = s, o
        }
    }

    function q(e, t, n) {
        if (b.acceptData(e)) {
            var r, i, s, o = e.nodeType,
                u = o ? b.cache : e,
                a = o ? e[b.expando] : b.expando;
            if (u[a]) {
                if (t && (s = n ? u[a] : u[a].data)) {
                    b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t = t in s ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++) delete s[t[r]];
                    if (!(n ? U : b.isEmptyObject)(s)) return
                }(n || (delete u[a].data, U(u[a]))) && (o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null)
            }
        }
    }

    function R(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r
                } catch (s) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ct(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function ht(e, t, n) {
        if (t = t || 0, b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = b.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (at.test(t)) return b.filter(t, r, !n);
            t = b.filter(t, r)
        }
        return b.grep(e, function (e) {
            return b.inArray(e, t) >= 0 === n
        })
    }

    function pt(e) {
        var t = dt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Mt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function _t(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function Dt(e) {
        var t = Ct.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Pt(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (1 === t.nodeType && b.hasData(e)) {
            var n, r, i, s = b._data(e),
                o = b._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) b.event.add(t, n, u[n][r])
            }
            o.data && (o.data = b.extend({}, o.data))
        }
    }

    function Bt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
                i = b._data(t);
                for (r in i.events) b.removeEvent(t, r, i.handle);
                t.removeAttribute(b.expando)
            }
            "script" === n && t.text !== e.text ? (_t(t).text = e.text, Dt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e; null != (s = r[o]); o++)!n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
        return n === t || n && b.nodeName(e, n) ? b.merge([e], u) : u
    }

    function Ft(e) {
        xt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function tn(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--)
            if (t = en[i] + n, t in e) return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; u > o; o++) r = e[o], r.style && (s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            o = 0;
        for (; 4 > s; s += 2) "margin" === n && (o += b.css(e, n + Zt[s], !0, i)), r ? ("content" === n && (o -= b.css(e, "padding" + Zt[s], !0, i)), "margin" !== n && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), "padding" !== n && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Rt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = s,
            n = Qt[e];
        return n || (n = fn(e, t), "none" !== n && n || (It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach()), Qt[e] = n), n
    }

    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== b.type(t)) r(e, t);
        else
            for (i in t) vn(e + "[" + i + "]", t[i], n, r)
    }

    function _n(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n))
                while (r = s[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, n, r, i) {
        function u(a) {
            var f;
            return s[a] = !0, b.each(e[a] || [], function (e, a) {
                var l = a(n, r, i);
                return "string" != typeof l || o || s[l] ? o ? !(f = l) : t : (n.dataTypes.unshift(l), u(l), !1)
            }), f
        }
        var s = {}, o = e === An;
        return u(n.dataTypes[0]) || !s["*"] && u("*")
    }

    function Pn(e, n) {
        var r, i, s = b.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((s[i] ? e : r || (r = {}))[i] = n[i]);
        return r && b.extend(!0, e, r), e
    }

    function Hn(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (u in l) u in r && (n[l[u]] = r[u]);
        while ("*" === f[0]) f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
        if (s)
            for (u in a)
                if (a[u] && a[u].test(s)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (u in r) {
                if (!f[0] || e.converters[u + " " + f[0]]) {
                    o = u;
                    break
                }
                i || (i = u)
            }
            o = o || i
        }
        return o ? (o !== f[0] && f.unshift(o), r[o]) : t
    }

    function Bn(e, t) {
        var n, r, i, s, o = {}, u = 0,
            a = e.dataTypes.slice(),
            f = a[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
            for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u];)
            if ("*" !== r) {
                if ("*" !== f && f !== r) {
                    if (i = o[f + " " + r] || o["* " + r], !i)
                        for (n in o)
                            if (s = n.split(" "), s[1] === r && (i = o[f + " " + s[0]] || o["* " + s[0]])) {
                                i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                                break
                            }
                    if (i !== !0)
                        if (i && e["throws"]) t = i(t);
                        else try {
                            t = i(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: i ? l : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            }
        return {
            state: "success",
            data: t
        }
    }

    function zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function Wn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Yn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = b.now()
    }

    function Zn(e, t) {
        b.each(t, function (t, n) {
            var r = (Gn[t] || []).concat(Gn["*"]),
                i = 0,
                s = r.length;
            for (; s > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function er(e, t, n) {
        var r, i, s = 0,
            o = Qn.length,
            u = b.Deferred().always(function () {
                delete a.elem
            }),
            a = function () {
                if (i) return !1;
                var t = Xn || Yn(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            }, f = u.promise({
                elem: e,
                props: b.extend({}, t),
                opts: b.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Yn(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = b.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (tr(l, f.opts.specialEasing); o > s; s++)
            if (r = Qn[s].call(f, e, l, f.opts)) return r;
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e)
            if (r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r], o && "expand" in o) {
                n = o.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = s)
            } else t[r] = s
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {}, v = [],
            m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== an(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (o = t[i], $n.exec(o)) {
                if (delete t[i], a = a || "toggle" === o, o === (m ? "hide" : "show")) continue;
                v.push(i)
            }
        if (s = v.length) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function () {
                b(e).hide()
            }), h.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t])
            });
            for (i = 0; s > i; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = typeof t,
        s = e.document,
        o = e.location,
        u = e.jQuery,
        a = e.$,
        f = {}, l = [],
        c = "1.9.1",
        h = l.concat,
        p = l.push,
        d = l.slice,
        v = l.indexOf,
        m = f.toString,
        g = f.hasOwnProperty,
        y = c.trim,
        b = function (e, t) {
            return new b.fn.init(e, t, r)
        }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        E = /\S+/g,
        S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        x = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        N = /^[\],:{}\s]*$/,
        C = /(?:^|:|,)(?:\s*\[)+/g,
        k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        L = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        A = /^-ms-/,
        O = /-([\da-z])/gi,
        M = function (e, t) {
            return t.toUpperCase()
        }, _ = function (e) {
            (s.addEventListener || "load" === e.type || "complete" === s.readyState) && (D(), b.ready())
        }, D = function () {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
        };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : x.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0)), T.test(i[1]) && b.isPlainObject(n))
                        for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = s.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = s, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return d.call(this)
        },
        get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function (e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return b.each(this, e, t)
        },
        ready: function (e) {
            return b.ready.promise().done(e), this
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function (e) {
            return this.pushStack(b.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    }, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1,
            f = arguments.length,
            l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[1] || {}, a = 2), "object" == typeof u || b.isFunction(u) || (u = {}), f === a && (u = this, --a); f > a; a++)
            if (null != (s = arguments[a]))
                for (i in s) e = u[i], r = s[i], u !== r && (l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r));
        return u
    }, b.extend({
        noConflict: function (t) {
            return e.$ === b && (e.$ = a), t && e.jQuery === b && (e.jQuery = u), b
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? b.readyWait++ : b.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--b.readyWait : !b.isReady) {
                if (!s.body) return setTimeout(b.ready);
                b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready"))
            }
        },
        isFunction: function (e) {
            return "function" === b.type(e)
        },
        isArray: Array.isArray || function (e) {
            return "array" === b.type(e)
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || g.call(e, r)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function (e) {
            throw Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || s;
            var r = T.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && N.test(n.replace(k, "@").replace(L, "]").replace(C, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
        },
        noop: function () {},
        globalEval: function (t) {
            t && b.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(A, "ms-").replace(O, M)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: y && !y.call("﻿ ") ? function (e) {
            return null == e ? "" : y.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(S, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (P(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : p.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if ("number" == typeof r)
                for (; r > s; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            for (n = !! n; o > s; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e),
                u = [];
            if (o)
                for (; s > i; i++) r = t(e[i], i, n), null != r && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), null != r && (u[u.length] = r);
            return h.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return "string" == typeof n && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = null == r;
            if ("object" === b.type(r)) {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t && (s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                return l.call(b(e), n)
            })), n))
                for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n)
            if (n = b.Deferred(), "complete" === s.readyState) setTimeout(b.ready);
            else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
        else {
            s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
            var r = !1;
            try {
                r = null == e.frameElement && s.documentElement
            } catch (i) {}
            r && r.doScroll && function o() {
                if (!b.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    D(), b.ready()
                }
            }()
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), r = b(s);
    var H = {};
    b.Callbacks = function (e) {
        e = "string" == typeof e ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                for (r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0; a && s > o; o++)
                    if (a[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                n = !1, a && (f ? f.length && l(f.shift()) : r ? a = [] : c.disable())
            }, c = {
                add: function () {
                    if (a) {
                        var t = a.length;
                        (function i(t) {
                            b.each(t, function (t, n) {
                                var r = b.type(n);
                                "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (s >= r && s--, o >= r && o--)
                    }), this
                },
                has: function (e) {
                    return e ? b.inArray(e, a) > -1 : !! a && !! a.length
                },
                empty: function () {
                    return a = [], this
                },
                disable: function () {
                    return a = f = r = t, this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return f = t, r || c.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !a || i && !f || (n ? f.push(t) : l(t)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, b.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", b.Callbacks("once memory"), "resolved"],
                ["reject", "fail", b.Callbacks("once memory"), "rejected"],
                ["notify", "progress", b.Callbacks("memory")]
            ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return b.Deferred(function (n) {
                            b.each(t, function (t, s) {
                                var o = s[0],
                                    u = b.isFunction(e[t]) && e[t];
                                i[s[1]](function () {
                                    var e = u && u.apply(this, arguments);
                                    e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? b.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, b.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = d.call(arguments),
                r = n.length,
                i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
                s = 1 === i ? e : b.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1)
                for (u = Array(r), a = Array(r), f = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
            return i || s.resolveWith(f, n), s.promise()
        }
    }), b.support = function () {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! o.value,
            optSelected: f.selected,
            enctype: !! s.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === s.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, u.disabled = !0, t.optDisabled = !f.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip, b(function () {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = s.getElementsByTagName("body")[0];
            a && (n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === p.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width, r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null)
        }), n = u = a = f = r = o = null, t
    }();
    var j = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        F = /([A-Z])/g;
    b.extend({
        cache: {},
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !! e && !U(e)
        },
        data: function (e, t, n) {
            return I(e, t, n)
        },
        removeData: function (e, t) {
            return q(e, t)
        },
        _data: function (e, t, n) {
            return I(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return q(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                o = 0,
                u = null;
            if (e === t) {
                if (this.length && (u = b.data(s), 1 === s.nodeType && !b._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > o; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                    b._data(s, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                return n === t ? s ? R(s, e, b.data(s, e)) : null : (this.each(function () {
                    b.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    }), b.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = b.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = b._queueHooks(e, t),
                o = function () {
                    b.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), s.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return b._data(e, n) || b._data(e, n, {
                empty: b.Callbacks("once memory").add(function () {
                    b._removeData(e, t + "queue"), b._removeData(e, n)
                })
            })
        }
    }), b.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                b.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                s = b.Deferred(),
                o = this,
                u = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (u--) r = b._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var z, W, X = /[\t\r\n]/g,
        V = /\r/g,
        $ = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        K = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Q = /^(?:checked|selected)$/i,
        G = b.support.getSetAttribute,
        Y = b.support.input;
    b.fn.extend({
        attr: function (e, t) {
            return b.access(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                b.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return b.access(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = b.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(E) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = b.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = 0 === arguments.length || "string" == typeof e && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(E) || []; u > o; o++)
                    if (n = this[o], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var s, o = 0,
                        u = b(this),
                        a = t,
                        f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                } else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (arguments.length) return i = b.isFunction(e), this.each(function (n) {
                var s, o = b(this);
                1 === this.nodeType && (s = i ? e.call(this, n, o.val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : b.isArray(s) && (s = b.map(s, function (e) {
                    return null == e ? "" : e + ""
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, s, "value") !== t || (this.value = s))
            });
            if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
        }
    }), b.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = "select-one" === e.type || 0 > i,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = 0 > i ? u : s ? i : 0;
                    for (; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function (e, t) {
                    var n = b.makeArray(t);
                    return b(e).find("option").each(function () {
                        this.selected = b.inArray(b(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var s, o, u, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === i ? b.prop(e, n, r) : (o = 1 !== a || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z)), r === t ? s && o && "get" in s && null !== (u = s.get(e, n)) ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), null == u ? t : u) : null !== r ? s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(E);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && null !== (i = s.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), W = {
        get: function (e, n) {
            var r = b.prop(e, n),
                i = "boolean" == typeof r && e.getAttribute(n),
                s = "boolean" == typeof r ? Y && G ? null != i : Q.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Y && G || (b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, n, r) {
            return b.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), G || (z = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function (e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), b.support.hrefNormalized ||
        (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), b.each(["href", "src"], function (e, t) {
        b.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), b.support.style || (b.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, n) {
                return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
            }
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;
    b.event = {
        global: {},
        add: function (e, n, r, s, o) {
            var u, a, f, l, c, h, p, d, v, m, g, y = b._data(e);
            if (y) {
                r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                    return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments)
                }, h.elem = e), n = (n || "").match(E) || [""], f = n.length;
                while (f--) u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l), (d = a[v]) || (d = a[v] = [], d.delegateCount = 0, c.setup && c.setup.call(e, s, m, h) !== !1 || (e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (m && (l = m.events)) {
                t = (t || "").match(E) || [""], f = t.length;
                while (f--)
                    if (u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort(), p) {
                        c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && v !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, d, m.handle) !== !1 || b.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var u, a, f, l, c, h, p, d = [i || s],
                v = g.call(n, "type") ? n.type : n,
                m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            if (f = h = i = i || s, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(v + b.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = 0 > v.indexOf(":") && "on" + v, n = n[b.expando] ? n : new b.Event(v, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), c = b.event.special[v] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !b.isWindow(i)) {
                    for (l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode); f; f = f.parentNode) d.push(f), h = f;
                    h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
                }
                p = 0;
                while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
                if (n.type = v, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === v && b.nodeName(i, "a") || !b.acceptData(i) || !a || !i[v] || b.isWindow(i))) {
                    h = i[a], h && (i[a] = null), b.event.triggered = v;
                    try {
                        i[v]()
                    } catch (y) {}
                    b.event.triggered = t, h && (i[a] = h)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [],
                a = d.call(arguments),
                f = (b._data(this, "events") || {})[e.type] || [],
                l = b.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = b.event.handlers.call(this, e, f), n = 0;
                while ((s = u[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type))
                for (; f != this; f = f.parentNode || this)
                    if (1 === f.nodeType && (f.disabled !== !0 || "click" !== e.type)) {
                        for (s = [], o = 0; a > o; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return n.length > a && u.push({
                elem: this,
                handlers: n.slice(a)
            }), u
        },
        fix: function (e) {
            if (e[b.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                u = this.fixHooks[i];
            u || (this.fixHooks[i] = u = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = u.props ? this.props.concat(u.props) : this.props, e = new b.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, u.filter ? u.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, u = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || u === t || (e.which = 1 & u ? 1 : 2 & u ? 3 : 4 & u ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            },
            focus: {
                trigger: function () {
                    if (this !== s.activeElement && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === s.activeElement && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, b.removeEvent = s.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, b.Event = function (e, n) {
        return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
    }, b.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !b.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), b.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
            })), !1) : (b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function () {
            return b.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), b.support.focusinBubbles || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                b.event.simulate(t, e.target, b.event.fix(e), !0)
            };
        b.event.special[t] = {
            setup: function () {
                0 === n++ && s.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && s.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = st;
            else if (!i) return this;
            return 1 === s && (u = i, i = function (e) {
                return b().off(e), u.apply(this, arguments)
            }, i.guid = u.guid || (u.guid = b.guid++)), this.each(function () {
                b.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = st), this.each(function () {
                b.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, n) {
            var r = this[0];
            return r ? b.event.trigger(e, n, r, !0) : t
        }
    }),
    function (e, t) {
        function rt(e) {
            return J.test(e + "")
        }

        function it() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function st(e) {
            return e[w] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function ut(e, t, n, r) {
            var i, s, o, u, a, f, h, v, m, y;
            if ((t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (!p && !r) {
                if (i = K.exec(e))
                    if (o = i[1]) {
                        if (9 === u) {
                            if (s = t.getElementById(o), !s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                    }
                if (S.qsa && !d.test(e)) {
                    if (h = !0, v = w, m = t, y = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = ht(e), (h = t.getAttribute("id")) ? v = h.replace(Y, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", a = f.length;
                        while (a--) f[a] = v + pt(f[a]);
                        m = $.test(e) && t.parentNode || t, y = f.join(",")
                    }
                    if (y) try {
                        return _.apply(n, D.call(m.querySelectorAll(y), 0)), n
                    } catch (b) {} finally {
                        h || t.removeAttribute("id")
                    }
                }
            }
            return Et(e.replace(R, "$1"), t, n, r)
        }

        function at(e, t) {
            var n = t && e,
                r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ct(e) {
            return st(function (t) {
                return t = +t, st(function (n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e, t) {
            var n, r, s, o, u, a, f, l = C[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                (!n || (r = U.exec(u))) && (r && (u = u.slice(r[0].length) || u), a.push(s = [])), n = !1, (r = z.exec(u)) && (n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in i.filter)!(r = V[o].exec(u)) || f[o] && !(r = f[o](r)) || (n = r.shift(), s.push({
                    value: n,
                    type: o,
                    matches: r
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ut.error(e) : C(e, a).slice(0)
        }

        function pt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function dt(e, t, n) {
            var i = t.dir,
                s = n && "parentNode" === i,
                o = T++;
            return t.first ? function (t, n, r) {
                while (t = t[i])
                    if (1 === t.nodeType || s) return e(t, n, r)
            } : function (t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i])
                        if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else
                    while (t = t[i])
                        if (1 === t.nodeType || s)
                            if (l = t[w] || (t[w] = {}), (f = l[i]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === r) return a === !0
                            } else if (f = l[i] = [c], f[1] = e(t, n, u) || r, f[1] === !0) return !0
            }
        }

        function vt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function mt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = null != t;
            for (; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : mt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = mt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function yt(e) {
            var t, n, r, s = e.length,
                o = i.relative[e[0].type],
                u = o || i.relative[" "],
                a = o ? 1 : 0,
                l = dt(function (e) {
                    return e === t
                }, u, !0),
                c = dt(function (e) {
                    return P.call(t, e) > -1
                }, u, !0),
                h = [
                    function (e, n, r) {
                        return !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                    }
                ];
            for (; s > a; a++)
                if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                else {
                    if (n = i.filter[e[a].type].apply(null, e[a].matches), n[w]) {
                        for (r = ++a; s > r; r++)
                            if (i.relative[e[r].type]) break;
                        return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, r > a && yt(e.slice(a, r)), s > r && yt(e = e.slice(r)), s > r && pt(e))
                    }
                    h.push(n)
                }
            return vt(h)
        }

        function bt(e, t) {
            var n = 0,
                s = t.length > 0,
                o = e.length > 0,
                u = function (u, a, l, h, p) {
                    var d, v, m, g = [],
                        y = 0,
                        b = "0",
                        w = u && [],
                        E = null != p,
                        S = f,
                        T = u || o && i.find.TAG("*", p && a.parentNode || a),
                        N = x += null == S ? 1 : Math.random() || .1;
                    for (E && (f = a !== c && a, r = n); null != (d = T[b]); b++) {
                        if (o && d) {
                            v = 0;
                            while (m = e[v++])
                                if (m(d, a, l)) {
                                    h.push(d);
                                    break
                                }
                            E && (x = N, r = ++n)
                        }
                        s && ((d = !m && d) && y--, u && w.push(d))
                    }
                    if (y += b, s && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--) w[b] || g[b] || (g[b] = M.call(h));
                            g = mt(g)
                        }
                        _.apply(h, g), E && !u && g.length > 0 && y + t.length > 1 && ut.uniqueSort(h)
                    }
                    return E && (x = N, f = S), w
                };
            return s ? st(u) : u
        }

        function wt(e, t, n) {
            var r = 0,
                i = t.length;
            for (; i > r; r++) ut(e, t[r], n);
            return n
        }

        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !p && i.relative[o[1].type]) {
                    if (t = i.find.ID(a.matches[0].replace(et, tt), t)[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    if (a = o[s], i.relative[f = a.type]) break;
                    if ((l = i.find[f]) && (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(s, 1), e = r.length && pt(o), !e) return _.apply(n, D.call(r, 0)), n;
                        break
                    }
                }
            }
            return u(e, c)(r, t, p, n, $.test(e)), n
        }

        function St() {}
        var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, w = "sizzle" + -(new Date),
            E = e.document,
            S = {}, x = 0,
            T = 0,
            N = it(),
            C = it(),
            k = it(),
            L = typeof t,
            A = 1 << 31,
            O = [],
            M = O.pop,
            _ = O.push,
            D = O.slice,
            P = O.indexOf || function (e) {
                var t = 0,
                    n = this.length;
                for (; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            }, H = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            j = B.replace("w", "w#"),
            F = "([*^$|!~]?=)",
            I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
            q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            U = RegExp("^" + H + "*," + H + "*"),
            z = RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
            W = RegExp(q),
            X = RegExp("^" + j + "$"),
            V = {
                ID: RegExp("^#(" + B + ")"),
                CLASS: RegExp("^\\.(" + B + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                TAG: RegExp("^(" + B.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + I),
                PSEUDO: RegExp("^" + q),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                needsContext: RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
            }, $ = /[\x20\t\r\n\f]*[+~]/,
            J = /^[^{]+\{\s*\[native code/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Y = /'|\\/g,
            Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            tt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            D.call(E.documentElement.childNodes, 0)[0].nodeType
        } catch (nt) {
            D = function (e) {
                var t, n = [];
                while (t = this[e++]) n.push(t);
                return n
            }
        }
        o = ut.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, l = ut.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : E;
            return n !== c && 9 === n.nodeType && n.documentElement ? (c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), S.attributes = ot(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), S.getByClassName = ot(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), S.getByName = ot(function (e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
            }), i.attrHandle = ot(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                },
                type: function (e) {
                    return e.getAttribute("type")
                }
            }, S.getIdNotName ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== L && !p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (i.find.ID = function (e, n) {
                if (typeof n.getElementById !== L && !p) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== L && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(et, tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== L && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = S.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== L ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, i.find.NAME = S.getByName && function (e, n) {
                return typeof n.getElementsByName !== L ? n.getElementsByName(name) : t
            }, i.find.CLASS = S.getByClassName && function (e, n) {
                return typeof n.getElementsByClassName === L || p ? t : n.getElementsByClassName(e)
            }, v = [], d = [":focus"], (S.qsa = rt(n.querySelectorAll)) && (ot(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function (e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = RegExp(d.join("|")), v = RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !! r && 1 === r.nodeType && !! (n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, y = h.compareDocumentPosition ? function (e, t) {
                var r;
                return e === t ? (a = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    f = [t];
                if (e === t) return a = !0, 0;
                if (!s || !o) return e === n ? -1 : t === n ? 1 : s ? -1 : o ? 1 : 0;
                if (s === o) return at(e, t);
                r = e;
                while (r = r.parentNode) u.unshift(r);
                r = t;
                while (r = r.parentNode) f.unshift(r);
                while (u[i] === f[i]) i++;
                return i ? at(u[i], f[i]) : u[i] === E ? -1 : f[i] === E ? 1 : 0
            }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c) : c
        }, ut.matches = function (e, t) {
            return ut(e, null, null, t)
        }, ut.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']"), !(!S.matchesSelector || p || v && v.test(t) || d.test(t))) try {
                var n = m.call(e, t);
                if (n || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (r) {}
            return ut(t, c, null, [e]).length > 0
        }, ut.contains = function (e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, ut.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, ut.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, ut.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            if (a = !S.detectDuplicates, e.sort(y), a) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, s = ut.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r]; r++) n += s(t);
            return n
        }, i = ut.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: V,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ut.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [x, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [x, h]), c === t)) break; return h -= i, h === r || 0 === h % r && h / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function (e, n) {
                        var i, s = r(e, t),
                            o = s.length;
                        while (o--) i = P.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: st(function (e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(R, "$1"));
                    return r[w] ? st(function (e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function (e) {
                    return function (t) {
                        return ut(e, t).length > 0
                    }
                }),
                contains: st(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function (e) {
                    return X.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                    function (t) {
                        var n;
                        do
                            if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                },
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                header: function (e) {
                    return G.test(e.nodeName)
                },
                input: function (e) {
                    return Q.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ct(function () {
                    return [0]
                }),
                last: ct(function (e, t) {
                    return [t - 1]
                }),
                eq: ct(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        };
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) i.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        }) i.pseudos[n] = lt(n);
        u = ut.compile = function (e, t) {
            var n, r = [],
                i = [],
                s = k[e + " "];
            if (!s) {
                t || (t = ht(e)), n = t.length;
                while (n--) s = yt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = k(e, bt(i, r))
            }
            return s
        }, i.pseudos.nth = i.pseudos.eq, i.filters = St.prototype = i.pseudos, i.setFilters = new St, l(), ut.attr = b.attr, b.find = ut, b.expr = ut.selectors, b.expr[":"] = b.expr.pseudos, b.unique = ut.uniqueSort, b.text = ut.getText, b.isXMLDoc = ut.isXML, b.contains = ut.contains
    }(e);
    var ot = /Until$/,
        ut = /^(?:parents|prev(?:Until|All))/,
        at = /^.[^:#\[\.,]*$/,
        ft = b.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    b.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (b.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(ht(this, e, !1))
        },
        filter: function (e) {
            return this.pushStack(ht(this, e, !0))
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
            for (; i > r; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
                    if (o ? o.index(n) > -1 : b.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(s.length > 1 ? b.unique(s) : s)
        },
        index: function (e) {
            return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return b.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return b.dir(e, "parentNode", n)
        },
        next: function (e) {
            return ct(e, "nextSibling")
        },
        prev: function (e) {
            return ct(e, "previousSibling")
        },
        nextAll: function (e) {
            return b.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return b.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return b.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return b.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return b.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return b.sibling(e.firstChild)
        },
        contents: function (e) {
            return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
        }
    }, function (e, t) {
        b.fn[e] = function (n, r) {
            var i = b.map(this, t, n);
            return ot.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && 9 !== s.nodeType && (r === t || 1 !== s.nodeType || !b(s).is(r))) 1 === s.nodeType && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        xt = /^(?:checkbox|radio)$/i,
        Tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Nt = /^$|\/(?:java|ecma)script/i,
        Ct = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, At = pt(s),
        Ot = At.appendChild(s.createElement("div"));
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, b.fn.extend({
        text: function (e) {
            return b.access(this, function (e) {
                return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return b.isFunction(e) ? this.each(function (t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = b(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = b.isFunction(e);
            return this.each(function (n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            var n, r = 0;
            for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(vt, "") : t;
                if (!("string" != typeof e || St.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && gt.test(e) || Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling,
                    n = this.parentNode;
                n && (b(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            e = h.apply([], e);
            var i, s, o, u, a, f, l = 0,
                c = this.length,
                p = this,
                d = c - 1,
                v = e[0],
                m = b.isFunction(v);
            if (m || !(1 >= c || "string" != typeof v || b.support.checkClone) && Tt.test(v)) return this.each(function (i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
            });
            if (c && (f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, 1 === f.childNodes.length && (f = i), i)) {
                for (n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length; c > l; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                if (o)
                    for (a = u[u.length - 1].ownerDocument, b.map(u, Dt), l = 0; o > l; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                        url: s.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")));
                f = i = null
            }
            return this
        }
    }), b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        b.fn[e] = function (e) {
            var n, r = 0,
                i = [],
                s = b(e),
                o = s.length - 1;
            for (; o >= r; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i)
        }
    }), b.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (r = jt(s), u = jt(e), o = 0; null != (i = u[o]); ++o) r[o] && Bt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || jt(e), r = r || jt(s), o = 0; null != (i = u[o]); o++) Ht(i, r[o]);
                else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; c > d; d++)
                if (s = e[d], s || 0 === s)
                    if ("object" === b.type(s)) b.merge(p, s.nodeType ? [s] : s);
                    else if (Et.test(s)) {
                u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0])), !b.support.tbody) {
                    s = "table" !== a || wt.test(s) ? "<table>" !== l[1] || wt.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                b.merge(p, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = h.lastChild
            } else p.push(t.createTextNode(s));
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++])
                if ((!r || -1 === b.inArray(s, r)) && (o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u), n)) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = b.expando,
                f = b.cache,
                c = b.support.deleteExpando,
                h = b.event.special;
            for (; null != (n = e[u]); u++)
                if ((t || b.acceptData(n)) && (s = n[a], o = s && f[s])) {
                    if (o.events)
                        for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                    f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
                }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = RegExp("^(" + w + ")(.*)$", "i"),
        Jt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Kt = RegExp("^([+-])=(" + w + ")", "i"),
        Qt = {
            BODY: "block"
        }, Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Yt = {
            letterSpacing: 0,
            fontWeight: 400
        }, Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];
    b.fn.extend({
        css: function (e, n) {
            return b.access(this, function (e, n, r) {
                var i, s, o = {}, u = 0;
                if (b.isArray(n)) {
                    for (s = qt(e), i = n.length; i > u; u++) o[n[u]] = b.css(e, n[u], !1, s);
                    return o
                }
                return r !== t ? b.style(e, n, r) : b.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return rn(this, !0)
        },
        hide: function () {
            return rn(this)
        },
        toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : nn(this)) ? b(this).show() : b(this).hide()
            })
        }
    }), b.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Rt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": b.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = b.camelCase(n),
                    f = e.style;
                if (n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a], r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
                if (o = typeof r, "string" === o && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number"), !(null == r || "number" === o && isNaN(r) || ("number" !== o || b.cssNumber[a] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (f[n] = "inherit"), u && "set" in u && (r = u.set(e, r, i)) === t))) try {
                    f[n] = r
                } catch (l) {}
            }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), "normal" === o && n in Yt && (o = Yt[n]), "" === r || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function (e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        }
    }), e.getComputedStyle ? (qt = function (t) {
        return e.getComputedStyle(t, null)
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
        return u && ("" !== a || b.contains(e.ownerDocument, e) || (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : s.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return null == a && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = "fontSize" === n ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), "" === a ? "auto" : a
    }), b.each(["height", "width"], function (e, n) {
        b.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function () {
                    return un(e, n, i)
                }) : un(e, n, i) : t
            },
            set: function (e, t, r) {
                var i = r && qt(e);
                return sn(e, t, r ? on(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(s.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i)
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? b.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"]) : t
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, n) {
            b.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = Rt(e, n), Jt.test(r) ? b(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
    }, b.expr.filters.visible = function (e) {
        return !b.expr.filters.hidden(e)
    }), b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        b.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0,
                    i = {}, s = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Vt.test(e) || (b.cssHooks[e + t].set = sn)
    });
    var ln = /%20/g,
        cn = /\[\]$/,
        hn = /\r?\n/g,
        pn = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
    b.fn.extend({
        serialize: function () {
            return b.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !xt.test(e))
            }).map(function (e, t) {
                var n = b(this).val();
                return null == n ? null : b.isArray(n) ? b.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(hn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(hn, "\r\n")
                }
            }).get()
        }
    }), b.param = function (e, n) {
        var r, i = [],
            s = function (e, t) {
                t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
            s(this.name, this.value)
        });
        else
            for (r in e) vn(r, e[r], n, s);
        return i.join("&").replace(ln, "+")
    }, b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        b.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), b.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var mn, gn, yn = b.now(),
        bn = /\?/,
        wn = /#.*$/,
        En = /([?&])_=[^&]*/,
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        xn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Tn = /^(?:GET|HEAD)$/,
        Nn = /^\/\//,
        Cn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        kn = b.fn.load,
        Ln = {}, An = {}, On = "*/".concat("*");
    try {
        gn = o.href
    } catch (Mn) {
        gn = s.createElement("a"), gn.href = "", gn = gn.href
    }
    mn = Cn.exec(gn.toLowerCase()) || [], b.fn.load = function (e, n, r) {
        if ("string" != typeof e && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), u.length > 0 && b.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            s = arguments, u.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            u.each(r, s || [e.responseText, t, e])
        }), this
    }, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        b.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), b.each(["get", "post"], function (e, n) {
        b[n] = function (e, r, i, s) {
            return b.isFunction(r) && (s = s || i, i = r, r = t), b.ajax({
                url: e,
                type: n,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: xn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": On,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": b.parseJSON,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Pn(Pn(e, b.ajaxSettings), t) : Pn(b.ajaxSettings, e)
        },
        ajaxPrefilter: _n(Ln),
        ajaxTransport: _n(An),
        ajax: function (e, n) {
            function N(e, n, r, i) {
                var l, g, y, E, S, T = n;
                2 !== w && (w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r)), e >= 200 && 300 > e || 304 === e ? (c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), 204 === e ? (l = !0, T = "nocontent") : 304 === e ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = b.ajaxSetup({}, n),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? b(h) : b.event,
                d = b.Deferred(),
                v = b.Callbacks("once memory"),
                m = c.statusCode || {}, g = {}, y = {}, w = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return w || (c.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || S;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            if (d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], null == c.crossDomain && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), c.data && c.processData && "string" != typeof c.data && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2 === w) return x;
            a = c.global, a && 0 === b.active++ && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && 2 !== w) {
                S = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                if (f = Dn(An, c, n, x)) {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        N(-1, T)
                    }
                } else N(-1, "No Transport");
                return x
            }
            return x.abort()
        },
        getScript: function (e, n) {
            return b.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return b.get(e, t, n, "json")
        }
    }), b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return b.globalEval(e), e
            }
        }
    }), b.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), b.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = s.head || b("head")[0] || s.documentElement;
            return {
                send: function (t, i) {
                    n = s.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var jn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = jn.pop() || b.expando + "_" + yn++;
            return this[e] = !0, e
        }
    }), b.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        return a || "jsonp" === n.dataTypes[0] ? (s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || b.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
        }), "script") : t
    });
    var In, qn, Rn = 0,
        Un = e.ActiveXObject && function () {
            var e;
            for (e in In) In[e](t, !0)
        };
    b.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && zn() || Wn()
    } : zn, qn = b.ajaxSettings.xhr(), b.support.cors = !! qn && "withCredentials" in qn, qn = b.support.ajax = !! qn, qn && b.ajaxTransport(function (n) {
        if (!n.crossDomain || b.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    if (n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async), n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || 4 === a.readyState))
                                if (r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]), i) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }
                                    u || !n.isLocal || n.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                                }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? 4 === a.readyState ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Qn = [nr],
        Gn = {
            "*": [
                function (e, t) {
                    var n, r, i = this.createTween(e, t),
                        s = Jn.exec(t),
                        o = i.cur(),
                        u = +o || 0,
                        a = 1,
                        f = 20;
                    if (s) {
                        if (n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                            u = b.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && 1 !== a && --f)
                        }
                        i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                    }
                    return i
                }
            ]
        };
    b.Animation = b.extend(er, {
        tweener: function (e, t) {
            b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? Qn.unshift(e) : Qn.push(e)
        }
    }), b.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (b.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), b.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = b.isEmptyObject(e),
                s = b.speed(t, n, r),
                o = function () {
                    var t = er(this, b.extend({}, e), s);
                    o.finish = function () {
                        t.stop(!0)
                    }, (i || b._data(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    s = b.timers,
                    o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem !== this || null != e && s[n].queue !== e || (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && b.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = b._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    s = b.timers,
                    o = r ? r.length : 0;
                for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), b.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        b.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), b.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
        }, r
    }, b.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function () {
        var e, n = b.timers,
            r = 0;
        for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || b.fx.stop(), Xn = t
    }, b.fx.timer = function (e) {
        e() && b.timers.push(e) && b.fx.start()
    }, b.fx.interval = 13, b.fx.start = function () {
        Vn || (Vn = setInterval(b.fx.tick, b.fx.interval))
    }, b.fx.stop = function () {
        clearInterval(Vn), Vn = null
    }, b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function (e) {
        return b.grep(b.timers, function (t) {
            return e === t.elem
        }).length
    }), b.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            b.offset.setOffset(this, e, t)
        });
        var n, r, s = {
                top: 0,
                left: 0
            }, o = this[0],
            u = o && o.ownerDocument;
        if (u) return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = b(e),
                s = i.offset(),
                o = b.css(e, "top"),
                u = b.css(e, "left"),
                a = ("absolute" === r || "fixed" === r) && b.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + c), null != t.left && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, b.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    }, r = this[0];
                return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - b.css(r, "marginTop", !0),
                    left: t.left - n.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
                return e || s.documentElement
            })
        }
    }), b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        b.fn[e] = function (i) {
            return b.access(this, function (e, i, s) {
                var o = sr(e);
                return s === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s, t)
            }, e, i, arguments.length, null)
        }
    }), b.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        b.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            b.fn[i] = function (i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
}), eval(function (e, t, n, r, i, s) {
    i = function (e) {
        return (e < t ? "" : i(parseInt(e / t))) + ((e %= t) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
    };
    if (!"".replace(/^/, String)) {
        while (n--) s[i(n)] = r[n] || i(n);
        r = [
            function (e) {
                return s[e]
            }
        ], i = function () {
            return "\\w+"
        }, n = 1
    }
    while (n--) r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
    return e
}("(6($){4($.F.u){5}$.F.u=6(o){4(s.y==0){1e(D,'1U 1V 1W 11 \"'+s.1X+'\".');5 s}4(s.y>1){5 s.1Y(6(){$(s).u(o)})}7 d=s;4(d.T('u')){d.M('1z.x')}d.1A=6(){d.U('N.x',6(e,c){e.12();e.13();r.1f=(8 r.A=='1Z')?r.A:1B(d);r.1f+=r.1C;4(8 c!='B'){4(8 c=='1g'||c 1D 20){c=$('<1h />').G(c).H()}4(c 1D $){f=c}}$C=d.21('<1h 22=\"u\" />').V();$C.14().G(f.1E(D)).1F({'A':'1G','I':'1G','23':'24','25':0,'26':0});7 a=9,O=9;4(w.15){a=w.15.1E(D);w.15.E()}4(W($C,r)){4(r.1i=='V'){O=V($C,r,a)}v{O=P($C,d,$C,r,a)}}$C.27($C.H());$C=Q;4($.28(r.1j)){r.1j.J(d[0],O,f)}w.t=O;5 O}).U('t.x',6(e,a){e.12();e.13();4(8 a=='6'){a.J(d[0],w.t)}5 w.t}).U('29.x',6(e,a){e.12();e.13();4(8 a=='6'){a.J(d[0],f)}5 f}).U('1z.x',6(e){e.12();e.13();d.1k().1H().14().G(f).T('u',9)});5 d};d.1H=6(){d.1I('.x');5 d};d.X=6(){d.1k();4(r.X=='R'){7 b=$(R),1l=b.I(),1m=b.A();b.U('1J.x'+w.1n,6(){4(1l!=b.I()||1m!=b.A()||!r.1K){1l=b.I();1m=b.A();4(K){1L(K)}K=2a(6(){d.M('N.x')},10)}})}v{Y=16(d);K=2b(6(){7 a=16(d);4(Y.I!=a.I||Y.A!=a.A){d.M('N.x');Y=16(d)}},2c)}5 d};d.1k=6(){$(R).1I('1J.x'+w.1n);4(K){1L(K)}5 d};7 f=d.H(),r=$.2d(D,{},$.F.u.1M,o),w={},Y={},K=Q,$C=Q;w.15=1N(r.1o,d);w.t=9;w.1n=n++;d.T('u',D).1A().M('N.x');4(r.X){d.X()}5 d};$.F.u.1M={'P':'... ','1i':'2e','1p':{'E':[' ',',',';','.','!','?'],'1O':[]},'1C':0,'1j':Q,'1o':Q,'A':Q,'X':9,'1K':D,'1e':9};7 n=1;6 V(b,o,c){7 d=b.V(),t=9;b.14();11(7 a=0,l=d.y;a<l;a++){7 e=d.1q(a);b.G(e);4(c){b.G(c)}4(W(b,o)){e.E();t=D;1r}v{4(c){c.E()}}}5 t}6 P(b,c,d,o,f){7 g=b.H(),t=9;b.14();7 h='2f, 2g, 2h, 2i, 2j, 2k, 2l, 1P, 2m, 2n, 2o, 2p, 2q, 2r, 2s, 2t, 2u, 2v, 2w';11(7 a=0,l=g.y;a<l;a++){4(t){1r}7 e=g[a],$e=$(e);4(8 e=='B'){2x}b.G($e);4(f){b[(b.2y(h))?'1o':'G'](f)}4(e.2z==3){4(W(d,o)){t=1s($e,c,d,o,f)}}v{t=P($e,c,d,o,f)}4(!t){4(f){f.E()}}}5 t}6 1s(a,b,c,o,d){7 f=9,e=a[0];4(8 e=='B'){5 9}7 g=(o.1i=='2A')?'':' ',S=1t(e).2B(g),17=-1,L=-1,18=0,19=S.y-1;1Q(18<=19){7 m=2C.2D((18+19)/2);4(m==L){1r}L=m;1a(e,S.Z(0,L+1).1R(g)+o.P);4(!W(c,o)){17=L;18=L}v{19=L}}4(17!=-1&&!(S.y==1&&S[0].y==0)){7 h=1u(S.Z(0,17+1).1R(g),o);f=D;1a(e,h)}v{7 i=a.2E();a.E();7 j=(d)?d.y:0;4(i.H().2F()>j){7 k=i.H().1q(-1-j);f=1s(k,b,c,o,d)}v{7 e=i.2G().H().1q(-1)[0];4(8 e!='B'){7 h=1u(1t(e),o);1a(e,h);i.E();f=D}}}5 f}6 W(a,o){5 a.1v()>o.1f}6 1u(a,o){1Q($.1S(a.Z(-1),o.1p.E)>-1){a=a.Z(0,-1)}4($.1S(a.Z(-1),o.1p.1O)<0){a+=o.P}5 a}6 16(a){5{'I':a.2H(),'A':a.1v()}}6 1a(e,a){4(e.1b){e.1b=a}v 4(e.1c){e.1c=a}v 4(e.1d){e.1d=a}}6 1t(e){4(e.1b){5 e.1b}v 4(e.1c){5 e.1c}v 4(e.1d){5 e.1d}v{5\"\"}}6 1N(e,a){4(8 e=='B'){5 9}4(!e){5 9}4(8 e=='1g'){e=$(e,a);5(e.y)?e:9}4(8 e=='1P'){5(8 e.2I=='B')?9:e}5 9}6 1B(b){7 h=b.1v(),a=['2J','2K'];11(7 z=0,l=a.y;z<l;z++){7 m=2L(b.1F(a[z]),10);4(2M(m)){m=0}h-=m}5 h}6 1e(d,m){4(!d){5 9}4(8 m=='1g'){m='u: '+m}v{m=['u:',m]}4(8 R.1w!='B'){4(8 R.1w.1T!='B'){R.1w.1T(m)}}5 9}7 p=$.F.1x;$.F.1x=6(a){4(8 a!='B'){4(s.T('u')){4(8 a!='6'){5 s.M('N',[a])}}5 p.J(s,a)}5 p.J(s)};7 q=$.F.1y;$.F.1y=6(a){4(8 a!='B'){4(s.T('u')){7 b=$('<1h />');b.1y(a);a=b.1x();b.E();5 s.M('N',[a])}5 q.J(s,a)}5 q.J(s)}})(2N);", 62, 174, "||||if|return|function|var|typeof|false||||||||||||||||||opts|this|isTruncated|dotdotdot|else|conf|dot|length||height|undefined|inr|true|remove|fn|append|contents|width|call|watchInt|midPos|trigger|update|trunc|ellipsis|null|window|textArr|data|bind|children|test|watch|watchOrg|slice||for|preventDefault|stopPropagation|empty|afterElement|getSizes|position|startPos|endPos|setTextContent|innerText|nodeValue|textContent|debug|maxHeight|string|div|wrap|callback|unwatch|_wWidth|_wHeight|dotId|after|lastCharacter|eq|break|ellipsisElement|getTextContent|addEllipsis|innerHeight|console|html|text|destroy|bind_events|getTrueInnerHeight|tolerance|instanceof|clone|css|auto|unbind_events|unbind|resize|windowResizeFix|clearInterval|defaults|getElement|noEllipsis|object|while|join|inArray|log|No|element|found|selector|each|number|HTMLElement|wrapInner|class|border|none|padding|margin|replaceWith|isFunction|originalContent|setTimeout|setInterval|100|extend|word|table|thead|tbody|tfoot|tr|col|colgroup|embed|param|ol|ul|dl|select|optgroup|option|textarea|script|style|continue|is|nodeType|letter|split|Math|floor|parent|size|prev|innerWidth|jquery|paddingTop|paddingBottom|parseInt|isNaN|jQuery".split("|"), 0, {})),
function (e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    function n(e) {
        return e
    }

    function r(e) {
        return decodeURIComponent(e.replace(t, " "))
    }

    function i(e) {
        e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return s.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    var t = /\+/g,
        s = e.cookie = function (t, o, u) {
            if (o !== undefined) {
                u = e.extend({}, s.defaults, u);
                if (typeof u.expires == "number") {
                    var a = u.expires,
                        f = u.expires = new Date;
                    f.setDate(f.getDate() + a)
                }
                return o = s.json ? JSON.stringify(o) : String(o), document.cookie = [s.raw ? t : encodeURIComponent(t), "=", s.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
            }
            var l = s.raw ? n : r,
                c = document.cookie.split("; "),
                h = t ? undefined : {};
            for (var p = 0, d = c.length; p < d; p++) {
                var v = c[p].split("="),
                    m = l(v.shift()),
                    g = l(v.join("="));
                if (t && t === m) {
                    h = i(g);
                    break
                }
                t || (h[m] = i(g))
            }
            return h
        };
    s.defaults = {}, e.removeCookie = function (t, n) {
        return e.cookie(t) !== undefined ? (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })), !0) : !1
    }
});
var swfobject = function () {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]()
    }

    function k(e) {
        b ? e() : c[c.length] = e
    }

    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function () {
                n(), t()
            }
        } else u.onload = t
    }

    function A() {
        l ? O() : M()
    }

    function O() {
        var n = a.getElementsByTagName("body")[0],
            r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function () {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else M()
    }

    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id,
                    i = h[n].callbackFn,
                    s = {
                        success: !1,
                        id: r
                    };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                        var u = {};
                        u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                        var a = {}, f = o.getElementsByTagName("param"),
                            l = f.length;
                        for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                        P(u, a, r, i)
                    } else H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }

    function _(n) {
        var r = null,
            i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e) r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }

    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }

    function P(t, n, r, i) {
        w = !0, g = i || null, y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn",
                l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none",
                function () {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }

    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none",
            function () {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else e.parentNode.replaceChild(B(e), e)
    }

    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }

    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }

    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }

    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function () {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }

    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }

    function U(e) {
        return a.createElement(e)
    }

    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }

    function W(e) {
        var t = T.pv,
            n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }

    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }

    function V(e, t) {
        if (!x) return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }

    function $(t) {
        var n = /[\\\"<>\.;]/,
            r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = !1,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = !1,
        w = !1,
        E, S, x = !0,
        T = function () {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                v = !1,
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !! f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof u.ActiveXObject != e) try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {}
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function () {
            if (!T.w3) return;
            (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function () {
                a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
            }), u == top && function () {
                if (b) return;
                try {
                    a.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }()), T.wk && function () {
                if (b) return;
                if (!/loaded|complete/.test(a.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }(), L(C))
        }(),
        J = function () {
            T.ie && T.win && window.attachEvent("onunload", function () {
                var e = d.length;
                for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
                var n = p.length;
                for (var r = 0; r < n; r++) I(p[r]);
                for (var i in T) T[i] = null;
                T = null;
                for (var s in swfobject) swfobject[s] = null;
                swfobject = null
            })
        }();
    return {
        registerObject: function (e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        },
        getObjectById: function (e) {
            if (T.w3) return _(e)
        },
        embedSWF: function (n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function () {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l) p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f) v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a) typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function () {
            x = !1
        },
        ua: T,
        getFlashPlayerVersion: function () {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function (e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function (e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function (e) {
            T.w3 && I(e)
        },
        createCSS: function (e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function (e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null) return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e) return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function () {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }
    }
}(),
    SWFUpload;
SWFUpload == undefined && (SWFUpload = function (e) {
    this.initSWFUpload(e)
}), SWFUpload.prototype.initSWFUpload = function (e) {
    try {
        this.customSettings = {}, this.settings = e, this.eventQueue = [], this.movieName = "SWFUpload_" + SWFUpload.movieCount++, this.movieElement = null, SWFUpload.instances[this.movieName] = this, this.initSettings(), this.loadFlash(), this.displayDebugInfo()
    } catch (t) {
        throw delete SWFUpload.instances[this.movieName], t
    }
}, SWFUpload.instances = {}, SWFUpload.movieCount = 0, SWFUpload.version = "2.2.0 2009-03-25", SWFUpload.QUEUE_ERROR = {
    QUEUE_LIMIT_EXCEEDED: -100,
    FILE_EXCEEDS_SIZE_LIMIT: -110,
    ZERO_BYTE_FILE: -120,
    INVALID_FILETYPE: -130
}, SWFUpload.UPLOAD_ERROR = {
    HTTP_ERROR: -200,
    MISSING_UPLOAD_URL: -210,
    IO_ERROR: -220,
    SECURITY_ERROR: -230,
    UPLOAD_LIMIT_EXCEEDED: -240,
    UPLOAD_FAILED: -250,
    SPECIFIED_FILE_ID_NOT_FOUND: -260,
    FILE_VALIDATION_FAILED: -270,
    FILE_CANCELLED: -280,
    UPLOAD_STOPPED: -290
}, SWFUpload.FILE_STATUS = {
    QUEUED: -1,
    IN_PROGRESS: -2,
    ERROR: -3,
    COMPLETE: -4,
    CANCELLED: -5
}, SWFUpload.BUTTON_ACTION = {
    SELECT_FILE: -100,
    SELECT_FILES: -110,
    START_UPLOAD: -120
}, SWFUpload.CURSOR = {
    ARROW: -1,
    HAND: -2
}, SWFUpload.WINDOW_MODE = {
    WINDOW: "window",
    TRANSPARENT: "transparent",
    OPAQUE: "opaque"
}, SWFUpload.completeURL = function (e) {
    if (typeof e != "string" || e.match(/^https?:\/\//i) || e.match(/^\//)) return e;
    var t = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
        n = window.location.pathname.lastIndexOf("/");
    return n <= 0 ? path = "/" : path = window.location.pathname.substr(0, n) + "/", path + e
}, SWFUpload.prototype.initSettings = function () {
    this.ensureDefault = function (e, t) {
        this.settings[e] = this.settings[e] == undefined ? t : this.settings[e]
    }, this.ensureDefault("upload_url", ""), this.ensureDefault("preserve_relative_urls", !1), this.ensureDefault("file_post_name", "Filedata"), this.ensureDefault("post_params", {}), this.ensureDefault("use_query_string", !1), this.ensureDefault("requeue_on_error", !1), this.ensureDefault("http_success", []), this.ensureDefault("assume_success_timeout", 0), this.ensureDefault("file_types", "*.*"), this.ensureDefault("file_types_description", "All Files"), this.ensureDefault("file_size_limit", 0), this.ensureDefault("file_upload_limit", 0), this.ensureDefault("file_queue_limit", 0), this.ensureDefault("flash_url", "swfupload.swf"), this.ensureDefault("prevent_swf_caching", !0), this.ensureDefault("button_image_url", ""), this.ensureDefault("button_width", 1), this.ensureDefault("button_height", 1), this.ensureDefault("button_text", ""), this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"), this.ensureDefault("button_text_top_padding", 0), this.ensureDefault("button_text_left_padding", 0), this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES), this.ensureDefault("button_disabled", !1), this.ensureDefault("button_placeholder_id", ""), this.ensureDefault("button_placeholder", null), this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW), this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW), this.ensureDefault("debug", !1), this.settings.debug_enabled = this.settings.debug, this.settings.return_upload_start_handler = this.returnUploadStart, this.ensureDefault("swfupload_loaded_handler", null), this.ensureDefault("file_dialog_start_handler", null), this.ensureDefault("file_queued_handler", null), this.ensureDefault("file_queue_error_handler", null), this.ensureDefault("file_dialog_complete_handler", null), this.ensureDefault("upload_start_handler", null), this.ensureDefault("upload_progress_handler", null), this.ensureDefault("upload_error_handler", null), this.ensureDefault("upload_success_handler", null), this.ensureDefault("upload_complete_handler", null), this.ensureDefault("debug_handler", this.debugMessage), this.ensureDefault("custom_settings", {}), this.customSettings = this.settings.custom_settings, !this.settings.prevent_swf_caching || (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()), this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url), this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)), delete this.ensureDefault
}, SWFUpload.prototype.loadFlash = function () {
    var e, t;
    if (document.getElementById(this.movieName) !== null) throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
    e = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
    if (e == undefined) throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
    t = document.createElement("div"), t.innerHTML = this.getFlashHTML(), e.parentNode.replaceChild(t.firstChild, e), window[this.movieName] == undefined && (window[this.movieName] = this.getMovieElement())
}, SWFUpload.prototype.getFlashHTML = function () {
    return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
}, SWFUpload.prototype.getFlashVars = function () {
    var e = this.buildParamString(),
        t = this.settings.http_success.join(",");
    return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(t), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(e), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
}, SWFUpload.prototype.getMovieElement = function () {
    this.movieElement == undefined && (this.movieElement = document.getElementById(this.movieName));
    if (this.movieElement === null) throw "Could not find Flash element";
    return this.movieElement
}, SWFUpload.prototype.buildParamString = function () {
    var e = this.settings.post_params,
        t = [];
    if (typeof e == "object")
        for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n.toString()) + "=" + encodeURIComponent(e[n].toString()));
    return t.join("&amp;")
}, SWFUpload.prototype.destroy = function () {
    try {
        this.cancelUpload(null, !1);
        var e = null;
        e = this.getMovieElement();
        if (e && typeof e.CallFunction == "unknown") {
            for (var t in e) try {
                typeof e[t] == "function" && (e[t] = null)
            } catch (n) {}
            try {
                e.parentNode.removeChild(e)
            } catch (r) {}
        }
        return window[this.movieName] = null, SWFUpload.instances[this.movieName] = null, delete SWFUpload.instances[this.movieName], this.movieElement = null, this.settings = null, this.customSettings = null, this.eventQueue = null, this.movieName = null, !0
    } catch (i) {
        return !1
    }
}, SWFUpload.prototype.displayDebugInfo = function () {
    this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler == "function").toString(), "\n", "	", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler == "function").toString(), "\n", "	", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler == "function").toString(), "\n", "	", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler == "function").toString(), "\n", "	", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler == "function").toString(), "\n", "	", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler == "function").toString(), "\n", "	", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler == "function").toString(), "\n", "	", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler == "function").toString(), "\n", "	", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler == "function").toString(), "\n", "	", "debug_handler assigned:             ", (typeof this.settings.debug_handler == "function").toString(), "\n"].join(""))
}, SWFUpload.prototype.addSetting = function (e, t, n) {
    return t == undefined ? this.settings[e] = n : this.settings[e] = t
}, SWFUpload.prototype.getSetting = function (e) {
    return this.settings[e] != undefined ? this.settings[e] : ""
}, SWFUpload.prototype.callFlash = function (functionName, argumentArray) {
    argumentArray = argumentArray || [];
    var movieElement = this.getMovieElement(),
        returnValue, returnString;
    try {
        returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"), returnValue = eval(returnString)
    } catch (ex) {
        throw "Call to " + functionName + " failed"
    }
    return returnValue != undefined && typeof returnValue.post == "object" && (returnValue = this.unescapeFilePostParams(returnValue)), returnValue
}, SWFUpload.prototype.selectFile = function () {
    this.callFlash("SelectFile")
}, SWFUpload.prototype.selectFiles = function () {
    this.callFlash("SelectFiles")
}, SWFUpload.prototype.startUpload = function (e) {
    this.callFlash("StartUpload", [e])
}, SWFUpload.prototype.cancelUpload = function (e, t) {
    t !== !1 && (t = !0), this.callFlash("CancelUpload", [e, t])
}, SWFUpload.prototype.stopUpload = function () {
    this.callFlash("StopUpload")
}, SWFUpload.prototype.getStats = function () {
    return this.callFlash("GetStats")
}, SWFUpload.prototype.setStats = function (e) {
    this.callFlash("SetStats", [e])
}, SWFUpload.prototype.getFile = function (e) {
    return typeof e == "number" ? this.callFlash("GetFileByIndex", [e]) : this.callFlash("GetFile", [e])
}, SWFUpload.prototype.addFileParam = function (e, t, n) {
    return this.callFlash("AddFileParam", [e, t, n])
}, SWFUpload.prototype.removeFileParam = function (e, t) {
    this.callFlash("RemoveFileParam", [e, t])
}, SWFUpload.prototype.setUploadURL = function (e) {
    this.settings.upload_url = e.toString(), this.callFlash("SetUploadURL", [e])
}, SWFUpload.prototype.setPostParams = function (e) {
    this.settings.post_params = e, this.callFlash("SetPostParams", [e])
}, SWFUpload.prototype.addPostParam = function (e, t) {
    this.settings.post_params[e] = t, this.callFlash("SetPostParams", [this.settings.post_params])
}, SWFUpload.prototype.removePostParam = function (e) {
    delete this.settings.post_params[e], this.callFlash("SetPostParams", [this.settings.post_params])
}, SWFUpload.prototype.setFileTypes = function (e, t) {
    this.settings.file_types = e, this.settings.file_types_description = t, this.callFlash("SetFileTypes", [e, t])
}, SWFUpload.prototype.setFileSizeLimit = function (e) {
    this.settings.file_size_limit = e, this.callFlash("SetFileSizeLimit", [e])
}, SWFUpload.prototype.setFileUploadLimit = function (e) {
    this.settings.file_upload_limit = e, this.callFlash("SetFileUploadLimit", [e])
}, SWFUpload.prototype.setFileQueueLimit = function (e) {
    this.settings.file_queue_limit = e, this.callFlash("SetFileQueueLimit", [e])
}, SWFUpload.prototype.setFilePostName = function (e) {
    this.settings.file_post_name = e, this.callFlash("SetFilePostName", [e])
}, SWFUpload.prototype.setUseQueryString = function (e) {
    this.settings.use_query_string = e, this.callFlash("SetUseQueryString", [e])
}, SWFUpload.prototype.setRequeueOnError = function (e) {
    this.settings.requeue_on_error = e, this.callFlash("SetRequeueOnError", [e])
}, SWFUpload.prototype.setHTTPSuccess = function (e) {
    typeof e == "string" && (e = e.replace(" ", "").split(",")), this.settings.http_success = e, this.callFlash("SetHTTPSuccess", [e])
}, SWFUpload.prototype.setAssumeSuccessTimeout = function (e) {
    this.settings.assume_success_timeout = e, this.callFlash("SetAssumeSuccessTimeout", [e])
}, SWFUpload.prototype.setDebugEnabled = function (e) {
    this.settings.debug_enabled = e, this.callFlash("SetDebugEnabled", [e])
}, SWFUpload.prototype.setButtonImageURL = function (e) {
    e == undefined && (e = ""), this.settings.button_image_url = e, this.callFlash("SetButtonImageURL", [e])
}, SWFUpload.prototype.setButtonDimensions = function (e, t) {
    this.settings.button_width = e, this.settings.button_height = t;
    var n = this.getMovieElement();
    n != undefined && (n.style.width = e + "px", n.style.height = t + "px"), this.callFlash("SetButtonDimensions", [e, t])
}, SWFUpload.prototype.setButtonText = function (e) {
    this.settings.button_text = e, this.callFlash("SetButtonText", [e])
}, SWFUpload.prototype.setButtonTextPadding = function (e, t) {
    this.settings.button_text_top_padding = t, this.settings.button_text_left_padding = e, this.callFlash("SetButtonTextPadding", [e, t])
}, SWFUpload.prototype.setButtonTextStyle = function (e) {
    this.settings.button_text_style = e, this.callFlash("SetButtonTextStyle", [e])
}, SWFUpload.prototype.setButtonDisabled = function (e) {
    this.settings.button_disabled = e, this.callFlash("SetButtonDisabled", [e])
}, SWFUpload.prototype.setButtonAction = function (e) {
    this.settings.button_action = e, this.callFlash("SetButtonAction", [e])
}, SWFUpload.prototype.setButtonCursor = function (e) {
    this.settings.button_cursor = e, this.callFlash("SetButtonCursor", [e])
}, SWFUpload.prototype.queueEvent = function (e, t) {
    t == undefined ? t = [] : t instanceof Array || (t = [t]);
    var n = this;
    if (typeof this.settings[e] == "function") this.eventQueue.push(function () {
        this.settings[e].apply(this, t)
    }), setTimeout(function () {
        n.executeNextEvent()
    }, 0);
    else if (this.settings[e] !== null) throw "Event handler " + e + " is unknown or is not a function"
}, SWFUpload.prototype.executeNextEvent = function () {
    var e = this.eventQueue ? this.eventQueue.shift() : null;
    typeof e == "function" && e.apply(this)
}, SWFUpload.prototype.unescapeFilePostParams = function (e) {
    var t = /[$]([0-9a-f]{4})/i,
        n = {}, r;
    if (e != undefined) {
        for (var i in e.post)
            if (e.post.hasOwnProperty(i)) {
                r = i;
                var s;
                while ((s = t.exec(r)) !== null) r = r.replace(s[0], String.fromCharCode(parseInt("0x" + s[1], 16)));
                n[r] = e.post[i]
            }
        e.post = n
    }
    return e
}, SWFUpload.prototype.testExternalInterface = function () {
    try {
        return this.callFlash("TestExternalInterface")
    } catch (e) {
        return !1
    }
}, SWFUpload.prototype.flashReady = function () {
    var e = this.getMovieElement();
    if (!e) {
        this.debug("Flash called back ready but the flash movie can't be found.");
        return
    }
    this.cleanUp(e), this.queueEvent("swfupload_loaded_handler")
}, SWFUpload.prototype.cleanUp = function (e) {
    try {
        if (this.movieElement && typeof e.CallFunction == "unknown") {
            this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
            for (var t in e) try {
                typeof e[t] == "function" && (e[t] = null)
            } catch (n) {}
        }
    } catch (r) {}
    window.__flash__removeCallback = function (e, t) {
        try {
            e && (e[t] = null)
        } catch (n) {}
    }
}, SWFUpload.prototype.fileDialogStart = function () {
    this.queueEvent("file_dialog_start_handler")
}, SWFUpload.prototype.fileQueued = function (e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("file_queued_handler", e)
}, SWFUpload.prototype.fileQueueError = function (e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("file_queue_error_handler", [e, t, n])
}, SWFUpload.prototype.fileDialogComplete = function (e, t, n) {
    this.queueEvent("file_dialog_complete_handler", [e, t, n])
}, SWFUpload.prototype.uploadStart = function (e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("return_upload_start_handler", e)
}, SWFUpload.prototype.returnUploadStart = function (e) {
    var t;
    if (typeof this.settings.upload_start_handler == "function") e = this.unescapeFilePostParams(e), t = this.settings.upload_start_handler.call(this, e);
    else if (this.settings.upload_start_handler != undefined) throw "upload_start_handler must be a function";
    t === undefined && (t = !0), t = !! t, this.callFlash("ReturnUploadStart", [t])
}, SWFUpload.prototype.uploadProgress = function (e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_progress_handler", [e, t, n])
}, SWFUpload.prototype.uploadError = function (e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_error_handler", [e, t, n])
}, SWFUpload.prototype.uploadSuccess = function (e, t, n) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_success_handler", [e, t, n])
}, SWFUpload.prototype.uploadComplete = function (e) {
    e = this.unescapeFilePostParams(e), this.queueEvent("upload_complete_handler", e)
}, SWFUpload.prototype.debug = function (e) {
    this.queueEvent("debug_handler", e)
}, SWFUpload.prototype.debugMessage = function (e) {
    if (this.settings.debug) {
        var t, n = [];
        if (typeof e == "object" && typeof e.name == "string" && typeof e.message == "string") {
            for (var r in e) e.hasOwnProperty(r) && n.push(r + ": " + e[r]);
            t = n.join("\n") || "", n = t.split("\n"), t = "EXCEPTION: " + n.join("\nEXCEPTION: "), SWFUpload.Console.writeLine(t)
        } else SWFUpload.Console.writeLine(e)
    }
}, SWFUpload.Console = {}, SWFUpload.Console.writeLine = function (e) {
    var t, n;
    try {
        t = document.getElementById("SWFUpload_Console"), t || (n = document.createElement("form"), document.getElementsByTagName("body")[0].appendChild(n), t = document.createElement("textarea"), t.id = "SWFUpload_Console", t.style.fontFamily = "monospace", t.setAttribute("wrap", "off"), t.wrap = "off", t.style.overflow = "auto", t.style.width = "700px", t.style.height = "350px", t.style.margin = "5px", n.appendChild(t)), t.value += e + "\n", t.scrollTop = t.scrollHeight - t.clientHeight
    } catch (r) {
        alert("Exception: " + r.name + " Message: " + r.message)
    }
},
function (e) {
    var t = {
        init: function (t, r) {
            return t.uploader = t.uploadScript, t.onDialogClose = t.onSelect, t.onSelect = t.onAddQueueItem, t.onUploadError = t.onError, t.onUploadSuccess = t.onUploadComplete, t.onUploadStart = t.onUpload, this.each(function () {
                var i = e(this),
                    s = i.clone(),
                    o = e.extend({
                        id: i.attr("id"),
                        swf: "uploadify.swf",
                        uploader: "uploadify.php",
                        auto: !0,
                        buttonClass: "",
                        buttonCursor: "hand",
                        buttonImage: null,
                        buttonText: "SELECT FILES",
                        checkExisting: !1,
                        debug: !1,
                        fileObjName: "Filedata",
                        fileSizeLimit: 0,
                        fileTypeDesc: "All Files",
                        fileTypeExts: "*.*",
                        height: 30,
                        itemTemplate: !1,
                        method: "post",
                        multi: !0,
                        formData: {},
                        preventCaching: !1,
                        progressData: "percentage",
                        queueID: !1,
                        queueSizeLimit: 999,
                        removeCompleted: !0,
                        removeTimeout: 3,
                        requeueErrors: !1,
                        successTimeout: 30,
                        uploadLimit: 0,
                        width: 120,
                        overrideEvents: []
                    }, t),
                    u = {
                        assume_success_timeout: o.successTimeout,
                        button_placeholder_id: o.id,
                        button_width: o.width,
                        button_height: o.height,
                        button_text: null,
                        button_text_style: null,
                        button_text_top_padding: 0,
                        button_text_left_padding: 0,
                        button_action: o.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE,
                        button_disabled: !1,
                        button_cursor: o.buttonCursor == "arrow" ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND,
                        button_window_mode: SWFUpload.WINDOW_MODE.TRANSPARENT,
                        debug: o.debug,
                        requeue_on_error: o.requeueErrors,
                        file_post_name: o.fileObjName,
                        file_size_limit: o.fileSizeLimit,
                        file_types: o.fileTypeExts,
                        file_types_description: o.fileTypeDesc,
                        file_queue_limit: o.queueSizeLimit,
                        file_upload_limit: o.uploadLimit,
                        flash_url: o.swf,
                        prevent_swf_caching: o.preventCaching,
                        post_params: o.formData,
                        upload_url: o.uploader,
                        use_query_string: o.method == "get",
                        file_dialog_complete_handler: n.onDialogClose,
                        file_dialog_start_handler: n.onDialogOpen,
                        file_queued_handler: n.onSelect,
                        file_queue_error_handler: n.onSelectError,
                        swfupload_loaded_handler: o.onSWFReady,
                        upload_complete_handler: n.onUploadComplete,
                        upload_error_handler: n.onUploadError,
                        upload_progress_handler: n.onUploadProgress,
                        upload_start_handler: n.onUploadStart,
                        upload_success_handler: n.onUploadSuccess
                    };
                r && (u = e.extend(u, r)), u = e.extend(u, o);
                var a = swfobject.getFlashPlayerVersion(),
                    f = a.major >= 9;
                if (f) {
                    window["uploadify_" + o.id] = new SWFUpload(u);
                    var l = window["uploadify_" + o.id];
                    i.data("uploadify", l);
                    var c = e("<div />", {
                        id: o.id,
                        "class": "uploadify",
                        css: {
                            height: o.height + "px",
                            width: o.width + "px"
                        }
                    });
                    e("#" + l.movieName).wrap(c), c = e("#" + o.id), c.data("uploadify", l);
                    var h = e("<div />", {
                        id: o.id + "-button",
                        "class": "uploadify-button " + o.buttonClass
                    });
                    o.buttonImage && h.css({
                        "background-image": "url('" + o.buttonImage + "')",
                        "text-indent": "-9999px"
                    }), h.html('<span class="uploadify-button-text">' + o.buttonText + "</span>").css({
                        height: o.height + "px",
                        "line-height": o.height + "px",
                        width: o.width + "px"
                    }), c.append(h), e("#" + l.movieName).css({
                        position: "absolute",
                        "z-index": 1
                    });
                    if (!o.queueID) {
                        var p = e("<div />", {
                            id: o.id + "-queue",
                            "class": "uploadify-queue"
                        });
                        c.after(p), l.settings.queueID = o.id + "-queue", l.settings.defaultQueue = !0
                    }
                    l.queueData = {
                        files: {},
                        filesSelected: 0,
                        filesQueued: 0,
                        filesReplaced: 0,
                        filesCancelled: 0,
                        filesErrored: 0,
                        uploadsSuccessful: 0,
                        uploadsErrored: 0,
                        averageSpeed: 0,
                        queueLength: 0,
                        queueSize: 0,
                        uploadSize: 0,
                        queueBytesUploaded: 0,
                        uploadQueue: [],
                        errorMsg: "Some files were not added to the queue:"
                    }, l.original = s, l.wrapper = c, l.button = h, l.queue = p, o.onInit && o.onInit.call(i, l)
                } else o.onFallback && o.onFallback.call(i)
            })
        },
        cancel: function (t, n) {
            var r = arguments;
            this.each(function () {
                var n = e(this),
                    i = n.data("uploadify"),
                    s = i.settings,
                    o = -1;
                if (r[0])
                    if (r[0] == "*") {
                        var u = i.queueData.queueLength;
                        e("#" + s.queueID).find(".uploadify-queue-item").each(function () {
                            o++, r[1] === !0 ? i.cancelUpload(e(this).attr("id"), !1) : i.cancelUpload(e(this).attr("id")), e(this).find(".data").removeClass("data").html(" - Cancelled"), e(this).find(".uploadify-progress-bar").remove(), e(this).delay(100).fadeOut(500, function () {
                                e(this).remove()
                            })
                        }), i.queueData.queueSize = 0, i.queueData.queueLength = 0, s.onClearQueue && s.onClearQueue.call(n, u)
                    } else
                        for (var a = 0; a < r.length; a++) i.cancelUpload(r[a]), e("#" + r[a]).find(".data").removeClass("data").html(" - Cancelled"), e("#" + r[a]).find(".uploadify-progress-bar").remove(), e("#" + r[a]).delay(100).fadeOut(500, function () {
                            e(this).remove()
                        });
                    else {
                        var f = e("#" + s.queueID).find(".uploadify-queue-item").get(0);
                        $item = e(f), i.cancelUpload($item.attr("id")), $item.find(".data").removeClass("data").html(" - Cancelled"), $item.find(".uploadify-progress-bar").remove(), $item.delay(100).fadeOut(500, function () {
                            e(this).remove()
                        })
                    }
                var l = {
                    fileId: t.match(/[(\w)]+$/)[0]
                };
                s.onCancel && s.onCancel.call(this, l)
            })
        },
        destroy: function () {
            this.each(function () {
                var t = e(this),
                    n = t.data("uploadify"),
                    r = n.settings;
                n.destroy(), r.defaultQueue && e("#" + r.queueID).remove(), e("#" + r.id).replaceWith(n.original), r.onDestroy && r.onDestroy.call(this), delete n
            })
        },
        disable: function (t) {
            this.each(function () {
                var n = e(this),
                    r = n.data("uploadify"),
                    i = r.settings;
                t ? (r.button.addClass("disabled"), i.onDisable && i.onDisable.call(this)) : (r.button.removeClass("disabled"), i.onEnable && i.onEnable.call(this)), r.setButtonDisabled(t)
            })
        },
        settings: function (t, n, r) {
            var i = arguments,
                s = n;
            this.each(function () {
                var o = e(this),
                    u = o.data("uploadify"),
                    a = u.settings;
                if (typeof i[0] == "object")
                    for (var f in n) setData(f, n[f]);
                if (i.length === 1) s = a[t];
                else {
                    switch (t) {
                    case "uploader":
                        u.setUploadURL(n);
                        break;
                    case "formData":
                        r || (n = e.extend(a.formData, n)), u.setPostParams(a.formData);
                        break;
                    case "method":
                        n == "get" ? u.setUseQueryString(!0) : u.setUseQueryString(!1);
                        break;
                    case "fileObjName":
                        u.setFilePostName(n);
                        break;
                    case "fileTypeExts":
                        u.setFileTypes(n, a.fileTypeDesc);
                        break;
                    case "fileTypeDesc":
                        u.setFileTypes(a.fileTypeExts, n);
                        break;
                    case "fileSizeLimit":
                        u.setFileSizeLimit(n);
                        break;
                    case "uploadLimit":
                        u.setFileUploadLimit(n);
                        break;
                    case "queueSizeLimit":
                        u.setFileQueueLimit(n);
                        break;
                    case "buttonImage":
                        u.button.css("background-image", settingValue);
                        break;
                    case "buttonCursor":
                        n == "arrow" ? u.setButtonCursor(SWFUpload.CURSOR.ARROW) : u.setButtonCursor(SWFUpload.CURSOR.HAND);
                        break;
                    case "buttonText":
                        e("#" + a.id + "-button").find(".uploadify-button-text").html(n);
                        break;
                    case "width":
                        u.setButtonDimensions(n, a.height);
                        break;
                    case "height":
                        u.setButtonDimensions(a.width, n);
                        break;
                    case "multi":
                        n ? u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES) : u.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE)
                    }
                    a[t] = n
                }
            });
            if (i.length === 1) return s
        },
        stop: function () {
            this.each(function () {
                var t = e(this),
                    n = t.data("uploadify");
                n.queueData.averageSpeed = 0, n.queueData.uploadSize = 0, n.queueData.bytesUploaded = 0, n.queueData.uploadQueue = [], n.stopUpload()
            })
        },
        upload: function () {
            var t = arguments;
            this.each(function () {
                var n = e(this),
                    r = n.data("uploadify");
                r.queueData.averageSpeed = 0, r.queueData.uploadSize = 0, r.queueData.bytesUploaded = 0, r.queueData.uploadQueue = [];
                if (t[0])
                    if (t[0] == "*") r.queueData.uploadSize = r.queueData.queueSize, r.queueData.uploadQueue.push("*"), r.startUpload();
                    else {
                        for (var i = 0; i < t.length; i++) r.queueData.uploadSize += r.queueData.files[t[i]].size, r.queueData.uploadQueue.push(t[i]);
                        r.startUpload(r.queueData.uploadQueue.shift())
                    } else r.startUpload()
            })
        },
        clearQueue: function () {}
    }, n = {
            onDialogOpen: function () {
                var e = this.settings;
                this.queueData.errorMsg = "Some files were not added to the queue:", this.queueData.filesReplaced = 0, this.queueData.filesCancelled = 0, e.onDialogOpen && e.onDialogOpen.call(this)
            },
            onDialogClose: function (t, n, r) {
                var i = this.settings;
                this.queueData.filesErrored = t - n, this.queueData.filesSelected = t, this.queueData.filesQueued = n - this.queueData.filesCancelled, this.queueData.queueLength = r, e.inArray("onDialogClose", i.overrideEvents) < 0 && this.queueData.filesErrored > 0 && alert(this.queueData.errorMsg), i.onDialogClose && i.onDialogClose.call(this, this.queueData), i.auto && e("#" + i.id).uploadify("upload", "*")
            },
            onSelect: function (t) {
                var n = this.settings,
                    r = {};
                for (var i in this.queueData.files) {
                    r = this.queueData.files[i];
                    if (r.uploaded != 1 && r.name == t.name) {
                        var s = confirm('The file named "' + t.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
                        if (!s) return this.cancelUpload(t.id), this.queueData.filesCancelled++, !1;
                        e("#" + r.id).remove(), this.cancelUpload(r.id), this.queueData.filesReplaced++
                    }
                }
                var o = Math.round(t.size / 1024),
                    u = "KB";
                o > 1e3 && (o = Math.round(o / 1e3), u = "MB");
                var a = o.toString().split(".");
                o = a[0], a.length > 1 && (o += "." + a[1].substr(0, 2)), o += u;
                var f = t.name;
                f.length > 25 && (f = f.substr(0, 25) + "..."), itemData = {
                    fileID: n.id + "-file-" + t.id,
                    instanceID: n.id,
                    fileName: f,
                    fileSize: o
                }, n.itemTemplate == 0 && (n.itemTemplate = '<div id="${fileID}" class="uploadify-queue-item">					<div class="cancel">						<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>					</div>					<span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>					<div class="uploadify-progress">						<div class="uploadify-progress-bar"><!--Progress Bar--></div>					</div>				</div>');
                if (e.inArray("onSelect", n.overrideEvents) < 0) {
                    itemHTML = n.itemTemplate;
                    for (var l in itemData) itemHTML = itemHTML.replace(new RegExp("\\$\\{" + l + "\\}", "g"), itemData[l]);
                    itemHTML = e(itemHTML), window[itemData.fileID] = itemHTML;
                    var c = itemData.fileID;
                    itemHTML.find(".close").bind("click", function () {
                        return e("#" + itemData.instanceID).uploadify("cancel", c), !1
                    }), e("#" + n.queueID).append(itemHTML)
                }
                this.queueData.queueSize += t.size, this.queueData.files[t.id] = t, n.onSelect && n.onSelect.apply(this, arguments)
            },
            onSelectError: function (t, n, r) {
                var i = this.settings;
                if (e.inArray("onSelectError", i.overrideEvents) < 0) switch (n) {
                case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                    i.queueSizeLimit > r ? this.queueData.errorMsg += "\nThe number of files selected exceeds the remaining upload limit (" + r + ")." : this.queueData.errorMsg += "\nThe number of files selected exceeds the queue size limit (" + i.queueSizeLimit + ").";
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" exceeds the size limit (' + i.fileSizeLimit + ").";
                    break;
                case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" is empty.';
                    break;
                case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                    this.queueData.errorMsg += '\nThe file "' + t.name + '" is not an accepted file type (' + i.fileTypeDesc + ")."
                }
                n != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED && delete this.queueData.files[t.id], i.onSelectError && i.onSelectError.apply(this, arguments)
            },
            onQueueComplete: function () {
                this.settings.onQueueComplete && this.settings.onQueueComplete.call(this, this.settings.queueData)
            },
            onUploadComplete: function (t) {
                var n = this.settings,
                    r = this,
                    i = this.getStats();
                this.queueData.queueLength = i.files_queued, this.queueData.uploadQueue[0] == "*" ? this.queueData.queueLength > 0 ? this.startUpload() : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData)) : this.queueData.uploadQueue.length > 0 ? this.startUpload(this.queueData.uploadQueue.shift()) : (this.queueData.uploadQueue = [], n.onQueueComplete && n.onQueueComplete.call(this, this.queueData));
                if (e.inArray("onUploadComplete", n.overrideEvents) < 0)
                    if (n.removeCompleted) switch (t.filestatus) {
                    case SWFUpload.FILE_STATUS.COMPLETE:
                        setTimeout(function () {
                            e("#" + t.id) && (r.queueData.queueSize -= t.size, r.queueData.queueLength -= 1, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500, function () {
                                e(this).remove()
                            }))
                        }, n.removeTimeout * 1e3);
                        break;
                    case SWFUpload.FILE_STATUS.ERROR:
                        n.requeueErrors || setTimeout(function () {
                            e("#" + t.id) && (r.queueData.queueSize -= t.size, r.queueData.queueLength -= 1, delete r.queueData.files[t.id], e("#" + t.id).fadeOut(500, function () {
                                e(this).remove()
                            }))
                        }, n.removeTimeout * 1e3)
                    } else t.uploaded = !0;
                n.onUploadComplete && n.onUploadComplete.call(this, t)
            },
            onUploadError: function (t, n, r) {
                var i = this.settings,
                    s = "Error";
                switch (n) {
                case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
                    s = "HTTP Error (" + r + ")";
                    break;
                case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
                    s = "Missing Upload URL";
                    break;
                case SWFUpload.UPLOAD_ERROR.IO_ERROR:
                    s = "IO Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
                    s = "Security Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
                    alert("The upload limit has been reached (" + r + ")."), s = "Exceeds Upload Limit";
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
                    s = "Failed";
                    break;
                case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
                    s = "Validation Error";
                    break;
                case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
                    s = "Cancelled", this.queueData.queueSize -= t.size, this.queueData.queueLength -= 1;
                    if (t.status == SWFUpload.FILE_STATUS.IN_PROGRESS || e.inArray(t.id, this.queueData.uploadQueue) >= 0) this.queueData.uploadSize -= t.size;
                    i.onCancel && i.onCancel.call(this, t), delete this.queueData.files[t.id];
                    break;
                case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
                    s = "Stopped"
                }
                e.inArray("onUploadError", i.overrideEvents) < 0 && (n != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && n != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED && e("#" + t.id).addClass("uploadify-error"), e("#" + t.id).find(".uploadify-progress-bar").css("width", "1px"), n != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && t.status != SWFUpload.FILE_STATUS.COMPLETE && e("#" + t.id).find(".data").html(" - " + s));
                var o = this.getStats();
                this.queueData.uploadsErrored = o.upload_errors, i.onUploadError && i.onUploadError.call(this, t, n, r, s)
            },
            onUploadProgress: function (t, n, r) {
                var i = this.settings,
                    s = new Date,
                    o = s.getTime(),
                    u = o - this.timer;
                u > 500 && (this.timer = o);
                var a = n - this.bytesLoaded;
                this.bytesLoaded = n;
                var f = this.queueData.queueBytesUploaded + n,
                    l = Math.round(n / r * 100),
                    c = "KB/s",
                    h = 0,
                    p = a / 1024 / (u / 1e3);
                p = Math.floor(p * 10) / 10, this.queueData.averageSpeed > 0 ? this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + p) / 2) : this.queueData.averageSpeed = Math.floor(p), p > 1e3 && (h = p * .001, this.queueData.averageSpeed = Math.floor(h), c = "MB/s"), e.inArray("onUploadProgress", i.overrideEvents) < 0 && (i.progressData == "percentage" ? e("#" + t.id).find(".data").html(" - " + l + "%") : i.progressData == "speed" && u > 500 && e("#" + t.id).find(".data").html(" - " + this.queueData.averageSpeed + c), e("#" + t.id).find(".uploadify-progress-bar").css("width", l + "%")), i.onUploadProgress && i.onUploadProgress.call(this, t, n, r, f, this.queueData.uploadSize)
            },
            onUploadStart: function (t) {
                var n = this.settings,
                    r = new Date;
                this.timer = r.getTime(), this.bytesLoaded = 0, this.queueData.uploadQueue.length == 0 && (this.queueData.uploadSize = t.size), n.checkExisting && e.ajax({
                    type: "POST",
                    async: !1,
                    url: n.checkExisting,
                    data: {
                        filename: t.name
                    },
                    success: function (n) {
                        if (n == 1) {
                            var r = confirm('A file with the name "' + t.name + '" already exists on the server.\nWould you like to replace the existing file?');
                            r || (this.cancelUpload(t.id), e("#" + t.id).remove(), this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0 && (this.queueData.uploadQueue[0] == "*" ? this.startUpload() : this.startUpload(this.queueData.uploadQueue.shift())))
                        }
                    }
                }), n.onUploadStart && n.onUploadStart.call(this, t)
            },
            onUploadSuccess: function (t, n, r) {
                var i = this.settings,
                    s = this.getStats();
                this.queueData.uploadsSuccessful = s.successful_uploads, this.queueData.queueBytesUploaded += t.size, e.inArray("onUploadSuccess", i.overrideEvents) < 0 && e("#" + t.id).find(".data").html(" - Complete"), t.fileId = t.id, t.queueItem = window[i.id + "-file-" + t.id], i.onUploadSuccess && i.onUploadSuccess.call(this, t, n, r)
            }
        };
    e.fn.uploadify = function (n) {
        if (t[n]) return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "object" || !n) return t.init.apply(this, arguments);
        e.error("The method " + n + " does not exist in $.uploadify")
    }
}($),
function (e) {
    var t = {
        init: function (n) {
            return this.each(function () {
                var r = e(this);
                r.data("uploadifive", {
                    inputs: {},
                    inputCount: 0,
                    fileID: 0,
                    queue: {
                        count: 0,
                        selected: 0,
                        replaced: 0,
                        errors: 0,
                        queued: 0,
                        cancelled: 0
                    },
                    uploads: {
                        current: 0,
                        attempts: 0,
                        successful: 0,
                        errors: 0,
                        count: 0
                    }
                });
                var s = r.data("uploadifive"),
                    o = s.settings = e.extend({
                        auto: !0,
                        buttonClass: !1,
                        buttonText: "Select Files",
                        checkScript: !1,
                        dnd: !0,
                        dropTarget: !1,
                        fileObjName: "Filedata",
                        fileSizeLimit: 0,
                        fileType: !1,
                        formData: {},
                        height: 30,
                        itemTemplate: !1,
                        method: "post",
                        multi: !0,
                        overrideEvents: [],
                        queueID: !1,
                        queueSizeLimit: 0,
                        removeCompleted: !1,
                        simUploadLimit: 0,
                        truncateLength: 0,
                        uploadLimit: 0,
                        totalUploadLimit: 0,
                        uploadScript: "uploadifive.php",
                        width: 100
                    }, n);
                if (isNaN(o.fileSizeLimit)) {
                    var u = parseInt(o.fileSizeLimit) * 1.024;
                    o.fileSizeLimit.indexOf("KB") > -1 ? o.fileSizeLimit = u * 1e3 : o.fileSizeLimit.indexOf("MB") > -1 ? o.fileSizeLimit = u * 1e6 : o.fileSizeLimit.indexOf("GB") > -1 && (o.fileSizeLimit = u * 1e9)
                } else o.fileSizeLimit = o.fileSizeLimit * 1024;
                s.inputTemplate = e('<input type="file" class="uploadifive-input">').css({
                    "font-size": o.height + "px",
                    opacity: 0,
                    position: "absolute",
                    right: "-3px",
                    top: "-3px",
                    "z-index": 999
                }), s.createInput = function () {
                    var n = s.inputTemplate.clone(),
                        i = n.name = "input" + s.inputCount++;
                    o.multi && n.attr("multiple", !0), n.bind("change", function () {
                        s.queue.selected = 0, s.queue.replaced = 0, s.queue.errors = 0, s.queue.queued = 0;
                        var n = this.files.length;
                        s.queue.selected = n, typeof o.onSelect == "function" && o.onSelect.call(r, s.queue);
                        if (s.queue.count + n > o.queueSizeLimit && o.queueSizeLimit !== 0) return e.inArray("onError", o.overrideEvents) < 0 && alert("The maximum number of queue items has been reached (" + o.queueSizeLimit + ").  Please select fewer files."), typeof o.onError == "function" && o.onError.call(r, "QUEUE_LIMIT_EXCEEDED"), !1;
                        for (var u = 0; u < n; u++) file = this.files[u], s.addQueueItem(file);
                        s.inputs[i] = this, s.createInput(), o.auto && t.upload.call(r)
                    }), s.currentInput && s.currentInput.hide(), s.button.append(n), s.currentInput = n
                }, s.destroyInput = function (t) {
                    e(s.inputs[t]).remove(), delete s.inputs[t], s.inputCount--
                }, s.drop = function (n) {
                    s.queue.selected = 0, s.queue.replaced = 0, s.queue.errors = 0, s.queue.queued = 0;
                    var i = n.dataTransfer,
                        u = i.name = "input" + s.inputCount++,
                        a = i.files.length;
                    s.queue.selected = a;
                    if (s.queue.count + a > o.queueSizeLimit && o.queueSizeLimit !== 0) e.inArray("onError", o.overrideEvents) < 0 && alert("The maximum number of queue items has been reached (" + o.queueSizeLimit + ").  Please select fewer files."), typeof o.onError == "function" && o.onError.call(r, "QUEUE_LIMIT_EXCEEDED");
                    else {
                        for (var f = 0; f < a; f++) file = i.files[f], s.addQueueItem(file);
                        s.inputs[u] = i
                    }
                    o.auto && t.upload.call(r), typeof o.onDrop == "function" && o.onDrop.call(r, i.files, i.files.length), n.preventDefault(), n.stopPropagation()
                }, s.fileExistsInQueue = function (e) {
                    for (var t in s.inputs) {
                        input = s.inputs[t], limit = input.files.length;
                        for (var n = 0; n < limit; n++) {
                            existingFile = input.files[n];
                            if (existingFile.name == e.name && !existingFile.complete) return !0
                        }
                    }
                    return !1
                }, s.removeExistingFile = function (e) {
                    for (var n in s.inputs) {
                        input = s.inputs[n], limit = input.files.length;
                        for (var i = 0; i < limit; i++) existingFile = input.files[i], existingFile.name == e.name && !existingFile.complete && (s.queue.replaced++, t.cancel.call(r, existingFile, !0, !1))
                    }
                }, o.itemTemplate == 0 ? s.queueItem = e('<div class="uploadifive-queue-item">                        <a class="close" href="#">X</a>                        <div><span class="filename"></span><span class="filesize"></span><span class="fileinfo"></span></div>                        <div class="progress">                            <div class="progress-bar"></div>                        </div>                    </div>') : s.queueItem = e(o.itemTemplate), s.addQueueItem = function (n) {
                    if (e.inArray("onAddQueueItem", o.overrideEvents) < 0) {
                        s.removeExistingFile(n), n.queueItem = s.queueItem.clone(), n.queueItem.attr("id", "upload-file-" + s.fileID++), n.fileId = s.fileID.toString(), n.queueItem.find(".close").bind("click", function () {
                            return t.cancel.call(r, n), !1
                        });
                        var i = byteSize = Math.round(n.size / 1024 * 100) * .01,
                            u = "KB";
                        byteSize > 1e3 && (i = Math.round(i * .001 * 100) * .01, u = "MB"), i = i.toFixed(2);
                        var a = n.name;
                        if (a.length > o.truncateLength && o.truncateLength != 0) {
                            var f = a.match(/([a-zA-Z\d]+)$/)[0];
                            a = a.substring(0, o.truncateLength) + "..." + f
                        }
                        n.queueItem.find(".filename").html(a), n.queueItem.find(".filesize").html(i + u), n.queueItem.data("file", n), s.queueEl.append(n.queueItem)
                    }
                    typeof o.onAddQueueItem == "function" && o.onAddQueueItem.call(r, n);
                    if (o.fileType)
                        if (e.isArray(o.fileType)) {
                            var l = !1;
                            for (var c = 0; c < o.fileType.length; c++) n.type.indexOf(o.fileType[c]) > -1 && (l = !0);
                            l || s.error("FORBIDDEN_FILE_TYPE", n)
                        } else n.type.indexOf(o.fileType) < 0 && s.error("FORBIDDEN_FILE_TYPE", n);
                    n.size > o.fileSizeLimit && o.fileSizeLimit != 0 && s.error("FILE_SIZE_LIMIT_EXCEEDED", n), /[<>"'\/\\\(\)\{\}\[\]]/.test(n.name) ? s.error("INVALID_FILE_NAME", n) : (s.queue.queued++, s.queue.count++)
                }, s.removeQueueItem = function (t, n, r) {
                    r || (r = 0);
                    var i = n ? 0 : 500;
                    t.queueItem && (t.queueItem.find(".progress-bar").width(0), t.queueItem.delay(r).fadeOut(i, function () {
                        e(this).remove()
                    }), delete t.queueItem, s.queue.queued--, s.queue.count--)
                }, s.filesToUpload = function () {
                    var e = 0;
                    for (var t in s.inputs) {
                        input = s.inputs[t], limit = input.files.length;
                        for (var n = 0; n < limit; n++) file = input.files[n], !file.skip && !file.complete && e++
                    }
                    return e
                }, s.checkExists = function (n) {
                    if (e.inArray("onCheck", o.overrideEvents) < 0) {
                        e.ajaxSetup({
                            async: !1
                        });
                        var i = e.extend(o.formData, {
                            filename: n.name
                        });
                        e.post(o.checkScript, i, function (e) {
                            n.exists = parseInt(e)
                        });
                        if (n.exists && !confirm("A file named " + n.name + " already exists in the upload folder.\nWould you like to replace it?")) return t.cancel.call(r, n), !0
                    }
                    return typeof o.onCheck == "function" && o.onCheck.call(r, n, n.exists), !1
                }, s.uploadFile = function (t, n) {
                    if (!t.skip && !t.complete && !t.uploading) {
                        t.uploading = !0, s.uploads.current++, s.uploads.attempted++, xhr = t.xhr = new XMLHttpRequest;
                        if (typeof FormData == "function" || typeof FormData == "object") {
                            var u = new FormData;
                            u.append(o.fileObjName, t);
                            for (i in o.formData) u.append(i, o.formData[i]);
                            xhr.open(o.method, o.uploadScript, !0), xhr.upload.addEventListener("progress", function (e) {
                                e.lengthComputable && s.progress(e, t)
                            }, !1), xhr.addEventListener("load", function (e) {
                                this.readyState == 4 && (t.uploading = !1, this.status == 200 ? t.xhr.responseText !== "Invalid file type." ? s.uploadComplete(e, t, n) : s.error(t.xhr.responseText, t, n) : this.status == 404 ? s.error("404_FILE_NOT_FOUND", t, n) : this.status == 403 ? s.error("403_FORBIDDEN", t, uplaodAll) : s.error("Unknown Error", t, n))
                            }), xhr.send(u)
                        } else {
                            var a = new FileReader;
                            a.onload = function (i) {
                                var u = "-------------------------" + (new Date).getTime(),
                                    a = "--",
                                    f = "\r\n",
                                    l = "";
                                l += a + u + f, l += 'Content-Disposition: form-data; name="' + o.fileObjName + '"', t.name && (l += '; filename="' + t.name + '"'), l += f, l += "Content-Type: application/octet-stream" + f + f, l += i.target.result + f;
                                for (key in o.formData) l += a + u + f, l += 'Content-Disposition: form-data; name="' + key + '"' + f + f, l += o.formData[key] + f;
                                l += a + u + a + f, xhr.upload.addEventListener("progress", function (e) {
                                    s.progress(e, t)
                                }, !1), xhr.addEventListener("load", function (e) {
                                    t.uploading = !1;
                                    var r = this.status;
                                    r == 404 ? s.error("404_FILE_NOT_FOUND", t, n) : t.xhr.responseText != "Invalid file type." ? s.uploadComplete(e, t, n) : s.error(t.xhr.responseText, t, n)
                                }, !1);
                                var c = o.uploadScript;
                                if (o.method == "get") {
                                    var h = e(o.formData).param();
                                    c += h
                                }
                                xhr.open(o.method, o.uploadScript, !0), xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + u), typeof o.onUploadFile == "function" && o.onUploadFile.call(r, t), xhr.sendAsBinary(l)
                            }, a.readAsBinaryString(t)
                        }
                    }
                }, s.progress = function (t, n) {
                    if (e.inArray("onProgress", o.overrideEvents) < 0) {
                        if (t.lengthComputable) var i = Math.round(t.loaded / t.total * 100);
                        n.queueItem.find(".fileinfo").html(i + "%"), n.queueItem.find(".progress-bar").css("width", i + "%")
                    }
                    typeof o.onProgress == "function" && o.onProgress.call(r, n, t)
                }, s.error = function (n, i, u) {
                    if (e.inArray("onError", o.overrideEvents) < 0) {
                        switch (n) {
                        case "404_FILE_NOT_FOUND":
                            errorMsg = "404 Error";
                            break;
                        case "403_FORBIDDEN":
                            errorMsg = "403 Forbidden";
                            break;
                        case "FORBIDDEN_FILE_TYPE":
                            errorMsg = "Forbidden File Type";
                            break;
                        case "FILE_SIZE_LIMIT_EXCEEDED":
                            errorMsg = "File Too Large";
                            break;
                        case "INVALID_FILE_NAME":
                            errorMsg = "Invalid file name";
                            break;
                        default:
                            errorMsg = "Unknown Error"
                        }
                        i.queueItem.addClass("error").find(".fileinfo").html(errorMsg), i.queueItem.find(".progress").remove()
                    }
                    typeof o.onError == "function" && o.onError.call(r, n, i), i.skip = !0, n == "404_FILE_NOT_FOUND" ? s.uploads.errors++ : s.queue.errors++, u && t.upload.call(r, null, !0)
                }, s.uploadComplete = function (n, i, u) {
                    e.inArray("onUploadComplete", o.overrideEvents) < 0 && (i.queueItem.find(".progress-bar").css("width", "100%"), i.queueItem.find(".fileinfo").html(" - Completed"), i.queueItem.find(".progress").slideUp(250), i.queueItem.addClass("complete")), typeof o.onUploadComplete == "function" && o.onUploadComplete.call(r, i, i.xhr.responseText), o.removeCompleted && setTimeout(function () {
                        t.cancel.call(r, i)
                    }, 3e3), i.complete = !0, s.uploads.successful++, s.uploads.count++, s.uploads.current--, delete i.xhr, u && t.upload.call(r, null, !0)
                }, s.queueComplete = function () {
                    typeof o.onQueueComplete == "function" && o.onQueueComplete.call(r, s.uploads)
                };
                if (!(window.File && window.FileList && window.Blob && (window.FileReader || window.FormData))) return typeof o.onFallback == "function" && o.onFallback.call(r), !1;
                o.id = "uploadifive-" + r.attr("id"), s.button = e('<div id="' + o.id + '" class="uploadifive-button">' + o.buttonText + "</div>"), o.buttonClass && s.button.addClass(o.buttonClass), s.button.css({
                    height: o.height,
                    "line-height": o.height + "px",
                    overflow: "hidden",
                    position: "relative",
                    "text-align": "center",
                    width: o.width
                }), r.before(s.button).appendTo(s.button).hide(), s.createInput.call(r), o.queueID ? s.queueEl = e("#" + o.queueID) : (o.queueID = o.id + "-queue", s.queueEl = e('<div id="' + o.queueID + '" class="uploadifyQueue js-uploadifyQueue" />'), s.button.after(s.queueEl));
                if (o.dnd) {
                    var a = o.dropTarget ? e(o.dropTarget) : s.queueEl.get(0);
                    a.addEventListener("dragleave", function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }, !1), a.addEventListener("dragenter", function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }, !1), a.addEventListener("dragover", function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }, !1), a.addEventListener("drop", s.drop, !1)
                }
                XMLHttpRequest.prototype.sendAsBinary || (XMLHttpRequest.prototype.sendAsBinary = function (e) {
                    function t(e) {
                        return e.charCodeAt(0) & 255
                    }
                    var n = Array.prototype.map.call(e, t),
                        r = new Uint8Array(n);
                    this.send(r.buffer)
                }), typeof o.onInit == "function" && o.onInit.call(r)
            })
        },
        debug: function () {
            return this.each(function () {
                console.log(e(this).data("uploadifive"))
            })
        },
        clearQueue: function () {
            this.each(function () {
                var t = e(this),
                    n = t.data("uploadifive"),
                    r = n.settings;
                typeof r.onClearQueue == "function" && r.onClearQueue.call(t, e("#" + n.settings.queueID))
            })
        },
        clearQueueAndCancel: function () {
            this.each(function () {
                var n = e(this),
                    r = n.data("uploadifive"),
                    s = r.settings;
                for (var o in r.inputs) {
                    input = r.inputs[o], limit = input.files.length;
                    for (i = 0; i < limit; i++) file = input.files[i], t.cancel.call(n, file)
                }
                typeof s.onClearQueue == "function" && s.onClearQueue.call(n, e("#" + r.settings.queueID))
            })
        },
        cancel: function (n, r, i) {
            i = typeof i == null || typeof i == "undefined" || i ? !0 : !1, this.each(function () {
                var s = e(this),
                    o = s.data("uploadifive"),
                    u = o.settings;
                typeof n == "string" && (isNaN(n) || (fileID = "uploadifive-" + e(this).attr("id") + "-file-" + n), n = e("#" + fileID).data("file")), n.skip = !0, o.filesCancelled++, n.uploading && (o.uploads.current--, o.queue.queued--, n.uploading = !1, n.xhr.abort(), delete n.xhr, t.upload.call(s)), e.inArray("onCancel", u.overrideEvents) < 0 && o.removeQueueItem(n, r, 2e3), typeof u.onCancel == "function" && i && u.onCancel.call(s, n, o.fileID)
            })
        },
        upload: function (t, n) {
            this.each(function () {
                var r = e(this),
                    i = r.data("uploadifive"),
                    s = i.settings;
                if (t) i.uploadFile.call(r, t);
                else if (i.uploads.count + i.uploads.current < s.uploadLimit || s.uploadLimit == 0) {
                    if (!n) {
                        i.uploads.attempted = 0, i.uploads.successsful = 0, i.uploads.errors = 0;
                        var o = i.filesToUpload();
                        typeof s.onUpload == "function" && s.onUpload.call(r, o)
                    }
                    e("#" + s.queueID).find(".uploadifive-queue-item").not(".error, .complete").each(function () {
                        _file = e(this).data("file");
                        if (i.uploads.current >= s.simUploadLimit && s.simUploadLimit !== 0 || i.uploads.current >= s.uploadLimit && s.uploadLimit !== 0 || i.uploads.count >= s.uploadLimit && s.uploadLimit !== 0) return !1;
                        s.checkScript ? (_file.checking = !0, skipFile = i.checkExists(_file), _file.checking = !1, skipFile || i.uploadFile(_file, !0)) : i.uploadFile(_file, !0)
                    }), e("#" + s.queueID).find(".uploadifive-queue-item").not(".error, .complete").size() == 0 && i.queueComplete()
                } else i.uploads.current == 0 && (e.inArray("onError", s.overrideEvents) < 0 && i.filesToUpload() > 0 && s.uploadLimit != 0 && alert("The maximum upload limit has been reached."), typeof s.onError == "function" && s.onError.call(r, "UPLOAD_LIMIT_EXCEEDED", i.filesToUpload()))
            })
        },
        destroy: function () {
            this.each(function () {
                var n = e(this),
                    r = n.data("uploadifive"),
                    i = r.settings;
                t.clearQueue.call(n), i.queueID || e("#" + i.queueID).remove(), n.siblings("input").remove(), n.show().insertBefore(r.button), r.button.remove(), typeof i.onDestroy == "function" && i.onDestroy.call(n)
            })
        },
        getSettings: function () {
            var t = e(this),
                n = t.data("uploadifive"),
                r = n.settings;
            return r
        },
        updateSetting: function (t, n) {
            var r = e(this),
                i = r.data("uploadifive"),
                s = i.settings;
            s[t] = n
        }
    };
    e.fn.uploadifive = function (n) {
        if (t[n]) return t[n].apply(this, Array.prototype.slice.call(arguments, 1));
        if (typeof n == "object" || !n) return t.init.apply(this, arguments);
        e.error("The method " + n + " does not exist in $.uploadifive")
    }
}(jQuery),
function (e) {
    e.fn.hasScrollBar = function () {
        return this.get(0).scrollHeight > this.height()
    }, e.fn.lionbars = function (t) {
        function z() {
            for (var t = 0; g[t] !== undefined; t++) rt(g[t]) && !e(g[t]).hasClass("nolionbars") && (target = g[t], ot(target), nt(target, S, E), Q(target, S, E), K(target), V(target), X(target), W(target), J())
        }

        function W(f) {
            var l = e(f);
            (S || E) && l.find(".lb-wrap").scroll(function (r) {
                l.find(".lb-v-scrollbar-slider").css({
                    top: -e(this).scrollTop() / l.attr("vratio")
                }), l.find(".lb-h-scrollbar-slider").css({
                    left: -e(this).scrollLeft() / l.attr("hratio")
                });
                if (l.find(".lb-v-scrollbar").height() == parseInt(l.find(".lb-v-scrollbar-slider").css("top")) + l.find(".lb-v-scrollbar-slider").height() && typeof t.reachedBottom == "function" && !v) {
                    v = !0;
                    var i = e(this);
                    t.reachedBottom.apply(e(this).children(".lb-content"), [
                        function () {
                            ot(e(i).parent(), {
                                height: e(i).children(".lb-content").get(0).scrollHeight,
                                width: e(i).children(".lb-content").get(0).scrollWidth
                            }), K(e(i).parent()), V(e(i).parent()), X(e(i).parent()), J(), v = !1
                        }
                    ])
                }
                if (l.find(".lb-h-scrollbar").width() == parseInt(l.find(".lb-h-scrollbar-slider").css("left")) + l.find(".lb-h-scrollbar-slider").width() && typeof t.reachedRight == "function" && !m) {
                    m = !0;
                    var i = e(this);
                    t.reachedRight.apply(e(this).children(".lb-content"), [
                        function () {
                            ot(e(i).parent(), {
                                height: e(i).children(".lb-content").get(0).scrollHeight,
                                width: e(i).children(".lb-content").get(0).scrollWidth
                            }), K(e(i).parent()), V(e(i).parent()), X(e(i).parent()), J(), m = !1
                        }
                    ])
                }
                autohide && (l.find(".lb-v-scrollbar, .lb-h-scrollbar").fadeIn(150), clearTimeout(n), n = setTimeout(function () {
                    l.find(".lb-v-scrollbar, .lb-h-scrollbar").fadeOut(150)
                }, 2e3))
            }), S && (l.find(".lb-v-scrollbar-slider").mousedown(function (t) {
                return a = t.pageY, i = !0, s = e(this), o = l.find(".lb-wrap"), c = o.parent().attr("vratio"), h = s.position().top, !1
            }), l.find(".lb-v-scrollbar").mousedown(function (t) {
                return e(t.target).hasClass("lb-v-scrollbar-slider") || l.find(".lb-wrap").scrollTop((t.pageY - e(this).offset().top) * Math.abs(l.attr("vratio")) - e(this).find(".lb-v-scrollbar-slider").height() / 2), !1
            })), E && (l.find(".lb-h-scrollbar-slider").mousedown(function (t) {
                return u = t.pageX, r = !0, s = e(this), o = l.find(".lb-wrap"), c = o.parent().attr("hratio"), h = s.position().left, !1
            }), l.find(".lb-h-scrollbar").mousedown(function (t) {
                return e(t.target).hasClass("lb-h-scrollbar-slider") || l.find(".lb-wrap").scrollLeft((t.pageX - e(this).offset().left) * Math.abs(l.attr("hratio")) - e(this).find(".lb-h-scrollbar-slider").width() / 2), !1
            })), (S || E) && autohide && (l.find(".lb-v-scrollbar, .lb-h-scrollbar").hide(), l.hover(function () {}, function () {
                l.find(".lb-v-scrollbar, .lb-h-scrollbar").fadeOut(150)
            }))
        }

        function X(t) {
            j = (P - e(t).find(".lb-wrap").get(0).scrollHeight - k - A) / (R - I), F = (D - e(t).find(".lb-wrap").get(0).scrollWidth - O - L) / (U - q);
            var n = e(t);
            n.attr("vratio", j), n.attr("hratio", F)
        }

        function V(t) {
            var n = e(t),
                r, i, s;
            n.find(".lb-v-scrollbar").length != 0 && (r = 20, s = P - n.find(".lb-v-scrollbar").height(), i = P - s - r, I = Math.round(P * i / M), I = I < r ? r : I), n.find(".lb-h-scrollbar").length != 0 && (r = 20, s = D - n.find(".lb-h-scrollbar").width(), i = D - s - r, q = Math.round(D * i / _), q = q < r ? r : q), n.find(".lb-v-scrollbar-slider").css({
                height: I
            }), n.find(".lb-h-scrollbar-slider").css({
                width: q
            })
        }

        function J() {
            b = 0, w = 0, E = !1, S = !1, x = 0, T = 0, N = 0, C = 0, k = 0, O = 0, A = 0, L = 0, M = 0, _ = 0, D = 0, P = 0, H = 0, B = 0, I = 0, q = 0, R = 0, U = 0
        }

        function K(t) {
            var n = e(t);
            S && E ? (R = n.height() - 12, U = n.width() - 12, n.find(".lb-v-scrollbar").css({
                height: R
            }), n.find(".lb-h-scrollbar").css({
                width: U
            })) : (R = n.height() - 4, U = n.width() - 4, n.find(".lb-v-scrollbar").css({
                height: R
            }), n.find(".lb-h-scrollbar").css({
                width: U
            }))
        }

        function Q(t, n, r) {
            var i = e(t);
            if (n || r) i.css({
                overflow: "hidden"
            }), Y(i, i.find(".lb-wrap")), G(i), Z(i, i.find(".lb-wrap"))
        }

        function G(t) {
            var n = e(t);
            n.css({
                width: n.width() + T + C,
                height: n.height() + x + N
            })
        }

        function Y(t, n) {
            var r = e(t),
                i = e(n);
            r.css({
                padding: 0
            }), i.css({
                "padding-top": x + "px",
                "padding-left": T + "px",
                "padding-bottom": N + "px",
                "padding-right": C + "px"
            })
        }

        function Z(t, n) {
            var r = e(t),
                i = e(n);
            r.css({
                position: "relative"
            }), i.css({
                width: r.width() + b - T - C,
                height: r.height() + w - x - N
            })
        }

        function et(t) {
            var n = e(t);
            n.css({
                overflow: "auto"
            }), b = D - H - O - L, n.css({
                overflow: "hidden"
            })
        }

        function tt(t) {
            var n = e(t);
            n.css({
                overflow: "auto"
            }), w = P - B - k - A, n.css({
                overflow: "hidden"
            })
        }

        function nt(t, n, r) {
            var i = e(t),
                s = i.attr("id"),
                o = 0;
            s !== undefined ? (i.wrapInner('<div class="lb-wrap" id="lb-wrap-' + y + "-" + s + '"></div>'), o = e("#lb-wrap-" + y + "-" + s)) : (i.wrapInner('<div class="lb-wrap" id="lb-wrap-' + y + '"></div>'), o = e("#lb-wrap-" + y)), o.wrapInner('<div class="lb-content"></div>'), n && (i.prepend('<div class="lb-v-scrollbar"></div>'), i.find(".lb-v-scrollbar").append('<div class="lb-v-scrollbar-slider"></div>')), r && (i.prepend('<div class="lb-h-scrollbar"></div>'), i.find(".lb-h-scrollbar").append('<div class="lb-h-scrollbar-slider"></div>')), y += 1
        }

        function rt(t) {
            var n = e(t);
            S = !1, E = !1, it(n), st(n), n.css({
                overflow: "hidden"
            }), n.get(0).scrollHeight > n.get(0).clientHeight && (S = !0), n.get(0).scrollWidth > n.get(0).clientWidth && (E = !0), n.css({
                overflow: "auto"
            });
            if (S || E) return !0
        }

        function it(t) {
            var n = e(t);
            x = parseInt(n.css("padding-top").replace("px", "")), T = parseInt(n.css("padding-left").replace("px", "")), N = parseInt(n.css("padding-bottom").replace("px", "")), C = parseInt(n.css("padding-right").replace("px", ""))
        }

        function st(t) {
            var n = e(t);
            k = parseInt(n.css("border-top-width").replace("px", "")), L = parseInt(n.css("border-right-width").replace("px", "")), A = parseInt(n.css("border-bottom-width").replace("px", "")), O = parseInt(n.css("border-left-width").replace("px", ""))
        }

        function ot(t, n) {
            var r = e(t).get(0);
            M = typeof n != "undefined" ? n.height : r.scrollHeight, _ = typeof n != "undefined" ? n.width : r.scrollWidth, B = r.clientHeight, H = r.clientWidth, P = r.offsetHeight, D = r.offsetWidth, et(e(t)), tt(e(t))
        }
        t = t || {}, autohide = t.autohide;
        var n, r = !1,
            i = !1,
            s = 0,
            o = 0,
            u, a, f, l, c, h, p, d = !1,
            v = !1,
            m = !1,
            g = e(this),
            y = 0,
            b = 0,
            w = 0,
            E = !1,
            S = !1,
            x = 0,
            T = 0,
            N = 0,
            C = 0,
            k = 0,
            L = 0,
            A = 0,
            O = 0,
            M = 0,
            _ = 0,
            D = 0,
            P = 0,
            H = 0,
            B = 0,
            j = 0,
            F = 0,
            I = 0,
            q = 0,
            R = 0,
            U = 0;
        return z(), e(document).mousemove(function (e) {
            i && (l = e.pageY, o.scrollTop((h + l - a) * Math.abs(c))), r && (f = e.pageX, o.scrollLeft((h + f - u) * Math.abs(c)))
        }), e(document).mouseup(function (e) {
            i && (i = !1), r && (r = !1)
        }), this.each(function () {})
    }
}(jQuery),
function (e) {
    e.fn.bPopup = function (t, n) {
        function S() {
            P(r.onOpen), l = (o.data("bPopup") || 0) + 1, h = u + l + "__", d = r.position[1] !== "auto", v = r.position[0] !== "auto", m = r.positionStyle === "fixed", b = i.outerHeight(!0), w = i.outerWidth(!0), r.loadUrl ? x() : T()
        }

        function x() {
            r.contentContainer = e(r.contentContainer || i);
            switch (r.content) {
            case "iframe":
                var t = e('<iframe class="b-iframe" scrolling="no" frameborder="0"></iframe>');
                t.appendTo(r.contentContainer), b = i.outerHeight(!0), w = i.outerWidth(!0), T(), t.attr("src", r.loadUrl), P(r.loadCallback);
                break;
            case "image":
                T(), e("<img />").load(function () {
                    P(r.loadCallback), k(e(this))
                }).attr("src", r.loadUrl).hide().appendTo(r.contentContainer);
                break;
            default:
                T(), e('<div class="b-ajax-wrapper"></div>').load(r.loadUrl, r.loadData, function (t, n, i) {
                    P(r.loadCallback(t, n, i)), k(e(this))
                }).hide().appendTo(r.contentContainer)
            }
        }

        function T() {
            r.modal && (e("." + h).length > 0 || e('<div class="b-modal ' + h + '"></div>').css({
                backgroundColor: r.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: r.zIndex + l
            }).appendTo(r.appendTo).fadeTo(r.speed, r.opacity)), H(), i.data("bPopup", r).data("id", h).css({
                left: r.transition === "slideIn" ? (y + w) * -1 : _(!(!r.follow[0] && v || m)),
                position: r.positionStyle || "absolute",
                top: r.transition === "slideDown" ? (g + w) * -1 : D(!(!r.follow[1] && d || m)),
                "z-index": r.zIndex + l + 1
            }).each(function () {
                r.appending && e(this).appendTo(r.appendTo)
            }), O(!0)
        }

        function N() {
            return P(r.beforeClose), r.modal && e(".b-modal." + i.data("id")).fadeTo(r.speed, 0, function () {
                e(this).remove()
            }), A(), O(), !1
        }

        function C() {
            return A(), i.hide(), r.loadUrl && (r.contentContainer.empty(), i.css({
                height: "auto",
                width: "auto"
            })), P(r.onClose), !1
        }

        function k(e) {
            var t = e.width(),
                n = e.height(),
                s = {};
            r.contentContainer.css({
                height: n,
                width: t
            }), n >= i.height() && (s.height = i.height()), t >= i.width() && (s.width = i.width()), b = i.outerHeight(!0), w = i.outerWidth(!0), H(), r.contentContainer.css({
                height: "auto",
                width: "auto"
            }), s.left = _(!(!r.follow[0] && v || m)), s.top = D(!(!r.follow[1] && d || m)), i.animate(s, 250, function () {
                e.show(), p = F()
            })
        }

        function L() {
            o.data("bPopup", l), i.delegate(".bClose, ." + r.closeClass, "click." + h, N), r.modalClose && e(".b-modal." + h).css("cursor", "pointer").bind("click", N), !a && (r.follow[0] || r.follow[1]) && o.bind("scroll." + h, function () {
                p && (H(), i.dequeue().animate({
                    left: r.follow[0] ? _(!m) : "auto",
                    top: r.follow[1] ? D(!m) : "auto"
                }, r.followSpeed, r.followEasing))
            }).bind("resize." + h, function () {
                p = F(), p && (clearTimeout(E), E = setTimeout(function () {
                    H(), i.dequeue().each(function () {
                        m ? e(this).css({
                            left: y,
                            top: g
                        }) : e(this).animate({
                            left: r.follow[0] ? _(!0) : "auto",
                            top: r.follow[1] ? D(!0) : "auto"
                        }, r.followSpeed, r.followEasing)
                    })
                }, 50))
            }), r.escClose && s.bind("keydown." + h, function (e) {
                e.which == 27 && N()
            })
        }

        function A() {
            r.scrollBar || e("html").css("overflow", "auto"), e(".b-modal." + h).unbind("click"), s.unbind("keydown." + h), o.unbind("." + h).data("bPopup", o.data("bPopup") - 1 > 0 ? o.data("bPopup") - 1 : null), i.undelegate(".bClose, ." + r.closeClass, "click." + h, N).data("bPopup", null)
        }

        function O(e) {
            switch (r.transition) {
            case "slideIn":
                i.css({
                    display: "block",
                    opacity: 1
                }).animate({
                    left: e ? _(!(!r.follow[0] && v || m)) : s.scrollLeft() - (w || i.outerWidth(!0)) - 200
                }, r.speed, r.easing, function () {
                    M(e)
                });
                break;
            case "slideDown":
                i.css({
                    display: "block",
                    opacity: 1
                }).animate({
                    top: e ? D(!(!r.follow[1] && d || m)) : s.scrollTop() - (b || i.outerHeight(!0)) - 200
                }, r.speed, r.easing, function () {
                    M(e)
                });
                break;
            default:
                i.stop().fadeTo(r.speed, e ? 1 : 0, function () {
                    M(e)
                })
            }
        }

        function M(e) {
            e ? (L(), P(n)) : (i.hide(), P(r.onClose), r.loadUrl && (r.contentContainer.empty(), i.css({
                height: "auto",
                width: "auto"
            })))
        }

        function _(e) {
            return e ? y + s.scrollLeft() : y
        }

        function D(e) {
            return e ? g + s.scrollTop() : g
        }

        function P(t) {
            e.isFunction(t) && t.call(i)
        }

        function H() {
            g = d ? r.position[1] : B(), y = v ? r.position[0] : j(), p = F()
        }

        function B() {
            var e = (I() - i.outerHeight(!0)) / 2 - r.amsl;
            return e < f ? f : e
        }

        function j() {
            return (q() - i.outerWidth(!0)) / 2
        }

        function F() {
            return I() > i.outerHeight(!0) + f && q() > i.outerWidth(!0) + f
        }

        function I() {
            return window.innerHeight || o.height()
        }

        function q() {
            return window.innerWidth || o.width()
        }
        e.isFunction(t) && (n = t, t = null);
        var r = e.extend({}, e.fn.bPopup.defaults, t);
        r.scrollBar || e("html").css("overflow", "hidden");
        var i = this,
            s = e(document),
            o = e(window),
            u = "__b-popup",
            a = /OS 6(_\d)+/i.test(navigator.userAgent),
            f = 20,
            l = 0,
            c, h, p, d, v, m, g, y, b, w, E;
        return i.close = function () {
            r = this.data("bPopup"), h = u + o.data("bPopup") + "__", N()
        }, i.closeFast = function () {
            r = this.data("bPopup"), h = u + o.data("bPopup") + "__", C()
        }, i.each(function () {
            if (e(this).data("bPopup")) return;
            S()
        })
    }, e.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        beforeClose: !1,
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        zIndex: 9997
    }
}(jQuery), String.prototype.interpolate = function (e) {
    return this.replace(/{{([^{}]*)}}/g, function (t, n) {
        var r = e[n];
        return typeof r == "string" || typeof r == "number" ? r : t
    })
},
function ($) {
    $.i18n = function (e, t, n) {
        var r = n || $.i18n.lang || "en";
        return !this.i18n[r] || !this.i18n[r].strings ? e.interpolate(t) : this.i18n[r].strings[e] ? this.i18n[r].strings[e].interpolate(t) : this.i18n.en.strings[e] ? this.i18n.en.strings[e].interpolate(t) : e.interpolate(t)
    }, $.t = $.i18n, $.i18n.setLocale = function (e) {
        $.i18n.lang = e
    }, $.i18n.getLocale = function () {
        return $.i18n.lang
    }, $.i18n._n = function (num, locale) {
        locale = locale || $.i18n.lang;
        if (!this.i18n[locale] || !this.i18n[locale].numBase) return num;
        var numBase = $.i18n[$.i18n.lang].numeralBase || 48,
            prefix = $.i18n[$.i18n.lang].numeralPrefix || "u00",
            convertDigit = function (e) {
                return "\\" + prefix + (numBase + parseInt(e)).toString(16)
            }, charArray = num.toString().split("").map(convertDigit);
        return eval('"' + charArray.join("") + '"')
    }, $._n = $.i18n._n, $.i18n.numberToCurrency = function (e, t) {
        return t = t || $.i18n.lang || "en", currencyString = $.i18n[t].currency.format, currencyString = currencyString.replace(/%u/g, $.i18n[t].currency.sign), currencyString = currencyString.replace(/%n/g, e), currencyString
    }, $._numberToCurrency = $.i18n.numberToCurrency
}(jQuery), jQuery.i18n.en = {
    currency: {
        sign: "$",
        format: "%u%n"
    }
}, jQuery.i18n.en.strings = {
    "order_specials.pending_review": "Pending Review",
    "order_specials.active": "Active",
    "order_specials.suspended": "Suspended",
    "order_specials.add_gig_specials": "Add Special Offers",
    "order_specials.suspend_special_offers": "Suspend Special Offers",
    "order_specials.switch_with_quantity": "Hi! You either choose more items or some special offers. Switching now will cause your selections to reset - are sure about this?",
    "bookmarks.urls.remove": "/bookmarks/remove",
    "uploadify.video.button_width": "93",
    "uploadify.video.button_height": "34",
    "uploadify.button_text": "ATTACH FILES",
    "uploadify.button_upload_work": "UPLOAD WORK",
    "uploadify.button_upload_more": "UPLOAD MORE...",
    "orders.reason_for_rejection": "Reason for rejection",
    "orders.reason_for_cancellation": "Reason for cancellation:",
    "bookmarks.saved": "Starred!",
    "bookmarks.unsaving": "Unstarring",
    "bookmarks.saving": "Staring",
    "bookmarks.unsave": "Unstar",
    "bookmarks.save": "Star",
    please_activate: "Please activate your account first",
    "message.title_for_form_errors": "Problems with some of your information:",
    "message.cant_be_blank": "Message can't be blank and it's too short (minimum is {{chars}} characters)",
    "message.report_confirmation": "Are you sure you would like to report this message and its sender?",
    "message.too_short": "Message is too short",
    "message.direct_payment_warning": "Reminder: Never accept or ask for direct payments. Doing so may get your account restricted.",
    "message.communication_warning": "Terms of Service reminder: You may not communicate with users directly or provide your email, Skype, or phone number.",
    "select.subject_error": "Please select a subject",
    "input.email_error": "Please fill in a valid email",
    "input.name_error": "Please fill in your name",
    "input.sender_error": "Please enter your name, so the recipient can identify you",
    "input.reciever_error": "Please enter the recipientʼs name",
    "message.length_error": "message must be a minimum of 5 characters",
    less: "Less...",
    more: "More...",
    terms_must_be_accepted: "You must agree to the withdrawal terms to continue",
    "gig.delete_selected": "Are you sure you want to delete selected gigs?\nThis action can't be undone!",
    "gig.edit.too_short": "Too Short",
    "gig.edit.just_perfect": "Just Perfect",
    "gig.edit.so_so": "So So. Your gig title is a little too long. Short titles sell more!",
    "gig.edit.too_long": "Too Long. It's a title, not a short story",
    "gig.edit.leaving_page": "Your edits will be lost",
    "username.availability": "Checking availability...",
    "username.minimum_chars": "{{chars}} characters minimum",
    attachment_required_for_delivery: "Hey, just making sure you did not forget to attach a file with your final work, proof of its completion, or shipping information. Would you like to continue without it?",
    active_dispute: "A dispute is currently active. Please resolve it so you may deliver your work.",
    use_this_tab_for_delivery: "Only use this tab for delivering your final work or for notifying your buyer of shipment",
    cancellation_message_to_seller: "Cancellation message to seller:",
    cancellation_message_to_buyer: "Cancellation message to buyer:",
    "collections.error.max_items_reached": "&#42; maximum items reached",
    "collections.error.english_only": "English letters and numbers only",
    "collections.error.already_added": "you already have that...",
    "collections.error.failed_to_save": "failed to save new collection",
    "collections.error.length_error": "name must be 5 to 52 characters",
    "collections.error.collection_full": "this collection is full",
    "collections.popup.add_collection": "Add collection",
    "collections.popup.name_new_coll": "Name your new collection",
    "collections.popup.collection_name": "Collection Name",
    "collections.popup.submit": "ok",
    "apply_suggestion.name_collection": "name your collection",
    use_new_uploader: "Use the new uploader",
    settings_form_error_header: "1 error prevented this user from being saved ...",
    settings_form_errors_header: " errors prevented this user from being saved ...",
    joinForm_errors_header: " errors prevented this new user from being saved ...",
    joinForm_errors_email: "Invalid email",
    joinForm_errors_username: "Invalid username - must start with a letter and can contain numbers and underscore (between 6 and 15 characters).",
    joinForm_errors_userTaken: "Username is already taken",
    joinForm_errors_userNotAllowed: "Username is not allowed",
    joinForm_errors_password: "Invalid password (minimum 6 characters)",
    joinForm_errors_terms: "Please accept the Terms of Use",
    joinForm_errors_capcha: "Captcha is incorrect",
    loginForm_errors_header: " Oops!",
    loginForm_errors_password: "Wrong password",
    loginForm_errors_username: "Wrong username/email",
    loginForm_errors_username_or_pw: "Wrong username or password ...",
    loginForm_errors_email: "Invalid email",
    resetPwdForm_errors_password: "Invalid password (minimum 6 characters)",
    resetPwdForm_errors_not_matching: "The passwords you entered do not match",
    "withdrawForm.nonEqual": "You've entered two different PayPal IDs",
    star_processing: "Starring...",
    unstar_processing: "Unstarring...",
    achieved_seller_cancellation_warning: "Please note: A large amount of cancellations may have a negative effect on your rating and may lead to demotion from your current level. Are you sure you would like to continue?",
    not_achieved_seller_cancellation_warning: "Please note: A large amount of cancellations might hold you back from being promoted to higher seller levels. Are you sure you would like to continue?",
    "tags.errors.quotes_for_3_words": "quotes for up to 3 words",
    "tags.errors.three_chars_min": "3 characters minimum",
    "tags.errors.max_20_tags": "maximum 20 tags",
    "tags.form.add_your_tags": "add your own tags here",
    "fb_share.name": "Hey, look at the cool {{delivery_type}} I got on Fiverr.com",
    "general.more": "more...",
    "general.back_to_top": "back to top",
    "general.no_notifications": "You have no notifications",
    "date.how_long_ago.minutes_ago": "{{num_minutes}} minutes ago",
    "date.how_long_ago.hour_ago": "1 hour ago",
    "date.how_long_ago.hours_ago": "{{num_hours}} hours ago",
    "date.how_long_ago.day_ago": "1 day ago",
    "date.how_long_ago.days_ago": "{{num_days}} days ago",
    "date.how_long_ago.week_ago": "1 week ago",
    "date.how_long_ago.weeks_ago": "{{num_weeks}} weeks ago",
    "date.how_long_ago.month_ago": "1 month ago",
    "date.how_long_ago.months_ago": "{{num_months}} months ago",
    "date.how_long_ago.year_ago": "1 year ago",
    "date.how_long_ago.years_ago": "{{num_years}} year ago",
    "uploadt.max_size_error": "you have reached the total size limit for files upload \n the file {{name}} upload will be aborted",
    "shipping_manager.gig_extras_added": "Gig Extras added",
    "shipping_manager.remove": "remove",
    "quantity_manager.order_more_than_one": "Order more than one",
    "quantity_manager.order_just_one": "Order just one",
    "general.load_more": "Load More",
    "setrandomlinks.tagged_with": "Under {{cat_name_link}}, tagged with ",
    "username_available.error.is_too_short": "Username is too short ...",
    "username_available.error.is_too_long": "Username is too long ...",
    "username_available.error.not_allowed": "Username is not allowed ...",
    "setforms.errors.message_too_short": "Message is too short - less than 5 characters",
    "setforms.errors.describe_your_request": "Please describe your request (min. 5 chars).",
    "setforms.errors.select_request_category": "Please select the relevant category & subcategory.",
    "setforms.errors.describe_and_select": "Please describe your request (min. 5 chars) <br> and select the relevant category & subcategory.",
    "setforms.errors.describe_your_offer": "Please select a Gig for order.",
    "setforms.errors.gig_edit.title": "Gig title should be at least 15 chars long",
    "setforms.errors.gig_edit.category": "Category & sub-category can't be empty",
    "setforms.errors.gig_edit.images": "Please select at least 1 image",
    "setforms.errors.gig_edit.description_short": "Description should be at least 120 chars long",
    "setforms.errors.gig_edit.description_long": "Description should be max 1200 chars long",
    "setforms.errors.gig_edit.tags": "Tag list must contain at least 3 tags",
    "setforms.errors.gig_edit.gig_extra_error": "Please make sure gig extra title is min. 8 chars long, and duration is selected",
    "setforms.errors.gig_edit.gig_extrafast_error": "Please make sure that you select extra fast duration",
    "setforms.errors.gig_edit.duration": "Expected duration can't be blank",
    "setforms.gig_edit.drag": "Drag the image to adjust its placement",
    "setforms.select_sub_cat": "SELECT A SUBCATEGORY",
    "setforms.gig_edit.uploading": "Sec, uploading images...",
    "setforms.gig_failed_save": "Dang, the gig failed to save. Please save it again.",
    "setforms.images_failed_to_upload": "Uh oh... one or more of your images failed to upload. Please choose your photos and save your gig again.",
    "setforms.i_will": "I will",
    "toggle_preview.are_you_sure": "Are you sure? Gigs with samples usually generate more sales.",
    "reviews.dont_share_work": "Don't share my delivered work",
    "reviews.publish_my_delivered": "Publish my review and delivered work",
    "reviews.share_my_work": "Share my delivered work",
    "reviews.publish_my_reviews": "Publish my review",
    error_loading_gig_stats: "Error loading gig stats. Please try again later.",
    loading: "Loading...",
    "manage_gigs.remove_video": "Are you sure you would like to remove this video?",
    "manage_gigs.statuses_popup.title": "What does your gig status mean?",
    "manage_gigs.done": "done",
    "manage_gigs.video_done": "done",
    "manage_gigs.video_loading": "Sec, loading...",
    "manage_gigs.revenues_tooltip": "Revenues generated by this Gig: ",
    "manage_gigs.confirm_gig_delete": "are you sure you want to delete this Gig",
    "manage_gigs.confirm_gigs_delete": "are you sure you want to delete the selected Gigs",
    "manage_gigs.cover_photo_guidelines": "<ul><li>The cover photo is not a banner. Do not add text to your photo.</li><li>You must own the copyrights of the uploaded photo. Photos must be taken by you; no stock photography please!</li><li>The image quality must be high. Make sure the lighting is optimal and that your image is razor sharp.</li><li>Photo subject must be related to your Gig. Do not use the exact same image as any of your Gig photos.</li><li>The image must be full frame and side to side (no white or other flat color backgrounds please).</li><li>Each cover photo can be used for one Gig only.</li></ul>",
    "collections.name_is_invalid": "Name is invalid or has already been taken",
    "collections.remove_from_followed": "remove from your followed collections",
    "collections.add_to_followed": "add to your followed collections",
    "collections.not_following_any": "You are currently not following any collections",
    "collections_menu.save_organize_share": "Save, organize, and share",
    "collections_menu.create_first_collection": "create your first collection",
    "collections_menu.find_your_collection": "Find your Collections here",
    "collections_menu.loading": "loading",
    "collections_menu.collect": "collect",
    "collections_menu.organize": "Organize",
    "collections_menu.close": "Close",
    "conversations.reported": "Reported",
    "conversations.no_conversations_to_show": "No conversations to show here...",
    "live_portfolio.video_ready_for_delivery": "Ready! Generating preview...",
    "map.sales": "sales in<br>",
    "map.orders": "orders from<br>",
    "map.sale": "sale in<br>",
    "map.order": "order from<br>",
    "general.save": "save",
    "general.saved": "saved",
    "todos.flush.confirm": "Are you sure you want to remove completed tasks",
    "todos.filter.confirm": "This will remove the rating TODOs you already have. Continue?",
    max_upload_error: "max. files reached!",
    request_submited: "submitted",
    delete_request: "Are you sure you want to delete this request?",
    "search_validations.too_short": "Must be at least three characters long.",
    "search_validations.too_long": "Your search term is too long.",
    "intro_box.how_to_sell.title": "How To Sell",
    "intro_box.how_to_sell.create_a_gig_html": "Offer a small service and<br>share it with the world.",
    "intro_box.how_to_sell.create_a_gig_title": "Create a Gig and Share It",
    "intro_box.how_to_sell.paid_html": "Get notified when<br>your Gig is ordered.",
    "intro_box.how_to_sell.paid_title": "Get Paid",
    "intro_box.how_to_sell.withdraw_to_paypal_html": "Deliver your work and<br>withdraw your funds.",
    "intro_box.how_to_sell.withdraw_to_paypal_title": "Withdraw and Party!",
    "intro_box.how_to_buy.title": "How To Buy",
    "intro_box.how_to_buy.find_a_gig_html": "Find something you like and<br>place your order.",
    "intro_box.how_to_buy.find_a_gig_title": "Find a Gig and Pay",
    "intro_box.how_to_buy.track_progress_html": "Follow the progress and<br>receive your order.",
    "intro_box.how_to_buy.track_progress_title": "Track and Receive",
    "intro_box.how_to_buy.share_title": "Review and Share",
    "intro_box.how_to_buy.share_html": "Review your order and<br>share with friends."
}, jQuery.i18n.en.countries = {
    AC: "Ascension Island",
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AN: "Netherlands Antilles",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos [Keeling] Islands",
    CD: "Congo - Kinshasa",
    CD: "Congo [DRC]",
    CF: "Central African Republic",
    CG: "Congo - Brazzaville",
    CG: "Congo [Republic]",
    CH: "Switzerland",
    CI: "Côte d'Ivoire",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CP: "Clipperton Island",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cape Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DG: "Diego Garcia",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EA: "Ceuta and Melilla",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    EU: "European Union",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FK: "Falkland Islands [Islas Malvinas]",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong SAR China",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    IC: "Canary Islands",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "Macedonia",
    MK: "Macedonia [FYROM]",
    ML: "Mali",
    MM: "Myanmar [Burma]",
    MN: "Mongolia",
    MO: "Macau SAR China",
    MO: "Macau",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn Islands",
    PR: "Puerto Rico",
    PS: "Palestinian Territories",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    QO: "Outlying Oceania",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "São Tomé and Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Swaziland",
    TA: "Tristan da Cunha",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TL: "East Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "U.S. Outlying Islands",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Vatican City",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "British Virgin Islands",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    ZZ: "Unknown Region"
}, jQuery.i18n.de = {
    currency: {
        sign: "$",
        format: "%u%n"
    }
}, jQuery.i18n.de.strings = {
    "order_specials.pending_review": "Pending Review",
    "order_specials.active": "Active",
    "order_specials.suspended": "Suspended",
    "order_specials.add_gig_specials": "Add Special Offers",
    "order_specials.suspend_special_offers": "Suspend Special Offers",
    "order_specials.switch_with_quantity": "Hi! you either choose more items or some special offers, switching now will cause your selections to reset - sure about it?",
    "bookmarks.urls.remove": "/bookmarks/remove",
    "uploadify.video.button_width": "93",
    "uploadify.video.button_height": "34",
    "uploadify.button_text": "ATTACH FILES",
    "uploadify.button_upload_work": "UPLOAD WORK",
    "uploadify.button_upload_more": "UPLOAD MORE...",
    "uploadify.conversations.button_width": "82",
    "uploadify.conversations.button_height": "25",
    "orders.reason_for_rejection": "Reason for rejection",
    "orders.reason_for_cancellation": "Reason for cancellation:",
    "bookmarks.saved": "Starred!",
    "bookmarks.unsaving": "Unstarring",
    "bookmarks.saving": "Staring",
    "bookmarks.unsave": "Unstar",
    "bookmarks.save": "Star",
    please_activate: "Please activate your account first",
    "message.title_for_form_errors": "Problems with some of your information:",
    "message.cant_be_blank": "Message can't be blank and is too short (minimum is {{chars}} characters)",
    "message.report_confirmation": "Are you sure you would like to report this message and its sender?",
    "message.too_short": "Message is too short",
    "message.direct_payment_warning": "Reminder: Never accept or ask for direct payments. Doing so may get your account restricted.",
    "message.communication_warning": "Terms of Service reminder: You may not communicate with users directly or provide your email, skype or phone number.",
    "select.subject_error": "Please select a subject",
    "input.email_error": "Please fill in a valid email",
    "input.name_error": "Please fill in your name",
    "input.sender_error": "Please enter your name, so the recipient can identify you",
    "input.reciever_error": "Please enter the recipientʼs name",
    "message.length_error": "message must be minimum 5 characters",
    less: "Less...",
    more: "More...",
    terms_must_be_accepted: "You must agree to the withdrawal terms to continue",
    "gig.delete_selected": "Are you sure you want to delete selected gigs?\nThis action can't be undone!",
    "username.availability": "Checking availability...",
    "username.minimum_chars": "{{chars}} characters minimum",
    attachment_required_for_delivery: "Hey, just making sure you did not forget to attach a file with your final work, proof of its completion or shipping information. Would you like to continue without it?",
    active_dispute: "A dispute is currently active. Please resolve it in order to deliver your work.",
    use_this_tab_for_delivery: "Use this tab only for delivering your final work or notifying your buyer of shipment",
    cancellation_message_to_seller: "Cancellation message to seller:",
    cancellation_message_to_buyer: "Cancellation message to buyer:",
    "collections.error.max_items_reached": "&#42; maximum items reached",
    "collections.error.english_only": "English letters and numbers only",
    "collections.error.already_added": "you already have that...",
    "collections.error.failed_to_save": "failed to save new collection",
    "collections.error.length_error": "name must be 5 to 52 charecters",
    "collections.error.collection_full": "this collection is full",
    "apply_suggestion.name_collection": "name your collection",
    use_new_uploader: "Use the new uploader",
    settings_form_error_header: "1 error prevented this user from being saved",
    settings_form_errors_header: " errors prevented this user from being saved",
    joinForm_errors_header: " errors prevented this new user from being saved ...",
    joinForm_errors_email: "Invalid email",
    joinForm_errors_username: "Invalid username - must start with a letter and can contain numbers and underscore (between 6 and 15 characters).",
    joinForm_errors_userTaken: "Username is already taken",
    joinForm_errors_userNotAllowed: "Username is not allowed",
    joinForm_errors_password: "Invalid password (minimum 6 characters)",
    joinForm_errors_terms: "Please accept the Terms of Use",
    joinForm_errors_capcha: "Captcha is incorrect",
    loginForm_errors_header: " Oops!",
    loginForm_errors_password: "Wrong password",
    loginForm_errors_username: "Wrong username/email",
    loginForm_errors_username_or_pw: "Wrong username or password ...",
    loginForm_errors_email: "Invalid email",
    "withdrawForm.nonEqual": "You've entered two different PayPal IDs",
    star_processing: "Starring...",
    unstar_processing: "Unstarring...",
    achieved_seller_cancellation_warning: "Please note: large amount of cancellations may have a negative effect on your rating and may lead to demotion from your current level. Are you sure you would like to continue?",
    not_achieved_seller_cancellation_warning: "Please note: large amount of cancellations might hold you back from being promoted to higher seller levels. Are you sure you would like to continue?",
    "tags.errors.quotes_for_3_words": "quotes for up to 3 words",
    "tags.errors.three_chars_min": "3 characters minimum",
    "tags.errors.max_20_tags": "maximum 20 tags",
    "tags.form.add_your_tags": "add your own tags here",
    "fb_share.name": "Hey, look at the cool {{delivery_type}} I got on Fiverr.com",
    "general.more": "more...",
    "general.back_to_top": "back to top",
    "general.no_notifications": "You have no notifications",
    "date.how_long_ago.minutes_ago": "{{num_minutes}} minutes ago",
    "date.how_long_ago.hour_ago": "1 hour ago",
    "date.how_long_ago.hours_ago": "{{num_hours}} hours ago",
    "date.how_long_ago.day_ago": "1 day ago",
    "date.how_long_ago.days_ago": "{{num_days}} days ago",
    "date.how_long_ago.week_ago": "1 week ago",
    "date.how_long_ago.weeks_ago": "{{num_weeks}} weeks ago",
    "date.how_long_ago.month_ago": "1 month ago",
    "date.how_long_ago.months_ago": "{{num_months}} months ago",
    "date.how_long_ago.year_ago": "1 year ago",
    "date.how_long_ago.years_ago": "{{num_years}} year ago",
    "uploadt.max_size_error": "you have reached the total size limit for files upload \n the file {{name}} upload will be aborted",
    "shipping_manager.gig_extras_added": "Gig Extras added",
    "shipping_manager.remove": "remove",
    "quantity_manager.order_more_than_one": "Order more than one",
    "quantity_manager.order_just_one": "Order just one",
    "general.load_more": "Load More",
    "setrandomlinks.tagged_with": "Under {{cat_name_link}}, tagged with ",
    "username_available.error.is_too_short": "is too short",
    "username_available.error.is_too_long": "is too long",
    "username_available.error.not_allowed": "not allowed",
    "setforms.errors.message_too_short": "Message is too short - less than 5 characters",
    "toggle_preview.are_you_sure": "Are you sure? Gigs with samples usually generate more sales.",
    "reviews.dont_share_work": "Don't share my delivered work",
    "reviews.publish_my_delivered": "Publish my review and delivered work",
    "reviews.share_my_work": "Share my delivered work",
    "reviews.publish_my_reviews": "Publish my review",
    error_loading_gig_stats: "Error loading gig stats. please try again later.",
    loading: "Loading...",
    "manage_gigs.remove_video": "Are you sure you would like to remove this video?",
    "collections.name_is_invalid": "Name is invalid or has already been taken",
    "collections.remove_from_followed": "remove from your followed collections",
    "collections.add_to_followed": "add to your followed collections",
    "collections.not_following_any": "You are currently not following any collections",
    "conversations.reported": "Reported",
    "collections_menu.save_organize_share": "Save, organize and share",
    "collections_menu.create_first_collection": "create your first collection",
    "collections_menu.find_your_collection": "Find your Collections here",
    "collections_menu.loading": "loading",
    "collections_menu.collect": "collect",
    "collections_menu.organize": "Organize",
    "collections_menu.close": "Close",
    "conversations.reported": "Reported",
    "conversations.no_conversations_to_show": "No conversations to show here...",
    "live_portfolio.video_ready_for_delivery": "Ready! Generating preview...",
    "map.sales": "sales in<br>",
    "map.orders": "orders from<br>",
    "map.sale": "sale in<br>",
    "map.order": "order from<br>",
    "general.save": "save",
    "general.saved": "saved"
}, jQuery.i18n.en.countries = {
    AC: "Ascension Island",
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AN: "Netherlands Antilles",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BQ: "Caribbean Netherlands",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos [Keeling] Islands",
    CD: "Congo - Kinshasa",
    CD: "Congo [DRC]",
    CF: "Central African Republic",
    CG: "Congo - Brazzaville",
    CG: "Congo [Republic]",
    CH: "Switzerland",
    CI: "Côte d'Ivoire",
    CI: "Ivory Coast",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CP: "Clipperton Island",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cape Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DE: "Germany",
    DG: "Diego Garcia",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EA: "Ceuta and Melilla",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    EU: "European Union",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FK: "Falkland Islands [Islas Malvinas]",
    FM: "Micronesia",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong SAR China",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    IC: "Canary Islands",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Laos",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "Macedonia",
    MK: "Macedonia [FYROM]",
    ML: "Mali",
    MM: "Myanmar [Burma]",
    MN: "Mongolia",
    MO: "Macau SAR China",
    MO: "Macau",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn Islands",
    PR: "Puerto Rico",
    PS: "Palestinian Territories",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    QO: "Outlying Oceania",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "São Tomé and Príncipe",
    SV: "El Salvador",
    SX: "Sint Maarten",
    SY: "Syria",
    SZ: "Swaziland",
    TA: "Tristan da Cunha",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TL: "East Timor",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "U.S. Outlying Islands",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Vatican City",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela",
    VG: "British Virgin Islands",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    ZZ: "Unknown Region"
}, jQuery.i18n.zh = {
    currency: {
        sign: "$",
        format: "%u%n"
    }
}, jQuery.i18n.zh.strings = {
    "order_specials.pending_review": "****** ****",
    "order_specials.active": "******",
    "order_specials.suspended": "*******",
    "order_specials.add_gig_specials": "***** ****** ******",
    "order_specials.suspend_special_offers": "***** **** *******",
    "order_specials.switch_with_quantity": "**! ****************************** *********************************************** ********************",
    "bookmarks.urls.remove": "/bookmarks/remove",
    "uploadify.video.button_width": "93",
    "uploadify.video.button_height": "34",
    "uploadify.conversations.button_width": "82",
    "uploadify.conversations.button_height": "25",
    "orders.reason_for_rejection": "************** ********",
    "orders.reason_for_cancellation": "********** ******** ********",
    "bookmarks.saved": "*******!",
    "bookmarks.unsaving": "**************",
    "bookmarks.saving": "******",
    "bookmarks.unsave": "******",
    "bookmarks.save": "****",
    please_activate: "****************** ****",
    "message.title_for_form_errors": "****** ***** ********* **************",
    "message.cant_be_blank": "********* ****** ********** ******** ********* ******** *********",
    "message.report_confirmation": "******* ****** ******** ******* ****************",
    "message.too_short": "***** **** *** **********",
    "message.direct_payment_warning": "********: ************ ****** **** *********** ** *** *************** *****************",
    "message.communication_warning": "******* **** ******** ***: ************** ********** ************* ****************",
    "select.subject_error": "*** ************* *** ***** *",
    "input.email_error": "***** ****** ****** ** **** ***",
    "input.name_error": "***** **** ** **** ****",
    "input.sender_error": "***** **** *** *** **** ****, *** *** ******** ***** *******",
    "input.reciever_error": "**** ******* ******* ****** **********",
    "message.length_error": "******** ******* ****** **************",
    less: "*****...",
    more: "*****...",
    terms_must_be_accepted: "*** ***** ******** ** **** ********* ** **** *****",
    "gig.delete_selected": "*** **** **** ******** *** ***** ***** ***************** *** *** ********",
    "username.availability": "******* ********...",
    "username.minimum_chars": "{{chars}} ******** *******",
    attachment_required_for_delivery: "****, ******** ********* ********** ************ ****** **** ************************** *******************",
    active_dispute: "* ******* *** *** ****** *****. *** ********* ******* *******  ******.",
    use_this_tab_for_delivery: "*** ***** *** ****** ********* ********** **** **** ************* ****",
    cancellation_message_to_seller: "************ ****** *** ************",
    cancellation_message_to_buyer: "************ ******* ** *************",
    "collections.error.max_items_reached": "&#42; ***** *** **********",
    "collections.error.english_only": "********* ******** ******** **********",
    "collections.error.already_added": "*** ***** ***** ******..",
    "collections.error.failed_to_save": "***** *** **** ****************",
    "collections.error.length_error": "name must be 5 to 52 charecters",
    "collections.error.collection_full": "**** ***** ** *****",
    "apply_suggestion.name_collection": "**** ***** ***** ***********",
    use_new_uploader: "*** *** *** **************",
    settings_form_error_header: "1 ***** *** *********** ************ ******* ****",
    settings_form_errors_header: " ******** ****** **** ************ ****** ************",
    joinForm_errors_header: " ***** *** *** ***** ***",
    joinForm_errors_email: "************** ****** ************ *************",
    joinForm_errors_username: "*** ************** - ********* ******** *********** ********** *************",
    joinForm_errors_userTaken: "******** *** ***** *****",
    joinForm_errors_userNotAllowed: "******* ** ***** **** *****",
    joinForm_errors_password: "********* ****** ****** ********** ********",
    joinForm_errors_terms: "****** ******** ********* *********",
    joinForm_errors_capcha: "******* ******* ******** ****************",
    "withdrawForm.nonEqual": "***** ********** **** ***************** ***",
    star_processing: "***********..",
    unstar_processing: "****************...",
    achieved_seller_cancellation_warning: "************ ****** ***** *************** ***** *** ****************** ************** ***************",
    not_achieved_seller_cancellation_warning: "******** ************ ************ ************ **************",
    "tags.errors.quotes_for_3_words": "****** ***** ****** ***** ***",
    "tags.errors.three_chars_min": "** ****** ************",
    "tags.errors.max_20_tags": "****** ** *****",
    "tags.form.add_your_tags": "***** ** *******",
    "fb_share.name": "***, *** ******* **** **** ** {{delivery_type}} ** ** * ***********",
    "general.more": "*****...",
    "general.back_to_top": "**** ** *****",
    "date.how_long_ago.minutes_ago": "{{num_minutes}} ***** ***",
    "date.how_long_ago.hour_ago": "1 **** ***",
    "date.how_long_ago.hours_ago": "{{num_hours}} **** ***",
    "date.how_long_ago.day_ago": "1 *** ***",
    "date.how_long_ago.days_ago": "{{num_days}} ***** ***",
    "date.how_long_ago.week_ago": "1 **** ***",
    "date.how_long_ago.weeks_ago": "{{num_weeks}} ***** ***",
    "date.how_long_ago.month_ago": "1 ***** ***",
    "date.how_long_ago.months_ago": "{{num_months}} ****** ***",
    "date.how_long_ago.year_ago": "1 **** ***",
    "date.how_long_ago.years_ago": "{{num_years}} **** ***",
    "uploadt.max_size_error": "******** ****** ********** ********** ********* ********** ************",
    "shipping_manager.gig_extras_added": "*** ***** *********",
    "shipping_manager.remove": "********",
    "quantity_manager.order_more_than_one": "***** *** ***** *****",
    "quantity_manager.order_just_one": "***** **** ***",
    "general.load_more": "**** ****",
    "setrandomlinks.tagged_with": "***** {{cat_name_link}}, ****** **** ",
    "username_available.error.is_too_short": "** ***** *******",
    "username_available.error.is_too_long": "*** *** *****",
    "username_available.error.not_allowed": "*** *******",
    "setforms.errors.message_too_short": "***** ******* ******* ******** **********",
    "toggle_preview.are_you_sure": "**** *** ******* ********** ******* * *****",
    "reviews.dont_share_work": "********* ******* ******** **********",
    "reviews.publish_my_delivered": "******** ******* ****************",
    "reviews.share_my_work": "***** ******** ******* ******",
    "reviews.publish_my_reviews": "****** ***** **********",
    error_loading_gig_stats: "***** ******** ********* ********** ************",
    loading: "*********...",
    "manage_gigs.remove_video": "*** ******* **** **** ************* *** ********* *** ****?",
    "collections.name_is_invalid": "**** **** ******** **** ************* **** *",
    "collections.remove_from_followed": "***** ******* ******* *********",
    "collections.add_to_followed": "**** ***  ******** ******* ***",
    "collections.not_following_any": "** *********** ***** **************** **",
    "conversations.reported": "*************",
    "collections_menu.save_organize_share": "****, ***** *******",
    "collections_menu.create_first_collection": "***** **** ***** *************",
    "collections_menu.find_your_collection": "**** **** ****** ***********",
    "collections_menu.loading": "*******",
    "collections_menu.collect": "*******",
    "collections_menu.organize": "*******",
    "collections_menu.close": "******"
}, jQuery.i18n.zh.countries = {
    AC: "诶丝伊娜艾哦 艾勒诶迪",
    AD: "诶娜哦儿诶",
    AE: "吾娜提伊 诶诶比伊马儿诶伊",
    AF: "诶弗尺诶艾丝诶娜",
    AG: "诶娜艾吉诶 娜迪比诶比吾诶",
    AI: "诶娜吾艾勒诶",
    AL: "诶勒诶娜诶",
    AM: "诶儿伊娜诶",
    AN: "娜伊尺伊勒诶迪丝诶娜艾勒伊",
    AO: "诶娜哦勒",
    AQ: "诶娜诶儿提艾诶",
    AR: "诶儿伊娜艾娜",
    AS: "诶马儿艾诶娜丝诶哦诶",
    AT: "诶吾提儿诶",
    AU: "诶吾提儿勒艾",
    AW: "诶儿比诶",
    AX: "Å勒娜迪艾丝诶娜丝",
    AZ: "诶德儿比艾杰娜",
    BA: "比哦娜艾 诶迪 伊儿伊吉维娜诶",
    BB: "比诶比诶哦丝",
    BD: "比诶吉勒迪伊尺",
    BE: "比伊吉艾马",
    BF: "比吾开艾诶 诶丝",
    BG: "比吾吉诶艾诶",
    BH: "比诶儿诶娜",
    BI: "比吾吾娜艾",
    BJ: "比伊艾娜",
    BL: "丝诶娜提比诶提尺勒伊吾",
    BM: "比伊马吾诶",
    BN: "比儿娜伊",
    BO: "比哦艾维诶",
    BQ: "西诶艾比伊诶 娜提尺儿勒娜丝",
    BR: "比儿德艾",
    BS: "比诶诶马丝",
    BT: "比尺提诶",
    BV: "比哦维伊 艾勒诶迪",
    BW: "比哦丝尔娜诶",
    BY: "比伊诶儿丝",
    BZ: "比伊艾德",
    CA: "西诶诶迪",
    CC: "西哦哦丝[开伊勒娜吉 艾勒娜迪",
    CD: "西哦吉哦[迪西]",
    CF: "西伊提儿勒 弗儿西诶 儿屁比勒西",
    CG: "西哦吉哦[儿屁吾勒艾]",
    CH: "丝尔提德儿勒娜迪",
    CI: "艾维儿吾西哦丝提",
    CK: "西哦开 丝勒娜迪",
    CL: "西尺勒伊",
    CM: "西诶伊儿哦娜",
    CN: "西尺娜诶",
    CO: "西哦哦马艾诶",
    CP: "西勒屁屁儿提娜 丝勒娜迪",
    CR: "西哦提诶儿艾诶",
    CU: "西吾诶",
    CV: "西诶伊 伊儿伊",
    CW: "西吾诶ç哦",
    CX: "西尺艾丝马诶 艾勒诶迪",
    CY: "西吾儿吾",
    CZ: "西德西尺儿伊吾比艾西",
    DE: "吉伊马诶吾",
    DG: "迪艾吉哦吉诶西艾",
    DJ: "迪杰比哦提艾",
    DK: "迪伊马诶开",
    DM: "迪哦艾娜西诶",
    DO: "迪哦艾娜西诶 儿屁吾勒艾",
    DZ: "诶勒伊儿诶",
    EA: "西伊提诶诶娜 马勒艾勒诶",
    EC: "伊西诶迪儿",
    EE: "伊丝哦娜诶",
    EG: "伊吉屁提",
    EH: "尔伊提伊娜 诶尺儿诶",
    ER: "伊儿提儿诶",
    ES: "丝屁艾娜",
    ET: "伊提艾哦艾诶",
    EU: "伊吾哦屁诶娜吾娜哦娜",
    FI: "弗艾勒诶迪",
    FJ: "弗艾艾",
    FK: "弗诶开勒娜迪艾丝诶娜丝 艾勒诶 马勒维娜诶]",
    FM: "马艾儿哦伊丝诶",
    FO: "弗诶哦伊艾丝诶娜丝",
    FR: "弗儿娜西",
    GA: "吉诶哦娜",
    GB: "吾娜提伊 开娜吉哦马",
    GD: "吉儿娜诶诶",
    GE: "吉伊儿吉诶",
    GF: "弗儿娜西 吉艾诶诶",
    GG: "吉吾儿娜伊吾",
    GH: "吉尺娜诶",
    GI: "吉艾儿诶提诶",
    GL: "吉儿伊娜诶娜",
    GM: "吉诶比艾",
    GN: "吉吾娜伊",
    GP: "吉吾迪伊哦吾伊",
    GQ: "伊吾诶提儿艾勒 吾艾伊诶",
    GR: "吉儿伊西",
    GS: "丝哦提尺吉伊儿吉诶 娜迪提伊 哦吾尺 诶娜尔艾尺 丝诶娜丝",
    GT: "吉吾提伊诶勒",
    GU: "吉吾马",
    GW: "吉吾娜伊一比丝丝吾",
    GY: "吉吾诶娜",
    HK: "尺哦吉 哦娜",
    HM: "尺伊儿迪艾丝诶娜 诶迪 西哦娜勒迪艾丝诶娜丝",
    HN: "尺哦迪吾诶丝",
    HR: "西儿诶提诶",
    HT: "尺诶提艾",
    HU: "尺吾吉诶吾",
    IC: "西诶诶儿 艾勒诶迪丝",
    ID: "艾娜哦娜丝艾",
    IE: "艾儿勒诶迪",
    IL: "艾丝诶伊",
    IM: "艾丝伊 弗 诶娜",
    IN: "艾娜艾诶",
    IO: "比儿提艾尺 娜迪诶娜哦西诶 提儿儿提哦吾",
    IQ: "艾儿吾",
    IR: "艾儿娜",
    IS: "艾西勒诶迪",
    IT: "艾提勒吾",
    JE: "杰伊丝伊",
    JM: "杰诶诶艾诶",
    JO: "杰哦迪诶",
    JP: "杰诶诶娜",
    KE: "开伊吾诶",
    KG: "开吾吉吾丝提娜",
    KH: "西诶比哦艾诶",
    KI: "开艾艾比提艾",
    KM: "西哦哦儿丝",
    KN: "丝诶娜提开艾提丝诶娜 娜维丝",
    KP: "娜哦提尺开哦伊诶",
    KR: "丝哦提尺开哦伊诶",
    KW: "开吾诶艾",
    KY: "西诶马诶 艾勒诶迪丝",
    KZ: "开诶诶开丝提娜",
    LA: "勒诶丝",
    LB: "勒伊诶娜娜",
    LC: "丝诶娜提勒吾艾诶",
    LI: "勒艾西尺伊娜提伊娜",
    LK: "丝儿 勒娜开",
    LR: "勒艾伊儿诶",
    LS: "勒伊哦提哦",
    LT: "勒艾尺吾娜艾",
    LU: "勒吾伊马哦吾吉",
    LV: "勒诶维艾",
    LY: "勒艾吾诶",
    MA: "马哦哦西哦",
    MC: "马哦诶西",
    MD: "马哦迪哦诶",
    ME: "马哦提伊伊吉哦",
    MF: "丝诶娜提马诶提艾",
    MG: "马诶诶吉丝西儿",
    MH: "马诶丝尺勒勒艾丝诶娜丝",
    MK: "马诶伊迪娜艾 [吾儿马]",
    ML: "马诶艾",
    MM: "马吾娜马儿 比吾马诶",
    MN: "马哦吉哦艾诶",
    MO: "马诶诶吾",
    MP: "娜哦提尺儿娜马诶艾诶诶 丝诶娜丝",
    MQ: "马诶提艾艾吾伊",
    MR: "马诶儿艾诶娜诶",
    MS: "马哦提丝儿儿提",
    MT: "马诶提诶",
    MU: "马诶儿艾艾吾",
    MV: "马诶迪艾伊丝",
    MW: "马诶诶尔",
    MX: "马伊艾西",
    MY: "马诶诶吾艾诶",
    MZ: "马哦诶马艾吾伊",
    NA: "娜诶艾比诶",
    NC: "娜伊 西勒伊哦娜诶",
    NE: "娜艾伊儿",
    NF: "娜哦弗哦开 丝勒娜迪",
    NG: "娜艾伊儿诶",
    NI: "娜艾诶儿吉吾",
    NL: "娜伊尺伊勒诶迪丝",
    NO: "娜哦尔诶",
    NP: "娜伊诶勒",
    NR: "娜诶儿吾",
    NU: "娜艾伊",
    NZ: "娜伊 德诶勒娜迪",
    OM: "哦马娜",
    PA: "屁诶诶马",
    PE: "屁伊吾",
    PF: "弗儿娜西 屁勒吾伊丝诶",
    PG: "屁诶吾诶娜伊 吉艾娜诶",
    PH: "屁尺勒艾屁艾伊丝",
    PK: "屁诶艾丝诶娜",
    PL: "屁哦诶娜",
    PM: "丝诶娜提屁艾儿儿 诶迪 艾吾伊哦娜",
    PN: "屁艾西诶儿娜艾丝诶娜丝",
    PR: "屁吾儿提 儿西哦",
    PS: "屁诶伊丝艾娜诶娜提伊儿艾哦艾伊",
    PT: "屁哦提吾诶勒",
    PW: "屁诶诶吾",
    PY: "屁诶诶吉诶吾",
    QA: "吾诶诶儿",
    QO: "哦吾勒吾娜吉哦西诶娜诶",
    RE: "儿é娜艾娜",
    RO: "儿哦诶娜诶",
    RS: "丝伊比艾",
    RU: "儿吾丝艾",
    RW: "儿尔娜迪",
    SA: "丝诶迪艾诶儿比艾",
    SB: "丝哦哦马娜 丝勒娜迪",
    SC: "丝伊西尺勒勒丝",
    SD: "丝吾诶娜",
    SE: "丝尔迪伊",
    SG: "丝艾吉诶哦儿",
    SH: "丝诶娜提尺伊伊娜",
    SI: "丝勒维伊艾诶",
    SJ: "丝维勒比儿迪诶娜 杰娜 诶伊娜",
    SK: "丝勒维诶艾诶",
    SL: "丝艾儿儿 勒哦娜",
    SM: "丝诶 马儿艾哦",
    SN: "丝伊伊吉勒",
    SO: "丝哦诶勒诶",
    SR: "丝吾艾娜马伊",
    SS: "丝哦提尺丝吾诶娜",
    ST: "丝ã 提马é诶娜 屁í娜艾伊",
    SV: "伊勒丝诶维诶哦儿",
    SX: "丝艾提 诶诶提伊",
    SY: "丝吾艾诶",
    SZ: "丝尔德艾诶娜",
    TA: "提儿丝提娜 诶 吾娜诶",
    TC: "提吾开丝诶娜 西艾西丝 丝诶娜丝",
    TD: "西尺迪",
    TF: "弗儿娜西 丝吾提伊儿 提儿艾提儿艾丝",
    TG: "提哦哦",
    TH: "提尺艾勒娜迪",
    TJ: "提诶艾开丝提娜",
    TK: "提哦伊勒吾",
    TL: "伊诶提 艾马儿",
    TM: "提吾开马娜艾提诶",
    TN: "提吾艾丝诶",
    TO: "提哦吉诶",
    TR: "提吾开伊",
    TT: "提儿娜艾诶迪诶娜 提比诶哦",
    TV: "提吾诶勒",
    TW: "提诶尔诶",
    TZ: "提诶德诶艾诶",
    UA: "吾开诶艾伊",
    UG: "吾吉娜迪",
    UM: "吾。。 吾提吾艾吉 丝勒娜丝",
    US: "吾娜提伊 丝诶提丝",
    UY: "吾儿吉吾吾",
    UZ: "吾德伊开丝提娜",
    VA: "维诶艾西娜 艾提",
    VC: "丝诶娜提维艾西伊提 娜迪提伊 儿伊诶迪娜伊",
    VE: "维伊伊德伊勒",
    VG: "比儿提艾尺 艾儿艾娜艾丝诶迪丝",
    VI: "吾。。 艾儿艾娜艾丝诶娜丝",
    VN: "维艾提娜马",
    VU: "维诶吾诶吾",
    WF: "尔诶勒艾 诶迪 吾提娜诶",
    WS: "丝诶哦诶",
    YE: "吾伊伊娜",
    YT: "马诶哦提伊",
    ZA: "丝哦提尺诶弗艾西",
    ZM: "德诶比艾",
    ZW: "德艾比诶尔伊",
    ZZ: "吾娜娜哦娜 伊吉哦娜"
},
function (e, t) {
    function tt(e) {
        if (e && typeof e == "object" && e.__wrapped__) return e;
        if (!(this instanceof tt)) return new tt(e);
        this.__wrapped__ = e
    }

    function ot(e, t, n) {
        t || (t = 0);
        var r = e.length,
            i = r - t >= (n || f);
        if (i) {
            var s = {}, o = t - 1;
            while (++o < r) {
                var u = e[o] + "";
                (k.call(s, u) ? s[u] : s[u] = []).push(e[o])
            }
        }
        return function (n) {
            if (i) {
                var r = n + "";
                return k.call(s, r) && Ln(s[r], n) > -1
            }
            return Ln(e, n, t) > -1
        }
    }

    function ut(e) {
        return e.charCodeAt(0)
    }

    function at(e, t) {
        var n = e.index,
            r = t.index;
        e = e.criteria, t = t.criteria;
        if (e !== t) {
            if (e > t || typeof e == "undefined") return 1;
            if (e < t || typeof t == "undefined") return -1
        }
        return n < r ? -1 : 1
    }

    function ft(e, t, n, r) {
        function u() {
            var a = arguments,
                f = s ? this : t;
            i || (e = t[o]), n.length && (a = a.length ? (a = gt(a), r ? a.concat(n) : n.concat(a)) : n);
            if (this instanceof u) {
                mt.prototype = e.prototype, f = new mt, mt.prototype = null;
                var l = e.apply(f, a);
                return Ut(l) ? l : f
            }
            return e.apply(f, a)
        }
        var i = Rt(e),
            s = !n,
            o = t;
        return s && (n = t), i || (t = e), u
    }

    function lt(e, t, n) {
        if (e == null) return nr;
        var r = typeof e;
        if (r != "function") {
            if (r != "object") return function (t) {
                return t[e]
            };
            var i = xt(e);
            return function (t) {
                var n = i.length,
                    r = !1;
                while (n--)
                    if (!(r = It(t[i[n]], e[i[n]], a))) break;
                return r
            }
        }
        return typeof t != "undefined" ? n === 1 ? function (n) {
            return e.call(t, n)
        } : n === 2 ? function (n, r) {
            return e.call(t, n, r)
        } : n === 4 ? function (n, r, i, s) {
            return e.call(t, n, r, i, s)
        } : function (n, r, i) {
            return e.call(t, n, r, i)
        } : e
    }

    function ct() {
        var e = {
            isKeysFast: Q,
            arrays: "isArray(iterable)",
            bottom: "",
            loop: "",
            top: "",
            useHas: !0
        };
        for (var t, n = 0; t = arguments[n]; n++)
            for (var r in t) e[r] = t[r];
        var i = e.args;
        e.firstArg = /^[^,]+/.exec(i)[0];
        var s = Function("createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys", "return function(" + i + ") {\n" + nt(e) + "\n}");
        return s(lt, k, bt, St, Jt, Z, P)
    }

    function pt(e) {
        return "\\" + et[e]
    }

    function dt(e) {
        return Ct[e]
    }

    function vt(e) {
        return typeof e.toString != "function" && typeof (e + "") == "string"
    }

    function mt() {}

    function gt(e, t, n) {
        t || (t = 0), typeof n == "undefined" && (n = e ? e.length : 0);
        var r = -1,
            i = n - t || 0,
            s = Array(i < 0 ? 0 : i);
        while (++r < i) s[r] = e[t + r];
        return s
    }

    function yt(e) {
        return kt[e]
    }

    function bt(e) {
        return A.call(e) == F
    }

    function Tt(e) {
        var t = !1;
        if (!e || typeof e != "object" || bt(e)) return t;
        var n = e.constructor;
        return !Rt(n) || n instanceof n ? (wt(e, function (e, n) {
            t = n
        }), t === !1 || k.call(e, t)) : t
    }

    function Nt(e) {
        var t = [];
        return Et(e, function (e, n) {
            t.push(n)
        }), t
    }

    function At(e, n, r, i, s, o) {
        var u = e;
        typeof n == "function" && (i = r, r = n, n = !1);
        if (typeof r == "function") {
            r = typeof i == "undefined" ? r : lt(r, i, 1), u = r(u);
            var a = typeof u != "undefined";
            a || (u = e)
        }
        var f = Ut(u);
        if (f) {
            var l = A.call(u);
            if (!G[l]) return u;
            var c = St(u)
        }
        if (!f || !n) return f && !a ? c ? gt(u) : Lt({}, u) : u;
        var h = Y[l];
        switch (l) {
        case q:
        case R:
            return a ? u : new h(+u);
        case z:
        case V:
            return a ? u : new h(u);
        case X:
            return a ? u : h(u.source, v.exec(u))
        }
        s || (s = []), o || (o = []);
        var p = s.length;
        while (p--)
            if (s[p] == e) return o[p];
        return a || (u = c ? h(u.length) : {}, c && (k.call(e, "index") && (u.index = e.index), k.call(e, "input") && (u.input = e.input))), s.push(e), o.push(u), (c ? an : Et)(a ? u : e, function (e, i) {
            u[i] = At(e, n, r, t, s, o)
        }), u
    }

    function Ot(e, t, n) {
        return At(e, !0, t, n)
    }

    function _t(e) {
        var t = [];
        return wt(e, function (e, n) {
            Rt(e) && t.push(n)
        }), t.sort()
    }

    function Dt(e, t) {
        return e ? k.call(e, t) : !1
    }

    function Pt(e) {
        var t = -1,
            n = xt(e),
            r = n.length,
            i = {};
        while (++t < r) {
            var s = n[t];
            i[e[s]] = s
        }
        return i
    }

    function Ht(e) {
        return e === !0 || e === !1 || A.call(e) == q
    }

    function Bt(e) {
        return e instanceof Date || A.call(e) == R
    }

    function jt(e) {
        return e ? e.nodeType === 1 : !1
    }

    function Ft(e) {
        var t = !0;
        if (!e) return t;
        var n = A.call(e),
            r = e.length;
        return n == I || n == V || n == F || n == W && typeof r == "number" && Rt(e.splice) ? !r : (Et(e, function () {
            return t = !1
        }), t)
    }

    function It(e, t, n, r, i, s) {
        var o = n === a;
        if (n && !o) {
            n = typeof r == "undefined" ? n : lt(n, r, 2);
            var u = n(e, t);
            if (typeof u != "undefined") return !!u
        }
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        var f = typeof e,
            l = typeof t;
        if (e === e && (!e || f != "function" && f != "object") && (!t || l != "function" && l != "object")) return !1;
        if (e == null || t == null) return e === t;
        var c = A.call(e),
            h = A.call(t);
        c == F && (c = W), h == F && (h = W);
        if (c != h) return !1;
        switch (c) {
        case q:
        case R:
            return +e == +t;
        case z:
            return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
        case X:
        case V:
            return e == t + ""
        }
        var p = c == I;
        if (!p) {
            if (e.__wrapped__ || t.__wrapped__) return It(e.__wrapped__ || e, t.__wrapped__ || t, n, r, i, s);
            if (c != W) return !1;
            var d = e.constructor,
                v = t.constructor;
            if (d != v && !(Rt(d) && d instanceof d && Rt(v) && v instanceof v)) return !1
        }
        i || (i = []), s || (s = []);
        var m = i.length;
        while (m--)
            if (i[m] == e) return s[m] == t;
        var g = 0;
        u = !0, i.push(e), s.push(t);
        if (p) {
            m = e.length, g = t.length, u = g == e.length;
            if (!u && !o) return u;
            while (g--) {
                var y = m,
                    b = t[g];
                if (o) {
                    while (y--)
                        if (u = It(e[y], b, n, r, i, s)) break
                } else if (!(u = It(e[g], b, n, r, i, s))) break
            }
            return u
        }
        return wt(t, function (t, o, a) {
            if (k.call(a, o)) return g++, u = k.call(e, o) && It(e[o], t, n, r, i, s)
        }), u && !o && wt(e, function (e, t, n) {
            if (k.call(n, t)) return u = --g > -1
        }), u
    }

    function qt(e) {
        return _(e) && !D(parseFloat(e))
    }

    function Rt(e) {
        return typeof e == "function"
    }

    function Ut(e) {
        return e ? Z[typeof e] : !1
    }

    function zt(e) {
        return Xt(e) && e != +e
    }

    function Wt(e) {
        return e === null
    }

    function Xt(e) {
        return typeof e == "number" || A.call(e) == z
    }

    function $t(e) {
        return e instanceof RegExp || A.call(e) == X
    }

    function Jt(e) {
        return typeof e == "string" || A.call(e) == V
    }

    function Kt(e) {
        return typeof e == "undefined"
    }

    function Qt(e, t, n) {
        var r = arguments,
            i = 0,
            s = 2;
        if (!Ut(e)) return e;
        if (n === a) var o = r[3],
        u = r[4], f = r[5];
        else u = [], f = [], typeof n != "number" && (s = r.length), s > 3 && typeof r[s - 2] == "function" ? o = lt(r[--s - 1], r[s--], 2) : s > 2 && typeof r[s - 1] == "function" && (o = r[--s]);
        while (++i < s)(St(r[i]) ? an : Et)(r[i], function (t, n) {
            var r, i, s = t,
                l = e[n];
            if (t && ((i = St(t)) || Vt(t))) {
                var c = u.length;
                while (c--)
                    if (r = u[c] == t) {
                        l = f[c];
                        break
                    }
                r || (l = i ? St(l) ? l : [] : Vt(l) ? l : {}, o && (s = o(l, t), typeof s != "undefined" && (l = s)), u.push(t), f.push(l), o || (l = Qt(l, t, a, o, u, f)))
            } else o && (s = o(l, t), typeof s == "undefined" && (s = t)), typeof s != "undefined" && (l = s);
            e[n] = l
        });
        return e
    }

    function Gt(e, t, n) {
        var r = typeof t == "function",
            i = {};
        if (r) t = lt(t, n);
        else var o = T.apply(s, arguments);
        return wt(e, function (e, n, s) {
            if (r ? !t(e, n, s) : Ln(o, n, 1) < 0) i[n] = e
        }), i
    }

    function Yt(e) {
        var t = -1,
            n = xt(e),
            r = n.length,
            i = Array(r);
        while (++t < r) {
            var s = n[t];
            i[t] = [s, e[s]]
        }
        return i
    }

    function Zt(e, t, n) {
        var r = {};
        if (typeof t != "function") {
            var i = 0,
                o = T.apply(s, arguments),
                u = Ut(e) ? o.length : 0;
            while (++i < u) {
                var a = o[i];
                a in e && (r[a] = e[a])
            }
        } else t = lt(t, n), wt(e, function (e, n, i) {
            t(e, n, i) && (r[n] = e)
        });
        return r
    }

    function en(e) {
        var t = -1,
            n = xt(e),
            r = n.length,
            i = Array(r);
        while (++t < r) i[t] = e[n[t]];
        return i
    }

    function tn(e) {
        var t = -1,
            n = T.apply(s, gt(arguments, 1)),
            r = n.length,
            i = Array(r);
        while (++t < r) i[t] = e[n[t]];
        return i
    }

    function nn(e, t, n) {
        var r = -1,
            i = e ? e.length : 0,
            s = !1;
        return n = (n < 0 ? H(0, i + n) : n) || 0, typeof i == "number" ? s = (Jt(e) ? e.indexOf(t, n) : Ln(e, t, n)) > -1 : ht(e, function (e) {
            if (++r >= n) return !(s = e === t)
        }), s
    }

    function rn(e, t, n) {
        var r = {};
        return t = lt(t, n), an(e, function (e, n, i) {
            n = t(e, n, i) + "", k.call(r, n) ? r[n]++ : r[n] = 1
        }), r
    }

    function sn(e, t, n) {
        var r = !0;
        t = lt(t, n);
        if (St(e)) {
            var i = -1,
                s = e.length;
            while (++i < s)
                if (!(r = !! t(e[i], i, e))) break
        } else ht(e, function (e, n, i) {
            return r = !! t(e, n, i)
        });
        return r
    }

    function on(e, t, n) {
        var r = [];
        t = lt(t, n);
        if (St(e)) {
            var i = -1,
                s = e.length;
            while (++i < s) {
                var o = e[i];
                t(o, i, e) && r.push(o)
            }
        } else ht(e, function (e, n, i) {
            t(e, n, i) && r.push(e)
        });
        return r
    }

    function un(e, t, n) {
        var r;
        return t = lt(t, n), an(e, function (e, n, i) {
            if (t(e, n, i)) return r = e, !1
        }), r
    }

    function an(e, t, n) {
        if (t && typeof n == "undefined" && St(e)) {
            var r = -1,
                i = e.length;
            while (++r < i)
                if (t(e[r], r, e) === !1) break
        } else ht(e, t, n);
        return e
    }

    function fn(e, t, n) {
        var r = {};
        return t = lt(t, n), an(e, function (e, n, i) {
            n = t(e, n, i) + "", (k.call(r, n) ? r[n] : r[n] = []).push(e)
        }), r
    }

    function ln(e, t) {
        var n = gt(arguments, 2),
            r = -1,
            i = typeof t == "function",
            s = e ? e.length : 0,
            o = Array(typeof s == "number" ? s : 0);
        return an(e, function (e) {
            o[++r] = (i ? t : e[t]).apply(e, n)
        }), o
    }

    function cn(e, t, n) {
        var r = -1,
            i = e ? e.length : 0,
            s = Array(typeof i == "number" ? i : 0);
        t = lt(t, n);
        if (St(e))
            while (++r < i) s[r] = t(e[r], r, e);
        else ht(e, function (e, n, i) {
            s[++r] = t(e, n, i)
        });
        return s
    }

    function hn(e, t, n) {
        var r = -Infinity,
            i = r;
        if (!t && St(e)) {
            var s = -1,
                o = e.length;
            while (++s < o) {
                var u = e[s];
                u > i && (i = u)
            }
        } else t = !t && Jt(e) ? ut : lt(t, n), ht(e, function (e, n, s) {
            var o = t(e, n, s);
            o > r && (r = o, i = e)
        });
        return i
    }

    function pn(e, t, n) {
        var r = Infinity,
            i = r;
        if (!t && St(e)) {
            var s = -1,
                o = e.length;
            while (++s < o) {
                var u = e[s];
                u < i && (i = u)
            }
        } else t = !t && Jt(e) ? ut : lt(t, n), ht(e, function (e, n, s) {
            var o = t(e, n, s);
            o < r && (r = o, i = e)
        });
        return i
    }

    function vn(e, t, n, r) {
        var i = arguments.length < 3;
        t = lt(t, r, 4);
        if (St(e)) {
            var s = -1,
                o = e.length;
            i && (n = e[++s]);
            while (++s < o) n = t(n, e[s], s, e)
        } else ht(e, function (e, r, s) {
            n = i ? (i = !1, e) : t(n, e, r, s)
        });
        return n
    }

    function mn(e, t, n, r) {
        var i = e,
            s = e ? e.length : 0,
            o = arguments.length < 3;
        if (typeof s != "number") {
            var u = xt(e);
            s = u.length
        }
        return t = lt(t, r, 4), an(e, function (e, r, a) {
            r = u ? u[--s] : --s, n = o ? (o = !1, i[r]) : t(n, i[r], r, a)
        }), n
    }

    function gn(e, t, n) {
        return t = lt(t, n), on(e, function (e, n, r) {
            return !t(e, n, r)
        })
    }

    function yn(e) {
        var t = -1,
            n = e ? e.length : 0,
            r = Array(typeof n == "number" ? n : 0);
        return an(e, function (e) {
            var n = N(j() * (++t + 1));
            r[t] = r[n], r[n] = e
        }), r
    }

    function bn(e) {
        var t = e ? e.length : 0;
        return typeof t == "number" ? t : xt(e).length
    }

    function wn(e, t, n) {
        var r;
        t = lt(t, n);
        if (St(e)) {
            var i = -1,
                s = e.length;
            while (++i < s)
                if (r = t(e[i], i, e)) break
        } else ht(e, function (e, n, i) {
            return !(r = t(e, n, i))
        });
        return !!r
    }

    function En(e, t, n) {
        var r = -1,
            i = e ? e.length : 0,
            s = Array(typeof i == "number" ? i : 0);
        t = lt(t, n), an(e, function (e, n, i) {
            s[++r] = {
                criteria: t(e, n, i),
                index: r,
                value: e
            }
        }), i = s.length, s.sort(at);
        while (i--) s[i] = s[i].value;
        return s
    }

    function Sn(e) {
        return e && typeof e.length == "number" ? gt(e) : en(e)
    }

    function Tn(e) {
        var t = -1,
            n = e ? e.length : 0,
            r = [];
        while (++t < n) {
            var i = e[t];
            i && r.push(i)
        }
        return r
    }

    function Nn(e) {
        var t = -1,
            n = e ? e.length : 0,
            r = T.apply(s, arguments),
            i = ot(r, n),
            o = [];
        while (++t < n) {
            var u = e[t];
            i(u) || o.push(u)
        }
        return o
    }

    function Cn(e, t, n) {
        if (e) {
            var r = 0,
                i = e.length;
            if (typeof t != "number" && t != null) {
                var s = -1;
                t = lt(t, n);
                while (++s < i && t(e[s], s, e)) r++
            } else {
                r = t;
                if (r == null || n) return e[0]
            }
            return gt(e, 0, B(H(0, r), i))
        }
    }

    function kn(e, t) {
        var n = -1,
            r = e ? e.length : 0,
            i = [];
        while (++n < r) {
            var s = e[n];
            St(s) ? L.apply(i, t ? s : kn(s)) : i.push(s)
        }
        return i
    }

    function Ln(e, t, n) {
        var r = -1,
            i = e ? e.length : 0;
        if (typeof n == "number") r = (n < 0 ? H(0, i + n) : n || 0) - 1;
        else if (n) return r = Bn(e, t), e[r] === t ? r : -1;
        while (++r < i)
            if (e[r] === t) return r;
        return -1
    }

    function An(e, t, n) {
        if (!e) return [];
        var r = 0,
            i = e.length;
        if (typeof t != "number" && t != null) {
            var s = i;
            t = lt(t, n);
            while (s-- && t(e[s], s, e)) r++
        } else r = t == null || n ? 1 : t || r;
        return gt(e, 0, B(H(0, i - r), i))
    }

    function On(e) {
        var t = arguments,
            n = t.length,
            r = {
                0: {}
            }, i = -1,
            s = e ? e.length : 0,
            o = s >= 100,
            u = [],
            a = u;
        e: while (++i < s) {
            var f = e[i];
            if (o) var l = f + "",
            c = k.call(r[0], l) ? !(a = r[0][l]) : a = r[0][l] = [];
            if (c || Ln(a, f) < 0) {
                o && a.push(f);
                var h = n;
                while (--h)
                    if (!(r[h] || (r[h] = ot(t[h], 0, 100)))(f)) continue e;
                u.push(f)
            }
        }
        return u
    }

    function Mn(e, t, n) {
        if (e) {
            var r = 0,
                i = e.length;
            if (typeof t != "number" && t != null) {
                var s = i;
                t = lt(t, n);
                while (s-- && t(e[s], s, e)) r++
            } else {
                r = t;
                if (r == null || n) return e[i - 1]
            }
            return gt(e, H(0, i - r))
        }
    }

    function _n(e, t, n) {
        var r = e ? e.length : 0;
        typeof n == "number" && (r = (n < 0 ? H(0, r + n) : B(n, r - 1)) + 1);
        while (r--)
            if (e[r] === t) return r;
        return -1
    }

    function Dn(e, t) {
        var n = -1,
            r = e ? e.length : 0,
            i = {};
        while (++n < r) {
            var s = e[n];
            t ? i[s] = t[n] : i[s[0]] = s[1]
        }
        return i
    }

    function Pn(e, t, n) {
        e = +e || 0, n = +n || 1, t == null && (t = e, e = 0);
        var r = -1,
            i = H(0, x((t - e) / n)),
            s = Array(i);
        while (++r < i) s[r] = e, e += n;
        return s
    }

    function Hn(e, t, n) {
        if (typeof t != "number" && t != null) {
            var r = 0,
                i = -1,
                s = e ? e.length : 0;
            t = lt(t, n);
            while (++i < s && t(e[i], i, e)) r++
        } else r = t == null || n ? 1 : H(0, t);
        return gt(e, r)
    }

    function Bn(e, t, n, r) {
        var i = 0,
            s = e ? e.length : i;
        n = n ? lt(n, r, 1) : nr, t = n(t);
        while (i < s) {
            var o = i + s >>> 1;
            n(e[o]) < t ? i = o + 1 : s = o
        }
        return i
    }

    function jn() {
        return Fn(T.apply(s, arguments))
    }

    function Fn(e, t, n, r) {
        var i = -1,
            s = e ? e.length : 0,
            o = [],
            u = o;
        typeof t == "function" && (r = n, n = t, t = !1);
        var a = !t && s >= 75;
        if (a) var f = {};
        n && (u = [], n = lt(n, r));
        while (++i < s) {
            var l = e[i],
                c = n ? n(l, i, e) : l;
            if (a) var h = c + "",
            p = k.call(f, h) ? !(u = f[h]) : u = f[h] = [];
            if (t ? !i || u[u.length - 1] !== c : p || Ln(u, c) < 0)(n || a) && u.push(c), o.push(l)
        }
        return o
    }

    function In(e) {
        var t = -1,
            n = e ? e.length : 0,
            r = ot(arguments, 1),
            i = [];
        while (++t < n) {
            var s = e[t];
            r(s) || i.push(s)
        }
        return i
    }

    function qn(e) {
        var t = -1,
            n = e ? hn(dn(arguments, "length")) : 0,
            r = Array(n);
        while (++t < n) r[t] = dn(arguments, t);
        return r
    }

    function Rn(e, t) {
        return e < 1 ? t() : function () {
            if (--e < 1) return t.apply(this, arguments)
        }
    }

    function Un(e, t) {
        return K || O && arguments.length > 2 ? O.call.apply(O, arguments) : ft(e, t, gt(arguments, 2))
    }

    function zn(e) {
        var t = T.apply(s, arguments),
            n = t.length > 1 ? 0 : (t = _t(e), -1),
            r = t.length;
        while (++n < r) {
            var i = t[n];
            e[i] = Un(e[i], e)
        }
        return e
    }

    function Wn(e, t) {
        return ft(e, t, gt(arguments, 2))
    }

    function Xn() {
        var e = arguments;
        return function () {
            var t = arguments,
                n = e.length;
            while (n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }

    function Vn(e, t, n) {
        function u() {
            o = null, n || (i = e.apply(s, r))
        }
        var r, i, s, o;
        return function () {
            var a = n && !o;
            return r = arguments, s = this, clearTimeout(o), o = setTimeout(u, t), a && (i = e.apply(s, r)), i
        }
    }

    function $n(e, n) {
        var r = gt(arguments, 2);
        return setTimeout(function () {
            e.apply(t, r)
        }, n)
    }

    function Jn(e) {
        var n = gt(arguments, 1);
        return setTimeout(function () {
            e.apply(t, n)
        }, 1)
    }

    function Kn(e, t) {
        var n = {};
        return function () {
            var r = (t ? t.apply(this, arguments) : arguments[0]) + "";
            return k.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
        }
    }

    function Qn(e) {
        var t, n;
        return function () {
            return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
        }
    }

    function Gn(e) {
        return ft(e, gt(arguments, 1))
    }

    function Yn(e) {
        return ft(e, gt(arguments, 1), null, a)
    }

    function Zn(e, t) {
        function u() {
            o = new Date, s = null, r = e.apply(i, n)
        }
        var n, r, i, s, o = 0;
        return function () {
            var a = new Date,
                f = t - (a - o);
            return n = arguments, i = this, f <= 0 ? (clearTimeout(s), s = null, o = a, r = e.apply(i, n)) : s || (s = setTimeout(u, f)), r
        }
    }

    function er(e, t) {
        return function () {
            var n = [e];
            return L.apply(n, arguments), t.apply(this, n)
        }
    }

    function tr(e) {
        return e == null ? "" : (e + "").replace(w, dt)
    }

    function nr(e) {
        return e
    }

    function rr(e) {
        an(_t(e), function (t) {
            var n = tt[t] = e[t];
            tt.prototype[t] = function () {
                var e = [this.__wrapped__];
                return L.apply(e, arguments), new tt(n.apply(tt, e))
            }
        })
    }

    function ir() {
        return e._ = l, this
    }

    function sr(e, t) {
        return e == null && t == null && (t = 1), e = +e || 0, t == null && (t = e, e = 0), e + N(j() * ((+t || 0) - e + 1))
    }

    function or(e, n) {
        var r = e ? e[n] : t;
        return Rt(r) ? e[n]() : r
    }

    function ur(e, n, r) {
        var i = tt.templateSettings;
        e || (e = ""), r = Mt({}, r, i);
        var s = Mt({}, r.imports, i.imports),
            o = xt(s),
            u = en(s),
            a, f = 0,
            l = r.interpolate || b,
            c = "__p += '",
            v = RegExp((r.escape || b).source + "|" + l.source + "|" + (l === y ? g : b).source + "|" + (r.evaluate || b).source + "|$", "g");
        e.replace(v, function (t, n, r, i, s, o) {
            return r || (r = i), c += e.slice(f, o).replace(E, pt), n && (c += "' +\n__e(" + n + ") +\n'"), s && (a = !0, c += "';\n" + s + ";\n__p += '"), r && (c += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), f = o + t.length, t
        }), c += "';\n";
        var m = r.variable,
            w = m;
        w || (m = "obj", c = "with (" + m + ") {\n" + c + "\n}\n"), c = (a ? c.replace(h, "") : c).replace(p, "$1").replace(d, "$1;"), c = "function(" + m + ") {\n" + (w ? "" : m + " || (" + m + " = {});\n") + "var __t, __p = '', __e = _.escape" + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + c + "return __p\n}";
        var x = "\n/*\n//@ sourceURL=" + (r.sourceURL || "/lodash/template/source[" + S+++"]") + "\n*/";
        try {
            var T = Function(o, "return " + c + x).apply(t, u)
        } catch (N) {
            throw N.source = c, N
        }
        return n ? T(n) : (T.source = c, T)
    }

    function ar(e, t, n) {
        e = +e || 0;
        var r = -1,
            i = Array(e);
        while (++r < e) i[r] = t.call(n, r);
        return i
    }

    function fr(e) {
        return e == null ? "" : (e + "").replace(c, yt)
    }

    function lr(e) {
        var t = ++u;
        return (e == null ? "" : e + "") + t
    }

    function cr(e, t) {
        return t(e), e
    }

    function hr() {
        return this.__wrapped__ + ""
    }

    function pr() {
        return this.__wrapped__
    }
    var n = typeof exports == "object" && exports,
        r = typeof module == "object" && module && module.exports == n && module,
        i = typeof global == "object" && global;
    i.global === i && (e = i);
    var s = [],
        o = {}, u = 0,
        a = o,
        f = 30,
        l = e._,
        c = /&(?:amp|lt|gt|quot|#39);/g,
        h = /\b__p \+= '';/g,
        p = /\b(__p \+=) '' \+/g,
        d = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        v = /\w*$/,
        m = RegExp("^" + (o.valueOf + "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
        g = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        y = /<%=([\s\S]+?)%>/g,
        b = /($^)/,
        w = /[&<>"']/g,
        E = /['\n\r\t\u2028\u2029\\]/g,
        S = 0,
        x = Math.ceil,
        T = s.concat,
        N = Math.floor,
        C = m.test(C = Object.getPrototypeOf) && C,
        k = o.hasOwnProperty,
        L = s.push,
        A = o.toString,
        O = m.test(O = gt.bind) && O,
        M = m.test(M = Array.isArray) && M,
        _ = e.isFinite,
        D = e.isNaN,
        P = m.test(P = Object.keys) && P,
        H = Math.max,
        B = Math.min,
        j = Math.random,
        F = "[object Arguments]",
        I = "[object Array]",
        q = "[object Boolean]",
        R = "[object Date]",
        U = "[object Function]",
        z = "[object Number]",
        W = "[object Object]",
        X = "[object RegExp]",
        V = "[object String]",
        $ = !! e.attachEvent,
        J = O && !/\n|true/.test(O + $),
        K = O && !J,
        Q = P && ($ || J),
        G = {};
    G[U] = !1, G[F] = G[I] = G[q] = G[R] = G[z] = G[W] = G[X] = G[V] = !0;
    var Y = {};
    Y[I] = Array, Y[q] = Boolean, Y[R] = Date, Y[W] = Object, Y[z] = Number, Y[X] = RegExp, Y[V] = String;
    var Z = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        "undefined": !1
    }, et = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        };
    tt.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: y,
        variable: "",
        imports: {
            _: tt
        }
    };
    var nt = function (e) {
        var t = "var index, iterable = " + e.firstArg + ", result = iterable;\nif (!iterable) return result;\n" + e.top + ";\n";
        return e.arrays && (t += "var length = iterable.length; index = -1;\nif (" + e.arrays + ") {\n  while (++index < length) {\n    " + e.loop + "\n  }\n}\nelse {  "), e.isKeysFast && e.useHas ? t += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    " + e.loop + "\n  }  " : (t += "\n  for (index in iterable) {", e.useHas && (t += "\n    if (", e.useHas && (t += "hasOwnProperty.call(iterable, index)"), t += ") {    "), t += e.loop + ";    ", e.useHas && (t += "\n    }"), t += "\n  }  "), e.arrays && (t += "\n}"), t += e.bottom + ";\nreturn result", t
    }, rt = {
            args: "object, source, guard",
            top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
            loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
            bottom: "  }\n}"
        }, it = {
            args: "collection, callback, thisArg",
            top: "callback = callback && typeof thisArg == 'undefined' ? callback : createCallback(callback, thisArg)",
            arrays: "typeof length == 'number'",
            loop: "if (callback(iterable[index], index, collection) === false) return result"
        }, st = {
            top: "if (!objectTypes[typeof iterable]) return result;\n" + it.top,
            arrays: !1
        }, ht = ct(it),
        wt = ct(it, st, {
            useHas: !1
        }),
        Et = ct(it, st),
        St = M || function (e) {
            return e instanceof Array || A.call(e) == I
        }, xt = P ? function (e) {
            return Ut(e) ? P(e) : []
        } : Nt,
        Ct = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, kt = Pt(Ct),
        Lt = ct(rt, {
            top: rt.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
            loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
        }),
        Mt = ct(rt);
    Rt(/x/) && (Rt = function (e) {
        return e instanceof Function || A.call(e) == U
    });
    var Vt = function (e) {
        if (!e || typeof e != "object") return !1;
        var t = e.valueOf,
            n = typeof t == "function" && (n = C(t)) && C(n);
        return n ? e == n || C(e) == n && !bt(e) : Tt(e)
    }, dn = cn,
        xn = on;
    J && r && typeof setImmediate == "function" && (Jn = Un(setImmediate, e)), tt.after = Rn, tt.assign = Lt, tt.at = tn, tt.bind = Un, tt.bindAll = zn, tt.bindKey = Wn, tt.compact = Tn, tt.compose = Xn, tt.countBy = rn, tt.debounce = Vn, tt.defaults = Mt, tt.defer = Jn, tt.delay = $n, tt.difference = Nn, tt.filter = on, tt.flatten = kn, tt.forEach = an, tt.forIn = wt, tt.forOwn = Et, tt.functions = _t, tt.groupBy = fn, tt.initial = An, tt.intersection = On, tt.invert = Pt, tt.invoke = ln, tt.keys = xt, tt.map = cn, tt.max = hn, tt.memoize = Kn, tt.merge = Qt, tt.min = pn, tt.object = Dn, tt.omit = Gt, tt.once = Qn, tt.pairs = Yt, tt.partial = Gn, tt.partialRight = Yn, tt.pick = Zt, tt.pluck = dn, tt.range = Pn, tt.reject = gn, tt.rest = Hn, tt.shuffle = yn, tt.sortBy = En, tt.tap = cr, tt.throttle = Zn, tt.times = ar, tt.toArray = Sn, tt.union = jn, tt.uniq = Fn, tt.values = en, tt.where = xn, tt.without = In, tt.wrap = er, tt.zip = qn, tt.collect = cn, tt.drop = Hn, tt.each = an, tt.extend = Lt, tt.methods = _t, tt.select = on, tt.tail = Hn, tt.unique = Fn, rr(tt), tt.clone = At, tt.cloneDeep = Ot, tt.contains = nn, tt.escape = tr, tt.every = sn, tt.find = un, tt.has = Dt, tt.identity = nr, tt.indexOf = Ln, tt.isArguments = bt, tt.isArray = St, tt.isBoolean = Ht, tt.isDate = Bt, tt.isElement = jt, tt.isEmpty = Ft, tt.isEqual = It, tt.isFinite = qt, tt.isFunction = Rt, tt.isNaN = zt, tt.isNull = Wt, tt.isNumber = Xt, tt.isObject = Ut, tt.isPlainObject = Vt, tt.isRegExp = $t, tt.isString = Jt, tt.isUndefined = Kt, tt.lastIndexOf = _n, tt.mixin = rr, tt.noConflict = ir, tt.random = sr, tt.reduce = vn, tt.reduceRight = mn, tt.result = or, tt.size = bn, tt.some = wn, tt.sortedIndex = Bn, tt.template = ur, tt.unescape = fr, tt.uniqueId = lr, tt.all = sn, tt.any = wn, tt.detect = un, tt.foldl = vn, tt.foldr = mn, tt.include = nn, tt.inject = vn, Et(tt, function (e, t) {
        tt.prototype[t] || (tt.prototype[t] = function () {
            var t = [this.__wrapped__];
            return L.apply(t, arguments), e.apply(tt, t)
        })
    }), tt.first = Cn, tt.last = Mn, tt.take = Cn, tt.head = Cn, Et(tt, function (e, t) {
        tt.prototype[t] || (tt.prototype[t] = function (t, n) {
            var r = e(this.__wrapped__, t, n);
            return t == null || n && typeof t != "function" ? r : new tt(r)
        })
    }), tt.VERSION = "1.0.1", tt.prototype.toString = hr, tt.prototype.value = pr, tt.prototype.valueOf = pr, ht(["join", "pop", "shift"], function (e) {
        var t = s[e];
        tt.prototype[e] = function () {
            return t.apply(this.__wrapped__, arguments)
        }
    }), ht(["push", "reverse", "sort", "unshift"], function (e) {
        var t = s[e];
        tt.prototype[e] = function () {
            return t.apply(this.__wrapped__, arguments), this
        }
    }), ht(["concat", "slice", "splice"], function (e) {
        var t = s[e];
        tt.prototype[e] = function () {
            return new tt(t.apply(this.__wrapped__, arguments))
        }
    }), typeof define == "function" && typeof define.amd == "object" && define.amd ? (e._ = tt, define(function () {
        return tt
    })) : n ? r ? (r.exports = tt)._ = tt : n._ = tt : e._ = tt
}(this), ! function (e) {
    "use strict";
    e(function () {
        e.support.transition = function () {
            var e = function () {
                var e = document.createElement("bootstrap"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    }, n;
                for (n in t)
                    if (e.style[n] !== undefined) return t[n]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery), ! function (e) {
    "use strict";

    function r() {
        e(".dropdown-backdrop").remove(), e(t).each(function () {
            i(e(this)).removeClass("open")
        })
    }

    function i(t) {
        var n = t.attr("data-target"),
            r;
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
        if (!r || !r.length) r = t.parent();
        return r
    }
    var t = "[data-toggle=dropdown]",
        n = function (t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    n.prototype = {
        constructor: n,
        toggle: function (t) {
            var n = e(this),
                s, o;
            if (n.is(".disabled, :disabled")) return;
            return s = i(n), o = s.hasClass("open"), r(), o || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", r), s.toggleClass("open")), n.focus(), !1
        },
        keydown: function (n) {
            var r, s, o, u, a, f;
            if (!/(38|40|27)/.test(n.keyCode)) return;
            r = e(this), n.preventDefault(), n.stopPropagation();
            if (r.is(".disabled, :disabled")) return;
            u = i(r), a = u.hasClass("open");
            if (!a || a && n.keyCode == 27) return n.which == 27 && u.find(t).focus(), r.click();
            s = e("[role=menu] li:not(.divider):visible a", u);
            if (!s.length) return;
            f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var r = e(this),
                i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
}(window.jQuery), ! function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function (t, n, r) {
            var i, s, o, u, a;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
            for (a = o.length; a--;) u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        },
        enter: function (t) {
            var n = e.fn[this.type].defaults,
                r = {}, i;
            this._options && e.each(this._options, function (e, t) {
                n[e] != t && (r[e] = t)
            }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
            if (!i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        },
        leave: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide) return n.hide();
            n.hoverState = "out", this.timeout = setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        },
        show: function () {
            var t, n, r, i, s, o, u = e.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(u);
                if (u.isDefaultPrevented()) return;
                t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                switch (s) {
                case "bottom":
                    o = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "top":
                    o = {
                        top: n.top - i,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "left":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left - r
                    };
                    break;
                case "right":
                    o = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left + n.width
                    }
                }
                this.applyPlacement(o, s), this.$element.trigger("shown")
            }
        },
        applyPlacement: function (e, t) {
            var n = this.tip(),
                r = n[0].offsetWidth,
                i = n[0].offsetHeight,
                s, o, u, a;
            n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
        },
        replaceArrow: function (e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        },
        setContent: function () {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        },
        hide: function () {
            function i() {
                var t = setTimeout(function () {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function () {
                    clearTimeout(t), n.detach()
                })
            }
            var t = this,
                n = this.tip(),
                r = e.Event("hide");
            this.$element.trigger(r);
            if (r.isDefaultPrevented()) return;
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
        },
        fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function () {
            var t = this.$element[0];
            return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function () {
            var e, t = this.$element,
                n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        },
        tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        },
        arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function () {
            this.enabled = !0
        },
        disable: function () {
            this.enabled = !1
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function (t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        },
        destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this),
                i = r.data("tooltip"),
                s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(window.jQuery),
function (e, t) {
    var n = e();
    e.fn.dropdownHover = function (r) {
        return n = n.add(this.parent()), this.each(function () {
            var r = e(this).parent(),
                i = {
                    delay: 300,
                    closeOthers: !0
                }, s = e.extend(!0, {}, i, {
                    delay: e(this).data("delay"),
                    closeOthers: e(this).data("close-others")
                }),
                o;
            r.bind({
                mouseenter: function () {
                    s.closeOthers === !0 && n.removeClass("open"), r.addClass("open"), t.clearTimeout(o)
                },
                mouseleave: function () {
                    o = t.setTimeout(function () {
                        r.removeClass("open")
                    }, s.delay)
                }
            })
        })
    }, e(document).ready(function () {
        e('[data-hover="dropdown"]').dropdownHover()
    })
}(jQuery, this),
function (e) {
    function n(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
    var t = e.scrollTo = function (t, n, r) {
        e(window).scrollTo(t, n, r)
    };
    t.defaults = {
        axis: "xy",
        duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
        limit: !0
    }, t.window = function (t) {
        return e(window)._scrollable()
    }, e.fn._scrollable = function () {
        return this.map(function () {
            var t = this,
                n = !t.nodeName || e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!n) return t;
            var r = (t.contentWindow || t).document || t.ownerDocument || t;
            return /webkit/i.test(navigator.userAgent) || r.compatMode == "BackCompat" ? r.body : r.documentElement
        })
    }, e.fn.scrollTo = function (r, i, s) {
        return typeof i == "object" && (s = i, i = 0), typeof s == "function" && (s = {
            onAfter: s
        }), r == "max" && (r = 9e9), s = e.extend({}, t.defaults, s), i = i || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (i /= 2), s.offset = n(s.offset), s.over = n(s.over), this._scrollable().each(function () {
            function d(e) {
                u.animate(c, i, s.easing, e && function () {
                    e.call(this, r, s)
                })
            }
            if (r == null) return;
            var o = this,
                u = e(o),
                a = r,
                l, c = {}, p = u.is("html,body");
            switch (typeof a) {
            case "number":
            case "string":
                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(a)) {
                    a = n(a);
                    break
                }
                a = e(a, this);
                if (!a.length) return;
            case "object":
                if (a.is || a.style) l = (a = e(a)).offset()
            }
            e.each(s.axis.split(""), function (e, n) {
                var r = n == "x" ? "Left" : "Top",
                    i = r.toLowerCase(),
                    f = "scroll" + r,
                    v = o[f],
                    m = t.max(o, n);
                if (l) c[f] = l[i] + (p ? 0 : v - u.offset()[i]), s.margin && (c[f] -= parseInt(a.css("margin" + r)) || 0, c[f] -= parseInt(a.css("border" + r + "Width")) || 0), c[f] += s.offset[i] || 0, s.over[i] && (c[f] += a[n == "x" ? "width" : "height"]() * s.over[i]);
                else {
                    var y = a[i];
                    c[f] = y.slice && y.slice(-1) == "%" ? parseFloat(y) / 100 * m : y
                }
                s.limit && /^\d+$/.test(c[f]) && (c[f] = c[f] <= 0 ? 0 : Math.min(c[f], m)), !e && s.queue && (v != c[f] && d(s.onAfterFirst), delete c[f])
            }), d(s.onAfter)
        }).end()
    }, t.max = function (t, n) {
        var r = n == "x" ? "Width" : "Height",
            i = "scroll" + r;
        if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
        var s = "client" + r,
            o = t.ownerDocument.documentElement,
            u = t.ownerDocument.body;
        return Math.max(o[i], u[i]) - Math.min(o[s], u[s])
    }
}(jQuery),
function (e) {
    function t(t, r) {
        this.el = e(t), this.options = r || {}, this.padding = undefined == this.options.padding ? 2 : this.options.padding, this.inner = this.el.find(".antiscroll-inner"), this.inner.css({
            width: "+=" + s(),
            height: "+=" + s()
        }), this.inner.get(0).scrollWidth > this.el.width() && (this.horizontal = new n.Horizontal(this)), this.inner.get(0).scrollHeight > this.el.height() && (this.vertical = new n.Vertical(this))
    }

    function n(t) {
        this.pane = t, this.pane.el.append(this.el), this.innerEl = this.pane.inner.get(0), this.dragging = !1, this.enter = !1, this.shown = !1, this.pane.el.mouseenter(e.proxy(this, "mouseenter")), this.pane.el.mouseleave(e.proxy(this, "mouseleave")), this.el.mousedown(e.proxy(this, "mousedown")), this.pane.inner.scroll(e.proxy(this, "scroll")), this.pane.inner.bind("mousewheel", e.proxy(this, "mousewheel"));
        var n = this;
        this.show(), this.hiding = setTimeout(e.proxy(this, "hide"), 3e3)
    }

    function r(e, t) {
        function n() {}
        n.prototype = t.prototype, e.prototype = new n
    }

    function s() {
        if (!i) {
            var t = e('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
            e("body").append(t);
            var n = e("div", t).innerWidth();
            t.css("overflow-y", "scroll");
            var r = e("div", t).innerWidth();
            e(t).remove(), i = n - r
        }
        return i
    }
    e.fn.antiscroll = function (t) {
        return this.each(function () {
            e(this).data("antiscroll") && e(this).data("antiscroll").destroy(), e(this).data("antiscroll", new e.Antiscroll(this, t))
        })
    }, e.Antiscroll = t, t.prototype.destroy = function () {
        return this.horizontal && this.horizontal.destroy(), this.vertical && this.vertical.destroy(), this
    }, n.prototype.destroy = function () {
        return this.el.remove(), this
    }, n.prototype.mouseenter = function () {
        this.enter = !0, this.show()
    }, n.prototype.mouseleave = function () {
        this.enter = !1, this.dragging || this.hide()
    }, n.prototype.scroll = function () {
        this.shown || (this.show(), !this.enter && !this.dragging && (this.hiding = setTimeout(e.proxy(this, "hide"), 1500))), this.update()
    }, n.prototype.mousedown = function (t) {
        t.preventDefault(), this.dragging = !0, this.startPageY = t.pageY - parseInt(this.el.css("top"), 10), this.startPageX = t.pageX - parseInt(this.el.css("left"), 10), document.onselectstart = function () {
            return !1
        };
        var n = this.pane,
            r = e.proxy(this, "mousemove"),
            i = this;
        e(document).mousemove(r).mouseup(function () {
            i.dragging = !1, document.onselectstart = null, e(document).unbind("mousemove", r), i.enter || i.hide()
        })
    }, n.prototype.show = function (e) {
        this.shown || (this.update(), this.el.addClass("antiscroll-scrollbar-shown"), this.hiding && (clearTimeout(this.hiding), this.hiding = null), this.shown = !0)
    }, n.prototype.hide = function () {
        this.shown && (this.el.removeClass("antiscroll-scrollbar-shown"), this.shown = !1)
    }, n.Horizontal = function (t) {
        this.el = e('<div class="antiscroll-scrollbar antiscroll-scrollbar-horizontal">'), n.call(this, t)
    }, r(n.Horizontal, n), n.Horizontal.prototype.update = function () {
        var e = this.pane.el.width(),
            t = e - this.pane.padding * 2,
            n = this.pane.inner.get(0);
        this.el.css("width", t * e / n.scrollWidth).css("left", t * n.scrollLeft / n.scrollWidth)
    }, n.Horizontal.prototype.mousemove = function (e) {
        var t = this.pane.el.width() - this.pane.padding * 2,
            n = e.pageX - this.startPageX,
            r = this.el.width(),
            i = this.pane.inner.get(0),
            s = Math.min(Math.max(n, 0), t - r);
        i.scrollLeft = (i.scrollWidth - this.pane.el.width()) * s / (t - r)
    }, n.Horizontal.prototype.mousewheel = function (e, t, n, r) {
        if (n < 0 && 0 == this.pane.inner.get(0).scrollLeft || n > 0 && this.innerEl.scrollLeft + this.pane.el.width() == this.innerEl.scrollWidth) return e.preventDefault(), !1
    }, n.Vertical = function (t) {
        this.el = e('<div class="antiscroll-scrollbar antiscroll-scrollbar-vertical">'), n.call(this, t)
    }, r(n.Vertical, n), n.Vertical.prototype.update = function () {
        var e = this.pane.el.height(),
            t = e - this.pane.padding * 2,
            n = this.innerEl;
        this.el.css("height", t * e / n.scrollHeight).css("top", t * n.scrollTop / n.scrollHeight)
    }, n.Vertical.prototype.mousemove = function (e) {
        var t = this.pane.el.height(),
            n = t - this.pane.padding * 2,
            r = e.pageY - this.startPageY,
            i = this.el.height(),
            s = this.innerEl,
            o = Math.min(Math.max(r, 0), n - i);
        s.scrollTop = (s.scrollHeight - t) * o / (n - i)
    }, n.Vertical.prototype.mousewheel = function (e, t, n, r) {
        if (r > 0 && 0 == this.innerEl.scrollTop || r < 0 && this.innerEl.scrollTop + this.pane.el.height() == this.innerEl.scrollHeight) return e.preventDefault(), !1
    };
    var i
}(jQuery),
function (e) {
    "use strict";

    function t() {}

    function n(e, t) {
        if (i) return t.indexOf(e);
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }
    var r = t.prototype,
        i = Array.prototype.indexOf ? !0 : !1;
    r._getEvents = function () {
        return this._events || (this._events = {})
    }, r.getListeners = function (e) {
        var t, n, r = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
        } else t = r[e] || (r[e] = []);
        return t
    }, r.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, r.addListener = function (e, t) {
        var r, i = this.getListenersAsObject(e);
        for (r in i) i.hasOwnProperty(r) && -1 === n(t, i[r]) && i[r].push(t);
        return this
    }, r.on = r.addListener, r.defineEvent = function (e) {
        return this.getListeners(e), this
    }, r.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, r.removeListener = function (e, t) {
        var r, i, s = this.getListenersAsObject(e);
        for (i in s) s.hasOwnProperty(i) && (r = n(t, s[i]), -1 !== r && s[i].splice(r, 1));
        return this
    }, r.off = r.removeListener, r.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, r.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, r.manipulateListeners = function (e, t, n) {
        var r, i, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (r = n.length; r--;) s.call(this, t, n[r]);
        else
            for (r in t) t.hasOwnProperty(r) && (i = t[r]) && ("function" == typeof i ? s.call(this, r, i) : o.call(this, r, i));
        return this
    }, r.removeEvent = function (e) {
        var t, n = typeof e,
            r = this._getEvents();
        if ("string" === n) delete r[e];
        else if ("object" === n)
            for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
        else delete this._events;
        return this
    }, r.emitEvent = function (e, t) {
        var n, r, i, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (n = s[r].length; n--;) i = t ? s[r][n].apply(null, t) : s[r][n](), i === !0 && this.removeListener(e, s[r][n]);
        return this
    }, r.trigger = r.emitEvent, r.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, "function" == typeof define && define.amd ? define(function () {
        return t
    }) : e.EventEmitter = t
}(this),
function (e) {
    "use strict";
    var t = document.documentElement,
        n = function () {};
    t.addEventListener ? n = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : t.attachEvent && (n = function (t, n, r) {
        t[n + r] = r.handleEvent ? function () {
            var t = e.event;
            t.target = t.target || t.srcElement, r.handleEvent.call(r, t)
        } : function () {
            var n = e.event;
            n.target = n.target || n.srcElement, r.call(t, n)
        }, t.attachEvent("on" + n, t[n + r])
    });
    var r = function () {};
    t.removeEventListener ? r = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : t.detachEvent && (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (r) {
            e[t + n] = void 0
        }
    });
    var i = {
        bind: n,
        unbind: r
    };
    "function" == typeof define && define.amd ? define(i) : e.eventie = i
}(this),
function (e) {
    "use strict";

    function t(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function n(e) {
        return "[object Array]" === a.call(e)
    }

    function r(e) {
        var t = [];
        if (n(e)) t = e;
        else if ("number" == typeof e.length)
            for (var r = 0, i = e.length; i > r; r++) t.push(e[r]);
        else t.push(e);
        return t
    }

    function i(e, n) {
        function i(e, n, o) {
            if (!(this instanceof i)) return new i(e, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = r(e), this.options = t({}, this.options), "function" == typeof n ? o = n : t(this.options, n), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred);
            var u = this;
            setTimeout(function () {
                u.check()
            })
        }

        function a(e) {
            this.img = e
        }
        i.prototype = new e, i.prototype.options = {}, i.prototype.getImages = function () {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var r = n.querySelectorAll("img"), i = 0, s = r.length; s > i; i++) {
                    var o = r[i];
                    this.addImage(o)
                }
            }
        }, i.prototype.addImage = function (e) {
            var t = new a(e);
            this.images.push(t)
        }, i.prototype.check = function () {
            function e(e, i) {
                return t.options.debug && u && o.log("confirm", e, i), t.progress(e), n++, n === r && t.complete(), !0
            }
            var t = this,
                n = 0,
                r = this.images.length;
            if (this.hasAnyBroken = !1, !r) return this.complete(), void 0;
            for (var i = 0; r > i; i++) {
                var s = this.images[i];
                s.on("confirm", e), s.check()
            }
        }, i.prototype.progress = function (e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e), this.jqDeferred && this.jqDeferred.notify(this, e)
        }, i.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, s && (s.fn.imagesHaveLoaded = function (e, t) {
            var n = new i(this, e, t);
            return n.jqDeferred.promise(s(this))
        });
        var f = {};
        return a.prototype = new e, a.prototype.check = function () {
            var e = f[this.img.src];
            if (e) return this.useCached(e), void 0;
            if (f[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this.proxyImage = new Image;
            n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
        }, a.prototype.useCached = function (e) {
            if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
            else {
                var t = this;
                e.on("confirm", function (e) {
                    return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                })
            }
        }, a.prototype.confirm = function (e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, a.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, a.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindProxyEvents()
        }, a.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindProxyEvents()
        }, a.prototype.unbindProxyEvents = function () {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
        }, i
    }
    var s = e.jQuery,
        o = e.console,
        u = o !== void 0,
        a = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], i) : e.imagesHaveLoaded = i(e.EventEmitter, e.eventie)
}(window),
function (e, t, n, r) {
    function i(t, n) {
        this.element = t, this.options = e.extend({}, o, n), this._defaults = o, this._name = s, this.init()
    }
    var s = "stellar",
        o = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function (e) {
                e.hide()
            },
            showElement: function (e) {
                e.show()
            }
        }, u = {
            scroll: {
                getLeft: function (e) {
                    return e.scrollLeft()
                },
                setLeft: function (e, t) {
                    e.scrollLeft(t)
                },
                getTop: function (e) {
                    return e.scrollTop()
                },
                setTop: function (e, t) {
                    e.scrollTop(t)
                }
            },
            position: {
                getLeft: function (e) {
                    return parseInt(e.css("left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("top"), 10) * -1
                }
            },
            margin: {
                getLeft: function (e) {
                    return parseInt(e.css("margin-left"), 10) * -1
                },
                getTop: function (e) {
                    return parseInt(e.css("margin-top"), 10) * -1
                }
            },
            transform: {
                getLeft: function (e) {
                    var t = getComputedStyle(e[0])[l];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                },
                getTop: function (e) {
                    var t = getComputedStyle(e[0])[l];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        }, a = {
            position: {
                setLeft: function (e, t) {
                    e.css("left", t)
                },
                setTop: function (e, t) {
                    e.css("top", t)
                }
            },
            transform: {
                setPosition: function (e, t, n, r, i) {
                    e[0].style[l] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        }, f = function () {
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = e("script")[0].style,
                r = "",
                i;
            for (i in n)
                if (t.test(i)) {
                    r = i.match(t)[0];
                    break
                }
            return "WebkitOpacity" in n && (r = "Webkit"), "KhtmlOpacity" in n && (r = "Khtml"),
            function (e) {
                return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }
        }(),
        l = f("transform"),
        c = e("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        h = c ? function (e, t, n) {
            e.css({
                "background-position-x": t,
                "background-position-y": n
            })
        } : function (e, t, n) {
            e.css("background-position", t + " " + n)
        }, p = c ? function (e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function (e) {
            return e.css("background-position").split(" ")
        }, d = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        };
    i.prototype = {
        init: function () {
            this.options.name = s + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function () {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function () {
            var e = this,
                t = u[e.options.scrollProperty];
            this._getScrollLeft = function () {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function () {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function () {
            var t = this,
                n = u[t.options.scrollProperty],
                r = a[t.options.positionProperty],
                i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = typeof i == "function" ? function (e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = typeof s == "function" ? function (e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function (e, n, i, s, o) {
                t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
            }
        },
        _handleWindowLoadAndResize: function () {
            var n = this,
                r = e(t);
            n.options.responsive && r.bind("load." + this.name, function () {
                n.refresh()
            }), r.bind("resize." + this.name, function () {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        },
        refresh: function (n) {
            var r = this,
                i = r._getScrollLeft(),
                s = r._getScrollTop();
            (!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function () {
                    var e = r._getScrollLeft(),
                        t = r._getScrollTop();
                    r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
                }), this._setScrollLeft(i), this._setScrollTop(s)
        },
        _detectViewport: function () {
            var e = this.$viewportElement.offset(),
                t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        },
        _findParticles: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop();
            if (this.particles !== r)
                for (var s = this.particles.length - 1; s >= 0; s--) this.particles[s].$element.data("stellar-elementIsActive", r);
            this.particles = [];
            if (!this.options.parallaxElements) return;
            this.$element.find("[data-stellar-ratio]").each(function (n) {
                var i = e(this),
                    s, o, u, a, f, l, c, h, p, d = 0,
                    v = 0,
                    m = 0,
                    g = 0;
                if (!i.data("stellar-elementIsActive")) i.data("stellar-elementIsActive", this);
                else if (i.data("stellar-elementIsActive") !== this) return;
                t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0) return d = m, v = g, c = t, !1;
                    m += t.position().left, g += t.position().top
                }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: s,
                    verticalOffset: o,
                    startingPositionLeft: u,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: d,
                    parentOffsetTop: v,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function () {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop(),
                s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds) return;
            s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function () {
                var s = e(this),
                    o = p(s),
                    u, a, f, l, c, d, v, m, g, y = 0,
                    b = 0,
                    w = 0,
                    E = 0;
                if (!s.data("stellar-backgroundIsActive")) s.data("stellar-backgroundIsActive", this);
                else if (s.data("stellar-backgroundIsActive") !== this) return;
                s.data("stellar-backgroundStartingLeft") ? h(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), c = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - c - n, m = s.offset().top - d - i, s.parents().each(function () {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0) return y = w, b = E, g = t, !1;
                    w += t.position().left, E += t.position().top
                }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({
                    $element: s,
                    $offsetParent: g,
                    isFixed: s.css("background-attachment") === "fixed",
                    horizontalOffset: u,
                    verticalOffset: a,
                    startingValueLeft: o[0],
                    startingValueTop: o[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10),
                    startingPositionLeft: s.position().left,
                    startingPositionTop: s.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: m,
                    parentOffsetLeft: y,
                    parentOffsetTop: b,
                    stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")
                })
            })
        },
        _reset: function () {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--) r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), h(r.$element, r.startingValueLeft, r.startingValueTop)
        },
        destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function () {
            var n = this,
                r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function () {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function () {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function () {
            var e = this._getScrollLeft(),
                t = this._getScrollTop(),
                n, r, i, s, o, u, a, f = !0,
                l = !0,
                c, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) return;
            this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;
            for (m = this.particles.length - 1; m >= 0; m--) i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (c = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = c - i.startingPositionLeft + i.startingOffsetLeft) : (c = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, c, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
            for (m = this.backgrounds.length - 1; m >= 0; m--) o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, h(o.$element, u, a)
        },
        _handleScrollEvent: function () {
            var e = this,
                t = !1,
                n = function () {
                    e._repositionElements(), t = !1
                }, r = function () {
                    t || (d(n), t = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        },
        _startAnimationLoop: function () {
            var e = this;
            this._animationLoop = function () {
                d(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[s] = function (t) {
        var n = arguments;
        if (t === r || typeof t == "object") return this.each(function () {
            e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new i(this, t))
        });
        if (typeof t == "string" && t[0] !== "_" && t !== "init") return this.each(function () {
            var r = e.data(this, "plugin_" + s);
            r instanceof i && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + s, null)
        })
    }, e[s] = function (n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    }, e[s].scrollProperty = u, e[s].positionProperty = a, t.Stellar = i
}(jQuery, this, document), typeof JSON != "object" && (JSON = {}),
function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
        case "string":
            return quote(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            gap += indent, u = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                s = a.length;
                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
            }
            if (rep && typeof rep == "object") {
                s = rep.length;
                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
            } else
                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }
    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function (e, t) {
    "use strict";
    var n = e.History = e.History || {}, r = e.jQuery;
    if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function (e, t, n) {
            r(e).bind(t, n)
        },
        trigger: function (e, t, n) {
            r(e).trigger(t, n)
        },
        extractEventData: function (e, n, r) {
            var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
            return i
        },
        onDomLoad: function (e) {
            r(e)
        }
    }, typeof n.init != "undefined" && n.init()
}(window),
function (e, t) {
    "use strict";
    var n = e.document,
        r = e.setTimeout || r,
        i = e.clearTimeout || i,
        s = e.setInterval || s,
        o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function () {
        if (typeof o.initHtml4.initialized != "undefined") return !1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
            var t = o.getHashByIndex(),
                n;
            return n = e === t, n
        }, o.isHashEqual = function (e, t) {
            return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
        }, o.saveHash = function (e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        }, o.getHashByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
            var r = o.getHashByState(e),
                i;
            return i = {
                discardedState: e,
                backState: n,
                forwardState: t
            }, o.discardedStates[r] = i, !0
        }, o.discardHash = function (e, t, n) {
            var r = {
                discardedHash: e,
                backState: n,
                forwardState: t
            };
            return o.discardedHashes[e] = r, !0
        }, o.discardedState = function (e) {
            var t = o.getHashByState(e),
                n;
            return n = o.discardedStates[t] || !1, n
        }, o.discardedHash = function (e) {
            var t = o.discardedHashes[e] || !1;
            return t
        }, o.recycleState = function (e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t = "",
                r, i, u, a, f = Boolean(o.getHash());
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function () {
                if (a) return !1;
                a = !0;
                var n = o.getHash(),
                    r = o.getHash(i.contentWindow.document.location);
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
            }) : o.checkerFunction = function () {
                var n = o.getHash() || "";
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
            var n = t && t.newURL || o.getLocationHref(),
                r = o.getHashByUrl(n),
                i = null,
                s = null,
                u = null,
                a;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getHash(),
                c = o.expectedStateId == s.id;
            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
        }, o.replaceState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: i
            }), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r),
                u = o.getHashByState(s),
                a = o.getState(!1),
                f = o.getHashByState(a),
                l = o.getStateByIndex(-2);
            return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, "hashchange")
        })
    }, typeof o.init != "undefined" && o.init()
}(window),
function (e, t) {
    "use strict";
    var n = e.console || t,
        r = e.document,
        i = e.navigator,
        s = e.sessionStorage || !1,
        o = e.setTimeout,
        u = e.clearTimeout,
        a = e.setInterval,
        f = e.clearInterval,
        l = e.JSON,
        c = e.alert,
        h = e.History = e.History || {}, p = e.history;
    try {
        s.setItem("TEST", "1"), s.removeItem("TEST")
    } catch (d) {
        s = !1
    }
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
    h.init = function (e) {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function (d) {
        if (typeof h.initCore.initialized != "undefined") return !1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++) f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function () {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                t = r.getElementById("log"),
                i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined") try {
                    a = l.stringify(a)
                } catch (f) {}
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function () {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
            return e
        }, h.isInternetExplorer = function () {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.options.html4Mode ? h.emulated = {
            pushState: !0,
            hashChange: !0
        } : h.emulated = {
            pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
            hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
        }, h.enabled = !h.emulated.pushState, h.bugs = {
            setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
            ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
            hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
        }, h.isEmptyObject = function (e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }, h.cloneObject = function (e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function () {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1) e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function () {
            var e = r.getElementsByTagName("base"),
                t = null,
                n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function () {
            var e = h.getState(!1, !1),
                t = (e || {}).url || h.getLocationHref(),
                n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function () {
            var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
                return /[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function (e, t) {
            var n = e,
                r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function (e) {
            var t = e,
                n = h.getBaseUrl(),
                r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.getLocationHref = function (e) {
            return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function (e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function (e) {
            var t = h.extractId(e.url),
                n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                else {
                    for (;;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != "object") e = {};
            if (typeof e.normalized != "undefined") return e;
            if (!e.data || typeof e.data != "object") e.data = {};
            return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function (e, t, n) {
            var r = {
                data: e,
                title: t,
                url: n
            };
            return r = h.normalizeState(r), r
        }, h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function (e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {
                data: t.data,
                title: e.title,
                url: e.url
            }, r = l.stringify(n), r
        }, h.getStateId = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function (e) {
            var t, n, r, i;
            return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function (e, t) {
            var n = null,
                r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function (e) {
            var t = !1,
                n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function (e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function (e) {
            var t = !1,
                n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getCurrentIndex = function () {
            var e = null;
            return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
        }, h.getHash = function (e) {
            var t = h.getLocationHref(e),
                n;
            return n = h.getHashByUrl(t), n
        }, h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return t = decodeURIComponent(t), t
        }, h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function (e, t) {
            var n, i;
            return t !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.setHash,
                args: arguments,
                queue: t
            }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
        }, h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function (e) {
            var t = e.title,
                n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) {}
            return r.title = t, h
        }, h.queues = [], h.busy = function (e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function () {
                    var e, n, r;
                    if (h.busy.flag) return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0) continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function (e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function (e, t) {
            return typeof e == "function" && (e = {
                callback: e
            }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function () {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function (e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function () {
            var t = h.extractState(h.getLocationHref()),
                n;
            if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        }, h.back = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.back,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({
                scope: h,
                callback: h.forward,
                args: arguments,
                queue: e
            }), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function (e, t) {
            var n;
            if (e > 0)
                for (n = 1; n <= e; ++n) h.forward(t);
            else {
                if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n) h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function () {};
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function (t, n) {
            var r = !1,
                i = !1,
                s, o;
            return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: i
            }), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }; if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (m) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
            var e, t, n;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (r) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t)) continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t)) continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t)) continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), n = l.stringify(e);
            try {
                s.setItem("History.store", n)
            } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
            }
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function () {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function () {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, (!h.options || !h.options.delayInit) && h.init()
}(window),
function (e) {
    var t = {
        debug: !1,
        ie: e("html").hasClass("ie"),
        ieold: e("html").hasClass("ieold"),
        isMobile: navigator.userAgent.match(/(?:iPhone|iPad|iPod|Android)/i) != null,
        hasHistory5: !! window.history && !! history.pushState,
        clickEventType: "",
        collections: "",
        collectedGigs: [],
        mainPopupBox: !1,
        curDropdownText: "",
        mainWrapperWatcher: !1,
        imagesToCheckForBroken: [
            [".user-pict-24 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-24x24-903722ff549aca3f187a6542124c5b70.png"],
            [".user-pict-32 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-32x32-078ffc9dd3591b31c210dda557e1c7a8.png"],
            [".user-pict-50 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-50x50-d472a2de168b9d57397f4272c05df3e5.png"],
            [".user-pict-100 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-100x100-5e08ff75f4afd44131f5b6df1deb1bca.png"],
            [".user-pict-180 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-180x180-56feaa3cd6c72edae9a33e0391ff6953.png"],
            [".gig-pict-74 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-74x53-ded440c6b82d3a9208d4da92cc41c759.png"],
            [".gig-pict-45 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-45x32-afc9066a76e2d2cbf778359dfb0d0fed.png"],
            [".gig-pict-102 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-102x72-377488ec8ff2c0d16fb2b7a8145899e2.png"],
            [".gig-pict-162 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-162x121-f384fbf8a62bb9c7b493701bf9cb7cbc.png"],
            [".gig-pict-200 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-200x123-4f210f2d630ad7fdff9cc0d66ceea5f1.png"],
            [".coll-pict-76 img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-76x54-5257bbc069bdf162950ac9ee1a382ca8.png"],
            [".coll-pict-148", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-148x91-fd25b549de6ddb93f8e38ba2a5ff5e7c.png"],
            [".gallery-gig-detail .slide .img-holder img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-680x459-f70f596c6dc495cf9619825fd46f5745.png"],
            [".gallery-gig-detail .slide .js-play-trigger img", "//d2nt7j7ljjsiah.cloudfront.net/assets/v2_globals/missing-image-680x459-f70f596c6dc495cf9619825fd46f5745.png"]
        ],
        init: function () {
            this.handleOrderStartedCookie(), t.isMobile || (mainWrapperWatcher = _.debounce(t.mainWrapperPush, 300), e(window).resize(mainWrapperWatcher), this.mainWrapperPush()), e(document.body).on(t.clickEventType, ".fbconnect_login_button", function (n) {
                n.preventDefault();
                var r = 600,
                    i = 400,
                    s = screen.width / 2 - r / 2,
                    o = screen.height / 2 - i / 2,
                    u = "width=" + r + ",height=" + i + ",top=" + o + ",left=" + s,
                    a = window.open("/authentications/new", "facebookconnect", u);
                e(this).hasClass("cookie") && e.cookie("sign_up_page", "yup", {
                    path: "/"
                });
                var f = setInterval(function () {
                    if (a.closed != 0) {
                        clearInterval(f);
                        var n = null;
                        e.ajax({
                            type: "get",
                            url: "/authentications/redirect",
                            async: !1,
                            dataType: "json",
                            success: function (e) {
                                n = e.url
                            },
                            error: function () {
                                window.location.href = "/authentications/redirect"
                            }
                        }), !n || n == "/" ? window.location.href = "/authentications/redirect" : n != "#" && (n == "/users/new_from_facebook" ? t.openFBUserPopup(n) : window.location.href = n)
                    }
                }, 500);
                return !1
            }), e("[rel=tooltip]").tooltip(), this.initDotDot(), this.bindDisableBtn(".disableonclick"), this.bindStars(), e("div.gallery-order").length > 0 && this.initGallery(e("div.gallery-order")), this.bindCbxClick(), this.bindVideoPlayBtn(), this.bindMainMpPopups(), this.bindCollectHearts(), document.levelPopup && this.bindLevelPopup(), t.isMobile && this.initGlobalMobile()
        },
        mainWrapperPush: function () {
            if (!t.isMobile)
                if (e("#main-wrapper-header").length > 0) {
                    var n = e("#main-wrapper-header").height();
                    e("#action-bar").length > 0 && e("#action-bar").css("top", n + "px"), e("#main-wrapper").css("padding-top", n + "px")
                } else e("#main-wrapper").css("padding-top", "0px")
        },
        initDotDot: function (t) {
            var n = ".ellipsis",
                r = e(n);
            t && (r = e(t).find(n)), r.length > 0 && r.dotdotdot({
                wrap: "letter",
                watch: "window"
            })
        },
        initfakeDropdown: function (t) {
            var n = t ? t.find(".fake-dropdown") : e(".fake-dropdown");
            e.each(n, function (t, n) {
                var r = e(this),
                    i = r.find(".dropdown-toggle"),
                    s = r.find(".dropdown-menu"),
                    o = 0;
                s.css({
                    top: "-10000px"
                }), r.addClass("open"), o = e(s.find('li:not(".hidden") a')[0]).width(), r.removeClass("open"), s.css("top", "-2px"), i.data("autowidth") === undefined && (s.css("width", o + 40 + "px"), i.css("width", o + "px")), r.css({
                    visibility: "visible"
                })
            })
        },
        initfakeDropdownReal: function (n, r) {
            if (!n) return !1;
            var i = e(n),
                s = i.find(".dropdown-toggle"),
                o = i.find(".dropdown-menu"),
                u = i.data("field-name"),
                a = i.find("#" + u),
                f = 0,
                l = r || function (t) {
                    a.val(e(t).data("field-value")), s.html(e(t).text())
                };
            o.css({
                top: "-10000px"
            }), i.addClass("open"), f = e(o.find('li:not(".hidden") a')[0]).width(), i.removeClass("open"), o.css("top", "-2px");
            if (s.data("min-width")) {
                var c = s.data("min-width");
                c > f && (f = c)
            }
            s.data("autowidth") === undefined && (o.css("width", f + 40 + "px"), s.css("width", f + "px")), o.find("li a").bind(t.clickEventType, function (n) {
                n.preventDefault(), l(this), t.isMobile && e(".dropdown-backdrop").trigger("click")
            })
        },
        checkForBrokenImg: function (n) {
            e.each(t.imagesToCheckForBroken, function (r, i) {
                var s = this[0],
                    o = e(s);
                n && (o = e(n).find(s));
                if (o.length > 0) {
                    var u = this[1];
                    e.each(o, function (n, r) {
                        e(r).attr("src").indexOf("missing-image-") < 0 ? e(r).data("reload") || (e(r).attr("data-reload", "inprogress"), t.replaceBrokenImg([e(r), u])) : e(r).addClass("noscale")
                    })
                }
            })
        },
        replaceBrokenImg: function (n) {
            var r = n[0],
                i = n[1],
                s = window.mozInnerScreenX != null;
            if (e(r).attr("data-reload") == "loadagain") {
                var o = e(r).data("original") + "?" + (new Date).getTime();
                e(r).attr("src", o)
            }
            var u = (new e(r)).imagesHaveLoaded().progress(function (n, o) {
                var u = o.isLoaded ? "loaded" : "broken";
                u == "broken" && (e(r).attr("data-reload") == "loadagain" ? (e(r).attr("data-reload", "broken"), e(r).removeAttr("data-original"), e(r).attr("src", i), e(r).addClass("noscale")) : e(r).attr("data-reload") == "inprogress" && (e(r).attr("data-reload", "loadagain"), e(r).attr("data-original", e(r).attr("src")), e(r).attr("src", i), s || _.delay(t.replaceBrokenImg, 5e3, [r, i])))
            })
        },
        getUrlVars: function (e) {
            var t = {}, n = window.location.search + window.location.hash;
            e && (n = e);
            var r = n.replace(/[?&]+([^=&]+)(=[^&]*)?/gi, function (e, n, r) {
                t[n] = r === undefined ? !0 : r.substring(1)
            });
            return t
        },
        getUrlHashVars: function (e, t) {
            var n = {}, e = e ? e : "?",
                r = window.location.search + window.location.hash;
            t && (r = t);
            if (e == "?") var i = r.replace(/[?&]+([^=&]+)(=[^&]*)?/gi, function (e, t, r) {
                n[t] = r === undefined ? !0 : r.substring(1)
            });
            else var i = r.replace(/[#&]+([^=&]+)(=[^&]*)?/gi, function (e, t, r) {
                n[t] = r === undefined ? !0 : r.substring(1)
            });
            return n
        },
        initGlobalMobile: function () {
            e(".main-nav .header-user .user-trigger").length > 0 && e(".main-nav .header-user .user-trigger").bind(t.clickEventType, function (t) {
                e(".main-nav .header-user").hasClass("mobile-open") ? e(".main-nav .header-user").removeClass("mobile-open") : (t.preventDefault(), e(".main-nav .header-user").addClass("mobile-open"))
            })
        },
        initGallery: function (n, r, i, s) {
            s = s || "default";
            if (!n) return !1;
            var o = this,
                n = e(n),
                u = n.attr("id"),
                a = n.find(".js-vid-processing"),
                f = n.find(".js-gallery-box .js-slide").length,
                l = n.find(".js-gallery-box .js-coll-slider"),
                c = l.hasClass("no-anim"),
                h = n.find(".js-gallery-box .js-gallery-nav"),
                p = !1,
                d = !1,
                v = null,
                m = !1,
                r = r || function () {}, i = i || function () {};
            s == "deliveries" && (h = n.find(".js-gallery-nav"));
            if (n.find(".js-gallery-circles").length > 0)
                if (f > 1) {
                    d = !0;
                    if (n.find(".js-gallery-circles a").length == 0)
                        for (var g = 1; g <= f; g++) n.find(".js-gallery-circles").append('<a href="#' + g + '"></a>');
                    v = n.find(".js-gallery-circles a"), v.eq(0).addClass("sel"), v.bind(t.clickEventType, function (t) {
                        t.preventDefault(), e(this).hasClass("sel") || o.slideToPos(v.index(this))
                    })
                } else d = !1, n.find(".js-gallery-circles").hide();
            if (n.find(".js-gallery-thumbs").length > 0) {
                p = !0;
                var y = n.find(".js-gallery-thumbs .js-thumb"),
                    b = 7,
                    w = n.find(".js-gallery-thumbs .js-coll-slider"),
                    E = n.find(".js-gallery-thumbs .js-gallery-nav")
            }
            frames[u] = e('<iframe width="100%" height="100%" frameborder="0" scrolling="no"></iframe>'), p ? f < 1 + b && (n.find(".gallery-thumbs .gallery-nav").addClass("inactive"), f < 2 && n.find(".gallery-box .gallery-nav").addClass("inactive")) : f < 2 && n.find(".gallery-box .gallery-nav").addClass("inactive"), e.each(a, function (n, r) {
                var i = e(r).closest(".js-slide"),
                    s = i.find(".js-vid-processing"),
                    o = s.data("video");
                t.checkVideoReady(o, null, function (e) {
                    i.find(".js-play-trigger img").attr("src", e.thumb), i.find(".js-play-trigger a").attr("href", e.url), s.remove()
                })
            }), p && (y.eq(0).addClass("sel"), y.bind(t.clickEventType, function (t) {
                t.preventDefault(), e(this).hasClass("sel") || o.slideToPos(y.index(this))
            }), E.bind(t.clickEventType, function (t) {
                t.preventDefault(), e(this).hasClass("inactive") || (e(this).hasClass("nav-next") ? o.slideThumbToPos("next") : o.slideThumbToPos("prev"))
            })), h.bind(t.clickEventType, function (t) {
                t.preventDefault(), !e(this).hasClass("inactive") && !m && (e(this).hasClass("nav-next") ? o.slideToPos("next") : o.slideToPos("prev"))
            }), o.slideToPos = function (t) {
                m = !0;
                var i = t,
                    o = n.find(".js-gallery-box .js-slide").eq(0).width(),
                    u = 0,
                    a = !1;
                s == "deliveries" && (f = n.find(".js-gallery-box .js-slide").length);
                if (p) u = y.index(y.filter(".sel"));
                else {
                    var g = parseInt(l.css("left"));
                    g < 0 && (u = (0 - g) / o)
                }
                t == "next" ? i = u + 1 : t == "prev" && (i = u - 1), a = n.find(".js-gallery-box .js-slide").eq(u), a = e(a);
                if (a.find("iframe")) {
                    a.find("iframe").remove(), a.find(".js-play-trigger").show();
                    var b = n.find(".featured-gig");
                    b.length > 0 && b.css("display") != "block" && b.fadeIn("fast")
                }
                r(u), i == f - 1 ? (h.filter(".nav-next").addClass("inactive"), h.filter(".nav-prev").removeClass("inactive")) : i == 0 ? (h.filter(".nav-next").removeClass("inactive"), h.filter(".nav-prev").addClass("inactive")) : h.removeClass("inactive"), p && y.removeClass("sel").eq(i).addClass("sel");
                if (c) {
                    if (i == 0) var w = "0";
                    else var w = 0 - o * i;
                    l.stop(!0).animate({
                        left: w + "px"
                    }, 400, "easeInOutQuart", function () {
                        d && v.removeClass("sel").eq(i).addClass("sel"), S(i)
                    })
                } else i == 0 ? l.css("left", "0px") : l.css("left", 0 - o * i + "px"), d && v.removeClass("sel").eq(i).addClass("sel"), _.delay(S, 400, i)
            }, o.slideThumbToPos = function (e) {
                var t = y.eq(0).outerWidth(!0),
                    n = 0 - parseInt(w.css("left")) / t,
                    r = n;
                e == "next" ? r = n + 1 : e == "prev" && (r = n - 1), r == f - b ? (E.filter(".nav-next").addClass("inactive"), E.filter(".nav-prev").removeClass("inactive")) : r == 0 ? (E.filter(".nav-next").removeClass("inactive"), E.filter(".nav-prev").addClass("inactive")) : E.removeClass("inactive"), w.css("left", 0 - t * r + "px")
            };
            var S = function (e) {
                m = !1, i(e)
            }
        },
        initSimpleSlider: function (n, r, i, s) {
            if (!n) return !1;
            var o = this,
                r = r || function () {}, u = n,
                a = u.find(".js-coll-slider"),
                f = i || u.find(".js-gallery-box").innerWidth(),
                l = u.find(".js-gallery-nav"),
                c = a.find(".js-slide").length,
                h = s || 1,
                p = !1,
                d = 400;
            h > 1 && (d = 200 * h), c > h && u.find(".nav-next").removeClass("inactive"), l.bind(t.clickEventType, function (t) {
                t.preventDefault(), c = a.find(".js-slide").length;
                if (c < 1 + h || e(this).hasClass("inactive")) return e(this).addClass("inactive"), !1;
                if (p) return !1;
                p = !0, e(this).hasClass("nav-next") ? v("next") : v("prev")
            });
            var v = function (e) {
                var t = parseInt(a.css("left")),
                    n = null;
                e == "next" ? (n = t - f, n - f == -(f * (c / h)) ? u.find(".js-gallery-nav.nav-next").addClass("inactive") : n - f < -(f * (c / h)) && (u.find(".js-gallery-nav.nav-next").addClass("inactive"), n = -(f * (c / h)) + f), u.find(".js-gallery-nav.nav-prev").removeClass("inactive")) : (n = t + f, n >= 0 && (n = 0, u.find(".js-gallery-nav.nav-prev").addClass("inactive")), u.find(".js-gallery-nav.nav-next").removeClass("inactive")), a.stop(!0).animate({
                    left: n + "px"
                }, d, "easeInOutQuart", function () {
                    r(Math.abs(n) / f + 1), p = !1
                })
            }
        },
        bindDisableBtn: function (n) {
            e(document).on(t.clickEventType, n, function (t) {
                var r = e(n);
                r.hasClass("disabled") || r.attr("disabled") ? t.preventDefault() : r.is("a") ? r.addClass("disabled in-progress") : r.is("input, button") && (r.attr("disabled", "disabled"), r.addClass("in-progress"), r.is("input[type='submit']") && r.closest("form").submit())
            })
        },
        bindLoadMore: function (n, r, i) {
            var s = this;
            s.pagination = r || 2, i = {
                onSuccess: i.onSuccess || function () {},
                onError: i.onError || function () {}
            }, n.find(".pagi-standard a").bind(t.clickEventType, function (n) {
                n.preventDefault();
                var r = this;
                r.href = r.href.replace(/(&page=)\d+/, ""), r.href = r.href.replace(/(\?page=)\d+&?/, "?"), s.pagination > 0 && e.ajax({
                    type: "get",
                    url: r.href,
                    dataType: "text",
                    data: {
                        page: s.pagination
                    },
                    success: function (n) {
                        n = e.parseJSON(n), s.pagination = n.pagination, s.pagination < 1 && e(r).parent(".pagi-standard").fadeOut(function () {
                            e(this).remove()
                        }), i.onSuccess(r, n), t.checkForBrokenImg()
                    },
                    error: function (e, t, n) {
                        i.onError(r, n)
                    }
                })
            })
        },
        bindStars: function () {
            e(document.body).on(t.clickEventType, ".star", function (t) {
                t.preventDefault();
                var n = this;
                e.ajax({
                    type: "post",
                    url: n.href,
                    dataType: "text",
                    success: function (t) {
                        var r = parseInt(e(".stars-count").first().text()),
                            i = e(n),
                            s = i.closest("tr").find(".js-checkbox"),
                            o = e(s).attr("data-filter");
                        i.hasClass("starred") ? (i.removeClass("starred").text("star").attr("title", "star"), e(".stars-count").text(r - 1), s.length > 0 && e(s).attr("data-filter", o.replace("{starred}", "{unstarred}"))) : (i.addClass("starred").text("starred").attr("title", "unstar"), e(".stars-count").text(r + 1), s.length > 0 && e(s).attr("data-filter", o.replace("{unstarred}", "{starred}"))), i.attr("rel") == "tooltip" && i.tooltip("destroy").tooltip()
                    }
                })
            })
        },
        bindCollectHearts: function () {
            e(document).on(t.clickEventType, ".coll-heart a.icn-heart", function (n) {
                n.preventDefault();
                if (!e(this).hasClass("js-open-popup-join") && !! document.pageScope.currentUser) {
                    var r = e(this).closest(".coll-heart"),
                        i = e(r).attr("id"),
                        s = i.substring(9),
                        o = "/users/" + document.pageScope.currentUser + "/collections/add_to_recent",
                        u = "/users/" + document.pageScope.currentUser + "/collections/remove";
                    r.hasClass("collected") ? e.ajax({
                        type: "post",
                        url: u,
                        dataType: "text",
                        data: {
                            gig_id: s
                        },
                        success: function () {
                            r.removeClass("collected"), r.find("span").length > 0 && r.find("span").html(e.t("general.save")), e.each(t.collections, function (t, n) {
                                e.inArray(s, String(n.gigs).split(",")) > -1 && n.gigs.splice(n.gigs.indexOf(s), 1)
                            })
                        }
                    }) : e.ajax({
                        type: "post",
                        url: o,
                        dataType: "text",
                        data: {
                            gig_id: s
                        },
                        success: function () {
                            r.addClass("collected"), r.find("span").length > 0 && r.find("span").html(e.t("general.saved"))
                        }
                    })
                }
            }).on("contextmenu", ".coll-heart", function (n) {
                if (e(this).hasClass("js-open-popup-join") || !document.pageScope.currentUser) return;
                var r = e(this),
                    i = e(r).attr("id"),
                    s = i.substring(9);
                return t.openCollectionsDropdown(r, s), !1
            }).on(t.clickEventType, ".coll-heart a.icn-heart-toggle", function (n) {
                n.preventDefault(), n.stopPropagation();
                var r = e(this).closest(".coll-heart"),
                    i = e(r).attr("id"),
                    s = i.substring(9);
                t.openCollectionsDropdown(r, s)
            }).on(t.clickEventType, function () {
                e(".coll-dd").hide()
            }).on(t.clickEventType, "#js-popup-coll", function (e) {
                e.stopPropagation()
            }).on(t.clickEventType, ".coll-dd-item a", function (n) {
                n.preventDefault(), n.stopPropagation();
                var r = e(this),
                    i = r.text(),
                    s = r.closest(".coll-dd").attr("data-gig-id");
                r.hasClass("collected") ? (r.removeClass("collected"), e.ajax({
                    type: "delete",
                    url: "/collections/remove_from",
                    dataType: "text",
                    data: {
                        gig_id: s,
                        collection: i
                    },
                    success: function () {
                        var e = t.collections[i].gigs,
                            n = e.indexOf(s);
                        e.splice(n, 1)
                    },
                    error: function () {
                        r.addClass("collected")
                    }
                })) : (r.addClass("collected"), e.ajax({
                    type: "post",
                    url: "/collections/add_to",
                    dataType: "text",
                    data: {
                        gig_id: s,
                        collection: i
                    },
                    success: function () {
                        var n = e("#coll-gig-" + s);
                        n.addClass("collected"), n.find("span").length > 0 && n.find("span").html(e.t("general.saved")), t.collections[i].gigs.push(parseInt(s))
                    },
                    error: function () {
                        r.removeClass("collected")
                    }
                }))
            }).on(t.clickEventType, ".js-add-coll", function (n) {
                n.preventDefault(), n.stopPropagation();
                var r = e(this),
                    i = r.closest(".coll-dd").attr("data-gig-id");
                e("#js-popup-coll").remove(), e("body").prepend('<div class="popup popup-new-coll" id="js-popup-coll"><div class="popup-content"><a href="#" class="btn-close "></a><form class="new-coll-form general-form-field-wrap"><label for="collection">' + e.t("collections.popup.name_new_coll") + "</label>" + '<input type="text" name="collection" id="collection" placeholder="' + e.t("collections.popup.collection_name") + '">' + '<input type="hidden" name="gig_id" id="gig_id" value="' + i + '">' + '<div class="submit-container">' + '<input type="submit" class="btn-standard btn-green" value="' + e.t("collections.popup.submit") + '">' + "</div>" + "</form>" + "</div>" + "</div>"), t.bindNewCollectionForm(), t.collPopup = e("#js-popup-coll").bPopup({
                    closeClass: "btn-close",
                    opacity: .6,
                    follow: [!0, !0]
                })
            })
        },
        openCollectionsDropdown: function (n, r) {
            if (!r || n.length < 1) return;
            e(".coll-dd").remove();
            var i = e("body"),
                s = e('<div class="coll-dd" data-gig-id="' + r + '"><div class="antiscroll-wrap"><ul class="antiscroll-inner coll-dd-list"></ul></div><ul><li class="divider"></li><li><a href="#" class="js-add-coll add-coll">' + e.t("collections.popup.add_collection") + "</a></li></ul></div>"),
                o = n.offset(),
                u = !1,
                a = '<% _.each(data, function(collection, key){ %><li class="coll-dd-item"><a href="#" class="heart <% if ((collection.gigs[0] != undefined) && ($.inArray(gigId, String(collection.gigs).split(",")) > -1)) {%>collected<%}%>"><%=key%></a></li><% }); %>',
                f = function () {
                    if (e("#js-popup-coll:visible").length > 0) return;
                    s.hasClass("open") && !u && s.remove()
                };
            s.find("ul.coll-dd-list").prepend(_.template(a, {
                data: t.collections,
                gigId: r
            })), s.css({
                top: o.top,
                left: o.left
            }).addClass("open"), i.append(s), Object.keys(t.collections).length > 6 && e(".coll-dd .antiscroll-wrap").antiscroll({}), s.mouseleave(function () {
                s.hasClass("open") && (u = !1, _.delay(f, 1e3))
            }), s.mouseenter(function () {
                u = !0
            })
        },
        loadCollectionsList: function (n, r) {
            if (!document.pageScope.currentUser || document.pageScope.pendingUser) return;
            r = r != null ? r : !1;
            var i = [],
                s = ".coll-heart",
                o = e(s);
            n && (o = e(n).find(s)), e.each(o, function (t, n) {
                var r = e(n).attr("id");
                i.push(r.substring(9))
            });
            if (i.length < 1) return;
            e.ajax({
                type: "get",
                url: "/collections/hash",
                dataType: "text",
                data: {
                    gigs: i
                },
                success: function (n) {
                    n = e.parseJSON(n), t.collections = n.collections, t.collectedGigs = n.collected_gigs, r && e.each(t.collectedGigs, function (t, n) {
                        e("#coll-gig-" + n).addClass("collected"), e("#coll-gig-" + n).find("span").length > 0 && e("#coll-gig-" + n).find("span").html(e.t("general.saved"))
                    })
                }
            })
        },
        bindNewCollectionForm: function () {
            var n = e("form.new-coll-form");
            if (n.length < 1) return;
            FiverrForms.forms.newCollectionForm = new FiverrForms.formHandler(n, {
                onInit: function (e) {
                    e.collection = n.find('input[name="collection"]'), e.gigId = n.find('input[name="gig_id"]'), new FiverrForms.formGeneralObject(e.collection)
                },
                onSubmit: function (n, r) {
                    var i = r.collection.val(),
                        s = r.gigId.val();
                    r.disableFormSubmit(), i.length < 5 || i.length > 52 ? (r.collection.geShowError(e.t("collections.error.length_error")), r.enableFormSubmit()) : (r.collection.geClearErrors(), e.ajax({
                        type: "post",
                        url: "/collections/add_to",
                        dataType: "text",
                        data: {
                            gig_id: s,
                            collection: i
                        },
                        success: function (n) {
                            n = e.parseJSON(n);
                            if (n.code == 200) {
                                var o = e('<li class="coll-dd-item"><a href="#" class="heart collected">' + i + "</a></li>"),
                                    u = e("#coll-gig-" + s);
                                e(".coll-dd:visible ul.coll-dd-list").prepend(o).scrollTo({
                                    top: 0,
                                    left: 0
                                }), u.addClass("collected"), u.find("span").length > 0 && u.find("span").html(e.t("general.saved")), t.collPopup.close(), t.loadCollectionsList(), Object.keys(t.collections).length > 6 && e(".coll-dd .antiscroll-wrap").antiscroll({})
                            } else n.error && r.collection.geShowError(n.error), r.enableFormSubmit()
                        }
                    })), n.preventDefault()
                }
            })
        },
        bindMainMpPopups: function () {
            e(document.body).on(t.clickEventType, ".js-open-popup-login", function (e) {
                if (document.pageScope.main == "users" && document.pageScope.sub == "new") return !0;
                e.preventDefault();
                if (document.pageScope.main == "user_sessions") return !1;
                t.openInlineUserPopupNew("login")
            }), e(document.body).on(t.clickEventType, ".js-open-popup-join", function (n) {
                if (document.pageScope.main == "user_sessions") return !0;
                n.preventDefault();
                if (document.pageScope.main == "users" && document.pageScope.sub == "new") return !1;
                t.openInlineUserPopupNew("join", e(this).attr("href"))
            }), e(document.body).on(t.clickEventType, ".js-open-popup-withdrawalfees", function (t) {
                t.preventDefault(), e(".popup-withdrawal-fees").bPopup({
                    closeClass: "btn-close",
                    opacity: .6,
                    follow: [!0, !0]
                })
            }), e(".js-popup-hotmail").length > 0 && e(".js-popup-hotmail").bPopup({
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0],
                onClose: function () {
                    e.ajax({
                        type: "DELETE",
                        url: e(".js-popup-hotmail").attr("data-remove"),
                        dataType: "text"
                    })
                }
            })
        },
        openInlineUserPopupNew: function (n, r) {
            var r = r || null,
                i = "",
                s = null;
            switch (n) {
            case "join":
                i = ".popup-user-register";
                break;
            case "login":
                i = ".popup-user-login"
            }
            if (n == "join" && r) {
                var o = t.getUrlVars(r);
                o && o.ref && (s = o.ref)
            }
            e(".popup-how-it-works").css("display") == "block" && t.mainPopupBox.closeFast();
            if (e("#js-popup-user").css("display") == "block") {
                var u = e("#js-popup-user");
                u.removeAttr("id"), t.mainPopupBox.closeFast()
            }
            e("#js-popup-user-facebook").css("display") == "block" && t.mainPopupBox.closeFast();
            if (e.cookie("fiverr_xauth")) {
                if (e.cookie("fiverr_login_retry") != "yup") {
                    e.cookie("fiverr_login_retry", "yup", {
                        path: "/"
                    }), window.location.reload();
                    return
                }
                e.removeCookie("fiverr_login_retry", {
                    path: "/"
                })
            }
            t.mainPopupBox = e(i).bPopup({
                amsl: 0,
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0],
                position: ["auto", "auto"],
                appending: !1,
                onOpen: function () {
                    e(i).attr("id", "js-popup-user"), n == "join" && s == "start_selling" ? e.cookie("seller", "true", {
                        expires: 7
                    }) : n == "join" && e.removeCookie("seller")
                },
                onClose: function () {
                    switch (n) {
                    case "join":
                        FiverrForms.forms.popupJoinForm.fullReset();
                        break;
                    case "login":
                        FiverrForms.forms.popupSigninForm.fullReset(), FiverrForms.forms.popupForgotPwForm.fullReset()
                    }
                    e(i).removeAttr("id")
                }
            })
        },
        openFBUserPopup: function (n) {
            var n = n || null;
            if (!n) return;
            e(".popup-how-it-works").css("display") == "block" && t.mainPopupBox.closeFast();
            if (e("#js-popup-user").css("display") == "block") {
                var r = e("#js-popup-user");
                r.removeAttr("id"), t.mainPopupBox.closeFast()
            }
            e("#js-popup-user-facebook").length < 1 && e("body").prepend('<div id="js-popup-user-facebook"></div>'), t.mainPopupBox = e("#js-popup-user-facebook").bPopup({
                amsl: 0,
                loadUrl: n,
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0],
                position: ["auto", "auto"],
                appending: !1,
                loadCallback: function (t, n, r) {
                    e.trim(t) == "" ? window.location.reload() : (FiverrForms.forms.popupSigninForm = new FiverrForms.newEntryForm, FiverrForms.forms.popupFbForm = new FiverrForms.newJoinForm)
                }
            })
        },
        bindCbxClick: function () {
            e(document.body).on(t.clickEventType, ".js-checkbox", function (t) {
                e(this).closest("tr").toggleClass("sel")
            })
        },
        selectCbxByFilter: function (n, r) {
            r = typeof r != "undefined" ? r : "";
            var i = null,
                s = e('a.dropdown-toggle input[type="checkbox"]'),
                o = ".js-checkbox";
            e(o).prop("checked", !1).closest("tr").removeClass("sel");
            switch (n) {
            case "none":
                i = null, t.curDropdownText = "", e(".filter-actions-inbox a").addClass("disabled");
                break;
            case "all":
                i = e(r + " " + o);
                break;
            case "cbx":
                s.prop("checked") ? i = e(r + " " + o) : e(".filter-actions-inbox a").addClass("disabled");
                break;
            default:
                i = e(r + " " + o + '[data-filter*="{' + n + '}"]')
            }
            i && i.length > 0 ? (i.prop("checked", "checked").closest("tr").addClass("sel"), s.prop("checked", "checked"), e(".filter-actions-inbox a").removeClass("disabled")) : e(s).prop("checked", !1), e("a.dropdown-toggle .drop-initial").text(t.curDropdownText).css({
                "min-width": t.curDropdownText ? "20px" : "0px"
            })
        },
        howLongAgo: function (t) {
            var n = (new Date).getTime(),
                r, i = (n - t) / 1e3,
                s = i / 60,
                o = s / 60,
                u = Math.round(o / 24),
                a = Math.round(u / 7),
                f = Math.round(u / 30.4),
                l = f / 12;
            return i < 60 ? r = "a minute ago" : s < 60 ? r = e.t("date.how_long_ago.minutes_ago", {
                num_minutes: Math.floor(s)
            }) : o < 2 ? r = e.t("date.how_long_ago.hour_ago") : o < 24 ? r = e.t("date.how_long_ago.hours_ago", {
                num_hours: Math.floor(o)
            }) : u < 2 ? r = e.t("date.how_long_ago.day_ago") : u < 7 ? r = e.t("date.how_long_ago.days_ago", {
                num_days: u
            }) : a < 2 ? r = e.t("date.how_long_ago.week_ago") : a < 4 ? r = e.t("date.how_long_ago.weeks_ago", {
                num_weeks: a
            }) : f < 2 ? r = e.t("date.how_long_ago.month_ago") : f < 12 ? r = e.t("date.how_long_ago.months_ago", {
                num_months: f
            }) : l < 2 ? r = e.t("date.how_long_ago.year_ago") : r = e.t("date.how_long_ago.years_ago", {
                num_years: Math.floor(l)
            }), r
        },
        capitalizeFirstLetter: function (e) {
            return e.charAt(0).toUpperCase() + e.substring(1)
        },
        initShareDeliveries: function (n, r) {
            var i = this,
                s;
            btns = n, jsonShareParams = null, idToShare = null, shareType = null, r = r || {}, clipboardValue = null;
            var o = {
                gaqCategory: r.gaqCategory || "",
                gaqAction: r.gaqAction || "",
                onInit: r.onInit || function () {},
                onShare: r.onShare || function () {}
            }, u = function () {
                    a(), o.onInit(i)
                }, a = function () {
                    e.each(btns, function (e, t) {
                        c(t)
                    }), l()
                }, f = function () {
                    var n = e("#short_share_url");
                    if (n.length < 1) return !1;
                    n.val("http://share.fiverr.com/...").removeAttr("style"), n.bind(t.clickEventType, function () {
                        n.val("").addClass("processing").unbind(), jsonShareParams = p(e(this)), d(jsonShareParams, function (e) {
                            n.val(e), n.select().removeClass("processing"), n.parent().find("a").attr("href", e), n.parent().find("a").show()
                        }), o.onShare(i, this), typeof _gaq != "undefined" && _gaq.push(["_trackEvent", o.gaqCategory, o.gaqAction, "copy link"])
                    })
                }, l = function () {
                    var n = e(".fbsend");
                    if (n.length < 1) return !1;
                    n.bind(t.clickEventType, function (t) {
                        t.preventDefault(), jsonShareParams = p(e(this)), d(jsonShareParams, function (t) {
                            FB.ui({
                                method: "send",
                                name: e.t("fb_share.name", {
                                    delivery_type: jsonShareParams.delivery_type
                                }),
                                link: t
                            })
                        }), h("fbsend," + o.gaqAction), o.onShare(i, this)
                    })
                }, c = function (n) {
                    if (!n) return !1;
                    e(n).bind(t.clickEventType, function (t) {
                        t.preventDefault(), jsonShareParams = p(e(this)), v(jsonShareParams), o.onShare(i, this), h(jsonShareParams.social_platform + "," + o.gaqAction)
                    })
                }, h = function (e) {
                    typeof _gaq != "undefined" && _gaq.push(["_trackEvent", o.gaqCategory, o.gaqAction, e])
                }, p = function (e) {
                    var t = idToShare || e.attr("object_id");
                    if (!t || typeof t == "undefined") throw "no object to share";
                    var n = shareType || e.attr("delivery_type");
                    if (!n || typeof n == "undefined") throw "no delivery type";
                    return jsonShareParams = {
                        object_id: t,
                        object_type: e.attr("object_type"),
                        gig_id: e.attr("gig_id"),
                        delivery_id: e.attr("delivery_id"),
                        user_id: e.attr("user_id"),
                        social_platform: e.attr("social_platform"),
                        sharer: e.attr("sharer"),
                        delivery_type: n,
                        source: e.attr("source"),
                        share_url: e.attr("share_url"),
                        utm_source: e.attr("utm_source"),
                        utm_term: e.attr("utm_term"),
                        utm_campaign: e.attr("utm_campaign")
                    }, jsonShareParams
                }, d = function (t, n, r) {
                    e.ajax({
                        type: "get",
                        url: "/d/share_delivery",
                        data: t,
                        dataType: "text",
                        async: r == "false" ? !1 : !0,
                        success: function (e) {
                            n(e)
                        },
                        error: function () {
                            s && s.close()
                        }
                    })
                }, v = function (e) {
                    var t = e.social_platform,
                        n = 500,
                        r = 600,
                        i = Math.floor((screen.width - r) / 2),
                        o = Math.floor((screen.height - n) / 2),
                        u = "top=" + o + ",left=" + i + ",height=" + n + ",width=" + r + ",menubar=no,toolbar=no";
                    return s = window.open("", t, u), d(e, function (e) {
                        s.location.href = e
                    }), parseInt(navigator.appVersion) >= 4 && s.window.focus(), s
                };
            i.setShareParams = function (e, t) {
                idToShare = e, shareType = t, f(), clipboardValue = null
            }, u()
        },
        toBoolean: function (e) {
            return e == "true" ? !0 : e == "false" ? !1 : e.toString()
        },
        checkVideoReady: function (n, r, i) {
            if (!n) return !1;
            var s = Math.round(r / 1024 * 15) || 3e4,
                o = setInterval(function () {
                    e.ajax({
                        type: "get",
                        url: "/d/" + n + "/is_video_ready",
                        dataType: "text",
                        success: function (n) {
                            n = t.toBoolean(n), n && (clearInterval(o), n = e.parseJSON(n), i && i(n))
                        },
                        error: function () {
                            clearInterval(o)
                        }
                    })
                }, s)
        },
        bindVideoPlayBtn: function () {
            e(document.body).on(t.clickEventType, ".js-gallery-box .js-vid-play, .msg-sample .js-vid-play", function (t) {
                t.preventDefault();
                var n = e('<iframe width="100%" height="100%" frameborder="0" scrolling="no" src="' + this.href + '&autoplay=1"></iframe>');
                e(this).closest(".js-slide").prepend(n), e(this).closest(".js-play-trigger").hide();
                var r = e(this).closest(".js-slide").find(".work-review");
                r.length > 0 && r.fadeOut(400, function () {
                    r.css("bottom", "-77px"), r.find(".real").hide()
                });
                var i = e(this).closest(".gallery-gig-detail").find(".featured-gig");
                i.length > 0 && i.fadeOut("fast")
            })
        },
        openWindow: function (e, t, n, r) {
            if (!e) return !1;
            var t = t || "Fiverr",
                r = r || 450,
                n = n || 600,
                i = Math.floor((screen.width - n) / 2),
                s = Math.floor((screen.height - r) / 2),
                o = "top=" + s + ",left=" + i + ",height=" + r + ",width=" + n + ",menubar=no,toolbar=no";
            win = window.open(e, t, o)
        },
        bindLevelPopup: function () {
            var n = e(this.levelPopupTemplate(document.levelPopup));
            e(document.body).append(n), n.bPopup({
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0],
                onClose: function () {
                    e.ajax({
                        type: "DELETE",
                        url: document.levelPopup.remove,
                        dataType: "text"
                    })
                }
            }), n.find("footer a").bind(t.clickEventType, function (e) {
                e.preventDefault(), t.openWindow(this.href)
            })
        },
        levelPopupTemplate: function (e) {
            var t = '<section class="popup level-popup"><header><h2><%= data.title %><a href="#" class="btn-close"></a></h2><h3><%= data.subTitle %></h3></header><div class="popup-content"><a href="/levels#<%= data.level %>"><img src="<%= data.image %>"></a></div><footer class="cf"><a href="<%= data.twHref %>" class="btn-standard-lrg btn-tw-blue" title="<%= data.twTitle %>">tweet</a><a href="<%= data.fbHref %>" class="btn-standard-lrg btn-fb-blue" title="<%= data.fbTitle %>">share</a><span><%= data.brag %></span></footer></section>';
            return _.template(t, {
                data: e
            })
        },
        handleOrderStartedCookie: function () {
            if (!e.cookie("order_started")) return;
            var t = (document.pageScope.main == "users" || document.pageScope.main == "user_sessions") && (document.pageScope.sub == "new" || document.pageScope.sub == "create" || document.pageScope.sub == "new_from_facebook") || document.pageScope.main == "purchases";
            t || e.removeCookie("order_started")
        },
        _debug: function () {
            if (!0 !== t.debug) return;
            typeof console != "undefined" && typeof console.log == "function" ? Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] == "string" ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : !Function.prototype.bind && typeof console != "undefined" && typeof console.log == "object" && Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
        }
    }, n = {
            drawerContainer: ".bomba-wrapper",
            closeBtn: ".drawer-close",
            init: function () {
                this.openDrawer(), this.bindCloseDrawer()
            },
            bindCloseDrawer: function () {
                var n = this;
                e(n.closeBtn).on(t.clickEventType, function (r) {
                    var i = e(this).data("action"),
                        s = e(this).data("redirect");
                    r.preventDefault(), i ? e.ajax({
                        url: i,
                        type: "DELETE",
                        dataType: "JSON",
                        success: function (r, i, o) {
                            s ? document.location.href = s : (e(n.drawerContainer).hide(), t.mainWrapperPush())
                        }
                    }) : (e(n.drawerContainer).hide(), t.mainWrapperPush())
                })
            },
            openDrawer: function () {
                e(n.drawerContainer).show(), t.mainWrapperPush()
            }
        };
    window.Fiverr = t, e(document).ready(function () {
        t.clickEventType = t.isMobile ? "touchstart" : "click", t.init(), n.init()
    }), e(window).load(function () {
        t.checkForBrokenImg()
    })
}(jQuery), jQuery.ajaxSetup({
    beforeSend: function (e) {
        e.setRequestHeader("Accept", "text/javascript"), e.setRequestHeader("X-CSRF-Token", $('meta[name="csrf-token"]').attr("content"))
    }
}),
function (e) {
    var t = {
        init: function (t) {
            var n = this,
                r = {}, i = !1,
                s = !1,
                o = 0,
                u = !1,
                a = {
                    container: e("#countdown"),
                    format: "dd:hh:mm:ss",
                    startTime: "00:01:01:15",
                    isCounting: !0,
                    isAlert: !1,
                    timerEnd: function () {}
                };
            e.extend(a, t), r = {
                ss: {
                    nicename: "seconds",
                    used: !1,
                    delay: 1e3,
                    max1: "5",
                    max2: "9",
                    digit1: "0",
                    digit2: "0"
                },
                mm: {
                    nicename: "minutes",
                    used: !1,
                    delay: 6e4,
                    max1: "5",
                    max2: "9",
                    digit1: "0",
                    digit2: "0"
                },
                hh: {
                    nicename: "hours",
                    used: !1,
                    delay: 36e5,
                    max1: "2",
                    max2: "3",
                    digit1: "0",
                    digit2: "0"
                },
                dd: {
                    nicename: "days",
                    used: !1,
                    delay: 864e5,
                    max1: "9",
                    max2: "9",
                    digit1: "0",
                    digit2: "0"
                }
            }, n.createDigits = function () {
                var e = a.format.split(":"),
                    t = a.startTime.split(":");
                for (var i = 0; i < e.length; i++) r[e[i]].used = !0, r[e[i]].digit1 = t[i][0], r[e[i]].digit2 = t[i][1], n.createPairs(e[i])
            }, n.createPairs = function (t) {
                var n = e("<div/>", {
                    "class": "pair pair-" + t,
                    html: '<div class="num-wrap"><div class="num-middle"></div><div class="num"><div class="num-inner"><div class="up"><div class="divi"></div><div class="shadow"></div><div class="inn">' + r[t].digit1 + "</div>" + "</div>" + '<div class="down">' + '<div class="divi"></div>' + '<div class="shadow"></div>' + '<div class="inn">' + r[t].digit1 + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + '<div class="num-wrap">' + '<div class="num-middle"></div>' + '<div class="num">' + '<div class="num-inner">' + '<div class="up">' + '<div class="divi"></div>' + '<div class="shadow"></div>' + '<div class="inn">' + r[t].digit2 + "</div>" + "</div>" + '<div class="down">' + '<div class="divi"></div>' + '<div class="shadow"></div>' + '<div class="inn">' + r[t].digit2 + "</div>" + "</div>" + "</div>" + "</div>" + "</div>" + "<small>" + r[t].nicename + "</small>"
                });
                e(a.container).append(n)
            }, n.createCounter = function (t) {
                o++, n.updateCountdown(t, !0), !u && r["hh"]["digit1"] == "0" && r["hh"]["digit2"] == "0" && r["dd"]["digit1"] == "0" && r["dd"]["digit2"] == "0" && (u = !0, e(a.container).addClass("countdown-alert-lasthour"))
            }, n.updateCountdown = function (t, o) {
                o && e(a.container).find(".num-wrap").removeClass("play");
                var u = e(a.container).find(".pair-" + t),
                    f = u.find(".num-wrap").eq(0),
                    l = u.find(".num-wrap").eq(1);
                r[t].digit2 > 0 ? (r[t].digit2 = r[t].digit2 - 1, r[t].used && n.updateBox(l, r[t].digit2), n.checkIfDone() && (clearInterval(i), e(a.container).addClass("countdown-alert"), s = setTimeout(function () {
                    e(a.container).find(".num-wrap").removeClass("play")
                }, 1e3), a.timerEnd())) : r[t].digit1 > 0 ? (r[t].digit1 = r[t].digit1 - 1, r[t].used && n.updateBox(f, r[t].digit1), r[t].digit2 = r[t].max2, r[t].used && n.updateBox(l, r[t].max2)) : (r[t].digit1 = r[t].max1, r[t].digit2 = r[t].max2, r[t].used && (n.updateBox(f, r[t].digit1), n.updateBox(l, r[t].digit2)), t == "ss" ? n.updateCountdown("mm", !1) : t == "mm" ? n.updateCountdown("hh", !1) : t == "hh" && n.updateCountdown("dd", !1))
            }, n.updateBox = function (t, n) {
                var r = e(t),
                    i = !1,
                    s = !1,
                    o = !1;
                r.find(".before").length > 0 && r.find(".before").remove(), e("html").hasClass("cssanimations") ? (i = r.find(".num"), i.clone().appendTo(r), s = r.find(".num").eq(0), o = r.find(".num").eq(1), o.find(".inn").html(n), s.addClass("before").removeClass("active"), o.addClass("active"), r.addClass("play")) : r.find(".num .inn").html(n)
            }, n.checkIfDone = function () {
                var t = !0;
                return e.each(r, function (e, n) {
                    if (n.digit1 > 0 || n.digit2 > 0) t = !1
                }), t
            }, e(a.container).empty().fadeOut("fast", function () {
                n.createDigits()
            }), a.isAlert && e(a.container).addClass("countdown-alert"), e(a.container).fadeIn("fast", function () {
                if (a.isCounting) {
                    if (r.ss.used) var e = "ss",
                    t = r.ss.delay;
                    else var e = "mm",
                    t = r.mm.delay;
                    i = setInterval(function () {
                        n.createCounter(e)
                    }, t)
                }
            })
        }
    };
    window.FiverrCountdown = t
}(jQuery),
function (e) {
    var t = {
        forms: {},
        formRegEx: {
            newUser: /^[a-zA-Z][a-zA-Z0-9\_\-\+\.]{5,15}$/,
            existUser: /^[a-zA-Z][a-zA-Z0-9\_\-\+\.]{3,15}\s*$/,
            num: /^[0-9]+$/g,
            email: /^([a-zA-Z0-9\.\-\+\_])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
            pass: /.{6,20}/,
            name: /^[a-zA-Z\s]{2,}$/
        },
        init: function () {
            t.newConvMessage(), t.newDeliveryMessage(), e("#new_support_ticket").length > 0 && t.newFeedback();
            if (e("#join_form").length > 0 || e("#new_user").length > 0) t.forms.popupJoinForm = new t.newJoinForm, e("form#join_form").focus_first();
            e("#session_form").length > 0 && (t.forms.popupSigninForm = new t.newEntryForm, t.forms.popupForgotPwForm = new t.newForgotPwForm, e("form#session_form").focus_first()), e("#reset-password-form").length > 0 && t.initPwdResetForm(), e("#change-password-form").length > 0 && t.initPwdChangeForm(), document.pageScope.main == "gigs" && document.pageScope.sub == "show" && t.setGigShippingForm()
        },
        formHandler: function (t, n) {
            var r = this,
                i = window.FormData ? "uploadifive" : "uploadify",
                s = {}, o = !1,
                u = !1;
            r.form = e(t), r.currentFilesSize = 0, r.isValid = !0, n = n || {};
            var a = {
                submitOnUpload: n.submitOnUpload || !1,
                ajaxSubmit: n.ajaxSubmit || !1,
                ajaxReturnType: n.ajaxReturnType || "text",
                onInit: n.onInit || function () {},
                onSubmit: n.onSubmit || null,
                onAjaxSuccess: n.onAjaxSuccess || function () {},
                onAjaxComplete: n.onAjaxComplete || function () {},
                onAjaxError: n.onAjaxError || function () {},
                resetAfterAjax: n.resetAfterAjax != null ? n.resetAfterAjax : !0
            }, f = function () {
                    r.resetFiles(), l(), a.onInit(r)
                }, l = function () {
                    r.form.submit(function (t) {
                        if (u) return t.preventDefault(), !1;
                        n.onSubmit && a.onSubmit(t, r);
                        var i = !1;
                        e.each(s, function (e, t) {
                            t.val() != "" && (i = !0)
                        });
                        if (n.ajaxSubmit && !i && r.isValid) return t.preventDefault(), g(), !1;
                        if (a.submitOnUpload) return t.preventDefault(), r.uploadifiveAction("upload"), !1;
                        if (!r.isValid) return t.preventDefault(), !1
                    }), t.find(".js-regular-upload").bind(Fiverr.clickEventType, function (e) {
                        e.preventDefault(), t.find(".attach-files").hide().find(".uploadifive-button").removeClass("disabled"), t.find(".attach-files-regular").show(), i == "uploadifive" && r.uploadifiveAction("clearQueueAndCancel"), r.resetFiles(), r.enableFormSubmit()
                    }), t.find(".js-uploadify-upload").bind(Fiverr.clickEventType, function (e) {
                        e.preventDefault(), t.find(".attach-files-regular").hide(), t.find(".attach-files").show(), r.resetFiles()
                    })
                }, c = function (e, t, n) {
                    if (e.length < 1) return;
                    n.find("em").text(e.val().length), e.val().length >= t ? n.css("color", "#FF4D4D") : n.removeAttr("style")
                }, h = function (t, n) {
                    if (t.length < 1) return;
                    var r = t.val().length,
                        i = n.find(".char-count-desc");
                    if (i.length <= 0 || r <= 0) {
                        i.text("");
                        return
                    }
                    r <= 15 ? (i.text(e.t("gig.edit.too_short")), i.css("color", "#FF4D4D")) : r <= 50 ? (i.text(e.t("gig.edit.just_perfect")), i.css("color", "#00B22D")) : r <= 60 ? (i.text(e.t("gig.edit.so_so")), i.css("color", "#FF8000")) : r > 60 ? (i.text(e.t("gig.edit.too_long")), i.css("color", "#FF4D4D")) : (i.text(), i.removeAttr("style"))
                }, p = function (e) {
                    if (!e) return;
                    e = _.isArray(e) ? e : [e];
                    var t = _.map(e, "fileId"),
                        n = [];
                    for (var i = 0; i <= t.length - 1; i++) {
                        if (r.files[t[i]]) var s = r.files[t[i]].id || null;
                        if (!s) continue;
                        n.push(s), delete r.files[t[i]], r.files.filesCounter--
                    }
                    n.length > 0 && (m(), d(n))
                }, d = function (t) {
                    if (!t) return;
                    t = _.isArray(t) ? t.toString() : t, e.ajax({
                        type: "DELETE",
                        url: "/message_attachments/destory_multi_assets",
                        dataType: "text",
                        data: {
                            ids: t
                        },
                        success: function (e) {}
                    })
                }, v = function (t) {
                    alert(e.t("upload.max_size_error", {
                        file_name: t
                    }))
                }, m = function () {
                    var e = r.files,
                        t = [];
                    for (var n in e) n != "filesCounter" && "id" in e[n] && t.push(e[n].id);
                    return r.form.find(".attachments-ids").val(t), t
                }, g = function () {
                    var t = r.form.attr("action"),
                        n = r.form.attr("method") || "post";
                    if (!t) return !1;
                    e.ajax({
                        url: t,
                        type: n,
                        data: r.form.serialize(),
                        dataType: a.ajaxReturnType,
                        success: function (e) {
                            a.resetAfterAjax && (r.reset(), r.resetFiles()), r.enableFormSubmit(), a.onAjaxSuccess(r, e)
                        },
                        complete: function (e) {
                            a.onAjaxComplete(r, e)
                        },
                        error: function (e) {
                            a.onAjaxError(r, e.response, e)
                        }
                    })
                };
            r.isValidInput = function (t) {
                var n = r.form.find("input:text[name*=" + t + "]");
                if (n.length > 0) {
                    var i, s = [];
                    return e.each(n, function (e, n) {
                        i = n.checkValue(t), i || s.push(n.name)
                    }), s
                }
                return !0
            }, r.activateTxtareasValidation = function (e, t, n) {
                return r.ta[t](function (t) {
                    r.ta.taCheckFor && r.ta.taCheckFor(e, n)
                }), r
            }, r.addCharsCounter = function (e, t, n) {
                n = n ? n : " CHARS MAX";
                var i = e.find("textarea"),
                    s = e.find(".char-count");
                return i.attr("maxlength", t), s.html("<em>0</em> / " + t + n), c(i, t, s), h(i, e), i.on({
                    keyup: function () {
                        c(i, t, s), h(i, e)
                    },
                    change: function () {
                        c(i, t, s), h(i, e)
                    }
                }), r
            }, r.addUploaders = function (n) {
                n = n || {};
                var u = n.container || "default",
                    a = 0;
                if (u == "default") s[u] = e(r.form.find(".inp-uploadify")[0]);
                else {
                    var f = r.form.find(u + " .inp-uploadify");
                    if (f.length < 1) return null;
                    s[u] = e(r.form.find(u + " .inp-uploadify")[0])
                }
                return n = {
                    queueID: s[u].attr("id") + "-queue",
                    uploadScript: n.uploadScript || "/message_attachments",
                    onSelectOnce: n.onSelectOnce || function () {},
                    auto: n.auto != null ? n.auto : !0,
                    onComplete: n.onComplete || function () {},
                    onSelect: n.onSelect || function () {},
                    onUpload: n.onUpload || function () {},
                    onError: n.onError || function () {},
                    onCancel: n.onCancel || function () {},
                    onRemove: n.onRemove || function () {},
                    onRemoveError: n.onRemoveError || function () {},
                    onAllComplete: n.onAllComplete || function () {},
                    overrideEvents: n.overrideEvents || [],
                    data: n.data || {},
                    queueLimit: n.queueLimit || 1,
                    simUploadLimit: n.simUploadLimit || 10,
                    multi: n.multi != null ? n.multi : !1,
                    removeCompleted: n.removeCompleted != null ? n.removeCompleted : !0,
                    sizeLimit: n.sizeLimit || 51200,
                    fileType: n.fileType || !1,
                    truncateLength: n.truncateLength || 15,
                    totalFilesSize: n.totalFilesSize,
                    onTotalFilesSize: n.onTotalFilesSize || function () {},
                    buttonClass: n.buttonClass || "btn-standard btn-attach-files",
                    buttonText: n.buttonText || e.t("uploadify.button_text"),
                    fileObjName: n.fileObjName || "message_attachment[asset]",
                    template: n.template || '<div id="${fileID}" class="uploadifive-queue-item cf">                                                                            <span class="cancel">                                                                                <a class="close" href="#">Cancel</a>                                                                            </span>                                                                            <span class="filename">${fileName}</span><span>(<kbd class="filesize">${fileSize}</kbd>)</span>                                                                            <div class="status-bar progress-status"><div class="progress-bar "></div></div>                                                                            <span class="fileinfo"></span>                                                                        </div>'
                }, r.form[0].authenticity_token && (n.data.authenticity_token = r.form[0].authenticity_token.value), n.data.form = r.form.serialize(), i == "uploadify" && (n.data.flash_upload = "true", s.cloneFileInput = t.find(".attach-files input.inp-uploadify").clone()), s[u][i]({
                    swf: "/assets/uploadify.swf",
                    uploadScript: n.uploadScript,
                    buttonClass: u + " " + n.buttonClass,
                    buttonText: n.buttonText,
                    queueID: n.queueID,
                    width: "auto",
                    height: "auto",
                    fileSizeLimit: n.sizeLimit,
                    fileType: n.fileType,
                    auto: n.auto,
                    multi: n.multi,
                    simUploadLimit: n.simUploadLimit,
                    fileObjName: n.fileObjName,
                    formData: n.data,
                    removeCompleted: n.removeCompleted,
                    truncateLength: n.truncateLength,
                    dnd: !1,
                    itemTemplate: n.template,
                    overrideEvents: n.overrideEvents,
                    onSelect: function (e) {
                        n.onSelectOnce(r)
                    },
                    onAddQueueItem: function (t) {
                        a = a <= 0 ? 1 : a + 1;
                        if (a > n.queueLimit) {
                            t.queueItem.addClass("error").find(".fileinfo").html(e.t("max_upload_error")), r.uploadifiveAction("cancel", t, u), o || r.enableFormSubmit();
                            return
                        }
                        n.onSelect(t, r)
                    },
                    onUpload: function (e) {
                        r.disableFormSubmit(), r.form.find(".uploadifive-button." + n.buttonClass.replace(" ", ".")).addClass("disabled"), o = !0, n.onUpload(r, e)
                    },
                    onCancel: function (e) {
                        var t = r.files[e.fileId],
                            i = t ? t.id : "";
                        t && p(e), a = a <= 0 ? 0 : a - 1, (r.files.filesCounter < n.queueLimit && !o || r.files.filesCounter == 0 && a == 0) && r.form.find(".uploadifive-button." + n.buttonClass.replace(" ", ".")).removeClass("disabled"), r.files.filesCounter == 0 && a == 0 && (r.enableFormSubmit(), o = !1), n.onCancel(t, i, r)
                    },
                    onError: function (t, i) {
                        switch (t) {
                        case "FILE_SIZE_LIMIT_EXCEEDED":
                        case "INVALID_FILE_NAME":
                            i && setTimeout(function () {
                                i.queueItem.fadeOut(function () {
                                    i.queueItem.remove()
                                })
                            }, 5e3);
                            break;
                        case "UPLOAD_LIMIT_EXCEEDED":
                            e("#" + n.queueID).find(".uploadifive-queue-item").not(".complete").remove()
                        }
                        o || r.enableFormSubmit(), a = a <= 0 ? 0 : a - 1, n.onError(t, r)
                    },
                    onUploadComplete: function (t, i) {
                        if (!i) return !1;
                        r.currentFilesSize += t.size, i = e.parseJSON(i), i.size = t.size, r.files[t.fileId] = i, r.files.filesCounter++, t.queueItem.find(".cancel").show(), t.queueItem.find(".status-bar").remove(), t.queueItem.find(".fileinfo").show(), n.onComplete(t, r)
                    },
                    onQueueComplete: function () {
                        t.find(".js-regular-upload").hide("fast"), m(), o = !1, document.pageScope.main != "manage_gigs" && r.enableFormSubmit(), r.files.filesCounter < 10 && r.form.find(".uploadifive-button." + n.buttonClass.replace(" ", ".")).removeClass("disabled"), n.onAllComplete(r)
                    },
                    onFallback: function () {
                        i == "uploadify" && confirm("please install flash player") && window.open("http://get.adobe.com/flashplayer/", "_blank")
                    }
                }), i == "uploadifive" ? t.find(".attach-files .uploadifive-button input.inp-uploadify").show().prependTo(t.find(".attach-files-regular .attach-inner")) : s.cloneFileInput.show().prependTo(t.find(".attach-files-regular .attach-inner")), r.form.find(".uploadifive-button").on(Fiverr.clickEventType, ".uploadifive-input", function (e) {
                    r.form.find(".uploadifive-button").hasClass("disabled") && e.preventDefault()
                }), r
            }, r.uploadifiveAction = function (t, n, r) {
                if (!t) return !1;
                if ( !! r) return s[r][i](t, n);
                e.each(s, function (e, r) {
                    r[i](t, n)
                })
            }, r.updateUploadifySetting = function (e, t, n) {
                if (!e || !t) return;
                n = n || "default", s[n][i]("updateSetting", e, t)
            }, r.disableFormSubmit = function () {
                r.form.find('*[type="submit"]').attr("disabled", "disabled").addClass("disabled"), u = !0
            }, r.enableFormSubmit = function () {
                r.form.find('*[type="submit"]').removeAttr("disabled").removeClass("disabled"), u = !1
            }, r.reset = function () {
                r.uploadifiveAction("clearQueue"), r.form.find(".js-uploadifyQueue").empty(), r.form.find(".attach-files-regular").hide(), r.form.find(".attach-files").show(), r.form.find(".js-regular-upload").show(), r.form.find(".attachments-ids").val(""), r.resetForm()
            }, r.resetForm = function () {
                r.form[0].reset()
            }, r.resetFiles = function () {
                r.files = {
                    filesCounter: 0
                }, r.form.find(".js-uploadifyQueue").empty();
                var e = t.find(".attach-files-regular input:file").wrap("<form>").closest("form").get(0);
                e && e.reset(), t.find(".attach-files-regular input:file").unwrap(), m()
            }, r.updateOption = function (e, t) {
                return !e || !t || !n[e] ? !1 : (n[e] = t, r)
            }, r.scrollToFirstError = function () {
                var t = e(".with-error:visible").first();
                t.length > 0 && e(document).scrollTo(t, 800).scrollTo("-=87px", 100)
            }, f()
        },
        formTextAreaObj: function (t) {
            var n = t;
            n.taIsValid = !0, n.taErrorEl = e('<div class="error-container"><p class="msg-error"></p></div>'), n.taCheckTypes = {
                at: {
                    regEx: /@|\[at\]|\(at\)|\{at\}|\-at\-|\+at\+|\[dot\]|\(dot\)|\{dot\}|\-dot\-|\+dot\+/,
                    message: e.t("message.communication_warning")
                },
                connect: {
                    regEx: /email|skype.me|skype|msn|messanger|contact.me.at|send.to.my/i,
                    message: e.t("message.communication_warning")
                },
                payment: {
                    regEx: /paypal|alertpay|money|pay/i,
                    message: e.t("message.direct_payment_warning")
                }
            }, n.taCheckFor = function (e, t) {
                if (e == null || e == "undefined" || e == "" || !e) return !1;
                t || (t = {}), t = {
                    success: t.onValidSuccess || function () {},
                    failed: t.onValidFailed || function () {}
                };
                var r = e.split(",");
                n.taClearErrors(), n.taIsValid = !0;
                for (var i in r)!n.taCheckTypes[e[i]] && n.taCheckTypes[r[i]].regEx.test(n.val()) && (n.taShowError(r[i]), n.taIsValid = !1, t.failed(n, r[i]));
                n.taIsValid && t.success(n)
            }, n.taShowError = function (t) {
                thatObj = e(n);
                var r = n.taCheckTypes[t] ? n.taCheckTypes[t].message : t;
                thatObj.prev() != n.taErrorEl && thatObj.prev(".msg-error").length < 1 ? (n.taErrorEl.insertAfter(n), n.taErrorEl.find("p")[0].innerHTML = r, n.taErrorEl.show(), n.addClass("with-error"), n.closest(".write-wrap").length > 0 && n.closest(".write-wrap").addClass("with-error")) : (n.taErrorEl.find("p")[0].innerHTML.match(r) || (n.taErrorEl.find("p")[0].innerHTML += "<br>" + r), thatObj.prev(".error-container").show())
            }, n.taClearErrors = function () {
                n.taErrorEl.detach(), n.taErrorEl.find("p")[0].innerHTML = "", n.closest(".write-wrap").length > 0 && n.closest(".write-wrap").removeClass("with-error")
            }
        },
        formGeneralObject: function (t) {
            var n = t;
            n.geIsValid = !0, n.geErrorEl = e('<div class="error-container"><p class="msg-error"></p></div>'), n.geShowError = function (t) {
                thatObj = e(n), thatObj.prev() != n.geErrorEl && thatObj.prev(".msg-error").length < 1 ? (n.geErrorEl.insertAfter(n), n.geErrorEl.find("p")[0].innerHTML = t, n.geErrorEl.show(), n.addClass("with-error"), n.closest(".general-form-field-wrap").length > 0 && n.closest(".general-form-field-wrap").addClass("with-error")) : (n.geErrorEl.find("p")[0].innerHTML.match(t) || (n.geErrorEl.find("p")[0].innerHTML += "<br>" + t), thatObj.prev(".error-container").show())
            }, n.geClearErrors = function () {
                n.geErrorEl.detach(), n.geErrorEl.find("p")[0].innerHTML = "", n.removeClass("with-error"), n.closest(".general-form-field-wrap").length > 0 && n.closest(".general-form-field-wrap").removeClass("with-error")
            }
        },
        newConvMessage: function () {
            e(".conv-write textarea").focus(function () {
                e(this).closest(".write-wrap").addClass("inside")
            }).blur(function () {
                e(this).closest(".write-wrap").removeClass("inside")
            });
            var n = e("#new_message_v2.msg-form");
            if (n.length > 0) {
                n.css("display") != "none" && n.css("opacity", "1");
                var r = null;
                t.forms.msgForm = (new t.formHandler(n, {
                    onInit: function (e) {
                        e.ta = n.find("#message_body"), new t.formTextAreaObj(e.ta)
                    },
                    onSubmit: function (t, r) {
                        r.isValid = !1, r.disableFormSubmit(), e.trim(r.ta.val()).length < 5 ? (r.ta.taShowError(e.t("setforms.errors.message_too_short")), r.enableFormSubmit()) : (n.closest(".db-content-conversation-new").length > 0 && n.closest(".db-content-conversation-new").removeClass("db-content-conversation-new"), r.ta.taClearErrors(), r.isValid = !0)
                    },
                    ajaxSubmit: !0,
                    onAjaxSuccess: function (e, t) {
                        e.form.hasClass("reqs_submission") ? window.location.reload() : (e.form.before(t), n.find(".write-row").removeClass("with-files"))
                    },
                    onAjaxError: function () {
                        window.location.reload()
                    }
                })).activateTxtareasValidation("at,connect,payment", "keyup").addCharsCounter(e("#new_message_v2.msg-form"), 1200).addUploaders({
                    multi: !0,
                    queueLimit: 10,
                    simUploadLimit: 10,
                    sizeLimit: 30720,
                    totalFilesSize: 30720,
                    removeCompleted: !1,
                    buttonClass: "btn-standard btn-attach-files",
                    buttonText: e.t("uploadify.button_text"),
                    onSelect: function (e, t) {
                        n.find(".write-row").addClass("with-files"), r || (r = e)
                    },
                    onSelectOnce: function (e) {},
                    onComplete: function (e, t) {},
                    onAllComplete: function (e, t) {},
                    onCancel: function (t, r, i) {
                        setTimeout(function () {
                            e(".js-uploadifyQueue .uploadifive-queue-item").length < 1 && n.find(".write-row").removeClass("with-files")
                        }, 1e3)
                    },
                    onError: function (e, t) {
                        t.files.filesCounter < 1 && setTimeout(function () {
                            n.find(".write-row").removeClass("with-files"), t.resetFiles()
                        }, 5500)
                    }
                })
            }
        },
        newDeliveryMessage: function () {
            if (e("#new_delivery_v2.msg-form").length > 0) {
                var n = e("#new_delivery_v2.msg-form");
                t.forms.delForm = (new t.formHandler(n, {
                    onInit: function (r) {
                        r.ta = n.find("#msg_body"), new t.formTextAreaObj(r.ta), Fiverr.initSimpleSlider(e(".ws-gallery"), function () {
                            o()
                        })
                    },
                    onSubmit: function (t, n) {
                        n.disableFormSubmit();
                        if (e.trim(n.ta.val()).length < 5) return n.ta.taShowError(e.t("setforms.errors.message_too_short")), n.enableFormSubmit(), t.preventDefault(), !1;
                        n.files.filesCounter < 1 && e("input:file#delivery-fileInput")[0] && (n.files.filesCounter = e("input:file#delivery-fileInput")[0].files.length), n.files.filesCounter < 1 && (confirm(e.t("attachment_required_for_delivery")) || (t.preventDefault(), n.enableFormSubmit()))
                    },
                    ajaxSubmit: !1,
                    onAjaxSuccess: function (e, t) {},
                    onAjaxError: function () {}
                })).activateTxtareasValidation("at,connect,payment", "keyup").addCharsCounter(e("#new_delivery_v2.msg-form"), 1200).addUploaders({
                    multi: !0,
                    queueLimit: 10,
                    simUploadLimit: 10,
                    totalFilesSize: 153600,
                    sizeLimit: 102400,
                    removeCompleted: !1,
                    buttonClass: "btn-standard-lrg btn-attach-files",
                    buttonText: e.t("uploadify.button_upload_work"),
                    data: {
                        delivery: !0
                    },
                    onSelect: function () {},
                    onSelectOnce: function (e) {},
                    onComplete: function (t, n) {
                        var s = n.files[t.fileId];
                        s.type == "image" ? r(s) : s.type == "video" && i(s, t), n.files.filesCounter > 1 && n.form.find(".ws-gallery-nav-outer").show(), e("#message_preview").val(s.id)
                    },
                    onAllComplete: function (e, t) {},
                    onCancel: function (t, n, r) {
                        if (t && (t.type == "image" || t.type == "video")) {
                            var i = e(".ws-coll-slider"),
                                s = i.find("#slide-" + n),
                                o = e(".ws-gallery-box .ws-gallery-nav-outer"),
                                u = e("#message_preview"),
                                a = null;
                            if (u.val() == n.toString()) {
                                if (s.next().length == 1) a = s.next().data("id");
                                else if (s.prev().length == 1) {
                                    var f = s.prev();
                                    a = f.data("id"), o.find(".nav-prev").click(), o.find(".nav-next").addClass("inactive"), f.prev().length < 1 && o.find(".nav-prev").addClass("inactive")
                                } else e(".ws-actions").hide();
                                u.val(u.val().replace(n, a || ""))
                            } else s.position().left <= Math.abs(i.position().left) && i.css("left", i.position().left + s.outerWidth());
                            s.remove()
                        }
                        r.files.filesCounter < 2 && r.form.find(".ws-gallery-nav-outer").hide()
                    },
                    onError: function (e, t) {}
                })
            }
            var r = function (t) {
                var n = e('<div class="js-slide ws-slide" id="slide-' + t.id + '" data-id="' + t.id + '"><div class="js-img-holder ws-img-holder"><image src="' + t.url + '"/>'),
                    r = e(".ws-gallery");
                r.find(".ws-coll-slider").append(n);
                if (r.find(".js-slide").length > 1) {
                    var i = parseInt(r.find(".js-slide").width());
                    r.find(".ws-coll-slider").css("left", "-=" + i)
                } else e(".ws-actions").show();
                s()
            }, i = function (t) {
                    var n = e('<div class="js-slide ws-slide video-preview" id="slide-' + t.id + '" data-id="' + t.id + '">' + '<iframe width="160" height="110" src="' + t.url + '"style="display:none;"></iframe>' + '<div class="vid-processing">' + '<div class="vid-icon"></div>' + '<div class="vid-name" title="' + t.name + '">' + t.name + "</div>" + '<span class="vid-processing-notice">' + e.t("live_portfolio.video_ready_for_delivery") + "</span>" + "</div>" + "</div>"),
                        r = e(".ws-gallery");
                    r.find(".ws-coll-slider").append(n);
                    if (r.find(".js-slide").length > 1) {
                        var i = parseInt(r.find(".js-slide").width());
                        r.find(".ws-coll-slider").css("left", "-=" + i)
                    } else e(".ws-actions").show();
                    s(), Fiverr.checkVideoReady(t.video_id, t.size, function (e) {
                        n.find(".vid-processing").remove(), n.find("iframe").removeAttr("style").attr("src", e.url)
                    })
                }, s = function () {
                    var t = e(".ws-gallery"),
                        n = t.find(".js-slide").length;
                    n < 2 ? t.find(".js-gallery-nav").addClass("inactive") : t.find(".js-gallery-nav.nav-prev").removeClass("inactive")
                }, o = function () {
                    var t = e(".ws-gallery"),
                        n = parseInt(t.find(".ws-coll-slider").css("left")),
                        r = parseInt(t.find(".js-slide").width()),
                        i = Math.abs(n) / r,
                        s = e(".ws-gallery .ws-coll-slider").find(".js-slide:eq(" + i + ")").data("id");
                    e("#message_preview").val(s)
                }
        },
        newResolutionMessage: function () {
            if (e("#new_resolution_v2.msg-form").length > 0) {
                var n = e("#new_resolution_v2.msg-form");
                t.forms.msgForm = (new t.formHandler(n, {
                    onInit: function (e) {
                        e.ta = n.find("#message_body"), new t.formTextAreaObj(e.ta)
                    },
                    onSubmit: function (t, n) {
                        n.isValid = !1, n.disableFormSubmit(), e.trim(n.ta.val()).length < 5 ? (n.ta.taShowError(e.t("setforms.errors.message_too_short")), n.enableFormSubmit()) : n.isValid = !0
                    },
                    ajaxSubmit: !0,
                    onAjaxSuccess: function (e, t) {
                        window.location.reload()
                    },
                    onAjaxError: function () {
                        window.location.reload()
                    }
                })).activateTxtareasValidation("at,connect,payment", "keyup").addUploaders({
                    multi: !0,
                    queueLimit: 10,
                    simUploadLimit: 10,
                    removeCompleted: !1,
                    totalFilesSize: 52428800,
                    buttonClass: "btn-standard btn-attach-files",
                    buttonText: e.t("uploadify.button_text"),
                    onSelect: function () {
                        n.find(".write-row").addClass("with-files")
                    },
                    onSelectOnce: function (e) {},
                    onComplete: function (e, t) {},
                    onAllComplete: function (e, t) {},
                    onCancel: function (e, t, r) {
                        r.files.filesCounter < 1 && setTimeout(function () {
                            n.find(".write-row").removeClass("with-files")
                        }, 525)
                    },
                    onError: function () {}
                })
            }
            if (e("#new_resolution_options_v2.msg-form").length > 0) {
                var n = e("#new_resolution_options_v2.msg-form");
                t.forms.msgForm = (new t.formHandler(n, {
                    onInit: function (e) {
                        e.ta = n.find("#message_body"), new t.formTextAreaObj(e.ta)
                    },
                    onSubmit: function (t, n) {
                        n.isValid = !1, n.disableFormSubmit(), e.trim(n.ta.val()).length < 5 ? (n.ta.taShowError(e.t("setforms.errors.message_too_short")), n.enableFormSubmit()) : n.isValid = !0
                    },
                    ajaxSubmit: !0,
                    onAjaxSuccess: function (e, t) {
                        window.location.reload()
                    },
                    onAjaxError: function () {
                        window.location.reload()
                    }
                })).activateTxtareasValidation("at,connect,payment", "keyup")
            }
        },
        newSupportMessage: function () {
            if (e("#new_zendesk_v2.msg-form").length > 0) {
                var n = e("#new_zendesk_v2.msg-form");
                t.forms.msgForm = (new t.formHandler(n, {
                    onInit: function (e) {
                        e.tf = n.find("#subject"), e.ta = n.find("#body"), new t.formTextAreaObj(e.ta)
                    },
                    onSubmit: function (t, n) {
                        n.isValid = !1, n.disableFormSubmit(), e.trim(n.ta.val()).length < 5 || e.trim(n.tf.val()).length < 5 ? (n.ta.taShowError(e.t("setforms.errors.message_too_short")), n.enableFormSubmit()) : n.isValid = !0
                    },
                    ajaxSubmit: !0,
                    onAjaxSuccess: function (e, t) {
                        window.location.reload()
                    },
                    onAjaxError: function () {
                        window.location.reload()
                    }
                })).activateTxtareasValidation("at,connect,payment", "keyup")
            }
        },
        newFeedback: function () {
            if (e("#new_support_ticket.msg-form").length > 0) {
                var n = e("#new_support_ticket.msg-form");
                t.forms.msgForm = (new t.formHandler(n, {
                    onInit: function (e) {
                        e.ta = n.find("#body"), new t.formTextAreaObj(e.ta), Fiverr.initfakeDropdownReal(".js-dropdown-feedback-subject")
                    },
                    onSubmit: function (t, n) {
                        n.isValid = !1, n.disableFormSubmit(), e.trim(n.ta.val()).length < 5 ? (n.ta.taShowError(e.t("setforms.errors.message_too_short")), n.enableFormSubmit()) : n.isValid = !0
                    },
                    ajaxSubmit: !0,
                    onAjaxSuccess: function (e, t) {
                        window.location.reload()
                    },
                    onAjaxError: function () {
                        window.location.reload()
                    }
                })).addCharsCounter(e("#new_support_ticket.msg-form"), 450)
            }
        },
        newJoinForm: function () {
            var t = this;
            t.form = e("#join_form"), t.inputsToCheck = t.form.find('input[type="text"],input[type="password"],input[type="checkbox"]'), t.usernameStatus = e(t.form.find("#username-status")), t.usernameStatusText = e(t.form.find(".username-validation")), t.usernameTimeout = null, t.usernameActive = !1, t.submitButton = t.form.find("#join-btn"), t.errors = {
                container: e(t.form.find(".form-errors")),
                header: e("<h2><span></span>" + e.t("joinForm_errors_header") + "</h2>"),
                email: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_email") + "</p></div>"),
                username: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_username") + "</p></div>"),
                userNotAllowed: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_userNotAllowed") + "</p></div>"),
                userTaken: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_userTaken") + "</p></div>"),
                password: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_password") + "</p></div>"),
                terms: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_terms") + "</p></div>"),
                spam_answer: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_capcha") + "</p></div>")
            };
            var n = function () {
                t.setEvents(), t.inputsToCheck.length > 0 && t.inputsToCheck.filter('input[name*="username"]').val().length > 0 && (t.usernameActive = !0, t.inputsToCheck.filter('input[name*="username"]').keyup()), e(".js-fb-form-toggle").on(Fiverr.clickEventType, function (t) {
                    t.preventDefault(), e(".js-fb-form-container").toggleClass("hidden")
                })
            };
            t.fullReset = function () {
                e(t.form)[0].reset(), t.hideErrors(), t.usernameStatus.removeAttr("class"), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress")
            }, t.setEvents = function () {
                t.form.submit(function (n) {
                    t.submitButton.attr("disabled", "disabled"), t.submitButton.addClass("in-progress"), t.hideErrors();
                    var r = t.checkForm();
                    if (r) t.showErrors(r), t.form.find('input[type="text"]')[0].focus(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress"), n.preventDefault();
                    else {
                        n.preventDefault();
                        var i = t.form.attr("action"),
                            s = t.form.attr("method") || "post",
                            r = !1;
                        e.ajax({
                            url: i,
                            type: s,
                            data: t.form.serialize(),
                            dataType: "json",
                            success: function (n) {
                                if (n.status == "failure") {
                                    if (n.redirect_to_join_page)
                                        if (document.pageScope.main != "users" || document.pageScope.sub != "new") {
                                            document.location.href = "/join";
                                            return
                                        }
                                    e.each(n.errors, function (n, r) {
                                        var i = e('<div class="error-container"><p class="msg-error">' + r[1] + "</p></div>");
                                        e(t.form.find('input[name*="' + r[0] + '"]')).addClass("with-error").closest(".input-wrap").append(i.css({
                                            display: "block"
                                        }))
                                    }), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress")
                                } else n.redirect_url ? document.location.href = n.redirect_url : document.pageScope.main == "users" && document.pageScope.sub == "new" ? document.location.href = "/" : location.reload()
                            }
                        })
                    }
                }), t.inputsToCheck.filter('input[name*="username"]').keyup(function () {
                    if (t.usernameActive) {
                        var n = e(this);
                        t.usernameStatus.removeAttr("class").addClass("username-status-loading"), clearTimeout(t.usernameTimeout), t.usernameTimeout = setTimeout(function () {
                            t.usernameAvailable(n)
                        }, 1e3)
                    } else t.usernameActive = !0
                }), t.usernameStatusText.bind(Fiverr.clickEventType, function (t) {
                    e(this).parent().find('input[type="text"]').focus()
                }), t.submitButton.bind(Fiverr.clickEventType, function (e) {
                    t.submitButton.attr("disabled", "disabled"), t.submitButton.addClass("in-progress");
                    var n = t.form.find('input[name*="email"]').val();
                    n != "" ? (t.suspiciousEmail(n), e.preventDefault(), e.stopPropagation()) : t.form.submit()
                })
            }, t.checkForm = function () {
                var n = !1;
                return e.each(t.inputsToCheck, function (r, i) {
                    e(i).attr("name").match("email") ? i.checkValue("email") || (e(i).addClass("with-error"), n += ",email") : e(i).attr("name").match("username") ? (i.checkValue("newUser") || (e(i).addClass("with-error"), n += ",username"), e(i).hasClass("already_taken") && (e(i).addClass("with-error"), n += ",userTaken"), e(i).hasClass("not_allowed") && (e(i).addClass("with-error"), n += ",userNotAllowed")) : e(i).attr("name").match("password") ? i.checkValue("password") || (e(i).addClass("with-error"), n += ",password") : e(i).attr("name").match("terms_of_use") ? e(i).prop("checked") || (e(i).addClass("with-error"), n += ",terms") : e(i).attr("name").match("captcha_solution") ? t.form.find(".form-short-captcha").css("display") == "block" && e(i).val() == "" && (e(i).addClass("with-error"), n += ",spam_answer") : e(i).attr("name").match("spam_answer") && t.form.find(".form-long-captcha").css("display") == "block" && e(i).val() == "" && (e(i).addClass("with-error"), n += ",spam_answer")
                }), n ? n.replace("false,", "").split(",") : n
            }, t.usernameAvailable = function (n) {
                n.removeAttr("class");
                if (!n[0].checkValue("newUser")) {
                    t.usernameStatus.removeAttr("class").addClass("username-status-error"), n.addClass("with-error");
                    if (n.val().length < 6) {
                        t.showAjaxMsg(e.t("username_available.error.is_too_short"));
                        return
                    }
                    if (n.val().length > 15) {
                        t.showAjaxMsg(e.t("username_available.error.is_too_long"));
                        return
                    }
                    n.addClass("not_allowed"), t.showAjaxMsg(e.t("username_available.error.not_allowed"));
                    return
                }
                t.usernameStatus.removeAttr("class").addClass("username-status-loading"), e.ajax({
                    type: "post",
                    dataType: "text",
                    url: "/checkuser",
                    data: "username=" + n.val(),
                    success: function (r) {
                        n.removeAttr("class");
                        switch (r) {
                        case "ok":
                            n.addClass("ok").siblings(".error-container").remove(), t.usernameStatusText.hide(), t.usernameStatus.removeAttr("class").addClass("username-status-ok");
                            break;
                        case "not allowed":
                            n.addClass("not_allowed with-error"), t.showAjaxMsg(e.t("joinForm_errors_userNotAllowed")), t.usernameStatus.removeAttr("class").addClass("username-status-error");
                            break;
                        case "is already taken":
                            n.addClass("already_taken with-error"), t.showAjaxMsg(e.t("joinForm_errors_userTaken")), t.usernameStatus.removeAttr("class").addClass("username-status-error")
                        }
                    }
                })
            }, t.suspiciousEmail = function (n) {
                e.ajax({
                    type: "post",
                    dataType: "text",
                    url: "/check_suspicious_email",
                    data: "email=" + n,
                    success: function (e) {
                        switch (e) {
                        case "ok":
                            t.form.submit();
                            break;
                        case "not ok":
                            t.form.find(".form-long-captcha").show(), t.form.find(".form-short-captcha").hide()
                        }
                    }
                })
            }, t.showErrors = function (n) {
                e.each(n, function (e, n) {
                    t.inputsToCheck.filter('[name*="' + n + '"]').closest(".input-wrap").append(t.errors[n].css({
                        display: "block"
                    }))
                })
            }, t.hideErrors = function () {
                t.inputsToCheck.removeClass("with-error"), t.errors.container.empty(), t.form.find(".error-container").remove(), t.usernameStatusText.hide()
            }, t.showAjaxMsg = function (e) {
                t.usernameStatusText.html(e), t.usernameStatusText.show()
            }, n()
        },
        initPwdResetForm: function () {
            var n = e("#reset-password-form"),
                r = n.find(".form-errors"),
                i = "";
            t.forms.resetPwdForm = new t.formHandler(n, {
                onInit: function (e) {
                    e.pwd1 = n.find('input[name="user[password]"]'), e.pwd2 = n.find('input[name="user[password_confirmation]"]')
                },
                onSubmit: function (t, n) {
                    n.isValid = !1, n.disableFormSubmit(), n.pwd1.val().length < 6 || n.pwd2.val().length < 6 ? (i = "<li>" + e.t("resetPwdForm_errors_password") + "</li>", n.enableFormSubmit()) : n.pwd1.val() != n.pwd2.val() ? (i = "<li>" + e.t("resetPwdForm_errors_not_matching") + "</li>", n.enableFormSubmit()) : n.isValid = !0;
                    if (!n.isValid) {
                        r.find("ul").remove(), r.removeClass("hidden").append("<ul>" + i + "</ul>"), t.preventDefault();
                        return
                    }
                },
                ajaxSubmit: !1
            })
        },
        initPwdChangeForm: function () {
            var n = e("#change-password-form"),
                r = n.find(".form-errors"),
                i = "";
            t.forms.resetPwdForm = new t.formHandler(n, {
                onInit: function (e) {
                    e.currPwd = n.find('input[name="user[current_password]"]'), e.pwd1 = n.find('input[name="user[password]"]'), e.pwd2 = n.find('input[name="user[password_confirmation]"]')
                },
                onSubmit: function (t, s) {
                    s.isValid = !1, s.disableFormSubmit(), s.currPwd.length > 0 && s.currPwd.val().length < 6 || s.pwd1.val().length < 6 || s.pwd2.val().length < 6 ? (i = "<li>" + e.t("resetPwdForm_errors_password") + "</li>", n.find('input[type="submit"]').removeClass("in-progress"), s.enableFormSubmit()) : s.pwd1.val() != s.pwd2.val() ? (i = "<li>" + e.t("resetPwdForm_errors_not_matching") + "</li>", n.find('input[type="submit"]').removeClass("in-progress"), s.enableFormSubmit()) : s.isValid = !0;
                    if (!s.isValid) {
                        r.find("ul").remove(), r.removeClass("hidden").append("<ul>" + i + "</ul>"), t.preventDefault();
                        return
                    }
                },
                ajaxSubmit: !1
            })
        },
        newEntryForm: function () {
            var t = this;
            t.form = e("#session_form"), t.inputsToCheck = t.form.find('input[type="text"],input[type="password"]'), t.submitButton = t.form.find("#login-btn"), t.errors = {
                container: e(t.form.find(".form-errors")),
                header: e("<h2>" + e.t("loginForm_errors_header") + "</h2>"),
                login: e('<div class="error-container"><p class="msg-error">' + e.t("loginForm_errors_username") + "</p></div>"),
                password: e('<div class="error-container"><p class="msg-error">' + e.t("loginForm_errors_password") + "</p></div>"),
                username_pw: e("<li>" + e.t("loginForm_errors_username_or_pw") + "</li>"),
                spam_answer: e('<div class="error-container"><p class="msg-error">' + e.t("joinForm_errors_capcha") + "</p></div>")
            };
            var n = function () {
                t.setEvents(), e("#session_form").find(".js-btn-forgotpw").bind(Fiverr.clickEventType, function (n) {
                    n.preventDefault(), e(".popup-content-login").hide(), e(".popup-content-forgotpw").show(), t.hideErrors()
                })
            };
            t.fullReset = function () {
                e(t.form)[0].reset(), t.hideErrors(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress"), e(".popup-content-login").show(), e(".popup-content-forgotpw").hide()
            }, t.setEvents = function () {
                t.form.submit(function (n) {
                    t.submitButton.attr("disabled", "disabled"), t.submitButton.addClass("in-progress"), t.hideErrors();
                    var r = t.checkForm();
                    if (r) t.showErrors(r), t.form.find('input[type="text"]')[0].focus(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress"), n.preventDefault();
                    else {
                        n.preventDefault();
                        var i = t.form.attr("action"),
                            s = t.form.attr("method") || "post",
                            r = !1;
                        e.ajax({
                            url: i,
                            type: s,
                            data: t.form.serialize(),
                            success: function (n) {
                                if (n.status == "failure" || n.status == "redirect" || n.status == "captcha_redirect") {
                                    if (n.status == "redirect") {
                                        if (n.url) {
                                            location.href = n.url;
                                            return
                                        }
                                        location.reload();
                                        return
                                    }
                                    if (n.status == "captcha_redirect")
                                        if (document.pageScope.main != "user_sessions" || document.pageScope.sub != "new") {
                                            if (n.url) {
                                                location.href = n.url;
                                                return
                                            }
                                            location.reload();
                                            return
                                        }
                                    e.each(t.inputsToCheck, function (t, n) {
                                        e(n).attr("name").match("login") ? e(n).addClass("with-error") : e(n).attr("name").match("password") && e(n).addClass("with-error")
                                    }), n.errors ? e.each(n.errors, function (n, r) {
                                        var i = e('<div class="error-container"><p class="msg-error">' + r[1] + "</p></div>");
                                        t.inputsToCheck.filter('[name*="' + r[0] + '"]').closest(".input-wrap").append(i.css({
                                            display: "block"
                                        }))
                                    }) : (r = ["username_pw"], t.showErrors(r)), t.form.find('input[type="text"]')[0].focus(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress")
                                } else n.redirect_url ? document.location.href = n.redirect_url : document.pageScope.main == "user_sessions" && document.pageScope.sub == "new" ? document.location.href = "/" : location.reload()
                            }
                        })
                    }
                })
            }, t.checkForm = function () {
                var n = !1;
                return e.each(t.inputsToCheck, function (r, i) {
                    e(i).attr("name").match("login") ? i.checkValue("existUser") || (e(i).addClass("with-error"), n += ",login") : e(i).attr("name").match("password") ? i.checkValue("password") || (e(i).addClass("with-error"), n += ",password") : e(i).attr("name").match("spam_answer") && t.form.find(".form-long-captcha").css("display") == "block" && e(i).val() == "" && (e(i).addClass("with-error"), n += ",spam_answer")
                }), n ? n.replace("false,", "").split(",") : n
            }, t.showErrors = function (n) {
                e.each(n, function (e, n) {
                    t.inputsToCheck.filter('[name*="' + n + '"]').parent().append(t.errors[n].css({
                        display: "block"
                    }))
                })
            }, t.hideErrors = function () {
                t.inputsToCheck.removeClass("with-error"), t.form.find(".error-container").remove(), t.errors.container.empty()
            }, n()
        },
        newForgotPwForm: function () {
            var t = this;
            t.form = e("#forgot_password_form"), t.inputsToCheck = t.form.find('input[type="text"]'), t.submitButton = t.form.find("#forgotpw-btn"), t.errors = {
                container: e(t.form.find(".form-errors")),
                email: e('<div class="error-container"><p class="msg-error">' + e.t("loginForm_errors_email") + "</p></div>")
            };
            var n = function () {
                t.setEvents(), e("#forgot_password_form").find(".js-btn-signin").bind(Fiverr.clickEventType, function (n) {
                    n.preventDefault(), e(".popup-content-login").show(), e(".popup-content-forgotpw").hide(), t.hideErrors()
                })
            };
            t.fullReset = function () {
                e(t.form)[0].reset(), t.hideErrors(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress")
            }, t.setEvents = function () {
                t.form.submit(function (e) {
                    t.submitButton.attr("disabled", "disabled"), t.submitButton.addClass("in-progress"), t.hideErrors();
                    var n = t.checkForm();
                    if (n) return t.showErrors(n), t.form.find('input[type="text"]')[0].focus(), t.submitButton.removeAttr("disabled"), t.submitButton.removeClass("in-progress"), !1
                })
            }, t.checkForm = function () {
                var n = !1;
                return e.each(t.inputsToCheck, function (t, r) {
                    e(r).attr("name").match("email") && (r.checkValue("email") || (e(r).addClass("with-error"), n += ",email"))
                }), n ? n.replace("false,", "").split(",") : n
            }, t.showErrors = function (n) {
                e.each(n, function (e, n) {
                    t.inputsToCheck.filter('[name*="' + n + '"]').parent().append(t.errors[n].css({
                        display: "block"
                    }))
                })
            }, t.hideErrors = function () {
                t.inputsToCheck.removeClass("with-error"), t.form.find(".error-container").remove(), t.errors.container.empty()
            }, n()
        },
        setGigShippingForm: function () {
            t.forms.orderForm = new t.formHandler(e(".order-form"), {
                onSubmit: function (t, n) {
                    n.form.find(e('[name="shipping_option"]:checked')).length < 1 && Fiverr.toBoolean(n.form[0].is_shippable.value) ? (t.preventDefault(), e(".popup-gig-shipping p").addClass("error")) : e(".popup-gig-shipping p").removeClass("error")
                }
            })
        },
        initEmptySearchResults: function (n) {
            if (!n) return;
            e.ajax({
                type: "get",
                url: "/manage_requests/gig_request_form.js",
                dataType: "json",
                success: function (e) {
                    t.bindEmptySearchResultsGigRequestForm(n, e.inlineData), Fiverr.initDotDot(n)
                }
            })
        },
        bindEmptySearchResultsGigRequestForm: function (n, r) {
            if (!r || !n) return;
            var i = e(n);
            t.emptySearchResultsGigRequestFormTemplate(i, r);
            var s = i.find("form");
            if (s.length < 1) return;
            Fiverr.initfakeDropdown(i), t.forms.manageGigRequest = new t.formHandler(s, {
                onInit: function (n) {
                    n.ta = s.find('textarea[name="request[message]"]'), n.cat = s.find('input[name="request[category]"]'), n.subcat = s.find('input[name="request[sub_category]"]'), new t.formGeneralObject(n.ta), new t.formGeneralObject(n.cat), n.ta.on("focus", function () {
                        s.attr("action") ? e(".categories-wrap").addClass("active") : e(".js-open-popup-login").trigger(Fiverr.clickEventType)
                    });
                    var r = e(".text-before-title");
                    n.ta.css({
                        textIndent: r.innerWidth()
                    }), r.on(Fiverr.clickEventType, function () {
                        n.ta.focus()
                    }), n.ta.on("scroll", function () {
                        r.css({
                            top: 7 - e(this).scrollTop()
                        })
                    })
                },
                onSubmit: function (t, n) {
                    if (!s.attr("action")) {
                        e(".js-open-popup-login").trigger(Fiverr.clickEventType), t.preventDefault();
                        return
                    }
                    n.disableFormSubmit();
                    var r = e.t("setforms.errors.describe_and_select"),
                        i = 0;
                    n.ta.val().length < 5 ? (n.ta.geShowError(r), i++) : n.ta.geClearErrors(r), n.cat.val().length < 1 || n.subcat.val().length < 1 ? (n.ta.geShowError(r), n.cat.geShowError(""), i++) : n.cat.geClearErrors();
                    if (i > 0) return n.enableFormSubmit(), t.preventDefault(), !1
                }
            }), i.on(Fiverr.clickEventType, ".cat .dropdown-menu a", function (t) {
                t.preventDefault(), i.find(".cat .dropdown-toggle").text(e(this).text());
                var n = FiverrDashboard.getSubcategories(this.href);
                n && n != "" ? (i.find(".subcat").html(n), i.find(".subcat .dropdown-toggle").attr("data-autowidth", "true"), i.find(".subcat label").remove(), Fiverr.initfakeDropdown(i.find(".subcat"))) : i.find(".subcat").html(""), i.find('input[name="request[sub_category]"]').val(""), i.find('input[name="request[category]"]').val(this.getAttribute("data-cat"))
            }), i.on("click", ".subcat .dropdown-menu a", function (t) {
                t.preventDefault(), i.find(".subcat .dropdown-toggle").text(e(this).text()), i.find('input[name="request[sub_category]"]').val(this.getAttribute("data-sub"))
            })
        },
        emptySearchResultsGigRequestFormTemplate: function (t, n) {
            if (!t) return;
            e(t).addClass("span7 span-centered mp-empty-search-results");
            var r = '<h3><%=data.search_page_title%></h3><p class="requests-desc"><%=data.search_page_desc%></p><form method="post" action="<%= data.action %>" accept-charset="UTF-8" class="cf"><input type="hidden" name="authenticity_token" value="<%= document.AUTH_TOKEN  %>"><fieldset><div class="request-title-wrap"><span class="text-before-title"><%=data.placeholder_short%></span><textarea name="request[message]" rows="4" placeholder="<%= data.placeholder %>" maxlength="120"></textarea></div><div class="categories-wrap general-form-field-wrap"><label for="fake_dropdown"><%=data.dropdown_label%></label><div class="cat"><%= Templates.fakeDropdown(data.dropdown) %></div><div class="subcat"></div><input type="hidden" name="request[category]"><input type="hidden" name="request[sub_category]"><input type="hidden" name="request[from_empty_search_page]" value="true"></div><input type="submit" class="btn-standard btn-green" value="<%= data.button %>"></fieldset></form>';
            t.prepend(_.template(r, {
                data: n
            }))
        },
        showRecentGigRequestsList: function (t) {
            var n = '<h4>Recently Requested<% if(data.requests_url) { %><% if(data.requests_url) {%><%=data.requests_url%><% } %><% } %></h4><ul class="recent-requests"><% _.each(data.trs, function(request){ %><li><small><%=request.offers_count%></small><span class="flag <%=request.country_code%>"></span><p class="ellipsis"><%=request.username%>: <%=request.message%></p></li><% }); %></ul>';
            e.ajax({
                type: "get",
                url: "/manage_requests/five_active_gig_requests.js",
                dataType: "json",
                success: function (r) {
                    e(t).append(_.template(n, {
                        data: r
                    })), Fiverr.initDotDot(t)
                }
            })
        }
    };
    window.FiverrForms = t, e(document).ready(function () {
        t.init()
    })
}(jQuery), HTMLInputElement.prototype.checkValue = function (e) {
    var t = FiverrForms.formRegEx;
    switch (e) {
    case "newUser":
        return t.newUser.test(this.value);
    case "existUser":
        return t.existUser.test(this.value) || t.email.test(this.value);
    case "digit":
        return t.num.test(this.value);
    case "email":
        return t.email.test(this.value);
    case "password":
        return t.pass.test(this.value);
    case "name":
        return t.name.test(this.value)
    }
}, $.fn.focus_first = function () {
    var e = $("input:visible", this).get(0),
        t = $("select:visible", this).get(0);
    t && e && t.offsetTop < e.offsetTop && (e = t);
    var n = $("textarea:visible", this).get(0);
    return n && e && n.offsetTop < e.offsetTop && (e = n), e && e.focus(), this
},
function (e) {
    var t = {
        alreadyLoaded: !1,
        alreadyMarkedRead: !1,
        animateNotifyDo: !0,
        scrollInitialized: !1,
        notificationsURL: "/users/" + document.pageScope.currentUser + "/pinned_flashes",
        lastNotificationID: -1,
        readTimeout: function () {},
        init: function () {
            if (document.pageScope.currentUser == undefined) return;
            this.updateCounter("full"), this.bindMenu()
        },
        bindMenu: function () {
            var n = this;
            e(".notify-menu").bind(Fiverr.clickEventType, function (e) {
                e.stopPropagation()
            }), e(".notify-trigger").bind(Fiverr.clickEventType, function () {
                n.alreadyLoaded ? e(this).closest(".header-notify").hasClass("open") ? (clearTimeout(t.readTimeout), n.animateNotifyDo && !n.alreadyMarkedRead && (n.animateNotify(["reset", 0]), e(this).hasClass("new-notif") && e(this).addClass("flashing"))) : !n.alreadyMarkedRead && e(this).hasClass("new-notif") && (e(this).removeClass("flashing"), n.animateNotifyDo = !0, t.animateNotify(["go", 0]), t.readTimeout = setTimeout(function () {
                    n.markNotifications()
                }, 3e3)) : n.loadNotifications(!0)
            }), e(".notify-menu .load-more").bind(Fiverr.clickEventType, function (e) {
                e.preventDefault(), n.lastNotificationID != -1 && n.loadNotifications(!1)
            }), e(".notify-menu").on(Fiverr.clickEventType, ".unread a", function (t) {
                t.preventDefault();
                var r = e(this).attr("href");
                n.markOneNotification(e(this).parent()[0].getAttribute("data-id"), r)
            }), e(document).bind(Fiverr.clickEventType, function () {
                clearTimeout(t.readTimeout), n.animateNotifyDo && !n.alreadyMarkedRead && (n.animateNotify(["reset", 0]), e(".notify-trigger").hasClass("new-notif") && e(".notify-trigger").addClass("flashing"))
            })
        },
        updateCounter: function (n) {
            var r = this,
                i = 0,
                n = n;
            document.pageScope.hidePinnedFlashes || e.ajax({
                type: "get",
                url: r.notificationsURL + "/unread_count",
                dataType: "text",
                success: function (r) {
                    r = e.parseJSON(r), i = r.unread_count ? r.unread_count : 0, i > 0 ? (e(".notify-trigger").addClass("new-notif flashing"), n == "full" && (t.alreadyMarkedRead = !1, t.animateNotifyDo = !0)) : (e(".notify-trigger").removeClass("new-notif flashing"), n == "full" && (t.alreadyMarkedRead = !0, t.animateNotifyDo = !1))
                }
            })
        },
        animateNotify: function (n) {
            var r = e(".notify-trigger .notify-ani"),
                i = n[0],
                s = n[1];
            i == "go" && t.animateNotifyDo ? (e(".notify-trigger").removeClass("flashing"), s < 6 ? (r.css("height", 0 + s * 2 + "px"), _.delay(t.animateNotify, 450, [i, 1 + s])) : r.css("height", "15px")) : i == "reset" && (r.css("height", "0px"), t.animateNotifyDo = !1)
        },
        markOneNotification: function (t, n) {
            var r = this;
            e.ajax({
                type: "post",
                url: r.notificationsURL + "/mark_as_read",
                dataType: "text",
                data: {
                    flashes: [t]
                },
                success: function (e) {
                    r.updateCounter("single"), window.location.href = n
                },
                error: function (e) {
                    r.updateCounter("single"), window.location.href = n
                }
            })
        },
        markNotifications: function () {
            t.alreadyMarkedRead = !0;
            var n = this,
                r = _.map(e(".notify-menu li"), function (e) {
                    return e.getAttribute("data-id")
                });
            e.ajax({
                type: "post",
                url: n.notificationsURL + "/mark_as_read",
                dataType: "text",
                data: {
                    flashes: r
                },
                success: function (t) {
                    n.updateCounter("full"), r.length > 0 && e.each(r, function (t, n) {
                        e('.notify-menu .antiscroll-inner [data-id="' + n + '"]').removeClass("unread")
                    })
                }
            })
        },
        loadNotifications: function (n) {
            var r = this,
                i = ".notify-menu ul",
                s = {}, o = 330;
            r.lastNotificationID != -1 && (s = {
                start_message_id: r.lastNotificationID
            }), e.ajax({
                type: "get",
                url: r.notificationsURL,
                dataType: "text",
                data: s,
                success: function (s) {
                    s = e.parseJSON(s), r.alreadyLoaded = !0;
                    if (s.messages.length > 0) {
                        n && t.animateNotify(["go", 0]), t.alreadMarkedRead || (t.readTimeout = setTimeout(function () {
                            r.markNotifications()
                        }, 3e3));
                        for (var u in s.messages) {
                            var a = e("<div/>", {
                                html: s.messages[u].text
                            });
                            a.find("a").attr("href") && (s.messages[u].text_link = a.find("a").attr("href"), a.children("a").contents().unwrap(), s.messages[u].text = a.html())
                        }
                        e(i).find(".no-notif").remove(), Templates.notificationsDropdown(s, i);
                        if (r.lastNotificationID != -1) {
                            var f = e(i).find('li[data-id="' + r.lastNotificationID + '"]').next();
                            e(f).addClass("new-notif").delay(800).queue(function (t) {
                                e(this).removeClass("new-notif"), t()
                            }), e(i).scrollTo(f)
                        }
                        r.lastNotificationID = s.messages.length ? s.messages[s.messages.length - 1].message_id : -1
                    } else e(i).removeClass("loading").append('<li class="no-notif">' + e.t("general.no_notifications") + "</li>"), r.lastNotificationID = -1;
                    s.remaining < 1 && (e(".notify-menu .load-more").remove(), r.lastNotificationID = -1), r.calculateContainerHeight() > o ? r.scrollInitialized || (e(".notify-menu .antiscroll-wrap").antiscroll({}).on("mouseenter", function (t) {
                        e(document).bind("mousewheel DOMMouseScroll", function () {})
                    }).on("mouseleave", function (t) {
                        e(document).unbind("mousewheel DOMMouseScroll")
                    }), r.scrollInitialized = !0) : r.scrollInitialized && (e(".notify-menu .antiscroll-wrap").data("antiscroll").destroy(), r.scrollInitialized = !1), r.updateCounter("full")
                }
            })
        },
        stopMouseWheel: function (e) {
            e || (e = window.event), e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        calculateContainerHeight: function () {
            var t = ".notify-menu ul",
                n = 0;
            return e(t).children("li").each(function () {
                n += e(this).outerHeight(!0)
            }), n
        }
    };
    window.FiverrNotifications = t, e(document).ready(function () {
        t.init()
    })
}(jQuery),
function (e) {
    var t = {
        pagination: 1,
        pageExceptions: ["myGigs", "search", "manageRequestsShow"],
        init: function () {
            var n = this;
            if (document.viewData) {
                this.pagination = document.viewData.pagination;
                var r = e(".db-content");
                document.viewData.pageWrapper && (r = e(document.viewData.pageWrapper)), _.indexOf(t.pageExceptions, document.viewData.page) > -1 ? this.initPage_specific(document.viewData, r) : this.initPage_generic(document.viewData, r), e(".page-progress").remove()
            }
            document.pageScope.topMenuSelected && e(".js-top-menu-" + document.pageScope.topMenuSelected).find("a").addClass("current"), t.initSummary()
        },
        initSummary: function () {
            if (e(".db-summary").length > 0) {
                var t = e(".db-summary"),
                    n = t.find(".summary-calculation"),
                    r = t.find(".sym-para"),
                    i = t.find(".calc-exp");
                r.on("mouseenter mouseleave", function () {
                    n.toggleClass("over"), i.fadeToggle("fast")
                })
            }
        },
        initPage_generic: function (r, i) {
            if (!r) return;
            r.pageTitle && e(".db-header h1").html(r.pageTitle), r.stats && n[r.stats.template](r.stats, i.find(".db-summary")), r.dropdown && (r.page == "inbox" ? n.fakeDropdownInbox(r.dropdown, i.find(".db-filters")) : n.fakeDropdown(r.dropdown, i.find(".db-filters"))), r.table && n.tableGeneral(r.table, i.find(".db-main-table")), r.loadmore ? n.loadmoreButton(r.loadmore, i.find(".pagi-standard")) : r.pagination ? n.paginationButtons(r.pagination, i.find(".pagi-standard")) : i.find(".pagi-standard").remove();
            switch (r.page) {
            case "revenues":
                this.initPage_revenues(r, i);
                break;
            case "requests":
                t.bindRequestsEvents(r), n.requestsSearch(r.search, i.find(".db-filters"));
                break;
            case "manageRequests":
                t.bindManageRequestsEvents(r);
                break;
            case "todo":
                t.bindTodosDropdown()
            }
        },
        initPage_specific: function (t, n) {
            if (!t) return;
            t.pageTitle && e(".db-header h1").html(t.pageTitle), this["initPage_" + t.page](t, n)
        },
        initPage_revenues: function (t, r) {
            n.withdrawalButtons(t.withdrawalButtons, r.find(".db-filters")), r.find(".db-header").prepend('<div class="money-expected"><span class="hint--top" data-hint="From Active Orders">' + t.upcoming + "</span></div>");
            var i = e(".db-content .withdrawal-success-popup");
            n.withdrawalPopup(t.withdrawalSuccessPopup, i), i.bPopup({
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0]
            });
            var s = e(".db-content .withdrawal-failed-popup");
            n.withdrawalPopup(t.withdrawalFailedPopup, s), s.bPopup({
                closeClass: "btn-close",
                opacity: .6,
                follow: [!0, !0]
            })
        },
        initPage_myGigs: function (r, i) {
            n[r.stats.template](r.stats, i.find(".db-summary")), n.fakeDropdownInbox(r.dropdown, i.find(".db-filters")), _.each(r.table.trs, function (t) {
                t.tds[2] != null && (t.tds[2].text = n.myGigsTableTitle(e.parseJSON(t.tds[2].text)), _.last(t.tds).text = n.fakeDropdown(_.last(t.tds).text))
            });
            var s = i.find(".db-main-table");
            n.tableGeneral(r.table, s), e(".edit-dd .portfolio").bind(Fiverr.clickEventType, function (n) {
                n.preventDefault(), n.stopImmediatePropagation();
                var r = e(this).find(":checkbox");
                t.toggleLivePortfolio(this.href, function (e) {
                    e = Fiverr.toBoolean(e), r.prop("checked", e ? "checked" : "")
                })
            });
            var o = e(".icon-th .js-revenues-tt");
            o.on("mouseenter", function () {
                var t = e(this);
                e.ajax({
                    type: "get",
                    dataType: "json",
                    url: "/users/" + document.pageScope.currentUser + "/manage_gigs/" + t.data("gig") + "/revenues",
                    success: function (n) {
                        totalRevenues = n.total, t.attr("data-hint", e.t("manage_gigs.revenues_tooltip") + totalRevenues), t.unbind("mouseenter")
                    }
                })
            });
            var u = e(".db-content .statuses-popup");
            n.statusesPopup(r.statusesPopup, u), e(".db-filters .statuses-popup-toggler").show().bind(Fiverr.clickEventType, function (e) {
                e.preventDefault(), u.bPopup({
                    closeClass: "btn-close",
                    opacity: .6,
                    follow: [!0, !0]
                })
            }), Fiverr.initfakeDropdown(s), t.bindDeleteGig()
        },
        initPage_search: function (e, t) {},
        initPage_manageRequestsShow: function (e, t) {
            n.fakeDropdown(e.dropdown, t.find(".db-filters")), n.manageRequestsShow(e, t.find(".db-content-inner")), t.find(".db-filters").prepend('<span class="sellers-applied">' + e.sellersApplied + "</span>")
        },
        bindRequestsEvents: function (r) {
            var i = this;
            i.popupRequests = e(".popup-requests"), e(document).on(Fiverr.clickEventType, ".action-btn input:button", function (s) {
                var o = this,
                    u = e(o).closest("tr"),
                    a = e(o).data("category"),
                    f = e(o).data("sub-category"),
                    l = u.find("td.country").first().html(),
                    c = u.find("td.country").data("username"),
                    h = u.find("td.ellipsis-wrap").first().text(),
                    p = l + '<span class="username">' + c + ":</span> " + h;
                n.requestsPopup(r.popupData, a, f, p), i.popupRequests.bPopup({
                    closeClass: "btn-close",
                    opacity: .6,
                    onOpen: function () {
                        i.popupRequests.show(), i.popupRequests.find(".popup-gig p").dotdotdot({
                            wrap: "letter"
                        }), e("#request_id").val(e(o).data("request")), t.bindRequestsForm()
                    },
                    onClose: function () {
                        i.popupRequests.removeAttr("style").empty(), e("#request_id").val("")
                    }
                })
            }), i.popupRequests.on(Fiverr.clickEventType, ".btn-requests-trigger", function (t) {
                e(".popup-all-gigs").slideDown(250), e(".popup-requests .popup-all-gigs p").dotdotdot({
                    wrap: "letter"
                })
            }), i.popupRequests.on(Fiverr.clickEventType, ".popup-all-gigs .popup-gig", function (t) {
                e(".popup-all-gigs").slideUp(250), e(".popup-selected-gig > .popup-gig").html(this.innerHTML), e(".popup-requests .popup-gig p").dotdotdot({
                    wrap: "letter"
                }), e("#request_gig_id").val(this.getAttribute("data-gig"))
            })
        },
        bindRequestsForm: function () {
            var t = this,
                n = e(".popup-requests form");
            FiverrForms.forms.gigOffer = new FiverrForms.formHandler(n, {
                onInit: function (t) {
                    t.gig_id = n.find('input[name="offer[gig_id]"]'), t.request_id = n.find('input[name="offer[request_id]"]'), e("#request_gig_id").val(t.form.find(".popup-all-gigs .popup-gig")[0].getAttribute("data-gig"))
                },
                onSubmit: function (t, r) {
                    r.disableFormSubmit();
                    var i = e.t("setforms.errors.describe_your_offer");
                    if (r.gig_id.val().length < 1 || r.request_id.val().length < 1) {
                        var s = e('<div class="error-container"><p class="msg-error">' + i + "</p></div>");
                        return n.find(".popup-content").append(s), s.show(), r.enableFormSubmit(), t.preventDefault(), !1
                    }
                },
                ajaxSubmit: !0,
                onAjaxSuccess: function (n, r) {
                    r = e.parseJSON(r);
                    if (!r.error) {
                        var i = e('input[data-request="' + r.requestId + '"]'),
                            s = i.closest("tr").find(".applications");
                        s.text(parseInt(s.text()) + 1), i.replaceWith('<span class="btn-standard disabled disabled-check">' + e.t("request_submited") + "</span>"), t.popupRequests.find(".btn-close")[Fiverr.clickEventType]()
                    }
                }
            })
        },
        bindManageRequestsEvents: function (r) {
            var i = e(".popup-new-request");
            e(document).on(Fiverr.clickEventType, ".btn-new-request input", function (s) {
                n.manageRequestsPopup(r.popupData), i.bPopup({
                    closeClass: "btn-close",
                    opacity: .6,
                    follow: [!0, !1],
                    onOpen: function () {
                        i.show(), Fiverr.initfakeDropdown(e(".popup-new-request")), t.bindManageRequestsForm()
                    },
                    onClose: function () {
                        i.removeAttr("style").empty()
                    }
                })
            }), i.on(Fiverr.clickEventType, ".cat .dropdown-menu a", function (n) {
                n.preventDefault(), i.find(".cat .dropdown-toggle").text(e(this).text());
                var r = t.getSubcategories(this.href);
                r && r != "" ? (i.find(".subcat").html(r), Fiverr.initfakeDropdown(i.find(".subcat"))) : (i.find(".subcat").html(""), i.find('input[name="request[sub_category]"]').val("")), i.find('input[name="request[category]"]').val(this.getAttribute("data-cat"))
            }), i.on("click", ".subcat .dropdown-menu a", function (t) {
                t.preventDefault(), i.find(".subcat .dropdown-toggle").text(e(this).text()), i.find('input[name="request[sub_category]"]').val(this.getAttribute("data-sub"))
            })
        },
        bindManageRequestsForm: function () {
            var t = e(".popup-new-request form");
            FiverrForms.forms.gigRequest = (new FiverrForms.formHandler(t, {
                onInit: function (e) {
                    e.ta = t.find('textarea[name="request[message]"]'), e.cat = t.find('input[name="request[category]"]'), e.subcat = t.find('input[name="request[sub_category]"]'), new FiverrForms.formGeneralObject(e.ta), new FiverrForms.formGeneralObject(e.cat)
                },
                onSubmit: function (t, n) {
                    n.disableFormSubmit();
                    var r = e.t("setforms.errors.describe_your_request"),
                        i = e.t("setforms.errors.select_request_category"),
                        s = 0;
                    n.ta.val().length < 5 ? (n.ta.geShowError(r), s++) : n.ta.geClearErrors(r), n.cat.val().length < 1 || n.subcat.val().length < 1 ? (n.cat.geShowError(i), s++) : n.cat.geClearErrors(i);
                    if (s > 0) return n.enableFormSubmit(), t.preventDefault(), !1
                }
            })).addCharsCounter(e(".popup-mng-req-desc"), 120)
        },
        getSubcategories: function (t) {
            var r = null;
            return e.ajax({
                type: "get",
                dataType: "text",
                url: t,
                async: !1,
                success: function (t) {
                    t = e.parseJSON(t);
                    if (!t || t.length < 1) return !1;
                    r = {
                        attrs: "",
                        label: {
                            text: "under",
                            attrs: ""
                        },
                        initial: {
                            text: "subcategory",
                            attrs: ""
                        },
                        options: []
                    }, _.each(t, function (e) {
                        e.sub_category.name.toLowerCase() != "other" && r.options.push({
                            text: e.sub_category.name,
                            attrs: 'data-sub="' + e.sub_category.id + '"'
                        })
                    })
                }
            }), r ? n.fakeDropdown(r) : !1
        },
        toggleLivePortfolio: function (t, n) {
            e.ajax({
                type: "post",
                dataType: "text",
                url: t,
                success: function (e) {
                    n && n(e)
                }
            })
        },
        bindDeleteGig: function () {
            e(".db-my-gigs .edit-dd .delete-gig-form").bind(Fiverr.clickEventType, function (t) {
                if (!confirm(e.t("manage_gigs.confirm_gig_delete"))) return t.preventDefault(), !1
            })
        },
        bindTodosDropdown: function () {
            e(".db-filters .dropdown-menu").bind(Fiverr.clickEventType, function (t) {
                if (e(t.target).hasClass("dropdown-sub-title")) return;
                t.stopImmediatePropagation()
            }), e('.db-filters .fake-check-grey input[type="checkbox"]').change(function (t) {
                var n = e(this);
                if (n.prop("checked") && !confirm(e.t("todos.filter.confirm"))) return n.prop("checked", !1), !1;
                var r = _.map(e('.db-filters .fake-check-grey input[type="checkbox"]:checked'), function (t) {
                    return e(t).val()
                });
                e.ajax({
                    url: n.data("url"),
                    type: "post",
                    dataType: "text",
                    data: {
                        slugs: r.toString()
                    },
                    success: function () {
                        var e = setTimeout(function () {
                            location.reload(), clearTimeout(e)
                        }, 2e3)
                    }
                })
            }), e(".db-filters .dropdown-menu .flush").bind("submit", function (t) {
                if (!confirm(e.t("todos.flush.confirm"))) return !1;
                var n = this.action;
                e.ajax({
                    type: "post",
                    url: n,
                    dataType: "text",
                    success: function (t) {
                        e(".db-main-table .reversed").remove()
                    }
                })
            })
        }
    }, n = {
            tableGeneral: function (t, n) {
                var r = "<table><% if(data.ths){ %><thead><tr><% _.each(data.ths,function(th){ %><td <%=th.attrs%>><%= th.text %><% }); %></tr></thead><% } %><tbody><%= Templates.tableTrs(data.trs) %></tbody></table>";
                e(n).html(_.template(r, {
                    data: t
                })), e("[rel=tooltip]").tooltip(), Fiverr.initDotDot(n)
            },
            tableTrs: function (t, n) {
                var r = "<% _.each(data,function(tr){ %><tr <%= tr.attrs %>><% _.each(tr.tds,function(td){ %><td <%= td.attrs %>><%= td.text %></td><% }); %></tr><% }); %>";
                if (!n) return _.template(r, {
                    data: t
                });
                e(n).append(_.template(r, {
                    data: t
                })), e("[rel=tooltip]").tooltip(), Fiverr.initDotDot(n)
            },
            fakeDropdown: function (t, n) {
                var r = '<div class="filter-select cf <%= data.classes %>" <%= data.attrs %>><% if ((data.label.attrs) || (data.label.text)) { %><label for="fake-dropdown" <%= data.label.attrs %>><%= data.label.text %></label><% } %><div class="fake-dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" <% if(data.autowidth){ %>data-autowidth="true"<% } %>><%= data.initial.text %></a><ul class="dropdown-menu <%= (data.pullClass)? data.pullClass : "" %>" role="menu"><% _.each(data.options,function(opt){ %><li><% if(opt.post){ %><form method="post" accept-charset="UTF-8" <%= opt.attrs %>><input type="hidden" name="authenticity_token" value="<%= document.AUTH_TOKEN  %>"/><input type="submit" value="<%= opt.text %>"/></form><% } else { %><% if(opt.attrs){ %><a <%= opt.attrs %>><%= opt.text %></a><% } else { %><%= opt.text %><% } %><% } %></li><% }); %></ul></div></div>';
                tmplt = _.template(r, {
                    data: t
                });
                if (!n) return tmplt;
                n = e(n), n.append(tmplt), Fiverr.initfakeDropdown(n)
            },
            fakeDropdownInbox: function (t, n) {
                var r = '<div class="filter-select cf" <%= data.attrs %>><div class="fake-dropdown dropdown-check"><a href="#" class="dropdown-toggle" data-toggle="dropdown" data-autowidth="true"><label class="fake-check-grey conversations-selector" data-filter="cbx"><input type="checkbox"><span class="chk-img"></span></label><span class="drop-initial"></span></a><ul class="dropdown-menu" role="menu"><% _.each(data.options,function(opt){ %><li><a href="#" class="conversations-selector" <%= opt.attrs %>><%= opt.text %></a></li><% }); %></ul></div></div><div class="filter-actions filter-actions-inbox"><label><%= data.actions.label %></label><% _.each(data.actions.buttons,function(btn){ %><a href="<%= btn.url %>" class="btn-standard disabled" <%= btn.attrs %>><%= btn.text %></a><% }); %></div>';
                n = e(n), n.append(_.template(r, {
                    data: t
                })), Fiverr.initfakeDropdown(n)
            },
            paginationButtons: function (t, n) {
                if (!t.next && !t.prev) return;
                var r = '<% if(data.prev){ %><a href="<%= data.prev.url %>" class="btn-standard"><%= data.prev.text %></a><% } %><% if(data.next){ %><a href="<%= data.next.url %>" class="btn-standard"><%= data.next.text %></a><% } %>';
                e(n).html(_.template(r, {
                    data: t
                }))
            },
            loadmoreButton: function (t, n) {
                var r = '<a class="btn-standard" <%= data.attr %>><%= data.text%></a>';
                t.info && (r += '<small class="pagi-label"><%= data.info%></small>'), e(n).html(_.template(r, {
                    data: t
                }))
            },
            userBalanceStats: function (t, n) {
                var r = '<div class="val"><span><em><%= data.gross.amount %></em><br><%= data.gross.text %></span></div><div class="val sym sym-minus"><span>-</span></div><div class="summary-calculation"><div class="val sym sym-para sym-para-l"><span>(</span></div><div class="calc"><div class="calc-exp"><div><div>=<%= data.calcSum.amount %><br><small><%= data.calcSum.text %></small></div></div></div><% _.each(data.seg,function(val){ %><div class="val"><% if(val.attrs) { %> <a <%= val.attrs %>> <% } %><em><%= val.amount %></em><br><%= val.text %><% if(val.attrs) { %> </a> <% } %> </div><% if(data.seg[data.seg.length - 1] != val){ %><div class="val sym sym-plus"><span>+</span></div><% } %><% }) %></div><div class="val sym sym-para sym-para-r"><span>)</span></div></div><div class="val sym sym-equal"><span>=</span></div><div class="val total"><em><%= data.net.amount %></em><br><%= data.net.text %></div>';
                e(n).append(_.template(r, {
                    data: t.statsData
                }))
            },
            withdrawalButtons: function (t, n) {
                var r = '<div class="filter-actions rf"><label><%= data.title %></label><%= data.paypalBtn %><%= data.cardBtn %></div>';
                e(n).append(_.template(r, {
                    data: t
                }))
            },
            myGigsTableTitle: function (e) {
                var t = '<div><%= data.title %></div><span class="status-bar <%= data.status %> bar-inline"><%= data.statusText %></span><% if(data.videoLabel){ %><span class="status-bar <%= data.videoLabel.match(/^([A-z]+)?\\s([A-z]+)/)[0].replace(/\\s/,"").toLowerCase() %> bar-inline"><%= data.videoLabel %></span><% } %><% if(data.express){ %><span class="status-bar express bar-inline"><%= data.express %></span><% } %><span class="rating rate-<%= data.rating %>"></span>';
                return _.template(t, {
                    data: e
                })
            },
            stats: function (e, t) {
                var n = '<% _.each(data,function(item){ %><% var tag = (item.clickable)? "a" : "span" %><<%= tag %> <%= item.attrs %>><%= item.count %><small><%= item.text %></small></<%= tag %> ><% }); %>';
                result = _.template(n, {
                    data: e.statsData
                });
                if (!t) return result;
                t.html(result)
            },
            requestsStats: function (e, t) {
                var n = "<%= Templates.stats(data) %>";
                t.html(_.template(n, {
                    data: e
                }))
            },
            requestsSearch: function (e, t) {
                var n = '<div class="requests-search"><label for="search"><%= data.subtitle %></label><div class="input-wrapper"><form method="get" action="<%= data.search_path %>"><input type="search" name="search" value="<%= data.search_value %>" placeholder="<%= data.search_placeholder %>"  <%= data.search_disabled %> ><input type="hidden" name="per_page" value="<%= data.search_perpage %>"><input type="submit" alt="Go" class="btn-search"></div></div>';
                t.append(_.template(n, {
                    data: e
                }))
            },
            manageRequestsStats: function (e, t) {
                var n = '<%= Templates.stats(data) %><div class="btn-new-request"><input type="button" value="<%= data.buttonValue %>" class="btn-standard-lrg"><aside class="request-tooltip"><small>&#9656;</small><h5><%= data.tooltip.header %></h5><p><%= data.tooltip.content %></p></aside></div>';
                t.html(_.template(n, {
                    data: e
                }))
            },
            requestsPopup: function (t, n, r, i) {
                var s = '<form method="post" action="#" accept-charset="UTF-8" class="cf"><% var firstGig = data.gigs[0] %><input type="hidden" name="authenticity_token" value="<%= document.AUTH_TOKEN  %>"><input type="hidden" id="request_gig_id" name="offer[gig_id]" value="<%= firstGig.gig %>" ><input type="hidden" id="request_id" name="offer[request_id]"><fieldset><header><h2><a href="#" class="btn-close"></a><%= data.mainHeader %></h2></header><div class="popup-content"><div class="popup-req-desc">' + i + "</div>" + "<h5><%= data.subHeader %></h5>" + '<div class="popup-selected-gig cf">' + '<a href="#" class="btn-requests-trigger">&#9662;</a>' + "<% _.each(data.gigs,function(gig){ %>" + "<% if(subCatID == gig.subcategory || parseInt(subCatID) == -parseInt(gig.category) || (gig.subcategory == null && catID == gig.category)) {%>" + "<% firstGig = gig %>" + "<% } %>" + "<% }); %>" + '<div class="popup-gig">' + '<span class="coll-pict-76"><%= firstGig.img %></span>' + "<h6><%= firstGig.title %></h6>" + "<p><%= firstGig.description %></p>" + "</div>" + '<div class="popup-all-gigs">' + "<% _.each(data.gigs,function(gig){ %>" + "<% if(subCatID == gig.subcategory || parseInt(subCatID) == -parseInt(gig.category) || (gig.subcategory == null && catID == gig.category)) {%>" + '<div class="popup-gig cf" data-gig="<%= gig.gig %>" data-category="<%= gig.category %>" data-sub-category="<%= gig.subcategory %>">' + '<span class="coll-pict-76"><%= gig.img %></span>' + "<h6><%= gig.title %></h6>" + "<p><%= gig.description %></p>" + "</div>" + "<% } %>" + "<% }); %>" + "</div>" + "</div>" + "</div>" + "<footer>" + '<input type="submit" class="btn-standard btn-green popup-action" value="<%= data.button %>">' + "</footer>" + "</fieldset>" + "</form>";
                e(".popup-requests").append(_.template(s, {
                    data: t,
                    catID: n,
                    subCatID: r
                })), e(".popup-all-gigs .popup-gig").length < 2 && e("a.btn-requests-trigger").hide(), Fiverr.checkForBrokenImg()
            },
            manageRequestsPopup: function (t) {
                var n = '<header><h2><a href="#" class="btn-close"></a><%= data.mainHeader %></h2></header><form method="post" action="<%= data.action %>" accept-charset="UTF-8" class="cf"><input type="hidden" name="authenticity_token" value="<%= document.AUTH_TOKEN  %>"><fieldset><div class="popup-content"><div class="popup-mng-req-desc general-form-field-wrap" ><textarea name="request[message]" rows="4" placeholder="<%= data.placeholder %>"/><span class="char-count"></span></div><div class="drops cf general-form-field-wrap"><input type="hidden" name="request[category]"><input type="hidden" name="request[sub_category]"><div class="cat"><%= Templates.fakeDropdown(data.dropdown) %></div><div class="subcat"></div></div></div><footer><input type="submit" class="btn-standard btn-green" value="<%= data.button %>"></footer></fieldset></form>';
                e(".popup-new-request").append(_.template(n, {
                    data: t
                }))
            },
            manageRequestsShow: function (e, t) {
                var n = '<ul class="gig-requests-list"><%= Templates.offerForRequest(data.offers) %></ul>';
                t.append(_.template(n, {
                    data: e
                })), Fiverr.initDotDot(t)
            },
            offerForRequest: function (e, t) {
                var n = '<% _.each(offers,function(offer){ %><li class="cf"><aside class="offer-gig"><span class="gig-pict-200"><%= offer.gig.image %></span><div class="gig-sub"><span class="rating rate-<%= offer.gig.rating %>"></span><span class="ratings-count">(<%= offer.gig.ratingsCount %>)</span><span class="duration"><%= offer.gig.duration %></span></div><p class="ellipsis"><%= offer.gig.title %></p><%= offer.gig.orderButton %><small class="gig-contact">or <%= offer.gig.contactLink %></small></aside><span class="user-pict-50"><%= offer.seller_image %></span><h2><%= offer.header %></h2><div class="offer-user-stats"><%= Templates.stats(offer.stats) %></div><div class="offer-message"><p><%= offer.autoText %></p><p><%= offer.message %></p></div></li><% }); %>';
                result = _.template(n, {
                    offers: e
                });
                if (!t) return result;
                t.append(result)
            },
            notificationsDropdown: function (t, n) {
                var r = '<% _.each(data, function(message) { %><li data-id="<%= message.message_id %>" class="<% if(!message.was_read) { %>unread<% } %>"><% if(message.text_link) { %><a href="<%= message.text_link %>"><% } %><em class="envelope <%= message.flash_format  %>"></em><time datetime="<%= message.created_at %> <% if(message.was_read) { %>grey<% } %>"><%= Fiverr.howLongAgo(new Date(message.created_at)) %></time><%= message.text %><% if(message.text_link) { %></a><% } %></li><% }); %>';
                e(n).append(_.template(r, {
                    data: t.messages
                })).removeClass("loading")
            },
            statusesPopup: function (e, t) {
                layout = '<header><h2><a href="#" class="btn-close"></a><%= data.title %></h2></header><dl class="popup-content"><% _.each(data.statuses, function(status){ %><dt class="status-bar <%= status.label.toLowerCase() %> bar-inline"><%= status.label %></dt><dd class="cf"><%= status.explanation %></dd><% }); %></dl>', t.append(_.template(layout, {
                    data: e
                }))
            },
            withdrawalPopup: function (e, t) {
                layout = '<header><h2><% if(!data.ok_close) {%><a href="#" class="btn-close"></a><% } %><%= data.title %></h2></header><p class="popup-content"><%= data.text %></p><footer><% if(data.ok_close) {%><input type="submit" class="btn-standard btn-green btn-close" value="<%= data.ok_close %>"><% } %></footer>', t.append(_.template(layout, {
                    data: e
                }))
            }
        };
    window.FiverrDashboard = t, window.Templates = n, e(document).ready(function () {
        document.viewData && e('<img src="/assets/v2_buttons/btn-progress-ddd.gif" class="page-progress">').prependTo(e(".db-main-table")), t.init()
    })
}(jQuery);