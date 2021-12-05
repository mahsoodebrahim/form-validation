const username = document.getElementById("username");

username.addEventListener("focus", () => {
  username.parentElement.classList.remove("success", "error");
});

username.addEventListener("blur", (e) => {
  if (username.validity.valid) {
    username.parentElement.classList.add("success");
  } else if (username.value.length > 0) {
    username.parentElement.classList.add("error");
  }
});
