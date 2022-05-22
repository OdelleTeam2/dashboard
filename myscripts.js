
window.onload = function(){ 
    var login = document.getElementById("login");
    var desconectar = document.getElementById("desconectar");
    var mainbody = document.getElementById("main");
    var erp = document.getElementById("erp");
    var rrss = document.getElementById("rrss");
    var colab = document.getElementById("colab");
    var mant = document.getElementById("mant");
    
    document.getElementById("botonSubmit").onclick = function(event) {
        if (document.getElementById("username").value == "admin" && document.getElementById("pass").value == "admin"){
            var ocultos = document.getElementsByClassName('admin');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
            desconectar.style.display = 'inline-block';
            login.innerHTML = 'Admin';

            var right = document.getElementsByClassName('right');
            for(i = 0; i < right.length; i++) {
                right[i].style.width = '40%';
            }
            mainbody.style.display = 'block';
            erp.style.display = 'block';
            rrss.style.display = 'block';
            colab.style.display = 'block';
            mant.style.display = 'block';
        }

        if (document.getElementById("username").value == "gerente" && document.getElementById("pass").value == "gerente"){
            var ocultos = document.getElementsByClassName('marketing');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('tienda');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('mantenimiento');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('gerente');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
            desconectar.style.display = 'inline-block';
            login.innerHTML = 'Gerente';

            var right = document.getElementsByClassName('right');
            for(i = 0; i < right.length; i++) {
                right[i].style.width = '40%';
            }
            mainbody.style.display = 'block';
            erp.style.display = 'block';
            rrss.style.display = 'block';
            colab.style.display = 'block';

            mant.style.display = 'none';
            
        }
        if (document.getElementById("username").value == "marketing" && document.getElementById("pass").value == "marketing"){
            var ocultos = document.getElementsByClassName('admin');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('gerente');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('tienda');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('mantenimiento');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('marketing');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
            desconectar.style.display = 'inline-block';
            login.innerHTML = 'marketing';

            var right = document.getElementsByClassName('right');
            for(i = 0; i < right.length; i++) {
                right[i].style.width = '40%';
            }
            mainbody.style.display = 'block';
            erp.style.display = 'block';
            rrss.style.display = 'block';
            colab.style.display = 'block';
            
            mant.style.display = 'none';
        }
        if (document.getElementById("username").value == "tienda" && document.getElementById("pass").value == "tienda"){
            var ocultos = document.getElementsByClassName('admin');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('gerente');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('marketing');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('mantenimiento');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('tienda');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
            desconectar.style.display = 'inline-block';
            login.innerHTML = 'tienda';

            var right = document.getElementsByClassName('right');
            for(i = 0; i < right.length; i++) {
                right[i].style.width = '40%';
            }
            mainbody.style.display = 'block';
            erp.style.display = 'block';
            colab.style.display = 'block';

            rrss.style.display = 'none';
            mant.style.display = 'none';
        }
        if (document.getElementById("username").value == "mantenimiento" && document.getElementById("pass").value == "mantenimiento"){
            var ocultos = document.getElementsByClassName('admin');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('gerente');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('marketing');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('tienda');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'none';
            }
            var ocultos = document.getElementsByClassName('mantenimiento');
            for(i = 0; i < ocultos.length; i++) {
                ocultos[i].style.display = 'inline-block';
            }
            document.getElementById('cerrar').click();
            desconectar.style.display = 'inline-block';
            login.innerHTML = 'mantenimiento';

            var right = document.getElementsByClassName('right');
            for(i = 0; i < right.length; i++) {
                right[i].style.width = '40%';
            }
            mainbody.style.display = 'block';
            colab.style.display = 'block';
            mant.style.display = 'block';
            
            erp.style.display = 'none';
            rrss.style.display = 'none';
        }
    }
    
    desconectar.onclick = function(event) {
        login.innerHTML = 'login';
        var ocultos = document.getElementsByClassName('admin');
        for(i = 0; i < ocultos.length; i++) {
            ocultos[i].style.display = 'none';
        }
        var ocultos = document.getElementsByClassName('gerente');
        for(i = 0; i < ocultos.length; i++) {
            ocultos[i].style.display = 'none';
        }
        var ocultos = document.getElementsByClassName('marketing');
        for(i = 0; i < ocultos.length; i++) {
            ocultos[i].style.display = 'none';
        }
        var ocultos = document.getElementsByClassName('tienda');
        for(i = 0; i < ocultos.length; i++) {
            ocultos[i].style.display = 'none';
        }
        var ocultos = document.getElementsByClassName('mantenimiento');
        for(i = 0; i < ocultos.length; i++) {
            ocultos[i].style.display = 'none';
        }

        desconectar.style.display = 'none';

        var right = document.getElementsByClassName('right');
        for(i = 0; i < right.length; i++) {
            right[i].style.width = '100%';
        }
        mainbody.style.display = 'none';
        erp.style.display = 'none';
        rrss.style.display = 'none';
        colab.style.display = 'none';
        mant.style.display = 'none';
    }
};
