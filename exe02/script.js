// 1. Declaração de Variáveis e Tipos de Dados
let nome = "Maria";           // string
let idade = 28;               // number
let ehEstudante = true;       // boolean

// Operações simples
let saudacao = `Olá, ${nome}! Você tem ${idade} anos.`;
console.log(saudacao);

// 2. Array e Objetos
let dadosVariados = ["texto", 42, false, null];

let usuario = {
  nome: "Carlos",
  idade: 35,
  saudacao: function () {
    return `Bem-vindo, ${this.nome}!`;
  }
};
console.log(usuario.saudacao());

// 3. Acesso e Manipulação do DOM
function validarEmail() {
  const emailInput = document.getElementById("emailInput");
  const resultado = document.querySelector("#resultado");

  // 4. Regex: validação de e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(emailInput.value)) {
    resultado.textContent = "E-mail válido!";
    resultado.className = "success";

    adicionarElementoDinamico("✅ E-mail adicionado com sucesso!");

  } else {
    resultado.textContent = "E-mail inválido. Tente novamente.";
    resultado.className = "error";
  }
}

// Manipulação dinâmica de elementos do DOM
function adicionarElementoDinamico(texto) {
  const div = document.getElementById("elementosDinamicos");

  const novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = texto;
  novoParagrafo.style.color = "blue";
  
  div.appendChild(novoParagrafo);

  // Remover automaticamente após 5 segundos
  setTimeout(() => {
    div.removeChild(novoParagrafo);
  }, 5000);
}
