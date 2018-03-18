import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay'
import Expense from './Expense';
import AddExpense from './AddExpense';

class ListExpenses extends Component {
  render() {
    const { findAllExpenses, totalExpenses } = this.props.expenses;
    return (
      <div>
        <AddExpense />
        <hr className="my-4" />
        <ul className="list-group">
          {findAllExpenses.map(exp =>
            <Expense key={exp.id} {...exp} />
          )}
        </ul>
        <hr className="my-4" />
        {'Total: c$' + totalExpenses}
      </div>
    );
  }
}

export default createFragmentContainer(ListExpenses, graphql`
  fragment ListExpenses_expenses on Query {
    findAllExpenses {
        id
        value
        createdAt
        updatedAt
    }
    totalExpenses
  }
`);
