import { Pelicula } from "../domain/pelicula"

const peliculas = [
    new Pelicula("Incredibles2","Animada"),
    new Pelicula("It","Terror"),
    new Pelicula("JurassicWorldFallenKingdom","Accion")

]

export class PeliculaService {

    getAllPeliculas() { return peliculas }

    getPeliculas(_pelicula) {
        return peliculas.filter(pelicula => pelicula.matches(_pelicula))
    }

    getPelicula(nombre) {
        return peliculas.find(pelicula => pelicula.nombre.toLowerCase() === nombre.toLowerCase())
    }

}