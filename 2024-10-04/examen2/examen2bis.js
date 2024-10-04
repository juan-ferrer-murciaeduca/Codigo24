const cuentavocuales=(texto)=> {

    const contadores=[0,0,0,0,0];
    

    const arrTexto=texto.split("");

    for(let elemento of arrTexto) {
        if (elemento=="a") { contadores[0]=contadores[0]+1; }
        if (elemento=="e") { contadores[1]=contadores[1]+1; }
        if (elemento=="i") { contadores[2]=contadores[2]+1; }
        if (elemento=="o") { contadores[3]=contadores[3]+1; }
        if (elemento=="u") { contadores[4]=contadores[4]+1; }
    }
   
    document.write("a: "+contadores[0]+ " veces <br>");
    document.write("e: "+contadores[1]+ " veces <br>");
    document.write("i: "+contadores[2]+ " veces <br>");
    document.write("o: "+contadores[3]+ " veces <br>");
    document.write("u: "+contadores[4]+ " veces <br>");

}

cuentavocuales("en un lugar de la mancha");