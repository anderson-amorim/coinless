import React, { Component } from 'react';
import AddExpense from './AddExpense';
import ExpensesList from './ExpensesList';

class ExpensesContainer extends Component {
  state = {
    createdAt: null
  }

  render() {
    return (
      <div>
        <AddExpense />
        <hr className="my-4" />
        <div className="form-group">
          <input
            id="createdAtFilter"
            className="form-control"
            placeholder="Filter by Expense's creation date. Ex: MM/DD/YYYY"
            onChange={event => this.setState({ createdAt: event.target.value })} />
        </div>
        <hr className="my-4" />
        <ExpensesList createdAt={this.state.createdAt} />
      </div>
    );
  }
}

export default ExpensesContainer;
