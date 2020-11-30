// Dark Mode button
const ThemeButton = document.querySelector(".theme-changer");

ThemeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
