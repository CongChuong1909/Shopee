//-------------------LOGIN FORM------------------------//
const authForm = document.querySelector('.js-auth_form-register')
const modal = document.querySelector('.modal-register')
const modalContainer = document.querySelector('.modal__overlay-register')
const modalClose = document.querySelector('.auth_form-control-btn')
const modalSwitchLogin = document.querySelector('.auth-form__switch-login')
authForm.addEventListener('click', function () {
  modal.classList.add('open-modal')
})

modalClose.addEventListener('click', function () {
  modal.classList.remove('open-modal')
})

modalContainer.addEventListener('click', function () {
  modal.classList.remove('open-modal')
})
//------------------REGISTER FORM--------------------//
const authFormLogin = document.querySelector('.js-auth_form-login')
const modalLogin = document.querySelector('.modal-login')
const modalContainerLogin = document.querySelector('.modal__overlay-login')
const modalCloseLogin = document.querySelector('.js-btn-back')
const modalSwitchRegister = document.querySelector('.auth-form__switch-register')

authFormLogin.addEventListener('click', function () {
  modalLogin.classList.add('open-modal')
})

modalCloseLogin.addEventListener('click', function () {
  modalLogin.classList.remove('open-modal')
})

modalContainerLogin.addEventListener('click', function () {
  modalLogin.classList.remove('open-modal')
})

// switch
modalSwitchRegister.addEventListener('click', function () {
  modalLogin.classList.remove('open-modal')
  modal.classList.add('open-modal')
})
modalSwitchLogin.addEventListener('click', function () {
  modal.classList.remove('open-modal')
  modalLogin.classList.add('open-modal')
})
//----------------USE JQUERY LIBRARY TO MAKE SLIDER-----------------------//
const slider = document.querySelector(".js-slider")
$(slider).slick({
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(document).ready(function () {
  $('.category__product').slick({
    slidesToShow: 10,
    slidesToScroll: 3,
    infinite: false,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

$(document).ready(function () {
  $('.flashsale__list').slick({
    slidesToShow: 6,
    slidesToScroll: 3,
    infinite: false,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });
});

//--------------COUNTDOWN SALE-----------------//

  var hours=document.querySelector("#hours");
  var minutes=document.querySelector("#minutes");
  var seconds=document.querySelector("#seconds");
  var CurrentYear = new Date().getFullYear();
  var CurrentMonth = new Date().getMonth();
  var CurrentDay = new Date().getDate();
  var currentTime = new Date(CurrentYear,CurrentMonth,CurrentDay);
  var EndFlashSaleDay = new Date(CurrentYear,CurrentMonth,CurrentDay+1);
  // var a=EndFlashSaleDay-currentTime;
  // console.log(a);

 
  $(document).ready(function () {
    setInterval(function(){
      var currentTime =new Date();
      var secondNow = Math.floor((EndFlashSaleDay-currentTime)/1000)
      var s = Math.floor(secondNow%60)
      var m = Math.floor(secondNow/60%60)
      var h =  Math.floor(secondNow/60/60%24)
      hours.innerHTML = h < 10 ? '0'+ h : h
      minutes.innerHTML = m < 10 ? '0'+ m : m
      seconds.innerHTML = s < 10 ? '0'+ s : s
    },1000)
  });

//back to top
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back_top').addClass('open')
//         }
//         else (
//             $('.back_top').removeClass('open')
//         )
//     });
// });


//---------------PRICE START TIMELINE ----------------------//
var CurrentTimeSaleItem=document.getElementById("list-product__hour-sale-items-hour");
var CurrentTimeSaleItem2=document.getElementById("list-product__hour-sale-items-hour-second");
var CurrentTimeSaleItem3=document.getElementById("list-product__hour-sale-items-hour-third");
var CurrentTimeSaleItem4=document.getElementById("list-product__hour-sale-items-hour-fourth");
var CurrentTimeSaleItem5=document.getElementById("list-product__hour-sale-items-hour-fifth");
var Current = new Date();
var CurrentHourSale=Current.getHours();

function SaleTime(){
      var second=CurrentHourSale + 3;
      var third=CurrentHourSale + 6;
      var fourth=CurrentHourSale + 9;
      var fifth=CurrentHourSale + 12;
      if(third>=24)  third=third-24;
      if(fourth >= 24)  fourth=fourth-24;
      if(fifth >= 24)  fifth=fifth-24;
      CurrentTimeSaleItem.innerHTML=CurrentHourSale < 10 ? '0' + CurrentHourSale +':00' : CurrentHourSale  +':00';
      CurrentTimeSaleItem2.innerHTML=second < 10 ? '0' + second +':00' : second +':00';
      CurrentTimeSaleItem3.innerHTML=third < 10 ? '0' + third +':00' : third +':00';
      CurrentTimeSaleItem4.innerHTML=fourth < 10 ? '0' + fourth +':00' : fourth +':00';
      CurrentTimeSaleItem5.innerHTML=fifth < 10 ? '0' + fifth +':00' : fifth +':00';
}

$(document).ready(function () {

    if(CurrentHourSale % 3 == 0 )
    {
      SaleTime();
    }
    else if(CurrentHourSale % 3 == 1)
    {
      CurrentHourSale=CurrentHourSale-1;
      SaleTime();
    }
    else if(CurrentHourSale % 3 == 2)
    {
      CurrentHourSale=CurrentHourSale-2;
      SaleTime();
    }
})

//-----------------HEADER FIXED FOR COUNTDOWN BAR-----------------//
$(document).ready(function(){
   $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $(".product-list__countDown").addClass("fixed");
    }
    else{
      $(".product-list__countDown").removeClass("fixed");
    }
  })
})
//---------------HEADER FIXED FOR TIME SALE BAR-------------------//

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>400){
      $(".list-product__hour-sale").addClass("fixedTime");
    }
    else{
      $(".list-product__hour-sale").removeClass("fixedTime");
    }
  })
})

