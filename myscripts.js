
window.onload = function(){ 
    document.getElementById("botonSubmit").onclick = function(event) {
        if (document.getElementById("username").value == "tienda" && document.getElementById("pass").value == "tienda"){
            var ocultos = document.getElementsByClassName('oculto1');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('oculto2');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
        }
        if (document.getElementById("username").value == "admin" && document.getElementById("pass").value == "admin"){
            var ocultos = document.getElementsByClassName('oculto2');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('oculto');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
        }
    }
};
