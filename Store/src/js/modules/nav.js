const nav = document.querySelector("nav");

document.querySelector(".nav-close").addEventListener("click", (e) => {
  e.preventDefault;
  console.log("sd");
  nav.classList.remove("active");
});

document.querySelector(".nav-open").addEventListener("click", (e) => {
  e.preventDefault;
  console.log("sd");
  nav.classList.add("active");
});
