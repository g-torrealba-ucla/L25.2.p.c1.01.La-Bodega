import Cl_articulo from "./Cl_articulo"; // Asegúrate de importar Cl_articulo si lo usas en otro archivo.

export default class Cl_bodega {
  private acGanancia: number; // Declara la propiedad y su tipo

  constructor() {    this.acGanancia = 0;
  }

  procesarArticulo(a: Cl_articulo): void { // Especifica el tipo del parámetro 'a' y el tipo de retorno
    this.acGanancia += a.ganancia();
  }

  totalGanancia(): number { // Especifica el tipo de retorno
    return this.acGanancia;
  }
}