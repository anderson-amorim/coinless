import React from 'react';
import ReactDOM from 'react-dom';
import ExpensesPage from './ExpensesPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExpensePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
