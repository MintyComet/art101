/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.21.2022
 **/

// Using the core $.ajax() method
// Pretty much the same format as the example in Canvas
$('#activate').click(function(){
   $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      data: {},
      type: "GET",
      dataType: "json",
      success: function(data){
         console.log(data.value);
         $('#output').html(data.value);
      },
      //What to do if the api call fails
      error: function (jqXHR, textStatus, errorThrown){
         console.log("Error: ", textStatus, errorThrown);
      }
   });
});
