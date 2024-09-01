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
document.querySelectorAll(".show-login").forEach(function (button) {
  button.addEventListener("click", function () {
    const role = button.getAttribute("data-role"); // Get the role from data attribute
    console.log("Login role selected:", role);

    // Set the role value in the hidden input field
    document.getElementById("role").value = role;

    // Show the popup form
    document.querySelector(".popup").classList.add("active");
  });
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });
