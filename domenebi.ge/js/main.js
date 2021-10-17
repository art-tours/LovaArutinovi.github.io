$('document').ready(function () {
  // loadGoods();
  loadCategories();
  loadGoods();


  function loadCategories() {
    //ვტვირთავთ მონაცემებს ფაილში
    var outCategories = '';
    for (i = 0; i < categories.length; i++) {
      outCategories += '<label class="goods__filter-categories-item goods__filter-label">';
      outCategories += '<input class="goods__filter-categories-item-input" type="checkbox" value="' + categories[i].id + '" data-id="' + categories[i].id + '">';
      outCategories += '<span class="goods__filter-label-checkmark"></span>';
      outCategories += '<span class="goods__filter-categories-item-text">' + categories[i].name + '</span>';
      outCategories += '</label>';
    }
    $('.goods__filter-categories-items').html(outCategories);
  }
  function loadGoods(){
    let outDomains = '';
    for (i = 0; i < domainList.length; i++) {
      outDomains += '<div class="goods__items-item-wrapper" data-price="' + domainList[i].price + '" data-categories="' + domainList[i].categories + '" data-domain-name="' + domainList[i].domainName + '" data-domain-extension="' + domainList[i].domainExtension + '" data-symbols="' + domainList[i].domainName + domainList[i].domainExtension + '">';
      outDomains += '<div class="goods__items-item">';

      outDomains += '<button class="goods__items-square"><svg width="10" height="6" viewBox="0 0 10 6"  fill="#696974" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.904L8.577 0.327C8.73334 0.170655 8.94539 0.0828209 9.1665 0.0828209C9.3876 0.0828209 9.59965 0.170655 9.756 0.327C9.91234 0.483345 10.0002 0.695394 10.0002 0.9165C10.0002 1.13761 9.91234 1.34965 9.756 1.506L5.589 5.672C5.51163 5.7495 5.41974 5.81097 5.31858 5.85292C5.21743 5.89487 5.109 5.91646 4.9995 5.91646C4.88999 5.91646 4.78156 5.89487 4.68041 5.85292C4.57925 5.81097 4.48736 5.7495 4.41 5.672L0.243996 1.506C0.0876507 1.34965 -0.000183108 1.13761 -0.000183105 0.9165C-0.000183103 0.695394 0.0876507 0.483345 0.243996 0.327C0.400341 0.170655 0.61239 0.0828209 0.833496 0.0828209C1.0546 0.0828209 1.26665 0.170655 1.423 0.327L5 3.904Z"/></svg></button>';

      outDomains += '<p class="goods__items-name">' + domainList[i].domainName + domainList[i].domainExtension + '</p>';

      outDomains += '<div class="goods__items-price">';
      outDomains += '<p class="goods__items-price-gel">' + domainList[i].price + '&#8382;</p>';
      outDomains += '<p class="goods__items-price-usa">' + domainList[i].price + '&#8382;</p>';
      outDomains += '</div>';

      outDomains += '<button class="goods__items-add" data-address="' + domainList[i].domainName + domainList[i].domainExtension + ' "><span class="goods__items-add-buy"><span class="goods__items-add-text">დამატება</span><img src="img/cart_white.svg" alt="cart"></span> <span class="goods__items-add-bought"><img src="img/bought.svg" alt="checked"><span class="goods__items-add-text">კალთაშია</span></span></button>';
      outDomains += '</div>';
      outDomains += '</div>';

    }
    $('.goods__items-wrapper').html(outDomains);
  }

  function priceShowHide() {

    let goods = document.querySelectorAll('.goods__items-item-wrapper');

    for (i = 0; i < goods.length; i++) {
      goodsPrice = goods[i].getAttribute('data-price');
      goodsSymbol = goods[i].getAttribute('data-symbols');
      goodsArea = goods[i].getAttribute('data-domain-extension');
      goodsCat = goods[i].getAttribute('data-categories');


      if (+goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.includes(goodsArea)) {
        goods[i].style.display = 'block';
      } else if (+goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.length == 0) {
        goods[i].style.display = 'block';
      } else {
        goods[i].style.display = 'none';
      }

    }

  }

  function symbolShowHide() {

    let goods = document.querySelectorAll('.goods__items-item-wrapper');

    for (i = 0; i < goods.length; i++) {
      goodsPrice = goods[i].getAttribute('data-price');
      goodsSymbol = goods[i].getAttribute('data-symbols');
      goodsArea = goods[i].getAttribute('data-domain-extension');

      if (+goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.includes(goodsArea)) {
        goods[i].style.display = 'block';
      } else if (+goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.length == 0) {
        goods[i].style.display = 'block';
      } else {
        goods[i].style.display = 'none';
      }
    }
  }

  function categoryShowHide() {

    let goods = document.querySelectorAll('.goods__items-item-wrapper');

    if (this.checked) {
      for (i = 0; i < goods.length; i++) {
        goods[i].style.display = 'none';
      }
      for (i = 0; i < goods.length; i++) {
        goodsPrice = goods[i].getAttribute('data-price');
        goodsSymbol = goods[i].getAttribute('data-symbols');
        goodsCat = goods[i].getAttribute('data-categories');
      goodsArea = goods[i].getAttribute('data-domain-extension');


        for (k = 0; k < goodsCat.length; k++) {
          if (categoriesToFilter.includes(goodsCat[k]) &&
            +goodsSymbol.length >= +symbolToFilter[0] &&
            +goodsSymbol.length <= +symbolToFilter[1] &&
            +goodsPrice >= +priceToFilter[0] &&
            +goodsPrice <= +priceToFilter[1] &&
            areasToFilter.includes(goodsArea)) {
            goods[i].style.display = 'block';
          } else if (categoriesToFilter.includes(goodsCat[k]) &&
          +goodsSymbol.length >= +symbolToFilter[0] &&
          +goodsSymbol.length <= +symbolToFilter[1] &&
          +goodsPrice >= +priceToFilter[0] &&
          +goodsPrice <= +priceToFilter[1] &&
          areasToFilter.length == 0) {
          goods[i].style.display = 'block';
        }else {
            continue
          }
        }
      }
    } else {
      for (i = 0; i < goods.length; i++) {
        goodsPrice = goods[i].getAttribute('data-price');
        goodsSymbol = goods[i].getAttribute('data-symbols');
        goodsCat = goods[i].getAttribute('data-categories');
      goodsArea = goods[i].getAttribute('data-domain-extension');


        for (k = 0; k < goodsCat.length; k++) {
          if (!categoriesToFilter.includes(goodsCat[k])) {
            goods[i].style.display = 'none';
          } else if (categoriesToFilter.includes(goodsCat[k]) &&
            +goodsSymbol.length >= +symbolToFilter[0] &&
            +goodsSymbol.length <= +symbolToFilter[1] &&
            +goodsPrice >= +priceToFilter[0] &&
            +goodsPrice <= +priceToFilter[1] &&
            areasToFilter.length == 0) {
            goods[i].style.display = 'block';
          } else {
            continue
          }
        }
      }
    }

    for (i = 0; i < goods.length; i++) {
      goodsCat = goods[i].getAttribute('data-categories');
      goodsPrice = goods[i].getAttribute('data-price');
      goodsSymbol = goods[i].getAttribute('data-symbols');
      goodsArea = goods[i].getAttribute('data-domain-extension');

      for (k = 0; k < goodsCat.length; k++) {
        if (categoriesToFilter.includes(goodsCat[k]) &&
          +goodsSymbol.length >= +symbolToFilter[0] &&
          +goodsSymbol.length <= +symbolToFilter[1] &&
          +goodsPrice >= +priceToFilter[0] &&
          +goodsPrice <= +priceToFilter[1] &&
          areasToFilter.includes(goodsArea)) {
          goods[i].style.display = 'block';
        } else if (categoriesToFilter.includes(goodsCat[k]) &&
        +goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.length == 0){
          goods[i].style.display = 'block';
        }
        else {
          continue
        }
      }
    }

    for (i = 0; i < goods.length; i++) {
      goodsPrice = goods[i].getAttribute('data-price');
      goodsSymbol = goods[i].getAttribute('data-symbols');
      goodsCat = goods[i].getAttribute('data-categories');
      goodsArea = goods[i].getAttribute('data-domain-extension');

      for (k = 0; k < goodsCat.length; k++) {
        if (categoriesToFilter.length === 0 &&
          +goodsSymbol.length >= +symbolToFilter[0] &&
          +goodsSymbol.length <= +symbolToFilter[1] &&
          +goodsPrice >= +priceToFilter[0] &&
          +goodsPrice <= +priceToFilter[1] &&
          areasToFilter.includes(goodsArea) ) {
          goods[i].style.display = 'block';
        }else if (categoriesToFilter.length === 0 &&
        +goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1] &&
        areasToFilter.length == 0){
          goods[i].style.display = 'block';
        } else {
          continue
        }
      }
    }

  }

  function areaShowHide() {

    let goods = document.querySelectorAll('.goods__items-item-wrapper');

    if (this.checked) {
      for (i = 0; i < goods.length; i++) {
        goodsPrice = goods[i].getAttribute('data-price');
        goodsSymbol = goods[i].getAttribute('data-symbols');

        goodsArea = goods[i].getAttribute('data-domain-extension')
        if (areasToFilter.includes(goodsArea) &&
          +goodsSymbol.length >= +symbolToFilter[0] &&
          +goodsSymbol.length <= +symbolToFilter[1] &&
          +goodsPrice >= +priceToFilter[0] &&
          +goodsPrice <= +priceToFilter[1]) {
          goods[i].style.display = 'block'
        } else {
          goods[i].style.display = 'none'
        }
      }
    } else {
      for (i = 0; i < goods.length; i++) {
        goodsPrice = goods[i].getAttribute('data-price');
        goodsSymbol = goods[i].getAttribute('data-symbols');

        goodsArea = goods[i].getAttribute('data-domain-extension')
        if (!areasToFilter.includes(goodsArea)) {
          goods[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < goods.length; i++) {
      goodsPrice = goods[i].getAttribute('data-price');
      goodsSymbol = goods[i].getAttribute('data-symbols');

      if (areasToFilter.length == 0 &&
        +goodsSymbol.length >= +symbolToFilter[0] &&
        +goodsSymbol.length <= +symbolToFilter[1] &&
        +goodsPrice >= +priceToFilter[0] &&
        +goodsPrice <= +priceToFilter[1]) {
        goods[i].style.display = 'block';
      } else {
        continue
      }

    }
  }
  /* check filter */
  checkFilterByPrice();
  checkFilterBySymbol();
  checkFilterByCategory();
  checkFilterByArea();
  /* functions for Filter */
  $('.goods__filter-categories-item-input').click(filterByCategory);
  $('.goods__filter-categories-item-input').click(categoryShowHide);

  $('.goods__filter-areas-item-input').click(filterByArea);
  $('.goods__filter-areas-item-input').click(areaShowHide);


  $('.goods__filter-price').click(filterByPrice);
  $('.goods__filter-price').mousedown(filterByPrice);
  $('.price-range').click(filterByPrice);
  $('.price-range').mousedown(filterByPrice);
  $('.goods__filter-price').click(priceShowHide);
  $('.goods__filter-price').mousedown(priceShowHide);
  $('.price-range').click(priceShowHide);
  $('.price-range').mousedown(priceShowHide);

  $('.goods__filter-symbol').click(filterBySymbol);
  $('.goods__filter-symbol').mousedown(filterBySymbol);
  $('.symbol-range').click(filterBySymbol);
  $('.symbol-range').mousedown(filterBySymbol);
  $('.goods__filter-symbol').click(symbolShowHide);
  $('.goods__filter-symbol').mousedown(symbolShowHide);
  $('.symbol-range').click(symbolShowHide);
  $('.symbol-range').mousedown(symbolShowHide);

  $('.goods__items-add').click(addToCart);


});