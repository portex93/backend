import { promises as fs } from 'fs'

class ProductManager {
    constructor () {
        this.path = "./productos.txt"
        this.Products = []
              
    }

   async addProducts (Products) {
    
        await fs.writeFile (this.path, "hola")
        if (this.Products.find (producto => producto.code == Products.code)){

            

            return ("productos existentes")
            

        } else {
            
            this.Products.push(Products)
        }

        
    }


     async getProducts () {   


    }



     async getProductsById (id) {
        const Products = this.Products.find (producto => producto.id == id )

        if(Products){
            return Products
        }
        return ("Not found")
    }



    async deleteProducts () {

        
    }  



    async updateProducts () {
        
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


const escolar = new Products ( "libreta", "rayado", "$150", "10", "L450","");
const escolar1 = new Products ("lapicera", "azul", "$80", "15", "LAP200", "")
const escolar2 = new Products ("goma de borrar", "blanca", "$50", "20", "GDB800","" )
const escolar3 = new Products ("lapiz", "negro", "$70", "30", "LPZ250", "")
const escolar4 = new Products ()

const productManager = new ProductManager ()



