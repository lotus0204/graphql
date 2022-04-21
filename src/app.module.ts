import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PersonModule } from "./models/person.module";
import { ApolloDriver } from "@nestjs/apollo";
import { ProductModule } from './product/product.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver, //이거 추가 했어. 
      // // autoSchemaFile: 'schema.gql',
      // typePaths: ["./**/*.graphql"],
      // PersonModule,
      // transformSchema: schema => upperDirectiveTransformer(schema, 'upper'),
      // installSubscriptionHandlers: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}