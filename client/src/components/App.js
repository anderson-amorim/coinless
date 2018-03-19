import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddExpenseContainer from '../containers/AddExpenseContainer';
import EditExpenseContainer from '../containers/EditExpenseContainer';
import ExpensesPage from './ExpensesPage';
import Home from './Home';
import logo from '../logo.svg';
import './App.css';
import 'lyef-switch-button/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

console.log(process.env.REACT_GRAPHQL_ENDPOINT)
const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro" style={{ width: 600, minHeight: 700, margin: 'auto', marginTop: 20 }}>
          <ApolloProvider client={client}>
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Switch>
                  <Route exact path="/expenses" component={ExpensesPage} />
                  <Route exact path="/expenses/new" component={AddExpenseContainer} />
                  <Route exact path="/expenses/:id" component={EditExpenseContainer} />
                </Switch>
              </div>
            </Router>
          </ApolloProvider>
        </div>
      </div>
    );
  }
}

export default App;
