const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const mainBody = document.getElementsById('main-body')
// let products = [{id: "product1", name: "product1", price: 3000}]
let cart = []
let wishlist = []

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  let existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
      existingProduct.quantity += 1;
  } else {
      cart.push({ id: productId, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

function changeMode() {
  document.body.classList.toggle("dark-mode");

  // Save preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
  } else {
      localStorage.setItem("theme", "light");
  }
}

// Function to apply saved theme on page load
function checkTheme() {
  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
  }
}

// Product Data
const products = [
  { id: 1, name: "Laptop", category: "electronics" , price: 40000},
  { id: 2, name: "Smartphone", category: "electronics" },
  { id: 3, name: "T-Shirt", category: "clothing" },
  { id: 4, name: "Jeans", category: "clothing" }
];

// Function to display products
function displayProducts(filteredProducts) {
  const container = document.getElementById("productContainer");
  container.innerHTML = ""; 

  filteredProducts.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `<h3>${product.name}</h3><p>Category: ${product.category}</p>`;
      container.appendChild(productDiv);
  });
}

displayProducts(products);

document.getElementById("categoryFilter").addEventListener("change", function() {
  const selectedCategory = this.value;
  const filteredProducts = selectedCategory === "all" 
      ? products 
      : products.filter(product => product.category === selectedCategory);

  displayProducts(filteredProducts);
});
