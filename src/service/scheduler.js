import {getConfigurations} from "./configuration";
import {BREAKFAST, MAIN_COURSE} from "./datastore";
import {BREAKFAST_DISH_TYPE, MAIN_COURSE_DISH_TYPE} from "./constants";

let rejected_breakfast = {}
let rejected_main_course = {}

const reset = () => {
  rejected_breakfast = {};
  rejected_main_course = {};
}

const prepare = () => {
  const configurations = getConfigurations();
  const schedule = [];

  configurations.forEach(configuration => {
    const dayRoutine = [];
    configuration.forEach((meal, index) => {
      if (index === 0) {  // breakfast
        dayRoutine[index] = getDish(BREAKFAST_DISH_TYPE, meal.id, index);
      } else { // main course
        dayRoutine[index] = getDish(MAIN_COURSE_DISH_TYPE, meal.id, index);
      }
    })

    schedule.push(dayRoutine)
  })

  return schedule;
}

const getDish = ({id}, dishHealthIndex, timeOfDay) => {
  if(dishHealthIndex === 3) { // anything
    return 'NA';
  }
  let dishes;
  switch (id) {
    case 'b':
      dishes = BREAKFAST
      break;
    default:
      dishes = MAIN_COURSE
  }

  const count = dishes.length;
  let dish = null;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const idx = Math.floor(Math.random() * (count + 1));
    const currentDish = dishes[idx]

    if (id === BREAKFAST_DISH_TYPE.id) {
      if (!rejected_breakfast[idx] && currentDish && currentDish.type === dishHealthIndex) {
        rejected_breakfast[idx] = -1;
        dish = currentDish;
        break;
      }
    } else if (id === MAIN_COURSE_DISH_TYPE.id) {
      if (!rejected_main_course[idx] && currentDish && currentDish.type === dishHealthIndex) {
        const dishAllowedTime = currentDish.allowedTime;
        if(dishAllowedTime === 3 || (dishAllowedTime === timeOfDay)) {
          rejected_main_course[idx] = -1;
          dish = dishes[idx];
          break;
        }
      }
    }
  }

  return dish;
}

export {
  reset,
  prepare,
}