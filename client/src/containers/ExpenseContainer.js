import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Expense from '../components/Expense';

class ExpenseContainer extends Component {

  render() {
    return (
      <Expense onDelete={this.handleDelete} {...this.props.expense} />
    );
  }

  handleDelete = id => {
    this.props.mutate({
      variables: {
        id
      }
    }).then(res => {
      window.location.replace(`/expenses`);
    }).catch(err => console.log(err));
  }
}

const mutation = gql`
  mutation DeleteExpense($id: Int!) {
    deleteExpense(id: $id)
  }
`;

export default graphql(mutation)(ExpenseContainer);
