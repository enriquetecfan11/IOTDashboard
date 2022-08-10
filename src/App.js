import React, { Component } from 'react'
import "./App.css";


import Medidas from './pages/medidas';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Medidas />
      </div>
    )
  }
}
