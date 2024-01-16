import {
  Args,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from '@nestjs/graphql';

@Resolver()
export class CategoryResolver {
  @Query(() => String)
  categories() {
    return `Hello category`;
  }

  @Mutation(() => String)
  createSingleCategory() {
    return `created category`;
  }
}

@ObjectType()
export class CategoryObject {
  @Field()
  name: string;

  @Field()
  description: string;
}
