import { InputType, Field, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class MessageDto {

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

  @Field(type => Int)
  user_id: number
}

