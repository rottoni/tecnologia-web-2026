import { criar, listar, consultar, alterar, excluir } from './client.js';

let resposta;

const produto = {
    nome: "melancia",
    preco: 50.0,
    unidade: "unidade",
    quantidade: 20,
}

async function main() {
    resposta = await criar(produto);
    console.log(resposta);

    resposta = await listar();
    console.log(resposta);

    resposta = await consultar(resposta[0]);
    console.log(resposta);

    resposta = await alterar(resposta);
    console.log(resposta);

    resposta = await excluir();
    console.log(resposta);
}

main();