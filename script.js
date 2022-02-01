//global scope
//function scope
//block scope

//Higher Order Functions
let a = "abc";
var b = "cba";

const s = () =>
{
    console.log(a);
    console.log(b);
}
s();

const t = () =>
{
    let a1 = "abc";
    var b1 = "cba";

    console.log(a1);
    console.log(b1);
}
t();

console.log(1, a);
console.log(2, b);
// console.log(3, Window.a1);
// console.log(4, Window.b1);


//Higher Order Functions

const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if(time < 1200) {
        fn("Morning");
    }
    else if (time >= 1200 && time < 1800) {
        fn("Afternoon");
    }
    else {
        fn("Evening");
    }
}

//whichGreeting when called as a parameter here is the higher order function.
greet(1400, whichGreeting);

// const add = (num1) => {
//     return (num2) => {
//         return num1 + num2;
//     }
// }

// console.log(add(2));//returns the function in the add function. This returns a function, so it is a higher order function.
// console.log(add(2)(3));


//Activity 1
const logMessage = () => {
    console.log("Hello Code Nation");
}

const fiveTimes = (func) => {
    for (let i = 0; i < 5; i++)
    {
        func();
    }
}

fiveTimes(logMessage);

//Activity 2
let numArray = [0, 1, 2, 3, 4];
numArray = numArray.map(e => e * 3);
console.log(numArray);

//Activity 3
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}

console.log(doMaths(9)(2, add));//9 + 2 = 11
console.log(doMaths(6)(5, multiply));//6 * 5 = 30

const beginFrom20 = doMaths(20);
console.log(beginFrom20(10, subtract));//20 - 10 = 10