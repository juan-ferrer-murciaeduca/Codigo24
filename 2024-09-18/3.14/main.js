/*
Hacer un programa que pida un numero por teclado y muestre por pantalla todos sus divisores

Ejemplo: 10 --> mostrará 1, 2, 5 */

let numero = Number(prompt("Introduce un numero"));

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        document.write(i+", "); 
    }
}