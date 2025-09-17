import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: false } })
export class ChatMessage extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: Types.ObjectId;

    @Prop({ type: String, enum: ['user', 'system'], required: true })
    sender: 'user' | 'system';

    @Prop({ type: String, required: true })
    message: string;

    @Prop({ type: Types.ObjectId, ref: 'Prediction', default: null })
    predictionId?: Types.ObjectId;

    @Prop({ default: false })
    isFinalResponse?: boolean; // indica si es la respuesta que contiene la predicción final

    @Prop({ type: Object, default: null })
    metadata?: Record<string, any>; // para guardar contexto o variables NLP
}

export const ChatMessageSchema = SchemaFactory.createForClass(ChatMessage);