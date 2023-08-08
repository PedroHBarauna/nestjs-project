
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuarios.modules';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB_URL), 
    UsuarioModule, ProdutosModule
  ],
  controllers: [],
  providers: []
})

export class AppModule {}
