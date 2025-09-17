import {IsNotEmpty, IsString, IsOptional, IsEmail, MinLength, IsBoolean} from 'class-validator';

export class UpdateUserDto {

    @IsString()
    @IsOptional()
    username: string;

    @IsString()
    @IsOptional()
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    @MinLength(8)
    password: string;

    @IsString()
    @IsOptional()
    picProfile?: string;

    @IsString()
    @IsOptional()
    subscription_id: string;

    @IsOptional()
    sub_limit?: number;
}