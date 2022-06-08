import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsAlphanumeric, IsDateString, IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field()
  @IsAlpha()
  first_name: string;

  @Field()
  @IsAlpha()
  last_name: string;

  // @Field({ nullable: true })
  // @IsNumber()
  // @MinLength(0)
  // @MaxLength(11)
  // contact_number?: number;

  // @Field({ nullable: true })
  // address?: string;

  // @Field({ nullable: true })
  // @IsDateString()
  // birthdate?: string;

  // @Field()
  // @IsEmail()
  // @IsNotEmpty()
  // email: string;

  // @Field()
  // @IsAlphanumeric()
  // @IsNotEmpty()
  // password: string;
}

