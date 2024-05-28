const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", clickHamburger);
const navigation = document.querySelector("#navigation");
function clickHamburger() {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    navigation.classList.remove("open");
  } else {
    hamburger.classList.add("open");
    navigation.classList.add("open");
  }
}
