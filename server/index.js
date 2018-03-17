import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './controllers/schema';
import resolvers from './controllers/resolver';
import models from './models';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql', }));

models.sequelize.sync().then(() => app.listen(3000));
