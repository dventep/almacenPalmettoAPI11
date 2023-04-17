const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'db',
    //host: '192.168.100.2',
    port: '3306',
    user: 'root',
    // password: '',
    password: 'contrasena123',
    database: 'almacen'
});

async function traerProductos() {
    const result = await connection.query('SELECT * FROM productos');

    return result[0];
}
async function traerProducto(id) {
    const result = await connection.query('SELECT * FROM productos WHERE id = ? ', id);
    return result[0];
}
async function actualizarProducto(id, inventario) {
    const result = await connection.query('UPDATE productos SET inventario = ? WHERE id = ? ', [inventario, id]);
    return result;
}

async function crearProducto(nombre, descripcion, precio, inventario) {
    const result = await connection.query('INSERT INTO productos VALUES(null,?,?,?,?)', [nombre, descripcion, precio, inventario]);
    return result;
}

module.exports = {
    traerProductos, traerProducto, actualizarProducto, crearProducto
};
