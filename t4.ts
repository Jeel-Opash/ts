// let message:string ="hello";
// console.log(message);


// let userNamename:string="jeel";
// console.log(userNamename);


// let userName: string = "Arjun";  
// let age: number = 25;            
// let isActive: boolean = true;    

// function greetUser(name: string, age: number): string {
//   return `Hello, ${name}! You are ${age} years old.`;
// }

// let greeting = greetUser(userName, age);
// console.log(greeting);


// class Employee{
//     salary: number = 50000;
//     printsalary(): void {
//         console.log(this.salary);
//     }
// }

// const emp = new Employee();
// emp.printsalary();


// var num1:number=1;

// function var_keyword() {
//     var num2: number = 2;
//     var num3: number = 0;
//     if (num1 + num2 == 3) {
//         num3 = 3;
//     }
//     console.log(num1);
//     console.log(num2);
//     console.log(num3);
// }

// var_keyword();



// class person{
//     name:string;
//     age:number;

//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     newfunction():string{
//         return`heelo, ${this.name} nad ia am ${this.age} years old`;
//     }
// }
// const person1=new person("Alice" ,20);
// console.log(person1.newfunction());


// Bank account
// class BankAccount{
//     accountHolder: string = "";
//     balance: number = 0;

//     constructor(accountHolder: string, inibalance: number) {
//         this.accountHolder = accountHolder;
//         this.balance = inibalance;
//     }
//     deposit(amount:number):void{
//         this.balance += amount;
//     }
//     getBalance():string{
//         return `The balance for ${this.accountHolder} is $${this.balance}`;
//     }

// }
// const account=new BankAccount("jeel",1000);
// account.deposit(100);
// console.log(account.getBalance());


// class rectrangle{
//     w : number;
//     h : number;

// constructor(w:number,h:number){
//     this.w=w;
//     this.h=h;
// }

// canc():number{
//     return this.w* this.h;
// }
// }
// const sum=new rectrangle(2,3);
// console.log(sum.canc());

// enum studentDetails {
//     name = "ABCD",
//     age = 20,
//     rollno = 12345,
//     address = "XYZ Place PQR city",
//     school_name = "ABCDEFG"
// }
// console.log(studentDetails);


// let value :string | number;
// value =190;
// console.log(value);
// value="hello";
// console.log(value);


// function dis(geeks: string | number) {
//     if (typeof geeks === "number")
//         console.log("geekis is number");
//     else if (typeof geeks === "string")
//         console.log("string");
// }
// dis(49);
// dis("rhrhr");
// dis(45);


// let value:any="helo";
// let lengthofstring:number = (value as string).length;
// console.log(lengthofstring);


type Pet={
    name:string;
    walk:()=> void;
};

type Fish={
    name:string;
    swim:()=>void;
};

let myPet:Pet |Fish={name:'Golodie', swim:()=>console.log('swimming')};
(myPet as Fish).swim();