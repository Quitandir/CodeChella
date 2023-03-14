var acc = document.getElementsByClassName("faq");


for (let i = 0; i < acc.length; i++) {

  let botao = acc[i].childNodes[3];  
    
    botao.addEventListener("click", function() {
    
    var resposta = acc[i].childNodes[5];

    if (resposta.style.display === "block") {
        resposta.style.display = "none";
    } else {
        resposta.style.display = "block";
    }
  });
} 
