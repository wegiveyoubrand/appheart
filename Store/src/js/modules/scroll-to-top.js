document.querySelector(".scroll-to-top").addEventListener("click", (e) => {
  e.preventDefault;
  document.body.scrollTop = "3" + "rem"; // For Safari
  document.documentElement.scrollTop = "3" + "rem"; // For Chrome, Firefox, IE and Opera
});
