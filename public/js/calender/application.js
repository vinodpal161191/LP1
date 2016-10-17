
(function (d) {
    function b(l) {
        var k = d('meta[name="csrf-token"]').attr("content");
        if (k) {
            l(function (m) {
                m.setRequestHeader("X-CSRF-Token", k)
            })
        }
    }
    if (d().jquery == "1.5") {
        var e = d.ajaxSettings.xhr;
        d.ajaxSettings.xhr = function () {
            var k = e();
            b(function (l) {
                var m = k.open;
                k.open = function () {
                    m.apply(this, arguments);
                    l(this)
                }
            });
            return k
        }
    } else {
        d(document).ajaxSend(function (k, l) {
            b(function (m) {
                m(l)
            })
        })
    }
    function c(n, k, m) {
        var l = new d.Event(k);
        n.trigger(l, m);
        return l.result !== false
    }
    function j(n) {
        var p, l, o, k = n.attr("data-type") || (d.ajaxSettings && d.ajaxSettings.dataType);
        if (n.is("form")) {
            p = n.attr("method");
            l = n.attr("action");
            o = n.serializeArray();
            var m = n.data("ujs:submit-button");
            if (m) {
                o.push(m);
                n.data("ujs:submit-button", null)
            }
        } else {
            p = n.attr("data-method");
            l = n.attr("href");
            o = null
        }
        d.ajax({
            url: l,
            type: p || "GET",
            data: o,
            dataType: k,
            beforeSend: function (r, q) {
                if (q.dataType === undefined) {
                    r.setRequestHeader("accept", "*/*;q=0.5, " + q.accepts.script)
                }
                return c(n, "ajax:beforeSend", [r, q])
            },
            success: function (r, q, s) {
                n.trigger("ajax:success", [r, q, s])
            },
            complete: function (r, q) {
                n.trigger("ajax:complete", [r, q])
            },
            error: function (s, q, r) {
                n.trigger("ajax:error", [s, q, r])
            }
        })
    }
    function g(o) {
        var l = o.attr("href"),
            q = o.attr("data-method"),
            m = d("meta[name=csrf-token]").attr("content"),
            p = d("meta[name=csrf-param]").attr("content"),
            n = d('<form method="post" action="' + l + '"></form>'),
            k = '<input name="_method" value="' + q + '" type="hidden" />';
        if (p !== undefined && m !== undefined) {
            k += '<input name="' + p + '" value="' + m + '" type="hidden" />'
        }
        n.hide().append(k).appendTo("body");
        n.submit()
    }
    function h(k) {
        k.find("input[data-disable-with]").each(function () {
            var l = d(this);
            l.data("ujs:enable-with", l.val()).val(l.attr("data-disable-with")).attr("disabled", "disabled")
        })
    }
    function a(k) {
        k.find("input[data-disable-with]").each(function () {
            var l = d(this);
            l.val(l.data("ujs:enable-with")).removeAttr("disabled")
        })
    }
    function i(k) {
        var l = k.attr("data-confirm");
        return !l || (c(k, "confirm") && confirm(l))
    }
    function f(l) {
        var k = false;
        l.find("input[name][required]").each(function () {
            if (!d(this).val()) {
                k = true
            }
        });
        return k
    }
    d("a[data-confirm], a[data-method], a[data-remote]").live("click.rails", function (l) {
        var k = d(this);
        if (!i(k)) {
            return false
        }
        if (k.attr("data-remote") != undefined) {
            j(k);
            return false
        } else {
            if (k.attr("data-method")) {
                g(k);
                return false
            }
        }
    });
    d("form").live("submit.rails", function (m) {
        var k = d(this),
            l = k.attr("data-remote") != undefined;
        if (!i(k)) {
            return false
        }
        if (f(k)) {
            return !l
        }
        if (l) {
            j(k);
            return false
        } else {
            setTimeout(function () {
                h(k)
            }, 13)
        }
    });
    d("form input[type=submit], form button[type=submit], form button:not([type])").live("click.rails", function () {
        var l = d(this);
        if (!i(l)) {
            return false
        }
        var k = l.attr("name"),
            m = k ? {
                name: k,
                value: l.val()
            } : null;
        l.closest("form").data("ujs:submit-button", m)
    });
    d("form").live("ajax:beforeSend.rails", function (k) {
        if (this == k.target) {
            h(d(this))
        }
    });
    d("form").live("ajax:complete.rails", function (k) {
        if (this == k.target) {
            a(d(this))
        }
    })
})(jQuery);
(function () {
    var a;
    a = typeof exports !== "undefined" && exports !== null ? exports : this;
    a.delay = function (b, c) {
        return setTimeout(c, b)
    }
}).call(this);

