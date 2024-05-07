import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [BookModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {}
}
