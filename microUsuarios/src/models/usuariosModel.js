const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'contrasena123',
    database: 'almacen'
});
async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM user');
    return result[0];
}
async function traerUsuario(usuario) {
    const result = await connection.query('SELECT * FROM user WHERE usuario = ? ', usuario);
    return result[0];
}

async function validarUsuario(usuario, password) {
    const result = await connection.query('SELECT * FROM user WHERE usuario = ? AND password = ? ', [usuario, password]);
    return result[0];
}
async function crearUsuario(nombre, apellido, usuario, password, telefono, email) {
    const result = await connection.query('INSERT INTO user VALUES(null,?,?,?,?,?,?)', [nombre, apellido, usuario, password, telefono, email]);
    return result;
}
module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, crearUsuario
};
