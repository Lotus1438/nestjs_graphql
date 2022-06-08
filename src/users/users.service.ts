import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user-input';
import { DeleteUserInput } from './dto/delete-user-input';
import { UpdateUserInput } from './dto/update-user-input';
import { User, UserDto } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>){}

     async createUser(createUserInput: CreateUserInput): Promise<User>{
        const newUser = await this.usersRepository.create(createUserInput);
        return this.usersRepository.save(newUser);
    }

    async findAll(): Promise<User[]>{
        // const user = new User();
        // user.id = 1;
        // user.first_name = 'John';
        // user.last_name = 'Doe';
        // user.contact_number = '09287823633';
        // user.address = 'Cebu City';
        // user.birthdate = 'Jan. 1, 2000';
        // user.email = 'john-doe@email.com';
        // user.password = 'john-doe123';

        // return [user];
        return this.usersRepository.find();
    }

     findOne(id: number): Promise<User> {
        return this.usersRepository.findOneOrFail({where: {id}})
    }

    async update(id:number, updateUserInput: UpdateUserInput): Promise<User>{
        const {first_name, last_name} = updateUserInput
        const user = await this.usersRepository.findOne({ where: {id }})
		user.first_name = first_name
        user.last_name = last_name

		return this.usersRepository.save(user)
    }

    async remove(id: number): Promise<User>{
        const user = new User();
        user.id = id
        return this.usersRepository.remove(user)
    }
}
