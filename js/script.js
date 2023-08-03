//esconder todas las ventanas
//document.getElementById("ventan_alert").style.display = "none";
document.getElementById("ventan_credits").style.display = "none";
document.getElementById("ventan_about").style.display = "none";
document.getElementById("ventan_3d").style.display = "none";
document.getElementById("ventan_sys").style.display = "none";
document.getElementById("ventan_document").style.display = "none";
document.getElementById("ventan_musik").style.display = "none";
document.getElementById("ventan_projects").style.display = "none";
document.getElementById("ventan_mail").style.display = "none";
document.getElementById("menu").style.display = "none";

//esconder botones de las ventanas
document.getElementById("creditsBtn").style.display = "none";
document.getElementById("3dBtn").style.display = "none";
document.getElementById("aboutBtn").style.display = "none";
document.getElementById("systemBtn").style.display = "none";
document.getElementById("projectsBtn").style.display = "none";
document.getElementById("musikBtn").style.display = "none";
document.getElementById("mailBtn").style.display = "none";

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

//inicio boton home menu Windows
const abrirMenu = document.getElementById('menu');
const btnMenu = document.getElementById('menuBtn');


function AbrirMenu(){
    abrirMenu.style.display = abrirMenu.style.display === "none" ? "block" : "none";
    btnMenu.classList.contains('active') ? btnMenu.classList.remove('active') : btnMenu.classList.add('active');
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
//---------------------------------------------------------------

//email text
const inputElement = document.getElementById('text22');
const h4Element = document.getElementById('mailSubject');

// Evento onInput para actualizar el h4 cada vez que se escribe en el input
inputElement.addEventListener('input', () => {
  const inputValue = inputElement.value.trim(); // Obtener el valor del input sin espacios en blanco al principio o al final

  // Verificar si el input está vacío
  if (inputValue === '') {
    h4Element.textContent = 'New Email'; // Restablecer el valor del h4 a "New Email"
  } else {
    h4Element.textContent = inputValue; // Actualizar el h4 con el contenido del input
  }
});
//---------------------------------------------------------------
