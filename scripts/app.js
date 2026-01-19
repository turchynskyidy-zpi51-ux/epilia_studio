const contact_us = document.querySelector("#contact");
const target = document.querySelector("html");
const background = document.querySelector("#form_background");
const form = document.querySelector("#contact_form");
contact_us.addEventListener("click",() => {
  form.style.display = "block";
  background.style.opacity = "0.5";
  background.style.zIndex = "2";
})
background.addEventListener("click", () => {
  form.style.display = "none";
  background.style.opacity = "0";
  background.style.zIndex = "-1";
})