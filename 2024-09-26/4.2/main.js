const elgordo=()=> {

    let num1= String(Math.round(Math.random()*9));
    let num2= String(Math.round(Math.random()*9));
    let num3= String(Math.round(Math.random()*9));
    let num4= String(Math.round(Math.random()*9));
    let num5= String(Math.round(Math.random()*9));

    let resultado=num1+num2+num3+num4+num5;

    let serie=Math.round(Math.random()*119)+1;

    document.write("El cupon ganador es: " + resultado + " de la serie: "+serie);
    
    /* convertir resultado String --> number
    generar 11 numeros siempre y cuando sean distintos del gordo
    y mostarlos por pantalla
    */
    


    
}

elgordo();