class Book{
  constructor(id,name,pageno,price){
    this.id=id;
    this.name=name;
    this.pageno=pageno;
    this.price=price;
  }
  getBook(){
     console.log(this.name);
     console.log(this.name);
  }
}
let ob=new Book(1,"test1",150,250);
let ob1=new Book(2,"test2",160,260);
let ob2=new Book(3,"test3",170,270);
let ob3=new Book(4,"test4",190,200);

var arr=[]
arr.push(ob)
arr.push(ob1)
arr.push(ob2)
arr.push(ob3)

var i;
//var bookprice;
for (i = 0; i < arr.length; i++) {
    //bookprice += arr[i]["price"] + "<br>";
  //if(bookprice>250){
     //console.log(bookprice)
  if(arr[i]["price"]>250){
    console.log(arr[i])
  }
    }

//for ( i in arr){
//

//var high = Math.max(arr["price"]);
//var low  = Math.min(arr[i]["price"]);



var maxprice=0;
var minprice=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]["price"]>maxprice){
      maxprice=arr[i]["price"]
    }
    else{
       minprice=arr[i]["price"]
    }
}
//console.log(maxprice)
for(item of arr){
   if(maxprice==item["price"]){
       console.log("book with max. price :"+item["price"])
   }
}

for(item of arr){
  var upp = item["name"].toUpperCase()
  console.log(upp)

}
