import React, { Component } from 'react'
import './App.css'
import LocationForm from './components/LocationForm'

class App extends Component {
  render() {
    return (
      <div className="root">
        <p className="App-intro">
          Welcome to WeatherRoute
        </p>
        <LocationForm />
      </div>
    )
  }
}

export default App
