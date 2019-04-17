/**
 * for in = percorre o indice da lista
 * for of = percorre o conteudo da lista
 */
// let filmes = ['Harry Potter', 'Titanic', 'Laranja Mecanica', 'Wall-e'];

// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i]);
// }

// for(let filme of filmes){
//     console.log(filme);
// }

// console.log('--------------------');

// for(let i in filmes){
//     console.log(i);
// }

//Funções - function nomeDaFuncao(argumentos)

// function calculadora(a, b){
//     return (a + b);
// }

// console.log('A soma de a + b é ' + calculadora(2,3));

// function calcMedia(n1, n2,n3){
//     return ((n1 + n2 + n3)/3).toFixed(1);
// }

// console.log('A sua media é ' + calcMedia(2,2,1));

// let nota = 0;

// for(let i = 0; i < 3; i++){
//     let n = prompt("Insira a nota");
//     n = parseInt(n);
//     nota += n;
// }

// function calcMedia2(nota){
//     return (nota / 3).toFixed(1);
// }

// alert("Sua media é " + calcMedia2(nota));

//função anonima
// let calcMedia = function(){
//     return 1 + 2;
// }

//Arrow function:
// calcIMC = (a,b) => {
//     return (a + b);
// }

//Lista com objetos
let filmes = [
    {titulo: 'Sherek', classificacao : 0},
    {titulo: 'Star Wars', classificacao : 14},
    {titulo: 'Ninja Assassino', classificacao : 18}
];

let idade = prompt("Informe sua idade: ");
console.log("LISTA DE FILMES PERMITIDOS:");
for(let filme of filmes){
    if(idade >= filme.classificacao){
        console.log("Filme: " + filme.titulo);
    }    
}