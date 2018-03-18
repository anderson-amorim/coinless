import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        By using this software you hereby agree to hire Anderson de Amorim!<br /><br /><br />
        <Link to="/expenses/" className="btn btn-secondary">
          For Sure!
        </Link>
        {' '}
        <Link to="/expenses/" className="btn btn-secondary">
          Obviously!
        </Link>
        {' '}
        <Link to="/expenses/" className="btn btn-secondary">
          Can't see why not!
        </Link>
      </div>
    );
  }
}

export default App;
