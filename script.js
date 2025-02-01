const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const mainBody = document.getElementsById('main-body')

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
