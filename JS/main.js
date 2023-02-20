////////////////////////////////////////////////////////////////

// Proyecto eCommerce "Global Tech":











let formAgregarCel = document.getElementById("formAgregarCel")
let precioTotal = document.getElementById("precioTotal")
let eliminarCEL = document.getElementById("eliminarCel")
let eliminarCelular = document.getElementById("eliminarModeloBtn")


///////////////////////////////////////////////////////////////////////////



// Function Ver Inventario:

let cels = document.getElementById("cel")

function verInventario(array) {

    cel.innerHTML = ""

    for (let cel of array) {

        let nuevoCel = document.createElement("div")

        nuevoCel.classList.add("col-6", "col-md-4", "col-lg-3")

        nuevoCel.innerHTML =

            `<div id="${cel.id}" class="card" style="margin: 1rem; margin-bottom:3em; border-radius: 1rem;">

                <img class="card-img-top img-fluid" style="height: auto; width: auto; margin-top: 1rem; margin-left: 1rem; margin-right: 1rem; border-radius: 1rem;" src="assets/${cel.imagen}" alt="${cel.modelo} de ${cel.marca}">

                <div class="card-body">

                        <h4 class="card-title" style="text-align: center; margin-bottom: 1em;"><strong>${cel.modelo}</strong></h4>

                        <p style="text-align: center;"><strong>Marca:</strong> ${cel.marca}</p>

                        <p style="text-align: center;"><strong>Color:</strong> ${cel.color}</p>

                        <p style="text-align: center;"><strong>Memoria Interna:</strong> ${cel.memoriaInterna}GB</p>
                        
                        <p style="text-align: center;"><strong>Memoria Ram:</strong> ${cel.memoriaRam}GB</p>
                        
                        <p style="text-align: center;"><strong>Cámara:</strong> ${cel.camara}MP</p>
                    
                        <p style="text-align: center; font-size: 1.70em; color: green; margin-top: 1.5em"><strong>$${cel.precio}</strong></p>

                        <div style=" display: flex; justify-content: center; align-items: center; margin-top: 2.5em; margin-bottom: 0.5em;">

                        <a id="botonAgregarAFavoritos${cel.id}" data-bs-toggle="modal" data-bs-target="#idAgregarAFavoritos"
                        class="btn btn-outline-danger" style=" width: 5em; height: 5.2em; margin-left: 0px;margin-right: 5%; justify-content: center; display: flex; align-items: center;">
                        <i class="fa fa-heart fa-1x"></i>
                        </a>

                        <button id="agregarBtn${cel.id}" class="btn btn-outline-primary"  
                        style="width: 63%; margin-right: 0px;">Agregar al carrito</button>

                        </div>
                </div>

            </div>`

        cels.appendChild(nuevoCel)

        let btnAgregarFav = document.getElementById(`botonAgregarAFavoritos${cel.id}`)

        btnAgregarFav.addEventListener("click", () => {

            //Limpiar h3 no coindicencias e input buscador:
            coincidencia.innerHTML = "";
            buscador.value = "";

            agregarAfavoritos(cel)
        })

        let btnAgregar = document.getElementById(`agregarBtn${cel.id}`)

        btnAgregar.addEventListener("click", () => {

            //Limpiar h3 no coindicencias e input buscador:
            coincidencia.innerHTML = "";
            buscador.value = "";

            agregarAlCarrito(cel)
        })

    }

}

// Captura botón Ver Inventario:

let botonVerInventario = document.getElementById("verInventario")

// Evento botón Ver Inventario:

botonVerInventario.addEventListener("click", () => {

    //Limpiar h3 no coindicencias e input buscador:
    coincidencia.innerHTML = "";
    buscador.value = "";

    verInventario(inventario)

})

// Carga por defecto del Inventario:

verInventario(inventario)



// Captura botón Agregar Cel Nav:

let botonAgregarCelNav = document.getElementById("agregarCel")

// Evento botón Agregar Cel Nav:

botonAgregarCelNav.addEventListener("click", () => {

    //Limpiar h3 no coindicencias e input buscador:
    coincidencia.innerHTML = "";
    buscador.value = "";
})



