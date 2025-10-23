import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Venta } from '../venta/venta.entity'; // ajustar la ruta

//*
// Entidad Facturacion
// Representa la tabla "facturacion" en la base de datos.
// Cada factura pertenece a una sola venta (relación 1:1). */

@Entity('facturacion')
export class Facturacion {
  // ID principal de la factura (autonumérico)
  @PrimaryGeneratedColumn()
  id_facturacion!: number;

  // Número único que identifica la factura
  @Column({ unique: true })
  numero_factura!: string;

  // Tipo de factura (por ejemplo: electrónica, física)
  @Column()
  tipo_factura!: string;

  // Método de pago (por ejemplo: efectivo, tarjeta)
  @Column()
  metodo_pago!: string;

  // Relación 1:1 con la venta asociada
  @OneToOne(() => Venta)
  @JoinColumn({ name: 'id_venta' }) // Este campo será la clave foránea
  venta: Venta;
}
