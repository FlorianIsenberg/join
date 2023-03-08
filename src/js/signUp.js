let users = [];
setURL("https://gruppe-07i.developerakademie.net/smallest_backend_ever");

async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem("users")) || [];
}

async function addUser() {
  let name = document.getElementById("names").value;
  let email = document.getElementById("emails").value;
  let password = document.getElementById("passwords").value;

  users.push({ name: name, email: email, password: password });
  await backend.setItem("users", JSON.stringify(users));
  window.location.href =
    "../../index.html?msg=Du hast dich erfolgreich registriert!";
}
