import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { LoginService } from './login.service';
import { Login } from './entities/login.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver(() => Login)
export class LoginResolver {
  constructor(private readonly loginService: LoginService) {}

  @Query(() => [Login], { name: 'login' })
  @UseGuards(JwtAuthGuard)
  findAll(@Context() context) {
    return this.loginService.findAll();
  }

  @Query(() => Login, { name: 'login' })
  findOne(@Args('email') email: string) {
    return this.loginService.findOne(email);
  }
}
