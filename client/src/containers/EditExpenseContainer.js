import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'react-apollo';
import gql from 'graphql-tag';
import AddExpense from '../components/AddExpense';

class EditExpenseContainer extends Component {

  render() {
    const { loading, findOneExpense } = this.props.data;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <AddExpense onFinish={this.handleEdit} expense={findOneExpense} />
    )
  }

  handleEdit = ({ value, credit }) => {
    const { id } = this.props.match.params;
    this.props.mutate({
      variables: {
        id,
        value: credit ? value : -value
      }
    }).then(res => {
      window.location.replace(`/expenses`);
    }).catch(err => console.log(err));
  }

}

const query = gql`
  query GetExpense($id: Int!) {
    findOneExpense(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;

const queryOptions = {
  options: props => ({
    variables: {
      id: props.match.params.id
    },
  })
};

const mutation = gql`
  mutation EditExpense($id: Int!, $value: Float!) {
    updateExpense(id: $id, value: $value)
  }
`;

export default compose(graphql(query, queryOptions), graphql(mutation))(EditExpenseContainer);
