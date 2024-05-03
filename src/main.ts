import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleWare(req : Request, res : Response, next: NextFunction){
  console.log("This is my first global middleware");
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWare);
  await app.listen(3000);
}
bootstrap();
