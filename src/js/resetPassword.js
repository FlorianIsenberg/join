function onPageLoad() {
  email = getEmailUrLParameter();
  users = getUsers();
}

function getEmailUrLParameter() {
  const queryString = Window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");
  return email;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function onSubmit(event) {
  event.preventDefault();
}
