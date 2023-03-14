/* 
Para interagir com os elementos do DOM (Document Object Model) em JavaScript, você pode usar as APIs de manipulação de DOM disponíveis na linguagem.

A seguir, apresento alguns exemplos de como interagir com elementos do DOM:

Selecionar elementos:
Para selecionar um elemento do DOM, você pode usar o método querySelector ou getElementById para buscar um elemento pelo seu seletor ou ID, respectivamente. Por exemplo:
*/

// Selecionar um elemento pelo seletor CSS
var elemento1 = document.querySelector("#meu-elemento");

// Selecionar um elemento pelo ID
var elemento2 = document.getElementById("meu-outro-elemento");


/*
Para interagir com os elementos do DOM (Document Object Model) em JavaScript, você pode usar as APIs de manipulação de DOM disponíveis na linguagem.

A seguir, apresento alguns exemplos de como interagir com elementos do DOM:

Selecionar elementos:
Para selecionar um elemento do DOM, você pode usar o método querySelector ou getElementById para buscar um elemento pelo seu seletor ou ID, respectivamente. Por exemplo:

javascript
Copy code
// Selecionar um elemento pelo seletor CSS
var elemento1 = document.querySelector("#meu-elemento");

// Selecionar um elemento pelo ID
var elemento2 = document.getElementById("meu-outro-elemento");
Modificar conteúdo:
Para modificar o conteúdo de um elemento do DOM, você pode usar as propriedades innerHTML ou textContent. Por exemplo:
*/

// Modificar o conteúdo de um elemento
elemento1.innerHTML = "Novo conteúdo";
elemento2.textContent = "Outro novo conteúdo";

/*
Modificar estilos:
Para modificar os estilos de um elemento do DOM, você pode usar a propriedade style. Por exemplo:
*/

// Modificar o estilo de um elemento
elemento1.style.backgroundColor = "red";
elemento2.style.fontSize = "20px";

/*
Adicionar ou remover classes:
Para adicionar ou remover classes de um elemento do DOM, você pode usar as propriedades classList.add e classList.remove, respectivamente. Por exemplo:
*/

// Adicionar ou remover classes de um elemento
elemento1.classList.add("classe-nova");
elemento2.classList.remove("classe-antiga");

// Esses são apenas alguns exemplos de como você pode interagir com os elementos do DOM em JavaScript. Existem muitas outras APIs disponíveis para manipulação de eventos, animações, formulários, entre outras funcionalidades.