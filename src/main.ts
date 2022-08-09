import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
  // {
  //     allowedHeaders: ['content-type'],
  // origin: 'http://localhost:8081',
  // credentials: true,
  // }
  );

  const prismaService = app.get(PrismaService);

  await app.listen(3000);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
