import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateLoginInput } from './dto/create-login.input';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(Login) private loginRepository: Repository<Login>){}
  
  async create(createLoginInput: CreateLoginInput): Promise<Login> {
    const user = await this.loginRepository.create(createLoginInput)
    console.log(this.loginRepository);
  
    return this.loginRepository.save(user)
  }

  findAll() {
    return this.loginRepository.find();
  }

  async findOne(email: string): Promise<Login> {
    const user = await this.loginRepository.findOne({where: {email}})
    return user
}
}
