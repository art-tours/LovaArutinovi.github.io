/*categories*/
const categories = [{
    name: "უძრავი ქონება",
    id: 1
  },
  {
    name: "ბიზნესი",
    id: 2
  },
  {
    name: "მედია",
    id: 3
  }
]
/*Domains*/
const domainList = [{
    domainName: "example1",
    domainExtension: ".ge",
    price: 2992,
    categories: [1, 2]
  },
  {
    domainName: "example2",
    domainExtension: ".com.ge",
    price: 2992,
    categories: [2, 3]
  },
  {
    domainName: "example3",
    domainExtension: ".edu.ge",
    price: 299,
    categories: [2]
  },
  {
    domainName: "example4",
    domainExtension: ".ge",
    price: 2992,
    categories: [3]
  },
  {
    domainName: "example5",
    domainExtension: ".org.ge",
    price: 299,
    categories: [1, 3]
  }
]



/* filter by Price */

priceToFilter = [];


function checkFilterByPrice() {
  let priceMin = document.querySelector('.goods__filter-price-input--1').value;
  let priceMax = document.querySelector('.goods__filter-price-input--2').value;
  priceToFilter[0] = priceMin;
  priceToFilter[1] = priceMax;
  console.log(priceToFilter)
}

function filterByPrice() {
  let priceMin = document.querySelector('.goods__filter-price-input--1').value;
  let priceMax = document.querySelector('.goods__filter-price-input--2').value;
  priceToFilter[0] = priceMin;
  priceToFilter[1] = priceMax;
  console.log(priceToFilter)
}

/* filter by symbol */

symbolToFilter = [];

function checkFilterBySymbol() {
  let symbolMin = document.querySelector('.goods__filter-symbol-input--1').value;
  let symbolMax = document.querySelector('.goods__filter-symbol-input--2').value;
  symbolToFilter[0] = symbolMin;
  symbolToFilter[1] = symbolMax;
  console.log(symbolToFilter)
}

function filterBySymbol() {
  let symbolMin = document.querySelector('.goods__filter-symbol-input--1').value;
  let symbolMax = document.querySelector('.goods__filter-symbol-input--2').value;
  symbolToFilter[0] = symbolMin;
  symbolToFilter[1] = symbolMax;
  console.log(symbolToFilter)
}

/* filter by Category */

categoriesToFilter = [];

function checkFilterByCategory() {
  categoryName = document.querySelectorAll('.goods__filter-categories-item-input');
  for (i = 0; i < categoryName.length; i++) {
    if (categoryName[i].checked) {
      categoriesToFilter.push(categoryName[i].value);
    } else {
      for (var k = categoriesToFilter.length - 1; k >= 0; k--) {
        if (categoriesToFilter[k] === categoryName[i].value) {
          categoriesToFilter.splice(k, 1);
        }
      }
    }
  }
  console.log(categoriesToFilter)
}

function filterByCategory() {

  categoryName = this.value;

  if (this.checked) {
    categoriesToFilter.push(categoryName);
  } else {
    for (var i = categoriesToFilter.length - 1; i >= 0; i--) {
      if (categoriesToFilter[i] === categoryName) {
        categoriesToFilter.splice(i, 1);
      }
    }
  }
}

/* filter by Area */

areasToFilter = [];

function checkFilterByArea() {
  areaName = document.querySelectorAll('.goods__filter-areas-item-input');

  for (i = 0; i < areaName.length; i++) {
    if (areaName[i].checked) {
      areasToFilter.push(areaName[i].value);
    } else {
      for (var k = areasToFilter.length - 1; k >= 0; k--) {
        if (areasToFilter[k] === areaName[i].value) {
          areasToFilter.splice(k, 1);
        }
      }
    }
  }

  console.log(areasToFilter)
}

function filterByArea() {

  areaName = this.value;
  if (this.checked) {
    areasToFilter.push(areaName);
  } else {
    for (var i = areasToFilter.length - 1; i >= 0; i--) {
      if (areasToFilter[i] === areaName) {
        areasToFilter.splice(i, 1);
      }
    }

  }
}

/* cart */

let cart = [];

function addToCart() {
  $(this).addClass('active');
  let domainName = this.dataset.address;
  if (cart.includes(domainName)) {
    return false;
  } else {
    cart.push(domainName);
  }
  console.log(cart);
  countCartItems()
}

function countCartItems() {
  $('.header__cart-input').val(cart.length);
}