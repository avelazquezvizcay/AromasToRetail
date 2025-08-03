$(document).ready(function() {

  /*--------------- Scroll to top js -------------------*/
  jQuery("#GotoTop").on('click',function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, '1000');
    return false;
  });
  /*-------------------- END ------------------*/

  jQuery('.nav-toggle').click(function(event) {
    jQuery(this).toggleClass('active');
    event.stopPropagation();
    jQuery(' #tt-megamenu .tt-mega_menu').slideToggle("2000");
    jQuery('body').toggleClass("open-header");
  });
  jQuery("#tt-megamenu .tt-mega_menu").on("click", function(event) {
    event.stopPropagation();
    jQuery(this).removeClass('active');
  });	
  
  /*----menu hover---*/
  jQuery(".header_2 .tt-megamenu .tt_menus_ul .tt_menu_item").hover(
    function () {
      jQuery('body').addClass("open-nav");
    },
   function () {
      jQuery('body').removeClass("open-nav");
    }
  );
  
  jQuery("#tt-megamenu .tt-mega_menu").hover(
    function () {
      jQuery('body').addClass("menu_hover");
    },
   function () {
      jQuery('body').removeClass("menu_hover");
    }
  );
  /*-------------------- Filter toggle ------------------*/

  jQuery(".filter-toggle").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".filter-toggle-wrap").slideToggle("is-visible");
  })
  var filter = jQuery(this).find('.full_width .sorting_wrapper');
  jQuery(this).find('.filter-toggle').insertBefore(filter);

  /*-------------------- END ------------------*/

  jQuery('.product-single__thumbs img').on('click', function () {
    var src = jQuery(this).attr('src');

    if (src != '') {
      jQuery(this).closest('.product-wrapper').find('img.grid-view-item__image').first().attr('src', src);
    }
    jQuery(this).parent('.grid-item').addClass('open').siblings('.grid-item').removeClass('open');
  });

  /*-------------------- video -------------------*/

  var p = jQuery(".popup_overlay");

  jQuery("#popup_toggle").click(function() {
    jQuery("body").addClass("popup-toggle");
    p.css("display", "block");

  });
  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
      jQuery(p).css("display", "none");
      jQuery('body').removeClass('popup-toggle'); 
    }
  });
  jQuery(".popup_close,.homeslider ul.slick-slider .slick-arrow").click(function() {
    p.css("display", "none");
    jQuery('body').removeClass('popup-toggle'); 
  });

  //video popup
  function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    //div.style.display = state == 'hide' ? 'none' : '';
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
      '{"event":"command","func":"' + func + '","args":""}',
      "*"
    );
  }

  jQuery("#popup_toggle, .homeslider ul.slick-slider .slick-arrow").click(function() {
    p.css("visibility", "visible").css("opacity", "1");
  });

  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
      jQuery(p)
      .css("visibility", "hidden")
      .css("opacity", "0");
      toggleVideo("hide");
    }
  });

  jQuery(".popup_close").click(function() {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
  });

  /*------------------------- Checkout button --------------------*/

  jQuery(".checkout-btn .shopify-payment-button").addClass("btn");

  /*----------------------------------------------*/

  if(jQuery('.header_1 .wrapper-wrap').hasClass('logo_center'))  {
    jQuery('body').addClass('logo_center');
  }
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
  if($('.site-header').hasClass('header_transaparent')){
    $('body.template-index').addClass('header_transaparent')
  }

  var img_id = jQuery('.product-single__thumbs .slick-active.slick-current').find('.product-single__thumb').data('id');
  if(jQuery('.product-lightbox-btn').hasClass(img_id)){
    jQuery('.product-lightbox-btn.'+img_id).show();
  }

  /*----------------------- filter ----------------------*/

  jQuery(".filter-left").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".off-canvas.position-left").addClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable");
  });
  jQuery(".filter-right").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".off-canvas.position-right").addClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable");
  });
  jQuery(".off-canvas .sidebar_close").on("click" , function(e){
    e.preventDefault();
    jQuery(".off-canvas.position-left").removeClass("is-open");
    jQuery(".off-canvas.position-right").removeClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable");
  });
  jQuery(".is-overlay-fixed").on("click" , function(e){
    e.preventDefault();
    jQuery(".filter-left").trigger('click');
    jQuery(".filter-right").trigger('click');
    jQuery(".off-canvas.position-left").removeClass("is-open");
    jQuery(".off-canvas.position-right").removeClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable");
  });
  $('.product-360-button a').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    disableOn: false,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      open: function() {
        $(window).resize()
      }
    }
  });

  countDownIni('.flip-countdown,.js-flip-countdown'); 

  /*--------------- popup Video ---------------------*/

  $('.popup-video').magnificPopup({
    disableOn: 300,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  if ($('a.product-lightbox-btn').length > 0 || $('a.product-video-popup').length > 0) {
    $('.product-single__photos .gallery,.design_2 .product-img').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
      removalDelay: 300,
      closeOnContentClick: true,
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1]
      },
      image: {
        verticalFit: false,
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      },
      callbacks: {
        beforeOpen: function() {
          var productVideo = $('.product-video-popup').attr('href');
          if (productVideo) {
            this.st.mainClass = 'has-product-video';
            var galeryPopup = $.magnificPopup.instance;
            galeryPopup.items.push({
              src: productVideo,
              type: 'iframe'
            });
            galeryPopup.updateItemHTML();
          }
        },
        open: function() {}
      }
      // other options
    });
  }
  $('.design_3 .product-img,.design_5 .pro_img').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
    removalDelay: 300,
    closeOnContentClick: true,
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      preload: [0, 1]
    },
    image: {
      verticalFit: false,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    },
    callbacks: {
      beforeOpen: function() {
        var productVideo = $('.product-video-popup').attr('href');
        if (productVideo) {
          this.st.mainClass = 'has-product-video';
          var galeryPopup = $.magnificPopup.instance;
          galeryPopup.items.push({
            src: productVideo,
            type: 'iframe'
          });
          galeryPopup.updateItemHTML();
        }
      },
      open: function() {}
    }
    // other options
  });
  $('body').on('click', '.product-lightbox-btn', function(e) {
    $('.product-wrapper-owlslider').find('.owl-item.active a').click();
    e.preventDefault();
  });

  /*-------------- Quantity Start -------------------*/ 

  $('.qtyplus').on('click',function(e){
    e.preventDefault();     
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    var update = jQuery('.cart-update .quantity').data("item-id");
    console.log(update);
    if (!isNaN(currentVal)) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal + 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });

  $(".qtyminus").on('click',function(e) {
    e.preventDefault();
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    if (!isNaN(currentVal) && currentVal > 1) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal - 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });

  /*---------------- END ------------------*/
  $("#navToggle").on('click',function(e) {
    jQuery(this).next('.Site-navigation').slideToggle(500);
  });
  $(".menu_toggle_wrap #navToggle").on('click',function(e) {
    jQuery(this).parent().next('.Site-navigation').slideToggle(500);
  });

  jQuery("body.footer_style_1 .footer_toggle").on("click" , function(e){
    jQuery('#shopify-section-footer-model-1').addClass('toggle-footer'); 
    jQuery("body").addClass("footer1-open");
    e.preventDefault();
  });

  jQuery("body.footer_style_1 .footer_close_toggle").on("click" , function(e){ 
    jQuery('#shopify-section-footer-model-1').removeClass('toggle-footer'); 
    jQuery("body").removeClass("footer1-open");
    e.preventDefault();
  });


  if(jQuery(window).width() >= 992) {
    jQuery(".header_1 .fullscreen_header_toggle").on("click" , function(e){
      jQuery(this).toggleClass("active");
      jQuery("body").toggleClass("fullnav-open header_1");      
      e.preventDefault();
    });
  }
  jQuery(".header_3 .fullscreen_header_toggle").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");   
    jQuery('#tt-megamenu').toggleClass("active");
    jQuery(".fullscreen_header").toggleClass("nav-open");
    jQuery("body").toggleClass("fullnav-open header_3");
  });

  /*-------------- Search js ----------------*/

  jQuery(".site-header__search.search-full .serach_icon").on('click',function(e){
    e.preventDefault();
    jQuery(this).toggleClass('active'); 
    jQuery('body').toggleClass('search_full_active'); 
    jQuery('.full-search-wrapper').addClass('search-overlap');
    jQuery('.header_3 .search-full-screen').addClass('active');
    jQuery('.myaccount  .dropdown-toggle').removeClass("open");
    jQuery( '.myaccount  .customer_account' ).slideUp( "fast" );  
    jQuery('.site-header .site-header_cart_link').removeClass("active");
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );   
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery(".search-bar > input").focus();
    jQuery('body').toggleClass('search_toggle'); 
    jQuery('body').removeClass('account-toggle');
    jQuery('body').removeClass('cart_toggle');
  });
  jQuery(".site-header__search.search-full .close-search").on('click',function(){
    jQuery('.site-header__search.search-full .serach_icon').removeClass('active');   
    jQuery('.full-search-wrapper').removeClass('search-overlap');  
    jQuery('.header_3 .search-full-screen').removeClass('active');
    jQuery('body').removeClass('search_full_active');
    jQuery('body').removeClass('search_toggle'); 
  });

  jQuery(".site-header__search:not(.search-full) .serach_icon").on('click',function(){    
    jQuery( ".search_wrapper" ).slideToggle( "fast" );
    jQuery( ".search-bar > input" ).focus();
    jQuery(this).toggleClass('active');
    jQuery('body').toggleClass('search_toggle');
    jQuery('.site-header .site-header_cart_link').removeClass("active");
    jQuery('.myaccount  .dropdown-toggle').removeClass("open");  
    jQuery( '.myaccount  .customer_account').slideUp( "fast" );   
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
    jQuery('body').removeClass('account-toggle');
    jQuery('body').removeClass('cart_toggle');
  });
  /*------------------------ END -------------------*/
  /*-------------------- Myaccount -----------------*/

  jQuery(".myaccount  span.dropdown-toggle").on('click',function(event){   
    event.preventDefault();

    jQuery( ".header_1 .customer_account,.header_2 .customer_account,.header_3 .customer_account" ).slideToggle( "fast" );
    jQuery(this).toggleClass('open');
    jQuery('body').toggleClass('account-toggle');
    jQuery('.site-header__search:not(.search-full) .serach_icon').removeClass('active');
    jQuery('body').removeClass('search_full_active'); 
    jQuery('body').removeClass('currency-open');
    jQuery('body').removeClass('language-open');
    jQuery('.site-header .site-header_cart_link').removeClass("active");
    jQuery( ".site-header .search_wrapper" ).slideUp( "fast" );
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
    jQuery('body').removeClass('search_toggle'); 
    jQuery('body').removeClass('cart_toggle');
  });
  jQuery(document).on("click", function (event) {
        var myacc = jQuery(".myaccount .dropdown-toggle")[0];
    var myaccont = jQuery(".myaccount .dropdown-toggle");

    if (
      myaccont !== event.target &&
      !myaccont.has(event.target).length &&
      myacc !== event.target
    ) {
      jQuery(".customer_account").slideUp("fast");
      jQuery("body").removeClass("account-toggle");
      jQuery(".myaccount .dropdown-toggle").removeClass("open");
    }

    var searchtog = jQuery(".site-header__search")[0];
    var searchtoggle = jQuery(".site-header__search");

    if (
      searchtoggle !== event.target &&
      !searchtoggle.has(event.target).length &&
      searchtog !== event.target
    ) {
      jQuery(".search_wrapper").slideUp("slow");
      jQuery("body").removeClass("search_wrapper");
      jQuery("body").removeClass("search_toggle");
      jQuery(".search_toggle").removeClass("active");
    }
    
       var carttog = jQuery(".site-header__cart")[0];
    var carttoggle = jQuery(".site-header__cart");

    if (
      carttoggle !== event.target &&
      !carttoggle.has(event.target).length &&
      carttog !== event.target
    ) {
      jQuery("#slidedown-cart").slideUp("slow");
      jQuery("body").removeClass("slidedown-cart");
      jQuery("body").removeClass("site-header_cart_link.active");
      jQuery(".site-header_cart_link").removeClass("active");
    }
    
  });
  /*-------------------- END -----------------*/

  /*--------------------- Currency ----------------*/

  $(".header_1 .header_currency .currency_wrapper.dropdown-toggle").on("click", function (event) {     
    event.preventDefault();
    jQuery(".customer_account").stop(); 
    jQuery( ".currencies.flag-dropdown-menu" ).slideToggle( "fast" );
    $(this).toggleClass('active');  
    jQuery('body').toggleClass('currency-open');
    jQuery('body').removeClass('language-open');
    jQuery( ".language.flag-dropdown-menu" ).slideUp( "fast" );
    $(".header_language .language-block .language_wrapper.dropdown-toggle").removeClass('active');  
  });
  /*------------------ END -------------------*/

  /*---------------- Language ---------------*/
  $(".header_1 .header_language .language-block .language_wrapper.dropdown-toggle").on("click", function (event) {     
    event.preventDefault();
    jQuery(".customer_account").stop();      
    jQuery( ".language.flag-dropdown-menu" ).slideToggle( "fast" );
    $(this).toggleClass('active');  
    jQuery('body').removeClass('currency-open');
    jQuery('body').toggleClass('language-open');
    jQuery( ".currencies.flag-dropdown-menu" ).slideUp( "fast" );
    $(".header_currency .currency_wrapper.dropdown-toggle").removeClass('active');
  });
  /*---------------- END ------------------*/

  var p_col = jQuery('.slider-specialproduct').data('col');
  if(jQuery("body").hasClass('disable_menutoggle')){
    $('body.disable_menutoggle .slider-specialproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : false,
      dots : true,
      rewind:true,
      responsive: {
        100: {
          items: 1
        },
        319: {
          items: 2
        },
        700: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }else{
    $('body .slider-specialproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : false,
      dots : true,
      rewind:true,
      responsive: {
        100: {
          items: 1
        },
        319: {
          items: 2
        },
        700: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }  

  $('.slider-specialproduct-wrap').each(function () { 
    if($(this).find('.owl-nav').hasClass('disabled')){
      $(this).find('.customNavigation').hide();
    }else{
      $(this).find('.customNavigation').show();
    }
  });
  $(".slider-specialproduct-wrap .customNavigation .next").click(function(){
    var wrap = $(this).closest('.slider-specialproduct-wrap');
    $(wrap).find('.slider-specialproduct').trigger('next.owl');
  });
  $(".slider-specialproduct-wrap .customNavigation .prev").click(function(){
    var wrap = $(this).closest('.slider-specialproduct-wrap');
    $(wrap).find('.slider-specialproduct').trigger('prev.owl');
  });

  
  $('body:not(.rtl) .ttbanner-right').owlCarousel({
    items : 2, //1 items above 1000px browser width
    nav : true,
    rtl: true,
    loop: true,
    autoplay:true,
    dots : false,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
  $('body.rtl .ttbanner-right').owlCarousel({
    items : 2, //1 items above 1000px browser width
    nav : true,
    rtl: true,
    loop: true,
    autoplay:true,
    dots : false,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
  $('body:not(.rtl) .offer_cms_slider').owlCarousel({             
    nav : true,
    dots : false,
    autoplay:true,
    rewind:true,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('body.rtl .offer_cms_slider').owlCarousel({
    nav : true,
    rtl:true,
    rewind:true,
    autoplay:true,
    dots : false,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  $('.cmsoffer').each(function () { 
    if($(this).find('.owl-nav').hasClass('disabled')){
      $(this).find('.customNavigation').hide();
    }else{
      $(this).find('.customNavigation').show();
    }
  });
  $(".cmsoffer .customNavigation .next").click(function(){
    var wrap = $(this).closest('.cmsoffer');
    $(wrap).find('.offer_cms_slider').trigger('next.owl');
  });
  $(".cmsoffer .customNavigation .prev").click(function(){
    var wrap = $(this).closest('.cmsoffer');
    $(wrap).find('.offer_cms_slider').trigger('prev.owl');
  });  


  $('.cmsbannercontent').owlCarousel({
    items :2, //1 items above 1000px browser width
    nav : false,
    dots : false,
    loop: false,
    autoplay:true,
    responsive: {     
      320: {
        items: 1
      },    
      481: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      },
      1400: {
        items: 2
      }
    }
  });
  
  $('body:not(.rtl) .ttcms-banner .ttbanner-wrap').owlCarousel({
    items :2, //1 items above 1000px browser width
    nav : false,
    dots : false,
    loop: false,
    autoplay:true,
    rtl:false,
    responsive: {
      992: {
        items: 2
      },
      600: {
        items: 2
      },
      100: {
        items:1
      }
    }
  });
  $('body.rtl .ttcms-banner .ttbanner-wrap').owlCarousel({
    items :2, //1 items above 1000px browser width
    nav : false,
    dots : false,
    loop: false,
    autoplay:true,
    rtl:true,
    responsive: {
      992: {
        items: 2
      },
      600: {
        items: 2
      },
      100: {
        items:1
      }
    }
  });

  var offer = $("body:not(.rtl) .ttcmsoffer-block .ttcmsoffer-content");
  offer.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });    

  var offer = $("body.rtl .ttcmsoffer-block .ttcmsoffer-content");
  offer.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rtl:true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });
  
  var banner = $(".product-thumb .slider-nav");
  banner.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });     


  $('body:not(.rtl) #tt-megamenu .list_product_menu_content').owlCarousel({
    items : 3, //1 items above 1000px browser width
    nav : true,
    autoPlay:true,
    autoplaySpeed:1000,
    stopOnHover: false,
    loop: false,
    dots : true,
    responsive: {
      768: {
        items: 3
      },
      360: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });
  $('body.rtl #tt-megamenu .list_product_menu_content').owlCarousel({
    items : 3, //1 items above 1000px browser width
    nav : true,
    autoPlay:true,
    autoplaySpeed:1000,
    rtl: true,
    stopOnHover: false,
    loop: false,
    dots : true,
    responsive: {
      768: {
        items: 3
      },
      360: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });

  $('.full_gallery_slider.owl-carousel').on('changed.owl.carousel',function(property){
    var currentItem=(property.item.index+1)-property.relatedTarget._clones.length/2;
    var totalItems=property.item.count;
    if (currentItem > totalItems || currentItem == 0) {
      currentItem = totalItems - (currentItem % totalItems);
    }
    $(".num").html(currentItem+'/'+totalItems)
  }); 
  
  $('body:not(.rtl) .full_gallery_slider.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    startPosition:0,
    center: true,
    dots:true,
    items:1,
    lazyLoad: true,
    nav:true,
    responsive:{
      0:{
        items:1,
        stagePadding: 60
      },
      600:{
        items:1,
        stagePadding: 150
      },
      768:{
        items:1,
        stagePadding: 180
      },
      868:{
        items:1,
        stagePadding: 250
      },
      1800:{
        items:1,
        stagePadding: 300
      }
    }
  });
  $('body.rtl .full_gallery_slider.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    startPosition:0,
    center: true,
    dots:true,
    items:1,
    rtl:true,
    lazyLoad: true,
    nav:true,
    responsive:{
      0:{
        items:1,
        stagePadding: 60
      },
      600:{
        items:1,
        stagePadding: 150
      },
      768:{
        items:1,
        stagePadding: 180
      },
      868:{
        items:1,
        stagePadding: 250
      },
      1800:{
        items:1,
        stagePadding: 300
      }
    }
  });

  $('body:not(.rtl) .tt-testimonial-wrap .testimonials_wrap').owlCarousel({
    items: 1, //1 items above 1000px browser width
    nav: false,
    dots: true,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      1279: {
        items: 1
      },
      100: {
        items: 1
      }
    }
  });
  $('body.rtl .tt-testimonial-wrap .testimonials_wrap').owlCarousel({
    items: 1, //1 items above 1000px browser width
    nav: false,
    rtl: true,
    dots: true,
    autoplay: false,
    loop: false,
    autoplayHoverPause: true,
    responsive: {
      1279: {
        items: 1
      },
      100: {
        items: 1
      }
    }
  });

 

  $('body:not(.rtl) .widget_top_rated_products .top-products').owlCarousel({
    items : 1, //1 items above 1000px browser width
    nav : true,
    dots : true,
    loop: false,
    autoplay:true,
    rtl:false,
    responsive: {
      1279: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });
  $('body.rtl .widget_top_rated_products .top-products').owlCarousel({
    items : 1, //1 items above 1000px browser width
    nav : true,
    dots : true,
    loop: false,
    autoplay:true,				
    rtl:true,
    responsive: {
      1279: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });


  jQuery(".spr-summary-actions-newreview").on('click',function(e) {
    e.preventDefault();
    jQuery(".spr-content").slideToggle( "slow" );
  });

  $(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a").click(function(){$(this).addClass("loading");setTimeout(function(){$(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a").removeClass("loading")},2000)});

  var gallery = $("#cmsgallery .image-content");
  gallery.owlCarousel({
    items : 7 , //10 items above 1000px browser width
    dots: false,
    loop: false,
    nav: true,
    rewind:false,
    autoplay:false,
    responsive: {
      100: {
        items: 1
      },
      315: {
        items: 2
      },
      396: {
        items: 3
      },
      544: {
        items: 4
      },
      768: {
        items: 5
      },
      992: {
        items: 6
      },
      1200: {
        items: 7
      }
    }
  });
      var prevScrollpos = window.pageYOffset;
  window.onscroll = function(e) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header-sticky").style.top = "0";
    } 
    else if ( $('body').hasClass('account-toggle') || $('body').hasClass('menu_hover') || $('body').hasClass('cart_toggle') || $('body').hasClass('search_toggle')) {
      document.getElementById("header-sticky").style.top = "0";
      e.stopPropagation();
    }
    else {
      document.getElementById("header-sticky").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  }

});

