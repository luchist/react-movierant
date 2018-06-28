import React, { Component } from 'react'
import { FilaDePelicula } from './filaDePelicula'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export class ListaDePeliculas extends Component {

    render() {
        return (
            this.props.peliculas.map(pelicula =>
                <Card key={'card' + pelicula.nombre}>
                    <CardContent key={'content' + pelicula.nombre}>
                        <FilaDePelicula pelicula={pelicula} key={pelicula.nombre} />
                    </CardContent>
                </Card>
            )
        )
    }

}