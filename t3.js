function getuser(user) {
    return "User Details: ".concat(user.firstname, " ").concat(user.lastname, ", Email:").concat(user.email, " , Id:").concat(user.id);
}
var curruser = {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    id: "abc123"
};
console.log(getuser(curruser));
