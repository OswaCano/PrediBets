import { Module } from '@nestjs/common';
import { PredictionsController } from './predictions.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {PredictionSchema} from "../schemas/prediction.schema";
import {PredictionsService} from "./predictions.service";

@Module({
  controllers: [PredictionsController],
  providers: [PredictionsService],
  imports: [
         MongooseModule.forFeature([
             { name: 'Prediction', schema: PredictionSchema },
         ]),
  ],
  exports: [PredictionsService]
})
export class PredictionsModule {}
