export class Pelicula {
    constructor(nombre, genero){
        this.nombre=nombre
        this.genero=genero
    }

    get poster(){
        return this.nombre + '.jpg'
    }

    get key() {
        return this.nombre.replace(' ', '-').toLowerCase()
    }

    matches(_pelicula) {
        return this.match("nombre", _pelicula)
    }

    match(property, other) {
        return this[property].toLowerCase().includes(other[property].toLowerCase())
    }
}