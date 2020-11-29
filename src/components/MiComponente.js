import React, { Component } from 'react';

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: 'Pizza',
            imgrediente: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400
        };

        return (
            <div className="mi-componente">
                <hr />
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{'Calorias: ' + receta.calorias}</h2>
                <ol>
                    {
                        receta.imgrediente.map((ingrediente, i) => {
                            return (
                                <li key={i}> {ingrediente} </li>
                            );
                        })
                    }
                </ol>
                <hr />
                {this.props.saludo &&
                    <React.Fragment>
                        <h1>Desde una prop: </h1>
                        <h3>{this.props.saludo}</h3>
                    </React.Fragment>
                }
                <hr />
            </div>
        );
    }
}

export default MiComponente;