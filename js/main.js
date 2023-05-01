import { promises as fs } from 'fs'

const RUTA_ARCHIVO = './ruta.txt'

const productos = []

const prod1 = { nombre: "cuaderno"}
const prod2 = { nombre: "plasticola"}
const prod3 = { nombre: "pelota"}

const consultaTXT = async (ruta) => {
   try { 
    await fs.writeFile (ruta, JSON.stringify(productos))
    const contenido = await fs.readFile (ruta , 'utf-8')
    
    const aux = JSON.parse (contenido)
    aux.push(prod1,prod2,prod3)
    await fs.writeFile (ruta, JSON.stringify(aux))
    aux.push(prod1,prod2,prod3)
    
    } catch (error) {
        return error
    }
}

consultaTXT (RUTA_ARCHIVO)