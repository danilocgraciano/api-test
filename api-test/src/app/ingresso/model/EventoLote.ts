export class EventoLote {

    id: string;
    index: number;
    descricao: string;
    evento?: any;
    dataInicio: string;
    dataFim: string;
    vendaLiberada: boolean;
    prevenda: boolean;
    periodoDeVendaExpirado: boolean;
    quantidadeMaximaParcelasBoleto: number;
    quantidadeMaximaParcelasCartaoCredito: number;
    eventoLoteProdutoList?: any;

    constructor(data) {
        Object.assign(this, data);
    }
}