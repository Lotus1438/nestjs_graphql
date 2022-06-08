import { UnsupportedMediaTypeException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user-input';
import { UpdateUserInput } from './dto/update-user-input';
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
    async createUser(@Args('createUserInput') createUserInput: CreateUserInput): Promise<User>{
        return this.usersService.createUser(createUserInput);
    }

    @Mutation(returns => User)
    async updateUser(
        @Args('id', {type: () => Int}) id: number,
        @Args('updateUserInput') updateUserInput: UpdateUserInput): Promise<User>{
        return this.usersService.update(id, updateUserInput)
    }

    @Mutation(returns => User)
    async deleteUser(@Args('id', {type: ()=> Int}) id: number): Promise<User>{
        return this.usersService.remove(id)

    }
}
