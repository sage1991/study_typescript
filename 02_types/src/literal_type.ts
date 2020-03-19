


// literal type argument
function getRandomNumber(returnType : 'as-number' | 'as-string') {
    let randomNumber = Math.floor((Math.random() * 10) + 1);
    if(returnType === 'as-number') {
        return randomNumber;
    } else {
        return randomNumber.toString();
    }
}

// console.log(getRandomNumber('string'));  // error
console.log(getRandomNumber('as-number'));
console.log(getRandomNumber('as-string'));