/*------------------------ Mega-menu Media Js -----------------*/
function megaMenu(){
  if(jQuery(window).width() < 992) {
    jQuery('body:not(.rtl) .header_2 #tt-megamenu .tt_menus_ul>.tt_menu_item>.tt_sub_menu_wrap').each(function() {    
      jQuery(this).css('margin-right', + (0) + 'px');      
    });
  }
  else{
    jQuery('body:not(.rtl) .header_2 .menu_wrapper #tt-megamenu .tt_menus_ul>.tt_menu_item>.tt_sub_menu_wrap').each(function() {
      var menu = jQuery('.main-header').offset();
      var dropdown = jQuery(this).parent().offset();
      var i = (dropdown.left + jQuery(this).outerWidth()) - (menu.left + jQuery('.main-header').outerWidth());
      if (i > 0) {
        jQuery(this).css('margin-left', '0');
      }
    });
  }
}
jQuery(document).ready(function() {
  megaMenu();
});
jQuery(window).resize(function() {
  megaMenu();
});

/*------------------------ END ------------------------*/

jQuery(window).scroll(function () {
  if(jQuery(document).height() > jQuery(window).height()){
    var scroll = jQuery(window).scrollTop();
    if (scroll > 100) {
      jQuery("#GotoTop").fadeIn();
    } else {
      jQuery("#GotoTop").fadeOut();
    }
  }
});

