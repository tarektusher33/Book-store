import { IsEmail, IsInt, IsString } from "class-validator";

export class User {
    @IsString()
    username : string;

    @IsString()
    password : string;

    @IsEmail()
    email : string;

    @IsInt()
    age : number;

    @IsString()
    role : string
}