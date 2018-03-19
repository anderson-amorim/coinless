import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

class AddExpense extends Component {

  state = {
    value: 0.00,
    credit: true
  }

  toggleSwitch() {
    this.setState(prevState => {
      return {
        credit: !prevState.credit
      };
    });
  };

  handleChange(event, maskedvalue, floatvalue) {
    this.setState({ value: floatvalue });
  }

  componentDidMount() {
    const { expense } = this.props;
    if (expense) {
      const { value } = expense;
      this.setState({
        value: value < 0 ? -value : value,
        credit: value > 0
      });
    }
  }

  render() {
    const { onFinish } = this.props;
    console.log(this.state)
    return (
      <div >
        <div>
          <div className="card" style={{
            width: 400,
            margin: 'auto'
          }}>
            <div className="card-body">
              <h4 >New Expense</h4>
              <div className="form-group" style={{ width: 180, margin: 'auto' }}>
                <CurrencyInput
                  className="form-control"
                  prefix="$"
                  precision="2"
                  value={this.state.value}
                  onChangeEvent={this.handleChange.bind(this)} />
              </div>
              <div className="form-group" style={{ marginTop: 10 }}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="expenseOptions" id="debit" checked={!this.state.credit} onChange={() => this.setState({ credit: false })} />
                  <label className="form-check-label" htmlFor="debit">Debit</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="expenseOptions" id="credit" checked={this.state.credit} onChange={() => this.setState({ credit: true })} />
                  <label className="form-check-label" htmlFor="credit">Credit</label>
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => onFinish(this.state)}>
                Save
              </button>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AddExpense;