


function generateError(message:string, code:number):never {
    throw {message : message, code : code};
    // while(true) {};
}