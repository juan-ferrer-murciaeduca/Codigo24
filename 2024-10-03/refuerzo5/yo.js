function generaApuesta() {
  const numeros = new Set();
  do {
    let numAleatorio = Math.round(Math.random() * 49) + 1;
    numeros.add(numAleatorio);
  } while (numeros.size < 5);

  const estrellas = new Set();
  do {
    let numAleatorio = Math.round(Math.random() * 11) + 1;
    estrellas.add(numAleatorio);
  } while (estrellas.size < 2);

  document.write("Numeros: ");
  for (let elemento of numeros) {
    document.write(elemento + ", ");
  }
  
  document.write("Estrellas: ");
  for (let elemento of estrellas) {
    document.write(elemento + ", ");
  }

  document.write("<br>");
  
}

generaApuesta();