document.getElementById('botao').addEventListener('click', function () {
    // Captura os valores digitados e converte para números decimais
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Elementos onde o resultado será exibido
    const res1 = document.getElementById('resultado1');
    const res2 = document.getElementById('resultado2');

    // Validação de entrada
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        res1.textContent = "Por favor, digite todas as notas!";
        res2.textContent = "";
        return;
    }

    // Cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibe a média com 1 casa decimal
    res1.textContent = `Média: ${media.toFixed(1)}`;

    // Regra: Média igual ou maior que 5 PASCOU, menor que 5 REPROVOU
    if (media >= 5) {
        res2.textContent = " - Situação: Passou";
        res2.style.color = "green";
    } else {
        res2.textContent = " - Situação: Reprovado";
        res2.style.color = "red";
    }
});