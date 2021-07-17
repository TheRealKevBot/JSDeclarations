// Declarations in JavaScript
// A beginner’s guide to declaring variables 

// Format: 
// declaration     name     =     value/data 

// var

console.log('Var Example')

var a = 10;
console.log('var initial value:', a)

if (a === 10){
    var a = a + 10;
    // a = a + 10;
    // var a = 20;
    // a = 20;
    console.log('var in an if statement:', a)
}

console.log('var after an if statement', a)
console.log()

// let

console.log('Let Example')

let b = 10;
console.log('let initial value:', b)

if (b === 10) {
    // let b = b + 10;   // I will cause a reference error 
    // b = b + 10;
    let b = 20;
    // b = 20;
    console.log('let in an if statement:', b)
}

console.log('let after an if statement', b)
console.log()


// const

console.log('Const Example')

const c = 10;
console.log('const initial value:', c) 


if (c === 10) {
    // c = c + 10;
    // const c = c + 10;
    const c = 20;
    console.log('const in an if statement:', c)
}

console.log('const after an if statement:', c)
console.log()