
! function (a) {
    a(function () {
        a.support.transition = (function () {
            var c = document.body || document.documentElement,
                d = c.style,
                b = d.transition !== undefined || d.WebkitTransition !== undefined || d.MozTransition !== undefined || d.MsTransition !== undefined || d.OTransition !== undefined;
            return b && {
                end: (function () {
                    var e = "TransitionEnd";
                    if (a.browser.webkit) {
                        e = "webkitTransitionEnd"
                    } else {
                        if (a.browser.mozilla) {
                            e = "transitionend"
                        } else {
                            if (a.browser.opera) {
                                e = "oTransitionEnd"
                            }
                        }
                    }
                    return e
                }())
            }
        })()
    })
}(window.jQuery);
! function (c) {
    var b = '[data-dismiss="alert"]',
        a = function (d) {
            c(d).on("click", b, this.close)
        };
    a.prototype = {
        constructor: a,
        close: function (i) {
            var h = c(this),
                f = h.attr("data-target"),
                g;
            if (!f) {
                f = h.attr("href");
                f = f && f.replace(/.*(?=#[^\s]*$)/, "")
            }
            g = c(f);
            g.trigger("close");
            i && i.preventDefault();
            g.length || (g = h.hasClass("alert") ? h : h.parent());
            g.trigger("close").removeClass("in");

            function d() {
                g.trigger("closed").remove()
            }
            c.support.transition && g.hasClass("fade") ? g.on(c.support.transition.end, d) : d()
        }
    };
    c.fn.alert = function (d) {
        return this.each(function () {
            var f = c(this),
                e = f.data("alert");
            if (!e) {
                f.data("alert", (e = new a(this)))
            }
            if (typeof d == "string") {
                e[d].call(f)
            }
        })
    };
    c.fn.alert.Constructor = a;
    c(function () {
        c("body").on("click.alert.data-api", b, a.prototype.close)
    })
}(window.jQuery);
! function (b) {
    var a = function (d, c) {
        this.$element = b(d);
        this.options = b.extend({}, b.fn.button.defaults, c)
    };
    a.prototype = {
        constructor: a,
        setState: function (f) {
            var h = "disabled",
                c = this.$element,
                e = c.data(),
                g = c.is("input") ? "val" : "html";
            f = f + "Text";
            e.resetText || c.data("resetText", c[g]());
            c[g](e[f] || this.options[f]);
            setTimeout(function () {
                f == "loadingText" ? c.addClass(h).attr(h, h) : c.removeClass(h).removeAttr(h)
            }, 0)
        },
        toggle: function () {
            var c = this.$element.parent('[data-toggle="buttons-radio"]');
            c && c.find(".active").removeClass("active");
            this.$element.toggleClass("active")
        }
    };
    b.fn.button = function (c) {
        return this.each(function () {
            var f = b(this),
                e = f.data("button"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("button", (e = new a(this, d)))
            }
            if (c == "toggle") {
                e.toggle()
            } else {
                if (c) {
                    e.setState(c)
                }
            }
        })
    };
    b.fn.button.defaults = {
        loadingText: "loading..."
    };
    b.fn.button.Constructor = a;
    b(function () {
        b("body").on("click.button.data-api", "[data-toggle^=button]", function (d) {
            var c = b(d.target);
            if (!c.hasClass("btn")) {
                c = c.closest(".btn")
            }
            c.button("toggle")
        })
    })
}(window.jQuery);
! function (a) {
    var b = function (d, c) {
        this.$element = a(d);
        this.options = a.extend({}, a.fn.carousel.defaults, c);
        this.options.slide && this.slide(this.options.slide);
        this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.prototype = {
        cycle: function () {
            this.interval = setInterval(a.proxy(this.next, this), this.options.interval);
            return this
        },
        to: function (g) {
            var c = this.$element.find(".active"),
                d = c.parent().children(),
                e = d.index(c),
                f = this;
            if (g > (d.length - 1) || g < 0) {
                return
            }
            if (this.sliding) {
                return this.$element.one("slid", function () {
                    f.to(g)
                })
            }
            if (e == g) {
                return this.pause().cycle()
            }
            return this.slide(g > e ? "next" : "prev", a(d[g]))
        },
        pause: function () {
            clearInterval(this.interval);
            this.interval = null;
            return this
        },
        next: function () {
            if (this.sliding) {
                return
            }
            return this.slide("next")
        },
        prev: function () {
            if (this.sliding) {
                return
            }
            return this.slide("prev")
        },
        slide: function (f, e) {
            var c = this.$element.find(".active"),
                d = e || c[f](),
                j = this.interval,
                h = f == "next" ? "left" : "right",
                i = f == "next" ? "first" : "last",
                g = this;
            this.sliding = true;
            j && this.pause();
            d = d.length ? d : this.$element.find(".item")[i]();
            if (d.hasClass("active")) {
                return
            }
            if (!a.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger("slide");
                c.removeClass("active");
                d.addClass("active");
                this.sliding = false;
                this.$element.trigger("slid")
            } else {
                d.addClass(f);
                d[0].offsetWidth;
                c.addClass(h);
                d.addClass(h);
                this.$element.trigger("slide");
                this.$element.one(a.support.transition.end, function () {
                    d.removeClass([f, h].join(" ")).addClass("active");
                    c.removeClass(["active", h].join(" "));
                    g.sliding = false;
                    setTimeout(function () {
                        g.$element.trigger("slid")
                    }, 0)
                })
            }
            j && this.cycle();
            return this
        }
    };
    a.fn.carousel = function (c) {
        return this.each(function () {
            var f = a(this),
                e = f.data("carousel"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("carousel", (e = new b(this, d)))
            }
            if (typeof c == "number") {
                e.to(c)
            } else {
                if (typeof c == "string" || (c = d.slide)) {
                    e[c]()
                } else {
                    e.cycle()
                }
            }
        })
    };
    a.fn.carousel.defaults = {
        interval: 5000,
        pause: "hover"
    };
    a.fn.carousel.Constructor = b;
    a(function () {
        a("body").on("click.carousel.data-api", "[data-slide]", function (h) {
            var g = a(this),
                d, c = a(g.attr("data-target") || (d = g.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
                f = !c.data("modal") && a.extend({}, c.data(), g.data());
            c.carousel(f);
            h.preventDefault()
        })
    })
}(window.jQuery);
! function (a) {
    var b = function (d, c) {
        this.$element = a(d);
        this.options = a.extend({}, a.fn.collapse.defaults, c);
        if (this.options.parent) {
            this.$parent = a(this.options.parent)
        }
        this.options.toggle && this.toggle()
    };
    b.prototype = {
        constructor: b,
        dimension: function () {
            var c = this.$element.hasClass("width");
            return c ? "width" : "height"
        },
        show: function () {
            var f = this.dimension(),
                c = a.camelCase(["scroll", f].join("-")),
                e = this.$parent && this.$parent.find(".in"),
                d;
            if (e && e.length) {
                d = e.data("collapse");
                e.collapse("hide");
                d || e.data("collapse", null)
            }
            this.$element[f](0);
            this.transition("addClass", "show", "shown");
            this.$element[f](this.$element[0][c])
        },
        hide: function () {
            var c = this.dimension();
            this.reset(this.$element[c]());
            this.transition("removeClass", "hide", "hidden");
            this.$element[c](0)
        },
        reset: function (c) {
            var d = this.dimension();
            this.$element.removeClass("collapse")[d](c || "auto")[0].offsetWidth;
            this.$element[c ? "addClass" : "removeClass"]("collapse");
            return this
        },
        transition: function (g, d, e) {
            var f = this,
                c = function () {
                    if (d == "show") {
                        f.reset()
                    }
                    f.$element.trigger(e)
                };
            this.$element.trigger(d)[g]("in");
            a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, c) : c()
        },
        toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    a.fn.collapse = function (c) {
        return this.each(function () {
            var f = a(this),
                e = f.data("collapse"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("collapse", (e = new b(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    a.fn.collapse.defaults = {
        toggle: true
    };
    a.fn.collapse.Constructor = b;
    a(function () {
        a("body").on("click.collapse.data-api", "[data-toggle=collapse]", function (h) {
            var g = a(this),
                c, f = g.attr("data-target") || h.preventDefault() || (c = g.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
                d = a(f).data("collapse") ? "toggle" : g.data();
            a(f).collapse(d)
        })
    })
}(window.jQuery);
! function (d) {
    var b = '[data-toggle="dropdown"]',
        a = function (f) {
            var e = d(f).on("click.dropdown.data-api", this.toggle);
            d("html").on("click.dropdown.data-api", function () {
                e.parent().removeClass("open")
            })
        };
    a.prototype = {
        constructor: a,
        toggle: function (j) {
            var i = d(this),
                f = i.attr("data-target"),
                h, g;
            if (!f) {
                f = i.attr("href");
                f = f && f.replace(/.*(?=#[^\s]*$)/, "")
            }
            h = d(f);
            h.length || (h = i.parent());
            g = h.hasClass("open");
            c();
            !g && h.toggleClass("open");
            return false
        }
    };

    function c() {
        d(b).parent().removeClass("open")
    }
    d.fn.dropdown = function (e) {
        return this.each(function () {
            var g = d(this),
                f = g.data("dropdown");
            if (!f) {
                g.data("dropdown", (f = new a(this)))
            }
            if (typeof e == "string") {
                f[e].call(g)
            }
        })
    };
    d.fn.dropdown.Constructor = a;
    d(function () {
        d("html").on("click.dropdown.data-api", c);
        d("body").on("click.dropdown.data-api", b, a.prototype.toggle)
    })
}(window.jQuery);
! function (c) {
    var b = function (e, d) {
        this.options = d;
        this.$element = c(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", c.proxy(this.hide, this));
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    b.prototype = {
        constructor: b,
        toggle: function () {
            return this[!this.isShown ? "show" : "hide"]()
        },
        show: function () {
            var d = this,
                f = c.Event("show");
            this.$element.trigger(f);
            if (this.isShown || f.isDefaultPrevented()) {
                return
            }
            this.isShown = true;
            this.escape();
            this.backdrop(function () {
                var e = c.support.transition && d.$element.hasClass("fade");
                if (!d.$element.parent().length) {
                    d.$element.appendTo(document.body)
                }
                d.$element.show();
                if (e) {
                    d.$element[0].offsetWidth
                }
                d.$element.addClass("in").attr("aria-hidden", false);
                d.enforceFocus();
                e ? d.$element.one(c.support.transition.end, function () {
                    d.$element.focus().trigger("shown")
                }) : d.$element.focus().trigger("shown")
            })
        },
        hide: function (f) {
            f && f.preventDefault();
            var d = this;
            f = c.Event("hide");
            this.$element.trigger(f);
            if (!this.isShown || f.isDefaultPrevented()) {
                return
            }
            this.isShown = false;
            this.escape();
            c(document).off("focusin.modal");
            this.$element.removeClass("in").attr("aria-hidden", true);
            c.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        },
        enforceFocus: function () {
            var d = this;
            c(document).on("focusin.modal", function (f) {
                if (d.$element[0] !== f.target && !d.$element.has(f.target).length) {
                    d.$element.focus()
                }
            })
        },
        escape: function () {
            var d = this;
            if (this.isShown && this.options.keyboard) {
                this.$element.on("keyup.dismiss.modal", function (f) {
                    f.which == 27 && d.hide()
                })
            } else {
                if (!this.isShown) {
                    this.$element.off("keyup.dismiss.modal")
                }
            }
        },
        hideWithTransition: function () {
            var d = this,
                e = setTimeout(function () {
                    d.$element.off(c.support.transition.end);
                    d.hideModal()
                }, 500);
            this.$element.one(c.support.transition.end, function () {
                clearTimeout(e);
                d.hideModal()
            })
        },
        hideModal: function (d) {
            this.$element.hide().trigger("hidden");
            this.backdrop()
        },
        removeBackdrop: function () {
            this.$backdrop.remove();
            this.$backdrop = null
        },
        backdrop: function (g) {
            var f = this,
                e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var d = c.support.transition && e;
                this.$backdrop = c('<div class="modal-backdrop ' + e + '" />').appendTo(document.body);
                this.$backdrop.click(this.options.backdrop == "static" ? c.proxy(this.$element[0].focus, this.$element[0]) : c.proxy(this.hide, this));
                if (d) {
                    this.$backdrop[0].offsetWidth
                }
                this.$backdrop.addClass("in");
                d ? this.$backdrop.one(c.support.transition.end, g) : g()
            } else {
                if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    c.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(c.support.transition.end, c.proxy(this.removeBackdrop, this)) : this.removeBackdrop()
                } else {
                    if (g) {
                        g()
                    }
                }
            }
        }
    };
    var a = c.fn.modal;
    c.fn.modal = function (d) {
        return this.each(function () {
            var g = c(this),
                f = g.data("modal"),
                e = c.extend({}, c.fn.modal.defaults, g.data(), typeof d == "object" && d);
            if (!f) {
                g.data("modal", (f = new b(this, e)))
            }
            if (typeof d == "string") {
                f[d]()
            } else {
                if (e.show) {
                    f.show()
                }
            }
        })
    };
    c.fn.modal.defaults = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    c.fn.modal.Constructor = b;
    c.fn.modal.noConflict = function () {
        c.fn.modal = a;
        return this
    };
    c(document).on("click.modal.data-api", '[data-toggle="modal"]', function (i) {
        var h = c(this),
            f = h.attr("href"),
            d = c(h.attr("data-target") || (f && f.replace(/.*(?=#[^\s]+$)/, ""))),
            g = d.data("modal") ? "toggle" : c.extend({
                remote: !/#/.test(f) && f
            }, d.data(), h.data());
        i.preventDefault();
        d.modal(g).one("hide", function () {
            h.focus()
        })
    })
}(window.jQuery);
! function (b) {
    var a = function (d, c) {
        this.init("tooltip", d, c)
    };
    a.prototype = {
        constructor: a,
        init: function (f, e, d) {
            var g, c;
            this.type = f;
            this.$element = b(e);
            this.options = this.getOptions(d);
            this.enabled = true;
            if (this.options.trigger != "manual") {
                g = this.options.trigger == "hover" ? "mouseenter" : "focus";
                c = this.options.trigger == "hover" ? "mouseleave" : "blur";
                this.$element.on(g, this.options.selector, b.proxy(this.enter, this));
                this.$element.on(c, this.options.selector, b.proxy(this.leave, this))
            }
            this.options.selector ? (this._options = b.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            })) : this.fixTitle()
        },
        getOptions: function (c) {
            c = b.extend({}, b.fn[this.type].defaults, c, this.$element.data());
            if (c.delay && typeof c.delay == "number") {
                c.delay = {
                    show: c.delay,
                    hide: c.delay
                }
            }
            return c
        },
        enter: function (d) {
            var c = b(d.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.show) {
                c.show()
            } else {
                c.hoverState = "in";
                setTimeout(function () {
                    if (c.hoverState == "in") {
                        c.show()
                    }
                }, c.options.delay.show)
            }
        },
        leave: function (d) {
            var c = b(d.currentTarget)[this.type](this._options).data(this.type);
            if (!c.options.delay || !c.options.delay.hide) {
                c.hide()
            } else {
                c.hoverState = "out";
                setTimeout(function () {
                    if (c.hoverState == "out") {
                        c.hide()
                    }
                }, c.options.delay.hide)
            }
        },
        show: function () {
            var g, c, i, e, h, d, f;
            if (this.hasContent() && this.enabled) {
                g = this.tip();
                this.setContent();
                if (this.options.animation) {
                    g.addClass("fade")
                }
                d = typeof this.options.placement == "function" ? this.options.placement.call(this, g[0], this.$element[0]) : this.options.placement;
                c = /in/.test(d);
                g.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).appendTo(c ? this.$element : document.body);
                i = this.getPosition(c);
                e = g[0].offsetWidth;
                h = g[0].offsetHeight;
                switch (c ? d.split(" ")[1] : d) {
                    case "bottom":
                        f = {
                            top: i.top + i.height,
                            left: i.left + i.width / 2 - e / 2
                        };
                        break;
                    case "top":
                        f = {
                            top: i.top - h,
                            left: i.left + i.width / 2 - e / 2
                        };
                        break;
                    case "left":
                        f = {
                            top: i.top + i.height / 2 - h / 2,
                            left: i.left - e
                        };
                        break;
                    case "right":
                        f = {
                            top: i.top + i.height / 2 - h / 2,
                            left: i.left + i.width
                        };
                        break
                }
                g.css(f).addClass(d).addClass("in")
            }
        },
        setContent: function () {
            var c = this.tip();
            c.find(".tooltip-inner").html(this.getTitle());
            c.removeClass("fade in top bottom left right")
        },
        hide: function () {
            var c = this,
                d = this.tip();
            d.removeClass("in");

            function e() {
                var f = setTimeout(function () {
                    d.off(b.support.transition.end).remove()
                }, 500);
                d.one(b.support.transition.end, function () {
                    clearTimeout(f);
                    d.remove()
                })
            }
            b.support.transition && this.$tip.hasClass("fade") ? e() : d.remove()
        },
        fixTitle: function () {
            var c = this.$element;
            if (c.attr("title") || typeof (c.attr("data-original-title")) != "string") {
                c.attr("data-original-title", c.attr("title") || "").removeAttr("title")
            }
        },
        hasContent: function () {
            return this.getTitle()
        },
        getPosition: function (c) {
            return b.extend({}, (c ? {
                top: 0,
                left: 0
            } : this.$element.offset()), {
                width: this.$element[0].offsetWidth,
                height: this.$element[0].offsetHeight
            })
        },
        getTitle: function () {
            var e, c = this.$element,
                d = this.options;
            e = c.attr("data-original-title") || (typeof d.title == "function" ? d.title.call(c[0]) : d.title);
            e = (e || "").toString().replace(/(^\s*|\s*$)/, "");
            return e
        },
        tip: function () {
            return this.$tip = this.$tip || b(this.options.template)
        },
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null
            }
        },
        enable: function () {
            this.enabled = true
        },
        disable: function () {
            this.enabled = false
        },
        toggleEnabled: function () {
            this.enabled = !this.enabled
        },
        toggle: function () {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    };
    b.fn.tooltip = function (c) {
        return this.each(function () {
            var f = b(this),
                e = f.data("tooltip"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("tooltip", (e = new a(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    b.fn.tooltip.Constructor = a;
    b.fn.tooltip.defaults = {
        animation: true,
        delay: 0,
        selector: false,
        placement: "top",
        trigger: "hover",
        title: "",
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
    }
}(window.jQuery);
! function (b) {
    var a = function (d, c) {
        this.init("popover", d, c)
    };
    a.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype, {
        constructor: a,
        setContent: function () {
            var e = this.tip(),
                d = this.getTitle(),
                c = this.getContent();
            e.find(".popover-title")[b.type(d) == "object" ? "append" : "html"](d);
            e.find(".popover-content > *")[b.type(c) == "object" ? "append" : "html"](c);
            e.removeClass("fade top bottom left right in")
        },
        hasContent: function () {
            return this.getTitle() || this.getContent()
        },
        getContent: function () {
            var d, c = this.$element,
                e = this.options;
            d = c.attr("data-content") || (typeof e.content == "function" ? e.content.call(c[0]) : e.content);
            d = d.toString().replace(/(^\s*|\s*$)/, "");
            return d
        },
        tip: function () {
            if (!this.$tip) {
                this.$tip = b(this.options.template)
            }
            return this.$tip
        }
    });
    b.fn.popover = function (c) {
        return this.each(function () {
            var f = b(this),
                e = f.data("popover"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("popover", (e = new a(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    b.fn.popover.Constructor = a;
    b.fn.popover.defaults = b.extend({}, b.fn.tooltip.defaults, {
        placement: "right",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
    })
}(window.jQuery);
! function (b) {
    function a(f, e) {
        var g = b.proxy(this.process, this),
            c = b(f).is("body") ? b(window) : b(f),
            d;
        this.options = b.extend({}, b.fn.scrollspy.defaults, e);
        this.$scrollElement = c.on("scroll.scroll.data-api", g);
        this.selector = (this.options.target || ((d = b(f).attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")) || "") + " .nav li > a";
        this.$body = b("body").on("click.scroll.data-api", this.selector, g);
        this.refresh();
        this.process()
    }
    a.prototype = {
        constructor: a,
        refresh: function () {
            this.targets = this.$body.find(this.selector).map(function () {
                var c = b(this).attr("href");
                return /^#\w/.test(c) && b(c).length ? c : null
            });
            this.offsets = b.map(this.targets, function (c) {
                return b(c).position().top
            })
        },
        process: function () {
            var f = this.$scrollElement.scrollTop() + this.options.offset,
                e = this.offsets,
                c = this.targets,
                g = this.activeTarget,
                d;
            for (d = e.length; d--;) {
                g != c[d] && f >= e[d] && (!e[d + 1] || f <= e[d + 1]) && this.activate(c[d])
            }
        },
        activate: function (d) {
            var c;
            this.activeTarget = d;
            this.$body.find(this.selector).parent(".active").removeClass("active");
            c = this.$body.find(this.selector + '[href="' + d + '"]').parent("li").addClass("active");
            if (c.parent(".dropdown-menu")) {
                c.closest("li.dropdown").addClass("active")
            }
        }
    };
    b.fn.scrollspy = function (c) {
        return this.each(function () {
            var f = b(this),
                e = f.data("scrollspy"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("scrollspy", (e = new a(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    b.fn.scrollspy.Constructor = a;
    b.fn.scrollspy.defaults = {
        offset: 10
    };
    b(function () {
        b('[data-spy="scroll"]').each(function () {
            var c = b(this);
            c.scrollspy(c.data())
        })
    })
}(window.jQuery);
! function (b) {
    var a = function (c) {
        this.element = b(c)
    };
    a.prototype = {
        constructor: a,
        show: function () {
            var g = this.element,
                e = g.closest("ul:not(.dropdown-menu)"),
                d = g.attr("data-target"),
                f, c;
            if (!d) {
                d = g.attr("href");
                d = d && d.replace(/.*(?=#[^\s]*$)/, "")
            }
            if (g.parent("li").hasClass("active")) {
                return
            }
            f = e.find(".active a").last()[0];
            g.trigger({
                type: "show",
                relatedTarget: f
            });
            c = b(d);
            this.activate(g.parent("li"), e);
            this.activate(c, c.parent(), function () {
                g.trigger({
                    type: "shown",
                    relatedTarget: f
                })
            })
        },
        activate: function (e, d, h) {
            var c = d.find("> .active"),
                g = h && b.support.transition && c.hasClass("fade");

            function f() {
                c.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
                e.addClass("active");
                if (g) {
                    e[0].offsetWidth;
                    e.addClass("in")
                } else {
                    e.removeClass("fade")
                }
                if (e.parent(".dropdown-menu")) {
                    e.closest("li.dropdown").addClass("active")
                }
                h && h()
            }
            g ? c.one(b.support.transition.end, f) : f();
            c.removeClass("in")
        }
    };
    b.fn.tab = function (c) {
        return this.each(function () {
            var e = b(this),
                d = e.data("tab");
            if (!d) {
                e.data("tab", (d = new a(this)))
            }
            if (typeof c == "string") {
                d[c]()
            }
        })
    };
    b.fn.tab.Constructor = a;
    b(function () {
        b("body").on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (c) {
            c.preventDefault();
            b(this).tab("show")
        })
    })
}(window.jQuery);
! function (a) {
    var b = function (d, c) {
        this.$element = a(d);
        this.options = a.extend({}, a.fn.typeahead.defaults, c);
        this.matcher = this.options.matcher || this.matcher;
        this.sorter = this.options.sorter || this.sorter;
        this.highlighter = this.options.highlighter || this.highlighter;
        this.$menu = a(this.options.menu).appendTo("body");
        this.source = this.options.source;
        this.shown = false;
        this.listen()
    };
    b.prototype = {
        constructor: b,
        select: function () {
            var c = this.$menu.find(".active").attr("data-value");
            this.$element.val(c);
            this.$element.change();
            return this.hide()
        },
        show: function () {
            var c = a.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });
            this.$menu.css({
                top: c.top + c.height,
                left: c.left
            });
            this.$menu.show();
            this.shown = true;
            return this
        },
        hide: function () {
            this.$menu.hide();
            this.shown = false;
            return this
        },
        lookup: function (e) {
            var d = this,
                c, f;
            this.query = this.$element.val();
            if (!this.query) {
                return this.shown ? this.hide() : this
            }
            c = a.grep(this.source, function (g) {
                if (d.matcher(g)) {
                    return g
                }
            });
            c = this.sorter(c);
            if (!c.length) {
                return this.shown ? this.hide() : this
            }
            return this.render(c.slice(0, this.options.items)).show()
        },
        matcher: function (c) {
            return~ c.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function (e) {
            var f = [],
                d = [],
                c = [],
                g;
            while (g = e.shift()) {
                if (!g.toLowerCase().indexOf(this.query.toLowerCase())) {
                    f.push(g)
                } else {
                    if (~g.indexOf(this.query)) {
                        d.push(g)
                    } else {
                        c.push(g)
                    }
                }
            }
            return f.concat(d, c)
        },
        highlighter: function (c) {
            return c.replace(new RegExp("(" + this.query + ")", "ig"), function (d, e) {
                return "<strong>" + e + "</strong>"
            })
        },
        render: function (c) {
            var d = this;
            c = a(c).map(function (e, f) {
                e = a(d.options.item).attr("data-value", f);
                e.find("a").html(d.highlighter(f));
                return e[0]
            });
            c.first().addClass("active");
            this.$menu.html(c);
            return this
        },
        next: function (d) {
            var e = this.$menu.find(".active").removeClass("active"),
                c = e.next();
            if (!c.length) {
                c = a(this.$menu.find("li")[0])
            }
            c.addClass("active")
        },
        prev: function (d) {
            var e = this.$menu.find(".active").removeClass("active"),
                c = e.prev();
            if (!c.length) {
                c = this.$menu.find("li").last()
            }
            c.addClass("active")
        },
        listen: function () {
            this.$element.on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this));
            if (a.browser.webkit || a.browser.msie) {
                this.$element.on("keydown", a.proxy(this.keypress, this))
            }
            this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this))
        },
        keyup: function (c) {
            switch (c.keyCode) {
                case 40:
                case 38:
                    break;
                case 9:
                case 13:
                    if (!this.shown) {
                        return
                    }
                    this.select();
                    break;
                case 27:
                    if (!this.shown) {
                        return
                    }
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            c.stopPropagation();
            c.preventDefault()
        },
        keypress: function (c) {
            if (!this.shown) {
                return
            }
            switch (c.keyCode) {
                case 9:
                case 13:
                case 27:
                    c.preventDefault();
                    break;
                case 38:
                    c.preventDefault();
                    this.prev();
                    break;
                case 40:
                    c.preventDefault();
                    this.next();
                    break
            }
            c.stopPropagation()
        },
        blur: function (d) {
            var c = this;
            setTimeout(function () {
                c.hide()
            }, 150)
        },
        click: function (c) {
            c.stopPropagation();
            c.preventDefault();
            this.select()
        },
        mouseenter: function (c) {
            this.$menu.find(".active").removeClass("active");
            a(c.currentTarget).addClass("active")
        }
    };
    a.fn.typeahead = function (c) {
        return this.each(function () {
            var f = a(this),
                e = f.data("typeahead"),
                d = typeof c == "object" && c;
            if (!e) {
                f.data("typeahead", (e = new b(this, d)))
            }
            if (typeof c == "string") {
                e[c]()
            }
        })
    };
    a.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>'
    };
    a.fn.typeahead.Constructor = b;
    a(function () {
        a("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (d) {
            var c = a(this);
            if (c.data("typeahead")) {
                return
            }
            d.preventDefault();
            c.typeahead(c.data())
        })
    })
}(window.jQuery);