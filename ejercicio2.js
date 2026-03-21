class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }
    ficha() {
        return `Titulo: ${this.titulo} | Genero: ${this.genero} | anio: ${this.anio}`
    }
    retirar() {
        this.disponible = false
        return `${this.titulo} ha sido retirado`
    }
    estado() {
        const estado = this.disponible ? "DISPONIBLE" : "RETIRADO"
    }
}
class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        const horas = Math.floor(this.duracion / 60);
        const minutos = this.duracion % 60;
        return `${horas}h ${minutos}min`;
    }

    ficha() {
        return `${super.ficha()} | Duración: ${this.duracionFormateada()}`;
    }
}
class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return `${super.ficha()} | Temporadas: ${this.temporadas} | Total episodios: ${this.totalEpisodios()}`;
    }
}

const p1 = new Pelicula("Interstellar", "Sci-Fi", 2014, 169);
const p2 = new Pelicula("El Laberinto del Fauno", "Fantasía", 2006, 118);

const s1 = new Serie("Breaking Bad", "Drama", 2008, 5);
const s2 = new Serie("Stranger Things", "Terror", 2016, 4);

s1.registrarEpisodios(13);
s2.registrarEpisodios(9);

console.log(p1.ficha());
console.log(p2.ficha());
console.log(s1.ficha());
console.log(s2.ficha());

console.log("\n--- Retiro de contenido ---");
console.log(p2.retirar());
console.log(p2.estado());
console.log(s1.estado());

console.log("\n========== CHECKPOINT 5 ==========\n");

const pelicula1 = new Pelicula("Inception", "Sci-Fi", 2010, 148);
const pelicula2 = new Pelicula("Parasite", "Thriller", 2019, 132);
const pelicula3 = new Pelicula("Coco", "Animación", 2017, 105);

const serie1 = new Serie("The Last of Us", "Drama", 2023, 2);
const serie2 = new Serie("Dark", "Sci-Fi", 2017, 3);
const serie3 = new Serie("Squid Game", "Thriller", 2021, 2);

serie1.registrarEpisodios(7);
serie2.registrarEpisodios(8);
serie3.registrarEpisodios(9);

const catalogo = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3];
console.log("--- Fichas del catálogo ---\n");
for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}

// 4 — Retirar dos contenidos
console.log("\n--- Retiros ---");
console.log(pelicula2.retirar());
console.log(serie3.retirar());
console.log(pelicula2.estado());
console.log(serie3.estado());

// 5 — Contar disponibles
let contador = 0;
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        contador++;
    }
}
console.log(`\nContenidos disponibles: ${contador} de ${catalogo.length}`);