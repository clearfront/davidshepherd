//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Fade all panels
 $('.boxContainer').mouseover(function(){
   $('.boxContainer').stop(true).animate({opacity: 0.3},500);
   $(this).stop(true).animate({opacity: 1});
   
 });
 
 $('.lightGallery').mouseout(function() {
	  $('.boxContainer').stop(true).animate({opacity: 1},500);
 });
 



 




//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 15,
    center: new google.maps.LatLng(53.472691, -2.2272345),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "saturation": -58 },
      { "lightness": 60 },
      { "color": "#424242" },
      { "visibility": "on" },
      { "gamma": 1.21 }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#000000" },
      { "gamma": 1.06 }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "color": "#424242" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  }
]
};

var map = new google.maps.Map(document.getElementById('map'), myOptions);
