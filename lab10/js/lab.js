/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.02.2022
 **/

 function sortName(){
   var userName = window.prompt("Hi! Please tell me your name so i can fix it.");
   console.log("userName = ", userName);
   //split string to array
   var nameArray = userName.split('');
   console.log("nameArray = ", nameArray);
   //sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort = ", nameArraySort);
   //join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted = ", nameSorted);
   //return output
   return nameSorted;
 }

var outputEl = document.getElementById('output');
var button = document.getElementById('my-button');

button.addEventListener('click', function() {
    inputValue = document.getElementById('user-name').value;
    outputEl.innerHTML = "Your Input: " + inputValue;
});
