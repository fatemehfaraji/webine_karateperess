import '../styles/index.scss';

import 'jquery';
import 'jquery-ui';
import 'bootstrap';

// import 'owl.carousel';

import 'jquery-lazy';
$('.ilazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    effectTime: 1000,
    onError: function(element) {
        // console.log('error loading ' + element.data('src'));
        // element.attr("src", "assets/images/err.png");
        element.css('background-image', 'url(../images/nopic.png)');
    },
    beforeLoad: function(element) {
        // console.log('' + element.data('src'));
        // element.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
        // element.css('background-image', 'url(images/nopic.png)');
    },
    afterLoad: function(element) {
        // called after an element was successfully handled
        element.addClass('ilazy-loaded');
    }
});

// var siteCarousel = function () {
//     if ( $('.nonloop-block-13').length > 0 ) {
//         $('.nonloop-block-13').owlCarousel({
//             center: false,
//             rtl:true,
//             lazyLoad:true,
//             items: 1,
//             loop: false,
//             stagePadding: 10,
//             autoplay: true,
//             margin: 20,
//             nav: true,
//             dots: true,
//             navText: ['<span class="fa fa-arrow-right">', '<span class="fa fa-arrow-left">'],
//             responsive:{
//                 600:{
//                     margin: 20,
//                     stagePadding: 10,
//                     items: 1
//                 },
//                 1000:{
//                     margin: 20,
//                     stagePadding: 10,
//                     items: 2
//                 },
//                 1200:{
//                     margin: 20,
//                     stagePadding: 10,
//                     items: 3
//                 }
//             }
//         });
//     }
//
//
//
//     if ( $('.nonloop-block-14').length > 0 ) {
//         $('.nonloop-block-14').owlCarousel({
//             center: false,
//             items: 1,
//             loop: true,
//             rtl:true,
//             lazyLoad:true,
//             stagePadding: 0,
//             autoplay: true,
//             margin: 20,
//             nav: true,
//             dots: true,
//             navText: ['<span class="fa fa-arrow-right">', '<span class="fa fa-arrow-left">'],
//             responsive:{
//                 600:{
//                     margin: 20,
//                     stagePadding: 0,
//                     items: 1
//                 },
//                 1000:{
//                     margin: 20,
//                     stagePadding: 0,
//                     items: 1
//                 }
//
//             }
//         });
//     }
//
//     if ( $('.nonloop-block-15').length > 0 ) {
//         $('.nonloop-block-15').owlCarousel({
//             center: false,
//             items: 1,
//             loop: true,
//             stagePadding: 0,
//             autoplay: true,
//             margin: 20,
//             nav: true,
//             dots: true,
//             navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
//             responsive:{
//                 600:{
//                     margin: 20,
//                     stagePadding: 0,
//                     items: 1,
//                     nav: false,
//                     dots: true
//                 },
//                 1000:{
//                     margin: 20,
//                     stagePadding: 0,
//                     items: 2,
//                     nav: true,
//                     dots: true
//                 },
//                 1200:{
//                     margin: 20,
//                     stagePadding: 0,
//                     items: 3,
//                     nav: true,
//                     dots: true
//                 }
//             }
//         });
//     }
//
//     if ( $('.slide-one-item').length > 0 ) {
//         $('.slide-one-item').owlCarousel({
//             center: false,
//             items: 1,
//             rtl:true,
//             lazyLoad:true,
//             loop: true,
//             stagePadding: 0,
//             margin: 0,
//             autoplay: true,
//             pauseOnHover: false,
//             animateOut: 'fadeOut',
//             animateIn: 'fadeIn',
//             nav: true,
//             navText: ['<span class="fa fa-arrow-right">', '<span class="fa fa-arrow-left">'],
//         });
//     }
// };
// siteCarousel();
//
//
//
// import MmenuLight from 'mmenu-light';
//
// document.addEventListener("DOMContentLoaded", () => {
//         const menu = new MmenuLight(
//             document.querySelector( "#menu" )
//         );
//
//
//         const navigator = menu.navigation({
//             title: "منو"
//         });
//         const drawer = menu.offcanvas({
//             position: "right"
//         });
//
//         document.querySelector( 'a[href="#menu"]' )
//             .addEventListener( 'click', ( evnt ) => {
//                 evnt.preventDefault();
//                 drawer.open();
//             });
//     }
// );

// console.log('webpack starterkit');


import 'slick-carousel';
$('.slick-carousel-main').slick({
    dots: true,
    arrows: false,
});

$('.go-to-slide').click(function (e) {
    e.preventDefault();
    var dataId = $(this).attr("data-slide-go");
    $('.slick-carousel-main').slick('slickGoTo', dataId);
});



