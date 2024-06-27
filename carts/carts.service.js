const { agregarAlCarrito } = require("./carts.repository")

const agregarAlCarritoService = async (datos) =>{

    //agregar un try cache
   const {user_id, product_id, cantidad} = datos
    /* Aca invocamos al repository */
    carrito = await obtenerOCrearCarrito(user_id)
    const carritoID = carrito.id
    await agregarAlCarrito(carritoID, product_id, cantidad)

    return {status:200, message: 'Producto agregado al carrito'}
}


module.exports = {agregarAlCarritoService}