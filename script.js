const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("password-check");

const formElements = [username, email, password, passwordCheck];

formElements.forEach((formElement) => {
  formElement.addEventListener("focus", () => {
    formElement.parentElement.classList.remove("success", "error");
  });

  formElement.addEventListener("blur", (event) => {
    if (formElement.id === "password-check") {
      if (password.validity.valid && passwordCheck.value == password.value) {
        passwordCheck.parentElement.classList.add("success");
      } else if (formElement.value.length > 0) {
        formElement.parentElement.classList.add("error");
      }
    } else {
      if (formElement.validity.valid) {
        formElement.parentElement.classList.add("success");
      } else if (formElement.value.length > 0) {
        formElement.parentElement.classList.add("error");
        event.preventDefault;
      }
    }
  });
});

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    console.log("here");
    event.preventDefault();
    formElements.forEach((formElement) => {
      formElement.parentElement.classList.add("error");
    });
  }
});
