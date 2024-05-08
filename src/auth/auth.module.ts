import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { CONSTANTS } from 'src/constants';


@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: CONSTANTS.JWTSECRET.secret,
      // secret: process.env.key,
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [],
  providers: [LocalStrategy, JwtStrategy, AuthService],
  exports: [AuthService],
})
export class AuthModule {
  constructor(){
  }
}
