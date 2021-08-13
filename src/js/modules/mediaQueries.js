let nav = document.querySelector("nav"),
  navList = document.querySelector(".nav__list"),
  navToggle = document.querySelector(".nav__toggle"),
  navItems = document.querySelectorAll(".nav__item");

const arrays = [nav, navList, navToggle];

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navList.classList.toggle("active");
  navItems.forEach((navitem) => {
    navitem.classList.toggle("active");
  });
});

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

// On Windows Load
window.addEventListener("load", function () {
  if (window.innerWidth > 680) {
    activateLaptopView();
  } else {
    activateMobileView();
  }
});

// On Windows Resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 680) {
    activateLaptopView();
  } else {
    activateMobileView();
  }
});
