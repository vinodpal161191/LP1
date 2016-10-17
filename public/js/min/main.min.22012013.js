var Site = {};

var i ;
(function (e) {
    e.flexslider = function (t, n) {
        var r = e(t),
            i = e.extend({}, e.flexslider.defaults, n),
            s = i.namespace,
            o = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            u = o ? "touchend" : "click",
            a = i.direction === "vertical",
            f = i.reverse,
            l = i.itemWidth > 0,
            c = i.animation === "fade",
            h = i.asNavFor !== "",
            p = {};
        e.data(t, "flexslider", r);
        p = {
            init: function () {
                r.animating = !1;
                r.currentSlide = i.startAt;
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = i.selector.substr(0, i.selector.search(" "));
                r.slides = e(i.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(i.sync).length > 0;
                i.animation === "slide" && (i.animation = "swing");
                r.prop = a ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.transitions = !i.video && !c && i.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t) if (e.style[t[n]] !== undefined) {
                        r.pfx = t[n].replace("Perspective", "").toLowerCase();
                        r.prop = "-" + r.pfx + "-transform";
                        return !0
                    }
                    return !1
                }();
                i.controlsContainer !== "" && (r.controlsContainer = e(i.controlsContainer).length > 0 && e(i.controlsContainer));
                i.manualControls !== "" && (r.manualControls = e(i.manualControls).length > 0 && e(i.manualControls));
                if (i.randomize) {
                    r.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                h && p.asNav.setup();
                r.setup("init");
                i.controlNav && p.controlNav.setup();
                i.directionNav && p.directionNav.setup();
                i.keyboard && (e(r.containerSelector).length === 1 || i.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, i.pauseOnAction)
                    }
                });
                i.mousewheel && r.bind("mousewheel", function (e, t, n, s) {
                    e.preventDefault();
                    var o = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(o, i.pauseOnAction)
                });
                i.pausePlay && p.pausePlay.setup();
                if (i.slideshow) {
                    i.pauseOnHover && r.hover(function () {
                        !r.manualPlay && !r.manualPause && r.pause()
                    }, function () {
                        !r.manualPause && !r.manualPlay && r.play()
                    });
                    i.initDelay > 0 ? setTimeout(r.play, i.initDelay) : r.play()
                }
                o && i.touch && p.touch();
                (!c || c && i.smoothHeight) && e(window).bind("resize focus", p.resize);
                setTimeout(function () {
                    i.start(r)
                }, 200)
            },
            asNav: {
                setup: function () {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(s + "active-slide").eq(r.currentItem).addClass(s + "active-slide");
                    r.slides.click(function (t) {
                        t.preventDefault();
                        var n = e(this),
                            s = n.index();
                        if (!e(i.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                            r.direction = r.currentItem < s ? "next" : "prev";
                            r.flexAnimate(s, i.pauseOnAction, !1, !0, !0)
                        }
                    })
                }
            },
            controlNav: {
                setup: function () {
                    r.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var t = i.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        n = 1,
                        a;
                    r.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + t + '"></ol>');
                    if (r.pagingCount > 1) for (var f = 0; f < r.pagingCount; f++) {
                        a = i.controlNav === "thumbnails" ? '<img src="' + r.slides.eq(f).attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
                        r.controlNavScaffold.append("<li>" + a + "</li>");
                        n++
                    }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    p.controlNav.set();
                    p.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            o = r.controlNav.index(n);
                        if (!n.hasClass(s + "active")) {
                            r.direction = o > r.currentSlide ? "next" : "prev";
                            r.flexAnimate(o, i.pauseOnAction)
                        }
                    });
                    o && r.controlNavScaffold.delegate("a", "click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                setupManual: function () {
                    r.controlNav = r.manualControls;
                    p.controlNav.active();
                    r.controlNav.live(u, function (t) {
                        t.preventDefault();
                        var n = e(this),
                            o = r.controlNav.index(n);
                        if (!n.hasClass(s + "active")) {
                            o > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                            r.flexAnimate(o, i.pauseOnAction)
                        }
                    });
                    o && r.controlNav.live("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                set: function () {
                    var t = i.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = e("." + s + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function () {
                    r.controlNav.removeClass(s + "active").eq(r.animatingTo).addClass(s + "active")
                },
                update: function (t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    p.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : p.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + i.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + i.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + s + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + s + "direction-nav li a", r)
                    }
                    p.directionNav.update();
                    r.directionNav.bind(u, function (t) {
                        t.preventDefault();
                        var n = e(this).hasClass(s + "next") ? r.getTarget("next") : r.getTarget("prev");
                        r.flexAnimate(n, i.pauseOnAction)
                    });
                    o && r.directionNav.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function () {
                    var e = s + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e) : i.animationLoop ? r.directionNav.removeClass(e) : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + s + "prev").addClass(e) : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + s + "next").addClass(e) : r.directionNav.removeClass(e)
                }
            },
            pausePlay: {
                setup: function () {
                    var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + s + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + s + "pauseplay a", r)
                    }
                    p.pausePlay.update(i.slideshow ? s + "pause" : s + "play");
                    r.pausePlay.bind(u, function (t) {
                        t.preventDefault();
                        if (e(this).hasClass(s + "pause")) {
                            r.manualPause = !0;
                            r.manualPlay = !1;
                            r.pause()
                        } else {
                            r.manualPause = !1;
                            r.manualPlay = !0;
                            r.play()
                        }
                    });
                    o && r.pausePlay.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                },
                update: function (e) {
                    e === "play" ? r.pausePlay.removeClass(s + "pause").addClass(s + "play").text(i.playText) : r.pausePlay.removeClass(s + "play").addClass(s + "pause").text(i.pauseText)
                }
            },
            touch: function () {
                function d(u) {
                    if (r.animating) u.preventDefault();
                    else if (u.touches.length === 1) {
                        r.pause();
                        o = a ? r.h : r.w;
                        h = Number(new Date);
                        s = l && f && r.animatingTo === r.last ? 0 : l && f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : l && r.currentSlide === r.last ? r.limit : l ? (r.itemW + i.itemMargin) * r.move * r.currentSlide : f ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                        e = a ? u.touches[0].pageY : u.touches[0].pageX;
                        n = a ? u.touches[0].pageX : u.touches[0].pageY;
                        t.addEventListener("touchmove", v, !1);
                        t.addEventListener("touchend", m, !1)
                    }
                }
                function v(t) {
                    u = a ? e - t.touches[0].pageY : e - t.touches[0].pageX;
                    p = a ? Math.abs(u) < Math.abs(t.touches[0].pageX - n) : Math.abs(u) < Math.abs(t.touches[0].pageY - n);
                    if (!p || Number(new Date) - h > 500) {
                        t.preventDefault();
                        if (!c && r.transitions) {
                            i.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                            r.setProps(s + u, "setTouch")
                        }
                    }
                }
                function m(a) {
                    t.removeEventListener("touchmove", v, !1);
                    if (r.animatingTo === r.currentSlide && !p && u !== null) {
                        var l = f ? -u : u,
                            d = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(d) && (Number(new Date) - h < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(d, i.pauseOnAction) : c || r.flexAnimate(r.currentSlide, i.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", m, !1);
                    e = null;
                    n = null;
                    u = null;
                    s = null
                }
                var e, n, s, o, u, h, p = !1;
                t.addEventListener("touchstart", d, !1)
            },
            resize: function () {
                if (!r.animating && r.is(":visible")) {
                    l || r.doMath();
                    if (c) p.smoothHeight();
                    else if (l) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (a) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        i.smoothHeight && p.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function (e) {
                if (!a || c) {
                    var t = c ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function (t) {
                var n = e(i.sync).data("flexslider"),
                    s = r.animatingTo;
                switch (t) {
                    case "animate":
                        n.flexAnimate(s, i.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !n.playing && !n.asNav && n.play();
                        break;
                    case "pause":
                        n.pause()
                }
            }
        };
        r.flexAnimate = function (t, n, u, d, v) {
            h && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, v) || u) && r.is(":visible")) {
                if (h && d) {
                    var m = e(i.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    m.flexAnimate(t, !0, !1, !0, v);
                    r.direction = r.currentItem < t ? "next" : "prev";
                    m.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                        return !1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                i.before(r);
                n && r.pause();
                r.syncExists && !v && p.sync("animate");
                i.controlNav && p.controlNav.active();
                l || r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                i.directionNav && p.directionNav.update();
                if (t === r.last) {
                    i.end(r);
                    i.animationLoop || r.pause()
                }
                if (!c) {
                    var g = a ? r.slides.filter(":first").height() : r.computedW,
                        y, b, w;
                    if (l) {
                        y = i.itemWidth > r.w ? i.itemMargin * 2 : i.itemMargin;
                        w = (r.itemW + y) * r.move * r.animatingTo;
                        b = w > r.limit && r.visible !== 1 ? r.limit : w
                    } else r.currentSlide === 0 && t === r.count - 1 && i.animationLoop && r.direction !== "next" ? b = f ? (r.count + r.cloneOffset) * g : 0 : r.currentSlide === r.last && t === 0 && i.animationLoop && r.direction !== "prev" ? b = f ? 0 : (r.count + 1) * g : b = f ? (r.count - 1 - t + r.cloneOffset) * g : (t + r.cloneOffset) * g;
                    r.setProps(b, "", i.animationSpeed);
                    if (r.transitions) {
                        if (!i.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function () {
                            r.wrapup(g)
                        })
                    } else r.container.animate(r.args, i.animationSpeed, i.easing, function () {
                        r.wrapup(g)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).fadeOut(i.animationSpeed, i.easing);
                    r.slides.eq(t).fadeIn(i.animationSpeed, i.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.slides.unbind("webkitTransitionEnd transitionend");
                    r.slides.eq(r.currentSlide).bind("webkitTransitionEnd transitionend", function () {
                        i.after(r)
                    });
                    r.animating = !1;
                    r.currentSlide = r.animatingTo
                }
                i.smoothHeight && p.smoothHeight(i.animationSpeed)
            }
        };
        r.wrapup = function (e) {
            !c && !l && (r.currentSlide === 0 && r.animatingTo === r.last && i.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && i.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            i.after(r)
        };
        r.animateSlides = function () {
            r.animating || r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function () {
            clearInterval(r.animatedSlides);
            r.playing = !1;
            i.pausePlay && p.pausePlay.update("play");
            r.syncExists && p.sync("pause")
        };
        r.play = function () {
            r.animatedSlides = setInterval(r.animateSlides, i.slideshowSpeed);
            r.playing = !0;
            i.pausePlay && p.pausePlay.update("pause");
            r.syncExists && p.sync("play")
        };
        r.canAdvance = function (e, t) {
            var n = h ? r.pagingCount - 1 : r.last;
            return t ? !0 : h && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : h && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !h ? !1 : i.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function (e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        };
        r.setProps = function (e, t, n) {
            var s = function () {
                var n = e ? e : (r.itemW + i.itemMargin) * r.move * r.animatingTo,
                    s = function () {
                        if (l) return t === "setTouch" ? e : f && r.animatingTo === r.last ? 0 : f ? r.limit - (r.itemW + i.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                        switch (t) {
                            case "setTotal":
                                return f ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                            case "setTouch":
                                return f ? e : e;
                            case "jumpEnd":
                                return f ? e : r.count * e;
                            case "jumpStart":
                                return f ? r.count * e : e;
                            default:
                                return e
                        }
                    }();
                return s * -1 + "px"
            }();
            if (r.transitions) {
                s = a ? "translate3d(0," + s + ",0)" : "translate3d(" + s + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s" : "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n)
            }
            r.args[r.prop] = s;
            (r.transitions || n === undefined) && r.container.css(r.args)
        };
        r.setup = function (t) {
            if (!c) {
                var n, u;
                if (t === "init") {
                    r.viewport = e('<div class="' + s + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (f) {
                        u = e.makeArray(r.slides).reverse();
                        r.slides = e(u);
                        r.container.empty().append(r.slides)
                    }
                }
                if (i.animationLoop && !l) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone")).prepend(r.slides.last().clone().addClass("clone"))
                }
                r.newSlides = e(i.selector, r);
                n = f ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                if (a && !l) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    }, t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function () {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        i.smoothHeight && p.smoothHeight()
                    }, t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + i.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.eq(r.currentSlide).fadeIn(i.animationSpeed, i.easing));
                i.smoothHeight && p.smoothHeight()
            }
            l || r.slides.removeClass(s + "active-slide").eq(r.currentSlide).addClass(s + "active-slide")
        };
        r.doMath = function () {
            var e = r.slides.first(),
                t = i.itemMargin,
                n = i.minItems,
                s = i.maxItems;
            r.w = r.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (l) {
                r.itemT = i.itemWidth + t;
                r.minW = n ? n * r.itemT : r.w;
                r.maxW = s ? s * r.itemT : r.w;
                r.itemW = r.minW > r.w ? (r.w - t * n) / n : r.maxW < r.w ? (r.w - t * s) / s : i.itemWidth > r.w ? r.w : i.itemWidth;
                r.visible = Math.floor(r.w / (r.itemW + t));
                r.move = i.move > 0 && i.move < r.visible ? i.move : r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : i.itemWidth > r.w ? (r.itemW + t * 2) * r.count - r.w - t : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function (e, t) {
            r.doMath();
            if (!l) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (i.controlNav && !r.manualControls) if (t === "add" && !l || r.pagingCount > r.controlNav.length) p.controlNav.update("add");
            else if (t === "remove" && !l || r.pagingCount < r.controlNav.length) {
                if (l && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                p.controlNav.update("remove", r.last)
            }
            i.directionNav && p.directionNav.update()
        };
        r.addSlide = function (t, n) {
            var s = e(t);
            r.count += 1;
            r.last = r.count - 1;
            a && f ? n !== undefined ? r.slides.eq(r.count - n).after(s) : r.container.prepend(s) : n !== undefined ? r.slides.eq(n).before(s) : r.container.append(s);
            r.update(n, "add");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.added(r)
        };
        r.removeSlide = function (t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : a && f ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(i.selector + ":not(.clone)", r);
            r.setup();
            i.removed(r)
        };
        p.init()
    };
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {}
    };
    e.fn.flexslider = function (t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function () {
            var n = e(this),
                r = t.selector ? t.selector : ".slides > li",
                i = n.find(r);
            if (i.length === 1) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") == undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case "play":
                n.play();
                break;
            case "pause":
                n.pause();
                break;
            case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);
(function (e) {
    var t = e.event,
        n, r;
    n = t.special.debouncedresize = {
        setup: function () {
            e(this).on("resize", n.handler)
        },
        teardown: function () {
            e(this).off("resize", n.handler)
        },
        handler: function (e, i) {
            var s = this,
                o = arguments,
                u = function () {
                    e.type = "debouncedresize";
                    t.dispatch.apply(s, o)
                };
            r && clearTimeout(r);
            i ? u() : r = setTimeout(u, n.threshold)
        },
        threshold: 150
    }
})(jQuery);
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
(function (e) {
    function d() {
        s.setAttribute("content", a);
        f = !0
    }
    function v() {
        s.setAttribute("content", u);
        f = !1
    }
    function m(t) {
        p = t.accelerationIncludingGravity;
        l = Math.abs(p.x);
        c = Math.abs(p.y);
        h = Math.abs(p.z);
        !e.orientation && (l > 7 || (h > 6 && c < 8 || h < 8 && c > 6) && l > 5) ? f && v() : f || d()
    }
    var t = e.document;
    if (!location.hash && e.addEventListener) {
        e.scrollTo(0, 1);
        var n = 1,
            r = function () {
                return e.pageYOffset || t.compatMode === "CSS1Compat" && t.documentElement.scrollTop || t.body.scrollTop || 0
            }, i = setInterval(function () {
                if (t.body) {
                    clearInterval(i);
                    n = r();
                    e.scrollTo(0, n === 1 ? 0 : 1)
                }
            }, 15);
        e.addEventListener("load", function () {
            setTimeout(function () {
                r() < 20 && e.scrollTo(0, n === 1 ? 0 : 1)
            }, 0)
        })
    }
    if (!(/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1)) return;
    if (!t.querySelector) return;
    var s = t.querySelector("meta[name=viewport]"),
        o = s && s.getAttribute("content"),
        u = o + ",maximum-scale=1",
        a = o + ",maximum-scale=10",
        f = !0,
        l, c, h, p;
    if (!s) return;
    t.addEventListener("orientationchange", d, !1);
    t.addEventListener("devicemotion", m, !1);
    t.addEventListener("touchstart", function () {}, !1)
})(window);
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
            animation: "fade",
            controlsContainer: ".flex-container",
            start: function () {
                c(e)
            }
        })
    }
    function c(e) {
        var t = e.find(".slides li").not(".clone").length,
            n = 100 / t;
        e.find(".flex-control-nav li").css("width", n + "%")
    }
    function h() {
        $(".course-landing-link").hover(function () {
            if (i.hasMobileLayout) return;
            $(this).addClass("hovered");
            n.addClass("bubble-hovered")
        }, function () {
            $(this).removeClass("hovered");
            n.removeClass("bubble-hovered")
        })
    }
    function p() {
        var e = window.location.hash,
            t;
        if (e !== "") {
            t = $('a[href="' + e + '"]');
            x(null, t)
        } else x(null, $(".thumbs").find("a").filter(":first"))
    }
    function d() {
        var e = document.getElementsByTagName("iframe"),
            t;
        for (var n = 0; n < e.length; n++) {
            if (e[n].src.match(/youtube.com/)) t = "youtube";
            else {
                if (!e[n].src.match(/maps.google/)) continue;
                t = "google-map"
            }
            $(e[n]).wrap('<div class="' + t + '-embed-holder"></div>')
        }
    }
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

