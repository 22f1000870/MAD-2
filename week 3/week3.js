const numbers =[33,2,8,9]
numbers.sort(); //['2','33','8']
console.log(numbers);

numbers.sort((a,b)=>a-b); //ascending order
numbers.sort((a,b)=>b-a);//descending order
console.log(numbers) //above arrow function checks the sign if positive then shift b to left

//explained sort below
function manualSort(a,b){
    if(a<b){
        return -1
    }
    else if (a>b){
        return 1
    }
    else{
        return 0
    }
}

numbers.sort(manualSort); //same sorting like line 5 and 6
console.log(numbers);

const books=[
    {title:"Book A",year:2010},
    {title:"Book B",year:2005},
    {title:"Book C",year:2018},
]

books.sort((a,b)=>a.year-b.year)
console.log(books)

console.log(3>2>1); //false why it will compare 3>2 giving true then true>1 i.e. 1>1 which is false
console.log(false=='0');//true


let array=[1,2,3];
array[6]=9;
console.log(array[5]);// undefined

function greeting(name){
    console.log('Hello,${name}!')
}

function processUserInput(callback){

}









