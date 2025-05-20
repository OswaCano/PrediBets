import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { PredictionsService } from './predictions.service';
//import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('predictions')
export class PredictionsController {
    constructor(private readonly predictionsService: PredictionsService) {}

    //@UseGuards(JwtAuthGuard)
    @Post()
    async getPrediction(@Body() body: { homeTeam: string; awayTeam: string }) {
        return this.predictionsService.fetchPredictionFromIA(body.homeTeam, body.awayTeam);
    }

}
