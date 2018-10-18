var Weglot = function() {
    "use strict";

    function e() {
        return this.parentNode instanceof Element ? this.parentNode : null
    }
    if (!("parentElement" in Document.prototype && "parentElement" in Text.prototype && "parentElement" in Attr.prototype)) {
        try {
            Object.defineProperty(Attr.prototype, "parentElement", {
                configurable: !1,
                enumerable: !1,
                get: e
            })
        } catch (t) {
            Attr.prototype.parentElement = e
        }
        try {
            Object.defineProperty(Text.prototype, "parentElement", {
                configurable: !1,
                enumerable: !1,
                get: e
            })
        } catch (t) {
            Text.prototype.parentElement = e
        }
        try {
            Object.defineProperty(Element.prototype, "parentElement", {
                configurable: !1,
                enumerable: !1,
                get: e
            })
        } catch (t) {
            Element.prototype.parentElement = e
        }
        try {
            Object.defineProperty(Document.prototype, "parentElement", {
                configurable: !1,
                enumerable: !1,
                get: e
            })
        } catch (t) {
            Document.prototype.parentElement = e
        }
    }
    window.Prototype && delete Object.prototype.toJSON;
    var t, n = {
            "Array.prototype.includes": "includes" in Array.prototype,
            "Array.prototype.find": "find" in Array.prototype,
            "Array.from": "from" in Array && function() {
                try {
                    return !0
                } catch (e) {
                    return !1
                }
            }(),
            console: "console" in window,
            "Element.prototype.matches": "document" in window && "matches" in document.documentElement,
            "Element.prototype.cloneNode": "document" in window && "cloneNode" in document.documentElement && function() {
                var e = document.createElement("div"),
                    t = document.createElement("input");
                t.type = "radio", t.checked = !0, e.appendChild(t);
                var n, r = t.cloneNode(!1);
                try {
                    n = e.cloneNode()
                } catch (e) {}
                return !(!r.checked || n && 0 !== n.childNodes.length)
            }(),
            "Element.prototype.classList": "document" in window && "classList" in document.documentElement && "Element" in window && "classList" in Element.prototype && (t = document.createElement("span"), t.classList.add("a", "b"), t.classList.contains("b")),
            "Element.prototype.closest": "document" in window && "closest" in document.documentElement,
            "Element.prototype.placeholder": "document" in window && "placeholder" in document.createElement("input"),
            "Element.prototype.remove": "Element" in window && "remove" in Element.prototype,
            fetch: "fetch" in window,
            HTMLPictureElement: "HTMLPictureElement" in window || "picturefill" in window,
            "location.origin": "location" in window && "origin" in window.location,
            MutationObserver: "MutationObserver" in window,
            "Node.prototype.contains": document.contains,
            "Object.assign": "assign" in Object,
            "Object.keys": "keys" in Object && function() {
                return 2 === Object.keys(arguments).length
            }(1, 2) && function() {
                try {
                    return !0
                } catch (e) {
                    return !1
                }
            }(),
            "Object.values": "values" in Object,
            Promise: "Promise" in window,
            "String.prototype.includes": "includes" in String.prototype,
            URL: function(e) {
                try {
                    var t = new e.URL("http://example.com");
                    if ("href" in t && "searchParams" in t) {
                        var n = new URL("http://example.com");
                        if (n.search = "a=1&b=2", "http://example.com/?a=1&b=2" === n.href && (n.search = "", "http://example.com/" === n.href)) return !0
                    }
                    return !1
                } catch (e) {
                    return !1
                }
            }(window),
            WeakMap: function(e) {
                if (!("WeakMap" in window)) return !1;
                var t = {};
                return "test" === new WeakMap([
                    [t, "test"]
                ]).get(t)
            }(),
            "~viewport": "innerHeight" in window && "innerWidth" in window && "pageXOffset" in window && "pageYOffset" in window && "scrollX" in window && "scrollY" in window
        },
        r = function(e) {
            return function(t) {
                return console[e]("[Weglot] " + t)
            }
        },
        a = {
            warn: r("warn"),
            error: r("error"),
            log: r("log")
        },
        o = function(e, t) {
            return function(n, r) {
                try {
                    return n[e](r)
                } catch (e) {
                    o = r, a.error("The CSS selectors that you provided are incorrect: " + o)
                }
                var o;
                return t
            }
        },
        i = o("querySelectorAll", []),
        c = o("querySelector", null),
        u = (o("matches", null), function(e) {
            return document.getElementById(e)
        });

    function l(e) {
        e && e.remove()
    }
    var s = function(e) {
            return String(e).replace(/&nbsp;/g, "В ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        },
        d = function(e, t) {
            var n = e;
            return e.closest || (n = e.parentNode), null !== n.closest("[" + t + "]")
        };
    var f = function(e) {
            return new URL(location.href).searchParams.get(e)
        },
        g = function(e, t) {
            return e.classList.add(t)
        },
        p = function(e, t) {
            return e.classList.remove(t)
        };
    var h = function() {
            return /Google|facebook|bing|yahoo|Baidu|Yandex/.test(navigator.userAgent)
        },
        m = function() {
            var e, t = document.querySelector("base[href]"),
                n = function() {
                    return location.host.split(".")
                };
            if (t) try {
                e = new URL(t.href).host.split(".")
            } catch (t) {
                e = n()
            } else e = n();
            return e
        },
        v = function() {
            var e = m();
            return e.length > 2 ? e[0] : null
        },
        w = function(e, t) {
            for (var n in t) e.setAttribute(n, t[n])
        };

    function y(e, t) {
        var n = document.querySelector(e);
        if (n) w(n, t);
        else {
            var r = document.createElement("link");
            w(r, t), document.head.appendChild(r)
        }
    }
    var b = {},
        E = function(e, t) {
            if (b[e]) return b[e](t)
        };
    var S, L = "wglang",
        k = "wg-style-trans",
        N = "data-wg-notranslate",
        A = ["#text", "ABBR", "ACRONYM", "B", "BDO", "BIG", "CITE", "EM", "I", "KBD", "Q", "SMALL", "STRONG", "SUB", "SUP", "U"],
        O = "weglot:cache",
        C = ["exceptions", "dynamic", "searchForms", "excludePaths"],
        x = ["polyfillReady", "languageChanged", "initialized", "start", "switchersReady"],
        T = {
            live: !0,
            loadingBar: !0,
            hideSwitcher: !1,
            waitTransition: !0,
            autoSwitch: !1,
            translateImages: !0,
            subDomain: !1,
            translateSearch: !1,
            styleOpt: {
                fullname: !0,
                withname: !0,
                is_dropdown: !0,
                classF: ""
            },
            excludePaths: "",
            exceptions: "",
            dynamic: "",
            searchForms: "",
            cache: !1
        };

    function j(e) {
        if (S = Object.assign({}, {
                live: !0,
                dynamic: Je.dynamic
            }, e), Object.assign(_, T, S), C.forEach(function(e) {
                var t, n;
                n = e, (t = S).hasOwnProperty(n) && (t[n].length > 0 && T[n].length > 0 ? _[n] += "," + T[n] : _[n] += T[n])
            }), _.cache && "dashboard.weglot.com" === location.hostname && (_.cache = !1), !_.api_key || !_.originalLanguage || !_.destinationLanguages) throw new Error("You have to provide at least: api_key, originalLanguage, destinationLanguages")
    }
    var M, _ = {},
        P = function(e) {
            if (e.status >= 200 && e.status < 300) return e;
            throw new Error(e.statusText)
        },
        B = function(e) {
            if (e.to_words) return e;
            throw new Error("No answer from Weglot's server")
        },
        I = function(e, t) {
            return fetch("https://api.weglot.com/translate?api_key=" + _.api_key, {
                method: "POST",
                body: (n = JSON.stringify(Object.assign({
                    request_url: (r = document.querySelector("link[rel='canonical'][href]"), r ? r.href : window.location.origin)
                }, e)), n.replace(/[\u007F-\uFFFF]/g, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).substr(-4)
                }))
            }).then(P).then(function(e) {
                return e.json()
            }).then(B).then(t).catch(function(e) {
                return a.error("There has been an error with the translation: " + e)
            });
            var n, r
        },
        D = function() {
            var e, t, n = "wg-test";
            try {
                return (e = localStorage).setItem(n, n), t = e.getItem(n) === n, e.removeItem(n), t && e
            } catch (e) {
                return null
            }
        }(),
        H = !1;
    if (D && D.getItem(O)) try {
        M = JSON.parse(D.getItem(O)), H = !0
    } catch (e) {
        M = {}
    } else M = {};
    var R = function(e) {
            return M[e] ? (M[e].lastSeen = (new Date).getTime(), M[e]) : null
        },
        q = function(e, t, n, r) {
            var a, o, i = R(e);
            i ? (i[r] = n, i.t = t) : M[e] = ((a = {})[r] = n, a.t = t, a), _.cache && D && (z(), void 0 === o && (o = 1e3))
        },
        z = function() {
            return new Promise(function(e) {
                D.setItem(O, JSON.stringify(M)), e(!0)
            })
        },
        W = function(e, t) {
            var n = [],
                r = [],
                a = [];
            return e.forEach(function(e) {
                var o, i, c, u = (o = e.w, i = t, (c = R(o)) && c[i] ? c[i] : null);
                u ? (n.push(u), r.push(e.w)) : a.push(e)
            }), {
                cachedJsonObj: {
                    to_words: n,
                    from_words: r
                },
                wordsToRequest: a
            }
        };
    var F = function(e, t) {
        var n, r, a, o = e.l_to,
            i = function(e) {
                for (var t = {}, n = [], r = e.length, a = 0, o = 0; o < r; o++) {
                    var i = e[o].w;
                    1 !== t[i] && (t[i] = 1, n[a++] = e[o])
                }
                return n
            }(e.words),
            c = W(i, o),
            u = c.wordsToRequest,
            l = c.cachedJsonObj;
        return H && (n = o, r = (new Date).getTime(), a = Object.keys(M).filter(function(e) {
            return M[e].lastSeen + 216e5 > r
        }).map(function(e) {
            return {
                t: M[e].t,
                w: e
            }
        }), new Promise(function(e) {
            return I({
                l_from: _.originalLanguage,
                l_to: n,
                words: a
            }, function(e) {
                e && (H = !1, e.to_words.forEach(function(e, t) {
                    q(a[t].w, a[t].t, e, n)
                }))
            }).then(function() {
                e()
            })
        })), u.length ? (l.to_words.length && t(l), e.words = u, I(e, t).then(function(e) {
            if (e) return !0
        })) : new Promise(function(e) {
            t(l), e(!0)
        })
    };

    function U(e) {
        return e === _.originalLanguage ? (ze.nodes.forEach(function(e, t) {
            e.setter(ze.payload[t].w, !0)
        }), new Promise(function(e) {
            return e(!0)
        })) : J(ze, e, !0)
    }

    function J(e, t, n) {
        var r = {
            l_from: _.originalLanguage,
            l_to: t,
            words: e.payload
        };
        return n && (r.title = document.title), F(r, function(n) {
            return e.nodes.forEach(function(r, a) {
                var o = n.to_words[n.from_words.indexOf(s(e.payload[a].w))];
                o && (q(e.payload[a].w, e.payload[a].t, o, t), r.setter(o, !1, e.payload[a].w))
            }), n
        })
    }

    function Y() {
        var e, t, n;
        e = "body * { color: transparent!important; }", t = k, n = document.createElement("style"), u(t) && l(u(t)), n.id = t, n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), document.head.appendChild(n)
    }

    function G() {
        l(u(k))
    }

    function V() {
        return _.originalLanguage.concat("," + _.destinationLanguages).split(",")
    }

    function K(e) {
        D && e && D.setItem(L, e.substring(0, 2))
    }

    function X() {
        if (D) {
            var e = D.getItem(L);
            try {
                e = JSON.parse(e)
            } catch (e) {}
            return e && V().includes(e) ? e : null
        }
        return null
    }
    var $ = {
            af: "Afrikaans",
            am: "бЉ б€›б€­бЉ›",
            ar: "Ш§Щ„Ш№Ш±ШЁЩЉШ©",
            az: "AzЙ™rbaycanca",
            ba: "Р‘Р°С€ТЎРѕСЂС‚СЃР°",
            be: "Р‘РµР»Р°СЂСѓСЃРєР°СЏ",
            bg: "Р‘СЉР»РіР°СЂСЃРєРё",
            bn: "а¦¬а¦ѕа¦‚а¦Іа¦ѕ",
            bs: "Bosanski",
            ca: "CatalГ ",
            co: "Corsu",
            cs: "ДЊeЕЎtina",
            cy: "Cymraeg",
            da: "Dansk",
            de: "Deutsch",
            el: "О•О»О»О·ОЅО№ОєО¬",
            en: "English",
            eo: "Esperanto",
            es: "EspaГ±ol",
            et: "Eesti",
            eu: "Euskara",
            fa: "ЩЃШ§Ш±ШіЫЊ",
            fi: "Suomi",
            fj: "Na Vosa Vaka-Viti",
            fl: "Filipino",
            fr: "FranГ§ais",
            fy: "Frysk",
            ga: "Gaeilge",
            gd: "GГ idhlig",
            gl: "Galego",
            gu: "аЄ—а«ЃаЄњаЄ°аЄѕаЄ¤а«Ђ",
            ha: "Щ‡ЩЋЩ€ЩЏШіЩЋ",
            he: "ЧўЧ‘ЧЁЧ™ЧЄ",
            hi: "а¤№а¤їа¤ЁаҐЌа¤¦аҐЂ",
            hr: "Hrvatski",
            ht: "KreyГІl Ayisyen",
            hu: "Magyar",
            hw: "Hawaiann",
            hy: "ХЂХЎХµХҐЦЂХҐХ¶",
            id: "Bahasa Indonesia",
            ig: "Igbo",
            is: "ГЌslenska",
            it: "Italiano",
            ja: "ж—Ґжњ¬иЄћ",
            jv: "Basa Jawa",
            ka: "бѓҐбѓђбѓ бѓ—бѓЈбѓљбѓ",
            kk: "ТљР°Р·Р°Т›С€Р°",
            km: "бћ—бћ¶бћџбћ¶бћЃбџ’бћбџ‚бћљ",
            kn: "аІ•аІЁаіЌаІЁаІЎ",
            ko: "н•њкµ­м–ґ",
            ku: "KurdГ®",
            ky: "РљС‹СЂРіС‹Р·С‡Р°",
            la: "Latina",
            lb: "LГ«tzebuergesch",
            lo: "аєћаєІаєЄаєІаєҐаєІає§",
            lt: "LietuviЕі",
            lv: "LatvieЕЎu",
            mg: "Malagasy",
            mi: "MДЃori",
            mk: "РњР°РєРµРґРѕРЅСЃРєРё",
            ml: "аґ®аґІаґЇаґѕаґіаґ‚",
            mn: "РњРѕРЅРіРѕР»",
            mr: "а¤®а¤°а¤ѕа¤ аҐЂ",
            ms: "Bahasa Melayu",
            mt: "Malti",
            my: "бЂ™бЂјбЂ”бЂєбЂ™бЂ¬бЂбЂ¬бЂћбЂ¬",
            ne: "а¤ЁаҐ‡а¤Єа¤ѕа¤ІаҐЂ",
            nl: "Nederlands",
            no: "Norsk",
            ny: "Chichewa",
            pa: "аЁЄа©°аЁњаЁѕаЁ¬а©Ђ",
            pl: "Polski",
            ps: "ЩѕЪљШЄЩ€",
            pt: "PortuguГЄs",
            ro: "RomГўnДѓ",
            ru: "Р СѓСЃСЃРєРёР№",
            sd: "ШіЩ†ЪЊЩЉвЂЋ",
            si: "а·ѓа·’а¶‚а·„а¶Ѕ",
            sk: "SlovenДЌina",
            sl: "SlovenЕЎДЌina",
            sm: "Gagana SДЃmoa",
            sn: "ChiShona",
            so: "Soomaaliga",
            sq: "Shqip",
            sr: "РЎСЂРїСЃРєРё",
            st: "Sesotho",
            su: "Basa Sunda",
            sv: "Svenska",
            sw: "Kiswahili",
            ta: "а®¤а®®а®їа®ґаЇЌ",
            te: "а°¤а±†а°Іа±Ѓа°—а±Ѓ",
            tg: "РўРѕТ·РёРєУЈ",
            th: "аё аёІаё©аёІа№„аё—аёў",
            tl: "Tagalog",
            to: "faka Tonga",
            tr: "TГјrkГ§e",
            tt: "РўР°С‚Р°СЂС‡Р°",
            tw: "дё­ж–‡ (з№Ѓй«”)",
            ty: "Reo MДЃвЂ™ohi",
            uk: "РЈРєСЂР°С—РЅСЃСЊРєР°",
            ur: "Ш§Ш±ШЇЩ€",
            uz: "OвЂzbek",
            vi: "Tiбєїng Viб»‡t",
            xh: "isiXhosa",
            yi: "Ч™Ч™ЦґЧ“Ч™Ч©",
            yo: "YorГ№bГЎ",
            zh: "дё­ж–‡ (з®ЂдЅ“)",
            zu: "isiZulu"
        },
        Q = function(e) {
            return $[e]
        },
        Z = function() {
            if (_.subDomain) {
                var e = v();
                return e && V().includes(e) ? e : _.originalLanguage
            }
            var t = X();
            return t || _.originalLanguage
        },
        ee = function() {
            var e = V(),
                t = function(e) {
                    return e.substring(0, 2)
                },
                n = navigator.languages;
            if (n) {
                for (var r, a = 0, o = n; a < o.length; a += 1) {
                    var i = o[a];
                    if (e.includes(t(i))) {
                        r = t(i);
                        break
                    }
                }
                return r || null
            }
            var c = navigator.language || navigator.userLanguage || "";
            return e.includes(t(c)) ? t(c) : null
        };

    function te(e) {
        if (e.parentNode.previousSibling && e.parentNode.previousSibling.firstChild) {
            var t = e.parentNode.previousSibling.getAttribute("data-l"),
                n = e.parentNode.previousSibling.firstChild.innerHTML,
                r = e.parentNode.previousSibling.getAttribute("class").replace(/\s\w{2}$/, "").replace("wgcurrent wg-li ", "");
            e.parentNode.previousSibling.setAttribute("data-l", e.getAttribute("data-l")), e.parentNode.previousSibling.setAttribute("class", "wgcurrent wg-li " + r + " " + e.getAttribute("data-l")), e.parentNode.previousSibling.firstChild.innerHTML = e.firstChild.innerHTML, e.setAttribute("data-l", t), e.setAttribute("class", "wg-li " + r + " " + t), e.setAttribute("id", "wg-" + t), e.firstChild.innerHTML = n
        }
    }
    var ne = function(e, t, n) {
            void 0 === e && (e = !1), void 0 === t && (t = _.styleOpt), void 0 === n && (n = !1);
            var r = t.fullname,
                a = t.withname,
                o = t.is_dropdown,
                i = t.classF,
                c = o ? "wg-drop " : "wg-list ",
                u = document.createElement("div");
            g(u, "weglot-container"), n && g(u, "weglot_here"), e && g(u, "wg-default");
            var l = document.createElement("aside");
            l.setAttribute("data-wg-notranslate", ""), l.className = "weglot_switcher " + c + " country-selector closed", l.onclick = function() {
                return function(e) {
                    e.className = e.className.includes("country-selector closed") ? e.className.replace("country-selector closed", "country-selector") : e.className.replace("country-selector", "country-selector closed");
                    var t = document.body,
                        n = document.documentElement,
                        r = Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight),
                        a = function(e) {
                            for (var t = 0; e;) t += e.offsetTop || 0, e = e.offsetParent;
                            return t
                        }(e),
                        o = getComputedStyle(e).getPropertyValue("position");
                    return ("fixed" !== o && a > r / 2 || "fixed" === o && a > 100) && g(e, "weg-openup"), !1
                }(l)
            }, u.appendChild(l);
            var s = Z(),
                d = V().filter(function(e) {
                    return e !== s
                }),
                f = document.createElement("div");
            f.innerHTML = '<a href="javascript:%20void(0);">' + (a ? r ? Q(s) : s.toUpperCase() : "") + "</a>", f.className = "wgcurrent wg-li " + i + " " + s, f.setAttribute("data-l", s);
            var p = document.createElement("ul");
            return d.forEach(function(e) {
                if (e !== s) {
                    var t = document.createElement("li");
                    t.className = "wg-li " + i + " " + e, t.innerHTML = '<a href="javascript:%20void(0);">' + (a ? r ? Q(e) : e.toUpperCase() : "") + "</a>", t.setAttribute("data-l", e), t.id = "wg-" + e, t.onclick = function() {
                        var e = this.getAttribute("data-l");
                        Ie(e)
                    }, p.appendChild(t)
                }
            }), l.appendChild(f), l.appendChild(p), u
        },
        re = [];

    function ae() {
        var e, t;
        e = document.querySelectorAll("#weglot_here, .weglot_here");
        var n = !1;
        if (e.length > 0)
            for (t = e.length - 1; t >= 0; t--) e[t].parentNode.insertBefore(ne(!1, _.styleOpt, !0), e[t]), l(e[t]), n = !0;
        _.switchers && _.switchers.length > 0 && _.switchers.forEach(function(e, t) {
            (function(e, t) {
                var n = ne(!1, e.styleOpt);
                n.setAttribute("style", e.containerCss), n.setAttribute("data-switcher-id", t);
                var r = parseInt(t, 10) + 1;
                n.id = "weglot-switcher-" + r, n.setAttribute("data-switcher-style-opt", JSON.stringify(e.styleOpt));
                var a = c(document, e.target);
                if (!a) return !1;
                if (e.sibling) try {
                    a.insertBefore(n, c(document, e.sibling))
                } catch (e) {
                    return !1
                } else a.insertBefore(n, null);
                re[t] ? re[t] = e : re.push(e);
                for (var o = document.querySelectorAll(".weglot-container:empty"), i = 0; i < o.length; i++) l(o[i]);
                return !0
            })(e, t) && (n = !0)
        }), document.querySelector(".weglot-container.wg-default") && (n = !0), n || document.body.appendChild(ne(!0))
    }
    var oe = function(e, t, n, r) {
        new MutationObserver(function(e) {
            r(e.filter(n))
        }).observe(e, t)
    };
    var ie = function(e) {
            return e && ce(e.textContent) && !e.textContent.includes("BESbswy") && !["SCRIPT", "STYLE", "NOSCRIPT"].includes((t = e).parentElement && t.parentElement.nodeName.toUpperCase()) && ! function(e) {
                try {
                    var t = JSON.parse(e);
                    return !(!t || "object" != typeof t)
                } catch (e) {
                    return !1
                }
            }(e.parentElement && e.parentElement.innerHTML || e.textContent);
            var t
        },
        ce = function(e) {
            return ue(e) && !(+(t = e.trim()) == +t);
            var t
        },
        ue = function(e) {
            return e && "" !== e.trim()
        },
        le = function(e) {
            for (var t, n = 3 === (t = e).nodeType && ie(t) ? 1 : 0, r = 0, a = e.childNodes; r < a.length; r += 1) {
                var o = a[r];
                n += le(o)
            }
            return n
        },
        se = function(e) {
            return ie(e) && A.includes(e.nodeName)
        },
        de = function(e, t) {
            for (var n, r = [e], a = e; se(a = a.parentNode);)
                if (se(a.nextSibling)) {
                    r = [a];
                    break
                }
            for (; se(n = r[r.length - 1].nextSibling);) {
                r.push(n);
                for (var o = 0; o < le(n); o++) t.nextNode()
            }
            if (r.length > 1) {
                var i = r[0].parentNode;
                if (i.childNodes.length > r.length) {
                    var c = function(e, t) {
                        var n = document.createElement(t);
                        e[0].parentNode.insertBefore(n, e[0]);
                        for (var r = 0, a = e; r < a.length; r += 1) {
                            var o = a[r];
                            n.appendChild(o)
                        }
                        return n
                    }(r, "span");
                    return [c, c.innerHTML]
                }
                return [i, r.map(function(e) {
                    return e.outerHTML || e.textContent
                }).join("")]
            }
        },
        fe = new WeakMap,
        ge = function(e) {
            return fe.get(e)
        },
        pe = function(e) {
            return ue(e.src) && e.src.indexOf("data:image") < 0 && (e.src.indexOf(".jpg") > 0 || e.src.indexOf(".png") > 0 || e.src.indexOf(".jpeg") > 0 || e.src.indexOf(".gif") > 0)
        },
        he = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
            var r = Array.from(e);
            return t.forEach(function(e) {
                return r = r.filter(e)
            }), r
        },
        me = function(e) {
            return function(t) {
                return t.getAttribute(e)
            }
        },
        ve = function(e) {
            return function(t) {
                return function(n) {
                    return t.setAttribute(e, n)
                }
            }
        },
        we = function(e) {
            return function(t) {
                return e.textContent = t
            }
        },
        ye = function(e) {
            return function(t) {
                return e.innerHTML = t
            }
        },
        be = function(e, t) {
            var n = t.join(",");
            return e.childElementCount > 0 ? e.querySelectorAll(n) : e.matches(n) ? [e] : []
        },
        Ee = function(e) {
            var t = function(e) {
                    for (var t, n, r = [], a = [], o = document.createTreeWalker(e, 4, null, !1); t = o.nextNode();) ie(t) && (_.api_key && _.api_key.length >= 36 && (n = de(t, o)) ? (a.push(n[0]), fe.set(n[0], n[1])) : (r.push(t), fe.set(t, t.textContent)));
                    return {
                        textNodes: r,
                        mergeNodes: a
                    }
                }(e),
                n = t.textNodes,
                r = t.mergeNodes,
                a = [{
                    nodeList: n,
                    items: [{
                        t: 1,
                        w: ge,
                        setter: we
                    }]
                }, {
                    nodeList: r,
                    items: [{
                        t: 1,
                        w: ge,
                        setter: ye
                    }]
                }, {
                    nodeList: be(e, ["meta[name='description']", "meta[property='og:title']", "meta[property='og:description']", "meta[property='og:site_name']", "meta[name='twitter:title']", "meta[name='twitter:description']", "meta[itemprop='description']", "meta[itemprop='name']"]),
                    items: [{
                        t: 4,
                        w: me("content"),
                        setter: ve("content")
                    }]
                }, {
                    nodeList: he(be(e, ["input[placeholder]", "textarea[placeholder]"]), function(e) {
                        return "hidden" !== e.type
                    }),
                    items: [{
                        t: 3,
                        w: me("placeholder"),
                        setter: ve("placeholder")
                    }]
                }, {
                    nodeList: be(e, ["input[type='submit']", "input[type='button']", "button"]),
                    items: [{
                        t: 2,
                        w: me("value"),
                        setter: ve("value")
                    }]
                }],
                o = he(be(e, ["img"]), pe),
                i = [{
                    t: 7,
                    w: me("alt"),
                    setter: ve("alt")
                }];
            return _.translateImages && (i = i.concat.apply(i, [{
                t: 6,
                w: function(e) {
                    return e.currentSrc ? e.currentSrc.split("?")[0] : e.src.split("?")[0]
                },
                setter: function(e) {
                    return function(t, n, r) {
                        n ? e.isChanged && (e.src = t, e.getAttribute("wgsrcset") && (e.srcset = e.getAttribute("wgsrcset"), e.setAttribute("wgsrcset", ""))) : r !== t && (e.src = t, e.srcset && (e.setAttribute("wgsrcset", e.srcset), e.srcset = "", e.isChanged = !0))
                    }
                }
            }])), a.push({
                nodeList: o,
                items: i
            }), a
        },
        Se = function(e) {
            return e && "" !== e.trim()
        };

    function Le(e) {
        var t, n, r = e.querySelectorAll ? e : e.parentElement;
        if (r) return function(e) {
            if (_.exceptions) {
                for (var t = 0, n = e.querySelectorAll("[" + N + "=manual]"); t < n.length; t += 1) {
                    var r = n[t];
                    r.removeAttribute(N)
                }
                var a = i(e, _.exceptions);
                if (a)
                    for (var o = 0, c = a; o < c.length; o += 1)(r = c[o]).setAttribute(N, "manual")
            }
        }(r), t = [], n = [], Ee(r).forEach(function(e) {
            for (var r = 0, a = he(e.nodeList, function(e) {
                    return !d(e, N)
                }); r < a.length; r += 1)
                for (var o = a[r], i = 0, c = e.items; i < c.length; i += 1) {
                    var u = c[i],
                        l = u.w(o);
                    Se(l) && (t.push({
                        node: o,
                        setter: u.setter(o)
                    }), n.push({
                        t: u.t,
                        w: l
                    }))
                }
        }), {
            nodes: t,
            payload: n
        }
    }
    var ke, Ne = function(e, t, n) {
            var r = R(t);
            if (r && t !== r[n]) return !0;
            var a, o, i = ze.nodes.map(function(e) {
                    return e.node
                }).includes(e),
                c = _.originalLanguage !== n && (a = t, o = n, Object.values(M).map(function(e) {
                    return e[o]
                }).includes(a));
            return !(!i || r || c) || !i && !c
        },
        Ae = function(e) {
            var t = e;
            return e.closest || (t = e.parentElement), null !== t && null !== t.closest(_.dynamic)
        },
        Oe = function(e) {
            var t = e.nodes,
                n = e.payload,
                r = Z();
            r !== _.originalLanguage && J({
                payload: n,
                nodes: t
            }, r, !1), De({
                payload: ze.payload.concat(n),
                nodes: ze.nodes.concat(t)
            })
        },
        Ce = function() {
            oe(document.body, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0
            }, function(e) {
                return e.addedNodes.length || "characterData" === e.type && Ae(e.target) || "attributes" === e.type && Ae(e.target)
            }, function(e) {
                return new Promise(function(t) {
                    ! function(e) {
                        for (var t = [], n = [], r = Z(), a = [], o = function(e) {
                                var o = Le(e);
                                o && o.nodes.forEach(function(e, i) {
                                    Ae(e.node) && !a.includes(e.node) && Ne(e.node, o.payload[i].w, r) && (t.push(o.payload[i]), n.push(e), a.push(e.node))
                                })
                            }, i = 0, c = e; i < c.length; i += 1) {
                            var u = c[i];
                            switch (u.type) {
                                case "characterData":
                                case "attributes":
                                    o(u.target);
                                    break;
                                case "childList":
                                    for (var l = 0, s = u.addedNodes; l < s.length; l += 1) o(s[l])
                            }
                        }
                        n.length > 0 && Oe({
                            payload: t,
                            nodes: n
                        })
                    }(e), t()
                })
            })
        },
        xe = [];

    function Te(e, t, n) {
        return "function" != typeof t ? (a.error("You should provide a callback function as second argument"), !1) : x.indexOf(e) < 0 ? (a.error("No Weglot event is named " + e), !1) : (xe.push({
            name: e,
            callback: t,
            internal: n
        }), !0)
    }

    function je(e) {
        for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
        for (var r = 0, a = xe.filter(function(t) {
                return t.name === e
            }); r < a.length; r += 1) {
            var o = a[r];
            o.callback.apply(o, t)
        }
    }
    var Me = function(e) {
            return document.querySelector('link[hreflang="' + e + '"]')
        },
        _e = function(e) {
            return (void 0 !== ke ? ke : ke = function() {
                try {
                    var e = !0;
                    return _.destinationLanguages.split(",").forEach(function(t) {
                        new URL(Me(t).href).hostname.split(".")[0] !== t && (e = !1)
                    }), null === Me(_.originalLanguage) && (e = !1), e
                } catch (e) {
                    return !1
                }
            }()) ? Me(e).href : function(e) {
                var t = e === _.originalLanguage ? "" : e,
                    n = m();
                n.length > 2 ? n[0] = t : n.unshift(t);
                var r = n.filter(function(e) {
                    return e.length
                }).join(".");
                return location.protocol + "//" + r + location.pathname
            }(e)
        };

    function Pe() {
        var e = u("wg_progress").firstElementChild,
            t = e.getAttribute("aria-valuenow"),
            n = (parseInt(t) + (4 * Math.random() + 2)).toString();

        e.setAttribute("aria-valuenow", n), e.style.width = n + "%"
    }
    var Be = function(e) {
            if (_.loadingBar) var t = ((n = document.createElement("div")).className = "wg-progress", n.id = "wg_progress", n.innerHTML = '<div class="wg-progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0"></div>', document.body.appendChild(n), setInterval(Pe, 100));

            console.log(document.body.appendChild(n));
            var n, r = Z();
            K(e),
                function(e) {
                    for (var t = 0, n = document.getElementsByClassName("wg-li " + e); t < n.length; t += 1) te(n[t])
                }(e), U(e).then(function(n) {
                    _.loadingBar && (clearInterval(t), l(u("wg_progress"))), G(), n ? (E("onPageLanguageSet", e), document.documentElement.setAttribute("lang", e), je("languageChanged", e, r)) : D && D.removeItem(L)
                })
        },
        Ie = function(e) {
            V().includes(e) ? _.subDomain ? location.replace(_e(e)) : Be(e) : a.warn(e + " isn't a language you have added")
        },
        De = function(e) {
            ze = e
        };

    function He(e) {
        var t, n = !0,
            r = _.hideSwitcher,
            o = f("lang");
        if (_.subDomain) {
            n = !1;
            var i = v();
            if (t = i && V().includes(i) ? i : _.originalLanguage, _.autoSwitch && !h() && t !== ee()) return void Ie(ee())
        } else if (o && V().includes(o)) t = o;
        else if (X() && V().includes(X())) t = X();
        else if (_.autoSwitch && "wg_ac5692" !== _.api_key.substring(0, 9) && !h()) {
            var c = ee();
            c && (t = c)
        }
        var u = t && t !== _.originalLanguage && document.documentElement.getAttribute("data-wg-translated") !== t;
        u && _.waitTransition && Y();
        var l = function() {
            if (_.live || E("startWhen") || e) try {
                ! function(e, t, n, r) {
                    var a = function() {
                        var e = _.destinationLanguages.split(",");
                        e.push(_.originalLanguage);
                        var t = !1,
                            n = {};
                        return e.forEach(function(e) {
                            for (var r, a = document.querySelectorAll(["a[href='#Weglot-" + (r = e) + "']", "a[href$='change-language.weglot.com/" + r + "']"].join(",")), o = 0, i = a; o < i.length; o += 1) {
                                var c = i[o];
                                c.setAttribute("data-wg-notranslate", ""), g(c, "weglot-link"), e === Z() && g(c, "weglot-link--active"), _.subDomain ? c.setAttribute("href", _e(e)) : (c.setAttribute("href", "#"), c.onclick = function(t) {
                                    t.preventDefault(), Ie(e)
                                })
                            }
                            n[e] = a, 0 === a.length && (t = !0)
                        }), Te("languageChanged", function(e) {
                            Object.keys(n).forEach(function(t) {
                                if (t === e)
                                    for (var r = 0, a = n[t]; r < a.length; r += 1) {
                                        var o = a[r];
                                        g(o, "weglot-link--active")
                                    } else
                                        for (var i = 0, c = n[t]; i < c.length; i += 1) {
                                            var u = c[i];
                                            p(u, "weglot-link--active")
                                        }
                            })
                        }, !0), t
                    }();
                    De(Le(document.documentElement)), a && !n && ae();
                    je("switchersReady", e), e && t && K(e);
                    r && Be(e);
                    _.dynamic.length && Ce()
                }(t, n, r, u)
            } catch (e) {
                G(), a.error("There has been an error initializing " + e)
            } else G()
        };
        _.delayStart ? Te("start", l, !0) : "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", l) : l(), Je.initialized = !0, je("initialized", t)
    }
    Te("initialized", function(e) {
        _.subDomain && document.addEventListener("DOMContentLoaded", function() {
            V().forEach(function(e) {
                var t, n;
                t = e, n = _e(e), y("link[rel='alternate'][hreflang='" + t + "'][href]", {
                    rel: "alternate",
                    hreflang: t,
                    href: n
                })
            }), y("link[rel='canonical'][href]", {
                rel: "canonical",
                href: _e(e)
            })
        })
    }, !0);
    var Re, qe, ze = {},
        We = !1;
    Re = function() {
        We = !0, je("polyfillReady")
    }, 0 === (qe = function(e) {
        var t = [];
        for (var n in e) e[n] || t.push(n);
        return t
    }(n)).length ? Re() : function(e, t, n) {
        var r = !1,
            a = document.createElement("script");
        a.type = "text/javascript", a.onreadystatechange = function() {
            r || "complete" === a.readyState && o()
        };
        var o = function() {
            r || (r = !0, t(n))
        };
        a.onload = o, a.onerror = function() {
            r || (r = !0, t(n))
        }, a.src = e, document.head.appendChild(a)
    }("https://cdn.polyfill.io/v2/polyfill.min.js?features=" + qe.join(",") + "&flags=always,gated&ua=chrome/50&rum=0", Re);
    var Fe, Ue, Je = {
        initialized: !1,
        options: _,
        dynamic: "",
        switchTo: Ie,
        setup: function(e) {
            var t = function() {
                j(e),
                    function() {
                        if (_.excludePaths.length > 0) {
                            var e = !1;
                            return _.excludePaths.split(",").some(function(t) {
                                return e = new RegExp(t).test(location.pathname)
                            }), e
                        }
                        return !1
                    }() || (E("onWeglotSetup"), Je.initialized || He(!1))
            };
            We ? t() : Te("polyfillReady", t, !0)
        },
        on: function(e, t) {
            return Te(e, t, !1)
        },
        off: function(e, t) {
            var n, r = !1,
                a = function(t) {
                    return xe[t].name === e && !xe[t].internal
                };
            n = "function" == typeof t ? function(e) {
                return a(e) && xe[e].callback === t
            } : function(e) {
                return a(e)
            };
            for (var o = xe.length - 1; o >= 0; o--) n(o) && (xe.splice(o, 1), r = !0);
            return r
        },
        getStoredLang: X,
        getLanguageName: Q,
        getCurrentLang: Z,
        getBestAvailableLanguage: ee
    };
    return Fe = "https://cdn.weglot.com/weglot.min.css", (Ue = document.createElement("link")).rel = "stylesheet", Ue.type = "text/css", Ue.href = Fe, document.head.appendChild(Ue), Je
}();