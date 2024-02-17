//Função para remover os elementos do output(area branca)

function removerElemento() {
    // Esconde a div inicial
    const startContent = document.querySelector(".start__content");
    startContent.classList.add("hidden");
  
    //Exibir a div resultado
    const resultContent = document.querySelector(".result__content");
    resultContent.classList.remove("hidden");
  
    criptografar();
  }
  
  function criptografar() {
    // Pega o texto dentro do text area
    textoEntrada = document.querySelector("textarea").value;
    // seleciona uma div que eu deixei armazenada para pos criptografia
    let resultado = document.getElementById("resultado");
    //criptografa o texto usando replace
    textoSaida = textoEntrada
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    //exibe o resultado
    resultado.innerHTML = textoSaida;
  }

  function descriptografar() {
      textoEntrada = document.querySelector('textarea').value;
      let resultado = document.getElementById('resultado');
      
      // inverti o replace
    textoSaida = textoEntrada
     .replace(/enter/g, "e")
     .replace(/imes/g, "i")
     .replace(/ai/g, "a")
     .replace(/ober/g, "o")
     .replace(/ufat/g, "u");

    textoBotaoCopiar = textoSaida;
    resultado.innerHTML = textoSaida;
  }

  function copiarTexto() {
    navigator.clipboard.writeText(textoSaida);
}
