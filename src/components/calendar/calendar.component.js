import './calendar.component.css'
import {WEEK, MEALS} from "../../service/constants";

import React from 'react'

class CalendarComponent extends React.Component {

  constructor() {
    super();
  }

  getCell(scheduleItem, id) {
    const {name, type} = scheduleItem;

    switch (type) {
      case 0: {
        return <td className="low" key={id}>{name}</td>
      }
      case 1: {
        return <td className="medium" key={id}>{name}</td>
      }
      case 2: {
        return <td className="high" key={id}>{name}</td>
      }
      default: {
        return <td key="-1">NA</td>
      }
    }
  }

  populateMeal(timeOfDay) {
    const {schedule} = this.props;
    const meals = [];
    for (let i = 0; i < 7; i++) meals.push(this.getCell(schedule[i][timeOfDay], i * 10 + timeOfDay))
    return meals;
  }

  render() {
    const breakfasts = this.populateMeal(0);
    const lunch = this.populateMeal(1);
    const dinner = this.populateMeal(2);

    return (
      <div className="calendar-body">
        <table>
          <tbody>
            <tr>
              <th>Schedule</th>
              {WEEK.map((day, i) => <th key={i} className="cell week-day">{day.label}</th>)}</tr>
            <tr>
              <td className="meal">{MEALS[0]}</td>
              {breakfasts}
            </tr>

            <tr>
              <td className="meal">{MEALS[1]}</td>
              {lunch}
            </tr>

            <tr>
              <td className="meal">{MEALS[2]}</td>
              {dinner}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CalendarComponent