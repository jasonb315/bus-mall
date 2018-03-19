'use strict'

Product.allProduct = [];

function Product (filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicktime = 0
  Product.allProduct.push(this);
};

new Product('../img/bag.jpg', 'bag');
new Product('../img/banana.jpg','banana');
new Product('../img/bathroom.jpg','bathroom');
new Product('../img/boots.jpg','boots');
new Product('../img/breakfast.jpg','breakfast');
new Product('../img/bubblegum.jpg','bubblegum');
new Product('../img/chair.jpg','chair');
new Product('../img/cthulhu.jpg','cthulhu');
new Product('../img/dog-duck.jpg','dog-duck');
new Product('../img/dragon.jpg','dragon');
new Product('../img/pen.jpg','pen');
new Product('../img/pet-sweep.jpg','pet-sweep');
new Product('../img/scissors.jpg','scissors');
new Product('../img/shark.jpg','shark');
new Product('../img/sweep.jpg','sweep');
new Product('../img/tauntaun.jpg','tauntaun');
new Product('../img/unicorn.jpg','unicorn');
new Product('../img/usb.gif','usb');
new Product('../img/water-can.jpg','water-can');
new Product('../img/wine-glass.jpg','wine-glass');

var imgElement1 = document.getElementById('slot-one');
var imgElement2 = document.getElementById('slot-two');
var imgElement3 = document.getElementById('slot-three');

imgElement1.addEventListener('click', randProduct);
imgElement2.addEventListener('click', randProduct);
imgElement3.addEventListener('click', randProduct);

function randProduct (){
  var randomIndex1 = Math.floor(Math.random() * Goat.allGoats.length);

  imgElement1.src = Goat.allGoats[randomIndex].filepath;
  imgElement1.alt = Goat.allGoats[randomIndex].name;

  imgElement1.src = Goat.allGoats[randomIndex].filepath;
  imgElement1.alt = Goat.allGoats[randomIndex].name;

  imgElement1.src = Goat.allGoats[randomIndex].filepath;
  imgElement1.alt = Goat.allGoats[randomIndex].name;
}

function randOne() {
  var num1 = Math.floor(Math.random() * Product.allProduct.length);
  return (num1);
}

function randTwo() {
  var num2 = Math.floor(Math.random() * Product.allProduct.length);
  return (num2);
}

function randThree() {
  var num3 = Math.floor(Math.random() * Product.allProduct.length);
  return (num3);
}
