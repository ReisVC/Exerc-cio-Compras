import * as readlineSync from 'readline-sync';
import { Produto } from './Produto';
import { Enlatados } from "./Enlatados";
import { Bebidas } from "./Bebidas";
import { Biscoito } from "./Biscoito";

import { Dinheiro } from './Dinheiro';
import { Cartão } from './Cartão';
import { Pix } from './Pix';


const sardinha:Enlatados = new Enlatados('Gomes', 7, 500, 'Sardinha')
const guarana:Bebidas = new Bebidas('Fruki', 9, 2000, 'Guarana')
const bolacha:Biscoito = new Biscoito('Trakinas', 3, 200, 'Bolacha')
const atum:Enlatados = new Enlatados('Pescador', 8, 600, 'Atum')
const bolacha2:Biscoito = new Biscoito('Tortinhas', 4, 200, 'Bolacha')
const pepsi:Bebidas = new Bebidas('Pepsi', 10, 2000, 'Cola')

const formaPag1:Dinheiro = new Dinheiro('dinheiro')
const formaPag2:Cartão = new Cartão('cartão')
const formaPag3:Pix = new Pix('Pix')


let carrinho:Array<Produto> = []
let valor:number = 0
let numero:number = -1
let pag:number = -1

while(numero!=0){
    numero = Number(readlineSync.question(`
[1] Comprar Produto \n[2] Ver Carrinho \n[3] Pagar \n[0] Sair \nEscolha a opcao: `))

    switch(numero) {
        case 1: 
        let opcao:number = Number(readlineSync.question(`
[1] ${sardinha.tipo} ${sardinha.nome}: R$ ${sardinha.valorTotal()}
[2] ${guarana.tipo} ${guarana.nome}: R$${guarana.valorTotal()}
[3] ${bolacha.tipo} ${bolacha.nome}: R$${bolacha.valorTotal()}
[4] ${atum.tipo} ${atum.nome}: R$${atum.valorTotal()}
[5] ${bolacha2.tipo} ${bolacha2.nome}: R$${bolacha2.valorTotal()}
[6] ${pepsi.tipo} ${pepsi.nome}: R$${pepsi.valorTotal()}
[0] Sair 
Escolha o item para adicionar ao carrinho: `))

    if(opcao === 1) {
        carrinho.push(sardinha)
        valor = valor + sardinha.valorTotal()
    }

    if(opcao === 2) {
        carrinho.push(guarana)
        valor = valor + guarana.valorTotal()
    }

    if(opcao === 3) {
      carrinho.push(bolacha)
      valor = valor + bolacha.valorTotal()
    }

    if(opcao === 4) {
        carrinho.push(atum)
        valor = valor + atum.valorTotal()
    }

    if(opcao === 5) {
        carrinho.push(bolacha2)
        valor = valor + bolacha2.valorTotal()
    }

    if(opcao === 6) {
        carrinho.push(pepsi)
        valor = valor + pepsi.valorTotal()
    }
    break

        case 2:
        console.log(carrinho)
        console.log(valor.toFixed(2))
    break

        case 3:
        pag = Number(readlineSync.question(`
[1] Dinheiro \n[2] Cartão \n[3] Pix \nEscolha a forma de pagamento: `))
        switch(pag) {
            case 1:
            carrinho.splice(0, carrinho.length)
            formaPag1.pagamento() 
            console.log(valor.toFixed(2))
            valor = 0
            break

            case 2:
            carrinho.splice(0, carrinho.length)
            formaPag2.pagamento() 
            console.log(valor.toFixed(2))
            valor = 0
            break

            case 3:
            carrinho.splice(0, carrinho.length)
            formaPag3.pagamento() 
            console.log(valor.toFixed(2))
            valor = 0
        }

        }
      
    }

    console.log("Obrigado por comprar conosco!")

