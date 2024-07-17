function ajustarAltura() {
    let botaoCopiar = document.querySelector('.botao__copiar');
    let article = document.querySelector('.apresentacao__article');
    let output = document.querySelector('.output__text');
    let maxWidth768 = window.matchMedia('(max-width: 768px)').matches;
    let maxWidth375 = window.matchMedia('(max-width: 375px)').matches;

    if (maxWidth768 || maxWidth375) { // Somente aplica as mudanças se a tela for <= 768px ou <= 375px
        if (botaoCopiar.style.display === 'inline-block') {
            if (maxWidth375) {
                article.style.height = '270px'; // Altura do article para max-width: 375px quando botão copiar é visível
            } else if (maxWidth768) {
                article.style.height = '230px'; // Altura do article para max-width: 768px quando botão copiar é visível
            }
        } else {
            article.style.height = '133px'; // Altura padrão do article
        }

        output.style.height = '133px'; // Altura padrão do output
    }
}

function criptografar() {
    let inputText = document.querySelector('.input__text').value.trim();

    if (inputText !== '') {
        let outputText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        let outputTextarea = document.querySelector('.output__text');
        outputTextarea.value = outputText;

        let botaoCopiar = document.querySelector('.botao__copiar');
        botaoCopiar.style.display = outputText !== '' ? 'inline-block' : 'none';

        document.querySelector('.input__text').value = '';

        document.querySelector(".imagem__article").classList.add("esconder");
        document.querySelector(".paragrafo__article").classList.add("esconder");

        ajustarAltura();
    }
}

function descriptografar() {
    let inputText = document.querySelector('.input__text').value.trim();

    if (inputText !== '') {
        let outputText = inputText
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        let outputTextarea = document.querySelector('.output__text');
        outputTextarea.value = outputText;

        let botaoCopiar = document.querySelector('.botao__copiar');
        botaoCopiar.style.display = outputText !== '' ? 'inline-block' : 'none';

        document.querySelector('.input__text').value = '';

        document.querySelector(".imagem__article").classList.add('esconder');
        document.querySelector(".paragrafo__article").classList.add('esconder');

        ajustarAltura();
    }
}

function copiarTexto() {
    let textoCopiado = document.querySelector('.output__text').value;

    // Cria um elemento textarea temporário e o adiciona ao DOM
    let textareaTemp = document.createElement('textarea');
    textareaTemp.value = textoCopiado;
    textareaTemp.setAttribute('readonly', ''); // Para manter o campo somente leitura para segurança
    textareaTemp.style.position = 'fixed'; // Corrige a posição do elemento
    textareaTemp.style.opacity = 0; // Torna o elemento invisível

    document.body.appendChild(textareaTemp);

    // Seleciona e copia o texto do elemento temporário
    textareaTemp.select();
    document.execCommand('copy');

    // Remove o elemento temporário do DOM
    document.body.removeChild(textareaTemp);

    let outputTextarea = document.querySelector('.output__text');
    outputTextarea.value = ''; 

    document.querySelector('.botao__copiar').style.display = 'none';
    outputTextarea.placeholder = ''; // Redefine o placeholder para uma string vazia
    document.querySelector('.paragrafo__article').classList.remove('esconder');
}

