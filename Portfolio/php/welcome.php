<?php 
// Configuración de la base de datos
$servidor = "127.0.0.1";
$puerto = 3307;
$usuario = "root";
$contrasena = "";
$basedatos = "contacto_db";

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contrasena, $basedatos, $puerto);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombres = $_POST['firstname'];
$apellidos = $_POST['lastname'];
$correo = $_POST['email'];
$descripcion = $_POST['subject'];

// Insertar datos a la tabla
$sql = "INSERT INTO datos_clientes (nombres, apellidos, correo, descripcion)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nombres, $apellidos, $correo, $descripcion);

if ($stmt->execute()) {
    echo "<script>
        alert('✅ Datos enviados correctamente. Gracias por contactarnos.');
        window.location.href = document.referrer; // Vuelve a la página anterior
    </script>";
} else {
    echo "<script>
        alert('❌ Error al guardar los datos. Inténtalo nuevamente.');
        window.location.href = document.referrer;
    </script>";
}

$stmt->close();
$conn->close();
?>
