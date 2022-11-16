/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.14.2022
 **/

// FizzBuzz function
function fizzBuzzBoom() {
  //iterate over all our numbers: loop through numbers 1-200
  for (var i=1; i<=200; i++) {

    var outputStr = "";

    if (i%3 == 0) {
      outputStr += "Fizz"; 
    }
    if (i%5 == 0) {
      outputStr += "Buzz";
    }
    if (i%7 == 0) {
      outputStr += "Boom";
    }
    if (outputStr == "") {
      outputStr = i;
    }
    $("#output").append("<p class='num'>" + outputStr + "</p>");
  }
}

$("#button").click(fizzBuzzBoom)
