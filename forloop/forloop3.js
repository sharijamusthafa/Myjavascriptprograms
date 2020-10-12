var person1= {firstname:"sharija", lastname:"ajeer",gender:"female"};
var person2= {fname:"zidaan",lname:"ajeer",gender:"male"}
var name1 = "";
var name2 =" ";
var i;
for (i in person1) {
  name1 += person1[i] + "\n";
}
for (i in person2) {
  name2 += person2[i] + "\n";
}
alert(name1+","+name2)