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
document.querySelectorAll(".show-login").forEach(function (button, index) {
  button.addEventListener("click", function () {
    console.log("Button clicked:", index); // This will help identify if the button click is being registered
    document.querySelector(".popup").classList.add("active");
  });
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });
