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
        { nombre: "Sangre y Fuego, Abran Camino", imagen: conoDeLuz("sangre_y_fuego_abran_camino") },
        { nombre: "Seré mi propia espada", imagen: conoDeLuz("yo_sere_mi_propia_espada") },
        { nombre: "A bailar", imagen: conoDeLuz("a_bailar") }
      ],
      composicionesEquipo: [
        { personaje: "Jingliu", imagen: pj("jingliu") },
        { personaje: "Sunday", imagen: pj("sunday") },
        { personaje: "Tribbie", imagen: pj("tribbie") },
        { personaje: "Hyacine", imagen: pj("hyacine") }
      ]
    }
  }, {
    id: "acheron",
    nombre: "Acheron",
    elemento: elemento('ray'),
    rareza: 5,
    region: "Penacony",
    imagen: pj('acheron'),
    via: via('nih'),
    descripcion: "Una vagabunda que se hace llamar 'Vigilante de la Galaxia'. Nadie sabe su verdadero nombre. Deambula sola por el cosmos, llevando consigo una larga espada.",
    tecnica: "Sueño Cortante: Aplica 1 acumulación de Rojo Sacrificial a todos los enemigos cercanos.",
    pasiva: "Nudos Carmesí: Cada vez que Acheron inflige daño, obtiene 1 acumulación de Nudo Carmesí. Al alcanzar 3 acumulaciones, se activa una habilidad definitiva gratuita.",
    habilidades: {
      atqBasico: "Cruce Marchito Trilateral: Daño de Rayo a un enemigo cercano.",
      habilidadBasica: "Diluvio de Cortes: Daño en área a los enemigos cercanos, aplica 1 acumulación de Rojo Sacrificial.",
      ulti: "Sueño Efímero: Daño de Rayo a todos los enemigos cercanos, inflige daño adicional por cada acumulación de Nudo Carmesí.",
      talento: "Hojas Otoñales: Al usar habilidad especial, Acheron obtiene 1 acumulación de Nudo Carmesí adicional."
    },
    habilidadesAdicionales: {
      hbd1: "Aumenta el daño de habilidad básica.",
      hbd2: "Reduce el tiempo de recarga de la habilidad definitiva.",
      hbd3: "Mejora la generación de energía."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Buceadora pionera del agua muerta", imagen: iconArtefacto('buceadora') },
        { nombre: "Cazador del Bosque Glacial", imagen: iconArtefacto('cazador') },
        { nombre: "Arena Rutilante", imagen: iconOrnamento('arena') },
        { nombre: "Glamoth, Frente del Firmamento", imagen: iconOrnamento('glamoth') }
      ],
      conoDeLuz: [
        { nombre: "A lo largo de la Orilla Pasante", imagen: conoDeLuz('orilla_inalcanzable') },
        { nombre: "Buenas Noches y Dulces Sueños", imagen: conoDeLuz('buenas_noches_que_duermas_bien') },
        { nombre: "Lluvia Incesante", imagen: conoDeLuz('lluvia_incesante') }
      ],
      composicionesEquipo: [
        { personaje: "Acheron", imagen: pj('acheron') },
        { personaje: "Silver Wolf", imagen: pj('silver_wolf') },
        { personaje: "Pela", imagen: pj('pela') },
        { personaje: "Gallagher", imagen: pj('gallagher') }
      ]
    }
  }, {
    id: "aglaea",
    nombre: "Aglaea",
    elemento: elemento('ray'),
    rareza: 5,
    region: "Reminiscencia",
    imagen: pj('aglaea'),
    via: via('rem'),
    descripcion: "Un misterioso ser de la Reminiscencia que utiliza la invocación de un sastre mnemoduende para potenciar su poder.",
    tecnica: "Miel con espinas: Inflige un 0.5% del ATQ de Aglaea como Daño de Rayo a un enemigo.",
    pasiva: "Álzate, renombre sublime: Regenera un 0.25% de los PV máx. del Sastre y lo invoca si no está en el campo.",
    habilidades: {
      atqBasico: "Miel con espinas: Daño de Rayo a un enemigo.",
      habilidadBasica: "Álzate, renombre sublime: Regenera PV del Sastre e invoca al mnemoduende.",
      ulti: "Bailemos, sastre del destino: Potenciación y autoactiva estado de Disposición suprema.",
      talento: "Dedos de rosa: Aumenta la VEL y da un extra de daño a los enemigos con Hilván."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de daño: Rayo +3.2.",
      hbd2: "Bonificación de Prob. CRIT +2.7.",
      hbd3: "Aumenta el ATQ de Aglaea y el Sastre cuando están en Disposición suprema."
    },
    mnemoduende: {
      talento: "Dedos de rosa",
      habilidad: "Bailemos, sastre del destino"
    },
    guia: {
      artefactos: [
        { nombre: "Héroe de la epopeya triunfal", imagen: iconArtefacto('heroe') },
        { nombre: "Pistolera de la espiga silvestre", imagen: iconArtefacto('pistolera') },
        { nombre: "Arena rutilante", imagen: iconOrnamento('arena') },
        { nombre: "Glamoth, frente del firmamento", imagen: iconOrnamento('glamoth') }
      ],
      conoDeLuz: [
        { nombre: "Tiempo urdido en oro", imagen: conoDeLuz('tiempo_urdido_en_oro') },
        { nombre: "Más sudor y menos lágrimas", imagen: conoDeLuz('mas_sudor_y_menos_lagrimas') },
        { nombre: "Saludo entre genios", imagen: conoDeLuz('saludo_entre_genios') }
      ],
      composicionesEquipo: [
        { personaje: "Aglaea", imagen: pj('aglaea') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Lynx", imagen: pj('lynx') },
        { personaje: "Sunday", imagen: pj('sunday') }
      ]
    }
  }, {
    id: "anaxa",
    nombre: "Anaxa",
    elemento: elemento('vie'),
    rareza: 5,
    region: "Erudición",
    imagen: pj('anaxa'),
    via: via('eru'),
    descripcion: "Un experto en la manipulación de debilidades, Anaxa siembra caos en el campo de batalla al implantar debilidades a sus enemigos, potenciando el daño de su equipo.",
    tecnica: "Pupila prismática: Afecta a los enemigos en un área con Aterrorizado. Los enemigos aterrorizados huyen durante 10 segundos.",
    pasiva: "Sabiduría tres veces grande: Cada vez que Anaxa golpea, implanta un tipo de debilidad al azar en el enemigo.",
    habilidades: {
      atqBasico: "Verdad destilada del dolor: Inflige daño de viento a un enemigo.",
      habilidadBasica: "Fractales que expulsan lo falso: Rebote de daño de viento a los enemigos, aumentando el daño con cada rebote.",
      ulti: "Tierra de verdor esculpida: Inflige daño de viento a todos los enemigos y aplica múltiples debilidades simultáneamente.",
      talento: "Sabiduría tres veces grande: Implanta debilidades y aumenta el daño a los enemigos con múltiples debilidades."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de daño: Viento +3.2.",
      hbd2: "Recupera energía adicional tras usar el ATQ básico.",
      hbd3: "Aumenta el daño crítico y la efectividad de debilidades en el campo."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Genio de las estrellas relucientes", imagen: iconArtefacto('genio') },
        { nombre: "Arena rutilante", imagen: iconOrnamento('arena') },
        { nombre: "Eruditos perdidos en el mar del conocimiento", imagen: iconArtefacto('eruditos') },
        { nombre: "Buceadora pionera del agua muerta", imagen: iconArtefacto('buceadora') }
      ],
      conoDeLuz: [
        { nombre: "La vida en llamas", imagen: conoDeLuz('la_vida_en_llamas') },
        { nombre: "Hacia lo inescrutable", imagen: conoDeLuz('hacia_lo_inescrutable') },
        { nombre: "El gran negocio cósmico", imagen: conoDeLuz('el_gran_negocio_cosmico') }
      ],
      composicionesEquipo: [
        { personaje: "Anaxa", imagen: pj('anaxa') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Lynx", imagen: pj('lynx') },
        { personaje: "Sunday", imagen: pj('sunday') }
      ]
    }
  }, {
    id: "argenti",
    nombre: "Argenti",
    elemento: elemento('fis'),
    rareza: 5,
    region: "Erudición",
    imagen: pj('argenti'),
    via: via('eru'),
    descripcion: "Un experto en el combate físico, Argenti utiliza su habilidad para generar energía y aumentar su probabilidad de CRIT, maximizando su daño en el campo de batalla.",
    tecnica: "Manifiesto de la virtud pura: Afecta a los enemigos en una zona con Mareo durante 10 segundos, impidiéndoles atacar.",
    pasiva: "Objeto sublime: Por cada enemigo que golpea, Argenti obtiene acumulaciones de Elevación que aumentan su Prob. CRIT.",
    habilidades: {
      atqBasico: "Fragancia fugaz: Inflige daño físico a un enemigo.",
      habilidadBasica: "Florecimiento de la justicia: Daño físico en área a los enemigos.",
      ulti: "Este jardín otorga la belleza suprema: Consume energía y hace daño físico en área a todos los enemigos.",
      talento: "Objeto sublime: Aumenta la Prob. CRIT por cada acumulación de Elevación obtenida."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de ATQ +4.",
      hbd2: "Recupera energía al golpear enemigos.",
      hbd3: "Aumenta el daño físico y la probabilidad de CRIT."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Campeona de boxeo callejero", imagen: iconArtefacto('campeona') },
        { nombre: "Salsotto inerte", imagen: iconOrnamento('salsotto') },
        { nombre: "Eruditos perdidos en el mar del conocimiento", imagen: iconArtefacto('eruditos') },
        { nombre: "Capitán del mar maldito", imagen: iconArtefacto('capitan') }
      ],
      conoDeLuz: [
        { nombre: "Instante grabado a fuego", imagen: conoDeLuz('instante_grabado_a_fuego') },
        { nombre: "Hacia lo inescrutable", imagen: conoDeLuz('hacia_lo_inescrutable') },
        { nombre: "Hoy es otro día tranquilo", imagen: conoDeLuz('hoy_es_otro_dia_tranquilo') }
      ],
      composicionesEquipo: [
        { personaje: "Argenti", imagen: pj('argenti') },
        { personaje: "Yukong", imagen: pj('yukong') },
        { personaje: "Trazacaminos Reminiscencia", imagen: pj('sra_herta') },
        { personaje: "Natasha", imagen: pj('natasha') }
      ]
    }
  }, {
    id: "aventurino",
    nombre: "Aventurino",
    elemento: elemento('ima'),
    rareza: 5,
    region: "Conservación",
    imagen: pj('aventurino'),
    via: via('con'),
    descripcion: "Un gran protector que utiliza su habilidad para otorgar escudos poderosos a su equipo mientras inflige daño con su defensa.",
    tecnica: "Rojo o negro: Aumenta la DEF de los aliados con un porcentaje determinado, eligiendo el valor más alto entre varias opciones.",
    pasiva: "Bala cargada a la derecha: La RES a efectos de un aliado con Apuesta reforzada aumenta, y cuando ese aliado recibe un ataque, Aventurino obtiene 1 pt. de Apuesta ciega.",
    habilidades: {
      atqBasico: "Apuesta directa: Inflige daño imaginario a un enemigo con base en la DEF de Aventurino.",
      habilidadBasica: "Piedra angular de la prosperidad: Otorga un escudo a todos los aliados, acumulándose hasta un máximo determinado.",
      ulti: "Prodigio de la ruleta: Lanza un ataque y aplica Sobresalto a un enemigo, además aumenta el daño crítico al ser golpeado por aliados.",
      talento: "Bala cargada a la derecha: Aumenta la RES a efectos y recupera puntos de Apuesta ciega cuando un aliado con Apuesta reforzada es atacado."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de DEF +5.",
      hbd2: "Aumenta la RES a efectos de un aliado.",
      hbd3: "Bonificación de DEF +7.5."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Paladina de la Iglesia de la Corte Inmaculada", imagen: iconArtefacto('paladina') },
        { nombre: "Buceadora pionera del agua muerta", imagen: iconArtefacto('buceadora') },
        { nombre: "Habitante del yermo de los bandidos", imagen: iconArtefacto('habitante') }
      ],
      conoDeLuz: [
        { nombre: "El destino nunca es justo", imagen: conoDeLuz('el_destino_nunca_es_justo') },
        { nombre: "El momento de la victoria", imagen: conoDeLuz('el_momento_de_la_victoria') },
        { nombre: "Concierto para dos", imagen: conoDeLuz('concierto_para_dos') }
      ],
      composicionesEquipo: [
        { personaje: "Aventurino", imagen: pj('aventurino') },
        { personaje: "Herta", imagen: pj('herta') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Yukong", imagen: pj('yukong') }
      ]
    }
  }, {
    id: "bailu",
    nombre: "Bailu",
    elemento: elemento('ray'),
    rareza: 5,
    region: "Abundancia",
    imagen: pj('bailu'),
    via: via('abu'),
    descripcion: "Bailu es una sanadora excepcional que proporciona curaciones constantes a sus aliados, al mismo tiempo que ofrece un valioso soporte con su habilidad de Vigor, asegurando que sus compañeros no caigan en combate.",
    tecnica: "Paseando bajo la lluvia: Al comenzar la siguiente batalla, todos los aliados obtienen Vigor durante 2 turnos.",
    pasiva: "Calabaza de elixir: Cuando un aliado con Vigor recibe un ataque, regenera PV. Además, si un aliado recibe un golpe letal, Bailu lo cura inmediatamente con una gran cantidad de PV.",
    habilidades: {
      atqBasico: "Patada diagnóstica: Inflige daño de rayo a un enemigo.",
      habilidadBasica: "Cantando entre las nubes: Cura a un aliado y luego realiza dos curaciones adicionales a aliados al azar.",
      ulti: "Salto del dragón del marjal: Cura a todos los aliados y aplica Vigor a los que no lo tengan.",
      talento: "Calabaza de elixir: Cura cuando un aliado con Vigor recibe daño o evita que un aliado caiga en combate con una curación instantánea."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de PV +4.",
      hbd2: "Aumenta la curación cuando un aliado tiene Vigor.",
      hbd3: "Mejora la cantidad de curación por encima del máximo de PV de los aliados."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Guerrera celestial del sol y el trueno", imagen: iconArtefacto('guerrera') },
        { nombre: "Árbol gigante en meditación profunda", imagen: iconArtefacto('gran') },
        { nombre: "Mensajero del espacio hackeado", imagen: iconArtefacto('mensajero') }
      ],
      conoDeLuz: [
        { nombre: "Noche terrorífica", imagen: conoDeLuz('noche_terrorifica') },
        { nombre: "El tiempo no espera", imagen: conoDeLuz('el_tiempo_no_espera') },
        { nombre: "Sentimiento compartido", imagen: conoDeLuz('sentimiento_compartido') }
      ],
      composicionesEquipo: [
        { personaje: "Bailu", imagen: pj('bailu') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Lynx", imagen: pj('lynx') },
        { personaje: "Sunday", imagen: pj('sunday') }
      ]
    }
  }, {
    id: "cisne_negro",
    nombre: "Cisne Negro",
    elemento: elemento('vie'),
    rareza: 5,
    region: "Nihilidad",
    imagen: pj('cisne_negro'),
    via: via('nih'),
    descripcion: "Cisne Negro se especializa en infligir daño con el tiempo (DoT) a sus enemigos, maximizando su potencial con acumulaciones de Arcano que aumentan el daño mientras se aplican efectos de estado como Sangrado y Quemadura.",
    tecnica: "De la apariencia a la verdad: Al comenzar la siguiente batalla, aplica Arcano a cada enemigo con una alta probabilidad base, aumentando las acumulaciones hasta no poder aplicar más.",
    pasiva: "Telar del capricho del destino: Cada vez que un enemigo recibe Daño con el tiempo, tiene una probabilidad de recibir acumulaciones de Arcano, lo que incrementa el daño con cada acumulación.",
    habilidades: {
      atqBasico: "Discernimiento, alba silenciosa: Inflige daño de viento y tiene una pequeña probabilidad de aplicar Arcano a los enemigos afectados por ciertos estados.",
      habilidadBasica: "Decadencia, falso crepúsculo: Daño de viento en área y probabilidad de aplicar Arcano, además de reducir la DEF de los enemigos.",
      ulti: "Regocijo en el abrazo de otro mundo: Afecta con Desvelación a todos los enemigos y aumenta el daño que reciben, especialmente si están afectados por Arcano.",
      talento: "Telar del capricho del destino: Aplica Arcano a los enemigos con daño con el tiempo, aumentando el daño infligido y activando efectos adicionales según las acumulaciones de Arcano."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de daño: Viento +3.2.",
      hbd2: "Probabilidad de aplicar Arcano aumenta con cada golpe a enemigos con efectos de daño con el tiempo.",
      hbd3: "Aumento del daño con el tiempo basado en las acumulaciones de Arcano."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Prisionero aislado", imagen: iconArtefacto('prisionero') },
        { nombre: "Entidad comercial pangaláctica", imagen: iconOrnamento('entidad_comercial') },
        { nombre: "Águila del crepúsculo", imagen: iconArtefacto('aguila') }
      ],
      conoDeLuz: [
        { nombre: "Recuerdos reconstruidos", imagen: conoDeLuz('recuerdos_reconstruidos') },
        { nombre: "Visión de presa", imagen: conoDeLuz('vision_de_presa') },
        { nombre: "Solo hay que esperar", imagen: conoDeLuz('solo_hay_que_esperar') }
      ],
      composicionesEquipo: [
        { personaje: "Cisne Negro", imagen: pj('cisne_negro') },
        { personaje: "Kafka", imagen: pj('kafka') },
        { personaje: "Ruan Mei", imagen: pj('ruan_mei') },
        { personaje: "Huohuo", imagen: pj('huohuo') }
      ]
    }
  }, {
    id: "blade",
    nombre: "Blade",
    elemento: elemento('vie'),
    rareza: 5,
    region: "Destrucción",
    imagen: pj('blade'),
    via: via('des'),
    descripcion: "Blade es un luchador implacable que consume su propia vitalidad para infligir daño masivo, con habilidades que escalan según sus puntos de vida.",
    tecnica: "Espada fragmentada: Inflige daño de viento a un enemigo.",
    pasiva: "Regalo de Shuhu: Cada vez que Blade recibe daño o consume PV, obtiene acumulaciones que lo potencian, hasta un máximo de 5 acumulaciones.",
    habilidades: {
      atqBasico: "Espada fragmentada: Inflige daño de viento a un enemigo.",
      habilidadBasica: "Panorama infernal: Consume PV para entrar en el estado de Panorama infernal, aumentando su daño y transformando su habilidad básica en Bosque de espadas.",
      ulti: "Sentencia de muerte: Establece los PV actuales de Blade al 50% de su máximo y aplica daño de viento a un enemigo y sus adyacentes.",
      talento: "Regalo de Shuhu: Acumula cargas al recibir daño o consumir PV, y al máximo lanza un ataque adicional a todos los enemigos."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de PV +4.",
      hbd2: "Aumenta la regeneración de PV cuando los PV de Blade son inferiores al 50%.",
      hbd3: "Aumenta el daño adicional de Bosque de espadas en un 20%."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Discípula longeva", imagen: iconArtefacto('discipula') },
        { nombre: "Osario sereno", imagen: iconOrnamento('osario') },
        { nombre: "Águila del crepúsculo", imagen: iconArtefacto('aguila') }
      ],
      conoDeLuz: [
        { nombre: "Orilla inalcanzable", imagen: conoDeLuz('orilla_inalcanzable') },
        { nombre: "Danza crepuscular", imagen: conoDeLuz('danza_crepuscular') },
        { nombre: "Juramento secreto", imagen: conoDeLuz('juramento_secreto') }
      ],
      composicionesEquipo: [
        { personaje: "Blade", imagen: pj('blade') },
        { personaje: "Dan Heng", imagen: pj('dan_heng') },
        { personaje: "Lynx", imagen: pj('lynx') },
        { personaje: "Sunday", imagen: pj('sunday') }
      ]
    }
  },
  {
    id: "boothill",
    nombre: "Boothill",
    elemento: elemento('fis'),
    rareza: 5,
    region: "Cacería",
    imagen: pj('boothill'),
    via: via('cac'),
    descripcion: "Boothill es un maestro del control de la Ruptura, utilizando su habilidad para aumentar el daño con cada acumulación y potenciar el ataque físico.",
    tecnica: "Sonrisa 3×9: La primera vez que usa su habilidad básica en el siguiente combate, afecta al objetivo con una Debilidad Física.",
    pasiva: "Cinco guisantes en la vaina: Cada acumulación de Ventaja en el bolsillo aumenta la Reducción de Firmeza del ATQ básico potenciado.",
    habilidades: {
      atqBasico: "Espuelas rompetestas: Inflige daño físico a un enemigo.",
      habilidadBasica: "Tango de las brasas ardientes: Activa el estado de Duelo a muerte, potenciando su ATQ básico y aumentando el daño recibido por ambas partes.",
      ulti: "Rodeo vespertino del diablo de polvo: Aplica Debilidad Física a un enemigo y aumenta el daño físico, retrasando su acción.",
      talento: "Cinco guisantes en la vaina: Aumenta el daño de Ruptura con cada acumulación de Ventaja en el bolsillo."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de Ruptura +5.3.",
      hbd2: "Aumenta la Prob. CRIT/Daño CRIT con Ruptura en un 10%/50%.",
      hbd3: "Reduce el daño recibido de enemigos que no están en el estado de Duelo a muerte en un 30%."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Caballería de hierro plaguicida", imagen: iconArtefacto('caballeria') },
        { nombre: "Talia, paraíso de los forajidos", imagen: iconOrnamento('talia') },
        { nombre: "Ladrón del rastro meteórico", imagen: iconArtefacto('ladron') }
      ],
      conoDeLuz: [
        { nombre: "Hacia una segunda vida", imagen: conoDeLuz('hacia_una_segunda_vida') },
        { nombre: "La sombra de la noche", imagen: conoDeLuz('la_sombra_de_la_noche') },
        { nombre: "Crucero estelar", imagen: conoDeLuz('crucero_estelar') }
      ],
      composicionesEquipo: [
        { personaje: "Boothill", imagen: pj('boothill') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Natasha", imagen: pj('natasha') },
        { personaje: "Sunday", imagen: pj('sunday') }
      ]
    }
  }, {
    id: "bronya",
    nombre: "Bronya",
    elemento: elemento('vie'),
    rareza: 5,
    region: "Armonía",
    imagen: pj('bronya'),
    via: via('arm'),
    descripcion: "Una experta en apoyo, Bronya utiliza su habilidad para mejorar las capacidades de su equipo, impulsando el daño y adelantando turnos.",
    tecnica: "Estandarte de mando: Aumenta el ATQ de todos los aliados en un 0.15% durante 2 turnos al comenzar la siguiente batalla.",
    pasiva: "Liderazgo: Tras usar el ATQ básico, la siguiente acción de Bronya se adelanta un 0.15%.",
    habilidades: {
      atqBasico: "Bala del vendaval: Inflige daño de viento a un enemigo.",
      habilidadBasica: "Reorganización del combate: Elimina un estado negativo de un aliado, le permite actuar inmediatamente y aumenta su daño en un 0.33%.",
      ulti: "Marcha de Belobog: Aumenta el ATQ de todos los aliados en un 0.33% y el Daño CRIT se incrementa en un 12% del Daño CRIT de Bronya.",
      talento: "Liderazgo: Acelera la siguiente acción de Bronya tras usar su ATQ básico."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de daño: Viento +3.2.",
      hbd2: "Bonificación de RES a efecto +4.",
      hbd3: "Bonificación de Daño CRIT +5.3."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Sacerdote del calvario revivido", imagen: iconArtefacto('sacerdote') },
        { nombre: "Quilla rota", imagen: iconOrnamento('quilla') },
        { nombre: "Mensajero del espacio hackeado", imagen: iconArtefacto('mensajero') }
      ],
      conoDeLuz: [
        { nombre: "De vuelta a la tierra", imagen: conoDeLuz('de_vuelta_a_la_tierra') },
        { nombre: "La batalla no ha terminado", imagen: conoDeLuz('la_batalla_no_ha_terminado') },
        { nombre: "Mundo de juegos", imagen: conoDeLuz('mundo_de_juegos') }
      ],
      composicionesEquipo: [
        { personaje: "Bronya", imagen: pj('bronya') },
        { personaje: "Dan Heng", imagen: pj('dan_heng') },
        { personaje: "Yukong", imagen: pj('yukong') },
        { personaje: "Natasha", imagen: pj('natasha') }
      ]
    }
  }, {
    id: "castorice",
    nombre: "Castorice",
    elemento: elemento('cuan'),
    rareza: 5,
    region: "Reminiscencia",
    imagen: pj('castorice'),
    via: via('rem'),
    descripcion: "Castorice es una DPS que utiliza su poder cuántico y el Dragón Caído para dominar el campo de batalla. A través de su habilidad de invocar y potenciar el Dragón Caído, Castorice aumenta el daño del equipo y proporciona una gran capacidad de control.",
    tecnica: "Lamentos, olas del mar muerto: Inflige Daño Cuántico equivalente al 0.25% de los PV máx. de Castorice a un enemigo.",
    pasiva: "Desolación, de palmas derramada: Obtiene puntos de Nuevo brote por cada PV perdido por los aliados, lo que aumenta el daño de Castorice y el Dragón Caído.",
    habilidades: {
      atqBasico: "Lamentos, olas del mar muerto: Daño Cuántico a un enemigo.",
      habilidadBasica: "Silencio, caricia de la mariposa elegíaca: Consume PV de los aliados e inflige daño Cuántico a los enemigos.",
      ulti: "Estertor, tintineo del renacer: Invoca al Dragón Caído y adelanta su acción. Despliega el Territorio Inframundo perdido, reduciendo la RES de los enemigos.",
      talento: "Desolación, de palmas derramada: Genera puntos de Nuevo brote al perder PV los aliados, activando un aumento de daño a Castorice y al Dragón Caído."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de Prob. CRIT +2.7.",
      hbd2: "Bonificación de daño Cuántico +3.2.",
      hbd3: "Aumenta la VEL cuando los PV de Castorice son superiores al 50%."
    },
    mnemoduende: {
      talento: "Dragón Caído",
      habilidad: "Territorio Inframundo perdido"
    },
    guia: {
      artefactos: [
        { nombre: "Poetisa del colapso elegíaco", imagen: iconArtefacto('poetisa') },
        { nombre: "Osario sereno", imagen: iconOrnamento('osario') },
        { nombre: "Genio de las estrellas relucientes", imagen: iconArtefacto('genio') },
        { nombre: "Discípula longeva", imagen: iconArtefacto('discipula') }
      ],
      conoDeLuz: [
        { nombre: "Despedidas más bellas", imagen: conoDeLuz('despedidas_mas_bellas') },
        { nombre: "Más sudor y menos lágrimas", imagen: conoDeLuz('mas_sudor_y_menos_lagrimas') },
        { nombre: "Sangre y fuego, abran camino", imagen: conoDeLuz('sangre_y_fuego_abran_camino') }
      ],
      composicionesEquipo: [
        { personaje: "Castorice", imagen: pj('castorice') },
        { personaje: "Cífer", imagen: pj('cifer') },
        { personaje: "Pela", imagen: pj('pela') },
        { personaje: "Lynx", imagen: pj('lynx') }
      ]
    }
  }, {
    id: "cifer",
    nombre: "Cífer",
    elemento: elemento('cuan'),
    rareza: 5,
    region: "Amphoreus",
    imagen: pj('cifer'),
    via: via('nih'),
    descripcion: "Cífer es una ladrona gata que se destaca por su velocidad y crítico. Su habilidad para debilitar a los enemigos y generar daño cuántico la convierte en una DPS secundaria de gran impacto en el campo de batalla.",
    tecnica: "La gata con botas: Obtiene Bendición de Zagreus, aumentando su VEL y evitando ser detectada por los enemigos durante 15 segundos.",
    pasiva: "Hospitalidad de Doros: Convierte a los enemigos en Clientes habituales, lo que provoca que Cífer inflija más daño cuántico a los enemigos que sus aliados han atacado.",
    habilidades: {
      atqBasico: "¡Uy, se me escapaba uno!: Daño Cuántico a un enemigo.",
      habilidadBasica: "¡Je, un botín fácil!: Rebote de daño cuántico y reducción de daño enemigo.",
      ulti: "¡Saludos de la ladrona gata!: Daño cuántico adicional y daño verdadero a los enemigos, reduciendo la Defensa de los mismos.",
      talento: "Hospitalidad de Doros: Conviértete en Cliente habitual de un enemigo y genera un ataque adicional."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de VEL +200.",
      hbd2: "Bonificación de daño cuántico +3.2.",
      hbd3: "Aumenta la probabilidad de crítico y el valor registrado de daño al alcanzar velocidades altas."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Buceadora pionera del agua muerta", imagen: iconArtefacto('buceadora') },
        { nombre: "Glamoth, frente del firmamento", imagen: iconOrnamento('glamoth') }
      ],
      conoDeLuz: [
        { nombre: "Mentiras que vuelan en el viento", imagen: conoDeLuz('mentiras_que_vuelan_en_el_viento') },
        { nombre: "Determinación reluciente", imagen: conoDeLuz('determinacion_reluciente') },
        { nombre: "Tango ilimitado", imagen: conoDeLuz('tango_ilimitado') }
      ],
      composicionesEquipo: [
        { personaje: "Cífer", imagen: pj('cifer') },
        { personaje: "Acheron", imagen: pj('acheron') },
        { personaje: "Silver Wolf", imagen: pj('silver_wolf') },
        { personaje: "Huo Huo", imagen: pj('huohuo') }
      ]
    }
  }, {
    id: "clara",
    nombre: "Clara",
    elemento: elemento('fis'),
    rareza: 5,
    region: "Destrucción",
    imagen: pj('clara'),
    via: via('des'),
    descripcion: "Una guerrera robusta que utiliza su fuerza para proteger y devolver daño a los enemigos, Clara se especializa en ataques de contraataque potentes con la ayuda de su mnemoduende, Svarog.",
    tecnica: "Quiero ayudar: Inflige un 0.5% del ATQ de Clara como Daño Físico a un enemigo.",
    pasiva: "Porque somos familia: Clara está bajo la protección de Svarog, lo que reduce el daño recibido y aumenta la probabilidad de disipar estados negativos.",
    habilidades: {
      atqBasico: "Quiero ayudar: Daño físico a un enemigo.",
      habilidadBasica: "Svarog te vigila: Daño físico en área a todos los enemigos, y daño extra a los enemigos con la Marca de represalia de Svarog.",
      ulti: "Es una promesa, no una orden: Reduce el daño recibido y aumenta la probabilidad de ser atacada, potenciando los contraataques de Svarog.",
      talento: "Porque somos familia: Clara reduce el daño recibido y permite a Svarog contraatacar cuando es atacada."
    },
    habilidadesAdicionales: {
      hbd1: "Bonificación de daño físico +3.2.",
      hbd2: "Probabilidad de disipar estados negativos al recibir un ataque.",
      hbd3: "Aumenta la probabilidad de resistir estados negativos de Control en un 35%."
    },
    mnemoduende: {
      talento: "",
      habilidad: ""
    },
    guia: {
      artefactos: [
        { nombre: "Capitán del mar maldito", imagen: iconArtefacto('capitan') },
        { nombre: "Duran, dinastía de lobos raudos", imagen: iconOrnamento('duran') },
        { nombre: "Campeona de boxeo callejero", imagen: iconArtefacto('campeona') },
        { nombre: "Gran duque incinerador", imagen: iconArtefacto('gran') }
      ],
      conoDeLuz: [
        { nombre: "Danza crepuscular", imagen: conoDeLuz('danza_crepuscular') },
        { nombre: "Orilla inalcanzable", imagen: conoDeLuz('orilla_inalcanzable') },
        { nombre: "Sobre la caída de un Eón", imagen: conoDeLuz('sobre_la_caida_de_un_eon') }
      ],
      composicionesEquipo: [
        { personaje: "Clara", imagen: pj('clara') },
        { personaje: "Cífer", imagen: pj('cifer') },
        { personaje: "Asta", imagen: pj('asta') },
        { personaje: "Lynx", imagen: pj('lynx') }
      ]
    }
  },



];
