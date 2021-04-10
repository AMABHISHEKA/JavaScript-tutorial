alert("Hello");
// Ok

let result = confirm("Are you Sure?");
console.log(result);
// Ok or Cancel

let res = prompt('What is your name');
console.log(res);
// true

function hello(name, age) {
    console.log('Heloo' + name + ' ' + age);
}
hello('john', 'smith');
// Heloojohn smith

var a = 10;
var b = 20;
var sum = a + b;
console.log(sum);
// 30

for (var i = 0; i <= 6; i++) {
    i += 1;
}
console.log(i);
// 8

alert('Missing Some files');

for (let i = 0; i <= 7; i++) {
    i -= 1;
}
console.log(i);
// Reference Error

const i = 1;
var i = 5;
console.log(i);
// 1

var length = 16;
console.log(typeof length);
// Number

var length = 'Abhi';
document.write(typeof length);
// String

var x = 0.2 + 0.1;
console.log(x);
// 0.30000000000000004

var x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);
// 0.3

var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z);
// The result is: 1020

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
// (3) ["Saab", "Volvo", "BMW"]
// 0: "Saab"
// 1: "Volvo"
// 2: "BMW"
// length: 3

cars[0] = "Benz";
console.log(cars);
// (3) ["Benz", "Volvo", "BMW"]
// 0: "Benz"
// 1: "Volvo"
// 2: "BMW"
// length: 3

var x = 2 / 0;
console.log(x);
// Infinity

var y = -2 / 0;
console.log(y);
// -Infinity

var x = 0xFF;
console.log(x);
// 255

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// Banana,Orange,Apple,Mango

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));
// Banana * Orange * Apple * Mango

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));
// (4) ["Orange", "Lemon", "Apple", "Mango"]
// 0: "Orange"
// 1: "Lemon"
// 2: "Apple"
// 3: "Mango"
// length: 4

console.log(fruits.indexOf("Lemon"));
// 2

console.log(fruits.sort());
// (5) ["Apple", "Banana", "Lemon", "Mango", "Orange"]
// 0: "Apple"
// 1: "Banana"
// 2: "Lemon"
// 3: "Mango"
// 4: "Orange"
// length: 5

Math.trunc(4.9);
// 4

Math.pow(15, 2);
// 225

Math.abs(-4.7); //Returns the absolute positive value
// 4.7

var hour = 19;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// "Good evening"

var hour = 16;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// "Good day"

const number = 10;
if (number > 0) {
    console.log("The number is positive");
} else if (number == 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}
// The number is positive

const num = -10;
if (num > 0) {
    console.log("The number is positive");
} else if (num == 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}
// The number is negative

const numb = 0;
if (numb > 0) {
    console.log("The number is positive");
} else if (numb == 0) {
    console.log("The number is zero");
} else {
    console.log("The number is negative");
}
//  The number is zero

function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
const nTerms = prompt('Enter the number of terms: ');

