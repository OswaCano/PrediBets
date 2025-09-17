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
    @IsOptional()
    picProfile?: string;

    @IsString()
    @IsNotEmpty()
    subscription_id: string;

    @IsOptional()
    sub_limit?: number;
}
