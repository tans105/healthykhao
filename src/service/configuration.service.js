import {LOW, MEDIUM, HIGH, ANYTHING} from "./constants";

const getConfigurations = () => {
  return [
    [LOW, LOW, LOW],                // monday
    [MEDIUM, LOW, LOW],             // tuesday
    [LOW, HIGH, LOW],               // wednesday
    [MEDIUM, LOW, LOW],             // thursday
    [LOW, MEDIUM, HIGH],            // friday
    [HIGH, LOW, LOW],               // saturday
    [ANYTHING, ANYTHING, ANYTHING], // sunday
  ]
}

export {
  getConfigurations
}