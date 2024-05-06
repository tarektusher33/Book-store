import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
  public userName: string = 'Tarek';
  public password: string = '1234';

  canActivate(
    context: ExecutionContext,
  ): boolean{
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    const username = request.headers['username'] as string;
    const password = request.headers['password'] as string;

    if (!username || !password) {
      return false;
    }
    return username === this.userName && password === this.password;
  }
}
