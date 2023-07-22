    //divs
    const about = document.getElementById('ventan_about');
    const tresd = document.getElementById('ventan_3d');
    const sys = document.getElementById('ventan_sys');
    const documento = document.getElementById('ventan_document');
    const alerta = document.getElementById('ventan_alert');
    const credits = document.getElementById('ventan_credits');
    //botones cerrar divs 
    const btnCerrar = document.getElementById('Close1');
    const btnCerrar2 = document.getElementById('Close2');
    const btnCerrar4 = document.getElementById('Close4');
    const btnCerrar5 = document.getElementById('Close5');
    const btnCerrar6 = document.getElementById('Close6');
    const btnCerrar7 = document.getElementById('Close7');
    //botones ventanas
    const creditsBtn = document.getElementById('creditsBtn');
    const Btn3d = document.getElementById('3dBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const systemBtn = document.getElementById('systemBtn');
    const projectsBtn = document.getElementById('projectsBtn');


    function Creditos(){
        credits.style.display = credits.style.display === "none" ? "" : "none";
        creditsBtn.style.display = creditsBtn.style.display === "none" ? "" : "none";
        creditsBtn.classList.add('active'); 
    }
    //div4_about
    function About(){
        about.style.display = about.style.display === "none" ? "" : "none";
        aboutBtn.style.display = aboutBtn.style.display === "none" ? "" : "none";
        aboutBtn.classList.add('active'); 
    }
    //div5_3d
    function TRESD(){
        tresd.style.display = tresd.style.display === "none" ? "" : "none";
        Btn3d.style.display = Btn3d.style.display === "none" ? "" : "none";
        Btn3d.classList.add('active'); 
    }
    //div6_sys
    function System(){
        sys.style.display = sys.style.display === "none" ? "" : "none";
        systemBtn.style.display = systemBtn.style.display === "none" ? "" : "none";
        systemBtn.classList.add('active'); 
    }
    //div7_document
    function Docs(){
        documento.style.display = documento.style.display === "none" ? "" : "none";
    }
    //abrir y cerrar divs
    
    //cerrar
    //div 1_alerta
    btnCerrar.onclick = function(){
        alerta.style.display = alerta.style.display === "none" ? "block" : "none";
    }
    //div2_credits
    btnCerrar2.onclick = function(){
        credits.style.display = credits.style.display === "none" ? "block" : "none";
        creditsBtn.style.display = creditsBtn.style.display === "none" ? "" : "none";
    }
    //div4_about
    btnCerrar4.onclick = function(){
        about.style.display = about.style.display === "none" ? "block" : "none";
        aboutBtn.style.display = aboutBtn.style.display === "none" ? "" : "none";
    }
    //div5_3d
    btnCerrar5.onclick = function(){
        tresd.style.display = tresd.style.display === "none" ? "block" : "none";
        Btn3d.style.display = Btn3d.style.display === "none" ? "" : "none";
    }
    //div6_sys
    btnCerrar6.onclick = function(){
        sys.style.display = sys.style.display === "none" ? "block" : "none";
        systemBtn.style.display = systemBtn.style.display === "none" ? "" : "none";
    }
    //div7_documents
    btnCerrar7.onclick = function(){
        documento.style.display = documento.style.display === "none" ? "block" : "none";
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
    function bringToFront() {
        document.style.zIndex = i++;
    }