import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";

@Injectable() 
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtForRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'jwt_secret',
        });
    }

    async validate(payload: any) {
        return {userId: payload.sub, email: payload.email}
    }
}