var pattern="ABCABD"
var a={}
for(char of pattern){
 if(char in a){
   alert("first recursive"+char)
 }
 else{
  a[char]=1
 }
}