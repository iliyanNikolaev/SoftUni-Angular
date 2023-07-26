// class User {
//     email: string;
//     name: string;
//     readonly city: string = 'Trastenik';
//     constructor(email: string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }

class User {
    private _isAdmin: boolean = false;
    readonly city: string = 'Trastenik';
    constructor(
        public email: string, 
        public name: string){

        }

        get sayHi(): string {
            return `${this.name} says hi!`
        }

        get isAdmin(): boolean{
            return this._isAdmin;
        }

        set setAdmin(param){
            this._isAdmin = param;
        }
}

const ilich = new User('ilich', 'ilichviva@gmail.com');

console.log(ilich.city);
ilich.setAdmin(true);
