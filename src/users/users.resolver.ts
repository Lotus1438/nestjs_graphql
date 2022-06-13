import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(of => User)
export class UsersResolver {
    constructor(private usersService: UsersService){}

    @Query(returns => User)
    async getUser(@Args('id', {type: ()=> Int}) id: number): Promise<User>{
        return this.usersService.findOne(id)
    }

    @Query(returns => [User])
    async users(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @Mutation(returns => User)
    async createUser(@Args('createUserInput') createUserInput: UserDto): Promise<User>{
        return this.usersService.createUser(createUserInput);
    }

    @Mutation(returns => User)
    async updateUser(
        @Args('id', {type: () => Int}) id: number,
        @Args('updateUserInput') updateUserInput: UserDto): Promise<User>{
        return this.usersService.update(id, updateUserInput)
    }

    @Mutation(returns => Boolean)
    async deleteUser(@Args('id', {type: ()=> Int}) id: number): Promise<Boolean>{
        return this.usersService.remove(id)

    }
}