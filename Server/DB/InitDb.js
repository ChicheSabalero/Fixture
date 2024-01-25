// Importar el paquete dotenv para leer las variables de entorno desde el archivo .env
require("dotenv").config();

// Importar la conexión a la base de datos desde getDb.js
const dbConnection = require("../DB/GetDb");

// Inicializar la conexión a la base de datos
dbConnection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

// Exportar la conexión inicializada para su uso en otros archivos
module.exports = dbConnection;
