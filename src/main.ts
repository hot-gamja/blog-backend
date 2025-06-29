import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // React 개발 서버 주소
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();