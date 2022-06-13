import { forwardRef, Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesResolver } from './messages.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]),  forwardRef(() => UsersModule)],
  providers: [MessagesResolver, MessagesService],
  exports: [MessagesService]
})
export class MessagesModule {}
