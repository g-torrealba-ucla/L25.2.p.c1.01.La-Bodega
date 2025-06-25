export default class Cl_articulo {
    constructor(costo) {
        this._costo = 0; // Declarar la propiedad privada con su tipo
        this.costo = costo;
    }
    set costo(costo) {
        this._costo = +costo; // El '+' asegura la conversión a número, aunque con el tipo ya es menos necesario.
    }
    get costo() {
        return this._costo;
    }
    ganancia() {
        return this.costo * 0.5;
    }
}
