<?php 
$nombre=$_POST['NombreCompleto'];
$correo=$_POST['Correo'];
$fecha=$_POST['Fecha_Nacimiento'];
$tema=$_POST['Tema'];
$comentario=$_POST['Comentario'];
$fecha_hoy=date("d/m/Y H:i");
$IP=$_SERVER['REMOTE_ADDR'];

//datos del correo
$cuerpo="De: $nombre \n";
$cuerpo .="Correo: $correo \n";
$cuerpo .="Fecha y hora de envio: $fecha_hoy \n";
$cuerpo .="Fecha de nacimiento: $fecha \n";
$cuerpo .="Comentarios: $comentario \n";
$cuerpo .="IP: $IP \n";
$cuerpo .="creado por uriel hernandez";

if(mail($correo,$tema,$cuerpo)){
    echo '<script type="text/javascript">
        window.location.href="index.html";
        alert("Correo enviado exitosamente");
        </script>';
}else{
    echo '<script type="text/javascript">
        window.location.href="index.html";
        alert("Error,Ocurrio un error durante el envio");
        </script>';
}
?>