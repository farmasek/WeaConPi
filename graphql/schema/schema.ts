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
input HourInput{
  hour: Int,
  currentWeather:WeatherInput
  predictedWeather:WeatherInput
  predictedValues:String
}
input WeatherInput{
  temperature: String
  date:String
}
type Query {
  weathers: [Weather]
  hour:[Hour]
  modifiedHours:[Hour]
}
type Mutation {
  insertHour( hour: HourInput! ): Hour
}
schema{
query: Query
mutation: Mutation
}
`;
export default makeExecutableSchema({typeDefs: schema, resolvers})
