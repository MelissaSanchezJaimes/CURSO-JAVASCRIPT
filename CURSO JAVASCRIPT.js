
<crip> 
   document.write("Hola mundo")
</crip>

console.log("Hello from console!")

var x= 10; 

var x= 100; 
document.write(x); 

var x = 100; 
document.write(x); 


// This is a single line comment 
alert("This is an alert box!")

/* This code
creates an
alert box */ 
alert("This is an alert box!"); 

var num = 42; // A number without
decimals 

var price = 55.55; // A number with
decimals
document.write(price);

var name = "Melissa"
var text = "Mi nombre es Melissa Sanchez"; 

var sayHello = "Hola mundo" /"I am a JavaScript programmer./"; 
document.write(sayHello); 

var isActive = true;
var isHoliday = false; 

var x = 10 * 5;
document.write(x); 

var x = 100 / 5;
document.write(X); 

var myVariable = 26 % 6; 

var num = 10; 
// num == will return false

(4 > 2) (10 < 15)

var mystring1 = "I am learning "; 
var mystring2 = "JavaScript"; 

function myFunc(x, y) {
   //some code
}

function sayHello(name, age) {
   document.write( name + "is" + age + "years old"); 
}

function sayHello(name, age) {
   document.write( name + "is" + age + "years old.");
}

sayHello("Melissa, 17")

function myFunction(a, b) {
   return a * b;
}

var x = myFunction(5, 6);
//Return value will end up in x

function addNumbers(a, b) {
   var c = a+b;
   return c;
}
document.write( addNumbers(40, 2) ); 

alert("Do you really want to leave this page?");

alert("Hello/nHow are you?"); 

var user = prompt("Please enter you name");
alert(user); 

var result = confirm("Do you really want to leave this page?");
if (result ==true) {
   alert("Thanks for visiting"); 
}
else {
   alert("Thanks for staying with us"); 
}

var person = {
   name: "Melissa", age: 17,
   favColor: "green", height: 183
};

ibjectName.propertyName
//or
objectName["PropertyName"]

var person = {
   name: "Melissa", age: 17,
   favColor: "Green", height: 183
}; 
var X = person.age;
var y = person["age"]; 

var course = {name: "JS", lessons: 41}; 
document.write(course.name.length); 

objectName.methodName()

var person = {
   name: "Melissa", age: 17, favColor: "green"
};

function person(name, age, color) {
   this.name = name; 
   this.age = age; 
   this.favColor = color; 
}

var p1 = new person("Melissa", 17, "green"); 
var p2 = new person("Amy", 21, "red"); 

document.write(p1.age); //Outputs 17
document.write(p2.name); //Outpust "Amy"

function person (name, age) {
   this.name = name; 
   this.age = age; 
}
var Duvan = new person("Duvan", 23); 
var Emily = new person("Emily", 12); 

var Duvan = {name: "Duvan", age: 23}; 
var Emily = {name:"Emily", age: 12}; 

var Duvan = {
   name: "Duvan",
   age: 23
}; 
var Emily ={
   name: "Emily",
   age: 12
}; 

document.write(Duvan.age); 

methodName = function() { code, lines}; 
objectName.methodName()

function person(name, age) {
   this.name = name; 
   this.age = age; 
   this.changeName = function (name) {
      this.name = name; 
   }
}

var p = new person ("David", 21); 
p.changeName("Duvan"); 
//Now p.name equals to "Duvan"

function person(name, age) {
   this.name = name; 
   this.age = age; 
   this.yearOfBirth = bornYear; 
}
function bornYear() {
   return 2016 - this.age;
}

function person(name, age) {
   this.name= name; 
   this.age= age; 
   this.yearOfBirth = bornYear; 
}
function bornYear() {
   return 2016 - this.age; 
}

var p = new person("A", 21); 
document.write(p.yearOfBirth()); 

var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 

var course = new Array("HTML","CSS","JS"); 

var courses = new Array("HTML", "CSS", "JS"); 
var course = course[0]; //HTML 
courses[1] = "C++"; //Changes the second element

var courses = new Array("HTML", "CSS", "JS"); 
document.write(courses[10]); 

var courses = new Array(3); 
courses[0] = "HTML"; 
courses[1] = "CSS"; 
courses[2] = "JS"; 

var courses = new Array(); 
courses[0] = "HTML"; 
courses[1] = "CSS"; 
courses[2] = "JS"; 
courses[3] = "C++"; 

var courses = ["HTML", "CSS", "JS"]; 
document.write(courses.length); 

var c1 =["HTML", "CSS"]; 
var c2 = ["JS", "C++"]; 
var courses = c1.concat(c2); 

var person = []; //empty array
person["name"] = "Duvan"; 
person["age"] = 23; 
document.write(person["age"]); 

