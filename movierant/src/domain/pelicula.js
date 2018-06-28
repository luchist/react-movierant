export class Pelicula {
    constructor(nombre, genero){
        this.nombre=nombre
        this.genero=genero
    }

    get poster(){
        this.nombre + '.jpg'
    }

    match(property, other) {
        return this[property].toLowerCase().includes(other[property].toLowerCase())
    }
}