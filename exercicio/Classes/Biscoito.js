"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biscoito = void 0;
var Biscoito = /** @class */ (function () {
    function Biscoito(nome, preco, peso, tipo) {
        this.nome = nome;
        this.preco = preco;
        this.peso = peso;
        this.tipo = tipo;
    }
    Biscoito.prototype.valorTotal = function () {
        return this.preco * 1.70;
    };
    Biscoito.prototype.comprar = function () {
        console.log("O ".concat(this.nome, " custa o valor de ").concat(this.preco));
    };
    return Biscoito;
}());
exports.Biscoito = Biscoito;
var bolacha = new Biscoito('Trakinas', 3, 200, 'Bolacha');
