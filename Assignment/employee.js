class Employee{
    constructor(eid,name,desig,join,resign){
      this.id=eid;
      this.name=name;
      this.desig=desig;
      this.join=join;
      this.resign=resign;
    }
    getEmp(){
     console.log("name="+this.name)

    }

}
let ob=new Employee(100,"ajay","devop",1981,2003);
let ob1=new Employee(101,"vijay","devop",1992,2008);
let ob2=new Employee(102,"bijoy","ba",1999,2007);
let ob3=new Employee(103,"jhon","ba",1989,2010);
let ob4=new Employee(104,"danie","qa",2009,2014);
let ob5=new Employee(105,"lari","qa",1987,2010);
var arr=[]
arr.push(ob)
arr.push(ob1)
arr.push(ob2)
arr.push(ob3)
arr.push(ob4)
arr.push(ob5)

//var na=arr.map(obj=>(obj.name)&(obj.desig))
//console.log(na)


var bk=arr.filter(ob=>(ob.name)&&(ob.desig))
//console.log(bk)
for(item of bk)
{
  console.log(item.name+","+item.desig)
}


var so=arr.map(ob=>ob.join).sort((ob1,ob2)=>ob1-ob2)
console.log(so)

var bb=arr.filter(ob=>ob.desig=="devop")
console.log(bb)

var bbb=arr.filter(ob=>(ob.resign-ob.join)>8)
for(item of bbb){
console.log(item.name)
}

//console.log("print all employee details those who are woking in 80s")
var b1=arr.filter(obj=>obj.join>1980 & obj.join<1990)
console.log(b1)