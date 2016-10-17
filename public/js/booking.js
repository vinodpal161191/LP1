
(function (e) {})(jQuery),
function (e) {}(jQuery),
function (e, t, n) {}(this, document, jQuery),
function (e) {}(jQuery),
function ($) {}(jQuery),
function (e) {}(jQuery),

function () {}(),
function (e) {}(jQuery),
function (e) {}(jQuery), jQuery(function (e) {}),
function () {
    var e, t, n, r, i;
    $(function () {}), $(function () {}), $(function () {}), i = function () {
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
    }), $(function () {}), $(function () {}), $(e = function () {
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
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this), $(function () {
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
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
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
function () {}.call(this),
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
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this), $(document).ready(function () {
    $(".over").fadeTo(1, 1).hover(function () {
        $(this).fadeTo(100, .6)
    }, function () {
        $(this).fadeTo(400, 1)
    })
}),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),

function () {
    var e, t, n, r, i, s;
    $(function () {}), $(r = function () {}), $(function () {
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
function () {}.call(this),
function () {}.call(this),
function () {}.call(this),
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
function () {}.call(this);