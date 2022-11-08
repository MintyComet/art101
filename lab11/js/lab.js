/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.07.2022
 **/

//Adding buttons to each section
$('#challenges').append('<button id = "button1">Look a Button!</button>');

$('#problems').append('<button id = "button2">Click Me!</button>');

$('#results').append('<button id = "button3">Hmmm Suspicious...</button>');

//Methods
$('#button1').click(function(){
  $('#challenges').toggleClass("special1");
});

$('#button2').click(function(){
  $('#problems').toggleClass("special2"); 
});

$('#button3').click(function(){
  $('#results').toggleClass("special3");
});
