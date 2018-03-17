import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../controllers/schema';
import resolvers from '../controllers/resolver';
import models from '../models';

const router = express.Router();
const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();

router.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { models } }));
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql', }));

module.exports = router