/*--------- Start js for userinfo -------------*/
function userinfo(){ 
  if(jQuery(window).width() <= 991) {

    jQuery(".header_3 .customer_account").appendTo(".header_3 .header-icons-wrap .myaccount");
    jQuery(".header_1 .header_currency").insertAfter(".header_1 #shopify-section-TT-megamenu .tt_menus_ul");
    jQuery(".header_1 .header_language").insertAfter(".header_1 #shopify-section-TT-megamenu .tt_menus_ul");

  } else  {

    jQuery(".header_3 .header-icons-wrap .myaccount .customer_account ").insertAfter(".header_3_wrapper");
    jQuery(".header_1 .header_currency").insertBefore(".header_1 .header-logo");
    jQuery(".header_1 .header_language").insertBefore(".header_1 .header-logo");

  }
}
jQuery(document).ready(function() {
  userinfo();
});
jQuery(window).resize(function() {
  userinfo();
});

function footercolumn() { 
  if ($(document).width() <= 991) {
    jQuery("#shopify-section-footer-model-3 .footer-bottom .footer-column").insertAfter("#shopify-section-footer-model-3 .footer-column.contactus");
  } 
  else if ($(document).width() >= 992) {
    jQuery("#shopify-section-footer-model-3 .footer-column.links").insertBefore("#shopify-section-footer-model-3 .footer-bottom .copyright");
  }
}
jQuery(document).ready(function() {
  footercolumn();
});
jQuery(window).resize(function() {
  footercolumn();
});
/*------------------ END -----------------------*/
function responsiveMenu(){
  if(jQuery(window).width() < 992) {

    jQuery("#shopify-section-TT-megamenu").insertAfter( ".main-header .menu_toggle_wrap .nav-toggle" );
    jQuery('.sub-nav__dropdown').css('display','none');
    jQuery("body.left-menu .header_3 .header-logo").insertAfter( ".header_3 .menu_toggle_wrap" );
    jQuery("body .header_3 .social-follow-us").insertAfter( ".header_3 .tt_menus_ul" );
    jQuery(".header_1 .header_1_wrapper .icons_wrap_div").appendTo( ".logo-header" );
  }
  else {
    jQuery(".header_style_2 #shopify-section-TT-megamenu").prependTo(".header_2 .menu_wrapper");
    jQuery(".header_style_3 #shopify-section-TT-megamenu").prependTo(".header_style_3 .menu_wrapper");
    jQuery("body.left-menu .header_3 .header-logo").insertBefore( ".header_3 .tt-mega_menu" );
    jQuery("body .header_3 .social-follow-us").insertAfter( ".header_3 .tt-mega_menu" );
    jQuery(".header_1 .header_1_wrapper .logo-header .icons_wrap_div").insertBefore( ".menu-icons .fixed-cart-wrap" );
    jQuery(".header_style_1 #shopify-section-TT-megamenu").appendTo(".header_1 .menu_wrapper");
  }
}

