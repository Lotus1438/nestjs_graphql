import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LoginService } from 'src/login/login.service';
import { LoginModule } from 'src/login/login.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { Login } from 'src/login/entities/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Login]), forwardRef(() => LoginModule), PassportModule, JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: 'jwt_secret'
  })],
  providers: [AuthService, AuthResolver, LocalStrategy, LoginService, JwtStrategy],
  exports: [LoginService, AuthService]
})
export class AuthModule {}
