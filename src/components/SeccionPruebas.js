import React, { Component } from 'react';

// Importar componentes
import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    // var HolaMundo = () => {}
    HolaMundo(nombre, edad) {
        var presentacion =
            (<div>
                <h2>Hola, soy {nombre}</h2>
                <h3>Tengo {edad} años</h3>
            </div>);

        return presentacion;
    }

    render() {
        var nombre = "José Olemar";

        return (
            <section id="content">
                {/* Listado articulos */}
                {/* <div id="articles"> */}
                <h2 className="subheader">Últimos artículos</h2>
                <p> Hola bienvenido al blog con react. </p>
                {this.HolaMundo(nombre, 12)}
                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>
                {/* </div> */}
            </section>
        );
    }
}

export default SeccionPruebas;