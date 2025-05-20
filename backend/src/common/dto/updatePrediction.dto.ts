import {IsNotEmpty, IsString, IsOptional, IsNumber} from 'class-validator';

export class UpdatePredictionDto {

    @IsString()
    @IsNotEmpty()
    userId?: string;

    @IsString()
    @IsNotEmpty()
    planType?: string;

    @IsString()
    @IsNotEmpty()
    homeTeam?: string;

    @IsString()
    @IsNotEmpty()
    awayTeam?: string;

    @IsString()
    @IsNotEmpty()
    inputData?: Record<string, any>;

    @IsString()
    @IsOptional()
    matchDate?: Date;

    @IsString()
    @IsOptional()
    realResult?: string;

    @IsOptional()
    @IsNumber()
    accuracy?: number;

    @IsString()
    @IsOptional()
    predictionResult?: Record<string, any>;

    @IsString()
    @IsOptional()
    modelVersion?: string;
}