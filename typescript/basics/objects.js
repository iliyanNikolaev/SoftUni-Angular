var counter = 0;
function createTodo(text) {
    return {
        text: text,
        id: Date.now() + ++counter,
        isComplete: false
    };
}
var examples = ['learn typescript', 'learn angular', 'make good project'];
var todos = examples.map(function (todo) { return createTodo(todo); });
console.log(todos);
