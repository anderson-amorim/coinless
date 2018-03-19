import React from 'react';
import ReactDOM from 'react-dom';
import ExpensesList from './ExpensesList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExpensesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
