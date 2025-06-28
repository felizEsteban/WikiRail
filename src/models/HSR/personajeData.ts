// personajeData.ts
import type { Personaje } from "./personajeModel";

export const personajes: Personaje[] = [
  {
    id: "jingliu",
    nombre: "Jingliu",
    elemento: "Hielo",
    via: "Destrucción",
    rareza: 5,
    imagen: "https://homdgcat.wiki/images/avatarshopicon/avatar/1212.png",
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
        { nombre: "Académico perdido en la erudición", imagen: "https://homdgcat.wiki/images/itemfigures/71039.png" },
        { nombre: "Arena Rutilante", imagen: "https://homdgcat.wiki/images/itemfigures/71022.png" }
      ],
      conoDeLuz: [
        { nombre: "Llama de sangre, enciende mi camino", imagen: "https://homdgcat.wiki/images/lightconemediumicon/23039.png" },
        { nombre: "Seré mi propia espada", imagen: "https://homdgcat.wiki/images/lightconemediumicon/23014.png" },
        { nombre: "Un rastro de sangre pasada", imagen: "https://homdgcat.wiki/images/lightconemediumicon/21058.png" }
      ],
      composicionesEquipo: [
        { personaje: "Jingliu", imagen: "https://homdgcat.wiki/images/avatarshopicon/avatar/1212.png" },
        { personaje: "Sunday", imagen: "https://homdgcat.wiki/images/avatarshopicon/avatar/1313.png" },
        { personaje: "Tribbie", imagen: "https://homdgcat.wiki/images/avatarshopicon/avatar/1403.png" },
        { personaje: "Hyacine", imagen: "https://homdgcat.wiki/images/avatarshopicon/avatar/1409.png" }
      ]
    }
  },
  // Más personajes...
];
