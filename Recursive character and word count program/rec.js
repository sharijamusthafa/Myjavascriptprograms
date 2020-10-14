 var str=String(prompt("enter word"))
var char=String(prompt("enter letter")).split(" ")
//var count;
//for(count=0;count<=str.length;count++){
  //  if(str[count]==char){
  //  }
//}
//alert(count)
var i;
var dict={}
for(i of str){
      if (i in dict){
        dict[i]+=1
        }
      else{
        dict[i]=1
        }

}
for(item in dict){
 console.log(item+":"+dict[item])
}
