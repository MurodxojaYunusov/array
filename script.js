// spread operator = ... allows an iterable such as an
//                   array on spring to be exended
//                   into superate elements
//                   (unpacks the elements)

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potetoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; 

console.log(foods);