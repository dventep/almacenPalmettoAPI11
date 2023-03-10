const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');
router.get('/usuarios', async (req, res) => {
    var result;
    result = await usuariosModel.traerUsuarios();
    res.json(result);
});
router.get('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    var result;
    result = await usuariosModel.traerUsuario(usuario);
    res.json(result[0]);
});
router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.validarUsuario(usuario, password);
    res.json(result);
});
router.post('/usuarios', async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const usuario = req.body.usuario;
    const password = req.body.password;
    const telefono = req.body.telefono;
    const email = req.body.email;
    var result = await usuariosModel.crearUsuario(nombre, apellido, usuario, password, telefono, email);
    res.send("usuario creado");
});
module.exports = router;
