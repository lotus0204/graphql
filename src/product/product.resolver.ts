import { Resolver,Query } from '@nestjs/graphql';

@Resolver()
export class ProductResolver {
    @Query(()=>Boolean)
    isPizzaGood(): boolean{
        return true
    }
}
