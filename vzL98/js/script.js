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
//random nicknames
var nicks = ['keepitdopecop', 'oscrack', 'oscar@blue', 'oscarvzn', 'popscar', 'secunene','44hz','fvckoscqr', 'oscarDGAF', 'estarqui','terqoo','140hz','oscar'];
function nicknames() {
 document.getElementById('nicknames').value = nicks[Math.floor(Math.random() * nicks.length)]       
}

//esconder todas las ventanas
//document.getElementById("ventan_alert").style.display = "none";
document.getElementById("ventan_credits").style.display = "none";
document.getElementById("ventan_about").style.display = "none";
document.getElementById("ventan_3d").style.display = "none";
document.getElementById("ventan_sys").style.display = "none";
document.getElementById("ventan_document").style.display = "none";
document.getElementById("menu").style.display = "none";

//inicio boton home menu Windows
const abrirMenu = document.getElementById('menu');

function AbrirMenu(){
    if(abrirMenu.style.display !== ""){
        abrirMenu.style.display ="";
        abrirMenu.classList.toggle('active');
    }else {
        abrirMenu.style.display = "";
    }
}

//---------------------------------------------------
const cerrarMenu = document.getElementById('menu');
const btnMenu = document.getElementById('menuBtn');

btnMenu.onclick = function(){
    if(cerrarMenu.style.display !== "none"){
        cerrarMenu.style.display ="none";
    }else {
        cerrarMenu.style.display = "block";
    }
}

//---------------------------------------------------------------
//spotify

fetch(
    "https://api.github.com/repos/140hz/spotify-widget/contents/player.min.html"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var iframe = document.getElementById("github-iframe");
      iframe.src =
        "data:text/html;charset=utf-8;base64," +
        encodeURIComponent(data["content"]);
});
