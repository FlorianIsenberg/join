setURL("https://gruppe-07i.developerakademie.net/smallest_backend_ever");

async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem("users")) || [];
}

async function resetPassword() {
  let email = getEmailUrLParameter();
  let newPassword = document.getElementById("newPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  let user = users.find((u) => u.email === email);
  if (user.email === email) {
    if (newPassword === confirmPassword) {
      user.password = newPassword.value;
      await backend.setItem("users", JSON.stringify(users));
      console.log("Password reset successful!");
      //BESTÄTIGUNGSANIMATION
      setTimeout(function () {
        window.location.href = "../../index.html";
      }, 3000);
    } else {
      console.log("Passwords do not match");
      newPassword.value = "";
      confirmPassword.value = "";
    }
  }
}

function getEmailUrLParameter() {
  const queryString = Window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");
  return email;
}