//---------------LIST PRODUCT (ITEM IN INDEX.HTML)------------------//

const ListImage=[
  ' ./assets/image/it10.jfif ' ,
  ' ./assets/image/8160246398ce9f5466061ef3b760da6f_tn.jfif ' ,
  ' ./assets/image/it2.jfif ' ,
  ' ./assets/image/it3.jfif ' ,
  ' ./assets/image/it4.jfif ' ,
  ' https://cf.shopee.vn/file/177c39acf0f1f2f279a932247067addc_tn ' ,
  ' ./assets/image/it6.jfif ' ,
  ' ./assets/image/it7.jfif ' ,
  ' ./assets/image/it8.jfif ' ,
  ' ./assets/image/it9.jfif ' ,
]
var itemProductMain = document.querySelectorAll(".home-product__item-main");
itemProductMain.forEach(function(item,index){
  ListImage.forEach(function(image,index){
    itemProductMain[index].innerHTML=`
            <div class="home-product__item-img" style="background-image: url(${ListImage[index]});"></div>
            <h4 class="home-product__item-name">
                Tai nghe bluetooth không dây Inpods i12 TWS cảm ứng điều khiển cảm biến âm thanh HIFI cho Android
            </h4>
            <div class="home-product__item-price">
                <span class="home-product__item-price-old">
                    1.200.000đ
                </span>
                <span class="home-product__item-price-current">
                    999.000đ
                </span>
            </div>
            <div class="product__item-action">
                <span class="product__item-like product__item-like--liked">
                    <i class="product__item-like-icon-empty far fa-heart "></i>
                    <i class="product__item-like-icon-fill fas fa-heart"></i>
                </span>
                <div class="product__item-rating">
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="product__item-sole">88 Đã bán</span>
            </div>
            <div class="product__item-origin">
                <span class="product__item-brand">Intel</span>
                <span class="product__item-production">Việt Nam</span>
            </div>
            <div class="product__item-favourite">
                <i class="fas fa-check"></i>Yêu thích
            </div>
            <div class="product__item-sale-off">
                <span class="product__item-sale-off-percent">15%</span>
                <span class="product__item-sale-off-label">Giảm</span>
            </div>`
  })  
})


