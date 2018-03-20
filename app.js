'use strict'

Product.allProduct = []; //this array keeps the product objects
var voteCount = 0;
var productVotes = [];
var productNames = [];

function Product (filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicktime = 0
  this.views = 0;
  this.votes = 0;
  // this.counter = function () {

  // }
  Product.allProduct.push(this);
}; //product constructor

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg','banana');
new Product('img/bathroom.jpg','bathroom');
new Product('img/boots.jpg','boots');
new Product('img/breakfast.jpg','breakfast');
new Product('img/bubblegum.jpg','bubblegum');
new Product('img/chair.jpg','chair');
new Product('img/cthulhu.jpg','cthulhu');
new Product('img/dog-duck.jpg','dog-duck');
new Product('img/dragon.jpg','dragon');
new Product('img/pen.jpg','pen');
new Product('img/pet-sweep.jpg','pet-sweep');
new Product('img/scissors.jpg','scissors');
new Product('img/shark.jpg','shark');
new Product('img/sweep.jpg','sweep');
new Product('img/tauntaun.jpg','tauntaun');
new Product('img/unicorn.jpg','unicorn');
new Product('img/usb.gif','usb');
new Product('img/water-can.jpg','water-can');
new Product('img/wine-glass.jpg','wine-glass');



var voteResults = document.getElementById('voteResults'); //draws results

var imgElement1 = document.getElementById('slot-one');
var imgElement2 = document.getElementById('slot-two');
var imgElement3 = document.getElementById('slot-three');

imgElement1.addEventListener('click', registerVote);
imgElement2.addEventListener('click', registerVote);
imgElement3.addEventListener('click', registerVote);

function registerVote(){
  //happens just before new three are summoned
var currentTarget = event.target.currentSrc.slice(53);
console.log (currentTarget);

  voteCount++;
  if (voteCount <26) {
    
    for (var j = 0 ; j < Product.allProduct.length ; j++) {
      if(event.target.alt === Product.allProduct[j].name){
        Product.allProduct[j].votes++;
        console.log(Product.allProduct[j].votes);
      };
    };
    summonThree();

  } else if (voteCount === 26) {
    displayResults ();
    imgElement1.removeEventListener('click', registerVote);
    imgElement2.removeEventListener('click', registerVote);
    imgElement3.removeEventListener('click', registerVote);
    updateVotes();
    updateNames();
    renderChart();
  };
};

var pastSummon = []; //keeps track of previos set

function summonThree() {

  var indexter1 = 0 //keeps track of current renders for non repeat
  var indexter2 = 0
  var indexter3 = 0


  var num1 = Math.floor(Math.random() * Product.allProduct.length);
  indexter1 = num1;

  while (num1 === pastSummon[0] || indexter1 === pastSummon[1] || indexter1 === pastSummon[2]){
    var num1 = Math.floor(Math.random() * Product.allProduct.length);
    indexter1 = num1;
  };
  
  var num2 = Math.floor(Math.random() * Product.allProduct.length);
  indexter2 = num2;
  
  while (indexter2 === indexter1 || indexter2 === pastSummon[0] || indexter2 === pastSummon[1] || indexter2 === pastSummon[2]){
    var num2 = Math.floor(Math.random() * Product.allProduct.length);
    indexter2 = num2;
    };
    
    var num3 = Math.floor(Math.random() * Product.allProduct.length);
    indexter3 = num3;
    
    while (indexter3 === indexter1 || indexter3 === indexter2 || indexter3 === pastSummon[0] || indexter3 === pastSummon[1] || indexter3 === pastSummon[2]){
      var num3 = Math.floor(Math.random() * Product.allProduct.length);
      indexter3 = num3;
    };

  pastSummon[0]=num1;
  pastSummon[1]=num2;
  pastSummon[2]=num3;

  console.log('voteCount = ' + voteCount);
  // console.log(indexter1);
  // console.log(indexter2);
  // console.log(indexter3);
  console.log('previous three: ' + pastSummon);

  imgElement1.src = Product.allProduct[indexter1].filepath;
  imgElement1.alt = Product.allProduct[indexter1].name;
  Product.allProduct[indexter1].views++

  imgElement2.src = Product.allProduct[indexter2].filepath;
  imgElement2.alt = Product.allProduct[indexter2].name;
  Product.allProduct[indexter2].views++

  imgElement3.src = Product.allProduct[indexter3].filepath;
  imgElement3.alt = Product.allProduct[indexter3].name;
  Product.allProduct[indexter3].views++

};//end summonThree

function displayResults (){

  for(var i = 0; i < Product.allProduct.length; i++) {

  var liElement = document.createElement('li');

  liElement.textContent = Product.allProduct[i].votes + ' votes for the '+ Product.allProduct[i].name + '.'

  voteResults.appendChild(liElement);

  };//end for
};//end display Results

summonThree();



//////////////////////////////////////////////////////////////

function updateVotes() {
  for(var i in Product.allProduct) {

    productVotes.push(Product.allProduct[i].votes);
    console.log(productVotes);
  };
};

function updateNames() {
  for(var i in Product.allProduct) {

    productNames.push(Product.allProduct[i].name);
    console.log(productNames);
  };
};

function renderChart() {
  // access the canvas element from the DOM
  var ctx = document.getElementById('product-graph').getContext('2d');

  var arrayOfColors = ['green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', ];

  new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: productNames, // array of the names, populated above
      datasets: [{
        label: 'Votes Per Product',
        data: productVotes,
        backgroundColor: arrayOfColors,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}