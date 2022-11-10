/**
 * Author:    Nicholas Eyestone & Vanessa Ho
 * Created:   11.09.2022
 **/

//House sort function
function sortingHat(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "Gryffindor.";
    } else if (mod == 1) {
      return "Ravenclaw.";
    } else if (mod == 2){
      return "Slytherin.";
    } else if (mod == 3) {
      return "Hufflepuff.";
    }
}

//Description function
function hatDescription(str){
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
      return "If you are lucky enough to end up in Gryffindor, we imagine you're the type of person who likes to stand up for the little guy, challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously.";
    } else if (mod == 1) {
        return "We can imagine that you would get to sit up in Ravenclaw Tower, while surveying the excellent views, if you are the type of person who analyses everything, is an overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts.";
    } else if (mod == 2){
      return "If the Sorting Hat placed you in this noble house, then you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you're the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn't let anyone see their soft side.";
    } else if (mod == 3) {
      return "If you were lucky enough to be sorted into this house, we can imagine you are the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks.";
    }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  var description = hatDescription(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p> <p>" + description + "</p>";
  document.getElementById("output").innerHTML = newText;
})
