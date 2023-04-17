class ProductManager {
    constructor() {
        this.Products = []
    }

    addProducts (Products) {
        if(this.Products.find(producto => producto.code == Products.code)){
            return ("Producto existente")
        } else {
            this.Products.push(Products)

        }
    }
    getProducts () {
        return this.Products
    }

    getProductsById (id) {
        const Products = this.Products.find (producto => producto.id == id )

        if(Products){
            return Products
        }
        return ("Not found")
    }
}

class Products {
    constructor (tittle = "", description = "", price = 0, stock = "", code = 0,thumbnail = "") {
    this.tittle = tittle
    this.description = description
    this.price = price
    this.code = code
    this.stock = stock
    this.id = Products.incrementID()
    this.thumbnail = thumbnail
    }

    static incrementID () {
        if (this.idIncrement){
            this.idIncrement++
        } else {
            this.idIncrement = 1
        }
        return this.idIncrement
    }
    
}





let escolar = new Products ( "libreta", "rayado", "$150", "10", "L450","");
let escolar1 = new Products ("lapicera", "azul", "$80", "15", "LAP200", "")
let escolar2 = new Products ("goma de borrar", "blanca", "$50", "20", "GDB800","" )
let escolar3 = new Products ("lapiz", "negro", "$70", "30", "LPZ250", "")
let escolar4 = new Products ()


console.log (escolar)
console.log (escolar1)
console.log (escolar2)
console.log (escolar3)
console.log (escolar4)
