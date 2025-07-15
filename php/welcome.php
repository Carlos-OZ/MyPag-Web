<?php 
$servidor = "127.0.0.1";
$usuario = "root";
$contrasena = "";
$basedatos = "contacto_db";
$puerto = 3307;

$conn = new mysqli($servidor, $usuario, $contrasena, $basedatos, $puerto);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$nombres = $_POST['firstname'];
$apellidos = $_POST['lastname'];
$telefono = $_POST['phone'];
$correo = $_POST['email'];
$descripcion = $_POST['subject'];

$sql = "INSERT INTO datos_clientes (nombres, apellidos, telefono, correo, descripcion) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombres, $apellidos, $telefono, $correo, $descripcion);

if ($stmt->execute()) {
    // Ventana emergente en JS (mensaje de éxito)
    echo "<script>
        alert('Datos enviados correctamente. Gracias por contactarnos.');
        window.history.back(); // Para volver al formulario sin recargar
    </script>";
} else {
    // Ventana emergente si hay error
    echo "<script>
        alert('Error al guardar los datos. Inténtalo nuevamente.');
        window.history.back();
    </script>";
}

$stmt->close();
$conn->close();
?>
