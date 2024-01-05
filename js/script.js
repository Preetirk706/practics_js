document.getElementById("demo2").innerHTML = "preeti";
// window.alert(3+4);
// console.log(2+2);
// window.print();


// adding two Number
let x,y,z;
x=3;
y=4;
z=x+y;
a=x*y;

document.getElementById("demo3").innerHTML = "the value of you calculation " + (z + a);


/* write hello dolly that is strings
document.getElementById('demo4').innerHTML = "hello dolly";
document.getElementById("demo5").innerHTML = "how are u?"; */


//arithmetic operator to compute value
document.getElementById("demo6").innerHTML = (3*8)-3;


// expressions
document.getElementById("demo7").innerHTML = "john " + "deo";


//change last name
let lastname , lastName;
lastname = "deo";
lastName = "petor";
document.getElementById("demo8").innerHTML = lastname;


// constant value chnaged
const car = ["vovle", "naino", "toyoto","bmw"];
car [1]= "cycle"; // chnage element
car.push ("bike") // add element
document.getElementById("demo9").innerHTML = car [4];


// That is Object
const caar = {type:"fait", model:"400", color:"white" };
caar.color = "red"; // change color
caar.onwer = "poonam"; // add somthing
document.getElementById("demo10").innerHTML = "car onwer is  " + caar.onwer;


// hoisting
bikeName = "fz";
var bikeName;
document.getElementById("demo11").innerHTML = bikeName;


// Arithmetic Operator
var b = 10,  c= 9;
b += 5;
c -= 4;
document.getElementById("demo12").innerHTML = b + "and" + c;


// concatinate to variable 
let test1 = "what a very nice";
test1 += " day.";
document.getElementById("demo13").innerHTML = test1;
  

// Increment Oprator
let a2 = 22;
let a1 = 31;
let $  = a2 += a1;
$++;
document.getElementById("demo14").innerHTML = $;


// function create
let temprature= myfunction(3,4);
document.getElementById("demo15").innerHTML = temprature;
function  myfunction(a,b){
  return a*b
}


// celsius
let value = tocelsius(80);
function tocelsius(fahrenheit){
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo16").innerHTML = value;

   
//  Object
const person = {
  firstName1: "john",
  lastName1: "deo",
  age: 33
};
document.getElementById("demo17").innerHTML = person.firstName1 + " is " + person.age + " year old. "


//store properties in function
const persn = {
  firstName2: "jummy",
  lastName2: "mart",
  agee: 22,
  fullName: function() {
    return this.firstName2 + " " + this.lastName2;
  }
};
document.getElementById("demo18").innerHTML = persn.fullName();


//use button in function
function displayDate(){
document.getElementById("demo20").innerHTML = Date();
}


//use templete
let text21 = `he's often call "jummy."`;
document.getElementById("demo21").innerHTML = text21 + " and the text lenght is " + text21.length;


// string method
var text22 = "i am not boy."
var part22 = text22.slice(-6);
document.getElementById("demo22").innerHTML = text22.charAt(2) + " code of charecter:<br> " + text22.charCodeAt(3) 
+ " <br>from the end of string :" + part22;

let text23 = "banana, kiwi, lemon, mango";
let part = text23.slice(8,12);
let part1 = text23.slice(13);
document.getElementById("demo23").innerHTML = part + "<br> from position 13:" + part1;



//use replace string
function mmyfunction(){
  let test24 = document.getElementById("demo24").innerHTML;  
  document.getElementById("demo24").innerHTML = test24.replace("tcs","microsoft"); 
};


//string serach method
let text25 = "plz locate 'locate' is:"
let index = text25.indexOf("locate");
document.getElementById("demo25").innerHTML = index;

let text26 = "plz locate 'locate' is:" 
let index1 = text25.search("plz");
document.getElementById("demo26").innerHTML = index1;

let tet27 ="Hello world, welcome to the universe.";
document.getElementById("demo27").innerHTML = tet27.startsWith("Hello") + " and " + tet27.endsWith("universe");
