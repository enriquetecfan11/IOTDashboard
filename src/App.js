import React, { Component } from 'react'
import "./App.css";


import MiniEstacion from './pages/miniestacion';
// import Medidas from './pages/medidas';
// import Estacion from './pages/estacion';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <MiniEstacion />
      </div>
    )
  }
}
