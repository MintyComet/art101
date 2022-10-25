/**
 * Author:    Vanessa Ho <vsho@ucsc.edu> and Nick Eyestone <neyeston@ucsc.edu>
 * Created:   24 October 2022
 **/

// sortName - a function that takes user input and sorts the letters
// of their name
var userName = window.prompt("Hi! Please tell me your name so I can fix it.");

function sortName(userName) {
  console.log("userName =", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //return output
  return nameSorted;
}

//output
document.writeln("Here's your fixed name: ", sortName(userName), "</br>");
