/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */

function utf8_encode(e) {
    if (e === null || typeof e == "undefined") return "";
    var t = e + "",
        n = "",
        r, i, s = 0;
    r = i = 0, s = t.length;
    for (var o = 0; o < s; o++) {
        var u = t.charCodeAt(o),
            a = null;
        u < 128 ? i++ : u > 127 && u < 2048 ? a = String.fromCharCode(u >> 6 | 192, u & 63 | 128) : a = String.fromCharCode(u >> 12 | 224, u >> 6 & 63 | 128, u & 63 | 128), a !== null && (i > r && (n += t.slice(r, i)), n += a, r = i = o + 1)
    }
    return i > r && (n += t.slice(r, s)), n
}

function crc32(e) {
    e = this.utf8_encode(e);
    var t = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D",
        n = 0,
        r = 0,
        i = 0;
    n ^= -1;
    for (var s = 0, o = e.length; s < o; s++) i = (n ^ e.charCodeAt(s)) & 255, r = "0x" + t.substr(i * 9, 8), n = n >>> 8 ^ r;
    return n ^= -1, n < 0 && (n += 4294967296), n
}

function Boxy(e, t) {
    this.boxy = jQuery(Boxy.WRAPPER), jQuery.data(this.boxy[0], "boxy", this), this.visible = !1, this.options = jQuery.extend({}, Boxy.DEFAULTS, t || {}), this.options.modal && (this.options = jQuery.extend(this.options, {
        center: !0,
        draggable: !1
    })), this.options.actuator && jQuery.data(this.options.actuator, "active.boxy", this), this.setContent(e || "<div></div>"), this._setupTitleBar(), this.boxy.css("display", "none").appendTo(document.body), this.toTop(), this.options.fixed && (Modernizr.positionfixed ? this.boxy.addClass("fixed") : this.options.fixed = !1), this.options.center && Boxy._u(this.options.x, this.options.y) ? this.center() : this.moveTo(Boxy._u(this.options.x) ? this.options.x : Boxy.DEFAULT_X, Boxy._u(this.options.y) ? this.options.y : Boxy.DEFAULT_Y), this.options.show && this.show()
}(function (e, t) {
    function P(e) {
        var t = e.length,
            n = b.type(e);
        return b.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || n !== "function" && (t === 0 || typeof t == "number" && t > 0 && t - 1 in e)
    }

    function B(e) {
        var t = H[e] = {};
        return b.each(e.match(E) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function I(e, n, r, i) {
        if (!b.acceptData(e)) return;
        var s, o, u = b.expando,
            a = typeof n == "string",
            f = e.nodeType,
            c = f ? b.cache : e,
            h = f ? e[u] : e[u] && u;
        if ((!h || !c[h] || !i && !c[h].data) && a && r === t) return;
        h || (f ? e[u] = h = l.pop() || b.guid++ : h = u), c[h] || (c[h] = {}, f || (c[h].toJSON = b.noop));
        if (typeof n == "object" || typeof n == "function") i ? c[h] = b.extend(c[h], n) : c[h].data = b.extend(c[h].data, n);
        return s = c[h], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[b.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[b.camelCase(n)])) : o = s, o
    }

    function q(e, t, n) {
        if (!b.acceptData(e)) return;
        var r, i, s, o = e.nodeType,
            u = o ? b.cache : e,
            a = o ? e[b.expando] : b.expando;
        if (!u[a]) return;
        if (t) {
            s = n ? u[a] : u[a].data;
            if (s) {
                b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in s ? t = [t] : (t = b.camelCase(t), t in s ? t = [t] : t = t.split(" "));
                for (r = 0, i = t.length; r < i; r++) delete s[t[r]];
                if (!(n ? U : b.isEmptyObject)(s)) return
            }
        }
        if (!n) {
            delete u[a].data;
            if (!U(u[a])) return
        }
        o ? b.cleanData([e], !0) : b.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
    }

    function R(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(F, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : j.test(r) ? b.parseJSON(r) : r
                } catch (s) {}
                b.data(e, n, r)
            } else r = t
        }
        return r
    }

    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && b.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function it() {
        return !0
    }

    function st() {
        return !1
    }

    function ct(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ht(e, t, n) {
        t = t || 0;
        if (b.isFunction(t)) return b.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return b.grep(e, function (e) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = b.grep(e, function (e) {
                return e.nodeType === 1
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
        for (;
            (n = e[r]) != null; r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !b.hasData(e)) return;
        var n, r, i, s = b._data(e),
            o = b._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) b.event.add(t, n, u[n][r])
        }
        o.data && (o.data = b.extend({}, o.data))
    }

    function Bt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!b.support.noCloneEvent && t[b.expando]) {
            i = b._data(t);
            for (r in i.events) b.removeEvent(t, r, i.handle);
            t.removeAttribute(b.expando)
        }
        if (n === "script" && t.text !== e.text) _t(t).text = e.text, Dt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && xt.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function jt(e, n) {
        var r, s, o = 0,
            u = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!u)
            for (u = [], r = e.childNodes || e;
                (s = r[o]) != null; o++)!n || b.nodeName(s, n) ? u.push(s) : b.merge(u, jt(s, n));
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
        while (i--) {
            t = en[i] + n;
            if (t in e) return t
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, b.css(e, "display") === "none" || !b.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = b._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && nn(r) && (s[o] = b._data(r, "olddisplay", an(r.nodeName)))) : s[o] || (i = nn(r), (n && n !== "none" || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function sn(e, t, n) {
        var r = $t.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function on(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += b.css(e, n + Zt[s], !0, i)), r ? (n === "content" && (o -= b.css(e, "padding" + Zt[s], !0, i)), n !== "margin" && (o -= b.css(e, "border" + Zt[s] + "Width", !0, i))) : (o += b.css(e, "padding" + Zt[s], !0, i), n !== "padding" && (o += b.css(e, "border" + Zt[s] + "Width", !0, i)));
        return o
    }

    function un(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = qt(e),
            o = b.support.boxSizing && b.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Rt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Jt.test(i)) return i;
            r = o && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + on(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function an(e) {
        var t = s,
            n = Qt[e];
        if (!n) {
            n = fn(e, t);
            if (n === "none" || !n) It = (It || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (It[0].contentWindow || It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = fn(e, t), It.detach();
            Qt[e] = n
        }
        return n
    }

    function fn(e, t) {
        var n = b(t.createElement(e)).appendTo(t.body),
            r = b.css(n[0], "display");
        return n.remove(), r
    }

    function vn(e, t, n, r) {
        var i;
        if (b.isArray(t)) b.each(t, function (t, i) {
            n || cn.test(e) ? r(e, i) : vn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && b.type(t) === "object")
            for (i in t) vn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function _n(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(E) || [];
            if (b.isFunction(n))
                while (r = s[i++]) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function Dn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, b.each(e[u] || [], function (e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {}, s = e === An;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
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
        while (f[0] === "*") f.shift(), s === t && (s = e.mimeType || n.getResponseHeader("Content-Type"));
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
        } if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function Bn(e, t) {
        var n, r, i, s, o = {}, u = 0,
            a = e.dataTypes.slice(),
            f = a[0];
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (a[1])
            for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
        for (; r = a[++u];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    i = o[f + " " + r] || o["* " + r];
                    if (!i)
                        for (n in o) {
                            s = n.split(" ");
                            if (s[1] === r) {
                                i = o[f + " " + s[0]] || o["* " + s[0]];
                                if (i) {
                                    i === !0 ? i = o[n] : o[n] !== !0 && (r = s[0], a.splice(u--, 0, r));
                                    break
                                }
                            }
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
            for (; i < s; i++)
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
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
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
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        tr(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = Qn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return Zn(f, l), b.isFunction(f.opts.start) && f.opts.start.call(e, f), b.fx.timer(b.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function tr(e, t) {
        var n, r, i, s, o;
        for (i in e) {
            r = b.camelCase(i), s = t[r], n = e[i], b.isArray(n) && (s = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = b.cssHooks[r];
            if (o && "expand" in o) {
                n = o.expand(n), delete e[r];
                for (i in n) i in e || (e[i] = n[i], t[i] = s)
            } else t[r] = s
        }
    }

    function nr(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {}, v = [],
            m = e.nodeType && nn(e);
        n.queue || (l = b._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, b.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], b.css(e, "display") === "inline" && b.css(e, "float") === "none" && (!b.support.inlineBlockNeedsLayout || an(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", b.support.shrinkWrapBlocks || h.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t) {
            o = t[i];
            if ($n.exec(o)) {
                delete t[i], a = a || o === "toggle";
                if (o === (m ? "hide" : "show")) continue;
                v.push(i)
            }
        }
        s = v.length;
        if (s) {
            u = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in u && (m = u.hidden), a && (u.hidden = !m), m ? b(e).show() : h.done(function () {
                b(e).hide()
            }), h.done(function () {
                var t;
                b._removeData(e, "fxshow");
                for (t in d) b.style(e, t, d[t])
            });
            for (i = 0; i < s; i++) r = v[i], f = h.createTween(r, m ? u[r] : 0), d[r] = u[r] || b.style(e, r), r in u || (u[r] = f.start, m && (f.end = f.start, f.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    function ir(e, t) {
        var n, r = {
                height: e
            }, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function sr(e) {
        return b.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
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
            if (s.addEventListener || e.type === "load" || s.readyState === "complete") D(), b.ready()
        }, D = function () {
            s.addEventListener ? (s.removeEventListener("DOMContentLoaded", _, !1), e.removeEventListener("load", _, !1)) : (s.detachEvent("onreadystatechange", _), e.detachEvent("onload", _))
        };
    b.fn = b.prototype = {
        jquery: c,
        constructor: b,
        init: function (e, n, r) {
            var i, o;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = x.exec(e);
                if (i && (i[1] || !n)) {
                    if (i[1]) {
                        n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : s, !0));
                        if (T.test(i[1]) && b.isPlainObject(n))
                            for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    o = s.getElementById(i[2]);
                    if (o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = s, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
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
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
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
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
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
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !b.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((s = arguments[a]) != null)
                for (i in s) {
                    e = u[i], r = s[i];
                    if (u === r) continue;
                    l && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, o = e && b.isArray(e) ? e : []) : o = e && b.isPlainObject(e) ? e : {}, u[i] = b.extend(l, o, r)) : r !== t && (u[i] = r)
                }
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
            if (e === !0 ? --b.readyWait : b.isReady) return;
            if (!s.body) return setTimeout(b.ready);
            b.isReady = !0;
            if (e !== !0 && --b.readyWait > 0) return;
            n.resolveWith(s, [b]), b.fn.trigger && b(s).trigger("ready").off("ready")
        },
        isFunction: function (e) {
            return b.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return b.type(e) === "array"
        },
        isWindow: function (e) {
            return e != null && e == e.window
        },
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function (e) {
            return e == null ? String(e) : typeof e == "object" || typeof e == "function" ? f[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function (e) {
            if (!e || b.type(e) !== "object" || e.nodeType || b.isWindow(e)) return !1;
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
            throw new Error(e)
        },
        parseHTML: function (e, t, n) {
            if (!e || typeof e != "string") return null;
            typeof t == "boolean" && (n = t, t = !1), t = t || s;
            var r = T.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
        },
        parseJSON: function (t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (t === null) return t;
            if (typeof t == "string") {
                t = b.trim(t);
                if (t && N.test(t.replace(k, "@").replace(L, "]").replace(C, ""))) return (new Function("return " + t))()
            }
            b.error("Invalid JSON: " + t)
        },
        parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + n), r
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
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: y && !y.call("﻿ ") ? function (e) {
            return e == null ? "" : y.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(S, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return e != null && (P(Object(e)) ? b.merge(n, typeof e == "string" ? [e] : e) : p.call(n, e)), n
        },
        inArray: function (e, t, n) {
            var r;
            if (t) {
                if (v) return v.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function (e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !! n;
            for (; s < o; s++) r = !! t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function (e, t, n) {
            var r, i = 0,
                s = e.length,
                o = P(e),
                u = [];
            if (o)
                for (; i < s; i++) r = t(e[i], i, n), r != null && (u[u.length] = r);
            else
                for (i in e) r = t(e[i], i, n), r != null && (u[u.length] = r);
            return h.apply([], u)
        },
        guid: 1,
        proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (s = e[n], n = e, e = s), b.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || b.guid++, i) : t
        },
        access: function (e, n, r, i, s, o, u) {
            var a = 0,
                f = e.length,
                l = r == null;
            if (b.type(r) === "object") {
                s = !0;
                for (a in r) b.access(e, n, a, r[a], !0, o, u)
            } else if (i !== t) {
                s = !0, b.isFunction(i) || (u = !0), l && (u ? (n.call(e, i), n = null) : (l = n, n = function (e, t, n) {
                    return l.call(b(e), n)
                }));
                if (n)
                    for (; a < f; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)))
            }
            return s ? e : l ? n.call(e) : f ? n(e[0], r) : o
        },
        now: function () {
            return (new Date).getTime()
        }
    }), b.ready.promise = function (t) {
        if (!n) {
            n = b.Deferred();
            if (s.readyState === "complete") setTimeout(b.ready);
            else if (s.addEventListener) s.addEventListener("DOMContentLoaded", _, !1), e.addEventListener("load", _, !1);
            else {
                s.attachEvent("onreadystatechange", _), e.attachEvent("onload", _);
                var r = !1;
                try {
                    r = e.frameElement == null && s.documentElement
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
        }
        return n.promise(t)
    }, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }), r = b(s);
    var H = {};
    b.Callbacks = function (e) {
        e = typeof e == "string" ? H[e] || B(e) : b.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function (t) {
                r = e.memory && t, i = !0, o = u || 0, u = 0, s = a.length, n = !0;
                for (; a && o < s; o++)
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
                                r === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && r !== "string" && i(n)
                            })
                        })(arguments), n ? s = a.length : r && (u = t, l(r))
                    }
                    return this
                },
                remove: function () {
                    return a && b.each(arguments, function (e, t) {
                        var r;
                        while ((r = b.inArray(t, a, r)) > -1) a.splice(r, 1), n && (r <= s && s--, r <= o && o--)
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
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!i || f) && (n ? f.push(t) : l(t)), this
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
                        return e != null ? b.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, b.each(t, function (e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function () {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t = 0,
                n = d.call(arguments),
                r = n.length,
                i = r !== 1 || e && b.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : b.Deferred(),
                o = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), b.support = function () {
        var t, n, r, o, u, a, f, l, c, h, p = s.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        u = s.createElement("select"), f = u.appendChild(s.createElement("option")), o = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: p.className !== "t",
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !! p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: !! o.value,
            optSelected: f.selected,
            enctype: !! s.createElement("form").enctype,
            html5Clone: s.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: s.compatMode === "CSS1Compat",
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
        o = s.createElement("input"), o.setAttribute("value", ""), t.input = o.getAttribute("value") === "", o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = s.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (h in {
            submit: !0,
            change: !0,
            focusin: !0
        }) p.setAttribute(l = "on" + h, "t"), t[h + "Bubbles"] = l in e || p.attributes[l].expando === !1;
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = p.style.backgroundClip === "content-box", b(function () {
            var n, r, o, u = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = s.getElementsByTagName("body")[0];
            if (!a) return;
            n = s.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = o[0].offsetHeight === 0, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && o[0].offsetHeight === 0, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = p.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(p, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(p, null) || {
                width: "4px"
            }).width === "4px", r = p.appendChild(s.createElement("div")), r.style.cssText = p.style.cssText = u, r.style.marginRight = r.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof p.style.zoom !== i && (p.innerHTML = "", p.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = p.offsetWidth !== 3, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = r = null
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
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) return !1;
            var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), b.fn.extend({
        data: function (e, n) {
            var r, i, s = this[0],
                o = 0,
                u = null;
            if (e === t) {
                if (this.length) {
                    u = b.data(s);
                    if (s.nodeType === 1 && !b._data(s, "parsedAttrs")) {
                        r = s.attributes;
                        for (; o < r.length; o++) i = r[o].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), R(s, i, u[i]));
                        b._data(s, "parsedAttrs", !0)
                    }
                }
                return u
            }
            return typeof e == "object" ? this.each(function () {
                b.data(this, e)
            }) : b.access(this, function (n) {
                if (n === t) return s ? R(s, e, b.data(s, e)) : null;
                this.each(function () {
                    b.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                b.removeData(this, e)
            })
        }
    }), b.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = b._data(e, t), n && (!r || b.isArray(n) ? r = b._data(e, t, b.makeArray(n)) : r.push(n)), r || []
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
            i === "inprogress" && (i = n.shift(), r--), s.cur = i, i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
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
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? b.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = b.queue(this, e, n);
                b._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && b.dequeue(this, e)
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
            typeof e != "string" && (n = e, e = t), e = e || "fx";
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
                a = typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = b.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, s, o = 0,
                u = this.length,
                a = arguments.length === 0 || typeof e == "string" && e;
            if (b.isFunction(e)) return this.each(function (t) {
                b(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(E) || [];
                for (; o < u; o++) {
                    n = this[o], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(X, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        n.className = e ? b.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return b.isFunction(e) ? this.each(function (n) {
                b(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var s, o = 0,
                        u = b(this),
                        a = t,
                        f = e.match(E) || [];
                    while (s = f[o++]) a = r ? a : !u.hasClass(s), u[a ? "addClass" : "removeClass"](s)
                } else if (n === i || n === "boolean") this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return r = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()], r && "get" in r && (n = r.get(s, "value")) !== t ? n : (n = s.value, typeof n == "string" ? n.replace(V, "") : n == null ? "" : n);
                return
            }
            return i = b.isFunction(e), this.each(function (n) {
                var s, o = b(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, n, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : b.isArray(s) && (s = b.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()];
                if (!r || !("set" in r) || r.set(this, s, "value") === t) this.value = s
            })
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
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (b.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !b.nodeName(n.parentNode, "optgroup"))) {
                            t = b(n).val();
                            if (s) return t;
                            o.push(t)
                        }
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
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (typeof e.getAttribute === i) return b.prop(e, n, r);
            o = a !== 1 || !b.isXMLDoc(e), o && (n = n.toLowerCase(), s = b.attrHooks[n] || (K.test(n) ? W : z));
            if (r === t) return s && o && "get" in s && (u = s.get(e, n)) !== null ? u : (typeof e.getAttribute !== i && (u = e.getAttribute(n)), u == null ? t : u);
            if (r !== null) return s && o && "set" in s && (u = s.set(e, r, n)) !== t ? u : (e.setAttribute(n, r + ""), r);
            b.removeAttr(e, n)
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                s = t && t.match(E);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = b.propFix[n] || n, K.test(n) ? !G && Q.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(G ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!b.support.radioValue && t === "radio" && b.nodeName(e, "input")) {
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
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !b.isXMLDoc(e), o && (n = b.propFix[n] || n, s = b.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
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
                i = typeof r == "boolean" && e.getAttribute(n),
                s = typeof r == "boolean" ? Y && G ? i != null : Q.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
            return s && s.value !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            return t === !1 ? b.removeAttr(e, n) : Y && G || !Q.test(n) ? e.setAttribute(!G && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
        }
    };
    if (!Y || !G) b.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        },
        set: function (e, t, n) {
            if (!b.nodeName(e, "input")) return z && z.set(e, t, n);
            e.defaultValue = t
        }
    };
    G || (z = b.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && (n === "id" || n === "name" || n === "coords" ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", r === "value" || n === e.getAttribute(r) ? n : t
        }
    }, b.attrHooks.contenteditable = {
        get: z.get,
        set: function (e, t, n) {
            z.set(e, t === "" ? !1 : t, n)
        }
    }, b.each(["width", "height"], function (e, t) {
        b.attrHooks[t] = b.extend(b.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    })), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function (e, n) {
        b.attrHooks[n] = b.extend(b.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r == null ? t : r
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
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), b.each(["radio", "checkbox"], function () {
        b.valHooks[this] = b.extend(b.valHooks[this], {
            set: function (e, t) {
                if (b.isArray(t)) return e.checked = b.inArray(b(e).val(), t) >= 0
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
            if (!y) return;
            r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = b.guid++), (a = y.events) || (a = y.events = {}), (h = y.handle) || (h = y.handle = function (e) {
                return typeof b === i || !! e && b.event.triggered === e.type ? t : b.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(E) || [""], f = n.length;
            while (f--) {
                u = rt.exec(n[f]) || [], v = g = u[1], m = (u[2] || "").split(".").sort(), c = b.event.special[v] || {}, v = (o ? c.delegateType : c.bindType) || v, c = b.event.special[v] || {}, p = b.extend({
                    type: v,
                    origType: g,
                    data: s,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && b.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, l);
                if (!(d = a[v])) {
                    d = a[v] = [], d.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, s, m, h) === !1) e.addEventListener ? e.addEventListener(v, h, !1) : e.attachEvent && e.attachEvent("on" + v, h)
                }
                c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), b.event.global[v] = !0
            }
            e = null
        },
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, v, m = b.hasData(e) && b._data(e);
            if (!m || !(l = m.events)) return;
            t = (t || "").match(E) || [""], f = t.length;
            while (f--) {
                u = rt.exec(t[f]) || [], p = v = u[1], d = (u[2] || "").split(".").sort();
                if (!p) {
                    for (p in l) b.event.remove(e, p + t[f], n, r, !0);
                    continue
                }
                c = b.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, h = l[p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || v === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, d, m.handle) === !1) && b.removeEvent(e, p, m.handle), delete l[p])
            }
            b.isEmptyObject(l) && (delete m.handle, b._removeData(e, "events"))
        },
        trigger: function (n, r, i, o) {
            var u, a, f, l, c, h, p, d = [i || s],
                v = g.call(n, "type") ? n.type : n,
                m = g.call(n, "namespace") ? n.namespace.split(".") : [];
            f = h = i = i || s;
            if (i.nodeType === 3 || i.nodeType === 8) return;
            if (nt.test(v + b.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), a = v.indexOf(":") < 0 && "on" + v, n = n[b.expando] ? n : new b.Event(v, typeof n == "object" && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = r == null ? [n] : b.makeArray(r, [n]), c = b.event.special[v] || {};
            if (!o && c.trigger && c.trigger.apply(i, r) === !1) return;
            if (!o && !c.noBubble && !b.isWindow(i)) {
                l = c.delegateType || v, nt.test(l + v) || (f = f.parentNode);
                for (; f; f = f.parentNode) d.push(f), h = f;
                h === (i.ownerDocument || s) && d.push(h.defaultView || h.parentWindow || e)
            }
            p = 0;
            while ((f = d[p++]) && !n.isPropagationStopped()) n.type = p > 1 ? l : c.bindType || v, u = (b._data(f, "events") || {})[n.type] && b._data(f, "handle"), u && u.apply(f, r), u = a && f[a], u && b.acceptData(f) && u.apply && u.apply(f, r) === !1 && n.preventDefault();
            n.type = v;
            if (!o && !n.isDefaultPrevented() && (!c._default || c._default.apply(i.ownerDocument, r) === !1) && (v !== "click" || !b.nodeName(i, "a")) && b.acceptData(i) && a && i[v] && !b.isWindow(i)) {
                h = i[a], h && (i[a] = null), b.event.triggered = v;
                try {
                    i[v]()
                } catch (y) {}
                b.event.triggered = t, h && (i[a] = h)
            }
            return n.result
        },
        dispatch: function (e) {
            e = b.event.fix(e);
            var n, r, i, s, o, u = [],
                a = d.call(arguments),
                f = (b._data(this, "events") || {})[e.type] || [],
                l = b.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = b.event.handlers.call(this, e, f), n = 0;
            while ((s = u[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function (e, n) {
            var r, i, s, o, u = [],
                a = n.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || e.type !== "click"))
                for (; f != this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (f.disabled !== !0 || e.type !== "click")) {
                        s = [];
                        for (o = 0; o < a; o++) i = n[o], r = i.selector + " ", s[r] === t && (s[r] = i.needsContext ? b(r, this).index(f) >= 0 : b.find(r, this, null, [f]).length), s[r] && s.push(i);
                        s.length && u.push({
                            elem: f,
                            handlers: s
                        })
                    }
            return a < n.length && u.push({
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
            return e.target || (e.target = o.srcElement || s), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, u.filter ? u.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, u = n.button,
                    a = n.fromElement;
                return e.pageX == null && n.clientX != null && (i = e.target.ownerDocument || s, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function () {
                    if (b.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
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
                    if (this === s.activeElement && this.blur) return this.blur(), !1
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
    }, b.Event = function (e, t) {
        if (!(this instanceof b.Event)) return new b.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : st) : this.type = e, t && b.extend(this, t), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0
    }, b.Event.prototype = {
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = it;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = it;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
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
                if (!i || i !== r && !b.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), b.support.submitBubbles || (b.event.special.submit = {
        setup: function () {
            if (b.nodeName(this, "form")) return !1;
            b.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
                r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), b._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            if (b.nodeName(this, "form")) return !1;
            b.event.remove(this, "._submit")
        }
    }), b.support.changeBubbles || (b.event.special.change = {
        setup: function () {
            if (Z.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") b.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), b.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
                });
                return !1
            }
            b.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && b.event.simulate("change", this.parentNode, e, !0)
                }), b._data(t, "changeBubbles", !0))
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
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
                n++ === 0 && s.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && s.removeEventListener(e, r, !0)
            }
        }
    }), b.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (o in e) this.on(o, n, r, e[o], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = st;
            else if (!i) return this;
            return s === 1 && (u = i, i = function (e) {
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
            if (typeof e == "object") {
                for (s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = st), this.each(function () {
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
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return b.event.trigger(e, t, n, !0)
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
            (t ? t.ownerDocument || t : E) !== c && l(t), t = t || c, n = n || [];
            if (!e || typeof e != "string") return n;
            if ((u = t.nodeType) !== 1 && u !== 9) return [];
            if (!p && !r) {
                if (i = K.exec(e))
                    if (o = i[1]) {
                        if (u === 9) {
                            s = t.getElementById(o);
                            if (!s || !s.parentNode) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && g(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (i[2]) return _.apply(n, D.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = i[3]) && S.getByClassName && t.getElementsByClassName) return _.apply(n, D.call(t.getElementsByClassName(o), 0)), n
                    }
                if (S.qsa && !d.test(e)) {
                    h = !0, v = w, m = t, y = u === 9 && e;
                    if (u === 1 && t.nodeName.toLowerCase() !== "object") {
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
                return n === "input" && t.type === e
            }
        }

        function lt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
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
                if (!n || (r = U.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = z.exec(u)) n = r.shift(), s.push({
                    value: n,
                    type: r[0].replace(R, " ")
                }), u = u.slice(n.length);
                for (o in i.filter)(r = V[o].exec(u)) && (!f[o] || (r = f[o](r))) && (n = r.shift(), s.push({
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
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function dt(e, t, n) {
            var i = t.dir,
                s = n && i === "parentNode",
                o = T++;
            return t.first ? function (t, n, r) {
                while (t = t[i])
                    if (t.nodeType === 1 || s) return e(t, n, r)
            } : function (t, n, u) {
                var a, f, l, c = x + " " + o;
                if (u) {
                    while (t = t[i])
                        if (t.nodeType === 1 || s)
                            if (e(t, n, u)) return !0
                } else
                    while (t = t[i])
                        if (t.nodeType === 1 || s) {
                            l = t[w] || (t[w] = {});
                            if ((f = l[i]) && f[0] === c) {
                                if ((a = f[1]) === !0 || a === r) return a === !0
                            } else {
                                f = l[i] = [c], f[1] = e(t, n, u) || r;
                                if (f[1] === !0) return !0
                            }
                        }
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
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function gt(e, t, n, r, i, s) {
            return r && !r[w] && (r = gt(r)), i && !i[w] && (i = gt(i, s)), st(function (s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? mt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = mt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
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
            for (; a < s; a++)
                if (n = i.relative[e[a].type]) h = [dt(vt(h), n)];
                else {
                    n = i.filter[e[a].type].apply(null, e[a].matches);
                    if (n[w]) {
                        r = ++a;
                        for (; r < s; r++)
                            if (i.relative[e[r].type]) break;
                        return gt(a > 1 && vt(h), a > 1 && pt(e.slice(0, a - 1)).replace(R, "$1"), n, a < r && yt(e.slice(a, r)), r < s && yt(e = e.slice(r)), r < s && pt(e))
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
                        E = p != null,
                        S = f,
                        T = u || o && i.find.TAG("*", p && a.parentNode || a),
                        N = x += S == null ? 1 : Math.random() || .1;
                    E && (f = a !== c && a, r = n);
                    for (;
                        (d = T[b]) != null; b++) {
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
                    y += b;
                    if (s && b !== y) {
                        v = 0;
                        while (m = t[v++]) m(w, g, a, l);
                        if (u) {
                            if (y > 0)
                                while (b--)!w[b] && !g[b] && (g[b] = M.call(h));
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
            for (; r < i; r++) ut(e, t[r], n);
            return n
        }

        function Et(e, t, n, r) {
            var s, o, a, f, l, c = ht(e);
            if (!r && c.length === 1) {
                o = c[0] = c[0].slice(0);
                if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !p && i.relative[o[1].type]) {
                    t = i.find.ID(a.matches[0].replace(et, tt), t)[0];
                    if (!t) return n;
                    e = e.slice(o.shift().value.length)
                }
                s = V.needsContext.test(e) ? 0 : o.length;
                while (s--) {
                    a = o[s];
                    if (i.relative[f = a.type]) break;
                    if (l = i.find[f])
                        if (r = l(a.matches[0].replace(et, tt), $.test(o[0].type) && t.parentNode || t)) {
                            o.splice(s, 1), e = r.length && pt(o);
                            if (!e) return _.apply(n, D.call(r, 0)), n;
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
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            }, H = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            j = B.replace("w", "w#"),
            F = "([*^$|!~]?=)",
            I = "\\[" + H + "*(" + B + ")" + H + "*(?:" + F + H + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + j + ")|)|)" + H + "*\\]",
            q = ":(" + B + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            U = new RegExp("^" + H + "*," + H + "*"),
            z = new RegExp("^" + H + "*([\\x20\\t\\r\\n\\f>+~])" + H + "*"),
            W = new RegExp(q),
            X = new RegExp("^" + j + "$"),
            V = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + B + ")['\"]?\\]"),
                TAG: new RegExp("^(" + B.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
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
                return n !== n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
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
            return t ? t.nodeName !== "HTML" : !1
        }, l = ut.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : E;
            if (n === c || n.nodeType !== 9 || !n.documentElement) return c;
            c = n, h = n.documentElement, p = o(n), S.tagNameNoComments = ot(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), S.attributes = ot(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return t !== "boolean" && t !== "string"
            }), S.getByClassName = ot(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
            }), S.getByName = ot(function (e) {
                e.id = w + 0, e.innerHTML = "<a name='" + w + "'></a><div name='" + w + "'></div>", h.insertBefore(e, h.firstChild);
                var t = n.getElementsByName && n.getElementsByName(w).length === 2 + n.getElementsByName(w + 0).length;
                return S.getIdNotName = !n.getElementById(w), h.removeChild(e), t
            }), i.attrHandle = ot(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#"
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
            }), i.find.TAG = S.tagNameNoComments ? function (e, t) {
                if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e)
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, i.find.NAME = S.getByName && function (e, t) {
                if (typeof t.getElementsByName !== L) return t.getElementsByName(name)
            }, i.find.CLASS = S.getByClassName && function (e, t) {
                if (typeof t.getElementsByClassName !== L && !p) return t.getElementsByClassName(e)
            }, v = [], d = [":focus"];
            if (S.qsa = rt(n.querySelectorAll)) ot(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + H + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && d.push("[*^$]=" + H + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            });
            return (S.matchesSelector = rt(m = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function (e) {
                S.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = new RegExp(d.join("|")), v = new RegExp(v.join("|")), g = rt(h.contains) || h.compareDocumentPosition ? function (e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !! r && r.nodeType === 1 && !! (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, y = h.compareDocumentPosition ? function (e, t) {
                var r;
                if (e === t) return a = !0, 0;
                if (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) return r & 1 || e.parentNode && e.parentNode.nodeType === 11 ? e === n || g(E, e) ? -1 : t === n || g(E, t) ? 1 : 0 : r & 4 ? -1 : 1;
                return e.compareDocumentPosition ? -1 : 1
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
            }, a = !1, [0, 0].sort(y), S.detectDuplicates = a, c
        }, ut.matches = function (e, t) {
            return ut(e, null, null, t)
        }, ut.matchesSelector = function (e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(Z, "='$1']");
            if (S.matchesSelector && !p && (!v || !v.test(t)) && !d.test(t)) try {
                var n = m.call(e, t);
                if (n || S.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
            } catch (r) {}
            return ut(t, c, null, [e]).length > 0
        }, ut.contains = function (e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, ut.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== c && l(e), p || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : p || S.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, ut.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ut.uniqueSort = function (e) {
            var t, n = [],
                r = 1,
                i = 0;
            a = !S.detectDuplicates, e.sort(y);
            if (a) {
                for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                while (i--) e.splice(n[i], 1)
            }
            return e
        }, s = ut.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (!i)
                for (; t = e[r]; r++) n += s(t);
            else if (i === 1 || i === 9 || i === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
            } else if (i === 3 || i === 4) return e.nodeValue;
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
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ut.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ut.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && W.test(n) && (t = ht(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return e === "*" ? function () {
                        return !0
                    } : (e = e.replace(et, tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function (e) {
                    var t = N[e + " "];
                    return t || (t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) && N(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ut.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function (e) {
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
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === x && f[1], h = f[0] === x && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [x, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === x) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        y && ((c[w] || (c[w] = {}))[e] = [x, h]);
                                        if (c === t) break
                                    } return h -= i, h === r || h % r === 0 && h / r >= 0
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
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
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
                            if (n = p ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
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
                    return t === "input" && !! e.checked || t === "option" && !! e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) return !1;
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
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function (e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: ct(function () {
                    return [0]
                }),
                last: ct(function (e, t) {
                    return [t - 1]
                }),
                eq: ct(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ct(function (e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function (e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function (e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
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
            if (typeof e != "string") return r = this, this.pushStack(b(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (b.contains(r[t], this)) return !0
            }));
            n = [];
            for (t = 0; t < i; t++) b.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        },
        has: function (e) {
            var t, n = b(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)
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
            return !!e && (typeof e == "string" ? ft.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = ft.test(e) || typeof e != "string" ? b(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
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
            return e ? typeof e == "string" ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
                r = b.merge(this.get(), n);
            return this.pushStack(b.unique(r))
        },
        addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), b.fn.andSelf = b.fn.addBack, b.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
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
            return ot.test(e) || (r = n), r && typeof r == "string" && (i = b.filter(r, i)), i = this.length > 1 && !lt[e] ? b.unique(i) : i, this.length > 1 && ut.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), b.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !b(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        vt = / jQuery\d+="(?:null|\d+)"/g,
        mt = new RegExp("<(?:" + dt + ")[\\s/>]", "i"),
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
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
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
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && this.insertBefore(e, this.firstChild)
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
            for (;
                (n = this[r]) != null; r++)
                if (!e || b.filter(e, [n]).length > 0)!t && n.nodeType === 1 && b.cleanData(jt(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Pt(jt(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && b.cleanData(jt(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && b.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return b.clone(this, e, t)
            })
        },
        html: function (e) {
            return b.access(this, function (e) {
                var n = this[0] || {}, r = 0,
                    i = this.length;
                if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(vt, "") : t;
                if (typeof e == "string" && !St.test(e) && (b.support.htmlSerialize || !mt.test(e)) && (b.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (b.cleanData(jt(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (s) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            var t = b.isFunction(e);
            return !t && typeof e != "string" && (e = b(e).not(this).detach()), this.domManip([e], !0, function (e) {
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
            if (m || !(c <= 1 || typeof v != "string" || b.support.checkClone || !Tt.test(v))) return this.each(function (i) {
                var s = p.eq(i);
                m && (e[0] = v.call(this, i, n ? s.html() : t)), s.domManip(e, n, r)
            });
            if (c) {
                f = b.buildFragment(e, this[0].ownerDocument, !1, this), i = f.firstChild, f.childNodes.length === 1 && (f = i);
                if (i) {
                    n = n && b.nodeName(i, "tr"), u = b.map(jt(f, "script"), _t), o = u.length;
                    for (; l < c; l++) s = f, l !== d && (s = b.clone(s, !0, !0), o && b.merge(u, jt(s, "script"))), r.call(n && b.nodeName(this[l], "table") ? Mt(this[l], "tbody") : this[l], s, l);
                    if (o) {
                        a = u[u.length - 1].ownerDocument, b.map(u, Dt);
                        for (l = 0; l < o; l++) s = u[l], Nt.test(s.type || "") && !b._data(s, "globalEval") && b.contains(a, s) && (s.src ? b.ajax({
                            url: s.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : b.globalEval((s.text || s.textContent || s.innerHTML || "").replace(kt, "")))
                    }
                    f = i = null
                }
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
            for (; r <= o; r++) n = r === o ? this : this.clone(!0), b(s[r])[t](n), p.apply(i, n.get());
            return this.pushStack(i)
        }
    }), b.extend({
        clone: function (e, t, n) {
            var r, i, s, o, u, a = b.contains(e.ownerDocument, e);
            b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (Ot.innerHTML = e.outerHTML, Ot.removeChild(s = Ot.firstChild));
            if ((!b.support.noCloneEvent || !b.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !b.isXMLDoc(e)) {
                r = jt(s), u = jt(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Bt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || jt(e), r = r || jt(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) Ht(i, r[o])
                } else Ht(e, s);
            return r = jt(s, "script"), r.length > 0 && Pt(r, !a && jt(e, "script")), r = u = i = null, s
        },
        buildFragment: function (e, t, n, r) {
            var i, s, o, u, a, f, l, c = e.length,
                h = pt(t),
                p = [],
                d = 0;
            for (; d < c; d++) {
                s = e[d];
                if (s || s === 0)
                    if (b.type(s) === "object") b.merge(p, s.nodeType ? [s] : s);
                    else if (!Et.test(s)) p.push(t.createTextNode(s));
                else {
                    u = u || h.appendChild(t.createElement("div")), a = (bt.exec(s) || ["", ""])[1].toLowerCase(), l = Lt[a] || Lt._default, u.innerHTML = l[1] + s.replace(yt, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !b.support.leadingWhitespace && gt.test(s) && p.push(t.createTextNode(gt.exec(s)[0]));
                    if (!b.support.tbody) {
                        s = a === "table" && !wt.test(s) ? u.firstChild : l[1] === "<table>" && !wt.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) b.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    b.merge(p, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = h.lastChild
                }
            }
            u && h.removeChild(u), b.support.appendChecked || b.grep(jt(p, "input"), Ft), d = 0;
            while (s = p[d++]) {
                if (r && b.inArray(s, r) !== -1) continue;
                o = b.contains(s.ownerDocument, s), u = jt(h.appendChild(s), "script"), o && Pt(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) Nt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, h
        },
        cleanData: function (e, t) {
            var n, r, s, o, u = 0,
                a = b.expando,
                f = b.cache,
                c = b.support.deleteExpando,
                h = b.event.special;
            for (;
                (n = e[u]) != null; u++)
                if (t || b.acceptData(n)) {
                    s = n[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (r in o.events) h[r] ? b.event.remove(n, r) : b.removeEvent(n, r, o.handle);
                        f[s] && (delete f[s], c ? delete n[a] : typeof n.removeAttribute !== i ? n.removeAttribute(a) : n[a] = null, l.push(s))
                    }
                }
        }
    });
    var It, qt, Rt, Ut = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Vt = /^margin/,
        $t = new RegExp("^(" + w + ")(.*)$", "i"),
        Jt = new RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Kt = new RegExp("^([+-])=(" + w + ")", "i"),
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
                    s = qt(e), i = n.length;
                    for (; u < i; u++) o[n[u]] = b.css(e, n[u], !1, s);
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
            var t = typeof e == "boolean";
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
                        return n === "" ? "1" : n
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
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = b.camelCase(n),
                f = e.style;
            n = b.cssProps[a] || (b.cssProps[a] = tn(f, a)), u = b.cssHooks[n] || b.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = Kt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(b.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !b.cssNumber[a] && (r += "px"), !b.support.clearCloneStyle && r === "" && n.indexOf("background") === 0 && (f[n] = "inherit");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function (e, n, r, i) {
            var s, o, u, a = b.camelCase(n);
            return n = b.cssProps[a] || (b.cssProps[a] = tn(e.style, a)), u = b.cssHooks[n] || b.cssHooks[a], u && "get" in u && (o = u.get(e, !0, r)), o === t && (o = Rt(e, n, i)), o === "normal" && n in Yt && (o = Yt[n]), r === "" || r ? (s = parseFloat(o), r === !0 || b.isNumeric(s) ? s || 0 : o) : o
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
        return u && (a === "" && !b.contains(e.ownerDocument, e) && (a = b.style(e, n)), Jt.test(a) && Vt.test(n) && (i = f.width, s = f.minWidth, o = f.maxWidth, f.minWidth = f.maxWidth = f.width = a, a = u.width, f.width = i, f.minWidth = s, f.maxWidth = o)), a
    }) : s.documentElement.currentStyle && (qt = function (e) {
        return e.currentStyle
    }, Rt = function (e, n, r) {
        var i, s, o, u = r || qt(e),
            a = u ? u[n] : t,
            f = e.style;
        return a == null && f && f[n] && (a = f[n]), Jt.test(a) && !Wt.test(n) && (i = f.left, s = e.runtimeStyle, o = s && s.left, o && (s.left = e.currentStyle.left), f.left = n === "fontSize" ? "1em" : a, a = f.pixelLeft + "px", f.left = i, o && (s.left = o)), a === "" ? "auto" : a
    }), b.each(["height", "width"], function (e, t) {
        b.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return e.offsetWidth === 0 && Xt.test(b.css(e, "display")) ? b.swap(e, Gt, function () {
                    return un(e, t, r)
                }) : un(e, t, r)
            },
            set: function (e, n, r) {
                var i = r && qt(e);
                return sn(e, n, r ? on(e, t, r, b.support.boxSizing && b.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), b.support.opacity || (b.cssHooks.opacity = {
        get: function (e, t) {
            return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = b.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && b.trim(s.replace(Ut, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = Ut.test(s) ? s.replace(Ut, i) : s + " " + i
        }
    }), b(function () {
        b.support.reliableMarginRight || (b.cssHooks.marginRight = {
            get: function (e, t) {
                if (t) return b.swap(e, {
                    display: "inline-block"
                }, Rt, [e, "marginRight"])
            }
        }), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function (e, t) {
            b.cssHooks[t] = {
                get: function (e, n) {
                    if (n) return n = Rt(e, t), Jt.test(n) ? b(e).position()[t] + "px" : n
                }
            }
        })
    }), b.expr && b.expr.filters && (b.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !b.support.reliableHiddenOffsets && (e.style && e.style.display || b.css(e, "display")) === "none"
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
                    i = {}, s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + Zt[r] + t] = s[r] || s[r - 2] || s[0];
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
                return n == null ? null : b.isArray(n) ? b.map(n, function (e) {
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
                t = b.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional);
        if (b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function () {
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
        Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
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
        if (typeof e != "string" && kn) return kn.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), b.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (o = "POST"), u.length > 0 && b.ajax({
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
                if (w === 2) return;
                w = 2, u && clearTimeout(u), f = t, o = i || "", x.readyState = e > 0 ? 4 : 0, r && (E = Hn(c, x, r));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (b.lastModified[s] = S), S = x.getResponseHeader("etag"), S && (b.etag[s] = S)), e === 204 ? (l = !0, T = "nocontent") : e === 304 ? (l = !0, T = "notmodified") : (l = Bn(c, E), T = l.state, g = l.data, y = l.error, l = !y);
                else {
                    y = T;
                    if (e || !T) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [g, T, x]) : d.rejectWith(h, [x, T, y]), x.statusCode(m), m = t, a && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, c, l ? g : y]), v.fireWith(h, [x, T]), a && (p.trigger("ajaxComplete", [x, c]), --b.active || b.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
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
                        if (w === 2) {
                            if (!l) {
                                l = {};
                                while (t = Sn.exec(o)) l[t[1].toLowerCase()] = t[2]
                            }
                            t = l[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return w === 2 ? o : null
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
                            if (w < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || S;
                        return f && f.abort(t), N(0, t), this
                    }
                };
            d.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, c.url = ((e || c.url || gn) + "").replace(wn, "").replace(Nn, mn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = b.trim(c.dataType || "*").toLowerCase().match(E) || [""], c.crossDomain == null && (r = Cn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (mn[3] || (mn[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = b.param(c.data, c.traditional)), Dn(Ln, c, n, x);
            if (w === 2) return x;
            a = c.global, a && b.active++ === 0 && b.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Tn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (bn.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = En.test(s) ? s.replace(En, "$1_=" + yn++) : s + (bn.test(s) ? "&" : "?") + "_=" + yn++)), c.ifModified && (b.lastModified[s] && x.setRequestHeader("If-Modified-Since", b.lastModified[s]), b.etag[s] && x.setRequestHeader("If-None-Match", b.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + On + "; q=0.01" : "") : c.accepts["*"]);
            for (i in c.headers) x.setRequestHeader(i, c.headers[i]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && w !== 2) {
                S = "abort";
                for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[i](c[i]);
                f = Dn(An, c, n, x);
                if (!f) N(-1, "No Transport");
                else {
                    x.readyState = 1, a && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, f.send(g, N)
                    } catch (T) {
                        if (!(w < 2)) throw T;
                        N(-1, T)
                    }
                }
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
                        if (t || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")
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
        var s, o, u, a = n.jsonp !== !1 && (Fn.test(n.url) ? "url" : typeof n.data == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Fn.test(n.data) && "data");
        if (a || n.dataTypes[0] === "jsonp") return s = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a ? n[a] = n[a].replace(Fn, "$1" + s) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || b.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", o = e[s], e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, jn.push(s)), u && b.isFunction(o) && o(u[0]), u = o = t
        }), "script"
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
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (u in n.xhrFields) a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i) a.setRequestHeader(u, i[u])
                    } catch (f) {}
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = b.noop, Un && delete In[o]);
                                if (i) a.readyState !== 4 && a.abort();
                                else {
                                    c = {}, u = a.status, f = a.getAllResponseHeaders(), typeof a.responseText == "string" && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (h) {
                                        l = ""
                                    }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (p) {
                            i || s(-1, p)
                        }
                        c && s(u, l, c, f)
                    }, n.async ? a.readyState === 4 ? setTimeout(r) : (o = ++Rn, Un && (In || (In = {}, b(e).unload(Un)), In[o] = r), a.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Vn, $n = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
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
                        n = +s[2], r = s[3] || (b.cssNumber[e] ? "" : "px");
                        if (r !== "px" && u) {
                            u = b.css(i.elem, e, !0) || n || 1;
                            do a = a || ".5", u /= a, b.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
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
            for (; r < i; r++) n = e[r], Gn[n] = Gn[n] || [], Gn[n].unshift(t)
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
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !! e.elem.style && e.elem.style[e.prop] != null ? (t = b.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function (e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (e.elem.style[b.cssProps[e.prop]] != null || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, b.each(["toggle", "show", "hide"], function (e, t) {
        var n = b.fn[t];
        b.fn[t] = function (e, r, i) {
            return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
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
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = b.timers,
                    o = b._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Kn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
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
                n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this);
                for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
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
        var r = e && typeof e == "object" ? b.extend({}, e) : {
            complete: n || !n && t || b.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !b.isFunction(t) && t
        };
        r.duration = b.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
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
        Xn = b.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
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
        if (!u) return;
        return n = u.documentElement, b.contains(n, o) ? (typeof o.getBoundingClientRect !== i && (s = o.getBoundingClientRect()), r = sr(u), {
            top: s.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: s.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : s
    }, b.offset = {
        setOffset: function (e, t, n) {
            var r = b.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = b(e),
                s = i.offset(),
                o = b.css(e, "top"),
                u = b.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && b.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), b.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, b.fn.extend({
        position: function () {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
            return b.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - b.css(r, "marginTop", !0),
                left: t.left - n.left - b.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s.documentElement;
                while (e && !b.nodeName(e, "html") && b.css(e, "position") === "static") e = e.offsetParent;
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
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? b(o).scrollLeft() : s, r ? s : b(o).scrollTop()) : e[i] = s
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
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return b.access(this, function (n, r, i) {
                    var s;
                    return b.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? b.css(n, r, u) : b.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = b, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return b
    })
})(window),
function (e, t) {
    var n = function () {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function (e) {
            return e.namespace === "rails"
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function (t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var i, s, o, u, a, f, l, c;
            if (r.fire(n, "ajax:before")) {
                u = n.data("cross-domain"), a = u === t ? null : u, f = n.data("with-credentials") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (n.is("form")) {
                    i = n.attr("method"), s = n.attr("action"), o = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (o.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), s = n.data("url"), o = n.serialize(), n.data("params") && (o = o + "&" + n.data("params"))) : (i = n.data("method"), s = r.href(n), o = n.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function (e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function (e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    crossDomain: a
                }, f && (c.xhrFields = {
                    withCredentials: f
                }), s && (c.url = s);
                var p = r.ajax(c);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function (n) {
            var i = r.href(n),
                s = n.data("method"),
                o = n.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function (t) {
            t.find(r.disableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(r.enableSelector).each(function () {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t = e.data("confirm"),
                n = !1,
                i;
            return t ? (r.fire(e, "confirm") && (n = r.confirm(t), i = r.fire(e, "confirm:complete", [n])), n && i) : !0
        },
        blankInputs: function (t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function () {
                s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function (e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (n, r) {
            var i = n.data("events"),
                s = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function (e, t) {
                if (typeof t.handler == "function") return s = t.handler(r)
            }), s
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function () {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function (n) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        i.is(r.linkDisableSelector) && r.disableElement(i);
        if (i.data("remote") !== t) {
            if ((n.metaKey || n.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = r.handleRemote(i);
            return u === !1 ? r.enableElement(i) : u.error(function () {
                r.enableElement(i)
            }), !1
        }
        if (i.data("method")) return r.handleMethod(i), !1
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function (n) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = r.blankInputs(i, r.requiredInputSelector),
            u = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (o && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [o])) return r.stopEverything(n);
        if (s) {
            if (u) {
                setTimeout(function () {
                    r.disableFormElements(i)
                }, 13);
                var a = r.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function () {
                    r.enableFormElements(i)
                }, 13), a
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function () {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            s = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function () {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery),
function (e) {
    "use strict";
    e.fn.bjqs = function (t) {
        var n = {
            width: 700,
            height: 300,
            animtype: "fade",
            animduration: 450,
            animspeed: 4e3,
            automatic: !0,
            showcontrols: !0,
            centercontrols: !0,
            nexttext: "Next",
            prevtext: "Prev",
            showmarkers: !0,
            centermarkers: !0,
            keyboardnav: !0,
            hoverpause: !0,
            usecaptions: !0,
            randomstart: !1,
            responsive: !1
        }, r = e.extend({}, n, t),
            i = this,
            s = i.find("ul.bjqs"),
            o = s.children("li"),
            u = null,
            a = null,
            f = null,
            l = null,
            c = null,
            h = null,
            p = null,
            d = null,
            v = {
                slidecount: o.length,
                animating: !1,
                paused: !1,
                currentslide: 1,
                nextslide: 0,
                currentindex: 0,
                nextindex: 0,
                interval: null
            }, m = {
                width: null,
                height: null,
                ratio: null
            }, g = {
                fwd: "forward",
                prev: "previous"
            }, y = function () {
                o.addClass("bjqs-slide"), r.responsive ? b() : E(), v.slidecount > 1 && (r.randomstart && L(), r.showcontrols && x(), r.showmarkers && T(), r.keyboardnav && N(), r.hoverpause && r.automatic && C(), r.animtype === "slide" && S()), r.usecaptions && k(), r.animtype === "slide" && !r.randomstart && (v.currentindex = 1, v.currentslide = 2), s.show(), o.eq(v.currentindex).show(), r.automatic && (v.interval = setInterval(function () {
                    O(g.fwd, !1)
                }, r.animspeed))
            }, b = function () {
                m.width = i.outerWidth(), m.ratio = m.width / r.width, m.height = r.height * m.ratio, r.animtype === "fade" && (o.css({
                    height: r.height,
                    width: "100%"
                }), o.children("img").css({
                    height: r.height,
                    width: "100%"
                }), s.css({
                    height: r.height,
                    width: "100%"
                }), i.css({
                    height: r.height,
                    "max-width": r.width,
                    position: "relative"
                }), m.width < r.width && (o.css({
                    height: m.height
                }), o.children("img").css({
                    height: m.height
                }), s.css({
                    height: m.height
                }), i.css({
                    height: m.height
                })), e(window).resize(function () {
                    m.width = i.outerWidth(), m.ratio = m.width / r.width, m.height = r.height * m.ratio, o.css({
                        height: m.height
                    }), o.children("img").css({
                        height: m.height
                    }), s.css({
                        height: m.height
                    }), i.css({
                        height: m.height
                    })
                })), r.animtype === "slide" && (o.css({
                    height: r.height,
                    width: r.width
                }), o.children("img").css({
                    height: r.height,
                    width: r.width
                }), s.css({
                    height: r.height,
                    width: r.width * r.slidecount
                }), i.css({
                    height: r.height,
                    "max-width": r.width,
                    position: "relative"
                }), m.width < r.width && (o.css({
                    height: m.height
                }), o.children("img").css({
                    height: m.height
                }), s.css({
                    height: m.height
                }), i.css({
                    height: m.height
                })), e(window).resize(function () {
                    m.width = i.outerWidth(), m.ratio = m.width / r.width, m.height = r.height * m.ratio, o.css({
                        height: m.height,
                        width: m.width
                    }), o.children("img").css({
                        height: m.height,
                        width: m.width
                    }), s.css({
                        height: m.height,
                        width: m.width * r.slidecount
                    }), i.css({
                        height: m.height
                    }), h.css({
                        height: m.height,
                        width: m.width
                    }), w(function () {
                        O(!1, v.currentslide)
                    }, 200, "some unique string")
                }))
            }, w = function () {
                var e = {};
                return function (t, n, r) {
                    r || (r = "Don't call this twice without a uniqueId"), e[r] && clearTimeout(e[r]), e[r] = setTimeout(t, n)
                }
            }(),
            E = function () {
                o.css({
                    height: r.height,
                    width: r.width
                }), s.css({
                    height: r.height,
                    width: r.width
                }), i.css({
                    height: r.height,
                    width: r.width,
                    position: "relative"
                })
            }, S = function () {
                p = o.eq(0).clone(), d = o.eq(v.slidecount - 1).clone(), p.attr({
                    "data-clone": "last",
                    "data-slide": 0
                }).appendTo(s).show(), d.attr({
                    "data-clone": "first",
                    "data-slide": 0
                }).prependTo(s).show(), o = s.children("li"), v.slidecount = o.length, h = e('<div class="bjqs-wrapper"></div>'), r.responsive && m.width < r.width ? (h.css({
                    width: m.width,
                    height: m.height,
                    overflow: "hidden",
                    position: "relative"
                }), s.css({
                    width: m.width * (v.slidecount + 2),
                    left: -m.width * v.currentslide
                })) : (h.css({
                    width: r.width,
                    height: r.height,
                    overflow: "hidden",
                    position: "relative"
                }), s.css({
                    width: r.width * (v.slidecount + 2),
                    left: -r.width * v.currentslide
                })), o.css({
                    "float": "left",
                    position: "relative",
                    display: "list-item"
                }), h.prependTo(i), s.appendTo(h)
            }, x = function () {
                u = e('<ul class="bjqs-controls"></ul>'), a = e('<li class="bjqs-next"><a href="#" data-direction="' + g.fwd + '">' + r.nexttext + "</a></li>"), f = e('<li class="bjqs-prev"><a href="#" data-direction="' + g.prev + '">' + r.prevtext + "</a></li>"), u.on("click", "a", function (t) {
                    t.preventDefault();
                    var n = e(this).attr("data-direction");
                    v.animating || (n === g.fwd && O(g.fwd, !1), n === g.prev && O(g.prev, !1))
                }), f.appendTo(u), a.appendTo(u), u.appendTo(i);
                if (r.centercontrols) {
                    u.addClass("v-centered");
                    var t = (i.height() - a.children("a").outerHeight()) / 2,
                        n = t / r.height * 100,
                        s = n + "%";
                    a.find("a").css("top", s), f.find("a").css("top", s)
                }
            }, T = function () {
                l = e('<ol class="bjqs-markers"></ol>'), e.each(o, function (t, n) {
                    var i = t + 1,
                        s = t + 1;
                    r.animtype === "slide" && (s = t + 2);
                    var o = e('<li><a href="#">' + i + "</a></li>");
                    i === v.currentslide && o.addClass("active-marker"), o.on("click", "a", function (e) {
                        e.preventDefault(), !v.animating && v.currentslide !== s && O(!1, s)
                    }), o.appendTo(l)
                }), l.appendTo(i), c = l.find("li");
                if (r.centermarkers) {
                    l.addClass("h-centered");
                    var t = (r.width - l.width()) / 2;
                    l.css("left", t)
                }
            }, N = function () {
                e(document).keyup(function (e) {
                    v.paused || (clearInterval(v.interval), v.paused = !0), v.animating || (e.keyCode === 39 ? (e.preventDefault(), O(g.fwd, !1)) : e.keyCode === 37 && (e.preventDefault(), O(g.prev, !1))), v.paused && r.automatic && (v.interval = setInterval(function () {
                        O(g.fwd)
                    }, r.animspeed), v.paused = !1)
                })
            }, C = function () {
                i.hover(function () {
                    v.paused || (clearInterval(v.interval), v.paused = !0)
                }, function () {
                    v.paused && (v.interval = setInterval(function () {
                        O(g.fwd, !1)
                    }, r.animspeed), v.paused = !1)
                })
            }, k = function () {
                e.each(o, function (t, n) {
                    var r = e(n).children("img:first-child").attr("title");
                    r || (r = e(n).children("a").find("img:first-child").attr("title")), r && (r = e('<p class="bjqs-caption">' + r + "</p>"), r.appendTo(e(n)))
                })
            }, L = function () {
                var e = Math.floor(Math.random() * v.slidecount) + 1;
                v.currentslide = e, v.currentindex = e - 1
            }, A = function (e) {
                e === g.fwd ? o.eq(v.currentindex).next().length ? (v.nextindex = v.currentindex + 1, v.nextslide = v.currentslide + 1) : (v.nextindex = 0, v.nextslide = 1) : o.eq(v.currentindex).prev().length ? (v.nextindex = v.currentindex - 1, v.nextslide = v.currentslide - 1) : (v.nextindex = v.slidecount - 1, v.nextslide = v.slidecount)
            }, O = function (e, t) {
                if (!v.animating) {
                    v.animating = !0, t ? (v.nextslide = t, v.nextindex = t - 1) : A(e), r.animtype === "fade" && (r.showmarkers && (c.removeClass("active-marker"), c.eq(v.nextindex).addClass("active-marker")), o.eq(v.currentindex).fadeOut(r.animduration), o.eq(v.nextindex).fadeIn(r.animduration, function () {
                        v.animating = !1, v.currentslide = v.nextslide, v.currentindex = v.nextindex
                    }));
                    if (r.animtype === "slide") {
                        if (r.showmarkers) {
                            var n = v.nextindex - 1;
                            n === v.slidecount - 2 ? n = 0 : n === -1 && (n = v.slidecount - 3), c.removeClass("active-marker"), c.eq(n).addClass("active-marker")
                        }
                        r.responsive && m.width < r.width ? v.slidewidth = m.width : v.slidewidth = r.width, s.animate({
                            left: -v.nextindex * v.slidewidth
                        }, r.animduration, function () {
                            v.currentslide = v.nextslide, v.currentindex = v.nextindex, o.eq(v.currentindex).attr("data-clone") === "last" ? (s.css({
                                left: -v.slidewidth
                            }), v.currentslide = 2, v.currentindex = 1) : o.eq(v.currentindex).attr("data-clone") === "first" && (s.css({
                                left: -v.slidewidth * (v.slidecount - 2)
                            }), v.currentslide = v.slidecount - 1, v.currentindex = v.slidecount - 2), v.animating = !1
                        })
                    }
                }
            };
        y()
    }
}(jQuery),
function (e) {
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function (t) {
            for (var r = 0, i;
                (i = t[r]) != null; r++) try {
                e(i).triggerHandler("remove")
            } catch (s) {}
            n(t)
        }
    } else {
        var r = e.fn.remove;
        e.fn.remove = function (t, n) {
            return this.each(function () {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), r.call(e(this), t, n)
            })
        }
    }
    e.widget = function (t, n, r) {
        var i = t.split(".")[0],
            s;
        t = t.split(".")[1], s = i + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][s] = function (n) {
            return !!e.data(n, t)
        }, e[i] = e[i] || {}, e[i][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var o = new n;
        o.options = e.extend(!0, {}, o.options), e[i][t].prototype = e.extend(!0, o, {
            namespace: i,
            widgetName: t,
            widgetEventPrefix: e[i][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, r), e.widget.bridge(t, e[i][t])
    }, e.widget.bridge = function (n, r) {
        e.fn[n] = function (i) {
            var s = typeof i == "string",
                o = Array.prototype.slice.call(arguments, 1),
                u = this;
            return i = !s && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, s && i.charAt(0) === "_" ? u : (s ? this.each(function () {
                var r = e.data(this, n),
                    s = r && e.isFunction(r[i]) ? r[i].apply(r, o) : r;
                if (s !== r && s !== t) return u = s, !1
            }) : this.each(function () {
                var t = e.data(this, n);
                t ? t.option(i || {})._init() : e.data(this, n, new r(i, this))
            }), u)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var r = this;
            this.element.bind("remove." + this.widgetName, function () {
                r.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n;
            if (arguments.length === 0) return e.extend({}, this.options);
            if (typeof n == "string") {
                if (r === t) return this.options[n];
                i = {}, i[n] = r
            }
            return this._setOptions(i), this
        },
        _setOptions: function (t) {
            var n = this;
            return e.each(t, function (e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.call(this.element[0], n, r) === !1 || n.isDefaultPrevented())
        }
    }
}),
function (e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], e) : e(window.jQuery)
}(function (e) {
    "use strict";
    var t = 0;
    e.ajaxTransport("iframe", function (n) {
        if (n.async && (n.type === "POST" || n.type === "GET")) {
            var r, i;
            return {
                send: function (s, o) {
                    r = e('<form style="display:none;"></form>'), i = e('<iframe src="javascript:false;" name="iframe-transport-' + (t += 1) + '"></iframe>').bind("load", function () {
                        var t, s = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                        i.unbind("load").bind("load", function () {
                            var t;
                            try {
                                t = i.contents();
                                if (!t.length || !t[0].firstChild) throw new Error
                            } catch (n) {
                                t = undefined
                            }
                            o(200, "success", {
                                iframe: t
                            }), e('<iframe src="javascript:false;"></iframe>').appendTo(r), r.remove()
                        }), r.prop("target", i.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function (t, n) {
                            e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(r)
                        }), n.fileInput && n.fileInput.length && n.type === "POST" && (t = n.fileInput.clone(), n.fileInput.after(function (e) {
                            return t[e]
                        }), n.paramName && n.fileInput.each(function (t) {
                            e(this).prop("name", s[t] || n.paramName)
                        }), r.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")), r.submit(), t && t.length && n.fileInput.each(function (n, r) {
                            var i = e(t[n]);
                            e(r).prop("name", i.prop("name")), i.replaceWith(r)
                        })
                    }), r.append(i).appendTo(document.body)
                },
                abort: function () {
                    i && i.unbind("load").prop("src", "javascript".concat(":false;")), r && r.remove()
                }
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function (t) {
                return e(t[0].body).text()
            },
            "iframe json": function (t) {
                return e.parseJSON(e(t[0].body).text())
            },
            "iframe html": function (t) {
                return e(t[0].body).html()
            },
            "iframe script": function (t) {
                return e.globalEval(e(t[0].body).text())
            }
        }
    })
}),
function (e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
}(function (e) {
    "use strict";
    e.support.xhrFileUpload = !! window.XMLHttpRequestUpload && !! window.FileReader, e.support.xhrFormDataFileUpload = !! window.FormData, e.widget("blueimp.fileupload", {
        options: {
            namespace: undefined,
            dropZone: e(document),
            fileInput: undefined,
            replaceFileInput: !0,
            paramName: undefined,
            singleFileUploads: !0,
            limitMultiFileUploads: undefined,
            sequentialUploads: !1,
            limitConcurrentUploads: undefined,
            forceIframeTransport: !1,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: !0,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: !0,
            formData: function (e) {
                return e.serializeArray()
            },
            add: function (e, t) {
                t.submit()
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _refreshOptionsList: ["namespace", "dropZone", "fileInput", "multipart", "forceIframeTransport"],
        _isXHRUpload: function (t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function (t) {
            var n;
            return typeof t.formData == "function" ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : t.formData ? (n = [], e.each(t.formData, function (e, t) {
                n.push({
                    name: e,
                    value: t
                })
            }), n) : []
        },
        _getTotal: function (t) {
            var n = 0;
            return e.each(t, function (e, t) {
                n += t.size || 1
            }), n
        },
        _onProgress: function (e, t) {
            if (e.lengthComputable) {
                var n = t.total || this._getTotal(t.files),
                    r = parseInt(e.loaded / e.total * (t.chunkSize || n), 10) + (t.uploadedBytes || 0);
                this._loaded += r - (t.loaded || t.uploadedBytes || 0), t.lengthComputable = !0, t.loaded = r, t.total = n, this._trigger("progress", e, t), this._trigger("progressall", e, {
                    lengthComputable: !0,
                    loaded: this._loaded,
                    total: this._total
                })
            }
        },
        _initProgressListener: function (t) {
            var n = this,
                r = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            r.upload && (e(r.upload).bind("progress", function (e) {
                var r = e.originalEvent;
                e.lengthComputable = r.lengthComputable, e.loaded = r.loaded, e.total = r.total, n._onProgress(e, t)
            }), t.xhr = function () {
                return r
            })
        },
        _initXHRData: function (t) {
            var n, r = t.files[0],
                i = t.multipart || !e.support.xhrFileUpload,
                s = t.paramName[0];
            if (!i || t.blob) t.headers = e.extend(t.headers, {
                "X-File-Name": r.name,
                "X-File-Type": r.type,
                "X-File-Size": r.size
            }), t.blob ? i || (t.contentType = "application/octet-stream", t.data = t.blob) : (t.contentType = r.type, t.data = r);
            i && e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                name: s,
                value: t.blob
            }) : e.each(t.files, function (e, r) {
                n.push({
                    name: t.paramName[e] || s,
                    value: r
                })
            })) : (t.formData instanceof FormData ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function (e, t) {
                n.append(t.name, t.value)
            })), t.blob ? n.append(s, t.blob, r.name) : e.each(t.files, function (e, r) {
                r instanceof Blob && n.append(t.paramName[e] || s, r, r.name)
            })), t.data = n), t.blob = null
        },
        _initIframeSettings: function (t) {
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && e("<a></a>").prop("href", t.url).prop("host") !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function (e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e, "iframe")
        },
        _getParamName: function (t) {
            var n = e(t.fileInput),
                r = t.paramName;
            return r ? e.isArray(r) || (r = [r]) : (r = [], n.each(function () {
                var t = e(this),
                    n = t.prop("name") || "files[]",
                    i = (t.prop("files") || [1]).length;
                while (i) r.push(n), i -= 1
            }), r.length || (r = [n.prop("name") || "files[]"])), r
        },
        _initFormSettings: function (t) {
            if (!t.form || !t.form.length) t.form = e(t.fileInput.prop("form"));
            t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || t.form.prop("method") || "").toUpperCase(), t.type !== "POST" && t.type !== "PUT" && (t.type = "POST")
        },
        _getAJAXSettings: function (t) {
            var n = e.extend({}, this.options, t);
            return this._initFormSettings(n), this._initDataSettings(n), n
        },
        _enhancePromise: function (e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function (t, n, r) {
            var i = e.Deferred(),
                s = i.promise();
            return n = n || this.options.context || s, t === !0 ? i.resolveWith(n, r) : t === !1 && i.rejectWith(n, r), s.abort = i.promise, this._enhancePromise(s)
        },
        _chunkedUpload: function (t, n) {
            var r = this,
                i = t.files[0],
                s = i.size,
                o = t.uploadedBytes = t.uploadedBytes || 0,
                u = t.maxChunkSize || s,
                a = i.webkitSlice || i.mozSlice || i.slice,
                f, l, c, h;
            return !(this._isXHRUpload(t) && a && (o || u < s)) || t.data ? !1 : n ? !0 : o >= s ? (i.error = "uploadedBytes", this._getXHRPromise(!1, t.context, [null, "error", i.error])) : (l = Math.ceil((s - o) / u), f = function (n) {
                return n ? f(n -= 1).pipe(function () {
                    var s = e.extend({}, t);
                    return s.blob = a.call(i, o + n * u, o + (n + 1) * u), s.chunkSize = s.blob.size, r._initXHRData(s), r._initProgressListener(s), c = (e.ajax(s) || r._getXHRPromise(!1, s.context)).done(function () {
                        s.loaded || r._onProgress(e.Event("progress", {
                            lengthComputable: !0,
                            loaded: s.chunkSize,
                            total: s.chunkSize
                        }), s), t.uploadedBytes = s.uploadedBytes += s.chunkSize
                    }), c
                }) : r._getXHRPromise(!0, t.context)
            }, h = f(l), h.abort = function () {
                return c.abort()
            }, this._enhancePromise(h))
        },
        _beforeSend: function (e, t) {
            this._active === 0 && this._trigger("start"), this._active += 1, this._loaded += t.uploadedBytes || 0, this._total += this._getTotal(t.files)
        },
        _onDone: function (t, n, r, i) {
            this._isXHRUpload(i) || this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: 1,
                total: 1
            }), i), i.result = t, i.textStatus = n, i.jqXHR = r, this._trigger("done", null, i)
        },
        _onFail: function (e, t, n, r) {
            r.jqXHR = e, r.textStatus = t, r.errorThrown = n, this._trigger("fail", null, r), r.recalculateProgress && (this._loaded -= r.loaded || r.uploadedBytes || 0, this._total -= r.total || this._getTotal(r.files))
        },
        _onAlways: function (e, t, n, r) {
            this._active -= 1, r.textStatus = t, n && n.always ? (r.jqXHR = n, r.result = e) : (r.jqXHR = e, r.errorThrown = n), this._trigger("always", null, r), this._active === 0 && (this._trigger("stop"), this._loaded = this._total = 0)
        },
        _onSend: function (t, n) {
            var r = this,
                i, s, o, u = r._getAJAXSettings(n),
                a = function (n, s) {
                    return r._sending += 1, i = i || (n !== !1 && r._trigger("send", t, u) !== !1 && (r._chunkedUpload(u) || e.ajax(u)) || r._getXHRPromise(!1, u.context, s)).done(function (e, t, n) {
                        r._onDone(e, t, n, u)
                    }).fail(function (e, t, n) {
                        r._onFail(e, t, n, u)
                    }).always(function (e, t, n) {
                        r._sending -= 1, r._onAlways(e, t, n, u);
                        if (u.limitConcurrentUploads && u.limitConcurrentUploads > r._sending) {
                            var i = r._slots.shift();
                            while (i) {
                                if (!i.isRejected()) {
                                    i.resolve();
                                    break
                                }
                                i = r._slots.shift()
                            }
                        }
                    }), i
                };
            return this._beforeSend(t, u), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (s = e.Deferred(), this._slots.push(s), o = s.pipe(a)) : o = this._sequence = this._sequence.pipe(a, a), o.abort = function () {
                var e = [undefined, "abort", "abort"];
                return i ? i.abort() : (s && s.rejectWith(e), a(!1, e))
            }, this._enhancePromise(o)) : a()
        },
        _onAdd: function (t, n) {
            var r = this,
                i = !0,
                s = e.extend({}, this.options, n),
                o = s.limitMultiFileUploads,
                u = this._getParamName(s),
                a, f, l, c;
            if (!s.singleFileUploads && !o || !this._isXHRUpload(s)) l = [n.files], a = [u];
            else if (!s.singleFileUploads && o) {
                l = [], a = [];
                for (c = 0; c < n.files.length; c += o) l.push(n.files.slice(c, c + o)), f = u.slice(c, c + o), f.length || (f = u), a.push(f)
            } else a = u;
            return n.originalFiles = n.files, e.each(l || n.files, function (s, o) {
                var u = e.extend({}, n);
                return u.files = l ? o : [o], u.paramName = a[s], u.submit = function () {
                    return u.jqXHR = this.jqXHR = r._trigger("submit", t, this) !== !1 && r._onSend(t, this), this.jqXHR
                }, i = r._trigger("add", t, u)
            }), i
        },
        _normalizeFile: function (e, t) {
            t.name === undefined && t.size === undefined && (t.name = t.fileName, t.size = t.fileSize)
        },
        _replaceFileInput: function (t) {
            var n = t.clone(!0);
            e("<form></form>").append(n)[0].reset(), t.after(n).detach(), e.cleanData(t.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, r) {
                return r === t[0] ? n[0] : r
            }), t[0] === this.element[0] && (this.element = n)
        },
        _onChange: function (t) {
            var n = t.data.fileupload,
                r = {
                    files: e.each(e.makeArray(t.target.files), n._normalizeFile),
                    fileInput: e(t.target),
                    form: e(t.target.form)
                };
            r.files.length || (r.files = [{
                name: t.target.value.replace(/^.*\\/, "")
            }]), n.options.replaceFileInput && n._replaceFileInput(r.fileInput);
            if (n._trigger("change", t, r) === !1 || n._onAdd(t, r) === !1) return !1
        },
        _onPaste: function (t) {
            var n = t.data.fileupload,
                r = t.originalEvent.clipboardData,
                i = r && r.items || [],
                s = {
                    files: []
                };
            e.each(i, function (e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && s.files.push(n)
            });
            if (n._trigger("paste", t, s) === !1 || n._onAdd(t, s) === !1) return !1
        },
        _onDrop: function (t) {
            var n = t.data.fileupload,
                r = t.dataTransfer = t.originalEvent.dataTransfer,
                i = {
                    files: e.each(e.makeArray(r && r.files), n._normalizeFile)
                };
            if (n._trigger("drop", t, i) === !1 || n._onAdd(t, i) === !1) return !1;
            t.preventDefault()
        },
        _onDragOver: function (e) {
            var t = e.data.fileupload,
                n = e.dataTransfer = e.originalEvent.dataTransfer;
            if (t._trigger("dragover", e) === !1) return !1;
            n && (n.dropEffect = n.effectAllowed = "copy"), e.preventDefault()
        },
        _initEventHandlers: function () {
            var e = this.options.namespace;
            this._isXHRUpload(this.options) && this.options.dropZone.bind("dragover." + e, {
                fileupload: this
            }, this._onDragOver).bind("drop." + e, {
                fileupload: this
            }, this._onDrop).bind("paste." + e, {
                fileupload: this
            }, this._onPaste), this.options.fileInput.bind("change." + e, {
                fileupload: this
            }, this._onChange)
        },
        _destroyEventHandlers: function () {
            var e = this.options.namespace;
            this.options.dropZone.unbind("dragover." + e, this._onDragOver).unbind("drop." + e, this._onDrop).unbind("paste." + e, this._onPaste), this.options.fileInput.unbind("change." + e, this._onChange)
        },
        _setOption: function (t, n) {
            var r = e.inArray(t, this._refreshOptionsList) !== -1;
            r && this._destroyEventHandlers(), e.Widget.prototype._setOption.call(this, t, n), r && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var t = this.options;
            t.fileInput === undefined ? t.fileInput = this.element.is("input:file") ? this.element : this.element.find("input:file") : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone))
        },
        _create: function () {
            var t = this.options;
            e.extend(t, e(this.element[0].cloneNode(!1)).data()), t.namespace = t.namespace || this.widgetName, this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = this._loaded = this._total = 0, this._initEventHandlers()
        },
        destroy: function () {
            this._destroyEventHandlers(), e.Widget.prototype.destroy.call(this)
        },
        enable: function () {
            e.Widget.prototype.enable.call(this), this._initEventHandlers()
        },
        disable: function () {
            this._destroyEventHandlers(), e.Widget.prototype.disable.call(this)
        },
        add: function (t) {
            if (!t || this.options.disabled) return;
            t.files = e.each(e.makeArray(t.files), this._normalizeFile), this._onAdd(null, t)
        },
        send: function (t) {
            if (t && !this.options.disabled) {
                t.files = e.each(e.makeArray(t.files), this._normalizeFile);
                if (t.files.length) return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}),
function (e) {
    function n(e, t, n) {
        var r = e[t];
        return delete e[t], typeof r == "undefined" ? n : r
    }

    function r(t) {
        return e.isArray(t) ? t : [t]
    }

    function i(e) {
        return typeof e != "undefined" && ("" + e).length > 0
    }

    function s(t) {
        var o = t.width,
            u = t.height,
            a = n(t, "size");
        if (a) {
            var f = a.split("x");
            t.width = o = f[0], t.height = u = f[1]
        }
        var l = t.overlay || t.underlay;
        o && (l || parseFloat(o) < 1) && delete t.width, u && (l || parseFloat(u) < 1) && delete t.height;
        var c = n(t, "crop");
        !c && !l && (o = u = undefined);
        var h = n(t, "background");
        h = h && h.replace(/^#/, "rgb:");
        var p = r(n(t, "transformation", [])),
            d = [];
        e.grep(p, function (e) {
            return typeof e == "object"
        }).length > 0 ? p = e.map(p, function (t) {
            return typeof t == "object" ? s(e.extend({}, t)) : s({
                transformation: t
            })
        }) : (d = p.join("."), p = []);
        var v = n(t, "effect");
        e.isArray(v) && (v = v.join(":"));
        var m = [
            ["c", c],
            ["t", d],
            ["w", o],
            ["h", u],
            ["b", h],
            ["e", v]
        ],
            g = {
                x: "x",
                y: "y",
                radius: "r",
                gravity: "g",
                quality: "q",
                prefix: "p",
                default_image: "d",
                angle: "a",
                underlay: "u",
                overlay: "l",
                fetch_format: "f",
                density: "dn",
                page: "pg"
            };
        for (var y in g) m.push([g[y], n(t, y)]);
        m.sort(function (e, t) {
            return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
        }), m.push([n(t, "raw_transformation")]);
        var b = e.map(e.grep(m, function (e) {
            var t = e[e.length - 1];
            return i(t)
        }), function (e) {
            return e.join("_")
        }).join(",");
        return p.push(b), e.grep(p, i).join("/")
    }

    function u(e) {
        return o || (o = document.createElement("img")), o.src = e, e = o.src, o.src = null, e
    }

    function a(r, i) {
        i = i || {};
        var o = n(i, "type", "upload");
        o == "fetch" && (i.fetch_format = i.fetch_format || n(i, "format"));
        var a = s(i),
            f = n(i, "resource_type", "image"),
            l = n(i, "version"),
            c = n(i, "format"),
            h = n(i, "cloud_name", e.cloudinary.config().cloud_name);
        if (!h) throw "Unknown cloud_name";
        var p = n(i, "private_cdn", e.cloudinary.config().private_cdn),
            d = n(i, "secure_distribution", e.cloudinary.config().secure_distribution),
            v = window.location.protocol == "https:";
        if (v && !d) {
            if (p) throw "secure_distribution not defined";
            d = t
        }
        o == "fetch" && (r = u(r));
        if (r.match(/^https?:/)) {
            if (o == "upload" || o == "asset") return r;
            r = encodeURIComponent(r).replace(/%3A/g, ":").replace(/%2F/g, "/")
        } else c && (r += "." + c);
        prefix = window.location.protocol + "//";
        var m = e.cloudinary.config().cdn_subdomain ? "a" + (crc32(r) % 5 + 1) + "." : "";
        p ? prefix += v ? d : m + h + "-res.cloudinary.com" : prefix += (v ? d : m + "res.cloudinary.com") + "/" + h;
        var g = [prefix, f, o, a, l ? "v" + l : "", r].join("/").replace(/([^:])\/+/g, "$1/");
        return g
    }

    function f(e) {
        var t = n(e, "html_width"),
            r = n(e, "html_height");
        t && (e.width = t), r && (e.height = r)
    }
    var t = "d3jpl91pxevbkh.cloudfront.net",
        o = undefined,
        l = undefined;
    e.cloudinary = {
        config: function (t, n) {
            l || (l = {}, e('meta[name^="cloudinary_"]').each(function () {
                l[e(this).attr("name").replace("cloudinary_", "")] = e(this).attr("content")
            }));
            if (typeof n != "undefined") l[t] = n;
            else {
                if (typeof t == "string") return l[t];
                t && (l = t)
            }
            return l
        },
        url: function (t, n) {
            return n = e.extend({}, n), a(t, n)
        },
        url_internal: a,
        image: function (t, n) {
            n = e.extend({}, n);
            var r = a(t, n);
            return f(n), e("<img/>").attr(n).attr("src", r)
        },
        facebook_profile_image: function (t, n) {
            return e.cloudinary.image(t, e.extend({
                type: "facebook"
            }, n))
        },
        twitter_profile_image: function (t, n) {
            return e.cloudinary.image(t, e.extend({
                type: "twitter"
            }, n))
        },
        twitter_name_profile_image: function (t, n) {
            return e.cloudinary.image(t, e.extend({
                type: "twitter_name"
            }, n))
        },
        fetch_image: function (t, n) {
            return e.cloudinary.image(t, e.extend({
                type: "fetch"
            }, n))
        }
    }, e.fn.cloudinary = function (t) {
        return this.filter("img").each(function () {
            var r = e.extend({
                width: e(this).attr("width"),
                height: e(this).attr("height"),
                src: e(this).attr("src")
            }, e.extend(e(this).data(), t)),
                i = n(r, "source", n(r, "src")),
                s = a(i, r);
            f(r), e(this).attr({
                src: s,
                width: r.width,
                height: r.height
            })
        }), this
    }, e.fn.fetchify = function (t) {
        return this.cloudinary(e.extend(t, {
            type: "fetch"
        }))
    }
}(jQuery),
function (e) {
    if (!e.fn.fileupload) return;
    e.fn.cloudinary_fileupload = function (t) {
        t = e.extend({
            maxFileSize: 1e7,
            dataType: "json",
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            }
        }, t), this.fileupload(t).bind("fileuploaddone", function (t, n) {
            if (n.result.error) return;
            n.result.path = ["v", n.result.version, "/", n.result.public_id, n.result.format ? "." + n.result.format : ""].join("");
            if (n.cloudinaryField && n.form.length > 0) {
                var r = [n.result.resource_type, "upload", n.result.path].join("/") + "#" + n.result.signature,
                    i = e(n.form).find('input[name="' + n.cloudinaryField + '"]');
                i.length > 0 ? i.val(r) : e("<input></input>").attr({
                    type: "hidden",
                    name: n.cloudinaryField
                }).val(r).appendTo(n.form)
            }
            e(t.target).trigger("cloudinarydone", n)
        });
        if (!this.fileupload("option").url) {
            var n = "https://api.cloudinary.com/v1_1/" + e.cloudinary.config().cloud_name + "/upload";
            this.fileupload("option", "url", n)
        }
        return this
    }, e(function () {
        e("input.cloudinary-fileupload[type=file]").cloudinary_fileupload()
    })
}(jQuery),
function (e) {
    var t = document,
        n = {
            ns: "DD_belatedPNG",
            imgSize: {},
            delay: 10,
            nodesFixed: 0,
            createVmlNameSpace: function () {
                t.namespaces && !t.namespaces[this.ns] && t.namespaces.add(this.ns, "urn:schemas-microsoft-com:vml")
            },
            createVmlStyleSheet: function () {
                var e, n;
                e = t.createElement("style"), e.setAttribute("media", "screen"), t.documentElement.firstChild.insertBefore(e, t.documentElement.firstChild.firstChild);
                if (e.styleSheet) {
                    var r = !t.documentMode || t.documentMode < 8 ? this.ns + "\\:*" : this.ns + "\\:shape, " + this.ns + "\\:fill";
                    e = e.styleSheet, e.addRule(r, "behavior:url(#default#VML);"), e.addRule(this.ns + "\\:shape", "position:absolute;"), e.addRule("img." + this.ns + "_sizeFinder", ["behavior:none", "border:none", "position:absolute", "z-index:-1", "top:-10000px", "visibility:hidden"].join(";")), this.screenStyleSheet = e, n = t.createElement("style"), n.setAttribute("media", "print"), t.documentElement.firstChild.insertBefore(n, t.documentElement.firstChild.firstChild), n = n.styleSheet, n.addRule(r, "display: none !important;"), n.addRule("img." + this.ns + "_sizeFinder", "display: none !important;")
                }
            },
            readPropertyChange: function () {
                var e, t, r;
                e = event.srcElement;
                if (!e.vmlInitiated) return;
                var i = event.propertyName;
                (i.search("background") != -1 || i.search("border") != -1) && n.applyVML(e);
                if (i == "style.display") {
                    t = e.currentStyle.display == "none" ? "none" : "block";
                    for (r in e.vml) e.vml.hasOwnProperty(r) && (e.vml[r].shape.style.display = t)
                }
                i.search("filter") != -1 && n.vmlOpacity(e)
            },
            vmlOpacity: function (e) {
                if (e.currentStyle.filter.search("lpha") != -1) {
                    var t = e.currentStyle.filter;
                    t = parseInt(t.substring(t.lastIndexOf("=") + 1, t.lastIndexOf(")")), 10) / 100, e.vml.color.shape.style.filter = e.currentStyle.filter, e.vml.image.fill.opacity = t
                }
            },
            handlePseudoHover: function (e) {
                setTimeout(function () {
                    n.applyVML(e)
                }, 1)
            },
            applyVML: function (e) {
                e.runtimeStyle.cssText = "", this.vmlFill(e), this.vmlOffsets(e), this.vmlOpacity(e), e.isImg && this.copyImageBorders(e)
            },
            attachHandlers: function (e) {
                var t, n, r, i, s, o;
                t = this, n = {
                    resize: "vmlOffsets",
                    move: "vmlOffsets"
                };
                if (e.nodeName == "A") {
                    i = {
                        mouseleave: "handlePseudoHover",
                        mouseenter: "handlePseudoHover",
                        focus: "handlePseudoHover",
                        blur: "handlePseudoHover"
                    };
                    for (s in i) i.hasOwnProperty(s) && (n[s] = i[s])
                }
                for (o in n) n.hasOwnProperty(o) && (r = function () {
                    t[n[o]](e)
                }, e.attachEvent("on" + o, r));
                e.attachEvent("onpropertychange", this.readPropertyChange)
            },
            giveLayout: function (e) {
                e.style.zoom = 1, e.currentStyle.position == "static" && (e.style.position = "relative")
            },
            copyImageBorders: function (e) {
                var t, n;
                t = {
                    borderStyle: !0,
                    borderWidth: !0,
                    borderColor: !0
                };
                for (n in t) t.hasOwnProperty(n) && (e.vml.color.shape.style[n] = e.currentStyle[n])
            },
            vmlFill: function (e) {
                if (!e.currentStyle) return;
                var n, r, i, s, o, u;
                n = e.currentStyle;
                for (s in e.vml) e.vml.hasOwnProperty(s) && (e.vml[s].shape.style.zIndex = n.zIndex);
                e.runtimeStyle.backgroundColor = "", e.runtimeStyle.backgroundImage = "", r = !0;
                if (n.backgroundImage != "none" || e.isImg) e.isImg ? e.vmlBg = e.src : (e.vmlBg = n.backgroundImage, e.vmlBg = e.vmlBg.substr(5, e.vmlBg.lastIndexOf('")') - 5)), i = this, i.imgSize[e.vmlBg] || (o = t.createElement("img"), i.imgSize[e.vmlBg] = o, o.className = i.ns + "_sizeFinder", o.runtimeStyle.cssText = ["behavior:none", "position:absolute", "left:-10000px", "top:-10000px", "border:none", "margin:0", "padding:0"].join(";"), u = function () {
                    this.width = this.offsetWidth, this.height = this.offsetHeight, i.vmlOffsets(e)
                }, o.attachEvent("onload", u), o.src = e.vmlBg, o.removeAttribute("width"), o.removeAttribute("height"), t.body.insertBefore(o, t.body.firstChild)), e.vml.image.fill.src = e.vmlBg, r = !1;
                e.vml.image.fill.on = !r, e.vml.image.fill.color = "none", e.vml.color.shape.style.backgroundColor = n.backgroundColor, e.runtimeStyle.backgroundImage = "none", e.runtimeStyle.backgroundColor = "transparent"
            },
            vmlOffsets: function (e) {
                var t, n, r, i, s, o, u, a, f, l, c;
                t = e.currentStyle, n = {
                    W: e.clientWidth + 1,
                    H: e.clientHeight + 1,
                    w: this.imgSize[e.vmlBg].width,
                    h: this.imgSize[e.vmlBg].height,
                    L: e.offsetLeft,
                    T: e.offsetTop,
                    bLW: e.clientLeft,
                    bTW: e.clientTop
                }, r = n.L + n.bLW == 1 ? 1 : 0, i = function (e, t, n, r, i, s) {
                    e.coordsize = r + "," + i, e.coordorigin = s + "," + s, e.path = "m0,0l" + r + ",0l" + r + "," + i + "l0," + i + " xe", e.style.width = r + "px", e.style.height = i + "px", e.style.left = t + "px", e.style.top = n + "px"
                }, i(e.vml.color.shape, n.L + (e.isImg ? 0 : n.bLW), n.T + (e.isImg ? 0 : n.bTW), n.W - 1, n.H - 1, 0), i(e.vml.image.shape, n.L + n.bLW, n.T + n.bTW, n.W, n.H, 1), s = {
                    X: 0,
                    Y: 0
                };
                if (e.isImg) s.X = parseInt(t.paddingLeft, 10) + 1, s.Y = parseInt(t.paddingTop, 10) + 1;
                else
                    for (f in s) s.hasOwnProperty(f) && this.figurePercentage(s, n, f, t["backgroundPosition" + f]);
                e.vml.image.fill.position = s.X / n.W + "," + s.Y / n.H, o = t.backgroundRepeat, u = {
                    T: 1,
                    R: n.W + r,
                    B: n.H,
                    L: 1 + r
                }, a = {
                    X: {
                        b1: "L",
                        b2: "R",
                        d: "W"
                    },
                    Y: {
                        b1: "T",
                        b2: "B",
                        d: "H"
                    }
                }, o != "repeat" ? (l = {
                    T: s.Y,
                    R: s.X + n.w,
                    B: s.Y + n.h,
                    L: s.X
                }, o.search("repeat-") != -1 && (c = o.split("repeat-")[1].toUpperCase(), l[a[c].b1] = 1, l[a[c].b2] = n[a[c].d]), l.B > n.H && (l.B = n.H), e.vml.image.shape.style.clip = "rect(" + l.T + "px " + (l.R + r) + "px " + l.B + "px " + (l.L + r) + "px)") : e.vml.image.shape.style.clip = "rect(" + u.T + "px " + u.R + "px " + u.B + "px " + u.L + "px)"
            },
            figurePercentage: function (e, t, n, r) {
                var i, s;
                s = !0, i = n == "X";
                switch (r) {
                case "left":
                case "top":
                    e[n] = 0;
                    break;
                case "center":
                    e[n] = .5;
                    break;
                case "right":
                case "bottom":
                    e[n] = 1;
                    break;
                default:
                    r.search("%") != -1 ? e[n] = parseInt(r, 10) / 100 : s = !1
                }
                return e[n] = Math.ceil(s ? t[i ? "W" : "H"] * e[n] - t[i ? "w" : "h"] * e[n] : parseInt(r, 10)), e[n] % 2 === 0 && e[n]++, e[n]
            },
            fixPng: function (e) {
                var r, i, s, o, u;
                if (e.nodeName == "BODY" || e.nodeName == "TD" || e.nodeName == "TR") return;
                e.isImg = !1;
                if (e.nodeName == "IMG") {
                    if (e.src.toLowerCase().search(/\.png$/) == -1) return;
                    e.isImg = !0, e.style.visibility = "hidden"
                } else if (e.currentStyle.backgroundImage.toLowerCase().search(".png") == -1) return;
                r = n, e.vml = {
                    color: {},
                    image: {}
                }, i = {
                    shape: {},
                    fill: {}
                };
                for (o in e.vml)
                    if (e.vml.hasOwnProperty(o)) {
                        for (u in i) i.hasOwnProperty(u) && (s = r.ns + ":" + u, e.vml[o][u] = t.createElement(s));
                        e.vml[o].shape.stroked = !1;
                        if (e.nodeName == "IMG") {
                            var a = e.width / 96 * 72,
                                f = e.height / 96 * 72;
                            e.vml[o].fill.type = "tile", e.vml[o].fill.size = a + "pt," + f + "pt"
                        } else if (e.currentStyle) {
                            var l = e.currentStyle;
                            if (l.backgroundImage != "none") {
                                var c = l.backgroundImage,
                                    p = t.createElement("img");
                                p.src = c.substr(5, c.lastIndexOf('")') - 5);
                                var d = p.runtimeStyle,
                                    v = {
                                        w: d.width,
                                        h: d.height
                                    };
                                d.width = "auto", d.height = "auto", w = p.width, h = p.height, d.width = v.w, d.height = v.h;
                                var a = w / 96 * 72,
                                    f = h / 96 * 72;
                                e.vml[o].fill.type = "tile", e.vml[o].fill.aspect = "atleast", e.vml[o].fill.size = a + "pt," + f + "pt"
                            }
                        }
                        e.vml[o].shape.appendChild(e.vml[o].fill), e.parentNode.insertBefore(e.vml[o].shape, e)
                    }
                e.vml.image.shape.fillcolor = "none", e.vml.color.fill.on = !1, r.attachHandlers(e), r.giveLayout(e), r.giveLayout(e.offsetParent), e.vmlInitiated = !0, r.applyVML(e)
            }
        };
    try {
        t.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {}
    n.createVmlNameSpace(), n.createVmlStyleSheet(), e.extend(e.fn, {
        fixPng: function () {
            return [, ] != 0 && e.each(this, function () {
                n.fixPng(this)
            }), this
        }
    })
}(jQuery),
function (e) {
    var t = function (e) {
        if (!e) var e = window.event;
        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
    };
    e.fn.checkbox = function (n) {
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (r) {}
        var s = {
            cls: "jquery-checkbox",
            empty: "empty.png"
        };
        s = e.extend(s, n || {});
        var o = function (t) {
            var n = t.checked,
                r = t.disabled,
                i = e(t);
            return t.stateInterval && clearInterval(t.stateInterval), t.stateInterval = setInterval(function () {
                t.disabled != r && i.trigger((r = !! t.disabled) ? "disable" : "enable"), t.checked != n && i.trigger((n = !! t.checked) ? "check" : "uncheck")
            }, 10), i
        };
        return this.each(function () {
            var n = this,
                r = o(n);
            n.wrapper && n.wrapper.remove(), n.wrapper = e('<span class="' + s.cls + '"><img src="/assets/jquery.checkbox/' + s.empty + '" /></span>'), n.wrapperInner = n.wrapper.children("span:eq(0)"), n.wrapper.hover(function (e) {
                n.wrapperInner.addClass(s.cls + "-hover"), t(e)
            }, function (e) {
                n.wrapperInner.removeClass(s.cls + "-hover"), t(e)
            }), r.css({
                position: "absolute",
                zIndex: -1,
                visibility: "hidden"
            }).after(n.wrapper);
            var u = !1;
            r.attr("id") && (u = e("label[for=" + r.attr("id") + "]"), u.length || (u = !1)), u || (u = r.closest ? r.closest("label") : r.parents("label:eq(0)"), u.length || (u = !1)), u && (u.hover(function (e) {
                n.wrapper.trigger("mouseover", [e])
            }, function (e) {
                n.wrapper.trigger("mouseout", [e])
            }), u.click(function (e) {
                return r.trigger("click", [e]), t(e), !1
            })), n.wrapper.click(function (e) {
                return r.trigger("click", [e]), t(e), !1
            }), r.click(function (e) {
                t(e)
            }), r.bind("disable", function () {
                n.wrapperInner.addClass(s.cls + "-disabled")
            }).bind("enable", function () {
                n.wrapperInner.removeClass(s.cls + "-disabled")
            }), r.bind("check", function () {
                n.wrapper.addClass(s.cls + "-checked")
            }).bind("uncheck", function () {
                n.wrapper.removeClass(s.cls + "-checked")
            }), e("img", n.wrapper).bind("dragstart", function () {
                return !1
            }).bind("mousedown", function () {
                return !1
            }), window.getSelection && n.wrapper.css("MozUserSelect", "none"), n.checked && n.wrapper.addClass(s.cls + "-checked"), n.disabled && n.wrapperInner.addClass(s.cls + "-disabled")
        })
    }
}(jQuery),
function (e) {
    e.cookie = function (t, n, r) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(n)) || n === null || n === undefined)) {
            r = e.extend({}, r);
            if (n === null || n === undefined) r.expires = -1;
            if (typeof r.expires == "number") {
                var i = r.expires,
                    s = r.expires = new Date;
                s.setDate(s.getDate() + i)
            }
            return n = String(n), document.cookie = [encodeURIComponent(t), "=", r.raw ? n : encodeURIComponent(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
        }
        r = n || {};
        var o = r.raw ? function (e) {
                return e
            } : decodeURIComponent,
            u = document.cookie.split("; ");
        for (var a = 0, f; f = u[a] && u[a].split("="); a++)
            if (o(f[0]) === t) return o(f[1] || "");
        return null
    }
}(jQuery),
function (e, t) {
    "use strict";

    function r(t) {
        e.fn.cycle.debug && i(t)
    }

    function i() {
        window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
    }

    function s(t, n, r) {
        var i = e(t).data("cycle.opts");
        if (!i) return;
        var s = !! t.cyclePause;
        s && i.paused ? i.paused(t, i, n, r) : !s && i.resumed && i.resumed(t, i, n, r)
    }

    function o(n, r, o) {
        function l(t, n, r) {
            if (!t && n === !0) {
                var s = e(r).data("cycle.opts");
                if (!s) return i("options not found, can not resume"), !1;
                r.cycleTimeout && (clearTimeout(r.cycleTimeout), r.cycleTimeout = 0), p(s.elements, s, 1, !s.backwards)
            }
        }
        n.cycleStop === t && (n.cycleStop = 0);
        if (r === t || r === null) r = {};
        if (r.constructor == String) {
            switch (r) {
            case "destroy":
            case "stop":
                var u = e(n).data("cycle.opts");
                if (!u) return !1;
                return n.cycleStop++, n.cycleTimeout && clearTimeout(n.cycleTimeout), n.cycleTimeout = 0, u.elements && e(u.elements).stop(), e(n).removeData("cycle.opts"), r == "destroy" && a(n, u), !1;
            case "toggle":
                return n.cyclePause = n.cyclePause === 1 ? 0 : 1, l(n.cyclePause, o, n), s(n), !1;
            case "pause":
                return n.cyclePause = 1, s(n), !1;
            case "resume":
                return n.cyclePause = 0, l(!1, o, n), s(n), !1;
            case "prev":
            case "next":
                u = e(n).data("cycle.opts");
                if (!u) return i('options not found, "prev/next" ignored'), !1;
                return e.fn.cycle[r](u), !1;
            default:
                r = {
                    fx: r
                }
            }
            return r
        }
        if (r.constructor == Number) {
            var f = r;
            return r = e(n).data("cycle.opts"), r ? f < 0 || f >= r.elements.length ? (i("invalid slide index: " + f), !1) : (r.nextSlide = f, n.cycleTimeout && (clearTimeout(n.cycleTimeout), n.cycleTimeout = 0), typeof o == "string" && (r.oneTimeFx = o), p(r.elements, r, 1, f >= r.currSlide), !1) : (i("options not found, can not advance slide"), !1)
        }
        return r
    }

    function u(t, n) {
        if (!e.support.opacity && n.cleartype && t.style.filter) try {
            t.style.removeAttribute("filter")
        } catch (r) {}
    }

    function a(t, n) {
        n.next && e(n.next).unbind(n.prevNextEvent), n.prev && e(n.prev).unbind(n.prevNextEvent), (n.pager || n.pagerAnchorBuilder) && e.each(n.pagerAnchors || [], function () {
            this.unbind().remove()
        }), n.pagerAnchors = null, e(t).unbind("mouseenter.cycle mouseleave.cycle"), n.destroy && n.destroy(n)
    }

    function f(n, r, o, a, f) {
        var d, y = e.extend({}, e.fn.cycle.defaults, a || {}, e.metadata ? n.metadata() : e.meta ? n.data() : {}),
            b = e.isFunction(n.data) ? n.data(y.metaAttr) : null;
        b && (y = e.extend(y, b)), y.autostop && (y.countdown = y.autostopCount || o.length);
        var w = n[0];
        n.data("cycle.opts", y), y.$cont = n, y.stopCount = w.cycleStop, y.elements = o, y.before = y.before ? [y.before] : [], y.after = y.after ? [y.after] : [], !e.support.opacity && y.cleartype && y.after.push(function () {
            u(this, y)
        }), y.continuous && y.after.push(function () {
            p(o, y, 0, !y.backwards)
        }), l(y), !e.support.opacity && y.cleartype && !y.cleartypeNoBg && g(r), n.css("position") == "static" && n.css("position", "relative"), y.width && n.width(y.width), y.height && y.height != "auto" && n.height(y.height), y.startingSlide !== t ? (y.startingSlide = parseInt(y.startingSlide, 10), y.startingSlide >= o.length || y.startSlide < 0 ? y.startingSlide = 0 : d = !0) : y.backwards ? y.startingSlide = o.length - 1 : y.startingSlide = 0;
        if (y.random) {
            y.randomMap = [];
            for (var E = 0; E < o.length; E++) y.randomMap.push(E);
            y.randomMap.sort(function (e, t) {
                return Math.random() - .5
            });
            if (d)
                for (var S = 0; S < o.length; S++) y.startingSlide == y.randomMap[S] && (y.randomIndex = S);
            else y.randomIndex = 1, y.startingSlide = y.randomMap[1]
        } else y.startingSlide >= o.length && (y.startingSlide = 0);
        y.currSlide = y.startingSlide || 0;
        var x = y.startingSlide;
        r.css({
            position: "absolute",
            top: 0,
            left: 0
        }).hide().each(function (t) {
            var n;
            y.backwards ? n = x ? t <= x ? o.length + (t - x) : x - t : o.length - t : n = x ? t >= x ? o.length - (t - x) : x - t : o.length - t, e(this).css("z-index", n)
        }), e(o[x]).css("opacity", 1).show(), u(o[x], y), y.fit && (y.aspect ? r.each(function () {
            var t = e(this),
                n = y.aspect === !0 ? t.width() / t.height() : y.aspect;
            y.width && t.width() != y.width && (t.width(y.width), t.height(y.width / n)), y.height && t.height() < y.height && (t.height(y.height), t.width(y.height * n))
        }) : (y.width && r.width(y.width), y.height && y.height != "auto" && r.height(y.height))), y.center && (!y.fit || y.aspect) && r.each(function () {
            var t = e(this);
            t.css({
                "margin-left": y.width ? (y.width - t.width()) / 2 + "px" : 0,
                "margin-top": y.height ? (y.height - t.height()) / 2 + "px" : 0
            })
        }), y.center && !y.fit && !y.slideResize && r.each(function () {
            var t = e(this);
            t.css({
                "margin-left": y.width ? (y.width - t.width()) / 2 + "px" : 0,
                "margin-top": y.height ? (y.height - t.height()) / 2 + "px" : 0
            })
        });
        var T = (y.containerResize || y.containerResizeHeight) && !n.innerHeight();
        if (T) {
            var N = 0,
                C = 0;
            for (var k = 0; k < o.length; k++) {
                var L = e(o[k]),
                    A = L[0],
                    O = L.outerWidth(),
                    M = L.outerHeight();
                O || (O = A.offsetWidth || A.width || L.attr("width")), M || (M = A.offsetHeight || A.height || L.attr("height")), N = O > N ? O : N, C = M > C ? M : C
            }
            y.containerResize && N > 0 && C > 0 && n.css({
                width: N + "px",
                height: C + "px"
            }), y.containerResizeHeight && C > 0 && n.css({
                height: C + "px"
            })
        }
        var _ = !1;
        y.pause && n.bind("mouseenter.cycle", function () {
            _ = !0, this.cyclePause++, s(w, !0)
        }).bind("mouseleave.cycle", function () {
            _ && this.cyclePause--, s(w, !0)
        });
        if (c(y) === !1) return !1;
        var D = !1;
        a.requeueAttempts = a.requeueAttempts || 0, r.each(function () {
            var t = e(this);
            this.cycleH = y.fit && y.height ? y.height : t.height() || this.offsetHeight || this.height || t.attr("height") || 0, this.cycleW = y.fit && y.width ? y.width : t.width() || this.offsetWidth || this.width || t.attr("width") || 0;
            if (t.is("img")) {
                var n = this.cycleH === 0 && this.cycleW === 0 && !this.complete;
                if (n) {
                    if (f.s && y.requeueOnImageNotLoaded && ++a.requeueAttempts < 100) return i(a.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function () {
                        e(f.s, f.c).cycle(a)
                    }, y.requeueTimeout), D = !0, !1;
                    i("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
                }
            }
            return !0
        });
        if (D) return !1;
        y.cssBefore = y.cssBefore || {}, y.cssAfter = y.cssAfter || {}, y.cssFirst = y.cssFirst || {}, y.animIn = y.animIn || {}, y.animOut = y.animOut || {}, r.not(":eq(" + x + ")").css(y.cssBefore), e(r[x]).css(y.cssFirst);
        if (y.timeout) {
            y.timeout = parseInt(y.timeout, 10), y.speed.constructor == String && (y.speed = e.fx.speeds[y.speed] || parseInt(y.speed, 10)), y.sync || (y.speed = y.speed / 2);
            var P = y.fx == "none" ? 0 : y.fx == "shuffle" ? 500 : 250;
            while (y.timeout - y.speed < P) y.timeout += y.speed
        }
        y.easing && (y.easeIn = y.easeOut = y.easing), y.speedIn || (y.speedIn = y.speed), y.speedOut || (y.speedOut = y.speed), y.slideCount = o.length, y.currSlide = y.lastSlide = x, y.random ? (++y.randomIndex == o.length && (y.randomIndex = 0), y.nextSlide = y.randomMap[y.randomIndex]) : y.backwards ? y.nextSlide = y.startingSlide === 0 ? o.length - 1 : y.startingSlide - 1 : y.nextSlide = y.startingSlide >= o.length - 1 ? 0 : y.startingSlide + 1;
        if (!y.multiFx) {
            var H = e.fn.cycle.transitions[y.fx];
            if (e.isFunction(H)) H(n, r, y);
            else if (y.fx != "custom" && !y.multiFx) return i("unknown transition: " + y.fx, "; slideshow terminating"), !1
        }
        var B = r[x];
        return y.skipInitializationCallbacks || (y.before.length && y.before[0].apply(B, [B, B, y, !0]), y.after.length && y.after[0].apply(B, [B, B, y, !0])), y.next && e(y.next).bind(y.prevNextEvent, function () {
            return v(y, 1)
        }), y.prev && e(y.prev).bind(y.prevNextEvent, function () {
            return v(y, 0)
        }), (y.pager || y.pagerAnchorBuilder) && m(o, y), h(y, o), y
    }

    function l(t) {
        t.original = {
            before: [],
            after: []
        }, t.original.cssBefore = e.extend({}, t.cssBefore), t.original.cssAfter = e.extend({}, t.cssAfter), t.original.animIn = e.extend({}, t.animIn), t.original.animOut = e.extend({}, t.animOut), e.each(t.before, function () {
            t.original.before.push(this)
        }), e.each(t.after, function () {
            t.original.after.push(this)
        })
    }

    function c(t) {
        var n, s, o = e.fn.cycle.transitions;
        if (t.fx.indexOf(",") > 0) {
            t.multiFx = !0, t.fxs = t.fx.replace(/\s*/g, "").split(",");
            for (n = 0; n < t.fxs.length; n++) {
                var u = t.fxs[n];
                s = o[u];
                if (!s || !o.hasOwnProperty(u) || !e.isFunction(s)) i("discarding unknown transition: ", u), t.fxs.splice(n, 1), n--
            }
            if (!t.fxs.length) return i("No valid transitions named; slideshow terminating."), !1
        } else if (t.fx == "all") {
            t.multiFx = !0, t.fxs = [];
            for (var a in o) o.hasOwnProperty(a) && (s = o[a], o.hasOwnProperty(a) && e.isFunction(s) && t.fxs.push(a))
        }
        if (t.multiFx && t.randomizeEffects) {
            var f = Math.floor(Math.random() * 20) + 30;
            for (n = 0; n < f; n++) {
                var l = Math.floor(Math.random() * t.fxs.length);
                t.fxs.push(t.fxs.splice(l, 1)[0])
            }
            r("randomized fx sequence: ", t.fxs)
        }
        return !0
    }

    function h(t, n) {
        t.addSlide = function (r, i) {
            var s = e(r),
                o = s[0];
            t.autostopCount || t.countdown++, n[i ? "unshift" : "push"](o), t.els && t.els[i ? "unshift" : "push"](o), t.slideCount = n.length, t.random && (t.randomMap.push(t.slideCount - 1), t.randomMap.sort(function (e, t) {
                return Math.random() - .5
            })), s.css("position", "absolute"), s[i ? "prependTo" : "appendTo"](t.$cont), i && (t.currSlide++, t.nextSlide++), !e.support.opacity && t.cleartype && !t.cleartypeNoBg && g(s), t.fit && t.width && s.width(t.width), t.fit && t.height && t.height != "auto" && s.height(t.height), o.cycleH = t.fit && t.height ? t.height : s.height(), o.cycleW = t.fit && t.width ? t.width : s.width(), s.css(t.cssBefore), (t.pager || t.pagerAnchorBuilder) && e.fn.cycle.createPagerAnchor(n.length - 1, o, e(t.pager), n, t), e.isFunction(t.onAddSlide) ? t.onAddSlide(s) : s.hide()
        }
    }

    function p(n, i, s, o) {
        function m() {
            var e = 0,
                t = i.timeout;
            i.timeout && !i.continuous ? (e = d(n[i.currSlide], n[i.nextSlide], i, o), i.fx == "shuffle" && (e -= i.speedOut)) : i.continuous && u.cyclePause && (e = 10), e > 0 && (u.cycleTimeout = setTimeout(function () {
                p(n, i, 0, !i.backwards)
            }, e))
        }
        var u = i.$cont[0],
            a = n[i.currSlide],
            f = n[i.nextSlide];
        s && i.busy && i.manualTrump && (r("manualTrump in go(), stopping active transition"), e(n).stop(!0, !0), i.busy = 0, clearTimeout(u.cycleTimeout));
        if (i.busy) {
            r("transition active, ignoring new tx request");
            return
        }
        if (u.cycleStop != i.stopCount || u.cycleTimeout === 0 && !s) return;
        if (!s && !u.cyclePause && !i.bounce && (i.autostop && --i.countdown <= 0 || i.nowrap && !i.random && i.nextSlide < i.currSlide)) {
            i.end && i.end(i);
            return
        }
        var l = !1;
        if ((s || !u.cyclePause) && i.nextSlide != i.currSlide) {
            l = !0;
            var c = i.fx;
            a.cycleH = a.cycleH || e(a).height(), a.cycleW = a.cycleW || e(a).width(), f.cycleH = f.cycleH || e(f).height(), f.cycleW = f.cycleW || e(f).width(), i.multiFx && (o && (i.lastFx === t || ++i.lastFx >= i.fxs.length) ? i.lastFx = 0 : !o && (i.lastFx === t || --i.lastFx < 0) && (i.lastFx = i.fxs.length - 1), c = i.fxs[i.lastFx]), i.oneTimeFx && (c = i.oneTimeFx, i.oneTimeFx = null), e.fn.cycle.resetState(i, c), i.before.length && e.each(i.before, function (e, t) {
                if (u.cycleStop != i.stopCount) return;
                t.apply(f, [a, f, i, o])
            });
            var h = function () {
                i.busy = 0, e.each(i.after, function (e, t) {
                    if (u.cycleStop != i.stopCount) return;
                    t.apply(f, [a, f, i, o])
                }), u.cycleStop || m()
            };
            r("tx firing(" + c + "); currSlide: " + i.currSlide + "; nextSlide: " + i.nextSlide), i.busy = 1, i.fxFn ? i.fxFn(a, f, i, h, o, s && i.fastOnEvent) : e.isFunction(e.fn.cycle[i.fx]) ? e.fn.cycle[i.fx](a, f, i, h, o, s && i.fastOnEvent) : e.fn.cycle.custom(a, f, i, h, o, s && i.fastOnEvent)
        } else m(); if (l || i.nextSlide == i.currSlide) {
            var v;
            i.lastSlide = i.currSlide, i.random ? (i.currSlide = i.nextSlide, ++i.randomIndex == n.length && (i.randomIndex = 0, i.randomMap.sort(function (e, t) {
                return Math.random() - .5
            })), i.nextSlide = i.randomMap[i.randomIndex], i.nextSlide == i.currSlide && (i.nextSlide = i.currSlide == i.slideCount - 1 ? 0 : i.currSlide + 1)) : i.backwards ? (v = i.nextSlide - 1 < 0, v && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = 1, i.currSlide = 0) : (i.nextSlide = v ? n.length - 1 : i.nextSlide - 1, i.currSlide = v ? 0 : i.nextSlide + 1)) : (v = i.nextSlide + 1 == n.length, v && i.bounce ? (i.backwards = !i.backwards, i.nextSlide = n.length - 2, i.currSlide = n.length - 1) : (i.nextSlide = v ? 0 : i.nextSlide + 1, i.currSlide = v ? n.length - 1 : i.nextSlide - 1))
        }
        l && i.pager && i.updateActivePagerLink(i.pager, i.currSlide, i.activePagerClass)
    }

    function d(e, t, n, i) {
        if (n.timeoutFn) {
            var s = n.timeoutFn.call(e, e, t, n, i);
            while (n.fx != "none" && s - n.speed < 250) s += n.speed;
            r("calculated timeout: " + s + "; speed: " + n.speed);
            if (s !== !1) return s
        }
        return n.timeout
    }

    function v(t, n) {
        var r = n ? 1 : -1,
            i = t.elements,
            s = t.$cont[0],
            o = s.cycleTimeout;
        o && (clearTimeout(o), s.cycleTimeout = 0);
        if (t.random && r < 0) t.randomIndex--, --t.randomIndex == -2 ? t.randomIndex = i.length - 2 : t.randomIndex == -1 && (t.randomIndex = i.length - 1), t.nextSlide = t.randomMap[t.randomIndex];
        else if (t.random) t.nextSlide = t.randomMap[t.randomIndex];
        else {
            t.nextSlide = t.currSlide + r;
            if (t.nextSlide < 0) {
                if (t.nowrap) return !1;
                t.nextSlide = i.length - 1
            } else if (t.nextSlide >= i.length) {
                if (t.nowrap) return !1;
                t.nextSlide = 0
            }
        }
        var u = t.onPrevNextEvent || t.prevNextClick;
        return e.isFunction(u) && u(r > 0, t.nextSlide, i[t.nextSlide]), p(i, t, 1, n), !1
    }

    function m(t, n) {
        var r = e(n.pager);
        e.each(t, function (i, s) {
            e.fn.cycle.createPagerAnchor(i, s, r, t, n)
        }), n.updateActivePagerLink(n.pager, n.startingSlide, n.activePagerClass)
    }

    function g(t) {
        function n(e) {
            return e = parseInt(e, 10).toString(16), e.length < 2 ? "0" + e : e
        }

        function i(t) {
            for (; t && t.nodeName.toLowerCase() != "html"; t = t.parentNode) {
                var r = e.css(t, "background-color");
                if (r && r.indexOf("rgb") >= 0) {
                    var i = r.match(/\d+/g);
                    return "#" + n(i[0]) + n(i[1]) + n(i[2])
                }
                if (r && r != "transparent") return r
            }
            return "#ffffff"
        }
        r("applying clearType background-color hack"), t.each(function () {
            e(this).css("background-color", i(this))
        })
    }
    var n = "2.9999.81";
    e.expr[":"].paused = function (e) {
        return e.cyclePause
    }, e.fn.cycle = function (t, n) {
        var s = {
            s: this.selector,
            c: this.context
        };
        return this.length === 0 && t != "stop" ? !e.isReady && s.s ? (i("DOM not ready, queuing slideshow"), e(function () {
            e(s.s, s.c).cycle(t, n)
        }), this) : (i("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this) : this.each(function () {
            var u = o(this, t, n);
            if (u === !1) return;
            u.updateActivePagerLink = u.updateActivePagerLink || e.fn.cycle.updateActivePagerLink, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = this.cyclePause = 0, this.cycleStop = 0;
            var a = e(this),
                l = u.slideExpr ? e(u.slideExpr, this) : a.children(),
                c = l.get();
            if (c.length < 2) {
                i("terminating; too few slides: " + c.length);
                return
            }
            var h = f(a, l, c, u, s);
            if (h === !1) return;
            var v = h.continuous ? 10 : d(c[h.currSlide], c[h.nextSlide], h, !h.backwards);
            v && (v += h.delay || 0, v < 10 && (v = 10), r("first timeout: " + v), this.cycleTimeout = setTimeout(function () {
                p(c, h, 0, !u.backwards)
            }, v))
        })
    }, e.fn.cycle.resetState = function (t, n) {
        n = n || t.fx, t.before = [], t.after = [], t.cssBefore = e.extend({}, t.original.cssBefore), t.cssAfter = e.extend({}, t.original.cssAfter), t.animIn = e.extend({}, t.original.animIn), t.animOut = e.extend({}, t.original.animOut), t.fxFn = null, e.each(t.original.before, function () {
            t.before.push(this)
        }), e.each(t.original.after, function () {
            t.after.push(this)
        });
        var r = e.fn.cycle.transitions[n];
        e.isFunction(r) && r(t.$cont, e(t.elements), t)
    }, e.fn.cycle.updateActivePagerLink = function (t, n, r) {
        e(t).each(function () {
            e(this).children().removeClass(r).eq(n).addClass(r)
        })
    }, e.fn.cycle.next = function (e) {
        v(e, 1)
    }, e.fn.cycle.prev = function (e) {
        v(e, 0)
    }, e.fn.cycle.createPagerAnchor = function (t, n, i, o, u) {
        var a;
        e.isFunction(u.pagerAnchorBuilder) ? (a = u.pagerAnchorBuilder(t, n), r("pagerAnchorBuilder(" + t + ", el) returned: " + a)) : a = '<a href="#">' + (t + 1) + "</a>";
        if (!a) return;
        var f = e(a);
        if (f.parents("body").length === 0) {
            var l = [];
            i.length > 1 ? (i.each(function () {
                var t = f.clone(!0);
                e(this).append(t), l.push(t[0])
            }), f = e(l)) : f.appendTo(i)
        }
        u.pagerAnchors = u.pagerAnchors || [], u.pagerAnchors.push(f);
        var c = function (n) {
            n.preventDefault(), u.nextSlide = t;
            var r = u.$cont[0],
                i = r.cycleTimeout;
            i && (clearTimeout(i), r.cycleTimeout = 0);
            var s = u.onPagerEvent || u.pagerClick;
            e.isFunction(s) && s(u.nextSlide, o[u.nextSlide]), p(o, u, 1, u.currSlide < t)
        };
        /mouseenter|mouseover/i.test(u.pagerEvent) ? f.hover(c, function () {}) : f.bind(u.pagerEvent, c), !/^click/.test(u.pagerEvent) && !u.allowPagerClickBubble && f.bind("click.cycle", function () {
            return !1
        });
        var h = u.$cont[0],
            d = !1;
        u.pauseOnPagerHover && f.hover(function () {
            d = !0, h.cyclePause++, s(h, !0, !0)
        }, function () {
            d && h.cyclePause--, s(h, !0, !0)
        })
    }, e.fn.cycle.hopsFromLast = function (e, t) {
        var n, r = e.lastSlide,
            i = e.currSlide;
        return t ? n = i > r ? i - r : e.slideCount - r : n = i < r ? r - i : r + e.slideCount - i, n
    }, e.fn.cycle.commonReset = function (t, n, r, i, s, o) {
        e(r.elements).not(t).hide(), typeof r.cssBefore.opacity == "undefined" && (r.cssBefore.opacity = 1), r.cssBefore.display = "block", r.slideResize && i !== !1 && n.cycleW > 0 && (r.cssBefore.width = n.cycleW), r.slideResize && s !== !1 && n.cycleH > 0 && (r.cssBefore.height = n.cycleH), r.cssAfter = r.cssAfter || {}, r.cssAfter.display = "none", e(t).css("zIndex", r.slideCount + (o === !0 ? 1 : 0)), e(n).css("zIndex", r.slideCount + (o === !0 ? 0 : 1))
    }, e.fn.cycle.custom = function (t, n, r, i, s, o) {
        var u = e(t),
            a = e(n),
            f = r.speedIn,
            l = r.speedOut,
            c = r.easeIn,
            h = r.easeOut;
        a.css(r.cssBefore), o && (typeof o == "number" ? f = l = o : f = l = 1, c = h = null);
        var p = function () {
            a.animate(r.animIn, f, c, function () {
                i()
            })
        };
        u.animate(r.animOut, l, h, function () {
            u.css(r.cssAfter), r.sync || p()
        }), r.sync && p()
    }, e.fn.cycle.transitions = {
        fade: function (t, n, r) {
            n.not(":eq(" + r.currSlide + ")").css("opacity", 0), r.before.push(function (t, n, r) {
                e.fn.cycle.commonReset(t, n, r), r.cssBefore.opacity = 0
            }), r.animIn = {
                opacity: 1
            }, r.animOut = {
                opacity: 0
            }, r.cssBefore = {
                top: 0,
                left: 0
            }
        }
    }, e.fn.cycle.ver = function () {
        return n
    }, e.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: !1,
        animIn: null,
        animOut: null,
        aspect: !1,
        autostop: 0,
        autostopCount: 0,
        backwards: !1,
        before: null,
        center: null,
        cleartype: !e.support.opacity,
        cleartypeNoBg: !1,
        containerResize: 1,
        containerResizeHeight: 0,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: !0,
        metaAttr: "cycle",
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: !0,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        skipInitializationCallbacks: !1,
        slideExpr: null,
        slideResize: 1,
        speed: 1e3,
        speedIn: null,
        speedOut: null,
        startingSlide: t,
        sync: 1,
        timeout: 4e3,
        timeoutFn: null,
        updateActivePagerLink: null,
        width: null
    }
}(jQuery),
function (e) {
    "use strict";
    e.fn.cycle.transitions.none = function (t, n, r) {
        r.fxFn = function (t, n, r, i) {
            e(n).show(), e(t).hide(), i()
        }
    }, e.fn.cycle.transitions.fadeout = function (t, n, r) {
        n.not(":eq(" + r.currSlide + ")").css({
            display: "block",
            opacity: 1
        }), r.before.push(function (t, n, r, i, s, o) {
            e(t).css("zIndex", r.slideCount + (o !== !0 ? 1 : 0)), e(n).css("zIndex", r.slideCount + (o !== !0 ? 0 : 1))
        }), r.animIn.opacity = 1, r.animOut.opacity = 0, r.cssBefore.opacity = 1, r.cssBefore.display = "block", r.cssAfter.zIndex = 0
    }, e.fn.cycle.transitions.scrollUp = function (t, n, r) {
        t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
        var i = t.height();
        r.cssBefore.top = i, r.cssBefore.left = 0, r.cssFirst.top = 0, r.animIn.top = 0, r.animOut.top = -i
    }, e.fn.cycle.transitions.scrollDown = function (t, n, r) {
        t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
        var i = t.height();
        r.cssFirst.top = 0, r.cssBefore.top = -i, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.top = i
    }, e.fn.cycle.transitions.scrollLeft = function (t, n, r) {
        t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
        var i = t.width();
        r.cssFirst.left = 0, r.cssBefore.left = i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = 0 - i
    }, e.fn.cycle.transitions.scrollRight = function (t, n, r) {
        t.css("overflow", "hidden"), r.before.push(e.fn.cycle.commonReset);
        var i = t.width();
        r.cssFirst.left = 0, r.cssBefore.left = -i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = i
    }, e.fn.cycle.transitions.scrollHorz = function (t, n, r) {
        t.css("overflow", "hidden").width(), r.before.push(function (t, n, r, i) {
            r.rev && (i = !i), e.fn.cycle.commonReset(t, n, r), r.cssBefore.left = i ? n.cycleW - 1 : 1 - n.cycleW, r.animOut.left = i ? -t.cycleW : t.cycleW
        }), r.cssFirst.left = 0, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.top = 0
    }, e.fn.cycle.transitions.scrollVert = function (t, n, r) {
        t.css("overflow", "hidden"), r.before.push(function (t, n, r, i) {
            r.rev && (i = !i), e.fn.cycle.commonReset(t, n, r), r.cssBefore.top = i ? 1 - n.cycleH : n.cycleH - 1, r.animOut.top = i ? t.cycleH : -t.cycleH
        }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.left = 0
    }, e.fn.cycle.transitions.slideX = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e(r.elements).not(t).hide(), e.fn.cycle.commonReset(t, n, r, !1, !0), r.animIn.width = n.cycleW
        }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.width = 0, r.animIn.width = "show", r.animOut.width = 0
    }, e.fn.cycle.transitions.slideY = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e(r.elements).not(t).hide(), e.fn.cycle.commonReset(t, n, r, !0, !1), r.animIn.height = n.cycleH
        }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.height = 0, r.animIn.height = "show", r.animOut.height = 0
    }, e.fn.cycle.transitions.shuffle = function (t, n, r) {
        var i, s = t.css("overflow", "visible").width();
        n.css({
            left: 0,
            top: 0
        }), r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !0, !0)
        }), r.speedAdjusted || (r.speed = r.speed / 2, r.speedAdjusted = !0), r.random = 0, r.shuffle = r.shuffle || {
            left: -s,
            top: 15
        }, r.els = [];
        for (i = 0; i < n.length; i++) r.els.push(n[i]);
        for (i = 0; i < r.currSlide; i++) r.els.push(r.els.shift());
        r.fxFn = function (t, n, r, i, s) {
            r.rev && (s = !s);
            var o = s ? e(t) : e(n);
            e(n).css(r.cssBefore);
            var u = r.slideCount;
            o.animate(r.shuffle, r.speedIn, r.easeIn, function () {
                var n = e.fn.cycle.hopsFromLast(r, s);
                for (var a = 0; a < n; a++) s ? r.els.push(r.els.shift()) : r.els.unshift(r.els.pop());
                if (s)
                    for (var f = 0, l = r.els.length; f < l; f++) e(r.els[f]).css("z-index", l - f + u);
                else {
                    var c = e(t).css("z-index");
                    o.css("z-index", parseInt(c, 10) + 1 + u)
                }
                o.animate({
                    left: 0,
                    top: 0
                }, r.speedOut, r.easeOut, function () {
                    e(s ? this : t).hide(), i && i()
                })
            })
        }, e.extend(r.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        })
    }, e.fn.cycle.transitions.turnUp = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !1), r.cssBefore.top = n.cycleH, r.animIn.height = n.cycleH, r.animOut.width = n.cycleW
        }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.cssBefore.height = 0, r.animIn.top = 0, r.animOut.height = 0
    }, e.fn.cycle.transitions.turnDown = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !1), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
        }), r.cssFirst.top = 0, r.cssBefore.left = 0, r.cssBefore.top = 0, r.cssBefore.height = 0, r.animOut.height = 0
    }, e.fn.cycle.transitions.turnLeft = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !0), r.cssBefore.left = n.cycleW, r.animIn.width = n.cycleW
        }), r.cssBefore.top = 0, r.cssBefore.width = 0, r.animIn.left = 0, r.animOut.width = 0
    }, e.fn.cycle.transitions.turnRight = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !0), r.animIn.width = n.cycleW, r.animOut.left = t.cycleW
        }), e.extend(r.cssBefore, {
            top: 0,
            left: 0,
            width: 0
        }), r.animIn.left = 0, r.animOut.width = 0
    }, e.fn.cycle.transitions.zoom = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !1, !0), r.cssBefore.top = n.cycleH / 2, r.cssBefore.left = n.cycleW / 2, e.extend(r.animIn, {
                top: 0,
                left: 0,
                width: n.cycleW,
                height: n.cycleH
            }), e.extend(r.animOut, {
                width: 0,
                height: 0,
                top: t.cycleH / 2,
                left: t.cycleW / 2
            })
        }), r.cssFirst.top = 0, r.cssFirst.left = 0, r.cssBefore.width = 0, r.cssBefore.height = 0
    }, e.fn.cycle.transitions.fadeZoom = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !1), r.cssBefore.left = n.cycleW / 2, r.cssBefore.top = n.cycleH / 2, e.extend(r.animIn, {
                top: 0,
                left: 0,
                width: n.cycleW,
                height: n.cycleH
            })
        }), r.cssBefore.width = 0, r.cssBefore.height = 0, r.animOut.opacity = 0
    }, e.fn.cycle.transitions.blindX = function (t, n, r) {
        var i = t.css("overflow", "hidden").width();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r), r.animIn.width = n.cycleW, r.animOut.left = t.cycleW
        }), r.cssBefore.left = i, r.cssBefore.top = 0, r.animIn.left = 0, r.animOut.left = i
    }, e.fn.cycle.transitions.blindY = function (t, n, r) {
        var i = t.css("overflow", "hidden").height();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
        }), r.cssBefore.top = i, r.cssBefore.left = 0, r.animIn.top = 0, r.animOut.top = i
    }, e.fn.cycle.transitions.blindZ = function (t, n, r) {
        var i = t.css("overflow", "hidden").height(),
            s = t.width();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r), r.animIn.height = n.cycleH, r.animOut.top = t.cycleH
        }), r.cssBefore.top = i, r.cssBefore.left = s, r.animIn.top = 0, r.animIn.left = 0, r.animOut.top = i, r.animOut.left = s
    }, e.fn.cycle.transitions.growX = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !0), r.cssBefore.left = this.cycleW / 2, r.animIn.left = 0, r.animIn.width = this.cycleW, r.animOut.left = 0
        }), r.cssBefore.top = 0, r.cssBefore.width = 0
    }, e.fn.cycle.transitions.growY = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !1), r.cssBefore.top = this.cycleH / 2, r.animIn.top = 0, r.animIn.height = this.cycleH, r.animOut.top = 0
        }), r.cssBefore.height = 0, r.cssBefore.left = 0
    }, e.fn.cycle.transitions.curtainX = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !1, !0, !0), r.cssBefore.left = n.cycleW / 2, r.animIn.left = 0, r.animIn.width = this.cycleW, r.animOut.left = t.cycleW / 2, r.animOut.width = 0
        }), r.cssBefore.top = 0, r.cssBefore.width = 0
    }, e.fn.cycle.transitions.curtainY = function (t, n, r) {
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !1, !0), r.cssBefore.top = n.cycleH / 2, r.animIn.top = 0, r.animIn.height = n.cycleH, r.animOut.top = t.cycleH / 2, r.animOut.height = 0
        }), r.cssBefore.height = 0, r.cssBefore.left = 0
    }, e.fn.cycle.transitions.cover = function (t, n, r) {
        var i = r.direction || "left",
            s = t.css("overflow", "hidden").width(),
            o = t.height();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r), r.cssAfter.display = "", i == "right" ? r.cssBefore.left = -s : i == "up" ? r.cssBefore.top = o : i == "down" ? r.cssBefore.top = -o : r.cssBefore.left = s
        }), r.animIn.left = 0, r.animIn.top = 0, r.cssBefore.top = 0, r.cssBefore.left = 0
    }, e.fn.cycle.transitions.uncover = function (t, n, r) {
        var i = r.direction || "left",
            s = t.css("overflow", "hidden").width(),
            o = t.height();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !0, !0), i == "right" ? r.animOut.left = s : i == "up" ? r.animOut.top = -o : i == "down" ? r.animOut.top = o : r.animOut.left = -s
        }), r.animIn.left = 0, r.animIn.top = 0, r.cssBefore.top = 0, r.cssBefore.left = 0
    }, e.fn.cycle.transitions.toss = function (t, n, r) {
        var i = t.css("overflow", "visible").width(),
            s = t.height();
        r.before.push(function (t, n, r) {
            e.fn.cycle.commonReset(t, n, r, !0, !0, !0), !r.animOut.left && !r.animOut.top ? e.extend(r.animOut, {
                left: i * 2,
                top: -s / 2,
                opacity: 0
            }) : r.animOut.opacity = 0
        }), r.cssBefore.left = 0, r.cssBefore.top = 0, r.animIn.left = 0
    }, e.fn.cycle.transitions.wipe = function (t, n, r) {
        var i = t.css("overflow", "hidden").width(),
            s = t.height();
        r.cssBefore = r.cssBefore || {};
        var o;
        if (r.clip)
            if (/l2r/.test(r.clip)) o = "rect(0px 0px " + s + "px 0px)";
            else if (/r2l/.test(r.clip)) o = "rect(0px " + i + "px " + s + "px " + i + "px)";
        else if (/t2b/.test(r.clip)) o = "rect(0px " + i + "px 0px 0px)";
        else if (/b2t/.test(r.clip)) o = "rect(" + s + "px " + i + "px " + s + "px 0px)";
        else if (/zoom/.test(r.clip)) {
            var u = parseInt(s / 2, 10),
                a = parseInt(i / 2, 10);
            o = "rect(" + u + "px " + a + "px " + u + "px " + a + "px)"
        }
        r.cssBefore.clip = r.cssBefore.clip || o || "rect(0px 0px 0px 0px)";
        var f = r.cssBefore.clip.match(/(\d+)/g),
            l = parseInt(f[0], 10),
            c = parseInt(f[1], 10),
            h = parseInt(f[2], 10),
            p = parseInt(f[3], 10);
        r.before.push(function (t, n, r) {
            if (t == n) return;
            var o = e(t),
                u = e(n);
            e.fn.cycle.commonReset(t, n, r, !0, !0, !1), r.cssAfter.display = "block";
            var a = 1,
                f = parseInt(r.speedIn / 13, 10) - 1;
            (function d() {
                var e = l ? l - parseInt(a * (l / f), 10) : 0,
                    t = p ? p - parseInt(a * (p / f), 10) : 0,
                    n = h < s ? h + parseInt(a * ((s - h) / f || 1), 10) : s,
                    r = c < i ? c + parseInt(a * ((i - c) / f || 1), 10) : i;
                u.css({
                    clip: "rect(" + e + "px " + r + "px " + n + "px " + t + "px)"
                }), a++ <= f ? setTimeout(d, 13) : o.css("display", "none")
            })()
        }), e.extend(r.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        }), r.animIn = {
            left: 0
        }, r.animOut = {
            left: 0
        }
    }
}(jQuery),
function (e, t, n) {
    function p(e, t) {
        var n = e.keyCode,
            r = t.data("dropkick"),
            i = t.find(".dk_options"),
            s = t.hasClass("dk_open"),
            o = t.find(".dk_option_current"),
            u = i.find("li").first(),
            f = i.find("li").last(),
            l, c;
        switch (n) {
        case a.enter:
            s ? (d(o.find("a"), t), g(t)) : y(t), e.preventDefault();
            break;
        case a.up:
            c = o.prev("li"), s ? c.length ? v(c, t) : v(f, t) : y(t), e.preventDefault();
            break;
        case a.down:
            s ? (l = o.next("li").first(), l.length ? v(l, t) : v(u, t)) : y(t), e.preventDefault();
            break;
        default:
        }
    }

    function d(e, t, n) {
        var r, i, s;
        r = e.attr("data-dk-dropdown-value"), i = e.text(), s = t.data("dropkick"), $select = s.$select, $select.val(r), t.find(".dk_label").text(i), n = n || !1, s.settings.change && !n && s.settings.change.call($select, r, i)
    }

    function v(e, t) {
        t.find(".dk_option_current").removeClass("dk_option_current"), e.addClass("dk_option_current"), m(t, e)
    }

    function m(e, t) {
        var n = t.prevAll("li").outerHeight() * t.prevAll("li").length;
        e.find(".dk_options_inner").animate({
            scrollTop: n + "px"
        }, 0)
    }

    function g(e) {
        e.removeClass("dk_open")
    }

    function y(e) {
        var t = e.data("dropkick");
        e.find(".dk_options").css({
            top: e.find(".dk_toggle").outerHeight() - 1
        }), e.toggleClass("dk_open")
    }

    function b(t, n) {
        var r = t,
            i = [],
            s;
        r = r.replace("{{ id }}", n.id), r = r.replace("{{ label }}", n.label), r = r.replace("{{ tabindex }}", n.tabindex);
        if (n.options && n.options.length)
            for (var o = 0, u = n.options.length; o < u; o++) {
                var a = e(n.options[o]),
                    f = "dk_option_current",
                    c = l;
                c = c.replace("{{ value }}", a.val()), c = c.replace("{{ current }}", w(a.val()) === n.value ? f : ""), c = c.replace("{{ text }}", a.text()), i[i.length] = c
            }
        return s = e(r), s.find(".dk_options_inner").html(i.join("")), s
    }

    function w(t) {
        return e.trim(t).length > 0 ? t : !1
    }
    var r = navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),
        i = !! r,
        s = i && parseFloat(r[1]) < 7;
    s || (n.documentElement.className = n.documentElement.className + " dk_fouc");
    var o = {}, u = [],
        a = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            enter: 13
        }, f = ['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">', '<a class="dk_toggle">', '<span class="dk_label">{{ label }}</span>', "</a>", '<div class="dk_options">', '<ul class="dk_options_inner">', "</ul>", "</div>", "</div>"].join(""),
        l = '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',
        c = {
            startSpeed: 1e3,
            theme: !1,
            change: !1
        }, h = !1;
    o.init = function (t) {
        return t = e.extend({}, c, t), this.each(function () {
            var n = e(this),
                r = n.find(":selected").first(),
                i = n.find("option"),
                s = n.data("dropkick") || {}, o = n.attr("id") || n.attr("name"),
                a = t.width || n.outerWidth(),
                l = n.attr("tabindex") ? n.attr("tabindex") : "",
                c = !1,
                h;
            if (s.id) return n;
            s.settings = t, s.tabindex = l, s.id = o, s.$original = r, s.$select = n, s.value = w(n.val()) || w(r.attr("value")), s.label = r.text(), s.options = i, c = b(f, s), c.find(".dk_toggle").css({
                width: a + "px"
            }), n.before(c), c = e("#dk_container_" + o).fadeIn(t.startSpeed), h = t.theme ? t.theme : "default", c.addClass("dk_theme_" + h), s.theme = h, s.$dk = c, n.data("dropkick", s), c.data("dropkick", s), u[u.length] = n, c.bind("focus.dropkick", function (e) {
                c.addClass("dk_focus")
            }).bind("blur.dropkick", function (e) {
                c.removeClass("dk_open dk_focus")
            }), setTimeout(function () {
                n.hide()
            }, 0)
        })
    }, o.theme = function (t) {
        var n = e(this),
            r = n.data("dropkick"),
            i = r.$dk,
            s = "dk_theme_" + r.theme;
        i.removeClass(s).addClass("dk_theme_" + t), r.theme = t
    }, o.reset = function () {
        for (var e = 0, t = u.length; e < t; e++) {
            var n = u[e].data("dropkick"),
                r = n.$dk,
                i = r.find("li").first();
            r.find(".dk_label").text(n.label), r.find(".dk_options_inner").animate({
                scrollTop: 0
            }, 0), v(i, r), d(i, r, !0)
        }
    }, e.fn.dropkick = function (e) {
        if (!s) {
            if (o[e]) return o[e].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof e == "object" || !e) return o.init.apply(this, arguments)
        }
    }, e(function () {
        e(n).on("click", ".dk_toggle", function (n) {
            var r = e(this).parents(".dk_container").first();
            return y(r), "ontouchstart" in t && (r.addClass("dk_touch"), r.find(".dk_options_inner").addClass("scrollable vertical")), n.preventDefault(), !1
        }), e(n).on(i ? "mousedown" : "click", ".dk_options a", function (t) {
            var n = e(this),
                r = n.parents(".dk_container").first(),
                i = r.data("dropkick");
            return g(r), d(n, r), v(n.parent(), r), t.preventDefault(), !1
        }), e(n).bind("keydown.dk_nav", function (t) {
            var n = e(".dk_container.dk_open"),
                r = e(".dk_container.dk_focus"),
                i = null;
            n.length ? i = n : r.length && !n.length && (i = r), i && p(t, i)
        })
    })
}(jQuery, window, document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
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
}), jQuery.fn.extend({
    everyTime: function (e, t, n, r) {
        return this.each(function () {
            jQuery.timer.add(this, e, t, n, r)
        })
    },
    oneTime: function (e, t, n) {
        return this.each(function () {
            jQuery.timer.add(this, e, t, n, 1)
        })
    },
    stopTime: function (e, t) {
        return this.each(function () {
            jQuery.timer.remove(this, e, t)
        })
    }
}), jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1e3,
            das: 1e4,
            hs: 1e5,
            ks: 1e6
        },
        timeParse: function (e) {
            if (e == undefined || e == null) return null;
            var t = this.regex.exec(jQuery.trim(e.toString()));
            if (t[2]) {
                var n = parseFloat(t[1]),
                    r = this.powers[t[2]] || 1;
                return n * r
            }
            return e
        },
        add: function (e, t, n, r, i) {
            var s = 0;
            jQuery.isFunction(n) && (i || (i = r), r = n, n = t), t = jQuery.timer.timeParse(t);
            if (typeof t != "number" || isNaN(t) || t < 0) return;
            if (typeof i != "number" || isNaN(i) || i < 0) i = 0;
            i = i || 0;
            var o = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {});
            o[n] || (o[n] = {}), r.timerID = r.timerID || this.guid++;
            var u = function () {
                (++s > i && i !== 0 || r.call(e, s) === !1) && jQuery.timer.remove(e, n, r)
            };
            u.timerID = r.timerID, o[n][r.timerID] || (o[n][r.timerID] = window.setInterval(u, t)), this.global.push(e)
        },
        remove: function (e, t, n) {
            var r = jQuery.data(e, this.dataKey),
                i;
            if (r) {
                if (!t)
                    for (t in r) this.remove(e, t, n);
                else if (r[t]) {
                    if (n) n.timerID && (window.clearInterval(r[t][n.timerID]), delete r[t][n.timerID]);
                    else
                        for (var n in r[t]) window.clearInterval(r[t][n]), delete r[t][n];
                    for (i in r[t]) break;
                    i || (i = null, delete r[t])
                }
                for (i in r) break;
                i || jQuery.removeData(e, this.dataKey)
            }
        }
    }
}), jQuery(window).bind("unload", function () {
    jQuery.each(jQuery.timer.global, function (e, t) {
        jQuery.timer.remove(t)
    })
});
var window_loaded = !1;
(function (e) {
    e.fn.galleryView = function (t) {
        function B(t) {
            e(".nav-next-overlay", O).unbind("click"), e(".nav-prev-overlay", O).unbind("click"), e(".nav-next", O).unbind("click"), e(".nav-prev", O).unbind("click"), _.unbind("click"), n.show_filmstrip && (_.removeClass("current").find("img").stop().animate({
                opacity: n.frame_opacity
            }, n.transition_speed), _.eq(t).addClass("current").find("img").stop().animate({
                opacity: 1
            }, n.transition_speed)), n.show_panels && n.fade_panels && P.fadeOut(n.transition_speed).eq(t % o).fadeIn(n.transition_speed, function () {
                n.show_filmstrip || (e(".nav-prev-overlay", O).click(q), e(".nav-next-overlay", O).click(I), e(".nav-prev", O).click(q), e(".nav-next", O).click(I))
            });
            if (n.show_filmstrip)
                if (u == "strip") {
                    M.stop();
                    var r, i;
                    x == "horizontal" ? (r = R(_[t]).left - (R(H[0]).left + d / 2 - y / 2), i = (r >= 0 ? "-=" : "+=") + Math.abs(r) + "px", M.animate({
                        left: i
                    }, n.transition_speed, n.easing, function () {
                        var r = t;
                        t > o ? (t %= o, s = t, M.css("left", "-" + (y + n.frame_gap) * t + "px")) : t <= o - strip_size && (t = t % o + o, s = t, M.css("left", "-" + (y + n.frame_gap) * t + "px")), r != t && (_.eq(r).removeClass("current").find("img").css({
                            opacity: n.frame_opacity
                        }), _.eq(t).addClass("current").find("img").css({
                            opacity: 1
                        })), n.fade_panels || P.hide().eq(t % o).show(), e(".nav-prev-overlay", O).click(q), e(".nav-next-overlay", O).click(I), e(".nav-prev", O).click(q), e(".nav-next", O).click(I), U()
                    })) : (r = R(_[t]).top - (R(H[0]).top + h - b / 2), i = (r >= 0 ? "-=" : "+=") + Math.abs(r) + "px", M.animate({
                        top: i
                    }, n.transition_speed, n.easing, function () {
                        var r = t;
                        t > o ? (t %= o, s = t, M.css("top", "-" + (b + n.frame_gap) * t + "px")) : t <= o - strip_size && (t = t % o + o, s = t, M.css("top", "-" + (b + n.frame_gap) * t + "px")), r != t && (_.eq(r).removeClass("current").find("img").css({
                            opacity: n.frame_opacity
                        }), _.eq(t).addClass("current").find("img").css({
                            opacity: 1
                        })), n.fade_panels || P.hide().eq(t % o).show(), e(".nav-prev-overlay", O).click(q), e(".nav-next-overlay", O).click(I), e(".nav-prev", O).click(q), e(".nav-next", O).click(I), U()
                    }))
                } else if (u == "pointer") {
                H.stop();
                var a = R(_[t]);
                x == "horizontal" ? H.animate({
                    left: a.left + y / 2 - d / 2 + "px"
                }, n.transition_speed, n.easing, function () {
                    n.fade_panels || P.hide().eq(t % o).show(), e(".nav-prev-overlay", O).click(q), e(".nav-next-overlay", O).click(I), e(".nav-prev", O).click(q), e(".nav-next", O).click(I), U()
                }) : H.animate({
                    top: a.top + b / 2 - h + "px"
                }, n.transition_speed, n.easing, function () {
                    n.fade_panels || P.hide().eq(t % o).show(), e(".nav-prev-overlay", O).click(q), e(".nav-next-overlay", O).click(I), e(".nav-prev", O).click(q), e(".nav-next", O).click(I), U()
                })
            }
        }

        function j(e) {
            if (!e) return 0;
            if (e.length == 0) return 0;
            e = e.eq(0);
            var t = 0;
            return t += V(e.css("paddingLeft")), t += V(e.css("paddingRight")), t += V(e.css("borderLeftWidth")), t += V(e.css("borderRightWidth")), t
        }

        function F(e) {
            if (!e) return 0;
            if (e.length == 0) return 0;
            e = e.eq(0);
            var t = 0;
            return t += V(e.css("paddingTop")), t += V(e.css("paddingBottom")), t += V(e.css("borderTopWidth")), t += V(e.css("borderBottomWidth")), t
        }

        function I() {
            e(document).stopTime("transition"), ++s == _.length && (s = 0), B(s), f || e(document).everyTime(n.transition_interval, "transition", function () {
                I()
            })
        }

        function q() {
            e(document).stopTime("transition"), --s < 0 && (s = o - 1), B(s), f || e(document).everyTime(n.transition_interval, "transition", function () {
                I()
            })
        }

        function R(e) {
            var t = 0,
                n = 0,
                i = e.id;
            if (e.offsetParent)
                do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
            if (i == r) return {
                left: t,
                top: n
            };
            var s = R(O[0]),
                o = s.left,
                u = s.top;
            return {
                left: t - o,
                top: n - u
            }
        }

        function U() {
            _.each(function (t) {
                e("a", this).length == 0 && e(this).click(function () {
                    s != t && (e(document).stopTime("transition"), B(t), s = t, f || e(document).everyTime(n.transition_interval, "transition", function () {
                        I()
                    }))
                })
            })
        }

        function z() {
            P.each(function (t) {
                e(".panel-overlay", this).length > 0 && e(this).append('<div class="overlay-background"></div>')
            }), n.show_filmstrip || (e("<img />").addClass("nav-next").attr("src", a + n.nav_theme + "/next.gif").appendTo(O).css({
                position: "absolute",
                zIndex: "1100",
                cursor: "pointer",
                top: (n.panel_height - 22) / 2 + E + "px",
                right: "10px",
                display: "none"
            }).click(I), e("<img />").addClass("nav-prev").attr("src", a + n.nav_theme + "/prev.gif").appendTo(O).css({
                position: "absolute",
                zIndex: "1100",
                cursor: "pointer",
                top: (n.panel_height - 22) / 2 + E + "px",
                left: "10px",
                display: "none"
            }).click(q), e("<img />").addClass("nav-next-overlay").attr("src", a + n.nav_theme + "/panel-nav-next.gif").appendTo(O).css({
                position: "absolute",
                zIndex: "1099",
                top: (n.panel_height - 22) / 2 + E - 10 + "px",
                right: "0",
                display: "none",
                cursor: "pointer",
                opacity: 0
            }).click(I), e("<img />").addClass("nav-prev-overlay").attr("src", a + n.nav_theme + "/panel-nav-prev.gif").appendTo(O).css({
                position: "absolute",
                zIndex: "1099",
                top: (n.panel_height - 22) / 2 + E - 10 + "px",
                left: "0",
                display: "none",
                cursor: "pointer",
                opacity: 0
            }).click(q)), P.each(function (t) {
                e(this).css({
                    width: n.panel_width - j(P) + "px",
                    height: n.panel_height - F(P) + "px",
                    position: "absolute",
                    overflow: "hidden",
                    display: "none"
                });
                switch (n.filmstrip_position) {
                case "top":
                    e(this).css({
                        top: m + Math.max(E, S) + "px",
                        left: E + "px"
                    });
                    break;
                case "left":
                    e(this).css({
                        top: E + "px",
                        left: v + Math.max(E, S) + "px"
                    });
                    break;
                default:
                    e(this).css({
                        top: E + "px",
                        left: E + "px"
                    })
                }
            }), e(".panel-overlay", P).css({
                position: "absolute",
                zIndex: "999",
                width: n.panel_width - j(e(".panel-overlay", P)) + "px",
                left: "0"
            }), e(".overlay-background", P).css({
                position: "absolute",
                zIndex: "998",
                width: n.panel_width + "px",
                left: "0",
                opacity: n.overlay_opacity
            }), n.overlay_position == "top" ? (e(".panel-overlay", P).css("top", 0), e(".overlay-background", P).css("top", 0)) : (e(".panel-overlay", P).css("bottom", 0), e(".overlay-background", P).css("bottom", 0)), e(".panel iframe", P).css({
                width: n.panel_width + "px",
                height: n.panel_height + "px",
                border: "0"
            }), L && e("img", P).each(function (t) {
                e(this).css({
                    height: N[t % o] * C[t % o],
                    width: N[t % o] * k[t % o],
                    position: "relative",
                    top: (n.panel_height - N[t % o] * C[t % o]) / 2 + "px",
                    left: (n.panel_width - N[t % o] * k[t % o]) / 2 + "px"
                })
            })
        }

        function W() {
            M.wrap('<div class="strip_wrapper"></div>'), u == "strip" && (_.clone().appendTo(M), _.clone().appendTo(M), _ = e("li", M)), n.show_captions && _.append('<div class="caption"></div>').each(function (t) {
                e(this).find(".caption").html(e(this).find("img").attr("title"))
            }), M.css({
                listStyle: "none",
                margin: "0",
                padding: "0",
                width: v + "px",
                position: "absolute",
                zIndex: "900",
                top: (x == "vertical" && u == "strip" ? -((b + n.frame_gap) * s) : 0) + "px",
                left: (x == "horizontal" && u == "strip" ? -((y + n.frame_gap) * s) : 0) + "px",
                height: m + "px"
            }), _.css({
                display: "block",
                "float": "left",
                position: "relative",
                height: b + (n.show_captions ? w : 0) + "px",
                width: y + "px",
                zIndex: "901",
                padding: "0",
                cursor: "pointer"
            });
            switch (n.filmstrip_position) {
            case "top":
                _.css({
                    marginBottom: S + "px",
                    marginRight: n.frame_gap + "px"
                });
                break;
            case "bottom":
                _.css({
                    marginTop: S + "px",
                    marginRight: n.frame_gap + "px"
                });
                break;
            case "left":
                _.css({
                    marginRight: S + "px",
                    marginBottom: n.frame_gap + "px"
                });
                break;
            case "right":
                _.css({
                    marginLeft: S + "px",
                    marginBottom: n.frame_gap + "px"
                })
            }
            e(".img_wrap", _).each(function (t) {
                e(this).css({
                    height: Math.min(n.frame_height, C[t % o] * T[t % o]) + "px",
                    width: Math.min(n.frame_width, k[t % o] * T[t % o]) + "px",
                    position: "relative",
                    top: (n.show_captions && n.filmstrip_position == "top" ? w : 0) + Math.max(0, (n.frame_height - T[t % o] * C[t % o]) / 2) + "px",
                    left: Math.max(0, (n.frame_width - T[t % o] * k[t % o]) / 2) + "px",
                    overflow: "hidden"
                })
            }), e("img", _).each(function (t) {
                e(this).css({
                    opacity: n.frame_opacity,
                    height: C[t % o] * T[t % o] + "px",
                    width: k[t % o] * T[t % o] + "px",
                    position: "relative",
                    top: Math.min(0, (n.frame_height - T[t % o] * C[t % o]) / 2) + "px",
                    left: Math.min(0, (n.frame_width - T[t % o] * k[t % o]) / 2) + "px"
                }).mouseover(function () {
                    e(this).stop().animate({
                        opacity: 1
                    }, 300)
                }).mouseout(function () {
                    e(this).parent().parent().hasClass("current") || e(this).stop().animate({
                        opacity: n.frame_opacity
                    }, 300)
                })
            }), e(".strip_wrapper", O).css({
                position: "absolute",
                overflow: "hidden"
            }), x == "horizontal" ? e(".strip_wrapper", O).css({
                top: n.filmstrip_position == "top" ? Math.max(E, S) + "px" : n.panel_height + E + "px",
                left: (l - g) / 2 + E + "px",
                width: g + "px",
                height: m + "px"
            }) : e(".strip_wrapper", O).css({
                left: n.filmstrip_position == "left" ? Math.max(E, S) + "px" : n.panel_width + E + "px",
                top: Math.max(E, n.frame_gap) + "px",
                width: v + "px",
                height: wrapper_height + "px"
            }), e(".caption", O).css({
                position: "absolute",
                top: (n.filmstrip_position == "bottom" ? b : 0) + "px",
                left: "0",
                margin: "0",
                width: y + "px",
                padding: "0",
                height: w + "px",
                overflow: "hidden",
                lineHeight: w + "px"
            });
            var t = e("<div></div>");
            t.addClass("pointer").appendTo(O).css({
                position: "absolute",
                zIndex: "1000",
                width: "0px",
                fontSize: "0px",
                lineHeight: "0%",
                borderTopWidth: h + "px",
                borderRightWidth: d / 2 + "px",
                borderBottomWidth: h + "px",
                borderLeftWidth: d / 2 + "px",
                borderStyle: "solid"
            });
            var r = typeof document.documentElement.style.maxHeight == "undefined" ? "pink" : "transparent";
            n.show_panels || t.css("borderColor", r);
            switch (n.filmstrip_position) {
            case "top":
                t.css({
                    bottom: n.panel_height - h * 2 + E + S + "px",
                    left: (l - g) / 2 + (u == "strip" ? 0 : (y + n.frame_gap) * s) + (y / 2 - d / 2) + E + "px",
                    borderBottomColor: r,
                    borderRightColor: r,
                    borderLeftColor: r
                });
                break;
            case "bottom":
                t.css({
                    top: n.panel_height - h * 2 + E + S + "px",
                    left: (l - g) / 2 + (u == "strip" ? 0 : (y + n.frame_gap) * s) + (y / 2 - d / 2) + E + "px",
                    borderTopColor: r,
                    borderRightColor: r,
                    borderLeftColor: r
                });
                break;
            case "left":
                t.css({
                    right: n.panel_width - d + E + S + "px",
                    top: b / 2 - h + (u == "strip" ? 0 : (b + n.frame_gap) * s) + E + "px",
                    borderBottomColor: r,
                    borderRightColor: r,
                    borderTopColor: r
                });
                break;
            case "right":
                t.css({
                    left: n.panel_width - d + E + S + "px",
                    top: b / 2 - h + (u == "strip" ? 0 : (b + n.frame_gap) * s) + E + "px",
                    borderBottomColor: r,
                    borderLeftColor: r,
                    borderTopColor: r
                })
            }
            H = e(".pointer", O);
            var i = e("<img />");
            i.addClass("nav-next").attr("src", a + n.nav_theme + "/next.gif").appendTo(O).css({
                position: "absolute",
                cursor: "pointer"
            }).click(I);
            var f = e("<img />");
            f.addClass("nav-prev").attr("src", a + n.nav_theme + "/prev.gif").appendTo(O).css({
                position: "absolute",
                cursor: "pointer"
            }).click(q), x == "horizontal" ? (i.css({
                top: (n.filmstrip_position == "top" ? Math.max(E, S) : n.panel_height + S + E) + (b - 22) / 2 + "px",
                right: (l + E * 2) / 2 - g / 2 - n.frame_gap - 22 + "px"
            }), f.css({
                top: (n.filmstrip_position == "top" ? Math.max(E, S) : n.panel_height + S + E) + (b - 22) / 2 + "px",
                left: (l + E * 2) / 2 - g / 2 - n.frame_gap - 22 + "px"
            })) : (i.css({
                left: (n.filmstrip_position == "left" ? Math.max(E, S) : n.panel_width + S + E) + (y - 22) / 2 + 13 + "px",
                top: wrapper_height + Math.max(E, n.frame_gap) * 2 + "px"
            }), f.css({
                left: (n.filmstrip_position == "left" ? Math.max(E, S) : n.panel_width + S + E) + (y - 22) / 2 - 13 + "px",
                top: wrapper_height + Math.max(E, n.frame_gap) * 2 + "px"
            }))
        }

        function X(e, t) {
            var n = R(O[0]),
                r = n.top,
                i = n.left;
            return e > i && e < i + l + (x == "horizontal" ? E * 2 : E + Math.max(E, S)) && t > r && t < r + c + (x == "vertical" ? E * 2 : E + Math.max(E, S))
        }

        function V(e) {
            return e = parseInt(e, 10), isNaN(e) && (e = 0), e
        }

        function J() {
            var t = n.show_filmstrip ? e("img", _) : e("img", P);
            t.each(function (e) {
                C[e] = this.height, k[e] = this.width, n.frame_scale == "nocrop" ? T[e] = Math.min(n.frame_height / C[e], n.frame_width / k[e]) : T[e] = Math.max(n.frame_height / C[e], n.frame_width / k[e]), n.panel_scale == "nocrop" ? N[e] = Math.min(n.panel_height / C[e], n.panel_width / k[e]) : N[e] = Math.max(n.panel_height / C[e], n.panel_width / k[e])
            }), O.css({
                position: "relative",
                width: l + (x == "horizontal" ? E * 2 : E + Math.max(E, S)) + "px",
                height: c + (x == "vertical" ? E * 2 : E + Math.max(E, S)) + "px"
            }), n.show_filmstrip && (W(), U()), n.show_panels && z(), (n.pause_on_hover || n.show_panels && !n.show_filmstrip) && e(document).mousemove(function (t) {
                X(t.pageX, t.pageY) ? (n.pause_on_hover && (f || e(document).oneTime(500, "animation_pause", function () {
                    e(document).stopTime("transition"), f = !0
                })), n.show_panels && !n.show_filmstrip && !A && (e(".nav-next-overlay").fadeIn("fast"), e(".nav-prev-overlay").fadeIn("fast"), e(".nav-next", O).fadeIn("fast"), e(".nav-prev", O).fadeIn("fast"), A = !0)) : (n.pause_on_hover && (e(document).stopTime("animation_pause"), f && (e(document).everyTime(n.transition_interval, "transition", function () {
                    I()
                }), f = !1)), n.show_panels && !n.show_filmstrip && A && (e(".nav-next-overlay").fadeOut("fast"), e(".nav-prev-overlay").fadeOut("fast"), e(".nav-next", O).fadeOut("fast"), e(".nav-prev", O).fadeOut("fast"), A = !1))
            }), M.css("visibility", "visible"), O.css("visibility", "visible"), e(".loader", O).fadeOut("1000", function () {
                B(s), o > 1 && e(document).everyTime(n.transition_interval, "transition", function () {
                    I()
                })
            })
        }
        var n = e.extend(e.fn.galleryView.defaults, t),
            r, s = 0,
            o = 0,
            u, a, f = !1,
            l, c, h, d, v, m, g, y, b, w = 20,
            E, S, x, T = {}, N = {}, C = {}, k = {}, L = !0,
            A = !1,
            O, M, _, D, P, H;
        return this.each(function () {
            e(this).css("visibility", "hidden"), e(this).wrap("<div></div>"), O = e(this).parent(), O.css("visibility", "hidden").attr("id", e(this).attr("id")).addClass("gallery"), e(this).removeAttr("id").addClass("filmstrip"), e(document).stopTime("transition"), e(document).stopTime("animation_pause"), r = O.attr("id"), L = e(".panel-content", O).length == 0, h = n.pointer_size, d = n.pointer_size * 2, x = n.filmstrip_position == "top" || n.filmstrip_position == "bottom" ? "horizontal" : "vertical", x == "vertical" && (n.show_captions = !1), e("script").each(function (t) {
                var n = e(this);
                n.attr("src") && n.attr("src").match(/jquery\.galleryview/) && (loader_path = n.attr("src").split("jquery.galleryview")[0]), a = "/assets/themes/"
            }), M = e(".filmstrip", O), _ = e("li", M), _.addClass("frame");
            if (n.show_panels)
                for (i = _.length - 1; i >= 0; i--) _.eq(i).find(".panel-content").length > 0 ? _.eq(i).find(".panel-content").remove().prependTo(O).addClass("panel") : (p = e("<div>"), p.addClass("panel"), im = e("<img />"), im.attr("src", _.eq(i).find("img").eq(0).attr("src")).appendTo(p), p.prependTo(O), _.eq(i).find(".panel-overlay").remove().appendTo(p));
            else e(".panel-overlay", _).remove(), e(".panel-content", _).remove();
            n.show_filmstrip ? (_.each(function (t) {
                e(this).find("a").length > 0 ? e(this).find("a").wrap('<div class="img_wrap"></div>') : e(this).find("img").wrap('<div class="img_wrap"></div>')
            }), D = e(".img_wrap", _)) : M.remove(), P = e(".panel", O), n.show_panels || (n.panel_height = 0, n.panel_width = 0), y = n.frame_width + j(D), b = n.frame_height + F(D), o = n.show_panels ? P.length : _.length, x == "horizontal" ? strip_size = n.show_panels ? Math.floor((n.panel_width - (n.frame_gap + 22) * 2) / (y + n.frame_gap)) : Math.min(o, n.filmstrip_size) : strip_size = n.show_panels ? Math.floor((n.panel_height - (n.frame_gap + 22)) / (b + n.frame_gap)) : Math.min(o, n.filmstrip_size), strip_size >= o ? (u = "pointer", strip_size = o) : u = "strip", s = (strip_size < o ? o : 0) + n.start_frame - 1, S = n.show_panels ? V(M.css("marginTop")) : 0, M.css("margin", "0px"), x == "horizontal" ? (l = n.show_panels ? n.panel_width : strip_size * (y + n.frame_gap) + 44 + n.frame_gap, c = (n.show_panels ? n.panel_height : 0) + (n.show_filmstrip ? b + S + (n.show_captions ? w : 0) : 0)) : (c = n.show_panels ? n.panel_height : strip_size * (b + n.frame_gap) + 22, l = (n.show_panels ? n.panel_width : 0) + (n.show_filmstrip ? y + S : 0)), x == "horizontal" ? u == "pointer" ? v = y * o + n.frame_gap * o : v = y * o * 3 + n.frame_gap * o * 3 : v = y + S, x == "horizontal" ? m = b + S + (n.show_captions ? w : 0) : u == "pointer" ? m = b * o + n.frame_gap * o : m = b * o * 3 + n.frame_gap * o * 3, g = strip_size * y + (strip_size - 1) * n.frame_gap, wrapper_height = strip_size * b + (strip_size - 1) * n.frame_gap, E = V(O.css("paddingTop")), O.css("padding", "0px"), galleryPos = R(O[0]), e("<div>").addClass("loader").css({
                visibility: "visible",
                zIndex: "32666",
                opacity: 1,
                top: "0px",
                left: "0px",
                width: l + (x == "horizontal" ? E * 2 : E + Math.max(E, S)) + "px",
                height: c + (x == "vertical" ? E * 2 : E + Math.max(E, S)) + "px"
            }).prependTo(O), window_loaded ? J() : e(window).load(function () {
                window_loaded = !0, J()
            })
        })
    }, e.fn.galleryView.defaults = {
        show_panels: !0,
        show_filmstrip: !0,
        panel_width: 600,
        panel_height: 400,
        frame_width: 60,
        frame_height: 40,
        start_frame: 1,
        filmstrip_size: 3,
        transition_speed: 800,
        transition_interval: 4e3,
        overlay_opacity: .7,
        frame_opacity: .3,
        pointer_size: 8,
        nav_theme: "dark",
        easing: "swing",
        filmstrip_position: "bottom",
        overlay_position: "bottom",
        panel_scale: "nocrop",
        frame_scale: "crop",
        frame_gap: 5,
        show_captions: !1,
        fade_panels: !0,
        pause_on_hover: !1
    }
})(jQuery),
function (e) {
    var t = new Array;
    jQuery.fn.MyThumbnail = function (n) {
        function r(n, r, i, s) {
            var o = e(n).attr("src"),
                u = t[s],
                a = u.thumbWidth / r,
                f = null,
                l = null;
            f = u.thumbWidth, l = i * a;
            if (l < u.thumbHeight) {
                var c = u.thumbHeight / l;
                l = u.thumbHeight, f = c * f
            }
            var h = null;
            u.bShowPointerCursor ? (h = "<DIV class='myThumbDivAutoAdd " + u.imageDivClass + "' style='cursor:pointer;display:none;float:left;width:" + u.thumbWidth + "px;height:" + u.thumbHeight + "px;overflow:hidden;background:url(" + o + ") no-repeat " + u.backgroundColor + ";", h += "background-position:center;background-size:" + f + "px " + l + "px;'></DIV>") : (h = "<DIV class='myThumbDivAutoAdd " + u.imageDivClass + "' style='display:none;float:left;width:" + u.thumbWidth + "px;height:" + u.thumbHeight + "px;overflow:hidden;background:url(" + o + ") no-repeat " + u.backgroundColor + ";", h += "background-position:center;background-size:" + f + "px " + l + "px;'></DIV>"), e(n).after(h), e(".myThumbDivAutoAdd").fadeIn()
        }
        return t[t.length] = e.extend({}, e.fn.MyThumbnail.defaults, n), this.each(function () {
            e(this).removeAttr("width").removeAttr("height");
            var n = this,
                i = e(this).attr("src"),
                s = e(this).width(),
                o = e(this).height();
            e(this).hide();
            if (s == 0 || o == 0) {
                var u = t.length - 1;
                e("<img/>").attr("src", e(this).attr("src")).load(function () {
                    s = this.width, o = this.height, r(n, s, o, u)
                })
            } else {
                var u = t.length - 1;
                r(n, s, o, u)
            }
        })
    }, jQuery.fn.MyThumbnail.defaults = {
        thumbWidth: 130,
        thumbHeight: 100,
        backgroundColor: "#ccc",
        imageDivClass: "myPic",
        bShowPointerCursor: !1
    }
}(jQuery),
function (e, t, n) {
    function f(e) {
        var t = {}, r = /^jQuery\d+$/;
        return n.each(e.attributes, function (e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        }), t
    }

    function l(e, r) {
        var i = this,
            s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0) return s[0].value = r;
                s.focus()
            } else i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
    }

    function c() {
        var e, t = this,
            r = n(t),
            i = r,
            s = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        e = n("<input>").attr(n.extend(f(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": !0,
                        "placeholder-id": s
                    }).bind("focus.placeholder", l), r.data({
                        "placeholder-textinput": e,
                        "placeholder-id": s
                    }).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", s).show()
            }
            r.addClass("placeholder"), r[0].value = r.attr("placeholder")
        } else r.removeClass("placeholder")
    }
    var r = "placeholder" in t.createElement("input"),
        i = "placeholder" in t.createElement("textarea"),
        s = n.fn,
        o = n.valHooks,
        u, a;
    r && i ? (a = s.placeholder = function () {
        return this
    }, a.input = a.textarea = !0) : (a = s.placeholder = function () {
        var e = this;
        return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": l,
            "blur.placeholder": c
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, a.input = r, a.textarea = i, u = {
        get: function (e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },
        set: function (e, r) {
            var i = n(e);
            return i.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && c.call(e)) : i.hasClass("placeholder") ? l.call(e, !0, r) || (e.value = r) : e.value = r, i) : e.value = r
        }
    }, r || (o.input = u), i || (o.textarea = u), n(function () {
        n(t).delegate("form", "submit.placeholder", function () {
            var e = n(".placeholder", this).each(l);
            setTimeout(function () {
                e.each(c)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function () {
        n(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery),
function (e) {
    var t = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        n = ["日", "月", "火", "水", "木", "金", "土"],
        r = [],
        i = [],
        s = -1,
        o = function (t) {
            var n = e(t),
                r;
            if (n.hasClass("datepicker")) r = n;
            else {
                var i = n.parents();
                for (var s = 0; s < i.length; s++) e(i[s]).hasClass("datepicker") && (r = e(i[s]))
            }
            return r
        }, u = function (t) {
            var n = o(t);
            return n.data("inputObjectId") != null ? e(i[n.data("inputObjectId")]) : null
        }, a = function (e) {
            var t = o(e),
                n = c(t),
                r = (new Date(n.getYear() + 1900, n.getMonth(), 0)).getDate(),
                i = new Date,
                s = new Date(i.getYear() + 1900, i.getMonth(), 1);
            if (t.data("allowPastDate") == 0 && n < s) return;
            r < n.getDate() ? n.setDate(r) : t.data("allowPastDate") == 0 && s < n && n.setDate(i.getDate()), d(t, {
                isAnim: !0,
                isOutputToInputObject: !0
            }, n.getYear() + 1900, n.getMonth() - 1, n.getDate(), n.getHours(), n.getMinutes())
        }, f = function (e) {
            var t = o(e),
                n = c(t),
                r = (new Date(n.getYear() + 1900, n.getMonth() + 1, 0)).getDate();
            r < n.getDate() && n.setDate(r), d(t, {
                isAnim: !0,
                isOutputToInputObject: !0
            }, n.getYear() + 1900, n.getMonth() + 1, n.getDate(), n.getHours(), n.getMinutes())
        }, l = function (e) {
            var t = c(e),
                n = u(e),
                r = e.data("dateFormat"),
                i = e.data("locale"),
                s = "";
            if (n == null) return;
            console.log(r), r == "default" && (i == "ja" ? r = "YYYY/MM/DD hh:mm" : r = "YYYY-MM-DD hh:mm"), s = r;
            var o = t.getYear() + 1900,
                a = t.getMonth() + 1,
                f = t.getDate(),
                l = t.getHours(),
                p = t.getMinutes();
            s = s.replace(/YYYY/gi, o).replace(/YY/g, o - 2e3).replace(/MM/g, h(a)).replace(/M/g, a).replace(/DD/g, h(f)).replace(/D/g, f).replace(/hh/g, h(l)).replace(/h/g, l).replace(/mm/g, h(p)).replace(/m/g, p), n.val(s)
        }, c = function (e) {
            var t = o(e);
            return t.data("pickedDate")
        }, h = function (e) {
            return e = ("0" + e).slice(-2), e
        }, p = function (e, t, n) {
            d(e, t, n.getYear() + 1900, n.getMonth(), n.getDate(), n.getHours(), n.getMinutes())
        }, d = function (r, i, s, u, p, v, m) {
            var g = new Date;
            m != null && (m < 30 ? m = 0 : m = 30), v != null ? g = new Date(s, u, p, v, m, 0) : s != null ? g = new Date(s, u, p) : g = new Date;
            var y = i.isAnim,
                b = i.isOutputToInputObject,
                w = r.data("locale"),
                E = t;
            w == "ja" && (E = n);
            var S = new Date,
                x = new Date(S.getYear() + 1900, S.getMonth(), S.getDate(), 0, 0, 0),
                T = (new Date(g.getYear() + 1900, g.getMonth(), 1)).getDay(),
                N = (new Date(g.getYear() + 1900, g.getMonth() + 1, 0)).getDate(),
                C = (new Date(g.getYear() + 1900, g.getMonth(), 0)).getDate(),
                k = new Date(g.getYear() + 1900, g.getMonth(), 0),
                L = new Date(g.getYear() + 1900, g.getMonth() + 2, 0),
                A = r.children(".datepicker_header"),
                O = r.children(".datepicker_inner_container"),
                M = r.children(".datepicker_inner_container").children(".datepicker_calendar"),
                _ = M.children(".datepicker_table"),
                D = r.children(".datepicker_inner_container").children(".datepicker_timelist"),
                P = "",
                H = c(r);
            if (H != null)
                if (H.getMonth() != g.getMonth() || H.getDate() != g.getDate()) P = "calendar";
                else if (H.getHours() != g.getHours() || H.getMinutes() != g.getMinutes())
                if (g.getMinutes() == 0 || g.getMinutes() == 30) P = "timelist";
            e(r).data("pickedDate", g), y == 1 && (P == "calendar" ? (M.stop().queue([]), M.fadeTo("fast", .5)) : P == "timelist" && (D.stop().queue([]), D.fadeTo("fast", .5)));
            var B = D.scrollTop(),
                j = -1;
            A.children().remove();
            var F = e("<a>");
            F.text("<"), F.click(function () {
                a(r)
            });
            var I = e("<span>");
            w == "en" ? I.text(g.getYear() + 1900 + " - " + h(g.getMonth() + 1)) : w == "ja" && I.text(g.getYear() + 1900 + " / " + h(g.getMonth() + 1));
            var q = e("<a>");
            q.text(">"), q.click(function () {
                f(r)
            }), A.append(F), A.append(I), A.append(q), _.children().remove();
            var R = e("<tr>");
            _.append(R);
            for (var U = 0; U < 7; U++) {
                var z = e("<th>");
                z.text(E[U]), R.append(z)
            }
            var W = Math.ceil((T + N) / 7) * 7;
            for (var U = 0; U < W; U++) {
                var X =
                    U + 1 - T;
                U % 7 == 0 && (R = e("<tr>"), _.append(R));
                var z = e("<td>");
                z.data("day", X), R.append(z), T > U ? (z.text(C + X), z.addClass("day_another_month"), z.data("dateStr", k.getYear() + 1900 + "/" + (k.getMonth() + 1) + "/" + (C + X))) : U < T + N ? (z.text(X), z.data("dateStr", g.getYear() + 1900 + "/" + (g.getMonth() + 1) + "/" + X)) : (z.text(X - N), z.addClass("day_another_month"), z.data("dateStr", L.getYear() + 1900 + "/" + (L.getMonth() + 1) + "/" + (X - N))), U % 7 == 0 ? z.addClass("wday_sun") : U % 7 == 6 && z.addClass("wday_sat"), X == g.getDate() && z.addClass("active");
                var V = new Date(z.data("dateStr"));
                g.getMonth() == x.getMonth() && X == x.getDate() ? z.addClass("today") : r.data("allowPastDate") == 0 && V < x && z.addClass("unselectable_day"), z.click(function () {
                    var t = o(e(this)),
                        n = new Date(e(this).data("dateStr")),
                        r = c(t);
                    if (t.data("allowPastDate") == 0 && n < x) return;
                    e(this).hasClass("hover") && e(this).removeClass("hover"), e(this).addClass("active"), d(t, {
                        isAnim: !1,
                        isOutputToInputObject: !0
                    }, n.getYear() + 1900, n.getMonth(), n.getDate(), r.getHours(), r.getMinutes()), t.hide()
                }), z.hover(function () {
                    e(this).hasClass("active") || e(this).addClass("hover")
                }, function () {
                    e(this).hasClass("hover") && e(this).removeClass("hover")
                })
            }
            D.children().remove(), D.css("height", M.innerHeight() - 10 + "px");
            for (var v = 0; v < 24; v++)
                for (var m = 0; m <= 30; m += 30) {
                    var J = e("<div>");
                    J.addClass("timelist_item"), J.text(h(v) + ":" + h(m)), J.data("hour", v), J.data("min", m), D.append(J), v == g.getHours() && m == 0 == g.getMinutes() / 30 < 1 && (J.addClass("active"), j = J.offset().top), J.click(function () {
                        e(this).hasClass("hover") && e(this).removeClass("hover"), e(this).addClass("active");
                        var t = o(e(this)),
                            n = c(t),
                            r = e(this).data("hour"),
                            i = e(this).data("min");
                        d(t, {
                            isAnim: !1,
                            isOutputToInputObject: !0
                        }, n.getYear() + 1900, n.getMonth(), n.getDate(), r, i)
                    }), J.hover(function () {
                        e(this).hasClass("active") || e(this).addClass("hover")
                    }, function () {
                        e(this).hasClass("hover") && e(this).removeClass("hover")
                    })
                }
            y == 1 ? D.scrollTop(j - D.offset().top) : D.scrollTop(B), y == 1 && (P == "calendar" ? M.fadeTo("fast", 1) : P == "timelist" && D.fadeTo("fast", 1)), b == 1 && l(r)
        }, v = function (t, n) {
            console.log("dtpicker init... "), console.log(n);
            var i = e("<div>");
            i.addClass("datepicker"), t.append(i), n.inputObjectId != null && i.data("inputObjectId", n.inputObjectId), i.data("pickerId", r.length), i.data("dateFormat", n.dateFormat), i.data("locale", n.locale), i.data("allowPastDate", n.allowPastDate);
            var o = e("<div>");
            o.addClass("datepicker_header"), i.append(o);
            var a = e("<div>");
            a.addClass("datepicker_inner_container"), i.append(a);
            var f = e("<div>");
            f.addClass("datepicker_calendar");
            var l = e("<table>");
            l.addClass("datepicker_table"), f.append(l), a.append(f);
            var c = e("<div>");
            c.addClass("datepicker_timelist"), a.append(c), i.hover(function () {
                s = e(this).data("pickerId")
            }, function () {
                s = -1
            }), r.push(i), u(i).val() != "" ? p(i, {
                isAnim: !0,
                isOutputToInputObject: !0
            }, n.current) : p(i, {
                isAnim: !0,
                isOutputToInputObject: !1
            }, n.current)
        };
    e.fn.dtpicker = function (t) {
        var n = {
            inputObjectId: undefined,
            current: (new Date).toString(),
            dateFormat: "default",
            locale: "en",
            allowPastDate: !0
        }, r = e.extend(n, t);
        return r.current = new Date(r.current), this.each(function (t) {
            v(e(this), r)
        })
    }, e.fn.appendDtpicker = function (t) {
        var n = {
            inline: !1,
            current: (new Date).toString(),
            dateFormat: "default",
            locale: "en",
            allowPastDate: !0
        }, o = e.extend(n, t);
        return this.each(function (t) {
            var n = this,
                u = i.length;
            i.push(n), o.inputObjectId = u;
            var a;
            e(n).val() != null && e(n).val() != "" ? a = new Date(e(n).val()) : a = new Date(o.current), o.currentDate = a;
            var f = e("<div>");
            o.inline == 0 && f.css("position", "absolute"), f.insertAfter(n);
            var l = r.length,
                c = e(f).dtpicker(o),
                h = c.children(".datepicker");
            h.data("allowPastDate", o.allowPastDate), e(n).data("pickerId", l), e(n).keyup(function () {
                var t = e(this),
                    n = e(r[t.data("pickerId")]);
                if (t.val() != null && (t.data("beforeVal") == null || t.data("beforeVal") != null && t.data("beforeVal") != t.val())) {
                    var i = new Date(t.val());
                    isNaN(i.getDate()) == 0 && p(n, {
                        isAnim: !0,
                        isOutputToInputObject: !1
                    }, i)
                }
                t.data("beforeVal", t.val())
            }), e(n).change(function () {
                e(this).trigger("keyup")
            }), o.inline == 1 ? h.data("isInline", !0) : (h.data("isInline", !1), c.css({
                zIndex: 100
            }), h.css("width", "auto"), h.hide(), e(n).click(function () {
                var t = e(this),
                    n = e(r[t.data("pickerId")]);
                s = t.data("pickerId"), n.show(), n.parent().css("top", t.offset().top - t.offsetParent().offset().top + "px"), n.parent().css("left", t.offset().left - t.offsetParent().offset().left + t.outerWidth() + o.additionalLeft + 2 + "px")
            }), e(n).hover(function () {}, function () {
                s = -1
            }))
        })
    }, e(function () {
        e("body").click(function () {
            for (var t = 0; t < r.length; t++) {
                var n = e(r[t]);
                s != t && n.data("inputObjectId") != null && n.data("isInline") == 0 && n.hide()
            }
        })
    })
}(jQuery),
function ($) {
    $.extend({
        tablesorter: new function () {
            function benchmark(e, t) {
                log(e + "," + ((new Date).getTime() - t.getTime()) + "ms")
            }

            function log(e) {
                typeof console != "undefined" && typeof console.debug != "undefined" ? console.log(e) : alert(e)
            }

            function buildParserCache(e, t) {
                if (e.config.debug) var n = "";
                if (e.tBodies.length == 0) return;
                var r = e.tBodies[0].rows;
                if (r[0]) {
                    var i = [],
                        s = r[0].cells,
                        o = s.length;
                    for (var u = 0; u < o; u++) {
                        var a = !1;
                        $.metadata && $(t[u]).metadata() && $(t[u]).metadata().sorter ? a = getParserById($(t[u]).metadata().sorter) : e.config.headers[u] && e.config.headers[u].sorter && (a = getParserById(e.config.headers[u].sorter)), a || (a = detectParserForColumn(e, r, -1, u)), e.config.debug && (n += "column:" + u + " parser:" + a.id + "\n"), i.push(a)
                    }
                }
                return e.config.debug && log(n), i
            }

            function detectParserForColumn(e, t, n, r) {
                var i = parsers.length,
                    s = !1,
                    o = !1,
                    u = !0;
                while (o == "" && u) n++, t[n] ? (s = getNodeFromRowAndCellIndex(t, n, r), o = trimAndGetNodeText(e.config, s), e.config.debug && log("Checking if value was empty on row:" + n)) : u = !1;
                for (var a = 1; a < i; a++)
                    if (parsers[a].is(o, e, s)) return parsers[a];
                return parsers[0]
            }

            function getNodeFromRowAndCellIndex(e, t, n) {
                return e[t].cells[n]
            }

            function trimAndGetNodeText(e, t) {
                return $.trim(getElementText(e, t))
            }

            function getParserById(e) {
                var t = parsers.length;
                for (var n = 0; n < t; n++)
                    if (parsers[n].id.toLowerCase() == e.toLowerCase()) return parsers[n];
                return !1
            }

            function buildCache(e) {
                if (e.config.debug) var t = new Date;
                var n = e.tBodies[0] && e.tBodies[0].rows.length || 0,
                    r = e.tBodies[0].rows[0] && e.tBodies[0].rows[0].cells.length || 0,
                    i = e.config.parsers,
                    s = {
                        row: [],
                        normalized: []
                    };
                for (var o = 0; o < n; ++o) {
                    var u = $(e.tBodies[0].rows[o]),
                        a = [];
                    if (u.hasClass(e.config.cssChildRow)) {
                        s.row[s.row.length - 1] = s.row[s.row.length - 1].add(u);
                        continue
                    }
                    s.row.push(u);
                    for (var f = 0; f < r; ++f) a.push(i[f].format(getElementText(e.config, u[0].cells[f]), e, u[0].cells[f]));
                    a.push(s.normalized.length), s.normalized.push(a), a = null
                }
                return e.config.debug && benchmark("Building cache for " + n + " rows:", t), s
            }

            function getElementText(e, t) {
                var n = "";
                return t ? (e.supportsTextContent || (e.supportsTextContent = t.textContent || !1), e.textExtraction == "simple" ? e.supportsTextContent ? n = t.textContent : t.childNodes[0] && t.childNodes[0].hasChildNodes() ? n = t.childNodes[0].innerHTML : n = t.innerHTML : typeof e.textExtraction == "function" ? n = e.textExtraction(t) : n = $(t).text(), n) : ""
            }

            function appendToTable(e, t) {
                if (e.config.debug) var n = new Date;
                var r = t,
                    i = r.row,
                    s = r.normalized,
                    o = s.length,
                    u = s[0].length - 1,
                    a = $(e.tBodies[0]),
                    f = [];
                for (var l = 0; l < o; l++) {
                    var c = s[l][u];
                    f.push(i[c]);
                    if (!e.config.appender) {
                        var h = i[c].length;
                        for (var p = 0; p < h; p++) a[0].appendChild(i[c][p])
                    }
                }
                e.config.appender && e.config.appender(e, f), f = null, e.config.debug && benchmark("Rebuilt table:", n), applyWidget(e), setTimeout(function () {
                    $(e).trigger("sortEnd")
                }, 0)
            }

            function buildHeaders(e) {
                if (e.config.debug) var t = new Date;
                var n = $.metadata ? !0 : !1,
                    r = computeTableHeaderCellIndexes(e);
                return $tableHeaders = $(e.config.selectorHeaders, e).each(function (t) {
                    this.column = r[this.parentNode.rowIndex + "-" + this.cellIndex], this.order = formatSortingOrder(e.config.sortInitialOrder), this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(e, t)) this.sortDisabled = !0;
                    checkHeaderOptionsSortingLocked(e, t) && (this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(e, t));
                    if (!this.sortDisabled) {
                        var n = $(this).addClass(e.config.cssHeader);
                        e.config.onRenderHeader && e.config.onRenderHeader.apply(n)
                    }
                    e.config.headerList[t] = this
                }), e.config.debug && (benchmark("Built headers:", t), log($tableHeaders)), $tableHeaders
            }

            function computeTableHeaderCellIndexes(e) {
                var t = [],
                    n = {}, r = e.getElementsByTagName("THEAD")[0],
                    i = r.getElementsByTagName("TR");
                for (var s = 0; s < i.length; s++) {
                    var o = i[s].cells;
                    for (var u = 0; u < o.length; u++) {
                        var a = o[u],
                            f = a.parentNode.rowIndex,
                            l = f + "-" + a.cellIndex,
                            c = a.rowSpan || 1,
                            h = a.colSpan || 1,
                            p;
                        typeof t[f] == "undefined" && (t[f] = []);
                        for (var d = 0; d < t[f].length + 1; d++)
                            if (typeof t[f][d] == "undefined") {
                                p = d;
                                break
                            }
                        n[l] = p;
                        for (var d = f; d < f + c; d++) {
                            typeof t[d] == "undefined" && (t[d] = []);
                            var v = t[d];
                            for (var m = p; m < p + h; m++) v[m] = "x"
                        }
                    }
                }
                return n
            }

            function checkCellColSpan(e, t, n) {
                var r = [],
                    i = e.tHead.rows,
                    s = i[n].cells;
                for (var o = 0; o < s.length; o++) {
                    var u = s[o];
                    u.colSpan > 1 ? r = r.concat(checkCellColSpan(e, headerArr, n++)) : (e.tHead.length == 1 || u.rowSpan > 1 || !i[n + 1]) && r.push(u)
                }
                return r
            }

            function checkHeaderMetadata(e) {
                return $.metadata && $(e).metadata().sorter === !1 ? !0 : !1
            }

            function checkHeaderOptions(e, t) {
                return e.config.headers[t] && e.config.headers[t].sorter === !1 ? !0 : !1
            }

            function checkHeaderOptionsSortingLocked(e, t) {
                return e.config.headers[t] && e.config.headers[t].lockedOrder ? e.config.headers[t].lockedOrder : !1
            }

            function applyWidget(e) {
                var t = e.config.widgets,
                    n = t.length;
                for (var r = 0; r < n; r++) getWidgetById(t[r]).format(e)
            }

            function getWidgetById(e) {
                var t = widgets.length;
                for (var n = 0; n < t; n++)
                    if (widgets[n].id.toLowerCase() == e.toLowerCase()) return widgets[n]
            }

            function formatSortingOrder(e) {
                return typeof e != "Number" ? e.toLowerCase() == "desc" ? 1 : 0 : e == 1 ? 1 : 0
            }

            function isValueInArray(e, t) {
                var n = t.length;
                for (var r = 0; r < n; r++)
                    if (t[r][0] == e) return !0;
                return !1
            }

            function setHeadersCss(e, t, n, r) {
                t.removeClass(r[0]).removeClass(r[1]);
                var i = [];
                t.each(function (e) {
                    this.sortDisabled || (i[this.column] = $(this))
                });
                var s = n.length;
                for (var o = 0; o < s; o++) i[n[o][0]].addClass(r[n[o][1]])
            }

            function fixColumnWidth(e, t) {
                var n = e.config;
                if (n.widthFixed) {
                    var r = $("<colgroup>");
                    $("tr:first td", e.tBodies[0]).each(function () {
                        r.append($("<col>").css("width", $(this).width()))
                    }), $(e).prepend(r)
                }
            }

            function updateHeaderSortCount(e, t) {
                var n = e.config,
                    r = t.length;
                for (var i = 0; i < r; i++) {
                    var s = t[i],
                        o = n.headerList[s[0]];
                    o.count = s[1], o.count++
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) var sortTime = new Date;
                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0],
                        order = sortList[i][1],
                        s = table.config.parsers[c].type == "text" ? order == 0 ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : order == 0 ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c),
                        e = "e" + i;
                    dynamicExp += "var " + e + " = " + s, dynamicExp += "if(" + e + ") { return " + e + "; } ", dynamicExp += "else { "
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) dynamicExp += "}; ";
                return dynamicExp += "return 0; ", dynamicExp += "}; ", table.config.debug && benchmark("Evaling expression:" + dynamicExp, new Date), eval(dynamicExp), cache.normalized.sort(sortWrapper), table.config.debug && benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime), cache
            }

            function makeSortFunction(e, t, n) {
                var r = "a[" + n + "]",
                    i = "b[" + n + "]";
                if (e == "text" && t == "asc") return "(" + r + " == " + i + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : (" + r + " < " + i + ") ? -1 : 1 )));";
                if (e == "text" && t == "desc") return "(" + r + " == " + i + " ? 0 : (" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : (" + i + " < " + r + ") ? -1 : 1 )));";
                if (e == "numeric" && t == "asc") return "(" + r + " === null && " + i + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : " + r + " - " + i + "));";
                if (e == "numeric" && t == "desc") return "(" + r + " === null && " + i + " === null) ? 0 :(" + r + " === null ? Number.POSITIVE_INFINITY : (" + i + " === null ? Number.NEGATIVE_INFINITY : " + i + " - " + r + "));"
            }

            function makeSortText(e) {
                return "((a[" + e + "] < b[" + e + "]) ? -1 : ((a[" + e + "] > b[" + e + "]) ? 1 : 0));"
            }

            function makeSortTextDesc(e) {
                return "((b[" + e + "] < a[" + e + "]) ? -1 : ((b[" + e + "] > a[" + e + "]) ? 1 : 0));"
            }

            function makeSortNumeric(e) {
                return "a[" + e + "]-b[" + e + "];"
            }

            function makeSortNumericDesc(e) {
                return "b[" + e + "]-a[" + e + "];"
            }

            function sortText(e, t) {
                return table.config.sortLocaleCompare ? e.localeCompare(t) : e < t ? -1 : e > t ? 1 : 0
            }

            function sortTextDesc(e, t) {
                return table.config.sortLocaleCompare ? t.localeCompare(e) : t < e ? -1 : t > e ? 1 : 0
            }

            function sortNumeric(e, t) {
                return e - t
            }

            function sortNumericDesc(e, t) {
                return t - e
            }

            function getCachedSortType(e, t) {
                return e[t].type
            }
            var parsers = [],
                widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: !0,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: !1,
                cancelSelection: !0,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: "/.|,/g",
                onRenderHeader: null,
                selectorHeaders: "thead th",
                debug: !1
            }, this.benchmark = benchmark, this.construct = function (e) {
                return this.each(function () {
                    if (!this.tHead || !this.tBodies) return;
                    var t, n, r, i, s, o = 0,
                        u;
                    this.config = {}, s = $.extend(this.config, $.tablesorter.defaults, e), t = $(this), $.data(this, "tablesorter", s), r = buildHeaders(this), this.config.parsers = buildParserCache(this, r), i = buildCache(this);
                    var a = [s.cssDesc, s.cssAsc];
                    fixColumnWidth(this), r.click(function (e) {
                        var n = t[0].tBodies[0] && t[0].tBodies[0].rows.length || 0;
                        if (!this.sortDisabled && n > 0) {
                            t.trigger("sortStart");
                            var o = $(this),
                                u = this.column;
                            this.order = this.count++ % 2, this.lockedOrder && (this.order = this.lockedOrder);
                            if (!e[s.sortMultiSortKey]) {
                                s.sortList = [];
                                if (s.sortForce != null) {
                                    var f = s.sortForce;
                                    for (var l = 0; l < f.length; l++) f[l][0] != u && s.sortList.push(f[l])
                                }
                                s.sortList.push([u, this.order])
                            } else if (isValueInArray(u, s.sortList))
                                for (var l = 0; l < s.sortList.length; l++) {
                                    var c = s.sortList[l],
                                        h = s.headerList[c[0]];
                                    c[0] == u && (h.count = c[1], h.count++, c[1] = h.count % 2)
                                } else s.sortList.push([u, this.order]);
                            return setTimeout(function () {
                                setHeadersCss(t[0], r, s.sortList, a), appendToTable(t[0], multisort(t[0], s.sortList, i))
                            }, 1), !1
                        }
                    }).mousedown(function () {
                        if (s.cancelSelection) return this.onselectstart = function () {
                            return !1
                        }, !1
                    }), t.bind("update", function () {
                        var e = this;
                        setTimeout(function () {
                            e.config.parsers = buildParserCache(e, r), i = buildCache(e)
                        }, 1)
                    }).bind("updateCell", function (e, t) {
                        var n = this.config,
                            r = [t.parentNode.rowIndex - 1, t.cellIndex];
                        i.normalized[r[0]][r[1]] = n.parsers[r[1]].format(getElementText(n, t), t)
                    }).bind("sorton", function (e, t) {
                        $(this).trigger("sortStart"), s.sortList = t;
                        var n = s.sortList;
                        updateHeaderSortCount(this, n), setHeadersCss(this, r, n, a), appendToTable(this, multisort(this, n, i))
                    }).bind("appendCache", function () {
                        appendToTable(this, i)
                    }).bind("applyWidgetId", function (e, t) {
                        getWidgetById(t).format(this)
                    }).bind("applyWidgets", function () {
                        applyWidget(this)
                    }), $.metadata && $(this).metadata() && $(this).metadata().sortlist && (s.sortList = $(this).metadata().sortlist), s.sortList.length > 0 && t.trigger("sorton", [s.sortList]), applyWidget(this)
                })
            }, this.addParser = function (e) {
                var t = parsers.length,
                    n = !0;
                for (var r = 0; r < t; r++) parsers[r].id.toLowerCase() == e.id.toLowerCase() && (n = !1);
                n && parsers.push(e)
            }, this.addWidget = function (e) {
                widgets.push(e)
            }, this.formatFloat = function (e) {
                var t = parseFloat(e);
                return isNaN(t) ? 0 : t
            }, this.formatInt = function (e) {
                var t = parseInt(e);
                return isNaN(t) ? 0 : t
            }, this.isDigit = function (e, t) {
                return /^[-+]?\d*$/.test($.trim(e.replace(/[,.']/g, "")))
            }, this.clearTableBody = function (e) {
                if ($.browser.msie) {
                    function t() {
                        while (this.firstChild) this.removeChild(this.firstChild)
                    }
                    t.apply(e.tBodies[0])
                } else e.tBodies[0].innerHTML = ""
            }
        }
    }), $.fn.extend({
        tablesorter: $.tablesorter.construct
    });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function (e) {
            return !0
        },
        format: function (e) {
            return $.trim(e.toLocaleLowerCase())
        },
        type: "text"
    }), ts.addParser({
        id: "digit",
        is: function (e, t) {
            var n = t.config;
            return $.tablesorter.isDigit(e, n)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e)
        },
        type: "numeric"
    }), ts.addParser({
        id: "currency",
        is: function (e) {
            return /^[£$€?.]/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/[£$€]/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "ipAddress",
        is: function (e) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(e)
        },
        format: function (e) {
            var t = e.split("."),
                n = "",
                r = t.length;
            for (var i = 0; i < r; i++) {
                var s = t[i];
                s.length == 2 ? n += "0" + s : n += s
            }
            return $.tablesorter.formatFloat(n)
        },
        type: "numeric"
    }), ts.addParser({
        id: "url",
        is: function (e) {
            return /^(https?|ftp|file):\/\/$/.test(e)
        },
        format: function (e) {
            return jQuery.trim(e.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
        },
        type: "text"
    }), ts.addParser({
        id: "isoDate",
        is: function (e) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e != "" ? (new Date(e.replace(new RegExp(/-/g), "/"))).getTime() : "0")
        },
        type: "numeric"
    }), ts.addParser({
        id: "percent",
        is: function (e) {
            return /\%$/.test($.trim(e))
        },
        format: function (e) {
            return $.tablesorter.formatFloat(e.replace(new RegExp(/%/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "usLongDate",
        is: function (e) {
            return e.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
        },
        format: function (e) {
            return $.tablesorter.formatFloat((new Date(e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "shortDate",
        is: function (e) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(e)
        },
        format: function (e, t) {
            var n = t.config;
            e = e.replace(/\-/g, "/");
            if (n.dateFormat == "us") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            else if (n.dateFormat == "uk") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            else if (n.dateFormat == "dd/mm/yy" || n.dateFormat == "dd-mm-yy") e = e.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            return $.tablesorter.formatFloat((new Date(e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "time",
        is: function (e) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(e)
        },
        format: function (e) {
            return $.tablesorter.formatFloat((new Date("2000/01/01 " + e)).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "metadata",
        is: function (e) {
            return !1
        },
        format: function (e, t, n) {
            var r = t.config,
                i = r.parserMetadataName ? r.parserMetadataName : "sortValue";
            return $(n).metadata()[i]
        },
        type: "numeric"
    }), ts.addWidget({
        id: "zebra",
        format: function (e) {
            if (e.config.debug) var t = new Date;
            var n, r = -1,
                i;
            $("tr:visible", e.tBodies[0]).each(function (t) {
                n = $(this), n.hasClass(e.config.cssChildRow) || r++, i = r % 2 == 0, n.removeClass(e.config.widgetZebra.css[i ? 0 : 1]).addClass(e.config.widgetZebra.css[i ? 1 : 0])
            }), e.config.debug && $.tablesorter.benchmark("Applying Zebra widget", t)
        }
    })
}(jQuery),
function (e) {
    function t(t, n) {
        function g() {
            return r.update(), b(), r
        }

        function y() {
            var e = h.toLowerCase();
            f.obj.css(c, p / u.ratio), o.obj.css(c, -p), v.start = f.obj.offset()[c], u.obj.css(e, a[n.axis]), a.obj.css(e, a[n.axis]), f.obj.css(e, f[n.axis])
        }

        function b() {
            m ? s.obj[0].ontouchstart = function (e) {
                1 === e.touches.length && (w(e.touches[0]), e.stopPropagation())
            } : (f.obj.bind("mousedown", w), a.obj.bind("mouseup", S)), n.scroll && window.addEventListener ? (i[0].addEventListener("DOMMouseScroll", E, !1), i[0].addEventListener("mousewheel", E, !1)) : n.scroll && (i[0].onmousewheel = E)
        }

        function w(t) {
            e("body").addClass("noSelect");
            var n = parseInt(f.obj.css(c), 10);
            v.start = l ? t.pageX : t.pageY, d.start = n == "auto" ? 0 : n, m ? (document.ontouchmove = function (e) {
                e.preventDefault(), S(e.touches[0])
            }, document.ontouchend = x) : (e(document).bind("mousemove", S), e(document).bind("mouseup", x), f.obj.bind("mouseup", x))
        }

        function E(t) {
            if (o.ratio < 1) {
                var r = t || window.event,
                    i = r.wheelDelta ? r.wheelDelta / 120 : -r.detail / 3;
                p -= i * n.wheel, p = Math.min(o[n.axis] - s[n.axis], Math.max(0, p)), f.obj.css(c, p / u.ratio), o.obj.css(c, -p);
                if (n.lockscroll || p !== o[n.axis] - s[n.axis] && p !== 0) r = e.event.fix(r), r.preventDefault()
            }
        }

        function S(e) {
            o.ratio < 1 && (n.invertscroll && m ? d.now = Math.min(a[n.axis] - f[n.axis], Math.max(0, d.start + (v.start - (l ? e.pageX : e.pageY)))) : d.now = Math.min(a[n.axis] - f[n.axis], Math.max(0, d.start + ((l ? e.pageX : e.pageY) - v.start))), p = d.now * u.ratio, o.obj.css(c, -p), f.obj.css(c, d.now))
        }

        function x() {
            e("body").removeClass("noSelect"), e(document).unbind("mousemove", S), e(document).unbind("mouseup", x), f.obj.unbind("mouseup", x), document.ontouchmove = document.ontouchend = null
        }
        var r = this,
            i = t,
            s = {
                obj: e(".viewport", t)
            }, o = {
                obj: e(".overview", t)
            }, u = {
                obj: e(".scrollbar", t)
            }, a = {
                obj: e(".track", u.obj)
            }, f = {
                obj: e(".thumb", u.obj)
            }, l = n.axis === "x",
            c = l ? "left" : "top",
            h = l ? "Width" : "Height",
            p = 0,
            d = {
                start: 0,
                now: 0
            }, v = {}, m = "ontouchstart" in document.documentElement;
        return this.update = function (e) {
            s[n.axis] = s.obj[0]["offset" + h], o[n.axis] = o.obj[0]["scroll" + h], o.ratio = s[n.axis] / o[n.axis], u.obj.toggleClass("disable", o.ratio >= 1), a[n.axis] = n.size === "auto" ? s[n.axis] : n.size, f[n.axis] = Math.min(a[n.axis], Math.max(0, n.sizethumb === "auto" ? a[n.axis] * o.ratio : n.sizethumb)), u.ratio = n.sizethumb === "auto" ? o[n.axis] / a[n.axis] : (o[n.axis] - s[n.axis]) / (a[n.axis] - f[n.axis]), p = e === "relative" && o.ratio <= 1 ? Math.min(o[n.axis] - s[n.axis], Math.max(0, p)) : 0, p = e === "bottom" && o.ratio <= 1 ? o[n.axis] - s[n.axis] : isNaN(parseInt(e, 10)) ? p : parseInt(e, 10), y()
        }, g()
    }
    e.tiny = e.tiny || {}, e.tiny.scrollbar = {
        options: {
            axis: "y",
            wheel: 40,
            scroll: !0,
            lockscroll: !0,
            size: "auto",
            sizethumb: "auto",
            invertscroll: !1
        }
    }, e.fn.tinyscrollbar = function (n) {
        var r = e.extend({}, e.tiny.scrollbar.options, n);
        return this.each(function () {
            e(this).data("tsb", new t(e(this), r))
        }), this
    }, e.fn.tinyscrollbar_update = function (t) {
        return e(this).data("tsb").update(t)
    }
}(jQuery),
function () {
    $.fn.meca = function (e, t) {
        return this.each(function () {
            r[e].call(this, t)
        })
    };
    var e = typeof document.documentElement.style.maxHeight == "undefined",
        t = document.uniqueID,
        n = function (e, t) {
            var n = "DXImageTransform.Microsoft.AlphaImageLoader";
            return "progid:" + n + '(src="' + e + '",sizingMethod=' + t + ")"
        }, r = {
            hover: function (e) {
                var t = $(this),
                    e = $.extend({
                        postfix: "_o"
                    }, e),
                    n = t.attr("src");
                if (!n) return;
                var r = n.replace(/\.\w+$/, e.postfix + "$&"),
                    i = new Image;
                i.src = r, t.hover(function () {
                    this.src = r
                }, function () {
                    this.src = n
                })
            },
            external: function () {
                $(this).attr("target", "_blank")
            },
            pngfix: function (t) {
                if (!e) return;
                var r = $(this),
                    t = $.extend({
                        hoverSelector: ".btn",
                        hoverPostfix: "_o",
                        blankGif: !1,
                        wrapSpanClass: "imgpngWrapSpan"
                    }, t),
                    i = {
                        filter: n(r.attr("src"), "crop"),
                        width: r.width(),
                        height: r.height(),
                        zoom: "1"
                    }, s = function (e) {
                        if (t.blankGif) return e.css(i).attr("src", t.blankGif), e;
                        var n = $("<span/>").addClass(t.wrapSpanClass).css(i);
                        return e.css("visibility", "hidden").wrap(n), e.parent()
                    };
                if (r.is(t.hoverSelector)) {
                    var o = r.attr("src"),
                        u = o.replace(/\.\w+$/, t.hoverPostfix + "$&"),
                        a = new Image;
                    a.src = u, s(r).hover(function () {
                        $(this).css("filter", n(u, "proc"))
                    }, function () {
                        $(this).css("filter", n(o, "proc"))
                    })
                } else s(r)
            },
            bgpngfix: function () {
                if (!e) return;
                var t = $(this),
                    r = n(t.css("backgroundImage").slice(5, -2), t.css("backgroundRepeat") === "no-repeat" ? "crop" : "scale");
                t.css({
                    filter: r,
                    "background-image": "none",
                    zoom: "1"
                })
            },
            heightAlign: function () {
                var e = 0;
                $(this).find("> *").each(function () {
                    var t = $(this).height();
                    e < t && (e = t)
                }).height(e)
            },
            positionFixed: function () {
                if (!e) return;
                var t = this,
                    n = $(t),
                    r = parseInt(n.css("top")) || 0,
                    i = parseInt(n.css("left")) || 0;
                n.css({
                    position: "absolute",
                    top: $(document).scrollTop() + r,
                    left: $(document).scrollLeft() + i
                }).parents().each(function () {
                    $(this).css("position") == "relative" && $(this).after(n)
                }), $("html").css({
                    "background-image": "url(null)",
                    "background-attachment": "fixed"
                }), t.topVal = r, t.style.setExpression("top", 'documentElement.scrollTop + this.topVal + "px"')
            },
            smoothScroll: function (e) {
                var e = $.extend({
                    noAddHashList: ["#top"]
                }, e),
                    t = e.noAddHashList || [];
                $(this).click(function () {
                    var e = $(this),
                        n = e.attr("href");
                    try {
                        var r = $(n);
                        if (!r.length) return
                    } catch (i) {
                        return
                    }
                    return $("html, body").animate({
                        scrollTop: r.offset().top
                    }, "normal", "swing", function () {
                        $.inArray(n, t) == -1 && (location.hash = n)
                    }), !1
                })
            },
            addOsClass: function (e) {
                var t = $(this),
                    e = $.extend({
                        winClass: "osWin",
                        macClass: "osMac"
                    }, e),
                    n = navigator.userAgent.toLowerCase();
                /windows/.test(n) ? t.addClass(e.winClass) : /mac os x/.test(n) && t.addClass(e.macClass)
            },
            labelClickable: function () {
                if (!t) return;
                $(this).click(function () {
                    $("#" + $(this).parents("label").attr("for")).focus().click()
                })
            },
            active: function (e) {
                var t = $(this),
                    e = $.extend({
                        postfix: "_a",
                        hoverSelector: ".btn",
                        hoverPostfix: "_o"
                    }, e);
                if (!t.attr("src")) return;
                var n = this.src,
                    r = this.src.replace(/\.\w+$/, e.postfix + "$&"),
                    i = n;
                e.hoverSelector && t.is(e.hoverSelector) && (i = n.replace(/\.\w+$/, e.hoverPostfix + "$&"));
                var s = new Image;
                s.src = r, t.mousedown(function () {
                    this.src = r
                }), t.mouseup(function () {
                    this.src = i
                })
            },
            placeholder: function (e) {
                var t = $(this),
                    e = $.extend({
                        placeholderClass: "hasPlaceholder",
                        target_attr: "placeholder"
                    }, e),
                    n = $(this).attr(e.target_attr);
                (t.val() == "" || t.val() == n) && t.val(n).addClass(e.placeholderClass), t.focus(function () {
                        t.val() == n && t.val("").removeClass(e.placeholderClass)
                    }).blur(function () {
                        t.val() == "" && t.val(n).addClass(e.placeholderClass)
                    }).parents("form").bind("submit", function () {
                        t.val() == n && t.val("")
                    })
            }
        }
}(), window.Modernizr = function (e, t, n) {
    function r(e) {
        m.cssText = e
    }

    function i(e, t) {
        return r(w.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!o(i, "-") && m[i] !== n) return t == "pfx" ? i : !0
        }
        return !1
    }

    function a(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }

    function f(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1),
            i = (e + " " + S.join(r + " ") + r).split(" ");
        return s(t, "string") || s(t, "undefined") ? u(i, t) : (i = (e + " " + x.join(r + " ") + r).split(" "), a(i, t, n))
    }
    var l = "2.6.2",
        c = {}, h = !0,
        p = t.documentElement,
        d = "modernizr",
        v = t.createElement(d),
        m = v.style,
        g, y = ":)",
        b = {}.toString,
        w = " -webkit- -moz- -o- -ms- ".split(" "),
        E = "Webkit Moz O ms",
        S = E.split(" "),
        x = E.toLowerCase().split(" "),
        T = {}, N = {}, C = {}, k = [],
        L = k.slice,
        A, O = function (e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"),
                l = t.body,
                c = l || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) u = t.createElement("div"), u.id = i ? i[r] : d + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), f.id = d, (l ? f : c).innerHTML += s, c.appendChild(f), l || (c.style.background = "", c.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(c)), o = n(f, e), l ? f.parentNode.removeChild(f) : (c.parentNode.removeChild(c), p.style.overflow = a), !! o
        }, M = function () {
            function e(e, i) {
                i = i || t.createElement(r[e] || "div"), e = "on" + e;
                var o = e in i;
                return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = s(i[e], "function"), s(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
            }
            var r = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        _ = {}.hasOwnProperty,
        D;
    !s(_, "undefined") && !s(_.call, "undefined") ? D = function (e, t) {
        return _.call(e, t)
    } : D = function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var n = L.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var i = function () {};
                    i.prototype = t.prototype;
                    var s = new i,
                        o = t.apply(s, n.concat(L.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(L.call(arguments)))
            };
        return r
    }), T.rgba = function () {
        return r("background-color:rgba(150,255,150,.5)"), o(m.backgroundColor, "rgba")
    }, T.borderradius = function () {
        return f("borderRadius")
    }, T.boxshadow = function () {
        return f("boxShadow")
    }, T.textshadow = function () {
        return t.createElement("div").style.textShadow === ""
    }, T.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(m.opacity)
    }, T.cssanimations = function () {
        return f("animationName")
    }, T.cssgradients = function () {
        var e = "background-image:",
            t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return r((e + "-webkit- ".split(" ").join(t + e) + w.join(n + e)).slice(0, -e.length)), o(m.backgroundImage, "gradient")
    }, T.generatedcontent = function () {
        var e;
        return O(["#", d, "{font:0/0 a}#", d, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    };
    for (var P in T) D(T, P) && (A = P.toLowerCase(), c[A] = T[P](), k.push((c[A] ? "" : "no-") + A));
    return c.addTest = function (e, t) {
        if (typeof e == "object")
            for (var r in e) D(e, r) && c.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (c[e] !== n) return c;
            t = typeof t == "function" ? t() : t, typeof h != "undefined" && h && (p.className += " " + (t ? "" : "no-") + e), c[e] = t
        }
        return c
    }, r(""), v = g = null,
    function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[p]];
            return t || (t = {}, d++, e[p] = d, v[d] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (m) return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (m) return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(),
                o = 0,
                u = r(),
                a = u.length;
            for (; o < a; o++) s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !! n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
        }
        var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h, p = "_html5shiv",
            d = 0,
            v = {}, m;
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                h = !0, m = !0
            }
        })();
        var g = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: m,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = g, a(t)
    }(this, t), c._version = l, c._prefixes = w, c._domPrefixes = x, c._cssomPrefixes = S, c.hasEvent = M, c.testProp = function (e) {
        return u([e])
    }, c.testAllProps = f, c.testStyles = O, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + k.join(" ") : ""), c
}(this, this.document),
function (e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() {}

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout,
            c = t.createElement(e),
            d = 0,
            g = 0,
            w = {
                t: r,
                s: n,
                e: s,
                a: a,
                x: f
            };
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        }, e
    }
    var c = t.documentElement,
        h = e.setTimeout,
        p = t.getElementsByTagName("script")[0],
        d = {}.toString,
        v = [],
        m = 0,
        g = "MozAppearance" in c.style,
        y = g && !! t.createRange().compareNode,
        b = y ? c : p.parentNode,
        c = e.opera && "[object Opera]" == d.call(e.opera),
        c = !! t.attachEvent && !c,
        w = g ? "object" : c ? "script" : "img",
        E = c ? "script" : w,
        S = Array.isArray || function (e) {
            return "[object Array]" == d.call(e)
        }, x = [],
        T = {}, N = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        }, C, k;
    k = function (e) {
        function t(e) {
            var e = e.split("!"),
                t = x.length,
                n = e.pop(),
                r = e.length,
                n = {
                    url: n,
                    origUrl: n,
                    prefixes: e
                }, i, s, o;
            for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++) n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e),
                f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u);
                    else if (Object(e) === e)
                        for (p in h = function () {
                            var t = 0,
                                n;
                            for (n in e) e.hasOwnProperty(n) && t++;
                            return t
                        }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        } : f[p] = function (e) {
                            return function () {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), c()
                            }
                        }(l[p])), o(e[p], f, t, p, u))
                } else !n && c()
            }
            var u = !! e.test,
                a = e.load || e.both,
                f = e.callback || s,
                l = f,
                c = e.complete || s,
                h, p;
            n(u ? e.yep : e.nope, !! a), a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e)) o(e, 0, c, 0);
        else if (S(e))
            for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else Object(e) === e && u(e, c)
    }, k.addPrefix = function (e, t) {
        N[e] = t
    }, k.addFilter = function (e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
        var l = t.createElement("script"),
            c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r) l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function () {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
        var i = t.createElement("link"),
            f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r) i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("ipad", function () {
    return !!navigator.userAgent.match(/iPad/i)
}), Modernizr.addTest("iphone", function () {
    return !!navigator.userAgent.match(/iPhone/i)
}), Modernizr.addTest("ipod", function () {
    return !!navigator.userAgent.match(/iPod/i)
}), Modernizr.addTest("appleios", function () {
    return Modernizr.ipad || Modernizr.ipod || Modernizr.iphone
}), Modernizr.addTest("positionfixed", function () {
    navigator.userAgent.match(/OS (\d)/i);
    if (Modernizr.appleios && RegExp.$1 < 5) return !1;
    var e = document.createElement("div"),
        t = e.cloneNode(!1),
        n = !1,
        r = document.body || function () {
            return n = !0, document.documentElement.appendChild(document.createElement("body"))
        }(),
        i = r.style.cssText;
    r.style.cssText = "padding:0;margin:0", e.style.cssText = "position:fixed;top:42px", r.appendChild(e), r.appendChild(t);
    var s = e.offsetTop !== t.offsetTop;
    return r.removeChild(e), r.removeChild(t), r.style.cssText = i, n && document.documentElement.removeChild(r), s
}),
function () {
    function e(e, t) {
        return [].slice.call((t || document).querySelectorAll(e))
    }
    if (!window.addEventListener) return;
    var t = window.StyleFix = {
        link: function (e) {
            try {
                if (e.rel !== "stylesheet" || e.hasAttribute("data-noprefix")) return
            } catch (n) {
                return
            }
            var r = e.href || e.getAttribute("data-href"),
                i = r.replace(/[^\/]+$/, ""),
                s = e.parentNode,
                o = new XMLHttpRequest,
                u;
            o.onreadystatechange = function () {
                o.readyState === 4 && u()
            }, u = function () {
                var n = o.responseText;
                if (n && e.parentNode && (!o.status || o.status < 400 || o.status > 600)) {
                    n = t.fix(n, !0, e);
                    if (i) {
                        n = n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (e, t, n) {
                            return /^([a-z]{3,10}:|\/|#)/i.test(n) ? e : 'url("' + i + n + '")'
                        });
                        var r = i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
                        n = n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + r, "gi"), "$1")
                    }
                    var u = document.createElement("style");
                    u.textContent = n, u.media = e.media, u.disabled = e.disabled, u.setAttribute("data-href", e.getAttribute("href")), s.insertBefore(u, e), s.removeChild(e), u.media = e.media
                }
            };
            try {
                o.open("GET", r), o.send(null)
            } catch (n) {
                typeof XDomainRequest != "undefined" && (o = new XDomainRequest, o.onerror = o.onprogress = function () {}, o.onload = u, o.open("GET", r), o.send(null))
            }
            e.setAttribute("data-inprogress", "")
        },
        styleElement: function (e) {
            if (e.hasAttribute("data-noprefix")) return;
            var n = e.disabled;
            e.textContent = t.fix(e.textContent, !0, e), e.disabled = n
        },
        styleAttribute: function (e) {
            var n = e.getAttribute("style");
            n = t.fix(n, !1, e), e.setAttribute("style", n)
        },
        process: function () {
            e('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link), e("style").forEach(StyleFix.styleElement), e("[style]").forEach(StyleFix.styleAttribute)
        },
        register: function (e, n) {
            (t.fixers = t.fixers || []).splice(n === undefined ? t.fixers.length : n, 0, e)
        },
        fix: function (e, n, r) {
            for (var i = 0; i < t.fixers.length; i++) e = t.fixers[i](e, n, r) || e;
            return e
        },
        camelCase: function (e) {
            return e.replace(/-([a-z])/g, function (e, t) {
                return t.toUpperCase()
            }).replace("-", "")
        },
        deCamelCase: function (e) {
            return e.replace(/[A-Z]/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }
    };
    (function () {
        setTimeout(function () {
            e('link[rel="stylesheet"]').forEach(StyleFix.link)
        }, 10), document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
    })()
}(),
function (e) {
    function t(e, t, r, i, s) {
        e = n[e];
        if (e.length) {
            var o = RegExp(t + "(" + e.join("|") + ")" + r, "gi");
            s = s.replace(o, i)
        }
        return s
    }
    if (!window.StyleFix || !window.getComputedStyle) return;
    var n = window.PrefixFree = {
        prefixCSS: function (e, r, i) {
            var s = n.prefix;
            n.functions.indexOf("linear-gradient") > -1 && (e = e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function (e, t, n, r) {
                return t + (n || "") + "linear-gradient(" + (90 - r) + "deg"
            })), e = t("functions", "(\\s|:|,)", "\\s*\\(", "$1" + s + "$2(", e), e = t("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + s + "$2$3", e), e = t("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + s + "$2:", e);
            if (n.properties.length) {
                var o = RegExp("\\b(" + n.properties.join("|") + ")(?!:)", "gi");
                e = t("valueProperties", "\\b", ":(.+?);", function (e) {
                    return e.replace(o, s + "$1")
                }, e)
            }
            return r && (e = t("selectors", "", "\\b", n.prefixSelector, e), e = t("atrules", "@", "\\b", "@" + s + "$1", e)), e = e.replace(RegExp("-" + s, "g"), "-"), e = e.replace(/-\*-(?=[a-z]+)/gi, n.prefix), e
        },
        property: function (e) {
            return (n.properties.indexOf(e) ? n.prefix : "") + e
        },
        value: function (e, r) {
            return e = t("functions", "(^|\\s|,)", "\\s*\\(", "$1" + n.prefix + "$2(", e), e = t("keywords", "(^|\\s)", "(\\s|$)", "$1" + n.prefix + "$2$3", e), e
        },
        prefixSelector: function (e) {
            return e.replace(/^:{1,2}/, function (e) {
                return e + n.prefix
            })
        },
        prefixProperty: function (e, t) {
            var r = n.prefix + e;
            return t ? StyleFix.camelCase(r) : r
        }
    };
    (function () {
        var e = {}, t = [],
            r = {}, i = getComputedStyle(document.documentElement, null),
            s = document.createElement("div").style,
            o = function (n) {
                if (n.charAt(0) === "-") {
                    t.push(n);
                    var r = n.split("-"),
                        i = r[1];
                    e[i] = ++e[i] || 1;
                    while (r.length > 3) {
                        r.pop();
                        var s = r.join("-");
                        u(s) && t.indexOf(s) === -1 && t.push(s)
                    }
                }
            }, u = function (e) {
                return StyleFix.camelCase(e) in s
            };
        if (i.length > 0)
            for (var a = 0; a < i.length; a++) o(i[a]);
        else
            for (var f in i) o(StyleFix.deCamelCase(f));
        var l = {
            uses: 0
        };
        for (var c in e) {
            var h = e[c];
            l.uses < h && (l = {
                prefix: c,
                uses: h
            })
        }
        n.prefix = "-" + l.prefix + "-", n.Prefix = StyleFix.camelCase(n.prefix), n.properties = [];
        for (var a = 0; a < t.length; a++) {
            var f = t[a];
            if (f.indexOf(n.prefix) === 0) {
                var p = f.slice(n.prefix.length);
                u(p) || n.properties.push(p)
            }
        }
        n.Prefix == "Ms" && !("transform" in s) && !("MsTransform" in s) && "msTransform" in s && n.properties.push("transform", "transform-origin"), n.properties.sort()
    })(),
    function () {
        function e(e, t) {
            return i[t] = "", i[t] = e, !! i[t]
        }
        var t = {
            "linear-gradient": {
                property: "backgroundImage",
                params: "red, teal"
            },
            calc: {
                property: "width",
                params: "1px + 5%"
            },
            element: {
                property: "backgroundImage",
                params: "#foo"
            },
            "cross-fade": {
                property: "backgroundImage",
                params: "url(a.png), url(b.png), 50%"
            }
        };
        t["repeating-linear-gradient"] = t["repeating-radial-gradient"] = t["radial-gradient"] = t["linear-gradient"];
        var r = {
            initial: "color",
            "zoom-in": "cursor",
            "zoom-out": "cursor",
            box: "display",
            flexbox: "display",
            "inline-flexbox": "display",
            flex: "display",
            "inline-flex": "display"
        };
        n.functions = [], n.keywords = [];
        var i = document.createElement("div").style;
        for (var s in t) {
            var o = t[s],
                u = o.property,
                a = s + "(" + o.params + ")";
            !e(a, u) && e(n.prefix + a, u) && n.functions.push(s)
        }
        for (var f in r) {
            var u = r[f];
            !e(f, u) && e(n.prefix + f, u) && n.keywords.push(f)
        }
    }(),
    function () {
        function t(e) {
            return s.textContent = e + "{}", !! s.sheet.cssRules.length
        }
        var r = {
            ":read-only": null,
            ":read-write": null,
            ":any-link": null,
            "::selection": null
        }, i = {
                keyframes: "name",
                viewport: null,
                document: 'regexp(".")'
            };
        n.selectors = [], n.atrules = [];
        var s = e.appendChild(document.createElement("style"));
        for (var o in r) {
            var u = o + (r[o] ? "(" + r[o] + ")" : "");
            !t(u) && t(n.prefixSelector(u)) && n.selectors.push(o)
        }
        for (var a in i) {
            var u = a + " " + (i[a] || "");
            !t("@" + u) && t("@" + n.prefix + u) && n.atrules.push(a)
        }
        e.removeChild(s)
    }(), n.valueProperties = ["transition", "transition-property"], e.className += " " + n.prefix, StyleFix.register(n.prefixCSS)
}(document.documentElement);
var yomotsuRollover = {
    main: function () {
        var e = document.images,
            t = document.getElementsByTagName("input"),
            n = document.getElementsByTagName("button"),
            r, i = [];
        for (r = 0; r < e.length; r++)
            if (e[r].src.match(/.*_off\./) || e[r].style.filter) {
                i[i.length] = new Image, i[i.length - 1].src = e[r].src.replace("_off.", "_on."), e[r].onmouseover = yomotsuRollover.over, e[r].onmouseout = yomotsuRollover.out;
                try {
                    e[r].addEventListener("click", yomotsuRollover.click, !1)
                } catch (s) {
                    e[r].attachEvent("onclick", function (e) {
                        return function () {
                            yomotsuRollover.click.call(e)
                        }
                    }(e[r]))
                }
            }
        for (r = 0; r < t.length; r++)
            if (t[r].src.match(/.*_off\./) && t[r].getAttribute("type") == "image") {
                i[i.length] = new Image, i[i.length - 1].src = e[r].src.replace("_off.", "_on."), t[r].onmouseover = yomotsuRollover.over, t[r].onmouseout = yomotsuRollover.out;
                try {
                    t[r].addEventListener("click", yomotsuRollover.click, !1)
                } catch (s) {
                    t[r].attachEvent("onclick", function (e) {
                        return function () {
                            yomotsuRollover.click.call(e)
                        }
                    }(t[r]))
                }
            }
        for (r = 0; r < n.length; r++) {
            n[r].onmouseover = yomotsuRollover.over2, n[r].onmouseout = yomotsuRollover.out2;
            try {
                n[r].addEventListener("click", yomotsuRollover.click2, !1)
            } catch (s) {
                n[r].attachEvent("onclick", function (e) {
                    return function () {
                        yomotsuRollover.click2.call(e)
                    }
                }(n[r]))
            }
        }
    },
    over: function () {
        var e, t;
        this.style.filter && this.style.filter.match(/_off\.png/) ? this.style.filter = this.style.filter.replace("_off.png", "_on.png") : this.src = this.src.replace("_off.", "_on.")
    },
    over2: function () {
        this.children[0].src = this.children[0].src.replace("_off.", "_on.")
    },
    out: function () {
        this.style.filter && this.style.filter.match(/_on\.png/) ? this.style.filter = this.style.filter.replace("_on.png", "_off.png") : this.src = this.src.replace("_on.", "_off.")
    },
    out2: function () {
        this.children[0].src = this.children[0].src.replace("_on.", "_off.")
    },
    click: function () {
        this.style.filter && this.style.filter.match(/_on\.png/) ? this.style.filter = this.style.filter.replace("_on.png", "_off.png") : this.src = this.src.replace("_on.", "_off.")
    },
    click2: function () {
        this.children[0].src = this.children[0].src.replace("_on.", "_off.")
    },
    addEvent: function () {
        try {
            window.addEventListener("load", this.main, !1)
        } catch (e) {
            window.attachEvent("onload", this.main)
        }
    }
};
yomotsuRollover.addEvent(),
function (e) {
    e.fn.extend({
        stickyMojo: function (t) {
            function s() {
                i.length ? console && console.warn ? console.warn(i) : alert(i) : (r.el.css("left", r.stickyLeft), r.win.bind({
                    scroll: h,
                    resize: function () {
                        r.el.css("left", r.stickyLeft), h()
                    }
                }))
            }

            function o() {
                n.footerID = e(n.footerID), n.contentID = e(n.contentID)
            }

            function u() {
                return {
                    limit: n.footerID.offset().top - r.stickyHeight,
                    windowTop: r.win.scrollTop(),
                    stickyTop: r.stickyTop2 - r.marg
                }
            }

            function a() {
                r.el.css({
                    position: "fixed",
                    top: 0
                })
            }

            function f() {
                n.orientation === "left" ? n.contentID.css("margin-left", r.el.outerWidth(!0)) : r.el.css("margin-left", n.contentID.outerWidth(!0))
            }

            function l() {
                r.el.css({
                    position: "static",
                    "margin-left": "0px"
                }), n.contentID.css("margin-left", "0px")
            }

            function c(e) {
                r.el.css({
                    top: e
                })
            }

            function h() {
                var e = u(),
                    t = e.stickyTop < e.windowTop && r.win.width() >= r.breakPoint;
                t ? (a(), f()) : l();
                if (e.limit < e.windowTop) {
                    var n = e.limit - e.windowTop;
                    c(n)
                }
            }

            function p() {
                var e = [];
                for (var t in n) n[t] || e.push(n[t]);
                return d() && e.push("NO IE 7"), e
            }

            function d() {
                return document.querySelector ? !1 : !0
            }
            var n = e.extend({
                footerID: "",
                contentID: "",
                orientation: e(this).css("float")
            }, t),
                r = {
                    el: e(this),
                    stickyLeft: e(n.contentID).outerWidth() + e(n.contentID).offset.left,
                    stickyTop2: e(this).offset().top,
                    stickyHeight: e(this).outerHeight(!0),
                    contentHeight: e(n.contentID).outerHeight(!0),
                    win: e(window),
                    breakPoint: e(this).outerWidth(!0) + e(n.contentID).outerWidth(!0),
                    marg: parseInt(e(this).css("margin-top"), 10)
                }, i = p();
            return o(), this.each(function () {
                s()
            })
        }
    })
}(jQuery),
function (e) {
    e.fn.SmoothScroll = function (t) {
        var n = {
            duration: 1e3,
            easing: "easeOutQuint"
        };
        t = e.extend(n, t);
        var r, i = {
                scrollStop: function () {
                    r.stop(!0)
                },
                getTargetBody: function () {
                    return e("html").scrollTop() > 0 ? r = e("html") : e("body").scrollTop() > 0 && (r = e("body")), r
                }
            };
        return this.each(function (n, s) {
            e(s).on("click", function () {
                var n = this.hash,
                    s = e(n).eq(0).offset();
                if (!n || s === null) return;
                var o = e(window).scrollTop();
                o === 0 && e(window).scrollTop(o + 1), r = i.getTargetBody();
                if (typeof r == "undefined") return;
                return r.animate({
                    scrollTop: s.top
                }, t.duration, t.easing, function () {
                    location.hash = n
                }), window.addEventListener && window.addEventListener("DOMMouseScroll", i.scrollStop, !1), window.onmousewheel = document.onmousewheel = i.scrollStop, !1
            })
        })
    }
}(jQuery), jQuery(function (e) {
    e(window).on("load", function () {
        e('a[href^="#"]').SmoothScroll({
            duration: 1e3,
            easing: "easeOutQuint"
        })
    }), jQuery.effects || function (e, t) {
        var n = e.uiBackCompat !== !1,
            r = "ui-effects-";
        e.effects = {
            effect: {}
        },
        function (t, n) {
            function r(e, t, n) {
                var r = c[t.type] || {};
                return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
            }

            function i(e) {
                var n = f(),
                    r = n._rgba = [];
                return e = e.toLowerCase(), v(a, function (t, i) {
                    var s, o = i.re.exec(e),
                        u = o && i.parse(o),
                        a = i.space || "rgba";
                    if (u) return s = n[a](u), n[l[a].cache] = s[l[a].cache], r = n._rgba = s._rgba, !1
                }), r.length ? (r.join() === "0,0,0,0" && t.extend(r, d.transparent), n) : d[e]
            }

            function s(e, t, n) {
                return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                u = /^([\-+])=\s*(\d+\.?\d*)/,
                a = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                f = t.Color = function (e, n, r, i) {
                    return new t.Color.fn.parse(e, n, r, i)
                }, l = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                }, c = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                }, h = f.support = {}, p = t("<p>")[0],
                d, v = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, v(l, function (e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), f.fn = t.extend(f.prototype, {
                parse: function (s, o, u, a) {
                    if (s === n) return this._rgba = [null, null, null, null], this;
                    if (s.jquery || s.nodeType) s = t(s).css(o), o = n;
                    var c = this,
                        h = t.type(s),
                        p = this._rgba = [];
                    o !== n && (s = [s, o, u, a], h = "array");
                    if (h === "string") return this.parse(i(s) || d._default);
                    if (h === "array") return v(l.rgba.props, function (e, t) {
                        p[t.idx] = r(s[t.idx], t)
                    }), this;
                    if (h === "object") return s instanceof f ? v(l, function (e, t) {
                        s[t.cache] && (c[t.cache] = s[t.cache].slice())
                    }) : v(l, function (t, n) {
                        var i = n.cache;
                        v(n.props, function (e, t) {
                            if (!c[i] && n.to) {
                                if (e === "alpha" || s[e] == null) return;
                                c[i] = n.to(c._rgba)
                            }
                            c[i][t.idx] = r(s[e], t, !0)
                        }), c[i] && e.inArray(null, c[i].slice(0, 3)) < 0 && (c[i][3] = 1, n.from && (c._rgba = n.from(c[i])))
                    }), this
                },
                is: function (e) {
                    var t = f(e),
                        n = !0,
                        r = this;
                    return v(l, function (e, i) {
                        var s, o = t[i.cache];
                        return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], v(i.props, function (e, t) {
                            if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                        })), n
                    }), n
                },
                _space: function () {
                    var e = [],
                        t = this;
                    return v(l, function (n, r) {
                        t[r.cache] && e.push(n)
                    }), e.pop()
                },
                transition: function (e, t) {
                    var n = f(e),
                        i = n._space(),
                        s = l[i],
                        o = this.alpha() === 0 ? f("transparent") : this,
                        u = o[s.cache] || s.to(o._rgba),
                        a = u.slice();
                    return n = n[s.cache], v(s.props, function (e, i) {
                        var s = i.idx,
                            o = u[s],
                            f = n[s],
                            l = c[i.type] || {};
                        if (f === null) return;
                        o === null ? a[s] = f : (l.mod && (f - o > l.mod / 2 ? o += l.mod : o - f > l.mod / 2 && (o -= l.mod)), a[s] = r((f - o) * t + o, i))
                    }), this[i](a)
                },
                blend: function (e) {
                    if (this._rgba[3] === 1) return this;
                    var n = this._rgba.slice(),
                        r = n.pop(),
                        i = f(e)._rgba;
                    return f(t.map(n, function (e, t) {
                        return (1 - r) * i[t] + r * e
                    }))
                },
                toRgbaString: function () {
                    var e = "rgba(",
                        n = t.map(this._rgba, function (e, t) {
                            return e == null ? t > 2 ? 1 : 0 : e
                        });
                    return n[3] === 1 && (n.pop(), e = "rgb("), e + n.join() + ")"
                },
                toHslaString: function () {
                    var e = "hsla(",
                        n = t.map(this.hsla(), function (e, t) {
                            return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                        });
                    return n[3] === 1 && (n.pop(), e = "hsl("), e + n.join() + ")"
                },
                toHexString: function (e) {
                    var n = this._rgba.slice(),
                        r = n.pop();
                    return e && n.push(~~(r * 255)), "#" + t.map(n, function (e) {
                        return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                    }).join("")
                },
                toString: function () {
                    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                }
            }), f.fn.parse.prototype = f.fn, l.hsla.to = function (e) {
                if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
                var t = e[0] / 255,
                    n = e[1] / 255,
                    r = e[2] / 255,
                    i = e[3],
                    s = Math.max(t, n, r),
                    o = Math.min(t, n, r),
                    u = s - o,
                    a = s + o,
                    f = a * .5,
                    l, c;
                return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, f === 0 || f === 1 ? c = f : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
            }, l.hsla.from = function (e) {
                if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    o = r <= .5 ? r * (1 + n) : r + n - r * n,
                    u = 2 * r - o;
                return [Math.round(s(u, o, t + 1 / 3) * 255), Math.round(s(u, o, t) * 255), Math.round(s(u, o, t - 1 / 3) * 255), i]
            }, v(l, function (e, i) {
                var s = i.props,
                    o = i.cache,
                    a = i.to,
                    l = i.from;
                f.fn[e] = function (e) {
                    a && !this[o] && (this[o] = a(this._rgba));
                    if (e === n) return this[o].slice();
                    var i, u = t.type(e),
                        c = u === "array" || u === "object" ? e : arguments,
                        h = this[o].slice();
                    return v(s, function (e, t) {
                        var n = c[u === "object" ? e : t.idx];
                        n == null && (n = h[t.idx]), h[t.idx] = r(n, t)
                    }), l ? (i = f(l(h)), i[o] = h, i) : f(h)
                }, v(s, function (n, r) {
                    if (f.fn[n]) return;
                    f.fn[n] = function (i) {
                        var s = t.type(i),
                            o = n === "alpha" ? this._hsla ? "hsla" : "rgba" : e,
                            a = this[o](),
                            f = a[r.idx],
                            l;
                        return s === "undefined" ? f : (s === "function" && (i = i.call(this, f), s = t.type(i)), i == null && r.empty ? this : (s === "string" && (l = u.exec(i), l && (i = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[r.idx] = i, this[o](a)))
                    }
                })
            }), v(o, function (e, n) {
                t.cssHooks[n] = {
                    set: function (e, r) {
                        var s, o, u = "";
                        if (t.type(r) !== "string" || (s = i(r))) {
                            r = f(s || r);
                            if (!h.rgba && r._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? e.parentNode : e;
                                while ((u === "" || u === "transparent") && o && o.style) try {
                                    u = t.css(o, "backgroundColor"), o = o.parentNode
                                } catch (a) {}
                                r = r.blend(u && u !== "transparent" ? u : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            e.style[n] = r
                        } catch (l) {}
                    }
                }, t.fx.step[n] = function (e) {
                    e.colorInit || (e.start = f(e.elem, n), e.end = f(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                }
            }), t.cssHooks.borderColor = {
                expand: function (e) {
                    var t = {};
                    return v(["Top", "Right", "Bottom", "Left"], function (n, r) {
                        t["border" + r + "Color"] = e
                    }), t
                }
            }, d = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function () {
            function n() {
                var t = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                    n = {}, r, i;
                if (t && t.length && t[0] && t[t[0]]) {
                    i = t.length;
                    while (i--) r = t[i], typeof t[r] == "string" && (n[e.camelCase(r)] = t[r])
                } else
                    for (r in t) typeof t[r] == "string" && (n[r] = t[r]);
                return n
            }

            function r(t, n) {
                var r = {}, i, o;
                for (i in n) o = n[i], t[i] !== o && !s[i] && (e.fx.step[i] || !isNaN(parseFloat(o))) && (r[i] = o);
                return r
            }
            var i = ["add", "remove", "toggle"],
                s = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, n) {
                e.fx.step[n] = function (e) {
                    if (e.end !== "none" && !e.setAttr || e.pos === 1 && !e.setAttr) jQuery.style(e.elem, n, e.end), e.setAttr = !0
                }
            }), e.effects.animateClass = function (t, s, o, u) {
                var a = e.speed(s, o, u);
                return this.queue(function () {
                    var s = e(this),
                        o = s.attr("class") || "",
                        u, f = a.children ? s.find("*").andSelf() : s;
                    f = f.map(function () {
                        var t = e(this);
                        return {
                            el: t,
                            start: n.call(this)
                        }
                    }), u = function () {
                        e.each(i, function (e, n) {
                            t[n] && s[n + "Class"](t[n])
                        })
                    }, u(), f = f.map(function () {
                        return this.end = n.call(this.el[0]), this.diff = r(this.start, this.end), this
                    }), s.attr("class", o), f = f.map(function () {
                        var t = this,
                            n = e.Deferred(),
                            r = jQuery.extend({}, a, {
                                queue: !1,
                                complete: function () {
                                    n.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, r), n.promise()
                    }), e.when.apply(e, f.get()).done(function () {
                        u(), e.each(arguments, function () {
                            var t = this.el;
                            e.each(this.diff, function (e) {
                                t.css(e, "")
                            })
                        }), a.complete.call(s[0])
                    })
                })
            }, e.fn.extend({
                _addClass: e.fn.addClass,
                addClass: function (t, n, r, i) {
                    return n ? e.effects.animateClass.call(this, {
                        add: t
                    }, n, r, i) : this._addClass(t)
                },
                _removeClass: e.fn.removeClass,
                removeClass: function (t, n, r, i) {
                    return n ? e.effects.animateClass.call(this, {
                        remove: t
                    }, n, r, i) : this._removeClass(t)
                },
                _toggleClass: e.fn.toggleClass,
                toggleClass: function (n, r, i, s, o) {
                    return typeof r == "boolean" || r === t ? i ? e.effects.animateClass.call(this, r ? {
                        add: n
                    } : {
                        remove: n
                    }, i, s, o) : this._toggleClass(n, r) : e.effects.animateClass.call(this, {
                        toggle: n
                    }, r, i, s)
                },
                switchClass: function (t, n, r, i, s) {
                    return e.effects.animateClass.call(this, {
                        add: n,
                        remove: t
                    }, r, i, s)
                }
            })
        }(),
        function () {
            function i(t, n, r, i) {
                e.isPlainObject(t) && (n = t, t = t.effect), t = {
                    effect: t
                }, n == null && (n = {}), e.isFunction(n) && (i = n, r = null, n = {});
                if (typeof n == "number" || e.fx.speeds[n]) i = r, r = n, n = {};
                return e.isFunction(r) && (i = r, r = null), n && e.extend(t, n), r = r || n.duration, t.duration = e.fx.off ? 0 : typeof r == "number" ? r : r in e.fx.speeds ? e.fx.speeds[r] : e.fx.speeds._default, t.complete = i || n.complete, t
            }

            function s(t) {
                return !t || typeof t == "number" || e.fx.speeds[t] ? !0 : typeof t == "string" && !e.effects.effect[t] ? n && e.effects[t] ? !1 : !0 : !1
            }
            e.extend(e.effects, {
                version: "1.9.2",
                save: function (e, t) {
                    for (var n = 0; n < t.length; n++) t[n] !== null && e.data(r + t[n], e[0].style[t[n]])
                },
                restore: function (e, n) {
                    var i, s;
                    for (s = 0; s < n.length; s++) n[s] !== null && (i = e.data(r + n[s]), i === t && (i = ""), e.css(n[s], i))
                },
                setMode: function (e, t) {
                    return t === "toggle" && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function (e, t) {
                    var n, r;
                    switch (e[0]) {
                    case "top":
                        n = 0;
                        break;
                    case "middle":
                        n = .5;
                        break;
                    case "bottom":
                        n = 1;
                        break;
                    default:
                        n = e[0] / t.height
                    }
                    switch (e[1]) {
                    case "left":
                        r = 0;
                        break;
                    case "center":
                        r = .5;
                        break;
                    case "right":
                        r = 1;
                        break;
                    default:
                        r = e[1] / t.width
                    }
                    return {
                        x: r,
                        y: n
                    }
                },
                createWrapper: function (t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var n = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        "float": t.css("float")
                    }, r = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        i = {
                            width: t.width(),
                            height: t.height()
                        }, s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return t.wrap(r), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), r = t.parent(), t.css("position") === "static" ? (r.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(n, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function (e, r) {
                        n[r] = t.css(r), isNaN(parseInt(n[r], 10)) && (n[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(i), r.css(n).show()
                },
                removeWrapper: function (t) {
                    var n = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
                },
                setTransition: function (t, n, r, i) {
                    return i = i || {}, e.each(n, function (e, n) {
                        var s = t.cssUnit(n);
                        s[0] > 0 && (i[n] = s[0] * r + s[1])
                    }), i
                }
            }), e.fn.extend({
                effect: function () {
                    function t(t) {
                        function n() {
                            e.isFunction(s) && s.call(i[0]), e.isFunction(t) && t()
                        }
                        var i = e(this),
                            s = r.complete,
                            o = r.mode;
                        (i.is(":hidden") ? o === "hide" : o === "show") ? n() : u.call(i[0], r, n)
                    }
                    var r = i.apply(this, arguments),
                        s = r.mode,
                        o = r.queue,
                        u = e.effects.effect[r.effect],
                        a = !u && n && e.effects[r.effect];
                    return e.fx.off || !u && !a ? s ? this[s](r.duration, r.complete) : this.each(function () {
                        r.complete && r.complete.call(this)
                    }) : u ? o === !1 ? this.each(t) : this.queue(o || "fx", t) : a.call(this, {
                        options: r,
                        duration: r.duration,
                        callback: r.complete,
                        mode: r.mode
                    })
                },
                _show: e.fn.show,
                show: function (e) {
                    if (s(e)) return this._show.apply(this, arguments);
                    var t = i.apply(this, arguments);
                    return t.mode = "show", this.effect.call(this, t)
                },
                _hide: e.fn.hide,
                hide: function (e) {
                    if (s(e)) return this._hide.apply(this, arguments);
                    var t = i.apply(this, arguments);
                    return t.mode = "hide", this.effect.call(this, t)
                },
                __toggle: e.fn.toggle,
                toggle: function (t) {
                    if (s(t) || typeof t == "boolean" || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                    var n = i.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                },
                cssUnit: function (t) {
                    var n = this.css(t),
                        r = [];
                    return e.each(["em", "px", "%", "pt"], function (e, t) {
                        n.indexOf(t) > 0 && (r = [parseFloat(n), t])
                    }), r
                }
            })
        }(),
        function () {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, n) {
                t[n] = function (t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function (e) {
                    return e === 0 || e === 1 ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((e - 1) * 80 - 7.5) * Math.PI / 15)
                },
                Back: function (e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function (e) {
                    var t, n = 4;
                    while (e < ((t = Math.pow(2, --n)) - 1) / 11);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
                }
            }), e.each(t, function (t, n) {
                e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function (e) {
                    return 1 - n(1 - e)
                }, e.easing["easeInOut" + t] = function (e) {
                    return e < .5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2
                }
            })
        }()
    }(jQuery)
}),
function () {
    var e, t, n, r, i;
    $(function () {
        return $("#visual-area-bg img").MyThumbnail({
            thumbWidth: 1280,
            thumbHeight: 430,
            backgroundColor: "#000",
            imageDivClass: "bg-visual"
        })
    }), $(function () {
        return $("#gallery").galleryView({
            panel_width: 580,
            panel_height: 387,
            frame_width: 100,
            frame_height: 65,
            border: "1px solid white",
            show_captions: !0,
            transition_speed: 800,
            transition_interval: 3e3,
            pause_on_hover: !0
        })
    }), $(function () {
        return $("#tab_maps").click(function () {
            return r()
        })
    }), i = function () {
        return $("#tab_photos").addClass("current"), $("#tab_maps").removeClass("current").click(function () {
            return r()
        }), $("#photos").show(), $("#maps").hide()
    }, r = function () {
        $("#tab_photos").removeClass("current").click(function () {
            return i()
        }), $("#tab_maps").addClass("current"), $("#photos").hide(), $("#maps").show();
        if (!Voyagin.GoogleMapsLoader) return Voyagin.GoogleMapsLoader = new Voyagin._GoogleMapsLoader
    }, $(function () {
        return $("#option-counter").change(function () {
            var e, r, i, s, o, u, a, f, l, c, h, p, d;
            return o = $("#option-counter"), u = $("#option-counter option:selected"), s = $("#bookit-price"), r = $("#duration-number"), i = $("#duration-unit"), e = $("#activity-item-description"), p = u.data("price"), h = o.data("originalCurrency"), l = o.data("displayCurrency"), a = o.data("currencyRate"), d = (new FindJPN.Price(p, h, l, a)).to_s(), c = t(u.data("duration")), f = n(u.data("description")), s.text(d), r.text(c.num), i.text(c.unit), e.html(f)
        })
    }), $(function () {
        return $("#host-profile-read-more").click(function (e) {
            return e.preventDefault(), $("#host-profile").addClass("open")
        })
    }), $(function () {
        return $("textarea#message_body_body").placeholder()
    }), $(function () {
        return $("#dates_0").placeholder(), $("#dates_1").placeholder(), $("#dates_2").placeholder()
    }), $(e = function () {
        var e, t = this;
        if ((new Date(2e3, 1)).getYear() !== 2e3) return e = new Date, $("input.datetime").each(function (t, n) {
            return $(n).appendDtpicker({
                dateFormat: "YYYY/MM/DD",
                locale: $("html").attr("lang"),
                current: $(n).val() ? $(n).val() : e.toString(),
                additionalLeft: $("select.time").outerWidth() + 8,
                allowPastDate: !1
            })
        })
    }), t = function (e) {
        var t, n;
        return e > 1440 ? (t = Math.floor(e / 1440), {
            num: Math.ceil(t),
            unit: "days"
        }) : e > 1410 ? {
            num: 1,
            unit: "day"
        } : (t = Math.floor(e / 60), n = e % 60, n > 30 ? t + 1 === 1 ? {
            num: 1,
            unit: "hour"
        } : {
            num: t + 1,
            unit: "hours"
        } : n === 0 ? t === 1 ? {
            num: 1,
            unit: "hour"
        } : {
            num: t,
            unit: "hours"
        } : {
            num: t + .5,
            unit: "hours"
        })
    }, n = function (e) {
        return e.replace(/\n/g, "<br>")
    }
}.call(this),
function () {
    var e;
    $(e = function () {
        return new Voyagin.AdminActivityImageUploader($(".admin_activity_cloudinary-fileupload"))
    })
}.call(this),
function () {
    var e;
    $(document).ready(e = function () {
        return new Voyagin.AdminProfileImageUploader($(".admin_profile_cloudinary-fileupload"))
    })
}.call(this),
function () {
    $(function () {
        return $("#admin_edit .base").meca("heightAlign")
    })
}.call(this),
function () {
    $(function () {
        return $("#admin_table").tablesorter()
    })
}.call(this),
function () {
    this.fjpSetCustomVars = function () {
        if (typeof _gaq != "undefined" && _gaq !== null && typeof customVars != "undefined" && customVars !== null) {
            customVars.var1 != null && _gaq.push(["_setCustomVar", 1, "sex_birth_nation", customVars.var1, 1]), customVars.var2 != null && _gaq.push(["_setCustomVar", 2, "purpose", customVars.var2, 1]);
            if (customVars.var3 != null) return _gaq.push(["_setCustomVar", 3, "currency", customVars.var3, 3])
        }
    }, this.fjpTrackTrans = function () {
        var e, t, n, r;
        if (typeof _gaq != "undefined" && _gaq !== null) {
            _gaq.push(["_addTrans", gaOrder.id, "", gaOrder.total, "", "", "", "", ""]), r = gaOrder.items;
            for (t = 0, n = r.length; t < n; t++) e = r[t], _gaq.push(["_addItem", gaOrder.id, e.id, e.name, gaOrder.category, e.price, e.num]);
            return _gaq.push(["_trackTrans"])
        }
    }, this.fjpTrackEvent = function () {
        if (typeof _gaq != "undefined" && _gaq !== null && typeof removedWish != "undefined" && removedWish !== null) return _gaq.push(["_trackEvent", "Wishlists", "Remove", removedWish.vanityUrl])
    }
}.call(this), $(function () {
    $("#upload-off").css({
        position: "absolute",
        top: "-9999px"
    }).change(function () {
        var e = $(this).val(),
            t = e.replace(/\\/g, "/"),
            n = t.lastIndexOf("/");
        $("#upload-on").val(n !== -1 ? e.substring(n + 1) : e)
    }), $("#upload-on").on("keyup, keydown, keypress", function () {
        return !1
    }), $("#upload-on, #upload-btn").click(function () {
        $("#upload-off").trigger("click")
    })
}),
function () {
    $(document).ready(function () {
        return $(".slide-switch input:checkbox").checkbox(), $(".slide-switch input[safari]:checkbox").checkbox({
            cls: "jquery-safari-checkbox"
        })
    })
}.call(this),
function () {
    var e, t, n;
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.CloudinaryUploader) == null && (e.CloudinaryUploader = {}), e.CloudinaryUploader = function () {
        function e(e, t) {
            t == null && (t = $()), this._appendUploader(e), this._appendRemover(t)
        }
        return e.prototype._successUrl = function () {
            return void 0
        }, e.prototype._removeUrl = function () {
            return void 0
        }, e.prototype._appendUploader = function (e) {
            var t = this;
            return e.on("fileuploadchange", function (n, r) {
                return t._onFileUploadChange(n, r, e)
            }).on("fileuploadfail", function (e, n) {
                return t._onFileUploadFail(e, n)
            }).on("cloudinarydone", function (e, n) {
                return t._onCloudinaryDone(e, n)
            })
        }, e.prototype._appendRemover = function (e) {
            var t = this;
            return e.click(function (e) {
                return t._removePicture($(e.currentTarget))
            })
        }, e.prototype._onFileUploadChange = function (e, t, n) {
            var r;
            return r = t.files[0], this._validateFileExt(r) ? this._validateFileSize(r) ? (this._displayLoadingImage(n), $.ajaxSetup({
                timeout: 2e4
            })) : (alert("file size is too big."), !1) : (alert("file type is wrong."), !1)
        }, e.prototype._validateFileExt = function (e) {
            var t;
            return t = e.name.substring(e.name.lastIndexOf(".") + 1).toLowerCase(), t === "jpg" || t === "jpeg" || t === "gif" || t === "png"
        }, e.prototype._validateFileSize = function (e) {
            return e.size < 1677721.6
        }, e.prototype._displayLoadingImage = function (e) {}, e.prototype._onFileUploadFail = function (e, t) {
            return alert(t.errorMessage), this._removeLoadingImage()
        }, e.prototype._removeLoadingImage = function () {}, e.prototype._onCloudinaryDone = function (e, t) {
            var n, r = this;
            return n = {}, n.image_id = null, n.image_path = t.result.path, n.image_path.lastIndexOf(".") === -1 ? !1 : $.ajax({
                type: "PUT",
                data: n,
                url: this._successUrl()
            }).done(function (e) {
                return r._removeLoadingImage(), r._appendNewImageHtml(e, t)
            })
        }, e.prototype._appendNewImageHtml = function (e, t) {}, e.prototype._removePicture = function (e) {
            var t, n = this;
            if ($.rails.confirm(e.attr("data-confirm"))) return t = {}, t.image_path = e.attr("data-form-data"), $.ajax({
                type: "DELETE",
                data: t,
                url: this._removeUrl()
            }).done(function (t) {
                return n._removeImageHtml(e)
            })
        }, e.prototype._removeImageHtml = function (e) {}, e
    }()
}.call(this),
function () {
    var e, t, n, r = {}.hasOwnProperty,
        i = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) r.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.ActivityImageUploader) == null && (e.ActivityImageUploader = {}), e.ActivityImageUploader = function (e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return i(t, e), t.prototype._successUrl = function () {
                return location.href
            }, t.prototype._removeUrl = function () {
                return location.href
            }, t.prototype._displayLoadingImage = function (e) {
                var t, n, r, i, s, o;
                return t = $('<li class="pict-thumbnail loading_image" />'), n = $('<div class="frame">'), o = e.data("loading-image_path"), r = $("<img src='" + o + "' width='107' height='107'/>"), n.append(r), s = $("#picts-area li").length + 1, i = $("<p class='pict-num'>" +
                    s + "</p>"), t.append(i), t.append(n), $("#picts-area").append(t)
            }, t.prototype._removeLoadingImage = function () {
                return $(".loading_image").remove()
            }, t.prototype._appendNewImageHtml = function (e, t) {
                var n, r, i, s, o, u, a;
                return s = $('<li class="pict-thumbnail" />'), a = $("#picts-area li").length + 1, s.append("      <p class='pict-num'>" + a + "</p>    "), i = $('<div class="frame">'), s.append(i), i.append($.cloudinary.image(t.result.public_id, {
                    format: t.result.format,
                    version: t.result.version,
                    crop: "pad",
                    background: "black",
                    width: 160,
                    height: 107
                })), a !== 1 && (n = $("<p/>", {
                    "class": "icon-remove",
                    type: "button",
                    "data-confirm": "Are you sure?",
                    "data-form-data": t.result.path
                }), u = "/assets/common/icon_remove.png", r = $("<img/>", {
                    alt: "Icon_remove",
                    src: u,
                    width: 22,
                    height: 44
                }).wrap("<span/>"), n.append(r), o = $('<div class="remove-pict" />'), o.append(n), a === 2 && o.append('          <p class="panel-remove arrow5_black">            <span>remove from pictures</span>          </p>'), s.append(o), this._appendRemover(n)), a === 6 && $("#add_picture").hide(), $("#picts-area").append(s), $("#cover_photo_id").append($("<option/>", {
                    value: e.activity_image_id,
                    text: a
                }))
            }, t.prototype._removeImageHtml = function (e) {
                var t, n, r;
                r = $("#picts-area li").size(), n = parseInt(e.parent().prev().prev().text()), $("#picts-area").children("li:gt(" + (n - 1) + ")").each(function () {
                    var e;
                    return e = $(this).find(".pict-num"), e.text(parseInt(e.text()) - 1)
                }), $("#cover_photo_id").children("option:gt(" + (n - 1) + ")").each(function () {
                    return $(this).text(parseInt($(this).text()) - 1)
                }), t = $("#cover_photo_id option:eq(" + (n - 1) + ")"), t.remove(), e.parent().parent().remove();
                if (r === 6) return $("#add_picture").show()
            }, t
    }(e.CloudinaryUploader)
}.call(this),
function () {
    var e, t, n, r = {}.hasOwnProperty,
        i = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) r.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.AdminActivityImageUploader) == null && (e.AdminActivityImageUploader = {}), e.AdminActivityImageUploader = function (e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return i(t, e), t.prototype._successUrl = function () {
                return $("#upload-btn").data("action")
            }, t.prototype._displayLoadingImage = function (e) {
                var t, n, r, i;
                return t = $('<li class="pict-thumbnail loading_image" />'), n = $('<div class="frame">'), i = e.data("loading-image_path"), r = $("<img src='" + i + "' width='580' height='387'/>"), n.append(r), t.append(n), $("#activity_images").append(t)
            }, t.prototype._removeLoadingImage = function () {
                return $(".loading_image").remove()
            }, t.prototype._appendNewImageHtml = function (e, t) {
                var n, r, i, s, o, u;
                return i = $.cloudinary.image(t.result.public_id, {
                    format: t.result.format,
                    version: t.result.version,
                    crop: "pad",
                    background: "black",
                    width: 580,
                    height: 387
                }), u = $("#activity_images img").length + 1, i.append("      <p class='pict-num'>" + u + "</p>    "), u !== 1 && (n = $("<p/>", {
                    "class": "icon-remove",
                    type: "button",
                    "data-confirm": "Are you sure?",
                    "data-form-data": t.result.path
                }), o = "/assets/common/icon_remove.png", r = $("<img/>", {
                    alt: "Icon_remove",
                    src: o,
                    width: 22,
                    height: 44
                }).wrap("<span/>"), n.append(r), s = $('<div class="remove-pict" />'), s.append(n), u === 2 && s.append('          <p class="panel-remove arrow5_black">            <span>remove from pictures</span>          </p>'), i.append(s), this._appendRemover(n)), u === 6 && $("#add_picture").hide(), $("#activity_images").append(i), $("#activity_images").append($("<br />")), $("#cover_photo_id").append($("<option/>", {
                    value: e.activity_image_id,
                    text: u
                }))
            }, t
    }(e.CloudinaryUploader)
}.call(this),
function () {
    var e, t, n, r = {}.hasOwnProperty,
        i = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) r.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.AdminProfileImageUploader) == null && (e.AdminProfileImageUploader = {}), e.AdminProfileImageUploader = function (e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return i(t, e), t.prototype._successUrl = function () {
                return $("#upload-btn").data("action")
            }, t.prototype._displayLoadingImage = function (e) {
                var t;
                return t = $("#profile_image img"), t.data("before-image-path", t.attr("src")), t.attr("src", e.data("loading-image_path"))
            }, t.prototype._removeLoadingImage = function () {
                var e;
                return e = $("#profile_image img"), e.attr("src", e.data("before-image-path"))
            }, t.prototype._appendNewImageHtml = function (e, t) {
                return $("#profile_image img").attr("src", $.cloudinary.image(t.result.public_id, {
                    format: t.result.format,
                    version: t.result.version,
                    crop: "fill",
                    width: 100,
                    height: 100
                }).attr("src"))
            }, t
    }(e.CloudinaryUploader)
}.call(this),
function () {
    var e, t, n, r = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e._GoogleMapsLoader) == null && (e._GoogleMapsLoader = {}), e._GoogleMapsLoader = function () {
            function t() {
                this.loadGoogleMaps = r(this.loadGoogleMaps, this), this.$mapCanvas = $("#map_canvas"), this.$address = $("#activity_gmaps_address"), this.$zoom = $("#activity_gmaps_zoom"), this.$radius = $("#activity_gmaps_radius"), window.loadGoogleMaps = this.loadGoogleMaps, $("body").append($("<script>").attr("type", "text/javascript").attr("src", "https://maps.googleapis.com/maps/api/js" + ("?key=" + this.key + "&sensor=false&callback=loadGoogleMaps"))), this.setOnChanges()
            }
            return t.prototype.$mapCanvas = null, t.prototype.$address = null, t.prototype.$zoom = null, t.prototype.$radius = null, t.prototype.key = "AIzaSyBDmjXXhifTQp6qVzmvoxBCHfAs1bf_OJk", t.prototype.map = null, t.prototype.loadGoogleMaps = function () {
                var e, t = this;
                return e = new google.maps.Geocoder, e.geocode({
                    address: this.$mapCanvas.data("address")
                }, function (e, n) {
                    var r, i, s, o, u, a, f;
                    return n !== google.maps.GeocoderStatus.OK ? alert("Failed loading maps. Please reload.") : (f = parseInt(t.$mapCanvas.data("zoom")), r = e[0].geometry.location, u = {
                        center: r,
                        zoom: f,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }, o = t.$mapCanvas[0], t.map = new google.maps.Map(o, u), a = parseInt(t.$mapCanvas.data("radius")), s = {
                        strokeColor: "#FF0000",
                        strokeOpacity: .4,
                        strokeWeight: 2,
                        fillColor: "#FF0000",
                        fillOpacity: .2,
                        center: r,
                        radius: a,
                        map: t.map
                    }, i = new google.maps.Circle(s))
                })
            }, t.prototype.setOnChanges = function () {
                return this.$address.change(function () {
                    var t;
                    return t = e.GoogleMapsLoader, t.$mapCanvas.data("address", $(this)[0].value), t.loadGoogleMaps()
                }), this.$zoom.change(function () {
                    var t;
                    return t = e.GoogleMapsLoader, t.$mapCanvas.data("zoom", $(this)[0].value), t.loadGoogleMaps()
                }), this.$radius.change(function () {
                    var t;
                    return t = e.GoogleMapsLoader, t.$mapCanvas.data("radius", $(this)[0].value), t.loadGoogleMaps()
                })
            }, t
    }(), $(function () {
        var t, n;
        n = t = /^\/admin\/activities\/(\d+)\/gmap/;
        if (n.test(location.pathname)) return e.GoogleMapsLoader = new e._GoogleMapsLoader
    })
}.call(this),
function () {
    var e, t, n;
    (t = window.FindJPN) == null && (window.FindJPN = {}), e = window.FindJPN, (n = e._Modal) == null && (e._Modal = {}), e._Modal = function () {
        function e() {
            this.$body = null
        }
        return e.prototype.show = function (e) {
            var t, n, r, i, s = this;
            return e == null && (e = {}), e.modalContainerId == null ? !1 : (this.$body == null && (this.$body = $("body")), r = $(".modal-container" + e.modalContainerId), n = r.children(".modal"), t = n.find(".close"), this.$body.addClass("noscroll"), r.css({
                display: "block",
                WebkitTransform: "none"
            }), i = n.outerHeight(), i = -1 * i / 2, r.addClass("visible"), n.css({
                "margin-bottom": i
            }), t.click(function (t) {
                return t.preventDefault(), s.hide(e)
            }), $(window).keydown(function (t) {
                if (t.which === 27) return s.hide(e)
            }))
        }, e.prototype.hide = function (e) {
            var t, n, r = this;
            e == null && (e = {});
            if (e.modalContainerId == null) return !1;
            n = $(".modal-container" + e.modalContainerId), t = n.children(".modal"), this.$body.removeClass("noscroll"), n.removeClass("visible"), setTimeout(function () {
                return n.css({
                    display: "none",
                    WebkitTransform: "translateZ(0px)"
                })
            }, 200);
            if (e.hideCallback != null) return e.hideCallback()
        }, e
    }(), e.Modal = new e._Modal
}.call(this),
function () {
    var e, t, n;
    (t = window.FindJPN) == null && (window.FindJPN = {}), e = window.FindJPN, (n = e.PaymentNotice) == null && (e.PaymentNotice = {}), e.PaymentNotice = function () {
        function e() {
            this.$participants = $(".participant"), this.$participants.length > 0 || (this.$participants = $(".participant_confirm")), this.$paymentNotice = $("#payment_notice"), this.$paymentNoticePrice = $("#payment_notice_price"), this.dispCcy = $("#display_ccy").val(), this.usdRate = $("#usd_rate").val(), this.flat = $("#activity_flat").val(), this.displayNotice(), this._eventify(), this
        }
        return e.prototype.$participants = null, e.prototype.$paymentNotice = null, e.prototype.$paymentNoticePrice = null, e.prototype.dispCcy = null, e.prototype.usdRate = null, e.prototype.flat = null, e.prototype.subTotals = null, e.prototype.total = null, e.prototype.paymentCcy = "USD", e.prototype.displayNotice = function () {
            return this._calcSubTotals(), this._calcTotal(), this._updatePriceAndCcy(), this._isDisplayable() ? this.$paymentNotice.show() : this.$paymentNotice.hide(), this
        }, e.prototype._eventify = function () {
            var e = this;
            return this.$participants.on("change", function () {
                return e.displayNotice()
            }), this
        }, e.prototype._calcSubTotals = function () {
            var e = this;
            return this.subTotals = [], this.$participants.each(function (t, n) {
                var r, i, s;
                return i = $(n).val(), i === "" && (i = $(n).text()), r = $(n).next().val(), s = Math.floor(r * e.usdRate), e.flat === "true" ? e.subTotals.push((i !== "0") * s) : e.subTotals.push(i * s)
            }), this
        }, e.prototype._calcTotal = function () {
            var e, t, n, r;
            this.total = 0, r = this.subTotals;
            for (t = 0, n = r.length; t < n; t++) e = r[t], this.total += e;
            return this
        }, e.prototype._updatePriceAndCcy = function () {
            return isNaN(this.total) ? this.$paymentNoticePrice.text("<Error>") : this.$paymentNoticePrice.text(this.total), this
        }, e.prototype._isDisplayable = function () {
            var e;
            return this.dispCcy === this.paymentCcy && (e = !1), e == null && (e = !0), e
        }, e
    }()
}.call(this),
function () {
    var e, t, n;
    (t = window.FindJPN) == null && (window.FindJPN = {}), e = window.FindJPN, (n = e._Pin) == null && (e._Pin = {}), e._Pin = function () {
        function t() {
            var e;
            e = Object;
            if (document.getElementById("discover") != null || document.getElementById("activity_wrap") != null) this.$pinButton = $("#discover .pin_button , #activity_wrap .pin_button"), this.$pinButtonOnDiscover = $("#discover .pin_button"), this.$pinButtonOnDetail = $("#activity_wrap .pin_button"), this.$pinActionButton = $(".pin_action_button"), this.$pinCommentTextarea = $(".pin-form textarea"), this.$pinFacebookCheck = $(".pin-form #facebook_check"), this.$pinFacebookCheckbox = $(".pin-form #facebook_checkbox"), this.$pinform = $("#pinform"), this.$pinActivityId = $("#pin_activity_id"), this.$pinComment = $("#pin_comment"), this.$pinAction = $("#pin_action"), this.refreshPinButton(), this.setEvent()
        }
        return t.prototype.refreshPinButton = function () {
            return this.$pinButtonOnDiscover.each(function () {
                var e, t;
                return e = parseInt($(this).attr("data-activity-id")), t = fjpUserFavorites.ActivityId[e], typeof t != "undefined" ? ($(this).addClass("active-button"), $(this).parent().removeClass("not-add-button-wrapper"), $(this).parent().addClass("added-button-wrapper")) : ($(this).parent().removeClass("added-button-wrapper"), $(this).parent().addClass("not-add-button-wrapper"))
            }), this.$pinButtonOnDetail.each(function () {
                var e, t;
                return e = parseInt($(this).attr("data-activity-id")), t = fjpUserFavorites.ActivityId[e], typeof t != "undefined" ? ($(this).addClass("active-button"), $(this).parent().find(".pin_button_text").text("in your wish list")) : $(this).parent().find(".pin_button_text").text()
            }), this.$pinButtonAdded = $("#discover .added-button-wrapper"), this.$pinButtonAdded.off("mouseenter").off("mouseleave")
        }, t.prototype.refreshPinModal = function () {
            var e;
            e = parseInt($("#pin_activity_id").val());
            if (typeof fjpUserFavorites.ActivityId[e] == "undefined") return this.$pinAction.val("save"), $(".pin_action_button").text("Save"), this.$pinCommentTextarea.val(""), this.$pinCommentTextarea.removeAttr("readonly"), this.$pinActionButton.removeAttr("disabled"), this.$pinActionButton.css({
                display: "block"
            }), $("#user_signed_in_with_facebook").val() === "true" ? (this.$pinFacebookCheckbox.attr({
                checked: "checked"
            }), this.$pinFacebookCheck.css({
                display: "block"
            })) : (this.$pinFacebookCheckbox.attr({
                checked: null
            }), this.$pinFacebookCheck.css({
                display: "none"
            }))
        }, t.prototype.refreshVariables = function () {
            return this.$pinButton = $("#discover .pin_button , #activity_wrap .pin_button"), this.$pinButtonOnDiscover = $("#discover .pin_button"), this.$pinButtonOnDetail = $("#activity_wrap .pin_button"), this.$pinButtonAdded = $("#discover .added-button-wrapper")
        }, t.prototype.setEvent = function () {
            var t, n;
            return this.$pinButton.off("click"), this.$pinActionButton.off("click"), t = function () {
                return e.Pin.$pinform.removeAttr("action"), e.Pin.$pinActivityId.val("")
            }, this.$pinButton.click(function (r) {
                var i, s, o, u, a, f, l, c, h, p, d, v, m;
                typeof _gaq != "undefined" && _gaq !== null && $(this).parent().hasClass("not-add-button-wrapper") && (h = $(this).attr("href").split("/")[2], _gaq.push(["_trackEvent", "Wishlists", "Trigger", h])), r.preventDefault(), m = $(this).attr("data-image-src"), v = $(this).attr("data-image-alt"), $("#pin_modal .pin").empty().append('<img src="' + m + '" alt="' + v + '" />'), d = $(this).attr("href"), p = $(this).attr("data-activity-id"), e.Pin.$pinform.attr({
                    action: d
                }), e.Pin.$pinActivityId.val(p), e.Pin.refreshPinModal();
                if ($("#user_signed_in").val() !== "true") return $("body").addClass("noscroll"), $("#hidden_modal").css({
                    display: "block"
                }), c = 700, u = 640, a = (window.screen.width - c) / 2, l = (window.screen.height - u) / 2, f = "width=" + c + "," + ("left=" + a + ",") + ("screenX=" + a + ",") + ("height=" + u + ",") + ("top=" + l + ",") + ("screenY=" + l + ",") + "dependent=yes,location=no", o = window.open("/users/sign_in?state=modal", "_blank", f), $(window).on("focus", n);
                i = parseInt($(this).attr("data-activity-id")), s = fjpUserFavorites.ActivityId[i];
                if (typeof s == "undefined") return e.Modal.show({
                    modalContainerId: "#pin_modal",
                    hideCallback: t
                })
            }), n = function () {
                if ((typeof loginWindow != "undefined" && loginWindow !== null ? loginWindow.closed : void 0) !== !1) return $(window).off("focus"), $("body").removeClass("noscroll"), $("#hidden_modal").css({
                    display: "none"
                }), $.ajax({
                    type: "GET",
                    url: "/header/ajax_auth",
                    dataType: "html"
                }).done(function (e) {
                    return $("#header-auth").html(e)
                })
            }, this.$pinActionButton.click(function (n) {
                var r, i, s, o, u;
                return u = {}, $("#pin_publish_to_fb").val(e.Pin.$pinFacebookCheckbox.is(":checked")), e.Pin.$pinComment.val(e.Pin.$pinCommentTextarea.val()), $(this).attr({
                    disabled: "disabled"
                }), e.Pin.$pinform.find("input, textarea").each(function () {
                    return u[$(this).attr("id")] = $(this).val()
                }), $("#hidden_modal").css({
                    display: "block"
                }), o = 128, r = 128, i = (window.innerWidth - o) / 2, s = (window.innerHeight - r) / 2, $("#hidden_modal").html('<img src="/assets/common/loader_circle.gif" width="' + o + '" height="' + r + '" alt="Now Loading" style="position:absolute;top:' + s + "px;left:" + i + 'px;" />'), $.ajax({
                    type: "POST",
                    data: u,
                    url: e.Pin.$pinform.attr("action")
                }).done(function (n) {
                    var r, i, s, o;
                    return typeof _gaq != "undefined" && _gaq !== null && (i = "Add", e.Pin.$pinFacebookCheckbox.is(":checked") && (i += " with facebook"), s = e.Pin.$pinform.attr("action").split("/")[2], _gaq.push(["_trackEvent", "Wishlists", i, s])), o = parseInt(u.pin_activity_id), r = fjpUserFavorites.ActivityId[o], e.Pin.$pinAction.val() === "save" ? (fjpUserFavorites.ActivityId[o] = {
                        comment: u.pin_comment
                    }, e.Pin.refreshPinButton()) : typeof r != "undefined" && delete fjpUserFavorites.ActivityId[o], e.Modal.hide({
                        modalContainerId: "#pin_modal",
                        hideCallback: t
                    })
                }).fail(function (n) {
                    var r;
                    return r = JSON.parse(n.responseText), e.Modal.hide({
                        modalContainerId: "#pin_modal",
                        hideCallback: t
                    }), $("#pin_error_modal .async").html(r.html), e.Modal.show({
                        modalContainerId: "#pin_error_modal"
                    }), setTimeout(function () {
                        return e.Modal.hide({
                            modalContainerId: "#pin_error_modal"
                        })
                    }, 3e3)
                }).always(function () {
                    return $("#hidden_modal").css({
                        display: "none"
                    }), $("#hidden_modal").html("")
                })
            })
        }, t
    }(), $(document).ready(function () {
        return e.Pin = new e._Pin
    })
}.call(this),
function () {
    var e, t, n;
    (t = window.FindJPN) == null && (window.FindJPN = {}), e = window.FindJPN, (n = e.Price) == null && (e.Price = {}), e.Price = function () {
        function e(e, t, n, r) {
            this.origPrice = e, this.origCcy = t, this.dispCcy = n, this.ccyRate = r, this._calcDispPrice()
        }
        return e.prototype.origPrice = null, e.prototype.origCcy = null, e.prototype.dispPrice = null, e.prototype.dispCcy = null, e.prototype.ccyRate = null, e.prototype._calcDispPrice = function () {
            return this.dispPrice = Math.floor(this.origPrice * this.ccyRate), this.dispPrice < 1 && (this.dispPrice = 1), this
        }, e.prototype._addFigure = function (e) {
            while (e !== (e = e.toString().replace(/^(-?\d+)(\d{3})/, "$1,$2")));
            return e
        }, e.prototype.to_s = function () {
            return this._addFigure(this.dispPrice)
        }, e
    }()
}.call(this),
function () {
    var e, t, n, r = {}.hasOwnProperty,
        i = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) r.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.ProfileImageUploader) == null && (e.ProfileImageUploader = {}), e.ProfileImageUploader = function (e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return i(t, e), t.prototype._successUrl = function () {
                return $(".edit_profile").attr("action")
            }, t.prototype._displayLoadingImage = function (e) {
                var t;
                return t = $("img.pict"), t.data("before-image-path", t.attr("src")), t.attr("src", e.data("loading-image_path"))
            }, t.prototype._removeLoadingImage = function () {
                var e;
                return e = $("img.pict"), e.attr("src", e.data("before-image-path"))
            }, t.prototype._appendNewImageHtml = function (e, t) {
                return $("img.pict").attr("src", $.cloudinary.image(t.result.public_id, {
                    format: t.result.format,
                    version: t.result.version,
                    crop: "fill",
                    width: 100,
                    height: 100
                }).attr("src"))
            }, t
    }(e.CloudinaryUploader)
}.call(this),
function () {
    var e, t, n, r = {}.hasOwnProperty,
        i = function (e, t) {
            function i() {
                this.constructor = e
            }
            for (var n in t) r.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
        };
    (t = window.Voyagin) == null && (window.Voyagin = {}), e = window.Voyagin, (n = e.UserImageUploader) == null && (e.UserImageUploader = {}), e.UserImageUploader = function (e) {
            function t() {
                return t.__super__.constructor.apply(this, arguments)
            }
            return i(t, e), t.prototype._successUrl = function () {
                return $(".edit_user").attr("action")
            }, t.prototype._displayLoadingImage = function (e) {
                var t;
                return t = $("img.pict"), t.data("before-image-path", t.attr("src")), t.attr("src", e.data("loading-image_path"))
            }, t.prototype._removeLoadingImage = function () {
                var e;
                return e = $("img.pict"), e.attr("src", e.data("before-image-path"))
            }, t.prototype._appendNewImageHtml = function (e, t) {
                return $("img.pict").attr("src", $.cloudinary.image(t.result.public_id, {
                    format: t.result.format,
                    version: t.result.version,
                    crop: "fill",
                    width: 100,
                    height: 100
                }).attr("src"))
            }, t
    }(e.CloudinaryUploader)
}.call(this),
function () {
    $(function () {
        return $(".basic-scrollbar").tinyscrollbar()
    })
}.call(this),
function () {}.call(this), $(document).ready(function () {
    $(".over").fadeTo(1, 1).hover(function () {
        $(this).fadeTo(100, .6)
    }, function () {
        $(this).fadeTo(400, 1)
    })
}),
function () {
    $(document).ready(function () {
        return $(".favorite_activity_comment").focus(function () {
            return $(".favorite_activity_submit").css({
                visibility: "hidden"
            }), $(this).parent().find(".favorite_activity_submit").css({
                visibility: "visible"
            })
        }), $(".remove-wish").hover(function () {
            return $(this).find(".panel-remove").css({
                display: "block"
            })
        }, function () {
            return $(this).find(".panel-remove").css({
                display: "none"
            })
        })
    })
}.call(this),
function () {
    $(function () {
        return $("#currency_counter").change(function () {
            return $.cookie("currency", this.value, {
                path: "/"
            }), location.reload()
        }), $("#language_counter").change(function () {
            return $.cookie("language", this.value, {
                path: "/"
            }), location.href = location.href.replace(/\?lang=\w+&/, "?").replace(/\?lang=\w+/, "").replace(/&lang=\w+/, "")
        })
    })
}.call(this),
function () {}.call(this),
function () {
    $(function () {
        return $("#order_form_tbl2 input, #order_form_tbl2 textarea").focus(function () {
            return $(this).addClass("focus")
        }).blur(function () {
            return $(this).removeClass("focus")
        })
    }), $(function () {
        return $(".boxy").boxy({
            title: "Cancel",
            modal: !0
        })
    })
}.call(this),
function () {}.call(this),
function () {
    $(function () {
        var e;
        if ($(".g-menu").length > 0) return $.cookie("is_signed_in") === "true" ? ($("#header").addClass("status-signin"), $("#g-menu-signed").css("display", "table"), $.cookie("is_host") === "true" && ($(".g-menu-guest").hide(), $(".g-menu-host").show()), e = $("#g-menu-signed"), $.ajax({
            url: e.data("action"),
            dataType: "json"
        }).done(function (e) {
            var t;
            $(".user-name").text(e.userName), t = $(e.imageHtml).attr("src"), $("#userPict").find("img").attr("src", t);
            if (e.numRequiresAction > 0) return $("#message-count").text(e.numRequiresAction).show(), e.numOrdersNeedToBeReplied > 0 && ($("#g-menu-host-orders .unopen").text(e.numOrdersNeedToBeReplied), $("#g-menu-host-orders").show()), e.numUnreadMessageAsHost > 0 && ($("#g-menu-host-messages .unopen").text(e.numUnreadMessageAsHost), $("#g-menu-host-messages").show()), e.numUnreadMessageAsGuest > 0 && ($("#g-menu-guest-messages .unopen").text(e.numUnreadMessageAsGuest), $("#g-menu-guest-messages").show()), e.numOrdersNeedToBeReviewed > 0 && ($("#g-menu-guest-reviews .unopen").text(e.numOrdersNeedToBeReviewed), $("#g-menu-guest-reviews").show()), $("#message-menu").show()
        })) : $("#g-menu-unsigned").css("display", "table")
    })
}.call(this),
function () {
    var e, t, n, r, i;
    i = function (e) {
        var t, n, r;
        return n = $(e).next().next().val(), t = $(e).val(), r = $('meta[name="csrf-token"]').attr("content"), $.post("/host/activities/" + n, {
            authenticity_token: r,
            _method: "PUT",
            active: t
        }, function (e, t) {}, "text")
    }, $(function () {
        return $(".display").on("change", function () {
            return i(this)
        })
    }), $(n = function () {
        return $("#add_another_activity_item_btn").click(function () {
            var e;
            return e = parseInt($(".act-option").last().attr("id").slice(-1)) + 1, $(".act-option").last().after('<div id="activity_items_' + e + '" class="act-option">' + $("#activity_items_0").html() + '<button class="remove_activity_item_btn btn basic f-r" type="button">Remove</button>' + "</div>"), $("#activity_items_" + e + " #activity_activity_items_attributes_0_id").remove(), $("#activity_items_" + e + " #activity_activity_items_attributes_0_activity_item_translations_attributes_0_id").remove(), $("#activity_items_" + e + " .activity_item_reward").text(""), $("#activity_items_" + e + " #activity_activity_items_attributes_0_price").val(""), $("#activity_items_" + e + " #activity_activity_items_attributes_0_activity_item_translations_attributes_0_name").val(""), $("#activity_items_" + e + " label").attr("for", function () {
                return $(this).attr("for").replace("0", e)
            }), $("#activity_items_" + e + " :input").attr("id", function () {
                return this.id.replace("0", e)
            }), $("#activity_items_" + e + " :input").attr("name", function () {
                return this.name.replace("0", e)
            }), $("#activity_items_" + e + " .remove_activity_item_btn").click(function () {
                return $(this).parent().remove()
            }), $("#activity_items_" + e + " #activity_activity_items_attributes_" + e + "_price").change(function () {
                if (!isNaN($(this).val())) return $("#activity_items_" + e + " .activity_item_reward").text(r($(this).val(), $(this).data("rate")))
            })
        }), $(".remove_activity_item_btn").click(function () {
            return $(this).parent().find("[id$=_active]").val("f"), $(this).parent().hide()
        }), $("#activity_flat").change(function () {
            var e, t, n, r;
            t = $(".edit_activity hr").length - 1;
            if (this.checked) {
                for (e = n = 0; 0 <= t ? n <= t : n >= t; e = 0 <= t ? ++n : --n) e !== 0 && ($("#activity_items_" + e + " #activity_activity_items_attributes_" + e + "_active").val("f"), $("#activity_items_" + e).hide());
                return $("#add_another_activity_item_btn").parent().hide()
            }
            for (e = r = 0; 0 <= t ? r <= t : r >= t; e = 0 <= t ? ++r : --r) e !== 0 && ($("#activity_items_" + e + " #activity_activity_items_attributes_" + e + "_active").val("t"), $("#activity_items_" + e).show());
            return $("#add_another_activity_item_btn").parent().show()
        }), $("#activity_ccy").change(function () {
            var e;
            return e = $(this).children(":selected").data("rate"), $(".edit_activity [id$=_price]").each(function () {
                $(this).data("rate", e);
                if (!isNaN($(this).val())) return $(this).parents(".act-option").find(".activity_item_reward").text(r($(this).val(), $(this).data("rate")))
            }), $(".reward_currency").text($(this).val() === "JPY" ? "JPY" : "USD"), $(".price_currency").text($(this).val())
        }), $(".edit_activity [id$=_price]").change(function () {
            if (!isNaN($(this).val())) return $(this).parents(".act-option").find(".activity_item_reward").fadeOut("fast", function () {
                var e;
                return e = $(this).parents(".act-option").find("[id$=_price]"), $(this).text(r(e.val(), e.data("rate"))).fadeIn("fast")
            })
        })
    }), r = function (e, t) {
        var n, r;
        return n = $("#fjp_base_fee_usd").val(), $("#activity_ccy").val() === "JPY" && (r = Math.floor(e - e * .15 - n * t)), r || (r = Math.floor(e * t - e * t * .15 - n)), r > 0 ? r : 0
    }, $(t = function () {
        return new Voyagin.ActivityImageUploader($(".activity_cloudinary-fileupload"), $(".icon-remove"))
    }), $(e = function () {
        return $(".activity_active_switch").click(function () {
            var e;
            return e = {}, e.activity_active = $(this).is(":checked"), $.ajax({
                type: "PUT",
                data: e,
                url: $(this).attr("action")
            })
        })
    })
}.call(this),
function () {}.call(this),
function () {
    $(function () {
        return $("textarea#message").placeholder()
    })
}.call(this),
function () {
    var e;
    $(document).ready(e = function () {
        return $("#add_another_communication_btn").click(function () {
            var e, t;
            return t = $("#communications div[id^=communications]").length, e = $("#communications_0").clone(), e.append('      <div class="dis-i-b v-b">        <button class="remove_communication_btn btn basic" type="button">remove</button>      </div>'), $("#add_another_communication_btn").before('<div id="communications_' + t + '" class="clearfix mb20">' + e.html() + "</div>"), $("#communications_" + t + " label").attr("for", function () {
                return $(this).attr("for").replace("0", t)
            }), $("#communications_" + t + " select").attr("id", function () {
                return this.id.replace("0", t)
            }), $("#communications_" + t + " select").attr("name", function () {
                return this.name.replace("0", t)
            }), $(".remove_communication_btn").click(function () {
                return $(this).parent().parent().remove()
            })
        }), $(".remove_communication_btn").click(function () {
            return $(this).prev().val("t"), $(this).parent().parent().hide()
        }), new Voyagin.ProfileImageUploader($(".profile_cloudinary-fileupload"))
    })
}.call(this),
function () {
    $(document).ready(function () {
        var e;
        e = $("#search-area-bg");
        if (e.length > 0) return e.bjqs({
            width: 1280,
            height: 430,
            animduration: 900,
            animspeed: 6e3,
            automatic: !0,
            showcontrols: !1,
            showmarkers: !1,
            keyboardnav: !1,
            usecaptions: !1
        }), e.css({
            position: ""
        })
    }), $(document).ready(function () {
        var e;
        e = $("#act-lists1");
        if (e.length > 0) return e.bjqs({
            width: 960,
            height: 300,
            animtype: "slide",
            automatic: !1,
            animduration: 400,
            showmarkers: !1,
            centercontrols: !1,
            nexttext: '<i class="icon-chevron-right icon-white"></i>',
            prevtext: '<i class="icon-chevron-left icon-white"></i>',
            keyboardnav: !1,
            usecaptions: !1
        })
    }), $(document).ready(function () {
        var e;
        e = $("#act-lists2");
        if (e.length > 0) return e.bjqs({
            width: 960,
            height: 300,
            animtype: "slide",
            automatic: !1,
            animduration: 400,
            showmarkers: !1,
            centercontrols: !1,
            nexttext: '<i class="icon-chevron-right icon-white"></i>',
            prevtext: '<i class="icon-chevron-left icon-white"></i>',
            keyboardnav: !1,
            usecaptions: !1
        })
    }), $(document).ready(function () {
        var e;
        e = $(".news-slider");
        if (e.length > 0) return e.bjqs({
            width: 280,
            height: 215,
            animduration: 400,
            showmarkers: !0,
            centercontrols: !1,
            nexttext: '<i class="icon-chevron-right icon-white"></i>',
            prevtext: '<i class="icon-chevron-left icon-white"></i>',
            keyboardnav: !1,
            usecaptions: !1
        })
    }), $(document).ready(function () {
        var e;
        e = $("#featured-pict");
        if (e.length > 0) return e.bjqs({
            width: 450,
            height: 300,
            animduration: 1800,
            automatic: !0,
            showcontrols: !1,
            showmarkers: !0,
            keyboardnav: !1,
            usecaptions: !0
        })
    }), $(document).ready(function () {
        var e;
        e = $("#slider_300");
        if (e.length > 0) return e.bjqs({
            width: 1280,
            height: 300,
            animduration: 1800,
            automatic: !0,
            showcontrols: !1,
            showmarkers: !1,
            keyboardnav: !1,
            usecaptions: !1
        }), e.css({
            position: ""
        })
    })
}.call(this), jQuery.fn.boxy = function (e) {
    return e = e || {}, this.each(function () {
        var t = this.nodeName.toLowerCase(),
            n = this;
        t == "a" ? jQuery(this).click(function () {
            var t = Boxy.linkedTo(this),
                n = this.getAttribute("href"),
                r = jQuery.extend({
                    actuator: this,
                    title: this.title
                }, e);
            if (t) t.show();
            else if (n.indexOf("#") >= 0) {
                var i = jQuery(n.substr(n.indexOf("#"))),
                    s = i.clone(!0);
                i.remove(), r.unloadOnHide = !1, new Boxy(s, r)
            } else r.cache || (r.unloadOnHide = !0), Boxy.load(this.href, r);
            return !1
        }) : t == "form" && jQuery(this).on("submit.boxy", function () {
            return Boxy.confirm(e.message || "Please confirm:", function () {
                jQuery(n).off("submit.boxy").submit()
            }), !1
        })
    })
}, Boxy.EF = function () {}, jQuery.extend(Boxy, {
    WRAPPER: "<table cellspacing='0' cellpadding='0' border='0' class='boxy-wrapper'><tr><td class='top-left'></td><td class='top'></td><td class='top-right'></td></tr><tr><td class='left'></td><td class='boxy-inner'></td><td class='right'></td></tr><tr><td class='bottom-left'></td><td class='bottom'></td><td class='bottom-right'></td></tr></table>",
    DEFAULTS: {
        title: null,
        closeable: !0,
        draggable: !0,
        clone: !1,
        actuator: null,
        center: !0,
        show: !0,
        modal: !1,
        fixed: !0,
        closeText: "[close]",
        unloadOnHide: !1,
        clickToFront: !1,
        behaviours: Boxy.EF,
        afterDrop: Boxy.EF,
        afterShow: Boxy.EF,
        afterHide: Boxy.EF,
        beforeUnload: Boxy.EF
    },
    DEFAULT_X: 50,
    DEFAULT_Y: 50,
    zIndex: 1337,
    dragConfigured: !1,
    resizeConfigured: !1,
    dragging: null,
    load: function (e, t) {
        t = t || {};
        var n = {
            url: e,
            type: "GET",
            dataType: "html",
            cache: !1,
            success: function (e) {
                e = jQuery(e), t.filter && (e = jQuery(t.filter, e)), new Boxy(e, t)
            }
        };
        jQuery.each(["type", "cache"], function () {
            this in t && (n[this] = t[this], delete t[this])
        }), jQuery.ajax(n)
    },
    get: function (e) {
        var t = jQuery(e).parents(".boxy-wrapper");
        return t.length ? jQuery.data(t[0], "boxy") : null
    },
    linkedTo: function (e) {
        return jQuery.data(e, "active.boxy")
    },
    alert: function (e, t, n) {
        return Boxy.ask(e, ["OK"], t, n)
    },
    confirm: function (e, t, n) {
        return Boxy.ask(e, ["OK", "Cancel"], function (e) {
            e == "OK" && t()
        }, n)
    },
    ask: function (e, t, n, r) {
        r = jQuery.extend({
            modal: !0,
            closeable: !1
        }, r || {}, {
            show: !0,
            unloadOnHide: !0
        });
        var i = jQuery("<div></div>").append(jQuery('<div class="question"></div>').html(e)),
            s = {}, o = [];
        if (t instanceof Array)
            for (var u = 0; u < t.length; u++) s[t[u]] = t[u], o.push(t[u]);
        else
            for (var a in t) s[t[a]] = a, o.push(t[a]);
        var f = jQuery('<form class="answers"></form>');
        f.html(jQuery.map(o, function (e) {
            return "<input type='button' value='" + e + "' />"
        }).join(" ")), jQuery("input[type=button]", f).click(function () {
            var e = this;
            Boxy.get(this).hide(function () {
                n && n(s[e.value])
            })
        }), i.append(f), new Boxy(i, r)
    },
    isModalVisible: function () {
        return jQuery(".boxy-modal-blackout").length > 0
    },
    _u: function () {
        for (var e = 0; e < arguments.length; e++)
            if (typeof arguments[e] != "undefined") return !1;
        return !0
    },
    _handleResize: function (e) {
        var t = jQuery(document);
        jQuery(".boxy-modal-blackout").css("display", "none").css({
            width: t.width(),
            height: t.height()
        }).css("display", "block")
    },
    _handleDrag: function (e) {
        var t;
        (t = Boxy.dragging) && t[0].boxy.css({
            left: e.pageX - t[1],
            top: e.pageY - t[2]
        })
    },
    _nextZ: function () {
        return Boxy.zIndex++
    },
    _viewport: function () {
        var e = document.documentElement,
            t = document.body,
            n = window;
        return jQuery.extend(typeof n.pageXOffset == "undefined" ? {
            left: t.scrollLeft || e.scrollLeft,
            top: t.scrollTop || e.scrollTop
        } : {
            left: n.pageXOffset,
            top: n.pageYOffset
        }, Boxy._u(n.innerWidth) ? !Boxy._u(e) && !Boxy._u(e.clientWidth) && e.clientWidth != 0 ? {
            width: e.clientWidth,
            height: e.clientHeight
        } : {
            width: t.clientWidth,
            height: t.clientHeight
        } : {
            width: n.innerWidth,
            height: n.innerHeight
        })
    }
}), Boxy.prototype = {
    estimateSize: function () {
        this.boxy.css({
            visibility: "hidden",
            display: "block"
        });
        var e = this.getSize();
        return this.boxy.css("display", "none").css("visibility", "visible"), e
    },
    getSize: function () {
        return [this.boxy.width(), this.boxy.height()]
    },
    getContentSize: function () {
        var e = this.getContent();
        return [e.width(), e.height()]
    },
    getPosition: function () {
        var e = this.boxy[0];
        return [e.offsetLeft, e.offsetTop]
    },
    getCenter: function () {
        var e = this.getPosition(),
            t = this.getSize();
        return [Math.floor(e[0] + t[0] / 2), Math.floor(e[1] + t[1] / 2)]
    },
    getInner: function () {
        return jQuery(".boxy-inner", this.boxy)
    },
    getContent: function () {
        return jQuery(".boxy-content", this.boxy)
    },
    setContent: function (e) {
        return e = jQuery(e).css({
            display: "block"
        }).addClass("boxy-content"), this.options.clone && (e = e.clone(!0)), this.getContent().remove(), this.getInner().append(e), this._setupDefaultBehaviours(e), this.options.behaviours.call(this, e), this
    },
    moveTo: function (e, t) {
        return this.moveToX(e).moveToY(t), this
    },
    moveToX: function (e) {
        return typeof e == "number" ? this.boxy.css({
            left: e
        }) : this.centerX(), this
    },
    moveToY: function (e) {
        return typeof e == "number" ? this.boxy.css({
            top: e
        }) : this.centerY(), this
    },
    centerAt: function (e, t) {
        var n = this[this.visible ? "getSize" : "estimateSize"]();
        return typeof e == "number" && this.moveToX(e - n[0] / 2), typeof t == "number" && this.moveToY(t - n[1] / 2), this
    },
    centerAtX: function (e) {
        return this.centerAt(e, null)
    },
    centerAtY: function (e) {
        return this.centerAt(null, e)
    },
    center: function (e) {
        var t = Boxy._viewport(),
            n = this.options.fixed ? [0, 0] : [t.left, t.top];
        return (!e || e == "x") && this.centerAt(n[0] + t.width / 2, null), (!e || e == "y") && this.centerAt(null, n[1] + t.height / 2), this
    },
    centerX: function () {
        return this.center("x")
    },
    centerY: function () {
        return this.center("y")
    },
    resize: function (e, t, n) {
        if (!this.visible) return;
        var r = this._getBoundsForResize(e, t);
        return this.boxy.css({
            left: r[0],
            top: r[1]
        }), this.getContent().css({
            width: r[2],
            height: r[3]
        }), n && n(this), this
    },
    tween: function (e, t, n) {
        if (!this.visible) return;
        var r = this._getBoundsForResize(e, t),
            i = this;
        return this.boxy.stop().animate({
            left: r[0],
            top: r[1]
        }), this.getContent().stop().animate({
            width: r[2],
            height: r[3]
        }, function () {
            n && n(i)
        }), this
    },
    isVisible: function () {
        return this.visible
    },
    show: function () {
        if (this.visible) return;
        if (this.options.modal) {
            var e = this;
            Boxy.resizeConfigured || (Boxy.resizeConfigured = !0, jQuery(window).resize(function () {
                Boxy._handleResize()
            })), this.modalBlackout = jQuery('<div class="boxy-modal-blackout"></div>').css({
                zIndex: Boxy._nextZ(),
                opacity: .7,
                width: jQuery(document).width(),
                height: jQuery(document).height()
            }).appendTo(document.body), this.toTop(), this.options.closeable && jQuery(document.body).on("keypress.boxy", function (t) {
                var n = t.which || t.keyCode;
                n == 27 && (e.hide(), jQuery(document.body).off("keypress.boxy"))
            })
        }
        return this.boxy.stop().css({
            opacity: 1
        }).show(), this.visible = !0, this._fire("afterShow"), this
    },
    hide: function (e) {
        if (!this.visible) return;
        var t = this;
        return this.options.modal && (jQuery(document.body).off("keypress.boxy"), this.modalBlackout.animate({
            opacity: 0
        }, function () {
            jQuery(this).remove()
        })), this.boxy.stop().animate({
            opacity: 0
        }, 300, function () {
            t.boxy.css({
                display: "none"
            }), t.visible = !1, t._fire("afterHide"), e && e(t), t.options.unloadOnHide && t.unload()
        }), this
    },
    toggle: function () {
        return this[this.visible ? "hide" : "show"](), this
    },
    hideAndUnload: function (e) {
        return this.options.unloadOnHide = !0, this.hide(e), this
    },
    unload: function () {
        this._fire("beforeUnload"), this.boxy.remove(), this.options.actuator && jQuery.data(this.options.actuator, "active.boxy", !1)
    },
    toTop: function () {
        return this.boxy.css({
            zIndex: Boxy._nextZ()
        }), this
    },
    getTitle: function () {
        return jQuery("> .title-bar h2", this.getInner()).html()
    },
    setTitle: function (e) {
        return jQuery("> .title-bar h2", this.getInner()).html(e), this
    },
    _getBoundsForResize: function (e, t) {
        var n = this.getContentSize(),
            r = [e - n[0], t - n[1]],
            i = this.getPosition();
        return [Math.max(i[0] - r[0] / 2, 0), Math.max(i[1] - r[1] / 2, 0), e, t]
    },
    _setupTitleBar: function () {
        if (this.options.title) {
            var e = this,
                t = jQuery("<div class='title-bar'></div>").html("<h2>" + this.options.title + "</h2>");
            this.options.closeable && t.append(jQuery("<a href='#' class='close'></a>").html(this.options.closeText)), this.options.draggable && (t[0].onselectstart = function () {
                return !1
            }, t[0].unselectable = "on", t[0].style.MozUserSelect = "none", Boxy.dragConfigured || (jQuery(document).mousemove(Boxy._handleDrag), Boxy.dragConfigured = !0), t.mousedown(function (t) {
                e.toTop(), Boxy.dragging = [e, t.pageX - e.boxy[0].offsetLeft, t.pageY - e.boxy[0].offsetTop], jQuery(this).addClass("dragging")
            }).mouseup(function () {
                jQuery(this).removeClass("dragging"), Boxy.dragging = null, e._fire("afterDrop")
            })), this.getInner().prepend(t), this._setupDefaultBehaviours(t)
        }
    },
    _setupDefaultBehaviours: function (e) {
        var t = this;
        this.options.clickToFront && e.click(function () {
            t.toTop()
        }), jQuery(".close", e).click(function () {
            return t.hide(), !1
        }).mousedown(function (e) {
            e.stopPropagation()
        })
    },
    _fire: function (e) {
        this.options[e].call(this)
    }
},
function () {
    var e, t, n, r, i, s;
    $(function () {
        return $("#preferred_date").placeholder()
    }), $(r = function () {
        var e, t = this;
        if ((new Date(2e3, 1)).getYear() !== 2e3) return e = new Date, $("input.order-preferred-datetime").each(function (t, n) {
            return $(n).appendDtpicker({
                dateFormat: "YYYY/MM/DD",
                locale: $("html").attr("lang"),
                current: $(n).val() ? $(n).val() : e.toString(),
                additionalLeft: $("select.date").outerWidth() + 8,
                allowPastDate: !1
            })
        })
    }), $(function () {
        return $(".participant").each(function () {
            return t(this)
        }), $(".participant_confirm").each(function () {
            return t(this)
        }), n(), $(".participant").on("change", function () {
            return $(this).val(s($(this).val())), t(this), n()
        }), new FindJPN.PaymentNotice
    }), t = function (t) {
        var n, r, i, s, o;
        return n = $(t).parents("tr").find(".item_prices"), s = $(t).val(), s === "" && (s = $(t).text()), isNaN(s) ? n.text("<Error>") : (r = $(t).parents("tr").find(".item-display-price").val(), i = $("#activity_flat").val(), i === "true" ? o = (s !== "0") * r : o = s * r, n.text(e(o)))
    }, n = function () {
        var t;
        return t = 0, $(".item_prices").each(function () {
            return t += parseInt(i($(this).text()))
        }), isNaN(t) ? $("#order_purchase_sum_price_cur").text("<Error>") : $("#order_purchase_sum_price_cur").text(e(t))
    }, e = function (e) {
        typeof e == "number" && (e = String(e));
        while (e !== (e = e.replace(/^(-?\d+)(\d{3})/, "$1,$2")));
        return e
    }, i = function (e) {
        return e.replace(/,/g, "")
    }, s = function (e) {
        return e = e.replace(/[０-９]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) - 65248)
        })
    }
}.call(this),
function () {}.call(this),
function () {
    var e;
    $(e = function () {
        return new Voyagin.UserImageUploader($(".user_cloudinary-fileupload"))
    })
}.call(this),
function () {
    $(function () {
        return $("#save_regional-setting").on("click", function () {
            return $.cookie("currency", $("#currency_regional-setting").val(), {
                path: "/"
            }), $.cookie("language", $("#language_regional-setting").val(), {
                path: "/"
            }), $("#regional-setting_before_save").hide(), $("#regional-setting_after_save").show(), setTimeout(function () {
                var e, t;
                $("#regional-setting").fadeOut(), e = $("#default_display_currency").val(), t = $("#default_display_language").val();
                if ($.cookie("currency") !== e || $.cookie("language") !== t) return location.reload()
            }, 4e3)
        })
    })
}.call(this),
function () {
    var e;
    $(e = function () {
        return $(".remote_mediator_agreement_form").on("ajax:success", function () {
            return $("#modal").hide()
        }).on("ajax:error", function () {
            return alert("We failed to save. We're very sorry but, please try again later")
        })
    })
}.call(this),
function () {
    var e, t;
    t = function (t) {
        return $(t).addClass("open").on("click", function () {
            return e(t)
        })
    }, e = function (e) {
        return $(e).removeClass("open").on("click", function () {
            return t(e)
        })
    }, $(function () {
        location.pathname === "/team" && $("#ninja_boys_btn").on("click", function (e) {
            return e.preventDefault(), $(".portrait").addClass("on")
        });
        if (location.pathname === "/faq") return location.hash === "#safe" ? t($("#safe")) : $(".block").on("click", function () {
            return t(this)
        })
    })
}.call(this),
function () {
    $(function () {
        var e, t, n;
        if (location.pathname.match("^/things_to_do/")) return t = $("#select-country_path_name"), n = t.val(), t.dropkick({
            change: function (e) {
                var t;
                t = "/things_to_do/" + e;
                if (location.pathname !== t) return $(location).attr("href", t)
            }
        }), e = $("#select-area_path_name"), e.dropkick({
            change: function (e) {
                var t;
                t = "/things_to_do/" + n, e.length && (t += "/" + e);
                if (location.pathname !== t) return $(location).attr("href", t)
            }
        })
    })
}.call(this),
function () {
    var e, t, n, r, i, s, o, u;
    o = function (e, t) {
        var n;
        return n = e.find("span.dk_label"), n.text(t)
    }, u = function (e, t, n, r) {
        var i;
        return i = $("<li>"), r && i.attr({
            "class": "dk_option_current"
        }), e.append(i.append($("<a>").attr({
            "data-dk-dropdown-value": t
        }).text(n)))
    }, t = function () {
        var e;
        return e = $("*[name=country]"), e.dropkick({
            theme: "pulldown"
        })
    }, s = function () {
        var e, t, n, r, i, s, o, a, f, l, c, h;
        e = $("#dk_container_select-country"), t = e.find("ul.dk_options_inner"), t.empty(), h = [];
        for (a in countries) i = countries[a].id, s = countries[a].name, n = 0, r = 0, ((l = acts[i]) != null ? (c = l[n]) != null ? c[r] : void 0 : void 0) != null ? (o = acts[i][n][r].length, f = "" + s + " (" + o + ")", h.push(u(t, a, f, !1))) : h.push(void 0);
        return h
    }, r = function (e) {
        var t;
        return t = "/things_to_do", t += "/" + e, $.cookie("language") && (t += "?lang=" + $.cookie("language")), t
    }, i = function () {
        var e, t, n, i;
        return e = $("#dk_container_select-country").find("li.dk_option_current").find("a"), n = e.data("dkDropdownValue"), n != null ? (i = r(n), $(location).attr("href", i)) : (t = $("#pulldown-form-error"), t.empty(), $.cookie("language") === "ja" ? t.append($("<p>").text("行き先を選んでください")) : t.append($("<p>").text("Please select a country")))
    }, n = function () {
        return $("#recently-booked").cycle({
            fx: "scrollUp",
            timeout: 5e3,
            delay: 2e3
        })
    }, e = function () {
        var e;
        if ($.cookie("viewed_activity_ids")) return e = $("#recently-viewed-list"), $.ajax({
            url: e.data("action"),
            dataType: "html"
        }).done(function (t) {
            return e.html(t), $("#recently-viewed").show()
        })
    }, $(function () {
        if (location.pathname === "/" || location.pathname.match("^/findjpn")) t(), n(), s(), e(), $("#search").click(function (e) {
            return e.preventDefault(), i()
        });
        if (location.pathname.match("^/findjpn")) return $("#close_findjpn_modal_btn").on("click", function () {
            return $("#modal").removeClass("visible")
        })
    })
}.call(this);