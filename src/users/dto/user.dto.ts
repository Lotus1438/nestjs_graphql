import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from 'class-validator';

@InputType()
export class UserDto {

  @Field(type => Int)
  user_id: number

  @Field()
  @IsAlpha()
  @IsNotEmpty()
  first_name: string;

  @Field()
  @IsAlpha()
  @IsNotEmpty()
  last_name: string;

  @Field({ nullable: true })
  @IsNumber()
  @Length(11)
  @IsOptional()
  contact_number?: number;

  @Field({ nullable: true })
  @IsOptional()
  address?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  birthdate?: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsAlphanumeric()
  @IsNotEmpty()
  @Length(8)
  password: string;
}

