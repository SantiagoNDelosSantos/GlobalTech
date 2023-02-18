////////////////////////////////////////////////////////////////

// Capturas botones para ver y ordenar el inventario:

let botonVerInventario = document.getElementById("verInventario")

let botonOrdMayor = document.getElementById("mayorPrecio")

let botonOrdMenor = document.getElementById("menorPrecio")

let botonOrdAlfabeticamente = document.getElementById("alfabeticamente")

let botonOrdMyMInterna = document.getElementById("mayorMemoriaInterna")

let botonOrdMrMInterna = document.getElementById("menorMemoriaInterna")

let botonOrdMyMRam = document.getElementById("mayorMemoriaRam")

let botonOrdMrMRam = document.getElementById("menorMemoriaRam")

let botonOrdMyCam = document.getElementById("mayorResolucionCam")

let botonOrdMrCam = document.getElementById("menorResolucionCam")

//////////////////////////////////////////////////////////////////////


// Captura Barra de Busqueda:

let buscador = document.getElementById("buscador")

let coincidencia = document.getElementById("coincidencia")

// Captura Barra de Busqueda.



// Captura Botones Favoritos:

let botonFavNav = document.getElementById("botonFavoritos")

let modalBodyFavoritos = document.getElementById("modal-bodyFavoritos")

// Fin Captura Botones Favoritos.






// Captura botones Carrito:

let botonCarrito = document.getElementById("botonCarrito")

let modalBodyCarrito = document.getElementById("modal-bodyCarrito")

