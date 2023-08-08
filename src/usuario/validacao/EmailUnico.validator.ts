import { ValidatorConstraintInterface, ValidatorConstraint, ValidationOptions, registerDecorator } from 'class-validator'
import { UsuarioService } from '../usuario.service'
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({async: true})
export class EmailUnicoValidator implements ValidatorConstraintInterface{

    constructor(private usuarioService: UsuarioService){}

    async validate(value: any): Promise<boolean> {
        const usuario = await this.usuarioService.buscaUsuarioPorEmail(value);
        return !usuario;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator,
        });
    }
}