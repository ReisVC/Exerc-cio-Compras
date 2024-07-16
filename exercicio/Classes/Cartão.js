"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartão = void 0;
var Cartão = /** @class */ (function () {
    function Cartão(nome) {
        this.nome = nome;
    }
    Cartão.prototype.pagamento = function () {
        console.log("Voc\u00EA pagou no ".concat(this.nome, " o valor total de: "));
    };
    return Cartão;
}());
exports.Cartão = Cartão;
