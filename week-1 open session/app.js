
//function scope

/*function add() {
    var a="here";
    console.log(a)
    function sub() {
        console.log(a)
    }
    sub() correct output
}

add()
console.log(a) this line will give reference error, var is strict to function scope*/


//global scope

/*var a=50;
let c=20;
const q=10;*/

//let , const , block scope

/*{
    var  a=50;
    console.log(a)
}

console.log(a) 
output will be 50 and 50 because var is accessible outside block scope
but not outside function scope

let b=50;
b=30; reassigned no error but with const

const q=10;
q=50 typeError assignment to constant variable */

 /* a=10;
function add() {
    b=20;
    console.log(a)
    }

add();
console.log(b); output is 10 and 20, when no keyword global by default


let arr=[1,2,3] non primitive data type
let arr2= arr;
arr[2]=1
this will change both aray because both array are referencing to same location
just like python behaviour

const arr=[1,2,3]
const arr2=arr1
arr2[2]=1
no error and output same as above



// typeof() to check datatype

accidental creation of global variable

{
    let a=b=100; accidentaly global b variable created

}
*/

// const a; syntax error no value assigned (only for const)


/*  non-values  falsey values

    undefined , null and NaN 
    
    NaN means NaN stands for "Not a Number" 
    and is a value in JavaScript used to represent an undefined 
    or unrepresentable value. 
    NaN is the result of an operation that was supposed to return a number, 
    but couldn't because of an error or undefined/empty value. 
    
    let a;
    a=0/0; this will produce is NaN

    typeof(NaN) =number datatype
    null=object datatype
    undefined=undefined datatype

    isNaN() to check if it;s NaN
    NaN==NaN =>false because different expression can cause NaN
    undefined==null =>true
    undefined===null =>false

    hoisting:
    In JavaScript, 
    Hoisting is a kind of default behavior in which all the declarations either variable declaration 
    or function declaration are moved at the top of the scope just before executing the program's code. 
    However, it can be considered an advantage because all functions and variable declarations 
    are placed to the top of their scope no matter where they are all declared anywhere in the whole program, 
    even regardless of whether they are declared global or local.

Due to the concept of hoisting in JavaScript, 
we can call a function even before we define the function definition in our program's code.

In simple words, we can say that we can use the variables and functions in JavaScript before declaring them 
because as we discussed above JavaScript compiler moves the declarations of all the variables and functions at the top of their scope 
so that there will not be an error of any kind. 
The concept of JavaScript of moving all declarations of the variables and functions to the top of their scope by compiler itself 
just before the execution of code is known as Hoisting.


 
add() //will work

function add() {
    
    console.log(a) //undefined answer no error
    //var a=10; // no error
    let a=10; // referencer error cannot access a before initialisation
    // temporal dead zone with let  and const


    
} 
learn about use strict keyword

var a;
console.log(a) is same as 

console.log(a)
var a=10; both will give undefined answer



Object.keys(obj) // to get keys of objects
Object.values(obj) // to get values f objects
Object.entries(obj) // output arrays of array key and values

const obj={name:"junaid",square:function(x) {
                                console.log(x*x)}};
                                functions within objects


console.log(obj.square()) correct methods from object


const emptyobj={}

emptyobj.key1="hello";
console.log(emptyobj.key1)

emptyobj.changekey1: function(){
                        this.key1="not hello"};
};
emptyobj.changekey1();
console.log(emotyobj.key1)

delete emptyobj.key1;
to delete key of object


let x=setInterval(function()
    {console.log("called later")},1000)
    every 1000 millisecond it will call this function

//and to terminate this
clearInterval(x)
 
let x= setTimeout(function(){
        console.log("call once")},1000)
        after 1000 milli second it is called once
 
 
//   arrow function synatx
function name(n){ //normal function //hoisting allowed
         return 2*n
         
         }
const name2 =function(n){ // functional expression //no hoisting allowed
            return 2*n}

            //arrow function
let name2=(n)=> { always in expression form 
    return 2*n }

let name2=n=>2*n; //another way
*/
//obj={a:10,2:20}
//for (const i in obj) {
    //console.log(obj[i]); output: 20,10 number key gets executed first
//}

/*arr=[1,2,3,4]
arr.map((elemt)=>{console.log(elemt)}) output:1,2,3,4 */


//class in javascript
/*
class Player {
    constructor (name,team,nation){
        this.name=name
        this.team=team
        this.nation=nation
    }

}

class Bowler extends Player {
    constructor(name,wicket,average) {
        super(name)
        this.wicket=wicket
        this.average=average
    }
}

bb= new Bowler('mirza junaid',10,20) mirzajunaid ,undefined,undefined,10,20

console.log(bb)



*/






