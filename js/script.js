document.getElementById("demo2").innerHTML = "preeti i love u";
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


// write hello dollyn that is strings
// document.getElementById('demo4').innerHTML = "hello dolly";
// document.getElementById("demo5").innerHTML = "how are u?";


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
// chnage element

car [1]= "cycle";
// add element
car.push ("bike")
 document.getElementById("demo9").innerHTML = car [4];

 // conts object

  const caar = {type:"fait", model:"400", color:"white" } ;
   
 // change color
 caar.color = "red";


 // add somthing

caar.onwer = "poonam";

 document.getElementById("demo10").innerHTML = "car onwer is  " + 
 caar.onwer;

 // hoisting


 bikeName = "fz";
 document.getElementById("demo11").innerHTML = bikeName ;

 var bikeName;
// arithmentc operator

 var b = 10,  c= 9;
 b += 5;
 c -= 4;
 document.getElementById("demo12").innerHTML = b + "and" + c;
// concatinate
 let test1 = "what a very nice";
  test1 += " day.";
  document.getElementById("demo13").innerHTML = test1 ;
  
  let a2 = 22;
  let a1 = 31;
  //a1++;
  let $  = a2 += a1;
  $++;
    document.getElementById("demo14").innerHTML = $ ;

    // function create

  let o= myfunction(3,4);
  document.getElementById("demo15").innerHTML = o;
    function  myfunction(a,b){
    return a*b
  }
  // celsius
   function tocelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
   }

   let value = tocelsius(80);
   document.getElementById("demo16").innerHTML = value ;

   // function as a variable
    let text = "the temperature is " + tocelsius(77) + " ceslsius";
    
    function tocelsius(f){
      return (5/9) * (f-32);
    }

    document.getElementById("demo17").innerHTML = text;
