class ProductManager {
    constructor() {
        this.Products = []
    }

    addProducts (Products) {
        
    }
}

class Products {
    constructor (tittle, description, price, thumbnail, code, stock) {
    this.tittle = tittle
    this.description = description
    this.price = price
    this.code = code
    this.stock = stock
    this.thumbnail = thumbnail
    }
    
}





let escolar = new Products ( "libreta", "rayado", "$150", 1,"10");
let escolar1 = new Products ("lapicera", "azul", "$80", 2, "15")
let escolar2 = new Products ("goma de borrar", "blanca", "$50", 3, "20")
let escolar3 = new Products ("lapiz", "negro", "$70", 4, "30")

console.log()