document.write(Math.PI); 

var number = Math.sqrt(4); 
document.write(number); 

var n = prompt("Enter a number", ""); 
var answer = Marh.sqrt(n); 
alert("The square root of "+ n + "is" + answer); 

function myAlert() {
   alert("Hi");
}
setInterval(myAlert, 3000); 

var d = new Date(); 
//d stores the current date and time 

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

var d = new Date(); 
var hours = d.getHours();
//hours is equal to the current hour

function printTime() {
   var d = new Date(); 
   var hours = d.getHours(); 
   var mins = d.getMinutes(); 
   var secs = d.getSeconds(); 
   document.body.innerHTML = 
hours+":"+mins+":"+secs; 
}
setInterval(printTime, 1000); 

document.body.innerHTML = "Some text"; 

//finds element by id 
document.gerElementById(id)

//finds elements by class name 
document.getElementsByClassName(name)

//finds elements by tag name 
document.getElementsByTagName(name)

var elem = document.gerElementById("demo"); 
elem.innerHTML = "Hola mundo!"; 

var arr = 
document.getElementsByClassName("demo"); 
//accessing the second element 
arr[1].innerHTML ="Hola"; 

var node = document.createTextNode("Some new text"); 

var t = setInterval(move, 500); 

//starting position 
var pos = 0; 
//our box element 
var box = document.gerElementById("box"); 

function move() {
   pos +=1; 
   box.style.left = pos+"px"; //px = pixels
}

var t = setInterval(move, 10); 

function move() {
   if(pos >=150) {
      clearInterval(t); 
   }
   else {
      pos += 1; 
      box.style.left = pos+"px"; 
   }
}

var pos = 0; 
//our box element 
var box = document.getEelementById("box");
var t =setInterval(move, 10); 

function move() {
   if(pos >=150) {
      clearInterval(t);
   }
else {
   pos += 1; 
   box.style.left = pos+"px";
  }
}

var x = document.gerElementById("demo"); 
X.onclick = function () {
   document.body.innerHTML = Date();
}

window.onload = function() {
   //some code
}

element.addEventListener(event, Function, useCapture); 

element.addEventListener("Click", myFunction);
element.addEventListener("mouseover",
myFunction); 

function myFunction() {
   alert("Hola mundo!");  
}

element.removeEventListener("mouseover",
myFunction);

addEventListener(event, Function, useCapture); 

//Capturing propagation 
elem1.addEventListener("click", myFunction,
true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction,
false);

var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
];

var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg",

   "http://www.sololearn.com/uploads/slider/2.jpg", 

   "http://www.sololearn.com/uploads/slider/3.jpg"
];
var num = 0; 

function next() {
   var slider = 
document.getEelementById("slider");
num = 0; }
if(num >= images.length) {
   num= 0;
}
{slider.src = images[num]; 
}
function prev() {
   var slider =
document.getEelementById("slider"); 
num--;
if(num < 0) {
   num = images.length-1;
  }
slider.src = images[num]; 
}

function validate() {
   var n1 = document.getEelementById("num1");
   var n2 = document.getEelementById("num2"); 
   if(n1.value != "" && n2.value != "") {
   if(n1.value == n2.value) {
      return true; 
   }
}
alert("The values should be equal and not blank"); 
return false; 
}

var a = 10; 
const b = "hello"; 
let c = true; 

if (true) {
   let name = "Melissa"; 
}
alert(name); //generates an error

function varTest() {
   var x = 1; 
   if(true) {
      var x = 2; //same variable
      console.log(x); //2
   }
   console.log(x); //2
}

function letTest() {
   let x = 1; 
   if (true) {
      let x = 2; //different variable
      console.log(x); //2
   }
   console.log(x); //1
}

for (let i = 0; i < 3; i++) {
   document.write(i);
}
const a = "Hello"; 
a = "Bye"; 


let name = "Jhonathan"; 
let msg = "Bienvenido" + name + "!"; 
console.log(msg); 

let name = "David"; 
let msg = "Welcome ${name}!"; 
console.log(msg)

let a = 8; 
let b = 34; 
let msg = "The sum is ${a+b}";
console.log(msg); 

let arr = [1, 2, 3]; 
for (let k = 0; k <arr.length; k++) {
   console.log(arr[k]);
}

let obj = {a: 1, b: 2, c: 3}; 
for (let v in obj) {
   console.log(v);
}

let list = ["x", "y", "z"]; 
for (let val of listo) {
   console.log(val);
}

for (let ch of "Hello") {
   console.log(ch);
}

function add(x, y) {
   var sum = x+y;
   console.log(sum);
}

const add = (x, y) => {
   let sum = x + y;
   console.log(sum); 
}

const greet = x => "Welcome" + X; 

