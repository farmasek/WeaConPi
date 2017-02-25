/**
 * Created by Farmas on 22.02.2017.
 */
import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const schema = `
type Weather{
  temperature: String
  date:String
}
type Hour{
  hour: Int,
  currentWeather:Weather
  predictedWeather:Weather
  predictedValues:String
}
type Query {
  weathers: [Weather]
  hour:[Hour]
  modifiedHours:[Hour]
}
`;
export default makeExecutableSchema({typeDefs: schema, resolvers})
