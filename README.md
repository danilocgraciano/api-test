# api-test

Cosumindo APIs Rest de terceiros, com Angular 2.

Utilização do site http://jsonutils.com/, para criação de modelos TypeScript, com base no json fornecido pelo serviço.
Conversão de json, em objetos através do metodo abaixo:

constructor(data) {
  Object.assign(this, data);
}

Foi também detectado uma dificuldade de uso do método PUT no Chrome, visto que a chamada era realizada em um serviço de outro domínio, então fica a sugestão de trocar para um método GET, conforme descrito no link http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/.
