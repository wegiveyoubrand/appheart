let closeModalToggles = document.querySelectorAll(".closeModalToggle");

const closeModal = () => {
  let modalContainer = document.querySelector(".modal");
  let body = document.querySelector("body");
  setTimeout(() => {
    modalContainer.classList.remove("active");
    body.classList.remove("fixed");
  }, 2000);
};
closeModalToggles.forEach((closeModalToggle) => {
  closeModalToggle.addEventListener("click", closeModal);
});
