'use strict'
const ListagemPage = require('../../pages/listagem.po.js');
const POKEMON = require('../../data/db.js');

describe('Pesquisar no Google', ()=> {
  const listagemPage = new ListagemPage();

  it('Deve pesquisar e ver se a pesquisa foi submetida', ()=>{
    listagemPage.visit();
    listagemPage.pesquisarPokemon('Pesquisa no Google!');
    listagemPage.clickPesquisar();
    expect(listagemPage.result.isPresent());
    
  });
});  

describe('Pesquisar por Chocolate no Google', ()=> {
  const listagemPage = new ListagemPage();

  it('Deve pesquisar por Chocolate e ver primeiro link', ()=>{
    listagemPage.visit();
    listagemPage.pesquisarPokemon('Chocolate');
    listagemPage.clickPesquisar();
    const resultado = listagemPage.getresultadoChocolate();
    expect(resultado).not.toBe('');
  });
});  