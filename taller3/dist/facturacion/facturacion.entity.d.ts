import { Venta } from '../venta/venta.entity';
export declare class Facturacion {
    id_facturacion: number;
    numero_factura: string;
    tipo_factura: string;
    metodo_pago: string;
    venta: Venta;
}