// Function Agregar Nuevo Producto al Inventario:

function agregarCel(array) {

    let inputModelo = document.getElementById("modeloInput")
    let inputMarca = document.getElementById("marcaInput")
    let inputColor = document.getElementById("colorInput")
    let inputMemoriaInterna = document.getElementById("memoriaInternaInput")
    let inputMemoriaRam = document.getElementById("memoriaRamInput")
    let inputCamara = document.getElementById("camaraInput")
    let inputPrecio = document.getElementById("precioInput")

    const celNuevo = new Cel(array.length + 1, inputMarca.value, inputModelo.value, inputColor.value, inputMemoriaInterna.value, inputMemoriaRam.value, inputCamara.value, inputPrecio.value, "CelGenerico.png")

    array.push(celNuevo)
    localStorage.setItem("inventario", JSON.stringify(array))

    verInventario(array)

    formAgregarCel.reset()

}

// Captura botón Agregar Dispositivo:

let guardarCelBtn = document.getElementById("guardarCelBtn")

// Evento botón Agregar Dispositivo:

guardarCelBtn.addEventListener("click", () => {
    agregarCel(inventario)
})





// Botón Drop Ordenar - Limpier h3 no coindicencias:

let Drop = document.getElementById("navbarDropdown")

// Evento Botón Drop Ordenar - Limpiar h3 no coindicencias e input buscador:

Drop.addEventListener("click", () => {
    coincidencia.innerHTML = "";
    buscador.value = "";
})



// Function Ordenar Alfabeticamente:

function ordenarAlfabeticamente(array) {

    const ordenadoAlfabeticamente = [].concat(array)

    ordenadoAlfabeticamente.sort((a, b) => {

        let modeloA = a.modelo.toUpperCase();
        let modeloB = b.modelo.toUpperCase();

        if (modeloA > modeloB) {
            return 1
        }

        if (modeloA < modeloB) {
            return -1
        }

        return 0;
    })

    verInventario(ordenadoAlfabeticamente)

}

// Captura botón Ordenar Alfabéticamente:

let botonOrdAlfabeticamente = document.getElementById("alfabeticamente")

// Evento botón Ordenar Alfabéticamente:

botonOrdAlfabeticamente.addEventListener("click", () => {
    ordenarAlfabeticamente(inventario)
})



// Function Odernar de Menor Precio a Mayor Precio:

function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    menorMayor.sort((a, b) => a.precio - b.precio)
    verInventario(menorMayor)
}

// Captura botón Ordenar Menor Precio:

let botonOrdMenor = document.getElementById("menorPrecio")

// Evento botón Ordenar Menor Precio:

botonOrdMenor.addEventListener("click", () => {
    ordenarMenorMayor(inventario)
})



// Function Ordenar de Mayor Precio a Menor Precio:

function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => {
        return b.precio - a.precio
    })
    verInventario(mayorMenor)
}

// Captura botón Ordenar Mayor Precio:

let botonOrdMayor = document.getElementById("mayorPrecio")

// Evento botón Ordenar Mayor Precio:

botonOrdMayor.addEventListener("click", () => {
    ordenarMayorMenor(inventario)
})



// Function Ordenar de Menor Memoria Interna a Mayor Memoria Interna:

function ordenarMenorMInterna(array) {
    const menorMInt = [].concat(array)
    menorMInt.sort((a, b) => a.memoriaInterna - b.memoriaInterna)
    verInventario(menorMInt)
}

// Captura botón Ordenar Menor Memoria Interna:

let botonOrdMrMInterna = document.getElementById("menorMemoriaInterna")

// Evento botón Ordenar Menor Memoria Interna:

botonOrdMrMInterna.addEventListener("click", () => {
    ordenarMenorMInterna(inventario)
})



// Function Ordenar de Mayor Memoria Interna a Menor Memoria Interna:

function ordenarMayorMInterna(array) {
    const mayorMInt = [].concat(array)
    mayorMInt.sort((a, b) => {
        return b.memoriaInterna - a.memoriaInterna
    })
    verInventario(mayorMInt)
}

// Captura botón Ordenar Mayor Memoria Interna:

let botonOrdMyMInterna = document.getElementById("mayorMemoriaInterna")