const x = () => alert("Hi"); 

var arr = [2, 3, 7, 8];

arr.forEach(function(el) {
   console.log(el * 2); 
});

const arr = [2, 3, 7, 8]; 

arr.forEach(v => {
   console.log(v * 2);
});

function test(a, b = 3, c = 42) {
   return a + b + c 
}; 
console.log (test(5)); //50

const test = (a, b = 3, c= 42) => {
   return a + b + c
};
console.log(test(5)); //50

let tree = {
   height: 10,
   color: "green", 
   grow() {
      this.height += 2; 
   }
};
tree.grow();
console.log(tree.height); //12

let height = 5; 
let health = 100; 

let athlete = {
   height,
   health
};

var a = {x: 1, x: 2, x: 3, x: 4}; 

let prop = "name"; 
let id = "1234"; 
let mobile = "08923"; 

let user = {
   [prop] : "Melissa",
   ["user_${id}"]: "${mobile}"
}; 

var i = 0; 
var a = {
   ["foo" + ++i]: i, 
   ["foo" + ++i]: i,
   ["foo" + ++i]: i 
}; 

var param = "size"; 
var config = {
   [param]: 12,
   ["mobile" + param.charAt(0).toLocaleUpperCase() +
param.slice(1)]: 4
}; 
console.log(config.mobileSize); 

let person = {
   name: "Melissa", 
   age: 17,
   sex: "female"
}; 
let student = {
   name: "Cesar",
   age: 15, 
   xp: "2"
}; 

let newStudent = Object.assign({}, person,
   student);

let person = {
   name: "Jack",
   age: 18
}; 

let newPerson = person; // newPerson 
references:person 
newPerson.name = "Bob"; 

console.log(person.name); //Bob
console.log(newPerson.name); //Bob

let person = {
   name: "Jack",
   age: 18
}; 

let newPerson = Object.assign({}, person); 
newPerson.name = "Bob"; 

console.log(person.name); //Jack
console.log(newPerson.name); //Bob

let person = {
   name: "Jack", 
   age: 18
}; 

let newPerson = Object.assign({}, person,
{name: "Bob"}); 

let a =() => {
   return [1, 3, 2]; 
}; 

let [one, , two] = a(); 

let a, b, c = 4, d = 8; 
[a, b = 6] = [2]; //a = 2, b = 6

[c, d] =  [d, c]; // c = 8, d = 4

let obj = {h:100, s: true}; 
let {h, s} = obj; 

console.log(h); //100
console.log(s); //true

let a, b; 
({a, b} = {a: "Hello", b: "Jack"}); 

console.log(a+ b); // Hello Jack

let {a, b} = {a: "Hello", b: "Jack"}; 
console.log(a + b); 

var o = {h: 42, s: true}; 
var {h: foo, s: bar} = o; 

//console.log(h); // Error
console.log(foo); //42

var obj = {id: 42, name: "Jack"}; 

let {id = 10, age = 20} = obj; 

console.log(id); //42
console.log(age); //20

function containsAll(arr) {
   for (let k = 1; k <arguments.length; k++) {
      let num = arguments[k];
      if (arr.index0f(num) === -1) {
         return false; 
      }
   }
   return true; 
}
let x = [2, 4, 6, 7]; 
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9)); 

function containsAll(arr, ...nums) {
   for (let num of nums) {
      if (arr.index0f(num) === -1) {
         return false;
      }
   }
   return true;
}

function myFunction(w, x, y, z) {
   console.log(w + x + y + z); 
}
var args = [1, 2, 3]; 
myFunction.apply(null, args,concat(4)); 

const myFunction = (w, x, y, z) => {
   console.log(w + x+ y + z); 
}; 
let args = [1, 2, 3]; 
myFunction(...args, 4); 

var dateFields = [1970, 0, 1]; // 1Jan 1970
var date = new Date(...dateFields); 
console.log(date); 

var arr = ["One", "Two", "Five"]; 

arr.splice(2, 0, "Three"); 
arr.splice(3, 0, "Four");
console.log(arr); 

let newArr = ["Three", "Four"]; 
let arr = ["One", "Two", ...newArr, "Five"]; 
console.log(arr); 

const obj1 = {foo: "bar", x: 42}; 
const abj2 = {foo: "baz", y: 5}; 

const obj1 = { foo: "bar", x: 42}; 
const obj2 = { foo: "baz", y: 5}; 
const merge = (...objects) => ({...objects}); 

class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
}

const square = new Rectangle(5, 5); 
const square = new Rectangle(2, 3); 

var square = class Rectangle {
   constructor(height, width) {
      this.height = height;
      this.width = windth;
   }
}; 

var square = class {
   constructor(height, width) {
      this.height = height; 
      this.width = width; 
   }
}; 

let map = new Map(); 

