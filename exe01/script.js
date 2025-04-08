function adicionarTarefa() {
    const input = document.getElementById("tarefaInput");
    const lista = document.getElementById("listaTarefas");
    const tarefa = input.value.trim();
  
    if (tarefa === "") {
      alert("Digite uma tarefa válida!");
      return;
    }
  
    const item = document.createElement("li");
    item.innerHTML = `
  ${tarefa}
  <i class="fa-solid fa-trash" onclick="removerTarefa(this)"></i>
`;

  
    lista.appendChild(item);
    input.value = "";
  }
  
  function removerTarefa(elemento) {
    const item = elemento.parentElement;
    item.remove();
  }