// Evento botón Ordenar Mayor Memoria Interna:

botonOrdMyMInterna.addEventListener("click", () => {
    ordenarMayorMInterna(inventario)
})



// Function Ordenar de Menor Memoria Ram a Mayor Memoria Ram:

function ordenarMenorMRam(array) {
    const menorMRam = [].concat(array)
    menorMRam.sort((a, b) => a.memoriaRam - b.memoriaRam)
    verInventario(menorMRam)
}

// Captura botón Ordenar Menor Memoria Ram:

let botonOrdMrMRam = document.getElementById("menorMemoriaRam")

// Evento botón Ord. Menor Memoria Interna:

botonOrdMrMRam.addEventListener("click", () => {
    ordenarMenorMRam(inventario)
})



// Function Ordenar de Mayor Memoria Ram a Menor Memoria Ram:

function ordenarMayorMRam(array) {
    const mayorMRam = [].concat(array)
    mayorMRam.sort((a, b) => {
        return b.memoriaRam - a.memoriaRam
    })
    verInventario(mayorMRam)
}

// Captura botón Ordenar Mayor Memoria Ram:

let botonOrdMyMRam = document.getElementById("mayorMemoriaRam")

// Evento botón Ordenar Mayor Memoria Ram:

botonOrdMyMRam.addEventListener("click", () => {
    ordenarMayorMRam(inventario)
})



// Function Ordenar de Menor Cam a Mayor Cam:

function ordenarMenorCam(array) {
    const menorMrCam = [].concat(array)
    menorMrCam.sort((a, b) => a.camara - b.camara)
    verInventario(menorMrCam)
}

// Captura botón Odenar Menor Resolución Cam:

let botonOrdMrCam = document.getElementById("menorResolucionCam")

// Evento botón Ordenar Menor Cam:

botonOrdMrCam.addEventListener("click", () => {
    ordenarMenorCam(inventario)
})



// Function Ordenar de Mayor Cam a Menor Cam:

function ordenarMayorCam(array) {
    const mayorMyCam = [].concat(array)
    mayorMyCam.sort((a, b) => {
        return b.camara - a.camara
    })
    verInventario(mayorMyCam)
}

// Captura botón Ordenar MayorResolución Cam:

let botonOrdMyCam = document.getElementById("mayorResolucionCam")

// Evento botón Ord. Mayor Cam:

botonOrdMyCam.addEventListener("click", () => {
    ordenarMayorCam(inventario)
})



// Captura inputs:

let minInput = document.getElementById("minimoInput")

let maxInput = document.getElementById("maximoInput")

// Captura botó rango precios en modal:

let buscarEnRango = document.getElementById("encontrarRango")

// Captura botones Rango de Precios:

buscarEnRango.addEventListener("click", () => {
    buscarPorRangoPrecio(Number(minInput.value), Number(maxInput.value), inventario)
})

// Function Rango de Precios:

function buscarPorRangoPrecio(minimo, maximo, array) {

    let busquedaArray = array.filter((cel) => cel.precio >= minimo && cel.precio <= maximo);
    busquedaArray.sort((a, b) => a.precio - b.precio);

    busquedaArray.length === 0 ?
        (coincidencia.innerHTML = `<div style="margin-top: 5rem; margin-bottom: 5rem; text-align: center; "><h3 class="noCoincidencia">Actualmente no contamos con modelos que se ajusten al rango de precios buscado. Sin embargo, revisa nuestro inventario posiblemente encuentres algún modelo con un valor similar o cercano al presupuesto de deseas invertir.</h3></div>`, verInventario(inventario)) : (coincidencia.innerHTML = "", verInventario(busquedaArray));

    minInput.value = "";
    maxInput.value = "";
}








// Function Buscar en Inventario con String:

function buscarInfoString(buscado, array) {

    let busquedaArray = array.filter(
        (cel) => cel.modelo.toLowerCase().includes(buscado.toLowerCase()) || cel.marca.toLowerCase().includes(buscado.toLowerCase()) || cel.color.toLowerCase().includes(buscado.toLowerCase())
    )

    busquedaArray.length == 0 ? (coincidencia.innerHTML = `<div style="margin-top: 5rem; margin-bottom: 5rem; text-align: center; "><h3 class="noCoincidencia">No hay modelos que coincidan con tu búsqueda. Sin embargo, revisa nuestro inventario posiblemente encuentres algún otro modelo con similares o mejores características.</h3></div>`, verInventario(inventario)) : (coincidencia.innerHTML = "", verInventario(busquedaArray))

}