map.set("k1", "v1").set("k2", "v2"); 

console.log(map.get("k1")); //v1

console.log(map.has("k2")); //true

for (let kv of map.entries()) 
console.log(kv[0] + " : " + kv[1]); 

let set = new set([1, 2, 4, 2, 59, 9, 4,
9, 1]); 

console.log(set.size); // 5 

let set = new set(); 

set.add(5).add(9).add(59).add(9); 

console.log(set.has(9)); 

for (let v of set.values())
console.log(v); 

setTimeout(function() {
   console.log("Word 1"); 
   setTimeout(function() {
      console.log("Word 2"); 
   }, 1000); 
}, 1000); 
console.log("End"); 

new Promise(function(resolve, reject) {
   // Work 
   if (success)
   resolve(result); 
   else
   reject(Error("failure"));
}); 

function asyncFunc(work) {
   return new Promise(function(resolve,
   reject) {
      if (work === "")
        reject(Error("Nothing")); 
      setTimeout(function() {
         resolve(work);
      }, 1000); 
   });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
   console.log(result); 
   return asyncFunc("Work 2"); // Task 2
}, function(error) {
   console.log(error); 
})
.then(function(result) {
   console.log(result); 
}, function(error) {
   console.log(error); 
});
console-log("End"); 

let myIterableObj = {
   [Symbol.iterator] : function* () {
      yield 1; yield 2; yield 3;
   }
}
console.log([...myIterableObj]); 

function* idMaker() {
   let index = 0; 
   while (index < 5)
   yield index++; 
}

var gen = idMaker(); 
console.log(gen.next().value); 

const arr = ["0", "1", "4", "a", "9",
"c", "16"];
const my_obj = {
   [Symbol.iterator]: function() {
      for(let index of arr) {
         yield "${index}"; 
      }
   }
};
const all = [...my_obj]
.map(i => parseInt(i, 19))
.map(Math.sqrt)
.filter((i) => i < 5)
.reduce((i, d) => i + d);
console.log(all); 


// lib/math.js
export let sum =(x, y) => { return x +
y; }
export let pi = 3.14; 

// app.js
import * as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)

[4, 5, 1, 8, 2, 0].filter(function (x) {
   return x > 3;
})[0]; 

[4, 5, 1, 8, 2, 0].find(x => x > 3); 

[4, 5, 1, 8, 2, 0].findIndex(x => x > 3); 

console.log(Array(3 + 1).join("foo")); //
foofoofoo

console.log("foo".repeat(3)); //foofoofoo

"SoloLearn". indexOf("Solo") === 0; // true
"SoloLearn".index0f("Solo") === (4 -
"Solo".length); //true
"SoloLearn". indexOf("Lole") !== -1; //
true
"SoloLearn".index0f("olo", 1) !== -1; //
true
"SoloLearn".index0f("olo", 2) !== -1; //
false

"SoloLearn".startsWith("Solo", 0) // true
"SoloLearn".endsWith("Solo", 4); // true
"SoloLearn".includes("lole"); // true
"SoloLearn".includes("olo", 1); // true
"SoloLearn".includes("olo", 2); // false

function main() { 
   var distance = parseInt(readLine(), 10); 
   //your code goes here 
   var speed = 40 
   var time = 60 
   var minutes = distance/speed
   console.log(minutes*time) 
   }

   function main() {
      var depth = parseInt(readLine(), 10);
      //your code goes here
      var i;
      var p=0;
      var sum=0;
      for(i=1;i>0;i++)
      {
         p=p+7;
         
         if(p>=depth)
         {
         console.log(i);
         break;}
         p=p-2;
         
      }
  }

  function main() {
   var amount = parseFloat(readLine(), 10);
   var rate = parseFloat(readLine(), 10);
   console.log(convert(amount, rate));
}
function convert(a,b){
   return a*b;
}

function contact(name, number) 
{
    this.name = name;
    this.number = number;
    this.print = print;
}

function print()
{
    console.log(this.name + ": " + this.number);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321)
a.print();
b.print();

function main() {
   var increase = parseInt(readLine(), 10);
   var prices = [98.99, 15.2, 20, 1026];
   //your code goes here
   for (i=0; i<4; i++){
       prices[i] = increase + prices[i];
   }
   console.log(prices)
}

class Add {
   constructor(...words) {
       this.words = words;
   }
   //your code goes here
   print(){
       var y ="";
       for (x of this.words) {
         if(x == ","){
           x = "";
         }
         else{
           y += "$" + x;
         }
       }
 
       y = y + "$";
       console.log(y);
   }
 }
 
 var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
 var y = new Add("this", "is", "awesome");
 var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", ",", "consectetur", "adipiscing", "elit");
 x.print();
 y.print();
 z.print();

 



