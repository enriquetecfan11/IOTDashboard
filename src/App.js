import React, { Component } from 'react'
import "./App.css";


// import Medidas from './pages/medidas';
import Estacion from './pages/estacion';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Estacion />
      </div>
    )
  }
}
