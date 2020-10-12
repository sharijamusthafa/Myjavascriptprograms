var array=[10,20,30,40,50]
var even=[]
var odd=[]
for(item of array){
  alert(item)
    if(item%2==0){
       even.push(item)
   // alert("even number"+even)
    }
    else{
        odd.push(item)
   //alert("odd number"+odd)
  }
}
console.log(" even num"+even )
console.log(odd)