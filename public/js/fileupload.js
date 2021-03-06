
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "jquery.ui.widget"], a)
    } else {
        a(window.jQuery)
    }
}(function (a) {
    a.support.xhrFileUpload = !! (window.XMLHttpRequestUpload && window.FileReader);
    a.support.xhrFormDataFileUpload = !! window.FormData;
    a.widget("blueimp.fileupload", {
        options: {
            dropZone: a(document),
            pasteZone: a(document),
            fileInput: undefined,
            replaceFileInput: true,
            paramName: undefined,
            singleFileUploads: true,
            limitMultiFileUploads: undefined,
            sequentialUploads: false,
            limitConcurrentUploads: undefined,
            forceIframeTransport: false,
            redirect: undefined,
            redirectParamName: undefined,
            postMessage: undefined,
            multipart: true,
            maxChunkSize: undefined,
            uploadedBytes: undefined,
            recalculateProgress: true,
            progressInterval: 100,
            bitrateInterval: 500,
            formData: function (b) {
                return b.serializeArray()
            },
            add: function (c, b) {
                b.submit()
            },
            processData: false,
            contentType: false,
            cache: false
        },
        _refreshOptionsList: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _BitrateTimer: function () {
            this.timestamp = +(new Date());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (d, c, b) {
                var e = d - this.timestamp;
                if (!this.bitrate || !b || e > b) {
                    this.bitrate = (c - this.loaded) * (1000 / e) * 8;
                    this.loaded = c;
                    this.timestamp = d
                }
                return this.bitrate
            }
        },
        _isXHRUpload: function (b) {
            return !b.forceIframeTransport && ((!b.multipart && a.support.xhrFileUpload) || a.support.xhrFormDataFileUpload)
        },
        _getFormData: function (b) {
            var c;
            if (typeof b.formData === "function") {
                return b.formData(b.form)
            }
            if (a.isArray(b.formData)) {
                return b.formData
            }
            if (b.formData) {
                c = [];
                a.each(b.formData, function (d, e) {
                    c.push({
                        name: d,
                        value: e
                    })
                });
                return c
            }
            return []
        },
        _getTotal: function (c) {
            var b = 0;
            a.each(c, function (d, e) {
                b += e.size || 1
            });
            return b
        },
        _onProgress: function (g, f) {
            if (g.lengthComputable) {
                var c = +(new Date()),
                    d, b;
                if (f._time && f.progressInterval && (c - f._time < f.progressInterval) && g.loaded !== g.total) {
                    return
                }
                f._time = c;
                d = f.total || this._getTotal(f.files);
                b = parseInt(g.loaded / g.total * (f.chunkSize || d), 10) + (f.uploadedBytes || 0);
                this._loaded += b - (f.loaded || f.uploadedBytes || 0);
                f.lengthComputable = true;
                f.loaded = b;
                f.total = d;
                f.bitrate = f._bitrateTimer.getBitrate(c, b, f.bitrateInterval);
                this._trigger("progress", g, f);
                this._trigger("progressall", g, {
                    lengthComputable: true,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(c, this._loaded, f.bitrateInterval)
                })
            }
        },
        _initProgressListener: function (b) {
            var c = this,
                d = b.xhr ? b.xhr() : a.ajaxSettings.xhr();
            if (d.upload) {
                a(d.upload).bind("progress", function (f) {
                    var g = f.originalEvent;
                    f.lengthComputable = g.lengthComputable;
                    f.loaded = g.loaded;
                    f.total = g.total;
                    c._onProgress(f, b)
                });
                b.xhr = function () {
                    return d
                }
            }
        },
        _initXHRData: function (c) {
            var f, d = c.files[0],
                b = c.multipart || !a.support.xhrFileUpload,
                e = c.paramName[0];
            c.headers = c.headers || {};
            if (c.contentRange) {
                c.headers["Content-Range"] = c.contentRange
            }
            if (!b) {
                c.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(d.name) + '"';
                c.contentType = d.type;
                c.data = c.blob || d
            } else {
                if (a.support.xhrFormDataFileUpload) {
                    if (c.postMessage) {
                        f = this._getFormData(c);
                        if (c.blob) {
                            f.push({
                                name: e,
                                value: c.blob
                            })
                        } else {
                            a.each(c.files, function (g, h) {
                                f.push({
                                    name: c.paramName[g] || e,
                                    value: h
                                })
                            })
                        }
                    } else {
                        if (c.formData instanceof FormData) {
                            f = c.formData
                        } else {
                            f = new FormData();
                            a.each(this._getFormData(c), function (g, h) {
                                f.append(h.name, h.value)
                            })
                        } if (c.blob) {
                            c.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(d.name) + '"';
                            f.append(e, c.blob, d.name)
                        } else {
                            a.each(c.files, function (g, h) {
                                if ((window.Blob && h instanceof Blob) || (window.File && h instanceof File)) {
                                    f.append(c.paramName[g] || e, h, h.name)
                                }
                            })
                        }
                    }
                    c.data = f
                }
            }
            c.blob = null
        },
        _initIframeSettings: function (b) {
            b.dataType = "iframe " + (b.dataType || "");
            b.formData = this._getFormData(b);
            if (b.redirect && a("<a></a>").prop("href", b.url).prop("host") !== location.host) {
                b.formData.push({
                    name: b.redirectParamName || "redirect",
                    value: b.redirect
                })
            }
        },
        _initDataSettings: function (b) {
            if (this._isXHRUpload(b)) {
                if (!this._chunkedUpload(b, true)) {
                    if (!b.data) {
                        this._initXHRData(b)
                    }
                    this._initProgressListener(b)
                }
                if (b.postMessage) {
                    b.dataType = "postmessage " + (b.dataType || "")
                }
            } else {
                this._initIframeSettings(b, "iframe")
            }
        },
        _getParamName: function (b) {
            var c = a(b.fileInput),
                d = b.paramName;
            if (!d) {
                d = [];
                c.each(function () {
                    var e = a(this),
                        f = e.prop("name") || "files[]",
                        g = (e.prop("files") || [1]).length;
                    while (g) {
                        d.push(f);
                        g -= 1
                    }
                });
                if (!d.length) {
                    d = [c.prop("name") || "files[]"]
                }
            } else {
                if (!a.isArray(d)) {
                    d = [d]
                }
            }
            return d
        },
        _initFormSettings: function (b) {
            if (!b.form || !b.form.length) {
                b.form = a(b.fileInput.prop("form"));
                if (!b.form.length) {
                    b.form = a(this.options.fileInput.prop("form"))
                }
            }
            b.paramName = this._getParamName(b);
            if (!b.url) {
                b.url = b.form.prop("action") || location.href
            }
            b.type = (b.type || b.form.prop("method") || "").toUpperCase();
            if (b.type !== "POST" && b.type !== "PUT") {
                b.type = "POST"
            }
            if (!b.formAcceptCharset) {
                b.formAcceptCharset = b.form.attr("accept-charset")
            }
        },
        _getAJAXSettings: function (c) {
            var b = a.extend({}, this.options, c);
            this._initFormSettings(b);
            this._initDataSettings(b);
            return b
        },
        _enhancePromise: function (b) {
            b.success = b.done;
            b.error = b.fail;
            b.complete = b.always;
            return b
        },
        _getXHRPromise: function (e, d, c) {
            var b = a.Deferred(),
                f = b.promise();
            d = d || this.options.context || f;
            if (e === true) {
                b.resolveWith(d, c)
            } else {
                if (e === false) {
                    b.rejectWith(d, c)
                }
            }
            f.abort = b.promise;
            return this._enhancePromise(f)
        },
        _getUploadedBytes: function (d) {
            var b = d.getResponseHeader("Range"),
                e = b && b.split("-"),
                c = e && e.length > 1 && parseInt(e[1], 10);
            return c && c + 1
        },
        _chunkedUpload: function (m, g) {
            var f = this,
                d = m.files[0],
                e = d.size,
                b = m.uploadedBytes = m.uploadedBytes || 0,
                c = m.maxChunkSize || e,
                i = d.slice || d.webkitSlice || d.mozSlice,
                j = a.Deferred(),
                l = j.promise(),
                h, k;
            if (!(this._isXHRUpload(m) && i && (b || c < e)) || m.data) {
                return false
            }
            if (g) {
                return true
            }
            if (b >= e) {
                d.error = "Uploaded bytes exceed file size";
                return this._getXHRPromise(false, m.context, [null, "error", d.error])
            }
            k = function (n) {
                var p = a.extend({}, m);
                p.blob = i.call(d, b, b + c, d.type);
                p.chunkSize = p.blob.size;
                p.contentRange = "bytes " + b + "-" + (b + p.chunkSize - 1) + "/" + e;
                f._initXHRData(p);
                f._initProgressListener(p);
                h = (a.ajax(p) || f._getXHRPromise(false, p.context)).done(function (o, r, q) {
                    b = f._getUploadedBytes(q) || (b + p.chunkSize);
                    if (!p.loaded) {
                        f._onProgress(a.Event("progress", {
                            lengthComputable: true,
                            loaded: b - p.uploadedBytes,
                            total: b - p.uploadedBytes
                        }), p)
                    }
                    m.uploadedBytes = p.uploadedBytes = b;
                    if (b < e) {
                        k()
                    } else {
                        j.resolveWith(p.context, [o, r, q])
                    }
                }).fail(function (o, r, q) {
                    j.rejectWith(p.context, [o, r, q])
                })
            };
            this._enhancePromise(l);
            l.abort = function () {
                return h.abort()
            };
            k();
            return l
        },
        _beforeSend: function (c, b) {
            if (this._active === 0) {
                this._trigger("start");
                this._bitrateTimer = new this._BitrateTimer()
            }
            this._active += 1;
            this._loaded += b.uploadedBytes || 0;
            this._total += this._getTotal(b.files)
        },
        _onDone: function (b, e, d, c) {
            if (!this._isXHRUpload(c)) {
                this._onProgress(a.Event("progress", {
                    lengthComputable: true,
                    loaded: 1,
                    total: 1
                }), c)
            }
            c.result = b;
            c.textStatus = e;
            c.jqXHR = d;
            this._trigger("done", null, c)
        },
        _onFail: function (c, e, d, b) {
            b.jqXHR = c;
            b.textStatus = e;
            b.errorThrown = d;
            this._trigger("fail", null, b);
            if (b.recalculateProgress) {
                this._loaded -= b.loaded || b.uploadedBytes || 0;
                this._total -= b.total || this._getTotal(b.files)
            }
        },
        _onAlways: function (d, e, c, b) {
            this._active -= 1;
            b.textStatus = e;
            if (c && c.always) {
                b.jqXHR = c;
                b.result = d
            } else {
                b.jqXHR = d;
                b.errorThrown = c
            }
            this._trigger("always", null, b);
            if (this._active === 0) {
                this._trigger("stop");
                this._loaded = this._total = 0;
                this._bitrateTimer = null
            }
        },
        _onSend: function (h, f) {
            var g = this,
                j, b, i, c, k = g._getAJAXSettings(f),
                d = function () {
                    g._sending += 1;
                    k._bitrateTimer = new g._BitrateTimer();
                    j = j || (((b || g._trigger("send", h, k) === false) && g._getXHRPromise(false, k.context, b)) || g._chunkedUpload(k) || a.ajax(k)).done(function (e, m, l) {
                        g._onDone(e, m, l, k)
                    }).fail(function (e, m, l) {
                        g._onFail(e, m, l, k)
                    }).always(function (n, o, m) {
                        g._sending -= 1;
                        g._onAlways(n, o, m, k);
                        if (k.limitConcurrentUploads && k.limitConcurrentUploads > g._sending) {
                            var l = g._slots.shift(),
                                e;
                            while (l) {
                                e = l.state ? l.state() === "pending" : !l.isRejected();
                                if (e) {
                                    l.resolve();
                                    break
                                }
                                l = g._slots.shift()
                            }
                        }
                    });
                    return j
                };
            this._beforeSend(h, k);
            if (this.options.sequentialUploads || (this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    i = a.Deferred();
                    this._slots.push(i);
                    c = i.pipe(d)
                } else {
                    c = (this._sequence = this._sequence.pipe(d, d))
                }
                c.abort = function () {
                    b = [undefined, "abort", "abort"];
                    if (!j) {
                        if (i) {
                            i.rejectWith(k.context, b)
                        }
                        return d()
                    }
                    return j.abort()
                };
                return this._enhancePromise(c)
            }
            return d()
        },
        _onAdd: function (k, g) {
            var j = this,
                n = true,
                m = a.extend({}, this.options, g),
                d = m.limitMultiFileUploads,
                h = this._getParamName(m),
                c, b, l, f;
            if (!(m.singleFileUploads || d) || !this._isXHRUpload(m)) {
                l = [g.files];
                c = [h]
            } else {
                if (!m.singleFileUploads && d) {
                    l = [];
                    c = [];
                    for (f = 0; f < g.files.length; f += d) {
                        l.push(g.files.slice(f, f + d));
                        b = h.slice(f, f + d);
                        if (!b.length) {
                            b = h
                        }
                        c.push(b)
                    }
                } else {
                    c = h
                }
            }
            g.originalFiles = g.files;
            a.each(l || g.files, function (e, i) {
                var o = a.extend({}, g);
                o.files = l ? i : [i];
                o.paramName = c[e];
                o.submit = function () {
                    o.jqXHR = this.jqXHR = (j._trigger("submit", k, this) !== false) && j._onSend(k, this);
                    return this.jqXHR
                };
                n = j._trigger("add", k, o);
                return n
            });
            return n
        },
        _replaceFileInput: function (b) {
            var c = b.clone(true);
            a("<form></form>").append(c)[0].reset();
            b.after(c).detach();
            a.cleanData(b.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function (d, e) {
                if (e === b[0]) {
                    return c[0]
                }
                return e
            });
            if (b[0] === this.element[0]) {
                this.element = c
            }
        },
        _handleFileTreeEntry: function (f, g) {
            var e = this,
                b = a.Deferred(),
                c = function (h) {
                    if (h && !h.entry) {
                        h.entry = f
                    }
                    b.resolve([h])
                }, d;
            g = g || "";
            if (f.isFile) {
                if (f._file) {
                    f._file.relativePath = g;
                    b.resolve(f._file)
                } else {
                    f.file(function (h) {
                        h.relativePath = g;
                        b.resolve(h)
                    }, c)
                }
            } else {
                if (f.isDirectory) {
                    d = f.createReader();
                    d.readEntries(function (h) {
                        e._handleFileTreeEntries(h, g + f.name + "/").done(function (i) {
                            b.resolve(i)
                        }).fail(c)
                    }, c)
                } else {
                    b.resolve([])
                }
            }
            return b.promise()
        },
        _handleFileTreeEntries: function (b, d) {
            var c = this;
            return a.when.apply(a, a.map(b, function (e) {
                return c._handleFileTreeEntry(e, d)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function (c) {
            c = c || {};
            var b = c.items;
            if (b && b.length && (b[0].webkitGetAsEntry || b[0].getAsEntry)) {
                return this._handleFileTreeEntries(a.map(b, function (e) {
                    var d;
                    if (e.webkitGetAsEntry) {
                        d = e.webkitGetAsEntry();
                        if (d) {
                            d._file = e.getAsFile()
                        }
                        return d
                    }
                    return e.getAsEntry()
                }))
            }
            return a.Deferred().resolve(a.makeArray(c.files)).promise()
        },
        _getSingleFileInputFiles: function (d) {
            d = a(d);
            var b = d.prop("webkitEntries") || d.prop("entries"),
                c, e;
            if (b && b.length) {
                return this._handleFileTreeEntries(b)
            }
            c = a.makeArray(d.prop("files"));
            if (!c.length) {
                e = d.prop("value");
                if (!e) {
                    return a.Deferred().resolve([]).promise()
                }
                c = [{
                        name: e.replace(/^.*\\/, "")
                    }
                ]
            } else {
                if (c[0].name === undefined && c[0].fileName) {
                    a.each(c, function (f, g) {
                        g.name = g.fileName;
                        g.size = g.fileSize
                    })
                }
            }
            return a.Deferred().resolve(c).promise()
        },
        _getFileInputFiles: function (b) {
            if (!(b instanceof a) || b.length === 1) {
                return this._getSingleFileInputFiles(b)
            }
            return a.when.apply(a, a.map(b, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _onChange: function (d) {
            var b = this,
                c = {
                    fileInput: a(d.target),
                    form: a(d.target.form)
                };
            this._getFileInputFiles(c.fileInput).always(function (e) {
                c.files = e;
                if (b.options.replaceFileInput) {
                    b._replaceFileInput(c.fileInput)
                }
                if (b._trigger("change", d, c) !== false) {
                    b._onAdd(d, c)
                }
            })
        },
        _onPaste: function (f) {
            var d = f.originalEvent.clipboardData,
                b = (d && d.items) || [],
                c = {
                    files: []
                };
            a.each(b, function (e, h) {
                var g = h.getAsFile && h.getAsFile();
                if (g) {
                    c.files.push(g)
                }
            });
            if (this._trigger("paste", f, c) === false || this._onAdd(f, c) === false) {
                return false
            }
        },
        _onDrop: function (f) {
            var b = this,
                d = f.dataTransfer = f.originalEvent.dataTransfer,
                c = {};
            if (d && d.files && d.files.length) {
                f.preventDefault()
            }
            this._getDroppedFiles(d).always(function (e) {
                c.files = e;
                if (b._trigger("drop", f, c) !== false) {
                    b._onAdd(f, c)
                }
            })
        },
        _onDragOver: function (c) {
            var b = c.dataTransfer = c.originalEvent.dataTransfer;
            if (this._trigger("dragover", c) === false) {
                return false
            }
            if (b && a.inArray("Files", b.types) !== -1) {
                b.dropEffect = "copy";
                c.preventDefault()
            }
        },
        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                })
            }
            this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragover drop");
            this._off(this.options.pasteZone, "paste");
            this._off(this.options.fileInput, "change")
        },
        _setOption: function (b, d) {
            var c = a.inArray(b, this._refreshOptionsList) !== -1;
            if (c) {
                this._destroyEventHandlers()
            }
            this._super(b, d);
            if (c) {
                this._initSpecialOptions();
                this._initEventHandlers()
            }
        },
        _initSpecialOptions: function () {
            var b = this.options;
            if (b.fileInput === undefined) {
                b.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]')
            } else {
                if (!(b.fileInput instanceof a)) {
                    b.fileInput = a(b.fileInput)
                }
            } if (!(b.dropZone instanceof a)) {
                b.dropZone = a(b.dropZone)
            }
            if (!(b.pasteZone instanceof a)) {
                b.pasteZone = a(b.pasteZone)
            }
        },
        _create: function () {
            var b = this.options;
            a.extend(b, a(this.element[0].cloneNode(false)).data());
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers()
        },
        _destroy: function () {
            this._destroyEventHandlers()
        },
        add: function (c) {
            var b = this;
            if (!c || this.options.disabled) {
                return
            }
            if (c.fileInput && !c.files) {
                this._getFileInputFiles(c.fileInput).always(function (d) {
                    c.files = d;
                    b._onAdd(null, c)
                })
            } else {
                c.files = a.makeArray(c.files);
                this._onAdd(null, c)
            }
        },
        send: function (f) {
            if (f && !this.options.disabled) {
                if (f.fileInput && !f.files) {
                    var d = this,
                        b = a.Deferred(),
                        g = b.promise(),
                        c, e;
                    g.abort = function () {
                        e = true;
                        if (c) {
                            return c.abort()
                        }
                        b.reject(null, "abort", "abort");
                        return g
                    };
                    this._getFileInputFiles(f.fileInput).always(function (h) {
                        if (e) {
                            return
                        }
                        f.files = h;
                        c = d._onSend(null, f).then(function (i, k, j) {
                            b.resolve(i, k, j)
                        }, function (i, k, j) {
                            b.reject(i, k, j)
                        })
                    });
                    return this._enhancePromise(g)
                }
                f.files = a.makeArray(f.files);
                if (f.files.length) {
                    return this._onSend(null, f)
                }
            }
            return this._getXHRPromise(false, f && f.context)
        }
    })
}));
(function (a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(window.jQuery)
    }
}(function (b) {
    var a = 0;
    b.ajaxTransport("iframe", function (c) {
        if (c.async && (c.type === "POST" || c.type === "GET")) {
            var e, d;
            return {
                send: function (f, g) {
                    e = b('<form style="display:none;"></form>');
                    e.attr("accept-charset", c.formAcceptCharset);
                    d = b('<iframe src="javascript:false;" name="iframe-transport-' + (a += 1) + '"></iframe>').bind("load", function () {
                        var h, i = b.isArray(c.paramName) ? c.paramName : [c.paramName];
                        d.unbind("load").bind("load", function () {
                            var j;
                            try {
                                j = d.contents();
                                if (!j.length || !j[0].firstChild) {
                                    throw new Error()
                                }
                            } catch (k) {
                                j = undefined
                            }
                            g(200, "success", {
                                iframe: j
                            });
                            b('<iframe src="javascript:false;"></iframe>').appendTo(e);
                            e.remove()
                        });
                        e.prop("target", d.prop("name")).prop("action", c.url).prop("method", c.type);
                        if (c.formData) {
                            b.each(c.formData, function (j, k) {
                                b('<input type="hidden"/>').prop("name", k.name).val(k.value).appendTo(e)
                            })
                        }
                        if (c.fileInput && c.fileInput.length && c.type === "POST") {
                            h = c.fileInput.clone();
                            c.fileInput.after(function (j) {
                                return h[j]
                            });
                            if (c.paramName) {
                                c.fileInput.each(function (j) {
                                    b(this).prop("name", i[j] || c.paramName)
                                })
                            }
                            e.append(c.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data")
                        }
                        e.submit();
                        if (h && h.length) {
                            c.fileInput.each(function (k, j) {
                                var l = b(h[k]);
                                b(j).prop("name", l.prop("name"));
                                l.replaceWith(j)
                            })
                        }
                    });
                    e.append(d).appendTo(document.body)
                },
                abort: function () {
                    if (d) {
                        d.unbind("load").prop("src", "javascript".concat(":false;"))
                    }
                    if (e) {
                        e.remove()
                    }
                }
            }
        }
    });
    b.ajaxSetup({
        converters: {
            "iframe text": function (c) {
                return b(c[0].body).text()
            },
            "iframe json": function (c) {
                return b.parseJSON(b(c[0].body).text())
            },
            "iframe html": function (c) {
                return b(c[0].body).html()
            },
            "iframe script": function (c) {
                return b.globalEval(b(c[0].body).text())
            }
        }
    })
}));
var Vaya = Vaya || {};
Vaya.FileUpload = (function () {
    var a = false;
    return {
        isUploading: a,
        register: function (h, f, d, b, g) {
            var j = "#progress";
            var c = function (k) {
                if (b) {
                    b()
                }
                $(j).show()
            };
            var e = function (k) {
                if (g) {
                    g()
                }
                if (j) {
                    $(j).hide()
                }
            };
            var i = function (m, l) {
                var k = parseInt(l.loaded / l.total * 100, 10);
                $(j + " .bar").css("width", k + "%")
            };
            h.fileupload({
                dataType: "html",
                pasteZone: null,
                dropZone: null,
                maxFileSize: 5000000,
                sequentialUploads: f,
                add: function (l, k) {
                    mixpanel.track("file_upload_submit");
                    if ( !! Vaya.Forms) {
                        Vaya.Forms.clearErrors()
                    }
                    k.submit()
                },
                start: c,
                stop: e,
                progressall: i,
                fail: function (l, k) {
                    var m = k.jqXHR || {};
                    mixpanel.track("file_upload_error", {
                        status: m.status
                    });
                    if (m.status == 400 || m.status == 406) {
                        alert(m.responseText)
                    } else {
                        alert("There was a problem adding photos. Please try again.")
                    }
                },
                done: d
            })
        }
    }
})();