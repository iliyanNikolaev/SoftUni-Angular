let isExist: boolean = true;

type User = {
    name: string,
    age: number
}

const ilichUser: User = {
    name: 'ilich',
    age: 26
}

interface AnotherUser {
    firstName: string,
    id: number
}

const anotherUserList: AnotherUser[] = [
    {firstName: 'first', id: 1},
    {firstName: 'second', id: 2},
    {firstName: 'third', id: 3}
];

anotherUserList.forEach(x => {
    console.log(x.firstName, x.id);
});