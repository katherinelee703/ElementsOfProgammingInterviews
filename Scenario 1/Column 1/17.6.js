/*

17.6 - The Gas Up Problem  
        ***  (DONT CONFUSE FOR A Greedy Algo, it's not)

*/

// these 3 will be given inputs
let gas = [50, 20, 5, 30, 25, 10, 10];
let dist = [900, 600, 200, 400, 600, 200, 100];
let mpg = 20;

function gasup(gas, dist, mpg) {
  let gasAtDepart = {};
  let gasBeforeEntry = {};
  let currGas = 0;
  let gasLeft = 0;
  let runningMin = Infinity;
  let start;

  for (let i = 0; i < dist.length; i++) {
    if (gasLeft < runningMin) {
      runningMin = gasLeft;
      start = i;
    }
    gasBeforeEntry[i] = gasLeft;
    currGas += gas[i];
    gasAtDepart[i] = currGas;
    let gasUsed = dist[i] / mpg;
    gasLeft = currGas - gasUsed;
    currGas = gasLeft;
  }
  console.log('gas at depart:', gasAtDepart);
  console.log('gas on entry:', gasBeforeEntry);
  console.log('min:', runningMin);
  console.log('min index (start idx):', start);

  return `start from city at index ${start}`;
}

gasup(gas, dist, mpg);
