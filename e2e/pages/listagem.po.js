
'use strict'

class ListagemPage{
  constructor(){
    this.filtro = element(by.id('lst-ib'));
    this.resultadoChocolate = element(by.id('hdtb'));
    
    this.resultados = element.all(by.repeater('item in PokemonsController.pokemons'));;

    this.result = element(by.id('bcenter'));

    this.numero = element(by.model('PokemonsController.pokemon.id')); 
    this.nome = element(by.model('PokemonsController.pokemon.name')); 
    this.ataque = element(by.model('PokemonsController.pokemon.attack')); 
    this.defesa = element(by.model('PokemonsController.pokemon.defense')); 
    this.hp = element(by.model('PokemonsController.pokemon.hp')); 

    this.btnPesquisar = element(by.name('btnK'));

    this.modalCampos = element(by.id('myModal'));
  }

  visit(){
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  pesquisarPokemon(nome){
    return this.filtro.sendKeys(nome);
  }

  clickPesquisar(){
    this.btnPesquisar.click();
  }

  getresultadoChocolate(){
    return this.resultadoChocolate.getText();
  }

}
module.exports = ListagemPage;