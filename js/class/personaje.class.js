class Personaje {
    constructor(id, imagen, nombre, clase, nivel, fuerza, destreza, constitucion, inteligencia, sabiduria, carisma, danio) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.clase = clase;
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