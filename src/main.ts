import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000); //리액트 3000으로 돌려야 하니 5000으로 바꿈
}
bootstrap();
