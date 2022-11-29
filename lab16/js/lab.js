/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.28.2022
 **/

//variable comicObj
var comicObj;

//jQuery .ajax recipe from Canvas:
// Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs - XKCD Comic)
     url: "https://xkcd.com/info.0.json",
     // The data to send (will be converted to a query string)
     data: {
             //Don't think id or key is needed here.
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         comicObj = data;
         $('#output').append('<h2>' + comicObj.title + '</h2>');
         $('#output').append('<img src=' + comicObj.img + ' alt=' + comicObj.alt + '/>');
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error: ", textStatus, errorThrown);
     },
 });
