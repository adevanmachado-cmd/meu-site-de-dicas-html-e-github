const textoDoCodigo = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Olá Mundo</title>
</head>
<body>
    <h1>Olá Mundo!</h1>
</body>
</html>`;

// Garante que o texto seja inserido assim que a estrutura do site carregar
document.addEventListener("DOMContentLoaded", () => {
    const campoCodigo = document.getElementById('codigoOlaMundo');
    if (campoCodigo) {
        campoCodigo.value = textoDoCodigo;
    }
    
    // Adiciona o link do GitHub Pages ao textarea
    const campoLink = document.getElementById('linkGitHub');
    if (campoLink) {
        campoLink.value = "https://adevanmachado-cmd.github.io/site-do-Adevan-dicas-iniciais-html-e-github/";
    }
});

function copiarTexto(botao, idElemento) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;
    
    const textoParaCopiar = elemento.value;
    const textoOriginal = botao.innerHTML;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        botao.innerHTML = "✓ Copiado!";
        botao.style.backgroundColor = "#218838";
        setTimeout(() => {
            botao.innerHTML = textoOriginal;
            botao.style.backgroundColor = "#000000";
        }, 2000);
    });
}

function copiarLink(botao, idElemento) {
    const textarea = document.getElementById(idElemento);
    if (!textarea) return;
    
    const textoOriginal = botao.innerText;
    
    navigator.clipboard.writeText(textarea.value).then(() => {
        botao.innerText = "✓ Copiado!";
        botao.style.backgroundColor = "#218838";
        setTimeout(() => {
            botao.innerText = textoOriginal;
            botao.style.backgroundColor = "#007bff";
        }, 2000);
    });
}

function mostrarMensagem(){
    const campoMensagem = document.getElementById("mensagem");
    if (campoMensagem) {
        campoMensagem.innerHTML = "<strong>Parabéns!</strong> Você já conhece os passos básicos para criar e publicar um site.";
    }
}
