import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class AppResolver {
  @Query(type => String)
  hello(): string {
    return `hello`
  }
}
