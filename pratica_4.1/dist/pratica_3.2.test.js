"use strict";
const teste = require("./pratica_3.2");
const arrayTeste = [
    { marca: "fiat", modelo: "2020", nome: "A", cor: "vermelho" },
    { marca: "fiat", modelo: "2021", nome: "B", cor: "prata" },
    { marca: "fiat", modelo: "2022", nome: "C", cor: "azul" },
    { marca: "volvo", modelo: "2020", nome: "D", cor: "vermelho" },
    { marca: "volvo", modelo: "2021", nome: "E", cor: "prata" },
    { marca: "volvo", modelo: "2022", nome: "F", cor: "azul" },
    { marca: "troller", modelo: "2020", nome: "G", cor: "vermelho" },
    { marca: "troller", modelo: "2021", nome: "H", cor: "prata" },
    { marca: "troller", modelo: "2022", nome: "I", cor: "azul" },
];
test('pesquisar carro por marca', () => {
    expect(teste.SearchCarsForMarca(arrayTeste, "troller")).toEqual([
        { marca: 'troller', modelo: '2020', nome: 'G', cor: 'vermelho' },
        { marca: 'troller', modelo: '2021', nome: 'H', cor: 'prata' },
        { marca: 'troller', modelo: '2022', nome: 'I', cor: 'azul' }
    ]);
    expect(teste.SearchCarsForMarca(arrayTeste, "fiat")).toEqual([
        { marca: 'fiat', modelo: '2020', nome: 'A', cor: 'vermelho' },
        { marca: 'fiat', modelo: '2021', nome: 'B', cor: 'prata' },
        { marca: 'fiat', modelo: '2022', nome: 'C', cor: 'azul' }
    ]);
    expect(teste.SearchCarsForMarca(arrayTeste, "volvo")).toEqual([
        { marca: 'volvo', modelo: '2020', nome: 'D', cor: 'vermelho' },
        { marca: 'volvo', modelo: '2021', nome: 'E', cor: 'prata' },
        { marca: 'volvo', modelo: '2022', nome: 'F', cor: 'azul' }
    ]);
});
test('pesquisar marcas disponiveis', () => {
    expect(teste.SearchMarcasAvailable(arrayTeste)).toEqual(['fiat', 'volvo', 'troller']);
});
test('pesquisar marcas disponiveis', () => {
    expect(teste.SearchCarsAvailableForFilter(arrayTeste, ["marca", "cor", "nome"])).toEqual([
        { marca: 'fiat', cor: 'vermelho', nome: 'A' },
        { marca: 'fiat', cor: 'prata', nome: 'B' },
        { marca: 'fiat', cor: 'azul', nome: 'C' },
        { marca: 'volvo', cor: 'vermelho', nome: 'D' },
        { marca: 'volvo', cor: 'prata', nome: 'E' },
        { marca: 'volvo', cor: 'azul', nome: 'F' },
        { marca: 'troller', cor: 'vermelho', nome: 'G' },
        { marca: 'troller', cor: 'prata', nome: 'H' },
        { marca: 'troller', cor: 'azul', nome: 'I' }
    ]);
    expect(teste.SearchCarsAvailableForFilter(arrayTeste, ["marca", "cor"])).toEqual([
        { marca: 'fiat', cor: 'vermelho' },
        { marca: 'fiat', cor: 'prata' },
        { marca: 'fiat', cor: 'azul' },
        { marca: 'volvo', cor: 'vermelho' },
        { marca: 'volvo', cor: 'prata' },
        { marca: 'volvo', cor: 'azul' },
        { marca: 'troller', cor: 'vermelho' },
        { marca: 'troller', cor: 'prata' },
        { marca: 'troller', cor: 'azul' }
    ]);
});
//# sourceMappingURL=pratica_3.2.test.js.map