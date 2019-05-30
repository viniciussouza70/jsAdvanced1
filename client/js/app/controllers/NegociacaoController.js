class NegociacaoController{
    /*ao clicar em incluir, no DOM, é necessário chamar uma ação no controller para chamar uma negociação 
    na tabela */
    constructor(){
        //pegando dados do DOM de forma que ele pegue apenas uma vez para todas as reqs
        let $ = document.querySelector.bind(document)
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        
    } 

    //primeiro, vamos cancelar a atualização automática do form ao 
    adiciona(event){
        event.preventDefault();
//o construtor de negociação recebe uma data, uma qtd e um valor. Então criamos aqui a negociação:
        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

    }
}