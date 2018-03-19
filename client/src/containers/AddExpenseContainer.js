import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import AddExpense from '../components/AddExpense';

class AddExpenseContainer extends Component {

  render() {
    return (
      <AddExpense onFinish={this.addExpense} />
    )
  }

  addExpense = ({ value, credit }) => {
    this.props.mutate({
      variables: {
        value: credit ? value : -value
      }
    }).then(res => {
      window.location.replace(`/expenses`);
    }).catch(err => console.log(err));
  }

}

const mutation = gql`
  mutation AddExpense($value: Float!) {
    createExpense(value: $value) {
      id
      value
      createdAt
      updatedAt
    }
  }
`
export default graphql(mutation)(AddExpenseContainer);