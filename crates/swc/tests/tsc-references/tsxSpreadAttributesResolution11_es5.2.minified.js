function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var anyobj, React = require("react"), obj1 = {
    x: 2
}, OverWriteAttr = function(_Component) {
    "use strict";
    !function(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                writable: !0,
                configurable: !0
            }
        }), superClass && _setPrototypeOf(subClass, superClass);
    }(OverWriteAttr, _Component);
    var Derived, hasNativeReflectConstruct, Constructor, protoProps, staticProps, _super = (Derived = OverWriteAttr, hasNativeReflectConstruct = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
        } catch (e) {
            return !1;
        }
    }(), function() {
        var obj, self, call, result, Super = _getPrototypeOf(Derived);
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return self = this, (call = result) && ("object" == ((obj = call) && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj) || "function" == typeof call) ? call : (function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        })(self);
    });
    function OverWriteAttr() {
        return !function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }(this, OverWriteAttr), _super.apply(this, arguments);
    }
    return Constructor = OverWriteAttr, protoProps = [
        {
            key: "render",
            value: function() {
                return React.createElement("div", null, "Hello");
            }
        }
    ], _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), OverWriteAttr;
}(React.Component);
React.createElement(OverWriteAttr, _extends({}, {}, {
    y: !0,
    overwrite: "hi"
}, obj1)), React.createElement(OverWriteAttr, _extends({}, obj1, {
    y: !0,
    overwrite: "hi"
})), React.createElement(OverWriteAttr, _extends({
    x: 3,
    overwrite: "hi"
}, obj1, {
    y: !0
})), React.createElement(OverWriteAttr, _extends({
    overwrite: "hi"
}, obj1, {
    x: 3
}, {
    y: !0,
    x: 2,
    overwrite: "world"
})), React.createElement(OverWriteAttr, _extends({}, {
    x: 2
}, {
    overwrite: "world"
}, {
    y: !0
})), React.createElement(OverWriteAttr, _extends({}, anyobj));
export { };
