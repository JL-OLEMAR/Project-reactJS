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
            </div>
        );
    }
}

export default MiComponente;