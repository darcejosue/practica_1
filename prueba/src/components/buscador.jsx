import React from "react";
import { db } from "./bd";

function Buscar(props) {
    const nombre = db.filter(find => find.name.includes(props.buscar));
    const lista = nombre.map( person => (<li>{person.name}</li>) )

    return (
        <div>
            {lista}
        </div>
    )
}

export default Buscar