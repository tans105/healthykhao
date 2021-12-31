import './Calendar.css'
import {WEEK, MEALS} from "../../service/constants";

import React from 'react'

class Calendar extends React.Component {

  constructor() {
    super();
  }

  getCell(scheduleItem) {
    const {name, type} = scheduleItem;

    switch (type) {
      case 0: {
        return <td className="low">{name}</td>
      }
      case 1: {
        return <td className="medium">{name}</td>
      }
      case 2: {
        return <td className="high">{name}</td>
      }
      default: {
        return <td>{name}</td>
      }
    }
  }

  render() {
    const {schedule} = this.props;

    return (
      <div className="calendar-body">
        <table>
          <tr>
            <th></th>
            {WEEK.map((day, i) => <th key={i} className="cell week-day">{day.label}</th>)}
          </tr>

          {/*Breakfast*/}
          <tr>
            <td className="meal">{MEALS[0]}</td>
            {this.getCell(schedule[0][0])}
            {this.getCell(schedule[1][0])}
            {this.getCell(schedule[2][0])}
            {this.getCell(schedule[3][0])}
            {this.getCell(schedule[4][0])}
            {this.getCell(schedule[5][0])}
            {this.getCell(schedule[6][0])}
          </tr>

          {/*Lunch*/}
          <tr>
            <td className="meal">{MEALS[1]}</td>
            {this.getCell(schedule[0][1])}
            {this.getCell(schedule[1][1])}
            {this.getCell(schedule[2][1])}
            {this.getCell(schedule[3][1])}
            {this.getCell(schedule[4][1])}
            {this.getCell(schedule[5][1])}
            {this.getCell(schedule[6][1])}
          </tr>

          {/*Dinner*/}
          <tr>
            <td className="meal">{MEALS[2]}</td>
            {this.getCell(schedule[0][2])}
            {this.getCell(schedule[1][2])}
            {this.getCell(schedule[2][2])}
            {this.getCell(schedule[3][2])}
            {this.getCell(schedule[4][2])}
            {this.getCell(schedule[5][2])}
            {this.getCell(schedule[6][2])}
          </tr>
        </table>
      </div>
    )
  }
}

export default Calendar