async function sendMail(event) {
  // event.preventDefault();
  let formData = new FormData(event.target);
  let response = await action(formData);
  if (response.ok) {
    mailSend();
  } else {
    alert("E-Mail has not been send!");
  }
}

function action(formData) {
  const input =
    "https://gruppe-07i.developerakademie.net/join/src/sendMail/send_mail.php";
  const requestInit = {
    method: "post",
    body: formData,
  };

  return fetch(input, requestInit);
}

function mailSend() {
  let showMsg = document.getElementById("sendMailMsg");
  document.getElementById("sendMailMsg").classList.remove("dNone");
  setTimeout(function mailSendTo() {
    showMsg.classList.add("btnEmailSend");
  }, 1005);
  setTimeout(function () {
    showMsg.classList.remove("btnEmailSend");
  }, 5000);
}

function mailSendTo() {
  let massage = document.getElementById("sendMailMsg");
  massage.innerHTML += `
  <img src="/src/img/icon-mail-flight.svg" alt="" />
  An E-Mail has been sent to you 
  `;
}

// function mailNotSend() {  {
//     let showMsg = document.getElementById("send");
//     setTimeout(function () {
//       showMsg.classList.add("btnEmailSend");
//     }, 1005);
//     setTimeout(function () {
//       showMsg.classList.remove("btnEmailSend");
//     }, 5000);
//   }
// }
