

// const person : object = const person : {}

// object type representation
// const person : {
//   name: string;
//   age: number;
// } = {
//   name: "hyunsu",
//   age: 12,
// };


enum ROLE {
    ADMIN = 5, READ_ONLY = 4, AUTHOR = 3, GUEST = "guest"
}


const person : {
    name : string;
    age : number;
    hobbies : string[];  // array
    mytuple : [number, string];  // tuple
    role : ROLE;
} = {
    name : "kim",  // string
    age : 30,  // number
    hobbies : ['sports', 'cooking'],  // string[]
    mytuple : [2, 'author'],  // (string|number)[]
    role : ROLE.ADMIN
}

console.log(person.name);

let favoritActivities : string[];
// favoritActivities = 'hello'; -> error
favoritActivities = person.hobbies;

for(let hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
    // console.log(hobby.map()) -> error
}


// person.mytuple.push('d');  // typescript is not support this eror
// person.mytuple[1] = 2; -> error
// person.mytuple = [1, 'admin', 'd']; -> error
person.mytuple = [1, 'admin'];
console.log(person);


if(person.role == ROLE.ADMIN) {
    console.log("admin!!!");
}
