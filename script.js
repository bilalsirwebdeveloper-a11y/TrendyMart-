let products=[
{name:"Men Shirt",price:2500,type:"men",image:"https://via.placeholder.com/300"},
{name:"Women Dress",price:4000,type:"women",image:"https://via.placeholder.com/300"},
{name:"Cosmetic Set",price:1800,type:"cosmetic",image:"https://via.placeholder.com/300"}
];

let cart=[];

function showProducts(list){

let container=document.getElementById("products");
if(!container) return;

container.innerHTML="";

list.forEach(p=>{
container.innerHTML+=`
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>Rs ${p.price}</p>
<button onclick="addCart('${p.name}',${p.price})">
Add To Cart
</button>
</div>
`;
});
}

function addCart(name,price){
cart.push({name,price});
alert("Added to Cart");
}

/* Search System */

document.getElementById("search").addEventListener("input",function(){

let value=this.value.toLowerCase();

let filtered=products.filter(p=>
p.name.toLowerCase().includes(value)
);

showProducts(filtered);

});

/* Category Filter */

function filterProduct(type){

let filtered=products.filter(p=>p.type===type);
showProducts(filtered);

}

showProducts(products);