// Fin Captura botones Carrito.






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

        btnAgregarFav.addEventListener("click", () => {})

        let btnAgregar = document.getElementById(`agregarBtn${cel.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(cel)
        })

    }

}

// Evento botón Ver Inventario:

botonVerInventario.addEventListener("click", () => {
    verInventario(inventario)
})



// Function Agregar Nuevo Producto al Inventario:

function agregarCel(array) {

    let inputMarca = document.getElementById("marcaInput")
    let inputModelo = document.getElementById("modeloInput")
    let inputColor = document.getElementById("colorInput")
    let inputMemoriaInterna = document.getElementById("memoriaInternaInput")
    let inputMemoriaRam = document.getElementById("memoriaRamInput")
    let inputCamara = document.getElementById("camaraInput")
    let inputPrecio = document.getElementById("precioInput")

    const celNuevo = new Cel(array.length + 1, inputMarca.value, inputModelo.value, inputColor.value, inputMemoriaInterna.value, inputMemoriaRam.value, inputCamara.value, inputPrecio.value, "CelGenerico.png")

    array.push(celNuevo)
    localStorage.setItem("inventario", JSON.stringify(array))

    formAgregarCel.reset()
    
    verInventario(array)

}

// Captura botón Agregar Dispositivo:

let guardarCelBtn = document.getElementById("guardarCelBtn")

// Evento botón Agregar Dispositivo:

guardarCelBtn.addEventListener("click", () => {
    agregarCel(inventario)
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

//Evento botón Ordenar Alfabeticamente:

botonOrdAlfabeticamente.addEventListener("click", () => {
    ordenarAlfabeticamente(inventario)
})



// Function Odernar de Menor Precio a Mayor Precio:

function ordenarMenorMayor(array) {
    const menorMayor = [].concat(array)
    menorMayor.sort((a, b) => a.precio - b.precio)
    verInventario(menorMayor)
}

// Evento botón Ord. Menor Precio:

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

// Evento botón Ord. Mayor Precio:

botonOrdMayor.addEventListener("click", () => {
    ordenarMayorMenor(inventario)
})



// Function Ordenar de Menor Memoria Interna a Mayor Memoria Interna:

function ordenarMenorMInterna(array) {
    const menorMInt = [].concat(array)
    menorMInt.sort((a, b) => a.memoriaInterna - b.memoriaInterna)
    verInventario(menorMInt)
}

// Evento botón Ord. Menor Memoria Interna:

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

// Evento botón Ord. Mayor Memoria Interna:

botonOrdMyMInterna.addEventListener("click", () => {
    ordenarMayorMInterna(inventario)
})



// Function Ordenar de Menor Memoria Ram a Mayor Memoria Ram:

function ordenarMenorMRam(array) {
    const menorMRam = [].concat(array)
    menorMRam.sort((a, b) => a.memoriaRam - b.memoriaRam)
    verInventario(menorMRam)
}

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

// Evento botón Ord. Mayor Memoria Ram:

botonOrdMyMRam.addEventListener("click", () => {
    ordenarMayorMRam(inventario)
})



// Function Ordenar de Menor Cam a Mayor Cam:

function ordenarMenorCam(array) {
    const menorMrCam = [].concat(array)
    menorMrCam.sort((a, b) => a.camara - b.camara)
    verInventario(menorMrCam)
}

// Evento botón Ord. Menor Cam:

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

// Evento botón Ord. Mayor Cam:

botonOrdMyCam.addEventListener("click", () => {
    ordenarMayorCam(inventario)
})



// Function Buscar en Inventario:

function buscarInfo(buscado, array) {

    let busquedaArray = array.filter(
        (cel) => cel.marca.toLowerCase().includes(buscado.toLowerCase()) || cel.modelo.toLowerCase().includes(buscado.toLowerCase())
    )

    if (busquedaArray.length == 0) {
        coincidencia.innerHTML = `<div style="margin-top: 5rem; margin-bottom: 5rem; text-align: center; "><h3 class="noCoincidencia">No hay modelos que coincidan con tu búsqueda. Sin embargo, revisa nuestro inventario posiblemente encuentres algún otro modelo con similares o mejores características. </h3></div>`
        verInventario(inventario)
    } else {
        coincidencia.innerHTML = ""
        verInventario(busquedaArray)
    }

}

// Evento Input Buscar en Inventario:

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value.toLowerCase(), inventario)
})




////////////////////////////////////////////////////////////////////


























//eliminar dispositivoooooooooooooooooooooooooooooooooooooooo
//oooooooooooooooooooooo
//ooooooooo























let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []


function agregarAlCarrito(cel) {

    let celAgregado = productosEnCarrito.find((elem) => elem.id == cel.id)

    if (celAgregado == undefined) {

        productosEnCarrito.push(cel)

        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))

    }
}










let productosFavoritos = JSON.parse(localStorage.getItem("favoritos")) || []

function agregarAfavoritos(cel) {

    let celAgregado = productosFavoritos.find((elem) => elem.id == cel.id)

    if (celAgregado == undefined) {

        productosFavoritos.push(cel)

        localStorage.setItem("favoritos", JSON.stringify(productosFavoritos))

    }
}



// Funtion Agregar a Favoritos:


function agregarProductosFavoritos(array) {
    modalBodyCarrito.innerHTML = ""
    array.forEach((productosFavoritos) => {

        modalBodyFavoritos.innerHTML +=

            `<div class="modal-dialog" style="max-width:250px;>

            <div class="modal-content">

                <div class="card border-primary mb-4" id ="productoCarrito${productosFavoritos.id}" style="max-width:400px; display: flex; justify-content:center; align-items: center;">

                    <img class="card-img-top" style="max-height:300px;max-width:180px; margin-top: 2rem" src="assets/${productosFavoritos.imagen}" alt="">

                    <div class="card-body">
                    
                        <h4 class="card-title" style="text-align: center;">${productosFavoritos.modelo}</h4>
                            
                        <p class="card-text" style="text-align: center;">$${productosFavoritos.precio}</p> 
                    
                        <button class= "btn btn-danger" id="botonEliminar" style="height:20%; width:40%;"><i class="fas fa-trash-alt"></i></button>

                    </div>    
                    
                </div>

            </div>

        </div>`
    })

}

// Fin Funtion Agregar a Favoritos.


//Evento 

botonFavNav.addEventListener("click", () => {
    agregarProductosFavoritos(productosFavoritos)
})







function cargarProductosCarrito(array) {
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito) => {

        modalBodyCarrito.innerHTML +=

            `<div class="modal-dialog" style="max-width:250px;>

            <div class="modal-content">

                <div class="card border-primary mb-4" id ="productoCarrito${productoEnCarrito.id}" style="max-width:400px; align-items: center;">

                    <img class="card-img-top" style="max-height:300px;max-width:180px; margin-top: 2rem" src="assets/${productoEnCarrito.imagen}" alt="">

                    <div class="card-body"
                    style= "    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;">
                    
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




function calcularTotal(array) {
    let total = array.reduce((acc, productoCarrito) => acc + productoCarrito.precio, 0)

    precioTotal.innerHTML = `<p style="text-align: center; font-size: 17px; margin-bottom:0em !important; padding-bottom: 1em;">El total del carrito es <strong>$${total}</strong>.</p>`
}




function verIDS(array) {

    iDInventario.innerHTML = ""

    array.forEach((cel) => {
        iDInventario.innerHTML += `
    <p style="text-align: center; line-height: 1em; font-size: 15px">La id del modelo ${cel.modelo} es ${cel.id}.</p>`
    })

}

eliminarCEL.addEventListener("click", () => {
    verIDS(inventario)
})


botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})




verInventario(inventario) 