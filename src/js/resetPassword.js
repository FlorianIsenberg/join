setURL("https://gruppe-07i.developerakademie.net/smallest_backend_ever");

async function init() {
  await downloadFromServer();
  users = JSON.parse(backend.getItem("users")) || [];
}

async function resetPassword() {
  let newPassword = document.getElementById("newPassword");
  let confirmPassword = document.getElementById("confirmPassword");
  let email = getEmailUrLParameter();

  let user = users.find((u) => u.email === email);
  if (user.email === email) {
    if (newPassword.value === confirmPassword.value) {
      user.password = newPassword.value;
      await backend.setItem("users", JSON.stringify(users));
      resetYourPassword();
      //BESTÄTIGUNGSANIMATION
      setTimeout(function () {
        window.location.href = "../../index.html";
      }, 3000);
    } else {
      PasswordNotMatch();
      newPassword.value = "";
      confirmPassword.value = "";
    }
  }
}

function getEmailUrLParameter() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get("email");
  return email;
}

function resetYourPassword() {
  let showMsgs = document.getElementById("showMsg");
  showMsgs.classList.add("btnEmailSend");
  passwordReset();

  setTimeout(function () {
    showMsgs.classList.remove("btnEmailSend");
  }, 4000);
}

function passwordReset() {
  let message = document.getElementById("showMsg");
  message.innerHTML = `
  You reset your password
  `;
}

function PasswordNotMatch() {
  let showMsg = document.getElementById("showMsg");
  showMsg.classList.add("btnEmailSend");
  passwordNo();

  setTimeout(function () {
    showMsg.classList.remove("btnEmailSend");
  }, 3000);
}

function passwordNo() {
  let massage = document.getElementById("sendMailMsg");
  massage.innerHTML = `
  your password not confirm
`;
}
