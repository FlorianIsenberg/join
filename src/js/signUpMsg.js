const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get("msg");
if (msg) {
  msgBox.innerHTML = msg;
} else {
  `
      display:none;
    `;
}
