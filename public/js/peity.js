/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/demo/peity-demo.js":
/***/ (function(module, exports) {

$(function () {
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    });

    $(".line").peity("line", {
        fill: '#1ab394',
        stroke: '#169c81'
    });

    $(".bar").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"]
    });

    $(".bar_dashboard").peity("bar", {
        fill: ["#1ab394", "#d7d7d7"],
        width: 100
    });

    var updatingChart = $(".updating-chart").peity("line", { fill: '#1ab394', stroke: '#169c81', width: 64 });

    setInterval(function () {
        var random = Math.round(Math.random() * 10);
        var values = updatingChart.text().split(",");
        values.shift();
        values.push(random);

        updatingChart.text(values.join(",")).change();
    }, 1000);
});

/***/ }),

/***/ "./resources/assets/js/peity.js":
/***/ (function(module, exports, __webpack_require__) {

// peity
__webpack_require__("./resources/assets/js/plugins/peity/jquery.peity.min.js");
__webpack_require__("./resources/assets/js/demo/peity-demo.js");

/***/ }),

/***/ "./resources/assets/js/plugins/peity/jquery.peity.min.js":
/***/ (function(module, exports) {

// Peity jQuery plugin version 2.0.3
// (c) 2014 Ben Pickles
//
// http://benpickles.github.io/peity
//
// Released under MIT license.
(function (e, q, h) {
    var o = function o(a, b) {
        var c = q.createElementNS("http://www.w3.org/2000/svg", a);e.each(b, function (a, b) {
            c.setAttribute(a, b);
        });return c;
    },
        t = "createElementNS" in q && o("svg", {}).createSVGRect,
        r = 1 / (window.devicePixelRatio || 1),
        j = e.fn.peity = function (a, b) {
        t && this.each(function () {
            var c = e(this),
                d = c.data("peity");if (d) a && (d.type = a), e.extend(d.opts, b);else {
                var f = j.defaults[a],
                    g = {};e.each(c.data(), function (a, b) {
                    a in f && (g[a] = b);
                });var h = e.extend({}, f, g, b),
                    d = new s(c, a, h);c.change(function () {
                    d.draw();
                }).data("peity", d);
            }d.draw();
        });return this;
    },
        s = function s(a, b, c) {
        this.$el = a;this.type = b;this.opts = c;
    },
        m = s.prototype;m.draw = function () {
        j.graphers[this.type].call(this, this.opts);
    };m.fill = function () {
        var a = this.opts.fill,
            b = a;e.isFunction(b) || (b = function b(_b, d) {
            return a[d % a.length];
        });return b;
    };m.prepare = function (a, b) {
        var c;this.svg ? c = e(this.svg).empty() : (this.svg = o("svg", { "class": "peity" }), this.$el.hide().after(this.svg), c = e(this.svg).data("peity", this));this.svg.setAttribute("height", b);this.svg.setAttribute("width", a);return c;
    };
    m.values = function () {
        return e.map(this.$el.text().split(this.opts.delimiter), function (a) {
            return parseFloat(a);
        });
    };j.defaults = {};j.graphers = {};j.register = function (a, b, c) {
        this.defaults[a] = b;this.graphers[a] = c;
    };j.register("pie", { delimiter: null, diameter: 16, fill: ["#ff9900", "#fff4dd", "#ffc66e"] }, function (a) {
        if (!a.delimiter) {
            var b = this.$el.text().match(/[^0-9\.]/);a.delimiter = b ? b[0] : ",";
        }b = this.values();if ("/" == a.delimiter) var c = b[0],
            b = [c, h.max(0, b[1] - c)];for (var d = 0, c = b.length, f = 0; d < c; d++) {
            f += b[d];
        }for (var a = this.prepare(a.width || a.diameter, a.height || a.diameter), d = a.width(), g = a.height(), a = d / 2, g = g / 2, p = h.min(a, g), e = h.PI, j = this.fill(), i = -e / 2, d = 0; d < c; d++) {
            var n = b[d],
                l = n / f,
                k;if (0 != l) {
                if (1 == l) k = o("circle", { cx: a, cy: g, r: p });else {
                    k = 2 * l * e;var l = i + k,
                        m = p * h.cos(i) + a,
                        i = p * h.sin(i) + g,
                        q = p * h.cos(l) + a,
                        r = p * h.sin(l) + g;k = o("path", { d: ["M", a, g, "L", m, i, "A", p, p, 0, k > e ? 1 : 0, 1, q, r, "Z"].join(" ") });i = l;
                }k.setAttribute("fill", j.call(this, n, d, b));this.svg.appendChild(k);
            }
        }
    });j.register("line", { delimiter: ",", fill: "#c6d9fd", height: 16, max: null,
        min: 0, stroke: "#4d89f9", strokeWidth: 1, width: 32 }, function (a) {
        var b = this.values();1 == b.length && b.push(b[0]);for (var c = h.max.apply(h, b.concat([a.max])), d = h.min.apply(h, b.concat([a.min])), f = this.prepare(a.width, a.height), g = f.width(), f = f.height() - a.strokeWidth, e = g / (b.length - 1), c = c - d, j = 0 == c ? f : f / c, m = f + d * j, c = [0, m], i = 0; i < b.length; i++) {
            c.push(i * e, f - j * (b[i] - d) + a.strokeWidth / 2);
        }c.push(g, m);b = o("polygon", { fill: a.fill, points: c.join(" ") });this.svg.appendChild(b);a.strokeWidth && (a = o("polyline", { fill: "transparent",
            points: c.slice(2, c.length - 2).join(" "), stroke: a.stroke, "stroke-width": a.strokeWidth, "stroke-linecap": "square" }), this.svg.appendChild(a));
    });j.register("bar", { delimiter: ",", fill: ["#4D89F9"], gap: 1, height: 16, max: null, min: 0, width: 32 }, function (a) {
        for (var b = this.values(), c = h.max.apply(h, b.concat([a.max])), d = h.min.apply(h, b.concat([a.min])), f = this.prepare(a.width, a.height), g = f.width(), f = f.height(), e = c - d, j = 0 == e ? 0 : f / e, a = a.gap, g = (g + a) / b.length, m = this.fill(), i = 0; i < b.length; i++) {
            var n = b[i],
                l = f - j * (n - d),
                k = j * n;if (0 == k) {
                if (k = r, 0 >= d && 0 < c || 0 == e) l -= r;
            } else 0 > k && (l += k, k = -k);n = o("rect", { fill: m.call(this, n, i, b), x: i * g, y: l, width: g - a, height: k });this.svg.appendChild(n);
        }
    });
})(jQuery, document, Math);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/peity.js");


/***/ })

/******/ });