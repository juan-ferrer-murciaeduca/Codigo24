function generaApuesta() {
  const numeros = [];

  do {
    let numAleatorio = Math.round(Math.random() * 49) + 1;

    if (!numeros.includes(numAleatorio)) {
      numeros.push(numAleatorio);
    }
  } while (numeros.length < 5);

  document.write("Numeros: " + numeros);
}

generaApuesta();
