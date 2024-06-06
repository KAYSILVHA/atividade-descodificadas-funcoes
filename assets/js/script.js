document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const numero4 = parseFloat(document.getElementById('numero4').value);
    const numero5 = parseFloat(document.getElementById('numero5').value);
  
    const numeros = [numero1, numero2, numero3, numero4, numero5];
    const media = calcularMedia(numeros);
    
    document.getElementById('resultado').textContent = `A média aritmética é: ${media.toFixed(2)}`;
  });
  
  function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
  }
  