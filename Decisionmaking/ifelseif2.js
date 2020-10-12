num1=Number(prompt("Enter first number:"));
num2=Number(prompt("Enter second number:"));
num3=Number(prompt("Enter third number:"));
if((num1<num2)&(num1<num3)){
 temp1=num1
 temp2=num3
 temp3=num2
 if(num2<num3){
 temp2=num2
 temp3=num3
 }
}
else if((num2<num1)&(num2<num3)){
 temp1=num2
 temp2=num3
 temp3=num1
 if(num1<num3){
   temp2=num1
   temp3=num3
 }
}
else if((num3<num1)&(num3<num2)){
 temp1=num3
 temp2=num1
 temp3=num2
 if(num2<num1){
  temp2=num2
  temp3=num1
}
}
alert(temp1+","+temp2+","+temp3);
