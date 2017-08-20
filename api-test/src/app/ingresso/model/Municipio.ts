import { Uf } from "./Uf";

export class Municipio {

    id: string;
    index: number;
    nome: string;
    codigoIBGE: number;
    uf: Uf;

    constructor(data) {
        Object.assign(this, data);
    }
}