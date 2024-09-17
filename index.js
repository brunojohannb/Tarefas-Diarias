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

};

function adicionarTarefa(tarefa) {

    if (InputNovaTarefa.value == "") {
        exibirErro();
    } else {
         let li = criarTagLI(tarefa)
    listaTarefas.appendChild(li);
    InputNovaTarefa.value = "";

    }

};

function criarTagLI(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnPencil = document.createElement('button');
    btnPencil.classList.add('btnAcao');
    btnPencil.innerHTML = '<i class="fa fa-pencil"></i>';
    btnPencil.setAttribute('onclick', 'editar('+tarefa.id+')');

    let btnTrash = document.createElement('button');
    btnTrash.classList.add('btnAcao');
    btnTrash.innerHTML = '<i class="fa fa-trash"></i>';
    btnTrash.setAttribute('onclick', 'excluir('+tarefa.id+')');

    div.appendChild(btnPencil);
    div.appendChild(btnTrash);

    li.appendChild(span);
    li.appendChild(div);

    return li;

};

function editar(idTarefa) {
    alert(idTarefa)

};

function excluir(idTarefa) {
    let confirmacao = window.confirm('Tem certeza que deseja excluir?');
    if(confirmacao) {
        let li = document.getElementById('' +idTarefa+ '');
        if(li) {
            listaTarefas.removeChild(li);

        }

    }

};

function exibirErro() {
    var popup = document.getElementById("popupErro");
    popup.style.display = "block";
};

var fechar = document.getElementById("fecharPopup");
fechar.onclick = function() {
  var popup = document.getElementById("popupErro");
  popup.style.display = "none";
};

window.onclick = function(event) {
    var popup = document.getElementById("popupErro");
    if (event.target == popup) {
      popup.style.display = "none";
    }
};




