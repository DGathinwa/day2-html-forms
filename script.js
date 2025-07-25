// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("full-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const position = document.getElementById("position").value;

    // Validate full name
    if (name.length < 3) {
      alert("Full name must be at least 3 characters long.");
      return;
    }

    // Validate email format
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate position selection
    if (position === "") {
      alert("Please select a position to apply for.");
      return;
    }

    // If everything is okay
    alert("✅ Application submitted successfully!");

    // Optional: Reset form after success
    form.reset();
  });
});
