import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')

export class UserController {
    
    @Get('allUser')
    getAllUser() : string {
        return "This api will return all users";
    }

    @Post('createUser')
    createUser() : string {
        return "This api will create a user";
    }
}