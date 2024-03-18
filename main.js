//Show Help 
const headphones = document.querySelector('.item-headphone');
const subHelp = document.querySelector('.sub-action');
headphones.addEventListener('click',function(){
    subHelp.classList.toggle('activeSubhelp')
})

// Resposive thanh điều hướng bên trái  
const btn_collapse_main = document.querySelector('.btn-collapse-main');
const mobile_header_list = document.querySelector('.mobile_header_list')
const mobile_exit = document.querySelector('.mobile-exit')

btn_collapse_main.addEventListener('click', function() {
    mobile_header_list.classList.add('active')
});
mobile_exit.addEventListener('click', function() {
    mobile_header_list.classList.remove('active')
});

// Resposive thanh điều hướng bên trái
const btn_collapse_user = document.querySelector('.btn-collapse-user');
const mobile_header_login = document.querySelector('.mobile_header_login')
const mobile_exit2 = document.querySelector('.mobile-exit2')


btn_collapse_user.addEventListener('click', function() {
    mobile_header_login.classList.add('active')
});
mobile_exit2.addEventListener('click', function() {
    mobile_header_login.classList.remove('active')
});

// Resposive khi click vào item có submenu  
const mobile_menu_item = document.querySelector('.mobile-menu-item')
const mobile_sub_menu = document.querySelector('.mobile_sub_menu')
mobile_menu_item.addEventListener('click', function() {
    mobile_sub_menu.classList.toggle('active')
});

// swiper js
var testimonialThumbs = new Swiper(".testimonial-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    autoplay: true,
    loop: true,
    speed: 3000
       });
       var testimonialContent = new Swiper(".testimonial-comment", {
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    speed: 3000,
    thumbs: {
      swiper: testimonialThumbs
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
    });





