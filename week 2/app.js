//console.log('1'==1); it will convert number (implicit conversion) to string then check for equality true
//console.log('1'===1); false checking without conversion
//object are like python dictionaries but key in javascript are always string

// access to object : obj.key or // obj['key']






let obj1 ={
    a:10,                                      //if a is remove all output will be NaN
    operation(x,y,n){
    
    return x**n+y + this.a;
}}
let fn= obj1.operation

console.log(fn.call(obj1,2,3,4))

// you can use ...myarr object in place of individual value
// // output 29, directly runs and gives output only difference is you don;t need array


// let obj2={
//     a:15,b:10
// }



//console.log(fn)
//console.log(fn(2,3,4)); //output NAN because fn don't have first key
//console.log(fn.bind(obj1)(2,3,4)) //now we can access first key also
//bind provides context

//console.log(fn.bind(obj2)(2,3,4)) //fn has function definition of obj1 but also has context of obj2 so output is 34
//console.log(fn.bind(obj2, 3,3)(2)) // 3 is fixed as x
//console.log(obj1.operation(2,3,4)) // even without bind correct output

//let newfn = fn.bind(obj2,2,3)

//console.log(newfn(5))
// let myarr=[1,2,3]

// function sqr(n){return n*n}
// let sqarr=myarr.map(sqr); //mapping

// console.log(sqarr)
// //apply method
// console.log(fn.apply(obj2,sqarr))
// console.log(fn.apply(obj2,[2,3,3])) // same output as line 23, no need to call



// let a=[1,2,3]
// let b=[4,5,6]

// let c=[1,2,3,b]
// let d=[1,2,3,...b]

// let fun =function(){
//     return "MJ"
// } //anonmyous function should be assigned to a variable

// fun()

// //arrow functions
// let fun1=()=>{

// }

//in callback functions we used arrow functions
// setInterval(()=>{
//     console.log("I am called")
// },5000)

// var a=10;
// let obj1 ={
//          a:10, 
//          operation:function(x,y,n){
        
//          return x**n+y + this.a;
//     }}
// console.log(obj1.operation(2,3,4)) //29 putput

// let obj2 ={
//     a:10, 
//     operation:(x,y,n)=>{
   
//     return x**n+y + this.a; //this is not valid for arrow functions
// }}
// console.log(obj2.operation(2,3,4)) //NaN
 //this is a global object in javascript document
 //try console.log(this) if there is no a in global object thrn can't use it
 //so arrow function cannot use this 

 // to use this.a in arrow function create global variable using var
 //because doing this will create a global object in 'this' object
 //if you have any number of nested arrow function still this.a will refer to global var a
//hoisting generates variable while compilation but assig value during interpretation
//variable created without keyword isn't hoiosted
//learn about join method () extra activity