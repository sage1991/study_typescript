function combine(n1:number|string, n2:number|string) {
    let result;
    if(typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combindedAges = combine(30, 26);
const combindedName = combine(30, "hyunsu");

console.log(combindedAges);
console.log(combindedName);