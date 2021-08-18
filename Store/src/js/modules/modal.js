const modalContainer = document.querySelector(".product-modal");
const openModal = document.querySelectorAll(".open-modal");

const body = document.querySelectorAll("#store");

openModal.forEach((open) => {
  modalContainer.classList.add("on");
});

// // Elements connected to MODAL
// const elements = [body, openModal];

// // Enable Modal Functionalities
// function ModalSetup(ele) {
//   elements.ModalSetup();
// }

