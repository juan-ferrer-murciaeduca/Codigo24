const cuentavocuales=(texto)=> {

    const vocales =['a','e','i','o','u'];
    const contadores=[0,0,0,0,0];

    const arrTexto=texto.split("");

    for(let elemento of arrTexto) {
        let posicion=vocales.indexOf(elemento);
        if  (posicion>=0) {
            contadores[posicion]=contadores[posicion]+1;
        }
    }
    for(let i=0;i<vocales.length;i++) {
       document.write(`${vocales[i]}: ${contadores[i]} veces <br>`);
    }

}

cuentavocuales("en un lugar de la mancha");