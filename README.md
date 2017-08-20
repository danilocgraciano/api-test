# api-test

Cosumindo APIs Rest de terceiros, com Angular 2.

Utilização do site http://jsonutils.com/, para criação de modelos TypeScript, com base no json fornecido pelo serviço.
Conversão de json, em objetos através do metodo abaixo:

constructor(data) {
  Object.assign(this, data);
}
