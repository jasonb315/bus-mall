'use strict'

Product.allProduct = []; //this array keeps the product objects

function Product (filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicktime = 0
  Product.allProduct.push(this);
}; //product constructor

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

imgElement1.addEventListener('click', summonThree);
imgElement2.addEventListener('click', summonThree);
imgElement3.addEventListener('click', summonThree);


var pastSummon = [];

function summonThree() {

  var indexter1 = 0
  var indexter2 = 0
  var indexter3 = 0


  var num1 = Math.floor(Math.random() * Product.allProduct.length);
  indexter1 = num1;

  while (num1 === pastSummon[0] || num1 === pastSummon[1] || num1 === pastSummon[2]){
    var num1 = Math.floor(Math.random() * Product.allProduct.length);
    indexter1 = num1;
  };
  pastSummon[0]=indexter1;

  var num2 = Math.floor(Math.random() * Product.allProduct.length);
  indexter2 = num2;

    while (indexter2 === indexter1 || num2 === pastSummon[0] || num2 === pastSummon[1] || num2 === pastSummon[2]){
      var num2 = Math.floor(Math.random() * Product.allProduct.length);
      indexter2 = num2;
    };
    pastSummon[1]=indexter2

  var num3 = Math.floor(Math.random() * Product.allProduct.length);
  indexter3 = num3;
  
    while (indexter3 === indexter1 || indexter3 === indexter2 || num3 === pastSummon[0] || num3 === pastSummon[1] || num3 === pastSummon[2]){
      var num3 = Math.floor(Math.random() * Product.allProduct.length);
      indexter3 = num3;
    };
    pastSummon[2]=indexter3

  console.log(indexter1);
  console.log(indexter2);
  console.log(indexter3);

  imgElement1.src = Product.allProduct[indexter1].filepath;
  imgElement1.alt = Product.allProduct[indexter1].name;

  imgElement2.src = Product.allProduct[indexter2].filepath;
  imgElement2.alt = Product.allProduct[indexter2].name;

  imgElement3.src = Product.allProduct[indexter3].filepath;
  imgElement3.alt = Product.allProduct[indexter3].name;

};

summonThree();