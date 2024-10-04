const letras1=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const letras2=["c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b"];


function cesar(texto) {

    const letras=texto.split("");
    let salida="";
    for (let elemento of letras) {
        let posicion=letras1.indexOf(elemento);
        if (posicion==-1) {
            salida=salida+elemento;
    } else {
        salida=salida+letras2[posicion];
    }
}
return salida;
}

function descifrarCesar(texto) {

    const letras=texto.split("");
    let salida="";
    for (let elemento of letras) {
        let posicion=letras2.indexOf(elemento);
        if (posicion==-1) {
            salida=salida+elemento;
    } else {
        salida=salida+letras1[posicion];
    }
}
return salida;
}


document.write(cesar("en un lugar de la mancha 44@hotmail.com"));
document.write("<hr>");
document.write(descifrarCesar("gp wp nwict fg nc ocpejc 44@jqvockn.eqo"));
    



