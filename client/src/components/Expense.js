import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay'

class Expense extends Component {
  render() {
    const { id, value, createdAt } = this.props;
    const isDebit = value < 0;
    return (
      <li className="list-group-item disabled" style={{ borderRight: 0, borderLeft: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-1">{id}</div>
            <div className="col-sm-2">${isDebit ? -value : value}</div>
            <div className="col-sm-2">{isDebit ? 'Debit' : 'Credit'}</div>
            <div className="col-sm-7">
              <small className="text-muted">
                Created at {new Date(createdAt).toLocaleString()}
              </small>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default createFragmentContainer(Expense, graphql`
  fragment Expense_expense on Expense {
    id
    value
    createdAt
  }
`);
