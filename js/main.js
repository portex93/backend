import { promises as fs } from 'fs'

const RUTA_ARCHIVO = './desafio.txt'

const productos = []

const prod1 = { nombre: "cuaderno"}
const prod2 = { nombre: "plasticola"}

const consultaTXT = async (ruta) => {
   try { 
    await fs.writeFile (ruta, JSON.stringify(productos))
    const contenido = await fs.readFile (ruta , 'utf-8')
    
    const aux = JSON.parse (contenido)
    aux.push(prod1,prod2)
    await fs.writeFile (ruta, JSON.stringify(aux))
    aux.push(prod1,prod2)
    
    } catch (error) {
        return error
    }
}

consultaTXT (RUTA_ARCHIVO)