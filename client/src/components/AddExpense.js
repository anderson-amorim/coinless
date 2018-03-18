import React, { Component } from 'react';
import SwitchButton from 'lyef-switch-button';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AddExpense extends Component {
  state = {
    value: 0.00,
    credit: true
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        credit: !prevState.credit
      };
    });
  };

  render() {
    return (
      <div >
        <div>
          <div className="card" style={{
            width: 400,
            margin: 'auto'
          }}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">New Expense</label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Expense's amount"
                    onChange={event => this.setState({ value: event.target.value })} />
                </div>
              </div>
              <div className="form-group">
                <SwitchButton
                  id="my-button"
                  labelLeft="Debit"
                  labelRight="Credit"
                  isChecked={this.state.credit}
                  action={this.toggleSwitch}
                />
              </div>
              <button className="btn btn-primary" onClick={this.addExpense}>
                Add expense
              </button>

            </div>
          </div>

        </div>
      </div>
    )
  }

  addExpense = () => {
    const { value, credit } = this.state;
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

export default graphql(mutation)(AddExpense);