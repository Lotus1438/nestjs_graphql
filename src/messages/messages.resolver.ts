import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { MessagesService } from './messages.service';
import { Message } from './entities/message.entity';
import { MessageDto } from './dto/message.dto';
import { User } from 'src/users/user.entity';

@Resolver((of) => Message)
export class MessagesResolver {
  constructor(private messagesService: MessagesService) {}

  @Mutation(returns => Message)
  async createMessage(@Args('createMessageInput') createMessageInput: MessageDto): Promise<Message> {
    return this.messagesService.createMessage(createMessageInput);
  }

  @Query(returns => [Message])
  async messages(): Promise<Message[]> {
    return this.messagesService.findAll();
  }

  @Query(returns => Message)
  async getMessage(@Args('id', { type: () => Int }) id: number): Promise<Message> {
    return this.messagesService.findOne(id);
  }

  @Mutation(returns => Message)
  async updateMessage(
    @Args('id', {type: () => Int}) id: number,
    @Args('updateMessageInput') updateMessageInput: MessageDto) {
    return this.messagesService.update(id, updateMessageInput);
  }

  @Mutation(() => Boolean)
  async deleteMessage(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    return this.messagesService.remove(id);
  }

  @ResolveField(returns => User)
  user(@Parent() message: Message): Promise <User>{
    return this.messagesService.getUser(message.user_id)
  }
}
