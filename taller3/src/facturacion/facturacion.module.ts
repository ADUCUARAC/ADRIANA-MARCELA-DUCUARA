// Importa el decorador @Module, que se usa para definir un módulo en NestJS.
import { Module } from '@nestjs/common';

// Importa TypeOrmModule, que permite conectar entidades a la base de datos.
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa la entidad facturación (representa la tabla de facturación en la base de datos).
import { Facturacion } from './facturacion.entity';

// Importa el servicio que contiene la lógica de negocio de la facturación.
import { FacturacionService } from './facturacion.service';

// Importa el controlador que maneja las rutas HTTP relacionadas con facturación.
import { FacturacionController } from './facturacion.controller';

/**
 * Módulo de Facturación
 * Un módulo agrupa componentes relacionados (controlador, servicio y entidad) en una sola unidad.
 */
@Module({
  // Registra la entidad facturación para que TypeORM pueda trabajar con ella (consultas, guardado, etc.)
  imports: [TypeOrmModule.forFeature([Facturacion])],

  // Declara el controlador que se encargará de recibir las peticiones HTTP.
  controllers: [FacturacionController],

  // Declara los proveedores (services) que contienen la lógica del negocio.
  providers: [FacturacionService],

  // Exporta el servicio para que otros módulos puedan usarlo si lo necesitan.
  exports: [FacturacionService],
})

//Clase principal del módulo de facturación.
// Este módulo reúne todo lo relacionado con facturación (entidad, servicio y controlador).
export class FacturacionModule {}
