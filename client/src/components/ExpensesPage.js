import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import ExpensesListContainer from '../containers/ExpensesListContainer';

class ExpensesPage extends Component {
  state = {
    createdAt: null
  }

  render() {
    console.log(this.state.createdAt);
    return (
      <div>
        <Link to="/expenses/new" className="btn btn-primary">
          Create new
        </Link>
        <hr className="my-4" />
        <div className="form-group">
          <small className="text-muted">
            Filter by creation date
          </small><br/>
          <DatePicker
            style={{ zIndex: 9999 }}
            onChange={date => this.setState({ createdAt: date })}
            value={this.state.createdAt} />
        </div>
        <hr className="my-4" />
        <ExpensesListContainer createdAt={this.state.createdAt} />
      </div>
    );
  }
}

export default ExpensesPage;
