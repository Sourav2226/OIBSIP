function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");

  if (username == storedUsername && password == storedPassword) {
    document.getElementById("LoginForm").style.display = "none";
    document.getElementById("securePage").style.display = "block";
  } else {
    alert("Invalid username or password ");
  }
}

function register() {
  var username = prompt("please Enter your username ");
  var password = prompt("Enter a password ");

  if (username && password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("registration successfull ! You can log in now...");
  } else {
    alert("Username and password are required !");
  }
}
