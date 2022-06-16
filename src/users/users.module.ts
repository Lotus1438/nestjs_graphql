import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MessagesModule } from 'src/messages/messages.module';
import { MyLogger } from 'src/my-logger/my-logger.service';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), MessagesModule, MyLoggerModule, User],
  providers: [UsersService, UsersResolver, MyLogger],
  exports: [UsersService]
})
export class UsersModule {}
