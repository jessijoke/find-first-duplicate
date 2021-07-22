//Read up on optimal solution
function findFirstDuplicate(arr) {
  let newSet = new Set();

  for (var i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i])) return arr[i];
    newSet.add(arr[i]);
    }

    return -1
}

/*
//Attempt at a more efficient algo
function findFirstDuplicate(arr) {
  let newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (newArr.find(element => element === arr[i])) {
      return arr[i];
    } else {
      newArr.push(arr[i]);
    }
  }

  return -1
}*/

/*
My solution
function findFirstDuplicate(arr) {
  let lowestIndex = -1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = (i+1); j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        if (lowestIndex === -1) {
          lowestIndex = j;
        } else {
          if (j < lowestIndex) lowestIndex = j;
        } 
      }
    }
  }
  return lowestIndex === -1 ? lowestIndex : arr[lowestIndex];
}*/

/*
Finds the first number with a duplicate value oops

function findFirstDuplicate(arr) {
  for (var i = 0; i < arr.length; i++) {
    newArr = arr.slice((i+1), (arr.length));
    if (newArr.find(element => element === arr[i])) {
      return arr[i];
    }
  }
  return -1
}
*/

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
