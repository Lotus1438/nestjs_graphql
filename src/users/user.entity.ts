import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Interface } from "readline";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    first_name: string;

    @Column()
    @Field()
    last_name: string;

    // @Column()
    // @Field(type => Int)
    // contact_number: number;

    // @Column({nullable: true})
    // @Field({nullable: true})
    // address?:string;

    // @Column({nullable: true})
    // @Field({nullable: true})
    // birthdate?:string;

    // @Column()
    // @Field()
    // email:string;

    // @Column()
    // @Field()
    // password:string;
}

export interface UserDto{
    success: boolean;
    message: string;
}
