interface Person{
    name:string;
    age:number;
    address?:string;
}
interface Employee extends Person{
    Id:number;
}
const employee:Employee={
    name:"jeel",
    age:20,
    Id:101
}
console.log(employee);