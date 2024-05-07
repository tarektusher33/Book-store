import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGurad } from './role.guard';
import { CONSTANTS } from './constants';

@Controller('user')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(AuthGuard('local'))
  logIn(@Request() req): string {
    return this.authService.generateToken(req.user);
  }


  @Get("android-developer")
  @UseGuards(AuthGuard('jwt'), new RoleGurad(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloper(@Request() req) : string {
    return "This is android developer Data" + JSON.stringify(req.user);
  }

  @Get("nodejs-developer")
  @UseGuards(AuthGuard('jwt'), new RoleGurad(CONSTANTS.ROLES.NODEJS_DEVELOPER))
  nodejsDeveloper(@Request() req) : string {
    return "This is nodejs developer Data"+ JSON.stringify(req.user);
  }
}
