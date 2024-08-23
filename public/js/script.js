const loginLink = document.getElementById("login-link");
const loginSection = document.getElementById("login");

// Add an event listener to the login link
loginLink.addEventListener("click", function () {
  if (loginSection.style.display === "flex") {
    loginSection.style.display = "none";
  } else {
    loginSection.style.display = "flex";
  }
});
