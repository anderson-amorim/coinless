import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Expense extends Component {

  handleEdit(event) {
    console.log('atualizando expense', this.props.id);
  }

  handleDelete() {
    console.log('Deletando expense', this.props.id);
  }

  render() {
    const { id, value, createdAt, onDelete } = this.props;
    const isDebit = value < 0;
    return (
      <li className="list-group-item disabled" style={{ borderRight: 0, borderLeft: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-2" style={{ color: isDebit ? "#e18c8c" : "#8ce196" }}>
              ${isDebit ? -value : value}
            </div>
            <div className="col-sm-2">
              {isDebit ? 'Debit' : 'Credit'}
            </div>
            <div className="col-sm-6">
              <small className="text-muted">
                Created at {new Date(createdAt).toLocaleString()}
              </small>
            </div>
            <div className="col-sm-2">
              <Link to={`/expenses/${id}`} className="expense-icon fa fa-pencil" />
              <i className="expense-icon fa fa-times" onClick={() => onDelete(id)} />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Expense;
