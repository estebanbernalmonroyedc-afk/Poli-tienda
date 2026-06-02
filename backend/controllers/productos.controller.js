const model = require ('.../models/productos.model')

class ProductoController{

    static async obtenerProductos(request, response){
        const productos = model.obtenerProductos()
        responde.json({
            data: productos
        })
    }
}

module.exports = ProductoController