const { readFileSync } = require('fs');

function syncReadFile(filename) {
  const contents = readFileSync(filename, 'utf-8');
  const arr = contents.split(/\r?\n/);
  let calories = []
  j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '') j++;
    else {
      const n = parseInt(arr[i]);
      calories[j] ? calories[j]=calories[j] + n : calories.push(n)
    }

  }
  return calories;
}
function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}


const day1 = syncReadFile('./day1/input.txt');


day1.sort(function(a, b){return b - a});
console.log(day1[0]+day1[1]+day1[2] );
