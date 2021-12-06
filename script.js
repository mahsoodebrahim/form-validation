const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");

username.addEventListener("focus", () => {
  username.parentElement.classList.remove("success", "error");
});

email.addEventListener("focus", () => {
  email.parentElement.classList.remove("success", "error");
});

password.addEventListener("focus", () => {
  password.parentElement.classList.remove("success", "error");
});

passwordCheck.addEventListener("focus", () => {
  passwordCheck.parentElement.classList.remove("success", "error");
});

username.addEventListener("blur", (e) => {
  if (username.validity.valid) {
    username.parentElement.classList.add("success");
  } else if (username.value.length > 0) {
    username.parentElement.classList.add("error");
  }
});

email.addEventListener("blur", (e) => {
  if (email.validity.valid) {
    email.parentElement.classList.add("success");
  } else if (email.value.length > 0) {
    email.parentElement.classList.add("error");
  }
});

password.addEventListener("blur", (e) => {
  if (password.validity.valid) {
    password.parentElement.classList.add("success");
  } else if (password.value.length > 0) {
    password.parentElement.classList.add("error");
  }
});

passwordCheck.addEventListener("blur", (e) => {
  if (password.validity.valid && passwordCheck.value == password.value) {
    passwordCheck.parentElement.classList.add("success");
  } else if (passwordCheck.value.length > 0) {
    passwordCheck.parentElement.classList.add("error");
  }
});
