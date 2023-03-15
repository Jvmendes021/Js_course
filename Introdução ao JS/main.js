var contador = 0; //inicializa o contador em 0
var contador = 0; //inicializa o contador em 0
var divContador = document.getElementById("contador"); //captura a div do contador
var intervalId; //id do setInterval

function incrementaContador() {
    contador++; //incrementa o contador
    divContador.innerHTML = contador; //atualiza o valor da div do contador
}

function iniciaContador() {
    clearInterval(intervalId); //limpa o intervalo anterior, se houver
    intervalId = setInterval(incrementaContador, 1000); //chama a função incrementaContador a cada 1000ms (1 segundo)
}

function paraContador() {
    clearInterval(intervalId); //limpa o intervalo
}

