import { RoleModel } from './role.model';

export class UsuarioModel {
  constructor(
    public id: number = null,
    public nome: string = '',
    public email: string = '',
    public senha: string = '',
    public roles: RoleModel[] = []
  ) {}
}
