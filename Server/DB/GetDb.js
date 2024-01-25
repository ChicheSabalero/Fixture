// Importar el paquete dotenv para leer las variables de entorno desde el archivo .env
require("dotenv").config();

const mysql = require("mysql");

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  port: process.env.PORT,
};

// Crear la conexión a la base de datos
const connection = mysql.createConnection(dbConfig);

// Exportar la conexión para su uso en otros archivos
module.exports = connection;
