const arr1=[1,2,3,21,12,12,12,312,1];

arr1.push(23);
arr1.push(3);
arr1.push(31223);
arr1.push(213323);
arr1.push(2443);
arr1[1]=32432;


// for (let i=0;i<arr1.length;i++){
//     document.write(arr1[i]+", ");
// }

document.write("<hr>");

for (let elemento of arr1){
    document.write(elemento+", ");
}

document.write("<hr>");

arr1.forEach(elemento => {
    document.write(elemento+", ")
}
);

document.write("<hr>");

arr1.map(elemento => {
    document.write(elemento+", ")
}
);

document.write("<hr>");

