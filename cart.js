let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItemsDiv = document.getElementById("cart-items");
let totalPrice = 0;

function displayCart(){
  cartItemsDiv.innerHTML = "";
  totalPrice = 0;

  cart.forEach((item, index)=>{
    totalPrice += item.price;
    cartItemsDiv.innerHTML += `
      <div class="product-card">
        <h3>${item.name}</h3>
        <p>Rs ${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total-price").innerText = totalPrice;
}

function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();