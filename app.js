function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let contador = 0;
    let numero;

    while(contador < quantidade) {
        numero = sorteiaNumero(de, ate);

        while(numerosSorteados.includes(numero)) {
            numero = sorteiaNumero(de, ate);
        }

        numerosSorteados.push(numero);
        contador++;
    }

    exibirNumerosSorteados(numerosSorteados);
}

function sorteiaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function exibirNumerosSorteados(numeros) {
    let sorteados = document.getElementById('resultado');
    sorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeros}</label>`
}

