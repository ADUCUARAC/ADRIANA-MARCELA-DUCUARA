import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductoModule } from './producto/producto.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CategoriaModule } from './categoria/categoria.module';
import { VentaProductoModule } from './venta_producto/venta_producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // 👇 Activa el uso del archivo .env en toda la app
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // 👇 Conexión a la base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST!,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!,
      autoLoadEntities: true, // detecta tus entidades automáticamente
      synchronize: true, // crea tablas automáticamente (solo en desarrollo)
    }),

    // 👇 Tus módulos existentes (no se tocan)
    UsuarioModule,
    VentasModule,
    ProductoModule,
    FacturacionModule,
    ProveedorModule,
    CategoriaModule,
    VentaProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
