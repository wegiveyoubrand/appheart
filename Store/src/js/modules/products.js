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
    name: "Infonix Smart 5",
    price: "48,000",
    image: "iphone-12.jpg",
    desc: "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. ",
  },
  {
    name: "Iphone 12 Pro Max",
    price: "615,000",
    image: "iphone-12.jpg",
    desc: "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. ",
  },
  {
    name: "Infinix Hot 10",
    price: "47,000",
    image: "iphone-12.jpg",
    desc: "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. ",
  },
  {
    name: "Infinix Hot 10i",
    price: "52,000",
    image: "iphone-12.jpg",
    desc: "The iPhone 12 features a 6.1-inch (15 cm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 ppi. ",
  },
  {
    name: "Tecno Pop 4",
    price: "204,000",
    image: "iphone-12.jpg",
    desc: "It's a 2GB RAM phone running on Android 10 Go Edition, optimized to help the phone operate smoothly.Comes with a massive 5000mAh battery and it looks more compact. ",
  },
  {
    name: "iTel P36",
    price: "37,500",
    image: "iphone-12.jpg",
    desc: "It's a 2GB RAM phone running on Android 10 Go Edition, optimized to help the phone operate smoothly.Comes with a massive 5000mAh battery and it looks more compact. ",
  },
  {
    name: "iTel P37",
    price: "40,500",
    image: "iphone-12.jpg",
    desc: "It's a 2GB RAM phone running on Android 10 Go Edition, optimized to help the phone operate smoothly.Comes with a massive 5000mAh battery and it looks more compact. ",
  },

  {
    name: "Tecno Spark 7",
    price: "49,500",
    image: "iphone-12.jpg",
    desc: "The latest Tecno Spark 7 has been designed for excellent battery life & smooth functioning.",
  },
  {
    name: "Oppo A15",
    price: "204,000",
    image: "iphone-12.jpg",
    desc: "The phone comes with a 6.52-inch display with a resolution of 720x1600 pixels and an aspect ratio of 20:9. Oppo A15 is powered by an octa-core MediaTek Helio P35 (MT6765) processor.",
  },
  {
    name: "iTel S16",
    price: "26,000",
    image: "iphone-12.jpg",
    desc: "It's a 2GB RAM phone running on Android 10 Go Edition, optimized to help the phone operate smoothly.Comes with a massive 5000mAh battery and it looks more compact. ",
  },
  {
    name: "Tecno Pop 2F",
    price: "39,000",
    image: "iphone-12.jpg",
    desc: "TECNO Pop 2 F is powered by the Mediatek MT6580M Quad-core 1.3 GHz Cortex-A7 processor. The smartphone comes with a 5.45 inches IPS LCD capacitive touchscreen and 480 x 960 pixels resolution.",
  },
  {
    name: "Tecno Camon 17",
    price: "74,000",
    image: "iphone-12.jpg",
    desc: "The Tecno Camon 17 runs HiOS 7.6 is based on Android 11 and packs 128GB of inbuilt storage. The Tecno Camon 17 measures 164.50 x 76.50 x 8.95mm (height x width x thickness) ",
  },
  {
    name: "iTEL S15",
    price: "204,000",
    image: "iphone-12.jpg",
    desc: "The iTel S15 is powered by a 1.3GHz Quad-core Spreadtrum SC7731E along with ARM Mali T820 MP1, 1/2GB of RAM and a 16/32GB internal storage, expandable up to 64 GB via microSD card.",
  },
  {
    name: "Tecno Pop 3",
    price: "30,500",
    image: "iphone-12.jpg",
    desc: "The iTel S15 is powered by a 1.3GHz Quad-core Spreadtrum SC7731E along with ARM Mali T820 MP1, 1/2GB of RAM and a 16/32GB internal storage, expandable up to 64 GB via microSD card.",
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
      <div class ="product-category card" data-filter= '${productCategory.name}'>
        <p>${productCategory.name}</p>
      </div>`;
  })
  .join("")}`;

const phonesContainerContent = `${phones
  .map((phone) => {
    return `
      <div class="product card data-item="phone"">
        <div class="over-lay">
          <button>View details</button></div>
        <div class="product__image">
          <img src="${phones_root}/${phone.image}" alt="">
        </div>
    <div class="product__info">
      <div class="product__name">
        ${phone.name}
      </div>
      <div class="product__desc">
        ${phone.desc}
      </div>
      <div class="product__price">
      &#8358;&nbsp;${phone.price}
      </div>
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
//
// productCategoriesContainer.innerHTML = productCategoriesContent;
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
