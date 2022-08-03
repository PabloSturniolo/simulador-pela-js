const personajes = [
    new Personaje(
        1,
        "personaje.jpeg",
        "Pablo",
        "Programador",
        3,
        20,
        20,
        20,
        20,
        20,
        20,
        20
    ),
    new Personaje(
        2,
        "personaje.jpeg",
        "David",
        "Programador",
        3,
        20,
        20,
        20,
        20,
        20,
        20,
        20
    ),
]
let id = 3;
const catalogoPersonajes = new CatalogoPersonajes(personajes);
console.log("PERSONAJES ORIGINALES", catalogoPersonajes.personajes)

listarPersonajes();

let unoALaVez = false;
const btnMas = document.getElementById("mas");
btnMas.onclick = () => {
    if (unoALaVez == false) {
        unoALaVez = true;
        nuevoPersonaje();
        const formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", function (e) {
            const nombre = document.getElementById("nombre");
            const clase = document.getElementById("clase");
            const nivel = document.getElementById("nivel");
            const fuerza = document.getElementById("fuerza");
            const destreza = document.getElementById("destreza");
            const constitucion = document.getElementById("constitucion");
            const inteligencia = document.getElementById("inteligencia");
            const sabiduria = document.getElementById("sabiduria");
            const carisma = document.getElementById("carisma");
            const danio = document.getElementById("danio");
            if (nombre.value == "" || clase.value == "" || nivel.value == "" || fuerza.value == "" || destreza.value == "" || constitucion.value == "" || inteligencia.value == "" || sabiduria.value == "" || carisma.value == "" || danio.value == "")
                e.preventDefault();
            else {
                catalogoPersonajes.agregarPersonaje(new Personaje(id++, "avatar.png", nombre.value, clase.value, nivel.value, fuerza.value, destreza.value, constitucion.value, inteligencia.value, sabiduria.value, carisma.value, danio.value));
                listarPersonajes();
                unoALaVez = false;
            }
        });
    }
};


const btnLuchar = document.getElementById("luchar");
btnLuchar.onclick = () => {
    selecionar();
}

function selecionar() {
    let nombre1 = prompt(`INGRESE NOMBRE DEL PRIMER LUCHADOR`);
    let personaje1 = personajes.find(x => x.nombre === nombre1);
    while (personaje1 == undefined) {
        alert("EL NOMBRE INGRESADO NO PERTENECE A NINGUN PERSONAJE");
        nombre1 = prompt(`INGRESE NOMBRE DEL PRIMER LUCHADOR`);
        personaje1 = personajes.find(x => x.nombre === nombre1);
    }

    let nombre2 = prompt(`INGRESE NOMBRE DEL SEGUNDO LUCHADOR`);
    let personaje2 = personajes.find(x => x.nombre === nombre2);
    while (personaje2 == undefined) {
        alert("EL NOMBRE INGRESADO NO PERTENECE A NINGUN PERSONAJE");
        nombre2 = prompt(`INGRESE NOMBRE DEL SEGUNDO LUCHADOR`);
        personaje2 = personajes.find(x => x.nombre === nombre2);
    }
    resolucionDeConflictosLaborales(personaje1, personaje2); // :)
}

function nuevoPersonaje() {
    const nodoTabla = document.getElementById("tabla");
    const tablaElemento = document.createElement("div");
    tablaElemento.innerHTML = `<div class="card" style="width: 100%;">
                                        <img src="../imagenes/avatar.png" class="card-img-top" alt="imagen del personaje">
                                        <form id="formulario">
                                            <div class="card-body">
                                                <h5 class="card-title">Nombre: <input id="nombre" type="text" placeholder="Nombre"></h5>
                                                <p class="card-text">Clase: <input id="clase" type="text" placeholder="Clase"></p>
                                                <p class="card-text">Nivel: <input id="nivel" type="number" placeholder="Nivel"></p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">Fuerza: <input id="fuerza" type="number" placeholder="Fuerza"></li>
                                                <li class="list-group-item">Destreza: <input id="destreza" type="number" placeholder="Destreza"></li>
                                                <li class="list-group-item">Constitucion: <input id="constitucion" type="number" placeholder="Constitucion"></li>
                                                <li class="list-group-item">Inteligencia: <input id="inteligencia" type="number" placeholder="Inteligencia"></li>
                                                <li class="list-group-item">Sabiduria: <input id="sabiduria" type="number" placeholder="Sabiduria"></li>
                                                <li class="list-group-item">Carisma: <input id="carisma" type="number" placeholder="Carisma"></li>
                                                <li class="list-group-item">Danio: <input id="danio" type="number" placeholder="Danio"></li>
                                            </ul>
                                            <div class="card-body">
                                                <input id="aceptar" class="btn btn-primary" type="submit" value="Aceptar">
                                            </div>
                                        </form>
                                    </div>`;

    nodoTabla.appendChild(tablaElemento);
}

