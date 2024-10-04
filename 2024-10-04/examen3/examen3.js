function obtenerLetra(dni) {
    let elresto=dni%23;
    const arr=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

    return dni+"-"+arr[elresto];

}

document.write(obtenerLetra(20267079));