import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductSchema {
  @Field(() => String)
  id: string;
}
