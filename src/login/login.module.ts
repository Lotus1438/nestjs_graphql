import { forwardRef, Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginResolver } from './login.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Login]), forwardRef(() => AuthModule), Login],
  providers: [LoginResolver, LoginService],
  exports: [LoginService],
})
export class LoginModule {}
