import { Uf } from "./Uf";

export class CompradorEnderecoMunicipio {

    id: string;
    index: number;
    nome: string;
    codigoIBGE: number;
    uf: Uf;

    constructor(data) {
        Object.assign(this, data);
    }


}