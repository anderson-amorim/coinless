import React, { Component } from 'react';
import ExpenseContainer from '../containers/ExpenseContainer';

class ExpensesList extends Component {

  render() {
    const { expenses, total } = this.props;
    return (
      <div>
        <h3 style={{ color: total < 0 ? "#e18c8c" : "#8ce196", marginBottom: 20 }}>
          {'Total: $ ' + (Math.round(total * 100) / 100)}
        </h3>
        <ul className="list-group">
          {expenses.map(expense =>
            <ExpenseContainer key={expense.id} expense={expense} />
          )}
        </ul>
      </div>
    );
  }
}

export default ExpensesList;
