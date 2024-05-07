import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { User } from "./data/users.dto";

@Controller('users')

export class UserController {
    constructor (private userService : UserService){}

    @Post('createUser')
    getUserByUserName(@Body()user : User) : User {
        return this.userService.getUserByUserName(user.username);
    }
}