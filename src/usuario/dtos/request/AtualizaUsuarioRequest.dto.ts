import { IsOptional, IsEmail, MinLength, IsNotEmpty } from "class-validator";
import { EmailUnico } from "src/usuario/validacao/EmailUnico.validator";

export class AtualizaUsuarioRequestDto {

    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsEmail()
    @EmailUnico({message: 'Email já cadastrado'})
    @IsOptional()
    email: string;

    @MinLength(6)
    @IsOptional()
    senha: string;
}