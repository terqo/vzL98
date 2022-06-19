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
//esconder todas las ventanas
document.getElementById("ventan_credits").style.display = "none";
document.getElementById("ventan_terminal").style.display = "none";
//script para mover divs dentro del body
ventan_alert.onmousedown = function (e) {
    var ventan_alert = document.getElementById("ventan_alert");

    var left = parseInt( window.getComputedStyle(ventan_alert).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_alert).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_alert.style.left = left - dx + "px";
        ventan_alert.style.top = top - dy + "px";
    };
};

ventan_alert.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_credits.onmousedown = function (e) {
    var ventan_credits = document.getElementById("ventan_credits");

    var left = parseInt( window.getComputedStyle(ventan_credits).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_credits).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_credits.style.left = left - dx + "px";
        ventan_credits.style.top = top - dy + "px";
    };
};

ventan_credits.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_terminal.onmousedown = function (e) {
    var ventan_terminal = document.getElementById("ventan_terminal");

    var left = parseInt( window.getComputedStyle(ventan_terminal).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_terminal).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_terminal.style.left = left - dx + "px";
        ventan_terminal.style.top = top - dy + "px";
    };
};

ventan_terminal.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_about.onmousedown = function (e) {
    var ventan_about = document.getElementById("ventan_about");

    var left = parseInt( window.getComputedStyle(ventan_about).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_about).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_about.style.left = left - dx + "px";
        ventan_about.style.top = top - dy + "px";
    };
};

ventan_about.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
//abrir y cerrar divs
//cerrar
//div 1_alerta
const cerrarDiv = document.getElementById('ventan_alert');
const btnCerrar = document.getElementById('Close1');

btnCerrar.onclick = function(){
    if(cerrarDiv.style.display !== "none"){
        cerrarDiv.style.display ="none";
    }else {
        cerrarDiv.style.display = "block";
    }
}
//div2_credits
const cerrarDiv2 = document.getElementById('ventan_credits');
const btnCerrar2 = document.getElementById('Close2');

btnCerrar2.onclick = function(){
    if(cerrarDiv2.style.display !== "none"){
        cerrarDiv2.style.display ="none";
    }else {
        cerrarDiv2.style.display = "block";
    }
}

//div3_terminal
const cerrarDiv3 = document.getElementById('ventan_terminal');
const btnCerrar3 = document.getElementById('Close3');

btnCerrar3.onclick = function(){
    if(cerrarDiv3.style.display !== "none"){
        cerrarDiv3.style.display ="none";
    }else {
        cerrarDiv3.style.display = "block";
    }
}
//div4_about
const cerrarDiv4 = document.getElementById('ventan_about');
const btnCerrar4 = document.getElementById('Close4');

btnCerrar4.onclick = function(){
    if(cerrarDiv4.style.display !== "none"){
        cerrarDiv4.style.display ="none";
    }else {
        cerrarDiv4.style.display = "block";
    }
}
//abrir
//div2
const abrirDiv2 = document.getElementById('ventan_credits');

function Abrir2(){
    if(abrirDiv2.style.display !== ""){
        abrirDiv2.style.display ="";
    }else {
        abrirDiv2.style.display = "";
    }
}

//div3
const abrirDiv3 = document.getElementById('ventan_terminal');

function Abrir3(){
    if(abrirDiv3.style.display !== ""){
        abrirDiv3.style.display ="";
    }else {
        abrirDiv3.style.display = "";
    }
}


//div4_about
const abrirDiv4 = document.getElementById('ventan_about');

function Abrir4(){
    if(abrirDiv4.style.display !== ""){
        abrirDiv4.style.display ="";
    }else {
        abrirDiv4.style.display = "";
    }
}