// Function Buscar en Inventario con Number:

function buscarInfoNumber(buscado, array) {

    let busquedaArray = array.filter(
        (cel) => Number(cel.memoriaInterna) === buscado || Number(cel.memoriaRam) === buscado || Number(cel.camara) === buscado || Number(cel.precio) === buscado
    )

    busquedaArray.length == 0 ? (coincidencia.innerHTML = `<div style="margin-top: 5rem; margin-bottom: 5rem; text-align: center; "><h3 class="noCoincidencia">No hay modelos que coincidan con tu búsqueda. Sin embargo, revisa nuestro inventario posiblemente encuentres algún otro modelo con similares o mejores características.</h3></div>`, verInventario(inventario)) : (coincidencia.innerHTML = "", verInventario(busquedaArray))

}

// Captura Div HTML para Coincidencias de Busqueda:

let coincidencia = document.getElementById("coincidencia")

// Captura input Barra de Busqueda:

let buscador = document.getElementById("buscador")

// Evento Input Barra de Busqueda:

buscador.addEventListener("input", () => {

    let valor = buscador.value;

    isNaN(valor) ? buscarInfoString(valor.toLowerCase(), inventario) : buscarInfoNumber(Number(valor), inventario);

});



////////////////////////////////////////////////////////////////////



// AGREGAR AL CARRITO DESDE INVENTARIO:

// Array de productos en Carrito:

let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []

// Function para agregar al array de Carrito:

function agregarAlCarrito(cel) {

    let celAgregado = productosEnCarrito.find((elem) => elem.id == cel.id)

    if (celAgregado == undefined) {

        productosEnCarrito.push(cel)

        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

    }

}



// Captura Body Carrito:

let modalBodyCarrito = document.getElementById("modal-bodyCarrito")

// Funtion Cargar Productos en Carrito:

function cargarProductosCarrito(array) {

    modalBodyCarrito.innerHTML = ""

    array.forEach((productoEnCarrito) => {

        modalBodyCarrito.innerHTML +=

            `<div class="modal-dialog" style="max-width:250px;">

            <div class="modal-content">

                <div class="card border-primary mb-4" id ="productoCarrito${productoEnCarrito.id}" style="max-width:400px; align-items: center;">

                    <img class="card-img-top" style="max-height:300px;max-width:180px; padding: 1em; margin-top: 1.4em" src="assets/${productoEnCarrito.imagen}" alt="">

                    <div class="card-body"
                    style= "    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center; margin-bottom: 1em">
                    
                        <h4 class="card-title" style="text-align: center;">${productoEnCarrito.modelo}</h4>
                            
                        <p class="card-text" style="text-align: center; font-size: 17px; color: green"><strong>$${productoEnCarrito.precio}</strong></p> 
                    
                        <button class= "btn btn-danger" id="botonEliminar" 
                        
                        style="
                        height: 4em;
                        width: 4em;
                        justify-content: center;
                        display: flex;
                        align-items: center;">

                        <i class="fas fa-trash-alt" ></i>
                        </button>

                    </div>    
                    
                </div>

            </div>

        </div>`
    })

    calcularTotal(array)
}

// Function Total Carrito:

function calcularTotal(array) {
    let total = array.reduce((acc, productoCarrito) => acc + productoCarrito.precio, 0)

    precioTotal.innerHTML = `<p style="text-align: center; font-size: 17px; margin-bottom:0em !important; padding-bottom: 1em;">El total del carrito es <strong>$${total}</strong>.</p>`
}

// Captura botón Carrito Nav:

let botonCarrito = document.getElementById("botonCarrito")

// Evento botón Carrito Nav:

botonCarrito.addEventListener("click", () => {

    //Limpiar h3 no coindicencias e input buscador:
    coincidencia.innerHTML = "";
    buscador.value = "";

    cargarProductosCarrito(productosEnCarrito)
})







