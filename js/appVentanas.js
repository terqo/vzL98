    //divs
    const about = document.getElementById('ventan_about');
    const tresd = document.getElementById('ventan_3d');
    const sys = document.getElementById('ventan_sys');
    const documento = document.getElementById('ventan_document');
    const alerta = document.getElementById('ventan_alert');
    const credits = document.getElementById('ventan_credits');
    const musik = document.getElementById('ventan_musik');
    const projects = document.getElementById('ventan_projects');
    const mail = document.getElementById('ventan_mail');
    const chatbut = document.getElementById('ventan_chatbot');
    const dominios = document.getElementById('ventan_dominios');



    //botones cerrar divs 
    const btnCerrar = document.getElementById('Close1');
    const btnCerrar2 = document.getElementById('Close2');
    const btnCerrar3 = document.getElementById('Close3');
    const btnCerrar4 = document.getElementById('Close4');
    const btnCerrar5 = document.getElementById('Close5');
    const btnCerrar6 = document.getElementById('Close6');
    const btnCerrar7 = document.getElementById('Close7');
    const btnCerrar8 = document.getElementById('Close8');
    const btnCerrar9 = document.getElementById('Close9');
    const btnCerrar10 = document.getElementById('Close10');
    const btnCerrar11 = document.getElementById('Close11');


    //botones ventanas
    const creditsBtn = document.getElementById('creditsBtn');
    const Btn3d = document.getElementById('3dBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const systemBtn = document.getElementById('systemBtn');
    const projectsBtn = document.getElementById('projectsBtn');
    const musikBtn = document.getElementById('musikBtn');
    const mailBtn = document.getElementById('mailBtn');
    const chatBtn = document.getElementById('chatBtn');
    const dominiosBtn = document.getElementById('dominiosBtn');


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
    //div_musik
    function musika(){
        musik.style.display = musik.style.display === "none" ? "" : "none";
        musikBtn.style.display = musikBtn.style.display === "none" ? "" : "none";
        musikBtn.classList.add('active');
    } 
    //div_projects
    function project(){
        projects.style.display = projects.style.display === "none" ? "" : "none";
        projectsBtn.style.display = projectsBtn.style.display === "none" ? "" : "none";
        projectsBtn.classList.add('active');
    }
    //div mail
    function Mail(){
        mail.style.display = mail.style.display === "none" ? "" : "none";
        mailBtn.style.display = mailBtn.style.display === "none" ? "" : "none";
        mailBtn.classList.add('active'); 
    }
    //div chat
    function Chat(){
        chatbut.style.display = chatbut.style.display === "none" ? "" : "none";
        chatBtn.style.display = chatBtn.style.display === "none" ? "" : "none";
        chatBtn.classList.add('active'); 
    }
    //div_dominios
    function Dominios(){
        dominios.style.display = dominios.style.display === "none" ? "" : "none";
        dominiosBtn.style.display = dominiosBtn.style.display === "none" ? "" : "none";
        dominiosBtn.classList.add('active'); 
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
    //div3_musik
    btnCerrar3.onclick = function(){
        musik.style.display = musik.style.display === "none" ? "block" : "none";
        musikBtn.style.display = musikBtn.style.display === "none" ? "" : "none";
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
    //div7_projects
    btnCerrar8.onclick = function(){
        projects.style.display = projects.style.display === "none" ? "block" : "none";
        projectsBtn.style.display = projectsBtn.style.display === "none" ? "" : "none";
    }
    //div_mail
    btnCerrar9.onclick = function(){
        mail.style.display = mail.style.display === "none" ? "block" : "none";
        mailBtn.style.display = mailBtn.style.display === "none" ? "" : "none";
    }
    //div_mail
    btnCerrar10.onclick = function(){
        chatbut.style.display = chatbut.style.display === "none" ? "block" : "none";
        chatBtn.style.display = chatBtn.style.display === "none" ? "" : "none";
    }
    //div_dominios
    btnCerrar11.onclick = function(){
        dominios.style.display = dominios.style.display === "none" ? "block" : "none";
        dominiosBtn.style.display = dominiosBtn.style.display === "none" ? "" : "none";
    }
    //----------------------------------------------------------------
    //script para mover divs dentro del body
    var i = 0;

    alerta.querySelector('.title-bar').onmousedown = function (e) {
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

    alerta.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    credits.querySelector('.title-bar').onmousedown = function (e) {
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

    credits.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    about.querySelector('.title-bar').onmousedown = function (e) {
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

    about.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    tresd.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(tresd).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(tresd).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            tresd.style.left = left - dx + "px";
            tresd.style.top = top - dy + "px";
            tresd.style.zIndex = i++;
        };
    };

    tresd.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    sys.querySelector('.title-bar').onmousedown = function (e) {
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

    sys.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    documento.querySelector('.title-bar').onmousedown = function (e) {
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

    documento.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    musik.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(musik).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(musik).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            musik.style.left = left - dx + "px";
            musik.style.top = top - dy + "px";
            musik.style.zIndex = i++;
        };
    };

    musik.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    projects.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(projects).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(projects).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            projects.style.left = left - dx + "px";
            projects.style.top = top - dy + "px";
            projects.style.zIndex = i++;
        };
    };

    projects.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    function bringToFront() {
        document.style.zIndex = i++;
    }

    //---------------------------------
    mail.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(mail).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(mail).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            mail.style.left = left - dx + "px";
            mail.style.top = top - dy + "px";
            mail.style.zIndex = i++;
        };
    };

    mail.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    chatbut.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(chatbut).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(chatbut).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            chatbut.style.left = left - dx + "px";
            chatbut.style.top = top - dy + "px";
            chatbut.style.zIndex = i++;
        };
    };

    chatbut.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };

    //---------------------------------
    dominios.querySelector('.title-bar').onmousedown = function (e) {
        var left = parseInt( window.getComputedStyle(dominios).getPropertyValue("left") );
        var top = parseInt( window.getComputedStyle(dominios).getPropertyValue("top") );
        var mouseX = e.clientX;
        var mouseY = e.clientY;

        document.onmousemove = function (e) {
            var dx = mouseX - e.clientX;
            var dy = mouseY - e.clientY;

            dominios.style.left = left - dx + "px";
            dominios.style.top = top - dy + "px";
            dominios.style.zIndex = i++;
        };
    };

    dominios.querySelector('.title-bar').onmouseup = function () {
        document.onmousemove = null;
    };
    //---------------------------------