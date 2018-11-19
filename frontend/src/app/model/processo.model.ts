import { UsuarioModel } from './usuario.model';

export class ProcessoModel {
  constructor(
    public id: number,
    public numeroProcesso: string,
    public descricao: string,
  ) {}
}
