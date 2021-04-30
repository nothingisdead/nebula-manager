function ba(a, b, c, d) {
    return new (c || (c = Promise))(function(e, f) {
        function g(a1) {
            try {
                k(d.next(a1));
            } catch (n) {
                f(n);
            }
        }
        function h(a1) {
            try {
                k(d["throw"](a1));
            } catch (n) {
                f(n);
            }
        }
        function k(a1) {
            a1.done ? e(a1.value) : new c(function(b1) {
                b1(a1.value);
            }).then(g, h);
        }
        k((d = d.apply(a, b || [])).next());
    });
}
function ca(a, b) {
    function c(a1) {
        return function(b1) {
            return d([
                a1,
                b1
            ]);
        };
    }
    function d(c1) {
        if (f) throw new TypeError("Generator is already executing.");
        for(; e;)try {
            if (f = 1, g && (h = c1[0] & 2 ? g["return"] : c1[0] ? g["throw"] || ((h = g["return"]) && h.call(g), 0) : g.next) && !(h = h.call(g, c1[1])).done) return h;
            if (g = 0, h) c1 = [
                c1[0] & 2,
                h.value
            ];
            switch(c1[0]){
                case 0:
                case 1:
                    h = c1;
                    break;
                case 4:
                    return e.label++, {
                        value: c1[1],
                        done: !1
                    };
                case 5:
                    e.label++;
                    g = c1[1];
                    c1 = [
                        0
                    ];
                    continue;
                case 7:
                    c1 = e.ops.pop();
                    e.trys.pop();
                    continue;
                default:
                    if (!(h = e.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c1[0] || 2 === c1[0])) {
                        e = 0;
                        continue;
                    }
                    if (3 === c1[0] && (!h || c1[1] > h[0] && c1[1] < h[3])) e.label = c1[1];
                    else if (6 === c1[0] && e.label < h[1]) e.label = h[1], h = c1;
                    else if (h && e.label < h[2]) e.label = h[2], e.ops.push(c1);
                    else {
                        h[2] && e.ops.pop();
                        e.trys.pop();
                        continue;
                    }
            }
            c1 = b.call(a, e);
        } catch (n) {
            c1 = [
                6,
                n
            ], g = 0;
        } finally{
            f = h = 0;
        }
        if (c1[0] & 5) throw c1[1];
        return {
            value: c1[0] ? c1[1] : void 0,
            done: !0
        };
    }
    var e = {
        label: 0,
        sent: function() {
            if (h[0] & 1) throw h[1];
            return h[1];
        },
        trys: [],
        ops: []
    }, f, g, h, k;
    return k = {
        next: c(0),
        "throw": c(1),
        "return": c(2)
    }, "function" === typeof Symbol && (k[Symbol.iterator] = function() {
        return this;
    }), k;
}
function da(a) {
    var b = "function" === typeof Symbol && a[Symbol.iterator], c = 0;
    return b ? b.call(a) : {
        next: function() {
            a && c >= a.length && (a = void 0);
            return {
                value: a && a[c++],
                done: !a
            };
        }
    };
}
function ea(a, b) {
    var c = "function" === typeof Symbol && a[Symbol.iterator];
    if (!c) return a;
    a = c.call(a);
    var d, e = [];
    try {
        for(; ((void 0) === b || 0 < b--) && !(d = a.next()).done;)e.push(d.value);
    } catch (g) {
        var f = {
            error: g
        };
    } finally{
        try {
            d && !d.done && (c = a["return"]) && c.call(a);
        } finally{
            if (f) throw f.error;
        }
    }
    return e;
}
function ia() {
    for(var a = [], b = 0; b < arguments.length; b++)a = a.concat(ea(arguments[b]));
    return a;
}
var l = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {
};
function t(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a;
}
function u(a, b) {
    return b = {
        exports: {
        }
    }, a(b, b.exports), b.exports;
}
var w = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.constants = {
        O_RDONLY: 0,
        O_WRONLY: 1,
        O_RDWR: 2,
        S_IFMT: 61440,
        S_IFREG: 32768,
        S_IFDIR: 16384,
        S_IFCHR: 8192,
        S_IFBLK: 24576,
        S_IFIFO: 4096,
        S_IFLNK: 40960,
        S_IFSOCK: 49152,
        O_CREAT: 64,
        O_EXCL: 128,
        O_NOCTTY: 256,
        O_TRUNC: 512,
        O_APPEND: 1024,
        O_DIRECTORY: 65536,
        O_NOATIME: 262144,
        O_NOFOLLOW: 131072,
        O_SYNC: 1052672,
        O_DIRECT: 16384,
        O_NONBLOCK: 2048,
        S_IRWXU: 448,
        S_IRUSR: 256,
        S_IWUSR: 128,
        S_IXUSR: 64,
        S_IRWXG: 56,
        S_IRGRP: 32,
        S_IWGRP: 16,
        S_IXGRP: 8,
        S_IRWXO: 7,
        S_IROTH: 4,
        S_IWOTH: 2,
        S_IXOTH: 1,
        F_OK: 0,
        R_OK: 4,
        W_OK: 2,
        X_OK: 1,
        UV_FS_SYMLINK_DIR: 1,
        UV_FS_SYMLINK_JUNCTION: 2,
        UV_FS_COPYFILE_EXCL: 1,
        UV_FS_COPYFILE_FICLONE: 2,
        UV_FS_COPYFILE_FICLONE_FORCE: 4,
        COPYFILE_EXCL: 1,
        COPYFILE_FICLONE: 2,
        COPYFILE_FICLONE_FORCE: 4
    };
});
t(w);
var ja = u(function(a, b) {
    b.default = "function" === typeof BigInt ? BigInt : function() {
        throw Error("BigInt is not supported in this environment.");
    };
}), ka = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var c = w.constants.S_IFMT, d = w.constants.S_IFDIR, e = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
    a = (function() {
        function a1() {
        }
        a1.build = function(b1, c1) {
            (void 0) === c1 && (c1 = !1);
            var d1 = new a1, e1 = b1.gid, f1 = b1.atime, g1 = b1.mtime, h1 = b1.ctime;
            c1 = c1 ? ja.default : function(a2) {
                return a2;
            };
            d1.uid = c1(b1.uid);
            d1.gid = c1(e1);
            d1.rdev = c1(0);
            d1.blksize = c1(4096);
            d1.ino = c1(b1.ino);
            d1.size = c1(b1.getSize());
            d1.blocks = c1(1);
            d1.atime = f1;
            d1.mtime = g1;
            d1.ctime = h1;
            d1.birthtime = h1;
            d1.atimeMs = c1(f1.getTime());
            d1.mtimeMs = c1(g1.getTime());
            e1 = c1(h1.getTime());
            d1.ctimeMs = e1;
            d1.birthtimeMs = e1;
            d1.dev = c1(0);
            d1.mode = c1(b1.mode);
            d1.nlink = c1(b1.nlink);
            return d1;
        };
        a1.prototype._checkModeProperty = function(a2) {
            return (Number(this.mode) & c) === a2;
        };
        a1.prototype.isDirectory = function() {
            return this._checkModeProperty(d);
        };
        a1.prototype.isFile = function() {
            return this._checkModeProperty(e);
        };
        a1.prototype.isBlockDevice = function() {
            return this._checkModeProperty(f);
        };
        a1.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(g);
        };
        a1.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(h);
        };
        a1.prototype.isFIFO = function() {
            return this._checkModeProperty(k);
        };
        a1.prototype.isSocket = function() {
            return this._checkModeProperty(p);
        };
        return a1;
    })();
    b.Stats = a;
    b.default = a;
});
t(ka);
var la = "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {
}, x = [], y = [], ma = "undefined" !== typeof Uint8Array ? Uint8Array : Array, oa = !1;
function pa() {
    oa = !0;
    for(var a = 0; 64 > a; ++a)x[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], y["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(a)] = a;
    y[45] = 62;
    y[95] = 63;
}
function qa(a, b, c) {
    for(var d = [], e = b; e < c; e += 3)b = (a[e] << 16) + (a[e + 1] << 8) + a[e + 2], d.push(x[b >> 18 & 63] + x[b >> 12 & 63] + x[b >> 6 & 63] + x[b & 63]);
    return d.join("");
}
function ra(a) {
    oa || pa();
    for(var b = a.length, c = b % 3, d = "", e = [], f = 0, g = b - c; f < g; f += 16383)e.push(qa(a, f, f + 16383 > g ? g : f + 16383));
    1 === c ? (a = a[b - 1], d += x[a >> 2], d += x[a << 4 & 63], d += "==") : 2 === c && (a = (a[b - 2] << 8) + a[b - 1], d += x[a >> 10], d += x[a >> 4 & 63], d += x[a << 2 & 63], d += "=");
    e.push(d);
    return e.join("");
}
function sa(a, b, c, d, e) {
    var f = 8 * e - d - 1;
    var g = (1 << f) - 1, h = g >> 1, k = -7;
    e = c ? e - 1 : 0;
    var p = c ? -1 : 1, n = a[b + e];
    e += p;
    c = n & (1 << -k) - 1;
    n >>= -k;
    for(k += f; 0 < k; c = 256 * c + a[b + e], e += p, k -= 8);
    f = c & (1 << -k) - 1;
    c >>= -k;
    for(k += d; 0 < k; f = 256 * f + a[b + e], e += p, k -= 8);
    if (0 === c) c = 1 - h;
    else {
        if (c === g) return f ? NaN : Infinity * (n ? -1 : 1);
        f += Math.pow(2, d);
        c -= h;
    }
    return (n ? -1 : 1) * f * Math.pow(2, c - d);
}
function ta(a, b, c, d, e, f) {
    var g, h = 8 * f - e - 1, k = (1 << h) - 1, p = k >> 1, n = 23 === e ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    f = d ? 0 : f - 1;
    var q = d ? 1 : -1, B = 0 > b || 0 === b && 0 > 1 / b ? 1 : 0;
    b = Math.abs(b);
    isNaN(b) || Infinity === b ? (b = isNaN(b) ? 1 : 0, d = k) : (d = Math.floor(Math.log(b) / Math.LN2), 1 > b * (g = Math.pow(2, -d)) && (d--, g *= 2), b = 1 <= d + p ? b + n / g : b + n * Math.pow(2, 1 - p), 2 <= b * g && (d++, g /= 2), d + p >= k ? (b = 0, d = k) : 1 <= d + p ? (b = (b * g - 1) * Math.pow(2, e), d += p) : (b = b * Math.pow(2, p - 1) * Math.pow(2, e), d = 0));
    for(; 8 <= e; a[c + f] = b & 255, f += q, b /= 256, e -= 8);
    d = d << e | b;
    for(h += e; 0 < h; a[c + f] = d & 255, f += q, d /= 256, h -= 8);
    a[c + f - q] |= 128 * B;
}
var wa = {
}.toString, ya = Array.isArray || function(a) {
    return "[object Array]" == wa.call(a);
};
z.TYPED_ARRAY_SUPPORT = (void 0) !== la.TYPED_ARRAY_SUPPORT ? la.TYPED_ARRAY_SUPPORT : !0;
var za = z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function Aa(a, b) {
    if ((z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823) < b) throw new RangeError("Invalid typed array length");
    z.TYPED_ARRAY_SUPPORT ? (a = new Uint8Array(b), a.__proto__ = z.prototype) : (null === a && (a = new z(b)), a.length = b);
    return a;
}
function z(a, b, c) {
    if (!(z.TYPED_ARRAY_SUPPORT || this instanceof z)) return new z(a, b, c);
    if ("number" === typeof a) {
        if ("string" === typeof b) throw Error("If encoding is specified then the first argument must be a string");
        return Ba(this, a);
    }
    return Ca(this, a, b, c);
}
z.poolSize = 8192;
z._augment = function(a) {
    a.__proto__ = z.prototype;
    return a;
};
function Ca(a, b, c, d) {
    if ("number" === typeof b) throw new TypeError('"value" argument must not be a number');
    if ("undefined" !== typeof ArrayBuffer && b instanceof ArrayBuffer) {
        b.byteLength;
        if (0 > c || b.byteLength < c) throw new RangeError("'offset' is out of bounds");
        if (b.byteLength < c + (d || 0)) throw new RangeError("'length' is out of bounds");
        b = (void 0) === c && (void 0) === d ? new Uint8Array(b) : (void 0) === d ? new Uint8Array(b, c) : new Uint8Array(b, c, d);
        z.TYPED_ARRAY_SUPPORT ? (a = b, a.__proto__ = z.prototype) : a = Da(a, b);
        return a;
    }
    if ("string" === typeof b) {
        d = a;
        a = c;
        if ("string" !== typeof a || "" === a) a = "utf8";
        if (!z.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
        c = Ea(b, a) | 0;
        d = Aa(d, c);
        b = d.write(b, a);
        b !== c && (d = d.slice(0, b));
        return d;
    }
    return Fa(a, b);
}
z.from = function(a, b, c) {
    return Ca(null, a, b, c);
};
z.TYPED_ARRAY_SUPPORT && (z.prototype.__proto__ = Uint8Array.prototype, z.__proto__ = Uint8Array);
function Ga(a) {
    if ("number" !== typeof a) throw new TypeError('"size" argument must be a number');
    if (0 > a) throw new RangeError('"size" argument must not be negative');
}
z.alloc = function(a, b, c) {
    Ga(a);
    a = 0 >= a ? Aa(null, a) : (void 0) !== b ? "string" === typeof c ? Aa(null, a).fill(b, c) : Aa(null, a).fill(b) : Aa(null, a);
    return a;
};
function Ba(a, b) {
    Ga(b);
    a = Aa(a, 0 > b ? 0 : Ma(b) | 0);
    if (!z.TYPED_ARRAY_SUPPORT) for(var c = 0; c < b; ++c)a[c] = 0;
    return a;
}
z.allocUnsafe = function(a) {
    return Ba(null, a);
};
z.allocUnsafeSlow = function(a) {
    return Ba(null, a);
};
function Da(a, b) {
    var c = 0 > b.length ? 0 : Ma(b.length) | 0;
    a = Aa(a, c);
    for(var d = 0; d < c; d += 1)a[d] = b[d] & 255;
    return a;
}
function Fa(a, b) {
    if (A(b)) {
        var c = Ma(b.length) | 0;
        a = Aa(a, c);
        if (0 === a.length) return a;
        b.copy(a, 0, 0, c);
        return a;
    }
    if (b) {
        if ("undefined" !== typeof ArrayBuffer && b.buffer instanceof ArrayBuffer || "length" in b) return (c = "number" !== typeof b.length) || (c = b.length, c = c !== c), c ? Aa(a, 0) : Da(a, b);
        if ("Buffer" === b.type && ya(b.data)) return Da(a, b.data);
    }
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function Ma(a) {
    if (a >= (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823)) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + (z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823).toString(16) + " bytes");
    return a | 0;
}
z.isBuffer = Na;
function A(a) {
    return !(null == a || !a._isBuffer);
}
z.compare = function(a, b) {
    if (!A(a) || !A(b)) throw new TypeError("Arguments must be Buffers");
    if (a === b) return 0;
    for(var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)if (a[e] !== b[e]) {
        c = a[e];
        d = b[e];
        break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
};
z.isEncoding = function(a) {
    switch(String(a).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1;
    }
};
z.concat = function(a, b) {
    if (!ya(a)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === a.length) return z.alloc(0);
    var c;
    if ((void 0) === b) for(c = b = 0; c < a.length; ++c)b += a[c].length;
    b = z.allocUnsafe(b);
    var d = 0;
    for(c = 0; c < a.length; ++c){
        var e = a[c];
        if (!A(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(b, d);
        d += e.length;
    }
    return b;
};
function Ea(a, b) {
    if (A(a)) return a.length;
    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(a) || a instanceof ArrayBuffer)) return a.byteLength;
    "string" !== typeof a && (a = "" + a);
    var c = a.length;
    if (0 === c) return 0;
    for(var d = !1;;)switch(b){
        case "ascii":
        case "latin1":
        case "binary":
            return c;
        case "utf8":
        case "utf-8":
        case void 0:
            return Oa(a).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return 2 * c;
        case "hex":
            return c >>> 1;
        case "base64":
            return Pa(a).length;
        default:
            if (d) return Oa(a).length;
            b = ("" + b).toLowerCase();
            d = !0;
    }
}
z.byteLength = Ea;
function Qa(a, b, c) {
    var d = !1;
    if ((void 0) === b || 0 > b) b = 0;
    if (b > this.length) return "";
    if ((void 0) === c || c > this.length) c = this.length;
    if (0 >= c) return "";
    c >>>= 0;
    b >>>= 0;
    if (c <= b) return "";
    for(a || (a = "utf8");;)switch(a){
        case "hex":
            a = b;
            b = c;
            c = this.length;
            if (!a || 0 > a) a = 0;
            if (!b || 0 > b || b > c) b = c;
            d = "";
            for(c = a; c < b; ++c)a = d, d = this[c], d = 16 > d ? "0" + d.toString(16) : d.toString(16), d = a + d;
            return d;
        case "utf8":
        case "utf-8":
            return Ra(this, b, c);
        case "ascii":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b] & 127);
            return a;
        case "latin1":
        case "binary":
            a = "";
            for(c = Math.min(this.length, c); b < c; ++b)a += String.fromCharCode(this[b]);
            return a;
        case "base64":
            return b = 0 === b && c === this.length ? ra(this) : ra(this.slice(b, c)), b;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            b = this.slice(b, c);
            c = "";
            for(a = 0; a < b.length; a += 2)c += String.fromCharCode(b[a] + 256 * b[a + 1]);
            return c;
        default:
            if (d) throw new TypeError("Unknown encoding: " + a);
            a = (a + "").toLowerCase();
            d = !0;
    }
}
z.prototype._isBuffer = !0;
function Sa(a, b, c) {
    var d = a[b];
    a[b] = a[c];
    a[c] = d;
}
z.prototype.swap16 = function() {
    var a = this.length;
    if (0 !== a % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var b = 0; b < a; b += 2)Sa(this, b, b + 1);
    return this;
};
z.prototype.swap32 = function() {
    var a = this.length;
    if (0 !== a % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var b = 0; b < a; b += 4)Sa(this, b, b + 3), Sa(this, b + 1, b + 2);
    return this;
};
z.prototype.swap64 = function() {
    var a = this.length;
    if (0 !== a % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var b = 0; b < a; b += 8)Sa(this, b, b + 7), Sa(this, b + 1, b + 6), Sa(this, b + 2, b + 5), Sa(this, b + 3, b + 4);
    return this;
};
z.prototype.toString = function() {
    var a = this.length | 0;
    return 0 === a ? "" : 0 === arguments.length ? Ra(this, 0, a) : Qa.apply(this, arguments);
};
z.prototype.equals = function(a) {
    if (!A(a)) throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : 0 === z.compare(this, a);
};
z.prototype.inspect = function() {
    var a = "";
    0 < this.length && (a = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), 50 < this.length && (a += " ... "));
    return "<Buffer " + a + ">";
};
z.prototype.compare = function(a, b, c, d, e) {
    if (!A(a)) throw new TypeError("Argument must be a Buffer");
    (void 0) === b && (b = 0);
    (void 0) === c && (c = a ? a.length : 0);
    (void 0) === d && (d = 0);
    (void 0) === e && (e = this.length);
    if (0 > b || c > a.length || 0 > d || e > this.length) throw new RangeError("out of range index");
    if (d >= e && b >= c) return 0;
    if (d >= e) return -1;
    if (b >= c) return 1;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    e >>>= 0;
    if (this === a) return 0;
    var f = e - d, g = c - b, h = Math.min(f, g);
    d = this.slice(d, e);
    a = a.slice(b, c);
    for(b = 0; b < h; ++b)if (d[b] !== a[b]) {
        f = d[b];
        g = a[b];
        break;
    }
    return f < g ? -1 : g < f ? 1 : 0;
};
function Ta(a, b, c, d, e) {
    if (0 === a.length) return -1;
    "string" === typeof c ? (d = c, c = 0) : 2147483647 < c ? c = 2147483647 : -2147483648 > c && (c = -2147483648);
    c = +c;
    isNaN(c) && (c = e ? 0 : a.length - 1);
    0 > c && (c = a.length + c);
    if (c >= a.length) {
        if (e) return -1;
        c = a.length - 1;
    } else if (0 > c) {
        if (e) c = 0;
        else return -1;
    }
    "string" === typeof b && (b = z.from(b, d));
    if (A(b)) return 0 === b.length ? -1 : Ua(a, b, c, d, e);
    if ("number" === typeof b) return b &= 255, z.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? e ? Uint8Array.prototype.indexOf.call(a, b, c) : Uint8Array.prototype.lastIndexOf.call(a, b, c) : Ua(a, [
        b
    ], c, d, e);
    throw new TypeError("val must be string, number or Buffer");
}
function Ua(a, b, c, d, e) {
    function f(a1, b1) {
        return 1 === g ? a1[b1] : a1.readUInt16BE(b1 * g);
    }
    var g = 1, h = a.length, k = b.length;
    if ((void 0) !== d && (d = String(d).toLowerCase(), "ucs2" === d || "ucs-2" === d || "utf16le" === d || "utf-16le" === d)) {
        if (2 > a.length || 2 > b.length) return -1;
        g = 2;
        h /= 2;
        k /= 2;
        c /= 2;
    }
    if (e) for(d = -1; c < h; c++)if (f(a, c) === f(b, -1 === d ? 0 : c - d)) {
        if (-1 === d && (d = c), c - d + 1 === k) return d * g;
    } else -1 !== d && (c -= c - d), d = -1;
    else for(c + k > h && (c = h - k); 0 <= c; c--){
        h = !0;
        for(d = 0; d < k; d++)if (f(a, c + d) !== f(b, d)) {
            h = !1;
            break;
        }
        if (h) return c;
    }
    return -1;
}
z.prototype.includes = function(a, b, c) {
    return -1 !== this.indexOf(a, b, c);
};
z.prototype.indexOf = function(a, b, c) {
    return Ta(this, a, b, c, !0);
};
z.prototype.lastIndexOf = function(a, b, c) {
    return Ta(this, a, b, c, !1);
};
z.prototype.write = function(a, b, c, d) {
    if ((void 0) === b) d = "utf8", c = this.length, b = 0;
    else if ((void 0) === c && "string" === typeof b) d = b, c = this.length, b = 0;
    else if (isFinite(b)) b |= 0, isFinite(c) ? (c |= 0, (void 0) === d && (d = "utf8")) : (d = c, c = void 0);
    else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var e = this.length - b;
    if ((void 0) === c || c > e) c = e;
    if (0 < a.length && (0 > c || 0 > b) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    d || (d = "utf8");
    for(e = !1;;)switch(d){
        case "hex":
            a: {
                b = Number(b) || 0;
                d = this.length - b;
                c ? (c = Number(c), c > d && (c = d)) : c = d;
                d = a.length;
                if (0 !== d % 2) throw new TypeError("Invalid hex string");
                c > d / 2 && (c = d / 2);
                for(d = 0; d < c; ++d){
                    e = parseInt(a.substr(2 * d, 2), 16);
                    if (isNaN(e)) {
                        a = d;
                        break a;
                    }
                    this[b + d] = e;
                }
                a = d;
            }
            return a;
        case "utf8":
        case "utf-8":
            return Va(Oa(a, this.length - b), this, b, c);
        case "ascii":
            return Va(Wa(a), this, b, c);
        case "latin1":
        case "binary":
            return Va(Wa(a), this, b, c);
        case "base64":
            return Va(Pa(a), this, b, c);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            d = a;
            e = this.length - b;
            for(var f = [], g = 0; g < d.length && !(0 > (e -= 2)); ++g){
                var h = d.charCodeAt(g);
                a = h >> 8;
                h %= 256;
                f.push(h);
                f.push(a);
            }
            return Va(f, this, b, c);
        default:
            if (e) throw new TypeError("Unknown encoding: " + d);
            d = ("" + d).toLowerCase();
            e = !0;
    }
};
z.prototype.toJSON = function() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function Ra(a, b, c) {
    c = Math.min(a.length, c);
    for(var d = []; b < c;){
        var e = a[b], f = null, g = 239 < e ? 4 : 223 < e ? 3 : 191 < e ? 2 : 1;
        if (b + g <= c) switch(g){
            case 1:
                128 > e && (f = e);
                break;
            case 2:
                var h = a[b + 1];
                128 === (h & 192) && (e = (e & 31) << 6 | h & 63, 127 < e && (f = e));
                break;
            case 3:
                h = a[b + 1];
                var k = a[b + 2];
                128 === (h & 192) && 128 === (k & 192) && (e = (e & 15) << 12 | (h & 63) << 6 | k & 63, 2047 < e && (55296 > e || 57343 < e) && (f = e));
                break;
            case 4:
                h = a[b + 1];
                k = a[b + 2];
                var p = a[b + 3];
                128 === (h & 192) && 128 === (k & 192) && 128 === (p & 192) && (e = (e & 15) << 18 | (h & 63) << 12 | (k & 63) << 6 | p & 63, 65535 < e && 1114112 > e && (f = e));
        }
        null === f ? (f = 65533, g = 1) : 65535 < f && (f -= 65536, d.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023);
        d.push(f);
        b += g;
    }
    a = d.length;
    if (a <= ab) d = String.fromCharCode.apply(String, d);
    else {
        c = "";
        for(b = 0; b < a;)c += String.fromCharCode.apply(String, d.slice(b, b += ab));
        d = c;
    }
    return d;
}
var ab = 4096;
z.prototype.slice = function(a, b) {
    var c = this.length;
    a = ~~a;
    b = (void 0) === b ? c : ~~b;
    0 > a ? (a += c, 0 > a && (a = 0)) : a > c && (a = c);
    0 > b ? (b += c, 0 > b && (b = 0)) : b > c && (b = c);
    b < a && (b = a);
    if (z.TYPED_ARRAY_SUPPORT) b = this.subarray(a, b), b.__proto__ = z.prototype;
    else {
        c = b - a;
        b = new z(c, void 0);
        for(var d = 0; d < c; ++d)b[d] = this[d + a];
    }
    return b;
};
function C(a, b, c) {
    if (0 !== a % 1 || 0 > a) throw new RangeError("offset is not uint");
    if (a + b > c) throw new RangeError("Trying to access beyond buffer length");
}
z.prototype.readUIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; (++e) < b && (d *= 256);)c += this[a + e] * d;
    return c;
};
z.prototype.readUIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a + --b];
    for(var d = 1; 0 < b && (d *= 256);)c += this[a + --b] * d;
    return c;
};
z.prototype.readUInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a];
};
z.prototype.readUInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] | this[a + 1] << 8;
};
z.prototype.readUInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    return this[a] << 8 | this[a + 1];
};
z.prototype.readUInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + 16777216 * this[a + 3];
};
z.prototype.readUInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return 16777216 * this[a] + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
};
z.prototype.readIntLE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = this[a];
    for(var d = 1, e = 0; (++e) < b && (d *= 256);)c += this[a + e] * d;
    c >= 128 * d && (c -= Math.pow(2, 8 * b));
    return c;
};
z.prototype.readIntBE = function(a, b, c) {
    a |= 0;
    b |= 0;
    c || C(a, b, this.length);
    c = b;
    for(var d = 1, e = this[a + --c]; 0 < c && (d *= 256);)e += this[a + --c] * d;
    e >= 128 * d && (e -= Math.pow(2, 8 * b));
    return e;
};
z.prototype.readInt8 = function(a, b) {
    b || C(a, 1, this.length);
    return this[a] & 128 ? -1 * (255 - this[a] + 1) : this[a];
};
z.prototype.readInt16LE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a] | this[a + 1] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt16BE = function(a, b) {
    b || C(a, 2, this.length);
    a = this[a + 1] | this[a] << 8;
    return a & 32768 ? a | 4294901760 : a;
};
z.prototype.readInt32LE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
};
z.prototype.readInt32BE = function(a, b) {
    b || C(a, 4, this.length);
    return this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
};
z.prototype.readFloatLE = function(a, b) {
    b || C(a, 4, this.length);
    return sa(this, a, !0, 23, 4);
};
z.prototype.readFloatBE = function(a, b) {
    b || C(a, 4, this.length);
    return sa(this, a, !1, 23, 4);
};
z.prototype.readDoubleLE = function(a, b) {
    b || C(a, 8, this.length);
    return sa(this, a, !0, 52, 8);
};
z.prototype.readDoubleBE = function(a, b) {
    b || C(a, 8, this.length);
    return sa(this, a, !1, 52, 8);
};
function E(a, b, c, d, e, f) {
    if (!A(a)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (b > e || b < f) throw new RangeError('"value" argument is out of bounds');
    if (c + d > a.length) throw new RangeError("Index out of range");
}
z.prototype.writeUIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = 1;
    var e = 0;
    for(this[b] = a & 255; (++e) < c && (d *= 256);)this[b + e] = a / d & 255;
    return b + c;
};
z.prototype.writeUIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    c |= 0;
    d || E(this, a, b, c, Math.pow(2, 8 * c) - 1, 0);
    d = c - 1;
    var e = 1;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)this[b + d] = a / e & 255;
    return b + c;
};
z.prototype.writeUInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 1, 255, 0);
    z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    this[b] = a & 255;
    return b + 1;
};
function bb(a, b, c, d) {
    0 > b && (b = 65535 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 2); e < f; ++e)a[c + e] = (b & 255 << 8 * (d ? e : 1 - e)) >>> 8 * (d ? e : 1 - e);
}
z.prototype.writeUInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 65535, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, !0);
    return b + 2;
};
z.prototype.writeUInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 65535, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, !1);
    return b + 2;
};
function cb(a, b, c, d) {
    0 > b && (b = 4294967295 + b + 1);
    for(var e = 0, f = Math.min(a.length - c, 4); e < f; ++e)a[c + e] = b >>> 8 * (d ? e : 3 - e) & 255;
}
z.prototype.writeUInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 4294967295, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b + 3] = a >>> 24, this[b + 2] = a >>> 16, this[b + 1] = a >>> 8, this[b] = a & 255) : cb(this, a, b, !0);
    return b + 4;
};
z.prototype.writeUInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 4294967295, 0);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, !1);
    return b + 4;
};
z.prototype.writeIntLE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
    d = 0;
    var e = 1, f = 0;
    for(this[b] = a & 255; (++d) < c && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d - 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
z.prototype.writeIntBE = function(a, b, c, d) {
    a = +a;
    b |= 0;
    d || (d = Math.pow(2, 8 * c - 1), E(this, a, b, c, d - 1, -d));
    d = c - 1;
    var e = 1, f = 0;
    for(this[b + d] = a & 255; 0 <= --d && (e *= 256);)0 > a && 0 === f && 0 !== this[b + d + 1] && (f = 1), this[b + d] = (a / e >> 0) - f & 255;
    return b + c;
};
z.prototype.writeInt8 = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 1, 127, -128);
    z.TYPED_ARRAY_SUPPORT || (a = Math.floor(a));
    0 > a && (a = 255 + a + 1);
    this[b] = a & 255;
    return b + 1;
};
z.prototype.writeInt16LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 32767, -32768);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8) : bb(this, a, b, !0);
    return b + 2;
};
z.prototype.writeInt16BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 2, 32767, -32768);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 8, this[b + 1] = a & 255) : bb(this, a, b, !1);
    return b + 2;
};
z.prototype.writeInt32LE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 2147483647, -2147483648);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a & 255, this[b + 1] = a >>> 8, this[b + 2] = a >>> 16, this[b + 3] = a >>> 24) : cb(this, a, b, !0);
    return b + 4;
};
z.prototype.writeInt32BE = function(a, b, c) {
    a = +a;
    b |= 0;
    c || E(this, a, b, 4, 2147483647, -2147483648);
    0 > a && (a = 4294967295 + a + 1);
    z.TYPED_ARRAY_SUPPORT ? (this[b] = a >>> 24, this[b + 1] = a >>> 16, this[b + 2] = a >>> 8, this[b + 3] = a & 255) : cb(this, a, b, !1);
    return b + 4;
};
function db(a, b, c, d) {
    if (c + d > a.length) throw new RangeError("Index out of range");
    if (0 > c) throw new RangeError("Index out of range");
}
z.prototype.writeFloatLE = function(a, b, c) {
    c || db(this, a, b, 4);
    ta(this, a, b, !0, 23, 4);
    return b + 4;
};
z.prototype.writeFloatBE = function(a, b, c) {
    c || db(this, a, b, 4);
    ta(this, a, b, !1, 23, 4);
    return b + 4;
};
z.prototype.writeDoubleLE = function(a, b, c) {
    c || db(this, a, b, 8);
    ta(this, a, b, !0, 52, 8);
    return b + 8;
};
z.prototype.writeDoubleBE = function(a, b, c) {
    c || db(this, a, b, 8);
    ta(this, a, b, !1, 52, 8);
    return b + 8;
};
z.prototype.copy = function(a, b, c, d) {
    c || (c = 0);
    d || 0 === d || (d = this.length);
    b >= a.length && (b = a.length);
    b || (b = 0);
    0 < d && d < c && (d = c);
    if (d === c || 0 === a.length || 0 === this.length) return 0;
    if (0 > b) throw new RangeError("targetStart out of bounds");
    if (0 > c || c >= this.length) throw new RangeError("sourceStart out of bounds");
    if (0 > d) throw new RangeError("sourceEnd out of bounds");
    d > this.length && (d = this.length);
    a.length - b < d - c && (d = a.length - b + c);
    var e = d - c;
    if (this === a && c < b && b < d) for(d = e - 1; 0 <= d; --d)a[d + b] = this[d + c];
    else if (1000 > e || !z.TYPED_ARRAY_SUPPORT) for(d = 0; d < e; ++d)a[d + b] = this[d + c];
    else Uint8Array.prototype.set.call(a, this.subarray(c, c + e), b);
    return e;
};
z.prototype.fill = function(a, b, c, d) {
    if ("string" === typeof a) {
        "string" === typeof b ? (d = b, b = 0, c = this.length) : "string" === typeof c && (d = c, c = this.length);
        if (1 === a.length) {
            var e = a.charCodeAt(0);
            256 > e && (a = e);
        }
        if ((void 0) !== d && "string" !== typeof d) throw new TypeError("encoding must be a string");
        if ("string" === typeof d && !z.isEncoding(d)) throw new TypeError("Unknown encoding: " + d);
    } else "number" === typeof a && (a &= 255);
    if (0 > b || this.length < b || this.length < c) throw new RangeError("Out of range index");
    if (c <= b) return this;
    b >>>= 0;
    c = (void 0) === c ? this.length : c >>> 0;
    a || (a = 0);
    if ("number" === typeof a) for(d = b; d < c; ++d)this[d] = a;
    else for(a = A(a) ? a : Oa(new z(a, d).toString()), e = a.length, d = 0; d < c - b; ++d)this[d + b] = a[d % e];
    return this;
};
var eb = /[^+\/0-9A-Za-z-_]/g;
function Oa(a, b) {
    b = b || Infinity;
    for(var c, d = a.length, e = null, f = [], g = 0; g < d; ++g){
        c = a.charCodeAt(g);
        if (55295 < c && 57344 > c) {
            if (!e) {
                if (56319 < c) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                } else if (g + 1 === d) {
                    -1 < (b -= 3) && f.push(239, 191, 189);
                    continue;
                }
                e = c;
                continue;
            }
            if (56320 > c) {
                -1 < (b -= 3) && f.push(239, 191, 189);
                e = c;
                continue;
            }
            c = (e - 55296 << 10 | c - 56320) + 65536;
        } else e && -1 < (b -= 3) && f.push(239, 191, 189);
        e = null;
        if (128 > c) {
            if (0 > --b) break;
            f.push(c);
        } else if (2048 > c) {
            if (0 > (b -= 2)) break;
            f.push(c >> 6 | 192, c & 63 | 128);
        } else if (65536 > c) {
            if (0 > (b -= 3)) break;
            f.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128);
        } else if (1114112 > c) {
            if (0 > (b -= 4)) break;
            f.push(c >> 18 | 240, c >> 12 & 63 | 128, c >> 6 & 63 | 128, c & 63 | 128);
        } else throw Error("Invalid code point");
    }
    return f;
}
function Wa(a) {
    for(var b = [], c = 0; c < a.length; ++c)b.push(a.charCodeAt(c) & 255);
    return b;
}
function Pa(a) {
    a = (a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")).replace(eb, "");
    if (2 > a.length) a = "";
    else for(; 0 !== a.length % 4;)a += "=";
    oa || pa();
    var b = a.length;
    if (0 < b % 4) throw Error("Invalid string. Length must be a multiple of 4");
    var c = "=" === a[b - 2] ? 2 : "=" === a[b - 1] ? 1 : 0;
    var d = new ma(3 * b / 4 - c);
    var e = 0 < c ? b - 4 : b;
    var f = 0;
    for(b = 0; b < e; b += 4){
        var g = y[a.charCodeAt(b)] << 18 | y[a.charCodeAt(b + 1)] << 12 | y[a.charCodeAt(b + 2)] << 6 | y[a.charCodeAt(b + 3)];
        d[f++] = g >> 16 & 255;
        d[f++] = g >> 8 & 255;
        d[f++] = g & 255;
    }
    2 === c ? (g = y[a.charCodeAt(b)] << 2 | y[a.charCodeAt(b + 1)] >> 4, d[f++] = g & 255) : 1 === c && (g = y[a.charCodeAt(b)] << 10 | y[a.charCodeAt(b + 1)] << 4 | y[a.charCodeAt(b + 2)] >> 2, d[f++] = g >> 8 & 255, d[f++] = g & 255);
    return d;
}
function Va(a, b, c, d) {
    for(var e = 0; e < d && !(e + c >= b.length || e >= a.length); ++e)b[e + c] = a[e];
    return e;
}
function Na(a) {
    return null != a && (!!a._isBuffer || fb(a) || "function" === typeof a.readFloatLE && "function" === typeof a.slice && fb(a.slice(0, 0)));
}
function fb(a) {
    return !!a.constructor && "function" === typeof a.constructor.isBuffer && a.constructor.isBuffer(a);
}
var gb = Object.freeze({
    __proto__: null,
    INSPECT_MAX_BYTES: 50,
    kMaxLength: za,
    Buffer: z,
    SlowBuffer: function(a) {
        +a != a && (a = 0);
        return z.alloc(+a);
    },
    isBuffer: Na
}), F = u(function(a, b) {
    function c(a1) {
        for(var b1 = [], c1 = 1; c1 < arguments.length; c1++)b1[c1 - 1] = arguments[c1];
        return new (gb.Buffer.bind.apply(gb.Buffer, d([
            void 0,
            a1
        ], b1)));
    }
    var d = l && l.__spreadArrays || function() {
        for(var a1 = 0, b1 = 0, c1 = arguments.length; b1 < c1; b1++)a1 += arguments[b1].length;
        a1 = Array(a1);
        var d1 = 0;
        for(b1 = 0; b1 < c1; b1++)for(var k = arguments[b1], p = 0, n = k.length; p < n; p++, d1++)a1[d1] = k[p];
        return a1;
    };
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.Buffer = gb.Buffer;
    b.bufferAllocUnsafe = gb.Buffer.allocUnsafe || c;
    b.bufferFrom = gb.Buffer.from || c;
});
t(F);
function hb() {
    throw Error("setTimeout has not been defined");
}
function ib() {
    throw Error("clearTimeout has not been defined");
}
var jb = hb, kb = ib;
"function" === typeof la.setTimeout && (jb = setTimeout);
"function" === typeof la.clearTimeout && (kb = clearTimeout);
function pb(a) {
    if (jb === setTimeout) return setTimeout(a, 0);
    if ((jb === hb || !jb) && setTimeout) return jb = setTimeout, setTimeout(a, 0);
    try {
        return jb(a, 0);
    } catch (b) {
        try {
            return jb.call(null, a, 0);
        } catch (c) {
            return jb.call(this, a, 0);
        }
    }
}
function rb(a) {
    if (kb === clearTimeout) return clearTimeout(a);
    if ((kb === ib || !kb) && clearTimeout) return kb = clearTimeout, clearTimeout(a);
    try {
        return kb(a);
    } catch (b) {
        try {
            return kb.call(null, a);
        } catch (c) {
            return kb.call(this, a);
        }
    }
}
var sb = [], tb = !1, ub, vb = -1;
function wb() {
    tb && ub && (tb = !1, ub.length ? sb = ub.concat(sb) : vb = -1, sb.length && xb());
}
function xb() {
    if (!tb) {
        var a = pb(wb);
        tb = !0;
        for(var b = sb.length; b;){
            ub = sb;
            for(sb = []; (++vb) < b;)ub && ub[vb].run();
            vb = -1;
            b = sb.length;
        }
        ub = null;
        tb = !1;
        rb(a);
    }
}
function G(a) {
    var b = Array(arguments.length - 1);
    if (1 < arguments.length) for(var c = 1; c < arguments.length; c++)b[c - 1] = arguments[c];
    sb.push(new yb(a, b));
    1 !== sb.length || tb || pb(xb);
}
function yb(a, b) {
    this.fun = a;
    this.array = b;
}
yb.prototype.run = function() {
    this.fun.apply(null, this.array);
};
function zb() {
}
var performance = la.performance || {
}, Ab = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
    return (new Date).getTime();
}, Bb = new Date, Cb = {
    nextTick: G,
    title: "browser",
    browser: !0,
    env: {
    },
    argv: [],
    version: "",
    versions: {
    },
    on: zb,
    addListener: zb,
    once: zb,
    off: zb,
    removeListener: zb,
    removeAllListeners: zb,
    emit: zb,
    binding: function() {
        throw Error("process.binding is not supported");
    },
    cwd: function() {
        return "/";
    },
    chdir: function() {
        throw Error("process.chdir is not supported");
    },
    umask: function() {
        return 0;
    },
    hrtime: function(a) {
        var b = 0.001 * Ab.call(performance), c = Math.floor(b);
        b = Math.floor(b % 1 * 1000000000);
        a && (c -= a[0], b -= a[1], 0 > b && (c--, b += 1000000000));
        return [
            c,
            b
        ];
    },
    platform: "browser",
    release: {
    },
    config: {
    },
    uptime: function() {
        return (new Date - Bb) / 1000;
    }
}, Db = "function" === typeof Object.create ? function(a, b) {
    a.super_ = b;
    a.prototype = Object.create(b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    });
} : function(a, b) {
    function c() {
    }
    a.super_ = b;
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
}, Eb = /%[sdj%]/g;
function Fb(a) {
    if (!Gb(a)) {
        for(var b = [], c = 0; c < arguments.length; c++)b.push(H(arguments[c]));
        return b.join(" ");
    }
    c = 1;
    var d = arguments, e = d.length;
    b = String(a).replace(Eb, function(a1) {
        if ("%%" === a1) return "%";
        if (c >= e) return a1;
        switch(a1){
            case "%s":
                return String(d[c++]);
            case "%d":
                return Number(d[c++]);
            case "%j":
                try {
                    return JSON.stringify(d[c++]);
                } catch (h) {
                    return "[Circular]";
                }
            default:
                return a1;
        }
    });
    for(var f = d[c]; c < e; f = d[++c])b = null !== f && Hb(f) ? b + (" " + H(f)) : b + (" " + f);
    return b;
}
function Ib(a, b) {
    if (Jb(la.process)) return function() {
        return Ib(a, b).apply(this, arguments);
    };
    if (!0 === Cb.noDeprecation) return a;
    var c = !1;
    return function() {
        if (!c) {
            if (Cb.throwDeprecation) throw Error(b);
            Cb.traceDeprecation ? console.trace(b) : console.error(b);
            c = !0;
        }
        return a.apply(this, arguments);
    };
}
var Kb = {
}, Lb;
function Mb(a) {
    Jb(Lb) && (Lb = Cb.env.NODE_DEBUG || "");
    a = a.toUpperCase();
    Kb[a] || (new RegExp("\\b" + a + "\\b", "i").test(Lb) ? Kb[a] = function() {
        var b = Fb.apply(null, arguments);
        console.error("%s %d: %s", a, 0, b);
    } : Kb[a] = function() {
    });
    return Kb[a];
}
function H(a, b) {
    var c = {
        seen: [],
        stylize: Nb
    };
    3 <= arguments.length && (c.depth = arguments[2]);
    4 <= arguments.length && (c.colors = arguments[3]);
    Ob(b) ? c.showHidden = b : b && Pb(c, b);
    Jb(c.showHidden) && (c.showHidden = !1);
    Jb(c.depth) && (c.depth = 2);
    Jb(c.colors) && (c.colors = !1);
    Jb(c.customInspect) && (c.customInspect = !0);
    c.colors && (c.stylize = Qb);
    return Rb(c, a, c.depth);
}
H.colors = {
    bold: [
        1,
        22
    ],
    italic: [
        3,
        23
    ],
    underline: [
        4,
        24
    ],
    inverse: [
        7,
        27
    ],
    white: [
        37,
        39
    ],
    grey: [
        90,
        39
    ],
    black: [
        30,
        39
    ],
    blue: [
        34,
        39
    ],
    cyan: [
        36,
        39
    ],
    green: [
        32,
        39
    ],
    magenta: [
        35,
        39
    ],
    red: [
        31,
        39
    ],
    yellow: [
        33,
        39
    ]
};
H.styles = {
    special: "cyan",
    number: "yellow",
    "boolean": "yellow",
    undefined: "grey",
    "null": "bold",
    string: "green",
    date: "magenta",
    regexp: "red"
};
function Qb(a, b) {
    return (b = H.styles[b]) ? "\u001b[" + H.colors[b][0] + "m" + a + "\u001b[" + H.colors[b][1] + "m" : a;
}
function Nb(a) {
    return a;
}
function Sb(a) {
    var b = {
    };
    a.forEach(function(a1) {
        b[a1] = !0;
    });
    return b;
}
function Rb(a, b, c) {
    if (a.customInspect && b && Tb(b.inspect) && b.inspect !== H && (!b.constructor || b.constructor.prototype !== b)) {
        var d = b.inspect(c, a);
        Gb(d) || (d = Rb(a, d, c));
        return d;
    }
    if (d = Ub(a, b)) return d;
    var e = Object.keys(b), f = Sb(e);
    a.showHidden && (e = Object.getOwnPropertyNames(b));
    if (Vb(b) && (0 <= e.indexOf("message") || 0 <= e.indexOf("description"))) return Zb(b);
    if (0 === e.length) {
        if (Tb(b)) return a.stylize("[Function" + (b.name ? ": " + b.name : "") + "]", "special");
        if (ac(b)) return a.stylize(RegExp.prototype.toString.call(b), "regexp");
        if (bc(b)) return a.stylize(Date.prototype.toString.call(b), "date");
        if (Vb(b)) return Zb(b);
    }
    d = "";
    var g = !1, h = [
        "{",
        "}"
    ];
    cc(b) && (g = !0, h = [
        "[",
        "]"
    ]);
    Tb(b) && (d = " [Function" + (b.name ? ": " + b.name : "") + "]");
    ac(b) && (d = " " + RegExp.prototype.toString.call(b));
    bc(b) && (d = " " + Date.prototype.toUTCString.call(b));
    Vb(b) && (d = " " + Zb(b));
    if (0 === e.length && (!g || 0 == b.length)) return h[0] + d + h[1];
    if (0 > c) return ac(b) ? a.stylize(RegExp.prototype.toString.call(b), "regexp") : a.stylize("[Object]", "special");
    a.seen.push(b);
    e = g ? dc(a, b, c, f, e) : e.map(function(d) {
        return ec(a, b, c, f, d, g);
    });
    a.seen.pop();
    return fc(e, d, h);
}
function Ub(a, b) {
    if (Jb(b)) return a.stylize("undefined", "undefined");
    if (Gb(b)) return b = "'" + JSON.stringify(b).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'", a.stylize(b, "string");
    if (gc(b)) return a.stylize("" + b, "number");
    if (Ob(b)) return a.stylize("" + b, "boolean");
    if (null === b) return a.stylize("null", "null");
}
function Zb(a) {
    return "[" + Error.prototype.toString.call(a) + "]";
}
function dc(a, b, c, d, e) {
    for(var f = [], g = 0, h = b.length; g < h; ++g)Object.prototype.hasOwnProperty.call(b, String(g)) ? f.push(ec(a, b, c, d, String(g), !0)) : f.push("");
    e.forEach(function(e1) {
        e1.match(/^\d+$/) || f.push(ec(a, b, c, d, e1, !0));
    });
    return f;
}
function ec(a, b, c, d, e, f) {
    var g, h;
    b = Object.getOwnPropertyDescriptor(b, e) || {
        value: b[e]
    };
    b.get ? h = b.set ? a.stylize("[Getter/Setter]", "special") : a.stylize("[Getter]", "special") : b.set && (h = a.stylize("[Setter]", "special"));
    Object.prototype.hasOwnProperty.call(d, e) || (g = "[" + e + "]");
    h || (0 > a.seen.indexOf(b.value) ? (h = null === c ? Rb(a, b.value, null) : Rb(a, b.value, c - 1), -1 < h.indexOf("\n") && (h = f ? h.split("\n").map(function(a1) {
        return "  " + a1;
    }).join("\n").substr(2) : "\n" + h.split("\n").map(function(a1) {
        return "   " + a1;
    }).join("\n"))) : h = a.stylize("[Circular]", "special"));
    if (Jb(g)) {
        if (f && e.match(/^\d+$/)) return h;
        g = JSON.stringify("" + e);
        g.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (g = g.substr(1, g.length - 2), g = a.stylize(g, "name")) : (g = g.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), g = a.stylize(g, "string"));
    }
    return g + ": " + h;
}
function fc(a, b, c) {
    return 60 < a.reduce(function(a1, b1) {
        b1.indexOf("\n");
        return a1 + b1.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0) ? c[0] + ("" === b ? "" : b + "\n ") + " " + a.join(",\n  ") + " " + c[1] : c[0] + b + " " + a.join(", ") + " " + c[1];
}
function cc(a) {
    return Array.isArray(a);
}
function Ob(a) {
    return "boolean" === typeof a;
}
function gc(a) {
    return "number" === typeof a;
}
function Gb(a) {
    return "string" === typeof a;
}
function Jb(a) {
    return (void 0) === a;
}
function ac(a) {
    return Hb(a) && "[object RegExp]" === Object.prototype.toString.call(a);
}
function Hb(a) {
    return "object" === typeof a && null !== a;
}
function bc(a) {
    return Hb(a) && "[object Date]" === Object.prototype.toString.call(a);
}
function Vb(a) {
    return Hb(a) && ("[object Error]" === Object.prototype.toString.call(a) || a instanceof Error);
}
function Tb(a) {
    return "function" === typeof a;
}
function hc(a) {
    return null === a || "boolean" === typeof a || "number" === typeof a || "string" === typeof a || "symbol" === typeof a || "undefined" === typeof a;
}
function ic(a) {
    return 10 > a ? "0" + a.toString(10) : a.toString(10);
}
var jc = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
function kc() {
    var a = new Date, b = [
        ic(a.getHours()),
        ic(a.getMinutes()),
        ic(a.getSeconds())
    ].join(":");
    return [
        a.getDate(),
        jc[a.getMonth()],
        b
    ].join(" ");
}
function Pb(a, b) {
    if (!b || !Hb(b)) return a;
    for(var c = Object.keys(b), d = c.length; d--;)a[c[d]] = b[c[d]];
    return a;
}
var lc = {
    inherits: Db,
    _extend: Pb,
    log: function() {
        console.log("%s - %s", kc(), Fb.apply(null, arguments));
    },
    isBuffer: function(a) {
        return Na(a);
    },
    isPrimitive: hc,
    isFunction: Tb,
    isError: Vb,
    isDate: bc,
    isObject: Hb,
    isRegExp: ac,
    isUndefined: Jb,
    isSymbol: function(a) {
        return "symbol" === typeof a;
    },
    isString: Gb,
    isNumber: gc,
    isNullOrUndefined: function(a) {
        return null == a;
    },
    isNull: function(a) {
        return null === a;
    },
    isBoolean: Ob,
    isArray: cc,
    inspect: H,
    deprecate: Ib,
    format: Fb,
    debuglog: Mb
};
function mc(a, b) {
    if (a === b) return 0;
    for(var c = a.length, d = b.length, e = 0, f = Math.min(c, d); e < f; ++e)if (a[e] !== b[e]) {
        c = a[e];
        d = b[e];
        break;
    }
    return c < d ? -1 : d < c ? 1 : 0;
}
var nc = Object.prototype.hasOwnProperty, oc = Object.keys || function(a) {
    var b = [], c;
    for(c in a)nc.call(a, c) && b.push(c);
    return b;
}, pc = Array.prototype.slice, qc;
function rc() {
    return "undefined" !== typeof qc ? qc : qc = (function() {
        return "foo" === (function() {
        }).name;
    })();
}
function sc(a) {
    return Na(a) || "function" !== typeof la.ArrayBuffer ? !1 : "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(a) : a ? a instanceof DataView || a.buffer && a.buffer instanceof ArrayBuffer ? !0 : !1 : !1;
}
function I(a, b) {
    a || J(a, !0, b, "==", tc);
}
var uc = /\s*function\s+([^\(\s]*)\s*/;
function vc(a) {
    if (Tb(a)) return rc() ? a.name : (a = a.toString().match(uc)) && a[1];
}
I.AssertionError = wc;
function wc(a) {
    this.name = "AssertionError";
    this.actual = a.actual;
    this.expected = a.expected;
    this.operator = a.operator;
    a.message ? (this.message = a.message, this.generatedMessage = !1) : (this.message = xc(yc(this.actual), 128) + " " + this.operator + " " + xc(yc(this.expected), 128), this.generatedMessage = !0);
    var b = a.stackStartFunction || J;
    Error.captureStackTrace ? Error.captureStackTrace(this, b) : (a = Error(), a.stack && (a = a.stack, b = vc(b), b = a.indexOf("\n" + b), 0 <= b && (b = a.indexOf("\n", b + 1), a = a.substring(b + 1)), this.stack = a));
}
Db(wc, Error);
function xc(a, b) {
    return "string" === typeof a ? a.length < b ? a : a.slice(0, b) : a;
}
function yc(a) {
    if (rc() || !Tb(a)) return H(a);
    a = vc(a);
    return "[Function" + (a ? ": " + a : "") + "]";
}
function J(a, b, c, d, e) {
    throw new wc({
        message: c,
        actual: a,
        expected: b,
        operator: d,
        stackStartFunction: e
    });
}
I.fail = J;
function tc(a, b) {
    a || J(a, !0, b, "==", tc);
}
I.ok = tc;
I.equal = zc;
function zc(a, b, c) {
    a != b && J(a, b, c, "==", zc);
}
I.notEqual = Ac;
function Ac(a, b, c) {
    a == b && J(a, b, c, "!=", Ac);
}
I.deepEqual = Bc;
function Bc(a, b, c) {
    Cc(a, b, !1) || J(a, b, c, "deepEqual", Bc);
}
I.deepStrictEqual = Dc;
function Dc(a, b, c) {
    Cc(a, b, !0) || J(a, b, c, "deepStrictEqual", Dc);
}
function Cc(a, b, c, d) {
    if (a === b) return !0;
    if (Na(a) && Na(b)) return 0 === mc(a, b);
    if (bc(a) && bc(b)) return a.getTime() === b.getTime();
    if (ac(a) && ac(b)) return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
    if (null !== a && "object" === typeof a || null !== b && "object" === typeof b) {
        if (!sc(a) || !sc(b) || Object.prototype.toString.call(a) !== Object.prototype.toString.call(b) || a instanceof Float32Array || a instanceof Float64Array) {
            if (Na(a) !== Na(b)) return !1;
            d = d || {
                actual: [],
                expected: []
            };
            var e = d.actual.indexOf(a);
            if (-1 !== e && e === d.expected.indexOf(b)) return !0;
            d.actual.push(a);
            d.expected.push(b);
            return Ec(a, b, c, d);
        }
        return 0 === mc(new Uint8Array(a.buffer), new Uint8Array(b.buffer));
    }
    return c ? a === b : a == b;
}
function Fc(a) {
    return "[object Arguments]" == Object.prototype.toString.call(a);
}
function Ec(a, b, c, d) {
    if (null === a || (void 0) === a || null === b || (void 0) === b) return !1;
    if (hc(a) || hc(b)) return a === b;
    if (c && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return !1;
    var e = Fc(a), f = Fc(b);
    if (e && !f || !e && f) return !1;
    if (e) return a = pc.call(a), b = pc.call(b), Cc(a, b, c);
    e = oc(a);
    var g = oc(b);
    if (e.length !== g.length) return !1;
    e.sort();
    g.sort();
    for(f = e.length - 1; 0 <= f; f--)if (e[f] !== g[f]) return !1;
    for(f = e.length - 1; 0 <= f; f--)if (g = e[f], !Cc(a[g], b[g], c, d)) return !1;
    return !0;
}
I.notDeepEqual = Gc;
function Gc(a, b, c) {
    Cc(a, b, !1) && J(a, b, c, "notDeepEqual", Gc);
}
I.notDeepStrictEqual = Hc;
function Hc(a, b, c) {
    Cc(a, b, !0) && J(a, b, c, "notDeepStrictEqual", Hc);
}
I.strictEqual = Ic;
function Ic(a, b, c) {
    a !== b && J(a, b, c, "===", Ic);
}
I.notStrictEqual = Jc;
function Jc(a, b, c) {
    a === b && J(a, b, c, "!==", Jc);
}
function Kc(a, b) {
    if (!a || !b) return !1;
    if ("[object RegExp]" == Object.prototype.toString.call(b)) return b.test(a);
    try {
        if (a instanceof b) return !0;
    } catch (c) {
    }
    return Error.isPrototypeOf(b) ? !1 : !0 === b.call({
    }, a);
}
function Lc(a, b, c, d) {
    if ("function" !== typeof b) throw new TypeError('"block" argument must be a function');
    "string" === typeof c && (d = c, c = null);
    try {
        b();
    } catch (h) {
        var e = h;
    }
    b = e;
    d = (c && c.name ? " (" + c.name + ")." : ".") + (d ? " " + d : ".");
    a && !b && J(b, c, "Missing expected exception" + d);
    e = "string" === typeof d;
    var f = !a && Vb(b), g = !a && b && !c;
    (f && e && Kc(b, c) || g) && J(b, c, "Got unwanted exception" + d);
    if (a && b && c && !Kc(b, c) || !a && b) throw b;
}
I.throws = Mc;
function Mc(a, b, c) {
    Lc(!0, a, b, c);
}
I.doesNotThrow = Nc;
function Nc(a, b, c) {
    Lc(!1, a, b, c);
}
I.ifError = Oc;
function Oc(a) {
    if (a) throw a;
}
var Pc = u(function(a, b) {
    function c(a1) {
        return (function(a2) {
            function b1(b2) {
                for(var c1 = [], e = 1; e < arguments.length; e++)c1[e - 1] = arguments[e];
                c1 = a2.call(this, d(b2, c1)) || this;
                c1.code = b2;
                c1[h] = b2;
                c1.name = a2.prototype.name + " [" + c1[h] + "]";
                return c1;
            }
            g(b1, a2);
            return b1;
        })(a1);
    }
    function d(a1, b1) {
        I.strictEqual(typeof a1, "string");
        var c1 = k[a1];
        I(c1, "An invalid error message key was used: " + a1 + ".");
        if ("function" === typeof c1) a1 = c1;
        else {
            a1 = lc.format;
            if ((void 0) === b1 || 0 === b1.length) return c1;
            b1.unshift(c1);
        }
        return String(a1.apply(null, b1));
    }
    function e(a1, b1) {
        k[a1] = "function" === typeof b1 ? b1 : String(b1);
    }
    function f(a1, b1) {
        I(a1, "expected is required");
        I("string" === typeof b1, "thing is required");
        if (Array.isArray(a1)) {
            var c1 = a1.length;
            I(0 < c1, "At least one expected value needs to be specified");
            a1 = a1.map(function(a2) {
                return String(a2);
            });
            return 2 < c1 ? "one of " + b1 + " " + a1.slice(0, c1 - 1).join(", ") + ", or " + a1[c1 - 1] : 2 === c1 ? "one of " + b1 + " " + a1[0] + " or " + a1[1] : "of " + b1 + " " + a1[0];
        }
        return "of " + b1 + " " + String(a1);
    }
    var g = l && l.__extends || function() {
        function a1(b1, c2) {
            a1 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a2, b2) {
                a2.__proto__ = b2;
            } || function(a2, b2) {
                for(var c3 in b2)b2.hasOwnProperty(c3) && (a2[c3] = b2[c3]);
            };
            return a1(b1, c2);
        }
        return function(b1, c2) {
            function d1() {
                this.constructor = b1;
            }
            a1(b1, c2);
            b1.prototype = null === c2 ? Object.create(c2) : (d1.prototype = c2.prototype, new d1);
        };
    }();
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var h = "undefined" === typeof Symbol ? "_kCode" : Symbol("code"), k = {
    };
    a = (function(a1) {
        function c2(c3) {
            if ("object" !== typeof c3 || null === c3) throw new b.TypeError("ERR_INVALID_ARG_TYPE", "options", "object");
            var d1 = c3.message ? a1.call(this, c3.message) || this : a1.call(this, lc.inspect(c3.actual).slice(0, 128) + " " + (c3.operator + " " + lc.inspect(c3.expected).slice(0, 128))) || this;
            d1.generatedMessage = !c3.message;
            d1.name = "AssertionError [ERR_ASSERTION]";
            d1.code = "ERR_ASSERTION";
            d1.actual = c3.actual;
            d1.expected = c3.expected;
            d1.operator = c3.operator;
            b.Error.captureStackTrace(d1, c3.stackStartFunction);
            return d1;
        }
        g(c2, a1);
        return c2;
    })(l.Error);
    b.AssertionError = a;
    b.message = d;
    b.E = e;
    b.Error = c(l.Error);
    b.TypeError = c(l.TypeError);
    b.RangeError = c(l.RangeError);
    e("ERR_ARG_NOT_ITERABLE", "%s must be iterable");
    e("ERR_ASSERTION", "%s");
    e("ERR_BUFFER_OUT_OF_BOUNDS", function(a1, b1) {
        return b1 ? "Attempt to write outside buffer bounds" : '"' + a1 + '" is outside of buffer bounds';
    });
    e("ERR_CHILD_CLOSED_BEFORE_REPLY", "Child closed before reply received");
    e("ERR_CONSOLE_WRITABLE_STREAM", "Console expects a writable stream instance for %s");
    e("ERR_CPU_USAGE", "Unable to obtain cpu usage %s");
    e("ERR_DNS_SET_SERVERS_FAILED", function(a1, b1) {
        return 'c-ares failed to set servers: "' + a1 + '" [' + b1 + "]";
    });
    e("ERR_FALSY_VALUE_REJECTION", "Promise was rejected with falsy value");
    e("ERR_ENCODING_NOT_SUPPORTED", function(a1) {
        return 'The "' + a1 + '" encoding is not supported';
    });
    e("ERR_ENCODING_INVALID_ENCODED_DATA", function(a1) {
        return "The encoded data was not valid for encoding " + a1;
    });
    e("ERR_HTTP_HEADERS_SENT", "Cannot render headers after they are sent to the client");
    e("ERR_HTTP_INVALID_STATUS_CODE", "Invalid status code: %s");
    e("ERR_HTTP_TRAILER_INVALID", "Trailers are invalid with this transfer encoding");
    e("ERR_INDEX_OUT_OF_RANGE", "Index out of range");
    e("ERR_INVALID_ARG_TYPE", function(a1, b1, c2) {
        I(a1, "name is required");
        if (b1.includes("not ")) {
            var d1 = "must not be";
            b1 = b1.split("not ")[1];
        } else d1 = "must be";
        if (Array.isArray(a1)) d1 = "The " + a1.map(function(a2) {
            return '"' + a2 + '"';
        }).join(", ") + " arguments " + d1 + " " + f(b1, "type");
        else if (a1.includes(" argument")) d1 = "The " + a1 + " " + d1 + " " + f(b1, "type");
        else {
            var e1 = a1.includes(".") ? "property" : "argument";
            d1 = 'The "' + a1 + '" ' + e1 + " " + d1 + " " + f(b1, "type");
        }
        3 <= arguments.length && (d1 += ". Received type " + (null !== c2 ? typeof c2 : "null"));
        return d1;
    });
    e("ERR_INVALID_ARRAY_LENGTH", function(a1, b1, c2) {
        I.strictEqual(typeof c2, "number");
        return 'The array "' + a1 + '" (length ' + c2 + ") must be of length " + b1 + ".";
    });
    e("ERR_INVALID_BUFFER_SIZE", "Buffer size must be a multiple of %s");
    e("ERR_INVALID_CALLBACK", "Callback must be a function");
    e("ERR_INVALID_CHAR", "Invalid character in %s");
    e("ERR_INVALID_CURSOR_POS", "Cannot set cursor row without setting its column");
    e("ERR_INVALID_FD", '"fd" must be a positive integer: %s');
    e("ERR_INVALID_FILE_URL_HOST", 'File URL host must be "localhost" or empty on %s');
    e("ERR_INVALID_FILE_URL_PATH", "File URL path %s");
    e("ERR_INVALID_HANDLE_TYPE", "This handle type cannot be sent");
    e("ERR_INVALID_IP_ADDRESS", "Invalid IP address: %s");
    e("ERR_INVALID_OPT_VALUE", function(a1, b1) {
        return 'The value "' + String(b1) + '" is invalid for option "' + a1 + '"';
    });
    e("ERR_INVALID_OPT_VALUE_ENCODING", function(a1) {
        return 'The value "' + String(a1) + '" is invalid for option "encoding"';
    });
    e("ERR_INVALID_REPL_EVAL_CONFIG", 'Cannot specify both "breakEvalOnSigint" and "eval" for REPL');
    e("ERR_INVALID_SYNC_FORK_INPUT", "Asynchronous forks do not support Buffer, Uint8Array or string input: %s");
    e("ERR_INVALID_THIS", 'Value of "this" must be of type %s');
    e("ERR_INVALID_TUPLE", "%s must be an iterable %s tuple");
    e("ERR_INVALID_URL", "Invalid URL: %s");
    e("ERR_INVALID_URL_SCHEME", function(a1) {
        return "The URL must be " + f(a1, "scheme");
    });
    e("ERR_IPC_CHANNEL_CLOSED", "Channel closed");
    e("ERR_IPC_DISCONNECTED", "IPC channel is already disconnected");
    e("ERR_IPC_ONE_PIPE", "Child process can have only one IPC pipe");
    e("ERR_IPC_SYNC_FORK", "IPC cannot be used with synchronous forks");
    e("ERR_MISSING_ARGS", function() {
        for(var a1 = [], b1 = 0; b1 < arguments.length; b1++)a1[b1] = arguments[b1];
        I(0 < a1.length, "At least one arg needs to be specified");
        b1 = "The ";
        var c2 = a1.length;
        a1 = a1.map(function(a2) {
            return '"' + a2 + '"';
        });
        switch(c2){
            case 1:
                b1 += a1[0] + " argument";
                break;
            case 2:
                b1 += a1[0] + " and " + a1[1] + " arguments";
                break;
            default:
                b1 += a1.slice(0, c2 - 1).join(", "), b1 += ", and " + a1[c2 - 1] + " arguments";
        }
        return b1 + " must be specified";
    });
    e("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    e("ERR_NAPI_CONS_FUNCTION", "Constructor must be a function");
    e("ERR_NAPI_CONS_PROTOTYPE_OBJECT", "Constructor.prototype must be an object");
    e("ERR_NO_CRYPTO", "Node.js is not compiled with OpenSSL crypto support");
    e("ERR_NO_LONGER_SUPPORTED", "%s is no longer supported");
    e("ERR_PARSE_HISTORY_DATA", "Could not parse history data in %s");
    e("ERR_SOCKET_ALREADY_BOUND", "Socket is already bound");
    e("ERR_SOCKET_BAD_PORT", "Port should be > 0 and < 65536");
    e("ERR_SOCKET_BAD_TYPE", "Bad socket type specified. Valid types are: udp4, udp6");
    e("ERR_SOCKET_CANNOT_SEND", "Unable to send data");
    e("ERR_SOCKET_CLOSED", "Socket is closed");
    e("ERR_SOCKET_DGRAM_NOT_RUNNING", "Not running");
    e("ERR_STDERR_CLOSE", "process.stderr cannot be closed");
    e("ERR_STDOUT_CLOSE", "process.stdout cannot be closed");
    e("ERR_STREAM_WRAP", "Stream has StringDecoder set or is in objectMode");
    e("ERR_TLS_CERT_ALTNAME_INVALID", "Hostname/IP does not match certificate's altnames: %s");
    e("ERR_TLS_DH_PARAM_SIZE", function(a1) {
        return "DH parameter size " + a1 + " is less than 2048";
    });
    e("ERR_TLS_HANDSHAKE_TIMEOUT", "TLS handshake timeout");
    e("ERR_TLS_RENEGOTIATION_FAILED", "Failed to renegotiate");
    e("ERR_TLS_REQUIRED_SERVER_NAME", '"servername" is required parameter for Server.addContext');
    e("ERR_TLS_SESSION_ATTACK", "TSL session renegotiation attack detected");
    e("ERR_TRANSFORM_ALREADY_TRANSFORMING", "Calling transform done when still transforming");
    e("ERR_TRANSFORM_WITH_LENGTH_0", "Calling transform done when writableState.length != 0");
    e("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s");
    e("ERR_UNKNOWN_SIGNAL", "Unknown signal: %s");
    e("ERR_UNKNOWN_STDIN_TYPE", "Unknown stdin file type");
    e("ERR_UNKNOWN_STREAM_TYPE", "Unknown stream file type");
    e("ERR_V8BREAKITERATOR", "Full ICU data not installed. See https://github.com/nodejs/node/wiki/Intl");
});
t(Pc);
var K = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.ENCODING_UTF8 = "utf8";
    b.assertEncoding = function(a1) {
        if (a1 && !F.Buffer.isEncoding(a1)) throw new Pc.TypeError("ERR_INVALID_OPT_VALUE_ENCODING", a1);
    };
    b.strToEncoding = function(a1, d2) {
        return d2 && d2 !== b.ENCODING_UTF8 ? "buffer" === d2 ? new F.Buffer(a1) : new F.Buffer(a1).toString(d2) : a1;
    };
});
t(K);
var Qc = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var c2 = w.constants.S_IFMT, d2 = w.constants.S_IFDIR, e2 = w.constants.S_IFREG, f = w.constants.S_IFBLK, g = w.constants.S_IFCHR, h = w.constants.S_IFLNK, k = w.constants.S_IFIFO, p = w.constants.S_IFSOCK;
    a = (function() {
        function a1() {
            this.name = "";
            this.mode = 0;
        }
        a1.build = function(b1, c3) {
            var d3 = new a1, e3 = b1.getNode().mode;
            d3.name = K.strToEncoding(b1.getName(), c3);
            d3.mode = e3;
            return d3;
        };
        a1.prototype._checkModeProperty = function(a2) {
            return (this.mode & c2) === a2;
        };
        a1.prototype.isDirectory = function() {
            return this._checkModeProperty(d2);
        };
        a1.prototype.isFile = function() {
            return this._checkModeProperty(e2);
        };
        a1.prototype.isBlockDevice = function() {
            return this._checkModeProperty(f);
        };
        a1.prototype.isCharacterDevice = function() {
            return this._checkModeProperty(g);
        };
        a1.prototype.isSymbolicLink = function() {
            return this._checkModeProperty(h);
        };
        a1.prototype.isFIFO = function() {
            return this._checkModeProperty(k);
        };
        a1.prototype.isSocket = function() {
            return this._checkModeProperty(p);
        };
        return a1;
    })();
    b.Dirent = a;
    b.default = a;
});
t(Qc);
function Rc(a, b) {
    for(var c2 = 0, d2 = a.length - 1; 0 <= d2; d2--){
        var e2 = a[d2];
        "." === e2 ? a.splice(d2, 1) : ".." === e2 ? (a.splice(d2, 1), c2++) : c2 && (a.splice(d2, 1), c2--);
    }
    if (b) for(; c2--; c2)a.unshift("..");
    return a;
}
var Sc = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
function Tc() {
    for(var a = "", b = !1, c2 = arguments.length - 1; -1 <= c2 && !b; c2--){
        var d2 = 0 <= c2 ? arguments[c2] : "/";
        if ("string" !== typeof d2) throw new TypeError("Arguments to path.resolve must be strings");
        d2 && (a = d2 + "/" + a, b = "/" === d2.charAt(0));
    }
    a = Rc(Uc(a.split("/"), function(a1) {
        return !!a1;
    }), !b).join("/");
    return (b ? "/" : "") + a || ".";
}
function Vc(a) {
    var b = Wc(a), c2 = "/" === Xc(a, -1);
    (a = Rc(Uc(a.split("/"), function(a1) {
        return !!a1;
    }), !b).join("/")) || b || (a = ".");
    a && c2 && (a += "/");
    return (b ? "/" : "") + a;
}
function Wc(a) {
    return "/" === a.charAt(0);
}
function Yc(a, b) {
    function c2(a1) {
        for(var b1 = 0; b1 < a1.length && "" === a1[b1]; b1++);
        for(var c3 = a1.length - 1; 0 <= c3 && "" === a1[c3]; c3--);
        return b1 > c3 ? [] : a1.slice(b1, c3 - b1 + 1);
    }
    a = Tc(a).substr(1);
    b = Tc(b).substr(1);
    a = c2(a.split("/"));
    b = c2(b.split("/"));
    for(var d3 = Math.min(a.length, b.length), e3 = d3, f = 0; f < d3; f++)if (a[f] !== b[f]) {
        e3 = f;
        break;
    }
    d3 = [];
    for(f = e3; f < a.length; f++)d3.push("..");
    d3 = d3.concat(b.slice(e3));
    return d3.join("/");
}
var Zc = {
    extname: function(a) {
        return Sc.exec(a).slice(1)[3];
    },
    basename: function(a, b) {
        a = Sc.exec(a).slice(1)[2];
        b && a.substr(-1 * b.length) === b && (a = a.substr(0, a.length - b.length));
        return a;
    },
    dirname: function(a) {
        var b = Sc.exec(a).slice(1);
        a = b[0];
        b = b[1];
        if (!a && !b) return ".";
        b && (b = b.substr(0, b.length - 1));
        return a + b;
    },
    sep: "/",
    delimiter: ":",
    relative: Yc,
    join: function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return Vc(Uc(a, function(a1) {
            if ("string" !== typeof a1) throw new TypeError("Arguments to path.join must be strings");
            return a1;
        }).join("/"));
    },
    isAbsolute: Wc,
    normalize: Vc,
    resolve: Tc
};
function Uc(a, b) {
    if (a.filter) return a.filter(b);
    for(var c2 = [], d3 = 0; d3 < a.length; d3++)b(a[d3], d3, a) && c2.push(a[d3]);
    return c2;
}
var Xc = "b" === "ab".substr(-1) ? function(a, b, c2) {
    return a.substr(b, c2);
} : function(a, b, c2) {
    0 > b && (b = a.length + b);
    return a.substr(b, c2);
}, $c = u(function(a, b) {
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    a = "function" === typeof setImmediate ? setImmediate.bind(l) : setTimeout.bind(l);
    b.default = a;
});
t($c);
var L = u(function(a, b) {
    function c2() {
        var a1 = Cb || {
        };
        a1.getuid || (a1.getuid = function() {
            return 0;
        });
        a1.getgid || (a1.getgid = function() {
            return 0;
        });
        a1.cwd || (a1.cwd = function() {
            return "/";
        });
        a1.nextTick || (a1.nextTick = $c.default);
        a1.emitWarning || (a1.emitWarning = function(a2, b1) {
            console.warn("" + b1 + (b1 ? ": " : "") + a2);
        });
        a1.env || (a1.env = {
        });
        return a1;
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    b.createProcess = c2;
    b.default = c2();
});
t(L);
function ad() {
}
ad.prototype = Object.create(null);
function O() {
    O.init.call(this);
}
O.EventEmitter = O;
O.usingDomains = !1;
O.prototype.domain = void 0;
O.prototype._events = void 0;
O.prototype._maxListeners = void 0;
O.defaultMaxListeners = 10;
O.init = function() {
    this.domain = null;
    this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new ad, this._eventsCount = 0);
    this._maxListeners = this._maxListeners || void 0;
};
O.prototype.setMaxListeners = function(a) {
    if ("number" !== typeof a || 0 > a || isNaN(a)) throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = a;
    return this;
};
O.prototype.getMaxListeners = function() {
    return (void 0) === this._maxListeners ? O.defaultMaxListeners : this._maxListeners;
};
O.prototype.emit = function(a) {
    var b, c2;
    var d3 = "error" === a;
    if (b = this._events) d3 = d3 && null == b.error;
    else if (!d3) return !1;
    var e3 = this.domain;
    if (d3) {
        b = arguments[1];
        if (e3) b || (b = Error('Uncaught, unspecified "error" event')), b.domainEmitter = this, b.domain = e3, b.domainThrown = !1, e3.emit("error", b);
        else {
            if (b instanceof Error) throw b;
            e3 = Error('Uncaught, unspecified "error" event. (' + b + ")");
            e3.context = b;
            throw e3;
        }
        return !1;
    }
    e3 = b[a];
    if (!e3) return !1;
    b = "function" === typeof e3;
    var f = arguments.length;
    switch(f){
        case 1:
            if (b) e3.call(this);
            else for(b = e3.length, e3 = bd(e3, b), d3 = 0; d3 < b; ++d3)e3[d3].call(this);
            break;
        case 2:
            d3 = arguments[1];
            if (b) e3.call(this, d3);
            else for(b = e3.length, e3 = bd(e3, b), f = 0; f < b; ++f)e3[f].call(this, d3);
            break;
        case 3:
            d3 = arguments[1];
            f = arguments[2];
            if (b) e3.call(this, d3, f);
            else for(b = e3.length, e3 = bd(e3, b), c2 = 0; c2 < b; ++c2)e3[c2].call(this, d3, f);
            break;
        case 4:
            d3 = arguments[1];
            f = arguments[2];
            c2 = arguments[3];
            if (b) e3.call(this, d3, f, c2);
            else {
                b = e3.length;
                e3 = bd(e3, b);
                for(var g = 0; g < b; ++g)e3[g].call(this, d3, f, c2);
            }
            break;
        default:
            d3 = Array(f - 1);
            for(c2 = 1; c2 < f; c2++)d3[c2 - 1] = arguments[c2];
            if (b) e3.apply(this, d3);
            else for(b = e3.length, e3 = bd(e3, b), f = 0; f < b; ++f)e3[f].apply(this, d3);
    }
    return !0;
};
function cd(a, b, c2, d3) {
    var e3;
    if ("function" !== typeof c2) throw new TypeError('"listener" argument must be a function');
    if (e3 = a._events) {
        e3.newListener && (a.emit("newListener", b, c2.listener ? c2.listener : c2), e3 = a._events);
        var f = e3[b];
    } else e3 = a._events = new ad, a._eventsCount = 0;
    f ? ("function" === typeof f ? f = e3[b] = d3 ? [
        c2,
        f
    ] : [
        f,
        c2
    ] : d3 ? f.unshift(c2) : f.push(c2), f.warned || (c2 = (void 0) === a._maxListeners ? O.defaultMaxListeners : a._maxListeners) && 0 < c2 && f.length > c2 && (f.warned = !0, c2 = Error("Possible EventEmitter memory leak detected. " + f.length + " " + b + " listeners added. Use emitter.setMaxListeners() to increase limit"), c2.name = "MaxListenersExceededWarning", c2.emitter = a, c2.type = b, c2.count = f.length, "function" === typeof console.warn ? console.warn(c2) : console.log(c2))) : (e3[b] = c2, ++a._eventsCount);
    return a;
}
O.prototype.addListener = function(a, b) {
    return cd(this, a, b, !1);
};
O.prototype.on = O.prototype.addListener;
O.prototype.prependListener = function(a, b) {
    return cd(this, a, b, !0);
};
function dd(a, b, c2) {
    function d3() {
        a.removeListener(b, d3);
        e3 || (e3 = !0, c2.apply(a, arguments));
    }
    var e3 = !1;
    d3.listener = c2;
    return d3;
}
O.prototype.once = function(a, b) {
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    this.on(a, dd(this, a, b));
    return this;
};
O.prototype.prependOnceListener = function(a, b) {
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    this.prependListener(a, dd(this, a, b));
    return this;
};
O.prototype.removeListener = function(a, b) {
    var c2;
    if ("function" !== typeof b) throw new TypeError('"listener" argument must be a function');
    var d3 = this._events;
    if (!d3) return this;
    var e3 = d3[a];
    if (!e3) return this;
    if (e3 === b || e3.listener && e3.listener === b) 0 === --this._eventsCount ? this._events = new ad : (delete d3[a], d3.removeListener && this.emit("removeListener", a, e3.listener || b));
    else if ("function" !== typeof e3) {
        var f = -1;
        for(c2 = e3.length; 0 < c2--;)if (e3[c2] === b || e3[c2].listener && e3[c2].listener === b) {
            var g = e3[c2].listener;
            f = c2;
            break;
        }
        if (0 > f) return this;
        if (1 === e3.length) {
            e3[0] = void 0;
            if (0 === --this._eventsCount) return this._events = new ad, this;
            delete d3[a];
        } else {
            c2 = f + 1;
            for(var h = e3.length; c2 < h; f += 1, c2 += 1)e3[f] = e3[c2];
            e3.pop();
        }
        d3.removeListener && this.emit("removeListener", a, g || b);
    }
    return this;
};
O.prototype.removeAllListeners = function(a) {
    var b = this._events;
    if (!b) return this;
    if (!b.removeListener) return 0 === arguments.length ? (this._events = new ad, this._eventsCount = 0) : b[a] && (0 === --this._eventsCount ? this._events = new ad : delete b[a]), this;
    if (0 === arguments.length) {
        b = Object.keys(b);
        for(var c2 = 0, d3; c2 < b.length; ++c2)d3 = b[c2], "removeListener" !== d3 && this.removeAllListeners(d3);
        this.removeAllListeners("removeListener");
        this._events = new ad;
        this._eventsCount = 0;
        return this;
    }
    b = b[a];
    if ("function" === typeof b) this.removeListener(a, b);
    else if (b) {
        do this.removeListener(a, b[b.length - 1]);
        while (b[0])
    }
    return this;
};
O.prototype.listeners = function(a) {
    var b = this._events;
    if (b) {
        if (a = b[a]) {
            if ("function" === typeof a) a = [
                a.listener || a
            ];
            else {
                b = Array(a.length);
                for(var c3 = 0; c3 < b.length; ++c3)b[c3] = a[c3].listener || a[c3];
                a = b;
            }
        } else a = [];
    } else a = [];
    return a;
};
O.listenerCount = function(a, b) {
    return "function" === typeof a.listenerCount ? a.listenerCount(b) : ed.call(a, b);
};
O.prototype.listenerCount = ed;
function ed(a) {
    var b = this._events;
    if (b) {
        a = b[a];
        if ("function" === typeof a) return 1;
        if (a) return a.length;
    }
    return 0;
}
O.prototype.eventNames = function() {
    return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
};
function bd(a, b) {
    for(var c4 = Array(b); b--;)c4[b] = a[b];
    return c4;
}
var fd = u(function(a, b) {
    var c4 = l && l.__extends || function() {
        function a1(b1, c5) {
            a1 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a2, b2) {
                a2.__proto__ = b2;
            } || function(a2, b2) {
                for(var c6 in b2)b2.hasOwnProperty(c6) && (a2[c6] = b2[c6]);
            };
            return a1(b1, c5);
        }
        return function(b1, c5) {
            function d4() {
                this.constructor = b1;
            }
            a1(b1, c5);
            b1.prototype = null === c5 ? Object.create(c5) : (d4.prototype = c5.prototype, new d4);
        };
    }();
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var d4 = w.constants.S_IFMT, e3 = w.constants.S_IFDIR, f = w.constants.S_IFREG, g = w.constants.S_IFLNK, h = w.constants.O_APPEND;
    b.SEP = "/";
    a = (function(a1) {
        function b1(b2, c5) {
            (void 0) === c5 && (c5 = 438);
            var d5 = a1.call(this) || this;
            d5.uid = L.default.getuid();
            d5.gid = L.default.getgid();
            d5.atime = new Date;
            d5.mtime = new Date;
            d5.ctime = new Date;
            d5.perm = 438;
            d5.mode = f;
            d5.nlink = 1;
            d5.perm = c5;
            d5.mode |= c5;
            d5.ino = b2;
            return d5;
        }
        c4(b1, a1);
        b1.prototype.getString = function(a2) {
            (void 0) === a2 && (a2 = "utf8");
            return this.getBuffer().toString(a2);
        };
        b1.prototype.setString = function(a2) {
            this.buf = F.bufferFrom(a2, "utf8");
            this.touch();
        };
        b1.prototype.getBuffer = function() {
            this.buf || this.setBuffer(F.bufferAllocUnsafe(0));
            return F.bufferFrom(this.buf);
        };
        b1.prototype.setBuffer = function(a2) {
            this.buf = F.bufferFrom(a2);
            this.touch();
        };
        b1.prototype.getSize = function() {
            return this.buf ? this.buf.length : 0;
        };
        b1.prototype.setModeProperty = function(a2) {
            this.mode = this.mode & ~d4 | a2;
        };
        b1.prototype.setIsFile = function() {
            this.setModeProperty(f);
        };
        b1.prototype.setIsDirectory = function() {
            this.setModeProperty(e3);
        };
        b1.prototype.setIsSymlink = function() {
            this.setModeProperty(g);
        };
        b1.prototype.isFile = function() {
            return (this.mode & d4) === f;
        };
        b1.prototype.isDirectory = function() {
            return (this.mode & d4) === e3;
        };
        b1.prototype.isSymlink = function() {
            return (this.mode & d4) === g;
        };
        b1.prototype.makeSymlink = function(a2) {
            this.symlink = a2;
            this.setIsSymlink();
        };
        b1.prototype.write = function(a2, b2, c5, d5) {
            (void 0) === b2 && (b2 = 0);
            (void 0) === c5 && (c5 = a2.length);
            (void 0) === d5 && (d5 = 0);
            this.buf || (this.buf = F.bufferAllocUnsafe(0));
            if (d5 + c5 > this.buf.length) {
                var e4 = F.bufferAllocUnsafe(d5 + c5);
                this.buf.copy(e4, 0, 0, this.buf.length);
                this.buf = e4;
            }
            a2.copy(this.buf, d5, b2, b2 + c5);
            this.touch();
            return c5;
        };
        b1.prototype.read = function(a2, b2, c5, d5) {
            (void 0) === b2 && (b2 = 0);
            (void 0) === c5 && (c5 = a2.byteLength);
            (void 0) === d5 && (d5 = 0);
            this.buf || (this.buf = F.bufferAllocUnsafe(0));
            c5 > a2.byteLength && (c5 = a2.byteLength);
            c5 + d5 > this.buf.length && (c5 = this.buf.length - d5);
            this.buf.copy(a2, b2, d5, d5 + c5);
            return c5;
        };
        b1.prototype.truncate = function(a2) {
            (void 0) === a2 && (a2 = 0);
            if (a2) {
                if (this.buf || (this.buf = F.bufferAllocUnsafe(0)), a2 <= this.buf.length) this.buf = this.buf.slice(0, a2);
                else {
                    var b2 = F.bufferAllocUnsafe(0);
                    this.buf.copy(b2);
                    b2.fill(0, a2);
                }
            } else this.buf = F.bufferAllocUnsafe(0);
            this.touch();
        };
        b1.prototype.chmod = function(a2) {
            this.perm = a2;
            this.mode = this.mode & -512 | a2;
            this.touch();
        };
        b1.prototype.chown = function(a2, b3) {
            this.uid = a2;
            this.gid = b3;
            this.touch();
        };
        b1.prototype.touch = function() {
            this.mtime = new Date;
            this.emit("change", this);
        };
        b1.prototype.canRead = function(a2, b3) {
            (void 0) === a2 && (a2 = L.default.getuid());
            (void 0) === b3 && (b3 = L.default.getgid());
            return this.perm & 4 || b3 === this.gid && this.perm & 32 || a2 === this.uid && this.perm & 256 ? !0 : !1;
        };
        b1.prototype.canWrite = function(a2, b3) {
            (void 0) === a2 && (a2 = L.default.getuid());
            (void 0) === b3 && (b3 = L.default.getgid());
            return this.perm & 2 || b3 === this.gid && this.perm & 16 || a2 === this.uid && this.perm & 128 ? !0 : !1;
        };
        b1.prototype.del = function() {
            this.emit("delete", this);
        };
        b1.prototype.toJSON = function() {
            return {
                ino: this.ino,
                uid: this.uid,
                gid: this.gid,
                atime: this.atime.getTime(),
                mtime: this.mtime.getTime(),
                ctime: this.ctime.getTime(),
                perm: this.perm,
                mode: this.mode,
                nlink: this.nlink,
                symlink: this.symlink,
                data: this.getString()
            };
        };
        return b1;
    })(O.EventEmitter);
    b.Node = a;
    a = (function(a1) {
        function d5(b1, c5, d6) {
            var e5 = a1.call(this) || this;
            e5.children = {
            };
            e5.steps = [];
            e5.ino = 0;
            e5.length = 0;
            e5.vol = b1;
            e5.parent = c5;
            e5.steps = c5 ? c5.steps.concat([
                d6
            ]) : [
                d6
            ];
            return e5;
        }
        c4(d5, a1);
        d5.prototype.setNode = function(a2) {
            this.node = a2;
            this.ino = a2.ino;
        };
        d5.prototype.getNode = function() {
            return this.node;
        };
        d5.prototype.createChild = function(a2, b1) {
            (void 0) === b1 && (b1 = this.vol.createNode());
            var c5 = new d5(this.vol, this, a2);
            c5.setNode(b1);
            b1.isDirectory();
            this.setChild(a2, c5);
            return c5;
        };
        d5.prototype.setChild = function(a2, b1) {
            (void 0) === b1 && (b1 = new d5(this.vol, this, a2));
            this.children[a2] = b1;
            b1.parent = this;
            this.length++;
            this.emit("child:add", b1, this);
            return b1;
        };
        d5.prototype.deleteChild = function(a2) {
            delete this.children[a2.getName()];
            this.length--;
            this.emit("child:delete", a2, this);
        };
        d5.prototype.getChild = function(a2) {
            if (Object.hasOwnProperty.call(this.children, a2)) return this.children[a2];
        };
        d5.prototype.getPath = function() {
            return this.steps.join(b.SEP);
        };
        d5.prototype.getName = function() {
            return this.steps[this.steps.length - 1];
        };
        d5.prototype.walk = function(a2, b1, c5) {
            (void 0) === b1 && (b1 = a2.length);
            (void 0) === c5 && (c5 = 0);
            if (c5 >= a2.length || c5 >= b1) return this;
            var d6 = this.getChild(a2[c5]);
            return d6 ? d6.walk(a2, b1, c5 + 1) : null;
        };
        d5.prototype.toJSON = function() {
            return {
                steps: this.steps,
                ino: this.ino,
                children: Object.keys(this.children)
            };
        };
        return d5;
    })(O.EventEmitter);
    b.Link = a;
    a = (function() {
        function a1(a2, b1, c5, d5) {
            this.position = 0;
            this.link = a2;
            this.node = b1;
            this.flags = c5;
            this.fd = d5;
        }
        a1.prototype.getString = function() {
            return this.node.getString();
        };
        a1.prototype.setString = function(a2) {
            this.node.setString(a2);
        };
        a1.prototype.getBuffer = function() {
            return this.node.getBuffer();
        };
        a1.prototype.setBuffer = function(a2) {
            this.node.setBuffer(a2);
        };
        a1.prototype.getSize = function() {
            return this.node.getSize();
        };
        a1.prototype.truncate = function(a2) {
            this.node.truncate(a2);
        };
        a1.prototype.seekTo = function(a2) {
            this.position = a2;
        };
        a1.prototype.stats = function() {
            return ka.default.build(this.node);
        };
        a1.prototype.write = function(a2, b1, c5, d5) {
            (void 0) === b1 && (b1 = 0);
            (void 0) === c5 && (c5 = a2.length);
            "number" !== typeof d5 && (d5 = this.position);
            this.flags & h && (d5 = this.getSize());
            a2 = this.node.write(a2, b1, c5, d5);
            this.position = d5 + a2;
            return a2;
        };
        a1.prototype.read = function(a2, b1, c5, d5) {
            (void 0) === b1 && (b1 = 0);
            (void 0) === c5 && (c5 = a2.byteLength);
            "number" !== typeof d5 && (d5 = this.position);
            a2 = this.node.read(a2, b1, c5, d5);
            this.position = d5 + a2;
            return a2;
        };
        a1.prototype.chmod = function(a2) {
            this.node.chmod(a2);
        };
        a1.prototype.chown = function(a2, b1) {
            this.node.chown(a2, b1);
        };
        return a1;
    })();
    b.File = a;
});
t(fd);
var gd = fd.Node, hd = u(function(a, b1) {
    Object.defineProperty(b1, "__esModule", {
        value: !0
    });
    b1.default = function(a1, b3, e3) {
        var c4 = setTimeout.apply(null, arguments);
        c4 && "object" === typeof c4 && "function" === typeof c4.unref && c4.unref();
        return c4;
    };
});
t(hd);
function id() {
    this.tail = this.head = null;
    this.length = 0;
}
id.prototype.push = function(a) {
    a = {
        data: a,
        next: null
    };
    0 < this.length ? this.tail.next = a : this.head = a;
    this.tail = a;
    ++this.length;
};
id.prototype.unshift = function(a) {
    a = {
        data: a,
        next: this.head
    };
    0 === this.length && (this.tail = a);
    this.head = a;
    ++this.length;
};
id.prototype.shift = function() {
    if (0 !== this.length) {
        var a = this.head.data;
        this.head = 1 === this.length ? this.tail = null : this.head.next;
        --this.length;
        return a;
    }
};
id.prototype.clear = function() {
    this.head = this.tail = null;
    this.length = 0;
};
id.prototype.join = function(a) {
    if (0 === this.length) return "";
    for(var b1 = this.head, c4 = "" + b1.data; b1 = b1.next;)c4 += a + b1.data;
    return c4;
};
id.prototype.concat = function(a) {
    if (0 === this.length) return z.alloc(0);
    if (1 === this.length) return this.head.data;
    a = z.allocUnsafe(a >>> 0);
    for(var b1 = this.head, c4 = 0; b1;)b1.data.copy(a, c4), c4 += b1.data.length, b1 = b1.next;
    return a;
};
var jd = z.isEncoding || function(a) {
    switch(a && a.toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
            return !0;
        default:
            return !1;
    }
};
function kd(a) {
    this.encoding = (a || "utf8").toLowerCase().replace(/[-_]/, "");
    if (a && !jd(a)) throw Error("Unknown encoding: " + a);
    switch(this.encoding){
        case "utf8":
            this.surrogateSize = 3;
            break;
        case "ucs2":
        case "utf16le":
            this.surrogateSize = 2;
            this.detectIncompleteChar = ld;
            break;
        case "base64":
            this.surrogateSize = 3;
            this.detectIncompleteChar = md;
            break;
        default:
            this.write = nd;
            return;
    }
    this.charBuffer = new z(6);
    this.charLength = this.charReceived = 0;
}
kd.prototype.write = function(a) {
    for(var b1 = ""; this.charLength;){
        b1 = a.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : a.length;
        a.copy(this.charBuffer, this.charReceived, 0, b1);
        this.charReceived += b1;
        if (this.charReceived < this.charLength) return "";
        a = a.slice(b1, a.length);
        b1 = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
        var c4 = b1.charCodeAt(b1.length - 1);
        if (55296 <= c4 && 56319 >= c4) this.charLength += this.surrogateSize, b1 = "";
        else {
            this.charReceived = this.charLength = 0;
            if (0 === a.length) return b1;
            break;
        }
    }
    this.detectIncompleteChar(a);
    var d4 = a.length;
    this.charLength && (a.copy(this.charBuffer, 0, a.length - this.charReceived, d4), d4 -= this.charReceived);
    b1 += a.toString(this.encoding, 0, d4);
    d4 = b1.length - 1;
    c4 = b1.charCodeAt(d4);
    return 55296 <= c4 && 56319 >= c4 ? (c4 = this.surrogateSize, this.charLength += c4, this.charReceived += c4, this.charBuffer.copy(this.charBuffer, c4, 0, c4), a.copy(this.charBuffer, 0, 0, c4), b1.substring(0, d4)) : b1;
};
kd.prototype.detectIncompleteChar = function(a) {
    for(var b1 = 3 <= a.length ? 3 : a.length; 0 < b1; b1--){
        var c5 = a[a.length - b1];
        if (1 == b1 && 6 == c5 >> 5) {
            this.charLength = 2;
            break;
        }
        if (2 >= b1 && 14 == c5 >> 4) {
            this.charLength = 3;
            break;
        }
        if (3 >= b1 && 30 == c5 >> 3) {
            this.charLength = 4;
            break;
        }
    }
    this.charReceived = b1;
};
kd.prototype.end = function(a) {
    var b1 = "";
    a && a.length && (b1 = this.write(a));
    this.charReceived && (a = this.encoding, b1 += this.charBuffer.slice(0, this.charReceived).toString(a));
    return b1;
};
function nd(a) {
    return a.toString(this.encoding);
}
function ld(a) {
    this.charLength = (this.charReceived = a.length % 2) ? 2 : 0;
}
function md(a) {
    this.charLength = (this.charReceived = a.length % 3) ? 3 : 0;
}
P.ReadableState = od;
var Q = Mb("stream");
Db(P, O);
function pd(a, b1, c6) {
    if ("function" === typeof a.prependListener) return a.prependListener(b1, c6);
    if (a._events && a._events[b1]) Array.isArray(a._events[b1]) ? a._events[b1].unshift(c6) : a._events[b1] = [
        c6,
        a._events[b1]
    ];
    else a.on(b1, c6);
}
function od(a, b1) {
    a = a || {
    };
    this.objectMode = !!a.objectMode;
    b1 instanceof V && (this.objectMode = this.objectMode || !!a.readableObjectMode);
    b1 = a.highWaterMark;
    var c6 = this.objectMode ? 16 : 16384;
    this.highWaterMark = b1 || 0 === b1 ? b1 : c6;
    this.highWaterMark = ~~this.highWaterMark;
    this.buffer = new id;
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.reading = this.endEmitted = this.ended = !1;
    this.sync = !0;
    this.resumeScheduled = this.readableListening = this.emittedReadable = this.needReadable = !1;
    this.defaultEncoding = a.defaultEncoding || "utf8";
    this.ranOut = !1;
    this.awaitDrain = 0;
    this.readingMore = !1;
    this.encoding = this.decoder = null;
    a.encoding && (this.decoder = new kd(a.encoding), this.encoding = a.encoding);
}
function P(a) {
    if (!(this instanceof P)) return new P(a);
    this._readableState = new od(a, this);
    this.readable = !0;
    a && "function" === typeof a.read && (this._read = a.read);
    O.call(this);
}
P.prototype.push = function(a, b1) {
    var c6 = this._readableState;
    c6.objectMode || "string" !== typeof a || (b1 = b1 || c6.defaultEncoding, b1 !== c6.encoding && (a = z.from(a, b1), b1 = ""));
    return qd(this, c6, a, b1, !1);
};
P.prototype.unshift = function(a) {
    return qd(this, this._readableState, a, "", !0);
};
P.prototype.isPaused = function() {
    return !1 === this._readableState.flowing;
};
function qd(a, b1, c6, d4, e3) {
    var f = c6;
    var g = null;
    Na(f) || "string" === typeof f || null === f || (void 0) === f || b1.objectMode || (g = new TypeError("Invalid non-string/buffer chunk"));
    if (f = g) a.emit("error", f);
    else if (null === c6) b1.reading = !1, b1.ended || (b1.decoder && (c6 = b1.decoder.end()) && c6.length && (b1.buffer.push(c6), b1.length += b1.objectMode ? 1 : c6.length), b1.ended = !0, rd(a));
    else if (b1.objectMode || c6 && 0 < c6.length) {
        if (b1.ended && !e3) a.emit("error", Error("stream.push() after EOF"));
        else if (b1.endEmitted && e3) a.emit("error", Error("stream.unshift() after end event"));
        else {
            if (b1.decoder && !e3 && !d4) {
                c6 = b1.decoder.write(c6);
                var h = !b1.objectMode && 0 === c6.length;
            }
            e3 || (b1.reading = !1);
            h || (b1.flowing && 0 === b1.length && !b1.sync ? (a.emit("data", c6), a.read(0)) : (b1.length += b1.objectMode ? 1 : c6.length, e3 ? b1.buffer.unshift(c6) : b1.buffer.push(c6), b1.needReadable && rd(a)));
            b1.readingMore || (b1.readingMore = !0, G(sd, a, b1));
        }
    } else e3 || (b1.reading = !1);
    return !b1.ended && (b1.needReadable || b1.length < b1.highWaterMark || 0 === b1.length);
}
P.prototype.setEncoding = function(a) {
    this._readableState.decoder = new kd(a);
    this._readableState.encoding = a;
    return this;
};
function td(a, b1) {
    if (0 >= a || 0 === b1.length && b1.ended) return 0;
    if (b1.objectMode) return 1;
    if (a !== a) return b1.flowing && b1.length ? b1.buffer.head.data.length : b1.length;
    if (a > b1.highWaterMark) {
        var c6 = a;
        8388608 <= c6 ? c6 = 8388608 : (c6--, c6 |= c6 >>> 1, c6 |= c6 >>> 2, c6 |= c6 >>> 4, c6 |= c6 >>> 8, c6 |= c6 >>> 16, c6++);
        b1.highWaterMark = c6;
    }
    return a <= b1.length ? a : b1.ended ? b1.length : (b1.needReadable = !0, 0);
}
P.prototype.read = function(a) {
    Q("read", a);
    a = parseInt(a, 10);
    var b1 = this._readableState, c7 = a;
    0 !== a && (b1.emittedReadable = !1);
    if (0 === a && b1.needReadable && (b1.length >= b1.highWaterMark || b1.ended)) return Q("read: emitReadable", b1.length, b1.ended), 0 === b1.length && b1.ended ? Jd(this) : rd(this), null;
    a = td(a, b1);
    if (0 === a && b1.ended) return 0 === b1.length && Jd(this), null;
    var d4 = b1.needReadable;
    Q("need readable", d4);
    if (0 === b1.length || b1.length - a < b1.highWaterMark) d4 = !0, Q("length less than watermark", d4);
    b1.ended || b1.reading ? Q("reading or ended", !1) : d4 && (Q("do read"), b1.reading = !0, b1.sync = !0, 0 === b1.length && (b1.needReadable = !0), this._read(b1.highWaterMark), b1.sync = !1, b1.reading || (a = td(c7, b1)));
    d4 = 0 < a ? Kd(a, b1) : null;
    null === d4 ? (b1.needReadable = !0, a = 0) : b1.length -= a;
    0 === b1.length && (b1.ended || (b1.needReadable = !0), c7 !== a && b1.ended && Jd(this));
    null !== d4 && this.emit("data", d4);
    return d4;
};
function rd(a) {
    var b1 = a._readableState;
    b1.needReadable = !1;
    b1.emittedReadable || (Q("emitReadable", b1.flowing), b1.emittedReadable = !0, b1.sync ? G(Ld, a) : Ld(a));
}
function Ld(a) {
    Q("emit readable");
    a.emit("readable");
    Md(a);
}
function sd(a, b1) {
    for(var c7 = b1.length; !b1.reading && !b1.flowing && !b1.ended && b1.length < b1.highWaterMark && (Q("maybeReadMore read 0"), a.read(0), c7 !== b1.length);)c7 = b1.length;
    b1.readingMore = !1;
}
P.prototype._read = function() {
    this.emit("error", Error("not implemented"));
};
P.prototype.pipe = function(a, b1) {
    function c7(a1) {
        Q("onunpipe");
        a1 === n && e3();
    }
    function d4() {
        Q("onend");
        a.end();
    }
    function e3() {
        Q("cleanup");
        a.removeListener("close", h);
        a.removeListener("finish", k);
        a.removeListener("drain", B);
        a.removeListener("error", g);
        a.removeListener("unpipe", c7);
        n.removeListener("end", d4);
        n.removeListener("end", e3);
        n.removeListener("data", f);
        m = !0;
        !q.awaitDrain || a._writableState && !a._writableState.needDrain || B();
    }
    function f(b3) {
        Q("ondata");
        v = !1;
        !1 !== a.write(b3) || v || ((1 === q.pipesCount && q.pipes === a || 1 < q.pipesCount && -1 !== Nd(q.pipes, a)) && !m && (Q("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, v = !0), n.pause());
    }
    function g(b3) {
        Q("onerror", b3);
        p();
        a.removeListener("error", g);
        0 === a.listeners("error").length && a.emit("error", b3);
    }
    function h() {
        a.removeListener("finish", k);
        p();
    }
    function k() {
        Q("onfinish");
        a.removeListener("close", h);
        p();
    }
    function p() {
        Q("unpipe");
        n.unpipe(a);
    }
    var n = this, q = this._readableState;
    switch(q.pipesCount){
        case 0:
            q.pipes = a;
            break;
        case 1:
            q.pipes = [
                q.pipes,
                a
            ];
            break;
        default:
            q.pipes.push(a);
    }
    q.pipesCount += 1;
    Q("pipe count=%d opts=%j", q.pipesCount, b1);
    b1 = b1 && !1 === b1.end ? e3 : d4;
    if (q.endEmitted) G(b1);
    else n.once("end", b1);
    a.on("unpipe", c7);
    var B = Od(n);
    a.on("drain", B);
    var m = !1, v = !1;
    n.on("data", f);
    pd(a, "error", g);
    a.once("close", h);
    a.once("finish", k);
    a.emit("pipe", n);
    q.flowing || (Q("pipe resume"), n.resume());
    return a;
};
function Od(a) {
    return function() {
        var b1 = a._readableState;
        Q("pipeOnDrain", b1.awaitDrain);
        b1.awaitDrain && b1.awaitDrain--;
        0 === b1.awaitDrain && a.listeners("data").length && (b1.flowing = !0, Md(a));
    };
}
P.prototype.unpipe = function(a) {
    var b1 = this._readableState;
    if (0 === b1.pipesCount) return this;
    if (1 === b1.pipesCount) {
        if (a && a !== b1.pipes) return this;
        a || (a = b1.pipes);
        b1.pipes = null;
        b1.pipesCount = 0;
        b1.flowing = !1;
        a && a.emit("unpipe", this);
        return this;
    }
    if (!a) {
        a = b1.pipes;
        var c7 = b1.pipesCount;
        b1.pipes = null;
        b1.pipesCount = 0;
        b1.flowing = !1;
        for(b1 = 0; b1 < c7; b1++)a[b1].emit("unpipe", this);
        return this;
    }
    c7 = Nd(b1.pipes, a);
    if (-1 === c7) return this;
    b1.pipes.splice(c7, 1);
    --b1.pipesCount;
    1 === b1.pipesCount && (b1.pipes = b1.pipes[0]);
    a.emit("unpipe", this);
    return this;
};
P.prototype.on = function(a, b1) {
    b1 = O.prototype.on.call(this, a, b1);
    "data" === a ? !1 !== this._readableState.flowing && this.resume() : "readable" === a && (a = this._readableState, a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = !0, a.emittedReadable = !1, a.reading ? a.length && rd(this) : G(Pd, this)));
    return b1;
};
P.prototype.addListener = P.prototype.on;
function Pd(a) {
    Q("readable nexttick read 0");
    a.read(0);
}
P.prototype.resume = function() {
    var a = this._readableState;
    a.flowing || (Q("resume"), a.flowing = !0, a.resumeScheduled || (a.resumeScheduled = !0, G(Qd, this, a)));
    return this;
};
function Qd(a, b1) {
    b1.reading || (Q("resume read 0"), a.read(0));
    b1.resumeScheduled = !1;
    b1.awaitDrain = 0;
    a.emit("resume");
    Md(a);
    b1.flowing && !b1.reading && a.read(0);
}
P.prototype.pause = function() {
    Q("call pause flowing=%j", this._readableState.flowing);
    !1 !== this._readableState.flowing && (Q("pause"), this._readableState.flowing = !1, this.emit("pause"));
    return this;
};
function Md(a) {
    var b1 = a._readableState;
    for(Q("flow", b1.flowing); b1.flowing && null !== a.read(););
}
P.prototype.wrap = function(a) {
    var b1 = this._readableState, c8 = !1, d4 = this;
    a.on("end", function() {
        Q("wrapped end");
        if (b1.decoder && !b1.ended) {
            var a1 = b1.decoder.end();
            a1 && a1.length && d4.push(a1);
        }
        d4.push(null);
    });
    a.on("data", function(e3) {
        Q("wrapped data");
        b1.decoder && (e3 = b1.decoder.write(e3));
        b1.objectMode && (null === e3 || (void 0) === e3) || !(b1.objectMode || e3 && e3.length) || d4.push(e3) || (c8 = !0, a.pause());
    });
    for(var e3 in a)(void 0) === this[e3] && "function" === typeof a[e3] && (this[e3] = (function(b3) {
        return function() {
            return a[b3].apply(a, arguments);
        };
    })(e3));
    Rd([
        "error",
        "close",
        "destroy",
        "pause",
        "resume"
    ], function(b3) {
        a.on(b3, d4.emit.bind(d4, b3));
    });
    d4._read = function(b3) {
        Q("wrapped _read", b3);
        c8 && (c8 = !1, a.resume());
    };
    return d4;
};
P._fromList = Kd;
function Kd(a2, b1) {
    if (0 === b1.length) return null;
    if (b1.objectMode) var c8 = b1.buffer.shift();
    else if (!a2 || a2 >= b1.length) c8 = b1.decoder ? b1.buffer.join("") : 1 === b1.buffer.length ? b1.buffer.head.data : b1.buffer.concat(b1.length), b1.buffer.clear();
    else {
        c8 = b1.buffer;
        b1 = b1.decoder;
        if (a2 < c8.head.data.length) b1 = c8.head.data.slice(0, a2), c8.head.data = c8.head.data.slice(a2);
        else {
            if (a2 === c8.head.data.length) c8 = c8.shift();
            else if (b1) {
                b1 = c8.head;
                var d4 = 1, e3 = b1.data;
                for(a2 -= e3.length; b1 = b1.next;){
                    var f = b1.data, g = a2 > f.length ? f.length : a2;
                    e3 = g === f.length ? e3 + f : e3 + f.slice(0, a2);
                    a2 -= g;
                    if (0 === a2) {
                        g === f.length ? (++d4, c8.head = b1.next ? b1.next : c8.tail = null) : (c8.head = b1, b1.data = f.slice(g));
                        break;
                    }
                    ++d4;
                }
                c8.length -= d4;
                c8 = e3;
            } else {
                b1 = z.allocUnsafe(a2);
                d4 = c8.head;
                e3 = 1;
                d4.data.copy(b1);
                for(a2 -= d4.data.length; d4 = d4.next;){
                    f = d4.data;
                    g = a2 > f.length ? f.length : a2;
                    f.copy(b1, b1.length - a2, 0, g);
                    a2 -= g;
                    if (0 === a2) {
                        g === f.length ? (++e3, c8.head = d4.next ? d4.next : c8.tail = null) : (c8.head = d4, d4.data = f.slice(g));
                        break;
                    }
                    ++e3;
                }
                c8.length -= e3;
                c8 = b1;
            }
            b1 = c8;
        }
        c8 = b1;
    }
    return c8;
}
function Jd(a2) {
    var b1 = a2._readableState;
    if (0 < b1.length) throw Error('"endReadable()" called on non-empty stream');
    b1.endEmitted || (b1.ended = !0, G(Sd, b1, a2));
}
function Sd(a2, b1) {
    a2.endEmitted || 0 !== a2.length || (a2.endEmitted = !0, b1.readable = !1, b1.emit("end"));
}
function Rd(a2, b1) {
    for(var c8 = 0, d5 = a2.length; c8 < d5; c8++)b1(a2[c8], c8);
}
function Nd(a2, b1) {
    for(var c8 = 0, d5 = a2.length; c8 < d5; c8++)if (a2[c8] === b1) return c8;
    return -1;
}
W.WritableState = Td;
Db(W, O);
function Ud() {
}
function Vd(a2, b1, c8) {
    this.chunk = a2;
    this.encoding = b1;
    this.callback = c8;
    this.next = null;
}
function Td(a2, b1) {
    Object.defineProperty(this, "buffer", {
        get: Ib(function() {
            return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.")
    });
    a2 = a2 || {
    };
    this.objectMode = !!a2.objectMode;
    b1 instanceof V && (this.objectMode = this.objectMode || !!a2.writableObjectMode);
    var c8 = a2.highWaterMark, d5 = this.objectMode ? 16 : 16384;
    this.highWaterMark = c8 || 0 === c8 ? c8 : d5;
    this.highWaterMark = ~~this.highWaterMark;
    this.finished = this.ended = this.ending = this.needDrain = !1;
    this.decodeStrings = !1 !== a2.decodeStrings;
    this.defaultEncoding = a2.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = !1;
    this.corked = 0;
    this.sync = !0;
    this.bufferProcessing = !1;
    this.onwrite = function(a3) {
        var c9 = b1._writableState, d6 = c9.sync, e5 = c9.writecb;
        c9.writing = !1;
        c9.writecb = null;
        c9.length -= c9.writelen;
        c9.writelen = 0;
        a3 ? (--c9.pendingcb, d6 ? G(e5, a3) : e5(a3), b1._writableState.errorEmitted = !0, b1.emit("error", a3)) : ((a3 = Wd(c9)) || c9.corked || c9.bufferProcessing || !c9.bufferedRequest || Xd(b1, c9), d6 ? G(Yd, b1, c9, a3, e5) : Yd(b1, c9, a3, e5));
    };
    this.writecb = null;
    this.writelen = 0;
    this.lastBufferedRequest = this.bufferedRequest = null;
    this.pendingcb = 0;
    this.errorEmitted = this.prefinished = !1;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new Zd(this);
}
Td.prototype.getBuffer = function() {
    for(var a2 = this.bufferedRequest, b1 = []; a2;)b1.push(a2), a2 = a2.next;
    return b1;
};
function W(a2) {
    if (!(this instanceof W || this instanceof V)) return new W(a2);
    this._writableState = new Td(a2, this);
    this.writable = !0;
    a2 && ("function" === typeof a2.write && (this._write = a2.write), "function" === typeof a2.writev && (this._writev = a2.writev));
    O.call(this);
}
W.prototype.pipe = function() {
    this.emit("error", Error("Cannot pipe, not readable"));
};
W.prototype.write = function(a2, b1, c8) {
    var d5 = this._writableState, e5 = !1;
    "function" === typeof b1 && (c8 = b1, b1 = null);
    z.isBuffer(a2) ? b1 = "buffer" : b1 || (b1 = d5.defaultEncoding);
    "function" !== typeof c8 && (c8 = Ud);
    if (d5.ended) d5 = c8, a2 = Error("write after end"), this.emit("error", a2), G(d5, a2);
    else {
        var f = c8, g = !0, h = !1;
        null === a2 ? h = new TypeError("May not write null values to stream") : z.isBuffer(a2) || "string" === typeof a2 || (void 0) === a2 || d5.objectMode || (h = new TypeError("Invalid non-string/buffer chunk"));
        h && (this.emit("error", h), G(f, h), g = !1);
        g && (d5.pendingcb++, e5 = b1, d5.objectMode || !1 === d5.decodeStrings || "string" !== typeof a2 || (a2 = z.from(a2, e5)), z.isBuffer(a2) && (e5 = "buffer"), f = d5.objectMode ? 1 : a2.length, d5.length += f, b1 = d5.length < d5.highWaterMark, b1 || (d5.needDrain = !0), d5.writing || d5.corked ? (f = d5.lastBufferedRequest, d5.lastBufferedRequest = new Vd(a2, e5, c8), f ? f.next = d5.lastBufferedRequest : d5.bufferedRequest = d5.lastBufferedRequest, d5.bufferedRequestCount += 1) : $d(this, d5, !1, f, a2, e5, c8), e5 = b1);
    }
    return e5;
};
W.prototype.cork = function() {
    this._writableState.corked++;
};
W.prototype.uncork = function() {
    var a2 = this._writableState;
    a2.corked && (a2.corked--, a2.writing || a2.corked || a2.finished || a2.bufferProcessing || !a2.bufferedRequest || Xd(this, a2));
};
W.prototype.setDefaultEncoding = function(a2) {
    "string" === typeof a2 && (a2 = a2.toLowerCase());
    if (!(-1 < "hex utf8 utf-8 ascii binary base64 ucs2 ucs-2 utf16le utf-16le raw".split(" ").indexOf((a2 + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + a2);
    this._writableState.defaultEncoding = a2;
    return this;
};
function $d(a2, b1, c8, d5, e5, f, g) {
    b1.writelen = d5;
    b1.writecb = g;
    b1.writing = !0;
    b1.sync = !0;
    c8 ? a2._writev(e5, b1.onwrite) : a2._write(e5, f, b1.onwrite);
    b1.sync = !1;
}
function Yd(a2, b1, c8, d5) {
    !c8 && 0 === b1.length && b1.needDrain && (b1.needDrain = !1, a2.emit("drain"));
    b1.pendingcb--;
    d5();
    ae(a2, b1);
}
function Xd(a2, b1) {
    b1.bufferProcessing = !0;
    var c8 = b1.bufferedRequest;
    if (a2._writev && c8 && c8.next) {
        var d5 = Array(b1.bufferedRequestCount), e5 = b1.corkedRequestsFree;
        e5.entry = c8;
        for(var f = 0; c8;)d5[f] = c8, c8 = c8.next, f += 1;
        $d(a2, b1, !0, b1.length, d5, "", e5.finish);
        b1.pendingcb++;
        b1.lastBufferedRequest = null;
        e5.next ? (b1.corkedRequestsFree = e5.next, e5.next = null) : b1.corkedRequestsFree = new Zd(b1);
    } else {
        for(; c8 && (d5 = c8.chunk, $d(a2, b1, !1, b1.objectMode ? 1 : d5.length, d5, c8.encoding, c8.callback), c8 = c8.next, !b1.writing););
        null === c8 && (b1.lastBufferedRequest = null);
    }
    b1.bufferedRequestCount = 0;
    b1.bufferedRequest = c8;
    b1.bufferProcessing = !1;
}
W.prototype._write = function(a2, b1, c8) {
    c8(Error("not implemented"));
};
W.prototype._writev = null;
W.prototype.end = function(a2, b1, c8) {
    var d6 = this._writableState;
    "function" === typeof a2 ? (c8 = a2, b1 = a2 = null) : "function" === typeof b1 && (c8 = b1, b1 = null);
    null !== a2 && (void 0) !== a2 && this.write(a2, b1);
    d6.corked && (d6.corked = 1, this.uncork());
    if (!d6.ending && !d6.finished) {
        a2 = c8;
        d6.ending = !0;
        ae(this, d6);
        if (a2) {
            if (d6.finished) G(a2);
            else this.once("finish", a2);
        }
        d6.ended = !0;
        this.writable = !1;
    }
};
function Wd(a2) {
    return a2.ending && 0 === a2.length && null === a2.bufferedRequest && !a2.finished && !a2.writing;
}
function ae(a2, b1) {
    var c8 = Wd(b1);
    c8 && (0 === b1.pendingcb ? (b1.prefinished || (b1.prefinished = !0, a2.emit("prefinish")), b1.finished = !0, a2.emit("finish")) : b1.prefinished || (b1.prefinished = !0, a2.emit("prefinish")));
    return c8;
}
function Zd(a2) {
    var b1 = this;
    this.entry = this.next = null;
    this.finish = function(c8) {
        var d6 = b1.entry;
        for(b1.entry = null; d6;){
            var e6 = d6.callback;
            a2.pendingcb--;
            e6(c8);
            d6 = d6.next;
        }
        a2.corkedRequestsFree ? a2.corkedRequestsFree.next = b1 : a2.corkedRequestsFree = b1;
    };
}
Db(V, P);
for(var be = Object.keys(W.prototype), ce = 0; ce < be.length; ce++){
    var de = be[ce];
    V.prototype[de] || (V.prototype[de] = W.prototype[de]);
}
function V(a2) {
    if (!(this instanceof V)) return new V(a2);
    P.call(this, a2);
    W.call(this, a2);
    a2 && !1 === a2.readable && (this.readable = !1);
    a2 && !1 === a2.writable && (this.writable = !1);
    this.allowHalfOpen = !0;
    a2 && !1 === a2.allowHalfOpen && (this.allowHalfOpen = !1);
    this.once("end", ee);
}
function ee() {
    this.allowHalfOpen || this._writableState.ended || G(fe, this);
}
function fe(a2) {
    a2.end();
}
Db(X, V);
function ge(a2) {
    this.afterTransform = function(b1, c8) {
        var d6 = a2._transformState;
        d6.transforming = !1;
        var e7 = d6.writecb;
        e7 ? (d6.writechunk = null, d6.writecb = null, null !== c8 && (void 0) !== c8 && a2.push(c8), e7(b1), b1 = a2._readableState, b1.reading = !1, (b1.needReadable || b1.length < b1.highWaterMark) && a2._read(b1.highWaterMark), b1 = void 0) : b1 = a2.emit("error", Error("no writecb in Transform class"));
        return b1;
    };
    this.transforming = this.needTransform = !1;
    this.writeencoding = this.writechunk = this.writecb = null;
}
function X(a2) {
    if (!(this instanceof X)) return new X(a2);
    V.call(this, a2);
    this._transformState = new ge(this);
    var b1 = this;
    this._readableState.needReadable = !0;
    this._readableState.sync = !1;
    a2 && ("function" === typeof a2.transform && (this._transform = a2.transform), "function" === typeof a2.flush && (this._flush = a2.flush));
    this.once("prefinish", function() {
        "function" === typeof this._flush ? this._flush(function(a3) {
            he(b1, a3);
        }) : he(b1);
    });
}
X.prototype.push = function(a2, b1) {
    this._transformState.needTransform = !1;
    return V.prototype.push.call(this, a2, b1);
};
X.prototype._transform = function() {
    throw Error("Not implemented");
};
X.prototype._write = function(a2, b1, c8) {
    var d6 = this._transformState;
    d6.writecb = c8;
    d6.writechunk = a2;
    d6.writeencoding = b1;
    d6.transforming || (a2 = this._readableState, (d6.needTransform || a2.needReadable || a2.length < a2.highWaterMark) && this._read(a2.highWaterMark));
};
X.prototype._read = function() {
    var a2 = this._transformState;
    null !== a2.writechunk && a2.writecb && !a2.transforming ? (a2.transforming = !0, this._transform(a2.writechunk, a2.writeencoding, a2.afterTransform)) : a2.needTransform = !0;
};
function he(a2, b1) {
    if (b1) return a2.emit("error", b1);
    b1 = a2._transformState;
    if (a2._writableState.length) throw Error("Calling transform done when ws.length != 0");
    if (b1.transforming) throw Error("Calling transform done when still transforming");
    return a2.push(null);
}
Db(ie, X);
function ie(a2) {
    if (!(this instanceof ie)) return new ie(a2);
    X.call(this, a2);
}
ie.prototype._transform = function(a2, b1, c8) {
    c8(null, a2);
};
Db(Y, O);
Y.Readable = P;
Y.Writable = W;
Y.Duplex = V;
Y.Transform = X;
Y.PassThrough = ie;
Y.Stream = Y;
function Y() {
    O.call(this);
}
Y.prototype.pipe = function(a2, b1) {
    function c8(b3) {
        a2.writable && !1 === a2.write(b3) && k.pause && k.pause();
    }
    function d6() {
        k.readable && k.resume && k.resume();
    }
    function e7() {
        p || (p = !0, a2.end());
    }
    function f() {
        p || (p = !0, "function" === typeof a2.destroy && a2.destroy());
    }
    function g(a3) {
        h();
        if (0 === O.listenerCount(this, "error")) throw a3;
    }
    function h() {
        k.removeListener("data", c8);
        a2.removeListener("drain", d6);
        k.removeListener("end", e7);
        k.removeListener("close", f);
        k.removeListener("error", g);
        a2.removeListener("error", g);
        k.removeListener("end", h);
        k.removeListener("close", h);
        a2.removeListener("close", h);
    }
    var k = this;
    k.on("data", c8);
    a2.on("drain", d6);
    a2._isStdio || b1 && !1 === b1.end || (k.on("end", e7), k.on("close", f));
    var p = !1;
    k.on("error", g);
    a2.on("error", g);
    k.on("end", h);
    k.on("close", h);
    a2.on("close", h);
    a2.emit("pipe", k);
    return a2;
};
var je = Array.prototype.slice, le = {
    extend: function ke(a2, b1) {
        for(var d6 in b1)a2[d6] = b1[d6];
        return 3 > arguments.length ? a2 : ke.apply(null, [
            a2
        ].concat(je.call(arguments, 2)));
    }
}, me = u(function(a2, b1) {
    function c8(a3, b3, c9) {
        (void 0) === c9 && (c9 = function(a4) {
            return a4;
        });
        return function() {
            for(var e7 = [], f = 0; f < arguments.length; f++)e7[f] = arguments[f];
            return new Promise(function(f1, g) {
                a3[b3].bind(a3).apply(void 0, d6(e7, [
                    function(a4, b4) {
                        return a4 ? g(a4) : f1(c9(b4));
                    }
                ]));
            });
        };
    }
    var d6 = l && l.__spreadArrays || function() {
        for(var a3 = 0, b3 = 0, c9 = arguments.length; b3 < c9; b3++)a3 += arguments[b3].length;
        a3 = Array(a3);
        var d7 = 0;
        for(b3 = 0; b3 < c9; b3++)for(var e7 = arguments[b3], n = 0, q = e7.length; n < q; n++, d7++)a3[d7] = e7[n];
        return a3;
    };
    Object.defineProperty(b1, "__esModule", {
        value: !0
    });
    var e7 = function() {
        function a3(a4, b3) {
            this.vol = a4;
            this.fd = b3;
        }
        a3.prototype.appendFile = function(a4, b3) {
            return c8(this.vol, "appendFile")(this.fd, a4, b3);
        };
        a3.prototype.chmod = function(a4) {
            return c8(this.vol, "fchmod")(this.fd, a4);
        };
        a3.prototype.chown = function(a4, b3) {
            return c8(this.vol, "fchown")(this.fd, a4, b3);
        };
        a3.prototype.close = function() {
            return c8(this.vol, "close")(this.fd);
        };
        a3.prototype.datasync = function() {
            return c8(this.vol, "fdatasync")(this.fd);
        };
        a3.prototype.read = function(a4, b3, d7, e8) {
            return c8(this.vol, "read", function(b4) {
                return {
                    bytesRead: b4,
                    buffer: a4
                };
            })(this.fd, a4, b3, d7, e8);
        };
        a3.prototype.readFile = function(a4) {
            return c8(this.vol, "readFile")(this.fd, a4);
        };
        a3.prototype.stat = function(a4) {
            return c8(this.vol, "fstat")(this.fd, a4);
        };
        a3.prototype.sync = function() {
            return c8(this.vol, "fsync")(this.fd);
        };
        a3.prototype.truncate = function(a4) {
            return c8(this.vol, "ftruncate")(this.fd, a4);
        };
        a3.prototype.utimes = function(a4, b3) {
            return c8(this.vol, "futimes")(this.fd, a4, b3);
        };
        a3.prototype.write = function(a4, b3, d7, e8) {
            return c8(this.vol, "write", function(b4) {
                return {
                    bytesWritten: b4,
                    buffer: a4
                };
            })(this.fd, a4, b3, d7, e8);
        };
        a3.prototype.writeFile = function(a4, b3) {
            return c8(this.vol, "writeFile")(this.fd, a4, b3);
        };
        return a3;
    }();
    b1.FileHandle = e7;
    b1.default = function(a3) {
        return "undefined" === typeof Promise ? null : {
            FileHandle: e7,
            access: function(b3, d7) {
                return c8(a3, "access")(b3, d7);
            },
            appendFile: function(b3, d7, f) {
                return c8(a3, "appendFile")(b3 instanceof e7 ? b3.fd : b3, d7, f);
            },
            chmod: function(b3, d7) {
                return c8(a3, "chmod")(b3, d7);
            },
            chown: function(b3, d7, e8) {
                return c8(a3, "chown")(b3, d7, e8);
            },
            copyFile: function(b3, d7, e8) {
                return c8(a3, "copyFile")(b3, d7, e8);
            },
            lchmod: function(b3, d7) {
                return c8(a3, "lchmod")(b3, d7);
            },
            lchown: function(b3, d7, e8) {
                return c8(a3, "lchown")(b3, d7, e8);
            },
            link: function(b3, d7) {
                return c8(a3, "link")(b3, d7);
            },
            lstat: function(b3, d7) {
                return c8(a3, "lstat")(b3, d7);
            },
            mkdir: function(b3, d7) {
                return c8(a3, "mkdir")(b3, d7);
            },
            mkdtemp: function(b3, d7) {
                return c8(a3, "mkdtemp")(b3, d7);
            },
            open: function(b3, d7, f) {
                return c8(a3, "open", function(b4) {
                    return new e7(a3, b4);
                })(b3, d7, f);
            },
            readdir: function(b3, d7) {
                return c8(a3, "readdir")(b3, d7);
            },
            readFile: function(b3, d7) {
                return c8(a3, "readFile")(b3 instanceof e7 ? b3.fd : b3, d7);
            },
            readlink: function(b3, d7) {
                return c8(a3, "readlink")(b3, d7);
            },
            realpath: function(b3, d7) {
                return c8(a3, "realpath")(b3, d7);
            },
            rename: function(b3, d7) {
                return c8(a3, "rename")(b3, d7);
            },
            rmdir: function(b3) {
                return c8(a3, "rmdir")(b3);
            },
            stat: function(b3, d7) {
                return c8(a3, "stat")(b3, d7);
            },
            symlink: function(b3, d7, e8) {
                return c8(a3, "symlink")(b3, d7, e8);
            },
            truncate: function(b3, d7) {
                return c8(a3, "truncate")(b3, d7);
            },
            unlink: function(b3) {
                return c8(a3, "unlink")(b3);
            },
            utimes: function(b3, d7, e8) {
                return c8(a3, "utimes")(b3, d7, e8);
            },
            writeFile: function(b3, d7, f) {
                return c8(a3, "writeFile")(b3 instanceof e7 ? b3.fd : b3, d7, f);
            }
        };
    };
});
t(me);
var ne = /[^\x20-\x7E]/, oe = /[\x2E\u3002\uFF0E\uFF61]/g, pe = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
}, qe = Math.floor, re = String.fromCharCode;
function se(a2, b1) {
    var c8 = a2.split("@"), d6 = "";
    1 < c8.length && (d6 = c8[0] + "@", a2 = c8[1]);
    a2 = a2.replace(oe, ".");
    a2 = a2.split(".");
    c8 = a2.length;
    for(var e7 = []; c8--;)e7[c8] = b1(a2[c8]);
    b1 = e7.join(".");
    return d6 + b1;
}
function te(a2, b1) {
    return a2 + 22 + 75 * (26 > a2) - ((0 != b1) << 5);
}
function ue(a2) {
    return se(a2, function(a3) {
        if (ne.test(a3)) {
            var b1;
            var d6 = [];
            var e7 = [];
            var f = 0;
            for(b1 = a3.length; f < b1;){
                var g = a3.charCodeAt(f++);
                if (55296 <= g && 56319 >= g && f < b1) {
                    var h = a3.charCodeAt(f++);
                    56320 == (h & 64512) ? e7.push(((g & 1023) << 10) + (h & 1023) + 65536) : (e7.push(g), f--);
                } else e7.push(g);
            }
            a3 = e7;
            h = a3.length;
            e7 = 128;
            var k = 0;
            var p = 72;
            for(g = 0; g < h; ++g){
                var n = a3[g];
                128 > n && d6.push(re(n));
            }
            for((f = b1 = d6.length) && d6.push("-"); f < h;){
                var q = 2147483647;
                for(g = 0; g < h; ++g)n = a3[g], n >= e7 && n < q && (q = n);
                var B = f + 1;
                if (q - e7 > qe((2147483647 - k) / B)) throw new RangeError(pe.overflow);
                k += (q - e7) * B;
                e7 = q;
                for(g = 0; g < h; ++g){
                    n = a3[g];
                    if (n < e7 && 2147483647 < ++k) throw new RangeError(pe.overflow);
                    if (n == e7) {
                        var m = k;
                        for(q = 36;; q += 36){
                            n = q <= p ? 1 : q >= p + 26 ? 26 : q - p;
                            if (m < n) break;
                            var v = m - n;
                            m = 36 - n;
                            d6.push(re(te(n + v % m, 0)));
                            m = qe(v / m);
                        }
                        d6.push(re(te(m, 0)));
                        p = B;
                        q = 0;
                        k = f == b1 ? qe(k / 700) : k >> 1;
                        for(k += qe(k / p); 455 < k; q += 36)k = qe(k / 35);
                        p = qe(q + 36 * k / (k + 38));
                        k = 0;
                        ++f;
                    }
                }
                ++k;
                ++e7;
            }
            d6 = "xn--" + d6.join("");
        } else d6 = a3;
        return d6;
    });
}
var ve = Array.isArray || function(a2) {
    return "[object Array]" === Object.prototype.toString.call(a2);
};
function we(a2) {
    switch(typeof a2){
        case "string":
            return a2;
        case "boolean":
            return a2 ? "true" : "false";
        case "number":
            return isFinite(a2) ? a2 : "";
        default:
            return "";
    }
}
function xe(a2, b3, c8, d7) {
    b3 = b3 || "&";
    c8 = c8 || "=";
    null === a2 && (a2 = void 0);
    return "object" === typeof a2 ? ye(ze(a2), function(d8) {
        var e8 = encodeURIComponent(we(d8)) + c8;
        return ve(a2[d8]) ? ye(a2[d8], function(a3) {
            return e8 + encodeURIComponent(we(a3));
        }).join(b3) : e8 + encodeURIComponent(we(a2[d8]));
    }).join(b3) : d7 ? encodeURIComponent(we(d7)) + c8 + encodeURIComponent(we(a2)) : "";
}
function ye(a2, b3) {
    if (a2.map) return a2.map(b3);
    for(var c8 = [], d7 = 0; d7 < a2.length; d7++)c8.push(b3(a2[d7], d7));
    return c8;
}
var ze = Object.keys || function(a2) {
    var b3 = [], c8;
    for(c8 in a2)Object.prototype.hasOwnProperty.call(a2, c8) && b3.push(c8);
    return b3;
};
function Ae(a2, b3, c8, d7) {
    c8 = c8 || "=";
    var e8 = {
    };
    if ("string" !== typeof a2 || 0 === a2.length) return e8;
    var f = /\+/g;
    a2 = a2.split(b3 || "&");
    b3 = 1000;
    d7 && "number" === typeof d7.maxKeys && (b3 = d7.maxKeys);
    d7 = a2.length;
    0 < b3 && d7 > b3 && (d7 = b3);
    for(b3 = 0; b3 < d7; ++b3){
        var g = a2[b3].replace(f, "%20"), h = g.indexOf(c8);
        if (0 <= h) {
            var k = g.substr(0, h);
            g = g.substr(h + 1);
        } else k = g, g = "";
        k = decodeURIComponent(k);
        g = decodeURIComponent(g);
        Object.prototype.hasOwnProperty.call(e8, k) ? ve(e8[k]) ? e8[k].push(g) : e8[k] = [
            e8[k],
            g
        ] : e8[k] = g;
    }
    return e8;
}
var Fe = {
    parse: Be,
    resolve: Ce,
    resolveObject: De,
    format: Ee,
    Url: Z
};
function Z() {
    this.href = this.path = this.pathname = this.query = this.search = this.hash = this.hostname = this.port = this.host = this.auth = this.slashes = this.protocol = null;
}
var Ge = /^([a-z0-9.+-]+:)/i, He = /:[0-9]*$/, Ie = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Je = "{}|\\^`".split("").concat('<>"` \r\n\t'.split("")), Ke = [
    "'"
].concat(Je), Le = [
    "%",
    "/",
    "?",
    ";",
    "#"
].concat(Ke), Me = [
    "/",
    "?",
    "#"
], Ne = 255, Oe = /^[+a-z0-9A-Z_-]{0,63}$/, Pe = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Qe = {
    javascript: !0,
    "javascript:": !0
}, Re = {
    javascript: !0,
    "javascript:": !0
}, Se = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
};
function Be(a2, b3, c8) {
    if (a2 && Hb(a2) && a2 instanceof Z) return a2;
    var d7 = new Z;
    d7.parse(a2, b3, c8);
    return d7;
}
Z.prototype.parse = function(a2, b3, c8) {
    return Te(this, a2, b3, c8);
};
function Te(a2, b3, c8, d7) {
    if (!Gb(b3)) throw new TypeError("Parameter 'url' must be a string, not " + typeof b3);
    var e8 = b3.indexOf("?");
    e8 = -1 !== e8 && e8 < b3.indexOf("#") ? "?" : "#";
    b3 = b3.split(e8);
    b3[0] = b3[0].replace(/\\/g, "/");
    b3 = b3.join(e8);
    e8 = b3.trim();
    if (!d7 && 1 === b3.split("#").length && (b3 = Ie.exec(e8))) return a2.path = e8, a2.href = e8, a2.pathname = b3[1], b3[2] ? (a2.search = b3[2], a2.query = c8 ? Ae(a2.search.substr(1)) : a2.search.substr(1)) : c8 && (a2.search = "", a2.query = {
    }), a2;
    if (b3 = Ge.exec(e8)) {
        b3 = b3[0];
        var f = b3.toLowerCase();
        a2.protocol = f;
        e8 = e8.substr(b3.length);
    }
    if (d7 || b3 || e8.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var g = "//" === e8.substr(0, 2);
        !g || b3 && Re[b3] || (e8 = e8.substr(2), a2.slashes = !0);
    }
    if (!Re[b3] && (g || b3 && !Se[b3])) {
        b3 = -1;
        for(d7 = 0; d7 < Me.length; d7++)g = e8.indexOf(Me[d7]), -1 !== g && (-1 === b3 || g < b3) && (b3 = g);
        g = -1 === b3 ? e8.lastIndexOf("@") : e8.lastIndexOf("@", b3);
        -1 !== g && (d7 = e8.slice(0, g), e8 = e8.slice(g + 1), a2.auth = decodeURIComponent(d7));
        b3 = -1;
        for(d7 = 0; d7 < Le.length; d7++)g = e8.indexOf(Le[d7]), -1 !== g && (-1 === b3 || g < b3) && (b3 = g);
        -1 === b3 && (b3 = e8.length);
        a2.host = e8.slice(0, b3);
        e8 = e8.slice(b3);
        Ue(a2);
        a2.hostname = a2.hostname || "";
        g = "[" === a2.hostname[0] && "]" === a2.hostname[a2.hostname.length - 1];
        if (!g) {
            var h = a2.hostname.split(/\./);
            d7 = 0;
            for(b3 = h.length; d7 < b3; d7++){
                var k = h[d7];
                if (k && !k.match(Oe)) {
                    for(var p = "", n = 0, q = k.length; n < q; n++)p = 127 < k.charCodeAt(n) ? p + "x" : p + k[n];
                    if (!p.match(Oe)) {
                        b3 = h.slice(0, d7);
                        d7 = h.slice(d7 + 1);
                        if (k = k.match(Pe)) b3.push(k[1]), d7.unshift(k[2]);
                        d7.length && (e8 = "/" + d7.join(".") + e8);
                        a2.hostname = b3.join(".");
                        break;
                    }
                }
            }
        }
        a2.hostname = a2.hostname.length > Ne ? "" : a2.hostname.toLowerCase();
        g || (a2.hostname = ue(a2.hostname));
        d7 = a2.port ? ":" + a2.port : "";
        a2.host = (a2.hostname || "") + d7;
        a2.href += a2.host;
        g && (a2.hostname = a2.hostname.substr(1, a2.hostname.length - 2), "/" !== e8[0] && (e8 = "/" + e8));
    }
    if (!Qe[f]) for(d7 = 0, b3 = Ke.length; d7 < b3; d7++)g = Ke[d7], -1 !== e8.indexOf(g) && (k = encodeURIComponent(g), k === g && (k = escape(g)), e8 = e8.split(g).join(k));
    d7 = e8.indexOf("#");
    -1 !== d7 && (a2.hash = e8.substr(d7), e8 = e8.slice(0, d7));
    d7 = e8.indexOf("?");
    -1 !== d7 ? (a2.search = e8.substr(d7), a2.query = e8.substr(d7 + 1), c8 && (a2.query = Ae(a2.query)), e8 = e8.slice(0, d7)) : c8 && (a2.search = "", a2.query = {
    });
    e8 && (a2.pathname = e8);
    Se[f] && a2.hostname && !a2.pathname && (a2.pathname = "/");
    if (a2.pathname || a2.search) d7 = a2.pathname || "", a2.path = d7 + (a2.search || "");
    a2.href = Ve(a2);
    return a2;
}
function Ee(a2) {
    Gb(a2) && (a2 = Te({
    }, a2));
    return Ve(a2);
}
function Ve(a2) {
    var b3 = a2.auth || "";
    b3 && (b3 = encodeURIComponent(b3), b3 = b3.replace(/%3A/i, ":"), b3 += "@");
    var c8 = a2.protocol || "", d7 = a2.pathname || "", e8 = a2.hash || "", f = !1, g = "";
    a2.host ? f = b3 + a2.host : a2.hostname && (f = b3 + (-1 === a2.hostname.indexOf(":") ? a2.hostname : "[" + this.hostname + "]"), a2.port && (f += ":" + a2.port));
    a2.query && Hb(a2.query) && Object.keys(a2.query).length && (g = xe(a2.query));
    b3 = a2.search || g && "?" + g || "";
    c8 && ":" !== c8.substr(-1) && (c8 += ":");
    a2.slashes || (!c8 || Se[c8]) && !1 !== f ? (f = "//" + (f || ""), d7 && "/" !== d7.charAt(0) && (d7 = "/" + d7)) : f || (f = "");
    e8 && "#" !== e8.charAt(0) && (e8 = "#" + e8);
    b3 && "?" !== b3.charAt(0) && (b3 = "?" + b3);
    d7 = d7.replace(/[?#]/g, function(a3) {
        return encodeURIComponent(a3);
    });
    b3 = b3.replace("#", "%23");
    return c8 + f + d7 + b3 + e8;
}
Z.prototype.format = function() {
    return Ve(this);
};
function Ce(a2, b3) {
    return Be(a2, !1, !0).resolve(b3);
}
Z.prototype.resolve = function(a2) {
    return this.resolveObject(Be(a2, !1, !0)).format();
};
function De(a2, b3) {
    return a2 ? Be(a2, !1, !0).resolveObject(b3) : b3;
}
Z.prototype.resolveObject = function(a2) {
    if (Gb(a2)) {
        var b3 = new Z;
        b3.parse(a2, !1, !0);
        a2 = b3;
    }
    b3 = new Z;
    for(var c8 = Object.keys(this), d7 = 0; d7 < c8.length; d7++){
        var e8 = c8[d7];
        b3[e8] = this[e8];
    }
    b3.hash = a2.hash;
    if ("" === a2.href) return b3.href = b3.format(), b3;
    if (a2.slashes && !a2.protocol) {
        c8 = Object.keys(a2);
        for(d7 = 0; d7 < c8.length; d7++)e8 = c8[d7], "protocol" !== e8 && (b3[e8] = a2[e8]);
        Se[b3.protocol] && b3.hostname && !b3.pathname && (b3.path = b3.pathname = "/");
        b3.href = b3.format();
        return b3;
    }
    var f;
    if (a2.protocol && a2.protocol !== b3.protocol) {
        if (!Se[a2.protocol]) {
            c8 = Object.keys(a2);
            for(d7 = 0; d7 < c8.length; d7++)e8 = c8[d7], b3[e8] = a2[e8];
            b3.href = b3.format();
            return b3;
        }
        b3.protocol = a2.protocol;
        if (a2.host || Re[a2.protocol]) b3.pathname = a2.pathname;
        else {
            for(f = (a2.pathname || "").split("/"); f.length && !(a2.host = f.shift()););
            a2.host || (a2.host = "");
            a2.hostname || (a2.hostname = "");
            "" !== f[0] && f.unshift("");
            2 > f.length && f.unshift("");
            b3.pathname = f.join("/");
        }
        b3.search = a2.search;
        b3.query = a2.query;
        b3.host = a2.host || "";
        b3.auth = a2.auth;
        b3.hostname = a2.hostname || a2.host;
        b3.port = a2.port;
        if (b3.pathname || b3.search) b3.path = (b3.pathname || "") + (b3.search || "");
        b3.slashes = b3.slashes || a2.slashes;
        b3.href = b3.format();
        return b3;
    }
    c8 = b3.pathname && "/" === b3.pathname.charAt(0);
    var g = a2.host || a2.pathname && "/" === a2.pathname.charAt(0), h = c8 = g || c8 || b3.host && a2.pathname;
    d7 = b3.pathname && b3.pathname.split("/") || [];
    e8 = b3.protocol && !Se[b3.protocol];
    f = a2.pathname && a2.pathname.split("/") || [];
    e8 && (b3.hostname = "", b3.port = null, b3.host && ("" === d7[0] ? d7[0] = b3.host : d7.unshift(b3.host)), b3.host = "", a2.protocol && (a2.hostname = null, a2.port = null, a2.host && ("" === f[0] ? f[0] = a2.host : f.unshift(a2.host)), a2.host = null), c8 = c8 && ("" === f[0] || "" === d7[0]));
    if (g) b3.host = a2.host || "" === a2.host ? a2.host : b3.host, b3.hostname = a2.hostname || "" === a2.hostname ? a2.hostname : b3.hostname, b3.search = a2.search, b3.query = a2.query, d7 = f;
    else if (f.length) d7 || (d7 = []), d7.pop(), d7 = d7.concat(f), b3.search = a2.search, b3.query = a2.query;
    else if (null != a2.search) {
        e8 && (b3.hostname = b3.host = d7.shift(), e8 = b3.host && 0 < b3.host.indexOf("@") ? b3.host.split("@") : !1) && (b3.auth = e8.shift(), b3.host = b3.hostname = e8.shift());
        b3.search = a2.search;
        b3.query = a2.query;
        if (null !== b3.pathname || null !== b3.search) b3.path = (b3.pathname ? b3.pathname : "") + (b3.search ? b3.search : "");
        b3.href = b3.format();
        return b3;
    }
    if (!d7.length) return b3.pathname = null, b3.path = b3.search ? "/" + b3.search : null, b3.href = b3.format(), b3;
    g = d7.slice(-1)[0];
    f = (b3.host || a2.host || 1 < d7.length) && ("." === g || ".." === g) || "" === g;
    for(var k = 0, p = d7.length; 0 <= p; p--)g = d7[p], "." === g ? d7.splice(p, 1) : ".." === g ? (d7.splice(p, 1), k++) : k && (d7.splice(p, 1), k--);
    if (!c8 && !h) for(; k--; k)d7.unshift("..");
    !c8 || "" === d7[0] || d7[0] && "/" === d7[0].charAt(0) || d7.unshift("");
    f && "/" !== d7.join("/").substr(-1) && d7.push("");
    h = "" === d7[0] || d7[0] && "/" === d7[0].charAt(0);
    e8 && (b3.hostname = b3.host = h ? "" : d7.length ? d7.shift() : "", e8 = b3.host && 0 < b3.host.indexOf("@") ? b3.host.split("@") : !1) && (b3.auth = e8.shift(), b3.host = b3.hostname = e8.shift());
    (c8 = c8 || b3.host && d7.length) && !h && d7.unshift("");
    d7.length ? b3.pathname = d7.join("/") : (b3.pathname = null, b3.path = null);
    if (null !== b3.pathname || null !== b3.search) b3.path = (b3.pathname ? b3.pathname : "") + (b3.search ? b3.search : "");
    b3.auth = a2.auth || b3.auth;
    b3.slashes = b3.slashes || a2.slashes;
    b3.href = b3.format();
    return b3;
};
Z.prototype.parseHost = function() {
    return Ue(this);
};
function Ue(a2) {
    var b4 = a2.host, c8 = He.exec(b4);
    c8 && (c8 = c8[0], ":" !== c8 && (a2.port = c8.substr(1)), b4 = b4.substr(0, b4.length - c8.length));
    b4 && (a2.hostname = b4);
}
var We = u(function(a2, b4) {
    function c8(a3, b5) {
        a3 = a3[b5];
        return 0 < b5 && ("/" === a3 || e9 && "\\" === a3);
    }
    function d7(a3) {
        var b5 = 1 < arguments.length && (void 0) !== arguments[1] ? arguments[1] : !0;
        if (e9) {
            var d8 = a3;
            if ("string" !== typeof d8) throw new TypeError("expected a string");
            d8 = d8.replace(/[\\\/]+/g, "/");
            if (!1 !== b5) {
                if (b5 = d8, d8 = b5.length - 1, 2 > d8) d8 = b5;
                else {
                    for(; c8(b5, d8);)d8--;
                    d8 = b5.substr(0, d8 + 1);
                }
            }
            return d8.replace(/^([a-zA-Z]+:|\.\/)/, "");
        }
        return a3;
    }
    Object.defineProperty(b4, "__esModule", {
        value: !0
    });
    b4.unixify = d7;
    b4.correctPath = function(a3) {
        return d7(a3.replace(/^\\\\\?\\.:\\/, "\\"));
    };
    var e9 = "win32" === Cb.platform;
});
t(We);
var Xe = u(function(a2, b4) {
    function c8(a3, b5) {
        (void 0) === b5 && (b5 = L.default.cwd());
        return cf(b5, a3);
    }
    function d7(a3, b5) {
        return "function" === typeof a3 ? [
            e9(),
            a3
        ] : [
            e9(a3),
            q(b5)
        ];
    }
    function e9(a3) {
        (void 0) === a3 && (a3 = {
        });
        return aa({
        }, df, a3);
    }
    function f(a3) {
        return "number" === typeof a3 ? aa({
        }, ud, {
            mode: a3
        }) : aa({
        }, ud, a3);
    }
    function g(a3, b5, c9, d9) {
        (void 0) === b5 && (b5 = "");
        (void 0) === c9 && (c9 = "");
        (void 0) === d9 && (d9 = "");
        var e10 = "";
        c9 && (e10 = " '" + c9 + "'");
        d9 && (e10 += " -> '" + d9 + "'");
        switch(a3){
            case "ENOENT":
                return "ENOENT: no such file or directory, " + b5 + e10;
            case "EBADF":
                return "EBADF: bad file descriptor, " + b5 + e10;
            case "EINVAL":
                return "EINVAL: invalid argument, " + b5 + e10;
            case "EPERM":
                return "EPERM: operation not permitted, " + b5 + e10;
            case "EPROTO":
                return "EPROTO: protocol error, " + b5 + e10;
            case "EEXIST":
                return "EEXIST: file already exists, " + b5 + e10;
            case "ENOTDIR":
                return "ENOTDIR: not a directory, " + b5 + e10;
            case "EISDIR":
                return "EISDIR: illegal operation on a directory, " + b5 + e10;
            case "EACCES":
                return "EACCES: permission denied, " + b5 + e10;
            case "ENOTEMPTY":
                return "ENOTEMPTY: directory not empty, " + b5 + e10;
            case "EMFILE":
                return "EMFILE: too many open files, " + b5 + e10;
            case "ENOSYS":
                return "ENOSYS: function not implemented, " + b5 + e10;
            default:
                return a3 + ": error occurred, " + b5 + e10;
        }
    }
    function h(a3, b5, c9, d9, e10) {
        (void 0) === b5 && (b5 = "");
        (void 0) === c9 && (c9 = "");
        (void 0) === d9 && (d9 = "");
        (void 0) === e10 && (e10 = Error);
        b5 = new e10(g(a3, b5, c9, d9));
        b5.code = a3;
        return b5;
    }
    function k(a3) {
        if ("number" === typeof a3) return a3;
        if ("string" === typeof a3) {
            var b5 = ua[a3];
            if ("undefined" !== typeof b5) return b5;
        }
        throw new Pc.TypeError("ERR_INVALID_OPT_VALUE", "flags", a3);
    }
    function p(a3, b6) {
        if (b6) {
            var c9 = typeof b6;
            switch(c9){
                case "string":
                    a3 = aa({
                    }, a3, {
                        encoding: b6
                    });
                    break;
                case "object":
                    a3 = aa({
                    }, a3, b6);
                    break;
                default:
                    throw TypeError("Expected options to be either an object or a string, but got " + c9 + " instead");
            }
        } else return a3;
        "buffer" !== a3.encoding && K.assertEncoding(a3.encoding);
        return a3;
    }
    function n(a3) {
        return function(b6) {
            return p(a3, b6);
        };
    }
    function q(a3) {
        if ("function" !== typeof a3) throw TypeError(fa.CB);
        return a3;
    }
    function B(a3) {
        return function(b6, c10) {
            return "function" === typeof b6 ? [
                a3(),
                b6
            ] : [
                a3(b6),
                q(c10)
            ];
        };
    }
    function m(a3) {
        if ("string" !== typeof a3 && !F.Buffer.isBuffer(a3)) {
            try {
                if (!(a3 instanceof Fe.URL)) throw new TypeError(fa.PATH_STR);
            } catch (Xa) {
                throw new TypeError(fa.PATH_STR);
            }
            if ("" !== a3.hostname) throw new Pc.TypeError("ERR_INVALID_FILE_URL_HOST", L.default.platform);
            a3 = a3.pathname;
            for(var b6 = 0; b6 < a3.length; b6++)if ("%" === a3[b6]) {
                var c10 = a3.codePointAt(b6 + 2) | 32;
                if ("2" === a3[b6 + 1] && 102 === c10) throw new Pc.TypeError("ERR_INVALID_FILE_URL_PATH", "must not include encoded / characters");
            }
            a3 = decodeURIComponent(a3);
        }
        a3 = String(a3);
        qb(a3);
        return a3;
    }
    function v(a3, b7) {
        return (a3 = c8(a3, b7).substr(1)) ? a3.split(S) : [];
    }
    function xa(a3) {
        return v(m(a3));
    }
    function La(a3, b7) {
        (void 0) === b7 && (b7 = K.ENCODING_UTF8);
        return F.Buffer.isBuffer(a3) ? a3 : a3 instanceof Uint8Array ? F.bufferFrom(a3) : F.bufferFrom(String(a3), b7);
    }
    function $b(a3, b7) {
        return b7 && "buffer" !== b7 ? a3.toString(b7) : a3;
    }
    function qb(a3, b7) {
        if (-1 !== ("" + a3).indexOf("\x00")) {
            a3 = Error("Path must be a string without null bytes");
            a3.code = "ENOENT";
            if ("function" !== typeof b7) throw a3;
            L.default.nextTick(b7, a3);
            return !1;
        }
        return !0;
    }
    function M(a3, b7) {
        a3 = "number" === typeof a3 ? a3 : "string" === typeof a3 ? parseInt(a3, 8) : b7 ? M(b7) : void 0;
        if ("number" !== typeof a3 || isNaN(a3)) throw new TypeError(fa.MODE_INT);
        return a3;
    }
    function Ya(a3) {
        if (a3 >>> 0 !== a3) throw TypeError(fa.FD);
    }
    function ha(a3) {
        if ("string" === typeof a3 && +a3 == a3) return +a3;
        if (a3 instanceof Date) return a3.getTime() / 1000;
        if (isFinite(a3)) return 0 > a3 ? Date.now() / 1000 : a3;
        throw Error("Cannot parse time: " + a3);
    }
    function Ha(a3) {
        if ("number" !== typeof a3) throw TypeError(fa.UID);
    }
    function Ia(a3) {
        if ("number" !== typeof a3) throw TypeError(fa.GID);
    }
    function ef(a3) {
        a3.emit("stop");
    }
    function T(a3, b7, c11) {
        if (!(this instanceof T)) return new T(a3, b7, c11);
        this._vol = a3;
        c11 = aa({
        }, p(c11, {
        }));
        (void 0) === c11.highWaterMark && (c11.highWaterMark = 65536);
        Y.Readable.call(this, c11);
        this.path = m(b7);
        this.fd = (void 0) === c11.fd ? null : c11.fd;
        this.flags = (void 0) === c11.flags ? "r" : c11.flags;
        this.mode = (void 0) === c11.mode ? 438 : c11.mode;
        this.start = c11.start;
        this.end = c11.end;
        this.autoClose = (void 0) === c11.autoClose ? !0 : c11.autoClose;
        this.pos = void 0;
        this.bytesRead = 0;
        if ((void 0) !== this.start) {
            if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
            if ((void 0) === this.end) this.end = Infinity;
            else if ("number" !== typeof this.end) throw new TypeError('"end" option must be a Number');
            if (this.start > this.end) throw Error('"start" option must be <= "end" option');
            this.pos = this.start;
        }
        "number" !== typeof this.fd && this.open();
        this.on("end", function() {
            this.autoClose && this.destroy && this.destroy();
        });
    }
    function ff() {
        this.close();
    }
    function R(a3, b7, c11) {
        if (!(this instanceof R)) return new R(a3, b7, c11);
        this._vol = a3;
        c11 = aa({
        }, p(c11, {
        }));
        Y.Writable.call(this, c11);
        this.path = m(b7);
        this.fd = (void 0) === c11.fd ? null : c11.fd;
        this.flags = (void 0) === c11.flags ? "w" : c11.flags;
        this.mode = (void 0) === c11.mode ? 438 : c11.mode;
        this.start = c11.start;
        this.autoClose = (void 0) === c11.autoClose ? !0 : !!c11.autoClose;
        this.pos = void 0;
        this.bytesWritten = 0;
        if ((void 0) !== this.start) {
            if ("number" !== typeof this.start) throw new TypeError('"start" option must be a Number');
            if (0 > this.start) throw Error('"start" must be >= zero');
            this.pos = this.start;
        }
        c11.encoding && this.setDefaultEncoding(c11.encoding);
        "number" !== typeof this.fd && this.open();
        this.once("finish", function() {
            this.autoClose && this.close();
        });
    }
    var Ja = l && l.__extends || function() {
        function a3(b7, c11) {
            a3 = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(a4, b8) {
                a4.__proto__ = b8;
            } || function(a4, b8) {
                for(var c12 in b8)b8.hasOwnProperty(c12) && (a4[c12] = b8[c12]);
            };
            return a3(b7, c11);
        }
        return function(b7, c11) {
            function d9() {
                this.constructor = b7;
            }
            a3(b7, c11);
            b7.prototype = null === c11 ? Object.create(c11) : (d9.prototype = c11.prototype, new d9);
        };
    }(), Xb = l && l.__spreadArrays || function() {
        for(var a3 = 0, b7 = 0, c11 = arguments.length; b7 < c11; b7++)a3 += arguments[b7].length;
        a3 = Array(a3);
        var d9 = 0;
        for(b7 = 0; b7 < c11; b7++)for(var e10 = arguments[b7], f1 = 0, g1 = e10.length; f1 < g1; f1++, d9++)a3[d9] = e10[f1];
        return a3;
    };
    Object.defineProperty(b4, "__esModule", {
        value: !0
    });
    var aa = le.extend, cf = Zc.resolve, mb = w.constants.O_RDONLY, Ka = w.constants.O_WRONLY, na = w.constants.O_RDWR, U = w.constants.O_CREAT, nb = w.constants.O_EXCL, Za = w.constants.O_TRUNC, $a = w.constants.O_APPEND, vd = w.constants.O_SYNC, gf = w.constants.O_DIRECTORY, wd = w.constants.F_OK, hf = w.constants.COPYFILE_EXCL, jf = w.constants.COPYFILE_FICLONE_FORCE;
    var S = Zc.sep;
    var xd = Zc.relative;
    var Yb = "win32" === L.default.platform, fa = {
        PATH_STR: "path must be a string or Buffer",
        FD: "fd must be a file descriptor",
        MODE_INT: "mode must be an int",
        CB: "callback must be a function",
        UID: "uid must be an unsigned int",
        GID: "gid must be an unsigned int",
        LEN: "len must be an integer",
        ATIME: "atime must be an integer",
        MTIME: "mtime must be an integer",
        PREFIX: "filename prefix is required",
        BUFFER: "buffer must be an instance of Buffer or StaticBuffer",
        OFFSET: "offset must be an integer",
        LENGTH: "length must be an integer",
        POSITION: "position must be an integer"
    }, ua;
    (function(a3) {
        a3[a3.r = mb] = "r";
        a3[a3["r+"] = na] = "r+";
        a3[a3.rs = mb | vd] = "rs";
        a3[a3.sr = a3.rs] = "sr";
        a3[a3["rs+"] = na | vd] = "rs+";
        a3[a3["sr+"] = a3["rs+"]] = "sr+";
        a3[a3.w = Ka | U | Za] = "w";
        a3[a3.wx = Ka | U | Za | nb] = "wx";
        a3[a3.xw = a3.wx] = "xw";
        a3[a3["w+"] = na | U | Za] = "w+";
        a3[a3["wx+"] = na | U | Za | nb] = "wx+";
        a3[a3["xw+"] = a3["wx+"]] = "xw+";
        a3[a3.a = Ka | $a | U] = "a";
        a3[a3.ax = Ka | $a | U | nb] = "ax";
        a3[a3.xa = a3.ax] = "xa";
        a3[a3["a+"] = na | $a | U] = "a+";
        a3[a3["ax+"] = na | $a | U | nb] = "ax+";
        a3[a3["xa+"] = a3["ax+"]] = "xa+";
    })(ua = b4.FLAGS || (b4.FLAGS = {
    }));
    b4.flagsToNumber = k;
    a2 = {
        encoding: "utf8"
    };
    var ob = n(a2), yd = B(ob), zd = n({
        flag: "r"
    }), Ad = {
        encoding: "utf8",
        mode: 438,
        flag: ua[ua.w]
    }, Bd = n(Ad), Cd = {
        encoding: "utf8",
        mode: 438,
        flag: ua[ua.a]
    }, Dd = n(Cd), kf = B(Dd), Ed = n(a2), lf = B(Ed), ud = {
        mode: 511,
        recursive: !1
    }, Fd = {
        recursive: !1
    }, Gd = n({
        encoding: "utf8",
        withFileTypes: !1
    }), mf = B(Gd), df = {
        bigint: !1
    };
    b4.pathToFilename = m;
    if (Yb) {
        var nf = c8, of = We.unixify;
        c8 = function(a3, b7) {
            return of(nf(a3, b7));
        };
    }
    b4.filenameToSteps = v;
    b4.pathToSteps = xa;
    b4.dataToStr = function(a3, b7) {
        (void 0) === b7 && (b7 = K.ENCODING_UTF8);
        return F.Buffer.isBuffer(a3) ? a3.toString(b7) : a3 instanceof Uint8Array ? F.bufferFrom(a3).toString(b7) : String(a3);
    };
    b4.dataToBuffer = La;
    b4.bufferToEncoding = $b;
    b4.toUnixTimestamp = ha;
    a2 = (function() {
        function a3(a4) {
            (void 0) === a4 && (a4 = {
            });
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.maxFiles = 10000;
            this.openFiles = 0;
            this.promisesApi = me.default(this);
            this.statWatchers = {
            };
            this.props = aa({
                Node: fd.Node,
                Link: fd.Link,
                File: fd.File
            }, a4);
            a4 = this.createLink();
            a4.setNode(this.createNode(!0));
            var b7 = this;
            this.StatWatcher = (function(a5) {
                function c11() {
                    return a5.call(this, b7) || this;
                }
                Ja(c11, a5);
                return c11;
            })(Hd);
            this.ReadStream = (function(a5) {
                function c11() {
                    for(var c12 = [], d9 = 0; d9 < arguments.length; d9++)c12[d9] = arguments[d9];
                    return a5.apply(this, Xb([
                        b7
                    ], c12)) || this;
                }
                Ja(c11, a5);
                return c11;
            })(T);
            this.WriteStream = (function(a5) {
                function c11() {
                    for(var c12 = [], d9 = 0; d9 < arguments.length; d9++)c12[d9] = arguments[d9];
                    return a5.apply(this, Xb([
                        b7
                    ], c12)) || this;
                }
                Ja(c11, a5);
                return c11;
            })(R);
            this.FSWatcher = (function(a5) {
                function c11() {
                    return a5.call(this, b7) || this;
                }
                Ja(c11, a5);
                return c11;
            })(Id);
            this.root = a4;
        }
        a3.fromJSON = function(b7, c11) {
            var d9 = new a3;
            d9.fromJSON(b7, c11);
            return d9;
        };
        Object.defineProperty(a3.prototype, "promises", {
            get: function() {
                if (null === this.promisesApi) throw Error("Promise is not supported in this environment.");
                return this.promisesApi;
            },
            enumerable: !0,
            configurable: !0
        });
        a3.prototype.createLink = function(a4, b7, c11, d9) {
            (void 0) === c11 && (c11 = !1);
            if (!a4) return new this.props.Link(this, null, "");
            if (!b7) throw Error("createLink: name cannot be empty");
            return a4.createChild(b7, this.createNode(c11, d9));
        };
        a3.prototype.deleteLink = function(a4) {
            var b7 = a4.parent;
            return b7 ? (b7.deleteChild(a4), !0) : !1;
        };
        a3.prototype.newInoNumber = function() {
            var a4 = this.releasedInos.pop();
            return a4 ? a4 : this.ino = (this.ino + 1) % 4294967295;
        };
        a3.prototype.newFdNumber = function() {
            var b7 = this.releasedFds.pop();
            return "number" === typeof b7 ? b7 : a3.fd--;
        };
        a3.prototype.createNode = function(a4, b7) {
            (void 0) === a4 && (a4 = !1);
            b7 = new this.props.Node(this.newInoNumber(), b7);
            a4 && b7.setIsDirectory();
            return this.inodes[b7.ino] = b7;
        };
        a3.prototype.getNode = function(a4) {
            return this.inodes[a4];
        };
        a3.prototype.deleteNode = function(a4) {
            a4.del();
            delete this.inodes[a4.ino];
            this.releasedInos.push(a4.ino);
        };
        a3.prototype.genRndStr = function() {
            var a4 = (Math.random() + 1).toString(36).substr(2, 6);
            return 6 === a4.length ? a4 : this.genRndStr();
        };
        a3.prototype.getLink = function(a4) {
            return this.root.walk(a4);
        };
        a3.prototype.getLinkOrThrow = function(a4, b7) {
            var c11 = v(a4);
            c11 = this.getLink(c11);
            if (!c11) throw h("ENOENT", b7, a4);
            return c11;
        };
        a3.prototype.getResolvedLink = function(a4) {
            a4 = "string" === typeof a4 ? v(a4) : a4;
            for(var b7 = this.root, c11 = 0; c11 < a4.length;){
                b7 = b7.getChild(a4[c11]);
                if (!b7) return null;
                var d9 = b7.getNode();
                d9.isSymlink() ? (a4 = d9.symlink.concat(a4.slice(c11 + 1)), b7 = this.root, c11 = 0) : c11++;
            }
            return b7;
        };
        a3.prototype.getResolvedLinkOrThrow = function(a4, b7) {
            var c11 = this.getResolvedLink(a4);
            if (!c11) throw h("ENOENT", b7, a4);
            return c11;
        };
        a3.prototype.resolveSymlinks = function(a4) {
            return this.getResolvedLink(a4.steps.slice(1));
        };
        a3.prototype.getLinkAsDirOrThrow = function(a4, b7) {
            var c11 = this.getLinkOrThrow(a4, b7);
            if (!c11.getNode().isDirectory()) throw h("ENOTDIR", b7, a4);
            return c11;
        };
        a3.prototype.getLinkParent = function(a4) {
            return this.root.walk(a4, a4.length - 1);
        };
        a3.prototype.getLinkParentAsDirOrThrow = function(a4, b7) {
            a4 = a4 instanceof Array ? a4 : v(a4);
            var c11 = this.getLinkParent(a4);
            if (!c11) throw h("ENOENT", b7, S + a4.join(S));
            if (!c11.getNode().isDirectory()) throw h("ENOTDIR", b7, S + a4.join(S));
            return c11;
        };
        a3.prototype.getFileByFd = function(a4) {
            return this.fds[String(a4)];
        };
        a3.prototype.getFileByFdOrThrow = function(a4, b7) {
            if (a4 >>> 0 !== a4) throw TypeError(fa.FD);
            a4 = this.getFileByFd(a4);
            if (!a4) throw h("EBADF", b7);
            return a4;
        };
        a3.prototype.getNodeByIdOrCreate = function(a4, b7, c11) {
            if ("number" === typeof a4) {
                a4 = this.getFileByFd(a4);
                if (!a4) throw Error("File nto found");
                return a4.node;
            }
            var d10 = xa(a4), e10 = this.getLink(d10);
            if (e10) return e10.getNode();
            if (b7 & U && (b7 = this.getLinkParent(d10))) return e10 = this.createLink(b7, d10[d10.length - 1], !1, c11), e10.getNode();
            throw h("ENOENT", "getNodeByIdOrCreate", m(a4));
        };
        a3.prototype.wrapAsync = function(a4, b7, c11) {
            var d10 = this;
            q(c11);
            $c.default(function() {
                try {
                    c11(null, a4.apply(d10, b7));
                } catch (va) {
                    c11(va);
                }
            });
        };
        a3.prototype._toJSON = function(a4, b7, c11) {
            var d10;
            (void 0) === a4 && (a4 = this.root);
            (void 0) === b7 && (b7 = {
            });
            var e10 = !0, r = a4.children;
            a4.getNode().isFile() && (r = (d10 = {
            }, d10[a4.getName()] = a4.parent.getChild(a4.getName()), d10), a4 = a4.parent);
            for(var D in r){
                e10 = !1;
                r = a4.getChild(D);
                if (!r) throw Error("_toJSON: unexpected undefined");
                d10 = r.getNode();
                d10.isFile() ? (r = r.getPath(), c11 && (r = xd(c11, r)), b7[r] = d10.getString()) : d10.isDirectory() && this._toJSON(r, b7, c11);
            }
            a4 = a4.getPath();
            c11 && (a4 = xd(c11, a4));
            a4 && e10 && (b7[a4] = null);
            return b7;
        };
        a3.prototype.toJSON = function(a4, b7, c11) {
            (void 0) === b7 && (b7 = {
            });
            (void 0) === c11 && (c11 = !1);
            var d10 = [];
            if (a4) {
                a4 instanceof Array || (a4 = [
                    a4
                ]);
                for(var e10 = 0; e10 < a4.length; e10++){
                    var r = m(a4[e10]);
                    (r = this.getResolvedLink(r)) && d10.push(r);
                }
            } else d10.push(this.root);
            if (!d10.length) return b7;
            for(e10 = 0; e10 < d10.length; e10++)r = d10[e10], this._toJSON(r, b7, c11 ? r.getPath() : "");
            return b7;
        };
        a3.prototype.fromJSON = function(a4, b7) {
            (void 0) === b7 && (b7 = L.default.cwd());
            for(var d10 in a4){
                var e11 = a4[d10];
                if ("string" === typeof e11) {
                    d10 = c8(d10, b7);
                    var r = v(d10);
                    1 < r.length && (r = S + r.slice(0, r.length - 1).join(S), this.mkdirpBase(r, 511));
                    this.writeFileSync(d10, e11);
                } else this.mkdirpBase(d10, 511);
            }
        };
        a3.prototype.reset = function() {
            this.ino = 0;
            this.inodes = {
            };
            this.releasedInos = [];
            this.fds = {
            };
            this.releasedFds = [];
            this.openFiles = 0;
            this.root = this.createLink();
            this.root.setNode(this.createNode(!0));
        };
        a3.prototype.mountSync = function(a4, b7) {
            this.fromJSON(b7, a4);
        };
        a3.prototype.openLink = function(a4, b7, c11) {
            (void 0) === c11 && (c11 = !0);
            if (this.openFiles >= this.maxFiles) throw h("EMFILE", "open", a4.getPath());
            var d10 = a4;
            c11 && (d10 = this.resolveSymlinks(a4));
            if (!d10) throw h("ENOENT", "open", a4.getPath());
            c11 = d10.getNode();
            if (c11.isDirectory()) {
                if ((b7 & (mb | na | Ka)) !== mb) throw h("EISDIR", "open", a4.getPath());
            } else if (b7 & gf) throw h("ENOTDIR", "open", a4.getPath());
            if (!(b7 & Ka || c11.canRead())) throw h("EACCES", "open", a4.getPath());
            a4 = new this.props.File(a4, c11, b7, this.newFdNumber());
            this.fds[a4.fd] = a4;
            this.openFiles++;
            b7 & Za && a4.truncate();
            return a4;
        };
        a3.prototype.openFile = function(a4, b7, c11, d10) {
            (void 0) === d10 && (d10 = !0);
            var e12 = v(a4), r = d10 ? this.getResolvedLink(e12) : this.getLink(e12);
            if (!r && b7 & U) {
                var D = this.getResolvedLink(e12.slice(0, e12.length - 1));
                if (!D) throw h("ENOENT", "open", S + e12.join(S));
                b7 & U && "number" === typeof c11 && (r = this.createLink(D, e12[e12.length - 1], !1, c11));
            }
            if (r) return this.openLink(r, b7, d10);
            throw h("ENOENT", "open", a4);
        };
        a3.prototype.openBase = function(a4, b7, c11, d10) {
            (void 0) === d10 && (d10 = !0);
            b7 = this.openFile(a4, b7, c11, d10);
            if (!b7) throw h("ENOENT", "open", a4);
            return b7.fd;
        };
        a3.prototype.openSync = function(a4, b7, c11) {
            (void 0) === c11 && (c11 = 438);
            c11 = M(c11);
            a4 = m(a4);
            b7 = k(b7);
            return this.openBase(a4, b7, c11);
        };
        a3.prototype.open = function(a4, b7, c11, d10) {
            var e12 = c11;
            "function" === typeof c11 && (e12 = 438, d10 = c11);
            c11 = M(e12 || 438);
            a4 = m(a4);
            b7 = k(b7);
            this.wrapAsync(this.openBase, [
                a4,
                b7,
                c11
            ], d10);
        };
        a3.prototype.closeFile = function(a4) {
            this.fds[a4.fd] && (this.openFiles--, delete this.fds[a4.fd], this.releasedFds.push(a4.fd));
        };
        a3.prototype.closeSync = function(a4) {
            Ya(a4);
            a4 = this.getFileByFdOrThrow(a4, "close");
            this.closeFile(a4);
        };
        a3.prototype.close = function(a4, b7) {
            Ya(a4);
            this.wrapAsync(this.closeSync, [
                a4
            ], b7);
        };
        a3.prototype.openFileOrGetById = function(a4, b7, c11) {
            if ("number" === typeof a4) {
                a4 = this.fds[a4];
                if (!a4) throw h("ENOENT");
                return a4;
            }
            return this.openFile(m(a4), b7, c11);
        };
        a3.prototype.readBase = function(a4, b7, c11, d10, e12) {
            return this.getFileByFdOrThrow(a4).read(b7, Number(c11), Number(d10), e12);
        };
        a3.prototype.readSync = function(a4, b7, c11, d10, e12) {
            Ya(a4);
            return this.readBase(a4, b7, c11, d10, e12);
        };
        a3.prototype.read = function(a4, b7, c11, d10, e12, f1) {
            var r = this;
            q(f1);
            if (0 === d10) return L.default.nextTick(function() {
                f1 && f1(null, 0, b7);
            });
            $c.default(function() {
                try {
                    var D = r.readBase(a4, b7, c11, d10, e12);
                    f1(null, D, b7);
                } catch (pf) {
                    f1(pf);
                }
            });
        };
        a3.prototype.readFileBase = function(a4, b7, c11) {
            var d10 = "number" === typeof a4 && a4 >>> 0 === a4;
            if (!d10) {
                var e12 = m(a4);
                e12 = v(e12);
                if ((e12 = this.getResolvedLink(e12)) && e12.getNode().isDirectory()) throw h("EISDIR", "open", e12.getPath());
                a4 = this.openSync(a4, b7);
            }
            try {
                var r = $b(this.getFileByFdOrThrow(a4).getBuffer(), c11);
            } finally{
                d10 || this.closeSync(a4);
            }
            return r;
        };
        a3.prototype.readFileSync = function(a4, b7) {
            b7 = zd(b7);
            var c11 = k(b7.flag);
            return this.readFileBase(a4, c11, b7.encoding);
        };
        a3.prototype.readFile = function(a4, b7, c11) {
            c11 = B(zd)(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            var d10 = k(b7.flag);
            this.wrapAsync(this.readFileBase, [
                a4,
                d10,
                b7.encoding
            ], c11);
        };
        a3.prototype.writeBase = function(a4, b7, c11, d10, e13) {
            return this.getFileByFdOrThrow(a4, "write").write(b7, c11, d10, e13);
        };
        a3.prototype.writeSync = function(a4, b7, c11, d10, e13) {
            Ya(a4);
            var r = "string" !== typeof b7;
            if (r) {
                var D = (c11 || 0) | 0;
                var f1 = d10;
                c11 = e13;
            } else var Xa = d10;
            b7 = La(b7, Xa);
            r ? "undefined" === typeof f1 && (f1 = b7.length) : (D = 0, f1 = b7.length);
            return this.writeBase(a4, b7, D, f1, c11);
        };
        a3.prototype.write = function(a4, b7, c11, d10, e13, f2) {
            var r = this;
            Ya(a4);
            var D = typeof b7, Xa = typeof c11, g1 = typeof d10, h1 = typeof e13;
            if ("string" !== D) {
                if ("function" === Xa) var k1 = c11;
                else if ("function" === g1) {
                    var lb = c11 | 0;
                    k1 = d10;
                } else if ("function" === h1) {
                    lb = c11 | 0;
                    var m1 = d10;
                    k1 = e13;
                } else {
                    lb = c11 | 0;
                    m1 = d10;
                    var n1 = e13;
                    k1 = f2;
                }
            } else if ("function" === Xa) k1 = c11;
            else if ("function" === g1) n1 = c11, k1 = d10;
            else if ("function" === h1) {
                n1 = c11;
                var va = d10;
                k1 = e13;
            }
            var p1 = La(b7, va);
            "string" !== D ? "undefined" === typeof m1 && (m1 = p1.length) : (lb = 0, m1 = p1.length);
            var v1 = q(k1);
            $c.default(function() {
                try {
                    var c12 = r.writeBase(a4, p1, lb, m1, n1);
                    "string" !== D ? v1(null, c12, p1) : v1(null, c12, b7);
                } catch (qf) {
                    v1(qf);
                }
            });
        };
        a3.prototype.writeFileBase = function(a4, b7, c11, d10) {
            var e13 = "number" === typeof a4;
            a4 = e13 ? a4 : this.openBase(m(a4), c11, d10);
            d10 = 0;
            var r = b7.length;
            c11 = c11 & $a ? void 0 : 0;
            try {
                for(; 0 < r;){
                    var D = this.writeSync(a4, b7, d10, r, c11);
                    d10 += D;
                    r -= D;
                    (void 0) !== c11 && (c11 += D);
                }
            } finally{
                e13 || this.closeSync(a4);
            }
        };
        a3.prototype.writeFileSync = function(a4, b7, c11) {
            var d10 = Bd(c11);
            c11 = k(d10.flag);
            var e13 = M(d10.mode);
            b7 = La(b7, d10.encoding);
            this.writeFileBase(a4, b7, c11, e13);
        };
        a3.prototype.writeFile = function(a4, b7, c11, d10) {
            var e13 = c11;
            "function" === typeof c11 && (e13 = Ad, d10 = c11);
            c11 = q(d10);
            var r = Bd(e13);
            e13 = k(r.flag);
            d10 = M(r.mode);
            b7 = La(b7, r.encoding);
            this.wrapAsync(this.writeFileBase, [
                a4,
                b7,
                e13,
                d10
            ], c11);
        };
        a3.prototype.linkBase = function(a4, b7) {
            var c11 = v(a4), d10 = this.getLink(c11);
            if (!d10) throw h("ENOENT", "link", a4, b7);
            var e13 = v(b7);
            c11 = this.getLinkParent(e13);
            if (!c11) throw h("ENOENT", "link", a4, b7);
            e13 = e13[e13.length - 1];
            if (c11.getChild(e13)) throw h("EEXIST", "link", a4, b7);
            a4 = d10.getNode();
            a4.nlink++;
            c11.createChild(e13, a4);
        };
        a3.prototype.copyFileBase = function(a4, b7, c11) {
            var d10 = this.readFileSync(a4);
            if (c11 & hf && this.existsSync(b7)) throw h("EEXIST", "copyFile", a4, b7);
            if (c11 & jf) throw h("ENOSYS", "copyFile", a4, b7);
            this.writeFileBase(b7, d10, ua.w, 438);
        };
        a3.prototype.copyFileSync = function(a4, b7, c11) {
            a4 = m(a4);
            b7 = m(b7);
            return this.copyFileBase(a4, b7, (c11 || 0) | 0);
        };
        a3.prototype.copyFile = function(a4, b7, c11, d10) {
            a4 = m(a4);
            b7 = m(b7);
            if ("function" === typeof c11) var e13 = 0;
            else e13 = c11, c11 = d10;
            q(c11);
            this.wrapAsync(this.copyFileBase, [
                a4,
                b7,
                e13
            ], c11);
        };
        a3.prototype.linkSync = function(a4, b7) {
            a4 = m(a4);
            b7 = m(b7);
            this.linkBase(a4, b7);
        };
        a3.prototype.link = function(a4, b7, c11) {
            a4 = m(a4);
            b7 = m(b7);
            this.wrapAsync(this.linkBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.unlinkBase = function(a4) {
            var b7 = v(a4);
            b7 = this.getLink(b7);
            if (!b7) throw h("ENOENT", "unlink", a4);
            if (b7.length) throw Error("Dir not empty...");
            this.deleteLink(b7);
            a4 = b7.getNode();
            a4.nlink--;
            0 >= a4.nlink && this.deleteNode(a4);
        };
        a3.prototype.unlinkSync = function(a4) {
            a4 = m(a4);
            this.unlinkBase(a4);
        };
        a3.prototype.unlink = function(a4, b7) {
            a4 = m(a4);
            this.wrapAsync(this.unlinkBase, [
                a4
            ], b7);
        };
        a3.prototype.symlinkBase = function(a4, b7) {
            var c11 = v(b7), d10 = this.getLinkParent(c11);
            if (!d10) throw h("ENOENT", "symlink", a4, b7);
            c11 = c11[c11.length - 1];
            if (d10.getChild(c11)) throw h("EEXIST", "symlink", a4, b7);
            b7 = d10.createChild(c11);
            b7.getNode().makeSymlink(v(a4));
            return b7;
        };
        a3.prototype.symlinkSync = function(a4, b7) {
            a4 = m(a4);
            b7 = m(b7);
            this.symlinkBase(a4, b7);
        };
        a3.prototype.symlink = function(a4, b7, c11, d10) {
            c11 = q("function" === typeof c11 ? c11 : d10);
            a4 = m(a4);
            b7 = m(b7);
            this.wrapAsync(this.symlinkBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.realpathBase = function(a4, b7) {
            var c11 = v(a4);
            c11 = this.getResolvedLink(c11);
            if (!c11) throw h("ENOENT", "realpath", a4);
            return K.strToEncoding(c11.getPath(), b7);
        };
        a3.prototype.realpathSync = function(a4, b7) {
            return this.realpathBase(m(a4), Ed(b7).encoding);
        };
        a3.prototype.realpath = function(a4, b7, c11) {
            c11 = lf(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            a4 = m(a4);
            this.wrapAsync(this.realpathBase, [
                a4,
                b7.encoding
            ], c11);
        };
        a3.prototype.lstatBase = function(a4, b7) {
            (void 0) === b7 && (b7 = !1);
            var c11 = this.getLink(v(a4));
            if (!c11) throw h("ENOENT", "lstat", a4);
            return ka.default.build(c11.getNode(), b7);
        };
        a3.prototype.lstatSync = function(a4, b7) {
            return this.lstatBase(m(a4), e9(b7).bigint);
        };
        a3.prototype.lstat = function(a4, b7, c11) {
            c11 = d7(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            this.wrapAsync(this.lstatBase, [
                m(a4),
                b7.bigint
            ], c11);
        };
        a3.prototype.statBase = function(a4, b7) {
            (void 0) === b7 && (b7 = !1);
            var c11 = this.getResolvedLink(v(a4));
            if (!c11) throw h("ENOENT", "stat", a4);
            return ka.default.build(c11.getNode(), b7);
        };
        a3.prototype.statSync = function(a4, b7) {
            return this.statBase(m(a4), e9(b7).bigint);
        };
        a3.prototype.stat = function(a4, b7, c11) {
            c11 = d7(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            this.wrapAsync(this.statBase, [
                m(a4),
                b7.bigint
            ], c11);
        };
        a3.prototype.fstatBase = function(a4, b7) {
            (void 0) === b7 && (b7 = !1);
            a4 = this.getFileByFd(a4);
            if (!a4) throw h("EBADF", "fstat");
            return ka.default.build(a4.node, b7);
        };
        a3.prototype.fstatSync = function(a4, b7) {
            return this.fstatBase(a4, e9(b7).bigint);
        };
        a3.prototype.fstat = function(a4, b7, c11) {
            b7 = d7(b7, c11);
            this.wrapAsync(this.fstatBase, [
                a4,
                b7[0].bigint
            ], b7[1]);
        };
        a3.prototype.renameBase = function(a4, b7) {
            var c11 = this.getLink(v(a4));
            if (!c11) throw h("ENOENT", "rename", a4, b7);
            var d10 = v(b7), e13 = this.getLinkParent(d10);
            if (!e13) throw h("ENOENT", "rename", a4, b7);
            (a4 = c11.parent) && a4.deleteChild(c11);
            c11.steps = Xb(e13.steps, [
                d10[d10.length - 1]
            ]);
            e13.setChild(c11.getName(), c11);
        };
        a3.prototype.renameSync = function(a4, b7) {
            a4 = m(a4);
            b7 = m(b7);
            this.renameBase(a4, b7);
        };
        a3.prototype.rename = function(a4, b7, c11) {
            a4 = m(a4);
            b7 = m(b7);
            this.wrapAsync(this.renameBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.existsBase = function(a4) {
            return !!this.statBase(a4);
        };
        a3.prototype.existsSync = function(a4) {
            try {
                return this.existsBase(m(a4));
            } catch (D) {
                return !1;
            }
        };
        a3.prototype.exists = function(a4, b7) {
            var c11 = this, d10 = m(a4);
            if ("function" !== typeof b7) throw Error(fa.CB);
            $c.default(function() {
                try {
                    b7(c11.existsBase(d10));
                } catch (va) {
                    b7(!1);
                }
            });
        };
        a3.prototype.accessBase = function(a4) {
            this.getLinkOrThrow(a4, "access");
        };
        a3.prototype.accessSync = function(a4, b7) {
            (void 0) === b7 && (b7 = wd);
            a4 = m(a4);
            this.accessBase(a4, b7 | 0);
        };
        a3.prototype.access = function(a4, b7, c11) {
            var d10 = wd;
            "function" !== typeof b7 && (d10 = b7 | 0, b7 = q(c11));
            a4 = m(a4);
            this.wrapAsync(this.accessBase, [
                a4,
                d10
            ], b7);
        };
        a3.prototype.appendFileSync = function(a4, b7, c11) {
            (void 0) === c11 && (c11 = Cd);
            c11 = Dd(c11);
            c11.flag && a4 >>> 0 !== a4 || (c11.flag = "a");
            this.writeFileSync(a4, b7, c11);
        };
        a3.prototype.appendFile = function(a4, b7, c11, d10) {
            d10 = kf(c11, d10);
            c11 = d10[0];
            d10 = d10[1];
            c11.flag && a4 >>> 0 !== a4 || (c11.flag = "a");
            this.writeFile(a4, b7, c11, d10);
        };
        a3.prototype.readdirBase = function(a4, b7) {
            var c11 = v(a4);
            c11 = this.getResolvedLink(c11);
            if (!c11) throw h("ENOENT", "readdir", a4);
            if (!c11.getNode().isDirectory()) throw h("ENOTDIR", "scandir", a4);
            if (b7.withFileTypes) {
                var d10 = [];
                for(e13 in c11.children)(a4 = c11.getChild(e13)) && d10.push(Qc.default.build(a4, b7.encoding));
                Yb || "buffer" === b7.encoding || d10.sort(function(a5, b8) {
                    return a5.name < b8.name ? -1 : a5.name > b8.name ? 1 : 0;
                });
                return d10;
            }
            var e13 = [];
            for(d10 in c11.children)e13.push(K.strToEncoding(d10, b7.encoding));
            Yb || "buffer" === b7.encoding || e13.sort();
            return e13;
        };
        a3.prototype.readdirSync = function(a4, b7) {
            b7 = Gd(b7);
            a4 = m(a4);
            return this.readdirBase(a4, b7);
        };
        a3.prototype.readdir = function(a4, b7, c11) {
            c11 = mf(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            a4 = m(a4);
            this.wrapAsync(this.readdirBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.readlinkBase = function(a4, b7) {
            var c11 = this.getLinkOrThrow(a4, "readlink").getNode();
            if (!c11.isSymlink()) throw h("EINVAL", "readlink", a4);
            a4 = S + c11.symlink.join(S);
            return K.strToEncoding(a4, b7);
        };
        a3.prototype.readlinkSync = function(a4, b7) {
            b7 = ob(b7);
            a4 = m(a4);
            return this.readlinkBase(a4, b7.encoding);
        };
        a3.prototype.readlink = function(a4, b7, c11) {
            c11 = yd(b7, c11);
            b7 = c11[0];
            c11 = c11[1];
            a4 = m(a4);
            this.wrapAsync(this.readlinkBase, [
                a4,
                b7.encoding
            ], c11);
        };
        a3.prototype.fsyncBase = function(a4) {
            this.getFileByFdOrThrow(a4, "fsync");
        };
        a3.prototype.fsyncSync = function(a4) {
            this.fsyncBase(a4);
        };
        a3.prototype.fsync = function(a4, b7) {
            this.wrapAsync(this.fsyncBase, [
                a4
            ], b7);
        };
        a3.prototype.fdatasyncBase = function(a4) {
            this.getFileByFdOrThrow(a4, "fdatasync");
        };
        a3.prototype.fdatasyncSync = function(a4) {
            this.fdatasyncBase(a4);
        };
        a3.prototype.fdatasync = function(a4, b7) {
            this.wrapAsync(this.fdatasyncBase, [
                a4
            ], b7);
        };
        a3.prototype.ftruncateBase = function(a4, b7) {
            this.getFileByFdOrThrow(a4, "ftruncate").truncate(b7);
        };
        a3.prototype.ftruncateSync = function(a4, b7) {
            this.ftruncateBase(a4, b7);
        };
        a3.prototype.ftruncate = function(a4, b7, c11) {
            var d11 = "number" === typeof b7 ? b7 : 0;
            b7 = q("number" === typeof b7 ? c11 : b7);
            this.wrapAsync(this.ftruncateBase, [
                a4,
                d11
            ], b7);
        };
        a3.prototype.truncateBase = function(a4, b7) {
            a4 = this.openSync(a4, "r+");
            try {
                this.ftruncateSync(a4, b7);
            } finally{
                this.closeSync(a4);
            }
        };
        a3.prototype.truncateSync = function(a4, b7) {
            if (a4 >>> 0 === a4) return this.ftruncateSync(a4, b7);
            this.truncateBase(a4, b7);
        };
        a3.prototype.truncate = function(a4, b7, c11) {
            var d11 = "number" === typeof b7 ? b7 : 0;
            b7 = q("number" === typeof b7 ? c11 : b7);
            if (a4 >>> 0 === a4) return this.ftruncate(a4, d11, b7);
            this.wrapAsync(this.truncateBase, [
                a4,
                d11
            ], b7);
        };
        a3.prototype.futimesBase = function(a4, b7, c11) {
            a4 = this.getFileByFdOrThrow(a4, "futimes").node;
            a4.atime = new Date(1000 * b7);
            a4.mtime = new Date(1000 * c11);
        };
        a3.prototype.futimesSync = function(a4, b7, c11) {
            this.futimesBase(a4, ha(b7), ha(c11));
        };
        a3.prototype.futimes = function(a4, b7, c11, d11) {
            this.wrapAsync(this.futimesBase, [
                a4,
                ha(b7),
                ha(c11)
            ], d11);
        };
        a3.prototype.utimesBase = function(a4, b7, c11) {
            a4 = this.openSync(a4, "r+");
            try {
                this.futimesBase(a4, b7, c11);
            } finally{
                this.closeSync(a4);
            }
        };
        a3.prototype.utimesSync = function(a4, b7, c11) {
            this.utimesBase(m(a4), ha(b7), ha(c11));
        };
        a3.prototype.utimes = function(a4, b7, c11, d11) {
            this.wrapAsync(this.utimesBase, [
                m(a4),
                ha(b7),
                ha(c11)
            ], d11);
        };
        a3.prototype.mkdirBase = function(a4, b7) {
            var c11 = v(a4);
            if (!c11.length) throw h("EISDIR", "mkdir", a4);
            var d11 = this.getLinkParentAsDirOrThrow(a4, "mkdir");
            c11 = c11[c11.length - 1];
            if (d11.getChild(c11)) throw h("EEXIST", "mkdir", a4);
            d11.createChild(c11, this.createNode(!0, b7));
        };
        a3.prototype.mkdirpBase = function(a4, b7) {
            a4 = v(a4);
            for(var c11 = this.root, d11 = 0; d11 < a4.length; d11++){
                var e13 = a4[d11];
                if (!c11.getNode().isDirectory()) throw h("ENOTDIR", "mkdir", c11.getPath());
                var f2 = c11.getChild(e13);
                if (f2) {
                    if (f2.getNode().isDirectory()) c11 = f2;
                    else throw h("ENOTDIR", "mkdir", f2.getPath());
                } else c11 = c11.createChild(e13, this.createNode(!0, b7));
            }
        };
        a3.prototype.mkdirSync = function(a4, b7) {
            b7 = f(b7);
            var c11 = M(b7.mode, 511);
            a4 = m(a4);
            b7.recursive ? this.mkdirpBase(a4, c11) : this.mkdirBase(a4, c11);
        };
        a3.prototype.mkdir = function(a4, b7, c11) {
            var d11 = f(b7);
            b7 = q("function" === typeof b7 ? b7 : c11);
            c11 = M(d11.mode, 511);
            a4 = m(a4);
            d11.recursive ? this.wrapAsync(this.mkdirpBase, [
                a4,
                c11
            ], b7) : this.wrapAsync(this.mkdirBase, [
                a4,
                c11
            ], b7);
        };
        a3.prototype.mkdirpSync = function(a4, b7) {
            this.mkdirSync(a4, {
                mode: b7,
                recursive: !0
            });
        };
        a3.prototype.mkdirp = function(a4, b7, c11) {
            var d11 = "function" === typeof b7 ? void 0 : b7;
            b7 = q("function" === typeof b7 ? b7 : c11);
            this.mkdir(a4, {
                mode: d11,
                recursive: !0
            }, b7);
        };
        a3.prototype.mkdtempBase = function(a4, b7, c11) {
            (void 0) === c11 && (c11 = 5);
            var d11 = a4 + this.genRndStr();
            try {
                return this.mkdirBase(d11, 511), K.strToEncoding(d11, b7);
            } catch (va) {
                if ("EEXIST" === va.code) {
                    if (1 < c11) return this.mkdtempBase(a4, b7, c11 - 1);
                    throw Error("Could not create temp dir.");
                }
                throw va;
            }
        };
        a3.prototype.mkdtempSync = function(a4, b7) {
            b7 = ob(b7).encoding;
            if (!a4 || "string" !== typeof a4) throw new TypeError("filename prefix is required");
            qb(a4);
            return this.mkdtempBase(a4, b7);
        };
        a3.prototype.mkdtemp = function(a4, b7, c11) {
            c11 = yd(b7, c11);
            b7 = c11[0].encoding;
            c11 = c11[1];
            if (!a4 || "string" !== typeof a4) throw new TypeError("filename prefix is required");
            qb(a4) && this.wrapAsync(this.mkdtempBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.rmdirBase = function(a4, b7) {
            b7 = aa({
            }, Fd, b7);
            var c11 = this.getLinkAsDirOrThrow(a4, "rmdir");
            if (c11.length && !b7.recursive) throw h("ENOTEMPTY", "rmdir", a4);
            this.deleteLink(c11);
        };
        a3.prototype.rmdirSync = function(a4, b7) {
            this.rmdirBase(m(a4), b7);
        };
        a3.prototype.rmdir = function(a4, b7, c11) {
            var d11 = aa({
            }, Fd, b7);
            b7 = q("function" === typeof b7 ? b7 : c11);
            this.wrapAsync(this.rmdirBase, [
                m(a4),
                d11
            ], b7);
        };
        a3.prototype.fchmodBase = function(a4, b7) {
            this.getFileByFdOrThrow(a4, "fchmod").chmod(b7);
        };
        a3.prototype.fchmodSync = function(a4, b7) {
            this.fchmodBase(a4, M(b7));
        };
        a3.prototype.fchmod = function(a4, b7, c11) {
            this.wrapAsync(this.fchmodBase, [
                a4,
                M(b7)
            ], c11);
        };
        a3.prototype.chmodBase = function(a4, b7) {
            a4 = this.openSync(a4, "r+");
            try {
                this.fchmodBase(a4, b7);
            } finally{
                this.closeSync(a4);
            }
        };
        a3.prototype.chmodSync = function(a4, b7) {
            b7 = M(b7);
            a4 = m(a4);
            this.chmodBase(a4, b7);
        };
        a3.prototype.chmod = function(a4, b7, c11) {
            b7 = M(b7);
            a4 = m(a4);
            this.wrapAsync(this.chmodBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.lchmodBase = function(a4, b7) {
            a4 = this.openBase(a4, na, 0, !1);
            try {
                this.fchmodBase(a4, b7);
            } finally{
                this.closeSync(a4);
            }
        };
        a3.prototype.lchmodSync = function(a4, b7) {
            b7 = M(b7);
            a4 = m(a4);
            this.lchmodBase(a4, b7);
        };
        a3.prototype.lchmod = function(a4, b7, c11) {
            b7 = M(b7);
            a4 = m(a4);
            this.wrapAsync(this.lchmodBase, [
                a4,
                b7
            ], c11);
        };
        a3.prototype.fchownBase = function(a4, b7, c11) {
            this.getFileByFdOrThrow(a4, "fchown").chown(b7, c11);
        };
        a3.prototype.fchownSync = function(a4, b7, c11) {
            Ha(b7);
            Ia(c11);
            this.fchownBase(a4, b7, c11);
        };
        a3.prototype.fchown = function(a4, b7, c11, d11) {
            Ha(b7);
            Ia(c11);
            this.wrapAsync(this.fchownBase, [
                a4,
                b7,
                c11
            ], d11);
        };
        a3.prototype.chownBase = function(a4, b7, c11) {
            this.getResolvedLinkOrThrow(a4, "chown").getNode().chown(b7, c11);
        };
        a3.prototype.chownSync = function(a4, b7, c11) {
            Ha(b7);
            Ia(c11);
            this.chownBase(m(a4), b7, c11);
        };
        a3.prototype.chown = function(a4, b7, c11, d11) {
            Ha(b7);
            Ia(c11);
            this.wrapAsync(this.chownBase, [
                m(a4),
                b7,
                c11
            ], d11);
        };
        a3.prototype.lchownBase = function(a4, b7, c11) {
            this.getLinkOrThrow(a4, "lchown").getNode().chown(b7, c11);
        };
        a3.prototype.lchownSync = function(a4, b7, c11) {
            Ha(b7);
            Ia(c11);
            this.lchownBase(m(a4), b7, c11);
        };
        a3.prototype.lchown = function(a4, b7, c11, d11) {
            Ha(b7);
            Ia(c11);
            this.wrapAsync(this.lchownBase, [
                m(a4),
                b7,
                c11
            ], d11);
        };
        a3.prototype.watchFile = function(a4, b7, c11) {
            a4 = m(a4);
            var d11 = b7;
            "function" === typeof d11 && (c11 = b7, d11 = null);
            if ("function" !== typeof c11) throw Error('"watchFile()" requires a listener function');
            b7 = 5007;
            var e14 = !0;
            d11 && "object" === typeof d11 && ("number" === typeof d11.interval && (b7 = d11.interval), "boolean" === typeof d11.persistent && (e14 = d11.persistent));
            d11 = this.statWatchers[a4];
            d11 || (d11 = new this.StatWatcher, d11.start(a4, e14, b7), this.statWatchers[a4] = d11);
            d11.addListener("change", c11);
            return d11;
        };
        a3.prototype.unwatchFile = function(a4, b7) {
            a4 = m(a4);
            var c11 = this.statWatchers[a4];
            c11 && ("function" === typeof b7 ? c11.removeListener("change", b7) : c11.removeAllListeners("change"), 0 === c11.listenerCount("change") && (c11.stop(), delete this.statWatchers[a4]));
        };
        a3.prototype.createReadStream = function(a4, b7) {
            return new this.ReadStream(a4, b7);
        };
        a3.prototype.createWriteStream = function(a4, b7) {
            return new this.WriteStream(a4, b7);
        };
        a3.prototype.watch = function(a4, b7, c11) {
            a4 = m(a4);
            var d11 = b7;
            "function" === typeof b7 && (c11 = b7, d11 = null);
            var e14 = ob(d11);
            b7 = e14.persistent;
            d11 = e14.recursive;
            e14 = e14.encoding;
            (void 0) === b7 && (b7 = !0);
            (void 0) === d11 && (d11 = !1);
            var f3 = new this.FSWatcher;
            f3.start(a4, b7, d11, e14);
            c11 && f3.addListener("change", c11);
            return f3;
        };
        a3.fd = 2147483647;
        return a3;
    })();
    b4.Volume = a2;
    var Hd = function(a3) {
        function b7(b8) {
            var c11 = a3.call(this) || this;
            c11.onInterval = function() {
                try {
                    var a4 = c11.vol.statSync(c11.filename);
                    c11.hasChanged(a4) && (c11.emit("change", a4, c11.prev), c11.prev = a4);
                } finally{
                    c11.loop();
                }
            };
            c11.vol = b8;
            return c11;
        }
        Ja(b7, a3);
        b7.prototype.loop = function() {
            this.timeoutRef = this.setTimeout(this.onInterval, this.interval);
        };
        b7.prototype.hasChanged = function(a4) {
            return a4.mtimeMs > this.prev.mtimeMs || a4.nlink !== this.prev.nlink ? !0 : !1;
        };
        b7.prototype.start = function(a4, b8, c11) {
            (void 0) === b8 && (b8 = !0);
            (void 0) === c11 && (c11 = 5007);
            this.filename = m(a4);
            this.setTimeout = b8 ? setTimeout : hd.default;
            this.interval = c11;
            this.prev = this.vol.statSync(this.filename);
            this.loop();
        };
        b7.prototype.stop = function() {
            clearTimeout(this.timeoutRef);
            L.default.nextTick(ef, this);
        };
        return b7;
    }(O.EventEmitter);
    b4.StatWatcher = Hd;
    var N;
    lc.inherits(T, Y.Readable);
    b4.ReadStream = T;
    T.prototype.open = function() {
        var a3 = this;
        this._vol.open(this.path, this.flags, this.mode, function(b7, c11) {
            b7 ? (a3.autoClose && a3.destroy && a3.destroy(), a3.emit("error", b7)) : (a3.fd = c11, a3.emit("open", c11), a3.read());
        });
    };
    T.prototype._read = function(a3) {
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._read(a3);
        });
        if (!this.destroyed) {
            if (!N || 128 > N.length - N.used) N = F.bufferAllocUnsafe(this._readableState.highWaterMark), N.used = 0;
            var b7 = N, c11 = Math.min(N.length - N.used, a3), d11 = N.used;
            (void 0) !== this.pos && (c11 = Math.min(this.end - this.pos + 1, c11));
            if (0 >= c11) return this.push(null);
            var e14 = this;
            this._vol.read(this.fd, N, N.used, c11, this.pos, function(a4, c12) {
                a4 ? (e14.autoClose && e14.destroy && e14.destroy(), e14.emit("error", a4)) : (a4 = null, 0 < c12 && (e14.bytesRead += c12, a4 = b7.slice(d11, d11 + c12)), e14.push(a4));
            });
            (void 0) !== this.pos && (this.pos += c11);
            N.used += c11;
        }
    };
    T.prototype._destroy = function(a3, b8) {
        this.close(function(c12) {
            b8(a3 || c12);
        });
    };
    T.prototype.close = function(a3) {
        var b8 = this;
        if (a3) this.once("close", a3);
        if (this.closed || "number" !== typeof this.fd) {
            if ("number" !== typeof this.fd) {
                this.once("open", ff);
                return;
            }
            return L.default.nextTick(function() {
                return b8.emit("close");
            });
        }
        this.closed = !0;
        this._vol.close(this.fd, function(a4) {
            a4 ? b8.emit("error", a4) : b8.emit("close");
        });
        this.fd = null;
    };
    lc.inherits(R, Y.Writable);
    b4.WriteStream = R;
    R.prototype.open = function() {
        this._vol.open(this.path, this.flags, this.mode, (function(a3, b8) {
            a3 ? (this.autoClose && this.destroy && this.destroy(), this.emit("error", a3)) : (this.fd = b8, this.emit("open", b8));
        }).bind(this));
    };
    R.prototype._write = function(a3, b8, c12) {
        if (!(a3 instanceof F.Buffer)) return this.emit("error", Error("Invalid data"));
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._write(a3, b8, c12);
        });
        var d12 = this;
        this._vol.write(this.fd, a3, 0, a3.length, this.pos, function(a4, b9) {
            if (a4) return d12.autoClose && d12.destroy && d12.destroy(), c12(a4);
            d12.bytesWritten += b9;
            c12();
        });
        (void 0) !== this.pos && (this.pos += a3.length);
    };
    R.prototype._writev = function(a3, b8) {
        if ("number" !== typeof this.fd) return this.once("open", function() {
            this._writev(a3, b8);
        });
        for(var c12 = this, d12 = a3.length, e15 = Array(d12), f3 = 0, g1 = 0; g1 < d12; g1++){
            var h1 = a3[g1].chunk;
            e15[g1] = h1;
            f3 += h1.length;
        }
        d12 = F.Buffer.concat(e15);
        this._vol.write(this.fd, d12, 0, d12.length, this.pos, function(a4, d13) {
            if (a4) return c12.destroy && c12.destroy(), b8(a4);
            c12.bytesWritten += d13;
            b8();
        });
        (void 0) !== this.pos && (this.pos += f3);
    };
    R.prototype._destroy = T.prototype._destroy;
    R.prototype.close = T.prototype.close;
    R.prototype.destroySoon = R.prototype.end;
    var Id = function(a3) {
        function b8(b9) {
            var c12 = a3.call(this) || this;
            c12._filename = "";
            c12._filenameEncoded = "";
            c12._recursive = !1;
            c12._encoding = K.ENCODING_UTF8;
            c12._onNodeChange = function() {
                c12._emit("change");
            };
            c12._onParentChild = function(a4) {
                a4.getName() === c12._getName() && c12._emit("rename");
            };
            c12._emit = function(a4) {
                c12.emit("change", a4, c12._filenameEncoded);
            };
            c12._persist = function() {
                c12._timer = setTimeout(c12._persist, 1000000);
            };
            c12._vol = b9;
            return c12;
        }
        Ja(b8, a3);
        b8.prototype._getName = function() {
            return this._steps[this._steps.length - 1];
        };
        b8.prototype.start = function(a4, b9, c12, d12) {
            (void 0) === b9 && (b9 = !0);
            (void 0) === c12 && (c12 = !1);
            (void 0) === d12 && (d12 = K.ENCODING_UTF8);
            this._filename = m(a4);
            this._steps = v(this._filename);
            this._filenameEncoded = K.strToEncoding(this._filename);
            this._recursive = c12;
            this._encoding = d12;
            try {
                this._link = this._vol.getLinkOrThrow(this._filename, "FSWatcher");
            } catch (Wb) {
                throw b9 = Error("watch " + this._filename + " " + Wb.code), b9.code = Wb.code, b9.errno = Wb.code, b9;
            }
            this._link.getNode().on("change", this._onNodeChange);
            this._link.on("child:add", this._onNodeChange);
            this._link.on("child:delete", this._onNodeChange);
            if (a4 = this._link.parent) a4.setMaxListeners(a4.getMaxListeners() + 1), a4.on("child:delete", this._onParentChild);
            b9 && this._persist();
        };
        b8.prototype.close = function() {
            clearTimeout(this._timer);
            this._link.getNode().removeListener("change", this._onNodeChange);
            var a4 = this._link.parent;
            a4 && a4.removeListener("child:delete", this._onParentChild);
        };
        return b8;
    }(O.EventEmitter);
    b4.FSWatcher = Id;
});
t(Xe);
var Ye = Xe.pathToFilename, Ze = Xe.filenameToSteps, $e = Xe.Volume, af = u(function(a2, b4) {
    Object.defineProperty(b4, "__esModule", {
        value: !0
    });
    b4.fsProps = "constants F_OK R_OK W_OK X_OK Stats".split(" ");
    b4.fsSyncMethods = "renameSync ftruncateSync truncateSync chownSync fchownSync lchownSync chmodSync fchmodSync lchmodSync statSync lstatSync fstatSync linkSync symlinkSync readlinkSync realpathSync unlinkSync rmdirSync mkdirSync mkdirpSync readdirSync closeSync openSync utimesSync futimesSync fsyncSync writeSync readSync readFileSync writeFileSync appendFileSync existsSync accessSync fdatasyncSync mkdtempSync copyFileSync createReadStream createWriteStream".split(" ");
    b4.fsAsyncMethods = "rename ftruncate truncate chown fchown lchown chmod fchmod lchmod stat lstat fstat link symlink readlink realpath unlink rmdir mkdir mkdirp readdir close open utimes futimes fsync write read readFile writeFile appendFile exists access fdatasync mkdtemp copyFile watchFile unwatchFile watch".split(" ");
});
t(af);
var bf = u(function(a2, b4) {
    function c8(a3) {
        for(var b8 = {
            F_OK: g,
            R_OK: h2,
            W_OK: k2,
            X_OK: p,
            constants: w.constants,
            Stats: ka.default,
            Dirent: Qc.default
        }, c12 = 0, d7 = e15; c12 < d7.length; c12++){
            var n2 = d7[c12];
            "function" === typeof a3[n2] && (b8[n2] = a3[n2].bind(a3));
        }
        c12 = 0;
        for(d7 = f3; c12 < d7.length; c12++)n2 = d7[c12], "function" === typeof a3[n2] && (b8[n2] = a3[n2].bind(a3));
        b8.StatWatcher = a3.StatWatcher;
        b8.FSWatcher = a3.FSWatcher;
        b8.WriteStream = a3.WriteStream;
        b8.ReadStream = a3.ReadStream;
        b8.promises = a3.promises;
        b8._toUnixTimestamp = Xe.toUnixTimestamp;
        return b8;
    }
    var d7 = l && l.__assign || function() {
        d7 = Object.assign || function(a3) {
            for(var b8, c12 = 1, d12 = arguments.length; c12 < d12; c12++){
                b8 = arguments[c12];
                for(var e9 in b8)Object.prototype.hasOwnProperty.call(b8, e9) && (a3[e9] = b8[e9]);
            }
            return a3;
        };
        return d7.apply(this, arguments);
    };
    Object.defineProperty(b4, "__esModule", {
        value: !0
    });
    var e15 = af.fsSyncMethods, f3 = af.fsAsyncMethods, g = w.constants.F_OK, h2 = w.constants.R_OK, k2 = w.constants.W_OK, p = w.constants.X_OK;
    b4.Volume = Xe.Volume;
    b4.vol = new Xe.Volume;
    b4.createFsFromVolume = c8;
    b4.fs = c8(b4.vol);
    a2.exports = d7(d7({
    }, a2.exports), b4.fs);
    a2.exports.semantic = !0;
});
t(bf);
var rf = bf.createFsFromVolume;
gd.prototype.emit = function(a2) {
    for(var b4, c8, d7 = [], e15 = 1; e15 < arguments.length; e15++)d7[e15 - 1] = arguments[e15];
    e15 = this.listeners(a2);
    try {
        for(var f3 = da(e15), g = f3.next(); !g.done; g = f3.next()){
            var h2 = g.value;
            try {
                h2.apply(void 0, ia(d7));
            } catch (k2) {
                console.error(k2);
            }
        }
    } catch (k2) {
        b4 = {
            error: k2
        };
    } finally{
        try {
            g && !g.done && (c8 = f3.return) && c8.call(f3);
        } finally{
            if (b4) throw b4.error;
        }
    }
    return 0 < e15.length;
};
var sf = function() {
    function a2() {
        this.volume = new $e;
        this.fs = rf(this.volume);
        this.fromJSON({
            "/dev/stdin": "",
            "/dev/stdout": "",
            "/dev/stderr": ""
        });
    }
    a2.prototype._toJSON = function(a3, c8, d7) {
        (void 0) === c8 && (c8 = {
        });
        var b4 = !0, f3;
        for(f3 in a3.children){
            b4 = !1;
            var g = a3.getChild(f3);
            if (g) {
                var h3 = g.getNode();
                h3 && h3.isFile() ? (g = g.getPath(), d7 && (g = Yc(d7, g)), c8[g] = h3.getBuffer()) : h3 && h3.isDirectory() && this._toJSON(g, c8, d7);
            }
        }
        a3 = a3.getPath();
        d7 && (a3 = Yc(d7, a3));
        a3 && b4 && (c8[a3] = null);
        return c8;
    };
    a2.prototype.toJSON = function(a3, c8, d7) {
        var b4, f3;
        (void 0) === c8 && (c8 = {
        });
        (void 0) === d7 && (d7 = !1);
        var g = [];
        if (a3) {
            a3 instanceof Array || (a3 = [
                a3
            ]);
            try {
                for(var h4 = da(a3), k2 = h4.next(); !k2.done; k2 = h4.next()){
                    var p = Ye(k2.value), n3 = this.volume.getResolvedLink(p);
                    n3 && g.push(n3);
                }
            } catch (xa) {
                var q = {
                    error: xa
                };
            } finally{
                try {
                    k2 && !k2.done && (b4 = h4.return) && b4.call(h4);
                } finally{
                    if (q) throw q.error;
                }
            }
        } else g.push(this.volume.root);
        if (!g.length) return c8;
        try {
            for(var B = da(g), m2 = B.next(); !m2.done; m2 = B.next())n3 = m2.value, this._toJSON(n3, c8, d7 ? n3.getPath() : "");
        } catch (xa) {
            var v = {
                error: xa
            };
        } finally{
            try {
                m2 && !m2.done && (f3 = B.return) && f3.call(B);
            } finally{
                if (v) throw v.error;
            }
        }
        return c8;
    };
    a2.prototype.fromJSONFixed = function(a3, c8) {
        for(var b4 in c8){
            var e15 = c8[b4];
            if (e15 ? null !== Object.getPrototypeOf(e15) : null !== e15) {
                var f3 = Ze(b4);
                1 < f3.length && (f3 = "/" + f3.slice(0, f3.length - 1).join("/"), a3.mkdirpBase(f3, 511));
                a3.writeFileSync(b4, e15 || "");
            } else a3.mkdirpBase(b4, 511);
        }
    };
    a2.prototype.fromJSON = function(a3) {
        this.volume = new $e;
        this.fromJSONFixed(this.volume, a3);
        this.fs = rf(this.volume);
        this.volume.releasedFds = [
            0,
            1,
            2
        ];
        a3 = this.volume.openSync("/dev/stderr", "w");
        var b4 = this.volume.openSync("/dev/stdout", "w"), d7 = this.volume.openSync("/dev/stdin", "r");
        if (2 !== a3) throw Error("invalid handle for stderr: " + a3);
        if (1 !== b4) throw Error("invalid handle for stdout: " + b4);
        if (0 !== d7) throw Error("invalid handle for stdin: " + d7);
    };
    a2.prototype.getStdOut = function() {
        return ba(this, void 0, void 0, function() {
            var a3, c8 = this;
            return ca(this, function() {
                a3 = new Promise(function(a4) {
                    a4(c8.fs.readFileSync("/dev/stdout", "utf8"));
                });
                return [
                    2,
                    a3
                ];
            });
        });
    };
    return a2;
}();
const tmpfile = ()=>`/tmp_${Math.random().toString(36).substr(2, 8)}`
;
const wasmfs = new sf();
const { fs , volume  } = wasmfs;
const cwd = ()=>"/"
;
Object.assign(globalThis, {
    fs,
    process: {
        cwd
    }
});
const compiled = new Map();
const compile = async (wasmPath)=>{
    if (!compiled.has(wasmPath)) {
        const res = await fetch(wasmPath);
        const bytes = await res.arrayBuffer();
        const wasm = await WebAssembly.compile(bytes);
        compiled.set(wasmPath, wasm);
    }
    return compiled.get(wasmPath);
};
const offsets = {
};
const readToEnd = (path)=>{
    if (!offsets[path]) {
        offsets[path] = 0;
    }
    const fd1 = fs.openSync(path, "r");
    const { size  } = fs.fstatSync(fd1);
    const buffer = new Uint8Array(size - offsets[path]);
    fs.readSync(fd1, buffer, 0, buffer.length, offsets[path]);
    fs.closeSync(fd1);
    offsets[path] = size;
    return buffer;
};
async function run(wasmPath, ...argv) {
    const go = new Go();
    const wasm = await compile(wasmPath);
    const instance = await WebAssembly.instantiate(await wasm, go.importObject);
    if (argv.length) {
        go.argv = argv;
    }
    await go.run(instance);
    const stdout = new TextDecoder().decode(readToEnd("/dev/stdout"));
    const stderr = new TextDecoder().decode(readToEnd("/dev/stderr"));
    return {
        stderr,
        stdout
    };
}
var PRINT_MODE;
(function(PRINT_MODE1) {
    PRINT_MODE1[PRINT_MODE1["TEXT"] = 0] = "TEXT";
    PRINT_MODE1[PRINT_MODE1["JSON"] = 1] = "JSON";
    PRINT_MODE1[PRINT_MODE1["QR"] = 2] = "QR";
})(PRINT_MODE || (PRINT_MODE = {
}));
const nebulaCertRaw = async (...args)=>{
    const { stderr , stdout ,  } = await run("nebula-cert.wasm", "nebula-cert", ...args);
    if (stderr) {
        throw new Error(stderr);
    }
    return stdout;
};
const nebulaCert = async (cmd, args)=>{
    const argv = Object.keys(args).map((key)=>[
            `-${key}`,
            args[key]
        ]
    ).reduce((p, c8)=>p.concat(c8)
    );
    return await nebulaCertRaw(cmd, ...argv);
};
class CA {
    _path = null;
    constructor(path1){
        this._path = path1;
    }
    static async exec(cmd, args) {
        return await nebulaCert(cmd, args);
    }
    static async create(name) {
        if (!name.length) {
            throw new Error("Invalid name");
        }
        const path1 = `/ca/${name}`;
        const nodePath = `/ca/${name}/nodes`;
        const ca1 = new CA(path1);
        if (await fs.promises.stat(path1).catch(()=>true
        ) === true) {
            await fs.promises.mkdir(nodePath, {
                recursive: true
            });
            await this.exec("ca", {
                name,
                'out-crt': ca1.crtPath,
                'out-key': ca1.keyPath
            });
        }
        return ca1;
    }
    static async keygen(name) {
        const path1 = `/keys/${name}`;
        await fs.promises.mkdir(path1, {
            recursive: true
        });
        const args = {
            'out-key': `${path1}.key`,
            'out-pub': `${path1}.pub`
        };
        return await this.exec('keygen', args);
    }
    static async print(path, mode = PRINT_MODE.TEXT) {
        const args = {
            path
        };
        if (mode === PRINT_MODE.JSON) {
            args['json'] = '';
        } else if (mode === PRINT_MODE.QR) {
            args['out-qr'] = tmpfile();
        }
        let result = await this.exec("print", args);
        if (mode === PRINT_MODE.QR) {
            const bytes = await fs.promises.readFile(args['out-qr']);
            const base64 = bytes.toString('base64');
            result = `data:image/png;base64,${base64}`;
            await fs.promises.unlink(args['out-qr']);
        }
        return result;
    }
    async sign(name, ip, inPubKey = null) {
        const args = {
            name,
            ip
        };
        if (inPubKey !== null) {
            args['in-pub'] = tmpfile();
            await fs.promises.writeFile(args['in-pub'], inPubKey);
        }
        await this.exec("sign", args);
        if (inPubKey) {
            await fs.promises.unlink(args['in-pub']);
        }
    }
    async exec(cmd, args) {
        return await CA.exec(cmd, Object.assign(args, {
            'ca-crt': this.crtPath,
            'ca-key': this.keyPath
        }));
    }
    get path() {
        return this._path;
    }
    get crtPath() {
        return `${this.path}/ca.crt`;
    }
    get keyPath() {
        return `${this.path}/ca.key`;
    }
}
(async ()=>{
    const ca1 = await CA.create("home");
    await CA.keygen("foo_laptop");
    await ca1.sign("foo_laptop", "10.10.10.10/32", `${await fs.promises.readFile('/keys/foo_laptop.pub')}`);
    console.log(await CA.print(ca1.crtPath));
    console.log(await CA.print("/foo_laptop.crt", PRINT_MODE.JSON));
    console.log(await CA.print(ca1.crtPath, PRINT_MODE.QR));
    console.log(wasmfs.toJSON());
})();

