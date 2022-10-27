/**
 * Author:    Vanessa Ho <vsho@ucsc.edu> and Nick Eyestone <neyeston@ucsc.edu>
 * Created:   26 October 2022
 **/

// define function
function squareRoot(x){
  return Math.sqrt(x);
}

// test function
console.log("What is the square root of 9? ", squareRoot(9));
console.log("What is the square root of 64? ", squareRoot(64));

betterArray = [9, 64, 225, 25, 36, 16]
console.log("My array", betterArray);

var result = betterArray.map(squareRoot)
console.log("Test of finding the square roots of an array: ", result);

var result = betterArray.map(function(x){
  return x % 5;
})

console.log("Modulus 5 of the array: ", result);
