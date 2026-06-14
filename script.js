const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const themeButton = document.getElementById("themeButton");
const projectToggles = document.querySelectorAll(".project-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

updateThemeButtonText();

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}

if (themeButton) {
  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }

    updateThemeButtonText();
  });
}

if (projectToggles.length > 0) {
  projectToggles.forEach(function (toggleButton) {
    toggleButton.addEventListener("click", function () {
      const projectItem = toggleButton.closest(".project-item");
      if (!projectItem) return;

      const projectDetails = projectItem.querySelector(".project-details");
      if (!projectDetails) return;

      const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

      toggleButton.setAttribute("aria-expanded", String(!isExpanded));
      toggleButton.textContent = isExpanded ? "Expand project" : "Collapse project";
      projectDetails.hidden = isExpanded;
    });
  });
}

function updateThemeButtonText() {
  if (!themeButton) return;

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light";
  } else {
    themeButton.textContent = "Dark";
  }
}
