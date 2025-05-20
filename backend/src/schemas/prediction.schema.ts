import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: { createdAt: 'requestedAt', updatedAt: false } })
export class Prediction extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: String, required: true, enum: ['basic', 'fan', 'gambler'] })
    planType: string;

    @Prop({ required: true })
    homeTeam: string;

    @Prop({ required: true })
    awayTeam: string;

    @Prop({ type: Object, required: true })
    inputData: Record<string, any>;

    @Prop({ type: Object, required: true })
    predictionResult: Record<string, any>;

    @Prop({ default: 'v1.0' })
    modelVersion: string;

    @Prop({ type: Date })
    matchDate?: Date;

    @Prop({ type: String, enum: ['home', 'away', 'draw'], default: null })
    realResult?: string;

    @Prop({ type: Number, min: 0, max: 1, default: null })
    accuracy?: number;
}

export const PredictionSchema = SchemaFactory.createForClass(Prediction);