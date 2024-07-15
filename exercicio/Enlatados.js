"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enlatados = void 0;
var Enlatados = /** @class */ (function () {
    function Enlatados(nomeP, precoP, pesoP, tipoP) {
        this.nome = nomeP;
        this.preco = precoP;
        this.peso = pesoP;
        this.tipo = tipoP;
    }
    Enlatados.prototype.comprar = function () {
        console.log("O ".concat(this.nome, " custa o valor de ").concat(this.preco, " reais"));
    };
    Enlatados.prototype.valorTotal = function () {
        return this.preco * 1.25;
    };
    return Enlatados;
}());
exports.Enlatados = Enlatados;
