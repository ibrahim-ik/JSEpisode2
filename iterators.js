/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
  array.forEach(element => console.log(element));
  // Your code here
};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function (temperatures) {
  let FtoC =[]
    FtoC = temperatures.map(temperature => (temperature - 32) * (5/9));
    return FtoC
  // Your code here
}


/**************************************
* hottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
* - Accepts a threshold temperature
* - Returns an array of temperatures
*   that exceed the threshold
***************************************/
const hottestDays = function (temperatures, threshold) {
  let aboveThreshold= [];

  aboveThreshold = temperatures.filter(temperature => temperature > threshold)
  return aboveThreshold
}


/******************************************
* logHottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshold) {
  // // Your code here
  // let aboveThreshold= [];
  // let FtoC =[]
  //
  // aboveThreshold = hottestDays(temperatures, threshold)
  // FtoC = toCelsius(aboveThreshold)
  // logger(FtoC)
  logger(toCelsius(hottestDays(temperatures, threshold)));
}


export { logger, toCelsius, hottestDays, logHottestDays }
