// Define a variable to store the previous page URL
var previousPage = document.referrer;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    const user = 'Durvesh'
    const pass = 'root'
    if (username == user && password == pass) {
        alert("Login successful! Welcome, " + username + "!");
        
        // Redirect to the previous page
        window.location.href = previousPage || "index.html";
    } else {
        alert("Please enter both username and password.");
    }
}
