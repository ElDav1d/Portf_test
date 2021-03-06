

$(document).foundation();



$(function () {
  
  var filterList = {
  
    init: function () {
    
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter' 
        },
      
      });               
    
    }

  };
  
  // Run the show!
  filterList.init();
  
  
}); 






$(document).ready(function(){
 
 $('.chocolat-parent').Chocolat({
 	imageSize : "cover"
 	});
 });






$(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -20
        }, 1000);
        return false;
      }
    }
  });
});




var map = L.map('map').setView([39.470150, -0.376282],5);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 25
}).addTo(map);

var marker = L.marker([39.464741, -0.375517]).addTo(map);





