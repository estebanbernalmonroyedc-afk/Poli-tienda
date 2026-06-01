const sqlServer = require('mssql')

//los datos de conexion
const dbConfig = {
    user : 'primeraTienda',
    password : '12345()',
    server : 'localhost',
    database : 'tienda',
    port : 1433,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

const conexion = async () => {
    try{
        const pool = await sqlServer.connect(dbConfig)
        return pool
    } catch (error) {
        console.error ('error en la conexion: ', error)
    }
}

module.exports = conexion