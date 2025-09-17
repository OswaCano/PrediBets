import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import {Document, Types} from "mongoose";

@Schema({ timestamps: true })
export class User extends Document{

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    picProfile: string;

    @Prop({ type: Types.ObjectId, ref: 'Subsciption', required: true })
    subscription_id: Types.ObjectId;

    @Prop()
    sub_limit: number;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);