function listarPersonajes() {
    const nodoTabla = document.getElementById("tabla");
    nodoTabla.innerHTML = "";
    catalogoPersonajes.personajes.forEach((personaje) => {
        const tablaElemento = document.createElement("div");
        tablaElemento.innerHTML = `<div class="card" style="width: 100%;">
                                    <img src="../imagenes/${personaje.imagen}" class="card-img-top" alt="imagen del personaje">
                                    <div class="card-body">
                                        <h5 class="card-title">${personaje.nombre}</h5>
                                        <p class="card-text">Clase: ${personaje.clase}</p>
                                        <p class="card-text">Nivel: ${personaje.nivel}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Fuerza: ${personaje.fuerza}</li>
                                        <li class="list-group-item">Destreza: ${personaje.destreza}</li>
                                        <li class="list-group-item">Constitucion: ${personaje.constitucion}</li>
                                        <li class="list-group-item">Inteligencia: ${personaje.inteligencia}</li>
                                        <li class="list-group-item">Sabiduria: ${personaje.sabiduria}</li>
                                        <li class="list-group-item">Carisma: ${personaje.carisma}</li>
                                        <li class="list-group-item">Danio: ${personaje.danio}</li>
                                    </ul>
                                    <div class="card-body">
                                        <a id="modificar${personaje.id}" class="btn btn-primary modificar">Modificar</a>
                                    </div>
                                </div>`;

        nodoTabla.appendChild(tablaElemento);
    })
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function targetHit(hit, def) {
    tirada20 = getRandom(1, 20);
    if (tirada20 === 1) {
        console.log(`MALA SUERTE`);
        return false;
    }
    if (tirada20 === 20) {
        console.log(`GOLPE CRITICO`);
        return true;
    }
    if ((tirada20 + hit) > (10 + def)) {
        console.log(`HIT: ${(tirada20 + hit)} VS ${(10 + def)} `);
        return true;
    }
    else {
        console.log(`MISS: ${(tirada20 + hit)} VS ${(10 + def)} `);
        return false;
    }
}

function removeHp(hp, damage) {
    if ((hp - damage) >= 0) {
        return hp - damage;
    }
    else {
        return 0;
    }
}

function resolucionDeConflictosLaborales(personaje1, personaje2) {
    let hp1 = personaje1.calcularHitPoint();
    let hp2 = personaje2.calcularHitPoint();

    let hit1 = personaje1.calcularPunteria();
    let hit2 = personaje2.calcularPunteria();

    let def1 = personaje1.calcularDefensa();
    let def2 = personaje2.calcularDefensa();

    let damage1 = personaje1.calcularDanio();
    let damage2 = personaje2.calcularDanio();
    ronda = 1;
    while (hp1 != 0 && hp2 != 0) {
        console.log(`RONDA: ${ronda}`);
        if (targetHit(hit1, def2)) {
            console.log(`${personaje1.nombre} ACIERTA GOLPE`);
            hp2 = removeHp(hp2, damage1);
            console.log(`HP 2: ${hp2}`);
        }
        else {
            console.log(`${personaje1.nombre} FALLA`);
        }
        if (targetHit(hit2, def1)) {
            console.log(`${personaje2.nombre} ACIERTA GOLPE`);
            hp1 = removeHp(hp1, damage2);
            console.log(`HP 1: ${hp1}`);
        }
        else {
            console.log(`${personaje2.nombre} FALLA`);
        }
        ronda++;
    }
    if (hp1 > hp2) {
        alert(`${personaje1.nombre} Win`);
    }
    else {
        if (hp2 > hp1) {
            alert(`${personaje2.nombre} Win`);
        }
        else {
            alert("Empate");
        }
    }
}