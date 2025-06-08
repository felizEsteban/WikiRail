// personajeData.ts
import type { Personaje } from "./personajeModel";

export const personajes: Personaje[] = [
  {
    id: "jingliu",
    nombre: "Jingliu",
    elemento: "Hielo",
    via: "Destrucción",
    rareza: 5,
    imagen: "../../public/pjs_hsr/jingliu.webp",
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
  },
  {
    id: "danheng",
    nombre: "Dan Heng",
    elemento: "Viento",
    via: "Cacería",
    rareza: 4,
    imagen: "../../public/pjs_hsr/danheng.webp",
    descripcion: "Guardia tranquilo del Astral Express.",
    tecnica: "Dragón Silencioso: Inicia combate con velocidad aumentada.",
    pasiva: "Causa más daño a enemigos ralentizados.",
    habilidades: {
      atqBasico: "Lanza de la Brisa: Daño de viento a un enemigo.",
      habilidadBasica: "Embate Aéreo: Daño potenciado si el enemigo está ralentizado.",
      ulti: "Jinete del Viento: Ataque masivo a un solo objetivo.",
      talento: "Respiración del Dragón: Más daño si la velocidad es superior.",
    },
    habilidadesAdicionales: {
      hbd1: "Mejora la velocidad tras usar la habilidad.",
      hbd2: "Mayor probabilidad de crítico.",
      hbd3: "Reduce el tiempo de recarga del ulti.",
    },
    mnemoduende: {
      talento: "",
      habilidad: "",
    },
  },
];
