import { Controller } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { CreateChatRequest } from '../common/dto/createChat.dto';

@Controller('chat')
export class ChatController {

    @Post('/create')
    async createChat(@Body() createChatRequest: CreateChatRequest) {

    }
}
