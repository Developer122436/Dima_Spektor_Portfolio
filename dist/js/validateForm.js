// Select DOM Items
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const textArea = document.getElementById("text-area");

// Event listener - works when pressing the submit form button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checkRequired([name, email, subject, textArea]) && checkEmail(email)) {
    submitForm();
  }
});

// Submit form if all the validations are worked
function submitForm() {
  const h1 = document.querySelector(".row h1");
  h1.className = "success";
  setTimeout(function () {
    h1.className = "";
    form.submit();
  }, 3000);
}

// Check required fields
function checkRequired(inputArr) {
  let checkInput = true;

  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      input.className = "error";
      checkInput = false;
    } else {
      input.className = "success";
    }
  });

  return checkInput;
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    input.className = "success";
    return true;
  } else {
    input.className = "error";
    return false;
  }
}
