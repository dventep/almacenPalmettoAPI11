const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');
router.get('/usuarios', async (req, res) => {
    var result;
    result = await usuariosModel.traerUsuarios();
    res.json(result);
});
router.get('/usuarios/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await usuariosModel.traerUsuario(id);
    if (result.length === 0) return res.status(404).send('Usuario no encontrado');
    res.json(result[0]);
});
router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.validarUsuario(usuario, password);
    if (result.length === 0) return res.status(404).send('Usuario no encontrado');
    res.json(result[0]);
});
router.post('/usuarios', async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const admin = req.body.admin;
    var result = await usuariosModel.crearUsuario(nombre, apellido, usuario, password, telefono, email, admin);
    res.send("usuario creado");
});
router.put('/usuarios/:id', async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const admin = req.body.is_admin;
    const id = req.params.id;
    var result = await usuariosModel.editarUsuario(nombre, apellido, usuario, password, telefono, email, admin, id);
    res.send("usuario actualizado");
});
module.exports = router;
