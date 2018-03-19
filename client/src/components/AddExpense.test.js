import React from 'react';
import ReactDOM from 'react-dom';
import AddExpense from './AddExpense';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddExpense />, div);
  ReactDOM.unmountComponentAtNode(div);
});
