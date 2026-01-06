interface User{
    firstname:string;
    lastname:string;
    email:string;
    phone?:number;
    id:string |number;
}

function getuser(user:User):string{
    return `User Details: ${user.firstname} ${user.lastname}, Email:${user.email} , Id:${user.id}`;
}

const   curruser:User={
    firstname:"John",
    lastname:"Doe",
    email:"johndoe@example.com",
    id:"abc123"
}

console.log(getuser(curruser));