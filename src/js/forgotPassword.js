async function sendMail(event) {
  event.preventDefault();
  let formData = new FormData(event, traget);
  let response = await action(formData);
  if (response.ok) {
    alert("Email was send!");
  }
}

async function sendMail(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  let response = await action(formData);
  if (response.ok) alert("Email was send!");
  else alert("Email not send!");
}

function action(formData) {
  const input =
    "https://gruppe-07i.developerakademie.net/join/src/sendMail/send_mail.php";
  const resquestInit = {
    method: "post",
    body: formData,
  };

  return fetch(input, resquestInit);
}
