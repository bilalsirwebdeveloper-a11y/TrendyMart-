let products = [
  {id:1, name:"Men Shirt", price:2000, image:"https://via.placeholder.com/200"},
  {id:2, name:"Women Dress", price:3500, image:"https://via.placeholder.com/200"},
  {id:3, name:"Lipstick", price:800, image:"https://via.placeholder.com/200"}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(){
  let productList = document.getElementById("product-list");
  if(!productList) return;

  productList.innerHTML = "";
  products.forEach(product=>{
    productList.innerHTML += `
      <div class="product-card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>Rs ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id){
  let product = products.find(p=>p.id===id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Product Added to Cart");
}

function updateCartCount(){
  let count = document.getElementById("cart-count");
  if(count) count.innerText = cart.length;
}

displayProducts();
updateCartCount();