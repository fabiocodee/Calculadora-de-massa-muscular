document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para não recarregar a página

    // Obtém os valores dos campos de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Estimativa simplificada de massa muscular
    // Exemplo: Considera que a massa muscular é 60% do peso corporal
    const massaMuscular = peso * 0.6;

    // Atualiza o resultado com a estimativa de massa muscular
    document.getElementById('massa-muscular').textContent = massaMuscular.toFixed(2) + ' kg';
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para não recarregar a página

    // Obtém os valores dos campos de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Estimativa simplificada de massa muscular
    const massaMuscular = peso * 0.6; // Exemplo de cálculo simples: 60% do peso corporal

    // Atualiza o resultado com a estimativa de massa muscular
    document.getElementById('massa-muscular').textContent = massaMuscular.toFixed(2) + ' kg';
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Botão clicado!');

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const massaMuscular = peso * 0.6;
    document.getElementById('massa-muscular').textContent = massaMuscular.toFixed(2) + ' kg';
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para não recarregar a página

    // Obtém os valores dos campos de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Estimativa simplificada de massa muscular (exemplo)
    const massaMuscular = peso * 0.6;

    // Atualiza o resultado com a estimativa de massa muscular
    document.getElementById('massa-muscular').textContent = massaMuscular.toFixed(2) + ' kg';
});
