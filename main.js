const checkbox = document.getElementById("dark-mode");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    // Save the theme preference in localStorage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    checkbox.checked = true;
}