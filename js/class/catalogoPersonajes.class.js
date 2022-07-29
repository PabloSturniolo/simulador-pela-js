class CatalogoPersonajes {
    constructor(personajes) {
        this.personajes = personajes;
    }

    agregarPersonaje(personaje) {
        this.personajes.push(personaje);
    }

    darCantidad() {
        return this.personajes.length;
    }

    listarPersonajes() {
        this.personajes.forEach((personaje) => {
            console.log("LISTADO", personaje);
        })
    }

    modificarPersonaje(nombreABuscar, personaje) {
        let personajeEncontrado = this.personajes.find((x) =>
            x.nombre.includes(nombreABuscar)
        )
        if (personajeEncontrado) {
            personajeEncontrado.nombre = personaje.nombre;
            personajeEncontrado.nivel = personaje.nivel;
            personajeEncontrado.fuerza = personaje.fuerza;
            personajeEncontrado.destreza = personaje.destreza;
            personajeEncontrado.constitucion = personaje.constitucion;
            personajeEncontrado.inteligencia = personaje.inteligencia;
            personajeEncontrado.sabiduria = personaje.sabiduria;
            personajeEncontrado.carisma = personaje.carisma;
            personajeEncontrado.danio = personaje.danio;
            console.log("Personaje Modificado", this.villanos);
        }
        else {
            alert("NO PUEDO MODIFICAR")
        }
    }
}