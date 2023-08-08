import { Param, Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";
import { CriaUsuarioRequestDto } from "./dtos/request/CriaUsuarioRequest.dto";
import mongoose from "mongoose";
import { ListaUsuarioResponseDto } from "./dtos/response/ListaUsuarioResponse.dto";
import { AtualizaUsuarioRequestDto } from "./dtos/request/AtualizaUsuarioRequest.dto";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Get()
    async listaUsuario(){
        try{
            const usuarios = await this.usuarioService.listaUsuario();
            const usuariosListados = usuarios.map(usuario => new ListaUsuarioResponseDto(usuario['_id'], usuario['nome']));
            return usuariosListados;
        }
        catch(error){
            return error.toString();
        }
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioRequestDto){
        try{
            dadosUsuario['dataCriacao'] = new Date().toUTCString();
            const usuarioCriado = await this.usuarioService.criaUsuario(dadosUsuario);
            return {id: usuarioCriado['_id']};
        }
        catch(error){
            return error.toString();
        }
    }

    @Post('/login')
    async login(@Body() dadosUsuario: CriaUsuarioRequestDto){
        try{
            const result = await this.usuarioService.login(dadosUsuario);
            return result;
        }
        catch(error){
            return error.toString();
        }
    }

    @Put('/:id')
    async atualizaUsuario(@Param() id: mongoose.Types.ObjectId, @Body() dadosUsuario: AtualizaUsuarioRequestDto){
        try{
            dadosUsuario['dataAtualizacao'] = new Date().toUTCString();
            const dadosAtualizados = await this.usuarioService.atualizaUsuario(id, dadosUsuario);
            return dadosAtualizados;
        }
        catch(error){
            return error.toString();
        }
    }

    @Delete('/:id')
    async deletaUsuario(@Param() id: mongoose.Types.ObjectId){
        try{
            await this.usuarioService.deletaUsuario(id);
        }
        catch(error){
            return error.toString();
        }
    }
    
}