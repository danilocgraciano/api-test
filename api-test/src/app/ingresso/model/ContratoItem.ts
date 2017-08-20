import { EventoLoteProduto } from "./EventoLoteProduto";
import { Contrato } from "./Contrato";

export class ContratoItem {

    id: string;
    index: number;
    contrato: Contrato;
    eventoLoteProduto: EventoLoteProduto;
    quantidade: number;
    valor: number;
    taxaConveniencia: number;
    desconto: number;
    contratoItemIngressoList?: any;

    constructor(data) {
        Object.assign(this, data);
    }
}