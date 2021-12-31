import logo from '../icon.png'
import './App.css'

import React from 'react'
import {prepare, reset} from "../service/schedule.service";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      generateSchedule: false
    }
  }

  generate() {
    const schedule = prepare();
    this.setState({
      schedule,
      generateSchedule: true
    }, () => reset())
  }

  render() {
    const {generateSchedule} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Ready to generate the weekly menu? Click on the <strong>Button</strong> below.
          </p>
          <button
            className="button-three"
            onClick={() => this.generate()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Generate
          </button>
          {(generateSchedule) && JSON.stringify(this.state.schedule)}
        </header>
      </div>
    )
  }
}

export default App
