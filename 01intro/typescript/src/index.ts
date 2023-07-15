let username: string = 'ilich';

console.log(username);

function createPerson(name: string, age: number){
    return {
        name,
        age
    }
}

createPerson('ilich', 25);


const isOpenArray: boolean[] = [false, true];