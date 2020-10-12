var count=10;
var n1=0;
var n2=1;
var nextterm=0;
alert(n1+","+n2)
for(var i=0;i<count;i++){
nextterm=n1+n2;
n1=n2;
n2=nextterm;
alert(nextterm)
}