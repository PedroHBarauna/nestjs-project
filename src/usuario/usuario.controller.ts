import { Param, Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";
import { CriaUsuarioDto } from "./dtos/request/CriaUsuarioRequest.dto";
import mongoose from "mongoose";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Get()
    async listaUsuario(){
        try{
            const usuarios = await this.usuarioService.listaUsuario();
            return usuarios;
        }
        catch(error){
            return error.toString();
        }
    }

    @Post()
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDto){
        try{
            dadosUsuario['dataCriacao'] = new Date().toUTCString();
            await this.usuarioService.criaUsuario(dadosUsuario);
            return;
        }
        catch(error){
            return error.toString();
        }
    }

    @Post('/login')
    async login(@Body() dadosUsuario: CriaUsuarioDto){
        try{
            const result = await this.usuarioService.login(dadosUsuario);
            return result;
        }
        catch(error){
            return error.toString();
        }
    }

    @Put('/:id')
    async atualizaUsuario(@Param() id: mongoose.Types.ObjectId, @Body() dadosUsuario){
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