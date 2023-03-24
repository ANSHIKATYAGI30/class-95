var firebaseConfig = {
    apiKey: "AIzaSyAUnsWM-BBJWVYyrkI2PchewS9K514hsCE",
    authDomain: "practiceclass94-49f9b.firebaseapp.com",
    databaseURL: "https://practiceclass94-49f9b-default-rtdb.firebaseio.com",
    projectId: "practiceclass94-49f9b",
    storageBucket: "practiceclass94-49f9b.appspot.com",
    messagingSenderId: "777389121516",
    appId: "1:777389121516:web:9a61e039e9325491d72ac9"
  };

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ; 
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

function addRoom() {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html"

}

function getData() {firebase.database().ref("/").on('value', function(snapshot)) {document.getElementById("output").innerHTML}};
Room_names = childKey;

console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" Room_names +"<div><hr>";
document.getElementById("output").innerHTML += row;


