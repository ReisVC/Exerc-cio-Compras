import { MetodoPagamento } from "./MetodoDePagamento";

export class Pix implements MetodoPagamento {
    nome: string;
    constructor(nome:string) {
        this.nome = nome
    }
    pagamento(): void {
        console.log(`Você pagou no ${this.nome} o valor total de: `);
    }
}