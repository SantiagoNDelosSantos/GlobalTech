class Cel {

    constructor(id, marca, modelo, color, memoriaInterna, memoriaRam, camara, precio, imagen) {
        this.id = id,
        this.marca = marca,
        this.modelo = modelo,
        this.color = color,
        this.memoriaInterna = memoriaInterna,
        this.memoriaRam = memoriaRam,
        this.camara = camara,
        this.precio = precio,
        this.imagen = imagen
    }

}

const cel1 = new Cel(1, "Apple", "iPhone14", "Morado", 128, 6, 48, 484141, "iPhone14.png")
const cel2 = new Cel(2, "Samsung", "GalaxyA13", "Geleste", 64, 4, 50,74999, "GalaxyA13.png")
const cel3 = new Cel(3, "Motorola", "MotoE20", "Aqua", 32, 4, 13, 37999, "MotoE20.png")
const cel4 = new Cel(4, "Samsung", "GalaxyA53", "Azul", 128, 6, 64, 147999, "GalaxyA53.png")
const cel5 = new Cel(5, "Motorola", "MotoE40", "Negro", 64, 4, 48, 52999, "MotoE40.png")
const cel6 = new Cel(6, "Apple", "iPhone7", "Dorado", 32, 4, 12, 199000, "iPhone7.png")
const cel7 = new Cel(7, "Motorola", "MotoG52", "Gris", 128, 6, 50, 73999, "MotoG52.png")
const cel8 = new Cel(8, "Apple", "iPhone8", "Gris", 64, 4, 12, 159999, "iPhone8.png")
const cel9 = new Cel(9, "Samsung", "GalaxyA02", "Azul", 32, 4, 13, 49999, "GalaxyA02.png")

let inventario = []

if(localStorage.getItem("inventario")){
    inventario = JSON.parse(localStorage.getItem("inventario"))
}else{
    inventario.push(cel1,cel2,cel3,cel4,cel5,cel6,cel7,cel8,cel9)
    localStorage.setItem("inventario", JSON.stringify(inventario))
}