import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import axios from "axios";
import { CreatePredictionDto } from "../common/dto/createPrediction.dto";
import { UpdatePredictionDto } from "../common/dto/updatePrediction.dto";
import { Model } from "mongoose";

@Injectable()
export class PredictionsService {

    constructor(
        @InjectModel('Prediction') private readonly PredictionModel: Model<any>,
        @InjectModel('User') private readonly UserModel: Model<any>,
    ) {}


    async createPrediction(userId: string, dto: CreatePredictionDto) {
        const predictRes = await this.callMcp(dto);
        return this.PredictionModel.create({
            userId,
            planType: dto.planType,
            homeTeam: dto.homeTeam,
            awayTeam: dto.awayTeam,
            inputData: dto.inputData,
            predictionResult: predictRes,
            modelVersion: dto.modelVersion,
            matchDate: dto.matchDate || null,
            realResult: dto.realResult || null,

        })
    }

    private async callMcp(input: any) {
        const { data } = await axios.post('http://localhost:8080/predict', input);
        return data;
    }

    async getUserPredictions(userId: string) {
        return this.PredictionModel.find({ userId }).sort({ requestedAt: -1 }).exec();
    }

    async getPredictionById(id: string, userId: string) {
        const pred = await this.PredictionModel.findOne({ _id: id, userId });
        if (!pred) throw new NotFoundException('Predicción no encontrada');
        return pred;
    }
}
