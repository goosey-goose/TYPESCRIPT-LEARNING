"use strict";
// Declare variables for diffrent datatypes
// translate javascript code in typescript
// let course = "TypeScript"
let course = "TypeScript";
console.log("course", course); //
// let day = 3
let day = 3;
console.log("day", day); //
// let isPublic = true
let isPublic = true;
console.log("isPublic", isPublic); //
//  let nums = [1,2,3,4]
let nums = [1, 2, 3, 4];
console.log("nums", nums); //
// let strs = ["a","b","c","d"]
let strs = ["a", "b", "c", "d"];
console.log("strs", strs); //
// let set = new Set()
let set = new Set();
set.add(1);
console.log(set);
// let obj = {name:"Max"}
let obj = { name: "max" };
console.log(obj);
// let arr = [1,2,"a",[],{},true]
let arr = [1, 2, "a", [], {}, true]; // this is not recommended
console.log("mixArr", arr); //
// declare tuple for following values. Tuple means couple of types of values in an arr
// let tup = [1,"Tom"]
let tup = [1, "Tom"];
console.log("tuple", tup);
// declare Enum for following variables. Enum is group of constant variables
// const small = 1
// const medium = 2
// const large =3
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {})); // by default enum will assign value 0 to first member and increase it by one for remaining member
console.log("Enum Size", Size); //
// convet Javascript function is typescript
// function print(name){
//     return `Hello ${name}`
// }
function print(name) {
    return `Hello ${name}`;
}
console.log(print("Max"));
// Convert javascript class in typeScript
// class Cat{
//     constructor(name,age,color){
//         this.name = name
//         this.age = age
//         this.color = color
//     }
//     myCatData(){
// return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}
//  }
// }
class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    myCatData() {
        return `My cat name is ${this.name}, she is ${this.age} yr old and she is ${this.color}`;
    }
}
let c1 = new Cat("Fluffy", 2, "black & white");
console.log(c1.myCatData());
