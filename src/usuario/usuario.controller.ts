import { Param, Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { UsuarioService } from "src/usuario/usuario.service";

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
    async criaUsuario(@Body() dadosUsuario){
        try{
            await this.usuarioService.criaUsuario(dadosUsuario);
            return;
        }
        catch(error){
            return error.toString();
        }
    }

    @Post('/login')
    async login(@Body() dadosUsuario){
        try{
            const result = await this.usuarioService.login(dadosUsuario);
            return result;
        }
        catch(error){
            return error.toString();
        }
    }

    @Put()
    async atualizaUsuario(@Param() id: number, @Body() dadosUsuario){
        try{
            await this.usuarioService.atualizaUsuario(id, dadosUsuario);
        }
        catch(error){
            return error.toString();
        }
    }

    @Delete()
    async deletaUsuario(@Param() id: number){
        try{
            await this.usuarioService.deletaUsuario(id);
        }
        catch(error){
            return error.toString();
        }
    }
    
}