"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Enlatados_1 = require("./Enlatados");
var Bebidas_1 = require("./Bebidas");
var Biscoito_1 = require("./Biscoito");
var Dinheiro_1 = require("./Dinheiro");
var Cart_o_1 = require("./Cart\u00E3o");
var Pix_1 = require("./Pix");
var sardinha = new Enlatados_1.Enlatados('Gomes', 7, 500, 'Sardinha');
var guarana = new Bebidas_1.Bebidas('Fruki', 9, 2000, 'Guarana');
var bolacha = new Biscoito_1.Biscoito('Trakinas', 3, 200, 'Bolacha');
var atum = new Enlatados_1.Enlatados('Pescador', 8, 600, 'Atum');
var bolacha2 = new Biscoito_1.Biscoito('Tortinhas', 4, 200, 'Bolacha');
var pepsi = new Bebidas_1.Bebidas('Pepsi', 10, 2000, 'Cola');
var formaPag1 = new Dinheiro_1.Dinheiro('dinheiro');
var formaPag2 = new Cart_o_1.Cartão('cartão');
var formaPag3 = new Pix_1.Pix('Pix');
var carrinho = [];
var valor = 0;
var numero = -1;
var pag = -1;
while (numero != 0) {
    numero = Number(readlineSync.question("\n[1] Comprar Produto \n[2] Ver Carrinho \n[3] Pagar \n[0] Sair \nEscolha a opcao: "));
    switch (numero) {
        case 1:
            var opcao = Number(readlineSync.question("\n[1] ".concat(sardinha.tipo, " ").concat(sardinha.nome, ": R$ ").concat(sardinha.valorTotal(), "\n[2] ").concat(guarana.tipo, " ").concat(guarana.nome, ": R$").concat(guarana.valorTotal(), "\n[3] ").concat(bolacha.tipo, " ").concat(bolacha.nome, ": R$").concat(bolacha.valorTotal(), "\n[4] ").concat(atum.tipo, " ").concat(atum.nome, ": R$").concat(atum.valorTotal(), "\n[5] ").concat(bolacha2.tipo, " ").concat(bolacha2.nome, ": R$").concat(bolacha2.valorTotal(), "\n[6] ").concat(pepsi.tipo, " ").concat(pepsi.nome, ": R$").concat(pepsi.valorTotal(), "\n[0] Sair \nEscolha o item para adicionar ao carrinho: ")));
            if (opcao === 1) {
                carrinho.push(sardinha);
                valor = valor + sardinha.valorTotal();
            }
            if (opcao === 2) {
                carrinho.push(guarana);
                valor = valor + guarana.valorTotal();
            }
            if (opcao === 3) {
                carrinho.push(bolacha);
                valor = valor + bolacha.valorTotal();
            }
            if (opcao === 4) {
                carrinho.push(atum);
                valor = valor + atum.valorTotal();
            }
            if (opcao === 5) {
                carrinho.push(bolacha2);
                valor = valor + bolacha2.valorTotal();
            }
            if (opcao === 6) {
                carrinho.push(pepsi);
                valor = valor + pepsi.valorTotal();
            }
            break;
        case 2:
            console.log(carrinho);
            console.log(valor.toFixed(2));
            break;
        case 3:
            pag = Number(readlineSync.question("\n[1] Dinheiro \n[2] Cart\u00E3o \n[3] Pix \nEscolha a forma de pagamento: "));
            switch (pag) {
                case 1:
                    carrinho.splice(0, carrinho.length);
                    formaPag1.pagamento();
                    console.log(valor.toFixed(2));
                    valor = 0;
                    break;
                case 2:
                    carrinho.splice(0, carrinho.length);
                    formaPag2.pagamento();
                    console.log(valor.toFixed(2));
                    valor = 0;
                    break;
                case 3:
                    carrinho.splice(0, carrinho.length);
                    formaPag3.pagamento();
                    console.log(valor.toFixed(2));
                    valor = 0;
            }
    }
}
console.log("Obrigado por comprar conosco!");
