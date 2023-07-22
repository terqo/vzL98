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
var nicks = ['keepitdopecop', 'oscrack', 'oscar@blue', 'oscarvzn', 'secunene','44hz', 'oscarDGAF', 'estarqui','terqoo','140hz','oscar'];
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
//esconder botones de las ventanas
document.getElementById("creditsBtn").style.display = "none";
document.getElementById("3dBtn").style.display = "none";
document.getElementById("aboutBtn").style.display = "none";
document.getElementById("systemBtn").style.display = "none";
document.getElementById("projectsBtn").style.display = "none";

//inicio boton home menu Windows
const abrirMenu = document.getElementById('menu');
const btnMenu = document.getElementById('menuBtn');


function AbrirMenu(){
    abrirMenu.style.display = abrirMenu.style.display === "none" ? "block" : "none";
    btnMenu.classList.contains('active') ? btnMenu.classList.remove('active') : btnMenu.classList.add('active');
}

// //---------------------------------------------------
// const cerrarMenu = document.getElementById('menu');


// btnMenu.onclick = function(){
//     cerrarMenu.style.display = cerrarMenu.style.display === "none" ? "block" : "none";
//     btnMenu.classList.remove('active'); 

// }

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
