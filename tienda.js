//PROYECTO - Tienda de celulares:


//Objetos

class Cel {

    constructor(marca, modelo, color, memoriaInterna, memoriaRam, precio) {
        this.marca = marca,
            this.modelo = modelo,
            this.color = color,
            this.memoriaInterna = memoriaInterna,
            this.memoriaRam = memoriaRam,
            this.precio = precio
    }

}

const cel1 = new Cel("Apple", "iPhone14", "morado", "128GB", "6GB", 484141)
const cel2 = new Cel("Samsung", "GalaxyA53", "azul", "128GB", "6GB", 147999)
const cel3 = new Cel("Motorola", "MotoG52", "gris", "128GB", "6GB", 73999)
const cel4 = new Cel("Apple", "iPhone8", "rosado", "64GB", "4GB", 159999)
const cel5 = new Cel("Samsung", "GalaxyA13", "blanco", "64GB", "4GB", 74999)
const cel6 = new Cel("Motorola", "MotoE40", "negro", "64GB", "4GB", 52999)
const cel7 = new Cel("Apple", "iPhone7", "dorado", "32GB", "4GB", 199000)
const cel8 = new Cel("Samsung", "GalaxyA02", "azul", "32GB", "4GB", 49999)
const cel9 = new Cel("Motorola", "MotoE20", "aqua", "32GB", "4GB", 37999)

const inventario = [cel1, cel2, cel3, cel4, cel5, cel6, cel7, cel8, cel9]

//Fin objetos


//Funciones para el menú del cliente / usuario:

// 1 - Consultar inventario.

function consultarInventario(array) {

    console.log("Actualmente tenemos en inventario los siguientes dispositivos:")

    array.forEach((cel) => {

        console.log(cel.marca, cel.modelo, cel.color, cel.memoriaInterna, cel.memoriaRam, cel.precio)
    })

}

// 2 - Encontrar Modelo.

function encontrarModelo(array) {

    let modeloBuscado = prompt("Ingrese el modelo de teléfono que desea buscar.")

    let modeloEncontrado = array.find(
        (cel) => cel.modelo.toLowerCase() == modeloBuscado.toLowerCase()
    )

    if (modeloEncontrado == undefined) {
        console.log("El modelo " + modeloBuscado + " no tiene stock.")
    } else {
        console.log(modeloEncontrado)
    }

}

// 3 - Buscar por marca.

function buscarMarca(array) {

    let marcaBuscada = prompt("Ingrese la marca de celulares de su interés.")

    let busqueda = array.filter((cel) => cel.marca.toLowerCase() == marcaBuscada.toLowerCase())

    if (busqueda.length == 0) {
        console.log("No tenemos dispositivos de la marca " + marcaBuscada)
    } else {
        console.log(busqueda)

        consultarInventario(busqueda)
    }

}

// 4 - Ordenar por precio de menor a mayor.

function ordenarPorPrecio(array) {

    const menorMayor = [].concat(array)

    menorMayor.sort((a, b) => a.precio - b.precio)

    consultarInventario(menorMayor)
}

// Fin funciones para el menú del cliente / usuario.


// Funciones para el menú del repositor:

// 1 - Agregar celular al inventario.

function agregarCelular() {

    let marcaIngresada = prompt("Ingrese la marca:")
    let modeloIngresado = prompt("Ingrese el modelo:")
    let colorIngresado = prompt("Ingrese el color:")
    let memoriaInternaIngresada = prompt("Ingrese la memoria interna del dispositivo:")
    let memoriaRamIngresada = prompt("Ingrese la memoria RAM del dispositivo:")
    let precioIngresado = parseInt(prompt("Ingrese el precio:"))

    const celNuevo = new Cel(marcaIngresada, modeloIngresado, colorIngresado, memoriaInternaIngresada, memoriaRamIngresada, precioIngresado)

    console.log(celNuevo)

    inventario.push(celNuevo)

    console.log(inventario)

}

