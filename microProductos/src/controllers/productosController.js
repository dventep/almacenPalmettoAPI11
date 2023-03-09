const { Router } = require('express');
const router = Router();
const productosModel = require('../models/productosModel');

router.get('/productos', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await productosModel.traerProductos();
    //console.log(result);
    res.json(result);
});
router.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await productosModel.traerProducto(id);
    //console.log(result);
    res.json(result[0]);
});
router.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const inventario = req.body.inventario;
    if (inventario < 0) {
        res.send("El inventario no puede ser menor de cero");
        return;
    }
    var result = await productosModel.actualizarProducto(id, inventario);
    res.send("Inventario de producto actualizado");
});
router.post('/productos', async (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const inventario = req.body.inventario;
    var result = await productosModel.crearProducto(nombre, descripcion, precio, inventario);
    res.send("Producto creado");
});
module.exports = router;
