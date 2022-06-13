import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

    async createUser(createUserInput: UserDto): Promise<User>{
        const newUser = await this.usersRepository.create(createUserInput);
        return this.usersRepository.save(newUser);
    }

    async findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.usersRepository.findOne({where: {id}})
        if (!user) throw new Error("User does not exit!")
        return user
    }

    async update(id:number, updateUserInput: UserDto): Promise<User>{
        const user = await this.usersRepository.findOne({ where: {id }})
        if (!user) throw new Error("User does not exist!")
        Object.assign(user, updateUserInput)
        await this.usersRepository.save(user)
        return user
    }

    async remove(id: number): Promise<Boolean>{
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) throw new Error("User does not exist!")
        await this.usersRepository.remove(user)
        return true
    }
}
