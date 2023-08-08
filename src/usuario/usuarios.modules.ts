import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from 'src/usuario/usuario.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Usuario, UsuarioSchema } from 'src/usuario/usuario.schema';
import { EmailUnicoValidator } from './validacao/EmailUnico.validator';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  providers: [UsuarioService, EmailUnicoValidator],
})
export class UsuarioModule {}