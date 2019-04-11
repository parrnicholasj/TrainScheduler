var config = {
  apiKey: "AIzaSyBnlPXtVRfBXc2DPmQ8D_3oerITukAeCoY",
  authDomain: "trainhomework-2d53f.firebaseapp.com",
  databaseURL: "https://trainhomework-2d53f.firebaseio.com",
  projectId: "trainhomework-2d53f",
  storageBucket: "trainhomework-2d53f.appspot.com",
  messagingSenderId: "919231237041"
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

