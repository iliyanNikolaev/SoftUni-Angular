 interface Person {
    name: string,
    age: number,
    sayHi(): string
}

interface Person {
    city: string
}


const myPerson: Person = {
    name: 'ilich',
    age: 25,
    sayHi: () => 'ilich says hi',
    city: 'Trastenik' 
}

console.log(myPerson.sayHi());