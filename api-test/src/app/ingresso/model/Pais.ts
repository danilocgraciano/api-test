export class Pais {

    id: string;
    index: number;
    sigla: string;
    nome: string;
    codigoBACEN: number;

    constructor(data) {
        Object.assign(this, data);
    }
}