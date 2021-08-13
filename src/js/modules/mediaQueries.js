let nav = document.querySelector("nav"),
  navList = document.querySelector(".nav__list"),
  navToggle = document.querySelector(".nav__toggle");

const arrays = [navList, navToggle];

const activateMobileView = () => {
  arrays.forEach((array) => {
    array.classList.add("mobile");
  });
};

const activateLaptopView = () => {
  arrays.forEach((array) => {
    array.classList.remove("mobile");
  });
};

window.addEventListener("resize", function () {
  if (window.innerWidth > 680) {
    activateLaptopView();
  } else {
    activateMobileView();
  }
});
