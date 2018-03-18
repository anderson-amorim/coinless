import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpensesContainer from './ExpensesContainer';
import Home from './Home';
import logo from '../logo.svg';
import './App.css';
import 'lyef-switch-button/css/main.css';
import 'bootstrap/dist/css/bootstrap.css'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-intro" style={{ width: 500, margin: 'auto', marginTop: 20 }}>
          <ApolloProvider client={client}>
            <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Switch>
                  <Route exact path="/expenses" component={ExpensesContainer} />
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
