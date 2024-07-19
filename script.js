function ajustarAltura() {
    let botaoCopiar = document.querySelector('.botao__copiar');
    let article = document.querySelector('.apresentacao__article');
    let output = document.querySelector('.output__text');
    let maxWidth1200 = window.matchMedia('(max-width: 1200px)').matches;
    let maxWidth415 = window.matchMedia('(max-width: 415px)').matches;

    if (maxWidth1200 || maxWidth415) { 
        if (botaoCopiar.style.display === 'inline-block') {
            if (maxWidth415) {
                article.style.height = '280px'; 
            } else if (maxWidth1200) {
                article.style.height = '240px'; 
            }
        } else {
            article.style.height = '133px'; 
        }
        output.style.height = '133px'; 
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

    let textareaTemp = document.createElement('textarea');
    textareaTemp.value = textoCopiado;
    textareaTemp.setAttribute('readonly', ''); 
    textareaTemp.style.position = 'fixed';
    textareaTemp.style.opacity = 0; 

    document.body.appendChild(textareaTemp);

    textareaTemp.select();
    document.execCommand('copy');

    document.body.removeChild(textareaTemp);

    let outputTextarea = document.querySelector('.output__text');
    outputTextarea.value = ''; 

    document.querySelector('.botao__copiar').style.display = 'none';
    outputTextarea.placeholder = '';
    document.querySelector('.paragrafo__article').classList.remove('esconder');
}



