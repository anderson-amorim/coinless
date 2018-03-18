import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Expense from './Expense';

class ExpensesList extends Component {

  render() {
    const { loading, findAllExpenses = [], totalExpenses = 0.00 } = this.props.data;
    if (loading) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3 style={{ color: totalExpenses < 0 ? "#e18c8c" : "#8ce196" }}>
          {'Total: c$ ' + (Math.round(totalExpenses * 100) / 100)}
        </h3>
        <ul className="list-group">
          {findAllExpenses.map(expense =>
            <Expense key={expense.id} {...expense} />
          )}
        </ul>
      </div>
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

export default graphql(query, queryOptions)(ExpensesList);
