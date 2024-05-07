import { Injectable } from '@nestjs/common';
import { User } from './data/users.dto';
import { CONSTANTS } from 'src/constants';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'Tarek',
      password: '1234',
      email: 'mdtarek168504@gmail.com',
      age: 24,
      role: CONSTANTS.ROLES.ANDROID_DEVELOPER,
    },
    {
      username: 'Tusher',
      password: '1234',
      email: 'mdtusher168504@gmail.com',
      age: 24,
      role: CONSTANTS.ROLES.NODEJS_DEVELOPER,
    },
  ];

  getUserByUserName(userName: string): User {
    return this.users.find((user) => user.username == userName);
  }
}
