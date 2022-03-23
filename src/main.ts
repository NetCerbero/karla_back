import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:"http://localhost:3000",
    methods:["GET","POST","DELETE","PUT","PATCH"],
    optionsSuccessStatus:200
  })
  await app.listen(5050);
}
bootstrap();
