import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    BookModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.local.env',
          // envFilePath : ".prod.env",
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities : [__dirname + '/**/*.entity{.ts,.js}']
      }),
      inject: [ConfigService],
    }),
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor() {}
}