if (nTerms <= 0) {
    console.log('Enter a positive integer.');
} else {
    for (let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}
// 0
// 1
// 2
// 3

let hcf;
const numr1 = 60;
const numr2 = 72;
for (let i = 1; i <= numr1 && i <= numr2; i++) {
    if (numr1 % i == 0 && numr2 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${numr1} and ${numr2} is ${hcf}.`);
//  HCF of 60 and 72 is 12.

var str4 = "Visit Microsoft!";
var rese = str4.replace("Microsoft", "W3Schools");
console.log(rese);
// Visit W3Schools!

var time = 10;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// "Good day"

var time = 8;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// "Good morning"

var time = 30;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
// "Good evening"

const no1 = 8;
const no2 = 6;
let min = (no1 > no2) ? no1 : no2;
while (true) {
    if (min % no1 == 0 && min % no2 == 0) {
        console.log(`The LCM of ${no1} and ${no2} is ${min}`);
        break;
    }
    min++;
}
//  The LCM of 8 and 6 is 24

for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i];
}
console.log(text);
// BenzVolvoBMW

var i;
var emp = new Array();
emp[0] = "Arun";
emp[1] = "Varun";
emp[2] = "John";
for (i = 0; i < emp.length; i++) {
    console.log(emp[i]);
}
// Arun
// Varun
// John

var x = 5;
var y = 2;
var z = x / y;
console.log(z);
// 2.5

var x = 5;
var y = 2;
var z = x * y;
console.log(z);
// 10

var x = 8;
var y = 4;
var z = x % y;
console.log(z);
// 0

var x = 9;
var y = 2;
var z = x % y;
console.log(z);
// 1

var x = 5;
x++;
var z = x;
console.log(z);
// 6

var x = 5;
var z = x ** 2;
console.log(z);
// 25

var x = "Volvo" + 16 + 4;
console.log(x);
// Volvo164

var x = 5;
var y = 5;
var z = 6;
(z == y)
// false

var x = 5;
var y = 5;
var z = 6;
(x == z)
// false

var x = 5;
var y = 5;
var z = 6;
(x == y)
// true

var x = 5;
var y = 5;
(x == y)
// true

var x = 5;
var y = 6;
(x == y)
// false

var x = { firstName: "John", lastName: "Doe" };
console.log(x);
// Object

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);
// 26

var txt = "Hello";
txt.split("");
console.log(txt);
// Hello

var str2 = "Visit W3Schools";
var n = str2.search(/w3schools/i);
console.log(n);
// 6

var date = new Date();
console.log(date);
// Tue Mar 23 2021 17:20:01 GMT+0530 (India Standard Time)

var day = date.getDate();
console.log(day);
// 23

var month = date.getMonth();
console.log(month);
// 3

var str2 = "HELLO WORLD";
console.log(str2.charAt(0));
// H

var year = date.getFullYear();
console.log(year);
// 2021

var car = "";
// Null or Undefined

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
// (3) ["Saab", "Volvo", "BMW"]
// 0: "Saab"
// 1: "Volvo"
// 2: "BMW"
// length: 3

let num9 = "11blue";
console.log(parseFloat(num9));
// 11

let num = 12.967;
console.log(parseInt(num));
// 12

let num5 = parseInt("1234blue");
console.log(num5);
// 1234

let num = "Hello World";
console.log(isNaN(num1));
// true

let n = 1234;
console.log(isNaN(n));
// false

let num = " ";
console.log(isNaN(num));
// false

let n = " ";
console.log(parseInt(n));
// NaN

let n1 = "3.125e7";
console.log(parseFloat(n1));
// 31250000

let age = 11;
age.toString();
// "11"

let l1 = " ";
l1.toString();
// Type Error or Undefined

function hello(name, age) {
    console.log('' + name + ' ' + age);
}
hello('', '');
// undefined

function hello(name, age) {
    console.log('' + name + ' ' + age);
}
hello('gopali', '21');
// gopali,21

var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);
// 10
// 55
// Hello5

let age = 26;
age++;
console.log(age);
// 27

let age = 25;
age--;
console.log(age);
// 24

let res1 = 5 > 3;
console.log(res1);
// true

let res2 = 3 < 2;
console.log(res2);
// false

let l1 = 26 % 5;
console.log(l1);
// 1

var x = 6;
var y = 5;
res = (x != y);
console.log(res);
// true

var str1 = "Apple, Banana, Kiwi";
var res = str1.substr(7, 6);
console.log(res);
// Banana

var x = 8;
var y = 5;
res = (x == y);
console.log(res);
// false

const kilometers = 2.2;
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);
// 2.2 kilometers is equal to 1.3670162000000001 miles.

let res = 25 / 11;
console.log(res);
// 2.27272727273

var i = 25;
if (i >= 25) {
    console.log("Greater than 25");
} else {
    console.log("Less than or equal to 25");
}
// Greater than 25

var j = 12;
var i = 10;
if (j > i) {
    console.log("Greater than");
} else {
    console.log("Lesser than");
}
// Greater than

var j = 12;
var i = 10;
if (j > i) {
    console.log("Greater than");
} else {
    console.log("Lesser than");
}
// Greater than

var j = 02;
var i = 10;
if (j > i) {
    console.log("Greater than");
} else {
    console.log("Lesser than");
}
// Lesser than

var k = 0;
do {
    k += 2;
} while (k < 10);
// 10

let a = 5;
while (a < 10) {
    a += 2;
}
// 11

let count = 8;
for (let k = 0; k < count; k++) {
    console.log(k);
}
// 0
// 1
// 2 
// 3
// 4
// 5
// 6
// 7

let p = [1, 2, 3, 4];
for (const el in p) {
    console.log(el);
}
// 0
// 1
// 2
// 3

const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum); // adding two numbers
// The sum of 5 and 3 is: 8

const number1 = 2.25;
const number2 = -4;
const number3 = 'hello';

const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
const result3 = Math.sqrt(number3);

console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);
// The square root of 2.25 is 1.5
// The square root of -4 is NaN
// The square root of hello is NaN

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(`The value of a after swapping: ${a}`); //swap two variables
console.log(`The value of b after swapping: ${b}`);
// The value of a after swapping: 20
// The value of b after swapping: 10

const arr = ['work', 'exercise', 'eat'];
arr[3] = 'hello';
console.log(arr);
// (4) ["work", "exercise", "eat", "hello"]
// 0: "work"
// 1: "exercise"
// 2: "eat"
// 3: "hello"
// length: 4

var g = 20;
switch (g > 25) {
    case 'equal':
        console.log("Equal to 25");
        break;
    case 'greater':
        console.log("Greater than 25");
        break;
    case 'lesser':
        console.log("Lesser than 25");
        break;
    default:
        console.log("invalid");
}
// invalid

var s1 = "JavaScript toUpperCase Example";
var s2 = s1.toUpperCase();
console.log(s2);
// JAVASCRIPT TOUPPERCASE EXAMPLE

var s1 = "JavaScript toLowerCase Example";
var s2 = s1.toLowerCase();
console.log(s2);
// javascript tolowercase example

var s1 = "javascript from javatpoint indexof";
var n = s1.lastIndexOf("java");
console.log(n);
// 16

var s1 = "javascript from javatpoint indexof";
var n = s1.indexOf("from");
console.log(n);
// 11

var s1 = "     javascript trim    ";
var s2 = s1.trim();
console.log(s2);
// javascript trim

let s = "nicholas";
console.log(typeof s);
// String

let u;
console.log(typeof u);
// undefined

let b = true;
console.log(typeof b);
// Boolean

let i = 22;
console.log(typeof i);
// number

let n = null;
console.log(typeof n);
// object

let stringValue = "Hello World";
console.log(stringValue.indexOf("o"));
// 4

let stringValue = "Hello World";
console.log(stringValue.indexOf("l"));
// 2

let stringValue = "Hello World";
console.log(stringValue.indexOf("w"));
// -1

let stringValue = "Hello World";
console.log(stringValue.indexOf("W"));
// 6

let stringValue = "Hello World";
console.log(stringValue.indexOf("r"));
// 8

var d = new Date();
console.log(d);
// Mon Mar 08 2021 10:08:55 GMT+0530 (India Standard Time)

let stringValue = "Hello World";
console.log(stringValue.lastIndexOf("o"));
// 7

let msg = "foobarbaz";
console.log(msg.startsWith('foo'));
// true

let msg = "foobarbaz";
console.log(msg.startsWith('bar'));
// false

let msg = "foobarbaz";
console.log(msg.endsWith('bar'));
// false

let msg = "foobarbaz";
console.log(msg.endsWith('baz'));
// true

let msg = "foobarbaz";
console.log(msg.includes('baz'));
// true

let msg = "foobarbaz";
console.log(msg.includes('oba'));
// true

let msg = "foobarbaz";
console.log(msg.includes('bba'));
// false

let stringValue = "   hello world   ";
let trimmedValue = stringValue.trim();
console.log(stringValue); //    hello world  (print with whitespaces in both sides)
console.log(trimmedValue); // hello world (Removes Whitespaces in both sides of the string)
// "   hello world   "
// hello world

let str = "foo";
console.log(str.padStart(6));
//      foo

let str = "foo";
console.log(str.padStart(9, "."));
// ......foo

let str = "foo";
console.log(str.padEnd(6, "."));
// foo...

let str = "foo";
console.log(str.padEnd(6, "bar"));
// foobar

let str = "foo";
console.log(str.padStart(9, "bar"));
// barbarfoo

let str = "hello world";
console.log(str.toUpperCase());
// HELLO WORLD

let str = "HELLO WORLD";
console.log(str.toLowerCase());
// hello world

let text = "cat, bat, mat ,fat, sat";
let pos = text.search(/at/);
console.log(pos);
// 1

let text = "cat, bat, mat ,fat, sat";
let pos = text.search("ba");
console.log(pos);
// 5

let res = text.replace("at", "ond");
console.log(res);
// "cond, bat, mat , fat ,sat"

let stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1

let max = Math.max(3, 5, 99, 24, 26);
console.log(max);
// 99

let min = Math.min(3, 5, 99, 24, 26);
console.log(min);
// 3

console.log(Math.ceil(25.9)); // 26
console.log(Math.round(25.1)); // 25
console.log(Math.round(25.9)); // 26
console.log(Math.fround(25.1)); // 25.100000381469727

let str = "foo";
console.log(str.padEnd(9, "*"));
// foo******

let str = "foo";
console.log(str.padStart(6, "^"));
// ^^^foo

var d = new Date();
console.log(d);
// Mon Mar 08 2021 15:52:22 GMT+0530 (India Standard Time)

let person = new Object();
person.name = "Nicholas";
person.age = 29;
console.log(person.name);
// Nicholas

let person = new Object();
person.name = "Nicholas";
person.age = 29;
console.log(person.age);
// 29

let colors = ["blue", "red", "green"];
console.log(colors);
//(3) ["blue", "red", "green"]
// 0: "blue"
// 1: "red"
// 2: "green"


let colors = ["blue", "red", "green"];
console.log(colors.length);
// 3

let colors = ["blue", "red", "green"];
console.log(colors[1]);
// red

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits);
// (4) ["Banana", "Orange", "Kiwi", "Kiwi"]
// 0: "Banana"
// 1: "Orange"
// 2: "Kiwi"
// 3: "Kiwi"

console.log(fruits.length);
// length: 4

var ints = [2, 4, 8, 6, 1, 3];
ints.copyWithin(3, 0, 2);
console.log(ints);
//(6) [2, 4, 8, 2, 4, 3]
// 0: 2
// 1: 4
// 2: 8
// 3: 2
// 4: 4
// 5: 3
// length: 6

var ints = [2, 4, 8, 6, 1, 3];
ints.copyWithin(4, 0, 3);
console.log(ints);

// (6) [2, 4, 8, 6, 2, 4]
// 0: 2
// 1: 4
// 2: 8
// 3: 6
// 4: 2
// 5: 4
// length: 6

let colors = new Array();
let h = colors.push("red", "green");
console.log(h); // 2
console.log(colors); // ["red", "green"]

colors.push("black", "white");
console.log(colors);
// ["red", "green", "black", "white"]

colors.pop();
console.log(colors);
// ["red", "green", "black"]

let col = new Array();
let p = col.push("brown", "black", "green", "red", "white");
console.log(col);
// ["brown", "black", "green", "red", "white"]

colo.unshift("yellow");
console.log(colo);
// ["yellow", "green", "black", "blue"]

let values = [1, 2, 3, 4, 5];
values.reverse(); // Reversing the values
console.log(values);
// [5, 4, 3, 2, 1]

let val = [25, 35, 2, 99, 5, 75, 12];
val.sort();
console.log(val);
//(7) [12, 2, 25, 35, 5, 75, 99]
// 0: 12
// 1: 2
// 2: 25
// 3: 35
// 4: 5
// 5: 75
// 6: 99
// length: 7

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai); // Concating the values
console.log(children);
//(6) ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"]
// 0: "Cecilie"
// 1: "Lone"
// 2: "Emil"
// 3: "Tobias"
// 4: "Linus"
// 5: "Robin"
// length: 6

let colo = new Array();
let cd = colo.push("red", "green", "black", "blue");
colo.sort();
console.log(colo);
//(4) ["black", "blue", "green", "red"]
// 0: "black"
// 1: "blue"
// 2: "green"
// 3: "red"
// length: 4

var he = ["Cec", "Lone"];
var st = ["Emil", "Tobias", "Linus"];
var ch = he.concat(st);
ch.sort(); // Sorting the values
console.log(ch);
//(5) ["Cec", "Emil", "Linus", "Lone", "Tobias"]
// 0: "Cec"
// 1: "Emil"
// 2: "Linus"
// 3: "Lone"
// 4: "Tobias"
// length: 5

var he = ["Cec", "Lone"];
var st = ["Emil", "Tobias", "Linus"];
var ch = he.concat(st);
ch.unshift("lewis");
console.log(ch);
//(6) ["lewis", "Cec", "Lone", "Emil", "Tobias", "Linus"]
// 0: "lewis"
// 1: "Cec"
// 2: "Lone"
// 3: "Emil"
// 4: "Tobias"
// 5: "Linus"
// length: 6

let vl = [1, 2, 3, 4, 5, 6];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let su = vl.reduce(reducer);
console.log(su);
// 21

let vl = [10, 20, 30, 40, 50, 60];
const reduc = (accumulator, currentValue) => accumulator + currentValue;
let su = vl.reduce(reduc);
console.log(su);
// 210

const buf = new ArrayBuffer(16);
console.log(buf.byteLength);
// 16

console.log(5 + 6);
// 11

var x, y, z;
x = 5;
y = 6;
z = x + y;
// 11

var a, b, c;
a = 7;
b = 6;
c = a + b;
// 13

var x;
x = 6;
// 6

console.log((5 + 6) * 10);
// 110

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
console.log(lastname);
// "Peterson"

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
console.log(lastName);
// "Doe"

var price1 = 9;
var price2 = 8;
var total = price1 + price2;
console.log(total);
// 17

let pers = new Object();
pers.name = "Nicholas";
pers.age = 26;
pers.job = "software engineer";
console.log(pers.age); // 26
console.log(pers.name); // Nicholas
console.log(pers.job); // software engineer

function createPerson(name, age, job) {
    let o = new Object();
    o.name = "Ravi";
    o.age = 26;
}
console.log(o.name);

let vl = [25, 50, 75, 100, 125, 150];
const red = (accumulator, currentValue) => accumulator + currentValue;
let su = vl.reduce(red);
console.log(su);
// 525

let text = "cat, bat, mat ,fat, sat";
let pos = text.search("sa");
console.log(pos);
//20

let n = "Hellooo";
console.log(isNaN(n));
// true

let vl = [25, 55, 75, 105, 125, 155];
const re = (accumulator, currentValue) => accumulator + currentValue;
let su = vl.reduce(re);
console.log(su);
// 540

let n1 = "3.125e7";
console.log(parseFloat(n1));
// 31250000

const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true;
// true

let colors = new Array();
let h = colors.push("red", "green");
colors.pop(); // green will be deleted(pop)
colors.push("black", "brown", "orange", "yellow");
console.log(h); //5
console.log(colors);
// ["red", "black", "brown", "orange", "yellow"]
// 0: "red"
// 1: "black"
// 2: "brown"
// 3: "orange"
// 4: "yellow"

var x = 9.656;
x.toFixed(0);
// "10"

var x = 9.656;
x.toExponential(2);
// "9.66e+0"

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
// "Wednesday"

let mn = ["white", "brown", "black"];
console.log(mn);
//(3) ["white", "brown", "black"]

mn.unshift("orange", "yellow");
console.log(mn);
//(5) ["orange", "yellow", "white", "brown", "black"]

console.log(mn.sort());
//(4) ["black", "brown", "white", "yellow"]
// 0: "yellow"
// 1: "white"
// 2: "brown"
// 3: "black"

console.log(mn.reverse());
//(4) ["yellow", "white", "brown", "black"]
// 0: "yellow"
// 1: "white"
// 2: "brown"
// 3: "black"

console.log(mn.length);
// length: 4

let num5 = parseFloat("12");
console.log(num5);
// 12

class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

// Declaring class
class Employeee {
    // Initializing an Object
    constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        // Declaring Method
    Detail() {
        document.writeln("id " + id);
    }
}
// Passing Object to a Variable
var e1 = new Employeee(101, "Roy");
var e2 = new Employeee(102, "Duke");
el.detail();


// Object Literals
emp = { id: 102, name: "Duke", salary: 40000 };
console.log(emp.id + " " + emp.name + " " + emp.salary);

// 102 Duke 40000


// Instance Of Object
var emp1 = new Object();
emp1.id = 101;
emp1.name = "Ravi Malik";
emp1.salary = 50000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

// 101 Ravi Malik 50000


// Instance Of Object
var emp1 = new Object();
emp1.id = 101;
emp1.name = "Ravi";
emp1.salary = 50000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);
emp1.id = 102;
emp1.name = "Malik";
emp1.salary = 55000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

// 101 Ravi 50000
// 102 Malik 55000


// Instance Of Objects
var emp1 = new Object();
emp1.id = 101;
emp1.name = "Ravi";
emp1.salary = 50000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

emp1.id = 102;
emp1.name = "Malik";
emp1.salary = 55000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

emp1.id = 103;
emp1.name = "lucky";
emp1.salary = 35000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

emp1.id = 104;
emp1.name = "karan";
emp1.salary = 25000;
console.log(emp1.id + " " + emp1.name + " " + emp1.salary);

// 101 Ravi 50000
// 102 Malik 55000
// 103 lucky 35000
// 104 karan 25000

console.log(Math.fround(25.1));
// 25.100000381469727

console.log(Math.fround(25.9));
// 25.899999618530273