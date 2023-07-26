// class User {
//     email: string;
//     name: string;
//     readonly city: string = 'Trastenik';
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'Trastenik';
    }
    return User;
}());
var ilich = new User('ilich', 'ilichviva@gmail.com');
console.log(ilich.city);
