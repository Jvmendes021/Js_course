function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media >= 7 ? "Aprovado" : "Reprovado";
  }
  
let resultado = calcularMedia(8, 7, 9); // Chama a função e passa as notas como argumentos
console.log(resultado); // Aprovado

/* 

Nesse exemplo, a função calcularMedia recebe três argumentos: nota1, nota2 e nota3. Em seguida, a função calcula a média das notas e armazena o resultado na variável media.

Depois, a função utiliza o operador ternário ? para verificar se a média é maior ou igual a 7. Se a média for maior ou igual a 7, a função retorna a string "Aprovado". Caso contrário, a função retorna a string "Reprovado".

Por fim, a função é chamada com as notas 8, 7 e 9 como argumentos e o resultado é armazenado na variável resultado. Em seguida, o resultado é exibido no console com o método console.log().


*/