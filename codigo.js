document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem");


    if (nome !== "" && email !== "") {
        mensagem.textContent = "Documento enviado";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Não foi enviado"; 
        mensagem.style.color = "red"; 
    }
});

