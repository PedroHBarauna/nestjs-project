import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailUnico } from "src/usuario/validacao/EmailUnico.validator";

export class CriaUsuarioDto {

    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @EmailUnico({message: 'Email já cadastrado'})
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    senha: string;
}