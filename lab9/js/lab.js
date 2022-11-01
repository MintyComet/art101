/**
 * Author:    Vanessa Ho <vsho@ucsc.edu> and Nick Eyestone <neyeston@ucsc.edu>
 * Created:   31 October 2022
 **/

// find the <div> "output"
 var outputEl = document.getElementById("output");

 //new1El
var new1El = document.createElement("p");
  new1El.id = "p";
  new1El.innerHTML = "Look, a new element!";
  document.body.appendChild(new1El);

//new2El
var new2El = document.createElement("p2");
  new2El.id = "p2";
  new2El.innerHTML = "This is the second new element! I didn't think I could get this to show up the first time, so I'm pretty happy!";
  document.body.appendChild(new2El);

//modifying the css properties of elements
document.getElementById("output").style.borderTop = "15px dashed #98e3cb";

document.getElementById("p").style.font = "bold 20px noto,sans-serif";
document.getElementById("p").style.color = "#679adb";
document.getElementById("p").style.marginLeft = "20px";

document.getElementById("p2").style.font = "bold 20px noto,sans-serif";
document.getElementById("p2").style.color = "#aa9cff";
document.getElementById("p2").style.marginLeft = "35px";
