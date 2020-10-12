 var num = Number(prompt("enter number:"))


 var sum = 0


 var temp = num
while(temp != 0){
   digit = temp % 10
   sum += digit ** 3
   temp //= 10

}
console.log(sum)
if(num == sum){
   alert("is an Armstrong number")
}
else{
   alert("is not an Armstrong number")

}