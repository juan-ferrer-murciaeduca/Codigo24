const par = (num) => {
  if (num % 2 == 0) return true;
  else return false;
};

const ullman = (num) => {
  if (num < 1) {
    document.write("el numero es menor que 1");
  } else {
    document.write(num + ", ");

    while (num != 1) {
      if (par(num)) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      document.write(num + ", ");
    }
  }
};

let numero=Number(prompt("ingrese un numero"));
ullman(numero);