import React, { Component } from 'react'

export class FilaDePelicula extends Component {

    render() {
        return (
            <div className="inline" style={{width: 150}}>
                <img className="poster" style={{maxWidth: 150}} src={'/images/' + this.props.pelicula.poster} alt={this.props.pelicula.nombre} />
                &nbsp;
                &nbsp;
                <div >
                {this.props.pelicula.nombre}
                </div>
            </div>
        )
    }

}