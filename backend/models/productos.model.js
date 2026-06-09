const db = require('../config/database')


class ProductosModel{

    static async obtenerProductos(){
        const basedatos = await db()
        const resultados = await basedatos.query('select * from productos')

        return resultados.recordset
    }

}

module.exports = ProductosModel