import {Produto} from './Produto'

export class Biscoito implements Produto {
    nome: string;
    peso: number;
    preco: number;
    tipo: string;

    constructor(nome:string, preco:number, peso:number, tipo:string) {
        this.nome = nome
        this.preco = preco
        this.peso = peso
        this.tipo = tipo
    }
    valorTotal(): number {
        return this.preco * 1.70
    }

    comprar(): void {
        console.log(`O ${this.nome} custa o valor de ${this.preco}`);
    }
}

const bolacha:Biscoito = new Biscoito('Trakinas', 3, 200, 'Bolacha')
