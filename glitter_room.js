// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBdy425ctLgClTEJrMCPJnZLIwaGBOXYPQ",
      authDomain: "kwitter2-995d7.firebaseapp.com",
      databaseURL: "https://kwitter2-995d7-default-rtdb.firebaseio.com",
      projectId: "kwitter2-995d7",
      storageBucket: "kwitter2-995d7.appspot.com",
      messagingSenderId: "819795410841",
      appId: "1:819795410841:web:270d3a06b3ef91bb31dd08"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " +user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room name - " + Room_names);
     var row= "<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML= row;
      //End code
      });});}
getData();

function add_room(){
      var room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      window.location = "glitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name );
      window.location= "glitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}







