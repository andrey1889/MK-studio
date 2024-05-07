
var cart = {}; //корзина

function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json",goodsOut);
  }

function goodsOut(data) {
//вывод на страницу
console.log(data); 
var out = '';
for(var key in data) {
out +='<div class="card">';
out +=`<p class="name">${data[key].name}</p>`;
out +=`<img src="../MK-studio/images/shop/${data[key].img}" alt="">`;
out +=`<p class="cost">${data[key].cost}</p>`;
out +=`<button class="add-to-cart" data-id="1234">Добавить в корзину</button>`;
out +='</div>';
}
 $('.goods-out').html(out);
$('.add-to-cart').on('click', addToCart);
}

function addToCart(params) {
  //добавляем в корзину
  var id = $(this).attr('data-id');
  //console.log(id);
  if  (cart[id]==undefined){
    cart[id] = 1;
  } else {cart[id]++;}
}


$(document).ready(function () {
    init();
})