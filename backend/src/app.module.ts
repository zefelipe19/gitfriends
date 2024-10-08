import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FriendsModule } from './friends/friends.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FriendsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
