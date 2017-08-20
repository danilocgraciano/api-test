import { EventoProduto } from "./EventoProduto";
import { EventoLote } from "./EventoLote";

export class EventoLoteProduto {

    id: string;
    index: number;
    eventoProduto: EventoProduto;
    eventoLote: EventoLote;
    valor: number;
    quantidade: number;
    taxaConveniencia: number;
    descontoBoleto: number;
    descontoDinheiro: number;

    constructor(data) {
        Object.assign(this, data);
    }
}
