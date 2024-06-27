const {query} = require("../config/connection.sql")

const obtenerOCrearCarrito = async (user_id) =>{   
    //hacer un try catch
    const seleccionarCarritoPoridStr = 'SELECT * FROM carritos WHERE user_id = ?'
    let carritos = await query(consultaStr, [user_id])

    if(carritos.length === 0){
        const insertarCarritoStr = 'INSERT INTO carritos (usser_id) VALUES (?)'
        await query(insertarCarritoStr, [user_id])
        carritos = await query(seleccionarCarritoPoridStr, [user_id])
    }
    return carritos[0]
}

const agregarAlCarrito = async ({cart_id, product_id, cantidad}) =>{
    const seleccionarCarritoPoridStr = 'SELECT * FROM carrito_productos WHERE cart_id = ? AND product_id = ?'
    const productos  = await query(seleccionarCarritoPoridStr, [cart_id, product_id])
    if(productos.length === 0){
        const insertarCarritoStr = 'INSERT INTO carrito_productos (cart_id, product_id, cantidad) VALUES (?,?,?)'
        await query(insertarCarritoStr, [cart_id, product_id, cantidad])
    }else{
        const actualizarCarritoStr = 'UPDATE carrito_productos SET cantidad = cantidad + ? WHERE cart_id = ? AND product_id = ?'
        await query(actualizarCarritoStr, [cantidad, cart_id, product_id])
    }
}



module.exports = {obtenerOCrearCarrito, agregarAlCarrito}