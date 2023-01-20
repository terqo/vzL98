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

//div4_about
const abrirDiv4 = document.getElementById('ventan_about');

function Abrir4(){
    if(abrirDiv4.style.display !== ""){
        abrirDiv4.style.display ="";
    }else {
        abrirDiv4.style.display = "";
    }
}
//div5_3d
const abrirDiv5 = document.getElementById('ventan_3d');

function Abrir5(){
    if(abrirDiv5.style.display !== ""){
        abrirDiv5.style.display ="";
    }else {
        abrirDiv5.style.display = "";
    }
}
//div6_sys
const abrirDiv6 = document.getElementById('ventan_sys');

function Abrir6(){
    if(abrirDiv6.style.display !== ""){
        abrirDiv6.style.display ="";
    }else {
        abrirDiv6.style.display = "";
    }
}
//div7_document
const abrirDiv7 = document.getElementById('ventan_document');

function Abrir7(){
    if(abrirDiv7.style.display !== ""){
        abrirDiv7.style.display ="";
    }else {
        abrirDiv7.style.display = "";
    }
}

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
//div5_3d
const cerrarDiv5 = document.getElementById('ventan_3d');
const btnCerrar5 = document.getElementById('Close5');

btnCerrar5.onclick = function(){
    if(cerrarDiv5.style.display !== "none"){
        cerrarDiv5.style.display ="none";
    }else {
        cerrarDiv5.style.display = "block";
    }
}
//div6_sys
const cerrarDiv6 = document.getElementById('ventan_sys');
const btnCerrar6 = document.getElementById('Close6');

btnCerrar6.onclick = function(){
    if(cerrarDiv6.style.display !== "none"){
        cerrarDiv6.style.display ="none";
    }else {
        cerrarDiv6.style.display = "block";
    }
}
//div7_documents
const cerrarDiv7 = document.getElementById('ventan_document');
const btnCerrar7 = document.getElementById('Close7');

btnCerrar7.onclick = function(){
    if(cerrarDiv7.style.display !== "none"){
        cerrarDiv7.style.display ="none";
    }else {
        cerrarDiv7.style.display = "block";
    }
}

//----------------------------------------------------------------
//script para mover divs dentro del body
var i = 0;

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
        ventan_alert.style.zIndex = i++;
    };
};

ventan_alert.onmouseup = function () {
    document.onmousemove = null;
};

function bringToFront() {
    ventan_alert.style.zIndex = "1";
}

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
        ventan_credits.style.zIndex = i++;
    };
};

ventan_credits.onmouseup = function () {
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
        ventan_about.style.zIndex = i++;
    };
};

ventan_about.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_3d.onmousedown = function (e) {
    var ventan_3d = document.getElementById("ventan_3d");

    var left = parseInt( window.getComputedStyle(ventan_3d).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_3d).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_3d.style.left = left - dx + "px";
        ventan_3d.style.top = top - dy + "px";
        ventan_3d.style.zIndex = i++;
    };
};

ventan_3d.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_sys.onmousedown = function (e) {
    var ventan_sys = document.getElementById("ventan_sys");

    var left = parseInt( window.getComputedStyle(ventan_sys).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_sys).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_sys.style.left = left - dx + "px";
        ventan_sys.style.top = top - dy + "px";
        ventan_sys.style.zIndex = i++;
    };
};

ventan_sys.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------
ventan_document.onmousedown = function (e) {
    var ventan_document = document.getElementById("ventan_document");

    var left = parseInt( window.getComputedStyle(ventan_document).getPropertyValue("left") );
    var top = parseInt( window.getComputedStyle(ventan_document).getPropertyValue("top") );
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    document.onmousemove = function (e) {
        var dx = mouseX - e.clientX;
        var dy = mouseY - e.clientY;

        ventan_document.style.left = left - dx + "px";
        ventan_document.style.top = top - dy + "px";
        ventan_document.style.zIndex = i++;
    };
};
ventan_document.onmouseup = function () {
    document.onmousemove = null;
};
//---------------------------------