function shareInit() {}
function mixpanel_track_typing(a, b) {}
function mixpanel_track_search_submit(b, c, a, d) {}
function mixpanel_track_form_validation(d, c, a, b) {}(function (f) {})(jQuery);
! function (A, G, k) {
    function j(d, f) {
        var c = G.createElement(d || "div"),
            a;
        for (a in f) {
            c[a] = f[a]
        }
        return c
    }
    function F(c) {
        for (var a = 1, d = arguments.length; a < d; a++) {
            c.appendChild(arguments[a])
        }
        return c
    }
    function z(p, I, h, a) {
        var d = ["opacity", I, ~~ (p * 100), h, a].join("-"),
            v = 0.01 + h / a * 100,
            m = Math.max(1 - (1 - p) / I * (100 - v), p),
            i = H.substring(0, H.indexOf("Animation")).toLowerCase(),
            s = i && "-" + i + "-" || "";
        return x[d] || (D.insertRule("@" + s + "keyframes " + d + "{0%{opacity:" + m + "}" + v + "%{opacity:" + p + "}" + (v + 0.01) + "%{opacity:1}" + (v + I) % 100 + "%{opacity:" + p + "}100%{opacity:" + m + "}}", D.cssRules.length), x[d] = 1), d
    }
    function w(f, c) {
        var a = f.style,
            d, h;
        if (a[c] !== k) {
            return c
        }
        c = c.charAt(0).toUpperCase() + c.slice(1);
        for (h = 0; h < b.length; h++) {
            d = b[h] + c;
            if (a[d] !== k) {
                return d
            }
        }
    }
    function C(c, a) {
        for (var d in a) {
            c.style[w(c, d) || d] = a[d]
        }
        return c
    }
    function y(f) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            for (var a in d) {
                f[a] === k && (f[a] = d[a])
            }
        }
        return f
    }
    function g(c) {
        var a = {
            x: c.offsetLeft,
            y: c.offsetTop
        };
        while (c = c.offsetParent) {
            a.x += c.offsetLeft, a.y += c.offsetTop
        }
        return a
    }
    var b = ["webkit", "Moz", "ms", "O"],
        x = {}, H, D = function () {
            var a = j("style", {
                type: "text/css"
            });
            return F(G.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
        }(),
        B = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: 0.25,
            fps: 20,
            zIndex: 2000000000,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        }, E = function q(a) {
            if (!this.spin) {
                return new q(a)
            }
            this.opts = y(a || {}, q.defaults, B)
        };
    E.defaults = {}, y(E.prototype, {
        spin: function (L) {
            this.stop();
            var Q = this,
                o = Q.opts,
                c = Q.el = C(j(0, {
                    className: o.className
                }), {
                    position: o.position,
                    width: 0,
                    zIndex: o.zIndex
                }),
                I = o.radius + o.length + o.width,
                P, N;
            L && (L.insertBefore(c, L.firstChild || null), N = g(L), P = g(c), C(c, {
                left: (o.left == "auto" ? N.x - P.x + (L.offsetWidth >> 1) : parseInt(o.left, 10) + I) + "px",
                top: (o.top == "auto" ? N.y - P.y + (L.offsetHeight >> 1) : parseInt(o.top, 10) + I) + "px"
            })), c.setAttribute("aria-role", "progressbar"), Q.lines(c, Q.opts);
            if (!H) {
                var K = 0,
                    s = o.fps,
                    J = s / o.speed,
                    M = (1 - o.opacity) / (J * o.trail / 100),
                    O = J / o.lines;
                (function p() {
                    K++;
                    for (var d = o.lines; d; d--) {
                        var a = Math.max(1 - (K + d * O) % J * M, o.opacity);
                        Q.opacity(c, o.lines - d, a, o)
                    }
                    Q.timeout = Q.el && setTimeout(p, ~~ (1000 / s))
                })()
            }
            return Q
        },
        stop: function () {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = k), this
        },
        lines: function (f, c) {
            function a(l, i) {
                return C(j(), {
                    position: "absolute",
                    width: c.length + c.width + "px",
                    height: c.width + "px",
                    background: l,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / c.lines * h + c.rotate) + "deg) translate(" + c.radius + "px,0)",
                    borderRadius: (c.corners * c.width >> 1) + "px"
                })
            }
            var h = 0,
                d;
            for (; h < c.lines; h++) {
                d = C(j(), {
                    position: "absolute",
                    top: 1 + ~(c.width / 2) + "px",
                    transform: c.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: c.opacity,
                    animation: H && z(c.opacity, c.trail, h, c.lines) + " " + 1 / c.speed + "s linear infinite"
                }), c.shadow && F(d, C(a("#000", "0 0 4px #000"), {
                    top: "2px"
                })), F(f, F(d, a(c.color, "0 0 1px rgba(0,0,0,.1)")))
            }
            return f
        },
        opacity: function (c, a, d) {
            a < c.childNodes.length && (c.childNodes[a].style.opacity = d)
        }
    }),
    function () {
        function c(f, d) {
            return j("<" + f + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', d)
        }
        var a = C(j("group"), {
            behavior: "url(#default#VML)"
        });
        !w(a, "transform") && a.adj ? (D.addRule(".spin-vml", "behavior:url(#default#VML)"), E.prototype.lines = function (I, h) {
            function J() {
                return C(c("group", {
                    coordsize: p + " " + p,
                    coordorigin: -d + " " + -d
                }), {
                    width: p,
                    height: p
                })
            }
            function m(l, f, n) {
                F(v, F(C(J(), {
                    rotation: 360 / h.lines * l + "deg",
                    left: ~~f
                }), F(C(c("roundrect", {
                    arcsize: h.corners
                }), {
                    width: d,
                    height: h.width,
                    left: h.radius,
                    top: -h.width >> 1,
                    filter: n
                }), c("fill", {
                    color: h.color,
                    opacity: h.opacity
                }), c("stroke", {
                    opacity: 0
                }))))
            }
            var d = h.length + h.width,
                p = 2 * d,
                e = -(h.width + h.length) * 2 + "px",
                v = C(J(), {
                    position: "absolute",
                    top: e,
                    left: e
                }),
                u;
            if (h.shadow) {
                for (u = 1; u <= h.lines; u++) {
                    m(u, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)")
                }
            }
            for (u = 1; u <= h.lines; u++) {
                m(u)
            }
            return F(I, v)
        }, E.prototype.opacity = function (l, f, m, h) {
            var d = l.firstChild;
            h = h.shadow && h.lines || 0, d && f + h < d.childNodes.length && (d = d.childNodes[f + h], d = d && d.firstChild, d = d && d.firstChild, d && (d.opacity = m))
        }) : H = w(a, "animation")
    }(), typeof define == "function" && define.amd ? define(function () {
        return E
    }) : A.Spinner = E
}(window, document);
! function (b) {
    var a = function (d, c) {
        this.element = b(d);
        this.remote = c.remote;
        var e = '<div class="alert alert-error alert-block text-center modal-error" style="display: none"><p>Oops, there was a problem. You should <a href="#" onclick="window.location.reload();">reload the page</a>.</p></div>';
        this.template = '<div class="modal hide fade in" aria-hidden="false"><div class="modal-header"><button aria-hidden="true" class="close" data-dismiss="modal" type="button">×</button><h3>' + c.title + '</h3></div><div class="modal-body" style="min-height: 200px; overflow:visible"><div class="modal-spinner"/>' + e + '</div><div class="modal-footer"><a aria-hidden="true" class="btngrp  form-submit" data-dismiss="modal" href="#">Close</a></div></div>'
    };
    a.prototype = {
        constructor: a,
        show: function (d) {
            this.element.html(this.template);
            var g = this.remote;
            var f = d.remoteData;
            if (f) {
                g = g + (g.indexOf("?") != -1 ? "&" : "?") + b.param(f)
            }
            if (g) {
                var c = b(this.element.children()[0]);
                var i = c.find(".modal-spinner")[0];
                var e = {
                    lines: 13,
                    length: 7,
                    width: 4,
                    radius: 10,
                    corners: 1,
                    rotate: 0,
                    color: "#666",
                    speed: 1,
                    trail: 60,
                    shadow: false,
                    top: "80px",
                    left: "245px"
                };
                var h = new Spinner(e).spin(i);
                c.modal();
                c.find(".modal-body").load(g, null, b.proxy(function (k, l, j) {
                    if (l == "error") {
                        this.find(".modal-spinner").hide();
                        this.find(".modal-error").show()
                    }
                }, c))
            }
        }
    };
    b.fn.vymodal = function (d) {
        var c = Array.apply(null, arguments);
        c.shift();
        return this.each(function () {
            var g = b(this),
                f = g.data("vymodal"),
                e = typeof d == "object" && d;
            if (!f) {
                g.data("vymodal", (f = new a(this, b.extend({}, b.fn.vymodal.defaults, e))))
            }
            if (typeof d == "string" && typeof f[d] == "function") {
                f[d].apply(f, c)
            }
        })
    };
    b.fn.vymodal.defaults = {};
    b.fn.vymodal.Constructor = a
}(window.jQuery);
var Vaya = Vaya || {};
Vaya.FlashAlerts = (function () {})();
var ConciergeRequestsNew = {};
var ReservationsNew = {};
var TripsEdit = (function () {})();
$(function () {});