////////////////////////////////////////////////////////////////////



// AGREGAR A FAVORITOS DESDE INVENTARIO:



//Array de productos en Favoritos:

let productosFavoritos = JSON.parse(localStorage.getItem("favoritos")) || []

// Function para el boton de la card Agregar Al array Favoritos:

function agregarAfavoritos(cel) {

    let celAgregadoEnFav = productosFavoritos.find((elem) => elem.id == cel.id)

    if (celAgregadoEnFav == undefined) {

        productosFavoritos.push(cel)

        localStorage.setItem("favoritos", JSON.stringify(productosFavoritos))
    }

}



// Captura Modal Card Favoritos:

let modalBodyFavoritos = document.getElementById("modal-bodyFavoritos")


// Funtion Agregar a Favoritos:

function agregarProductosFavoritos(array) {

    modalBodyFavoritos.innerHTML = ""

    array.forEach((productosFavoritos) => {

        modalBodyFavoritos.innerHTML +=

            `<div class="modal-dialog" style="max-width:250px;">

                <div class="modal-content">

                    <div class="card border-primary mb-4" id ="productoCarrito${productosFavoritos.id}" style="max-width:400px; display: flex; justify-content:center; align-items: center;">

                        <img class="card-img-top" style="max-height:300px;max-width:180px; padding: 1em; margin-top: 1.4em" src="assets/${productosFavoritos.imagen}" alt="">

                        <div class="card-body" style="margin-bottom: 1em">
                        
                            <h4 class="card-title" style="text-align: center;">${productosFavoritos.modelo}</h4>
                                
                            <p class="card-text" style="text-align: center;">$${productosFavoritos.precio}</p> 
                        
                            <div style="display: flex; justify-content: space-around;">

                                <button class= "btn btn-danger" id="botonEliminarFav${productosFavoritos.id}" 
                                style=" height: 4em; width: 4em; justify-content: center;
                                display: flex; align-items: center;" >
                                
                                <i class="fas fa-trash-alt"></i></button>

                                <button class= "btn btn-success" id="agregarFavAlCarritoFav${productosFavoritos.id}" style=" height: 4em; width: 4em; justify-content: center;
                                display: flex; align-items: center;" >
                                
                                <i class="fas fa-cart-plus"></i></button>
                            
                            </div>

                        </div>    
                        
                    </div>

                </div>

            </div>`
    })

    // Captura botón Agregar al Carrito desde Favoritos:

    let botonFavAlCarrito = document.getElementById(`agregarFavAlCarritoFav${productosFavoritos.id}`)

    botonFavAlCarrito.addEventListener("click", () => {
        
        favAgregarCarrito(productosFavoritos)

    })
}

// Fin Funtion Agregar a Favoritos.


// Captura Botón Favoritos Nav:

let botonFavNav = document.getElementById("botonFavoritos")

//Evento 

botonFavNav.addEventListener("click", () => {

    //Limpiar h3 no coindicencias e input buscador:
    coincidencia.innerHTML = "";
    buscador.value = "";

    agregarProductosFavoritos(productosFavoritos)

})




/////////////////////////////////////
// meto cel a productosFvoritos


////////////////////////////////////////////////////





// array de carrito "    productosEnCarrito    "
// key o espacio de memoria Local Storage "   carrito   " 



function favAgregarCarrito(productosFavoritos){

    let celAgregadoEnFav = productosEnCarrito.find((elem) => elem.id == productosFavoritos.id);

    if (celAgregadoEnFav == undefined) {

        productosEnCarrito.push(productosFavoritos)

        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

        console.log(productosFavoritos)
    }
}

















function verIDS(array) {

    iDInventario.innerHTML = ""

    array.forEach((cel) => {
        iDInventario.innerHTML += `
    <p style="text-align: center; line-height: 1em; font-size: 15px">La id del modelo ${cel.modelo} es ${cel.id}.</p>`
    })

}

eliminarCEL.addEventListener("click", () => {

    //Limpiar h3 no coindicencias e input buscador:
    coincidencia.innerHTML = "";
    buscador.value = "";

    verIDS(inventario)
})