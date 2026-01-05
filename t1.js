//class
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var p = new person();
p.name = "jeel";
p.age = 20;
console.log(p.name);
// as alo use like "<>"
//functions 
// function cal(p:number,a:number=2){
//     return p**a;
// }
// console.log(cal(10));
//  |
// function printcode(code:string|number){
//     console.log(`code is: ${code}`);
// }
// printcode(123);
// printcode("abc");
//types of aliases and interfaces
// type CarYear=number;
// type CarName=string;
// type Car={
//     year:CarYear,
//     name:CarName,
// }
// const caryear:CarYear=2021;
// const carname:CarName="Toyoto";
// const car:Car={
//     year:caryear,
//     name:carname,
// };
// console.log(car);
// interface rectangle{
//     width:number,height:number
// }
// interface rec extends rectangle{
//     color:string
// }
// const Rec:rec={
//     width:10,
//     height:20,
//     color:"red"
// }
// console.log(Rec);
//enums: mainly =string number 
// enum direction{
//     north=123,south,east,west
// }
// console.log(direction.east);
//objects
// const person:{name:string,age:number}={
//     name:"jeel",
//     age:20
// };
// console.log(person.age);
//tuples:Readonly,namedtuple ,graph,destructuring
// let ourtuples:[number,string,boolean];
// ourtuples=[5,"jeel",true];
// ourtuples.push(10,"hello",false);
// console.log(ourtuples);
//Arrray
// let arr:number[]=[];
// arr.push(10);
// console.log(arr);
// let arr2:string[]=[];
// arr2.push("jeel");
// console.log(arr2);
//unkown
// let a:unknown=10;
// a="hello";
// a={
//     method:()=>{
//         console.log("heelo world ");
//     }
// }
//     if (typeof a==="object" && a!==null){
//         (a as {method:()=>void}).method();
//     }
//any
// let value:any=10;
// value="hello";
// value=true;
// console.log(Math.round(value));
// function add(a:number,b:number){
//     return a+b;
//     }
// console.log(add(1,2));
// const uniqueId: symbol=Symbol("id");
// const obj = {
//     [uniqueId]:42342
// };
// console.log(obj[uniqueId]);
// let InActive:boolean = true;
// let haspermissions = false;
// let fullname:string="John Doe";
// let sentance:string = `This is a sample sentance. ${fullname}`;
// console.log(sentance);
// console.log(InActive);
// console.log(haspermissions);
