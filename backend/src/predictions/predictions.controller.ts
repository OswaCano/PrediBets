import { Controller, Post, Body, UseGuards, Get, Put, Delete } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
import {CreatePredictionDto} from "../common/dto/createPrediction.dto";
//import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('predictions')
export class PredictionsController {
    constructor(private predictionsService: PredictionsService) {}

    //@UseGuards(JwtAuthGuard)
    @Post()
    async getPrediction(userId: string, @Body() dto: CreatePredictionDto) {
        return this.predictionsService.createPrediction(userId, dto);
    }

    @Get('mypredictions/:userId')
    async getUserPredictions(@Body() userId: string) {
        return this.predictionsService.getUserPredictions(userId);
    }

}
