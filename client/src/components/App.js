import React, { Component } from 'react';
import ListExpenses from './ListExpenses';
import { QueryRenderer, graphql } from 'react-relay';
import logo from '../logo.svg';
import Environment from '../Environment';
import './App.css';
import 'lyef-switch-button/css/main.css';
import 'bootstrap/dist/css/bootstrap.css'

const AppAllExpensesQuery = graphql`
  query AppAllExpensesQuery {
      ...ListExpenses_expenses
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro" style={{ width: 500, margin: 'auto', marginTop: 20 }}>
          <QueryRenderer
            environment={Environment}
            query={AppAllExpensesQuery}
            render={({ error, props }) => {
              if (error) {
                return <div>{error.message}</div>
              } else if (props) {
                return <ListExpenses expenses={props} />
              }
              return <div>Loading</div>
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
