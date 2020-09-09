import { fifaData } from "./fifa.js";
console.log(fifaData[0]);

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

for (let i = 0; i < fifaData.length; i++) {
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final") {
    console.log(
      `${fifaData[i]["Home Team Name"]} was the ${fifaData[i].Year} World Cup Home Team`
    );
    console.log(
      `${fifaData[i]["Away Team Name"]} was the ${fifaData[i].Year} World Cup away team`
    );
    if (fifaData[i]["Home Team Goals"] === 1) {
      console.log(
        `${fifaData[i]["Home Team Name"]} had ${fifaData[i]["Home Team Goals"]} goal`
      );
    } else {
      console.log(
        `${fifaData[i]["Home Team Name"]} had ${fifaData[i]["Home Team Goals"]} goals`
      );
    }
    if (fifaData[i]["Away Team Goals"] === 1) {
      console.log(
        `${fifaData[i]["Away Team Name"]} had ${fifaData[i]["Away Team Goals"]} goal`
      );
    } else {
      console.log(
        `${fifaData[i]["Away Team Name"]} had ${fifaData[i]["Away Team Goals"]} goals`
      );
    }
    console.log(fifaData[i]["Win conditions"]);
  }
}

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(info1) {
  let finalsData = [];
  for (let i = 0; i < fifaData.length; i++) {
    if (fifaData[i].Stage === info1) {
      finalsData.push(fifaData[i]);
    }
  }
  return finalsData;
}

console.log(getFinals("Final"));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(info2) {
  let years = [];
  for (let i = 0; i < info2.length; i++) {
    years.push(info2[i].Year);
  }
  return years;
}

console.log(getYears(getFinals("Final")));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(info3) {
  let winners = [];
  for (let i = 0; i < info3.length; i++) {
    if (info3[i]["Home Team Goals"] > info3[i]["Away Team Goals"]) {
      winners.push(info3[i]["Home Team Name"]);
    } else if (info3[i]["Home Team Goals"] < info3[i]["Away Team Goals"]) {
      winners.push(info3[i]["Away Team Name"]);
    } else {
      winners.push(info3[i]["Win conditions"]);
    }
  }
  return winners;
}

console.log(getWinners(getFinals("Final")));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(info4) {
  let wby = [];
  let win = getWinners(getFinals("Final"));
  for (let i = 0; i < info4.length; i++) {
    let c = `In ${info4[i]}, ${win[i]} won the world cup!`;
    wby[i] = c;
  }
  return wby;
}

console.log(getWinnersByYear(getYears(getFinals("Final"))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(info5) {
  let ht = [];
  let at = [];
  for (let i = 0; i < info5.length; i++) {
    ht[i] = info5[i]["Home Team Goals"];
    at[i] = info5[i]["Away Team Goals"];
  }
  const tcb = (total, element) => {
    return (total += element);
  };
  let htt = ht.reduce(tcb, 0) / info5.length;
  let httt = htt.toFixed(1);
  let att = at.reduce(tcb, 0) / info5.length;
  let attt = att.toFixed(1);
  let averageGoal = `The home teams had an average of ${httt} goals and the away teams had an average of ${attt} goals in all Fifa Cup finals.`;
  return averageGoal;
}

console.log(getAverageGoals(getFinals("Final")));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
