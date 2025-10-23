"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facturacion = void 0;
const typeorm_1 = require("typeorm");
const venta_entity_1 = require("../venta/venta.entity");
let Facturacion = class Facturacion {
};
exports.Facturacion = Facturacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Facturacion.prototype, "id_facturacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Facturacion.prototype, "numero_factura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Facturacion.prototype, "tipo_factura", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Facturacion.prototype, "metodo_pago", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => venta_entity_1.Venta),
    (0, typeorm_1.JoinColumn)({ name: 'id_venta' }),
    __metadata("design:type", typeof (_a = typeof venta_entity_1.Venta !== "undefined" && venta_entity_1.Venta) === "function" ? _a : Object)
], Facturacion.prototype, "venta", void 0);
exports.Facturacion = Facturacion = __decorate([
    (0, typeorm_1.Entity)('facturacion')
], Facturacion);
//# sourceMappingURL=facturacion.entity.js.map