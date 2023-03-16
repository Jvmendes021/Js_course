/*
Variáveis e tipos em JavaScript são fundamentais para armazenar e manipular dados em um programa. Abaixo, segue algumas informações sobre variáveis e tipos em JavaScript:

Variáveis:

Em JavaScript, uma variável é um contêiner para armazenar valores de dados.
Para declarar uma variável, use a palavra-chave "var", "let" ou "const", seguida pelo nome da variável.
A palavra-chave "var" era a forma tradicional de declarar variáveis em JavaScript, mas a partir do ECMAScript 6, foram adicionadas as palavras-chave "let" e "const".
Uma variável declarada com "var" é acessível em todo o escopo em que foi declarada, enquanto uma variável declarada com "let" ou "const" é acessível apenas no bloco em que foi declarada.
O valor de uma variável pode ser atribuído usando o sinal de atribuição "=".
Uma variável pode ser atualizada atribuindo-lhe um novo valor.
Tipos de Dados:

JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de dados de uma variável é determinado pelo valor que a variável contém.
Existem seis tipos de dados primitivos em JavaScript: string, number, boolean, undefined, null e symbol.
Além dos tipos primitivos, JavaScript também possui um tipo de objeto.
Tipos de dados primitivos:

O tipo de dado "string" é usado para armazenar texto. As strings devem ser escritas entre aspas simples ou duplas.
O tipo de dado "number" é usado para armazenar números. Números inteiros e números de ponto flutuante são ambos do tipo "number".
O tipo de dado "boolean" é usado para armazenar valores verdadeiros ou falsos.
O tipo de dado "undefined" é usado para uma variável que não foi atribuída a um valor.
O tipo de dado "null" é usado para indicar a ausência de valor.
O tipo de dado "symbol" é usado para criar valores únicos e imutáveis.
Tipo de Objeto:

O tipo de objeto é usado para armazenar coleções de dados. Os objetos são criados usando chaves {} e contêm pares de chave-valor.
As chaves em um objeto são strings ou símbolos e os valores podem ser de qualquer tipo de dados, incluindo outros objetos.
Alguns objetos embutidos em JavaScript incluem o objeto Math e o objeto Date.

Exemplo de uso de variáveis e tipos em JavaScript:
*/

let nome = "Maria";
let idade = 30;
let altura = 1.70;
let isCasado = true;
let endereco = null;
let corFavorita = undefined;
let objetoPessoa = { nome: "Maria", idade: 30, altura: 1.70 };

console.log(nome);
console.log(idade);
console.log(altura);
console.log(isCasado);
console.log(endereco);
console.log(corFavorita);
console.log(objetoPessoa);

//Saída:

Maria
30
1.7
true
null
undefined
//{ nome: 'Maria', idade: 30, altura: 1.7 }
