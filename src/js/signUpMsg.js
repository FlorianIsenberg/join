const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get("msg");
if (msg) {
  msgBox.innerHTML = msg;
  showSignUp();
} else {
  `msgBoxDnone
    `;
}
