import * as name from "./index.js";

const demostracion = new name.Contenedor('./productos.txt')

const product = {
    producto: 'pelota',
    precio: 3800,
    thumbnail: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/0c53d7987a37483cbed3a33301117ed5_9366/Brazuca_-_Balon_OFICIAL_de_la_Copa_Mundial_FIFA_Brazil_2014_Blanco_G73617_01_standard.jpg'
}

const probarSave = () => demostracion.save(product)
const probarGetById = () => demostracion.getById(1)
const probarGetAll = () => demostracion.getAll();
const probarDeleteById = () => demostracion.deleteById(2)
const probarDeleteAll = () => demostracion.deleteAll()