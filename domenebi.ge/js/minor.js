$('document').ready(function () {
   /*price range */
   $(function () {
      $(".price-range").slider({
         range: true,
         min: 0,
         max: 50000,
         values: [50, 50000],
         slide: function (event, ui) {
            $(".goods__filter-price-input--1").val(ui.values[0]);
            $(".goods__filter-price-input--2").val(ui.values[1]);
         }

      });
   });
   /*symbol range*/
   $(function () {
      $(".symbol-range").slider({
         range: true,
         min: 0,
         max: 26,
         values: [0, 26],
         change: function (event, ui) {
            $(".goods__filter-symbol-input--1").val(ui.values[0]);
            $(".goods__filter-symbol-input--2").val(ui.values[1]);
         }
      });
   });

   /* header burger */

   let headerBurger = document.querySelector('.header__burger');
   let menu = document.querySelector('.header__bottom');


   headerBurger.onclick = function () {
      headerBurger.classList.toggle('active');
      menu.classList.toggle('active');
   }
   /* filter open/close */

   let filterButton = document.querySelector('.goods__items-button--filter');
   let filterClose = document.querySelector('.goods__filter-head-close');
   let filterSearch = document.querySelector('.goods__filter-footer-search');
   let goodsFilter = document.querySelector('.goods__filter');

   filterButton.onclick = function () {
      goodsFilter.classList.add('active');
      goodsSort.classList.remove('active');
   }
   filterSearch.onclick = function () {
      goodsFilter.classList.remove('active');
   }
   filterClose.onclick = function () {
      goodsFilter.classList.remove('active');
   }

   /* sort open/close */

   let sortButton = document.querySelector('.goods__items-button--sort');
   let sortButtonClose = document.querySelector('.goods__items-sort-close');
   let goodsSort = document.querySelector('.goods__items-sort');

   sortButton.onclick = function () {
      goodsSort.classList.add('active');
      goodsFilter.classList.remove('active');
   }
   sortButtonClose.onclick = function () {
      goodsSort.classList.remove('active');
   }
});