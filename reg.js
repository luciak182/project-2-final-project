const password = document.getElementById("password");
const passwordRepeat = document.getElementById("password-repeat");

// Input do "password", kontrola a obarveni poli
password.addEventListener("input", () => {
  if (password.value === passwordRepeat.value) {
    password.classList.add("green");
    password.classList.remove("red");
    passwordRepeat.classList.add("green");
    passwordRepeat.classList.remove("red");
  } else {
    password.classList.add("red");
    password.classList.remove("green");
    passwordRepeat.classList.add("red");
    passwordRepeat.classList.remove("green");
  }
});

// Input do "passwordRepeat", kontrola a obarveni poli
passwordRepeat.addEventListener("input", () => {
  if (password.value === passwordRepeat.value) {
    password.classList.add("green");
    password.classList.remove("red");
    passwordRepeat.classList.add("green");
    passwordRepeat.classList.remove("red");
  } else {
    password.classList.add("red");
    password.classList.remove("green");
    passwordRepeat.classList.add("red");
    passwordRepeat.classList.remove("green");
  }
});
