import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ExpensesList from '../components/ExpensesList';

class ExpensesListContainer extends Component {

  render() {
    const { loading, findAllExpenses = [], totalExpenses = 0.00 } = this.props.data;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <ExpensesList expenses={findAllExpenses} total={totalExpenses} />
    );
  }
}


const query = gql`
  query ListExpenses($createdAt: String) {
    findAllExpenses(createdAt: $createdAt) {
      id
      value
      createdAt
      updatedAt
  }
  totalExpenses
 }
`;

const queryOptions = {
  options: ({ createdAt }) => ({
    variables: {
      createdAt
    },
  })
};

export default graphql(query, queryOptions)(ExpensesListContainer);
