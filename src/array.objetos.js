/*

    Crie um programa que armazena um array de usuários (objetos), cada
    usuário tem um nome e suas tecnologias (novo array).

*/

const usuários = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "NodeJS", "ReactJS"] }
];

/*

    Percorra a lista de usuários com uma estrutura de repetição imprimindo
    em tela as informações dos usuários:

    - Carlos trabalha com HTML, CSS
    - Jarmine trabalha com JavaScript, CSS
    - Tuane trabalha com HTML, Node.js

*/

for (let i = 0; i < usuários.length; i++) {
    console.log(`${usuários[i].nome} trabalha com ${usuários[i].tecnologias.join(", ")}`);
}