function addTwo(num: number): number {
    return num + 2;
}

const sayHello = (name: string): string => {
    return `${name} says hello world!!`;
}

function consoleError(errMsg: string): void {
    console.log(errMsg);
}

function fail(errMsg: string): never{
    throw new Error(errMsg);
}