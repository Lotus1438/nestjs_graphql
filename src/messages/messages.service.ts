import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { MessageDto } from './dto/message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(@InjectRepository(Message) 
  private messagesRepository: Repository<Message>,
  @Inject(forwardRef(() => UsersService))
  private usersService: UsersService){}

  async createMessage(createMessageInput: MessageDto): Promise<Message> {
    const newMessage = await this.messagesRepository.create(createMessageInput)
    return this.messagesRepository.save(newMessage)
  }

  async findAll(): Promise<Message[]> {
    return this.messagesRepository.find();
  }

  async findOne(id: number): Promise<Message> {
    const message = await this.messagesRepository.findOne({where: {id}})
    if (!message) throw new Error("Message does not exist!")
    return message
  }

  async update(id: number, updateMessageInput: MessageDto) {
    const message = await this.messagesRepository.findOne({where: {id}})
    if (!message) throw new Error("Message does not exist!")
    Object.assign(message, updateMessageInput)
    await this.messagesRepository.save(message)
    return message
  }

  async remove(id: number): Promise<Boolean> {
    const message = await this.messagesRepository.findOne({where: {id}})
    if (!message) throw new Error("Message does not exist!")
    await this.messagesRepository.remove(message)
    return true
  }

  async getUser(user_id: number): Promise<User>{
    return this.usersService.findOne(user_id)
  }
}
