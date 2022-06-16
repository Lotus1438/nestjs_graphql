import { Field, ObjectType } from "@nestjs/graphql";
import { Login } from "src/login/entities/login.entity";

@ObjectType()
export class LoginResponse {
    @Field()
    access_token: string

    @Field(() => Login)
    login: Login
}