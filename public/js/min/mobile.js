var Site = {};

var i ;
(function (e) {
    e.flexslider = function (t, n) {};
    e.flexslider.defaults = {};
    e.fn.flexslider = function (t) {}
})(jQuery);
(function (e) {})(jQuery);
$.extend($.easing, {
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        s == undefined && (s = 1.70158);
        return (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    }
});
(function (e) {})(window);
(function (e) {
    "$:nomunge";
    e.fn.replaceText = function (t, n, r) {
        return this.each(function () {
            var i = this.firstChild,
                s, o, u = [];
            if (i) do if (i.nodeType === 3) {
                s = i.nodeValue;
                o = s.replace(t, n);
                if (o !== s) if (!r && /</.test(o)) {
                    e(i).before(o);
                    u.push(i)
                } else i.nodeValue = o
            }
            while (i = i.nextSibling);
            u.length && e(u).remove()
        })
    }
})(jQuery);
(function (e) {
    function f() {
        $(".flexslider").length && l();
        $(".course-landing").length && h();
        $(".course-tutors").length && p();
        $("iframe").length && d();
        $(".video-collection-area .video-holder").length && b();
        $(".photo-gallery-area").length && w();
        N();
        k()
    }
    function l() {
        var e = $(".flexslider");
        e.flexslider({
            animation: "slide",
            controlsContainer: ".flex-container",
            start: function () {
                c(e)
            }
        })
    }
    function c(e) {}
    function h() {}
    function p() {}
    function d() {}
    function v(e) {
        var t = e.target.href ? $(e.target) : $(e.target).closest("a");
        (t.hasClass("mobile-nav-toggle") || t.hasClass("mobile-overlay")) && m(e, t);
        if (t.parent().hasClass("page_item") && n.hasClass("mobile-nav-on")) {
            n.removeClass("mobile-nav-on");
            setTimeout(function () {
                n.removeClass("show-overflow")
            }, 500)
        }
        t.hasClass("youtube") && g(e, t);
        t.hasClass("back-to-top") && E(e, t);
        t.hasClass("contents-link") && S(e, t);
        t.hasClass("tutors-thumb") && x(e, t);
        t.hasClass("view-slideshow") && T(e)
    }
    function m(e, t) {
        e.preventDefault();
        if (n.hasClass("mobile-nav-on")) {
            n.removeClass("mobile-nav-on");
            setTimeout(function () {
                n.removeClass("show-overflow")
            }, 500)
        } else n.addClass("mobile-nav-on").addClass("show-overflow")
    }
    function g(e, t) {
        e.preventDefault();
        t.blur();
        var n = t.closest(".video-holder"),
            r = t.attr("href").split("watch?v=")[1],
            i = '<iframe type="text/html" src="http://www.youtube.com/embed/' + r + '?autoplay=1" frameborder="0"></iframe>';
        s.show(i)
    }
    function y(e) {
        return "http://gdata.youtube.com/feeds/api/videos/" + e + "?v=2&alt=jsonc&callback=?"
    }
    function b() {
        var e = [],
            t = $(".video-collection-area"),
            n = t.find(".video-holder");
        n.each(function (e) {
            var t = $(this),
                n = t.attr("data-youtube"),
                r = y(n),
                i, s, o;
            $.getJSON(r, function (e) {
                i = e.data.thumbnail.hqDefault;
                if (e.data.description.length > 200) {
                    s = e.data.description.substring(0, 200);
                    s += "..."
                } else s = e.data.description;
                o = "<h3>" + e.data.title + "</h3>";
                o += "<p>" + s;
                o += '<a href="http://www.youtube.com/watch?v=' + n + '" target="_blank">See on Youtube &#187;</a></p>'
            }).complete(function () {
                t.find("img").attr("src", i);
                t.append(o)
            })
        })
    }
    function w() {
        Modernizr.load([{
            load: [e.basePath + "js/libs/min/klass.min.js", e.basePath + "js/libs/min/code.photoswipe.jquery-3.0.5.min.js"],
            complete: function () {
                $(".photo-gallery-area").find("li a").photoSwipe()
            }
        }])
    }
    function E(e, n) {
        e.preventDefault();
        t.animate({
            scrollTop: 0
        }, 1e3, "easeInOutQuint", function () {
            window.location.hash = n.attr("href")
        })
    }
    function S(e, n) {
        e.preventDefault();
        var r = n.attr("href"),
            i = $(r).offset().top;
        t.animate({
            scrollTop: i
        }, 1e3, "easeInOutQuint", function () {
            window.location.hash = r
        })
    }
    function x(e, t) {
        var n = t.attr("href").split("#")[1];
        if (!$('[data-bio="' + n + '"]').length) return !1;
        e && e.preventDefault();
        $(".active-thumb").removeClass("active-thumb");
        $(".active-bio").removeClass("active-bio");
        t.addClass("active-thumb");
        $('[data-bio="' + n + '"]').addClass("active-bio");
        window.location.hash = n
    }
    function T(e) {
        e.preventDefault();
        $(".photo-gallery-area").find("ul a").filter(":first").trigger("click")
    }
    function N() {}
    function C() {
        var e = $(".mobile-nav-toggle");
        document.querySelectorAll(".mobile-overlay")[0].addEventListener("touchend", function () {
            e.trigger("click")
        }, !1)
    }
    function k() {
        $(".sub-nav").hover(function () {
            if (i.hasMobileLayout) return;
            $(this).closest(".nav-top-item.with-kids").addClass("hovered")
        }, function () {
            $(this).closest(".nav-top-item.with-kids").removeClass("hovered")
        });
        r.on("click", function (e) {
            v(e)
        });
        $(window).on("debouncedresize", function () {
            var e = i.width;
            i = new u;
            i.width > o.mobileLayout.width && e <= o.mobileLayout.width && n.hasClass("mobile-nav-on") && $(".mobile-nav-toggle").trigger("click");
            s.resize()
        });
        i.hasMobileLayout && i.touch && C()
    }
    var t, n, r, i, s, o = {
        mobileLayout: {
            width: 750
        }
    }, u = function () {
        var e = function () {
            return $(window).width()
        }(),
            t = function () {
                return $(window).height()
            }(),
            n = function () {
                return $(window).width() <= o.mobileLayout.width ? !0 : !1
            }(),
            r = function () {
                return Modernizr.touch ? !0 : !1
            }();
        return {
            width: e,
            height: t,
            hasMobileLayout: n,
            touch: r
        }
    }, a = function () {
        var e = this,
            t, r, s, o = {
                showTransitionTime: 500,
                hideTransitionTime: 300,
                screenSize: i.hasMobileLayout ? .8 : .7
            };
        this.init = function () {
            t = $(".overlay");
            r = t.find(".overlay-content-holder");
            s = r.find(".overlay-content");
            e.resize();
            e.events()
        };
        this.show = function (e) {
            n.addClass("overlay-on");
            s.html(e);
            setTimeout(function () {
                n.addClass("overlay-content-on")
            }, o.showTransitionTime)
        };
        this.hide = function () {
            n.removeClass("overlay-content-on");
            setTimeout(function () {
                n.removeClass("overlay-on");
                s.empty()
            }, o.hideTransitionTime)
        };
        this.resize = function () {
            var e = i.width * o.screenSize,
                t = i.height * o.screenSize,
                n = (i.height - t) / 2,
                s = (i.width - e) / 2;
            r.css("width", e).css("height", t).css("top", n).css("left", s)
        };
        this.events = function () {
            $(".overlay-close-btn").on("click", function (t) {
                t.preventDefault();
                e.hide()
            });
            t.on("click", function (t) {
                t.target == this && e.hide()
            });
            $(window).on("keydown", function (t) {
                t.keyCode === 27 && e.hide()
            })
        };
        this.init()
    };
    $(function () {
        t = $("body, html");
        n = $("html").filter(":first");
        r = n.find(".wrapper");
        i = new u;
        s = new a;
        f()
    })
})(Site);

