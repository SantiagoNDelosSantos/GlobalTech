//PROYECTO - Tienda de celulares:

//Capturas nodos DOM:
let libros = document.getElementById("cel")
let guardarLibroBtn = document.getElementById("guardarCelBtn")
let verCatalogoBtn = document.getElementById("verIventario")
let ocultarCatalogoBtn = document.getElementById("ocultarIventario")
let buscador = document.getElementById("buscador")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")
let botonCarrito = document.getElementById("botonCarrito")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let formAgregarLibro = document.getElementById("formAgregarCel")
let precioTotal = document.getElementById("precioTotal")


//Funciones:


// 1 - Mostrar inventario:

function verInventario(array) {

    cel.innerHTML = ""
    for (let cel of array) {

        let nuevoCel = document.createElement("div")

        nuevoCel.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")

        nuevoCel.innerHTML = `
        <div id="${cel.id}" class="card" style="width: 18rem;">

                <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${cel.imagen}" alt="${cel.modelo} de ${cel.marca}">

                <div class="card-body">

                        <h4 class="card-title">${cel.modelo}</h4>

                        <p>Marca: ${cel.marca}</p>

                        <p>Color: ${cel.color}</p>

                        <p>Memoria Interna: ${cel.memoriaInterna}</p>
                        
                        <p>Memoria Ram: ${cel.memoriaRam}</p>
                        
                        <p>Cámara: ${cel.camara}</p>
                        
                        <p>Precio: "$" ${cel.precio}</p>

                        <button id="agregarBtn${cel.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>

        </div>`

        libros.appendChild(nuevoCel)

        let btnAgregar = document.getElementById(`agregarBtn${cel.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(cel)

        })
    }
}

verInventario(inventario)
