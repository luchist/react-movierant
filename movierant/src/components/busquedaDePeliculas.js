import React, { Component } from 'react'
import { PeliculaService } from '../services/peliculaService'
import { ListaDePeliculas } from './listaDePeliculas'
import { Pelicula } from '../domain/pelicula'

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

export class BusquedaDePeliculas extends Component {

    constructor(props) {
        super(props)
        this.peliculaService = new PeliculaService()
        this.state = {
            search: new Pelicula("", ""),
            peliculas: this.peliculaService.getAllPeliculas()
        }
    }

    handleChange(property, event) {
        event.preventDefault()
        const search = this.state.search
        search[property] = event.target.value
        this.setState({
            search: search,
            peliculas: this.peliculaService.getPeliculas(search)
        })
    }

    render() {
        return (
            <div>
                <div className="search">
                    <FormControl className="formControl">
                        <FormHelperText>Nombre de pelicula</FormHelperText>
                        <TextField
                            id="pelicula"
                            value={this.state.search.nombre}
                            onChange={this.handleChange.bind(this, 'nombre')}
                        />
                       
                    </FormControl>
                </div>
                <ListaDePeliculas peliculas={this.state.peliculas} />
            </div>
        )
    }

}