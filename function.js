 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBuF6DtdPs0Iagr-_h9MZQ5ToBc1X64Jf4",
    authDomain: "timesheet-27432.firebaseapp.com",
    databaseURL: "https://timesheet-27432.firebaseio.com",
    projectId: "timesheet-27432",
    storageBucket: "timesheet-27432.appspot.com",
    messagingSenderId: "576832095576"
  };
  firebase.initializeApp(config);

var database = firebase.database();

<<<<<<< HEAD
function writeToGrid(objectToWrite){
	 database.ref().set(objectToWrite);
	}
=======
>>>>>>> 37263cbf10271006a8da0894ff5498097390b571

$("#addButton").on('click', function(event){
	event.preventDefault();

var objectToUpdate = {}

      objectToUpdate.name = $('#name-input').val().trim();
      objectToUpdate.role = $('#role-input').val().trim();
      objectToUpdate.start = $('#start-input').val().trim();
      objectToUpdate.rate = $('#rate-input').val().trim();

<<<<<<< HEAD
      console.log(objectToUpdate);

      writeToGrid(objectToUpdate);
=======
>>>>>>> 37263cbf10271006a8da0894ff5498097390b571

database.ref().push({
	name: objectToUpdate.name,
	role: objectToUpdate.role,
	start: objectToUpdate.start,
	rate: objectToUpdate.rate
});


});