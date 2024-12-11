let submitBtn = document.querySelector("button[type='submit']");

// Prevent default submission and show alert
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevents form submission
  alert("Thank you for your feedback!"); // Shows the alert
});
