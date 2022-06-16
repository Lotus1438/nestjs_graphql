import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/login/entities/login.entity';
import { LoginService } from 'src/login/login.service';
import { LoginUserInput } from './dto/login.user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(() => LoginService))
    private loginService: LoginService,
    private jwtService: JwtService){}

    async validateUser(email:string, password:string): Promise<any> {
        const user = await this.loginService.findOne(email)

        const valid = await bcrypt.compare(password, user?.password)

        if(user && valid ) {
            const {password, ...result} = user
            return result 
        }
        return null
    }

    async login(user: Login){
        const access_token = await this.jwtService.signAsync({email: user?.email, sub: user?.id, password: user?.password});
        return {
            access_token,
            user
        }
    }

    async register(loginUserInput: LoginUserInput){
        const user = await this.loginService.findOne(loginUserInput.email)

        if(user){
            throw new Error('User already exist!')
        }
        const password = await bcrypt.hash(loginUserInput.password, 10)
        return this.loginService.create({
    ...loginUserInput,
    password,
    id: 0
})
    }
}
