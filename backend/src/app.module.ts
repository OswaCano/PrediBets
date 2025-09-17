import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";

import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { PredictionsModule } from './predictions/predictions.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
      ConfigModule.forRoot({ isGlobal: true }),

      MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/predibets'),

      UsersModule,
      ChatModule,
      AuthModule,
      PredictionsModule,
      SubscriptionModule,
      MessagesModule,
  ],
  controllers: [MessagesController],
  providers: [],

})
export class AppModule {}