jQuery(document).ready(function() {
  responsiveMenu();

  jQuery(".product-write-review").on('click',function(e) {
    e.preventDefault();
    $('a[href=\'#tab-2\']').trigger('click');
    jQuery('html, body').animate({
      scrollTop: jQuery(".product_tab_wrapper").offset().top-150
    }, 1000);
  });
});

jQuery(window).resize(function() {
  responsiveMenu();
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
});

function height(){
  var maxHeight = $(".design_3 .product-block .product-img .image,.design_2 .product-block .image,.design_1 .product-single__thumbs a.product-single__thumbnail img").height();
  $(".design_3 .product-block .product-img .extra-video,.design_2 .product-block .extra-video,.design_1 .product-single__thumbs a.product-single__thumbnail.extra-video img").height(maxHeight);
  $(".design_3 .product-block .product-img .video,.design_2 .product-block .video,.design_1 .product-single__thumbs a.product-single__thumbnail.video img").height(maxHeight);
  $(".design_3 .product-block .product-img .model,.design_2 .product-block .model,.design_1 .product-single__thumbs a.product-single__thumbnail.model img").height(maxHeight);
}
$(document).ready(function(){height();});
$(window).resize(function(){height();});
$(window).scroll(function() {height();});

function productcartsticky() {
  if (jQuery(window).width() > 319) {
    if (jQuery(this).scrollTop() > 550) {
      jQuery('.add-to-cart-sticky').addClass("fixed");

    } else {
      jQuery('.add-to-cart-sticky').removeClass("fixed");
    }
  } else {
    jQuery('.add-to-cart-sticky').removeClass("fixed");
  }
}

