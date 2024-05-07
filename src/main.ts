import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import * as dotenv from 'dotenv'

function globalMiddleWare(req : Request, res : Response, next: NextFunction){
  console.log("This is my first global middleware");
  next();
}

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleWare);
  await app.listen(process.env.port);
}
bootstrap();
