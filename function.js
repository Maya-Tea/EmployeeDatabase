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


$("#addButton").on('click', function(event){
	event.preventDefault();

var objectToUpdate = {}

      objectToUpdate.name = $('#name-input').val().trim();
      objectToUpdate.role = $('#role-input').val().trim();
      objectToUpdate.start = $('#start-input').val().trim();
      objectToUpdate.rate = $('#rate-input').val().trim();


database.ref().push({
	name: objectToUpdate.name,
	role: objectToUpdate.role,
	start: objectToUpdate.start,
	rate: objectToUpdate.rate
});


});