<?php
 require 'conexion.php';
  
 $nombre  = $_POST['nombre'];
 $apellido  = $_POST['apellido'];
 $email = $_POST['email'];
 $select = $_POST['select'];
 $bebes = $_POST ['bebes'];
 $bautismos = $_POST['bautismos'];
 $comunion = $_POST['comunion'];
 $casamientos = $_POST['casamientos'];
 $cumpleaños = $_POST['cumpleaños'];
 $embarazada = $_POST['embarazada'];
 $familia = $_POST['familia'];
 $niños = $_POST['niños'];
 $xvaños = $_POST['xvaños'];
 

$insertar = "INSERT INTO bf VALUES ('$nombre','$apellido','$email','$select','$bebes','$bautismos','$comunion','$casamientos','$cumpleaños','$embarazada','$familia','$niños','$xvaños','$lunes','$martes','$miercoles','$jueves','$viernes','$sabado','$domingo',$castro',$sanpedro',)";

$query = mysqli_query($conectar, $insertar);

if($query){

   echo "<script> alert('Correcto');
    location.href = '../index.html';
   </script>";

}else{
    echo "<script> alert('Incorrecto');
    location.href = '../index.html';
    </script>";
}

?>