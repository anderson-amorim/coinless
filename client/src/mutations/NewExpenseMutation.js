import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
    mutation NewExpenseMutation($value: Float!) {
      createExpense(value: $value) {
        id
        value
        createdAt
        updatedAt
      }
    }
  `;

export default (value, callback) => {

  const variables = {
    value
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      optimisticUpdater: proxyStore => {
        //
      },
      updater2: (store) => {
        // Get the payload returned from the server
        const payload = store.getRootField('createExpense');

        // Get the edge of the newly created todo item
        const newEdge = payload.getLinkedRecord('Expense');

        // Add it to the user's todo list
        const userProxy = store.get(user.id);

        // Get the user's Todo List using ConnectionHandler helper
        const conn = ConnectionHandler.getConnection(
          userProxy,
          'TodoList_todos', // This is the connection identifier, defined here: https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L68
        );

        // Insert the new todo into the Todo List connection
        ConnectionHandler.insertEdgeAfter(conn, newEdge);
      },
      updater: proxyStore => {
        // 1 - retrieve the `newPost` from the server response
        const createPostField = proxyStore.getRootField('createExpense');
        const newPost = createPostField.getLinkedRecord('Expense');

        console.log(createPostField, createPostField.getLinkedRecord());

        // 2 - add `newPost` to the store
        const viewerProxy = proxyStore.get(createPostField.getDataID());
        const connection = ConnectionHandler.getConnection(viewerProxy, 'ListExpenses_expenses');
        if (connection) {
          ConnectionHandler.insertEdgeAfter(connection, newPost)
        }
      },
      onCompleted: () => callback(),
      onError: err => console.error(err),
    },
  )
}