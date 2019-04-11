var config = {
  apiKey: "AIzaSyCqXd6ALMEJXVXf7-Ztu1yzItimSAYALWU",
  authDomain: "trainhomework-ec91a.firebaseapp.com",
  databaseURL: "https://trainhomework-ec91a.firebaseio.com",
  projectId: "trainhomework-ec91a",
  storageBucket: "trainhomework-ec91a.appspot.com",
  messagingSenderId: "313669188301"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#addTrain").on("click", function (event)
{
  // Don't refresh the page!
  event.preventDefault();

  var formData = {
    name: $("#name").val().trim(),
    dest: $("#destination").val().trim(),
    arrival: $("#arrival").val().trim(),
    freq: $("#freq").val().trim()
  }

  // write data to our firebase database
  console.log(formData);

  $("#name").val("");
  $("#destination").val("");
  $("#arrival").val("");
  $("#freq").val("");

  database.ref().push(formData);

});

$(".tbody").on("value", function(){

  console.log("value");

})

