import { Module } from '@nestjs/common';
import { ChatMessage, ChatMessageSchema } from '../schemas/chat.schema';
import {MongooseModule} from "@nestjs/mongoose";
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ChatMessage.name, schema: ChatMessageSchema },]),
    ],
    providers: [ChatService],
    controllers: [ChatController],
})

export class ChatModule {}
