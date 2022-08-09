import { Injectable } from '@nestjs/common';
import { Prisma, Visitas } from '@prisma/client';
import { VisitasDTO } from 'src/dto/Visitas.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VisitasService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: Prisma.VisitasWhereUniqueInput): Promise<Visitas | null> {
    return this.prisma.visitas.findUnique({
      where: id,
    });
  }

 async getAll(): Promise<Visitas[]> {
    return this.prisma.visitas.findMany({
      include: {
         funcionario: true,
         pessoa: true

      },
    });
  }

  async create(data: VisitasDTO): Promise<Visitas> {
    return this.prisma.visitas.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.VisitasWhereUniqueInput;
    data: VisitasDTO;
  }): Promise<Visitas> {
    const { where, data } = params;
    return this.prisma.visitas.update({
      data:{
        funcionario: true
      },
      where,
    });
  }

  // async atualizar(data: VisitasDTO, id): Promise<Visitas> {
  //     return this.prisma.visitas.update({
  //         where: id,
  //         data
  //     })
  // }

  async delte(where: Prisma.VisitasWhereUniqueInput): Promise<Visitas> {
    return this.prisma.visitas.delete({
      where,
    });
  }
}
