export class EventoProduto {
    id: string;
    index: number;
    evento?: any;
    descricao: string;
    descricaoPOS: string;
    grupo: string;
    observacaoProduto: string;
    eventoProdutoUpgradeList?: any;

    constructor(data) {
        Object.assign(this, data);
    }
}