

$(document).foundation();



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

$('select').dropdown({

  animate: true,
  speed: 300,
  autoClose: true,
  autoToggle: true,
  autoTitle: true,
  autoResize: 300

})



var map = L.map('map').setView([39.464741, -0.375517],15);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 25
}).addTo(map);

var marker = L.marker([39.464741, -0.375517]).addTo(map);

