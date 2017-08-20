import { CompradorEnderecoCEP } from "./CompradorEnderecoCEP";
import { CompradorEnderecoMunicipio } from "./CompradorEnderecoMunicipio";

export class Contrato {

    id: string;
    index: number;
    evento?: any;
    contratoBase?: any;
    dataHora: number;
    status: number;
    statusEmail: number;
    tipo: number;
    usuario?: any;
    compradorNome: string;
    compradorCPF: string;
    compradorRG: string;
    compradorSexo: string;
    compradorDataNascimento: string;
    compradorEmail: string;
    compradorTelefoneResidencial: string;
    compradorTelefoneCelular: string;
    compradorTelefoneComercial?: any;
    compradorFormaContato: number;
    compradorEnderecoLogradouro: string;
    compradorEnderecoNumero: string;
    compradorEnderecoComplemento: string;
    compradorEnderecoBairro: string;
    compradorEnderecoMunicipio: CompradorEnderecoMunicipio;
    compradorEnderecoCEP: CompradorEnderecoCEP;
    contratoItemList?: any;
    formaPagamento: number;
    browserSessao: string;
    browserCookie: boolean;
    browserHost: string;
    browserIP: string;
    browserTipo: string;
    contratoPagamentoList?: any;
    contratoUpgradeList?: any;
    upgrade: boolean;
    cnpjEmpresa?: any;
    serialMaquinaPOS?: any;
    quantidadeImpressoes: number;
    ingressado: boolean;
    sincronizado: boolean;
    contratoItemIngressoUpgrade?: any;
    contratoItemIngressoTitularList?: any;
    contratoItemIngressoTitular?: any;

    constructor(data) {
        Object.assign(this, data);
    }
}