$(document).ready(function() {
  productcartsticky();
});
jQuery(window).resize(function() {
  productcartsticky();
});
jQuery(window).scroll(function() {
  productcartsticky();
});

function footerToggle() {
  if(jQuery( window ).width() < 992) {     
    if(jQuery("body").hasClass("footer_style_2") || jQuery("body").hasClass("footer_style_3")) { 
      if(jQuery('.site-footer').hasClass('fixed_footer'))  {
        jQuery('.page-wrapper').css('margin-bottom','0px');
      }
      jQuery(".site-footer .footer-column h5").addClass( "toggle" );
      jQuery(".site-footer .footer-column").children(':nth-child(2)').css( 'display', 'none' );
      jQuery(".site-footer .footer-column.contactus").children(':nth-child(3)').css( 'display', 'none' );
      jQuery(".site-footer .footer-column.active").children(':nth-child(2)').css( 'display', 'block' );
      jQuery(".site-footer .footer-column h5.toggle").unbind("click");
      jQuery(".site-footer .footer-column h5.toggle").on('click',function() {
        jQuery(this).parent().toggleClass('active').children(':nth-child(2),:nth-child(3)').slideToggle( "fast" );
      }); 
    }
    jQuery('.left-sidebar.sidebar').insertAfter('.collection_wrapper');
    jQuery('.sidebar .collection_sidebar .sidebar-block').insertAfter('.filter-wrapper');
    jQuery(".right-sidebar.sidebar .widget > h4,.left-sidebar.sidebar .widget > h4,.blog-section .sidebar .widget > h4").addClass( "toggle" );
    jQuery(".right-sidebar.sidebar .widget,.left-sidebar.sidebar .widget,.blog-section .sidebar .widget").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".right-sidebar.sidebar .widget.active,.left-sidebar.sidebar .widget.active,.blog-section .sidebar .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").unbind("click");
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });   
    jQuery(".collection_right .sidebar-block .widget > h4,.collection_left .sidebar-block .widget > h4,.filter-toggle-wrap .sidebar-block .widget > h4").addClass( "toggle" );
    jQuery(".collection_right .sidebar-block .widget,.collection_left .sidebar-block .widget,.filter-toggle-wrap .sidebar-block .widget ").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".collection_right .sidebar-block .widget.active,.collection_left .sidebar-block .widget.active,.filter-toggle-wrap .sidebar-block .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").unbind("click");
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });  
  }else{
    jQuery('.sidebar-block').prependTo('.collection_sidebar');
    if(jQuery('.site-footer').hasClass('fixed_footer'))  {
      var footer_h = jQuery('.site-footer.fixed_footer').height();
      jQuery('.page-wrapper').css('margin-bottom',footer_h+'px');
    }
    jQuery('.left-sidebar.sidebar').insertBefore('.collection_wrapper');
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").unbind("click");
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").removeClass( "toggle" );
    jQuery(".sidebar .widget,.sidebar-block .widget").children(':nth-child(2)').css( 'display', 'block' );

    jQuery(".site-footer .footer-column h5").unbind("click");
    jQuery(".site-footer .footer-column h5").removeClass( "toggle" );
    jQuery(".site-footer .footer-column").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".site-footer .footer-column.contactus").children(':nth-child(3)').css( 'display', 'block' );

  }
}
jQuery(document).ready(function() {
  footerToggle();
});
jQuery(window).resize(function() {
  footerToggle();
});

