import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Expense from './Expense';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Expense />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
it('renders with props', () => {
  const expense = {
    id: 1,
    value: 40.55,
    createdAt: new Date(),
    onDelete: id => console.log(id)
  };

  const expense = shallow(<Expense {...expense} />);
});
*/
