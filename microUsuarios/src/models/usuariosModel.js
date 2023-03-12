const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    // password: '',
    password: 'contrasena123',
    database: 'almacen'
});
async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM user');
    return result[0];
}
async function traerUsuario(id) {
    const result = await connection.query('SELECT * FROM user WHERE id = ? ', [id]);
    return result[0];
}

async function validarUsuario(usuario, password) {
    const result = await connection.query('SELECT * FROM user WHERE usuario = ? AND password = ? ', [usuario, password]);
    return result[0];
}
async function editarUsuario(nombre, apellido, usuario, password, telefono, email, is_admin, id) {
    let value_is_admin = 0
    if (is_admin === "1" || is_admin === 1) {
        value_is_admin = 1
    }
    const result = await connection.query('UPDATE user SET nombre=?, apellido =?, usuario =?, password =?, telefono =?, email = ?, is_admin = ? WHERE id =? ', [nombre, apellido, usuario, password, telefono, email, value_is_admin, id]);
    return result;
}
async function crearUsuario(nombre, apellido, usuario, password, telefono, email, is_admin) {
    let value_is_admin = 0
    if (is_admin === "1" || is_admin === 1) {
        value_is_admin = 1
    }
    const result = await connection.query('INSERT INTO user VALUES(null,?,?,?,?,?,?,?)', [nombre, apellido, usuario, password, telefono, email, value_is_admin]);
    return result;
}
module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, crearUsuario, editarUsuario
};