function splitStr(string,seperator){
  return string.split(seperator);
}

function countDownIni(countdown) {
  $(countdown).each(function() {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10)
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown')
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).parent(".simple-countdown").addClass("countdown-block");
      $(this).parent().addClass('countdown-enable');
      console.log();
      countdown.countdown(promoperiod, function(event) {
        countdown.html(event.strftime('<span><span class="left-txt">LEFT</span><span>%D</span><span class="time-txt">days</span></span>' + '<span><span>%H</span><span class="time-txt">hours</span></span>' + '<span><span>%M</span><span class="time-txt">min</span></span>' + '<span><span class="second">%S</span><span class="time-txt">sec</span></span>'))
      })
    }
  })
}

function hb_animated_contents() {
  $(".hb-animate-element:in-viewport").each(function (i) {
    var $this = $(this);
    if (!$this.hasClass('hb-in-viewport')) {
      setTimeout(function () {
        $this.addClass('hb-in-viewport');
      }, 180 * i);
    }
  });
}

$(window).scroll(function () {
  hb_animated_contents();
});
$(window).load(function () {
  hb_animated_contents();
});

function sidebarsticky() { 
  if ($(document).width() <= 1199) {
    jQuery('.left-sidebar.sidebar,.right-sidebar.sidebar.collection_right,.collection_left').theiaStickySidebar({
      additionalMarginBottom: 30,
      additionalMarginTop: 30
    });
  } 
  else if ($(document).width() >= 1200) {
    jQuery('.left-sidebar.sidebar,.right-sidebar.sidebar,.collection_right,.collection_left').theiaStickySidebar({
      additionalMarginBottom: 30,
      additionalMarginTop: 130
    });
  }
}
jQuery(document).ready(function() {
  sidebarsticky();
});
jQuery(window).resize(function() {
  sidebarsticky();
});
/* responsive accordian menu*/
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    // Variables privadas
    var links = this.el.find('li.tt_mm_hassub .mobile-nav__sublist-trigger');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('li.tt_mm_hassub .tt_sub_menu_wrap').not($next).slideUp().parent().removeClass('open');
    };
  }	

  var accordion = new Accordion($('.tt_menus_ul'), false);
});

