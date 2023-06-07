"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsProviders = void 0;
/* eslint-disable prettier/prettier */
var products_entity_1 = require("./products.entity");
var constants_1 = require("../../core/constants");
exports.productsProviders = [{
        provide: constants_1.PRODUCTS_REPOSITORY,
        useValue: products_entity_1.Products,
    }];
