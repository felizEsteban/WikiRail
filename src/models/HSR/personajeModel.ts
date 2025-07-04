export interface Personaje {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  elemento: string;
  via: string;
  rareza: number;
  tecnica: string;
  pasiva: string;
  region: string;
  habilidades: {
    atqBasico: string;
    habilidadBasica: string;
    ulti: string;
    talento: string;
  };
  habilidadesAdicionales: {
    hbd1: string;
    hbd2: string;
    hbd3: string;
  };
  mnemoduende: {
    talento: string;
    habilidad: string;
  };
  guia?: {
    artefactos: { nombre: string; imagen: string }[];
    conoDeLuz: { nombre: string; imagen: string }[];
    composicionesEquipo: { personaje: string; imagen: string }[];
  };
}