import {getConfigurations} from "./configuration.service";
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
        dayRoutine[index] = getDish(BREAKFAST_DISH_TYPE, meal.id);
      } else { // main course
        dayRoutine[index] = getDish(MAIN_COURSE_DISH_TYPE, meal.id);
      }
    })

    schedule.push(dayRoutine)
  })

  return schedule;
}

const getDish = ({id}, dishHealthIndex) => {
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
    const randomnumber = Math.floor(Math.random() * (count + 1));

    if (id === BREAKFAST_DISH_TYPE.id) {
      if (!rejected_breakfast[randomnumber] && dishes[randomnumber] && dishes[randomnumber].type === dishHealthIndex) {
        rejected_breakfast[randomnumber] = -1;
        dish = dishes[randomnumber];
        break;
      }
    } else if (id === MAIN_COURSE_DISH_TYPE.id) {
      if (!rejected_main_course[randomnumber] && dishes[randomnumber] && dishes[randomnumber].type === dishHealthIndex) {
        rejected_main_course[randomnumber] = -1;
        dish = dishes[randomnumber];
        break;
      }
    }
  }

  console.log(`${id} - ${dishHealthIndex} - Dish found ${dish}`);
  return dish;
}

export {
  reset,
  prepare,
}