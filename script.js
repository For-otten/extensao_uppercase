document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn").addEventListener("click", function () {
    let text = document.querySelector("#texto").value;
    let uppercasetext = text.toUpperCase();

    document.querySelector("#result").innerHTML = uppercasetext;

    var mensagem = document.querySelector("#mensagem");
    mensagem.style.display = "none";
  });

  document
    .getElementById("execCopy")
    .addEventListener("click", function execCopy() {
      //Variáveis
      var mensagem = document.querySelector("#mensagem");
      var resultado = document.querySelector("#result").innerHTML;
      var clear = document.querySelector("#clearBtn");
      var text = document.querySelector("#texto");

      //Aparecer mensagem de sucesso ao copiar
      mensagem.style.display = "block";

      //Função para COPIAR
      navigator.clipboard.writeText(resultado);

      //Função clear
      clear.addEventListener("click", function () {
        mensagem.value= "none"
        resultado.value = ''
        text.value = ''; 
      });
    });
});
