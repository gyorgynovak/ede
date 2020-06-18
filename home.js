console.log("hello");
//alert("hello this is vertical guy");

//variables

var b = "smooo";
console.log(b);

var snumber = 45;
console.log(snumber);

document.getElementById("txt1").innerHTML = "Hey There";

//var age = prompt("What is your age?");

//document.getElementById("txt1").innerHTML = "Hey There " + age;

//Numbers

var num1 = 5;
var num2 = 5.7;
console.log(num2 % num1); //modus
num1++;
console.log(num1 + num2);

//functions

/*
1. create function
2. call function

*/

function funny(){
    console.log("this is obviously is a function");
}

funny();

function multi(a,b){
    return a*b;
}

console.log(multi(num1, num2));

/*function greeting(){
    var name = prompt("whats your name?");
    document.getElementById("txt1").innerHTML = "hey there, mr " + name; // string concatenation
    console.log(name);
}

greeting();

*/
//while and for loop
//while

var num = 0;
/*
while (num < 9){
    num += 1;
    console.log(num);
}*/

for (let i = 0; i < 10; i++){ //let csak a scope-ban definialja a variable-t
    console.log(i + " this is your favourite number?");
}

//ha var-t irnank, akkor kiirna 
//console.log(i); // ez pl azt irja, hogy i nem definialt valtozo


//Data types
//18 number
let yourAge = 12; //number
let yourName = 'Bob'; //string 
let name = {first: 'Jane ', last: 'Doe'}; //  object + actually this is a dicrionary
let truth = false; //boolean
let groceries = ["apple", "banana", "orange"]; //array
let random; //undefined
let nothing = null; //its value is null

//string and string methods

let fruit = "banana";
let moreFruits = "banana,apple,blackberry";  // \n new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf("a",3,6)); //ha nem talal -1-et ad eredmenyul //ha 3,6 akkor 3-tol 6-ig keresi
console.log(fruit.slice(2,5)); //kivagja, ami kell nekunk
console.log(fruit.replace("ban","123")); //kicsereli amit kell
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[3]);
console.log(fruit.split('')); //igy szetvalasztja oket karakterenkent, ha ennek mast adnank meg, mashogy valasztana
console.log(moreFruits.split(',')); //igy pl egy bemeneti stringet tudsz szavakra vagni

//arrays and array operations

let fruits = ['banana','apple','orange','pineapple'] ///way to create array
let fruits2 = new Array('b','banan','banana');
//alert(fruits[1]); //accessing a value

fruits[0] = 'pear'; //we changed the first element to pear

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods
console.log(fruits.toString()); //converts array into string with commas
console.log(fruits.join(' and ')); //amit megadsz argumentum azt teszi kozejuk
console.log(fruits, fruits.pop(), fruits); //levagja es returnoli az utolso elemet
console.log(fruits.push('arzen'), fruits); //a push hozzaadja, es returnoli a hosszat A VEGEHEZ ADJA HOZZA, az elejehez az unshift
console.log(fruits[4]);
fruits[4] = 'new fruit'; // undefined-et returnol
console.log(fruits);

fruits.shift(); //torli az elso elemet a listanak
console.log(fruits);

fruits.unshift('kiwi'); //ez lesz az elso eleme a listanak

console.log(fruits);

let vegetables = ['vegetable1','vegetable2','vegetable3']
let allGro = fruits.concat(vegetables);
console.log(allGro);

console.log(allGro.slice(1, 4)); //returnoli between a ket szam

console.log(allGro.reverse()); //egyertelmi, megforditja a listat

console.log(allGro.sort()); //ez a buzi abc-be rakja

let someNum = [33,645,856,21,34,6,879,212,21];
console.log(someNum);
console.log(someNum.sort(function(a,b){return a- b})); //emelekdobe sortolja

let emptyArray = new Array();
for(let num = 0; num < 10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);

//objects

let student = {
    first:'tere', 
    last:'fere', 
    age:25, 
    height:180,
    studentInfo: function(){
        return this.first + '\n' + this.last;
    }
};
console.log(student.first);
console.log(student.last);
student.first = "nottere";
console.log(student.first +  ' ' + student.last);
student.age++;
console.log(student.age);
console.log(student.studentInfo()); //ha function az object elementje, kell a () !!!!

//conditionals, control flows (if else)
//18 - 35 is yor target
//&& and
// || or

/*let age = prompt("what is your age again");

let status;

if ((age >= 18) && (age <= 35)){
    status = "target demo";
    console.log(status);
}
else{
    status = "not my target";
    console.log(status);
}*/

//switch statement 
// differentiate between weekdays vs. weekend
//0 - sunday
// 6 - saturday

let day = 5;

switch (day) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    default:
        text = "weekday";
} //breakelni kell, ha nem breakelsz, vegig megy az osszes case-n

console.log(text);
document.getElementById("txt1").innerHTML = text;

//what is JSON?

