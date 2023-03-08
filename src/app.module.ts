
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './modules/usuarios.modules';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MongooseModule.forRoot(process.env.DB_URL), 
    UsuarioModule
  ],
  controllers: [],
  providers: []
})

export class AppModule {}
