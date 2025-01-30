//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener("DOMContentLoaded", () => {
  const listaAmigos = document.getElementById("listaAmigos");
  const resultado = document.getElementById("resultado");
  const inputAmigo = document.getElementById("amigo");

  // Carrega os participantes do localStorage
  let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

  // Atualiza a lista de participantes na tela
  function atualizarListaAmigos() {
    listaAmigos.innerHTML = participantes
      .map((nome) => `<li>${nome}</li>`)
      .join("");
  }

  // Adiciona um amigo à lista
  window.adicionarAmigo = () => {
    const nome = inputAmigo.value.trim();
    if (nome) {
      participantes.push(nome);
      localStorage.setItem("participantes", JSON.stringify(participantes)); // Salva no localStorage
      atualizarListaAmigos();
      inputAmigo.value = ""; // Limpa o campo de entrada
    } else {
      alert("Por favor, insira um nome válido.");
    }
  };

  // Sorteia o amigo secreto
  window.sortearAmigo = () => {
    if (participantes.length < 2) {
      alert("Precisa de pelo menos 2 participantes para fazer o sorteio.");
      return;
    }

    const participantesEmbaralhados = [...participantes].sort(
      () => Math.random() - 0.5
    );
    const sorteio = {};

    for (let i = 0; i < participantesEmbaralhados.length; i++) {
      const pessoa = participantesEmbaralhados[i];
      const amigo =
        participantesEmbaralhados[(i + 1) % participantesEmbaralhados.length];
      sorteio[pessoa] = amigo;
    }

    resultado.innerHTML = Object.entries(sorteio)
      .map(
        ([pessoa, amigo]) =>
          `<li><strong>${pessoa}</strong> tirou <strong>${amigo}</strong></li>`
      )
      .join("");
  };

  // Limpa a lista de participantes
  window.limparLista = () => {
    participantes = [];
    localStorage.removeItem("participantes");
    atualizarListaAmigos();
    resultado.innerHTML = "";
    alert("Lista de participantes limpa!");
  };

  // Atualiza a lista ao carregar a página
  atualizarListaAmigos();
});
