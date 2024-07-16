"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dinheiro = void 0;
var Dinheiro = /** @class */ (function () {
    function Dinheiro(nome) {
        this.nome = nome;
    }
    Dinheiro.prototype.pagamento = function () {
        console.log("Voc\u00EA pagou no ".concat(this.nome, " o valor total de: "));
    };
    return Dinheiro;
}());
exports.Dinheiro = Dinheiro;
