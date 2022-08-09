import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosControlle } from './Controllers/Funcionarios.controller';
import { PessoaControlle } from './Controllers/Pessoa.controller';
import { VisitasControlle } from './Controllers/Visitas.controller';
import { PrismaService } from './prisma.service';
import { FuncionarioService } from './Services/Funcionario.service';
import { PessoaService } from './Services/Pessoa.service';
import { VisitasService } from './Services/Visitas.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    FuncionariosControlle,
    PessoaControlle,
    VisitasControlle,
  ],
  providers: [
    AppService,
    PrismaService,
    FuncionarioService,
    PessoaService,
    VisitasService,
  ],
})
export class AppModule {}