//---------------LIST PRODUCT (ITEM IN LIST-PROSUCT.HTML)------------------//

const imageProductList=[
   ' https://cf.shopee.vn/file/f75ababcb702cfd3e242b6c343e3bb84_tn ' ,
   ' https://cf.shopee.vn/file/e418a1847d6e48dc5a7c3df9f6d48068_tn ' ,
   ' https://cf.shopee.vn/file/83925483c78964bc77a7ddc5c94d4906_tn ' ,
   ' https://cf.shopee.vn/file/4495a946d16db131d03be2845aea368b_tn ' ,
   ' https://cf.shopee.vn/file/1553a1652973adebd6b522812bd7bcf0_tn ' ,
   ' https://cf.shopee.vn/file/af688a009dbe1783a07ede1c2ca280f3_tn ' ,
   ' https://cf.shopee.vn/file/fc01f333b2488355c1befe3ae6eadce7_tn ' ,
   ' https://cf.shopee.vn/file/c3c1e144b77495192ae888f7ceed8106_tn ' ,
   ' https://cf.shopee.vn/file/537e01490694b6b8b162dc109033d0c8_tn ' ,
   ' https://cf.shopee.vn/file/f08b81f8b6d7188b837cbc5f1c4b1de5_tn ' ,
   ' https://cf.shopee.vn/file/c7c0888ea7d28dac872fad9f6fb504a1_tn ' ,
   ' https://cf.shopee.vn/file/238afb2d478cc78f91485add3bf7afb0_tn ' ,
   ' https://cf.shopee.vn/file/05b7e843d6f4a8c1fdd307f356e10593_tn ' ,
   ' https://cf.shopee.vn/file/655c03265ce981dd96bc6b3399386cf7_tn ' ,
   ' https://cf.shopee.vn/file/0d31846dd9ee75fe3886113583dd6d99_tn ' ,
   ' https://cf.shopee.vn/file/6d9d8d15c9a42ca3d0dbab15ff80bed2_tn ' ,
   ' https://cf.shopee.vn/file/f1b29e510aa8e789ded3ad6289461a7c_tn ' ,
   ' https://cf.shopee.vn/file/d24095fab9e396c28c55e4396a06d21f_tn ' ,
   ' https://cf.shopee.vn/file/22e7d67524d13a99230e16de4ff7a03d_tn ' ,
   ' https://cf.shopee.vn/file/4238e6ed16c455875478c20505625090_tn ' 
]

var itemProduct = document.querySelectorAll(".home-product__item");
itemProduct.forEach(function(item,index){
  imageProductList.forEach(function(image,index){
    itemProduct[index].innerHTML=`
            <div class="home-product__item-img" style="background-image: url(${imageProductList[index]});"></div>
            <h4 class="home-product__item-name">
                Tai nghe bluetooth không dây Inpods i12 TWS cảm ứng điều khiển cảm biến âm thanh HIFI cho Android
            </h4>
            <div class="home-product__item-price">
                <span class="home-product__item-price-old">
                    1.200.000đ
                </span>
                <span class="home-product__item-price-current">
                    999.000đ
                </span>
            </div>
            <div class="product__item-action">
                <span class="product__item-like product__item-like--liked">
                    <i class="product__item-like-icon-empty far fa-heart "></i>
                    <i class="product__item-like-icon-fill fas fa-heart"></i>
                </span>
                <div class="product__item-rating">
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="product__item-rating-star-gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="product__item-sole">88 Đã bán</span>
            </div>
            <div class="product__item-origin">
                <span class="product__item-brand">Intel</span>
                <span class="product__item-production">Việt Nam</span>
            </div>
            <div class="product__item-favourite">
                <i class="fas fa-check"></i>Yêu thích
            </div>
            <div class="product__item-sale-off">
                <span class="product__item-sale-off-percent">15%</span>
                <span class="product__item-sale-off-label">Giảm</span>
            </div>`
  })  
})

