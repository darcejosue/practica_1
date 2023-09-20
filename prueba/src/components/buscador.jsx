import React from "react";
import { db } from "./bd";

function Buscar(props) {

    
    for(let i = 0; i < db.length; i++){
        db[i].name = db[i].name.toUpperCase();
    }
    
    const nombre = db.filter(find => find.name.includes(props.buscar));
    const lista = nombre.map( person => (<li>{person.name}</li>) );

    return (
        <div>
            {lista}
            {props.buscar}
        </div>
    )
}

export default Buscar