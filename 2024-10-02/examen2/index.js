const ahorcado = (palabra, pista) => {
  let intentos = 5;
  const arrPablara = palabra.split("");
  const arrSolucion = [];
  for (let i = 0; i < arrPablara.length; i++) {
    arrSolucion.push("-");
  }

  while (intentos > 0) {
    // alert("PISTA: " + pista + ", " + arrSolucion + ", intentos rstantes: " + intentos);
    let letra = prompt(`PISTA: ${pista}, ${arrSolucion}, intentos: ${intentos},  ingrese una letra`);

    if (arrPablara.includes(letra)) {
      for (let i = 0; i < arrPablara.length; i++) {
        if (arrPablara[i] == letra) {
          arrSolucion[i] = letra;
        }
      }
    } else {
      intentos--;
    }

    if (arrSolucion.join("") == arrPablara.join("")) {
      alert("Ganaste");
      return true;
    }
  }

  alert("Perdiste");
  return false;
};

ahorcado("hola", "esto es una pista");
