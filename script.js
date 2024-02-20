// Função para remover os elementos do output (área branca)

function removerElemento() {
  // Esconde a div inicial
  const startContent = document.querySelector(".start__content");
  startContent.classList.add("hidden");

  // Exibir a div resultado
  const resultContent = document.querySelector(".result__content");
  resultContent.classList.remove("hidden");
}


function criptografar() {
  // Pega o texto dentro do textarea
  const textoEntrada = document.querySelector("textarea").value.toLowerCase();

  // Verifica se o textarea não está vazio
  if (textoEntrada.trim() === "") {
      alert("Por favor, insira algum texto para criptografar.");
  }

  // Verifica se há caracteres especiais
  const verificarTexto = /[!@#$%^&*(),.?":{}|<>~´`^òàèùìàâêîôûãõá]/;
  if (verificarTexto.test(textoEntrada)) {
      alert("A criptografia não suporta caracteres especiais.");

      // Limpa o Campo de input Caso tenha caractere especial
      const limparCaracteres = document.getElementById('text-Input')
      limparCaracteres.value = ''
  }else{
    removerElemento()
  }

  // Seleciona uma div que eu deixei armazenada para pós-criptografia
  const resultado = document.getElementById("resultado");

  // Criptografa o texto usando replace
  const textoSaida = textoEntrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

  // Exibe o resultado
  resultado.innerHTML = textoSaida;

}

function descriptografar() {
  const textoEntrada = document.querySelector('textarea').value.toLowerCase();
  const resultado = document.getElementById('resultado');

  // Inverti o replace
  const textoSaida = textoEntrada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

  // Atualiza o resultado
  resultado.innerHTML = textoSaida;
}

function copiarTexto() {
  const textoSaida = document.getElementById('resultado').innerHTML;
  navigator.clipboard.writeText(textoSaida);
}
