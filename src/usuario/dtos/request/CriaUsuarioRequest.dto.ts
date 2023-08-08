import { IsString, IsEmail, MinLength, IsNotEmpty } from "class-validator";

export class CriaUsuarioDto {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @MinLength(6)
    @IsNotEmpty()
    senha: string;
}