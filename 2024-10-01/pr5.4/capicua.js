const capicua=(numero)=> {

    const texto=String(numero);
    

    // cortafiambres
    const arrTexto=texto.split('');

    // reverso tenebroso de la fuerza
    arrTexto.reverse();

    // unir

    const text2=arrTexto.join('');

    // comparar la cadena original con el reverso

    return (texto==text2);
}