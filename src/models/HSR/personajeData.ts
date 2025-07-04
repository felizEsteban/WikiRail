// src/data/personajesData.ts
import { pj, conoDeLuz, via, elemento, iconArtefacto, iconOrnamento } from "../../utils/rutas";  // Importamos las funciones para las rutas

// Datos de personajes
export const personajes = [
  {
    id: "jingliu",
    nombre: "Jingliu",
    elemento: elemento("hie"),
    rareza: 5,
    region: "Xianzhou Luofu",
    imagen: pj("jingliu"),
    via: via("des"),
    descripcion: "Una ex-general de Xianzhou Luofu con una conexión con la luna y el vacío.",
    tecnica: "Moonlit Slash: Entra en combate con Syzygy.",
    pasiva: "Obtiene Syzygy al usar habilidades, potenciando sus ataques.",
    habilidades: {
      atqBasico: "Corte Brillante: Daño de Hielo a un enemigo basado en su HP máximo.",
      habilidadBasica: "Río Glacial: Daño en área, consume Syzygy.",
      ulti: "Sueño Efímero: Gran daño de hielo a un enemigo y sus adyacentes.",
      talento: "Destello Trascendente: Gana Syzygy al usar habilidad especial.",
    },
    habilidadesAdicionales: {
      hbd1: "Aumenta el daño al tener Syzygy.",
      hbd2: "Recupera HP al usar habilidad definitiva.",
      hbd3: "Mejora la generación de energía.",
    },
    mnemoduende: {
      talento: "",
      habilidad: "",
    },
    guia: {
      artefactos: [
        { nombre: "Académico perdido en la erudición", imagen: iconArtefacto("eruditos") },
        { nombre: "Cazador del Bosque Glacial", imagen: iconArtefacto("cazador") },
        { nombre: "Arena Rutilate", imagen: iconOrnamento("arena") },
        { nombre: "Glamoth, frente del firmamento", imagen: iconOrnamento("glamoth") }
      ],
      conoDeLuz: [
        { nombre: "Llama de sangre, enciende mi camino", imagen: conoDeLuz("Sobre_la_caida_de_un_eon") },
        { nombre: "Seré mi propia espada", imagen: conoDeLuz("Juego_de_espadas") },
        { nombre: "ALgo insustituible", imagen: conoDeLuz("A_bailar") }
      ],
      composicionesEquipo: [
        { personaje: "Jingliu", imagen: pj("jingliu") },
        { personaje: "Sunday", imagen: pj("sunday") },
        { personaje: "Tribbie", imagen: pj("tribbie") },
        { personaje: "Hyacine", imagen: pj("hyacine") }
      ]
    }
  },
  {
    id: "trazacaminos_destruccion",
    nombre: "Trazacaminos Destrucción",
    elemento: elemento("fis"),
    rareza: 5,
    region: "Xianzhou Luofu",
    imagen: pj('trazacaminos_destruccion'),
    via: via("des"),
    descripcion: "Un guerrero imparable que canaliza su ira en devastadores ataques físicos.",
    tecnica: "Golpe Mortal: Aumenta el daño físico del siguiente ataque.",
    pasiva: "Gana un bono de ATK al romper la debilidad de un enemigo.",
    habilidades: {
      atqBasico: "Golpe Mortal: Daño físico a un enemigo.",
      habilidadBasica: "Golpe Aéreo: Daño físico en área a enemigos cercanos.",
      ulti: "Furia Desatada: Daño físico masivo a un enemigo y enemigos cercanos.",
      talento: "Furia Incontenible: Aumenta el daño al romper la debilidad de un enemigo."
    },
    habilidadesAdicionales: {
      hbd1: "Aumenta el daño al tener un bono de ATK.",
      hbd2: "Recupera HP al usar habilidad definitiva.",
      hbd3: "Mejora la generación de energía."
    },
    mnemoduende: {
      talento: "",
      habilidad: "",
    },
    guia: {
      artefactos: [
        { nombre: "Campeona de Boxeo Callejero", imagen: iconArtefacto('aguila') },
        { nombre: "Estación Sellaespacios", imagen: iconOrnamento('arbol_gigante') }
      ],
      conoDeLuz: [
        { nombre: "Sobre la caída de un Eón", imagen: conoDeLuz('A_bailar') },
        { nombre: "Algo insustituible", imagen: conoDeLuz('A_bailar') },
        { nombre: "Bajo el cielo azul", imagen: conoDeLuz('A_bailar') }
      ],
      composicionesEquipo: [
        { personaje: "Trazacaminos Destrucción", imagen: pj('trazacaminos_destruccion')},
        { personaje: "Tingyun", imagen: pj('acheron') },
        { personaje: "Cifer", imagen: pj('cifer')},
        { personaje: "Huo Huo", imagen: pj('huohuo')}
      ]
    }
  }
];
