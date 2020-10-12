 var n=Number(prompt("enter integer:"))
rev=0
original=n
while(n!=0){
    rem=n%10
    rev=rev*10+rem
    n//=10
    }
if(original==rev){
    alert("palindrome,"+rev)}
else{
 alert("not palindrome,"+rev)
}