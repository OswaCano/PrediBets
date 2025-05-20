import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PredictionsService {
    async fetchPredictionFromIA(homeTeam: string, awayTeam: string) {
        const response = await axios.post('http://localhost:5000/predict', {
            home_team: homeTeam,
            away_team: awayTeam,
        });
        return response.data;
    }
}
