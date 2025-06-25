// personajeData.ts
import type { Personaje } from "./personajeModel";

export const personajes: Personaje[] = [
  {
    id: "nahida",
    nombre: "Nahida",
    elemento: "Dendro",
    rareza: 5,
    arma: "Catalizador",
    region: "Sumeru",
    imagen: "../../pjs_genshin/nahida.webp",
    descripcion: "La Arconte Dendro, también conocida como la Pequeña Mayor de Sumeru.",
    tecnica: "Ilusiones Lotos: libera un dominio de Dendro que conecta enemigos marcados.",
    pasiva: "Aumenta el dominio elemental del equipo al reaccionar con Dendro.",
    habilidades: {
      atqBasico: "Ataque del Corazón Iluminado: lanza ataques de Dendro a distancia.",
      habilidadBasica: "Conexión de la Sabiduría: marca enemigos y causa daño múltiple en cadena.",
      ulti: "Santuario de los Sueños: crea una zona de apoyo que otorga buffs según los elementos del equipo.",
      talento: "Clarividencia: bonificaciones a los aliados según condiciones específicas.",
    },
    habilidadesAdicionales: {
      hbd1: "Reduce la resistencia Dendro de enemigos marcados.",
      hbd2: "Recupera energía al activar reacciones elementales.",
      hbd3: "Extiende la duración del Santuario de los Sueños.",
    }
  },
  {
    id: "xiangling",
    nombre: "Xiangling",
    elemento: "Pyro",
    rareza: 4,
    arma: "Lanza",
    region: "Liyue",
    imagen: "../../pjs_genshin/Xiangling_Wish.webp",
    descripcion: "Una joven chef entusiasta y guerrera valiente del Restaurante Wanmin.",
    tecnica: "Guoba al Ataque: invoca a Guoba que escupe fuego Pyro a los enemigos.",
    pasiva: "Aumenta el bono de Pyro tras usar la habilidad elemental.",
    habilidades: {
      atqBasico: "Ataque de Lanza: combos rápidos de daño físico.",
      habilidadBasica: "Guoba Ataque: invoca un panda que lanza fuego.",
      ulti: "Torbellino de Pyro: lanza una rueda de fuego que daña continuamente.",
      talento: "Sabor Intenso: bonifica daño al cocinar comidas perfectas.",
    },
    habilidadesAdicionales: {
      hbd1: "Mejora la duración del ulti.",
      hbd2: "Incrementa la velocidad de ataque mientras el ulti está activo.",
      hbd3: "Reduce el costo de energía.",
    }
  }
];
