const failedLogin = document.querySelector("#failedLogin");
const username = document.querySelector("#username");
const loginBtn = document.querySelector("#login");
const password = document.querySelector("#password");
const loginDiv = document.querySelector("#loginDiv");

const text = "Qml0QnJlYWtlcl9uMHQgc18wX3MzY3VyZQ==";

function checkPassword(username, password) {
  if (username === "admin" && password === "strongPassword098765") {
    loginSuccess();
  } else {
    loginFailure();
  }
}

function loginSuccess() {
  const decoded = atob(text);
  failedLogin.classList.remove("displayNone");
  loginDiv.style.display = "none";
  failedLogin.innerText = `Login Successful\nHere's your Flag:\n${decoded}`;
}

function loginFailure() {
  alert("Login failed");
}

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  checkPassword(username.value, password.value);
});
