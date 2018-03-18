import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './controllers/schema';
import resolvers from './controllers/resolver';
import models from './models';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-access-token");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, X-XSRF-TOKEN, Authorization, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql', }));


models.sequelize.sync().then(() => app.listen(4000));
