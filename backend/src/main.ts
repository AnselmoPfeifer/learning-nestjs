import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './filters/prisma.exceptions-filter';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  // Configure PrismaExceptionFilter() to be the Global ExceptionFilter.
  app.useGlobalFilters(new PrismaExceptionFilter());

  await app.listen(3000);
}
bootstrap();
