let num1=1
let num2=1
let num3=1
let num4=1
let num5=1
document.write(num1+","+num2+", "+num3+", "+num4+", "+  num5)

for (i=1; i<=995; i++){
 let num6=num1+num2+num3-num4
 let num7=num2+num3+num4-num5;

 document.write(","+num6)
 num1=num2
 num2=num3
 num3=num4
 num4=num5
 num5=num6
 num6=num7
}
