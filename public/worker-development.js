/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PushData: () => (/* binding */ PushData)
/* harmony export */ });
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(runtypes__WEBPACK_IMPORTED_MODULE_0__);

const PushData = runtypes__WEBPACK_IMPORTED_MODULE_0__.Record({
  example: runtypes__WEBPACK_IMPORTED_MODULE_0__.String
});

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InstanceOf = exports.Nullish = exports.Null = exports.Undefined = exports.Literal = void 0;
__exportStar(__webpack_require__(3), exports);
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(9), exports);
__exportStar(__webpack_require__(10), exports);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(14), exports);
var literal_1 = __webpack_require__(15);
Object.defineProperty(exports, "Literal", ({
  enumerable: true,
  get: function () {
    return literal_1.Literal;
  }
}));
Object.defineProperty(exports, "Undefined", ({
  enumerable: true,
  get: function () {
    return literal_1.Undefined;
  }
}));
Object.defineProperty(exports, "Null", ({
  enumerable: true,
  get: function () {
    return literal_1.Null;
  }
}));
Object.defineProperty(exports, "Nullish", ({
  enumerable: true,
  get: function () {
    return literal_1.Nullish;
  }
}));
__exportStar(__webpack_require__(17), exports);
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(16), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
__exportStar(__webpack_require__(30), exports);
var instanceof_1 = __webpack_require__(31);
Object.defineProperty(exports, "InstanceOf", ({
  enumerable: true,
  get: function () {
    return instanceof_1.InstanceOf;
  }
}));
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Failcode = void 0;
exports.Failcode = {
  /** The type of the received primitive value is incompatible with expected one. */
  TYPE_INCORRECT: 'TYPE_INCORRECT',
  /** The received primitive value is incorrect. */
  VALUE_INCORRECT: 'VALUE_INCORRECT',
  /** The key of the property is incorrect. */
  KEY_INCORRECT: 'KEY_INCORRECT',
  /** One or more elements or properties of the received object are incorrect. */
  CONTENT_INCORRECT: 'CONTENT_INCORRECT',
  /** One or more arguments passed to the function is incorrect. */
  ARGUMENT_INCORRECT: 'ARGUMENT_INCORRECT',
  /** The value returned by the function is incorrect. */
  RETURN_INCORRECT: 'RETURN_INCORRECT',
  /** The received value does not fulfill the constraint. */
  CONSTRAINT_FAILED: 'CONSTRAINT_FAILED',
  /** The property must be present but missing. */
  PROPERTY_MISSING: 'PROPERTY_MISSING',
  /** The property must not be present but present. */
  PROPERTY_PRESENT: 'PROPERTY_PRESENT',
  /** The value must not be present but present. */
  NOTHING_EXPECTED: 'NOTHING_EXPECTED'
};

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Contract = void 0;
var errors_1 = __webpack_require__(6);
var util_1 = __webpack_require__(7);
function Contract() {
  var runtypes = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    runtypes[_i] = arguments[_i];
  }
  var lastIndex = runtypes.length - 1;
  var argRuntypes = runtypes.slice(0, lastIndex);
  var returnRuntype = runtypes[lastIndex];
  return {
    enforce: function (f) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length < argRuntypes.length) {
          var message = "Expected ".concat(argRuntypes.length, " arguments but only received ").concat(args.length);
          var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
          throw new errors_1.ValidationError(failure);
        }
        for (var i = 0; i < argRuntypes.length; i++) argRuntypes[i].check(args[i]);
        return returnRuntype.check(f.apply(void 0, __spreadArray([], __read(args), false)));
      };
    }
  };
}
exports.Contract = Contract;

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports) {



var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ValidationError = void 0;
var ValidationError = /** @class */function (_super) {
  __extends(ValidationError, _super);
  function ValidationError(failure) {
    var _this = _super.call(this, failure.message) || this;
    _this.name = 'ValidationError';
    _this.code = failure.code;
    if (failure.details !== undefined) _this.details = failure.details;
    Object.setPrototypeOf(_this, ValidationError.prototype);
    return _this;
  }
  return ValidationError;
}(Error);
exports.ValidationError = ValidationError;

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



// Type guard to determine if an object has a given key
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FAILURE = exports.SUCCESS = exports.enumerableKeysOf = exports.typeOf = exports.hasKey = void 0;
var result_1 = __webpack_require__(4);
var show_1 = __webpack_require__(8);
// If this feature gets implemented, we can use `in` instead: https://github.com/Microsoft/TypeScript/issues/10485
function hasKey(key, object) {
  return typeof object === 'object' && object !== null && key in object;
}
exports.hasKey = hasKey;
var typeOf = function (value) {
  var _a, _b, _c;
  return typeof value === 'object' ? value === null ? 'null' : Array.isArray(value) ? 'array' : ((_a = value.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'Object' ? 'object' : (_c = (_b = value.constructor) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : typeof value : typeof value;
};
exports.typeOf = typeOf;
var enumerableKeysOf = function (object) {
  return typeof object === 'object' && object !== null ?
  // Objects with a null prototype may not have `propertyIsEnumerable`
  Reflect.ownKeys(object).filter(function (key) {
    var _a, _b;
    return (_b = (_a = object.propertyIsEnumerable) === null || _a === void 0 ? void 0 : _a.call(object, key)) !== null && _b !== void 0 ? _b : true;
  }) : [];
};
exports.enumerableKeysOf = enumerableKeysOf;
function SUCCESS(value) {
  return {
    success: true,
    value: value
  };
}
exports.SUCCESS = SUCCESS;
exports.FAILURE = Object.assign(function (code, message, details) {
  return __assign({
    success: false,
    code: code,
    message: message
  }, details ? {
    details: details
  } : {});
}, {
  TYPE_INCORRECT: function (self, value) {
    var message = "Expected ".concat(self.tag === 'template' ? "string ".concat((0, show_1.default)(self)) : (0, show_1.default)(self), ", but was ").concat((0, exports.typeOf)(value));
    return (0, exports.FAILURE)(result_1.Failcode.TYPE_INCORRECT, message);
  },
  VALUE_INCORRECT: function (name, expected, received) {
    return (0, exports.FAILURE)(result_1.Failcode.VALUE_INCORRECT, "Expected ".concat(name, " ").concat(String(expected), ", but was ").concat(String(received)));
  },
  KEY_INCORRECT: function (self, expected, value) {
    return (0, exports.FAILURE)(result_1.Failcode.KEY_INCORRECT, "Expected ".concat((0, show_1.default)(self), " key to be ").concat((0, show_1.default)(expected), ", but was ").concat((0, exports.typeOf)(value)));
  },
  CONTENT_INCORRECT: function (self, details) {
    var formattedDetails = JSON.stringify(details, null, 2).replace(/^ *null,\n/gm, '');
    var message = "Validation failed:\n".concat(formattedDetails, ".\nObject should match ").concat((0, show_1.default)(self));
    return (0, exports.FAILURE)(result_1.Failcode.CONTENT_INCORRECT, message, details);
  },
  ARGUMENT_INCORRECT: function (message) {
    return (0, exports.FAILURE)(result_1.Failcode.ARGUMENT_INCORRECT, message);
  },
  RETURN_INCORRECT: function (message) {
    return (0, exports.FAILURE)(result_1.Failcode.RETURN_INCORRECT, message);
  },
  CONSTRAINT_FAILED: function (self, message) {
    var info = message ? ": ".concat(message) : '';
    return (0, exports.FAILURE)(result_1.Failcode.CONSTRAINT_FAILED, "Failed constraint check for ".concat((0, show_1.default)(self)).concat(info));
  },
  PROPERTY_MISSING: function (self) {
    var message = "Expected ".concat((0, show_1.default)(self), ", but was missing");
    return (0, exports.FAILURE)(result_1.Failcode.PROPERTY_MISSING, message);
  },
  PROPERTY_PRESENT: function (value) {
    var message = "Expected nothing, but was ".concat((0, exports.typeOf)(value));
    return (0, exports.FAILURE)(result_1.Failcode.PROPERTY_PRESENT, message);
  },
  NOTHING_EXPECTED: function (value) {
    var message = "Expected nothing, but was ".concat((0, exports.typeOf)(value));
    return (0, exports.FAILURE)(result_1.Failcode.NOTHING_EXPECTED, message);
  }
});

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * Return the display string for the stringified version of a type, e.g.
 *
 * - `Number` -> `` `${number}` ``
 * - `String` -> `string`
 * - `Literal(42)` -> `"42"`
 * - `Union(Literal("foo"), Number)` -> `` "foo" | `${number}` ``
 */
var showStringified = function (circular) {
  return function (refl) {
    switch (refl.tag) {
      case 'literal':
        return "\"".concat(String(refl.value), "\"");
      case 'string':
        return 'string';
      case 'brand':
        return refl.brand;
      case 'constraint':
        return refl.name || showStringified(circular)(refl.underlying);
      case 'union':
        return refl.alternatives.map(showStringified(circular)).join(' | ');
      case 'intersect':
        return refl.intersectees.map(showStringified(circular)).join(' & ');
      default:
        break;
    }
    return "`${".concat(show(false, circular)(refl), "}`");
  };
};
/**
 * Return the display string which is to be embedded into the display string of
 * the surrounding template literal type, e.g.
 *
 * - `Number` -> `${number}`
 * - `String` -> `${string}`
 * - `Literal("foo")` -> `foo`
 * - `Union(Literal(42), Number)` -> `${"42" | number}`
 */
var showEmbedded = function (circular) {
  return function (refl) {
    switch (refl.tag) {
      case 'literal':
        return String(refl.value);
      case 'brand':
        return "${".concat(refl.brand, "}");
      case 'constraint':
        return refl.name ? "${".concat(refl.name, "}") : showEmbedded(circular)(refl.underlying);
      case 'union':
        if (refl.alternatives.length === 1) {
          var inner = refl.alternatives[0];
          return showEmbedded(circular)(inner.reflect);
        }
        break;
      case 'intersect':
        if (refl.intersectees.length === 1) {
          var inner = refl.intersectees[0];
          return showEmbedded(circular)(inner.reflect);
        }
        break;
      default:
        break;
    }
    return "${".concat(show(false, circular)(refl), "}");
  };
};
var show = function (needsParens, circular) {
  return function (refl) {
    var parenthesize = function (s) {
      return needsParens ? "(".concat(s, ")") : s;
    };
    if (circular.has(refl)) return parenthesize("CIRCULAR ".concat(refl.tag));else circular.add(refl);
    try {
      switch (refl.tag) {
        // Primitive types
        case 'unknown':
        case 'never':
        case 'void':
        case 'boolean':
        case 'number':
        case 'bigint':
        case 'string':
        case 'symbol':
        case 'function':
          return refl.tag;
        case 'literal':
          {
            var value = refl.value;
            return typeof value === 'string' ? "\"".concat(value, "\"") : String(value);
          }
        // Complex types
        case 'template':
          {
            if (refl.strings.length === 0) return '""';else if (refl.strings.length === 1) return "\"".concat(refl.strings[0], "\"");else if (refl.strings.length === 2) {
              if (refl.strings.every(function (string) {
                return string === '';
              })) {
                var runtype = refl.runtypes[0];
                return showStringified(circular)(runtype.reflect);
              }
            }
            var backtick_1 = false;
            var inner = refl.strings.reduce(function (inner, string, i) {
              var prefix = inner + string;
              var runtype = refl.runtypes[i];
              if (runtype) {
                var suffix = showEmbedded(circular)(runtype.reflect);
                if (!backtick_1 && suffix.startsWith('$')) backtick_1 = true;
                return prefix + suffix;
              } else return prefix;
            }, '');
            return backtick_1 ? "`".concat(inner, "`") : "\"".concat(inner, "\"");
          }
        case 'array':
          return "".concat(readonlyTag(refl)).concat(show(true, circular)(refl.element), "[]");
        case 'dictionary':
          return "{ [_: ".concat(refl.key, "]: ").concat(show(false, circular)(refl.value), " }");
        case 'record':
          {
            var keys = Object.keys(refl.fields);
            return keys.length ? "{ ".concat(keys.map(function (k) {
              return "".concat(readonlyTag(refl)).concat(k).concat(partialTag(refl, k), ": ").concat(refl.fields[k].tag === 'optional' ? show(false, circular)(refl.fields[k].underlying) : show(false, circular)(refl.fields[k]), ";");
            }).join(' '), " }") : '{}';
          }
        case 'tuple':
          return "[".concat(refl.components.map(show(false, circular)).join(', '), "]");
        case 'union':
          return parenthesize("".concat(refl.alternatives.map(show(true, circular)).join(' | ')));
        case 'intersect':
          return parenthesize("".concat(refl.intersectees.map(show(true, circular)).join(' & ')));
        case 'optional':
          return show(needsParens, circular)(refl.underlying) + ' | undefined';
        case 'constraint':
          return refl.name || show(needsParens, circular)(refl.underlying);
        case 'instanceof':
          return refl.ctor.name;
        case 'brand':
          return show(needsParens, circular)(refl.entity);
      }
    } finally {
      circular.delete(refl);
    }
    /* istanbul ignore next */
    throw Error('impossible');
  };
};
exports["default"] = show(false, new Set());
function partialTag(_a, key) {
  var isPartial = _a.isPartial,
    fields = _a.fields;
  return isPartial || key !== undefined && fields[key].tag === 'optional' ? '?' : '';
}
function readonlyTag(_a) {
  var isReadonly = _a.isReadonly;
  return isReadonly ? 'readonly ' : '';
}

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AsyncContract = void 0;
var errors_1 = __webpack_require__(6);
var util_1 = __webpack_require__(7);
function AsyncContract() {
  var runtypes = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    runtypes[_i] = arguments[_i];
  }
  var lastIndex = runtypes.length - 1;
  var argRuntypes = runtypes.slice(0, lastIndex);
  var returnRuntype = runtypes[lastIndex];
  return {
    enforce: function (f) {
      return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (args.length < argRuntypes.length) {
          var message = "Expected ".concat(argRuntypes.length, " arguments but only received ").concat(args.length);
          var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
          throw new errors_1.ValidationError(failure);
        }
        for (var i = 0; i < argRuntypes.length; i++) argRuntypes[i].check(args[i]);
        var returnedPromise = f.apply(void 0, __spreadArray([], __read(args), false));
        if (!(returnedPromise instanceof Promise)) {
          var message = "Expected function to return a promise, but instead got ".concat(returnedPromise);
          var failure = util_1.FAILURE.RETURN_INCORRECT(message);
          throw new errors_1.ValidationError(failure);
        }
        return returnedPromise.then(returnRuntype.check);
      };
    }
  };
}
exports.AsyncContract = AsyncContract;

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports) {



var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.when = exports.match = void 0;
function match() {
  var cases = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    cases[_i] = arguments[_i];
  }
  return function (x) {
    var e_1, _a;
    try {
      for (var cases_1 = __values(cases), cases_1_1 = cases_1.next(); !cases_1_1.done; cases_1_1 = cases_1.next()) {
        var _b = __read(cases_1_1.value, 2),
          T = _b[0],
          f = _b[1];
        if (T.guard(x)) return f(x);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (cases_1_1 && !cases_1_1.done && (_a = cases_1.return)) _a.call(cases_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    throw new Error('No alternatives were matched');
  };
}
exports.match = match;
function when(runtype, transformer) {
  return [runtype, transformer];
}
exports.when = when;

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Unknown = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'unknown'
};
/**
 * Validates anything, but provides no new type information about it.
 */
exports.Unknown = (0, runtype_1.create)(function (value) {
  return (0, util_1.SUCCESS)(value);
}, self);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.innerValidate = exports.create = exports.isRuntype = void 0;
var index_1 = __webpack_require__(2);
var show_1 = __webpack_require__(8);
var errors_1 = __webpack_require__(6);
var util_1 = __webpack_require__(7);
var RuntypeSymbol = Symbol();
var isRuntype = function (x) {
  return (0, util_1.hasKey)(RuntypeSymbol, x);
};
exports.isRuntype = isRuntype;
function create(validate, A) {
  A[RuntypeSymbol] = true;
  A.check = check;
  A.assert = check;
  A._innerValidate = function (value, visited) {
    if (visited.has(value, A)) return (0, util_1.SUCCESS)(value);
    return validate(value, visited);
  };
  A.validate = function (value) {
    return A._innerValidate(value, VisitedState());
  };
  A.guard = guard;
  A.Or = Or;
  A.And = And;
  A.optional = optional;
  A.nullable = nullable;
  A.withConstraint = withConstraint;
  A.withGuard = withGuard;
  A.withBrand = withBrand;
  A.reflect = A;
  A.toString = function () {
    return "Runtype<".concat((0, show_1.default)(A), ">");
  };
  return A;
  function check(x) {
    var result = A.validate(x);
    if (result.success) return result.value;else throw new errors_1.ValidationError(result);
  }
  function guard(x) {
    return A.validate(x).success;
  }
  function Or(B) {
    return (0, index_1.Union)(A, B);
  }
  function And(B) {
    return (0, index_1.Intersect)(A, B);
  }
  function optional() {
    return (0, index_1.Optional)(A);
  }
  function nullable() {
    return (0, index_1.Union)(A, index_1.Null);
  }
  function withConstraint(constraint, options) {
    return (0, index_1.Constraint)(A, constraint, options);
  }
  function withGuard(guard, options) {
    return (0, index_1.Constraint)(A, guard, options);
  }
  function withBrand(B) {
    return (0, index_1.Brand)(B, A);
  }
}
exports.create = create;
function innerValidate(targetType, value, visited) {
  return targetType._innerValidate(value, visited);
}
exports.innerValidate = innerValidate;
function VisitedState() {
  var members = new WeakMap();
  var add = function (candidate, type) {
    if (candidate === null || !(typeof candidate === 'object')) return;
    var typeSet = members.get(candidate);
    members.set(candidate, typeSet ? typeSet.set(type, true) : new WeakMap().set(type, true));
  };
  var has = function (candidate, type) {
    var typeSet = members.get(candidate);
    var value = typeSet && typeSet.get(type) || false;
    add(candidate, type);
    return value;
  };
  return {
    has: has
  };
}

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Never = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'never'
};
/**
 * Validates nothing (unknown fails).
 */
exports.Never = (0, runtype_1.create)(util_1.FAILURE.NOTHING_EXPECTED, self);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Void = void 0;
var unknown_1 = __webpack_require__(11);
/**
 * Void is an alias for Unknown
 *
 * @deprecated Please use Unknown instead
 */
exports.Void = unknown_1.Unknown;

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Nullish = exports.Null = exports.Undefined = exports.Literal = exports.literal = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var union_1 = __webpack_require__(16);
/**
 * Be aware of an Array of Symbols `[Symbol()]` which would throw "TypeError: Cannot convert a Symbol value to a string"
 */
function literal(value) {
  return Array.isArray(value) ? String(value.map(String)) : typeof value === 'bigint' ? String(value) + 'n' : String(value);
}
exports.literal = literal;
/**
 * Construct a runtype for a type literal.
 */
function Literal(valueBase) {
  var self = {
    tag: 'literal',
    value: valueBase
  };
  return (0, runtype_1.create)(function (value) {
    return value === valueBase ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.VALUE_INCORRECT('literal', "`".concat(literal(valueBase), "`"), "`".concat(literal(value), "`"));
  }, self);
}
exports.Literal = Literal;
/**
 * An alias for Literal(undefined).
 */
exports.Undefined = Literal(undefined);
/**
 * An alias for Literal(null).
 */
exports.Null = Literal(null);
/**
 * An alias for `Union(Null, Undefined)`.
 */
exports.Nullish = (0, union_1.Union)(exports.Null, exports.Undefined);

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Union = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Construct a union runtype from runtypes for its alternatives.
 */
function Union() {
  var alternatives = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    alternatives[_i] = arguments[_i];
  }
  var match = function () {
    var cases = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      cases[_i] = arguments[_i];
    }
    return function (x) {
      for (var i = 0; i < alternatives.length; i++) {
        if (alternatives[i].guard(x)) {
          return cases[i](x);
        }
      }
    };
  };
  var self = {
    tag: 'union',
    alternatives: alternatives,
    match: match
  };
  return (0, runtype_1.create)(function (value, visited) {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    if (typeof value !== 'object' || value === null) {
      try {
        for (var alternatives_1 = __values(alternatives), alternatives_1_1 = alternatives_1.next(); !alternatives_1_1.done; alternatives_1_1 = alternatives_1.next()) {
          var alternative = alternatives_1_1.value;
          if ((0, runtype_1.innerValidate)(alternative, value, visited).success) return (0, util_1.SUCCESS)(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (alternatives_1_1 && !alternatives_1_1.done && (_a = alternatives_1.return)) _a.call(alternatives_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return util_1.FAILURE.TYPE_INCORRECT(self, value);
    }
    var commonLiteralFields = {};
    try {
      for (var alternatives_2 = __values(alternatives), alternatives_2_1 = alternatives_2.next(); !alternatives_2_1.done; alternatives_2_1 = alternatives_2.next()) {
        var alternative = alternatives_2_1.value;
        if (alternative.reflect.tag === 'record') {
          var _loop_1 = function (fieldName) {
            var field = alternative.reflect.fields[fieldName];
            if (field.tag === 'literal') {
              if (commonLiteralFields[fieldName]) {
                if (commonLiteralFields[fieldName].every(function (value) {
                  return value !== field.value;
                })) {
                  commonLiteralFields[fieldName].push(field.value);
                }
              } else {
                commonLiteralFields[fieldName] = [field.value];
              }
            }
          };
          for (var fieldName in alternative.reflect.fields) {
            _loop_1(fieldName);
          }
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (alternatives_2_1 && !alternatives_2_1.done && (_b = alternatives_2.return)) _b.call(alternatives_2);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    for (var fieldName in commonLiteralFields) {
      if (commonLiteralFields[fieldName].length === alternatives.length) {
        try {
          for (var alternatives_3 = (e_3 = void 0, __values(alternatives)), alternatives_3_1 = alternatives_3.next(); !alternatives_3_1.done; alternatives_3_1 = alternatives_3.next()) {
            var alternative = alternatives_3_1.value;
            if (alternative.reflect.tag === 'record') {
              var field = alternative.reflect.fields[fieldName];
              if (field.tag === 'literal' && (0, util_1.hasKey)(fieldName, value) && value[fieldName] === field.value) {
                return (0, runtype_1.innerValidate)(alternative, value, visited);
              }
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (alternatives_3_1 && !alternatives_3_1.done && (_c = alternatives_3.return)) _c.call(alternatives_3);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      }
    }
    try {
      for (var alternatives_4 = __values(alternatives), alternatives_4_1 = alternatives_4.next(); !alternatives_4_1.done; alternatives_4_1 = alternatives_4.next()) {
        var targetType = alternatives_4_1.value;
        if ((0, runtype_1.innerValidate)(targetType, value, visited).success) return (0, util_1.SUCCESS)(value);
      }
    } catch (e_4_1) {
      e_4 = {
        error: e_4_1
      };
    } finally {
      try {
        if (alternatives_4_1 && !alternatives_4_1.done && (_d = alternatives_4.return)) _d.call(alternatives_4);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    return util_1.FAILURE.TYPE_INCORRECT(self, value);
  }, self);
}
exports.Union = Union;

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Template = void 0;
var runtype_1 = __webpack_require__(12);
var show_1 = __webpack_require__(8);
var util_1 = __webpack_require__(7);
var literal_1 = __webpack_require__(15);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
var escapeRegExp = function (string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
var parseArgs = function (args) {
  // If the first element is an `Array`, maybe it's called by the tagged style
  if (0 < args.length && Array.isArray(args[0])) {
    var _a = __read(args),
      strings = _a[0],
      runtypes = _a.slice(1);
    // For further manipulation, recreate an `Array` because `TemplateStringsArray` is readonly
    return [Array.from(strings), runtypes];
  } else {
    var convenient = args;
    var strings = convenient.reduce(function (strings, arg) {
      // Concatenate every consecutive literals as strings
      if (!(0, runtype_1.isRuntype)(arg)) strings.push(strings.pop() + String(arg));
      // Skip runtypes
      else strings.push('');
      return strings;
    }, ['']);
    var runtypes = convenient.filter(runtype_1.isRuntype);
    return [strings, runtypes];
  }
};
/**
 * Flatten inner runtypes of a `Template` if possible, with in-place strategy
 */
var flattenInnerRuntypes = function (strings, runtypes) {
  for (var i = 0; i < runtypes.length;) {
    switch (runtypes[i].reflect.tag) {
      case 'literal':
        {
          var literal_2 = runtypes[i];
          runtypes.splice(i, 1);
          var string = String(literal_2.value);
          strings.splice(i, 2, strings[i] + string + strings[i + 1]);
          break;
        }
      case 'template':
        {
          var template = runtypes[i];
          runtypes.splice.apply(runtypes, __spreadArray([i, 1], __read(template.runtypes), false));
          var innerStrings = template.strings;
          if (innerStrings.length === 1) {
            strings.splice(i, 2, strings[i] + innerStrings[0] + strings[i + 1]);
          } else {
            var first = innerStrings[0];
            var rest = innerStrings.slice(1, -1);
            var last = innerStrings[innerStrings.length - 1];
            strings.splice.apply(strings, __spreadArray(__spreadArray([i, 2, strings[i] + first], __read(rest), false), [last + strings[i + 1]], false));
          }
          break;
        }
      case 'union':
        {
          var union = runtypes[i];
          if (union.alternatives.length === 1) {
            try {
              var literal_3 = getInnerLiteral(union);
              runtypes.splice(i, 1);
              var string = String(literal_3.value);
              strings.splice(i, 2, strings[i] + string + strings[i + 1]);
              break;
            } catch (_) {
              i++;
              break;
            }
          } else {
            i++;
            break;
          }
        }
      case 'intersect':
        {
          var intersect = runtypes[i];
          if (intersect.intersectees.length === 1) {
            try {
              var literal_4 = getInnerLiteral(intersect);
              runtypes.splice(i, 1);
              var string = String(literal_4.value);
              strings.splice(i, 2, strings[i] + string + strings[i + 1]);
              break;
            } catch (_) {
              i++;
              break;
            }
          } else {
            i++;
            break;
          }
        }
      default:
        i++;
        break;
    }
  }
};
var normalizeArgs = function (args) {
  var _a = __read(parseArgs(args), 2),
    strings = _a[0],
    runtypes = _a[1];
  flattenInnerRuntypes(strings, runtypes);
  return [strings, runtypes];
};
var getInnerLiteral = function (runtype) {
  switch (runtype.reflect.tag) {
    case 'literal':
      return runtype;
    case 'brand':
      return getInnerLiteral(runtype.reflect.entity);
    case 'union':
      if (runtype.reflect.alternatives.length === 1) return getInnerLiteral(runtype.reflect.alternatives[0]);
      break;
    case 'intersect':
      if (runtype.reflect.intersectees.length === 1) return getInnerLiteral(runtype.reflect.intersectees[0]);
      break;
    default:
      break;
  }
  throw undefined;
};
var identity = function (s) {
  return s;
};
var revivers = {
  string: [function (s) {
    return globalThis.String(s);
  }, '.*'],
  number: [function (s) {
    return globalThis.Number(s);
  }, '[+-]?(?:\\d*\\.\\d+|\\d+\\.\\d*|\\d+)(?:[Ee][+-]?\\d+)?', '0[Bb][01]+', '0[Oo][0-7]+', '0[Xx][0-9A-Fa-f]+'
  // Note: `"NaN"` isn't here, as TS doesn't allow `"NaN"` to be a `` `${number}` ``
  ],
  bigint: [function (s) {
    return globalThis.BigInt(s);
  }, '-?[1-9]d*'],
  boolean: [function (s) {
    return s === 'false' ? false : true;
  }, 'true', 'false'],
  null: [function () {
    return null;
  }, 'null'],
  undefined: [function () {
    return undefined;
  }, 'undefined']
};
var getReviversFor = function (reflect) {
  switch (reflect.tag) {
    case 'literal':
      {
        var _a = __read(revivers[(0, util_1.typeOf)(reflect.value)] || [identity], 1),
          reviver_1 = _a[0];
        return reviver_1;
      }
    case 'brand':
      return getReviversFor(reflect.entity);
    case 'constraint':
      return getReviversFor(reflect.underlying);
    case 'union':
      return reflect.alternatives.map(getReviversFor);
    case 'intersect':
      return reflect.intersectees.map(getReviversFor);
    default:
      var _b = __read(revivers[reflect.tag] || [identity], 1),
        reviver = _b[0];
      return reviver;
  }
};
/** Recursively map corresponding reviver and  */
var reviveValidate = function (reflect, visited) {
  return function (value) {
    var e_1, _a, e_2, _b;
    var revivers = getReviversFor(reflect);
    if (Array.isArray(revivers)) {
      switch (reflect.tag) {
        case 'union':
          try {
            for (var _c = __values(reflect.alternatives), _d = _c.next(); !_d.done; _d = _c.next()) {
              var alternative = _d.value;
              var validated = reviveValidate(alternative.reflect, visited)(value);
              if (validated.success) return validated;
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
          return util_1.FAILURE.TYPE_INCORRECT(reflect, value);
        case 'intersect':
          try {
            for (var _e = __values(reflect.intersectees), _f = _e.next(); !_f.done; _f = _e.next()) {
              var intersectee = _f.value;
              var validated = reviveValidate(intersectee.reflect, visited)(value);
              if (!validated.success) return validated;
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
          return (0, util_1.SUCCESS)(value);
        default:
          /* istanbul ignore next */
          throw Error('impossible');
      }
    } else {
      var reviver = revivers;
      var validated = (0, runtype_1.innerValidate)(reflect, reviver(value), visited);
      if (!validated.success && validated.code === 'VALUE_INCORRECT' && reflect.tag === 'literal')
        // TODO: Temporary fix to show unrevived value in message; needs refactor
        return util_1.FAILURE.VALUE_INCORRECT('literal', "\"".concat((0, literal_1.literal)(reflect.value), "\""), "\"".concat(value, "\""));
      return validated;
    }
  };
};
var getRegExpPatternFor = function (reflect) {
  switch (reflect.tag) {
    case 'literal':
      return escapeRegExp(String(reflect.value));
    case 'brand':
      return getRegExpPatternFor(reflect.entity);
    case 'constraint':
      return getRegExpPatternFor(reflect.underlying);
    case 'union':
      return reflect.alternatives.map(getRegExpPatternFor).join('|');
    case 'template':
      {
        return reflect.strings.map(escapeRegExp).reduce(function (pattern, string, i) {
          var prefix = pattern + string;
          var runtype = reflect.runtypes[i];
          if (runtype) return prefix + "(?:".concat(getRegExpPatternFor(runtype.reflect), ")");else return prefix;
        }, '');
      }
    default:
      var _a = __read(revivers[reflect.tag] || [undefined, '.*']),
        patterns = _a.slice(1);
      return patterns.join('|');
  }
};
var createRegExpForTemplate = function (reflect) {
  var pattern = reflect.strings.map(escapeRegExp).reduce(function (pattern, string, i) {
    var prefix = pattern + string;
    var runtype = reflect.runtypes[i];
    if (runtype) return prefix + "(".concat(getRegExpPatternFor(runtype.reflect), ")");else return prefix;
  }, '');
  return new RegExp("^".concat(pattern, "$"), 'su');
};
function Template() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var _a = __read(normalizeArgs(args), 2),
    strings = _a[0],
    runtypes = _a[1];
  var self = {
    tag: 'template',
    strings: strings,
    runtypes: runtypes
  };
  var regexp = createRegExpForTemplate(self);
  var test = function (value, visited) {
    var matches = value.match(regexp);
    if (matches) {
      var values = matches.slice(1);
      for (var i = 0; i < runtypes.length; i++) {
        var runtype = runtypes[i];
        var value_1 = values[i];
        var validated = reviveValidate(runtype.reflect, visited)(value_1);
        if (!validated.success) return validated;
      }
      return (0, util_1.SUCCESS)(value);
    } else {
      return util_1.FAILURE.VALUE_INCORRECT('string', "".concat((0, show_1.default)(self)), "\"".concat((0, literal_1.literal)(value), "\""));
    }
  };
  return (0, runtype_1.create)(function (value, visited) {
    if (typeof value !== 'string') return util_1.FAILURE.TYPE_INCORRECT(self, value);else {
      var validated = test(value, visited);
      if (!validated.success) {
        var result = util_1.FAILURE.VALUE_INCORRECT('string', "".concat((0, show_1.default)(self)), "\"".concat(value, "\""));
        if (result.message !== validated.message)
          // TODO: Should use `details` here, but it needs unionizing `string` anew to the definition of `Details`, which is a breaking change
          result.message += " (inner: ".concat(validated.message, ")");
        return result;
      } else return (0, util_1.SUCCESS)(value);
    }
  }, self);
}
exports.Template = Template;

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Boolean = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'boolean'
};
/**
 * Validates that a value is a boolean.
 */
exports.Boolean = (0, runtype_1.create)(function (value) {
  return typeof value === 'boolean' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, self);

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Number = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'number'
};
/**
 * Validates that a value is a number.
 */
exports.Number = (0, runtype_1.create)(function (value) {
  return typeof value === 'number' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, self);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BigInt = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'bigint'
};
/**
 * Validates that a value is a bigint.
 */
exports.BigInt = (0, runtype_1.create)(function (value) {
  return typeof value === 'bigint' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, self);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.String = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'string'
};
/**
 * Validates that a value is a string.
 */
exports.String = (0, runtype_1.create)(function (value) {
  return typeof value === 'string' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, self);

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Symbol = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var f = function (key) {
  var self = {
    tag: 'symbol',
    key: key
  };
  return (0, runtype_1.create)(function (value) {
    if (typeof value !== 'symbol') return util_1.FAILURE.TYPE_INCORRECT(self, value);else {
      var keyForValue = globalThis.Symbol.keyFor(value);
      if (keyForValue !== key) return util_1.FAILURE.VALUE_INCORRECT('symbol key', quoteIfPresent(key), quoteIfPresent(keyForValue));else return (0, util_1.SUCCESS)(value);
    }
  }, self);
};
var self = {
  tag: 'symbol'
};
/**
 * Validates that a value is a symbol, regardless of whether it is keyed or not.
 */
exports.Symbol = (0, runtype_1.create)(function (value) {
  return typeof value === 'symbol' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, Object.assign(f, self));
var quoteIfPresent = function (key) {
  return key === undefined ? 'undefined' : "\"".concat(key, "\"");
};

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Array = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Construct an array runtype from a runtype for its elements.
 */
function InternalArr(element, isReadonly) {
  var self = {
    tag: 'array',
    isReadonly: isReadonly,
    element: element
  };
  return withExtraModifierFuncs((0, runtype_1.create)(function (xs, visited) {
    if (!Array.isArray(xs)) return util_1.FAILURE.TYPE_INCORRECT(self, xs);
    var keys = (0, util_1.enumerableKeysOf)(xs);
    var results = keys.map(function (key) {
      return (0, runtype_1.innerValidate)(element, xs[key], visited);
    });
    var details = keys.reduce(function (details, key) {
      var result = results[key];
      if (!result.success) details[key] = result.details || result.message;
      return details;
    }, []);
    if ((0, util_1.enumerableKeysOf)(details).length !== 0) return util_1.FAILURE.CONTENT_INCORRECT(self, details);else return (0, util_1.SUCCESS)(xs);
  }, self));
}
function Arr(element) {
  return InternalArr(element, false);
}
exports.Array = Arr;
function withExtraModifierFuncs(A) {
  A.asReadonly = asReadonly;
  return A;
  function asReadonly() {
    return InternalArr(A.element, true);
  }
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tuple = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Construct a tuple runtype from runtypes for each of its elements.
 */
function Tuple() {
  var components = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    components[_i] = arguments[_i];
  }
  var self = {
    tag: 'tuple',
    components: components
  };
  return (0, runtype_1.create)(function (xs, visited) {
    if (!Array.isArray(xs)) return util_1.FAILURE.TYPE_INCORRECT(self, xs);
    if (xs.length !== components.length) return util_1.FAILURE.CONSTRAINT_FAILED(self, "Expected length ".concat(components.length, ", but was ").concat(xs.length));
    var keys = (0, util_1.enumerableKeysOf)(xs);
    var results = keys.map(function (key) {
      return (0, runtype_1.innerValidate)(components[key], xs[key], visited);
    });
    var details = keys.reduce(function (details, key) {
      var result = results[key];
      if (!result.success) details[key] = result.details || result.message;
      return details;
    }, []);
    if ((0, util_1.enumerableKeysOf)(details).length !== 0) return util_1.FAILURE.CONTENT_INCORRECT(self, details);else return (0, util_1.SUCCESS)(xs);
  }, self);
}
exports.Tuple = Tuple;

/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
    r,
    ar = [],
    e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
};
var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Partial = exports.Record = exports.InternalRecord = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Construct a record runtype from runtypes for its values.
 */
function InternalRecord(fields, isPartial, isReadonly) {
  var self = {
    tag: 'record',
    isPartial: isPartial,
    isReadonly: isReadonly,
    fields: fields
  };
  return withExtraModifierFuncs((0, runtype_1.create)(function (x, visited) {
    if (x === null || x === undefined) {
      return util_1.FAILURE.TYPE_INCORRECT(self, x);
    }
    var keysOfFields = (0, util_1.enumerableKeysOf)(fields);
    if (keysOfFields.length !== 0 && typeof x !== 'object') return util_1.FAILURE.TYPE_INCORRECT(self, x);
    var keys = __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(keysOfFields), false), __read((0, util_1.enumerableKeysOf)(x)), false))), false);
    var results = keys.reduce(function (results, key) {
      var fieldsHasKey = (0, util_1.hasKey)(key, fields);
      var xHasKey = (0, util_1.hasKey)(key, x);
      if (fieldsHasKey) {
        var runtype = fields[key];
        var isOptional = isPartial || runtype.reflect.tag === 'optional';
        if (xHasKey) {
          var value = x[key];
          if (isOptional && value === undefined) results[key] = (0, util_1.SUCCESS)(value);else results[key] = (0, runtype_1.innerValidate)(runtype, value, visited);
        } else {
          if (!isOptional) results[key] = util_1.FAILURE.PROPERTY_MISSING(runtype.reflect);else results[key] = (0, util_1.SUCCESS)(undefined);
        }
      } else if (xHasKey) {
        // TODO: exact record validation
        var value = x[key];
        results[key] = (0, util_1.SUCCESS)(value);
      } else {
        /* istanbul ignore next */
        throw new Error('impossible');
      }
      return results;
    }, {});
    var details = keys.reduce(function (details, key) {
      var result = results[key];
      if (!result.success) details[key] = result.details || result.message;
      return details;
    }, {});
    if ((0, util_1.enumerableKeysOf)(details).length !== 0) return util_1.FAILURE.CONTENT_INCORRECT(self, details);else return (0, util_1.SUCCESS)(x);
  }, self));
}
exports.InternalRecord = InternalRecord;
function Record(fields) {
  return InternalRecord(fields, false, false);
}
exports.Record = Record;
function Partial(fields) {
  return InternalRecord(fields, true, false);
}
exports.Partial = Partial;
function withExtraModifierFuncs(A) {
  A.asPartial = asPartial;
  A.asReadonly = asReadonly;
  A.pick = pick;
  A.omit = omit;
  A.extend = extend;
  return A;
  function asPartial() {
    return InternalRecord(A.fields, true, A.isReadonly);
  }
  function asReadonly() {
    return InternalRecord(A.fields, A.isPartial, true);
  }
  function pick() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      keys[_i] = arguments[_i];
    }
    var result = {};
    keys.forEach(function (key) {
      result[key] = A.fields[key];
    });
    return InternalRecord(result, A.isPartial, A.isReadonly);
  }
  function omit() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      keys[_i] = arguments[_i];
    }
    var result = {};
    var existingKeys = (0, util_1.enumerableKeysOf)(A.fields);
    existingKeys.forEach(function (key) {
      if (!keys.includes(key)) result[key] = A.fields[key];
    });
    return InternalRecord(result, A.isPartial, A.isReadonly);
  }
  function extend(fields) {
    return InternalRecord(Object.assign({}, A.fields, fields), A.isPartial, A.isReadonly);
  }
}

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dictionary = void 0;
var runtype_1 = __webpack_require__(12);
var string_1 = __webpack_require__(21);
var constraint_1 = __webpack_require__(27);
var show_1 = __webpack_require__(8);
var util_1 = __webpack_require__(7);
var NumberKey = (0, constraint_1.Constraint)(string_1.String, function (s) {
  return !isNaN(+s);
}, {
  name: 'number'
});
function Dictionary(value, key) {
  var keyRuntype = key === undefined ? string_1.String : key === 'string' ? string_1.String : key === 'number' ? NumberKey : key;
  var keyString = (0, show_1.default)(keyRuntype);
  var self = {
    tag: 'dictionary',
    key: keyString,
    value: value
  };
  return (0, runtype_1.create)(function (x, visited) {
    if (x === null || x === undefined || typeof x !== 'object') return util_1.FAILURE.TYPE_INCORRECT(self, x);
    if (Object.getPrototypeOf(x) !== Object.prototype) if (!Array.isArray(x) || keyString === 'string') return util_1.FAILURE.TYPE_INCORRECT(self, x);
    var numberString = /^(?:NaN|-?\d+(?:\.\d+)?)$/;
    var keys = (0, util_1.enumerableKeysOf)(x);
    var results = keys.reduce(function (results, key) {
      // We should provide interoperability with `number` and `string` here,
      // as a user would expect JavaScript engines to convert numeric keys to
      // string keys automatically. So, if the key can be interpreted as a
      // decimal number, then test it against a `Number` OR `String` runtype.
      var isNumberLikeKey = typeof key === 'string' && numberString.test(key);
      var keyInterop = isNumberLikeKey ? globalThis.Number(key) : key;
      if (isNumberLikeKey ? !keyRuntype.guard(keyInterop) && !keyRuntype.guard(key) : !keyRuntype.guard(keyInterop)) {
        results[key] = util_1.FAILURE.KEY_INCORRECT(self, keyRuntype.reflect, keyInterop);
      } else results[key] = (0, runtype_1.innerValidate)(value, x[key], visited);
      return results;
    }, {});
    var details = keys.reduce(function (details, key) {
      var result = results[key];
      if (!result.success) details[key] = result.details || result.message;
      return details;
    }, {});
    if ((0, util_1.enumerableKeysOf)(details).length !== 0) return util_1.FAILURE.CONTENT_INCORRECT(self, details);else return (0, util_1.SUCCESS)(x);
  }, self);
}
exports.Dictionary = Dictionary;

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Guard = exports.Constraint = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var unknown_1 = __webpack_require__(11);
function Constraint(underlying, constraint, options) {
  var name = options && options.name;
  var args = options && options.args;
  var self = {
    tag: 'constraint',
    underlying: underlying,
    constraint: constraint,
    name: name,
    args: args
  };
  return (0, runtype_1.create)(function (value) {
    var result = underlying.validate(value);
    if (!result.success) return result;
    var message = constraint(result.value);
    if (typeof message === 'string') return util_1.FAILURE.CONSTRAINT_FAILED(self, message);else if (!message) return util_1.FAILURE.CONSTRAINT_FAILED(self);
    return (0, util_1.SUCCESS)(result.value);
  }, self);
}
exports.Constraint = Constraint;
var Guard = function (guard, options) {
  return unknown_1.Unknown.withGuard(guard, options);
};
exports.Guard = Guard;

/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __values = this && this.__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
    m = s && o[s],
    i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Intersect = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Construct an intersection runtype from runtypes for its alternatives.
 */
function Intersect() {
  var intersectees = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    intersectees[_i] = arguments[_i];
  }
  var self = {
    tag: 'intersect',
    intersectees: intersectees
  };
  return (0, runtype_1.create)(function (value, visited) {
    var e_1, _a;
    try {
      for (var intersectees_1 = __values(intersectees), intersectees_1_1 = intersectees_1.next(); !intersectees_1_1.done; intersectees_1_1 = intersectees_1.next()) {
        var targetType = intersectees_1_1.value;
        var result = (0, runtype_1.innerValidate)(targetType, value, visited);
        if (!result.success) return result;
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (intersectees_1_1 && !intersectees_1_1.done && (_a = intersectees_1.return)) _a.call(intersectees_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return (0, util_1.SUCCESS)(value);
  }, self);
}
exports.Intersect = Intersect;

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Optional = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
/**
 * Validates optional value.
 */
function Optional(runtype) {
  var self = {
    tag: 'optional',
    underlying: runtype
  };
  return (0, runtype_1.create)(function (value) {
    return value === undefined ? (0, util_1.SUCCESS)(value) : runtype.validate(value);
  }, self);
}
exports.Optional = Optional;

/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Function = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
var self = {
  tag: 'function'
};
/**
 * Construct a runtype for functions.
 */
exports.Function = (0, runtype_1.create)(function (value) {
  return typeof value === 'function' ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
}, self);

/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InstanceOf = void 0;
var runtype_1 = __webpack_require__(12);
var util_1 = __webpack_require__(7);
function InstanceOf(ctor) {
  var self = {
    tag: 'instanceof',
    ctor: ctor
  };
  return (0, runtype_1.create)(function (value) {
    return value instanceof ctor ? (0, util_1.SUCCESS)(value) : util_1.FAILURE.TYPE_INCORRECT(self, value);
  }, self);
}
exports.InstanceOf = InstanceOf;

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Lazy = void 0;
var runtype_1 = __webpack_require__(12);
/**
 * Construct a possibly-recursive Runtype.
 */
function Lazy(delayed) {
  var data = {
    get tag() {
      return getWrapped()['tag'];
    }
  };
  var cached;
  function getWrapped() {
    if (!cached) {
      cached = delayed();
      for (var k in cached) if (k !== 'tag') data[k] = cached[k];
    }
    return cached;
  }
  return (0, runtype_1.create)(function (x) {
    return getWrapped().validate(x);
  }, data);
}
exports.Lazy = Lazy;

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Brand = void 0;
var runtype_1 = __webpack_require__(12);
function Brand(brand, entity) {
  var self = {
    tag: 'brand',
    brand: brand,
    entity: entity
  };
  return (0, runtype_1.create)(function (value) {
    return entity.validate(value);
  }, self);
}
exports.Brand = Brand;

/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.checked = exports.check = void 0;
var errors_1 = __webpack_require__(6);
var util_1 = __webpack_require__(7);
var prototypes = new WeakMap();
/**
 * A parameter decorator. Explicitly mark the parameter as checked on every method call in combination with `@checked` method decorator. The number of `@check` params must be the same as the number of provided runtypes into `@checked`.\
 * Usage:
 * ```ts
 * @checked(Runtype1, Runtype3)
 * method(@check p1: Static1, p2: number, @check p3: Static3) { ... }
 * ```
 */
function check(target, propertyKey, parameterIndex) {
  var prototype = prototypes.get(target) || new Map();
  prototypes.set(target, prototype);
  var validParameterIndices = prototype.get(propertyKey) || [];
  prototype.set(propertyKey, validParameterIndices);
  validParameterIndices.push(parameterIndex);
}
exports.check = check;
function getValidParameterIndices(target, propertyKey, runtypeCount) {
  var prototype = prototypes.get(target);
  var validParameterIndices = prototype && prototype.get(propertyKey);
  if (validParameterIndices) {
    // used with `@check` parameter decorator
    return validParameterIndices;
  }
  var indices = [];
  for (var i = 0; i < runtypeCount; i++) {
    indices.push(i);
  }
  return indices;
}
/**
 * A method decorator. Takes runtypes as arguments which correspond to the ones of the actual method.
 *
 * Usually, the number of provided runtypes must be _**the same as**_ or _**less than**_ the actual parameters.
 *
 * If you explicitly mark which parameter shall be checked using `@check` parameter decorator, the number of `@check` parameters must be _**the same as**_ the runtypes provided into `@checked`.
 *
 * Usage:
 * ```ts
 * @checked(Runtype1, Runtype2)
 * method1(param1: Static1, param2: Static2, param3: any) {
 *   ...
 * }
 *
 * @checked(Runtype1, Runtype3)
 * method2(@check param1: Static1, param2: any, @check param3: Static3) {
 *   ...
 * }
 * ```
 */
function checked() {
  var runtypes = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    runtypes[_i] = arguments[_i];
  }
  if (runtypes.length === 0) {
    throw new Error('No runtype provided to `@checked`. Please remove the decorator.');
  }
  return function (target, propertyKey, descriptor) {
    var method = descriptor.value;
    var methodId = (target.name || target.constructor.name + '.prototype') + (typeof propertyKey === 'string' ? "[\"".concat(propertyKey, "\"]") : "[".concat(String(propertyKey), "]"));
    var validParameterIndices = getValidParameterIndices(target, propertyKey, runtypes.length);
    if (validParameterIndices.length !== runtypes.length) {
      throw new Error('Number of `@checked` runtypes and @check parameters not matched.');
    }
    if (validParameterIndices.length > method.length) {
      throw new Error('Number of `@checked` runtypes exceeds actual parameter length.');
    }
    descriptor.value = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      runtypes.forEach(function (type, typeIndex) {
        var parameterIndex = validParameterIndices[typeIndex];
        var result = type.validate(args[parameterIndex]);
        if (!result.success) {
          var message = "".concat(methodId, ", argument #").concat(parameterIndex, ": ").concat(result.message);
          var failure = util_1.FAILURE.ARGUMENT_INCORRECT(message);
          throw new errors_1.ValidationError(failure);
        }
      });
      return method.apply(this, args);
    };
  };
}
exports.checked = checked;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PushData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/// <reference lib="webworker" />



// NOTE: We must export or import at least one thing so we are not in
// the "global" scope, but in a module scope which is re-declarable.
//
// The error from tsserver is: 2451: Cannot redeclare block-scoped
// variable 'self'.
//
// Even though this is not really a module and cannot be: ServiceWorkers
// cannot be modules.

// import { PushData } from "@/app/_lib/video/video-common";

const version = 25;
console.log('Custom service worker functions for pr-webrtc: version=', version);
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if ('url' in e.notification.data) {
    // console.log('self.origin', self.origin);

    e.waitUntil(self.clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then(clientList => {
      if (clientList.length > 0) {
        let client = clientList[0];
        for (let i = 0; i < clientList.length; i++) {
          if (clientList[i].focused) {
            client = clientList[i];
          }
        }
        return client.focus();
      }
      return self.clients.openWindow(e.notification.data.url);
    }));

    // old:
    // const p = self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(c => {
    //     // let couldFocus = false;
    //     for (let client of c) {
    //         if (client instanceof WindowClient) {
    //             // console.log('instanceof WindowClient', client);
    //             if ('focus' in client && typeof client.focus === 'function') {
    //                 try {
    //                     return client.focus().catch(reason => {
    //                         console.error(reason, 'for client', client);
    //                     });
    //                     // couldFocus = true;
    //                     // console.log('focus successful for client', client);
    //                 } catch (reason) {
    //                     console.error(reason, 'for client', client);
    //                 }
    //             } else {
    //                 console.warn('no focus method in client');
    //             }
    //         } else {
    //             // console.log('not instanceof WindowClient', client);
    //         }
    //         // console.log('client', client);

    //     }

    //     // if (!couldFocus) {
    //     // console.log('open window for url', e.notification.data.url)
    //     return self.clients.openWindow(e.notification.data.url).catch(reason => {
    //         console.error(reason);
    //     });
    //     // }
    // })

    // e.waitUntil(p)
  }
});

// TODO funktioniert fuer Apple zumindest IOS nur wenn die App auf dem Homescreen gespeichert wurde.
// Zumindest laut MDN Dokumentation: https://developer.mozilla.org/en-US/docs/Web/API/PushEvent
// Fuer Apple Handys:
// "Notifications are supported in web apps saved to the home screen."
// (siehe: https://developer.mozilla.org/en-US/docs/Web/API/PushEvent)

// TODO evtl mal systematisch austesten ob diese datei ueberhaupt ausgefuehrt wird indem nur auf antworten gewartet wird
self.addEventListener('push', e => {
  var _e$data;
  // console.log('push event: e=', e);
  const pushData = (_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.json();
  // console.log('e.data?.json()', pushData)
  // if (!PushData.guard(pushData)) {
  //     console.error('Unexpected pushData', pushData)
  //     return;
  // }
  const notificationOptions = _PushData__WEBPACK_IMPORTED_MODULE_0__.PushData.guard(pushData) ? {
    body: `example notification: ${pushData.example}`,
    data: {
      example: pushData.example
    },
    // tag: 'pr-webRTC call',
    requireInteraction: true,
    silent: false
    // icon: '/accept-call-64x64.png'
  } : {
    body: 'Unexpected push event (pr-webrtc)'
    // silent: false,
    // icon: '/accept-call-64x64.png'
  };
  const promise1 = self.registration.showNotification(`Example push message`, notificationOptions);
  const promise2 = self.clients.matchAll().then(clients => {
    // console.log('clients.length', clients.length);
    clients.forEach(client => {
      var _e$data2;
      // console.log('sending push to', client);
      client.postMessage((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.json());
    });
  });
  e.waitUntil(Promise.all([promise1, promise2]));
});
})();

/******/ })()
;