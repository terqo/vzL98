//reloj que marca la hora exacta de tu ubicacion u ip
setInterval(displayClock, 1000);
function displayClock() {
    
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var en = 'am';

    if (hrs > 12){
        en = 'pm';
    }
    if (hrs > 12){
        hrs = hrs - 12;
    }
    if (hrs == 0){
        hrs = 12;
    }
    if (hrs <10 ){
        hrs = '0' + hrs;
    }
        
    if (min < 10 ){
        min = '0' + min;
    }

    document.getElementById('reloj').innerHTML = hrs + ':' + min + ' ' + en;

}

//script para mover divs dentro del body
ventan_1.onmousedown = function (e) {
    var ventan_1 = document.getElementById("ventan_1");

    var left = parseInt( window.getComputedStyle(ventan_1).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_1).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_1.style.left = left - dx + "px";
        ventan_1.style.top = top - dy + "px";
    };
};

ventan_1.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_2.onmousedown = function (e) {
    var ventan_2 = document.getElementById("ventan_2");

    var left = parseInt( window.getComputedStyle(ventan_2).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_2).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_2.style.left = left - dx + "px";
        ventan_2.style.top = top - dy + "px";
    };
};

ventan_2.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------

//popups al momento de recargar la pagina
/*
window.onload = function() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "block";
    popup.style.display = "block";

document.getElementById("CloseBtn").onclick = function(){
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
    overlay.style.display = "none";
    popup.style.display = "none";      
  }
 };
 */