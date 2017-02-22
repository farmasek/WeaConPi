/**
 * Created by Farmas on 22.02.2017.
 */
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const schema = `
type Weather{
  name: String
  kek:String
}
type Query {
  weathers: [Weather]
}
`;
export default makeExecutableSchema({typeDefs: schema, resolvers})
