/**
 * Created by Farmas on 22.02.2017.
 */
import * as express from "express";
import * as bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import schema from "./schema/schema";

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({schema: schema}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}))

export { app as GraphqlServer };
