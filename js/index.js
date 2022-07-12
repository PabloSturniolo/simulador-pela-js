
let hp1 = Number(prompt(`INGRESE PUNTOS DE VIDA DEL JUGADOR 1`));
let hp2 = Number(prompt(`INGRESE PUNTOS DE VIDA DEL JUGADOR 2`));

let hit1 = Number(prompt(`INGRESE PUNTERIA DEL JUGADOR 1`));
let hit2 = Number(prompt(`INGRESE PUNTERIA DEL JUGADOR 2`));

let def1 = Number(prompt(`INGRESE DEFENSA DEL JUGADOR 1`));
let def2 = Number(prompt(`INGRESE DEFENSA DEL JUGADOR 2`));

let damage1 = Number(prompt(`INGRESE DAÑO DEL JUGADOR 1`));
let damage2 = Number(prompt(`INGRESE DAÑO DEL JUGADOR 2`));

calculateWinner();

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

function calculateWinner() {
    ronda = 1;
    while (hp1 != 0 && hp2 != 0) {
        console.log(`RONDA: ${ronda}`);
        if (targetHit(hit1, def2)) {
            console.log(`JUGADOR 1 ACIERTA GOLPE`);
            hp2 = removeHp(hp2, damage1);
            console.log(`HP 2: ${hp2}`);
        }
        else{
            console.log(`JUGADOR 1 FALLA`);
        }
        if (targetHit(hit2, def1)) {
            console.log("JUGADOR 2 ACIERTA GOLPE");
            hp1 = removeHp(hp1, damage2);
            console.log(`HP 1: ${hp1}`);
        }
        else{
            console.log(`JUGADOR 2 FALLA`);
        }
        ronda++;
    }
    if (hp1 > hp2) {
        alert("Player 1 Win");
    }
    else {
        if (hp2 > hp1) {
            alert("Player 2 Win");
        }
        else {
            alert("Empate");
        }
    }
}