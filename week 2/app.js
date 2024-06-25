//console.log('1'==1); it will convert number (implicit conversion) to string then check for equality true
//console.log('1'===1); false checking without conversion
//object are like python dictionaries but key in javascript are always string

// access to object : obj.key or // obj['key']


let obj1 ={
    //a:10, if a is remove all output will be NaN
    operation(x,y,n){
    
    return x**n+y + this.a;
}}

let obj2={
    a:15,b:10
}

let fn= obj1.operation

//console.log(fn)
//console.log(fn(2,3,4)); //output NAN because fn don't have first key
//console.log(fn.bind(obj1)(2,3,4)) //now we can access first key also
//bind provides context

//console.log(fn.bind(obj2)(2,3,4)) //fn has function definition of obj1 but also has context of obj2 so output is 34
//console.log(fn.bind(obj2, 3,3)(2)) // 3 is fixed as x
//console.log(obj1.operation(2,3,4)) // even without bind correct output

//let newfn = fn.bind(obj2,2,3)

//console.log(newfn(5))

//apply method
console.log(fn.apply(obj2,[2,3,3])) // same output as line 23, no need to call


console.log(fn.call(obj2,2,3,3))// same output as line 23, directly runs and gives output only difference is you don;t need array

