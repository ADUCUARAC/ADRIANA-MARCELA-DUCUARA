import { IsString, IsOptional, Length } from 'class-validator';

/**
 * DTO (Objeto de transferencia de datos)
 * Se usa para crear una nueva factura y validar los datos que llegan desde el cliente.
 */
export class CreateFacturacionDto {
  // Número de factura (obligatorio)
  @IsString()
  @Length(2, 50)
  numero_factura!: string;

  // Tipo de factura (obligatorio)
  @IsString()
  @Length(2, 30)
  tipo_factura!: string;

  // Método de pago (obligatorio)
  @IsString()
  @Length(2, 30)
  metodo_pago!: string;

  // ID de la venta asociada (opcional)
  @IsOptional()
  id_venta?: number;
}
