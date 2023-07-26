let score: number | string = 33;


type User = {
    name: string,
    id: number
}

type Admin = {
    name: string,
    id: number,
    adminKey: string
}


let ilich: User | Admin = {
    name: 'ilich227',
    id: Date.now(),
    adminKey: (Date.now() + 1).toString() 
}

ilich = {
    name: 'ilich227',
    id: Date.now()
}

type numOrStr = number | string;

const data: numOrStr[] = [1, 3, 5, 'string'];

const data2: (number | string)[] = [1, 5, 'string'];
