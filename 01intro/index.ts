const isEven: boolean = true;

type User = {
    name: string,
    age: number
}

const ilichUser: User = {
    name: 'Ilich',
    age: 25
}

interface AnotherUser {
    firstName: string,
    id: number
}

let counter: number = 0;

const AnotherUserList: AnotherUser[] = [{firstName: 'ilich', id: Date.now() + ++counter}, {firstName: 'megi', id: Date.now() + ++counter}];

console.log(AnotherUserList);