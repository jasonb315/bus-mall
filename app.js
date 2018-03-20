'use strict'

Product.allProduct = []; //this array keeps the product objects
var voteCount = 0;
var productNames = [];//names for chart


function Product (filepath, name){
  this.filepath = filepath;
  this.name = name;
  this.clicktime = 0;
  this.views = 0;
  this.votes = 0;

  Product.allProduct.push(this);
  productNames.push(this.name);
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

// for(i of Product.allProduct){
//   Product.allProduct.push(Product.allProduct[i].name);
// }

var voteResults = document.getElementById('voteResults');

var imgElement1 = document.getElementById('slot-one');
var imgElement2 = document.getElementById('slot-two');
var imgElement3 = document.getElementById('slot-three');

// imgElement1.addEventListener('click', registerVote);
// imgElement2.addEventListener('click', registerVote);
// imgElement3.addEventListener('click', registerVote);

var submitVote = document.getElementById('submit-vote');
submitVote.addEventListener('click', countRadio);

function countRadio (){
  if(document.getElementById('contactChoice1').checked){
console.log('magic1');
registerVoteA();
  };

  if(document.getElementById('contactChoice2').checked){
console.log('magic2');
registerVoteB();
  };

  if(document.getElementById('contactChoice3').checked){
console.log('magic3');
registerVoteC();
  };
};//end countRadio

function registerVoteA(){
//vote count for [loop through product array until img alt equals display img of (slot-one)] add votes to that object in array.
//reset radio button

};

function registerVoteB(){
//vote count for [loop through product array until img alt equals display img of (slot-two)] add votes to that object in array.
//reset radio button

};

function registerVoteC(){
//vote count for [loop through product array until img alt equals display img of (slot-three)] add votes to that object in array.
//reset radio button

};

///////////////////MASSIVE REWORK

function registerVote(){//happens just before new three are summoned

var currentTarget = event.target.currentSrc.slice(53);
// console.log ('img clicked = ' + currentTarget);

  voteCount++;
  if (voteCount <26) {
    for (var j = 0 ; j < Product.allProduct.length ; j++) {
      if (Product.allProduct[j].filepath === currentTarget){
        Product.allProduct[j].votes++;
        // console.log('Times img clicked was previously clicked: ' + Product.allProduct[j].votes);
      };
    };
    summonThree();

  } else if (voteCount === 26) {
    displayResults ();
    renderChart(); /////////////////////////////////////////////////////////////////////////////////////////MAKE
    //elementName.removeEventListener('same' sameSame); //remove vote button functionality.
  };
};

var pastSummon = []; //keeps track of previos set

function summonThree() {

  var indexter1 = 0 //keeps track of current renders for non repeat
  var indexter2 = 0
  var indexter3 = 0

  var num1 = Math.floor(Math.random() * Product.allProduct.length);
  indexter1 = num1;

  while (indexter1 === pastSummon[0] 
    || indexter1 === pastSummon[1] 
    || indexter1 === pastSummon[2]) 
    {
    var num1 = Math.floor(Math.random() * Product.allProduct.length);
    indexter1 = num1;
    console.log('[indexter1 redrawn]')
  };
  
  var num2 = Math.floor(Math.random() * Product.allProduct.length);
  indexter2 = num2;
  
  while (indexter2 === indexter1 
    || indexter2 === pastSummon[0] 
    || indexter2 === pastSummon[1] 
    || indexter2 === pastSummon[2])
    {
    var num2 = Math.floor(Math.random() * Product.allProduct.length);
    indexter2 = num2;
    console.log('[indexter2 redrawn]')
    };
    
    var num3 = Math.floor(Math.random() * Product.allProduct.length);
    indexter3 = num3;
    
    while (indexter3 === indexter1 
      || indexter3 === indexter2 
      || indexter3 === pastSummon[0] 
      || indexter3 === pastSummon[1] 
      || indexter3 === pastSummon[2])
      {
      var num3 = Math.floor(Math.random() * Product.allProduct.length);
      indexter3 = num3;
      console.log('[indexter3 redrawn]')
    };

    pastSummon[0]=num1;
    pastSummon[1]=num2;
    pastSummon[2]=num3;

    console.log('Current voteCount = ' + voteCount);
    // console.log('left pic index: ' + indexter1);
    // console.log('middle pic index: ' + indexter2);
    // console.log('right pic index: ' + indexter3);
    // console.log('^v^v^v^v^v^v^v^v^v^v^v^v^');
    console.log('Summoned: ' + pastSummon);
    
  imgElement1.src = Product.allProduct[indexter1].filepath;
  imgElement1.alt = Product.allProduct[indexter1].name;
  Product.allProduct[indexter1].views++

  imgElement2.src = Product.allProduct[indexter2].filepath;
  imgElement2.alt = Product.allProduct[indexter2].name;
  Product.allProduct[indexter2].views++

  imgElement3.src = Product.allProduct[indexter3].filepath;
  imgElement3.alt = Product.allProduct[indexter3].name;
  Product.allProduct[indexter3].views++

};

function displayResults (){
  for(var i = 0; i < Product.allProduct.length; i++) {
  var liElement = document.createElement('li');
  liElement.textContent = Product.allProduct[i].votes + ' votes for the '+ Product.allProduct[i].name + '.'
  // liElement.textContent = Product.allProduct[i].name + ' has ' + Product.allProduct[i].votes + ' votes out of ' + Product.allProduct[i].views + ' views.';
  voteResults.appendChild(liElement);
  }

}

function renderChart(){
  var context = document.getElementById('product-chart').msGetInputContext('2d');
      var productChart = new Chart(context, {
        type: 'bar',
        data: {
          labels: [productNames] //array of goatnames populated above
          datasets: [{        
              label: 'Votes Per Goat'
              data: goatVotes
              backgroundColor: arrayOfColors.
            }]
        }
      })
}


summonThree();

