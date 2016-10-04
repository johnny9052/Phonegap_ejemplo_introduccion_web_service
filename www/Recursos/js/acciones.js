// Cordova por seguridad no deja colocar las funciones como onclick, toca
// referenciandolo por este medio
$(document).ready(function () {
    $("#btnEnviar").click(enviarDatos);// selector por id   
});


function enviarDatos() {

    var numero1 = $("#txtNumero1").val();
    var numero2 = $("#txtNumero2").val();
    var ruta = $("#txtRuta").val();
    
    //var ruta = "http://artesanosdelamontana.com/prueba/solicitudSuma.php";
    //var ruta = "http://localhost/prueba/solicitudSuma.php";
    //var ruta = "http://192.168.1.11/prueba/solicitudSuma.php";
    //var ruta = "http://localhost:80/prueba/solicitudSuma.php",
        
    $.ajax({
        type: 'post',        
        url: ruta,
        beforeSend: function () {
            //alert("accion antes de enviar");
        },
        data: {numero1: numero1, numero2: numero2},
        success: function (data) {
            var data = JSON.parse(data);
            alert(data[0].res);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + jqXHR + "****" + textStatus + "\nExcepcion: " + errorThrown);
            alert("Verifique la ruta del archivo");
            alert(ruta);
        }
    });
}