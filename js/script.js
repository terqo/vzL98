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
document.getElementById("ventan_chatbot").style.display = "none";
document.getElementById("ventan_dominios").style.display = "none";


//esconder botones de las ventanas
document.getElementById("creditsBtn").style.display = "none";
document.getElementById("3dBtn").style.display = "none";
document.getElementById("aboutBtn").style.display = "none";
document.getElementById("systemBtn").style.display = "none";
document.getElementById("projectsBtn").style.display = "none";
document.getElementById("musikBtn").style.display = "none";
document.getElementById("mailBtn").style.display = "none";
document.getElementById("chatBtn").style.display = "none";
document.getElementById("dominiosBtn").style.display = "none";


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

// Función para cerrar el menú
function cerrarMenu() {
    abrirMenu.style.display = "none";
    btnMenu.classList.remove('active');
}

function AbrirMenu(event){
    // Detener la propagación del evento para que no llegue al document
    event.stopPropagation();
    
    if (abrirMenu.style.display === "none") {
        abrirMenu.style.display = "block";
        btnMenu.classList.add('active');
    } else {
        cerrarMenu();
    }
}

// Event listener para cerrar el menú cuando se hace clic en cualquier parte del documento
document.addEventListener('click', function(event) {
    // Si el menú está abierto y el clic no fue en el menú ni en el botón de inicio
    if (abrirMenu.style.display === "block" && 
        !abrirMenu.contains(event.target) && 
        !btnMenu.contains(event.target)) {
        cerrarMenu();
    }
});

// Prevenir que los clics dentro del menú cierren el menú
abrirMenu.addEventListener('click', function(event) {
    event.stopPropagation();
});

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
