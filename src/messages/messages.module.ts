import { forwardRef, Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UsersModule } from 'src/users/users.module';
import { MyLoggerModule } from 'src/my-logger/my-logger.module';
import { MyLogger } from 'src/my-logger/my-logger.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message]),  forwardRef(() => UsersModule), MyLoggerModule],
  providers: [MessagesResolver, MessagesService, MyLogger],
  exports: [MessagesService]
})
export class MessagesModule {}
