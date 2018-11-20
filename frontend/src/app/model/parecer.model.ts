import { UsuarioParecerProcessoModel } from './usuario-parecer-service.model';
export class ParecerModel {
  constructor(
    public id: number,
    public parecer: string,
    public parecerProcesso: UsuarioParecerProcessoModel,
  ) {}
}
