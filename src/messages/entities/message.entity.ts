import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Message {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  recipient: string

  @Column()
  @Field()
  subject: string

  @Column()
  @Field()
  message: string

  @Column()
  @Field()
  sender: string

  @Column()
  @Field(type => Int)
  user_id: number

  @ManyToOne(() => User, user => user.messages)
  @Field(type => User)
  user: User
}
