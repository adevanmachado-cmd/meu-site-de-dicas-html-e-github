// Texto do exemplo que será inserido na tela na seção "Estrutura Básica"
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

// Executa as funções assim que a página HTML terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    
    // Insere o código do Olá Mundo dentro da tag <pre id="codigoOlaMundo">
    const campoCodigo = document.getElementById('codigoOlaMundo');
    if (campoCodigo) {
        campoCodigo.textContent = textoDoCodigo;
    }
});

// Função para copiar textos de elementos comuns (ex: <pre>)
function copiarTexto(botao, idElemento) {
    const elemento = document.getElementById(idElemento);
    if (!elemento) return;
    
    const textoParaCopiar = elemento.textContent;
    const textoOriginal = botao.innerHTML;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        botao.innerHTML = "✓ Copiado!";
        botao.style.backgroundColor = "#218838";
        setTimeout(() => {
            botao.innerHTML = textoOriginal;
            botao.style.backgroundColor = "#000000";
        }, 2000);
    }).catch(err => console.error("Erro ao copiar:", err));
}

// Função para copiar textos de elementos de formulário (ex: <textarea>)
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
    }).catch(err => console.error("Erro ao copiar link:", err));
}

// Função do botão Concluir Curso
function mostrarMensagem(){
    const campoMensagem = document.getElementById("mensagem");
    if (campoMensagem) {
        campoMensagem.innerHTML = "<strong>Parabéns!</strong> Você já conhece os passos básicos para criar e publicar um site.";
    }
}
