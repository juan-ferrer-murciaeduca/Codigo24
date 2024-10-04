const comprobarPremio=(num1,num2,num3)=>{
    document.write("Los numeros son: "+num1+" "+num2+" "+num3+"<br>");
    if (num1==num2 && num2==num3){
        document.write("Felicidades, has ganado un premio de 500€");
        return 0;
    }

    if (num1==num2 || num1==num3 || num2==num3){
        document.write("Felicidades, has ganado un premio de 100€");
        return 0;
    }

    document.write("No has ganado un premio");

    return 0;


}


let num1=Math.round(Math.random()*9)+1;
let num2=Math.round(Math.random()*9)+1; 
let num3=Math.round(Math.random()*9)+1; 



comprobarPremio(num1,num2,num3);



