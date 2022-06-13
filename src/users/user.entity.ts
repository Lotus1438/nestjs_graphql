import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Message } from "src/messages/entities/message.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({nullable: true})
    @Field({ nullable: true })
    contact_number?: number;

    @Column({nullable: true})
    @Field({nullable: true})
    address?:string;

    @Column({nullable: true})
    @Field({nullable: true})
    birthdate?:string;

    @Column()
    @Field()
    email:string;

    @Column()
    @Field()
    password:string;

    @OneToMany(() => Message, message => message.user)
    @Field(type => [Message], {nullable: true})
    messages?: Message[]
}
