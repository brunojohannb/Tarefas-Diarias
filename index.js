let InputNovaTarefa = document.querySelector ('#InputNovaTarefa');
let addTarefa = document.querySelector ('#addTarefa');
let listaTarefas = document.querySelector ('#listaTarefas');


InputNovaTarefa.addEventListener('keypress', (e) => {

    if(e.keyCode == 13){
        let tarefa = {
            nome: InputNovaTarefa.value,
            id: gerarId(),

        }

        adicionarTarefa(tarefa);
    }
});

addTarefa.addEventListener('click', (e) => {

        let tarefa = {
            nome: InputNovaTarefa.value,
            id: gerarId(),

        }

        adicionarTarefa(tarefa);
    
});



function gerarId() {
    
    return Math.floor(Math.random() * 3000);

}

function adicionarTarefa(tarefa) {

    let li = criarTagLI(tarefa);
    listaTarefas.appendChild (li);
    InputNovaTarefa.value = '';


}

function criarTagLI(tarefa) {

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnPencil = document.createElement('buttton');
    btnPencil.classList.add('btnAcao');
    btnPencil.innerHTML = '<i class="fa fa-pencil"></i>';

    let btnTrash = document.createElement('button');
    btnTrash.classList.add('btnAcao');
    btnTrash.innerHTML = '<i class="fa fa-trash"></i>';

    div.appendChild(btnPencil);
    div.appendChild(btnTrash);

    li.appendChild(span);
    li.appendChild(div);

    return li;

}





