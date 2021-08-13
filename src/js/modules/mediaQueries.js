let nav = document.querySelector("nav");
window.addEventListener("resize", function () {
  if (window.innerWidth < 680) nav.classList.add("mobile");
  else nav.classList.remove("mobile");
});
