function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let contador = 0;
    let numero;

    while(contador < quantidade) {
        numero = sorteiaNumero(de, ate);
        numerosSorteados.push(numero);
        contador++;

        console.log(numerosSorteados);
    }

}

function sorteiaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}