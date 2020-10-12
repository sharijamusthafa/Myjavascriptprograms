var n1=0;
var n2=1;
var nextterm=0;
var n=10;
//alert("Enter positive number:")
alert(n1+","+n2)
nextterm=n1+n2;
while(nextterm<=n)
{
 alert(+nextterm)
 n1=n2;
 n2=nextterm;
 nextterm=n1+n2;
}