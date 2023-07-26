let counter = 0;

function createTodo(text: string):{text: string, id: number, isComplete: boolean}{
    return {
        text,
        id: Date.now() + ++counter,
        isComplete: false
    };
}

const examples: string[] = ['learn typescript', 'learn angular', 'make good project'];

const todos: {}[] = examples.map((todo): {} => createTodo(todo));

console.log(todos);

export {}