// grid view and list view resposice js
function bindgrid() {
if (localStorage.getItem('display') == 'grid') {
jQuery('#grid-view').trigger('click')
} 
else if (localStorage.getItem('display') == 'list') 
{
 jQuery('#list-view').trigger('click') 
} 
else if (localStorage.getItem('display') == 'short-list') 
{
jQuery('#short-list-view').trigger('click') 
} 
else 
{
jQuery('#grid-view').trigger('click')
}
  
if(jQuery(window).width() < 481) 
{	
if(jQuery("#list-view").hasClass("active")) 
{
jQuery("#short-list-view").toggleClass("active");
jQuery('#short-list-view').trigger('click')
jQuery("#list-view").removeClass("active");			
}
}
}

$(document).ready(function(){
bindgrid();
});
$(window).load(function(){
bindgrid();
});
$(window).resize(function() {	
bindgrid();
});	


// addto cart css start
function productcartsticky() {
  if (jQuery(window).width() > 319) {
    if (jQuery(this).scrollTop() > 550) {
      jQuery('.add-to-cart-sticky').addClass("fixed");

    } else {
      jQuery('.add-to-cart-sticky').removeClass("fixed");
    }
  } else {
    jQuery('.add-to-cart-sticky').removeClass("fixed");
  }
}

$(document).ready(function() {
  productcartsticky();
});
jQuery(window).resize(function() {
  productcartsticky();
});
jQuery(window).scroll(function() {
  productcartsticky();
});