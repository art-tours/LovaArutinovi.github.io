
let open = document.querySelector('.header__basket'),
    close = document.querySelector('.basket-close'),
    basket = document.querySelector('.basket');

open.onclick = function(){
    basket.classList.add('active');
}
close.onclick = function(){
    basket.classList.remove('active');
}

document.querySelector('.header__burger').onclick = function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('active');
}


let menu = function () {
    let menuCategory = document.querySelectorAll('.categories__category'),
        menuCatalog = document.querySelectorAll('.catalog'),
        menuName;

        menuCategory.forEach(item => {
        item.addEventListener('click', selectMenuCategory)
    });

    function selectMenuCategory(event) {
        event.preventDefault();
        menuCategory.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        menuName = this.getAttribute('data-catalog-name');
        selectMenuCatalog(menuName);
    }

    function selectMenuCatalog(menuName) {
        menuCatalog.forEach(item => {
            item.classList.contains(menuName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }

};


menu();