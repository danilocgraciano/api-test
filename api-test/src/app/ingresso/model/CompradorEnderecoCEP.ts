
import { Municipio } from "./Municipio";

export class CompradorEnderecoCEP {
    id: string;
    index: number;
    codigo: string;
    logradouro?: any;
    bairro?: any;
    municipio: Municipio;

    constructor(data) {
        Object.assign(this, data);
    }
}