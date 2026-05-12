const toggleButton = document.getElementById("themeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark"){
        body.setAttribute("data-theme", "light");
        toggleButton.textContent = "Dark Mode";
    } else{
        body.setAttribute("data-theme", "dark");
        toggleButton.textContent = "Light Mode";
    }
});