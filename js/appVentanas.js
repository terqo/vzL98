    const credits = document.getElementById('ventan_credits');
    const about = document.getElementById('ventan_about');
    const tresd = document.getElementById('ventan_3d');
    const sys = document.getElementById('ventan_sys');
    const documento = document.getElementById('ventan_document');
    const alerta = document.getElementById('ventan_alert');


    function Creditos(){
        if(credits.style.display !== ""){
            credits.style.display ="";
        }else {
            credits.style.display = "";
        }
    }

    //div4_about
    function About(){
        if(about.style.display !== ""){
            about.style.display ="";
        }else {
            about.style.display = "";
        }
    }
    //div5_3d
    function TRESD(){
        if(tresd.style.display !== ""){
            tresd.style.display ="";
        }else {
            tresd.style.display = "";
        }
    }
    //div6_sys
    function System(){
        if(sys.style.display !== ""){
            sys.style.display ="";
        }else {
            sys.style.display = "";
        }
    }
    //div7_document
    function Docs(){
        if(documento.style.display !== ""){
            documento.style.display ="";
        }else {
            documento.style.display = "";
        }
    }

    //abrir y cerrar divs
    //cerrar

    //div 1_alerta
    const btnCerrar = document.getElementById('Close1');
    btnCerrar.onclick = function(){
        if(alerta.style.display !== "none"){
            alerta.style.display ="none";
        }else {
            alerta.style.display = "block";
        }
    }
    //div2_credits
    const btnCerrar2 = document.getElementById('Close2');
    btnCerrar2.onclick = function(){
        if(credits.style.display !== "none"){
            credits.style.display ="none";
        }else {
            credits.style.display = "block";
        }
    }
    //div4_about
    const btnCerrar4 = document.getElementById('Close4');
    btnCerrar4.onclick = function(){
        if(about.style.display !== "none"){
            about.style.display ="none";
        }else {
            about.style.display = "block";
        }
    }
    //div5_3d
    const btnCerrar5 = document.getElementById('Close5');
    btnCerrar5.onclick = function(){
        if(tresd.style.display !== "none"){
            tresd.style.display ="none";
        }else {
            tresd.style.display = "block";
        }
    }
    //div6_sys
    const btnCerrar6 = document.getElementById('Close6');
    btnCerrar6.onclick = function(){
        if(sys.style.display !== "none"){
            sys.style.display ="none";
        }else {
            sys.style.display = "block";
        }
    }
    //div7_documents
    const btnCerrar7 = document.getElementById('Close7');
    btnCerrar7.onclick = function(){
        if(documento.style.display !== "none"){
            documento.style.display ="none";
        }else {
            documento.style.display = "block";
        }
    }
    //----------------------------------------------------------------
    //script para mover divs dentro del body
    var i = 0;

    alerta.onmousedown = function (e) {

        var left = parseInt( window.getComputedStyle(alerta).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(alerta).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            alerta.style.left = left - dx + "px";
            alerta.style.top = top - dy + "px";
            alerta.style.zIndex = i++;
        };
    };

    alerta.onmouseup = function () {
        document.onmousemove = null;
    };

    function bringToFront() {
        alerta.style.zIndex = "1";
    }

    //---------------------------------
    credits.onmousedown = function (e) {

        var left = parseInt( window.getComputedStyle(credits).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(credits).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            credits.style.left = left - dx + "px";
            credits.style.top = top - dy + "px";
            credits.style.zIndex = i++;
        };
    };

    credits.onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    about.onmousedown = function (e) {

        var left = parseInt( window.getComputedStyle(about).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(about).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            about.style.left = left - dx + "px";
            about.style.top = top - dy + "px";
            about.style.zIndex = i++;
        };
    };

    about.onmouseup = function () {
        document.onmousemove = null;
    };
    //---------------------------------
        // tresd.onmousedown = function (e) {

        //     var left = parseInt( window.getComputedStyle(tresd).getPropertyValue("left") );
        //     var top = parseInt( window.getComputedStyle(tresd).getPropertyValue("top") );
        //     var mouseX = e.clientX;
        //     var mouseY = e.clientY;

        //     document.onmousemove = function (e) {
        //         var dx = mouseX - e.clientX;
        //         var dy = mouseY - e.clientY;

        //         tresd.style.left = left - dx + "px";
        //         tresd.style.top = top - dy + "px";
        //         tresd.style.zIndex = i++;
        //     };
        // };

        // tresd.onmouseup = function () {
        //     document.onmousemove = null;
        // };
    //---------------------------------
    sys.onmousedown = function (e) {
        
        var left = parseInt( window.getComputedStyle(sys).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(sys).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            sys.style.left = left - dx + "px";
            sys.style.top = top - dy + "px";
            sys.style.zIndex = i++;
        };
    };

    sys.onmouseup = function () {
        document.onmousemove = null;
    };
    //---------------------------------
    documento.onmousedown = function (e) {
    
        var left = parseInt( window.getComputedStyle(documento).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(documento).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            documento.style.left = left - dx + "px";
            documento.style.top = top - dy + "px";
            documento.style.zIndex = i++;
        };
    };
    documento.onmouseup = function () {
        document.onmousemove = null;
    };
    //---------------------------------