export interface Personaje {
  id: string;
  nombre: string;
  elemento: string;
  rareza: number;
  arma: string;
  region: string;
  imagen: string;
  descripcion: string;
  tecnica: string;
  pasiva: string;
  habilidades: {
    atqBasico: string;
    habilidadBasica: string;
    ulti: string;
    talento: string;
  };
  habilidadesAdicionales?: {
    hbd1?: string;
    hbd2?: string;
    hbd3?: string;
  };
}
