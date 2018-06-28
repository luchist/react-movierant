import React, { Component } from 'react';
import logo from './images/tomatito.png';
import './App.css';
import { TomatesTruchosRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tomates Truchos</h1>
        </header>
        <TomatesTruchosRoutes />
        <BrowserRouter/>
      </div>
    )
  }
}

export default App;
