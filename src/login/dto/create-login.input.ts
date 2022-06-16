import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLoginInput {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;
}
