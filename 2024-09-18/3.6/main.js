/*
Hacer un programa que permita saber si un año es bisiesto.

Para que un año sea bisiesto debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400.
*/

year=Number(prompt("introduce el año"));

if (year%4==0 && year%100!=0 || year%400==0){
    document.write("el año es bisiesto");
}else{
    document.write("el año no es bisiesto");
}