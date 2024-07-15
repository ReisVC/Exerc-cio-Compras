import {Produto} from './Produto'

export class Enlatados implements Produto {
    nome:string
    peso:number
    preco:number
    tipo:string

    
    constructor(nomeP:string, precoP:number, pesoP:number, tipoP:string){
        this.nome = nomeP
        this.preco = precoP
        this.peso = pesoP
        this.tipo = tipoP

    }

    comprar(): void {
        console.log(`O ${this.nome} custa o valor de ${this.preco} reais`)
    }
    
    valorTotal(): number {
        return this.preco * 1.25
    }
    
}


