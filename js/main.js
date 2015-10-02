$(document).ready(function() {
       $('.datetimepicker').datetimepicker({
       lang:'es',
       theme:'mycalendar',
       i18n:{
        es: { 
          months: [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
          ],
          dayOfWeek: [
          "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
            ] 
            }
        },
       timepicker:false,
       format:'d.m.Y'
      });
     });

$(document).foundation();



$(document).ready(function(){
 
 $('.chocolat-parent').Chocolat({
 	imageSize : "cover"
 	});
 });




var map = L.map('map').setView([39.464741, -0.375517],15);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 25
}).addTo(map);

var marker = L.marker([39.464741, -0.375517]).addTo(map);