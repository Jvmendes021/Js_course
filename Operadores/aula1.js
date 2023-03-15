/*

Os operadores em JavaScript são símbolos especiais que realizam operações matemáticas, lógicas e de comparação em valores. Esses operadores podem ser usados ​​para criar expressões que executam cálculos, testam condições e realizam outras operações.

Os operadores em JavaScript podem ser divididos em várias categorias, incluindo:

Operadores aritméticos: Esses operadores são usados ​​para realizar operações matemáticas básicas, como adição (+), subtração (-), multiplicação (*), divisão (/) e módulo (%). O operador módulo retorna o resto de uma divisão inteira entre dois números.

Operadores de atribuição: Esses operadores são usados ​​para atribuir valores a variáveis. O operador de atribuição básico é o sinal de igual (=). Além disso, existem operadores de atribuição compostos, como +=, -=, *= e /=, que executam uma operação aritmética e, em seguida, atribuem o resultado a uma variável.

Operadores de comparação: Esses operadores são usados ​​para comparar valores e retornar um valor booleano (verdadeiro ou falso) com base na comparação. Alguns exemplos incluem == (igual a), != (diferente de), > (maior que), < (menor que), >= (maior ou igual a) e <= (menor ou igual a).

Operadores lógicos: Esses operadores são usados ​​para realizar operações lógicas em valores booleanos. Os operadores lógicos incluem && (e lógico), || (ou lógico) e ! (não lógico).

Operadores de incremento e decremento: Esses operadores são usados ​​para aumentar ou diminuir o valor de uma variável em 1. O operador de incremento é ++ e o operador de decremento é --.

Operadores ternários: Esse operador é usado ​​para criar uma expressão condicional em uma única linha. O operador ternário é representado pelo símbolo ? e :. A expressão antes do ? é avaliada e, se for verdadeira, a primeira parte após o ? é retornada. Caso contrário, a segunda parte após o : é retornada.

Esses são alguns dos principais operadores em JavaScript. É importante lembrar que a ordem de precedência dos operadores em JavaScript segue uma ordem específica. Em caso de dúvidas sobre a ordem de precedência ou utilização dos operadores, é recomendável consultar a documentação oficial do JavaScript.

*/

//Operadores Aritméticos:

let a = 10;
let b = 5;
let soma = a + b; // Adição: 15
let subtracao = a - b; // Subtração: 5
let multiplicacao = a * b; // Multiplicação: 50
let divisao = a / b; // Divisão: 2
let modulo = a % b; // Módulo: 0


//Operadores de Atribuição:

let a = 10;
a += 5; // a = a + 5
console.log(a); // 15

let b = 20;
b -= 10; // b = b - 10
console.log(b); // 10

let c = 5;
c *= 2; // c = c * 2
console.log(c); // 10

let d = 20;
d /= 4; // d = d / 4
console.log(d); // 5


//Operadores de Comparação: 


let a = 10;
let b = 5;

console.log(a == b); // Igual a: false
console.log(a != b); // Diferente de: true
console.log(a > b); // Maior que: true
console.log(a < b); // Menor que: false
console.log(a >= b); // Maior ou igual a: true
console.log(a <= b); // Menor ou igual a: false


// Operadores Lógicos:


let a = true;
let b = false;

console.log(a && b); // E lógico: false
console.log(a || b); // Ou lógico: true
console.log(!a); // Não lógico: false
console.log(!b); // Não lógico: true


// Operadores de Incremento e Decremento:

let a = 5;

console.log(a++); // Incremento pós-fixado: 5 (a agora é 6)
console.log(++a); // Incremento pré-fixado: 7 (a agora é 7)
console.log(a--); // Decremento pós-fixado: 7 (a agora é 6)
console.log(--a); // Decremento pré-fixado: 5 (a agora é 5)


// Operador Ternário:

let a = 10;
let b = 5;

let resultado = (a > b) ? "A é maior que B" : "B é maior que A";
console.log(resultado); // A é maior que B

// Esses são apenas alguns exemplos de como os operadores podem ser utilizados em JavaScript.