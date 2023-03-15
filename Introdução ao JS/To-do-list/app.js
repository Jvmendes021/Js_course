const form = document.getElementById('form');
const input = document.getElementById('input');
const listaTarefas = document.getElementById('lista-tarefas');

let tarefas = [];

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (input.value !== '') {
		adicionarTarefa(input.value);
		input.value = '';
	}
});

function adicionarTarefa(tarefa) {
	tarefas.push(tarefa);
	atualizarListaTarefas();
}

function atualizarListaTarefas() {
	listaTarefas.innerHTML = '';
	for (let i = 0; i < tarefas.length; i++) {
		const li = document.createElement('li');
		li.innerText = tarefas[i];
		listaTarefas.appendChild(li);

		li.addEventListener('click', function() {
			li.classList.toggle('checked');
		});

		li.addEventListener('contextmenu', function(e) {
			e.preventDefault();
			tarefas.splice(i, 1);
			atualizarListaTarefas();
		});
	}
}
