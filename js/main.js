/* Change the logo color on hover */
$(".logo-container").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });

/* Toggle hamburger menu on small screens */  
var navButton=document.getElementById("nav-toggle-button");

function toggleNavDisplay(event) {
    document.getElementById("responsive-nav").classList.toggle("showNav");
    event.preventDefault();
}

navButton.addEventListener("click",toggleNavDisplay);

/* Pop alert "added to cart" */
var c = 0;
function pop() {
  if(c == 0) {
    document.getElementById("added-to-cart-box").style.display = "block";
    c = 1;
  } else {
    document.getElementById("added-to-cart-box").style.display = "none";
    c = 0;
  }
}


/*----Toggle smartphones change color & model----*/
$(".product-colors span").click(function(){
  $(".product-colors span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-1 span").click(function(){
  $(".product-colors-1 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-1").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-2 span").click(function(){
  $(".product-colors-2 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-2").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-3 span").click(function(){
  $(".product-colors-3 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-3").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-4 span").click(function(){
  $(".product-colors-4 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-4").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-5 span").click(function(){
  $(".product-colors-5 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-5").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-6 span").click(function(){
  $(".product-colors-6 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-6").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-7 span").click(function(){
  $(".product-colors-7 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-7").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-8 span").click(function(){
  $(".product-colors-8 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-8").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-9 span").click(function(){
  $(".product-colors-9 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-9").css("background-image",$(this).attr("data-pic"));
});
$(".product-colors-10 span").click(function(){
  $(".product-colors-10 span").removeClass("active");
  $(this).addClass("active");
  $(".product-pic-10").css("background-image",$(this).attr("data-pic"));
});
/*----Stroke----*/
const recommend = document.querySelectorAll('#recommend-logo path');

for(let i = 0; i<recommend.length; i++) {
  //console.log(`Letter ${i} is ${recommend[i].getTotalLength()}`);
}

/*----SHOPPING CART----*/

let carts = document.querySelectorAll('.button');

let products = [
  { 
    name: 'Xiaomi Mi Note 10',
    tag: 'xiaomiminote10',
    price: 67999,
    inCart: 0
  },
  {
    name: 'Samsung Galaxy A71',
    tag: 'samsunggalaxya71',
    price: 55999,
    inCart: 0
  },
  {
    name: 'Huawei Nova 5T',
    tag: 'huaweinova5t',
    price: 54999,
    inCart: 0
  },
  {
    name: 'Nokia 7.2',
    tag: 'nokia7.2',
    price: 44999,
    inCart: 0
  },
  {
    name: 'Samsung Galaxy S10+',
    tag: 'samsunggalaxys10+',
    price: 103999,
    inCart: 0
  },
  {
    name: 'Huawei P30 lite',
    tag: 'huaweip30lite',
    price: 35999,
    inCart: 0
  },
  {
    name: 'Xiaomi Note 8 Pro',
    tag: 'xiaomiminote8pro',
    price: 35999,
    inCart: 0
  },
  {
    name: 'Apple iPhone XR',
    tag: 'iphonexr',
    price: 95999,
    inCart: 0
  },
];

for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click', () => {
  cartNumbers(products[i]);
  totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
  document.querySelector('.cart-items span').textContent = productNumbers;
  }
}

function cartNumbers(product, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action == 'decrease') {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.cart-items span').textContent = productNumbers - 1;
  }else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-items span').textContent = productNumbers + 1;
  }else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-items span').textContent = 1;
  }
  
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
     cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
    [product.tag]: product
  }
}

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product, action) {
  let cartCost = localStorage.getItem('totalCost');

if (action == 'decrease') {
  cartCost = parseInt(cartCost);
  localStorage.setItem('totalCost', cartCost - product.price);
}else if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
    
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".item");
  let cartCost = localStorage.getItem('totalCost');

  //console.log(cartItems);
  if( cartItems && productContainer ) {
  productContainer.innerHTML = '';
  Object.values(cartItems).map(item => {
    productContainer.innerHTML += `
    <div class="item">
        <div class="remove-btn">
        <i class="fas fa-trash-alt" id="trash"></i>
        </div>
        <div class="image">
        <img src="./img/telefoni/${item.tag}.jpg">
        </div>
        <div class="description">
        <span>${item.name}</span>
        </div>
    <div class="price">${item.price}rsd</div>
    <div class="quantity">
        <button class="minus-btn">
         <i class="fas fa-angle-left"></i>
        </button>
        <span>${item.inCart}</span>
        <button class="plus-btn">
          <i class="fas fa-angle-right"></i>
        </button>  
    </div>
    <div class="total-price">
    <h5>${item.inCart * item.price}rsd</h5>
    </div>
    `;
  });

productContainer.innerHTML += `
  <div class="basketTotalContainer">
  <h5 class="basketTotalTitle">
  Ukupno:
  </h5>
  <h5 class="basketTotal">
  ${cartCost}rsd
  </h5>
  </div>
  `;

  }
  removeButtons();
  handleQuantity();
}

/* Remove Buttons */
function removeButtons () {
  let removeButtons = document.querySelectorAll('.remove-btn');
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let cartCost = localStorage.getItem('totalCost');
  
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', () => {
      productName = removeButtons[i].parentElement.querySelector('.description span').textContent.trim().toLowerCase().replace(/ /g, '');
      
      localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
      
      localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      displayCart();
      onLoadCartNumbers();
    });
  }
}

/* Increase & Decrease Buttons */
function handleQuantity () {
  let decreaseButtons = document.querySelectorAll('.minus-btn');
  let increaseButtons = document.querySelectorAll('.plus-btn');
  let cartItems = localStorage.getItem('productsInCart');
  let currentQuantity = 0;
  let currentProduct = "";

  cartItems = JSON.parse(cartItems);
  //console.log(cartItems);
  

  for (let i=0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;

      currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

      if (cartItems[currentProduct].inCart > 1) {
          cartItems[currentProduct].inCart = cartItems[currentProduct].inCart - 1;
          cartNumbers(cartItems[currentProduct], 'decrease');
      totalCost(cartItems[currentProduct], 'decrease');    
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      
      displayCart();
    }
    });
  }
  for (let i=0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', () => {
      currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;

      currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();

          cartItems[currentProduct].inCart = cartItems[currentProduct].inCart + 1;
          cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);    
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      
      displayCart();
    });
  }
}

onLoadCartNumbers();
displayCart();





