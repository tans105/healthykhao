import logo from '../icon.png'
import './App.css'

import React from 'react'
import {prepare, reset} from "../service/schedule.service";
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

    if (generateSchedule) {
      return <Calendar schedule={schedule}/>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Ready to generate the weekly menu? Click on the <strong>Button</strong> below.
          </p>
          {this.showSchedule()}
          <button
            className="button-three"
            onClick={() => this.generate()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Generate
          </button>
        </header>
      </div>
    )
  }
}

export default App
