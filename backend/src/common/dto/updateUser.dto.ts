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
    planType: string;

    @IsBoolean()
    @IsOptional()
    isActive: boolean;
}