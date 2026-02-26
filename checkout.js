let paymentSelect = document.getElementById("payment-method");
let paymentInfo = document.getElementById("payment-info");

paymentSelect.addEventListener("change", function(){
  if(this.value === "Easypaisa"){
    paymentInfo.innerHTML = `
      <p><b>Send Payment to:</b></p>
      <p>Easypaisa Number: 03XXXXXXXXX</p>
    `;
  } 
  else if(this.value === "JazzCash"){
    paymentInfo.innerHTML = `
      <p><b>Send Payment to:</b></p>
      <p>JazzCash Number: 03XXXXXXXXX</p>
    `;
  } 
  else {
    paymentInfo.innerHTML = "";
  }
});

document.getElementById("checkout-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Order Placed Successfully! Admin will verify payment.");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});