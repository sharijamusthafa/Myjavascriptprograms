var marks=[80,90,45]
var student1=String(prompt("enter name"));
var student2=String(prompt("enter name"));
var student3=String(prompt("enter name"));
student1=marks[0];
student2=marks[1];
student3=marks[2];
if(student1>90){
alert("Grade A+")
}
else if((student2<=90)&(student2>80)){

alert("Grade A")
}
else if((student3>70)&(student3<80))
{
alert("Grade B+")
}
else{
alert("Grade C")
}
