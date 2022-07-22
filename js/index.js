class Personaje {
    constructor(nombre, nivel, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, danio) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.fuerza = fuerza;
        this.destreza = destreza;
        this.constitucion = constitucion;
        this.inteligencia = inteligencia;
        this.sabiduria = sabiduria;
        this.carisma = carisma;
        this.danio = danio;
    }

    calcularPunteria() {
        return Math.floor((this.fuerza - 10) / 2);
    }

    calcularDefensa() {
        return Math.floor((this.destreza - 10) / 2);
    }

    calcularHitPoint() {
        return (Math.floor((this.constitucion - 10) / 2) * 5 * this.nivel);
    }

    calcularMana() {
        return (Math.floor((this.sabiduria - 10) / 2) * 5 * this.nivel);
    }

    calcularDanio() {
        return this.danio;
    }
}

const cantidad = Number(prompt(`INGRESE CANTIDAD DE PERSONAJES`));
let personajes = [];

for (let i = 0; i < cantidad; i++) {
    alert(`DATOS DEL PERSONAJE NUMERO ${i + 1}`);
    personajes.push(crearPersonaje());
}

let nombre1 = prompt(`INGRESE NOMBRE DEL PRIMER LUCHADOR`);
let personaje1 = personajes.find(x => x.nombre === nombre1);
while(personaje1 == undefined){
    alert("EL NOMBRE INGRESADO NO PERTENECE A NINGUN PERSONAJE");
    nombre1 = prompt(`INGRESE NOMBRE DEL PRIMER LUCHADOR`);
    personaje1 = personajes.find(x => x.nombre === nombre1);
}

let nombre2 = prompt(`INGRESE NOMBRE DEL SEGUNDO LUCHADOR`);
let personaje2 = personajes.find(x => x.nombre === nombre2);
while(personaje2 == undefined){
    alert("EL NOMBRE INGRESADO NO PERTENECE A NINGUN PERSONAJE");
    nombre2 = prompt(`INGRESE NOMBRE DEL SEGUNDO LUCHADOR`);
    personaje2 = personajes.find(x => x.nombre === nombre2);
}

calculateWinner(personaje1, personaje2);

function crearPersonaje() {
    const nombre = prompt(`INGRESE NOMBRE DEL PERSONAJE`);
    const nivel = Number(prompt(`INGRESE NIVEL DEL PERSONAJE`));
    const fuerza = Number(prompt(`INGRESE LA FUERZA DEL PERSONAJE`));
    const destreza = Number(prompt(`INGRESE LA DESTREZA DEL PERSONAJE`));
    const constitucion = Number(prompt(`INGRESE LA CONSTITUCION DEL PERSONAJE`));
    const inteligencia = Number(prompt(`INGRESE LA INTELIGENCIA DEL PERSONAJE`));
    const sabiduria = Number(prompt(`INGRESE LA SABIDURIA DEL PERSONAJE`));
    const carisma = Number(prompt(`INGRESE LA CARISMA DEL PERSONAJE`));
    const danio = Number(prompt(`INGRESE EL DANIO DEL PERSONAJE`));

    let personaje = new Personaje(nombre, nivel, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, danio);
    return personaje;
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

function calculateWinner(personaje1, personaje2) {
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