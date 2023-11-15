var isExist = true;
var ilichUser = {
    name: 'ilich',
    age: 26
};
var anotherUserList = [
    { firstName: 'first', id: 1 },
    { firstName: 'second', id: 2 },
    { firstName: 'third', id: 3 }
];
anotherUserList.forEach(function (x) {
    console.log(x.firstName, x.id);
});
