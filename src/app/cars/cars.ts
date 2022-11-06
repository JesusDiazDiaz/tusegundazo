export class Car {
  constructor(
    public id: number,
    public marca: string,
    public linea: string,
    public referencia: string,
    public modelo: string,
    public kilometraje: string,
    public color: string,
    public imagen: string,
  ) {}
}

export interface CarSummary {
  brand: string;
  total: number;
}

