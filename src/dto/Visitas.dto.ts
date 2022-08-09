import { FuncionarioDTO } from './Funcionario.dto';
import { PessoaDTO } from './Pessoa.dto';

export class VisitasDTO {
  public note: string;
  public createdAt?: Date | string;
  public updatedAt?: Date | string;
  public funcionario: FuncionarioDTO;
  public pessoa: PessoaDTO;
  public ativo: boolean;
}
