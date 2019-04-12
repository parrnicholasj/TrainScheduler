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

var timeTill;

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

database.ref().on("child_added", function (snapshot)
{

  console.log(snapshot.val().name);

  var $tr = $("<tr>").append(
  $("<td>").text(snapshot.val().name),
  $("<td>").text(snapshot.val().dest),
  $("<td>").text(snapshot.val().arrival),
  $("<td>").text(snapshot.val().freq),
  $("<td>").text(getNextArrival(snapshot.val().freq, snapshot.val().arrival)),
  $("<td>").text(getremaining(snapshot.val().freq))

  )
  
  $(".tbody").append($tr);

})

function getNextArrival(frequency, first)
{
  //first check if it is later than when the first train will arrive
  //apparently now is always after whatever time i put in
  var now = moment().format("HH:mm");

  now = parseInt(now);
  console.log(now);

  var intFirst = parseInt(first)

  if (now > intFirst)
  {

    var firstMom = moment(first).format("HH:mm");
    moment(firstMom).add(frequency, "minutes").format("HH:mm");
    timeTill = firstMom;
    return firstMom;

  } else if (now == intFirst)
  {
    var firstMom = moment(first).format("HH:mm");
    moment(firstMom).add(frequency, "minutes").format("HH:mm");
    timeTill = firstMom;
    return firstMom;
  }else {//it will do for now
console.log("else");
    now = moment().format("HH:mm");
    moment(now).add(frequency, "minutes").format("HH:mm");
    timeTill = now;
    return now;

  }

}

function getremaining(frequency){

  console.log(frequency);
  console.log(timeTill);
  console.log(moment(timeTill).subtract(frequency, "HH:mm"));
  return moment(timeTill).subtract(frequency, "HH:mm");

}

var test = moment("23:10", "HH:mm");
console.log(getNextArrival(20, test));


