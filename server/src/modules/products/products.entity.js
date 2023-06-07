"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
/* eslint-disable prettier/prettier */
var sequelize_typescript_1 = require("sequelize-typescript");
var users_entity_1 = require("../users/users.entity");
var Products = exports.Products = function () {
    var _classDecorators = [sequelize_typescript_1.Table];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _price_decorators;
    var _price_initializers = [];
    var _avalaible_decorators;
    var _avalaible_initializers = [];
    var Products = _classThis = /** @class */ (function (_super) {
        __extends(Products_1, _super);
        function Products_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _id_initializers, void 0));
            _this.userId = __runInitializers(_this, _userId_initializers, void 0);
            _this.name = __runInitializers(_this, _name_initializers, void 0);
            _this.image = __runInitializers(_this, _image_initializers, void 0);
            _this.description = __runInitializers(_this, _description_initializers, void 0);
            _this.price = __runInitializers(_this, _price_initializers, void 0);
            _this.avalaible = __runInitializers(_this, _avalaible_initializers, void 0);
            return _this;
        }
        return Products_1;
    }(sequelize_typescript_1.Model));
    __setFunctionName(_classThis, "Products");
    (function () {
        _id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.NUMBER,
                allowNull: false,
                primaryKey: true
            })];
        _userId_decorators = [(0, sequelize_typescript_1.ForeignKey)(function () { return users_entity_1.User; }), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
            })];
        _name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                unique: true,
                allowNull: false,
            })];
        _image_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
            })];
        _description_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
            })];
        _price_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.NUMBER,
                allowNull: false,
            })];
        _avalaible_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false,
            })];
        __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } } }, _id_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } } }, _userId_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } } }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } } }, _image_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } } }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _price_decorators, { kind: "field", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, get: function (obj) { return obj.price; }, set: function (obj, value) { obj.price = value; } } }, _price_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _avalaible_decorators, { kind: "field", name: "avalaible", static: false, private: false, access: { has: function (obj) { return "avalaible" in obj; }, get: function (obj) { return obj.avalaible; }, set: function (obj, value) { obj.avalaible = value; } } }, _avalaible_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Products = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Products = _classThis;
}();
