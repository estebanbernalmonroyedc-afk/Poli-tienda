const model = require('../models/productos.model')

class ProductoController{

    static async obtenerProductos(request, response){
        const productos = await model.obtenerProductos()
        response.json({
            data: productos
        })
    }
}

module.exports = ProductoController