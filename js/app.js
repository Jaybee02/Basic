// Question 1
let teamMembers = ['Ajibike Ogundipe',
 'DANIEL UDECHUKWU',
 'JOHNSON FRANCIS',
 'MADUKA CHIAMAKA',
 'ANOSIKE OBINNA',
 'CHIDINMA UDO',
 'DANIEL IKPE']
console.log(teamMembers[0]);


// Question 3

let firstName ="Ajibike"
let lastName ="Ogundipe"
let bestMovie ='Tezz'
let bestFood = "Bread and Tea"
let Complexion = "Chocolate"
let birthMonth = "April"
let State = "Lagos"
let groupName = "Demeter"
console.log("My best movie is called  "+bestMovie);


// Question 4
 var noun = ["Ajibike","Goats", "Banana","America"]
 var verb =["freak","Travel","bleat","Run", "is" ]
 var adjectives = ["intelligent", "black", "bloody", "fast","Peaceful"]

 console.log("Sentence1 = "+"Ajibike" + " is"+ " intelligent");
 console.log("Sentence2 = "+"Goats" + " Bleats");
 console.log("Sentence3 = "+"America" +" is "+ "Peaceful")
 console.log("Sentence4 = "+"Run" +" fast")
 console.log("Sentence5 = "+"Banana "+ "Freak")


//  Questtion 5

var num1= 15;
var num2 = 7;
function remainder(num1,num2){
    console.log("Remainder is "+num1 % num2);
}
remainder(num1, num2);


// Question 6

let a = 1;
let b = 5;
let c = 6;
let d = Math.sqrt(b*b - 4*a*c);


function quadratic (a,b,c,d){
    console.log("X1 "+(-b + d)/(2*a));
    console.log("X2 "+(-b - d)/(2*a));
}
quadratic(a,b,c,d);

// Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const worldBlanks = "The "+myAdjective+", brown "+myNoun +" "+myVerb+",very "+ myAdverb+".";
console.log(worldBlanks);// change this line
// only change code above this line Using the constants above, create your own sentence


// Question 8
 let r = 9;
 const PI =3.142;
 function circle(r){
    console.log("Area od circle "+Math.PI*(r*r));
 }
 circle(r);


// Question 9
/* Formular for simple interest
S.I = (P * R *T)/100;
*/
var P = 8200;
var R = 0.175;
var T = 5/2;
simpleInterest = ((P*R*T)/100);
console.log("Simple Interest  equals to " +simpleInterest);

// Question 10

let  n1 = 10;
let n2 = 4;
let result = 10 % 4;
console.log("result "+ result);

// Question 11
/**
 Body Mass
 BMI = mass/(height*height)
 height in kg 
 */

 var meritM = [78,85];
 var meritH = [1.69, 1.76]
 var nutjobM =[92, 95]
 var nutJobH =[1.95, 1.76];
 var test1 = (meritM[0] / (meritH[0] * meritH[0]));
 console.log ( "Data1 Merit " + "equals "+ test1);
 var test1a = (nutjobM[0]/(nutJobH[0] * nutJobH[0]));
 console.log ("Data1 Nutjob " + "equals " +test1a);
 var test2 = (meritM[1] / (meritH[1] * meritH[1]));
 console.log ("Data2 Merit " + "equals "+test2);
 var test2a =(nutjobM[1]/(nutJobH[1] * nutJobH[1]));
 console.log ("Data2 Nutjob " + "equals "+test2a);

 let com1 = test1 > test1a;
 console.log(com1);
 let com2 = test2 > test2a;
 console.log(com2);