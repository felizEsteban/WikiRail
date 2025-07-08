import type { Personaje } from "./personajeModel";

const pj = (id: string): string =>
  `/GI/gi/UI_AvatarIcon_${id}.webp`;
const elemento = (id: string): string =>
  `/GI/elementos/${id}.webp`;
const arma = (id: string): string =>
  `/GI/arma/${id}.webp`;
const iconArtefacto = (id: string): string =>
  `/GI/artefactos/${id}.webp`;
const iconArma = (id: string): string =>
  `/GI/weapons/UI_EquipIcon_${id}.webp`;

export const personajes: Personaje[] = [
  {
    id: "nahida",
    nombre: "Nahida",
    elemento: elemento("Dendro"),
    rareza: 5,
    arma: arma("catalizador"),
    region: "Sumeru",
    imagen: pj("Nahida"),
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
    },
    guia: {
      artefactos: [
        { nombre: "Recuerdos del Bosque", imagen: iconArtefacto("Recuerdos") },
        { nombre: "Sueños Áureos", imagen: iconArtefacto("Sueños") }
      ],
      arma: [
        { nombre: "Mil Sueños Flotando", imagen: iconArma("Catalyst_Ayus_Awaken") },
        { nombre: "Oración Perdida a los Vientos Sagrados", imagen: iconArma("Catalyst_Fourwinds_Awaken") }
      ],
      composicionesEquipo: [
        { personaje: "Nahida", imagen: pj("Nahida") },
        { personaje: "Yae Miko", imagen: pj("Yae") },
        { personaje: "Raiden Shogun", imagen: pj("Shougun") },
        { personaje: "Zhongli", imagen: pj("Zhongli") }
      ]
    }
  },
  {
    id: "xiangling",
    nombre: "Xiangling",
    elemento: elemento("Pyro"),
    rareza: 4,
    arma: arma("lanza"),
    region: "Liyue",
    imagen: pj("Xiangling"),
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
    },
    guia: {
      artefactos: [
        { nombre: "Bruja Carmesí en Llamas", imagen: iconArtefacto("Bruja") },
        { nombre: "Reminiscencia de la Purificación", imagen: iconArtefacto("Reminiscencia") }
      ],
      arma: [
        { nombre: "Lanza de Espina de Dragón", imagen: iconArma("Pole_Stardust_Awaken") },
        { nombre: "Lanza de Favonius", imagen: iconArma("Pole_Zephyrus_Awaken") },
        {nombre: "La Captura", imagen: iconArma("Pole_Mori_Awaken") }
      ],
      composicionesEquipo: [
        { personaje: "Xiangling", imagen: pj("Xiangling") },
        { personaje: "Bennett", imagen: pj("Bennett") },
        { personaje: "Xingqiu", imagen: pj("Xingqiu") },
        { personaje: "Sucrose", imagen: pj("Sucrose") }
      ]
    }
  }
];
