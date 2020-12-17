// alert("hello gulp hiii");


// *********   for webp images
function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});

//******** burger menu
header = document.querySelector(".header");
headerH = document.querySelector(".header").clientHeight;

window.onscroll = function() {
  if (document.documentElement.scrollTop > headerH ) {
    header.classList.add("fixed");
  } 
}

document.querySelector(".header__burger").onclick = function (){
   this.classList.toggle("active");
   document.querySelector(".nav").classList.toggle("active");
}