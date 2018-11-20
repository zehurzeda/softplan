import { UsuarioParecerProcessoModel } from './usuario-parecer-service.model';
export class ParecerDtoModel {
  constructor(
    public id: number,
    public parecer: string,
    public nomeUsuario: string
  ) {}
}
