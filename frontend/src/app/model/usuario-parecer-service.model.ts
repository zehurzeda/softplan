import { UsuarioModel } from 'src/app/model/usuario.model';
import { ProcessoModel } from './processo.model';
export class UsuarioParecerProcessoModel {
  constructor(
    public id: number = null,
    public usuario: UsuarioModel,
    public processo: ProcessoModel
  ) {}
}
