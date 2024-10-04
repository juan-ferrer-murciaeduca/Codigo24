const esdivisor=(num1,num2)=>{
    return (num1%num2==0);
}

const abundante=(num)=>{
    let suma=0;
    for(let i=1;i<=num-1;i++){
        if (esdivisor(num,i)){
            suma+=i;
        }

    }
    return (suma>num);
}