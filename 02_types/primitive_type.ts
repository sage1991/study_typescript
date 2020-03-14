


function add(n1:number, n2:number, showPrint:boolean, phrase:string) {
    if(showPrint) console.log(phrase + (n1 + n2));
    else return n1 + n2;
}


// type inference
const number1 = 4;
const number2 = 2.8;
const showPrint = true;
const phrase = 'result is : ';

// explicit type declaration
let explicitNumber:number;
explicitNumber = 10;

// const number1:number = 4;
// const number2:number = 2.8;
// const showPrint:boolean = true;
// const phrase:string = 'result is : ';
add(number1, number2, showPrint, phrase);
