import './app.component.css'

import React from 'react'
import {prepare, reset} from "../service/scheduler";

import CalendarComponent from "./calendar/calendar.component";
import Footer from "./common/footer/footer.component";
import Header from "./common/header/header.component";

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
    return generateSchedule ? <CalendarComponent schedule={schedule}/> : null
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <p>Ready to generate the weekly menu? Click on the <strong>Button</strong> below.</p>
        {this.showSchedule()}
        <button className="button-generate" onClick={() => this.generate()} target="_blank" rel="noopener noreferrer">
          Generate
        </button>
        <Footer/>
      </div>
    )
  }
}

export default App
