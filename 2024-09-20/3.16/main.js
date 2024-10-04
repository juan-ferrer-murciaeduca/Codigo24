/*

Hacer un programa que muestre por pantalla los 20 primeros términos de la sucesión de Fibonacci

NOTA: La sucesión de Fibonacci se caracteriza por:

Primer elemento: 0
Segundo elemento: 1
Resto: se obtienen sumando los dos términos anteriores.
0,1,1,2,3,5,8,...
*/
let num1 = 0;
let num2 = 1;

document.write(num1 + ", " + num2 + ", ");

for (let i = 1; i <= 18; i++) {
  let suma = num1 + num2;
  document.write(suma + ", ");
  num1 = num2;
  num2 = suma;
}
