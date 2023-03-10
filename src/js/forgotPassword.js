async function sendMail(event) {
  // event.preventDefault();
  let formData = new FormData(event.target);
  let response = await action(formData);
  if (response.ok) {
    alert("E-Mail has been send!");
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
