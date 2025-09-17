import {IsNotEmpty, IsString, IsOptional, IsBoolean, IsArray, ValidateNested} from 'class-validator';
import {Type} from "class-transformer";

export class CreateChatRequest {
    @IsArray()
    @ValidateNested({ each: true })
    @IsNotEmpty({ each: true })
    @Type(() => CreateChatDto)
    message: CreateChatDto[];
}

export class CreateChatDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    model: string;

    @IsString()
    @IsOptional()
    systemMessage?: string;

    @IsBoolean()
    stream: boolean;

    @IsBoolean()
    isActive: boolean;

    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    updatedAt: Date;
}

export default