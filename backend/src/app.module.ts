import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ChatService } from './chat/chat.service';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { PredictionsModule } from './predictions/predictions.module';

@Module({
  imports: [UsersModule, ChatModule, AuthModule, PredictionsModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class AppModule {}
