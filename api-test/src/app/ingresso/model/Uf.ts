import { Pais } from "./pais";

export class Uf {
    
    id: string;
    index: number;
    sigla: string;
    nome: string;
    codigoIBGE: number;
    pais: Pais;

    constructor(data) {
        Object.assign(this, data);
    }
}