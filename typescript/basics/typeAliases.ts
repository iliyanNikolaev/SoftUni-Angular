type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCard?: string
}

const myUser: User = {
    _id: Date.now().toString(),
    name: 'ilich',
    email: 'ilichviva@gmail.com',
    isActive: true
} 