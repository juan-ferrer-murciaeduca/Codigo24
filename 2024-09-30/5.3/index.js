const mayusculas=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const minusculas=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numeros=["0","1","2","3","4","5","6","7","8","9"];


const ValidaContrasena=(texto)=>{
    if (texto.legth < 8) {
        return false;
    }
    let contaMayusculas = 0, contaMinusculas = 0, contaNumeros = 0;

    const arrTexto=texto.split("");

    arrTexto.forEach(elemento => {
            if (mayusculas.includes(elemento)) contaMayusculas++;
            if (minusculas.includes(elemento)) contaMinusculas++;
            if (numeros.includes(elemento)) contaNumeros++;
    });

    return (contaMayusculas > 0 && contaMinusculas > 0 && contaNumeros > 0) 




    // return true o false;
}

document.write(ValidaContrasena("AAAA15678fdsafsd"));
