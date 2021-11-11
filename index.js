import { promises as fs } from 'fs';
/* const { promises: fs } = require('fs') */

export class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }
  async save(obj) {
    const objs = await this.getAll()
    let newId
    if (objs.length == 0) {
      newId = 1
    } else {
      newId = objs[objs.length - 1].id + 1
    }
    const newObj = { ...obj, id: newId }
    objs.push(newObj)
    try {
      await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
      return newId
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`)
    }
  }
  async getById(id) {
    const objs = await this.getAll()
    let buscado = objs.find(o => o.id === id)
    if(buscado){
        return buscado
    }else{
        return null
    }
  }
  async getAll() {
    try {
        const objs = await fs.readFile(this.ruta, 'utf-8')
        const all = JSON.parse(objs)
        return all
    } catch (error) {
        return []
    }
  }
  async deleteById(id) {
    const objs = await this.getAll()
    const index = objs.findIndex(o => o.id == id)
    if (index == -1) {
      throw new Error(`Error al borrar: no se encontró el id ${id}`)
    }
    objs.splice(index, 1)
    try {
      await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
    } catch (error) {
      throw new Error(`Error al borrar: ${error}`)
    }
  }
  async deleteAll() {
    await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
  }
}