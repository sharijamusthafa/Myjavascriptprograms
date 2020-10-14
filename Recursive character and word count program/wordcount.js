var string="hai hello hai welcome hii"
var arr = string.split(" ");
//var arr1=arr.length;
alert(arr)
//alert(arr1)
var dict={}
for(i of arr){
    if (i in dict){
        dict[i]+=1
        }
    else{
        dict[i]=1
        }
      }

console.log(dict)