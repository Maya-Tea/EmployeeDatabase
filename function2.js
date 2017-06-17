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
     


var objectToUpdate = {
  name:"",
  role:"",
  start:"",
  rate:""
};



$("#addButton").on('click', function(event){
	event.preventDefault();



      objectToUpdate.name = $('#name-input').val().trim();
      objectToUpdate.role = $('#role-input').val().trim();
      objectToUpdate.start = $('#start-input').val().trim();
      objectToUpdate.rate = $('#rate-input').val().trim();

      console.log(objectToUpdate);

      


database.ref().push({
	name: objectToUpdate.name,
	role: objectToUpdate.role,
	start: objectToUpdate.start,
	rate: objectToUpdate.rate
});
});
database.ref().on("child_added",function(snapshot){ 
  var a=snapshot.val();
  var b= objectToUpdate;
  var newDiv=$('<div class="col-md-2 name">');
    $(".name").append(a.b.name);
  var newDiv1=$('<div class="col-md-2">');
    newDiv1.append(a.b.role);
  var newDiv2=$('<div class="col-md-2">');
    newDiv2.append(a.b.start);
  var newDiv3=$('<div class="col-md-2">');
    newDiv3.append(a.b.rate);
  
  var superDiv=$('<div class="row">');
    superDiv.append(newDiv);
    superDiv.append(newDiv1);
    superDiv.append(newDiv2);
    superDiv.append(newDiv3);

  $(".chartData").prepend(superDiv);
       

    }, 
    function(errorObject) {          
       console.log("Errors handled: " + errorObject.code);
    });

