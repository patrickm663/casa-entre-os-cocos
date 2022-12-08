// Author: Patrick Moehrke
//"sendMessage(document.getElementById('name').value, document.getElementById('email').value, document.getElementsById('checkin').value, document.getElementById('checkout'), document.getElementById('message').value)"

function sendMessage(name, email, checkin, checkout, guests, message) {
    // Send email via Lambda function whenever user uses the message form
    name = String(name).trim();
    email = String(email).trim();
    message = String(message).trim();
    if(name == "" || email == "" || message == "" || !String(email).includes("@") || !String(email).includes(".")) {
        alert("Please ensure all fields are complete and/or email is valid");
    } else {
        document.getElementById("submit").disabled = true;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": String(email),
            "name": String(name),
            "checkin": String(checkin),
            "checkout": String(checkout),
            "guests": String(guests),
            "message": String(message)
        });
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        fetch("https://cq3gzldqth.execute-api.us-east-1.amazonaws.com/prod", requestOptions)
            .then(res => res.json())
            .then(function res() {
                document.getElementById('name').value = ""; 
                document.getElementById('email').value = ""; 
                document.getElementById('guests').value = 1; 
                document.getElementById('message').value = "";
                alert("Thank you for sending your message, " + name + ". We will get back to you as soon as possible.");
                document.getElementById("submit").disabled = false;
            })
            .catch(e => console.log(e));
    }
}

function setDate() {
    var today = new Date();
    document.getElementById("checkin").min = today.toISOString().split('T')[0];
    document.getElementById("checkin").value = today.toISOString().split('T')[0];
    document.getElementById("checkout").min = document.getElementById("checkin").value;
    document.getElementById("checkout").value = today.toISOString().split('T')[0];
}

function showMap() {
    var mapOptions = { 
        center: [-24.068652, 35.49249],
        zoom: 15
    };
    var map = new L.map("map", mapOptions);
    var layer = new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    map.addLayer(layer);
}
