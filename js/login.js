document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;

  if (email === "rabby.webdeveloper@gmail.com" && password === "rabby2002") {
    window.location.href = "bank.html";
  } else {
    alert("Email and Password Don't Match");
  }
});
