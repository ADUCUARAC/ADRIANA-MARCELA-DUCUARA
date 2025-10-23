"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaProductoModule = void 0;
const common_1 = require("@nestjs/common");
const venta_producto_controller_1 = require("./venta_producto.controller");
const venta_producto_service_1 = require("./venta_producto.service");
let VentaProductoModule = class VentaProductoModule {
};
exports.VentaProductoModule = VentaProductoModule;
exports.VentaProductoModule = VentaProductoModule = __decorate([
    (0, common_1.Module)({
        controllers: [venta_producto_controller_1.VentaProductoController],
        providers: [venta_producto_service_1.VentaProductoService]
    })
], VentaProductoModule);
//# sourceMappingURL=venta_producto.module.js.map