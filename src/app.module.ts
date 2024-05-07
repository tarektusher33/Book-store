import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BookModule,
    UserModule,
    AuthModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: '.local.env',
    //   // envFilePath : ".prod.env"
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot({
        isGlobal : true,
        envFilePath : ".local.env",
        // envFilePath : ".prod.env",
      })],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
      }),
      inject: [ConfigService],
    })
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {}
}
