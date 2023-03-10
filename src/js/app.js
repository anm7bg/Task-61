import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let price = document.getElementsByClassName("price")
  for (let i = 0; i < price.length; i++) {
    if(price[i].classList.contains("hot")) {
      let hotPrice = price[i].textContent;
      price[i].textContent = hotPrice + " 🔥"
      console.log()
    }
  }
});
