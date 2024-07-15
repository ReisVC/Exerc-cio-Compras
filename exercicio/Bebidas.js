"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bebidas = void 0;
var Bebidas = /** @class */ (function () {
    function Bebidas(nomeP, precoP, pesoP, tipoP) {
        this.nome = nomeP;
        this.preco = precoP;
        this.peso = pesoP;
        this.tipo = tipoP;
    }
    Bebidas.prototype.comprar = function () {
        console.log("O ".concat(this.nome, " custa o valor de ").concat(this.preco, " reais"));
    };
    Bebidas.prototype.valorTotal = function () {
        return this.preco * 1.40;
    };
    return Bebidas;
}());
exports.Bebidas = Bebidas;
