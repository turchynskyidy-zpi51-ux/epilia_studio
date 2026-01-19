const contact_us = document.querySelector("#contact");
const target = document.querySelector("html") 
contact_us.addEventListener("click",() => {
    fetch("./content/forms/contact_us.html")
    .then(r => r.text())
    .then(html => {
      target.insertAdjacentHTML("beforeend", html);
    })
    .catch(console.error);
})