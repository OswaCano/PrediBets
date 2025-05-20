import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema({ timestamps: true })
export class User extends Document{

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;

    @Prop({ type: String, required: true, enum: ['basic', 'fan', 'gambler'] })
    planType: string;

    @Prop({ default: false })
    isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);