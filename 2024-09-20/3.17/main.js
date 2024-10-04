/*

Un numero triangular es aquel que se obtiene mediante la suma de una sucesión de números empezando desde el 1.

Por ejemplo 6 es triangular ya que 6=1+2+3
Otro ejemplo 21 es triangular ya que 21=1+2+3+4+5+6

Dado un numero almacenado en una variable, indicar por pantalla si es triangular o no, en caso de no ser triangular mostrar el numero triangular menor que este almacenado en la variable y el numero triangular mayor que el almacenado en la variable

Ej: Si en la variable esta almacenado el numero 20 -> mostrará NO ES TRIANGULAR, menor: 15, mayor: 21
*/

let numero = prompt("ingrese un numero", "5");

let suma = 0;
let i;
for (i = 1; suma < numero; i++) {
  suma += i;
}

if (suma == numero) {
  document.write("es triangular");
} else {
  document.write("no es triangular");
  document.write(", superior: "+suma);
  document.write(", anterior: "+(suma-i+1));
}
