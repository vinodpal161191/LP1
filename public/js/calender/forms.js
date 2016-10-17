
(function (c) {
    var d = {
        allowed: 140,
        warning: 25,
        autoHide: true,
        hideWhenExceeded: false,
        showNegativeNumbers: false,
        className: "counter",
        counterElement: "span",
        cssWarning: "warning",
        cssExceeded: "exceeded",
        counterText: "characters remaining:"
    };
    c.fn.charCount = function (e) {
        if (a[e]) {
            return a[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return a.init.apply(this, arguments)
            } else {
                c.error("Method " + e + " does not exist on jQuery.charCount")
            }
        }
    };
    var a = {
        init: function (e) {
            return this.each(function () {
                var f = c(this);
                var g = c.extend({}, d, e);
                b.destroyCounterFor(f);
                f.data("charCount", {
                    options: g,
                    counter: c("<" + g.counterElement + ">", {
                        text: g.counterText + g.allowed,
                        css: g.autoHide ? {
                            display: "none"
                        } : {}
                    }).addClass(g.className).insertAfter(f)
                });
                f.bind("keyup.charCount", function () {
                    b.update(this)
                });
                f.bind("change.charCount", function () {
                    b.update(this)
                });
                f.bind("blur.charCount", function () {
                    var h = c(this).data("charCount");
                    if (h.options.autoHide) {
                        if (!h.counter.hasClass(h.options.cssExceeded) || h.options.hideWhenExceeded) {
                            h.counter.fadeOut()
                        }
                    }
                });
                f.bind("focus.charCount", function () {
                    b.update(this)
                })
            })
        },
        destroy: function () {
            return this.each(function () {
                b.destroyCounterFor(this)
            })
        }
    };
    var b = {
        update: function (k) {
            var j = c(k);
            var i = j.data("charCount");
            var e = i.counter;
            var f = i.options;
            var g = j.val().length;
            var h = f.allowed - g;
            if (!g && f.autoHide) {
                e.fadeOut()
            } else {
                if (e.is(":hidden")) {
                    e.fadeIn()
                }
            }
            e.toggleClass(f.cssWarning, (h <= f.warning && h > 0));
            e.toggleClass(f.cssExceeded, h <= 0);
            var l = (f.showNegativeNumbers) ? h : Math.max(h, 0);
            e.html(c.trim(f.counterText) + " " + l)
        },
        destroyCounterFor: function (g) {
            var f = c(g);
            var e = f.data("charCount");
            f.unbind(".charCount");
            if (e) {
                e.counter.remove()
            }
            f.removeData("charCount")
        }
    }
})(jQuery);
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
 * https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */ (function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) {
                if (b && b.debug && window.console) {
                    console.warn("nothing selected, can't validate, returning nothing")
                }
                return
            }
            var c = a.data(this[0], "validator");
            if (c) {
                return c
            }
            this.attr("novalidate", "novalidate");
            c = new a.validator(b, this[0]);
            a.data(this[0], "validator", c);
            if (c.settings.onsubmit) {
                this.validateDelegate(":submit", "click", function (d) {
                    if (c.settings.submitHandler) {
                        c.submitButton = d.target
                    }
                    if (a(d.target).hasClass("cancel")) {
                        c.cancelSubmit = true
                    }
                });
                this.submit(function (d) {
                    if (c.settings.debug) {
                        d.preventDefault()
                    }
                    function e() {
                        var f;
                        if (c.settings.submitHandler) {
                            if (c.submitButton) {
                                f = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)
                            }
                            c.settings.submitHandler.call(c, c.currentForm, d);
                            if (c.submitButton) {
                                f.remove()
                            }
                            return false
                        }
                        return true
                    }
                    if (c.cancelSubmit) {
                        c.cancelSubmit = false;
                        return e()
                    }
                    if (c.form()) {
                        if (c.pendingRequest) {
                            c.formSubmitted = true;
                            return false
                        }
                        return e()
                    } else {
                        c.focusInvalid();
                        return false
                    }
                })
            }
            return c
        },
        valid: function () {
            if (a(this[0]).is("form")) {
                return this.validate().form()
            } else {
                var c = true;
                var b = a(this[0].form).validate();
                this.each(function () {
                    c &= b.element(this)
                });
                return c
            }
        },
        removeAttrs: function (d) {
            var b = {}, c = this;
            a.each(d.split(/\s/), function (e, f) {
                b[f] = c.attr(f);
                c.removeAttr(f)
            });
            return b
        },
        rules: function (e, b) {
            var g = this[0];
            if (e) {
                var d = a.data(g.form, "validator").settings;
                var i = d.rules;
                var j = a.validator.staticRules(g);
                switch (e) {
                    case "add":
                        a.extend(j, a.validator.normalizeRule(b));
                        i[g.name] = j;
                        if (b.messages) {
                            d.messages[g.name] = a.extend(d.messages[g.name], b.messages)
                        }
                        break;
                    case "remove":
                        if (!b) {
                            delete i[g.name];
                            return j
                        }
                        var h = {};
                        a.each(b.split(/\s/), function (k, l) {
                            h[l] = j[l];
                            delete j[l]
                        });
                        return h
                }
            }
            var f = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(g), a.validator.classRules(g), a.validator.attributeRules(g), a.validator.staticRules(g)), g);
            if (f.required) {
                var c = f.required;
                delete f.required;
                f = a.extend({
                    required: c
                }, f)
            }
            return f
        }
    });
    a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + b.value)
        },
        filled: function (b) {
            return !!a.trim("" + b.value)
        },
        unchecked: function (b) {
            return !b.checked
        }
    });
    a.validator = function (b, c) {
        this.settings = a.extend(true, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function (b, c) {
        if (arguments.length === 1) {
            return function () {
                var d = a.makeArray(arguments);
                d.unshift(b);
                return a.validator.format.apply(this, d)
            }
        }
        if (arguments.length > 2 && c.constructor !== Array) {
            c = a.makeArray(arguments).slice(1)
        }
        if (c.constructor !== Array) {
            c = [c]
        }
        a.each(c, function (d, e) {
            b = b.replace(new RegExp("\\{" + d + "\\}", "g"), e)
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function (b, c) {
                this.lastActive = b;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, b, this.settings.errorClass, this.settings.validClass)
                    }
                    this.addWrapper(this.errorsFor(b)).hide()
                }
            },
            onfocusout: function (b, c) {
                if (!this.checkable(b) && (b.name in this.submitted || !this.optional(b))) {
                    this.element(b)
                }
            },
            onkeyup: function (b, c) {
                if (c.which === 9 && this.elementValue(b) === "") {
                    return
                } else {
                    if (b.name in this.submitted || b === this.lastActive) {
                        this.element(b)
                    }
                }
            },
            onclick: function (b, c) {
                if (b.name in this.submitted) {
                    this.element(b)
                } else {
                    if (b.parentNode.name in this.submitted) {
                        this.element(b.parentNode)
                    }
                }
            },
            highlight: function (d, b, c) {
                if (d.type === "radio") {
                    this.findByName(d.name).addClass(b).removeClass(c)
                } else {
                    a(d).addClass(b).removeClass(c)
                }
            },
            unhighlight: function (d, b, c) {
                if (d.type === "radio") {
                    this.findByName(d.name).removeClass(b).addClass(c)
                } else {
                    a(d).removeClass(b).addClass(c)
                }
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function () {
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var b = (this.groups = {});
                a.each(this.settings.groups, function (e, f) {
                    a.each(f.split(/\s/), function (h, g) {
                        b[g] = e
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (e, f) {
                    d[e] = a.validator.normalizeRule(f)
                });

                function c(g) {
                    var f = a.data(this[0].form, "validator"),
                        e = "on" + g.type.replace(/^validate/, "");
                    if (f.settings[e]) {
                        f.settings[e].call(f, this[0], g)
                    }
                }
                a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", c).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", c);
                if (this.settings.invalidHandler) {
                    a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                }
            },
            form: function () {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                if (!this.valid()) {
                    a(this.currentForm).triggerHandler("invalid-form", [this])
                }
                this.showErrors();
                return this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var b = 0, c = (this.currentElements = this.elements()); c[b]; b++) {
                    this.check(c[b])
                }
                return this.valid()
            },
            element: function (c) {
                c = this.validationTargetFor(this.clean(c));
                this.lastElement = c;
                this.prepareElement(c);
                this.currentElements = a(c);
                var b = this.check(c) !== false;
                if (b) {
                    delete this.invalid[c.name]
                } else {
                    this.invalid[c.name] = true
                }
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers)
                }
                this.showErrors();
                return b
            },
            showErrors: function (c) {
                if (c) {
                    a.extend(this.errorMap, c);
                    this.errorList = [];
                    for (var b in c) {
                        this.errorList.push({
                            message: c[b],
                            element: this.findByName(b)[0]
                        })
                    }
                    this.successList = a.grep(this.successList, function (d) {
                        return !(d.name in c)
                    })
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList)
                } else {
                    this.defaultShowErrors()
                }
            },
            resetForm: function () {
                if (a.fn.resetForm) {
                    a(this.currentForm).resetForm()
                }
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (d) {
                var c = 0;
                for (var b in d) {
                    c++
                }
                return c
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return this.size() === 0
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) {
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
                }
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && a.grep(this.errorList, function (c) {
                    return c.element.name === b.name
                }).length === 1 && b
            },
            elements: function () {
                var c = this,
                    b = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    if (!this.name && c.settings.debug && window.console) {
                        console.error("%o has no name assigned", this)
                    }
                    if (this.name in b || !c.objectLength(a(this).rules())) {
                        return false
                    }
                    b[this.name] = true;
                    return true
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (b) {
                this.reset();
                this.toHide = this.errorsFor(b)
            },
            elementValue: function (b) {
                var c = a(b).attr("type"),
                    d = a(b).val();
                if (c === "radio" || c === "checkbox") {
                    return a('input[name="' + a(b).attr("name") + '"]:checked').val()
                }
                if (typeof d === "string") {
                    return d.replace(/\r/g, "")
                }
                return d
            },
            check: function (c) {
                c = this.validationTargetFor(this.clean(c));
                var i = a(c).rules();
                var d = false;
                var h = this.elementValue(c);
                var b;
                for (var j in i) {
                    var g = {
                        method: j,
                        parameters: i[j]
                    };
                    try {
                        b = a.validator.methods[j].call(this, h, c, g.parameters);
                        if (b === "dependency-mismatch") {
                            d = true;
                            continue
                        }
                        d = false;
                        if (b === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(c));
                            return
                        }
                        if (!b) {
                            this.formatAndAdd(c, g);
                            return false
                        }
                    } catch (f) {
                        if (this.settings.debug && window.console) {
                            console.log("exception occured when checking element " + c.id + ", check the '" + g.method + "' method", f)
                        }
                        throw f
                    }
                }
                if (d) {
                    return
                }
                if (this.objectLength(i)) {
                    this.successList.push(c)
                }
                return true
            },
            customMetaMessage: function (b, d) {
                if (!a.metadata) {
                    return
                }
                var c = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                return c && c.messages && c.messages[d]
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || (b.attributes && a(b).attr("data-msg-" + c.toLowerCase()))
            },
            customMessage: function (c, d) {
                var b = this.settings.messages[c];
                return b && (b.constructor === String ? b : b[d])
            },
            findDefined: function () {
                for (var b = 0; b < arguments.length; b++) {
                    if (arguments[b] !== undefined) {
                        return arguments[b]
                    }
                }
                return undefined
            },
            defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || undefined, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function (c, e) {
                var d = this.defaultMessage(c, e.method),
                    b = /\$?\{(\d+)\}/g;
                if (typeof d === "function") {
                    d = d.call(this, e.parameters, c)
                } else {
                    if (b.test(d)) {
                        d = a.validator.format(d.replace(b, "{$1}"), e.parameters)
                    }
                }
                this.errorList.push({
                    message: d,
                    element: c
                });
                this.errorMap[c.name] = d;
                this.submitted[c.name] = d
            },
            addWrapper: function (b) {
                if (this.settings.wrapper) {
                    b = b.add(b.parent(this.settings.wrapper))
                }
                return b
            },
            defaultShowErrors: function () {
                var c, d;
                for (c = 0; this.errorList[c]; c++) {
                    var b = this.errorList[c];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass)
                    }
                    this.showLabel(b.element, b.message)
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers)
                }
                if (this.settings.success) {
                    for (c = 0; this.successList[c]; c++) {
                        this.showLabel(this.successList[c])
                    }
                }
                if (this.settings.unhighlight) {
                    for (c = 0, d = this.validElements(); d[c]; c++) {
                        this.settings.unhighlight.call(this, d[c], this.settings.errorClass, this.settings.validClass)
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (c, d) {
                var b = this.errorsFor(c);
                if (b.length) {
                    b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    if (b.attr("generated")) {
                        b.html(d)
                    }
                } else {
                    b = a("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(c),
                        generated: true
                    }).addClass(this.settings.errorClass).html(d || "");
                    if (this.settings.wrapper) {
                        b = b.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()
                    }
                    if (!this.labelContainer.append(b).length) {
                        if (this.settings.errorPlacement) {
                            this.settings.errorPlacement(b, a(c))
                        } else {
                            b.insertAfter(c)
                        }
                    }
                }
                if (!d && this.settings.success) {
                    b.text("");
                    if (typeof this.settings.success === "string") {
                        b.addClass(this.settings.success)
                    } else {
                        this.settings.success(b, c)
                    }
                }
                this.toShow = this.toShow.add(b)
            },
            errorsFor: function (c) {
                var b = this.idOrName(c);
                return this.errors().filter(function () {
                    return a(this).attr("for") === b
                })
            },
            idOrName: function (b) {
                return this.groups[b.name] || (this.checkable(b) ? b.name : b.id || b.name)
            },
            validationTargetFor: function (b) {
                if (this.checkable(b)) {
                    b = this.findByName(b.name).not(this.settings.ignore)[0]
                }
                return b
            },
            checkable: function (b) {
                return (/radio|checkbox/i).test(b.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find('[name="' + b + '"]')
            },
            getLength: function (c, b) {
                switch (b.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", b).length;
                    case "input":
                        if (this.checkable(b)) {
                            return this.findByName(b.name).filter(":checked").length
                        }
                }
                return c.length
            },
            depend: function (c, b) {
                return this.dependTypes[typeof c] ? this.dependTypes[typeof c](c, b) : true
            },
            dependTypes: {
                "boolean": function (c, b) {
                    return c
                },
                string: function (c, b) {
                    return !!a(c, b.form).length
                },
                "function": function (c, b) {
                    return c(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (b) {
                if (!this.pending[b.name]) {
                    this.pendingRequest++;
                    this.pending[b.name] = true
                }
            },
            stopRequest: function (b, c) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0
                }
                delete this.pending[b.name];
                if (c && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    a(this.currentForm).submit();
                    this.formSubmitted = false
                } else {
                    if (!c && this.pendingRequest === 0 && this.formSubmitted) {
                        a(this.currentForm).triggerHandler("invalid-form", [this]);
                        this.formSubmitted = false
                    }
                }
            },
            previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function (b, c) {
            if (b.constructor === String) {
                this.classRuleSettings[b] = c
            } else {
                a.extend(this.classRuleSettings, b)
            }
        },
        classRules: function (c) {
            var d = {};
            var b = a(c).attr("class");
            if (b) {
                a.each(b.split(" "), function () {
                    if (this in a.validator.classRuleSettings) {
                        a.extend(d, a.validator.classRuleSettings[this])
                    }
                })
            }
            return d
        },
        attributeRules: function (c) {
            var e = {};
            var b = a(c);
            for (var f in a.validator.methods) {
                var d;
                if (f === "required") {
                    d = b.get(0).getAttribute(f);
                    if (d === "") {
                        d = true
                    }
                    d = !! d
                } else {
                    d = b.attr(f)
                }
                if (d) {
                    e[f] = d
                } else {
                    if (b[0].getAttribute("type") === f) {
                        e[f] = true
                    }
                }
            }
            if (e.maxlength && /-1|2147483647|524288/.test(e.maxlength)) {
                delete e.maxlength
            }
            return e
        },
        metadataRules: function (b) {
            if (!a.metadata) {
                return {}
            }
            var c = a.data(b.form, "validator").settings.meta;
            return c ? a(b).metadata()[c] : a(b).metadata()
        },
        staticRules: function (c) {
            var d = {};
            var b = a.data(c.form, "validator");
            if (b.settings.rules) {
                d = a.validator.normalizeRule(b.settings.rules[c.name]) || {}
            }
            return d
        },
        normalizeRules: function (c, b) {
            a.each(c, function (f, e) {
                if (e === false) {
                    delete c[f];
                    return
                }
                if (e.param || e.depends) {
                    var d = true;
                    switch (typeof e.depends) {
                        case "string":
                            d = !! a(e.depends, b.form).length;
                            break;
                        case "function":
                            d = e.depends.call(b, b);
                            break
                    }
                    if (d) {
                        c[f] = e.param !== undefined ? e.param : true
                    } else {
                        delete c[f]
                    }
                }
            });
            a.each(c, function (d, e) {
                c[d] = a.isFunction(e) ? e(b) : e
            });
            a.each(["minlength", "maxlength", "min", "max"], function () {
                if (c[this]) {
                    c[this] = Number(c[this])
                }
            });
            a.each(["rangelength", "range"], function () {
                if (c[this]) {
                    c[this] = [Number(c[this][0]), Number(c[this][1])]
                }
            });
            if (a.validator.autoCreateRanges) {
                if (c.min && c.max) {
                    c.range = [c.min, c.max];
                    delete c.min;
                    delete c.max
                }
                if (c.minlength && c.maxlength) {
                    c.rangelength = [c.minlength, c.maxlength];
                    delete c.minlength;
                    delete c.maxlength
                }
            }
            if (c.messages) {
                delete c.messages
            }
            return c
        },
        normalizeRule: function (c) {
            if (typeof c === "string") {
                var b = {};
                a.each(c.split(/\s/), function () {
                    b[this] = true
                });
                c = b
            }
            return c
        },
        addMethod: function (b, d, c) {
            a.validator.methods[b] = d;
            a.validator.messages[b] = c !== undefined ? c : a.validator.messages[b];
            if (d.length < 3) {
                a.validator.addClassRules(b, a.validator.normalizeRule(b))
            }
        },
        methods: {
            required: function (c, b, e) {
                if (!this.depend(e, b)) {
                    return "dependency-mismatch"
                }
                if (b.nodeName.toLowerCase() === "select") {
                    var d = a(b).val();
                    return d && d.length > 0
                }
                if (this.checkable(b)) {
                    return this.getLength(c, b) > 0
                }
                return a.trim(c).length > 0
            },
            remote: function (f, c, g) {
                if (this.optional(c)) {
                    return "dependency-mismatch"
                }
                var d = this.previousValue(c);
                if (!this.settings.messages[c.name]) {
                    this.settings.messages[c.name] = {}
                }
                d.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = d.message;
                g = typeof g === "string" && {
                    url: g
                } || g;
                if (this.pending[c.name]) {
                    return "pending"
                }
                if (d.old === f) {
                    return d.valid
                }
                d.old = f;
                var b = this;
                this.startRequest(c);
                var e = {};
                e[c.name] = f;
                a.ajax(a.extend(true, {
                    url: g,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: e,
                    success: function (i) {
                        b.settings.messages[c.name].remote = d.originalMessage;
                        var k = i === true || i === "true";
                        if (k) {
                            var h = b.formSubmitted;
                            b.prepareElement(c);
                            b.formSubmitted = h;
                            b.successList.push(c);
                            delete b.invalid[c.name];
                            b.showErrors()
                        } else {
                            var l = {};
                            var j = i || b.defaultMessage(c, "remote");
                            l[c.name] = d.message = a.isFunction(j) ? j(f) : j;
                            b.invalid[c.name] = true;
                            b.showErrors(l)
                        }
                        d.valid = k;
                        b.stopRequest(c, k)
                    }
                }, g));
                return "pending"
            },
            minlength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || c >= e
            },
            maxlength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || c <= e
            },
            rangelength: function (d, b, e) {
                var c = a.isArray(d) ? d.length : this.getLength(a.trim(d), b);
                return this.optional(b) || (c >= e[0] && c <= e[1])
            },
            min: function (c, b, d) {
                return this.optional(b) || c >= d
            },
            max: function (c, b, d) {
                return this.optional(b) || c <= d
            },
            range: function (c, b, d) {
                return this.optional(b) || (c >= d[0] && c <= d[1])
            },
            email: function (c, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
            },
            url: function (c, b) {
                return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
            },
            date: function (c, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(c))
            },
            dateISO: function (c, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
            },
            number: function (c, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
            },
            digits: function (c, b) {
                return this.optional(b) || /^\d+$/.test(c)
            },
            creditcard: function (f, c) {
                if (this.optional(c)) {
                    return "dependency-mismatch"
                }
                if (/[^0-9 \-]+/.test(f)) {
                    return false
                }
                var g = 0,
                    e = 0,
                    b = false;
                f = f.replace(/\D/g, "");
                for (var h = f.length - 1; h >= 0; h--) {
                    var d = f.charAt(h);
                    e = parseInt(d, 10);
                    if (b) {
                        if ((e *= 2) > 9) {
                            e -= 9
                        }
                    }
                    g += e;
                    b = !b
                }
                return (g % 10) === 0
            },
            equalTo: function (c, b, e) {
                var d = a(e);
                if (this.settings.onfocusout) {
                    d.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                        a(b).valid()
                    })
                }
                return c === d.val()
            }
        }
    });
    a.format = a.validator.format
}(jQuery));
(function (c) {
    var a = {};
    if (c.ajaxPrefilter) {
        c.ajaxPrefilter(function (f, e, g) {
            var d = f.port;
            if (f.mode === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                a[d] = g
            }
        })
    } else {
        var b = c.ajax;
        c.ajax = function (e) {
            var f = ("mode" in e ? e : c.ajaxSettings).mode,
                d = ("port" in e ? e : c.ajaxSettings).port;
            if (f === "abort") {
                if (a[d]) {
                    a[d].abort()
                }
                return (a[d] = b.apply(this, arguments))
            }
            return b.apply(this, arguments)
        }
    }
}(jQuery));
(function (a) {
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
        a.each({
            focus: "focusin",
            blur: "focusout"
        }, function (c, b) {
            a.event.special[b] = {
                setup: function () {
                    this.addEventListener(c, d, true)
                },
                teardown: function () {
                    this.removeEventListener(c, d, true)
                },
                handler: function (g) {
                    var f = arguments;
                    f[0] = a.event.fix(g);
                    f[0].type = b;
                    return a.event.handle.apply(this, f)
                }
            };

            function d(f) {
                f = a.event.fix(f);
                f.type = b;
                return a.event.handle.call(this, f)
            }
        })
    }
    a.extend(a.fn, {
        validateDelegate: function (d, c, b) {
            return this.bind(c, function (e) {
                var f = a(e.target);
                if (f.is(d)) {
                    return b.apply(f, arguments)
                }
            })
        }
    })
}(jQuery));
/*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
 * https://github.com/jzaefferer/jquery-validation
 * Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
/*!
 * jQuery Validation Plugin 1.10.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */ (function () {
    function a(b) {
        return b.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'"_+=\/-]*/g, "")
    }
    jQuery.validator.addMethod("maxWords", function (c, b, d) {
        return this.optional(b) || a(c).match(/\b\w+\b/g).length <= d
    }, jQuery.validator.format("Please enter {0} words or less."));
    jQuery.validator.addMethod("minWords", function (c, b, d) {
        return this.optional(b) || a(c).match(/\b\w+\b/g).length >= d
    }, jQuery.validator.format("Please enter at least {0} words."));
    jQuery.validator.addMethod("rangeWords", function (e, b, f) {
        var d = a(e);
        var c = /\b\w+\b/g;
        return this.optional(b) || d.match(c).length >= f[0] && d.match(c).length <= f[1]
    }, jQuery.validator.format("Please enter between {0} and {1} words."))
})();
jQuery.validator.addMethod("letterswithbasicpunc", function (b, a) {
    return this.optional(a) || /^[a-z\-.,()'\"\s]+$/i.test(b)
}, "Letters or punctuation only please");
jQuery.validator.addMethod("alphanumeric", function (b, a) {
    return this.optional(a) || /^\w+$/i.test(b)
}, "Letters, numbers, and underscores only please");
jQuery.validator.addMethod("lettersonly", function (b, a) {
    return this.optional(a) || /^[a-z]+$/i.test(b)
}, "Letters only please");
jQuery.validator.addMethod("nowhitespace", function (b, a) {
    return this.optional(a) || /^\S+$/i.test(b)
}, "No white space please");
jQuery.validator.addMethod("ziprange", function (b, a) {
    return this.optional(a) || /^90[2-5]\d\{2\}-\d{4}$/.test(b)
}, "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx");
jQuery.validator.addMethod("zipcodeUS", function (b, a) {
    return this.optional(a) || /\d{5}-\d{4}$|^\d{5}$/.test(b)
}, "The specified US ZIP Code is invalid");
jQuery.validator.addMethod("integer", function (b, a) {
    return this.optional(a) || /^-?\d+$/.test(b)
}, "A positive or negative non-decimal number please");
jQuery.validator.addMethod("vinUS", function (o) {
    if (o.length != 17) {
        return false
    }
    var h, a, l, j, b, k;
    var c = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var m = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9];
    var g = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    var e = 0;
    for (h = 0; h < 17; h++) {
        j = g[h];
        l = o.slice(h, h + 1);
        if (h == 8) {
            k = l
        }
        if (!isNaN(l)) {
            l *= j
        } else {
            for (a = 0; a < c.length; a++) {
                if (l.toUpperCase() === c[a]) {
                    l = m[a];
                    l *= j;
                    if (isNaN(k) && a == 8) {
                        k = c[a]
                    }
                    break
                }
            }
        }
        e += l
    }
    b = e % 11;
    if (b == 10) {
        b = "X"
    }
    if (b == k) {
        return true
    }
    return false
}, "The specified vehicle identification number (VIN) is invalid.");
jQuery.validator.addMethod("dateITA", function (e, c) {
    var a = false;
    var g = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (g.test(e)) {
        var i = e.split("/");
        var d = parseInt(i[0], 10);
        var b = parseInt(i[1], 10);
        var f = parseInt(i[2], 10);
        var h = new Date(f, b - 1, d);
        if ((h.getFullYear() == f) && (h.getMonth() == b - 1) && (h.getDate() == d)) {
            a = true
        } else {
            a = false
        }
    } else {
        a = false
    }
    return this.optional(c) || a
}, "Please enter a correct date");
jQuery.validator.addMethod("dateNL", function (b, a) {
    return this.optional(a) || /^\d\d?[\.\/-]\d\d?[\.\/-]\d\d\d?\d?$/.test(b)
}, "Vul hier een geldige datum in.");
jQuery.validator.addMethod("time", function (b, a) {
    return this.optional(a) || /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(b)
}, "Please enter a valid time, between 00:00 and 23:59");
jQuery.validator.addMethod("time12h", function (b, a) {
    return this.optional(a) || /^((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))$/i.test(b)
}, "Please enter a valid time, between 00:00 am and 12:00 pm");
jQuery.validator.addMethod("phoneUS", function (a, b) {
    a = a.replace(/\s+/g, "");
    return this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)
}, "Please specify a valid phone number");
jQuery.validator.addMethod("phoneUK", function (a, b) {
    a = a.replace(/\(|\)|\s+|-/g, "");
    return this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:(?:\d{5}\)?\s?\d{4,5})|(?:\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3}))|(?:\d{3}\)?\s?\d{3}\s?\d{3,4})|(?:\d{2}\)?\s?\d{4}\s?\d{4}))$/)
}, "Please specify a valid phone number");
jQuery.validator.addMethod("mobileUK", function (a, b) {
    a = a.replace(/\s+|-/g, "");
    return this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)
}, "Please specify a valid mobile number");
jQuery.validator.addMethod("phonesUK", function (a, b) {
    a = a.replace(/\s+|-/g, "");
    return this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)
}, "Please specify a valid uk phone number");
jQuery.validator.addMethod("postcodeUK", function (a, b) {
    a = (a.toUpperCase()).replace(/\s+/g, "");
    return this.optional(b) || a.match(/^([^QZ][^IJZ]{0,1}\d{1,2})(\d[^CIKMOV]{2})$/) || a.match(/^([^QV]\d[ABCDEFGHJKSTUW])(\d[^CIKMOV]{2})$/) || a.match(/^([^QV][^IJZ]\d[ABEHMNPRVWXY])(\d[^CIKMOV]{2})$/) || a.match(/^(GIR)(0AA)$/) || a.match(/^(BFPO)(\d{1,4})$/) || a.match(/^(BFPO)(C\/O\d{1,3})$/)
}, "Please specify a valid postcode");
jQuery.validator.addMethod("strippedminlength", function (b, a, c) {
    return jQuery(b).text().length >= c
}, jQuery.validator.format("Please enter at least {0} characters"));
jQuery.validator.addMethod("email2", function (b, a, c) {
    return this.optional(a) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(b)
}, jQuery.validator.messages.email);
jQuery.validator.addMethod("url2", function (b, a, c) {
    return this.optional(a) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(b)
}, jQuery.validator.messages.url);
jQuery.validator.addMethod("creditcardtypes", function (b, a, c) {
    if (/[^0-9-]+/.test(b)) {
        return false
    }
    b = b.replace(/\D/g, "");
    var d = 0;
    if (c.mastercard) {
        d |= 1
    }
    if (c.visa) {
        d |= 2
    }
    if (c.amex) {
        d |= 4
    }
    if (c.dinersclub) {
        d |= 8
    }
    if (c.enroute) {
        d |= 16
    }
    if (c.discover) {
        d |= 32
    }
    if (c.jcb) {
        d |= 64
    }
    if (c.unknown) {
        d |= 128
    }
    if (c.all) {
        d = 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128
    }
    if (d & 1 && /^(5[12345])/.test(b)) {
        return b.length == 16
    }
    if (d & 2 && /^(4)/.test(b)) {
        return b.length == 16
    }
    if (d & 4 && /^(3[47])/.test(b)) {
        return b.length == 15
    }
    if (d & 8 && /^(3(0[012345]|[68]))/.test(b)) {
        return b.length == 14
    }
    if (d & 16 && /^(2(014|149))/.test(b)) {
        return b.length == 15
    }
    if (d & 32 && /^(6011)/.test(b)) {
        return b.length == 16
    }
    if (d & 64 && /^(3)/.test(b)) {
        return b.length == 16
    }
    if (d & 64 && /^(2131|1800)/.test(b)) {
        return b.length == 15
    }
    if (d & 128) {
        return true
    }
    return false
}, "Please enter a valid credit card number.");
jQuery.validator.addMethod("ipv4", function (b, a, c) {
    return this.optional(a) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(b)
}, "Please enter a valid IP v4 address.");
jQuery.validator.addMethod("ipv6", function (b, a, c) {
    return this.optional(a) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(b)
}, "Please enter a valid IP v6 address.");
jQuery.validator.addMethod("pattern", function (b, a, c) {
    if (this.optional(a)) {
        return true
    }
    if (typeof c === "string") {
        c = new RegExp("^(?:" + c + ")$")
    }
    return c.test(b)
}, "Invalid format.");
jQuery.validator.addMethod("require_from_group", function (g, f, d) {
    var e = this;
    var b = d[1];
    var c = $(b, f.form).filter(function () {
        return e.elementValue(this)
    }).length >= d[0];
    if (!$(f).data("being_validated")) {
        var a = $(b, f.form);
        a.data("being_validated", true);
        a.valid();
        a.data("being_validated", false)
    }
    return c
}, jQuery.format("Please fill at least {0} of these fields."));
jQuery.validator.addMethod("skip_or_fill_minimum", function (f, d, b) {
    var c = this;
    numberRequired = b[0];
    selector = b[1];
    var g = $(selector, d.form).filter(function () {
        return c.elementValue(this)
    }).length;
    var e = g >= numberRequired || g === 0;
    if (!$(d).data("being_validated")) {
        var a = $(selector, d.form);
        a.data("being_validated", true);
        a.valid();
        a.data("being_validated", false)
    }
    return e
}, jQuery.format("Please either skip these fields or fill at least {0} of them."));
jQuery.validator.addMethod("accept", function (e, c, g) {
    var f = typeof g === "string" ? g.replace(/,/g, "|") : "image/*",
        d = this.optional(c),
        b, a;
    if (d) {
        return d
    }
    if ($(c).attr("type") === "file") {
        f = f.replace("*", ".*");
        if (c.files && c.files.length) {
            for (b = 0; b < c.files.length; b++) {
                a = c.files[b];
                if (!a.type.match(new RegExp(".?(" + f + ")$", "i"))) {
                    return false
                }
            }
        }
    }
    return true
}, jQuery.format("Please enter a value with a valid mimetype."));
jQuery.validator.addMethod("extension", function (b, a, c) {
    c = typeof c === "string" ? c.replace(/,/g, "|") : "png|jpe?g|gif";
    return this.optional(a) || b.match(new RegExp(".(" + c + ")$", "i"))
}, jQuery.format("Please enter a value with a valid extension."));
var Vaya = Vaya || {};
Vaya.Forms = (function () {
    var a = function (b, c) {
        c = c || [];
        return {
            invalidHandler: function (g, e) {
                if (typeof (mixpanel) != "undefined") {
                    var f = {};
                    for (var d = 0; d < c.length; d++) {
                        var h = c[d];
                        var j = $("#" + h).val();
                        if (j == "true") {
                            f[h] = true
                        } else {
                            if (j && j != "") {
                                f[h] = j
                            }
                        }
                    }
                    f.valid = false;
                    f.errors = e.numberOfInvalids();
                    mixpanel.track(b, f)
                }
            },
            submitHandler: function (e) {
                if (typeof (mixpanel) != "undefined") {
                    var d = {};
                    d.valid = true;
                    d.errors = 0;
                    mixpanel.track(b, d)
                }
                e.submit()
            }
        }
    };
    return {
        clearErrors: function () {
            $(".error").remove();
            $(".alert-error").remove()
        },
        configureValidate: function (e, b, c, d) {
            options = {
                errorPlacement: function (f, g) {
                    g.parent().append(f)
                },
                showErrors: function (f, g) {
                    if ( !! b) {
                        if (g[0]) {
                            b.text("Oops, please check the form and try again.");
                            b.fadeIn("fast")
                        } else {
                            b.hide()
                        }
                    }
                    this.defaultShowErrors()
                },
                onkeyup: false
            };
            if (c) {
                options = $.extend(options, a(c, d))
            }
            e.validate(options)
        }
    }
})();