import {IsNotEmpty, IsString, IsOptional, IsEmail, MinLength, IsBoolean} from 'class-validator';

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsString()
    planType: string;

    @IsBoolean()
    isActive: boolean;
}