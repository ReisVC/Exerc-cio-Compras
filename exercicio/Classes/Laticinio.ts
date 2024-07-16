import {Produto} from './Produto'

export class Laticinio implements Produto {
    nome: string;
    peso: number;
    preco: number;
    tipo: string;

    constructor(nomeP:string, precoP:number, pesoP:number, tipoP:string){
        this.nome = nomeP
        this.preco = precoP
        this.peso = pesoP
        this.tipo = tipoP
    }
    comprar(): void {
        console.log(`O ${this.nome} custa o valor de ${this.preco} reais`);
    }

    valorTotal(): number {
        return this.preco * 1.40
    }
    
}

const leitePia:Laticinio = new Laticinio('Piá', 6, 900, 'leite')

console.log(leitePia.nome)
console.log(leitePia.preco)
console.log(leitePia.peso)
console.log(leitePia.tipo)
leitePia.comprar()