/**
 * Author:    Vanessa Ho <vsho@ucsc.edu> and Nick Eyestone <neyeston@ucsc.edu>
 * Created:   21 October 2022
 **/

// Define Variables

var myTransport = ["DeLorean", " Bus", " Rides from friends"];

var myMainRide = {
  make: "DeLorean",
  model: "DMC-12",
  color: "Gray",
  year: "1982",
  age: function() {
    console.log(2022 - age);
  }
};

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
