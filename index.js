let InputNovaTarefa = document.querySelector ('#InputNovaTarefa');
let addTarefa = document.querySelector ('#addTarefa');
let listaTarefas = document.querySelector ('#listaTarefas');


InputNovaTarefa.addEventListener('keydown', (e) => {  

    if (e.key === 'Enter') {
            let tarefa = {
                nome: InputNovaTarefa.value,
                id: gerarId(),
            };

            adicionarTarefa(tarefa);  
         
        }
});

addTarefa.addEventListener('click', (e) => {

     if (InputNovaTarefa.value.trim() === "") {
        exibirErro();
     } else {
        let tarefa = {
            nome: InputNovaTarefa.value,
            id: gerarId(),
        };

        adicionarTarefa(tarefa);
    
    }
});

function gerarId() {
    
    return Math.floor(Math.random() * 3000);

};

function adicionarTarefa(tarefa) {

  let li = criarTagLI(tarefa)
  listaTarefas.appendChild(li);
  InputNovaTarefa.value = "";

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
    let li = document.getElementById(idTarefa);
    exibirPopupConfirmacao(li);

};

function exibirErro() {
    let popup = document.getElementById("popupErro");
    popup.style.display = "block";
};

let fechar = document.getElementById("fecharPopup");
fechar.onclick = function() {
  let popup = document.getElementById("popupErro");
  popup.style.display = "none";

};

window.onclick = function(event) {
    let popup = document.getElementById("popupErro");
    if (event.target == popup) {
      popup.style.display = "none";
    }
};

function exibirPopupConfirmacao(tarefaElement) {
    var popupex = document.getElementById("popupConfirmacao");
    popupex.style.display = "block";

    document.getElementById("confirmarExclusao").onclick = function() {
        tarefaElement.remove();  
        popupex.style.display = "none";
    };

    document.getElementById("cancelarExclusao").onclick = function() {
        popupex.style.display = "none"; 

    };

};


