const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'contrasena123',
    database: 'almacen'
});
async function crearOrden(orden) {
    const nombreCliente = orden.nombreCliente;
    const emailCliente = orden.emailCliente;
    const totalCuenta = orden.totalCuenta;
    const result = await connection.query('INSERT INTO orden VALUES (null, ?, ?, ?, Now())', [nombreCliente, emailCliente, totalCuenta]);
    return result;
}
async function traerOrden(id) {
    const result = await connection.query('SELECT * FROM orden WHERE id = ? ', id);
    return result[0];
}
module.exports = {
    crearOrden,
    traerOrden
};