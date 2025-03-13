//2.1.3 Primitive data types
typesArray = ["string", "number", "boolean", "bigint", "symbol", "undefined", "null"];
console.log(typesArray);

let str = "Texto";
let num = 100;
let bool = false;
let bigInt = 9007199254740991n;
let sym = Symbol("id");
let und;
let nul = null;
console.log(str, num, bool, bigInt, sym, und, nul);

console.log(typeof sym === "symbol");