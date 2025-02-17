



document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar");

    if (!navbar) return; // Prevent errors if navbar is missing

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("bg-white ");

        } else {

            navbar.classList.remove("bg-white ");

        }
    });
});

// Dark Mode 

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        // Save theme preference
        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});

//------------------- fab button -------------------

window.addEventListener("scroll", function () {
    var whatsappButton = document.getElementById("whatsapp-button");
    if (window.scrollY > 100) {  // Show when scrolled 100px
        whatsappButton.classList.add("show");
    } else {
        whatsappButton.classList.remove("show");
    }
});