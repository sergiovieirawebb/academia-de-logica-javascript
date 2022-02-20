/*

    Crie um programa que armazena dados da empresa Rocketseat dentro de
    um objeto chamado empresa. Os dados a serem armazenados são:

    Nome: Rocketseat
    Cor: Roxo
    Foco: Programação
    Endereço:
    - Local: Rua Guilherme Gembala
    - Número: 260

*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        local: "Rua Guilerme Gembala",
        numero: 260
    }
};

/*

    Imprima em tela utilizando console.log o nome da empresa
    e seu endereço no seguinte formato:

    - A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

*/

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.local}, ${empresa.endereco.numero}`);
