import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {

    state = {};

    cambiarTitulo = (e) => {

        var { peliculas } = this.state;
        // var random = Math.floor(Math.random() * 3);
        // peliculas[random].titulo = 'Batman Begins';
        peliculas[0].titulo = 'Batman Begins';

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log('favorita Marcada');
        console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        console.log('Se va a montar el componente');
        this.setState({
            peliculas: [
                { titulo: 'Batman vs Superman', image: 'https://1.bp.blogspot.com/-4vx8-Drnslg/V4wxMmeTM_I/AAAAAAAAca8/ih_Oiu04XZ8LjykSPMSOkOJipUsfgV-VgCLcB/s1600/Cj9ZChTUYAImnkX.jpg' },
                { titulo: 'Gran torino', image: 'https://2.bp.blogspot.com/-DR3U5R4aMY8/UQUgq14L7WI/AAAAAAAAAV0/e4eQkGO66Yw/s1600/descarga.jpg' },
                { titulo: 'Looper', image: 'https://1.bp.blogspot.com/--NLZ2vQGrp4/UHG2mxLLQAI/AAAAAAAAAqE/7Sw3cXwIFck/s1600/Looper+-+Movie+Poster.jpg' }
            ],
            nombre: 'Jose Luis',
            favorita: {}
        });
    }

    componentDidMount() {
        console.log('Ya se ha se montado el  componente');
    }

    componentWillUnmount() {
        console.log('Se va ha desmontar el componente');
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }
        var sStyle = {
            color: '#ccc'
        }

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className='favorita' style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span style={sStyle}><b>{this.state.favorita.titulo}</b></span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay película favorita</p>
            )
        }

        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />
                <div className="center">
                    <div id='content' className='peliculas' >
                        <h2 className='subheader'>Listados de películas</h2>
                        <p>Seleccion de las peliculas favoritas de {this.state.nombre}</p>
                        <p>
                            <button onClick={this.cambiarTitulo}>Cambiar Titulo a Batman</button>
                        </p>
                        {/* { this.state.favorita.titulo ? (
                    <p className='favorita' style={pStyle}>
                        <strong>La pelicula favorita es: </strong>
                        <span style={sStyle}><b>{this.state.favorita.titulo}</b></span>
                    </p>
                ) : (
                        <p>No hay película favorita</p>
                    )
                } */}
                        {favorita}

                        {/* Crear componente pelicula */}

                        <div id='articles' className='peliculas'>
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div >
            </React.Fragment>
        );
    }
}
export default Peliculas;