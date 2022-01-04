import logo from '../icon.png'
import './App.css'

import React from 'react'
import {prepare, reset} from "../service/scheduler";
import Calendar from "./Calendar/Calendar";

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

  showSchedule() {
    const {generateSchedule, schedule} = this.state;
    return generateSchedule ? <Calendar schedule={schedule}/> : null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>Ready to generate the weekly menu? Click on the <strong>Button</strong> below.</p>
          {this.showSchedule()}
          <button className="button-three" onClick={() => this.generate()} target="_blank" rel="noopener noreferrer">
            Generate
          </button>
        </header>
      </div>
    )
  }
}

export default App
