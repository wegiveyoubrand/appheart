const products = [];

const productCategories = [
  {
    name: "phones",
  },
  {
    name: "laptops",
  },
  {
    name: "phone accessories",
  },
  {
    name: "Laptop accessories",
  },
  {
    name: "Books and Stationeries",
  },
  {
    name: "Electronics",
  },
];

const phones = [
  {
    name: "Iphone 12 Pro Max",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "Tecno Pop 4",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "Tecno Spark 7",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "Oppo A15",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "iTEL S15",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "Tecno Pop 2F",
    price: "204,000",
    image: "iphone-12.jpg",
  },
  {
    name: "Tecno Camon 17",
    price: "204,000",
    image: "iphone-12.jpg",
  },
];

const books = [
  {
    name: "10 in 1",
    price: "900",
    image: "10-in-1.jpg",
  },
  {
    name: "80 Leaves",
    price: "900",
    image: "10-in-1.jpg",
  },
  {
    name: "60 Leaves",
    price: "900",
    image: "10-in-1.jpg",
  },
  {
    name: "40 Leaves",
    price: "900",
    image: "10-in-1.jpg",
  },
  {
    name: "2A",
    price: "900",
    image: "10-in-1.jpg",
  },
];

const image_root = "./assets/images/products";
const phones_root = `${image_root}/phones`;
const books_root = `${image_root}/office`;
// const iphones_image_root = `${image_root}/iphones/`;

// Getting HTML Elements
const productCategoriesContainer = document.querySelector(
    ".product-categories"
  ),
  phonesContainer = document.querySelector(".phones"),
  laptopContainer = document.querySelector(".laptops"),
  booksContainer = document.querySelector(".books");

// Products Contents
const productCategoriesContent = `${productCategories
  .map((productCategory) => {
    return `
      <div class ="product-category card">
        <p>${productCategory.name}</p>
      </div>`;
  })
  .join("")}`;

const phonesContainerContent = `${phones
  .map((phone) => {
    return `
      <div class="product card data-rel="phone"">
        <div class="over-lay">
          <button>View details</button></div>
        <div class="product__image">
          <img src="${phones_root}/${phone.image}" alt="">
        </div>
        <div class="product-name">
            ${phone.name}
        </div>
    </div>`;
  })
  .join("")}`;

const booksContainerContent = `${books
  .map((book) => {
    return `
      <div class="product card">
        <div class="over-lay">
          <button>View details</button></div>
        <div class="product__image">
          <img src="${books_root}/${book.image}" alt="">
        </div>
        <div class="product-name">
            ${book.name}
        </div>
    </div>`;
  })
  .join("")}`;

// Exporting to HTML
productCategoriesContainer.innerHTML = productCategoriesContent;
phonesContainer.innerHTML = phonesContainerContent;
booksContainer.innerHTML = booksContainerContent;

// Modal Functionalities
const modalContainer = document.querySelector(".product-modal");
const openModal = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");

const body = document.querySelector("#store");

const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", (e) => {
  e.preventDefault;
  modalContainer.classList.remove("on");
  body.classList.remove("fixed");
});

function ModalFunctionOn() {
  modalContainer.classList.add("on");
  body.classList.add("fixed");
}

openModal.forEach((open) => {});
// Getting Information of Selected Product
// This Loades after page have loaded all files

document.addEventListener("DOMContentLoaded", function () {
  const allProducts = document.querySelectorAll(".product");
  allProducts.forEach((product) => {
    product.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault;
      ModalFunctionOn();
      modal.innerHTML = `${product.innerHTML}`;
      console.log(product);
    });
  });
});
