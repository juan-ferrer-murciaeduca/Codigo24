const palindromo=(texto)=> {
    

    // cortafiambres
    const arrTexto=texto.split('');

    // reverso tenebroso de la fuerza
    arrTexto.reverse();

    // unir

    const text2=arrTexto.join('');

    // comparar la cadena original con el reverso

    return (texto==text2);
}

const palindromo2=(texto)=> {
    return (texto.split('').reverse().join('')==texto);

}
document.write(palindromo('reconocer'));
