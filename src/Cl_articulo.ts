export default class Cl_articulo {
  private _costo: number = 0; // Declarar la propiedad privada con su tipo

  constructor(costo: number) { // Especificar el tipo del parámetro costo en el constructor
    this.costo = costo;
  }

  set costo(costo: number) { // Especificar el tipo del parámetro costo en el setter
    this._costo = +costo; // El '+' asegura la conversión a número, aunque con el tipo ya es menos necesario.
  }

  get costo(): number { // Especificar el tipo de retorno del getter
    return this._costo;
  }

  ganancia(): number { // Especificar el tipo de retorno del método ganancia
    return this.costo * 0.5;
  }
}