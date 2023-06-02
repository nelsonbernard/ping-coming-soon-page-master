const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const subscribeBtn = document.getElementById("btn-subscribe");

subscribeBtn.addEventListener("click", function (e) {
  var regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  e.preventDefault();

  if (!regex.test(emailInput.value)) {
    emailInput.classList.add("red-outline");
    errorMessage.style.display = "block";
  } else {
    emailInput.classList.remove("red-outline");
    errorMessage.style.display = "none";
  }
});
