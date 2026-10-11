
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-label",
    navLinks.classList.contains("open")
      ? "Close navigation menu"
      : "Open navigation menu"
  );
});

// Close the menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Display the current year in the footer
document.getElementById("year").textContent =
  new Date().getFullYear();
