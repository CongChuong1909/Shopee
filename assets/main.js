// form Login
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
// form register
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
//use Jquery library to make slider
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

//countdown sale

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
  setInterval();

