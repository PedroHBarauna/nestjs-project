import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioController } from 'src/controllers/usuario.controller';
import { UsuarioService } from 'src/services/usuario.service';
import { Usuario, UsuarioSchema } from 'src/schemas/usuarioSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}