// 2 - Borrar un celular del inventario.

function eliminarCelular(array) {

    let modeloEliminar = prompt("Ingrese el modelo que desea eliminar:")

    let arrayModelos = array.map((cel) => cel.modelo)

    console.log(arrayModelos)

    let indice = arrayModelos.indexOf(modeloEliminar)

    array.splice(indice, 1)

    consultarInventario(inventario)

}

//Fin funciones para el menú del repositor.


//Menú

function menuInicio() {

    let inicio = (prompt("Bienvenido a GlobalTech. Escriba 1 si desea ingresar a nuestra tienda online como cliente. Escriba 2 si desea ingresar como repositor."))

    if (inicio == "1") {

        function pedirNombre() {

            let nombre = prompt("Ingrese su nombre para continuar")

            alert("Hola " + nombre + ", somos GlobalCel y te damos la bienvenida a nuestra tienda online. Aquí podrás encontrar tu próximo celular, al mejor precio del mercado.")
        }

        pedirNombre()

        function menuUno() {
            let salirMenu = false
            do {
                salirMenu = preguntarOpcion(salirMenu)
            } while (!salirMenu)
        }

        function preguntarOpcion(salir) {
            let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada:
                1 - Consultar inventario.
                2 - Encontrar por modelo.
                3 - Buscar por marca.
                4 - Ordenar por precio.
                0 - Salir del menú.`))

            switch (opcionIngresada) {
                case 1:
                    consultarInventario(inventario)
                    break
                case 2:
                    encontrarModelo(inventario)
                    break
                case 3:
                    buscarMarca(inventario)
                    break
                case 4:
                    ordenarPorPrecio(inventario)
                    break
                case 0:
                    console.log("Gracias por visitar nuestra tienda, vuelva pronto.")
                    salir = true
                    return salir
                default:
                    console.log("Ingrese una opción correcta.")
                    break
            }

        }

        menuUno()

    } else if (inicio == "2") {

        function ingresoRepo() {

            let contraseña = prompt("Para acceder como repositor ingrese la contraseña.")
            ingreseContraseña(contraseña)

        }

        ingresoRepo()

        function ingreseContraseña(contraseña) {

            if (contraseña == "repo123") {

                alert("La contraseña " + contraseña + " es correcta, puede acceder al menú de repositor.")

                function menuDos() {
                    let salirMenu = false
                    do {
                        salirMenu = preguntarOpcion(salirMenu)
                    } while (!salirMenu)
                }

                function preguntarOpcion(salir) {
                    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada:
                    1 - Agregar celular.
                    2 - Borrar celular.
                    0 - Salir del menú.`))

                    switch (opcionIngresada) {
                        case 1:
                            agregarCelular()
                            break
                        case 2:
                            eliminarCelular(inventario)
                            break
                        case 0:
                            console.log("Gracias por ser parte de nuestra tienda, que tenga un buen día.")
                            salir = true
                            return salir
                        default:
                            console.log("Ingrese una opción correcta.")
                            break
                    }
                }

                menuDos()

            } else {

                function reintentarContraseña() {

                    let reintContraseña = prompt("La contraseña ingresada es incorrecta, no puede acceder al menú de repositor ¿Desea intentarlo nuevamente? Responda SI para volver a intentarlo, responda NO si desea volver al menú principal.")

                    if (reintContraseña.toUpperCase() == "SI") {

                        ingresoRepo()

                    } else if (reintContraseña.toUpperCase() == "NO") {

                        menuInicio()

                    } else {

                        alert("La respuesta ingresada es incorrecta, vuelva a intentarlo con SI o NO.")

                        reintentarContraseña()

                    }

                }

                reintentarContraseña()

            }

        }

    } else {

        alert("La respuesta ingresada es incorrecta, vuelva a intentarlo con 1 o 2.")

        menuInicio()

    }

}

menuInicio()

//Fin menú