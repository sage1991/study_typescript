

type MyCallback = (num:number) => void;


function twoArgFunction(num1 : number, num2:number):number {
    return num1 + num2;
}

function oneArgFunction(num1:number):void {
    console.log(num1);
}

let myFunc:Function;
let myFunc2:(num1:number, num2:number) => number;
let myFunc3:(num1:number) => void;
let myFunc4:MyCallback;

myFunc = twoArgFunction;
myFunc = oneArgFunction;

myFunc2 = twoArgFunction;
// myFunc2 = oneArgFunction;  error

// myFunc3 = twoArgFunction; error
myFunc3 = oneArgFunction;

myFunc4 = oneArgFunction;



function addAndHandle(num1:number, num2:number, callback:MyCallback) : void {
    callback(num1 + num2);
}


addAndHandle(10, 20, (result) => {
    console.log(result);
});