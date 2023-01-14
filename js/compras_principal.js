const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
	let salida2 = "";


    if (totalCarrito() > 0) {    
		salida2 = `<table class="table">
        <tbody>
        <tr>
        <td colspan="6" class="text-center"><a href="#" class="btn btn-danger" onClick="vaciarCarrito()">Vaciar Carrito <img src="../../img/tacho.png" alt="Vaciar Carrito" width="34" /></a></td>
        </tr>`;

        for (let producto of productos_carrito) {
			salida2 += `<tr>
            <td><img src="../../img/${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.cantidad} X ${producto.precio}</td>
            <td class="align-middle">$${producto.cantidad * producto.precio}</td>`
        }

		salida2 += `<tr>
        <td colspan="3"><b>Suma Total</b></td>
        <td><b>$${sumaCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    } else {
		salida2 = `<div class="alert alert-danger text-center" role="alert">No hay productos en el Carro!</div>`;
    }

	document.getElementById("productos_seleccionados").innerHTML = salida2;
}

renderProductosCarrito();
renderBotonCarrito();
