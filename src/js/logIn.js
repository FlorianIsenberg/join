setURL("https://gruppe-07i.developerakademie.net/smallest_backend_ever");

async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem("users")) || [];
}

function logIn(event) {
  event.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let user = users.find(
    (u) => u.email == email.value && u.password == password.value
  );
  if (user) {
    window.location.href = "../templates/summary-complete.html";
    greet();
  } else {
    shakeInput();
  }
}

function guestLogIn() {
  window.location.href = "../templates/summary-complete.html";
}

function showSignUp() {
  let showMassage = document.getElementById("msgBox");
  setTimeout(function () {
    showMassage.classList.add("msgBox");
  }, 1005);
  setTimeout(function () {
    showMassage.classList.remove("msgBox");
  }, 5000);

  document.getElementById("msgBox").classList.add("msgBoxDnone");
}

function shakeInput() {
  let shakeMails = document.getElementById("shakeMail");
  let shakePasswords = document.getElementById("shakePassword");
  shakeMails.classList.add("shake");
  shakePasswords.classList.add("shake");
  setTimeout(function () {
    shakeMails.classList.remove("shake");
    shakePasswords.classList.remove("shake");
  }, 1000);
}
