import React, { Component } from 'react';

import AppRouter from './AppRouter';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='split-container'>
          <AppRouter />
        </div>
      </div>
    );
  }
}

export default App;
